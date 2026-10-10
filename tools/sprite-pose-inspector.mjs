// Pixel analysis only. Generated artwork and alpha are never repainted here.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
export let sharp;try{sharp=require('sharp');}catch{sharp=require('C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');}

function components(pixels,width,height){
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

export async function inspectPoseAtlas(root,{id,source,delivery,pivotXOverrides={},columns=4,rows=4}){
  const {data,info}=await sharp(path.join(root,source)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  let outerBorderVisiblePixels=0;
  for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++)if((x===0||y===0||x===info.width-1||y===info.height-1)&&data[(y*info.width+x)*4+3]>=41)outerBorderVisiblePixels++;
  if(outerBorderVisiblePixels)throw new Error(`${id}: ${outerBorderVisiblePixels} visible pixels touch the sheet edge; artwork may be clipped`);
  const {labels,actors}=components(data,info.width,info.height);
  const expected=columns*rows;
  if(actors.length!==expected)throw new Error(`${id}: expected ${expected} separated actors, got ${actors.length}`);
  actors.sort((a,b)=>a.cy-b.cy);
  const sorted=[];for(let row=0;row<rows;row++)sorted.push(...actors.slice(row*columns,row*columns+columns).sort((a,b)=>a.cx-b.cx));
  const idleHeights=sorted.slice(0,columns).map(c=>c.height).sort((a,b)=>a-b),middle=(idleHeights.length-1)/2,referenceHeight=(idleHeights[Math.floor(middle)]+idleHeights[Math.ceil(middle)])/2;
  const actorIds=new Set(actors.map(c=>c.id)),frames=[],foreignVisiblePixels=[];
  for(const [index,c]of sorted.entries()){
    let foreign=0,sum=0,weight=0;
    const footTop=c.top+c.height-Math.ceil(referenceHeight*.24);
    for(let y=c.top;y<c.top+c.height;y++)for(let x=c.left;x<c.left+c.width;x++){
      const p=y*info.width+x,a=data[p*4+3];
      if(a>=41&&labels[p]!==c.id&&actorIds.has(labels[p]))foreign++;
      if(y>=footTop&&a>=96&&labels[p]===c.id){sum+=x*a;weight+=a;}
    }
    if(foreign)throw new Error(`${id} frame ${index}: ${foreign} visible pixels from another actor`);
    const pivotX=pivotXOverrides[index]??(weight?sum/weight:c.cx);
    frames.push({left:c.left,top:c.top,width:c.width,height:c.height,anchor:+((pivotX-c.left)/c.width).toFixed(6),anchorY:1,referenceHeight});
    foreignVisiblePixels.push(foreign);
  }
  const coverage=new Uint8Array(info.width*info.height);
  for(const f of frames)for(let y=f.top;y<f.top+f.height;y++)for(let x=f.left;x<f.left+f.width;x++)coverage[y*info.width+x]++;
  let uncoveredVisiblePixels=0,duplicateVisiblePixels=0;
  for(let p=0;p<coverage.length;p++)if(data[p*4+3]>=41){if(!coverage[p])uncoveredVisiblePixels++;if(coverage[p]>1)duplicateVisiblePixels++;}
  if(uncoveredVisiblePixels||duplicateVisiblePixels)throw new Error(`${id}: omitted/duplicated visible pixels ${uncoveredVisiblePixels}/${duplicateVisiblePixels}`);
  const encoded=await sharp(path.join(root,delivery)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  if(encoded.info.width!==info.width||encoded.info.height!==info.height)throw new Error(`${id}: delivery dimensions differ`);
  let alphaDifferences=0;for(let p=3;p<data.length;p+=4)if(data[p]!==encoded.data[p])alphaDifferences++;
  if(alphaDifferences)throw new Error(`${id}: delivery changed ${alphaDifferences} alpha pixels`);
  return {layout:{path:delivery,width:info.width,height:info.height,frames},validation:{id,source,delivery,width:info.width,height:info.height,poses:expected,outerBorderVisiblePixels,foreignVisiblePixels,uncoveredVisiblePixels,duplicateVisiblePixels,alphaDifferences,referenceHeight,pivotXOverrides,bytes:(await fs.stat(path.join(root,delivery))).size,frames}};
}
