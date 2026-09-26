// WebAudio 합성 효과음 + 국악풍 배경음 (가야금 뜯는 소리, 장구, 징)
const PENTA = [0, 2, 5, 7, 9]; // 평조풍 5음 음계 (솔라도레미 계열)

class GameAudio {
  constructor() {
    this.ctx = null;
    this.sfxVol = 0.7;
    this.bgmVol = 0.35;
    this.last = {};
    this.bgmKind = null;
    this.bgmTimer = null;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;
    this.master.connect(this.ctx.destination);
    this.sfx = this.ctx.createGain();
    this.sfx.gain.value = this.sfxVol;
    this.sfx.connect(this.master);
    this.bgm = this.ctx.createGain();
    this.bgm.gain.value = this.bgmVol;
    this.bgm.connect(this.master);
    const len = this.ctx.sampleRate * 1.5;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    if (this.pendingBgm) this.startBgm(this.pendingBgm);
  }

  setVolumes(sfx, bgm) {
    this.sfxVol = sfx;
    this.bgmVol = bgm;
    if (this.sfx) this.sfx.gain.value = sfx;
    if (this.bgm) this.bgm.gain.value = bgm;
  }

  // ───── 기본 음원 ─────
  tone(freq, dur, { type = 'sine', vol = 0.3, attack = 0.005, slide = 0, t = 0, out = this.sfx, filter = 0 } = {}) {
    const c = this.ctx;
    const t0 = c.currentTime + t;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    let node = o;
    if (filter) {
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filter;
      o.connect(f);
      node = f;
    }
    node.connect(g);
    g.connect(out);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  noise(dur, { vol = 0.3, type = 'bandpass', freq = 1000, q = 1, t = 0, sweep = 0, out = this.sfx } = {}) {
    const c = this.ctx;
    const t0 = c.currentTime + t;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t0);
    if (sweep) f.frequency.exponentialRampToValueAtTime(freq * sweep, t0 + dur);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f);
    f.connect(g);
    g.connect(out);
    s.start(t0, Math.random() * 0.5);
    s.stop(t0 + dur + 0.05);
  }

  // 가야금 뜯는 소리
  pluck(freq, { t = 0, vol = 0.22, dur = 1.2, out = this.sfx } = {}) {
    this.tone(freq, dur, { type: 'triangle', vol, attack: 0.003, t, out });
    this.tone(freq * 2, dur * 0.5, { type: 'sine', vol: vol * 0.35, attack: 0.003, t, out });
    this.tone(freq * 1.003, 0.05, { type: 'square', vol: vol * 0.15, attack: 0.001, t, out, filter: 2500 });
  }

  // 북 / 장구 궁편
  drum(freq = 70, { t = 0, vol = 0.7, out = this.sfx } = {}) {
    this.tone(freq * 1.8, 0.35, { vol, slide: 0.45, t, out });
    this.noise(0.12, { vol: vol * 0.3, type: 'lowpass', freq: 600, t, out });
  }

  // 징
  gong(freq = 140, { t = 0, vol = 0.35, dur = 2.6, out = this.sfx } = {}) {
    for (const [m, v] of [[1, 1], [1.49, 0.5], [2.03, 0.35], [2.76, 0.2]]) {
      this.tone(freq * m, dur, { vol: vol * v, attack: 0.02, t, out, slide: 0.985 });
    }
    this.noise(0.4, { vol: vol * 0.25, type: 'bandpass', freq: 900, q: 0.7, t, out });
  }

  // 범종
  bell(freq = 196, { t = 0, vol = 0.18, dur = 1.6 } = {}) {
    for (const [m, v] of [[1, 1], [2.0, 0.45], [2.76, 0.3], [5.4, 0.12]]) this.tone(freq * m, dur * (1.2 - m * 0.08), { vol: vol * v, attack: 0.004, t });
  }

  play(name) {
    if (!this.ctx || this.sfxVol <= 0) return;
    const now = performance.now();
    const gap = { bell: 260, arrow: 70, star: 90, cannon: 110, rockets: 180, coin: 60, boom: 70, hit: 55, crit: 90, kill: 45, tick: 30 }[name] ?? 40;
    if (this.last[name] && now - this.last[name] < gap) return;
    this.last[name] = now;
    const n = (i) => 293.66 * Math.pow(2, (PENTA[i % 5] + 12 * Math.floor(i / 5)) / 12);
    switch (name) {
      case 'arrow':
        this.noise(0.08, { vol: 0.12, freq: 3200, q: 2, sweep: 0.5 });
        break;
      case 'volley':
        for (let i = 0; i < 5; i++) this.noise(0.1, { vol: 0.12, freq: 3000, q: 2, sweep: 0.5, t: i * 0.03 });
        break;
      case 'cannon':
        this.tone(110, 0.35, { vol: 0.35, slide: 0.35 });
        this.noise(0.3, { vol: 0.25, type: 'lowpass', freq: 800 });
        break;
      case 'cannonBig':
        this.tone(80, 0.6, { vol: 0.45, slide: 0.3 });
        this.noise(0.55, { vol: 0.35, type: 'lowpass', freq: 600 });
        break;
      case 'boom':
        this.tone(90, 0.4, { vol: 0.3, slide: 0.4 });
        this.noise(0.4, { vol: 0.3, type: 'lowpass', freq: 900, sweep: 0.4 });
        break;
      case 'rockets':
        for (let i = 0; i < 4; i++) this.noise(0.25, { vol: 0.1, freq: 700, q: 1.5, sweep: 3, t: i * 0.05 });
        break;
      case 'bell':
        this.bell(196, { vol: 0.12, dur: 1.4 });
        break;
      case 'star':
        this.tone(1760, 0.15, { type: 'triangle', vol: 0.07, slide: 1.4 });
        this.tone(2640, 0.2, { vol: 0.04, t: 0.03 });
        break;
      case 'build':
        this.tone(520, 0.12, { vol: 0.35, slide: 0.8 });
        this.tone(380, 0.14, { vol: 0.25, t: 0.08, slide: 0.8 });
        break;
      case 'upgrade':
        [0, 2, 4].forEach((k, i) => this.pluck(n(k + 5), { t: i * 0.07, vol: 0.18, dur: 0.6 }));
        break;
      case 'coin':
        this.tone(1320, 0.08, { type: 'triangle', vol: 0.12 });
        this.tone(1760, 0.12, { type: 'triangle', vol: 0.12, t: 0.06 });
        break;
      case 'wave':
        this.drum(60, { vol: 0.8 });
        this.drum(60, { t: 0.28, vol: 0.6 });
        this.drum(75, { t: 0.46, vol: 0.9 });
        break;
      case 'bossWave':
        this.gong(110, { vol: 0.45, dur: 3 });
        this.drum(55, { t: 0.1, vol: 0.9 });
        break;
      case 'victoryGong':
        this.gong(150, { vol: 0.35 });
        break;
      case 'leak':
        this.tone(160, 0.4, { type: 'sawtooth', vol: 0.12, slide: 0.5, filter: 800 });
        break;
      case 'chime':
        [4, 6, 8].forEach((k, i) => this.bell(n(k) * 2, { t: i * 0.08, vol: 0.07, dur: 0.9 }));
        break;
      case 'fire':
        this.noise(0.8, { vol: 0.2, type: 'lowpass', freq: 1200, sweep: 0.3 });
        break;
      case 'splash':
        this.noise(1.1, { vol: 0.35, type: 'lowpass', freq: 3000, sweep: 0.15 });
        this.tone(90, 0.6, { vol: 0.3, slide: 0.5 });
        break;
      case 'slash':
        this.noise(0.14, { vol: 0.2, type: 'highpass', freq: 2000, sweep: 1.8 });
        break;
      case 'throw':
        this.noise(0.2, { vol: 0.15, freq: 900, sweep: 0.5 });
        break;
      case 'horn':
        this.tone(233, 0.7, { type: 'sawtooth', vol: 0.12, attack: 0.08, slide: 1.06, filter: 1400 });
        this.tone(349, 0.5, { type: 'sawtooth', vol: 0.08, attack: 0.08, t: 0.35, filter: 1400 });
        break;
      case 'drum':
        this.drum(65, { vol: 0.8 });
        this.drum(65, { t: 0.18, vol: 0.8 });
        break;
      case 'meteor':
        this.tone(1400, 0.6, { type: 'sine', vol: 0.08, slide: 0.2 });
        break;
      case 'fuse':
        for (let i = 0; i < 8; i++) this.noise(0.05, { vol: 0.08, type: 'highpass', freq: 4000, t: i * 0.22 });
        break;
      case 'heal':
        [0, 2, 4, 7].forEach((k, i) => this.tone(n(k + 5), 0.5, { vol: 0.06, t: i * 0.06 }));
        break;
      case 'ice':
        [9, 11, 12].forEach((k, i) => this.tone(n(k), 0.6, { type: 'triangle', vol: 0.05, t: i * 0.05 }));
        break;
      case 'combo':
        this.gong(98, { vol: 0.5, dur: 3.2 });
        this.drum(55, { vol: 1 });
        this.drum(55, { t: 0.2, vol: 1 });
        [0, 2, 4, 7, 9].forEach((k, i) => this.tone(n(k + 5), 0.3, { type: 'sawtooth', vol: 0.06, t: 0.25 + i * 0.08, filter: 2200 }));
        break;
      case 'resonance':
        [0, 4, 7].forEach((k) => this.tone(n(k + 5), 1.2, { vol: 0.05, attack: 0.1 }));
        break;
      case 'tactic':
        [0, 2, 4].forEach((k, i) => this.pluck(n(k + 3), { t: i * 0.1, vol: 0.15 }));
        break;
      case 'warcry':
        this.noise(0.6, { vol: 0.25, freq: 500, q: 0.8, sweep: 1.5 });
        this.tone(140, 0.6, { type: 'sawtooth', vol: 0.1, filter: 700 });
        break;
      case 'ping':
        this.tone(1046, 0.12, { type: 'triangle', vol: 0.15 });
        this.tone(1568, 0.16, { type: 'triangle', vol: 0.12, t: 0.08 });
        break;
      case 'ui':
        this.pluck(n(5 + Math.floor(Math.random() * 3)), { vol: 0.14, dur: 0.6 });
        break;
      case 'win':
        [0, 2, 4, 5, 7, 9].forEach((k, i) => this.pluck(n(k + 3), { t: i * 0.14, vol: 0.2 }));
        this.gong(147, { t: 0.9, vol: 0.3 });
        break;
      case 'lose':
        [7, 5, 4, 2, 0].forEach((k, i) => this.pluck(n(k), { t: i * 0.22, vol: 0.18, dur: 1.4 }));
        break;
      case 'tick':
        this.tone(1200, 0.04, { type: 'triangle', vol: 0.06 });
        break;
      case 'hit':
        // 둔탁한 타격음: 짧은 저음 + 걸린 잡음
        this.tone(170 + Math.random() * 40, 0.07, { type: 'triangle', vol: 0.09, slide: 0.55 });
        this.noise(0.05, { vol: 0.07, type: 'bandpass', freq: 1400 + Math.random() * 600, q: 1.2 });
        break;
      case 'crit':
        this.noise(0.09, { vol: 0.16, type: 'highpass', freq: 2600, sweep: 0.6 });
        this.tone(1900, 0.12, { type: 'square', vol: 0.035, slide: 0.7, filter: 3200 });
        this.tone(140, 0.14, { vol: 0.2, slide: 0.5 });
        break;
      case 'kill':
        this.tone(520 + Math.random() * 120, 0.08, { type: 'triangle', vol: 0.07, slide: 1.6 });
        this.noise(0.07, { vol: 0.06, type: 'lowpass', freq: 900 });
        break;
      case 'bigKill':
        this.drum(48, { vol: 0.9 });
        this.noise(0.7, { vol: 0.3, type: 'lowpass', freq: 700, sweep: 0.3 });
        this.gong(120, { t: 0.05, vol: 0.25, dur: 1.8 });
        break;
      case 'deny':
        this.tone(200, 0.12, { type: 'square', vol: 0.05, filter: 900 });
        break;
    }
  }

  // ───── 배경음: 굿거리 장단풍 장구 + 가야금 즉흥 ─────
  startBgm(kind) {
    if (!this.ctx) {
      this.pendingBgm = kind;
      return;
    }
    if (this.bgmKind === kind) return;
    this.stopBgm();
    this.bgmKind = kind;
    const bpm = kind === 'boss' ? 104 : kind === 'battle' ? 88 : 66;
    const stepDur = 60 / bpm / 3; // 12/8 박의 1/3
    let step = 0;
    let next = this.ctx.currentTime + 0.1;
    let deg = 5;
    const out = this.bgm;
    const base = 196;
    const note = (i) => base * Math.pow(2, (PENTA[((i % 5) + 5) % 5] + 12 * Math.floor(i / 5)) / 12);
    const pattern = kind === 'menu' ? {} : { 0: 'D', 3: 'K', 5: 't', 6: 'K', 8: 't', 9: 'K', 10: 'r', 11: 'r' };
    const tick = () => {
      const c = this.ctx;
      while (next < c.currentTime + 0.25) {
        const s = step % 12;
        const t = next - c.currentTime;
        const p = pattern[s];
        if (p === 'D') {
          this.drum(58, { t, vol: 0.5, out });
          this.noise(0.05, { vol: 0.12, type: 'highpass', freq: 3000, t, out });
        } else if (p === 'K') this.drum(62, { t, vol: 0.35, out });
        else if (p === 't') this.noise(0.04, { vol: 0.1, type: 'highpass', freq: 3500, t, out });
        else if (p === 'r') {
          for (let k = 0; k < 3; k++) this.noise(0.03, { vol: 0.05, type: 'highpass', freq: 4000, t: t + k * stepDur * 0.3, out });
        }
        // 가야금 선율: 박마다 확률적으로 음계 위를 걷는다
        const density = kind === 'menu' ? 0.35 : kind === 'boss' ? 0.55 : 0.45;
        if (s % 3 === 0 && Math.random() < density) {
          deg += Math.floor(Math.random() * 5) - 2;
          deg = Math.max(2, Math.min(11, deg));
          this.pluck(note(deg), { t, vol: 0.13, dur: 1.4, out });
          if (Math.random() < 0.25) this.pluck(note(deg + 1), { t: t + stepDur, vol: 0.08, dur: 0.9, out });
        }
        // 대금풍 지속음
        if (step % 48 === 0) this.tone(note(0) / 2, stepDur * 40, { vol: 0.05, attack: 1.2, t, out, filter: 900 });
        next += stepDur;
        step++;
      }
    };
    this.bgmTimer = setInterval(tick, 80);
    tick();
  }

  stopBgm() {
    if (this.bgmTimer) clearInterval(this.bgmTimer);
    this.bgmTimer = null;
    this.bgmKind = null;
  }
}

export const audio = new GameAudio();
