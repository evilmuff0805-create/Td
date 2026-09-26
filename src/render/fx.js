// 이펙트: 시뮬레이션 이벤트 → 파티클, 링, 번개, 떠오르는 글자
import { TS, rgba, glow, star } from './paint.js';
import { ENEMIES } from '../data/enemies.js';

const JAMO = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ';

export class FX {
  constructor() {
    this.parts = [];
    this.rings = [];
    this.lines = [];
    this.texts = [];
    this.corpses = [];
    this.pings = [];
    this.cones = [];
    this.shake = 0;
    this.flash = 0;
    this.flashColor = '#fff';
    this.clockT = 0;
    this.showDamage = true;
  }

  burst(x, y, n, color, speed = 60, life = 0.5, size = 2, g = 0) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = speed * (0.4 + Math.random() * 0.8);
      this.parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - speed * 0.3, life, max: life, color, size: size * (0.6 + Math.random() * 0.8), g });
    }
  }

  text(x, y, text, color = '#fff', size = 12, life = 0.9) {
    this.texts.push({ x, y, text, color, size, life, max: life });
  }

  handle(ev) {
    const px = (v) => v * TS;
    switch (ev.k) {
      case 'death': {
        const def = ENEMIES[ev.type];
        this.corpses.push({ x: px(ev.x), y: px(ev.y) + 6, type: ev.type, life: 0.6, max: 0.6 });
        this.burst(px(ev.x), px(ev.y), def.tier >= 3 ? 16 : 7, '#e8e0cc', 50, 0.45, 2.4);
        if (def.tier === 4) {
          this.shake = Math.max(this.shake, 10);
          this.burst(px(ev.x), px(ev.y), 40, '#f0c75e', 140, 1.2, 3);
        }
        break;
      }
      case 'boom': {
        const x = px(ev.x);
        const y = px(ev.y);
        const r = (ev.r || 0.8) * TS;
        const col = {
          hangul: '#ffe08a', meteor: '#ffcf6b', star: '#fff1b0', stone: '#b8b0a0', bomb: '#ff8a3c', bigshell: '#ff8a3c', rocket: '#ffb35c',
        }[ev.kind] || '#ffae3c';
        this.rings.push({ x, y, r0: r * 0.3, r1: r, life: 0.35, max: 0.35, color: col, w: 3 });
        this.burst(x, y, ev.kind === 'bomb' || ev.kind === 'bigshell' ? 26 : 10, col, r * 2.2, 0.5, 2.6, 80);
        this.burst(x, y, 6, 'rgba(80,70,60,0.6)', 30, 0.9, 5, -20);
        if (ev.kind === 'bomb' || ev.kind === 'bigshell' || ev.kind === 'meteor') this.shake = Math.max(this.shake, ev.kind === 'meteor' ? 3 : 6);
        if (ev.kind === 'hangul') {
          for (let i = 0; i < 8; i++) {
            const a = Math.random() * Math.PI * 2;
            this.texts.push({ x: x + Math.cos(a) * r * 0.6, y: y + Math.sin(a) * r * 0.6, text: JAMO[Math.floor(Math.random() * JAMO.length)], color: '#ffe08a', size: 14, life: 0.7, max: 0.7 });
          }
        }
        break;
      }
      case 'bolt':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1), x2: px(ev.x2), y2: px(ev.y2), life: 0.18, max: 0.18, color: ev.c || '#bfe6ff', w: 2.5, jag: true });
        break;
      case 'shot':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1) - 4, x2: px(ev.x2), y2: px(ev.y2) - 8, life: 0.12, max: 0.12, color: '#fff3c0', w: 1.2 });
        this.burst(px(ev.x1), px(ev.y1) - 6, 4, 'rgba(200,200,200,0.7)', 20, 0.6, 3, -15);
        break;
      case 'disable':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1) - 10, x2: px(ev.x2), y2: px(ev.y2) - 10, life: 0.6, max: 0.6, color: '#b98aff', w: 3, jag: true });
        break;
      case 'ring':
        this.rings.push({ x: px(ev.x), y: px(ev.y), r0: 6, r1: ev.r * TS, life: 0.5, max: 0.5, color: ev.big ? '#ffe36b' : '#fff1b0', w: ev.big ? 4 : 2 });
        break;
      case 'enemyHeal':
        this.rings.push({ x: px(ev.x), y: px(ev.y), r0: 4, r1: ev.r * TS, life: 0.6, max: 0.6, color: '#8fe3a0', w: 2 });
        break;
      case 'cone':
        this.cones.push({ x: px(ev.x), y: px(ev.y), a: ev.a, r: ev.r * TS, w: ev.w, life: 0.4, max: 0.4 });
        break;
      case 'flood': {
        const x = px(ev.x);
        const y = px(ev.y);
        this.rings.push({ x, y, r0: 10, r1: ev.r * TS, life: 0.8, max: 0.8, color: '#7fc8ec', w: 10 });
        this.rings.push({ x, y, r0: 5, r1: ev.r * TS * 0.7, life: 0.6, max: 0.6, color: '#ffffff', w: 4 });
        this.burst(x, y, 50, '#9fd6f0', ev.r * TS * 2, 0.9, 3, 60);
        this.shake = Math.max(this.shake, 8);
        break;
      }
      case 'dash':
        this.lines.push({ x1: px(ev.x1), y1: px(ev.y1) - 8, x2: px(ev.x2), y2: px(ev.y2) - 8, life: 0.35, max: 0.35, color: '#f0c75e', w: 6 });
        break;
      case 'slash':
        this.rings.push({ x: px(ev.x) + 4 * (ev.f || 1), y: px(ev.y) - 8, r0: 6, r1: 12, life: 0.15, max: 0.15, color: '#ffffff', w: 2, arc: ev.f || 1 });
        break;
      case 'crit':
        if (this.showDamage) this.text(px(ev.x), px(ev.y) - 20, `${ev.v}!`, '#ffde59', 14);
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
        break;
      case 'leak':
        this.flash = 0.35;
        this.flashColor = '#c0392b';
        this.text(px(ev.x), px(ev.y) - 16, `민심 -${ev.lives}`, '#ff7b6b', 13, 1.2);
        break;
      case 'gold':
        break;
      case 'income':
        this.text(px(ev.x), px(ev.y) - 34, `+${ev.amount}냥`, '#f0c75e', 12, 1.3);
        break;
      case 'build':
        this.burst(px(ev.x), px(ev.y) + 10, 14, 'rgba(160,140,110,0.8)', 50, 0.6, 3);
        break;
      case 'upgrade':
        this.burst(px(ev.x), px(ev.y) - 10, 20, '#f0c75e', 70, 0.7, 2, -30);
        this.rings.push({ x: px(ev.x), y: px(ev.y) + 10, r0: 4, r1: 24, life: 0.5, max: 0.5, color: '#f0c75e', w: 2 });
        break;
      case 'sell':
        this.burst(px(ev.x), px(ev.y), 16, '#f0c75e', 60, 0.6, 2.2);
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
      case 'combo':
        this.flash = 0.8;
        this.flashColor = '#fff4d0';
        this.shake = 14;
        break;
      case 'bossSkill':
        this.text(px(ev.x), px(ev.y) - 50, ev.text, '#ff9a8a', 14, 1.5);
        this.shake = Math.max(this.shake, 5);
        break;
    }
  }

  update(dt) {
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
    for (const t of this.texts) t.y -= 22 * dt;
    this.parts = step(this.parts);
    this.rings = step(this.rings);
    this.lines = step(this.lines);
    this.texts = step(this.texts);
    this.corpses = step(this.corpses);
    this.pings = step(this.pings);
    this.cones = step(this.cones);
    if (this.parts.length > 900) this.parts.splice(0, this.parts.length - 900);
    this.shake = Math.max(0, this.shake - dt * 30);
    this.flash = Math.max(0, this.flash - dt);
    this.clockT = Math.max(0, this.clockT - dt);
  }

  drawUnder(ctx) {
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
  }

  draw(ctx, time) {
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
    for (const r of this.rings) {
      const k = 1 - r.life / r.max;
      ctx.strokeStyle = rgba(r.color.startsWith('#') ? r.color : '#ffffff', (1 - k) * 0.9);
      ctx.lineWidth = r.w * (1 - k * 0.5);
      ctx.beginPath();
      if (r.arc) ctx.arc(r.x, r.y, r.r0 + (r.r1 - r.r0) * k, r.arc > 0 ? -1.4 : Math.PI - 0.4, r.arc > 0 ? 0.4 : Math.PI + 1.4);
      else ctx.arc(r.x, r.y, r.r0 + (r.r1 - r.r0) * k, 0, Math.PI * 2);
      ctx.stroke();
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
      if (l.jag) glow(ctx, l.x2, l.y2, 10, l.color, 0.6 * k);
    }
    for (const p of this.parts) {
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    }
    ctx.globalAlpha = 1;
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
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('!', pg.x, pg.y - 12);
    }
    for (const t of this.texts) {
      const k = t.life / t.max;
      ctx.globalAlpha = Math.min(1, k * 2);
      ctx.font = `700 ${t.size}px "Black Han Sans", "Gowun Batang", sans-serif`;
      ctx.textAlign = 'center';
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(20,12,8,0.85)';
      ctx.strokeText(t.text, t.x, t.y);
      ctx.fillStyle = t.color;
      ctx.fillText(t.text, t.x, t.y);
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
      glow(ctx, x, y, 9, col, 0.9);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
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
          ctx.fillStyle = '#1d1c1a';
          ctx.beginPath();
          ctx.arc(x, yy, big ? 5 : 3.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(255,255,255,0.35)';
          ctx.beginPath();
          ctx.arc(x - 1, yy - 1, 1.2, 0, Math.PI * 2);
          ctx.fill();
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
          ctx.fillStyle = '#1d1c1a';
          ctx.beginPath();
          ctx.arc(cx, cy, 6, 0, Math.PI * 2);
          ctx.fill();
          glow(ctx, cx, cy, 12, '#ff8a3c', 0.5);
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
      ctx.fillStyle = '#8f8a80';
      ctx.beginPath();
      ctx.arc(x - (1 - k) * 30, fy, 3.5, 0, Math.PI * 2);
      ctx.fill();
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
      ctx.fillStyle = '#2a2622';
      ctx.beginPath();
      ctx.arc(x, y - 4, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#6b6f7a';
      ctx.fillRect(x - 1, y - 12, 2, 3);
      glow(ctx, x + 1, y - 13, 5 + Math.random() * 3, '#ffcf6b', 0.9);
      break;
    }
  }
}
