/** Explicit pauses permit deterministic interleavings; no real timers or sockets. */
export class Scheduler {
  private tasks = new Map<string, () => void>();
  pause(id: string, task: () => void): void {
    if (this.tasks.has(id)) throw new Error('duplicate paused task');
    this.tasks.set(id, task);
  }
  resume(id: string): void {
    const task = this.tasks.get(id);
    if (!task) throw new Error('unknown task');
    this.tasks.delete(id);
    task();
  }
}
