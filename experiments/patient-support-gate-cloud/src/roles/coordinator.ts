import type { Operation, Repository, StoredOperation } from '../contracts.ts';
import { authorizeTarget } from '../contracts.ts';
import { digestOperation } from './writer.ts';
export class Coordinator {
  readonly tokyo: Repository; readonly osaka: Repository;
  constructor(tokyo: Repository, osaka: Repository) { this.tokyo = tokyo; this.osaka = osaka; }
  private async record(repo: Repository, op: Operation, status: 'Prepare' | 'Decision'): Promise<void> {
    await repo.transaction(async tx => {
      const old = await tx.get<StoredOperation>(`intents/${op.operationId}`);
      if (old && old.digest !== digestOperation(op)) throw new Error('OPERATION_CONFLICT');
      if (!old || old.status !== 'Decision') tx.set(`intents/${op.operationId}`, { ...op, digest: digestOperation(op), status });
    });
  }
  async stop(op: Operation, applyBusinessBlock: () => Promise<void>): Promise<'Decided' | 'Pending'> {
    authorizeTarget(op);
    try {
      await this.record(this.tokyo, op, 'Prepare');
      await this.record(this.osaka, op, 'Prepare');
      await applyBusinessBlock();
      await this.record(this.tokyo, op, 'Decision');
      await this.record(this.osaka, op, 'Decision');
      return 'Decided'; // Ledger result only: never means all executors are blocked.
    } catch { return 'Pending'; }
  }
  async reconcile(op: Operation): Promise<'Decided' | 'Pending'> {
    try {
      const read = (r: Repository) => r.transaction(tx => tx.get<StoredOperation>(`intents/${op.operationId}`));
      const t = await read(this.tokyo), o = await read(this.osaka);
      return t?.status === 'Decision' && o?.status === 'Decision' && t.digest === digestOperation(op) && o.digest === t.digest ? 'Decided' : 'Pending';
    } catch { return 'Pending'; }
  }
}
