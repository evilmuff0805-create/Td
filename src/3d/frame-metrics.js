// Render diagnostics only; never feeds simulation time or chooses game quality.
export class FrameMetrics {
  constructor(){this.reset();}
  reset(){this.last=null;this.began=null;this.samples=[];}
  add(now,active=true){
    if(!active||!Number.isFinite(now)){this.reset();return null;}
    if(this.last===null){this.last=this.began=now;return null;}
    const elapsed=now-this.last;this.last=now;
    if(elapsed<=0){this.reset();return null;}
    this.samples.push(elapsed);
    if(now-this.began<1000)return null;
    const sorted=this.samples.slice().sort((a,b)=>a-b),at=p=>sorted[Math.max(0,Math.ceil(p*sorted.length)-1)];
    const result={fps:Math.round(this.samples.length*1000/(now-this.began)),frameP50:at(.5).toFixed(1),frameP95:at(.95).toFixed(1),frameWorst:at(1).toFixed(1),frameSamples:this.samples.length};
    this.began=now;this.samples=[];return result;
  }
}
