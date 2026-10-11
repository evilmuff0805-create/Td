import * as T from 'three';
import { COMBO_IMPACT_PIVOTS } from './combo-impact-data.js';

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

let sourcePromise;
function source() {
  return sourcePromise ??= new Promise((resolve,reject)=>{
    const url=COMBO_IMPACT_ATLAS.startsWith('data:')?COMBO_IMPACT_ATLAS:new URL(COMBO_IMPACT_ATLAS,new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,resolve,undefined,reject);
  });
}

// Decoded pixels are shared. Each battle owns one GPU texture; each live
// impact owns its UV buffer, geometry and material. No texture.offset changes.
export class ComboImpactArt {
  constructor(){this.ready=false;this.failed=false;this.destroyed=false;this.texture=null;}
  load(){
    return this.promise ??= source().then(image=>{
      if(this.destroyed)return false;
      this.texture=new T.Texture(image);this.texture.colorSpace=T.SRGBColorSpace;this.texture.anisotropy=4;this.texture.needsUpdate=true;this.ready=true;return true;
    }).catch(()=>{this.failed=true;return false;});
  }
  decal(radius, color, opacity=.4){
    if(!this.ready)return null;
    const geometry=new T.PlaneGeometry(radius*2.8,radius*2.8);
    geometry.userData.owned3d=true;
    const material=new T.MeshBasicMaterial({map:this.texture,color,transparent:true,opacity,depthWrite:false,toneMapped:false,side:T.DoubleSide});
    material.userData.owned3d=true;
    const mesh=new T.Mesh(geometry,material);mesh.rotation.x=-Math.PI/2;
    mesh.userData.impactSize=radius*2.8;
    mesh.userData.impactUV=geometry.attributes.uv.array.slice();mesh.userData.impactFrame=-1;this.frame(mesh,0);return mesh;
  }
  frame(mesh,frame){
    frame=Math.max(0,Math.min(COMBO_IMPACT_FRAMES-1,Math.floor(frame)));
    if(mesh.userData.impactFrame===frame)return;
    const uv=mesh.geometry.attributes.uv,base=mesh.userData.impactUV,col=frame%4,row=Math.floor(frame/4);
    const dx=1.5/this.texture.image.width,dy=1.5/this.texture.image.height;
    for(let i=0;i<uv.count;i++)uv.setXY(i,col/4+dx+base[i*2]*(.25-2*dx),1-(row+1)/2+dy+base[i*2+1]*(.5-2*dy));
    uv.needsUpdate=true;mesh.userData.impactFrame=frame;
    const pivot=COMBO_IMPACT_PIVOTS[frame],size=mesh.userData.impactSize;
    mesh.position.x=(.5-pivot.x)*size;mesh.position.z=(.5-pivot.y)*size;
  }
  dispose(){if(this.destroyed)return;this.destroyed=true;this.ready=false;this.texture?.dispose();}
}
