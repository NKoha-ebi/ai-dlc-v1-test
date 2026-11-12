import http from 'node:http';

let seq = 0;
const records = [];
const sockets = new Set();
const active = new Map();
const emit = (kind, attempt = '', target = '', data = {}) => {
  const event = { event: true, seq: ++seq, kind, attempt, target, data };
  records.push(event); process.send?.(event);
};
const server = http.createServer((req, res) => {
  const attempt = String(req.headers['x-attempt'] ?? ''), target = String(req.headers['x-target'] ?? '');
  active.set(attempt, { req, res });
  emit('headers', attempt, target);
  if (req.headers['x-mode'] === 'pause-read') {
    req.pause();
    emit('read-paused', attempt, target);
  }
  let bytes = 0;
  req.on('data', chunk => {
    if (bytes === 0) emit('first-body', attempt, target, { bytes: chunk.length });
    bytes += chunk.length;
  });
  req.on('end', () => {
    emit('body-complete', attempt, target, { bytes });
    const mode = req.headers['x-mode'];
    if (mode === 'drop') { req.socket.destroy(); emit('response-lost', attempt, target); }
    else if (mode === 'hold') emit('response-held', attempt, target);
    else { res.end('synthetic-result'); emit('response-sent', attempt, target); }
  });
  req.on('error', () => {});
});
server.on('connection', socket => { sockets.add(socket); socket.on('close', () => sockets.delete(socket)); });
process.on('message', async message => {
  const { rpc, command, args = {} } = message;
  try {
    let value;
    if (command === 'listen') {
      await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
      const address = server.address();
      value = { port: address.port, address: address.address };
    } else if (command === 'snapshot') value = records;
    else if (command === 'release-read') {
      const item = active.get(args.attempt);
      if (!item) throw new Error('unknown request');
      item.req.resume(); value = true;
    } else if (command === 'release-response') {
      const item = active.get(args.attempt);
      if (!item) throw new Error('unknown request');
      item.res.end('synthetic-result'); emit('response-sent', args.attempt);
      value = true;
    } else if (command === 'shutdown') {
      for (const socket of sockets) socket.destroy();
      server.close(); value = { sockets: sockets.size };
    } else throw new Error('unknown command');
    process.send?.({ reply: rpc, value });
  } catch (e) { process.send?.({ reply: rpc, error: String(e) }); }
});
process.on('disconnect', () => { for (const socket of sockets) socket.destroy(); server.close(); process.exit(0); });
