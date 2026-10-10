import * as T from 'three';
import { ENEMY_FORMS } from './enemy-design.js';
import { contourGeometry,bladeGeometry } from './sculpture.js';

export function enemyHeadgear(head,kind,armor,cloth,{ball,box,cylinder,cone,between,mesh,material,MAT}) {
  const f=ENEMY_FORMS[kind],style=f.helmet,trim=material(f.accent,{metalness:.35,roughness:.56});
  if(['jingasa','flat-hat'].includes(style)) {
    const wide=style==='jingasa';cone(head,cloth,0,wide?.215:.19,-.025,wide?.34:.29,wide?.23:.13);
    cylinder(head,trim,0,wide?.1:.13,-.025,wide?.325:.28,.021);
    for(let j=0;j<8;j++){const a=j*Math.PI/4;between(head,MAT.rope,[0,wide?.33:.255,-.025],[Math.sin(a)*(wide?.32:.27),wide?.105:.135,Math.cos(a)*(wide?.32:.27)-.025],.004);}
    for(const s of [-1,1])between(head,MAT.rope,[s*.17,.1,.02],[0,-.16,.105],.006);
    return;
  }
  if(style==='headband') {
    cylinder(head,cloth,0,.085,-.025,.194,.048);
    for(const s of [-1,1]){const tail=box(head,cloth,s*.055,.0,-.205,.045,.23,.025);tail.rotation.z=s*.25;}
    if(kind==='drum')box(head,MAT.rope,0,.085,.174,.13,.035,.012);
    return;
  }
  if(style==='hood') {
    ball(head,cloth,0,.075,-.065,.224,.226,.185);
    mesh(head,'bevel',cloth,0,-.105,.158,.31,.14,.057);
    for(const s of [-1,1])box(head,cloth,s*.19,-.015,.06,.045,.23,.15);
    for(const s of [-1,1]){const tail=box(head,cloth,s*.05,-.03,-.21,.047,.26,.026);tail.rotation.z=s*.3;}
    return;
  }
  if(style==='eboshi') {
    mesh(head,contourGeometry('enemy-eboshi',[[.08,.19,.16,-.025],[.18,.177,.15,-.04],[.39,.12,.10,-.07],[.55,.07,.055,-.10]],{segments:20}),MAT.black,0,0,0);
    box(head,trim,0,.28,.10,.042,.28,.022);
    for(const s of [-1,1])box(head,cloth,s*.17,-.02,-.12,.065,.36,.025);
    return;
  }
  const tall=style==='tall-cone',wide=style==='bowl',peak=tall?.63:.27;
  mesh(head,contourGeometry(`enemy-helm-${style}`,[[.057,.212,.189,-.022],[.11,wide?.29:.218,wide?.245:.197,-.03],[tall?.34:.205,wide?.27:.17,wide?.22:.153,-.04],[peak,.025,.028,-.048]],{segments:24}),armor,0,0,0);
  cylinder(head,trim,0,.072,-.022,wide?.28:.215,.025);
  for(const s of [-1,1])for(let row=0;row<3;row++) {
    const guard=mesh(head,'bevel',armor,s*(.199+row*.006),.014-row*.056,-.075,.055,.07,.23);guard.rotation.z=-s*.12;
    box(head,trim,s*(.229+row*.006),.03-row*.056,-.075,.009,.008,.205);
  }
  const arc=(key,points,r=.023)=>mesh(head,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),16,r,5,false),trim,0,0,0);
  if(['crescent','split-crescent','wide-crescent'].includes(style)) {
    const width=style==='wide-crescent'?.43:style==='split-crescent'?.34:.29;
    for(const s of [-1,1])arc(style,[[s*.035,.19,.16],[s*width*.6,.20,.17],[s*width,.43,.15]],style==='wide-crescent'?.03:.024);
    if(style==='split-crescent')box(head,trim,0,.31,.17,.026,.22,.024);
  } else if(['horns','great-horns','antlers'].includes(style)) {
    const big=style==='great-horns',branch=style==='antlers';
    for(const s of [-1,1]) {
      arc(style,[[s*.13,.19,.035],[s*(big?.35:.25),.32,.015],[s*(big?.43:.31),big?.62:.48,-.025]],big?.035:.023);
      if(branch)for(let j=0;j<2;j++)between(head,trim,[s*(.20+j*.045),.29+j*.07,.02],[s*(.36+j*.05),.37+j*.1,.03],.018);
    }
  } else if(style==='visor') {
    mesh(head,'bevel',armor,0,-.095,.16,.31,.14,.065);
    for(const y of [-.065,-.105,-.145])box(head,MAT.black,0,y,.198,.22,.012,.009);
    box(head,trim,0,.22,.17,.08,.19,.025);
  } else if(style==='banner') {
    mesh(head,'bevel',trim,0,.34,.12,.09,.43,.04);
    for(const s of [-1,1])box(head,armor,s*.085,.26,.08,.035,.24,.04);
  } else if(style==='swept') {
    for(const s of [-1,1])arc(style,[[s*.12,.18,.05],[s*.24,.30,-.10],[s*.19,.34,-.30]],.026);
  } else if(style==='bowl') {
    ball(head,trim,0,.19,.24,.055,.055,.017);
  } else if(style==='stacked') {
    for(let j=0;j<3;j++)cylinder(head,trim,0,.25+j*.095,.12,.11-j*.023,.029).rotation.x=Math.PI/2;
  } else if(style==='iron-wings') {
    for(const s of [-1,1]){const wing=mesh(head,'bevel',armor,s*.27,.28,.025,.24,.29,.06);wing.rotation.z=-s*.35;between(head,trim,[s*.17,.18,.065],[s*.36,.44,.065],.012);}
  } else if(style==='wave') {
    for(let j=0;j<5;j++)arc(style,[[(j-2)*.045,.19,.13],[(j-2)*.085,.35,.12],[(j-2)*.12+.10,.46-j*.015,.10]],.017);
  } else if(style==='sunburst') {
    for(let j=0;j<13;j++){const a=(j/12-.5)*Math.PI*1.35;between(head,trim,[Math.sin(a)*.19,.15+Math.cos(a)*.17,-.07],[Math.sin(a)*.55,.15+Math.cos(a)*.55,-.09],.021);}
    cylinder(head,trim,0,.18,.20,.105,.04).rotation.x=Math.PI/2;
  }
}

export function enemyCostume(kind,torso,cloth,armor,{ball,box,between,mesh,cylinder,material,MAT}) {
  const f=ENEMY_FORMS[kind],trim=material(f.accent,{metalness:.35,roughness:.56});
  if(['teppo','ashigaru','scout'].includes(kind)) {
    between(torso,MAT.woodDark,[-.23,.23,.16],[.17,-.23,.20],.021);
    mesh(torso,'bevel',MAT.woodDark,.22,-.21,.10,.14,.14,.10);
    if(kind==='teppo')for(let j=0;j<4;j++)box(torso,MAT.rope,-.12+j*.065,.07-j*.053,.208,.04,.065,.035);
  }
  if(kind==='onmyoji')for(const s of [-1,1]) {
    box(torso,trim,s*.12,-.15,.215,.085,.66,.018);
    for(let row=0;row<4;row++)box(torso,MAT.black,s*.12,.08-row*.12,.228,.035,.016,.007);
  }
  if(kind==='ninja') {
    between(torso,MAT.woodDark,[-.22,.22,.16],[.18,-.22,.205],.022);
    for(const s of [-1,1])mesh(torso,'bevel',armor,s*.19,-.1,.12,.105,.23,.10);
  }
  if(kind==='armored'||kind==='kuki')for(const s of [-1,1]) {
    mesh(torso,'bevel',armor,s*.27,.12,.11,.12,.32,.15);
    for(let j=0;j<3;j++)box(torso,trim,s*.27,.22-j*.095,.19,.10,.015,.015);
  }
  if(f.scale) {
    const mark=kind==='hideyoshi'?MAT.gold:trim;
    for(const s of [-1,1])between(torso,mark,[s*.24,.21,.17],[s*.15,-.17,.216],.012);
    ball(torso,mark,0,.03,.22,.065,.065,.018);
    if(['ishida','hideyoshi'].includes(kind)) {
      const n=kind==='ishida'?3:1;
      for(let j=0;j<n;j++) {
        const x=(j-(n-1)/2)*.19;
        between(torso,MAT.woodDark,[x,-.22,-.27],[x,1.08,-.27],.012);
        box(torso,cloth,x,.80,-.27,n===1?.27:.15,.44,.025);
        box(torso,mark,x,.80,-.25,.045,.21,.013);
      }
      if(kind==='hideyoshi')for(const s of [-1,1]) {
        ball(torso,MAT.gold,s*.21,.37,-.28,.07,.10,.06);
        ball(torso,MAT.gold,s*.21,.50,-.28,.045,.06,.045);
      }
    }
  }
}

export function enemyArsenal(kind,torso,weapons,armor,{ball,box,cylinder,cone,between,mesh,material,MAT}) {
  const f=ENEMY_FORMS[kind],type=f.weapon,trim=material(f.accent,{metalness:.35,roughness:.56}),right=weapons[1],left=weapons[0];
  for(const socket of weapons)socket.position.set(0,0,0);
  const sword=(g,length=1,curved=false)=>{
    const blade=mesh(g,bladeGeometry(),MAT.steel,0,-.09,0,1,length,1);blade.rotation.z=curved?-.19:-.06;
    between(g,MAT.woodDark,[0,-.075,0],[0,.075,0],.024);
    box(g,trim,0,-.09,0,.13,.025,.055);ball(g,trim,0,.082,0,.029);
  };
  if(['yari','naginata'].includes(type)) {
    between(right,MAT.wood,[0,-.66,0],[0,.91,0],.019);
    for(const y of [-.12,.12,.77])cylinder(right,trim,0,y,0,.026,.04);
    if(type==='yari')cone(right,MAT.steel,0,1.06,0,.049,.30);
    else {const blade=mesh(right,bladeGeometry(),MAT.steel,0,.87,0,1.2,.65,1);blade.rotation.z=Math.PI-.18;}
    right.userData.support=[0,.23,0];
  } else if(type==='rifle') {
    cylinder(right,MAT.steel,0,.015,.35,.021,.66).rotation.x=Math.PI/2;
    mesh(right,'bevel',MAT.wood,0,-.024,.21,.07,.073,.54);
    const stock=mesh(right,'bevel',MAT.woodDark,0,-.045,-.145,.08,.13,.23);stock.rotation.x=-.14;
    for(const z of [.08,.39,.58])cylinder(right,trim,0,.015,z,.025,.03).rotation.x=Math.PI/2;
    box(right,MAT.black,0,.044,.58,.013,.018,.025);
    between(right,MAT.steel,[.044,.02,.03],[.044,.075,.075],.009);
    right.userData.muzzle=new T.Vector3(0,.015,.685);right.userData.support=[0,-.02,.24];
  } else if(type==='ritual') {
    between(right,MAT.wood,[0,-.75,0],[0,.76,0],.026);
    const orb=material('#c5d9b7',{emissive:'#628d7a',emissiveIntensity:.7});
    ball(right,trim,0,.79,0,.10);ball(right,orb,0,.85,0,.065);
    right.userData.muzzle=new T.Vector3(0,.85,0);
    for(const s of [-1,1]) {
      box(right,MAT.rope,s*.11,.58,0,.095,.31,.018);
      for(let j=0;j<3;j++)box(right,MAT.red,s*.11,.68-j*.07,.013,.05,.011,.007);
    }
    box(left,MAT.rope,0,.08,.04,.15,.28,.018);
    for(let j=0;j<4;j++)box(left,MAT.red,0,.18-j*.055,.054,.06,.012,.008);
  } else if(type==='drum') {
    cylinder(torso,MAT.wood,0,-.075,.36,.25,.30).rotation.x=Math.PI/2;
    for(const z of [.20,.52]) {
      cylinder(torso,MAT.rope,0,-.075,z,.251,.024).rotation.x=Math.PI/2;
      for(let j=0;j<10;j++){const a=j*Math.PI/5;ball(torso,trim,Math.sin(a)*.23,-.075+Math.cos(a)*.23,z,.012);}
    }
    for(let j=0;j<10;j++){const a=j*Math.PI/5,b=a+Math.PI/10;between(torso,MAT.rope,[Math.sin(a)*.255,-.075+Math.cos(a)*.255,.21],[Math.sin(b)*.255,-.075+Math.cos(b)*.255,.51],.006);}
    for(const s of [-1,1])between(torso,MAT.woodDark,[s*.20,.25,.11],[s*.20,-.01,.29],.016);
    for(const g of weapons){between(g,MAT.wood,[0,0,0],[0,0,.30],.014);ball(g,MAT.rope,0,0,.32,.025);}
  } else if(['axe','mace'].includes(type)) {
    between(right,MAT.woodDark,[0,.08,0],[0,-.60,0],.028);
    if(type==='axe') {
      mesh(right,'bevel',MAT.steel,.07,-.47,0,.29,.24,.065);
      box(right,trim,0,-.47,0,.075,.29,.08);
    } else {
      ball(right,MAT.steel,0,-.51,0,.115,.16,.115);
      for(let j=0;j<6;j++){const a=j*Math.PI/3;between(right,trim,[Math.sin(a)*.08,-.64,Math.cos(a)*.08],[Math.sin(a)*.13,-.41,Math.cos(a)*.13],.018);}
    }
  } else sword(right,type==='shortblade'?.52:type==='kunai'?.34:type==='nodachi'?1.35:1,type==='cutlass');
  if(type==='kunai'||f.offhand==='blade')sword(left,type==='kunai'?.34:.67,true);
  if(type==='axe'||f.offhand==='shield') {
    mesh(left,'bevel',armor,0,-.06,.10,.43,.57,.09);
    for(const s of [-1,1])box(left,trim,s*.19,-.06,.155,.022,.55,.015);
    for(const y of [-.31,.19])box(left,trim,0,y,.157,.40,.026,.017);
    ball(left,trim,0,-.06,.167,.068,.068,.03);
  }
  if(f.offhand==='fan') {
    const shape=new T.Shape();shape.moveTo(0,0);
    for(let j=0;j<=16;j++){const a=.23+j/16*(Math.PI-.46);shape.lineTo(Math.cos(a)*.32,Math.sin(a)*.32);}
    shape.closePath();mesh(left,new T.ExtrudeGeometry(shape,{depth:.014,bevelEnabled:false,curveSegments:8}),trim,0,0,.035);
    for(let j=0;j<7;j++){const a=.23+j/6*(Math.PI-.46);between(left,MAT.woodDark,[0,0,.055],[Math.cos(a)*.30,Math.sin(a)*.30,.055],.005);}
    between(left,MAT.woodDark,[0,-.07,.04],[0,.06,.04],.016);
  }
}
