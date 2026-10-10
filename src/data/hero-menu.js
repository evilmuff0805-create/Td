import { MENU_HERO_ART } from './hero-menu-data.js';
import { skinDef } from './skins.js';

export function heroMenuFrame(heroId,skin=null) {
  const wanted=skinDef(heroId,skin)?.id??null;
  return MENU_HERO_ART.frames.find(frame=>frame.heroId===heroId&&frame.skinId===wanted)??null;
}

export function portraitBounds(width,height,face) {
  const [fx,fy,fs]=face,side=Math.min(width,height,fs*height);
  return {left:Math.max(0,Math.min(width-side,fx*width-side/2)),top:Math.max(0,Math.min(height-side,fy*height-side/2)),width:side,height:side};
}
