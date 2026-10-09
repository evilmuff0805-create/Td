#!/usr/bin/env node
// 단일 HTML 파일 빌드: dist/hoguk.html (서버 없이 열 수 있음 — 솔로·로컬 협동 가능, 온라인 협동은 서버 필요)
//   node tools/build.mjs          (esbuild 를 npx 로 내려받아 사용)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const js = execFileSync('npx', ['--yes', 'esbuild@0.24.0', 'src/main.js', '--bundle', '--format=iife', '--minify', '--target=es2020', '--charset=utf8', '--legal-comments=none'], {
  cwd: ROOT,
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
});
// 그림 파일('assets/…' 문자열)을 data URI 로 바꿔 한 파일에 담는다
const MIME = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg' };
let assetBytes = 0;
const jsInlined = js.replace(/(["'`])(assets\/[\w\-/.]+\.(webp|png|jpg))\1/g, (m, q, rel, ext) => {
  const buf = fs.readFileSync(path.join(ROOT, rel));
  assetBytes += buf.length;
  return `${q}data:${MIME[ext]};base64,${buf.toString('base64')}${q}`;
});
const css = fs.readFileSync(path.join(ROOT, 'styles/main.css'), 'utf8');
const html = `<title>호국영웅전</title>
<meta name="description" content="한국의 위인과 문화유산으로 임진왜란의 전장을 지키는 협동 타워 디펜스">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gowun+Batang:wght@400;700&family=Nanum+Brush+Script&display=swap">
<style>
${css}
</style>
<div id="app"><p style="padding:24px;color:#f0c75e">불러오는 중…</p></div>
<script>window.__HOGUK_STANDALONE__ = true;</script>
<script>
${jsInlined.replace(/<\/script/gi, '<\\/script')}
</script>
`;
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
const out = path.join(ROOT, 'dist/hoguk.html');
fs.writeFileSync(out, html);
console.log(`빌드 완료: ${path.relative(ROOT, out)} (${(html.length / 1024).toFixed(0)} KB, 그림 ${(assetBytes / 1024).toFixed(0)} KB)`);
