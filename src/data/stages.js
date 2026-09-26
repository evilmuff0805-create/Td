// 스테이지: 임진왜란의 주요 전장을 순서대로 따라간다.
// 지도 범례 — '.' 빈 터(건설 가능)  'f' 꽃밭(건설 가능)  'T' 소나무  'R' 바위  'H' 초가집
//            'J' 장승  'W' 물  'M' 산  'K' 궁궐 담장     (길은 경로 좌표로 자동 생성)
// 웨이브 문법 — "종류*수@간격+지연>경로"  예) "ash*10@0.8+3>1"  경로: 0,1 또는 a(번갈아)

import { ENEMY_CODES } from './enemies.js';
import { genGrid, genWaves } from './stagegen.js';

export const MAP_W = 24;
export const MAP_H = 14;

export const DIFFICULTY = {
  normal: { name: '보통', hp: 1, speed: 1, bounty: 1, lives: 20, reward: 1 },
  hard: { name: '어려움', hp: 1.3, speed: 1.05, bounty: 0.92, lives: 15, reward: 1.6 },
  hell: { name: '지옥', hp: 1.6, speed: 1.08, bounty: 0.9, lives: 10, reward: 2.4 },
};
export const DIFF_ORDER = ['normal', 'hard', 'hell'];

// 협동 보정: 적 체력 +10%, 처치 보상은 두 사람 모두에게 60%씩 (합 120%)
export const COOP = { hpMult: 1.1, goldShare: 0.6, startGoldShare: 0.65 };

const ORIGINAL = [
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
    desc: '도성을 되찾는 날. 한양으로 향하는 두 길을 모두 지키고, 침략을 꾸민 책사를 물리쳐라.',
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
      'ishida>0, arm*8@2>a+4, sam*16@0.8>a+10, onm*6@2>a+16, cav*16@0.6>a+20',
    ],
  },
];

// ───── 새 전장 20곳 (연대순으로 기존 전장 사이사이에 끼워 넣는다) ─────
const NEW_STAGES = {
  s6: {
    id: 's6', name: '동래성 전투', date: '1592년 4월', season: 'spring', base: '동래성',
    desc: '"싸워 죽기는 쉬우나 길을 내주기는 어렵다." 송상현 부사가 지킨 동래성. 성벽 앞 굽은 길에서 왜군을 막아라.',
    region: { x: 214, y: 364 },
    startGold: 250, hpGrowth: 0.1,
    grid: genGrid({ seed: 6, mountains: { side: 'top', depth: 1, from: 0, to: 8 }, wall: { side: 'right', w: 3 }, houses: [[17, 1], [18, 1], [17, 12], [18, 12]], jang: [[20, 4]] }),
    paths: [[[-1, 3], [5, 3], [5, 10], [10, 10], [10, 2], [15, 2], [15, 11], [19, 11], [19, 6], [20, 6]]],
    gen: { level: 1, n: 12, boss: { 12: 'so' }, weights: { sco: 1.4 } },
  },
  s7: {
    id: 's7', name: '상주 전투', date: '1592년 4월', season: 'spring', base: '상주 진영',
    desc: '북천을 건너 두 갈래로 몰려오는 왜군. 다리목에서 하나로 합쳐지는 길을 노려라.',
    region: { x: 172, y: 313 },
    startGold: 260, hpGrowth: 0.1,
    grid: genGrid({ seed: 7, river: { axis: 'v', at: 10, w: 2 }, mountains: { side: 'right', depth: 1 }, houses: [[20, 11], [21, 11]], jang: [[20, 6]] }),
    paths: [
      [[-1, 2], [7, 2], [7, 6], [14, 6], [14, 2], [18, 2], [18, 8], [21, 8]],
      [[-1, 11], [7, 11], [7, 6], [14, 6], [14, 2], [18, 2], [18, 8], [21, 8]],
    ],
    gen: { level: 2, n: 14, boss: { 14: ['kuroda', 0] } },
  },
  s8: {
    id: 's8', name: '옥포 해전', date: '1592년 5월', season: 'sea', base: '옥포 수영',
    desc: '이순신 함대의 첫 승리. 옥포 앞바다에서 뭍으로 기어오르는 왜 수군을 포구에서 쓸어버려라.',
    region: { x: 189, y: 390 },
    startGold: 280, hpGrowth: 0.1,
    grid: genGrid({ seed: 8, land: [[0, 0, 17, 13], [18, 3, 20, 10]], trees: 0.3, houses: [[1, 11], [2, 12], [1, 12]] }),
    paths: [[[24, 1], [15, 1], [15, 5], [9, 5], [9, 1], [3, 1], [3, 9], [12, 9], [12, 12], [4, 12]]],
    gen: { level: 3, n: 14, boss: { 14: 'todo' }, weights: { sco: 1.3, tep: 1.3 } },
  },
  s9: {
    id: 's9', name: '사천 해전', date: '1592년 5월', season: 'sea', base: '사천 포구',
    desc: '거북선이 처음 바다에 나선 날. 두 물길로 들어오는 왜선을 막아내라.',
    region: { x: 160, y: 381 },
    startGold: 290, hpGrowth: 0.1,
    grid: genGrid({ seed: 9, sea: { side: 'bottom', depth: 2 }, mountains: { side: 'top', depth: 1, from: 6, to: 17 }, houses: [[1, 3], [1, 4]] }),
    paths: [
      [[24, 3], [17, 3], [17, 7], [9, 7], [9, 3], [3, 3], [3, 6], [1, 6]],
      [[24, 10], [14, 10], [14, 7], [9, 7], [9, 3], [3, 3], [3, 6], [1, 6]],
    ],
    gen: { level: 4, n: 15, boss: { 8: ['todo', 1], 15: ['kuki', 0] }, weights: { cav: 0.6 } },
  },
  s10: {
    id: 's10', name: '평양성 전투', date: '1592년 6월', season: 'summer', base: '평양성',
    desc: '대동강을 사이에 둔 평양성. 강을 건너오는 다리 두 곳을 모두 지켜라.',
    region: { x: 92, y: 182 },
    startGold: 300, hpGrowth: 0.1,
    grid: genGrid({ seed: 10, river: { axis: 'h', at: 6, w: 2 }, wall: { side: 'left', w: 2 }, houses: [[3, 1], [4, 1], [3, 12]] }),
    paths: [
      [[24, 11], [17, 11], [17, 2], [8, 2], [8, 9], [2, 9]],
      [[24, 2], [20, 2], [20, 11], [12, 11], [12, 9], [2, 9]],
    ],
    gen: { level: 5, n: 15, boss: { 15: ['konishi', 0] } },
  },
  s11: {
    id: 's11', name: '부산포 해전', date: '1592년 9월', season: 'sea', base: '부산포',
    desc: '왜군의 본거지 부산포를 들이친다. 끝없이 쏟아지는 왜 수군을 길고 긴 해안길에서 버텨라.',
    region: { x: 214, y: 386 },
    startGold: 320, hpGrowth: 0.1,
    grid: genGrid({ seed: 11, sea: { side: 'left', depth: 3 }, sea2: null, mountains: { side: 'right', depth: 1 }, houses: [[20, 12], [21, 12]] }),
    paths: [[[4, -1], [4, 3], [12, 3], [12, 1], [19, 1], [19, 6], [7, 6], [7, 10], [16, 10], [16, 12], [20, 12]]],
    gen: { level: 6, n: 16, boss: { 9: 'todo', 16: 'kuki' }, weights: { sco: 1.2, nin: 1.2 } },
  },
  s12: {
    id: 's12', name: '진주대첩', date: '1592년 10월', season: 'autumn', base: '진주성',
    desc: '김시민 목사와 3,800 군사가 3만 대군을 막아낸 진주성. 남강을 등진 성으로 세 방향에서 몰려온다.',
    region: { x: 157, y: 368 },
    startGold: 330, hpGrowth: 0.1,
    grid: genGrid({ seed: 12, river: { axis: 'h', at: 12, w: 2 }, wall: { side: 'right', w: 2 }, houses: [[20, 3], [20, 10]] }),
    paths: [
      [[-1, 2], [4, 2], [4, 5], [9, 5], [9, 1], [15, 1], [15, 5], [18, 5], [18, 7], [21, 7]],
      [[-1, 9], [4, 9], [4, 11], [11, 11], [11, 8], [15, 8], [15, 10], [18, 10], [18, 7], [21, 7]],
    ],
    gen: { level: 7, n: 16, boss: { 16: ['kuroda', 1] }, weights: { ram: 1.5, drm: 1.3 } },
  },
  s13: {
    id: 's13', name: '평양성 탈환', date: '1593년 1월', season: 'winter', base: '평양 본진',
    desc: '조명 연합군의 반격. 눈 덮인 평양 들판에서 성을 빠져나와 역습하는 왜군을 막아라.',
    region: { x: 100, y: 176 },
    startGold: 340, hpGrowth: 0.1,
    grid: genGrid({ seed: 13, mountains: { side: 'bottom', depth: 1 }, river: { axis: 'v', at: 15, w: 1 }, houses: [[1, 6], [1, 7]] }),
    paths: [
      [[24, 3], [19, 3], [19, 9], [12, 9], [12, 3], [6, 3], [6, 7], [2, 7]],
      [[24, 11], [16, 11], [16, 9], [12, 9], [12, 3], [6, 3], [6, 7], [2, 7]],
    ],
    gen: { level: 8, n: 16, boss: { 8: ['so', 1], 16: ['konishi', 0] }, weights: { arm: 1.4 } },
  },
  s14: {
    id: 's14', name: '진주성 2차 전투', date: '1593년 6월', season: 'summer', base: '촉석루',
    desc: '복수를 벼른 왜군 대군이 다시 진주성으로. 세 길로 몰려오는 적을 촉석루 앞에서 막아라.',
    region: { x: 166, y: 372 },
    startGold: 380, hpGrowth: 0.1,
    grid: genGrid({ seed: 14, river: { axis: 'h', at: 12, w: 2 }, wall: { side: 'right', w: 2 }, houses: [[19, 3], [19, 10]] }),
    paths: [
      [[-1, 1], [6, 1], [6, 4], [11, 4], [11, 1], [16, 1], [16, 4], [19, 4], [19, 6], [21, 6]],
      [[-1, 11], [6, 11], [6, 8], [11, 8], [11, 11], [16, 11], [16, 8], [19, 8], [19, 6], [21, 6]],
      [[-1, 6], [21, 6]],
    ],
    gen: { level: 10, n: 18, boss: { 9: ['kuroda', 0], 18: ['kato', 1] }, weights: { ram: 1.3, sam: 1.3 } },
  },
  s15: {
    id: 's15', name: '칠천량의 밤', date: '1597년 7월', season: 'sea', base: '한산 수영',
    desc: '칠천량에서 조선 수군이 무너진 밤. 살아남은 배를 지키며 밤바다로 밀려드는 왜군을 버텨라.',
    region: { x: 184, y: 386 },
    startGold: 380, hpGrowth: 0.1, night: true,
    grid: genGrid({ seed: 15, land: [[0, 0, 23, 3], [2, 5, 21, 7], [0, 10, 23, 13]], trees: 0.3 }),
    paths: [[[24, 1], [2, 1], [2, 6], [21, 6], [21, 11], [5, 11]]],
    gen: { level: 11, n: 16, boss: { 8: 'wakizaka', 16: 'todo' }, weights: { nin: 1.8, sco: 1.2 } },
  },
  s16: {
    id: 's16', name: '남원성 전투', date: '1597년 8월', season: 'summer', base: '남원성',
    desc: '정유재란, 호남으로 가는 길목 남원성. 성을 둘러싼 왜군이 네 모퉁이를 돌아 성문으로 몰려온다.',
    region: { x: 147, y: 363 },
    startGold: 400, hpGrowth: 0.1,
    grid: genGrid({ seed: 16, mountains: { side: 'left', depth: 1 }, houses: [[11, 6], [12, 6], [11, 7]] }),
    paths: [
      [[-1, 1], [21, 1], [21, 12], [3, 12], [3, 4], [18, 4], [18, 9], [12, 9]],
    ],
    gen: { level: 12, n: 18, boss: { 9: 'so', 18: 'ukita' }, weights: { ram: 1.4 } },
  },
  s17: {
    id: 's17', name: '직산 전투', date: '1597년 9월', season: 'autumn', base: '직산 진영',
    desc: '한양으로 북상하는 왜군을 조명 연합군이 막아선 들판. 넓은 들을 가로지르는 두 길을 모두 지켜라.',
    region: { x: 139, y: 289 },
    startGold: 420, hpGrowth: 0.1,
    grid: genGrid({ seed: 17, flowers: 16, rocks: 6, houses: [[22, 1], [22, 2]] }),
    paths: [
      [[-1, 4], [4, 4], [4, 1], [10, 1], [10, 5], [14, 5], [14, 2], [19, 2], [19, 7], [22, 7]],
      [[-1, 10], [5, 10], [5, 12], [11, 12], [11, 9], [16, 9], [16, 11], [19, 11], [19, 7], [22, 7]],
    ],
    gen: { level: 13, n: 18, boss: { 18: ['kuroda', 1] }, weights: { cav: 1.8, drm: 1.2 } },
  },
  s18: {
    id: 's18', name: '명량 대첩', date: '1597년 9월', season: 'sea', base: '울돌목 진영',
    desc: '"신에게는 아직 열두 척의 배가 남아 있사옵니다." 거센 물살 울돌목, 133척의 왜선이 좁은 물길로 쏟아진다.',
    region: { x: 111, y: 405 },
    startGold: 440, hpGrowth: 0.1,
    grid: genGrid({ seed: 18, land: [[0, 3, 23, 10]], trees: 0.2, rocks: 3 }),
    paths: [[[24, 4], [15, 4], [15, 9], [9, 9], [9, 4], [3, 4], [3, 8], [1, 8]]],
    gen: { level: 14, n: 20, boss: { 20: 'kurushima' }, weights: { sco: 2.2, ash: 1.6, cav: 1.4 }, budget: 1.15 },
  },
  s19: {
    id: 's19', name: '울산성 전투', date: '1597년 12월', season: 'winter', base: '울산 진영',
    desc: '가토 기요마사가 쌓은 울산 왜성. 한겨울 성에서 뛰쳐나오는 철갑 부대를 막아라.',
    region: { x: 210, y: 357 },
    startGold: 460, hpGrowth: 0.1,
    grid: genGrid({ seed: 19, sea: { side: 'right', depth: 2 }, mountains: { side: 'top', depth: 1 }, houses: [[1, 12], [2, 12]] }),
    paths: [
      [[20, -1], [20, 3], [15, 3], [15, 1], [10, 1], [10, 5], [5, 5], [5, 9], [9, 9], [9, 12], [2, 12]],
      [[20, 14], [20, 10], [16, 10], [16, 7], [12, 7], [12, 9], [9, 9], [9, 12], [2, 12]],
    ],
    gen: { level: 15, n: 19, boss: { 19: ['kato', 0] }, weights: { arm: 1.8, sam: 1.2 } },
  },
  s20: {
    id: 's20', name: '사천 왜성 전투', date: '1598년 10월', season: 'autumn', base: '사천 진영',
    desc: '귀신 시마즈가 지키는 사천 왜성. 성문이 열리면 사나운 무사들이 두 갈래로 쏟아진다.',
    region: { x: 168, y: 378 },
    startGold: 480, hpGrowth: 0.1,
    grid: genGrid({ seed: 20, wall: { side: 'left', w: 2 }, sea: { side: 'bottom', depth: 1 }, houses: [[21, 5], [22, 5]] }),
    paths: [
      [[2, 2], [7, 2], [7, 5], [11, 5], [11, 1], [16, 1], [16, 4], [19, 4], [19, 6], [22, 6]],
      [[2, 10], [6, 10], [6, 7], [11, 7], [11, 11], [16, 11], [16, 8], [19, 8], [19, 6], [22, 6]],
    ],
    gen: { level: 16, n: 20, boss: { 10: ['kurushima', 1], 20: ['shimazu', 0] }, weights: { sam: 1.6, cav: 1.2 } },
  },
  s21: {
    id: 's21', name: '순천 왜교성 전투', date: '1598년 11월', season: 'autumn', base: '순천 진영',
    desc: '바다와 뭍에서 동시에 에워싼 왜교성. 성에서 뛰쳐나오는 고니시의 결사대를 막아라.',
    region: { x: 151, y: 388 },
    startGold: 500, hpGrowth: 0.1,
    grid: genGrid({ seed: 21, sea: { side: 'bottom', depth: 2 }, wall: { side: 'right', w: 2 }, houses: [[1, 1], [2, 1]] }),
    paths: [
      [[21, 1], [16, 1], [16, 4], [12, 4], [12, 1], [7, 1], [7, 4], [3, 4], [3, 6], [1, 6]],
      [[21, 10], [17, 10], [17, 7], [12, 7], [12, 10], [7, 10], [7, 7], [3, 7], [3, 6], [1, 6]],
    ],
    gen: { level: 17, n: 20, boss: { 10: ['so', 1], 20: ['konishi', 0] }, weights: { tep: 1.4, nin: 1.4 } },
  },
  s22: {
    id: 's22', name: '노량 해전', date: '1598년 11월', season: 'sea', base: '노량 수영',
    desc: '"나의 죽음을 적에게 알리지 말라." 7년 전쟁의 마지막 바다. 물러가는 왜 수군을 끝까지 쫓아 막아라.',
    region: { x: 163, y: 385 },
    startGold: 520, hpGrowth: 0.1, night: true,
    grid: genGrid({ seed: 22, land: [[0, 0, 23, 2], [0, 5, 23, 8], [0, 11, 23, 13]], trees: 0.3 }),
    paths: [
      [[24, 1], [3, 1], [3, 6], [20, 6], [20, 12], [1, 12]],
    ],
    gen: { level: 18, n: 21, boss: { 11: 'kuki', 21: 'shimazu' }, weights: { sco: 1.3, nin: 1.5, cav: 1.2 } },
  },
  s23: {
    id: 's23', name: '대마도 정벌', date: '가상 · 1599년', season: 'sea', base: '조선 수군 진영',
    desc: '세종 때처럼 다시 대마도로! 침략의 길잡이 섬에 상륙한 조선군 진영을 지켜라. (역사를 바꾼 가상 전장)',
    region: { x: 226, y: 412 },
    startGold: 540, hpGrowth: 0.1,
    grid: genGrid({ seed: 23, land: [[1, 1, 22, 12]], trees: 0.5, inner: 8, houses: [[20, 2], [21, 2], [20, 3]] }),
    paths: [
      [[24, 12], [18, 12], [18, 8], [12, 8], [12, 11], [5, 11], [5, 4], [16, 4], [16, 2], [21, 2]],
    ],
    gen: { level: 19, n: 21, boss: { 11: 'todo', 21: 'so' }, weights: { nin: 1.6, onm: 1.4 } },
  },
  s24: {
    id: 's24', name: '현해탄 상륙전', date: '가상 · 1599년', season: 'summer', base: '상륙 진지',
    desc: '현해탄을 건너 규슈 바닷가에 발을 디뎠다. 사방에서 몰려드는 정예 무사들을 해변 진지에서 버텨라. (가상 전장)',
    region: { x: 246, y: 436 },
    startGold: 560, hpGrowth: 0.1,
    grid: genGrid({ seed: 24, sea: { side: 'left', depth: 2 }, mountains: { side: 'right', depth: 1 }, flowers: 5 }),
    paths: [
      [[22, -1], [22, 2], [17, 2], [17, 5], [12, 5], [12, 1], [8, 1], [8, 4], [5, 4], [5, 6]],
      [[22, 14], [22, 11], [17, 11], [17, 8], [12, 8], [12, 12], [8, 12], [8, 8], [5, 8], [5, 6]],
    ],
    gen: { level: 21, n: 22, boss: { 11: ['kuki', 1], 22: ['ishida', 0] }, weights: { sam: 1.5, arm: 1.3, cav: 1.2 } },
  },
  s25: {
    id: 's25', name: '나고야성 최후의 결전', date: '가상 · 1599년', season: 'autumn', base: '조선군 본진',
    desc: '침략의 본영 히젠 나고야성. 네 명의 대장을 차례로 꺾고 나면 마침내 그가 성문을 나선다. 도요토미 히데요시.',
    region: { x: 246, y: 452 },
    startGold: 600, hpGrowth: 0.1, finale: true,
    grid: genGrid({ seed: 25, wall: { side: 'top', w: 1 }, mountains: { side: 'bottom', depth: 1 }, houses: [[1, 6], [1, 7], [2, 6]] }),
    paths: [
      [[21, 1], [21, 5], [16, 5], [16, 2], [11, 2], [11, 5], [7, 5], [7, 2], [3, 2], [3, 7]],
      [[21, 1], [21, 9], [16, 9], [16, 12], [11, 12], [11, 9], [7, 9], [7, 12], [3, 12], [3, 7]],
    ],
    gen: {
      level: 23, n: 24, weights: { sam: 1.4, arm: 1.3, onm: 1.2 },
      boss: { 6: ['konishi', 0], 12: ['kato', 1], 17: ['ukita', 0], 21: ['shimazu', 1] },
      final: 'hideyoshi>0',
    },
  },
};

// 적 체력 배율 (봇 시뮬레이션으로 맞춘 값: tools/tune.mjs)
const HP_BASE = {
  s1: 1, s6: 2.26, s7: 1.43, s2: 1.78, s8: 3.11, s9: 1.14, s10: 1.58,
  s3: 1.63, s11: 1.49, s12: 1.14, s13: 2.02, s4: 1.65, s5: 1.49, s14: 1.38,
  s15: 0.97, s16: 3.48, s17: 2.76, s18: 3.97, s19: 3.68, s20: 2.24, s21: 3.2,
  s22: 3.66, s23: 4.3, s24: 2.26, s25: 2.85,
};

// 장(章) 구성: 연대순 25개 전장
export const CHAPTERS = [
  { name: '제1장 · 임진년의 봄', stages: ['s1', 's6', 's7', 's2', 's8'] },
  { name: '제2장 · 바다와 성', stages: ['s9', 's10', 's3', 's11', 's12'] },
  { name: '제3장 · 반격', stages: ['s13', 's4', 's5', 's14', 's15'] },
  { name: '제4장 · 정유재란', stages: ['s16', 's17', 's18', 's19', 's20'] },
  { name: '제5장 · 최후의 결전', stages: ['s21', 's22', 's23', 's24', 's25'] },
];

function buildNew(st) {
  const g = st.gen;
  const waves = genWaves({ seed: hashId(st.id), n: g.n, level: g.level, weights: g.weights, boss: g.boss, paths: st.paths.length, budget: g.budget || 1 });
  if (g.final) waves[waves.length - 1] = g.final;
  return { unlockTowers: [], ...st, waves };
}

function hashId(id) {
  let h = 7;
  for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

const ALL = Object.fromEntries([...ORIGINAL.map((st) => [st.id, st]), ...Object.values(NEW_STAGES).map((st) => [st.id, buildNew(st)])]);
// 적장 체력은 전장 순서를 따라 고르게 오른다 (일반 병력 배율 hpBase와 따로)
export const STAGES = CHAPTERS.flatMap((c, ci) => c.stages.map((id) => ({ ...ALL[id], chapter: ci, hpBase: HP_BASE[id] ?? ALL[id].hpBase }))).map((st, i) => ({ ...st, bossHp: 0.9 + 0.045 * i }));
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
