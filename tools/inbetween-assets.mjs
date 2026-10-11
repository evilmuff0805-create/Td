// Generated source pixels are only cropped, uniformly resized and packed.
// No anatomy, palette or alpha cutout is repaired here. Reject bad source art.
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { inspectPoseAtlas,sharp } from './sprite-pose-inspector.mjs';
import { HERO_POSE_ART } from '../src/3d/hero-pose-data.js';
import { SKIN_POSE_ART } from '../src/3d/skin-pose-data.js';

const root=fileURLToPath(new URL('../',import.meta.url)),folder='assets/3d/fixed/inbetweens';
const specs=JSON.parse(await fs.readFile(new URL('./inbetween-specs.json',import.meta.url),'utf8'));
const write=process.argv.includes('--write'),preview=process.argv.includes('--preview');
const cache=new Map(),layouts={},reports=[];
const roles=['pass-a','pass-b','follow-through','recover'];
async function sourceAtlas(part){
  const relative=folder+'/source/'+part.source;
  if(!cache.has(relative))cache.set(relative,inspectPoseAtlas(root,{id:part.source,source:relative,delivery:relative,rows:part.rows,columns:part.columns??4}));
  return cache.get(relative);
}
for(const [id,spec]of Object.entries(specs)){
  const approved=spec.skin?SKIN_POSE_ART[spec.skin]:HERO_POSE_ART[spec.heroId];
  assert.ok(approved&&(!spec.skin||spec.skin.startsWith(spec.heroId+'_')),id+' must match an approved look');
  const referenceHeight=approved.frames[0].referenceHeight,images=[],origins=[];
  assert.equal(spec.parts.length,4);
  for(const [row,part]of spec.parts.entries()){
    assert.equal(part.indices.length,4);assert.equal(part.anchors.length,4);
    for(const [col,defaultIndex]of part.indices.entries()){
      const cell={...part,...part.overrides?.[col]},index=cell.index??defaultIndex;
      const inspected=await sourceAtlas(cell);
      const f=inspected.layout.frames[index];assert.ok(f);
      const width=Math.max(1,Math.round(f.width*cell.scale)),height=Math.max(1,Math.round(f.height*cell.scale));
      const data=await sharp(path.join(root,folder,'source',cell.source)).extract({left:f.left,top:f.top,width:f.width,height:f.height}).resize(width,height,{fit:'fill',kernel:'lanczos3'}).ensureAlpha().raw().toBuffer();
      images.push({data,width,height});origins.push({source:folder+'/source/'+cell.source,sourceFrame:index,sourceBounds:f,scale:cell.scale,row:roles[row],col,anchor:part.anchors[col],anchorY:part.anchorY?.[col]??1});
    }
  }
  const pad=24,columnWidths=Array.from({length:4},(_,col)=>Math.max(...images.filter((_,i)=>i%4===col).map(x=>x.width))+pad*2);
  const rowHeights=Array.from({length:4},(_,row)=>Math.max(...images.slice(row*4,row*4+4).map(x=>x.height))+pad*2);
  const width=columnWidths.reduce((a,b)=>a+b),height=rowHeights.reduce((a,b)=>a+b),frames=[],pieces=[];
  for(const [index,img]of images.entries()){
    const col=index%4,row=Math.floor(index/4),left=columnWidths.slice(0,col).reduce((a,b)=>a+b,0)+pad,top=rowHeights.slice(0,row).reduce((a,b)=>a+b,0)+pad;
    pieces.push({input:img.data,raw:{width:img.width,height:img.height,channels:4},left,top});
    frames.push({left,top,width:img.width,height:img.height,anchor:origins[index].anchor,anchorY:origins[index].anchorY,referenceHeight});
  }
  const source=folder+'/source/'+id+'-inbetweens-packed-v1.png',delivery=folder+'/'+id+'-inbetweens-v1.webp';
  const packed=await sharp({create:{width,height,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).composite(pieces).png().toBuffer();
  const webp=await sharp(packed).webp({lossless:true,effort:6}).toBuffer();
  const rgba=await sharp(packed).ensureAlpha().raw().toBuffer(),encoded=await sharp(webp).ensureAlpha().raw().toBuffer();
  let visibleColorDifferences=0;
  for(let p=0;p<rgba.length;p+=4)if(rgba[p+3]>0)for(let c=0;c<3;c++)if(rgba[p+c]!==encoded[p+c])visibleColorDifferences++;
  assert.equal(visibleColorDifferences,0,id+' lossless delivery changed visible RGB');
  if(write){await fs.writeFile(path.join(root,source),packed);await fs.writeFile(path.join(root,delivery),webp);}
  else{
    assert.deepEqual(await fs.readFile(path.join(root,source)),packed,id+' packed source is stale');
    assert.deepEqual(await fs.readFile(path.join(root,delivery)),webp,id+' delivery is stale');
  }
  const checked=await inspectPoseAtlas(root,{id,source,delivery});
  for(const f of frames){assert.ok(f.left>=pad&&f.top>=pad&&f.anchor>0&&f.anchor<1);}
  layouts[id]={heroId:spec.heroId,skin:spec.skin??null,path:delivery,width,height,roles,frames};
  reports.push({...checked.validation,visibleColorDifferences,frames,origins,referenceHeight,explicitAnchors:true,padding:pad,encoding:'lossless WebP; alpha and visible RGB identical to mechanically packed PNG',originalLook:approved.path});
  if(preview){
    const out=path.join(root,'docs/screenshots/inbetweens');await fs.mkdir(out,{recursive:true});
    for(const mode of ['walk','attack']){
      const cells=[],cellWidth=230,cellHeight=238,base=await sharp(path.join(root,approved.path)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
      for(let phase=0;phase<4;phase++)for(let col=0;col<4;col++){
        const supplement=mode==='walk'?phase===1||phase===3:phase===1||phase===2;
        const index=mode==='walk'?(phase===1?col:4+col):(phase===1?8+col:12+col);
        const oldRow=mode==='walk'?(phase===0?1:2):(phase===0?3:0);
        const f=supplement?frames[index]:approved.frames[oldRow*4+col],sourcePixels=supplement?packed:base.data;
        const pipe=supplement?sharp(sourcePixels):sharp(sourcePixels,{raw:base.info});
        const factor=180/f.referenceHeight,w=Math.round(f.width*factor),h=Math.round(f.height*factor);
        const input=await pipe.extract({left:f.left,top:f.top,width:f.width,height:f.height}).resize(w,h).png().toBuffer();
        cells.push({input,left:Math.round(col*cellWidth+cellWidth/2-w*f.anchor),top:Math.round(phase*cellHeight+cellHeight-26-h*(f.anchorY??1))});
      }
      await sharp({create:{width:cellWidth*4,height:cellHeight*4,channels:4,background:'#102033'}}).composite(cells).png().toFile(path.join(out,id+'-'+mode+'-contact.png'));
    }
  }
  console.log(`${id}: 16 new poses, ${width}x${height}, ${webp.length} bytes, no foreign/missing/duplicate/edge/alpha pixels`);
}
const report={date:'2026-10-11',generation:'built-in imagegen; per-source prompts preserved beside original PNG',scope:'supplements for base heroes and special costumes; approved original 832 poses remain unchanged',packing:'exact crops, explicit uniform part resizing, 24px transparent cell padding; explicit per-frame root anchors, original look referenceHeight',baseLooks:reports.filter(x=>!specs[x.id]?.skin).length,costumeLooks:reports.filter(x=>specs[x.id]?.skin).length,totalPoses:reports.length*16,totalDeliveryBytes:reports.reduce((n,x)=>n+x.bytes,0),looks:reports};
if(write){
  await fs.writeFile(path.join(root,'src/3d/inbetween-data.js'),'// Generated by node tools/inbetween-assets.mjs --write. Literal paths support standalone embedding.\nexport const HERO_INBETWEEN_ART = '+JSON.stringify(layouts,null,2)+';\n');
  await fs.writeFile(path.join(root,'docs/INBETWEEN_ASSET_VALIDATION.json'),JSON.stringify(report,null,2)+'\n');
}else{
  const {HERO_INBETWEEN_ART}=await import('../src/3d/inbetween-data.js');assert.deepEqual(HERO_INBETWEEN_ART,layouts);
}
console.log(`Validated ${report.totalPoses} in-between poses.`);
