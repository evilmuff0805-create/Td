// Assemble painted materials and props on the actual simulation coordinates.
// Roads and buildable cells never depend on an image generator's interpretation.
import { TS, rgba, glow } from './paint.js';
import { terrainArt, propArt, structureArt, drawIllustration } from './art.js';
import { T_WATER } from '../sim/map.js';
import { makeRng, hashSeed } from '../sim/rng.js';
import { softShadow } from './toon.js';

const tiles = new Map();
function pattern(ctx, id, size = 168) {
  const art = terrainArt(id);
  if (!art) return null;
  const key = `${id}:${size}`;
  if (!tiles.has(key)) {
    // Mirrored repetitions meet exactly at their edges, avoiding atlas seams.
    const cv = document.createElement('canvas');
    cv.width = cv.height = size * 2;
    const c = cv.getContext('2d');
    c.imageSmoothingQuality = 'high';
    for (let y = 0; y < 2; y++) for (let x = 0; x < 2; x++) {
      c.save(); c.translate(x ? size * 2 : 0, y ? size * 2 : 0); c.scale(x ? -1 : 1, y ? -1 : 1);
      c.drawImage(art.img, 2, 2, art.img.width - 4, art.img.height - 4, 0, 0, size, size); c.restore();
    }
    tiles.set(key, cv);
  }
  return ctx.createPattern(tiles.get(key), 'repeat');
}

function traceRoad(ctx, map) {
  ctx.beginPath();
  for (const p of map.paths) p.pts.forEach((q, i) => i ? ctx.lineTo(q.x * TS, q.y * TS) : ctx.moveTo(q.x * TS, q.y * TS));
}
function river(ctx, map, snow) {
  const water = (x, y) => x < 0 || y < 0 || x >= map.w || y >= map.h || map.grid[y * map.w + x] === T_WATER;
  ctx.save();
  ctx.beginPath();
  for (let y = 0; y < map.h; y++) for (let x = 0; x < map.w; x++) {
    if (map.grid[y * map.w + x] !== T_WATER) continue;
    const up = water(x, y - 1), down = water(x, y + 1), left = water(x - 1, y), right = water(x + 1, y);
    ctx.roundRect(x * TS, y * TS, TS, TS, [!up && !left ? 9 : 0, !up && !right ? 9 : 0, !down && !right ? 9 : 0, !down && !left ? 9 : 0]);
  }
  ctx.shadowColor = snow ? '#dce5eb' : '#a9a48b'; ctx.shadowBlur = 6;
  ctx.fillStyle = pattern(ctx, 'water', 190); ctx.fill();
  // No tile outlines: adjacent water cells must read as one continuous river.
  ctx.shadowBlur = 0;
  ctx.restore();
}

function prop(ctx, id, x, y, h, flip = false) {
  const art = propArt(id);
  if (!art) return;
  const w = art.img.width * h / art.img.height;
  softShadow(ctx, x + 2, y, w * 0.4, Math.max(3, h * 0.08), 0.23);
  drawIllustration(ctx, art, x, y, h, flip);
}
function palace(ctx, K) {
  if (!K.length) return;
  ctx.fillStyle = pattern(ctx, 'court', 120);
  for (const d of K) ctx.fillRect(d.x * TS, d.y * TS, TS, TS);
  const xs = K.map((d) => d.x), ys = K.map((d) => d.y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const x = (minX + maxX + 1) * TS / 2, y = (minY + maxY + 1) * TS / 2 + 24;
  drawIllustration(ctx, structureArt('hall'), x, y, Math.min(106, (maxX - minX + 1) * TS * 0.7));
  for (let xx = minX; xx <= maxX; xx += 2) prop(ctx, 'wall', (xx + 0.5) * TS, (maxY + 0.8) * TS, 23);
}

export function renderIllustratedMap(map, stage, dpr = 1, opts = {}) {
  if (!terrainArt('spring') || !propArt('pine')) return null;
  const cv = document.createElement('canvas');
  const W = map.w * TS, H = map.h * TS;
  cv.width = W * dpr; cv.height = H * dpr;
  cv.illustrated = true;
  const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  ctx.imageSmoothingQuality = 'high';
  const rnd = makeRng(hashSeed(stage.id)), snow = stage.season === 'winter';
  const season = stage.season === 'sea' ? 'spring' : stage.season;
  const earth = { spring: '#526960', summer: '#435c50', autumn: '#756554', winter: '#98afc4' };
  ctx.fillStyle = earth[season] || earth.spring; ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.68; ctx.fillStyle = pattern(ctx, season || 'spring'); ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;
  // Large soft variations break up repeated materials without changing their texture.
  for (let i = 0; i < 28; i++) {
    const x = rnd() * W, y = rnd() * H, r = 35 + rnd() * 100;
    const shade = ctx.createRadialGradient(x, y, 0, x, y, r);
    shade.addColorStop(0, snow ? 'rgba(102,137,173,0.10)' : 'rgba(10,28,29,0.14)'); shade.addColorStop(1, 'rgba(10,28,29,0)');
    ctx.fillStyle = shade; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  river(ctx, map, snow);
  ctx.lineCap = ctx.lineJoin = 'round';
  traceRoad(ctx, map); ctx.lineWidth = TS * 1.04;
  ctx.strokeStyle = snow ? '#8da3b7' : '#665f50'; ctx.shadowColor = 'rgba(7,20,27,0.35)'; ctx.shadowBlur = 4; ctx.shadowOffsetY = 2; ctx.stroke();
  ctx.shadowBlur = ctx.shadowOffsetY = 0;
  traceRoad(ctx, map); ctx.lineWidth = TS * 0.94; ctx.strokeStyle = pattern(ctx, snow ? 'snowRoad' : 'road', 160); ctx.stroke();
  traceRoad(ctx, map); ctx.lineWidth = TS * 0.56; ctx.strokeStyle = snow ? 'rgba(213,228,239,0.12)' : 'rgba(237,217,180,0.13)'; ctx.stroke();
  // Worn ruts, rather than flat colored strips, follow exactly the same centerline.
  ctx.save(); ctx.translate(-4, 0); traceRoad(ctx, map); ctx.lineWidth = 0.7; ctx.strokeStyle = 'rgba(36,41,41,0.15)'; ctx.stroke(); ctx.restore();
  palace(ctx, map.decor.filter((d) => d.ch === 'K'));
  for (const d of [...map.decor].sort((a, b) => a.y - b.y)) {
    const x = (d.x + 0.5) * TS, y = (d.y + 0.9) * TS;
    const flip = rnd() < 0.5;
    switch (d.ch) {
      case 'T': prop(ctx, snow ? 'snowPine' : stage.season === 'autumn' && rnd() < 0.7 ? 'maple' : 'pine', x, y, 60 + rnd() * 14, flip); break;
      case 'B': prop(ctx, 'bamboo', x, y, 48, flip); break;
      case 'R': prop(ctx, snow ? 'snowRock' : 'rock', x, y, 25 + rnd() * 7, flip); break;
      case 'M': prop(ctx, 'cliff', x, y, 45 + rnd() * 10, flip); break;
      case 'J': prop(ctx, 'jangseung', x, y, 36, flip); break;
      case 'H': {
        if (opts.cinema !== false) glow(ctx, x - 5, y - 5, 29, '#ffc27b', 0.14);
        prop(ctx, rnd() < 0.75 ? 'hanok' : 'thatch', x, y, 68, false);
        // Supplies stay within the same blocked cell as the house.
        if (rnd() < 0.5) prop(ctx, 'supplies', x + 10, y + 1, 15, flip);
        break;
      }
      case 'f': {
        ctx.fillStyle = snow ? 'rgba(237,246,255,0.6)' : 'rgba(220,192,151,0.4)';
        for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.ellipse(x - 12 + rnd() * 24, y - rnd() * 23, 1.6, 0.8, rnd() * 3, 0, Math.PI * 2); ctx.fill(); }
        break;
      }
    }
  }
  if (opts.cinema !== false) {
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = snow ? 'rgba(104,137,183,0.20)' : stage.season === 'autumn' ? 'rgba(141,125,151,0.16)' : 'rgba(102,132,164,0.20)';
    ctx.fillRect(0, 0, W, H); ctx.globalCompositeOperation = 'source-over';
    const moon = ctx.createLinearGradient(0, 0, W, H);
    moon.addColorStop(0, 'rgba(190,220,248,0.09)'); moon.addColorStop(1, 'rgba(10,29,51,0.12)');
    ctx.fillStyle = moon; ctx.fillRect(0, 0, W, H);
  }
  const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.4, W / 2, H / 2, W * 0.7);
  vignette.addColorStop(0, 'rgba(8,20,30,0)'); vignette.addColorStop(1, rgba('#08141e', 0.26));
  ctx.fillStyle = vignette; ctx.fillRect(0, 0, W, H);
  return cv;
}
