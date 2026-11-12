export class BusinessStore {
  private rows = new Map<string, { generation: number; blocked: boolean; values: string[] }>();
  private row(target: string) {
    let row = this.rows.get(target);
    if (!row) { row = { generation: 0, blocked: false, values: [] }; this.rows.set(target, row); }
    return row;
  }
  stop(target: string, generation: number): void {
    const row = this.row(target);
    row.generation = Math.max(row.generation, generation);
    row.blocked = true;
  }
  blocked(target: string): boolean { return this.row(target).blocked; }
  generation(target: string): number { return this.row(target).generation; }
  /** Single synchronous operation models a same-DB transaction only. */
  commit(target: string, generation: number, value: string): boolean {
    const row = this.row(target);
    if (row.blocked || row.generation !== generation) return false;
    row.values.push(value);
    return true;
  }
  values(target: string): readonly string[] { return [...this.row(target).values]; }
}
