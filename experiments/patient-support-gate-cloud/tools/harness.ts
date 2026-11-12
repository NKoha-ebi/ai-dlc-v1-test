import { randomUUID } from 'node:crypto';
import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import { roles, type Role, type Operation, type TargetState } from '../src/contracts.ts';
import type { Config } from '../src/config.ts';
import { makeServer } from '../src/server.ts';
import { MemoryRepository } from '../src/repositories/memory.ts';
import type { GateHooks } from '../src/roles/final-send.ts';
export const operation = (patch: Partial<Operation> = {}): Operation => ({
  targetRef: 'synthetic-1', subject: 'synthetic-1', operationId: randomUUID(), attemptId: randomUUID(),
  generation: 1, deadline: Date.now() + 60000, purpose: 'synthetic', consent: true, ...patch,
});
export async function harness(hooks?: GateHooks) {
  const repo = new MemoryRepository(), tokyo = new MemoryRepository(), osaka = new MemoryRepository();
  await repo.transaction(async tx => tx.set('targets/synthetic-1', { blocked: false, generation: 1 } satisfies TargetState));
  const tokens = Object.fromEntries(roles.map(r => [r, randomUUID()]));
  const urls: Config['urls'] = {};
  const servers: Server[] = [];
  const evidence: ReturnType<typeof makeServer>['evidence'][] = [];
  const config: Config = { mode: 'local', role: 'business', environmentId: 'gate-check-local', deploymentId: 'local-only', revision: 'local', synthetic: true, faultInjection: true, port: 0, urls, localTokens: tokens };
  try {
    for (const role of roles) {
      const s = makeServer({ ...config, role }, { repo: role === 'safety-coordinator' ? tokyo : repo, osaka, hooks });
      servers.push(s.server); evidence.push(s.evidence);
      await new Promise<void>((resolve, reject) => { s.server.once('error', reject); s.server.listen(0, '127.0.0.1', resolve); });
      urls[role] = `http://127.0.0.1:${(s.server.address() as AddressInfo).port}`;
    }
  } catch (e) { for (const s of servers) { s.closeAllConnections(); s.close(); } throw e; }
  return { repo, tokyo, osaka, config, evidence,
    request: async (to: Role, path: string, from: Role, body: unknown = operation()) => fetch(new URL(path, urls[to]), {
      method: 'POST', headers: { authorization: `Bearer ${tokens[from]}`, 'content-type': 'application/json' },
      body: JSON.stringify(body), redirect: 'error', signal: AbortSignal.timeout(6000),
    }),
    close: async () => { await Promise.all(servers.map(s => new Promise<void>((resolve, reject) => {
      s.closeAllConnections(); s.close(e => e ? reject(e) : resolve());
    }))); },
  };
}
