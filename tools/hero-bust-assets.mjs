import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { HERO_BUST_ART } from '../src/data/hero-bust-data.js';
import { MENU_HERO_ART } from '../src/data/hero-menu-data.js';

const require = createRequire(import.meta.url);
let sharp;
try { sharp = require('sharp'); }
catch { sharp = require('C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp'); }
const root = new URL('../', import.meta.url);
const sourceRoot = new URL('assets/illustrated/portraits/source/', root);
const manifest = JSON.parse(await fs.readFile(new URL('prompts.json', sourceRoot), 'utf8'));
const write = process.argv.includes('--write');
const hash = data => createHash('sha256').update(data).digest('hex');
const results = [];
for (const [id, spec] of Object.entries(HERO_BUST_ART)) {
  const record = manifest.records.find(r => r.output === spec.path.split('/').at(-1).replace('.webp', '.png'));
  assert.ok(record?.prompt && record.method === 'builtin image_gen.imagegen');
  const sourceFile = new URL(record.output, sourceRoot), source = await fs.readFile(sourceFile);
  const meta = await sharp(source).metadata();
  assert.ok(meta.hasAlpha, id + ' source must have alpha');
  const raw = await sharp(source).ensureAlpha().raw().toBuffer();
  let sx0=meta.width,sy0=meta.height,sx1=0,sy1=0,sourceEdgeOpaquePixels=0;
  for(let y=0;y<meta.height;y++)for(let x=0;x<meta.width;x++){
    const a=raw[(y*meta.width+x)*4+3];
    if(a){sx0=Math.min(sx0,x);sy0=Math.min(sy0,y);sx1=Math.max(sx1,x);sy1=Math.max(sy1,y);}
    if(a>=128&&(x===0||y===0||x===meta.width-1||y===meta.height-1))sourceEdgeOpaquePixels++;
  }
  assert.equal(sourceEdgeOpaquePixels,0,id+' source silhouette must not be clipped before padding');
  const sourceCrop={left:sx0,top:sy0,width:sx1-sx0+1,height:sy1-sy0+1};
  // Remove only wholly transparent outer rows/columns, uniformly resize and pad.
  // Every nonzero-alpha source pixel is retained; no repaint, cutout or recolour.
  const normalized = await sharp(source).extract(sourceCrop).resize(576, 576, { fit: 'contain', background: '#00000000' })
    .extend({ top: 32, bottom: 32, left: 32, right: 32, background: '#00000000' }).png().toBuffer();
  if (write) await sharp(normalized).webp({ lossless: true, effort: 6 }).toFile(fileURLToPath(new URL(spec.path, root)));
  const delivery = await fs.readFile(new URL(spec.path, root));
  const expected = await sharp(normalized).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const actual = await sharp(delivery).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  assert.equal(actual.info.width, spec.width); assert.equal(actual.info.height, spec.height);
  let alphaErrors = 0, visibleRgbErrors = 0, borderPixels = 0, opaque = 0, minX = 640, minY = 640, maxX = 0, maxY = 0;
  for (let y = 0; y < 640; y++) for (let x = 0; x < 640; x++) {
    const p = (y * 640 + x) * 4, a = actual.data[p + 3];
    if (a !== expected.data[p + 3]) alphaErrors++;
    if (a) {
      opaque++; minX = Math.min(x, minX); maxX = Math.max(x, maxX); minY = Math.min(y, minY); maxY = Math.max(y, maxY);
      if (x < 32 || y < 32 || x >= 608 || y >= 608) borderPixels++;
      for (let c = 0; c < 3; c++) if (actual.data[p + c] !== expected.data[p + c]) visibleRgbErrors++;
    }
  }
  assert.equal(alphaErrors, 0); assert.equal(visibleRgbErrors, 0); assert.equal(borderPixels, 0);
  assert.ok(opaque > 90000 && opaque < 330000, id + ' must be a transparent bust');
  const ref = MENU_HERO_ART.frames.find(f => f.heroId === id && !f.skinId);
  const reference = await sharp(await fs.readFile(new URL(MENU_HERO_ART.path, root))).extract({ left: ref.left, top: ref.top, width: ref.width, height: ref.height }).ensureAlpha().raw().toBuffer();
  const storedRef = await sharp(await fs.readFile(new URL('references/' + id + '-approved-idle.png', sourceRoot))).ensureAlpha().raw().toBuffer();
  assert.deepEqual(reference, storedRef, id + ' reference must remain the exact approved pose');
  results.push({ id, source: record.output, sourceWidth: meta.width, sourceHeight: meta.height, sourceCrop, sourceEdgeOpaquePixels, sourceSha256: hash(source), delivery: spec.path, width: 640, height: 640, bytes: delivery.length, sha256: hash(delivery), visibleBounds: [minX, minY, maxX, maxY], alphaErrors, visibleRgbErrors, borderPixels, referencePixelsExact: true });
}
const report = { date: '2026-10-11', method: manifest.method, portraits: results.length, bytes: results.reduce((n, r) => n + r.bytes, 0), normalizedSize: [640, 640], transparentPadding: 32, resizeOnly: true, alphaAndVisibleRgbExact: true, results };
if (write) await fs.writeFile(new URL('docs/HERO_BUST_ASSET_VALIDATION.json', root), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
