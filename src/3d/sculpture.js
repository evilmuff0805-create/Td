import * as T from 'three';
import { faceForm } from './hero-design.js';

const cache=new Map();

// Elliptical rings give cloth and anatomy a continuous silhouette. The source
// geometry is immutable and shared; bakeStatic owns the transformed copies.
export function contourGeometry(key,profile,{segments=20,steps=2,folds=0,skin=false,arc=Math.PI*2,smooth=false}={}) {
  const id=JSON.stringify([key,profile,segments,steps,folds,skin,arc,smooth]);
  if(cache.has(id))return cache.get(id);
  const rows=[];
  for(let j=0;j<profile.length-1;j++)for(let k=0;k<steps;k++) {
    const t=k/steps,a=profile[j],b=profile[j+1];
    rows.push(smooth?profileRow(profile,j,t):a.map((v,i)=>T.MathUtils.lerp(v,b[i]??0,t)));
  }
  rows.push(profile.at(-1));
  const positions=[],uv=[],colors=[],indices=[],stride=segments+1;
  for(let j=0;j<rows.length;j++) {
    const [y,rx,rz,cz=0]=rows[j];
    for(let i=0;i<=segments;i++) {
      const a=-arc/2+i/segments*arc,fold=1+folds*Math.cos(a*10)*(1-j/(rows.length+3));
      const x=Math.sin(a)*rx*fold,z=Math.cos(a)*rz*fold+cz;
      positions.push(x,y,z);uv.push(i/segments,j/(rows.length-1));
      const cheek=skin?Math.exp(-((Math.abs(x)-.105)**2/.002+(y+.055)**2/.003))*Math.max(0,Math.cos(a)):0;
      const shade=skin?.96+Math.max(0,y)*.16:1;
      colors.push(shade,shade-cheek*.065,shade-cheek*.095);
      if(j<rows.length-1&&i<segments){const n=j*stride+i;indices.push(n,n+1,n+stride,n+1,n+stride+1,n+stride);}
    }
  }
  if(arc===Math.PI*2)for(const [j,reverse]of [[0,true],[rows.length-1,false]]) {
    const center=positions.length/3;positions.push(0,rows[j][0],rows[j][3]??0);uv.push(.5,.5);colors.push(1,1,1);
    for(let i=0;i<segments;i++){const n=j*stride+i;indices.push(...(reverse?[center,n+1,n]:[center,n,n+1]));}
  }
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setAttribute('color',new T.Float32BufferAttribute(colors,3));geo.setIndex(indices);geo.computeVertexNormals();
  // Closed rings share lighting across the UV seam.
  const normals=geo.attributes.normal;
  for(let j=0;j<rows.length;j++) {
    if(arc!==Math.PI*2)break;
    const a=j*stride,b=a+segments,n=new T.Vector3().fromBufferAttribute(normals,a).add(new T.Vector3().fromBufferAttribute(normals,b)).normalize();normals.setXYZ(a,n.x,n.y,n.z);normals.setXYZ(b,n.x,n.y,n.z);
  }
  geo.userData.sculpture=key;cache.set(id,geo);return geo;
}

function profileRow(profile,j,t) {
  return profile[j].map((a,i)=>{
    const b=profile[j+1][i]??0;if(!i)return T.MathUtils.lerp(a,b,t);
    const prev=profile[Math.max(0,j-1)][i]??0,next=profile[Math.min(profile.length-1,j+2)][i]??0;
    const value=.5*((2*a)+(-prev+b)*t+(2*prev-5*a+4*b-next)*t*t+(-prev+3*a-3*b+next)*t*t*t);
    return T.MathUtils.clamp(value,Math.min(a,b),Math.max(a,b));
  });
}
function faceProfile(kind) {
  const form=faceForm(kind);return [
    [-.224,.045,.065,.026],[-.194,.092,.099,.018],[-.143,.138,.123,.008],[-.065,.166,.145,-.004],
    [.025,.177,.158,-.014],[.107,.172,.151,-.022],[.174,.133,.122,-.024],[.21,.05,.06,-.022],
  ].map(([y,rx,rz,cz],i)=>[y*form.length,rx*(i<3?form.jaw:i<5?form.cheek:form.temple),rz*form.depth,cz*form.depth]);
}
function frontRelief(kind,x,y) {
  const f=faceForm(kind),xx=x/f.nose,yy=y/f.length;
  const patch=(cx,cy,wx,wy)=>Math.exp(-(((xx-cx)/wx)**2+((yy-cy)/wy)**2));
  return f.depth*(.009*(patch(.098,-.035,.045,.054)+patch(-.098,-.035,.045,.054))
    -.006*(patch(.07,.025,.037,.027)+patch(-.07,.025,.037,.027))
    +.013*patch(0,-.005,.023,.06)+.029*patch(0,-.047,.026,.022)
    +.009*patch(0,-.145,.06,.034)+.006*patch(0,-.087,.064,.026));
}
function faceDepth(kind,x,y) {
  const profile=faceProfile(kind);let j=0;
  while(j<profile.length-2&&y>profile[j+1][0])j++;
  const row=profileRow(profile,j,T.MathUtils.clamp((y-profile[j][0])/(profile[j+1][0]-profile[j][0]),0,1));
  const front=Math.sqrt(Math.max(0,1-(x/row[1])**2));return front*row[2]+row[3]+frontRelief(kind,x,y)*front**8;
}

// Facial details use the same surface equation as the head, rather than fixed
// Z offsets that leave eyes and lips floating on narrow or long faces.
export function faceFrame(kind,x,y,lift=0) {
  const d=.0005,z=faceDepth(kind,x,y),normal=new T.Vector3(
    -(faceDepth(kind,x+d,y)-faceDepth(kind,x-d,y))/(2*d),
    -(faceDepth(kind,x,y+d)-faceDepth(kind,x,y-d))/(2*d),1).normalize();
  return {position:new T.Vector3(x,y,z).addScaledVector(normal,lift),normal};
}

export function faceGeometry(kind='neutral') {
  const key=`sculpted-face-${kind}`;if(cache.has(key))return cache.get(key);
  const segments=40,steps=4,profile=faceProfile(kind),rows=(profile.length-1)*steps+1,ringVertices=rows*(segments+1);
  const geo=contourGeometry(key,profile,{segments,steps,skin:true,smooth:true}).clone(),p=geo.attributes.position,c=geo.attributes.color;
  // Cap centers lie on the ring axis. Their Float32 Z can round just above cz;
  // never project those two centers onto the front of the face.
  for(let i=0;i<ringVertices;i++) {
    const x=p.getX(i),y=p.getY(i),z=p.getZ(i),f=faceForm(kind),row=faceProfile(kind);
    let j=0;while(j<row.length-2&&y>row[j+1][0])j++;
    const cz=profileRow(row,j,T.MathUtils.clamp((y-row[j][0])/(row[j+1][0]-row[j][0]),0,1))[3];
    if(z>cz)p.setZ(i,faceDepth(kind,x,y));
    const warm=Math.exp(-(((Math.abs(x)-.098*f.cheek)/.052)**2+((y+.045*f.length)/.06)**2))*Math.max(0,(z-cz)/.15);
    const nose=Math.exp(-((x/.034)**2+((y+.048*f.length)/.033)**2))*Math.max(0,(z-cz)/.15);
    const socket=Math.exp(-(((Math.abs(x)-.07*f.eyes)/.042)**2+((y-.025*f.length)/.032)**2))*Math.max(0,(z-cz)/.15);
    const shade=.965+Math.max(0,y)*.10-T.MathUtils.smoothstep(-y,.07,.2)*.035-socket*.028;
    c.setXYZ(i,shade,shade-warm*.065-nose*.025,shade-warm*.09-nose*.035);
  }
  geo.computeVertexNormals();const n=geo.attributes.normal;
  for(let j=0;j<rows;j++){const a=j*(segments+1),b=a+segments,normal=new T.Vector3().fromBufferAttribute(n,a).add(new T.Vector3().fromBufferAttribute(n,b)).normalize();n.setXYZ(a,...normal.toArray());n.setXYZ(b,...normal.toArray());}
  geo.userData.sculpture=`face-${kind}`;cache.set(key,geo);return geo;
}

export function garmentGeometry(kind) {
  if(kind==='tunic')return contourGeometry(kind,[[-.285,.22,.154,0],[-.20,.232,.168,0],[-.05,.266,.18,0],[.12,.292,.18,-.008],[.26,.27,.154,-.016],[.34,.105,.105,-.012]],{folds:.008});
  if(kind==='cuirass')return contourGeometry(kind,[[-.20,.237,.175,.004],[-.05,.275,.191,.004],[.12,.297,.187,-.003],[.245,.273,.164,-.01]],{folds:.004});
  if(kind==='robe')return contourGeometry(kind,[[-.64,.335,.237,.012],[-.58,.327,.23,.008],[-.40,.29,.207,0],[-.27,.239,.171,0]],{segments:24,folds:.023});
  if(kind==='belt')return contourGeometry(kind,[[-.267,.24,.174,0],[-.251,.246,.18,0],[-.203,.246,.18,0],[-.19,.24,.174,0]],{segments:24});
  if(kind==='thigh')return contourGeometry(kind,[[-.32,.085,.087,.012],[-.24,.114,.108,.006],[-.09,.126,.117,0],[0,.11,.104,0]],{segments:16,folds:.012});
  if(kind==='boot')return contourGeometry(kind,[[-.30,.073,.087,.035],[-.23,.083,.091,.018],[-.10,.097,.098,.005],[.015,.099,.096,0]],{segments:16});
  if(kind==='upperSleeve')return contourGeometry(kind,[[-.25,.086,.086,.014],[-.19,.112,.106,.006],[-.05,.135,.123,0],[.045,.111,.102,0]],{segments:16,folds:.013});
  if(kind==='foreSleeve')return contourGeometry(kind,[[-.23,.078,.083,.024],[-.19,.086,.087,.019],[-.08,.098,.092,.006],[.018,.091,.088,0]],{segments:16,folds:.012});
  if(kind==='wideSleeve')return contourGeometry(kind,[[-.245,.145,.13,.02],[-.21,.15,.132,.017],[-.08,.124,.115,.003],[.022,.092,.092,0]],{segments:20,folds:.022});
  if(kind==='tasset')return contourGeometry(kind,[[-.51,.245,.205,.006],[-.46,.25,.21,.004],[-.31,.244,.19,0],[-.255,.233,.172,0]],{segments:24,folds:.018});
  throw new Error(`Unknown garment ${kind}`);
}

export function bladeGeometry() {
  const shape=new T.Shape();shape.moveTo(-.025,0);shape.lineTo(.025,0);shape.lineTo(.021,-.49);shape.lineTo(-.006,-.66);shape.lineTo(-.024,-.5);shape.closePath();
  const key='blade';if(!cache.has(key)){const g=new T.ExtrudeGeometry(shape,{depth:.018,steps:1,bevelEnabled:true,bevelSegments:1,bevelSize:.004,bevelThickness:.004});g.translate(0,0,-.009);cache.set(key,g);}return cache.get(key);
}
