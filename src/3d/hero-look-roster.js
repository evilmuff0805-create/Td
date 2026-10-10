import { skinDef } from '../data/skins.js';

// Snapshots recreate objects every frame. Only the equipped, validated values
// decide whether artwork changes; two players may equip different looks.
export function heroLookRoster(heroes=[]) {
  const looks=new Map();
  for(const hero of heroes)if(skinDef(hero.heroId,hero.skin))looks.set(hero.skin,{heroId:hero.heroId,skin:hero.skin});
  return [...looks.values()].sort((a,b)=>a.skin.localeCompare(b.skin));
}
export function heroLooksKey(heroes=[]) {
  return heroLookRoster(heroes).map(look=>look.skin).join(',');
}
