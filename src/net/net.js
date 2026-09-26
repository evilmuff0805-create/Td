// 온라인 협동 연결: 서버(server/server.js)가 방 코드로 두 사람을 이어 주고 메시지를 중계한다
export class Net {
  constructor() {
    this.ws = null;
    this.role = null; // 'host' | 'guest'
    this.code = null;
    this.handlers = new Map();
    this.peer = false;
  }

  static available() {
    return typeof WebSocket !== 'undefined' && /^https?:$/.test(location.protocol) && !window.__HOGUK_STANDALONE__;
  }

  on(type, fn) {
    if (!this.handlers.has(type)) this.handlers.set(type, new Set());
    this.handlers.get(type).add(fn);
    return () => this.handlers.get(type).delete(fn);
  }

  emit(type, data) {
    const hs = this.handlers.get(type);
    if (hs) for (const fn of [...hs]) fn(data);
  }

  connect() {
    return new Promise((resolve, reject) => {
      const url = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`;
      let ws;
      try {
        ws = new WebSocket(url);
      } catch (e) {
        reject(e);
        return;
      }
      const timer = setTimeout(() => {
        ws.close();
        reject(new Error('timeout'));
      }, 5000);
      ws.onopen = () => {
        clearTimeout(timer);
        this.ws = ws;
        resolve();
      };
      ws.onerror = () => {
        clearTimeout(timer);
        reject(new Error('연결 실패'));
      };
      ws.onclose = () => {
        this.emit('close');
        this.ws = null;
      };
      ws.onmessage = (m) => {
        let msg;
        try {
          msg = JSON.parse(m.data);
        } catch {
          return;
        }
        if (msg.type === 'relay') this.emit(msg.data.t, msg.data);
        else {
          if (msg.type === 'peer-joined') this.peer = true;
          if (msg.type === 'peer-left') this.peer = false;
          this.emit(msg.type, msg);
        }
      };
    });
  }

  async create() {
    await this.connect();
    this.role = 'host';
    return new Promise((resolve, reject) => {
      const off = this.on('created', (m) => {
        off();
        this.code = m.code;
        resolve(m.code);
      });
      this.on('error', (m) => reject(new Error(m.msg)));
      this.raw({ type: 'create' });
    });
  }

  async join(code) {
    await this.connect();
    this.role = 'guest';
    return new Promise((resolve, reject) => {
      const offOk = this.on('joined', (m) => {
        offOk();
        this.code = m.code;
        this.peer = true;
        resolve();
      });
      const offErr = this.on('error', (m) => {
        offErr();
        reject(new Error(m.msg));
      });
      this.raw({ type: 'join', code: code.toUpperCase() });
    });
  }

  raw(obj) {
    if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(obj));
  }

  send(data) {
    this.raw({ type: 'relay', data });
  }

  close() {
    if (this.ws) this.ws.close();
    this.ws = null;
    this.handlers.clear();
  }
}
