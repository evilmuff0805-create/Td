// Exact source rectangles for focused imagegen reference inputs; no repainting.
import fs from 'node:fs/promises';
import {sharp,inspectPoseAtlas} from './sprite-pose-inspector.mjs';
import {COMBAT_POSE_ART} from '../src/3d/combat-pose-data.js';
const dir='assets/3d/fixed/combat-inbetweens/source/',records=[];
for(const [id,indices]of [['monk',[0,1,2]],['courier',[0,3]]]){
  const source=dir+id+'-inbetweens-v3.png',a=await inspectPoseAtlas(process.cwd(),{id:source,source,delivery:source,rows:2,columns:2});
  for(const index of indices){const f=a.layout.frames[index],bounds={left:f.left,top:f.top,width:f.width,height:f.height},output=dir+id+'-v3-c'+(index+1)+'-reference.png';await sharp(source).extract(bounds).png().toFile(output);records.push({source,output,bounds,transform:'exact rectangle; unchanged RGBA'});}
}
{
  const source=dir+'cavalry-inbetweens-v4.png',a=await inspectPoseAtlas(process.cwd(),{id:source,source,delivery:source,rows:2,columns:2});
  for(const index of [0,3]){const f=a.layout.frames[index],bounds={left:f.left,top:f.top,width:f.width,height:f.height},output=dir+'cavalry-v4-c'+(index+1)+'-reference.png';await sharp(source).extract(bounds).png().toFile(output);records.push({source,output,bounds,transform:'exact rectangle; unchanged RGBA'});}
}
const a=COMBAT_POSE_ART.enemy.wakizaka,f=a.frames[14],bounds={left:f.left,top:f.top,width:f.width,height:f.height},output=dir+'wakizaka-approved-attack-c3-reference.png';
await sharp(a.path).extract(bounds).png().toFile(output);records.push({source:a.path,output,bounds,transform:'exact rectangle; unchanged RGBA'});
for(const [id,version,indices,rows,columns]of [['kuroda',2,[1,2],2,2],['so',2,[4,7],2,4],['ukita',1,[9,10],4,4],['ukita',2,[0,1,2,3],2,2],['hideyoshi',5,[3],2,2]]){
  const source=dir+id+'-inbetweens-v'+version+'.png',a=await inspectPoseAtlas(process.cwd(),{id:source,source,delivery:source,rows,columns});
  for(const index of indices){const f=a.layout.frames[index],bounds={left:f.left,top:f.top,width:f.width,height:f.height},output=dir+id+'-v'+version+'-i'+index+'-reference.png';await sharp(source).extract(bounds).png().toFile(output);records.push({source,output,bounds,transform:'exact rectangle; unchanged RGBA'});}
}
for(const [id,indices]of [['shimazu',[4,5,6,7]],['ukita',[5,6,13,14]],['hideyoshi',[7,13,14]],['wakizaka',[6]],['armored',[7]],['militia',[7]],['guard',[7]]]){
  const a=COMBAT_POSE_ART.enemy[id]??COMBAT_POSE_ART.ally[id];
  for(const index of indices){const f=a.frames[index],bounds={left:f.left,top:f.top,width:f.width,height:f.height},output=dir+id+'-approved-i'+index+'-reference.png';await sharp(a.path).extract(bounds).png().toFile(output);records.push({source:a.path,output,bounds,transform:'exact rectangle; unchanged RGBA'});}
}
{
  const source=dir+'hideyoshi-row-0-from-v1.png',a=await inspectPoseAtlas(process.cwd(),{id:source,source,delivery:source,rows:1,columns:4}),f=a.layout.frames[3],bounds={left:f.left,top:f.top,width:f.width,height:f.height},output=dir+'hideyoshi-v1-a4-reference.png';
  await sharp(source).extract(bounds).png().toFile(output);records.push({source,output,bounds,transform:'exact rectangle; unchanged RGBA'});
}
await fs.writeFile(dir+'reference-crops.json',JSON.stringify(records,null,2)+'\n');console.log(records.map(x=>x.output));
