import * as T from 'three';

// Rig-space targets, true rest bone vectors and reachable two-segment IK.
// Scratch values never live in mutable userData shared by cloned combatants.
export function handPose(d,index,target,pole,orientation=new T.Quaternion()) {
  const arm=d.arms[index],elbow=d.elbows[index],wrist=d.wrists[index];
  d.torso.updateMatrix();const inverse=d.torso.matrix.clone().invert();
  const goal=new T.Vector3(...target).applyMatrix4(inverse),bend=new T.Vector3(...pole).applyMatrix4(inverse);
  const upper=elbow.position.clone(),lower=wrist.position.clone(),base=arm.position;
  const delta=goal.clone().sub(base),distance=T.MathUtils.clamp(delta.length(),.025,upper.length()+lower.length()-.002),direction=delta.normalize();
  bend.sub(base);const side=bend.addScaledVector(direction,-bend.dot(direction)).normalize();
  const along=(upper.lengthSq()+distance*distance-lower.lengthSq())/(2*distance),height=Math.sqrt(Math.max(0,upper.lengthSq()-along*along));
  const joint=base.clone().addScaledVector(direction,along).addScaledVector(side,height);
  arm.quaternion.setFromUnitVectors(upper.normalize(),joint.clone().sub(base).normalize());
  const actual=base.clone().addScaledVector(direction,distance);
  elbow.quaternion.setFromUnitVectors(lower.normalize(),actual.sub(joint).applyQuaternion(arm.quaternion.clone().invert()).normalize());
  const parent=d.torso.quaternion.clone().multiply(arm.quaternion).multiply(elbow.quaternion);
  wrist.quaternion.copy(parent.invert().multiply(orientation));
}
export function footPose(d,index,z,lift) {
  const leg=d.legs[index],knee=d.knees[index],a=.31,b=Math.hypot(.30,.035),dy=d.hips.position.y-(.064+lift);
  const distance=T.MathUtils.clamp(Math.hypot(dy,z),.03,a+b-.001),direction=Math.atan2(z,dy);
  const bend=Math.acos(T.MathUtils.clamp((a*a+distance*distance-b*b)/(2*a*distance),-1,1));
  leg.rotation.x=-(direction+bend);
  const kneeZ=Math.sin(direction+bend)*a,kneeY=Math.cos(direction+bend)*a;
  knee.rotation.x=Math.atan2(.035,.30)-Math.atan2(z-kneeZ,dy-kneeY)-leg.rotation.x;
  d.ankles[index].rotation.x=-leg.rotation.x-knee.rotation.x;
}
