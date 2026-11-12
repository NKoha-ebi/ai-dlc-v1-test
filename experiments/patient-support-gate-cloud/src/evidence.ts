import { randomUUID } from 'node:crypto';
import type { Operation, Role, Verdict } from './contracts.ts';
export const kinds = ['Reserved', 'StopIntentObserved', 'FinalCheck', 'BodyWriteCalled', 'BodyWriteCallback', 'SenderFinish', 'ReceiverFirstBody', 'ReceiverComplete', 'StopAck', 'OldRouteDenied', 'ExecutorExitObserved', 'UnknownOutcome'] as const;
export type Kind = typeof kinds[number];
export interface Event {
  eventId: string; deploymentId: string; environmentId: string; serviceRole: Role; revision: string;
  executorBootId: string; targetRef: string; operationId: string; attemptId: string;
  controlGeneration: number; kind: Kind; processSequence: number; causeEventId: string | null;
  observedAt: string; byteCount?: number;
}
export class Evidence {
  readonly events: Event[] = [];
  readonly boot = randomUUID();
  readonly context: { deploymentId: string; environmentId: string; serviceRole: Role; revision: string };
  readonly output: (e: Event) => void;
  constructor(context: Evidence['context'], output: (e: Event) => void = () => {}) { this.context = context; this.output = output; }
  emit(kind: Kind, op: Operation, causeEventId: string | null = null, byteCount?: number): Event {
    // Explicit projection: caller input, request bodies and credentials cannot enter logs.
    const e: Event = { ...this.context, eventId: randomUUID(), executorBootId: this.boot,
      targetRef: op.targetRef, operationId: op.operationId, attemptId: op.attemptId,
      controlGeneration: op.generation, kind, processSequence: this.events.length + 1,
      causeEventId, observedAt: new Date().toISOString(), ...(byteCount === undefined ? {} : { byteCount }) };
    this.events.push(e); this.output(e); return e;
  }
}
export function judge(events: Event[], observedCounterexample = false): Verdict {
  if (observedCounterexample) return 'FAIL';
  // Application logs alone never prove G-01 timing or complete executor exclusion.
  void events;
  return 'PENDING';
}
export interface CutoverProof {
  inventoryComplete: boolean; oldSendDenied: boolean; oldReturnDenied: boolean;
  existingConnectionsDenied: boolean; unknownAttempts: number; bothRegionsDecided: boolean;
  independentReview: boolean; canaryReconciled: boolean;
}
export function mayOpenNew(p: CutoverProof): boolean {
  return p.inventoryComplete && p.oldSendDenied && p.oldReturnDenied && p.existingConnectionsDenied &&
    p.unknownAttempts === 0 && p.bothRegionsDecided && p.independentReview && p.canaryReconciled;
}
