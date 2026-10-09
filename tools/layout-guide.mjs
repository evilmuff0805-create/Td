#!/usr/bin/env node
// 전장 배치 가이드: AI 배경 생성(이미지 → 이미지)에 넣을 위에서 본 깨끗한 배치도 (1칸 = 80px, 1920×1120)
//   node server/server.js 를 켠 상태에서  node tools/layout-guide.mjs s4 [출력 폴더=art-guides]
//   갈색 = 길, 밝은 땅 = 건설 가능, 파랑 = 물, 초록 원 = 나무, 회색 삼각 = 산, 회색 타원 = 바위, 갈색 사각 = 집, 붉은 사각 = 우리 성
import { chromium } from 'playwright'; // 개발 도구: npm i -D playwright 필요
import fs from 'node:fs';
const stage = process.argv[2] || 's4';
const outDir = process.argv[3] || 'art-guides';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:8080/dev/gallery.html');
const url = await page.evaluate(async (stageId) => {
  const { getMap, T_WATER } = await import('/src/sim/map.js');
  const { STAGE_BY_ID } = await import('/src/data/stages.js');
  const st = STAGE_BY_ID[stageId];
  const m = getMap(stageId);
  const S = 80; // 1칸 = 80px → 1920×1120
  const cv = document.createElement('canvas');
  cv.width = m.w * S;
  cv.height = m.h * S;
  const c = cv.getContext('2d');
  const snow = st.season === 'winter';
  const sea = st.season === 'sea';
  // 땅
  c.fillStyle = snow ? '#dfe4ea' : sea ? '#b9c48e' : st.season === 'autumn' ? '#b9a46a' : '#95b26c';
  c.fillRect(0, 0, cv.width, cv.height);
  // 물
  c.fillStyle = '#2d5b86';
  for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) if (m.grid[y * m.w + x] === T_WATER) c.fillRect(x * S - 1, y * S - 1, S + 2, S + 2);
  // 길: 칸 중심을 잇는 굵은 띠
  c.strokeStyle = '#8a6a48';
  c.lineWidth = S * 0.92;
  c.lineCap = 'round';
  c.lineJoin = 'round';
  for (const p of m.paths) {
    c.beginPath();
    p.pts.forEach((q, i) => (i ? c.lineTo(q.x * S, q.y * S) : c.moveTo(q.x * S, q.y * S)));
    c.stroke();
  }
  // 장식: 산(회색 삼각), 나무(짙은 초록 원), 바위(회색 타원), 집(갈색 사각)
  for (const d of m.decor) {
    const x = (d.x + 0.5) * S;
    const y = (d.y + 0.5) * S;
    if (d.ch === 'M') {
      c.fillStyle = snow ? '#8f97a3' : '#7d8077';
      c.beginPath();
      c.moveTo(x - S * 0.55, y + S * 0.5);
      c.lineTo(x, y - S * 0.6);
      c.lineTo(x + S * 0.55, y + S * 0.5);
      c.closePath();
      c.fill();
    } else if (d.ch === 'T' || d.ch === 'B') {
      c.fillStyle = '#2f4f36';
      c.beginPath();
      c.arc(x, y, S * 0.36, 0, Math.PI * 2);
      c.fill();
    } else if (d.ch === 'R') {
      c.fillStyle = '#7b7f86';
      c.beginPath();
      c.ellipse(x, y, S * 0.3, S * 0.22, 0, 0, Math.PI * 2);
      c.fill();
    } else if (d.ch === 'H') {
      c.fillStyle = '#7a5a3a';
      c.fillRect(x - S * 0.35, y - S * 0.3, S * 0.7, S * 0.6);
    }
  }
  // 성 (우리 본진): 붉은 사각 + 성문
  const b = m.base;
  c.fillStyle = '#9b3a2c';
  c.fillRect((b.x - 0.2) * S, (b.y - 0.9) * S, S * 1.4, S * 1.8);
  c.fillStyle = '#e8b04a';
  c.fillRect((b.x + 0.3) * S, (b.y + 0.3) * S, S * 0.4, S * 0.6);
  return cv.toDataURL('image/png');
}, stage);
fs.mkdirSync(outDir, { recursive: true });
const out = `${outDir}/${stage}-layout.png`;
fs.writeFileSync(out, Buffer.from(url.split(',')[1], 'base64'));
console.log(out, (fs.statSync(out).size / 1024).toFixed(0) + 'KB');
await browser.close();
