import type { Config } from '../config.ts';
import { authorizeTarget, type Operation } from '../contracts.ts';
import { Evidence } from '../evidence.ts';
import type { GateHooks } from './final-send.ts';
export async function prepareReturn(c: Config, evidence: Evidence, op: Operation, hooks: GateHooks): Promise<Buffer | undefined> {
  authorizeTarget(op);
  const reserve = evidence.emit('Reserved', op);
  if (c.mode === 'cloud') { evidence.emit('UnknownOutcome', op, reserve.eventId); return undefined; }
  if (hooks.checkpoint && !c.faultInjection) throw new Error('FAULT_INJECTION_DISABLED');
  await hooks.checkpoint?.('before-check');
  if (!hooks.allowed() || Date.now() >= op.deadline) throw new Error('BLOCKED');
  const check = evidence.emit('FinalCheck', op, reserve.eventId);
  await hooks.checkpoint?.('after-check');
  // One buffered response. No streaming or signed storage URL.
  evidence.emit('BodyWriteCalled', op, check.eventId);
  return Buffer.from('synthetic-return-body');
}
