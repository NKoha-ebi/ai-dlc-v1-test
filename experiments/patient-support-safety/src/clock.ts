export class Clock {
  constructor(public now = 0) {}
  advance(ms: number): void {
    if (!Number.isSafeInteger(ms) || ms < 0) throw new Error('invalid elapsed time');
    this.now += ms;
  }
}
