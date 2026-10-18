// Art fixtures still describe their old point of interest. Resolve that point
// to a legal shared slot; the product Session never accepts a free-move command.
import {applyCommand} from '../src/sim/sim.js';
import {getMap,slotOccupant} from '../src/sim/map.js';
const serials=new WeakMap();
export function fixtureCommand(s,c){
  if(!['move','build'].includes(c.t))return c;
  const map=getMap(s.stageId),hero=c.t==='move'?s.heroes[c.h]:null;
  if(c.t==='move'&&!hero)return c;
  let available=map.deploymentSlots.filter(p=>!slotOccupant(s,p.id));
  if(hero){const dx=c.x-hero.x,dy=c.y-hero.y,directed=available.filter(p=>(Math.abs(dx)<.05||(p.cx-hero.x)*dx>0)&&(Math.abs(dy)<.05||(p.cy-hero.y)*dy>0));if(directed.length)available=directed;}
  const at=available.sort((a,b)=>(a.cx-(c.x+.5*(c.t==='build')))**2+(a.cy-(c.y+.5*(c.t==='build')))**2-((b.cx-(c.x+.5*(c.t==='build')))**2+(b.cy-(c.y+.5*(c.t==='build')))**2))[0];
  if(!at)return c;
  if(c.t==='build')return {...c,x:at.x,y:at.y};
  const seq=serials.get(s)??{};seq[c.p]=Math.max(seq[c.p]??0,s.players[c.p]?.deploymentSeq??0)+1;serials.set(s,seq);
  return {...c,t:'relocate',slotId:at.id,requestId:seq[c.p],battleKey:s.battleKey};
}
export const applyFixtureCommand=(s,c)=>applyCommand(s,fixtureCommand(s,c));
