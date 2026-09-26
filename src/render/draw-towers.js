// 유산 타워 — 입체 카툰 건물 (석축·기둥·기와지붕에 빛과 그림자)
// 움직이지 않는 건물 몸체는 스프라이트로 캐시하고, 화포·종·별빛 같은 움직이는 부분만 매 프레임 그린다.
import { TS, PAL, rgba, glow, star, lotus, shade } from './paint.js';
import { OL, LW, fillToon, sphere, gloss, rrect, box, cylinder, softShadow, sprite, blit } from './toon.js';

const BODY_W = 70;
const BODY_H = 80;
const BAX = 35;
const BAY = 68;

// ───────────────────────── 건축 부재 ─────────────────────────
// 기와지붕: (cx, y) = 처마선 가운데, w = 처마 폭, h = 지붕 높이
export function roof3d(c, cx, y, w, h, color = '#4a5366', opts = {}) {
  const lift = opts.lift ?? h * 0.42;
  const ridge = opts.ridge ?? 0.3;
  // 처마 밑 그늘 + 서까래
  c.beginPath();
  c.moveTo(cx - w / 2 + 1.5, y - lift + 1);
  c.quadraticCurveTo(cx - w * 0.3, y + 2.6, cx, y + 2.4);
  c.quadraticCurveTo(cx + w * 0.3, y + 2.6, cx + w / 2 - 1.5, y - lift + 1);
  c.lineTo(cx + w / 2 - 3, y - lift + 0.5);
  c.quadraticCurveTo(cx, y + 0.4, cx - w / 2 + 3, y - lift + 0.5);
  c.closePath();
  c.fillStyle = '#3a2618';
  c.fill();
  c.fillStyle = PAL.dancheongG;
  c.fillRect(cx - w * 0.36, y + 0.9, w * 0.72, 1.3);
  // 지붕면
  c.beginPath();
  c.moveTo(cx - w / 2, y - lift);
  c.quadraticCurveTo(cx - w * 0.32, y + 0.9, cx, y + 0.9);
  c.quadraticCurveTo(cx + w * 0.32, y + 0.9, cx + w / 2, y - lift);
  c.quadraticCurveTo(cx + w * 0.32, y - h * 0.5, cx + w * ridge, y - h);
  c.lineTo(cx - w * ridge, y - h);
  c.quadraticCurveTo(cx - w * 0.32, y - h * 0.5, cx - w / 2, y - lift);
  c.closePath();
  const g = c.createLinearGradient(cx - w * 0.3, y - h, cx + w * 0.2, y + 1);
  g.addColorStop(0, shade(color, 0.35));
  g.addColorStop(0.5, color);
  g.addColorStop(1, shade(color, -0.35));
  c.fillStyle = g;
  c.fill();
  c.lineWidth = opts.lw ?? LW * 1.1;
  c.strokeStyle = OL;
  c.lineJoin = 'round';
  c.stroke();
  // 기와 골 (가로줄)
  c.save();
  c.clip();
  c.strokeStyle = 'rgba(255,255,255,0.14)';
  c.lineWidth = 0.7;
  const rows = Math.max(2, Math.round(h / 2.6));
  for (let i = 1; i < rows; i++) {
    const k = i / rows;
    const yy = y - h + h * k;
    c.beginPath();
    c.moveTo(cx - w / 2, yy - lift * (1 - k) + 1);
    c.quadraticCurveTo(cx, yy + 1.5 * k, cx + w / 2, yy - lift * (1 - k) + 1);
    c.stroke();
  }
  c.strokeStyle = 'rgba(0,0,0,0.12)';
  const cols = Math.max(4, Math.round(w / 4.5));
  for (let i = 1; i < cols; i++) {
    const t = i / cols;
    c.beginPath();
    c.moveTo(cx - w * ridge + w * ridge * 2 * t, y - h);
    c.lineTo(cx - w / 2 + w * t, y + 1);
    c.stroke();
  }
  c.restore();
  gloss(c, cx - w * 0.18, y - h * 0.7, w * 0.16, h * 0.12, 0.28);
  // 용마루 + 치미
  rrect(c, cx - w * ridge - 1.5, y - h - 2.2, w * ridge * 2 + 3, 2.8, 1.3);
  fillToon(c, shade(color, -0.25), cx - w * ridge, y - h - 2.2, cx + w * ridge, y - h + 0.6, { lw: 0.8 });
  for (const s of [-1, 1]) {
    const x = cx + s * (w * ridge + 1.3);
    c.beginPath();
    c.moveTo(x, y - h + 0.6);
    c.quadraticCurveTo(x + s * 2.5, y - h - 1, x + s * 1.2, y - h - 4);
    c.quadraticCurveTo(x - s * 0.4, y - h - 2.5, x - s * 0.6, y - h - 1.6);
    c.closePath();
    fillToon(c, shade(color, -0.3), x - 2, y - h - 4, x + 2, y - h, { lw: 0.7 });
  }
}

// 붉은 기둥 여럿
function pillarRow(c, x1, x2, yb, h, n = 4, color = '#b8322a') {
  for (let i = 0; i < n; i++) {
    const x = x1 + ((x2 - x1) * i) / (n - 1);
    cylinder(c, x - 1.4, yb, 2.8, h, color, { lw: 0.7 });
  }
}

// 석축 앞면 돌 줄눈
function stoneLines(c, x, y, w, h, row = 4) {
  c.save();
  c.beginPath();
  c.rect(x, y - h, w, h);
  c.clip();
  c.strokeStyle = 'rgba(80,65,45,0.45)';
  c.lineWidth = 0.55;
  const rows = Math.max(1, Math.round(h / row));
  for (let r = 1; r <= rows; r++) {
    const yy = y - h + (r * h) / rows;
    c.beginPath();
    c.moveTo(x, yy);
    c.lineTo(x + w, yy);
    c.stroke();
    const off = r % 2 ? 3.5 : 0;
    for (let xx = x + off + 3; xx < x + w; xx += 7) {
      c.beginPath();
      c.moveTo(xx, yy - h / rows);
      c.lineTo(xx, yy);
      c.stroke();
    }
  }
  c.restore();
}

function dancheongBand(c, x, y, w, h = 2.4) {
  rrect(c, x, y, w, h, 0.6);
  c.fillStyle = PAL.dancheongG;
  c.fill();
  c.fillStyle = PAL.dancheongR;
  const n = Math.max(2, Math.floor(w / 5));
  for (let i = 0; i < n; i++) c.fillRect(x + (i + 0.3) * (w / n), y + h * 0.25, (w / n) * 0.4, h * 0.5);
  c.fillStyle = 'rgba(231,184,58,0.95)';
  c.fillRect(x, y + h - 0.6, w, 0.6);
  c.strokeStyle = OL;
  c.lineWidth = 0.5;
  c.strokeRect(x, y, w, h);
}

function platform(c, w = 34, h = 4, color = '#d6cbb2') {
  box(c, -w / 2, 0, w, h, 4.5, color);
  stoneLines(c, -w / 2, 0, w, h, 4);
}

// ───────────────────────── 건물 몸체 (캐시) ─────────────────────────
const BODY = {
  sungnyemun(c, t) {
    box(c, -17, 0, 34, 17, 6, '#d8cdb3');
    stoneLines(c, -17, 0, 34, 17, 4.2);
    // 홍예
    c.beginPath();
    c.moveTo(-5.5, 0);
    c.lineTo(-5.5, -8.5);
    c.arc(0, -8.5, 5.5, Math.PI, 0);
    c.lineTo(5.5, 0);
    c.closePath();
    const g = c.createLinearGradient(0, -14, 0, 0);
    g.addColorStop(0, '#120c08');
    g.addColorStop(1, '#4a3526');
    c.fillStyle = g;
    c.fill();
    c.strokeStyle = OL;
    c.lineWidth = LW;
    c.stroke();
    c.strokeStyle = '#f3ecdc';
    c.lineWidth = 1.2;
    c.beginPath();
    c.arc(0, -8.5, 6.8, Math.PI * 1.02, -0.02);
    c.stroke();
    // 누각
    rrect(c, -14, -24.5, 28, 2.4, 0.8);
    fillToon(c, '#6b4a2b', -14, -24.5, 14, -22, { lw: 0.8 });
    pillarRow(c, -11, 11, -23, 7, 4);
    c.fillStyle = 'rgba(40,20,10,0.35)';
    c.fillRect(-11, -30, 22, 2);
    dancheongBand(c, -13, -32.5, 26, 2.6);
    roof3d(c, 0, -32.5, 40, 9.5);
    pillarRow(c, -6, 6, -42, 3.5, 3);
    dancheongBand(c, -8, -45, 16, 2.2);
    roof3d(c, 0, -45, 27, 8.5);
    if (t.branch === 'A') sphere(c, 0, -56.5, 1.8, PAL.gold, { lw: 0.6 });
  },
  hwaseong(c, t) {
    box(c, -16, 0, 32, 23, 6, '#cbbd9e');
    // 벽돌
    c.save();
    c.beginPath();
    c.rect(-16, -23, 32, 23);
    c.clip();
    c.strokeStyle = 'rgba(120,70,40,0.35)';
    c.lineWidth = 0.55;
    for (let r = 0; r < 8; r++) {
      const yy = -23 + r * 3;
      c.beginPath();
      c.moveTo(-16, yy);
      c.lineTo(16, yy);
      c.stroke();
      for (let x = -16 + (r % 2) * 2.5; x < 16; x += 5) {
        c.beginPath();
        c.moveTo(x, yy);
        c.lineTo(x, yy + 3);
        c.stroke();
      }
    }
    c.restore();
    // 여장(성가퀴)
    for (let i = 0; i < 4; i++) box(c, -16 + i * 8.6, -23, 5.6, 5, 2.5, '#a99c80', { lw: 0.8 });
    // 포구
    for (const x of [-9, 5]) {
      rrect(c, x, -13, 4, 3.4, 1);
      c.fillStyle = '#1d1512';
      c.fill();
      c.strokeStyle = OL;
      c.lineWidth = 0.6;
      c.stroke();
    }
    if (t.level >= 2 && t.branch !== 'B') {
      pillarRow(c, -9, 9, -29, 5, 3);
      dancheongBand(c, -10, -36, 20, 2);
      roof3d(c, 0, -36, 28, 7.5);
    }
  },
  bosingak(c, t) {
    platform(c, 36, 6);
    rrect(c, -15, -8.5, 30, 2.5, 0.8);
    fillToon(c, '#6b4a2b', -15, -8.5, 15, -6, { lw: 0.8 });
    // 안쪽 그늘
    c.fillStyle = 'rgba(30,18,10,0.45)';
    c.fillRect(-12, -30, 24, 22);
    pillarRow(c, -12.5, 12.5, -8, 22, 4);
    dancheongBand(c, -15, -32.5, 30, 2.6);
    roof3d(c, 0, -32.5, 44, 10);
    pillarRow(c, -7, 7, -42.5, 3, 3);
    roof3d(c, 0, -45, 30, 8.5);
  },
  cheomseong(c) {
    platform(c, 30, 3.5, '#c9bd9a');
    const rows = 13;
    for (let r = 0; r < rows; r++) {
      const k = r / rows;
      const w = 11.5 - 4.2 * Math.sin(k * Math.PI * 0.92) + (r === 0 ? 1.8 : 0);
      const y = -3.5 - r * 3.1;
      rrect(c, -w, y - 3.1, w * 2, 3.3, 1.2);
      const g = c.createLinearGradient(-w, 0, w, 0);
      g.addColorStop(0, '#b3a47e');
      g.addColorStop(0.3, '#eee3c4');
      g.addColorStop(0.7, '#d2c49e');
      g.addColorStop(1, '#8f8262');
      c.fillStyle = g;
      c.fill();
      c.strokeStyle = 'rgba(70,55,35,0.7)';
      c.lineWidth = 0.55;
      c.stroke();
    }
    // 창
    rrect(c, -3.2, -25.5, 6.4, 6.4, 0.8);
    c.fillStyle = '#1b120c';
    c.fill();
    c.strokeStyle = OL;
    c.lineWidth = 0.8;
    c.stroke();
    // 정자석
    box(c, -8.5, -43.8, 17, 2.2, 3, '#c2b48d', { lw: 0.8 });
    c.fillStyle = 'rgba(30,20,10,0.55)';
    c.fillRect(-5.5, -47.6, 11, 1.8);
  },
  haeinsa(c, t) {
    platform(c, 40, 5);
    // 판전 벽: 살창
    c.beginPath();
    c.rect(-17, -19, 34, 13.5);
    fillToon(c, '#e0cfa6', -17, -19, 0, -5.5, { lw: 0.9 });
    for (let i = 0; i < 10; i++) {
      rrect(c, -15.2 + i * 3.1, -16.5, 1.5, 9, 0.5);
      c.fillStyle = '#5b3a22';
      c.fill();
    }
    pillarRow(c, -17, 17, -5.5, 13.5, 4, '#9a3a2a');
    dancheongBand(c, -18, -22, 36, 2.4);
    roof3d(c, 0, -22, 48, 10, '#555c68', { ridge: 0.42 });
  },
  seokguram(c, t) {
    platform(c, 38, 3.5, '#cfc9bb');
    // 돔
    c.beginPath();
    c.arc(0, -3.5, 18, Math.PI, 0);
    c.closePath();
    const g = c.createRadialGradient(-7, -16, 2, 0, -3.5, 20);
    g.addColorStop(0, '#fbf8f0');
    g.addColorStop(0.55, '#d8d2c3');
    g.addColorStop(1, '#9e978a');
    c.fillStyle = g;
    c.fill();
    c.strokeStyle = OL;
    c.lineWidth = LW;
    c.stroke();
    c.save();
    c.clip();
    c.strokeStyle = 'rgba(90,80,65,0.35)';
    c.lineWidth = 0.55;
    for (let i = 1; i < 6; i++) {
      c.beginPath();
      c.ellipse(0, -3.5, 18, i * 3.3, 0, Math.PI, 0);
      c.stroke();
    }
    for (let a = 0.25; a < Math.PI; a += 0.35) {
      c.beginPath();
      c.moveTo(0, -21.5);
      c.quadraticCurveTo(Math.cos(Math.PI + a) * 22, -12, Math.cos(Math.PI + a) * 18, -3.5);
      c.stroke();
    }
    c.restore();
    gloss(c, -8, -15, 5, 2.5, 0.45);
    // 입구 (앞으로 튀어나온 전실)
    box(c, -9, -3.5, 18, 12, 3, '#d4cebf', { lw: 0.9 });
    c.beginPath();
    c.moveTo(-5.5, -3.5);
    c.lineTo(-5.5, -10);
    c.arc(0, -10, 5.5, Math.PI, 0);
    c.lineTo(5.5, -3.5);
    c.closePath();
    const g2 = c.createLinearGradient(0, -16, 0, -3);
    g2.addColorStop(0, '#1b140f');
    g2.addColorStop(1, '#3e2f24');
    c.fillStyle = g2;
    c.fill();
    c.strokeStyle = OL;
    c.lineWidth = 0.8;
    c.stroke();
    if (t.level >= 2) sphere(c, 0, -23.5, 1.6, PAL.gold, { lw: 0.6 });
  },
  gyeongbok(c, t) {
    box(c, -21, 0, 42, 5, 5, '#d6cbb2');
    stoneLines(c, -21, 0, 42, 5, 5);
    box(c, -17, -5, 34, 4, 4, '#e3dac6', { lw: 0.9 });
    // 난간
    c.strokeStyle = '#f3ecdc';
    c.lineWidth = 0.9;
    c.beginPath();
    c.moveTo(-16, -10.5);
    c.lineTo(16, -10.5);
    c.stroke();
    // 전각
    c.beginPath();
    c.rect(-14, -22, 28, 12.5);
    fillToon(c, '#e6cf9f', -14, -22, 0, -9.5, { lw: 0.9 });
    for (let i = 0; i < 5; i++) {
      rrect(c, -12 + i * 5, -19.5, 3.4, 9, 0.5);
      fillToon(c, '#7a3a24', -12 + i * 5, -19.5, -8.6 + i * 5, -10.5, { lw: 0.5 });
    }
    pillarRow(c, -14, 14, -9.5, 12.5, 5);
    dancheongBand(c, -16, -25, 32, 2.8);
    roof3d(c, 0, -25, 48, 10.5);
    c.beginPath();
    c.rect(-9, -37, 18, 4.5);
    fillToon(c, '#e6cf9f', -9, -37, 9, -32.5, { lw: 0.8 });
    pillarRow(c, -9, 9, -32.5, 4.5, 4);
    dancheongBand(c, -11, -39.5, 22, 2.4);
    roof3d(c, 0, -39.5, 36, 11);
    if (t.branch === 'A') {
      sphere(c, -6, -56, 2.6, '#d9483b', { lw: 0.7 });
      sphere(c, 6, -56, 2.6, '#f4f1e8', { lw: 0.7 });
    }
    if (t.branch === 'B') {
      box(c, -23, 0, 9, 6, 3, '#7a4e2a', { lw: 0.8 });
      c.fillStyle = PAL.gold;
      c.fillRect(-23, -4, 9, 1.2);
      sphere(c, -18.5, -9.5, 1.8, PAL.gold, { lw: 0.5 });
    }
  },
};

function bodySprite(t) {
  return sprite(`tw:${t.type}:${t.level}:${t.branch || ''}`, BODY_W, BODY_H, BAX, BAY, (c) => BODY[t.type](c, t));
}

// ───────────────────────── 움직이는 부분 ─────────────────────────
function archer(c, x, y, angle, firing, master) {
  c.save();
  c.translate(x, y);
  rrect(c, -2.4, -5.5, 4.8, 5.5, 1.5);
  fillToon(c, master ? '#8a2a22' : '#2f4f7a', -2.4, -5.5, 2.4, 0, { lw: 0.7 });
  sphere(c, 0, -8, 2.6, '#f6cfa3', { lw: 0.7, glossA: 0.3 });
  c.fillStyle = '#231a14';
  c.beginPath();
  c.arc(0, -8.6, 2.8, Math.PI * 1.05, Math.PI * 1.95);
  c.fill();
  c.fillStyle = '#1d1c1a';
  c.beginPath();
  c.ellipse(0, -10.2, 3.6, 0.9, 0, 0, Math.PI * 2);
  c.fill();
  c.rotate(angle);
  c.strokeStyle = OL;
  c.lineWidth = 1.6;
  c.beginPath();
  c.arc(2.5, -3, 4.5, -1.2, 1.2);
  c.stroke();
  c.strokeStyle = '#a0522d';
  c.lineWidth = 0.8;
  c.stroke();
  if (!firing) {
    c.strokeStyle = '#eee';
    c.lineWidth = 0.6;
    c.beginPath();
    c.moveTo(-1, -3);
    c.lineTo(7, -3);
    c.stroke();
  }
  c.restore();
}

function flagLive(c, x, y, h, color, time, dir = 1) {
  c.strokeStyle = OL;
  c.lineWidth = 1.5;
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x, y - h);
  c.stroke();
  c.strokeStyle = '#6b4424';
  c.lineWidth = 0.7;
  c.stroke();
  const w = 9 * dir;
  const wave = Math.sin(time * 5 + x) * 1.4;
  c.beginPath();
  c.moveTo(x, y - h);
  c.quadraticCurveTo(x + w / 2, y - h + wave, x + w, y - h + 1 + wave);
  c.lineTo(x + w, y - h + 6.5 + wave);
  c.quadraticCurveTo(x + w / 2, y - h + 5.5 - wave, x, y - h + 6.5);
  c.closePath();
  fillToon(c, color, x, y - h, x + w, y - h + 6, { lw: 0.7 });
}

const OVERLAY = {
  sungnyemun(c, t, time) {
    const n = t.branch === 'B' ? 3 : 1;
    for (let i = 0; i < n; i++) archer(c, n === 1 ? 0 : -8 + i * 8, -23.5, t.angle ?? -1.2, t.flash > 0, t.branch === 'A');
    if (t.level >= 2) flagLive(c, -18, -13, 22, PAL.dancheongR, time);
    if (t.level >= 3) flagLive(c, 18, -13, 22, PAL.dancheongB, time + 1, -1);
  },
  hwaseong(c, t, time) {
    const a = t.angle ?? -Math.PI / 4;
    c.save();
    c.translate(0, -26);
    if (t.branch === 'B') {
      // 화차
      for (const wx of [-7, 7]) sphere(c, wx, 3, 3, '#4a3322', { lw: 0.8, gloss: false });
      rrect(c, -11, -3, 22, 5, 1);
      fillToon(c, '#8a5a33', -11, -3, 11, 2, { lw: 0.8 });
      c.rotate(Math.max(-2.6, Math.min(-0.5, a)) * 0.3 - 0.45);
      rrect(c, -10, -13, 20, 11, 1.2);
      fillToon(c, '#6b4a2b', -10, -13, 10, -2, { lw: 0.8 });
      c.fillStyle = '#1d1512';
      for (let r = 0; r < 2; r++) for (let k = 0; k < 5; k++) {
        c.beginPath();
        c.arc(-7.5 + k * 3.8, -9.8 + r * 4, 1.1, 0, Math.PI * 2);
        c.fill();
      }
      if (t.flash > 0) glow(c, 0, -15, 14, '#ffb35c', 0.85);
    } else {
      c.rotate(a);
      const big = t.branch === 'A';
      const len = big ? 21 : 14;
      const wid = big ? 6.5 : 4.8;
      const rec = t.flash > 0 ? -3 : 0;
      c.save();
      c.rotate(Math.PI / 2);
      cylinder(c, -wid / 2, -rec + 3, wid, len, big ? '#2a2826' : '#48464a', { lw: 0.8 });
      c.restore();
      sphere(c, 0, 0, wid * 0.62, big ? '#2a2826' : '#48464a', { lw: 0.8 });
      c.fillStyle = PAL.gold;
      c.fillRect(rec + len - 6, -wid / 2 - 0.4, 1.6, wid + 0.8);
      if (t.flash > 0) glow(c, len + 3, 0, 10, '#ffcf6b', 0.9);
    }
    c.restore();
    if (t.level >= 3) flagLive(c, 15, -27, 16, PAL.dancheongY, time);
  },
  bosingak(c, t, time) {
    const swing = t.flash > 0 ? Math.sin(time * 40) * 0.22 : Math.sin(time * 1.5) * 0.02;
    c.save();
    c.translate(0, -29.5);
    c.rotate(swing);
    c.strokeStyle = OL;
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(0, 3);
    c.stroke();
    const big = t.branch === 'A' ? 1.25 : 1;
    c.beginPath();
    c.moveTo(-4.5 * big, 3);
    c.quadraticCurveTo(-5.2 * big, 13 * big, -8 * big, 17 * big);
    c.quadraticCurveTo(0, 18.5 * big, 8 * big, 17 * big);
    c.quadraticCurveTo(5.2 * big, 13 * big, 4.5 * big, 3);
    c.quadraticCurveTo(0, 1.4, -4.5 * big, 3);
    c.closePath();
    fillToon(c, t.branch === 'A' ? '#b8913a' : '#5f8a74', -8, 3, 8, 18, { hi: 0.45 });
    gloss(c, -2.2 * big, 8 * big, 1, 4 * big, 0.45);
    c.fillStyle = PAL.gold;
    c.fillRect(-7 * big, 14 * big, 14 * big, 1.2);
    c.restore();
    if (t.flash > 0) glow(c, 0, -20, 22, t.branch === 'B' ? '#ff8a5c' : '#fff1b0', 0.5);
    if (t.branch === 'B') {
      for (const s of [-1, 1]) {
        sphere(c, s * 15.5, -20, 2.8, '#d9483b', { lw: 0.6 });
        glow(c, s * 15.5, -20, 8, '#ffb35c', 0.45);
      }
    }
    if (t.level >= 3 && !t.branch) flagLive(c, 17, -6, 22, PAL.dancheongR, time);
  },
  cheomseong(c, t, time) {
    const lit = t.flash > 0;
    const col = t.branch === 'B' ? '#c9a6ff' : '#bfe6ff';
    if (t.branch === 'A') {
      c.save();
      c.translate(0, -54);
      c.strokeStyle = PAL.gold;
      c.lineWidth = 1.3;
      for (let i = 0; i < 3; i++) {
        c.beginPath();
        c.ellipse(0, 0, 7.5, 2.6 + i * 2.2, time * (0.8 + i * 0.4) + i, 0, Math.PI * 2);
        c.stroke();
      }
      c.restore();
    }
    glow(c, 0, -54, lit ? 17 : 9, col, lit ? 0.95 : 0.55);
    c.fillStyle = '#fff';
    star(c, 0, -54, lit ? 4.4 : 3);
    c.fill();
    if (t.level >= 2) {
      c.fillStyle = rgba(col, 0.85);
      star(c, -9, -44 + Math.sin(time * 2) * 1.5, 1.6);
      c.fill();
    }
    if (t.level >= 3) {
      c.fillStyle = rgba(col, 0.85);
      star(c, 9, -40 + Math.cos(time * 2) * 1.5, 1.6);
      c.fill();
    }
  },
  haeinsa(c, t, time) {
    const pulse = 0.5 + 0.5 * Math.sin(time * 2.5);
    const y = -40 + Math.sin(time * 1.8) * 1.2;
    glow(c, 0, y, 13 + pulse * 3, '#ffd77a', 0.45);
    lotus(c, 0, y, t.branch ? 7.5 : 5.5, t.branch === 'B' ? '#ffd0a0' : '#f2b8c6');
    if (t.branch === 'A') {
      c.strokeStyle = rgba('#ffd77a', 0.75);
      c.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const a = time + (i * Math.PI) / 3;
        c.beginPath();
        c.moveTo(Math.cos(a) * 10, y + Math.sin(a) * 10);
        c.lineTo(Math.cos(a) * 14, y + Math.sin(a) * 14);
        c.stroke();
      }
    }
    if (t.level >= 3 && !t.branch) flagLive(c, -20, -5, 18, '#d9a300', time);
  },
  seokguram(c, t, time) {
    const pow = t.beamPow || 0;
    glow(c, 0, -12, 11 + pow * 11, '#ffe08a', 0.5 + pow * 0.4);
    sphere(c, 0, -13.2, 2.2, '#f0dfa8', { lw: 0.5, glossA: 0.4 });
    c.beginPath();
    c.ellipse(0, -7.5, 4.2, 3.6, 0, Math.PI, 0);
    c.fillStyle = '#f0dfa8';
    c.fill();
    c.fillRect(-4.2, -7.5, 8.4, 3.5);
    c.strokeStyle = rgba('#ffd24a', 0.6 + pow * 0.4);
    c.lineWidth = 1.3;
    c.beginPath();
    c.arc(0, -13.2, 4.6 + pow * 2, 0, Math.PI * 2);
    c.stroke();
    if (t.branch === 'B') {
      for (let i = 0; i < 5; i++) {
        const a = Math.PI + (i + 0.5) * (Math.PI / 5);
        glow(c, Math.cos(a) * 14, -4 + Math.sin(a) * 14, 4.5, '#ffe08a', 0.85);
      }
    }
  },
  gyeongbok(c, t, time) {
    const pulse = 0.5 + 0.5 * Math.sin(time * 1.6);
    glow(c, 0, -50, 9 + pulse * 3, '#ffd24a', 0.35);
    flagLive(c, -22, -5, 28, PAL.dancheongY, time);
    if (t.level >= 2) flagLive(c, 22, -5, 28, PAL.dancheongR, time + 0.7, -1);
  },
};

// t: {type, level, branch, angle, flash, disabledT, beamPow, owner}
export function drawTower(ctx, t, time, opts = {}) {
  const cx = opts.x ?? (t.x + 0.5) * TS;
  const gy = opts.y ?? (t.y + 0.5) * TS + 15;
  const sc = (0.88 + 0.06 * (t.level - 1) + (t.branch ? 0.08 : 0)) * (opts.scale || 1);
  if (!opts.noShadow) softShadow(ctx, cx, gy, 21 * sc, 6 * sc, 0.34);
  if (opts.owner !== undefined && opts.owner >= 0) {
    ctx.strokeStyle = rgba(opts.owner === 0 ? PAL.p0 : PAL.p1, 0.9);
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.ellipse(cx, gy, 19 * sc, 5.5 * sc, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (opts.direct) {
    ctx.save();
    ctx.translate(cx, gy);
    ctx.scale(sc, sc);
    BODY[t.type](ctx, t);
    ctx.restore();
  } else blit(ctx, bodySprite(t), cx, gy, sc);
  ctx.save();
  ctx.translate(cx, gy);
  ctx.scale(sc, sc);
  OVERLAY[t.type](ctx, t, time);
  if (!opts.noPips) {
    if (t.branch) {
      sphere(ctx, 16, -5, 5.2, t.branch === 'A' ? '#c8412f' : '#2f6fb8', { lw: 0.9 });
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 7px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t.branch === 'A' ? '甲' : '乙', 16, -4.6);
      ctx.textBaseline = 'alphabetic';
    } else {
      for (let i = 0; i < t.level; i++) sphere(ctx, -6 + i * 6, 3.5, 1.9, PAL.gold, { lw: 0.6, gloss: false });
    }
  }
  if (t.disabledT > 0) {
    ctx.fillStyle = 'rgba(30,20,40,0.5)';
    ctx.beginPath();
    ctx.ellipse(0, -22, 20, 26, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ff5a4a';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-10, -32);
    ctx.lineTo(10, -12);
    ctx.moveTo(10, -32);
    ctx.lineTo(-10, -12);
    ctx.stroke();
  }
  ctx.restore();
}

// 건설 메뉴·도감용 아이콘 (직접 크게 그려 선명하게)
const iconCache = new Map();
export function towerIcon(type, level = 1, branch = null, size = 64) {
  const key = `${type}:${level}:${branch}:${size}`;
  if (iconCache.has(key)) return iconCache.get(key);
  const cv = document.createElement('canvas');
  const dpr = 2;
  cv.width = size * dpr;
  cv.height = size * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const sc = 0.88 + 0.06 * (level - 1) + (branch ? 0.08 : 0);
  drawTower(ctx, { type, level, branch, angle: -0.8, flash: 0 }, 0.5, { x: size / 2, y: size * 0.9, scale: size / 62 / sc, noPips: true, direct: true });
  const url = cv.toDataURL();
  iconCache.set(key, url);
  return url;
}

export { roof3d as roof, shade };
