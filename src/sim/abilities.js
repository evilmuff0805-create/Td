// 영웅 스킬 · 비기 · 합격기
import { HEROES, YI_FAN } from '../data/heroes.js';
import { SKILLS, skillPower } from '../data/skills.js';
import { findCombo, COMBO_RANGE, COMBO_WINDOW, RESONANCE_MAX } from '../data/combos.js';
import {
  ev, d2, clamp, mapOf, aoe, damage, applySlow, applyStun, applyVuln, addSummon, drop, randomPointIn,
  addGold, heroPower, isTargetable, addResonance, releaseBlocker,
} from './combat.js';

// 안중근의 상시 효과: 적장에게 +25%
export const AHN_BOSS_MULT = 1.25;
const bossMult = (h, e) => (h.heroId === 'ahn' && e.tier === 4 ? AHN_BOSS_MULT : 1);

// 전장에서 가장 강한 적 (적장 우선, 다음은 남은 체력)
function strongest(s) {
  let best = null;
  for (const e of s.enemies) {
    if (e.hp <= 0) continue;
    if (!best || (e.tier === 4) > (best.tier === 4) || ((e.tier === 4) === (best.tier === 4) && e.hp > best.hp)) best = e;
  }
  return best;
}
import { nearestOnPath, posAt } from './map.js';

const SKILL_RANGE = 5;

// abilityCue is presentation only. Emit it after resolving actual summon/self
// coordinates; it must never consume RNG, delay a cast or drive damage.

function clampToHero(h, x, y, r = SKILL_RANGE) {
  const dx = x - h.x;
  const dy = y - h.y;
  const l = Math.hypot(dx, dy);
  if (l <= r) return { x, y };
  return { x: h.x + (dx / l) * r, y: h.y + (dy / l) * r };
}

function heroSrc(h) {
  return { p: h.owner, kind: 'hero', ref: h };
}

function scaled(h, base, perLv) {
  return (base + perLv * (h.lv - 1)) * heroPower(h);
}

// 길 위 지점 주변에 의병 배치
function placeMilitia(s, x, y, n, stats, owner) {
  const map = mapOf(s);
  const np = nearestOnPath(map, x, y);
  if (!np) return;
  const path = map.paths[np.path];
  for (let i = 0; i < n; i++) {
    const off = (i - (n - 1) / 2) * 0.55;
    const q = posAt(path, clamp(np.d + off, 0, path.total));
    const side = (i % 2 ? 1 : -1) * 0.18;
    addSummon(s, { ...stats, owner, x: q.x - q.dy * side, y: q.y + q.dx * side });
  }
}

// ───── 영웅 스킬 (Q) ─────
export function castHeroSkill(s, h, x, y) {
  const def = HEROES[h.heroId];
  const src = heroSrc(h);
  const pw = heroPower(h);
  switch (h.heroId) {
    case 'yi': {
      // 학익진: 부채꼴
      const ang = Math.atan2(y - h.y, x - h.x);
      const dmg = scaled(h, def.skill.base, def.skill.perLv);
      for (const e of s.enemies) {
        if (e.hp <= 0) continue;
        const dd = d2(h, e);
        if (dd > YI_FAN.range * YI_FAN.range) continue;
        let da = Math.atan2(e.y - h.y, e.x - h.x) - ang;
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        if (Math.abs(da) <= YI_FAN.halfAngle) damage(s, e, dmg, 'phys', src);
      }
      h.facing = Math.cos(ang) >= 0 ? 1 : -1;
      ev(s, 'cone', { x: h.x, y: h.y, a: ang, r: YI_FAN.range, w: YI_FAN.halfAngle });
      ev(s, 'sfx', { n: 'volley' });
      break;
    }
    case 'sejong': {
      const p = clampToHero(h, x, y);
      const dmg = scaled(h, def.skill.base, def.skill.perLv);
      drop(s, 'hangul', p.x, p.y, 0.55, { r: 1.8, dmg, type: 'holy', stun: 1.2 }, src);
      ev(s, 'hangul', { x: p.x, y: p.y, r: 1.8 });
      ev(s, 'sfx', { n: 'chime' });
      break;
    }
    case 'eulji': {
      const p = clampToHero(h, x, y);
      s.zones.push({ id: s.nextId++, kind: 'fire', x: p.x, y: p.y, r: 1.5, t: 5, max: 5, dps: scaled(h, def.skill.base, def.skill.perLv), slow: 0.2, src });
      ev(s, 'sfx', { n: 'fire' });
      break;
    }
    case 'gang': {
      const p = clampToHero(h, x, y, 4);
      const dmg = scaled(h, def.skill.base, def.skill.perLv);
      const ax = h.x;
      const ay = h.y;
      const bx = p.x;
      const by = p.y;
      const lx = bx - ax;
      const ly = by - ay;
      const L2 = lx * lx + ly * ly || 1;
      for (const e of s.enemies) {
        if (e.hp <= 0) continue;
        const t = clamp(((e.x - ax) * lx + (e.y - ay) * ly) / L2, 0, 1);
        const px = ax + lx * t;
        const py = ay + ly * t;
        if ((e.x - px) ** 2 + (e.y - py) ** 2 <= 0.8 * 0.8) {
          applyStun(e, 0.5);
          damage(s, e, dmg, 'phys', src);
        }
      }
      releaseBlocker(s, h.id);
      ev(s, 'dash', { x1: ax, y1: ay, x2: bx, y2: by });
      h.x = bx;
      h.y = by;
      h.tx = bx;
      h.ty = by;
      h.post = { x: bx, y: by };
      h.facing = lx >= 0 ? 1 : -1;
      ev(s, 'sfx', { n: 'slash' });
      break;
    }
    case 'gwon': {
      const p = clampToHero(h, x, y);
      const dmg = scaled(h, def.skill.base, def.skill.perLv);
      for (let i = 0; i < 6; i++) {
        const q = randomPointIn(s, p.x, p.y, 1.6);
        drop(s, 'stone', q.x, q.y, 0.35 + i * 0.09, { r: 0.7, dmg, type: 'phys', stun: 0.6 }, src);
      }
      ev(s, 'sfx', { n: 'throw' });
      break;
    }
    case 'gwak': {
      const p = clampToHero(h, x, y);
      const mult = pw * (1 + 0.08 * (h.lv - 1));
      const first=s.summons.length;
      placeMilitia(s, p.x, p.y, 3, { hp: 220 * mult, maxHp: 220 * mult, dmg: 15 * mult, life: 12, kind: 'militia' }, h.owner);
      ev(s,'abilityCue',{motif:'gwak-skill',caster:h.id,p:h.owner,r:.38,points:s.summons.slice(first).map(m=>({x:m.x,y:m.y}))});
      ev(s, 'sfx', { n: 'horn' });
      break;
    }
    case 'ahn': {
      // 일곱 발의 총성: 지점 주변 적에게 7발
      const p = clampToHero(h, x, y);
      const dmg = scaled(h, def.skill.base, def.skill.perLv);
      const near = s.enemies.filter((e) => e.hp > 0 && (e.x - p.x) ** 2 + (e.y - p.y) ** 2 <= 2.2 * 2.2).sort((a, b) => d2(a, p) - d2(b, p));
      for (let i = 0; i < 7 && near.length; i++) {
        const e = near[i % near.length];
        damage(s, e, dmg * bossMult(h, e), 'fire', src);
        ev(s, 'shot', { x1: h.x, y1: h.y - 0.1, x2: e.x, y2: e.y, gun: 1, caster: h.id });
      }
      h.facing = p.x >= h.x ? 1 : -1;
      ev(s, 'sfx', { n: 'gunVolley' });
      break;
    }
    case 'dangun': {
      // 마늘 던지기: 매워서 둔화
      const p = clampToHero(h, x, y);
      const dmg = scaled(h, def.skill.base, def.skill.perLv);
      for (let i = 0; i < 3; i++) {
        const q = i === 0 ? p : randomPointIn(s, p.x, p.y, 1.2);
        drop(s, 'garlic', q.x, q.y, 0.45 + i * 0.12, { r: 0.9, dmg, type: 'holy', slow: 0.35, slowDur: 3 }, src, { sx: h.x, sy: h.y - 0.4 });
      }
      h.facing = p.x >= h.x ? 1 : -1;
      ev(s, 'sfx', { n: 'throw' });
      break;
    }
  }
  addResonance(s, 4);
}

// ───── 영웅 궁극기 (R) ─────
export function castHeroUlt(s, h, x, y) {
  const def = HEROES[h.heroId];
  const src = heroSrc(h);
  switch (h.heroId) {
    case 'yi': {
      const map = mapOf(s);
      const np = nearestOnPath(map, x, y);
      launchTurtle(s, np ? np.path : 0, scaled(h, def.ult.base, def.ult.perLv), src);
      break;
    }
    case 'sejong': {
      s.buffs.slowT = 6;
      s.buffs.slow = 0.5;
      s.buffs.asT = Math.max(s.buffs.asT, 6);
      s.buffs.as = Math.max(s.buffs.as, 0.3);
      for (const t of s.towers) t.cd = 0;
      ev(s, 'announce', { text: '자격루', sub: '시간이 느려진다', color: '#7fd1ff' });
      ev(s, 'clock');
      ev(s,'abilityCue',{motif:'sejong-ult',caster:h.id,p:h.owner,x:h.x,y:h.y,r:.9});
      ev(s, 'sfx', { n: 'bell' });
      break;
    }
    case 'eulji': {
      const dmg = scaled(h, def.ult.base, def.ult.perLv);
      aoe(s, x, y, 3, dmg, 'holy', src, { push: 3, slow: 0.4, slowDur: 3, noFalloff: true });
      ev(s, 'flood', { x, y, r: 3 });
      ev(s, 'sfx', { n: 'splash' });
      break;
    }
    case 'gang': {
      const dmg = scaled(h, def.ult.base, def.ult.perLv);
      const targets = s.enemies.filter((e) => e.hp > 0).sort((a, b) => b.hp - a.hp).slice(0, 8);
      targets.forEach((e, i) => {
        drop(s, 'meteor', e.x, e.y, 0.5 + i * 0.12, { r: 0.8, dmg, type: 'holy', follow: e.id }, src);
      });
      ev(s, 'sfx', { n: 'meteor' });
      break;
    }
    case 'gwon': {
      const p = clampToHero(h, x, y);
      const map = mapOf(s);
      const np = nearestOnPath(map, p.x, p.y);
      if (np) addSummon(s, { kind: 'wall', owner: h.owner, x: np.x, y: np.y, hp: 2500 * heroPower(h), maxHp: 2500 * heroPower(h), dmg: 0, block: 99, life: 6 });
      h.buffs.drT = 6;
      ev(s,'abilityCue',{motif:'gwon-ult',caster:h.id,p:h.owner,x:np?.x??h.x,y:np?.y??h.y,r:.65});
      ev(s, 'sfx', { n: 'build' });
      break;
    }
    case 'gwak': {
      h.buffs.gwakT = 8;
      ev(s,'abilityCue',{motif:'gwak-ult',caster:h.id,p:h.owner,x:h.x,y:h.y,r:.85});
      ev(s, 'announce', { text: '홍의 질풍', sub: '하늘이 내린 붉은 옷의 장군', color: '#ff7b6b' });
      ev(s, 'sfx', { n: 'horn' });
      break;
    }
    case 'ahn': {
      // 하얼빈 의거: 가장 강한 적을 저격
      const e = strongest(s);
      if (e) {
        applyStun(e, 1.5);
        applyVuln(e, 0.3, 6);
        damage(s, e, scaled(h, def.ult.base, def.ult.perLv) * bossMult(h, e), 'fire', src);
        ev(s, 'snipe', { x1: h.x, y1: h.y - 0.1, x2: e.x, y2: e.y, caster: h.id });
        h.facing = e.x >= h.x ? 1 : -1;
      }
      ev(s, 'announce', { text: '하얼빈의 총성', sub: '대한 독립 만세!', color: '#f0c75e' });
      ev(s, 'sfx', { n: 'snipe' });
      break;
    }
    case 'dangun': {
      // 천부인 번개: 가장 강한 적 12명에게 차례로
      const dmg = scaled(h, def.ult.base, def.ult.perLv);
      const targets = s.enemies.filter((e) => e.hp > 0).sort((a, b) => (b.tier === 4) - (a.tier === 4) || b.hp - a.hp);
      for (let i = 0; i < 12 && targets.length; i++) {
        const e = targets[i % targets.length];
        drop(s, 'thunder', e.x, e.y, 0.3 + i * 0.13, { r: 0.7, dmg, type: 'holy', stun: 0.8 }, src, { follow: e.id });
      }
      ev(s, 'announce', { text: '천부인 번개', sub: '하늘이 열린다', color: '#bfe6ff' });
      ev(s, 'sfx', { n: 'thunder' });
      break;
    }
  }
  addResonance(s, 8);
}

export function launchTurtle(s, pathIdx, dmg, src) {
  const path = mapOf(s).paths[pathIdx];
  s.movers.push({ id: s.nextId++, kind: 'turtle', path: pathIdx, d: path.total, speed: 7, dmg, src, hit: [], x: 0, y: 0, dx: 0, dy: 0 });
  ev(s, 'announce', { text: '거북선 출격!', color: '#f0c75e' });
  ev(s, 'sfx', { n: 'drum' });
}

// ───── 비기 ─────
export function castEquipSkill(s, pl, slot, x, y) {
  const sk = SKILLS[slot.id];
  const pw = skillPower(slot.lv);
  const src = { p: pl.idx, kind: 'skill', skillId: slot.id };
  switch (slot.id) {
    case 'singijeon':
      for (let i = 0; i < sk.n; i++) {
        const q = randomPointIn(s, x, y, sk.radius);
        drop(s, 'rocket', q.x, q.y, 0.25 + i * 0.07, { r: 0.55, dmg: sk.dmg * pw, type: 'fire' }, src, { sx: x - 3, sy: y - 6 });
      }
      ev(s, 'sfx', { n: 'rockets' });
      break;
    case 'bongsu':
      s.buffs.revealT = sk.dur;
      s.buffs.vulnT = sk.dur;
      s.buffs.vuln = sk.vuln * pw;
      ev(s, 'announce', { text: '봉수 경보!', sub: '은신한 적이 모두 드러난다', color: '#ffb35c' });
      ev(s, 'sfx', { n: 'horn' });
      break;
    case 'uibyeong':
      placeMilitia(s, x, y, sk.n, { hp: sk.hp * pw, maxHp: sk.hp * pw, dmg: sk.dmg * pw, life: sk.life, kind: 'militia' }, pl.idx);
      ev(s, 'sfx', { n: 'horn' });
      break;
    case 'bigyeok':
      drop(s, 'bomb', x, y, sk.delay, { r: sk.radius, dmg: sk.dmg * pw, type: 'fire', stun: sk.stun }, src);
      ev(s, 'sfx', { n: 'fuse' });
      break;
    case 'gunryang': {
      addGold(pl, sk.gold * pw);
      for (const o of s.players) if (o !== pl) addGold(o, sk.gold * pw * 0.5);
      ev(s, 'gold', { p: pl.idx, amount: Math.round(sk.gold * pw) });
      ev(s, 'sfx', { n: 'coin' });
      break;
    }
    case 'cheonja': {
      let best = null;
      for (const e of s.enemies) {
        if (e.hp <= 0) continue;
        if ((e.x - x) ** 2 + (e.y - y) ** 2 > sk.radius * sk.radius) continue;
        if (!best || e.hp > best.hp) best = e;
      }
      const tx = best ? best.x : x;
      const ty = best ? best.y : y;
      drop(s, 'bigshell', tx, ty, 0.45, { r: 0.5, dmg: sk.dmg * pw, type: 'fire', single: best ? best.id : 0 }, src, { sx: tx - 8, sy: ty - 4, follow: best ? best.id : 0 });
      ev(s, 'sfx', { n: 'cannonBig' });
      break;
    }
    case 'donguibogam':
      for (const h of s.heroes) {
        if (h.dead) {
          h.dead = false;
          h.respawn = 0;
        }
        h.hp = h.maxHp;
        ev(s, 'heal', { x: h.x, y: h.y });
      }
      ev(s, 'announce', { text: '동의보감', sub: '모든 영웅 회복', color: '#8fe3a0' });
      ev(s, 'sfx', { n: 'heal' });
      break;
    case 'hanpa':
      s.zones.push({ id: s.nextId++, kind: 'ice', x, y, r: sk.radius, t: sk.dur, max: sk.dur, dps: sk.dps * pw, slow: sk.slow, src });
      ev(s, 'sfx', { n: 'ice' });
      break;
  }
  pl.stats.skillsUsed++;
  addResonance(s, 3);
}

// ───── 합격기 ─────
export function comboStatus(s) {
  const alive = s.heroes.filter((h) => !h.dead);
  if (s.heroes.length < 2) return { ok: false, why: '영웅이 둘 필요합니다' };
  if (s.resonance.gauge < RESONANCE_MAX) return { ok: false, why: '공명 게이지 부족' };
  if (alive.length < 2) return { ok: false, why: '두 영웅이 모두 살아 있어야 합니다' };
  const [a, b] = s.heroes;
  if (d2(a, b) > COMBO_RANGE * COMBO_RANGE) return { ok: false, why: `두 영웅이 ${COMBO_RANGE}칸 이내에 있어야 합니다` };
  return { ok: true };
}

export function pressCombo(s, p) {
  const st = comboStatus(s);
  if (!st.ok) {
    ev(s, 'toast', { p, text: st.why });
    return;
  }
  const active = s.players.filter((pl) => !pl.left);
  if (active.length < 2) {
    fireCombo(s);
    return;
  }
  s.resonance.press[p] = s.time;
  const other = s.resonance.press[1 - p];
  if (s.time - other <= COMBO_WINDOW) fireCombo(s);
  else ev(s, 'comboWait', { p, until: s.time + COMBO_WINDOW });
}

export function fireCombo(s) {
  const [a, b] = s.heroes;
  const combo = findCombo(a.heroId, b.heroId);
  s.resonance.gauge = 0;
  s.resonance.press = [-99, -99];
  for (const pl of s.players) pl.stats.combos++;
  const src = { p: 0, kind: 'combo' };
  const lvSum = a.lv + b.lv;
  const alive = () => s.enemies.filter((e) => e.hp > 0);
  switch (combo.id) {
    case 'yi_sejong': {
      s.buffs.dmgT = 10;
      s.buffs.dmg = 0.6;
      s.buffs.asT = Math.max(s.buffs.asT, 10);
      s.buffs.as = Math.max(s.buffs.as, 0.2);
      const map = mapOf(s);
      map.paths.forEach((_, i) => launchTurtle(s, i, 260 + lvSum * 15, src));
      break;
    }
    case 'eulji_gang':
      for (const e of alive()) {
        applySlow(e, 0.5, 4);
        damage(s, e, 350 + lvSum * 12, 'holy', src);
      }
      break;
    case 'gwak_gwon': {
      const map = mapOf(s);
      map.paths.forEach((p) => {
        for (const f of [0.45, 0.7]) {
          const q = posAt(p, p.total * f);
          placeMilitia(s, q.x, q.y, 3, { hp: 320, maxHp: 320, dmg: 26, life: 15, kind: 'militia' }, 0);
        }
      });
      for (const h of s.heroes) {
        h.buffs.invulnT = 8;
        h.buffs.dmgT = 8;
      }
      for (const e of alive()) applySlow(e, 0.4, 6);
      break;
    }
    case 'gwon_yi':
      for (const e of alive()) {
        applyStun(e, 1.5);
        damage(s, e, 400 + lvSum * 12, 'fire', src);
      }
      break;
    case 'eulji_sejong':
      s.buffs.armorZeroT = 10;
      for (const pl of s.players) addGold(pl, 150);
      break;
    case 'gang_yi': {
      const targets = alive().sort((x, y) => y.hp - x.hp).slice(0, 12);
      targets.forEach((e, i) => drop(s, 'meteor', e.x, e.y, 0.4 + i * 0.1, { r: 0.6, dmg: 500 + lvSum * 15, type: 'holy', follow: e.id }, src));
      break;
    }
    case 'ahn_sejong':
      for (const e of alive()) {
        applyStun(e, 2);
        damage(s, e, 380 + lvSum * 12, 'fire', src);
      }
      s.buffs.asT = Math.max(s.buffs.asT, 8);
      s.buffs.as = Math.max(s.buffs.as, 0.25);
      ev(s, 'announce', { text: '대한 독립 만세!', color: '#f0c75e' });
      break;
    case 'dangun_eulji':
      alive().forEach((e, i) => {
        damage(s, e, 420 + lvSum * 12, 'holy', src);
        if (e.tier === 4) applyVuln(e, 0.4, 8);
        if (i < 16) ev(s, 'boom', { x: e.x, y: e.y, r: 0.6, kind: 'thunder' });
      });
      break;
    case 'ahn_yi': {
      const targets = alive().sort((x, y) => (y.tier === 4) - (x.tier === 4) || y.hp - x.hp).slice(0, 6);
      targets.forEach((e, i) => drop(s, 'bigshell', e.x, e.y, 0.4 + i * 0.12, { r: 0.6, dmg: 700 + lvSum * 15, type: 'fire', single: e.id }, src, { sx: e.x - 8, sy: e.y - 4, follow: e.id }));
      break;
    }
    case 'dangun_sejong':
      for (const h of s.heroes) {
        if (h.dead) {
          h.dead = false;
          h.respawn = 0;
        }
        h.hp = h.maxHp;
        h.buffs.invulnT = 8;
        ev(s, 'heal', { x: h.x, y: h.y });
      }
      for (const pl of s.players) addGold(pl, 200);
      break;
    default: {
      const dmg = 260 + lvSum * 18;
      for (const e of alive()) {
        const near = d2(e, a) <= 25 || d2(e, b) <= 25;
        applyStun(e, near ? 1.5 : 0.6);
        damage(s, e, near ? dmg * 1.5 : dmg, 'holy', src);
      }
      for (const pl of s.players) addGold(pl, 60);
    }
  }
  ev(s, 'combo', { id: combo.id, name: combo.name, a: a.heroId, b: b.heroId, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  ev(s, 'sfx', { n: 'combo' });
}

// 자동 조준: 영웅 주변에서 적이 가장 몰린 지점 (로컬 2P 키보드 / 봇용)
export function autoAim(s, h, range = 5, radius = 1.6) {
  let best = null;
  let bestScore = 0;
  const cands = s.enemies.filter((e) => e.hp > 0 && d2(e, h) <= range * range);
  for (const c of cands) {
    let score = 0;
    for (const e of cands) {
      if (d2(c, e) <= radius * radius) score += e.tier === 4 ? 6 : e.tier;
    }
    if (isTargetable(c)) score += 0.5;
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }
  return best ? { x: best.x, y: best.y, score: bestScore } : null;
}

