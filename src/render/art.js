/* global Image, URL */
// 그림 파일 불러오기 + 전투용 작은 그림 미리 만들기
// 큰 원본을 매 프레임 줄이면 느리고 거칠어서, 불러올 때 한 번 반씩 줄여 두고 어두운 테두리를 둘러 둔다.
import { ART } from '../data/art.js';

const SPRITE_H = 132; // 미리 줄여 둘 높이(px) — 화면에서는 약 56px로 그리므로 고해상도 화면에서도 선명
const loaded = new Map();

function resolve(path) {
  if (path.startsWith('data:')) return path;
  const base = typeof document !== 'undefined' ? document.baseURI : '';
  return new URL(path, base).href;
}

function loadImage(path) {
  return new Promise((ok) => {
    const img = new Image();
    img.onload = () => ok(img);
    img.onerror = () => ok(null);
    img.src = resolve(path);
  });
}

function shrink(img, H) {
  let src = img;
  let w = img.naturalWidth || img.width;
  let h = img.naturalHeight || img.height;
  while (h / 2 >= H) {
    const c = document.createElement('canvas');
    c.width = Math.round(w / 2);
    c.height = Math.round(h / 2);
    const x = c.getContext('2d');
    x.imageSmoothingQuality = 'high';
    x.drawImage(src, 0, 0, c.width, c.height);
    src = c;
    w = c.width;
    h = c.height;
  }
  const out = document.createElement('canvas');
  out.height = H;
  out.width = Math.round((w / h) * H);
  const o = out.getContext('2d');
  o.imageSmoothingQuality = 'high';
  o.drawImage(src, 0, 0, out.width, out.height);
  return out;
}

// 실루엣을 8방향으로 밀어 어두운 테두리 → 다른 유닛 · 바닥과 섞여도 윤곽이 산다
function outlined(c, px = 2, color = 'rgba(20,12,8,0.85)') {
  const pad = px + 1;
  const sil = document.createElement('canvas');
  sil.width = c.width;
  sil.height = c.height;
  const s = sil.getContext('2d');
  s.drawImage(c, 0, 0);
  s.globalCompositeOperation = 'source-in';
  s.fillStyle = color;
  s.fillRect(0, 0, sil.width, sil.height);
  const out = document.createElement('canvas');
  out.width = c.width + pad * 2;
  out.height = c.height + pad * 2;
  const o = out.getContext('2d');
  for (let a = 0; a < 8; a++) {
    const ang = (a / 8) * Math.PI * 2;
    o.drawImage(sil, pad + Math.cos(ang) * px, pad + Math.sin(ang) * px);
  }
  o.drawImage(c, pad, pad);
  return { canvas: out, pad };
}

// 앱 시작 때 한 번. 실패한 그림은 조용히 건너뛴다(기본 그림 사용).
export function preloadArt() {
  if (typeof document === 'undefined') return Promise.resolve();
  const jobs = [];
  for (const [id, a] of Object.entries(ART.heroes)) {
    jobs.push(loadImage(a.sprite).then((img) => {
      if (!img) return;
      const small = shrink(img, SPRITE_H);
      const { canvas, pad } = outlined(small);
      loaded.set(`hero:${id}`, { img, canvas, pad, ax: a.ax ?? 0.5, h: SPRITE_H });
    }));
  }
  for (const [id, a] of Object.entries(ART.portraits)) {
    jobs.push(loadImage(a.src).then((img) => {
      if (img) loaded.set(`portrait:${id}`, { img, face: a.face });
    }));
  }
  return Promise.all(jobs);
}

export function heroArt(heroId) {
  return loaded.get(`hero:${heroId}`) || null;
}

export function portraitArt(heroId) {
  return loaded.get(`portrait:${heroId}`) || null;
}
