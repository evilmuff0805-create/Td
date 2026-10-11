// Mechanical row crops retain every original RGBA pixel. No masking/repainting.
import fs from 'node:fs/promises';
import {sharp,inspectPoseAtlas} from './sprite-pose-inspector.mjs';
const directory='assets/3d/fixed/combat-inbetweens/source/',records=[];
for(const id of ['cavalry','militia','hideyoshi']){
  const file=directory+id+'-inbetweens-v1.png',{data,info}=await sharp(file).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const labels=new Int32Array(info.width*info.height),queue=new Int32Array(labels.length),all=[];
  for(let start=0;start<labels.length;start++){
    if(labels[start]||data[start*4+3]<16)continue;
    const label=all.length+1;let head=0,tail=1,left=info.width,top=info.height,right=-1,bottom=-1,sy=0,sx=0;
    labels[start]=label;queue[0]=start;
    while(head<tail){const p=queue[head++],x=p%info.width,y=Math.floor(p/info.width);left=Math.min(left,x);top=Math.min(top,y);right=Math.max(right,x);bottom=Math.max(bottom,y);sx+=x;sy+=y;
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const xx=x+dx,yy=y+dy;if(xx<0||xx>=info.width||yy<0||yy>=info.height)continue;const n=yy*info.width+xx;if(!labels[n]&&data[n*4+3]>=16){labels[n]=label;queue[tail++]=n;}}
    }
    all.push({label,count:tail,left,top,width:right-left+1,height:bottom-top+1,cx:sx/tail,cy:sy/tail});
  }
  const actors=all.filter(x=>x.count>2000).sort((a,b)=>a.cy-b.cy),sorted=[];
  const expected=id==='hideyoshi'?15:16;
  if(actors.length!==expected)throw new Error(id+': expected '+expected+' original connected actors, got '+actors.length);
  for(let row=0;row<4;row++)sorted.push(...actors.slice(row*4,row*4+4).sort((a,b)=>a.cx-b.cx));
  const actorLabels=new Set(actors.map(x=>x.label));
  for(const row of id==='hideyoshi'?[0]:[0,1,3]){
    const frames=sorted.slice(row*4,row*4+4),pieces=[];let width=16;const height=Math.max(...frames.map(f=>f.height))+32;
    for(const f of frames){
      let foreign=0;for(let y=f.top;y<f.top+f.height;y++)for(let x=f.left;x<f.left+f.width;x++){const p=y*info.width+x;if(data[p*4+3]>=41&&labels[p]!==f.label&&actorLabels.has(labels[p]))foreign++;}
      if(foreign)throw new Error(id+' row '+row+': selected crop contains '+foreign+' foreign pixels');
      const bounds={left:f.left,top:f.top,width:f.width,height:f.height};pieces.push({input:await sharp(file).extract(bounds).png().toBuffer(),left:width,top:16});width+=f.width+32;
    }
    const output=directory+id+'-row-'+row+'-from-v1.png';await sharp({create:{width,height,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).composite(pieces).png().toFile(output);
    await inspectPoseAtlas(process.cwd(),{id:output,source:output,delivery:output,rows:1,columns:4});records.push({source:file,output,bounds:frames.map(({left,top,width,height})=>({left,top,width,height})),transform:'four exact rectangular crops, translation only; original visible RGBA unchanged, no masking'});
  }
}
await fs.writeFile(directory+'row-crops.json',JSON.stringify(records,null,2)+'\n');console.log(records);
