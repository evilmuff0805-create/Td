#!/usr/bin/env node
// 영웅 조합 평가: 모든 2인 조합으로 지정 스테이지를 자동 플레이 (비기 고정)
//   node tools/heromatrix.mjs s5 normal [seeds=2]
import { runOne } from './balance.mjs';
import { HERO_ORDER, HEROES } from '../src/data/heroes.js';
const [stageId = 's5', difficulty = 'normal', seedsArg = '2'] = process.argv.slice(2);
const seeds = +seedsArg;
const score = {};
const rows = [];
for (let i = 0; i < HERO_ORDER.length; i++) {
  for (let j = i + 1; j < HERO_ORDER.length; j++) {
    const pair = [HERO_ORDER[i], HERO_ORDER[j]];
    let lives = 0, wins = 0;
    for (let sd = 1; sd <= seeds; sd++) {
      const r = runOne({ stageId, difficulty, mode: 'solo', seed: sd, heroes: pair, skills: ['singijeon', 'bongsu'] });
      lives += r.win ? r.lives : -(r.total - r.wave) ;
      wins += r.win ? 1 : 0;
    }
    rows.push({ pair: pair.map((h) => HEROES[h].name).join('+'), wins: `${wins}/${seeds}`, score: +(lives / seeds).toFixed(1) });
    for (const h of pair) score[h] = (score[h] || 0) + lives / seeds;
  }
}
rows.sort((a, b) => b.score - a.score);
console.table(rows);
console.log('영웅별 합산 점수:', Object.fromEntries(Object.entries(score).map(([k, v]) => [HEROES[k].name, v.toFixed(1)])));
