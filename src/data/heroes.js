// 호국 영웅 데이터
// 전투 중 레벨(1~10)은 처치 경험치로, 영구 레벨(0~10)은 엽전으로 올린다.

export const HERO_ORDER = ['yi', 'sejong', 'eulji', 'gang', 'gwon', 'gwak', 'ahn', 'dangun'];

export const HERO_XP = [0, 60, 150, 280, 450, 680, 960, 1300, 1720, 2200]; // 레벨 n 도달 누적 경험치
export const HERO_MAX_LV = 10;
export const HERO_META_MAX = 10;

export const HEROES = {
  yi: {
    name: '이순신', title: '충무공', era: '조선', role: '원거리 · 지휘', color: '#2f5f8f', accent: '#c8412f',
    hp: 420, dmg: 22, cd: 0.9, range: 3.4, speed: 2.2, dmgType: 'phys', attack: 'arrow', block: 0,
    passive: { name: '필사즉생', desc: '주변 2.5칸 유산의 공격 속도 +12%.' },
    skill: { short: '학익진', name: '학익진', cd: 14, base: 60, perLv: 10, desc: '학의 날개처럼 펼친 부채꼴 화살 세례. 전방 4칸 부채꼴 적에게 물리 피해.' },
    ult: { short: '거북선', name: '거북선 출격', cd: 60, base: 220, perLv: 30, desc: '거북선이 길을 거슬러 돌진하며 닿는 모든 적에게 화기 피해를 주고 밀어낸다.' },
    quote: '신에게는 아직 열두 척의 배가 남아 있사옵니다.',
    unlock: null,
  },
  sejong: {
    name: '세종대왕', title: '성군', era: '조선', role: '지원 · 통제', color: '#b8322a', accent: '#d9a300',
    hp: 360, dmg: 16, cd: 1.0, range: 3.0, speed: 2.0, dmgType: 'holy', attack: 'orb', block: 0,
    passive: { name: '집현전', desc: '모든 아군의 처치 군자금 +10%.' },
    skill: { short: '훈민\n정음', name: '훈민정음', cd: 16, base: 50, perLv: 8, desc: '하늘에서 한글 자모가 쏟아져 반경 1.8칸 적에게 신성 피해와 기절 1.2초.' },
    ult: { short: '자격루', name: '자격루', cd: 70, desc: '시간을 다스린다. 6초간 모든 적 50% 둔화, 모든 유산 재장전 후 공격 속도 +30%.' },
    quote: '나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.',
    unlock: null,
  },
  eulji: {
    name: '을지문덕', title: '살수의 명장', era: '고구려', role: '범위 · 전략', color: '#3d6b4f', accent: '#d9a300',
    hp: 380, dmg: 18, cd: 1.2, range: 3.2, speed: 2.0, dmgType: 'holy', attack: 'orb', splash: 0.7, block: 0,
    passive: { name: '여수장우중문시', desc: '주변 2.5칸 적의 갑옷 -20%. 적장의 기세를 꺾는 시(詩).' },
    skill: { short: '청야', name: '청야전술', cd: 15, base: 30, perLv: 5, desc: '들판을 불태워 5초간 반경 1.5칸에 초당 화기 피해 + 20% 둔화.' },
    ult: { short: '살수', name: '살수대첩', cd: 65, base: 300, perLv: 40, desc: '둑을 터뜨려 반경 3칸 적에게 큰 피해를 주고 3칸 뒤로 쓸어낸다.' },
    quote: '전승공기고 지족원운지 — 싸움에 이겨 공이 높으니 만족하고 그만두라.',
    unlock: { coins: 1500, stage: 's1' },
  },
  gang: {
    name: '강감찬', title: '귀주의 별', era: '고려', role: '근접 · 적장 사냥', color: '#5a4a8a', accent: '#f0c75e',
    hp: 700, dmg: 40, cd: 1.0, range: 1.1, speed: 2.3, dmgType: 'phys', attack: 'melee', block: 2,
    passive: { name: '낙성', desc: '4번째 공격마다 별이 떨어져 주변 1.2칸에 2배 신성 피해.' },
    skill: { short: '돌격', name: '귀주 돌격', cd: 12, base: 80, perLv: 12, desc: '지정 지점까지 돌진하며 경로의 적에게 피해와 기절 0.5초.' },
    ult: { short: '낙성우', name: '낙성우', cd: 60, base: 180, perLv: 25, desc: '가장 강한 적 8명에게 유성이 떨어진다.' },
    quote: '별이 떨어진 곳에서 태어났으니, 이 땅에 떨어지는 적 또한 별과 같으리라.',
    unlock: { coins: 2000, stage: 's2' },
  },
  gwon: {
    name: '권율', title: '행주의 방패', era: '조선', role: '근접 · 방어', color: '#7a5230', accent: '#e6d3a3',
    hp: 900, dmg: 30, cd: 1.1, range: 1.1, speed: 2.0, dmgType: 'phys', attack: 'melee', block: 3, regen: 0.015,
    passive: { name: '행주치마', desc: '초당 최대 체력 1.5% 회복. 적 3명까지 저지.' },
    skill: { short: '투석', name: '투석', cd: 12, base: 45, perLv: 7, desc: '행주치마에 담아 온 돌 6개가 반경 2칸에 떨어져 피해와 기절 0.6초.' },
    ult: { short: '산성', name: '행주산성', cd: 55, desc: '길 위에 목책을 세워 6초간 모든 졸병·정예·중장을 막고, 권율이 받는 피해 50% 감소.' },
    quote: '돌 하나, 치마폭 하나까지 모두가 성벽이다.',
    unlock: { coins: 2500, stage: 's3' },
  },
  gwak: {
    name: '곽재우', title: '홍의장군', era: '조선', role: '기동 · 게릴라', color: '#c0392b', accent: '#2c2c2c',
    hp: 440, dmg: 16, cd: 0.5, range: 3.0, speed: 2.8, dmgType: 'phys', attack: 'arrow', block: 0, detect: 3,
    passive: { name: '천강홍의', desc: '주변 3칸의 은신한 적을 발각한다. 이동 속도가 빠르다.' },
    skill: { short: '매복', name: '의병 매복', cd: 18, desc: '지정 지점에 의병 3명을 매복시켜 12초간 적을 저지한다.' },
    ult: { short: '질풍', name: '홍의 질풍', cd: 50, desc: '8초간 무적, 공격 속도 2배, 화살이 적 3명에게 튕긴다.' },
    quote: '하늘이 내린 붉은 옷의 장군이 여기 있다!',
    unlock: { coins: 3000, stage: 's4' },
  },
  ahn: {
    name: '안중근', title: '대한의군 참모중장', era: '대한제국', role: '원거리 · 저격', color: '#2e2e36', accent: '#c8a24a',
    hp: 380, dmg: 32, cd: 1.6, range: 4.2, speed: 2.2, dmgType: 'fire', attack: 'gun', block: 0,
    passive: { name: '위국헌신', desc: '권총은 화기라 갑옷의 절반을 무시한다. 적장에게 주는 피해 +25%. 사거리가 가장 길다.' },
    skill: { short: '연발', name: '일곱 발의 총성', cd: 14, base: 34, perLv: 6, desc: '지정 지점 반경 2.2칸의 적에게 권총 7발을 연달아 쏜다. 발당 화기 피해.' },
    ult: { short: '저격', name: '하얼빈 의거', cd: 65, base: 800, perLv: 100, desc: '전장에서 가장 강한 적(적장 우선)을 저격해 큰 화기 피해, 기절 1.5초, 6초간 받는 피해 +30%.' },
    quote: '위국헌신 군인본분 — 나라를 위해 몸 바치는 것은 군인의 본분이다.',
    unlock: { coins: 3500, stage: 's12' },
  },
  dangun: {
    name: '단군왕검', title: '고조선의 시조', era: '고조선', role: '범위 · 번개', color: '#e8e2d0', accent: '#3a8a5a',
    hp: 480, dmg: 17, cd: 1.15, range: 3.2, speed: 2.0, dmgType: 'holy', attack: 'lightning', block: 0,
    passive: { name: '홍익인간', desc: '널리 사람을 이롭게: 모든 아군 영웅이 초당 체력 0.7% 회복. 기본 공격 번개가 옆의 적 1명에게 절반 피해로 튄다.' },
    skill: { short: '마늘', name: '마늘 던지기', cd: 12, base: 44, perLv: 7, desc: '곰이 사람이 된 백일의 마늘! 마늘 3통을 던져 반경 0.9칸마다 신성 피해 + 3초간 매워서 35% 둔화.' },
    ult: { short: '천둥', name: '천부인 번개', cd: 60, base: 135, perLv: 18, desc: '하늘의 세 보물을 들어 번개 12줄기를 가장 강한 적들에게 내리친다. 줄기마다 신성 피해 + 기절 0.8초.' },
    quote: '널리 인간을 이롭게 하라.',
    unlock: { coins: 4000, stage: 's5' },
  },
};

// 전투 중 스탯 배율
export function heroLevelMult(lv, metaLv) {
  return {
    hp: (1 + 0.09 * (lv - 1)) * (1 + 0.04 * metaLv),
    dmg: (1 + 0.08 * (lv - 1)) * (1 + 0.04 * metaLv),
    skill: 1 + 0.04 * metaLv,
  };
}

export function heroLevelFromXp(xp) {
  let lv = 1;
  for (let i = 1; i < HERO_XP.length; i++) if (xp >= HERO_XP[i]) lv = i + 1;
  return Math.min(lv, HERO_MAX_LV);
}

export function heroMetaCost(lv) {
  return 200 * (lv + 1);
}
