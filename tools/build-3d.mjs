#!/usr/bin/env node
import { buildSync } from 'esbuild';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
buildSync({ entryPoints: [fileURLToPath(new URL('src/main.js', root))],
  outfile: fileURLToPath(new URL('assets/3d/app.js', root)),
  bundle: true, format: 'esm', target: 'es2020', minify: true, legalComments: 'linked', charset: 'utf8' });
buildSync({ entryPoints: [fileURLToPath(new URL('src/3d/main.js', root))],
  outfile: fileURLToPath(new URL('assets/3d/game.js', root)),
  bundle: true, format: 'esm', target: 'es2020', minify: true, legalComments: 'linked', charset: 'utf8' });
fs.copyFileSync(new URL('../node_modules/three/LICENSE', import.meta.url), new URL('assets/3d/THREE-LICENSE.txt', root));
buildSync({ entryPoints: [fileURLToPath(new URL('src/3d/tower-review.js', root))],
  outfile: fileURLToPath(new URL('assets/3d/tower-review.js', root)),
  bundle: true, format: 'esm', target: 'es2020', minify: true, legalComments: 'linked', charset: 'utf8' });
for(const name of ['season-review','roster-review','material-review','hero-review','hero-pose-review','combat-pose-review','enemy-review','effect-review'])buildSync({entryPoints:[fileURLToPath(new URL(`src/3d/${name}.js`,root))],outfile:fileURLToPath(new URL(`assets/3d/${name}.js`,root)),bundle:true,format:'esm',target:'es2020',minify:true,legalComments:'linked',charset:'utf8'});
buildSync({entryPoints:[fileURLToPath(new URL('src/3d/performance-review.js',root))],outfile:fileURLToPath(new URL('assets/3d/performance-review.js',root)),bundle:true,format:'esm',target:'es2020',minify:true,legalComments:'linked',charset:'utf8'});
console.log('3D 빌드 완료: 전체 게임 + 사계절 전장 미리보기 + 계절·유산·캐릭터 비교 화면 (외부 CDN 없이 실행)');
