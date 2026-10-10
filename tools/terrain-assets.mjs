import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {sharp} from './sprite-pose-inspector.mjs';
sharp.concurrency(2);
const root=fileURLToPath(new URL('../',import.meta.url)),ids=['ground-v4','snow-ground-v3','road-v3'];
const stats=[];
for(const id of ids){
  const base=path.join(root,'assets/3d/painted'),prompt=JSON.parse(await fs.readFile(path.join(base,id+'.prompt.json'),'utf8'));
  const source=path.join(base,'source',id+'.png'),delivery=path.join(base,id+'.webp');
  if(process.argv.includes('--record')){
    await fs.copyFile(prompt.generatedFile,source);
    await sharp(source).resize(512,512).webp({quality:91,alphaQuality:100,effort:6}).toFile(delivery);
  }
  const original=await fs.readFile(source),webp=await fs.readFile(delivery),metadata=await sharp(original).metadata();
  const {data,info}=await sharp(webp).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  if(info.width!==512||info.height!==512||webp.length>=130000)throw Error(id+' exceeds terrain texture budget');
  let sum=0,sum2=0,alphaErrors=0;
  for(let i=0;i<data.length;i+=4){const y=data[i]*.2126+data[i+1]*.7152+data[i+2]*.0722;sum+=y;sum2+=y*y;alphaErrors+=data[i+3]!==255;}
  if(alphaErrors)throw Error(id+' must be opaque');
  const pixels=info.width*info.height,mean=sum/pixels;
  stats.push({id,source:'assets/3d/painted/source/'+id+'.png',delivery:'assets/3d/painted/'+id+'.webp',sourceWidth:metadata.width,sourceHeight:metadata.height,deliveryWidth:info.width,deliveryHeight:info.height,bytes:webp.length,opaque:true,lumaMean:+mean.toFixed(3),lumaStdDev:+Math.sqrt(sum2/pixels-mean*mean).toFixed(3)});
}
const result={date:'2026-10-11',generation:'built-in imagegen; original PNG and full prompts preserved',processing:'Sharp resize to 512 and WebP compression only; no repainting or seam retouch',wrapping:'MirroredRepeatWrapping at runtime for terrain albedo and relief',textures:stats,totalDeliveryBytes:stats.reduce((s,a)=>s+a.bytes,0)};
if(process.argv.includes('--record'))await fs.writeFile(path.join(root,'docs/TERRAIN_ASSET_VALIDATION.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
