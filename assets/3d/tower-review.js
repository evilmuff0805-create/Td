var Il="186",Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nf=0,Vh=1,Uf=2;var Wi=1,Ff=2,Er=3,fs=0,en=1,Re=2,bi=0,ai=1,Un=2,Hh=3,Wh=4,Of=5;var Ns=100,Bf=101,kf=102,zf=103,Gf=104,Vf=200,Hf=201,Wf=202,Xf=203,Xh=204,qh=205,qf=206,Yf=207,jf=208,Zf=209,$f=210,Kf=211,Jf=212,Qf=213,tp=214,$a=0,Ka=1,Ja=2,dr=3,Qa=4,tl=5,os=6,el=7,Pl=0,ep=1,np=2,li=0,Yh=1,jh=2,Zh=3,Us=4,$h=5,Kh=6,Jh=7;var Qh=300,ps=301,Fs=302,Dl=303,Ll=304,Xo=306,Pn=1e3,mi=1001,nl=1002,Ke=1003,ip=1004;var qo=1005;var Ne=1006,Nl=1007;var vn=1008;var En=1009,tu=1010,eu=1011,Cr=1012,Ul=1013,ci=1014,Xn=1015,hi=1016,Fl=1017,Ol=1018,Rr=1020,nu=35902,iu=35899,su=1021,ru=1022,hn=1023,yi=1026,ms=1027,Bl=1028,kl=1029,gs=1030,zl=1031;var Gl=1033,Yo=33776,jo=33777,Zo=33778,$o=33779,Vl=35840,Hl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,jl=37496,Zl=37488,$l=37489,Ko=37490,Kl=37491,Jl=37808,Ql=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,lc=37818,cc=37819,hc=37820,uc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,Jo=36285,xc=36286;var fo=2300,il=2301,Ya=2302,Rh=2303,Ih=2400,Ph=2401,Dh=2402;var sp=3200;var Qo=0,rp=1,qn="",ve="srgb",Es="srgb-linear",po="linear",xe="srgb";var ja=7680;var op=519,ap=512,lp=513,cp=514,yc=515,hp=516,up=517,_c=518,dp=519,ou=35044,au=35048;var lu="300 es",ni=2e3,fr=2001;function _0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function v0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fp(){let i=pr("canvas");return i.style.display="block",i}var qd={},mr=null;function mo(...i){let t="THREE."+i.shift();mr?mr("log",t,...i):console.log(t,...i)}function pp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=pp(i);let t="THREE."+i.shift();if(mr)mr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=pp(i);let t="THREE."+i.shift();if(mr)mr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function As(...i){let t=i.join(" ");t in qd||(qd[t]=!0,Xt(...i))}function mp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var gp={[$a]:Ka,[Ja]:os,[Qa]:el,[dr]:tl,[Ka]:$a,[os]:Ja,[el]:Qa,[tl]:dr},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=1234567,lo=Math.PI/180,gr=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function cu(i,t){return(i%t+t)%t}function M0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function b0(i,t,e){return i!==t?(e-i)/(t-i):0}function co(i,t,e){return(1-e)*i+e*t}function w0(i,t,e,n){return co(i,t,1-Math.exp(-e*n))}function S0(i,t=1){return t-Math.abs(cu(i,t*2)-t)}function T0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function A0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function E0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function C0(i,t){return i+Math.random()*(t-i)}function R0(i){return i*(.5-Math.random())}function I0(i){i!==void 0&&(Yd=i);let t=Yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function P0(i){return i*lo}function D0(i){return i*gr}function L0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function N0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function U0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function F0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ie={DEG2RAD:lo,RAD2DEG:gr,generateUUID:xi,clamp:re,euclideanModulo:cu,mapLinear:M0,inverseLerp:b0,lerp:co,damp:w0,pingpong:S0,smoothstep:T0,smootherstep:A0,randInt:E0,randFloat:C0,randFloatSpread:R0,seededRandom:I0,degToRad:P0,radToDeg:D0,isPowerOfTwo:L0,ceilPowerOfTwo:N0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:F0,normalize:_e,denormalize:ei},mu=class mu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mu.prototype.isVector2=!0;var st=mu,Me=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);g=Math.sin(g*y)/v,a=Math.sin(a*y)/v,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gu=class gu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gu.prototype.isVector3=!0;var R=gu,ih=new R,jd=new Me,xu=class xu{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],v=s[4],_=s[7],b=s[2],S=s[5],I=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*m+a*v+l*S,r[6]=o*g+a*_+l*I,r[1]=c*x+h*y+u*b,r[4]=c*m+h*v+u*S,r[7]=c*g+h*_+u*I,r[2]=d*x+f*y+p*b,r[5]=d*m+f*v+p*S,r[8]=d*g+f*_+p*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sh.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sh.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xu.prototype.isMatrix3=!0;var te=xu,sh=new te,Zd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){let i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:t,whitePoint:n,transfer:po,toXYZ:Zd,fromXYZ:$d,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Zd,fromXYZ:$d,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),i}var ue=O0();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qs,sl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qs===void 0&&(qs=pr("canvas")),qs.width=t.width,qs.height=t.height;let s=qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},B0=0,xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rh(s[o].image)):r.push(rh(s[o]))}else r=rh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var k0=0,oh=new R,Je=class i extends ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=Ne,o=vn,a=hn,l=En,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=xi(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Qh;Je.DEFAULT_ANISOTROPY=1;var yu=class yu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(f+1)/2,b=(g+1)/2,S=(h+d)/4,I=(u+x)/4,M=(p+m)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=I/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=I/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yu.prototype.isVector4=!0;var Ue=yu,rl=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},go=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ol=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Rl=class Rl{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(z0,t,G0)}lookAt(t,e,n){let s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),es.crossVectors(n,Rn),es.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),es.crossVectors(n,Rn)),es.normalize(),ya.crossVectors(Rn,es),s[0]=es.x,s[4]=ya.x,s[8]=Rn.x,s[1]=es.y,s[5]=ya.y,s[9]=Rn.y,s[2]=es.z,s[6]=ya.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],v=n[7],_=n[11],b=n[15],S=s[0],I=s[4],M=s[8],T=s[12],L=s[1],U=s[5],z=s[9],F=s[13],C=s[2],N=s[6],G=s[10],O=s[14],$=s[3],P=s[7],B=s[11],W=s[15];return r[0]=o*S+a*L+l*C+c*$,r[4]=o*I+a*U+l*N+c*P,r[8]=o*M+a*z+l*G+c*B,r[12]=o*T+a*F+l*O+c*W,r[1]=h*S+u*L+d*C+f*$,r[5]=h*I+u*U+d*N+f*P,r[9]=h*M+u*z+d*G+f*B,r[13]=h*T+u*F+d*O+f*W,r[2]=p*S+x*L+m*C+g*$,r[6]=p*I+x*U+m*N+g*P,r[10]=p*M+x*z+m*G+g*B,r[14]=p*T+x*F+m*O+g*W,r[3]=y*S+v*L+_*C+b*$,r[7]=y*I+v*U+_*N+b*P,r[11]=y*M+v*z+_*G+b*B,r[15]=y*T+v*F+_*O+b*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-c*d,v=a*f-c*u,_=a*d-l*u,b=o*f-c*h,S=o*d-l*h,I=o*u-a*h;return e*(x*y-m*v+g*_)-n*(p*y-m*b+g*S)+s*(p*v-x*b+g*I)-r*(p*_-x*S+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,v=e*l-s*o,_=e*c-r*o,b=n*l-s*a,S=n*c-r*a,I=s*c-r*l,M=h*x-u*p,T=h*m-d*p,L=h*g-f*p,U=u*m-d*x,z=u*g-f*x,F=d*g-f*m,C=y*F-v*z+_*U+b*L-S*T+I*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return t[0]=(a*F-l*z+c*U)*N,t[1]=(s*z-n*F-r*U)*N,t[2]=(x*I-m*S+g*b)*N,t[3]=(d*S-u*I-f*b)*N,t[4]=(l*L-o*F-c*T)*N,t[5]=(e*F-s*L+r*T)*N,t[6]=(m*_-p*I-g*v)*N,t[7]=(h*I-d*_+f*v)*N,t[8]=(o*z-a*L+c*M)*N,t[9]=(n*L-e*z-r*M)*N,t[10]=(p*S-x*_+g*y)*N,t[11]=(u*_-h*S-f*y)*N,t[12]=(a*T-o*U-l*M)*N,t[13]=(e*U-n*T+s*M)*N,t[14]=(x*v-p*b-m*y)*N,t[15]=(h*b-u*v+d*y)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,v=l*h,_=l*u,b=n.x,S=n.y,I=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+_)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(d+g))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(p+v)*I,s[9]=(m-y)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ys.set(s[0],s[1],s[2]).length(),a=Ys.set(s[4],s[5],s[6]).length(),l=Ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Jn.copy(this);let c=1/o,h=1/a,u=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ni)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ni)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Rl.prototype.isMatrix4=!0;var he=Rl,Ys=new R,Jn=new he,z0=new R(0,0,0),G0=new R(1,1,1),es=new R,ya=new R,Rn=new R,Kd=new he,Jd=new Me,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},V0=0,Qd=new R,js=new Me,Ri=new he,_a=new R,Kr=new R,H0=new R,W0=new Me,tf=new R(1,0,0),ef=new R(0,1,0),nf=new R(0,0,1),sf={type:"added"},X0={type:"removed"},Zs={type:"childadded",child:null},ah={type:"childremoved",child:null},ke=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new ln,n=new Me,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new te}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(tf,t)}rotateY(t){return this.rotateOnAxis(ef,t)}rotateZ(t){return this.rotateOnAxis(nf,t)}translateOnAxis(t,e){return Qd.copy(t).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tf,t)}translateY(t){return this.translateOnAxis(ef,t)}translateZ(t){return this.translateOnAxis(nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Kr,_a,this.up):Ri.lookAt(_a,Kr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Ri),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(X0),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,H0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,W0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new R(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},q0={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},va={h:0,s:0,l:0};function lh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=cu(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lh(o,r,t+1/3),this.g=lh(o,r,t),this.b=lh(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return ue.workingToColorSpace(an.copy(this),t),Math.round(re(an.r*255,0,255))*65536+Math.round(re(an.g*255,0,255))*256+Math.round(re(an.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=ve){ue.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(va);let n=co(ns.h,va.h,e),s=co(ns.s,va.s,e),r=co(ns.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Qt;Qt.NAMES=xp;var xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fi=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new R,Ii=new R,ch=new R,Pi=new R,$s=new R,Ks=new R,rf=new R,hh=new R,uh=new R,dh=new R,fh=new Ue,ph=new Ue,mh=new Ue,Ni=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Ii.subVectors(n,e),ch.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Ii),l=Qn.dot(ch),c=Ii.dot(Ii),h=Ii.dot(ch),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(t,e),ph.fromBufferAttribute(t,n),mh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fh,r.x),o.addScaledVector(ph,r.y),o.addScaledVector(mh,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Ii.subVectors(t,e),Qn.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Qn.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Ks.subVectors(r,n),hh.subVectors(t,n);let l=$s.dot(hh),c=Ks.dot(hh);if(l<=0&&c<=0)return e.copy(n);uh.subVectors(t,s);let h=$s.dot(uh),u=Ks.dot(uh);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($s,o);dh.subVectors(t,r);let f=$s.dot(dh),p=Ks.dot(dh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ks,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return rf.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(rf,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector($s,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qe=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),ba.subVectors(this.max,Jr),Js.subVectors(t.a,Jr),Qs.subVectors(t.b,Jr),tr.subVectors(t.c,Jr),is.subVectors(Qs,Js),ss.subVectors(tr,Qs),bs.subVectors(Js,tr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-bs.z,bs.y,is.z,0,-is.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-is.y,is.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!gh(e,Js,Qs,tr,ba)||(e=[1,0,0,0,1,0,0,0,1],!gh(e,Js,Qs,tr,ba))?!1:(wa.crossVectors(is,ss),e=[wa.x,wa.y,wa.z],gh(e,Js,Qs,tr,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new R,new R,new R,new R,new R,new R,new R,new R],ti=new R,Ma=new Qe,Js=new R,Qs=new R,tr=new R,is=new R,ss=new R,bs=new R,Jr=new R,ba=new R,wa=new R,ws=new R;function gh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xe=new R,Sa=new st,Y0=0,Se=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var yo=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _o=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Tt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},j0=new Qe,Qr=new R,xh=new R,_i=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):j0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(xh)),this.expandByPoint(Qr.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Z0=0,zn=new he,yh=new ke,er=new R,In=new Qe,to=new Qe,$e=new R,Zt=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_0(t)?_o:yo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return yh.lookAt(t),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(In.min,to.min),In.expandByPoint($e),$e.addVectors(In.max,to.max),In.expandByPoint($e)):(In.expandByPoint(to.min),In.expandByPoint(to.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(t,c),$e.add(er)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Se(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new R,l[M]=new R;let c=new R,h=new R,u=new R,d=new st,f=new st,p=new st,x=new R,m=new R;function g(M,T,L){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,L),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,L),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(U),a[M].add(x),a[T].add(x),a[L].add(x),l[M].add(m),l[T].add(m),l[L].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let M=0,T=y.length;M<T;++M){let L=y[M],U=L.start,z=L.count;for(let F=U,C=U+z;F<C;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new R,_=new R,b=new R,S=new R;function I(M){b.fromBufferAttribute(s,M),S.copy(b);let T=a[M];v.copy(T),v.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(S,T);let U=_.dot(l[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,U)}for(let M=0,T=y.length;M<T;++M){let L=y[M],U=L.start,z=L.count;for(let F=U,C=U+z;F<C;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Se(d,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},mn=new R,vr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_h=new R,$0=new R,K0=new te,gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_h.subVectors(n,e).cross($0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||K0.getNormalMatrix(t),s=this.coplanarPoint(_h).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},J0=0,Gn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ai,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vi=class extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nr,eo=new R,ir=new R,sr=new R,rr=new st,no=new st,yp=new he,Ta=new R,io=new R,Aa=new R,of=new st,vh=new st,af=new st,Oi=class extends ke{constructor(t=new vi){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Zt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vo(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new vr(n,3,0,!1)),nr.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=nr,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),yp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ea(Ta.set(-.5,-.5,0),sr,o,ir,s,r),Ea(io.set(.5,-.5,0),sr,o,ir,s,r),Ea(Aa.set(.5,.5,0),sr,o,ir,s,r),of.set(0,0),vh.set(1,0),af.set(1,1);let a=t.ray.intersectTriangle(Ta,io,Aa,!1,eo);if(a===null&&(Ea(io.set(-.5,.5,0),sr,o,ir,s,r),vh.set(0,1),a=t.ray.intersectTriangle(Ta,Aa,io,!1,eo),a===null))return;let l=t.ray.origin.distanceTo(eo);l<t.near||l>t.far||e.push({distance:l,point:eo.clone(),uv:Ni.getInterpolation(eo,Ta,io,Aa,of,vh,af,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ea(i,t,e,n,s,r){rr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(no.x=r*rr.x-s*rr.y,no.y=s*rr.x+r*rr.y):no.copy(rr),i.copy(t),i.x+=no.x,i.y+=no.y,i.applyMatrix4(yp)}var Li=new R,Mh=new R,Ca=new R,Ra=new R,Bi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mh.copy(t).add(e).multiplyScalar(.5),Ca.copy(e).sub(t).normalize(),Ra.copy(this.origin).sub(Mh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ca),a=Ra.dot(this.direction),l=-Ra.dot(Ca),c=Ra.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mh).addScaledVector(Ca,d),f}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,v=n.z-o.z,_=Math.abs(l),b=Math.abs(c),S=Math.abs(h),I,M,T,L,U,z,F,C,N,G,O,$;if(_>=b&&_>=S?(T=l,z=u,N=p,$=g,l>=0?(I=c,M=h,L=d,U=f,F=x,C=m,G=y,O=v):(I=h,M=c,L=f,U=d,F=m,C=x,G=v,O=y)):b>=S?(T=c,z=d,N=x,$=y,c>=0?(I=h,M=l,L=f,U=u,F=m,C=p,G=v,O=g):(I=l,M=h,L=u,U=f,F=p,C=m,G=g,O=v)):(T=h,z=f,N=m,$=v,h>=0?(I=l,M=c,L=u,U=d,F=p,C=x,G=g,O=y):(I=c,M=l,L=d,U=u,F=x,C=p,G=y,O=g)),T===0)return null;let P=I/T,B=M/T,W=1/T,it=L-P*z,ot=U-B*z,Lt=F-P*N,Ht=C-B*N,ne=G-P*$,J=O-B*$,tt=ne*Ht-J*Lt,wt=it*J-ot*ne,$t=Lt*ot-Ht*it;if(s){if(tt<0||wt<0||$t<0)return null}else if((tt<0||wt<0||$t<0)&&(tt>0||wt>0||$t>0))return null;let Ct=tt+wt+$t;if(Ct===0)return null;let Kt=W*(tt*z+wt*N+$t*$);return(Ct>0?Kt<0:Kt>0)?null:this.at(Kt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lf=new he,Ss=new Bi,Ia=new _i,cf=new R,Pa=new R,Da=new R,La=new R,bh=new R,Na=new R,hf=new R,Ua=new R,Rt=class extends ke{constructor(t=new Zt,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(bh.fromBufferAttribute(u,t),o?Na.addScaledVector(bh,h):Na.addScaledVector(bh.sub(e),h))}e.add(Na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(Ia.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Ia,cf)===null||Ss.origin.distanceToSquared(cf)>(t.far-t.near)**2))&&(lf.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(lf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=v;_<b;_+=3){let S=a.getX(_),I=a.getX(_+1),M=a.getX(_+2);s=Fa(this,g,t,n,c,h,u,S,I,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Fa(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,b=v;_<b;_+=3){let S=_,I=_+1,M=_+2;s=Fa(this,g,t,n,c,h,u,S,I,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,v=m+1,_=m+2;s=Fa(this,o,t,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Q0(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===fs,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:i}}function Fa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Pa),i.getVertexPosition(l,Da),i.getVertexPosition(c,La);let h=Q0(i,t,e,n,Pa,Da,La,hf);if(h){let u=new R;Ni.getBarycoord(hf,Pa,Da,La,u),s&&(h.uv=Ni.getInterpolatedAttribute(s,a,l,c,u,new st)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,a,l,c,u,new st)),o&&(h.normal=Ni.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};Ni.getNormal(Pa,Da,La,d.normal),h.face=d,h.barycoord=u}return h}var Sn=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ke,h=Ke,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new he,uf=new he,Oa=[],df=new Qe,tg=new he,so=new Rt,ro=new _i,Cs=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),df.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),ro.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),t.ray.intersectsSphere(ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),uf.multiplyMatrices(n,or),so.matrixWorld=uf,so.raycast(t,Oa);for(let o=0,a=Oa.length;o<a;o++){let l=Oa[o];l.instanceId=r,l.object=this,e.push(l)}Oa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sn(new Float32Array(s*this.count),s,this.count,Bl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new _i,eg=new st(.5,.5),Ba=new R,br=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,o=new gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-p,b-y).normalize(),s[1].setComponents(c+o,f+h,g+p,b+y).normalize(),s[2].setComponents(c+a,f+u,g+x,b+v).normalize(),s[3].setComponents(c-a,f-u,g-x,b-v).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,f-d,g-m,b-_).normalize();else if(s[4].setComponents(c-l,f-d,g-m,b-_).normalize(),e===ni)s[5].setComponents(c+l,f+d,g+m,b+_).normalize();else if(e===fr)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=eg.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ba.x=s.normal.x>0?t.max.x:t.min.x,Ba.y=s.normal.y>0?t.max.y:t.min.y,Ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vn=class extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},al=new R,ll=new R,ff=new he,oo=new Bi,ka=new _i,wh=new R,pf=new R,si=class extends ke{constructor(t=new Zt,e=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)al.fromBufferAttribute(e,s-1),ll.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=al.distanceTo(ll);t.setAttribute("lineDistance",new Tt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,t.ray.intersectsSphere(ka)===!1)return;ff.copy(s).invert(),oo.copy(t.ray).applyMatrix4(ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),v=za(this,t,oo,l,g,y,x);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=za(this,t,oo,l,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=za(this,t,oo,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=za(this,t,oo,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function za(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(al.fromBufferAttribute(a,s),ll.fromBufferAttribute(a,r),e.distanceSqToSegment(al,ll,wh,pf)>n)return;wh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wh);if(!(c<t.near||c>t.far))return{distance:c,point:pf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var mf=new R,gf=new R,Mo=class extends si{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mf.fromBufferAttribute(e,s),gf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mf.distanceTo(gf);t.setAttribute("lineDistance",new Tt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ki=class extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xf=new he,Lh=new Bi,Ga=new _i,Va=new R,as=class extends ke{constructor(t=new Zt,e=new ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,t.ray.intersectsSphere(Ga)===!1)return;xf.copy(s).invert(),Lh.copy(t.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);Va.fromBufferAttribute(u,m),yf(Va,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Va.fromBufferAttribute(u,p),yf(Va,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yf(i,t,e,n,s,r,o){let a=Lh.distanceSqToPoint(i);if(a<e){let l=new R;Lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var bo=class extends Je{constructor(t=[],e=ps,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rs=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends Je{constructor(t,e,n=ci,s,r,o,a=Ke,l=Ke,c,h=yi,u=1){if(h!==yi&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cl=class extends ls{constructor(t,e=ci,n=ps,s,r,o=Ke,a=Ke,l,c=yi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wo=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends Zt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function p(x,m,g,y,v,_,b,S,I,M,T){let L=_/I,U=b/M,z=_/2,F=b/2,C=S/2,N=I+1,G=M+1,O=0,$=0,P=new R;for(let B=0;B<G;B++){let W=B*U-F;for(let it=0;it<N;it++){let ot=it*L-z;P[x]=ot*y,P[m]=W*v,P[g]=C,c.push(P.x,P.y,P.z),P[x]=0,P[m]=0,P[g]=S>0?1:-1,h.push(P.x,P.y,P.z),u.push(it/I),u.push(1-B/M),O+=1}}for(let B=0;B<M;B++)for(let W=0;W<I;W++){let it=d+W+N*B,ot=d+W+N*(B+1),Lt=d+(W+1)+N*(B+1),Ht=d+(W+1)+N*B;l.push(it,ot,Ht),l.push(ot,Lt,Ht),$+=6}a.addGroup(f,$,T),f+=$,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zi=class i extends Zt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class i extends Zt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function y(){let _=new R,b=new R,S=0,I=(e-t)/n;for(let M=0;M<=r;M++){let T=[],L=M/r,U=L*(e-t)+t;for(let z=0;z<=s;z++){let F=z/s,C=F*l+a,N=Math.sin(C),G=Math.cos(C);b.x=U*N,b.y=-L*n+m,b.z=U*G,u.push(b.x,b.y,b.z),_.set(N,I,G).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-L),T.push(p++)}x.push(T)}for(let M=0;M<s;M++)for(let T=0;T<r;T++){let L=x[T][M],U=x[T+1][M],z=x[T+1][M+1],F=x[T][M+1];(t>0||T!==0)&&(h.push(L,U,F),S+=3),(e>0||T!==r-1)&&(h.push(U,z,F),S+=3)}c.addGroup(g,S,0),g+=S}function v(_){let b=p,S=new st,I=new R,M=0,T=_===!0?t:e,L=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*L,0),d.push(0,L,0),f.push(.5,.5),p++;let U=p;for(let z=0;z<=s;z++){let C=z/s*l+a,N=Math.cos(C),G=Math.sin(C);I.x=T*G,I.y=m*L,I.z=T*N,u.push(I.x,I.y,I.z),d.push(0,L,0),S.x=N*.5+.5,S.y=G*.5*L+.5,f.push(S.x,S.y),p++}for(let z=0;z<s;z++){let F=b+z,C=U+z;_===!0?h.push(C,C+1,F):h.push(C+1,C,F),M+=3}c.addGroup(g,M,_===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Is=class i extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},So=class i extends Zt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new R,_=new R,b=new R;for(let S=0;S<e.length;S+=3)f(e[S+0],v),f(e[S+1],_),f(e[S+2],b),l(v,_,b,y)}function l(y,v,_,b){let S=b+1,I=[];for(let M=0;M<=S;M++){I[M]=[];let T=y.clone().lerp(_,M/S),L=v.clone().lerp(_,M/S),U=S-M;for(let z=0;z<=U;z++)z===0&&M===S?I[M][z]=T:I[M][z]=T.clone().lerp(L,z/U)}for(let M=0;M<S;M++)for(let T=0;T<2*(S-M)-1;T++){let L=Math.floor(T/2);T%2===0?(d(I[M][L+1]),d(I[M+1][L]),d(I[M][L])):(d(I[M][L+1]),d(I[M+1][L+1]),d(I[M+1][L]))}}function c(y){let v=new R;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(_,1-b)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],b=o[y+4],S=Math.max(v,_,b),I=Math.min(v,_,b);S>.9&&I<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){let y=new R,v=new R,_=new R,b=new R,S=new st,I=new st,M=new st;for(let T=0,L=0;T<r.length;T+=9,L+=6){y.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(o[L+0],o[L+1]),I.set(o[L+2],o[L+3]),M.set(o[L+4],o[L+5]),b.copy(y).add(v).add(_).divideScalar(3);let U=m(b);x(S,L+0,y,U),x(I,L+2,v,U),x(M,L+4,_,U)}}function x(y,v,_,b){b<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},To=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new he;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hl=class extends wr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var _f=new R,vf=new R,Sh=new hu,Th=new hu,Ah=new hu,yn=class extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vf.subVectors(s[0],s[1]).add(s[0]),c=vf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_f.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_f),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Sh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Th.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Ah.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Th.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ah.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sh.calc(l),Th.calc(l),Ah.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ng(i,t){let e=1-i;return e*e*t}function ig(i,t){return 2*(1-i)*i*t}function sg(i,t){return i*i*t}function ho(i,t,e,n){return ng(i,t)+ig(i,e)+sg(i,n)}function rg(i,t){let e=1-i;return e*e*e*t}function og(i,t){let e=1-i;return 3*e*e*i*t}function ag(i,t){return 3*(1-i)*i*i*t}function lg(i,t){return i*i*i*t}function uo(i,t,e,n,s){return rg(i,t)+og(i,e)+ag(i,n)+lg(i,s)}var Ao=class extends Dn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends Dn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,s.x,r.x,o.x,a.x),uo(t,s.y,r.y,o.y,a.y),uo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends Dn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends Dn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends Dn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends Dn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mf(a,l.x,c.x,h.x,u.x),Mf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},fl=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:yn,CubicBezierCurve:Ao,CubicBezierCurve3:ul,EllipseCurve:wr,LineCurve:Eo,LineCurve3:dl,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Ro,SplineCurve:Io}),pl=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fl[s.type]().fromJSON(s))}return this}},Po=class extends pl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Eo(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Co(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ao(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new wr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tn=class extends Po{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Po().fromJSON(s))}return this}};function cg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_p(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=pg(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Do(r,o,e,a,l,c,0),o}function _p(i,t,e,n,s){let r;if(s===Tg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=bf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=bf(o/n|0,i[o],i[o+1],r);return r&&Sr(r,r.next)&&(No(r),r=r.next),r}function Ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(No(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Do(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_g(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ug(i,n,s,r):hg(i)){t.push(l.i,i.i,c.i),No(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=dg(Ps(i),t),Do(i,t,e,n,s,r,2)):o===2&&fg(i,t,e,n,s,r):Do(Ps(i),t,e,n,s,r,1);break}}}function hg(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ao(s,a,r,l,o,c,p.x,p.y)&&Fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ug(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=Nh(f,p,t,e,n),y=Nh(x,m,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=g&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ao(a,h,l,u,c,d,v.x,v.y)&&Fe(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&ao(a,h,l,u,c,d,_.x,_.y)&&Fe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ao(a,h,l,u,c,d,v.x,v.y)&&Fe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&ao(a,h,l,u,c,d,_.x,_.y)&&Fe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function dg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Sr(n,s)&&Mp(n,e,e.next,s)&&Lo(n,s)&&Lo(s,n)&&(t.push(n.i,e.i,s.i),No(e),No(e.next),e=i=s),e=e.next}while(e!==i);return Ps(e)}function fg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bg(o,a)){let l=bp(o,a);o=Ps(o,o.next),l=Ps(l,l.next),Do(o,t,e,n,s,r,0),Do(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=_p(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mg(c))}s.sort(mg);for(let r=0;r<s.length;r++)e=gg(s[r],e);return e}function mg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gg(i,t){let e=xg(i,t);if(!e)return t;let n=bp(e,i);return Ps(n,n.next),Ps(e,e.next)}function xg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Sr(i,e))return e;do{if(Sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&vp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Lo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&yg(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function yg(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function _g(i,t,e,n){let s=i;do s.z===0&&(s.z=Nh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vg(s)}function vg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Nh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vp(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ao(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&vp(i,t,e,n,s,r,o,a)}function bg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wg(i,t)&&(Lo(i,t)&&Lo(t,i)&&Sg(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||Sr(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sr(i,t){return i.x===t.x&&i.y===t.y}function Mp(i,t,e,n){let s=Wa(Fe(i,t,e)),r=Wa(Fe(i,t,n)),o=Wa(Fe(e,n,i)),a=Wa(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&Ha(i,e,t)||r===0&&Ha(i,n,t)||o===0&&Ha(e,i,n)||a===0&&Ha(e,t,n))}function Ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wa(i){return i>0?1:i<0?-1:0}function wg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lo(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function Sg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bp(i,t){let e=Uh(i.i,i.x,i.y),n=Uh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bf(i,t,e,n){let s=Uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function No(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fh=class{static triangulate(t,e,n=2){return cg(t,e,n)}},gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wf(t),Sf(n,t);let o=t.length;e.forEach(wf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sf(n,e[l]);let a=Fh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mi=class i extends Zt{constructor(t=new Tn([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Ag,v,_=!1,b,S,I,M;if(g){v=g.getSpacedPoints(h),_=!0,d=!1;let rt=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,rt),S=new R,I=new R,M=new R}d||(m=0,f=0,p=0,x=0);let T=a.extractPoints(c),L=T.shape,U=T.holes;if(!gi.isClockWise(L)){L=L.reverse();for(let rt=0,ht=U.length;rt<ht;rt++){let ut=U[rt];gi.isClockWise(ut)&&(U[rt]=ut.reverse())}}function F(rt){let ut=10000000000000001e-36,dt=rt[0];for(let gt=1;gt<=rt.length;gt++){let qt=gt%rt.length,Wt=rt[qt],Jt=Wt.x-dt.x,ee=Wt.y-dt.y,k=Jt*Jt+ee*ee,pe=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(dt.x),Math.abs(dt.y)),le=ut*pe*pe;if(k<=le){rt.splice(qt,1),gt--;continue}dt=Wt}}F(L),U.forEach(F);let C=U.length,N=L;for(let rt=0;rt<C;rt++){let ht=U[rt];L=L.concat(ht)}function G(rt,ht,ut){return ht||jt("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ht,ut)}let O=L.length;function $(rt,ht,ut){let dt,gt,qt,Wt=rt.x-ht.x,Jt=rt.y-ht.y,ee=ut.x-rt.x,k=ut.y-rt.y,pe=Wt*Wt+Jt*Jt,le=Wt*k-Jt*ee;if(Math.abs(le)>Number.EPSILON){let D=Math.sqrt(pe),w=Math.sqrt(ee*ee+k*k),X=ht.x-Jt/D,j=ht.y+Wt/D,K=ut.x-k/w,ft=ut.y+ee/w,mt=((K-X)*k-(ft-j)*ee)/(Wt*k-Jt*ee);dt=X+Wt*mt-rt.x,gt=j+Jt*mt-rt.y;let Q=dt*dt+gt*gt;if(Q<=2)return new st(dt,gt);qt=Math.sqrt(Q/2)}else{let D=!1;Wt>Number.EPSILON?ee>Number.EPSILON&&(D=!0):Wt<-Number.EPSILON?ee<-Number.EPSILON&&(D=!0):Math.sign(Jt)===Math.sign(k)&&(D=!0),D?(dt=-Jt,gt=Wt,qt=Math.sqrt(pe)):(dt=Wt,gt=Jt,qt=Math.sqrt(pe/2))}return new st(dt/qt,gt/qt)}let P=[];for(let rt=0,ht=N.length,ut=ht-1,dt=rt+1;rt<ht;rt++,ut++,dt++)ut===ht&&(ut=0),dt===ht&&(dt=0),P[rt]=$(N[rt],N[ut],N[dt]);let B=[],W,it=P.concat();for(let rt=0,ht=C;rt<ht;rt++){let ut=U[rt];W=[];for(let dt=0,gt=ut.length,qt=gt-1,Wt=dt+1;dt<gt;dt++,qt++,Wt++)qt===gt&&(qt=0),Wt===gt&&(Wt=0),W[dt]=$(ut[dt],ut[qt],ut[Wt]);B.push(W),it=it.concat(W)}let ot;if(m===0)ot=gi.triangulateShape(N,U);else{let rt=[],ht=[];for(let ut=0;ut<m;ut++){let dt=ut/m,gt=f*Math.cos(dt*Math.PI/2),qt=p*Math.sin(dt*Math.PI/2)+x;for(let Wt=0,Jt=N.length;Wt<Jt;Wt++){let ee=G(N[Wt],P[Wt],qt);wt(ee.x,ee.y,-gt),dt===0&&rt.push(ee)}for(let Wt=0,Jt=C;Wt<Jt;Wt++){let ee=U[Wt];W=B[Wt];let k=[];for(let pe=0,le=ee.length;pe<le;pe++){let D=G(ee[pe],W[pe],qt);wt(D.x,D.y,-gt),dt===0&&k.push(D)}dt===0&&ht.push(k)}}ot=gi.triangulateShape(rt,ht)}let Lt=ot.length,Ht=p+x;for(let rt=0;rt<O;rt++){let ht=d?G(L[rt],it[rt],Ht):L[rt];_?(I.copy(b.normals[0]).multiplyScalar(ht.x),S.copy(b.binormals[0]).multiplyScalar(ht.y),M.copy(v[0]).add(I).add(S),wt(M.x,M.y,M.z)):wt(ht.x,ht.y,0)}for(let rt=1;rt<=h;rt++)for(let ht=0;ht<O;ht++){let ut=d?G(L[ht],it[ht],Ht):L[ht];_?(I.copy(b.normals[rt]).multiplyScalar(ut.x),S.copy(b.binormals[rt]).multiplyScalar(ut.y),M.copy(v[rt]).add(I).add(S),wt(M.x,M.y,M.z)):wt(ut.x,ut.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){let ht=rt/m,ut=f*Math.cos(ht*Math.PI/2),dt=p*Math.sin(ht*Math.PI/2)+x;for(let gt=0,qt=N.length;gt<qt;gt++){let Wt=G(N[gt],P[gt],dt);wt(Wt.x,Wt.y,u+ut)}for(let gt=0,qt=U.length;gt<qt;gt++){let Wt=U[gt];W=B[gt];for(let Jt=0,ee=Wt.length;Jt<ee;Jt++){let k=G(Wt[Jt],W[Jt],dt);_?wt(k.x,k.y+v[h-1].y,v[h-1].x+ut):wt(k.x,k.y,u+ut)}}}ne(),J();function ne(){let rt=s.length/3;if(d){let ht=0,ut=O*ht;for(let dt=0;dt<Lt;dt++){let gt=ot[dt];$t(gt[2]+ut,gt[1]+ut,gt[0]+ut)}ht=h+m*2,ut=O*ht;for(let dt=0;dt<Lt;dt++){let gt=ot[dt];$t(gt[0]+ut,gt[1]+ut,gt[2]+ut)}}else{for(let ht=0;ht<Lt;ht++){let ut=ot[ht];$t(ut[2],ut[1],ut[0])}for(let ht=0;ht<Lt;ht++){let ut=ot[ht];$t(ut[0]+O*h,ut[1]+O*h,ut[2]+O*h)}}n.addGroup(rt,s.length/3-rt,0)}function J(){let rt=s.length/3,ht=0;tt(N,ht),ht+=N.length;for(let ut=0,dt=U.length;ut<dt;ut++){let gt=U[ut];tt(gt,ht),ht+=gt.length}n.addGroup(rt,s.length/3-rt,1)}function tt(rt,ht){let ut=rt.length;for(;--ut>=0;){let dt=ut,gt=ut-1;gt<0&&(gt=rt.length-1);for(let qt=0,Wt=h+m*2;qt<Wt;qt++){let Jt=O*qt,ee=O*(qt+1),k=ht+dt+Jt,pe=ht+gt+Jt,le=ht+gt+ee,D=ht+dt+ee;Ct(k,pe,le,D)}}}function wt(rt,ht,ut){l.push(rt),l.push(ht),l.push(ut)}function $t(rt,ht,ut){Kt(rt),Kt(ht),Kt(ut);let dt=s.length/3,gt=y.generateTopUV(n,s,dt-3,dt-2,dt-1);ye(gt[0]),ye(gt[1]),ye(gt[2])}function Ct(rt,ht,ut,dt){Kt(rt),Kt(ht),Kt(dt),Kt(ht),Kt(ut),Kt(dt);let gt=s.length/3,qt=y.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);ye(qt[0]),ye(qt[1]),ye(qt[3]),ye(qt[1]),ye(qt[2]),ye(qt[3])}function Kt(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function ye(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Eg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fl[s.type]().fromJSON(s)),new i(n,t.options)}},Ag={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-u),new st(d,1-p),new st(x,1-g)]:[new st(a,1-l),new st(h,1-u),new st(f,1-p),new st(m,1-g)]}};function Eg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Uo=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fo=class i extends Zt{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,d=new st,f=new R,p=new R,x=new R,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let y=0;y<=e;y++){let v=n+y*h*s,_=Math.sin(v),b=Math.cos(v);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*_,u.y=t[S].y,u.z=t[S].x*b,o.push(u.x,u.y,u.z),d.x=y/e,d.y=S/(t.length-1),a.push(d.x,d.y);let I=l[3*S+0]*_,M=l[3*S+1],T=l[3*S+0]*b;c.push(I,M,T)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let _=v+y*t.length,b=_,S=_+t.length,I=_+t.length+1,M=_+1;r.push(b,S,M),r.push(I,M,S)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Oe=class i extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let v=0;v<c;v++){let _=v*u-r;p.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let v=y+c*g,_=y+c*(g+1),b=y+1+c*(g+1),S=y+1+c*g;f.push(v,_,S),f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ri=class i extends Zt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new R,p=new st;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let y=g+m,v=y,_=y+n+1,b=y+n+2,S=y+1;a.push(v,_,S),a.push(_,b,S)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Oo=class i extends Zt{constructor(t=new Tn([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,p=d.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];gi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=gi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];f=f.concat(y)}for(let m=0,g=f.length;m<g;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],v=y[0]+u,_=y[1]+u,b=y[2]+u;n.push(v,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Cg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Cg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Bo=class i extends Zt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],v=g/n,_=o+v*a,b=t*Math.cos(_),S=Math.sqrt(t*t-b*b),I=0;g===0&&o===0?I=.5/e:g===n&&l===Math.PI&&(I=-.5/e);for(let M=0;M<=e;M++){let T=M/e,L=s+T*r;u.x=-S*Math.cos(L),u.y=b,u.z=S*Math.sin(L),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+I,1-v),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let v=h[g][y+1],_=h[g][y],b=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&f.push(v,_,S),(g!==n-1||l<Math.PI)&&f.push(_,b,S)}this.setIndex(f),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cs=class i extends Zt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new R,f=new R,p=new R;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(m))*Math.cos(y),f.y=(t+e*Math.cos(m))*Math.sin(y),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,v=(s+1)*(x-1)+m,_=(s+1)*x+m;l.push(g,y,_),l.push(y,v,_)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var An=class i extends Zt{constructor(t=new Ro(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new st,h=new R,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),g()}function m(v){h=t.getPointAt(v/e,h);let _=o.normals[v],b=o.binormals[v];for(let S=0;S<=s;S++){let I=S/s*Math.PI*2,M=Math.sin(I),T=-Math.cos(I);l.x=T*_.x+M*b.x,l.y=T*_.y+M*b.y,l.z=T*_.z+M*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let b=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),I=(s+1)*v+_,M=(s+1)*(v-1)+_;p.push(b,S,M),p.push(S,I,M)}}function y(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new fl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Tf(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Tf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var wp={clone:Os,merge:un},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Rg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ml=class extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_n=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ko=class extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gl=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xl=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Eh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends hs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=t,a=2*e-n;break;case Dh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:o=t,l=2*n-e;break;case Dh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,v=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+v*o[l+b]+_*o[u+b];return r}},_l=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},vl=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ml=class extends hs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,y=u[g],v=u[g+1],_=t*d+p*2,b=h[_],S=h[_+1],I=Lg(n,e,y,b,s);r[p]=Sp(I,x,v,S,m)}return r}};function Sp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Dg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Sp(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Dg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Eh(t.settings)&&(n.settings={inTangents:ar(t.settings.inTangents,Array),outTangents:ar(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fo:e=this.InterpolantFactoryMethodDiscrete;break;case il:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break;case Rh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Eh(this.settings)&&(Af(this.settings.inTangents,t),Af(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&v0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Eh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Af(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=il;var us=class extends Nn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=fo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};bl.prototype.ValueTypeName="color";var wl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};wl.prototype.ValueTypeName="number";var Sl=class extends hs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Me.slerpFlat(r,0,o,c-a,o,c,l);return r}},zo=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Nn{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=fo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};Tl.prototype.ValueTypeName="vector";var Za={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ef(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ef(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ef(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Al=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tp=new Al,Go=class{constructor(t){this.manager=t!==void 0?t:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=new WeakMap,Gi=class extends Go{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Za.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=lr.get(o);u===void 0&&(u=[],lr.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=pr("img");function l(){h(),e&&e(this);let u=lr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}lr.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Za.remove(`image:${t}`);let d=lr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}lr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Za.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Tr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ds=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ch=new he,Cf=new R,Rf=new R,Vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cf),Rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ch,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xa=new R,qa=new Me,pi=new R,Ho=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Xa,qa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Xa,qa,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new R,If=new st,Pf=new st,xn=class extends Ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,If,Pf),e.subVectors(Pf,If)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Oh=class extends Vo{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},Ls=class extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},oi=class extends Ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bh=class extends Vo{constructor(){super(new oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Bh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cr=-90,hr=1,El=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(cr,hr,t,e);s.layers=this.layers,this.add(s);let r=new xn(cr,hr,t,e);r.layers=this.layers,this.add(r);let o=new xn(cr,hr,t,e);o.layers=this.layers,this.add(o);let a=new xn(cr,hr,t,e);a.layers=this.layers,this.add(a);let l=new xn(cr,hr,t,e);l.layers=this.layers,this.add(l);let c=new xn(cr,hr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cl=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var du="\\[\\]\\.:\\/",Ng=new RegExp("["+du+"]","g"),fu="[^"+du+"]",Ug="[^"+du.replace("\\.","")+"]",Fg=/((?:WC+[\/:])*)/.source.replace("WC",fu),Og=/(WCOD+)?/.source.replace("WCOD",Ug),Bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),zg=new RegExp("^"+Fg+Og+Bg+kg+"$"),Gg=["material","materials","bones","map"],kh=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ng,"")}static parseTrackName(t){let e=zg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=kh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gb=new Float32Array(1);var Df=new he,Hi=class{constructor(t,e,n=0,s=1/0){this.ray=new Bi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(t,e=!0,n=[]){return zh(t,this,n,e),n.sort(Lf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zh(t[s],this,n,e);return n.sort(Lf),n}};function Lf(i,t){return i.distance-t.distance}function zh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)zh(r[o],t,e,!0)}}var Ar=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _u=class _u{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};_u.prototype.isMatrix2=!0;var Gh=_u;var Wo=class extends ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function pu(i,t,e,n){let s=Vg(n);switch(e){case su:return i*t;case Bl:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case ru:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Gl:return i*t*4/s.components*s.byteLength;case Yo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Xl:return Math.max(i,16)*Math.max(t,8)/4;case Vl:case Wl:return Math.max(i,8)*Math.max(t,8)/2;case ql:case Yl:case Zl:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jl:case Ko:case Kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dc:case fc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jo:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vg(i){switch(i){case En:case tu:return{byteLength:1,components:1};case Cr:case eu:case hi:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case ci:case Ul:case Xn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);function Yp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,g1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,my=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:Yg,alphahash_pars_fragment:jg,alphamap_fragment:Zg,alphamap_pars_fragment:$g,alphatest_fragment:Kg,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:t1,batching_pars_vertex:e1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:s1,bsdfs:r1,iridescence_fragment:o1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:u1,color_fragment:d1,color_pars_fragment:f1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:x1,defaultnormal_vertex:y1,displacementmap_pars_vertex:_1,displacementmap_vertex:v1,emissivemap_fragment:M1,emissivemap_pars_fragment:b1,colorspace_fragment:w1,colorspace_pars_fragment:S1,envmap_fragment:T1,envmap_common_pars_fragment:A1,envmap_pars_fragment:E1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:k1,envmap_vertex:R1,fog_vertex:I1,fog_pars_vertex:P1,fog_fragment:D1,fog_pars_fragment:L1,gradientmap_pars_fragment:N1,lightmap_pars_fragment:U1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:O1,lights_pars_begin:B1,lights_toon_fragment:z1,lights_toon_pars_fragment:G1,lights_phong_fragment:V1,lights_phong_pars_fragment:H1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:q1,lights_fragment_maps:Y1,lights_fragment_end:j1,lightprobes_pars_fragment:Z1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:Q1,map_fragment:tx,map_pars_fragment:ex,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:sx,metalnessmap_pars_fragment:rx,morphinstance_vertex:ox,morphcolor_vertex:ax,morphnormal_vertex:lx,morphtarget_pars_vertex:cx,morphtarget_vertex:hx,normal_fragment_begin:ux,normal_fragment_maps:dx,normal_pars_fragment:fx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:vx,opaque_fragment:Mx,packing:bx,premultiplied_alpha_fragment:wx,project_vertex:Sx,dithering_fragment:Tx,dithering_pars_fragment:Ax,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Px,shadowmask_pars_fragment:Dx,skinbase_vertex:Lx,skinning_pars_vertex:Nx,skinning_vertex:Ux,skinnormal_vertex:Fx,specularmap_fragment:Ox,specularmap_pars_fragment:Bx,tonemapping_fragment:kx,tonemapping_pars_fragment:zx,transmission_fragment:Gx,transmission_pars_fragment:Vx,uv_pars_fragment:Hx,uv_pars_vertex:Wx,uv_vertex:Xx,worldpos_vertex:qx,background_vert:Yx,background_frag:jx,backgroundCube_vert:Zx,backgroundCube_frag:$x,cube_vert:Kx,cube_frag:Jx,depth_vert:Qx,depth_frag:ty,distance_vert:ey,distance_frag:ny,equirect_vert:iy,equirect_frag:sy,linedashed_vert:ry,linedashed_frag:oy,meshbasic_vert:ay,meshbasic_frag:ly,meshlambert_vert:cy,meshlambert_frag:hy,meshmatcap_vert:uy,meshmatcap_frag:dy,meshnormal_vert:fy,meshnormal_frag:py,meshphong_vert:my,meshphong_frag:gy,meshphysical_vert:xy,meshphysical_frag:yy,meshtoon_vert:_y,meshtoon_frag:vy,points_vert:My,points_frag:by,shadow_vert:wy,shadow_frag:Sy,sprite_vert:Ty,sprite_frag:Ay},bt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Si={basic:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:un([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:un([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:un([bt.points,bt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:un([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:un([bt.common,bt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:un([bt.sprite,bt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:un([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:un([bt.lights,bt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Si.physical={uniforms:un([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var vc={r:0,b:0,g:0},Ey=new he,jp=new te;jp.set(-1,0,0,0,1,0,0,0,1);function Cy(i,t,e,n,s,r){let o=new Qt(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let _=y.backgroundBlurriness>0;v=t.get(v,_)}return v}function p(y){let v=!1,_=f(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,v){let _=f(v);_&&(_.isCubeTexture||_.mapping===Xo)?(c===void 0&&(c=new Rt(new cn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Os(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jp),c.material.toneMapped=ue.getTransfer(_.colorSpace)!==xe,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Rt(new Oe(2,2),new Ln({name:"BackgroundMaterial",uniforms:Os(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ue.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,v){y.getRGB(vc,uu(i)),e.buffers.color.setClear(vc.r,vc.g,vc.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Ry(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(U,z,F,C,N){let G=!1,O=u(U,C,F,z);r!==O&&(r=O,c(r.object)),G=f(U,C,F,N),G&&p(U,C,F,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(U,z,F,C),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,z,F,C){let N=C.wireframe===!0,G=n[z.id];G===void 0&&(G={},n[z.id]=G);let O=U.isInstancedMesh===!0?U.id:0,$=G[O];$===void 0&&($={},G[O]=$);let P=$[F.id];P===void 0&&(P={},$[F.id]=P);let B=P[N];return B===void 0&&(B=d(l()),P[N]=B),B}function d(U){let z=[],F=[],C=[];for(let N=0;N<e;N++)z[N]=0,F[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:C,object:U,attributes:{},index:null}}function f(U,z,F,C){let N=r.attributes,G=z.attributes,O=0,$=F.getAttributes();for(let P in $)if($[P].location>=0){let W=N[P],it=G[P];if(it===void 0&&(P==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),P==="instanceColor"&&U.instanceColor&&(it=U.instanceColor)),W===void 0||W.attribute!==it||it&&W.data!==it.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(U,z,F,C){let N={},G=z.attributes,O=0,$=F.getAttributes();for(let P in $)if($[P].location>=0){let W=G[P];W===void 0&&(P==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),P==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));let it={};it.attribute=W,W&&W.data&&(it.data=W.data),N[P]=it,O++}r.attributes=N,r.attributesNum=O,r.index=C}function x(){let U=r.newAttributes;for(let z=0,F=U.length;z<F;z++)U[z]=0}function m(U){g(U,0)}function g(U,z){let F=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;F[U]=1,C[U]===0&&(i.enableVertexAttribArray(U),C[U]=1),N[U]!==z&&(i.vertexAttribDivisor(U,z),N[U]=z)}function y(){let U=r.newAttributes,z=r.enabledAttributes;for(let F=0,C=z.length;F<C;F++)z[F]!==U[F]&&(i.disableVertexAttribArray(F),z[F]=0)}function v(U,z,F,C,N,G,O){O===!0?i.vertexAttribIPointer(U,z,F,N,G):i.vertexAttribPointer(U,z,F,C,N,G)}function _(U,z,F,C){x();let N=C.attributes,G=F.getAttributes(),O=z.defaultAttributeValues;for(let $ in G){let P=G[$];if(P.location>=0){let B=N[$];if(B===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),B!==void 0){let W=B.normalized,it=B.itemSize,ot=t.get(B);if(ot===void 0)continue;let Lt=ot.buffer,Ht=ot.type,ne=ot.bytesPerElement,J=Ht===i.INT||Ht===i.UNSIGNED_INT||B.gpuType===Ul;if(B.isInterleavedBufferAttribute){let tt=B.data,wt=tt.stride,$t=B.offset;if(tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<P.locationSize;Ct++)g(P.location+Ct,tt.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ct=0;Ct<P.locationSize;Ct++)m(P.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Ct=0;Ct<P.locationSize;Ct++)v(P.location+Ct,it/P.locationSize,Ht,W,wt*ne,($t+it/P.locationSize*Ct)*ne,J)}else{if(B.isInstancedBufferAttribute){for(let tt=0;tt<P.locationSize;tt++)g(P.location+tt,B.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let tt=0;tt<P.locationSize;tt++)m(P.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let tt=0;tt<P.locationSize;tt++)v(P.location+tt,it/P.locationSize,Ht,W,it*ne,it/P.locationSize*tt*ne,J)}}else if(O!==void 0){let W=O[$];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(P.location,W);break;case 3:i.vertexAttrib3fv(P.location,W);break;case 4:i.vertexAttrib4fv(P.location,W);break;default:i.vertexAttrib1fv(P.location,W)}}}}y()}function b(){T();for(let U in n){let z=n[U];for(let F in z){let C=z[F];for(let N in C){let G=C[N];for(let O in G)h(G[O].object),delete G[O];delete C[N]}}delete n[U]}}function S(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let F in z){let C=z[F];for(let N in C){let G=C[N];for(let O in G)h(G[O].object),delete G[O];delete C[N]}}delete n[U.id]}function I(U){for(let z in n){let F=n[z];for(let C in F){let N=F[C];if(N[U.id]===void 0)continue;let G=N[U.id];for(let O in G)h(G[O].object),delete G[O];delete N[U.id]}}}function M(U){for(let z in n){let F=n[z],C=U.isInstancedMesh===!0?U.id:0,N=F[C];if(N!==void 0){for(let G in N){let O=N[G];for(let $ in O)h(O[$].object),delete O[$];delete N[G]}delete F[C],Object.keys(F).length===0&&delete n[z]}}}function T(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Iy(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Py(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let M=I===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==En&&I!==Xn&&!M&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,maxSamples:b,samples:S}}function Dy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,_=g.clippingState||null;l.value=_,_=h(p,d,v,f);for(let b=0;b!==v;++b)_[b]=e[b];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Pr=4,Ly=6,Ny=20,Uy=256,ta=new oi,Ap=new Qt,vu=null,Mu=0,bu=0,wu=!1,Fy=new R,Bs=new R,xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Fy}=r;vu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,Mu,bu),this._renderer.xr.enabled=wu,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:hi,format:hn,colorSpace:Es,depthBuffer:!1},s=Ep(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Oy(r)),this._blurMaterial=ky(r,t,e),this._ggxMaterial=By(r,t,e)}return s}_compileMaterial(t){let e=new Rt(new Zt,t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,s,r){let l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ap),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new cn,new De({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,g=!0):(m.color.copy(Ap),g=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let b=this._cubeSize;Ir(s,_*b,v>2?b:0,b,b),u.setRenderTarget(s),g&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ps||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Pr?n-p+Pr:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ir(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,ta),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ir(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(a,ta)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Pr?s-this._lodMax+Pr:0),d=4*(this._cubeSize-h);Ir(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,ta)}};function Oy(i){let t=[],e=[],n=i,s=i-Pr+1+Ly;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,v=g>2?0:-1,_=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];p.set(_,f*d*g);for(let b=0;b<d;b++){let S=h[b*2]*2-1,I=h[b*2+1]*2-1;g===0?Bs.set(1,I,S):g===1?Bs.set(-S,1,-I):g===2?Bs.set(-S,I,1):g===3?Bs.set(-1,I,-S):g===4?Bs.set(-S,-1,I):Bs.set(S,I,-1),Bs.toArray(x,(g*d+b)*f)}}let m=new Zt;m.setAttribute("position",new Se(p,f)),m.setAttribute("outputDirection",new Se(x,f)),e.push(new Rt(m,null)),n>Pr&&n--}return{lodMeshes:e,sizeLods:t}}function Ep(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function By(i,t,e){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ky(i,t,e){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Cp(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Rp(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:bi});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===vn&&(e.minFilter=Ne),new El(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function zy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Dl||f===Ll)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new bc(p.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Dl||f===Ll,x=f===ps||f===Fs;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new xs(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new xs(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Dl?d.mapping=ps:f===Ll&&(d.mapping=Fs),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Gy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function Vy(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let b=y[v+0],S=y[v+1],I=y[v+2];d.push(b,S,S,I,I,b)}}else{let y=p.array;x=p.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let b=v+0,S=v+1,I=v+2;d.push(b,S,S,I,I,b)}}let m=new(p.count>=65535?_o:yo)(d,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hy(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xy(i,t,e){let n=new WeakMap,s=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*u),I=new go(S,_,b,u);I.type=Xn,I.needsUpdate=!0;let M=v*4;for(let L=0;L<u;L++){let U=m[L],z=g[L],F=y[L],C=_*b*4*L;for(let N=0;N<U.count;N++){let G=N*M;f===!0&&(s.fromBufferAttribute(U,N),S[C+G+0]=s.x,S[C+G+1]=s.y,S[C+G+2]=s.z,S[C+G+3]=0),p===!0&&(s.fromBufferAttribute(z,N),S[C+G+4]=s.x,S[C+G+5]=s.y,S[C+G+6]=s.z,S[C+G+7]=0),x===!0&&(s.fromBufferAttribute(F,N),S[C+G+8]=s.x,S[C+G+9]=s.y,S[C+G+10]=s.z,S[C+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new st(_,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qy(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Yy={[Yh]:"LINEAR_TONE_MAPPING",[jh]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Us]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function jy(i,t,e,n,s,r){let o=new wn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Zt;c.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let h=new ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Rt(c,h),d=new oi(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,y=[],v=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let S=0;S<y.length;S++){let I=y[S];I.setSize&&I.setSize(_,b)}},this.setEffects=function(_){y=_,v=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new wn(b,S,{type:hi,depthBuffer:!1,stencilBuffer:!1}),l=new wn(b,S,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<y.length;I++){let M=y[I];M.setSize&&M.setSize(b,S)}},this.begin=function(_,b){if(x||_.toneMapping===li&&y.length===0)return!1;if(g=b,b!==null){let S=b.width,I=b.height;(o.width!==S||o.height!==I)&&this.setSize(S,I)}return v===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=li,!0},this.hasRenderPass=function(){return v},this.end=function(_,b){_.toneMapping=m,x=!0;let S=o,I=a;for(let M=0;M<y.length;M++){let T=y[M];T.enabled!==!1&&(T.render(_,I,S,b),T.needsSwap!==!1&&(S=I,I=I===a?l:a))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},ue.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let M=Yy[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(g),_.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Zp=new Je,Au=new ls(1,1),$p=new go,Kp=new ol,Jp=new bo,Ip=[],Pp=[],Dp=new Float32Array(16),Lp=new Float32Array(9),Np=new Float32Array(4);function Nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ip[s];if(r===void 0&&(r=new Float32Array(s),Ip[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sc(i,t){let e=Pp[t];e===void 0&&(e=new Int32Array(t),Pp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function Ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function Jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function Qy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),je(e,n)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;Lp.set(n),i.uniformMatrix3fv(this.addr,!1,Lp),je(e,n)}}function e_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ye(e,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),je(e,n)}}function n_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function o_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=e.isReversedDepthBuffer()?_c:yc,r=Au):r=Zp,e.setTexture2D(t||r,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kp,s)}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jp,s)}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$p,s)}function p_(i){switch(i){case 5126:return Zy;case 35664:return $y;case 35665:return Ky;case 35666:return Jy;case 35674:return Qy;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(i,t){i.uniform1fv(this.addr,t)}function g_(i,t){let e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function x_(i,t){let e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function y_(i,t){let e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function __(i,t){let e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v_(i,t){let e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function M_(i,t){let e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b_(i,t){i.uniform1iv(this.addr,t)}function w_(i,t){i.uniform2iv(this.addr,t)}function S_(i,t){i.uniform3iv(this.addr,t)}function T_(i,t){i.uniform4iv(this.addr,t)}function A_(i,t){i.uniform1uiv(this.addr,t)}function E_(i,t){i.uniform2uiv(this.addr,t)}function C_(i,t){i.uniform3uiv(this.addr,t)}function R_(i,t){i.uniform4uiv(this.addr,t)}function I_(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Au:o=Zp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function P_(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kp,r[o])}function D_(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jp,r[o])}function L_(i,t,e){let n=this.cache,s=t.length,r=Sc(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$p,r[o])}function N_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return y_;case 35674:return __;case 35675:return v_;case 35676:return M_;case 5124:case 35670:return b_;case 35667:case 35671:return w_;case 35668:case 35672:return S_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return E_;case 36295:return C_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return L_}}var Eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p_(e.type)}},Cu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N_(e.type)}},Ru=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Su=/(\w+)(\])?(\[|\.)?/g;function Up(i,t){i.seq.push(t),i.map[t.id]=t}function U_(i,t,e){let n=i.name,s=n.length;for(Su.lastIndex=0;;){let r=Su.exec(n),o=Su.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Up(e,c===void 0?new Eu(a,i,t):new Cu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ru(a),Up(e,u)),e=u}}}var Dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);U_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var F_=37297,O_=0;function B_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Op=new te;function k_(i){ue._getMatrix(Op,ue.workingColorSpace,i);let t=`mat3( ${Op.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+B_(i.getShaderSource(t),a)}else return r}function z_(i,t){let e=k_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var G_={[Yh]:"Linear",[jh]:"Reinhard",[Zh]:"Cineon",[Us]:"ACESFilmic",[Kh]:"AgX",[Jh]:"Neutral",[$h]:"Custom"};function V_(i,t){let e=G_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mc=new R;function H_(){ue.getLuminanceCoefficients(Mc);let i=Mc.x.toFixed(4),t=Mc.y.toFixed(4),e=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function X_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function na(i){return i!==""}function kp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(i){return i.replace(Y_,Z_)}var j_=new Map;function Z_(i,t){let e=ae[t];if(e===void 0){let n=j_.get(t);if(n!==void 0)e=ae[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Iu(e)}var $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(i){return i.replace($_,K_)}function K_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var J_={[Wi]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Q_(i){return J_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tv={[ps]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE_UV"};function ev(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var nv={[Fs]:"ENVMAP_MODE_REFRACTION"};function iv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sv={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[ep]:"ENVMAP_BLENDING_MIX",[np]:"ENVMAP_BLENDING_ADD"};function rv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sv[i.combine]||"ENVMAP_BLENDING_NONE"}function ov(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function av(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Q_(e),c=ev(e),h=iv(e),u=rv(e),d=ov(e),f=W_(e),p=X_(r),x=s.createProgram(),m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(na).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(na).join(`
`),g.length>0&&(g+=`
`)):(m=[Vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),g=[Vp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ae.tonemapping_pars_fragment:"",e.toneMapping!==li?V_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(na).join(`
`)),o=Iu(o),o=kp(o,e),o=zp(o,e),a=Iu(a),a=kp(a,e),a=zp(a,e),o=Gp(o),a=Gp(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=y+m+o,_=y+g+a,b=Fp(s,s.VERTEX_SHADER,v),S=Fp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(S)||"",N=z.trim(),G=F.trim(),O=C.trim(),$=!0,P=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let B=Bp(s,b,"vertex"),W=Bp(s,S,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+B+`
`+W)}else N!==""?Xt("WebGLProgram: Program Info Log:",N):(G===""||O==="")&&(P=!1);P&&(U.diagnostics={runnable:$,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(b),s.deleteShader(S),M=new Dr(s,x),T=q_(s,x)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,F_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var lv=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Du(t),e.set(t,n)),n}},Du=class{constructor(t){this.id=lv++,this.code=t,this.usedTimes=0}};function cv(i){return i===gs||i===Ko||i===Jo}function hv(i,t,e,n,s,r){let o=new yr,a=new Pu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,T,L,U,z,F){let C=U.fog,N=z.geometry,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||G,O),P=$&&$.mapping===Xo?$.image.height:null,B=f[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&Xt("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=W!==void 0?W.length:0,ot=0;N.morphAttributes.position!==void 0&&(ot=1),N.morphAttributes.normal!==void 0&&(ot=2),N.morphAttributes.color!==void 0&&(ot=3);let Lt,Ht,ne,J;if(B){let Ee=Si[B];Lt=Ee.vertexShader,Ht=Ee.fragmentShader}else{Lt=M.vertexShader,Ht=M.fragmentShader;let Ee=a.getVertexShaderStage(M),me=a.getFragmentShaderStage(M);a.update(M,Ee,me),ne=Ee.id,J=me.id}let tt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),$t=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,Kt=!!M.map,ye=!!M.matcap,rt=!!$,ht=!!M.aoMap,ut=!!M.lightMap,dt=!!M.bumpMap&&M.wireframe===!1,gt=!!M.normalMap,qt=!!M.displacementMap,Wt=!!M.emissiveMap,Jt=!!M.metalnessMap,ee=!!M.roughnessMap,k=M.anisotropy>0,pe=M.clearcoat>0,le=M.dispersion>0,D=M.retroreflectivity>0,w=M.iridescence>0,X=M.sheen>0,j=M.transmission>0,K=k&&!!M.anisotropyMap,ft=pe&&!!M.clearcoatMap,mt=pe&&!!M.clearcoatNormalMap,Q=pe&&!!M.clearcoatRoughnessMap,nt=w&&!!M.iridescenceMap,xt=w&&!!M.iridescenceThicknessMap,kt=X&&!!M.sheenColorMap,Mt=X&&!!M.sheenRoughnessMap,yt=!!M.specularMap,zt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,se=j&&!!M.transmissionMap,H=j&&!!M.thicknessMap,_t=!!M.gradientMap,et=!!M.alphaMap,vt=M.alphaTest>0,Et=!!M.alphaHash,ct=!!M.extensions,Gt=li;M.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let Ot={shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:Lt,fragmentShader:Ht,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:$t,instancingColor:$t&&z.instanceColor!==null,instancingMorph:$t&&z.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Kt,matcap:ye,envMap:rt,envMapMode:rt&&$.mapping,envMapCubeUVHeight:P,aoMap:ht,lightMap:ut,bumpMap:dt,normalMap:gt,displacementMap:qt,emissiveMap:Wt,normalMapObjectSpace:gt&&M.normalMapType===rp,normalMapTangentSpace:gt&&M.normalMapType===Qo,packedNormalMap:gt&&M.normalMapType===Qo&&cv(M.normalMap.format),metalnessMap:Jt,roughnessMap:ee,anisotropy:k,anisotropyMap:K,clearcoat:pe,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:Q,dispersion:le,retroreflection:D,iridescence:w,iridescenceMap:nt,iridescenceThicknessMap:xt,sheen:X,sheenColorMap:kt,sheenRoughnessMap:Mt,specularMap:yt,specularColorMap:zt,specularIntensityMap:Yt,transmission:j,transmissionMap:se,thicknessMap:H,gradientMap:_t,opaque:M.transparent===!1&&M.blending===ai&&M.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:Et,combine:M.combine,mapUv:Kt&&p(M.map.channel),aoMapUv:ht&&p(M.aoMap.channel),lightMapUv:ut&&p(M.lightMap.channel),bumpMapUv:dt&&p(M.bumpMap.channel),normalMapUv:gt&&p(M.normalMap.channel),displacementMapUv:qt&&p(M.displacementMap.channel),emissiveMapUv:Wt&&p(M.emissiveMap.channel),metalnessMapUv:Jt&&p(M.metalnessMap.channel),roughnessMapUv:ee&&p(M.roughnessMap.channel),anisotropyMapUv:K&&p(M.anisotropyMap.channel),clearcoatMapUv:ft&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(M.sheenRoughnessMap.channel),specularMapUv:yt&&p(M.specularMap.channel),specularColorMapUv:zt&&p(M.specularColorMap.channel),specularIntensityMapUv:Yt&&p(M.specularIntensityMap.channel),transmissionMapUv:se&&p(M.transmissionMap.channel),thicknessMapUv:H&&p(M.thicknessMap.channel),alphaMapUv:et&&p(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(gt||k),vertexNormals:!!N.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Kt||et),fog:!!C,useFog:M.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||N.attributes.normal===void 0&&gt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Kt&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===xe,decodeVideoTextureEmissive:Wt&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Re,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ct&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&M.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)T.push(L),T.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(g(T,M),y(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let T=f[M.type],L;if(T){let U=Si[T];L=wp.clone(U.uniforms)}else L=M.uniforms;return L}function _(M,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new av(i,T,M,s),c.push(L),h.set(T,L)),L}function b(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:_,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:I}}function uv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),t++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let v=a(d,f,p,x,m,g);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):e.push(v)}function c(d,f,p,x,m,g){let y=a(d,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||dv),n.length>1&&n.sort(f||Hp),s.length>1&&s.sort(f||Hp)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function fv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Wp,i.set(n,[o])):s>=r.length?(o=new Wp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Qt};break;case"SpotLight":e={position:new R,direction:new R,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function mv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gv=0;function xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yv(i){let t=new pv,e=mv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new he,o=new he;function a(c){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,v=0,_=0,b=0,S=0,I=0,M=0,T=0,L=0;c.sort(xv);for(let z=0,F=c.length;z<F;z++){let C=c[z],N=C.color,G=C.intensity,O=C.distance,$=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gs?$=C.shadow.map.texture:$=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=N.r*G,u+=N.g*G,d+=N.b*G;else if(C.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(C.sh.coefficients[P],G);L++}else if(C.isSunLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,W=e.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=W,n.sunShadowMap[p]=$;let it=B.getViewportCount();for(let ot=0;ot<it;ot++)n.sunShadowMatrix[x+ot]=B.getMatrix(ot),n.sunShadowCascade[x+ot]=B._cascadeData[ot];x+=it,p++}n.sun[f]=P,f++}else if(C.isDirectionalLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,W=e.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=P,m++}else if(C.isSpotLight){let P=t.get(C);P.position.setFromMatrixPosition(C.matrixWorld),P.color.copy(N).multiplyScalar(G),P.distance=O,P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,n.spot[y]=P;let B=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,B.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[y]=B.matrix,C.castShadow){let W=e.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=$,I++}y++}else if(C.isRectAreaLight){let P=t.get(C);P.color.copy(N).multiplyScalar(G),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=P,v++}else if(C.isPointLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){let B=C.shadow,W=e.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=P,g++}else if(C.isHemisphereLight){let P=t.get(C);P.skyColor.copy(C.color).multiplyScalar(G),P.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[_]=P,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==v||U.hemiLength!==_||U.numSunShadows!==p||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==I||U.numSpotMaps!==M||U.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=v,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,U.sunLength=f,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=v,U.hemiLength=_,U.numSunShadows=p,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=I,U.numSpotMaps=M,U.numLightProbes=L,n.version=gv++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let _=c[y];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),u++}else if(_.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Xp(i){let t=new yv(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _v(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xp(i),t.set(s,[a])):r>=o.length?(a=new Xp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],wv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],qp=new he,ea=new R,Tu=new R;function Sv(i,t,e){let n=new br,s=new st,r=new st,o=new Ue,a=new gl,l=new xl,c={},h=e.maxTextureSize,u={[fs]:en,[en]:fs,[Re]:Re},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:vv,fragmentShader:Mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Zt;p.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Rt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let g=this.type;this.render=function(S,I,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ff&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let T=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=g!==this.type;F&&I.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(N=>N.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,N=S.length;C<N;C++){let G=S[C],O=G.shadow;if(O===void 0){Xt("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let $=O.getFrameExtents();s.multiply($),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,O.mapSize.y=r.y));let P=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=P,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Er){if(G.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new wn(s.x,s.y,{format:gs,type:hi,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new ls(s.x,s.y,Xn),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=yi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ke,O.map.depthTexture.magFilter=Ke}else G.isPointLight?(O.map=new bc(s.x),O.map.depthTexture=new cl(s.x,ci)):(O.map=new wn(s.x,s.y),O.map.depthTexture=new ls(s.x,s.y,ci)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=yi,this.type===Wi?(O.map.depthTexture.compareFunction=P?_c:yc,O.map.depthTexture.minFilter=Ne,O.map.depthTexture.magFilter=Ne):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ke,O.map.depthTexture.magFilter=Ke);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let B=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,M);for(let W=0;W<B;W++){let it=O.getCamera(W);if(G.isPointLight){let ot=O.camera,Lt=O.matrix,Ht=G.distance||ot.far;Ht!==ot.far&&(ot.far=Ht,ot.updateProjectionMatrix()),ea.setFromMatrixPosition(G.matrixWorld),ot.position.copy(ea),Tu.copy(ot.position),Tu.add(bv[W]),ot.up.copy(wv[W]),ot.lookAt(Tu),ot.updateMatrixWorld(),Lt.makeTranslation(-ea.x,-ea.y,-ea.z),qp.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qp,ot.coordinateSystem,ot.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,W),i.clear();else{W===0&&(i.setRenderTarget(O.map),i.clear());let ot=O.getViewport(W);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),z.viewport(o)}n=O.getFrustum(W),_(I,M,it,G,this.type)}O.isPointLightShadow!==!0&&this.type===Er&&y(O,M),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,L,U)};function y(S,I){let M=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new wn(s.x,s.y,{format:gs,type:hi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(I,null,M,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(I,null,M,f,x,null)}function v(S,I,M,T){let L=null,U=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)L=U;else if(L=M.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=L.uuid,F=I.uuid,C=c[z];C===void 0&&(C={},c[z]=C);let N=C[F];N===void 0&&(N=L.clone(),C[F]=N,I.addEventListener("dispose",b)),L=N}if(L.visible=I.visible,L.wireframe=I.wireframe,T===Er?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:u[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=i.properties.get(L);z.light=M}return L}function _(S,I,M,T,L){if(S.visible===!1)return;if(S.layers.test(I.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===Er)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let F=t.update(S),C=S.material;if(Array.isArray(C)){let N=F.groups;for(let G=0,O=N.length;G<O;G++){let $=N[G],P=C[$.materialIndex];if(P&&P.visible){let B=v(S,P,T,L);S.onBeforeShadow(i,S,I,M,F,B,$),i.renderBufferDirect(M,null,F,B,S,$),S.onAfterShadow(i,S,I,M,F,B,$)}}}else if(C.visible){let N=v(S,C,T,L);S.onBeforeShadow(i,S,I,M,F,N,null),i.renderBufferDirect(M,null,F,N,S,null),S.onAfterShadow(i,S,I,M,F,N,null)}}let z=S.children;for(let F=0,C=z.length;F<C;F++)_(z[F],I,M,T,L)}function b(S){S.target.removeEventListener("dispose",b);for(let M in c){let T=c[M],L=S.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function Tv(i,t){function e(){let H=!1,_t=new Ue,et=null,vt=new Ue(0,0,0,0);return{setMask:function(Et){et!==Et&&!H&&(i.colorMask(Et,Et,Et,Et),et=Et)},setLocked:function(Et){H=Et},setClear:function(Et,ct,Gt,Ot,Ee){Ee===!0&&(Et*=Ot,ct*=Ot,Gt*=Ot),_t.set(Et,ct,Gt,Ot),vt.equals(_t)===!1&&(i.clearColor(Et,ct,Gt,Ot),vt.copy(_t))},reset:function(){H=!1,et=null,vt.set(-1,0,0,0)}}}function n(){let H=!1,_t=!1,et=null,vt=null,Et=null;return{setReversed:function(ct){if(_t!==ct){let Gt=t.get("EXT_clip_control");ct?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;let Ot=Et;Et=null,this.setClear(Ot)}},getReversed:function(){return _t},setTest:function(ct){ct?tt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ct){et!==ct&&!H&&(i.depthMask(ct),et=ct)},setFunc:function(ct){if(_t&&(ct=gp[ct]),vt!==ct){switch(ct){case $a:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case tl:i.depthFunc(i.GEQUAL);break;case os:i.depthFunc(i.GREATER);break;case el:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=ct}},setLocked:function(ct){H=ct},setClear:function(ct){Et!==ct&&(Et=ct,_t&&(ct=1-ct),i.clearDepth(ct))},reset:function(){H=!1,et=null,vt=null,Et=null,_t=!1}}}function s(){let H=!1,_t=null,et=null,vt=null,Et=null,ct=null,Gt=null,Ot=null,Ee=null;return{setTest:function(me){H||(me?tt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(me){_t!==me&&!H&&(i.stencilMask(me),_t=me)},setFunc:function(me,Kn,di){(et!==me||vt!==Kn||Et!==di)&&(i.stencilFunc(me,Kn,di),et=me,vt=Kn,Et=di)},setOp:function(me,Kn,di){(ct!==me||Gt!==Kn||Ot!==di)&&(i.stencilOp(me,Kn,di),ct=me,Gt=Kn,Ot=di)},setLocked:function(me){H=me},setClear:function(me){Ee!==me&&(i.clearStencil(me),Ee=me)},reset:function(){H=!1,_t=null,et=null,vt=null,Et=null,ct=null,Gt=null,Ot=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,_=null,b=null,S=null,I=null,M=new Qt(0,0,0),T=0,L=!1,U=null,z=null,F=null,C=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(P)[1]),O=$>=1):P.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),O=$>=2);let B=null,W={},it=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Lt=new Ue().fromArray(it),Ht=new Ue().fromArray(ot);function ne(H,_t,et,vt){let Et=new Uint8Array(4),ct=i.createTexture();i.bindTexture(H,ct),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<et;Gt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(_t+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ct}let J={};J[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(dr),dt(!1),gt(Vh),tt(i.CULL_FACE),ht(bi);function tt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function wt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function $t(H,_t){return d[H]!==_t?(i.bindFramebuffer(H,_t),d[H]=_t,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_t),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Ct(H,_t){let et=p,vt=!1;if(H){et=f.get(_t),et===void 0&&(et=[],f.set(_t,et));let Et=H.textures;if(et.length!==Et.length||et[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Gt=Et.length;ct<Gt;ct++)et[ct]=i.COLOR_ATTACHMENT0+ct;et.length=Et.length,vt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,vt=!0);vt&&i.drawBuffers(et)}function Kt(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let ye={[Ns]:i.FUNC_ADD,[Bf]:i.FUNC_SUBTRACT,[kf]:i.FUNC_REVERSE_SUBTRACT};ye[zf]=i.MIN,ye[Gf]=i.MAX;let rt={[Vf]:i.ZERO,[Hf]:i.ONE,[Wf]:i.SRC_COLOR,[Xh]:i.SRC_ALPHA,[$f]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[qh]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[Kf]:i.CONSTANT_COLOR,[Jf]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[tp]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(H,_t,et,vt,Et,ct,Gt,Ot,Ee,me){if(H===bi){m===!0&&(wt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),H!==Of){if(H!==g||me!==L){if((y!==Ns||b!==Ns)&&(i.blendEquation(i.FUNC_ADD),y=Ns,b=Ns),me)switch(H){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",H);break}else switch(H){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hh:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",H);break}v=null,_=null,S=null,I=null,M.set(0,0,0),T=0,g=H,L=me}return}Et=Et||_t,ct=ct||et,Gt=Gt||vt,(_t!==y||Et!==b)&&(i.blendEquationSeparate(ye[_t],ye[Et]),y=_t,b=Et),(et!==v||vt!==_||ct!==S||Gt!==I)&&(i.blendFuncSeparate(rt[et],rt[vt],rt[ct],rt[Gt]),v=et,_=vt,S=ct,I=Gt),(Ot.equals(M)===!1||Ee!==T)&&(i.blendColor(Ot.r,Ot.g,Ot.b,Ee),M.copy(Ot),T=Ee),g=H,L=!1}function ut(H,_t){H.side===Re?wt(i.CULL_FACE):tt(i.CULL_FACE);let et=H.side===en;_t&&(et=!et),dt(et),H.blending===ai&&H.transparent===!1?ht(bi):ht(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let vt=H.stencilWrite;a.setTest(vt),vt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Wt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){U!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),U=H)}function gt(H){H!==Nf?(tt(i.CULL_FACE),H!==z&&(H===Vh?i.cullFace(i.BACK):H===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),z=H}function qt(H){H!==F&&(O&&i.lineWidth(H),F=H)}function Wt(H,_t,et){H?(tt(i.POLYGON_OFFSET_FILL),(C!==_t||N!==et)&&(C=_t,N=et,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,et))):wt(i.POLYGON_OFFSET_FILL)}function Jt(H){H?tt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function ee(H){H===void 0&&(H=i.TEXTURE0+G-1),B!==H&&(i.activeTexture(H),B=H)}function k(H,_t,et){et===void 0&&(B===null?et=i.TEXTURE0+G-1:et=B);let vt=W[et];vt===void 0&&(vt={type:void 0,texture:void 0},W[et]=vt),(vt.type!==H||vt.texture!==_t)&&(B!==et&&(i.activeTexture(et),B=et),i.bindTexture(H,_t||J[H]),vt.type=H,vt.texture=_t)}function pe(){let H=W[B];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(H){jt("WebGLState:",H)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(H){jt("WebGLState:",H)}}function w(){try{i.texSubImage2D(...arguments)}catch(H){jt("WebGLState:",H)}}function X(){try{i.texSubImage3D(...arguments)}catch(H){jt("WebGLState:",H)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(H){jt("WebGLState:",H)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(H){jt("WebGLState:",H)}}function ft(){try{i.texStorage2D(...arguments)}catch(H){jt("WebGLState:",H)}}function mt(){try{i.texStorage3D(...arguments)}catch(H){jt("WebGLState:",H)}}function Q(){try{i.texImage2D(...arguments)}catch(H){jt("WebGLState:",H)}}function nt(){try{i.texImage3D(...arguments)}catch(H){jt("WebGLState:",H)}}function xt(H){return u[H]!==void 0?u[H]:i.getParameter(H)}function kt(H,_t){u[H]!==_t&&(i.pixelStorei(H,_t),u[H]=_t)}function Mt(H){Lt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Lt.copy(H))}function yt(H){Ht.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ht.copy(H))}function zt(H,_t){let et=c.get(_t);et===void 0&&(et=new WeakMap,c.set(_t,et));let vt=et.get(H);vt===void 0&&(vt=i.getUniformBlockIndex(_t,H.name),et.set(H,vt))}function Yt(H,_t){let vt=c.get(_t).get(H);l.get(_t)!==vt&&(i.uniformBlockBinding(_t,vt,H.__bindingPointIndex),l.set(_t,vt))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,W={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,_=null,b=null,S=null,I=null,M=new Qt(0,0,0),T=0,L=!1,U=null,z=null,F=null,C=null,N=null,Lt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:wt,bindFramebuffer:$t,drawBuffers:Ct,useProgram:Kt,setBlending:ht,setMaterial:ut,setFlipSided:dt,setCullFace:gt,setLineWidth:qt,setPolygonOffset:Wt,setScissorTest:Jt,activeTexture:ee,bindTexture:k,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:D,texImage2D:Q,texImage3D:nt,pixelStorei:kt,getParameter:xt,updateUBOMapping:zt,uniformBlockBinding:Yt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:w,texSubImage3D:X,compressedTexSubImage2D:j,compressedTexSubImage3D:K,scissor:Mt,viewport:yt,reset:se}}function Av(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,w){return p?new OffscreenCanvas(D,w):pr("canvas")}function m(D,w,X){let j=1,K=le(D);if((K.width>X||K.height>X)&&(j=X/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ft=Math.floor(j*K.width),mt=Math.floor(j*K.height);d===void 0&&(d=x(ft,mt));let Q=w?x(ft,mt):d;return Q.width=ft,Q.height=mt,Q.getContext("2d").drawImage(D,0,0,ft,mt),Xt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ft+"x"+mt+")."),Q}else return"data"in D&&Xt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function g(D){return D.generateMipmaps}function y(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,w,X,j,K,ft=!1){if(D!==null){if(i[D]!==void 0)return i[D];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let mt;j&&(mt=t.get("EXT_texture_norm16"),mt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=w;if(w===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8),X===i.UNSIGNED_SHORT&&mt&&(Q=mt.R16_EXT),X===i.SHORT&&mt&&(Q=mt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),w===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8),X===i.UNSIGNED_SHORT&&mt&&(Q=mt.RG16_EXT),X===i.SHORT&&mt&&(Q=mt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_SHORT&&mt&&(Q=mt.RGB16_EXT),X===i.SHORT&&mt&&(Q=mt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),w===i.RGBA){let nt=ft?po:ue.getTransfer(K);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=nt===xe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&mt&&(Q=mt.RGBA16_EXT),X===i.SHORT&&mt&&(Q=mt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(D,w){let X;return D?w===null||w===ci||w===Rr?X=i.DEPTH24_STENCIL8:w===Xn?X=i.DEPTH32F_STENCIL8:w===Cr&&(X=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ci||w===Rr?X=i.DEPTH_COMPONENT24:w===Xn?X=i.DEPTH_COMPONENT32F:w===Cr&&(X=i.DEPTH_COMPONENT16),X}function S(D,w){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ke&&D.minFilter!==Ne?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function I(D){let w=D.target;w.removeEventListener("dispose",I),T(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function M(D){let w=D.target;w.removeEventListener("dispose",M),U(w)}function T(D){let w=n.get(D);if(w.__webglInit===void 0)return;let X=D.source,j=f.get(X);if(j){let K=j[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(D),Object.keys(j).length===0&&f.delete(X)}n.remove(D)}function L(D){let w=n.get(D);i.deleteTexture(w.__webglTexture);let X=D.source,j=f.get(X);delete j[w.__cacheKey],o.memory.textures--}function U(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let K=0;K<w.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(w.__webglFramebuffer[j][K]);else i.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)i.deleteFramebuffer(w.__webglFramebuffer[j]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=D.textures;for(let j=0,K=X.length;j<K;j++){let ft=n.get(X[j]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(X[j])}n.remove(D)}let z=0;function F(){z=0}function C(){return z}function N(D){z=D}function G(){let D=z;return D>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,D}function O(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function $(D,w){let X=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let j=D.image;if(j===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(X,D,w);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function P(D,w){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){wt(X,D,w);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function B(D,w){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){wt(X,D,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function W(D,w){let X=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){$t(X,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let it={[Pn]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[nl]:i.MIRRORED_REPEAT},ot={[Ke]:i.NEAREST,[ip]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[vn]:i.LINEAR_MIPMAP_LINEAR},Lt={[ap]:i.NEVER,[dp]:i.ALWAYS,[lp]:i.LESS,[yc]:i.LEQUAL,[cp]:i.EQUAL,[_c]:i.GEQUAL,[hp]:i.GREATER,[up]:i.NOTEQUAL};function Ht(D,w){if(w.type===Xn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ne||w.magFilter===Nl||w.magFilter===qo||w.magFilter===vn||w.minFilter===Ne||w.minFilter===Nl||w.minFilter===qo||w.minFilter===vn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,it[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,it[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,it[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ot[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ot[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ke||w.minFilter!==qo&&w.minFilter!==vn||w.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ne(D,w){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",I));let j=w.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let ft=O(w);if(ft!==D.__cacheKey){K[ft]===void 0&&(K[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),K[ft].usedTimes++;let mt=K[D.__cacheKey];mt!==void 0&&(K[D.__cacheKey].usedTimes--,mt.usedTimes===0&&L(w)),D.__cacheKey=ft,D.__webglTexture=K[ft].texture}return X}function J(D,w,X){return Math.floor(Math.floor(D/X)/w)}function tt(D,w,X,j){let ft=D.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,j,w.data);else{ft.sort((kt,Mt)=>kt.start-Mt.start);let mt=0;for(let kt=1;kt<ft.length;kt++){let Mt=ft[mt],yt=ft[kt],zt=Mt.start+Mt.count,Yt=J(yt.start,w.width,4),se=J(Mt.start,w.width,4);yt.start<=zt+1&&Yt===se&&J(yt.start+yt.count-1,w.width,4)===Yt?Mt.count=Math.max(Mt.count,yt.start+yt.count-Mt.start):(++mt,ft[mt]=yt)}ft.length=mt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let kt=0,Mt=ft.length;kt<Mt;kt++){let yt=ft[kt],zt=Math.floor(yt.start/4),Yt=Math.ceil(yt.count/4),se=zt%w.width,H=Math.floor(zt/w.width),_t=Yt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,se,H,_t,et,X,j,w.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function wt(D,w,X){let j=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=i.TEXTURE_3D);let K=ne(D,w),ft=w.source;e.bindTexture(j,D.__webglTexture,i.TEXTURE0+X);let mt=n.get(ft);if(ft.version!==mt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let et=ue.getPrimaries(ue.workingColorSpace),vt=w.colorSpace===qn?null:ue.getPrimaries(w.colorSpace),Et=w.colorSpace===qn||et===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let nt=m(w.image,!1,s.maxTextureSize);nt=pe(w,nt);let xt=r.convert(w.format,w.colorSpace),kt=r.convert(w.type),Mt=_(w.internalFormat,xt,kt,w.normalized,w.colorSpace,w.isVideoTexture);Ht(j,w);let yt,zt=w.mipmaps,Yt=w.isVideoTexture!==!0,se=mt.__version===void 0||K===!0,H=ft.dataReady,_t=S(w,nt);if(w.isDepthTexture)Mt=b(w.format===ms,w.type),se&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Mt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,nt.width,nt.height,0,xt,kt,null));else if(w.isDataTexture)if(zt.length>0){Yt&&se&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,zt[0].width,zt[0].height);for(let et=0,vt=zt.length;et<vt;et++)yt=zt[et],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,xt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,et,Mt,yt.width,yt.height,0,xt,kt,yt.data);w.generateMipmaps=!1}else Yt?(se&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,nt.width,nt.height),H&&tt(w,nt,xt,kt)):e.texImage2D(i.TEXTURE_2D,0,Mt,nt.width,nt.height,0,xt,kt,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Yt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,zt[0].width,zt[0].height,nt.depth);for(let et=0,vt=zt.length;et<vt;et++)if(yt=zt[et],w.format!==hn)if(xt!==null)if(Yt){if(H)if(w.layerUpdates.size>0){let Et=pu(yt.width,yt.height,w.format,w.type);for(let ct of w.layerUpdates){let Gt=yt.data.subarray(ct*Et/yt.data.BYTES_PER_ELEMENT,(ct+1)*Et/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,ct,yt.width,yt.height,1,xt,Gt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,nt.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Mt,yt.width,yt.height,nt.depth,0,yt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,nt.depth,xt,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Mt,yt.width,yt.height,nt.depth,0,xt,kt,yt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Yt&&se&&e.texStorage2D(i.TEXTURE_2D,_t,Mt,zt[0].width,zt[0].height);for(let et=0,vt=zt.length;et<vt;et++)yt=zt[et],w.format!==hn?xt!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Mt,yt.width,yt.height,0,yt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,yt.width,yt.height,xt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,et,Mt,yt.width,yt.height,0,xt,kt,yt.data)}else if(w.isDataArrayTexture)if(Yt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,Mt,nt.width,nt.height,nt.depth),H)if(w.layerUpdates.size>0){let et=pu(nt.width,nt.height,w.format,w.type);for(let vt of w.layerUpdates){let Et=nt.data.subarray(vt*et/nt.data.BYTES_PER_ELEMENT,(vt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,nt.width,nt.height,1,xt,kt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,kt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,nt.width,nt.height,nt.depth,0,xt,kt,nt.data);else if(w.isData3DTexture)Yt?(se&&e.texStorage3D(i.TEXTURE_3D,_t,Mt,nt.width,nt.height,nt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,kt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,nt.width,nt.height,nt.depth,0,xt,kt,nt.data);else if(w.isFramebufferTexture){if(se)if(Yt)e.texStorage2D(i.TEXTURE_2D,_t,Mt,nt.width,nt.height);else{let et=nt.width,vt=nt.height;for(let Et=0;Et<_t;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,et,vt,0,xt,kt,null),et>>=1,vt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),u.add(w),et.onpaint=vt=>{let Et=vt.changedElements;for(let ct of u)Et.includes(ct.image)&&(ct.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let Et=i.RGBA,ct=i.RGBA,Gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,ct,Gt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Yt&&se){let et=le(zt[0]);e.texStorage2D(i.TEXTURE_2D,_t,Mt,et.width,et.height)}for(let et=0,vt=zt.length;et<vt;et++)yt=zt[et],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,xt,kt,yt):e.texImage2D(i.TEXTURE_2D,et,Mt,xt,kt,yt);w.generateMipmaps=!1}else if(Yt){if(se){let et=le(nt);e.texStorage2D(i.TEXTURE_2D,_t,Mt,et.width,et.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,kt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,xt,kt,nt);g(w)&&y(j),mt.__version=ft.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function $t(D,w,X){if(w.image.length!==6)return;let j=ne(D,w),K=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);let ft=n.get(K);if(K.version!==ft.__version||j===!0){e.activeTexture(i.TEXTURE0+X);let mt=ue.getPrimaries(ue.workingColorSpace),Q=w.colorSpace===qn?null:ue.getPrimaries(w.colorSpace),nt=w.colorSpace===qn||mt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let xt=w.isCompressedTexture||w.image[0].isCompressedTexture,kt=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let ct=0;ct<6;ct++)!xt&&!kt?Mt[ct]=m(w.image[ct],!0,s.maxCubemapSize):Mt[ct]=kt?w.image[ct].image:w.image[ct],Mt[ct]=pe(w,Mt[ct]);let yt=Mt[0],zt=r.convert(w.format,w.colorSpace),Yt=r.convert(w.type),se=_(w.internalFormat,zt,Yt,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,_t=ft.__version===void 0||j===!0,et=K.dataReady,vt=S(w,yt);Ht(i.TEXTURE_CUBE_MAP,w);let Et;if(xt){H&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,yt.width,yt.height);for(let ct=0;ct<6;ct++){Et=Mt[ct].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){let Ot=Et[Gt];w.format!==hn?zt!==null?H?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,0,0,Ot.width,Ot.height,zt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,se,Ot.width,Ot.height,0,Ot.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,0,0,Ot.width,Ot.height,zt,Yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt,se,Ot.width,Ot.height,0,zt,Yt,Ot.data)}}}else{if(Et=w.mipmaps,H&&_t){Et.length>0&&vt++;let ct=le(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(kt){H?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Mt[ct].width,Mt[ct].height,zt,Yt,Mt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,Mt[ct].width,Mt[ct].height,0,zt,Yt,Mt[ct].data);for(let Gt=0;Gt<Et.length;Gt++){let Ee=Et[Gt].image[ct].image;H?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,0,0,Ee.width,Ee.height,zt,Yt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,se,Ee.width,Ee.height,0,zt,Yt,Ee.data)}}else{H?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Yt,Mt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,zt,Yt,Mt[ct]);for(let Gt=0;Gt<Et.length;Gt++){let Ot=Et[Gt];H?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,0,0,zt,Yt,Ot.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Gt+1,se,zt,Yt,Ot.image[ct])}}}g(w)&&y(i.TEXTURE_CUBE_MAP),ft.__version=K.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ct(D,w,X,j,K,ft){let mt=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),nt=_(X.internalFormat,mt,Q,X.normalized,X.colorSpace),xt=n.get(w),kt=n.get(X);if(kt.__renderTarget=w,!xt.__hasExternalTextures){let Mt=Math.max(1,w.width>>ft),yt=Math.max(1,w.height>>ft);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ft,nt,Mt,yt,w.depth,0,mt,Q,null):e.texImage2D(K,ft,nt,Mt,yt,0,mt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),ee(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,kt.__webglTexture,0,Jt(w)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,kt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(D,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){let j=w.depthTexture,K=j&&j.isDepthTexture?j.type:null,ft=b(w.stencilBuffer,K),mt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ee(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(w),ft,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(w),ft,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ft,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,D)}else{let j=w.textures;for(let K=0;K<j.length;K++){let ft=j[K],mt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),nt=_(ft.internalFormat,mt,Q,ft.normalized,ft.colorSpace);ee(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(w),nt,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(w),nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(D,w,X){let j=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(w.depthTexture);if(K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j){if(K.__webglInit===void 0&&(K.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,w.depthTexture);let xt=r.convert(w.depthTexture.format),kt=r.convert(w.depthTexture.type),Mt;w.depthTexture.format===yi?Mt=i.DEPTH_COMPONENT24:w.depthTexture.format===ms&&(Mt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Mt,w.width,w.height,0,xt,kt,null)}}else $(w.depthTexture,0);let ft=K.__webglTexture,mt=Jt(w),Q=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,nt=w.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===yi)ee(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,ft,0);else if(w.depthTexture.format===ms)ee(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(D){let w=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let j=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let K=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),w.__depthDisposeCallback=K}w.__boundDepthTexture=j}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let j=0;j<6;j++)ye(w.__webglFramebuffer[j],D,j);else{let j=D.texture.mipmaps;j&&j.length>0?ye(w.__webglFramebuffer[0],D,0):ye(w.__webglFramebuffer,D,0)}else if(X){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=i.createRenderbuffer(),Kt(w.__webglDepthbuffer[j],D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=w.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ft)}}else{let j=D.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Kt(w.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(D,w,X){let j=n.get(D);w!==void 0&&Ct(j.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&rt(D)}function ut(D){let w=D.texture,X=n.get(D),j=n.get(w);D.addEventListener("dispose",M);let K=D.textures,ft=D.isWebGLCubeRenderTarget===!0,mt=K.length>1;if(mt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=w.version,o.memory.textures++),ft){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let nt=0;nt<w.mipmaps.length;nt++)X.__webglFramebuffer[Q][nt]=i.createFramebuffer()}else X.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)X.__webglFramebuffer[Q]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Q=0,nt=K.length;Q<nt;Q++){let xt=n.get(K[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ee(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let nt=K[Q];X.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let xt=r.convert(nt.format,nt.colorSpace),kt=r.convert(nt.type),Mt=_(nt.internalFormat,xt,kt,nt.normalized,nt.colorSpace,D.isXRRenderTarget===!0),yt=Jt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,Mt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps&&w.mipmaps.length>0)for(let nt=0;nt<w.mipmaps.length;nt++)Ct(X.__webglFramebuffer[Q][nt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else Ct(X.__webglFramebuffer[Q],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(w)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Q=0,nt=K.length;Q<nt;Q++){let xt=K[Q],kt=n.get(xt),Mt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,kt.__webglTexture),Ht(Mt,xt),Ct(X.__webglFramebuffer,D,xt,i.COLOR_ATTACHMENT0+Q,Mt,0),g(xt)&&y(Mt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,j.__webglTexture),Ht(Q,w),w.mipmaps&&w.mipmaps.length>0)for(let nt=0;nt<w.mipmaps.length;nt++)Ct(X.__webglFramebuffer[nt],D,w,i.COLOR_ATTACHMENT0,Q,nt);else Ct(X.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,Q,0);g(w)&&y(Q),e.unbindTexture()}D.depthBuffer&&rt(D)}function dt(D){let w=D.textures;for(let X=0,j=w.length;X<j;X++){let K=w[X];if(g(K)){let ft=v(D),mt=n.get(K).__webglTexture;e.bindTexture(ft,mt),y(ft),e.unbindTexture()}}}let gt=[],qt=[];function Wt(D){if(D.samples>0){if(ee(D)===!1){let w=D.textures,X=D.width,j=D.height,K=i.COLOR_BUFFER_BIT,ft=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(D),Q=w.length>1;if(Q)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let nt=D.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let kt=n.get(w[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,X,j,0,0,X,j,K,i.NEAREST),l===!0&&(gt.length=0,qt.length=0,gt.push(i.COLOR_ATTACHMENT0+xt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(gt.push(ft),qt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let kt=n.get(w[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Jt(D){return Math.min(s.maxSamples,D.samples)}function ee(D){let w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(D){let w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function pe(D,w){let X=D.colorSpace,j=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==Es&&X!==qn&&(ue.getTransfer(X)===xe?(j!==hn||K!==En)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",X)),w}function le(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=ht,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ev(i,t){function e(n,s=qn){let r,o=ue.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ru)return i.RGB;if(n===hn)return i.RGBA;if(n===yi)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===Yo||n===jo||n===Zo||n===$o)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Hl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===jl||n===Zl||n===$l||n===Ko||n===Kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Yl)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ko)return r.COMPRESSED_RG11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===fc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===Jo||n===xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ln({vertexShader:Cv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends ii{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Lu,g={},y=e.getContextAttributes(),v=null,_=null,b=[],S=[],I=new st,M=null,T=null,L=new xn;L.viewport=new Ue;let U=new xn;U.viewport=new Ue;let z=[L,U],F=new Cl,C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=b[J];return tt===void 0&&(tt=new _r,b[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=b[J];return tt===void 0&&(tt=new _r,b[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=b[J];return tt===void 0&&(tt=new _r,b[J]=tt),tt.getHandSpace()};function G(J){let tt=S.indexOf(J.inputSource);if(tt===-1)return;let wt=b[tt];wt!==void 0&&(wt.update(J.inputSource,J.frame,c||o),wt.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let J=0;J<b.length;J++){let tt=S[J];tt!==null&&(S[J]=null,b[J].disconnect(tt))}C=null,N=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(v),f=null,d=null,u=null,s=null,_=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(I.width,I.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,$t=null,Ct=null;y.depth&&(Ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=y.stencil?ms:yi,$t=y.stencil?Rr:ci);let Kt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new wn(d.textureWidth,d.textureHeight,{format:hn,type:En,depthTexture:new ls(d.textureWidth,d.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new wn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(J){for(let tt=0;tt<J.removed.length;tt++){let wt=J.removed[tt],$t=S.indexOf(wt);$t>=0&&(S[$t]=null,b[$t].disconnect(wt))}for(let tt=0;tt<J.added.length;tt++){let wt=J.added[tt],$t=S.indexOf(wt);if($t===-1){for(let Kt=0;Kt<b.length;Kt++)if(Kt>=S.length){S.push(wt),$t=Kt;break}else if(S[Kt]===null){S[Kt]=wt,$t=Kt;break}if($t===-1)break}let Ct=b[$t];Ct&&Ct.connect(wt)}}let P=new R,B=new R;function W(J,tt,wt){P.setFromMatrixPosition(tt.matrixWorld),B.setFromMatrixPosition(wt.matrixWorld);let $t=P.distanceTo(B),Ct=tt.projectionMatrix.elements,Kt=wt.projectionMatrix.elements,ye=Ct[14]/(Ct[10]-1),rt=Ct[14]/(Ct[10]+1),ht=(Ct[9]+1)/Ct[5],ut=(Ct[9]-1)/Ct[5],dt=(Ct[8]-1)/Ct[0],gt=(Kt[8]+1)/Kt[0],qt=ye*dt,Wt=ye*gt,Jt=$t/(-dt+gt),ee=Jt*-dt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ee),J.translateZ(Jt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let k=ye+Jt,pe=rt+Jt,le=qt-ee,D=Wt+($t-ee),w=ht*rt/pe*k,X=ut*rt/pe*k;J.projectionMatrix.makePerspective(le,D,w,X,k,pe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function it(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,wt=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),F.near=U.near=L.near=tt,F.far=U.far=L.far=wt,(C!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,N=F.far),F.layers.mask=J.layers.mask|6,L.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;let $t=J.parent,Ct=F.cameras;it(F,$t);for(let Kt=0;Kt<Ct.length;Kt++)it(Ct[Kt],$t);Ct.length===2?W(F,L,U):F.projectionMatrix.copy(L.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),ot(J,F,$t)};function ot(J,tt,wt){wt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(wt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=gr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let Lt=null;function Ht(J,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let $t=!1;wt.length!==F.cameras.length&&(F.cameras.length=0,$t=!0);for(let rt=0;rt<wt.length;rt++){let ht=wt[rt],ut=null;if(f!==null)ut=f.getViewport(ht);else{let gt=u.getViewSubImage(d,ht);ut=gt.viewport,rt===0&&(t.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(_))}let dt=z[rt];dt===void 0&&(dt=new xn,dt.layers.enable(rt),dt.viewport=new Ue,z[rt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),rt===0&&(F.matrix.copy(dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),$t===!0&&F.cameras.push(dt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(wt[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<wt.length;rt++){let ht=wt[rt].camera;if(ht){let ut=g[ht];ut||(ut=new wo,g[ht]=ut);let dt=u.getCameraImage(ht);ut.sourceTexture=dt}}}}for(let wt=0;wt<b.length;wt++){let $t=S[wt],Ct=b[wt];$t!==null&&Ct!==void 0&&Ct.update($t,tt,c||o)}Lt&&Lt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let ne=new Yp;ne.setAnimationLoop(Ht),this.setAnimationLoop=function(J){Lt=J},this.dispose=function(){}}},Iv=new he,Qp=new te;Qp.set(-1,0,0,0,1,0,0,0,1);function Pv(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,uu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,v,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let S=b.program;n.uniformBlockBinding(_,S)}function c(_,b){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",y));let I=b.program;n.updateUBOMapping(_,I);let M=t.render.frame;r[_.id]!==M&&(d(_),r[_.id]=M)}function h(_){let b=u();_.__bindingPointIndex=b;let S=i.createBuffer(),I=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],S=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,T=S.length;M<T;M++){let L=S[M];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)f(L[U],M,U,I);else f(L,M,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,S,I){if(x(_,b,S,I)===!0){let M=_.__offset,T=_.value;if(Array.isArray(T)){let L=0;for(let U=0;U<T.length;U++){let z=T[U],F=g(z);p(z,_.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,_.__data)}}function p(_,b,S){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,S)}function x(_,b,S,I){let M=_.value,T=b+"_"+S;if(I[T]===void 0)return typeof M=="number"||typeof M=="boolean"?I[T]=M:ArrayBuffer.isView(M)?I[T]=M.slice():I[T]=M.clone(),!0;{let L=I[T];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return I[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(L.equals(M)===!1)return L.copy(M),!0}}return!1}function m(_){let b=_.uniforms,S=0,I=16;for(let T=0,L=b.length;T<L;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let z=0,F=U.length;z<F;z++){let C=U[z],N=Array.isArray(C.value)?C.value:[C.value];for(let G=0,O=N.length;G<O;G++){let $=N[G],P=g($),B=S%I,W=B%P.boundary,it=B+W;S+=W,it!==0&&I-it<P.storage&&(S+=I-it),C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=P.storage}}}let M=S%I;return M>0&&(S+=I-M),_.__size=S,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function v(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}var Lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function Nv(){return wi===null&&(wi=new Sn(Lv,16,16,gs,hi),wi.name="DFG_LUT",wi.minFilter=Ne,wi.magFilter=Ne,wi.wrapS=mi,wi.wrapT=mi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Lr=class{constructor(t={}){let{canvas:e=fp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Gl,zl,kl]),g=new Set([En,ci,Cr,Rr,Fl,Ol]),y=new Uint32Array(4),v=new Int32Array(4),_=new R,b=null,S=null,I=[],M=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,z=null,F=null,C=null,N=null;this._outputColorSpace=ve;let G=0,O=0,$=null,P=-1,B=null,W=new Ue,it=new Ue,ot=null,Lt=new Qt(0),Ht=0,ne=e.width,J=e.height,tt=1,wt=null,$t=null,Ct=new Ue(0,0,ne,J),Kt=new Ue(0,0,ne,J),ye=!1,rt=new br,ht=!1,ut=!1,dt=new he,gt=new R,qt=new Ue,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function ee(){return $===null?tt:1}let k=n;function pe(A,V){return e.getContext(A,V)}let le,D,w,X,j,K,ft,mt,Q,nt,xt,kt,Mt,yt,zt,Yt,se,H,_t,et,vt,Et,ct;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),k===null){let V="webgl2";if(k=pe(V,A),k===null)throw pe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(A){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),jt("WebGLRenderer: "+A.message),A}function Gt(){le=new Gy(k),le.init(),vt=new Ev(k,le),D=new Py(k,le,t,vt),w=new Tv(k,le),D.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),F=k.createFramebuffer(),C=k.createFramebuffer(),N=k.createFramebuffer(),X=new Wy(k),j=new uv,K=new Av(k,le,w,j,D,vt,X),ft=new zy(L),mt=new qg(k),Et=new Ry(k,mt),Q=new Vy(k,mt,X,Et),nt=new qy(k,Q,mt,Et,X),H=new Xy(k,D,K),zt=new Dy(j),xt=new hv(L,ft,le,D,Et,zt),kt=new Pv(L,j),Mt=new fv,yt=new _v(le),se=new Cy(L,ft,w,nt,p,l),Yt=new Sv(L,nt,D),ct=new Dv(k,X,D,w),_t=new Iy(k,le,X),et=new Hy(k,le,X),X.programs=xt.programs,L.capabilities=D,L.extensions=le,L.properties=j,L.renderLists=Mt,L.shadowMap=Yt,L.state=w,L.info=X}x!==En&&(T=new jy(x,e.width,e.height,a,s,r));let Ot=new Nu(L,k);this.xr=Ot,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(A){A!==void 0&&(tt=A,this.setSize(ne,J,!1))},this.getSize=function(A){return A.set(ne,J)},this.setSize=function(A,V,Z=!0){if(Ot.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,J=V,e.width=Math.floor(A*tt),e.height=Math.floor(V*tt),Z===!0&&(e.style.width=A+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ne*tt,J*tt).floor()},this.setDrawingBufferSize=function(A,V,Z){ne=A,J=V,tt=Z,e.width=Math.floor(A*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===En){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(Ct)},this.setViewport=function(A,V,Z,q){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,V,Z,q),w.viewport(W.copy(Ct).multiplyScalar(tt).round())},this.getScissor=function(A){return A.copy(Kt)},this.setScissor=function(A,V,Z,q){A.isVector4?Kt.set(A.x,A.y,A.z,A.w):Kt.set(A,V,Z,q),w.scissor(it.copy(Kt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(A){w.setScissorTest(ye=A)},this.setOpaqueSort=function(A){wt=A},this.setTransparentSort=function(A){$t=A},this.getClearColor=function(A){return A.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Z=!0){let q=0;if(A){let Y=!1;if($!==null){let At=$.texture.format;Y=m.has(At)}if(Y){let At=$.texture.type,Dt=g.has(At),St=se.getClearColor(),Ut=se.getClearAlpha(),Bt=St.r,oe=St.g,ce=St.b;Dt?(y[0]=Bt,y[1]=oe,y[2]=ce,y[3]=Ut,k.clearBufferuiv(k.COLOR,0,y)):(v[0]=Bt,v[1]=oe,v[2]=ce,v[3]=Ut,k.clearBufferiv(k.COLOR,0,v))}else q|=k.COLOR_BUFFER_BIT}V&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),se.dispose(),Mt.dispose(),yt.dispose(),j.dispose(),ft.dispose(),nt.dispose(),Et.dispose(),ct.dispose(),xt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Od),Ot.removeEventListener("sessionend",Bd),Ms.stop()};function Ee(A){A.preventDefault(),mo("WebGLRenderer: Context Lost."),U=!0}function me(){mo("WebGLRenderer: Context Restored."),U=!1;let A=X.autoReset,V=Yt.enabled,Z=Yt.autoUpdate,q=Yt.needsUpdate,Y=Yt.type;Gt(),X.autoReset=A,Yt.enabled=V,Yt.autoUpdate=Z,Yt.needsUpdate=q,Yt.type=Y}function Kn(A){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function di(A){let V=A.target;V.removeEventListener("dispose",di),d0(V)}function d0(A){f0(A),j.remove(A)}function f0(A){let V=j.get(A).programs;V!==void 0&&(V.forEach(function(Z){xt.releaseProgram(Z)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Z,q,Y,At){V===null&&(V=Wt);let Dt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,St=g0(A,V,Z,q,Y);w.setMaterial(q,Dt);let Ut=Z.index,Bt=1;if(q.wireframe===!0){if(Ut=Q.getWireframeAttribute(Z),Ut===void 0)return;Bt=2}let oe=Z.drawRange,ce=Z.attributes.position,Ft=oe.start*Bt,ge=(oe.start+oe.count)*Bt;At!==null&&(Ft=Math.max(Ft,At.start*Bt),ge=Math.min(ge,(At.start+At.count)*Bt)),Ut!==null?(Ft=Math.max(Ft,0),ge=Math.min(ge,Ut.count)):ce!=null&&(Ft=Math.max(Ft,0),ge=Math.min(ge,ce.count));let We=ge-Ft;if(We<0||We===1/0)return;Et.setup(Y,q,St,Z,Ut);let Ie,Ae=_t;if(Ut!==null&&(Ie=mt.get(Ut),Ae=et,Ae.setIndex(Ie)),Y.isMesh)q.wireframe===!0?(w.setLineWidth(q.wireframeLinewidth*ee()),Ae.setMode(k.LINES)):Ae.setMode(k.TRIANGLES);else if(Y.isLine){let rn=q.linewidth;rn===void 0&&(rn=1),w.setLineWidth(rn*ee()),Y.isLineSegments?Ae.setMode(k.LINES):Y.isLineLoop?Ae.setMode(k.LINE_LOOP):Ae.setMode(k.LINE_STRIP)}else Y.isPoints?Ae.setMode(k.POINTS):Y.isSprite&&Ae.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let rn=Y._multiDrawStarts,Pt=Y._multiDrawCounts,pn=Y._multiDrawCount,fe=Ut?mt.get(Ut).bytesPerElement:1,kn=j.get(q).currentProgram.getUniforms();for(let fi=0;fi<pn;fi++)kn.setValue(k,"_gl_DrawID",fi),Ae.render(rn[fi]/fe,Pt[fi])}else if(Y.isInstancedMesh)Ae.renderInstances(Ft,We,Y.count);else if(Z.isInstancedBufferGeometry){let rn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Pt=Math.min(Z.instanceCount,rn);Ae.renderInstances(Ft,We,Pt)}else Ae.render(Ft,We)};function Fd(A,V,Z,q){z!==null&&A.isNodeMaterial&&z.setObject(q,A),ht===!0&&zt.setState(A,Z,!1),A.transparent===!0&&A.side===Re&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,xa(A,V,q),A.side=fs,A.needsUpdate=!0,xa(A,V,q),A.side=Re):xa(A,V,q)}this.compile=function(A,V,Z=null){Z===null&&(Z=A),z!==null&&z.renderStart(A,V,Z),S=yt.get(Z),S.init(V),M.push(S),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==Z&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),ut=this.localClippingEnabled,ht=zt.init(this.clippingPlanes,ut),ht===!0&&zt.setGlobalState(this.clippingPlanes,V),z!==null&&Yt.render(S.state.shadowsArray,Z,V);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){let St=At[Dt];Fd(St,Z,V,Y),q.add(St)}else Fd(At,Z,V,Y),q.add(At)}),S=M.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(A,V,Z=null){let q=this.compile(A,V,Z);return new Promise(Y=>{function At(){if(q.forEach(function(Dt){let Ut=j.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&q.delete(Dt)}),q.size===0){Y(A);return}setTimeout(At,10)}le.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let eh=null;function p0(A){eh&&eh(A)}function Od(){Ms.stop()}function Bd(){Ms.start()}let Ms=new Yp;Ms.setAnimationLoop(p0),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(A){eh=A,Ot.setAnimationLoop(A),A===null?Ms.stop():Ms.start()},Ot.addEventListener("sessionstart",Od),Ot.addEventListener("sessionend",Bd),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(A,V);let Z=Ot.enabled===!0&&Ot.isPresenting===!0,q=T!==null&&($===null||Z)&&T.begin(L,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(V),V=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,V,$),S=yt.get(A,M.length),S.init(V),S.state.textureUnits=K.getTextureUnits(),M.push(S),dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),rt.setFromProjectionMatrix(dt,ni,V.reversedDepth),ut=this.localClippingEnabled,ht=zt.init(this.clippingPlanes,ut),b=Mt.get(A,I.length),b.init(),I.push(b),Ot.enabled===!0&&Ot.isPresenting===!0){let Dt=L.xr.getDepthSensingMesh();Dt!==null&&nh(Dt,V,-1/0,L.sortObjects)}nh(A,V,0,L.sortObjects),b.finish(),z!==null&&z.updateLights(S.state.lightsArray),L.sortObjects===!0&&b.sort(wt,$t),Jt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Jt&&se.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&zt.beginShadows();let Y=S.state.shadowsArray;if(Yt.render(Y,A,V),ht===!0&&zt.endShadows(),(q&&T.hasRenderPass())===!1){let Dt=b.opaque,St=b.transmissive;if(S.setupLights(),V.isArrayCamera){let Ut=V.cameras;if(St.length>0)for(let Bt=0,oe=Ut.length;Bt<oe;Bt++){let ce=Ut[Bt];zd(Dt,St,A,ce)}Jt&&se.render(A);for(let Bt=0,oe=Ut.length;Bt<oe;Bt++){let ce=Ut[Bt];kd(b,A,ce,ce.viewport)}}else St.length>0&&zd(Dt,St,A,V),Jt&&se.render(A),kd(b,A,V)}$!==null&&O===0&&(K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($)),q&&T.end(L),A.isScene===!0&&A.onAfterRender(L,A,V),Et.resetDefaultState(),P=-1,B=null,M.pop(),M.length>0?(S=M[M.length-1],K.setTextureUnits(S.state.textureUnits),ht===!0&&zt.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?b=I[I.length-1]:b=null,z!==null&&z.renderEnd()};function nh(A,V,Z,q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(rt)){q&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);let Dt=nt.update(A),St=A.material;St.visible&&b.push(A,Dt,St,Z,qt.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(rt))){let Dt=nt.update(A),St=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),qt.copy(Dt.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(St)){let Ut=Dt.groups;for(let Bt=0,oe=Ut.length;Bt<oe;Bt++){let ce=Ut[Bt],Ft=St[ce.materialIndex];Ft&&Ft.visible&&b.push(A,Dt,Ft,Z,qt.z,ce,V)}}else St.visible&&b.push(A,Dt,St,Z,qt.z,null,V)}}let At=A.children;for(let Dt=0,St=At.length;Dt<St;Dt++)nh(At[Dt],V,Z,q)}function kd(A,V,Z,q){let{opaque:Y,transmissive:At,transparent:Dt}=A;S.setupLightsView(Z),ht===!0&&zt.setGlobalState(L.clippingPlanes,Z),q&&w.viewport(W.copy(q)),Y.length>0&&ga(Y,V,Z),At.length>0&&ga(At,V,Z),Dt.length>0&&ga(Dt,V,Z),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function zd(A,V,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let Ft=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new wn(1,1,{generateMipmaps:!0,type:Ft?hi:En,minFilter:vn,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let At=S.state.transmissionRenderTarget[q.id],Dt=q.viewport||W;At.setSize(Dt.z*L.transmissionResolutionScale,Dt.w*L.transmissionResolutionScale);let St=L.getRenderTarget(),Ut=L.getActiveCubeFace(),Bt=L.getActiveMipmapLevel();L.setRenderTarget(At),L.getClearColor(Lt),Ht=L.getClearAlpha(),Ht<1&&L.setClearColor(16777215,.5),L.clear(),Jt&&se.render(Z);let oe=L.toneMapping;L.toneMapping=li;let ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ht===!0&&zt.setGlobalState(L.clippingPlanes,q),ga(A,Z,q),K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ge=0,We=V.length;ge<We;ge++){let Ie=V[ge],{object:Ae,geometry:rn,material:Pt,group:pn}=Ie;if(Pt.side===Re&&Ae.layers.test(q.layers)){let fe=Pt.side;Pt.side=en,Pt.needsUpdate=!0,Gd(Ae,Z,q,rn,Pt,pn),Pt.side=fe,Pt.needsUpdate=!0,Ft=!0}}Ft===!0&&(K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At))}L.setRenderTarget(St,Ut,Bt),L.setClearColor(Lt,Ht),ce!==void 0&&(q.viewport=ce),L.toneMapping=oe}function ga(A,V,Z){let q=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,At=A.length;Y<At;Y++){let Dt=A[Y],{object:St,geometry:Ut,group:Bt}=Dt,oe=Dt.material;oe.allowOverride===!0&&q!==null&&(oe=q),St.layers.test(Z.layers)&&Gd(St,V,Z,Ut,oe,Bt)}}function Gd(A,V,Z,q,Y,At){z!==null&&Y.isNodeMaterial&&z.setObject(A,Y),A.onBeforeRender(L,V,Z,q,Y,At),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(L,V,Z,q,A,At),Y.transparent===!0&&Y.side===Re&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,L.renderBufferDirect(Z,V,q,Y,A,At),Y.side=fs,Y.needsUpdate=!0,L.renderBufferDirect(Z,V,q,Y,A,At),Y.side=Re):L.renderBufferDirect(Z,V,q,Y,A,At),A.onAfterRender(L,V,Z,q,Y,At)}function xa(A,V,Z){V.isScene!==!0&&(V=Wt);let q=j.get(A),Y=S.state.lights,At=S.state.shadowsArray,Dt=Y.state.version,St=xt.getParameters(A,Y.state,At,V,Z,S.state.lightProbeGridArray),Ut=xt.getProgramCacheKey(St),Bt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,q.fog=V.fog;let oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=ft.get(A.envMap||q.environment,oe),q.envMapRotation=q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Bt===void 0&&(A.addEventListener("dispose",di),Bt=new Map,q.programs=Bt);let ce=Bt.get(Ut);if(ce!==void 0){if(q.currentProgram===ce&&q.lightsStateVersion===Dt)return Hd(A,St),ce}else St.uniforms=xt.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,Z,St),A.onBeforeCompile(St,L),ce=xt.acquireProgram(St,Ut),Bt.set(Ut,ce),q.uniforms=St.uniforms;let Ft=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=zt.uniform),Hd(A,St),q.needsLights=y0(A),q.lightsStateVersion=Dt,q.needsLights&&(Ft.ambientLightColor.value=Y.state.ambient,Ft.lightProbe.value=Y.state.probe,Ft.sunLights.value=Y.state.sun,Ft.sunLightShadows.value=Y.state.sunShadow,Ft.directionalLights.value=Y.state.directional,Ft.directionalLightShadows.value=Y.state.directionalShadow,Ft.spotLights.value=Y.state.spot,Ft.spotLightShadows.value=Y.state.spotShadow,Ft.rectAreaLights.value=Y.state.rectArea,Ft.ltc_1.value=Y.state.rectAreaLTC1,Ft.ltc_2.value=Y.state.rectAreaLTC2,Ft.pointLights.value=Y.state.point,Ft.pointLightShadows.value=Y.state.pointShadow,Ft.hemisphereLights.value=Y.state.hemi,Ft.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ft.sunShadowCascade.value=Y.state.sunShadowCascade,Ft.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ft.spotLightMatrix.value=Y.state.spotLightMatrix,Ft.spotLightMap.value=Y.state.spotLightMap,Ft.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=ce,q.uniformsList=null,ce}function Vd(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Dr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Hd(A,V){let Z=j.get(A);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function m0(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(V.matrixWorld);for(let Z=0,q=A.length;Z<q;Z++){let Y=A[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function g0(A,V,Z,q,Y){V.isScene!==!0&&(V=Wt),K.resetTextureUnits();let At=V.fog,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?V.environment:null,St=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ue.workingColorSpace,Ut=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Bt=ft.get(q.envMap||Dt,Ut),oe=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ce=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ft=!!Z.morphAttributes.position,ge=!!Z.morphAttributes.normal,We=!!Z.morphAttributes.color,Ie=li;q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ie=L.toneMapping);let Ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rn=Ae!==void 0?Ae.length:0,Pt=j.get(q),pn=S.state.lights;if(ht===!0&&(ut===!0||A!==B)){let Ce=A===B&&q.id===P;zt.setState(q,A,Ce)}let fe=!1;q.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==pn.state.version||Pt.outputColorSpace!==St||Y.isBatchedMesh&&Pt.batching===!1||!Y.isBatchedMesh&&Pt.batching===!0||Y.isBatchedMesh&&Pt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Pt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Pt.instancing===!1||!Y.isInstancedMesh&&Pt.instancing===!0||Y.isSkinnedMesh&&Pt.skinning===!1||!Y.isSkinnedMesh&&Pt.skinning===!0||Y.isInstancedMesh&&Pt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Pt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Pt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Pt.instancingMorph===!1&&Y.morphTexture!==null||Pt.envMap!==Bt||q.fog===!0&&Pt.fog!==At||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==zt.numPlanes||Pt.numIntersection!==zt.numIntersection)||Pt.vertexAlphas!==oe||Pt.vertexTangents!==ce||Pt.morphTargets!==Ft||Pt.morphNormals!==ge||Pt.morphColors!==We||Pt.toneMapping!==Ie||Pt.morphTargetsCount!==rn||!!Pt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Pt.__version=q.version);let kn=Pt.currentProgram;fe===!0&&(kn=xa(q,V,Y),z&&q.isNodeMaterial&&z.onUpdateProgram(q,kn,Pt));let fi=!1,Ji=!1,Ws=!1,we=kn.getUniforms(),Be=Pt.uniforms;if(w.useProgram(kn.program)&&(fi=!0,Ji=!0,Ws=!0),q.id!==P&&(P=q.id,Ji=!0),Pt.needsLights){let Ce=m0(S.state.lightProbeGridArray,Y);Pt.lightProbeGrid!==Ce&&(Pt.lightProbeGrid=Ce,Ji=!0)}if(fi||B!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),we.setValue(k,"projectionMatrix",A.projectionMatrix),we.setValue(k,"viewMatrix",A.matrixWorldInverse);let ts=we.map.cameraPosition;ts!==void 0&&ts.setValue(k,gt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&we.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&we.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Ji=!0,Ws=!0)}if(Pt.needsLights&&(pn.state.sunShadowMap.length>0&&we.setValue(k,"sunShadowMap",pn.state.sunShadowMap,K),pn.state.directionalShadowMap.length>0&&we.setValue(k,"directionalShadowMap",pn.state.directionalShadowMap,K),pn.state.spotShadowMap.length>0&&we.setValue(k,"spotShadowMap",pn.state.spotShadowMap,K),pn.state.pointShadowMap.length>0&&we.setValue(k,"pointShadowMap",pn.state.pointShadowMap,K)),Y.isSkinnedMesh){we.setOptional(k,Y,"bindMatrix"),we.setOptional(k,Y,"bindMatrixInverse");let Ce=Y.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),we.setValue(k,"boneTexture",Ce.boneTexture,K))}Y.isBatchedMesh&&(we.setOptional(k,Y,"batchingTexture"),we.setValue(k,"batchingTexture",Y._matricesTexture,K),we.setOptional(k,Y,"batchingIdTexture"),we.setValue(k,"batchingIdTexture",Y._indirectTexture,K),we.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&we.setValue(k,"batchingColorTexture",Y._colorsTexture,K));let Qi=Z.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&H.update(Y,Z,kn),(Ji||Pt.receiveShadow!==Y.receiveShadow)&&(Pt.receiveShadow=Y.receiveShadow,we.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&V.environment!==null&&(Be.envMapIntensity.value=V.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Nv()),Ji){if(we.setValue(k,"toneMappingExposure",L.toneMappingExposure),Pt.needsLights&&x0(Be,Ws),At&&q.fog===!0&&kt.refreshFogUniforms(Be,At),kt.refreshMaterialUniforms(Be,q,tt,J,S.state.transmissionRenderTarget[A.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ce=Pt.lightProbeGrid;Be.probesSH.value=Ce.texture,Be.probesMin.value.copy(Ce.boundingBox.min),Be.probesMax.value.copy(Ce.boundingBox.max),Be.probesResolution.value.copy(Ce.resolution)}Dr.upload(k,Vd(Pt),Be,K)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Dr.upload(k,Vd(Pt),Be,K),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&we.setValue(k,"center",Y.center),we.setValue(k,"modelViewMatrix",Y.modelViewMatrix),we.setValue(k,"normalMatrix",Y.normalMatrix),we.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ce=q.uniformsGroups;for(let ts=0,Xs=Ce.length;ts<Xs;ts++){let Xd=Ce[ts];ct.update(Xd,kn),ct.bind(Xd,kn)}}return kn}function x0(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function y0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,V,Z){let q=j.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),j.get(A.texture).__webglTexture=V,j.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let Z=j.get(A);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Z=0){$=A,G=V,O=Z;let q=null,Y=!1,At=!1;if(A){let St=j.get(A);if(St.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,St.__webglFramebuffer),W.copy(A.viewport),it.copy(A.scissor),ot=A.scissorTest,w.viewport(W),w.scissor(it),w.setScissorTest(ot),P=-1;return}else if(St.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(St.__hasExternalTextures)K.rebindTextures(A,j.get(A.texture).__webglTexture,j.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let oe=A.depthTexture;if(St.__boundDepthTexture!==oe){if(oe!==null&&j.has(oe)&&(A.width!==oe.image.width||A.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Ut=A.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(At=!0);let Bt=j.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Bt[V])?q=Bt[V][Z]:q=Bt[V],Y=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?q=j.get(A).__webglMultisampledFramebuffer:Array.isArray(Bt)?q=Bt[Z]:q=Bt,W.copy(A.viewport),it.copy(A.scissor),ot=A.scissorTest}else W.copy(Ct).multiplyScalar(tt).floor(),it.copy(Kt).multiplyScalar(tt).floor(),ot=ye;if(Z!==0&&(q=F),w.bindFramebuffer(k.FRAMEBUFFER,q)&&w.drawBuffers(A,q),w.viewport(W),w.scissor(it),w.setScissorTest(ot),Y){let St=j.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,St.__webglTexture,Z)}else if(At){let St=V;for(let Ut=0;Ut<A.textures.length;Ut++){let Bt=j.get(A.textures[Ut]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,Z,St)}}else if(A!==null&&Z!==0){let St=j.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,St.__webglTexture,Z)}P=-1};function Wd(A){let V=j.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=D.textureFormatReadable(A.format),V.__typeReadable=D.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,Z,q,Y,At,Dt,St=0){if(!(A&&A.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){w.bindFramebuffer(k.FRAMEBUFFER,Ut);try{let Bt=A.textures[St],oe=Bt.format,ce=Bt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let Ft=Wd(Bt);if(Ft.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-q&&Z>=0&&Z<=A.height-Y&&k.readPixels(V,Z,q,Y,vt.convert(oe),vt.convert(ce),At)}finally{let Bt=$!==null?j.get($).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,V,Z,q,Y,At,Dt,St=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=j.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(V>=0&&V<=A.width-q&&Z>=0&&Z<=A.height-Y){w.bindFramebuffer(k.FRAMEBUFFER,Ut);let Bt=A.textures[St],oe=Bt.format,ce=Bt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);let Ft=Wd(Bt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.bufferData(k.PIXEL_PACK_BUFFER,At.byteLength,k.STREAM_READ),k.readPixels(V,Z,q,Y,vt.convert(oe),vt.convert(ce),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let We=$!==null?j.get($).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,We);let Ie=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await mp(k,Ie,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,At),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ge),k.deleteSync(Ie),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Z=0){let q=Math.pow(2,-Z),Y=Math.floor(A.image.width*q),At=Math.floor(A.image.height*q),Dt=V!==null?V.x:0,St=V!==null?V.y:0;K.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Dt,St,Y,At),w.unbindTexture()},this.copyTextureToTexture=function(A,V,Z=null,q=null,Y=0,At=0){let Dt,St,Ut,Bt,oe,ce,Ft,ge,We,Ie=A.isCompressedTexture?A.mipmaps[At]:A.image;if(Z!==null)Dt=Z.max.x-Z.min.x,St=Z.max.y-Z.min.y,Ut=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,oe=Z.min.y,ce=Z.isBox3?Z.min.z:0;else{let Be=Math.pow(2,-Y);Dt=Math.floor(Ie.width*Be),St=Math.floor(Ie.height*Be),A.isDataArrayTexture?Ut=Ie.depth:A.isData3DTexture?Ut=Math.floor(Ie.depth*Be):Ut=1,Bt=0,oe=0,ce=0}q!==null?(Ft=q.x,ge=q.y,We=q.z):(Ft=0,ge=0,We=0);let Ae=vt.convert(V.format),rn=vt.convert(V.type),Pt;V.isData3DTexture?(K.setTexture3D(V,0),Pt=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),Pt=k.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),Pt=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let pn=w.getParameter(k.UNPACK_ROW_LENGTH),fe=w.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=w.getParameter(k.UNPACK_SKIP_PIXELS),fi=w.getParameter(k.UNPACK_SKIP_ROWS),Ji=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,Ie.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ie.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),w.pixelStorei(k.UNPACK_SKIP_ROWS,oe),w.pixelStorei(k.UNPACK_SKIP_IMAGES,ce);let Ws=A.isDataArrayTexture||A.isData3DTexture,we=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Be=j.get(A),Qi=j.get(V),Ce=j.get(Be.__renderTarget),ts=j.get(Qi.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,Ce.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Xs=0;Xs<Ut;Xs++)Ws&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(A).__webglTexture,Y,ce+Xs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(V).__webglTexture,At,We+Xs)),k.blitFramebuffer(Bt,oe,Dt,St,Ft,ge,Dt,St,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||j.has(A)){let Be=j.get(A),Qi=j.get(V);w.bindFramebuffer(k.READ_FRAMEBUFFER,C),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let Ce=0;Ce<Ut;Ce++)Ws?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,Y,ce+Ce):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,Y),we?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qi.__webglTexture,At,We+Ce):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qi.__webglTexture,At),Y!==0?k.blitFramebuffer(Bt,oe,Dt,St,Ft,ge,Dt,St,k.COLOR_BUFFER_BIT,k.NEAREST):we?k.copyTexSubImage3D(Pt,At,Ft,ge,We+Ce,Bt,oe,Dt,St):k.copyTexSubImage2D(Pt,At,Ft,ge,Bt,oe,Dt,St);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else we?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Pt,At,Ft,ge,We,Dt,St,Ut,Ae,rn,Ie.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,At,Ft,ge,We,Dt,St,Ut,Ae,Ie.data):k.texSubImage3D(Pt,At,Ft,ge,We,Dt,St,Ut,Ae,rn,Ie):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,At,Ft,ge,Dt,St,Ae,rn,Ie.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,At,Ft,ge,Ie.width,Ie.height,Ae,Ie.data):k.texSubImage2D(k.TEXTURE_2D,At,Ft,ge,Dt,St,Ae,rn,Ie);w.pixelStorei(k.UNPACK_ROW_LENGTH,pn),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe),w.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),w.pixelStorei(k.UNPACK_SKIP_ROWS,fi),w.pixelStorei(k.UNPACK_SKIP_IMAGES,Ji),At===0&&V.generateMipmaps&&k.generateMipmap(Pt),w.unbindTexture()},this.initRenderTarget=function(A){j.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){G=0,O=0,$=null,w.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Fr=class extends Fi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new cn;t.deleteAttribute("uv");let e=new _n({side:en}),n=new _n,s=new Ls(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Rt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Cs(t,n,6),a=new ke;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Rt(t,Ur(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Rt(t,Ur(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Rt(t,Ur(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Rt(t,Ur(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Rt(t,Ur(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Rt(t,Ur(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ur(i){return new ko({color:0,emissive:16777215,emissiveIntensity:i})}var ys=Object.freeze({range:4.2,halfAngle:.72}),Xi={yi:{name:"이순신",title:"충무공",era:"조선",role:"원거리 · 지휘",color:"#2f5f8f",accent:"#c8412f",hp:420,dmg:22,cd:.9,range:3.4,speed:2.2,dmgType:"phys",attack:"arrow",block:0,passive:{name:"필사즉생",desc:"주변 2.5칸 유산의 공격 속도 +12%."},skill:{short:"학익진",name:"학익진",cd:14,base:60,perLv:10,desc:"학의 날개처럼 펼친 부채꼴 화살 세례. 전방 4칸 부채꼴 적에게 물리 피해."},ult:{short:"거북선",name:"거북선 출격",cd:60,base:220,perLv:30,desc:"거북선이 길을 거슬러 돌진하며 닿는 모든 적에게 화기 피해를 주고 밀어낸다."},quote:"신에게는 아직 열두 척의 배가 남아 있사옵니다.",unlock:null},sejong:{name:"세종대왕",title:"성군",era:"조선",role:"지원 · 통제",color:"#b8322a",accent:"#d9a300",hp:360,dmg:16,cd:1,range:3,speed:2,dmgType:"holy",attack:"orb",block:0,passive:{name:"집현전",desc:"모든 아군의 처치 군자금 +10%."},skill:{short:`훈민
정음`,name:"훈민정음",cd:16,base:50,perLv:8,desc:"하늘에서 한글 자모가 쏟아져 반경 1.8칸 적에게 신성 피해와 기절 1.2초."},ult:{short:"자격루",name:"자격루",cd:70,desc:"시간을 다스린다. 6초간 모든 적 50% 둔화, 모든 유산 재장전 후 공격 속도 +30%."},quote:"나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.",unlock:null},eulji:{name:"을지문덕",title:"살수의 명장",era:"고구려",role:"범위 · 전략",color:"#3d6b4f",accent:"#d9a300",hp:380,dmg:18,cd:1.2,range:3.2,speed:2,dmgType:"holy",attack:"orb",splash:.7,block:0,passive:{name:"여수장우중문시",desc:"주변 2.5칸 적의 갑옷 -20%. 적장의 기세를 꺾는 시(詩)."},skill:{short:"청야",name:"청야전술",cd:15,base:30,perLv:5,desc:"들판을 불태워 5초간 반경 1.5칸에 초당 화기 피해 + 20% 둔화."},ult:{short:"살수",name:"살수대첩",cd:65,base:300,perLv:40,desc:"둑을 터뜨려 반경 3칸 적에게 큰 피해를 주고 3칸 뒤로 쓸어낸다."},quote:"전승공기고 지족원운지 — 싸움에 이겨 공이 높으니 만족하고 그만두라.",unlock:{coins:1500,stage:"s1"}},gang:{name:"강감찬",title:"귀주의 별",era:"고려",role:"근접 · 적장 사냥",color:"#5a4a8a",accent:"#f0c75e",hp:700,dmg:40,cd:1,range:1.1,speed:2.3,dmgType:"phys",attack:"melee",block:2,passive:{name:"낙성",desc:"4번째 공격마다 별이 떨어져 주변 1.2칸에 2배 신성 피해."},skill:{short:"돌격",name:"귀주 돌격",cd:12,base:80,perLv:12,desc:"지정 지점까지 돌진하며 경로의 적에게 피해와 기절 0.5초."},ult:{short:"낙성우",name:"낙성우",cd:60,base:180,perLv:25,desc:"가장 강한 적 8명에게 유성이 떨어진다."},quote:"별이 떨어진 곳에서 태어났으니, 이 땅에 떨어지는 적 또한 별과 같으리라.",unlock:{coins:2e3,stage:"s2"}},gwon:{name:"권율",title:"행주의 방패",era:"조선",role:"근접 · 방어",color:"#7a5230",accent:"#e6d3a3",hp:900,dmg:30,cd:1.1,range:1.1,speed:2,dmgType:"phys",attack:"melee",block:3,regen:.015,passive:{name:"행주치마",desc:"초당 최대 체력 1.5% 회복. 적 3명까지 저지."},skill:{short:"투석",name:"투석",cd:12,base:45,perLv:7,desc:"행주치마에 담아 온 돌 6개가 반경 2칸에 떨어져 피해와 기절 0.6초."},ult:{short:"산성",name:"행주산성",cd:55,desc:"길 위에 목책을 세워 6초간 모든 졸병·정예·중장을 막고, 권율이 받는 피해 50% 감소."},quote:"돌 하나, 치마폭 하나까지 모두가 성벽이다.",unlock:{coins:2500,stage:"s3"}},gwak:{name:"곽재우",title:"홍의장군",era:"조선",role:"기동 · 게릴라",color:"#c0392b",accent:"#2c2c2c",hp:440,dmg:16,cd:.5,range:3,speed:2.8,dmgType:"phys",attack:"arrow",block:0,detect:3,passive:{name:"천강홍의",desc:"주변 3칸의 은신한 적을 발각한다. 이동 속도가 빠르다."},skill:{short:"매복",name:"의병 매복",cd:18,desc:"지정 지점에 의병 3명을 매복시켜 12초간 적을 저지한다."},ult:{short:"질풍",name:"홍의 질풍",cd:50,desc:"8초간 무적, 공격 속도 2배, 화살이 적 3명에게 튕긴다."},quote:"하늘이 내린 붉은 옷의 장군이 여기 있다!",unlock:{coins:3e3,stage:"s4"}},ahn:{name:"안중근",title:"대한의군 참모중장",era:"대한제국",role:"원거리 · 저격",color:"#2e2e36",accent:"#c8a24a",hp:380,dmg:32,cd:1.6,range:4.2,speed:2.2,dmgType:"fire",attack:"gun",block:0,passive:{name:"위국헌신",desc:"권총은 화기라 갑옷의 절반을 무시한다. 적장에게 주는 피해 +25%. 사거리가 가장 길다."},skill:{short:"연발",name:"일곱 발의 총성",cd:14,base:34,perLv:6,desc:"지정 지점 반경 2.2칸의 적에게 권총 7발을 연달아 쏜다. 발당 화기 피해."},ult:{short:"저격",name:"하얼빈 의거",cd:65,base:800,perLv:100,desc:"전장에서 가장 강한 적(적장 우선)을 저격해 큰 화기 피해, 기절 1.5초, 6초간 받는 피해 +30%."},quote:"위국헌신 군인본분 — 나라를 위해 몸 바치는 것은 군인의 본분이다.",unlock:{coins:3500,stage:"s12"}},dangun:{name:"단군왕검",title:"고조선의 시조",era:"고조선",role:"범위 · 번개",color:"#e8e2d0",accent:"#3a8a5a",hp:480,dmg:17,cd:1.15,range:3.2,speed:2,dmgType:"holy",attack:"lightning",block:0,passive:{name:"홍익인간",desc:"널리 사람을 이롭게: 모든 아군 영웅이 초당 체력 0.7% 회복. 기본 공격 번개가 옆의 적 1명에게 절반 피해로 튄다."},skill:{short:"마늘",name:"마늘 던지기",cd:12,base:44,perLv:7,desc:"곰이 사람이 된 백일의 마늘! 마늘 3통을 던져 반경 0.9칸마다 신성 피해 + 3초간 매워서 35% 둔화."},ult:{short:"천둥",name:"천부인 번개",cd:60,base:135,perLv:18,desc:"하늘의 세 보물을 들어 번개 12줄기를 가장 강한 적들에게 내리친다. 줄기마다 신성 피해 + 기절 0.8초."},quote:"널리 인간을 이롭게 하라.",unlock:{coins:4e3,stage:"s5"}}};var Or={ashigaru:{name:"아시가루",title:"창병",tier:1,hp:70,speed:1,armor:0,resist:0,bounty:5,lives:1,atk:8,size:.28,desc:"가장 흔한 왜군 보병. 수로 밀어붙인다."},teppo:{name:"조총병",title:"철포대",tier:1,hp:56,speed:.95,armor:0,resist:0,bounty:6,lives:1,atk:6,size:.28,shoot:{range:2.6,dmg:12,cd:2.2},desc:"걸으면서 가까운 영웅과 의병을 조총으로 저격한다."},scout:{name:"척후병",title:"정찰대",tier:1,hp:42,speed:1.7,armor:0,resist:0,bounty:4,lives:1,atk:5,size:.25,desc:"빠르게 달려드는 경보병. 방어선의 빈틈을 노린다."},samurai:{name:"사무라이",title:"무사",tier:2,hp:330,speed:.9,armor:.3,resist:.1,bounty:15,lives:2,atk:25,size:.32,enrage:{at:.5,speed:1.6},desc:"갑옷을 두른 무사. 체력이 절반 아래로 떨어지면 칼을 뽑고 돌진한다."},ninja:{name:"시노비",title:"닌자",tier:2,hp:170,speed:1.35,armor:0,resist:.2,bounty:14,lives:2,atk:0,size:.27,stealth:!0,unblockable:!0,desc:"은신 상태로 이동한다. 첨성대·곽재우·봉수 경보로만 발각할 수 있다. 범위 공격은 맞는다."},onmyoji:{name:"음양사",title:"주술사",tier:2,hp:210,speed:.85,armor:0,resist:.5,bounty:17,lives:2,atk:10,size:.3,heal:{range:2,pct:.06,cd:3},desc:"3초마다 주변 아군 체력을 6% 회복시킨다(여럿이어도 겹치지 않음). 신성 저항이 높다."},cavalry:{name:"기마무사",title:"기병",tier:2,hp:230,speed:1.5,armor:.15,resist:0,bounty:17,lives:2,atk:18,size:.36,unblockable:!0,desc:"말을 탄 무사. 빠르고 저지당하지 않는다."},drum:{name:"진군 고수",title:"군악대",tier:2,hp:250,speed:.9,armor:.1,resist:.1,bounty:18,lives:2,atk:8,size:.32,haste:{range:2,mult:.25},desc:"북을 울려 주변 아군의 이동 속도를 25% 올린다. 우선 제거 대상."},armored:{name:"철갑무사",title:"갑주대",tier:3,hp:950,speed:.6,armor:.6,resist:.1,bounty:35,lives:3,atk:40,size:.38,desc:"두꺼운 철갑. 물리 피해를 60% 막는다. 신성·화기로 상대하라."},ram:{name:"공성 충차",title:"공성병기",tier:3,hp:1500,speed:.5,armor:.35,resist:.3,bounty:45,lives:5,atk:60,size:.45,spawnOnDeath:{type:"ashigaru",n:4},desc:"성문을 부수는 충차. 파괴되면 안에서 아시가루 4명이 뛰쳐나온다."},konishi:{name:"고니시 유키나가",title:"제1군 선봉장",tier:4,hp:5500,speed:.55,armor:.3,resist:.3,bounty:250,lives:6,atk:90,size:.55,boss:{summon:{type:"ashigaru",n:4,cd:9}},desc:"임진왜란 선봉장. 9초마다 아시가루 4명을 불러낸다."},kato:{name:"가토 기요마사",title:"제2군 대장",tier:4,hp:9e3,speed:.5,armor:.45,resist:.2,bounty:320,lives:8,atk:130,size:.58,boss:{charge:{cd:11,dur:1.6,mult:3},disable:{range:3,dur:4}},desc:"11초마다 창을 던져 가까운 유산 하나를 4초간 봉쇄하고 돌진한다."},wakizaka:{name:"와키자카 야스하루",title:"수군 대장",tier:4,hp:9500,speed:.6,armor:.3,resist:.35,bounty:320,lives:8,atk:110,size:.56,boss:{shield:{pct:.12,cd:15}},desc:"안택선 방패. 15초마다 최대 체력 12%의 보호막을 새로 두른다."},ukita:{name:"우키타 히데이에",title:"총대장",tier:4,hp:12e3,speed:.5,armor:.4,resist:.4,bounty:400,lives:10,atk:140,size:.6,boss:{rally:{cd:12,heal:.08,haste:.3,dur:3}},desc:"12초마다 전군을 독려해 모든 왜군의 체력 8% 회복, 3초간 이동 속도 +30%."},ishida:{name:"이시다 미쓰나리",title:"삼봉행",tier:4,hp:12500,speed:.45,armor:.4,resist:.4,bounty:600,lives:14,atk:200,size:.66,boss:{phases:[.7,.35],phaseSummon:[{type:"samurai",n:3},{type:"ninja",n:3}],disableN:3,disableDur:5,phaseText:"봉행의 계략"},desc:"침략을 꾸린 책사. 체력 70%·35%에서 정예를 부르고 유산 3개를 봉쇄한다."},so:{name:"소 요시토시",title:"대마도주",tier:4,hp:5200,speed:.6,armor:.25,resist:.3,bounty:240,lives:6,atk:80,size:.55,boss:{summon:{type:"scout",n:5,cd:8,text:"길잡이 척후대!"}},desc:"길잡이 노릇을 한 대마도주. 8초마다 척후병 5명을 풀어 방어선을 흔든다."},kuroda:{name:"구로다 나가마사",title:"제3군 대장",tier:4,hp:7200,speed:.5,armor:.4,resist:.25,bounty:280,lives:7,atk:110,size:.57,boss:{summon:{type:"teppo",n:5,cd:10,text:"철포대 사격 준비!"}},desc:"조총 부대를 앞세운 장수. 10초마다 조총병 5명을 불러낸다."},todo:{name:"도도 다카토라",title:"수군 장수",tier:4,hp:6400,speed:.55,armor:.3,resist:.3,bounty:300,lives:7,atk:110,size:.57,boss:{shield:{pct:.08,cd:13,text:"판옥 방패!"},summon:{type:"ashigaru",n:4,cd:12,text:"수군 상륙!"}},desc:"옥포·칠천량의 수군 장수. 13초마다 보호막(8%), 12초마다 아시가루 4명 상륙."},kuki:{name:"구키 요시타카",title:"수군 대장",tier:4,hp:7600,speed:.5,armor:.4,resist:.3,bounty:320,lives:8,atk:120,size:.58,boss:{shield:{pct:.12,cd:15,text:"철갑선 방벽!"}},desc:"철갑선을 몰던 수군 대장. 15초마다 최대 체력 12%의 두꺼운 보호막."},kurushima:{name:"구루시마 미치후사",title:"선봉 수군장",tier:4,hp:9e3,speed:.6,armor:.3,resist:.3,bounty:330,lives:9,atk:130,size:.58,boss:{rally:{cd:10,heal:.05,haste:.35,dur:3,text:"노를 저어라!"}},desc:"명량의 선봉. 10초마다 모든 왜군 체력 5% 회복, 3초간 이동 속도 +35%."},shimazu:{name:"시마즈 요시히로",title:"귀신 시마즈",tier:4,hp:14e3,speed:.5,armor:.5,resist:.35,bounty:450,lives:12,atk:170,size:.62,enrage:{at:.4,speed:1.5},boss:{charge:{cd:10,dur:1.4,mult:3,text:"귀신 돌격!"},disable:{range:3.2,dur:4}},desc:"가장 사나운 적장. 10초마다 유산 하나를 봉쇄하며 돌진하고, 체력 40% 아래에서 더 빨라진다."},hideyoshi:{name:"도요토미 히데요시",title:"태합 · 침략의 원흉",tier:4,hp:38e3,speed:.3,armor:.88,resist:.55,bounty:3e3,lives:999,atk:400,size:.8,scale:2.15,fixedHp:!0,line:"갑옷 88% — 화기·신성·갑옷 깎기로 공략하라!",boss:{phases:[.75,.5,.25],phaseSummon:[{type:"samurai",n:4},{type:"armored",n:3},{type:"ninja",n:6}],disableN:4,disableDur:6,phaseText:"천하인의 호령",shield:{pct:.05,cd:15,text:"황금 표주박!"}},desc:"단 한 명. 갑옷 88% — 물리 피해가 거의 통하지 않는다. 화기(갑옷 절반 무시)·신성·갑옷 깎기로 공략하라. 도성에 닿으면 즉시 패배."}};function Uu(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Zt,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=tm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=tm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function tm(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Se(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function em(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,v=a.length;y<v;y++){let _=a[y],b=i.attributes[_];l[_]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=i.morphAttributes[_];S&&(c[_]||(c[_]=[]),S.forEach((I,M)=>{let T=new I.array.constructor(I.count*I.itemSize);c[_][M]=new I.constructor(T,I.itemSize,I.normalized)}))}let f=t*.5,p=Math.log10(1/t),x=Math.pow(10,p),m=f*x;for(let y=0;y<r;y++){let v=n?n.getX(y):y,_="";for(let b=0,S=a.length;b<S;b++){let I=a[b],M=i.getAttribute(I),T=M.itemSize;for(let L=0;L<T;L++)_+=`${Math.trunc(M[u[L]](v)*x+m)},`}if(_ in e)h.push(e[_]);else{for(let b=0,S=a.length;b<S;b++){let I=a[b],M=i.getAttribute(I),T=i.morphAttributes[I],L=M.itemSize,U=l[I],z=c[I];for(let F=0;F<L;F++){let C=u[F],N=d[F];if(U[N](o,M[C](v)),T)for(let G=0,O=T.length;G<O;G++)z[G][N](o,T[G][C](v))}}e[_]=o,h.push(o),o++}}let g=i.clone();for(let y in i.attributes){let v=l[y];if(g.setAttribute(y,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),y in c)for(let _=0;_<c[y].length;_++){let b=c[y][_];g.morphAttributes[y][_]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return g.setIndex(h),g}var ia=new R;function Yn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ia.copy(t),ia[n]=0,ia.normalize();let c=.5*o/(o+a),h=1-ia.angleTo(i)/l;return Math.sign(ia[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Tc=class i extends cn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new R,c=new R,h=new R(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,x=new R,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[y+0]=Yn(x,c,"z","y",r,n),f[y+1]=1-Yn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-Yn(x,c,"z","y",r,n),f[y+1]=1-Yn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-Yn(x,c,"x","z",r,t),f[y+1]=Yn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-Yn(x,c,"x","z",r,t),f[y+1]=1-Yn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-Yn(x,c,"x","y",r,t),f[y+1]=1-Yn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=Yn(x,c,"x","y",r,t),f[y+1]=1-Yn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var ku={stone:"assets/3d/painted/granite-v2.webp",wood:"assets/3d/painted/timber-v1.webp",road:"assets/3d/painted/road-v2.webp",ground:"assets/3d/painted/ground-v3.webp","snow-ground":"assets/3d/painted/snow-ground-v2.webp"},dn=512;function Ac(i,t,e){if(!ku[e])return{data:i,width:t,height:t};let n=new Uint8Array(dn*dn*4);for(let s=0;s<dn;s++)for(let r=0;r<dn;r++){let o=(Math.floor(s*t/dn)*t+Math.floor(r*t/dn))*4;n.set(i.subarray(o,o+4),(s*dn+r)*4)}return{data:n,width:dn,height:dn}}var Fu=new Map,Ou=new Set,Uv=Float32Array.from({length:256},(i,t)=>t<=10?t/255/12.92:((t/255+.055)/1.055)**2.4),Fv=i=>Math.round(Math.max(0,Math.min(1,i<=.0031308?i*12.92:1.055*i**(1/2.4)-.055))*255);function Ov(i,t){let e=[t.r,t.g,t.b].map(n=>Uint8Array.from(Uv,s=>Fv(s*n)));for(let n=0;n<i.length;n+=4)for(let s=0;s<3;s++)i[n+s]=e[s][i[n+s]];return i}var im=0,sm=0,Bu=0;function rm(i){return Ou.add(i),()=>Ou.delete(i)}function nm(){typeof document<"u"&&document.documentElement&&(document.documentElement.dataset.paintedReady=im,document.documentElement.dataset.paintedPending=Bu,document.documentElement.dataset.paintedFailed=sm);for(let i of Ou)i()}function Bv(i){return Fu.has(i)||Fu.set(i,new Promise((t,e)=>{let n=new URL(ku[i],new URL("../../",import.meta.url)).href;new Gi().load(n,s=>{try{let r=document.createElement("canvas");r.width=r.height=dn;let o=r.getContext("2d");o.drawImage(s,0,0,dn,dn),t({width:dn,height:dn,data:o.getImageData(0,0,dn,dn).data})}catch(r){e(r)}},void 0,e)})),Fu.get(i)}function Ec(i,t,e=null){return!ku[t]||typeof document>"u"||typeof document.createElementNS!="function"||(i.userData.paintedSurface=t,Bu++,nm(),Bv(t).then(n=>{if(i.image.width!==n.width||i.image.height!==n.height)throw new Error("Albedo placeholder dimensions must stay fixed");let s=new Uint8Array(n.data);e&&Ov(s,e),i.image={width:n.width,height:n.height,data:s},i.colorSpace=ve,i.needsUpdate=!0,im++,i.userData.paintedLoaded=!0}).catch(n=>{sm++,console.warn(`Painted surface fallback: ${t}`,n.message)}).finally(()=>{Bu--,nm()})),i}var zu=new Map,Gu=i=>i-Math.floor(i),Br=(i,t)=>Gu(Math.sin(i*127.1+t*311.7)*43758.5453);function ks(i,t){let e=Math.floor(i),n=Math.floor(t),s=Gu(i),r=Gu(t),o=s*s*(3-2*s),a=r*r*(3-2*r);return ie.lerp(ie.lerp(Br(e,n),Br(e+1,n),o),ie.lerp(Br(e,n+1),Br(e+1,n+1),o),a)}var Ti=ks;function kv(i){if(zu.has(i))return zu.get(i);let t=128,e=new Uint8Array(t*t*4),n=new Uint8Array(e.length),s=new Uint8Array(e.length);for(let a=0;a<t;a++)for(let l=0;l<t;l++){let c=l/t,h=a/t,u=Br(l,a),d=Ti(c*7,h*7),f=.91+u*.09,p=.5+(u-.5)*.15,x=255;if(i==="wood"){let _=Math.sin(c*150+Ti(c*5,h*8)*11+Math.sin(h*13)*1.7);f=.72+_*.12+d*.16+u*.08,p=.5+_*.14+u*.04}else if(i==="stone"){let _=Math.sin(h*90+Ti(c*5,h*4)*7);f=.72+d*.23+u*.14+_*.035,p=.46+Ti(c*4,h*4)*.07+Ti(c*16,h*16)*.045+u*.025}else if(i==="cloth"){let _=l%4<2!=a%4<2?.07:-.04;f=.86+d*.12+_,p=.5+_*2}else if(i==="metal"){let _=Math.pow(Br(l,0),15)*Ti(c*2,h*30);f=.85+d*.12+u*.025-_*.16,p=.5-_*.14}else if(i==="tile"){let _=Math.pow(Math.abs(Math.sin(c*Math.PI*8)),6),b=Ti(c*17,h*21);f=.73+d*.17+_*.08+b*.08,p=.38+_*.19+b*.06}else i==="plaster"?(f=.88+d*.09+u*.03,p=.46+Ti(c*23,h*23)*.06):i==="roof-snow"?(x=Math.abs(Math.sin(c*Math.PI*19+Math.sin(h*11)*.15))<.06+d*.1&&Ti(c*12,h*18)>.38||Ti(c*12,h*10)<.19?0:255,f=.94+u*.06,p=.47+d*.06+u*.025):(f=.92+d*.05+u*.03,p=.48+d*.03+u*.025);let m=(a*t+l)*4,g=Math.round(ie.clamp(f,0,1)*255);e.set([g,g,g,x],m);let y=Math.round(ie.clamp(p,0,1)*255);n.set([y,y,y,255],m);let v=Math.round((i==="metal"?.64+d*.3:i==="tile"?.74+d*.22:.86+u*.13)*255);s.set([v,v,v,255],m)}let r=(a,l)=>{let c=l?Ac(a,t,i):{data:a,width:t,height:t},h=new Sn(c.data,c.width,c.height,hn);return h.wrapS=h.wrapT=Pn,h.magFilter=Ne,h.minFilter=vn,h.generateMipmaps=!0,h.anisotropy=4,l&&(h.colorSpace=ve),h.needsUpdate=!0,h},o={map:r(e,!0),bumpMap:r(n,!1),roughnessMap:r(s,!1)};return Ec(o.map,i),zu.set(i,o),o}function qe(i,t,e={}){return new _n({color:i,...kv(t),roughness:.86,bumpScale:t==="stone"||t==="wood"?.018:.006,...e})}var Cc=["sungnyemun","hwaseong","bosingak","cheomseong","haeinsa","seokguram","gyeongbok","namhansan","seokbinggo","bulguksa"];var zs={sungnyemun:{name:"숭례문",title:"궁수루",cat:"palace",kind:"arrow",dmgType:"phys",desc:"한양 도성의 남대문. 값싸고 빠른 궁수들이 한 명씩 정확히 쏜다.",levels:[{cost:70,dmg:12,cd:.85,range:3},{cost:60,dmg:19,cd:.8,range:3.2},{cost:100,dmg:28,cd:.75,range:3.4}],branches:{A:{name:"편전 명궁",cost:190,dmg:90,cd:1.1,range:4.4,crit:.25,critMult:2.5,target:"strong",desc:"애기살(편전)을 쓰는 명궁. 사거리 대폭 증가, 25% 확률 2.5배 치명타. 강한 적 우선."},B:{name:"연사 궁대",cost:180,dmg:20,cd:.5,range:3.4,multishot:3,desc:"궁대가 늘어나 한 번에 세 명을 동시에 쏜다. 졸병 떼에 강하다."}}},hwaseong:{name:"수원화성",title:"포루",cat:"fortress",kind:"cannon",dmgType:"fire",desc:"정조의 성곽. 포루에서 쏘는 화포가 범위 피해를 준다. 화기는 갑옷을 절반 무시.",levels:[{cost:120,dmg:32,cd:2,range:3,splash:.9},{cost:90,dmg:50,cd:1.9,range:3.2,splash:1},{cost:140,dmg:76,cd:1.8,range:3.4,splash:1.1}],branches:{A:{name:"홍이포",cost:250,dmg:190,cd:2.4,range:4.6,splash:1.4,stun:.3,desc:"거대한 포탄이 넓은 범위를 강타하고 잠시 기절시킨다."},B:{name:"화차 신기전",cost:240,dmg:46,cd:2.2,range:3.8,splash:.7,rockets:6,desc:"화차에서 신기전 6발을 흩뿌린다. 넓게 퍼진 적에게 강하다."}}},bosingak:{name:"보신각",title:"종루",cat:"palace",kind:"bell",dmgType:"holy",desc:"도성의 종. 종이 울릴 때마다 주변 모든 적에게 피해를 주고 둔화시킨다.",levels:[{cost:110,dmg:9,cd:1.6,range:2,slow:.3,slowDur:1.2},{cost:80,dmg:14,cd:1.5,range:2.2,slow:.35,slowDur:1.3},{cost:120,dmg:20,cd:1.4,range:2.4,slow:.4,slowDur:1.4}],branches:{A:{name:"에밀레종",cost:230,dmg:34,cd:1.4,range:2.6,slow:.4,slowDur:1.5,stunEvery:3,stun:.9,desc:"신종의 울림. 세 번째 타종마다 범위 내 모든 적을 기절시킨다."},B:{name:"인정·파루",cost:200,dmg:20,cd:1.2,range:2.8,slow:.55,slowDur:1.6,vuln:.15,desc:"통행금지의 종. 강한 둔화와 함께 받는 피해를 15% 늘린다."}}},cheomseong:{name:"첨성대",title:"천문대",cat:"fortress",kind:"star",dmgType:"holy",detect:!0,desc:"신라의 천문대. 먼 거리의 적을 별빛으로 꿰뚫고, 은신한 시노비를 찾아낸다.",levels:[{cost:140,dmg:48,cd:1.8,range:4.6},{cost:100,dmg:72,cd:1.7,range:4.9},{cost:150,dmg:105,cd:1.6,range:5.2}],branches:{A:{name:"혼천의",cost:260,dmg:135,cd:1.5,range:5.6,meteorEvery:3,meteorMult:2,meteorSplash:1.3,desc:"천체의 운행을 계산해 세 번째 공격마다 유성을 떨어뜨린다."},B:{name:"관상감",cost:230,dmg:120,cd:1.3,range:5.4,vuln:.25,vulnDur:4,detectMult:1.4,desc:"적의 운명을 읽는다. 맞은 적은 4초간 받는 피해 +25%. 탐지 범위 확대."}}},haeinsa:{name:"해인사",title:"장경각",cat:"temple",kind:"sutra",dmgType:"holy",desc:"팔만대장경의 가호. 범위 안의 적은 갑옷이 약해지고 느려지며 지속 피해를 입는다.",levels:[{cost:90,dps:4,shred:.2,slow:.1,range:2.4},{cost:80,dps:7,shred:.3,slow:.12,range:2.6},{cost:110,dps:11,shred:.4,slow:.14,range:2.8}],branches:{A:{name:"경판 결계",cost:220,dps:24,shred:.6,rshred:.3,slow:.18,range:3,desc:"결계 안에서는 갑옷과 저항이 크게 무너진다."},B:{name:"호국 법회",cost:200,dps:13,shred:.4,slow:.15,range:3,killGold:3,heroHeal:.03,desc:"범위에서 쓰러진 적마다 군자금 +3, 범위 안 영웅은 초당 3% 회복."}}},seokguram:{name:"석굴암",title:"본존불",cat:"temple",kind:"beam",dmgType:"holy",desc:"본존불의 광배에서 뻗는 빛. 한 적을 오래 비출수록 피해가 최대 4배까지 증가한다.",levels:[{cost:200,dps:26,ramp:4,rampTime:3,range:3.4},{cost:140,dps:40,ramp:4,rampTime:3,range:3.6},{cost:180,dps:58,ramp:4,rampTime:3,range:3.8}],branches:{A:{name:"대광명",cost:320,dps:85,ramp:7,rampTime:3,range:4,desc:"빛이 3초 만에 최대 7배까지 강해진다. 적장 사냥에 특화."},B:{name:"천불 광배",cost:300,dps:56,ramp:4,rampTime:3,range:3.8,chain:2,chainMult:.6,desc:"빛이 주변 적 2명에게 갈라져 60% 피해를 준다."}}},gyeongbok:{name:"경복궁",title:"근정전",cat:"palace",kind:"palace",dmgType:"none",desc:"조선의 법궁. 직접 공격하지 않지만 주변 유산을 강화하고 매 파도 군자금을 내린다.",levels:[{cost:220,buffDmg:.15,buffAs:.08,range:2.5,income:15},{cost:150,buffDmg:.22,buffAs:.12,range:2.7,income:25},{cost:200,buffDmg:.3,buffAs:.15,range:2.9,income:35}],branches:{A:{name:"왕도 정치",cost:320,buffDmg:.45,buffAs:.2,buffRange:.1,range:3.2,income:40,desc:"주변 유산 공격력 +45%, 공격속도 +20%, 사거리 +10%."},B:{name:"호조 국고",cost:280,buffDmg:.3,buffAs:.15,range:2.9,income:90,interest:.05,interestCap:60,desc:"매 파도 군자금 +90, 보유 군자금의 5% 이자(최대 60)."}}},namhansan:{name:"남한산성",title:"수어장대",cat:"fortress",kind:"barracks",dmgType:"phys",desc:"산성을 지키는 수어청 군사. 가장 가까운 길목에 병사를 세워 적을 붙잡는다. 쓰러진 병사는 잠시 뒤 다시 나온다.",levels:[{cost:90,soldiers:2,hp:175,dmg:11,cd:1,respawn:8,range:2.2},{cost:75,soldiers:2,hp:265,dmg:17,cd:1,respawn:8,range:2.4},{cost:120,soldiers:3,hp:340,dmg:23,cd:1,respawn:7,range:2.6}],branches:{A:{name:"수어청 정예",cost:230,soldiers:3,hp:680,dmg:38,cd:1,respawn:7,range:2.8,armor:.4,desc:"두꺼운 갑옷을 입은 정예병 셋. 받는 피해 -40%. 적장 앞에서도 오래 버틴다."},B:{name:"의승군",cost:210,soldiers:4,hp:360,dmg:27,cd:1,respawn:6,range:2.8,regen:.03,soldierType:"holy",desc:"남한산성을 쌓은 승병 넷. 신성 피해로 싸우고 초당 체력 3%씩 스스로 회복한다."}}},seokbinggo:{name:"석빙고",title:"얼음 창고",cat:"fortress",kind:"frost",dmgType:"phys",desc:"한여름에도 녹지 않는 얼음 창고. 얼음 덩이가 맞은 자리의 적들을 느리게 하고, 몇 번째마다 맞은 적을 꽁꽁 얼려 멈춰 세운다.",levels:[{cost:110,dmg:12,cd:1.2,range:3,splash:.5,slow:.3,slowDur:1.6,freezeEvery:5,freeze:1},{cost:80,dmg:18,cd:1.15,range:3.2,splash:.55,slow:.35,slowDur:1.7,freezeEvery:4,freeze:1.1},{cost:120,dmg:26,cd:1.1,range:3.4,splash:.6,slow:.4,slowDur:1.8,freezeEvery:4,freeze:1.3}],branches:{A:{name:"한파",cost:230,dmg:40,cd:1.3,range:3.6,slow:.45,slowDur:2,splash:1.1,freezeEvery:3,freeze:1,freezeAll:!0,desc:"큰 얼음 덩이가 넓게 터진다. 세 번째마다 터진 자리의 적을 모두 1초 얼린다."},B:{name:"얼음 감옥",cost:220,dmg:50,cd:1,range:3.8,slow:.45,slowDur:2,splash:.5,freezeEvery:3,freeze:2,shatter:.3,target:"strong",desc:"세 번째마다 한 적을 2초 얼음에 가둔다. 얼어 있는 동안 받는 피해 +30%. 강한 적 우선."}}},bulguksa:{name:"불국사",title:"다보탑",cat:"temple",kind:"pagoda",dmgType:"true",desc:"부처님 나라의 탑. 하늘에서 내린 빛기둥이 적의 최대 체력에 비례한 피해를 주고, 갑옷과 저항을 모두 무시한다. 적장에게 강하다.",levels:[{cost:150,dmg:20,pct:.03,pctCap:150,cd:2.5,range:3.4},{cost:110,dmg:30,pct:.04,pctCap:240,cd:2.4,range:3.6},{cost:150,dmg:45,pct:.05,pctCap:330,cd:2.3,range:3.8}],branches:{A:{name:"석가탑",cost:280,dmg:70,pct:.08,pctCap:650,cd:2.4,range:4.2,desc:"그림자 없는 탑. 최대 체력의 8%(한 번에 최대 650) + 70. 적장 사냥 전용."},B:{name:"연등회",cost:260,dmg:50,pct:.035,pctCap:220,cd:2.3,range:4,targets:3,vuln:.15,vulnDur:3,desc:"연등 셋이 세 적을 한꺼번에 비춘다. 맞은 적은 3초간 받는 피해 +15%."}}}};var Vu=.12;function Hu(i,t,e){let n=zs[i];return e?n.branches[e]:n.levels[t-1]}var Wu=.02;var Xu=i=>i>=10?1.06:1;var zv=3,om=4;function qu(i){return i.branch?om:i.level}function am(i,t){let e=Hu(i.type,i.level,i.branch),n=t.buffs,s=Number.isFinite(i.dmgMult)?i.dmgMult:(1+(i.bDmg||0)+(i.syn||0)*Vu+(n.dmgT>0&&n.dmg||0))*(1+Wu*(i.metaLv||0)),r=Number.isFinite(i.rangeMult)?i.rangeMult:(1+(i.bRange||0))*(t.wave.tactic==="night"&&t.wave.phase!=="prep"?.85:1)*Xu(i.metaLv||0);return{...e,...Number.isFinite(e.dmg)?{dmg:e.dmg*s}:{},...Number.isFinite(e.dps)?{dps:e.dps*s}:{},range:e.range*r}}var Gv={sungnyemun:[{name:"목조 궁수루",appearance:"낮은 목조 누각 · 단층 지붕"},{name:"석축 궁수루",appearance:"높은 석축 · 돌계단 · 붉은 군기"},{name:"중층 수호문",appearance:"이층 누각 · 두 겹 지붕 · 금빛 용마루와 대형 군기"}],hwaseong:[{name:"목조 포루",appearance:"개방형 목조 포대 · 소형 화포"},{name:"석축 중포루",appearance:"보강 석축 · 철갑 포가 · 길어진 화포"},{name:"중층 수호포루",appearance:"높은 보루 · 중층 지휘각 · 대형 금테 화포"}],bosingak:[{name:"기본 종루",appearance:"남색 기와 · 붉은 기둥 · 청동 범종"},{name:"보강 종루",appearance:"단청 보강 · 기둥 양옆의 등불"},{name:"호국 종각",appearance:"금빛 지붕 장식 · 조각 석축 · 종테"}],cheomseong:[{name:"석조 천문대",appearance:"풍화된 화강석 · 사각 관측창"},{name:"혼천 관측대",appearance:"황동 관측창 · 정상의 천문 기구"},{name:"별빛 관측대",appearance:"금속 띠 · 별자리 원판 · 따뜻한 관측창"}],haeinsa:[{name:"장경각",appearance:"나무 창살 · 남색 기와 · 경판 전각"},{name:"보강 장경각",appearance:"붉은 기둥 · 녹색 단청 · 한 쌍의 등불"},{name:"호국 장경각",appearance:"드러난 경판 서가 · 금빛 용마루 장식"}],seokguram:[{name:"본존 석굴",appearance:"이끼 낀 둥근 석굴 · 금빛 본존상"},{name:"연화 석굴",appearance:"다듬은 돌 아치 · 연화 기단 · 석등"},{name:"대광배 석굴",appearance:"연꽃 조각 아치 · 금빛 광배"}],gyeongbok:[{name:"근정전",appearance:"겹처마 궁궐 · 붉은 기둥 · 석조 난간"},{name:"월대 근정전",appearance:"금속 난간 장식 · 따뜻한 창빛"},{name:"호국 근정전",appearance:"금빛 용마루 · 조각 석수 · 장식 월대"}],namhansan:[{name:"수어장대",appearance:"원형 석축 · 남색 기와 수비각"},{name:"보강 수어장대",appearance:"보강 여장 · 철제 장식 · 성벽 등불"},{name:"호국 수어장대",appearance:"남색 군기 · 금빛 수호 문장"}],seokbinggo:[{name:"석빙 창고",appearance:"풀 덮인 석조 아치 · 얼음 창고"},{name:"보강 얼음고",appearance:"다듬은 돌 입구 · 푸른 얼음 · 석등"},{name:"호국 얼음고",appearance:"청동 냉기 문장 · 정돈된 얼음 저장고"}],bulguksa:[{name:"기본 석탑",appearance:"화강석 다층 석탑 · 둥근 상륜"},{name:"연화 석탑",appearance:"연꽃 조각 기단 · 석등 장식"},{name:"호국 석탑",appearance:"금빛 상륜 · 석재 조각 보강"}]},Vv={bosingak:{A:"금빛 범종 · 좌우 공명판 · 붉은 군기",B:"짙은 청동 종 · 한 쌍의 시각 북 · 남색 군기"},cheomseong:{A:"정상의 황동 혼천의 · 금빛 관측창",B:"망원 관측기 · 청옥 별지도 · 남색 군기"},haeinsa:{A:"금빛 결계 문장 · 드러난 대장경 경판",B:"청옥 향로 · 의례용 입구 장식"},seokguram:{A:"본존상을 감싼 금빛 태양 광배",B:"세 불상 · 청옥과 금빛 조각 아치"},gyeongbok:{A:"붉은 휘장 · 금빛 왕실 문장",B:"열린 창고 문 · 금빛 국고 궤짝"},namhansan:{A:"청동 갑판 · 붉은 정예 군기",B:"청옥 기도 깃발 · 연꽃 수호 문장"},seokbinggo:{A:"부채꼴 얼음 결정 · 푸른 냉기 분출구",B:"세로 얼음 창살 · 청동 잠금쇠"},bulguksa:{A:"절제된 삼층 석탑 · 돌 상륜",B:"청옥·호박빛 연꽃 등 세 개"}};function kr(i,t=1,e=null,n=!1){let s=zs[i];if(!s)throw new Error(`Unknown 3D tower: ${i}`);let r=n||t===4?om:zv;if(!Number.isInteger(t)||t<1||t>r||t===4&&!s.branches[e])throw new RangeError(`Invalid 3D tower level: ${t} ${e??""}`);let o=Gv[i]??[{name:`${s.title} 기본`,appearance:"기본 건물과 핵심 장치"},{name:`${s.title} 보강`,appearance:"석축·장치 보강 · 높아진 구조"},{name:`${s.title} 완성`,appearance:"확장된 누각·기단 · 금빛 장식"}],a=t===4,l=a?{name:s.branches[e].name,appearance:Vv[i]?.[e]??s.branches[e].desc}:o[t-1],c=t===r,h=t-1;return{...l,level:t,maxLevel:r,upgradeCount:h,isMax:c,branch:e,status:c?"최대 강화":t===1?"기본":`강화 ${h}회`,next:t===3&&r===4?"두 가지 특화 중 하나를 선택합니다":o[t]?.appearance??null,cost:t<3?s.levels[t].cost:null}}var Ge=(i,t,e=.8,n=0)=>({jaw:i,length:t,cheek:.96+(i-1)*.4,temple:.99,depth:1,eyes:.96,lid:e,nose:1.04,age:n}),ui={ashigaru:{body:[.92,.98,.93],color:"#847352",accent:"#b09a67",helmet:"jingasa",weapon:"yari",gait:7.7,stride:.14,face:Ge(.94,1.03),detail:"넓은 진가사 · 긴 창 · 두 손 전진"},teppo:{body:[.94,1.02,.95],color:"#4e6069",accent:"#a9976e",helmet:"flat-hat",weapon:"rifle",gait:7.3,stride:.13,face:Ge(1.02,1.05),detail:"낮은 모자 · 화승총 · 두 손 조준"},scout:{body:[.81,.96,.85],color:"#8e6650",accent:"#c0a576",helmet:"headband",weapon:"shortblade",gait:10.1,stride:.18,face:Ge(.87,.99,.94),detail:"머리띠 · 짧은 칼 · 가벼운 달리기"},samurai:{body:[1.06,1.04,1.02],color:"#793f3d",accent:"#b49b72",helmet:"crescent",weapon:"katana",gait:7.2,stride:.13,face:Ge(1.08,1.05,.76),detail:"초승달 투구 · 층진 갑주 · 긴 칼"},ninja:{body:[.85,.99,.86],color:"#303449",accent:"#756d83",helmet:"hood",weapon:"kunai",gait:9.6,stride:.17,face:Ge(.89,1.07,.73),detail:"얼굴 두건 · 쌍 단검 · 낮은 자세"},onmyoji:{body:[.92,1.07,.96],color:"#c4c5b1",accent:"#89575b",helmet:"eboshi",weapon:"ritual",gait:6.5,stride:.12,face:Ge(.91,1.14,.7,.3),detail:"높은 관 · 부적과 지팡이 · 의식 자세"},cavalry:{body:[1.02,1.02,1],color:"#514d68",accent:"#b4a27e",helmet:"horns",weapon:"naginata",gait:8.6,stride:.15,face:Ge(1.04,1.09,.8),detail:"뿔 투구 · 장도 · 안장과 고삐 · 대각 속보"},drum:{body:[1.06,1,1.1],color:"#914d45",accent:"#b79d67",helmet:"headband",weapon:"drum",gait:7.2,stride:.13,face:Ge(1.12,.97,.88),detail:"붉은 띠 · 끈으로 맨 북 · 교대 타격"},armored:{body:[1.22,1.04,1.16],color:"#48585a",accent:"#a59b83",helmet:"visor",weapon:"axe",gait:5.8,stride:.11,face:Ge(1.18,1.04,.66,.3),detail:"철제 안면갑 · 넓은 방패 · 무거운 도끼"},ram:{body:[1,1,1],color:"#69513a",weapon:"ram",detail:"덧댄 지붕 · 철띠 통나무 · 전후 공성 타격"},konishi:{body:[1.04,1.06,1.02],scale:1.17,color:"#783f3e",accent:"#c4aa74",helmet:"split-crescent",weapon:"katana",offhand:"fan",face:Ge(1.01,1.08,.77,.35),gait:6.7,stride:.12,detail:"갈라진 반달 투구 · 붉은 갑주 · 지휘 부채"},kato:{body:[1.01,1.15,1],scale:1.17,color:"#45566d",accent:"#b0a58b",helmet:"tall-cone",weapon:"yari",face:Ge(.93,1.18,.69,.5),gait:6.1,stride:.13,detail:"긴 원뿔 투구 · 긴 창 · 앞으로 찌르기"},wakizaka:{body:[1.13,1.03,1.08],scale:1.17,color:"#38616a",accent:"#bda779",helmet:"wide-crescent",weapon:"cutlass",offhand:"shield",face:Ge(1.13,1.02,.8,.3),gait:6.7,stride:.12,detail:"넓은 반달 투구 · 청록 갑주 · 수군 방패"},ukita:{body:[1.1,1.1,1.05],scale:1.19,color:"#724b69",accent:"#c1a97c",helmet:"antlers",weapon:"katana",offhand:"fan",face:Ge(1.08,1.12,.82,.25),gait:6.3,stride:.12,detail:"가지뿔 투구 · 자주 갑주 · 넓은 부채"},ishida:{body:[.96,1.13,.98],scale:1.19,color:"#59644b",accent:"#bfab7d",helmet:"banner",weapon:"shortblade",offhand:"fan",face:Ge(.9,1.16,.7,.4),gait:6.1,stride:.11,detail:"세로 관식 · 경갑 · 세 갈래 지휘 깃발"},so:{body:[.95,1.05,.96],scale:1.16,color:"#5b4d6c",accent:"#b39e7e",helmet:"swept",weapon:"cutlass",face:Ge(.96,1.1,.84,.15),gait:7.5,stride:.15,detail:"뒤로 흐르는 관식 · 가벼운 갑주 · 굽은 칼"},kuroda:{body:[1.12,1.05,1.09],scale:1.18,color:"#323d40",accent:"#ad9c79",helmet:"bowl",weapon:"yari",face:Ge(1.16,1.06,.72,.5),gait:6.4,stride:.12,detail:"넓은 그릇 투구 · 검은 갑주 · 철포대 지휘 창"},todo:{body:[1.03,1.14,1.02],scale:1.18,color:"#535c75",accent:"#b3a486",helmet:"stacked",weapon:"naginata",face:Ge(.98,1.15,.78,.6),gait:6.4,stride:.12,detail:"겹친 원형 관식 · 긴 장도 · 수군 갑주"},kuki:{body:[1.25,1.04,1.17],scale:1.2,color:"#3d526b",accent:"#afa88d",helmet:"iron-wings",weapon:"mace",offhand:"shield",face:Ge(1.21,1.01,.7,.5),gait:5.9,stride:.11,detail:"철제 날개 투구 · 두꺼운 방벽 · 철퇴"},kurushima:{body:[1.03,1.08,1.01],scale:1.18,color:"#87503c",accent:"#c1a16c",helmet:"wave",weapon:"cutlass",offhand:"blade",face:Ge(1.05,1.11,.75,.3),gait:7.1,stride:.14,detail:"파도 관식 · 구리빛 갑주 · 양손 칼"},shimazu:{body:[1.2,1.1,1.14],scale:1.23,color:"#5a476e",accent:"#c1ad84",helmet:"great-horns",weapon:"nodachi",face:Ge(1.19,1.12,.64,.9),gait:6.6,stride:.15,detail:"긴 쌍뿔 · 넓은 어깨 · 대도 참격"},hideyoshi:{body:[1.16,1.12,1.12],scale:1.5,color:"#a58245",accent:"#e0c98e",helmet:"sunburst",weapon:"katana",offhand:"fan",face:Ge(1.07,1.04,.62,1),gait:5.6,stride:.1,detail:"큰 금빛 방사 관식 · 장식 갑주 · 표주박 군기"}};var Hv={jaw:1,cheek:1,temple:1,length:1,depth:1,eyes:1,lid:1,nose:1,age:0},zr={yi:{body:[1.02,1.04,1],face:{jaw:1.05,cheek:.96,temple:.98,length:1.05,depth:1.02,eyes:.96,lid:.83,nose:1.08,age:.3},gait:7.4,stride:.15},sejong:{body:[1.09,1.02,1.08],face:{jaw:1.08,cheek:1.13,temple:1.05,length:.98,depth:1.06,eyes:1.02,lid:.9,nose:.96,age:.25},gait:6.2,stride:.12},eulji:{body:[.99,1.09,.96],face:{jaw:.9,cheek:.97,temple:1.01,length:1.12,depth:.98,eyes:.94,lid:.77,nose:1.14,age:.35},gait:7,stride:.14},gang:{body:[1.08,.98,1.04],face:{jaw:1.1,cheek:1.02,temple:1.06,length:.99,depth:1.04,eyes:1.02,lid:.72,nose:1.12,age:1},gait:7.1,stride:.14},gwon:{body:[1.16,1.03,1.1],face:{jaw:1.17,cheek:1.09,temple:1.02,length:1.04,depth:1.09,eyes:1.04,lid:.78,nose:1.15,age:.8},gait:6.6,stride:.13},gwak:{body:[.94,1.03,.93],face:{jaw:.93,cheek:.95,temple:.96,length:1.03,depth:.96,eyes:.94,lid:.86,nose:.97,age:.2},gait:9.1,stride:.17},ahn:{body:[.92,1.09,.94],face:{jaw:.94,cheek:.94,temple:.97,length:1.1,depth:.99,eyes:.96,lid:.82,nose:1.04,age:.15},gait:7.8,stride:.15},dangun:{body:[1.01,1.12,1],face:{jaw:.93,cheek:1.03,temple:1.01,length:1.13,depth:1.02,eyes:1,lid:.7,nose:1.1,age:1},gait:5.9,stride:.12}},Gr=i=>({...Hv,...zr[i]?.face??ui[i]?.face});var qi=new Map;function Ve(i,t,{segments:e=20,steps:n=2,folds:s=0,skin:r=!1,arc:o=Math.PI*2,smooth:a=!1}={}){let l=JSON.stringify([i,t,e,n,s,r,o,a]);if(qi.has(l))return qi.get(l);let c=[];for(let g=0;g<t.length-1;g++)for(let y=0;y<n;y++){let v=y/n,_=t[g],b=t[g+1];c.push(a?ju(t,g,v):_.map((S,I)=>ie.lerp(S,b[I]??0,v)))}c.push(t.at(-1));let h=[],u=[],d=[],f=[],p=e+1;for(let g=0;g<c.length;g++){let[y,v,_,b=0]=c[g];for(let S=0;S<=e;S++){let I=-o/2+S/e*o,M=1+s*Math.cos(I*10)*(1-g/(c.length+3)),T=Math.sin(I)*v*M,L=Math.cos(I)*_*M+b;h.push(T,y,L),u.push(S/e,g/(c.length-1));let U=r?Math.exp(-((Math.abs(T)-.105)**2/.002+(y+.055)**2/.003))*Math.max(0,Math.cos(I)):0,z=r?.96+Math.max(0,y)*.16:1;if(d.push(z,z-U*.065,z-U*.095),g<c.length-1&&S<e){let F=g*p+S;f.push(F,F+1,F+p,F+1,F+p+1,F+p)}}}if(o===Math.PI*2)for(let[g,y]of[[0,!0],[c.length-1,!1]]){let v=h.length/3;h.push(0,c[g][0],c[g][3]??0),u.push(.5,.5),d.push(1,1,1);for(let _=0;_<e;_++){let b=g*p+_;f.push(...y?[v,b+1,b]:[v,b,b+1])}}let x=new Zt;x.setAttribute("position",new Tt(h,3)),x.setAttribute("uv",new Tt(u,2)),x.setAttribute("color",new Tt(d,3)),x.setIndex(f),x.computeVertexNormals();let m=x.attributes.normal;for(let g=0;g<c.length&&o===Math.PI*2;g++){let y=g*p,v=y+e,_=new R().fromBufferAttribute(m,y).add(new R().fromBufferAttribute(m,v)).normalize();m.setXYZ(y,_.x,_.y,_.z),m.setXYZ(v,_.x,_.y,_.z)}return x.userData.sculpture=i,qi.set(l,x),x}function ju(i,t,e){return i[t].map((n,s)=>{let r=i[t+1][s]??0;if(!s)return ie.lerp(n,r,e);let o=i[Math.max(0,t-1)][s]??0,a=i[Math.min(i.length-1,t+2)][s]??0,l=.5*(2*n+(-o+r)*e+(2*o-5*n+4*r-a)*e*e+(-o+3*n-3*r+a)*e*e*e);return ie.clamp(l,Math.min(n,r),Math.max(n,r))})}function Yu(i){let t=Gr(i);return[[-.224,.045,.065,.026],[-.194,.092,.099,.018],[-.143,.138,.123,.008],[-.065,.166,.145,-.004],[.025,.177,.158,-.014],[.107,.172,.151,-.022],[.174,.133,.122,-.024],[.21,.05,.06,-.022]].map(([e,n,s,r],o)=>[e*t.length,n*(o<3?t.jaw:o<5?t.cheek:t.temple),s*t.depth,r*t.depth])}function Wv(i,t,e){let n=Gr(i),s=t/n.nose,r=e/n.length,o=(a,l,c,h)=>Math.exp(-(((s-a)/c)**2+((r-l)/h)**2));return n.depth*(.009*(o(.098,-.035,.045,.054)+o(-.098,-.035,.045,.054))-.006*(o(.07,.025,.037,.027)+o(-.07,.025,.037,.027))+.013*o(0,-.005,.023,.06)+.029*o(0,-.047,.026,.022)+.009*o(0,-.145,.06,.034)+.006*o(0,-.087,.064,.026))}function Vr(i,t,e){let n=Yu(i),s=0;for(;s<n.length-2&&e>n[s+1][0];)s++;let r=ju(n,s,ie.clamp((e-n[s][0])/(n[s+1][0]-n[s][0]),0,1)),o=Math.sqrt(Math.max(0,1-(t/r[1])**2));return o*r[2]+r[3]+Wv(i,t,e)*o**8}function Zu(i,t,e,n=0){let r=Vr(i,t,e),o=new R(-(Vr(i,t+5e-4,e)-Vr(i,t-5e-4,e))/(2*5e-4),-(Vr(i,t,e+5e-4)-Vr(i,t,e-5e-4))/(2*5e-4),1).normalize();return{position:new R(t,e,r).addScaledVector(o,n),normal:o}}function Rc(i="neutral"){let t=`sculpted-face-${i}`;if(qi.has(t))return qi.get(t);let e=40,n=4,s=Yu(i),r=(s.length-1)*n+1,o=r*(e+1),a=Ve(t,s,{segments:e,steps:n,skin:!0,smooth:!0}).clone(),l=a.attributes.position,c=a.attributes.color;for(let u=0;u<o;u++){let d=l.getX(u),f=l.getY(u),p=l.getZ(u),x=Gr(i),m=Yu(i),g=0;for(;g<m.length-2&&f>m[g+1][0];)g++;let y=ju(m,g,ie.clamp((f-m[g][0])/(m[g+1][0]-m[g][0]),0,1))[3];p>y&&l.setZ(u,Vr(i,d,f));let v=Math.exp(-(((Math.abs(d)-.098*x.cheek)/.052)**2+((f+.045*x.length)/.06)**2))*Math.max(0,(p-y)/.15),_=Math.exp(-((d/.034)**2+((f+.048*x.length)/.033)**2))*Math.max(0,(p-y)/.15),b=Math.exp(-(((Math.abs(d)-.07*x.eyes)/.042)**2+((f-.025*x.length)/.032)**2))*Math.max(0,(p-y)/.15),S=.965+Math.max(0,f)*.1-ie.smoothstep(-f,.07,.2)*.035-b*.028;c.setXYZ(u,S,S-v*.065-_*.025,S-v*.09-_*.035)}a.computeVertexNormals();let h=a.attributes.normal;for(let u=0;u<r;u++){let d=u*(e+1),f=d+e,p=new R().fromBufferAttribute(h,d).add(new R().fromBufferAttribute(h,f)).normalize();h.setXYZ(d,...p.toArray()),h.setXYZ(f,...p.toArray())}return a.userData.sculpture=`face-${i}`,qi.set(t,a),a}function Ai(i){if(i==="tunic")return Ve(i,[[-.285,.22,.154,0],[-.2,.232,.168,0],[-.05,.266,.18,0],[.12,.292,.18,-.008],[.26,.27,.154,-.016],[.34,.105,.105,-.012]],{folds:.008});if(i==="cuirass")return Ve(i,[[-.2,.237,.175,.004],[-.05,.275,.191,.004],[.12,.297,.187,-.003],[.245,.273,.164,-.01]],{folds:.004});if(i==="robe")return Ve(i,[[-.64,.335,.237,.012],[-.58,.327,.23,.008],[-.4,.29,.207,0],[-.27,.239,.171,0]],{segments:24,folds:.023});if(i==="belt")return Ve(i,[[-.267,.24,.174,0],[-.251,.246,.18,0],[-.203,.246,.18,0],[-.19,.24,.174,0]],{segments:24});if(i==="thigh")return Ve(i,[[-.32,.085,.087,.012],[-.24,.114,.108,.006],[-.09,.126,.117,0],[0,.11,.104,0]],{segments:16,folds:.012});if(i==="boot")return Ve(i,[[-.3,.073,.087,.035],[-.23,.083,.091,.018],[-.1,.097,.098,.005],[.015,.099,.096,0]],{segments:16});if(i==="upperSleeve")return Ve(i,[[-.25,.086,.086,.014],[-.19,.112,.106,.006],[-.05,.135,.123,0],[.045,.111,.102,0]],{segments:16,folds:.013});if(i==="foreSleeve")return Ve(i,[[-.23,.078,.083,.024],[-.19,.086,.087,.019],[-.08,.098,.092,.006],[.018,.091,.088,0]],{segments:16,folds:.012});if(i==="wideSleeve")return Ve(i,[[-.245,.145,.13,.02],[-.21,.15,.132,.017],[-.08,.124,.115,.003],[.022,.092,.092,0]],{segments:20,folds:.022});if(i==="tasset")return Ve(i,[[-.51,.245,.205,.006],[-.46,.25,.21,.004],[-.31,.244,.19,0],[-.255,.233,.172,0]],{segments:24,folds:.018});throw new Error(`Unknown garment ${i}`)}function sa(){let i=new Tn;i.moveTo(-.025,0),i.lineTo(.025,0),i.lineTo(.021,-.49),i.lineTo(-.006,-.66),i.lineTo(-.024,-.5),i.closePath();let t="blade";if(!qi.has(t)){let e=new Mi(i,{depth:.018,steps:1,bevelEnabled:!0,bevelSegments:1,bevelSize:.004,bevelThickness:.004});e.translate(0,0,-.009),qi.set(t,e)}return qi.get(t)}function $u(i,t,e,n,s=1){let r=de("#8d8050",{metalness:.65,roughness:.4}),o=[[0,.24],[.1,.24],[.17,.2],[.2,.13],[.225,-.08],[.255,-.19],[.3,-.23],[.295,-.255],[.26,-.25],[.225,-.18],[.19,.1],[.12,.17],[0,.17]].map(l=>new st(...l));lt(i,new Fo(o,28),r,t,e,n,s,s,s),Ei(i,E.gold,t,e-.225*s,n,.28*s,.018*s,Math.PI/2);for(let l of[.14,-.14])Ei(i,r,t,e+l*s,n,(l>0?.197:.247)*s,.012*s,Math.PI/2);Nt(i,r,t,e+.25*s,n,.1*s,.055*s,.09*s);let a=new Rt(new cs(.065*s,.018*s,5,12),E.gold);a.position.set(t,e+.32*s,n),i.add(a);for(let l=0;l<4;l++)for(let c=0;c<3;c++)for(let h=0;h<3;h++){let u=l*Math.PI/2+(h-1)*.1,d=.218-c*.01;Nt(i,E.gold,t+Math.sin(u)*d*s,e+(.045+c*.035)*s,n+Math.cos(u)*d*s,.009*s)}}function Ei(i,t,e,n,s,r,o=.025,a=0,l=0){let c=new Rt(new cs(r,o,6,32),t);return c.position.set(e,n,s),c.rotation.set(a,l,0),c.castShadow=!0,i.add(c),c}function Ic(i,t,e,n,s,r=!1,o=1){for(let l=0;l<s;l++){let c=(1.16-l*.1)*o,h=n+l*.34*o;lt(i,"bevel",E.stone,t,h+.12*o,e,c*.54,.22*o,c*.54);for(let d of[-1,1])for(let f of[-1,1])at(i,E.stoneDark,t+d*c*.25,h+.12*o,e+f*c*.25,.035,.2*o,.035);lt(i,"bevel",E.stone,t,h+.225*o,e,c*.68,.06*o,c*.68);let u=lt(i,new tn(c*.62/Math.SQRT2,c/Math.SQRT2,.09*o,4,1),E.stoneDark,t,h+.28*o,e);u.rotation.y=Math.PI/4,lt(i,"bevel",E.stone,t,h+.32*o,e,c*.98,.035*o,c*.98),at(i,E.snow,t,h+.33*o,e,c*.94,.035*o,c*.94),r&&at(i,E.gold,t,h+.28*o,e+c*.5,c,.025,.025)}let a=n+s*.34*o;Vt(i,E.gold,t,a+.2*o,e,.025,.4*o),Nt(i,E.gold,t,a+.39*o,e,.065*o);for(let l=0;l<3;l++)Nt(i,E.stone,t,a+(.05+l*.09)*o,e,(.1-l*.022)*o,.026*o,(.1-l*.022)*o)}function lm(i,t,e=1){let n=de("#b3ab86",{metalness:.24,roughness:.65}),s=new pt;s.position.y=t,s.scale.setScalar(e),i.add(s),lt(s,Rc(),n,0,.54,.03,.82,.82,.82),Nt(s,n,0,.73,-.015,.11,.1,.1),Nt(s,n,0,.82,-.015,.045,.05,.045),Nt(s,n,0,.51,.165,.018,.035,.02);for(let r of[-1,1])It(s,E.stoneDark,[r*.025,.56,.157],[r*.075,.56,.15],.004),Nt(s,n,r*.145,.51,.01,.02,.06,.02);lt(s,Ve("statue-robe",[[-.04,.28,.21,.015],[.05,.28,.18,0],[.26,.22,.14,-.015],[.4,.15,.12,0]],{segments:24,folds:.025}),n,0,0,0);for(let r of[-1,1]){let o=Nt(s,n,r*.16,-.03,.13,.23,.11,.17);o.rotation.y=r*.3,It(s,n,[r*.2,.31,.01],[r*.23,.15,.09],.065),It(s,n,[r*.23,.15,.09],[r*.07,.1,.23],.047),Nt(s,n,r*.065,.1,.23,.045,.022,.045);for(let a=0;a<3;a++)It(s,E.stone,[r*(.08+a*.05),.28-a*.05,.135],[r*(.02+a*.06),.02,.2],.007)}lt(s,"bevel",E.stone,0,-.145,.03,.75,.12,.56);for(let r=0;r<10;r++){let o=r*Math.PI/5,a=Nt(s,n,Math.sin(o)*.3,-.09,.03+Math.cos(o)*.22,.075,.035,.055);a.rotation.y=o}Ei(s,E.gold,0,.44,-.12,.4,.025)}function cm(i,t,e,n=1,s=!1){let o=s?Math.PI:Math.PI*2,a=s?Math.PI/2:0;for(let l=0;l<6;l++){let c=l/6*Math.PI/2+.009,h=(l+1)/6*Math.PI/2-.009,u=Math.max(5,Math.round(Math.sin((c+h)/2)*t*o/.19));for(let d=0;d<u;d++){let f=a+d/u*o+.009,p=a+(d+1)/u*o-.009,x=(S,I,M)=>[Math.sin(M)*Math.sin(I)*S,e+Math.cos(I)*S*n,Math.cos(M)*Math.sin(I)*S],m=[x(t,c,f),x(t,c,p),x(t,h,p),x(t,h,f)],g=[x(t-.085,c,f),x(t-.085,c,p),x(t-.085,h,p),x(t-.085,h,f)],y=[...m,...g],v=[],_=[];for(let[S,I,M]of[[0,1,2],[0,2,3],[4,6,5],[4,7,6],[0,4,5],[0,5,1],[3,2,6],[3,6,7],[0,3,7],[0,7,4],[1,5,6],[1,6,2]])for(let T of[S,M,I])v.push(...y[T]),_.push(y[T][0],y[T][1]);let b=new Zt;b.setAttribute("position",new Tt(v,3)),b.setAttribute("uv",new Tt(_,2)),b.computeVertexNormals(),lt(i,b,(d+l)%5?E.stone:E.stoneDark,0,0,0)}}Nt(i,E.stone,0,e+t*n-.008,0,.1,.03,.1)}function Ku(i,t,e,n,s,r){let o=de("#72c4d4",{roughness:.24,metalness:.2,emissive:"#2f7c93",emissiveIntensity:.3}),a=Te(i,o,t,e+r/2,n,s,r);a.rotation.z=t*.18}function hm(i,t=1,e=null){let n=new pt,s=Math.min(3,t),r=t===4,o=s===3,a=.13+(s-1)*.18;if(Pc(n,1.15+(s-1)*.13,1,a),i==="bosingak"){let l=a+.14,c=.83+(s-1)*.1;if(fn(n,1.02,.82,l,c,{open:!0,railing:s>1,gold:o}),$u(n,0,l+.4,0,1+(s-1)*.12),It(n,E.wood,[-.46,l+.4,.33],[.46,l+.4,.33],.045),Mn(n,1.62,1.38,l+c+.03),o&&(fn(n,.7,.65,2.2,.47,{open:!0,gold:o}),Mn(n,1.14,1.02,2.72)),e==="A"&&($u(n,0,1.03,0,1.6),Ei(n,E.gold,0,1.5,-.17,.65,.035)),e==="B")for(let h of[-1,1])$u(n,h*.65,.96,.02,.7),Ci(n,h*.72,1.35,0,!0)}else if(i==="cheomseong"){let l=1+s*.3,c=6+s*2;for(let h=0;h<c;h++){let u=.43-h/c*.12;for(let d=0;d<10;d++){let f=(d+h%2*.5)*Math.PI/5,p=lt(n,"bevel",(h+d)%3?E.stone:E.stoneDark,Math.sin(f)*u,a+(h+.5)*l/c,Math.cos(f)*u,.27,l/c-.012,.16);p.rotation.y=f}}at(n,E.woodDark,0,a+l*.65,.39,.18,.24,.025),at(n,E.stone,0,a+l,0,.85,.13,.85);for(let h of[-1,1])at(n,E.stone,h*.37,a+l+.15,0,.13,.24,.85);if(s>1&&(Ei(n,E.gold,0,a+l+.56,0,.36,.022,Math.PI/2),Ei(n,E.gold,0,a+l+.56,0,.36,.022,0,.8),Nt(n,E.gold,0,a+l+.56,0,.08)),o)for(let h of[-1,1])Ci(n,h*.65,1.3,-.1,!0);if(r&&(Ei(n,E.gold,0,a+l+.67,0,e==="A"?.68:.52,.035,0,.6),Ei(n,E.gold,0,a+l+.67,0,.54,.025,.8,0),e==="B"))for(let h=0;h<3;h++){let u=Vt(n,E.steel,Math.cos(h*2.09)*.53,a+l+.45,Math.sin(h*2.09)*.53,.08,.45);u.rotation.z=.8}}else if(i==="haeinsa"){fn(n,1.12,.82,a+.14,.84,{open:!0,railing:s>1,gold:o});for(let l of[-1,1])for(let c=0;c<3;c++)for(let h=0;h<5;h++)at(n,h%2?E.woodDark:E.wood,(h-2)*.19,a+.27+c*.16,l*.27,.17,.11,.25);if(Mn(n,1.7,1.34,a+1.03),o&&(fn(n,.75,.64,2.16,.43,{gold:!0}),Mn(n,1.2,1.05,2.64)),r)for(let l of[-1,1])Ci(n,l*.76,1.3,0,!0),e==="A"?(lt(n,"bevel",E.stone,l*.8,.48,.58,.2,.9,.2),at(n,de("#80c3b4",{emissive:"#4fa48e",emissiveIntensity:.6}),l*.8,.7,.69,.12,.4,.015)):at(n,E.gold,l*.72,.51,.55,.3,.4,.3)}else if(i==="seokguram"){let l=1+(s-1)*.12;cm(n,.72*l,a+.3,1,!0);for(let c=0;c<13;c++){let h=c*Math.PI/12,u=lt(n,"bevel",c%4?E.stone:E.stoneDark,Math.cos(h)*.65*l,a+.3+Math.sin(h)*.65*l,.035,.15*l,.145*l,.19);u.rotation.z=h-Math.PI/2}if(lm(n,a+.33,.8+(s-1)*.13),s>1)for(let c of[-1,1])lt(n,"bevel",E.stone,c*.68,a+.25,0,.23,.5,.9),at(n,E.snow,c*.68,a+.52,0,.24,.04,.9);if(o&&Ei(n,E.gold,0,a+.96,-.13,.57,.045),e==="A"){Ei(n,E.gold,0,a+1.1,-.15,.83,.05);for(let c=0;c<12;c++){let h=c*Math.PI/6;It(n,E.gold,[Math.cos(h)*.73,a+1.1+Math.sin(h)*.73,-.14],[Math.cos(h)*.95,a+1.1+Math.sin(h)*.95,-.14],.025)}}if(e==="B")for(let c of[-1,1]){let h=new pt;lm(h,0,.48),h.position.set(c*.72,a+.3,.3),n.add(h)}}else if(i==="gyeongbok"){if(fn(n,1.22,.93,a+.18,.84,{railing:s>1,gold:o}),Mn(n,1.82,1.5,a+1.06),o&&(fn(n,.92,.78,2.24,.54,{gold:!0}),Mn(n,1.52,1.24,2.83)),s>1)for(let l of[-1,1])Ci(n,l*.79,a+.4,-.15,o);if(e==="A"&&(fn(n,.54,.5,3.35,.37,{gold:!0}),Mn(n,.92,.8,3.75)),e==="B")for(let l of[-1,1])at(n,E.wood,l*.78,.61,.25,.48,.56,.55),at(n,E.gold,l*.78,.67,.54,.44,.12,.04),Mn(n,.71,.76,.96)}else if(i==="namhansan"){for(let l of[-1,1]){let c=new pt;for(let h=0;h<3;h++)lt(c,"bevel",E.stone,l*.55,a+.13+h*.18,0,.26,.16,1.1);for(let h of[-.4,0,.4])at(c,E.stone,l*.55,a+.7,h,.28,.26,.24);n.add(c)}fn(n,.74,.69,a+.62,.62,{open:!0,gold:o}),Mn(n,1.34,1.18,a+1.27);for(let l of[-1,1])It(n,E.wood,[l*.28,a+.1,.4],[l*.28,a+.9,.4],.025);if(o&&(fn(n,.65,.55,2.25,.45,{gold:!0}),Mn(n,1.05,.96,2.74)),r)for(let l of[-1,1])Ci(n,l*.75,1.3,-.2,!0),e==="A"?lt(n,"bevel",E.steel,l*.68,.8,.56,.38,.65,.08):Te(n,E.gold,l*.67,1,.5,.18,.55)}else if(i==="seokbinggo"){cm(n,.7,a+.05,.65+(s-1)*.15),at(n,E.woodDark,0,a+.24,.64,.38,.5,.07);for(let l of[-1,1])at(n,E.stone,l*.28,a+.3,.62,.17,.66,.25);at(n,E.stone,0,a+.65,.62,.65,.16,.25);for(let l=0;l<s;l++)Vt(n,E.stone,(l-(s-1)/2)*.33,a+.75,0,.07,.32),Ku(n,(l-(s-1)/2)*.33,a+.88,0,.1,.3+s*.1);if(o)for(let l of[-1,1])Ku(n,l*.53,a+.44,.15,.14,.8);if(r)for(let l=0;l<5;l++){let c=l*1.257;Ku(n,Math.cos(c)*.36,a+.88,Math.sin(c)*.36,e==="A"?.15:.11,e==="A"?1.5:1)}if(e==="B"){Mn(n,1.6,1.25,a+1.6);for(let l of[-1,1])Vt(n,E.wood,l*.6,a+.8,0,.04,1.6)}}else if(i==="bulguksa"){if(Ic(n,0,0,a+.08,s+1,o),s>1)for(let l of[-1,1])Nt(n,E.stone,l*.49,a+.18,.37,.14,.16,.12),at(n,E.stone,l*.49,a+.06,.37,.25,.1,.24);e==="A"&&Ic(n,0,0,a+.08,7,!0,.9),e==="B"&&(Ic(n,-.42,0,a+.08,4,!0,.72),Ic(n,.42,0,a+.08,4,!0,.72))}else throw new Error(`Missing landmark model: ${i}`);if(o&&i!=="cheomseong")for(let l of[-1,1])at(n,E.gold,l*.54,a+.07,.54,.05,.07,.03);return Le(n),n.userData.visual=kr(i,t,e,t===4),n.userData.labelHeight=new Qe().setFromObject(n).max.y+.16,n}function um(i,t,e){if(t==="sungnyemun")if(e==="A"){let n=de("#83d1d4",{emissive:"#347f94",emissiveIntensity:.35}),s=2.83+ra(1.46,1.26)+.095;It(i,E.gold,[0,s,0],[0,s+.57,0],.025),Te(i,n,0,s+.62,0,.13,.26);for(let r of[-1,1])at(i,E.gold,r*.45,2.69,.42,.18,.17,.04),It(i,E.wood,[r*.42,2.6,.45],[r*.42,3.2,.45],.025)}else for(let n of[-1,1]){let s=new pt;fn(s,.52,.58,1.2,.66,{open:!0,gold:!0}),Mn(s,.9,.88,1.9),s.position.x=n*.98,i.add(s),lt(i,"bevel",E.stone,n*.98,.82,0,.24,.72,.6),It(i,E.woodDark,[n*.66,.85,0],[n*1.18,1.19,0],.045);for(let r=0;r<3;r++)It(i,E.wood,[n*.7+(r-1)*.07,1.4,.5],[n*.7+(r-1)*.07,2.1,.5],.012)}else if(e==="A"){i.userData.gun.scale.set(1.24,1.2,1.28);for(let s of[-1,1])at(i,E.steel,s*.55,1.46,.4,.21,.62,.48)}else{i.remove(i.userData.gun);let n=new pt;n.position.set(0,1.28,.18),n.userData.restZ=.18,n.userData.muzzle=new R(0,.34,.54),at(n,E.woodDark,0,0,0,.73,.12,.68);for(let s=0;s<3;s++)for(let r=0;r<4;r++){let o=(r-1.5)*.16,a=.1+s*.14;at(n,E.wood,o,a,0,.12,.11,.64),It(n,E.steel,[o,a,.1],[o,a+.16,.65],.027),Te(n,E.gold,o,a+.18,.69,.04,.13).rotation.x=Math.PI/2}for(let s of[-1,1]){let r=Vt(n,E.woodDark,s*.44,-.1,-.13,.23,.08);r.rotation.z=Math.PI/2}i.add(n),i.userData.gun=n}}var Ju=new Map,Qu=new Map,td=new WeakMap,Yi=128,nd=Math.PI*2,Fn=(i,t,e,n,s=0)=>Math.sin(nd*(i*e+t*n)+s),ed=i=>Math.max(0,Math.min(1,i));function Xv(i){if(Ju.has(i))return Ju.get(i);if(!["skin","hair","cloth","armor","leather"].includes(i))throw new Error(`Unknown character surface ${i}`);let t=new Uint8Array(Yi*Yi*4),e=new Uint8Array(t.length),n=new Uint8Array(t.length);for(let o=0;o<Yi;o++)for(let a=0;a<Yi;a++){let l=a/Yi,c=o/Yi,h=Fn(l,c,2,3)*.55+Fn(l,c,5,-2,1.3)*.3+Fn(l,c,3,7,.7)*.15,u=Fn(l,c,41,37,.4)*Fn(l,c,23,-29,2),d=Fn(l,c,48,0)*Fn(l,c,0,48),f=.97,p=.5,x=.95,m=[1,1,1];if(i==="skin"&&(f=.985+h*.012+u*.004,p=.5+u*.09,x=.96+h*.025,m=[1,.995,.989]),i==="hair"){let y=Math.sin(nd*l*22+Fn(l,c,1,1)*1.2),v=Math.sin(nd*l*49+Fn(l,c,2,1)*.8);f=.86+y*.09+v*.025+h*.018,p=.5+y*.19+v*.05,x=.86-y*.055,m=[1,.99,.97]}if(i==="cloth"&&(f=.93+h*.035+d*.025,p=.5+d*.17+u*.035,x=.98+h*.015),i==="armor"){let y=Fn(l,c,13,11)*Fn(l,c,9,-17),v=Math.max(0,Fn(l,c,1,43)+Fn(l,c,5,41)-1.68);f=.9+h*.035+y*.035-v*.06,p=.5+y*.07-v*.12,x=.87+h*.045+y*.055,m=[.98,.99,1]}i==="leather"&&(f=.89+h*.045+u*.025,p=.5+u*.15+h*.04,x=.94+u*.035,m=[1,.985,.965]);let g=(o*Yi+a)*4;for(let y=0;y<3;y++)t[g+y]=Math.round(ed(f*m[y])*255),e[g+y]=Math.round(ed(p)*255),n[g+y]=Math.round(ed(x)*255);t[g+3]=e[g+3]=n[g+3]=255}let s=(o,a)=>{let l=new Sn(o,Yi,Yi,hn);return l.colorSpace=a,l.wrapS=l.wrapT=Pn,l.magFilter=Ne,l.minFilter=vn,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l.name=`character-${i}-${a===ve?"pigment":o===e?"height":"roughness"}`,l},r={map:s(t,ve),bumpMap:s(e,qn),roughnessMap:s(n,qn)};return Ju.set(i,r),r}function jn(i,t,e={}){let n=JSON.stringify([i,t,e]);if(Qu.has(n))return Qu.get(n);let s={skin:{roughness:.94,bumpScale:7e-4,envMapIntensity:.28,vertexColors:!0},hair:{roughness:.91,bumpScale:.003,envMapIntensity:.34},cloth:{roughness:1,bumpScale:.0035,envMapIntensity:.35},armor:{roughness:.73,metalness:.46,bumpScale:.0025,envMapIntensity:.6,vertexColors:!0},leather:{roughness:.97,bumpScale:.0025,envMapIntensity:.3}},r=new _n({color:t,...Xv(i),...s[i],...e});return r.name=`character-${i}-${t}`,r.userData.characterSurface=i,Qu.set(n,r),r}function dm(i){if(td.has(i))return td.get(i);let t=i.clone(),e=t.attributes.position,n=t.attributes.normal,s=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=[Math.abs(n.getX(r)),Math.abs(n.getY(r)),Math.abs(n.getZ(r))].sort((c,h)=>h-c),a=ie.smoothstep(o[1],.04,.55),l=.82+a*.18;s[r*3]=l*.985,s[r*3+1]=l*.993,s[r*3+2]=l}return t.setAttribute("color",new Se(s,3)),t.userData.characterArmor=!0,td.set(i,t),t}var qv={yi:{skin:"#d4a47e",hair:"#382e2b",brow:.13,beard:.1},sejong:{skin:"#ddb18d",hair:"#3c302c",brow:.04,beard:.18},eulji:{skin:"#cda482",hair:"#3d3330",brow:.18,beard:.1},gang:{skin:"#c9ad91",hair:"#a3a29b",brow:.14,beard:.2},gwon:{skin:"#cda885",hair:"#62564a",brow:.12,beard:.15},gwak:{skin:"#d6a37b",hair:"#332c29",brow:.18,beard:.06},ahn:{skin:"#d1ab88",hair:"#302b28",brow:.08,beard:0},dangun:{skin:"#dcc2a4",hair:"#e0ddd0",brow:.04,beard:.24},ashigaru:{skin:"#c9a17e",hair:"#39312c",brow:.1,beard:0},teppo:{skin:"#c6a285",hair:"#45403a",brow:.14,beard:.025},scout:{skin:"#cfab86",hair:"#3b302a",brow:.08,beard:0},samurai:{skin:"#c5a282",hair:"#342e2c",brow:.18,beard:.035},ninja:{skin:"#c3a48a",hair:"#302f30",brow:.16,beard:0},onmyoji:{skin:"#d4b99b",hair:"#514b43",brow:.05,beard:0},cavalry:{skin:"#bd9877",hair:"#433831",brow:.15,beard:.04},drum:{skin:"#cba27e",hair:"#43372d",brow:.08,beard:0},armored:{skin:"#bea18a",hair:"#554b43",brow:.2,beard:.05},konishi:{skin:"#caa989",hair:"#3d3430",brow:.12,beard:.035},kato:{skin:"#c2a183",hair:"#3b332d",brow:.2,beard:.05},wakizaka:{skin:"#bf9d7c",hair:"#53493d",brow:.16,beard:.035},ukita:{skin:"#d0ad88",hair:"#36302d",brow:.08,beard:0},ishida:{skin:"#cfb393",hair:"#3b3531",brow:.1,beard:.02},so:{skin:"#d0b294",hair:"#3e352f",brow:.08,beard:0},kuroda:{skin:"#c2a38b",hair:"#60574d",brow:.18,beard:.045},todo:{skin:"#c8aa8c",hair:"#554b42",brow:.14,beard:.045},kuki:{skin:"#bd9b7d",hair:"#73695b",brow:.18,beard:.055},kurushima:{skin:"#bb9674",hair:"#44382d",brow:.18,beard:.035},shimazu:{skin:"#c4a789",hair:"#827a6d",brow:.2,beard:.065},hideyoshi:{skin:"#d1b18a",hair:"#7c7261",brow:.14,beard:.035},militia:{skin:"#cba581",hair:"#4c3d31",brow:.08,beard:0},guard:{skin:"#c9a580",hair:"#3b312c",brow:.12,beard:.025},elite:{skin:"#c6a17d",hair:"#4b3e34",brow:.18,beard:.035},monk:{skin:"#d1b391",hair:"#777064",brow:.05,beard:.045}},Dc=i=>qv[i]??{skin:"#c79a76",hair:"#39312c",brow:.17,beard:0},id=new Map,Yv=new R(0,0,1);function Hr(i,t){return id.has(i)||id.set(i,t()),id.get(i)}function jv(){return Hr("combed-hair-cap",()=>{let t=Ve("combed-hair-cap",[[.075,.181,.16,-.015],[.11,.186,.166,-.017],[.16,.174,.163,-.02],[.21,.125,.13,-.022],[.247,.04,.055,-.022],[.263,.01,.015,-.03]],{segments:32,steps:4,smooth:!0}).clone(),e=t.attributes.position,n=t.attributes.uv;for(let o=0;o<e.count-2;o++)if(n.getY(o)<.25&&e.getZ(o)>0){let a=.022*Math.exp(-(((e.getX(o)-.035)/.045)**2)),l=(1-n.getY(o)/.25)**2;e.setY(o,e.getY(o)+a*l)}t.computeVertexNormals();let s=t.attributes.normal,r=(e.count-2)/33;for(let o=0;o<r;o++){let a=o*33,l=a+32,c=new R().fromBufferAttribute(s,a).add(new R().fromBufferAttribute(s,l)).normalize();s.setXYZ(a,c.x,c.y,c.z),s.setXYZ(l,c.x,c.y,c.z)}return t})}function Zv(i,t){return Hr(`eye-${i}-${t}`,()=>{let e=[0,0,.005],n=[.5,.5],s=[],r=24,o=3;for(let l=1;l<=o;l++)for(let c=0;c<=r;c++){let h=c/r*Math.PI*2,u=l/o,d=Math.cos(h)*u,f=Math.sin(h)*Math.abs(Math.sin(h))**.35*u;if(e.push(d*i,f*t,.005*(1-u*u)),n.push(.5+d*.5,.5+f*.5),l===1&&c<r&&s.push(0,c+1,c+2),l>1&&c<r){let p=1+(l-2)*(r+1)+c;s.push(p,p+r+1,p+1,p+1,p+r+1,p+r+2)}}let a=new Zt;return a.setAttribute("position",new Tt(e,3)),a.setAttribute("uv",new Tt(n,2)),a.setIndex(s),a.computeVertexNormals(),a})}function fm(i,t,{ball:e,box:n,between:s,mesh:r,material:o,MAT:a}){let l=Dc(t),c=Gr(t),h=jn("skin",l.skin),u=jn("hair",l.hair);r(i,Rc(t),h,0,0,0);let d=(x,m,g,y,v=.0015)=>{let _=Hr(`${t}-${x}`,()=>new An(new yn(g.map(([b,S])=>Zu(t,b*c.eyes,S*c.length,v).position)),12,y,5,!1));return r(i,_,m,0,0,0)},f=o("#9d6d60",{roughness:.98,envMapIntensity:.2}),p=o("#ac8065",{roughness:1,envMapIntensity:.2});for(let x of[-1,1]){e(i,h,x*.176*c.cheek,-.025*c.length,-.025,.027,.051,.028),e(i,jn("skin","#b77e65"),x*.187*c.cheek,-.027*c.length,-.007,.012,.029,.009);let m=Zu(t,x*.069*c.eyes,.021*c.length,.002),g=new pt;g.position.copy(m.position),g.quaternion.setFromUnitVectors(Yv,m.normal),i.add(g);let y=.034*c.eyes,v=.014*c.lid;r(g,Zv(y,v),o("#ded7c3",{roughness:.94,envMapIntensity:.25}),0,0,0),e(g,o("#715a3d",{roughness:.7,envMapIntensity:.3}),0,0,.0055,.0105,.0105*c.lid,.0018),e(g,o("#28302e",{roughness:.7,envMapIntensity:.3}),0,0,.007,.0048,.0075*c.lid,.0014),e(g,o("#f5e9c9",{roughness:.7}),-.003,.003,.008,.0018);for(let[_,b,S]of[[!0,u,.0018],[!1,p,.0011]]){let I=Hr(`lid-${t}-${_}`,()=>{let M=[];for(let T=0;T<=8;T++){let L=-1+T/4,U=Math.max(0,1-L*L)**.675;M.push(new R(L*y,(_?1:-1)*v*U,5e-4))}return new An(new yn(M),16,S,5,!1)});r(g,I,b,0,0,0)}d(`brow-${x}`,u,[[x*.035,.063-l.brow*.02],[x*.073,.069],[x*.108,.057+l.brow*.03]],.0048,.002),d(`nostril-${x}`,p,[[x*.011,-.052],[x*.02,-.055],[x*.027,-.052]],.0016,8e-4),c.age>.5&&(d(`eye-crease-${x}`,p,[[x*.104,.008],[x*.12,.002],[x*.133,-.005]],.0013*c.age,8e-4),d(`cheek-crease-${x}`,p,[[x*.035,-.063],[x*.048,-.08],[x*.055,-.101]],.0013*c.age,8e-4))}if(d("upper-lip",f,[[-.027,-.092],[-.012,-.087],[0,-.089],[.012,-.087],[.027,-.092]],.0024,.001),d("lower-lip",f,[[-.025,-.094],[0,-.098],[.025,-.094]],.0022,.001),e(i,u,0,.105,-.057,.18,.14,.143),l.beard){let x=Hr(`shaped-beard-${t}`,()=>{let m=Ve(`beard-${t}`,[[-.145-l.beard*.9,.021,.018,.098],[-.14-l.beard*.45,.075,.046,.108],[-.135,.115,.075,.084],[-.105,.115,.048,.078]],{segments:28,steps:4,folds:.035,arc:Math.PI*1.35,smooth:!0}).clone(),g=m.attributes.position,y=m.attributes.uv;for(let v=0;v<g.count;v++){let _=(y.getX(v)-.5)*Math.PI*1.35,b=y.getY(v),S=.009*(.5+.5*Math.cos(_*7))*(1-b)**2;g.setXYZ(v,g.getX(v)*c.jaw,(g.getY(v)+.039*Math.abs(Math.sin(_))*b**3-S)*c.length,g.getZ(v)*c.depth)}return m.computeVertexNormals(),m});r(i,x,u,0,0,0);for(let m of[-1,1])d(`mustache-${m}`,u,[[m*.006,-.072],[m*.027,-.074],[m*.052,-.084]],.0075,.004),d(`sideburn-${m}`,u,[[m*.144,-.014],[m*.137,-.071],[m*.117,-.128]],.01,.003)}if(t==="ahn")for(let x of[-1,1])d(`mustache-${x}`,u,[[x*.006,-.072],[x*.026,-.073],[x*.052,-.079]],.0045,.002);if(t==="dangun")for(let x of[-1,1])for(let m=0;m<3;m++){let g=e(i,u,x*(.17-m*.012),-.07-m*.07,-.072,.032,.093,.043);g.rotation.z=x*.13}i.userData.portrait=t,i.userData.faceForm=c}function pm(i,t,e,{ball:n,box:s,cylinder:r,cone:o,between:a,mesh:l,material:c,MAT:h}){let u=h.gold,d=jn("hair",Dc(t).hair);if(["yi","eulji","gang","gwon"].includes(t)){let f=t==="eulji",p=t==="gang",x=f?.35:p?.245:.28;l(i,Ve(`helmet-${t}`,[[.066,.208,.188,-.018],[.12,.216,.192,-.025],[.205,.167,.154,-.035],[x,.018,.021,-.045]],{segments:28}),e,0,0,0),r(i,u,0,.074,-.018,.213,.025);for(let m of[-1,1])for(let g=0;g<3;g++){let y=l(i,"bevel",e,m*(.192+g*.006),.018-g*.058,-.063,.055,.073,.23);y.rotation.z=m*-.11,s(i,u,m*(.224+g*.006),.037-g*.058,-.063,.009,.008,.2)}for(let m=0;m<7;m++){let g=(m/6-.5)*2.6;a(i,u,[Math.sin(g)*.205,.081,Math.cos(g)*.188-.02],[Math.sin(g)*.152,.209,Math.cos(g)*.137-.035],.006)}if(t==="yi"){s(i,u,0,.18,.16,.045,.18,.025);for(let m=0;m<5;m++){let g=n(i,h.red,0,.3+m*.03,-.055-m*.034,.029,.09-m*.008,.045);g.rotation.x=-.5}}else if(t==="eulji"){for(let m of[-1,1]){let g=l(i,"bevel",u,m*.16,.29,-.035,.055,.29,.065);g.rotation.z=m*-.42,a(i,u,[m*.04,.22,.13],[m*.075,.45,.07],.017)}n(i,h.jade,0,.19,.17,.045,.06,.015)}else if(t==="gang"){for(let m of[-1,0,1]){let g=l(i,"bevel",h.steel,m*.085,.265,.005,.034,.14-Math.abs(m)*.045,.04);g.rotation.z=m*-.25}n(i,u,0,.11,.19,.035)}else{l(i,"bevel",h.steel,0,.16,.163,.08,.14,.026);for(let m=0;m<3;m++)n(i,d,0,.29+m*.018,-.065-m*.035,.04,.065,.055)}}else if(t==="sejong"){l(i,Ve("royal-cap",[[.095,.181,.16,-.03],[.22,.183,.153,-.03],[.32,.13,.13,-.03]],{segments:20}),h.black,0,0,0);for(let f of[-1,1]){let p=l(i,"bevel",h.black,f*.27,.23,-.09,.25,.045,.14);p.rotation.z=f*.08,s(i,h.woodDark,f*.3,.233,-.017,.16,.012,.008)}}else if(t==="dangun"){n(i,d,0,.1,-.067,.205,.2,.18),r(i,u,0,.13,0,.203,.045);for(let f of[-1,0,1])a(i,u,[f*.13,.15,.13],[f*.15,.33+(f?0:.055),.1],.018),n(i,h.jade,f*.15,.34+(f?0:.055),.1,.027,.042,.018)}else if(t==="gwak"){n(i,d,0,.11,-.044,.182,.14,.16),n(i,d,0,.25,-.07,.064,.075,.064),r(i,h.red,0,.075,-.008,.195,.052);for(let f of[-1,1]){let p=l(i,"bevel",h.red,f*.045,-.06,-.21,.052,.32,.024);p.rotation.z=f*.27}}else if(t==="ahn"){let f=jv();l(i,f,d,0,0,0);let p=new Rt(f,d),x=new Hi,m=jn("hair","#3d3530");for(let g=0;g<9;g++){let y=Hr(`combed-strand-${g}`,()=>{let v=[];for(let _=0;_<=10;_++){let b=_/10,S=(-.145+g*.036)*(1-b*.82),I=.084+b*.151;x.set(new R(S,I,1),new R(0,0,-1));let M=x.intersectObject(p,!1)[0];M&&v.push(M.point.clone().addScaledVector(M.face.normal,.0015))}return new An(new yn(v),20,.0015,5,!1)});l(i,y,m,0,0,0)}for(let g of[-1,1])a(i,d,[g*.145,.075,-.01],[g*.14,-.035,.052],.014)}}function mm(i,t,e,n,s,{ball:r,box:o,cylinder:a,between:l,mesh:c,material:h,MAT:u}){let d=u.gold,f=jn("leather","#594231");for(let p of[-1,1]){l(t,d,[p*.23,.21,.15],[p*.16,-.16,.205],.009);for(let m=0;m<4;m++)r(t,d,p*.21,.14-m*.065,.185,.008);let x=e[p<0?0:1].userData.elbow;a(x,f,0,-.16,.018,.092,.11);for(let m of[-.105,-.21])a(x,d,0,m,.018,.094,.012)}if(["sejong","dangun","ahn"].includes(i))for(let p=0;p<12;p++){let x=p*Math.PI/6;l(t,i==="ahn"?f:d,[Math.sin(x)*.32,-.59,Math.cos(x)*.224],[Math.sin(x)*.335,-.635,Math.cos(x)*.237],.007)}if(i==="sejong"){for(let p=0;p<18;p++){let x=p*Math.PI/9;r(t,d,Math.cos(x)*.102,.025+Math.sin(x)*.12,.207,.008)}for(let p=0;p<9;p++){let x=p*.65;r(t,d,Math.sin(x)*(.045+p*.003),.02+Math.cos(x)*.075,.217,.015,.01,.007)}}else if(i==="dangun"){for(let p=0;p<11;p++){let x=p*Math.PI/10;r(t,u.snow,Math.cos(x)*.29,.19-Math.sin(x)*.08,.11+Math.sin(x)*.12,.06,.042,.05)}for(let p of[-1,1])r(t,u.jade,p*.09,-.29,.27,.032,.065,.025),l(t,d,[p*.09,-.2,.24],[p*.09,-.34,.26],.008)}else if(i==="ahn"){for(let p of[-1,1]){let x=o(t,f,p*.095,.075,.2,.1,.27,.025);x.rotation.z=p*.28,o(t,f,p*.17,-.13,.2,.12,.09,.025)}for(let p=0;p<3;p++)r(t,d,0,.03-p*.075,.23,.011);for(let p of[-1,1]){let x=c(t,"bevel",n,p*.085,.28,.1,.105,.15,.085);x.rotation.z=p*.32}l(t,f,[-.24,.22,.16],[.18,-.19,.21],.019)}else{let p=i==="gwak"?u.red:d;for(let x of[-1,1]){let m=o(t,p,x*.12,-.32,.235,.09,.27,.023);m.rotation.z=x*.11;for(let g=0;g<3;g++)o(t,d,x*.12,-.39-g*.025,.25,.083,.008,.008)}if(i==="gang")for(let x=0;x<5;x++){let m=x*Math.PI*2/5;r(t,d,Math.sin(m)*.06,.04+Math.cos(m)*.06,.227,.018)}if(i==="gwon")for(let x of[-1,1])o(t,f,x*.24,-.07,.16,.06,.29,.06);if(i==="eulji")for(let x of[-1,1])l(t,u.jade,[x*.24,.17,.16],[x*.04,-.17,.207],.022)}}function bn(i,t,e,n,s=new Me){let r=i.arms[t],o=i.elbows[t],a=i.wrists[t];i.torso.updateMatrix();let l=i.torso.matrix.clone().invert(),c=new R(...e).applyMatrix4(l),h=new R(...n).applyMatrix4(l),u=o.position.clone(),d=a.position.clone(),f=r.position,p=c.clone().sub(f),x=ie.clamp(p.length(),.025,u.length()+d.length()-.002),m=p.normalize();h.sub(f);let g=h.addScaledVector(m,-h.dot(m)).normalize(),y=(u.lengthSq()+x*x-d.lengthSq())/(2*x),v=Math.sqrt(Math.max(0,u.lengthSq()-y*y)),_=f.clone().addScaledVector(m,y).addScaledVector(g,v);r.quaternion.setFromUnitVectors(u.normalize(),_.clone().sub(f).normalize());let b=f.clone().addScaledVector(m,x);o.quaternion.setFromUnitVectors(d.normalize(),b.sub(_).applyQuaternion(r.quaternion.clone().invert()).normalize());let S=i.torso.quaternion.clone().multiply(r.quaternion).multiply(o.quaternion);a.quaternion.copy(S.invert().multiply(s))}function Lc(i,t,e,n){let s=i.legs[t],r=i.knees[t],o=.31,a=Math.hypot(.3,.035),l=i.hips.position.y-(.064+n),c=ie.clamp(Math.hypot(l,e),.03,o+a-.001),h=Math.atan2(e,l),u=Math.acos(ie.clamp((o*o+c*c-a*a)/(2*o*c),-1,1));s.rotation.x=-(h+u);let d=Math.sin(h+u)*o,f=Math.cos(h+u)*o;r.rotation.x=Math.atan2(.035,.3)-Math.atan2(e-d,l-f)-s.rotation.x,i.ankles[t].rotation.x=-s.rotation.x-r.rotation.x}var $v=new R(0,1,0),Kv=new R(0,0,1);function Nc(i,t,e=[0,0,0]){return new R(...e).applyMatrix4(t.matrixWorld).applyMatrix4(i.rig.matrixWorld.clone().invert())}function Jv(i,t,e,n){let s=i.userData,r=s.kind==="gwak",o=e?Math.sin(n*zr[s.kind].gait)*.012:0;s.torso.rotation.y=r?.1:.04,s.torso.rotation.x=e?.04:0,bn(s,0,[-.12,1.2+o,.37],[-.5,.92,.15]),bn(s,1,[-.12,1.235+o,.025+t*.17],[.38,1.01,.19]),i.updateMatrixWorld(!0);let a=Nc(s,s.weapons[0]),l=Nc(s,s.weapons[1]),c=new Me().setFromUnitVectors(Kv,a.clone().sub(l).normalize()),h=s.torso.quaternion.clone().multiply(s.arms[1].quaternion).multiply(s.elbows[1].quaternion);s.wrists[1].quaternion.copy(h.invert().multiply(c)),s.weapons[1].visible=t<.72,i.updateMatrixWorld(!0);let u=Nc(s,s.weapons[1]);for(let d=0;d<2;d++){let f=Nc(s,s.weapons[0],s.weapons[0].userData.bowTips[d]),p=u.clone().sub(f),x=s.bowStrings[d];x.position.copy(f).add(u).multiplyScalar(.5),x.scale.set(.0045,p.length(),.0045),x.quaternion.setFromUnitVectors($v,p.normalize())}}function sd(i,t,e,n){let s=i.userData,r=zr[s.kind],o=t*r.gait+s.phase,a=ie.clamp(n/.25,0,1),l=Math.sin(t*1.8+s.phase),c=e?1:0;s.rig.position.y=(s.mountOffset??0)+l*.006*(1-c),s.hips.position.y=e?.65:.67,s.torso.rotation.set(c*.035,Math.sin(o)*c*.035,0),s.head.rotation.set(l*.008,-s.torso.rotation.y*.45,0);for(let h=0;h<2;h++)s.legs[h].rotation.set(0,0,0),s.knees[h].rotation.set(0,0,0),Lc(s,h,c*Math.sin(o+h*Math.PI)*r.stride,c*Math.max(0,Math.cos(o+h*Math.PI))*.065),s.arms[h].rotation.set(-Math.sin(o+h*Math.PI)*c*.2,0,(h?1:-1)*.07),s.arms[h].position.z=-.012,s.elbows[h].rotation.set(-.18,0,0),s.wrists[h].rotation.set(0,0,0),s.weapons[h].visible=!0;if(s.weapon==="arrow")Jv(i,a,e,t);else if(s.kind==="ahn")s.torso.rotation.y=-.08+a*.05,bn(s,1,[.23,1.19+a*.025,.4-a*.075],[.39,.88,.1]),s.arms[0].rotation.x=-.26-Math.sin(o)*c*.12,s.elbows[0].rotation.x=-.63,s.head.rotation.y=.06;else if(s.weapon==="melee"){let h=Math.sin(a*Math.PI*.72),u=s.kind==="gwon";s.torso.rotation.y=(u?-.1:-.16)+(u?.23:.43)*h,s.torso.rotation.x=c*.035+h*.055,s.arms[0].rotation.x=-(u?.65:.45)-h*.12,s.arms[0].rotation.y=u?.22:.13,s.elbows[0].rotation.x=-(u?.6:.42),s.wrists[0].rotation.x=-(s.arms[0].rotation.x+s.elbows[0].rotation.x)*.8,s.arms[1].rotation.x=-.25-h*(u?1.1:1.55),s.arms[1].rotation.y=-.15-h*.6,s.elbows[1].rotation.x=-.24-h*.48,s.wrists[1].rotation.z=-h*.3,s.head.rotation.y=-s.torso.rotation.y*.65}else{let h=s.kind==="sejong",u=s.kind==="dangun",d=h?.52:u?.85:.72;s.torso.rotation.y=-a*(h?.1:.2),s.arms[0].rotation.x=h?-.67:-.23-a*.25,s.elbows[0].rotation.x=h?-.51:-.3-a*.2,s.arms[1].rotation.x=-.18-a*d,s.arms[1].rotation.y=-a*(u?.4:.22),s.elbows[1].rotation.x=-.23-a*(h?.22:.4);for(let f=0;f<2;f++)s.wrists[f].rotation.x=-(s.arms[f].rotation.x+s.elbows[f].rotation.x)*(h?.95:.8);s.head.rotation.x=-a*.035}}function gm(i,t,e,n,{ball:s,box:r,cylinder:o,cone:a,between:l,mesh:c,material:h,MAT:u}){let d=ui[t],f=d.helmet,p=h(d.accent,{metalness:.35,roughness:.56});if(["jingasa","flat-hat"].includes(f)){let v=f==="jingasa";a(i,n,0,v?.215:.19,-.025,v?.34:.29,v?.23:.13),o(i,p,0,v?.1:.13,-.025,v?.325:.28,.021);for(let _=0;_<8;_++){let b=_*Math.PI/4;l(i,u.rope,[0,v?.33:.255,-.025],[Math.sin(b)*(v?.32:.27),v?.105:.135,Math.cos(b)*(v?.32:.27)-.025],.004)}for(let _ of[-1,1])l(i,u.rope,[_*.17,.1,.02],[0,-.16,.105],.006);return}if(f==="headband"){o(i,n,0,.085,-.025,.194,.048);for(let v of[-1,1]){let _=r(i,n,v*.055,0,-.205,.045,.23,.025);_.rotation.z=v*.25}t==="drum"&&r(i,u.rope,0,.085,.174,.13,.035,.012);return}if(f==="hood"){s(i,n,0,.075,-.065,.224,.226,.185),c(i,"bevel",n,0,-.105,.158,.31,.14,.057);for(let v of[-1,1])r(i,n,v*.19,-.015,.06,.045,.23,.15);for(let v of[-1,1]){let _=r(i,n,v*.05,-.03,-.21,.047,.26,.026);_.rotation.z=v*.3}return}if(f==="eboshi"){c(i,Ve("enemy-eboshi",[[.08,.19,.16,-.025],[.18,.177,.15,-.04],[.39,.12,.1,-.07],[.55,.07,.055,-.1]],{segments:20}),u.black,0,0,0),r(i,p,0,.28,.1,.042,.28,.022);for(let v of[-1,1])r(i,n,v*.17,-.02,-.12,.065,.36,.025);return}let x=f==="tall-cone",m=f==="bowl",g=x?.63:.27;c(i,Ve(`enemy-helm-${f}`,[[.057,.212,.189,-.022],[.11,m?.29:.218,m?.245:.197,-.03],[x?.34:.205,m?.27:.17,m?.22:.153,-.04],[g,.025,.028,-.048]],{segments:24}),e,0,0,0),o(i,p,0,.072,-.022,m?.28:.215,.025);for(let v of[-1,1])for(let _=0;_<3;_++){let b=c(i,"bevel",e,v*(.199+_*.006),.014-_*.056,-.075,.055,.07,.23);b.rotation.z=-v*.12,r(i,p,v*(.229+_*.006),.03-_*.056,-.075,.009,.008,.205)}let y=(v,_,b=.023)=>c(i,new An(new yn(_.map(S=>new R(...S))),16,b,5,!1),p,0,0,0);if(["crescent","split-crescent","wide-crescent"].includes(f)){let v=f==="wide-crescent"?.43:f==="split-crescent"?.34:.29;for(let _ of[-1,1])y(f,[[_*.035,.19,.16],[_*v*.6,.2,.17],[_*v,.43,.15]],f==="wide-crescent"?.03:.024);f==="split-crescent"&&r(i,p,0,.31,.17,.026,.22,.024)}else if(["horns","great-horns","antlers"].includes(f)){let v=f==="great-horns",_=f==="antlers";for(let b of[-1,1])if(y(f,[[b*.13,.19,.035],[b*(v?.35:.25),.32,.015],[b*(v?.43:.31),v?.62:.48,-.025]],v?.035:.023),_)for(let S=0;S<2;S++)l(i,p,[b*(.2+S*.045),.29+S*.07,.02],[b*(.36+S*.05),.37+S*.1,.03],.018)}else if(f==="visor"){c(i,"bevel",e,0,-.095,.16,.31,.14,.065);for(let v of[-.065,-.105,-.145])r(i,u.black,0,v,.198,.22,.012,.009);r(i,p,0,.22,.17,.08,.19,.025)}else if(f==="banner"){c(i,"bevel",p,0,.34,.12,.09,.43,.04);for(let v of[-1,1])r(i,e,v*.085,.26,.08,.035,.24,.04)}else if(f==="swept")for(let v of[-1,1])y(f,[[v*.12,.18,.05],[v*.24,.3,-.1],[v*.19,.34,-.3]],.026);else if(f==="bowl")s(i,p,0,.19,.24,.055,.055,.017);else if(f==="stacked")for(let v=0;v<3;v++)o(i,p,0,.25+v*.095,.12,.11-v*.023,.029).rotation.x=Math.PI/2;else if(f==="iron-wings")for(let v of[-1,1]){let _=c(i,"bevel",e,v*.27,.28,.025,.24,.29,.06);_.rotation.z=-v*.35,l(i,p,[v*.17,.18,.065],[v*.36,.44,.065],.012)}else if(f==="wave")for(let v=0;v<5;v++)y(f,[[(v-2)*.045,.19,.13],[(v-2)*.085,.35,.12],[(v-2)*.12+.1,.46-v*.015,.1]],.017);else if(f==="sunburst"){for(let v=0;v<13;v++){let _=(v/12-.5)*Math.PI*1.35;l(i,p,[Math.sin(_)*.19,.15+Math.cos(_)*.17,-.07],[Math.sin(_)*.55,.15+Math.cos(_)*.55,-.09],.021)}o(i,p,0,.18,.2,.105,.04).rotation.x=Math.PI/2}}function xm(i,t,e,n,{ball:s,box:r,between:o,mesh:a,cylinder:l,material:c,MAT:h}){let u=ui[i],d=c(u.accent,{metalness:.35,roughness:.56});if(["teppo","ashigaru","scout"].includes(i)&&(o(t,h.woodDark,[-.23,.23,.16],[.17,-.23,.2],.021),a(t,"bevel",h.woodDark,.22,-.21,.1,.14,.14,.1),i==="teppo"))for(let f=0;f<4;f++)r(t,h.rope,-.12+f*.065,.07-f*.053,.208,.04,.065,.035);if(i==="onmyoji")for(let f of[-1,1]){r(t,d,f*.12,-.15,.215,.085,.66,.018);for(let p=0;p<4;p++)r(t,h.black,f*.12,.08-p*.12,.228,.035,.016,.007)}if(i==="ninja"){o(t,h.woodDark,[-.22,.22,.16],[.18,-.22,.205],.022);for(let f of[-1,1])a(t,"bevel",n,f*.19,-.1,.12,.105,.23,.1)}if(i==="armored"||i==="kuki")for(let f of[-1,1]){a(t,"bevel",n,f*.27,.12,.11,.12,.32,.15);for(let p=0;p<3;p++)r(t,d,f*.27,.22-p*.095,.19,.1,.015,.015)}if(u.scale){let f=i==="hideyoshi"?h.gold:d;for(let p of[-1,1])o(t,f,[p*.24,.21,.17],[p*.15,-.17,.216],.012);if(s(t,f,0,.03,.22,.065,.065,.018),["ishida","hideyoshi"].includes(i)){let p=i==="ishida"?3:1;for(let x=0;x<p;x++){let m=(x-(p-1)/2)*.19;o(t,h.woodDark,[m,-.22,-.27],[m,1.08,-.27],.012),r(t,e,m,.8,-.27,p===1?.27:.15,.44,.025),r(t,f,m,.8,-.25,.045,.21,.013)}if(i==="hideyoshi")for(let x of[-1,1])s(t,h.gold,x*.21,.37,-.28,.07,.1,.06),s(t,h.gold,x*.21,.5,-.28,.045,.06,.045)}}}function ym(i,t,e,n,{ball:s,box:r,cylinder:o,cone:a,between:l,mesh:c,material:h,MAT:u}){let d=ui[i],f=d.weapon,p=h(d.accent,{metalness:.35,roughness:.56}),x=e[1],m=e[0];for(let y of e)y.position.set(0,0,0);let g=(y,v=1,_=!1)=>{let b=c(y,sa(),u.steel,0,-.09,0,1,v,1);b.rotation.z=_?-.19:-.06,l(y,u.woodDark,[0,-.075,0],[0,.075,0],.024),r(y,p,0,-.09,0,.13,.025,.055),s(y,p,0,.082,0,.029)};if(["yari","naginata"].includes(f)){l(x,u.wood,[0,-.66,0],[0,.91,0],.019);for(let y of[-.12,.12,.77])o(x,p,0,y,0,.026,.04);if(f==="yari")a(x,u.steel,0,1.06,0,.049,.3);else{let y=c(x,sa(),u.steel,0,.87,0,1.2,.65,1);y.rotation.z=Math.PI-.18}x.userData.support=[0,.23,0]}else if(f==="rifle"){o(x,u.steel,0,.015,.35,.021,.66).rotation.x=Math.PI/2,c(x,"bevel",u.wood,0,-.024,.21,.07,.073,.54);let y=c(x,"bevel",u.woodDark,0,-.045,-.145,.08,.13,.23);y.rotation.x=-.14;for(let v of[.08,.39,.58])o(x,p,0,.015,v,.025,.03).rotation.x=Math.PI/2;r(x,u.black,0,.044,.58,.013,.018,.025),l(x,u.steel,[.044,.02,.03],[.044,.075,.075],.009),x.userData.muzzle=new R(0,.015,.685),x.userData.support=[0,-.02,.24]}else if(f==="ritual"){l(x,u.wood,[0,-.75,0],[0,.76,0],.026);let y=h("#c5d9b7",{emissive:"#628d7a",emissiveIntensity:.7});s(x,p,0,.79,0,.1),s(x,y,0,.85,0,.065),x.userData.muzzle=new R(0,.85,0);for(let v of[-1,1]){r(x,u.rope,v*.11,.58,0,.095,.31,.018);for(let _=0;_<3;_++)r(x,u.red,v*.11,.68-_*.07,.013,.05,.011,.007)}r(m,u.rope,0,.08,.04,.15,.28,.018);for(let v=0;v<4;v++)r(m,u.red,0,.18-v*.055,.054,.06,.012,.008)}else if(f==="drum"){o(t,u.wood,0,-.075,.36,.25,.3).rotation.x=Math.PI/2;for(let y of[.2,.52]){o(t,u.rope,0,-.075,y,.251,.024).rotation.x=Math.PI/2;for(let v=0;v<10;v++){let _=v*Math.PI/5;s(t,p,Math.sin(_)*.23,-.075+Math.cos(_)*.23,y,.012)}}for(let y=0;y<10;y++){let v=y*Math.PI/5,_=v+Math.PI/10;l(t,u.rope,[Math.sin(v)*.255,-.075+Math.cos(v)*.255,.21],[Math.sin(_)*.255,-.075+Math.cos(_)*.255,.51],.006)}for(let y of[-1,1])l(t,u.woodDark,[y*.2,.25,.11],[y*.2,-.01,.29],.016);for(let y of e)l(y,u.wood,[0,0,0],[0,0,.3],.014),s(y,u.rope,0,0,.32,.025)}else if(["axe","mace"].includes(f))if(l(x,u.woodDark,[0,.08,0],[0,-.6,0],.028),f==="axe")c(x,"bevel",u.steel,.07,-.47,0,.29,.24,.065),r(x,p,0,-.47,0,.075,.29,.08);else{s(x,u.steel,0,-.51,0,.115,.16,.115);for(let y=0;y<6;y++){let v=y*Math.PI/3;l(x,p,[Math.sin(v)*.08,-.64,Math.cos(v)*.08],[Math.sin(v)*.13,-.41,Math.cos(v)*.13],.018)}}else g(x,f==="shortblade"?.52:f==="kunai"?.34:f==="nodachi"?1.35:1,f==="cutlass");if((f==="kunai"||d.offhand==="blade")&&g(m,f==="kunai"?.34:.67,!0),f==="axe"||d.offhand==="shield"){c(m,"bevel",n,0,-.06,.1,.43,.57,.09);for(let y of[-1,1])r(m,p,y*.19,-.06,.155,.022,.55,.015);for(let y of[-.31,.19])r(m,p,0,y,.157,.4,.026,.017);s(m,p,0,-.06,.167,.068,.068,.03)}if(d.offhand==="fan"){let y=new Tn;y.moveTo(0,0);for(let v=0;v<=16;v++){let _=.23+v/16*(Math.PI-.46);y.lineTo(Math.cos(_)*.32,Math.sin(_)*.32)}y.closePath(),c(m,new Mi(y,{depth:.014,bevelEnabled:!1,curveSegments:8}),p,0,0,.035);for(let v=0;v<7;v++){let _=.23+v/6*(Math.PI-.46);l(m,u.woodDark,[0,0,.055],[Math.cos(_)*.3,Math.sin(_)*.3,.055],.005)}l(m,u.woodDark,[0,-.07,.04],[0,.06,.04],.016)}}var oa=new R(1,0,0),Qv=new R(0,0,1);function _m(i,t){let e=i.userData,n=e.weapons[1];i.updateMatrixWorld(!0);let s=new R(...n.userData.support).applyMatrix4(n.matrixWorld).applyMatrix4(e.rig.matrixWorld.clone().invert());bn(e,0,s.toArray(),[-.44,1.02,.19],t)}function tM(i,t,e){if(i.horseLegs)for(let n=0;n<4;n++){let s=i.horseLegs[n],r=i.horseKnees[n],o=i.horseHooves[n],a=t+(n===0||n===3?0:Math.PI),l=e?Math.sin(a)*.15:0,c=e?Math.max(0,Math.cos(a))*.075:0,h=r.position.length(),u=o.position.length(),d=s.position.y-(.058+c),f=ie.clamp(Math.hypot(d,l),.03,h+u-.001),p=Math.atan2(l,d),x=Math.acos(ie.clamp((h*h+f*f-u*u)/(2*h*f),-1,1));s.rotation.set(-(p+x),0,0);let m=Math.sin(p+x)*h,g=Math.cos(p+x)*h;r.rotation.set(Math.atan2(.02,.27)-Math.atan2(l-m,d-g)-s.rotation.x,0,0),o.rotation.set(-s.rotation.x-r.rotation.x,0,0)}}function rd(i){let t=i.userData;if(!t.horseReins)return;i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),n=t.wrists[0].getWorldPosition(new R).applyMatrix4(e);for(let s=0;s<2;s++){let r=new R((s?1:-1)*.11,1.1,.65),o=n.clone().sub(r),a=t.horseReins[s];a.position.copy(r).add(n).multiplyScalar(.5),a.scale.set(.007,o.length(),.007),a.quaternion.setFromUnitVectors(new R(0,1,0),o.normalize())}}function od(i,t,e,n){let s=i.userData,r=ui[s.kind];if(!r||s.vehicle)return;let o=t*r.gait+s.phase,a=ie.clamp(n/.25,0,1),l=Math.sin(a*Math.PI*.72),c=e?1:0,h=Math.sin(t*1.8+s.phase);s.rig.position.y=(s.mountOffset??0)+h*.005*(1-c),s.hips.position.y=e?.65:.67,s.torso.rotation.set(c*(s.kind==="ninja"?.13:.025),Math.sin(o)*c*.025,0),s.head.rotation.set(h*.008,-s.torso.rotation.y*.4,0);for(let u=0;u<2;u++)s.legs[u].rotation.set(0,0,0),s.knees[u].rotation.set(0,0,0),s.ankles[u].rotation.set(0,0,0),s.kind==="cavalry"?(s.legs[u].rotation.set(-.72,0,(u?1:-1)*.36),s.knees[u].rotation.x=.94,s.ankles[u].rotation.x=-.22):Lc(s,u,c*Math.sin(o+u*Math.PI)*r.stride,c*Math.max(0,Math.cos(o+u*Math.PI))*.06),s.arms[u].rotation.set(-Math.sin(o+u*Math.PI)*c*.18,0,(u?1:-1)*.07),s.arms[u].position.z=-.012,s.elbows[u].rotation.set(-.23,0,0),s.wrists[u].rotation.set(0,0,0);if(r.weapon==="rifle"){s.torso.rotation.y=.12;let u=new Me().setFromAxisAngle(oa,-.025-a*.13);bn(s,1,[-.1,1.2+a*.013,.1-a*.045],[.37,.94,.08],u),_m(i,u),s.head.rotation.y=-.1}else if(["yari","naginata"].includes(r.weapon)){s.torso.rotation.y=-.08+l*.15;let u=new Me().setFromAxisAngle(oa,.38+l*.72);bn(s,1,[-.08,1.04,.14+l*.09],[.42,.88,.06],u),_m(i,u)}else if(r.weapon==="ritual")bn(s,1,[.25,1.1+a*.12,.12],[.44,.93,.1],new Me().setFromAxisAngle(oa,-a*.18)),bn(s,0,[-.2,1.19+a*.08,.22],[-.44,.98,.1],new Me().setFromAxisAngle(oa,-.22-a*.42)),s.torso.rotation.y=-a*.12;else if(r.weapon==="drum")for(let u=0;u<2;u++){let d=Math.sin(t*8.8+s.phase+u*Math.PI),f=(d+1)*.045,p=[(u?1:-1)*.16,1.065+f,.235],x=new R((u?1:-1)*.12,.94,.54).sub(new R(...p)).normalize();bn(s,u,p,[(u?1:-1)*.43,.95,.1],new Me().setFromUnitVectors(Qv,x))}else{let u=["axe","mace","nodachi"].includes(r.weapon),d=r.weapon==="kunai"||r.offhand==="blade";s.torso.rotation.y=-.08+l*(u?.48:.32),s.torso.rotation.x+=l*.04;let f=new Me().setFromEuler(new ln(-.18-l*(u?1.8:1.55),-.1-l*.34,-.14-l*.25));bn(s,1,[.28,1.09+l*.05,.18+l*.13],[.49,.92,.06],f),r.offhand==="shield"||r.weapon==="axe"?bn(s,0,[-.25,1.1,.27],[-.46,.97,.1],new Me().setFromAxisAngle(oa,-.1)):r.offhand==="fan"?bn(s,0,[-.29,1.04+a*.03,.22],[-.46,.94,.08],new Me().setFromEuler(new ln(-.17-a*.2,0,.35))):d&&bn(s,0,[-.28,1.08+l*.1,.2],[-.47,.93,.08],new Me().setFromEuler(new ln(-.2-l*1.2,.12+l*.4,.16))),s.head.rotation.y=-s.torso.rotation.y*.6}tM(s,o,e),rd(i)}var ad=new Map,ld=new Map,cd=new Map;function Wr(i,t="cloth"){let e=i+t;return cd.has(e)||cd.set(e,jn(t==="metal"?"armor":t==="wood"?"leather":"cloth",i,t==="cape"?{side:Re}:{})),cd.get(e)}function de(i,t={}){let e=i+JSON.stringify(t);return ad.has(e)||ad.set(e,new _n({color:i,roughness:.86,...t})),ad.get(e)}function eM(i){return ld.has(i)||ld.set(i,i==="sphere"?new Bo(1,12,8):i==="cylinder"?new tn(1,1,1,10):i==="cone"?new Is(1,1,12):i==="rock"?new To(1,0):i==="foliage"?new Uo(1,1):i==="bevel"?new Tc(1,1,1,1,.055):new cn(1,1,1)),ld.get(i)}function lt(i,t,e,n,s,r,o=1,a=1,l=1){let c=typeof t=="string"?eM(t):t,h=new Rt(t==="bevel"&&e.userData.characterSurface==="armor"?dm(c):c,e);return h.position.set(n,s,r),h.scale.set(o,a,l),h.castShadow=h.receiveShadow=!0,i.add(h),h}var at=(i,t,e,n,s,r,o,a)=>lt(i,"box",t,e,n,s,r,o,a),Nt=(i,t,e,n,s,r,o=r,a=r)=>lt(i,"sphere",t,e,n,s,r,o,a),Vt=(i,t,e,n,s,r,o)=>lt(i,"cylinder",t,e,n,s,r,o,r),Te=(i,t,e,n,s,r,o)=>lt(i,"cone",t,e,n,s,r,o,r);function It(i,t,e,n,s=.035){let r=new R(...e),o=new R(...n),a=o.clone().sub(r),l=Vt(i,t,...r.clone().add(o).multiplyScalar(.5).toArray(),s,a.length());return l.quaternion.setFromUnitVectors(new R(0,1,0),a.normalize()),l}var E={snow:qe("#d6e2ee","snow"),snowShade:qe("#afc6db","snow"),stone:qe("#8995a0","stone",{vertexColors:!0}),stoneDark:qe("#576677","stone",{vertexColors:!0}),wood:qe("#795b3c","wood"),woodDark:qe("#44372e","wood"),plaster:qe("#b9b4a1","plaster"),roof:qe("#344751","tile",{roughness:.74,bumpScale:.018}),red:qe("#873f39","cloth"),blue:qe("#293d53","cloth"),gold:qe("#c0a06b","metal",{metalness:.68,roughness:.36}),steel:qe("#7b8b93","metal",{metalness:.78,roughness:.32}),black:qe("#25323b","metal",{metalness:.45}),skin:de("#d5a078",{roughness:.72}),pine:de("#334e55"),pineDark:de("#243b48"),rope:de("#a99164"),window:de("#dec08c",{emissive:"#ffa34b",emissiveIntensity:.85}),ice:de("#b9d4df",{roughness:.28,metalness:.12}),roofSnow:qe("#d6e2ee","roof-snow",{alphaTest:.5}),jade:qe("#426c61","wood"),heroCloth:jn("cloth","#2d5873"),heroArmor:jn("armor","#435462"),samuraiArmor:qe("#633f35","metal",{metalness:.3}),footCloth:qe("#8c7854","cloth"),footArmor:qe("#3e514c","metal",{metalness:.2}),straw:qe("#ad925f","cloth")};function Le(i){i.updateMatrixWorld(!0);let t=new Map,e=i.matrixWorld.clone().invert();i.traverse(n=>{if(!n.isMesh)return;let s=n.geometry.clone().applyMatrix4(new he().multiplyMatrices(e,n.matrixWorld));if(s.getAttribute("uv")||s.setAttribute("uv",new Se(new Float32Array(s.getAttribute("position").count*2),2)),!s.getAttribute("color")){let r=new Float32Array(s.getAttribute("position").count*3);r.fill(1),s.setAttribute("color",new Se(r,3))}t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(s)}),i.clear();for(let[n,s]of t){let r=Uu(s.map(a=>a.index?a.toNonIndexed():a),!1);for(let a of s)a.dispose();if(!r)continue;r.userData.owned3d=!0;let o=new Rt(r,n);o.castShadow=o.receiveShadow=!n.userData.fixedArt,i.add(o)}return i}var ra=(i,t)=>ie.clamp(Math.min(i,t)*.27,.26,.68);function vm(i,t,e,n=.085){let s=new Oe(i,t,20,16);s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let m=0;m<r.count;m++)r.setY(m,aa(r.getX(m),r.getZ(m),i,t,e));if(s.computeVertexNormals(),!n)return s;let o=s.clone(),a=o.attributes.position;for(let m=0;m<a.count;m++)a.setY(m,a.getY(m)-n);let l=o.index.array;for(let m=0;m<l.length;m+=3)[l[m+1],l[m+2]]=[l[m+2],l[m+1]];o.computeVertexNormals();let c=[],h=[],u=(m,g,y)=>{c.push(...m,...g,...y);for(let v of[m,g,y])h.push(v[0],v[2])};for(let[m,g,y]of[[[-i/2,-t/2],[i/2,-t/2],20],[[i/2,-t/2],[i/2,t/2],16],[[i/2,t/2],[-i/2,t/2],20],[[-i/2,t/2],[-i/2,-t/2],16]])for(let v=0;v<y;v++){let _=T=>{let L=ie.lerp(m[0],g[0],T),U=ie.lerp(m[1],g[1],T);return[L,aa(L,U,i,t,e),U]},b=_(v/y),S=_((v+1)/y),I=[b[0],b[1]-n,b[2]],M=[S[0],S[1]-n,S[2]];u(b,S,I),u(S,M,I)}let d=new Zt;d.setAttribute("position",new Tt(c,3)),d.setAttribute("uv",new Tt(h,2)),d.computeVertexNormals();let f=s.toNonIndexed(),p=o.toNonIndexed(),x=Uu([f,p,d],!1);for(let m of[s,o,f,p,d])m.dispose();return x}function aa(i,t,e,n,s=ra(e,n)){let r=Math.min(1,Math.abs(i)/(e/2)),o=Math.min(1,Math.abs(t)/(n/2)),a=Math.max(r,o);return Math.min(s*Math.pow(1-o,.82),s*1.8*Math.pow(1-r,.8))+.105*Math.pow(Math.max(0,(a-.72)/.28),2)}function Mn(i,t,e,n){let s=ra(t,e),r=vm(t,e,s);lt(i,r,E.roof,0,n,0);for(let a=-t/2+.12;a<t/2-.08;a+=.19)for(let l of[-1,1]){let c=[];for(let h=0;h<=8;h++){let u=l*(.03+(e/2-.07)*h/8);c.push(new R(a,n+aa(a,u,t,e)+.012,u))}lt(i,new An(new yn(c),10,.022,5,!1),E.roof,0,0,0)}let o=vm(t*.985,e*.98,s,0);lt(i,o,E.roofSnow,0,n+.038,0),It(i,E.roof,[-t*.26,n+s+.045,0],[t*.26,n+s+.045,0],.056),It(i,E.snow,[-t*.26,n+s+.085,0],[t*.26,n+s+.085,0],.044);for(let a of[-1,1])It(i,E.roof,[a*t*.26,n+s+.045,0],[a*t*.35,n+s+.11,0],.044),Nt(i,E.roof,a*t*.35,n+s+.115,0,.049);for(let a of[-1,1])for(let l=-t/2+.09;l<t/2;l+=.18){let c=Vt(i,E.roof,l,n+.075,a*(e/2-.018),.035,.12);c.rotation.x=Math.PI/2,Nt(i,E.stoneDark,l,n+.075,a*(e/2+.045),.019,.019,.005)}for(let a of[-1,1]){let l=[];for(let h=0;h<=16;h++){let u=-t/2+h*t/16;l.push(new R(u,n+aa(u,a*e*.48,t,e)-.105,a*e*.48))}lt(i,new An(new yn(l),16,.045,5,!1),E.woodDark,0,0,0);let c=[];for(let h=0;h<=12;h++){let u=-e/2+h*e/12;c.push(new R(a*t*.48,n+aa(a*t*.48,u,t,e)-.105,u))}lt(i,new An(new yn(c),12,.04,5,!1),E.woodDark,0,0,0)}for(let a of[-1,1])for(let l=-t/2+.2;l<t/2;l+=.39){let c=at(i,E.jade,l,n-.065,a*(e/2-.15),.09,.08,.46);if(c.rotation.x=a*.12,Math.sin(l*31+a*7)>.15){let h=Te(i,E.ice,l,n-.12,a*(e/2-.02),.025,.12+.09*Math.abs(Math.sin(l*12)));h.rotation.z=Math.PI}}}function Fc(i,t,e){let n=Math.max(.018,Math.min(t,e)*.065),s=Math.max(3,Math.round(t/.12));lt(i,"bevel",E.woodDark,0,0,0,t,e,.075),at(i,E.window,0,e*.04,.041,t-n*3,e*.77,.012);for(let r=0;r<=s;r++)at(i,E.wood,(r/s-.5)*(t-n*2),e*.04,.06,n*.35,e*.79,.025);for(let r=0;r<5;r++)at(i,E.wood,0,e*(-.33+r*.18),.064,t-n*2,n*.35,.027);for(let r of[-1,1])lt(i,"bevel",E.wood,r*(t/2-n*.5),0,.063,n,e,.045),lt(i,"bevel",E.wood,0,r*(e/2-n*.5),.063,t,n,.045);at(i,E.woodDark,0,-e*.405,.064,t-n*2,e*.12,.035)}function Mm(i,t,e,n,s=.24,r=!1){lt(i,"bevel",E.red,t,e-.08,n,s*.58,.12,s*.52),lt(i,"bevel",E.jade,t,e-.018,n,s,.05,s*.67),lt(i,"bevel",r?E.gold:E.red,t,e+.032,n,s*.75,.045,s),Nt(i,r?E.gold:E.rope,t,e-.052,n+s*.28,.018,.012,.009)}function bm(i,t,e,n,s=0){at(i,E.stoneDark,0,s+n/2,0,t,n,e);let r=Math.max(1,Math.ceil(n/.2)),o=n/r;for(let[a,l,c]of[[t,e/2,0],[t,e/2,Math.PI],[e,t/2,Math.PI/2],[e,t/2,-Math.PI/2]]){let h=new pt;h.rotation.y=c,h.position.set(Math.sin(c)*l,s,Math.cos(c)*l),i.add(h);let u=a/Math.max(2,Math.ceil(a/.32));for(let d=0;d<r;d++)for(let f=-a/2-u*(d%2)*.5;f<a/2-.003;f+=u){let p=Math.max(-a/2,f),x=Math.min(a/2,f+u);x-p<.025||lt(h,"bevel",(d+Math.round((f+a)*17))%4?E.stone:E.stoneDark,(p+x)/2,(d+.5)*o,.015,x-p-.012,o-.012,.075)}}lt(i,"bevel",E.stone,0,s+n-.025,0,t+.065,.07,e+.065)}function hd(i=3.2,t=2.35){let e=new pt;bm(e,i+.28,t+.35,.24);for(let n=0;n<3;n++)lt(e,"bevel",E.stone,0,.04+n*.065,t/2+.45-n*.15,1.18,.08+n*.13,.33);at(e,E.plaster,0,.8,0,i-.15,1.28,t-.1),lt(e,"bevel",E.woodDark,0,.29,0,i+.18,.14,t+.18);for(let n=-i/2+.08;n<i/2;n+=.17)at(e,E.wood,n,.366,t/2-.13,.16,.024,.42);for(let n of[-i/2,0,i/2])for(let s of[-t/2,t/2])Vt(e,E.stone,n,.4,s,.11,.12),Vt(e,E.woodDark,n,.94,s,.064,1.13);for(let n of[-1,1]){for(let s=-i*.33;s<=i*.34;s+=i*.33){let r=new pt;r.position.set(s,.93,n*(t/2+.015)),r.rotation.y=n<0?Math.PI:0,e.add(r),Fc(r,i*.275,.83),Vt(r,E.gold,i*.09,-.06,.096,.022,.018).rotation.x=Math.PI/2}at(e,E.woodDark,0,1.48,n*t/2,i,.12,.12),at(e,E.wood,0,1.36,n*t/2,i,.055,.16);for(let s of[-i/2,0,i/2])Mm(e,s,1.45,n*t/2,.38),It(e,E.woodDark,[s,1.15,n*t/2],[s+.18,1.4,n*(t/2+.12)],.035)}Mn(e,i+.75,t+.75,1.54);for(let n of[-1,1]){at(e,E.woodDark,n*i/2,.85,0,.06,1.2,.07),at(e,E.woodDark,n*i/2,1.35,0,.07,.09,t);for(let s of[-t*.27,t*.27]){let r=new pt;r.position.set(n*(i/2+.01),.93,s),r.rotation.y=n*Math.PI/2,e.add(r),Fc(r,t*.33,.68)}}return e}function Oc(i=3.4,t=0){let e=new pt;lt(e,new tn(.025,.11,i*.88,7),E.woodDark,0,i*.44,0);for(let n=0;n<5;n++){let s=i*(.29+n*.13),r=i*(.34-n*.052),o=n<3?5:4;for(let a=0;a<o;a++){let l=t+a*Math.PI*2/o+n*1.7,c=r*(.85+.16*Math.sin(t*7+a*13+n)),h=new pt;h.position.y=s+.035*Math.sin(a*7+t),h.rotation.y=l,e.add(h),It(h,E.woodDark,[0,-.04,0],[0,.08,c*.92],.022),lt(h,Uc(c,c*.54,t+a*2+n*11),n%2?E.pine:E.pineDark,0,0,0),lt(h,Uc(c*.84,c*.4,t+a*2+n*11,!0),E.snow,0,.055,c*.035);for(let u of[-1,1]){let d=lt(h,Uc(c*.48,c*.22,t+a),E.pine,u*c*.13,.025,c*.44);d.rotation.y=u*.75;let f=lt(h,Uc(c*.34,c*.16,t+a,!0),E.snow,u*c*.13,.063,c*.44);f.rotation.y=u*.75}}}return Te(e,E.pine,0,i*.92,0,i*.055,i*.22),Te(e,E.snow,0,i*.96,0,i*.032,i*.17),e}function Uc(i,t,e,n=!1){let s=[],r=[],a=(h,u,d=!0)=>{let f=h/6,p=Math.pow(Math.max(0,Math.sin(f*Math.PI)),.62),x=h%2?.76:1;return[u*t*p*x*.5,Math.sin(f*Math.PI)*t*(u===0?.23:-.06)+f*i*.11+(d?0:-.045),f*i]},l=(h,u,d)=>{s.push(...h,...u,...d);for(let f of[h,u,d])r.push(f[0]/t+.5,f[2]/i)};for(let h=0;h<6;h++)for(let u of[-1,1]){let d=a(h,0),f=a(h,u),p=a(h+1,u),x=a(h+1,0);if(u<0?(l(d,f,p),l(d,p,x)):(l(d,p,f),l(d,x,p)),!n){let m=a(h,0,!1),g=a(h+1,0,!1);u<0?(l(f,m,g),l(f,g,p)):(l(f,g,m),l(f,p,g))}}let c=new Zt;return c.setAttribute("position",new Tt(s,3)),c.setAttribute("uv",new Tt(r,2)),c.computeVertexNormals(),c}function la(i=1,t=0){let e=new pt,n=[],s=[],r=[],o=[],a=[],l=[],c=24,h=[.42,.52,.58,.59,.57,.52,.44,.34,.21,.1],u=[0,.08,.2,.34,.49,.64,.77,.88,.96,1];for(let b=0;b<h.length;b++){let S=[];for(let I=0;I<c;I++){let M=I*Math.PI*2/c+t*.7,T=h[b]*(1+.065*Math.sin(M*3+t*13)+.045*Math.sin(M*5+b*.35+t));S.push(new R(Math.cos(M)*T+Math.sin(b*.5+t)*.035,u[b]+Math.sin(M*3+t*7)*.018+Math.sin(M*5+b*.3)*.012,Math.sin(M)*T*.8))}l.push(S)}let d=(b,S,I)=>{let M=S.clone().sub(b).cross(I.clone().sub(b)).normalize(),T=[b,S,I],L=T.map(N=>N.y>1&&Math.hypot(N.x,N.z)<.05),U=T.map(N=>(Math.atan2(N.z,N.x)+Math.PI)/(Math.PI*2)),z=U.filter((N,G)=>!L[G]),F=Math.max(...z)-Math.min(...z)>.5,C=U.map(N=>N+(F&&N<.5?1:0));for(let N=0;N<3;N++)L[N]&&(C[N]=(C[(N+1)%3]+C[(N+2)%3])/2);for(let N=0;N<3;N++){let G=T[N],O=.95+.04*Math.sin(G.x*7+G.y*4+G.z*5+t);n.push(...G.toArray()),r.push(O,O,O),o.push(C[N]*2,G.y*1.4)}if(M.y>.38&&(b.y+S.y+I.y)/3>.27)for(let N of[b,S,I])s.push(N.x,N.y+.025,N.z),a.push(N.x,N.z)};for(let b=0;b<l.length-1;b++)for(let S=0;S<c;S++){let I=(S+1)%c;d(l[b][S],l[b+1][S],l[b+1][I]),d(l[b][S],l[b+1][I],l[b][I])}let f=new R(Math.sin(t)*.035,1.025,0);for(let b=0;b<c;b++)d(l.at(-1)[b],f,l.at(-1)[(b+1)%c]);let p=new Zt;p.setAttribute("position",new Tt(n,3)),p.setAttribute("color",new Tt(r,3)),p.setAttribute("uv",new Tt(o,2)),p.computeVertexNormals();let x=new Map,m=p.attributes.position,g=p.attributes.normal,y=b=>[m.getX(b),m.getY(b),m.getZ(b)].map(S=>S.toFixed(5)).join(",");for(let b=0;b<m.count;b++){let S=y(b);x.has(S)||x.set(S,new R),x.get(S).add(new R().fromBufferAttribute(g,b))}for(let b=0;b<m.count;b++){let S=new R().fromBufferAttribute(g,b).lerp(x.get(y(b)).clone().normalize(),.92).normalize();g.setXYZ(b,S.x,S.y,S.z)}lt(e,p,t%2>1?E.stoneDark:E.stone,0,0,0,i,i,i);let v=new Zt;v.setAttribute("position",new Tt(s,3)),v.setAttribute("uv",new Tt(a,2));let _=em(v);return _.computeVertexNormals(),v.dispose(),lt(e,_,E.snow,0,0,0,i,i,i),e}function wm(){let i=new pt;for(let t=0;t<3;t++){let e=Nt(i,de(t%2?"#4b5258":"#5e4940"),t*.35,.23,t%2*.2,.22,.29,.22);Vt(i,E.woodDark,t*.35,.52,t%2*.2,.14,.04),Nt(i,E.snow,t*.35,.55,t%2*.2,.145,.02,.145),e.rotation.y=t}at(i,E.wood,-.42,.25,.1,.48,.5,.5);for(let t of[.1,.4])at(i,E.woodDark,-.42,t,.36,.5,.035,.025);return at(i,E.snow,-.42,.51,.1,.5,.04,.53),i}function ud(i=3,t=1.6){let e=new pt;at(e,E.stoneDark,0,t/2,0,i,t,.65);for(let n=0;n<Math.ceil(t/.25);n++)for(let s=-i/2+.16;s<i/2;s+=.42){let r=Math.min(i/2-.1,s+n%2*.18);for(let o of[-1,1])lt(e,"bevel",(n+Math.round(s*10))%3?E.stone:E.stoneDark,r,n*.25+.12,o*.335,.38,.225,.1)}for(let n=-i/2+.2;n<i/2;n+=.65)at(e,E.stone,n,t+.13,0,.4,.3,.7),at(e,E.snow,n,t+.3,0,.46,.05,.76);return at(e,E.snow,0,t+.025,0,i,.06,.69),e}function Sm(){let i=new pt;for(let s of[-1,1]){let r=ud(1.38,2.3);r.position.x=s*1.53,i.add(r)}at(i,E.stone,0,2.1,0,2,.65,.85);let t=new Tn;t.moveTo(-.8,0),t.lineTo(.8,0),t.lineTo(.8,1.15),t.absarc(0,1.15,.8,0,Math.PI,!1),t.closePath();let e=new Mi(t,{depth:.14,bevelEnabled:!1,curveSegments:14});lt(i,e,E.woodDark,0,0,.4);for(let s=0;s<9;s++){let r=-.72+s*.18,o=1.15+Math.sqrt(Math.max(0,.64-r*r));at(i,E.wood,r,o/2,.57,.15,o,.035);for(let a of[.4,.8,1.1])Nt(i,E.gold,r,a,.61,.027)}for(let s=0;s<11;s++){let r=s*Math.PI/10,o=at(i,E.stone,Math.cos(r)*.92,1.15+Math.sin(r)*.92,.48,.29,.25,.25);o.rotation.z=r-Math.PI/2}let n=hd(3.6,1.6);n.position.y=2.33,n.scale.y=.73,i.add(n);for(let s of[-1,1])It(i,E.wood,[s*2.1,.3,.8],[s*2.1,2.1,.8],.035),at(i,s<0?E.red:E.blue,s*2.1,1.53,.8,.34,.8,.025),Vt(i,E.gold,s*2.1,1.53,.82,.075,.02).rotation.x=Math.PI/2;return i}function Ci(i,t,e,n,s=!1){let r=s?1.05:.68,o=s?.38:.23;if(Vt(i,E.woodDark,t,e+r/2,n,.018,r),Nt(i,E.gold,t,e+r+.025,n,.045),at(i,s?E.blue:E.red,t+o/2,e+r*.73,n,o,r*.55,.025),s){for(let a of[.025,o-.025])at(i,E.gold,t+a,e+r*.73,n+.018,.024,r*.55,.012);at(i,E.gold,t+o/2,e+r*.73,n+.022,.055,.19,.015),at(i,E.gold,t+o/2,e+r*.73,n+.023,.17,.04,.015)}}function fn(i,t,e,n,s,{open:r=!1,railing:o=!1,gold:a=!1}={}){lt(i,"bevel",E.woodDark,0,n,0,t+.12,.12,e+.12);for(let l=-t/2+.06;l<t/2;l+=.13)at(i,E.wood,l,n+.066,0,.12,.018,e+.05);for(let l of[-t/2,t/2])for(let c of[-e/2,e/2]){Vt(i,E.stone,l,n+.1,c,.08,.1),Vt(i,E.red,l,n+s/2,c,.048,s),Mm(i,l,n+s-.03,c,.24,a);for(let h of[-1,1])It(i,E.woodDark,[l,n+s-.24,c],[l+h*.12,n+s-.08,c],.017)}for(let l of[-1,1])at(i,E.woodDark,0,n+s-.04,l*e/2,t+.12,.07,.08),at(i,E.woodDark,l*t/2,n+s-.04,0,.08,.07,e+.12);if(!r){at(i,E.plaster,0,n+s*.43,0,t-.13,s*.78,e-.14);for(let l of[-1,1]){for(let h of[-t*.27,0,t*.27]){let u=new pt;u.position.set(h,n+s*.47,l*(e/2+.015)),u.rotation.y=l<0?Math.PI:0,i.add(u),Fc(u,t*.23,s*.46)}let c=new pt;c.position.set(l*(t/2+.015),n+s*.47,0),c.rotation.y=l*Math.PI/2,i.add(c),Fc(c,e*.65,s*.46)}}if(o)for(let[l,c,h]of[[t,e/2+.08,0],[t,e/2+.08,Math.PI],[e,t/2+.08,Math.PI/2],[e,t/2+.08,-Math.PI/2]]){let u=new pt;u.position.set(Math.sin(h)*c,n,Math.cos(h)*c),u.rotation.y=h,i.add(u);for(let d=0;d<=6;d++)at(u,E.red,(d/6-.5)*l,.17,0,.025,.27,.027);at(u,a?E.gold:E.jade,0,.31,0,l+.1,.045,.055),at(u,E.woodDark,0,.075,0,l,.025,.035)}}function Pc(i,t,e,n,s=!1){if(bm(i,t,e,n),at(i,E.snow,0,n+.02,0,t+.06,.055,e+.06),s){at(i,E.woodDark,0,n*.36,e/2+.071,.42,n*.72,.025);for(let r of[-1,1])at(i,E.wood,r*.105,n*.35,e/2+.09,.035,n*.65,.025);for(let r=0;r<7;r++){let o=r*Math.PI/6,a=lt(i,"bevel",E.stone,Math.cos(o)*.265,n*.56+Math.sin(o)*.22,e/2+.1,.11,.13,.12);a.rotation.z=o-Math.PI/2}}for(let r=0;r<3;r++)lt(i,"bevel",E.stone,0,.04+r*.06,e/2+.29-r*.09,.63,.08+r*.12,.22)}function nM(i,t,e){let n=new pt,s=[.105,.145,.19][t-1],r=[.72,1.03,1.34][t-1],o=.25;n.position.set(0,e,.18),n.userData.restZ=.18,n.userData.muzzle=new R(0,.1,o+r/2+.02);let a=Vt(n,E.black,0,.1,o,s,r);a.rotation.x=Math.PI/2;for(let c of[-.27,.28,.46]){let h=Vt(n,t===3?E.gold:E.steel,0,.1,o+r*c,s*1.12,.055);h.rotation.x=Math.PI/2}let l=Vt(n,E.woodDark,0,.1,o+r/2+.006,s*.74,.014);l.rotation.x=Math.PI/2,at(n,t>1?E.steel:E.wood,0,-.1,0,.38+t*.06,.16,.54+t*.06);for(let c of[-1,1]){at(n,E.woodDark,c*(.23+t*.025),-.04,0,.07,.27,.52);let h=c*(.28+t*.025),u=-.15,d=-.13,f=.16+t*.015,p=Vt(n,E.woodDark,h,u,d,f,.07);p.rotation.z=Math.PI/2;let x=new Rt(new cs(f-.01,.021,5,12),t===3?E.gold:E.steel);x.rotation.y=Math.PI/2,x.position.set(h+c*.04,u,d),n.add(x);for(let m=0;m<3;m++){let g=m*Math.PI/3;It(n,E.wood,[h+c*.045,u+Math.sin(g)*f*.85,d+Math.cos(g)*f*.85],[h+c*.045,u-Math.sin(g)*f*.85,d-Math.cos(g)*f*.85],.016)}}i.add(n),i.userData.gun=n}function ca(i,t=1,e=null){if(!["sungnyemun","hwaseong"].includes(i))return hm(i,t,e);let n=new pt,s=kr(i,t,e,t===4);t=Math.min(3,t);let r=(a,l,c,h=!1)=>{if(Mn(n,a,l,c),h){let u=ra(a,l);It(n,E.gold,[-a*.28,c+u+.095,0],[a*.28,c+u+.095,0],.037);for(let d of[-1,1])It(n,E.gold,[d*a*.28,c+u+.095,0],[d*a*.37,c+u+.18,0],.026),Nt(n,E.gold,d*a*.37,c+u+.19,0,.037)}};if(i==="sungnyemun")if(n.userData.arrowHeight=[.72,1.2,2.53][t-1],t===1)at(n,E.stoneDark,0,.08,0,1.08,.16,.98),fn(n,.98,.82,.24,.78),r(1.46,1.29,1.06);else{let a=t===2?.64:.86,l=t===2?1.24:1.43;if(Pc(n,l,1.08,a,!0),fn(n,l-.13,.96,a+.14,.81,{railing:!0,gold:t===3}),r(l+.47,1.48,a+.99,t===3),t===3){fn(n,.97,.8,2.24,.56,{gold:!0}),r(1.46,1.26,2.83,!0);for(let c of[-1,1])Ci(n,c*.76,1.26,-.08,!0)}else for(let c of[-1,1])Ci(n,c*.64,.88,-.04)}else{let a=[.28,.61,.9][t-1],l=[1.12,1.34,1.5][t-1];if(t===1){at(n,E.stoneDark,0,a/2,0,l,a,1.05);for(let c of[-1,1])at(n,E.wood,c*.47,.36,0,.16,.12,1.1)}else{Pc(n,l,1.13,a);for(let c of[-1,1])for(let h of[-.39,.05,.48])lt(n,"bevel",E.stone,c*(l/2-.08),a+.14,h,.2,.28,.27),at(n,E.snow,c*(l/2-.08),a+.29,h,.21,.045,.28)}if(fn(n,l-.31,.78,a+.12,t===3?.94:.79,{open:!0}),r(l+.27,1.27,a+(t===3?1.12:.95),t===3),t===3){fn(n,.82,.7,2.39,.48,{gold:!0}),r(1.25,1.12,2.9,!0);for(let c of[-1,1])Ci(n,c*.79,1.35,-.13,!0)}else if(t===2)for(let c of[-1,1])Ci(n,c*.66,.84,-.08);nM(n,t,a+.43)}e&&um(n,i,e);let o=n.userData.gun;return o&&(n.remove(o),Le(o)),Le(n),o&&n.add(o),n.userData.visual=s,n.userData.labelHeight=new Qe().setFromObject(n).max.y+.16,n}function Tm(i="yi"){let t=new pt,e=new pt;t.add(e);let n=!!Xi[i],s=Or[i]?.tier===4,r=["militia","guard","elite","monk"].includes(i),o=i==="ram"?null:ui[i],a=n||!!o,l=s||["samurai","armored","cavalry","elite","guard"].includes(i),c=["sejong","dangun","ahn","onmyoji","monk"].includes(i),h=["gwak","scout","ninja","militia"].includes(i),u=Object.keys(Or).filter(P=>Or[P].tier===4).indexOf(i),d=["#723c3a","#3e4e69","#385e67","#6b4463","#506044","#544365","#2d383c","#4e5368","#374b67","#794733","#503f68","#917139"],f={yi:"#35566c",sejong:"#963f38",eulji:"#416257",gang:"#565472",gwon:"#76513b",gwak:"#ad4940",ahn:"#323638",dangun:"#c7c7ae"},p={yi:"#843e33",sejong:"#8b692d",eulji:"#a58d60",gang:"#a3a087",gwon:"#b5a17f",gwak:"#7a302e",ahn:"#303537",dangun:"#557966"},x=f[i]??o?.color??(s?d[u]:r?i==="monk"?"#b7a17a":i==="militia"?"#72856d":"#37647a":"#967b55"),m=i==="yi"?E.heroCloth:Wr(x),g=n?i==="yi"?E.heroArmor:Wr(x,c||h?"cloth":"metal"):o?Wr(x,c||h?"cloth":"metal"):l?Wr(x,"metal"):E.footArmor,y=n?E.gold:de("#9a8259"),v=jn("skin",Dc(i).skin),_=Wr("#49382c","wood"),b=new pt;b.position.y=.68,e.add(b);let S=[],I=[],M=[];for(let P of[-1,1]){let B=new pt;B.position.x=P*.14,b.add(B),S.push(B),lt(B,Ai("thigh"),m,0,0,0);let W=new pt;if(W.position.y=-.31,B.add(W),I.push(W),B.userData.knee=W,lt(W,Ai("boot"),_,0,0,0),a){let it=new pt;it.position.set(0,-.3,.035),W.add(it),M.push(it),Nt(it,_,0,.005,.05,.095,.067,.178),lt(it,"bevel",E.woodDark,0,-.045,.04,.19,.032,.32)}else Nt(W,_,0,-.295,.085,.095,.067,.178),lt(W,"bevel",E.woodDark,0,-.345,.075,.19,.032,.32);for(let it of[-.07,-.19])Vt(W,y,0,it,.009,.099,.012);if(!c&&!h){let it=lt(W,"bevel",g,0,-.11,.087,.12,.21,.045);it.rotation.x=-.07}}let T=new pt;T.position.y=.98,e.add(T),lt(T,Ai("tunic"),m,0,0,0),Vt(T,v,0,.345,-.012,.084,.17),!c&&!h&&lt(T,Ai("cuirass"),g,0,0,0);for(let P=0;P<(c||h?0:4);P++)for(let B=0;B<6;B++){let W=(B-2.5)*.22,it=Math.sin(W)*.28,ot=Math.cos(W)*.196,Lt=lt(T,"bevel",P%2?g:m,it,.16-P*.085,ot,.059,.071,.022);Lt.rotation.y=W,Nt(T,y,it,.185-P*.085,ot+.018,.006),It(T,E.rope,[it-.018,.174-P*.085,ot+.016],[it+.018,.15-P*.085,ot+.016],.003)}if(lt(T,Ai("belt"),_,0,0,0),Nt(T,y,0,-.225,.189,.054,.043,.014),c){lt(T,Ai("robe"),m,0,0,0);for(let P of[-1,1])It(T,n?E.gold:E.rope,[P*.19,.26,.12],[P*.025,-.16,.181],.017);i==="sejong"&&Nt(T,E.gold,0,.02,.184,.117,.138,.016)}if(!c){lt(T,Ai("tasset"),g,0,0,0);for(let P of[-1,1]){for(let B=0;B<3;B++)for(let W=0;W<3;W++){let it=P*(.17+W*.25),ot=-.3-B*.074,Lt=Math.sin(it)*.25,Ht=Math.cos(it)*(.19+B*.009),ne=lt(T,"bevel",y,Lt,ot,Ht+.011,.055,.008,.012);ne.rotation.y=it}It(T,_,[P*.025,-.27,.179],[P*.027,-.5,.207],.009)}}let L=[],U=[],z=[],F=[];for(let P of[-1,1]){let B=new pt;B.position.set(P*.3,.19,-.012),T.add(B),L.push(B),lt(B,Ai("upperSleeve"),m,0,0,0),Nt(B,c?m:g,0,.016,-.003,.145,.105,.133);for(let Ht=0;Ht<(c||h?0:3);Ht++){let ne=lt(B,"bevel",g,P*.022,-.035-Ht*.038,.006,.226,.045,.25);ne.rotation.z=P*.12}let W=new pt;W.position.set(P*.024,-.24,.012),B.add(W),U.push(W),B.userData.elbow=W,lt(W,Ai(c?"wideSleeve":"foreSleeve"),m,0,0,0),c&&Vt(W,y,0,-.228,.018,.147,.018);let it=new pt;it.position.set(P*.016,-.24,.026),W.add(it),z.push(it),Nt(it,v,0,-.012,0,.061,.074,.041);for(let Ht=0;Ht<3;Ht++){let ne=Nt(it,v,(Ht-1)*.027,-.046,.022,.018,.038,.023);ne.rotation.x=-.25}let ot=Nt(it,v,-P*.05,-.017,.025,.022,.043,.025);ot.rotation.z=P*.5;let Lt=new pt;Lt.position.set(-P*.04,.48,-.038),it.add(Lt),F.push(Lt),B.rotation.z=P*.09}let C=new pt;C.position.set(0,1.47,-.012),C.scale.setScalar(.88),e.add(C);let N={ball:Nt,box:at,cylinder:Vt,between:It,mesh:lt,material:de,MAT:E};if(fm(C,i,N),n&&mm(i,T,L,m,g,N),o&&xm(i,T,m,g,N),n)pm(C,i,g,N);else if(o)gm(C,i,g,m,{...N,cone:Te});else if(l&&!c&&!h){Nt(C,g,0,.13,-.015,.225,.18,.205),Vt(C,y,0,.075,0,.227,.035),at(C,y,0,.21,.17,.055,.22,.025);for(let P=0;P<10;P++){let B=P*Math.PI/5;Nt(C,y,Math.cos(B)*.228,.079,Math.sin(B)*.228,.012)}for(let P of[-1,1]){lt(C,"bevel",g,P*.2,-.05,-.02,.075,.25,.28);for(let B=0;B<3;B++)at(C,y,P*.24,.025-B*.065,-.02,.012,.012,.25)}if(n)for(let P=0;P<4;P++){let B=Nt(C,E.red,(P-1.5)*.022,.32+P*.035,-.07-P*.025,.033,.15-P*.012,.045);B.rotation.x=-.35-P*.09}else for(let P of[-1,1])It(C,y,[P*.08,.2,.12],[P*.25,.43,.11],.025);if(s){for(let B=0;B<3+u%4;B++){let W=(B/(2+u%4)-.5)*2.2;It(C,E.gold,[Math.sin(W)*.14,.22,.02],[Math.sin(W)*.4,.32+Math.cos(W)*.22,.05],.022)}let P=new pt;at(P,m,0,1.07,-.27,.32,.64,.035),It(P,E.woodDark,[0,.25,-.27],[0,1.47,-.27],.018),at(P,E.gold,0,1.09,-.245,.12,.13,.02),C.add(P)}}else if(i==="sejong"){lt(C,"bevel",E.black,0,.21,-.03,.35,.32,.31);for(let P of[-1,1])lt(C,"bevel",E.black,P*.26,.26,-.06,.23,.06,.13)}else if(i==="dangun"){Nt(C,E.snow,0,.09,-.065,.21,.22,.18),Vt(C,E.gold,0,.2,0,.21,.09);for(let P of[-1,1])Te(C,E.gold,P*.13,.34,0,.038,.25)}else if(i==="ahn")Vt(C,E.black,0,.2,0,.21,.23),Vt(C,E.black,0,.11,0,.28,.035),at(C,E.gold,0,.13,.205,.19,.027,.02),at(C,E.woodDark,0,-.085,.16,.13,.02,.018);else if(i==="onmyoji")Te(C,E.snow,0,.32,0,.19,.45),at(C,E.red,0,.31,.13,.045,.34,.025);else if(i==="monk")for(let P=0;P<9;P++){let B=P*Math.PI/8;Nt(T,E.woodDark,Math.cos(B)*.22,.16-Math.sin(B)*.15,.23,.027)}else if(h)if(i==="ninja"){Nt(C,m,0,.08,-.02,.215,.19,.195),at(C,m,0,-.08,.15,.3,.13,.05);for(let P of[-1,1])Nt(C,E.skin,P*.075,.012,.165,.033,.017,.014)}else Nt(C,E.black,0,.12,-.03,.19,.14,.17),Vt(C,i==="gwak"?E.red:E.rope,0,.08,0,.2,.055),at(C,m,.16,.04,-.2,.055,.34,.04).rotation.z=-.4;else{Te(C,E.straw,0,.21,0,.36,.24),Vt(C,E.woodDark,0,.1,0,.34,.025);for(let P=0;P<10;P++){let B=P*Math.PI/5;It(C,E.rope,[0,.33,0],[Math.cos(B)*.34,.105,Math.sin(B)*.34],.006)}It(C,E.rope,[-.18,.1,.04],[0,-.17,.1],.007),It(C,E.rope,[.18,.1,.04],[0,-.17,.1],.007)}let G=null;if(n||l){let P=new Oe(.67,.87,10,12);P.translate(0,-.36,0);let B=P.attributes.position;for(let W=0;W<B.count;W++){let it=(.075-B.getY(W))/.87,ot=B.getX(W)*(.52+Math.sqrt(Math.max(0,it))*.48);B.setXYZ(W,ot,B.getY(W)+Math.sin(ot*23)*it*.016,Math.cos(ot*31)*it*.018)}P.computeVertexNormals(),G=lt(T,P,Wr(n?p[i]:x,"cape"),0,.19,-.225),G.userData.rest=P.attributes.position.array.slice()}let O=n?Xi[i].attack:i==="teppo"?"gun":["onmyoji","monk"].includes(i)?"orb":i==="drum"?"drum":l||h?"melee":"spear";if(o)ym(i,T,F,g,{...N,cone:Te});else if(n&&O==="arrow"){for(let ot of F)ot.position.set(0,0,0);let P=at(T,E.red,0,-.18,.23,.53,.052,.028);P.rotation.z=-.12,Nt(T,y,0,-.18,.26,.075,.055,.025);let B=Vt(T,E.woodDark,.2,-.03,-.25,.09,.47);B.rotation.z=-.17;for(let ot=0;ot<4;ot++){let Lt=.16+ot*.025;It(T,E.wood,[Lt,-.1,-.27],[Lt-.04,.43+ot*.018,-.27],.006),lt(T,"bevel",E.rope,Lt-.04,.39+ot*.018,-.27,.035,.1,.015)}let W=[];for(let ot=0;ot<=20;ot++){let Lt=-Math.PI/2+ot*Math.PI/20;W.push(new R(0,Math.sin(Lt)*.43,Math.cos(Lt)*.15-.15))}let it=new yn(W);lt(F[0],new An(it,24,.017,6,!1),E.wood,0,0,0),It(F[0],_,[0,-.065,0],[0,.065,0],.023);for(let ot of[-.37,.37])It(F[0],y,[0,ot-.018,-.073],[0,ot+.018,-.073],.019);F[0].userData.bowTips=[[0,-.43,-.15],[0,.43,-.15]],It(F[1],E.wood,[0,0,0],[0,0,.6],.007),Te(F[1],E.steel,0,0,.64,.021,.08).rotation.x=Math.PI/2;for(let ot of[-1,1])lt(F[1],"bevel",E.rope,ot*.018,0,.07,.035,.01,.09).rotation.y=ot*.2;F[1].userData.muzzle=new R(0,0,.68)}else if(O==="gun")if(i==="ahn"){F[1].position.set(0,0,0);let P=Vt(F[1],E.steel,0,.025,.23,.022,.25);P.rotation.x=Math.PI/2;let B=Vt(F[1],E.black,0,.02,.08,.045,.09);B.rotation.x=Math.PI/2;for(let it=0;it<6;it++){let ot=it*Math.PI/3,Lt=Vt(F[1],E.steel,Math.sin(ot)*.037,.02+Math.cos(ot)*.037,.08,.009,.075);Lt.rotation.x=Math.PI/2}let W=lt(F[1],"bevel",E.woodDark,0,-.045,.02,.052,.11,.065);W.rotation.x=-.25,at(F[1],E.black,0,.05,.3,.013,.025,.018),F[1].userData.muzzle=new R(0,.025,.355)}else{let P=Vt(F[1],E.steel,0,-.42,.24,.025,.75);P.rotation.x=Math.PI/2,lt(F[1],"bevel",E.woodDark,0,-.49,.04,.07,.14,.11),lt(F[1],"bevel",E.black,0,-.42,.1,.075,.065,.25),F[1].userData.muzzle=new R(0,-.42,.615)}else if(O==="orb"||O==="lightning"){It(F[1],E.wood,[0,-.85,.045],[0,.75,.045],.026),Nt(F[1],i==="dangun"?E.jade:E.gold,0,.82,.045,.12);let P=de(i==="dangun"?"#a8efe6":"#f6d881",{emissive:i==="dangun"?"#438d9f":"#b28337",emissiveIntensity:.9});if(Nt(F[1],P,0,.86,.045,.07),F[1].userData.muzzle=new R(0,.86,.045),i==="onmyoji")for(let B of[-1,1])at(F[1],E.snow,B*.12,.57,.045,.11,.33,.02);if(i==="sejong")for(let B of[-1,1]){let W=new pt;W.position.set(B*.064,-.45,.08),W.rotation.z=B*.18,F[0].add(W),lt(W,"bevel",E.woodDark,0,-.02,0,.133,.035,.31),at(W,de("#d5c8a5"),0,.005,0,.12,.015,.29);for(let it=0;it<4;it++)for(let ot=0;ot<2;ot++)at(W,de("#72644e"),B*(ot-.5)*.025,.015,(it-1.5)*.048,.013,.003,.025)}if(i==="eulji")for(let B of[-1,1])It(F[1],y,[0,.75,.045],[B*.14,.94,.045],.022);if(i==="dangun"){for(let B of[.57,.69,.81]){let W=Vt(F[1],y,0,B,.045,.105,.018);W.rotation.x=Math.PI/2}for(let B of[-1,1])It(F[1],E.rope,[B*.08,.6,.045],[B*.11,.36,.045],.006),Nt(F[1],E.jade,B*.11,.35,.045,.026,.045,.018)}}else if(O==="drum"){let P=Vt(T,E.wood,0,-.06,.34,.24,.3);P.rotation.x=Math.PI/2;for(let B of[.18,.51])Vt(T,E.rope,0,-.06,B,.245,.025).rotation.x=Math.PI/2;for(let B of F)It(B,E.wood,[0,-.48,.04],[0,-.15,.4],.018)}else if(O==="melee"){let P=lt(F[1],sa(),E.steel,0,-.52,.03);if(P.rotation.z=-.12,It(F[1],_,[0,-.48,.03],[0,-.35,.03],.024),Nt(F[1],y,0,-.35,.03,.033),lt(F[1],"bevel",y,0,-.52,.03,.18,.035,.07),["gang","gwon","guard","elite","armored"].includes(i)){if(i==="gwon"){let B=new Tn;B.moveTo(-.21,.29),B.quadraticCurveTo(0,.36,.21,.29),B.lineTo(.2,-.2),B.quadraticCurveTo(0,-.34,-.2,-.2),B.closePath();let W=new Mi(B,{depth:.055,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:2,curveSegments:10});lt(F[0],W,E.wood,-.04,-.45,.14);for(let it of[-.18,0,.18])at(F[0],E.steel,-.04+it,-.43,.21,.025,.51,.015);for(let it of[-.67,-.22])at(F[0],y,-.04,it,.22,.35,.025,.015)}else Nt(F[0],g,-.04,-.45,.16,.205,.285,.065);Nt(F[0],y,-.04,-.45,.225,.07,.07,.025),It(F[0],y,[-.04,-.69,.218],[-.04,-.21,.218],.013),It(F[0],y,[-.21,-.45,.218],[.13,-.45,.218],.013)}}else It(F[1],E.wood,[0,-.85,.045],[0,.8,.045],.018),Te(F[1],E.steel,0,.93,.045,.07,.3);for(let P=0;P<2;P++)a&&(Le(M[P]),I[P].remove(M[P])),Le(I[P]),S[P].remove(I[P]),Le(S[P]),S[P].add(I[P]),a&&I[P].add(M[P]),Le(F[P]),z[P].remove(F[P]),Le(z[P]),z[P].add(F[P]),U[P].remove(z[P]),Le(U[P]),U[P].add(z[P]),L[P].remove(U[P]),Le(L[P]),L[P].add(U[P]);Le(C);for(let P of L)T.remove(P);G&&T.remove(G),Le(T);for(let P of L)T.add(P);G&&T.add(G);let $=n&&O==="arrow"?Array.from({length:2},()=>Vt(e,E.rope,0,1,0,.0045,.43)):null;if(n||o){let P=zr[i]??o;e.scale.fromArray(P.body),C.scale.set(.88/P.body[0],.88/P.body[1],.88/P.body[2])}return t.scale.setScalar(n?1.02:o?.scale??(i==="armored"?1.04:l?.9:.82)),t.userData={rig:e,hips:b,legs:S,knees:I,ankles:M,torso:T,arms:L,elbows:U,wrists:z,weapons:F,head:C,cape:G,bowStrings:$,hero:n,kind:i,weapon:O,phase:0,costumeMaterials:[m,g]},n?sd(t,0,!1,0):o&&od(t,0,!1,0),t.userData.labelHeight=new Qe().setFromObject(t).max.y+.15,t}function ha(i,t,e,n,s){let r=i.userData,o=t*8+r.phase,a=e?.5:0;if(r.vehicle){for(let h of r.wheels)h.rotation.x=t*(e?5:0);r.rig.position.y=Math.sin(t*5)*.007,r.ramBeam&&(r.ramBeam.position.z=Math.sin(ie.clamp(n/.25,0,1)*Math.PI*.8)*.18);return}if(r.rig.position.y=(r.mountOffset??0)+(e?Math.abs(Math.sin(o))*.035:Math.sin(t*2+r.phase)*.012),r.horseLegs)for(let h=0;h<r.horseLegs.length;h++)r.horseLegs[h].rotation.x=Math.sin(o+h%3*Math.PI)*a;r.legs[0].rotation.x=Math.sin(o)*a,r.legs[1].rotation.x=-Math.sin(o)*a;for(let h=0;h<2;h++)r.knees[h].rotation.x=e?Math.max(0,Math.sin(o+h*Math.PI))*.72:.04;let l=ie.clamp(n/.25,0,1),c=Math.sin(t*2.4+r.phase)*.02;for(let h of r.arms)h.rotation.y=0,h.position.z=-.012;for(let h of r.elbows)h.rotation.x=-.18;for(let h of r.wrists)h.rotation.set(0,0,0);if(r.head.rotation.y=c*.8,r.weapon==="arrow"){r.arms[0].rotation.x=-1.12+c,r.arms[0].rotation.y=.25,r.elbows[0].rotation.x=-.05,r.arms[1].rotation.x=-.85+l*.2,r.arms[1].rotation.y=-.48-l*.2,r.arms[1].position.z=-l*.09,r.elbows[1].rotation.x=-.65-l*.3;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-r.arms[h].rotation.x-r.elbows[h].rotation.x;r.torso.rotation.y=-.18-l*.12}else if(r.weapon==="gun"){r.arms[1].rotation.x=-1.36+l*.24,r.arms[0].rotation.x=-1.12+l*.1,r.arms[0].rotation.y=.55,r.elbows[0].rotation.x=-.45,r.elbows[1].rotation.x=-.12;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-(r.arms[h].rotation.x+r.elbows[h].rotation.x)*.92;r.torso.rotation.y=-.13+l*.1}else if(["orb","lightning"].includes(r.weapon)){r.arms[0].rotation.x=r.kind==="sejong"?-.62:-.18+c,r.arms[1].rotation.x=-.24-l*.9,r.arms[1].rotation.y=-l*.3,r.torso.rotation.y=-l*.22,r.elbows[0].rotation.x=r.kind==="sejong"?-.48:-.18,r.elbows[1].rotation.x=-.14-l*.55;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-(r.arms[h].rotation.x+r.elbows[h].rotation.x)*.9}else{let h=Math.sin(l*Math.PI*.85);r.arms[0].rotation.x=-Math.sin(o)*a*.5-h*.3,r.arms[1].rotation.x=Math.sin(o)*a*.5-h*1.65,r.arms[1].rotation.y=-h*.55,r.elbows[0].rotation.x=-.18-h*.13,r.elbows[1].rotation.x=-.18-h*.5,r.wrists[0].rotation.x=-(r.arms[0].rotation.x+r.elbows[0].rotation.x)*.65,r.torso.rotation.y=h*.35}if(r.hero?sd(i,t,e,n):ui[r.kind]&&od(i,t,e,n),r.cape){let h=r.cape.geometry.attributes.position,u=r.cape.userData.rest;for(let d=0;d<h.count;d++){let f=u[d*3+1],p=Math.max(0,-f/.8);h.setZ(d,u[d*3+2]-p*.13+Math.sin(t*4+u[d*3]*5+p*4)*p*(e?.09:.04))}h.needsUpdate=!0,r.cape.geometry.computeVertexNormals()}}var Xr=(i,t)=>Object.fromEntries(t.map((e,n)=>[e,{atlas:i,cell:n}])),qr={atlases:{heroes:{src:"assets/illustrated/heroes.webp",columns:4,rows:2},units:{src:"assets/illustrated/units.webp",columns:4,rows:4},bosses:{src:"assets/illustrated/bosses.webp",columns:4,rows:3},buildings:{src:"assets/illustrated/buildings.webp",columns:4,rows:3},props:{src:"assets/illustrated/props.webp",columns:4,rows:3},terrain:{src:"assets/illustrated/terrain.webp",columns:4,rows:2}},heroes:Xr("heroes",["yi","sejong","eulji","gang","gwon","gwak","ahn","dangun"]),enemies:{...Xr("units",["ashigaru","teppo","scout","samurai","ninja","onmyoji","cavalry","drum","armored","ram"]),...Xr("bosses",["konishi","kato","wakizaka","ukita","ishida","so","kuroda","todo","kuki","kurushima","shimazu","hideyoshi"])},allies:Object.fromEntries(["militia","guard","elite","monk","courier","turtle"].map((i,t)=>[i,{atlas:"units",cell:t+10}])),towers:Xr("buildings",["sungnyemun","hwaseong","bosingak","cheomseong","haeinsa","seokguram","gyeongbok","namhansan","seokbinggo","bulguksa"]),structures:{gate:{atlas:"buildings",cell:10},hall:{atlas:"buildings",cell:11}},props:Xr("props",["pine","snowPine","maple","bamboo","rock","snowRock","hanok","thatch","supplies","jangseung","cliff","wall"]),terrain:Xr("terrain",["spring","summer","autumn","winter","road","snowRoad","court","water"]),faces:{yi:[.61,.25,.37],sejong:[.44,.23,.36],eulji:[.59,.28,.37],gang:[.66,.25,.37],gwon:[.49,.25,.36],gwak:[.58,.22,.36],ahn:[.59,.22,.35],dangun:[.55,.26,.38]},portraits:{},backgrounds:{},scene:"assets/illustrated/scene.webp"};var iM={yi:[{id:"yi_white",name:"백의종군",price:60,body:"#e9e6dc",sleeve:"#dcd8cc",desc:"벼슬을 잃고도 흰옷으로 싸움터를 지킨 충무공."},{id:"yi_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 두정갑과 전설의 기운."}],sejong:[{id:"sejong_blue",name:"청룡포",price:60,body:"#2d5b8a",sleeve:"#2d5b8a",desc:"푸른 곤룡포를 입은 성군."},{id:"sejong_gold",name:"금빛 전설",price:150,gold:!0,desc:"황금 곤룡포와 전설의 기운."}],eulji:[{id:"eulji_iron",name:"고구려 철기",price:60,body:"#4a4f5c",sleeve:"#5a606e",desc:"개마무사의 검은 쇠비늘 갑옷."},{id:"eulji_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 찰갑과 전설의 기운."}],gang:[{id:"gang_crimson",name:"귀주의 붉은 별",price:60,body:"#8a2a2a",sleeve:"#9a3434",desc:"귀주대첩의 붉은 전포."},{id:"gang_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑주와 전설의 기운."}],gwon:[{id:"gwon_hill",name:"행주 산성",price:60,body:"#556b3a",sleeve:"#62783f",desc:"산성을 지키던 들녘빛 전복."},{id:"gwon_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑옷과 전설의 기운."}],gwak:[{id:"gwak_black",name:"흑의 의병",price:60,body:"#2c2b33",sleeve:"#3a3944",desc:"밤을 틈타 기습하던 검은 옷."},{id:"gwak_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 홍의와 전설의 기운."}],ahn:[{id:"ahn_militia",name:"대한의군 군복",price:60,body:"#4a5a3a",sleeve:"#3e4c30",desc:"연해주 의병 부대의 국방색 군복."},{id:"ahn_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 외투와 전설의 기운."}],dangun:[{id:"dangun_sky",name:"천제의 푸른 옷",price:60,body:"#3a6a9a",sleeve:"#4a7aaa",desc:"하늘에서 내려온 환웅의 푸른 옷."},{id:"dangun_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 신의(神衣)와 전설의 기운."}]},Bc={body:"#caa12a",sleeve:"#b8901f",boots:"#5a3a14"};function kc(i,t){return t&&(iM[i]||[]).find(e=>e.id===t)||null}var sM=176,ji=new Map,dd=new Map,zc;function Gc(i,t){let e=document.createElement("canvas");return e.width=Math.max(1,Math.round(i)),e.height=Math.max(1,Math.round(t)),e}function fd(i){return new Promise(t=>{let e=new Image;e.onload=()=>t(e),e.onerror=()=>t(null),e.src=i.startsWith("data:")?i:new URL(i,new URL("../../",import.meta.url)).href})}function rM(i,t,e,n){let s=e%t.columns,r=Math.floor(e/t.columns),o=Math.round(s*i.naturalWidth/t.columns),a=Math.round(r*i.naturalHeight/t.rows),l=Math.round((s+1)*i.naturalWidth/t.columns)-o,c=Math.round((r+1)*i.naturalHeight/t.rows)-a,h=Gc(l,c);if(h.getContext("2d").drawImage(i,o,a,l,c,0,0,l,c),!n)return h;let u=h.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,l,c).data,d=l,f=c,p=0,x=0;for(let g=0;g<c;g++)for(let y=0;y<l;y++)u[(g*l+y)*4+3]<32||(d=Math.min(d,y),p=Math.max(p,y),f=Math.min(f,g),x=Math.max(x,g));if(d>p)return h;d=Math.max(0,d-1),f=Math.max(0,f-1),p=Math.min(l-1,p+1),x=Math.min(c-1,x+1);let m=Gc(p-d+1,x-f+1);return m.getContext("2d").drawImage(h,d,f,m.width,m.height,0,0,m.width,m.height),m}function oM(i){let{width:t,height:e}=i,n=Math.floor(e*.88),s=i.getContext("2d").getImageData(0,n,t,e-n).data,r=0,o=0;for(let a=0;a<s.length;a+=4)s[a+3]>=80&&(r+=a/4%t,o++);return o?Math.max(.25,Math.min(.75,r/o/t)):.5}function Em(i,t=.5){let e=sM,n=2,s=Math.round(i.width*e/i.height),r=Gc(s+n*2,e+n*2),o=r.getContext("2d");return o.imageSmoothingQuality="high",o.shadowColor="rgba(8,18,29,0.5)",o.shadowBlur=1.5,o.drawImage(i,n,n,s,e),{img:i,canvas:r,pad:n,ax:t,h:e}}function Cm(){return typeof document>"u"?Promise.resolve():zc||(zc=(async()=>{let i=new Map(await Promise.all(Object.entries(qr.atlases).map(async([e,n])=>[e,await fd(n.src)]))),t=new Map;for(let e of["heroes","enemies","allies","towers","structures","props","terrain"])for(let[n,s]of Object.entries(qr[e])){let r=i.get(s.atlas);if(!r)continue;let o=`${s.atlas}:${s.cell}`,a=t.get(o);a||(a=rM(r,qr.atlases[s.atlas],s.cell,e!=="terrain"),t.set(o,a));let l=["heroes","enemies","allies"].includes(e);ji.set(`${e}:${n}`,Em(a,s.ax??(l?oM(a):.5)))}await Promise.all([...Object.entries(qr.backgrounds).map(async([e,n])=>{let s=await fd(n);s&&ji.set(`bg:${e}`,{img:s})}),fd(qr.scene).then(e=>{e&&ji.set("scene",{img:e})})])})(),zc)}function Am(i,t,e){i/=255,t/=255,e/=255;let n=Math.max(i,t,e),s=Math.min(i,t,e),r=(n+s)/2,o=n-s;if(!o)return[0,0,r];let a=o/(1-Math.abs(2*r-1));return[(n===i?(t-e)/o+(t<e?6:0):n===t?(e-i)/o+2:(i-t)/o+4)/6,a,r]}function aM(i,t,e){let n=t*Math.min(e,1-e),s=r=>{let o=(r+i*12)%12;return 255*(e-n*Math.max(-1,Math.min(o-3,9-o,1)))};return[s(0),s(8),s(4)]}var lM={sejong:.01,eulji:.14,gang:.75,gwon:.075,gwak:.01};function Rm(i,t=null){let e=ji.get(`heroes:${i}`);if(!e||!t)return e||null;let n=kc(i,t);if(!n)return e;let s=`${i}:${t}`;if(dd.has(s))return dd.get(s);let r=Gc(e.img.width,e.img.height),o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(e.img,0,0);let a=o.getImageData(0,0,r.width,r.height),l=n.gold?Bc.body:n.body,c=Am(...l.match(/[a-f\d]{2}/gi).map(u=>parseInt(u,16)));for(let u=Math.floor(r.height*.3);u<r.height;u++)for(let d=0;d<r.width;d++){let f=(u*r.width+d)*4;if(!a.data[f+3])continue;let[p,x,m]=Am(a.data[f],a.data[f+1],a.data[f+2]),g=Math.abs(p-lM[i]);if(!(i==="yi"?x<.38&&m<.6:i==="ahn"?x<.27&&m<.6:i==="dangun"?x<.28&&m>.42&&!(u<r.height*.49&&d>r.width*.35&&d<r.width*.65):x>.18&&Math.min(g,1-g)<.12))continue;let v=Math.max(.06,Math.min(.94,m*.8+(c[2]-.3)*.65)),_=aM(c[0],c[1]*.9,v);for(let b=0;b<3;b++)a.data[f+b]=_[b]}o.putImageData(a,0,0);let h=Em(r,e.ax);return dd.set(s,h),h}var Im=i=>ji.get(`enemies:${i}`)||null,Pm=i=>ji.get(`allies:${i}`)||null,Dm=i=>ji.get(`towers:${i}`)||null,Lm=i=>ji.get(`structures:${i}`)||null,Nm=i=>ji.get(`props:${i}`)||null;var pd={a:{path:"assets/3d/fixed/landmark-tiers-a-v1.webp",width:1402,height:1122,x:[0,287,565,841,1123,1402],y:[0,299,578,830,1122],types:["bosingak","cheomseong","haeinsa","seokguram"]},b:{path:"assets/3d/fixed/landmark-tiers-b-v1.webp",width:1402,height:1122,x:[0,284,567,846,1124,1402],y:[0,312,579,806,1122],types:["gyeongbok","namhansan","seokbinggo","bulguksa"]}};function Um(i,t,e){for(let[n,s]of Object.entries(pd)){let r=s.types.indexOf(i);if(r>=0)return{sheet:n,index:r*5+(t===4?e==="B"?4:3:t-1)}}return null}var md={yi:"assets/3d/fixed/yi-directions-v1.webp",towers:"assets/3d/fixed/tower-tiers-v2.webp",winter:"assets/3d/fixed/winter-props-v2.webp"},gd=new Map,cM=new R(0,1,0),hM=new R(1,0,0),xd=new R,Vc=new Me;function uM(i,t,e,n,s,r,o,a=48){let l=n+r,c=s+o,h=n-1,u=s-1;for(let p=s;p<s+o;p++)for(let x=n;x<n+r;x++)i[(p*t+x)*4+3]>=a&&(l=Math.min(l,x),h=Math.max(h,x),c=Math.min(c,p),u=Math.max(u,p));if(l>h)return{left:n,top:s,width:r,height:o,anchor:.5};let d=0,f=0;for(let p=Math.max(c,Math.floor(u-(u-c)*.1));p<=u;p++)for(let x=l;x<=h;x++)i[(p*t+x)*4+3]>=96&&(d+=x,f++);return{left:l,top:c,width:h-l+1,height:u-c+1,anchor:f?ie.clamp((d/f-l)/(h-l+1),.2,.8):.5}}function dM(i,t,e=()=>document.createElement("canvas")){let s=e();return s.width=t.width+12*2,s.height=t.height+12*2,s.getContext("2d").drawImage(i,t.left,t.top,t.width,t.height,12,12,t.width,t.height),{canvas:s,frame:{...t,left:12,top:12},sourceBounds:t}}async function Hc(i,t,e,n=null){return gd.has(i)||gd.set(i,new Promise((s,r)=>{let o=i.startsWith("data:")?i:new URL(i,new URL("../../",import.meta.url)).href;new Gi().load(o,a=>{let l=document.createElement("canvas");l.width=a.width,l.height=a.height;let c=l.getContext("2d",{willReadFrequently:!0});c.drawImage(a,0,0);let h=c.getImageData(0,0,a.width,a.height).data,u=[];for(let d=0;d<e;d++)for(let f=0;f<t;f++){let p=Math.round(n?n.x[f]*a.width/n.width:f*a.width/t),x=Math.round(n?n.y[d]*a.height/n.height:d*a.height/e),m=Math.round(n?n.x[f+1]*a.width/n.width:(f+1)*a.width/t),g=Math.round(n?n.y[d+1]*a.height/n.height:(d+1)*a.height/e);u.push(uM(h,a.width,a.height,p,x,m-p,g-x,n?11:48))}s({canvas:l,frames:u,width:a.width,height:a.height,isolated:n?u.map(d=>dM(l,d)):null})},void 0,r)})),gd.get(i)}var Yr=class{constructor(t){this.world=t,this.ready=!1,this.loading=!0,this.failed=!1,this.destroyed=!1,this.textures=new Map,this.materials=new Map,this.geometries=new Map,t.renderer.domElement.dataset.fixedArtStatus="loading";let e=Object.values(pd).map(r=>Hc(r.path,5,4,r).catch(o=>(console.warn("Landmark stage art unavailable; keeping base illustration.",o.message),null)));this.promise=Promise.all([Cm(),Hc(md.yi,4,4),Hc(md.towers,5,2),Hc(md.winter,3,2),...e]).then(([,r,o,a,l,c])=>{this.destroyed||(this.yi=r,this.towerFrames=o,this.winter=a,this.landmarks={a:l,b:c},this.ready=!0,t.renderer.domElement.dataset.landmarkArtStatus=l&&c?"ready":l||c?"partial":"fallback")}).catch(r=>{this.failed=!0,console.warn("Illustrated battle assets unavailable; keeping mesh fallback.",r.message)}).finally(()=>{this.loading=!1,this.destroyed||(t.renderer.domElement.dataset.fixedArtStatus=this.ready?"ready":"fallback")});let n=64,s=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=Math.hypot((o+.5-n/2)/(n/2),(r+.5-n/2)/(n/2)),l=(r*n+o)*4;s.set([255,255,255,Math.round(Math.pow(Math.max(0,1-a),1.5)*255)],l)}this.shadowTexture=new Sn(s,n,n),this.shadowTexture.needsUpdate=!0,this.shadowMaterial=new De({map:this.shadowTexture,color:"#061725",transparent:!0,opacity:.58,depthWrite:!1,toneMapped:!1}),this.shadowMaterial.userData.fixedArt=!0}texture(t){if(!this.textures.has(t)){let e=new Rs(t);e.colorSpace=ve,e.anisotropy=4,e.generateMipmaps=!0,this.textures.set(t,e)}return this.textures.get(t)}material(t,e=!1){let n=t;if(!this.materials.has(n)){let o=new De({map:this.texture(t),transparent:!0,alphaTest:.16,depthWrite:!0,toneMapped:!1,side:Re});o.userData.fixedArt=!0,this.materials.set(n,o)}let s=this.materials.get(n),r=this.world.theme;return s.color.set(r.snow?e?"#e5ebff":"#9eb8df":r.id==="autumn"?"#e7d3c2":e?"#f2e6d2":"#bacbd0"),s}geometry(t,e,n,s=e?.anchor??.5){let r=e??{left:0,top:0,width:t.width,height:t.height},o=[this.texture(t).uuid,r.left,r.top,r.width,r.height,n,s].join(":");if(!this.geometries.has(o)){let a=n*r.width/r.height,l=new Oe(a,n);l.translate(a*(.5-s),n/2,0);let c=l.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,(r.left+c.getX(h)*r.width)/t.width,1-(r.top+(1-c.getY(h))*r.height)/t.height);this.geometries.set(o,l)}return this.geometries.get(o)}image(t,e,n=null,s=!1){if(!t)return null;let r=t.img??t.canvas??t,o=new Rt(this.geometry(r,n,e,t.ax??n?.anchor??.5),this.material(r,s));return o.quaternion.copy(this.world.camera.quaternion),o.userData.fixedArt=!0,o.userData.artHeight=e,o.castShadow=!1,o.receiveShadow=!1,o}shadow(t,e=1,n=e*.65){let s=new Oe(e,n);s.rotateX(-Math.PI/2),s.userData.owned3d=!0;let r=new Rt(s,this.shadowMaterial);return r.position.y=.039,r.raycast=()=>{},t.add(r),r}castImage(t,e){let n="shadow:"+e.material.map.uuid;if(!this.materials.has(n)){let r=new De({map:e.material.map,color:"#07172e",transparent:!0,opacity:.46,alphaTest:.04,depthWrite:!1,toneMapped:!1,side:Re});r.userData.fixedArt=!0,this.materials.set(n,r)}let s=new Rt(e.geometry,this.materials.get(n));return s.matrixAutoUpdate=!1,s.raycast=()=>{},s.userData.fixedArt=!0,t.add(s),this.projectShadow(s,e),s}projectShadow(t,e,n=null){let s=new he().set(1,.5,0,0,0,0,0,.042,0,-.75,1,0,0,0,0,1),r=new he().makeRotationFromQuaternion(this.world.camera.quaternion).scale(e.scale);t.matrix.copy(s).multiply(r),n&&t.matrix.premultiply(new he().makeRotationFromQuaternion(n.quaternion.clone().invert())),t.geometry=e.geometry,t.matrixWorldNeedsUpdate=!0}prop(t,e=2,n=0){let s={snowPine:n>=.5?1:0,snowRock:2,hanok:n>=.5?4:3,cliff:5}[t],r=this.world.theme.snow&&s!==void 0,o=r?this.winter:t==="gate"?Lm("gate"):Nm(t);if(!o)return new pt;let a=new pt,l=this.image(o,e,r?o.frames[s]:null);return a.add(l),this.shadow(a,e*.55,e*.3),this.castImage(a,l),a}hideModel(t){for(let e of t.children)e!==t.userData.hp&&e!==t.userData.ownerRing&&(e.visible=!1)}unitArt(t,e,n){let s=e?t.heroId:n?t.kind:t.type;return e&&s==="yi"&&!t.skin?this.yi:e?Rm(s,t.skin):n?Pm(s):Im(s)}unitProxy(t,e=!1){if(!this.ready||!this.unitArt(t,!1,e))return null;let n=new pt,s=new pt,r=new pt;return n.add(s,r),r.userData.muzzle=new R,n.userData.rig=s,n.userData.weapons=[null,r],n.userData.illustrationProxy=!0,n}attachUnit(t,e,n,s){if(!this.ready||t.userData.fixedImage)return;let r=n?e.heroId:s?e.kind:e.type,o=this.unitArt(e,n,s);if(!o)return;let a=n?1.85:["ram","turtle","courier","cavalry"].includes(r)?1.5:1.36;this.hideModel(t);let l=this.image(o,a,o===this.yi?this.yi.frames[0]:null,!0);l.material=l.material.clone(),l.material.userData.owned3d=!0,t.add(l);let c=n?new Rt(l.geometry,new De({map:l.material.map,color:"#7cb4e6",transparent:!0,opacity:.5,alphaTest:.18,depthTest:!0,depthFunc:os,depthWrite:!1,toneMapped:!1,side:Re})):null;c&&(c.material.userData.owned3d=!0,c.renderOrder=30,c.raycast=()=>{},t.add(c)),this.shadow(t,n?.85:.65,.5);let h=this.castImage(t,l);t.userData.fixedImage={image:l,hint:c,height:a,art:o,kind:r,shadow:h},t.userData.labelHeight=a+.18}attachTower(t,e,n,s){if(!this.ready||t.userData.fixedImage)return;let r=["sungnyemun","hwaseong"].includes(e),o=Um(e,n,s),a=n===4?s==="B"?4:3:n-1,l=a+(e==="hwaseong"?5:0),c=o?this.landmarks?.[o.sheet]?.isolated[o.index]:null,h=r?this.towerFrames:c??Dm(e);if(!h)return;let u=r?h.frames[l]:c?.frame??null,d=r||!!c,f=1.2;this.hideModel(t);let p=this.image(h,f,u);if(t.add(p),this.shadow(t,1,.63),this.castImage(t,p),t.userData.fixedImage={image:p,height:f,kind:e,dedicated:d,frameIndex:r?l:o?.index},t.userData.labelHeight=f+.2,!d&&n>1)for(let x=0;x<n-1;x++){let m=this.prop("jangseung",.28);m.position.set((x-(n-2)/2)*.22,0,.25),t.add(m)}}updateUnit(t,e,n,s,r){let o=t.userData.fixedImage;if(!o)return;let{image:a,hint:l,art:c,height:h}=o;Vc.copy(t.quaternion).invert(),a.quaternion.copy(this.world.camera.quaternion).premultiply(Vc);let u=hM.clone().applyQuaternion(this.world.camera.quaternion),d=cM.clone().applyQuaternion(this.world.camera.quaternion);xd.set(Math.sin(t.rotation.y),0,Math.cos(t.rotation.y));let f=xd.dot(u),p=xd.dot(d);if(t.userData.illustrationProxy&&t.userData.weapons[1].position.copy(d).multiplyScalar(h*.6).addScaledVector(u,f<0?-.18:.18).applyQuaternion(Vc),c===this.yi){let x=p>=0?f>=0?1:2:f>=0?0:3,m=s>0?3:n?1+Math.floor(r*5.5+t.userData.phase)%2:0;a.geometry=this.geometry(c.canvas,c.frames[m*4+x],h),a.scale.x=1,o.pose=["idle","walk-left","walk-right","attack"][m],o.facing=x,this.world.renderer.domElement.dataset.yiPose=o.pose,this.world.renderer.domElement.dataset.yiFacing=String(x)}else a.scale.x=f<0?-1:1;a.position.y=n?Math.abs(Math.sin(r*8+t.userData.phase))*.025:0,this.projectShadow(o.shadow,a,t),a.material.opacity=e.stealth&&!e.revealed?.25:1,l&&(l.geometry=a.geometry,l.quaternion.copy(a.quaternion),l.position.copy(a.position),l.scale.copy(a.scale),l.material.color.set(e.owner===1?"#efaa96":"#7cb4e6"),l.visible=!e.dead),t.userData.hp&&t.userData.hp.position.copy(d).multiplyScalar(h+.13).applyQuaternion(Vc),this.world.renderer.domElement.dataset.fixedArt="true"}anchor(t,e=.12){let n=t?.userData.fixedImage;return n?new R(0,n.height+e,0).applyQuaternion(this.world.camera.quaternion).add(t.position):null}towerMuzzle(t){let e=t?.userData.fixedImage;return e?this.anchor(t,-e.height*.45):null}dispose(){this.destroyed=!0;for(let t of this.textures.values())t.dispose();for(let t of this.materials.values())t.dispose();for(let t of this.geometries.values())t.dispose();this.shadowMaterial.dispose(),this.shadowTexture.dispose()}};var Fm={type:"change"},_d={type:"start"},Bm={type:"end"},Wc=new Bi,Om=new gn,fM=Math.cos(70*ie.DEG2RAD),Ze=new R,Cn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yd=1e-6,Xc=class extends Wo{constructor(t,e=null){super(t,e),this.state=be.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Me,this._lastTargetPosition=new R,this._quat=new Me().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ar,this._sphericalDelta=new Ar,this._scale=1,this._panOffset=new R,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new R,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mM.bind(this),this._onPointerDown=pM.bind(this),this._onPointerUp=gM.bind(this),this._onContextMenu=wM.bind(this),this._onMouseWheel=_M.bind(this),this._onKeyDown=vM.bind(this),this._onTouchStart=MM.bind(this),this._onTouchMove=bM.bind(this),this._onMouseDown=xM.bind(this),this._onMouseMove=yM.bind(this),this._interceptControlDown=SM.bind(this),this._interceptControlUp=TM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=be.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fm),this.update(),this.state=be.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Cn:n>Math.PI&&(n-=Cn),s<-Math.PI?s+=Cn:s>Math.PI&&(s-=Cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ze.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<fM?this.object.lookAt(this.target):(Om.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(Om,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yd||this._lastTargetPosition.distanceToSquared(this.target)>yd?(this.dispatchEvent(Fm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Cn/60*this.autoRotateSpeed*t:Cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let r=Ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new st,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function pM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function gM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bm),this.state=be.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=be.DOLLY;break;case Hn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}break;case Hn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(_d)}function yM(i){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _M(i){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(i.preventDefault(),this.dispatchEvent(_d),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bm))}function vM(i){this.enabled!==!1&&this._handleKeyDown(i)}function MM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=be.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=be.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(_d)}function bM(i){switch(this._trackPointer(i),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=be.NONE}}function wM(i){this.enabled!==!1&&i.preventDefault()}function SM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vd(i){let t=i.rng=i.rng+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zn(i){let t={rng:i>>>0};return()=>vd(t)}var On=24,Bn=14;function He(i){let t=Zn(i.seed||1),e=Array.from({length:Bn},()=>Array(On).fill(".")),n=(l,c)=>l>=0&&c>=0&&l<On&&c<Bn,s=(l,c,h)=>n(l,c)&&(e[c][l]=h),r=(l,c)=>n(l,c)?e[c][l]:"X";if(i.land){for(let l=0;l<Bn;l++)for(let c=0;c<On;c++)s(c,l,"W");for(let[l,c,h,u]of i.land)for(let d=c;d<=u;d++)for(let f=l;f<=h;f++)s(f,d,".")}if(i.sea){let{side:l,depth:c}=i.sea,h=l==="left"||l==="right"?Bn:On,u=c;for(let d=0;d<h;d++){u=Math.max(1,Math.min(c+2,u+(t()<.5?-1:1)*(t()<.55?1:0)));for(let f=0;f<u;f++)l==="left"?s(f,d,"W"):l==="right"?s(On-1-f,d,"W"):l==="top"?s(d,f,"W"):s(d,Bn-1-f,"W")}}if(i.river){let{axis:l,at:c,w:h=2}=i.river,u=c,d=l==="v"?Bn:On;for(let f=0;f<d;f++){f%3===0&&t()<.5&&(u+=t()<.5?-1:1),u=Math.max(c-1,Math.min(c+1,u));for(let p=0;p<h;p++)l==="v"?s(u+p,f,"W"):s(f,u+p,"W")}}if(i.mountains){let{side:l,depth:c=1,from:h=0,to:u=l==="left"||l==="right"?Bn-1:On-1}=i.mountains;for(let d=h;d<=u;d++){let f=c+(t()<.35?1:0);for(let p=0;p<f;p++)l==="top"?s(d,p,"M"):l==="bottom"?s(d,Bn-1-p,"M"):s(l==="left"?p:On-1-p,d,"M")}}if(i.wall){let{side:l,w:c=3}=i.wall;for(let h=0;h<Bn;h++)for(let u=0;u<c;u++)l==="right"?s(On-1-u,h,"K"):l==="left"&&s(u,h,"K");if(l==="top"||l==="bottom")for(let h=0;h<On;h++)for(let u=0;u<c;u++)s(h,l==="top"?u:Bn-1-u,"K")}for(let[l,c]of i.houses||[])s(l,c,"H");for(let[l,c]of i.jang||[])s(l,c,"J");let o=i.trees??.45;for(let l=0;l<On;l++)for(let c of[0,Bn-1])r(l,c)==="."&&t()<o&&s(l,c,"T");for(let l=0;l<Bn;l++)for(let c of[0,On-1])r(c,l)==="."&&t()<o*.6&&s(c,l,"T");let a=(l,c)=>{for(let h=0;h<l;h++){let u=Math.floor(t()*On),d=Math.floor(t()*Bn);r(u,d)==="."&&s(u,d,c)}};return a(i.inner??4,"T"),a(i.rocks??5,"R"),a(i.flowers??9,"f"),e.map(l=>l.join(""))}var AM=[["ash",1,0,1,.7],["sco",1,0,.75,.45],["tep",1,0,1.25,.9],["sam",2,1,5,1.6],["cav",2,2,4.4,1.1],["nin",2,3,4.6,1.2],["onm",2,4,5.2,2.2],["drm",2,4,5.4,3],["arm",3,6,13,2.6],["ram",3,7,17,3.6]];function km({seed:i,n:t,level:e,weights:n={},boss:s={},paths:r=1,budget:o=1}){let a=Zn(i),l=[];for(let c=1;c<=t;c++){let h=c/t,u=(12+e*1.6)*(.45+h*1.35)*o,d=AM.filter(([,y,v])=>v<=e&&(y===1||c>=(y===2?3:Math.ceil(t*.35)))),f=[],p=u,x=0,m=c<3?2:2+Math.floor(a()*2)+(h>.6?1:0);for(let y=0;y<m&&p>.5;y++){let v=d.map(N=>[N,(n[N[0]]??1)*(N[1]===1?1.4-h*.6:N[1]===2?.6+h:.3+h*1.2)]),_=v.reduce((N,[,G])=>N+G,0),b=a()*_,S=v[0][0];for(let[N,G]of v)if(b-=G,b<=0){S=N;break}let[I,M,,T,L]=S,U=y===m-1?p:p*(.3+a()*.35),z=Math.max(1,Math.round(U/T));p-=z*T;let F=Math.round(L*(1.1-h*.35)*10)/10,C=r>1?a()<.75?"a":String(Math.floor(a()*r)):null;f.push(`${I}${z>1?`*${z}@${F}`:""}${x?`+${x}`:""}${C!==null?`>${C}`:""}`),x+=Math.round(2+a()*4+(M>=2?2:0))}let g=s[c];if(g){let[y,v]=Array.isArray(g)?g:[g,0];f.unshift(`${y}${r>1?`>${v}`:""}`);for(let _=1;_<f.length;_++)f[_]=f[_].includes("+")?f[_].replace(/\+(\d+)/,(b,S)=>`+${+S+4}`):f[_].replace(/(>[0-9a])?$/,b=>`+4${b||""}`)}l.push(f.join(", "))}return l}var Gm=24,Vm=14;var EM=[{id:"s1",name:"부산진 전투",date:"1592년 4월",season:"spring",base:"부산진성",desc:"임진년 4월, 왜군 선봉이 부산포에 상륙했다. 바다에서 올라오는 적을 부산진성 앞에서 막아내라.",region:{x:201,y:378},startGold:240,hpBase:1,hpGrowth:.1,unlockTowers:["haeinsa"],grid:["TTT..TT.....MMMMM...TTMM","T.........f.......R...TM","......................TT","..........R........f....","WW.....f................","WWW.......f.........T...","WWW....R.............R..","WWWW...........f......HH","WWWW..T..............fH.","WWWW.......f...........J","WWWWW..............R....","WWWWW...................","WWWWWW......T.....f....H","WWWWWWWTT...TT.....HHTTT"],paths:[[[-1,2],[5,2],[5,10],[11,10],[11,4],[17,4],[17,11],[23,11]]],waves:["ash*8@1.3","ash*10@1.1, sco*4@0.8+8","ash*8@1, tep*5@1.4+4","sco*10@0.6, ash*10@1+6","ash*12@0.9, sam*1+10","tep*8@1.1, ash*10@0.8+3, sco*6@0.5+12","sam*3@3, ash*12@0.8+2","drm*1, ash*14@0.6+1, sco*8@0.5+10","tep*12@0.8, sam*3@2.5+6","ash*18@0.6, sam*4@2+4, drm*2@6+8","sco*16@0.4, tep*10@0.8+6, sam*5@1.8+12","konishi, ash*16@0.7+2, sam*4@3+8"]},{id:"s2",name:"탄금대 전투",date:"1592년 4월",season:"summer",base:"탄금대 본진",desc:"신립 장군이 강을 등지고 배수진을 친 탄금대. 두 갈래로 몰려와 하나로 합쳐지는 왜군을 막아라.",region:{x:159,y:292},startGold:260,hpBase:1.12,hpGrowth:.1,unlockTowers:["seokguram"],grid:["TT....TTT....MMMMMM..TWW","T...........f........WWW","....f..R..............WW","......................WW","..T.......f.....R.....WW","......R..............WWW","..f..........f.......WWW","......................WW","..T.....R.......f.....WW","....f.......T........WWW","......................WW","........f...........TWWW","..R...........f.....TWWW","TTT...TTTT...TTTT...TTWW"],paths:[[[-1,3],[7,3],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]],[[-1,11],[7,11],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]]],waves:["ash*10@1>a","ash*8@1>0, sco*8@0.6>1+3","tep*10@1>a, ash*8@0.9>a+5","cav*3@2>a, ash*12@0.8>a+3","sam*3@2.5>a, sco*10@0.5>a+4","nin*3@2>a, ash*14@0.7>a+3","drm*2@4>a, ash*16@0.6>a+1, tep*8@1>a+8","arm*1>0, sam*3@2>a+4, sco*10@0.5>a+8","cav*6@1.2>a, nin*4@1.5>a+8","ash*20@0.5>a, sam*5@1.8>a+5, drm*2@5>a+10","arm*2@5>a, tep*14@0.7>a+3","nin*6@1.2>a, cav*6@1.2>a+6, sco*14@0.4>a+12","sam*8@1.5>a, drm*3@4>a+2, ash*20@0.5>a+6","arm*4@3>a, cav*8@1>a+6, nin*6@1>a+12","kato>0, sam*6@2>a+4, ash*20@0.5>a+8, arm*2@5>a+14"]},{id:"s3",name:"한산도 대첩",date:"1592년 7월",season:"sea",base:"한산 수영",desc:"한산도 앞바다. 학익진에 쫓긴 왜 수군이 섬으로 상륙한다. 좁은 땅을 지혜롭게 써라.",region:{x:176,y:396},startGold:300,hpBase:1.12,hpGrowth:.1,unlockTowers:["gyeongbok"],grid:["WWWW..TT..WWW...TT.WWWWW","....................WWWW","WW.....f......R.....WWWW","WWW.f....WWW.....f..WWWW","WW..R...WWWWW.......WWWW","WW..................WWWW","WWW.....f....T.......WWW","WWW..WWW........WW...WWW","WWW..WWWW...f..WWW....WW","WWW.................f.WW","WWWWW..R....f.....T...WW","WWWWWWW..f.....WW.....HW","WWWWWWWWW...T.WWW.......","WWWWWWWWWWW....WWWT..HHH"],paths:[[[-1,1],[19,1],[19,5],[4,5],[4,9],[19,9],[19,12],[23,12]]],waves:["ash*12@0.9","sco*12@0.5, ash*8@1+6","onm*1, ash*14@0.7+2","tep*12@0.8, sam*2@3+6","cav*5@1.2, drm*1+6, ash*12@0.6+7","ram*1, sco*12@0.4+4","nin*5@1.3, onm*2@3+4, ash*14@0.6+6","sam*6@1.5, tep*12@0.7+5","arm*2@4, onm*2@4+2, ash*18@0.5+6","ram*2@6, cav*8@1+4, drm*2@5+8","nin*8@0.9, sam*6@1.4+6","arm*4@2.5, onm*3@3+3, tep*16@0.5+8","cav*12@0.7, drm*3@3+2, sco*20@0.3+8","ram*3@5, sam*8@1.2+4, nin*6@1+12","wakizaka, onm*3@3+3, arm*3@4+6, sam*8@1.2+10"]},{id:"s4",name:"행주대첩",date:"1593년 2월",season:"winter",base:"행주산성",desc:"눈 덮인 행주산성. 두 갈래 길로 3만 대군이 몰려온다. 협동이라면 한 사람이 한 길씩!",region:{x:110,y:270},startGold:390,hpBase:1.2,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT....MMMM....TTMMM","T.......f.........R...MM","..............T.......MM","....R...........f.....MM","..f.......T..........RMM","......................MM","..T.......f....R.......M","......R................M","...f..........T.......MM","...R..................MM","..T...........f......WWM","......f..........T..WWWW","...................WWWWW","TTT..TTT...TTTT..WWWWWWW"],paths:[[[-1,2],[9,2],[9,5],[16,5],[16,7],[21,7]],[[-1,12],[6,12],[6,9],[18,9],[18,7],[21,7]]],waves:["ash*8@1>0, ash*8@1>1","sco*8@0.6>0, tep*6@1.2>1+2","sam*2@3>0, ash*12@0.8>1+2","cav*4@1.5>1, ash*12@0.8>0+3","nin*4@1.5>0, onm*2@3>1+2, ash*12@0.7>a+6","arm*1>0, arm*1>1+2, sco*14@0.5>a+6","drm*2@3>a, sam*6@1.5>a+2","ram*1>0, cav*6@1>1+3, tep*12@0.6>a+8","onm*4@2>a, arm*3@3>a+3, ash*20@0.5>a+6","nin*8@0.9>a, sam*6@1.4>a+6, drm*2@4>a+10","ram*2@4>1, cav*10@0.8>0+2, sco*16@0.35>a+10","arm*5@2.5>a, onm*4@2.5>a+4, tep*16@0.5>a+8","sam*10@1.1>a, nin*8@0.9>a+6, drm*3@3>a+10","ram*3@4>a, arm*4@3>a+3, cav*10@0.7>a+10","onm*6@1.8>a, sam*12@0.9>a+3, ash*30@0.3>a+8","nin*14@0.6>a, arm*6@2>a+6, drm*4@3>a+10","ram*4@3.5>a, cav*14@0.6>a+4, sam*10@1>a+10, onm*4@2>a+14","ukita>0, arm*6@2.5>a+3, sam*12@1>a+8, nin*10@0.8>a+14"]},{id:"s5",name:"한양 수복",date:"1593년 4월",season:"autumn",base:"경복궁",desc:"도성을 되찾는 날. 한양으로 향하는 두 길을 모두 지키고, 침략을 꾸민 책사를 물리쳐라.",region:{x:133,y:255},startGold:450,hpBase:1.26,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT..MMMMM....TTTKKK","T......f.........R...KKK","..R.......f..........KKK","......T..............KKK","...........f.........KKK","..f...R........f.....KKK",".....................KKK","...T.........R.......KKK","..................f..KKK",".f......T..........T.KKK","...R..............f..KKK",".......f............TKKK","..T..............f...KKK","TTT..TTTT..TTTT...TTTKKK"],paths:[[[3,-1],[3,4],[9,4],[9,1],[15,1],[15,6],[20,6]],[[-1,11],[5,11],[5,8],[12,8],[12,12],[18,12],[18,6],[20,6]]],waves:["ash*12@0.8>a","sco*14@0.5>a, tep*8@1>a+5","sam*4@2>a, ash*14@0.6>a+3","cav*4@1.4>a, onm*2@3>a+5","nin*4@1.4>a, drm*1>a+3, ash*16@0.5>a+6","arm*3@3>a, tep*14@0.6>a+4","ram*2@4>a, sam*6@1.4>a+4, sco*16@0.35>a+10","onm*3@2>a, cav*8@0.9>a+3, nin*5@1.1>a+10","arm*5@2.4>a, drm*3@3>a+2, ash*24@0.4>a+6","konishi>0, sam*8@1.2>a+3, tep*16@0.5>a+8","nin*12@0.7>a, cav*10@0.8>a+6","ram*4@3>a, onm*5@2>a+3, sam*10@1>a+8","arm*8@1.8>a, drm*4@3>a+2, sco*24@0.3>a+8","cav*16@0.6>a, nin*12@0.7>a+6, onm*4@2>a+12","kato>1, arm*6@2>a+3, sam*12@0.9>a+8","ram*5@3>a, sam*14@0.8>a+4, tep*20@0.4>a+12","nin*16@0.5>a, onm*6@1.6>a+4, cav*14@0.6>a+10","arm*10@1.4>a, drm*5@2.5>a+3, sam*16@0.7>a+8","wakizaka>0, ukita>1+4, ram*4@3>a+8, nin*14@0.6>a+12","ishida>0, arm*8@2>a+4, sam*16@0.8>a+10, onm*6@2>a+16, cav*16@0.6>a+20"]}],CM={s6:{id:"s6",name:"동래성 전투",date:"1592년 4월",season:"spring",base:"동래성",desc:'"싸워 죽기는 쉬우나 길을 내주기는 어렵다." 송상현 부사가 지킨 동래성. 성벽 앞 굽은 길에서 왜군을 막아라.',region:{x:214,y:364},startGold:250,hpGrowth:.1,grid:He({seed:6,mountains:{side:"top",depth:1,from:0,to:8},wall:{side:"right",w:3},houses:[[17,1],[18,1],[17,12],[18,12]],jang:[[20,4]]}),paths:[[[-1,3],[5,3],[5,10],[10,10],[10,2],[15,2],[15,11],[19,11],[19,6],[20,6]]],gen:{level:1,n:12,boss:{12:"so"},weights:{sco:1.4}}},s7:{id:"s7",name:"상주 전투",date:"1592년 4월",season:"spring",base:"상주 진영",desc:"북천을 건너 두 갈래로 몰려오는 왜군. 다리목에서 하나로 합쳐지는 길을 노려라.",region:{x:172,y:313},startGold:260,hpGrowth:.1,grid:He({seed:7,river:{axis:"v",at:10,w:2},mountains:{side:"right",depth:1},houses:[[20,11],[21,11]],jang:[[20,6]]}),paths:[[[-1,2],[7,2],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]],[[-1,11],[7,11],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]]],gen:{level:2,n:14,boss:{14:["kuroda",0]}}},s8:{id:"s8",name:"옥포 해전",date:"1592년 5월",season:"sea",base:"옥포 수영",desc:"이순신 함대의 첫 승리. 옥포 앞바다에서 뭍으로 기어오르는 왜 수군을 포구에서 쓸어버려라.",region:{x:189,y:390},startGold:280,hpGrowth:.1,grid:He({seed:8,land:[[0,0,17,13],[18,3,20,10]],trees:.3,houses:[[1,11],[2,12],[1,12]]}),paths:[[[24,1],[15,1],[15,5],[9,5],[9,1],[3,1],[3,9],[12,9],[12,12],[4,12]]],gen:{level:3,n:14,boss:{14:"todo"},weights:{sco:1.3,tep:1.3}},unlockTowers:["namhansan"]},s9:{id:"s9",name:"사천 해전",date:"1592년 5월",season:"sea",base:"사천 포구",desc:"거북선이 처음 바다에 나선 날. 두 물길로 들어오는 왜선을 막아내라.",region:{x:160,y:381},startGold:290,hpGrowth:.1,grid:He({seed:9,sea:{side:"bottom",depth:2},mountains:{side:"top",depth:1,from:6,to:17},houses:[[1,3],[1,4]]}),paths:[[[24,3],[17,3],[17,7],[9,7],[9,3],[3,3],[3,6],[1,6]],[[24,10],[14,10],[14,7],[9,7],[9,3],[3,3],[3,6],[1,6]]],gen:{level:4,n:15,boss:{8:["todo",1],15:["kuki",0]},weights:{cav:.6}}},s10:{id:"s10",name:"평양성 전투",date:"1592년 6월",season:"summer",base:"평양성",desc:"대동강을 사이에 둔 평양성. 강을 건너오는 다리 두 곳을 모두 지켜라.",region:{x:92,y:182},startGold:300,hpGrowth:.1,grid:He({seed:10,river:{axis:"h",at:6,w:2},wall:{side:"left",w:2},houses:[[3,1],[4,1],[3,12]]}),paths:[[[24,11],[17,11],[17,2],[8,2],[8,9],[2,9]],[[24,2],[20,2],[20,11],[12,11],[12,9],[2,9]]],gen:{level:5,n:15,boss:{15:["konishi",0]}}},s11:{id:"s11",name:"부산포 해전",date:"1592년 9월",season:"sea",base:"부산포",desc:"왜군의 본거지 부산포를 들이친다. 끝없이 쏟아지는 왜 수군을 길고 긴 해안길에서 버텨라.",region:{x:214,y:386},startGold:320,hpGrowth:.1,grid:He({seed:11,sea:{side:"left",depth:3},sea2:null,mountains:{side:"right",depth:1},houses:[[20,12],[21,12]]}),paths:[[[4,-1],[4,3],[12,3],[12,1],[19,1],[19,6],[7,6],[7,10],[16,10],[16,12],[20,12]]],gen:{level:6,n:16,boss:{9:"todo",16:"kuki"},weights:{sco:1.2,nin:1.2}}},s12:{id:"s12",name:"진주대첩",date:"1592년 10월",season:"autumn",base:"진주성",desc:"김시민 목사와 3,800 군사가 3만 대군을 막아낸 진주성. 남강을 등진 성으로 세 방향에서 몰려온다.",region:{x:157,y:368},startGold:330,hpGrowth:.1,grid:He({seed:12,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[20,3],[20,10]]}),paths:[[[-1,2],[4,2],[4,5],[9,5],[9,1],[15,1],[15,5],[18,5],[18,7],[21,7]],[[-1,9],[4,9],[4,11],[11,11],[11,8],[15,8],[15,10],[18,10],[18,7],[21,7]]],gen:{level:7,n:16,boss:{16:["kuroda",1]},weights:{ram:1.5,drm:1.3}}},s13:{id:"s13",name:"평양성 탈환",date:"1593년 1월",season:"winter",base:"평양 본진",desc:"조명 연합군의 반격. 눈 덮인 평양 들판에서 성을 빠져나와 역습하는 왜군을 막아라.",region:{x:100,y:176},startGold:340,hpGrowth:.1,grid:He({seed:13,mountains:{side:"bottom",depth:1},river:{axis:"v",at:15,w:1},houses:[[1,6],[1,7]]}),paths:[[[24,3],[19,3],[19,9],[12,9],[12,3],[6,3],[6,7],[2,7]],[[24,11],[16,11],[16,9],[12,9],[12,3],[6,3],[6,7],[2,7]]],gen:{level:8,n:16,boss:{8:["so",1],16:["konishi",0]},weights:{arm:1.4}},unlockTowers:["seokbinggo"]},s14:{id:"s14",name:"진주성 2차 전투",date:"1593년 6월",season:"summer",base:"촉석루",desc:"복수를 벼른 왜군 대군이 다시 진주성으로. 세 길로 몰려오는 적을 촉석루 앞에서 막아라.",region:{x:166,y:372},startGold:380,hpGrowth:.1,grid:He({seed:14,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[19,3],[19,10]]}),paths:[[[-1,1],[6,1],[6,4],[11,4],[11,1],[16,1],[16,4],[19,4],[19,6],[21,6]],[[-1,11],[6,11],[6,8],[11,8],[11,11],[16,11],[16,8],[19,8],[19,6],[21,6]],[[-1,6],[21,6]]],gen:{level:10,n:18,boss:{9:["kuroda",0],18:["kato",1]},weights:{ram:1.3,sam:1.3}},unlockTowers:["bulguksa"]},s15:{id:"s15",name:"칠천량의 밤",date:"1597년 7월",season:"sea",base:"한산 수영",desc:"칠천량에서 조선 수군이 무너진 밤. 살아남은 배를 지키며 밤바다로 밀려드는 왜군을 버텨라.",region:{x:184,y:386},startGold:380,hpGrowth:.1,night:!0,grid:He({seed:15,land:[[0,0,23,3],[2,5,21,7],[0,10,23,13]],trees:.3}),paths:[[[24,1],[2,1],[2,6],[21,6],[21,11],[5,11]]],gen:{level:11,n:16,boss:{8:"wakizaka",16:"todo"},weights:{nin:1.8,sco:1.2}}},s16:{id:"s16",name:"남원성 전투",date:"1597년 8월",season:"summer",base:"남원성",desc:"정유재란, 호남으로 가는 길목 남원성. 성을 둘러싼 왜군이 네 모퉁이를 돌아 성문으로 몰려온다.",region:{x:147,y:363},startGold:400,hpGrowth:.1,grid:He({seed:16,mountains:{side:"left",depth:1},houses:[[11,6],[12,6],[11,7]]}),paths:[[[-1,1],[21,1],[21,12],[3,12],[3,4],[18,4],[18,9],[12,9]]],gen:{level:12,n:18,boss:{9:"so",18:"ukita"},weights:{ram:1.4}}},s17:{id:"s17",name:"직산 전투",date:"1597년 9월",season:"autumn",base:"직산 진영",desc:"한양으로 북상하는 왜군을 조명 연합군이 막아선 들판. 넓은 들을 가로지르는 두 길을 모두 지켜라.",region:{x:139,y:289},startGold:420,hpGrowth:.1,grid:He({seed:17,flowers:16,rocks:6,houses:[[22,1],[22,2]]}),paths:[[[-1,4],[4,4],[4,1],[10,1],[10,5],[14,5],[14,2],[19,2],[19,7],[22,7]],[[-1,10],[5,10],[5,12],[11,12],[11,9],[16,9],[16,11],[19,11],[19,7],[22,7]]],gen:{level:13,n:18,boss:{18:["kuroda",1]},weights:{cav:1.8,drm:1.2}}},s18:{id:"s18",name:"명량 대첩",date:"1597년 9월",season:"sea",base:"울돌목 진영",desc:'"신에게는 아직 열두 척의 배가 남아 있사옵니다." 거센 물살 울돌목, 133척의 왜선이 좁은 물길로 쏟아진다.',region:{x:111,y:405},startGold:440,hpGrowth:.1,grid:He({seed:18,land:[[0,3,23,10]],trees:.2,rocks:3}),paths:[[[24,4],[15,4],[15,9],[9,9],[9,4],[3,4],[3,8],[1,8]]],gen:{level:14,n:20,boss:{20:"kurushima"},weights:{sco:2.2,ash:1.6,cav:1.4},budget:1.15}},s19:{id:"s19",name:"울산성 전투",date:"1597년 12월",season:"winter",base:"울산 진영",desc:"가토 기요마사가 쌓은 울산 왜성. 한겨울 성에서 뛰쳐나오는 철갑 부대를 막아라.",region:{x:210,y:357},startGold:460,hpGrowth:.1,grid:He({seed:19,sea:{side:"right",depth:2},mountains:{side:"top",depth:1},houses:[[1,12],[2,12]]}),paths:[[[20,-1],[20,3],[15,3],[15,1],[10,1],[10,5],[5,5],[5,9],[9,9],[9,12],[2,12]],[[20,14],[20,10],[16,10],[16,7],[12,7],[12,9],[9,9],[9,12],[2,12]]],gen:{level:15,n:19,boss:{19:["kato",0]},weights:{arm:1.8,sam:1.2}}},s20:{id:"s20",name:"사천 왜성 전투",date:"1598년 10월",season:"autumn",base:"사천 진영",desc:"귀신 시마즈가 지키는 사천 왜성. 성문이 열리면 사나운 무사들이 두 갈래로 쏟아진다.",region:{x:168,y:378},startGold:480,hpGrowth:.1,grid:He({seed:20,wall:{side:"left",w:2},sea:{side:"bottom",depth:1},houses:[[21,5],[22,5]]}),paths:[[[2,2],[7,2],[7,5],[11,5],[11,1],[16,1],[16,4],[19,4],[19,6],[22,6]],[[2,10],[6,10],[6,7],[11,7],[11,11],[16,11],[16,8],[19,8],[19,6],[22,6]]],gen:{level:16,n:20,boss:{10:["kurushima",1],20:["shimazu",0]},weights:{sam:1.6,cav:1.2}}},s21:{id:"s21",name:"순천 왜교성 전투",date:"1598년 11월",season:"autumn",base:"순천 진영",desc:"바다와 뭍에서 동시에 에워싼 왜교성. 성에서 뛰쳐나오는 고니시의 결사대를 막아라.",region:{x:151,y:388},startGold:500,hpGrowth:.1,grid:He({seed:21,sea:{side:"bottom",depth:2},wall:{side:"right",w:2},houses:[[1,1],[2,1]]}),paths:[[[21,1],[16,1],[16,4],[12,4],[12,1],[7,1],[7,4],[3,4],[3,6],[1,6]],[[21,10],[17,10],[17,7],[12,7],[12,10],[7,10],[7,7],[3,7],[3,6],[1,6]]],gen:{level:17,n:20,boss:{10:["so",1],20:["konishi",0]},weights:{tep:1.4,nin:1.4}}},s22:{id:"s22",name:"노량 해전",date:"1598년 11월",season:"sea",base:"노량 수영",desc:'"나의 죽음을 적에게 알리지 말라." 7년 전쟁의 마지막 바다. 물러가는 왜 수군을 끝까지 쫓아 막아라.',region:{x:163,y:385},startGold:520,hpGrowth:.1,night:!0,grid:He({seed:22,land:[[0,0,23,2],[0,5,23,8],[0,11,23,13]],trees:.3}),paths:[[[24,1],[3,1],[3,6],[20,6],[20,12],[1,12]]],gen:{level:18,n:21,boss:{11:"kuki",21:"shimazu"},weights:{sco:1.3,nin:1.5,cav:1.2}}},s23:{id:"s23",name:"대마도 정벌",date:"가상 · 1599년",season:"sea",base:"조선 수군 진영",desc:"세종 때처럼 다시 대마도로! 침략의 길잡이 섬에 상륙한 조선군 진영을 지켜라. (역사를 바꾼 가상 전장)",region:{x:226,y:412},startGold:540,hpGrowth:.1,grid:He({seed:23,land:[[1,1,22,12]],trees:.5,inner:8,houses:[[20,2],[21,2],[20,3]]}),paths:[[[24,12],[18,12],[18,8],[12,8],[12,11],[5,11],[5,4],[16,4],[16,2],[21,2]]],gen:{level:19,n:21,boss:{11:"todo",21:"so"},weights:{nin:1.6,onm:1.4}}},s24:{id:"s24",name:"현해탄 상륙전",date:"가상 · 1599년",season:"summer",base:"상륙 진지",desc:"현해탄을 건너 규슈 바닷가에 발을 디뎠다. 사방에서 몰려드는 정예 무사들을 해변 진지에서 버텨라. (가상 전장)",region:{x:246,y:436},startGold:560,hpGrowth:.1,grid:He({seed:24,sea:{side:"left",depth:2},mountains:{side:"right",depth:1},flowers:5}),paths:[[[22,-1],[22,2],[17,2],[17,5],[12,5],[12,1],[8,1],[8,4],[5,4],[5,6]],[[22,14],[22,11],[17,11],[17,8],[12,8],[12,12],[8,12],[8,8],[5,8],[5,6]]],gen:{level:21,n:22,boss:{11:["kuki",1],22:["ishida",0]},weights:{sam:1.5,arm:1.3,cav:1.2}}},s25:{id:"s25",name:"나고야성 최후의 결전",date:"가상 · 1599년",season:"autumn",base:"조선군 본진",desc:"침략의 본영 히젠 나고야성. 네 명의 대장을 차례로 꺾고 나면 마침내 그가 성문을 나선다. 초반에는 두 길이 갈라지기 전 굽이에 영웅을 배치하라. 마지막 결전에서는 은신 탐지를 유지하고, 기여가 적은 유산을 철거해 강한 단일 공격의 특화 유산에 재투자하라.",region:{x:246,y:452},startGold:600,hpGrowth:.1,finale:!0,grid:He({seed:25,wall:{side:"top",w:1},mountains:{side:"bottom",depth:1},houses:[[1,6],[1,7],[2,6]]}),paths:[[[21,1],[21,5],[16,5],[16,2],[11,2],[11,5],[7,5],[7,2],[3,2],[3,7]],[[21,1],[21,9],[16,9],[16,12],[11,12],[11,9],[7,9],[7,12],[3,12],[3,7]]],gen:{level:23,n:24,weights:{sam:1.4,arm:1.3,onm:1.2},boss:{6:["konishi",0],12:["kato",1],17:["ukita",0],21:["shimazu",1]},final:"hideyoshi>0"}}},RM={s1:1,s6:2.26,s7:1.43,s2:1.78,s8:3.11,s9:1.14,s10:1.58,s3:1.63,s11:1.49,s12:1.14,s13:2.02,s4:1.65,s5:1.49,s14:1.38,s15:.97,s16:3.48,s17:2.76,s18:3.97,s19:3.68,s20:2.24,s21:3.2,s22:3.66,s23:4.3,s24:2.26,s25:2.85},IM=[{name:"제1장 · 임진년의 봄",stages:["s1","s6","s7","s2","s8"]},{name:"제2장 · 바다와 성",stages:["s9","s10","s3","s11","s12"]},{name:"제3장 · 반격",stages:["s13","s4","s5","s14","s15"]},{name:"제4장 · 정유재란",stages:["s16","s17","s18","s19","s20"]},{name:"제5장 · 최후의 결전",stages:["s21","s22","s23","s24","s25"]}];function PM(i){let t=i.gen,e=km({seed:DM(i.id),n:t.n,level:t.level,weights:t.weights,boss:t.boss,paths:i.paths.length,budget:t.budget||1});return t.final&&(e[e.length-1]=t.final),{unlockTowers:[],...i,waves:e}}function DM(i){let t=7;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return t}var zm=Object.fromEntries([...EM.map(i=>[i.id,i]),...Object.values(CM).map(i=>[i.id,PM(i)])]),Md=IM.flatMap((i,t)=>i.stages.map(e=>({...zm[e],chapter:t,hpBase:RM[e]??zm[e].hpBase}))).map((i,t)=>({...i,bossHp:.9+.045*t})),jr=Object.fromEntries(Md.map(i=>[i.id,i]));var wd=0,Zr=1,LM=2,Sd=3,Hm=4,bd=new Map;function Zi(i){return bd.has(i)||bd.set(i,NM(jr[i])),bd.get(i)}function NM(i){let t=Gm,e=Vm,n=new Array(t*e).fill(wd),s=[];for(let u=0;u<e;u++){let d=i.grid[u];if(!d||d.length!==t)throw new Error(`${i.id} 지도 ${u}행 길이 오류 (${d&&d.length})`);for(let f=0;f<t;f++){let p=d[f];if(p!=="."){if(p==="f"){s.push({x:f,y:u,ch:p});continue}n[u*t+f]=p==="W"?Sd:LM,p!=="W"&&s.push({x:f,y:u,ch:p})}}}let r=i.paths.map(UM),o=new Set;for(let u of i.paths)for(let d=0;d<u.length-1;d++){let[f,p]=u[d],[x,m]=u[d+1];if(f!==x&&p!==m)throw new Error(`${i.id} 경로는 축 정렬이어야 합니다`);let g=Math.max(Math.abs(x-f),Math.abs(m-p));for(let y=0;y<=g;y++){let v=f+Math.sign(x-f)*y,_=p+Math.sign(m-p)*y;v<0||_<0||v>=t||_>=e||(n[_*t+v]=Zr,o.add(_*t+v))}}let a=s.filter(u=>!o.has(u.y*t+u.x)),l=i.paths[0][i.paths[0].length-1],c={x:l[0],y:l[1]};n[c.y*t+c.x]=Hm;let h=[];return r.forEach((u,d)=>{for(let f=0;f<=u.total;f+=.25){let p=ua(u,f);h.push({x:p.x,y:p.y,d:f,path:d})}}),{id:i.id,w:t,h:e,grid:n,decor:a,paths:r,base:c,samples:h}}function UM(i){let t=i.map(([n,s])=>({x:n+.5,y:s+.5})),e=[0];for(let n=1;n<t.length;n++)e.push(e[n-1]+Math.hypot(t[n].x-t[n-1].x,t[n].y-t[n-1].y));return{pts:t,cum:e,total:e[e.length-1]}}function ua(i,t){let{pts:e,cum:n}=i;if(t<=0){let u=e[1].x-e[0].x,d=e[1].y-e[0].y,f=Math.hypot(u,d)||1;return{x:e[0].x+u/f*t,y:e[0].y+d/f*t,dx:u/f,dy:d/f}}let s=1;for(;s<n.length-1&&n[s]<t;)s++;let r=e[s-1],o=e[s],a=n[s]-n[s-1]||1,l=Math.min(1,(t-n[s-1])/a),c=(o.x-r.x)/a,h=(o.y-r.y)/a;return{x:r.x+(o.x-r.x)*l,y:r.y+(o.y-r.y)*l,dx:c,dy:h}}var Gs={singijeon:{short:"신기전",name:"신기전 일제사격",cd:28,rank:0,target:"point",radius:1.6,dmg:32,n:12,desc:"지정 위치 반경 1.6칸에 신기전 12발을 퍼붓는다. 발당 화기 피해 {dmg}."},bongsu:{short:"봉수",name:"봉수 경보",cd:45,rank:0,target:"none",dur:10,vuln:.2,desc:"봉화를 올려 {dur}초간 모든 은신 적을 발각하고, 모든 적이 받는 피해 +20%."},uibyeong:{short:"의병",name:"의병 소집",cd:35,rank:1,target:"path",n:4,hp:200,dmg:14,life:12,desc:"지정 위치 길목에 의병 {n}명을 소집해 {life}초간 적을 저지한다."},bigyeok:{short:"비격",name:"비격진천뢰",cd:40,rank:2,target:"point",radius:1.4,dmg:420,delay:2,stun:1,desc:"2초 뒤 터지는 조선의 시한폭탄. 반경 1.4칸 화기 피해 {dmg} + 기절 1초."},gunryang:{short:"군량",name:"군량 보급",cd:75,rank:3,target:"none",gold:120,desc:"즉시 군자금 {gold} 획득. 협동 시 동료도 절반을 받는다."},cheonja:{short:"천자",name:"천자총통",cd:50,rank:4,target:"point",radius:2,dmg:900,desc:"조선 최대의 화포. 지정 범위(2칸) 안 가장 강한 적에게 화기 피해 {dmg}."},donguibogam:{short:"동의",name:"동의보감",cd:60,rank:5,target:"none",desc:"허준의 의술. 모든 영웅의 체력을 완전히 회복하고, 쓰러진 영웅을 즉시 부활시킨다."},hanpa:{short:"한파",name:"동장군 한파",cd:32,rank:6,target:"point",radius:2,slow:.6,dur:6,dps:12,desc:"반경 2칸을 얼려 {dur}초간 60% 둔화, 초당 신성 피해 {dps}."}};var z3=1/60;var Xm="winter3d";var Td={id:Xm,name:"설야의 산성",base:"산성 성문",season:"winter",chapter:0,desc:"눈 덮인 산성의 길목을 지켜라.",date:"겨울 전장 · 3D 체험",startGold:420,hpBase:.95,hpGrowth:.08,bossHp:1,unlockTowers:[],grid:["TTT...TT....MMM...TTTTTT","T.............M.......TT","T.HH....................","..HH....................","T........R..............","T.......................","........................","...R...............R....","........................","........................","T..........R........T...","T.R......T........HH....","TT......TTT.......HH...T","TTT....TTTT....MMMM..TTT"],paths:[[[-1,9],[6,9],[6,6],[15,6],[15,3],[22,3]]],waves:["ash*9@1.1","ash*14@0.85","ash*12@0.7, sam*2@3+5","ash*16@0.65, sam*3@3+6","sam*5@2.8, ash*18@0.65+3","ash*24@0.55, sam*7@2.3+5"]};jr[Xm]=Td;var Vs={spring:{name:"봄",english:"SPRING",caption:"꽃잎이 흩날리는 길목, 다시 피어나는 수호의 맹세.",sky:"#182d3b",fog:"#263d4c",ground:"#a7b9a6",road:"#ddd0b5",shore:"#929b87",water:"#365c72",leaf:["#dfa3b3","#e7c0c8","#b67e97"],grass:"#5d775b",sun:"#ffe2ba",sunPower:2.05,hemi:"#abc9e2",bounce:"#364940",fill:"#829fbf",exposure:1.02,particle:"petal",snow:!1},summer:{name:"여름",english:"SUMMER",caption:"푸른 숲과 강을 따라, 뜨거운 진격을 막아라.",sky:"#162c38",fog:"#254151",ground:"#879e91",road:"#d1c5aa",shore:"#9a9c83",water:"#265975",leaf:["#416d43","#648a4c","#355f48"],grass:"#3e6150",sun:"#ffe8c4",sunPower:2.15,hemi:"#a6c8e6",bounce:"#293e35",fill:"#779cbe",exposure:1.03,particle:"none",snow:!1},autumn:{name:"가을",english:"AUTUMN",caption:"붉게 물든 산하, 황혼의 방어선을 지켜라.",sky:"#292d40",fog:"#3b4056",ground:"#baa58a",road:"#dfc5a4",shore:"#a79a81",water:"#36566f",leaf:["#b65d33","#d79841","#8e4032"],grass:"#8b7953",sun:"#ffd0a0",sunPower:2,hemi:"#b2bdd9",bounce:"#4c3d39",fill:"#899cbf",exposure:1.01,particle:"leaf",snow:!1},winter:{name:"겨울",english:"WINTER",caption:"푸른 눈빛 아래, 마지막 길목을 지켜라.",sky:"#102039",fog:"#1b3151",ground:"#94b0d4",road:"#7896b6",shore:"#6d88a4",water:"#223d60",leaf:["#334e55","#243b48","#526b72"],grass:"#94a7bb",sun:"#aac9ff",sunPower:1.7,hemi:"#88b0ee",bounce:"#263953",fill:"#557bb1",exposure:.96,particle:"snow",snow:!0}},sb={s8:"spring",s9:"summer",s3:"summer",s11:"autumn",s15:"summer",s18:"autumn",s22:"winter",s23:"spring"};function Ad(i,t="auto"){let e=Vs[t]?t:sb[i.id]??(Vs[i.season]?i.season:"summer");return{id:e,...Vs[e]}}function qm(i){let t=1088;for(let e of i)t=t*31+e.charCodeAt(0)>>>0;return t}function Ed(i){let t=Zn(Math.floor(i*7919)+17),e=[],n=[],s=[];for(let o=0;o<36;o++){let a=o*2.399+i,l=Math.sqrt((o+.5)/36)*.93,c=new R(Math.cos(a)*l,(t()-.5)*1.15,Math.sin(a)*l),h=t()*Math.PI*2,u=(t()-.5)*1.1,d=new ln(u,h,(t()-.5)*.8),f=.18+t()*.15,p=f*(.32+t()*.16),x=[[0,0,f],[p,0,0],[0,0,-f],[-p,0,0],[0,.04,0],[0,-.012,0]].map(g=>new R(...g).applyEuler(d).add(c)),m=.74+t()*.26;for(let g of[[0,1,4],[1,2,4],[2,3,4],[3,0,4],[1,0,5],[2,1,5],[3,2,5],[0,3,5]])for(let y of g){let v=x[y];e.push(...v.toArray()),n.push(v.x*.5+.5,v.z*.5+.5);let _=m*(y===4?1:y===5?.75:.9);s.push(_,_,_)}}let r=new Zt;return r.setAttribute("position",new Tt(e,3)),r.setAttribute("uv",new Tt(n,2)),r.setAttribute("color",new Tt(s,3)),r.computeVertexNormals(),r}var Cd=new Map;function qc(i,t=!1){let e=i.id+(t?"-road":"-land");if(Cd.has(e))return Cd.get(e);let n=256,s=new Uint8Array(n*n*4),r=new Uint8Array(s.length),o=new Qt(t?i.road:i.ground),a=Zn(t?701:211);for(let f=0;f<n;f++)for(let p=0;p<n;p++){let x=p/n,m=f/n,g=ks(x*5,m*5),y=ks(x*48,m*48),v=a(),_=f+ks(x*9,m*7)*7,b=Math.floor(_/28),S=p+b*17+ks(x*9,m*7)*8,I=t&&(S%37<1.6||_%28<1.5),M=v>.975?.08:0,T=t?(g-.5)*.07+(y-.5)*.035+(v-.5)*.018-(I?.075:0)-M:(g-.5)*.105+(y-.5)*.035+(v-.5)*.018,L=[o.r,o.g,o.b],U=(f*n+p)*4;for(let F=0;F<3;F++)s[U+F]=Math.round(ie.clamp(L[F]+T+(t?0:(F===1?.012:-.008)*g),0,1)*255);s[U+3]=255;let z=Math.round((I?.25:.48+y*.09+M)*255);r.set([z,z,z,255],U)}let l=t?"road":i.snow?"snow-ground":"ground",c=Ac(s,n,l),h=new Sn(c.data,c.width,c.height);h.colorSpace=Es,h.wrapS=h.wrapT=Pn,h.magFilter=Ne,h.minFilter=vn,h.generateMipmaps=!0,h.anisotropy=4,h.needsUpdate=!0;let u=new Sn(r,n,n);u.wrapS=u.wrapT=Pn,u.magFilter=Ne,u.minFilter=vn,u.generateMipmaps=!0,u.needsUpdate=!0,Ec(h,l,o);let d=new _n({map:h,roughness:i.snow?.87:.96,bumpMap:u,bumpScale:t&&!i.snow?.009:0,vertexColors:!0});return Cd.set(e,d),d}function nn(i,t){if(t.snow)return i;let e=[];i.traverse(n=>{n.isMesh&&(n.material===E.snow||n.material===E.roofSnow||n.material===E.ice?e.push(n):n.material===E.pine?n.material=de("#41684a"):n.material===E.pineDark&&(n.material=de("#2e513c")))});for(let n of e)n.removeFromParent(),n.geometry.userData.owned3d&&n.geometry.dispose();return i.userData.season=t.id,i}function Ym(i,t=2.8,e=1){let n=new pt,s=Zn(Math.floor(e*997)+1),r=lt(n,new tn(.025,.085,t*.71,9),E.woodDark,0,t*.355,0);r.rotation.z=.04*Math.sin(e);let o=i.leaf.map(a=>de(a,{roughness:.96,vertexColors:!0}));for(let a=0;a<4;a++){let l=a*Math.PI/2+e;It(n,E.woodDark,[0,.18,0],[Math.cos(l)*.18,.025,Math.sin(l)*.18],.026)}for(let a=0;a<8;a++){let l=a*2.399+e,c=.42+s()*.3,h=t*(.53+s()*.22),u=Math.cos(l)*c,d=Math.sin(l)*c;It(n,E.woodDark,[0,t*.38,0],[u*.55,h-.17,d*.55],.029),It(n,E.woodDark,[u*.55,h-.17,d*.55],[u*1.15,h+.05,d*1.15],.017);for(let f=0;f<3;f++){let p=u+(s()-.5)*.46,x=d+(s()-.5)*.46,m=h+(s()-.2)*.32,g=lt(n,Ed(e+a*3+f),o[(a+f)%3],p,m,x,.34+s()*.15,.25+s()*.14,.35+s()*.13);if(g.rotation.y=s()*6,f===1)for(let y=0;y<3;y++){let v=rb(e+a+y),_=lt(n,Ed(e+a+y+17),o[(a+y)%3],p+Math.cos(v)*.24,m-.04+y*.07,x+Math.sin(v)*.24,.23,.12,.25);_.rotation.z=(s()-.5)*.5}}}return n}var rb=i=>i*2.399;function ob(i){let t=Zi(i.id),e=[],n=[],s=[];for(let r=0;r<t.h;r++)for(let o=0;o<t.w;o++){let a=t.grid[r*t.w+o],l=a===Zr&&i.grid[r][o]==="W";a===Sd||l?n.push([o,r]):e.push([o,r]),l&&s.push([o,r])}return{map:t,land:e,water:n,bridges:s}}function Yc(i,t=0,e=0,n=2){let s=i.attributes.position,r=i.attributes.uv,o=[];for(let a=0;a<s.count;a++){let l=s.getX(a)+t,c=s.getZ(a)+e;r.setXY(a,l/n,c/n);let h=1;o.push(h,h,h)}return i.setAttribute("color",new Tt(o,3)),i}function Rd(i,t,e=!1,n=3.2){let s=[],r=[],o=[],a=(c,h)=>e?-.014-.008*Math.hypot(Math.max(0,-c,c-24),Math.max(0,-h,h-14))+.005*Math.sin(c*.7+h*.5):t;for(let[c,h,u=1]of i){let d=s.length/3;s.push(c,a(c,h),h,c,a(c,h+u),h+u,c+u,a(c+u,h+u),h+u,c+u,a(c+u,h),h),r.push(0,0,0,0,0,0,0,0),o.push(d,d+1,d+2,d+2,d+3,d)}let l=new Zt;return l.setAttribute("position",new Tt(s,3)),l.setAttribute("uv",new Tt(r,2)),l.setIndex(o),Yc(l,0,0,n),l.computeVertexNormals(),l.userData.owned3d=!0,l}function ab(i){let t=[],e=[],n=new Set(i.water.map(([a,l])=>`${a},${l}`)),{w:s,h:r}=i.map,o=.5;for(let a=-5;a<r+5;a+=o)for(let l=-5;l<s+5;l+=o){if(l>=0&&a>=0&&l<s&&a<r||Math.hypot(Math.max(0,-l,l-s+o),Math.max(0,-a,a-r+o))>3.7+ks(l*.27+9,a*.27+3)*1.4)continue;let h=`${ie.clamp(Math.floor(l),0,s-1)},${ie.clamp(Math.floor(a),0,r-1)}`;(n.has(h)?e:t).push([l,a,o])}return{land:t,water:e}}function jm(i,t,e=null){let n=new pt,s=ob(i),{map:r,land:o,water:a,bridges:l}=s,c=Zn(qm(i.id)),h=[],u=new Set(o.map(([C,N])=>`${C},${N}`)),d=ab(s),f=t.snow?8:12,p=new Oe(130,110);p.rotateX(-Math.PI/2),Yc(p,12,7,f),p.userData.owned3d=!0;let x=lt(n,p,qc(t),12,-.13,7);x.castShadow=!1,lt(n,Rd(o,.006,!1,f),qc(t),0,0,0),lt(n,Rd(d.land,0,!0,f),qc(t),0,0,0);let m=new _n({color:t.water,roughness:.29,metalness:.26});m.userData.owned3d=!0;let g=new Rt(Rd([...a,...d.water],-.075),m);g.receiveShadow=!0;for(let[C,N]of o)for(let[G,O]of[[1,0],[-1,0],[0,1],[0,-1]])if(!u.has(`${C+G},${N+O}`)&&!(C+G<0||N+O<0||C+G>=r.w||N+O>=r.h)&&(lt(n,"bevel",E.stoneDark,C+.5+G*.48,-.26,N+.5+O*.48,G?.09:1,.52,O?.09:1),C+G>=0&&N+O>=0&&C+G<r.w&&N+O<r.h&&(at(n,de(t.shore),C+.5+G*.42,.012,N+.5+O*.42,G?.15:1,.035,O?.15:1),c()<.2))){let $=nn(la(.22+c()*.25,c()*6),t);$.position.set(C+.5+G*.42,.015,N+.5+O*.42),n.add($)}let y=qc(t,!0),v=de(t.snow?"#667e99":"#535b4c"),_=new Set,b=(C,N,G,O,$,P)=>{let B=new Oe(G,O);B.rotateX(-Math.PI/2),Yc(B,C,N),lt(n,B,$,C,P,N)};for(let C of r.paths)for(let N=1;N<C.pts.length;N++){let G=C.pts[N-1],O=C.pts[N],$=Math.hypot(G.x-O.x,G.y-O.y),P=(O.x-G.x)/$,B=(O.y-G.y)/$;for(let W=0;W<$;W+=.5){let it=G.x+P*(W+.25),ot=G.y+B*(W+.25),Lt=`${it.toFixed(2)},${ot.toFixed(2)}`;if(!_.has(Lt)){if(_.add(Lt),b(it,ot,P?.51:1.22,B?.51:1.22,v,.018),b(it,ot,P?.51:1.09,B?.51:1.09,y,.027),c()<.6)for(let Ht of[-1,1]){let ne=lt(n,"rock",E.stone,it-B*Ht*.59,.048,ot+P*Ht*.59,.07+c()*.05,.03,.06+c()*.04);ne.rotation.y=c()*6}if(t.snow&&c()<.5){let Ht=at(n,E.snowShade,it+B*.17,.03,ot-P*.17,.07,.008,.13);Ht.rotation.y=Math.atan2(P,B)}}}for(let W of[G,O]){let it=new zi(.55,24);it.rotateX(-Math.PI/2),Yc(it,W.x,W.y),lt(n,it,y,W.x,.029,W.y)}}for(let[C,N]of l){let G=r.grid[N*r.w+C-1]===Zr||r.grid[N*r.w+C+1]===Zr;if(G)for(let O=0;O<5;O++)at(n,E.wood,C+.1+O*.2,.04,N+.5,.17,.08,.92);else for(let O=0;O<5;O++)at(n,E.wood,C+.5,.055,N+.1+O*.2,.92,.06,.17);for(let O of[-1,1]){let $=G?[C,.06,N+.5+O*.48]:[C+.5+O*.48,.06,N],P=G?[C+1,.06,N+.5+O*.48]:[C+.5+O*.48,.06,N+1];It(n,E.woodDark,[$[0],-.4,$[2]],[$[0],.52,$[2]],.035),It(n,E.wood,[$[0],.4,$[2]],[P[0],.4,P[2]],.025)}}let S=new Set,I=new Map(r.decor.filter(C=>C.ch==="H").map(C=>[`${C.x},${C.y}`,C]));for(let C of r.decor){let N=C.x+.5,G=C.y+.5;if(C.ch==="H"){if(S.has(`${C.x},${C.y}`))continue;let O=[],$=[C];for(;$.length;){let Lt=$.pop(),Ht=`${Lt.x},${Lt.y}`;if(!S.has(Ht)){S.add(Ht),O.push(Lt);for(let[ne,J]of[[1,0],[-1,0],[0,1],[0,-1]]){let tt=I.get(`${Lt.x+ne},${Lt.y+J}`);tt&&!S.has(`${tt.x},${tt.y}`)&&$.push(tt)}}}let P=Math.min(...O.map(Lt=>Lt.x)),B=Math.max(...O.map(Lt=>Lt.x)),W=Math.min(...O.map(Lt=>Lt.y)),it=Math.max(...O.map(Lt=>Lt.y)),ot=e?e.prop("hanok",O.length===1?1.9:2.9,c()):nn(hd(Math.min(3.2,B-P+.8),Math.min(2.4,it-W+.8)),t);ot.position.set((P+B+1)/2,0,(W+it+1)/2),!e&&O.length===1&&(ot.scale.y=.72),n.add(ot),h.push([ot.position.x,ot.position.z+.7,.75,!0])}else if(C.ch==="T"){let O=e?e.prop(t.snow?"snowPine":t.id==="autumn"?"maple":"pine",2+c()*.8,c()):t.snow||c()<.28?nn(Oc(2.3+c()*1.3,c()*6),t):Ym(t,2.2+c()*1.1,c()*9);O.position.set(N,0,G),e||(O.rotation.y=c()*6),n.add(O)}else if(C.ch==="R"||C.ch==="M"){let O=e?e.prop(C.ch==="M"?"cliff":t.snow?"snowRock":"rock",C.ch==="M"?1.9+c()*.7:.65+c()*.4):nn(la(C.ch==="M"?1.6+c()*.5:.55+c()*.45,c()*6),t);O.position.set(N,0,G),!e&&C.ch==="M"&&(O.scale.y=C.y>=r.h-2?.55:1.7),n.add(O)}else if(C.ch==="K"){let O=e?e.prop("wall",1):nn(ud(.98,1.16),t);O.position.set(N,0,G),!e&&r.decor.some($=>$.ch==="K"&&$.x===C.x&&Math.abs($.y-C.y)===1)&&(O.rotation.y=Math.PI/2),n.add(O)}else if(C.ch==="J"){Vt(n,E.wood,N,.6,G,.11,1.2),at(n,E.wood,N,1.3,G,.29,.38,.22);for(let O of[-1,1])Nt(n,E.black,N+O*.07,1.37,G+.12,.025);at(n,E.red,N,1.2,G+.12,.13,.045,.02)}else if(C.ch==="f"&&!t.snow)for(let O=0;O<7;O++){let $=N+(c()-.5)*.8,P=G+(c()-.5)*.8;It(n,de(t.grass),[$,0,P],[$,.14+c()*.1,P],.008),Nt(n,de(t.id==="autumn"?"#d1ac5c":O%2?"#e2b4c1":"#ddd0a1"),$,.16,P,.035,.025,.035)}if(["T","R","M"].includes(C.ch)&&!t.snow)for(let O=0;O<4;O++){let $=N+(c()-.5)*.8,P=G+(c()-.5)*.8;for(let B=0;B<3;B++)It(n,de(t.grass),[$,.015,P],[$+(c()-.5)*.18,.16+c()*.14,P+(c()-.5)*.18],.009)}}let M=r.base,T=r.paths[0].pts.at(-1),L=r.paths[0].pts.at(-2),U=e?e.prop("gate",2.3):nn(Sm(),t);e||(U.scale.set(.36,.55,.48),U.rotation.y=Math.atan2(T.x-L.x,T.y-L.y)+Math.PI),U.position.set(M.x+.5,.025,M.y+.5),n.add(U),h.push([M.x+.5-.7,M.y+.5,.75,!0],[M.x+.5+.7,M.y+.5,.75,!0]);for(let C of r.decor.filter(N=>N.ch==="J"||N.ch==="H").slice(0,4)){let N=e?e.prop("supplies",.48):nn(wm(),t);e||N.scale.setScalar(.45),N.position.set(C.x+.38,0,C.y+.4),n.add(N)}let z=r.paths[0];for(let C of[.28,.55,.78]){let N=z.pts[Math.max(1,Math.floor((z.pts.length-1)*C))];h.push([N.x+.65,N.y+.5,.65,!1])}let F=0;for(let[C,N,G]of d.land){if(N>=0&&C>=0&&C<r.w||c()>.035)continue;if(F++>=20)break;let O=e?e.prop(t.snow?"snowPine":t.id==="autumn"?"maple":"pine",1.1+c()*.9,c()):t.snow?nn(Oc(.75+c()*.65,c()*9),t):Ym(t,.8+c()*.7,c()*9);O.position.set(C+G/2,-.035,N+G/2),n.add(O)}if(a.length<30){for(let C=-1;C<26;C+=3.7+c()*1.2){let N=e?e.prop("cliff",3+c()*1.4):nn(la(1.8+c(),c()*7),t);N.position.set(C,-.25,-3.6-c()),e||(N.scale.y=1.6),n.add(N)}for(let C=0;C<11;C++){let N=-5+C*3.4,G=-8-c()*4,O=3+c()*3,$=e?e.prop("cliff",O):la(3.6+c()*2,c()*9);if(e||(nn($,t),$.scale.y=O/3.8),$.position.set(N,-1.8,G),n.add($),C%2===0){let P=e?e.prop(t.snow?"snowPine":"pine",3.1+c()):nn(Oc(3+c()*1.7,c()*8),t);P.position.set(N+.6,-.4,G+1.7),n.add(P)}}}return Le(n),n.userData.stageId=i.id,n.userData.season=t.id,{root:n,water:g,lamps:h.slice(0,9),plan:s,surroundings:d}}function $m(i){let t=new Map,e=r=>{let o=r.isMesh?new Rt(r.geometry,r.material):new pt;t.set(r,o),o.position.copy(r.position),o.quaternion.copy(r.quaternion),o.scale.copy(r.scale),o.name=r.name,o.visible=r.visible,o.castShadow=r.castShadow,o.receiveShadow=r.receiveShadow,o.renderOrder=r.renderOrder;for(let a of r.children)o.add(e(a));return o},n=e(i),s=r=>t.has(r)?t.get(r):Array.isArray(r)?r.map(s):ArrayBuffer.isView(r)?r.slice():r&&Object.getPrototypeOf(r)===Object.prototype?Object.fromEntries(Object.entries(r).map(([o,a])=>[o,s(a)])):r;for(let[r,o]of t)o.userData=s(r.userData);return n.userData.cape&&(n.userData.cape.geometry=n.userData.cape.geometry.clone(),n.userData.cape.geometry.userData={owned3d:!0}),n}function Zm(i,t,e,n=.22){let s=new pt;s.position.set(t,n,e),i.add(s),Vt(s,E.woodDark,0,0,0,n,.08).rotation.z=Math.PI/2,Vt(s,E.steel,t<0?-.05:.05,0,0,n*.78,.025).rotation.z=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/4;It(s,E.wood,[0,Math.sin(o)*n,Math.cos(o)*n],[0,-Math.sin(o)*n,-Math.cos(o)*n],.02)}return Le(s)}function Id(i){let t=new pt,e=new pt,n=[];t.add(e);let s=null;if(i==="wall"){for(let r=0;r<7;r++){let o=(r-3)*.18;It(e,E.woodDark,[o,.04,0],[o,.85,.15],.06),Te(e,E.wood,o,.94,.17,.065,.22)}for(let r of[.25,.65])at(e,E.wood,0,r,.04,1.34,.08,.1)}else if(i==="ram"){for(let o of[-.45,.45])for(let a of[-.57,.57])n.push(Zm(t,o,a));at(e,E.woodDark,0,.38,0,.76,.16,1.4);for(let o of[-.33,.33])for(let a of[-.5,.5])It(e,E.wood,[o,.4,a],[o,1.25,a],.045);s=new pt,e.add(s);let r=Vt(s,E.wood,0,.75,.12,.17,1.8);r.rotation.x=Math.PI/2,Nt(s,E.steel,0,.75,1.05,.21,.2,.2);for(let o of[-.58,-.28,.38,.76])Vt(s,E.steel,0,.75,o,.179,.055).rotation.x=Math.PI/2;for(let o of[-1,1])at(s,E.steel,o*.1,.75,1.17,.055,.21,.08);for(let o of[-.45,.45])It(e,E.rope,[0,1.3,o],[0,.8,o],.016);for(let o of[-1,1]){let a=at(e,E.woodDark,o*.25,1.3,0,.61,.08,1.65);a.rotation.z=o*-.36}for(let o=0;o<4;o++)at(e,E.steel,0,1.4,(o-1.5)*.42,.74,.055,.07);for(let o of[-1,1])for(let a=0;a<7;a++){let l=lt(e,"bevel",E.wood,o*.25,1.31,(a-3)*.23,.6,.045,.21);l.rotation.z=-o*.36;for(let c of[-.55,.55])Nt(e,E.steel,o*.48,.38+a*.025,c,.016)}}else if(i==="turtle"){lt(e,"sphere",E.woodDark,0,.3,0,.66,.27,1.18),at(e,E.wood,0,.45,0,1.15,.16,1.85);let r=de("#627878",{roughness:.6,metalness:.25});lt(e,"sphere",r,0,.69,-.08,.59,.42,.98);for(let o=0;o<5;o++)for(let a=0;a<3;a++){let l=(a-1)*.3,c=(o-2)*.31;Te(e,E.steel,l,1.06-Math.abs(l)*.3,c,.035,.15)}for(let o of[-1,1])for(let a=0;a<4;a++){let l=(a-1.5)*.4;It(e,E.wood,[o*.46,.43,l],[o*.95,.12,l-.3],.025),at(e,E.woodDark,o*.96,.12,l-.3,.13,.035,.23),Vt(e,E.black,o*.57,.49,l,.055,.12).rotation.z=Math.PI/2}It(e,E.wood,[0,.53,.74],[0,.73,1.28],.12),Nt(e,E.gold,0,.78,1.25,.16,.14,.22),Te(e,E.gold,0,.91,1.16,.055,.16);for(let o of[-1,1])Nt(e,E.red,o*.11,.83,1.38,.025);at(e,E.black,0,.75,1.45,.1,.07,.03),It(e,E.woodDark,[0,.85,-.55],[0,1.75,-.55],.025),at(e,E.red,.18,1.57,-.55,.36,.32,.025),at(e,E.gold,.18,1.57,-.53,.08,.14,.015)}else{at(e,E.wood,0,.4,0,.65,.25,1.15);for(let r of[-.4,.4])for(let o of[-.4,.4])n.push(Zm(t,r,o,.18));for(let r=0;r<3;r++)Nt(e,E.rope,0,.65,(r-1)*.3,.28,.2,.18)}return s&&(e.remove(s),Le(s)),Le(e),s&&e.add(s),t.userData={rig:e,wheels:n,ramBeam:s,vehicle:i,kind:i,phase:0,labelHeight:i==="wall"?1.35:i==="turtle"?1.95:1.7},t}function Pd(i,t=null){if(["ram","wall","turtle","courier"].includes(i))return Id(i);let e=Tm(i),n=kc(i,t);if(n){let s=n.gold?Bc:n,r=new Set(e.userData.costumeMaterials),o=new Map;if(e.traverse(a=>{if(!(!a.isMesh||!r.has(a.material))){if(!o.has(a.material)){let l=a.material.clone();l.color.set(s.body),l.userData.owned3d=!0,n.gold&&(l.metalness=.62,l.roughness=.4),o.set(a.material,l)}a.material=o.get(a.material)}}),e.userData.cape){let a=e.userData.cape.material.clone();a.color.set(s.sleeve||s.body),a.userData.owned3d=!0,e.userData.cape.material=a}e.userData.skin=n.id}if(i==="cavalry"){let s=new pt,r=[],o=[],a=[];e.add(s);let l=de("#70523c",{roughness:.95}),c=de("#342e29",{roughness:.96});lt(s,"sphere",l,0,.73,0,.285,.285,.55);for(let u of[-.31,.3])lt(s,"sphere",l,0,.72,u,.275,.27,.25);let h=Vt(s,l,0,.97,.35,.145,.5);h.rotation.x=.36,lt(s,"sphere",l,0,1.19,.49,.145,.175,.235),lt(s,"sphere",l,0,1.12,.67,.11,.105,.19);for(let u of[-1,1]){let d=Te(s,l,u*.085,1.39,.42,.042,.17);d.rotation.z=-u*.16,Nt(s,E.black,u*.135,1.23,.53,.019,.017,.012),Nt(s,E.black,u*.086,1.14,.78,.018,.012,.009),It(s,E.woodDark,[u*.13,1.27,.43],[u*.115,1.1,.65],.012),It(s,E.rope,[u*.11,1.1,.65],[u*.09,1.16,.77],.009);for(let f=0;f<5;f++)Nt(s,c,u*.025,1.24-f*.075,.32-f*.025,.05,.085,.045)}It(s,E.woodDark,[-.11,1.1,.65],[.11,1.1,.65],.016);for(let u=0;u<3;u++)It(s,c,[(u-1)*.03,.77,-.46],[(u-1)*.04,.28,-.72],.028);lt(s,"bevel",E.red,0,.93,-.02,.52,.08,.56),lt(s,"bevel",E.woodDark,0,.99,-.04,.36,.095,.36);for(let u of[-.21,.15])Nt(s,E.woodDark,0,1.02,u,.22,.085,.045);for(let u of[-1,1])It(s,E.woodDark,[u*.25,.93,0],[u*.29,.57,0],.014),lt(s,"bevel",E.steel,u*.29,.56,.01,.12,.025,.15);for(let u of[-.19,.19])for(let d of[-.36,.36]){let f=new pt,p=new pt,x=new pt;f.position.set(u,.575,d),s.add(f),r.push(f),p.position.y=-.27,f.add(p),o.push(p),x.position.set(0,-.27,.02),p.add(x),a.push(x),Vt(f,l,0,-.13,0,.059,.27),Nt(f,l,0,-.24,.008,.062,.065,.058),Vt(p,l,0,-.13,.012,.041,.27),lt(x,"bevel",c,0,0,.025,.135,.11,.17),Le(x),p.remove(x),Le(p),p.add(x),f.remove(p),Le(f),f.add(p)}for(let u of r)s.remove(u);Le(s);for(let u of r)s.add(u);e.userData.horseLegs=r,e.userData.horseKnees=o,e.userData.horseHooves=a,e.userData.horseReins=Array.from({length:2},()=>Vt(e,E.woodDark,0,1,0,.007,.7)),e.userData.mountOffset=.72,ha(e,0,!1,0,0),e.userData.labelHeight=new Qe().setFromObject(e).max.y+.15}return e}var Dd="assets/3d/fixed/battle-effects-v1.webp",Km=Object.freeze({fire:0,flood:1,ice:2,heal:3,slash:4,light:5,volley:6,combo:7}),lb;function cb(){return lb??(lb=new Promise((i,t)=>{let e=Dd.startsWith("data:")?Dd:new URL(Dd,new URL("../../",import.meta.url)).href;new Gi().load(e,i,void 0,t)}))}var jc=class{constructor(){this.ready=!1,this.failed=!1,this.destroyed=!1,this.texture=null}load(){return this.promise??(this.promise=cb().then(t=>this.destroyed?!1:(this.texture=new Je(t),this.texture.colorSpace=ve,this.texture.anisotropy=4,this.texture.needsUpdate=!0,this.ready=!0,!0)).catch(()=>(this.failed=!0,!1)))}mesh(t,e,n=.65){if(!this.ready)return null;let s=Km[t]??Km.light,r=s%4,o=Math.floor(s/4),a=e.attributes.uv,l=1.5/this.texture.image.width,c=1.5/this.texture.image.height;for(let d=0;d<a.count;d++)a.setXY(d,r/4+l+a.getX(d)*(.25-2*l),1-(o+1)/2+c+a.getY(d)*(.5-2*c));e.userData.owned3d=!0;let h=new De({map:this.texture,transparent:!0,opacity:n,depthWrite:!1,toneMapped:!1,side:Re});h.userData.owned3d=!0;let u=new Rt(e,h);return u.userData.paintedEffect=t,u}decal(t,e=1,n=.65){if(!this.ready)return null;let s=this.mesh(t,new zi(e,56),n);return s.rotation.x=-Math.PI/2,s}dispose(){this.destroyed||(this.destroyed=!0,this.ready=!1,this.texture?.dispose())}};var $n=(i,t=1)=>new De({color:i,transparent:!0,opacity:t,side:Re,depthWrite:!1,blending:Un,toneMapped:!1});function Jm(i=ys.range,t=ys.halfAngle){let e=[0,0,0],n=[],s=36;for(let o=0;o<=s;o++){let a=-t+2*t*o/s;e.push(Math.cos(a)*i,0,Math.sin(a)*i),o<s&&n.push(0,o+1,o+2)}let r=new Zt;return r.setAttribute("position",new Tt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function Qm(i,t){let e=[new R(0,0,0)];for(let n=0;n<=36;n++){let s=-t+2*t*n/36;e.push(new R(Math.cos(s)*i,0,Math.sin(s)*i))}return e.push(new R(0,0,0)),new Zt().setFromPoints(e)}function _s(i,t){let e=new pt,n=new Rt(new ri(i-.035,i,64),$n(t,.85));n.material.blending=ai,n.rotation.x=-Math.PI/2,e.add(n);for(let s=0;s<4;s++){let r=s*Math.PI/2,o=new Rt(new Oe(.16,.035),$n(t,.9));o.material.blending=ai,o.rotation.x=-Math.PI/2,o.rotation.z=r,o.position.set(Math.cos(r)*i,0,Math.sin(r)*i),e.add(o)}return e}function t0(i,t){let e=_s(i,t),n=_s(i*.94,t);return e.add(n),e.userData.progress=n,e.traverse(s=>{s.geometry&&(s.geometry.userData.owned3d=!0),s.material&&(s.material.userData.owned3d=!0)}),e}function Zc(i){let t=new Set,e=new Set;i.traverse(n=>{n.geometry&&t.add(n.geometry),n.material&&e.add(n.material)});for(let n of t)n.dispose();for(let n of e)n.dispose()}var $c=class{constructor(t,e,{illustrated:n=!1}={}){this.scene=t,this.glow=e,this.active=[],this.art=n?new jc:null,this.art?.load(),this.fan=new pt,this.fan.position.y=.08,this.fan.add(new Rt(Jm(),new De({color:"#339bcc",transparent:!0,opacity:.23,side:Re,depthWrite:!1,toneMapped:!1}))),this.fan.add(new si(Qm(ys.range,ys.halfAngle),new Vn({color:"#2589ba",transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}))),this.target=_s(Gs.singijeon.radius,"#d58b3e"),this.target.position.y=.085,this.reach=_s(1,"#82b1c6"),this.reach.position.y=.065,this.spawns=new pt;for(let s=0;s<4;s++)this.spawns.add(_s(.22,"#9ed6b1"));this.corridor=new Rt(new Oe(1,1),$n("#d8b86f",.18)),this.corridor.rotation.x=-Math.PI/2,this.corridorRoot=new pt,this.corridorRoot.add(this.corridor),this.previewRoots=[this.fan,this.target,this.reach,this.spawns,this.corridorRoot],t.add(...this.previewRoots),this.preview(null,null,null)}preview(t,e,n,s=null){this.fan.visible=t==="heroSkill"&&e?.heroId==="yi"&&!!n&&!e.dead,this.target.visible=!!s&&!s.fan&&!s.spawns?.length,this.reach.visible=!!s?.reach,this.spawns.visible=!!s?.spawns?.length,this.corridorRoot.visible=!!s&&(s.dash||s.wall),this.fan.visible&&(this.fan.position.set(e.x,.08,e.y),this.fan.rotation.y=-Math.atan2(n.z-e.y,n.x-e.x)),this.target.visible&&(this.target.position.set(s.x,.085,s.y),this.target.scale.setScalar(s.radius/Gs.singijeon.radius),this.target.traverse(r=>{r.material?.color.set(s.color)})),this.reach.visible&&(this.reach.position.set(e.x,.065,e.y),this.reach.scale.setScalar(s.reach));for(let r=0;r<4;r++){let o=s?.spawns?.[r],a=this.spawns.children[r];a.visible=!!o,o&&a.position.set(o.x,.09,o.y)}if(this.corridorRoot.visible){let r=s.x-e.x,o=s.y-e.y,a=Math.hypot(r,o);this.corridorRoot.position.set(s.wall?s.x:(s.x+e.x)/2,.08,s.wall?s.y:(s.y+e.y)/2),this.corridorRoot.rotation.y=s.wall?0:-Math.atan2(o,r),this.corridorRoot.scale.set(s.wall?1.34:Math.max(.01,a),1,s.wall?.36:1.6)}}add(t,e,n){if(this.active.length>=64){let s=this.active.shift();this.scene.remove(s.root),Zc(s.root)}this.scene.add(t),this.active.push({root:t,life:e,t:0,animate:n})}impact(t,e,n=.8,s="#ffbd76",r="impact"){let o=new pt;o.position.set(t,.09,e);let a=["build","hangul","stone","light","thunder"].includes(r)?"light":["ice","frost"].includes(r)?"ice":["garlic","heal"].includes(r)?"heal":r==="flood"?"flood":"fire",l=this.art?.decal(a,1,.65)??new Rt(new ri(.78,1,40),$n(s,.75));l.rotation.x=-Math.PI/2,o.add(l);let c=!!l.userData.paintedEffect,h=new Oi(new vi({map:this.glow,color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:Un}));h.position.y=.15,o.add(h);let u=r==="build"?10:14,d=new Float32Array(u*3),f=[];for(let g=0;g<u;g++){let y=g*2.399+t;f.push([Math.cos(y)*n*(.7+g%4*.12),.6+g%5*.2,Math.sin(y)*n*(.7+g%4*.12)])}let p=new Zt;p.setAttribute("position",new Se(d,3));let x=new as(p,new ki({color:s,map:this.glow,size:c?.085:r==="build"?.13:.16,transparent:!0,depthWrite:!1,blending:Un}));o.add(x);let m=r==="build"?.9:.62;this.add(o,m,(g,y)=>{l.scale.setScalar(n*(c?.45+y*.65:.15+y*1.3)),l.material.opacity=(1-y)*.65,h.scale.setScalar(n*(.65+Math.sin(y*Math.PI)*1.2)),h.material.opacity=Math.pow(1-y,2)*(c?.22:.8);for(let v=0;v<u;v++){let _=f[v];d[v*3]=_[0]*y,d[v*3+1]=Math.max(.02,_[1]*g-1.3*g*g),d[v*3+2]=_[2]*y}p.attributes.position.needsUpdate=!0,x.material.opacity=1-y})}volley(t,e,n,s=ys.range,r=ys.halfAngle){let o=new pt;o.position.set(t,.11,e),o.rotation.y=-n;let a=Jm(s,r),l=a.attributes.position,c=new Float32Array(l.count*2);for(let p=0;p<l.count;p++)c[p*2]=l.getX(p)/s,c[p*2+1]=.5-l.getZ(p)/(s*2);a.setAttribute("uv",new Se(c,2));let h=this.art?.mesh("volley",a,.56)??new Rt(a,$n("#70caff",.28));o.add(h);let u=new si(Qm(s,r),new Vn({color:"#bcf0ff",transparent:!0,opacity:.9,depthWrite:!1}));o.add(u);let d=[],f=(p,x)=>{let m=$n(p,x);return h.userData.paintedEffect&&(m.blending=ai),m.userData.baseOpacity=x,m};for(let p=0;p<11;p++){let x=-r+p*r/5,m=new pt;m.rotation.y=-x;let g=new Rt(new cn(.42,.023,.023),f(h.userData.paintedEffect?"#dec69e":"#b7ebff",.9));m.add(g);let y=new Rt(new Is(.07,.2,4),f(h.userData.paintedEffect?"#d5e3e8":"#e6faff",.95));y.rotation.z=-Math.PI/2,y.position.x=.27,m.add(y);let v=new Rt(new Oe(.7,.045),f(h.userData.paintedEffect?"#aac8d9":"#5fbcff",h.userData.paintedEffect?.28:.6));v.rotation.x=-Math.PI/2,v.position.x=-.32,m.add(v),o.add(m),d.push({arrow:m,a:x})}this.add(o,.85,(p,x)=>{let m=Math.min(1,p/.52)*s;for(let{arrow:g,a:y}of d)g.position.set(Math.cos(y)*m,.65+Math.sin(x*Math.PI)*.24,Math.sin(y)*m),g.traverse(v=>{v.material&&(v.material.opacity=Math.max(0,1-x)*v.material.userData.baseOpacity)});h.material.opacity=(1-x)*(h.userData.paintedEffect?.56:.22),u.material.opacity=(1-x)*(h.userData.paintedEffect?.45:.8)})}barrage(t,e){let n=_s(Gs.singijeon.radius,"#ffb268");n.position.set(t,.09,e),this.add(n,1.5,(s,r)=>{n.rotation.y=r*.35,n.traverse(o=>{o.material&&(o.material.opacity=(1-r)*.8)})})}line(t,e,n,s,r="#e9d5a6",o=.18,a=!1,l=.8,c=.8){let h=[];for(let d=0;d<=8;d++){let f=d/8;h.push(new R(t+(n-t)*f,l+(c-l)*f+(a&&d>0&&d<8?Math.sin(d*8)*.17:0),e+(s-e)*f+(a&&d>0&&d<8?Math.sin(d*3)*.1:0)))}let u=new si(new Zt().setFromPoints(h),new Vn({color:r,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}));this.add(u,o,(d,f)=>{u.material.opacity=1-f})}thunder(t,e,n=.7){let s=[];for(let o=0;o<=10;o++)s.push(new R(t+(o===10?0:Math.sin(o*5.7)*.22),4.5*(1-o/10),e+(o===10?0:Math.cos(o*4.1)*.15)));let r=new si(new Zt().setFromPoints(s),new Vn({color:"#d9f2ff",transparent:!0,opacity:1,depthWrite:!1,toneMapped:!1}));this.add(r,.45,(o,a)=>{r.material.opacity=(1-a)*(Math.sin(a*45)>.2?.4:1)}),this.impact(t,e,n,"#a5d9fa","thunder")}spell(t,e,n,s=1,r=0){let o=new pt;o.position.set(e,.08,n);let a=[];t==="slash"&&(o.renderOrder=4);let l=t==="flood"?"#93d8e8":t==="heal"?"#9edfb4":"#f2d792";for(let h=0;h<(this.art?.ready||t==="slash"?1:3);h++){let u=this.art?.decal(["flood","heal","slash"].includes(t)?t:"light",1,.65)??new Rt(new ri(.91,1,48,1,t==="slash"?-.8:0,t==="slash"?1.6:Math.PI*2),$n(l,t==="slash"?.8:.32));t==="slash"&&(u.material.depthTest=!1,u.renderOrder=4),u.rotation.x=-Math.PI/2,u.rotation.z=r,o.add(u),a.push(u)}if(t==="smite"){let h=new Rt(new tn(.035,.18,3,10,1,!0),$n(l,.45));h.position.y=1.5,o.add(h),a.push(h)}if(t==="heal")for(let h of[.25,.55,.85]){let u=new pt;u.position.y=h,u.add(new Rt(new cn(.25,.055,.035),$n(l,.75)),new Rt(new cn(.055,.25,.035),$n(l,.75))),o.add(u),a.push(u)}if(t==="hangul")for(let h=0;h<12;h++){let u=h*2.399,d=s*(.25+h%4*.18),f=[],p=h%3===0?[[-.1,.12,.1,.12],[.1,.12,.1,-.12]]:h%3===1?[[-.1,.12,-.1,-.12],[-.1,-.12,.1,-.12]]:[[-.1,.12,.1,.12],[.1,.12,.1,-.12],[.1,-.12,-.1,-.12],[-.1,-.12,-.1,.12]];for(let[m,g,y,v]of p)f.push(new R(m,g,0),new R(y,v,0));let x=new Mo(new Zt().setFromPoints(f),new Vn({color:h%2?"#f0d49a":"#a6dce6",transparent:!0,opacity:.9,depthWrite:!1,toneMapped:!1}));x.position.set(Math.cos(u)*d,1.3+h%4*.19,Math.sin(u)*d),x.rotation.y=u,x.userData.startY=x.position.y,o.add(x),a.push(x)}let c=t==="flood"?1.2:t==="hangul"?1.1:t==="heal"?1:.55;for(let h of a)h.isLineSegments||(h.userData.startY=h.position.y);this.add(o,c,(h,u)=>{for(let d=0;d<a.length;d++){let f=a[d];f.userData.paintedEffect?(f.scale.setScalar(s*(t==="slash"?.85+u*.15:.58+u*.42)),f.position.y=t==="slash"?.6:.015,f.material.opacity=(1-u)*(t==="flood"?.64:.72)):f.geometry?.type==="RingGeometry"?(f.scale.setScalar(s*Math.min(1.06,.14+u*1.08+d*.12)),f.position.y=t==="flood"?.04+Math.sin(u*Math.PI)*d*.075:t==="slash"?.4:0,f.material.opacity=(1-u)*(t==="slash"?.85:.3)):f.isLineSegments?(f.position.y=f.userData.startY*(1-u)+.08,f.material.opacity=Math.sin(u*Math.PI)*.9):(f.position.y=f.userData.startY+u*(t==="heal"?.65:.12),f.traverse(p=>{p.material&&(p.material.opacity=(1-u)*.65)}))}})}combo(t,e){let n=new pt;n.position.set(t.x,.1,t.y);let s=this.art?.decal("combo",.95,.7);s&&n.add(s);let r=new Tn,o=.72;r.absarc(0,0,o,0,Math.PI,!1),r.absarc(-o/2,0,o/2,Math.PI,0,!0),r.absarc(o/2,0,o/2,Math.PI,Math.PI*2,!1),r.closePath();for(let[h,u]of(s?[]:["#ed876c","#75bfe9"]).entries()){let d=new Rt(new Oo(r,24),$n(u,.7));d.rotation.x=-Math.PI/2,d.rotation.z=h*Math.PI,n.add(d)}let a=_s(1.18,"#eacb8b");n.add(a),this.add(n,1.7,(h,u)=>{n.scale.setScalar(.6+u*.9),n.rotation.y=u*.65,n.traverse(d=>{d.material&&(d.material.opacity=(1-u)*(s?.6:.75))})});let[l,c]=e.heroes;this.line(l.x,l.y,c.x,c.y,"#ecdc9b",.7,!0);for(let h of e.heroes)this.impact(h.x,h.y,.75,t.id==="dangun_sejong"?"#a1dfad":"#e7d99e",t.id==="dangun_sejong"?"heal":"build");if(["gwon_yi","eulji_gang","ahn_sejong","generic"].includes(t.id))for(let h of e.enemies.slice(0,20))this.impact(h.x,h.y,.7,t.id==="eulji_gang"?"#91d6ec":t.id==="gwon_yi"?"#f0ba78":"#d6d6fa",t.id==="eulji_gang"?"flood":t.id==="gwon_yi"?"fire":"light")}update(t){for(let e=this.active.length-1;e>=0;e--){let n=this.active[e];n.t+=t;let s=Math.min(1,n.t/n.life);n.animate(n.t,s),s>=1&&(this.scene.remove(n.root),Zc(n.root),this.active.splice(e,1))}}reset(){for(let t of this.active)this.scene.remove(t.root),Zc(t.root);this.active=[],this.preview(null,null,null)}zone(t,e){let n=new pt,s=t==="ice"?"#a5cddd":"#d5a066",r=this.art?.decal(t==="ice"?"ice":"fire",e,.52);n.userData.paintedZone=!!r,n.userData.zoneKind=t;let o=r??new Rt(new zi(e,48),$n(s,.14));o.rotation.x=-Math.PI/2,o.material.blending=ai,n.add(o),n.userData.disc=o;let a=_s(e,s);n.add(a),n.userData.edge=a;let l=8,c=new Float32Array(l*3);for(let d=0;d<l;d++){let f=d*2.399;c.set([Math.cos(f)*e*.72,.12+d%3*.08,Math.sin(f)*e*.72],d*3)}let h=new Zt;h.setAttribute("position",new Se(c,3));let u=new as(h,new ki({map:this.glow,color:s,size:.09,transparent:!0,opacity:.55,depthWrite:!1,blending:Un}));return n.add(u),n.userData.motes=u,n.traverse(d=>{d.geometry&&(d.geometry.userData.owned3d=!0),d.material&&(d.material.userData.owned3d=!0)}),n}updateZone(t,e,n){let s=Math.min(1,Math.max(0,e.t)/.45),r=t.userData.paintedZone;t.userData.disc.material.opacity=s*(r?.46+Math.sin(n*2)*.035:.14),t.userData.disc.rotation.z=n*(e.kind==="ice"?-.035:.065),t.userData.edge.traverse(o=>{o.material&&(o.material.opacity=s*.24)}),t.userData.motes.position.y=Math.sin(n*2)*.05,t.userData.motes.material.opacity=s*.4}destroy(){this.reset();for(let t of this.previewRoots)this.scene.remove(t),Zc(t);this.previewRoots=[],this.art?.dispose()}};var Kc=new Hi,Ld=new R,Nd=new R,e0=new st;function hb(i,t,e){if(!t.length)return!1;for(let n of[.9,1.55])if(Ld.set(i.x,n,i.y),Nd.copy(Ld).project(e),e0.set(Nd.x,Nd.y),Kc.setFromCamera(e0,e),Kc.far=Math.max(0,Kc.ray.origin.distanceTo(Ld)-.05),Kc.intersectObjects(t,!0).some(s=>{let r=Array.isArray(s.object.material)?s.object.material:[s.object.material];return s.object.visible&&r.some(o=>o.visible&&(!o.transparent||o.opacity>=.9))}))return!0;return!1}function n0(i){if(i.userData.silhouetteMeshes)return;let t=[];i.traverse(n=>{n.isMesh&&t.push(n)});let e=new De({color:"#83c8ec",transparent:!0,opacity:.55,depthTest:!0,depthFunc:os,depthWrite:!1,toneMapped:!1});e.userData.owned3d=!0,i.userData.silhouetteMaterial=e,i.userData.silhouetteMeshes=t.map(n=>{let s=new Rt(n.geometry,e);return s.visible=!1,s.renderOrder=30,s.raycast=()=>{},s.userData.heroSilhouette=!0,n.add(s),s})}function i0(i,t,e,{camera:n,models:s}={}){let r=e.filter(a=>Math.hypot((a.cx??a.x+.5)-t.x,(a.cy??a.y+.5)-t.y)<3),o=!t.dead&&!!n&&hb(t,r.map(a=>s?.get(a.id)?.root).filter(Boolean),n);i.userData.silhouetteMaterial.color.set(t.owner===1?"#efaa96":"#83c8ec");for(let a of i.userData.silhouetteMeshes)a.visible=o}var Jc=class{constructor(t){this.scene=t,this.buckets=new Map,this.bindings=new WeakMap}register(t,e){let n=[];t.traverse(r=>{r.isMesh&&r!==t.userData.cape&&n.push(r)});let s=n.map((r,o)=>{let a=`${e}:${o}`,l=this.buckets.get(a);if(!l){let c=r.geometry.clone();c.userData.owned3d=!0,c.userData.crowdShared=!0,l={geometry:c,material:r.material,count:0,capacity:0,mesh:null},this.buckets.set(a,l),this.grow(l,8)}return r.geometry.userData.owned3d&&!r.geometry.userData.crowdShared&&!r.geometry.userData.templateShared&&r.geometry.dispose(),r.geometry=l.geometry,r.visible=!1,r.userData.crowdPick=!0,{part:r,bucket:l}});this.bindings.set(t,s),t.userData.crowd=!0}grow(t,e){let n=t.mesh,s=new Cs(t.geometry,t.material,e);n&&(s.instanceMatrix.array.set(n.instanceMatrix.array),this.scene.remove(n),n.dispose()),s.instanceMatrix.setUsage(au),s.castShadow=s.receiveShadow=!0,s.frustumCulled=!1,s.raycast=()=>{},s.count=0,this.scene.add(s),t.mesh=s,t.capacity=e}update(t){for(let e of this.buckets.values())e.count=0;for(let e of t){if(!e.visible)continue;let n=this.bindings.get(e);if(n){e.updateMatrixWorld(!0);for(let{part:s,bucket:r}of n)r.count===r.capacity&&this.grow(r,r.capacity*2),r.mesh.setMatrixAt(r.count++,s.matrixWorld)}}for(let e of this.buckets.values())e.mesh.count=e.count,e.mesh.visible=e.count>0,e.mesh.instanceMatrix.needsUpdate=!0}reset(){for(let t of this.buckets.values())this.scene.remove(t.mesh),t.mesh.dispose(),t.geometry.dispose();this.buckets.clear(),this.bindings=new WeakMap}};function s0(i,t){let e=document.createElement("canvas");e.width=e.height=i,t(e.getContext("2d"),i);let n=new Rs(e);return n.colorSpace=ve,n.wrapS=n.wrapT=Pn,n.anisotropy=4,n}function ub(){return s0(64,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"#fff6cfdd"),e.addColorStop(.18,"#ffb84a77"),e.addColorStop(.5,"#f68b271c"),e.addColorStop(1,"#fc8a1000"),i.fillStyle=e,i.fillRect(0,0,t,t)})}var da=class{constructor(t,e=Td,n="auto",s={}){this.stage=e,this.theme=Ad(e,n),this.fixedCamera=s.fixedCamera!==!1,this.useIllustrations=s.illustrated!==!1,this.allowBatchCrowd=s.batchCrowd!==!1,this.batchCrowd=this.allowBatchCrowd&&!this.useIllustrations,this.renderer=new Lr({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=ve,this.renderer.toneMapping=Us,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wi,this.scene=new Fi,this.scene.background=new Qt(this.theme.sky),this.scene.fog=new xo(this.theme.fog,48,95),this.crowd=new Jc(this.scene),this.unitTemplates=new Map,this.enemyCues=new Map,this.camera=new oi(-20,20,12,-12,.1,150),this.controls=new Xc(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minZoom=.72,this.controls.maxZoom=3.1,this.controls.minPolarAngle=.4,this.controls.maxPolarAngle=1.2,this.controls.enableRotate=!this.fixedCamera,this.controls.mouseButtons={LEFT:Hn.PAN,MIDDLE:Hn.DOLLY,RIGHT:this.fixedCamera?null:Hn.ROTATE},this.controls.touches={ONE:Wn.PAN,TWO:this.fixedCamera?Wn.DOLLY_PAN:Wn.DOLLY_ROTATE},this.controls.screenSpacePanning=!1,this.home(),this.units=new Map,this.towers=new Map,this.bullets=new Map,this.scenery=new Map,this.corpses=[],this.fires=[],this.pickables=[],this.raycaster=new Hi,this.pointer=new st,this.plane=new gn(new R(0,1,0),0),this.glowTex=ub(),this.fx=new $c(this.scene,this.glowTex,{illustrated:this.useIllustrations}),this.art=this.useIllustrations?new Yr(this):null,this.lighting(),this.environment(),this.weather(),this.range=new Rt(new ri(.98,1,96),new De({color:"#e4c58c",transparent:!0,opacity:.55,side:Re,depthWrite:!1})),this.range.rotation.x=-Math.PI/2,this.range.position.y=.09,this.range.visible=!1,this.scene.add(this.range),this.marker=new Rt(new ri(.2,.24,40),new De({color:"#b9dcf4",transparent:!0,opacity:.8,side:Re})),this.marker.rotation.x=-Math.PI/2,this.marker.visible=!1,this.scene.add(this.marker),this.placement=new pt,this.scene.add(this.placement),this.placement.visible=!1,this.placementTile=new Rt(new Oe(.95,.95),new De({color:"#91d9ad",transparent:!0,opacity:.35,side:Re,depthWrite:!1})),this.placementTile.rotation.x=-Math.PI/2,this.placementTile.position.y=.06,this.placement.add(this.placementTile),this.resize()}lighting(){let t=new Fr,e=new xs(this.renderer);this.environmentTarget=e.fromScene(t,.04),this.scene.environment=this.environmentTarget.texture,this.scene.environmentIntensity=.45,t.dispose(),e.dispose(),this.hemi=new Ds(this.theme.hemi,this.theme.bounce,1.5),this.scene.add(this.hemi);let n=new Vi("#c6deff",2.2);n.position.set(2,20,22),n.target.position.set(12,0,7),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.camera.left=-23,n.shadow.camera.right=23,n.shadow.camera.top=20,n.shadow.camera.bottom=-20,n.shadow.camera.near=.5,n.shadow.camera.far=70,n.shadow.normalBias=.03,n.shadow.bias=-12e-5,n.shadow.radius=2,this.scene.add(n,n.target),this.moon=n;let s=new Vi("#7394bc",.6);s.position.set(30,8,20),this.scene.add(s),this.fill=s,this.applySeasonLight()}home(){let t=this.renderer.domElement,e=t.clientWidth<t.clientHeight,n=this.units&&[...this.units.values()].find(o=>o.userData.hero),s=Zi(this.stage.id).paths[0].pts[Math.floor(Zi(this.stage.id).paths[0].pts.length*.62)],r=e?n?.position||{x:s.x,z:s.y}:{x:12,z:7};this.controls.target.set(r.x,.1,r.z),this.camera.position.set(r.x+17,26,r.z+26),this.camera.zoom=1.12,this.camera.lookAt(this.controls.target),this.camera.updateProjectionMatrix(),this.controls.update()}rotate(t){if(this.fixedCamera)return;let e=this.camera.position.clone().sub(this.controls.target);e.applyAxisAngle(new R(0,1,0),t*Math.PI/8),this.camera.position.copy(this.controls.target).add(e),this.controls.update()}resize(){let t=this.renderer.domElement.clientWidth,e=this.renderer.domElement.clientHeight,n=t/e,s=n<1?15:11.4;this.camera.left=-s*n,this.camera.right=s*n,this.camera.top=s,this.camera.bottom=-s,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}quality(t){this.highQuality=t,this.renderer.setPixelRatio(t?Math.min(devicePixelRatio,1.5):1),this.renderer.shadowMap.enabled=t,this.lampGroup?.traverse(e=>{e.isPointLight&&(e.visible=e.userData.lampIndex<(t?3:1))}),this.resize()}lamp(t,e,n=1.05,s=!1){let r=new pt;if(r.position.set(t,0,e),s){Vt(r,E.woodDark,0,n/2,0,.045,n),at(r,E.woodDark,0,n+.16,0,.29,.4,.29),at(r,E.window,0,n+.15,0,.23,.32,.23);for(let u of[-.13,.13])for(let d of[-.13,.13])at(r,E.woodDark,u,n+.15,d,.025,.36,.025);Te(r,E.roof,0,n+.43,0,.27,.2),Te(r,E.snow,0,n+.46,0,.23,.15)}else{Vt(r,E.woodDark,0,n*.4,0,.045,n*.8);let u=new tn(.18,.1,.17,8);u.userData.owned3d=!0,lt(r,u,E.black,0,n*.8,0);for(let p=0;p<4;p++){let x=p*Math.PI/2;It(r,E.black,[Math.cos(x)*.14,n*.78,Math.sin(x)*.14],[Math.cos(x)*.22,n+.13,Math.sin(x)*.22],.016)}let d=Te(r,de("#ffb54b",{emissive:"#ff8637",emissiveIntensity:3,transparent:!0,opacity:.95}),0,n+.07,0,.1,.43);d.rotation.z=.12;let f=Te(r,de("#fff0a4",{emissive:"#ffd466",emissiveIntensity:2}),0,n+.015,0,.055,.24);this.fires.push({flame:d,core:f,phase:t*2+e})}let o=this.fires.at(-1),a=!s&&o?[o.flame,o.core]:[];for(let u of a)r.remove(u);Le(r);for(let u of a)r.add(u);let l=new Ls("#ffb36b",this.theme.snow?8.5:3,4.2,2);l.position.set(0,n+.22,0),l.userData.lampIndex=this.lampGroup.children.length,l.visible=l.userData.lampIndex<(this.highQuality===!1?1:3),r.add(l);let c=new Rt(new Oe(2.7,2.7),new De({map:this.glowTex,color:"#ffb76d",transparent:!0,opacity:this.theme.snow?.36:.16,depthWrite:!1,blending:Un}));c.geometry.userData.owned3d=!0,c.material.userData.owned3d=!0,c.rotation.x=-Math.PI/2,c.position.y=.045,r.add(c);let h=new Oi(new vi({map:this.glowTex,color:"#ffca88",transparent:!0,depthWrite:!1,blending:Un}));h.position.set(0,n+.18,0),h.scale.set(.85,.85,1),r.add(h),nn(r,this.theme),this.lampGroup.add(r)}applySeasonLight(){let t=this.theme;this.scene.background.set(t.sky),this.scene.fog.color.set(t.fog),this.hemi.color.set(t.hemi),this.hemi.groundColor.set(t.bounce),this.hemi.intensity=t.snow?.48:.64,this.scene.environmentIntensity=t.snow?.23:.28,this.moon.color.set(t.sun),this.moon.intensity=t.sunPower,this.fill.color.set(t.fill),this.fill.intensity=t.snow?.25:.3,this.renderer.toneMappingExposure=t.exposure}environment(){let t=jm(this.stage,this.theme,this.art?.ready?this.art:null);this.static=t.root,this.water=t.water,this.field=t,this.artEnvironmentReady=!!this.art?.ready,this.scene.add(this.static,this.water),this.lampGroup=new pt,this.scene.add(this.lampGroup);for(let e of t.lamps)this.lamp(...e)}weather(){let t=Zn(209),e=this.theme.particle,n=e==="snow"?160:e==="none"?0:65,s=new Float32Array(n*3);for(let a=0;a<n;a++)s[a*3]=t()*34-5,s[a*3+1]=t()*10,s[a*3+2]=t()*24-5;let r=new Zt;r.setAttribute("position",new Se(s,3)),r.userData.owned3d=!0;let o=s0(32,(a,l)=>{let c=a.createRadialGradient(l/2,l/2,0,l/2,l/2,l/2);c.addColorStop(0,"#ffffffff"),c.addColorStop(.5,"#ffffffaa"),c.addColorStop(1,"#ffffff00"),a.fillStyle=c,a.fillRect(0,0,l,l)});this.weatherTex=o,this.snow=new as(r,new ki({color:e==="petal"?"#f0c6d3":e==="leaf"?"#e2ad60":"#edf5ff",size:e==="snow"?.065:.1,map:o,transparent:!0,opacity:.7,depthWrite:!1})),this.scene.add(this.snow),this.snow.material.userData.owned3d=!0}loadStage(t,e="auto"){this.reset();for(let n of[this.static,this.water,this.lampGroup,this.snow])this.scene.remove(n),this.disposeModel(n);this.weatherTex.dispose(),this.fires=[],this.stage=t,this.theme=Ad(t,e),this.applySeasonLight(),this.environment(),this.weather(),this.previewRoot&&(this.placement.remove(this.previewRoot),this.disposeModel(this.previewRoot,!0),this.previewRoot=null,this.previewType=null),this.home()}health(t,e=!1){let n=new pt,s=new Oe(1,1);s.userData.owned3d=!0,lt(n,s,new De({color:"#0c1b27",depthTest:!1}),0,0,0,.58,.066,1);let r=lt(n,s,new De({color:e?"#7fc6b2":"#d08676",depthTest:!1}),0,0,.001,.52,.038,1);return n.renderOrder=5,t.add(n),n.position.y=t.userData.labelHeight??(e?1.7:1.65),n.userData.front=r,n}unit(t,e,n=!1){let s=this.art?.ready&&!this.art.unitArt(t,e,n),r=(this.batchCrowd!==!1||s&&this.allowBatchCrowd)&&!e&&!n&&!t.stealth&&!["ram","wall","turtle","courier"].includes(t.type),o;if(r){let l=this.unitTemplates.get(t.type);l||(l=Pd(t.type),l.traverse(c=>{c.geometry?.userData.owned3d&&(c.geometry.userData.templateShared=!0)}),this.unitTemplates.set(t.type,l)),o=$m(l)}else o=(e?null:this.art?.unitProxy(t,n))??Pd(e?t.heroId:n?t.kind:t.type,e?t.skin:null);if(o.userData.phase=t.id%13*.7,o.userData.entity={kind:e?"hero":n?"ally":"enemy",id:t.id},t.stealth&&(o.userData.ghostMaterials=[],o.traverse(l=>{l.isMesh&&(l.material=l.material.clone(),l.material.transparent=!0,l.material.userData.owned3d=!0,o.userData.ghostMaterials.push(l.material))})),e&&n0(o),r&&this.crowd.register(o,t.type),e){let l=new ri(.22,.27,40);l.userData.owned3d=!0;let c=new De({color:t.owner===1?"#ed9b87":"#8bcbed",transparent:!0,opacity:.7,side:Re,depthWrite:!1});c.userData.owned3d=!0;let h=new Rt(l,c);h.rotation.x=-Math.PI/2,h.position.y=.025,h.raycast=()=>{},o.add(h),o.userData.ownerRing=h}let a=this.health(o,e||n);return o.userData.hp=a,this.art?.attachUnit(o,t,e,n),this.scene.add(o),this.pickables.push(o),o}sync(t,e,n,s){var a,l;if(this.art?.loading){this.range.visible=!1;return}if(this.art?.failed&&(this.batchCrowd=this.allowBatchCrowd),this.enemyCues)for(let[c,h]of this.enemyCues)h.until<=t.time&&this.enemyCues.delete(c);let r=new Set;for(let[c,h,u]of[[!0,!1,t.heroes],[!1,!1,t.enemies],[!1,!0,t.summons]])for(let d of u){let f=`${c?"h":h?"s":"e"}${d.id}`;r.add(f);let p=this.units.get(f);if(p||(p=this.unit(d,c,h),this.units.set(f,p)),d.dead){(a=p.userData).deathAt??(a.deathAt=t.time);let L=t.time-p.userData.deathAt;if(p.userData.hp.visible=!1,p.userData.rig.rotation.z=Math.min(1.45,L*4),p.visible=L<1.5,p.userData.fixedImage){let U=p.userData.fixedImage;U.image.material.opacity=Math.max(0,1-L/1.5),U.image.position.y=-L*.18,U.hint&&(U.hint.visible=!1)}continue}if(delete p.userData.deathAt,p.visible=!0,p.userData.ghostMaterials)for(let L of p.userData.ghostMaterials)L.opacity=d.revealed?1:.23;let x=p.position.clone();p.position.set(d.x,.035,d.y);let m=p.position.clone().sub(x),g=c?d.moving:h?m.lengthSq()>1e-5:!d.blockedBy&&!(d.stunT>0),y=null;if(c||h){let L=1/0;for(let U of t.enemies){let z=(U.x-d.x)**2+(U.y-d.y)**2;U.hp>0&&z<L&&(L=z,y=U)}}let v=!c&&!h?this.enemyCues?.get(d.id):null,_=v?.angle??(p.userData.castUntil>t.time?p.userData.castDirection:g&&m.lengthSq()>1e-5?Math.atan2(m.x,m.z):y&&Math.hypot(y.x-d.x,y.y-d.y)<4?Math.atan2(y.x-d.x,y.y-d.y):p.rotation.y);v?.angle!=null?p.rotation.y=_:p.rotation.y+=Math.atan2(Math.sin(_-p.rotation.y),Math.cos(_-p.rotation.y))*Math.min(1,n*12);let b=e;!c&&!h&&(d.stunT>0||(p.userData.enemyPoseTime=e),b=(l=p.userData).enemyPoseTime??(l.enemyPoseTime=e)),p.userData.illustrationProxy||ha(p,b,g,c||h?d.anim:v?Math.max(0,v.until-t.time):d.swing||0,n);let S=t.time-(c?d.hurtT:d.hitT),I=S>=0&&S<.18?1-S/.18:0;p.userData.rig.rotation.z=I*.11,p.userData.rig.position.z=-I*.055,p.userData.horseReins&&rd(p);let M=p.userData.hp,T=Math.max(0,d.hp/d.maxHp);if(M.visible=c||h||T<.99,c){M.userData.front.material.color.set(d.owner===1?"#edaa97":"#93d3c3");let L=p.userData.ownerRing;L.material.color.set(d.owner===1?"#ed9b87":"#8bcbed"),L.material.opacity=s?.kind==="hero"&&t.heroes[s.h??0]?.id===d.id?.9:.45}M.quaternion.copy(this.camera.quaternion).premultiply(p.quaternion.clone().invert()),M.userData.front.scale.x=.52*T,M.userData.front.position.x=-.26*(1-T),this.art?.attachUnit(p,d,c,h),this.art?.updateUnit(p,d,g,c||h?d.anim:v?Math.max(0,v.until-t.time):d.swing||0,e)}for(let[c,h]of this.units)r.has(c)||(this.units.delete(c),this.pickables=this.pickables.filter(u=>u!==h),h.userData.hp.visible=!1,this.corpses.push({root:h,t:0}));for(let c=this.corpses.length-1;c>=0;c--){let h=this.corpses[c];h.t+=n,h.root.rotation.z=Math.min(Math.PI/2,h.t*4),h.root.position.y=.03-h.t*.15,h.root.scale.multiplyScalar(Math.pow(.4,n)),h.t>1.3&&(this.scene.remove(h.root),this.corpses.splice(c,1),this.disposeCharacter(h.root))}this.crowd.update([...this.units.values(),...this.corpses.map(c=>c.root)]);let o=new Set;for(let c of t.towers){o.add(c.id);let h=this.towers.get(c.id),u=qu(c);if(!h||h.level!==u||h.branch!==c.branch){h&&(this.scene.remove(h.root),this.pickables=this.pickables.filter(p=>p!==h.root),this.disposeModel(h.root));let f=nn(ca(c.type,u,c.branch),this.theme);f.position.set(c.cx,.03,c.cy),f.userData.entity={kind:"tower",id:c.id},this.art?.attachTower(f,c.type,u,c.branch),this.scene.add(f),this.pickables.push(f),h={root:f,level:u,branch:c.branch},this.towers.set(c.id,h)}this.art?.attachTower(h.root,c.type,u,c.branch);let d=h.root.userData.gun;if(d){d.rotation.y=Math.PI/2-c.angle;let f=Math.max(0,c.flash)/.15*.07;d.position.x=-Math.sin(d.rotation.y)*f,d.position.z=d.userData.restZ-Math.cos(d.rotation.y)*f}}for(let[c,h]of this.towers)o.has(c)||(this.scene.remove(h.root),this.pickables=this.pickables.filter(u=>u!==h.root),this.disposeModel(h.root),this.towers.delete(c));this.camera.updateMatrixWorld();for(let c of this.towers.values())c.root.updateMatrixWorld(!0);for(let c of t.heroes)i0(this.units.get(`h${c.id}`),c,t.towers,{camera:this.camera,models:this.towers});if(this.projectiles(t),this.combatScenery(t,e,n),s?.kind==="hero"){let c=t.heroes[s.h??0];this.range.position.set(c.x,.075,c.y),this.range.scale.setScalar(Xi[c.heroId].range),this.range.visible=!c.dead}else if(s?.kind==="tower"){let c=t.towers.find(h=>h.id===s.id);this.range.visible=!!c,c&&(this.range.position.set(c.cx,.075,c.cy),this.range.scale.setScalar(am(c,t).range))}else this.range.visible=!1}disposeModel(t,e=!1){let n=new Set,s=new Set;t.traverse(r=>{r.geometry?.userData.owned3d&&!r.geometry.userData.crowdShared&&!r.geometry.userData.templateShared&&n.add(r.geometry),r.material&&(e||r.material.userData.owned3d||r.material.isSpriteMaterial||r.parent===t.userData.hp)&&s.add(r.material)});for(let r of n)r.dispose();for(let r of s)r.dispose()}disposeCharacter(t){this.disposeModel(t),t.userData.cape&&!t.userData.cape.geometry.userData.owned3d&&t.userData.cape.geometry.dispose()}combatScenery(t,e,n){let s=new Set;for(let r of t.towers)for(let o=0;o<r.beam.length;o++){let a=t.enemies.find(d=>d.id===r.beam[o]);if(!a)continue;let l=`b${r.id}-${o}`;s.add(l);let c=this.scenery.get(l);if(!c){let d=new Zt;d.setAttribute("position",new Se(new Float32Array(6),3)),d.userData.owned3d=!0;let f=new Vn({color:"#ffe8a4",transparent:!0,opacity:.85,depthWrite:!1,toneMapped:!1});f.userData.owned3d=!0,c=new si(d,f),c.frustumCulled=!1,this.scene.add(c),this.scenery.set(l,c)}let h=this.art?.towerMuzzle(this.towers.get(r.id)?.root),u=c.geometry.attributes.position;u.setXYZ(0,h?.x??r.cx,h?.y??1.2+qu(r)*.1,h?.z??r.cy),u.setXYZ(1,a.x,.8,a.y),u.needsUpdate=!0}for(let r of t.movers){let o=`m${r.id}`;s.add(o);let a=this.scenery.get(o);a||(a=this.art?.unitProxy(r,!0)??Id(r.kind),a.userData.phase=r.id%13*.7,this.scene.add(a),this.scenery.set(o,a)),a.position.set(r.x,.05,r.y),a.rotation.y=Math.atan2(r.dx,r.dy),a.userData.illustrationProxy||ha(a,e,!0,0,n),this.art?.attachUnit(a,r,!1,!0),this.art?.updateUnit(a,r,!0,0,e)}for(let r of t.zones){let o=`z${r.id}`;s.add(o);let a=this.scenery.get(o);a&&a.userData.paintedZone!==!!this.fx.art?.ready&&(this.scene.remove(a),this.disposeModel(a),this.scenery.delete(o),a=null),a||(a=this.fx.zone(r.kind,r.r),a.position.set(r.x,.075,r.y),this.scene.add(a),this.scenery.set(o,a)),this.fx.updateZone(a,r,e)}for(let r of t.projectiles)if(r.mode==="drop"&&["bomb","meteor","hangul","thunder","bigshell"].includes(r.kind)){let o=`p${r.id}`;s.add(o);let a=this.scenery.get(o);a||(a=t0(r.hit?.single?.8:r.hit?.r??.5,r.kind==="thunder"?"#acdafa":r.kind==="hangul"?"#d6dbae":"#e9ad79"),this.scene.add(a),this.scenery.set(o,a)),a.position.set(r.x,.075,r.y),a.userData.progress.scale.setScalar(Math.max(.05,1-(r.k||0)))}for(let[r,o]of this.scenery)s.has(r)||(this.scene.remove(o),this.disposeModel(o),this.scenery.delete(r))}projectiles(t){let e=new Set;for(let n of t.projectiles){e.add(n.id);let s=this.bullets.get(n.id);if(!s){if(s=new pt,n.kind==="arrow"||n.kind==="bolt"){let m=Vt(s,E.wood,0,0,0,.012,.38);m.rotation.x=Math.PI/2;let g=Te(s,E.steel,0,0,.22,.028,.1);g.rotation.x=Math.PI/2,at(s,E.snow,0,0,-.15,.08,.018,.08)}else if(n.kind==="rocket"){let m=Vt(s,E.wood,0,0,0,.035,.46);m.rotation.x=Math.PI/2;let g=Te(s,E.steel,0,0,.29,.055,.16);g.rotation.x=Math.PI/2;for(let _=0;_<3;_++){let b=at(s,E.red,0,0,-.18,.13,.018,.16);b.rotation.z=_*Math.PI/3}let y=Te(s,de("#ffd484",{emissive:"#ff9b30",emissiveIntensity:2,transparent:!0,opacity:.9}),0,0,-.46,.06,.42);y.rotation.x=-Math.PI/2;let v=new Oi(new vi({map:this.glowTex,color:"#ff9b42",transparent:!0,depthWrite:!1,blending:Un}));v.position.z=-.36,v.scale.set(.65,.65,1),s.add(v)}else{let m=["ice","frost"].includes(n.kind)?"#a5deed":["orb","star","hangul","garlic"].includes(n.kind)?"#d6d7a0":n.kind==="meteor"?"#ffb272":"#ff984f";["stone","meteor","bigshell","bomb"].includes(n.kind)?lt(s,"rock",n.kind==="meteor"?E.gold:E.stone,0,0,0,n.kind==="bigshell"?.16:.12):Nt(s,["orb","star","ice","frost","hangul","garlic"].includes(n.kind)?de(m,{emissive:m,emissiveIntensity:.7}):E.black,0,0,0,.07);let g=new Oi(new vi({map:this.glowTex,color:m,transparent:!0,depthWrite:!1,blending:Un}));g.scale.set(.32,.32,1),s.add(g)}let f=n.src?.kind==="tower"?this.towers.get(n.src.ref?.id??n.src.id)?.root:null,p=this.art?.towerMuzzle(f),x=f?.userData.gun;if(n.mode==="lob"&&(p||x)){let m=p??x.localToWorld(x.userData.muzzle.clone());s.userData.launch={height:m.y,dx:m.x-n.sx,dz:m.z-n.sy}}if(n.mode==="homing"&&n.src?.kind==="tower"){let m=t.enemies.find(g=>g.id===n.target);(p||f?.userData.arrowHeight)&&m&&(s.userData.arrow={height:p?.y??f.userData.arrowHeight+.03,dx:p?p.x-n.x:0,dz:p?p.z-n.y:0,distance:Math.max(.01,Math.hypot(m.x-n.x,m.y-n.y))})}if(n.mode==="homing"&&n.src?.kind==="hero"&&!n.chained){let m=this.units?.get(`h${n.src.ref?.id??n.src.id}`),g=m?.userData.weapons?.[1],y=t.enemies.find(v=>v.id===n.target);if(g?.userData.muzzle&&y){let v=g.localToWorld(g.userData.muzzle.clone());s.userData.arrow={height:v.y,dx:v.x-n.x,dz:v.z-n.y,distance:Math.max(.01,Math.hypot(y.x-n.x,y.y-n.y))}}}this.scene.add(s),this.bullets.set(n.id,s)}let r=n.k||0,o=s.userData.launch,a=n.mode==="lob"?(o?.height??.35)*(1-r)+.35*r+Math.sin(r*Math.PI)*2.6:n.mode==="drop"?.3+(1-r)*6:.9,l=0,c=0;if(s.userData.arrow){let f=t.enemies.find(x=>x.id===n.target),p=s.userData.arrow;if(f){let x=Math.min(1,Math.hypot(f.x-n.x,f.y-n.y)/p.distance);a=.8+(p.height-.8)*x,l=(p.dx??0)*x,c=(p.dz??0)*x}}let h=(n.mode==="drop"&&n.sx!==void 0?n.sx+(n.x-n.sx)*r:n.x)+(o?.dx??0)*(1-r)+l,u=(n.mode==="drop"&&n.sy!==void 0?n.sy+(n.y-n.sy)*r:n.y)+(o?.dz??0)*(1-r)+c,d=new R(h,a,u).sub(s.position);s.userData.placed&&d.lengthSq()>1e-6&&s.quaternion.setFromUnitVectors(new R(0,0,1),d.normalize()),s.position.set(h,a,u),s.userData.placed=!0}for(let[n,s]of this.bullets)e.has(n)||(this.scene.remove(s),this.disposeModel(s),this.bullets.delete(n))}cueEnemies(t,e){this.enemyCues??(this.enemyCues=new Map);for(let n of t)if(n.enemy!=null&&["shot","enemyStrike","enemyHeal"].includes(n.k)){let s=n.k==="shot"?3:n.k==="enemyHeal"?2:1,r=this.enemyCues.get(n.enemy);if(r?.until>e&&r.priority>s)continue;let o=Number.isFinite(n.x2)&&Number.isFinite(n.y2);this.enemyCues.set(n.enemy,{until:e+.25,angle:o?Math.atan2(n.x2-n.x1,n.y2-n.y1):null,priority:s})}}firingLine(t){let e=t.enemy!=null?`e${t.enemy}`:t.caster!=null?`h${t.caster}`:null,n=e?this.units?.get(e)?.userData.weapons?.[1]:null,s=n?.userData.muzzle?n.localToWorld(n.userData.muzzle.clone()):null;this.fx.line(s?.x??t.x1,s?.z??t.y1,t.x2,t.y2,t.c??(t.k==="bolt"?"#b9e7ff":"#f1ca82"),t.k==="snipe"?.4:.16,t.k==="bolt",s?.y??.8)}effect(t,e,n=1,s="#eac891",r="impact"){this.fx.impact(t,e,n,s,r)}faceHero(t,e,n){let s=[...this.units.values()].find(r=>r.userData.hero&&(n===void 0||r.userData.entity.id===n));s&&(s.userData.castDirection=Math.PI/2-t,s.userData.castUntil=e+.6,s.rotation.y=s.userData.castDirection)}aim(t,e){let n=this.renderer.domElement.getBoundingClientRect();this.pointer.set((t-n.left)/n.width*2-1,-(e-n.top)/n.height*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);let s=this.raycaster.ray.intersectPlane(this.plane,new R),r=null;for(let o of this.raycaster.intersectObjects(this.pickables,!0)){let a=!0;for(let c=o.object;c;c=c.parent)if(!c.visible&&!(c===o.object&&c.userData.crowdPick)){a=!1;break}if(!a)continue;if(o.object.userData.fixedArt&&o.uv){let c=o.object.material.map,h=c?.image;if(h?.getContext){let u=Math.max(0,Math.min(h.width-1,Math.floor(o.uv.x*h.width))),d=Math.max(0,Math.min(h.height-1,Math.floor((1-o.uv.y)*h.height)));if(h.getContext("2d").getImageData(u,d,1,1).data[3]<48)continue}}let l=o.object;for(;l&&!l.userData.entity;)l=l.parent;if(l){r=l.userData.entity;break}}return{point:s,entity:r}}buildPreview(t,e,n){if(this.placement.visible=!!(t&&e),!!this.placement.visible){if(this.previewType!==t||this.art?.ready&&!this.previewRoot?.userData.fixedImage){this.previewRoot&&(this.placement.remove(this.previewRoot),this.disposeModel(this.previewRoot,!0));let s=nn(ca(t),this.theme);this.art?.attachTower(s,t,1,null),s.traverse(r=>{r.isMesh&&(r.material=r.material.clone(),r.material.transparent=!0,r.material.opacity=.36,r.material.depthWrite=!1,r.castShadow=!1)}),this.placement.add(s),this.previewRoot=s,this.previewType=t}this.placement.position.set(Math.floor(e.x)+.5,0,Math.floor(e.z)+.5),this.placementTile.material.color.set(n?"#80d7a3":"#dc786d")}}markMove(t,e){this.marker.position.set(t,.075,e),this.marker.visible=!0,this.markerLife=1.8}project(t,e,n){let s=new R(t,e,n).project(this.camera),r=this.renderer.domElement;return{x:(s.x*.5+.5)*r.clientWidth,y:(-.5*s.y+.5)*r.clientHeight,visible:s.z>=-1&&s.z<=1}}draw(t,e){if(this.renderer.domElement.dataset.effectArtStatus=this.fx.art?.ready?"ready":this.fx.art?.failed?"fallback":this.fx.art?"loading":"off",this.art?.ready&&!this.artEnvironmentReady){for(let a of[this.static,this.water,this.lampGroup])this.scene.remove(a),this.disposeModel(a);this.fires=[],this.environment()}this.controls.update();let n=this.controls.target,s=ie.clamp(n.x,2,22)-n.x,r=ie.clamp(n.z,1,13)-n.z;(s||r)&&(n.x+=s,n.z+=r,this.camera.position.x+=s,this.camera.position.z+=r);let o=this.snow.geometry.attributes.position;for(let a=0;a<o.count;a++)o.setY(a,o.getY(a)-e*(.27+a%5*.04)),o.setX(a,o.getX(a)+e*(this.theme.snow?.09:.16+Math.sin(t*.7+a)*.13)),o.getY(a)<0&&o.setY(a,11),o.getX(a)>29&&o.setX(a,-5);o.needsUpdate=!0,this.water.position.y=Math.sin(t*.75)*.009;for(let a of this.fires)a.flame.scale.y=.43*(1+Math.sin(t*9+a.phase)*.17),a.flame.rotation.z=Math.sin(t*6+a.phase)*.14;this.markerLife>0&&(this.markerLife-=e,this.marker.scale.setScalar(1+Math.sin(t*6)*.1),this.marker.material.opacity=Math.min(.8,this.markerLife),this.markerLife<=0&&(this.marker.visible=!1)),this.renderer.render(this.scene,this.camera)}reset(){this.enemyCues?.clear();for(let t of[...this.units.values(),...this.corpses.map(e=>e.root)])this.scene.remove(t),this.disposeCharacter(t);for(let t of this.towers.values())this.scene.remove(t.root),this.disposeModel(t.root);for(let t of this.bullets.values())this.scene.remove(t),this.disposeModel(t);for(let t of this.scenery.values())this.scene.remove(t),this.disposeModel(t);this.scenery.clear(),this.fx.reset(),this.crowd.reset(),this.units.clear(),this.towers.clear(),this.bullets.clear(),this.corpses=[],this.pickables=[],this.placement.visible=!1,this.range.visible=!1,this.marker.visible=!1}destroy(){if(this.destroyed)return;this.destroyed=!0,this.reset(),this.fx.destroy(),this.controls.dispose();for(let e of[this.static,this.water,this.lampGroup,this.snow])this.disposeModel(e);for(let e of[this.range,this.marker,this.placement])this.disposeModel(e,!0);this.range.geometry.dispose(),this.marker.geometry.dispose(),this.placementTile.geometry.dispose(),this.weatherTex.dispose(),this.glowTex.dispose(),this.moon.shadow.dispose();let t=new Set;for(let e of this.unitTemplates.values())e.traverse(n=>{(n.geometry?.userData.owned3d||n===e.userData.cape)&&t.add(n.geometry)});for(let e of t)e.dispose();this.unitTemplates.clear(),this.art?.dispose(),this.environmentTarget.dispose(),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss()}};var r0=document.getElementById("review-canvas"),sn=new Lr({canvas:r0,antialias:!0,alpha:!0});sn.setPixelRatio(Math.min(devicePixelRatio,1.5));sn.outputColorSpace=ve;sn.toneMapping=Us;sn.toneMappingExposure=1.15;sn.shadowMap.enabled=!0;sn.shadowMap.type=Wi;var o0=new Fr,a0=new xs(sn),l0=a0.fromScene(o0,.04);o0.dispose();a0.dispose();var $i=new Fi;$i.environment=l0.texture;$i.environmentIntensity=.25;$i.add(new Ds("#d8e2eb","#626658",1.5));var Ki=new Vi("#ffe6be",2.3);Ki.position.set(-3,8,5);Ki.castShadow=!0;Ki.shadow.mapSize.set(1024,1024);Ki.shadow.camera.left=-3;Ki.shadow.camera.right=3;Ki.shadow.camera.top=6;Ki.shadow.camera.bottom=-3;Ki.shadow.normalBias=.03;$i.add(Ki);var c0=new Vi("#9eb8ce",.6);c0.position.set(5,4,-2);$i.add(c0);var pa=new Rt(new tn(1.4,1.5,.14,48),E.stoneDark);pa.position.y=-.08;pa.receiveShadow=!0;$i.add(pa);var ma=new oi(-2,2,2,-2,.1,100);ma.position.set(17,26.5,26);ma.lookAt(0,.5,0);ma.updateMatrixWorld();var Qc=new oi(-2.5,2.5,2.5,-2.5,.1,50);Qc.position.set(5,4.3,6);Qc.lookAt(0,1.65,0);Qc.updateMatrixWorld();var th=[],db=document.getElementById("tower-review"),$r=document.getElementById("tower-filter"),h0=document.getElementById("display-filter"),fa=document.getElementById("season-filter"),fb=document.getElementById("art-status"),u0=!1,Ud={renderer:sn,camera:ma,theme:{id:"summer",...Vs.summer}},Hs=new Yr(Ud);for(let i of Cc)$r.add(new Option(zs[i].name,i));$r.add(new Option("전체 유산 10종","all"));$r.value="bosingak";for(let[i,t]of Object.entries(Vs))fa.add(new Option(t.name,i));fa.value="summer";for(let i of Cc)for(let[t,e]of[[1,null],[2,null],[3,null],[4,"A"],[4,"B"]]){let n=kr(i,t,e,!0),s=document.createElement("article");s.dataset.level=t,s.dataset.type=i,s.dataset.branch=e??"",s.innerHTML=`<div class="card-title"><h2>${zs[i].name}</h2><span class="stage">${t}단계${e?" "+e:""} · ${n.isMax?"최대 · 강화 3회":n.status}</span></div><span class="tier" aria-hidden="true">${"◆".repeat(t)}${"◇".repeat(4-t)}</span><div class="model-viewport"></div><div class="card-info"><b>${n.name}</b><p>${n.appearance}</p></div>`,db.append(s),th.push({card:s,type:i,level:t,branch:e,viewport:s.querySelector(".model-viewport"),painted:null,model:null})}function pb(i,t){if(t==="painted"){if(!Hs.ready)return null;i.painted||(i.painted=new pt,Hs.attachTower(i.painted,i.type,i.level,i.branch),i.card.dataset.art=i.painted.userData.fixedImage?.dedicated?"stage":"base");let e=i.painted.userData.fixedImage?.image;return e&&Hs.material(e.material.map.image),i.painted}return i.model||(i.model=nn(ca(i.type,i.level,i.branch),Ud.theme),i.model.userData.gun&&(i.model.userData.gun.rotation.y=.22)),i.model}function vs(){if(u0)return;let i=innerWidth,t=innerHeight,e=h0.value;sn.setSize(i,t,!1),sn.setScissorTest(!1),sn.setClearColor(0,0),sn.clear(),sn.setScissorTest(!0),pa.visible=e==="model";let n=e==="model"?Qc:ma;for(let s of th){let{card:r,viewport:o}=s;if(r.hidden=$r.value!=="all"&&$r.value!==r.dataset.type,r.hidden)continue;let a=o.getBoundingClientRect();if(a.bottom<0||a.top>t)continue;let l=pb(s,e);if(!l)continue;let c=e==="model"?3.05:Math.max(1.05,1.08*a.height/a.width);n.left=-c*a.width/a.height,n.right=c*a.width/a.height,n.top=c,n.bottom=-c,n.updateProjectionMatrix(),sn.setViewport(a.left,t-a.bottom,a.width,a.height),sn.setScissor(a.left,t-a.bottom,a.width,a.height),$i.add(l),sn.render($i,n),$i.remove(l)}document.body.dataset.renderer="webgl2",document.body.dataset.display=e}$r.onchange=vs;h0.onchange=vs;fa.onchange=()=>{Ud.theme={id:fa.value,...Vs[fa.value]};for(let i of th)i.model&&(da.prototype.disposeModel(i.model),i.model=null);vs()};Hs.promise.then(()=>{let i=Hs.ready?r0.dataset.landmarkArtStatus:"fallback";document.body.dataset.artStatus=i,fb.textContent=i==="ready"?"전장과 같은 단계별 그림 50종 · 건물 높이 모두 1.2칸":Hs.ready?"일부 단계 그림을 불러오지 못해 기본 그림을 표시합니다.":"그림을 불러오지 못했습니다. 모델 대체 보기를 사용할 수 있습니다.",vs()});addEventListener("resize",vs);addEventListener("scroll",vs,{passive:!0});var mb=rm(vs);vs();addEventListener("pagehide",()=>{u0=!0,mb?.();for(let i of th)for(let t of[i.painted,i.model])t&&da.prototype.disposeModel(t);pa.geometry.dispose(),Hs.dispose(),l0.dispose(),sn.dispose()},{once:!0});
/*! For license information please see tower-review.js.LEGAL.txt */
