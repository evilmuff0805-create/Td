// 지도 배경 사전 렌더링 (계절별 팔레트, 길, 물, 장식)
import { TS, PAL, rgba } from './paint.js';
import { OL, fillToon, sphere, gloss, rrect, box, cylinder, softShadow, eye, sprite, blit } from './toon.js';
import { roof3d } from './draw-towers.js';
import { T_WATER, T_PATH, T_BASE } from '../sim/map.js';
import { makeRng, hashSeed } from '../sim/rng.js';

export const SEASONS = {
  spring: { ground: '#a8c47c', ground2: '#94b56b', path: '#d2b98f', pathEdge: '#a88c63', water: '#4d8fb3', flower: ['#f29bb8', '#fff2f6', '#f7c6d6'], tree: '#355e3b', sky: '#f7eed8' },
  summer: { ground: '#8dbb62', ground2: '#78a653', path: '#cbb083', pathEdge: '#9e8358', water: '#3f86ad', flower: ['#f6d54a', '#ffffff', '#f09a4a'], tree: '#2c5530', sky: '#eef3dd' },
  sea: { ground: '#b5c98a', ground2: '#a2b877', path: '#dcc99d', pathEdge: '#b19c6f', water: '#2f7fae', flower: ['#ffffff', '#b7e0f0', '#f6d54a'], tree: '#2f5a3a', sky: '#e8f2f2' },
  winter: { ground: '#e8edf1', ground2: '#d5dee6', path: '#b8ab98', pathEdge: '#8f8472', water: '#6d9cb8', flower: ['#ffffff', '#dfe8f0', '#c9d6e2'], tree: '#2f4a3a', sky: '#eef2f5', snow: true },
  autumn: { ground: '#c7b377', ground2: '#b39f63', path: '#bfa073', pathEdge: '#8e7350', water: '#4a86a6', flower: ['#e0562f', '#f0a13a', '#f7d77c'], tree: '#6b5a2a', sky: '#f4e8d0', maple: true },
};

export function renderMapBackground(map, stage, dpr = 1) {
  const W = map.w * TS;
  const H = map.h * TS;
  const cv = document.createElement('canvas');
  cv.width = W * dpr;
  cv.height = H * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const pal = SEASONS[stage.season] || SEASONS.spring;
  const rnd = makeRng(hashSeed(stage.id));

  // 바탕
  ctx.fillStyle = pal.ground;
  ctx.fillRect(0, 0, W, H);
  // 얼룩 (수채화 느낌)
  for (let i = 0; i < 220; i++) {
    const x = rnd() * W;
    const y = rnd() * H;
    const r = 10 + rnd() * 40;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const light = rnd() < 0.35;
    const col = light ? '#fffbe8' : pal.ground2;
    g.addColorStop(0, rgba(col, light ? 0.12 : 0.4));
    g.addColorStop(1, rgba(col, 0));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  // 풀잎 / 눈 결정
  for (let i = 0; i < 900; i++) {
    const x = rnd() * W;
    const y = rnd() * H;
    if (pal.snow) {
      ctx.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.8)' : 'rgba(160,180,200,0.25)';
      ctx.fillRect(x, y, 1.5, 1.5);
    } else {
      ctx.strokeStyle = rnd() < 0.5 ? rgba(pal.tree, 0.25) : 'rgba(255,255,230,0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (rnd() - 0.5) * 3, y - 3 - rnd() * 3);
      ctx.stroke();
    }
  }

  // 물 (볼록한 모서리는 둥글게, 물가는 모래/눈 띠)
  const isW = (x, y) => x < 0 || y < 0 || x >= map.w || y >= map.h ? true : map.grid[y * map.w + x] === T_WATER;
  const R = 13;
  for (const layer of ['shore', 'foam', 'water']) {
    for (let y = 0; y < map.h; y++) {
      for (let x = 0; x < map.w; x++) {
        if (!isW(x, y) || x < 0) continue;
        const up = isW(x, y - 1);
        const dn = isW(x, y + 1);
        const lf = isW(x - 1, y);
        const rt = isW(x + 1, y);
        const radii = [!up && !lf ? R : 0, !up && !rt ? R : 0, !dn && !rt ? R : 0, !dn && !lf ? R : 0];
        const e = layer === 'shore' ? 6 : layer === 'foam' ? 2.5 : 0;
        const x0 = x * TS - (lf ? 0 : e);
        const y0 = y * TS - (up ? 0 : e);
        const x1 = (x + 1) * TS + (rt ? 0 : e);
        const y1 = (y + 1) * TS + (dn ? 0 : e);
        ctx.fillStyle = layer === 'shore' ? (pal.snow ? '#f7f9fb' : '#e6d6a8') : layer === 'foam' ? 'rgba(255,255,255,0.75)' : pal.water;
        ctx.beginPath();
        ctx.roundRect(x0, y0, x1 - x0, y1 - y0, radii.map((r) => (r ? r + e : 0)));
        ctx.fill();
      }
    }
  }
  for (let y = 0; y < map.h; y++) {
    for (let x = 0; x < map.w; x++) {
      if (map.grid[y * map.w + x] !== T_WATER) continue;
      // 물결
      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth = 1;
      for (let k = 0; k < 2; k++) {
        const wx = x * TS + 6 + rnd() * 20;
        const wy = y * TS + 8 + rnd() * 26;
        ctx.beginPath();
        ctx.moveTo(wx, wy);
        ctx.quadraticCurveTo(wx + 4, wy - 3, wx + 8, wy);
        ctx.quadraticCurveTo(wx + 12, wy + 3, wx + 16, wy);
        ctx.stroke();
      }
    }
  }

  // 길
  for (const edge of [true, false]) {
    for (const p of map.paths) {
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = edge ? pal.pathEdge : pal.path;
      ctx.lineWidth = edge ? TS * 0.92 : TS * 0.78;
      ctx.beginPath();
      p.pts.forEach((q, i) => (i ? ctx.lineTo(q.x * TS, q.y * TS) : ctx.moveTo(q.x * TS, q.y * TS)));
      ctx.stroke();
    }
  }
  // 길 질감: 가운데 밝은 흙
  for (const p of map.paths) {
    ctx.strokeStyle = 'rgba(255,245,220,0.18)';
    ctx.lineWidth = TS * 0.3;
    ctx.beginPath();
    p.pts.forEach((q, i) => (i ? ctx.lineTo(q.x * TS, q.y * TS) : ctx.moveTo(q.x * TS, q.y * TS)));
    ctx.stroke();
  }
  for (let y = 0; y < map.h; y++) {
    for (let x = 0; x < map.w; x++) {
      const t = map.grid[y * map.w + x];
      if (t !== T_PATH && t !== T_BASE) continue;
      for (let k = 0; k < 5; k++) {
        ctx.fillStyle = rnd() < 0.5 ? rgba(pal.pathEdge, 0.5) : 'rgba(255,255,255,0.25)';
        ctx.beginPath();
        ctx.arc(x * TS + 5 + rnd() * 30, y * TS + 5 + rnd() * 30, 0.8 + rnd() * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (pal.snow && rnd() < 0.6) {
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.beginPath();
        ctx.ellipse(x * TS + rnd() * 40, y * TS + rnd() * 40, 6, 3, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // 궁궐 마당 (K 구역): 박석 바닥 + 담장 + 전각
  const K = map.decor.filter((d) => d.ch === 'K');
  if (K.length) drawPalaceCourt(ctx, map, K, pal);
  // 장식 (y 정렬)
  const decor = map.decor.filter((d) => d.ch !== 'K').sort((a, b) => a.y - b.y);
  for (const d of decor) drawDecor(ctx, d, pal, rnd);

  // 가장자리 비네트
  const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.45, W / 2, H / 2, Math.max(W, H) * 0.75);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(40,25,5,0.28)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);
  return cv;
}

function drawDecor(ctx, d, pal, rnd) {
  const x = d.x * TS + TS / 2;
  const y = d.y * TS + TS / 2;
  switch (d.ch) {
    case 'f': {
      for (let i = 0; i < 7; i++) {
        const fx = x - 14 + rnd() * 28;
        const fy = y - 14 + rnd() * 28;
        ctx.fillStyle = pal.flower[Math.floor(rnd() * pal.flower.length)];
        for (let k = 0; k < 4; k++) {
          ctx.beginPath();
          ctx.arc(fx + Math.cos(k * 1.57) * 1.6, fy + Math.sin(k * 1.57) * 1.6, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      break;
    }
    case 'T':
      if (pal.maple && rnd() < 0.5) mapleTree(ctx, x, y, rnd);
      else pineTree(ctx, x, y, pal, rnd);
      break;
    case 'B':
      bamboo(ctx, x, y, rnd);
      break;
    case 'R':
      rock(ctx, x, y, pal, rnd);
      break;
    case 'H':
      house(ctx, x, y, pal);
      break;
    case 'J':
      jangseung(ctx, x, y);
      break;
    case 'M':
      mountain(ctx, x, y, pal, rnd);
      break;
  }
}

function pineTree(ctx, x, y, pal, rnd) {
  softShadow(ctx, x + 3, y + 14, 15, 5, 0.3);
  const lean = (rnd() - 0.5) * 6;
  // 줄기
  ctx.beginPath();
  ctx.moveTo(x - 2.6, y + 14);
  ctx.quadraticCurveTo(x - 2 + lean, y + 2, x - 1.2 + lean * 0.7, y - 10);
  ctx.lineTo(x + 1.8 + lean * 0.7, y - 10);
  ctx.quadraticCurveTo(x + 2 + lean, y + 2, x + 2.6, y + 14);
  ctx.closePath();
  fillToon(ctx, '#8a4a2c', x - 3, y - 10, x + 3, y + 14, { lw: 1 });
  // 동글동글한 솔잎 뭉치 (아래 → 위)
  const leaf = pal.tree;
  const blobs = [[-7.5, -2, 8], [6.5, -3, 7.5], [lean * 0.4 - 1, -9, 9.5], [lean * 0.6 + 3, -15, 6.5], [lean * 0.6 - 4, -15.5, 6]];
  for (const [ox, oy, r] of blobs) {
    ctx.beginPath();
    ctx.ellipse(x + ox, y + oy, r * 1.25, r * 0.8, 0, 0, Math.PI * 2);
    fillToon(ctx, leaf, x + ox - r, y + oy - r, x + ox + r * 0.6, y + oy + r, { lw: 1, hi: 0.35, lo: 0.35 });
    if (pal.snow) {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(x + ox - r * 0.1, y + oy - r * 0.42, r * 0.95, r * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(120,150,180,0.6)';
      ctx.lineWidth = 0.7;
      ctx.stroke();
    } else gloss(ctx, x + ox - r * 0.35, y + oy - r * 0.35, r * 0.45, r * 0.18, 0.3);
  }
}

function mapleTree(ctx, x, y, rnd) {
  softShadow(ctx, x + 3, y + 14, 14, 5, 0.3);
  ctx.beginPath();
  ctx.rect(x - 2.2, y - 4, 4.4, 18);
  fillToon(ctx, '#6b4424', x - 2, y - 4, x + 2, y + 14, { lw: 1 });
  const cols = ['#d4452f', '#e57b2c', '#f2a93b', '#c0331f'];
  const blobs = [[-7, -8, 7.5], [7, -9, 7], [0, -15, 9], [-3, -6, 6.5], [4, -5, 6]];
  for (const [ox, oy, r] of blobs) sphere(ctx, x + ox, y + oy, r, cols[Math.floor(rnd() * cols.length)], { lw: 1, glossA: 0.3 });
}

function bamboo(ctx, x, y, rnd) {
  for (let i = 0; i < 4; i++) {
    const bx = x - 10 + i * 6 + rnd() * 2;
    cylinder(ctx, bx - 1.4, y + 16, 2.8, 34, '#6f9e45', { lw: 0.8 });
    ctx.beginPath();
    ctx.ellipse(bx + 5, y - 10 + i * 3, 5, 1.7, -0.5, 0, Math.PI * 2);
    fillToon(ctx, '#8cc25a', bx, y - 12, bx + 9, y - 8, { lw: 0.7 });
  }
}

// 각진 바위 (밝은 면 · 어두운 면)
function rock(ctx, x, y, pal, rnd) {
  softShadow(ctx, x + 2, y + 10, 15, 4.5, 0.32);
  const top = { x: x - 2 + rnd() * 3, y: y - 11 - rnd() * 3 };
  const pts = [[x - 14, y + 9], [x - 10, y - 4], [top.x, top.y], [x + 9, y - 6], [x + 14, y + 9]];
  ctx.beginPath();
  pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py)));
  ctx.closePath();
  fillToon(ctx, '#9d998e', x - 14, y - 12, x + 14, y + 9, { lw: 1.1 });
  // 밝은 면
  ctx.beginPath();
  ctx.moveTo(x - 10, y - 4);
  ctx.lineTo(top.x, top.y);
  ctx.lineTo(x + 1, y + 1);
  ctx.lineTo(x - 7, y + 5);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.fill();
  // 어두운 면
  ctx.beginPath();
  ctx.moveTo(x + 9, y - 6);
  ctx.lineTo(x + 14, y + 9);
  ctx.lineTo(x + 3, y + 9);
  ctx.lineTo(x + 1, y + 1);
  ctx.closePath();
  ctx.fillStyle = 'rgba(30,25,20,0.22)';
  ctx.fill();
  if (pal.snow) {
    ctx.beginPath();
    ctx.ellipse(top.x - 1, top.y + 3, 8, 3.2, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
}

// 초가집: 흙벽 상자 + 둥근 이엉 지붕
function house(ctx, x, y, pal) {
  softShadow(ctx, x + 2, y + 13, 19, 5.5, 0.32);
  box(ctx, x - 13, y + 12, 26, 13, 4, '#e8d6b0');
  rrect(ctx, x - 3, y + 2.5, 6, 9.5, 1);
  fillToon(ctx, '#5b3f28', x - 3, y + 2.5, x + 3, y + 12, { lw: 0.8 });
  for (const wx of [-10, 5.2]) {
    rrect(ctx, x + wx, y + 2.5, 4.8, 4, 0.6);
    fillToon(ctx, '#d0bb8a', x + wx, y + 2.5, x + wx + 4.8, y + 6.5, { lw: 0.7 });
  }
  ctx.beginPath();
  ctx.moveTo(x - 18, y + 1);
  ctx.quadraticCurveTo(x - 17, y - 17, x, y - 18);
  ctx.quadraticCurveTo(x + 17, y - 17, x + 18, y + 1);
  ctx.quadraticCurveTo(x, y + 4, x - 18, y + 1);
  ctx.closePath();
  fillToon(ctx, pal.snow ? '#f4f6f8' : '#d4a95c', x - 18, y - 18, x + 8, y + 2, { lw: 1.1, hi: 0.35 });
  ctx.strokeStyle = pal.snow ? 'rgba(130,150,170,0.45)' : 'rgba(110,70,20,0.35)';
  ctx.lineWidth = 0.8;
  for (let i = -12; i <= 12; i += 4) {
    ctx.beginPath();
    ctx.moveTo(x + i * 0.35, y - 16);
    ctx.quadraticCurveTo(x + i * 0.8, y - 7, x + i, y + 1.5);
    ctx.stroke();
  }
  gloss(ctx, x - 6, y - 11, 5, 2, 0.35);
}

// 장승: 천하대장군·지하여장군
function jangseung(ctx, x, y) {
  for (const [ox, cap, mood] of [[-6.5, '#b8322a', 'angry'], [6.5, '#2c2c2c', 'calm']]) {
    softShadow(ctx, x + ox, y + 14, 6, 2.2, 0.3);
    cylinder(ctx, x + ox - 4, y + 14, 8, 27, '#a57a4c', { lw: 1 });
    ctx.beginPath();
    ctx.ellipse(x + ox, y - 13, 5, 3.4, 0, Math.PI, 0);
    ctx.closePath();
    fillToon(ctx, cap, x + ox - 5, y - 17, x + ox + 5, y - 13, { lw: 0.9 });
    eye(ctx, x + ox - 1.8, y - 8, 1.3, 0, mood);
    eye(ctx, x + ox + 1.8, y - 8, 1.3, 0, mood);
    ctx.fillStyle = OL;
    ctx.beginPath();
    ctx.ellipse(x + ox, y - 3.2, 2.6, 1.3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillRect(x + ox - 1.8, y - 3.8, 3.6, 0.8);
    ctx.fillStyle = OL;
    ctx.fillRect(x + ox - 0.5, y + 1, 1, 10);
  }
}

// 입체 산: 밝은 비탈 · 어두운 비탈 + 봉우리 눈
function mountain(ctx, x, y, pal, rnd) {
  const h = 30 + rnd() * 12;
  const px = x - 2 + rnd() * 4;
  const baseL = x - 26;
  const baseR = x + 26;
  const lightC = pal.snow ? '#eef3f7' : '#7d9a6a';
  const darkC = pal.snow ? '#b9c7d4' : '#56704a';
  ctx.beginPath();
  ctx.moveTo(baseL, y + 20);
  ctx.quadraticCurveTo(x - 12, y - h * 0.3, px, y - h + 8);
  ctx.lineTo(px + 2, y + 20);
  ctx.closePath();
  fillToon(ctx, lightC, baseL, y - h, px, y + 20, { outline: false, hi: 0.2 });
  ctx.beginPath();
  ctx.moveTo(px, y - h + 8);
  ctx.quadraticCurveTo(x + 12, y - h * 0.3, baseR, y + 20);
  ctx.lineTo(px + 2, y + 20);
  ctx.closePath();
  fillToon(ctx, darkC, px, y - h, baseR, y + 20, { outline: false, lo: 0.2 });
  ctx.beginPath();
  ctx.moveTo(baseL, y + 20);
  ctx.quadraticCurveTo(x - 12, y - h * 0.3, px, y - h + 8);
  ctx.quadraticCurveTo(x + 12, y - h * 0.3, baseR, y + 20);
  ctx.strokeStyle = OL;
  ctx.lineWidth = 1.1;
  ctx.stroke();
  // 봉우리 눈
  ctx.beginPath();
  ctx.moveTo(px - 7, y - h + 19);
  ctx.quadraticCurveTo(px - 3, y - h + 12, px, y - h + 8.5);
  ctx.quadraticCurveTo(px + 4, y - h + 13, px + 8, y - h + 19);
  ctx.lineTo(px + 4, y - h + 16);
  ctx.lineTo(px + 1, y - h + 19.5);
  ctx.lineTo(px - 3, y - h + 16);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = 'rgba(40,60,80,0.4)';
  ctx.lineWidth = 0.6;
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.beginPath();
  ctx.ellipse(x, y + 14, 24, 5, 0, 0, Math.PI * 2);
  ctx.fill();
}

// 궁궐 전각 (근정전 모양, 입체)
function palaceHall(c) {
  box(c, -32, 30, 64, 8, 6, '#d6cbb2');
  box(c, -25, 22, 50, 6, 5, '#e3dac6', { lw: 0.9 });
  c.beginPath();
  c.rect(-21, 4, 42, 12);
  fillToon(c, '#e6cf9f', -21, 4, 0, 16, { lw: 0.9 });
  for (let i = 0; i < 7; i++) {
    rrect(c, -19 + i * 5.6, 6, 3.6, 10, 0.5);
    fillToon(c, '#7a3a24', -19 + i * 5.6, 6, -15.4 + i * 5.6, 16, { lw: 0.5 });
  }
  pillarRowMap(c, -21, 21, 16, 12, 6);
  dancheongBandMap(c, -23, 0.5, 46, 3);
  roof3d(c, 0, 1, 64, 13);
  c.beginPath();
  c.rect(-14, -14, 28, 6);
  fillToon(c, '#e6cf9f', -14, -14, 14, -8, { lw: 0.8 });
  pillarRowMap(c, -14, 14, -8, 6, 5);
  dancheongBandMap(c, -16, -17, 32, 2.6);
  roof3d(c, 0, -17, 48, 14);
}

function pillarRowMap(c, x1, x2, yb, h, n) {
  for (let i = 0; i < n; i++) cylinder(c, x1 + ((x2 - x1) * i) / (n - 1) - 1.5, yb, 3, h, '#b8322a', { lw: 0.7 });
}

function dancheongBandMap(c, x, y, w, h) {
  c.fillStyle = PAL.dancheongG;
  c.fillRect(x, y, w, h);
  c.fillStyle = PAL.dancheongR;
  const n = Math.floor(w / 5);
  for (let i = 0; i < n; i++) c.fillRect(x + (i + 0.3) * (w / n), y + h * 0.25, (w / n) * 0.4, h * 0.5);
  c.strokeStyle = OL;
  c.lineWidth = 0.5;
  c.strokeRect(x, y, w, h);
}

function drawPalaceCourt(ctx, map, K, pal) {
  const set = new Set(K.map((d) => d.y * 100 + d.x));
  const has = (x, y) => set.has(y * 100 + x);
  // 박석
  for (const d of K) {
    ctx.fillStyle = '#ddd6c5';
    ctx.fillRect(d.x * TS, d.y * TS, TS, TS);
    ctx.strokeStyle = 'rgba(120,110,90,0.28)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      ctx.strokeRect(d.x * TS + (i % 2) * 8, d.y * TS + i * 13, 20 + (i % 2) * 4, 13);
      ctx.strokeRect(d.x * TS + 20 + (i % 2) * 4, d.y * TS + i * 13, 16, 13);
    }
  }
  const xs = K.map((d) => d.x);
  const ys = K.map((d) => d.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const cx = ((minX + maxX + 1) / 2) * TS;
  const cy = ((minY + maxY + 1) / 2) * TS;
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillRect(minX * TS + 6, cy - 6, (maxX - minX + 1) * TS - 6, 12);
  // 좌우 행각 (회랑)
  for (const yy of [minY + 1.2, maxY - 0.2]) {
    const x0 = minX * TS + 14;
    const w = (maxX - minX + 1) * TS - 16;
    ctx.beginPath();
    ctx.rect(x0, yy * TS, w, 11);
    fillToon(ctx, '#b3432f', x0, yy * TS, x0 + 20, yy * TS + 11, { lw: 0.9 });
    rrect(ctx, x0 - 3, yy * TS - 6, w + 5, 7, 2);
    fillToon(ctx, '#4a5366', x0, yy * TS - 6, x0 + 30, yy * TS + 1, { lw: 0.9, hi: 0.35 });
  }
  // 담장: K 구역의 바깥 경계
  for (const d of K) {
    if (!has(d.x - 1, d.y)) palaceWall(ctx, d.x * TS - 6, d.y * TS, 12, TS, true);
    if (!has(d.x, d.y - 1) && d.y > 0) palaceWall(ctx, d.x * TS, d.y * TS - 6, TS, 12, false);
    if (!has(d.x, d.y + 1) && d.y < map.h - 1) palaceWall(ctx, d.x * TS, (d.y + 1) * TS - 6, TS, 12, false);
  }
  const scale = Math.min(1.6, ((maxX - minX + 1) * TS) / 72);
  softShadow(ctx, cx + 6, cy - 40 + 30 * scale, 36 * scale, 8 * scale, 0.35);
  ctx.save();
  ctx.translate(cx + 6, cy - 40);
  ctx.scale(scale, scale);
  palaceHall(ctx);
  ctx.restore();
}

// 궁궐 담장 (기와 얹은 붉은 담)
function palaceWall(ctx, px, py, w, h, vertical) {
  ctx.beginPath();
  ctx.rect(px, py, w, h);
  fillToon(ctx, '#b8452f', px, py, px + w, py + h, { lw: 0.9 });
  ctx.fillStyle = '#efe6d2';
  if (vertical) for (let i = 0; i < 3; i++) ctx.fillRect(px + 3, py + 5 + i * 12, w - 6, 5);
  else for (let i = 0; i < 3; i++) ctx.fillRect(px + 5 + i * 12, py + 3, 5, h - 6);
  if (vertical) {
    rrect(ctx, px - 2.5, py, 5, h, 2);
    fillToon(ctx, '#4a5366', px - 2.5, py, px + 2.5, py + h, { lw: 0.8, hi: 0.35 });
  } else {
    rrect(ctx, px, py - 3, w, 5, 2);
    fillToon(ctx, '#4a5366', px, py - 3, px + w, py + 2, { lw: 0.8, hi: 0.35 });
  }
}

// 도성·진영 (기지): 몸체는 캐시, 깃발과 이름표만 매 프레임
function gateBody(c) {
  box(c, -30, 0, 60, 22, 7, '#d8cdb3');
  stoneLinesMap(c, -30, 0, 60, 22);
  c.beginPath();
  c.moveTo(-9, 0);
  c.lineTo(-9, -11);
  c.arc(0, -11, 9, Math.PI, 0);
  c.lineTo(9, 0);
  c.closePath();
  const g = c.createLinearGradient(0, -20, 0, 0);
  g.addColorStop(0, '#120c08');
  g.addColorStop(1, '#4a3526');
  c.fillStyle = g;
  c.fill();
  c.strokeStyle = OL;
  c.lineWidth = 1.1;
  c.stroke();
  // 대문짝
  for (const s of [-1, 1]) {
    c.beginPath();
    c.rect(s > 0 ? 0.5 : -8.5, -12, 8, 12);
    fillToon(c, '#8a3a24', -8, -12, 8, 0, { lw: 0.7 });
    sphere(c, s * 2.4, -6, 0.9, PAL.gold, { lw: 0.4, gloss: false });
  }
  c.strokeStyle = '#f3ecdc';
  c.lineWidth = 1.4;
  c.beginPath();
  c.arc(0, -11, 10.6, Math.PI * 1.02, -0.02);
  c.stroke();
  rrect(c, -24, -31, 48, 3, 1);
  fillToon(c, '#6b4a2b', -24, -31, 24, -28, { lw: 0.8 });
  for (let i = 0; i < 5; i++) cylinder(c, -20 + i * 10 - 1.5, -29, 3, 9, '#b8322a', { lw: 0.7 });
  dancheongBandMap(c, -23, -41, 46, 3);
  roof3d(c, 0, -41, 66, 14);
  for (let i = 0; i < 4; i++) cylinder(c, -12 + i * 8 - 1.2, -55, 2.4, 4, '#b8322a', { lw: 0.6 });
  dancheongBandMap(c, -14, -58, 28, 2.5);
  roof3d(c, 0, -58, 44, 12);
}

function stoneLinesMap(c, x, y, w, h) {
  c.strokeStyle = 'rgba(80,65,45,0.45)';
  c.lineWidth = 0.6;
  for (let r = 1; r <= Math.round(h / 4.4); r++) {
    const yy = y - h + r * 4.4;
    c.beginPath();
    c.moveTo(x, yy);
    c.lineTo(x + w, yy);
    c.stroke();
    for (let xx = x + (r % 2 ? 3.5 : 0) + 3; xx < x + w; xx += 7) {
      c.beginPath();
      c.moveTo(xx, yy - 4.4);
      c.lineTo(xx, yy);
      c.stroke();
    }
  }
}

function flagLiveMap(ctx, x, y, h, color, t, dir = 1) {
  ctx.strokeStyle = OL;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y - h);
  ctx.stroke();
  ctx.strokeStyle = '#6b4424';
  ctx.lineWidth = 0.9;
  ctx.stroke();
  const w = 11 * dir;
  const wave = Math.sin(t * 5 + x) * 1.6;
  ctx.beginPath();
  ctx.moveTo(x, y - h);
  ctx.quadraticCurveTo(x + w / 2, y - h + wave, x + w, y - h + 1 + wave);
  ctx.lineTo(x + w, y - h + 8 + wave);
  ctx.quadraticCurveTo(x + w / 2, y - h + 7 - wave, x, y - h + 8);
  ctx.closePath();
  fillToon(ctx, color, x, y - h, x + w, y - h + 8, { lw: 0.8 });
}

export function drawBase(ctx, map, stage, t) {
  const x = map.base.x * TS + TS / 2;
  const y = map.base.y * TS + TS / 2 + 16;
  softShadow(ctx, x, y, 36, 9, 0.35);
  blit(ctx, sprite('gate', 80, 90, 40, 80, gateBody), x, y, 0.95);
  flagLiveMap(ctx, x - 30, y - 18, 30, PAL.dancheongR, t);
  flagLiveMap(ctx, x + 30, y - 18, 30, PAL.dancheongB, t + 1, -1);
  ctx.font = '700 14px "Gowun Batang", serif';
  ctx.textAlign = 'center';
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(20,15,10,0.85)';
  ctx.strokeText(stage.base, x, y + 16);
  ctx.fillStyle = '#fff3d6';
  ctx.fillText(stage.base, x, y + 16);
}

// 왜군 진입로 표시
export function drawSpawns(ctx, map, t, active) {
  for (const p of map.paths) {
    const a = p.pts[0];
    const b = p.pts[1];
    const dx = Math.sign(b.x - a.x);
    const dy = Math.sign(b.y - a.y);
    const x = Math.min(Math.max(a.x, 0.5), map.w - 0.5) * TS;
    const y = Math.min(Math.max(a.y, 0.5), map.h - 0.5) * TS;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.atan2(dy, dx));
    const pulse = active ? 0.5 + 0.5 * Math.sin(t * 6) : 0.3;
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = `rgba(200,40,30,${(0.25 + 0.5 * pulse) * (1 - i * 0.25)})`;
      ctx.beginPath();
      ctx.moveTo(4 + i * 10, -8);
      ctx.lineTo(12 + i * 10, 0);
      ctx.lineTo(4 + i * 10, 8);
      ctx.lineTo(8 + i * 10, 0);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
}
