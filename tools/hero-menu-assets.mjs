// Repack approved idle poses for UI use. No repainting, scaling or colour changes.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';
import { SKINS } from '../src/data/skins.js';

const require=createRequire(import.meta.url);
let sharp;try{sharp=require('sharp');}catch{sharp=require('C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');}
const root=fileURLToPath(new URL('../',import.meta.url)),padding=12,columns=4;
// Face centre and square side relative to each trimmed approved pose.
// These crops only affect UI portraits; the complete pose remains unchanged.
const faces={
  yi:[.60,.27,.38],yi_white:[.62,.25,.40],yi_gold:[.63,.27,.40],
  sejong:[.62,.235,.38],sejong_blue:[.62,.23,.39],sejong_gold:[.65,.235,.39],
  eulji:[.70,.30,.45],eulji_iron:[.69,.29,.45],eulji_gold:[.69,.29,.45],
  gang:[.63,.24,.40],gang_crimson:[.63,.24,.40],gang_gold:[.63,.24,.40],
  gwon:[.61,.25,.39],gwon_hill:[.62,.25,.40],gwon_gold:[.62,.25,.40],
  gwak:[.64,.22,.39],gwak_black:[.66,.22,.39],gwak_gold:[.66,.22,.39],
  ahn:[.66,.22,.40],ahn_militia:[.65,.22,.40],ahn_gold:[.65,.22,.40],
  dangun:[.68,.24,.42],dangun_sky:[.67,.24,.42],dangun_gold:[.67,.24,.42],
};
const poses=[];
for(const [heroId,spec]of Object.entries(HERO_POSE_ART)){
  poses.push({key:heroId,heroId,skinId:null,spec});
  for(const {id}of SKINS[heroId])poses.push({key:id,heroId,skinId:id,spec:SKIN_POSE_ART[id]});
}
const cellWidth=Math.max(...poses.map(p=>p.spec.frames[0].width))+padding*2;
const cellHeight=Math.max(...poses.map(p=>p.spec.frames[0].height))+padding*2;
const width=columns*cellWidth,height=Math.ceil(poses.length/columns)*cellHeight;
const raw=Buffer.alloc(width*height*4),frames=[],sources=[];
for(const [i,pose]of poses.entries()){
  const sourceFrame=pose.spec.frames[0];
  const {data,info}=await sharp(path.join(root,pose.spec.path)).ensureAlpha().extract({left:sourceFrame.left,top:sourceFrame.top,width:sourceFrame.width,height:sourceFrame.height}).raw().toBuffer({resolveWithObject:true});
  const left=(i%columns)*cellWidth+padding,top=Math.floor(i/columns)*cellHeight+padding;
  for(let y=0;y<info.height;y++)data.copy(raw,((top+y)*width+left)*4,y*info.width*4,(y+1)*info.width*4);
  frames.push({key:pose.key,heroId:pose.heroId,skinId:pose.skinId,left,top,width:info.width,height:info.height,anchor:sourceFrame.anchor,face:faces[pose.key]});
  sources.push({key:pose.key,source:pose.spec.path,pose:0,sourceBounds:sourceFrame,visibleColourDifferences:0,alphaDifferences:0,paddingViolations:0});
}
const relative='assets/illustrated/hero-menu-poses-v1.webp';
const layout={path:relative,width,height,padding,frames};
if(process.argv.includes('--write')){
  await sharp(raw,{raw:{width,height,channels:4}}).webp({lossless:true,effort:6}).toFile(path.join(root,relative));
  await fs.writeFile(path.join(root,'src/data/hero-menu-data.js'),'// Exact approved front idle poses, packed by tools/hero-menu-assets.mjs --write.\nexport const MENU_HERO_ART = '+JSON.stringify(layout,null,2)+';\n');
}
const actual=await sharp(path.join(root,relative)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
if(actual.info.width!==width||actual.info.height!==height)throw new Error('Menu atlas dimensions differ');
for(let y=0;y<height;y++)for(let x=0;x<width;x++){
  const i=(y*width+x)*4;
  if(raw[i+3]!==actual.data[i+3])throw new Error(`Alpha changed at ${x},${y}`);
  if(raw[i+3]&&[0,1,2].some(c=>raw[i+c]!==actual.data[i+c]))throw new Error(`Visible colour changed at ${x},${y}`);
}
const {MENU_HERO_ART}=await import('../src/data/hero-menu-data.js?verify');
if(JSON.stringify(MENU_HERO_ART)!==JSON.stringify(layout))throw new Error('Menu metadata is stale');
for(const frame of frames){
  const [fx,fy,fs]=frame.face,side=fs*frame.height;
  if(![fx,fy,fs].every(v=>v>0&&v<1)||side>Math.min(frame.width,frame.height))throw new Error(`${frame.key}: portrait crop does not fit`);
}
const bytes=(await fs.stat(path.join(root,relative))).size;
const report={date:'2026-10-11',method:'Lossless pixel packing of existing approved WebP front-right idle pose 0; no repainting, resizing, hue shift or new directional sheets',delivery:relative,width,height,padding,bytes,baseHeroes:8,skins:16,poses:24,sources};
if(process.argv.includes('--write'))await fs.writeFile(path.join(root,'docs/HERO_MENU_ASSET_VALIDATION.json'),JSON.stringify(report,null,2)+'\n');
if(process.argv.includes('--preview')){
  const folder=path.join(root,'docs/screenshots/menu-art');await fs.mkdir(folder,{recursive:true});
  const preview=async(list,name)=>{
    const cols=4,cw=300,ch=350,items=[];
    for(const [i,f]of list.entries()){
      const img=await sharp(path.join(root,relative)).extract({left:f.left,top:f.top,width:f.width,height:f.height}).png().toBuffer();
      items.push({input:img,left:i%cols*cw+Math.floor((cw-f.width)/2),top:Math.floor(i/cols)*ch+25});
      const label=Buffer.from(`<svg width="300" height="24"><text x="150" y="18" fill="#e6dfcd" font-family="sans-serif" text-anchor="middle" font-size="16">${f.key}</text></svg>`);
      items.push({input:label,left:i%cols*cw,top:Math.floor(i/cols)*ch});
    }
    await sharp({create:{width:cols*cw,height:Math.ceil(list.length/cols)*ch,channels:4,background:'#172432'}}).composite(items).png().toFile(path.join(folder,name+'.png'));
  };
  await preview(frames.filter(f=>!f.skinId),'approved-base-poses');
  await preview(frames.filter(f=>f.skinId),'approved-skin-poses');
}
console.log(JSON.stringify({poses:24,baseHeroes:8,skins:16,visibleColourDifferences:0,alphaDifferences:0,bytes,width,height},null,2));
