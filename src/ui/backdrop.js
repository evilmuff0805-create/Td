// 메뉴 배경: 한지 위 수묵 산수 (타이틀) / 옻칠 바탕 위 옅은 산 능선 (그 밖의 화면)
import { makeRng } from '../sim/rng.js';
import { sceneArt } from '../render/art.js';

let current = null;

export function setBackdrop(kind) {
  if (current && current.kind === kind) return;
  if (current) {
    cancelAnimationFrame(current.raf);
    current.cv.remove();
    window.removeEventListener('resize', current.onResize);
  }
  const cv = document.createElement('canvas');
  cv.className = 'screen-bg';
  cv.setAttribute('aria-hidden', 'true');
  document.body.prepend(cv);
  const st = { kind, cv, petals: [], raf: 0, static: null };
  const paint = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    st.static = document.createElement('canvas');
    st.static.width = cv.width;
    st.static.height = cv.height;
    const c = st.static.getContext('2d');
    c.scale(dpr, dpr);
    const scene = sceneArt();
    if (scene) {
      const k = Math.max(innerWidth / scene.img.naturalWidth, innerHeight / scene.img.naturalHeight);
      const w = scene.img.naturalWidth * k, hh = scene.img.naturalHeight * k;
      c.drawImage(scene.img, (innerWidth - w) / 2, (innerHeight - hh) / 2, w, hh);
      c.fillStyle = kind === 'title' ? 'rgba(7,21,35,0.32)' : 'rgba(7,21,35,0.82)';
      c.fillRect(0, 0, innerWidth, innerHeight);
      const shade = c.createLinearGradient(0, 0, 0, innerHeight);
      shade.addColorStop(0, 'rgba(5,17,29,0.22)'); shade.addColorStop(0.55, 'rgba(5,17,29,0.06)'); shade.addColorStop(1, 'rgba(5,17,29,0.7)');
      c.fillStyle = shade; c.fillRect(0, 0, innerWidth, innerHeight);
    } else if (kind === 'title') paintTitle(c, innerWidth, innerHeight);
    else paintLacquer(c, innerWidth, innerHeight);
    st.dpr = dpr;
  };
  st.onResize = paint;
  window.addEventListener('resize', paint);
  paint();
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loop = (t) => {
    const ctx = cv.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(st.static, 0, 0);
    if (!reduce) {
      ctx.scale(st.dpr, st.dpr);
      const want = kind === 'title' ? 40 : 18;
      while (st.petals.length < want) st.petals.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, s: 0.5 + Math.random(), p: Math.random() * 6 });
      for (const p of st.petals) {
        p.y += 0.35 * p.s;
        p.x += 0.25 + Math.sin(t / 1000 + p.p) * 0.3;
        if (p.y > innerHeight + 10) {
          p.y = -10;
          p.x = Math.random() * innerWidth;
        }
        if (p.x > innerWidth + 10) p.x = -10;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(t / 900 * p.s + p.p);
        ctx.fillStyle = kind === 'title' ? 'rgba(213,231,247,0.65)' : 'rgba(213,231,247,0.14)';
        ctx.beginPath();
        ctx.ellipse(0, 0, 1.7 * p.s, 1.3 * p.s, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    st.raf = requestAnimationFrame(loop);
  };
  st.raf = requestAnimationFrame(loop);
  current = st;
}

function ridge(c, w, h, base, amp, color, seed, blur = 0) {
  const rnd = makeRng(seed);
  c.save();
  if (blur) c.filter = `blur(${blur}px)`;
  c.fillStyle = color;
  c.beginPath();
  c.moveTo(0, h);
  let y = base;
  const peaks = [];
  for (let x = 0; x <= w + 20; x += 20) {
    y = base - Math.abs(Math.sin(x / (120 + seed % 60) + seed)) * amp - rnd() * amp * 0.25;
    peaks.push([x, y]);
    c.lineTo(x, y);
  }
  c.lineTo(w, h);
  c.closePath();
  c.fill();
  c.restore();
  return peaks;
}

function paintTitle(c, w, h) {
  // 한지
  const g = c.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#f4ecd9');
  g.addColorStop(1, '#e5d6b6');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
  const rnd = makeRng(7);
  for (let i = 0; i < 1400; i++) {
    c.strokeStyle = `rgba(140,110,60,${0.04 + rnd() * 0.05})`;
    c.lineWidth = 0.6;
    const x = rnd() * w;
    const y = rnd() * h;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + (rnd() - 0.5) * 18, y + (rnd() - 0.5) * 6);
    c.stroke();
  }
  // 붉은 해
  c.fillStyle = 'rgba(184,50,42,0.85)';
  c.beginPath();
  c.arc(w * 0.78, h * 0.26, Math.min(w, h) * 0.09, 0, Math.PI * 2);
  c.fill();
  // 수묵 산
  ridge(c, w, h, h * 0.62, h * 0.22, 'rgba(60,60,58,0.18)', 11, 3);
  ridge(c, w, h, h * 0.72, h * 0.2, 'rgba(40,40,38,0.32)', 23, 1.5);
  const front = ridge(c, w, h, h * 0.86, h * 0.16, 'rgba(25,25,24,0.78)', 37);
  // 안개
  const fog = c.createLinearGradient(0, h * 0.6, 0, h * 0.8);
  fog.addColorStop(0, 'rgba(244,236,217,0)');
  fog.addColorStop(0.5, 'rgba(244,236,217,0.55)');
  fog.addColorStop(1, 'rgba(244,236,217,0)');
  c.fillStyle = fog;
  c.fillRect(0, h * 0.6, w, h * 0.2);
  // 소나무 실루엣
  for (let i = 0; i < 5; i++) {
    const [x, y] = front[Math.floor((i + 0.5) * (front.length / 5))] || [0, h];
    pine(c, x, y + 4, 0.7 + (i % 3) * 0.25);
  }
}

function pine(c, x, y, s) {
  c.save();
  c.translate(x, y);
  c.scale(s, s);
  c.strokeStyle = 'rgba(25,25,24,0.85)';
  c.lineWidth = 4;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(0, 0);
  c.quadraticCurveTo(8, -30, -4, -60);
  c.stroke();
  c.fillStyle = 'rgba(25,25,24,0.85)';
  for (const [ox, oy, rw] of [[-14, -40, 22], [8, -55, 20], [-6, -68, 14]]) {
    c.beginPath();
    c.ellipse(ox, oy, rw, rw * 0.32, 0, 0, Math.PI * 2);
    c.fill();
  }
  c.restore();
}

function paintLacquer(c, w, h) {
  const g = c.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.4, Math.max(w, h) * 0.8);
  g.addColorStop(0, '#2c2119');
  g.addColorStop(1, '#130d0a');
  c.fillStyle = g;
  c.fillRect(0, 0, w, h);
  ridge(c, w, h, h * 0.9, h * 0.18, 'rgba(240,199,94,0.05)', 5, 2);
  ridge(c, w, h, h * 0.97, h * 0.12, 'rgba(240,199,94,0.06)', 19, 1);
  // 단청 띠
  const colors = ['#2f8f7a', '#d9a300', '#b8322a', '#efe4cc', '#2d5b8a', '#efe4cc'];
  const widths = [14, 3, 8, 2, 10, 2];
  let x = 0;
  let i = 0;
  while (x < w) {
    c.fillStyle = colors[i % colors.length];
    c.globalAlpha = 0.85;
    c.fillRect(x, 0, widths[i % widths.length], 6);
    x += widths[i % widths.length];
    i++;
  }
  c.globalAlpha = 1;
}
