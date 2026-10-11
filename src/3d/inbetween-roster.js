import { HERO_POSE_ART } from './hero-pose-data.js';
import { skinDef } from '../data/skins.js';

// Unlike the costume-only key, this includes base hero identity as well.
export function inbetweenLookRoster(heroes=[]){
  const looks=new Map();
  for(const hero of heroes){
    if(!HERO_POSE_ART[hero.heroId])continue;
    const skin=skinDef(hero.heroId,hero.skin)?hero.skin:null,key=skin??hero.heroId;
    looks.set(key,{key,heroId:hero.heroId,skin});
  }
  return [...looks.values()].sort((a,b)=>a.key.localeCompare(b.key));
}
export function inbetweenLooksKey(heroes=[]){return inbetweenLookRoster(heroes).map(x=>x.key).join(',');}
