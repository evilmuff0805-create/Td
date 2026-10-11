import fs from 'node:fs';
import path from 'node:path';

const MIME={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.jpg':'image/jpeg','.ico':'image/x-icon','.woff2':'font/woff2','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8','.md':'text/markdown; charset=utf-8'};
const stat=file=>fs.promises.stat(file).catch(()=>null);
export function staticHandler(root) {
  root=path.resolve(root);
  return async (req,res)=>{
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{allow:'GET, HEAD'}).end();return;}
    let rel;
    try{rel=decodeURIComponent((req.url||'/').split('?')[0]);}catch{res.writeHead(400).end();return;}
    if(rel==='/')rel='/index.html';
    const file=path.resolve(root,'.'+rel);
    if(!file.startsWith(root+path.sep)||rel.includes('..')||rel.includes('\\')||/\/(\.|node_modules)/.test(rel)){res.writeHead(403).end('forbidden');return;}
    const source=await stat(file);
    if(!source?.isFile()){res.writeHead(404,{'content-type':'text/plain; charset=utf-8'}).end('찾을 수 없습니다');return;}
    let selected=file,info=source,encoding='';
    const compressible=/\.(html|js|css|json|svg)$/.test(file);
    const gzipAccepted=(req.headers['accept-encoding']||'').split(',').some(part=>/^\s*gzip(?:\s*;\s*q=(?:1(?:\.0*)?|0\.[0-9]*[1-9][0-9]*))?\s*$/i.test(part));
    if(compressible&&gzipAccepted){const gz=await stat(file+'.gz');if(gz?.isFile()&&gz.mtimeMs>=source.mtimeMs){selected=file+'.gz';info=gz;encoding='gzip';}}
    const etag=`W/"${info.size.toString(16)}-${info.mtimeMs.toString(16)}-${encoding||'raw'}"`;
    const headers={'content-type':MIME[path.extname(file)]||'application/octet-stream','cache-control':'no-cache',etag,'last-modified':source.mtime.toUTCString()};
    if(compressible)headers.vary='Accept-Encoding';
    if(encoding)headers['content-encoding']=encoding;
    const tag=req.headers['if-none-match'];
    const fresh=tag?tag.split(',').some(t=>t.trim()==='*'||t.trim().replace(/^W\//,'')===etag.replace(/^W\//,'')):(req.headers['if-modified-since']&&Math.floor(source.mtimeMs/1000)*1000<=Date.parse(req.headers['if-modified-since']));
    if(fresh){res.writeHead(304,headers).end();return;}
    res.writeHead(200,{...headers,'content-length':info.size});
    if(req.method==='HEAD'){res.end();return;}
    const stream=fs.createReadStream(selected);stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);
  };
}
