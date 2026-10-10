// Inspect generated pixels without repainting them. --write records atlas metadata.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const require=createRequire(import.meta.url);
let sharp;try{sharp=require('sharp');}catch{sharp=require('C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');}
const root=fileURLToPath(new URL('../',import.meta.url));
const versions={yi:1,sejong:1,eulji:2,gang:1,gwon:1,gwak:1,ahn:1,dangun:1};
// Visual review: the midpoint of both boot soles in these wide attack poses.
const pivotOverrides={yi:{12:175,13:469,14:779},gang:{15:1088}};

function components(pixels,width,height) {
  const labels=new Int32Array(width*height),queue=new Int32Array(width*height),all=[];
  for(let start=0;start<labels.length;start++){
    if(labels[start]||pixels[start*4+3]<16)continue;
    const id=all.length+1;let head=0,tail=1,left=width,top=height,right=-1,bottom=-1,sumX=0,sumY=0;
    queue[0]=start;labels[start]=id;
    while(head<tail){
      const at=queue[head++],x=at%width,y=Math.floor(at/width);
      left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);sumX+=x;sumY+=y;
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
        const xx=x+dx,yy=y+dy;if(xx<0||xx>=width||yy<0||yy>=height)continue;
        const next=yy*width+xx;if(!labels[next]&&pixels[next*4+3]>=16){labels[next]=id;queue[tail++]=next;}
      }
    }
    all.push({id,count:tail,left,top,width:right-left+1,height:bottom-top+1,cx:sumX/tail,cy:sumY/tail});
  }
  return {labels,actors:all.filter(c=>c.count>2000)};
}

export async function inspectHero(id,version) {
  const name=`${id}-directions-v${version}`,relative=`assets/3d/fixed/${name}.webp`;
  const source=path.join(root,'assets/3d/fixed/source',name+'.png');
  const {data,info}=await sharp(source).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const {labels,actors}=components(data,info.width,info.height);
  if(actors.length!==16)throw new Error(`${id}: expected 16 separated actors, got ${actors.length}`);
  actors.sort((a,b)=>a.cy-b.cy);
  const sorted=[];for(let row=0;row<4;row++)sorted.push(...actors.slice(row*4,row*4+4).sort((a,b)=>a.cx-b.cx));
  const idleHeights=sorted.slice(0,4).map(c=>c.height).sort((a,b)=>a-b),referenceHeight=(idleHeights[1]+idleHeights[2])/2;
  const actorIds=new Set(actors.map(c=>c.id)),frames=[],foreignPixels=[];
  for(const [index,c]of sorted.entries()){
    let foreign=0,sum=0,weight=0;
    const footTop=c.top+c.height-Math.ceil(referenceHeight*.24);
    for(let y=c.top;y<c.top+c.height;y++)for(let x=c.left;x<c.left+c.width;x++){
      const p=y*info.width+x,a=data[p*4+3];
      if(a>=41&&labels[p]!==c.id&&actorIds.has(labels[p]))foreign++;
      if(y>=footTop&&a>=96&&labels[p]===c.id){sum+=x*a;weight+=a;}
    }
    if(foreign)throw new Error(`${id} frame ${index}: ${foreign} visible pixels from another actor`);
    const pivotX=pivotOverrides[id]?.[index]??(weight?sum/weight:c.cx);
    frames.push({left:c.left,top:c.top,width:c.width,height:c.height,anchor:+((pivotX-c.left)/c.width).toFixed(6),anchorY:1,referenceHeight});
    foreignPixels.push(foreign);
  }
  const coverage=new Uint8Array(info.width*info.height);
  for(const f of frames)for(let y=f.top;y<f.top+f.height;y++)for(let x=f.left;x<f.left+f.width;x++)coverage[y*info.width+x]++;
  let uncoveredVisiblePixels=0,duplicateVisiblePixels=0;
  for(let p=0;p<coverage.length;p++)if(data[p*4+3]>=41){if(!coverage[p])uncoveredVisiblePixels++;if(coverage[p]>1)duplicateVisiblePixels++;}
  if(uncoveredVisiblePixels||duplicateVisiblePixels)throw new Error(`${id}: omitted/duplicated visible pixels ${uncoveredVisiblePixels}/${duplicateVisiblePixels}`);
  const encoded=await sharp(path.join(root,relative)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  if(encoded.info.width!==info.width||encoded.info.height!==info.height)throw new Error(`${id}: delivery dimensions differ`);
  let alphaDifferences=0;for(let p=3;p<data.length;p+=4)if(data[p]!==encoded.data[p])alphaDifferences++;
  if(alphaDifferences)throw new Error(`${id}: delivery changed ${alphaDifferences} alpha pixels`);
  return {layout:{path:relative,width:info.width,height:info.height,frames},validation:{hero:id,source:`assets/3d/fixed/source/${name}.png`,delivery:relative,width:info.width,height:info.height,poses:16,foreignVisiblePixels:foreignPixels,uncoveredVisiblePixels,duplicateVisiblePixels,alphaDifferences,referenceHeight,pivotXOverrides:pivotOverrides[id]??{},bytes:(await fs.stat(path.join(root,relative))).size,frames}};
}

const layouts={},heroes=[];
for(const [id,version]of Object.entries(versions)){
  const result=await inspectHero(id,version);layouts[id]=result.layout;heroes.push(result.validation);
  console.log(`${id}: 16 poses, clean rectangles, ${result.validation.bytes} bytes`);
}
const report={date:'2026-10-10',generation:'built-in imagegen; original PNG preserved',analysis:'alpha >=16 connected components; visible foreign/omitted/duplicate actor pixels checked at alpha >=41; feet estimated from lower 24% alpha-weighted area, with four boot-midpoint X overrides after Astra xhigh visual review',heroes,totalPoses:heroes.reduce((n,h)=>n+h.poses,0),newPoses:112,totalDeliveryBytes:heroes.reduce((n,h)=>n+h.bytes,0)};
if(process.argv.includes('--write')){
  await fs.writeFile(path.join(root,'src/3d/hero-pose-data.js'),'// Generated by node tools/hero-pose-assets.mjs --write. Literal paths also support the standalone build.\nexport const HERO_POSE_ART = '+JSON.stringify(layouts,null,2)+';\n');
  await fs.writeFile(path.join(root,'docs/HERO_POSE_ASSET_VALIDATION.json'),JSON.stringify(report,null,2)+'\n');
}else{
  const {HERO_POSE_ART}=await import('../src/3d/hero-pose-data.js');
  if(JSON.stringify(HERO_POSE_ART)!==JSON.stringify(layouts))throw new Error('Stored pose metadata is stale; inspect changed artwork before --write');
}
console.log(`Validated ${report.totalPoses} poses; ${report.totalDeliveryBytes} delivery bytes.`);
