// Reproducible editor aid; the product uses the checked-in fixed coordinates.
import fs from 'node:fs';
import {STAGES} from '../src/data/stages.js';
import {getMap,T_BUILD,nearestOnPath} from '../src/sim/map.js';
const layouts={};
for(const stage of STAGES){
  const map=getMap(stage.id),candidates=[];
  for(let y=1;y<map.h-1;y++)for(let x=1;x<map.w-1;x++){
    if(map.grid[y*map.w+x]!==T_BUILD)continue;
    const near=nearestOnPath(map,x+.5,y+.5);
    if(!near||near.dist>2.25)continue;
    const coverage=map.samples.filter(p=>Math.hypot(p.x-x-.5,p.y-y-.5)<=3).length;
    candidates.push({x,y,near,coverage});
  }
  const selected=[];
  while(selected.length<20){
    let best=null,score=-Infinity;
    for(const p of candidates){
      if(selected.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<1.95))continue;
      const covered=selected.length?Math.min(...selected.map(q=>Math.hypot(q.x-p.x,q.y-p.y))):4;
      const unseen=map.samples.filter(q=>Math.hypot(q.x-p.x-.5,q.y-p.y-.5)<=3&&!selected.some(r=>Math.hypot(q.x-r.x-.5,q.y-r.y-.5)<=3)).length;
      const value=p.coverage*.18+unseen*.8+Math.min(covered,5)*2-p.near.dist;
      if(value>score){score=value;best=p;}
    }
    if(!best)break;
    selected.push(best);
  }
  if(selected.length<12)throw Error(`${stage.id}: only ${selected.length} slots`);
  // The first two are adjacent near the middle of a shared road (combo-ready).
  const rank=p=>p.coverage-Math.abs(p.near.d/map.paths[p.near.path].total-.4)*24;
  const ranked=[...selected].sort((a,b)=>rank(b)-rank(a)||a.y-b.y||a.x-b.x);
  const first=ranked[0],second=ranked.find(p=>p!==first&&Math.hypot(p.x-first.x,p.y-first.y)<=4.5)??ranked[1];
  layouts[stage.id]=[first,second,...selected.filter(p=>p!==first&&p!==second).sort((a,b)=>a.y-b.y||a.x-b.x)].map(p=>[p.x,p.y]);
}
// Hand-authored choke clusters, validated with the real earned-profile campaign.
// Keep capacity at 20; these replace isolated cells rather than adding power.
for(const [index,point]of [[8,[17,6]],[12,[16,8]],[13,[19,8]]])layouts.s4[index]=point;
for(const [index,point]of [[6,[16,5]],[11,[16,7]]])layouts.s5[index]=point;
for(const [index,point]of [[13,[17,7]],[19,[20,7]]])layouts.s14[index]=point;
for(const [index,point]of [[9,[20,6]],[15,[20,8]]])layouts.s17[index]=point;
for(const [index,point]of [[19,[8,10]],[16,[10,10]],[5,[7,11]],[8,[8,11]]])layouts.s19[index]=point;
layouts.s20[19]=[18,7];
for(const [index,point]of [[2,[4,5]],[19,[4,6]],[6,[2,5]]])layouts.s21[index]=point;
const literal='{\n'+Object.entries(layouts).map(([id,slots])=>`  ${id}: ${JSON.stringify(slots)}`).join(',\n')+'\n}';
const source=`// Fixed shared hero/building slots. Regenerate only with a map-version change.\nexport const BATTLE_RULESET = 'shared-tiles-1';\nexport const DEPLOYMENT_VERSION = '2026-10-18.1';\nexport const DEPLOYMENT_LAYOUTS = ${literal};\nexport const battleVersion = () => ({ruleset:BATTLE_RULESET,mapVersion:DEPLOYMENT_VERSION});\nexport const compatibleBattle = m => m?.ruleset===BATTLE_RULESET && m?.mapVersion===DEPLOYMENT_VERSION;\n`;
if(process.argv.includes('--write'))fs.writeFileSync('src/data/deployment.js',source);
console.log(JSON.stringify({maps:Object.keys(layouts).length,slots:Object.fromEntries(Object.entries(layouts).map(([id,a])=>[id,a.length]))}));
