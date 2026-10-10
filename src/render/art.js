// Decode atlases once, then prepare reusable small canvases for combat.
import { ART } from '../data/art.js';
import { skinDef, GOLD_LOOK } from '../data/skins.js';
import { MENU_HERO_ART } from '../data/hero-menu-data.js';
import { heroMenuFrame } from '../data/hero-menu.js';

const SPRITE_H = 176;
const loaded = new Map();
const variants = new Map();
let pending;

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h));
  return c;
}
function loadImage(path) {
  return new Promise((ok) => {
    const img = new Image();
    img.onload = () => ok(img); img.onerror = () => ok(null);
    // Module-relative root also works from dev pages and subdirectory hosting.
    img.src = path.startsWith('data:') ? path : new URL(path, new URL('../../', import.meta.url)).href;
  });
}

function cellImage(img, spec, cell, trim) {
  const col = cell % spec.columns, row = Math.floor(cell / spec.columns);
  const x = Math.round(col * img.naturalWidth / spec.columns), y = Math.round(row * img.naturalHeight / spec.rows);
  const w = Math.round((col + 1) * img.naturalWidth / spec.columns) - x;
  const h = Math.round((row + 1) * img.naturalHeight / spec.rows) - y;
  const cv = canvas(w, h);
  cv.getContext('2d').drawImage(img, x, y, w, h, 0, 0, w, h);
  if (!trim) return cv;
  const data = cv.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, w, h).data;
  let x0 = w, y0 = h, x1 = 0, y1 = 0;
  for (let yy = 0; yy < h; yy++) for (let xx = 0; xx < w; xx++) {
    if (data[(yy * w + xx) * 4 + 3] < 32) continue;
    x0 = Math.min(x0, xx); x1 = Math.max(x1, xx); y0 = Math.min(y0, yy); y1 = Math.max(y1, yy);
  }
  if (x0 > x1) return cv;
  x0 = Math.max(0, x0 - 1); y0 = Math.max(0, y0 - 1); x1 = Math.min(w - 1, x1 + 1); y1 = Math.min(h - 1, y1 + 1);
  const out = canvas(x1 - x0 + 1, y1 - y0 + 1);
  out.getContext('2d').drawImage(cv, x0, y0, out.width, out.height, 0, 0, out.width, out.height);
  return out;
}
function footAnchor(img) {
  const { width: w, height: h } = img;
  const y0 = Math.floor(h * 0.88), data = img.getContext('2d').getImageData(0, y0, w, h - y0).data;
  let sum = 0, n = 0;
  for (let i = 0; i < data.length; i += 4) { if (data[i + 3] >= 80) { sum += (i / 4) % w; n++; } }
  return n ? Math.max(0.25, Math.min(0.75, sum / n / w)) : 0.5;
}
function prepare(img, ax = 0.5) {
  const h = SPRITE_H, pad = 2, w = Math.round(img.width * h / img.height);
  const small = canvas(w + pad * 2, h + pad * 2), c = small.getContext('2d');
  c.imageSmoothingQuality = 'high';
  c.shadowColor = 'rgba(8,18,29,0.5)'; c.shadowBlur = 1.5;
  c.drawImage(img, pad, pad, w, h);
  return { img, canvas: small, pad, ax, h };
}
export function preloadArt() {
  if (typeof document === 'undefined') return Promise.resolve();
  if (pending) return pending;
  pending = (async () => {
    const [entries,menu] = await Promise.all([
      Promise.all(Object.entries(ART.atlases).map(async ([id, spec]) => [id, await loadImage(spec.src)])),
      loadImage(MENU_HERO_ART.path),
    ]);
    const atlases = new Map(entries);
    const preparedCells = new Map();
    for (const group of ['heroes', 'enemies', 'allies', 'towers', 'structures', 'props', 'terrain']) {
      for (const [id, a] of Object.entries(ART[group])) {
        const img = atlases.get(a.atlas); if (!img) continue;
        const key = `${a.atlas}:${a.cell}`;
        let region = preparedCells.get(key);
        if (!region) { region = cellImage(img, ART.atlases[a.atlas], a.cell, group !== 'terrain'); preparedCells.set(key, region); }
        const unit = ['heroes', 'enemies', 'allies'].includes(group);
        loaded.set(`${group}:${id}`, prepare(region, a.ax ?? (unit ? footAnchor(region) : 0.5)));
      }
    }
    if(menu&&(menu.naturalWidth||menu.width)===MENU_HERO_ART.width&&(menu.naturalHeight||menu.height)===MENU_HERO_ART.height){
      for(const frame of MENU_HERO_ART.frames){
        const region=canvas(frame.width,frame.height);
        region.getContext('2d').drawImage(menu,frame.left,frame.top,frame.width,frame.height,0,0,frame.width,frame.height);
        const art={...prepare(region,frame.anchor),face:frame.face,source:'approved-menu-poses',look:frame.key};
        loaded.set(frame.skinId?`look:${frame.heroId}:${frame.skinId}`:`heroes:${frame.heroId}`,art);
      }
    }
    await Promise.all([
      ...Object.entries(ART.backgrounds).map(async ([id, path]) => { const img = await loadImage(path); if (img) loaded.set(`bg:${id}`, { img }); }),
      loadImage(ART.scene).then((img) => { if (img) loaded.set('scene', { img }); }),
    ]);
  })();
  return pending;
}

function hsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  if (!d) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1));
  const hue = max === r ? ((g - b) / d + (g < b ? 6 : 0)) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [hue / 6, s, l];
}
function rgb(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n) => { const k = (n + h * 12) % 12; return 255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))); };
  return [f(0), f(8), f(4)];
}
const CLOTH_HUE = { sejong: 0.01, eulji: 0.14, gang: 0.75, gwon: 0.075, gwak: 0.01 };
export function heroArt(id, skin = null) {
  const base = loaded.get(`heroes:${id}`);
  if (!base || !skin) return base || null;
  const def = skinDef(id, skin); if (!def) return base;
  const frame=heroMenuFrame(id,skin),approved=frame&&loaded.get(`look:${id}:${frame.skinId}`);if(approved)return approved;
  const key = `${id}:${skin}`; if (variants.has(key)) return variants.get(key);
  const img = canvas(base.img.width, base.img.height), ctx = img.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(base.img, 0, 0);
  const pixels = ctx.getImageData(0, 0, img.width, img.height), color = def.gold ? GOLD_LOOK.body : def.body;
  const target = hsl(...color.match(/[a-f\d]{2}/gi).map((p) => parseInt(p, 16)));
  for (let y = Math.floor(img.height * 0.3); y < img.height; y++) for (let x = 0; x < img.width; x++) {
    const i = (y * img.width + x) * 4; if (!pixels.data[i + 3]) continue;
    const [h, s, l] = hsl(pixels.data[i], pixels.data[i + 1], pixels.data[i + 2]);
    const d = Math.abs(h - CLOTH_HUE[id]);
    // Yi's shaded brigandine is nearly neutral; warm bronze highlights obscure
    // its nominal navy hue. Use its low saturation instead of a blue hue mask.
    const match = id === 'yi' ? s < 0.38 && l < 0.6
      : id === 'ahn' ? s < 0.27 && l < 0.6
      : id === 'dangun' ? s < 0.28 && l > 0.42 && !(y < img.height * 0.49 && x > img.width * 0.35 && x < img.width * 0.65)
      : s > 0.18 && Math.min(d, 1 - d) < 0.12;
    if (!match) continue;
    const light = Math.max(0.06, Math.min(0.94, l * 0.8 + (target[2] - 0.3) * 0.65));
    const col = rgb(target[0], target[1] * 0.9, light);
    for (let c = 0; c < 3; c++) pixels.data[i + c] = col[c];
  }
  ctx.putImageData(pixels, 0, 0);
  const art = {...prepare(img, base.ax),face:base.face,source:'fallback-recolour',look:skin}; variants.set(key, art); return art;
}
export function portraitArt(id, skin = null) { const art = heroArt(id, skin); return art ? { img: art.img, face: art.face??ART.faces[id] } : null; }
export const enemyArt = (id) => loaded.get(`enemies:${id}`) || null;
export const allyArt = (id) => loaded.get(`allies:${id}`) || null;
export const towerArt = (id) => loaded.get(`towers:${id}`) || null;
export const structureArt = (id) => loaded.get(`structures:${id}`) || null;
export const propArt = (id) => loaded.get(`props:${id}`) || null;
export const terrainArt = (id) => loaded.get(`terrain:${id}`) || null;
export const backgroundArt = (id) => loaded.get(`bg:${id}`) || null;
export const sceneArt = () => loaded.get('scene') || null;
export function drawIllustration(ctx, a, x, y, height, flip = false) {
  if (!a) return false;
  ctx.save(); ctx.translate(x, y); ctx.scale(flip ? -1 : 1, 1);
  if (height > SPRITE_H) {
    const w = a.img.width * height / a.img.height;
    ctx.drawImage(a.img, -w * a.ax, -height, w, height);
  } else {
    const k = height / a.h, pad = a.pad * k, w = a.canvas.width * k, h = a.canvas.height * k;
    ctx.drawImage(a.canvas, -pad - (w - 2 * pad) * a.ax, -(h - pad), w, h);
  }
  ctx.restore(); return true;
}
export function artStatus() { return Object.fromEntries(['heroes', 'enemies', 'allies', 'towers', 'structures', 'props', 'terrain'].map((g) => [g, Object.keys(ART[g]).filter((id) => loaded.has(`${g}:${id}`)).length])); }
