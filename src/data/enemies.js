// 왜군 데이터. 등급: 졸병 → 정예 → 중장 → 적장
// speed: 타일/초, armor: 물리 피해 감소율, resist: 신성 피해 감소율
// atk: 저지(블록)당했을 때 초당 공격력

export const TIERS = {
  1: { name: '졸병', color: '#9a9184' },
  2: { name: '정예', color: '#3f7fbf' },
  3: { name: '중장', color: '#8e44ad' },
  4: { name: '적장', color: '#c0392b' },
};

export const ENEMIES = {
  ashigaru: {
    name: '아시가루', title: '창병', tier: 1, hp: 70, speed: 1.0, armor: 0, resist: 0, bounty: 5, lives: 1, atk: 8, size: 0.28,
    desc: '가장 흔한 왜군 보병. 수로 밀어붙인다.',
  },
  teppo: {
    name: '조총병', title: '철포대', tier: 1, hp: 56, speed: 0.95, armor: 0, resist: 0, bounty: 6, lives: 1, atk: 6, size: 0.28,
    shoot: { range: 2.6, dmg: 12, cd: 2.2 },
    desc: '걸으면서 가까운 영웅과 의병을 조총으로 저격한다.',
  },
  scout: {
    name: '척후병', title: '정찰대', tier: 1, hp: 42, speed: 1.7, armor: 0, resist: 0, bounty: 4, lives: 1, atk: 5, size: 0.25,
    desc: '빠르게 달려드는 경보병. 방어선의 빈틈을 노린다.',
  },
  samurai: {
    name: '사무라이', title: '무사', tier: 2, hp: 330, speed: 0.9, armor: 0.3, resist: 0.1, bounty: 15, lives: 2, atk: 25, size: 0.32,
    enrage: { at: 0.5, speed: 1.6 },
    desc: '갑옷을 두른 무사. 체력이 절반 아래로 떨어지면 칼을 뽑고 돌진한다.',
  },
  ninja: {
    name: '시노비', title: '닌자', tier: 2, hp: 170, speed: 1.35, armor: 0, resist: 0.2, bounty: 14, lives: 2, atk: 0, size: 0.27,
    stealth: true, unblockable: true,
    desc: '은신 상태로 이동한다. 첨성대·곽재우·봉수 경보로만 발각할 수 있다. 범위 공격은 맞는다.',
  },
  onmyoji: {
    name: '음양사', title: '주술사', tier: 2, hp: 210, speed: 0.85, armor: 0, resist: 0.5, bounty: 17, lives: 2, atk: 10, size: 0.3,
    heal: { range: 2.0, pct: 0.06, cd: 3 },
    desc: '3초마다 주변 아군 체력을 6% 회복시킨다(여럿이어도 겹치지 않음). 신성 저항이 높다.',
  },
  cavalry: {
    name: '기마무사', title: '기병', tier: 2, hp: 230, speed: 1.5, armor: 0.15, resist: 0, bounty: 17, lives: 2, atk: 18, size: 0.36,
    unblockable: true,
    desc: '말을 탄 무사. 빠르고 저지당하지 않는다.',
  },
  drum: {
    name: '진군 고수', title: '군악대', tier: 2, hp: 250, speed: 0.9, armor: 0.1, resist: 0.1, bounty: 18, lives: 2, atk: 8, size: 0.32,
    haste: { range: 2.0, mult: 0.25 },
    desc: '북을 울려 주변 아군의 이동 속도를 25% 올린다. 우선 제거 대상.',
  },
  armored: {
    name: '철갑무사', title: '갑주대', tier: 3, hp: 950, speed: 0.6, armor: 0.6, resist: 0.1, bounty: 35, lives: 3, atk: 40, size: 0.38,
    desc: '두꺼운 철갑. 물리 피해를 60% 막는다. 신성·화기로 상대하라.',
  },
  ram: {
    name: '공성 충차', title: '공성병기', tier: 3, hp: 1500, speed: 0.5, armor: 0.35, resist: 0.3, bounty: 45, lives: 5, atk: 60, size: 0.45,
    spawnOnDeath: { type: 'ashigaru', n: 4 },
    desc: '성문을 부수는 충차. 파괴되면 안에서 아시가루 4명이 뛰쳐나온다.',
  },

  // ───── 적장(보스) ───── 체력은 파도 성장 없이 스테이지·난이도 배율만 받는다
  konishi: {
    name: '고니시 유키나가', title: '제1군 선봉장', tier: 4, hp: 5500, speed: 0.55, armor: 0.3, resist: 0.3, bounty: 250, lives: 6, atk: 90, size: 0.55,
    boss: { summon: { type: 'ashigaru', n: 4, cd: 9 } },
    desc: '임진왜란 선봉장. 9초마다 아시가루 4명을 불러낸다.',
  },
  kato: {
    name: '가토 기요마사', title: '제2군 대장', tier: 4, hp: 9000, speed: 0.5, armor: 0.45, resist: 0.2, bounty: 320, lives: 8, atk: 130, size: 0.58,
    boss: { charge: { cd: 11, dur: 1.6, mult: 3 }, disable: { range: 3, dur: 4 } },
    desc: '11초마다 창을 던져 가까운 유산 하나를 4초간 봉쇄하고 돌진한다.',
  },
  wakizaka: {
    name: '와키자카 야스하루', title: '수군 대장', tier: 4, hp: 9500, speed: 0.6, armor: 0.3, resist: 0.35, bounty: 320, lives: 8, atk: 110, size: 0.56,
    boss: { shield: { pct: 0.12, cd: 15 } },
    desc: '안택선 방패. 15초마다 최대 체력 12%의 보호막을 새로 두른다.',
  },
  ukita: {
    name: '우키타 히데이에', title: '총대장', tier: 4, hp: 12000, speed: 0.5, armor: 0.4, resist: 0.4, bounty: 400, lives: 10, atk: 140, size: 0.6,
    boss: { rally: { cd: 12, heal: 0.08, haste: 0.3, dur: 3 } },
    desc: '12초마다 전군을 독려해 모든 왜군의 체력 8% 회복, 3초간 이동 속도 +30%.',
  },
  ishida: {
    name: '이시다 미쓰나리', title: '삼봉행', tier: 4, hp: 12500, speed: 0.45, armor: 0.4, resist: 0.4, bounty: 600, lives: 14, atk: 200, size: 0.66,
    boss: { phases: [0.7, 0.35], phaseSummon: [{ type: 'samurai', n: 3 }, { type: 'ninja', n: 3 }], disableN: 3, disableDur: 5, phaseText: '봉행의 계략' },
    desc: '침략을 꾸린 책사. 체력 70%·35%에서 정예를 부르고 유산 3개를 봉쇄한다.',
  },
  so: {
    name: '소 요시토시', title: '대마도주', tier: 4, hp: 5200, speed: 0.6, armor: 0.25, resist: 0.3, bounty: 240, lives: 6, atk: 80, size: 0.55,
    boss: { summon: { type: 'scout', n: 5, cd: 8, text: '길잡이 척후대!' } },
    desc: '길잡이 노릇을 한 대마도주. 8초마다 척후병 5명을 풀어 방어선을 흔든다.',
  },
  kuroda: {
    name: '구로다 나가마사', title: '제3군 대장', tier: 4, hp: 7200, speed: 0.5, armor: 0.4, resist: 0.25, bounty: 280, lives: 7, atk: 110, size: 0.57,
    boss: { summon: { type: 'teppo', n: 5, cd: 10, text: '철포대 사격 준비!' } },
    desc: '조총 부대를 앞세운 장수. 10초마다 조총병 5명을 불러낸다.',
  },
  todo: {
    name: '도도 다카토라', title: '수군 장수', tier: 4, hp: 6400, speed: 0.55, armor: 0.3, resist: 0.3, bounty: 300, lives: 7, atk: 110, size: 0.57,
    boss: { shield: { pct: 0.08, cd: 13, text: '판옥 방패!' }, summon: { type: 'ashigaru', n: 4, cd: 12, text: '수군 상륙!' } },
    desc: '옥포·칠천량의 수군 장수. 13초마다 보호막(8%), 12초마다 아시가루 4명 상륙.',
  },
  kuki: {
    name: '구키 요시타카', title: '수군 대장', tier: 4, hp: 7600, speed: 0.5, armor: 0.4, resist: 0.3, bounty: 320, lives: 8, atk: 120, size: 0.58,
    boss: { shield: { pct: 0.12, cd: 15, text: '철갑선 방벽!' } },
    desc: '철갑선을 몰던 수군 대장. 15초마다 최대 체력 12%의 두꺼운 보호막.',
  },
  kurushima: {
    name: '구루시마 미치후사', title: '선봉 수군장', tier: 4, hp: 9000, speed: 0.6, armor: 0.3, resist: 0.3, bounty: 330, lives: 9, atk: 130, size: 0.58,
    boss: { rally: { cd: 10, heal: 0.05, haste: 0.35, dur: 3, text: '노를 저어라!' } },
    desc: '명량의 선봉. 10초마다 모든 왜군 체력 5% 회복, 3초간 이동 속도 +35%.',
  },
  shimazu: {
    name: '시마즈 요시히로', title: '귀신 시마즈', tier: 4, hp: 14000, speed: 0.5, armor: 0.5, resist: 0.35, bounty: 450, lives: 12, atk: 170, size: 0.62,
    enrage: { at: 0.4, speed: 1.5 },
    boss: { charge: { cd: 10, dur: 1.4, mult: 3, text: '귀신 돌격!' }, disable: { range: 3.2, dur: 4 } },
    desc: '가장 사나운 적장. 10초마다 유산 하나를 봉쇄하며 돌진하고, 체력 40% 아래에서 더 빨라진다.',
  },

  // ───── 최종 적장 ─────
  hideyoshi: {
    name: '도요토미 히데요시', title: '태합 · 침략의 원흉', tier: 4, hp: 38000, speed: 0.3, armor: 0.88, resist: 0.55, bounty: 3000, lives: 999, atk: 400, size: 0.8,
    scale: 2.15, fixedHp: true, // 전장 체력 배율과 상관없이 고정 (난이도·협동 배율만 받는다)
    line: '갑옷 88% — 화기·신성·갑옷 깎기로 공략하라!',
    boss: {
      phases: [0.75, 0.5, 0.25],
      phaseSummon: [{ type: 'samurai', n: 4 }, { type: 'armored', n: 3 }, { type: 'ninja', n: 6 }],
      disableN: 4, disableDur: 6, phaseText: '천하인의 호령',
      shield: { pct: 0.05, cd: 15, text: '황금 표주박!' },
    },
    desc: '단 한 명. 갑옷 88% — 물리 피해가 거의 통하지 않는다. 화기(갑옷 절반 무시)·신성·갑옷 깎기로 공략하라. 도성에 닿으면 즉시 패배.',
  },
};

// 웨이브 스크립트 단축 코드
export const ENEMY_CODES = {
  ash: 'ashigaru', tep: 'teppo', sco: 'scout', sam: 'samurai', nin: 'ninja', onm: 'onmyoji',
  cav: 'cavalry', drm: 'drum', arm: 'armored', ram: 'ram',
};
