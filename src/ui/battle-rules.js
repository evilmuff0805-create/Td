import { h, fmt } from './dom.js';
import { STAGE_BY_ID, DIFFICULTY, COOP, SOLO_HERO_DAMAGE, OPENING_RAMP_WAVES, startingGold, parseWave } from '../data/stages.js';
import { ENEMIES } from '../data/enemies.js';

export function difficultyText(difficulty, coop = false) {
  const d = DIFFICULTY[difficulty];
  const hp = d.openingHp === undefined
    ? `적 체력 ×${d.hp}`
    : `일반 병력 체력 ×${d.openingHp}→${d.hp} (${OPENING_RAMP_WAVES}파부터 최대) · 적장 ×${d.hp}`;
  return `${hp}${!coop&&difficulty==='normal'?` · 1영웅 솔로: 영웅 피해 ×${SOLO_HERO_DAMAGE}`:''}${coop ? ` · 협동: 적 체력 추가 ×${COOP.hpMult}` : ''} · 민심 ${d.lives} · 보상 ×${d.reward}`;
}

export function stageAdvice(stageId, towers) {
  const st = STAGE_BY_ID[stageId], available = new Set(towers);
  const first = predicate => st.waves.findIndex(w => parseWave(w).some(g => predicate(ENEMIES[g.type]))) + 1;
  const advice = [];
  const sharedEntry = st.paths.length > 1 && st.paths.every(path => path[0][0] === st.paths[0][0][0] && path[0][1] === st.paths[0][0][1]);
  advice.push(sharedEntry
    ? '첫 파도 전에 방어선을 마련하고, 두 길이 갈라지기 전 입구 굽이에 영웅을 배치하세요.'
    : st.paths.length > 1
      ? '첫 파도 전에 방어선을 마련하고, 두 길에 영웅과 유산의 화력을 나눠 배치하세요.'
      : '첫 파도 전에 방어선을 마련하고, 유산의 사거리가 겹치는 길목에 영웅을 배치하세요.');
  const stealth = first(e => e.stealth);
  if (available.has('cheomseong')) advice.push(stealth
    ? `${stealth}파의 은신 병력과 야습 예고에 대비해 첨성대의 탐지 범위로 각 길을 덮으세요.`
    : '야습이 예고되면 첨성대의 탐지 범위로 각 길을 덮으세요.');
  const armored = first(e => e.tier !== 4 && e.armor >= .5);
  if (armored) {
    const damage = available.has('seokguram') ? '석굴암·첨성대' : '수원화성·첨성대';
    advice.push(`${armored}파부터 두꺼운 갑옷의 병력이 옵니다. ${damage}${available.has('haeinsa') ? '와 해인사' : ''}를 함께 배치하세요.`);
  }
  if (st.finale) advice.push('최종 적장에 대비해 단일 공격 유산을 특화하고, 기여가 적은 유산의 철거금도 재투자하세요.');
  return advice;
}

export function battleRules(stageId, difficulty, coop, towers) {
  const gold = startingGold(stageId, coop);
  return h('div', { class: 'battle-rules', 'data-starting-gold': gold, 'data-budget-mode': coop ? 'coop' : 'solo' },
    h('div', { class: 'row' },
      h('span', { class: 'chip' }, `${coop ? '각자 ' : ''}시작 군자금 ${fmt(gold)}냥`),
      h('span', { class: 'dim' }, difficultyText(difficulty, coop))),
    h('details', { class: 'battle-plan' },
      h('summary', {}, '전장 대응 안내'),
      h('ul', {}, stageAdvice(stageId, towers).map(tip => h('li', {}, tip)))));
}
