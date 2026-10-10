import * as T from 'three';
import { paintSurface,albedoPlaceholder } from './painted-surfaces.js';

const cache = new Map();
const fract = (v) => v - Math.floor(v);
const hash = (x, y) => fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453);
export function surfaceNoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = fract(x), fy = fract(y);
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  return T.MathUtils.lerp(T.MathUtils.lerp(hash(ix, iy), hash(ix + 1, iy), u),
    T.MathUtils.lerp(hash(ix, iy + 1), hash(ix + 1, iy + 1), u), v);
}
const noise = surfaceNoise;

// Small, deterministic surface maps also work in headless model validation.
// Color and relief are separate: lighting never treats a dark pigment as a hole.
export function surface(kind) {
  if (cache.has(kind)) return cache.get(kind);
  const size = 128, color = new Uint8Array(size * size * 4), relief = new Uint8Array(color.length), roughness=new Uint8Array(color.length);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, fine = hash(x, y), broad = noise(u * 7, v * 7);
    let shade = .91 + fine * .09, height = .5 + (fine - .5) * .15, alpha = 255;
    if (kind === 'wood') {
      const grain = Math.sin(u * 150 + noise(u * 5, v * 8) * 11 + Math.sin(v * 13) * 1.7);
      shade = .72 + grain * .12 + broad * .16 + fine * .08;
      height = .5 + grain * .14 + fine * .04;
    } else if (kind === 'stone') {
      const layer = Math.sin(v * 90 + noise(u * 5, v * 4) * 7);
      shade = .72 + broad * .23 + fine * .14 + layer * .035;
      height = .46 + noise(u * 4, v * 4) * .07 + noise(u * 16, v * 16) * .045 + fine * .025;
    } else if (kind === 'cloth') {
      const weave = ((x % 4 < 2) !== (y % 4 < 2)) ? .07 : -.04;
      shade = .86 + broad * .12 + weave;
      height = .5 + weave * 2;
    } else if (kind === 'metal') {
      const scratch = Math.pow(hash(x, 0), 15) * noise(u * 2, v * 30);
      shade = .85 + broad * .12 + fine * .025 - scratch * .16;
      height = .5 - scratch * .14;
    } else if (kind === 'tile') {
      const ridge=Math.pow(Math.abs(Math.sin(u*Math.PI*8)),6),wear=noise(u*17,v*21);
      shade=.73+broad*.17+ridge*.08+wear*.08;
      height=.38+ridge*.19+wear*.06;
    } else if(kind==='plaster') {
      shade=.88+broad*.09+fine*.03;
      height=.46+noise(u*23,v*23)*.06;
    } else if (kind === 'roof-snow') {
      // Melted strips expose rows of real tile ribs under the snow layer.
      const channel = Math.abs(Math.sin(u * Math.PI * 19 + Math.sin(v * 11) * .15));
      alpha = channel < .06 + broad * .10 && noise(u * 12, v * 18) > .38 || noise(u * 12, v * 10) < .19 ? 0 : 255;
      shade = .94 + fine * .06; height = .47 + broad * .06 + fine * .025;
    } else {
      shade = .92 + broad * .05 + fine * .03;
      height = .48 + broad * .03 + fine * .025;
    }
    const i = (y * size + x) * 4, value = Math.round(T.MathUtils.clamp(shade, 0, 1) * 255);
    color.set([value, value, value, alpha], i);
    const h = Math.round(T.MathUtils.clamp(height, 0, 1) * 255);
    relief.set([h, h, h, 255], i);
    const r=Math.round((kind==='metal'?.64+broad*.3:kind==='tile'?.74+broad*.22:.86+fine*.13)*255);
    roughness.set([r,r,r,255],i);
  }
  const make = (data, srgb) => {
    const image=srgb?albedoPlaceholder(data,size,kind):{data,width:size,height:size};
    const tex = new T.DataTexture(image.data, image.width, image.height, T.RGBAFormat);
    tex.wrapS = tex.wrapT = T.RepeatWrapping; tex.magFilter = T.LinearFilter;
    tex.minFilter = T.LinearMipmapLinearFilter; tex.generateMipmaps = true; tex.anisotropy = 4;
    if (srgb) tex.colorSpace = T.SRGBColorSpace;
    tex.needsUpdate = true; return tex;
  };
  const maps = { map: make(color, true), bumpMap: make(relief, false), roughnessMap:make(roughness,false) };
  paintSurface(maps.map,kind);
  cache.set(kind, maps); return maps;
}

export function textured(color, kind, options = {}) {
  return new T.MeshStandardMaterial({ color, ...surface(kind), roughness: .86,
    bumpScale: kind === 'stone' ? .018 : kind === 'wood' ? .018 : .006, ...options });
}
