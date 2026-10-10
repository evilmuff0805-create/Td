import * as T from 'three';
import { HEROES } from '../data/heroes.js';
import { ENEMIES } from '../data/enemies.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { textured } from './surfaces.js';
import { towerVisual } from './tower-visuals.js';
import { landmarkModel,specializeFortress } from './landmarks.js';
import { sculptFace, costumeDetails,portraitPalette,heroHeadgear } from './character-detail.js';
import { garmentGeometry,bladeGeometry } from './sculpture.js';
import { HERO_FORMS } from './hero-design.js';
import { animateHeroPose } from './hero-pose.js';
import { ENEMY_FORMS } from './enemy-design.js';
import { enemyHeadgear,enemyCostume,enemyArsenal } from './enemy-detail.js';
import { animateEnemyPose } from './enemy-pose.js';
import { characterMaterial,armorBevelGeometry } from './character-surfaces.js';

const materials = new Map(), geometries = new Map(),costumes=new Map();
function costume(color,kind='cloth') {
  const key=color+kind;if(!costumes.has(key))costumes.set(key,characterMaterial(kind==='metal'?'armor':kind==='wood'?'leather':'cloth',color,kind==='cape'?{side:T.DoubleSide}:{}));return costumes.get(key);
}
export function material(color, options = {}) {
  const key = color + JSON.stringify(options);
  if (!materials.has(key)) materials.set(key, new T.MeshStandardMaterial({ color, roughness: .86, ...options }));
  return materials.get(key);
}
export function geometry(kind) {
  if (!geometries.has(kind)) geometries.set(kind, kind === 'sphere' ? new T.SphereGeometry(1, 12, 8)
    : kind === 'cylinder' ? new T.CylinderGeometry(1, 1, 1, 10)
    : kind === 'cone' ? new T.ConeGeometry(1, 1, 12)
    : kind === 'rock' ? new T.DodecahedronGeometry(1, 0)
    : kind === 'foliage' ? new T.IcosahedronGeometry(1, 1)
    : kind === 'bevel' ? new RoundedBoxGeometry(1,1,1,1,.055) : new T.BoxGeometry(1, 1, 1));
  return geometries.get(kind);
}
export function mesh(parent, geo, mat, x, y, z, sx = 1, sy = 1, sz = 1) {
  const source=typeof geo==='string'?geometry(geo):geo;
  const m = new T.Mesh(geo==='bevel'&&mat.userData.characterSurface==='armor'?armorBevelGeometry(source):source, mat);
  m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = m.receiveShadow = true; parent.add(m); return m;
}
export const box = (g, m, x,y,z, w,h,d) => mesh(g,'box',m,x,y,z,w,h,d);
export const ball = (g,m,x,y,z, w,h=w,d=w) => mesh(g,'sphere',m,x,y,z,w,h,d);
export const cylinder = (g,m,x,y,z,r,h) => mesh(g,'cylinder',m,x,y,z,r,h,r);
export const cone = (g,m,x,y,z,r,h) => mesh(g,'cone',m,x,y,z,r,h,r);
export function between(g, m, a, b, r = .035) {
  const av = new T.Vector3(...a), bv = new T.Vector3(...b), delta = bv.clone().sub(av);
  const o = cylinder(g,m,...av.clone().add(bv).multiplyScalar(.5).toArray(),r,delta.length());
  o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize()); return o;
}
export const MAT = {
  snow: textured('#d6e2ee','snow'), snowShade: textured('#afc6db','snow'),
  stone: textured('#8995a0','stone',{vertexColors:true}), stoneDark: textured('#576677','stone',{vertexColors:true}),
  wood: textured('#795b3c','wood'), woodDark: textured('#44372e','wood'),
  plaster: textured('#b9b4a1','plaster'), roof: textured('#344751','tile',{roughness:.74,bumpScale:.018}),
  red: textured('#873f39','cloth'), blue: textured('#293d53','cloth'), gold: textured('#c0a06b','metal',{metalness:.68,roughness:.36}),
  steel: textured('#7b8b93','metal',{metalness:.78,roughness:.32}), black: textured('#25323b','metal',{metalness:.45}), skin: material('#d5a078',{roughness:.72}),
  pine: material('#334e55'), pineDark: material('#243b48'), rope: material('#a99164'),
  window: material('#dec08c',{emissive:'#ffa34b',emissiveIntensity:.85}),
  ice: material('#b9d4df',{roughness:.28,metalness:.12}),
  roofSnow: textured('#d6e2ee','roof-snow',{alphaTest:.5}), jade: textured('#426c61','wood'),
  heroCloth: characterMaterial('cloth','#2d5873'), heroArmor: characterMaterial('armor','#435462'),
  samuraiArmor: textured('#633f35','metal',{metalness:.3}), footCloth: textured('#8c7854','cloth'),
  footArmor: textured('#3e514c','metal',{metalness:.2}), straw: textured('#ad925f','cloth'),
};

// Static scenery is merged by material to keep draw calls independent of prop count.
export function bakeStatic(root) {
  root.updateMatrixWorld(true);
  const groups = new Map(), inverse = root.matrixWorld.clone().invert();
  root.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone().applyMatrix4(new T.Matrix4().multiplyMatrices(inverse,o.matrixWorld));
    if (!g.getAttribute('uv')) g.setAttribute('uv',new T.BufferAttribute(new Float32Array(g.getAttribute('position').count*2),2));
    if (!g.getAttribute('color')) {const c=new Float32Array(g.getAttribute('position').count*3);c.fill(1);g.setAttribute('color',new T.BufferAttribute(c,3));}
    if (!groups.has(o.material)) groups.set(o.material,[]);
    groups.get(o.material).push(g);
  });
  root.clear();
  for (const [mat, list] of groups) {
    const merged = mergeGeometries(list.map((g)=>g.index?g.toNonIndexed():g),false);
    for (const g of list) g.dispose();
    if (!merged) continue;
    merged.userData.owned3d=true;
    const m = new T.Mesh(merged,mat); m.castShadow=m.receiveShadow=!mat.userData.fixedArt; root.add(m);
  }
  return root;
}

export const roofRise=(w,d)=>T.MathUtils.clamp(Math.min(w,d)*.27,.26,.68);
function roofGeometry(w,d,h,thickness=.085) {
  const geo = new T.PlaneGeometry(w,d,20,16); geo.rotateX(-Math.PI/2);
  const p = geo.attributes.position;
  for(let i=0;i<p.count;i++) {
    p.setY(i,roofHeight(p.getX(i),p.getZ(i),w,d,h));
  }
  geo.computeVertexNormals();if(!thickness)return geo;
  const bottom=geo.clone(),bp=bottom.attributes.position;
  for(let i=0;i<bp.count;i++)bp.setY(i,bp.getY(i)-thickness);
  const bi=bottom.index.array;for(let i=0;i<bi.length;i+=3)[bi[i+1],bi[i+2]]=[bi[i+2],bi[i+1]];
  bottom.computeVertexNormals();
  const positions=[],uv=[],tri=(a,b,c)=>{positions.push(...a,...b,...c);for(const v of [a,b,c])uv.push(v[0],v[2]);};
  for(const [a,b,n] of [[[-w/2,-d/2],[w/2,-d/2],20],[[w/2,-d/2],[w/2,d/2],16],[[w/2,d/2],[-w/2,d/2],20],[[-w/2,d/2],[-w/2,-d/2],16]])for(let i=0;i<n;i++) {
    const at=t=>{const x=T.MathUtils.lerp(a[0],b[0],t),z=T.MathUtils.lerp(a[1],b[1],t);return [x,roofHeight(x,z,w,d,h),z];};
    const c=at(i/n),e=at((i+1)/n),cb=[c[0],c[1]-thickness,c[2]],eb=[e[0],e[1]-thickness,e[2]];
    tri(c,e,cb);tri(e,eb,cb);
  }
  const rim=new T.BufferGeometry();rim.setAttribute('position',new T.Float32BufferAttribute(positions,3));rim.setAttribute('uv',new T.Float32BufferAttribute(uv,2));rim.computeVertexNormals();
  const topFlat=geo.toNonIndexed(),bottomFlat=bottom.toNonIndexed(),shell=mergeGeometries([topFlat,bottomFlat,rim],false);
  for(const part of [geo,bottom,topFlat,bottomFlat,rim])part.dispose();return shell;
}
function roofHeight(x,z,w,d,h=roofRise(w,d)) {
  const nx=Math.min(1,Math.abs(x)/(w/2)),nz=Math.min(1,Math.abs(z)/(d/2)),q=Math.max(nx,nz);
  return Math.min(h*Math.pow(1-nz,.82),h*1.8*Math.pow(1-nx,.8))+.105*Math.pow(Math.max(0,(q-.72)/.28),2);
}
export function roof(g,w,d,y) {
  const rise=roofRise(w,d),base=roofGeometry(w,d,rise);mesh(g,base,MAT.roof,0,y,0);
  // Sculpted tile courses remain visible between irregular, melted snow strips.
  for(let x=-w/2+.12;x<w/2-.08;x+=.19) for(const side of [-1,1]) {
    const pts=[];
    for(let j=0;j<=8;j++){const z=side*(.03+(d/2-.07)*j/8);pts.push(new T.Vector3(x,y+roofHeight(x,z,w,d)+.012,z));}
    mesh(g,new T.TubeGeometry(new T.CatmullRomCurve3(pts),10,.022,5,false),MAT.roof,0,0,0);
  }
  const snowGeo=roofGeometry(w*.985,d*.98,rise,0);mesh(g,snowGeo,MAT.roofSnow,0,y+.038,0);
  between(g,MAT.roof,[-w*.26,y+rise+.045,0],[w*.26,y+rise+.045,0],.056);
  between(g,MAT.snow,[-w*.26,y+rise+.085,0],[w*.26,y+rise+.085,0],.044);
  for(const side of [-1,1]) {
    between(g,MAT.roof,[side*w*.26,y+rise+.045,0],[side*w*.35,y+rise+.11,0],.044);
    ball(g,MAT.roof,side*w*.35,y+rise+.115,0,.049);
  }
  for(const side of [-1,1]) for(let x=-w/2+.09;x<w/2;x+=.18) {
    const tile=cylinder(g,MAT.roof,x,y+.075,side*(d/2-.018),.035,.12);tile.rotation.x=Math.PI/2;
    ball(g,MAT.stoneDark,x,y+.075,side*(d/2+.045),.019,.019,.005);
  }
  for(const side of [-1,1]) {
    const pts=[];for(let i=0;i<=16;i++){const x=-w/2+i*w/16;pts.push(new T.Vector3(x,y+roofHeight(x,side*d*.48,w,d)-.105,side*d*.48));}
    mesh(g,new T.TubeGeometry(new T.CatmullRomCurve3(pts),16,.045,5,false),MAT.woodDark,0,0,0);
    // The hip rafters continue around the end walls instead of a thin plane.
    const end=[];for(let i=0;i<=12;i++){const z=-d/2+i*d/12;end.push(new T.Vector3(side*w*.48,y+roofHeight(side*w*.48,z,w,d)-.105,z));}
    mesh(g,new T.TubeGeometry(new T.CatmullRomCurve3(end),12,.04,5,false),MAT.woodDark,0,0,0);
  }
  for(const side of [-1,1]) for(let x=-w/2+.2;x<w/2;x+=.39) {
    const rafter=box(g,MAT.jade,x,y-.065,side*(d/2-.15),.09,.08,.46);rafter.rotation.x=side*.12;
    if(Math.sin(x*31+side*7)>.15){const ice=cone(g,MAT.ice,x,y-.12,side*(d/2-.02),.025,.12+.09*Math.abs(Math.sin(x*12)));ice.rotation.z=Math.PI;}
  }
}

function latticePanel(g,w,h) {
  const frame=Math.max(.018,Math.min(w,h)*.065),bars=Math.max(3,Math.round(w/.12));
  mesh(g,'bevel',MAT.woodDark,0,0,0,w,h,.075);
  box(g,MAT.window,0,h*.04,.041,w-frame*3,h*.77,.012);
  for(let i=0;i<=bars;i++)box(g,MAT.wood,(i/bars-.5)*(w-frame*2),h*.04,.06,frame*.35,h*.79,.025);
  for(let j=0;j<5;j++)box(g,MAT.wood,0,h*(-.33+j*.18),.064,w-frame*2,frame*.35,.027);
  for(const side of [-1,1]) {
    mesh(g,'bevel',MAT.wood,side*(w/2-frame*.5),0,.063,frame,h,.045);
    mesh(g,'bevel',MAT.wood,0,side*(h/2-frame*.5),.063,w,frame,.045);
  }
  box(g,MAT.woodDark,0,-h*.405,.064,w-frame*2,h*.12,.035);
}
function timberBracket(g,x,y,z,size=.24,gold=false) {
  mesh(g,'bevel',MAT.red,x,y-.08,z,size*.58,.12,size*.52);
  mesh(g,'bevel',MAT.jade,x,y-.018,z,size,.05,size*.67);
  mesh(g,'bevel',gold?MAT.gold:MAT.red,x,y+.032,z,size*.75,.045,size);
  ball(g,gold?MAT.gold:MAT.rope,x,y-.052,z+size*.28,.018,.012,.009);
}
function masonry(g,w,d,h,bottom=0) {
  box(g,MAT.stoneDark,0,bottom+h/2,0,w,h,d);
  const rows=Math.max(1,Math.ceil(h/.20)),rowH=h/rows;
  for(const [length,z,angle]of [[w,d/2,0],[w,d/2,Math.PI],[d,w/2,Math.PI/2],[d,w/2,-Math.PI/2]]) {
    const face=new T.Group();face.rotation.y=angle;face.position.set(Math.sin(angle)*z,bottom,Math.cos(angle)*z);g.add(face);
    const cell=length/Math.max(2,Math.ceil(length/.32));
    for(let row=0;row<rows;row++)for(let x=-length/2-cell*(row%2)*.5;x<length/2-.003;x+=cell) {
      const a=Math.max(-length/2,x),b=Math.min(length/2,x+cell);if(b-a<.025)continue;
      mesh(face,'bevel',(row+Math.round((x+length)*17))%4?MAT.stone:MAT.stoneDark,(a+b)/2,(row+.5)*rowH,.015,b-a-.012,rowH-.012,.075);
    }
  }
  mesh(g,'bevel',MAT.stone,0,bottom+h-.025,0,w+.065,.07,d+.065);
}

export function hanok(w=3.2,d=2.35) {
  const g=new T.Group();
  masonry(g,w+.28,d+.35,.24);
  for(let i=0;i<3;i++)mesh(g,'bevel',MAT.stone,0,.04+i*.065,d/2+.45-i*.15,1.18,.08+i*.13,.33);
  box(g,MAT.plaster,0,.8,0,w-.15,1.28,d-.1);
  mesh(g,'bevel',MAT.woodDark,0,.29,0,w+.18,.14,d+.18);
  for(let x=-w/2+.08;x<w/2;x+=.17)box(g,MAT.wood,x,.366,d/2-.13,.16,.024,.42);
  for(const x of [-w/2,0,w/2])for(const z of [-d/2,d/2]) {
    cylinder(g,MAT.stone,x,.40,z,.11,.12);cylinder(g,MAT.woodDark,x,.94,z,.064,1.13);
  }
  for(const side of [-1,1]) {
    for(let x=-w*.33;x<=w*.34;x+=w*.33) {
      const panel=new T.Group();panel.position.set(x,.93,side*(d/2+.015));panel.rotation.y=side<0?Math.PI:0;g.add(panel);latticePanel(panel,w*.275,.83);
      cylinder(panel,MAT.gold,w*.09,-.06,.096,.022,.018).rotation.x=Math.PI/2;
    }
    box(g,MAT.woodDark,0,1.48,side*d/2,w,.12,.12);
    box(g,MAT.wood,0,1.36,side*d/2,w,.055,.16);
    for(const x of [-w/2,0,w/2]) {
      timberBracket(g,x,1.45,side*d/2,.38);
      between(g,MAT.woodDark,[x,1.15,side*d/2],[x+.18,1.4,side*(d/2+.12)],.035);
    }
  }
  roof(g,w+.75,d+.75,1.54);
  // End wall timber frame and paper window.
  for(const side of [-1,1]) {
    box(g,MAT.woodDark,side*w/2,.85,0,.06,1.2,.07);
    box(g,MAT.woodDark,side*w/2,1.35,0,.07,.09,d);
    for(const z of [-d*.27,d*.27]) {
      const panel=new T.Group();panel.position.set(side*(w/2+.01),.93,z);panel.rotation.y=side*Math.PI/2;g.add(panel);latticePanel(panel,d*.33,.68);
    }
  }
  return g;
}

export function pine(height=3.4,seed=0) {
  const g=new T.Group(); mesh(g,new T.CylinderGeometry(.025,.11,height*.88,7),MAT.woodDark,0,height*.44,0);
  for(let i=0;i<5;i++) {
    const y=height*(.29+i*.13),r=height*(.34-i*.052),n=i<3?5:4;
    for(let j=0;j<n;j++) {
      const angle=seed+j*Math.PI*2/n+i*1.7,len=r*(.85+.16*Math.sin(seed*7+j*13+i)),branch=new T.Group();
      branch.position.y=y+.035*Math.sin(j*7+seed);branch.rotation.y=angle;g.add(branch);
      between(branch,MAT.woodDark,[0,-.04,0],[0,.08,len*.92],.022);
      mesh(branch,boughGeometry(len,len*.54,seed+j*2+i*11),i%2?MAT.pine:MAT.pineDark,0,0,0);
      mesh(branch,boughGeometry(len*.84,len*.40,seed+j*2+i*11,true),MAT.snow,0,.055,len*.035);
      for(const side of [-1,1]) {
        const twig=mesh(branch,boughGeometry(len*.48,len*.22,seed+j),MAT.pine,side*len*.13,.025,len*.44);
        twig.rotation.y=side*.75;
        const tip=mesh(branch,boughGeometry(len*.34,len*.16,seed+j,true),MAT.snow,side*len*.13,.063,len*.44);tip.rotation.y=side*.75;
      }
    }
  }
  cone(g,MAT.pine,0,height*.92,0,height*.055,height*.22);
  cone(g,MAT.snow,0,height*.96,0,height*.032,height*.17);
  return g;
}

function boughGeometry(length,width,seed,snow=false) {
  const positions=[],uv=[],segments=6;
  const point=(i,side,top=true)=>{
    const t=i/segments,s=Math.pow(Math.max(0,Math.sin(t*Math.PI)),.62),serration=i%2?.76:1;
    return [side*width*s*serration*.5,Math.sin(t*Math.PI)*width*(side===0?.23:-.06)+t*length*.11+(top?0:-.045),t*length];
  };
  const tri=(a,b,c)=>{positions.push(...a,...b,...c);for(const p of [a,b,c])uv.push(p[0]/width+.5,p[2]/length);};
  for(let i=0;i<segments;i++)for(const side of [-1,1]) {
    const a=point(i,0),b=point(i,side),c=point(i+1,side),d=point(i+1,0);
    if(side<0){tri(a,b,c);tri(a,c,d);}else{tri(a,c,b);tri(a,d,c);}
    if(!snow){const below=point(i,0,false),next=point(i+1,0,false);
      if(side<0){tri(b,below,next);tri(b,next,c);}else{tri(b,next,below);tri(b,c,next);}}
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.computeVertexNormals();return geo;
}

export function rock(size=1,seed=0) {
  const g=new T.Group(),vertices=[],snow=[],colors=[],uv=[],snowUv=[],rings=[],sides=24;
  const profile=[.42,.52,.58,.59,.57,.52,.44,.34,.21,.10],levels=[0,.08,.20,.34,.49,.64,.77,.88,.96,1];
  for(let row=0;row<profile.length;row++) {
    const ring=[];
    for(let j=0;j<sides;j++) {
      const a=j*Math.PI*2/sides+seed*.7,r=profile[row]*(1+.065*Math.sin(a*3+seed*13)+.045*Math.sin(a*5+row*.35+seed));
      ring.push(new T.Vector3(Math.cos(a)*r+Math.sin(row*.5+seed)*.035,levels[row]+Math.sin(a*3+seed*7)*.018+Math.sin(a*5+row*.3)*.012,Math.sin(a)*r*.8));
    }rings.push(ring);
  }
  const add=(a,b,c)=>{
    const normal=b.clone().sub(a).cross(c.clone().sub(a)).normalize();
    const points=[a,b,c],pole=points.map(p=>p.y>1&&Math.hypot(p.x,p.z)<.05),angles=points.map(p=>(Math.atan2(p.z,p.x)+Math.PI)/(Math.PI*2));
    const surfaceAngles=angles.filter((_,i)=>!pole[i]),wrap=Math.max(...surfaceAngles)-Math.min(...surfaceAngles)>.5;
    const unwrapped=angles.map(u=>u+(wrap&&u<.5?1:0));
    for(let i=0;i<3;i++)if(pole[i])unwrapped[i]=(unwrapped[(i+1)%3]+unwrapped[(i+2)%3])/2;
    for(let i=0;i<3;i++){const p=points[i],shade=.95+.04*Math.sin(p.x*7+p.y*4+p.z*5+seed);vertices.push(...p.toArray());colors.push(shade,shade,shade);uv.push(unwrapped[i]*2,p.y*1.4);}
    // Snow follows upward-facing facets and ledges of the SAME rock, not a separate round cap.
    if(normal.y>.38&&(a.y+b.y+c.y)/3>.27)for(const p of [a,b,c]){
      snow.push(p.x,p.y+.025,p.z);snowUv.push(p.x,p.z);
    }
  };
  for(let row=0;row<rings.length-1;row++)for(let j=0;j<sides;j++) {
    const k=(j+1)%sides;add(rings[row][j],rings[row+1][j],rings[row+1][k]);add(rings[row][j],rings[row+1][k],rings[row][k]);
  }
  const top=new T.Vector3(Math.sin(seed)*.035,1.025,0);
  for(let j=0;j<sides;j++)add(rings.at(-1)[j],top,rings.at(-1)[(j+1)%sides]);
  const bodyGeo=new T.BufferGeometry();bodyGeo.setAttribute('position',new T.Float32BufferAttribute(vertices,3));bodyGeo.setAttribute('color',new T.Float32BufferAttribute(colors,3));bodyGeo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));bodyGeo.computeVertexNormals();
  // Blend normals across rock facets while preserving the broken granite silhouette.
  const smooth=new Map(),pos=bodyGeo.attributes.position,norm=bodyGeo.attributes.normal;
  const key=(i)=>[pos.getX(i),pos.getY(i),pos.getZ(i)].map(v=>v.toFixed(5)).join(',');
  for(let i=0;i<pos.count;i++){const k=key(i);if(!smooth.has(k))smooth.set(k,new T.Vector3());smooth.get(k).add(new T.Vector3().fromBufferAttribute(norm,i));}
  for(let i=0;i<pos.count;i++){const n=new T.Vector3().fromBufferAttribute(norm,i).lerp(smooth.get(key(i)).clone().normalize(),.92).normalize();norm.setXYZ(i,n.x,n.y,n.z);}
  mesh(g,bodyGeo,seed%2>1?MAT.stoneDark:MAT.stone,0,0,0,size,size,size);
  const snowGeo=new T.BufferGeometry();snowGeo.setAttribute('position',new T.Float32BufferAttribute(snow,3));snowGeo.setAttribute('uv',new T.Float32BufferAttribute(snowUv,2));
  const joined=mergeVertices(snowGeo);joined.computeVertexNormals();snowGeo.dispose();mesh(g,joined,MAT.snow,0,0,0,size,size,size);
  return g;
}

export function fence(g,a,b) {
  const len=Math.hypot(b[0]-a[0],b[1]-a[1]), n=Math.ceil(len/.85);
  for(let i=0;i<=n;i++) {
    const x=a[0]+(b[0]-a[0])*i/n,z=a[1]+(b[1]-a[1])*i/n;
    cylinder(g,MAT.woodDark,x,.37,z,.06,.74); ball(g,MAT.snow,x,.77,z,.095,.045,.095);
  }
  for(const y of [.26,.55]) { between(g,MAT.wood,[a[0],y,a[1]],[b[0],y,b[1]],.035); between(g,MAT.snow,[a[0],y+.045,a[1]],[b[0],y+.045,b[1]],.025); }
}

export function supplies() {
  const g=new T.Group();
  for(let i=0;i<3;i++) {
    const jar=ball(g,material(i%2?'#4b5258':'#5e4940'),i*.35,.23,(i%2)*.2,.22,.29,.22);
    cylinder(g,MAT.woodDark,i*.35,.52,(i%2)*.2,.14,.04);
    ball(g,MAT.snow,i*.35,.55,(i%2)*.2,.145,.02,.145);
    jar.rotation.y=i;
  }
  box(g,MAT.wood,-.42,.25,.1,.48,.5,.5);
  for(const y of [.1,.4]) box(g,MAT.woodDark,-.42,y,.36,.5,.035,.025);
  box(g,MAT.snow,-.42,.51,.1,.5,.04,.53); return g;
}

export function wallSegment(length=3,height=1.6) {
  const g=new T.Group();
  box(g,MAT.stoneDark,0,height/2,0,length,height,.65);
  for(let row=0;row<Math.ceil(height/.25);row++) for(let x=-length/2+.16;x<length/2;x+=.42) {
    const xx=Math.min(length/2-.1,x+(row%2)*.18);
    for(const side of [-1,1]) mesh(g,'bevel',(row+Math.round(x*10))%3?MAT.stone:MAT.stoneDark,xx,row*.25+.12,side*.335,.38,.225,.1);
  }
  for(let x=-length/2+.2;x<length/2;x+=.65) {
    box(g,MAT.stone,x,height+.13,0,.4,.3,.7); box(g,MAT.snow,x,height+.3,0,.46,.05,.76);
  }
  box(g,MAT.snow,0,height+.025,0,length,.06,.69); return g;
}

export function gate() {
  const g=new T.Group();
  for(const side of [-1,1]) {
    const wall=wallSegment(1.38,2.3); wall.position.x=side*1.53;g.add(wall);
  }
  box(g,MAT.stone,0,2.1,0,2, .65,.85);
  // Visible voussoirs surrounding the arched wooden doors.
  const shape=new T.Shape(); shape.moveTo(-.8,0);shape.lineTo(.8,0);shape.lineTo(.8,1.15);shape.absarc(0,1.15,.8,0,Math.PI,false);shape.closePath();
  const doorGeo=new T.ExtrudeGeometry(shape,{depth:.14,bevelEnabled:false,curveSegments:14});
  mesh(g,doorGeo,MAT.woodDark,0,0,.4);
  for(let i=0;i<9;i++) {
    const x=-.72+i*.18,top=1.15+Math.sqrt(Math.max(0,.64-x*x));
    box(g,MAT.wood,x,top/2,.57,.15,top,.035);
    for(const y of [.4,.8,1.1]) ball(g,MAT.gold,x,y,.61,.027);
  }
  for(let i=0;i<11;i++) {
    const a=i*Math.PI/10; const stone=box(g,MAT.stone,Math.cos(a)*.92,1.15+Math.sin(a)*.92,.48,.29,.25,.25);stone.rotation.z=a-Math.PI/2;
  }
  const upper=hanok(3.6,1.6);upper.position.y=2.33;upper.scale.y=.73;g.add(upper);
  for(const side of [-1,1]) {
    between(g,MAT.wood,[side*2.1,.3,.8],[side*2.1,2.1,.8],.035);
    box(g,side<0?MAT.red:MAT.blue,side*2.1,1.53,.8,.34,.8,.025);
    cylinder(g,MAT.gold,side*2.1,1.53,.82,.075,.02).rotation.x=Math.PI/2;
  }
  return g;
}

export function towerFlag(g,x,y,z,large=false) {
  const h=large?1.05:.68,w=large?.38:.23;
  cylinder(g,MAT.woodDark,x,y+h/2,z,.018,h);
  ball(g,MAT.gold,x,y+h+.025,z,.045);
  box(g,large?MAT.blue:MAT.red,x+w/2,y+h*.73,z,w,h*.55,.025);
  if(large) {
    for(const dx of [.025,w-.025])box(g,MAT.gold,x+dx,y+h*.73,z+.018,.024,h*.55,.012);
    box(g,MAT.gold,x+w/2,y+h*.73,z+.022,.055,.19,.015);
    box(g,MAT.gold,x+w/2,y+h*.73,z+.023,.17,.04,.015);
  }
}

export function towerGallery(g,w,d,deck,h,{open=false,railing=false,gold=false}={}) {
  mesh(g,'bevel',MAT.woodDark,0,deck,0,w+.12,.12,d+.12);
  for(let x=-w/2+.06;x<w/2;x+=.13)box(g,MAT.wood,x,deck+.066,0,.12,.018,d+.05);
  for(const x of [-w/2,w/2])for(const z of [-d/2,d/2]) {
    cylinder(g,MAT.stone,x,deck+.1,z,.08,.10);cylinder(g,MAT.red,x,deck+h/2,z,.048,h);
    timberBracket(g,x,deck+h-.03,z,.24,gold);
    for(const side of [-1,1])between(g,MAT.woodDark,[x,deck+h-.24,z],[x+side*.12,deck+h-.08,z],.017);
  }
  for(const side of [-1,1]) {
    box(g,MAT.woodDark,0,deck+h-.04,side*d/2,w+.12,.07,.08);
    box(g,MAT.woodDark,side*w/2,deck+h-.04,0,.08,.07,d+.12);
  }
  if(!open) {
    box(g,MAT.plaster,0,deck+h*.43,0,w-.13,h*.78,d-.14);
    for(const side of [-1,1]) {
      for(const x of [-w*.27,0,w*.27]) {
        const panel=new T.Group();panel.position.set(x,deck+h*.47,side*(d/2+.015));panel.rotation.y=side<0?Math.PI:0;g.add(panel);latticePanel(panel,w*.23,h*.46);
      }
      const end=new T.Group();end.position.set(side*(w/2+.015),deck+h*.47,0);end.rotation.y=side*Math.PI/2;g.add(end);latticePanel(end,d*.65,h*.46);
    }
  }
  if(railing)for(const [length,z,angle]of [[w,d/2+.08,0],[w,d/2+.08,Math.PI],[d,w/2+.08,Math.PI/2],[d,w/2+.08,-Math.PI/2]]) {
    const rail=new T.Group();rail.position.set(Math.sin(angle)*z,deck,Math.cos(angle)*z);rail.rotation.y=angle;g.add(rail);
    for(let j=0;j<=6;j++)box(rail,MAT.red,(j/6-.5)*length,.17,0,.025,.27,.027);
    box(rail,gold?MAT.gold:MAT.jade,0,.31,0,length+.1,.045,.055);box(rail,MAT.woodDark,0,.075,0,length,.025,.035);
  }
}

export function towerPlinth(g,w,d,h,gate=false) {
  masonry(g,w,d,h);
  box(g,MAT.snow,0,h+.02,0,w+.06,.055,d+.06);
  if(gate) {
    box(g,MAT.woodDark,0,h*.36,d/2+.071,.42,h*.72,.025);
    for(const side of [-1,1])box(g,MAT.wood,side*.105,h*.35,d/2+.09,.035,h*.65,.025);
    for(let j=0;j<7;j++) {
      const a=j*Math.PI/6,m=mesh(g,'bevel',MAT.stone,Math.cos(a)*.265,h*.56+Math.sin(a)*.22,d/2+.1,.11,.13,.12);m.rotation.z=a-Math.PI/2;
    }
  }
  for(let j=0;j<3;j++)mesh(g,'bevel',MAT.stone,0,.04+j*.06,d/2+.29-j*.09,.63,.08+j*.12,.22);
}

function towerCannon(g,level,y) {
  const gun=new T.Group(),r=[.105,.145,.19][level-1],length=[.72,1.03,1.34][level-1],z=.25;
  gun.position.set(0,y,.18);gun.userData.restZ=.18;
  gun.userData.muzzle=new T.Vector3(0,.1,z+length/2+.02);
  const barrel=cylinder(gun,MAT.black,0,.1,z,r,length);barrel.rotation.x=Math.PI/2;
  for(const t of [-.27,.28,.46]) {
    const ring=cylinder(gun,level===3?MAT.gold:MAT.steel,0,.1,z+length*t,r*1.12,.055);ring.rotation.x=Math.PI/2;
  }
  const mouth=cylinder(gun,MAT.woodDark,0,.1,z+length/2+.006,r*.74,.014);mouth.rotation.x=Math.PI/2;
  box(gun,level>1?MAT.steel:MAT.wood,0,-.1,0,.38+level*.06,.16,.54+level*.06);
  for(const side of [-1,1]) {
    box(gun,MAT.woodDark,side*(.23+level*.025),-.04,0,.07,.27,.52);
    const wx=side*(.28+level*.025),wy=-.15,wz=-.13,wr=.16+level*.015;
    const wheel=cylinder(gun,MAT.woodDark,wx,wy,wz,wr,.07);wheel.rotation.z=Math.PI/2;
    const rim=new T.Mesh(new T.TorusGeometry(wr-.01,.021,5,12),level===3?MAT.gold:MAT.steel);rim.rotation.y=Math.PI/2;rim.position.set(wx+side*.04,wy,wz);gun.add(rim);
    for(let k=0;k<3;k++){const a=k*Math.PI/3;between(gun,MAT.wood,[wx+side*.045,wy+Math.sin(a)*wr*.85,wz+Math.cos(a)*wr*.85],[wx+side*.045,wy-Math.sin(a)*wr*.85,wz-Math.cos(a)*wr*.85],.016);}
  }
  g.add(gun);g.userData.gun=gun;
}

export function towerModel(type,level=1,branch=null) {
  if(!['sungnyemun','hwaseong'].includes(type))return landmarkModel(type,level,branch);
  const g=new T.Group(),visual=towerVisual(type,level,branch,level===4);level=Math.min(3,level);
  const topRoof=(w,d,y,gold=false)=>{
    roof(g,w,d,y);
    if(gold) {
      const rise=roofRise(w,d);between(g,MAT.gold,[-w*.28,y+rise+.095,0],[w*.28,y+rise+.095,0],.037);
      for(const side of [-1,1]) {
        between(g,MAT.gold,[side*w*.28,y+rise+.095,0],[side*w*.37,y+rise+.18,0],.026);
        ball(g,MAT.gold,side*w*.37,y+rise+.19,0,.037);
      }
    }
  };
  if(type==='sungnyemun') {
    g.userData.arrowHeight=[.72,1.2,2.53][level-1];
    if(level===1) {
      box(g,MAT.stoneDark,0,.08,0,1.08,.16,.98);
      towerGallery(g,.98,.82,.24,.78);
      topRoof(1.46,1.29,1.06);
    } else {
      const base=level===2?.64:.86,w=level===2?1.24:1.43;
      towerPlinth(g,w,1.08,base,true);
      towerGallery(g,w-.13,.96,base+.14,.81,{railing:true,gold:level===3});
      topRoof(w+.47,1.48,base+.99,level===3);
      if(level===3) {
        towerGallery(g,.97,.8,2.24,.56,{gold:true});
        topRoof(1.46,1.26,2.83,true);
        for(const side of [-1,1])towerFlag(g,side*.76,1.26,-.08,true);
      } else for(const side of [-1,1])towerFlag(g,side*.64,.88,-.04);
    }
  } else {
    const base=[.28,.61,.9][level-1],w=[1.12,1.34,1.5][level-1];
    if(level===1) {
      box(g,MAT.stoneDark,0,base/2,0,w,base,1.05);
      for(const side of [-1,1])box(g,MAT.wood,side*.47,.36,0,.16,.12,1.1);
    } else {
      towerPlinth(g,w,1.13,base);
      for(const side of [-1,1])for(const z of [-.39,.05,.48]) {
        mesh(g,'bevel',MAT.stone,side*(w/2-.08),base+.14,z,.2,.28,.27);
        box(g,MAT.snow,side*(w/2-.08),base+.29,z,.21,.045,.28);
      }
    }
    towerGallery(g,w-.31,.78,base+.12,level===3?.94:.79,{open:true});
    topRoof(w+.27,1.27,base+(level===3?1.12:.95),level===3);
    if(level===3) {
      towerGallery(g,.82,.7,2.39,.48,{gold:true});
      topRoof(1.25,1.12,2.9,true);
      for(const side of [-1,1])towerFlag(g,side*.79,1.35,-.13,true);
    } else if(level===2)for(const side of [-1,1])towerFlag(g,side*.66,.84,-.08);
    towerCannon(g,level,base+.43);
  }
  if(branch)specializeFortress(g,type,branch);
  const gun=g.userData.gun;
  if(gun){g.remove(gun);bakeStatic(gun);}
  bakeStatic(g);if(gun)g.add(gun);
  g.userData.visual=visual;
  g.userData.labelHeight=new T.Box3().setFromObject(g).max.y+.16;
  return g;
}

export function character(kind='yi') {
  const root=new T.Group(), rig=new T.Group();root.add(rig);
  const hero=!!HEROES[kind],boss=ENEMIES[kind]?.tier===4,ally=['militia','guard','elite','monk'].includes(kind);
  const enemyForm=kind==='ram'?null:ENEMY_FORMS[kind],articulatedFeet=hero||!!enemyForm;
  const samurai=boss||['samurai','armored','cavalry','elite','guard'].includes(kind);
  const robed=['sejong','dangun','ahn','onmyoji','monk'].includes(kind),light=['gwak','scout','ninja','militia'].includes(kind);
  const bossIndex=Object.keys(ENEMIES).filter(k=>ENEMIES[k].tier===4).indexOf(kind);
  const bossColors=['#723c3a','#3e4e69','#385e67','#6b4463','#506044','#544365','#2d383c','#4e5368','#374b67','#794733','#503f68','#917139'];
  const heroColors={yi:'#35566c',sejong:'#963f38',eulji:'#416257',gang:'#565472',gwon:'#76513b',gwak:'#ad4940',ahn:'#323638',dangun:'#c7c7ae'};
  const capeColors={yi:'#843e33',sejong:'#8b692d',eulji:'#a58d60',gang:'#a3a087',gwon:'#b5a17f',gwak:'#7a302e',ahn:'#303537',dangun:'#557966'};
  const color=heroColors[kind]??enemyForm?.color??(boss?bossColors[bossIndex]:ally?kind==='monk'?'#b7a17a':kind==='militia'?'#72856d':'#37647a':'#967b55');
  const cloth=kind==='yi'?MAT.heroCloth:costume(color),armor=hero?kind==='yi'?MAT.heroArmor:costume(color,robed||light?'cloth':'metal'):enemyForm?costume(color,robed||light?'cloth':'metal'):samurai?costume(color,'metal'):MAT.footArmor;
  const gold=hero?MAT.gold:material('#9a8259'),skin=characterMaterial('skin',portraitPalette(kind).skin),leather=costume('#49382c','wood');
  const hips=new T.Group();hips.position.y=.68;rig.add(hips);
  const legs=[],knees=[],ankles=[];
  for(const side of [-1,1]) {
    const leg=new T.Group();leg.position.x=side*.14;hips.add(leg);legs.push(leg);
    mesh(leg,garmentGeometry('thigh'),cloth,0,0,0);
    const knee=new T.Group();knee.position.y=-.31;leg.add(knee);knees.push(knee);leg.userData.knee=knee;
    mesh(knee,garmentGeometry('boot'),leather,0,0,0);
    if(articulatedFeet) {
      const foot=new T.Group();foot.position.set(0,-.30,.035);knee.add(foot);ankles.push(foot);
      ball(foot,leather,0,.005,.05,.095,.067,.178);
      mesh(foot,'bevel',MAT.woodDark,0,-.045,.04,.19,.032,.32);
    } else {
      ball(knee,leather,0,-.295,.085,.095,.067,.178);
      mesh(knee,'bevel',MAT.woodDark,0,-.345,.075,.19,.032,.32);
    }
    for(const y of [-.07,-.19])cylinder(knee,gold,0,y,.009,.099,.012);
    if(!robed&&!light){const guard=mesh(knee,'bevel',armor,0,-.11,.087,.12,.21,.045);guard.rotation.x=-.07;}
  }
  const torso=new T.Group();torso.position.y=.98;rig.add(torso);
  mesh(torso,garmentGeometry('tunic'),cloth,0,0,0);
  cylinder(torso,skin,0,.345,-.012,.084,.17);
  if(!robed&&!light)mesh(torso,garmentGeometry('cuirass'),armor,0,0,0);
  // Lamellar plates, belt buckle, shoulder guards, hanging skirt panels.
  for(let row=0;row<(robed||light?0:4);row++) for(let col=0;col<6;col++) {
    const a=(col-2.5)*.22,x=Math.sin(a)*.28,z=Math.cos(a)*.196;
    const plate=mesh(torso,'bevel',row%2?armor:cloth,x,.16-row*.085,z,.059,.071,.022);plate.rotation.y=a;
    ball(torso,gold,x,.185-row*.085,z+.018,.006);
    between(torso,MAT.rope,[x-.018,.174-row*.085,z+.016],[x+.018,.15-row*.085,z+.016],.003);
  }
  mesh(torso,garmentGeometry('belt'),leather,0,0,0);ball(torso,gold,0,-.225,.189,.054,.043,.014);
  if(robed) {
    mesh(torso,garmentGeometry('robe'),cloth,0,0,0);
    for(const s of [-1,1])between(torso,hero?MAT.gold:MAT.rope,[s*.19,.26,.12],[s*.025,-.16,.181],.017);
    if(kind==='sejong')ball(torso,MAT.gold,0,.02,.184,.117,.138,.016);
  }
  if(!robed) {
    mesh(torso,garmentGeometry('tasset'),armor,0,0,0);
    for(const side of [-1,1]) {
      for(let row=0;row<3;row++)for(let col=0;col<3;col++) {
        const a=side*(.17+col*.25),y=-.30-row*.074,x=Math.sin(a)*.25,z=Math.cos(a)*(.19+row*.009);
        const strip=mesh(torso,'bevel',gold,x,y,z+.011,.055,.008,.012);strip.rotation.y=a;
      }
      between(torso,leather,[side*.025,-.27,.179],[side*.027,-.50,.207],.009);
    }
  }
  const arms=[],elbows=[],wrists=[],weapons=[];
  for(const side of [-1,1]) {
    const arm=new T.Group();arm.position.set(side*.30,.19,-.012);torso.add(arm);arms.push(arm);
    mesh(arm,garmentGeometry('upperSleeve'),cloth,0,0,0);
    ball(arm,robed?cloth:armor,0,.016,-.003,.145,.105,.133);
    for(let row=0;row<(robed||light?0:3);row++) {const plate=mesh(arm,'bevel',armor,side*.022,-.035-row*.038,.006,.226,.045,.25);plate.rotation.z=side*.12;}
    const elbow=new T.Group();elbow.position.set(side*.024,-.24,.012);arm.add(elbow);elbows.push(elbow);arm.userData.elbow=elbow;
    mesh(elbow,garmentGeometry(robed?'wideSleeve':'foreSleeve'),cloth,0,0,0);
    if(robed)cylinder(elbow,gold,0,-.228,.018,.147,.018);
    const wrist=new T.Group();wrist.position.set(side*.016,-.24,.026);elbow.add(wrist);wrists.push(wrist);
    ball(wrist,skin,0,-.012,0,.061,.074,.041);
    for(let j=0;j<3;j++){const finger=ball(wrist,skin,(j-1)*.027,-.046,.022,.018,.038,.023);finger.rotation.x=-.25;}
    const thumb=ball(wrist,skin,-side*.05,-.017,.025,.022,.043,.025);thumb.rotation.z=side*.5;
    const socket=new T.Group();socket.position.set(-side*.04,.48,-.038);wrist.add(socket);weapons.push(socket);
    arm.rotation.z=side*.09;
  }
  const head=new T.Group();head.position.set(0,1.47,-.012);head.scale.setScalar(.88);rig.add(head);
  const detailTools={ball,box,cylinder,between,mesh,material,MAT};
  sculptFace(head,kind,detailTools);
  if(hero)costumeDetails(kind,torso,arms,cloth,armor,detailTools);
  if(enemyForm)enemyCostume(kind,torso,cloth,armor,detailTools);
  if(hero)heroHeadgear(head,kind,armor,detailTools);
  else if(enemyForm)enemyHeadgear(head,kind,armor,cloth,{...detailTools,cone});
  else if(samurai&&!robed&&!light) {
    ball(head,armor,0,.13,-.015,.225,.18,.205);
    cylinder(head,gold,0,.075,0,.227,.035);
    box(head,gold,0,.21,.17,.055,.22,.025);
    for(let j=0;j<10;j++){const a=j*Math.PI/5;ball(head,gold,Math.cos(a)*.228,.079,Math.sin(a)*.228,.012);}
    for(const side of [-1,1]) {
      mesh(head,'bevel',armor,side*.2,-.05,-.02,.075,.25,.28);
      for(let row=0;row<3;row++)box(head,gold,side*.24,.025-row*.065,-.02,.012,.012,.25);
    }
    if(hero) {
      for(let j=0;j<4;j++){const plume=ball(head,MAT.red,(j-1.5)*.022,.32+j*.035,-.07-j*.025,.033,.15-j*.012,.045);plume.rotation.x=-.35-j*.09;}
    } else for(const side of [-1,1]) between(head,gold,[side*.08,.2,.12],[side*.25,.43,.11],.025);
    if(boss) {
      for(let j=0;j<3+bossIndex%4;j++){const a=(j/(2+bossIndex%4)-.5)*2.2;between(head,MAT.gold,[Math.sin(a)*.14,.22,.02],[Math.sin(a)*.4,.32+Math.cos(a)*.22,.05],.022);}
      const banner=new T.Group();box(banner,cloth,0,1.07,-.27,.32,.64,.035);between(banner,MAT.woodDark,[0,.25,-.27],[0,1.47,-.27],.018);
      box(banner,MAT.gold,0,1.09,-.245,.12,.13,.02);head.add(banner);
    }
  } else if(kind==='sejong') {
    mesh(head,'bevel',MAT.black,0,.21,-.03,.35,.32,.31);for(const side of [-1,1])mesh(head,'bevel',MAT.black,side*.26,.26,-.06,.23,.06,.13);
  } else if(kind==='dangun') {
    ball(head,MAT.snow,0,.09,-.065,.21,.22,.18);
    cylinder(head,MAT.gold,0,.2,0,.21,.09);for(const side of [-1,1])cone(head,MAT.gold,side*.13,.34,0,.038,.25);
  } else if(kind==='ahn') {
    cylinder(head,MAT.black,0,.2,0,.21,.23);cylinder(head,MAT.black,0,.11,0,.28,.035);box(head,MAT.gold,0,.13,.205,.19,.027,.02);
    box(head,MAT.woodDark,0,-.085,.16,.13,.02,.018);
  } else if(kind==='onmyoji') {
    cone(head,MAT.snow,0,.32,0,.19,.45);box(head,MAT.red,0,.31,.13,.045,.34,.025);
  } else if(kind==='monk') {
    for(let j=0;j<9;j++){const a=j*Math.PI/8;ball(torso,MAT.woodDark,Math.cos(a)*.22,.16-Math.sin(a)*.15,.23,.027);}
  } else if(light) {
    if(kind==='ninja'){ball(head,cloth,0,.08,-.02,.215,.19,.195);box(head,cloth,0,-.08,.15,.3,.13,.05);for(const side of [-1,1])ball(head,MAT.skin,side*.075,.012,.165,.033,.017,.014);}
    else{ball(head,MAT.black,0,.12,-.03,.19,.14,.17);cylinder(head,kind==='gwak'?MAT.red:MAT.rope,0,.08,0,.2,.055);box(head,cloth,.16,.04,-.2,.055,.34,.04).rotation.z=-.4;}
  } else {
    cone(head,MAT.straw,0,.21,0,.36,.24);cylinder(head,MAT.woodDark,0,.1,0,.34,.025);
    for(let j=0;j<10;j++){const a=j*Math.PI/5;between(head,MAT.rope,[0,.33,0],[Math.cos(a)*.34,.105,Math.sin(a)*.34],.006);}
    between(head,MAT.rope,[-.18,.1,.04],[0,-.17,.1],.007);between(head,MAT.rope,[.18,.1,.04],[0,-.17,.1],.007);
  }
  let cape=null;
  if(hero||samurai) {
    const capeGeo=new T.PlaneGeometry(.67,.87,10,12);capeGeo.translate(0,-.36,0);
    const p=capeGeo.attributes.position;
    for(let i=0;i<p.count;i++) {
      const t=(.075-p.getY(i))/.87,x=p.getX(i)*(.52+Math.sqrt(Math.max(0,t))*.48);
      p.setXYZ(i,x,p.getY(i)+Math.sin(x*23)*t*.016,Math.cos(x*31)*t*.018);
    }
    capeGeo.computeVertexNormals();
    cape=mesh(torso,capeGeo,costume(hero?capeColors[kind]:color,'cape'),0,.19,-.225);
    cape.userData.rest=capeGeo.attributes.position.array.slice();
  }
  const weapon=hero?HEROES[kind].attack:kind==='teppo'?'gun':['onmyoji','monk'].includes(kind)?'orb':kind==='drum'?'drum':samurai||light?'melee':'spear';
  if(enemyForm)enemyArsenal(kind,torso,weapons,armor,{...detailTools,cone});
  else if(hero&&weapon==='arrow') {
    for(const socket of weapons)socket.position.set(0,0,0);
    const sash=box(torso,MAT.red,0,-.18,.23,.53,.052,.028);sash.rotation.z=-.12;
    ball(torso,gold,0,-.18,.26,.075,.055,.025);
    const quiver=cylinder(torso,MAT.woodDark,.2,-.03,-.25,.09,.47);quiver.rotation.z=-.17;
    for(let j=0;j<4;j++){
      const x=.16+j*.025;between(torso,MAT.wood,[x,-.1,-.27],[x-.04,.43+j*.018,-.27],.006);
      mesh(torso,'bevel',MAT.rope,x-.04,.39+j*.018,-.27,.035,.10,.015);
    }
    const pts=[];for(let i=0;i<=20;i++){const a=-Math.PI/2+i*Math.PI/20;pts.push(new T.Vector3(0,Math.sin(a)*.43,Math.cos(a)*.15-.15));}
    const curve=new T.CatmullRomCurve3(pts);mesh(weapons[0],new T.TubeGeometry(curve,24,.017,6,false),MAT.wood,0,0,0);
    between(weapons[0],leather,[0,-.065,0],[0,.065,0],.023);
    for(const y of [-.37,.37])between(weapons[0],gold,[0,y-.018,-.073],[0,y+.018,-.073],.019);
    weapons[0].userData.bowTips=[[0,-.43,-.15],[0,.43,-.15]];
    between(weapons[1],MAT.wood,[0,0,0],[0,0,.60],.007);
    cone(weapons[1],MAT.steel,0,0,.64,.021,.08).rotation.x=Math.PI/2;
    for(const s of [-1,1])mesh(weapons[1],'bevel',MAT.rope,s*.018,0,.07,.035,.01,.09).rotation.y=s*.2;
    weapons[1].userData.muzzle=new T.Vector3(0,0,.68);
  } else if(weapon==='gun') {
    if(kind==='ahn') {
      weapons[1].position.set(0,0,0);
      const barrel=cylinder(weapons[1],MAT.steel,0,.025,.23,.022,.25);barrel.rotation.x=Math.PI/2;
      const chamber=cylinder(weapons[1],MAT.black,0,.02,.08,.045,.09);chamber.rotation.x=Math.PI/2;
      for(let j=0;j<6;j++){const a=j*Math.PI/3;const flute=cylinder(weapons[1],MAT.steel,Math.sin(a)*.037,.02+Math.cos(a)*.037,.08,.009,.075);flute.rotation.x=Math.PI/2;}
      const grip=mesh(weapons[1],'bevel',MAT.woodDark,0,-.045,.02,.052,.11,.065);grip.rotation.x=-.25;
      box(weapons[1],MAT.black,0,.05,.30,.013,.025,.018);
      weapons[1].userData.muzzle=new T.Vector3(0,.025,.355);
    } else {
      const barrel=cylinder(weapons[1],MAT.steel,0,-.42,.24,.025,.75);barrel.rotation.x=Math.PI/2;
      mesh(weapons[1],'bevel',MAT.woodDark,0,-.49,.04,.07,.14,.11);mesh(weapons[1],'bevel',MAT.black,0,-.42,.1,.075,.065,.25);
      weapons[1].userData.muzzle=new T.Vector3(0,-.42,.615);
    }
  } else if(weapon==='orb'||weapon==='lightning') {
    between(weapons[1],MAT.wood,[0,-.85,.045],[0,.75,.045],.026);
    ball(weapons[1],kind==='dangun'?MAT.jade:MAT.gold,0,.82,.045,.12);
    const orb=material(kind==='dangun'?'#a8efe6':'#f6d881',{emissive:kind==='dangun'?'#438d9f':'#b28337',emissiveIntensity:.9});ball(weapons[1],orb,0,.86,.045,.07);
    weapons[1].userData.muzzle=new T.Vector3(0,.86,.045);
    if(kind==='onmyoji')for(const side of [-1,1])box(weapons[1],MAT.snow,side*.12,.57,.045,.11,.33,.02);
    if(kind==='sejong')for(const s of [-1,1]) {
      const page=new T.Group();page.position.set(s*.064,-.45,.08);page.rotation.z=s*.18;weapons[0].add(page);
      mesh(page,'bevel',MAT.woodDark,0,-.02,0,.133,.035,.31);box(page,material('#d5c8a5'),0,.005,0,.12,.015,.29);
      for(let row=0;row<4;row++)for(let col=0;col<2;col++)box(page,material('#72644e'),s*(col-.5)*.025,.015,(row-1.5)*.048,.013,.003,.025);
    }
    if(kind==='eulji')for(const s of [-1,1])between(weapons[1],gold,[0,.75,.045],[s*.14,.94,.045],.022);
    if(kind==='dangun') {
      for(const y of [.57,.69,.81]){const seal=cylinder(weapons[1],gold,0,y,.045,.105,.018);seal.rotation.x=Math.PI/2;}
      for(const s of [-1,1]){between(weapons[1],MAT.rope,[s*.08,.6,.045],[s*.11,.36,.045],.006);ball(weapons[1],MAT.jade,s*.11,.35,.045,.026,.045,.018);}
    }
  } else if(weapon==='drum') {
    const drum=cylinder(torso,MAT.wood,0,-.06,.34,.24,.3);drum.rotation.x=Math.PI/2;
    for(const z of [.18,.51])cylinder(torso,MAT.rope,0,-.06,z,.245,.025).rotation.x=Math.PI/2;
    for(const socket of weapons)between(socket,MAT.wood,[0,-.48,.04],[0,-.15,.4],.018);
  } else if(weapon==='melee') {
    const sword=mesh(weapons[1],bladeGeometry(),MAT.steel,0,-.52,.03);sword.rotation.z=-.12;
    between(weapons[1],leather,[0,-.48,.03],[0,-.35,.03],.024);
    ball(weapons[1],gold,0,-.35,.03,.033);
    mesh(weapons[1],'bevel',gold,0,-.52,.03,.18,.035,.07);
    if(['gang','gwon','guard','elite','armored'].includes(kind)) {
      if(kind==='gwon') {
        const shape=new T.Shape();shape.moveTo(-.21,.29);shape.quadraticCurveTo(0,.36,.21,.29);shape.lineTo(.20,-.20);shape.quadraticCurveTo(0,-.34,-.20,-.20);shape.closePath();
        const shield=new T.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:true,bevelSize:.014,bevelThickness:.012,bevelSegments:2,curveSegments:10});
        mesh(weapons[0],shield,MAT.wood,-.04,-.45,.14);
        for(const x of [-.18,0,.18])box(weapons[0],MAT.steel,-.04+x,-.43,.21,.025,.51,.015);
        for(const y of [-.67,-.22])box(weapons[0],gold,-.04,y,.22,.35,.025,.015);
      } else ball(weapons[0],armor,-.04,-.45,.16,.205,.285,.065);
      ball(weapons[0],gold,-.04,-.45,.225,.07,.07,.025);
      between(weapons[0],gold,[-.04,-.69,.218],[-.04,-.21,.218],.013);
      between(weapons[0],gold,[-.21,-.45,.218],[.13,-.45,.218],.013);
    }
  } else {
    between(weapons[1],MAT.wood,[0,-.85,.045],[0,.8,.045],.018);
    cone(weapons[1],MAT.steel,0,.93,.045,.07,.3);
  }
  // Merge only within each rigid bone. Detach articulated children first so
  // their pivots survive baking, cloning and the crowd instancing path.
  for(let i=0;i<2;i++) {
    if(articulatedFeet){bakeStatic(ankles[i]);knees[i].remove(ankles[i]);}
    bakeStatic(knees[i]);legs[i].remove(knees[i]);bakeStatic(legs[i]);legs[i].add(knees[i]);
    if(articulatedFeet)knees[i].add(ankles[i]);
    bakeStatic(weapons[i]);wrists[i].remove(weapons[i]);bakeStatic(wrists[i]);wrists[i].add(weapons[i]);
    elbows[i].remove(wrists[i]);bakeStatic(elbows[i]);elbows[i].add(wrists[i]);
    arms[i].remove(elbows[i]);bakeStatic(arms[i]);arms[i].add(elbows[i]);
  }
  bakeStatic(head);
  for(const arm of arms)torso.remove(arm);
  if(cape)torso.remove(cape);
  bakeStatic(torso);for(const arm of arms)torso.add(arm);if(cape)torso.add(cape);
  const bowStrings=hero&&weapon==='arrow'?Array.from({length:2},()=>cylinder(rig,MAT.rope,0,1,0,.0045,.43)):null;
  if(hero||enemyForm) {
    const form=HERO_FORMS[kind]??enemyForm;rig.scale.fromArray(form.body);
    head.scale.set(.88/form.body[0],.88/form.body[1],.88/form.body[2]);
  }
  root.scale.setScalar(hero?1.02:enemyForm?.scale??(kind==='armored'?1.04:samurai?.9:.82));
  root.userData={rig,hips,legs,knees,ankles,torso,arms,elbows,wrists,weapons,head,cape,bowStrings,hero,kind,weapon,phase:0,costumeMaterials:[cloth,armor]};
  if(hero)animateHeroPose(root,0,false,0);
  else if(enemyForm)animateEnemyPose(root,0,false,0);
  root.userData.labelHeight=new T.Box3().setFromObject(root).max.y+.15;return root;
}

export function animateCharacter(root,time,moving,attack,dt) {
  const d=root.userData,t=time*8+d.phase, stride=moving?.5:0;
  if(d.vehicle) {for(const wheel of d.wheels)wheel.rotation.x=time*(moving?5:0);d.rig.position.y=Math.sin(time*5)*.007;if(d.ramBeam)d.ramBeam.position.z=Math.sin(T.MathUtils.clamp(attack/.25,0,1)*Math.PI*.8)*.18;return;}
  d.rig.position.y=(d.mountOffset??0)+(moving?Math.abs(Math.sin(t))*.035:Math.sin(time*2+d.phase)*.012);
  if(d.horseLegs)for(let i=0;i<d.horseLegs.length;i++)d.horseLegs[i].rotation.x=Math.sin(t+(i%3)*Math.PI)*stride;
  d.legs[0].rotation.x=Math.sin(t)*stride;d.legs[1].rotation.x=-Math.sin(t)*stride;
  for(let i=0;i<2;i++)d.knees[i].rotation.x=moving?Math.max(0,Math.sin(t+i*Math.PI))*.72:.04;
  const pulse=T.MathUtils.clamp(attack/.25,0,1),breath=Math.sin(time*2.4+d.phase)*.02;
  for(const arm of d.arms){arm.rotation.y=0;arm.position.z=-.012;}
  for(const elbow of d.elbows)elbow.rotation.x=-.18;
  for(const wrist of d.wrists)wrist.rotation.set(0,0,0);
  d.head.rotation.y=breath*.8;
  if(d.weapon==='arrow') {
    d.arms[0].rotation.x=-1.12+breath;d.arms[0].rotation.y=.25;d.elbows[0].rotation.x=-.05;
    d.arms[1].rotation.x=-.85+pulse*.2;d.arms[1].rotation.y=-.48-pulse*.2;d.arms[1].position.z=-pulse*.09;
    d.elbows[1].rotation.x=-.65-pulse*.3;
    for(let i=0;i<2;i++)d.wrists[i].rotation.x=-d.arms[i].rotation.x-d.elbows[i].rotation.x;
    d.torso.rotation.y=-.18-pulse*.12;
  } else if(d.weapon==='gun') {
    d.arms[1].rotation.x=-1.36+pulse*.24;d.arms[0].rotation.x=-1.12+pulse*.1;d.arms[0].rotation.y=.55;
    d.elbows[0].rotation.x=-.45;d.elbows[1].rotation.x=-.12;
    for(let i=0;i<2;i++)d.wrists[i].rotation.x=-(d.arms[i].rotation.x+d.elbows[i].rotation.x)*.92;
    d.torso.rotation.y=-.13+pulse*.1;
  } else if(['orb','lightning'].includes(d.weapon)) {
    d.arms[0].rotation.x=d.kind==='sejong'?-.62:-.18+breath;
    d.arms[1].rotation.x=-.24-pulse*.9;d.arms[1].rotation.y=-pulse*.3;d.torso.rotation.y=-pulse*.22;
    d.elbows[0].rotation.x=d.kind==='sejong'?-.48:-.18;d.elbows[1].rotation.x=-.14-pulse*.55;
    for(let i=0;i<2;i++)d.wrists[i].rotation.x=-(d.arms[i].rotation.x+d.elbows[i].rotation.x)*.9;
  } else {
    const swing=Math.sin(pulse*Math.PI*.85);
    d.arms[0].rotation.x=-Math.sin(t)*stride*.5-swing*.3;
    d.arms[1].rotation.x=Math.sin(t)*stride*.5-swing*1.65;d.arms[1].rotation.y=-swing*.55;
    d.elbows[0].rotation.x=-.18-swing*.13;d.elbows[1].rotation.x=-.18-swing*.50;
    d.wrists[0].rotation.x=-(d.arms[0].rotation.x+d.elbows[0].rotation.x)*.65;
    d.torso.rotation.y=swing*.35;
  }
  if(d.hero)animateHeroPose(root,time,moving,attack);
  else if(ENEMY_FORMS[d.kind])animateEnemyPose(root,time,moving,attack);
  if(d.cape) {
    const p=d.cape.geometry.attributes.position,rest=d.cape.userData.rest;
    for(let i=0;i<p.count;i++) {const y=rest[i*3+1],k=Math.max(0,-y/.8);p.setZ(i,rest[i*3+2]-k*.13+Math.sin(time*4+rest[i*3]*5+k*4)*k*(moving?.09:.04));}
    p.needsUpdate=true;d.cape.geometry.computeVertexNormals();
  }
}
