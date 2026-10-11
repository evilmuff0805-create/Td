// Mechanical reference strip extraction only; generated pixels/alpha are unchanged.
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {sharp,inspectPoseAtlas} from './sprite-pose-inspector.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const folder='assets/3d/fixed/inbetweens/source';
await fs.mkdir(new URL('../'+folder+'/references/',import.meta.url),{recursive:true});
for(const id of process.argv.slice(2)){
  const source=folder+'/'+id+'-inbetweens-v1.png';
  const {layout}=await inspectPoseAtlas(root,{id,source,delivery:source});
  const frames=layout.frames.slice(0,4),cw=Math.max(...frames.map(f=>f.width))+48,ch=Math.max(...frames.map(f=>f.height))+48,pieces=[];
  for(const [col,f]of frames.entries())pieces.push({input:await sharp(root+source).extract({left:f.left,top:f.top,width:f.width,height:f.height}).png().toBuffer(),left:col*cw+Math.round((cw-f.width)/2),top:24});
  await sharp({create:{width:cw*4,height:ch,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).composite(pieces).png().toFile(root+folder+'/references/'+id+'-pass-a.png');
  console.log(id,frames.map(f=>[f.width,f.height]));
}
