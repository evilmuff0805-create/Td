// 입체 카툰 그리기 도구: 굵은 외곽선 + 왼쪽 위 조명 그라데이션 + 반사광
// 모든 캐릭터·건물이 같은 빛 방향(왼쪽 위)과 같은 외곽선 색을 쓰도록 여기서만 정의한다.
import { shade, rgba } from './paint.js';

export const OL = '#2b1a12'; // 외곽선
export const LW = 1.1; // 기본 외곽선 두께 (단위 좌표)

// 경로를 만든 뒤 호출: 입체 그라데이션으로 채우고 외곽선
export function fillToon(c, color, x0, y0, x1, y1, opts = {}) {
  const g = c.createLinearGradient(x0, y0, x1, y1);
  g.addColorStop(0, shade(color, opts.hi ?? 0.28));
  g.addColorStop(0.55, color);
  g.addColorStop(1, shade(color, -(opts.lo ?? 0.3)));
  c.fillStyle = g;
  c.fill();
  if (opts.outline !== false) {
    c.lineWidth = opts.lw ?? LW;
    c.strokeStyle = opts.ol || OL;
    c.lineJoin = 'round';
    c.stroke();
  }
}

// 광택 구(머리, 포탄, 장식)
export function sphere(c, x, y, r, color, opts = {}) {
  c.beginPath();
  c.arc(x, y, r, 0, Math.PI * 2);
  const g = c.createRadialGradient(x - r * 0.38, y - r * 0.42, r * 0.08, x, y, r * 1.05);
  g.addColorStop(0, shade(color, opts.hi ?? 0.4));
  g.addColorStop(0.5, color);
  g.addColorStop(1, shade(color, -(opts.lo ?? 0.38)));
  c.fillStyle = g;
  c.fill();
  if (opts.outline !== false) {
    c.lineWidth = opts.lw ?? LW;
    c.strokeStyle = OL;
    c.stroke();
  }
  if (opts.gloss !== false) gloss(c, x - r * 0.36, y - r * 0.42, r * 0.3, r * 0.17, opts.glossA ?? 0.55);
}

export function gloss(c, x, y, rx, ry, a = 0.55) {
  c.fillStyle = `rgba(255,255,255,${a})`;
  c.beginPath();
  c.ellipse(x, y, rx, ry, -0.55, 0, Math.PI * 2);
  c.fill();
}

// 둥근 사각형 (몸통, 팔다리, 판자)
export function rrect(c, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + rr, y);
  c.arcTo(x + w, y, x + w, y + h, rr);
  c.arcTo(x + w, y + h, x, y + h, rr);
  c.arcTo(x, y + h, x, y, rr);
  c.arcTo(x, y, x + w, y, rr);
  c.closePath();
}

export function capsule(c, x, y, w, h, r, color, opts = {}) {
  rrect(c, x, y, w, h, r);
  fillToon(c, color, x, y, x + w * 0.6, y + h, opts);
}

// 앞에서 약간 위로 내려다본 상자: 앞면 + 윗면
export function box(c, x, y, w, h, top, color, opts = {}) {
  // (x, y) = 앞면 왼쪽 아래, top = 윗면 깊이
  const inset = top * 0.35;
  c.beginPath();
  c.moveTo(x, y - h);
  c.lineTo(x + inset, y - h - top);
  c.lineTo(x + w - inset, y - h - top);
  c.lineTo(x + w, y - h);
  c.closePath();
  c.fillStyle = shade(color, 0.3);
  c.fill();
  c.lineWidth = opts.lw ?? LW;
  c.strokeStyle = OL;
  c.stroke();
  c.beginPath();
  c.rect(x, y - h, w, h);
  fillToon(c, color, x, y - h, x + w * 0.3, y, { hi: 0.12, lo: 0.3, lw: opts.lw });
}

// 원기둥 (기둥, 포신, 종)
export function cylinder(c, x, y, w, h, color, opts = {}) {
  const g = c.createLinearGradient(x, 0, x + w, 0);
  g.addColorStop(0, shade(color, 0.15));
  g.addColorStop(0.3, shade(color, 0.45));
  g.addColorStop(0.65, color);
  g.addColorStop(1, shade(color, -0.4));
  c.fillStyle = g;
  c.beginPath();
  c.rect(x, y - h, w, h);
  c.fill();
  if (opts.outline !== false) {
    c.lineWidth = opts.lw ?? LW * 0.8;
    c.strokeStyle = OL;
    c.stroke();
  }
}

// 바닥 그림자 (부드러운 가장자리)
export function softShadow(c, x, y, rx, ry, a = 0.32) {
  c.save();
  c.translate(x, y);
  c.scale(1, ry / rx);
  const g = c.createRadialGradient(0, 0, 0, 0, 0, rx);
  g.addColorStop(0, `rgba(20,12,6,${a})`);
  g.addColorStop(0.65, `rgba(20,12,6,${a * 0.55})`);
  g.addColorStop(1, 'rgba(20,12,6,0)');
  c.fillStyle = g;
  c.beginPath();
  c.arc(0, 0, rx, 0, Math.PI * 2);
  c.fill();
  c.restore();
}

// 큰 만화 눈
export function eye(c, x, y, s, look = 0.35, mood = 'calm') {
  c.fillStyle = '#fffdf6';
  c.beginPath();
  c.ellipse(x, y, s * 0.85, s * 1.1, 0, 0, Math.PI * 2);
  c.fill();
  c.lineWidth = s * 0.28;
  c.strokeStyle = OL;
  c.stroke();
  c.fillStyle = mood === 'glow' ? '#ff3b3b' : '#2a1a14';
  c.beginPath();
  c.ellipse(x + look * s, y + s * 0.1, s * 0.55, s * 0.72, 0, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#ffffff';
  c.beginPath();
  c.arc(x + look * s - s * 0.2, y - s * 0.28, s * 0.24, 0, Math.PI * 2);
  c.fill();
  if (mood === 'angry') {
    c.strokeStyle = OL;
    c.lineWidth = s * 0.45;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(x - s * 0.9, y - s * 1.45);
    c.lineTo(x + s * 0.8, y - s * 0.95);
    c.stroke();
  } else if (mood === 'calm') {
    c.strokeStyle = OL;
    c.lineWidth = s * 0.35;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(x - s * 0.7, y - s * 1.55);
    c.quadraticCurveTo(x, y - s * 1.85, x + s * 0.75, y - s * 1.5);
    c.stroke();
  }
}

// 스프라이트 캐시: 한 번 그려 두고 이미지로 찍는다 (해상도 3배)
const SPR_RES = 3;
const cache = new Map();

export function sprite(key, w, h, ax, ay, draw) {
  let s = cache.get(key);
  if (!s) {
    const cv = document.createElement('canvas');
    cv.width = Math.ceil(w * SPR_RES);
    cv.height = Math.ceil(h * SPR_RES);
    const c = cv.getContext('2d');
    c.scale(SPR_RES, SPR_RES);
    c.translate(ax, ay);
    draw(c);
    s = { cv, w, h, ax, ay };
    cache.set(key, s);
    if (cache.size > 2500) cache.delete(cache.keys().next().value);
  }
  return s;
}

export function blit(ctx, s, x, y, scale = 1, flip = false) {
  if (flip) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(-1, 1);
    ctx.drawImage(s.cv, -s.ax * scale, -s.ay * scale, s.w * scale, s.h * scale);
    ctx.restore();
  } else {
    ctx.drawImage(s.cv, x - s.ax * scale, y - s.ay * scale, s.w * scale, s.h * scale);
  }
}

export { shade, rgba };
