// 영웅·왜군·의병·거북선 그리기 (2~3등신 캐릭터)
import { TS, PAL, rgba, shade, shadow, glow, star, taegeuk } from './paint.js';
import { HEROES } from '../data/heroes.js';
import { ENEMIES } from '../data/enemies.js';

const SKIN = '#f1caa0';

function head(ctx, x, y, r = 3.4) {
  ctx.fillStyle = SKIN;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1d1c1a';
  ctx.fillRect(x + 0.6, y - 0.6, 1, 1.1);
}

function legs(ctx, x, y, t, color = '#2c2620', moving = true) {
  const s = moving ? Math.sin(t * 12) * 2 : 0;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x - 1.5, y - 4);
  ctx.lineTo(x - 1.5 + s, y);
  ctx.moveTo(x + 1.5, y - 4);
  ctx.lineTo(x + 1.5 - s, y);
  ctx.stroke();
}

function body(ctx, x, y, w, h, color, trim) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x - w / 2, y);
  ctx.lineTo(x - w / 2 + 1, y - h);
  ctx.lineTo(x + w / 2 - 1, y - h);
  ctx.lineTo(x + w / 2, y);
  ctx.closePath();
  ctx.fill();
  if (trim) {
    ctx.fillStyle = trim;
    ctx.fillRect(x - w / 2, y - 2, w, 1.5);
  }
}

// ───────────── 왜군 ─────────────
export function drawEnemy(ctx, e, time, alpha = 1) {
  const def = ENEMIES[e.type];
  const x = e.x * TS;
  const y = e.y * TS + 6;
  const t = time + e.id * 0.37;
  const moving = !e.blockedBy && !(e.stunT > 0);
  const bob = moving ? Math.abs(Math.sin(t * 6)) * 1.2 : 0;
  const f = e.dx < -0.1 ? -1 : 1;
  const sc = (def.tier === 4 ? 1.9 : def.tier === 3 ? 1.3 : 1.12) * 1.1;
  ctx.save();
  ctx.globalAlpha = alpha * (e.stealth && !e.revealed ? 0.28 : 1);
  shadow(ctx, x, y + 1, 7 * sc, 2.4 * sc, 0.25);
  if (def.tier === 4) {
    glow(ctx, x, y - 12 * sc, 22 * sc, '#c0392b', 0.2 + 0.1 * Math.sin(time * 4));
  }
  ctx.translate(x, y - bob);
  ctx.scale(f * sc, sc);
  const fn = ENEMY_DRAW[e.type] || ENEMY_DRAW.ashigaru;
  fn(ctx, e, t, moving);
  ctx.restore();
  // 상태 표시
  if (e.stunT > 0) {
    ctx.fillStyle = '#ffe36b';
    for (let i = 0; i < 3; i++) {
      const a = time * 6 + (i * Math.PI * 2) / 3;
      star(ctx, x + Math.cos(a) * 6, y - 22 * sc + Math.sin(a) * 2, 1.8);
      ctx.fill();
    }
  }
  if (e.slowT > 0 || e.auraSlow > 0.05) {
    ctx.fillStyle = 'rgba(120,190,255,0.35)';
    ctx.beginPath();
    ctx.ellipse(x, y, 8 * sc, 3 * sc, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  if (e.vulnT > 0) {
    ctx.strokeStyle = 'rgba(201,166,255,0.9)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y - 10 * sc, 9 * sc, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (e.shield > 0) {
    ctx.strokeStyle = 'rgba(140,210,255,0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y - 12 * sc, 13 * sc, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (e.stealth && e.revealed) {
    ctx.strokeStyle = 'rgba(190,120,255,0.8)';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.arc(x, y - 8, 9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  // 체력바
  if (def.tier !== 4 && (e.hp < e.maxHp || def.tier >= 2)) {
    const w = 16 * Math.min(sc, 1.3);
    const hy = y - 24 * sc - 2;
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(x - w / 2 - 1, hy - 1, w + 2, 4);
    ctx.fillStyle = e.hp / e.maxHp > 0.5 ? '#e0453a' : '#ff7b3a';
    ctx.fillRect(x - w / 2, hy, w * Math.max(0, e.hp / e.maxHp), 2);
    if (def.tier >= 2) {
      ctx.fillStyle = def.tier === 3 ? '#b07bd6' : '#7fb3e6';
      ctx.fillRect(x - w / 2 - 3, hy - 0.5, 2, 3);
    }
  }
}

function jingasa(ctx, y, color = '#2b2a28') {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-6, y + 1);
  ctx.lineTo(0, y - 3.5);
  ctx.lineTo(6, y + 1);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fillRect(-4, y - 0.5, 3, 0.8);
}

function kabuto(ctx, y, color, crest = PAL.gold, crestType = 'v') {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(0, y, 4.3, Math.PI, 0);
  ctx.lineTo(5.5, y + 1.5);
  ctx.lineTo(-5.5, y + 1.5);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = crest;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  if (crestType === 'v') {
    ctx.moveTo(-4, y - 7);
    ctx.lineTo(0, y - 3);
    ctx.lineTo(4, y - 7);
  } else if (crestType === 'moon') {
    ctx.arc(0, y - 5, 3.5, Math.PI * 1.1, Math.PI * 1.9);
  }
  ctx.stroke();
}

function sashimono(ctx, x, y, color, t, h = 12) {
  ctx.strokeStyle = '#3a2a1c';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - h);
  ctx.stroke();
  const w = Math.sin(t * 5) * 0.8;
  ctx.fillStyle = color;
  ctx.fillRect(x - 4.5 + w, y - h, 4.5, h * 0.55);
}

const ENEMY_DRAW = {
  ashigaru(ctx, e, t, mv) {
    legs(ctx, 0, 0, t, '#2c2620', mv);
    body(ctx, 0, -4, 8, 7, '#4a5a78', '#2c3547');
    head(ctx, 0, -13);
    jingasa(ctx, -15.5);
    ctx.strokeStyle = '#6b4a2b';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-3, -2);
    ctx.lineTo(7, -20);
    ctx.stroke();
    ctx.fillStyle = '#cfd4d9';
    ctx.beginPath();
    ctx.moveTo(7, -20);
    ctx.lineTo(8.5, -24);
    ctx.lineTo(5.8, -21);
    ctx.fill();
    if (e.swing > 0) {
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.beginPath();
      ctx.arc(4, -10, 8, -1.2, 0.3);
      ctx.stroke();
    }
  },
  teppo(ctx, e, t, mv) {
    legs(ctx, 0, 0, t, '#2c2620', mv);
    body(ctx, 0, -4, 8, 7, '#5a4a3a', '#2c2620');
    head(ctx, 0, -13);
    jingasa(ctx, -15.5, '#3a2e22');
    ctx.fillStyle = '#6b4a2b';
    ctx.fillRect(-2, -9, 12, 2);
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(5, -9.2, 7, 1.4);
    ctx.fillStyle = '#c0392b';
    ctx.beginPath();
    ctx.arc(-1, -8, 1, 0, Math.PI * 2);
    ctx.fill();
  },
  scout(ctx, e, t, mv) {
    legs(ctx, 0, 0, t * 1.4, '#2c2620', mv);
    body(ctx, 0, -4, 7, 6, '#7a6a52', null);
    head(ctx, 0.5, -12);
    ctx.fillStyle = '#e8e2d4';
    ctx.fillRect(-3.4, -14, 7, 1.4);
    ctx.fillRect(-5, -13.6, 2, 3);
    ctx.strokeStyle = '#cfd4d9';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(2, -6);
    ctx.lineTo(8, -9);
    ctx.stroke();
  },
  samurai(ctx, e, t, mv) {
    legs(ctx, 0, 0, t, '#1d1c1a', mv);
    body(ctx, 0, -4, 10, 8, e.enraged ? '#b3321f' : '#8a2a22', '#1d1c1a');
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    for (let i = 0; i < 3; i++) ctx.fillRect(-4.5, -10 + i * 2.2, 9, 0.8);
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(-6.5, -12, 3, 4);
    ctx.fillRect(3.5, -12, 3, 4);
    head(ctx, 0, -15);
    kabuto(ctx, -16.5, '#1d1c1a');
    sashimono(ctx, -3, -8, '#f4f1e8', t);
    ctx.strokeStyle = '#e6ebef';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(4, -8);
    ctx.lineTo(12, e.enraged ? -16 : -4);
    ctx.stroke();
    if (e.enraged) glow(ctx, 0, -10, 12, '#ff5a3a', 0.35);
  },
  ninja(ctx, e, t, mv) {
    legs(ctx, 0, 0, t * 1.3, '#1d1a26', mv);
    body(ctx, 0, -4, 7, 7, '#2a2438', null);
    ctx.fillStyle = '#2a2438';
    ctx.beginPath();
    ctx.arc(0, -13, 3.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = SKIN;
    ctx.fillRect(-1, -14, 4, 1.5);
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(1.5, -13.8, 1, 1);
    ctx.fillStyle = '#6b3fa0';
    ctx.fillRect(-4.5, -16.5, 2, 5);
    ctx.strokeStyle = '#9aa0a6';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-3, -6);
    ctx.lineTo(-7, -16);
    ctx.stroke();
  },
  onmyoji(ctx, e, t, mv) {
    legs(ctx, 0, 0, t * 0.8, '#6b6b6b', mv);
    ctx.fillStyle = '#f4f1e8';
    ctx.beginPath();
    ctx.moveTo(-6, -1);
    ctx.lineTo(-4, -12);
    ctx.lineTo(4, -12);
    ctx.lineTo(6, -1);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#b8b0a0';
    ctx.lineWidth = 0.6;
    ctx.stroke();
    head(ctx, 0, -14.5);
    ctx.fillStyle = '#1d1c1a';
    ctx.beginPath();
    ctx.moveTo(-2.5, -17);
    ctx.lineTo(-1, -24);
    ctx.lineTo(2.5, -23);
    ctx.lineTo(2.5, -17);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#f4ecd0';
    ctx.fillRect(5, -12, 3, 5);
    ctx.fillStyle = '#c0392b';
    ctx.fillRect(5.7, -11, 1.6, 3);
    glow(ctx, 6, -10, 7, '#8fe3a0', 0.25 + 0.2 * Math.sin(t * 3));
  },
  cavalry(ctx, e, t, mv) {
    const g = mv ? Math.sin(t * 14) * 2.5 : 0;
    ctx.fillStyle = '#6b4226';
    ctx.strokeStyle = '#4a2d1a';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(-6, -4);
    ctx.lineTo(-7 + g, 1);
    ctx.moveTo(-3, -4);
    ctx.lineTo(-2 - g, 1);
    ctx.moveTo(4, -4);
    ctx.lineTo(5 + g, 1);
    ctx.moveTo(7, -4);
    ctx.lineTo(8 - g, 1);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(1, -6, 9, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(10, -10, 2.6, 4.2, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(-9, -8, 2, 5);
    body(ctx, 0, -9, 7, 6, '#8a2a22', null);
    head(ctx, 0, -17);
    kabuto(ctx, -18.5, '#2b2a28', PAL.gold, 'moon');
    ctx.strokeStyle = '#6b4a2b';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-4, -8);
    ctx.lineTo(14, -18);
    ctx.stroke();
  },
  drum(ctx, e, t, mv) {
    legs(ctx, 0, 0, t, '#2c2620', mv);
    body(ctx, 0, -4, 9, 7, '#6b3a24', '#2c2620');
    ctx.fillStyle = '#8a5a33';
    ctx.beginPath();
    ctx.ellipse(-5, -10, 5, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#e8dcc2';
    ctx.beginPath();
    ctx.ellipse(-5, -10, 3.8, 4.8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#c0392b';
    ctx.beginPath();
    ctx.arc(-5, -10, 1.6, 0, Math.PI * 2);
    ctx.fill();
    head(ctx, 1, -14);
    ctx.fillStyle = '#f4f1e8';
    ctx.fillRect(-2.5, -17, 7, 1.4);
    const hit = Math.sin(t * 8);
    ctx.strokeStyle = '#3a2a1c';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(3, -8);
    ctx.lineTo(-1 + hit * 2, -13 - hit);
    ctx.stroke();
  },
  armored(ctx, e, t, mv) {
    legs(ctx, 0, 0, t * 0.7, '#1d1c1a', mv);
    body(ctx, 0, -4, 12, 10, '#3a3d44', '#1d1c1a');
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    for (let i = 0; i < 4; i++) ctx.fillRect(-5.5, -13 + i * 2.4, 11, 0.8);
    ctx.fillStyle = '#2a2c31';
    ctx.fillRect(-8, -14, 4, 5);
    ctx.fillRect(4, -14, 4, 5);
    head(ctx, 0, -17);
    kabuto(ctx, -18.5, '#2a2c31', '#b8b0a0');
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(-3, -17, 6, 2.4);
    ctx.strokeStyle = '#4a3322';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(6, -4);
    ctx.lineTo(10, -20);
    ctx.stroke();
  },
  ram(ctx, e, t, mv) {
    const wob = mv ? Math.sin(t * 5) * 0.6 : 0;
    ctx.fillStyle = '#3a2a1c';
    for (const wx of [-8, 8]) {
      ctx.beginPath();
      ctx.arc(wx, -2, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#7a5230';
    ctx.fillRect(-12, -10 + wob, 24, 8);
    ctx.fillStyle = '#5b3a22';
    ctx.beginPath();
    ctx.moveTo(-13, -10 + wob);
    ctx.lineTo(0, -19 + wob);
    ctx.lineTo(13, -10 + wob);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    for (let i = -9; i <= 9; i += 4.5) {
      ctx.beginPath();
      ctx.moveTo(i, -10 + wob);
      ctx.lineTo(i, -2 + wob);
      ctx.stroke();
    }
    ctx.fillStyle = '#8a6a44';
    ctx.fillRect(10, -8 + wob, 7, 3);
    ctx.fillStyle = '#4a4d55';
    ctx.fillRect(16, -9 + wob, 3, 5);
  },
  konishi(ctx, e, t, mv) {
    bossBody(ctx, e, t, mv, '#4b2a6b', '#e7b83a', 'moon', '#f4f1e8');
  },
  kato(ctx, e, t, mv) {
    bossBody(ctx, e, t, mv, '#1d1c1a', '#c0392b', 'none', '#f4f1e8');
    // 가토의 긴 에보시 투구
    ctx.fillStyle = '#e8e2d4';
    ctx.beginPath();
    ctx.moveTo(-3.5, -19);
    ctx.lineTo(-2, -32);
    ctx.lineTo(2.5, -31);
    ctx.lineTo(3.5, -19);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#c0392b';
    ctx.beginPath();
    ctx.arc(0.3, -25, 1.8, 0, Math.PI * 2);
    ctx.fill();
  },
  wakizaka(ctx, e, t, mv) {
    bossBody(ctx, e, t, mv, '#1f3a5a', '#cfd4d9', 'v', '#2f7fae');
  },
  ukita(ctx, e, t, mv) {
    bossBody(ctx, e, t, mv, '#8a6a1a', '#fff1b0', 'v', '#1d1c1a');
  },
  taiko(ctx, e, t, mv) {
    glow(ctx, 0, -12, 16, '#8a4ad6', 0.35 + 0.15 * Math.sin(t * 3));
    ctx.globalAlpha *= 0.92;
    bossBody(ctx, e, t, mv, '#2a1a3a', '#e7b83a', 'v', null);
    // 금빛 표주박 깃발(센나리 표주박)
    ctx.strokeStyle = '#3a2a1c';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-5, -8);
    ctx.lineTo(-5, -30);
    ctx.stroke();
    ctx.fillStyle = '#e7b83a';
    ctx.beginPath();
    ctx.arc(-5, -31, 2.2, 0, Math.PI * 2);
    ctx.arc(-5, -27.5, 2.8, 0, Math.PI * 2);
    ctx.fill();
    // 유령 불꽃
    for (let i = 0; i < 3; i++) {
      const a = t * 2 + i * 2.1;
      glow(ctx, Math.cos(a) * 9, -14 + Math.sin(a) * 5, 4, '#b98aff', 0.8);
    }
  },
};

function bossBody(ctx, e, t, mv, armor, crest, crestType, flagColor) {
  legs(ctx, 0, 0, t * 0.8, '#1d1c1a', mv);
  ctx.fillStyle = shade(armor, -0.2);
  ctx.beginPath();
  ctx.moveTo(-8, -2);
  ctx.lineTo(-6, -8);
  ctx.lineTo(6, -8);
  ctx.lineTo(8, -2);
  ctx.closePath();
  ctx.fill();
  body(ctx, 0, -6, 11, 9, armor, crest);
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  for (let i = 0; i < 3; i++) ctx.fillRect(-5, -13 + i * 2.4, 10, 0.8);
  ctx.fillStyle = shade(armor, -0.3);
  ctx.fillRect(-8.5, -15, 4, 5);
  ctx.fillRect(4.5, -15, 4, 5);
  head(ctx, 0, -18);
  kabuto(ctx, -19.5, shade(armor, -0.3), crest, crestType);
  if (flagColor) sashimono(ctx, -4, -9, flagColor, t, 16);
  ctx.strokeStyle = '#e6ebef';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(5, -9);
  ctx.lineTo(13, e.swing > 0 ? -2 : -18);
  ctx.stroke();
}

// ───────────── 영웅 ─────────────
export function drawHero(ctx, h, time, opts = {}) {
  const def = HEROES[h.heroId];
  const x = opts.x ?? h.x * TS;
  const y = opts.y ?? h.y * TS + 7;
  const sc = opts.scale || 1.45;
  const t = time + h.id;
  ctx.save();
  if (!opts.portrait) {
    // 발밑 원: 소유자 색
    const col = h.owner === 1 ? PAL.p1 : PAL.p0;
    ctx.strokeStyle = rgba(col, opts.selected ? 1 : 0.7);
    ctx.lineWidth = opts.selected ? 2.5 : 1.5;
    ctx.beginPath();
    ctx.ellipse(x, y + 1, 13, 4.6, 0, 0, Math.PI * 2);
    ctx.stroke();
    if (opts.selected) {
      ctx.fillStyle = rgba(col, 0.18 + 0.1 * Math.sin(time * 5));
      ctx.fill();
    }
    shadow(ctx, x, y + 1, 8, 3, 0.3);
    if (h.buffs && (h.buffs.invulnT > 0 || h.buffs.gwakT > 0)) glow(ctx, x, y - 14, 20, '#ffd24a', 0.35);
    if (h.buffs && h.buffs.drT > 0) {
      ctx.strokeStyle = 'rgba(200,170,110,0.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y - 12, 15, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  const moving = h.moving;
  const bob = moving ? Math.abs(Math.sin(t * 7)) * 1.4 : Math.sin(t * 2) * 0.4;
  ctx.translate(x, y - bob);
  ctx.scale((h.facing || 1) * sc, sc);
  const atk = h.anim > 0;
  const fn = HERO_DRAW[h.heroId];
  if (fn) fn(ctx, h, t, moving, atk, def);
  ctx.restore();
  if (!opts.portrait && !opts.noBar) {
    const w = 22;
    const hy = y - 42;
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(x - w / 2 - 1, hy - 1, w + 2, 5);
    ctx.fillStyle = '#5ad16a';
    ctx.fillRect(x - w / 2, hy, w * Math.max(0, h.hp / h.maxHp), 3);
    ctx.font = '700 9px "Gowun Batang", serif';
    ctx.textAlign = 'center';
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'rgba(0,0,0,0.75)';
    const label = `${def.name} ${h.lv}`;
    ctx.strokeText(label, x, hy - 3);
    ctx.fillStyle = h.owner === 1 ? '#ffd0c8' : '#d6e6ff';
    ctx.fillText(label, x, hy - 3);
  }
}

function robe(ctx, color, trim, w = 11, h = 11) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-w / 2, 0);
  ctx.lineTo(-w / 2 + 2, -h);
  ctx.lineTo(w / 2 - 2, -h);
  ctx.lineTo(w / 2, 0);
  ctx.closePath();
  ctx.fill();
  if (trim) {
    ctx.fillStyle = trim;
    ctx.fillRect(-w / 2, -1.6, w, 1.6);
    ctx.fillRect(-0.7, -h, 1.4, h);
  }
}

function boots(ctx, t, moving) {
  const s = moving ? Math.sin(t * 12) * 2 : 0;
  ctx.fillStyle = '#1d1c1a';
  ctx.fillRect(-3.5 + s, -1.5, 3, 1.8);
  ctx.fillRect(0.5 - s, -1.5, 3, 1.8);
}

const HERO_DRAW = {
  // 이순신: 두정갑 + 투구(상모) + 붉은 망토 + 활
  yi(ctx, h, t, mv, atk) {
    ctx.fillStyle = '#a8322a';
    ctx.beginPath();
    ctx.moveTo(-3, -13);
    ctx.quadraticCurveTo(-9 - Math.sin(t * 4) * 1.5, -6, -7, 0);
    ctx.lineTo(-2, -2);
    ctx.fill();
    boots(ctx, t, mv);
    robe(ctx, '#23456e', '#e7b83a');
    ctx.fillStyle = '#e7b83a';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) ctx.fillRect(-3.5 + c * 3, -9 + r * 2.8, 0.9, 0.9);
    head(ctx, 0, -15);
    // 투구
    ctx.fillStyle = '#2b2a28';
    ctx.beginPath();
    ctx.arc(0, -16, 4.2, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(-5.5, -16, 11, 1.4);
    ctx.fillStyle = '#c0392b';
    ctx.beginPath();
    ctx.moveTo(0, -20);
    ctx.quadraticCurveTo(-2 + Math.sin(t * 5), -25, 1, -26);
    ctx.quadraticCurveTo(2, -23, 0.5, -20);
    ctx.fill();
    ctx.fillStyle = PAL.gold;
    ctx.fillRect(-0.5, -21, 1, 1.5);
    // 활
    ctx.strokeStyle = '#5b3a22';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(5, -9, 6, -1.3, 1.3);
    ctx.stroke();
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(6.5, -15);
    ctx.lineTo(atk ? 1 : 6.5, -9);
    ctx.lineTo(6.5, -3);
    ctx.stroke();
  },
  // 세종대왕: 붉은 곤룡포 + 보(용 문양) + 익선관
  sejong(ctx, h, t, mv, atk) {
    boots(ctx, t, mv);
    robe(ctx, '#b8322a', null, 13, 12);
    ctx.fillStyle = PAL.gold;
    ctx.beginPath();
    ctx.arc(0, -8, 2.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#b8322a';
    ctx.beginPath();
    ctx.arc(0, -8, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2b2a28';
    ctx.fillRect(-5, -4.5, 10, 1.5);
    head(ctx, 0, -15);
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(-1.5, -12.5, 3, 1.4);
    // 익선관
    ctx.fillStyle = '#1d1c1a';
    ctx.beginPath();
    ctx.arc(0, -17.5, 3.8, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(-4, -17.8, 8, 1.8);
    ctx.beginPath();
    ctx.ellipse(-4.5, -21, 1.5, 2.8, -0.4, 0, Math.PI * 2);
    ctx.ellipse(4.5, -21, 1.5, 2.8, 0.4, 0, Math.PI * 2);
    ctx.fill();
    if (atk) glow(ctx, 6, -10, 8, '#ffe08a', 0.8);
    ctx.fillStyle = '#f4ecd0';
    ctx.fillRect(4, -10, 3, 4);
  },
  // 을지문덕: 고구려 찰갑 + 깃털 투구 + 부채
  eulji(ctx, h, t, mv, atk) {
    boots(ctx, t, mv);
    robe(ctx, '#2f6b52', '#d9a300');
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 0.5;
    for (let r = 0; r < 4; r++) {
      ctx.beginPath();
      ctx.moveTo(-4, -10 + r * 2.4);
      ctx.lineTo(4, -10 + r * 2.4);
      ctx.stroke();
    }
    head(ctx, 0, -15);
    ctx.fillStyle = '#8a7a4a';
    ctx.beginPath();
    ctx.arc(0, -16.5, 4, Math.PI, 0);
    ctx.fill();
    ctx.strokeStyle = '#f4f1e8';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(-1, -20);
    ctx.quadraticCurveTo(-4, -26, -7, -25);
    ctx.moveTo(1, -20);
    ctx.quadraticCurveTo(3, -26, 6, -26);
    ctx.stroke();
    // 깃털 부채
    ctx.save();
    ctx.translate(6, -9);
    ctx.rotate(atk ? -0.8 : -0.2);
    ctx.fillStyle = '#f4f1e8';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 6, -2.2, -0.9);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
  // 강감찬: 고려 장수, 보라 전포 + 칼 + 별빛
  gang(ctx, h, t, mv, atk) {
    boots(ctx, t, mv);
    robe(ctx, '#4a3a7a', '#f0c75e', 12, 12);
    ctx.fillStyle = '#6b6f7a';
    ctx.fillRect(-4.5, -11, 9, 5);
    head(ctx, 0, -16);
    ctx.fillStyle = '#6b6f7a';
    ctx.beginPath();
    ctx.arc(0, -17.5, 4.1, Math.PI, 0);
    ctx.fill();
    ctx.fillStyle = '#f0c75e';
    star(ctx, 0, -22, 2);
    ctx.fill();
    ctx.save();
    ctx.translate(5, -8);
    ctx.rotate(atk ? 0.9 : -0.6);
    ctx.strokeStyle = '#e6ebef';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -13);
    ctx.stroke();
    ctx.fillStyle = PAL.gold;
    ctx.fillRect(-2, -0.5, 4, 1.2);
    ctx.restore();
    if (atk) glow(ctx, 8, -12, 8, '#f0c75e', 0.7);
  },
  // 권율: 갈색 갑옷 + 창 + 방패
  gwon(ctx, h, t, mv, atk) {
    boots(ctx, t, mv);
    robe(ctx, '#7a5230', '#e6d3a3', 13, 12);
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    for (let i = 0; i < 3; i++) ctx.fillRect(-5, -10 + i * 3, 10, 1);
    head(ctx, 0, -16);
    ctx.fillStyle = '#3a2e22';
    ctx.beginPath();
    ctx.arc(0, -17.3, 4.2, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(-5.5, -17.5, 11, 1.5);
    ctx.fillStyle = '#c0392b';
    ctx.fillRect(-0.6, -24, 1.2, 3);
    ctx.strokeStyle = '#6b4a2b';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(4, 0);
    ctx.lineTo(atk ? 13 : 7, -22);
    ctx.stroke();
    ctx.fillStyle = '#cfd4d9';
    ctx.beginPath();
    const tx = atk ? 13 : 7;
    ctx.moveTo(tx, -22);
    ctx.lineTo(tx + 1, -26);
    ctx.lineTo(tx - 1.5, -23);
    ctx.fill();
    ctx.fillStyle = '#8a5a33';
    ctx.beginPath();
    ctx.ellipse(-5, -8, 3.5, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    taegeuk(ctx, -5, -8, 1.8, 0, '#2f5fb8', '#cf3a30');
  },
  // 곽재우: 홍의(붉은 옷) + 갓 + 활
  gwak(ctx, h, t, mv, atk) {
    ctx.fillStyle = '#d23a2a';
    ctx.beginPath();
    ctx.moveTo(-3, -12);
    ctx.quadraticCurveTo(-10 - Math.sin(t * 5) * 2, -5, -8, 0);
    ctx.lineTo(-2, -2);
    ctx.fill();
    boots(ctx, t, mv);
    robe(ctx, '#d23a2a', '#1d1c1a', 12, 11);
    head(ctx, 0, -15);
    // 갓
    ctx.fillStyle = 'rgba(20,20,20,0.9)';
    ctx.beginPath();
    ctx.ellipse(0, -17.5, 8, 1.6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(-3, -22, 6, 4.5);
    ctx.strokeStyle = '#5b3a22';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.arc(5, -9, 5.5, -1.3, 1.3);
    ctx.stroke();
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(6.3, -14.4);
    ctx.lineTo(atk ? 1.5 : 6.3, -9);
    ctx.lineTo(6.3, -3.6);
    ctx.stroke();
  },
};

// ───────────── 의병 · 목책 ─────────────
export function drawSummon(ctx, m, time) {
  const x = m.x * TS;
  const y = m.y * TS + 6;
  if (m.kind === 'wall') {
    shadow(ctx, x, y + 2, 16, 4, 0.3);
    ctx.fillStyle = '#7a5230';
    for (let i = -3; i <= 3; i++) {
      ctx.fillRect(x + i * 4 - 1.5, y - 16 + Math.abs(i) * 0.6, 3.2, 16 - Math.abs(i) * 0.6);
      ctx.beginPath();
      ctx.moveTo(x + i * 4 - 1.5, y - 16 + Math.abs(i) * 0.6);
      ctx.lineTo(x + i * 4 + 0.1, y - 19 + Math.abs(i) * 0.6);
      ctx.lineTo(x + i * 4 + 1.7, y - 16 + Math.abs(i) * 0.6);
      ctx.fill();
    }
    ctx.fillStyle = '#5b3a22';
    ctx.fillRect(x - 14, y - 11, 28, 2);
    ctx.fillRect(x - 14, y - 5, 28, 2);
    bar(ctx, x, y - 24, 24, m.hp / m.maxHp, '#e0c080');
    return;
  }
  const t = time + m.id;
  shadow(ctx, x, y + 1, 6, 2, 0.25);
  ctx.save();
  ctx.translate(x, y);
  legs(ctx, 0, 0, t, '#6b5a4a', false);
  body(ctx, 0, -4, 8, 7, '#efe8d8', '#8a7a64');
  head(ctx, 0, -13);
  ctx.fillStyle = '#e8e2d4';
  ctx.fillRect(-3.5, -15.5, 7, 1.4);
  ctx.strokeStyle = '#6b4a2b';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(-2, -2);
  ctx.lineTo(m.anim > 0 ? 9 : 6, -18);
  ctx.stroke();
  ctx.restore();
  bar(ctx, x, y - 22, 14, m.hp / m.maxHp, '#8fe3a0');
}

function bar(ctx, x, y, w, k, color) {
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(x - w / 2 - 1, y - 1, w + 2, 4);
  ctx.fillStyle = color;
  ctx.fillRect(x - w / 2, y, w * Math.max(0, k), 2);
}

// 거북선
export function drawTurtle(ctx, m, time) {
  const x = m.x * TS;
  const y = m.y * TS + 4;
  const a = Math.atan2(m.dy, m.dx);
  ctx.save();
  ctx.translate(x, y);
  // 물보라
  glow(ctx, 0, 4, 30, '#9fd6f0', 0.5);
  ctx.rotate(a);
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(-18 - i * 5, Math.sin(time * 20 + i) * 4, 3 - i * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
  // 선체
  ctx.fillStyle = '#6b4a2b';
  ctx.beginPath();
  ctx.moveTo(-18, -8);
  ctx.lineTo(14, -8);
  ctx.quadraticCurveTo(22, 0, 14, 8);
  ctx.lineTo(-18, 8);
  ctx.quadraticCurveTo(-22, 0, -18, -8);
  ctx.fill();
  // 등껍질 지붕 + 철침
  ctx.fillStyle = '#3d5a4a';
  ctx.beginPath();
  ctx.ellipse(-2, 0, 15, 6.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#243a30';
  ctx.lineWidth = 0.8;
  for (let i = -12; i <= 8; i += 4) {
    ctx.beginPath();
    ctx.moveTo(i, -5);
    ctx.lineTo(i + 2, 5);
    ctx.stroke();
  }
  ctx.fillStyle = '#cfd4d9';
  for (let i = -12; i <= 10; i += 4) {
    for (const yy of [-3, 0, 3]) {
      ctx.fillRect(i, yy - 0.4, 1.2, 0.8);
    }
  }
  // 용머리
  ctx.fillStyle = '#c8412f';
  ctx.beginPath();
  ctx.ellipse(19, 0, 4.5, 3.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1d1c1a';
  ctx.fillRect(20, -1.5, 1.2, 1.2);
  glow(ctx, 25, 0, 8 + Math.sin(time * 30) * 2, '#ffae3c', 0.9);
  ctx.restore();
}
