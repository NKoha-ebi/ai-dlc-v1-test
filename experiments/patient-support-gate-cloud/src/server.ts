import { createServer, type IncomingMessage, type Server } from 'node:http';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { loadConfig, type Config } from './config.ts';
import { authorizeTarget, parseOperation, type Repository, type Role } from './contracts.ts';
import { Evidence } from './evidence.ts';
import { MemoryRepository } from './repositories/memory.ts';
import { FirestoreRepository } from './repositories/firestore.ts';
import { Writer } from './roles/writer.ts';
import { Coordinator } from './roles/coordinator.ts';
import { send, type GateHooks } from './roles/final-send.ts';
import { prepareReturn } from './roles/entry-return.ts';
import { receive } from './roles/test-sink.ts';
import { business } from './roles/business.ts';
import { caller } from './transport.ts';
const allowed: Record<string, Role[]> = {
  'writer:/commit': ['business'], 'writer:/block': ['safety-coordinator'],
  'business:/work': ['entry-return'], 'safety-coordinator:/stop': ['entry-return'],
  'final-send:/send': ['business'], 'entry-return:/return': ['business'],
  'test-sink:/receive': ['final-send'],
};
async function json(req: IncomingMessage): Promise<unknown> {
  let bytes = 0; const chunks: Buffer[] = [];
  for await (const chunk of req) { bytes += Buffer.byteLength(chunk); if (bytes > 16384) throw new Error('BODY_LIMIT'); chunks.push(Buffer.from(chunk)); }
  return JSON.parse(Buffer.concat(chunks).toString());
}
export function makeServer(config: Config, options: { repo?: Repository; osaka?: Repository; evidence?: Evidence; hooks?: GateHooks } = {}): { server: Server; evidence: Evidence } {
  const c = loadConfig(config);
  const repo = options.repo ?? (c.mode === 'local' ? new MemoryRepository() : new FirestoreRepository(c.projectId!, c.databaseId!));
  const osaka = options.osaka ?? (c.mode === 'local' ? new MemoryRepository() : c.role === 'safety-coordinator' ? new FirestoreRepository(c.projectId!, c.osakaDatabaseId!) : repo);
  const writer = new Writer(repo), coordinator = new Coordinator(repo, osaka);
  const evidence = options.evidence ?? new Evidence({ deploymentId: c.deploymentId, environmentId: c.environmentId, serviceRole: c.role, revision: c.revision });
  // All gates start closed. Tests inject controlled state only in local mode.
  if (c.mode === 'cloud' && (options.repo || options.osaka || options.hooks)) throw new Error('CLOUD_OVERRIDE_DENIED');
  const hooks = options.hooks ?? { allowed: () => false };
  const server = createServer(async (req, res) => {
    res.setHeader('cache-control', 'no-store');
    try {
      if (req.url === '/health' && req.method === 'GET') { res.end('{"status":"alive"}'); return; }
      const who = await caller(c, req.headers.authorization);
      if (req.url === '/status') { res.end('{"status":"Pending"}'); return; }
      const permitted = allowed[`${c.role}:${req.url}`];
      if (req.method !== 'POST' || !permitted?.includes(who)) { res.writeHead(403).end('{"status":"Denied"}'); return; }
      if (c.role === 'test-sink') { res.end(JSON.stringify(await receive(req, evidence))); return; }
      const raw = await json(req);
      if (raw && typeof raw === 'object' && ['url', 'destination', 'redirect'].some(k => k in raw)) throw new Error('ARBITRARY_URL_DENIED');
      const op = parseOperation(raw);
      authorizeTarget(op);
      if (c.role === 'final-send' || c.role === 'entry-return') {
        // Reserve once. Timeout, missing receipt or crash never authorizes an automatic resend.
        await repo.transaction(async tx => {
          if (await tx.get(`attempts/${op.operationId}`)) throw new Error('ATTEMPT_OUTCOME_UNKNOWN');
          tx.set(`attempts/${op.operationId}`, { operationId: op.operationId, deadline: op.deadline, status: 'Reserved' });
        });
      }
      let result: unknown;
      if (c.role === 'writer') {
        if (req.url === '/block') { await writer.block(op.targetRef, op.generation); result = { status: 'BlockedInBusinessDB' }; }
        else { await writer.commit(op); result = { status: 'Committed' }; }
      } else if (c.role === 'safety-coordinator') {
        const intent = evidence.emit('StopIntentObserved', op);
        // Writer endpoint is fixed; never transact across the two databases.
        const status = await coordinator.stop(op, async () => {
          const base = c.urls.writer;
          if (!base) throw new Error('WRITER_REQUIRED');
          const { headers } = await import('./transport.ts');
          const r = await fetch(new URL('/block', base), { method: 'POST', headers: { ...await headers(c, 'writer'), 'content-type': 'application/json' }, body: JSON.stringify(op), redirect: 'error', signal: AbortSignal.timeout(5000) });
          if (!r.ok) throw new Error('BLOCK_UNCONFIRMED');
        });
        evidence.emit('UnknownOutcome', op, intent.eventId);
        result = { status: 'Pending', ledgerStatus: status };
      } else if (c.role === 'business') result = await business(c, op);
      else if (c.role === 'final-send') result = { status: await send(c, evidence, op, hooks) };
      else {
        const body = await prepareReturn(c, evidence, op, hooks);
        if (!body) result = { status: 'Pending' };
        else { res.setHeader('content-type', 'application/octet-stream'); res.end(body); return; }
      }
      res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(result));
    } catch { if (!res.headersSent) res.writeHead(409); res.end('{"status":"PendingOrDenied"}'); }
  });
  server.requestTimeout = 7000; server.headersTimeout = 5000;
  return { server, evidence };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (!process.env.GATE_CONFIG) throw new Error('GATE_CONFIG_REQUIRED');
  const c = loadConfig(JSON.parse(readFileSync(process.env.GATE_CONFIG, 'utf8')));
  const evidence = new Evidence({ deploymentId: c.deploymentId, environmentId: c.environmentId, serviceRole: c.role, revision: c.revision }, e => process.stdout.write(`${JSON.stringify(e)}\n`));
  makeServer(c, { evidence }).server.listen(c.port, c.mode === 'local' ? '127.0.0.1' : '0.0.0.0');
}
