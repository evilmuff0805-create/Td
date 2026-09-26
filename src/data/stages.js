// 스테이지: 임진왜란의 주요 전장을 순서대로 따라간다.
// 지도 범례 — '.' 빈 터(건설 가능)  'f' 꽃밭(건설 가능)  'T' 소나무  'R' 바위  'H' 초가집
//            'J' 장승  'W' 물  'M' 산  'K' 궁궐 담장     (길은 경로 좌표로 자동 생성)
// 웨이브 문법 — "종류*수@간격+지연>경로"  예) "ash*10@0.8+3>1"  경로: 0,1 또는 a(번갈아)

import { ENEMY_CODES } from './enemies.js';

export const MAP_W = 24;
export const MAP_H = 14;

export const DIFFICULTY = {
  normal: { name: '보통', hp: 1, speed: 1, bounty: 1, lives: 20, reward: 1 },
  hard: { name: '어려움', hp: 1.3, speed: 1.05, bounty: 0.92, lives: 15, reward: 1.6 },
  hell: { name: '지옥', hp: 1.6, speed: 1.08, bounty: 0.9, lives: 10, reward: 2.4 },
};
export const DIFF_ORDER = ['normal', 'hard', 'hell'];

// 협동 보정: 적 체력 +20%, 처치 보상은 두 사람 모두에게 60%씩 (합 120%)
export const COOP = { hpMult: 1.2, goldShare: 0.6, startGoldShare: 0.65 };

export const STAGES = [
  {
    id: 's1', name: '부산진 전투', date: '1592년 4월', season: 'spring', base: '부산진성',
    desc: '임진년 4월, 왜군 선봉이 부산포에 상륙했다. 바다에서 올라오는 적을 부산진성 앞에서 막아내라.',
    region: { x: 201, y: 378 },
    startGold: 240, hpBase: 1.0, hpGrowth: 0.1,
    unlockTowers: ['haeinsa'],
    grid: [
      'TTT..TT.....MMMMM...TTMM',
      'T.........f.......R...TM',
      '......................TT',
      '..........R........f....',
      'WW.....f................',
      'WWW.......f.........T...',
      'WWW....R.............R..',
      'WWWW...........f......HH',
      'WWWW..T..............fH.',
      'WWWW.......f...........J',
      'WWWWW..............R....',
      'WWWWW...................',
      'WWWWWW......T.....f....H',
      'WWWWWWWTT...TT.....HHTTT',
    ],
    paths: [
      [[-1, 2], [5, 2], [5, 10], [11, 10], [11, 4], [17, 4], [17, 11], [23, 11]],
    ],
    waves: [
      'ash*8@1.3',
      'ash*10@1.1, sco*4@0.8+8',
      'ash*8@1, tep*5@1.4+4',
      'sco*10@0.6, ash*10@1+6',
      'ash*12@0.9, sam*1+10',
      'tep*8@1.1, ash*10@0.8+3, sco*6@0.5+12',
      'sam*3@3, ash*12@0.8+2',
      'drm*1, ash*14@0.6+1, sco*8@0.5+10',
      'tep*12@0.8, sam*3@2.5+6',
      'ash*18@0.6, sam*4@2+4, drm*2@6+8',
      'sco*16@0.4, tep*10@0.8+6, sam*5@1.8+12',
      'konishi, ash*16@0.7+2, sam*4@3+8',
    ],
  },
  {
    id: 's2', name: '탄금대 전투', date: '1592년 4월', season: 'summer', base: '탄금대 본진',
    desc: '신립 장군이 강을 등지고 배수진을 친 탄금대. 두 갈래로 몰려와 하나로 합쳐지는 왜군을 막아라.',
    region: { x: 159, y: 292 },
    startGold: 260, hpBase: 1.12, hpGrowth: 0.1,
    unlockTowers: ['seokguram'],
    grid: [
      'TT....TTT....MMMMMM..TWW',
      'T...........f........WWW',
      '....f..R..............WW',
      '......................WW',
      '..T.......f.....R.....WW',
      '......R..............WWW',
      '..f..........f.......WWW',
      '......................WW',
      '..T.....R.......f.....WW',
      '....f.......T........WWW',
      '......................WW',
      '........f...........TWWW',
      '..R...........f.....TWWW',
      'TTT...TTTT...TTTT...TTWW',
    ],
    paths: [
      [[-1, 3], [7, 3], [7, 7], [14, 7], [14, 2], [19, 2], [19, 10], [21, 10]],
      [[-1, 11], [7, 11], [7, 7], [14, 7], [14, 2], [19, 2], [19, 10], [21, 10]],
    ],
    waves: [
      'ash*10@1>a',
      'ash*8@1>0, sco*8@0.6>1+3',
      'tep*10@1>a, ash*8@0.9>a+5',
      'cav*3@2>a, ash*12@0.8>a+3',
      'sam*3@2.5>a, sco*10@0.5>a+4',
      'nin*3@2>a, ash*14@0.7>a+3',
      'drm*2@4>a, ash*16@0.6>a+1, tep*8@1>a+8',
      'arm*1>0, sam*3@2>a+4, sco*10@0.5>a+8',
      'cav*6@1.2>a, nin*4@1.5>a+8',
      'ash*20@0.5>a, sam*5@1.8>a+5, drm*2@5>a+10',
      'arm*2@5>a, tep*14@0.7>a+3',
      'nin*6@1.2>a, cav*6@1.2>a+6, sco*14@0.4>a+12',
      'sam*8@1.5>a, drm*3@4>a+2, ash*20@0.5>a+6',
      'arm*4@3>a, cav*8@1>a+6, nin*6@1>a+12',
      'kato>0, sam*6@2>a+4, ash*20@0.5>a+8, arm*2@5>a+14',
    ],
  },
  {
    id: 's3', name: '한산도 대첩', date: '1592년 7월', season: 'sea', base: '한산 수영',
    desc: '한산도 앞바다. 학익진에 쫓긴 왜 수군이 섬으로 상륙한다. 좁은 땅을 지혜롭게 써라.',
    region: { x: 176, y: 396 },
    startGold: 300, hpBase: 1.12, hpGrowth: 0.1,
    unlockTowers: ['gyeongbok'],
    grid: [
      'WWWW..TT..WWW...TT.WWWWW',
      '....................WWWW',
      'WW.....f......R.....WWWW',
      'WWW.f....WWW.....f..WWWW',
      'WW..R...WWWWW.......WWWW',
      'WW..................WWWW',
      'WWW.....f....T.......WWW',
      'WWW..WWW........WW...WWW',
      'WWW..WWWW...f..WWW....WW',
      'WWW.................f.WW',
      'WWWWW..R....f.....T...WW',
      'WWWWWWW..f.....WW.....HW',
      'WWWWWWWWW...T.WWW.......',
      'WWWWWWWWWWW....WWWT..HHH',
    ],
    paths: [
      [[-1, 1], [19, 1], [19, 5], [4, 5], [4, 9], [19, 9], [19, 12], [23, 12]],
    ],
    waves: [
      'ash*12@0.9',
      'sco*12@0.5, ash*8@1+6',
      'onm*1, ash*14@0.7+2',
      'tep*12@0.8, sam*2@3+6',
      'cav*5@1.2, drm*1+6, ash*12@0.6+7',
      'ram*1, sco*12@0.4+4',
      'nin*5@1.3, onm*2@3+4, ash*14@0.6+6',
      'sam*6@1.5, tep*12@0.7+5',
      'arm*2@4, onm*2@4+2, ash*18@0.5+6',
      'ram*2@6, cav*8@1+4, drm*2@5+8',
      'nin*8@0.9, sam*6@1.4+6',
      'arm*4@2.5, onm*3@3+3, tep*16@0.5+8',
      'cav*12@0.7, drm*3@3+2, sco*20@0.3+8',
      'ram*3@5, sam*8@1.2+4, nin*6@1+12',
      'wakizaka, onm*3@3+3, arm*3@4+6, sam*8@1.2+10',
    ],
  },
  {
    id: 's4', name: '행주대첩', date: '1593년 2월', season: 'winter', base: '행주산성',
    desc: '눈 덮인 행주산성. 두 갈래 길로 3만 대군이 몰려온다. 협동이라면 한 사람이 한 길씩!',
    region: { x: 110, y: 270 },
    startGold: 390, hpBase: 1.2, hpGrowth: 0.1,
    unlockTowers: [],
    grid: [
      'TT..TTT....MMMM....TTMMM',
      'T.......f.........R...MM',
      '..............T.......MM',
      '....R...........f.....MM',
      '..f.......T..........RMM',
      '......................MM',
      '..T.......f....R.......M',
      '......R................M',
      '...f..........T.......MM',
      '...R..................MM',
      '..T...........f......WWM',
      '......f..........T..WWWW',
      '...................WWWWW',
      'TTT..TTT...TTTT..WWWWWWW',
    ],
    paths: [
      [[-1, 2], [9, 2], [9, 5], [16, 5], [16, 7], [21, 7]],
      [[-1, 12], [6, 12], [6, 9], [18, 9], [18, 7], [21, 7]],
    ],
    waves: [
      'ash*8@1>0, ash*8@1>1',
      'sco*8@0.6>0, tep*6@1.2>1+2',
      'sam*2@3>0, ash*12@0.8>1+2',
      'cav*4@1.5>1, ash*12@0.8>0+3',
      'nin*4@1.5>0, onm*2@3>1+2, ash*12@0.7>a+6',
      'arm*1>0, arm*1>1+2, sco*14@0.5>a+6',
      'drm*2@3>a, sam*6@1.5>a+2',
      'ram*1>0, cav*6@1>1+3, tep*12@0.6>a+8',
      'onm*4@2>a, arm*3@3>a+3, ash*20@0.5>a+6',
      'nin*8@0.9>a, sam*6@1.4>a+6, drm*2@4>a+10',
      'ram*2@4>1, cav*10@0.8>0+2, sco*16@0.35>a+10',
      'arm*5@2.5>a, onm*4@2.5>a+4, tep*16@0.5>a+8',
      'sam*10@1.1>a, nin*8@0.9>a+6, drm*3@3>a+10',
      'ram*3@4>a, arm*4@3>a+3, cav*10@0.7>a+10',
      'onm*6@1.8>a, sam*12@0.9>a+3, ash*30@0.3>a+8',
      'nin*14@0.6>a, arm*6@2>a+6, drm*4@3>a+10',
      'ram*4@3.5>a, cav*14@0.6>a+4, sam*10@1>a+10, onm*4@2>a+14',
      'ukita>0, arm*6@2.5>a+3, sam*12@1>a+8, nin*10@0.8>a+14',
    ],
  },
  {
    id: 's5', name: '한양 수복', date: '1593년 4월', season: 'autumn', base: '경복궁',
    desc: '마지막 결전. 도성으로 향하는 두 길을 모두 지키고, 침략의 원흉을 물리쳐라.',
    region: { x: 133, y: 255 },
    startGold: 450, hpBase: 1.26, hpGrowth: 0.1,
    unlockTowers: [],
    grid: [
      'TT..TTT..MMMMM....TTTKKK',
      'T......f.........R...KKK',
      '..R.......f..........KKK',
      '......T..............KKK',
      '...........f.........KKK',
      '..f...R........f.....KKK',
      '.....................KKK',
      '...T.........R.......KKK',
      '..................f..KKK',
      '.f......T..........T.KKK',
      '...R..............f..KKK',
      '.......f............TKKK',
      '..T..............f...KKK',
      'TTT..TTTT..TTTT...TTTKKK',
    ],
    paths: [
      [[3, -1], [3, 4], [9, 4], [9, 1], [15, 1], [15, 6], [20, 6]],
      [[-1, 11], [5, 11], [5, 8], [12, 8], [12, 12], [18, 12], [18, 6], [20, 6]],
    ],
    waves: [
      'ash*12@0.8>a',
      'sco*14@0.5>a, tep*8@1>a+5',
      'sam*4@2>a, ash*14@0.6>a+3',
      'cav*4@1.4>a, onm*2@3>a+5',
      'nin*4@1.4>a, drm*1>a+3, ash*16@0.5>a+6',
      'arm*3@3>a, tep*14@0.6>a+4',
      'ram*2@4>a, sam*6@1.4>a+4, sco*16@0.35>a+10',
      'onm*3@2>a, cav*8@0.9>a+3, nin*5@1.1>a+10',
      'arm*5@2.4>a, drm*3@3>a+2, ash*24@0.4>a+6',
      'konishi>0, sam*8@1.2>a+3, tep*16@0.5>a+8',
      'nin*12@0.7>a, cav*10@0.8>a+6',
      'ram*4@3>a, onm*5@2>a+3, sam*10@1>a+8',
      'arm*8@1.8>a, drm*4@3>a+2, sco*24@0.3>a+8',
      'cav*16@0.6>a, nin*12@0.7>a+6, onm*4@2>a+12',
      'kato>1, arm*6@2>a+3, sam*12@0.9>a+8',
      'ram*5@3>a, sam*14@0.8>a+4, tep*20@0.4>a+12',
      'nin*16@0.5>a, onm*6@1.6>a+4, cav*14@0.6>a+10',
      'arm*10@1.4>a, drm*5@2.5>a+3, sam*16@0.7>a+8',
      'wakizaka>0, ukita>1+4, ram*4@3>a+8, nin*14@0.6>a+12',
      'taiko>0, arm*8@2>a+4, sam*16@0.8>a+10, onm*6@2>a+16, cav*16@0.6>a+20',
    ],
  },
];

export const STAGE_BY_ID = Object.fromEntries(STAGES.map((s) => [s.id, s]));
export const START_TOWERS = ['sungnyemun', 'hwaseong', 'bosingak', 'cheomseong'];

// "ash*10@0.8+3>1" → [{type, n, gap, delay, path}]
export function parseWave(str) {
  return str.split(',').map((raw) => {
    const g = raw.trim();
    const m = g.match(/^([a-z_]+)(?:\*(\d+))?(?:@([\d.]+))?((?:[+>][\d.a]+)*)$/);
    if (!m) throw new Error('잘못된 웨이브 문법: ' + g);
    const type = ENEMY_CODES[m[1]] || m[1];
    const delay = (m[4].match(/\+([\d.]+)/) || [])[1];
    const path = (m[4].match(/>([0-9a])/) || [])[1];
    return {
      type,
      n: m[2] ? +m[2] : 1,
      gap: m[3] ? +m[3] : 1,
      delay: delay ? +delay : 0,
      path: path === undefined || path === 'a' ? 'a' : +path,
    };
  });
}
