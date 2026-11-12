import { it, expect } from 'vitest';
import { MemoryRepository } from '../src/repositories/memory.ts';
import { Writer } from '../src/roles/writer.ts';
import { Coordinator } from '../src/roles/coordinator.ts';
import { operation } from '../tools/harness.ts';
async function ready() {
  const r = new MemoryRepository(); await r.transaction(async tx => tx.set('targets/synthetic-1', { blocked: false, generation: 1 })); return r;
}
it('serializes competing block and commit; later commits are rejected', async () => {
  const r = await ready(), w = new Writer(r); const op = operation();
  const [first] = await Promise.all([w.commit(op), w.block(op.targetRef, 2)]);
  expect(first.status).toBe('Committed');
  await expect(w.commit(operation())).rejects.toThrow('BLOCKED');
  expect((await w.commit({ ...op, attemptId: 'retry' })).deadline).toBe(op.deadline);
});
it('rejects deadline extension or operation ID reuse for another target', async () => {
  const w = new Writer(await ready()); const op = operation(); await w.commit(op);
  await expect(w.commit({ ...op, deadline: op.deadline + 1 })).rejects.toThrow('CONFLICT');
  await expect(w.commit({ ...op, targetRef: 'other', subject: 'other' })).rejects.toThrow('CONFLICT');
});
it('expired new operations never persist', async () => {
  const w = new Writer(await ready(), () => 50);
  await expect(w.commit(operation({ deadline: 50 }))).rejects.toThrow('EXPIRED');
});
it('preserves Prepare and original deadline after second-region failure', async () => {
  const t = new MemoryRepository(), o = new MemoryRepository(), op = operation(); o.available = false;
  const c = new Coordinator(t, o);
  expect(await c.stop(op, async () => {})).toBe('Pending');
  expect(await t.transaction(tx => tx.get('intents/' + op.operationId))).toMatchObject({ status: 'Prepare', deadline: op.deadline });
  expect(await c.reconcile(op)).toBe('Pending');
  o.available = true;
  expect(await c.stop({ ...op, deadline: op.deadline + 1 }, async () => {})).toBe('Pending');
  expect(await c.stop(op, async () => {})).toBe('Decided'); expect(await c.reconcile(op)).toBe('Decided');
});
it('does not report two-region decision when business block failed', async () => {
  const c = new Coordinator(new MemoryRepository(), new MemoryRepository()), op = operation();
  expect(await c.stop(op, async () => { throw Error('unreachable writer'); })).toBe('Pending');
  expect(await c.reconcile(op)).toBe('Pending');
});
