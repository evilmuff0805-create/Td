// 자동 플레이 봇 — 밸런스 시뮬레이션용 (tools/balance.mjs)
// 전략: 경로를 많이 덮는 자리에 순서대로 건설/업그레이드, 스킬은 적이 몰린 곳에 사용.
import { TOWERS, towerBase } from '../data/towers.js';
import { HEROES } from '../data/heroes.js';
import { SKILLS } from '../data/skills.js';
import { RESONANCE_MAX } from '../data/combos.js';
import { STAGE_BY_ID, parseWave } from '../data/stages.js';
import { mapOf, d2 } from './combat.js';
import { T_BUILD } from './map.js';
import { autoAim, comboStatus } from './abilities.js';

const PLANS = {
  balanced: ['sungnyemun', 'sungnyemun', 'hwaseong', 'bosingak', 'U', 'cheomseong', 'haeinsa', 'U', 'U', 'seokguram', 'gyeongbok', 'hwaseong', 'U', 'U', 'sungnyemun', 'cheomseong', 'U', 'U', 'U', 'bosingak', 'seokguram', 'U', 'U', 'U', 'U'],
  arrows: ['sungnyemun', 'sungnyemun', 'sungnyemun', 'U', 'sungnyemun', 'U', 'sungnyemun', 'U', 'U', 'sungnyemun', 'U', 'U', 'U'],
  greedy: ['sungnyemun', 'gyeongbok', 'hwaseong', 'U', 'sungnyemun', 'cheomseong', 'U', 'U', 'seokguram', 'haeinsa', 'U', 'U', 'U', 'U'],
};

export function createBot(s, p, opts = {}) {
  const map = mapOf(s);
  const plan = PLANS[opts.plan || 'balanced'];
  // 자리 점수: 사거리 3 안의 경로 샘플 수 (협동 시 각자 담당 경로 우선)
  const spots = [];
  for (let y = 0; y < map.h; y++) {
    for (let x = 0; x < map.w; x++) {
      if (map.grid[y * map.w + x] !== T_BUILD) continue;
      const c = { x: x + 0.5, y: y + 0.5 };
      let score = 0;
      let near = 0;
      for (const sm of map.samples) {
        const dd = d2(sm, c);
        if (dd <= 9) score += 1 + (s.coop && map.paths.length > 1 && sm.path === p ? 0.6 : 0);
        if (dd <= 2.25) near++;
      }
      spots.push({ x, y, score, near });
    }
  }
  spots.sort((a, b) => b.score - a.score);
  return { p, plan, step: 0, spots, think: 0, useSkills: opts.skills !== false, branchPref: opts.branch || 'alt', posted: false };
}

// 탐지 유산이 닿지 않는 경로 (협동이면 자기 담당 경로만)
function uncoveredPath(s, bot) {
  const map = mapOf(s);
  const detectors = s.towers.filter((t) => t.type === 'cheomseong');
  for (let pi = 0; pi < map.paths.length; pi++) {
    if (s.coop && map.paths.length > 1 && pi !== bot.p) continue;
    const total = map.paths[pi].total;
    const covered = map.samples.filter((sm) => sm.path === pi && sm.d < total * 0.8 && detectors.some((t) => (t.cx - sm.x) ** 2 + (t.cy - sm.y) ** 2 <= 16)).length;
    if (covered < 12) return pi;
  }
  return -1;
}

function freeSpot(s, bot, kind, pathIdx = -1) {
  const taken = new Set(s.towers.map((t) => t.y * 100 + t.x));
  if (pathIdx >= 0) {
    const map = mapOf(s);
    const total = map.paths[pathIdx].total;
    const near = (sp) => map.samples.filter((sm) => sm.path === pathIdx && sm.d < total * 0.8 && (sm.x - sp.x - 0.5) ** 2 + (sm.y - sp.y - 0.5) ** 2 <= 9).length;
    return bot.spots.filter((sp) => !taken.has(sp.y * 100 + sp.x)).sort((a, b) => near(b) - near(a))[0];
  }
  const list = kind === 'bell' || kind === 'sutra' ? [...bot.spots].sort((a, b) => b.near - a.near) : bot.spots;
  if (kind === 'palace') {
    // 유산이 많이 모인 곳
    let best = null;
    let bs = -1;
    for (const sp of list) {
      if (taken.has(sp.y * 100 + sp.x)) continue;
      const n = s.towers.filter((t) => (t.x - sp.x) ** 2 + (t.y - sp.y) ** 2 <= 6).length;
      if (n > bs) {
        bs = n;
        best = sp;
      }
    }
    return best;
  }
  return list.find((sp) => !taken.has(sp.y * 100 + sp.x));
}

export function botThink(s, bot, send) {
  bot.think -= 1 / 60;
  if (bot.think > 0) return;
  bot.think = 0.4;
  const pl = s.players[bot.p];
  const w = s.wave;
  // 첫 파도 시작
  if (w.n === 0 && bot.p === 0) send({ t: 'nextWave', p: bot.p });
  // 영웅 배치: 경로 샘플이 가장 많이 보이는 지점
  const myHeroes = s.heroes.filter((h) => h.owner === bot.p);
  if (!bot.posted) {
    bot.posted = true;
    const map = mapOf(s);
    myHeroes.forEach((h, i) => {
      const path = map.paths[Math.min(h.slot, map.paths.length - 1)];
      const target = map.samples.filter((sm) => sm.path === path && sm.d > path.total * (0.35 + i * 0.15)).slice(0, 1)[0] ||
        map.samples.find((sm) => sm.d > 4);
      const melee = HEROES[h.heroId].block > 0;
      if (target) send({ t: 'move', p: bot.p, h: s.heroes.indexOf(h), x: target.x + (melee ? 0 : 0.8), y: target.y + (melee ? 0 : 0.8) });
    });
  }
  // 다음 파도 미리보기에 시노비가 있으면 첨성대부터 (사람이 하는 대응)
  const upcoming = upcomingTypes(s);
  if ((upcoming.has('ninja') || s.enemies.some((e) => e.stealth)) && pl.towers.includes('cheomseong')) {
    const blind = uncoveredPath(s, bot);
    if (blind >= 0) {
      if (pl.gold < TOWERS.cheomseong.levels[0].cost) return;
      const sp = freeSpot(s, bot, 'star', blind);
      if (sp) send({ t: 'build', p: bot.p, x: sp.x, y: sp.y, tower: 'cheomseong' });
      return;
    }
  }
  // 중장(철갑·충차)이 오면 갑옷을 무시하는 신성·화기 유산을 먼저
  const heavy = upcoming.has('armored') || upcoming.has('ram');
  const antiArmor = s.towers.filter((t) => t.owner === bot.p && ['seokguram', 'cheomseong', 'hwaseong'].includes(t.type)).length;
  if (heavy && antiArmor < 2 + Math.floor(s.wave.n / 6)) {
    const pick = pl.towers.includes('seokguram') && pl.gold >= TOWERS.seokguram.levels[0].cost ? 'seokguram' : 'cheomseong';
    if (pl.gold < TOWERS[pick].levels[0].cost) return;
    const sp = freeSpot(s, bot, TOWERS[pick].kind);
    if (sp) send({ t: 'build', p: bot.p, x: sp.x, y: sp.y, tower: pick });
    return;
  }
  // 소비
  for (let guard = 0; guard < 4; guard++) {
    const action = bot.plan[bot.step % bot.plan.length];
    if (action === 'U') {
      const mine = s.towers.filter((t) => t.owner === bot.p && !t.branch);
      if (!mine.length) {
        bot.step++;
        continue;
      }
      mine.sort((a, b) => cost(a) - cost(b));
      const t = mine[0];
      const c = cost(t);
      if (pl.gold < c) return;
      const branch = bot.branchPref === 'alt' ? (t.id % 2 ? 'A' : 'B') : bot.branchPref;
      send({ t: 'upgrade', p: bot.p, id: t.id, branch });
      pl.gold -= 0; // 실제 차감은 시뮬레이션에서
      bot.step++;
      return;
    }
    if (!pl.towers.includes(action)) {
      bot.step++;
      continue;
    }
    const c = TOWERS[action].levels[0].cost;
    if (pl.gold < c) return;
    const sp = freeSpot(s, bot, TOWERS[action].kind);
    if (!sp) {
      bot.step++;
      continue;
    }
    send({ t: 'build', p: bot.p, x: sp.x, y: sp.y, tower: action });
    bot.step++;
    return;
  }
}

function upcomingTypes(s) {
  const set = new Set();
  const stage = STAGE_BY_ID[s.stageId];
  const n = s.wave.phase === 'prep' ? s.wave.n + 1 : s.wave.n;
  const str = stage.waves[n - 1];
  if (str) for (const g of parseWave(str)) set.add(g.type);
  if (s.wave.nextTactic === 'night') set.add('ninja');
  return set;
}

function cost(t) {
  const def = TOWERS[t.type];
  if (t.level < def.levels.length) return def.levels[t.level].cost;
  return Math.min(def.branches.A.cost, def.branches.B.cost);
}

export function botSkills(s, bot, send) {
  if (!bot.useSkills || s.tick % 20 !== 0) return;
  const pl = s.players[bot.p];
  const boss = s.enemies.find((e) => e.tier === 4 && e.hp > 0 && e.d > 2);
  s.heroes.forEach((h, hi) => {
    if (h.owner !== bot.p || h.dead) return;
    if (boss && h.ultCd <= 0) {
      send({ t: 'heroUlt', p: bot.p, h: hi, x: boss.x, y: boss.y });
      return;
    }
    const aim = autoAim(s, h, 5);
    if (h.skillCd <= 0 && aim && aim.score >= 3) send({ t: 'heroSkill', p: bot.p, h: hi, x: aim.x, y: aim.y });
    const aimUlt = autoAim(s, h, 12, 2.5);
    if (h.ultCd <= 0 && aimUlt && aimUlt.score >= 8) send({ t: 'heroUlt', p: bot.p, h: hi, x: aimUlt.x, y: aimUlt.y });
  });
  pl.skills.forEach((sl, i) => {
    if (sl.cd > 0) return;
    const sk = SKILLS[sl.id];
    const anchor = s.heroes.find((h) => h.owner === bot.p && !h.dead) || s.heroes[0];
    const aim = boss && sk.target === 'point' ? { x: boss.x, y: boss.y, score: 99 } : autoAim(s, { x: anchor.x, y: anchor.y }, 30, 1.6);
    if (sk.target === 'none') {
      if (sl.id === 'gunryang' || (aim && aim.score >= 6)) send({ t: 'skill', p: bot.p, slot: i, x: 0, y: 0 });
    } else if (aim && aim.score >= 5) send({ t: 'skill', p: bot.p, slot: i, x: aim.x, y: aim.y });
  });
  if (s.resonance.gauge >= RESONANCE_MAX) {
    const st = comboStatus(s);
    if (st.ok) {
      if (s.enemies.length >= 8 || boss) send({ t: 'combo', p: bot.p });
    } else if (st.why && st.why.includes('칸 이내')) {
      // 두 영웅을 모은다
      const [a, b] = s.heroes;
      if (b.owner === bot.p) send({ t: 'move', p: bot.p, h: 1, x: a.x + 1, y: a.y });
    }
  }
}

export { towerBase };
