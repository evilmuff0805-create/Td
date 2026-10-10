import { SKILL_ORDER } from '../data/skills.js';
import { HERO_ORDER } from '../data/heroes.js';

export function abilityIllustration(id,kind,compact=false) {
  if(kind==='heroSkill'&&id==='yi')return {src:compact?'assets/3d/art/hakikjin-icon-v2.webp':'assets/3d/art/hakikjin-v2.webp',size:'cover',position:'center'};
  if(['heroSkill','heroUlt'].includes(kind)) {
    const hero=HERO_ORDER.indexOf(id);if(hero<0)return null;
    const cell=hero*2+(kind==='heroUlt'?1:0);
    return {src:'assets/3d/art/hero-abilities-atlas-v1.webp',size:'400% 400%',position:`${cell%4*100/3}% ${Math.floor(cell/4)*100/3}%`};
  }
  const cell=kind==='combo'?8:kind==='skill'?SKILL_ORDER.indexOf(id):-1;
  if(cell<0)return null;
  return {src:'assets/3d/art/skills-atlas-v1.webp',size:'300% 300%',position:`${cell%3*50}% ${Math.floor(cell/3)*50}%`};
}
export function paintAbility(element,art) {
  const src=art?(art.src.startsWith('data:')?art.src:new URL(art.src,new URL('../../',import.meta.url)).href):null;
  element.style.backgroundImage=art?`url("${src}")`:'';
  element.style.backgroundSize=art?.size??'';element.style.backgroundPosition=art?.position??'';
}
