import {getMap,slotOccupant} from '../src/sim/map.js';
import {HEROES} from '../src/data/heroes.js';
// Visible-map plans for the late multi-path chokes. These are test bot choices,
// not extra reserved product slots or privileged construction commands.
const BUILD_PRIORITIES={
  s20:{sungnyemun:[[9,3],[20,4]],hwaseong:[[18,6]],bosingak:[[18,5]],seokbinggo:[[18,7]],namhansan:[[20,8]],haeinsa:[[18,5]],cheomseong:[[20,8]],gyeongbok:[[17,6]]},
  s21:{sungnyemun:[[14,2],[14,5]],hwaseong:[[4,5],[3,8]],bosingak:[[4,6]],seokbinggo:[[4,6]],namhansan:[[2,5]],haeinsa:[[4,8]]},
};
// A bounded, explicit test policy. These orders use the ordinary game command path.
export function preparedStrategy(stage, kind, attempt) {
  const preferred = stage.finale
    ? { plan: 'holy', placement: kind === 'solo' ? 'neighbor' : 'rally' }
    : ['s5','s20'].includes(stage.id) ? {plan:'ice',placement:'default'}
    : ['s14','s17','s19','s21'].includes(stage.id) ? {plan:'fresh',placement:'default'}
    : stage.chapter >= 4
      ? { plan: stage.id === 's24' ? 'ice' : 'fresh', placement: 'default', ...(stage.id === 's24' ? { buildPlacement: 'exit' } : {}) }
      : { plan: 'balanced', placement: 'default' };
  const choices = stage.finale?[preferred,{plan:'holy',placement:'default'},{plan:'holy',placement:'rally'},
    {plan:'fresh',placement:'neighbor'},{plan:'nam',placement:'default'},{plan:'balanced',placement:'middle'}]:[preferred,
    { plan: 'ice', placement: 'exit', buildPlacement: 'exit' },
    { plan: 'fresh', placement: 'default' },
    { plan: 'nam', placement: 'rally' },
    { plan: 'balanced', placement: 'middle' },
    { plan: 'bul', placement: 'spread' }];
  return { ...choices[(attempt - 1) % choices.length], branch: attempt <= 6 ? 'A' : 'alt',
    upgradePolicy: attempt <= 6 ? (kind === 'solo' ? 'cannon' : 'focus') : (kind === 'solo' ? 'focus' : 'cannon'),
    economyAware: true, staggerBongsu: true };
}

export function preparedSender(session) {
  return command => {
    // Build and move during the real 30-second preparation; no early-wave bonus.
    if (command.t === 'nextWave' && session.state.wave.n === 0) return;
    if(command.t==='build'&&BUILD_PRIORITIES[session.stageId]){
      const s=session.state,map=getMap(session.stageId),free=map.deploymentSlots.filter(slot=>!slotOccupant(s,slot.id));
      let at=BUILD_PRIORITIES[session.stageId][command.tower]?.map(([x,y])=>free.find(slot=>slot.x===x&&slot.y===y)).find(Boolean);
      if(at)command={...command,x:at.x,y:at.y};
      if(session.stageId==='s20'&&command.tower!=='gyeongbok'&&!s.towers.some(t=>t.type==='gyeongbok')&&command.x===17&&command.y===6){
        at=free.filter(slot=>slot.x!==17||slot.y!==6).sort((a,b)=>map.samples.filter(p=>(p.x-b.cx)**2+(p.y-b.cy)**2<=9).length-map.samples.filter(p=>(p.x-a.cx)**2+(p.y-a.cy)**2<=9).length)[0];
        if(at)command={...command,x:at.x,y:at.y};
      }
    }
    if(command.t==='move'){const h=session.state.heroes[command.h];if(!h)return false;const slot=getMap(session.stageId).deploymentSlots.filter(p=>!slotOccupant(session.state,p.id)||p.id===h.deploymentSlotId).sort((a,b)=>(a.cx-command.x)**2+(a.cy-command.y)**2-((b.cx-command.x)**2+(b.cy-command.y)**2))[0];return slot&&slot.id!==h.deploymentSlotId?session.relocateHero(command.h,slot.id):false;}
    return session.send(command);
  };
}

// Exercise the player's new drag mechanic through normal approved commands.
// The bot sees current enemies, checks once per game second and obeys the same
// occupancy, pending request and combat cooldown rules as a human player.
export function preparedRelocation(session){
  const s=session.state;if(s.tick%60||s.paused||s.result||session.deploymentPending||!s.enemies.length)return;
  const map=getMap(s.stageId);
  for(let i=0;i<s.heroes.length;i++){
    const hero=s.heroes[i];if(hero.owner!==session.me||hero.dead||hero.relocateCd>0)continue;
    const range=HEROES[hero.heroId].range;
    const score=slot=>s.enemies.filter(e=>e.hp>0&&(e.x-slot.cx)**2+(e.y-slot.cy)**2<=range*range)
      .reduce((sum,e)=>sum+Math.min(300,e.hp)*(1+4*(e.d/map.paths[e.path].total)**4),0);
    const vacant=map.deploymentSlots.filter(slot=>!slotOccupant(s,slot.id));
    const best=vacant.sort((a,b)=>score(b)-score(a))[0];
    if(best&&score(best)>score({cx:hero.x,cy:hero.y})&&session.relocateHero(i,best.id))return;
  }
}
