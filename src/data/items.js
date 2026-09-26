// 보급품: 옥으로 사서 전투 중에 쓰는 소모품 (종류별로 전투마다 최대 ITEM_PER_BATTLE개)
export const ITEM_ORDER = ['insam', 'chest', 'hwacha', 'bujeok'];
export const ITEM_PER_BATTLE = 2;
export const ITEM_CD = 3; // 보급품끼리 공유하는 짧은 재사용 대기

export const ITEMS = {
  insam: {
    short: '산삼', name: '산삼', price: 12, target: 'none', lives: 3,
    desc: '백성을 달래 민심 +3. 최대치를 넘어서도 쌓인다.',
  },
  chest: {
    short: '궤짝', name: '군량 궤짝', price: 15, target: 'none', gold: 120,
    desc: '즉시 군자금 +120냥.',
  },
  hwacha: {
    short: '화차', name: '화차 일제사격', price: 20, target: 'point', radius: 1.7, n: 14, dmg: 34, stun: 0.8,
    desc: '지정 지점 반경 1.7칸에 화차 신기전 14발. 발당 화기 피해 34, 맞은 적 0.8초 기절.',
  },
  bujeok: {
    short: '부적', name: '빙설 부적', price: 25, target: 'none', freeze: 4,
    desc: '전장의 모든 적을 4초간 얼린다. 적장은 짧게 얼어붙는다.',
  },
};

// 옥 가격 (보급품 묶음 할인)
export const ITEM_BUNDLE = 5; // 5개 묶음은 4개 값
