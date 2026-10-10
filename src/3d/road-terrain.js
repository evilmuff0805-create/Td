import * as T from 'three';
import { getMap,T_PATH,T_WATER } from '../sim/map.js';
import { surfaceNoise as noise } from './surfaces.js';

export const ROAD_SUBDIVISIONS=5;
const smooth=(a,b,x)=>{const t=T.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};

export function roadSegments(map) {
  return map.paths.flatMap(path=>path.pts.slice(1).map((b,i)=>{
    const a=path.pts[i],dx=b.x-a.x,dz=b.y-a.y,length=Math.hypot(dx,dz);
    return {ax:a.x,az:a.y,bx:b.x,bz:b.y,dx:dx/length,dz:dz/length,length};
  })).filter(s=>s.length>0);
}

// One union distance field avoids overlapping alpha at bends and shared routes.
// Width and shading depend only on world coordinates, never path order.
export function roadSample(segments,x,z) {
  let distance=Infinity;
  for(const s of segments){
    const t=T.MathUtils.clamp((x-s.ax)*s.dx+(z-s.az)*s.dz,0,s.length);
    distance=Math.min(distance,Math.hypot(x-s.ax-s.dx*t,z-s.az-s.dz*t));
  }
  const broad=noise(x*.39+17,z*.39-9),grain=noise(x*1.17-8,z*1.17+4);
  const width=.50+(broad-.5)*.12+(grain-.5)*.05;
  const alpha=1-smooth(width-.06,width+.12,distance);
  const wear=noise(x*.71+7,z*.71+12);
  const shade=.93+broad*.09+(wear-.5)*.045;
  const powder=alpha*(.14+.51*smooth(.3,.78,wear))*(.24+.76*smooth(.13,.49,distance));
  return {distance,width,alpha,shade,powder};
}

export function roadCellIsDry(stage,map,x,z) {
  const xx=T.MathUtils.clamp(x,0,map.w-1),zz=T.MathUtils.clamp(z,0,map.h-1),tile=map.grid[zz*map.w+xx];
  return tile!==T_WATER&&!(tile===T_PATH&&stage.grid[zz][xx]==='W');
}

// All triangles are contained in integer land cells: water and bridge decks
// remain open even when a feathered road edge lies close to the shore.
export function roadTerrain(stage) {
  const map=getMap(stage.id),segments=roadSegments(map),n=ROAD_SUBDIVISIONS;
  const xs=segments.flatMap(s=>[s.ax,s.bx]),zs=segments.flatMap(s=>[s.az,s.bz]);
  const bounds={minX:Math.floor(Math.min(...xs)-.8),maxX:Math.ceil(Math.max(...xs)+.8),minZ:Math.floor(Math.min(...zs)-.8),maxZ:Math.ceil(Math.max(...zs)+.8)};
  const positions=[],uv=[],colors=[],snowColors=[],indices=[],vertices=new Map(),samples=new Map(),cells=[];
  const sample=(ix,iz)=>{const key=ix+','+iz;if(!samples.has(key))samples.set(key,roadSample(segments,ix/n,iz/n));return samples.get(key);};
  const vertex=(ix,iz)=>{
    const key=ix+','+iz;if(vertices.has(key))return vertices.get(key);
    const at=positions.length/3,x=ix/n,z=iz/n,s=sample(ix,iz);
    positions.push(x,0,z);uv.push(x/3.4,z/3.4);colors.push(s.shade,s.shade,s.shade,s.alpha);
    snowColors.push(1,1,1,s.powder);vertices.set(key,at);return at;
  };
  for(let z=bounds.minZ;z<bounds.maxZ;z++)for(let x=bounds.minX;x<bounds.maxX;x++){
    if(!roadCellIsDry(stage,map,x,z))continue;
    for(let j=0;j<n;j++)for(let i=0;i<n;i++){
      const ix=x*n+i,iz=z*n+j;
      if(![[ix,iz],[ix,iz+1],[ix+1,iz+1],[ix+1,iz]].some(([xx,zz])=>sample(xx,zz).alpha>0))continue;
      const a=vertex(ix,iz),b=vertex(ix,iz+1),c=vertex(ix+1,iz+1),d=vertex(ix+1,iz);
      indices.push(a,b,c,c,d,a);cells.push([ix/n,iz/n]);
    }
  }
  const geometry=(color,scale=1)=>{
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));
    g.setAttribute('uv',new T.Float32BufferAttribute(uv.map(v=>v*scale),2));
    g.setAttribute('color',new T.Float32BufferAttribute(color,4));g.setIndex(indices);g.computeVertexNormals();
    g.computeBoundingSphere();g.userData.owned3d=true;g.userData.terrainLayer=true;return g;
  };
  return {road:geometry(colors),snow:geometry(snowColors,3.4/8),segments,cells,bounds,metrics:{vertices:positions.length/3,triangles:indices.length/3,cells:cells.length,subdivisions:n}};
}

export function roadLayer(geometry,source,kind='road') {
  const mat=source.clone();Object.assign(mat,{transparent:true,depthWrite:false,depthTest:true,vertexColors:true,alphaTest:.002});
  mat.userData={...source.userData,owned3d:true,terrainLayer:kind};
  const layer=new T.Mesh(geometry,mat);layer.name='terrain-'+kind;layer.position.y=kind==='road'?.026:.030;
  layer.castShadow=false;layer.receiveShadow=true;layer.renderOrder=kind==='road'?-4:-3;return layer;
}
