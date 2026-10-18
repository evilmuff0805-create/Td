// Test player: normal commands only, with the same costs and ownership as UI play.
import { createBot,botThink,botSkills } from '../src/sim/ai.js';
import { getMap,slotOccupant } from '../src/sim/map.js';
import { TOWERS,towerBase } from '../src/data/towers.js';
import { HEROES } from '../src/data/heroes.js';
import { metaCost } from '../src/data/quests.js';

// The final-wave player must still be allowed to spend earned money. A fixed
// upgrade-only policy cannot react when its build plan has no beam tower.
function tileFinalOrder(s,bot,send){
  if(s.tick%24)return false;
  const pl=s.players[bot.p],map=getMap(s.stageId),mine=s.towers.filter(t=>t.owner===bot.p);
  if(!pl.towers.includes('seokguram'))return false;
  const boss=s.enemies.filter(e=>e.hp>0&&e.tier===4).sort((a,b)=>b.d/map.paths[b.path].total-a.d/map.paths[a.path].total)[0];
  const samples=map.samples.filter(p=>!boss||p.path===boss.path&&p.d>=boss.d-.5);
  const score=slot=>samples.filter(p=>(p.x-slot.cx)**2+(p.y-slot.cy)**2<=3.4**2).length
    +s.enemies.filter(e=>e.hp>0&&(e.x-slot.cx)**2+(e.y-slot.cy)**2<=3.4**2).reduce((n,e)=>n+Math.min(500,e.hp)/20,0);
  const incomplete=mine.filter(t=>t.type==='seokguram'&&!t.branch).sort((a,b)=>b.level-a.level||score({cx:b.cx,cy:b.cy})-score({cx:a.cx,cy:a.cy}))[0];
  const base=incomplete?(incomplete.level<3?TOWERS.seokguram.levels[incomplete.level].cost:TOWERS.seokguram.branches.A.cost):TOWERS.seokguram.levels[0].cost;
  const price=metaCost(base,incomplete?.metaLv??pl.towerLv.seokguram??0);
  if(incomplete&&pl.gold>=price){send({t:'upgrade',p:bot.p,id:incomplete.id,branch:'A'});return true;}
  const vacant=map.deploymentSlots.filter(slot=>!slotOccupant(s,slot.id)).sort((a,b)=>score(b)-score(a));
  if(!incomplete&&vacant.length&&pl.gold>=price){send({t:'build',p:bot.p,tower:'seokguram',x:vacant[0].x,y:vacant[0].y});return true;}
  // Sell at most one confirmed structure per check. Never assume its slot is
  // already free in the same tick; the next update must approve the sale first.
  const reachesRemaining=t=>{const range=towerBase(t.type,t.level,t.branch).range*Math.max(1,t.rangeMult||1);return samples.some(p=>(p.x-t.cx)**2+(p.y-t.cy)**2<=range*range);};
  const weak=mine.filter(t=>t.type==='sungnyemun'||!['namhansan','cheomseong','gyeongbok','bosingak','haeinsa','seokbinggo','bulguksa','seokguram'].includes(t.type)&&!reachesRemaining(t))
    .sort((a,b)=>Number(reachesRemaining(a))-Number(reachesRemaining(b))||a.dmgDone-b.dmgDone)[0];
  if(weak&&(pl.gold<price||!vacant.length)){send({t:'sell',p:bot.p,id:weak.id});return true;}
  return false;
}

export function finalCampaignTactics(session,{botOptions,keepOpening=false,entryChoke=false,tileBoard=false}={}) {
  const s=session.state;
  entryChoke=entryChoke&&s.stageId==='s25';
  const bots=s.players.map((_,p)=>createBot(s,p,{...(botOptions??{plan:'nam',branch:'alt'}),...(entryChoke?{buildAnchor:{x:19,y:4}}:{})}));
  if(entryChoke){s.heroes.forEach((hero,h)=>session.send({t:'move',p:hero.owner,h,x:21.5,y:3.5}));keepOpening=true;}
  if(keepOpening)bots.forEach(bot=>bot.posted=true);
  let posted=keepOpening,orders=0;const transactions=[],pending=[];
  const recordOrder=c=>{
    const t=s.towers.find(t=>t.id===c.id),record={tick:s.tick,time:s.time,command:{...c},goldBefore:s.players[c.p].gold,towerIdsBefore:s.towers.map(t=>t.id),levelBefore:t?.level,branchBefore:t?.branch};
    transactions.push(record);pending.push(record);return session.send(c);
  };
  return {
    get orders(){return orders;},
    get transactions(){return transactions;},
    think(){
      for(let i=pending.length-1;i>=0;i--){const r=pending[i];if(s.tick<=r.tick)continue;const c=r.command,t=c.t==='build'?s.towers.find(t=>t.x===c.x&&t.y===c.y&&t.owner===c.p&&t.type===c.tower):s.towers.find(t=>t.id===c.id);r.afterTick=s.tick;r.goldAfterStep=s.players[c.p].gold;r.accepted=c.t==='sell'?!t:c.t==='build'?!!t&&!r.towerIdsBefore.includes(t.id):!!t&&(t.level>r.levelBefore||t.branch!==r.branchBefore);delete r.towerIdsBefore;pending.splice(i,1);}
      for(const bot of bots){
        if(s.wave.n>=s.wave.total){
          if(tileBoard){if(tileFinalOrder(s,bot,recordOrder))orders++;}
          else if(s.tick%24===0){
            const pl=s.players[bot.p],tower=s.towers.filter(t=>t.owner===bot.p&&!t.branch&&t.type==='seokguram').sort((a,b)=>b.level-a.level)[0];
            const cost=tower?metaCost(tower.level<3?TOWERS.seokguram.levels[tower.level].cost:TOWERS.seokguram.branches.A.cost,tower.metaLv):Infinity;
            if(tower&&pl.gold>=cost){session.send({t:'upgrade',p:bot.p,id:tower.id,branch:'A'});orders++;}
            else if(tower){
              const weak=s.towers.filter(t=>t.owner===bot.p&&['sungnyemun','bosingak','namhansan'].includes(t.type)).sort((a,b)=>a.dmgDone-b.dmgDone)[0];
              if(weak){session.send({t:'sell',p:bot.p,id:weak.id});orders++;}
            }
          }
        }else botThink(s,bot,c=>session.send(c));
        botSkills(s,bot,c=>session.send(c));
      }
      if(session.kind==='solo'&&!posted){
        const at=getMap(s.stageId).samples.find(sm=>sm.path===0&&sm.d>4);
        s.heroes.forEach((hero,h)=>{const offset=HEROES[hero.heroId].block?0:.8;session.send({t:'move',p:0,h,x:at.x+offset,y:at.y+offset});});posted=true;
      }
    },
  };
}
