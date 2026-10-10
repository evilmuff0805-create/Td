import * as T from 'three';
import { albedoPlaceholder,paintSurface,paintedSurfaceStatus } from './painted-surfaces.js';
import { surfaceNoise } from './surfaces.js';

const renderer=new T.WebGLRenderer({canvas:document.getElementById('materials'),antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;
const cards=[],kinds=['stone','wood','road','ground'],views=[...document.querySelectorAll('.surface')];
for(let i=0;i<4;i++) {
  const kind=kinds[i],size=128,data=new Uint8Array(size*size*4);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++) {const n=Math.round(195+surfaceNoise(x/13,y/13)*40),v=i<2?n:Math.round(((n/255+.055)/1.055)**2.4*255);data.set([v,v,v,255],(y*size+x)*4);}
  const fallback=albedoPlaceholder(data,size,kind),texture=new T.DataTexture(fallback.data,fallback.width,fallback.height);
  texture.colorSpace=i<2?T.SRGBColorSpace:T.LinearSRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.generateMipmaps=true;texture.minFilter=T.LinearMipmapLinearFilter;texture.magFilter=T.LinearFilter;texture.needsUpdate=true;
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(33,1,.1,30);camera.position.set(3,2.8,4);camera.lookAt(0,.2,0);
  scene.add(new T.HemisphereLight('#d9e8f0','#5d5547',2));const sun=new T.DirectionalLight('#ffe4bc',2);sun.position.set(-3,6,4);scene.add(sun);
  const material=new T.MeshStandardMaterial({map:texture,color:['#8995a0','#795b3c','#bcab91','#86956a'][i],roughness:.9});
  const geometry=i<2?new T.SphereGeometry(.92,48,32):new T.BoxGeometry(2,.15,2);
  scene.add(new T.Mesh(geometry,material));cards.push({scene,camera,texture,view:views[i],kind});
}
let applied=false,frames=0,gpuErrors=0;
document.getElementById('apply').addEventListener('click',()=>{applied=true;document.getElementById('apply').disabled=true;for(const card of cards)paintSurface(card.texture,card.kind);});
document.getElementById('reset').addEventListener('click',()=>location.reload());
function draw() {
  renderer.setSize(innerWidth,innerHeight,false);renderer.setScissorTest(false);renderer.setClearColor(0,0);renderer.clear();renderer.setScissorTest(true);
  for(const {scene,camera,view}of cards) {
    const r=view.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)continue;
    camera.aspect=r.width/r.height;camera.updateProjectionMatrix();renderer.setViewport(r.left,innerHeight-r.bottom,r.width,r.height);renderer.setScissor(r.left,innerHeight-r.bottom,r.width,r.height);renderer.render(scene,camera);
  }
  const gl=renderer.getContext();if(gl.getError()!==gl.NO_ERROR)gpuErrors++;
  const {ready,pending,failed}=paintedSurfaceStatus();frames++;
  document.documentElement.dataset.gpuErrors=gpuErrors;document.documentElement.dataset.renderedFrames=frames;document.documentElement.dataset.materialPhase=applied?'painted':'fallback';
  document.getElementById('status').textContent=`${applied?'전용 이미지':'대체 재질'} · 적용 ${ready}/4 · 로딩 ${pending} · 실패 ${failed} · GPU 오류 ${gpuErrors}`;
  requestAnimationFrame(draw);
}
draw();
