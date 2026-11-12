import http from 'node:http';

let seq = 0, freezeControl = false;
const stopped = new Set(), pendingStops = new Set(), generations = new Map(), pauses = new Map(), requests = new Set(), sockets = new Set();
const records = [], attempts = new Map();
const emit = (kind, attempt = '', target = '', data = {}) => {
  const event = { event: true, seq: ++seq, kind, attempt, target, data };
  records.push(event); process.send?.(event);
};
async function checkpoint(stage, id, target, pauseAt) {
  if (stage !== pauseAt) return;
  await new Promise(resolve => {
    pauses.set(`${id}:${stage}`, resolve);
    emit(`checkpoint:${stage}`, id, target);
  });
}
function applyStop(target) {
  generations.set(target, (generations.get(target) ?? 0) + 1);
  stopped.add(target); pendingStops.delete(target);
  emit('stop-applied', '', target);
}
function allowed(target, generation = generations.get(target) ?? 0) {
  return !stopped.has(target) && !pendingStops.has(target) && generation === (generations.get(target) ?? 0);
}
function deny(id, target) { emit('denied', id, target); }

async function send(args) {
  const { id, target, port, generation = 0, pauseAt = '', mode = '', defective = false } = args;
  if (attempts.has(id)) throw new Error('attempt ID reused');
  attempts.set(id, { target, generation, state: 'reserved' });
  emit('reserved', id, target, { generation });
  await checkpoint('reserved', id, target, pauseAt);
  await checkpoint('before-check', id, target, pauseAt);
  if (!allowed(target, generation)) return deny(id, target);
  emit('checked', id, target);
  await checkpoint('before-write', id, target, pauseAt);
  // No await between this last check and request/write. This only orders THIS actor.
  if (!defective && !allowed(target, generation)) return deny(id, target);
  const req = http.request({ hostname: '127.0.0.1', port, path: '/', method: 'POST', agent: false,
    headers: { 'x-attempt': id, 'x-target': target, 'x-mode': mode, 'content-type': 'text/plain' } });
  requests.add(req);
  req.on('close', () => requests.delete(req));
  req.on('finish', () => emit('finish', id, target));
  req.on('response', res => {
    let result = '';
    res.on('data', chunk => { result += chunk.toString(); });
    res.on('end', () => {
      attempts.get(id).state = 'completed';
      emit('response', id, target, { bytes: Buffer.byteLength(result), usable: allowed(target, generation) });
    });
    res.on('error', () => emit('response-error', id, target));
  });
  req.on('error', error => {
    attempts.get(id).state = 'unknown';
    emit('unknown', id, target, { error: error.code ?? error.message });
  });
  attempts.get(id).state = 'handoff';
  emit('write-call', id, target);
  req.write('synthetic-first-', () => emit('write-callback', id, target));
  await checkpoint('mid-body', id, target, pauseAt);
  // D-01 allows this same handed-off attempt's remainder, never a new attempt.
  req.end('synthetic-last');
  emit('end-call', id, target);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://127.0.0.1');
  const target = url.searchParams.get('target') ?? '';
  const id = url.searchParams.get('id') ?? 'return';
  const pauseAt = url.searchParams.get('pause') ?? '';
  // Synthetic identity matching is a fixture, NOT real authentication.
  if (req.headers['x-test-identity'] !== target || !target) {
    res.writeHead(403); res.end('denied'); return;
  }
  if (url.pathname === '/status') {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ state: pendingStops.has(target) ? 'Pending' : stopped.has(target) ? 'Stopped' : 'Open' }));
    emit('status-returned', id, target); return;
  }
  if (!allowed(target)) { res.writeHead(423); res.end('unavailable'); emit('return-denied', id, target); return; }
  await checkpoint('before-result', id, target, pauseAt);
  const result = 'synthetic-complete-AI-result'; // buffered whole result, no partial UI stream
  emit('result-buffered', id, target);
  await checkpoint('before-return', id, target, pauseAt);
  if (!allowed(target)) { res.writeHead(423); res.end('unavailable'); emit('return-denied', id, target); return; }
  emit('return-write-call', id, target);
  res.end(result);
  emit('return-end-call', id, target);
});
server.on('connection', socket => { sockets.add(socket); socket.on('close', () => sockets.delete(socket)); });

process.on('message', async message => {
  const { rpc, command, args = {} } = message;
  try {
    let value;
    if (command === 'listen') {
      await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
      const address = server.address(); value = { address: address.address, port: address.port };
    } else if (command === 'begin') {
      if (!Number.isInteger(args.port) || args.port < 1 || args.port > 65535 || !args.id || !args.target) throw new Error('invalid send');
      void send(args).catch(error => emit('task-error', args.id, args.target, { error: String(error) }));
      value = { queued: true };
    } else if (command === 'stop') {
      if (freezeControl) { pendingStops.add(args.target); emit('stop-pending', '', args.target); value = { state: 'Pending' }; }
      else { applyStop(args.target); value = { state: 'Applied' }; }
    } else if (command === 'freeze') { freezeControl = true; value = true; }
    else if (command === 'unfreeze') {
      freezeControl = false;
      for (const target of [...pendingStops]) applyStop(target);
      value = true;
    } else if (command === 'release') {
      const key = `${args.id}:${args.stage}`, resolve = pauses.get(key);
      if (!resolve) throw new Error('unknown checkpoint');
      pauses.delete(key); resolve(); value = true;
    } else if (command === 'snapshot') value = { records, attempts: [...attempts], pending: [...pendingStops], paused: [...pauses.keys()] };
    else if (command === 'can-save') value = allowed(args.target);
    else if (command === 'shutdown') {
      for (const target of pendingStops) stopped.add(target);
      for (const a of attempts.values()) stopped.add(a.target);
      for (const req of requests) req.destroy();
      for (const socket of sockets) socket.destroy();
      server.close(); value = { paused: pauses.size };
    } else throw new Error('unknown command');
    process.send?.({ reply: rpc, value });
  } catch (e) { process.send?.({ reply: rpc, error: String(e) }); }
});
process.on('disconnect', () => {
  for (const req of requests) req.destroy();
  for (const socket of sockets) socket.destroy();
  server.close(); process.exit(0);
});
