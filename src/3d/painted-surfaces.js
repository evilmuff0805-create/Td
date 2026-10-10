import * as T from 'three';

// Shared immutable albedo images; relief remains a separate physical map.
// Literal asset paths are also embedded by the standalone HTML builder.
export const PAINTED_SURFACES={
  stone:'assets/3d/painted/granite-v2.webp',
  wood:'assets/3d/painted/timber-v1.webp',
  road:'assets/3d/painted/road-v3.webp',
  ground:'assets/3d/painted/ground-v4.webp',
  'snow-ground':'assets/3d/painted/snow-ground-v3.webp',
  water:'assets/3d/painted/water-v1.webp',
};
export const PAINTED_SIZE=512;
// GPU texture storage keeps its initial dimensions, including when loading is slow.
// Only albedo needs this resolution; relief and roughness retain their small maps.
export function albedoPlaceholder(data,size,kind) {
  if(!PAINTED_SURFACES[kind])return {data,width:size,height:size};
  const pixels=new Uint8Array(PAINTED_SIZE*PAINTED_SIZE*4);
  for(let y=0;y<PAINTED_SIZE;y++)for(let x=0;x<PAINTED_SIZE;x++) {
    const from=(Math.floor(y*size/PAINTED_SIZE)*size+Math.floor(x*size/PAINTED_SIZE))*4;
    pixels.set(data.subarray(from,from+4),(y*PAINTED_SIZE+x)*4);
  }
  return {data:pixels,width:PAINTED_SIZE,height:PAINTED_SIZE};
}
const images=new Map(),listeners=new Set();
const linear=Float32Array.from({length:256},(_,i)=>i<=10?i/255/12.92:((i/255+.055)/1.055)**2.4);
const encoded=v=>Math.round(Math.max(0,Math.min(1,v<=.0031308?v*12.92:1.055*v**(1/2.4)-.055))*255);
export function tintAlbedo(data,tint){
  const channels=[tint.r,tint.g,tint.b].map(c=>Uint8Array.from(linear,v=>encoded(v*c)));
  for(let i=0;i<data.length;i+=4)for(let c=0;c<3;c++)data[i+c]=channels[c][data[i+c]];
  return data;
}
let ready=0,failed=0,pending=0;
export const paintedSurfaceStatus=()=>({ready,failed,pending});
export function onPaintedSurface(fn){listeners.add(fn);return()=>listeners.delete(fn);}
function announce(){
  if(typeof document!=='undefined'&&document.documentElement){
    document.documentElement.dataset.paintedReady=ready;
    document.documentElement.dataset.paintedPending=pending;
    document.documentElement.dataset.paintedFailed=failed;
  }
  for(const fn of listeners)fn();
}
function pixelsFor(kind){
  if(!images.has(kind))images.set(kind,new Promise((resolve,reject)=>{
    const url=new URL(PAINTED_SURFACES[kind],new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,img=>{
      try {
        const canvas=document.createElement('canvas');canvas.width=canvas.height=PAINTED_SIZE;
        const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0,PAINTED_SIZE,PAINTED_SIZE);resolve({width:PAINTED_SIZE,height:PAINTED_SIZE,data:ctx.getImageData(0,0,PAINTED_SIZE,PAINTED_SIZE).data});
      }catch(error){reject(error);}
    },undefined,reject);
  }));
  return images.get(kind);
}

// Updating the existing DataTexture also updates cloned skins and cached models.
// Node/headless validation and failed image loads retain the procedural fallback.
export function paintSurface(texture,kind,tint=null){
  if(!PAINTED_SURFACES[kind]||typeof document==='undefined'||typeof document.createElementNS!=='function')return texture;
  texture.userData.paintedSurface=kind;pending++;announce();
  pixelsFor(kind).then(image=>{
    if(texture.image.width!==image.width||texture.image.height!==image.height)throw new Error('Albedo placeholder dimensions must stay fixed');
    const data=new Uint8Array(image.data);
    if(tint)tintAlbedo(data,tint);
    texture.image={width:image.width,height:image.height,data};
    texture.colorSpace=T.SRGBColorSpace;texture.needsUpdate=true;
    ready++;texture.userData.paintedLoaded=true;
  }).catch(error=>{failed++;console.warn(`Painted surface fallback: ${kind}`,error.message);}).finally(()=>{pending--;announce();});
  return texture;
}
