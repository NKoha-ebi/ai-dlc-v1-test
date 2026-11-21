import { afterEach, expect, test, vi } from 'vitest';
import { Peer, withPeers } from '../src/http-validation/harness';

const originalClose = Peer.prototype.close;

afterEach(() => vi.restoreAllMocks());

test('returns the result and closes both peers', async () => {
  const close = vi.spyOn(Peer.prototype, 'close');
  await expect(withPeers(async () => 42)).resolves.toBe(42);
  expect(close).toHaveBeenCalledTimes(2);
});

test('preserves the original test failure', async () => {
  const original = new Error('test body failed');
  await expect(withPeers(() => { throw original; })).rejects.toBe(original);
});

test('reports a close failure when the test succeeds', async () => {
  const cleanup = new Error('cleanup failed');
  vi.spyOn(Peer.prototype, 'close').mockImplementationOnce(async function (this: Peer) {
    await originalClose.call(this);
    throw cleanup;
  });
  await expect(withPeers(async () => 42)).rejects.toBe(cleanup);
});

test('reports child diagnostics when the test succeeds', async () => {
  await expect(withPeers(async (gateway) => {
    gateway.errors.push('child diagnostic');
  })).rejects.toThrow('child diagnostic');
});

test('retains the test failure, both close failures, and child diagnostics', async () => {
  const body = new Error('test body failed');
  const closeErrors = [new Error('gateway failed'), new Error('receiver failed')];
  const close = vi.spyOn(Peer.prototype, 'close');
  for (const error of closeErrors) {
    close.mockImplementationOnce(async function (this: Peer) {
      await originalClose.call(this);
      throw error;
    });
  }
  const result = withPeers(async (gateway) => {
    gateway.errors.push('child diagnostic');
    throw body;
  });
  await expect(result).rejects.toBeInstanceOf(AggregateError);
  await expect(result).rejects.toMatchObject({
    errors: [body, ...closeErrors, expect.objectContaining({ message: 'child diagnostic' })],
  });
  expect(close).toHaveBeenCalledTimes(2);
});
