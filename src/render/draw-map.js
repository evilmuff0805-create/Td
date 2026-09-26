// 지도 배경 사전 렌더링 (계절별 팔레트, 길, 물, 장식)
import { TS, PAL, shade, rgba, roof, stoneBase, flag, dancheong, pillars, shadow } from './paint.js';
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
  shadow(ctx, x + 4, y + 14, 14, 5, 0.2);
  const lean = (rnd() - 0.5) * 8;
  ctx.strokeStyle = '#7a3f28';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x, y + 14);
  ctx.quadraticCurveTo(x + lean, y + 2, x + lean * 0.6, y - 10);
  ctx.stroke();
  ctx.lineWidth = 1;
  // 층층이 퍼진 솔잎
  const layers = [[-8, 0, 16], [lean * 0.4, -8, 14], [lean * 0.6, -15, 10]];
  for (const [ox, oy, w] of layers) {
    ctx.fillStyle = shade(pal.tree, -0.15);
    ctx.beginPath();
    ctx.ellipse(x + ox + 1, y + oy + 1, w, w * 0.42, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = pal.tree;
    ctx.beginPath();
    ctx.ellipse(x + ox, y + oy, w, w * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = pal.snow ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.12)';
    ctx.beginPath();
    ctx.ellipse(x + ox, y + oy - w * 0.18, w * 0.8, w * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function mapleTree(ctx, x, y, rnd) {
  shadow(ctx, x + 3, y + 14, 13, 5, 0.2);
  ctx.strokeStyle = '#5b3a22';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y + 14);
  ctx.lineTo(x, y - 4);
  ctx.stroke();
  const cols = ['#c8412f', '#e0762b', '#f0a13a', '#b3321f'];
  for (let i = 0; i < 9; i++) {
    ctx.fillStyle = cols[Math.floor(rnd() * cols.length)];
    ctx.beginPath();
    ctx.arc(x - 9 + rnd() * 18, y - 14 + rnd() * 14, 5 + rnd() * 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function bamboo(ctx, x, y, rnd) {
  for (let i = 0; i < 4; i++) {
    const bx = x - 10 + i * 6 + rnd() * 2;
    ctx.strokeStyle = '#5f8f3e';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(bx, y + 16);
    ctx.lineTo(bx + 2, y - 18);
    ctx.stroke();
    ctx.fillStyle = '#7fb24f';
    ctx.beginPath();
    ctx.ellipse(bx + 5, y - 10 + i * 3, 5, 1.6, -0.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function rock(ctx, x, y, pal, rnd) {
  shadow(ctx, x + 2, y + 10, 13, 4, 0.2);
  ctx.fillStyle = '#9a968c';
  ctx.beginPath();
  ctx.moveTo(x - 13, y + 9);
  ctx.lineTo(x - 9 - rnd() * 3, y - 4);
  ctx.lineTo(x - 2, y - 10 - rnd() * 3);
  ctx.lineTo(x + 8, y - 6);
  ctx.lineTo(x + 13, y + 9);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.beginPath();
  ctx.moveTo(x - 9, y - 3);
  ctx.lineTo(x - 2, y - 9);
  ctx.lineTo(x + 2, y - 2);
  ctx.closePath();
  ctx.fill();
  if (pal.snow) {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(x - 2, y - 8, 7, 3, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 초가집
function house(ctx, x, y, pal) {
  shadow(ctx, x + 2, y + 13, 17, 5, 0.22);
  ctx.fillStyle = '#e4d3b0';
  ctx.fillRect(x - 13, y - 2, 26, 14);
  ctx.strokeStyle = '#8a6a44';
  ctx.lineWidth = 1;
  ctx.strokeRect(x - 13, y - 2, 26, 14);
  ctx.fillStyle = '#5b3f28';
  ctx.fillRect(x - 3, y + 2, 6, 10);
  ctx.fillStyle = '#d8c7a0';
  ctx.fillRect(x - 10, y + 2, 5, 4);
  ctx.fillRect(x + 5, y + 2, 5, 4);
  // 초가 지붕
  ctx.fillStyle = pal.snow ? '#f4f6f8' : '#c9a15a';
  ctx.beginPath();
  ctx.moveTo(x - 17, y);
  ctx.quadraticCurveTo(x - 16, y - 16, x, y - 17);
  ctx.quadraticCurveTo(x + 16, y - 16, x + 17, y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = pal.snow ? '#c9d6e2' : '#8c6a33';
  ctx.stroke();
  ctx.strokeStyle = 'rgba(90,60,20,0.35)';
  for (let i = -12; i <= 12; i += 6) {
    ctx.beginPath();
    ctx.moveTo(x + i * 0.4, y - 16);
    ctx.lineTo(x + i, y);
    ctx.stroke();
  }
}

// 장승: 천하대장군·지하여장군
function jangseung(ctx, x, y) {
  for (const [ox, face] of [[-6, '#b8322a'], [6, '#2c2c2c']]) {
    shadow(ctx, x + ox, y + 14, 5, 2, 0.25);
    ctx.fillStyle = '#9b7148';
    ctx.fillRect(x + ox - 3.5, y - 14, 7, 28);
    ctx.fillStyle = face;
    ctx.beginPath();
    ctx.ellipse(x + ox, y - 14, 4.5, 3, 0, Math.PI, 0);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillRect(x + ox - 2.5, y - 9, 1.6, 1.6);
    ctx.fillRect(x + ox + 1, y - 9, 1.6, 1.6);
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(x + ox - 2, y - 4, 4, 1.4);
    ctx.fillStyle = '#1d1c1a';
    ctx.fillRect(x + ox - 0.5, y, 1, 10);
  }
}

// 수묵화풍 산
function mountain(ctx, x, y, pal, rnd) {
  const h = 26 + rnd() * 12;
  const g = ctx.createLinearGradient(0, y - h, 0, y + 20);
  g.addColorStop(0, pal.snow ? '#ffffff' : '#5d6b5a');
  g.addColorStop(1, pal.snow ? '#c9d3dc' : shade(pal.ground2, -0.25));
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(x - 24, y + 20);
  ctx.quadraticCurveTo(x - 8, y - h * 0.4, x - 2 + rnd() * 4, y - h + 8);
  ctx.quadraticCurveTo(x + 10, y - h * 0.3, x + 24, y + 20);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(30,30,30,0.25)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.28)';
  ctx.beginPath();
  ctx.ellipse(x, y + 12, 22, 5, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawPalaceCourt(ctx, map, K, pal) {
  const set = new Set(K.map((d) => d.y * 100 + d.x));
  const has = (x, y) => set.has(y * 100 + x);
  // 박석
  for (const d of K) {
    ctx.fillStyle = '#d9d2c1';
    ctx.fillRect(d.x * TS, d.y * TS, TS, TS);
    ctx.strokeStyle = 'rgba(120,110,90,0.25)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 3; i++) {
      ctx.strokeRect(d.x * TS + (i % 2) * 8, d.y * TS + i * 13, 20 + (i % 2) * 4, 13);
      ctx.strokeRect(d.x * TS + 20 + (i % 2) * 4, d.y * TS + i * 13, 16, 13);
    }
  }
  // 어도 (가운데 길)
  const xs = K.map((d) => d.x);
  const ys = K.map((d) => d.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const cx = ((minX + maxX + 1) / 2) * TS;
  const cy = ((minY + maxY + 1) / 2) * TS;
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillRect(minX * TS + 6, cy - 6, (maxX - minX + 1) * TS - 6, 12);
  // 담장: K 구역의 바깥 경계
  for (const d of K) {
    if (!has(d.x - 1, d.y)) palaceWall(ctx, d.x * TS - 6, d.y * TS, 12, TS, true);
    if (!has(d.x, d.y - 1) && d.y > 0) palaceWall(ctx, d.x * TS, d.y * TS - 6, TS, 12, false);
    if (!has(d.x, d.y + 1) && d.y < map.h - 1) palaceWall(ctx, d.x * TS, (d.y + 1) * TS - 6, TS, 12, false);
  }
  // 전각 (근정전 모양)
  const scale = Math.min(1.6, ((maxX - minX + 1) * TS) / 70);
  ctx.save();
  ctx.translate(cx + 6, cy - 40);
  ctx.scale(scale, scale);
  stoneBase(ctx, 0, 30, 60, 8);
  stoneBase(ctx, 0, 22, 48, 6, '#e3dbc8');
  ctx.fillStyle = '#e0c89a';
  ctx.fillRect(-20, 4, 40, 12);
  ctx.fillStyle = '#6b3a24';
  for (let i = 0; i < 7; i++) ctx.fillRect(-18 + i * 5.4, 6, 3, 10);
  pillars(ctx, -20, 20, 16, 12, 6);
  dancheong(ctx, -22, 1, 44, 3);
  roof(ctx, 0, 4, 62, 12);
  ctx.fillStyle = '#e0c89a';
  ctx.fillRect(-13, -12, 26, 6);
  pillars(ctx, -13, 13, -6, 6, 5);
  dancheong(ctx, -15, -14, 30, 2.5);
  roof(ctx, 0, -12, 46, 13);
  ctx.restore();
  // 좌우 행각 (회랑)
  for (const yy of [minY + 1.2, maxY - 0.3]) {
    ctx.fillStyle = '#b3432f';
    ctx.fillRect(minX * TS + 14, yy * TS, (maxX - minX + 1) * TS - 16, 10);
    ctx.fillStyle = PAL.roof;
    ctx.fillRect(minX * TS + 12, yy * TS - 5, (maxX - minX + 1) * TS - 12, 6);
  }
}

// 궁궐 담장
function palaceWall(ctx, px, py, w, h, vertical) {
  ctx.fillStyle = '#b3432f';
  ctx.fillRect(px, py, w, h);
  ctx.fillStyle = '#e9dfc8';
  if (vertical) for (let i = 0; i < 3; i++) ctx.fillRect(px + 3, py + 5 + i * 12, w - 6, 5);
  else for (let i = 0; i < 3; i++) ctx.fillRect(px + 5 + i * 12, py + 3, 5, h - 6);
  ctx.fillStyle = PAL.roof;
  if (vertical) ctx.fillRect(px - 2, py, 4, h);
  else ctx.fillRect(px, py - 2, w, 4);
}

// 도성·진영 (기지)
export function drawBase(ctx, map, stage, t) {
  const x = map.base.x * TS + TS / 2;
  const y = map.base.y * TS + TS / 2;
  shadow(ctx, x, y + 16, 30, 8, 0.3);
  stoneBase(ctx, x, y + 14, 58, 22);
  // 홍예문
  ctx.fillStyle = '#2a211b';
  ctx.beginPath();
  ctx.moveTo(x - 9, y + 14);
  ctx.lineTo(x - 9, y + 2);
  ctx.arc(x, y + 2, 9, Math.PI, 0);
  ctx.lineTo(x + 9, y + 14);
  ctx.closePath();
  ctx.fill();
  pillars(ctx, x - 20, x + 20, y - 8, 12, 4);
  dancheong(ctx, x - 22, y - 22, 44, 3);
  roof(ctx, x, y - 19, 62, 14);
  roof(ctx, x, y - 34, 42, 11);
  flag(ctx, x - 26, y - 6, 26, PAL.dancheongR, t);
  flag(ctx, x + 22, y - 6, 26, PAL.dancheongB, t + 1);
  ctx.font = '600 11px "Gowun Batang", serif';
  ctx.textAlign = 'center';
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(20,15,10,0.8)';
  ctx.strokeText(stage.base, x, y + 30);
  ctx.fillStyle = '#fff3d6';
  ctx.fillText(stage.base, x, y + 30);
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
