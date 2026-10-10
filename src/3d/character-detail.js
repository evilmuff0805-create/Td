import * as T from 'three';
import { faceGeometry,contourGeometry,faceFrame } from './sculpture.js';
import { faceForm } from './hero-design.js';
import { characterMaterial } from './character-surfaces.js';

const portraits = {
  yi:     { skin:'#d4a47e', hair:'#382e2b', brow:.13, beard:.10 },
  sejong: { skin:'#ddb18d', hair:'#3c302c', brow:.04, beard:.18 },
  eulji:  { skin:'#cda482', hair:'#3d3330', brow:.18, beard:.10 },
  gang:   { skin:'#c9ad91', hair:'#a3a29b', brow:.14, beard:.20 },
  gwon:   { skin:'#cda885', hair:'#62564a', brow:.12, beard:.15 },
  gwak:   { skin:'#d6a37b', hair:'#332c29', brow:.18, beard:.06 },
  ahn:    { skin:'#d1ab88', hair:'#302b28', brow:.08, beard:0 },
  dangun: { skin:'#dcc2a4', hair:'#e0ddd0', brow:.04, beard:.24 },
  ashigaru:{skin:'#c9a17e',hair:'#39312c',brow:.10,beard:0},
  teppo:   {skin:'#c6a285',hair:'#45403a',brow:.14,beard:.025},
  scout:   {skin:'#cfab86',hair:'#3b302a',brow:.08,beard:0},
  samurai: {skin:'#c5a282',hair:'#342e2c',brow:.18,beard:.035},
  ninja:   {skin:'#c3a48a',hair:'#302f30',brow:.16,beard:0},
  onmyoji: {skin:'#d4b99b',hair:'#514b43',brow:.05,beard:0},
  cavalry: {skin:'#bd9877',hair:'#433831',brow:.15,beard:.04},
  drum:    {skin:'#cba27e',hair:'#43372d',brow:.08,beard:0},
  armored: {skin:'#bea18a',hair:'#554b43',brow:.2,beard:.05},
  konishi: {skin:'#caa989',hair:'#3d3430',brow:.12,beard:.035},
  kato:    {skin:'#c2a183',hair:'#3b332d',brow:.2,beard:.05},
  wakizaka:{skin:'#bf9d7c',hair:'#53493d',brow:.16,beard:.035},
  ukita:   {skin:'#d0ad88',hair:'#36302d',brow:.08,beard:0},
  ishida:  {skin:'#cfb393',hair:'#3b3531',brow:.1,beard:.02},
  so:      {skin:'#d0b294',hair:'#3e352f',brow:.08,beard:0},
  kuroda:  {skin:'#c2a38b',hair:'#60574d',brow:.18,beard:.045},
  todo:    {skin:'#c8aa8c',hair:'#554b42',brow:.14,beard:.045},
  kuki:    {skin:'#bd9b7d',hair:'#73695b',brow:.18,beard:.055},
  kurushima:{skin:'#bb9674',hair:'#44382d',brow:.18,beard:.035},
  shimazu: {skin:'#c4a789',hair:'#827a6d',brow:.2,beard:.065},
  hideyoshi:{skin:'#d1b18a',hair:'#7c7261',brow:.14,beard:.035},
  militia: {skin:'#cba581',hair:'#4c3d31',brow:.08,beard:0},
  guard:   {skin:'#c9a580',hair:'#3b312c',brow:.12,beard:.025},
  elite:   {skin:'#c6a17d',hair:'#4b3e34',brow:.18,beard:.035},
  monk:    {skin:'#d1b391',hair:'#777064',brow:.05,beard:.045},
};
export const portraitPalette=kind=>portraits[kind]??{skin:'#c79a76',hair:'#39312c',brow:.17,beard:0};

const details=new Map(),forward=new T.Vector3(0,0,1);
function detailGeometry(key,create) {if(!details.has(key))details.set(key,create());return details.get(key);}
export function combedHairGeometry() {
  return detailGeometry('combed-hair-cap',()=>{
    const segments=32,g=contourGeometry('combed-hair-cap',[[.075,.181,.16,-.015],[.11,.186,.166,-.017],[.16,.174,.163,-.02],[.21,.125,.13,-.022],[.247,.04,.055,-.022],[.263,.01,.015,-.03]],{segments,steps:4,smooth:true}).clone();
    const pos=g.attributes.position,uv=g.attributes.uv;
    for(let i=0;i<pos.count-2;i++)if(uv.getY(i)<.25&&pos.getZ(i)>0){
      const part=.022*Math.exp(-(((pos.getX(i)-.035)/.045)**2)),falloff=(1-uv.getY(i)/.25)**2;
      pos.setY(i,pos.getY(i)+part*falloff);
    }
    g.computeVertexNormals();const normals=g.attributes.normal,rows=(pos.count-2)/(segments+1);
    for(let j=0;j<rows;j++){
      const a=j*(segments+1),b=a+segments,n=new T.Vector3().fromBufferAttribute(normals,a).add(new T.Vector3().fromBufferAttribute(normals,b)).normalize();
      normals.setXYZ(a,n.x,n.y,n.z);normals.setXYZ(b,n.x,n.y,n.z);
    }
    return g;
  });
}
function eyeLens(width,height) {
  return detailGeometry(`eye-${width}-${height}`,()=>{
    const p=[0,0,.005],uv=[.5,.5],idx=[],segments=24,rings=3;
    for(let j=1;j<=rings;j++)for(let i=0;i<=segments;i++){
      const a=i/segments*Math.PI*2,r=j/rings,x=Math.cos(a)*r,y=Math.sin(a)*Math.abs(Math.sin(a))**.35*r;
      p.push(x*width,y*height,.005*(1-r*r));uv.push(.5+x*.5,.5+y*.5);
      if(j===1&&i<segments)idx.push(0,i+1,i+2);
      if(j>1&&i<segments){const n=1+(j-2)*(segments+1)+i;idx.push(n,n+segments+1,n+1,n+1,n+segments+1,n+segments+2);}
    }
    const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(p,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();return geo;
  });
}

export function sculptFace(head, kind, { ball, box, between, mesh, material, MAT }) {
  const p=portraitPalette(kind),f=faceForm(kind),skin=characterMaterial('skin',p.skin),hair=characterMaterial('hair',p.hair);
  mesh(head,faceGeometry(kind),skin,0,0,0);
  const line=(name,mat,points,r,lift=.0015)=>{
    const geo=detailGeometry(`${kind}-${name}`,()=>new T.TubeGeometry(new T.CatmullRomCurve3(points.map(([x,y])=>faceFrame(kind,x*f.eyes,y*f.length,lift).position)),12,r,5,false));
    return mesh(head,geo,mat,0,0,0);
  };
  const lip=material('#9d6d60',{roughness:.98,envMapIntensity:.2}),crease=material('#ac8065',{roughness:1,envMapIntensity:.2});
  for (const side of [-1,1]) {
    ball(head,skin,side*.176*f.cheek,-.025*f.length,-.025,.027,.051,.028);
    ball(head,characterMaterial('skin','#b77e65'),side*.187*f.cheek,-.027*f.length,-.007,.012,.029,.009);
    const frame=faceFrame(kind,side*.069*f.eyes,.021*f.length,.002),eye=new T.Group();eye.position.copy(frame.position);eye.quaternion.setFromUnitVectors(forward,frame.normal);head.add(eye);
    const w=.034*f.eyes,h=.014*f.lid;
    mesh(eye,eyeLens(w,h),material('#ded7c3',{roughness:.94,envMapIntensity:.25}),0,0,0);
    ball(eye,material('#715a3d',{roughness:.7,envMapIntensity:.3}),0,0,.0055,.0105,.0105*f.lid,.0018);
    ball(eye,material('#28302e',{roughness:.7,envMapIntensity:.3}),0,0,.007,.0048,.0075*f.lid,.0014);
    ball(eye,material('#f5e9c9',{roughness:.7}),-.003,.003,.008,.0018);
    for(const [upper,mat,r]of [[true,hair,.0018],[false,crease,.0011]]) {
      const lid=detailGeometry(`lid-${kind}-${upper}`,()=>{
        const pts=[];for(let i=0;i<=8;i++){const x=-1+i/4,y=Math.max(0,1-x*x)**.675;pts.push(new T.Vector3(x*w,(upper?1:-1)*h*y,.0005));}
        return new T.TubeGeometry(new T.CatmullRomCurve3(pts),16,r,5,false);
      });mesh(eye,lid,mat,0,0,0);
    }
    line(`brow-${side}`,hair,[[side*.035,.063-p.brow*.02],[side*.073,.069],[side*.108,.057+p.brow*.03]],.0048,.002);
    line(`nostril-${side}`,crease,[[side*.011,-.052],[side*.020,-.055],[side*.027,-.052]],.0016,.0008);
    if(f.age>.5) {
      line(`eye-crease-${side}`,crease,[[side*.104,.008],[side*.12,.002],[side*.133,-.005]],.0013*f.age,.0008);
      line(`cheek-crease-${side}`,crease,[[side*.035,-.063],[side*.048,-.08],[side*.055,-.101]],.0013*f.age,.0008);
    }
  }
  line('upper-lip',lip,[[-.027,-.092],[-.012,-.087],[0,-.089],[.012,-.087],[.027,-.092]],.0024,.001);
  line('lower-lip',lip,[[-.025,-.094],[0,-.098],[.025,-.094]],.0022,.001);
  ball(head,hair,0,.105,-.057,.18,.14,.143);
  if(p.beard) {
    const beard=detailGeometry(`shaped-beard-${kind}`,()=>{
      const g=contourGeometry(`beard-${kind}`,[[-.145-p.beard*.9,.021,.018,.098],[-.14-p.beard*.45,.075,.046,.108],[-.135,.115,.075,.084],[-.105,.115,.048,.078]],{segments:28,steps:4,folds:.035,arc:Math.PI*1.35,smooth:true}).clone();
      const pos=g.attributes.position,uv=g.attributes.uv;
      for(let i=0;i<pos.count;i++){
        const a=(uv.getX(i)-.5)*Math.PI*1.35,t=uv.getY(i),tips=.009*(.5+.5*Math.cos(a*7))*(1-t)**2;
        pos.setXYZ(i,pos.getX(i)*f.jaw,(pos.getY(i)+.039*Math.abs(Math.sin(a))*t**3-tips)*f.length,pos.getZ(i)*f.depth);
      }
      g.computeVertexNormals();return g;
    });
    mesh(head,beard,hair,0,0,0);
    for(const s of [-1,1]) {
      line(`mustache-${s}`,hair,[[s*.006,-.072],[s*.027,-.074],[s*.052,-.084]],.0075,.004);
      line(`sideburn-${s}`,hair,[[s*.144,-.014],[s*.137,-.071],[s*.117,-.128]],.010,.003);
    }
  }
  if(kind==='ahn')for(const s of [-1,1])line(`mustache-${s}`,hair,[[s*.006,-.072],[s*.026,-.073],[s*.052,-.079]],.0045,.002);
  if(kind==='dangun')for(const s of [-1,1])for(let j=0;j<3;j++) {
    const curl=ball(head,hair,s*(.17-j*.012),-.07-j*.07,-.072,.032,.093,.043);curl.rotation.z=s*.13;
  }
  head.userData.portrait = kind;head.userData.faceForm=f;
}

export function heroHeadgear(head,kind,armor,{ball,box,cylinder,cone,between,mesh,material,MAT}) {
  const gold=MAT.gold,hair=characterMaterial('hair',portraitPalette(kind).hair);
  if(['yi','eulji','gang','gwon'].includes(kind)) {
    const tall=kind==='eulji',low=kind==='gang',top=tall?.35:low?.245:.28;
    mesh(head,contourGeometry(`helmet-${kind}`,[[.066,.208,.188,-.018],[.12,.216,.192,-.025],[.205,.167,.154,-.035],[top,.018,.021,-.045]],{segments:28}),armor,0,0,0);
    cylinder(head,gold,0,.074,-.018,.213,.025);
    for(const s of [-1,1])for(let row=0;row<3;row++) {
      const guard=mesh(head,'bevel',armor,s*(.192+row*.006),.018-row*.058,-.063,.055,.073,.23);guard.rotation.z=s*-.11;
      box(head,gold,s*(.224+row*.006),.037-row*.058,-.063,.009,.008,.20);
    }
    for(let j=0;j<7;j++) {
      const a=(j/6-.5)*2.6;
      between(head,gold,[Math.sin(a)*.205,.081,Math.cos(a)*.188-.02],[Math.sin(a)*.152,.209,Math.cos(a)*.137-.035],.006);
    }
    if(kind==='yi') {
      box(head,gold,0,.18,.16,.045,.18,.025);
      for(let j=0;j<5;j++){const plume=ball(head,MAT.red,0,.30+j*.03,-.055-j*.034,.029,.09-j*.008,.045);plume.rotation.x=-.5;}
    } else if(kind==='eulji') {
      for(const s of [-1,1]) {
        const wing=mesh(head,'bevel',gold,s*.16,.29,-.035,.055,.29,.065);wing.rotation.z=s*-.42;
        between(head,gold,[s*.04,.22,.13],[s*.075,.45,.07],.017);
      }
      ball(head,MAT.jade,0,.19,.17,.045,.06,.015);
    } else if(kind==='gang') {
      for(const s of [-1,0,1]){const crest=mesh(head,'bevel',MAT.steel,s*.085,.265,.005,.034,.14-Math.abs(s)*.045,.04);crest.rotation.z=s*-.25;}
      ball(head,gold,0,.11,.19,.035);
    } else {
      mesh(head,'bevel',MAT.steel,0,.16,.163,.08,.14,.026);
      for(let j=0;j<3;j++)ball(head,hair,0,.29+j*.018,-.065-j*.035,.04,.065,.055);
    }
  } else if(kind==='sejong') {
    mesh(head,contourGeometry('royal-cap',[[.095,.181,.16,-.03],[.22,.183,.153,-.03],[.32,.13,.13,-.03]],{segments:20}),MAT.black,0,0,0);
    for(const s of [-1,1]){const wing=mesh(head,'bevel',MAT.black,s*.27,.23,-.09,.25,.045,.14);wing.rotation.z=s*.08;box(head,MAT.woodDark,s*.30,.233,-.017,.16,.012,.008);}
  } else if(kind==='dangun') {
    ball(head,hair,0,.1,-.067,.205,.20,.18);cylinder(head,gold,0,.13,0,.203,.045);
    for(const s of [-1,0,1]) {
      between(head,gold,[s*.13,.15,.13],[s*.15,.33+(!s?.055:0),.10],.018);
      ball(head,MAT.jade,s*.15,.34+(!s?.055:0),.10,.027,.042,.018);
    }
  } else if(kind==='gwak') {
    ball(head,hair,0,.11,-.044,.182,.14,.16);ball(head,hair,0,.25,-.07,.064,.075,.064);
    cylinder(head,MAT.red,0,.075,-.008,.195,.052);
    for(const s of [-1,1]){const tail=mesh(head,'bevel',MAT.red,s*.045,-.06,-.21,.052,.32,.024);tail.rotation.z=s*.27;}
  } else if(kind==='ahn') {
    // Swept parted hair and the coat collar give the pistol hero his silhouette.
    const cap=combedHairGeometry();
    mesh(head,cap,hair,0,0,0);
    const collider=new T.Mesh(cap,hair),ray=new T.Raycaster(),ridge=characterMaterial('hair','#3d3530');
    for(let j=0;j<9;j++) {
      const strand=detailGeometry(`combed-strand-${j}`,()=>{
        const points=[];for(let i=0;i<=10;i++){
          const t=i/10,x=(-.145+j*.036)*(1-t*.82),y=.084+t*.151;
          ray.set(new T.Vector3(x,y,1),new T.Vector3(0,0,-1));const hit=ray.intersectObject(collider,false)[0];
          if(hit)points.push(hit.point.clone().addScaledVector(hit.face.normal,.0015));
        }
        return new T.TubeGeometry(new T.CatmullRomCurve3(points),20,.0015,5,false);
      });mesh(head,strand,ridge,0,0,0);
    }
    for(const s of [-1,1])between(head,hair,[s*.145,.075,-.01],[s*.14,-.035,.052],.014);
  }
}

export function costumeDetails(kind, torso, arms, cloth, armor, { ball, box, cylinder, between, mesh, material, MAT }) {
  const gold=MAT.gold,leather=characterMaterial('leather','#594231');
  for(const side of [-1,1]) {
    between(torso,gold,[side*.23,.21,.15],[side*.16,-.16,.205],.009);
    for(let j=0;j<4;j++)ball(torso,gold,side*.21,.14-j*.065,.185,.008);
    const forearm=arms[side<0?0:1].userData.elbow;
    cylinder(forearm,leather,0,-.16,.018,.092,.11);
    for(const y of [-.105,-.21])cylinder(forearm,gold,0,y,.018,.094,.012);
  }
  if(['sejong','dangun','ahn'].includes(kind)) {
    for(let j=0;j<12;j++) {
      const a=j*Math.PI/6;
      between(torso,kind==='ahn'?leather:gold,[Math.sin(a)*.32,-.59,Math.cos(a)*.224],[Math.sin(a)*.335,-.635,Math.cos(a)*.237],.007);
    }
  }
  if(kind==='sejong') {
    // Raised circular dragon embroidery and cloud curls on the royal robe.
    for(let j=0;j<18;j++){const a=j*Math.PI/9;ball(torso,gold,Math.cos(a)*.102,.025+Math.sin(a)*.12,.207,.008);}
    for(let j=0;j<9;j++){const a=j*.65;ball(torso,gold,Math.sin(a)*(.045+j*.003),.02+Math.cos(a)*.075,.217,.015,.010,.007);}
  } else if(kind==='dangun') {
    for(let j=0;j<11;j++){const a=j*Math.PI/10;ball(torso,MAT.snow,Math.cos(a)*.29,.19-Math.sin(a)*.08,.11+Math.sin(a)*.12,.06,.042,.05);}
    for(const s of [-1,1]){ball(torso,MAT.jade,s*.09,-.29,.27,.032,.065,.025);between(torso,gold,[s*.09,-.20,.24],[s*.09,-.34,.26],.008);}
  } else if(kind==='ahn') {
    for(const s of [-1,1]) {
      const lapel=box(torso,leather,s*.095,.075,.20,.10,.27,.025);lapel.rotation.z=s*.28;
      box(torso,leather,s*.17,-.13,.20,.12,.09,.025);
    }
    for(let j=0;j<3;j++)ball(torso,gold,0,.03-j*.075,.23,.011);
    for(const s of [-1,1]){const collar=mesh(torso,'bevel',cloth,s*.085,.28,.10,.105,.15,.085);collar.rotation.z=s*.32;}
    between(torso,leather,[-.24,.22,.16],[.18,-.19,.21],.019);
  } else {
    const accent=kind==='gwak'?MAT.red:gold;
    for(const s of [-1,1]) {
      const sash=box(torso,accent,s*.12,-.32,.235,.09,.27,.023);sash.rotation.z=s*.11;
      for(let j=0;j<3;j++)box(torso,gold,s*.12,-.39-j*.025,.25,.083,.008,.008);
    }
    if(kind==='gang')for(let j=0;j<5;j++){const a=j*Math.PI*2/5;ball(torso,gold,Math.sin(a)*.06,.04+Math.cos(a)*.06,.227,.018);}
    if(kind==='gwon')for(const s of [-1,1])box(torso,leather,s*.24,-.07,.16,.06,.29,.06);
    if(kind==='eulji')for(const s of [-1,1])between(torso,MAT.jade,[s*.24,.17,.16],[s*.04,-.17,.207],.022);
  }
}
