// Test player: normal commands only, with the same costs and ownership as UI play.
import { createBot,botThink,botSkills } from '../src/sim/ai.js';
import { getMap } from '../src/sim/map.js';
import { TOWERS } from '../src/data/towers.js';
import { HEROES } from '../src/data/heroes.js';
import { metaCost } from '../src/data/quests.js';

export function finalCampaignTactics(session,{botOptions,keepOpening=false,entryChoke=false}={}) {
  const s=session.state;
  entryChoke=entryChoke&&s.stageId==='s25';
  const bots=s.players.map((_,p)=>createBot(s,p,{...(botOptions??{plan:'nam',branch:'alt'}),...(entryChoke?{buildAnchor:{x:19,y:4}}:{})}));
  if(entryChoke){s.heroes.forEach((hero,h)=>session.send({t:'move',p:hero.owner,h,x:21.5,y:3.5}));keepOpening=true;}
  if(keepOpening)bots.forEach(bot=>bot.posted=true);
  let posted=keepOpening,orders=0;
  return {
    get orders(){return orders;},
    think(){
      for(const bot of bots){
        if(s.wave.n>=s.wave.total){
          if(s.tick%24===0){
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
