#!/usr/bin/env node
// 유산 실험실: 유산 하나를 경로 옆에 세우고 적 행렬을 60초간 흘려보내 "군자금당 유효 피해"를 잰다.
//   node tools/towerlab.mjs [적종류=ashigaru] [간격=0.9]
import { createGame, step, queueCommand } from '../src/sim/sim.js';
import { spawnEnemy } from '../src/sim/combat.js';
import { TOWERS, TOWER_ORDER, towerInvested } from '../src/data/towers.js';

const type = process.argv[2] || 'ashigaru';
const gap = +(process.argv[3] || 0.9);
const DUR = 60;

function run(tower, level, branch, withHelper) {
  const s = createGame({ stageId: 's1', difficulty: 'normal', mode: 'solo', seed: 3, players: [{ heroes: [], skills: [] }] });
  s.players[0].gold = 1e6;
  const place = (tw, x, y, lv, br) => {
    queueCommand(s, { t: 'build', p: 0, x, y, tower: tw });
    step(s);
    const t = s.towers[s.towers.length - 1];
    for (let i = 1; i < lv; i++) queueCommand(s, { t: 'upgrade', p: 0, id: t.id });
    if (br) queueCommand(s, { t: 'upgrade', p: 0, id: t.id, branch: br });
    step(s);
    return t;
  };
  // 경로: (5,2)→(5,10) 세로 구간 옆
  const main = tower ? place(tower, 6, 6, level, branch) : null;
  if (withHelper) place(withHelper, 4, 6, 3, null);
  s.wave.phase = 'final';
  s.wave.n = s.wave.total;
  s.waveStats[1] = { remaining: 0, queued: 0, leaks: 0 };
  let next = 0;
  let total = 0;
  const start = s.time;
  while (s.time - start < DUR) {
    if (s.time - start >= next) {
      const e = spawnEnemy(s, type, 0, 1, 2);
      e.hp = e.maxHp = e.maxHp * 30; // 죽지 않게 하여 순수 출력 측정
      e.bountyMult = 0;
      next += gap;
    }
    step(s);
    s.events.length = 0;
  }
  for (const t of s.towers) total += t.dmgDone;
  return { total, main };
}

console.log(`대상: ${type}, 간격 ${gap}s, ${DUR}초`);
console.log('유산'.padEnd(16) + '단계'.padEnd(8) + '투자'.padEnd(8) + 'DPS'.padEnd(10) + 'DPS/100냥');
for (const id of TOWER_ORDER) {
  if (id === 'gyeongbok' || id === 'haeinsa') continue;
  const def = TOWERS[id];
  for (const [lv, br] of [[1, null], [2, null], [3, null], [3, 'A'], [3, 'B']]) {
    const { total } = run(id, lv, br);
    const cost = towerInvested(id, lv, br);
    const dps = total / DUR;
    const label = br ? def.branches[br].name : `L${lv}`;
    console.log(def.name.padEnd(14) + label.padEnd(8) + String(cost).padEnd(8) + dps.toFixed(1).padEnd(10) + ((dps / cost) * 100).toFixed(2));
  }
}
// 지원 유산: 숭례문 L3 옆에서의 증폭량
const baseArcher = run('sungnyemun', 3, null).total;
for (const [id, lv, br] of [['haeinsa', 1, null], ['haeinsa', 3, null], ['haeinsa', 3, 'A'], ['gyeongbok', 1, null], ['gyeongbok', 3, 'A']]) {
  const r = run(id, lv, br, 'sungnyemun');
  const gain = (r.total - baseArcher) / DUR;
  const cost = towerInvested(id, lv, br);
  console.log(`${TOWERS[id].name} ${br ? TOWERS[id].branches[br].name : 'L' + lv} (+숭례문L3): 추가 DPS ${gain.toFixed(1)}  /100냥 ${((gain / cost) * 100).toFixed(2)}`);
}
