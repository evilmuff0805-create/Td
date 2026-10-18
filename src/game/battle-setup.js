import {battleVersion,compatibleBattle} from '../data/deployment.js';
import { HEROES, HERO_META_MAX } from '../data/heroes.js';
import { SKILLS, SKILL_META_MAX } from '../data/skills.js';
import { TOWERS } from '../data/towers.js';
import { STAGE_BY_ID, DIFFICULTY } from '../data/stages.js';
import { TOWER_META_MAX } from '../data/quests.js';
import { ITEMS, ITEM_PER_BATTLE } from '../data/items.js';
import { skinDef } from '../data/skins.js';

const level=(n,max)=>Number.isFinite(n)?Math.max(0,Math.min(max,Math.floor(n))):0;
const known=(table,id)=>typeof id==='string'&&Object.prototype.hasOwnProperty.call(table,id);
export function validateBattleSetup(options) {
  if(!['solo','host','guest'].includes(options.kind))throw new Error('지원하지 않는 전투 모드입니다. 협동은 방 만들기/참가를 이용해 주세요.');
  if(!known(STAGE_BY_ID,options.stageId)||!known(DIFFICULTY,options.difficulty))throw new Error('전장 또는 난이도가 올바르지 않습니다.');
  if(options.kind==='guest')return;
  const count=options.kind==='solo'?1:2;
  if(!Array.isArray(options.specs)||options.specs.length!==count)throw new Error('출전 인원이 올바르지 않습니다.');
  for(const spec of options.specs)if(!spec||!Array.isArray(spec.heroes)||spec.heroes.length!==1||!known(HEROES,spec.heroes[0]))throw new Error('각자 유효한 영웅 한 명을 선택해 주세요.');
  if(count===2&&options.specs[0].heroes[0]===options.specs[1].heroes[0])throw new Error('서로 다른 영웅을 선택해 주세요.');
}

// Validate before rendering a received pick and again immediately before start.
export function networkPick(message) {
  const m=message,s=m?.spec;
  if(!m||!compatibleBattle(m)||!known(HEROES,m.hero)||!s||!Array.isArray(s.heroes)||s.heroes.length!==1||s.heroes[0]!==m.hero)return null;
  if(!Array.isArray(m.skills)||m.skills.length!==2||new Set(m.skills).size!==2||!m.skills.every(id=>known(SKILLS,id)))return null;
  if(!Array.isArray(s.skills)||s.skills.length!==2||s.skills.some((id,i)=>id!==m.skills[i]))return null;
  if(!Array.isArray(s.towers)||!s.towers.length||s.towers.some(id=>!known(TOWERS,id))||new Set(s.towers).size!==s.towers.length)return null;
  const name=typeof m.name==='string'?m.name.trim().slice(0,10)||'동료':'동료';
  const skin=skinDef(m.hero,s.skins?.[m.hero])?.id??null;
  return {...battleVersion(),name,hero:m.hero,skills:[...m.skills],ready:m.ready===true,rank:level(m.rank,17),spec:{name,heroes:[m.hero],skills:[...m.skills],
    towers:[...s.towers],heroLv:{[m.hero]:level(s.heroLv?.[m.hero],HERO_META_MAX)},skillLv:Object.fromEntries(m.skills.map(id=>[id,level(s.skillLv?.[id],SKILL_META_MAX)])),
    towerLv:Object.fromEntries(s.towers.map(id=>[id,level(s.towerLv?.[id],TOWER_META_MAX)])),skins:{[m.hero]:skin},
    items:Object.fromEntries(Object.keys(ITEMS).map(id=>[id,level(s.items?.[id],ITEM_PER_BATTLE)]))}};
}
