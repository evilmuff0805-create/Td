// 이펙트: 시뮬레이션 이벤트 → 파티클, 연기, 불꽃, 쓰러짐, 떠오르는 글자, 화면 흔들림
import { TS, rgba, glow, star } from './paint.js';
import { sphere, OL } from './toon.js';
import { drawEnemy } from './draw-units.js';
import { ENEMIES } from '../data/enemies.js';

const JAMO = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ';
const rnd = (a, b) => a + Math.random() * (b - a);
const easeOut = (k) => 1 - (1 - k) * (1 - k);
const wobble = (t) => Math.sin(t) * 0.6 + Math.sin(t * 2.3 + 1.3) * 0.4;

// 폭발 종류별 색: [섬광, 불꽃1, 불꽃2, 연기]
const BOOM = {
  shell: ['#fff6d0', '#ffb347', '#ff7a2f', '#6f655b'],
  bigshell: ['#fff6d0', '#ffb347', '#ff6a2a', '#5e554c'],
  bomb: ['#ffffff', '#ffd05a', '#ff5a2a', '#4f4740'],
  rocket: ['#fff3c0', '#ffc36b', '#ff8a3c', '#7a7066'],
  meteor: ['#ffffff', '#ffe08a', '#ff9a3c', '#6a6070'],
  stone: ['#f4efe4', '#cfc6b4', '#a89f8c', '#8a8274'],
  star: ['#ffffff', '#fff1b0', '#c9e4ff', null],
  hangul: ['#ffffff', '#ffe08a', '#fff1b0', null],
};

export class FX {
  constructor() {
    this.parts = [];
    this.rings = [];
    this.lines = [];
    this.texts = [];
    this.corpses = [];
    this.pings = [];
    this.cones = [];
    this.puffs = [];
    this.sparks = [];
    this.debris = [];
    this.scorch = [];
    this.kos = [];
    this.coins = [];
    this.slashes = [];
    this.trauma = 0;
    this.punch = 0;
    this.punchX = 0;
    this.punchY = 0;
    this.t = 0;
    this.flash = 0;
    this.flashColor = '#fff';
    this.clockT = 0;
    this.showDamage = true;
    this.shakeOn = true;
    this.coopTags = false;
    this.onSound = null;
  }

  // ───── 카메라: 충격량(trauma)의 제곱만큼 흔들리고, 큰 타격은 살짝 당겨진다 ─────
  addTrauma(a) {
    this.trauma = Math.min(1, this.trauma + a);
  }

  kick(x, y, amount) {
    if (amount < this.punch) return;
    this.punch = Math.min(1, amount);
    this.punchX = x;
    this.punchY = y;
  }

  camera(W, H) {
    const s = this.shakeOn ? this.trauma * this.trauma : 0;
    const t = this.t * 38;
    const dx = s * 10 * wobble(t);
    const dy = s * 8 * wobble(t + 17.3);
    const zp = this.shakeOn ? 1 + 0.035 * this.punch * this.punch : 1;
    // 흔들려도 가장자리가 비지 않게 그만큼 확대
    const zs = 1 + (2.3 * Math.max(Math.abs(dx), Math.abs(dy))) / Math.min(W, H);
    const zoom = Math.max(zp, zs);
    const pz = this.punch > 0.01 && zp >= zs;
    return { dx, dy, zoom, zx: pz ? this.punchX : W / 2, zy: pz ? this.punchY : H / 2 };
  }

  // 옛 코드와의 호환: 픽셀 단위 흔들림 요청
  set shake(px) {
    this.trauma = Math.max(this.trauma, Math.min(1, Math.sqrt(px / 16)));
  }

  get shake() {
    return this.trauma * 16;
  }

  burst(x, y, n, color, speed = 60, life = 0.5, size = 2, g = 0) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = speed * (0.4 + Math.random() * 0.8);
      this.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - speed * 0.3, life, max: life, color, size: size * (0.6 + Math.random() * 0.8), g });
    }
  }

  // 만화풍 연기/불꽃 뭉게: 외곽선 있는 동그라미가 부풀며 사라진다
  puff(x, y, r0, r1, col, life = 0.5, vx = 0, vy = -12, edge = true) {
    this.puffs.push({ x, y, r0, r1, col, life, max: life, vx, vy, edge });
  }

  spark(x, y, size, color = '#fff3b0', life = 0.14) {
    this.sparks.push({ x, y, size, color, life, max: life, rot: Math.random() * Math.PI });
  }

  text(x, y, text, color = '#fff', size = 12, life = 0.9) {
    this.texts.push({ x, y, text, color, size, life, max: life, vy: -22, pop: 0 });
  }

  // 피해 숫자: 튀어나오며 커졌다가 제자리로
  dmg(x, y, v, crit = false) {
    if (!this.showDamage) return;
    if (!crit && v < 6) return;
    let live = 0;
    for (const t of this.texts) if (t.dmg && !t.crit) live++;
    if (!crit && live > 14) return;
    // 이미 떠 있는 숫자와 겹치면 위로 쌓는다
    let yy = y;
    const xx = x + rnd(-8, 8);
    for (let k = 0; k < 4; k++) {
      if (!this.texts.some((t) => t.dmg && Math.abs(t.x - xx) < 20 && Math.abs(t.y - yy) < 13)) break;
      yy -= 13;
    }
    this.texts.push({
      x: xx, y: yy, text: crit ? `${v}!` : String(v), color: crit ? '#ffd23a' : '#fff7e8', size: crit ? 19 : 12,
      life: crit ? 0.95 : 0.6, max: crit ? 0.95 : 0.6, vy: crit ? -46 : -34, pop: crit ? 0.2 : 0.12, dmg: true, crit,
    });
  }

  // 맞은 자리의 번쩍임 (렌더러가 체력이 줄어든 순간 부른다)
  hitSpark(x, y, heavy) {
    const s = 7 + Math.min(10, heavy * 40);
    this.spark(x + rnd(-3, 3), y + rnd(-3, 3), s, heavy > 0.12 ? '#ffe08a' : '#ffffff');
    for (let i = 0; i < 3; i++) {
      const a = rnd(0, Math.PI * 2);
      const sp = rnd(60, 120);
      this.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 30, life: 0.22, max: 0.22, color: '#fff4c8', size: 1.8, g: 260, streak: true });
    }
  }

  // 유도 투사체가 닿은 자리
  impact(kind, x, y, a = 0, crit = false, hue = '') {
    if (kind === 'arrow' || kind === 'bolt') {
      this.spark(x, y, kind === 'bolt' ? 10 : 6, crit ? '#ffb347' : '#ffffff', 0.12);
      for (let i = 0; i < 2; i++) {
        const aa = a + Math.PI + rnd(-0.7, 0.7);
        this.debris.push({ x, y, vx: Math.cos(aa) * rnd(40, 80), vy: Math.sin(aa) * rnd(40, 80) - 40, z: 0, life: 0.35, max: 0.35, col: '#8a6a44', w: 3, h: 1, rot: rnd(0, 3), vr: rnd(-12, 12) });
      }
    } else if (kind === 'orb') {
      const col = hue === 'sejong' ? '#ffe08a' : hue === 'eulji' ? '#8fe3c0' : '#bfe6ff';
      this.rings.push({ x, y, r0: 3, r1: 15, life: 0.22, max: 0.22, color: col, w: 3 });
      this.spark(x, y, 9, col, 0.16);
      this.burst(x, y, 5, col, 50, 0.3, 2, 0);
    }
  }

  // 유산이 쏠 때 (포구 연기)
  muzzle(x, y, a, big) {
    const cx = x + Math.cos(a) * 12;
    const cy = y + Math.sin(a) * 6;
    this.spark(cx, cy, big ? 14 : 10, '#ffe08a', 0.1);
    for (let i = 0; i < (big ? 4 : 3); i++) {
      this.puff(cx + Math.cos(a) * i * 4, cy + Math.sin(a) * i * 2, 2, rnd(5, 8) * (big ? 1.4 : 1), '#d8d0c4', rnd(0.4, 0.6), Math.cos(a) * rnd(15, 30), -rnd(10, 25));
    }
    if (big) this.addTrauma(0.08);
  }

  explode(x, y, r, kind) {
    const pal = BOOM[kind] || BOOM.shell;
    const magic = !pal[3];
    // 섬광
    this.puffs.push({ x, y, r0: r * 0.25, r1: r * 0.75, col: pal[0], life: 0.1, max: 0.1, vx: 0, vy: 0, edge: false, disc: true });
    this.rings.push({ x, y, r0: r * 0.3, r1: r * 1.05, life: 0.3, max: 0.3, color: magic ? pal[1] : '#fff4d8', w: magic ? 4 : 3 });
    const n = kind === 'bomb' || kind === 'bigshell' ? 9 : kind === 'rocket' ? 4 : 6;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rnd(-0.3, 0.3);
      const d = rnd(0.05, 0.35) * r;
      const col = i % 2 ? pal[1] : pal[2];
      this.puff(x + Math.cos(a) * d, y + Math.sin(a) * d * 0.7, r * 0.12, r * rnd(0.3, 0.45), col, rnd(0.22, 0.34), Math.cos(a) * r * 0.9, Math.sin(a) * r * 0.5 - 14, !magic);
    }
    if (magic) {
      this.burst(x, y, 14, pal[1], r * 2, 0.6, 2.4, -20);
      for (let i = 0; i < 4; i++) this.spark(x + rnd(-r, r) * 0.6, y + rnd(-r, r) * 0.4, rnd(6, 11), pal[2], rnd(0.2, 0.35));
      return;
    }
    // 연기 (불꽃이 스러진 뒤 피어오름)
    for (let i = 0; i < n - 1; i++) {
      const a = rnd(0, Math.PI * 2);
      const d = rnd(0.1, 0.45) * r;
      this.puffs.push({ x: x + Math.cos(a) * d, y: y + Math.sin(a) * d * 0.6 - 4, r0: r * 0.15, r1: r * rnd(0.35, 0.55), col: pal[3], life: rnd(0.7, 1.1), max: 1.1, vx: rnd(-8, 8), vy: -rnd(14, 26), edge: true, delay: 0.12, smoke: true });
    }
    // 파편
    const nd = kind === 'stone' ? 7 : 5;
    for (let i = 0; i < nd; i++) {
      const a = rnd(0, Math.PI * 2);
      const sp = rnd(60, 130) * (r / 30);
      this.debris.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.5, z: 0, vz: rnd(90, 170), life: rnd(0.5, 0.8), max: 0.8, col: kind === 'stone' ? '#9a958a' : '#3f352c', w: rnd(2.5, 4), h: rnd(2, 3), rot: rnd(0, 3), vr: rnd(-14, 14) });
    }
    if (kind !== 'rocket') this.scorch.push({ x, y, r: r * 0.55, life: 2.6, max: 2.6 });
  }

  // 적이 쓰러질 때: 하얗게 번쩍인 뒤 뒤로 튕겨 구르며 연기 속으로
  ko(ev) {
    const x = ev.x * TS;
    const y = ev.y * TS + 8;
    const f = ev.f || 1;
    const def = ENEMIES[ev.type];
    const big = def.tier >= 3;
    if (this.kos.length < 40) {
      this.kos.push({
        type: ev.type, tier: def.tier, x, y, f, vx: -f * rnd(40, 70) * (big ? 0.5 : 1), vy: -rnd(110, 150) * (big ? 0.6 : 1), z: 0, rot: 0, vr: -f * rnd(7, 10) * (big ? 0.5 : 1),
        life: 0.62, max: 0.62,
      });
    }
    const n = big ? 7 : 4;
    for (let i = 0; i < n; i++) this.puff(x + rnd(-8, 8), y - rnd(2, 14), 3, rnd(7, 11) * (big ? 1.5 : 1), '#f3eee4', rnd(0.35, 0.5), rnd(-20, 20), -rnd(10, 30));
    this.spark(x, y - 14, big ? 18 : 12, '#ffffff', 0.12);
    const coins = Math.min(4, 1 + Math.floor((ev.g || 0) / 12));
    for (let i = 0; i < coins; i++) {
      this.coins.push({ x: x + rnd(-4, 4), y: y - 12, gy: y + rnd(-2, 4), vx: rnd(-45, 45), vy: -rnd(120, 170), life: 0.85, max: 0.85, ph: rnd(0, 6), bounced: false });
    }
  }

  handle(ev) {
    const px = (v) => v * TS;
    switch (ev.k) {
      case 'death': {
        const def = ENEMIES[ev.type];
        this.corpses.push({ x: px(ev.x), y: px(ev.y) + 6, type: ev.type, life: 0.9, max: 0.9 });
        this.ko(ev);
        if (this.onSound) this.onSound(def.tier === 4 ? 'bigKill' : 'kill');
        if (def.tier === 4) {
          this.addTrauma(0.9);
          this.kick(px(ev.x), px(ev.y), 1);
          this.flash = 0.5;
          this.flashColor = '#fff6d8';
          this.burst(px(ev.x), px(ev.y), 50, '#f0c75e', 160, 1.3, 3.2);
          this.explode(px(ev.x), px(ev.y), 70, 'bomb');
        } else if (def.tier === 3) this.addTrauma(0.18);
        break;
      }
      case 'boom': {
        const x = px(ev.x);
        const y = px(ev.y);
        const r = (ev.r || 0.8) * TS;
        this.explode(x, y, r, ev.kind);
        if (ev.kind === 'hangul') {
          for (let i = 0; i < 8; i++) {
            const a = Math.random() * Math.PI * 2;
            this.texts.push({ x: x + Math.cos(a) * r * 0.6, y: y + Math.sin(a) * r * 0.6, text: JAMO[Math.floor(Math.random() * JAMO.length)], color: '#ffe08a', size: 14, life: 0.7, max: 0.7, vy: -22, pop: 0.1 });
          }
        }
        const tr = { shell: 0.14, bigshell: 0.34, bomb: 0.5, meteor: 0.3, rocket: 0.07, stone: 0.12, star: 0.1, hangul: 0.12 }[ev.kind] ?? 0.1;
        this.addTrauma(tr);
        if (ev.kind === 'bomb' || ev.kind === 'bigshell' || ev.kind === 'meteor') this.kick(x, y, ev.kind === 'bomb' ? 1 : 0.6);
        break;
      }
      case 'bolt':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1), x2: px(ev.x2), y2: px(ev.y2), life: 0.18, max: 0.18, color: ev.c || '#bfe6ff', w: 3, jag: true });
        this.spark(px(ev.x2), px(ev.y2) - 8, 11, ev.c || '#bfe6ff', 0.14);
        break;
      case 'shot':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1) - 4, x2: px(ev.x2), y2: px(ev.y2) - 8, life: 0.12, max: 0.12, color: '#fff3c0', w: 1.4 });
        this.spark(px(ev.x1), px(ev.y1) - 6, 7, '#ffe08a', 0.08);
        this.puff(px(ev.x1), px(ev.y1) - 6, 2, 6, '#dcd4c8', 0.5, 0, -14);
        break;
      case 'disable':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1) - 10, x2: px(ev.x2), y2: px(ev.y2) - 10, life: 0.6, max: 0.6, color: '#b98aff', w: 3, jag: true });
        break;
      case 'ring':
        this.rings.push({ x: px(ev.x), y: px(ev.y), r0: 6, r1: ev.r * TS, life: 0.5, max: 0.5, color: ev.big ? '#ffe36b' : '#fff1b0', w: ev.big ? 5 : 3 });
        if (ev.big) this.addTrauma(0.12);
        break;
      case 'enemyHeal':
        this.rings.push({ x: px(ev.x), y: px(ev.y), r0: 4, r1: ev.r * TS, life: 0.6, max: 0.6, color: '#8fe3a0', w: 2 });
        break;
      case 'cone':
        this.cones.push({ x: px(ev.x), y: px(ev.y), a: ev.a, r: ev.r * TS, w: ev.w, life: 0.4, max: 0.4 });
        this.addTrauma(0.12);
        break;
      case 'flood': {
        const x = px(ev.x);
        const y = px(ev.y);
        this.rings.push({ x, y, r0: 10, r1: ev.r * TS, life: 0.8, max: 0.8, color: '#7fc8ec', w: 10 });
        this.rings.push({ x, y, r0: 5, r1: ev.r * TS * 0.7, life: 0.6, max: 0.6, color: '#ffffff', w: 4 });
        this.burst(x, y, 50, '#9fd6f0', ev.r * TS * 2, 0.9, 3, 60);
        for (let i = 0; i < 12; i++) {
          const a = (i / 12) * Math.PI * 2;
          this.puff(x + Math.cos(a) * ev.r * TS * 0.5, y + Math.sin(a) * ev.r * TS * 0.35, 4, rnd(10, 16), '#cfeefb', rnd(0.5, 0.8), Math.cos(a) * 50, Math.sin(a) * 30 - 10);
        }
        this.addTrauma(0.55);
        this.kick(x, y, 0.7);
        break;
      }
      case 'dash':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1) - 8, x2: px(ev.x2), y2: px(ev.y2) - 8, life: 0.35, max: 0.35, color: '#f0c75e', w: 7 });
        this.addTrauma(0.15);
        break;
      case 'slash':
        this.slashes.push({ x: px(ev.x), y: px(ev.y) - 12, f: ev.f || 1, life: 0.16, max: 0.16 });
        this.spark(px(ev.x) + 8 * (ev.f || 1), px(ev.y) - 12, 9, '#ffffff', 0.1);
        break;
      case 'crit':
        this.dmg(px(ev.x), px(ev.y) - 30, ev.v, true);
        this.spark(px(ev.x), px(ev.y) - 12, 16, '#ffd23a', 0.16);
        this.addTrauma(0.05);
        if (this.onSound) this.onSound('crit');
        break;
      case 'levelUp':
        this.rings.push({ x: px(ev.x), y: px(ev.y), r0: 4, r1: 26, life: 0.7, max: 0.7, color: '#f0c75e', w: 3 });
        this.burst(px(ev.x), px(ev.y) - 10, 18, '#f0c75e', 60, 0.8, 2, -40);
        this.text(px(ev.x), px(ev.y) - 40, `LV ${ev.lv}`, '#f0c75e', 13, 1.2);
        break;
      case 'heal':
        this.burst(px(ev.x), px(ev.y) - 10, 14, '#8fe3a0', 40, 0.9, 2.4, -40);
        break;
      case 'heroDown':
        this.text(px(ev.x), px(ev.y) - 30, '쓰러짐', '#ff8a7a', 12, 1.2);
        this.addTrauma(0.2);
        break;
      case 'leak':
        this.flash = 0.35;
        this.flashColor = '#c0392b';
        this.text(px(ev.x), px(ev.y) - 16, `민심 -${ev.lives}`, '#ff7b6b', 13, 1.2);
        this.addTrauma(0.3);
        break;
      case 'gold':
        break;
      case 'income':
        this.text(px(ev.x), px(ev.y) - 34, `+${ev.amount}냥`, '#f0c75e', 12, 1.3);
        break;
      case 'build': {
        const x = px(ev.x);
        const y = px(ev.y) + 12;
        for (let i = 0; i < 7; i++) {
          const a = (i / 7) * Math.PI * 2;
          this.puff(x + Math.cos(a) * 10, y + Math.sin(a) * 4, 3, rnd(7, 10), '#d9ccb2', rnd(0.4, 0.6), Math.cos(a) * 50, Math.sin(a) * 14 - 8);
        }
        this.rings.push({ x, y, r0: 8, r1: 28, life: 0.35, max: 0.35, color: '#fff1d0', w: 2 });
        this.addTrauma(0.1);
        if (this.coopTags && ev.p !== undefined && ev.type) this.texts.push({ x, y: y - 58, text: `${ev.p + 1}P`, color: ev.p === 1 ? '#ffb0a4' : '#b8d4ff', size: 12, life: 1, max: 1, vy: -16, pop: 0.12, tag: ev.p });
        break;
      }
      case 'upgrade':
        this.burst(px(ev.x), px(ev.y) - 10, 20, '#f0c75e', 70, 0.7, 2, -30);
        this.rings.push({ x: px(ev.x), y: px(ev.y) + 10, r0: 4, r1: 28, life: 0.5, max: 0.5, color: '#f0c75e', w: 3 });
        for (let i = 0; i < 5; i++) this.spark(px(ev.x) + rnd(-14, 14), px(ev.y) - rnd(0, 30), rnd(6, 10), '#ffe08a', rnd(0.2, 0.4));
        break;
      case 'sell':
        this.burst(px(ev.x), px(ev.y), 16, '#f0c75e', 60, 0.6, 2.2);
        for (let i = 0; i < 5; i++) this.puff(px(ev.x) + rnd(-10, 10), px(ev.y) + rnd(0, 12), 3, rnd(8, 12), '#d9ccb2', rnd(0.4, 0.6), rnd(-20, 20), -rnd(10, 20));
        break;
      case 'ping':
        this.pings.push({ x: px(ev.x), y: px(ev.y), p: ev.p, life: 2.5, max: 2.5 });
        break;
      case 'enrage':
        this.burst(px(ev.x), px(ev.y) - 10, 12, '#ff5a3a', 50, 0.5, 2);
        break;
      case 'clock':
        this.clockT = 6;
        break;
      case 'freeze':
        this.flash = 0.45;
        this.flashColor = '#bfe6ff';
        this.addTrauma(0.3);
        for (const [x, y] of ev.pts || []) {
          this.rings.push({ x: px(x), y: px(y) - 10, r0: 4, r1: 20, life: 0.45, max: 0.45, color: '#dff4ff', w: 3 });
          this.spark(px(x) + rnd(-6, 6), px(y) - rnd(8, 22), rnd(7, 11), '#dff4ff', rnd(0.25, 0.4));
        }
        break;
      case 'combo':
        this.flash = 0.8;
        this.flashColor = '#fff4d0';
        this.addTrauma(0.85);
        break;
      case 'bossSkill':
        this.text(px(ev.x), px(ev.y) - 50, ev.text, '#ff9a8a', 14, 1.5);
        this.addTrauma(0.3);
        break;
    }
  }

  update(dt) {
    this.t += dt;
    const step = (arr) => {
      for (const o of arr) o.life -= dt;
      return arr.filter((o) => o.life > 0);
    };
    for (const p of this.parts) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += p.g * dt;
      p.vx *= 0.96;
      p.vy *= 0.96;
    }
    for (const t of this.texts) {
      t.y += t.vy * dt;
      t.vy *= t.dmg ? 0.9 : 1;
      t.pop = Math.max(0, t.pop - dt);
    }
    for (const p of this.puffs) {
      if (p.delay > 0) {
        p.delay -= dt;
        p.life += dt;
        continue;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vx *= 0.9;
      p.vy *= 0.94;
    }
    for (const d of this.debris) {
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      d.rot += d.vr * dt;
      if (d.vz !== undefined) {
        d.z += d.vz * dt;
        d.vz -= 420 * dt;
        if (d.z < 0) {
          d.z = 0;
          d.vz = Math.abs(d.vz) > 60 ? -d.vz * 0.35 : 0;
          d.vx *= 0.5;
          d.vy *= 0.5;
          d.vr *= 0.5;
        }
      } else d.vy += 300 * dt;
    }
    for (const k of this.kos) {
      k.x += k.vx * dt;
      k.z -= k.vy * dt;
      k.vy -= 520 * dt;
      if (k.z > 0) {
        k.z = 0;
        k.vy = Math.abs(k.vy) * 0.25;
        k.vx *= 0.5;
        k.vr *= 0.4;
      }
      k.rot += k.vr * dt;
    }
    for (const c of this.coins) {
      c.x += c.vx * dt;
      c.y += c.vy * dt;
      c.vy += 480 * dt;
      if (c.y > c.gy && c.vy > 0) {
        c.y = c.gy;
        c.vy = c.bounced ? 0 : -c.vy * 0.4;
        c.vx *= 0.6;
        c.bounced = true;
      }
    }
    this.parts = step(this.parts);
    this.rings = step(this.rings);
    this.lines = step(this.lines);
    this.texts = step(this.texts);
    this.corpses = step(this.corpses);
    this.pings = step(this.pings);
    this.cones = step(this.cones);
    this.puffs = step(this.puffs);
    this.sparks = step(this.sparks);
    this.debris = step(this.debris);
    this.scorch = step(this.scorch);
    this.kos = step(this.kos);
    this.coins = step(this.coins);
    this.slashes = step(this.slashes);
    if (this.parts.length > 900) this.parts.splice(0, this.parts.length - 900);
    if (this.puffs.length > 400) this.puffs.splice(0, this.puffs.length - 400);
    if (this.debris.length > 200) this.debris.splice(0, this.debris.length - 200);
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    this.punch = Math.max(0, this.punch - dt * 5);
    this.flash = Math.max(0, this.flash - dt);
    this.clockT = Math.max(0, this.clockT - dt);
  }

  drawUnder(ctx) {
    for (const s of this.scorch) {
      const k = s.life / s.max;
      ctx.save();
      ctx.globalAlpha = Math.min(1, k * 1.6) * 0.45;
      ctx.translate(s.x, s.y + 4);
      ctx.scale(1, 0.55);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, s.r);
      g.addColorStop(0, 'rgba(30,20,12,0.9)');
      g.addColorStop(0.6, 'rgba(40,28,18,0.5)');
      g.addColorStop(1, 'rgba(40,28,18,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    for (const c of this.corpses) {
      const k = c.life / c.max;
      ctx.save();
      ctx.globalAlpha = k * 0.8;
      ctx.translate(c.x, c.y);
      ctx.fillStyle = 'rgba(40,30,25,0.5)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 8 * (1.3 - k * 0.3), 3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    // 땅에 떨어진 파편 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    for (const d of this.debris) {
      if (d.z === undefined) continue;
      ctx.fillRect(d.x - d.w / 2, d.y - 0.5, d.w, 1.5);
    }
  }

  draw(ctx, time) {
    // 쓰러지는 적
    for (const k of this.kos) {
      const a = k.life / k.max;
      ctx.save();
      ctx.globalAlpha = Math.min(1, a * 2.2);
      const sc = k.tier === 4 ? 1.75 : k.tier === 3 ? 1.28 : 1.05;
      ctx.translate(k.x, k.y - k.z - 12 * sc);
      ctx.rotate(k.rot * 0.28);
      ctx.translate(0, 12 * sc);
      drawEnemy(ctx, { type: k.type, id: 0, x: 0, y: -8 / TS, dx: k.f < 0 ? -1 : 1, hp: 1, maxHp: 1, noBar: true, noShadow: true }, time, 1, { flash: Math.max(0, (a - 0.75) * 4), sq: 0 });
      ctx.restore();
    }
    for (const c of this.cones) {
      const k = c.life / c.max;
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.a);
      ctx.fillStyle = `rgba(255,236,170,${0.25 * k})`;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, c.r * (1.1 - k * 0.3), -c.w, c.w);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${0.8 * k})`;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 7; i++) {
        const a = -c.w + (2 * c.w * i) / 6;
        const d = c.r * (1 - k);
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * d, Math.sin(a) * d);
        ctx.lineTo(Math.cos(a) * (d + 10), Math.sin(a) * (d + 10));
        ctx.stroke();
      }
      ctx.restore();
    }
    // 연기·불꽃 뭉게
    for (const p of this.puffs) {
      if (p.delay > 0) continue;
      const k = 1 - p.life / p.max;
      const r = p.r0 + (p.r1 - p.r0) * easeOut(Math.min(1, k * 1.4));
      const a = p.disc ? 1 - k : Math.pow(1 - k, 1.3);
      ctx.globalAlpha = a * (p.smoke ? 0.75 : 1);
      if (p.disc) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, '#ffffff');
        g.addColorStop(0.5, p.col);
        g.addColorStop(1, rgba(p.col, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        continue;
      }
      ctx.fillStyle = p.col;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      if (p.edge) {
        ctx.strokeStyle = OL;
        ctx.globalAlpha = a * 0.45;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      // 윗면 광택 (입체감)
      ctx.globalAlpha = a * 0.35;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(p.x - r * 0.3, p.y - r * 0.35, r * 0.35, r * 0.2, -0.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    for (const r of this.rings) {
      const k = 1 - r.life / r.max;
      ctx.strokeStyle = rgba(r.color.startsWith('#') ? r.color : '#ffffff', (1 - k) * 0.9);
      ctx.lineWidth = r.w * (1 - k * 0.5);
      ctx.beginPath();
      if (r.arc) ctx.arc(r.x, r.y, r.r0 + (r.r1 - r.r0) * k, r.arc > 0 ? -1.4 : Math.PI - 0.4, r.arc > 0 ? 0.4 : Math.PI + 1.4);
      else ctx.arc(r.x, r.y, r.r0 + (r.r1 - r.r0) * easeOut(k), 0, Math.PI * 2);
      ctx.stroke();
    }
    // 베기 초승달
    for (const s of this.slashes) {
      const k = 1 - s.life / s.max;
      ctx.save();
      ctx.translate(s.x + s.f * (6 + k * 6), s.y);
      ctx.scale(s.f, 1);
      ctx.rotate(-0.9 + k * 1.2);
      ctx.globalAlpha = 1 - k * 0.7;
      const g = ctx.createLinearGradient(-14, 0, 16, 0);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.6, 'rgba(230,245,255,0.9)');
      g.addColorStop(1, '#ffffff');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, 17, -1.3, 1.3);
      ctx.arc(-6, 0, 14, 1.2, -1.2, true);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    for (const l of this.lines) {
      const k = l.life / l.max;
      ctx.strokeStyle = rgba(l.color, k);
      ctx.lineWidth = l.w * k + 0.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      if (l.jag) {
        const n = 5;
        for (let i = 1; i < n; i++) {
          const t = i / n;
          ctx.lineTo(l.x1 + (l.x2 - l.x1) * t + (Math.random() - 0.5) * 6, l.y1 + (l.y2 - l.y1) * t + (Math.random() - 0.5) * 6);
        }
      }
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
      if (l.jag) {
        ctx.strokeStyle = rgba('#ffffff', k * 0.9);
        ctx.lineWidth = Math.max(0.6, l.w * k * 0.35);
        ctx.stroke();
        glow(ctx, l.x2, l.y2, 10, l.color, 0.6 * k);
      }
    }
    // 파편
    for (const d of this.debris) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, (d.life / d.max) * 2);
      ctx.translate(d.x, d.y - (d.z || 0));
      ctx.rotate(d.rot);
      ctx.fillStyle = d.col;
      ctx.fillRect(-d.w / 2, -d.h / 2, d.w, d.h);
      ctx.strokeStyle = OL;
      ctx.lineWidth = 0.6;
      ctx.strokeRect(-d.w / 2, -d.h / 2, d.w, d.h);
      ctx.restore();
    }
    for (const p of this.parts) {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      if (p.streak) {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.035, p.y - p.vy * 0.035);
        ctx.stroke();
      } else {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }
    }
    ctx.globalAlpha = 1;
    // 엽전
    for (const c of this.coins) {
      const a = Math.min(1, (c.life / c.max) * 3);
      const w = Math.abs(Math.cos(time * 14 + c.ph)) * 3.4 + 0.8;
      ctx.globalAlpha = a;
      ctx.fillStyle = '#f0c75e';
      ctx.strokeStyle = '#7a5410';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, w, 3.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      if (w > 2) {
        ctx.fillStyle = '#7a5410';
        ctx.fillRect(c.x - 0.8, c.y - 0.8, 1.6, 1.6);
      }
    }
    ctx.globalAlpha = 1;
    // 번쩍임 (4갈래 별)
    for (const s of this.sparks) {
      const k = 1 - s.life / s.max;
      const r = s.size * (0.5 + easeOut(k) * 0.8);
      ctx.save();
      ctx.globalAlpha = 1 - k;
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rot);
      ctx.fillStyle = s.color;
      star(ctx, 0, 0, r, 4, 0.22);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      star(ctx, 0, 0, r * 0.55, 4, 0.3);
      ctx.fill();
      ctx.restore();
    }
    for (const pg of this.pings) {
      const k = 1 - pg.life / pg.max;
      const col = pg.p === 1 ? '#ff6b5a' : '#5a9bff';
      for (let i = 0; i < 2; i++) {
        const kk = (k * 2 + i * 0.5) % 1;
        ctx.strokeStyle = rgba(col, 1 - kk);
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(pg.x, pg.y, 6 + kk * 26, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.moveTo(pg.x, pg.y - 6);
      ctx.lineTo(pg.x - 7, pg.y - 22);
      ctx.lineTo(pg.x + 7, pg.y - 22);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('!', pg.x, pg.y - 12);
    }
    for (const t of this.texts) {
      const k = t.life / t.max;
      const pop = t.pop > 0 ? 1 + t.pop * (t.crit ? 4 : 3) : 1;
      ctx.globalAlpha = Math.min(1, k * 2.5);
      ctx.save();
      ctx.translate(t.x, t.y);
      ctx.scale(pop, pop);
      ctx.font = `${t.dmg ? 400 : 700} ${t.size + 3}px "Black Han Sans", "Gowun Batang", sans-serif`;
      ctx.textAlign = 'center';
      ctx.lineJoin = 'round';
      ctx.lineWidth = t.crit ? 5 : 3.5;
      ctx.strokeStyle = t.crit ? '#5a1a08' : 'rgba(20,12,8,0.9)';
      ctx.strokeText(t.text, 0, 0);
      ctx.fillStyle = t.color;
      ctx.fillText(t.text, 0, 0);
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }
}

// 투사체 그리기
export function drawProjectile(ctx, p, time) {
  const x = p.x * TS;
  const y = p.y * TS;
  switch (p.kind) {
    case 'arrow':
    case 'bolt': {
      const a = p.a ?? 0;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(a);
      // 바람 가르는 꼬리
      const tail = ctx.createLinearGradient(-26, 0, -6, 0);
      tail.addColorStop(0, 'rgba(255,255,255,0)');
      tail.addColorStop(1, p.crit ? 'rgba(255,190,90,0.75)' : p.kind === 'bolt' ? 'rgba(255,233,168,0.7)' : 'rgba(255,255,255,0.55)');
      ctx.strokeStyle = tail;
      ctx.lineWidth = p.kind === 'bolt' || p.crit ? 3 : 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-26, 0);
      ctx.lineTo(-6, 0);
      ctx.stroke();
      ctx.strokeStyle = p.kind === 'bolt' ? '#ffe9a8' : '#5b3a22';
      ctx.lineWidth = p.kind === 'bolt' ? 1.8 : 1.3;
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(3, 0);
      ctx.stroke();
      ctx.fillStyle = '#d8dde2';
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(1.5, -1.8);
      ctx.lineTo(1.5, 1.8);
      ctx.fill();
      ctx.fillStyle = p.crit ? '#ff5a3a' : '#f4f1e8';
      ctx.fillRect(-9, -1.6, 3, 1.2);
      ctx.fillRect(-9, 0.4, 3, 1.2);
      if (p.kind === 'bolt') glow(ctx, 0, 0, 7, '#ffe08a', 0.5);
      ctx.restore();
      break;
    }
    case 'orb': {
      const col = p.hue === 'sejong' ? '#ffe08a' : p.hue === 'eulji' ? '#8fe3c0' : '#bfe6ff';
      const a = p.a ?? 0;
      for (let i = 3; i >= 1; i--) glow(ctx, x - Math.cos(a) * i * 5, y - Math.sin(a) * i * 5, 7 - i, col, 0.35 - i * 0.07);
      glow(ctx, x, y, 11, col, 0.9);
      sphere(ctx, x, y, 3.2, col, { lw: 0.8 });
      break;
    }
    case 'shell':
    case 'bigshell':
    case 'rocket': {
      const k = p.mode === 'lob' ? p.k || 0 : p.k || 0;
      const big = p.kind === 'bigshell';
      if (p.mode === 'lob') {
        const h = Math.sin(k * Math.PI) * (p.kind === 'rocket' ? 30 : 42);
        // 그림자
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.beginPath();
        ctx.ellipse(x, y, big ? 5 : 3.5, 1.6, 0, 0, Math.PI * 2);
        ctx.fill();
        const yy = y - h;
        if (p.kind === 'rocket') {
          glow(ctx, x, yy, 8, '#ffb35c', 0.9);
          ctx.fillStyle = '#6b4a2b';
          ctx.fillRect(x - 1, yy - 4, 2, 7);
        } else {
          sphere(ctx, x, yy, big ? 5.5 : 4, '#3a3a40', { lw: 1 });
        }
      } else {
        // 하늘에서 떨어지는 천자총통 포탄 / 신기전
        const k2 = p.k || 0;
        const sx = p.sx !== undefined ? p.sx * TS : x - 60;
        const sy = p.sy !== undefined ? p.sy * TS : y - 200;
        const cx = sx + (x - sx) * k2;
        const cy = sy + (y - sy) * k2;
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.beginPath();
        ctx.ellipse(x, y, 3 + k2 * 5, 1.5 + k2 * 2, 0, 0, Math.PI * 2);
        ctx.fill();
        if (p.kind === 'rocket') {
          glow(ctx, cx, cy, 9, '#ffb35c', 0.9);
          ctx.strokeStyle = 'rgba(255,190,110,0.6)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx - (x - sx) * 0.12, cy - (y - sy) * 0.12);
          ctx.stroke();
        } else {
          glow(ctx, cx, cy, 13, '#ff8a3c', 0.5);
          sphere(ctx, cx, cy, 6.5, '#3a3a40', { lw: 1 });
        }
      }
      break;
    }
    case 'meteor':
    case 'star': {
      const k = p.k || 0;
      const fy = y - (1 - k) * 160;
      const fx = x - (1 - k) * 60;
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.beginPath();
      ctx.ellipse(x, y, 4 + k * 8, 2 + k * 3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = p.kind === 'star' ? 'rgba(255,241,176,0.7)' : 'rgba(255,160,70,0.7)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx - 22, fy - 50);
      ctx.stroke();
      glow(ctx, fx, fy, 14, p.kind === 'star' ? '#fff1b0' : '#ffae3c', 0.9);
      ctx.fillStyle = '#fff';
      star(ctx, fx, fy, 5);
      ctx.fill();
      break;
    }
    case 'hangul': {
      const k = p.k || 0;
      const r = (p.hit ? p.hit.r : 1.8) * TS;
      ctx.fillStyle = `rgba(255,224,138,${0.15 + k * 0.2})`;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = '700 16px "Gowun Batang", serif';
      ctx.textAlign = 'center';
      for (let i = 0; i < 9; i++) {
        const seed = (p.id * 13 + i * 7) % 97;
        const ox = ((seed % 19) / 19 - 0.5) * r * 1.6;
        const oy = ((seed % 11) / 11 - 0.5) * r * 0.8;
        const fall = (1 - k) * (90 + (seed % 5) * 12);
        ctx.fillStyle = `rgba(255,236,170,${0.5 + k * 0.5})`;
        ctx.strokeStyle = 'rgba(80,40,0,0.6)';
        ctx.lineWidth = 2;
        const ch = JAMO[(p.id + i * 3) % JAMO.length];
        ctx.strokeText(ch, x + ox, y + oy - fall);
        ctx.fillText(ch, x + ox, y + oy - fall);
      }
      break;
    }
    case 'stone': {
      const k = p.k || 0;
      const fy = y - Math.sin(k * Math.PI) * 50 - (1 - k) * 20;
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.beginPath();
      ctx.ellipse(x, y, 4, 1.8, 0, 0, Math.PI * 2);
      ctx.fill();
      sphere(ctx, x - (1 - k) * 30, fy, 4, '#9a958a', { lw: 0.9 });
      break;
    }
    case 'bomb': {
      const k = p.k || 0;
      const r = (p.hit ? p.hit.r : 1.4) * TS;
      ctx.strokeStyle = `rgba(255,80,50,${0.3 + 0.4 * Math.abs(Math.sin(time * (6 + k * 20)))})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      sphere(ctx, x, y - 4, 7, '#34302c', { lw: 1 });
      ctx.fillStyle = '#6b6f7a';
      ctx.fillRect(x - 1, y - 12, 2, 3);
      glow(ctx, x + 1, y - 13, 5 + Math.random() * 3, '#ffcf6b', 0.9);
      break;
    }
  }
}
