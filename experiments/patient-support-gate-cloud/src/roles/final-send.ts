import type { Config } from '../config.ts';
import { authorizeTarget, type Operation } from '../contracts.ts';
import { Evidence } from '../evidence.ts';
import { headers } from '../transport.ts';
export interface GateHooks {
  allowed: () => boolean;
  checkpoint?: (point: 'before-check' | 'after-check' | 'after-write') => Promise<void>;
}
export async function send(c: Config, evidence: Evidence, op: Operation, hooks: GateHooks): Promise<'Received' | 'Pending'> {
  authorizeTarget(op);
  const reserve = evidence.emit('Reserved', op);
  // Cloud has no proven final fence yet. Never silently substitute local proof.
  if (c.mode === 'cloud') { evidence.emit('UnknownOutcome', op, reserve.eventId); return 'Pending'; }
  if (hooks.checkpoint && !c.faultInjection) throw new Error('FAULT_INJECTION_DISABLED');
  await hooks.checkpoint?.('before-check');
  if (Date.now() >= op.deadline || !hooks.allowed()) throw new Error('BLOCKED');
  const check = evidence.emit('FinalCheck', op, reserve.eventId);
  await hooks.checkpoint?.('after-check');
  // Deliberately expose the check/write gap for the counterexample test.
  const sink = c.urls['test-sink'];
  if (!sink) throw new Error('DESTINATION_REQUIRED');
  const write = evidence.emit('BodyWriteCalled', op, check.eventId);
  try {
    const res = await fetch(new URL('/receive', sink), { method: 'POST',
      headers: { ...await headers(c, 'test-sink'), 'content-type': 'application/octet-stream',
        'x-operation': Buffer.from(JSON.stringify(op)).toString('base64url'), 'x-cause': write.eventId },
      body: Buffer.from('synthetic-test-body'), redirect: 'error', signal: AbortSignal.timeout(3000) });
    await hooks.checkpoint?.('after-write');
    const receipt = await res.json() as { receiptEventId?: string };
    if (!res.ok || !receipt.receiptEventId) throw new Error('RECEIPT_MISSING');
    // Receipt means observed delivery, not exact G-01 timing or final exclusion.
    return 'Received';
  } catch { evidence.emit('UnknownOutcome', op, write.eventId); return 'Pending'; }
}
