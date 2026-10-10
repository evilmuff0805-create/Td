import * as T from 'three';
import { preloadArt,heroArt,enemyArt,allyArt,towerArt,structureArt,propArt } from '../render/art.js';
import { LANDMARK_STAGE_ART,landmarkFrame } from './tower-art-data.js';
import { HERO_POSE_ART } from './hero-pose-data.js';
import { COMBAT_POSE_ART } from './combat-pose-data.js';
import { combatPoseRoster } from './combat-pose-roster.js';
import { SKIN_POSE_ART } from './skin-pose-data.js';
import { heroLookRoster,heroLooksKey } from './hero-look-roster.js';
import { skinDef } from '../data/skins.js';
import { SEASON_TREE_ART } from './season-tree-data.js';
import { seasonalTreeIndex } from './seasonal-props.js';

export const FIXED_ART={yi:HERO_POSE_ART.yi.path,towers:'assets/3d/fixed/tower-tiers-v2.webp',winter:'assets/3d/fixed/winter-props-v2.webp'};
const atlases=new Map();
const up=new T.Vector3(0,1,0),right=new T.Vector3(1,0,0),direction=new T.Vector3(),inverse=new T.Quaternion();

// Trim within each cell, never across an adjacent pose. The lower foot centroid
// is the common origin, so different cape silhouettes do not move a character.
export function frameBounds(data,width,height,x,y,w,h,alphaThreshold=48) {
  let left=x+w,top=y+h,right=x-1,bottom=y-1;
  for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)if(data[(yy*width+xx)*4+3]>=alphaThreshold){left=Math.min(left,xx);right=Math.max(right,xx);top=Math.min(top,yy);bottom=Math.max(bottom,yy);}
  if(left>right)return {left:x,top:y,width:w,height:h,anchor:.5};
  let sum=0,count=0;
  for(let yy=Math.max(top,Math.floor(bottom-(bottom-top)*.10));yy<=bottom;yy++)for(let xx=left;xx<=right;xx++)if(data[(yy*width+xx)*4+3]>=96){sum+=xx;count++;}
  return {left,top,width:right-left+1,height:bottom-top+1,anchor:count?T.MathUtils.clamp((sum/count-left)/(right-left+1),.2,.8):.5};
}
// Each pose/building gets its own transparent border. Mipmaps cannot sample a
// neighbour, even where the original sheet has only a one-pixel gutter.
export function isolateFrame(source,frame,createCanvas=()=>document.createElement('canvas')) {
  const padding=12,canvas=createCanvas();canvas.width=frame.width+padding*2;canvas.height=frame.height+padding*2;
  canvas.getContext('2d').drawImage(source,frame.left,frame.top,frame.width,frame.height,padding,padding,frame.width,frame.height);
  return {canvas,frame:{...frame,left:padding,top:padding},sourceBounds:frame};
}
async function atlas(path,columns,rows,layout=null,shared=true) {
  const load=()=>new Promise((resolve,reject)=>{
    const url=path.startsWith('data:')?path:new URL(path,new URL('../../',import.meta.url)).href;
    new T.ImageLoader().load(url,img=>{
      const canvas=document.createElement('canvas');canvas.width=img.width;canvas.height=img.height;
      const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);
      const pixels=layout?.frames?null:ctx.getImageData(0,0,img.width,img.height).data,frames=[];
      if(layout?.frames){
        for(const frame of layout.frames)frames.push({...frame,left:Math.round(frame.left*img.width/layout.width),top:Math.round(frame.top*img.height/layout.height),width:Math.round(frame.width*img.width/layout.width),height:Math.round(frame.height*img.height/layout.height),referenceHeight:frame.referenceHeight*img.height/layout.height});
      }else for(let row=0;row<rows;row++)for(let col=0;col<columns;col++){
        const x=Math.round(layout?layout.x[col]*img.width/layout.width:col*img.width/columns),y=Math.round(layout?layout.y[row]*img.height/layout.height:row*img.height/rows),x1=Math.round(layout?layout.x[col+1]*img.width/layout.width:(col+1)*img.width/columns),y1=Math.round(layout?layout.y[row+1]*img.height/layout.height:(row+1)*img.height/rows);
        frames.push(frameBounds(pixels,img.width,img.height,x,y,x1-x,y1-y,layout?11:48));
      }
      resolve({canvas,frames,width:img.width,height:img.height,isolated:layout?frames.map(frame=>isolateFrame(canvas,frame)):null,poseAtlas:!!layout?.frames});
    },undefined,reject);
  });
  // Combat sheets belong to one battlefield; do not retain all 28 in a global cache.
  if(!shared)return load();
  if(!atlases.has(path))atlases.set(path,load());
  return atlases.get(path);
}

export class FixedBattleArt {
  constructor(world) {
    this.world=world;this.ready=false;this.loading=true;this.coreLoading=true;this.failed=false;this.destroyed=false;this.textures=new Map();this.materials=new Map();this.geometries=new Map();
    this.combatPoses={enemy:{},ally:{}};this.combatGeneration=0;
    this.skinPoses={};this.skinGeneration=0;this.heroLooksKey=null;
    world.renderer.domElement.dataset.fixedArtStatus='loading';
    const landmarks=Object.values(LANDMARK_STAGE_ART).map(layout=>atlas(layout.path,5,4,layout).catch(error=>{console.warn('Landmark stage art unavailable; keeping base illustration.',error.message);return null;}));
    const heroPoses=Promise.all(Object.entries(HERO_POSE_ART).filter(([id])=>id!=='yi').map(async([id,layout])=>[id,await atlas(layout.path,4,4,layout).catch(error=>{console.warn('Hero poses unavailable; keeping base illustration.',id,error.message);return null;})]));
    const trees=atlas(SEASON_TREE_ART.path,3,2,SEASON_TREE_ART).catch(error=>{console.warn('Seasonal trees unavailable; keeping base scenery.',error.message);return null;});
    this.corePromise=Promise.all([preloadArt(),atlas(FIXED_ART.yi,4,4,HERO_POSE_ART.yi),atlas(FIXED_ART.towers,5,2),atlas(FIXED_ART.winter,3,2),...landmarks,heroPoses,trees]).then(([,yi,towers,winter,a,b,poses,trees])=>{
      if(this.destroyed)return;this.yi=yi;this.heroPoses={yi,...Object.fromEntries(poses)};this.towerFrames=towers;this.winter=winter;this.landmarks={a,b};this.seasonTrees=trees;this.ready=true;
      world.renderer.domElement.dataset.seasonTreeArtStatus=trees?'ready':'fallback';
      world.renderer.domElement.dataset.landmarkArtStatus=a&&b?'ready':a||b?'partial':'fallback';
      const poseCount=Object.values(this.heroPoses).filter(Boolean).length;
      world.renderer.domElement.dataset.heroPoseStatus=poseCount===8?'ready':'partial';world.renderer.domElement.dataset.heroPoseCount=String(poseCount);
    }).catch(error=>{this.failed=true;console.warn('Illustrated battle assets unavailable; keeping mesh fallback.',error.message);}).finally(()=>{
      this.coreLoading=false;this.updateLoading();
    });
    this.prepareCombatArt(world.stage,world.combatKinds);
    this.prepareHeroLooks(world.heroLooks);
    const size=64,data=new Uint8Array(size*size*4);
    for(let y=0;y<size;y++)for(let x=0;x<size;x++){const d=Math.hypot((x+.5-size/2)/(size/2),(y+.5-size/2)/(size/2)),i=(y*size+x)*4;data.set([255,255,255,Math.round(Math.pow(Math.max(0,1-d),1.5)*255)],i);}
    this.shadowTexture=new T.DataTexture(data,size,size);this.shadowTexture.needsUpdate=true;
    this.shadowMaterial=new T.MeshBasicMaterial({map:this.shadowTexture,color:'#061725',transparent:true,opacity:.58,depthWrite:false,toneMapped:false});
    this.shadowMaterial.userData.fixedArt=true;
  }
  updateLoading(){
    this.loading=!!(this.coreLoading||this.combatLoading||this.skinLoading);
    if(!this.destroyed)this.world.renderer.domElement.dataset.fixedArtStatus=this.loading?'loading':this.ready?'ready':'fallback';
  }
  releasePoseAtlas(art){
    for(const {canvas}of art?.isolated??[]){
      const texture=this.textures.get(canvas);if(!texture)continue;
      for(const key of [canvas,'shadow:'+texture.uuid]){this.materials.get(key)?.dispose();this.materials.delete(key);}
      for(const [key,geometry]of this.geometries)if(key.startsWith(texture.uuid+':')){geometry.dispose();this.geometries.delete(key);}
      texture.dispose();this.textures.delete(canvas);
    }
  }
  prepareCombatArt(stage,explicit=null){
    const generation=++this.combatGeneration,roster=combatPoseRoster(stage,explicit),requests=[];
    this.combatPoses??={enemy:{},ally:{}};
    for(const side of ['enemy','ally']){
      const wanted=new Set(roster[side]);
      for(const [id,art]of Object.entries(this.combatPoses[side]))if(!wanted.has(id)){this.releasePoseAtlas(art);delete this.combatPoses[side][id];}
      for(const id of wanted){
        const layout=COMBAT_POSE_ART[side][id],existing=this.combatPoses[side][id];
        requests.push(Promise.resolve(existing??(layout?atlas(layout.path,4,4,layout,false):null)).catch(error=>{console.warn('Combat poses unavailable; keeping static illustration.',id,error.message);return null;}).then(art=>({side,id,art})));
      }
    }
    this.combatLoading=true;this.updateLoading();
    this.combatPromise=Promise.all(requests).then(results=>{
      if(this.destroyed||generation!==this.combatGeneration)return;
      this.combatPoses={enemy:{},ally:{}};for(const {side,id,art}of results)this.combatPoses[side][id]=art;
      const count=results.filter(x=>x.art).length,dataset=this.world.renderer.domElement.dataset;
      Object.assign(dataset,{combatPoseStatus:count===results.length?'ready':'partial',combatPoseCount:String(count),combatPoseExpected:String(results.length),combatPoseKinds:results.map(x=>x.id).join(',')});
    }).finally(()=>{if(generation===this.combatGeneration){this.combatLoading=false;this.updateLoading();}});
    this.refreshPromise();
    return this.promise;
  }
  refreshPromise(){
    // Replacing this only when a request starts preserves ready-callback identity.
    this.promise=Promise.all([this.corePromise,this.combatPromise,this.skinPromise]);
  }
  prepareHeroLooks(heroes=[]){
    const key=heroLooksKey(heroes);if(key===this.heroLooksKey)return this.promise;
    this.heroLooksKey=key;
    const generation=this.skinGeneration=(this.skinGeneration??0)+1,roster=heroLookRoster(heroes),wanted=new Set(roster.map(look=>look.skin));
    this.skinPoses??={};
    for(const [id,art]of Object.entries(this.skinPoses))if(!wanted.has(id)){this.releasePoseAtlas(art);delete this.skinPoses[id];}
    this.skinLoading=true;this.updateLoading();
    this.skinPromise=Promise.all(roster.map(async({skin})=>{
      const layout=SKIN_POSE_ART[skin];
      const art=await Promise.resolve(this.skinPoses[skin]??(layout?atlas(layout.path,4,4,layout,false):null)).catch(error=>{console.warn('Costume poses unavailable; keeping base hero poses.',skin,error.message);return null;});
      return {skin,art};
    })).then(results=>{
      if(this.destroyed||generation!==this.skinGeneration)return;
      this.skinPoses=Object.fromEntries(results.map(({skin,art})=>[skin,art]));
      const count=results.filter(x=>x.art).length;
      Object.assign(this.world.renderer.domElement.dataset,{skinPoseStatus:count===results.length?'ready':'partial',skinPoseCount:String(count),skinPoseExpected:String(results.length),skinPoseKinds:key});
    }).finally(()=>{if(generation===this.skinGeneration){this.skinLoading=false;this.updateLoading();}});
    this.refreshPromise();return this.promise;
  }
  texture(source) {
    if(!this.textures.has(source)){const tex=new T.CanvasTexture(source);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=4;tex.generateMipmaps=true;this.textures.set(source,tex);}
    return this.textures.get(source);
  }
  material(source,foreground=false) {
    const key=source;
    if(!this.materials.has(key)) {
      const mat=new T.MeshBasicMaterial({map:this.texture(source),transparent:true,alphaTest:.16,depthWrite:true,toneMapped:false,side:T.DoubleSide});
      mat.userData.fixedArt=true;this.materials.set(key,mat);
    }
    const mat=this.materials.get(key),t=this.world.theme;
    mat.color.set(t.snow?(foreground?'#e5ebff':'#9eb8df'):t.id==='autumn'?'#e7d3c2':foreground?'#f2e6d2':'#bacbd0');
    return mat;
  }
  geometry(source,frame,height,anchor=frame?.anchor??.5) {
    const full=frame??{left:0,top:0,width:source.width,height:source.height},anchorY=full.anchorY??1,key=[this.texture(source).uuid,full.left,full.top,full.width,full.height,height,anchor,anchorY,full.referenceHeight].join(':');
    if(!this.geometries.has(key)) {
      const h=full.referenceHeight?height*full.height/full.referenceHeight:height,w=h*full.width/full.height,g=new T.PlaneGeometry(w,h);g.translate(w*(.5-anchor),h*(anchorY-.5),0);
      const uv=g.attributes.uv;
      for(let i=0;i<uv.count;i++)uv.setXY(i,(full.left+uv.getX(i)*full.width)/source.width,1-(full.top+(1-uv.getY(i))*full.height)/source.height);
      this.geometries.set(key,g);
    }
    return this.geometries.get(key);
  }
  image(art,height,frame=null,foreground=false) {
    if(!art)return null;const source=art.img??art.canvas??art;
    const obj=new T.Mesh(this.geometry(source,frame,height,art.ax??frame?.anchor??.5),this.material(source,foreground));
    obj.quaternion.copy(this.world.camera.quaternion);obj.userData.fixedArt=true;obj.userData.artHeight=height;
    obj.castShadow=false;obj.receiveShadow=false;return obj;
  }
  shadow(parent,width=1,depth=width*.65) {
    const g=new T.PlaneGeometry(width,depth);g.rotateX(-Math.PI/2);g.userData.owned3d=true;
    const obj=new T.Mesh(g,this.shadowMaterial);obj.position.y=.039;obj.raycast=()=>{};parent.add(obj);return obj;
  }
  castImage(parent,image) {
    const obj=new T.Mesh(image.geometry,this.imageShadowMaterial(image));obj.matrixAutoUpdate=false;obj.raycast=()=>{};obj.userData.fixedArt=true;parent.add(obj);this.projectShadow(obj,image);return obj;
  }
  imageShadowMaterial(image) {
    const key='shadow:'+image.material.map.uuid;
    if(!this.materials.has(key)){
      const mat=new T.MeshBasicMaterial({map:image.material.map,color:'#07172e',transparent:true,opacity:.46,alphaTest:.04,depthWrite:false,toneMapped:false,side:T.DoubleSide});mat.userData.fixedArt=true;this.materials.set(key,mat);
    }
    return this.materials.get(key);
  }
  projectShadow(shadow,image,root=null) {
    const project=new T.Matrix4().set(1,.5,0,0,0,0,0,.042,0,-.75,1,0,0,0,0,1),rotation=new T.Matrix4().makeRotationFromQuaternion(this.world.camera.quaternion).scale(image.scale);
    shadow.matrix.copy(project).multiply(rotation);
    if(root)shadow.matrix.premultiply(new T.Matrix4().makeRotationFromQuaternion(root.quaternion.clone().invert()));
    shadow.geometry=image.geometry;shadow.material=this.imageShadowMaterial(image);shadow.matrixWorldNeedsUpdate=true;
  }
  prop(kind,height=2,variation=0) {
    const index={snowPine:variation>=.5?1:0,snowRock:2,hanok:variation>=.5?4:3,cliff:5}[kind],winter=this.world.theme.snow&&index!==undefined;
    const treeIndex=seasonalTreeIndex(this.world.theme,kind,variation),tree=treeIndex===null?null:this.seasonTrees?.isolated?.[treeIndex];
    const art=tree?.canvas??(winter?this.winter:kind==='gate'?structureArt('gate'):propArt(kind==='blossom'||kind==='broadleaf'?'pine':kind));if(!art)return new T.Group();
    const root=new T.Group(),image=this.image(art,height,tree?.frame??(winter?art.frames[index]:null));root.add(image);this.shadow(root,height*.55,height*.30);this.castImage(root,image);
    if(tree)root.userData.seasonTree={kind,index:treeIndex};return root;
  }
  hideModel(root) {for(const child of root.children)if(child!==root.userData.hp&&child!==root.userData.ownerRing)child.visible=false;}
  unitArt(entity,hero,ally) {
    const kind=hero?entity.heroId:ally?entity.kind:entity.type;
    const costume=hero&&skinDef(kind,entity.skin)?this.skinPoses?.[entity.skin]:null;
    const poses=hero?(costume??this.heroPoses?.[kind]??(kind==='yi'?this.yi:null)):this.combatPoses?.[ally?'ally':'enemy']?.[kind];
    return poses??(hero?heroArt(kind,entity.skin):ally?allyArt(kind):enemyArt(kind));
  }
  unitProxy(entity,ally=false) {
    // Normal illustrated troops need a logical root and muzzle, not an invisible
    // articulated mesh. Missing portraits still use the existing model fallback.
    if(!this.ready||!this.unitArt(entity,false,ally))return null;
    const root=new T.Group(),rig=new T.Group(),socket=new T.Group();root.add(rig,socket);
    socket.userData.muzzle=new T.Vector3();root.userData.rig=rig;root.userData.weapons=[null,socket];root.userData.illustrationProxy=true;
    return root;
  }
  attachUnit(root,entity,hero,ally) {
    if(!this.ready||root.userData.fixedImage)return;
    const kind=hero?entity.heroId:ally?entity.kind:entity.type;
    const art=this.unitArt(entity,hero,ally);
    if(!art)return;const height=hero?1.85:['ram','turtle','courier','cavalry'].includes(kind)?1.5:1.36;
    this.hideModel(root);
    const directional=!!art.poseAtlas||hero&&art===this.yi,first=directional?art.isolated?.[0]:null;
    const image=this.image(first??art,height,first?.frame??(directional?art.frames[0]:null),true);
    image.material=image.material.clone();image.material.userData.owned3d=true;root.add(image);
    const hint=hero?new T.Mesh(image.geometry,new T.MeshBasicMaterial({map:image.material.map,color:'#7cb4e6',transparent:true,opacity:.5,alphaTest:.18,depthTest:true,depthFunc:T.GreaterDepth,depthWrite:false,toneMapped:false,side:T.DoubleSide})):null;
    if(hint){hint.material.userData.owned3d=true;hint.renderOrder=30;hint.raycast=()=>{};root.add(hint);}
    this.shadow(root,hero?.85:.65,.5);const shadow=this.castImage(root,image);
    root.userData.fixedImage={image,hint,height,art,kind,shadow,directional,faction:hero?'hero':ally?'ally':'enemy'};root.userData.labelHeight=height+.18;
  }
  attachTower(root,type,tier,branch) {
    if(!this.ready||root.userData.fixedImage)return;
    const special=['sungnyemun','hwaseong'].includes(type),location=landmarkFrame(type,tier,branch);
    const column=tier===4?(branch==='B'?4:3):tier-1,index=column+(type==='hwaseong'?5:0);
    const isolated=location?this.landmarks?.[location.sheet]?.isolated[location.index]:null;
    const art=special?this.towerFrames:isolated??towerArt(type);if(!art)return;
    const frame=special?art.frames[index]:isolated?.frame??null,dedicated=special||!!isolated;
    // Upgrades change the structure and decoration, never the display scale.
    const height=1.2;
    this.hideModel(root);const image=this.image(art,height,frame);root.add(image);this.shadow(root,1,.63);this.castImage(root,image);
    root.userData.fixedImage={image,height,kind:type,dedicated,frameIndex:special?index:location?.index};root.userData.labelHeight=height+.2;
    // A missing optional sheet still uses the previous illustration and markers.
    if(!dedicated&&tier>1){for(let i=0;i<tier-1;i++){const pennant=this.prop('jangseung',.28);pennant.position.set((i-(tier-2)/2)*.22,0,.25);root.add(pennant);}}
  }
  updateUnit(root,entity,moving,attack,time) {
    const d=root.userData.fixedImage;if(!d)return;
    const {image,hint,art,height}=d;
    inverse.copy(root.quaternion).invert();image.quaternion.copy(this.world.camera.quaternion).premultiply(inverse);
    const screenRight=right.clone().applyQuaternion(this.world.camera.quaternion),screenUp=up.clone().applyQuaternion(this.world.camera.quaternion);
    direction.set(Math.sin(root.rotation.y),0,Math.cos(root.rotation.y));
    const dx=direction.dot(screenRight),dy=direction.dot(screenUp);
    if(root.userData.illustrationProxy)root.userData.weapons[1].position.copy(screenUp).multiplyScalar(height*.6).addScaledVector(screenRight,dx<0?-.18:.18).applyQuaternion(inverse);
    if(d.directional){
      const col=dy>=0?(dx>=0?1:2):(dx>=0?0:3),row=attack>0?3:moving?1+Math.floor(time*5.5+(root.userData.phase??0))%2:0,index=row*4+col;
      const isolated=art.isolated?.[index],source=isolated?.canvas??art.canvas,frame=isolated?.frame??art.frames[index];
      image.geometry=this.geometry(source,frame,height);image.material.map=this.texture(source);
      image.material.color.copy(this.material(source,true).color);
      image.scale.x=1;
      d.pose=['idle','walk-left','walk-right','attack'][row];d.facing=col;d.poseIndex=index;
      if(d.kind==='yi'){this.world.renderer.domElement.dataset.yiPose=d.pose;this.world.renderer.domElement.dataset.yiFacing=String(col);}
      if(d.faction!=='hero'){const dataset=this.world.renderer.domElement.dataset;dataset.combatPoseActive='true';dataset.combatPoseLastKind=d.kind;dataset.combatPoseLastState=d.pose;}
    }else image.scale.x=dx<0?-1:1;
    image.position.y=moving?Math.abs(Math.sin(time*8+root.userData.phase))*.025:0;
    this.projectShadow(d.shadow,image,root);
    image.material.opacity=entity.stealth&&!entity.revealed?.25:1;
    if(hint){hint.geometry=image.geometry;hint.material.map=image.material.map;hint.quaternion.copy(image.quaternion);hint.position.copy(image.position);hint.scale.copy(image.scale);hint.material.color.set(entity.owner===1?'#efaa96':'#7cb4e6');hint.visible=!entity.dead;}
    if(root.userData.hp)root.userData.hp.position.copy(screenUp).multiplyScalar(height+.13).applyQuaternion(inverse);
    this.world.renderer.domElement.dataset.fixedArt='true';
  }
  anchor(root,pad=.12) {
    const d=root?.userData.fixedImage;if(!d)return null;
    return new T.Vector3(0,d.height+pad,0).applyQuaternion(this.world.camera.quaternion).add(root.position);
  }
  towerMuzzle(root) {
    const d=root?.userData.fixedImage;if(!d)return null;
    return this.anchor(root,-d.height*.45);
  }
  dispose() {
    this.destroyed=true;for(const t of this.textures.values())t.dispose();for(const m of this.materials.values())m.dispose();for(const g of this.geometries.values())g.dispose();this.shadowMaterial.dispose();this.shadowTexture.dispose();
  }
}
