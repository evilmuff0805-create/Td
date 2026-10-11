import { getMap } from '../sim/map.js';

// Both the campaign and the preview consume the same simulation events. Shots
// may be deferred until character sockets have been synchronized for this frame.
export function paintBattleEvent(world,e,game,{deferShot}={}) {
  if(e.k==='combo'&&game.heroes.length>=2)world.fx.combo(e,game);
  else if(e.k==='abilityCue')world.fx.heroCue(e);
  else if(e.k==='boom') {
    if(e.kind==='thunder')world.fx.thunder(e.x,e.y,e.r||.8);
    else world.effect(e.x,e.y,e.r||.8,['ice','frost'].includes(e.kind)?'#a5d0e5':e.kind==='garlic'?'#a4c6a5':'#dfb778',e.kind??'impact');
  } else if(['build','upgrade','levelUp'].includes(e.k))world.effect(e.x,e.y,.7,'#c9c698','build');
  else if(e.k==='cone') {
    world.fx.volley(e.x,e.y,e.a,e.r,e.w);
  } else if(['shot','snipe','bolt'].includes(e.k)) {
    if(deferShot)deferShot(e);else world.firingLine(e);
  } else if(e.k==='slash')world.fx.spell('slash',e.x,e.y,.72,e.f===-1?Math.PI:0);
  else if(e.k==='ring')world.fx.spell('ring',e.x,e.y,e.r??1);
  else if(e.k==='dash')world.fx.dash(e.x1,e.y1,e.x2,e.y2);
  else if(['hangul','flood','smite','heal'].includes(e.k))world.fx.spell(e.k,e.x,e.y,e.r??.7);
  else if(e.k==='enemyHeal')world.fx.spell('heal',e.x,e.y,e.r??.7);
  else if(e.k==='leak'){const b=getMap(game.stageId).base;world.effect(b.x,b.y,.8,'#e49a7c');}
  else if(e.k==='ping')world.effect(e.x,e.y,.65,e.p===1?'#d6927e':'#a8c9da','build');
  else return false;
  return true;
}
