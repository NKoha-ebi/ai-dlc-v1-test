import type { Repository, Transaction } from '../contracts.ts';
export class MemoryRepository implements Repository {
  private data = new Map<string, object>();
  private tail: Promise<void> = Promise.resolve();
  available = true;
  async transaction<T>(fn: (tx: Transaction) => Promise<T>): Promise<T> {
    const previous = this.tail;
    let release!: () => void;
    this.tail = new Promise<void>(r => { release = r; });
    await previous;
    try {
      if (!this.available) throw new Error('REGION_UNAVAILABLE');
      const writes = new Map<string, object>();
      let wrote = false;
      const result = await fn({
        get: async <V>(path: string) => {
          if (wrote) throw new Error('READ_AFTER_WRITE');
          return structuredClone(this.data.get(path)) as V | undefined;
        },
        set: (path, value) => { wrote = true; writes.set(path, structuredClone(value)); },
      });
      for (const [path, value] of writes) this.data.set(path, value);
      return result;
    } finally { release(); }
  }
}
