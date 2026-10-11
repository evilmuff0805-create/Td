// Include the enlarged button, shortcut and price chip in every occupied cell.
export function commandRingLayout({x,y,width,height,scale=1,angles=[],above=false}) {
  const button=angles.length>8?46:52,gap=6,cellW=Math.ceil(button*1.14+12),cellH=Math.ceil(button*1.14+26),margin=6;
  const radians=angles.map(a=>a*Math.PI/180);
  let radius=Math.max(54,Math.min(74,58*scale));
  for(let i=0;i<radians.length;i++)for(let j=i+1;j<radians.length;j++){
    const dx=Math.abs(Math.cos(radians[i])-Math.cos(radians[j])),dy=Math.abs(Math.sin(radians[i])-Math.sin(radians[j]));
    radius=Math.max(radius,Math.min(dx>1e-6?(cellW+gap)/dx:Infinity,dy>1e-6?(cellH+gap)/dy:Infinity));
  }
  radius=Math.ceil(radius);
  const reserve=Math.min(128,Math.max(0,height*.45)),top=margin+(above?reserve:0),bottom=height-margin-(above?0:reserve);
  let points=radians.map(a=>({x:Math.cos(a)*radius,y:Math.sin(a)*radius}));
  const extents=pts=>({left:Math.min(0,...pts.map(p=>p.x-cellW/2)),right:Math.max(0,...pts.map(p=>p.x+cellW/2)),top:Math.min(0,...pts.map(p=>p.y-cellH/2)),bottom:Math.max(0,...pts.map(p=>p.y+cellH/2))});
  let bounds=extents(points),grid=false,scroll=false,panelWidth=0,panelHeight=0;
  if(!Number.isFinite(radius)||bounds.right-bounds.left>width-margin*2||bounds.bottom-bounds.top>bottom-top){
    grid=true;
    const cols=Math.max(1,Math.min(angles.length||1,Math.floor((width-margin*2+gap)/(cellW+gap))));
    const rows=Math.ceil(angles.length/cols),contentHeight=rows*(cellH+gap)-gap;
    panelWidth=cols*(cellW+gap)-gap;panelHeight=Math.max(cellH,Math.min(contentHeight,bottom-top));scroll=contentHeight>panelHeight;
    points=angles.map((_,i)=>({x:(i%cols)*(cellW+gap)+cellW/2,y:Math.floor(i/cols)*(cellH+gap)+cellH/2}));
    bounds={left:-panelWidth/2,right:panelWidth/2,top:-panelHeight/2,bottom:panelHeight/2};
  }
  const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
  const cx=clamp(x,margin-bounds.left,width-margin-bounds.right),cy=clamp(y,top-bounds.top,bottom-bounds.bottom);
  return {button,radius,points,bounds,cx,cy,grid,scroll,panelWidth,panelHeight,cellW,cellH};
}
