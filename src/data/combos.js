// 합격기(合擊技): 두 영웅이 공명 게이지를 가득 채우고 호흡을 맞춰 발동하는 협동 궁극기.
// 협동 모드에서는 두 플레이어가 2.5초 안에 함께 눌러야 발동한다 ("호흡 맞추기").

export const RESONANCE_MAX = 100;
export const COMBO_RANGE = 5; // 두 영웅 사이 최대 거리(타일)
export const COMBO_WINDOW = 2.5; // 협동 입력 허용 시간(초)

export const COMBOS = [
  {
    id: 'yi_sejong', pair: ['yi', 'sejong'], name: '성군과 성웅',
    desc: '10초간 모든 유산 공격력 +60%, 공격 속도 +20%. 모든 길에 거북선 출격.',
  },
  {
    id: 'eulji_gang', pair: ['eulji', 'gang'], name: '살수낙성',
    desc: '고구려의 물과 고려의 별. 모든 적에게 신성 피해 350 + 4초간 50% 둔화.',
  },
  {
    id: 'gwak_gwon', pair: ['gwon', 'gwak'], name: '의병 궐기',
    desc: '모든 길목에 정예 의병이 일어서고 왜군이 겁에 질린다(6초간 40% 둔화). 8초간 영웅 무적 + 공격력 2배.',
  },
  {
    id: 'gwon_yi', pair: ['yi', 'gwon'], name: '수륙병진',
    desc: '바다와 육지에서 동시에 친다. 모든 적에게 화기 피해 400 + 기절 1.5초.',
  },
  {
    id: 'eulji_sejong', pair: ['sejong', 'eulji'], name: '문무겸전',
    desc: '10초간 모든 적의 갑옷·저항 0. 모든 플레이어 군자금 +150.',
  },
  {
    id: 'gang_yi', pair: ['yi', 'gang'], name: '불멸의 대첩',
    desc: '가장 강한 적 12명에게 유성 + 거북선 포격. 대상마다 신성 피해 500.',
  },
  {
    id: 'ahn_sejong', pair: ['sejong', 'ahn'], name: '대한 독립 만세',
    desc: '한글로 새긴 만세 소리가 울려 퍼진다. 모든 적 기절 2초 + 화기 피해 380, 8초간 모든 유산 공격 속도 +25%.',
  },
  {
    id: 'dangun_eulji', pair: ['eulji', 'dangun'], name: '고조선의 후예',
    desc: '하늘 문이 열려 모든 적에게 번개. 신성 피해 420 + 적장은 받는 피해 +40% (8초).',
  },
  {
    id: 'ahn_yi', pair: ['yi', 'ahn'], name: '필사즉생의 총성',
    desc: '가장 강한 적 6명에게 거북선 포격과 저격이 겹친다. 대상마다 화기 피해 700.',
  },
  {
    id: 'dangun_sejong', pair: ['sejong', 'dangun'], name: '홍익의 나라',
    desc: '모든 영웅 완전 회복·8초 무적, 모든 플레이어 군자금 +200.',
  },
];

export const GENERIC_COMBO = {
  id: 'generic', name: '호국 합격',
  desc: '모든 적에게 신성 피해(260 + 영웅 레벨 합×18)와 기절. 두 영웅 주변 5칸은 1.5배 피해·기절 1.5초. 모두 군자금 +60.',
};

export function findCombo(a, b) {
  for (const c of COMBOS) {
    if ((c.pair[0] === a && c.pair[1] === b) || (c.pair[0] === b && c.pair[1] === a)) return c;
  }
  return GENERIC_COMBO;
}
