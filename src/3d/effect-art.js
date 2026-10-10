import * as T from 'three';

export const EFFECT_ATLAS='assets/3d/fixed/battle-effects-v1.webp';
export const EFFECT_CELLS=Object.freeze({fire:0,flood:1,ice:2,heal:3,slash:4,light:5,volley:6,combo:7});
let sourcePromise;
function source() {
  return sourcePromise??=new Promise((resolve,reject)=>{
    const url=EFFECT_ATLAS.startsWith('data:')?EFFECT_ATLAS:new URL(EFFECT_ATLAS,new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,resolve,undefined,reject);
  });
}

// Each battle owns its GPU texture; individual effects own their geometry and
// material. Finishing an impact must never dispose another effect's atlas.
export class PaintedEffectArt {
  constructor(){this.ready=false;this.failed=false;this.destroyed=false;this.texture=null;}
  load() {
    return this.promise??=source().then(img=>{
      if(this.destroyed)return false;
      this.texture=new T.Texture(img);this.texture.colorSpace=T.SRGBColorSpace;this.texture.anisotropy=4;this.texture.needsUpdate=true;this.ready=true;return true;
    }).catch(()=>{this.failed=true;return false;});
  }
  mesh(kind,geometry,opacity=.65) {
    if(!this.ready)return null;
    const cell=EFFECT_CELLS[kind]??EFFECT_CELLS.light,col=cell%4,row=Math.floor(cell/4),uv=geometry.attributes.uv;
    const dx=1.5/this.texture.image.width,dy=1.5/this.texture.image.height;
    for(let i=0;i<uv.count;i++)uv.setXY(i,col/4+dx+uv.getX(i)*(.25-2*dx),1-(row+1)/2+dy+uv.getY(i)*(.5-2*dy));
    geometry.userData.owned3d=true;
    const material=new T.MeshBasicMaterial({map:this.texture,transparent:true,opacity,depthWrite:false,toneMapped:false,side:T.DoubleSide});material.userData.owned3d=true;
    const mesh=new T.Mesh(geometry,material);mesh.userData.paintedEffect=kind;return mesh;
  }
  decal(kind,radius=1,opacity=.65) {
    if(!this.ready)return null;
    const mesh=this.mesh(kind,new T.CircleGeometry(radius,56),opacity);mesh.rotation.x=-Math.PI/2;return mesh;
  }
  dispose(){if(this.destroyed)return;this.destroyed=true;this.ready=false;this.texture?.dispose();}
}
