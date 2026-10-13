import * as T from 'three';
import { COMBO_IMPACT_PIVOTS } from './combo-impact-data.js';
import { COMBO_ELEMENTS } from './combo-element-data.js';
import { COMBO_SEQUENCES } from './combo-sequence-data.js';
import { findCombo } from '../data/combos.js';

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
function source(path,shared=true) {
  const load=()=>new Promise((resolve,reject)=>{
    const url=path.startsWith('data:')?path:new URL(path,new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,resolve,undefined,reject);
  });
  if(!shared)return load();
  if(!sources.has(path))sources.set(path,load());
  return sources.get(path);
}

export function comboSequenceRoster(heroes=[]){
  heroes=Array.isArray(heroes)?heroes.filter(h=>h?.heroId):[];
  const ids=[...new Set(heroes.map(h=>h.heroId))],combos=new Set();
  for(let a=0;a<ids.length;a++)for(let b=a+1;b<ids.length;b++)combos.add(findCombo(ids[a],ids[b]).id);
  // Two players may choose the same hero, which uses the generic combination.
  if(heroes.length>=2&&ids.length===1)combos.add('generic');
  return [...combos].filter(id=>COMBO_SEQUENCES[id]).sort();
}

// Common fallback pixels are shared; dedicated sequences are decoded per
// battle so deselected sources can be collected. Each battle owns its GPU
// textures; each live impact owns its UV, geometry and material.
export class ComboImpactArt {
  constructor(){this.ready=false;this.failed=false;this.destroyed=false;this.texture=null;this.elements=new Map();this.missingFamilies=[];this.sequences=new Map();this.sequenceRequests=new Map();this.sequenceGeneration=0;this.sequenceKey=null;this.missingCombos=[];}
  load(){
    this.corePromise ??= Promise.all([
      source(COMBO_IMPACT_ATLAS).then(image=>{if(!this.destroyed){this.texture=this.makeTexture(image);this.ready=true;}}).catch(()=>{if(!this.destroyed)this.failed=true;}),
      ...Object.entries(COMBO_ELEMENTS).map(([family,data])=>source(data.path).then(image=>{if(!this.destroyed)this.elements.set(family,this.makeTexture(image));}).catch(()=>{if(!this.destroyed)this.missingFamilies.push(family);})),
    ]).then(()=>{if(this.destroyed)return false;this.ready=!!this.texture||this.elements.size>0;this.failed=!this.ready;return this.ready;});
    return this.promise??=this.corePromise;
  }
  prepare(ids=[]){
    const wanted=new Set(ids.filter(id=>COMBO_SEQUENCES[id])),key=[...wanted].sort().join(',');
    if(this.destroyed||key===this.sequenceKey)return this.promise;
    this.load();this.sequenceKey=key;const generation=++this.sequenceGeneration;
    for(const [id,texture]of this.sequences)if(!wanted.has(id)){texture.dispose();this.sequences.delete(id);}
    for(const id of this.sequenceRequests.keys())if(!wanted.has(id))this.sequenceRequests.delete(id);
    this.sequenceLoading=true;this.missingCombos=[];
    this.sequencePromise=Promise.all([...wanted].map(async id=>{
      if(this.sequences.has(id))return {id,texture:this.sequences.get(id)};
      let request=this.sequenceRequests.get(id);
      if(!request){request=source(COMBO_SEQUENCES[id].path,false).catch(()=>null);this.sequenceRequests.set(id,request);}
      const image=await request;return {id,image};
    })).then(results=>{
      if(this.destroyed||generation!==this.sequenceGeneration)return false;
      for(const {id,image,texture}of results){if(texture)this.sequences.set(id,texture);else if(image)this.sequences.set(id,this.makeTexture(image));else this.missingCombos.push(id);this.sequenceRequests.delete(id);}
      this.ready=!!this.texture||this.elements.size>0||this.sequences.size>0;this.failed=!this.ready;return true;
    }).finally(()=>{if(generation===this.sequenceGeneration)this.sequenceLoading=false;});
    this.promise=Promise.all([this.corePromise,this.sequencePromise]).then(()=>{if(this.destroyed)return false;this.ready=!!this.texture||this.elements.size>0||this.sequences.size>0;this.failed=!this.ready;return this.ready;});return this.promise;
  }
  hasSequence(id){return !this.destroyed&&this.sequences.has(id);}
  makeTexture(image){const texture=new T.Texture(image);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;texture.needsUpdate=true;return texture;}
  decal(radius, color, opacity=.4, family='light',combo=null){
    const sequence=this.sequences.get(combo),element=this.elements.get(family),texture=sequence??element??this.texture,data=sequence?COMBO_SEQUENCES[combo]:element?COMBO_ELEMENTS[family]:null;
    if(this.destroyed||!texture)return null;
    const geometry=new T.PlaneGeometry(radius*2.8,radius*2.8);
    geometry.userData.owned3d=true;
    const material=new T.MeshBasicMaterial({map:texture,color:sequence||element?'#ffffff':color,transparent:true,opacity,depthWrite:false,toneMapped:false,side:T.DoubleSide});
    material.userData.owned3d=true;
    const mesh=new T.Mesh(geometry,material);mesh.rotation.x=-Math.PI/2;
    mesh.userData.impactSize=radius*2.8;
    mesh.userData.impactFamily=element?family:'light';
    mesh.userData.impactCombo=sequence?combo:null;
    mesh.userData.impactFrames=data?.frames??COMBO_IMPACT_FRAMES;
    mesh.userData.impactColumns=data?.columns??4;mesh.userData.impactRows=data?.rows??2;
    mesh.userData.impactProjection=data?.projection??'ground';
    mesh.userData.impactPivots=data?.pivots??COMBO_IMPACT_PIVOTS;
    mesh.userData.impactUV=geometry.attributes.uv.array.slice();mesh.userData.impactFrame=-1;this.frame(mesh,0);return mesh;
  }
  frame(mesh,frame){
    frame=Math.max(0,Math.min(mesh.userData.impactFrames-1,Math.floor(frame)));
    if(mesh.userData.impactFrame===frame)return;
    const uv=mesh.geometry.attributes.uv,base=mesh.userData.impactUV,columns=mesh.userData.impactColumns,rows=mesh.userData.impactRows,col=frame%columns,row=Math.floor(frame/columns);
    const image=mesh.material.map.image,dx=1.5/image.width,dy=1.5/image.height;
    for(let i=0;i<uv.count;i++)uv.setXY(i,col/columns+dx+base[i*2]*(1/columns-2*dx),1-(row+1)/rows+dy+base[i*2+1]*(1/rows-2*dy));
    uv.needsUpdate=true;mesh.userData.impactFrame=frame;
    const pivot=mesh.userData.impactPivots[frame],size=mesh.userData.impactSize;
    mesh.position.x=(.5-pivot.x)*size;mesh.position.z=(.5-pivot.y)*size;
  }
  dispose(){if(this.destroyed)return;this.destroyed=true;this.ready=false;this.sequenceLoading=false;for(const texture of new Set([this.texture,...this.elements.values(),...this.sequences.values()].filter(Boolean)))texture.dispose();this.elements.clear();this.sequences.clear();this.sequenceRequests.clear();}
}
