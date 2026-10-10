import * as T from 'three';
import { MAT, material, mesh, box, ball, cylinder, cone, between, bakeStatic, character, animateCharacter,fence } from './models.js';
import { skinDef, GOLD_LOOK } from '../data/skins.js';

// Clone bones without serializing Object3D references in userData. Rigid
// geometry stays shared; each cloth simulation owns its deformable vertices.
export function cloneCombatantModel(template) {
  const nodes=new Map();
  const copyNode=source=>{
    const copy=source.isMesh?new T.Mesh(source.geometry,source.material):new T.Group();
    nodes.set(source,copy);copy.position.copy(source.position);copy.quaternion.copy(source.quaternion);copy.scale.copy(source.scale);
    copy.name=source.name;copy.visible=source.visible;copy.castShadow=source.castShadow;copy.receiveShadow=source.receiveShadow;copy.renderOrder=source.renderOrder;
    for(const child of source.children)copy.add(copyNode(child));
    return copy;
  };
  const root=copyNode(template);
  const references=value=>{
    if(nodes.has(value))return nodes.get(value);
    if(Array.isArray(value))return value.map(references);
    if(ArrayBuffer.isView(value))return value.slice();
    if(value&&Object.getPrototypeOf(value)===Object.prototype)return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,references(v)]));
    return value;
  };
  for(const [source,copy] of nodes)copy.userData=references(source.userData);
  if(root.userData.cape) {
    root.userData.cape.geometry=root.userData.cape.geometry.clone();
    root.userData.cape.geometry.userData={owned3d:true};
  }
  return root;
}

function wheel(g,x,z,r=.22) {
  const w=new T.Group();w.position.set(x,r,z);g.add(w);
  cylinder(w,MAT.woodDark,0,0,0,r,.08).rotation.z=Math.PI/2;
  cylinder(w,MAT.steel,x<0?-.05:.05,0,0,r*.78,.025).rotation.z=Math.PI/2;
  for(let i=0;i<4;i++){const a=i*Math.PI/4;between(w,MAT.wood,[0,Math.sin(a)*r,Math.cos(a)*r],[0,-Math.sin(a)*r,-Math.cos(a)*r],.02);}
  return bakeStatic(w);
}
export function movingModel(kind) {
  const root=new T.Group(),rig=new T.Group(),wheels=[];root.add(rig);let ramBeam=null;
  if(kind==='wall') {
    for(let i=0;i<7;i++){const x=(i-3)*.18;between(rig,MAT.woodDark,[x,.04,0],[x,.85,.15],.06);cone(rig,MAT.wood,x,.94,.17,.065,.22);}
    for(const y of [.25,.65])box(rig,MAT.wood,0,y,.04,1.34,.08,.1);
  } else if(kind==='ram') {
    for(const x of [-.45,.45])for(const z of [-.57,.57])wheels.push(wheel(root,x,z));
    box(rig,MAT.woodDark,0,.38,0,.76,.16,1.4);
    for(const x of [-.33,.33])for(const z of [-.5,.5])between(rig,MAT.wood,[x,.4,z],[x,1.25,z],.045);
    ramBeam=new T.Group();rig.add(ramBeam);
    const log=cylinder(ramBeam,MAT.wood,0,.75,.12,.17,1.8);log.rotation.x=Math.PI/2;
    ball(ramBeam,MAT.steel,0,.75,1.05,.21,.2,.2);
    for(const z of [-.58,-.28,.38,.76])cylinder(ramBeam,MAT.steel,0,.75,z,.179,.055).rotation.x=Math.PI/2;
    for(const s of [-1,1])box(ramBeam,MAT.steel,s*.10,.75,1.17,.055,.21,.08);
    for(const z of [-.45,.45])between(rig,MAT.rope,[0,1.3,z],[0,.8,z],.016);
    for(const side of [-1,1]){const canopy=box(rig,MAT.woodDark,side*.25,1.3,0,.61,.08,1.65);canopy.rotation.z=side*-.36;}
    for(let j=0;j<4;j++)box(rig,MAT.steel,0,1.4,(j-1.5)*.42,.74,.055,.07);
    for(const s of [-1,1])for(let j=0;j<7;j++) {
      const plank=mesh(rig,'bevel',MAT.wood,s*.25,1.31,(j-3)*.23,.60,.045,.21);plank.rotation.z=-s*.36;
      for(const z of [-.55,.55])ball(rig,MAT.steel,s*.48,.38+j*.025,z,.016);
    }
  } else if(kind==='turtle') {
    mesh(rig,'sphere',MAT.woodDark,0,.3,0,.66,.27,1.18);box(rig,MAT.wood,0,.45,0,1.15,.16,1.85);
    const shell=material('#627878',{roughness:.6,metalness:.25});mesh(rig,'sphere',shell,0,.69,-.08,.59,.42,.98);
    for(let i=0;i<5;i++)for(let j=0;j<3;j++){const x=(j-1)*.3,z=(i-2)*.31;cone(rig,MAT.steel,x,1.06-Math.abs(x)*.3,z,.035,.15);}
    for(const side of [-1,1])for(let i=0;i<4;i++) {
      const z=(i-1.5)*.4;between(rig,MAT.wood,[side*.46,.43,z],[side*.95,.12,z-.3],.025);
      box(rig,MAT.woodDark,side*.96,.12,z-.3,.13,.035,.23);cylinder(rig,MAT.black,side*.57,.49,z,.055,.12).rotation.z=Math.PI/2;
    }
    between(rig,MAT.wood,[0,.53,.74],[0,.73,1.28],.12);ball(rig,MAT.gold,0,.78,1.25,.16,.14,.22);cone(rig,MAT.gold,0,.91,1.16,.055,.16);
    for(const side of [-1,1])ball(rig,MAT.red,side*.11,.83,1.38,.025);
    box(rig,MAT.black,0,.75,1.45,.1,.07,.03);
    between(rig,MAT.woodDark,[0,.85,-.55],[0,1.75,-.55],.025);box(rig,MAT.red,.18,1.57,-.55,.36,.32,.025);box(rig,MAT.gold,.18,1.57,-.53,.08,.14,.015);
  } else {
    box(rig,MAT.wood,0,.4,0,.65,.25,1.15);for(const x of [-.4,.4])for(const z of [-.4,.4])wheels.push(wheel(root,x,z,.18));
    for(let i=0;i<3;i++)ball(rig,MAT.rope,0,.65,(i-1)*.3,.28,.2,.18);
  }
  if(ramBeam){rig.remove(ramBeam);bakeStatic(ramBeam);}
  bakeStatic(rig);if(ramBeam)rig.add(ramBeam);
  root.userData={rig,wheels,ramBeam,vehicle:kind,kind,phase:0,labelHeight:kind==='wall'?1.35:kind==='turtle'?1.95:1.7};return root;
}
export function combatantModel(kind, skinId = null) {
  if(['ram','wall','turtle','courier'].includes(kind))return movingModel(kind);
  const root=character(kind);
  const skin=skinDef(kind,skinId);
  if(skin) {
    const colors=skin.gold?GOLD_LOOK:skin, originals=new Set(root.userData.costumeMaterials), clones=new Map();
    root.traverse(o=>{
      if(!o.isMesh||!originals.has(o.material))return;
      if(!clones.has(o.material)) {
        const mat=o.material.clone();mat.color.set(colors.body);mat.userData.owned3d=true;
        if(skin.gold){mat.metalness=.62;mat.roughness=.4;}
        clones.set(o.material,mat);
      }
      o.material=clones.get(o.material);
    });
    if(root.userData.cape){const mat=root.userData.cape.material.clone();mat.color.set(colors.sleeve||colors.body);mat.userData.owned3d=true;root.userData.cape.material=mat;}
    root.userData.skin=skin.id;
  }
  if(kind==='cavalry') {
    const horse=new T.Group(),legs=[],knees=[],hooves=[];root.add(horse);
    const hide=material('#70523c',{roughness:.95}),mane=material('#342e29',{roughness:.96});
    mesh(horse,'sphere',hide,0,.73,0,.285,.285,.55);
    for(const z of [-.31,.30])mesh(horse,'sphere',hide,0,.72,z,.275,.27,.25);
    const neck=cylinder(horse,hide,0,.97,.35,.145,.50);neck.rotation.x=.36;
    mesh(horse,'sphere',hide,0,1.19,.49,.145,.175,.235);mesh(horse,'sphere',hide,0,1.12,.67,.11,.105,.19);
    for(const side of [-1,1]) {
      const ear=cone(horse,hide,side*.085,1.39,.42,.042,.17);ear.rotation.z=-side*.16;
      ball(horse,MAT.black,side*.135,1.23,.53,.019,.017,.012);ball(horse,MAT.black,side*.086,1.14,.78,.018,.012,.009);
      between(horse,MAT.woodDark,[side*.13,1.27,.43],[side*.115,1.10,.65],.012);
      between(horse,MAT.rope,[side*.11,1.10,.65],[side*.09,1.16,.77],.009);
      for(let j=0;j<5;j++)ball(horse,mane,side*.025,1.24-j*.075,.32-j*.025,.05,.085,.045);
    }
    between(horse,MAT.woodDark,[-.11,1.10,.65],[.11,1.10,.65],.016);
    for(let j=0;j<3;j++)between(horse,mane,[(j-1)*.03,.77,-.46],[(j-1)*.04,.28,-.72],.028);
    mesh(horse,'bevel',MAT.red,0,.93,-.02,.52,.08,.56);mesh(horse,'bevel',MAT.woodDark,0,.99,-.04,.36,.095,.36);
    for(const z of [-.21,.15])ball(horse,MAT.woodDark,0,1.02,z,.22,.085,.045);
    for(const side of [-1,1]) {
      between(horse,MAT.woodDark,[side*.25,.93,0],[side*.29,.57,0],.014);
      mesh(horse,'bevel',MAT.steel,side*.29,.56,.01,.12,.025,.15);
    }
    for(const x of [-.19,.19])for(const z of [-.36,.36]) {
      const leg=new T.Group(),knee=new T.Group(),hoof=new T.Group();leg.position.set(x,.575,z);horse.add(leg);legs.push(leg);
      knee.position.y=-.27;leg.add(knee);knees.push(knee);hoof.position.set(0,-.27,.02);knee.add(hoof);hooves.push(hoof);
      cylinder(leg,hide,0,-.13,0,.059,.27);ball(leg,hide,0,-.24,.008,.062,.065,.058);
      cylinder(knee,hide,0,-.13,.012,.041,.27);mesh(hoof,'bevel',mane,0,0,.025,.135,.11,.17);
      bakeStatic(hoof);knee.remove(hoof);bakeStatic(knee);knee.add(hoof);leg.remove(knee);bakeStatic(leg);leg.add(knee);
    }
    for(const leg of legs)horse.remove(leg);bakeStatic(horse);for(const leg of legs)horse.add(leg);
    root.userData.horseLegs=legs;root.userData.horseKnees=knees;root.userData.horseHooves=hooves;
    root.userData.horseReins=Array.from({length:2},()=>cylinder(root,MAT.woodDark,0,1,0,.007,.7));
    root.userData.mountOffset=.72;animateCharacter(root,0,false,0,0);
    root.userData.labelHeight=new T.Box3().setFromObject(root).max.y+.15;
  }
  return root;
}
