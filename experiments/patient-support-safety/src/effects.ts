import { Clock } from './clock';
import { type Event } from './contracts';
export interface Permit { id: string; target: string; generation: number; executor: string; kind: 'send' | 'return' }
interface Attempt { permit: Permit; started: boolean; complete: boolean }

export class Effects {
  readonly events: Event[] = [];
  private attempts = new Map<string, Attempt>();
  constructor(private clock: Clock, private allowed: (permit: Permit) => boolean) {}
  reserve(permit: Permit): void {
    if (this.attempts.has(permit.id)) throw new Error('attempt ID reused');
    this.attempts.set(permit.id, { permit: { ...permit }, started: false, complete: false });
    this.log('reserved', permit);
  }
  start(id: string): boolean {
    const a = this.get(id);
    if (a.started || a.complete || !this.allowed(a.permit)) return false;
    // This atomic event represents first-byte handoff, NOT a production socket fence.
    a.started = true;
    this.log('started', a.permit);
    return true;
  }
  finish(id: string): boolean {
    const a = this.get(id);
    if (!a.started || a.complete) return false;
    a.complete = true;
    this.log('completed', a.permit);
    return true; // D-01: remainder of the SAME started attempt may complete.
  }
  canUseResult(id: string): boolean {
    const a = this.get(id);
    return a.complete && this.allowed(a.permit);
  }
  private get(id: string): Attempt {
    const a = this.attempts.get(id);
    if (!a) throw new Error('unknown attempt');
    return a;
  }
  private log(kind: string, p: Permit): void {
    this.events.push({ at: this.clock.now, kind: `${p.kind}:${kind}`, target: p.target, detail: p.id });
  }
}
