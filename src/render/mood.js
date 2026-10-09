// 전장 분위기 (영화풍): 차갑고 어두운 땅 위에 따뜻한 불빛 웅덩이
// - 바탕은 두 벌로 미리 칠해 둔다: 어두운 밤(dark)과 불빛에 비친 모습(lit)
// - 매 프레임 유산 · 영웅 · 성 주변만 lit 를 드러내 "불빛이 땅을 비추는" 느낌을 낸다
// - 유닛은 보정하지 않아 어두운 땅 위에서 또렷하다
import { TS, rgba, glow } from './paint.js';

export const MOODS = {
  winter: {
    name: '눈 내리는 달밤',
    dark: { grade: 'brightness(0.62) saturate(1.05) contrast(1.12)', tint: '#3d5fa8', tintA: 0.72 },
    lit: { grade: 'brightness(1.02) saturate(0.95)', tint: '#ffcf9a', tintA: 0.35 },
    moon: '#9fc2ff', moonA: 0.22, vig: 0.66, fog: '#c8d8f0', fogA: 0.05, glow: '#ffa257',
  },
  spring: {
    name: '안개 낀 새벽',
    dark: { grade: 'brightness(0.62) saturate(0.95) contrast(1.1)', tint: '#4b5596', tintA: 0.62 },
    lit: { grade: 'brightness(1.0) saturate(1)', tint: '#ffd8a8', tintA: 0.3 },
    moon: '#cfd8ff', moonA: 0.18, vig: 0.6, fog: '#dfe4f6', fogA: 0.08, glow: '#ffae60',
  },
  summer: {
    name: '해 질 녘',
    dark: { grade: 'brightness(0.62) saturate(1) contrast(1.12)', tint: '#6a4a86', tintA: 0.58 },
    lit: { grade: 'brightness(1.02) saturate(1.05)', tint: '#ffc890', tintA: 0.35 },
    moon: '#ffc08a', moonA: 0.18, vig: 0.62, fog: '#ffd8b0', fogA: 0.04, glow: '#ffa050',
  },
  autumn: {
    name: '붉은 노을',
    dark: { grade: 'brightness(0.6) saturate(1) contrast(1.12)', tint: '#7a4e5a', tintA: 0.55 },
    lit: { grade: 'brightness(1.02) saturate(1.05)', tint: '#ffbe85', tintA: 0.38 },
    moon: '#ffa868', moonA: 0.2, vig: 0.64, fog: '#ffd0a8', fogA: 0.04, glow: '#ff9a48',
  },
  sea: {
    name: '폭풍 치는 밤바다',
    dark: { grade: 'brightness(0.58) saturate(1) contrast(1.14)', tint: '#2f6390', tintA: 0.72 },
    lit: { grade: 'brightness(1.0) saturate(0.95)', tint: '#ffd2a0', tintA: 0.32 },
    moon: '#a6dcff', moonA: 0.2, vig: 0.68, fog: '#c0d8e8', fogA: 0.07, glow: '#ffa257',
  },
};

export function moodOf(stage) {
  return MOODS[stage.season] || MOODS.spring;
}

function graded(bg, g, W, H, dpr) {
  const cv = document.createElement('canvas');
  cv.width = bg.width;
  cv.height = bg.height;
  const c = cv.getContext('2d');
  c.filter = g.grade;
  c.drawImage(bg, 0, 0);
  c.filter = 'none';
  c.scale(dpr, dpr);
  c.globalCompositeOperation = 'multiply';
  c.fillStyle = rgba(g.tint, g.tintA);
  c.fillRect(0, 0, W, H);
  c.globalCompositeOperation = 'source-over';
  return cv;
}

// 바탕 두 벌 (전장 준비 때 한 번)
export function gradeBackground(bg, mood, W, H, dpr) {
  const dark = graded(bg, mood.dark, W, H, dpr);
  const c = dark.getContext('2d');
  // 왼쪽 위에서 비추는 달빛(노을빛)
  c.globalCompositeOperation = 'screen';
  const mg = c.createRadialGradient(W * 0.15, -H * 0.15, 0, W * 0.15, -H * 0.15, W * 0.9);
  mg.addColorStop(0, rgba(mood.moon, mood.moonA * 1.7));
  mg.addColorStop(0.5, rgba(mood.moon, mood.moonA * 0.45));
  mg.addColorStop(1, rgba(mood.moon, 0));
  c.fillStyle = mg;
  c.fillRect(0, 0, W, H);
  c.globalCompositeOperation = 'source-over';
  // 불빛 합성용 작업판 (화면 크기 1배면 충분: 불빛 가장자리는 어차피 부드럽다)
  const work = document.createElement('canvas');
  work.width = W;
  work.height = H;
  return { dark, lit: graded(bg, mood.lit, W, H, dpr), work };
}

// 화면 마지막에 덮는 빛: 짙은 가장자리 (한 번만 그려 둔다)
export function makeMoodLight(mood, W, H) {
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const c = cv.getContext('2d');
  const vg = c.createRadialGradient(W * 0.5, H * 0.48, H * 0.28, W * 0.5, H * 0.5, W * 0.62);
  vg.addColorStop(0, 'rgba(4,6,14,0)');
  vg.addColorStop(1, `rgba(4,6,14,${mood.vig})`);
  c.fillStyle = vg;
  c.fillRect(0, 0, W, H);
  return cv;
}

// 지금 불이 켜진 곳: 유산 등불, 영웅 횃불, 성 횃불, 왜군이 들어오는 길목의 붉은 불
function lightsOf(v, map, time) {
  const fl = (k) => 0.88 + 0.12 * Math.sin(time * 9 + k * 1.7) * Math.sin(time * 5.3 + k);
  const out = [];
  for (const t of v.towers) out.push({ x: (t.x + 0.5) * TS, y: (t.y + 0.5) * TS + 4, r: 74, a: 0.9 * fl(t.id) });
  for (const h of v.heroes) if (!h.dead) out.push({ x: h.x * TS, y: h.y * TS + 4, r: 64, a: 0.75 * fl(h.id + 3) });
  if (map.base) out.push({ x: (map.base.x + 0.5) * TS, y: (map.base.y + 0.5) * TS, r: 150, a: 1 * fl(7) });
  for (const p of map.paths) out.push({ x: p.pts[0].x * TS, y: p.pts[0].y * TS, r: 70, a: 0.45 });
  return out;
}

// 불빛 웅덩이: 불빛 모양 가면을 만들고, 그 안에만 lit 바탕을 그린다
export function drawLightPools(ctx, layers, v, map, time, W, H) {
  const c = layers.work.getContext('2d');
  c.globalCompositeOperation = 'source-over';
  c.clearRect(0, 0, W, H);
  for (const L of lightsOf(v, map, time)) {
    const g = c.createRadialGradient(L.x, L.y, 0, L.x, L.y, L.r);
    g.addColorStop(0, `rgba(255,255,255,${L.a})`);
    g.addColorStop(0.55, `rgba(255,255,255,${L.a * 0.45})`);
    g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g;
    c.fillRect(L.x - L.r, L.y - L.r, L.r * 2, L.r * 2);
  }
  c.globalCompositeOperation = 'source-in';
  c.drawImage(layers.lit, 0, 0, W, H);
  c.globalCompositeOperation = 'source-over';
  ctx.drawImage(layers.work, 0, 0, W, H);
}

// 불빛 번짐 (유닛 위에 아주 살짝 더한다)
export function drawMoodGlow(ctx, v, map, mood, time, strength = 1) {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const L of lightsOf(v, map, time)) glow(ctx, L.x, L.y - 8, L.r * 0.6, mood.glow, 0.07 * strength * L.a);
  ctx.restore();
}

// 낮게 깔려 흘러가는 안개 띠
export function drawFog(ctx, fog, mood, W, H, dt) {
  if (!mood.fogA) return;
  for (const f of fog) {
    f.x += f.v * dt;
    if (f.x - f.w > W) f.x = -f.w;
    const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.w);
    g.addColorStop(0, rgba(mood.fog, mood.fogA));
    g.addColorStop(1, rgba(mood.fog, 0));
    ctx.save();
    ctx.translate(0, f.y);
    ctx.scale(1, 0.35);
    ctx.translate(0, -f.y);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.w, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
