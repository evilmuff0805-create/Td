// Roof labels use CSS pixels, independent of world scale and camera rotation.
export function layoutTowerLabels(entries,width,height,insets={}) {
  const placed=[],result=new Map(),gap=6,left=insets.left??6,right=width-(insets.right??6),top=insets.top??6,bottom=height-(insets.bottom??6);
  const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
  const overlap=(a,b)=>a.left<b.right+gap&&a.right+gap>b.left&&a.top<b.bottom+gap&&a.bottom+gap>b.top;
  // Keep the selected building at its anchor; move neighbouring labels instead.
  const ordered=[...entries].sort((a,b)=>Number(!!b.selected)-Number(!!a.selected)||a.id-b.id);
  for(const e of ordered) {
    const w=Math.min(e.width,right-left),h=e.height;
    if(w<=0||h>bottom-top){result.set(e.id,null);continue;}
    const candidates=[],add=(x,y)=>{
      x=clamp(x,left+w/2,right-w/2);y=clamp(y,top+h,bottom);
      candidates.push({x,y,left:x-w/2,right:x+w/2,top:y-h,bottom:y,score:(x-e.x)**2+(y-e.y)**2});
    };
    // Prefer short leaders around the actual roof before considering other rows.
    for(let row=-3;row<=3;row++)for(let col=-2;col<=2;col++)add(e.x+col*(w+gap),e.y+row*(h+gap));
    candidates.sort((a,b)=>a.score-b.score);
    let at=candidates.find(c=>!placed.some(p=>overlap(c,p)));
    if(!at) {
      for(let y=top+h;y<=bottom;y+=h+gap)for(let x=left+w/2;x<=right-w/2;x+=w+gap)add(x,y);
      candidates.sort((a,b)=>a.score-b.score);at=candidates.find(c=>!placed.some(p=>overlap(c,p)));
    }
    result.set(e.id,at??null);if(at)placed.push(at);
  }
  return result;
}
