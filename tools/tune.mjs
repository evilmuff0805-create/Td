#!/usr/bin/env node
// 전장별 적 체력 배율(hpBase) 자동 맞춤: 봇(예상 영구 강화 수준)이 보통 난이도 혼자로
// 목표 민심(앞 전장은 넉넉히, 뒤 전장은 빠듯하게)을 남기는 가장 높은 배율을 이분 탐색한다.
//   node tools/tune.mjs            모든 전장
//   node tools/tune.mjs s6,s7      일부만
import { STAGES } from '../src/data/stages.js';
import { runOne } from './balance.mjs';

const only = process.argv[2] ? process.argv[2].split(',') : null;
const SEEDS = [1, 2, 3, 4];

function score(stageId, hpBase) {
  const rs = SEEDS.map((seed) => runOne({ stageId, difficulty: 'normal', mode: 'solo', seed, hpBase }));
  const wins = rs.filter((r) => r.win).length;
  const lives = rs.reduce((a, r) => a + (r.win ? r.lives / r.maxLives : 0), 0) / rs.length;
  return { wins, lives };
}

const out = {};
STAGES.forEach((st, i) => {
  if (only && !only.includes(st.id)) return;
  if (st.id === 's1') {
    out[st.id] = 1;
    return;
  }
  const target = 0.85 - (0.25 * i) / (STAGES.length - 1);
  let lo = 0.4;
  let hi = 6;
  for (let it = 0; it < 8; it++) {
    const mid = (lo + hi) / 2;
    const r = score(st.id, mid);
    if (r.wins >= 3 && r.lives >= target) lo = mid;
    else hi = mid;
  }
  const hp = Math.round(lo * 100) / 100;
  const fin = score(st.id, hp);
  out[st.id] = hp;
  console.log(`${st.id} ${st.name}: hpBase ${hp}  (목표 민심 ${(target * 100).toFixed(0)}%, 결과 승 ${fin.wins}/4 민심 ${(fin.lives * 100).toFixed(0)}%)`);
});
console.log(JSON.stringify(out));
