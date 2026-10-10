import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {sharp} from './sprite-pose-inspector.mjs';
const root=new URL('../',import.meta.url),source='assets/3d/painted/source/water-v1.png',delivery='assets/3d/painted/water-v1.webp';
const prompt=JSON.parse(await fs.readFile(new URL('assets/3d/painted/water-v1.prompt.json',root),'utf8'));
if(process.argv.includes('--prepare')){
  await fs.copyFile(prompt.generatedFile,new URL(source,root));
  await sharp(fileURLToPath(new URL(source,root))).resize(512,512).webp({quality:91,alphaQuality:100,effort:6}).toFile(fileURLToPath(new URL(delivery,root)));
}
const original=await fs.readFile(new URL(source,root)),webp=await fs.readFile(new URL(delivery,root)),metadata=await sharp(original).metadata();
const {data,info}=await sharp(webp).ensureAlpha().raw().toBuffer({resolveWithObject:true});
assert.equal(info.width,512);assert.equal(info.height,512);assert.ok(webp.length<130000);
let sum=0,sum2=0,alphaErrors=0;
for(let i=0;i<data.length;i+=4){const l=data[i]*.2126+data[i+1]*.7152+data[i+2]*.0722;sum+=l;sum2+=l*l;alphaErrors+=data[i+3]!==255;}
assert.equal(alphaErrors,0);const pixels=info.width*info.height,mean=sum/pixels,std=Math.sqrt(sum2/pixels-mean*mean);
assert.ok(std<mean*.18,'Water albedo should remain quiet behind the combat.');
const report={date:'2026-10-11',generation:'built-in imagegen; original PNG and full prompt preserved',processing:prompt.processing,source,delivery,sourceWidth:metadata.width,sourceHeight:metadata.height,deliveryWidth:512,deliveryHeight:512,bytes:webp.length,opaque:true,lumaMean:+mean.toFixed(3),lumaStdDev:+std.toFixed(3),wrapping:'MirroredRepeatWrapping at runtime'};
if(process.argv.includes('--record'))await fs.writeFile(new URL('docs/WATER_ASSET_VALIDATION.json',root),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
