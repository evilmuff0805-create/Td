import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import http from 'node:http';
import { once } from 'node:events';
import { gunzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { staticHandler } from '../server/static.js';

const root=new URL('../dist/web/',import.meta.url),manifest=JSON.parse(fs.readFileSync(new URL('release-manifest.json',root)));
let count=0;const check=(name,fn)=>{fn();count++;console.log('✔ '+name);};
check('manifest files have exact SHA and source images are byte-identical',()=>{
  assert.equal(new Set(manifest.files.map(f=>f.path)).size,manifest.files.length);
  for(const f of manifest.files){const b=fs.readFileSync(new URL(f.path,root));assert.equal(b.length,f.bytes);assert.equal(crypto.createHash('sha256').update(b).digest('hex'),f.sha256);if(/\.(webp|png|jpg)$/.test(f.path)){assert.deepEqual(b,fs.readFileSync(new URL('../'+f.path,import.meta.url)));assert.ok(!f.path.includes('/source/'));}}
});
const html=fs.readFileSync(new URL('index.html',root),'utf8'),js=fs.readFileSync(new URL('assets/3d/app.js',root),'utf8');
check('detached package declares ESM and contains no broken internal review links',()=>{assert.equal(JSON.parse(fs.readFileSync(new URL('package.json',root))).type,'module');assert.ok(!fs.readFileSync(new URL('3d.html',root),'utf8').includes('href="dev/'));});
check('web entry keeps online enabled and artwork external at the correct module root',()=>{
  assert.ok(html.includes('assets/3d/app.js'));assert.ok(!html.includes('__HOGUK_STANDALONE__'));assert.ok(!js.includes('data:image/webp;base64,'));assert.ok(Buffer.byteLength(html)<4000);
  for(const rel of new Set([...js.matchAll(/assets\/[\w./-]+\.(?:webp|png|jpg|svg)/g)].map(m=>m[0])))assert.ok(fs.existsSync(new URL(rel,root)),rel);
});
check('compressed entry decodes to exactly the shipping script',()=>assert.deepEqual(gunzipSync(fs.readFileSync(new URL('assets/3d/app.js.gz',root))),Buffer.from(js)));
const server=http.createServer(staticHandler(fileURLToPath(root)));server.listen(0,'127.0.0.1');await once(server,'listening');
const request=(rel,headers={},method='GET')=>new Promise((resolve,reject)=>{const req=http.request({hostname:'127.0.0.1',port:server.address().port,path:rel,headers,method},res=>{const parts=[];res.on('data',p=>parts.push(p));res.on('end',()=>resolve({status:res.statusCode,headers:res.headers,body:Buffer.concat(parts)}));});req.on('error',reject);req.end();});
try{
  const first=await request('/assets/3d/app.js',{'accept-encoding':'gzip'});check('HTTP gzip returns the exact script with Vary',()=>{assert.equal(first.status,200);assert.equal(first.headers['content-encoding'],'gzip');assert.equal(first.headers.vary,'Accept-Encoding');assert.deepEqual(gunzipSync(first.body),Buffer.from(js));});
  const cached=await request('/assets/3d/app.js',{'accept-encoding':'gzip','if-none-match':first.headers.etag});check('unchanged repeat visit returns 304 with zero body',()=>{assert.equal(cached.status,304);assert.equal(cached.body.length,0);});
  const raw=await request('/assets/3d/app.js',{'accept-encoding':'gzip;q=0','if-none-match':first.headers.etag});check('gzip rejection and changed encoding do not return stale 304',()=>{assert.equal(raw.status,200);assert.equal(raw.headers['content-encoding'],undefined);assert.deepEqual(raw.body,Buffer.from(js));});
  const tagFirst=await request('/index.html');const stale=await request('/index.html',{'if-none-match':'"different"','if-modified-since':new Date(Date.now()+86400000).toUTCString()});check('ETag mismatch takes precedence over If-Modified-Since',()=>assert.equal(stale.status,200));
  const head=await request('/index.html',{},'HEAD');check('HEAD returns length without streaming a body',()=>{assert.equal(head.body.length,0);assert.equal(+head.headers['content-length'],Buffer.byteLength(html));});
  const bad=await request('/%ZZ');const forbidden=await request('/../package.json');const missing=await request('/does-not-exist');check('malformed paths, traversal and missing files fail cleanly',()=>{assert.equal(bad.status,400);assert.equal(forbidden.status,403);assert.equal(missing.status,404);});
  for(const rel of ['/%5c.git/config','/%5cnode_modules/three/package.json','/.git/config']){const denied=await request(rel);check('hidden/dependency path is denied: '+rel,()=>assert.equal(denied.status,403));}
  const art=manifest.files.find(f=>f.path.endsWith('.webp'));const image=await request('/'+art.path);const repeat=await request('/'+art.path,{'if-none-match':image.headers.etag});check('artwork keeps exact bytes and also supports 304',()=>{assert.equal(image.body.length,art.bytes);assert.equal(repeat.status,304);assert.equal(repeat.body.length,0);});
  fs.writeFileSync(new URL('../docs/WEB_RELEASE_VALIDATION.json',import.meta.url),JSON.stringify({tests:count,passed:true,entryBytes:Buffer.byteLength(html),scriptBytes:Buffer.byteLength(js),scriptGzipBytes:first.body.length,artFiles:manifest.files.filter(f=>/\.(webp|png|jpg)$/.test(f.path)).length,artByteIdentical:true,repeatBodyBytes:repeat.body.length},null,2)+'\n');
}finally{server.close();await once(server,'close');}
