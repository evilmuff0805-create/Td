// 유산 타워 그리기 — 실제 문화유산의 실루엣을 단순화해 표현한다
import { TS, PAL, shade, rgba, roof, dancheong, pillars, stoneBase, shadow, flag, glow, star, lotus } from './paint.js';

// t: {type, level, branch, angle, flash, disabledT, beamPow, owner, count}
export function drawTower(ctx, t, time, opts = {}) {
  const cx = opts.x ?? (t.x + 0.5) * TS;
  const gy = opts.y ?? (t.y + 0.5) * TS + 15; // 지면선
  const sc = (0.86 + 0.07 * (t.level - 1) + (t.branch ? 0.1 : 0)) * (opts.scale || 1);
  ctx.save();
  ctx.translate(cx, gy);
  ctx.scale(sc, sc);
  if (!opts.noShadow) shadow(ctx, 0, 0, 19, 5, 0.28);
  if (opts.owner !== undefined && opts.owner >= 0) {
    ctx.strokeStyle = rgba(opts.owner === 0 ? PAL.p0 : PAL.p1, 0.85);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, 18, 5, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  const fn = DRAW[t.type];
  if (fn) fn(ctx, t, time);
  // 단계 표시
  if (!opts.noPips) {
    if (t.branch) {
      ctx.fillStyle = t.branch === 'A' ? '#c8412f' : '#2f6fb8';
      ctx.beginPath();
      ctx.arc(13, -4, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = PAL.gold;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 7px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t.branch === 'A' ? '甲' : '乙', 13, -3.6);
    } else {
      for (let i = 0; i < t.level; i++) {
        ctx.fillStyle = PAL.gold;
        ctx.beginPath();
        ctx.arc(-6 + i * 6, 3, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  if (t.disabledT > 0) {
    ctx.fillStyle = 'rgba(30,20,40,0.45)';
    ctx.fillRect(-20, -46, 40, 46);
    ctx.strokeStyle = '#ff5a4a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-10, -32);
    ctx.lineTo(10, -12);
    ctx.moveTo(10, -32);
    ctx.lineTo(-10, -12);
    ctx.stroke();
  }
  ctx.restore();
}

const DRAW = {
  // 숭례문: 석축 홍예문 + 2층 누각
  sungnyemun(ctx, t, time) {
    // 높은 석축 육축 + 홍예
    stoneBase(ctx, 0, 0, 36, 17, '#d8cfb8');
    ctx.fillStyle = '#2a211b';
    ctx.beginPath();
    ctx.moveTo(-5.5, 0);
    ctx.lineTo(-5.5, -8);
    ctx.arc(0, -8, 5.5, Math.PI, 0);
    ctx.lineTo(5.5, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#efe7d4';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, -8, 7, Math.PI, 0);
    ctx.stroke();
    pillars(ctx, -11, 11, -17, 7, 4);
    dancheong(ctx, -13, -27, 26, 3);
    roof(ctx, 0, -24, 38, 8, '#34394a');
    pillars(ctx, -6, 6, -32, 4, 3);
    dancheong(ctx, -8, -36, 16, 2.5);
    roof(ctx, 0, -33, 26, 8, '#34394a');
    // 궁수
    const n = t.branch === 'B' ? 3 : 1;
    for (let i = 0; i < n; i++) {
      const ax = n === 1 ? 0 : -8 + i * 8;
      archer(ctx, ax, -17, t.angle, t.flash > 0, t.branch === 'A');
    }
    if (t.level >= 2) flag(ctx, -18, -12, 22, PAL.dancheongR, time);
    if (t.level >= 3) flag(ctx, 18, -12, 22, PAL.dancheongB, time + 1, -9);
    if (t.branch === 'A') {
      ctx.strokeStyle = PAL.gold;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, -44, 5, Math.PI * 0.2, Math.PI * 0.8, true);
      ctx.stroke();
    }
  },
  // 수원화성 포루: 벽돌 성벽 + 여장 + 화포
  hwaseong(ctx, t, time) {
    ctx.fillStyle = '#b9ad94';
    ctx.fillRect(-15, -22, 30, 22);
    ctx.strokeStyle = '#8d8470';
    ctx.lineWidth = 0.6;
    for (let r = 0; r < 5; r++) {
      ctx.beginPath();
      ctx.moveTo(-15, -22 + r * 4.4);
      ctx.lineTo(15, -22 + r * 4.4);
      ctx.stroke();
      for (let x = -15 + (r % 2) * 3; x < 15; x += 6) {
        ctx.beginPath();
        ctx.moveTo(x, -22 + r * 4.4);
        ctx.lineTo(x, -17.6 + r * 4.4);
        ctx.stroke();
      }
    }
    ctx.strokeStyle = '#6e6653';
    ctx.lineWidth = 1;
    ctx.strokeRect(-15, -22, 30, 22);
    // 여장 (총안이 있는 성가퀴)
    ctx.fillStyle = '#8c8475';
    for (let i = 0; i < 4; i++) ctx.fillRect(-15 + i * 8.2, -27, 5.6, 5);
    // 포구
    ctx.fillStyle = '#2a2622';
    ctx.fillRect(-9, -12, 4, 3);
    ctx.fillRect(5, -12, 4, 3);
    if (t.level >= 2 && t.branch !== 'B') {
      pillars(ctx, -9, 9, -27, 6, 3);
      roof(ctx, 0, -32, 26, 7);
    }
    // 화포 (조준 방향으로 회전)
    const a = t.angle ?? -Math.PI / 4;
    const recoil = t.flash > 0 ? -3 : 0;
    ctx.save();
    ctx.translate(0, -24);
    if (t.branch === 'B') {
      // 화차: 바퀴 달린 신기전 발사대
      ctx.fillStyle = PAL.wood;
      ctx.fillRect(-11, -4, 22, 5);
      ctx.fillStyle = '#3a2a1c';
      ctx.beginPath();
      ctx.arc(-7, 2, 3, 0, Math.PI * 2);
      ctx.arc(7, 2, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.rotate(Math.max(-2.6, Math.min(-0.5, a)) * 0.3 - 0.5);
      ctx.fillStyle = '#6b4a2b';
      ctx.fillRect(-10, -12, 20, 10);
      ctx.fillStyle = '#1d1c1a';
      for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++) ctx.fillRect(-8 + c * 4, -10 + r * 4, 2, 2);
      if (t.flash > 0) glow(ctx, 0, -14, 12, '#ffb35c', 0.8);
    } else {
      ctx.rotate(a);
      const len = t.branch === 'A' ? 20 : 13;
      const wid = t.branch === 'A' ? 6 : 4.5;
      ctx.fillStyle = t.branch === 'A' ? '#1d1c1a' : '#3b3a36';
      ctx.fillRect(recoil - 3, -wid / 2, len, wid);
      ctx.fillStyle = PAL.gold;
      ctx.fillRect(recoil + len - 5, -wid / 2 - 0.5, 1.5, wid + 1);
      if (t.flash > 0) glow(ctx, len + 2, 0, 9, '#ffcf6b', 0.9);
    }
    ctx.restore();
    if (t.level >= 3) flag(ctx, 14, -26, 16, PAL.dancheongY, time);
  },
  // 보신각: 누각 안의 범종
  bosingak(ctx, t, time) {
    stoneBase(ctx, 0, 0, 32, 6);
    pillars(ctx, -12, 12, -6, 20, 4);
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.fillRect(-12, -26, 24, 20);
    // 종
    const swing = t.flash > 0 ? Math.sin(time * 40) * 0.25 : 0;
    ctx.save();
    ctx.translate(0, -24);
    ctx.rotate(swing);
    ctx.strokeStyle = '#3a2a1c';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 3);
    ctx.stroke();
    const big = t.branch === 'A' ? 1.25 : 1;
    ctx.fillStyle = t.branch === 'A' ? '#8a7a3a' : '#4d6b5b';
    ctx.beginPath();
    ctx.moveTo(-5 * big, 4);
    ctx.quadraticCurveTo(-6 * big, 14 * big, -8 * big, 16 * big);
    ctx.lineTo(8 * big, 16 * big);
    ctx.quadraticCurveTo(6 * big, 14 * big, 5 * big, 4);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(-3 * big, 6, 1.5, 8 * big);
    ctx.fillStyle = PAL.gold;
    ctx.fillRect(-7 * big, 13 * big, 14 * big, 1.2);
    ctx.restore();
    if (t.flash > 0) glow(ctx, 0, -16, 20, t.branch === 'B' ? '#ff8a5c' : '#fff1b0', 0.5);
    dancheong(ctx, -15, -30, 30, 3);
    roof(ctx, 0, -27, 42, 9);
    roof(ctx, 0, -37, 28, 7);
    if (t.branch === 'B') {
      ctx.fillStyle = '#d9483b';
      ctx.beginPath();
      ctx.ellipse(-15, -18, 2.5, 3.5, 0, 0, Math.PI * 2);
      ctx.ellipse(15, -18, 2.5, 3.5, 0, 0, Math.PI * 2);
      ctx.fill();
      glow(ctx, -15, -18, 8, '#ffb35c', 0.5);
      glow(ctx, 15, -18, 8, '#ffb35c', 0.5);
    }
    if (t.level >= 3 && !t.branch) flag(ctx, 16, -6, 20, PAL.dancheongR, time);
  },
  // 첨성대: 병 모양 석탑 + 정자석
  cheomseong(ctx, t, time) {
    const rows = 12;
    for (let r = 0; r < rows; r++) {
      const k = r / rows;
      const w = 11 - 4 * Math.sin(k * Math.PI * 0.9) + (k > 0.8 ? -1 : 0) + (r === 0 ? 2 : 0);
      const y = -r * 3;
      ctx.fillStyle = r % 2 ? '#d6c9a6' : '#c9bb96';
      ctx.fillRect(-w, y - 3, w * 2, 3);
      ctx.strokeStyle = 'rgba(110,95,70,0.5)';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(-w, y - 3, w * 2, 3);
    }
    // 창
    ctx.fillStyle = '#2a211b';
    ctx.fillRect(-3, -21, 6, 6);
    // 정자석
    ctx.strokeStyle = '#b3a57f';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(-7, -41, 14, 5);
    stoneBase(ctx, 0, 1, 26, 3, '#bfb393');
    const lit = t.flash > 0;
    if (t.branch === 'A') {
      // 혼천의
      ctx.save();
      ctx.translate(0, -47);
      ctx.strokeStyle = PAL.gold;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, 7, 2.5 + i * 2, time * (0.8 + i * 0.4) + i, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }
    const col = t.branch === 'B' ? '#c9a6ff' : '#bfe6ff';
    glow(ctx, 0, -46, lit ? 16 : 8, col, lit ? 0.9 : 0.5);
    ctx.fillStyle = '#fff';
    star(ctx, 0, -46, lit ? 4 : 2.6);
    ctx.fill();
    if (t.level >= 2) {
      ctx.fillStyle = rgba(col, 0.8);
      star(ctx, -9, -38 + Math.sin(time * 2) * 1.5, 1.4);
      ctx.fill();
    }
    if (t.level >= 3) {
      ctx.fillStyle = rgba(col, 0.8);
      star(ctx, 9, -34 + Math.cos(time * 2) * 1.5, 1.4);
      ctx.fill();
    }
  },
  // 해인사 장경각: 살창이 있는 긴 판전 + 연꽃
  haeinsa(ctx, t, time) {
    stoneBase(ctx, 0, 0, 36, 5);
    ctx.fillStyle = '#d9c8a2';
    ctx.fillRect(-16, -18, 32, 13);
    ctx.fillStyle = '#6b4a2b';
    for (let i = 0; i < 9; i++) ctx.fillRect(-14 + i * 3.4, -15, 1.3, 8);
    pillars(ctx, -16, 16, -5, 13, 4);
    dancheong(ctx, -17, -21, 34, 2.5);
    roof(ctx, 0, -19, 44, 9, '#454b58', { ridge: 0.42 });
    const pulse = 0.5 + 0.5 * Math.sin(time * 2.5);
    glow(ctx, 0, -36, 12 + pulse * 3, '#ffd77a', 0.45);
    lotus(ctx, 0, -35, t.branch ? 7 : 5, t.branch === 'B' ? '#ffd0a0' : '#f2b8c6');
    if (t.branch === 'A') {
      ctx.strokeStyle = rgba('#ffd77a', 0.7);
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const a = time + (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * 9, -35 + Math.sin(a) * 9);
        ctx.lineTo(Math.cos(a) * 13, -35 + Math.sin(a) * 13);
        ctx.stroke();
      }
    }
    if (t.level >= 3 && !t.branch) flag(ctx, -18, -4, 18, '#d9a300', time);
  },
  // 석굴암: 돔 + 본존불 광배
  seokguram(ctx, t, time) {
    ctx.fillStyle = '#d7d2c4';
    ctx.beginPath();
    ctx.arc(0, -4, 18, Math.PI, 0);
    ctx.lineTo(18, 0);
    ctx.lineTo(-18, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#9f998a';
    ctx.lineWidth = 0.6;
    for (let r = 1; r < 4; r++) {
      ctx.beginPath();
      ctx.arc(0, -4, 18 - r * 0.2, Math.PI + r * 0.25, -r * 0.25);
      ctx.stroke();
    }
    for (let i = 1; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(0, -4, i * 3.4, Math.PI, 0);
      ctx.stroke();
    }
    ctx.strokeStyle = '#8f897a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, -4, 18, Math.PI, 0);
    ctx.stroke();
    // 입구
    ctx.fillStyle = '#2d2620';
    ctx.beginPath();
    ctx.moveTo(-7, 0);
    ctx.lineTo(-7, -9);
    ctx.arc(0, -9, 7, Math.PI, 0);
    ctx.lineTo(7, 0);
    ctx.closePath();
    ctx.fill();
    // 불상
    const pow = t.beamPow || 0;
    glow(ctx, 0, -11, 10 + pow * 10, '#ffe08a', 0.5 + pow * 0.4);
    ctx.fillStyle = '#e9d9a8';
    ctx.beginPath();
    ctx.arc(0, -12, 2.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -5, 4.5, 4, 0, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(-4.5, -5, 9, 4);
    // 광배
    ctx.strokeStyle = rgba('#ffd24a', 0.6 + pow * 0.4);
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, -12, 5 + pow * 2, 0, Math.PI * 2);
    ctx.stroke();
    if (t.branch === 'B') {
      for (let i = 0; i < 5; i++) {
        const a = Math.PI + (i + 0.5) * (Math.PI / 5);
        glow(ctx, Math.cos(a) * 14, -4 + Math.sin(a) * 14, 4, '#ffe08a', 0.8);
      }
    }
    if (t.level >= 2) {
      ctx.fillStyle = PAL.gold;
      ctx.fillRect(-1, -24, 2, 3);
    }
    if (t.level >= 3 || t.branch) {
      ctx.fillStyle = '#c9c3b3';
      ctx.fillRect(-20, -2, 4, 2);
      ctx.fillRect(16, -2, 4, 2);
    }
  },
  // 경복궁 근정전: 2단 월대 + 중층 지붕
  gyeongbok(ctx, t, time) {
    ctx.scale(1.12, 1.12);
    stoneBase(ctx, 0, 0, 40, 5);
    stoneBase(ctx, 0, -5, 32, 4, '#dcd3bf');
    ctx.strokeStyle = '#efe7d4';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(-16, -9);
    ctx.lineTo(16, -9);
    ctx.stroke();
    ctx.fillStyle = '#e0c89a';
    ctx.fillRect(-13, -19, 26, 10);
    ctx.fillStyle = '#6b3a24';
    for (let i = 0; i < 5; i++) ctx.fillRect(-11 + i * 5, -17, 3, 7);
    pillars(ctx, -13, 13, -9, 11, 5);
    dancheong(ctx, -15, -22, 30, 3);
    roof(ctx, 0, -20, 44, 9);
    ctx.fillStyle = '#e0c89a';
    ctx.fillRect(-9, -30, 18, 5);
    pillars(ctx, -9, 9, -25, 5, 4);
    dancheong(ctx, -11, -33, 22, 2.5);
    roof(ctx, 0, -31, 34, 10);
    if (t.branch === 'A') {
      // 일월오봉도: 해와 달
      ctx.fillStyle = '#d9483b';
      ctx.beginPath();
      ctx.arc(-6, -46, 2.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f4f1e8';
      ctx.beginPath();
      ctx.arc(6, -46, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
    if (t.branch === 'B') {
      ctx.fillStyle = '#6b4a2b';
      ctx.fillRect(-20, -8, 8, 6);
      ctx.fillStyle = PAL.gold;
      ctx.fillRect(-20, -9, 8, 1.5);
      ctx.beginPath();
      ctx.arc(-16, -11, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    const pulse = 0.5 + 0.5 * Math.sin(time * 1.6);
    glow(ctx, 0, -42, 8 + pulse * 3, '#ffd24a', 0.35);
    flag(ctx, -20, -4, 26, PAL.dancheongY, time);
    if (t.level >= 2) flag(ctx, 20, -4, 26, PAL.dancheongR, time + 0.7, -9);
  },
};

function archer(ctx, x, y, angle = -1.2, firing, master) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = master ? '#7a2a22' : '#2f4f7a';
  ctx.fillRect(-2, -5, 4, 5);
  ctx.fillStyle = '#f0c9a0';
  ctx.beginPath();
  ctx.arc(0, -7, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#1d1c1a';
  ctx.fillRect(-2.6, -9.4, 5.2, 1.2);
  ctx.rotate(angle);
  ctx.strokeStyle = '#5b3a22';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(3, -3, 4, -1.2, 1.2);
  ctx.stroke();
  if (!firing) {
    ctx.strokeStyle = '#ddd';
    ctx.beginPath();
    ctx.moveTo(-1, -3);
    ctx.lineTo(6, -3);
    ctx.stroke();
  }
  ctx.restore();
}

// 건설 메뉴용 아이콘
const iconCache = new Map();
export function towerIcon(type, level = 1, branch = null, size = 64) {
  const key = `${type}:${level}:${branch}:${size}`;
  if (iconCache.has(key)) return iconCache.get(key);
  const cv = document.createElement('canvas');
  const dpr = 2;
  cv.width = size * dpr;
  cv.height = size * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  drawTower(ctx, { type, level, branch, angle: -0.8, flash: 0 }, 0.5, { x: size / 2, y: size * 0.84, scale: size / 52, noPips: true });
  const url = cv.toDataURL();
  iconCache.set(key, url);
  return url;
}

export { shade };
