import { type Entry, type Region, type Request, regions, sameRequest, validateRequest } from './contracts';

export class Ledger {
  private data: Record<Region, Map<string, Entry>> = { tokyo: new Map(), osaka: new Map() };
  private online: Record<Region, boolean> = { tokyo: true, osaka: true };
  linked = true;
  get protected(): boolean { return this.online.tokyo && this.online.osaka && this.linked; }
  read(region: Region, id: string): Entry | undefined {
    if (!this.online[region]) return undefined;
    const entry = this.data[region].get(id);
    return entry ? { ...entry } : undefined;
  }
  write(region: Region, request: Request, phase: Entry['phase']): void {
    validateRequest(request);
    if (!this.online[region]) throw new Error('region unavailable');
    const old = this.data[region].get(request.id);
    if (old && !sameRequest(old, request)) throw new Error('operation ID conflict');
    if (phase === 'decision') {
      if (!this.protected || !regions.every(r => {
        const item = this.read(r, request.id);
        return item && sameRequest(item, request);
      })) throw new Error('both prepares required');
    }
    // Retries must not roll a Decision back to Prepare.
    this.data[region].set(request.id, { ...request, phase: old?.phase === 'decision' ? 'decision' : phase });
  }
  prepare(request: Request): void {
    if (!this.protected) throw new Error('independent protection unavailable');
    for (const region of regions) this.write(region, request, 'prepare');
  }
  decide(request: Request): void {
    for (const region of regions) this.write(region, request, 'decision');
  }
  confirmed(id: string): boolean {
    const a = this.read('tokyo', id), b = this.read('osaka', id);
    return this.protected && a?.phase === 'decision' && b?.phase === 'decision' && sameRequest(a, b);
  }
  lose(region: Region): void { this.data[region].clear(); this.online[region] = false; }
  surviving(): Entry[] {
    return regions.flatMap(r => this.online[r] ? [...this.data[r].values()].map(e => ({ ...e })) : []);
  }
  snapshot(): string {
    return JSON.stringify({ data: Object.fromEntries(regions.map(r => [r, [...this.data[r].values()]])), online: this.online, linked: this.linked });
  }
  static restore(snapshot: string): Ledger {
    const parsed = JSON.parse(snapshot) as { data: Record<Region, Entry[]>; online: Record<Region, boolean>; linked: boolean };
    const ledger = new Ledger();
    for (const r of regions) {
      for (const e of parsed.data[r]) { validateRequest(e); ledger.data[r].set(e.id, { ...e }); }
      ledger.online[r] = parsed.online[r];
    }
    ledger.linked = parsed.linked;
    return ledger;
  }
}
