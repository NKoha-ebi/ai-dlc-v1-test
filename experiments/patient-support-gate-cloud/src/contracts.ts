export const roles = ['entry-return', 'business', 'writer', 'safety-coordinator', 'final-send', 'test-sink'] as const;
export type Role = typeof roles[number];
export type Verdict = 'FAIL' | 'PENDING' | 'PASS_WITHIN_SCOPE';
export interface Operation {
  targetRef: string; operationId: string; attemptId: string; generation: number;
  deadline: number; subject: string; purpose: 'synthetic'; consent: true;
}
export interface StoredOperation extends Operation { digest: string; status: 'Committed' | 'Prepare' | 'Decision' }
export interface TargetState { blocked: boolean; generation: number }
export interface Transaction {
  get<T>(path: string): Promise<T | undefined>;
  set(path: string, value: object): void;
}
export interface Repository { transaction<T>(fn: (tx: Transaction) => Promise<T>): Promise<T> }
export function parseOperation(input: unknown): Operation {
  if (!input || typeof input !== 'object') throw new Error('INVALID_OPERATION');
  const x = input as Record<string, unknown>;
  const id = (key: string) => {
    const v = x[key];
    if (typeof v !== 'string' || !/^[a-zA-Z0-9_-]{1,96}$/.test(v)) throw new Error('INVALID_ID');
    return v;
  };
  if (!Number.isSafeInteger(x.generation) || Number(x.generation) < 1 ||
      !Number.isSafeInteger(x.deadline) || Number(x.deadline) < 0 ||
      x.purpose !== 'synthetic' || x.consent !== true) throw new Error('INVALID_OPERATION');
  return { targetRef: id('targetRef'), operationId: id('operationId'), attemptId: id('attemptId'),
    generation: Number(x.generation), deadline: Number(x.deadline), subject: id('subject'), purpose: 'synthetic', consent: true };
}
export function authorizeTarget(op: Operation): void {
  if (op.subject !== op.targetRef) throw new Error('TARGET_DENIED');
}
export function operationIdentity(op: Operation): string {
  // attemptId is deliberately excluded: retry may have a new transport attempt.
  return JSON.stringify([op.targetRef, op.operationId, op.generation, op.deadline, op.subject, op.purpose, op.consent]);
}
