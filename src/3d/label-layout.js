// Building markers use CSS pixels, independent of world scale and camera rotation.
export function layoutTowerLabels(entries,width,height,insets={}) {
  const placed=[],result=new Map(),gap=6,left=insets.left??6,right=width-(insets.right??6),top=insets.top??6,bottom=height-(insets.bottom??6);
  const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
  const overlap=(a,b)=>a.left<b.right+gap&&a.right+gap>b.left&&a.top<b.bottom+gap&&a.bottom+gap>b.top;
  // Keep the pointer target fixed while details grow, then keyboard focus and
  // selection. Move neighbouring labels instead of moving a button from under a cursor.
  const priority=e=>e.priority??Number(!!e.selected);
  const ordered=[...entries].sort((a,b)=>priority(b)-priority(a)||a.id-b.id);
  for(const e of ordered) {
    const w=Math.min(e.width,right-left),h=e.height,minTop=Math.max(top,e.minTop??top);
    if(w<=0||h>bottom-minTop){result.set(e.id,null);continue;}
    const candidates=[],add=(x,y)=>{
      x=clamp(x,left+w/2,right-w/2);y=clamp(y,minTop+h,bottom);
      candidates.push({x,y,left:x-w/2,right:x+w/2,top:y-h,bottom:y,score:(x-e.x)**2+(y-e.y)**2});
    };
    // Compact dots remain below their own building, including crowded rows.
    for(let row=-3;row<=3;row++)for(let col=-2;col<=2;col++)add(e.x+col*(w+gap),e.y+row*(h+gap));
    candidates.sort((a,b)=>a.score-b.score);
    let at=candidates.find(c=>!placed.some(p=>overlap(c,p)));
    if(!at) {
      for(let y=minTop+h;y<=bottom;y+=h+gap)for(let x=left+w/2;x<=right-w/2;x+=w+gap)add(x,y);
      candidates.sort((a,b)=>a.score-b.score);at=candidates.find(c=>!placed.some(p=>overlap(c,p)));
    }
    result.set(e.id,at??null);if(at)placed.push(at);
  }
  return result;
}
