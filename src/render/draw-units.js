// 영웅·왜군·의병·거북선 — 입체 카툰 캐릭터 (큰 머리 2.5등신 인형 비율)
// 캐릭터마다 옷·모자·무기만 정의하고, 몸의 뼈대(rig)는 모두 같은 것을 쓴다.
// 걷기 6프레임 · 숨쉬기 4프레임 · 공격 1프레임을 스프라이트로 미리 그려 둔다.
import { skinDef, GOLD_LOOK } from '../data/skins.js';
import { TS, PAL, rgba, shade, glow, star } from './paint.js';
import { OL, LW, fillToon, sphere, gloss, rrect, capsule, cylinder, softShadow, eye, sprite, blit } from './toon.js';
import { ENEMIES } from '../data/enemies.js';
import { heroArt, enemyArt, allyArt, propArt, drawIllustration } from './art.js';

const SKIN = '#f6cfa3';
const SPR_W = 44;
const SPR_H = 48;
const AX = 22;
const AY = 40;

// ───────────────────────── 공용 부위 ─────────────────────────
function boot(c, x, y, color) {
  rrect(c, x - 2.3, y - 3, 4.6, 3.2, 1.4);
  fillToon(c, color, x - 2, y - 3, x + 2, y + 0.2, { lw: 0.9 });
}

function limb(c, x1, y1, x2, y2, w, color) {
  // 소매: 굵은 둥근 선 + 외곽선
  c.lineCap = 'round';
  c.strokeStyle = OL;
  c.lineWidth = w + LW * 1.6;
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
  c.strokeStyle = color;
  c.lineWidth = w;
  c.stroke();
  c.strokeStyle = 'rgba(255,255,255,0.22)';
  c.lineWidth = w * 0.35;
  c.beginPath();
  c.moveTo(x1 - w * 0.15, y1 - w * 0.2);
  c.lineTo(x2 - w * 0.15, y2 - w * 0.2);
  c.stroke();
}

function hand(c, x, y, skin = SKIN, r = 1.75) {
  sphere(c, x, y, r, skin, { lw: 0.85, gloss: false });
}

// 몸통: 위가 좁고 아래가 퍼진 둥근 사다리꼴
function torso(c, color, w = 1, flare = 1) {
  const tw = 4.6 * w;
  const bw = 6.2 * w * flare;
  c.beginPath();
  c.moveTo(-tw, -13.2);
  c.quadraticCurveTo(0, -14.6, tw, -13.2);
  c.lineTo(bw, -3.6);
  c.quadraticCurveTo(0, -1.6, -bw, -3.6);
  c.closePath();
  fillToon(c, color, -bw, -14, bw * 0.4, -2);
}

const HEAD = { x: 0.6, y: -20.2, r: 7.4 };

function head(c, o) {
  const { x, y, r } = HEAD;
  if (o.hairBack) {
    c.beginPath();
    c.arc(x - 1.2, y + 0.5, r * 0.98, Math.PI * 0.55, Math.PI * 1.55);
    c.closePath();
    fillToon(c, o.hairBack, x - r, y - r, x, y + r, { lw: 0.9 });
  }
  sphere(c, x, y, r, o.skin || SKIN, { hi: 0.28, lo: 0.22, glossA: 0.35 });
  if (o.mask) o.mask(c, x, y, r);
  if (!o.noFace) face(c, o);
  if (o.beard) o.beard(c, x, y, r);
}

function face(c, o) {
  const mood = o.mood || 'calm';
  const s = o.eyeSize || 1.55;
  eye(c, 1.2, -19.4, s, 0.35, mood);
  eye(c, 5.5, -19.4, s * 0.9, 0.35, mood);
  // 볼
  c.fillStyle = 'rgba(240,110,110,0.32)';
  c.beginPath();
  c.ellipse(-0.6, -16.4, 1.5, 0.9, 0, 0, Math.PI * 2);
  c.ellipse(6.9, -16.4, 1.1, 0.8, 0, 0, Math.PI * 2);
  c.fill();
  // 입
  c.strokeStyle = OL;
  c.lineWidth = 0.7;
  c.lineCap = 'round';
  c.beginPath();
  if (mood === 'angry') {
    c.moveTo(2.4, -15.1);
    c.quadraticCurveTo(3.6, -15.8, 4.9, -15.1);
  } else {
    c.moveTo(2.5, -15.6);
    c.quadraticCurveTo(3.7, -14.6, 4.9, -15.6);
  }
  c.stroke();
}

// 뼈대
function rig(c, o, pose) {
  const st = pose.step;
  if (o.backItem) o.backItem(c, pose);
  boot(c, -2.5 + st * 1.5, -pose.liftB, o.boots || '#2c2620');
  if (!o.longRobe) boot(c, 2.4 - st * 1.5, -pose.liftF, o.boots || '#2c2620');
  c.save();
  c.translate(0, pose.bob);
  const sleeve = o.sleeve || o.body;
  // 뒤팔
  const bh = { x: -5.6 - st * 0.9, y: -6.8 };
  limb(c, -3.9, -11.6, bh.x, bh.y, 3.1, sleeve);
  if (o.backHand) o.backHand(c, bh, pose);
  else hand(c, bh.x, bh.y, o.handColor);
  torso(c, o.body, o.bodyW || 1, o.flare || 1);
  if (o.longRobe) boot(c, 2.4 - st * 1.5, -pose.liftF, o.boots || '#2c2620');
  if (o.chest) o.chest(c, pose);
  head(c, o);
  if (o.hat) o.hat(c, pose);
  const fh = pose.atk ? { x: 8.4, y: -11.8 } : { x: 5.9 + st * 0.9, y: -7 };
  if (o.weaponBack) o.weaponBack(c, fh, pose);
  limb(c, 3.9, -11.6, fh.x, fh.y, 3.1, sleeve);
  hand(c, fh.x, fh.y, o.handColor);
  if (o.weapon) o.weapon(c, fh, pose);
  c.restore();
}

// ───────────────────────── 무기·장신구 ─────────────────────────
function spear(c, hnd, pose, len = 20, blade = '#dfe5ea') {
  const a = pose.atk ? -0.25 : -1.05;
  const ex = hnd.x + Math.cos(a) * len * 0.7;
  const ey = hnd.y + Math.sin(a) * len * 0.7;
  const bx = hnd.x - Math.cos(a) * len * 0.3;
  const by = hnd.y - Math.sin(a) * len * 0.3;
  c.lineCap = 'round';
  c.strokeStyle = OL;
  c.lineWidth = 2.2;
  c.beginPath();
  c.moveTo(bx, by);
  c.lineTo(ex, ey);
  c.stroke();
  c.strokeStyle = '#8a5a33';
  c.lineWidth = 1.2;
  c.stroke();
  c.save();
  c.translate(ex, ey);
  c.rotate(a);
  c.beginPath();
  c.moveTo(0, -1.3);
  c.lineTo(5, 0);
  c.lineTo(0, 1.3);
  c.closePath();
  fillToon(c, blade, 0, -1.3, 5, 1.3, { lw: 0.8 });
  c.restore();
}

function sword(c, hnd, pose, len = 11, color = '#e8eef2') {
  const a = pose.atk ? 0.3 : -1.25;
  c.save();
  c.translate(hnd.x, hnd.y);
  c.rotate(a);
  c.beginPath();
  c.moveTo(0.5, -0.9);
  c.quadraticCurveTo(len * 0.6, -1.6, len, -0.2);
  c.lineTo(0.5, 0.9);
  c.closePath();
  fillToon(c, color, 0, -1, len, 1, { lw: 0.8, hi: 0.5 });
  c.fillStyle = PAL.gold;
  c.fillRect(-0.6, -1.8, 1.4, 3.6);
  c.strokeStyle = OL;
  c.lineWidth = 0.6;
  c.strokeRect(-0.6, -1.8, 1.4, 3.6);
  c.restore();
  if (pose.atk) {
    c.strokeStyle = 'rgba(255,255,255,0.8)';
    c.lineWidth = 1.2;
    c.beginPath();
    c.arc(hnd.x - 2, hnd.y + 1, len * 0.95, -1.3, 0.5);
    c.stroke();
  }
}

function bow(c, hnd, pose) {
  c.save();
  c.translate(hnd.x + 0.8, hnd.y - 1);
  c.strokeStyle = OL;
  c.lineWidth = 2.1;
  c.beginPath();
  c.arc(-2, 0, 7, -1.15, 1.15);
  c.stroke();
  c.strokeStyle = '#a0522d';
  c.lineWidth = 1.1;
  c.stroke();
  c.strokeStyle = '#f4efe4';
  c.lineWidth = 0.45;
  c.beginPath();
  const x0 = -2 + Math.cos(1.15) * 7;
  c.moveTo(x0, -Math.sin(1.15) * 7);
  c.lineTo(pose.atk ? -3.2 : x0, 0);
  c.lineTo(x0, Math.sin(1.15) * 7);
  c.stroke();
  c.restore();
}

function kabuto(color, crest, crestType = 'v', flaps = true) {
  return (c) => {
    const { x, y, r } = HEAD;
    if (flaps) {
      // 시코로(목가리개): 뒤통수 쪽(왼쪽)에만 늘어뜨린다
      c.beginPath();
      c.moveTo(x - r - 1.2, y - 2.6);
      c.quadraticCurveTo(x - r - 3, y + 3.5, x - r + 1.5, y + 6);
      c.lineTo(x - 1.6, y + 3.4);
      c.quadraticCurveTo(x - 2.6, y - 0.5, x - 1.2, y - 2.6);
      c.closePath();
      fillToon(c, shade(color, -0.08), x - r - 2, y - 3, x, y + 6, { lw: 0.9 });
      c.strokeStyle = 'rgba(0,0,0,0.28)';
      c.lineWidth = 0.5;
      for (let k = 1; k < 3; k++) {
        c.beginPath();
        c.moveTo(x - r - 1.5, y - 1.2 + k * 2);
        c.lineTo(x - 2.2, y - 1.8 + k * 2);
        c.stroke();
      }
      // 앞쪽 귀막이(후키가에시)
      c.beginPath();
      c.moveTo(x + r - 0.4, y - 3.6);
      c.quadraticCurveTo(x + r + 2.6, y - 3.2, x + r + 2, y - 0.8);
      c.quadraticCurveTo(x + r + 0.4, y - 1.8, x + r - 1.2, y - 2.6);
      c.closePath();
      fillToon(c, color, x + r - 1, y - 4, x + r + 3, y - 1, { lw: 0.7 });
    }
    // 투구 사발 (눈썹 위까지만)
    c.beginPath();
    c.arc(x, y - 2.6, r + 0.5, Math.PI * 1.0, Math.PI * 2.0);
    c.quadraticCurveTo(x, y - 1.9, x - r - 0.5, y - 2.6);
    c.closePath();
    fillToon(c, color, x - r, y - r - 2, x + r * 0.5, y - 2, { hi: 0.42 });
    gloss(c, x - r * 0.35, y - r * 0.72 - 1, r * 0.35, r * 0.14, 0.5);
    // 테
    rrect(c, x - r - 0.7, y - 3.8, 2 * r + 1.4, 1.5, 0.6);
    fillToon(c, PAL.gold, x - r, y - 3.8, x + r, y - 2.3, { lw: 0.6, hi: 0.5 });
    const top = y - r - 2.4;
    if (crestType === 'v') {
      c.beginPath();
      c.moveTo(x - 1, top + 0.4);
      c.lineTo(x - 6, top - 6.4);
      c.lineTo(x - 4.2, top - 6.8);
      c.lineTo(x + 0.6, top - 0.8);
      c.lineTo(x + 5.4, top - 6.8);
      c.lineTo(x + 7, top - 6.2);
      c.lineTo(x + 2, top + 0.4);
      c.closePath();
      fillToon(c, crest, x - 6, top - 7, x + 7, top, { lw: 0.8, hi: 0.5 });
    } else if (crestType === 'moon') {
      c.beginPath();
      c.arc(x + 0.6, top - 2.4, 5, Math.PI * 0.05, Math.PI * 0.95, true);
      c.arc(x + 0.6, top - 0.6, 3.8, Math.PI * 0.95, Math.PI * 0.05);
      c.closePath();
      fillToon(c, crest, x - 5, top - 7.4, x + 5, top, { lw: 0.8, hi: 0.5 });
    } else if (crestType === 'horns') {
      for (const sd of [-1, 1]) {
        c.beginPath();
        c.moveTo(x + sd * 3, top + 1.6);
        c.quadraticCurveTo(x + sd * 9, top - 0.4, x + sd * 8, top - 7.4);
        c.quadraticCurveTo(x + sd * 6.5, top - 1.9, x + sd * 1.5, top + 1.1);
        c.closePath();
        fillToon(c, crest, x - 8, top - 7.4, x + 8, top, { lw: 0.8 });
      }
    }
  };
}

function jingasa(color) {
  return (c) => {
    const { x, y, r } = HEAD;
    c.beginPath();
    c.moveTo(x - r - 3.4, y - 3.2);
    c.quadraticCurveTo(x, y - r - 6.2, x + r + 3.4, y - 3.2);
    c.quadraticCurveTo(x, y - 1.8, x - r - 3.4, y - 3.2);
    c.closePath();
    fillToon(c, color, x - r, y - r - 5, x + r * 0.3, y, { hi: 0.35 });
    gloss(c, x - 2.5, y - r + 0.5, 3.4, 1.1, 0.4);
    sphere(c, x, y - r - 4.2, 1.2, PAL.gold, { lw: 0.6, gloss: false });
  };
}

// 군배(지휘 부채)
function gunbai(c, h, pose, color = '#1d1c1a') {
  c.save();
  c.translate(h.x, h.y);
  c.rotate(pose.atk ? -0.4 : -0.9);
  c.fillStyle = OL;
  c.fillRect(-0.4, -1, 0.8, -5);
  c.beginPath();
  c.ellipse(0, -8, 3.4, 4, 0, 0, Math.PI * 2);
  fillToon(c, color, -3, -12, 3, -4, { lw: 0.7 });
  sphere(c, 0, -8, 1.6, '#c0392b', { lw: 0.4, gloss: false });
  c.restore();
}

function flagPole(color, h = 16, mark = null) {
  return (c, pose) => {
    c.strokeStyle = OL;
    c.lineWidth = 1.6;
    c.beginPath();
    c.moveTo(-3.5, -8);
    c.lineTo(-3.5, -8 - h);
    c.stroke();
    c.strokeStyle = '#5b3a22';
    c.lineWidth = 0.8;
    c.stroke();
    const wv = Math.sin((pose.phase || 0) * 6.28) * 0.8;
    c.beginPath();
    c.moveTo(-3.5, -8 - h);
    c.lineTo(-9.5 + wv, -8 - h + 0.6);
    c.lineTo(-9.3 - wv, -8 - h * 0.45);
    c.lineTo(-3.5, -8 - h * 0.45);
    c.closePath();
    fillToon(c, color, -9, -8 - h, -3.5, -8 - h * 0.45, { lw: 0.8 });
    if (mark) mark(c, -6.4, -8 - h * 0.72);
  };
}

// ───────────────────────── 영웅 ─────────────────────────
const HERO_LOOK = {
  // 이순신: 두정갑 + 투구와 붉은 상모 + 붉은 망토 + 활
  yi: {
    body: '#274a78', sleeve: '#274a78', boots: '#1d1c1a', mood: 'calm',
    backItem: (c, pose) => {
      c.beginPath();
      c.moveTo(-4, -13);
      c.quadraticCurveTo(-11 - pose.step * 1.5, -6, -8.5, -0.8);
      c.lineTo(-1.5, -2.5);
      c.closePath();
      fillToon(c, '#c0392b', -11, -13, -1, 0);
      // 화살통
      rrect(c, -8.2, -16, 3, 9, 1.2);
      fillToon(c, '#6b4a2b', -8, -16, -5, -7, { lw: 0.8 });
      c.fillStyle = '#f4efe4';
      c.fillRect(-7.6, -18, 0.7, 2.4);
      c.fillRect(-6.4, -18.5, 0.7, 2.8);
    },
    chest: (c) => {
      c.fillStyle = PAL.gold;
      for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) {
        c.beginPath();
        c.arc(-2.4 + k * 2.6, -11 + r * 2.5, 0.55, 0, Math.PI * 2);
        c.fill();
      }
      c.fillStyle = '#1d1c1a';
      c.fillRect(-5.6, -5.2, 11.2, 1.3);
    },
    beard: (c, x, y) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1.4, -16.9);
      c.quadraticCurveTo(3.6, -17.8, 5.9, -16.9);
      c.quadraticCurveTo(3.6, -16.4, 1.4, -16.9);
      c.fill();
      c.beginPath();
      c.moveTo(3, -14.2);
      c.quadraticCurveTo(3.7, -11.6, 4.5, -14.2);
      c.fill();
    },
    hat: (c, pose) => {
      const { x, y, r } = HEAD;
      kabuto('#3a3f4c', PAL.gold, 'none', true)(c);
      // 붉은 상모
      c.beginPath();
      c.moveTo(x, y - r - 0.6);
      c.quadraticCurveTo(x - 3 + pose.step, y - r - 7, x + 1.5, y - r - 8.5);
      c.quadraticCurveTo(x + 3, y - r - 5, x + 1.4, y - r - 0.6);
      c.closePath();
      fillToon(c, '#d33a2c', x - 3, y - r - 8, x + 3, y - r, { lw: 0.8 });
      sphere(c, x + 0.4, y - r - 0.8, 1.2, PAL.gold, { lw: 0.6, gloss: false });
    },
    weapon: (c, h, pose) => bow(c, h, pose),
  },
  // 세종대왕: 붉은 곤룡포 + 금빛 보 + 익선관 + 훈민정음 책
  sejong: {
    body: '#c0392b', sleeve: '#c0392b', boots: '#1d1c1a', longRobe: true, flare: 1.15,
    chest: (c) => {
      sphere(c, 0, -9.6, 2.7, PAL.gold, { lw: 0.8 });
      c.strokeStyle = '#8a3a16';
      c.lineWidth = 0.6;
      c.beginPath();
      c.arc(0, -9.6, 1.4, 0.3, 5.2);
      c.stroke();
      c.fillStyle = '#1d1c1a';
      c.fillRect(-6, -5.3, 12, 1.5);
      c.fillStyle = PAL.gold;
      for (let k = -2; k <= 2; k++) c.fillRect(k * 2.2 - 0.5, -5.1, 1, 1.1);
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1.2, -16.9);
      c.quadraticCurveTo(3.6, -17.9, 6, -16.9);
      c.quadraticCurveTo(3.6, -16.3, 1.2, -16.9);
      c.fill();
      c.beginPath();
      c.moveTo(2.2, -14.4);
      c.quadraticCurveTo(3.7, -10.8, 5.2, -14.4);
      c.quadraticCurveTo(3.7, -13.6, 2.2, -14.4);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      // 익선관: 뒤로 솟은 두 날개
      for (const [ox, oy] of [[-4.6, -2.6], [-1.2, -1.6]]) {
        rrect(c, x + ox - 1.8, y - r - 5.5 + oy, 3.4, 6, 1.5);
        fillToon(c, '#23201d', x + ox, y - r - 5, x + ox + 3, y - r + 1, { lw: 0.8 });
      }
      c.beginPath();
      c.arc(x, y - 2.6, r + 0.4, Math.PI * 1.0, Math.PI * 2.0);
      c.quadraticCurveTo(x, y - 1.9, x - r - 0.4, y - 2.6);
      c.closePath();
      fillToon(c, '#2a2622', x - r, y - r - 2, x + r, y - 2, { hi: 0.3 });
      gloss(c, x - 2.6, y - r - 0.6, 2.6, 0.9, 0.35);
      c.fillStyle = PAL.gold;
      c.fillRect(x - r, y - 4, 2 * r, 0.9);
    },
    weapon: (c, h, pose) => {
      c.save();
      c.translate(h.x + 1.4, h.y - 1);
      c.rotate(pose.atk ? -0.5 : -0.15);
      rrect(c, -1.8, -3.6, 5, 6.4, 0.8);
      fillToon(c, '#2f5f8f', -2, -4, 3, 3, { lw: 0.8 });
      c.fillStyle = '#f4ecd0';
      c.fillRect(-1, -2.8, 3.4, 4.8);
      c.fillStyle = '#1b1a17';
      c.font = 'bold 2.6px serif';
      c.fillText('훈', -0.6, 0.4);
      c.restore();
      if (pose.atk) glow(c, h.x + 2, h.y - 2, 7, '#ffe08a', 0.8);
    },
  },
  // 을지문덕: 고구려 찰갑 + 깃털 투구 + 깃털 부채
  eulji: {
    body: '#2f6b52', sleeve: '#3a7a60', boots: '#3a2e22', mood: 'calm',
    chest: (c) => {
      c.strokeStyle = 'rgba(20,40,30,0.55)';
      c.lineWidth = 0.55;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.3);
        c.lineTo(5.2, -12 + r * 2.3);
        c.stroke();
        for (let k = -4; k <= 4; k += 2) {
          c.beginPath();
          c.moveTo(k + (r % 2), -12 + r * 2.3);
          c.lineTo(k + (r % 2), -9.7 + r * 2.3);
          c.stroke();
        }
      }
      c.fillStyle = PAL.gold;
      c.fillRect(-5.8, -4.8, 11.6, 1.1);
    },
    beard: (c) => {
      c.fillStyle = '#e8e2d4';
      c.beginPath();
      c.moveTo(1.6, -15.2);
      c.quadraticCurveTo(3.8, -9.5, 6, -15.2);
      c.quadraticCurveTo(3.8, -14.3, 1.6, -15.2);
      c.fill();
      c.strokeStyle = OL;
      c.lineWidth = 0.5;
      c.stroke();
    },
    hat: (c, pose) => {
      const { x, y, r } = HEAD;
      kabuto('#9a8047', '#ffffff', 'none', false)(c);
      for (const [s, a] of [[-1, -0.4], [1, 0.3]]) {
        c.save();
        c.translate(x + s * 1.2, y - r - 0.5);
        c.rotate(a + pose.step * 0.05);
        c.beginPath();
        c.ellipse(0, -5, 1.6, 5.5, 0, 0, Math.PI * 2);
        fillToon(c, '#fbf7ee', -1.6, -10, 1.6, 0, { lw: 0.7 });
        c.restore();
      }
    },
    weapon: (c, h, pose) => {
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? -0.9 : -0.3);
      c.beginPath();
      c.moveTo(0, 0);
      c.arc(0, 0, 7, -2.3, -0.8);
      c.closePath();
      fillToon(c, '#fbf7ee', -5, -7, 5, 0, { lw: 0.8 });
      c.strokeStyle = 'rgba(0,0,0,0.25)';
      c.lineWidth = 0.4;
      for (let k = 0; k < 5; k++) {
        const a = -2.2 + k * 0.33;
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(Math.cos(a) * 6.5, Math.sin(a) * 6.5);
        c.stroke();
      }
      c.restore();
    },
  },
  // 강감찬: 보라 전포 + 은빛 흉갑 + 별 장식 투구 + 환도
  gang: {
    body: '#5b4a92', sleeve: '#6a58a4', boots: '#1d1c1a',
    chest: (c) => {
      rrect(c, -4.3, -12.6, 8.8, 6.2, 2);
      fillToon(c, '#aeb6c2', -4, -12, 4, -6, { lw: 0.8, hi: 0.4 });
      c.fillStyle = '#f0c75e';
      star(c, 0.1, -9.5, 1.6);
      c.fill();
      c.fillStyle = '#2c2440';
      c.fillRect(-5.8, -5.1, 11.6, 1.2);
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1.4, -16.9);
      c.quadraticCurveTo(3.7, -17.6, 6, -16.9);
      c.quadraticCurveTo(3.7, -16.3, 1.4, -16.9);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      kabuto('#8f97a6', '#f0c75e', 'none', true)(c);
      c.fillStyle = '#f0c75e';
      star(c, x, y - r - 2.4, 2.6);
      c.fill();
      c.strokeStyle = OL;
      c.lineWidth = 0.6;
      c.stroke();
    },
    weapon: (c, h, pose) => sword(c, h, pose, 12),
  },
  // 권율: 갈색 갑옷 + 창 + 둥근 방패
  gwon: {
    body: '#7a5230', sleeve: '#8a6040', boots: '#2c2620', bodyW: 1.08,
    chest: (c) => {
      c.strokeStyle = 'rgba(40,20,10,0.5)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 3; r++) {
        c.beginPath();
        c.moveTo(-5, -11.8 + r * 2.6);
        c.lineTo(5, -11.8 + r * 2.6);
        c.stroke();
      }
      c.fillStyle = '#e6d3a3';
      c.fillRect(-6, -5.2, 12, 1.2);
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1.2, -16.9);
      c.quadraticCurveTo(3.7, -17.7, 6, -16.9);
      c.quadraticCurveTo(3.7, -16.2, 1.2, -16.9);
      c.fill();
      c.beginPath();
      c.moveTo(2.3, -14.5);
      c.quadraticCurveTo(3.7, -12, 5, -14.5);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      kabuto('#3a2e22', PAL.gold, 'none', true)(c);
      sphere(c, x, y - r - 1.8, 1.9, '#c0392b', { lw: 0.6 });
    },
    backHand: (c, h) => {
      sphere(c, h.x - 0.5, h.y - 1, 5.2, '#8a5a33', { lw: 1, glossA: 0.3 });
      c.strokeStyle = PAL.gold;
      c.lineWidth = 0.8;
      c.beginPath();
      c.arc(h.x - 0.5, h.y - 1, 3.6, 0, Math.PI * 2);
      c.stroke();
      sphere(c, h.x - 0.5, h.y - 1, 1.3, '#cfd4d9', { lw: 0.6, gloss: false });
    },
    weapon: (c, h, pose) => spear(c, h, pose, 22),
  },
  // 곽재우: 붉은 옷(홍의) + 넓은 갓 + 활
  gwak: {
    body: '#d8392a', sleeve: '#d8392a', boots: '#1d1c1a', longRobe: true, flare: 1.1,
    backItem: (c, pose) => {
      c.beginPath();
      c.moveTo(-4, -13);
      c.quadraticCurveTo(-12 - pose.step * 2, -5, -9, 0);
      c.lineTo(-2, -2.5);
      c.closePath();
      fillToon(c, '#b82d20', -12, -13, -2, 0);
    },
    chest: (c) => {
      c.fillStyle = '#1d1c1a';
      c.fillRect(-6.2, -5.3, 12.4, 1.3);
      c.strokeStyle = 'rgba(0,0,0,0.25)';
      c.lineWidth = 0.6;
      c.beginPath();
      c.moveTo(-1, -13);
      c.lineTo(1.4, -5);
      c.stroke();
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1.4, -16.9);
      c.quadraticCurveTo(3.7, -17.6, 6, -16.9);
      c.quadraticCurveTo(3.7, -16.3, 1.4, -16.9);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      // 갓: 반투명 넓은 챙 + 원통 모자
      c.fillStyle = 'rgba(25,22,20,0.82)';
      c.beginPath();
      c.ellipse(x, y - 3.2, r + 5, 2.2, 0, 0, Math.PI * 2);
      c.fill();
      c.strokeStyle = OL;
      c.lineWidth = 0.8;
      c.stroke();
      c.beginPath();
      c.rect(x - 3.4, y - r - 3.6, 6.8, r + 0.6);
      fillToon(c, '#26221f', x - 3.4, y - r - 4, x + 3.4, y - 3, { hi: 0.35 });
      gloss(c, x - 1.6, y - r - 1.6, 1.2, 2.2, 0.3);
      c.strokeStyle = '#f0c75e';
      c.lineWidth = 0.5;
      c.beginPath();
      c.moveTo(x + 5, y - 2.8);
      c.quadraticCurveTo(x + 4, y + 3, x + 2.5, y + 5);
      c.stroke();
    },
    weapon: (c, h, pose) => bow(c, h, pose),
  },
  // 안중근: 검은 외투 + 흰 셔츠와 붉은 넥타이 + 챙 달린 모자 + 짙은 콧수염 + 권총
  ahn: {
    body: '#2e2e36', sleeve: '#2a2a31', boots: '#141312', mood: 'calm', hairBack: '#1d1a17',
    backItem: (c, pose) => {
      // 외투 자락
      c.beginPath();
      c.moveTo(-4.4, -8);
      c.quadraticCurveTo(-7 - pose.step, -2, -6, 0.4);
      c.lineTo(-2, -1.5);
      c.closePath();
      fillToon(c, '#26262c', -7, -8, -2, 0);
    },
    chest: (c) => {
      c.beginPath();
      c.moveTo(-1.8, -13.3);
      c.lineTo(0.3, -8.8);
      c.lineTo(2.4, -13.3);
      c.closePath();
      c.fillStyle = '#f4f1e8';
      c.fill();
      c.fillStyle = '#9a2a20';
      c.beginPath();
      c.moveTo(0.3, -12.6);
      c.lineTo(-0.6, -9.8);
      c.lineTo(0.3, -8.4);
      c.lineTo(1.2, -9.8);
      c.closePath();
      c.fill();
      // 외투 옷깃과 단추
      c.strokeStyle = 'rgba(0,0,0,0.5)';
      c.lineWidth = 0.6;
      c.beginPath();
      c.moveTo(-1.8, -13.3);
      c.lineTo(-0.6, -5.2);
      c.moveTo(2.4, -13.3);
      c.lineTo(1.4, -5.2);
      c.stroke();
      c.fillStyle = '#c8a24a';
      for (const yy of [-7.6, -5.6]) {
        c.beginPath();
        c.arc(2.4, yy, 0.55, 0, Math.PI * 2);
        c.fill();
      }
    },
    beard: (c) => {
      // 짙은 팔자 콧수염
      c.fillStyle = '#1d1a17';
      c.beginPath();
      c.moveTo(3.6, -16.9);
      c.quadraticCurveTo(1.2, -17.8, -0.4, -16.2);
      c.quadraticCurveTo(1.4, -16.4, 3.6, -16.2);
      c.moveTo(3.8, -16.9);
      c.quadraticCurveTo(6.4, -17.8, 7.8, -16.2);
      c.quadraticCurveTo(6, -16.4, 3.8, -16.2);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      // 챙 모자
      c.beginPath();
      c.ellipse(x + 1.6, y - 3.4, r + 3.4, 1.8, 0, 0, Math.PI * 2);
      fillToon(c, '#23232a', x - r, y - 5, x + r + 4, y - 2, { lw: 0.8 });
      c.beginPath();
      c.arc(x, y - 3.4, r - 0.4, Math.PI, Math.PI * 2);
      c.closePath();
      fillToon(c, '#2c2c34', x - r, y - r - 3, x + r * 0.5, y - 3, { hi: 0.4 });
      gloss(c, x - 2.6, y - r + 0.4, 2.4, 0.9, 0.35);
      c.fillStyle = '#9a2a20';
      c.fillRect(x - r + 0.8, y - 5.4, 2 * r - 1.6, 1.3);
    },
    weapon: (c, h, pose) => {
      // 권총
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? -0.12 : 0.9);
      rrect(c, -0.9, -1.2, 2.2, 4, 0.6);
      fillToon(c, '#4a3322', -1, -1, 1.4, 3, { lw: 0.7 });
      rrect(c, -1, -2.4, 7.5, 2, 0.5);
      fillToon(c, '#56585e', -1, -2.4, 6.5, -0.4, { lw: 0.7, hi: 0.5 });
      c.restore();
      if (pose.atk) glow(c, h.x + 7, h.y - 2.4, 6, '#ffcf6b', 0.95);
    },
  },
  // 단군왕검: 흰 도포 + 긴 흰 수염 + 금빛 머리띠와 상투 + 청동거울 + 비파형 동검
  dangun: {
    body: '#efe9da', sleeve: '#e6dfcc', boots: '#6b5a4a', longRobe: true, flare: 1.18, mood: 'calm', hairBack: '#e8e4da',
    backItem: (c, pose) => {
      // 뒤로 날리는 초록 띠
      c.beginPath();
      c.moveTo(-3, -12.6);
      c.quadraticCurveTo(-9 - pose.step * 1.5, -9, -10.5, -3);
      c.lineTo(-8.6, -2.6);
      c.quadraticCurveTo(-7.4, -8, -2.2, -10.6);
      c.closePath();
      fillToon(c, '#3a8a5a', -10, -12, -2, -3, { lw: 0.7 });
    },
    chest: (c) => {
      c.fillStyle = '#3a8a5a';
      c.fillRect(-6, -5.6, 12, 1.5);
      // 청동거울(천부인 중 하나)
      sphere(c, 0.2, -9.8, 2.5, '#6aa38a', { lw: 0.7 });
      c.strokeStyle = '#c8a24a';
      c.lineWidth = 0.6;
      c.beginPath();
      c.arc(0.2, -9.8, 1.5, 0, Math.PI * 2);
      c.stroke();
    },
    beard: (c) => {
      // 길게 늘어진 흰 수염
      c.fillStyle = '#f7f4ec';
      c.beginPath();
      c.moveTo(0.4, -15.8);
      c.quadraticCurveTo(1.2, -9.4, 3.8, -6.8);
      c.quadraticCurveTo(6.4, -9.4, 7.2, -15.8);
      c.quadraticCurveTo(3.8, -14.4, 0.4, -15.8);
      c.fill();
      c.strokeStyle = OL;
      c.lineWidth = 0.55;
      c.stroke();
      c.beginPath();
      c.moveTo(1.8, -17);
      c.quadraticCurveTo(3.8, -17.6, 6, -17);
      c.quadraticCurveTo(3.8, -16.2, 1.8, -17);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      // 흰 머리 위 상투 + 금빛 머리띠와 잎 장식
      c.beginPath();
      c.arc(x, y - 2.4, r + 0.3, Math.PI, Math.PI * 2);
      c.quadraticCurveTo(x, y - 1.6, x - r - 0.3, y - 2.4);
      c.closePath();
      fillToon(c, '#efece4', x - r, y - r - 2, x + r * 0.5, y - 2, { hi: 0.3 });
      sphere(c, x - 0.6, y - r - 2.4, 2.6, '#efece4', { lw: 0.8 });
      rrect(c, x - r - 0.6, y - 4, 2 * r + 1.2, 1.6, 0.6);
      fillToon(c, '#d9a300', x - r, y - 4, x + r, y - 2.4, { lw: 0.6, hi: 0.5 });
      for (const dx of [-3.4, 0, 3.4]) {
        c.beginPath();
        c.moveTo(x + dx, y - 4);
        c.quadraticCurveTo(x + dx - 1.4, y - 7, x + dx, y - 8.4);
        c.quadraticCurveTo(x + dx + 1.4, y - 7, x + dx, y - 4);
        fillToon(c, '#f0c75e', x + dx - 1.4, y - 8.4, x + dx + 1.4, y - 4, { lw: 0.5 });
      }
    },
    weapon: (c, h, pose) => {
      // 비파형 동검 (청동빛)
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? -0.2 : -1.2);
      c.beginPath();
      c.moveTo(0.5, 0);
      c.quadraticCurveTo(4, -2.4, 6, -1.2);
      c.quadraticCurveTo(8, -2.2, 12, 0);
      c.quadraticCurveTo(8, 2.2, 6, 1.2);
      c.quadraticCurveTo(4, 2.4, 0.5, 0);
      c.closePath();
      fillToon(c, '#6fae93', 0, -2.4, 12, 2.4, { lw: 0.8, hi: 0.5 });
      c.fillStyle = '#c8a24a';
      c.fillRect(-1.2, -1.4, 1.8, 2.8);
      c.restore();
      if (pose.atk) glow(c, h.x + 8, h.y - 6, 9, '#bfe6ff', 0.9);
    },
  },
};

// ───────────────────────── 왜군 ─────────────────────────
const ENEMY_LOOK = {
  ashigaru: {
    body: '#4b5c7c', sleeve: '#3d4c68', boots: '#2c2620', mood: 'angry',
    chest: (c) => {
      c.fillStyle = '#2c3547';
      c.fillRect(-5.8, -5.2, 11.6, 1.3);
      sphere(c, 0, -9.5, 1.3, '#d9a300', { lw: 0.5, gloss: false });
    },
    hat: jingasa('#2b2a28'),
    weapon: (c, h, pose) => spear(c, h, pose, 21),
  },
  teppo: {
    body: '#6b5238', sleeve: '#5a4430', boots: '#2c2620', mood: 'angry',
    chest: (c) => {
      c.fillStyle = '#2c2620';
      c.fillRect(-5.8, -5.2, 11.6, 1.3);
      c.strokeStyle = '#2c2620';
      c.lineWidth = 0.8;
      c.beginPath();
      c.moveTo(-4, -13);
      c.lineTo(4.5, -5.5);
      c.stroke();
    },
    hat: jingasa('#4a3624'),
    weapon: (c, h, pose) => {
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? -0.05 : -0.35);
      rrect(c, -5, -1, 9, 2.2, 0.8);
      fillToon(c, '#7a4e2a', -5, -1, 4, 1.2, { lw: 0.8 });
      rrect(c, 3, -0.8, 9, 1.4, 0.5);
      fillToon(c, '#3a3a3e', 3, -0.8, 12, 0.6, { lw: 0.7, hi: 0.5 });
      c.restore();
      if (pose.atk) glow(c, h.x + 12, h.y - 1, 5, '#ffcf6b', 0.9);
    },
  },
  scout: {
    body: '#9a8465', sleeve: '#8a7658', boots: '#3a2e22', mood: 'angry', bodyW: 0.92,
    hat: (c) => {
      const { x, y, r } = HEAD;
      c.fillStyle = '#231a14';
      c.beginPath();
      c.arc(x, y - 0.8, r + 0.2, Math.PI * 1.05, Math.PI * 1.95);
      c.fill();
      rrect(c, x - r - 0.4, y - 4.2, 2 * r + 0.8, 2, 0.8);
      fillToon(c, '#f4efe4', x - r, y - 4.2, x + r, y - 2.2, { lw: 0.7 });
      c.beginPath();
      c.moveTo(x - r, y - 3.4);
      c.lineTo(x - r - 4.5, y - 1.5);
      c.lineTo(x - r - 3.8, y - 0.2);
      c.closePath();
      fillToon(c, '#f4efe4', x - r - 4, y - 3, x - r, y, { lw: 0.6 });
    },
    weapon: (c, h, pose) => sword(c, h, pose, 7),
  },
  samurai: {
    body: '#9a2c22', sleeve: '#1d1c1a', boots: '#1d1c1a', mood: 'angry', bodyW: 1.08,
    backItem: flagPole('#f4f1e8', 17, (c, x, y) => sphere(c, x, y, 1.5, '#b8322a', { lw: 0.5, gloss: false })),
    chest: (c) => {
      c.strokeStyle = 'rgba(0,0,0,0.45)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
      c.strokeStyle = PAL.gold;
      c.lineWidth = 0.5;
      c.beginPath();
      c.moveTo(-3, -12.6);
      c.lineTo(-3, -4);
      c.moveTo(3, -12.6);
      c.lineTo(3, -4);
      c.stroke();
      // 소데(어깨 갑옷)
      for (const s of [-1, 1]) {
        rrect(c, s > 0 ? 3.2 : -7.4, -13.4, 4.2, 4.2, 0.8);
        fillToon(c, '#7a2019', -7, -13, 7, -9, { lw: 0.8 });
      }
    },
    hat: kabuto('#1f1d1c', PAL.gold, 'v', true),
    weapon: (c, h, pose) => sword(c, h, pose, 13),
  },
  ninja: {
    body: '#2c2540', sleeve: '#231d33', boots: '#1d1a26', mood: 'angry', skin: '#2c2540', bodyW: 0.92,
    mask: (c, x, y, r) => {
      c.fillStyle = SKIN;
      rrect(c, x - 1.2, y - 3.2, r + 0.8, 3.4, 1.4);
      c.fill();
    },
    hat: (c, pose) => {
      const { x, y, r } = HEAD;
      c.beginPath();
      c.moveTo(x - r + 0.5, y - 2);
      c.quadraticCurveTo(x - r - 5, y - 3 + pose.step * 1.2, x - r - 7, y + 0.5);
      c.lineTo(x - r - 5.5, y + 1.5);
      c.quadraticCurveTo(x - r - 3, y, x - r + 0.8, y + 0.2);
      c.closePath();
      fillToon(c, '#7a3fb0', x - r - 7, y - 3, x - r, y + 1, { lw: 0.7 });
    },
    weapon: (c, h, pose) => {
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? 0.2 : -0.8);
      c.beginPath();
      c.moveTo(0, -0.8);
      c.lineTo(6, 0);
      c.lineTo(0, 0.8);
      c.closePath();
      fillToon(c, '#c9ced4', 0, -1, 6, 1, { lw: 0.6 });
      c.restore();
    },
  },
  onmyoji: {
    body: '#f2eee4', sleeve: '#e6e0d2', boots: '#6b6b6b', longRobe: true, flare: 1.25, mood: 'angry',
    chest: (c) => {
      c.strokeStyle = '#b8b0a0';
      c.lineWidth = 0.6;
      c.beginPath();
      c.moveTo(0, -13);
      c.lineTo(0, -3);
      c.stroke();
      sphere(c, -2.5, -11, 0.9, '#c0392b', { lw: 0.4, gloss: false });
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      c.beginPath();
      c.moveTo(x - 3.8, y - r + 1.6);
      c.quadraticCurveTo(x - 3, y - r - 9, x + 1.5, y - r - 10);
      c.quadraticCurveTo(x + 4.5, y - r - 5, x + 3.8, y - r + 1.6);
      c.closePath();
      fillToon(c, '#23201d', x - 4, y - r - 10, x + 4, y - r + 2, { hi: 0.35 });
      gloss(c, x - 1.4, y - r - 4, 0.9, 2.6, 0.3);
    },
    weapon: (c, h, pose) => {
      rrect(c, h.x - 0.4, h.y - 5.5, 3.2, 5.2, 0.4);
      fillToon(c, '#f7efd2', h.x, h.y - 5.5, h.x + 3, h.y, { lw: 0.6 });
      c.fillStyle = '#c0392b';
      c.fillRect(h.x + 0.6, h.y - 4.6, 1, 3.4);
      if (pose.atk) glow(c, h.x + 1.2, h.y - 3, 6, '#8fe3a0', 0.8);
    },
  },
  drum: {
    body: '#7a4028', sleeve: '#6a3620', boots: '#2c2620', mood: 'angry', bodyW: 1.05,
    backItem: (c) => {
      c.save();
      c.translate(-6, -11);
      c.beginPath();
      c.ellipse(0, 0, 5.2, 6.4, 0, 0, Math.PI * 2);
      fillToon(c, '#8a5a33', -5, -6, 5, 6);
      c.beginPath();
      c.ellipse(-1, 0, 3.6, 5, 0, 0, Math.PI * 2);
      fillToon(c, '#efe4cc', -4, -5, 3, 5, { lw: 0.7 });
      sphere(c, -1, 0, 1.6, '#c0392b', { lw: 0.5, gloss: false });
      c.restore();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      c.fillStyle = '#231a14';
      c.beginPath();
      c.arc(x, y - 0.8, r + 0.2, Math.PI * 1.05, Math.PI * 1.95);
      c.fill();
      rrect(c, x - r - 0.3, y - 4.4, 2 * r + 0.6, 2, 0.8);
      fillToon(c, '#f4f1e8', x - r, y - 4.4, x + r, y - 2.4, { lw: 0.7 });
    },
    weapon: (c, h, pose) => {
      c.strokeStyle = OL;
      c.lineWidth = 1.8;
      c.lineCap = 'round';
      c.beginPath();
      c.moveTo(h.x, h.y);
      c.lineTo(h.x + (pose.atk ? 5 : 2), h.y - 6);
      c.stroke();
      c.strokeStyle = '#8a5a33';
      c.lineWidth = 0.9;
      c.stroke();
      sphere(c, h.x + (pose.atk ? 5 : 2), h.y - 6, 1.1, '#efe4cc', { lw: 0.5, gloss: false });
    },
  },
  armored: {
    body: '#3c4049', sleeve: '#2d3037', boots: '#1d1c1a', mood: 'angry', bodyW: 1.22, flare: 1.08,
    mask: (c, x, y) => {
      c.beginPath();
      c.moveTo(x - 2, y + 1.5);
      c.quadraticCurveTo(x + 3, y + 7.5, x + 7.2, y + 1.3);
      c.lineTo(x + 7, y + 3.8);
      c.quadraticCurveTo(x + 3, y + 8.5, x - 2.2, y + 3.4);
      c.closePath();
      fillToon(c, '#23252b', x - 2, y + 1, x + 7, y + 8, { lw: 0.7 });
    },
    chest: (c) => {
      c.strokeStyle = 'rgba(255,255,255,0.18)';
      c.lineWidth = 0.7;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5.5, -12 + r * 2.2);
        c.lineTo(5.6, -12 + r * 2.2);
        c.stroke();
      }
      for (const s of [-1, 1]) {
        rrect(c, s > 0 ? 3.4 : -8.4, -14, 5, 5, 1);
        fillToon(c, '#2d3037', -8, -14, 8, -9, { lw: 0.8 });
      }
    },
    hat: kabuto('#2a2c31', '#c9c1a8', 'horns', true),
    weapon: (c, h, pose) => {
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? 0.4 : -1.2);
      rrect(c, -1, -1.6, 13, 3.2, 1.5);
      fillToon(c, '#4a3322', -1, -1.6, 12, 1.6, { lw: 0.8 });
      c.fillStyle = '#9aa0a6';
      for (let k = 4; k < 12; k += 2.2) {
        c.beginPath();
        c.arc(k, -1.6, 0.6, 0, Math.PI * 2);
        c.arc(k + 1, 1.6, 0.6, 0, Math.PI * 2);
        c.fill();
      }
      c.restore();
    },
  },
  // 적장
  konishi: {
    body: '#5a2f7a', sleeve: '#3e1f56', boots: '#1d1c1a', mood: 'angry', bodyW: 1.12,
    backItem: flagPole('#f4f1e8', 20, (c, x, y) => {
      c.strokeStyle = '#5a2f7a';
      c.lineWidth = 1.1;
      c.beginPath();
      c.arc(x, y, 1.8, 0, Math.PI * 2);
      c.stroke();
    }),
    chest: (c) => {
      c.strokeStyle = PAL.gold;
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1, -16.6);
      c.quadraticCurveTo(0, -18.4, -1.2, -16.2);
      c.moveTo(6, -16.6);
      c.quadraticCurveTo(7.8, -18.2, 8.2, -15.6);
      c.fill();
    },
    hat: kabuto('#2a1c36', PAL.gold, 'moon', true),
    weapon: (c, h, pose) => sword(c, h, pose, 14),
  },
  kato: {
    body: '#22201e', sleeve: '#1a1817', boots: '#1d1c1a', mood: 'angry', bodyW: 1.15,
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(0.6, -15.2);
      c.quadraticCurveTo(3.7, -9, 7, -15.2);
      c.quadraticCurveTo(3.7, -13.8, 0.6, -15.2);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      kabuto('#2a2826', PAL.gold, 'none', true)(c);
      // 가토의 긴 에보시 투구
      c.beginPath();
      c.moveTo(x - 4.2, y - r + 1);
      c.lineTo(x - 2.6, y - r - 14);
      c.quadraticCurveTo(x + 1, y - r - 16, x + 4, y - r - 13.4);
      c.lineTo(x + 4.4, y - r + 1);
      c.closePath();
      fillToon(c, '#efeae0', x - 4, y - r - 15, x + 4, y - r + 1, { hi: 0.2 });
      sphere(c, x + 0.4, y - r - 6, 2.2, '#c0392b', { lw: 0.6, gloss: false });
    },
    weapon: (c, h, pose) => {
      spear(c, h, pose, 24);
      const a = pose.atk ? -0.25 : -1.05;
      const ex = h.x + Math.cos(a) * 16.8;
      const ey = h.y + Math.sin(a) * 16.8;
      c.save();
      c.translate(ex, ey);
      c.rotate(a + Math.PI / 2);
      rrect(c, -3.2, -0.6, 6.4, 1.2, 0.5);
      fillToon(c, '#dfe5ea', -3, -0.6, 3, 0.6, { lw: 0.6 });
      c.restore();
    },
  },
  wakizaka: {
    body: '#1f3f66', sleeve: '#16304f', boots: '#1d1c1a', mood: 'angry', bodyW: 1.1,
    backItem: flagPole('#2f7fae', 19, (c, x, y) => {
      c.fillStyle = '#f4f1e8';
      c.fillRect(x - 0.4, y - 2, 0.8, 4);
      c.fillRect(x - 2, y - 0.4, 4, 0.8);
    }),
    chest: (c) => {
      c.strokeStyle = 'rgba(200,220,240,0.5)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.fillRect(1.4, -17.1, 4.6, 0.9);
    },
    hat: kabuto('#1c2a3c', '#dfe5ea', 'v', true),
    weapon: (c, h, pose) => {
      // 군배(지휘 부채)
      c.save();
      c.translate(h.x, h.y);
      c.rotate(pose.atk ? -0.4 : -0.9);
      c.fillStyle = OL;
      c.fillRect(-0.4, -1, 0.8, -5);
      c.beginPath();
      c.ellipse(0, -8, 3.4, 4, 0, 0, Math.PI * 2);
      fillToon(c, '#1d1c1a', -3, -12, 3, -4, { lw: 0.7 });
      sphere(c, 0, -8, 1.6, '#c0392b', { lw: 0.4, gloss: false });
      c.restore();
    },
  },
  ukita: {
    body: '#b08a20', sleeve: '#8a6a14', boots: '#1d1c1a', mood: 'angry', bodyW: 1.15,
    backItem: (c, pose) => {
      c.beginPath();
      c.moveTo(-4, -13);
      c.quadraticCurveTo(-12 - pose.step * 1.5, -6, -9, -0.6);
      c.lineTo(-1.5, -2.5);
      c.closePath();
      fillToon(c, '#a3241c', -12, -13, -1, 0);
    },
    chest: (c) => {
      c.strokeStyle = 'rgba(80,50,0,0.6)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.fillRect(1.6, -17.1, 4.2, 0.9);
    },
    hat: kabuto('#6a5010', '#fff1b0', 'v', true),
    weapon: (c, h, pose) => sword(c, h, pose, 14, '#f7f0d0'),
  },
  // 이시다 미쓰나리: 책사. 보라 전포 + 초승달 투구 + 군배 부채 + 大一大万大吉 깃발
  ishida: {
    body: '#3a2458', sleeve: '#2c1a44', boots: '#1d1a26', mood: 'angry', bodyW: 1.14,
    backItem: flagPole('#f4f1e8', 20, (c, x, y) => {
      c.fillStyle = '#1d1c1a';
      c.fillRect(x - 2, y - 2.4, 4, 0.8);
      c.fillRect(x - 0.4, y - 2.4, 0.8, 4.8);
      c.fillRect(x - 2, y + 1.2, 4, 0.8);
    }),
    chest: (c) => {
      c.strokeStyle = 'rgba(231,184,58,0.6)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.fillRect(1.6, -17.1, 4.2, 0.8);
    },
    hat: kabuto('#2a1c36', '#e7b83a', 'moon', true),
    weapon: (c, h, pose) => gunbai(c, h, pose, '#3a2458'),
  },
  // 소 요시토시: 대마도주. 청록 전포 + 마름모 깃발
  so: {
    body: '#2f5a4a', sleeve: '#244a3c', boots: '#1d1c1a', mood: 'angry', bodyW: 1.08,
    backItem: flagPole('#f4f1e8', 18, (c, x, y) => {
      c.fillStyle = '#2f5a4a';
      for (const [dx, dy] of [[0, -1.6], [1.6, 0], [0, 1.6], [-1.6, 0]]) {
        c.beginPath();
        c.moveTo(x + dx, y + dy - 0.9);
        c.lineTo(x + dx + 0.9, y + dy);
        c.lineTo(x + dx, y + dy + 0.9);
        c.lineTo(x + dx - 0.9, y + dy);
        c.fill();
      }
    }),
    chest: (c) => {
      c.strokeStyle = 'rgba(0,0,0,0.4)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 3; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.6);
        c.lineTo(5.2, -12 + r * 2.6);
        c.stroke();
      }
    },
    hat: kabuto('#233a30', '#dfe5ea', 'moon', true),
    weapon: (c, h, pose) => sword(c, h, pose, 12),
  },
  // 구로다 나가마사: 검은 갑옷 + 일의 계곡 투구(높은 판)
  kuroda: {
    body: '#2a2a2e', sleeve: '#1f1f22', boots: '#1d1c1a', mood: 'angry', bodyW: 1.12,
    chest: (c) => {
      c.strokeStyle = 'rgba(231,184,58,0.55)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
      sphere(c, 0, -8.8, 1.6, '#f4f1e8', { lw: 0.5, gloss: false });
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.fillRect(1.4, -17.1, 4.6, 0.9);
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      kabuto('#26262a', PAL.gold, 'none', true)(c);
      c.beginPath();
      c.moveTo(x - 1.2, y - r - 1);
      c.lineTo(x - 5, y - r - 13);
      c.lineTo(x + 3.2, y - r - 14);
      c.lineTo(x + 2.2, y - r - 1);
      c.closePath();
      fillToon(c, '#3a3a40', x - 5, y - r - 14, x + 3, y - r, { hi: 0.4 });
    },
    weapon: (c, h, pose) => sword(c, h, pose, 13),
  },
  // 도도 다카토라: 수군. 푸른 갑옷 + 긴 뿔 투구 + 창
  todo: {
    body: '#2f5a7a', sleeve: '#244a66', boots: '#1d1c1a', mood: 'angry', bodyW: 1.1,
    chest: (c) => {
      c.strokeStyle = 'rgba(220,235,250,0.45)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.fillRect(1.4, -17.1, 4.6, 0.9);
    },
    hat: kabuto('#1c2e40', '#e8e0c8', 'horns', true),
    weapon: (c, h, pose) => spear(c, h, pose, 23),
  },
  // 구키 요시타카: 철갑선 수군 대장. 강철빛 갑옷 + 은빛 투구
  kuki: {
    body: '#48546a', sleeve: '#3a4458', boots: '#1d1c1a', mood: 'angry', bodyW: 1.16,
    chest: (c) => {
      rrect(c, -4.6, -12.8, 9.4, 6.6, 1.6);
      fillToon(c, '#8f9aab', -4.6, -12.8, 4.8, -6.2, { lw: 0.8, hi: 0.4 });
      c.fillStyle = '#2a3140';
      for (const [px, py] of [[-2.6, -11], [2.6, -11], [-2.6, -8], [2.6, -8]]) {
        c.beginPath();
        c.arc(px, py, 0.6, 0, Math.PI * 2);
        c.fill();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.beginPath();
      c.moveTo(1, -15.2);
      c.quadraticCurveTo(3.7, -11, 6.8, -15.2);
      c.quadraticCurveTo(3.7, -14, 1, -15.2);
      c.fill();
    },
    hat: kabuto('#5a6478', '#dfe5ea', 'v', true),
    weapon: (c, h, pose) => gunbai(c, h, pose, '#48546a'),
  },
  // 구루시마 미치후사: 명량의 선봉. 붉은 갈색 + 뿔 투구 + 칼
  kurushima: {
    body: '#8a3a2a', sleeve: '#6e2c20', boots: '#1d1c1a', mood: 'angry', bodyW: 1.1,
    backItem: flagPole('#f4f1e8', 18, (c, x, y) => {
      c.strokeStyle = '#8a3a2a';
      c.lineWidth = 1;
      c.beginPath();
      c.arc(x, y, 1.9, 0, Math.PI * 2);
      c.moveTo(x - 1.9, y);
      c.lineTo(x + 1.9, y);
      c.stroke();
    }),
    chest: (c) => {
      c.strokeStyle = 'rgba(0,0,0,0.4)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
    },
    beard: (c) => {
      c.fillStyle = '#231a14';
      c.fillRect(1.4, -17.1, 4.6, 0.9);
    },
    hat: kabuto('#4a1e16', PAL.gold, 'horns', true),
    weapon: (c, h, pose) => sword(c, h, pose, 13),
  },
  // 시마즈 요시히로: 귀신 시마즈. 검은 갑옷 + 가슴의 원 안 십자 문장 + 금빛 투구
  shimazu: {
    body: '#1d1c1a', sleeve: '#141312', boots: '#141312', mood: 'angry', bodyW: 1.18,
    backItem: flagPole('#f4f1e8', 21, (c, x, y) => {
      c.strokeStyle = '#1d1c1a';
      c.lineWidth = 0.9;
      c.beginPath();
      c.arc(x, y, 2, 0, Math.PI * 2);
      c.moveTo(x - 2, y);
      c.lineTo(x + 2, y);
      c.moveTo(x, y - 2);
      c.lineTo(x, y + 2);
      c.stroke();
    }),
    chest: (c) => {
      c.strokeStyle = '#f4f1e8';
      c.lineWidth = 0.9;
      c.beginPath();
      c.arc(0.2, -9.4, 2.4, 0, Math.PI * 2);
      c.moveTo(-2.2, -9.4);
      c.lineTo(2.6, -9.4);
      c.moveTo(0.2, -11.8);
      c.lineTo(0.2, -7);
      c.stroke();
    },
    beard: (c) => {
      c.fillStyle = '#e8e2d4';
      c.beginPath();
      c.moveTo(0.8, -15.2);
      c.quadraticCurveTo(3.7, -9.5, 6.8, -15.2);
      c.quadraticCurveTo(3.7, -14, 0.8, -15.2);
      c.fill();
      c.strokeStyle = OL;
      c.lineWidth = 0.5;
      c.stroke();
    },
    hat: kabuto('#1a1918', '#e7b83a', 'v', true),
    weapon: (c, h, pose) => sword(c, h, pose, 16, '#f2f4f6'),
  },
  // 도요토미 히데요시: 금빛 갑옷 + 햇살 투구 + 천성표주박 깃발 + 붉은 진바오리
  hideyoshi: {
    body: '#c9a227', sleeve: '#a8841a', boots: '#3a2410', mood: 'angry', bodyW: 1.22, skin: '#e8b98c', eyeSize: 1.35,
    backItem: (c, pose) => {
      // 붉은 진바오리(망토)
      c.beginPath();
      c.moveTo(-4, -13);
      c.quadraticCurveTo(-13 - pose.step * 1.5, -6, -10, -0.4);
      c.lineTo(-1.5, -2.5);
      c.closePath();
      fillToon(c, '#b3241c', -13, -13, -1, 0);
      // 천성표주박(금빛 표주박 깃대)
      c.strokeStyle = OL;
      c.lineWidth = 1.4;
      c.beginPath();
      c.moveTo(-5, -8);
      c.lineTo(-5, -33);
      c.stroke();
      sphere(c, -5, -35, 2.6, '#f2c53a', { lw: 0.7 });
      sphere(c, -5, -30.6, 3.5, '#f2c53a', { lw: 0.7 });
      sphere(c, -5, -25.8, 2.3, '#f2c53a', { lw: 0.7 });
      c.fillStyle = '#b3241c';
      c.fillRect(-5.6, -33.4, 1.2, 1.4);
    },
    chest: (c) => {
      c.strokeStyle = 'rgba(90,50,0,0.6)';
      c.lineWidth = 0.6;
      for (let r = 0; r < 4; r++) {
        c.beginPath();
        c.moveTo(-5, -12 + r * 2.1);
        c.lineTo(5.2, -12 + r * 2.1);
        c.stroke();
      }
      // 오동잎 문장
      c.fillStyle = '#6a3d0a';
      for (const dx of [-1.4, 0, 1.4]) {
        c.beginPath();
        c.ellipse(0.2 + dx, -9.6 - (dx ? 0 : 0.8), 0.6, 1.4, 0, 0, Math.PI * 2);
        c.fill();
      }
    },
    beard: (c) => {
      c.fillStyle = '#3a2a1a';
      c.beginPath();
      c.moveTo(1.2, -16.4);
      c.quadraticCurveTo(0, -17.8, -1, -15.6);
      c.moveTo(6, -16.4);
      c.quadraticCurveTo(7.6, -17.8, 8, -15.4);
      c.fill();
      c.beginPath();
      c.moveTo(3, -14.2);
      c.quadraticCurveTo(3.7, -12.4, 4.4, -14.2);
      c.fill();
    },
    hat: (c) => {
      const { x, y, r } = HEAD;
      // 햇살 투구: 금빛 가시가 부챗살처럼 뻗는다
      for (let k = 0; k < 15; k++) {
        const a = Math.PI * 1.02 + (k / 14) * Math.PI * 0.96;
        c.beginPath();
        c.moveTo(x + Math.cos(a) * (r - 1), y - 1.5 + Math.sin(a) * (r - 1));
        c.lineTo(x + Math.cos(a - 0.07) * (r + 9), y - 1.5 + Math.sin(a - 0.07) * (r + 9));
        c.lineTo(x + Math.cos(a + 0.07) * (r + 9), y - 1.5 + Math.sin(a + 0.07) * (r + 9));
        c.closePath();
        fillToon(c, '#f2c53a', x - r - 9, y - r - 10, x + r + 9, y, { lw: 0.45 });
      }
      kabuto('#3a1c10', '#f2c53a', 'none', true)(c);
    },
    weapon: (c, h, pose) => {
      gunbai(c, h, pose, '#f2c53a');
      if (pose.atk) glow(c, h.x + 2, h.y - 8, 8, '#ffe08a', 0.8);
    },
  },
};

// ───────────────────────── 포즈와 스프라이트 ─────────────────────────
function poseOf(kind, frame) {
  if (kind === 'walk') {
    const ph = (frame / 6) * Math.PI * 2;
    return { step: Math.sin(ph), liftF: Math.max(0, Math.sin(ph)) * 1.3, liftB: Math.max(0, -Math.sin(ph)) * 1.3, bob: -Math.abs(Math.cos(ph)) * 0.9, atk: false, phase: frame / 6 };
  }
  if (kind === 'atk') return { step: 0.3, liftF: 0, liftB: 0, bob: -0.3, atk: true, phase: 0 };
  const b = Math.sin((frame / 4) * Math.PI * 2) * 0.35;
  return { step: 0, liftF: 0, liftB: 0, bob: b, atk: false, phase: frame / 4 };
}

function charSprite(kind, id, look, anim, frame) {
  return sprite(`${kind}:${id}:${anim}:${frame}`, SPR_W, SPR_H + 8, AX, AY + 8, (c) => rig(c, look, poseOf(anim, frame)));
}

function animFrame(moving, attacking, t) {
  if (attacking) return ['atk', 0];
  if (moving) return ['walk', Math.floor(t * 10) % 6];
  return ['idle', Math.floor(t * 3) % 4];
}

// ───────────────────────── 왜군 그리기 ─────────────────────────
const TIER_SCALE = { 1: 1.05, 2: 1.12, 3: 1.28, 4: 1.75 };

// hit: { flash 0~1 (하얗게 번쩍), sq 0~1 (맞아서 찌그러짐) } — 렌더러가 체력 변화로 계산해 넘긴다
export function drawEnemy(ctx, e, time, alpha = 1, hit = null) {
  const def = ENEMIES[e.type];
  const x = e.x * TS;
  const y = e.y * TS + 8;
  const t = time + e.id * 0.37;
  const moving = !e.blockedBy && !(e.stunT > 0);
  const flip = e.dx < -0.1;
  const sc = def.scale || TIER_SCALE[def.tier] * (e.type === 'armored' ? 1.08 : 1);
  const fl = hit ? hit.flash : 0;
  const sq = hit ? hit.sq : 0;
  ctx.save();
  ctx.globalAlpha = alpha * (e.stealth && !e.revealed ? 0.28 : 1);
  if (!e.noShadow) softShadow(ctx, x, y, 9 * sc, 3.2 * sc, 0.32);
  if (def.tier === 4 && !e.noBar) glow(ctx, x, y - 16 * sc, 24 * sc, e.type === 'hideyoshi' ? '#ffd24a' : '#c0392b', 0.18 + 0.08 * Math.sin(time * 4));
  if (e.enraged) glow(ctx, x, y - 12, 16, '#ff5a3a', 0.35);
  if (sq > 0) {
    // 발밑을 축으로 옆으로 퍼지고 뒤로 살짝 밀린다
    const back = (flip ? 1 : -1) * 2.6 * sq * (def.tier === 4 ? 0.4 : 1);
    ctx.translate(x + back, y);
    ctx.scale(1 + 0.16 * sq, 1 - 0.13 * sq);
    ctx.translate(-x, -y);
  }
  const body = () => {
    const art = enemyArt(e.type);
    if (art) drawArtUnit(ctx, art, x, y, t, moving, e.swing > 0, flip, e.type === 'ram' ? 36 : e.type === 'cavalry' ? 49 : 32 * sc);
    else if (e.type === 'cavalry') drawCavalry(ctx, x, y, t, moving, flip, sc, e.swing > 0);
    else if (e.type === 'ram') drawRam(ctx, x, y, t, moving, flip);
    else {
      const look = ENEMY_LOOK[e.type] || ENEMY_LOOK.ashigaru;
      const [anim, frame] = animFrame(moving, e.swing > 0, t * (e.type === 'scout' ? 1.5 : 1));
      blit(ctx, charSprite('e', e.type, look, anim, frame), x, y, sc, flip);
    }
  };
  body();
  if (e.iceT > 0) {
    // 얼음 덩어리
    ctx.globalAlpha *= 0.62;
    rrect(ctx, x - 11 * sc, y - 30 * sc, 22 * sc, 31 * sc, 4 * sc);
    const ig = ctx.createLinearGradient(x - 11 * sc, y - 30 * sc, x + 11 * sc, y);
    ig.addColorStop(0, '#e8f7ff');
    ig.addColorStop(1, '#7fc0ea');
    ctx.fillStyle = ig;
    ctx.fill();
    ctx.globalAlpha /= 0.62;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - 7 * sc, y - 25 * sc);
    ctx.lineTo(x - 3 * sc, y - 18 * sc);
    ctx.moveTo(x + 4 * sc, y - 27 * sc);
    ctx.lineTo(x + 7 * sc, y - 22 * sc);
    ctx.stroke();
  }
  if (fl > 0.02) {
    // 같은 그림을 더하기 합성으로 한 번 더: 윤곽 안쪽만 하얗게 번쩍
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha *= Math.min(1, fl);
    body();
    if (fl > 0.5) body();
  }
  ctx.restore();
  // 상태 표시
  const top = y - 30 * sc;
  if (e.stunT > 0) {
    ctx.fillStyle = '#ffe36b';
    for (let i = 0; i < 3; i++) {
      const a = time * 6 + (i * Math.PI * 2) / 3;
      star(ctx, x + Math.cos(a) * 7, top + 2 + Math.sin(a) * 2, 2.2);
      ctx.fill();
      ctx.strokeStyle = OL;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    }
  }
  if (e.slowT > 0 || e.auraSlow > 0.05) {
    ctx.fillStyle = 'rgba(120,190,255,0.35)';
    ctx.beginPath();
    ctx.ellipse(x, y, 10 * sc, 3.5 * sc, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  if (e.vulnT > 0) {
    ctx.strokeStyle = 'rgba(201,166,255,0.9)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(x, y - 14 * sc, 11 * sc, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (e.shield > 0) {
    ctx.fillStyle = 'rgba(140,210,255,0.14)';
    ctx.strokeStyle = 'rgba(140,210,255,0.85)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y - 15 * sc, 17 * sc, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  if (e.stealth && e.revealed) {
    ctx.strokeStyle = 'rgba(190,120,255,0.85)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.arc(x, y - 12, 12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  if (!e.noBar && def.tier !== 4 && (e.hp < e.maxHp || def.tier >= 2)) {
    const w = 18 * Math.min(sc, 1.3);
    const hy = top - 4;
    ctx.fillStyle = OL;
    ctx.fillRect(x - w / 2 - 1.2, hy - 1.2, w + 2.4, 4.8);
    ctx.fillStyle = '#5a1a14';
    ctx.fillRect(x - w / 2, hy, w, 2.4);
    ctx.fillStyle = e.hp / e.maxHp > 0.5 ? '#ff5a4a' : '#ff9a3a';
    ctx.fillRect(x - w / 2, hy, w * Math.max(0, e.hp / e.maxHp), 2.4);
    if (def.tier >= 2) {
      ctx.fillStyle = def.tier === 3 ? '#c08be6' : '#8fc3f0';
      ctx.fillRect(x - w / 2 - 4, hy - 0.8, 2.6, 4);
    }
  }
}

function drawCavalry(ctx, x, y, t, moving, flip, sc, atk) {
  const frame = moving ? Math.floor(t * 12) % 6 : 0;
  const s = sprite(`cav:${frame}:${atk ? 1 : 0}`, 52, 56, 26, 46, (c) => {
    const ph = (frame / 6) * Math.PI * 2;
    const g = Math.sin(ph) * 2.6;
    // 다리
    for (const [lx, off] of [[-7, g], [-3, -g], [5, -g], [9, g]]) {
      limb(c, lx, -8, lx + off, 0, 2.2, '#5a3620');
      boot(c, lx + off, 0.8, '#1d1c1a');
    }
    // 몸통
    c.beginPath();
    c.ellipse(1, -10, 11, 5.5, 0, 0, Math.PI * 2);
    fillToon(c, '#7a4a2a', -10, -16, 10, -4);
    // 목과 머리
    c.beginPath();
    c.moveTo(7, -13);
    c.quadraticCurveTo(12, -20, 15, -19);
    c.lineTo(16.5, -15);
    c.quadraticCurveTo(12, -13, 10, -8);
    c.closePath();
    fillToon(c, '#7a4a2a', 7, -20, 16, -8);
    c.beginPath();
    c.ellipse(15.4, -17, 3.2, 2.2, 0.5, 0, Math.PI * 2);
    fillToon(c, '#6b3f22', 12, -19, 18, -15);
    eye(c, 15.2, -18.2, 0.8, 0.3, 'none');
    // 갈기와 꼬리
    c.fillStyle = '#231a14';
    c.beginPath();
    c.moveTo(8, -14);
    c.quadraticCurveTo(11, -21, 14.5, -20.5);
    c.lineTo(12, -17);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(-9.5, -12);
    c.quadraticCurveTo(-15, -9 + g * 0.5, -13, -3);
    c.lineTo(-10, -9);
    c.closePath();
    c.fill();
    // 안장
    rrect(c, -3, -16.5, 8, 3, 1.2);
    fillToon(c, '#b8322a', -3, -16.5, 5, -13.5, { lw: 0.7 });
    // 기수 (상반신)
    c.save();
    c.translate(1, -14);
    c.scale(0.8, 0.8);
    const look = { ...ENEMY_LOOK.samurai, backItem: null };
    const pose = { step: 0, liftF: 0, liftB: 0, bob: -Math.abs(Math.cos(ph)) * 0.8, atk, phase: 0 };
    c.translate(0, pose.bob);
    torso(c, '#8a2a22', 0.95, 0.9);
    head(c, look);
    kabuto('#2b2a28', PAL.gold, 'moon', true)(c);
    const fh = atk ? { x: 8.4, y: -11.8 } : { x: 6, y: -8 };
    limb(c, 3.9, -11.6, fh.x, fh.y, 3.1, '#1d1c1a');
    hand(c, fh.x, fh.y);
    spear(c, fh, { atk }, 22);
    c.restore();
  });
  blit(ctx, s, x, y, sc * 0.95, flip);
}

function drawRam(ctx, x, y, t, moving, flip) {
  const frame = moving ? Math.floor(t * 6) % 4 : 0;
  const s = sprite(`ram:${frame}`, 56, 44, 28, 36, (c) => {
    const wob = [0, 0.5, 0, -0.5][frame];
    // 바퀴
    for (const wx of [-10, 10]) {
      c.save();
      c.translate(wx, -2.5);
      c.rotate(frame * 0.8);
      c.beginPath();
      c.arc(0, 0, 4.4, 0, Math.PI * 2);
      fillToon(c, '#4a3322', -4, -4, 4, 4);
      c.strokeStyle = '#2b1a12';
      c.lineWidth = 0.8;
      c.beginPath();
      c.moveTo(-4, 0);
      c.lineTo(4, 0);
      c.moveTo(0, -4);
      c.lineTo(0, 4);
      c.stroke();
      c.restore();
    }
    // 차체
    rrect(c, -15, -15 + wob, 30, 11, 2);
    fillToon(c, '#8a5a33', -15, -15, 15, -4);
    c.strokeStyle = 'rgba(40,20,10,0.4)';
    c.lineWidth = 0.7;
    for (let i = -10; i <= 10; i += 5) {
      c.beginPath();
      c.moveTo(i, -14 + wob);
      c.lineTo(i, -5 + wob);
      c.stroke();
    }
    // 지붕
    c.beginPath();
    c.moveTo(-17, -14 + wob);
    c.lineTo(-4, -25 + wob);
    c.lineTo(4, -25 + wob);
    c.lineTo(17, -14 + wob);
    c.closePath();
    fillToon(c, '#5b3a22', -17, -25, 17, -14);
    // 충차 통나무
    rrect(c, 11, -11.5 + wob, 12, 4, 2);
    fillToon(c, '#a0703f', 11, -11.5, 23, -7.5, { lw: 0.8 });
    sphere(c, 23, -9.5 + wob, 2.6, '#6b6f7a', { lw: 0.7 });
  });
  blit(ctx, s, x, y, 1.1, flip);
}

// ───────────────────────── 영웅 그리기 ─────────────────────────
// 의복(스킨)을 입힌 모습: 옷 색만 바꿔 끼운다
const lookCache = new Map();
function heroLook(id, skinId) {
  if (!skinId) return HERO_LOOK[id];
  const key = `${id}:${skinId}`;
  let l = lookCache.get(key);
  if (!l) {
    const sk = skinDef(id, skinId);
    l = sk ? { ...HERO_LOOK[id], ...(sk.gold ? GOLD_LOOK : {}), ...(sk.body ? { body: sk.body } : {}), ...(sk.sleeve ? { sleeve: sk.sleeve } : {}), ...(sk.boots ? { boots: sk.boots } : {}) } : HERO_LOOK[id];
    lookCache.set(key, l);
  }
  return l;
}

// 금빛 전설: 발밑 금빛 기운 + 맴도는 불티
function goldAura(ctx, x, y, time, k = 1) {
  glow(ctx, x, y - 16 * k, 26 * k, '#ffd24a', 0.28 + 0.08 * Math.sin(time * 3));
  for (let i = 0; i < 4; i++) {
    const a = time * 1.8 + (i * Math.PI) / 2;
    const px = x + Math.cos(a) * 13 * k;
    const py = y - 10 * k - ((time * 18 + i * 9) % 30) * k;
    ctx.fillStyle = `rgba(255,226,120,${0.8 - (((time * 18 + i * 9) % 30) / 30) * 0.8})`;
    star(ctx, px, py, 2.2 * k, 4, 0.35);
    ctx.fill();
  }
}

// 그림 파일 유닛: 한 장짜리 그림에 걷기(통통 튐 + 앞으로 기울기) · 공격(앞으로 내딛기) · 숨쉬기를 코드로 붙인다
export const ART_H = 56; // 전장에서 그림 영웅의 키(px)
export function drawArtUnit(ctx, a, x, y, t, moving, atk, flip, H = ART_H) {
  const k = H / a.h;
  const w = a.canvas.width * k;
  const hh = a.canvas.height * k;
  const pad = a.pad * k;
  const dir = flip ? -1 : 1;
  const bob = moving ? -Math.abs(Math.sin(t * 9)) * 2.4 : 0;
  const breathe = 1 + Math.sin(t * 2.2) * 0.012;
  ctx.save();
  ctx.translate(x + dir * (atk ? 3.5 : 0), y + bob);
  ctx.rotate(dir * (moving ? 0.07 : atk ? 0.05 : 0));
  ctx.scale(dir * (atk ? 1.04 : 1), breathe * (atk ? 0.97 : 1));
  ctx.drawImage(a.canvas, -pad - (w - 2 * pad) * a.ax, -(hh - pad), w, hh);
  ctx.restore();
}

export function drawHero(ctx, h, time, opts = {}) {
  const look = heroLook(h.heroId, h.skin);
  const gold = h.skin && skinDef(h.heroId, h.skin)?.gold;
  const x = opts.x ?? h.x * TS;
  const y = opts.y ?? h.y * TS + 9;
  const sc = opts.scale || 1.38;
  const t = time + h.id;
  const art = heroArt(h.heroId, h.skin);
  if (opts.portrait) {
    // 초상화는 캐시 없이 크게 직접 그린다
    if (gold && !opts.noAura) goldAura(ctx, x, y, time, sc * 0.9);
    if (art) {
      drawIllustration(ctx, art, x, y, 44 * sc);
      return;
    }
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(sc, sc);
    rig(ctx, look, poseOf('idle', 0));
    ctx.restore();
    return;
  }
  const col = h.owner === 1 ? PAL.p1 : PAL.p0;
  softShadow(ctx, x, y, 12, 4.2, 0.35);
  ctx.strokeStyle = rgba(col, opts.selected ? 1 : 0.75);
  ctx.lineWidth = opts.selected ? 3 : 2;
  ctx.beginPath();
  ctx.ellipse(x, y + 0.5, 14, 5, 0, 0, Math.PI * 2);
  ctx.stroke();
  if (opts.selected) {
    ctx.fillStyle = rgba(col, 0.2 + 0.1 * Math.sin(time * 5));
    ctx.fill();
  }
  if (h.buffs && (h.buffs.invulnT > 0 || h.buffs.gwakT > 0)) glow(ctx, x, y - 18, 24, '#ffd24a', 0.35);
  if (h.buffs && h.buffs.drT > 0) {
    ctx.strokeStyle = 'rgba(200,170,110,0.9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y - 16, 18, 0, Math.PI * 2);
    ctx.stroke();
  }
  const [anim, frame] = animFrame(h.moving, h.anim > 0, t);
  if (gold) goldAura(ctx, x, y, time);
  // 승인된 기본·의상 그림을 공유하며 누락된 경우 기존 대체 표시를 사용한다.
  if (art) drawArtUnit(ctx, art, x, y, t, h.moving, h.anim > 0, (h.facing || 1) < 0);
  else blit(ctx, charSprite('h', h.skin ? `${h.heroId}:${h.skin}` : h.heroId, look, anim, frame), x, y, sc, (h.facing || 1) < 0);
  if (!opts.noBar) {
    const w = 28;
    const hy = art ? y - ART_H - 6 : y - 44;
    ctx.fillStyle = OL;
    ctx.fillRect(x - w / 2 - 1.2, hy - 1.2, w + 2.4, 5.4);
    ctx.fillStyle = '#1f3a22';
    ctx.fillRect(x - w / 2, hy, w, 3);
    ctx.fillStyle = '#5ad16a';
    ctx.fillRect(x - w / 2, hy, w * Math.max(0, h.hp / h.maxHp), 3);
    // 이름 글씨는 건설을 가려서 빼고, 체력 막대 옆에 주인 색 점만
    ctx.fillStyle = h.owner === 1 ? PAL.p1 : PAL.p0;
    ctx.strokeStyle = OL;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x - w / 2 - 4.5, hy + 1.5, 2.6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

// ───────────────────────── 의병 · 목책 ─────────────────────────
const MILITIA = {
  body: '#f1ece0', sleeve: '#e8e2d4', boots: '#6b5a4a',
  chest: (c) => {
    c.fillStyle = '#8a7a64';
    c.fillRect(-5.8, -5.2, 11.6, 1.2);
  },
  hat: (c) => {
    const { x, y, r } = HEAD;
    c.fillStyle = '#231a14';
    c.beginPath();
    c.arc(x, y - 0.8, r + 0.2, Math.PI * 1.05, Math.PI * 1.95);
    c.fill();
    rrect(c, x - r - 0.3, y - 4.3, 2 * r + 0.6, 1.9, 0.8);
    fillToon(c, '#f4f1e8', x - r, y - 4.3, x + r, y - 2.4, { lw: 0.7 });
  },
  weapon: (c, h, pose) => {
    // 쇠스랑
    spear(c, h, pose, 19, '#b8bec6');
  },
};

// 남한산성 병사: 수어청 군사(청색 군복 + 전립 + 창) · 정예(두정갑 + 투구) · 의승군(회색 장삼 + 가사 + 석장)
function jeonlip(c) {
  const { x, y, r } = HEAD;
  // 전립: 검은 벙거지 + 붉은 상모 술
  c.fillStyle = 'rgba(28,24,22,0.95)';
  c.beginPath();
  c.ellipse(x, y - 3.4, r + 3.4, 1.9, 0, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = OL;
  c.lineWidth = 0.8;
  c.stroke();
  c.beginPath();
  c.arc(x, y - 3.6, r - 0.6, Math.PI, 0);
  c.closePath();
  fillToon(c, '#2a2522', x - r, y - r - 3, x + r, y - 3.4, { hi: 0.3, lw: 0.8 });
  c.beginPath();
  c.moveTo(x, y - r - 2.6);
  c.quadraticCurveTo(x - 3.6, y - r - 2.2, x - 4.2, y - r + 1.4);
  c.quadraticCurveTo(x - 1.4, y - r - 0.6, x + 0.6, y - r - 2.4);
  c.closePath();
  fillToon(c, '#d33a2c', x - 4, y - r - 3, x + 1, y - r + 1, { lw: 0.6 });
  sphere(c, x, y - r - 2.7, 1, PAL.gold, { lw: 0.5, gloss: false });
}
const GUARD = {
  body: '#2f5a8a', sleeve: '#b8322a', boots: '#1d1c1a',
  chest: (c) => {
    c.fillStyle = '#1d1c1a';
    c.fillRect(-5.8, -5.4, 11.6, 1.3);
    c.fillStyle = '#e7d9a8';
    c.fillRect(-0.6, -13, 1.2, 7.4);
  },
  hat: jeonlip,
  weapon: (c, h, pose) => spear(c, h, pose, 21),
};
const ELITE = {
  body: '#6e2a24', sleeve: '#6e2a24', boots: '#1d1c1a', bodyW: 1.08,
  chest: (c) => {
    c.fillStyle = PAL.gold;
    for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) {
      c.beginPath();
      c.arc(-2.4 + k * 2.6, -11.2 + r * 2.5, 0.55, 0, Math.PI * 2);
      c.fill();
    }
    c.fillStyle = '#1d1c1a';
    c.fillRect(-6, -5.4, 12, 1.4);
  },
  hat: (c, pose) => {
    const { x, y, r } = HEAD;
    kabuto('#34363d', PAL.gold, 'none', true)(c);
    c.beginPath();
    c.moveTo(x, y - r - 0.6);
    c.quadraticCurveTo(x - 3 + pose.step, y - r - 6, x + 1.4, y - r - 7.4);
    c.quadraticCurveTo(x + 2.6, y - r - 4.4, x + 1.2, y - r - 0.6);
    c.closePath();
    fillToon(c, '#d33a2c', x - 3, y - r - 7, x + 3, y - r, { lw: 0.7 });
  },
  backHand: (c, h) => {
    // 방패
    sphere(c, h.x - 0.6, h.y - 1, 4.8, '#7a3a24', { lw: 0.9, glossA: 0.3 });
    c.strokeStyle = PAL.gold;
    c.lineWidth = 0.7;
    c.beginPath();
    c.arc(h.x - 0.6, h.y - 1, 3.2, 0, Math.PI * 2);
    c.stroke();
  },
  weapon: (c, h, pose) => spear(c, h, pose, 23, '#f1f4f6'),
};
const MONK = {
  body: '#8d8a84', sleeve: '#9b978f', boots: '#4a4238', longRobe: true, flare: 1.08,
  chest: (c) => {
    // 가사: 어깨에서 비스듬히
    c.beginPath();
    c.moveTo(-5.6, -13.4);
    c.lineTo(-2.6, -13.4);
    c.lineTo(5.8, -4.6);
    c.lineTo(2.4, -4.6);
    c.closePath();
    fillToon(c, '#a4432c', -5.6, -13.4, 5.8, -4.6, { lw: 0.6 });
    c.fillStyle = '#e7d9a8';
    c.fillRect(-5.8, -5.6, 11.6, 1);
  },
  hat: (c) => {
    // 삭발한 머리에 얕은 그늘
    const { x, y, r } = HEAD;
    c.fillStyle = 'rgba(90,70,60,0.28)';
    c.beginPath();
    c.arc(x, y - 0.6, r, Math.PI * 1.08, Math.PI * 1.92);
    c.fill();
  },
  weapon: (c, h, pose) => {
    // 석장: 긴 나무 지팡이 끝에 쇠고리
    const a = pose.atk ? -0.35 : -1.25;
    const ex = h.x + Math.cos(a) * 15;
    const ey = h.y + Math.sin(a) * 15;
    c.lineCap = 'round';
    c.strokeStyle = OL;
    c.lineWidth = 2.2;
    c.beginPath();
    c.moveTo(h.x - Math.cos(a) * 6, h.y - Math.sin(a) * 6);
    c.lineTo(ex, ey);
    c.stroke();
    c.strokeStyle = '#8a5a33';
    c.lineWidth = 1.2;
    c.stroke();
    c.strokeStyle = '#d9c070';
    c.lineWidth = 1;
    c.beginPath();
    c.arc(ex, ey - 1.6, 2.2, 0, Math.PI * 2);
    c.stroke();
    if (pose.atk) glow(c, ex, ey, 6, '#ffe08a', 0.7);
  },
};
const SOLDIER_LOOK = { guard: GUARD, elite: ELITE, monk: MONK };

export function drawSummon(ctx, m, time) {
  const x = m.x * TS;
  const y = m.y * TS + 8;
  if (m.kind === 'wall') {
    softShadow(ctx, x, y + 1, 20, 5, 0.35);
    const s = sprite('wall', 44, 32, 22, 24, (c) => {
      for (let i = -3; i <= 3; i++) {
        const h = 17 - Math.abs(i) * 0.8;
        c.beginPath();
        c.moveTo(i * 4.6 - 2, 0);
        c.lineTo(i * 4.6 - 2, -h);
        c.lineTo(i * 4.6, -h - 3);
        c.lineTo(i * 4.6 + 2, -h);
        c.lineTo(i * 4.6 + 2, 0);
        c.closePath();
        fillToon(c, '#9a6a3c', i * 4.6 - 2, -h - 3, i * 4.6 + 2, 0, { lw: 0.8 });
      }
      for (const yy of [-12, -5]) {
        rrect(c, -17, yy, 34, 2.4, 1);
        fillToon(c, '#6b4424', -17, yy, 17, yy + 2.4, { lw: 0.7 });
      }
    });
    if (!drawIllustration(ctx, propArt('wall'), x, y, 27)) blit(ctx, s, x, y, 1.1);
    bar(ctx, x, y - 30, 26, m.hp / m.maxHp, '#e0c080');
    return;
  }
  const t = time + m.id;
  softShadow(ctx, x, y, 8, 2.8, 0.3);
  const [anim, frame] = animFrame(false, m.anim > 0, t);
  const look = SOLDIER_LOOK[m.kind];
  if (look) {
    // 남한산성 병사: 주인 색 발 고리
    ctx.strokeStyle = rgba(m.owner === 1 ? PAL.p1 : PAL.p0, 0.6);
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.ellipse(x, y + 0.5, 9, 3.2, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  const art = allyArt(m.kind) || allyArt('militia');
  if (art) drawArtUnit(ctx, art, x, y, t, false, m.anim > 0, false, 32);
  else blit(ctx, charSprite('m', look ? m.kind : 'militia', look || MILITIA, anim, frame), x, y, m.kind === 'elite' ? 1.02 : 0.95, false);
  bar(ctx, x, y - 32, 16, m.hp / m.maxHp, look ? '#9cc4ff' : '#8fe3a0');
}

function bar(ctx, x, y, w, k, color) {
  ctx.fillStyle = OL;
  ctx.fillRect(x - w / 2 - 1, y - 1, w + 2, 4.4);
  ctx.fillStyle = color;
  ctx.fillRect(x - w / 2, y, w * Math.max(0, k), 2.4);
}

// ───────────────────────── 거북선 ─────────────────────────
export function drawTurtle(ctx, m, time) {
  const x = m.x * TS;
  const y = m.y * TS + 4;
  const a = Math.atan2(m.dy, m.dx);
  glow(ctx, x, y + 4, 34, '#9fd6f0', 0.5);
  const art = allyArt('turtle');
  if (art) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(a);
    drawIllustration(ctx, art, 0, 20 + Math.sin(time * 7), 43);
    ctx.restore();
    return;
  }
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(a);
  // 물보라
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(-22 - i * 5, Math.sin(time * 20 + i) * 5, 3.4 - i * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }
  const s = sprite('turtle', 60, 36, 30, 18, (c) => {
    // 선체
    c.beginPath();
    c.moveTo(-21, -9);
    c.lineTo(15, -9);
    c.quadraticCurveTo(24, 0, 15, 9);
    c.lineTo(-21, 9);
    c.quadraticCurveTo(-26, 0, -21, -9);
    c.closePath();
    fillToon(c, '#7a4e2a', -21, -9, 20, 9);
    // 등껍질 지붕
    c.beginPath();
    c.ellipse(-2.5, 0, 16.5, 7.5, 0, 0, Math.PI * 2);
    fillToon(c, '#3f6b56', -18, -7, 14, 7, { hi: 0.35 });
    c.strokeStyle = 'rgba(20,40,30,0.55)';
    c.lineWidth = 0.7;
    for (let i = -14; i <= 10; i += 4.5) {
      c.beginPath();
      c.moveTo(i, -6);
      c.lineTo(i + 2, 6);
      c.stroke();
    }
    c.fillStyle = '#e8eef2';
    for (let i = -14; i <= 10; i += 4) for (const yy of [-3.6, 0, 3.6]) {
      c.beginPath();
      c.moveTo(i, yy - 0.9);
      c.lineTo(i + 1.6, yy);
      c.lineTo(i, yy + 0.9);
      c.fill();
    }
    gloss(c, -8, -3.5, 7, 1.6, 0.35);
    // 용머리
    c.beginPath();
    c.ellipse(21, 0, 5, 3.6, 0, 0, Math.PI * 2);
    fillToon(c, '#d0452f', 16, -3.6, 26, 3.6);
    eye(c, 22, -1.2, 0.9, 0.4, 'angry');
  });
  blit(ctx, s, 0, 0, 1);
  glow(ctx, 28, 0, 9 + Math.sin(time * 30) * 2, '#ffae3c', 0.9);
  ctx.restore();
}

export { HERO_LOOK, ENEMY_LOOK, rig, poseOf, cylinder, capsule, shade };

// ───────────────────────── 급보 전령 (조선 기마 전령) ─────────────────────────
// 흰 말 + 청색 군복 · 전립 + 등에 꽂은 '급' 깃발, 머리 위에 "급보요, 급보!" 말풍선
export function drawCourier(ctx, m, time) {
  const x = m.x * TS;
  const y = m.y * TS + 8;
  const flip = m.dx < -0.1;
  const frame = Math.floor(time * 16) % 6;
  const s = sprite(`courier:${frame}`, 56, 70, 28, 56, (c) => {
    const ph = (frame / 6) * Math.PI * 2;
    const g = Math.sin(ph) * 3.2;
    for (const [lx, off] of [[-7, g], [-3, -g], [5, -g], [9, g]]) {
      limb(c, lx, -8, lx + off, 0, 2.2, '#d9d2c4');
      boot(c, lx + off, 0.8, '#4a4038');
    }
    c.beginPath();
    c.ellipse(1, -10 - Math.abs(g) * 0.3, 11, 5.5, 0, 0, Math.PI * 2);
    fillToon(c, '#f1ece2', -10, -16, 10, -4);
    c.beginPath();
    c.moveTo(7, -13);
    c.quadraticCurveTo(12, -21, 15.5, -20);
    c.lineTo(17, -16);
    c.quadraticCurveTo(12, -13, 10, -8);
    c.closePath();
    fillToon(c, '#f1ece2', 7, -21, 17, -8);
    c.beginPath();
    c.ellipse(16, -18, 3.2, 2.2, 0.5, 0, Math.PI * 2);
    fillToon(c, '#e6dfd2', 13, -20, 19, -16);
    eye(c, 15.8, -19.2, 0.8, 0.3, 'none');
    // 갈기 · 꼬리 (바람에 날린다)
    c.fillStyle = '#8a7a64';
    c.beginPath();
    c.moveTo(8, -14);
    c.quadraticCurveTo(10, -22, 15, -21.5);
    c.lineTo(12, -17);
    c.closePath();
    c.fill();
    c.beginPath();
    c.moveTo(-9.5, -12);
    c.quadraticCurveTo(-17, -14 + g * 0.6, -16, -6);
    c.lineTo(-10, -9);
    c.closePath();
    c.fill();
    // 고삐 · 안장
    c.strokeStyle = '#6b3f22';
    c.lineWidth = 0.8;
    c.beginPath();
    c.moveTo(16, -17);
    c.lineTo(7, -20);
    c.stroke();
    rrect(c, -3, -16.5, 8, 3, 1.2);
    fillToon(c, '#2f5a8a', -3, -16.5, 5, -13.5, { lw: 0.7 });
    // 등에 꽂은 전령 깃발
    const wave = Math.sin(ph) * 1.2;
    c.strokeStyle = OL;
    c.lineWidth = 1.4;
    c.beginPath();
    c.moveTo(-3, -18);
    c.lineTo(-6, -46);
    c.stroke();
    c.strokeStyle = '#8a5a33';
    c.lineWidth = 0.7;
    c.stroke();
    c.beginPath();
    c.moveTo(-6, -46);
    c.quadraticCurveTo(-13, -45 + wave, -19, -44 + wave);
    c.lineTo(-18.5, -34 + wave);
    c.quadraticCurveTo(-12, -35 - wave, -5.2, -36);
    c.closePath();
    fillToon(c, '#d33a2c', -19, -46, -5, -34, { lw: 0.8 });
    c.fillStyle = '#ffe9a8';
    c.font = '700 7px "Noto Sans KR", "Malgun Gothic", sans-serif';
    c.textAlign = 'center';
    c.fillText('급', -12, -37.5);
    // 기수
    c.save();
    c.translate(1, -14);
    c.scale(0.8, 0.8);
    c.translate(0, -Math.abs(Math.cos(ph)) * 1.2);
    torso(c, '#2f5a8a', 0.95, 0.9);
    head(c, { mood: 'angry' });
    jeonlip(c);
    limb(c, 3.9, -11.6, 9, -9, 3.1, '#b8322a');
    hand(c, 9, -9);
    c.restore();
  });
  // 흙먼지
  ctx.fillStyle = 'rgba(200,180,140,0.35)';
  for (let i = 0; i < 3; i++) {
    const k = (time * 3 + i / 3) % 1;
    const bx = x + (flip ? 1 : -1) * (12 + k * 16);
    ctx.beginPath();
    ctx.ellipse(bx, y - 1 - k * 4, 3 + k * 4, 2 + k * 2, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  softShadow(ctx, x, y, 13, 4, 0.3);
  glow(ctx, x, y - 16, 22, '#8fd3ff', 0.22);
  const art = allyArt('courier');
  if (art) drawArtUnit(ctx, art, x, y, time, true, false, flip, 62);
  else blit(ctx, s, x, y, 1.2, flip);
  // 말풍선
  const text = Math.floor(time * 2.5) % 2 ? '급보요, 급보!' : '급보요!';
  ctx.font = '700 13px "Noto Sans KR", "Malgun Gothic", sans-serif';
  ctx.textAlign = 'center';
  const w = ctx.measureText('급보요, 급보!').width + 14;
  const by = y - 74 + Math.sin(time * 10) * 1.2;
  ctx.fillStyle = '#fffaf0';
  ctx.strokeStyle = '#2b1a12';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(x - w / 2, by - 15, w, 20, 8);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 4, by + 5);
  ctx.lineTo(x + 4, by + 5);
  ctx.lineTo(x, by + 11);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillRect(x - 3.2, by + 3.4, 6.4, 2.2);
  ctx.fillStyle = '#c0392b';
  ctx.fillText(text, x, by);
}
