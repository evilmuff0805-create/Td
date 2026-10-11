import { HERO_POSE_ART } from './hero-pose-data.js';

// An omitted roster keeps all-hero art previews compatible. An explicit empty
// roster belongs to a guest waiting for its first snapshot and loads no heroes.
export function heroPoseRoster(heroes) {
  if(heroes===undefined)return Object.keys(HERO_POSE_ART).sort();
  const ids=Array.isArray(heroes)?heroes.map(hero=>hero?.heroId):[];
  return [...new Set(ids.filter(id=>Object.hasOwn(HERO_POSE_ART,id)))].sort();
}
export function heroPoseKey(heroes) {return heroPoseRoster(heroes).join(',');}
