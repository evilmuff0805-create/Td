// 전투 공용 함수: 피해 계산, 상태 이상, 소환, 처치 보상
import { ENEMIES } from '../data/enemies.js';
import { HEROES, heroLevelFromXp, heroLevelMult } from '../data/heroes.js';
import { STAGE_BY_ID, DIFFICULTY, COOP } from '../data/stages.js';
import { TACTICS } from '../data/tactics.js';
import { RESONANCE_MAX } from '../data/combos.js';
import { getMap, posAt } from './map.js';
import { rand, randRange } from './rng.js';

export const BOSS_CC = 0.35; // 적장은 기절 지속시간 35%만 받는다
export const BOSS_SLOW = 0.5; // 적장은 둔화 효과 50%만 받는다
export const MAX_SLOW = 0.8;

export const stageOf = (s) => STAGE_BY_ID[s.stageId];
export const diffOf = (s) => DIFFICULTY[s.difficulty];
export const mapOf = (s) => getMap(s.stageId);

export function newId(s) {
  return s.nextId++;
}

export function ev(s, k, o = {}) {
  o.k = k;
  s.events.push(o);
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const d2 = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;

// ───── 군자금 ─────
export function addGold(pl, amount) {
  if (!pl || pl.left) return;
  pl.goldFrac += amount;
  const whole = Math.floor(pl.goldFrac);
  if (whole > 0) {
    pl.gold += whole;
    pl.goldFrac -= whole;
    pl.stats.goldEarned += whole;
  }
}

// p 지정 시 해당 플레이어만, 아니면 공동 수입 (협동: 각자 60%)
export function grant(s, amount, p = -1) {
  if (p >= 0) return addGold(s.players[p], amount);
  const active = s.players.filter((pl) => !pl.left);
  const share = active.length > 1 ? COOP.goldShare : 1;
  for (const pl of active) addGold(pl, amount * share);
}

// ───── 탐지 ─────
export function isTargetable(e) {
  return e.hp > 0 && (!e.stealth || e.revealed);
}

// ───── 피해 ─────
function reduction(v) {
  return clamp(v, 0, 0.9);
}

export function damage(s, e, amt, type, src) {
  if (e.hp <= 0 || amt <= 0) return 0;
  const zero = s.buffs.armorZeroT > 0;
  const armor = zero ? 0 : e.armor;
  const resist = zero ? 0 : e.resist;
  let m = 1;
  if (type === 'phys') m = 1 - reduction(armor - e.shred);
  else if (type === 'fire') m = 1 - reduction((armor - e.shred) * 0.5);
  else if (type === 'holy') m = 1 - reduction(resist - e.rshred);
  const vuln = (e.vulnT > 0 ? e.vulnA : 0) + (s.buffs.vulnT > 0 ? s.buffs.vuln : 0);
  let d = amt * m * (1 + vuln);
  if (e.shield > 0) {
    const ab = Math.min(e.shield, d);
    e.shield -= ab;
    d -= ab;
  }
  e.hp -= d;
  e.hitT = s.time;
  if (src) {
    const pl = s.players[src.p];
    if (pl) pl.stats.damage += d;
    if (src.ref && src.kind === 'tower') src.ref.dmgDone += d;
  }
  if (e.hp <= 0) killEnemy(s, e, src);
  return d;
}

export function aoe(s, x, y, r, amt, type, src, fx = {}) {
  let n = 0;
  const r2 = r * r;
  for (const e of s.enemies) {
    if (e.hp <= 0) continue;
    const dd = (e.x - x) ** 2 + (e.y - y) ** 2;
    if (dd > r2) continue;
    const fall = 1 - 0.4 * Math.sqrt(dd / r2);
    if (fx.stun) applyStun(e, fx.stun);
    if (fx.slow) applySlow(e, fx.slow, fx.slowDur || 1.5);
    if (fx.vuln) applyVuln(e, fx.vuln, fx.vulnDur || 2);
    if (fx.push) knockback(s, e, fx.push);
    damage(s, e, amt * (fx.noFalloff ? 1 : fall), type, src);
    n++;
  }
  return n;
}

export function applySlow(e, amount, dur) {
  if (amount > e.slowA || e.slowT <= 0) {
    e.slowA = amount;
    e.slowT = dur;
  } else if (amount === e.slowA) e.slowT = Math.max(e.slowT, dur);
}

export function applyStun(e, dur) {
  const d = e.tier === 4 ? dur * BOSS_CC : dur;
  e.stunT = Math.max(e.stunT, d);
}

export function applyVuln(e, amount, dur) {
  if (amount >= e.vulnA || e.vulnT <= 0) {
    e.vulnA = amount;
    e.vulnT = Math.max(e.vulnT, dur);
  }
}

export function knockback(s, e, dist) {
  if (e.tier === 4) dist *= 0.4;
  e.d = Math.max(0, e.d - dist);
  if (e.blockedBy) releaseEnemy(s, e);
  placeEnemy(s, e);
}

export function placeEnemy(s, e) {
  const path = mapOf(s).paths[e.path];
  const p = posAt(path, e.d);
  e.x = p.x - p.dy * e.off;
  e.y = p.y + p.dx * e.off;
  e.dx = p.dx;
  e.dy = p.dy;
}

// ───── 적 생성 ─────
export function spawnEnemy(s, type, pathIdx, wave, d = -0.4, extra = {}) {
  const def = ENEMIES[type];
  const stage = stageOf(s);
  const diff = diffOf(s);
  const tac = extra.tactic ? TACTICS[extra.tactic] : null;
  const hpMult =
    stage.hpBase * (def.tier === 4 ? 1 : 1 + stage.hpGrowth * (wave - 1)) * diff.hp * (s.coop ? s.coopHp : 1) * (tac && tac.hpMult ? tac.hpMult : 1);
  const hp = def.hp * hpMult;
  const e = {
    id: newId(s), type, tier: def.tier, path: pathIdx, d, off: randRange(s, -0.2, 0.2),
    x: 0, y: 0, dx: 1, dy: 0,
    hp, maxHp: hp,
    speed: def.speed * diff.speed * (tac && tac.speedMult ? tac.speedMult : 1),
    armor: def.armor + (tac && tac.armorAdd ? tac.armorAdd : 0),
    resist: def.resist + (tac && tac.resistAdd ? tac.resistAdd : 0),
    lives: def.lives, atk: def.atk * (1 + 0.05 * (wave - 1)), wave,
    stealth: !!def.stealth, revealed: !def.stealth, unblockable: !!def.unblockable,
    slowT: 0, slowA: 0, stunT: 0, vulnT: 0, vulnA: 0, burnT: 0, burnDps: 0,
    shred: 0, rshred: 0, auraSlow: 0, haste: 0, hasteT: 0, hasteA: 0,
    blockedBy: 0, atkCd: 1, abT: 3, shield: 0, enraged: false, phase: 0, sutraOwner: 0,
    shotMult: tac && tac.teppoDmg ? tac.teppoDmg : 1,
    bountyMult: extra.bountyMult ?? 1, hitT: -9, chargeT: 0,
  };
  if (def.boss) {
    const b = def.boss;
    if (b.summon) e.abT = b.summon.cd;
    if (b.charge) e.abT = b.charge.cd * 0.6;
    if (b.shield) {
      e.abT = b.shield.cd;
      e.shield = e.maxHp * b.shield.pct;
    }
    if (b.rally) e.abT = b.rally.cd * 0.7;
  }
  if (def.shoot) e.abT = randRange(s, 0.5, def.shoot.cd);
  if (def.heal) e.abT = def.heal.cd;
  placeEnemy(s, e);
  s.enemies.push(e);
  const ws = s.waveStats[wave];
  if (ws) ws.remaining++;
  if (def.tier === 4) ev(s, 'boss', { type, id: e.id });
  return e;
}

export function killEnemy(s, e, src) {
  if (e.dead) return;
  e.hp = 0;
  e.dead = true;
  const def = ENEMIES[e.type];
  const diff = diffOf(s);
  const bounty = def.bounty * diff.bounty * (1 + 0.04 * (e.wave - 1)) * s.goldMult * e.bountyMult;
  grant(s, bounty);
  if (e.sutraOwner) addGold(s.players[e.sutraOwner - 1], 3);
  if (e.blockedBy) releaseEnemy(s, e);
  const isHero = src && src.kind === 'hero';
  if (src) {
    const pl = s.players[src.p];
    if (pl) {
      pl.stats.kills++;
      if (def.tier >= 2) pl.stats.elites++;
      if (def.tier === 4) pl.stats.bossKills++;
      if (isHero) pl.stats.heroKills++;
    }
    if (src.ref && src.kind === 'tower') src.ref.kills++;
  }
  for (const h of s.heroes) {
    if (h.dead) continue;
    const mine = isHero && src.ref === h;
    if (mine || d2(h, e) <= 16) gainXp(s, h, def.bounty * (mine ? 1.5 : 1));
  }
  addResonance(s, isHero ? 1.5 : 0.45);
  if (def.spawnOnDeath) {
    const so = def.spawnOnDeath;
    for (let i = 0; i < so.n; i++) spawnEnemy(s, so.type, e.path, e.wave, Math.max(0, e.d - i * 0.35), { bountyMult: 0.5 });
  }
  ev(s, 'death', { x: e.x, y: e.y, type: e.type, tier: e.tier, id: e.id, f: e.dx < -0.1 ? -1 : 1, g: Math.round(bounty) });
  if (def.tier === 4) {
    ev(s, 'announce', { text: `${def.name} 격퇴!`, sub: def.title, color: '#f0c75e' });
    ev(s, 'sfx', { n: 'victoryGong' });
  }
  waveEnemyGone(s, e.wave);
}

export function waveEnemyGone(s, w) {
  const ws = s.waveStats[w];
  if (!ws) return;
  ws.remaining--;
  checkWaveResolved(s, w);
}

export function checkWaveResolved(s, w) {
  const ws = s.waveStats[w];
  if (!ws || ws.resolved || ws.remaining > 0 || ws.queued > 0) return;
  ws.resolved = true;
  if (ws.leaks === 0) {
    for (const pl of s.players) pl.stats.perfectWaves++;
    if (ws.tactic) {
      const t = TACTICS[ws.tactic];
      grant(s, t.bonus);
      for (const pl of s.players) pl.stats.tacticsBroken++;
      ev(s, 'announce', { text: '전술 파훼!', sub: `${t.name} 격파 · 군자금 +${t.bonus}`, color: '#7fd1ff' });
      ev(s, 'sfx', { n: 'tactic' });
    }
  }
}

export function addResonance(s, v) {
  const r = s.resonance;
  const was = r.gauge;
  r.gauge = Math.min(RESONANCE_MAX, r.gauge + v);
  if (was < RESONANCE_MAX && r.gauge >= RESONANCE_MAX) {
    ev(s, 'resonanceFull');
    ev(s, 'sfx', { n: 'resonance' });
  }
}

// ───── 영웅 ─────
export function recalcHero(h) {
  const def = HEROES[h.heroId];
  const m = heroLevelMult(h.lv, h.metaLv);
  const ratio = h.maxHp ? h.hp / h.maxHp : 1;
  h.maxHp = def.hp * m.hp;
  h.hp = h.maxHp * ratio;
  h.dmg = def.dmg * m.dmg;
  h.skillMult = m.skill;
}

export function gainXp(s, h, xp) {
  h.xp += xp;
  const lv = heroLevelFromXp(h.xp);
  if (lv > h.lv) {
    h.lv = lv;
    recalcHero(h);
    h.hp = Math.min(h.maxHp, h.hp + h.maxHp * 0.3);
    ev(s, 'levelUp', { x: h.x, y: h.y, id: h.id, lv });
  }
}

export function heroPower(h) {
  return h.skillMult * (h.buffs.dmgT > 0 ? 2 : 1);
}

export function hurtHero(s, h, amt) {
  if (h.dead || h.buffs.invulnT > 0 || h.buffs.gwakT > 0) return;
  const dr = h.buffs.drT > 0 ? 0.5 : 0;
  h.hp -= amt * (1 - dr);
  h.hurtT = s.time;
  if (h.hp <= 0) {
    h.hp = 0;
    h.dead = true;
    h.respawn = 12 + h.lv;
    releaseBlocker(s, h.id);
    ev(s, 'heroDown', { x: h.x, y: h.y, id: h.id, heroId: h.heroId });
  }
}

export function hurtSummon(s, m, amt) {
  m.hp -= amt;
  if (m.hp <= 0) {
    m.hp = 0;
    releaseBlocker(s, m.id);
  }
}

// ───── 저지(블록) ─────
export function releaseBlocker(s, blockerId) {
  for (const e of s.enemies) if (e.blockedBy === blockerId) e.blockedBy = 0;
  const b = findBlocker(s, blockerId);
  if (b) b.engaged = [];
}

export function releaseEnemy(s, e) {
  const b = findBlocker(s, e.blockedBy);
  if (b) b.engaged = b.engaged.filter((id) => id !== e.id);
  e.blockedBy = 0;
}

export function findBlocker(s, id) {
  if (!id) return null;
  for (const h of s.heroes) if (h.id === id) return h;
  for (const m of s.summons) if (m.id === id) return m;
  return null;
}

export function findEnemy(s, id) {
  for (const e of s.enemies) if (e.id === id) return e;
  return null;
}

export function addSummon(s, o) {
  const m = {
    id: newId(s), kind: 'militia', owner: 0, x: 0, y: 0, px: 0, py: 0, hp: 200, maxHp: 200, dmg: 14, cd: 0,
    block: 1, engaged: [], life: 12, ...o,
  };
  m.px = m.x;
  m.py = m.y;
  s.summons.push(m);
  return m;
}

export function addProjectile(s, o) {
  const p = { id: newId(s), t: 0, ...o };
  s.projectiles.push(p);
  return p;
}

// 투하형 효과 (유성, 포탄, 한글 자모 등)
export function drop(s, kind, x, y, delay, hit, src, extra = {}) {
  return addProjectile(s, { kind, mode: 'drop', x, y, tx: x, ty: y, dur: delay, hit, src, ...extra });
}

export function randomPointIn(s, x, y, r) {
  const a = rand(s) * Math.PI * 2;
  const rr = Math.sqrt(rand(s)) * r;
  return { x: x + Math.cos(a) * rr, y: y + Math.sin(a) * rr };
}
