import * as T from 'three';
import { ENEMY_FORMS } from './enemy-design.js';
import { handPose,footPose } from './joint-poses.js';

const xAxis=new T.Vector3(1,0,0),zAxis=new T.Vector3(0,0,1);
function supportHand(root,orientation) {
  const d=root.userData,socket=d.weapons[1];
  // Use the actual right-hand socket after reachable IK, including rig scale.
  root.updateMatrixWorld(true);
  const target=new T.Vector3(...socket.userData.support).applyMatrix4(socket.matrixWorld).applyMatrix4(d.rig.matrixWorld.clone().invert());
  handPose(d,0,target.toArray(),[-.44,1.02,.19],orientation);
}
function horsePose(d,phase,moving) {
  if(!d.horseLegs)return;
  for(let i=0;i<4;i++) {
    const leg=d.horseLegs[i],knee=d.horseKnees[i],hoof=d.horseHooves[i],p=phase+(i===0||i===3?0:Math.PI);
    const z=moving?Math.sin(p)*.15:0,lift=moving?Math.max(0,Math.cos(p))*.075:0,a=knee.position.length(),b=hoof.position.length(),dy=leg.position.y-(.058+lift);
    const distance=T.MathUtils.clamp(Math.hypot(dy,z),.03,a+b-.001),direction=Math.atan2(z,dy),bend=Math.acos(T.MathUtils.clamp((a*a+distance*distance-b*b)/(2*a*distance),-1,1));
    leg.rotation.set(-(direction+bend),0,0);
    const kneeZ=Math.sin(direction+bend)*a,kneeY=Math.cos(direction+bend)*a;
    knee.rotation.set(Math.atan2(.02,.27)-Math.atan2(z-kneeZ,dy-kneeY)-leg.rotation.x,0,0);hoof.rotation.set(-leg.rotation.x-knee.rotation.x,0,0);
  }
}
export function updateMountReins(root) {
  const d=root.userData;if(!d.horseReins)return;
  root.updateMatrixWorld(true);const inverse=root.matrixWorld.clone().invert(),hand=d.wrists[0].getWorldPosition(new T.Vector3()).applyMatrix4(inverse);
  for(let i=0;i<2;i++) {
    const start=new T.Vector3((i?1:-1)*.11,1.10,.65),delta=hand.clone().sub(start),rein=d.horseReins[i];
    rein.position.copy(start).add(hand).multiplyScalar(.5);rein.scale.set(.007,delta.length(),.007);rein.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());
  }
}
export function animateEnemyPose(root,time,moving,attack) {
  const d=root.userData,f=ENEMY_FORMS[d.kind];if(!f||d.vehicle)return;
  const phase=time*f.gait+d.phase,pulse=T.MathUtils.clamp(attack/.25,0,1),strike=Math.sin(pulse*Math.PI*.72),walk=moving?1:0,breath=Math.sin(time*1.8+d.phase);
  d.rig.position.y=(d.mountOffset??0)+breath*.005*(1-walk);d.hips.position.y=moving?.65:.67;
  d.torso.rotation.set(walk*(d.kind==='ninja'?.13:.025),Math.sin(phase)*walk*.025,0);
  d.head.rotation.set(breath*.008,-d.torso.rotation.y*.4,0);
  for(let i=0;i<2;i++) {
    d.legs[i].rotation.set(0,0,0);d.knees[i].rotation.set(0,0,0);d.ankles[i].rotation.set(0,0,0);
    if(d.kind==='cavalry') {
      d.legs[i].rotation.set(-.72,0,(i?1:-1)*.36);d.knees[i].rotation.x=.94;d.ankles[i].rotation.x=-.22;
    } else footPose(d,i,walk*Math.sin(phase+i*Math.PI)*f.stride,walk*Math.max(0,Math.cos(phase+i*Math.PI))*.06);
    d.arms[i].rotation.set(-Math.sin(phase+i*Math.PI)*walk*.18,0,(i?1:-1)*.07);
    d.arms[i].position.z=-.012;d.elbows[i].rotation.set(-.23,0,0);d.wrists[i].rotation.set(0,0,0);
  }
  if(f.weapon==='rifle') {
    d.torso.rotation.y=.12;const aim=new T.Quaternion().setFromAxisAngle(xAxis,-.025-pulse*.13);
    handPose(d,1,[-.10,1.20+pulse*.013,.10-pulse*.045],[.37,.94,.08],aim);supportHand(root,aim);
    d.head.rotation.y=-.10;
  } else if(['yari','naginata'].includes(f.weapon)) {
    d.torso.rotation.y=-.08+strike*.15;const aim=new T.Quaternion().setFromAxisAngle(xAxis,.38+strike*.72);
    handPose(d,1,[-.08,1.04,.14+strike*.09],[.42,.88,.06],aim);supportHand(root,aim);
  } else if(f.weapon==='ritual') {
    handPose(d,1,[.25,1.10+pulse*.12,.12],[.44,.93,.1],new T.Quaternion().setFromAxisAngle(xAxis,-pulse*.18));
    handPose(d,0,[-.20,1.19+pulse*.08,.22],[-.44,.98,.1],new T.Quaternion().setFromAxisAngle(xAxis,-.22-pulse*.42));
    d.torso.rotation.y=-pulse*.12;
  } else if(f.weapon==='drum') {
    for(let i=0;i<2;i++) {
      const beat=Math.sin(time*8.8+d.phase+i*Math.PI),lift=(beat+1)*.045;
      const target=[(i?1:-1)*.16,1.065+lift,.235];
      const hit=new T.Vector3((i?1:-1)*.12,.94,.54).sub(new T.Vector3(...target)).normalize();
      handPose(d,i,target,[(i?1:-1)*.43,.95,.1],new T.Quaternion().setFromUnitVectors(zAxis,hit));
    }
  } else {
    const heavy=['axe','mace','nodachi'].includes(f.weapon),dual=f.weapon==='kunai'||f.offhand==='blade';
    d.torso.rotation.y=-.08+strike*(heavy?.48:.32);d.torso.rotation.x+=strike*.04;
    const aim=new T.Quaternion().setFromEuler(new T.Euler(-.18-strike*(heavy?1.8:1.55),-.10-strike*.34,-.14-strike*.25));
    handPose(d,1,[.28,1.09+strike*.05,.18+strike*.13],[.49,.92,.06],aim);
    if(f.offhand==='shield'||f.weapon==='axe')handPose(d,0,[-.25,1.10,.27],[-.46,.97,.1],new T.Quaternion().setFromAxisAngle(xAxis,-.10));
    else if(f.offhand==='fan')handPose(d,0,[-.29,1.04+pulse*.03,.22],[-.46,.94,.08],new T.Quaternion().setFromEuler(new T.Euler(-.17-pulse*.20,0,.35)));
    else if(dual)handPose(d,0,[-.28,1.08+strike*.10,.20],[-.47,.93,.08],new T.Quaternion().setFromEuler(new T.Euler(-.2-strike*1.2,.12+strike*.4,.16)));
    d.head.rotation.y=-d.torso.rotation.y*.6;
  }
  horsePose(d,phase,moving);
  updateMountReins(root);
}
