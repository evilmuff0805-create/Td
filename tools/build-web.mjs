#!/usr/bin/env node
// External, byte-identical artwork: fast HTTP entry, optional portable HTML stays separate.
import { buildSync } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist/web');
fs.mkdirSync(out, { recursive: true });
const files = new Map();
const write = (rel, bytes) => {
  const dest = path.join(out, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, bytes);
  files.set(rel, Buffer.from(bytes));
};
for (const [entry, name] of [['src/main.js','app'], ['src/3d/main.js','game']]) {
  const result = buildSync({absWorkingDir:root, entryPoints:[entry], outfile:`assets/3d/${name}.js`, bundle:true, format:'esm', target:'es2020', minify:true, charset:'utf8', legalComments:'external', write:false});
  for (const file of result.outputFiles) write(path.relative(root,file.path).replaceAll('\\','/'),file.contents);
}
for (const rel of ['index.html','3d.html','styles/main.css','styles/3d.css','styles/3d-battle.css','server/server.js','server/static.js','server/rooms.js']) write(rel,fs.readFileSync(path.join(root,rel)));
write('package.json', JSON.stringify({name:'hoguk-web',private:true,type:'module',engines:{node:'>=18'},scripts:{start:'node server/server.js'}},null,2)+'\n');
// The free battlefield is shipped; internal review pages are development-only.
write('3d.html',files.get('3d.html').toString('utf8').replace(/<a\b[^>]*href="dev\/[^"\n]+"[^>]*>[\s\S]*?<\/a>/g,''));
write('assets/3d/THREE-LICENSE.txt', fs.readFileSync(path.join(root,'node_modules/three/LICENSE')));
// Only literal shipping references in the two bundles and pages; never copy source archives.
const references = new Set();
for (const [rel,bytes] of files) if (/\.(js|css|html)$/.test(rel)) {
  for (const match of bytes.toString('utf8').matchAll(/assets\/[\w./-]+\.(?:webp|png|jpg|svg)/g)) references.add(match[0]);
}
for (const rel of [...references].sort()) {
  if (rel.includes('/source/')) throw new Error(`Source archive referenced by release: ${rel}`);
  write(rel,fs.readFileSync(path.join(root,rel)));
}
for (const [rel,bytes] of [...files]) if (/\.(js|css|html|json)$/.test(rel)) write(rel+'.gz',gzipSync(bytes,{level:9}));
const manifest = {
  format:1, entry:'index.html', artIsByteIdentical:true,
  files:[...files].sort(([a],[b])=>a.localeCompare(b)).map(([rel,bytes])=>({path:rel,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')})),
};
// Remove only previous-manifest-owned files, resolved strictly inside this output.
const prior = path.join(out,'release-manifest.json');
if (fs.existsSync(prior)) for (const {path:rel} of JSON.parse(fs.readFileSync(prior,'utf8')).files) {
  const dest = path.resolve(out,rel);
  if (!dest.startsWith(out+path.sep)) throw new Error('Unsafe prior manifest path');
  if (!files.has(rel)) fs.rmSync(dest,{force:true});
}
fs.writeFileSync(prior, JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({entryBytes:files.get('index.html').length,scriptBytes:files.get('assets/3d/app.js').length,scriptGzipBytes:files.get('assets/3d/app.js.gz').length,artFiles:references.size,artBytes:[...references].reduce((n,rel)=>n+files.get(rel).length,0),totalBytes:manifest.files.reduce((n,f)=>n+f.bytes,0),out},null,2));
