import * as T from 'three';
import { HERO_FORMS } from './hero-design.js';
import { handPose,footPose } from './joint-poses.js';

const yAxis=new T.Vector3(0,1,0),zAxis=new T.Vector3(0,0,1);
function rigPoint(d,object,point=[0,0,0]) {
  return new T.Vector3(...point).applyMatrix4(object.matrixWorld).applyMatrix4(d.rig.matrixWorld.clone().invert());
}
function bowPose(root,pulse,moving,time) {
  const d=root.userData,quick=d.kind==='gwak',sway=moving?Math.sin(time*HERO_FORMS[d.kind].gait)*.012:0;
  d.torso.rotation.y=quick?.10:.04;d.torso.rotation.x=moving?.04:0;
  handPose(d,0,[-.12,1.20+sway,.37],[-.5,.92,.15]);
  handPose(d,1,[-.12,1.235+sway,.025+pulse*.17],[.38,1.01,.19]);
  root.updateMatrixWorld(true);
  const grip=rigPoint(d,d.weapons[0]),nock=rigPoint(d,d.weapons[1]);
  const aim=new T.Quaternion().setFromUnitVectors(zAxis,grip.clone().sub(nock).normalize());
  const parent=d.torso.quaternion.clone().multiply(d.arms[1].quaternion).multiply(d.elbows[1].quaternion);
  d.wrists[1].quaternion.copy(parent.invert().multiply(aim));
  // The socket and muzzle remain available even while its loaded arrow is hidden.
  d.weapons[1].visible=pulse<.72;
  root.updateMatrixWorld(true);
  const actualNock=rigPoint(d,d.weapons[1]);
  for(let i=0;i<2;i++) {
    const tip=rigPoint(d,d.weapons[0],d.weapons[0].userData.bowTips[i]),delta=actualNock.clone().sub(tip),string=d.bowStrings[i];
    string.position.copy(tip).add(actualNock).multiplyScalar(.5);
    string.scale.set(.0045,delta.length(),.0045);string.quaternion.setFromUnitVectors(yAxis,delta.normalize());
  }
}

export function animateHeroPose(root,time,moving,attack) {
  const d=root.userData,form=HERO_FORMS[d.kind],phase=time*form.gait+d.phase,pulse=T.MathUtils.clamp(attack/.25,0,1);
  const breath=Math.sin(time*1.8+d.phase),walk=moving?1:0;
  d.rig.position.y=(d.mountOffset??0)+breath*.006*(1-walk);
  d.hips.position.y=moving?.65:.67;
  d.torso.rotation.set(walk*.035,Math.sin(phase)*walk*.035,0);
  d.head.rotation.set(breath*.008,-d.torso.rotation.y*.45,0);
  for(let i=0;i<2;i++) {
    d.legs[i].rotation.set(0,0,0);d.knees[i].rotation.set(0,0,0);
    footPose(d,i,walk*Math.sin(phase+i*Math.PI)*form.stride,walk*Math.max(0,Math.cos(phase+i*Math.PI))*.065);
    d.arms[i].rotation.set(-Math.sin(phase+i*Math.PI)*walk*.2,0,(i?1:-1)*.07);
    d.arms[i].position.z=-.012;d.elbows[i].rotation.set(-.18,0,0);d.wrists[i].rotation.set(0,0,0);d.weapons[i].visible=true;
  }
  if(d.weapon==='arrow')bowPose(root,pulse,moving,time);
  else if(d.kind==='ahn') {
    d.torso.rotation.y=-.08+pulse*.05;
    handPose(d,1,[.23,1.19+pulse*.025,.40-pulse*.075],[.39,.88,.1]);
    d.arms[0].rotation.x=-.26-Math.sin(phase)*walk*.12;d.elbows[0].rotation.x=-.63;
    d.head.rotation.y=.06;
  } else if(d.weapon==='melee') {
    // Attack starts at release in the simulation: strong first pose, then ease
    // back to guard. Heavy shield and nimble sword roles have different arcs.
    const strike=Math.sin(pulse*Math.PI*.72),guard=d.kind==='gwon';
    d.torso.rotation.y=(guard?-.1:-.16)+(guard?.23:.43)*strike;
    d.torso.rotation.x=walk*.035+strike*.055;
    d.arms[0].rotation.x=-(guard?.65:.45)-strike*.12;d.arms[0].rotation.y=guard?.22:.13;
    d.elbows[0].rotation.x=-(guard?.6:.42);d.wrists[0].rotation.x=-(d.arms[0].rotation.x+d.elbows[0].rotation.x)*.8;
    d.arms[1].rotation.x=-.25-strike*(guard?1.1:1.55);d.arms[1].rotation.y=-.15-strike*.6;
    d.elbows[1].rotation.x=-.24-strike*.48;d.wrists[1].rotation.z=-strike*.3;
    d.head.rotation.y=-d.torso.rotation.y*.65;
  } else {
    const wise=d.kind==='sejong',shaman=d.kind==='dangun',lift=wise?.52:shaman?.85:.72;
    d.torso.rotation.y=-pulse*(wise?.10:.20);
    d.arms[0].rotation.x=wise?-.67:-.23-pulse*.25;d.elbows[0].rotation.x=wise?-.51:-.3-pulse*.2;
    d.arms[1].rotation.x=-.18-pulse*lift;d.arms[1].rotation.y=-pulse*(shaman?.4:.22);
    d.elbows[1].rotation.x=-.23-pulse*(wise?.22:.40);
    for(let i=0;i<2;i++)d.wrists[i].rotation.x=-(d.arms[i].rotation.x+d.elbows[i].rotation.x)*(wise?.95:.8);
    d.head.rotation.x=-pulse*.035;
  }
}
