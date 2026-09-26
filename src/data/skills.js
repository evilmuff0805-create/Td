// 비기(秘技): 전투 전에 2개를 장착하는 조선의 비밀 병기·계책
// rank: 해금에 필요한 품계 단계(0 = 종9품)

export const SKILL_ORDER = ['singijeon', 'bongsu', 'uibyeong', 'bigyeok', 'gunryang', 'cheonja', 'donguibogam', 'hanpa'];
export const SKILL_META_MAX = 5;

export const SKILLS = {
  singijeon: {
    name: '신기전 일제사격', cd: 28, rank: 0, target: 'point', radius: 1.6,
    dmg: 32, n: 12,
    desc: '지정 위치 반경 1.6칸에 신기전 12발을 퍼붓는다. 발당 화기 피해 {dmg}.',
  },
  bongsu: {
    name: '봉수 경보', cd: 45, rank: 0, target: 'none',
    dur: 10, vuln: 0.2,
    desc: '봉화를 올려 {dur}초간 모든 은신 적을 발각하고, 모든 적이 받는 피해 +20%.',
  },
  uibyeong: {
    name: '의병 소집', cd: 35, rank: 1, target: 'path',
    n: 4, hp: 200, dmg: 14, life: 12,
    desc: '지정 위치 길목에 의병 {n}명을 소집해 {life}초간 적을 저지한다.',
  },
  bigyeok: {
    name: '비격진천뢰', cd: 40, rank: 2, target: 'point', radius: 1.4,
    dmg: 420, delay: 2, stun: 1,
    desc: '2초 뒤 터지는 조선의 시한폭탄. 반경 1.4칸 화기 피해 {dmg} + 기절 1초.',
  },
  gunryang: {
    name: '군량 보급', cd: 75, rank: 3, target: 'none',
    gold: 120,
    desc: '즉시 군자금 {gold} 획득. 협동 시 동료도 절반을 받는다.',
  },
  cheonja: {
    name: '천자총통', cd: 50, rank: 4, target: 'point', radius: 2,
    dmg: 900,
    desc: '조선 최대의 화포. 지정 범위(2칸) 안 가장 강한 적에게 화기 피해 {dmg}.',
  },
  donguibogam: {
    name: '동의보감', cd: 60, rank: 5, target: 'none',
    desc: '허준의 의술. 모든 영웅의 체력을 완전히 회복하고, 쓰러진 영웅을 즉시 부활시킨다.',
  },
  hanpa: {
    name: '동장군 한파', cd: 32, rank: 6, target: 'point', radius: 2,
    slow: 0.6, dur: 6, dps: 12,
    desc: '반경 2칸을 얼려 {dur}초간 60% 둔화, 초당 신성 피해 {dps}.',
  },
};

export function skillPower(lv) {
  return 1 + 0.1 * lv;
}
export function skillCdMult(lv) {
  return 1 - 0.03 * lv;
}
export function skillMetaCost(lv) {
  return 150 * (lv + 1);
}

export function skillDesc(id, lv = 0) {
  const s = SKILLS[id];
  const p = skillPower(lv);
  return s.desc.replace(/\{(\w+)\}/g, (_, k) => {
    const v = s[k];
    if (typeof v !== 'number') return v;
    if (k === 'dmg' || k === 'gold' || k === 'dps') return Math.round(v * p);
    return v;
  });
}
