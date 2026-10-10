import * as T from 'three';

const maps=new Map(),materials=new Map(),bevels=new WeakMap(),size=128,tau=Math.PI*2;
const wave=(x,y,a,b,phase=0)=>Math.sin(tau*(x*a+y*b)+phase);
const clamp=v=>Math.max(0,Math.min(1,v));

// Small, periodic maps are shared by every combatant, including skin variants.
// Pigment belongs in sRGB; height and roughness remain linear data.
export function characterSurface(kind) {
  if(maps.has(kind))return maps.get(kind);
  if(!['skin','hair','cloth','armor','leather'].includes(kind))throw new Error(`Unknown character surface ${kind}`);
  const pigment=new Uint8Array(size*size*4),height=new Uint8Array(pigment.length),rough=new Uint8Array(pigment.length);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++) {
    const u=x/size,v=y/size,broad=wave(u,v,2,3)*.55+wave(u,v,5,-2,1.3)*.3+wave(u,v,3,7,.7)*.15;
    const grain=wave(u,v,41,37,.4)*wave(u,v,23,-29,2),weave=wave(u,v,48,0)*wave(u,v,0,48);
    let value=.97,h=.5,r=.95,tint=[1,1,1];
    if(kind==='skin'){value=.985+broad*.012+grain*.004;h=.5+grain*.09;r=.96+broad*.025;tint=[1,.995,.989];}
    if(kind==='hair'){
      const flow=Math.sin(tau*u*22+wave(u,v,1,1)*1.2),fine=Math.sin(tau*u*49+wave(u,v,2,1)*.8);
      value=.86+flow*.09+fine*.025+broad*.018;h=.5+flow*.19+fine*.05;r=.86-flow*.055;tint=[1,.99,.97];
    }
    if(kind==='cloth'){value=.93+broad*.035+weave*.025;h=.5+weave*.17+grain*.035;r=.98+broad*.015;}
    if(kind==='armor'){
      const hammer=wave(u,v,13,11)*wave(u,v,9,-17),scratch=Math.max(0,wave(u,v,1,43)+wave(u,v,5,41)-1.68);
      value=.90+broad*.035+hammer*.035-scratch*.06;h=.5+hammer*.07-scratch*.12;r=.87+broad*.045+hammer*.055;tint=[.98,.99,1];
    }
    if(kind==='leather'){value=.89+broad*.045+grain*.025;h=.5+grain*.15+broad*.04;r=.94+grain*.035;tint=[1,.985,.965];}
    const i=(y*size+x)*4;
    for(let c=0;c<3;c++){pigment[i+c]=Math.round(clamp(value*tint[c])*255);height[i+c]=Math.round(clamp(h)*255);rough[i+c]=Math.round(clamp(r)*255);}
    pigment[i+3]=height[i+3]=rough[i+3]=255;
  }
  const texture=(data,colorSpace)=>{
    const t=new T.DataTexture(data,size,size,T.RGBAFormat);t.colorSpace=colorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;
    t.magFilter=T.LinearFilter;t.minFilter=T.LinearMipmapLinearFilter;t.generateMipmaps=true;t.anisotropy=4;t.needsUpdate=true;
    t.name=`character-${kind}-${colorSpace===T.SRGBColorSpace?'pigment':data===height?'height':'roughness'}`;return t;
  };
  const result={map:texture(pigment,T.SRGBColorSpace),bumpMap:texture(height,T.NoColorSpace),roughnessMap:texture(rough,T.NoColorSpace)};
  maps.set(kind,result);return result;
}

export function characterMaterial(kind,color,options={}) {
  const key=JSON.stringify([kind,color,options]);if(materials.has(key))return materials.get(key);
  const defaults={
    skin:{roughness:.94,bumpScale:.0007,envMapIntensity:.28,vertexColors:true},
    hair:{roughness:.91,bumpScale:.003,envMapIntensity:.34},
    cloth:{roughness:1,bumpScale:.0035,envMapIntensity:.35},
    armor:{roughness:.73,metalness:.46,bumpScale:.0025,envMapIntensity:.6,vertexColors:true},
    leather:{roughness:.97,bumpScale:.0025,envMapIntensity:.3},
  };
  const mat=new T.MeshStandardMaterial({color,...characterSurface(kind),...defaults[kind],...options});
  mat.name=`character-${kind}-${color}`;mat.userData.characterSurface=kind;materials.set(key,mat);return mat;
}

// Preserve the canonical box and all world props. Only character armor receives
// this painted edge wear, which also survives material recoloring for skins.
export function armorBevelGeometry(source) {
  if(bevels.has(source))return bevels.get(source);
  const geo=source.clone(),p=geo.attributes.position,n=geo.attributes.normal,c=new Float32Array(p.count*3);
  for(let i=0;i<p.count;i++) {
    const normal=[Math.abs(n.getX(i)),Math.abs(n.getY(i)),Math.abs(n.getZ(i))].sort((a,b)=>b-a);
    const edge=T.MathUtils.smoothstep(normal[1],.04,.55),shade=.82+edge*.18;
    c[i*3]=shade*.985;c[i*3+1]=shade*.993;c[i*3+2]=shade;
  }
  geo.setAttribute('color',new T.BufferAttribute(c,3));geo.userData.characterArmor=true;bevels.set(source,geo);return geo;
}
