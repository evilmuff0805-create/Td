import { getMap, nearestOnPath,posAt } from '../sim/map.js';
import { SKILLS } from '../data/skills.js';

export function abilityTarget(game,kind,hero,point,skillId) {
  if(!point)return null;
  let x=point.x,y=point.z,radius=0,fan=false,dash=false,path=false,reach=0,spawnCount=0,wall=false;
  if(kind==='heroSkill') {
    if(hero.heroId==='yi')fan=true;
    else {
      const limit=hero.heroId==='gang'?4:5,dx=x-hero.x,dy=y-hero.y,d=Math.hypot(dx,dy);reach=limit;
      if(d>limit){x=hero.x+dx/d*limit;y=hero.y+dy/d*limit;}
      radius={sejong:1.8,eulji:1.5,gang:.8,gwon:2.3,gwak:.45,ahn:2.2,dangun:2.1}[hero.heroId];
      dash=hero.heroId==='gang';path=hero.heroId==='gwak';spawnCount=path?3:0;
    }
  } else if(kind==='heroUlt') {
    radius=hero.heroId==='eulji'?3:.5;path=['yi','gwon'].includes(hero.heroId);
    if(hero.heroId==='gwon'){wall=true;reach=5;const dx=x-hero.x,dy=y-hero.y,d=Math.hypot(dx,dy);if(d>5){x=hero.x+dx/d*5;y=hero.y+dy/d*5;}}
  }
  else if(kind==='skill'){const def=SKILLS[skillId];if(!def||def.target==='none')return null;radius=def.radius??.45;path=def.target==='path';spawnCount=path?def.n:0;}
  else return null;
  const map=getMap(game.stageId);let sample;
  if(path){sample=nearestOnPath(map,x,y);if(sample){x=sample.x;y=sample.y;}}
  const spawns=[];
  if(sample&&spawnCount)for(let i=0;i<spawnCount;i++) {
    const p=map.paths[sample.path],q=posAt(p,Math.max(0,Math.min(p.total,sample.d+(i-(spawnCount-1)/2)*.55))),side=(i%2?1:-1)*.18;
    spawns.push({x:q.x-q.dy*side,y:q.y+q.dx*side});
  }
  return {x,y,radius,fan,dash,path,reach,spawns,wall,color:kind==='skill'&&skillId==='hanpa'?'#80d3ef':path?'#9ed6b1':dash?'#e8c779':'#e4a366'};
}

// The simulation owns clamping and road snapping. Sending a preview would apply them twice.
export function targetedCommand(kind,h,point,slot=0) {return {t:kind,h,slot,x:point.x,y:point.z};}
