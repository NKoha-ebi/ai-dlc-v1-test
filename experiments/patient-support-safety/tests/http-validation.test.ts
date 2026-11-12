import http from 'node:http';
import { mkdir, writeFile } from 'node:fs/promises';
import { afterAll, expect, it } from 'vitest';
import { withPeers, type Peer } from '../src/http-validation/harness';
import { type ChildEvent } from '../src/http-validation/protocol';

interface Address { port: number; address: string }
const traces: { scenario: string; gateway: ChildEvent[]; receiver: ChildEvent[];
  ipc: { gateway: Peer['ipc']; receiver: Peer['ipc'] }; cleanup?: { gatewayExited: boolean; receiverExited: boolean } }[] = [];
async function scenario(name: string, run: (g: Peer, r: Peer, receiver: Address) => Promise<void>) {
  let peers: { gateway: Peer; receiver: Peer } | undefined;
  let trace: (typeof traces)[number] | undefined;
  try { await withPeers(async (g, r) => {
    peers = { gateway: g, receiver: r };
    try {
      const receiver = await r.rpc<Address>('listen');
      expect(receiver.address).toBe('127.0.0.1');
      await run(g, r, receiver);
      expect(g.events.some(e => e.kind === 'task-error')).toBe(false);
    } finally {
      trace = { scenario: name, gateway: [...g.events], receiver: [...r.events], ipc: { gateway: g.ipc, receiver: r.ipc } };
      traces.push(trace);
    }
  }); } finally {
    if (trace && peers) {
      trace.cleanup = {
        gatewayExited: peers.gateway.child.exitCode !== null || peers.gateway.child.signalCode !== null,
        receiverExited: peers.receiver.child.exitCode !== null || peers.receiver.child.signalCode !== null,
      };
      expect(trace.cleanup).toEqual({ gatewayExited: true, receiverExited: true });
    }
  }
}
afterAll(async () => {
  await mkdir('artifacts', { recursive: true });
  await writeFile('artifacts/http-traces.json', JSON.stringify(traces, null, 2));
});
function get(port: number, path: string, identity = 'patient-A'): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port, path, agent: false,
      headers: { 'x-test-identity': identity } }, res => {
      let body = '';
      res.on('data', chunk => { body += chunk.toString(); });
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body }));
      res.on('error', reject);
    });
    req.setTimeout(5000, () => req.destroy(new Error('HTTP fixture timeout')));
    req.on('error', reject);
  });
}

it.each([['H-01', 'reserved'], ['H-02', 'before-check'], ['H-03', 'before-write']])('%s: stop before body handoff at %s', async (name, stage) => {
  await scenario(name!, async (g, r, receiver) => {
    await g.rpc('begin', { id: 'a', target: 'patient-A', port: receiver.port, pauseAt: stage });
    await g.wait(`checkpoint:${stage}`, 'a');
    expect(await g.rpc('stop', { target: 'patient-A' })).toEqual({ state: 'Applied' });
    await g.rpc('release', { id: 'a', stage });
    await g.wait('denied', 'a');
    const received = await r.rpc<ChildEvent[]>('snapshot');
    expect(received.filter(e => e.kind === 'first-body')).toHaveLength(0);
    expect(g.events.filter(e => e.kind === 'write-call')).toHaveLength(0);
  });
});

it('H-03 negative control: cached permission produces real body after stop', async () => {
  await scenario('H-03 defective comparison', async (g, r, receiver) => {
    await g.rpc('begin', { id: 'bad', target: 'patient-A', port: receiver.port, pauseAt: 'before-write', defective: true });
    await g.wait('checkpoint:before-write', 'bad');
    await g.rpc('stop', { target: 'patient-A' });
    await g.rpc('release', { id: 'bad', stage: 'before-write' });
    await r.wait('first-body', 'bad');
    await g.wait('response', 'bad');
    const stop = g.events.find(e => e.kind === 'stop-applied')!;
    const write = g.events.find(e => e.kind === 'write-call')!;
    expect(write.seq).toBeGreaterThan(stop.seq);
    expect(g.events.find(e => e.kind === 'response')?.data.usable).toBe(false);
  });
});

it('H-04: same started body finishes, no new attempt or result use after stop', async () => {
  await scenario('H-04', async (g, r, receiver) => {
    await g.rpc('begin', { id: 'a', target: 'patient-A', port: receiver.port, pauseAt: 'mid-body' });
    await g.wait('checkpoint:mid-body', 'a');
    await r.wait('first-body', 'a'); // causal prerequisite, not a guessed sleep
    await g.rpc('stop', { target: 'patient-A' });
    await g.rpc('release', { id: 'a', stage: 'mid-body' });
    expect((await r.wait('body-complete', 'a')).data.bytes).toBe(Buffer.byteLength('synthetic-first-synthetic-last'));
    expect((await g.wait('response', 'a')).data.usable).toBe(false);
    expect(await g.rpc('can-save', { target: 'patient-A' })).toBe(false);
    await g.rpc('begin', { id: 'retry', target: 'patient-A', port: receiver.port });
    await g.wait('denied', 'retry');
    expect((await r.rpc<ChildEvent[]>('snapshot')).filter(e => e.kind === 'first-body')).toHaveLength(1);
  });
});

it('H-05: response loss leaves unknown and does not automatically retry', async () => {
  await scenario('H-05', async (g, r, receiver) => {
    await g.rpc('begin', { id: 'a', target: 'patient-A', port: receiver.port, mode: 'drop' });
    await r.wait('body-complete', 'a');
    await r.wait('response-lost', 'a');
    await g.wait('unknown', 'a');
    expect(g.events.filter(e => e.kind === 'write-call')).toHaveLength(1);
    expect((await r.rpc<ChildEvent[]>('snapshot')).filter(e => e.kind === 'body-complete')).toHaveLength(1);
    const snapshot = await g.rpc<{ attempts: [string, { state: string }][] }>('snapshot');
    expect(snapshot.attempts[0]?.[1].state).toBe('unknown');
  });
});

it('H-05 observation: finish is not evidence of receiver body delivery', async () => {
  await scenario('H-05 paused reader', async (g, r, receiver) => {
    await g.rpc('begin', { id: 'a', target: 'patient-A', port: receiver.port, mode: 'pause-read' });
    await r.wait('read-paused', 'a');
    await g.wait('finish', 'a');
    const before = await r.rpc<ChildEvent[]>('snapshot');
    expect(before.some(e => e.kind === 'first-body')).toBe(false);
    await r.rpc('release-read', { attempt: 'a' });
    await r.wait('body-complete', 'a');
    await g.wait('response', 'a');
  });
});

it('H-06: delayed stop application stays Pending and stale actor cannot send', async () => {
  await scenario('H-06', async (g, r, receiver) => {
    await g.rpc('begin', { id: 'old', target: 'patient-A', port: receiver.port, pauseAt: 'before-write' });
    await g.wait('checkpoint:before-write', 'old');
    await g.rpc('freeze');
    expect(await g.rpc('stop', { target: 'patient-A' })).toEqual({ state: 'Pending' });
    expect(g.events.some(e => e.kind === 'stop-applied')).toBe(false);
    await g.rpc('release', { id: 'old', stage: 'before-write' });
    await g.wait('denied', 'old');
    await g.rpc('unfreeze');
    await g.wait('stop-applied');
    expect((await r.rpc<ChildEvent[]>('snapshot')).filter(e => e.kind === 'first-body')).toHaveLength(0);
  });
});

it('H-07: actual child exit does not retract already received bytes', async () => {
  await scenario('H-07', async (g, r, receiver) => {
    await g.rpc('begin', { id: 'a', target: 'patient-A', port: receiver.port, pauseAt: 'mid-body' });
    await g.wait('checkpoint:mid-body', 'a');
    const first = await r.wait('first-body', 'a');
    await g.kill(); // real child process termination, bounded wait for exit
    expect(first.data.bytes).toBeGreaterThan(0);
    expect(g.events.some(e => e.kind === 'end-call')).toBe(false);
    const records = await r.rpc<ChildEvent[]>('snapshot');
    expect(records.some(e => e.kind === 'first-body')).toBe(true);
    expect(records.some(e => e.kind === 'body-complete')).toBe(false);
  });
});

it.each(['before-result', 'before-return'])('H-08: buffered AI response is not started after stop at %s', async stage => {
  await scenario(`H-08 ${stage}`, async (g) => {
    const address = await g.rpc<Address>('listen');
    expect(address.address).toBe('127.0.0.1');
    const response = get(address.port, `/result?target=patient-A&id=ret&pause=${stage}`);
    await g.wait(`checkpoint:${stage}`, 'ret');
    await g.rpc('stop', { target: 'patient-A' });
    await g.rpc('release', { id: 'ret', stage });
    expect(await response).toEqual({ status: 423, body: 'unavailable' });
    expect(g.events.some(e => e.kind === 'return-write-call')).toBe(false);
  });
});

it('H-09: stopped target gets no patient body, status is minimal and fixture identity required', async () => {
  await scenario('H-09', async (g) => {
    const { port } = await g.rpc<Address>('listen');
    await g.rpc('stop', { target: 'patient-A' });
    expect(await get(port, '/result?target=patient-A')).toEqual({ status: 423, body: 'unavailable' });
    expect(await get(port, '/status?target=patient-A')).toEqual({ status: 200, body: '{"state":"Stopped"}' });
    expect((await get(port, '/status?target=patient-A', 'patient-B')).status).toBe(403);
    const healthy = await get(port, '/result?target=patient-B', 'patient-B');
    expect(healthy.body).toBe('synthetic-complete-AI-result');
  });
});
