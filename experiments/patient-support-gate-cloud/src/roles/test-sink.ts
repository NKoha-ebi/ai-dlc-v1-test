import type { IncomingMessage } from 'node:http';
import { parseOperation } from '../contracts.ts';
import { Evidence } from '../evidence.ts';
export async function receive(req: IncomingMessage, evidence: Evidence): Promise<{ receiptEventId: string; bytes: number }> {
  const op = parseOperation(JSON.parse(Buffer.from(String(req.headers['x-operation']), 'base64url').toString()));
  const cause = req.headers['x-cause'];
  if (typeof cause !== 'string' || !/^[0-9a-f-]{36}$/.test(cause)) throw new Error('CAUSE_REQUIRED');
  let bytes = 0, first: string | undefined;
  for await (const chunk of req) {
    bytes += Buffer.byteLength(chunk);
    if (bytes > 65536) throw new Error('BODY_LIMIT');
    if (!first) first = evidence.emit('ReceiverFirstBody', op, cause).eventId;
  }
  if (!first) throw new Error('BODY_REQUIRED');
  const done = evidence.emit('ReceiverComplete', op, first, bytes);
  return { receiptEventId: done.eventId, bytes };
}
