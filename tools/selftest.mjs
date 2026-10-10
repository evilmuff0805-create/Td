#!/usr/bin/env node
// 자체 점검: node tools/selftest.mjs
//  - 모든 지도·웨이브 문법 검증
//  - 같은 시드 → 같은 결과 (결정성)
//  - 스냅샷 인코딩/복원 왕복
//  - 합격기·전술·비기 명령 경로
//  - 임무/출석 로직
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { ART } from '../src/data/art.js';
import { STAGES, parseWave } from '../src/data/stages.js';
import { ENEMIES } from '../src/data/enemies.js';
import { TOWERS } from '../src/data/towers.js';
import { SKILL_ORDER } from '../src/data/skills.js';
import { HERO_ORDER } from '../src/data/heroes.js';
import { getMap, T_BUILD } from '../src/sim/map.js';
import { createGame, step, queueCommand, FIRST_PREP } from '../src/sim/sim.js';
import { spawnEnemy, damage } from '../src/sim/combat.js';
import { createBot, botThink, botSkills } from '../src/sim/ai.js';
import { SnapshotEncoder, emptyView, applySnapshot } from '../src/sim/snapshot.js';
import { ensureQuests, progressQuests, claimQuest, checkIn, canCheckIn, weekKey, rerollQuest } from '../src/meta/quests.js';
import { ITEM_ORDER, ITEM_PER_BATTLE } from '../src/data/items.js';

let passed = 0;
const test = (name, fn) => {
  fn();
  passed++;
  console.log(`  ✔ ${name}`);
};

test('일러스트: 전체 영웅·왜군·유산과 모든 그림 파일 연결', () => {
  for (const [group, ids] of [['heroes', HERO_ORDER], ['enemies', Object.keys(ENEMIES)], ['towers', Object.keys(TOWERS)]]) {
    assert.deepEqual(Object.keys(ART[group]).sort(), [...ids].sort(), `${group} 그림 누락`);
  }
  for (const group of ['heroes', 'enemies', 'allies', 'towers', 'structures', 'props', 'terrain']) {
    for (const [id, entry] of Object.entries(ART[group])) {
      const atlas = ART.atlases[entry.atlas];
      assert.ok(atlas, `${group}/${id} 시트 누락`);
      assert.ok(Number.isInteger(entry.cell) && entry.cell >= 0 && entry.cell < atlas.columns * atlas.rows, `${group}/${id} 범위 밖 그림`);
    }
  }
  for (const src of [...Object.values(ART.atlases).map((a) => a.src), ART.scene]) {
    const buf = fs.readFileSync(new URL(`../${src}`, import.meta.url));
    assert.equal(buf.toString('ascii', 0, 4), 'RIFF', `${src} WebP 파일 오류`);
    assert.equal(buf.toString('ascii', 8, 12), 'WEBP', `${src} WebP 파일 오류`);
  }
});

test('지도와 웨이브 데이터', () => {
  assert.equal(STAGES.length, 25);
  // 도요토미 히데요시는 마지막 전장의 마지막 파도에만, 단 한 명
  for (const st of STAGES) {
    const n = st.waves.flatMap((w) => parseWave(w)).filter((g) => g.type === 'hideyoshi').reduce((a, g) => a + g.n, 0);
    assert.equal(n, st.id === STAGES[STAGES.length - 1].id ? 1 : 0, `${st.id} 히데요시 ${n}명`);
  }
  assert.ok(parseWave(STAGES[STAGES.length - 1].waves.at(-1)).every((g) => g.type === 'hideyoshi'));
  for (const st of STAGES) {
    const map = getMap(st.id);
    const buildable = map.grid.filter((t) => t === T_BUILD).length;
    assert.ok(buildable >= 60, `${st.id} 건설 가능 칸 부족: ${buildable}`);
    for (const w of st.waves) for (const g of parseWave(w)) assert.ok(ENEMIES[g.type], `${st.id} 알 수 없는 적 ${g.type}`);
  }
});

function play(seed, mode = 'solo') {
  const all = Object.keys(TOWERS);
  const players = mode === 'solo'
    ? [{ heroes: ['yi', 'sejong'], skills: ['singijeon', 'bongsu'], towers: all }]
    : [{ heroes: ['eulji'], skills: ['bigyeok', 'uibyeong'], towers: all }, { heroes: ['gang'], skills: ['hanpa', 'cheonja'], towers: all }];
  const s = createGame({ stageId: 's2', difficulty: 'normal', mode, seed, players });
  const bots = players.map((_, i) => createBot(s, i, {}));
  const send = (c) => queueCommand(s, c);
  while (!s.result && s.tick < 60 * 60 * 20) {
    for (const b of bots) {
      botThink(s, b, send);
      botSkills(s, b, send);
    }
    step(s);
    s.events.length = 0;
  }
  return s;
}

test('결정성: 같은 시드는 같은 결과', () => {
  const a = play(42);
  const b = play(42);
  assert.equal(a.tick, b.tick);
  assert.equal(a.lives, b.lives);
  assert.deepEqual(a.players.map((p) => p.stats), b.players.map((p) => p.stats));
});

test('협동 전투 완주 + 합격기 발동', () => {
  const s = play(7, 'coop');
  assert.ok(s.result, '결과 없음');
  assert.ok(s.players[0].stats.combos > 0, '합격기가 한 번도 발동하지 않음');
  assert.ok(s.players[1].stats.skillsUsed > 0, '2P 비기 사용 없음');
});

test('스냅샷 왕복', () => {
  const all = Object.keys(TOWERS);
  const s = createGame({ stageId: 's4', difficulty: 'normal', mode: 'online', seed: 3, players: [{ heroes: ['yi'], skills: ['singijeon', 'bongsu'], towers: all }, { heroes: ['gwak'], skills: ['bongsu', 'singijeon'], towers: all }] });
  const bots = [createBot(s, 0, {}), createBot(s, 1, {})];
  const send = (c) => queueCommand(s, c);
  for (let i = 0; i < 60 * 90; i++) {
    for (const b of bots) botThink(s, b, send);
    step(s);
  }
  const enc = new SnapshotEncoder();
  const snap = JSON.parse(JSON.stringify(enc.encode(s, s.events.splice(0))));
  const v = emptyView({ stageId: 's4', difficulty: 'normal' });
  applySnapshot(v, snap);
  assert.equal(v.towers.length, s.towers.length);
  assert.equal(v.enemies.length, s.enemies.length);
  assert.equal(v.heroes.length, 2);
  assert.equal(v.players[1].gold, s.players[1].gold);
  assert.equal(v.wave.n, s.wave.n);
  for (const t of s.towers) {
    const vt = v.towers.find((x) => x.id === t.id);
    assert.ok(vt && vt.type === t.type && vt.level === t.level && vt.owner === t.owner);
  }
  const size = JSON.stringify(snap).length;
  assert.ok(size < 40000, `스냅샷이 너무 큼: ${size}B`);
});

test('파도는 누르지 않아도 저절로 시작 (첫 파도 보너스 없음)', () => {
  const s = createGame({ stageId: 's1', difficulty: 'normal', mode: 'solo', seed: 2, players: [{ heroes: ['yi'], skills: [] }] });
  for (let i = 0; i < 60 * (FIRST_PREP + 1); i++) step(s);
  assert.equal(s.wave.n, 1);
  for (let i = 0; i < 60 * 60 && s.wave.n < 2; i++) step(s);
  assert.equal(s.wave.n, 2);
  const t = createGame({ stageId: 's1', difficulty: 'normal', mode: 'solo', seed: 2, players: [{ heroes: ['yi'], skills: [] }] });
  const gold = t.players[0].gold;
  queueCommand(t, { t: 'nextWave', p: 0 });
  step(t);
  assert.equal(t.wave.n, 1);
  assert.equal(t.players[0].gold, gold);
});

test('급보 전령: 5% 확률, 한 판에 한 번, 1P · 2P 모두 같은 군자금', () => {
  const mk = (seed, courier) => createGame({ stageId: 's4', difficulty: 'normal', mode: 'local', seed, courier, players: [{ heroes: ['yi'], skills: [] }, { heroes: ['sejong'], skills: [] }] });
  let hits = 0;
  for (let sd = 1; sd <= 2000; sd++) if (mk(sd).courier) hits++;
  assert.ok(hits > 60 && hits < 140, `발동률 ${hits / 20}%`);
  // 주 난수를 건드리지 않는다 (밸런스 결과 그대로)
  assert.equal(mk(9, true).rng, mk(9, false).rng);
  const s = mk(9, true);
  const c = s.courier;
  assert.ok(c.gold >= 100 && c.gold <= 500 && c.gold % 10 === 0);
  s.lives = 9999;
  let arrived = 0;
  let before = null;
  let after = null;
  for (let i = 0; i < 60 * 900 && !s.result; i++) {
    if (s.movers.some((m) => m.kind === 'courier')) before = before || s.players.map((p) => p.gold);
    step(s);
    for (const e of s.events) {
      if (e.k === 'courier' && e.gold) {
        arrived++;
        after = after || s.players.map((p) => p.gold);
      }
    }
    s.events.length = 0;
  }
  assert.equal(arrived, 1);
  assert.ok(c.done);
  assert.equal(after[0] - after[1], before[0] - before[1]); // 둘 다 같은 액수
  assert.ok(after[0] - before[0] >= c.gold);
  assert.equal(mk(9, false).courier, null);
});

test('명령 검증: 남의 유산 철거 불가, 길 위 건설 불가', () => {
  const all = Object.keys(TOWERS);
  const s = createGame({ stageId: 's1', difficulty: 'normal', mode: 'local', seed: 1, players: [{ heroes: ['yi'], skills: [], towers: all }, { heroes: ['sejong'], skills: [], towers: all }] });
  queueCommand(s, { t: 'build', p: 0, x: 6, y: 4, tower: 'sungnyemun' });
  queueCommand(s, { t: 'build', p: 1, x: 5, y: 4, tower: 'sungnyemun' }); // 길
  step(s);
  assert.equal(s.towers.length, 1);
  const id = s.towers[0].id;
  queueCommand(s, { t: 'sell', p: 1, id });
  step(s);
  assert.equal(s.towers.length, 1);
  queueCommand(s, { t: 'upgrade', p: 1, id }); // 동료 유산 강화는 가능 (자기 돈)
  step(s);
  assert.equal(s.towers[0].level, 2);
  queueCommand(s, { t: 'sell', p: 0, id });
  step(s);
  assert.equal(s.towers.length, 0);
});

test('새 유산: 남한산성 병사 · 석빙고 얼림 · 불국사 체력 비례 피해', () => {
  const all = Object.keys(TOWERS);
  const s = createGame({ stageId: 's1', difficulty: 'normal', mode: 'solo', seed: 5, players: [{ heroes: [], skills: [], towers: all }] });
  s.players[0].gold = 1e5;
  const build = (tower, x, y) => {
    queueCommand(s, { t: 'build', p: 0, x, y, tower });
    step(s);
    return s.towers.at(-1);
  };
  const run = (sec) => {
    for (let i = 0; i < sec * 60; i++) {
      step(s);
      s.events.length = 0;
    }
  };
  // 남한산성: 가장 가까운 길목에 병사 2명, 3단계에서 3명, 쓰러지면 재정비 뒤 다시 채움, 철거하면 사라짐
  const b = build('namhansan', 6, 6);
  run(2);
  const guards = () => s.summons.filter((m) => m.tower === b.id);
  assert.equal(guards().length, 2);
  for (const m of guards()) assert.ok(Math.hypot(m.x - 5.5, 0) < 0.6, `병사가 길 위에 있어야 함: ${m.x}`);
  queueCommand(s, { t: 'upgrade', p: 0, id: b.id });
  queueCommand(s, { t: 'upgrade', p: 0, id: b.id });
  run(2);
  assert.equal(guards().length, 3);
  guards()[0].hp = 0;
  run(1);
  assert.equal(guards().length, 2);
  run(TOWERS.namhansan.levels[2].respawn + 1);
  assert.equal(guards().length, 3);
  queueCommand(s, { t: 'sell', p: 0, id: b.id });
  step(s);
  step(s);
  assert.equal(guards().length, 0);
  // 석빙고: 네 번째 얼음마다 얼림(iceT)
  s.wave.phase = 'final';
  s.wave.n = s.wave.total;
  s.waveStats[1] = { remaining: 0, queued: 0, leaks: 0 };
  const e = spawnEnemy(s, 'samurai', 0, 1, 5); // 적이 먼저 있어야 전투가 끝나지 않는다
  e.hp = e.maxHp = 1e5;
  const f = build('seokbinggo', 4, 6);
  queueCommand(s, { t: 'upgrade', p: 0, id: f.id });
  step(s);
  let frozen = false;
  for (let i = 0; i < 60 * 8 && !frozen; i++) {
    step(s);
    s.events.length = 0;
    frozen = e.iceT > 0 && e.stunT > 0;
  }
  assert.ok(frozen, '석빙고가 적을 얼려야 함');
  // 불국사: 갑옷 88% 히데요시에게도 최대 체력 비례 피해가 그대로 (상한까지)
  queueCommand(s, { t: 'sell', p: 0, id: f.id });
  const hy = spawnEnemy(s, 'hideyoshi', 0, 1, 6);
  e.hp = 0; // 강적 우선 조준이 히데요시를 고르도록
  const pg = build('bulguksa', 6, 4);
  const st = TOWERS.bulguksa.levels[0];
  const pool = () => hy.hp + (hy.shield || 0); // 황금 표주박 보호막이 먼저 받는다
  const hp0 = pool();
  let hitAt = -1;
  for (let i = 0; i < 60 * 6 && hitAt < 0; i++) {
    step(s);
    s.events.length = 0;
    if (pool() < hp0) hitAt = i;
  }
  assert.ok(hitAt >= 0, '불국사가 쏘아야 함');
  const expect = (st.dmg + Math.min(st.pctCap, st.pct * hy.maxHp)) * pg.dmgMult;
  assert.ok(Math.abs(hp0 - pool() - expect) < 1, `인과 피해 ${hp0 - pool()} ≈ ${expect}`);
  // 스냅샷에 병사 종류와 얼음 투사체가 실린다
  const v = emptyView({ stageId: 's1', difficulty: 'normal' });
  applySnapshot(v, new SnapshotEncoder().encode(s, []));
  assert.equal(v.towers.length, s.towers.length);
});

test('모든 영웅 기술 · 비기 시전 경로', () => {
  const all = Object.keys(TOWERS);
  for (let i = 0; i < HERO_ORDER.length; i += 2) {
    const s = createGame({ stageId: 's3', difficulty: 'normal', mode: 'solo', seed: i, players: [{ heroes: [HERO_ORDER[i], HERO_ORDER[i + 1]], skills: SKILL_ORDER.slice(0, 8), towers: all }] });
    queueCommand(s, { t: 'nextWave', p: 0 });
    for (let k = 0; k < 60 * 20; k++) step(s);
    s.heroes.forEach((h, hi) => {
      h.skillCd = 0;
      h.ultCd = 0;
      queueCommand(s, { t: 'heroSkill', p: 0, h: hi, x: 6, y: 1.5 });
      queueCommand(s, { t: 'heroUlt', p: 0, h: hi, x: 6, y: 1.5 });
    });
    s.players[0].skills.forEach((sl, si) => {
      sl.cd = 0;
      queueCommand(s, { t: 'skill', p: 0, slot: si, x: 6, y: 1.5 });
    });
    s.resonance.gauge = 100;
    s.heroes[1].x = s.heroes[0].x;
    s.heroes[1].y = s.heroes[0].y;
    queueCommand(s, { t: 'combo', p: 0 });
    for (let k = 0; k < 60 * 5; k++) step(s);
    assert.equal(s.players[0].stats.combos, 1);
    assert.equal(s.players[0].stats.skillsUsed, 8);
  }
});

test('임무 · 출석부', () => {
  const p = { quests: { daily: null, weekly: null }, attendance: { last: '', count: 0 }, coins: 0, jade: 0 };
  ensureQuests(p, new Date(2026, 8, 26));
  assert.equal(p.quests.daily.list.length, 3);
  assert.equal(p.quests.weekly.list.length, 4);
  const done = progressQuests(p, { kills: 99999, elites: 999, heroKills: 999, builds: 99, branches: 9, skillsUsed: 99, combos: 99, wins: 99, coopGames: 9, perfectWaves: 99, tacticsBroken: 99, bossKills: 9, earlyCalls: 9, coopWins: 9, stars: 99, hardWins: 9 });
  assert.equal(done.length, 7);
  assert.ok(claimQuest(p, 'daily', 0));
  assert.equal(claimQuest(p, 'daily', 0), null);
  assert.ok(canCheckIn(p));
  checkIn(p);
  assert.ok(!canCheckIn(p));
  assert.equal(weekKey(new Date(2026, 8, 26)), '2026-09-21');
});

test('보급품: 전투마다 종류별 한도, 효과, 스냅샷', () => {
  const all = Object.keys(TOWERS);
  const items = Object.fromEntries(ITEM_ORDER.map((id) => [id, 9]));
  const s = createGame({ stageId: 's1', difficulty: 'normal', mode: 'solo', seed: 3, players: [{ heroes: ['yi', 'sejong'], skills: ['singijeon', 'bongsu'], towers: all, items, skins: { yi: 'yi_gold' } }] });
  assert.equal(s.players[0].items.insam, ITEM_PER_BATTLE);
  assert.equal(s.heroes[0].skin, 'yi_gold');
  queueCommand(s, { t: 'nextWave', p: 0 });
  for (let k = 0; k < 60 * 8; k++) step(s);
  const lives = s.lives;
  const gold = s.players[0].gold;
  queueCommand(s, { t: 'item', p: 0, id: 'insam' });
  step(s);
  assert.equal(s.lives, lives + 3);
  queueCommand(s, { t: 'item', p: 0, id: 'chest' }); // 재사용 대기 중이라 무시
  step(s);
  assert.equal(s.players[0].items.chest, ITEM_PER_BATTLE);
  for (let k = 0; k < 60 * 4; k++) step(s);
  queueCommand(s, { t: 'item', p: 0, id: 'chest' });
  step(s);
  assert.ok(s.players[0].gold >= gold + 120);
  for (let k = 0; k < 60 * 4; k++) step(s);
  queueCommand(s, { t: 'item', p: 0, id: 'bujeok' });
  step(s);
  assert.ok(s.enemies.length === 0 || s.enemies.every((e) => e.stunT > 0));
  for (let k = 0; k < 60 * 4; k++) step(s);
  const e0 = s.enemies[0];
  queueCommand(s, { t: 'item', p: 0, id: 'hwacha', x: e0 ? e0.x : 5, y: e0 ? e0.y : 5 });
  for (let k = 0; k < 60 * 2; k++) step(s);
  assert.equal(s.players[0].stats.itemsUsed, 4);
  // 한도를 다 쓰면 더는 안 된다
  for (let n = 0; n < 3; n++) {
    for (let k = 0; k < 60 * 4; k++) step(s);
    queueCommand(s, { t: 'item', p: 0, id: 'insam' });
    step(s);
  }
  assert.equal(s.players[0].items.insam, 0);
  assert.equal(s.players[0].stats.itemsUsed, 5);
  const v = emptyView({ stageId: 's1', difficulty: 'normal' });
  applySnapshot(v, new SnapshotEncoder().encode(s, []));
  assert.equal(v.players[0].items.insam, 0);
  assert.equal(v.heroes[0].skin, 'yi_gold');
});

test('임무 교체 (옥)', () => {
  const p = { quests: { daily: null, weekly: null }, attendance: { last: '', count: 0 }, coins: 0, jade: 15 };
  ensureQuests(p, new Date(2026, 8, 26));
  const before = p.quests.daily.list.map((q) => q.id);
  assert.ok(rerollQuest(p, 'daily', 1));
  assert.equal(p.jade, 5);
  assert.notEqual(p.quests.daily.list[1].id, before[1]);
  assert.equal(new Set(p.quests.daily.list.map((q) => q.id)).size, 3);
  assert.ok(!rerollQuest(p, 'daily', 0)); // 옥 부족
});

test('선택적 피해 진단은 초과 피해를 제외하고 실제 전투 결과를 바꾸지 않음',()=>{
  const mk=()=>createGame({stageId:'s1',difficulty:'normal',mode:'solo',seed:2,players:[{heroes:['yi'],skills:[]}]});
  const a=mk(),b=mk();a.damageLedger={};
  for(const s of [a,b]){const e=spawnEnemy(s,'ashigaru',0,1);e.hp=10;e.armor=0;e.shield=0;damage(s,e,100,'phys',{p:0,kind:'hero',ref:s.heroes[0]});}
  assert.equal(a.damageLedger['hero:yi'],10);assert.equal(a.players[0].stats.damage,100);
  delete a.damageLedger;assert.deepEqual(a,b);
});
console.log(`\n자체 점검 통과: ${passed}개`);
