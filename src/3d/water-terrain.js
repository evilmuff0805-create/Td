import * as T from 'three';
import {surfaceNoise as noise} from './surfaces.js';
import {paintSurface,albedoPlaceholder} from './painted-surfaces.js';

export const WATER_SUBDIVISIONS=4,SHORE_SUBDIVISIONS=8;
const smooth=(a,b,x)=>{const t=T.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
const directions=[[1,0],[-1,0],[0,1],[0,-1]];
const waterMaterials=new Map();

// Half-cell coverage includes the board and its scenery skirt. Bridges remain
// water below their unchanged decks. Missing skirt cells do not create shores.
export function shoreField(plan,surroundings={land:[],water:[]}){
  const land=new Set(),wet=new Set(),boardWet=new Set();
  const add=(set,tiles)=>{for(const[x,z,step=1]of tiles)for(let j=0;j<step*2;j++)for(let i=0;i<step*2;i++)set.add((x*2+i)+','+(z*2+j));};
  add(land,plan.land);add(land,surroundings.land);add(wet,plan.water);add(wet,surroundings.water);
  add(boardWet,plan.water);
  const segments=[];
  for(const key of wet){const[x,z]=key.split(',').map(Number);
    for(const[dx,dz]of directions)if(land.has((x+dx)+','+(z+dz))){
      const ax=(x+(dx>0?1:0))/2,az=(z+(dz>0?1:0))/2;
      segments.push({ax,az,bx:ax+(dx?0:.5),bz:az+(dz?0:.5)});
    }
  }
  const farWet=new Set(),farBorders=[],w=plan.map?.w??0,h=plan.map?.h??0;
  if(w&&h&&boardWet.size){
    const edgeWet=(x,z)=>boardWet.has((T.MathUtils.clamp(x,0,w-1)*2)+','+(T.MathUtils.clamp(z,0,h-1)*2));
    for(let z=-96;z<124;z++)for(let x=-106;x<154;x++){
      if(x>=0&&z>=0&&x<w*2&&z<h*2)continue;
      if(edgeWet(Math.floor(x/2),Math.floor(z/2))){const key=x+','+z;farWet.add(key);wet.add(key);}
    }
    for(let x=1;x<w;x++){
      if(edgeWet(x,0)!==edgeWet(x-1,0))farBorders.push({ax:x,az:0,bx:x,bz:-48});
      if(edgeWet(x,h-1)!==edgeWet(x-1,h-1))farBorders.push({ax:x,az:h,bx:x,bz:62});
    }
    for(let z=1;z<h;z++){
      if(edgeWet(0,z)!==edgeWet(0,z-1))farBorders.push({ax:0,az:z,bx:-53,bz:z});
      if(edgeWet(w-1,z)!==edgeWet(w-1,z-1))farBorders.push({ax:w,az:z,bx:77,bz:z});
    }
  }
  return {land,wet,boardWet,farWet,farBorders,segments,map:plan.map};
}
function segmentDistance(segments,x,z){
  let distance=Infinity;
  for(const s of segments){const dx=s.bx-s.ax,dz=s.bz-s.az,t=T.MathUtils.clamp(((x-s.ax)*dx+(z-s.az)*dz)/(dx*dx+dz*dz),0,1);distance=Math.min(distance,Math.hypot(x-s.ax-dx*t,z-s.az-dz*t));}
  return distance;
}
export function shoreDistance(field,x,z){return segmentDistance(field.segments,x,z);}
export function shoreSample(field,x,z){
  const distance=shoreDistance(field,x,z),wet=field.wet.has(Math.floor(x*2)+','+Math.floor(z*2));
  const grain=noise(x*1.1+13,z*1.1-7),broad=noise(x*.47+6,z*.47-11),width=wet?.23+grain*.08:.16+grain*.07;
  const alpha=1-smooth(.025,width,distance);
  // Keep all dry terrain above y=.006; only the wet half slopes into water.
  // Fade the tip above even the highest moving waterline (-.066). No bank
  // triangle can cross the opaque surface, including diagonals at corners.
  const height=wet?.010+broad*.003-.052*smooth(0,width,distance):.010+broad*.003;
  const shade=(wet?.68:.86)+broad*.12+(grain-.5)*.055;
  return {distance,wet,width,alpha,height,shade};
}
function outsideDistance(field,x,z){return field.map?Math.max(0,-x,x-field.map.w,-z,z-field.map.h):0;}
export function waterColor(field,x,z,far=false){
  const d=shoreDistance(field,x,z),extent=outsideDistance(field,x,z),deep=far?T.MathUtils.lerp(smooth(.03,1.35,d),1,smooth(3.5,6,extent)):smooth(.03,1.35,d),broad=T.MathUtils.lerp(noise(x*.32+7,z*.32-3),.5,smooth(3.5,6,extent));
  const color=[.85+broad*.09-deep*.09,.98+broad*.07-deep*.15,1+broad*.05-deep*.12];
  if(far)color.push(T.MathUtils.lerp(1,smooth(.03,1.2,segmentDistance(field.farBorders,x,z)),smooth(3,5,extent)));return color;
}
function geometry(positions,uv,colors,indices,colorSize=4){
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));
  g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));g.setAttribute('color',new T.Float32BufferAttribute(colors,colorSize));g.setIndex(indices);
  g.computeVertexNormals();g.computeBoundingSphere();g.userData.owned3d=true;return g;
}
export function shoreGeometry(field){
  const n=SHORE_SUBDIVISIONS,cells=new Set(),vertices=new Map(),samples=new Map(),positions=[],uv=[],colors=[],indices=[];
  for(const s of field.segments)for(let iz=Math.floor((Math.min(s.az,s.bz)-.36)*n);iz<Math.ceil((Math.max(s.az,s.bz)+.36)*n);iz++)
    for(let ix=Math.floor((Math.min(s.ax,s.bx)-.36)*n);ix<Math.ceil((Math.max(s.ax,s.bx)+.36)*n);ix++)cells.add(ix+','+iz);
  const sample=(ix,iz)=>{const key=ix+','+iz;if(!samples.has(key))samples.set(key,shoreSample(field,ix/n,iz/n));return samples.get(key);};
  const vertex=(ix,iz)=>{const key=ix+','+iz;if(vertices.has(key))return vertices.get(key);
    const at=positions.length/3,x=ix/n,z=iz/n,s=sample(ix,iz);positions.push(x,s.height,z);uv.push(x/2.7,z/2.7);
    colors.push(s.shade*.98,s.shade,s.shade*1.025,s.alpha);vertices.set(key,at);return at;
  };
  for(const key of cells){const[ix,iz]=key.split(',').map(Number),at=[ix/n+.5/n,iz/n+.5/n],coverage=Math.floor(at[0]*2)+','+Math.floor(at[1]*2);
    if(!field.wet.has(coverage)&&!field.land.has(coverage))continue;
    if(![[ix,iz],[ix,iz+1],[ix+1,iz+1],[ix+1,iz]].some(([x,z])=>sample(x,z).alpha>0))continue;
    const a=vertex(ix,iz),b=vertex(ix,iz+1),c=vertex(ix+1,iz+1),d=vertex(ix+1,iz);indices.push(a,b,c,c,d,a);
  }
  return geometry(positions,uv,colors,indices);
}
function waterSurface(field,far=false){
  const n=WATER_SUBDIVISIONS,positions=[],uv=[],colors=[],indices=[],vertices=new Map(),samples=new Map(),wet=far?field.farWet:field.boardWet;
  const outside=(x,z)=>outsideDistance(field,x,z);
  const sample=(ix,iz)=>{const key=ix+','+iz;if(samples.has(key))return samples.get(key);
    const color=waterColor(field,ix/n,iz/n,far);
    samples.set(key,color);return color;
  };
  const vertex=(ix,iz)=>{const key=ix+','+iz;if(vertices.has(key))return vertices.get(key);
    const at=positions.length/3,x=ix/n,z=iz/n;positions.push(x,-.075,z);uv.push(x/7.5,z/7.5);colors.push(...sample(ix,iz));
    vertices.set(key,at);return at;
  };
  const quad=(ix,iz,dx,dz)=>{const a=vertex(ix,iz),b=vertex(ix,iz+dz),c=vertex(ix+dx,iz+dz),d=vertex(ix+dx,iz);indices.push(a,b,c,c,d,a);};
  const seen=new Set(),fine=new Set();
  for(const key of wet){if(seen.has(key))continue;const[x,z]=key.split(',').map(Number),cx=Math.floor(x/8)*8,cz=Math.floor(z/8)*8;
    // Coarse quads are restricted to constant color/alpha, well outside every
    // fade or shore. Their UV is affine, so T-junction interpolation is exact.
    if(far&&x===cx&&z===cz){const corners=[[cx/2,cz/2],[cx/2+4,cz/2],[cx/2,cz/2+4],[cx/2+4,cz/2+4]];
      if(corners.every(([a,b])=>outside(a,b)>=6&&segmentDistance(field.farBorders,a,b)>=1.2)){
        const cells=[];for(let j=0;j<8;j++)for(let i=0;i<8;i++)cells.push((cx+i)+','+(cz+j));
        if(cells.every(k=>wet.has(k)&&!seen.has(k))){for(const k of cells)seen.add(k);quad(cx*n/2,cz*n/2,4*n,4*n);continue;}
      }
    }
    seen.add(key);
    for(let j=0;j<n/2;j++)for(let i=0;i<n/2;i++)fine.add((x*n/2+i)+','+(z*n/2+j));
  }
  const done=new Set(),same=(a,b)=>a.every((v,i)=>Math.abs(v-b[i])<1e-12);
  for(const key of fine){if(done.has(key))continue;const[ix,iz]=key.split(',').map(Number);let dx=1,dz=1;
    if(far&&[[ix,iz],[ix+1,iz],[ix,iz+1],[ix+1,iz+1]].every(([x,z])=>outside(x/n,z/n)>=6)){
      // Far fade strips keep the original quarter-cell width. Merge only along
      // an axis with identical endpoint colors at EVERY original grid step.
      // This also preserves alpha interpolation at fine/coarse T-junctions.
      const a=sample(ix,iz),b=sample(ix,iz+1),c=sample(ix+1,iz+1),d=sample(ix+1,iz);
      if(same(a,d)&&same(b,c))for(let k=1;k<4*n;k++){
        const cell=(ix+k)+','+iz;if(!fine.has(cell)||done.has(cell)||!same(a,sample(ix+k+1,iz))||!same(b,sample(ix+k+1,iz+1)))break;dx++;
      }
      if(dx===1&&same(a,b)&&same(d,c))for(let k=1;k<4*n;k++){
        const cell=ix+','+(iz+k);if(!fine.has(cell)||done.has(cell)||!same(a,sample(ix,iz+k+1))||!same(d,sample(ix+1,iz+k+1)))break;dz++;
      }
    }
    for(let j=0;j<dz;j++)for(let i=0;i<dx;i++)done.add((ix+i)+','+(iz+j));quad(ix,iz,dx,dz);
  }
  return geometry(positions,uv,colors,indices,far?4:3);
}
export function waterGeometry(field){return waterSurface(field);}
export function farWaterGeometry(field){return waterSurface(field,true);}
export function waterMaterial(theme,far=false){
  if(!waterMaterials.has(theme.id)){
    const tint=new T.Color(theme.water).lerp(new T.Color('#ffffff'),.68),p=albedoPlaceholder(new Uint8Array([56,88,109,255]),1,'water');
    const tex=new T.DataTexture(p.data,p.width,p.height);tex.colorSpace=T.SRGBColorSpace;tex.wrapS=tex.wrapT=T.MirroredRepeatWrapping;
    tex.minFilter=T.LinearMipmapLinearFilter;tex.magFilter=T.LinearFilter;tex.generateMipmaps=true;tex.anisotropy=4;tex.needsUpdate=true;paintSurface(tex,'water');
    waterMaterials.set(theme.id,new T.MeshStandardMaterial({color:tint,map:tex,roughness:.64,metalness:.06,vertexColors:true}));
  }
  const mat=waterMaterials.get(theme.id).clone();mat.userData.owned3d=true;
  if(far)Object.assign(mat,{transparent:true,depthWrite:false,alphaTest:.002});return mat;
}
export function shoreLayer(geo,source){
  const mat=source.clone();Object.assign(mat,{transparent:true,depthWrite:false,depthTest:true,vertexColors:true,alphaTest:.002,roughness:.98});
  mat.userData={...source.userData,owned3d:true,shoreLayer:true};
  const layer=new T.Mesh(geo,mat);layer.name='terrain-shore';layer.castShadow=false;layer.receiveShadow=true;layer.renderOrder=-5;return layer;
}
