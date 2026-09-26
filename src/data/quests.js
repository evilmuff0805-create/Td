// 일일·주간 임무, 출석부, 품계(계급) 데이터

// stat: 전투 결과 통계 키(누적), 혹은 특수 조건
export const QUEST_POOL = {
  daily: [
    { id: 'd_kill', text: '왜군 {n}명 격퇴', stat: 'kills', n: 200, reward: { coins: 150 } },
    { id: 'd_elite', text: '정예 이상 왜군 {n}명 격퇴', stat: 'elites', n: 25, reward: { coins: 150 } },
    { id: 'd_hero', text: '영웅으로 왜군 {n}명 격퇴', stat: 'heroKills', n: 60, reward: { coins: 150 } },
    { id: 'd_build', text: '유산 {n}개 건설', stat: 'builds', n: 15, reward: { coins: 120 } },
    { id: 'd_branch', text: '유산 특화(4단계) {n}회', stat: 'branches', n: 3, reward: { coins: 150 } },
    { id: 'd_skill', text: '비기 {n}회 사용', stat: 'skillsUsed', n: 6, reward: { coins: 120 } },
    { id: 'd_combo', text: '합격기 {n}회 발동', stat: 'combos', n: 2, reward: { coins: 200, jade: 5 } },
    { id: 'd_win', text: '전투 {n}회 승리', stat: 'wins', n: 2, reward: { coins: 200 } },
    { id: 'd_coop', text: '협동 전투 {n}회 참여', stat: 'coopGames', n: 1, reward: { coins: 150, jade: 5 } },
    { id: 'd_perfect', text: '무손실 파도 {n}회', stat: 'perfectWaves', n: 12, reward: { coins: 150 } },
    { id: 'd_tactic', text: '왜군 전술 {n}회 파훼', stat: 'tacticsBroken', n: 3, reward: { coins: 180 } },
    { id: 'd_boss', text: '적장 {n}명 격퇴', stat: 'bossKills', n: 1, reward: { coins: 200, jade: 5 } },
    { id: 'd_early', text: '파도 조기 호출 {n}회', stat: 'earlyCalls', n: 5, reward: { coins: 120 } },
  ],
  weekly: [
    { id: 'w_kill', text: '왜군 {n}명 격퇴', stat: 'kills', n: 2500, reward: { coins: 800, jade: 20 } },
    { id: 'w_win', text: '전투 {n}회 승리', stat: 'wins', n: 10, reward: { coins: 800, jade: 20 } },
    { id: 'w_coop', text: '협동 전투 {n}회 승리', stat: 'coopWins', n: 3, reward: { coins: 600, jade: 30 } },
    { id: 'w_combo', text: '합격기 {n}회 발동', stat: 'combos', n: 12, reward: { coins: 600, jade: 20 } },
    { id: 'w_boss', text: '적장 {n}명 격퇴', stat: 'bossKills', n: 6, reward: { coins: 700, jade: 20 } },
    { id: 'w_stars', text: '별 {n}개 획득', stat: 'stars', n: 12, reward: { coins: 700, jade: 25 } },
    { id: 'w_hard', text: '어려움 이상 난이도 {n}회 승리', stat: 'hardWins', n: 2, reward: { coins: 900, jade: 30 } },
    { id: 'w_tactic', text: '왜군 전술 {n}회 파훼', stat: 'tacticsBroken', n: 15, reward: { coins: 700, jade: 20 } },
  ],
};

export const DAILY_COUNT = 3;
export const WEEKLY_COUNT = 4;
export const DAILY_ALL_BONUS = { jade: 20 };
export const WEEKLY_ALL_BONUS = { jade: 80, coins: 1000 };

// 7일 출석부 (순환)
export const ATTENDANCE = [
  { coins: 100 }, { coins: 200 }, { jade: 10 }, { coins: 300 }, { jade: 20 }, { coins: 500 }, { jade: 50, coins: 500 },
];

// 품계 18단계
export const RANKS = [
  '종9품', '정9품', '종8품', '정8품', '종7품', '정7품', '종6품', '정6품', '종5품',
  '정5품', '종4품', '정4품', '종3품', '정3품', '종2품', '정2품', '종1품', '정1품',
];
export const RANK_TITLES = [
  '권관', '별장', '만호', '첨사', '현감', '현령', '판관', '군수', '부사',
  '목사', '방어사', '병마우후', '수군절도사', '병마절도사', '관찰사', '도원수', '좌의정', '영의정',
];
export function rankXpNeeded(rank) {
  return Math.round(120 * Math.pow(1.22, rank));
}

// 유산 복원(타워 영구 강화)
export const TOWER_META_MAX = 5;
export function towerMetaCost(lv) {
  return 180 * (lv + 1);
}
export const TOWER_META_BONUS = 0.04; // 레벨당 공격력(효과) +4%

// 전투 보상
export function battleRewards({ win, stars, wavesCleared, difficulty, firstClear, diffReward }) {
  const coins = Math.round((40 + wavesCleared * 12 + (win ? 60 + stars * 40 : 0)) * diffReward);
  const jade = firstClear ? 30 : win && stars === 3 ? 3 : 0;
  const xp = Math.round((wavesCleared * 8 + (win ? 60 + stars * 25 : 10)) * diffReward);
  return { coins, jade, xp };
}
