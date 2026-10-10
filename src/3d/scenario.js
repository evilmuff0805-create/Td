// A standalone vertical slice using the real combat engine, without campaign saves.
import { STAGE_BY_ID,STAGES } from '../data/stages.js';
import { TOWER_ORDER } from '../data/towers.js';
import { HEROES } from '../data/heroes.js';
import { skinDef } from '../data/skins.js';
import { createGame, applyCommand } from '../sim/sim.js';
import { getMap, T_BUILD } from '../sim/map.js';
import { normalizeBattleSkills } from './battle-controls.js';

export const STAGE_ID = 'winter3d';
export const TOWER_TYPES = ['sungnyemun', 'hwaseong'];
export const CAMPAIGN_STAGES=STAGES;
export const CAMPAIGN_TOWERS=TOWER_ORDER;
export const WINTER_STAGE = {
  id: STAGE_ID, name: '설야의 산성', base: '산성 성문', season: 'winter', chapter: 0,
  desc: '눈 덮인 산성의 길목을 지켜라.', date: '겨울 전장 · 3D 체험',
  startGold: 420, hpBase: 0.95, hpGrowth: 0.08, bossHp: 1, unlockTowers: [],
  grid: [
    'TTT...TT....MMM...TTTTTT',
    'T.............M.......TT',
    'T.HH....................',
    '..HH....................',
    'T........R..............',
    'T.......................',
    '........................',
    '...R...............R....',
    '........................',
    '........................',
    'T..........R........T...',
    'T.R......T........HH....',
    'TT......TTT.......HH...T',
    'TTT....TTTT....MMMM..TTT',
  ],
  paths: [[[-1, 9], [6, 9], [6, 6], [15, 6], [15, 3], [22, 3]]],
  waves: [
    'ash*9@1.1', 'ash*14@0.85', 'ash*12@0.7, sam*2@3+5',
    'ash*16@0.65, sam*3@3+6', 'sam*5@2.8, ash*18@0.65+3',
    'ash*24@0.55, sam*7@2.3+5',
  ],
};
// Register only in this entry point. STAGES (the 25 campaign stages) stays intact.
STAGE_BY_ID[STAGE_ID] = WINTER_STAGE;

export function newWinterGame(seed = 20261009, skins = {}) {
  const game = createGame({ stageId: STAGE_ID, difficulty: 'normal', mode: 'solo', seed,
    courier: false, players: [{ name: '수호자', heroes: ['yi'], skills: ['singijeon'], towers: TOWER_TYPES, skins }] });
  for (const [tower, x, y] of [['sungnyemun', 8, 7], ['hwaseong', 16, 4]])
    applyCommand(game, { t: 'build', p: 0, tower, x, y });
  game.wave.timer = 60;
  game.events.length = 0;
  return game;
}

export function canBuildAt(game, x, y) {
  const map = getMap(game.stageId);
  return Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0 && x < map.w && y < map.h
    && map.grid[y * map.w + x] === T_BUILD && !game.towers.some((t) => t.x === x && t.y === y);
}

export function campaignSupport(stageId) {
  const i=Math.max(0,STAGES.findIndex(stage=>stage.id===stageId));
  return {hero:Math.min(10,Math.round(i*.45)),skill:Math.min(5,Math.round(i*.22)),tower:Math.min(30,Math.round(i*1.3))};
}
export function newBattleGame(config={}) {
  const {stageId='s1',heroIds=['yi','gwon'],support=true,seed=20261010}=config,skills=normalizeBattleSkills(config);
  const skins=Object.fromEntries(Object.entries(config.skins??{}).filter(([heroId,skin])=>skinDef(heroId,skin)));
  if(stageId===STAGE_ID&&heroIds.length===1&&heroIds[0]==='yi'&&skills.length===1&&skills[0]==='singijeon')return newWinterGame(seed,skins);
  if(!STAGE_BY_ID[stageId])throw new Error(`Unknown battlefield: ${stageId}`);
  const heroes=[...new Set(heroIds)].filter(id=>HEROES[id]).slice(0,2);if(!heroes.length)heroes.push('yi');
  const levels=support?campaignSupport(stageId):{hero:0,skill:0,tower:0};
  const lvMap=(ids,level)=>Object.fromEntries(ids.map(id=>[id,level]));
  const game=createGame({stageId,difficulty:'normal',mode:'solo',seed,courier:false,players:[{name:'수호자',heroes,skills,towers:CAMPAIGN_TOWERS,skins,heroLv:lvMap(heroes,levels.hero),skillLv:lvMap(skills,levels.skill),towerLv:lvMap(CAMPAIGN_TOWERS,levels.tower)}]});
  // Initial defenses use the stage's real starting budget, on actual valid tiles near the road.
  const map=getMap(stageId),candidates=[];
  for(let y=0;y<map.h;y++)for(let x=0;x<map.w;x++)if(canBuildAt(game,x,y)) {
    if(game.heroes.some(h=>Math.hypot(x+.5-h.x,y+.5-h.y)<1.2))continue;
    let min=Infinity;for(const q of map.samples)min=Math.min(min,Math.hypot(x+.5-q.x,y+.5-q.y));
    if(min>.85&&min<1.8)candidates.push({x,y,score:min+Math.hypot(x+.5-game.heroes[0].x,y+.5-game.heroes[0].y)*.09});
  }
  candidates.sort((a,b)=>a.score-b.score||a.y-b.y||a.x-b.x);
  for(const type of TOWER_TYPES) {
    const p=candidates.find(p=>canBuildAt(game,p.x,p.y)&&!game.towers.some(t=>Math.hypot(t.cx-p.x-.5,t.cy-p.y-.5)<2));
    if(p)applyCommand(game,{t:'build',p:0,tower:type,x:p.x,y:p.y});
  }
  game.wave.timer=60;game.events.length=0;return game;
}
