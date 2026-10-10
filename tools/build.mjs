#!/usr/bin/env node
// 단일 HTML 파일 빌드: dist/hoguk.html (서버 없이 열 수 있음 — 솔로·로컬 협동 가능, 온라인 협동은 서버 필요)
//   npm install && npm run build (고정된 개발용 esbuild 사용, Windows 지원)
import { buildSync } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const js = buildSync({
  absWorkingDir: ROOT, entryPoints: ['src/main.js'], bundle: true, format: 'iife',
  minify: true, target: 'es2020', charset: 'utf8', legalComments: 'none', write: false,
  define: { 'import.meta.url': 'document.baseURI' },
}).outputFiles[0].text;
// 그림 파일('assets/…' 문자열)을 data URI 로 바꿔 한 파일에 담는다
const MIME = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg' };
let assetBytes = 0;
const jsInlined = js.replace(/(["'`])(assets\/[\w\-/.]+\.(webp|png|jpg))\1/g, (m, q, rel, ext) => {
  const buf = fs.readFileSync(path.join(ROOT, rel));
  assetBytes += buf.length;
  return `${q}data:${MIME[ext]};base64,${buf.toString('base64')}${q}`;
});
const css = fs.readFileSync(path.join(ROOT, 'styles/main.css'), 'utf8');
const threeLicense = fs.readFileSync(path.join(ROOT, 'node_modules/three/LICENSE'), 'utf8');
const html = `<!doctype html>
<html lang="ko"><meta charset="utf-8">
<!-- Third-party notice: Three.js
${threeLicense}
-->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>호국영웅전</title>
<meta name="description" content="한국의 위인과 문화유산으로 임진왜란의 전장을 지키는 협동 타워 디펜스">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&family=Gowun+Batang:wght@400;700&family=Nanum+Brush+Script&display=swap">
<style>
${css}
</style>
<div id="app"><p style="padding:24px;color:#f0c75e">불러오는 중…</p></div>
<script>window.__HOGUK_STANDALONE__ = true;</script>
<script>
${jsInlined.replace(/<\/script/gi, '<\\/script')}
</script>
</html>
`;
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
const out = path.join(ROOT, 'dist/hoguk.html');
fs.writeFileSync(out, html);
console.log(`빌드 완료: ${path.relative(ROOT, out)} (${(html.length / 1024).toFixed(0)} KB, 그림 ${(assetBytes / 1024).toFixed(0)} KB)`);
