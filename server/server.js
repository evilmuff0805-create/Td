#!/usr/bin/env node
// 호국영웅전 서버 — 의존성 없음 (Node 18+)
//  - 정적 파일 제공 (index.html, src/, styles/)
//  - /ws : 온라인 협동용 WebSocket 방 중계 (방 코드 4자리)
//  사용법: node server/server.js  [PORT=8080]
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = +(process.env.PORT || 8080);
const HOST = process.env.HOST || '127.0.0.1';
const MAX_PAYLOAD = 2 * 1024 * 1024;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.md': 'text/markdown; charset=utf-8',
};

// ───────────── 정적 파일 ─────────────
const server = http.createServer((req, res) => {
  let rel = decodeURIComponent((req.url || '/').split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT) || rel.includes('..') || /\/(\.|node_modules)/.test(rel)) {
    res.writeHead(403).end('forbidden');
    return;
  }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('찾을 수 없습니다');
      return;
    }
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
});

// ───────────── WebSocket ─────────────
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const rooms = new Map();
let nextClient = 1;

server.on('upgrade', (req, socket) => {
  if ((req.url || '').split('?')[0] !== '/ws' || req.headers.upgrade?.toLowerCase() !== 'websocket') {
    socket.destroy();
    return;
  }
  const key = req.headers['sec-websocket-key'];
  if (!key) {
    socket.destroy();
    return;
  }
  const accept = crypto.createHash('sha1').update(key + GUID).digest('base64');
  socket.write(
    'HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n' + `Sec-WebSocket-Accept: ${accept}\r\n\r\n`,
  );
  socket.setNoDelay(true);
  const client = { id: nextClient++, socket, buf: Buffer.alloc(0), frag: [], room: null, alive: true };
  socket.on('data', (chunk) => onData(client, chunk));
  socket.on('close', () => leave(client));
  socket.on('error', () => socket.destroy());
});

function onData(c, chunk) {
  c.buf = Buffer.concat([c.buf, chunk]);
  while (c.buf.length >= 2) {
    const b0 = c.buf[0];
    const b1 = c.buf[1];
    const fin = (b0 & 0x80) !== 0;
    const op = b0 & 0x0f;
    const masked = (b1 & 0x80) !== 0;
    let len = b1 & 0x7f;
    let off = 2;
    if (len === 126) {
      if (c.buf.length < 4) return;
      len = c.buf.readUInt16BE(2);
      off = 4;
    } else if (len === 127) {
      if (c.buf.length < 10) return;
      len = Number(c.buf.readBigUInt64BE(2));
      off = 10;
    }
    if (len > MAX_PAYLOAD) {
      c.socket.destroy();
      return;
    }
    const maskOff = off;
    if (masked) off += 4;
    if (c.buf.length < off + len) return;
    const payload = Buffer.from(c.buf.subarray(off, off + len));
    if (masked) for (let i = 0; i < len; i++) payload[i] ^= c.buf[maskOff + (i % 4)];
    c.buf = c.buf.subarray(off + len);
    if (op === 0x8) {
      sendFrame(c, 0x8, Buffer.alloc(0));
      c.socket.end();
      return;
    }
    if (op === 0x9) {
      sendFrame(c, 0xa, payload);
      continue;
    }
    if (op === 0xa) {
      c.alive = true;
      continue;
    }
    if (op === 0x1 || op === 0x0) {
      c.frag.push(payload);
      if (fin) {
        const text = Buffer.concat(c.frag).toString('utf8');
        c.frag = [];
        onMessage(c, text);
      }
    }
  }
}

function sendFrame(c, op, payload) {
  if (c.socket.destroyed) return;
  const len = payload.length;
  let head;
  if (len < 126) {
    head = Buffer.from([0x80 | op, len]);
  } else if (len < 65536) {
    head = Buffer.alloc(4);
    head[0] = 0x80 | op;
    head[1] = 126;
    head.writeUInt16BE(len, 2);
  } else {
    head = Buffer.alloc(10);
    head[0] = 0x80 | op;
    head[1] = 127;
    head.writeBigUInt64BE(BigInt(len), 2);
  }
  c.socket.write(Buffer.concat([head, payload]));
}

function send(c, obj) {
  if (c) sendFrame(c, 0x1, Buffer.from(JSON.stringify(obj)));
}

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function newCode() {
  for (;;) {
    let code = '';
    for (let i = 0; i < 4; i++) code += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
    if (!rooms.has(code)) return code;
  }
}

function onMessage(c, text) {
  let msg;
  try {
    msg = JSON.parse(text);
  } catch {
    return;
  }
  switch (msg.type) {
    case 'create': {
      leave(c);
      const code = newCode();
      rooms.set(code, { code, host: c, guest: null, created: Date.now() });
      c.room = code;
      send(c, { type: 'created', code });
      log(`방 생성 ${code} (접속자 ${c.id})`);
      break;
    }
    case 'join': {
      const code = String(msg.code || '').toUpperCase();
      const room = rooms.get(code);
      if (!room) return send(c, { type: 'error', msg: '방을 찾을 수 없습니다. 코드를 확인하세요.' });
      if (room.guest) return send(c, { type: 'error', msg: '방이 가득 찼습니다.' });
      leave(c);
      room.guest = c;
      c.room = code;
      send(c, { type: 'joined', code });
      send(room.host, { type: 'peer-joined' });
      log(`방 ${code} 참가 (접속자 ${c.id})`);
      break;
    }
    case 'relay': {
      const room = rooms.get(c.room);
      if (!room) return;
      const other = room.host === c ? room.guest : room.host;
      if (other) send(other, { type: 'relay', data: msg.data });
      break;
    }
  }
}

function leave(c) {
  const room = rooms.get(c.room);
  c.room = null;
  if (!room) return;
  if (room.host === c) {
    if (room.guest) {
      send(room.guest, { type: 'peer-left' });
      room.guest.room = null;
    }
    rooms.delete(room.code);
  } else if (room.guest === c) {
    room.guest = null;
    send(room.host, { type: 'peer-left' });
  }
}

// 끊긴 연결 정리
setInterval(() => {
  for (const [code, r] of rooms) {
    for (const c of [r.host, r.guest]) {
      if (!c) continue;
      if (!c.alive) c.socket.destroy();
      c.alive = false;
      sendFrame(c, 0x9, Buffer.alloc(0));
    }
    if (!r.host && !r.guest) rooms.delete(code);
  }
}, 30000).unref();

function log(s) {
  console.log(`[${new Date().toLocaleTimeString('ko-KR')}] ${s}`);
}

server.listen(PORT, HOST, () => {
  console.log(`\n  호국영웅전 서버 실행 중`);
  console.log(`  이 컴퓨터:        http://localhost:${PORT}`);
  if (HOST === '0.0.0.0' || HOST === '::') for (const list of Object.values(os.networkInterfaces())) {
    for (const a of list || []) {
      if (a.family === 'IPv4' && !a.internal) console.log(`  같은 네트워크:    http://${a.address}:${PORT}`);
    }
  }
  console.log('');
});
