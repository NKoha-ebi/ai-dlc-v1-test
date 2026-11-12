import { it, expect } from 'vitest';
import { harness, operation } from '../tools/harness.ts';
it('exposes the return check/write gap without treating the synthetic trial as exclusion proof', async () => {
  let open = true;
  const h = await harness({ allowed: () => open, checkpoint: async p => { if (p === 'after-check') open = false; } });
  try {
    const r = await h.request('entry-return', '/return', 'business');
    expect(open).toBe(false); expect(r.status).toBe(200); expect(await r.text()).toBe('synthetic-return-body');
  } finally { await h.close(); }
});
it('authenticated business path invokes writer and returns minimal state', async () => {
  const h = await harness();
  try { const r = await h.request('business', '/work', 'entry-return'); expect(await r.json()).toEqual({ status: 'Committed' }); }
  finally { await h.close(); }
});
it('cross-target internal requests and direct writer bypass are rejected', async () => {
  const h = await harness();
  try {
    expect((await h.request('writer', '/commit', 'business', operation({ subject: 'other' }))).status).toBe(409);
    expect((await h.request('writer', '/commit', 'entry-return')).status).toBe(403);
  } finally { await h.close(); }
});
it('unknown send outcome is never automatically resent', async () => {
  const h = await harness({ allowed: () => true }); const op = operation();
  try {
    h.config.urls['test-sink'] = 'http://127.0.0.1:1';
    const first = await h.request('final-send', '/send', 'business', op);
    expect(await first.json()).toEqual({ status: 'Pending' });
    expect((await h.request('final-send', '/send', 'business', { ...op, attemptId: 'retry' })).status).toBe(409);
  } finally { await h.close(); }
});
it('coordinator decision never reports complete old executor exclusion', async () => {
  const h = await harness();
  try {
    const r = await h.request('safety-coordinator', '/stop', 'entry-return');
    expect(await r.json()).toEqual({ status: 'Pending', ledgerStatus: 'Decided' });
    expect((await h.request('writer', '/commit', 'business')).status).toBe(409);
  } finally { await h.close(); }
});
