import { TOWERS, towerBase, SYNERGY_BONUS } from '../data/towers.js';
import { TOWER_META_BONUS, metaRangeMult } from '../data/quests.js';

// Three shared base levels, followed by a visual tier for campaign specialization.
export const MAX_TOWER_LEVEL = 3;
export const SPECIALIZED_TOWER_LEVEL = 4;
// The shared simulation stores specialization separately and keeps base level at 3.
export function towerTier(tower) {return tower.branch?SPECIALIZED_TOWER_LEVEL:tower.level;}
// Fresh construction has no computed multipliers until the next simulation tick.
// Keep that tick in the simulation; only provide the initial display values here.
export function towerDisplayStats(tower,game) {
  const stats=towerBase(tower.type,tower.level,tower.branch),buffs=game.buffs;
  const damage=Number.isFinite(tower.dmgMult)?tower.dmgMult:
    (1+(tower.bDmg||0)+(tower.syn||0)*SYNERGY_BONUS+(buffs.dmgT>0?(buffs.dmg||0):0))*(1+TOWER_META_BONUS*(tower.metaLv||0));
  const range=Number.isFinite(tower.rangeMult)?tower.rangeMult:
    (1+(tower.bRange||0))*(game.wave.tactic==='night'&&game.wave.phase!=='prep'?.85:1)*metaRangeMult(tower.metaLv||0);
  return {...stats,...(Number.isFinite(stats.dmg)?{dmg:stats.dmg*damage}:{}),
    ...(Number.isFinite(stats.dps)?{dps:stats.dps*damage}:{}),range:stats.range*range};
}
const STAGES = {
  sungnyemun: [
    { name: '목조 궁수루', appearance: '낮은 목조 누각 · 단층 지붕' },
    { name: '석축 궁수루', appearance: '높은 석축 · 돌계단 · 붉은 군기' },
    { name: '중층 수호문', appearance: '이층 누각 · 두 겹 지붕 · 금빛 용마루와 대형 군기' },
  ],
  hwaseong: [
    { name: '목조 포루', appearance: '개방형 목조 포대 · 소형 화포' },
    { name: '석축 중포루', appearance: '보강 석축 · 철갑 포가 · 길어진 화포' },
    { name: '중층 수호포루', appearance: '높은 보루 · 중층 지휘각 · 대형 금테 화포' },
  ],
  bosingak:[{name:'기본 종루',appearance:'남색 기와 · 붉은 기둥 · 청동 범종'},{name:'보강 종루',appearance:'단청 보강 · 기둥 양옆의 등불'},{name:'호국 종각',appearance:'금빛 지붕 장식 · 조각 석축 · 종테'}],
  cheomseong:[{name:'석조 천문대',appearance:'풍화된 화강석 · 사각 관측창'},{name:'혼천 관측대',appearance:'황동 관측창 · 정상의 천문 기구'},{name:'별빛 관측대',appearance:'금속 띠 · 별자리 원판 · 따뜻한 관측창'}],
  haeinsa:[{name:'장경각',appearance:'나무 창살 · 남색 기와 · 경판 전각'},{name:'보강 장경각',appearance:'붉은 기둥 · 녹색 단청 · 한 쌍의 등불'},{name:'호국 장경각',appearance:'드러난 경판 서가 · 금빛 용마루 장식'}],
  seokguram:[{name:'본존 석굴',appearance:'이끼 낀 둥근 석굴 · 금빛 본존상'},{name:'연화 석굴',appearance:'다듬은 돌 아치 · 연화 기단 · 석등'},{name:'대광배 석굴',appearance:'연꽃 조각 아치 · 금빛 광배'}],
  gyeongbok:[{name:'근정전',appearance:'겹처마 궁궐 · 붉은 기둥 · 석조 난간'},{name:'월대 근정전',appearance:'금속 난간 장식 · 따뜻한 창빛'},{name:'호국 근정전',appearance:'금빛 용마루 · 조각 석수 · 장식 월대'}],
  namhansan:[{name:'수어장대',appearance:'원형 석축 · 남색 기와 수비각'},{name:'보강 수어장대',appearance:'보강 여장 · 철제 장식 · 성벽 등불'},{name:'호국 수어장대',appearance:'남색 군기 · 금빛 수호 문장'}],
  seokbinggo:[{name:'석빙 창고',appearance:'풀 덮인 석조 아치 · 얼음 창고'},{name:'보강 얼음고',appearance:'다듬은 돌 입구 · 푸른 얼음 · 석등'},{name:'호국 얼음고',appearance:'청동 냉기 문장 · 정돈된 얼음 저장고'}],
  bulguksa:[{name:'기본 석탑',appearance:'화강석 다층 석탑 · 둥근 상륜'},{name:'연화 석탑',appearance:'연꽃 조각 기단 · 석등 장식'},{name:'호국 석탑',appearance:'금빛 상륜 · 석재 조각 보강'}],
};
const BRANCH_APPEARANCE={
  bosingak:{A:'금빛 범종 · 좌우 공명판 · 붉은 군기',B:'짙은 청동 종 · 한 쌍의 시각 북 · 남색 군기'},
  cheomseong:{A:'정상의 황동 혼천의 · 금빛 관측창',B:'망원 관측기 · 청옥 별지도 · 남색 군기'},
  haeinsa:{A:'금빛 결계 문장 · 드러난 대장경 경판',B:'청옥 향로 · 의례용 입구 장식'},
  seokguram:{A:'본존상을 감싼 금빛 태양 광배',B:'세 불상 · 청옥과 금빛 조각 아치'},
  gyeongbok:{A:'붉은 휘장 · 금빛 왕실 문장',B:'열린 창고 문 · 금빛 국고 궤짝'},
  namhansan:{A:'청동 갑판 · 붉은 정예 군기',B:'청옥 기도 깃발 · 연꽃 수호 문장'},
  seokbinggo:{A:'부채꼴 얼음 결정 · 푸른 냉기 분출구',B:'세로 얼음 창살 · 청동 잠금쇠'},
  bulguksa:{A:'절제된 삼층 석탑 · 돌 상륜',B:'청옥·호박빛 연꽃 등 세 개'},
};

export function towerVisual(type, level = 1, branch=null, specializations=false) {
  const def=TOWERS[type];if(!def)throw new Error(`Unknown 3D tower: ${type}`);
  const maxLevel=specializations||level===4?SPECIALIZED_TOWER_LEVEL:MAX_TOWER_LEVEL;
  if (!Number.isInteger(level) || level < 1 || level > maxLevel || level===4&&!def.branches[branch]) throw new RangeError(`Invalid 3D tower level: ${level} ${branch??''}`);
  const stages=STAGES[type]??[
    {name:`${def.title} 기본`,appearance:'기본 건물과 핵심 장치'},
    {name:`${def.title} 보강`,appearance:'석축·장치 보강 · 높아진 구조'},
    {name:`${def.title} 완성`,appearance:'확장된 누각·기단 · 금빛 장식'},
  ];
  const specialized=level===4,stage=specialized?{name:def.branches[branch].name,appearance:BRANCH_APPEARANCE[type]?.[branch]??def.branches[branch].desc}:stages[level-1];
  const isMax = level === maxLevel, upgradeCount = level - 1;
  return { ...stage,level,maxLevel,upgradeCount,isMax,branch,
    status: isMax ? '최대 강화' : level === 1 ? '기본' : `강화 ${upgradeCount}회`,
    next: level===3&&maxLevel===4?'두 가지 특화 중 하나를 선택합니다':stages[level]?.appearance??null,
    cost: level<3?def.levels[level].cost:null,
  };
}
