#!/usr/bin/env node
// 밸런스 시뮬레이터: 봇으로 모든 스테이지 × 난이도 × 모드를 자동 플레이한다.
//   node tools/balance.mjs                 전체 요약
//   node tools/balance.mjs s1 normal solo  단일 실행 + 파도별 로그
//   옵션: --plan=arrows|balanced|greedy  --seeds=3  --meta=auto|0..10  --noskills
import { createGame, step, queueCommand } from '../src/sim/sim.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { STAGES } from '../src/data/stages.js';
import { TOWERS } from '../src/data/towers.js';
import { ENEMIES } from '../src/data/enemies.js';

const args = process.argv.slice(2);
const flags = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => {
  const [k, v] = a.slice(2).split('=');
  return [k, v ?? true];
}));
const pos = args.filter((a) => !a.startsWith('--'));

const HERO_PAIRS = [['yi', 'sejong'], ['eulji', 'gang'], ['gwon', 'gwak'], ['ahn', 'dangun']];
const SKILL_SETS = [['singijeon', 'bongsu'], ['bigyeok', 'uibyeong'], ['cheonja', 'hanpa']];

// 스테이지 진행(0~24번째 전장)에 따른 예상 영구 강화 수준: 영웅 0~10, 비기 0~5, 유산 복원 0~30
export function expectedMeta(stageId) {
  const i = STAGES.findIndex((st) => st.id === stageId);
  return { hero: Math.min(10, Math.round(i * 0.45)), skill: Math.min(5, Math.round(i * 0.22)), tower: Math.min(30, Math.round(i * 1.3)) };
}

export function runOne({ stageId, difficulty, mode, seed = 1, plan = 'balanced', meta = 'auto', heroes, skills, useSkills = true, verbose = false, hpBase }) {
  const m = meta === 'auto' ? expectedMeta(stageId) : { hero: Math.min(10, +meta), skill: Math.min(5, +meta), tower: Math.min(30, +meta * 3) };
  const lvMap = (keys, v) => Object.fromEntries(keys.map((k) => [k, v]));
  const allTowers = Object.keys(TOWERS);
  const mk = (i, hs, sk) => ({
    name: `봇${i + 1}`, heroes: hs, skills: sk, towers: allTowers,
    heroLv: lvMap(hs, m.hero), skillLv: lvMap(sk, m.skill), towerLv: lvMap(allTowers, m.tower),
  });
  const pair = heroes || HERO_PAIRS[(seed - 1) % HERO_PAIRS.length];
  const sk = skills || SKILL_SETS[(seed - 1) % SKILL_SETS.length];
  const players = mode === 'solo' ? [mk(0, pair, sk)] : [mk(0, [pair[0]], sk), mk(1, [pair[1]], SKILL_SETS[seed % SKILL_SETS.length])];
  const s = createGame({ stageId, difficulty, mode, seed: seed * 7919, players, hpBase });
  const bots = players.map((_, i) => createBot(s, i, { plan, skills: useSkills }));
  const send = (c) => queueCommand(s, c);
  let lastWave = 0;
  const log = [];
  let combos = 0;
  const maxTicks = 60 * 60 * 40;
  while (!s.result && s.tick < maxTicks) {
    for (const b of bots) {
      botThink(s, b, send);
      botSkills(s, b, send);
    }
    step(s);
    for (const e of s.events) if (e.k === 'combo') combos++;
    s.events.length = 0;
    if (s.wave.n !== lastWave) {
      lastWave = s.wave.n;
      if (verbose) {
        log.push({
          wave: s.wave.n, lives: s.lives, gold: s.players.map((p) => p.gold).join('/'),
          towers: s.towers.length, value: s.towers.reduce((a, t) => a + t.spent[0] + t.spent[1], 0),
          heroLv: s.heroes.map((h) => h.lv).join('/'), tactic: s.wave.tactic || '', t: Math.round(s.time),
        });
      }
    }
  }
  const dmgBy = {};
  for (const t of s.towers) dmgBy[t.type] = (dmgBy[t.type] || 0) + t.dmgDone;
  return {
    stageId, difficulty, mode, seed, win: !!(s.result && s.result.win), lives: s.lives, maxLives: s.maxLives,
    stars: s.result ? s.result.stars : 0, wave: s.wave.n, total: s.wave.total, time: Math.round(s.time),
    goldLeft: s.players.reduce((a, p) => a + p.gold, 0), towers: s.towers.length, combos, log, dmgBy,
    heroDmg: s.players.map((p) => Math.round(p.stats.damage)),
  };
}

function pad(v, n) {
  return String(v).padEnd(n);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const plan = flags.plan || 'balanced';
  const seeds = +(flags.seeds || 3);
  const meta = flags.meta ?? 'auto';
  const useSkills = !flags.noskills;
  if (pos.length) {
    const [stageId, difficulty = 'normal', mode = 'solo'] = pos;
    const r = runOne({ stageId, difficulty, mode, seed: +(flags.seed || 1), plan, meta, useSkills, verbose: true });
    console.table(r.log);
    const total = Object.values(r.dmgBy).reduce((a, b) => a + b, 0) || 1;
    console.log('유산별 피해 비중:', Object.fromEntries(Object.entries(r.dmgBy).map(([k, v]) => [TOWERS[k].name, Math.round((v / total) * 100) + '%'])));
    console.log(`결과: ${r.win ? '승리' : '패배'} 민심 ${r.lives}/${r.maxLives} 별 ${r.stars} 파도 ${r.wave}/${r.total} 합격기 ${r.combos}회 ${r.time}초 남은 군자금 ${r.goldLeft}`);
  } else {
    const diffs = (flags.diff || 'normal,hard,hell').split(',');
    const only = flags.stages ? flags.stages.split(',') : null;
    const modes = (flags.mode || 'solo,coop').split(',');
    console.log(`전략=${plan} 시드=${seeds} 영구강화=${meta} 스킬=${useSkills}`);
    console.log(pad('스테이지', 10) + pad('난이도', 8) + pad('모드', 6) + '결과 (승/전, 평균 남은 민심, 평균 도달 파도)');
    for (const st of STAGES) {
      if (only && !only.includes(st.id)) continue;
      for (const difficulty of diffs) {
        for (const mode of modes) {
          const rs = [];
          for (let sd = 1; sd <= seeds; sd++) rs.push(runOne({ stageId: st.id, difficulty, mode, seed: sd, plan, meta, useSkills }));
          const wins = rs.filter((r) => r.win).length;
          const avgLives = (rs.reduce((a, r) => a + r.lives, 0) / rs.length).toFixed(1);
          const avgWave = (rs.reduce((a, r) => a + r.wave, 0) / rs.length).toFixed(1);
          const combos = (rs.reduce((a, r) => a + r.combos, 0) / rs.length).toFixed(1);
          const marks = rs.map((r) => (r.win ? (r.stars === 3 ? '★' : r.stars === 2 ? '◎' : '○') : '✕')).join('');
          console.log(`${pad(st.id + ' ' + st.name, 12)}${pad(difficulty, 8)}${pad(mode, 6)}${wins}/${rs.length} ${marks}  민심 ${avgLives}/${rs[0].maxLives}  파도 ${avgWave}/${rs[0].total}  합격기 ${combos}`);
        }
      }
    }
  }
}

export { ENEMIES };
