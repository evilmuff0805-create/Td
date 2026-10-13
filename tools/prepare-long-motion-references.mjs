// Mechanical crops only: retain the exact approved pixels and alpha.
import fs from 'node:fs/promises';
import {sharp} from './sprite-pose-inspector.mjs';
import {HERO_POSE_ART} from '../src/3d/hero-pose-data.js';
import {SKIN_POSE_ART} from '../src/3d/skin-pose-data.js';
import {HERO_INBETWEEN_ART} from '../src/3d/inbetween-data.js';
const folder='assets/3d/fixed/long-motion/source/references';
await fs.mkdir(folder,{recursive:true});
const records=[];
for(const [id,extra]of Object.entries(HERO_INBETWEEN_ART)){
  const base=extra.skin?SKIN_POSE_ART[id]:HERO_POSE_ART[id],pieces=[];
  for(const [row,sourceRow]of [0,1,2,3,6,7].entries())for(let col=0;col<4;col++){
    const source=sourceRow<4?base:extra,frame=source.frames[(sourceRow<4?sourceRow:sourceRow-4)*4+col];
    pieces.push({frame,row,col,input:await sharp(source.path).extract({left:frame.left,top:frame.top,width:frame.width,height:frame.height}).png().toBuffer()});
  }
  const cw=Math.max(...pieces.map(p=>p.frame.width))+64,ch=Math.max(...pieces.map(p=>p.frame.height))+48,path=folder+'/'+id+'.png';
  await sharp({create:{width:cw*4,height:ch*6,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).composite(pieces.map(p=>({input:p.input,left:p.col*cw+Math.round((cw-p.frame.width)/2),top:p.row*ch+24}))).png().toFile(path);
  records.push({id,heroId:extra.heroId,skin:extra.skin,path,base:base.path,inbetweens:extra.path});
}
await fs.writeFile('tools/long-motion-references.json',JSON.stringify(records,null,2)+'\n');
console.log('Prepared '+records.length+' exact-costume reference sheets.');
