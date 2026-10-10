// 게임 시뮬레이션 코어.
// - 상태(state)는 순수 JSON 객체 (온라인 협동 시 호스트가 스냅샷으로 전송)
// - 모든 조작은 명령(command)으로 들어온다: 솔로 / 로컬 2P / 온라인 모두 같은 경로
import { TOWERS, towerBase, SELL_RATE, SYNERGY_RANGE, SYNERGY_BONUS } from '../data/towers.js';
import { ENEMIES } from '../data/enemies.js';
import { HEROES } from '../data/heroes.js';
import { SKILLS, skillCdMult } from '../data/skills.js';
import { TACTICS, TACTIC_ORDER, TACTIC_CHANCE, TACTIC_MIN_WAVE } from '../data/tactics.js';
import { STAGE_BY_ID, STAGES, DIFFICULTY, COOP, parseWave } from '../data/stages.js';
import { TOWER_META_BONUS, metaRangeMult, metaAsMult, metaCost } from '../data/quests.js';
import { ITEMS, ITEM_PER_BATTLE, ITEM_CD } from '../data/items.js';
import { getMap, posAt, tileAt, nearestOnPath, T_BUILD } from './map.js';
import { rand, randInt, makeRng } from './rng.js';
import {
  ev, actionCue, d2, clamp, mapOf, stageOf, damage, aoe, applySlow, applyStun, applyVuln, spawnEnemy, grant, addGold,
  isTargetable, hurtHero, hurtSummon, releaseBlocker, releaseEnemy, findEnemy, findBlocker, recalcHero,
  addProjectile, drop, knockback, waveEnemyGone, checkWaveResolved, addResonance, MAX_SLOW, BOSS_SLOW, newId, randomPointIn, addSummon,
} from './combat.js';
import { castHeroSkill, castHeroUlt, castEquipSkill, pressCombo, AHN_BOSS_MULT } from './abilities.js';

export const DT = 1 / 60;
export const PREP_TIME = 18;
export const FIRST_PREP = 30; // 첫 파도도 누르지 않으면 이만큼 뒤에 저절로 온다
// 급보: 한 판에 한 번, 이 확률로 조선 전령이 적의 길을 따라 성으로 달려와 모두에게 군자금을 준다
export const COURIER_CHANCE = 0.05;
export const COURIER_SPEED = 3.4; // 칸/초 (가장 빠른 척후병의 두 배쯤)
export const COURIER_GOLD = [100, 500]; // 10냥 단위
export const EARLY_BONUS_PER_SEC = 2;
const BLOCK_R = 0.55;

export function createGame(opts) {
  const stage = STAGE_BY_ID[opts.stageId];
  const diff = DIFFICULTY[opts.difficulty || 'normal'];
  const coop = opts.mode !== 'solo';
  const map = getMap(stage.id);
  const seed = (opts.seed ?? 12345) >>> 0;
  const s = {
    v: 1, stageId: stage.id, difficulty: opts.difficulty || 'normal', mode: opts.mode || 'solo', coop,
    coopHp: COOP.hpMult, seed, rng: seed, tick: 0, time: 0, nextId: 1, speed: 1, paused: false,
    lives: diff.lives, maxLives: diff.lives, goldMult: 1,
    players: [], heroes: [], towers: [], enemies: [], projectiles: [], summons: [], zones: [], movers: [],
    wave: { n: 0, total: stage.waves.length, phase: 'prep', timer: FIRST_PREP, queue: [], tactic: null, nextTactic: null, alt: 0 },
    waveStats: {},
    resonance: { gauge: 0, press: [-99, -99] },
    buffs: { dmgT: 0, dmg: 0, asT: 0, as: 0, slowT: 0, slow: 0, revealT: 0, vulnT: 0, vuln: 0, armorZeroT: 0 },
    events: [], cmds: [], result: null,
  };
  if (opts.hpBase) s.hpBase = opts.hpBase; // 밸런스 도구용 덮어쓰기
  s.courier = planCourier(seed, stage, map, opts.courier);
  const startGold = coop ? Math.round(stage.startGold * COOP.startGoldShare) : stage.startGold;
  opts.players.forEach((p, i) => {
    s.players.push({
      idx: i, name: p.name || `P${i + 1}`, gold: startGold, goldFrac: 0, left: false,
      towers: p.towers || Object.keys(TOWERS), towerLv: p.towerLv || {},
      skills: (p.skills || []).map((id) => {
        const lv = (p.skillLv && p.skillLv[id]) || 0;
        return { id, lv, cd: SKILLS[id].cd * 0.35, max: SKILLS[id].cd * skillCdMult(lv) };
      }),
      // 보급품: 가진 개수와 상관없이 종류별로 전투마다 ITEM_PER_BATTLE개까지
      items: Object.fromEntries(Object.entries(p.items || {}).filter(([id, n]) => ITEMS[id] && n > 0).map(([id, n]) => [id, Math.min(ITEM_PER_BATTLE, n | 0)])),
      itemCd: 0,
      stats: {
        kills: 0, elites: 0, bossKills: 0, heroKills: 0, builds: 0, branches: 0, skillsUsed: 0, combos: 0,
        earlyCalls: 0, perfectWaves: 0, tacticsBroken: 0, damage: 0, goldEarned: 0, itemsUsed: 0,
      },
    });
  });
  // 영웅 배치: 기지 쪽 경로 위
  let hi = 0;
  opts.players.forEach((p, pi) => {
    for (const heroId of p.heroes) {
      const path = map.paths[Math.min(hi, map.paths.length - 1)];
      const q = posAt(path, Math.max(1, path.total * (0.62 - hi * 0.12)));
      const h = {
        id: newId(s), owner: pi, slot: hi, heroId, skin: (p.skins && p.skins[heroId]) || null, metaLv: (p.heroLv && p.heroLv[heroId]) || 0, lv: 1, xp: 0,
        x: q.x + 0.6, y: q.y - 0.6, tx: 0, ty: 0, post: null, facing: 1, hp: 0, maxHp: 0, dmg: 0, skillMult: 1,
        cd: 0, skillCd: 2, ultCd: HEROES[heroId].ult.cd * 0.5, dead: false, respawn: 0, engaged: [], atkCount: 0,
        anim: 0, moving: false, hurtT: -9, buffs: { invulnT: 0, dmgT: 0, drT: 0, gwakT: 0 },
      };
      h.tx = h.x;
      h.ty = h.y;
      h.post = { x: h.x, y: h.y };
      recalcHero(h);
      h.hp = h.maxHp;
      s.heroes.push(h);
      hi++;
    }
  });
  if (s.heroes.some((h) => h.heroId === 'sejong')) s.goldMult = 1.1;
  return s;
}

export function queueCommand(s, cmd) {
  s.cmds.push(cmd);
}

// ───────────────────────── 명령 처리 ─────────────────────────
function canControlHero(s, p, h) {
  return h && (h.owner === p || s.players[h.owner].left);
}

export function applyCommand(s, c) {
  const pl = s.players[c.p];
  if (!pl || pl.left) return;
  switch (c.t) {
    case 'build': return cmdBuild(s, pl, c);
    case 'upgrade': return cmdUpgrade(s, pl, c);
    case 'sell': return cmdSell(s, pl, c);
    case 'target': {
      const t = s.towers.find((x) => x.id === c.id);
      if (t && ['first', 'last', 'strong', 'close'].includes(c.mode)) t.mode = c.mode;
      return;
    }
    case 'move': {
      const h = s.heroes[c.h];
      if (!canControlHero(s, c.p, h) || h.dead) return;
      h.tx = clamp(c.x, 0.3, mapOf(s).w - 0.3);
      h.ty = clamp(c.y, 0.3, mapOf(s).h - 0.3);
      h.post = { x: h.tx, y: h.ty };
      return;
    }
    case 'heroSkill': {
      const h = s.heroes[c.h];
      if (!canControlHero(s, c.p, h) || h.dead || h.skillCd > 0) return;
      h.skillCd = HEROES[h.heroId].skill.cd;
      h.anim = 0.35; actionCue(s, h, h.anim);
      castHeroSkill(s, h, c.x, c.y);
      return;
    }
    case 'heroUlt': {
      const h = s.heroes[c.h];
      if (!canControlHero(s, c.p, h) || h.dead || h.ultCd > 0) return;
      h.ultCd = HEROES[h.heroId].ult.cd;
      h.anim = 0.5; actionCue(s, h, h.anim);
      castHeroUlt(s, h, c.x, c.y);
      return;
    }
    case 'skill': {
      const slot = pl.skills[c.slot];
      if (!slot || slot.cd > 0) return;
      slot.cd = slot.max;
      castEquipSkill(s, pl, slot, c.x, c.y);
      return;
    }
    case 'combo': return pressCombo(s, c.p);
    case 'item': return cmdItem(s, pl, c);
    case 'nextWave': return cmdNextWave(s, pl);
    case 'sendGold': {
      const to = s.players[1 - c.p];
      const amt = Math.floor(Math.min(c.amount, pl.gold));
      if (!to || to.left || amt <= 0) return;
      pl.gold -= amt;
      to.gold += amt;
      ev(s, 'toast', { p: -1, text: `${pl.name} → ${to.name} 군자금 ${amt} 지원` });
      ev(s, 'sfx', { n: 'coin' });
      return;
    }
    case 'ping':
      ev(s, 'ping', { p: c.p, x: c.x, y: c.y });
      ev(s, 'sfx', { n: 'ping' });
      return;
    case 'leave': {
      // 동료 이탈: 남은 사람이 영웅·유산·군자금을 넘겨받는다
      const other = s.players.find((o) => o !== pl && !o.left);
      pl.left = true;
      if (other) {
        other.gold += pl.gold;
        pl.gold = 0;
        for (const t of s.towers) if (t.owner === pl.idx) t.owner = other.idx;
        for (const h of s.heroes) if (h.owner === pl.idx) h.owner = other.idx;
        ev(s, 'toast', { p: -1, text: `${pl.name} 이탈 — ${other.name}이(가) 지휘를 넘겨받습니다` });
      }
      return;
    }
  }
}

function cmdBuild(s, pl, c) {
  const def = TOWERS[c.tower];
  if (!def || !pl.towers.includes(c.tower)) return;
  const map = mapOf(s);
  if (tileAt(map, c.x, c.y) !== T_BUILD) return;
  if (s.towers.some((t) => t.x === c.x && t.y === c.y)) return;
  const cost = metaCost(def.levels[0].cost, pl.towerLv[c.tower] || 0);
  if (pl.gold < cost) return ev(s, 'toast', { p: pl.idx, text: '군자금이 부족합니다' });
  pl.gold -= cost;
  const t = {
    id: newId(s), type: c.tower, x: c.x, y: c.y, cx: c.x + 0.5, cy: c.y + 0.5, level: 1, branch: null,
    owner: pl.idx, cd: 0.4, angle: -Math.PI / 2, spent: [0, 0], kills: 0, dmgDone: 0, shots: 0,
    ramp: 0, beam: [], disabledT: 0, flash: 0, mode: def.kind === 'beam' || def.kind === 'pagoda' ? 'strong' : 'first',
    syn: 0, synIds: [], bDmg: 0, bAs: 0, bRange: 0, metaLv: pl.towerLv[c.tower] || 0, built: s.time,
  };
  if (def.kind === 'barracks') {
    // 병사를 세울 길목: 유산에서 가장 가까운 길 위 지점
    const np = nearestOnPath(map, t.cx, t.cy);
    t.rally = np ? { path: np.path, d: np.d, dist: np.dist } : null;
    t.respawnT = 0;
  }
  t.spent[pl.idx] = cost;
  s.towers.push(t);
  pl.stats.builds++;
  recomputeSynergy(s);
  ev(s, 'build', { x: t.cx, y: t.cy, type: t.type, p: pl.idx });
  ev(s, 'sfx', { n: 'build' });
}

function cmdUpgrade(s, pl, c) {
  const t = s.towers.find((x) => x.id === c.id);
  if (!t || t.branch) return;
  const def = TOWERS[t.type];
  let cost;
  const mlv = pl.towerLv[t.type] || 0;
  if (t.level < def.levels.length) {
    cost = metaCost(def.levels[t.level].cost, mlv);
    if (pl.gold < cost) return ev(s, 'toast', { p: pl.idx, text: '군자금이 부족합니다' });
    t.level++;
  } else {
    if (!def.branches[c.branch]) return;
    cost = metaCost(def.branches[c.branch].cost, mlv);
    if (pl.gold < cost) return ev(s, 'toast', { p: pl.idx, text: '군자금이 부족합니다' });
    t.branch = c.branch;
    if (def.branches[c.branch].target) t.mode = def.branches[c.branch].target;
    pl.stats.branches++;
  }
  pl.gold -= cost;
  t.spent[pl.idx] += cost;
  if (def.kind === 'barracks') t.respawnT = 0; // 늘어난 자리는 바로 채운다
  recomputeSynergy(s);
  ev(s, 'upgrade', { x: t.cx, y: t.cy, type: t.type, branch: t.branch, level: t.level });
  ev(s, 'sfx', { n: 'upgrade' });
}

// 보급품 사용
function cmdItem(s, pl, c) {
  const def = ITEMS[c.id];
  if (!def || !pl.items || !(pl.items[c.id] > 0) || pl.itemCd > 0 || s.result) return;
  pl.items[c.id]--;
  pl.itemCd = ITEM_CD;
  pl.stats.itemsUsed++;
  const src = { p: pl.idx, kind: 'skill' };
  const map = mapOf(s);
  switch (c.id) {
    case 'insam':
      s.lives += def.lives;
      s.maxLives = Math.max(s.maxLives, s.lives);
      ev(s, 'announce', { text: '산삼', sub: `민심 +${def.lives}`, color: '#8fe3a0' });
      ev(s, 'heal', { x: map.base.x, y: map.base.y });
      ev(s, 'sfx', { n: 'heal' });
      break;
    case 'chest':
      addGold(pl, def.gold);
      ev(s, 'toast', { p: pl.idx, text: `${def.name}: 군자금 +${def.gold}냥` });
      ev(s, 'sfx', { n: 'coin' });
      break;
    case 'hwacha': {
      const x = clamp(+c.x || 0, 0, map.w);
      const y = clamp(+c.y || 0, 0, map.h);
      for (let i = 0; i < def.n; i++) {
        const q = randomPointIn(s, x, y, def.radius);
        drop(s, 'rocket', q.x, q.y, 0.3 + i * 0.045, { r: 0.6, dmg: def.dmg, type: 'fire', stun: def.stun }, src, { sx: x - 4, sy: y - 7 });
      }
      ev(s, 'sfx', { n: 'rockets' });
      break;
    }
    case 'bujeok': {
      const pts = [];
      for (const e of s.enemies) {
        if (e.hp <= 0) continue;
        applyStun(e, def.freeze);
        e.iceT = e.stunT;
        pts.push([Math.round(e.x * 10) / 10, Math.round(e.y * 10) / 10]);
      }
      ev(s, 'freeze', { pts });
      ev(s, 'announce', { text: def.name, sub: '모든 왜군이 얼어붙었다', color: '#bfe6ff' });
      ev(s, 'sfx', { n: 'ice' });
      break;
    }
  }
}

function cmdSell(s, pl, c) {
  const i = s.towers.findIndex((x) => x.id === c.id);
  if (i < 0) return;
  const t = s.towers[i];
  if (t.owner !== pl.idx) return ev(s, 'toast', { p: pl.idx, text: '자기 유산만 철거할 수 있습니다' });
  t.spent.forEach((v, pi) => addGold(s.players[pi], v * SELL_RATE));
  s.towers.splice(i, 1);
  for (const m of s.summons) {
    if (m.tower !== t.id) continue;
    m.hp = 0;
    releaseBlocker(s, m.id);
  }
  recomputeSynergy(s);
  ev(s, 'sell', { x: t.cx, y: t.cy });
  ev(s, 'sfx', { n: 'coin' });
}

function cmdNextWave(s, pl) {
  const w = s.wave;
  if (w.phase !== 'prep' || w.n >= w.total) return;
  // 조기 출정 보너스는 둘째 파도부터 (첫 파도는 바로 불러도 군자금이 늘지 않는다)
  if (w.timer > 0 && w.n > 0) {
    const bonus = Math.floor(w.timer * EARLY_BONUS_PER_SEC);
    if (bonus > 0) {
      grant(s, bonus);
      ev(s, 'toast', { p: -1, text: `조기 출정 보너스 +${bonus}` });
    }
    pl.stats.earlyCalls++;
  }
  startWave(s);
}

// 유산 공명: 같은 계열의 "다른" 유산이 2칸 안에 있으면 1종당 +12%
export function recomputeSynergy(s) {
  for (const t of s.towers) {
    const cat = TOWERS[t.type].cat;
    const partners = new Map();
    for (const o of s.towers) {
      if (o === t || o.type === t.type || TOWERS[o.type].cat !== cat) continue;
      if (Math.max(Math.abs(o.x - t.x), Math.abs(o.y - t.y)) > SYNERGY_RANGE) continue;
      if (!partners.has(o.type)) partners.set(o.type, o.id);
    }
    t.syn = partners.size;
    t.synIds = [...partners.values()];
  }
}

// ───────────────────────── 파도 ─────────────────────────
function isBossWave(s, n) {
  const str = stageOf(s).waves[n - 1] || '';
  return parseWave(str).some((g) => ENEMIES[g.type] && ENEMIES[g.type].tier === 4);
}

function rollTactic(s, n) {
  if (n < TACTIC_MIN_WAVE || isBossWave(s, n)) return null;
  if (rand(s) >= TACTIC_CHANCE) return null;
  const stageNum = STAGES.findIndex((x) => x.id === s.stageId) + 1;
  const pool = TACTIC_ORDER.filter((id) => TACTICS[id].minStage <= stageNum && id !== s.wave.tactic);
  return pool[randInt(s, pool.length)];
}

// 급보 계획: 주 난수(s.rng)를 건드리지 않도록 시드에서 따로 뽑는다 (밸런스 결과가 흔들리지 않게).
// force: true 면 반드시, false 면 절대 (시험 · 도구용)
function planCourier(seed, stage, map, force) {
  const r = makeRng((seed ^ 0x51ab1e) >>> 0);
  const roll = r();
  if (force === false || (force !== true && roll >= COURIER_CHANCE)) return null;
  const total = stage.waves.length;
  const [lo, hi] = COURIER_GOLD;
  return {
    wave: 2 + Math.floor(r() * Math.max(1, total - 3)), // 둘째 ~ 끝에서 둘째 파도 사이
    delay: 3 + r() * 8,
    path: Math.floor(r() * map.paths.length),
    gold: lo + Math.floor(r() * ((hi - lo) / 10 + 1)) * 10,
    at: -1,
    sent: false,
    done: false,
  };
}

export function startWave(s) {
  const w = s.wave;
  const n = ++w.n;
  if (s.courier && s.courier.at < 0 && n >= s.courier.wave) s.courier.at = s.time + s.courier.delay;
  const map = mapOf(s);
  const nPaths = map.paths.length;
  const tactic = w.nextTactic;
  w.tactic = tactic;
  w.nextTactic = null;
  const groups = parseWave(stageOf(s).waves[n - 1]);
  if (tactic && TACTICS[tactic].add) {
    for (const a of TACTICS[tactic].add) groups.push({ type: a.type, n: a.n, gap: a.gap, delay: a.delay ?? 2, path: 'a', tactic: true });
  }
  let count = 0;
  for (const g of groups) {
    for (let i = 0; i < g.n; i++) {
      const path = g.path === 'a' ? w.alt++ % nPaths : Math.min(g.path, nPaths - 1);
      w.queue.push({ at: s.time + g.delay + i * g.gap, type: g.type, path, wave: n });
      count++;
    }
  }
  w.queue.sort((a, b) => a.at - b.at);
  s.waveStats[n] = { remaining: 0, queued: count, leaks: 0, tactic, resolved: false };
  w.phase = 'spawn';
  w.timer = 0;
  // 파도 시작 수입
  if (n > 1) grant(s, 20 + 4 * n);
  for (const t of s.towers) {
    if (t.type !== 'gyeongbok') continue;
    const st = towerBase(t.type, t.level, t.branch);
    const owner = s.players[t.owner];
    addGold(owner, st.income * (1 + TOWER_META_BONUS * t.metaLv));
    if (st.interest) addGold(owner, Math.min(st.interestCap, Math.floor(owner.gold * st.interest)));
    ev(s, 'income', { x: t.cx, y: t.cy, amount: st.income });
  }
  ev(s, 'wave', { n, tactic, boss: isBossWave(s, n) });
  ev(s, 'sfx', { n: isBossWave(s, n) ? 'bossWave' : 'wave' });
}

function updateWave(s) {
  const w = s.wave;
  while (w.queue.length && w.queue[0].at <= s.time) {
    const q = w.queue.shift();
    spawnEnemy(s, q.type, q.path, q.wave, -0.4, { tactic: s.waveStats[q.wave].tactic });
    s.waveStats[q.wave].queued--;
  }
  if (w.phase === 'spawn' && w.queue.length === 0) {
    if (w.n < w.total) {
      w.phase = 'prep';
      w.timer = PREP_TIME;
      w.nextTactic = rollTactic(s, w.n + 1);
    } else {
      w.phase = 'final';
    }
  } else if (w.phase === 'prep' && w.timer > 0) {
    w.timer -= DT;
    if (w.timer <= 0) startWave(s);
  }
}

// ───────────────────────── 메인 스텝 ─────────────────────────
export function step(s) {
  if (s.result) return;
  for (const c of s.cmds) applyCommand(s, c);
  s.cmds.length = 0;
  if (s.paused) return;
  s.tick++;
  s.time += DT;
  updateWave(s);
  updateBuffs(s);
  updateAuras(s);
  updateTowerBuffs(s);
  updateEnemies(s);
  updateHeroes(s);
  updateSummons(s);
  updateBlocking(s);
  updateTowers(s);
  updateProjectiles(s);
  updateZones(s);
  updateMovers(s);
  cleanup(s);
  checkEnd(s);
}

function updateBuffs(s) {
  const b = s.buffs;
  for (const k of ['dmgT', 'asT', 'slowT', 'revealT', 'vulnT', 'armorZeroT']) if (b[k] > 0) b[k] -= DT;
  for (const pl of s.players) {
    for (const sl of pl.skills) if (sl.cd > 0) sl.cd -= DT;
    if (pl.itemCd > 0) pl.itemCd -= DT;
  }
  if (s.wave.n > 0 && s.wave.phase !== 'prep') addResonance(s, 0.25 * DT);
}

// 매 틱 초기화 후 다시 계산되는 오라 효과 (해인사, 을지문덕, 진군 고수, 탐지)
function updateAuras(s) {
  const reveal = s.buffs.revealT > 0;
  for (const e of s.enemies) {
    e.shred = 0;
    e.rshred = 0;
    e.auraSlow = 0;
    e.haste = e.hasteT > 0 ? e.hasteA : 0;
    e.sutraOwner = 0;
    e.revealed = !e.stealth || reveal;
  }
  for (const e of s.enemies) {
    const def = ENEMIES[e.type];
    if (!def.haste || e.hp <= 0) continue;
    const r2 = def.haste.range ** 2;
    for (const o of s.enemies) if (o !== e && d2(o, e) <= r2) o.haste = Math.max(o.haste, def.haste.mult);
  }
  for (const h of s.heroes) {
    if (h.dead) continue;
    const def = HEROES[h.heroId];
    if (h.heroId === 'eulji') for (const e of s.enemies) if (d2(e, h) <= 6.25) e.shred = Math.max(e.shred, 0.2);
    if (def.detect) {
      const r2 = def.detect ** 2;
      for (const e of s.enemies) if (e.stealth && d2(e, h) <= r2) e.revealed = true;
    }
  }
  for (const t of s.towers) {
    const def = TOWERS[t.type];
    if (t.disabledT > 0) continue;
    const st = towerBase(t.type, t.level, t.branch);
    if (def.detect) {
      const r = st.range * (st.detectMult || 1);
      const r2 = r * r;
      const c = { x: t.cx, y: t.cy };
      for (const e of s.enemies) if (e.stealth && d2(e, c) <= r2) e.revealed = true;
    }
    if (def.kind === 'sutra') {
      const r2 = st.range ** 2;
      const c = { x: t.cx, y: t.cy };
      for (const e of s.enemies) {
        if (d2(e, c) > r2) continue;
        e.shred = Math.max(e.shred, st.shred);
        if (st.rshred) e.rshred = Math.max(e.rshred, st.rshred);
        e.auraSlow = Math.max(e.auraSlow, st.slow);
        if (st.killGold) e.sutraOwner = t.owner + 1;
      }
    }
  }
}

function updateTowerBuffs(s) {
  const b = s.buffs;
  const night = s.wave.tactic === 'night' && s.wave.phase !== 'prep';
  for (const t of s.towers) {
    t.bDmg = 0;
    t.bAs = 0;
    t.bRange = 0;
  }
  for (const p of s.towers) {
    if (p.type !== 'gyeongbok' || p.disabledT > 0) continue;
    const st = towerBase(p.type, p.level, p.branch);
    const synBoost = 1 + 0.25 * p.syn;
    const r2 = st.range ** 2;
    for (const t of s.towers) {
      if (t === p || t.type === 'gyeongbok') continue;
      if ((t.cx - p.cx) ** 2 + (t.cy - p.cy) ** 2 > r2) continue;
      t.bDmg = Math.max(t.bDmg, st.buffDmg * synBoost);
      t.bAs = Math.max(t.bAs, st.buffAs * synBoost);
      t.bRange = Math.max(t.bRange, st.buffRange || 0);
    }
  }
  const yiAura = s.heroes.filter((h) => h.heroId === 'yi' && !h.dead);
  for (const t of s.towers) {
    let as = t.bAs + (b.asT > 0 ? b.as : 0);
    for (const h of yiAura) if ((t.cx - h.x) ** 2 + (t.cy - h.y) ** 2 <= 6.25) as += 0.12;
    t.asMult = (1 + as) * metaAsMult(t.metaLv);
    t.dmgMult = (1 + t.bDmg + t.syn * SYNERGY_BONUS + (b.dmgT > 0 ? b.dmg : 0)) * (1 + TOWER_META_BONUS * t.metaLv);
    t.rangeMult = (1 + t.bRange) * (night ? 0.85 : 1) * metaRangeMult(t.metaLv);
  }
}

// ───────────────────────── 적 ─────────────────────────
function updateEnemies(s) {
  const map = mapOf(s);
  for (const e of s.enemies) {
    if (e.hp <= 0) continue;
    const def = ENEMIES[e.type];
    if (e.swing > 0) e.swing = Math.max(0, e.swing - DT);
    if (e.slowT > 0) e.slowT -= DT;
    if (e.stunT > 0) e.stunT -= DT;
    if (e.iceT > 0) e.iceT -= DT;
    if (e.vulnT > 0) e.vulnT -= DT;
    if (e.hasteT > 0) e.hasteT -= DT;
    if (e.chargeT > 0) e.chargeT -= DT;
    if (e.burnT > 0) {
      e.burnT -= DT;
      damage(s, e, e.burnDps * DT, 'fire', e.burnSrc);
      if (e.hp <= 0) continue;
    }
    if (e.stunT <= 0) enemyAbilities(s, e, def);
    if (e.hp <= 0) continue;
    if (def.enrage && !e.enraged && e.hp < e.maxHp * def.enrage.at) {
      e.enraged = true;
      e.speed *= def.enrage.speed;
      ev(s, 'enrage', { x: e.x, y: e.y });
    }
    if (e.stunT > 0) continue;
    if (e.blockedBy) {
      const b = findBlocker(s, e.blockedBy);
      if (!b || b.hp <= 0 || b.dead) {
        e.blockedBy = 0;
      } else {
        e.atkCd -= DT;
        if (e.atkCd <= 0) {
          e.atkCd = 1;
          if (b.heroId) hurtHero(s, b, e.atk);
          else hurtSummon(s, b, e.atk * (b.tower && e.tier === 4 ? 2 : 1));
          e.swing = 0.25; actionCue(s, e, e.swing);
          ev(s, 'enemyStrike', { enemy: e.id, x1: e.x, y1: e.y, x2: b.x, y2: b.y });
        }
        continue;
      }
    }
    let slow = Math.max(e.slowT > 0 ? e.slowA : 0, e.auraSlow, s.buffs.slowT > 0 ? s.buffs.slow : 0);
    if (e.tier === 4) slow *= BOSS_SLOW;
    slow = Math.min(slow, MAX_SLOW);
    const charge = e.chargeT > 0 ? ENEMIES[e.type].boss.charge.mult : 1;
    const v = e.speed * (1 - slow) * (1 + e.haste) * charge;
    e.d += v * DT;
    const path = map.paths[e.path];
    if (e.d >= path.total) {
      leak(s, e);
      continue;
    }
    const p = posAt(path, e.d);
    e.x = p.x - p.dy * e.off;
    e.y = p.y + p.dx * e.off;
    e.dx = p.dx;
    e.dy = p.dy;
  }
}

function leak(s, e) {
  e.hp = 0;
  e.dead = true;
  e.leaked = true;
  s.lives -= e.lives;
  const ws = s.waveStats[e.wave];
  if (ws) ws.leaks++;
  ev(s, 'leak', { x: e.x, y: e.y, lives: e.lives, type: e.type });
  ev(s, 'sfx', { n: 'leak' });
  waveEnemyGone(s, e.wave);
}

function enemyAbilities(s, e, def) {
  if (def.heal) {
    e.abT -= DT;
    if (e.abT <= 0) {
      e.abT = def.heal.cd;
      const r2 = def.heal.range ** 2;
      let healed = 0;
      for (const o of s.enemies) {
        // 치유는 겹치지 않는다: 한 적은 2.5초에 한 번만 회복
        if (o.hp <= 0 || d2(o, e) > r2 || o.hp >= o.maxHp || s.time - (o.healT ?? -9) < 2.5) continue;
        o.hp = Math.min(o.maxHp, o.hp + o.maxHp * def.heal.pct * (o.tier === 4 ? 0.3 : 1));
        o.healT = s.time;
        healed++;
      }
      if (healed) {e.swing = .25;actionCue(s, e, e.swing);ev(s, 'enemyHeal', { enemy: e.id, x: e.x, y: e.y, r: def.heal.range });}
    }
  }
  if (def.shoot) {
    e.abT -= DT;
    if (e.abT <= 0) {
      const r2 = def.shoot.range ** 2;
      let tgt = null;
      let bd = Infinity;
      for (const h of s.heroes) {
        if (h.dead) continue;
        const dd = d2(h, e);
        if (dd <= r2 && dd < bd) {
          bd = dd;
          tgt = h;
        }
      }
      for (const m of s.summons) {
        if (m.hp <= 0 || m.kind === 'wall') continue;
        const dd = d2(m, e);
        if (dd <= r2 && dd < bd) {
          bd = dd;
          tgt = m;
        }
      }
      if (tgt) {
        const dmg = def.shoot.dmg * e.shotMult * (1 + 0.05 * (e.wave - 1));
        if (tgt.heroId) hurtHero(s, tgt, dmg);
        else hurtSummon(s, tgt, dmg);
        e.swing = .25; actionCue(s, e, e.swing);
        ev(s, 'shot', { enemy: e.id, x1: e.x, y1: e.y, x2: tgt.x, y2: tgt.y });
        e.abT = def.shoot.cd;
      } else e.abT = 0.3;
    }
  }
  if (def.boss) bossAbilities(s, e, def.boss);
}

function bossAbilities(s, e, b) {
  const ab = e.ab || (e.ab = {});
  const tick = (k) => {
    ab[k] = (ab[k] ?? 3) - DT;
    return ab[k] <= 0;
  };
  if (b.summon && tick('summon')) {
    ab.summon = b.summon.cd;
    for (let i = 0; i < b.summon.n; i++) spawnEnemy(s, b.summon.type, e.path, e.wave, Math.max(0, e.d - 0.5 - i * 0.3), { bountyMult: 0.5 });
    ev(s, 'bossSkill', { x: e.x, y: e.y, text: b.summon.text || '선봉대 소집!' });
  }
  if (b.charge) {
    if (tick('charge')) {
      ab.charge = b.charge.cd;
      e.chargeT = b.charge.dur;
      if (e.blockedBy) releaseEnemy(s, e);
      let best = null;
      let bd = b.disable.range ** 2;
      for (const t of s.towers) {
        const dd = (t.cx - e.x) ** 2 + (t.cy - e.y) ** 2;
        if (dd <= bd) {
          bd = dd;
          best = t;
        }
      }
      if (best) {
        best.disabledT = b.disable.dur;
        ev(s, 'disable', { x1: e.x, y1: e.y, x2: best.cx, y2: best.cy });
      }
      ev(s, 'bossSkill', { x: e.x, y: e.y, text: b.charge.text || '창 돌격!' });
    }
  }
  if (b.shield && tick('shield')) {
    ab.shield = b.shield.cd;
    e.shield = e.maxHp * b.shield.pct;
    ev(s, 'bossSkill', { x: e.x, y: e.y, text: b.shield.text || '안택선 방패!' });
  }
  if (b.rally) {
    if (tick('rally')) {
      ab.rally = b.rally.cd;
      for (const o of s.enemies) {
        if (o.hp <= 0) continue;
        o.hp = Math.min(o.maxHp, o.hp + o.maxHp * b.rally.heal * (o.tier === 4 ? 0.25 : 1));
        o.hasteT = b.rally.dur;
        o.hasteA = b.rally.haste;
      }
      ev(s, 'bossSkill', { x: e.x, y: e.y, text: b.rally.text || '전군 돌격하라!' });
      ev(s, 'sfx', { n: 'warcry' });
    }
  }
  if (b.phases) {
    while (e.phase < b.phases.length && e.hp < e.maxHp * b.phases[e.phase]) {
      const sm = b.phaseSummon[e.phase];
      for (let i = 0; i < sm.n; i++) spawnEnemy(s, sm.type, e.path, e.wave, Math.max(0, e.d - 0.6 - i * 0.4), { bountyMult: 0.5 });
      const pool = s.towers.filter((t) => t.disabledT <= 0);
      for (let i = 0; i < b.disableN && pool.length; i++) {
        const t = pool.splice(randInt(s, pool.length), 1)[0];
        t.disabledT = b.disableDur;
        ev(s, 'disable', { x1: e.x, y1: e.y, x2: t.cx, y2: t.cy });
      }
      e.phase++;
      ev(s, 'announce', { text: b.phaseText || '적장의 계략', sub: '유산이 봉쇄되고 정예가 나타난다', color: '#ff6b6b' });
      ev(s, 'sfx', { n: 'bossWave' });
    }
  }
}

// ───────────────────────── 영웅 ─────────────────────────
function heroTarget(s, h, def) {
  if (h.engaged.length) {
    const e = findEnemy(s, h.engaged[0]);
    if (e && e.hp > 0) return e;
  }
  const r2 = (def.range + 0.1) ** 2;
  let best = null;
  let bd = Infinity;
  for (const e of s.enemies) {
    if (!isTargetable(e)) continue;
    const dd = d2(e, h);
    if (dd <= r2 && dd < bd) {
      bd = dd;
      best = e;
    }
  }
  return best;
}

function updateHeroes(s) {
  const base = mapOf(s).base;
  const dangunAura = s.heroes.some((h) => h.heroId === 'dangun' && !h.dead);
  for (const h of s.heroes) {
    const def = HEROES[h.heroId];
    const bf = h.buffs;
    for (const k of ['invulnT', 'dmgT', 'drT', 'gwakT']) if (bf[k] > 0) bf[k] -= DT;
    if (h.skillCd > 0) h.skillCd -= DT;
    if (h.ultCd > 0) h.ultCd -= DT;
    if (h.anim > 0) h.anim -= DT;
    if (h.dead) {
      h.respawn -= DT;
      if (h.respawn <= 0) {
        h.dead = false;
        h.hp = h.maxHp;
        h.x = base.x + 0.5 - 1;
        h.y = base.y + 0.5;
        h.tx = h.x;
        h.ty = h.y;
        h.post = { x: h.x, y: h.y };
        ev(s, 'heroUp', { x: h.x, y: h.y, id: h.id });
      }
      continue;
    }
    // 회복 (단군의 홍익인간: 모든 영웅 +0.7%/초)
    const regen = (def.regen || 0) + (s.time - h.hurtT > 4 ? 0.01 : 0) + (dangunAura ? 0.007 : 0);
    h.hp = Math.min(h.maxHp, h.hp + h.maxHp * regen * DT);
    // 근접 영웅: 거점 주변 적을 가로막으러 이동
    if (def.block > 0 && h.engaged.length === 0 && h.post) {
      let near = null;
      let bd = 1.6 * 1.6;
      for (const e of s.enemies) {
        if (e.hp <= 0 || e.unblockable || e.blockedBy || !isTargetable(e)) continue;
        const dd = (e.x - h.post.x) ** 2 + (e.y - h.post.y) ** 2;
        if (dd < bd) {
          bd = dd;
          near = e;
        }
      }
      if (near) {
        h.tx = near.x;
        h.ty = near.y;
      } else {
        h.tx = h.post.x;
        h.ty = h.post.y;
      }
    }
    // 이동
    const dx = h.tx - h.x;
    const dy = h.ty - h.y;
    const dist = Math.hypot(dx, dy);
    const spd = def.speed * (bf.gwakT > 0 ? 1.4 : 1);
    if (dist > 0.05 && !(h.engaged.length && def.block > 0 && dist < 0.8)) {
      const stepLen = Math.min(dist, spd * DT);
      h.x += (dx / dist) * stepLen;
      h.y += (dy / dist) * stepLen;
      h.facing = dx >= 0 ? 1 : -1;
      h.moving = dist > 0.3;
      if (h.engaged.length && dist > 0.8) releaseBlocker(s, h.id);
    } else h.moving = false;
    // 공격
    if (h.cd > 0) h.cd -= DT * (bf.gwakT > 0 ? 2 : 1);
    if (h.cd <= 0 && !h.moving) {
      const e = heroTarget(s, h, def);
      if (e) heroAttack(s, h, def, e);
    }
  }
}

function heroAttack(s, h, def, e) {
  h.cd = def.cd;
  h.anim = 0.25; actionCue(s, h, h.anim);
  h.facing = e.x >= h.x ? 1 : -1;
  h.atkCount++;
  const dmg = h.dmg * (h.buffs.dmgT > 0 ? 2 : 1);
  const src = { p: h.owner, kind: 'hero', ref: h };
  if (def.attack === 'gun') {
    // 권총: 즉시 명중 (적장에게 +30%)
    damage(s, e, dmg * (e.tier === 4 ? AHN_BOSS_MULT : 1), def.dmgType, src);
    ev(s, 'shot', { x1: h.x, y1: h.y - 0.1, x2: e.x, y2: e.y, gun: 1, caster: h.id });
    ev(s, 'sfx', { n: 'gun' });
  } else if (def.attack === 'lightning') {
    // 번개: 맞은 적 옆 1명에게 절반 피해로 튄다
    damage(s, e, dmg, def.dmgType, src);
    ev(s, 'bolt', { x1: h.x, y1: h.y - 0.5, x2: e.x, y2: e.y, c: '#dff2ff', caster: h.id });
    let next = null;
    let bd = 1.8 * 1.8;
    for (const o of s.enemies) {
      if (o === e || !isTargetable(o)) continue;
      const dd = d2(o, e);
      if (dd < bd) {
        bd = dd;
        next = o;
      }
    }
    if (next) {
      damage(s, next, dmg * 0.5, def.dmgType, src);
      ev(s, 'bolt', { x1: e.x, y1: e.y, x2: next.x, y2: next.y, c: '#bfe6ff' });
    }
    ev(s, 'sfx', { n: 'star' });
  } else if (def.attack === 'melee') {
    damage(s, e, dmg, def.dmgType, src);
    ev(s, 'slash', { x: e.x, y: e.y, f: h.facing });
    if (h.heroId === 'gang' && h.atkCount % 4 === 0) {
      drop(s, 'star', e.x, e.y, 0.3, { r: 1.2, dmg: dmg * 2, type: 'holy' }, src);
    }
  } else {
    const bounce = h.heroId === 'gwak' && h.buffs.gwakT > 0 ? 2 : 0;
    addProjectile(s, {
      kind: def.attack === 'arrow' ? 'arrow' : 'orb', mode: 'homing', x: h.x, y: h.y - 0.3, target: e.id,
      speed: def.attack === 'arrow' ? 13 : 9, dmg, type: def.dmgType, splash: def.splash || 0, src, bounce, hue: h.heroId,
    });
  }
}

// ───────────────────────── 소환물 (의병, 목책) ─────────────────────────
function updateSummons(s) {
  for (const m of s.summons) {
    if (m.hp <= 0) continue;
    m.life -= DT;
    if (m.life <= 0) {
      m.hp = 0;
      releaseBlocker(s, m.id);
      continue;
    }
    if (m.kind === 'wall') continue;
    if (m.regen) m.hp = Math.min(m.maxHp, m.hp + m.maxHp * m.regen * DT);
    if (m.engaged.length === 0) {
      let near = null;
      let bd = 1.3 * 1.3;
      for (const e of s.enemies) {
        if (e.hp <= 0 || e.unblockable || e.blockedBy || !isTargetable(e)) continue;
        const dd = (e.x - m.px) ** 2 + (e.y - m.py) ** 2;
        if (dd < bd) {
          bd = dd;
          near = e;
        }
      }
      const tx = near ? near.x : m.px;
      const ty = near ? near.y : m.py;
      const dx = tx - m.x;
      const dy = ty - m.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.05) {
        const st = Math.min(dist, 2 * DT);
        m.x += (dx / dist) * st;
        m.y += (dy / dist) * st;
      }
    }
    m.cd -= DT;
    if (m.cd <= 0) {
      let e = m.engaged.length ? findEnemy(s, m.engaged[0]) : null;
      if (!e) {
        for (const o of s.enemies) {
          if (isTargetable(o) && d2(o, m) <= 1.0) {
            e = o;
            break;
          }
        }
      }
      if (e) {
        const tw = m.tower ? s.towers.find((t) => t.id === m.tower) : null;
        damage(s, e, m.dmg, m.dtype || 'phys', tw ? { p: m.owner, kind: 'tower', ref: tw } : { p: m.owner, kind: 'summon' });
        m.cd = m.rate || 1;
        m.anim = 0.2; actionCue(s, m, m.anim);
      }
    }
    if (m.anim > 0) m.anim -= DT;
  }
}

function updateBlocking(s) {
  const blockers = [];
  for (const h of s.heroes) if (!h.dead && HEROES[h.heroId].block > 0) blockers.push(h);
  for (const m of s.summons) if (m.hp > 0 && m.block > 0) blockers.push(m);
  for (const b of blockers) {
    const cap = b.heroId ? HEROES[b.heroId].block : b.block;
    b.engaged = b.engaged.filter((id) => {
      const e = findEnemy(s, id);
      return e && e.hp > 0 && e.blockedBy === b.id;
    });
    if (b.engaged.length >= cap) continue;
    const r = b.kind === 'wall' ? 0.7 : BLOCK_R;
    for (const e of s.enemies) {
      if (e.hp <= 0 || e.blockedBy || e.unblockable) continue;
      if (b.kind === 'wall' && e.tier === 4) continue;
      if (!isTargetable(e)) continue;
      if (d2(e, b) > r * r) continue;
      e.blockedBy = b.id;
      e.atkCd = 0.6;
      b.engaged.push(e.id);
      if (b.engaged.length >= cap) break;
    }
  }
}

// ───────────────────────── 유산(타워) ─────────────────────────
function inRangeTargets(s, t, range, mode, n) {
  const r2 = range * range;
  const map = mapOf(s);
  const list = [];
  for (const e of s.enemies) {
    if (!isTargetable(e)) continue;
    const dd = (e.x - t.cx) ** 2 + (e.y - t.cy) ** 2;
    if (dd > r2) continue;
    list.push({ e, dd, rem: map.paths[e.path].total - e.d });
  }
  if (!list.length) return list;
  const key = {
    first: (a, b) => a.rem - b.rem,
    last: (a, b) => b.rem - a.rem,
    strong: (a, b) => b.e.hp - a.e.hp,
    close: (a, b) => a.dd - b.dd,
  }[mode] || ((a, b) => a.rem - b.rem);
  list.sort(key);
  return n ? list.slice(0, n) : list;
}

function updateTowers(s) {
  for (const t of s.towers) {
    if (t.flash > 0) t.flash -= DT;
    if (t.disabledT > 0) {
      t.disabledT -= DT;
      t.beam = [];
      continue;
    }
    const def = TOWERS[t.type];
    const st = towerBase(t.type, t.level, t.branch);
    const src = { p: t.owner, kind: 'tower', ref: t };
    const range = (st.range || 0) * t.rangeMult;
    switch (def.kind) {
      case 'sutra': {
        const r2 = range * range;
        for (const e of s.enemies) {
          if (e.hp <= 0) continue;
          if ((e.x - t.cx) ** 2 + (e.y - t.cy) ** 2 > r2) continue;
          damage(s, e, st.dps * t.dmgMult * DT, 'holy', src);
        }
        if (st.heroHeal) {
          for (const h of s.heroes) {
            if (!h.dead && (h.x - t.cx) ** 2 + (h.y - t.cy) ** 2 <= r2) h.hp = Math.min(h.maxHp, h.hp + h.maxHp * st.heroHeal * DT);
          }
        }
        break;
      }
      case 'beam': updateBeam(s, t, st, range, src); break;
      case 'barracks': updateBarracks(s, t, st); break;
      case 'palace': break;
      default: {
        t.cd -= DT * t.asMult;
        if (t.cd > 0) break;
        if (fireTower(s, t, def, st, range, src)) {
          t.cd = st.cd;
          t.shots++;
          t.flash = 0.15;
        } else t.cd = 0.05;
      }
    }
  }
}

function aimAt(t, e) {
  t.angle = Math.atan2(e.y - t.cy, e.x - t.cx);
}

function fireTower(s, t, def, st, range, src) {
  const dmg = (st.dmg || 0) * t.dmgMult;
  switch (def.kind) {
    case 'arrow': {
      const n = st.multishot || 1;
      const targets = inRangeTargets(s, t, range, t.mode, n);
      if (!targets.length) return false;
      for (const { e } of targets) {
        let d = dmg;
        let crit = false;
        if (st.crit && rand(s) < st.crit) {
          d *= st.critMult;
          crit = true;
        }
        addProjectile(s, { kind: t.branch === 'A' ? 'bolt' : 'arrow', mode: 'homing', x: t.cx, y: t.cy - 0.45, target: e.id, speed: t.branch === 'A' ? 18 : 14, dmg: d, type: 'phys', src, crit });
      }
      aimAt(t, targets[0].e);
      ev(s, 'sfx', { n: 'arrow' });
      return true;
    }
    case 'cannon': {
      if (st.rockets) {
        const targets = inRangeTargets(s, t, range, t.mode, 0);
        if (!targets.length) return false;
        for (let i = 0; i < st.rockets; i++) {
          const e = targets[randInt(s, Math.min(targets.length, 6))].e;
          addProjectile(s, {
            kind: 'rocket', mode: 'lob', x: t.cx, y: t.cy - 0.4, sx: t.cx, sy: t.cy - 0.4, tx: e.x + e.dx * 0.4, ty: e.y + e.dy * 0.4,
            dur: 0.45 + i * 0.06, hit: { r: st.splash, dmg, type: 'fire' }, src,
          });
        }
        aimAt(t, targets[0].e);
        ev(s, 'sfx', { n: 'rockets' });
        return true;
      }
      const [tg] = inRangeTargets(s, t, range, t.mode, 1);
      if (!tg) return false;
      const e = tg.e;
      const dist = Math.sqrt(tg.dd);
      const dur = 0.35 + dist * 0.09;
      const lead = e.speed * dur * (e.stunT > 0 || e.blockedBy ? 0 : 0.8);
      const map = mapOf(s);
      const pp = posAt(map.paths[e.path], e.d + lead);
      addProjectile(s, {
        kind: t.branch === 'A' ? 'bigshell' : 'shell', mode: 'lob', x: t.cx, y: t.cy - 0.4, sx: t.cx, sy: t.cy - 0.4, tx: pp.x, ty: pp.y,
        dur, hit: { r: st.splash, dmg, type: 'fire', stun: st.stun || 0 }, src,
      });
      aimAt(t, e);
      ev(s, 'sfx', { n: t.branch === 'A' ? 'cannonBig' : 'cannon' });
      return true;
    }
    case 'star': {
      const [tg] = inRangeTargets(s, t, range, t.mode, 1);
      if (!tg) return false;
      const e = tg.e;
      t.count = (t.count || 0) + 1;
      if (st.vuln) applyVuln(e, st.vuln, st.vulnDur);
      damage(s, e, dmg, 'holy', src);
      ev(s, 'bolt', { x1: t.cx, y1: t.cy - 0.9, x2: e.x, y2: e.y, c: t.branch === 'B' ? '#c9a6ff' : '#bfe6ff' });
      if (st.meteorEvery && t.count % st.meteorEvery === 0) {
        drop(s, 'meteor', e.x, e.y, 0.5, { r: st.meteorSplash, dmg: dmg * st.meteorMult, type: 'holy', follow: e.id }, src);
      }
      aimAt(t, e);
      ev(s, 'sfx', { n: 'star' });
      return true;
    }
    case 'frost': {
      const [tg] = inRangeTargets(s, t, range, t.mode, 1);
      if (!tg) return false;
      t.count = (t.count || 0) + 1;
      const freeze = st.freezeEvery && t.count % st.freezeEvery === 0 ? st.freeze : 0;
      addProjectile(s, {
        kind: 'ice', mode: 'homing', x: t.cx, y: t.cy - 0.55, target: tg.e.id, speed: 11, dmg, type: 'phys', src, crit: !!freeze,
        frost: { slow: st.slow, slowDur: st.slowDur, freeze, all: !!st.freezeAll, shatter: st.shatter || 0, r: st.splash || 0 },
      });
      aimAt(t, tg.e);
      ev(s, 'sfx', { n: 'shard' });
      return true;
    }
    case 'pagoda': {
      // 인과응보: 최대 체력 비례 피해(상한 있음) + 기본 피해, 갑옷 · 저항 무시
      const targets = inRangeTargets(s, t, range, t.mode, st.targets || 1);
      if (!targets.length) return false;
      for (const { e } of targets) {
        const d = (st.dmg + Math.min(st.pctCap, st.pct * e.maxHp)) * t.dmgMult;
        if (st.vuln) applyVuln(e, st.vuln, st.vulnDur);
        ev(s, 'smite', { x: e.x, y: e.y, big: t.branch === 'A', lamp: t.branch === 'B' });
        damage(s, e, d, 'true', src);
      }
      aimAt(t, targets[0].e);
      ev(s, 'sfx', { n: 'smite' });
      return true;
    }
    case 'bell': {
      const r2 = range * range;
      let any = false;
      for (const e of s.enemies) {
        if (e.hp > 0 && (e.x - t.cx) ** 2 + (e.y - t.cy) ** 2 <= r2) {
          any = true;
          break;
        }
      }
      if (!any) return false;
      t.count = (t.count || 0) + 1;
      const stun = st.stunEvery && t.count % st.stunEvery === 0 ? st.stun : 0;
      aoe(s, t.cx, t.cy, range, dmg, 'holy', src, { slow: st.slow, slowDur: st.slowDur, stun, vuln: st.vuln || 0, vulnDur: 2, noFalloff: true });
      ev(s, 'ring', { x: t.cx, y: t.cy, r: range, big: !!stun });
      ev(s, 'sfx', { n: 'bell' });
      return true;
    }
  }
  return false;
}

// ───── 병영(남한산성): 가장 가까운 길목에 병사를 세우고, 쓰러지면 잠시 뒤 다시 채운다 ─────
function guardSlot(s, t, i, n) {
  const path = mapOf(s).paths[t.rally.path];
  const q = posAt(path, clamp(t.rally.d + (i - (n - 1) / 2) * 0.5, 0, path.total));
  const side = (i % 2 ? 1 : -1) * 0.2;
  return { x: q.x - q.dy * side, y: q.y + q.dx * side };
}

function updateBarracks(s, t, st) {
  const n = st.soldiers;
  const alive = s.summons.filter((m) => m.tower === t.id && m.hp > 0);
  const hpMult = 1 + TOWER_META_BONUS * t.metaLv;
  const kind = t.branch === 'B' ? 'monk' : t.branch === 'A' ? 'elite' : 'guard';
  for (const m of alive) {
    // 강화 · 공명 · 경복궁 버프를 매 틱 반영 (늘어난 최대 체력만큼 바로 회복)
    const maxHp = st.hp * hpMult;
    if (maxHp > m.maxHp) m.hp += maxHp - m.maxHp;
    m.maxHp = maxHp;
    m.hp = Math.min(m.hp, maxHp);
    m.dmg = st.dmg * t.dmgMult;
    m.rate = st.cd / t.asMult;
    m.armor = st.armor || 0;
    m.regen = st.regen || 0;
    m.dtype = st.soldierType || 'phys';
    m.kind = kind;
  }
  if (!t.rally || t.rally.dist > st.range * Math.max(1, t.rangeMult)) return;
  if (alive.length < (t.alive ?? 0) && t.respawnT <= 0) t.respawnT = st.respawn;
  t.alive = alive.length;
  if (alive.length >= n) return;
  if (t.respawnT > 0) {
    t.respawnT -= DT;
    return;
  }
  const used = new Set(alive.map((m) => m.slot));
  for (let i = 0; i < n; i++) {
    if (used.has(i)) continue;
    const home = guardSlot(s, t, i, n);
    const m = addSummon(s, {
      kind, owner: t.owner, tower: t.id, slot: i, x: t.cx, y: t.cy + 0.2, hp: st.hp * hpMult, maxHp: st.hp * hpMult,
      dmg: st.dmg * t.dmgMult, rate: st.cd / t.asMult, armor: st.armor || 0, regen: st.regen || 0, dtype: st.soldierType || 'phys', life: 1e9,
    });
    // 성문에서 나와 제자리로 걸어간다
    m.px = home.x;
    m.py = home.y;
  }
  t.alive = s.summons.filter((m) => m.tower === t.id && m.hp > 0).length;
  ev(s, 'rally', { x: t.cx, y: t.cy });
  ev(s, 'sfx', { n: 'rally' });
}

function updateBeam(s, t, st, range, src) {
  const r2 = range * range;
  let cur = t.beam.length ? findEnemy(s, t.beam[0]) : null;
  if (!cur || !isTargetable(cur) || (cur.x - t.cx) ** 2 + (cur.y - t.cy) ** 2 > r2) {
    const [tg] = inRangeTargets(s, t, range, t.mode, 1);
    cur = tg ? tg.e : null;
    t.ramp = 0;
  }
  if (!cur) {
    t.beam = [];
    return;
  }
  t.ramp = Math.min(st.rampTime, t.ramp + DT * t.asMult);
  const mult = 1 + (st.ramp - 1) * (t.ramp / st.rampTime);
  const dps = st.dps * t.dmgMult * mult;
  const ids = [cur.id];
  if (st.chain) {
    const others = s.enemies
      .filter((e) => e !== cur && isTargetable(e) && d2(e, cur) <= 4)
      .sort((a, b) => d2(a, cur) - d2(b, cur))
      .slice(0, st.chain);
    for (const o of others) {
      ids.push(o.id);
      damage(s, o, dps * st.chainMult * DT, 'holy', src);
    }
  }
  damage(s, cur, dps * DT, 'holy', src);
  t.beam = ids;
  t.beamPow = t.ramp / st.rampTime;
  aimAt(t, cur);
}

// ───────────────────────── 투사체 ─────────────────────────
function updateProjectiles(s) {
  for (const p of s.projectiles) {
    if (p.done) continue;
    p.t += DT;
    if (p.mode === 'homing') {
      const e = findEnemy(s, p.target);
      if (e && e.hp > 0) {
        p.tx = e.x;
        p.ty = e.y - 0.15;
      }
      if (p.tx === undefined) {
        p.done = true;
        continue;
      }
      const dx = p.tx - p.x;
      const dy = p.ty - p.y;
      const dist = Math.hypot(dx, dy);
      const stp = p.speed * DT;
      p.a = Math.atan2(dy, dx);
      if (dist <= stp + 0.05) {
        p.done = true;
        if (e && e.hp > 0) projectileHit(s, p, e);
        else if (p.splash) aoe(s, p.tx, p.ty, p.splash, p.dmg, p.type, p.src);
      } else {
        p.x += (dx / dist) * stp;
        p.y += (dy / dist) * stp;
      }
    } else if (p.mode === 'lob') {
      const k = Math.min(1, p.t / p.dur);
      p.x = p.sx + (p.tx - p.sx) * k;
      p.y = p.sy + (p.ty - p.sy) * k;
      p.k = k;
      if (k >= 1) {
        p.done = true;
        explode(s, p);
      }
    } else if (p.mode === 'drop') {
      if (p.follow) {
        const e = findEnemy(s, p.follow);
        if (e && e.hp > 0) {
          p.tx = e.x;
          p.ty = e.y;
          p.x = e.x;
          p.y = e.y;
        }
      }
      p.k = Math.min(1, p.t / p.dur);
      if (p.t >= p.dur) {
        p.done = true;
        explode(s, p);
      }
    }
  }
}

// 석빙고 얼음: 맞은 자리 둘레까지 둔화, 몇 번째마다 맞은 적을 얼림(한파는 둘레 전부, 적장은 짧게), 얼음 감옥은 얼어 있는 동안 취약
function frostHit(s, p, e) {
  const f = p.frost;
  const r2 = f.r * f.r;
  const hits = f.r ? s.enemies.filter((o) => o.hp > 0 && d2(o, e) <= r2) : [e];
  for (const o of hits) {
    applySlow(o, f.slow, f.slowDur);
    if (f.freeze && (o === e || f.all)) {
      applyStun(o, f.freeze);
      o.iceT = Math.max(o.iceT || 0, o.stunT);
      if (f.shatter) applyVuln(o, f.shatter, o.stunT);
    }
    damage(s, o, o === e ? p.dmg : p.dmg * 0.6, p.type, p.src);
  }
  if (f.freeze || f.r > 0.8) ev(s, 'frost', { x: e.x, y: e.y, r: f.freeze && !f.all ? 0.35 : f.r, freeze: !!f.freeze });
}

function projectileHit(s, p, e) {
  if (p.frost) return frostHit(s, p, e);
  if (p.splash) aoe(s, e.x, e.y, p.splash, p.dmg, p.type, p.src);
  else damage(s, e, p.dmg, p.type, p.src);
  if (p.crit) ev(s, 'crit', { x: e.x, y: e.y, v: Math.round(p.dmg) });
  if (p.bounce > 0) {
    let next = null;
    let bd = 2.5 * 2.5;
    for (const o of s.enemies) {
      if (o === e || !isTargetable(o)) continue;
      const dd = d2(o, e);
      if (dd < bd) {
        bd = dd;
        next = o;
      }
    }
    if (next) addProjectile(s, { ...p, id: s.nextId++, x: e.x, y: e.y, target: next.id, bounce: p.bounce - 1, chained: true, done: false, t: 0 });
  }
}

function explode(s, p) {
  const h = p.hit;
  if (!h) return;
  if (h.single) {
    const e = findEnemy(s, h.single);
    if (e && e.hp > 0) damage(s, e, h.dmg, h.type, p.src);
    aoe(s, p.tx, p.ty, 0.8, h.dmg * 0.3, h.type, p.src);
  } else {
    aoe(s, p.tx, p.ty, h.r, h.dmg, h.type, p.src, { stun: h.stun || 0, slow: h.slow || 0, slowDur: h.slowDur || 0 });
  }
  ev(s, 'boom', { x: p.tx, y: p.ty, r: h.r, kind: p.kind });
}

// ───────────────────────── 장판, 이동체 ─────────────────────────
function updateZones(s) {
  for (const z of s.zones) {
    z.t -= DT;
    const r2 = z.r * z.r;
    for (const e of s.enemies) {
      if (e.hp <= 0 || (e.x - z.x) ** 2 + (e.y - z.y) ** 2 > r2) continue;
      if (z.slow) applySlow(e, z.slow, 0.3);
      damage(s, e, z.dps * DT, z.kind === 'fire' ? 'fire' : 'holy', z.src);
    }
  }
}

function updateMovers(s) {
  const map = mapOf(s);
  const c = s.courier;
  if (c && !c.sent && c.at >= 0 && s.time >= c.at) {
    c.sent = true;
    const p = posAt(map.paths[c.path], 0);
    s.movers.push({ id: newId(s), kind: 'courier', path: c.path, d: 0, speed: COURIER_SPEED, x: p.x, y: p.y, dx: p.dx, dy: p.dy });
    ev(s, 'announce', { text: '급보요, 급보!', sub: '조선 전령이 왜군의 길을 뚫고 성으로 달려옵니다', color: '#8fd3ff' });
    ev(s, 'courier', { x: p.x, y: p.y, start: true });
    ev(s, 'sfx', { n: 'horn' });
  }
  for (const m of s.movers) {
    if (m.kind === 'courier') {
      // 적과 부딪히지 않고 길을 따라 성까지 내달린다
      const path = map.paths[m.path];
      m.d += m.speed * DT;
      const p = posAt(path, Math.min(m.d, path.total));
      m.x = p.x;
      m.y = p.y;
      m.dx = p.dx;
      m.dy = p.dy;
      if (m.d >= path.total) {
        m.done = true;
        c.done = true;
        // 1P · 2P 모두에게 같은 액수 (나눠 갖지 않는다)
        for (const pl of s.players) if (!pl.left) addGold(pl, c.gold);
        ev(s, 'courier', { x: m.x, y: m.y, gold: c.gold });
        ev(s, 'announce', { text: '급보 도착!', sub: `군자금 +${c.gold}냥${s.players.length > 1 ? ' — 1P · 2P 모두' : ''}`, color: '#f0c75e' });
        ev(s, 'sfx', { n: 'coin' });
      }
      continue;
    }
    if (m.kind !== 'turtle') continue;
    m.d -= m.speed * DT;
    const p = posAt(map.paths[m.path], Math.max(0, m.d));
    m.x = p.x;
    m.y = p.y;
    m.dx = -p.dx;
    m.dy = -p.dy;
    for (const e of s.enemies) {
      if (e.hp <= 0 || m.hit.includes(e.id)) continue;
      if ((e.x - m.x) ** 2 + (e.y - m.y) ** 2 > 0.8 * 0.8) continue;
      m.hit.push(e.id);
      knockback(s, e, 1.5);
      damage(s, e, m.dmg, 'fire', m.src);
    }
    if (m.d <= 0) m.done = true;
  }
}

function cleanup(s) {
  if (s.enemies.some((e) => e.hp <= 0)) s.enemies = s.enemies.filter((e) => e.hp > 0);
  if (s.projectiles.some((p) => p.done)) s.projectiles = s.projectiles.filter((p) => !p.done);
  if (s.summons.some((m) => m.hp <= 0)) s.summons = s.summons.filter((m) => m.hp > 0);
  if (s.zones.some((z) => z.t <= 0)) s.zones = s.zones.filter((z) => z.t > 0);
  if (s.movers.some((m) => m.done)) s.movers = s.movers.filter((m) => !m.done);
}

function checkEnd(s) {
  if (s.lives <= 0) {
    s.lives = 0;
    s.result = { win: false, stars: 0, wavesCleared: Math.max(0, s.wave.n - 1), lives: 0 };
    ev(s, 'end', { win: false });
    return;
  }
  const w = s.wave;
  if (w.n >= w.total && w.queue.length === 0 && s.enemies.length === 0) {
    const ratio = s.lives / s.maxLives;
    const stars = ratio >= 0.9 ? 3 : ratio >= 0.5 ? 2 : 1;
    s.result = { win: true, stars, wavesCleared: w.total, lives: s.lives };
    ev(s, 'end', { win: true, stars });
  }
}

export { checkWaveResolved, releaseBlocker, applySlow, applyStun };
