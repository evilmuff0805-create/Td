// 초상화·아이콘 (캔버스로 그려 재사용)
import { drawHero, drawEnemy } from '../render/draw-units.js';
import { taegeuk, TS } from '../render/paint.js';
import { ENEMIES } from '../data/enemies.js';
import { heroArt, portraitArt, enemyArt, drawIllustration } from '../render/art.js';
import { portraitBounds } from '../data/hero-menu.js';

function identifyHeroCanvas(cv,heroId,skin,art,kind){
  cv.dataset.hero=heroId;cv.dataset.skin=skin??'';cv.dataset.artSource=art?.source??'legacy';cv.dataset.heroImage=kind;
}

export function heroPortrait(heroId, size = 46, owner = 0, skin = null) {
  const cv = document.createElement('canvas');
  const dpr = 2;
  cv.width = size * dpr;
  cv.height = size * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  // 그림 파일: 초상 일러스트의 얼굴을 정사각으로 잘라 쓴다 (없으면 전투용 그림의 머리 부분)
  const pa = portraitArt(heroId, skin);
  const sa = heroArt(heroId, skin);
  identifyHeroCanvas(cv,heroId,skin,sa,'portrait');
  if (pa || sa) {
    ctx.imageSmoothingQuality = 'high';
    if (pa) {
      const W = pa.img.naturalWidth || pa.img.width;
      const H = pa.img.naturalHeight || pa.img.height;
      const crop=portraitBounds(W,H,pa.face);
      ctx.drawImage(pa.img,crop.left,crop.top,crop.width,crop.height,0,0,size,size);
    } else {
      const W = sa.img.naturalWidth || sa.img.width;
      const H = sa.img.naturalHeight || sa.img.height;
      const side = H * 0.32;
      ctx.drawImage(sa.img, Math.max(0, sa.ax * W - side / 2), 0, side, side, 0, 0, size, size);
    }
    return cv;
  }
  // 가슴 위 흉상: 단위 좌표 y -31 ~ -7 이 보이도록
  const k = size / 25;
  drawHero(ctx, { heroId, skin, id: 0, owner, facing: 1, moving: false, anim: 0, hp: 1, maxHp: 1, lv: 1, buffs: {} }, 0.3, {
    x: size / 2 - 0.6 * k, y: size + 6.5 * k, scale: k, portrait: true, noBar: true, noAura: true,
  });
  return cv;
}

export function heroFull(heroId, size = 200, skin = null) {
  const cv = document.createElement('canvas');
  const dpr = 2;
  cv.width = size * dpr;
  cv.height = size * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const art = heroArt(heroId, skin);
  identifyHeroCanvas(cv,heroId,skin,art,'full');
  if (art) {
    // 전신 그림을 칸 높이에 맞춰, 두 발 사이를 가운데로
    const W = art.img.naturalWidth || art.img.width;
    const H = art.img.naturalHeight || art.img.height;
    const hh = size * 0.96;
    const ww = (W / H) * hh;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(art.img, size / 2 - ww * art.ax, size - hh, ww, hh);
    return cv;
  }
  drawHero(ctx, { heroId, skin, id: 0, owner: 0, facing: 1, moving: false, anim: 0, hp: 1, maxHp: 1, lv: 1, buffs: {} }, 0.3, {
    x: size / 2, y: size * 0.95, scale: size / 44, portrait: true, noBar: true,
  });
  return cv;
}

const enemyCache = new Map();
export function enemyIcon(type, size = 22) {
  const key = type + size;
  if (enemyCache.has(key)) return enemyCache.get(key);
  const cv = document.createElement('canvas');
  const dpr = 2;
  cv.width = size * dpr;
  cv.height = size * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const art = enemyArt(type);
  if (art) {
    const height = size * 0.9 * Math.min(1, art.img.height / art.img.width);
    drawIllustration(ctx, { ...art, ax: 0.5 }, size / 2, size * 0.94, height);
    const url = cv.toDataURL();
    enemyCache.set(key, url);
    return url;
  }
  const boss = ENEMIES[type].tier === 4;
  const tall = type === 'hideyoshi' ? 84 : boss ? 66 : type === 'cavalry' ? 44 : type === 'ram' ? 34 : type === 'armored' ? 44 : 36;
  const k = (size * 0.94) / tall;
  ctx.scale(k, k);
  drawEnemy(ctx, {
    type, id: 1, x: (size / 2 / k) / TS, y: ((size * 0.96) / k - 8) / TS, dx: 1, dy: 0, hp: 1, maxHp: 1, stunT: 0, slowT: 0, vulnT: 0,
    shield: 0, stealth: false, revealed: true, blockedBy: 1, auraSlow: 0, noBar: true,
  }, 0.2);
  const url = cv.toDataURL();
  enemyCache.set(key, url);
  return url;
}

// 공명 게이지 (태극)
export function drawResonance(cv, gauge, time, opts = {}) {
  const ctx = cv.getContext('2d');
  const W = cv.width;
  const r = W * 0.4;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, W, W);
  const c = W / 2;
  const full = gauge >= 100;
  // 바탕
  ctx.fillStyle = '#2a211b';
  ctx.beginPath();
  ctx.arc(c, c, r + W * 0.06, 0, Math.PI * 2);
  ctx.fill();
  const rot = full ? time * 1.6 : 0;
  // 회색 태극
  taegeuk(ctx, c, c, r, rot, '#4a4a52', '#5a4a48');
  // 채워진 만큼 색
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(c, c);
  ctx.arc(c, c, r + 1, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * Math.min(100, gauge)) / 100);
  ctx.closePath();
  ctx.clip();
  taegeuk(ctx, c, c, r, rot);
  ctx.restore();
  ctx.strokeStyle = full ? `rgba(240,199,94,${0.6 + 0.4 * Math.sin(time * 6)})` : 'rgba(240,199,94,0.5)';
  ctx.lineWidth = W * (full ? 0.05 : 0.025);
  ctx.beginPath();
  ctx.arc(c, c, r + W * 0.04, 0, Math.PI * 2);
  ctx.stroke();
  if (opts.waiting) {
    ctx.strokeStyle = '#7fe0b0';
    ctx.lineWidth = W * 0.04;
    ctx.beginPath();
    ctx.arc(c, c, r + W * 0.08, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * opts.waiting);
    ctx.stroke();
  }
}
