// 공용 그리기 도구 — 기와지붕, 단청, 기둥, 석축 등 한국 건축 요소
export const TS = 40; // 타일 픽셀 크기

export const PAL = {
  ink: '#1d1c1a',
  hanji: '#f3ead6',
  roof: '#3a4150',
  roofLight: '#56607a',
  roofEdge: '#262b36',
  pillar: '#a8322a',
  pillarDark: '#7a221c',
  dancheongG: '#2f8f7a',
  dancheongB: '#2f5f8f',
  dancheongR: '#c8412f',
  dancheongY: '#e7b83a',
  stone: '#cfc6b0',
  stoneDark: '#a39a84',
  stoneLine: '#8d8470',
  wood: '#8a5a33',
  gold: '#e7b83a',
  p0: '#3d7fd6', // 청
  p1: '#d9483b', // 홍
};

export function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255;
  let g = (n >> 8) & 255;
  let b = n & 255;
  if (amt >= 0) {
    r += (255 - r) * amt;
    g += (255 - g) * amt;
    b += (255 - b) * amt;
  } else {
    r *= 1 + amt;
    g *= 1 + amt;
    b *= 1 + amt;
  }
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

export function rgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

// 처마가 들린 팔작/우진각 지붕. (cx, y) = 처마선 중앙, w = 처마 폭, h = 지붕 높이
export function roof(ctx, cx, y, w, h, color = PAL.roof, opts = {}) {
  const lift = opts.lift ?? h * 0.35; // 처마 끝이 들리는 정도
  const ridge = opts.ridge ?? 0.32; // 용마루 길이 비율
  ctx.save();
  // 지붕면
  ctx.beginPath();
  ctx.moveTo(cx - w / 2, y - lift);
  ctx.quadraticCurveTo(cx - w * 0.36, y + h * 0.12, cx - w * 0.18, y + h * 0.08);
  ctx.lineTo(cx + w * 0.18, y + h * 0.08);
  ctx.quadraticCurveTo(cx + w * 0.36, y + h * 0.12, cx + w / 2, y - lift);
  ctx.quadraticCurveTo(cx + w * 0.3, y - h * 0.55, cx + w * ridge, y - h);
  ctx.lineTo(cx - w * ridge, y - h);
  ctx.quadraticCurveTo(cx - w * 0.3, y - h * 0.55, cx - w / 2, y - lift);
  ctx.closePath();
  const g = ctx.createLinearGradient(0, y - h, 0, y + h * 0.1);
  g.addColorStop(0, shade(color, 0.12));
  g.addColorStop(1, shade(color, -0.2));
  ctx.fillStyle = g;
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = PAL.roofEdge;
  ctx.stroke();
  // 기와 골 (세로줄)
  if (w > 18) {
    ctx.strokeStyle = 'rgba(255,255,255,0.13)';
    ctx.lineWidth = 0.8;
    const n = Math.max(3, Math.floor(w / 5));
    for (let i = 1; i < n; i++) {
      const t = i / n;
      const x = cx - w / 2 + w * t;
      const topX = cx - w * ridge + w * ridge * 2 * t;
      ctx.beginPath();
      ctx.moveTo(topX, y - h + 1);
      ctx.lineTo(x, y + h * 0.02 - (Math.abs(t - 0.5) > 0.4 ? lift * 0.5 : 0));
      ctx.stroke();
    }
  }
  // 용마루
  ctx.fillStyle = shade(color, -0.35);
  ctx.fillRect(cx - w * ridge - 1, y - h - 2, w * ridge * 2 + 2, 3);
  // 치미 (용마루 끝 장식)
  ctx.beginPath();
  ctx.arc(cx - w * ridge - 1, y - h - 2, 2, 0, Math.PI * 2);
  ctx.arc(cx + w * ridge + 1, y - h - 2, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// 단청 띠
export function dancheong(ctx, x, y, w, h = 3) {
  ctx.fillStyle = PAL.dancheongG;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = PAL.dancheongR;
  const n = Math.max(2, Math.floor(w / 6));
  for (let i = 0; i < n; i++) {
    ctx.fillRect(x + (i + 0.3) * (w / n), y + h * 0.25, (w / n) * 0.4, h * 0.5);
  }
  ctx.fillStyle = 'rgba(231,184,58,0.9)';
  ctx.fillRect(x, y + h - 0.8, w, 0.8);
}

export function pillars(ctx, x1, x2, y, h, n = 4) {
  ctx.fillStyle = PAL.pillar;
  for (let i = 0; i < n; i++) {
    const x = x1 + ((x2 - x1) * i) / (n - 1);
    ctx.fillRect(x - 1.2, y - h, 2.4, h);
  }
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.fillRect(x1 - 1.2, y - h, x2 - x1 + 2.4, 1.5);
}

// 석축 기단
export function stoneBase(ctx, cx, y, w, h, color = PAL.stone) {
  ctx.fillStyle = color;
  ctx.fillRect(cx - w / 2, y - h, w, h);
  ctx.strokeStyle = PAL.stoneLine;
  ctx.lineWidth = 0.6;
  const rows = Math.max(1, Math.round(h / 4));
  for (let r = 0; r < rows; r++) {
    const yy = y - h + (r * h) / rows;
    ctx.beginPath();
    ctx.moveTo(cx - w / 2, yy);
    ctx.lineTo(cx + w / 2, yy);
    ctx.stroke();
    const off = r % 2 ? 3 : 0;
    for (let x = cx - w / 2 + off + 5; x < cx + w / 2; x += 7) {
      ctx.beginPath();
      ctx.moveTo(x, yy);
      ctx.lineTo(x, yy + h / rows);
      ctx.stroke();
    }
  }
  ctx.strokeStyle = shade(color, -0.35);
  ctx.lineWidth = 1;
  ctx.strokeRect(cx - w / 2, y - h, w, h);
}

export function shadow(ctx, cx, cy, rx, ry, a = 0.25) {
  ctx.fillStyle = `rgba(0,0,0,${a})`;
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
}

export function flag(ctx, x, y, h, color, t = 0, w = 9) {
  ctx.strokeStyle = '#4a3322';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - h);
  ctx.stroke();
  const wave = Math.sin(t * 5 + x) * 1.5;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y - h);
  ctx.quadraticCurveTo(x + w / 2, y - h + wave, x + w, y - h + 1 + wave);
  ctx.lineTo(x + w, y - h + 6 + wave);
  ctx.quadraticCurveTo(x + w / 2, y - h + 5 - wave, x, y - h + 6);
  ctx.closePath();
  ctx.fill();
}

export function star(ctx, x, y, r, n = 5, inner = 0.45) {
  ctx.beginPath();
  for (let i = 0; i < n * 2; i++) {
    const a = (Math.PI * i) / n - Math.PI / 2;
    const rr = i % 2 ? r * inner : r;
    ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  ctx.closePath();
}

export function glow(ctx, x, y, r, color, a = 0.6) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, rgba(color, a));
  g.addColorStop(1, rgba(color, 0));
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

export function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// 연꽃 문양
export function lotus(ctx, x, y, r, color = '#f2b8c6') {
  ctx.fillStyle = color;
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (i - 2) * 0.55;
    ctx.beginPath();
    ctx.ellipse(x + Math.cos(a) * r * 0.5, y + Math.sin(a) * r * 0.5, r * 0.28, r * 0.6, a + Math.PI / 2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = PAL.gold;
  ctx.beginPath();
  ctx.arc(x, y, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
}

// 태극 (공명 게이지 등)
export function taegeuk(ctx, x, y, r, rot = 0, blue = '#2f5fb8', red = '#cf3a30') {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.fillStyle = red;
  ctx.beginPath();
  ctx.arc(0, 0, r, Math.PI, 0);
  ctx.arc(r / 2, 0, r / 2, 0, Math.PI, true);
  ctx.arc(-r / 2, 0, r / 2, 0, Math.PI);
  ctx.fill();
  ctx.fillStyle = blue;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI);
  ctx.arc(-r / 2, 0, r / 2, Math.PI, 0, true);
  ctx.arc(r / 2, 0, r / 2, Math.PI, 0);
  ctx.fill();
  ctx.restore();
}
