import { Firestore } from '@google-cloud/firestore';
import type { Repository, Transaction } from '../contracts.ts';
export class FirestoreRepository implements Repository {
  readonly db: Firestore;
  constructor(projectId: string, databaseId: string) {
    if (!projectId || !databaseId) throw new Error('DATABASE_REQUIRED');
    this.db = new Firestore({ projectId, databaseId });
  }
  async transaction<T>(fn: (tx: Transaction) => Promise<T>): Promise<T> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const work = this.db.runTransaction(tx => fn({
      get: async <V>(path: string) => (await tx.get(this.db.doc(path))).data() as V | undefined,
      set: (path, value) => { tx.set(this.db.doc(path), { ...value }); },
    }), { maxAttempts: 3 });
    // Timeout is an unknown outcome, not cancellation of a possibly committed write.
    try { return await Promise.race([work, new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error('DATABASE_OUTCOME_UNKNOWN')), 5000); })]); }
    finally { clearTimeout(timer); }
  }
}
