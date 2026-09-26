// 온라인 협동: 호스트 → 게스트 상태 스냅샷 (압축 배열) 과 게스트 쪽 복원/보간
import { TOWER_ORDER } from '../data/towers.js';
import { ENEMIES } from '../data/enemies.js';

const ENEMY_IDS = Object.keys(ENEMIES);
const PHASES = ['prep', 'spawn', 'final'];
const PKINDS = ['arrow', 'bolt', 'orb', 'shell', 'bigshell', 'rocket', 'meteor', 'star', 'hangul', 'stone', 'bomb'];
const r2 = (v) => Math.round(v * 100) / 100;
const r1 = (v) => Math.round(v * 10) / 10;

function towerStatic(t) {
  return [t.id, TOWER_ORDER.indexOf(t.type), t.x, t.y, t.level, t.branch || '', t.owner, t.mode, t.synIds, t.kills, t.spent[0] | 0, t.spent[1] | 0, t.dmgDone | 0, t.syn];
}

export class SnapshotEncoder {
  constructor() {
    this.towerSig = '';
  }

  encode(s, events) {
    const T = s.towers.map(towerStatic);
    const sig = JSON.stringify(T.map((x) => [x[0], x[4], x[5], x[6], x[7], x[8]]));
    const sendT = sig !== this.towerSig || s.tick % 60 === 0;
    this.towerSig = sig;
    const b = s.buffs;
    return {
      t: r2(s.time), lv: s.lives, ml: s.maxLives, sp: s.speed, pz: s.paused ? 1 : 0,
      w: [s.wave.n, s.wave.total, PHASES.indexOf(s.wave.phase), r1(s.wave.timer), s.wave.tactic || '', s.wave.nextTactic || ''],
      r: [r1(s.resonance.gauge), r2(s.resonance.press[0]), r2(s.resonance.press[1])],
      b: [r1(b.slowT), r1(b.revealT), r1(b.dmgT), r1(b.armorZeroT), r1(b.vulnT), r1(b.asT)],
      p: s.players.map((p) => [p.gold, p.left ? 1 : 0, p.name, p.skills.map((k) => [k.id, r1(k.cd), r1(k.max), k.lv])]),
      h: s.heroes.map((h) => [
        h.id, h.owner, h.heroId, r2(h.x), r2(h.y), h.hp | 0, h.maxHp | 0, h.lv, h.dead ? 1 : 0, r1(h.respawn), h.facing,
        h.moving ? 1 : 0, h.anim > 0 ? 1 : 0, r1(h.skillCd), r1(h.ultCd),
        (h.buffs.invulnT > 0 ? 1 : 0) | (h.buffs.dmgT > 0 ? 2 : 0) | (h.buffs.drT > 0 ? 4 : 0) | (h.buffs.gwakT > 0 ? 8 : 0), h.xp | 0, h.slot,
      ]),
      e: s.enemies.map((e) => [
        e.id, ENEMY_IDS.indexOf(e.type), r2(e.x), r2(e.y), e.hp | 0, e.maxHp | 0,
        (e.stunT > 0 ? 1 : 0) | (e.slowT > 0 || e.auraSlow > 0.05 ? 2 : 0) | (e.vulnT > 0 ? 4 : 0) | (e.stealth ? 8 : 0) | (e.revealed ? 16 : 0) |
          (e.blockedBy ? 32 : 0) | (e.enraged ? 64 : 0) | (e.swing > 0 ? 128 : 0),
        e.shield | 0, r1(e.dx), r1(e.dy),
      ]),
      T: sendT ? T : null,
      td: s.towers.map((t) => [t.id, r2(t.angle), t.flash > 0 ? 1 : 0, r1(t.disabledT), t.beam, r2(t.beamPow || 0), r2(t.rangeMult || 1)]),
      pr: s.projectiles.map((p) => [PKINDS.indexOf(p.kind), r2(p.x), r2(p.y), r2(p.a || 0), r2(p.k || 0), p.sx !== undefined ? r2(p.sx) : null, p.sy !== undefined ? r2(p.sy) : null, p.hit ? p.hit.r : 0, p.id, p.mode === 'lob' ? 1 : p.mode === 'drop' ? 2 : 0, p.crit ? 1 : 0, p.hue || '']),
      su: s.summons.map((m) => [m.id, m.kind, r2(m.x), r2(m.y), m.hp | 0, m.maxHp | 0, m.anim > 0 ? 1 : 0, m.owner]),
      z: s.zones.map((z) => [z.id, z.kind, r2(z.x), r2(z.y), z.r, r1(z.t), z.max]),
      m: s.movers.map((m) => [m.id, m.kind, r2(m.x), r2(m.y), r2(m.dx), r2(m.dy)]),
      ev: events,
      res: s.result,
    };
  }
}

export function emptyView(opts) {
  return {
    stageId: opts.stageId, difficulty: opts.difficulty, mode: opts.mode, coop: true, time: 0, lives: 20, maxLives: 20, speed: 1, paused: false,
    wave: { n: 0, total: 1, phase: 'prep', timer: -1, tactic: null, nextTactic: null },
    resonance: { gauge: 0, press: [-99, -99] },
    buffs: { slowT: 0, revealT: 0, dmgT: 0, armorZeroT: 0, vulnT: 0, asT: 0 },
    players: [], heroes: [], enemies: [], towers: [], projectiles: [], summons: [], zones: [], movers: [], result: null, events: [],
  };
}

// 스냅샷 적용: 이전 위치를 보간 시작점으로 보관
export function applySnapshot(v, snap) {
  v.time = snap.t;
  v.lives = snap.lv;
  v.maxLives = snap.ml;
  v.speed = snap.sp;
  v.paused = !!snap.pz;
  const [n, total, ph, timer, tactic, nextTactic] = snap.w;
  Object.assign(v.wave, { n, total, phase: PHASES[ph], timer, tactic: tactic || null, nextTactic: nextTactic || null });
  v.resonance = { gauge: snap.r[0], press: [snap.r[1], snap.r[2]] };
  const [slowT, revealT, dmgT, armorZeroT, vulnT, asT] = snap.b;
  v.buffs = { slowT, revealT, dmgT, armorZeroT, vulnT, asT };
  v.players = snap.p.map(([gold, left, name, skills], idx) => ({
    idx, gold, left: !!left, name, skills: skills.map(([id, cd, max, lv]) => ({ id, cd, max, lv })), stats: {},
  }));
  const prevH = new Map(v.heroes.map((h) => [h.id, h]));
  v.heroes = snap.h.map((a) => {
    const [id, owner, heroId, x, y, hp, maxHp, lv, dead, respawn, facing, moving, anim, skillCd, ultCd, bm, xp, slot] = a;
    const p = prevH.get(id);
    return {
      id, owner, heroId, x: p ? p.x : x, y: p ? p.y : y, _x0: p ? p.x : x, _y0: p ? p.y : y, _x1: x, _y1: y,
      hp, maxHp, lv, dead: !!dead, respawn, facing, moving: !!moving, anim: anim ? 0.2 : 0, skillCd, ultCd, xp, slot,
      buffs: { invulnT: bm & 1 ? 1 : 0, dmgT: bm & 2 ? 1 : 0, drT: bm & 4 ? 1 : 0, gwakT: bm & 8 ? 1 : 0 },
    };
  });
  const prevE = new Map(v.enemies.map((e) => [e.id, e]));
  v.enemies = snap.e.map(([id, ti, x, y, hp, maxHp, f, shield, dx, dy]) => {
    const p = prevE.get(id);
    const type = ENEMY_IDS[ti];
    return {
      id, type, tier: ENEMIES[type].tier, x: p ? p.x : x, y: p ? p.y : y, _x0: p ? p.x : x, _y0: p ? p.y : y, _x1: x, _y1: y,
      hp, maxHp, stunT: f & 1 ? 1 : 0, slowT: f & 2 ? 1 : 0, auraSlow: 0, vulnT: f & 4 ? 1 : 0, stealth: !!(f & 8), revealed: !!(f & 16),
      blockedBy: f & 32 ? 1 : 0, enraged: !!(f & 64), swing: f & 128 ? 0.2 : 0, shield, dx, dy,
    };
  });
  if (snap.T) {
    const prevT = new Map(v.towers.map((t) => [t.id, t]));
    v.towers = snap.T.map(([id, ti, x, y, level, branch, owner, mode, synIds, kills, s0, s1, dmgDone, syn]) => ({
      ...(prevT.get(id) || {}), id, type: TOWER_ORDER[ti], x, y, level, branch: branch || null, owner, mode, synIds, kills, spent: [s0, s1], dmgDone, syn,
    }));
  }
  const byId = new Map(v.towers.map((t) => [t.id, t]));
  for (const [id, angle, flash, disabledT, beam, beamPow, rangeMult] of snap.td) {
    const t = byId.get(id);
    if (!t) continue;
    Object.assign(t, { angle, flash: flash ? 0.1 : 0, disabledT, beam, beamPow, rangeMult });
  }
  v.projectiles = snap.pr.map(([ki, x, y, a, k, sx, sy, r, id, mode, crit, hue]) => ({
    kind: PKINDS[ki], x, y, a, k, sx: sx ?? undefined, sy: sy ?? undefined, hit: { r }, id, mode: mode === 1 ? 'lob' : mode === 2 ? 'drop' : 'homing', crit: !!crit, hue,
  }));
  v.summons = snap.su.map(([id, kind, x, y, hp, maxHp, anim, owner]) => ({ id, kind, x, y, hp, maxHp, anim: anim ? 0.2 : 0, owner }));
  v.zones = snap.z.map(([id, kind, x, y, r, t, max]) => ({ id, kind, x, y, r, t, max }));
  v.movers = snap.m.map(([id, kind, x, y, dx, dy]) => ({ id, kind, x, y, dx, dy }));
  v.result = snap.res;
}

// 스냅샷 사이 보간 (a: 0~1)
export function lerpView(v, a) {
  const k = Math.max(0, Math.min(1, a));
  for (const o of v.enemies) {
    o.x = o._x0 + (o._x1 - o._x0) * k;
    o.y = o._y0 + (o._y1 - o._y0) * k;
  }
  for (const o of v.heroes) {
    o.x = o._x0 + (o._x1 - o._x0) * k;
    o.y = o._y0 + (o._y1 - o._y0) * k;
  }
}
