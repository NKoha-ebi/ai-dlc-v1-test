import { Ledger } from './ledger';
import { type IntakeState, type Request, regions, sameRequest } from './contracts';

export class Intake {
  constructor(private ledger: Ledger) {}
  receive(request: Request): void { this.ledger.prepare(request); }
  lookup(id: string): IntakeState {
    const a = this.ledger.read('tokyo', id), b = this.ledger.read('osaka', id);
    if (this.ledger.protected && a && b && sameRequest(a, b)) return 'durable';
    return a || b ? 'pending' : 'unknown';
  }
  retry(request: Request): void {
    // A retry cannot silently change target, original timestamp, or original deadline.
    for (const region of regions) {
      const old = this.ledger.read(region, request.id);
      if (old && !sameRequest(old, request)) throw new Error('operation ID conflict');
    }
    this.receive(request);
  }
}
