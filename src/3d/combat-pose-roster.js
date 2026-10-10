import {ENEMIES} from '../data/enemies.js';
import {STAGES,parseWave} from '../data/stages.js';
import {TACTICS} from '../data/tactics.js';

// Include every possible spawn source, including death splits and boss phases.
export function combatPoseRoster(stage,explicit=null){
  if(explicit)return {enemy:[...new Set(explicit.enemy??[])],ally:[...new Set(explicit.ally??[])]};
  if(!stage)return {enemy:[],ally:[]};
  const enemy=new Set(),number=Math.max(1,STAGES.findIndex(s=>s.id===stage.id)+1);
  for(const wave of stage.waves??[])for(const group of parseWave(wave))enemy.add(group.type);
  for(const tactic of Object.values(TACTICS))if(tactic.minStage<=number)for(const group of tactic.add??[])enemy.add(group.type);
  for(const id of enemy){
    const def=ENEMIES[id];if(!def)continue;
    for(const group of [def.spawnOnDeath,def.boss?.summon,...(def.boss?.phaseSummon??[])])if(group)enemy.add(group.type);
  }
  return {enemy:[...enemy],ally:['militia','guard','elite','monk','courier','turtle']};
}
