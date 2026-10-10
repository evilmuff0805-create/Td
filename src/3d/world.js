import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { MAT, material, mesh, box, ball, cylinder, cone, between, towerModel, animateCharacter, bakeStatic } from './models.js';
import { getMap } from '../sim/map.js';
import { makeRng } from '../sim/rng.js';
import { WINTER_STAGE } from './scenario.js';
import { seasonFor } from './seasons.js';
import { buildBattlefield,seasonalize } from './environment.js';
import { HEROES } from '../data/heroes.js';
import { combatantModel,movingModel,cloneCombatantModel } from './combat-models.js';
import { BattleEffects,impactWarning } from './effects.js';
import { towerTier,towerDisplayStats } from './tower-visuals.js';
import { attachHeroSilhouette, updateHeroSilhouette } from './visibility.js';
import { CrowdRenderer } from './crowd.js';
import { updateMountReins } from './enemy-pose.js';
import { FixedBattleArt } from './fixed-art.js';

function texture(size, paint) {
  const c=document.createElement('canvas');c.width=c.height=size;paint(c.getContext('2d'),size);
  const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;tex.wrapS=tex.wrapT=T.RepeatWrapping;tex.anisotropy=4;return tex;
}
function glowTexture() {return texture(64,(c,s)=>{const g=c.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);g.addColorStop(0,'#fff6cfdd');g.addColorStop(.18,'#ffb84a77');g.addColorStop(.5,'#f68b271c');g.addColorStop(1,'#fc8a1000');c.fillStyle=g;c.fillRect(0,0,s,s);});}

export class WinterWorld {
  constructor(canvas,stage=WINTER_STAGE,season='auto',options={}) {
    this.stage=stage;this.theme=seasonFor(stage,season);
    this.fixedCamera=options.fixedCamera!==false;this.useIllustrations=options.illustrated!==false;
    this.allowBatchCrowd=options.batchCrowd!==false;this.batchCrowd=this.allowBatchCrowd&&!this.useIllustrations;
    this.renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.outputColorSpace=T.SRGBColorSpace;
    this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.15;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFShadowMap;
    this.scene=new T.Scene();this.scene.background=new T.Color(this.theme.sky);this.scene.fog=new T.Fog(this.theme.fog,48,95);
    this.crowd=new CrowdRenderer(this.scene);
    this.unitTemplates=new Map();this.enemyCues=new Map();
    this.camera=new T.OrthographicCamera(-20,20,12,-12,.1,150);
    this.controls=new OrbitControls(this.camera,canvas);this.controls.enableDamping=true;this.controls.dampingFactor=.09;
    this.controls.minZoom=.72;this.controls.maxZoom=3.1;this.controls.minPolarAngle=.4;this.controls.maxPolarAngle=1.2;
    this.controls.enableRotate=!this.fixedCamera;
    this.controls.mouseButtons={LEFT:T.MOUSE.PAN,MIDDLE:T.MOUSE.DOLLY,RIGHT:this.fixedCamera?null:T.MOUSE.ROTATE};
    this.controls.touches={ONE:T.TOUCH.PAN,TWO:this.fixedCamera?T.TOUCH.DOLLY_PAN:T.TOUCH.DOLLY_ROTATE};this.controls.screenSpacePanning=false;
    this.home();this.units=new Map();this.towers=new Map();this.bullets=new Map();this.scenery=new Map();this.corpses=[];this.fires=[];
    this.pickables=[];this.raycaster=new T.Raycaster();this.pointer=new T.Vector2();this.plane=new T.Plane(new T.Vector3(0,1,0),0);
    this.glowTex=glowTexture();this.fx=new BattleEffects(this.scene,this.glowTex,{illustrated:this.useIllustrations});
    this.art=this.useIllustrations?new FixedBattleArt(this):null;
    this.lighting();this.environment();this.weather();
    this.range=new T.Mesh(new T.RingGeometry(.98,1,96),new T.MeshBasicMaterial({color:'#e4c58c',transparent:true,opacity:.55,side:T.DoubleSide,depthWrite:false}));
    this.range.rotation.x=-Math.PI/2;this.range.position.y=.09;this.range.visible=false;this.scene.add(this.range);
    this.marker=new T.Mesh(new T.RingGeometry(.2,.24,40),new T.MeshBasicMaterial({color:'#b9dcf4',transparent:true,opacity:.8,side:T.DoubleSide}));
    this.marker.rotation.x=-Math.PI/2;this.marker.visible=false;this.scene.add(this.marker);
    this.placement=new T.Group();this.scene.add(this.placement);this.placement.visible=false;
    this.placementTile=new T.Mesh(new T.PlaneGeometry(.95,.95),new T.MeshBasicMaterial({color:'#91d9ad',transparent:true,opacity:.35,side:T.DoubleSide,depthWrite:false}));this.placementTile.rotation.x=-Math.PI/2;this.placementTile.position.y=.06;this.placement.add(this.placementTile);
    this.resize();
  }
  lighting() {
    // PBR metal needs reflected surroundings; direct lights alone leave armor black.
    const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(this.renderer);
    this.environmentTarget=pmrem.fromScene(room,.04);this.scene.environment=this.environmentTarget.texture;
    // Scene-owned IBL prevents one battle disposing another scene's reflection.
    this.scene.environmentIntensity=.45;
    room.dispose();pmrem.dispose();
    this.hemi=new T.HemisphereLight(this.theme.hemi,this.theme.bounce,1.5);this.scene.add(this.hemi);
    const moon=new T.DirectionalLight('#c6deff',2.2);moon.position.set(2,20,22);moon.target.position.set(12,0,7);
    moon.castShadow=true;moon.shadow.mapSize.set(2048,2048);moon.shadow.camera.left=-23;moon.shadow.camera.right=23;moon.shadow.camera.top=20;moon.shadow.camera.bottom=-20;moon.shadow.camera.near=.5;moon.shadow.camera.far=70;
    moon.shadow.normalBias=.03;moon.shadow.bias=-.00012;moon.shadow.radius=2;this.scene.add(moon,moon.target);this.moon=moon;
    const fill=new T.DirectionalLight('#7394bc',.6);fill.position.set(30,8,20);this.scene.add(fill);this.fill=fill;this.applySeasonLight();
  }
  home() {
    const c=this.renderer.domElement,portrait=c.clientWidth<c.clientHeight;
    const hero=this.units&&[...this.units.values()].find(o=>o.userData.hero);
    const fallback=getMap(this.stage.id).paths[0].pts[Math.floor(getMap(this.stage.id).paths[0].pts.length*.62)];
    const focus=portrait?(hero?.position||{x:fallback.x,z:fallback.y}):{x:12,z:7};
    this.controls.target.set(focus.x,.1,focus.z);this.camera.position.set(focus.x+17,26,focus.z+26);
    this.camera.zoom=1.12;this.camera.lookAt(this.controls.target);this.camera.updateProjectionMatrix();this.controls.update();
  }
  rotate(direction) {if(this.fixedCamera)return;const offset=this.camera.position.clone().sub(this.controls.target);offset.applyAxisAngle(new T.Vector3(0,1,0),direction*Math.PI/8);this.camera.position.copy(this.controls.target).add(offset);this.controls.update();}
  resize() {const w=this.renderer.domElement.clientWidth,h=this.renderer.domElement.clientHeight,aspect=w/h;
    const half=aspect<1?15:11.4;this.camera.left=-half*aspect;this.camera.right=half*aspect;this.camera.top=half;this.camera.bottom=-half;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);}
  quality(high) {this.highQuality=high;this.renderer.setPixelRatio(high?Math.min(devicePixelRatio,1.5):1);this.renderer.shadowMap.enabled=high;
    this.lampGroup?.traverse(o=>{if(o.isPointLight)o.visible=o.userData.lampIndex<(high?3:1);});this.resize();}
  lamp(x,z,y=1.05,lantern=false) {
    const root=new T.Group();root.position.set(x,0,z);
    if(lantern) {
      cylinder(root,MAT.woodDark,0,y/2,0,.045,y);
      box(root,MAT.woodDark,0,y+.16,0,.29,.4,.29);box(root,MAT.window,0,y+.15,0,.23,.32,.23);
      for(const xx of [-.13,.13]) for(const zz of [-.13,.13]) box(root,MAT.woodDark,xx,y+.15,zz,.025,.36,.025);
      cone(root,MAT.roof,0,y+.43,0,.27,.2);cone(root,MAT.snow,0,y+.46,0,.23,.15);
    } else {
      cylinder(root,MAT.woodDark,0,y*.4,0,.045,y*.8);
      const bowl=new T.CylinderGeometry(.18,.1,.17,8);bowl.userData.owned3d=true;mesh(root,bowl,MAT.black,0,y*.8,0);
      for(let j=0;j<4;j++){const a=j*Math.PI/2;between(root,MAT.black,[Math.cos(a)*.14,y*.78,Math.sin(a)*.14],[Math.cos(a)*.22,y+.13,Math.sin(a)*.22],.016);}
      const flame=cone(root,material('#ffb54b',{emissive:'#ff8637',emissiveIntensity:3,transparent:true,opacity:.95}),0,y+.07,0,.1,.43);flame.rotation.z=.12;
      const core=cone(root,material('#fff0a4',{emissive:'#ffd466',emissiveIntensity:2}),0,y+.015,0,.055,.24);
      this.fires.push({flame,core,phase:x*2+z});
    }
    // Merge timber/lantern parts while retaining independent flame animation.
    const fire=this.fires.at(-1),animated=!lantern&&fire?[fire.flame,fire.core]:[];
    for(const part of animated)root.remove(part);bakeStatic(root);for(const part of animated)root.add(part);
    const light=new T.PointLight('#ffb36b',this.theme.snow?8.5:3,4.2,2);light.position.set(0,y+.22,0);light.userData.lampIndex=this.lampGroup.children.length;light.visible=light.userData.lampIndex<(this.highQuality===false?1:3);root.add(light);
    const pool=new T.Mesh(new T.PlaneGeometry(2.7,2.7),new T.MeshBasicMaterial({map:this.glowTex,color:'#ffb76d',transparent:true,opacity:this.theme.snow?.36:.16,depthWrite:false,blending:T.AdditiveBlending}));
    pool.geometry.userData.owned3d=true;pool.material.userData.owned3d=true;pool.rotation.x=-Math.PI/2;pool.position.y=.045;root.add(pool);
    const halo=new T.Sprite(new T.SpriteMaterial({map:this.glowTex,color:'#ffca88',transparent:true,depthWrite:false,blending:T.AdditiveBlending}));halo.position.set(0,y+.18,0);halo.scale.set(.85,.85,1);root.add(halo);seasonalize(root,this.theme);this.lampGroup.add(root);
  }
  applySeasonLight() {
    const t=this.theme;this.scene.background.set(t.sky);this.scene.fog.color.set(t.fog);this.hemi.color.set(t.hemi);this.hemi.groundColor.set(t.bounce);
    this.hemi.intensity=t.snow?.48:.64;this.scene.environmentIntensity=t.snow?.23:.28;
    this.moon.color.set(t.sun);this.moon.intensity=t.sunPower;this.fill.color.set(t.fill);this.fill.intensity=t.snow?.25:.3;this.renderer.toneMappingExposure=t.exposure;
  }
  environment() {
    const field=buildBattlefield(this.stage,this.theme,this.art?.ready?this.art:null);this.static=field.root;this.water=field.water;this.field=field;
    this.artEnvironmentReady=!!this.art?.ready;
    this.scene.add(this.static,this.water);this.lampGroup=new T.Group();this.scene.add(this.lampGroup);
    for(const args of field.lamps)this.lamp(...args);
  }
  weather() {
    const r=makeRng(209),kind=this.theme.particle,count=kind==='snow'?160:kind==='none'?0:65,p=new Float32Array(count*3);
    for(let i=0;i<count;i++){p[i*3]=r()*34-5;p[i*3+1]=r()*10;p[i*3+2]=r()*24-5;}
    const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(p,3));g.userData.owned3d=true;
    const tex=texture(32,(c,s)=>{const gradient=c.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);gradient.addColorStop(0,'#ffffffff');gradient.addColorStop(.5,'#ffffffaa');gradient.addColorStop(1,'#ffffff00');c.fillStyle=gradient;c.fillRect(0,0,s,s);});
    this.weatherTex=tex;this.snow=new T.Points(g,new T.PointsMaterial({color:kind==='petal'?'#f0c6d3':kind==='leaf'?'#e2ad60':'#edf5ff',size:kind==='snow'?.065:.10,map:tex,transparent:true,opacity:.7,depthWrite:false}));this.scene.add(this.snow);
    this.snow.material.userData.owned3d=true;
  }
  loadStage(stage,season='auto') {
    this.reset();
    for(const object of [this.static,this.water,this.lampGroup,this.snow]) {
      this.scene.remove(object);this.disposeModel(object);
    }
    this.weatherTex.dispose();this.fires=[];this.stage=stage;this.theme=seasonFor(stage,season);this.applySeasonLight();this.environment();this.weather();
    if(this.previewRoot){this.placement.remove(this.previewRoot);this.disposeModel(this.previewRoot,true);this.previewRoot=null;this.previewType=null;}
    this.home();
  }
  health(root,hero=false) {
    const group=new T.Group();const geo=new T.PlaneGeometry(1,1);
    geo.userData.owned3d=true;
    mesh(group,geo,new T.MeshBasicMaterial({color:'#0c1b27',depthTest:false}),0,0,0,.58,.066,1);
    const front=mesh(group,geo,new T.MeshBasicMaterial({color:hero?'#7fc6b2':'#d08676',depthTest:false}),0,0,.001,.52,.038,1);
    group.renderOrder=5;root.add(group);group.position.y=root.userData.labelHeight??(hero?1.7:1.65);
    group.userData.front=front;return group;
  }
  unit(entity,hero,ally=false) {
    const missingArt=this.art?.ready&&!this.art.unitArt(entity,hero,ally);
    const instanced=(this.batchCrowd!==false||missingArt&&this.allowBatchCrowd)&&!hero&&!ally&&!entity.stealth&&!['ram','wall','turtle','courier'].includes(entity.type);
    let root;
    if(instanced) {
      let template=this.unitTemplates.get(entity.type);
      if(!template){template=combatantModel(entity.type);template.traverse(o=>{if(o.geometry?.userData.owned3d)o.geometry.userData.templateShared=true;});this.unitTemplates.set(entity.type,template);}
      root=cloneCombatantModel(template);
    } else root=(!hero?this.art?.unitProxy(entity,ally):null)??combatantModel(hero?entity.heroId:ally?entity.kind:entity.type,hero?entity.skin:null);
    root.userData.phase=(entity.id%13)*.7;root.userData.entity={kind:hero?'hero':ally?'ally':'enemy',id:entity.id};
    if(entity.stealth){root.userData.ghostMaterials=[];root.traverse(o=>{if(o.isMesh){o.material=o.material.clone();o.material.transparent=true;o.material.userData.owned3d=true;root.userData.ghostMaterials.push(o.material);}});}
    if(hero)attachHeroSilhouette(root);
    if(instanced)this.crowd.register(root,entity.type);
    if(hero) {
      const geo=new T.RingGeometry(.22,.27,40);geo.userData.owned3d=true;
      const mat=new T.MeshBasicMaterial({color:entity.owner===1?'#ed9b87':'#8bcbed',transparent:true,opacity:.7,side:T.DoubleSide,depthWrite:false});mat.userData.owned3d=true;
      const ring=new T.Mesh(geo,mat);ring.rotation.x=-Math.PI/2;ring.position.y=.025;ring.raycast=()=>{};root.add(ring);root.userData.ownerRing=ring;
    }
    const hp=this.health(root,hero||ally);root.userData.hp=hp;this.art?.attachUnit(root,entity,hero,ally);this.scene.add(root);this.pickables.push(root);return root;
  }
  sync(game,time,dt,selected) {
    if(this.art?.loading){this.range.visible=false;return;}
    if(this.art?.failed)this.batchCrowd=this.allowBatchCrowd;
    if(this.enemyCues)for(const [id,cue]of this.enemyCues)if(cue.until<=game.time)this.enemyCues.delete(id);
    const activeUnits=new Set();
    for(const [hero,ally,list] of [[true,false,game.heroes],[false,false,game.enemies],[false,true,game.summons]]) for(const e of list) {
      const key=`${hero?'h':ally?'s':'e'}${e.id}`;activeUnits.add(key);let root=this.units.get(key);
      if(!root){root=this.unit(e,hero,ally);this.units.set(key,root);}
      if(e.dead){
        root.userData.deathAt??=game.time;
        const age=game.time-root.userData.deathAt;
        root.userData.hp.visible=false;root.userData.rig.rotation.z=Math.min(1.45,age*4);root.visible=age<1.5;
        if(root.userData.fixedImage){const d=root.userData.fixedImage;d.image.material.opacity=Math.max(0,1-age/1.5);d.image.position.y=-age*.18;if(d.hint)d.hint.visible=false;}
        continue;
      }
      delete root.userData.deathAt;root.visible=true;
      if(root.userData.ghostMaterials)for(const mat of root.userData.ghostMaterials)mat.opacity=e.revealed?1:.23;
      const prev=root.position.clone();root.position.set(e.x,.035,e.y);
      const delta=root.position.clone().sub(prev);
      const move=hero?e.moving:ally?delta.lengthSq()>.00001:!e.blockedBy&&!(e.stunT>0);
      let target=null;
      if(hero||ally){let distance=Infinity;for(const enemy of game.enemies){const d=(enemy.x-e.x)**2+(enemy.y-e.y)**2;if(enemy.hp>0&&d<distance){distance=d;target=enemy;}}}
      const cue=!hero&&!ally?this.enemyCues?.get(e.id):null;
      const angle=cue?.angle??(root.userData.castUntil>game.time?root.userData.castDirection:move&&delta.lengthSq()>.00001?Math.atan2(delta.x,delta.z):target&&Math.hypot(target.x-e.x,target.y-e.y)<4?Math.atan2(target.x-e.x,target.y-e.y):root.rotation.y);
      if(cue?.angle!=null)root.rotation.y=angle;
      else root.rotation.y+=Math.atan2(Math.sin(angle-root.rotation.y),Math.cos(angle-root.rotation.y))*Math.min(1,dt*12);
      let poseTime=time;
      if(!hero&&!ally) {
        if(!(e.stunT>0))root.userData.enemyPoseTime=time;
        poseTime=root.userData.enemyPoseTime??=time;
      }
      if(!root.userData.illustrationProxy)animateCharacter(root,poseTime,move,hero||ally?e.anim:cue?Math.max(0,cue.until-game.time):e.swing||0,dt);
      const hitAge=game.time-(hero?e.hurtT:e.hitT);
      const hit=hitAge>=0&&hitAge<.18?1-hitAge/.18:0;
      root.userData.rig.rotation.z=hit*.11;root.userData.rig.position.z=-hit*.055;
      // The rider's hand moves with hit recoil; connect the reins afterward.
      if(root.userData.horseReins)updateMountReins(root);
      const hp=root.userData.hp,ratio=Math.max(0,e.hp/e.maxHp);hp.visible=hero||ally||ratio<.99;
      if(hero){hp.userData.front.material.color.set(e.owner===1?'#edaa97':'#93d3c3');const ring=root.userData.ownerRing;ring.material.color.set(e.owner===1?'#ed9b87':'#8bcbed');ring.material.opacity=(selected?.kind==='hero'&&game.heroes[selected.h??0]?.id===e.id) ? .9 : .45;}
      hp.quaternion.copy(this.camera.quaternion).premultiply(root.quaternion.clone().invert());
      hp.userData.front.scale.x=.52*ratio;hp.userData.front.position.x=-.26*(1-ratio);
      this.art?.attachUnit(root,e,hero,ally);this.art?.updateUnit(root,e,move,hero||ally?e.anim:cue?Math.max(0,cue.until-game.time):e.swing||0,time);
    }
    for(const [key,root] of this.units) if(!activeUnits.has(key)) {
      this.units.delete(key);this.pickables=this.pickables.filter((p)=>p!==root);root.userData.hp.visible=false;
      this.corpses.push({root,t:0});
    }
    for(let i=this.corpses.length-1;i>=0;i--) {
      const c=this.corpses[i];c.t+=dt;c.root.rotation.z=Math.min(Math.PI/2,c.t*4);c.root.position.y=.03-c.t*.15;c.root.scale.multiplyScalar(Math.pow(.4,dt));
      if(c.t>1.3){this.scene.remove(c.root);this.corpses.splice(i,1);this.disposeCharacter(c.root);}
    }
    this.crowd.update([...this.units.values(),...this.corpses.map(c=>c.root)]);
    const activeTowers=new Set();
    for(const e of game.towers) {
      activeTowers.add(e.id);let item=this.towers.get(e.id);
      const tier=towerTier(e);
      if(!item||item.level!==tier||item.branch!==e.branch) {
        if(item){this.scene.remove(item.root);this.pickables=this.pickables.filter((p)=>p!==item.root);this.disposeModel(item.root);}
        const root=seasonalize(towerModel(e.type,tier,e.branch),this.theme);root.position.set(e.cx,.03,e.cy);root.userData.entity={kind:'tower',id:e.id};
        this.art?.attachTower(root,e.type,tier,e.branch);
        this.scene.add(root);this.pickables.push(root);item={root,level:tier,branch:e.branch};this.towers.set(e.id,item);
      }
      this.art?.attachTower(item.root,e.type,tier,e.branch);
      const gun=item.root.userData.gun;if(gun) {
        gun.rotation.y=Math.PI/2-e.angle;const recoil=Math.max(0,e.flash)/.15*.07;
        gun.position.x=-Math.sin(gun.rotation.y)*recoil;gun.position.z=gun.userData.restZ-Math.cos(gun.rotation.y)*recoil;
      }
    }
    for(const [id,item] of this.towers) if(!activeTowers.has(id)){this.scene.remove(item.root);this.pickables=this.pickables.filter((p)=>p!==item.root);this.disposeModel(item.root);this.towers.delete(id);}
    this.camera.updateMatrixWorld();
    for(const item of this.towers.values())item.root.updateMatrixWorld(true);
    for(const hero of game.heroes)updateHeroSilhouette(this.units.get(`h${hero.id}`),hero,game.towers,{camera:this.camera,models:this.towers});
    this.projectiles(game);this.combatScenery(game,time,dt);
    if(selected?.kind==='hero') {const h=game.heroes[selected.h??0];this.range.position.set(h.x,.075,h.y);this.range.scale.setScalar(HEROES[h.heroId].range);this.range.visible=!h.dead;}
    else if(selected?.kind==='tower') {const t=game.towers.find((o)=>o.id===selected.id);this.range.visible=!!t;if(t){this.range.position.set(t.cx,.075,t.cy);this.range.scale.setScalar(towerDisplayStats(t,game).range);}}
    else this.range.visible=false;
  }
  disposeModel(root,allMaterials=false) {
    const gs=new Set(),ms=new Set();
    root.traverse((o)=>{if(o.geometry?.userData.owned3d&&!o.geometry.userData.crowdShared&&!o.geometry.userData.templateShared)gs.add(o.geometry);if(o.material&&(allMaterials||o.material.userData.owned3d||o.material.isSpriteMaterial||o.parent===root.userData.hp))ms.add(o.material);});
    for(const g of gs)g.dispose();for(const m of ms)m.dispose();
  }
  disposeCharacter(root){this.disposeModel(root);if(root.userData.cape&&!root.userData.cape.geometry.userData.owned3d)root.userData.cape.geometry.dispose();}
  combatScenery(game,time,dt) {
    const active=new Set();
    for(const tower of game.towers)for(let i=0;i<tower.beam.length;i++) {
      const enemy=game.enemies.find(e=>e.id===tower.beam[i]);if(!enemy)continue;
      const key=`b${tower.id}-${i}`;active.add(key);let beam=this.scenery.get(key);
      if(!beam) {
        const geo=new T.BufferGeometry();geo.setAttribute('position',new T.BufferAttribute(new Float32Array(6),3));geo.userData.owned3d=true;
        const mat=new T.LineBasicMaterial({color:'#ffe8a4',transparent:true,opacity:.85,depthWrite:false,toneMapped:false});mat.userData.owned3d=true;
        beam=new T.Line(geo,mat);beam.frustumCulled=false;this.scene.add(beam);this.scenery.set(key,beam);
      }
      const muzzle=this.art?.towerMuzzle(this.towers.get(tower.id)?.root),p=beam.geometry.attributes.position;
      p.setXYZ(0,muzzle?.x??tower.cx,muzzle?.y??(1.2+towerTier(tower)*.1),muzzle?.z??tower.cy);p.setXYZ(1,enemy.x,.8,enemy.y);p.needsUpdate=true;
    }
    for(const mover of game.movers) {
      const key=`m${mover.id}`;active.add(key);let root=this.scenery.get(key);
      if(!root){root=this.art?.unitProxy(mover,true)??movingModel(mover.kind);root.userData.phase=(mover.id%13)*.7;this.scene.add(root);this.scenery.set(key,root);}
      root.position.set(mover.x,.05,mover.y);root.rotation.y=Math.atan2(mover.dx,mover.dy);
      if(!root.userData.illustrationProxy)animateCharacter(root,time,true,0,dt);
      this.art?.attachUnit(root,mover,false,true);this.art?.updateUnit(root,mover,true,0,time);
    }
    for(const zone of game.zones) {
      const key=`z${zone.id}`;active.add(key);let root=this.scenery.get(key);
      if(root&&root.userData.paintedZone!==!!this.fx.art?.ready){this.scene.remove(root);this.disposeModel(root);this.scenery.delete(key);root=null;}
      if(!root) {
        root=this.fx.zone(zone.kind,zone.r);root.position.set(zone.x,.075,zone.y);this.scene.add(root);this.scenery.set(key,root);
      }
      this.fx.updateZone(root,zone,time);
    }
    for(const p of game.projectiles)if(p.mode==='drop'&&['bomb','meteor','hangul','thunder','bigshell'].includes(p.kind)) {
      const key=`p${p.id}`;active.add(key);let root=this.scenery.get(key);
      if(!root){root=impactWarning(p.hit?.single ? .8 : (p.hit?.r??.5),p.kind==='thunder'?'#acdafa':p.kind==='hangul'?'#d6dbae':'#e9ad79');this.scene.add(root);this.scenery.set(key,root);}
      root.position.set(p.x,.075,p.y);root.userData.progress.scale.setScalar(Math.max(.05,1-(p.k||0)));
    }
    for(const [key,root] of this.scenery)if(!active.has(key)){this.scene.remove(root);this.disposeModel(root);this.scenery.delete(key);}
  }
  projectiles(game) {
    const active=new Set();
    for(const p of game.projectiles) {
      active.add(p.id);let obj=this.bullets.get(p.id);
      if(!obj) {
        obj=new T.Group();
        if(p.kind==='arrow'||p.kind==='bolt') {
          const shaft=cylinder(obj,MAT.wood,0,0,0,.012,.38);shaft.rotation.x=Math.PI/2;
          const tip=cone(obj,MAT.steel,0,0,.22,.028,.1);tip.rotation.x=Math.PI/2;
          box(obj,MAT.snow,0,0,-.15,.08,.018,.08);
        } else if(p.kind==='rocket') {
          const shaft=cylinder(obj,MAT.wood,0,0,0,.035,.46);shaft.rotation.x=Math.PI/2;
          const tip=cone(obj,MAT.steel,0,0,.29,.055,.16);tip.rotation.x=Math.PI/2;
          for(let i=0;i<3;i++){const fin=box(obj,MAT.red,0,0,-.18,.13,.018,.16);fin.rotation.z=i*Math.PI/3;}
          const flame=cone(obj,material('#ffd484',{emissive:'#ff9b30',emissiveIntensity:2,transparent:true,opacity:.9}),0,0,-.46,.06,.42);flame.rotation.x=-Math.PI/2;
          const halo=new T.Sprite(new T.SpriteMaterial({map:this.glowTex,color:'#ff9b42',transparent:true,depthWrite:false,blending:T.AdditiveBlending}));halo.position.z=-.36;halo.scale.set(.65,.65,1);obj.add(halo);
        } else {
          const color=['ice','frost'].includes(p.kind)?'#a5deed':['orb','star','hangul','garlic'].includes(p.kind)?'#d6d7a0':p.kind==='meteor'?'#ffb272':'#ff984f';
          if(['stone','meteor','bigshell','bomb'].includes(p.kind))mesh(obj,'rock',p.kind==='meteor'?MAT.gold:MAT.stone,0,0,0,p.kind==='bigshell'?.16:.12);
          else ball(obj,['orb','star','ice','frost','hangul','garlic'].includes(p.kind)?material(color,{emissive:color,emissiveIntensity:.7}):MAT.black,0,0,0,.07);
          const halo=new T.Sprite(new T.SpriteMaterial({map:this.glowTex,color,transparent:true,depthWrite:false,blending:T.AdditiveBlending}));halo.scale.set(.32,.32,1);obj.add(halo);
        }
        // Match the visible illustration, retaining the mesh muzzle for fallback.
        const towerRoot=p.src?.kind==='tower'?this.towers.get(p.src.ref?.id??p.src.id)?.root:null;
        const illustratedMuzzle=this.art?.towerMuzzle(towerRoot),gun=towerRoot?.userData.gun;
        if(p.mode==='lob'&&(illustratedMuzzle||gun)) {
          const muzzle=illustratedMuzzle??gun.localToWorld(gun.userData.muzzle.clone());
          obj.userData.launch={height:muzzle.y,dx:muzzle.x-p.sx,dz:muzzle.z-p.sy};
        }
        if(p.mode==='homing'&&p.src?.kind==='tower') {
          const target=game.enemies.find(e=>e.id===p.target);
          if((illustratedMuzzle||towerRoot?.userData.arrowHeight)&&target)obj.userData.arrow={height:illustratedMuzzle?.y??(towerRoot.userData.arrowHeight+.03),dx:illustratedMuzzle?illustratedMuzzle.x-p.x:0,dz:illustratedMuzzle?illustratedMuzzle.z-p.y:0,distance:Math.max(.01,Math.hypot(target.x-p.x,target.y-p.y))};
        }
        if(p.mode==='homing'&&p.src?.kind==='hero'&&!p.chained) {
          const root=this.units?.get(`h${p.src.ref?.id??p.src.id}`),socket=root?.userData.weapons?.[1],target=game.enemies.find(e=>e.id===p.target);
          if(socket?.userData.muzzle&&target) {
            const muzzle=socket.localToWorld(socket.userData.muzzle.clone());
            obj.userData.arrow={height:muzzle.y,dx:muzzle.x-p.x,dz:muzzle.z-p.y,distance:Math.max(.01,Math.hypot(target.x-p.x,target.y-p.y))};
          }
        }
        this.scene.add(obj);this.bullets.set(p.id,obj);
      }
      const k=p.k||0,launch=obj.userData.launch;
      let y=p.mode==='lob'?(launch?.height??.35)*(1-k)+.35*k+Math.sin(k*Math.PI)*2.6:p.mode==='drop'?.3+(1-k)*6:.9;
      let handX=0,handZ=0;
      if(obj.userData.arrow) {
        const target=game.enemies.find(e=>e.id===p.target),arrow=obj.userData.arrow;
        if(target) {
          const remaining=Math.min(1,Math.hypot(target.x-p.x,target.y-p.y)/arrow.distance);
          y=.8+(arrow.height-.8)*remaining;handX=(arrow.dx??0)*remaining;handZ=(arrow.dz??0)*remaining;
        }
      }
      const px=(p.mode==='drop'&&p.sx!==undefined?p.sx+(p.x-p.sx)*k:p.x)+(launch?.dx??0)*(1-k)+handX,pz=(p.mode==='drop'&&p.sy!==undefined?p.sy+(p.y-p.sy)*k:p.y)+(launch?.dz??0)*(1-k)+handZ;
      const delta=new T.Vector3(px,y,pz).sub(obj.position);
      if(obj.userData.placed&&delta.lengthSq()>.000001)obj.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),delta.normalize());
      obj.position.set(px,y,pz);obj.userData.placed=true;
    }
    for(const [id,obj] of this.bullets) if(!active.has(id)){this.scene.remove(obj);this.disposeModel(obj);this.bullets.delete(id);}
  }
  cueEnemies(events,time) {
    this.enemyCues??=new Map();
    for(const e of events)if(e.enemy!=null&&['shot','enemyStrike','enemyHeal'].includes(e.k)) {
      const priority=e.k==='shot'?3:e.k==='enemyHeal'?2:1,previous=this.enemyCues.get(e.enemy);
      // Ranged and blocked melee attacks can both occur in one simulation tick.
      if(previous?.until>time&&previous.priority>priority)continue;
      const aimed=Number.isFinite(e.x2)&&Number.isFinite(e.y2);
      this.enemyCues.set(e.enemy,{until:time+.25,angle:aimed?Math.atan2(e.x2-e.x1,e.y2-e.y1):null,priority});
    }
  }
  firingLine(e) {
    const key=e.enemy!=null?`e${e.enemy}`:e.caster!=null?`h${e.caster}`:null;
    const socket=key?this.units?.get(key)?.userData.weapons?.[1]:null;
    const muzzle=socket?.userData.muzzle?socket.localToWorld(socket.userData.muzzle.clone()):null;
    this.fx.line(muzzle?.x??e.x1,muzzle?.z??e.y1,e.x2,e.y2,e.c??(e.k==='bolt'?'#b9e7ff':'#f1ca82'),e.k==='snipe'?.4:.16,e.k==='bolt',muzzle?.y??.8);
  }
  effect(x,z,r=1,color='#eac891',kind='impact') {this.fx.impact(x,z,r,color,kind);}
  faceHero(angle,time,id) {const root=[...this.units.values()].find(o=>o.userData.hero&&(id===undefined||o.userData.entity.id===id));if(root){root.userData.castDirection=Math.PI/2-angle;root.userData.castUntil=time+.6;root.rotation.y=root.userData.castDirection;}}
  aim(x,y) {
    const rect=this.renderer.domElement.getBoundingClientRect();this.pointer.set((x-rect.left)/rect.width*2-1,-(y-rect.top)/rect.height*2+1);
    this.raycaster.setFromCamera(this.pointer,this.camera);
    const hit=this.raycaster.ray.intersectPlane(this.plane,new T.Vector3());
    let entity=null;
    for(const hit of this.raycaster.intersectObjects(this.pickables,true)) {
      let visible=true;for(let o=hit.object;o;o=o.parent)if(!o.visible&&!(o===hit.object&&o.userData.crowdPick)){visible=false;break;}if(!visible)continue;
      if(hit.object.userData.fixedArt&&hit.uv){const map=hit.object.material.map,source=map?.image;if(source?.getContext){const px=Math.max(0,Math.min(source.width-1,Math.floor(hit.uv.x*source.width))),py=Math.max(0,Math.min(source.height-1,Math.floor((1-hit.uv.y)*source.height)));if(source.getContext('2d').getImageData(px,py,1,1).data[3]<48)continue;}}
      let obj=hit.object;while(obj&&!obj.userData.entity)obj=obj.parent;
      if(obj){entity=obj.userData.entity;break;}
    }
    return {point:hit,entity};
  }
  buildPreview(type,point,valid) {
    this.placement.visible=!!(type&&point);
    if(!this.placement.visible)return;
    if(this.previewType!==type||this.art?.ready&&!this.previewRoot?.userData.fixedImage) {
      if(this.previewRoot){this.placement.remove(this.previewRoot);this.disposeModel(this.previewRoot,true);}
      const root=seasonalize(towerModel(type),this.theme);this.art?.attachTower(root,type,1,null);root.traverse((o)=>{if(o.isMesh){o.material=o.material.clone();o.material.transparent=true;o.material.opacity=.36;o.material.depthWrite=false;o.castShadow=false;}});
      this.placement.add(root);this.previewRoot=root;this.previewType=type;
    }
    this.placement.position.set(Math.floor(point.x)+.5,0,Math.floor(point.z)+.5);this.placementTile.material.color.set(valid?'#80d7a3':'#dc786d');
  }
  markMove(x,z) {this.marker.position.set(x,.075,z);this.marker.visible=true;this.markerLife=1.8;}
  project(x,y,z) {const p=new T.Vector3(x,y,z).project(this.camera);const c=this.renderer.domElement;return {x:(p.x*.5+.5)*c.clientWidth,y:(-.5*p.y+.5)*c.clientHeight,visible:p.z>=-1&&p.z<=1};}
  draw(time,dt) {
    this.renderer.domElement.dataset.effectArtStatus=this.fx.art?.ready?'ready':this.fx.art?.failed?'fallback':this.fx.art?'loading':'off';
    if(this.art?.ready&&!this.artEnvironmentReady){
      for(const root of [this.static,this.water,this.lampGroup]){this.scene.remove(root);this.disposeModel(root);}
      this.fires=[];this.environment();
    }
    this.controls.update();
    // Keep panning bounded to the fortress plateau.
    const t=this.controls.target;const dx=T.MathUtils.clamp(t.x,2,22)-t.x,dz=T.MathUtils.clamp(t.z,1,13)-t.z;
    if(dx||dz){t.x+=dx;t.z+=dz;this.camera.position.x+=dx;this.camera.position.z+=dz;}
    const p=this.snow.geometry.attributes.position;
    for(let i=0;i<p.count;i++){p.setY(i,p.getY(i)-dt*(.27+(i%5)*.04));p.setX(i,p.getX(i)+dt*(this.theme.snow?.09:.16+Math.sin(time*.7+i)*.13));if(p.getY(i)<0)p.setY(i,11);if(p.getX(i)>29)p.setX(i,-5);}p.needsUpdate=true;
    this.water.position.y=Math.sin(time*.75)*.009;
    for(const f of this.fires){f.flame.scale.y=.43*(1+Math.sin(time*9+f.phase)*.17);f.flame.rotation.z=Math.sin(time*6+f.phase)*.14;}
    if(this.markerLife>0){this.markerLife-=dt;this.marker.scale.setScalar(1+Math.sin(time*6)*.1);this.marker.material.opacity=Math.min(.8,this.markerLife);if(this.markerLife<=0)this.marker.visible=false;}
    this.renderer.render(this.scene,this.camera);
  }
  reset() {
    this.enemyCues?.clear();
    for(const obj of [...this.units.values(),...this.corpses.map((c)=>c.root)]){this.scene.remove(obj);this.disposeCharacter(obj);}
    for(const t of this.towers.values()){this.scene.remove(t.root);this.disposeModel(t.root);}
    for(const obj of this.bullets.values()){this.scene.remove(obj);this.disposeModel(obj);}
    for(const obj of this.scenery.values()){this.scene.remove(obj);this.disposeModel(obj);}this.scenery.clear();
    this.fx.reset();
    this.crowd.reset();
    this.units.clear();this.towers.clear();this.bullets.clear();this.corpses=[];this.pickables=[];
    this.placement.visible=false;this.range.visible=false;this.marker.visible=false;
  }
  destroy() {
    if(this.destroyed)return;this.destroyed=true;
    this.reset();this.fx.destroy();this.controls.dispose();
    for(const root of [this.static,this.water,this.lampGroup,this.snow])this.disposeModel(root);
    for(const root of [this.range,this.marker,this.placement])this.disposeModel(root,true);
    this.range.geometry.dispose();this.marker.geometry.dispose();this.placementTile.geometry.dispose();
    this.weatherTex.dispose();this.glowTex.dispose();this.moon.shadow.dispose();
    const templateGeometry=new Set();for(const root of this.unitTemplates.values())root.traverse(o=>{if(o.geometry?.userData.owned3d||o===root.userData.cape)templateGeometry.add(o.geometry);});for(const geo of templateGeometry)geo.dispose();this.unitTemplates.clear();
    this.art?.dispose();this.environmentTarget.dispose();this.scene.clear();this.renderer.dispose();this.renderer.forceContextLoss();
  }
}
