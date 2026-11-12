import { createHash } from 'node:crypto';
import { authorizeTarget, operationIdentity, type Operation, type Repository, type StoredOperation, type TargetState } from '../contracts.ts';
export const digestOperation = (op: Operation) => createHash('sha256').update(operationIdentity(op)).digest('hex');
export class Writer {
  readonly repo: Repository; readonly now: () => number;
  constructor(repo: Repository, now = Date.now) { this.repo = repo; this.now = now; }
  async commit(op: Operation): Promise<StoredOperation> {
    authorizeTarget(op);
    return this.repo.transaction(async tx => {
      const state = await tx.get<TargetState>(`targets/${op.targetRef}`);
      const old = await tx.get<StoredOperation>(`operations/${op.operationId}`);
      const digest = digestOperation(op);
      if (old) {
        if (old.digest !== digest) throw new Error('OPERATION_CONFLICT');
        return old; // No new effect, and the original deadline is retained.
      }
      if (!state || state.blocked || state.generation !== op.generation) throw new Error('BLOCKED');
      if (this.now() >= op.deadline) throw new Error('EXPIRED');
      const saved: StoredOperation = { ...op, digest, status: 'Committed' };
      tx.set(`operations/${op.operationId}`, saved);
      return saved;
    });
  }
  async block(target: string, generation: number): Promise<void> {
    await this.repo.transaction(async tx => {
      const state = await tx.get<TargetState>(`targets/${target}`);
      tx.set(`targets/${target}`, { blocked: true, generation: Math.max(generation, state?.generation ?? 0) });
    });
  }
}
