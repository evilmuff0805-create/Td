// 왜군 전술 카드: 파도 시작 전에 미리 공개된다. 대비해서 한 명도 놓치지 않으면 "전술 파훼" 보너스.

export const TACTIC_CHANCE = 0.45;
export const TACTIC_MIN_WAVE = 3;

export const TACTICS = {
  volley: {
    name: '조총 일제사격', minStage: 1, bonus: 40,
    desc: '조총병이 추가로 투입되고, 조총 피해가 50% 증가한다.',
    counter: '영웅을 조총 사거리 밖에 두거나 궁수로 먼저 제거하라.',
    add: [{ type: 'teppo', n: 8, gap: 0.6 }], teppoDmg: 1.5,
  },
  night: {
    name: '야습(夜襲)', minStage: 2, bonus: 60,
    desc: '밤이 된다. 모든 유산 사거리 -15%, 시노비 4명 추가.',
    counter: '첨성대와 봉수 경보로 은신을 드러내라.',
    add: [{ type: 'ninja', n: 4, gap: 1.2 }], rangeMult: 0.85,
  },
  march: {
    name: '강행군', minStage: 1, bonus: 40,
    desc: '이번 파도 왜군 이동 속도 +25%, 체력 -10%.',
    counter: '보신각·해인사로 발을 묶어라.',
    speedMult: 1.25, hpMult: 0.9,
  },
  iron: {
    name: '철갑 행렬', minStage: 1, bonus: 50,
    desc: '이번 파도 왜군 갑옷 +15%p.',
    counter: '해인사로 갑옷을 깎고 신성·화기 피해로 상대하라.',
    armorAdd: 0.15,
  },
  cavalry: {
    name: '기마 돌격', minStage: 2, bonus: 50,
    desc: '기마무사 6명이 뒤따라 돌격한다.',
    counter: '기병은 저지되지 않는다. 둔화와 범위 피해를 준비하라.',
    add: [{ type: 'cavalry', n: 6, gap: 1.0, delay: 6 }],
  },
  hex: {
    name: '음양 결계', minStage: 3, bonus: 50,
    desc: '음양사 3명 추가. 이번 파도 왜군 신성 저항 +20%p.',
    counter: '물리·화기 유산 비중을 높여라.',
    add: [{ type: 'onmyoji', n: 3, gap: 2.0, delay: 3 }], resistAdd: 0.2,
  },
};

export const TACTIC_ORDER = ['volley', 'march', 'iron', 'night', 'cavalry', 'hex'];
