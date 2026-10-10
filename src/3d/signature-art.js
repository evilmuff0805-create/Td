import * as T from 'three';
import { SIGNATURE_ART } from './signature-data.js';

let sourcePromise;
function source() {
  return sourcePromise??=new Promise((resolve,reject)=>{
    const path=SIGNATURE_ART.path,url=path.startsWith('data:')?path:new URL(path,new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,resolve,undefined,reject);
  });
}

// One shared decoded image; each battle owns its lazily prepared textures.
// Irregular alpha bounds preserve protruding feathers/flags/lightning. Each
// crop has a transparent gutter, so filtering cannot sample a neighbour.
export class PaintedSignatures {
  constructor(){this.ready=false;this.failed=false;this.destroyed=false;this.image=null;this.textures=new Map();}
  load() {
    return this.promise??=source().then(image=>{
      if(this.destroyed)return false;
      this.image=image;this.ready=true;return true;
    }).catch(()=>{this.failed=true;return false;});
  }
  texture(kind) {
    if(!this.ready||this.destroyed)return null;
    if(this.textures.has(kind))return this.textures.get(kind);
    const frame=SIGNATURE_ART.frames.find(f=>f.key===kind);if(!frame)return null;
    try {
      const pad=SIGNATURE_ART.padding,canvas=document.createElement('canvas');canvas.width=frame.width+pad*2;canvas.height=frame.height+pad*2;
      const context=canvas.getContext('2d');if(!context)throw new Error('No effect canvas');
      context.drawImage(this.image,frame.left,frame.top,frame.width,frame.height,pad,pad,frame.width,frame.height);
      const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;
      this.textures.set(kind,texture);return texture;
    }catch{this.failed=true;this.ready=false;return null;}
  }
  mesh(kind,geometry,opacity=.65) {
    const texture=this.texture(kind);if(!texture)return null;
    geometry.userData.owned3d=true;
    const material=new T.MeshBasicMaterial({map:texture,transparent:true,opacity,depthWrite:false,toneMapped:false,side:T.DoubleSide});material.userData.owned3d=true;
    const mesh=new T.Mesh(geometry,material);mesh.userData.paintedEffect=kind;mesh.userData.paintedSignature=kind;return mesh;
  }
  aspect(kind) {const f=SIGNATURE_ART.frames.find(f=>f.key===kind);return f?(f.width+SIGNATURE_ART.padding*2)/(f.height+SIGNATURE_ART.padding*2):1;}
  plane(kind,width=1,height=width,opacity=.65) {
    if(!this.ready)return null;
    const geometry=new T.PlaneGeometry(width,height),mesh=this.mesh(kind,geometry,opacity);
    if(!mesh)geometry.dispose();return mesh;
  }
  decal(kind,radius=1,opacity=.65) {
    const mesh=this.plane(kind,radius*2,radius*2,opacity);if(mesh)mesh.rotation.x=-Math.PI/2;return mesh;
  }
  dispose(){if(this.destroyed)return;this.destroyed=true;this.ready=false;for(const texture of this.textures.values())texture.dispose();this.textures.clear();this.image=null;}
}
