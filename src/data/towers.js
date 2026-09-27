// 유산(遺産) 타워 데이터
// 모든 수치는 tools/balance.mjs 시뮬레이션으로 검증한다.
// range 단위 = 타일, cd 단위 = 초, dmg = 1회 피해 (aura/beam 은 초당 피해)
// 병영(barracks)의 dmg · cd · hp 는 병사 한 명 기준, range 는 병사를 세울 수 있는 거리

export const CATEGORIES = {
  palace: { name: '궁궐', color: '#c8412f', desc: '왕실의 위엄. 궁수와 종, 그리고 왕의 가호.' },
  temple: { name: '사찰', color: '#d9a300', desc: '부처의 가피. 저주와 빛으로 적을 약화시킨다.' },
  fortress: { name: '성곽·과학', color: '#2f6f9f', desc: '조선의 기술력. 화포와 천문, 산성의 군사와 얼음 창고.' },
};

export const TOWER_ORDER = ['sungnyemun', 'hwaseong', 'bosingak', 'cheomseong', 'haeinsa', 'seokguram', 'gyeongbok', 'namhansan', 'seokbinggo', 'bulguksa'];

// 피해 종류 이름 (도감 · 설명용). 인과 = 갑옷과 저항을 모두 무시
export const DMG_TYPE_NAME = { phys: '물리', fire: '화기', holy: '신성', true: '인과', none: '없음' };

export const TOWERS = {
  sungnyemun: {
    name: '숭례문', title: '궁수루', cat: 'palace', kind: 'arrow', dmgType: 'phys',
    desc: '한양 도성의 남대문. 값싸고 빠른 궁수들이 한 명씩 정확히 쏜다.',
    levels: [
      { cost: 70, dmg: 12, cd: 0.85, range: 3.0 },
      { cost: 60, dmg: 19, cd: 0.8, range: 3.2 },
      { cost: 100, dmg: 28, cd: 0.75, range: 3.4 },
    ],
    branches: {
      A: {
        name: '편전 명궁', cost: 190, dmg: 90, cd: 1.1, range: 4.4, crit: 0.25, critMult: 2.5, target: 'strong',
        desc: '애기살(편전)을 쓰는 명궁. 사거리 대폭 증가, 25% 확률 2.5배 치명타. 강한 적 우선.',
      },
      B: {
        name: '연사 궁대', cost: 180, dmg: 20, cd: 0.5, range: 3.4, multishot: 3,
        desc: '궁대가 늘어나 한 번에 세 명을 동시에 쏜다. 졸병 떼에 강하다.',
      },
    },
  },
  hwaseong: {
    name: '수원화성', title: '포루', cat: 'fortress', kind: 'cannon', dmgType: 'fire',
    desc: '정조의 성곽. 포루에서 쏘는 화포가 범위 피해를 준다. 화기는 갑옷을 절반 무시.',
    levels: [
      { cost: 120, dmg: 32, cd: 2.0, range: 3.0, splash: 0.9 },
      { cost: 90, dmg: 50, cd: 1.9, range: 3.2, splash: 1.0 },
      { cost: 140, dmg: 76, cd: 1.8, range: 3.4, splash: 1.1 },
    ],
    branches: {
      A: {
        name: '홍이포', cost: 250, dmg: 190, cd: 2.4, range: 4.6, splash: 1.4, stun: 0.3,
        desc: '거대한 포탄이 넓은 범위를 강타하고 잠시 기절시킨다.',
      },
      B: {
        name: '화차 신기전', cost: 240, dmg: 46, cd: 2.2, range: 3.8, splash: 0.7, rockets: 6,
        desc: '화차에서 신기전 6발을 흩뿌린다. 넓게 퍼진 적에게 강하다.',
      },
    },
  },
  bosingak: {
    name: '보신각', title: '종루', cat: 'palace', kind: 'bell', dmgType: 'holy',
    desc: '도성의 종. 종이 울릴 때마다 주변 모든 적에게 피해를 주고 둔화시킨다.',
    levels: [
      { cost: 110, dmg: 9, cd: 1.6, range: 2.0, slow: 0.3, slowDur: 1.2 },
      { cost: 80, dmg: 14, cd: 1.5, range: 2.2, slow: 0.35, slowDur: 1.3 },
      { cost: 120, dmg: 20, cd: 1.4, range: 2.4, slow: 0.4, slowDur: 1.4 },
    ],
    branches: {
      A: {
        name: '에밀레종', cost: 230, dmg: 34, cd: 1.4, range: 2.6, slow: 0.4, slowDur: 1.5, stunEvery: 3, stun: 0.9,
        desc: '신종의 울림. 세 번째 타종마다 범위 내 모든 적을 기절시킨다.',
      },
      B: {
        name: '인정·파루', cost: 200, dmg: 20, cd: 1.2, range: 2.8, slow: 0.55, slowDur: 1.6, vuln: 0.15,
        desc: '통행금지의 종. 강한 둔화와 함께 받는 피해를 15% 늘린다.',
      },
    },
  },
  cheomseong: {
    name: '첨성대', title: '천문대', cat: 'fortress', kind: 'star', dmgType: 'holy', detect: true,
    desc: '신라의 천문대. 먼 거리의 적을 별빛으로 꿰뚫고, 은신한 시노비를 찾아낸다.',
    levels: [
      { cost: 140, dmg: 48, cd: 1.8, range: 4.6 },
      { cost: 100, dmg: 72, cd: 1.7, range: 4.9 },
      { cost: 150, dmg: 105, cd: 1.6, range: 5.2 },
    ],
    branches: {
      A: {
        name: '혼천의', cost: 260, dmg: 135, cd: 1.5, range: 5.6, meteorEvery: 3, meteorMult: 2, meteorSplash: 1.3,
        desc: '천체의 운행을 계산해 세 번째 공격마다 유성을 떨어뜨린다.',
      },
      B: {
        name: '관상감', cost: 230, dmg: 120, cd: 1.3, range: 5.4, vuln: 0.25, vulnDur: 4, detectMult: 1.4,
        desc: '적의 운명을 읽는다. 맞은 적은 4초간 받는 피해 +25%. 탐지 범위 확대.',
      },
    },
  },
  haeinsa: {
    name: '해인사', title: '장경각', cat: 'temple', kind: 'sutra', dmgType: 'holy',
    desc: '팔만대장경의 가호. 범위 안의 적은 갑옷이 약해지고 느려지며 지속 피해를 입는다.',
    levels: [
      { cost: 90, dps: 4, shred: 0.2, slow: 0.1, range: 2.4 },
      { cost: 80, dps: 7, shred: 0.3, slow: 0.12, range: 2.6 },
      { cost: 110, dps: 11, shred: 0.4, slow: 0.14, range: 2.8 },
    ],
    branches: {
      A: {
        name: '경판 결계', cost: 220, dps: 24, shred: 0.6, rshred: 0.3, slow: 0.18, range: 3.0,
        desc: '결계 안에서는 갑옷과 저항이 크게 무너진다.',
      },
      B: {
        name: '호국 법회', cost: 200, dps: 13, shred: 0.4, slow: 0.15, range: 3.0, killGold: 3, heroHeal: 0.03,
        desc: '범위에서 쓰러진 적마다 군자금 +3, 범위 안 영웅은 초당 3% 회복.',
      },
    },
  },
  seokguram: {
    name: '석굴암', title: '본존불', cat: 'temple', kind: 'beam', dmgType: 'holy',
    desc: '본존불의 광배에서 뻗는 빛. 한 적을 오래 비출수록 피해가 최대 4배까지 증가한다.',
    levels: [
      { cost: 200, dps: 26, ramp: 4, rampTime: 3, range: 3.4 },
      { cost: 140, dps: 40, ramp: 4, rampTime: 3, range: 3.6 },
      { cost: 180, dps: 58, ramp: 4, rampTime: 3, range: 3.8 },
    ],
    branches: {
      A: {
        name: '대광명', cost: 320, dps: 85, ramp: 7, rampTime: 3, range: 4.0,
        desc: '빛이 3초 만에 최대 7배까지 강해진다. 적장 사냥에 특화.',
      },
      B: {
        name: '천불 광배', cost: 300, dps: 56, ramp: 4, rampTime: 3, range: 3.8, chain: 2, chainMult: 0.6,
        desc: '빛이 주변 적 2명에게 갈라져 60% 피해를 준다.',
      },
    },
  },
  gyeongbok: {
    name: '경복궁', title: '근정전', cat: 'palace', kind: 'palace', dmgType: 'none',
    desc: '조선의 법궁. 직접 공격하지 않지만 주변 유산을 강화하고 매 파도 군자금을 내린다.',
    levels: [
      { cost: 220, buffDmg: 0.15, buffAs: 0.08, range: 2.5, income: 15 },
      { cost: 150, buffDmg: 0.22, buffAs: 0.12, range: 2.7, income: 25 },
      { cost: 200, buffDmg: 0.3, buffAs: 0.15, range: 2.9, income: 35 },
    ],
    branches: {
      A: {
        name: '왕도 정치', cost: 320, buffDmg: 0.45, buffAs: 0.2, buffRange: 0.1, range: 3.2, income: 40,
        desc: '주변 유산 공격력 +45%, 공격속도 +20%, 사거리 +10%.',
      },
      B: {
        name: '호조 국고', cost: 280, buffDmg: 0.3, buffAs: 0.15, range: 2.9, income: 90, interest: 0.05, interestCap: 60,
        desc: '매 파도 군자금 +90, 보유 군자금의 5% 이자(최대 60).',
      },
    },
  },
  namhansan: {
    name: '남한산성', title: '수어장대', cat: 'fortress', kind: 'barracks', dmgType: 'phys',
    desc: '산성을 지키는 수어청 군사. 가장 가까운 길목에 병사를 세워 적을 붙잡는다. 쓰러진 병사는 잠시 뒤 다시 나온다.',
    levels: [
      { cost: 90, soldiers: 2, hp: 175, dmg: 11, cd: 1, respawn: 8, range: 2.2 },
      { cost: 75, soldiers: 2, hp: 265, dmg: 17, cd: 1, respawn: 8, range: 2.4 },
      { cost: 120, soldiers: 3, hp: 340, dmg: 23, cd: 1, respawn: 7, range: 2.6 },
    ],
    branches: {
      A: {
        name: '수어청 정예', cost: 230, soldiers: 3, hp: 680, dmg: 38, cd: 1, respawn: 7, range: 2.8, armor: 0.4,
        desc: '두꺼운 갑옷을 입은 정예병 셋. 받는 피해 -40%. 적장 앞에서도 오래 버틴다.',
      },
      B: {
        name: '의승군', cost: 210, soldiers: 4, hp: 360, dmg: 27, cd: 1, respawn: 6, range: 2.8, regen: 0.03, soldierType: 'holy',
        desc: '남한산성을 쌓은 승병 넷. 신성 피해로 싸우고 초당 체력 3%씩 스스로 회복한다.',
      },
    },
  },
  seokbinggo: {
    name: '석빙고', title: '얼음 창고', cat: 'fortress', kind: 'frost', dmgType: 'phys',
    desc: '한여름에도 녹지 않는 얼음 창고. 얼음 덩이가 맞은 자리의 적들을 느리게 하고, 몇 번째마다 맞은 적을 꽁꽁 얼려 멈춰 세운다.',
    levels: [
      { cost: 110, dmg: 12, cd: 1.2, range: 3.0, splash: 0.5, slow: 0.3, slowDur: 1.6, freezeEvery: 5, freeze: 1.0 },
      { cost: 80, dmg: 18, cd: 1.15, range: 3.2, splash: 0.55, slow: 0.35, slowDur: 1.7, freezeEvery: 4, freeze: 1.1 },
      { cost: 120, dmg: 26, cd: 1.1, range: 3.4, splash: 0.6, slow: 0.4, slowDur: 1.8, freezeEvery: 4, freeze: 1.3 },
    ],
    branches: {
      A: {
        name: '한파', cost: 230, dmg: 40, cd: 1.3, range: 3.6, slow: 0.45, slowDur: 2, splash: 1.1, freezeEvery: 3, freeze: 1.0, freezeAll: true,
        desc: '큰 얼음 덩이가 넓게 터진다. 세 번째마다 터진 자리의 적을 모두 1초 얼린다.',
      },
      B: {
        name: '얼음 감옥', cost: 220, dmg: 50, cd: 1.0, range: 3.8, slow: 0.45, slowDur: 2, splash: 0.5, freezeEvery: 3, freeze: 2.0, shatter: 0.3, target: 'strong',
        desc: '세 번째마다 한 적을 2초 얼음에 가둔다. 얼어 있는 동안 받는 피해 +30%. 강한 적 우선.',
      },
    },
  },

  bulguksa: {
    name: '불국사', title: '다보탑', cat: 'temple', kind: 'pagoda', dmgType: 'true',
    desc: '부처님 나라의 탑. 하늘에서 내린 빛기둥이 적의 최대 체력에 비례한 피해를 주고, 갑옷과 저항을 모두 무시한다. 적장에게 강하다.',
    levels: [
      { cost: 150, dmg: 20, pct: 0.03, pctCap: 150, cd: 2.5, range: 3.4 },
      { cost: 110, dmg: 30, pct: 0.04, pctCap: 240, cd: 2.4, range: 3.6 },
      { cost: 150, dmg: 45, pct: 0.05, pctCap: 330, cd: 2.3, range: 3.8 },
    ],
    branches: {
      A: {
        name: '석가탑', cost: 280, dmg: 70, pct: 0.08, pctCap: 650, cd: 2.4, range: 4.2,
        desc: '그림자 없는 탑. 최대 체력의 8%(한 번에 최대 650) + 70. 적장 사냥 전용.',
      },
      B: {
        name: '연등회', cost: 260, dmg: 50, pct: 0.035, pctCap: 220, cd: 2.3, range: 4.0, targets: 3, vuln: 0.15, vulnDur: 3,
        desc: '연등 셋이 세 적을 한꺼번에 비춘다. 맞은 적은 3초간 받는 피해 +15%.',
      },
    },
  },

};

export const SELL_RATE = 0.7;
export const SYNERGY_RANGE = 2; // 체비셰프 거리
export const SYNERGY_BONUS = 0.12; // 같은 계열의 다른 유산 1종당

// 레벨(1~3) 또는 분기(A/B) 기준 기본 수치
export function towerBase(type, level, branch) {
  const def = TOWERS[type];
  if (branch) return def.branches[branch];
  return def.levels[level - 1];
}

// 현재까지 투자한 총 비용
export function towerInvested(type, level, branch) {
  const def = TOWERS[type];
  let sum = 0;
  for (let i = 0; i < level; i++) sum += def.levels[i].cost;
  if (branch) sum += def.branches[branch].cost;
  return sum;
}

// 다음 업그레이드 비용 (분기 선택 필요 시 null)
export function nextUpgradeCost(type, level, branch) {
  const def = TOWERS[type];
  if (branch) return -1; // 최종
  if (level < def.levels.length) return def.levels[level].cost;
  return null; // 분기 선택
}
