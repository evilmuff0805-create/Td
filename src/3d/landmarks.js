import * as T from 'three';
import { MAT,material,mesh,box,ball,cylinder,cone,between,bakeStatic,roof,roofRise,towerGallery,towerPlinth,towerFlag } from './models.js';
import { towerVisual } from './tower-visuals.js';
import { contourGeometry,faceGeometry } from './sculpture.js';

function bell(g,x,y,z,size=1) {
  const bronze=material('#8d8050',{metalness:.65,roughness:.4});
  const profile=[[0,.24],[.10,.24],[.17,.20],[.20,.13],[.225,-.08],[.255,-.19],[.30,-.23],[.295,-.255],[.26,-.25],[.225,-.18],[.19,.10],[.12,.17],[0,.17]].map(p=>new T.Vector2(...p));
  mesh(g,new T.LatheGeometry(profile,28),bronze,x,y,z,size,size,size);
  torus(g,MAT.gold,x,y-.225*size,z,.28*size,.018*size,Math.PI/2);
  for(const yy of [.14,-.14])torus(g,bronze,x,y+yy*size,z,(yy>0?.197:.247)*size,.012*size,Math.PI/2);
  ball(g,bronze,x,y+.25*size,z,.10*size,.055*size,.09*size);
  const loop=new T.Mesh(new T.TorusGeometry(.065*size,.018*size,5,12),MAT.gold);loop.position.set(x,y+.32*size,z);g.add(loop);
  for(let k=0;k<4;k++)for(let row=0;row<3;row++)for(let col=0;col<3;col++) {
    const a=k*Math.PI/2+(col-1)*.10,r=.218-row*.010;
    ball(g,MAT.gold,x+Math.sin(a)*r*size,y+(.045+row*.035)*size,z+Math.cos(a)*r*size,.009*size);
  }
}
function torus(g,mat,x,y,z,r,tube=.025,rx=0,ry=0) {
  const o=new T.Mesh(new T.TorusGeometry(r,tube,6,32),mat);o.position.set(x,y,z);o.rotation.set(rx,ry,0);o.castShadow=true;g.add(o);return o;
}
function pagoda(g,x,z,base,floors,gold=false,scale=1) {
  for(let i=0;i<floors;i++) {
    const w=(1.16-i*.10)*scale,y=base+i*.34*scale;
    mesh(g,'bevel',MAT.stone,x,y+.12*scale,z,w*.54,.22*scale,w*.54);
    for(const side of [-1,1])for(const t of [-1,1])box(g,MAT.stoneDark,x+side*w*.25,y+.12*scale,z+t*w*.25,.035,.20*scale,.035);
    mesh(g,'bevel',MAT.stone,x,y+.225*scale,z,w*.68,.06*scale,w*.68);
    const eave=mesh(g,new T.CylinderGeometry(w*.62/Math.SQRT2,w/Math.SQRT2,.09*scale,4,1),MAT.stoneDark,x,y+.28*scale,z);eave.rotation.y=Math.PI/4;
    mesh(g,'bevel',MAT.stone,x,y+.32*scale,z,w*.98,.035*scale,w*.98);
    box(g,MAT.snow,x,y+.33*scale,z,w*.94,.035*scale,w*.94);
    if(gold)box(g,MAT.gold,x,y+.28*scale,z+w*.5,w,.025,.025);
  }
  const top=base+floors*.34*scale;cylinder(g,MAT.gold,x,top+.2*scale,z,.025,.4*scale);ball(g,MAT.gold,x,top+.39*scale,z,.065*scale);
  for(let j=0;j<3;j++)ball(g,MAT.stone,x,top+(.05+j*.09)*scale,z,(.10-j*.022)*scale,.026*scale,(.10-j*.022)*scale);
}
function statue(g,y,scale=1) {
  const skin=material('#b3ab86',{metalness:.24,roughness:.65});
  const figure=new T.Group();figure.position.y=y;figure.scale.setScalar(scale);g.add(figure);
  mesh(figure,faceGeometry(),skin,0,.54,.03,.82,.82,.82);
  ball(figure,skin,0,.73,-.015,.11,.10,.10);ball(figure,skin,0,.82,-.015,.045,.05,.045);
  ball(figure,skin,0,.51,.165,.018,.035,.02);
  for(const side of [-1,1]) {
    between(figure,MAT.stoneDark,[side*.025,.56,.157],[side*.075,.56,.15],.004);
    ball(figure,skin,side*.145,.51,.01,.02,.06,.02);
  }
  mesh(figure,contourGeometry('statue-robe',[[-.04,.28,.21,.015],[.05,.28,.18,0],[.26,.22,.14,-.015],[.40,.15,.12,0]],{segments:24,folds:.025}),skin,0,0,0);
  for(const side of [-1,1]) {
    const knee=ball(figure,skin,side*.16,-.03,.13,.23,.11,.17);knee.rotation.y=side*.3;
    between(figure,skin,[side*.20,.31,.01],[side*.23,.15,.09],.065);
    between(figure,skin,[side*.23,.15,.09],[side*.07,.10,.23],.047);ball(figure,skin,side*.065,.10,.23,.045,.022,.045);
    for(let j=0;j<3;j++)between(figure,MAT.stone,[side*(.08+j*.05),.28-j*.05,.135],[side*(.02+j*.06),.02,.20],.007);
  }
  mesh(figure,'bevel',MAT.stone,0,-.145,.03,.75,.12,.56);
  for(let j=0;j<10;j++){const a=j*Math.PI/5;const petal=ball(figure,skin,Math.sin(a)*.30,-.09,.03+Math.cos(a)*.22,.075,.035,.055);petal.rotation.y=a;}
  torus(figure,MAT.gold,0,.44,-.12,.40,.025);
}
function stoneDome(g,r,y,flatten=1,open=false) {
  // Separate curved ashlar blocks give both the outside and open interior
  // thickness, with recessed joints instead of a smooth half-sphere.
  const rows=6,arc=open?Math.PI:Math.PI*2,start=open?Math.PI/2:0;
  for(let row=0;row<rows;row++) {
    const a=row/rows*Math.PI/2+.009,b=(row+1)/rows*Math.PI/2-.009,n=Math.max(5,Math.round(Math.sin((a+b)/2)*r*arc/.19));
    for(let j=0;j<n;j++) {
      const p=start+j/n*arc+.009,q=start+(j+1)/n*arc-.009;
      const point=(radius,t,phi)=>[Math.sin(phi)*Math.sin(t)*radius,y+Math.cos(t)*radius*flatten,Math.cos(phi)*Math.sin(t)*radius];
      const outer=[point(r,a,p),point(r,a,q),point(r,b,q),point(r,b,p)],inner=[point(r-.085,a,p),point(r-.085,a,q),point(r-.085,b,q),point(r-.085,b,p)],v=[...outer,...inner],pos=[],uv=[];
      for(const [i,k,l]of [[0,1,2],[0,2,3],[4,6,5],[4,7,6],[0,4,5],[0,5,1],[3,2,6],[3,6,7],[0,3,7],[0,7,4],[1,5,6],[1,6,2]])for(const n of [i,l,k]){pos.push(...v[n]);uv.push(v[n][0],v[n][1]);}
      const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.computeVertexNormals();mesh(g,geo,(j+row)%5?MAT.stone:MAT.stoneDark,0,0,0);
    }
  }
  ball(g,MAT.stone,0,y+r*flatten-.008,0,.10,.03,.10);
}
function crystal(g,x,y,z,r,h) {const ice=material('#72c4d4',{roughness:.24,metalness:.2,emissive:'#2f7c93',emissiveIntensity:.3});const c=cone(g,ice,x,y+h/2,z,r,h);c.rotation.z=x*.18;}

export function landmarkModel(type,level=1,branch=null) {
  const g=new T.Group(),lv=Math.min(3,level),isMax=level===4,gold=lv===3,base=.13+(lv-1)*.18;
  towerPlinth(g,1.15+(lv-1)*.13,1.0,base);
  if(type==='bosingak') {
    const y=base+.14,h=.83+(lv-1)*.10;towerGallery(g,1.02,.82,y,h,{open:true,railing:lv>1,gold});
    bell(g,0,y+.4,0,1+(lv-1)*.12);between(g,MAT.wood,[-.46,y+.4,.33],[.46,y+.4,.33],.045);
    roof(g,1.62,1.38,y+h+.03);if(gold){towerGallery(g,.7,.65,2.2,.47,{open:true,gold});roof(g,1.14,1.02,2.72);}
    if(branch==='A'){bell(g,0,1.03,0,1.6);torus(g,MAT.gold,0,1.5,-.17,.65,.035);}
    if(branch==='B')for(const side of [-1,1]){bell(g,side*.65,.96,.02,.7);towerFlag(g,side*.72,1.35,0,true);}
  } else if(type==='cheomseong') {
    const height=1.0+lv*.3,rows=6+lv*2;
    for(let row=0;row<rows;row++) {
      const radius=.43-row/rows*.12;
      for(let j=0;j<10;j++) {const a=(j+(row%2)*.5)*Math.PI/5;const stone=mesh(g,'bevel',(row+j)%3?MAT.stone:MAT.stoneDark,Math.sin(a)*radius,base+(row+.5)*height/rows,Math.cos(a)*radius,.27,height/rows-.012,.16);stone.rotation.y=a;}
    }
    box(g,MAT.woodDark,0,base+height*.65,.39,.18,.24,.025);box(g,MAT.stone,0,base+height,.0,.85,.13,.85);
    for(const side of [-1,1])box(g,MAT.stone,side*.37,base+height+.15,0,.13,.24,.85);
    if(lv>1){torus(g,MAT.gold,0,base+height+.56,0,.36,.022,Math.PI/2);torus(g,MAT.gold,0,base+height+.56,0,.36,.022,0,.8);ball(g,MAT.gold,0,base+height+.56,0,.08);}
    if(gold)for(const side of [-1,1])towerFlag(g,side*.65,1.3,-.1,true);
    if(isMax){torus(g,MAT.gold,0,base+height+.67,0,branch==='A'?.68:.52,.035,0,.6);torus(g,MAT.gold,0,base+height+.67,0,.54,.025,.8,0);if(branch==='B')for(let i=0;i<3;i++){const tube=cylinder(g,MAT.steel,Math.cos(i*2.09)*.53,base+height+.45,Math.sin(i*2.09)*.53,.08,.45);tube.rotation.z=.8;}}
  } else if(type==='haeinsa') {
    towerGallery(g,1.12,.82,base+.14,.84,{open:true,railing:lv>1,gold});
    for(const side of [-1,1])for(let row=0;row<3;row++)for(let col=0;col<5;col++)box(g,col%2?MAT.woodDark:MAT.wood,(col-2)*.19,base+.27+row*.16,side*.27,.17,.11,.25);
    roof(g,1.7,1.34,base+1.03);if(gold){towerGallery(g,.75,.64,2.16,.43,{gold:true});roof(g,1.2,1.05,2.64);}
    if(isMax)for(const side of [-1,1]) {towerFlag(g,side*.76,1.3,0,true);if(branch==='A'){mesh(g,'bevel',MAT.stone,side*.8,.48,.58,.20,.9,.2);box(g,material('#80c3b4',{emissive:'#4fa48e',emissiveIntensity:.6}),side*.8,.7,.69,.12,.4,.015);}else box(g,MAT.gold,side*.72,.51,.55,.3,.4,.3);}
  } else if(type==='seokguram') {
    const size=1+(lv-1)*.12;stoneDome(g,.72*size,base+.3,1,true);
    for(let j=0;j<13;j++) {const a=j*Math.PI/12,o=mesh(g,'bevel',j%4?MAT.stone:MAT.stoneDark,Math.cos(a)*.65*size,base+.3+Math.sin(a)*.65*size,.035,.15*size,.145*size,.19);o.rotation.z=a-Math.PI/2;}
    statue(g,base+.33,.8+(lv-1)*.13);
    if(lv>1)for(const side of [-1,1]){mesh(g,'bevel',MAT.stone,side*.68,base+.25,0,.23,.5,.9);box(g,MAT.snow,side*.68,base+.52,0,.24,.04,.9);}
    if(gold)torus(g,MAT.gold,0,base+.96,-.13,.57,.045);
    if(branch==='A'){torus(g,MAT.gold,0,base+1.1,-.15,.83,.05);for(let j=0;j<12;j++){const a=j*Math.PI/6;between(g,MAT.gold,[Math.cos(a)*.73,base+1.1+Math.sin(a)*.73,-.14],[Math.cos(a)*.95,base+1.1+Math.sin(a)*.95,-.14],.025);}}
    if(branch==='B')for(const side of [-1,1]){const s=new T.Group();statue(s,0,.48);s.position.set(side*.72,base+.3,.3);g.add(s);}
  } else if(type==='gyeongbok') {
    towerGallery(g,1.22,.93,base+.18,.84,{railing:lv>1,gold});roof(g,1.82,1.5,base+1.06);
    if(gold){towerGallery(g,.92,.78,2.24,.54,{gold:true});roof(g,1.52,1.24,2.83);}
    if(lv>1)for(const side of [-1,1])towerFlag(g,side*.79,base+.4,-.15,gold);
    if(branch==='A'){towerGallery(g,.54,.5,3.35,.37,{gold:true});roof(g,.92,.8,3.75);}
    if(branch==='B')for(const side of [-1,1]){box(g,MAT.wood,side*.78,.61,.25,.48,.56,.55);box(g,MAT.gold,side*.78,.67,.54,.44,.12,.04);roof(g,.71,.76,.96);}
  } else if(type==='namhansan') {
    for(const side of [-1,1]){const wall=new T.Group();for(let j=0;j<3;j++){mesh(wall,'bevel',MAT.stone,side*.55,base+.13+j*.18,0,.26,.16,1.1);}for(const z of [-.4,0,.4])box(wall,MAT.stone,side*.55,base+.7,z,.28,.26,.24);g.add(wall);}
    towerGallery(g,.74,.69,base+.62,.62,{open:true,gold});roof(g,1.34,1.18,base+1.27);
    for(const side of [-1,1])between(g,MAT.wood,[side*.28,base+.1,.4],[side*.28,base+.9,.4],.025);
    if(gold){towerGallery(g,.65,.55,2.25,.45,{gold:true});roof(g,1.05,.96,2.74);}
    if(isMax)for(const side of [-1,1]){towerFlag(g,side*.75,1.3,-.2,true);if(branch==='A')mesh(g,'bevel',MAT.steel,side*.68,.8,.56,.38,.65,.08);else cone(g,MAT.gold,side*.67,1,.5,.18,.55);}
  } else if(type==='seokbinggo') {
    stoneDome(g,.7,base+.05,.65+(lv-1)*.15);
    box(g,MAT.woodDark,0,base+.24,.64,.38,.5,.07);for(const side of [-1,1])box(g,MAT.stone,side*.28,base+.3,.62,.17,.66,.25);box(g,MAT.stone,0,base+.65,.62,.65,.16,.25);
    for(let j=0;j<lv;j++){cylinder(g,MAT.stone,(j-(lv-1)/2)*.33,base+.75,0,.07,.32);crystal(g,(j-(lv-1)/2)*.33,base+.88,0,.10,.3+lv*.1);}
    if(gold)for(const side of [-1,1])crystal(g,side*.53,base+.44,.15,.14,.8);
    if(isMax)for(let j=0;j<5;j++){const a=j*1.257;crystal(g,Math.cos(a)*.36,base+.88,Math.sin(a)*.36,branch==='A'?.15:.11,branch==='A'?1.5:1);}
    if(branch==='B'){roof(g,1.6,1.25,base+1.6);for(const side of [-1,1])cylinder(g,MAT.wood,side*.6,base+.8,0,.04,1.6);}
  } else if(type==='bulguksa') {
    pagoda(g,0,0,base+.08,lv+1,gold);
    if(lv>1)for(const side of [-1,1]){ball(g,MAT.stone,side*.49,base+.18,.37,.14,.16,.12);box(g,MAT.stone,side*.49,base+.06,.37,.25,.10,.24);}
    if(branch==='A')pagoda(g,0,0,base+.08,7,true,.9);
    if(branch==='B'){pagoda(g,-.42,0,base+.08,4,true,.72);pagoda(g,.42,0,base+.08,4,true,.72);}
  } else throw new Error(`Missing landmark model: ${type}`);
  if(gold&&type!=='cheomseong')for(const side of [-1,1])box(g,MAT.gold,side*.54,base+.07,.54,.05,.07,.03);
  bakeStatic(g);g.userData.visual=towerVisual(type,level,branch,level===4);g.userData.labelHeight=new T.Box3().setFromObject(g).max.y+.16;return g;
}

export function specializeFortress(g,type,branch) {
  if(type==='sungnyemun') {
    if(branch==='A') {
      const a=material('#83d1d4',{emissive:'#347f94',emissiveIntensity:.35}),anchor=2.83+roofRise(1.46,1.26)+.095;
      between(g,MAT.gold,[0,anchor,0],[0,anchor+.57,0],.025);cone(g,a,0,anchor+.62,0,.13,.26);
      for(const side of [-1,1]){box(g,MAT.gold,side*.45,2.69,.42,.18,.17,.04);between(g,MAT.wood,[side*.42,2.6,.45],[side*.42,3.2,.45],.025);}
    } else for(const side of [-1,1]) {
      const gallery=new T.Group();towerGallery(gallery,.52,.58,1.2,.66,{open:true,gold:true});roof(gallery,.90,.88,1.9);gallery.position.x=side*.98;g.add(gallery);
      mesh(g,'bevel',MAT.stone,side*.98,.82,0,.24,.72,.6);
      between(g,MAT.woodDark,[side*.66,.85,0],[side*1.18,1.19,0],.045);
      for(let j=0;j<3;j++)between(g,MAT.wood,[side*.7+(j-1)*.07,1.4,.5],[side*.7+(j-1)*.07,2.1,.5],.012);
    }
  } else if(branch==='A') {
    const gun=g.userData.gun;gun.scale.set(1.24,1.2,1.28);for(const side of [-1,1])box(g,MAT.steel,side*.55,1.46,.4,.21,.62,.48);
  } else {
    g.remove(g.userData.gun);const rack=new T.Group();rack.position.set(0,1.28,.18);rack.userData.restZ=.18;rack.userData.muzzle=new T.Vector3(0,.34,.54);
    box(rack,MAT.woodDark,0,0,0,.73,.12,.68);
    for(let row=0;row<3;row++)for(let col=0;col<4;col++){const x=(col-1.5)*.16,y=.1+row*.14;box(rack,MAT.wood,x,y,0,.12,.11,.64);between(rack,MAT.steel,[x,y,.1],[x,y+.16,.65],.027);cone(rack,MAT.gold,x,y+.18,.69,.04,.13).rotation.x=Math.PI/2;}
    for(const side of [-1,1]){const wheel=cylinder(rack,MAT.woodDark,side*.44,-.1,-.13,.23,.08);wheel.rotation.z=Math.PI/2;}
    g.add(rack);g.userData.gun=rack;
  }
}
