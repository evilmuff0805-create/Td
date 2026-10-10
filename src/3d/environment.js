import * as T from 'three';
import { getMap,T_PATH,T_WATER } from '../sim/map.js';
import { makeRng } from '../sim/rng.js';
import { stageSeed } from './seasons.js';
import { surfaceNoise as noise } from './surfaces.js';
import { foliageCluster } from './vegetation.js';
import { paintSurface,albedoPlaceholder } from './painted-surfaces.js';
import { MAT,material,mesh,box,ball,cylinder,cone,between,bakeStatic,hanok,pine,rock,fence,supplies,gate,wallSegment } from './models.js';

const surfaces=new Map();
function surface(theme,road=false) {
  const key=theme.id+(road?'-road':'-land');if(surfaces.has(key))return surfaces.get(key);
  const size=256,data=new Uint8Array(size*size*4),relief=new Uint8Array(data.length),base=new T.Color(road?theme.road:theme.ground),rng=makeRng(road?701:211);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++) {
    const u=x/size,v=y/size,broad=noise(u*5,v*5),fine=noise(u*48,v*48),grain=rng();
    const yy=y+noise(u*9,v*7)*7,row=Math.floor(yy/28),xx=x+row*17+noise(u*9,v*7)*8;
    const seam=road&&(xx%37<1.6||yy%28<1.5),grit=grain>.975?.08:0;
    const n=road?(broad-.5)*.07+(fine-.5)*.035+(grain-.5)*.018-(seam?.075:0)-grit
      :(broad-.5)*.105+(fine-.5)*.035+(grain-.5)*.018;
    const channels=[base.r,base.g,base.b],i=(y*size+x)*4;
    for(let c=0;c<3;c++)data[i+c]=Math.round(T.MathUtils.clamp(channels[c]+n+(road?0:(c===1?.012:-.008)*broad),0,1)*255);data[i+3]=255;
    const h=Math.round((seam?.25:.48+fine*.09+grit)*255);relief.set([h,h,h,255],i);
  }
  const kind=road?'road':theme.snow?'snow-ground':'ground',image=albedoPlaceholder(data,size,kind);
  const tex=new T.DataTexture(image.data,image.width,image.height);tex.colorSpace=T.LinearSRGBColorSpace;tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.magFilter=T.LinearFilter;tex.minFilter=T.LinearMipmapLinearFilter;tex.generateMipmaps=true;tex.anisotropy=4;tex.needsUpdate=true;
  const bump=new T.DataTexture(relief,size,size);bump.wrapS=bump.wrapT=T.RepeatWrapping;bump.magFilter=T.LinearFilter;bump.minFilter=T.LinearMipmapLinearFilter;bump.generateMipmaps=true;bump.needsUpdate=true;
  paintSurface(tex,kind,base);
  const mat=new T.MeshStandardMaterial({map:tex,roughness:theme.snow?.87:.96,bumpMap:bump,bumpScale:road&&!theme.snow?.009:0,vertexColors:true});surfaces.set(key,mat);return mat;
}

// Snow is removable geometry. Seasonal changes never recolor shared model materials globally.
export function seasonalize(root,theme) {
  if(theme.snow)return root;
  const remove=[];
  root.traverse(o=>{if(!o.isMesh)return;
    if(o.material===MAT.snow||o.material===MAT.roofSnow||o.material===MAT.ice)remove.push(o);
    else if(o.material===MAT.pine)o.material=material('#41684a');
    else if(o.material===MAT.pineDark)o.material=material('#2e513c');
  });
  for(const o of remove){o.removeFromParent();if(o.geometry.userData.owned3d)o.geometry.dispose();}
  root.userData.season=theme.id;return root;
}

export function broadleaf(theme,height=2.8,seed=1) {
  const root=new T.Group(),rng=makeRng(Math.floor(seed*997)+1);
  const trunk=mesh(root,new T.CylinderGeometry(.025,.085,height*.71,9),MAT.woodDark,0,height*.355,0);trunk.rotation.z=.04*Math.sin(seed);
  const colors=theme.leaf.map(c=>material(c,{roughness:.96,vertexColors:true}));
  for(let j=0;j<4;j++){const a=j*Math.PI/2+seed;between(root,MAT.woodDark,[0,.18,0],[Math.cos(a)*.18,.025,Math.sin(a)*.18],.026);}
  for(let i=0;i<8;i++) {
    const a=i*2.399+seed,r=.42+rng()*.3,y=height*(.53+rng()*.22),x=Math.cos(a)*r,z=Math.sin(a)*r;
    between(root,MAT.woodDark,[0,height*.38,0],[x*.55,y-.17,z*.55],.029);
    between(root,MAT.woodDark,[x*.55,y-.17,z*.55],[x*1.15,y+.05,z*1.15],.017);
    for(let j=0;j<3;j++) {
      const xx=x+(rng()-.5)*.46,zz=z+(rng()-.5)*.46,yy=y+(rng()-.2)*.32;
      const crown=mesh(root,foliageCluster(seed+i*3+j),colors[(i+j)%3],xx,yy,zz,.34+rng()*.15,.25+rng()*.14,.35+rng()*.13);crown.rotation.y=rng()*6;
      // Thin branch tips and offset leaf sprays break the round crown silhouette.
      if(j===1)for(let k=0;k<3;k++) {
        const a=aSeed(seed+i+k),spray=mesh(root,foliageCluster(seed+i+k+17),colors[(i+k)%3],xx+Math.cos(a)*.24,yy-.04+k*.07,zz+Math.sin(a)*.24,.23,.12,.25);
        spray.rotation.z=(rng()-.5)*.5;
      }
    }
  }
  return root;
}
const aSeed=n=>n*2.399;

export function terrainPlan(stage) {
  const map=getMap(stage.id),land=[],water=[],bridges=[];
  for(let y=0;y<map.h;y++)for(let x=0;x<map.w;x++) {
    const tile=map.grid[y*map.w+x],bridge=tile===T_PATH&&stage.grid[y][x]==='W';
    if(tile===T_WATER||bridge)water.push([x,y]);else land.push([x,y]);
    if(bridge)bridges.push([x,y]);
  }
  return {map,land,water,bridges};
}
// The same world coordinates drive adjoining tiles and road corners, avoiding seams.
export function worldSurface(geo,x=0,z=0,scale=2) {
  const p=geo.attributes.position,uv=geo.attributes.uv,colors=[];
  for(let i=0;i<p.count;i++) {
    const xx=p.getX(i)+x,zz=p.getZ(i)+z;
    uv.setXY(i,xx/scale,zz/scale);
    const shade=1;
    colors.push(shade,shade,shade);
  }
  geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));return geo;
}
export function tileSurface(tiles,y,outside=false,scale=3.2) {
  const p=[],uv=[],indices=[];
  const height=(x,z)=>outside?-.014-.008*Math.hypot(Math.max(0,-x,x-24),Math.max(0,-z,z-14))+.005*Math.sin(x*.7+z*.5):y;
  for(const [x,z,step=1] of tiles){const n=p.length/3;p.push(x,height(x,z),z,x,height(x,z+step),z+step,x+step,height(x+step,z+step),z+step,x+step,height(x+step,z),z);uv.push(0,0,0,0,0,0,0,0);indices.push(n,n+1,n+2,n+2,n+3,n);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setIndex(indices);worldSurface(g,0,0,scale);g.computeVertexNormals();g.userData.owned3d=true;return g;
}

// Continue each boundary's land or water beyond the board; gameplay cells stay untouched.
export function surroundingsPlan(plan) {
  const land=[],water=[],wet=new Set(plan.water.map(([x,z])=>`${x},${z}`)),{w,h}=plan.map;
  const step=.5;
  for(let z=-5;z<h+5;z+=step)for(let x=-5;x<w+5;x+=step) {
    if(x>=0&&z>=0&&x<w&&z<h)continue;
    const distance=Math.hypot(Math.max(0,-x,x-w+step),Math.max(0,-z,z-h+step));
    if(distance>3.7+noise(x*.27+9,z*.27+3)*1.4)continue;
    const edge=`${T.MathUtils.clamp(Math.floor(x),0,w-1)},${T.MathUtils.clamp(Math.floor(z),0,h-1)}`;
    (wet.has(edge)?water:land).push([x,z,step]);
  }
  return {land,water};
}

export function buildBattlefield(stage,theme,art=null) {
  const root=new T.Group(),plan=terrainPlan(stage),{map,land,water,bridges}=plan,rng=makeRng(stageSeed(stage.id));
  const lamps=[],landSet=new Set(land.map(([x,y])=>`${x},${y}`));
  const surroundings=surroundingsPlan(plan);
  // A continuous terrain floor fills the fixed camera's frame; map boundaries
  // never become a floating rectangular board. Water stays above this floor.
  const terrainScale=theme.snow?8:12;
  const floor=new T.PlaneGeometry(130,110);floor.rotateX(-Math.PI/2);worldSurface(floor,12,7,terrainScale);floor.userData.owned3d=true;
  const earth=mesh(root,floor,surface(theme),12,-.13,7);earth.castShadow=false;
  mesh(root,tileSurface(land,.006,false,terrainScale),surface(theme),0,0,0);
  mesh(root,tileSurface(surroundings.land,0,true,terrainScale),surface(theme),0,0,0);
  const waterMat=new T.MeshStandardMaterial({color:theme.water,roughness:.29,metalness:.26});waterMat.userData.owned3d=true;
  const waterMesh=new T.Mesh(tileSurface([...water,...surroundings.water],-.075),waterMat);waterMesh.receiveShadow=true;
  // Individual shore walls keep rivers/islands open instead of hiding them below a full ground plane.
  for(const [x,z] of land)for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1]]) {
    if(landSet.has(`${x+dx},${z+dz}`))continue;
    if(x+dx<0||z+dz<0||x+dx>=map.w||z+dz>=map.h)continue;
    mesh(root,'bevel',MAT.stoneDark,x+.5+dx*.48,-.26,z+.5+dz*.48,dx?.09:1,.52,dz?.09:1);
    if(x+dx>=0&&z+dz>=0&&x+dx<map.w&&z+dz<map.h) {
      box(root,material(theme.shore),x+.5+dx*.42,.012,z+.5+dz*.42,dx?.15:1,.035,dz?.15:1);
      if(rng()<.2) {const pebble=seasonalize(rock(.22+rng()*.25,rng()*6),theme);pebble.position.set(x+.5+dx*.42,.015,z+.5+dz*.42);root.add(pebble);}
    }
  }
  const roadMat=surface(theme,true),edgeMat=material(theme.snow?'#667e99':'#535b4c'),seen=new Set();
  const roadPart=(x,z,w,d,mat,y)=>{
    const geo=new T.PlaneGeometry(w,d);geo.rotateX(-Math.PI/2);worldSurface(geo,x,z);mesh(root,geo,mat,x,y,z);
  };
  for(const path of map.paths)for(let i=1;i<path.pts.length;i++) {
    const a=path.pts[i-1],b=path.pts[i],len=Math.hypot(a.x-b.x,a.y-b.y),dx=(b.x-a.x)/len,dz=(b.y-a.y)/len;
    for(let k=0;k<len;k+=.5) {
      const x=a.x+dx*(k+.25),z=a.y+dz*(k+.25),key=`${x.toFixed(2)},${z.toFixed(2)}`;
      if(seen.has(key))continue;seen.add(key);
      roadPart(x,z,dx?.51:1.22,dz?.51:1.22,edgeMat,.018);roadPart(x,z,dx?.51:1.09,dz?.51:1.09,roadMat,.027);
      if(rng()<.6)for(const side of [-1,1]) {
        const stone=mesh(root,'rock',MAT.stone,x-dz*side*.59,.048,z+dx*side*.59,.07+rng()*.05,.03,.06+rng()*.04);stone.rotation.y=rng()*6;
      }
      if(theme.snow&&rng()<.5){const p=box(root,MAT.snowShade,x+dz*.17,.03,z-dx*.17,.07,.008,.13);p.rotation.y=Math.atan2(dx,dz);}
    }
    for(const q of [a,b]){const geo=new T.CircleGeometry(.55,24);geo.rotateX(-Math.PI/2);worldSurface(geo,q.x,q.y);mesh(root,geo,roadMat,q.x,.029,q.y);}
  }
  for(const [x,z] of bridges) {
    const horizontal=map.grid[z*map.w+x-1]===T_PATH||map.grid[z*map.w+x+1]===T_PATH;
    if(horizontal)for(let i=0;i<5;i++)box(root,MAT.wood,x+.1+i*.2,.04,z+.5,.17,.08,.92);
    else { // Crosswise planks for north/south spans.
      for(let i=0;i<5;i++)box(root,MAT.wood,x+.5,.055,z+.1+i*.2,.92,.06,.17);
    }
    for(const side of [-1,1]) {
      const a=horizontal?[x,.06,z+.5+side*.48]:[x+.5+side*.48,.06,z],b=horizontal?[x+1,.06,z+.5+side*.48]:[x+.5+side*.48,.06,z+1];
      between(root,MAT.woodDark,[a[0],-.4,a[2]],[a[0],.52,a[2]],.035);between(root,MAT.wood,[a[0],.4,a[2]],[b[0],.4,b[2]],.025);
    }
  }
  const houses=new Set(),blocks=new Map(map.decor.filter(d=>d.ch==='H').map(d=>[`${d.x},${d.y}`,d]));
  for(const d of map.decor) {
    const x=d.x+.5,z=d.y+.5;
    if(d.ch==='H') {
      if(houses.has(`${d.x},${d.y}`))continue;
      const cluster=[],todo=[d];while(todo.length){const q=todo.pop(),key=`${q.x},${q.y}`;if(houses.has(key))continue;houses.add(key);cluster.push(q);for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const next=blocks.get(`${q.x+dx},${q.y+dy}`);if(next&&!houses.has(`${next.x},${next.y}`))todo.push(next);}}
      const minX=Math.min(...cluster.map(q=>q.x)),maxX=Math.max(...cluster.map(q=>q.x)),minZ=Math.min(...cluster.map(q=>q.y)),maxZ=Math.max(...cluster.map(q=>q.y));
      const house=art?art.prop('hanok',cluster.length===1?1.9:2.9,rng()):seasonalize(hanok(Math.min(3.2,maxX-minX+.8),Math.min(2.4,maxZ-minZ+.8)),theme);house.position.set((minX+maxX+1)/2,0,(minZ+maxZ+1)/2);if(!art&&cluster.length===1)house.scale.y=.72;root.add(house);
      lamps.push([house.position.x,house.position.z+.7,.75,true]);
    } else if(d.ch==='T') {
      const tree=art?art.prop(theme.snow?'snowPine':theme.id==='autumn'?'maple':'pine',2.0+rng()*.8,rng()):theme.snow||rng()<.28?seasonalize(pine(2.3+rng()*1.3,rng()*6),theme):broadleaf(theme,2.2+rng()*1.1,rng()*9);tree.position.set(x,0,z);if(!art)tree.rotation.y=rng()*6;root.add(tree);
    } else if(d.ch==='R'||d.ch==='M') {
      const r=art?art.prop(d.ch==='M'?'cliff':theme.snow?'snowRock':'rock',d.ch==='M'?1.9+rng()*.7:.65+rng()*.4):seasonalize(rock(d.ch==='M'?1.6+rng()*.5:.55+rng()*.45,rng()*6),theme);r.position.set(x,0,z);if(!art&&d.ch==='M')r.scale.y=d.y>=map.h-2?.55:1.7;root.add(r);
    } else if(d.ch==='K') {
      const wall=art?art.prop('wall',1.0):seasonalize(wallSegment(.98,1.16),theme);wall.position.set(x,0,z);if(!art&&map.decor.some(q=>q.ch==='K'&&q.x===d.x&&Math.abs(q.y-d.y)===1))wall.rotation.y=Math.PI/2;root.add(wall);
    } else if(d.ch==='J') {
      cylinder(root,MAT.wood,x,.6,z,.11,1.2);box(root,MAT.wood,x,1.3,z,.29,.38,.22);for(const side of [-1,1])ball(root,MAT.black,x+side*.07,1.37,z+.12,.025);box(root,MAT.red,x,1.2,z+.12,.13,.045,.02);
    } else if(d.ch==='f'&&!theme.snow) {
      for(let j=0;j<7;j++) {const xx=x+(rng()-.5)*.8,zz=z+(rng()-.5)*.8;between(root,material(theme.grass),[xx,0,zz],[xx,.14+rng()*.1,zz],.008);ball(root,material(theme.id==='autumn'?'#d1ac5c':j%2?'#e2b4c1':'#ddd0a1'),xx,.16,zz,.035,.025,.035);}
    }
    if(['T','R','M'].includes(d.ch)&&!theme.snow)for(let j=0;j<4;j++) {
      const xx=x+(rng()-.5)*.8,zz=z+(rng()-.5)*.8;for(let k=0;k<3;k++)between(root,material(theme.grass),[xx,.015,zz],[xx+(rng()-.5)*.18,.16+rng()*.14,zz+(rng()-.5)*.18],.009);
    }
  }
  const base=map.base,lastPath=map.paths[0].pts.at(-1),prev=map.paths[0].pts.at(-2),fort=art?art.prop('gate',2.3):seasonalize(gate(),theme);
  if(!art){fort.scale.set(.36,.55,.48);fort.rotation.y=Math.atan2(lastPath.x-prev.x,lastPath.y-prev.y)+Math.PI;}fort.position.set(base.x+.5,.025,base.y+.5);root.add(fort);
  lamps.push([base.x+.5-.7,base.y+.5,.75,true],[base.x+.5+.7,base.y+.5,.75,true]);
  // Side props stay on blocked cells, preserving every original buildable tile.
  for(const d of map.decor.filter(d=>d.ch==='J'||d.ch==='H').slice(0,4)) {const s=art?art.prop('supplies',.48):seasonalize(supplies(),theme);if(!art)s.scale.setScalar(.45);s.position.set(d.x+.38,0,d.y+.4);root.add(s);}
  const path=map.paths[0];for(const f of [.28,.55,.78]){const q=path.pts[Math.max(1,Math.floor((path.pts.length-1)*f))];lamps.push([q.x+.65,q.y+.5,.65,false]);}
  // Tall scenery stays behind the board in the default southeast view.
  // A southern rim can hide heroes and roads even when it is outside the grid.
  let borderTrees=0;
  for(const [x,z,step]of surroundings.land) {
    if(z>=0&&x>=0&&x<map.w)continue;
    if(rng()>.035)continue;if(borderTrees++>=20)break;
    const shrub=art?art.prop(theme.snow?'snowPine':theme.id==='autumn'?'maple':'pine',1.1+rng()*.9,rng()):theme.snow?seasonalize(pine(.75+rng()*.65,rng()*9),theme):broadleaf(theme,.8+rng()*.7,rng()*9);
    shrub.position.set(x+step/2,-.035,z+step/2);root.add(shrub);
  }
  if(water.length<30) {
    for(let x=-1;x<26;x+=3.7+rng()*1.2) {
      const r=art?art.prop('cliff',3+rng()*1.4):seasonalize(rock(1.8+rng(),rng()*7),theme);r.position.set(x,-.25,-3.6-rng());if(!art)r.scale.y=1.6;root.add(r);
    }
    // Low distant ridges and layered trees extend the scene beyond the map.
    for(let i=0;i<11;i++) {
      const x=-5+i*3.4,z=-8-rng()*4,h=3+rng()*3;
      const ridge=art?art.prop('cliff',h):rock(3.6+rng()*2,rng()*9);if(!art){seasonalize(ridge,theme);ridge.scale.y=h/3.8;}ridge.position.set(x,-1.8,z);root.add(ridge);
      if(i%2===0){const tree=art?art.prop(theme.snow?'snowPine':'pine',3.1+rng()):seasonalize(pine(3+rng()*1.7,rng()*8),theme);tree.position.set(x+.6,-.4,z+1.7);root.add(tree);}
    }
  }
  bakeStatic(root);root.userData.stageId=stage.id;root.userData.season=theme.id;
  return {root,water:waterMesh,lamps:lamps.slice(0,9),plan,surroundings};
}
