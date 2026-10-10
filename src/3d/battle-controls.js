import { SKILLS } from '../data/skills.js';
import { findCombo,COMBO_RANGE,RESONANCE_MAX } from '../data/combos.js';
import { comboStatus } from '../sim/abilities.js';
import { getMap,posAt,T_PATH,T_BASE } from '../sim/map.js';

export function normalizeBattleSkills(config={}) {
  const requested=Array.isArray(config.skillIds)?config.skillIds:
    Object.hasOwn(config,'skillId')?[config.skillId]:['singijeon','hanpa'];
  const ids=[...new Set(requested.filter(id=>Object.hasOwn(SKILLS,id)))].slice(0,2);
  return ids.length?ids:['singijeon'];
}
export function equippedAbility(game,slot=0) {return game.players[0].skills[slot]??null;}
export function comboView(game) {
  const [a,b]=game.heroes,hasPair=!!b,distance=hasPair?Math.hypot(a.x-b.x,a.y-b.y):null;
  const alive=hasPair&&!a.dead&&!b.dead,charge=Math.max(0,Math.min(RESONANCE_MAX,game.resonance.gauge));
  return {...comboStatus(game),hasPair,alive,distance,charge,range:COMBO_RANGE,
    def:hasPair?findCombo(a.heroId,b.heroId):null};
}
// Both orders use one real road. Only destinations are chosen here; the engine moves the heroes.
export function rallyTargets(game) {
  const [a,b]=game.heroes;if(!b||a.dead||b.dead)return null;
  const map=getMap(game.stageId),cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;
  const inside=q=>q.x>=.8&&q.y>=.8&&q.x<map.w-.8&&q.y<map.h-.8&&
    [T_PATH,T_BASE].includes(map.grid[Math.floor(q.y)*map.w+Math.floor(q.x)]);
  const candidates=map.samples.filter(inside).sort((p,q)=>Math.hypot(p.x-cx,p.y-cy)-Math.hypot(q.x-cx,q.y-cy));
  for(const p of candidates) {
    const path=map.paths[p.path],points=[-.35,.35].map(off=>({...posAt(path,Math.max(0,Math.min(path.total,p.d+off))),path:p.path}));
    if(points.every(inside))return points;
  }
  return null;
}
