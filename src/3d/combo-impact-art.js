import * as T from 'three';
import { COMBO_IMPACT_PIVOTS } from './combo-impact-data.js';
import { COMBO_ELEMENTS } from './combo-element-data.js';

export const COMBO_IMPACT_ATLAS = 'assets/3d/fixed/combo-impact-flipbook-v3.webp';
export const COMBO_IMPACT_FRAMES = 8;
export const COMBO_IMPACT_STYLES = Object.freeze({
  yi_sejong:     { family:'light', color:'#ffe4ac', radius:.68, life:1.05, support:true },
  eulji_gang:    { family:'flood', color:'#a4deee', radius:.78, life:1.00 },
  gwak_gwon:     { family:'light', color:'#e5c38d', radius:.58, life:1.00, support:true },
  gwon_yi:       { family:'fire',  color:'#ffc18b', radius:.70, life:.82 },
  eulji_sejong:  { family:'light', color:'#c6e5e8', radius:.60, life:1.05 },
  gang_yi:       { family:'light', color:'#c6d5ff', radius:.72, life:.90 },
  ahn_sejong:    { family:'fire',  color:'#f6d89a', radius:.66, life:.88 },
  dangun_eulji:  { family:'light', color:'#d8cbff', radius:.68, life:.85 },
  ahn_yi:       { family:'fire',  color:'#ffc99e', radius:.76, life:.82 },
  dangun_sejong: { family:'heal',  color:'#b9e8c3', radius:.70, life:1.15, support:true },
  generic:      { family:'light', color:'#f6e4b6', radius:.64, life:.90 },
});

const sources=new Map();
function source(path) {
  if(!sources.has(path))sources.set(path,new Promise((resolve,reject)=>{
    const url=path.startsWith('data:')?path:new URL(path,new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,resolve,undefined,reject);
  }));
  return sources.get(path);
}

// Decoded pixels are shared. Each battle owns its GPU textures; each live
// impact owns its UV buffer, geometry and material. No texture.offset changes.
export class ComboImpactArt {
  constructor(){this.ready=false;this.failed=false;this.destroyed=false;this.texture=null;this.elements=new Map();this.missingFamilies=[];}
  load(){
    return this.promise ??= Promise.all([
      source(COMBO_IMPACT_ATLAS).then(image=>{if(!this.destroyed){this.texture=this.makeTexture(image);this.ready=true;}}).catch(()=>{if(!this.destroyed)this.failed=true;}),
      ...Object.entries(COMBO_ELEMENTS).map(([family,data])=>source(data.path).then(image=>{if(!this.destroyed)this.elements.set(family,this.makeTexture(image));}).catch(()=>{if(!this.destroyed)this.missingFamilies.push(family);})),
    ]).then(()=>{if(this.destroyed)return false;this.ready=!!this.texture||this.elements.size>0;this.failed=!this.ready;return this.ready;});
  }
  makeTexture(image){const texture=new T.Texture(image);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;texture.needsUpdate=true;return texture;}
  decal(radius, color, opacity=.4, family='light'){
    const element=this.elements.get(family),texture=element??this.texture;
    if(this.destroyed||!texture)return null;
    const geometry=new T.PlaneGeometry(radius*2.8,radius*2.8);
    geometry.userData.owned3d=true;
    const material=new T.MeshBasicMaterial({map:texture,color:element?'#ffffff':color,transparent:true,opacity,depthWrite:false,toneMapped:false,side:T.DoubleSide});
    material.userData.owned3d=true;
    const mesh=new T.Mesh(geometry,material);mesh.rotation.x=-Math.PI/2;
    mesh.userData.impactSize=radius*2.8;
    mesh.userData.impactFamily=element?family:'light';
    mesh.userData.impactPivots=element?COMBO_ELEMENTS[family].pivots:COMBO_IMPACT_PIVOTS;
    mesh.userData.impactUV=geometry.attributes.uv.array.slice();mesh.userData.impactFrame=-1;this.frame(mesh,0);return mesh;
  }
  frame(mesh,frame){
    frame=Math.max(0,Math.min(COMBO_IMPACT_FRAMES-1,Math.floor(frame)));
    if(mesh.userData.impactFrame===frame)return;
    const uv=mesh.geometry.attributes.uv,base=mesh.userData.impactUV,col=frame%4,row=Math.floor(frame/4);
    const image=mesh.material.map.image,dx=1.5/image.width,dy=1.5/image.height;
    for(let i=0;i<uv.count;i++)uv.setXY(i,col/4+dx+base[i*2]*(.25-2*dx),1-(row+1)/2+dy+base[i*2+1]*(.5-2*dy));
    uv.needsUpdate=true;mesh.userData.impactFrame=frame;
    const pivot=mesh.userData.impactPivots[frame],size=mesh.userData.impactSize;
    mesh.position.x=(.5-pivot.x)*size;mesh.position.z=(.5-pivot.y)*size;
  }
  dispose(){if(this.destroyed)return;this.destroyed=true;this.ready=false;for(const texture of new Set([this.texture,...this.elements.values()].filter(Boolean)))texture.dispose();this.elements.clear();}
}
