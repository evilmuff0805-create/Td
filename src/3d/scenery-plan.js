import { getMap,T_BLOCK,T_BUILD,T_PATH,T_WATER,T_BASE,posAt } from '../sim/map.js';
import { stageSeed } from './seasons.js';
import { roadSegments,roadSample } from './road-terrain.js';
import { seasonalTreeKind } from './seasonal-props.js';
import { surfaceNoise } from './surfaces.js';

const key=(x,z)=>`${x},${z}`;
const quantize=n=>Math.round(n*10)/10;
// Coordinate hashes do not consume simulation RNG or depend on traversal order.
function random(seed,x,z,salt=0){let n=(seed^Math.imul(x+67,374761393)^Math.imul(z+71,668265263)^Math.imul(salt+1,2246822519))>>>0;n=Math.imul(n^(n>>>13),1274126177);return ((n^(n>>>16))>>>0)/4294967296;}

function components(cells) {
  const available=new Map(cells.map(d=>[key(d.x,d.y),d])),groups=[];
  for(const d of cells){
    if(!available.has(key(d.x,d.y)))continue;
    const group=[],queue=[d];available.delete(key(d.x,d.y));
    while(queue.length){const p=queue.pop();group.push(p);for(const [dx,dz]of [[1,0],[-1,0],[0,1],[0,-1]]){const k=key(p.x+dx,p.y+dz),next=available.get(k);if(next){available.delete(k);queue.push(next);}}}
    groups.push(group);
  }return groups;
}

export function sceneryPlan(stage,theme) {
  const map=getMap(stage.id),segments=roadSegments(map),seed=stageSeed(stage.id),items=[],supplies=[],lamps=[],base={x:map.base.x+.5,z:map.base.y+.5};
  const protectedCenters=[],wet=[];
  for(let z=0;z<map.h;z++)for(let x=0;x<map.w;x++){
    const tile=map.grid[z*map.w+x];if(tile!==T_BLOCK)protectedCenters.push({x:x+.5,z:z+.5,tile});
    if(tile===T_WATER||tile===T_PATH&&stage.grid[z][x]==='W')wet.push({x,z});
  }
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
  const roadDistance=(x,z)=>roadSample(segments,x,z).distance;
  const centerDistance=(x,z)=>Math.min(...protectedCenters.map(p=>Math.hypot(x-p.x,z-p.z)));
  const wetDistance=(x,z)=>Math.min(Infinity,...wet.map(p=>Math.hypot(Math.max(p.x-x,0,x-p.x-1),Math.max(p.z-z,0,z-p.z-1))));
  function safe(x,z,radius,gateClear=0) {
    return x>=0&&z>=0&&x<map.w&&z<map.h&&map.grid[Math.floor(z)*map.w+Math.floor(x)]===T_BLOCK
      &&centerDistance(x,z)>=radius+.30&&roadDistance(x,z)>=radius+.58&&wetDistance(x,z)>=radius+.04&&Math.hypot(x-base.x,z-base.z)>=gateClear;
  }
  function position(d,radius,salt,gateClear=0) {
    const x=d.x+.5+(random(seed,d.x,d.y,salt)-.5)*.24,z=d.y+.5+(random(seed,d.x,d.y,salt+1)-.5)*.24;
    return safe(x,z,radius,gateClear)?{x,z}:{x:d.x+.5,z:d.y+.5};
  }
  function add(d,kind,height,radius,role,variation=0) {
    const p=position(d,radius,3);items.push({key:`${d.ch}:${d.x},${d.y}`,kind,...p,height:quantize(height),radius,role,variation,cells:[[d.x,d.y]]});
  }

  // One architectural mass per connected house block. A bounding-box center
  // can land in a buildable hole of an L-shaped village, so score only safe sites.
  for(const group of components(map.decor.filter(d=>d.ch==='H'))){
    const cx=group.reduce((a,d)=>a+d.x+.5,0)/group.length,cz=group.reduce((a,d)=>a+d.y+.5,0)/group.length;
    const candidates=[{x:cx,z:cz},...group.map(d=>({x:d.x+.5,z:d.y+.5}))];
    for(const d of group)if([[1,0],[0,1],[1,1]].every(([dx,dz])=>group.some(q=>q.x===d.x+dx&&q.y===d.y+dz)))candidates.push({x:d.x+1,z:d.y+1});
    const sites=candidates.map(p=>({...p,radius:Math.min(.76,centerDistance(p.x,p.z)-.32,roadDistance(p.x,p.z)-.60,wetDistance(p.x,p.z)-.04)})).filter(p=>p.radius>=.30&&safe(p.x,p.z,p.radius));
    sites.sort((a,b)=>(b.radius-a.radius)*4+distance(a,{x:cx,z:cz})-distance(b,{x:cx,z:cz}));
    const site=sites[0]??{x:group[0].x+.5,z:group[0].y+.5,radius:.30};
    const nearGate=distance(site,base)<2.5,height=quantize(nearGate?1.4:site.radius>.6?2.4:1.9),d=group[0];
    const house={key:`H:${d.x},${d.y}`,kind:'hanok',...site,height,role:'house',variation:random(seed,d.x,d.y,9),cells:group.map(q=>[q.x,q.y])};items.push(house);
    // Cargo belongs beside a doorway, never at the house's original center.
    const cargo=group.flatMap(q=>[[.18,.18],[.82,.18],[.18,.82],[.82,.82]].map(([dx,dz])=>({x:q.x+dx,z:q.y+dz})))
      .filter(p=>safe(p.x,p.z,.12,1.65)&&distance(p,house)>house.radius+.15)
      .sort((a,b)=>distance(a,{x:house.x+.5,z:house.z+.65})-distance(b,{x:house.x+.5,z:house.z+.65}))[0];
    if(cargo)supplies.push({key:'cargo:'+house.key,kind:'supplies',...cargo,height:.36,radius:.12,role:'cargo',variation:0});
    const entry=group.flatMap(q=>[[.18,.82],[.82,.82],[.18,.18],[.82,.18]].map(([dx,dz])=>({x:q.x+dx,z:q.y+dz})))
      .filter(p=>safe(p.x,p.z,.10,1.65)&&roadDistance(p.x,p.z)>=.72&&distance(p,house)>house.radius+.10&&(!cargo||distance(p,cargo)>.30))
      .sort((a,b)=>distance(a,{x:house.x-.55,z:house.z+.7})-distance(b,{x:house.x-.55,z:house.z+.7}))[0];
    if(entry)lamps.push([entry.x,entry.z,.62,true]);
  }

  // Alternate a few tall crowns with low companion trees, rather than a hedge
  // made from one equally large billboard on every consecutive grid cell.
  const trees=map.decor.filter(d=>d.ch==='T'),crowns=[];
  const ranked=[...trees].sort((a,b)=>random(seed,b.x,b.y,21)-random(seed,a.x,a.y,21));
  for(const d of ranked){
    const p={x:d.x+.5,z:d.y+.5},near=roadDistance(p.x,p.z),gate=distance(p,base);
    if(near>=1.55&&gate>=2.5&&crowns.every(q=>distance(p,q)>1.8))crowns.push(p);
  }
  for(const d of trees){
    const x=d.x+.5,z=d.y+.5,near=roadDistance(x,z),gate=Math.hypot(x-base.x,z-base.z),crown=crowns.some(p=>p.x===x&&p.z===z);
    const back=z<map.h*.28,height=gate<2.5?.65:near<1.55?1.15+random(seed,d.x,d.y,2)*.25:crown?(back?2.1:1.7)+random(seed,d.x,d.y,2)*.3:.85+random(seed,d.x,d.y,2)*.35;
    add(d,seasonalTreeKind(theme,surfaceNoise(x*.63+4,z*.63+8)),height,.29,crown?'crown':'understory',random(seed,d.x,d.y,5));
  }
  for(const group of components(map.decor.filter(d=>d.ch==='M'))){
    const leaders=[];
    for(const d of [...group].sort((a,b)=>random(seed,b.x,b.y,31)-random(seed,a.x,a.y,31))){const p={x:d.x+.5,z:d.y+.5};if(leaders.every(q=>distance(p,q)>1.6))leaders.push(p);}
    for(const d of group){const lead=leaders.some(p=>p.x===d.x+.5&&p.z===d.y+.5),near=roadDistance(d.x+.5,d.y+.5),height=lead&&near>1.4?1.2+random(seed,d.x,d.y,6)*.35:.45+random(seed,d.x,d.y,6)*.25;add(d,lead?'cliff':theme.snow?'snowRock':'rock',height,.30,lead?'outcrop':'stone',random(seed,d.x,d.y,7));}
  }
  for(const d of map.decor){
    if(d.ch==='R')add(d,theme.snow?'snowRock':'rock',.45+random(seed,d.x,d.y,10)*.25,.28,'stone',random(seed,d.x,d.y,11));
    else if(d.ch==='J')add(d,'jangseung',.75+random(seed,d.x,d.y,10)*.15,.17,'waymark');
    else if(d.ch==='K')items.push({key:`K:${d.x},${d.y}`,kind:'wall',x:d.x+.5,z:d.y+.5,height:1,radius:.30,role:'wall',variation:0,cells:[[d.x,d.y]]});
  }

  // Two entry lamps and at most three roadside lamps. Search actual path
  // normals and reject water, bridge decks and the center of any build slot.
  function lampSite(x,z) {
    if(x<.12||z<.12||x>map.w-.12||z>map.h-.12)return false;
    const tile=map.grid[Math.floor(z)*map.w+Math.floor(x)];
    return tile!==T_WATER&&tile!==T_PATH&&tile!==T_BASE&&wetDistance(x,z)>=.12&&roadDistance(x,z)>=.72
      &&!protectedCenters.some(p=>p.tile===T_BUILD&&Math.hypot(p.x-x,p.z-z)<.36)
      &&!items.some(p=>Math.hypot(p.x-x,p.z-z)<p.radius+.15)&&!supplies.some(p=>Math.hypot(p.x-x,p.z-z)<.3);
  }
  const gateLamps=[],lastPath=map.paths[0],end=posAt(lastPath,lastPath.total);
  for(const side of [-1,1]){
    const candidates=[];
    for(const offset of [.74,.88,1.14])for(const along of [.32,-.32,.5,-.5])candidates.push({x:base.x-end.dy*offset*side+end.dx*along,z:base.z+end.dx*offset*side+end.dy*along});
    const entry=candidates.find(p=>lampSite(p.x,p.z));
    if(entry)gateLamps.push([entry.x,entry.z,.70,true]);
  }lamps.unshift(...gateLamps);
  for(const f of [.27,.53,.77]){
    const path=map.paths[0],q=posAt(path,path.total*f),candidates=[];
    for(const offset of [.82,.96,1.12])for(const side of [1,-1])for(const along of [0,.18,-.18]){
      const x=q.x-q.dy*offset*side+q.dx*along,z=q.y+q.dx*offset*side+q.dy*along;
      if(!lampSite(x,z)||Math.hypot(x-base.x,z-base.z)<1.7||lamps.some(p=>Math.hypot(p[0]-x,p[1]-z)<1.2))continue;
      candidates.push([x,z,.58,false]);
    }if(candidates[0])lamps.push(candidates[0]);
  }
  return {items,supplies,lamps:lamps.slice(0,9),base,metrics:{props:items.length,crowns:items.filter(p=>p.role==='crown').length,understory:items.filter(p=>p.role==='understory').length,houses:items.filter(p=>p.role==='house').length,cargo:supplies.length}};
}
