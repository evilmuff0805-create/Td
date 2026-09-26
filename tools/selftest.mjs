#!/usr/bin/env node
// 자체 점검: node tools/selftest.mjs
//  - 모든 지도·웨이브 문법 검증
//  - 같은 시드 → 같은 결과 (결정성)
//  - 스냅샷 인코딩/복원 왕복
//  - 합격기·전술·비기 명령 경로
//  - 임무/출석 로직
import assert from 'node:assert/strict';
import { STAGES, parseWave } from '../src/data/stages.js';
import { ENEMIES } from '../src/data/enemies.js';
import { TOWERS } from '../src/data/towers.js';
import { SKILL_ORDER } from '../src/data/skills.js';
import { HERO_ORDER } from '../src/data/heroes.js';
import { getMap, T_BUILD } from '../src/sim/map.js';
import { createGame, step, queueCommand } from '../src/sim/sim.js';
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

test('지도와 웨이브 데이터', () => {
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

console.log(`\n자체 점검 통과: ${passed}개`);
