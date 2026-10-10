var qa="186";var Ed=0,Jl=1,Cd=2;var us=1,Rd=2,Js=3,$i=0,Yt=1,Nn=2,hi=0,Qs=1,Ql=2,eh=3,th=4,Id=5;var ds=100,Pd=101,Dd=102,Ld=103,Nd=104,Ud=200,Fd=201,Od=202,Bd=203,nh=204,ih=205,kd=206,zd=207,Gd=208,Vd=209,Hd=210,Wd=211,Xd=212,qd=213,Yd=214,fa=0,pa=1,ma=2,Bs=3,ga=4,xa=5,_a=6,ya=7,Ya=0,Zd=1,$d=2,Kn=0,sh=1,rh=2,oh=3,mo=4,ah=5,ch=6,lh=7;var hh=300,ji=301,fs=302,Za=303,$a=304,go=306,Yn=1e3,oi=1001,va=1002,Wt=1003,jd=1004;var xo=1005;var Et=1006,ja=1007;var cn=1008;var gn=1009,uh=1010,dh=1011,er=1012,Ka=1013,Jn=1014,Un=1015,Qn=1016,Ja=1017,Qa=1018,tr=1020,fh=35902,ph=35899,mh=1021,gh=1022,Jt=1023,ai=1026,Ki=1027,ec=1028,tc=1029,Ji=1030,nc=1031;var ic=1033,_o=33776,yo=33777,vo=33778,Mo=33779,sc=35840,rc=35841,oc=35842,ac=35843,cc=36196,lc=37492,hc=37496,uc=37488,dc=37489,bo=37490,fc=37491,pc=37808,mc=37809,gc=37810,xc=37811,_c=37812,yc=37813,vc=37814,Mc=37815,bc=37816,Sc=37817,wc=37818,Tc=37819,Ac=37820,Ec=37821,Cc=36492,Rc=36494,Ic=36495,Pc=36283,Dc=36284,So=36285,Lc=36286;var Nr=2300,Ma=2301,ha=2302,zl=2303,Gl=2400,Vl=2401,Hl=2402;var Kd=3200;var wo=0,Jd=1,Fn="",Pt="srgb",as="srgb-linear",Ur="linear",xt="srgb";var ua=7680;var Qd=519,ef=512,tf=513,nf=514,Nc=515,sf=516,rf=517,Uc=518,of=519,af=35044;var xh="300 es",qn=2e3,ks=2001;function Sm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cf(){let n=zs("canvas");return n.style.display="block",n}var Zu={},Gs=null;function _h(...n){let e="THREE."+n.shift();Gs?Gs("log",e,...n):console.log(e,...n)}function lf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=lf(n);let e="THREE."+n.shift();if(Gs)Gs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=lf(n);let e="THREE."+n.shift();if(Gs)Gs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function os(...n){let e=n.join(" ");e in Zu||(Zu[e]=!0,Ye(...n))}function hf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var uf={[fa]:pa,[ma]:_a,[ga]:ya,[Bs]:xa,[pa]:fa,[_a]:ma,[ya]:ga,[xa]:Bs},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=1234567,Ir=Math.PI/180,Vs=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function yh(n,e){return(n%e+e)%e}function Tm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Am(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function Em(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function Cm(n,e=1){return e-Math.abs(yh(n,e*2)-e)}function Rm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Im(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dm(n,e){return n+Math.random()*(e-n)}function Lm(n){return n*(.5-Math.random())}function Nm(n){n!==void 0&&($u=n);let e=$u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Um(n){return n*Ir}function Fm(n){return n*Vs}function Om(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Bm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function km(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zm(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*p,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*p,a*l);break;case"ZYZ":n.set(c*p,c*d,a*h,a*l);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lt={DEG2RAD:Ir,RAD2DEG:Vs,generateUUID:ps,clamp:rt,euclideanModulo:yh,mapLinear:Tm,inverseLerp:Am,lerp:Pr,damp:Em,pingpong:Cm,smoothstep:Rm,smootherstep:Im,randInt:Pm,randFloat:Dm,randFloatSpread:Lm,seededRandom:Nm,degToRad:Um,radToDeg:Fm,isPowerOfTwo:Om,ceilPowerOfTwo:Bm,floorPowerOfTwo:km,setQuaternionFromProperEuler:zm,normalize:sn,denormalize:Fs},Th=class Th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Th.prototype.isVector2=!0;var de=Th,Ct=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==p){let m=c*f+l*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);g=Math.sin(g*y)/v,a=Math.sin(a*y)/v,c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+x*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ah=class Ah{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ah.prototype.isVector3=!0;var L=Ah,gl=new L,ju=new Ct,Eh=class Eh{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],m=s[3],g=s[6],y=s[1],v=s[4],_=s[7],b=s[2],w=s[5],R=s[8];return r[0]=o*x+a*y+c*b,r[3]=o*m+a*v+c*w,r[6]=o*g+a*_+c*R,r[1]=l*x+h*y+u*b,r[4]=l*m+h*v+u*w,r[7]=l*g+h*_+u*R,r[2]=f*x+d*y+p*b,r[5]=f*m+d*v+p*w,r[8]=f*g+d*_+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xl.makeScale(e,t)),this}rotate(e){return os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;var Je=Eh,xl=new Je,Ku=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gm(){let n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:e,whitePoint:i,transfer:Ur,toXYZ:Ku,fromXYZ:Ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Ku,fromXYZ:Ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}var ct=Gm();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ms,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=zs("canvas")),Ms.width=e.width,Ms.height=e.height;let s=Ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vm=0,Hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_l(s[o].image)):r.push(_l(s[o]))}else r=_l(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Hm=0,yl=new L,fn=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=Et,o=cn,a=Jt,c=gn,l=n.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=ps(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yl).x}get height(){return this.source.getSize(yl).y}get depth(){return this.source.getSize(yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=hh;fn.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(d+1)/2,b=(g+1)/2,w=(h+f)/4,R=(u+x)/4,M=(p+m)/4;return v>_&&v>b?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=R/i):_>b?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=M/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=R/r,s=M/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var Rt=Ch,Sa=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new fn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Sa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fr=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xa=class Xa{constructor(e,t,i,s,r,o,a,c,l,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,d,p,x,m)}set(e,t,i,s,r,o,a,c,l,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,i){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(i,vn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(i,vn)),Fi.normalize(),Vo.crossVectors(vn,Fi),s[0]=Fi.x,s[4]=Vo.x,s[8]=vn.x,s[1]=Fi.y,s[5]=Vo.y,s[9]=vn.y,s[2]=Fi.z,s[6]=Vo.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],v=i[7],_=i[11],b=i[15],w=s[0],R=s[4],M=s[8],T=s[12],N=s[1],U=s[5],z=s[9],F=s[13],C=s[2],D=s[6],G=s[10],O=s[14],j=s[3],I=s[7],B=s[11],W=s[15];return r[0]=o*w+a*N+c*C+l*j,r[4]=o*R+a*U+c*D+l*I,r[8]=o*M+a*z+c*G+l*B,r[12]=o*T+a*F+c*O+l*W,r[1]=h*w+u*N+f*C+d*j,r[5]=h*R+u*U+f*D+d*I,r[9]=h*M+u*z+f*G+d*B,r[13]=h*T+u*F+f*O+d*W,r[2]=p*w+x*N+m*C+g*j,r[6]=p*R+x*U+m*D+g*I,r[10]=p*M+x*z+m*G+g*B,r[14]=p*T+x*F+m*O+g*W,r[3]=y*w+v*N+_*C+b*j,r[7]=y*R+v*U+_*D+b*I,r[11]=y*M+v*z+_*G+b*B,r[15]=y*T+v*F+_*O+b*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=c*d-l*f,v=a*d-l*u,_=a*f-c*u,b=o*d-l*h,w=o*f-c*h,R=o*u-a*h;return t*(x*y-m*v+g*_)-i*(p*y-m*b+g*w)+s*(p*v-x*b+g*R)-r*(p*_-x*w+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,v=t*c-s*o,_=t*l-r*o,b=i*c-s*a,w=i*l-r*a,R=s*l-r*c,M=h*x-u*p,T=h*m-f*p,N=h*g-d*p,U=u*m-f*x,z=u*g-d*x,F=f*g-d*m,C=y*F-v*z+_*U+b*N-w*T+R*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=(a*F-c*z+l*U)*D,e[1]=(s*z-i*F-r*U)*D,e[2]=(x*R-m*w+g*b)*D,e[3]=(f*w-u*R-d*b)*D,e[4]=(c*N-o*F-l*T)*D,e[5]=(t*F-s*N+r*T)*D,e[6]=(m*_-p*R-g*v)*D,e[7]=(h*R-f*_+d*v)*D,e[8]=(o*z-a*N+l*M)*D,e[9]=(i*N-t*z-r*M)*D,e[10]=(p*w-x*_+g*y)*D,e[11]=(u*_-h*w-d*y)*D,e[12]=(a*T-o*U-c*M)*D,e[13]=(t*U-i*T+s*M)*D,e[14]=(x*v-p*b-m*y)*D,e[15]=(h*b-u*v+f*y)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=c*l,v=c*h,_=c*u,b=i.x,w=i.y,R=i.z;return s[0]=(1-(x+g))*b,s[1]=(d+_)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+g))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(p+v)*R,s[9]=(m-y)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),c=bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let l=1/o,h=1/a,u=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=qn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===qn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ks)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===qn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ks)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xa.prototype.isMatrix4=!0;var _t=Xa,bs=new L,Vn=new _t,Wm=new L(0,0,0),Xm=new L(1,1,1),Fi=new L,Vo=new L,vn=new L,Qu=new _t,ed=new Ct,Kt=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qm=0,td=new L,Ss=new Ct,yi=new _t,Ho=new L,Sr=new L,Ym=new L,Zm=new Ct,nd=new L(1,0,0),id=new L(0,1,0),sd=new L(0,0,1),rd={type:"added"},$m={type:"removed"},ws={type:"childadded",child:null},vl={type:"childremoved",child:null},Xt=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Kt,i=new Ct,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Sr,Ho,this.up):yi.lookAt(Ho,Sr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(yi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),ws.child=e,this.dispatchEvent(ws),ws.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new L(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Oe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var tt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=yh(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ml(o,r,e+1/3),this.g=Ml(o,r,e),this.b=Ml(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let i=df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return ct.workingToColorSpace(jt.copy(this),e),Math.round(rt(jt.r*255,0,255))*65536+Math.round(rt(jt.g*255,0,255))*256+Math.round(rt(jt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(jt.copy(this),t);let i=jt.r,s=jt.g,r=jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Pt){ct.workingToColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,s=jt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Wo);let i=Pr(Oi.h,Wo.h,t),s=Pr(Oi.s,Wo.s,t),r=Pr(Oi.l,Wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new tt;tt.NAMES=df;var cs=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new L,vi=new L,bl=new L,Mi=new L,Ts=new L,As=new L,od=new L,Sl=new L,wl=new L,Tl=new L,Al=new Rt,El=new Rt,Cl=new Rt,Gi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),vi.subVectors(i,t),bl.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(vi),c=Hn.dot(bl),l=vi.dot(vi),h=vi.dot(bl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Al.setScalar(0),El.setScalar(0),Cl.setScalar(0),Al.fromBufferAttribute(e,t),El.fromBufferAttribute(e,i),Cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Al,r.x),o.addScaledVector(El,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),vi.subVectors(e,t),Hn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ts.subVectors(s,i),As.subVectors(r,i),Sl.subVectors(e,i);let c=Ts.dot(Sl),l=As.dot(Sl);if(c<=0&&l<=0)return t.copy(i);wl.subVectors(e,s);let h=Ts.dot(wl),u=As.dot(wl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Ts,o);Tl.subVectors(e,r);let d=Ts.dot(Tl),p=As.dot(Tl);if(p>=0&&d<=p)return t.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(As,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return od.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(od,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),qo.subVectors(this.max,wr),Es.subVectors(e.a,wr),Cs.subVectors(e.b,wr),Rs.subVectors(e.c,wr),Bi.subVectors(Cs,Es),ki.subVectors(Rs,Cs),ts.subVectors(Es,Rs);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ts.z,ts.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ts.z,0,-ts.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ts.y,ts.x,0];return!Rl(t,Es,Cs,Rs,qo)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Es,Cs,Rs,qo))?!1:(Yo.crossVectors(Bi,ki),t=[Yo.x,Yo.y,Yo.z],Rl(t,Es,Cs,Rs,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,Xo=new qt,Es=new L,Cs=new L,Rs=new L,Bi=new L,ki=new L,ts=new L,wr=new L,qo=new L,Yo=new L,ns=new L;function Rl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bt=new L,Zo=new de,Km=0,kt=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Or=class extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Br=class extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var De=class extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Jm=new qt,Tr=new L,Il=new L,Vi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Il)),this.expandByPoint(Tr.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qm=0,Pn=new _t,Pl=new Xt,Is=new L,Mn=new qt,Ar=new qt,Ht=new L,ht=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sm(e)?Br:Or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Mn.min,Ar.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,Ar.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(Ar.min),Mn.expandByPoint(Ar.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ht.fromBufferAttribute(a,l),c&&(Is.fromBufferAttribute(e,l),Ht.add(Is)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new L,c[M]=new L;let l=new L,h=new L,u=new L,f=new de,d=new de,p=new de,x=new L,m=new L;function g(M,T,N){l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,N),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,N),h.sub(l),u.sub(l),d.sub(f),p.sub(f);let U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(U),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(U),a[M].add(x),a[T].add(x),a[N].add(x),c[M].add(m),c[T].add(m),c[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,T=y.length;M<T;++M){let N=y[M],U=N.start,z=N.count;for(let F=U,C=U+z;F<C;F+=3)g(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new L,_=new L,b=new L,w=new L;function R(M){b.fromBufferAttribute(s,M),w.copy(b);let T=a[M];v.copy(T),v.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(w,T);let U=_.dot(c[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,U)}for(let M=0,T=y.length;M<T;++M){let N=y[M],U=N.start,z=N.count;for(let F=U,C=U+z;F<C;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new kt(f,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Dl=new L,e0=new L,t0=new Je,Xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Dl.subVectors(i,t).cross(e0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Dl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t0.getNormalMatrix(e),s=this.coplanarPoint(Dl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},n0=0,Ti=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Qs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new L,Ll=new L,$o=new L,jo=new L,kr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ll.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(Ll);let r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=jo.dot(this.direction),c=-jo.dot($o),l=jo.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ll).addScaledVector($o,f),d}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,v=i.z-o.z,_=Math.abs(c),b=Math.abs(l),w=Math.abs(h),R,M,T,N,U,z,F,C,D,G,O,j;if(_>=b&&_>=w?(T=c,z=u,D=p,j=g,c>=0?(R=l,M=h,N=f,U=d,F=x,C=m,G=y,O=v):(R=h,M=l,N=d,U=f,F=m,C=x,G=v,O=y)):b>=w?(T=l,z=f,D=x,j=y,l>=0?(R=h,M=c,N=d,U=u,F=m,C=p,G=v,O=g):(R=c,M=h,N=u,U=d,F=p,C=m,G=g,O=v)):(T=h,z=d,D=m,j=v,h>=0?(R=c,M=l,N=u,U=f,F=p,C=x,G=g,O=y):(R=l,M=c,N=f,U=u,F=x,C=p,G=y,O=g)),T===0)return null;let I=R/T,B=M/T,W=1/T,ie=N-I*z,re=U-B*z,Pe=F-I*D,Ve=C-B*D,et=G-I*j,J=O-B*j,ee=et*Ve-J*Pe,Se=ie*J-re*et,$e=Pe*re-Ve*ie;if(s){if(ee<0||Se<0||$e<0)return null}else if((ee<0||Se<0||$e<0)&&(ee>0||Se>0||$e>0))return null;let Ee=ee+Se+$e;if(Ee===0)return null;let je=W*(ee*z+Se*D+$e*j);return(Ee>0?je<0:je>0)?null:this.at(je/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ad=new _t,is=new kr,Ko=new Vi,cd=new L,Jo=new L,Qo=new L,ea=new L,Nl=new L,ta=new L,ld=new L,na=new L,ut=class extends Xt{constructor(e=new ht,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Nl.fromBufferAttribute(u,e),o?ta.addScaledVector(Nl,h):ta.addScaledVector(Nl.sub(t),h))}t.add(ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(Ko.containsPoint(is.origin)===!1&&(is.intersectSphere(Ko,cd)===null||is.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ad.copy(r).invert(),is.copy(e.ray).applyMatrix4(ad),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,b=v;_<b;_+=3){let w=a.getX(_),R=a.getX(_+1),M=a.getX(_+2);s=ia(this,g,e,i,l,h,u,w,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=ia(this,o,e,i,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,b=v;_<b;_+=3){let w=_,R=_+1,M=_+2;s=ia(this,g,e,i,l,h,u,w,R,M),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=m,v=m+1,_=m+2;s=ia(this,o,e,i,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function i0(n,e,t,i,s,r,o,a){let c;if(e.side===Yt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===$i,a),c===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:n}}function ia(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Jo),n.getVertexPosition(c,Qo),n.getVertexPosition(l,ea);let h=i0(n,e,t,i,Jo,Qo,ea,ld);if(h){let u=new L;Gi.getBarycoord(ld,Jo,Qo,ea,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,c,l,u,new de)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,c,l,u,new de)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Gi.getNormal(Jo,Qo,ea,f.normal),h.face=f,h.barycoord=u}return h}var Dn=class extends fn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Wt,h=Wt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=class extends kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new _t,hd=new _t,sa=[],ud=new qt,s0=new _t,Er=new ut,Cr=new Vi,Gr=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,s0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),ud.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),Cr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),hd.multiplyMatrices(i,Ps),Er.matrixWorld=hd,Er.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){let c=sa[o];c.instanceId=r,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dn(new Float32Array(s*this.count),s,this.count,ec,Un));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new Vi,r0=new de(.5,.5),ra=new L,Ys=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-o,d-h,g-p,b-y).normalize(),s[1].setComponents(l+o,d+h,g+p,b+y).normalize(),s[2].setComponents(l+a,d+u,g+x,b+v).normalize(),s[3].setComponents(l-a,d-u,g-x,b-v).normalize(),i)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,d-f,g-m,b-_).normalize();else if(s[4].setComponents(l-c,d-f,g-m,b-_).normalize(),t===qn)s[5].setComponents(l+c,d+f,g+m,b+_).normalize();else if(t===ks)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=r0.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vr=class extends fn{constructor(e=[],t=ji,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Hi=class extends fn{constructor(e,t,i=Jn,s,r,o,a=Wt,c=Wt,l,h=ai,u=1){if(h!==ai&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ta=class extends Hi{constructor(e,t=Jn,i=ji,s,r,o=Wt,a=Wt,c,l=ai){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hr=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ln=class n extends ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function p(x,m,g,y,v,_,b,w,R,M,T){let N=_/R,U=b/M,z=_/2,F=b/2,C=w/2,D=R+1,G=M+1,O=0,j=0,I=new L;for(let B=0;B<G;B++){let W=B*U-F;for(let ie=0;ie<D;ie++){let re=ie*N-z;I[x]=re*y,I[m]=W*v,I[g]=C,l.push(I.x,I.y,I.z),I[x]=0,I[m]=0,I[g]=w>0?1:-1,h.push(I.x,I.y,I.z),u.push(ie/R),u.push(1-B/M),O+=1}}for(let B=0;B<M;B++)for(let W=0;W<R;W++){let ie=f+W+D*B,re=f+W+D*(B+1),Pe=f+(W+1)+D*(B+1),Ve=f+(W+1)+D*B;c.push(ie,re,Ve),c.push(re,Pe,Ve),j+=6}a.addGroup(d,j,T),d+=j,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wr=class n extends ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new de;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zn=class n extends ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(d,2));function y(){let _=new L,b=new L,w=0,R=(t-e)/i;for(let M=0;M<=r;M++){let T=[],N=M/r,U=N*(t-e)+e;for(let z=0;z<=s;z++){let F=z/s,C=F*c+a,D=Math.sin(C),G=Math.cos(C);b.x=U*D,b.y=-N*i+m,b.z=U*G,u.push(b.x,b.y,b.z),_.set(D,R,G).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-N),T.push(p++)}x.push(T)}for(let M=0;M<s;M++)for(let T=0;T<r;T++){let N=x[T][M],U=x[T+1][M],z=x[T+1][M+1],F=x[T][M+1];(e>0||T!==0)&&(h.push(N,U,F),w+=3),(t>0||T!==r-1)&&(h.push(U,z,F),w+=3)}l.addGroup(g,w,0),g+=w}function v(_){let b=p,w=new de,R=new L,M=0,T=_===!0?e:t,N=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*N,0),f.push(0,N,0),d.push(.5,.5),p++;let U=p;for(let z=0;z<=s;z++){let C=z/s*c+a,D=Math.cos(C),G=Math.sin(C);R.x=T*G,R.y=m*N,R.z=T*D,u.push(R.x,R.y,R.z),f.push(0,N,0),w.x=D*.5+.5,w.y=G*.5*N+.5,d.push(w.x,w.y),p++}for(let z=0;z<s;z++){let F=b+z,C=U+z;_===!0?h.push(C,C+1,F):h.push(C+1,C,F),M+=3}l.addGroup(g,M,_===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xr=class n extends Zn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class n extends ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(r.slice(),3)),this.setAttribute("uv",new De(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new L,_=new L,b=new L;for(let w=0;w<t.length;w+=3)d(t[w+0],v),d(t[w+1],_),d(t[w+2],b),c(v,_,b,y)}function c(y,v,_,b){let w=b+1,R=[];for(let M=0;M<=w;M++){R[M]=[];let T=y.clone().lerp(_,M/w),N=v.clone().lerp(_,M/w),U=w-M;for(let z=0;z<=U;z++)z===0&&M===w?R[M][z]=T:R[M][z]=T.clone().lerp(N,z/U)}for(let M=0;M<w;M++)for(let T=0;T<2*(w-M)-1;T++){let N=Math.floor(T/2);T%2===0?(f(R[M][N+1]),f(R[M+1][N]),f(R[M][N])):(f(R[M][N+1]),f(R[M+1][N+1]),f(R[M+1][N]))}}function l(y){let v=new L;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new L;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(_,1-b)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],b=o[y+4],w=Math.max(v,_,b),R=Math.min(v,_,b);w>.9&&R<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function p(){let y=new L,v=new L,_=new L,b=new L,w=new de,R=new de,M=new de;for(let T=0,N=0;T<r.length;T+=9,N+=6){y.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(o[N+0],o[N+1]),R.set(o[N+2],o[N+3]),M.set(o[N+4],o[N+5]),b.copy(y).add(v).add(_).divideScalar(3);let U=m(b);x(w,N+0,y,U),x(R,N+2,v,U),x(M,N+4,_,U)}}function x(y,v,_,b){b<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Yr=class n extends qr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],o=[],a=new L,c=new _t;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zs=class extends bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Aa=class extends Zs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var dd=new L,fd=new L,Ul=new vh,Fl=new vh,Ol=new vh,on=class extends bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fd.subVectors(s[0],s[1]).add(s[0]),l=fd);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(dd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ul.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,m),Fl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,m),Ol.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Fl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ol.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Ul.calc(c),Fl.calc(c),Ol.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function o0(n,e){let t=1-n;return t*t*e}function a0(n,e){return 2*(1-n)*n*e}function c0(n,e){return n*n*e}function Dr(n,e,t,i){return o0(n,e)+a0(n,t)+c0(n,i)}function l0(n,e){let t=1-n;return t*t*t*e}function h0(n,e){let t=1-n;return 3*t*t*n*e}function u0(n,e){return 3*(1-n)*n*n*e}function d0(n,e){return n*n*n*e}function Lr(n,e,t,i,s){return l0(n,e)+h0(n,t)+u0(n,i)+d0(n,s)}var Zr=class extends bn{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends bn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y),Lr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends bn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends bn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends bn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Dr(e,s.x,r.x,o.x),Dr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends bn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Dr(e,s.x,r.x,o.x),Dr(e,s.y,r.y,o.y),Dr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(pd(a,c.x,l.x,h.x,u.x),pd(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Ra=Object.freeze({__proto__:null,ArcCurve:Aa,CatmullRomCurve3:on,CubicBezierCurve:Zr,CubicBezierCurve3:Ea,EllipseCurve:Zs,LineCurve:$r,LineCurve3:Ca,QuadraticBezierCurve:jr,QuadraticBezierCurve3:Kr,SplineCurve:Jr}),Ia=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ra[s.type]().fromJSON(s))}return this}},Qr=class extends Ia{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new $r(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new jr(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Zr(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Jr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Zs(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$n=class extends Qr{constructor(e){super(e),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Qr().fromJSON(s))}return this}};function f0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ff(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=_0(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let h=a,u=c;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return eo(r,o,t,a,c,l,0),o}function ff(n,e,t,i,s){let r;if(s===R0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=md(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=md(o/i|0,n[o],n[o+1],r);return r&&$s(r,r.next)&&(no(r),r=r.next),r}function ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($s(t,t.next)||It(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function eo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&S0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?m0(n,i,s,r):p0(n)){e.push(c.i,n.i,l.i),no(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=g0(ls(n),e),eo(n,e,t,i,s,r,2)):o===2&&x0(n,e,t,i,s,r):eo(ls(n),e,t,i,s,r,1);break}}}function p0(n){let e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Rr(s,a,r,c,o,l,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function m0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),p=Math.min(h,u,f),x=Math.max(a,c,l),m=Math.max(h,u,f),g=Wl(d,p,e,t,i),y=Wl(x,m,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=g&&_&&_.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Rr(a,h,c,u,l,f,v.x,v.y)&&It(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Rr(a,h,c,u,l,f,_.x,_.y)&&It(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&Rr(a,h,c,u,l,f,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Rr(a,h,c,u,l,f,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function g0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!$s(i,s)&&mf(i,t,t.next,s)&&to(i,s)&&to(s,i)&&(e.push(i.i,t.i,s.i),no(t),no(t.next),t=n=s),t=t.next}while(t!==n);return ls(t)}function x0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&A0(o,a)){let c=gf(o,a);o=ls(o,o.next),c=ls(c,c.next),eo(o,e,t,i,s,r,0),eo(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=ff(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(T0(l))}s.sort(y0);for(let r=0;r<s.length;r++)t=v0(s[r],t);return t}function y0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function v0(n,e){let t=M0(n,e);if(!t)return e;let i=gf(t,n);return ls(i,i.next),ls(t,t.next)}function M0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if($s(n,t))return t;do{if($s(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&pf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);to(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&b0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function b0(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function S0(n,e,t,i){let s=n;do s.z===0&&(s.z=Wl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,w0(s)}function w0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Wl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function T0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Rr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&pf(n,e,t,i,s,r,o,a)}function A0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!E0(n,e)&&(to(n,e)&&to(e,n)&&C0(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||$s(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $s(n,e){return n.x===e.x&&n.y===e.y}function mf(n,e,t,i){let s=aa(It(n,e,t)),r=aa(It(n,e,i)),o=aa(It(t,i,n)),a=aa(It(t,i,e));return!!(s!==r&&o!==a||s===0&&oa(n,t,e)||r===0&&oa(n,i,e)||o===0&&oa(t,n,i)||a===0&&oa(t,e,i))}function oa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function aa(n){return n>0?1:n<0?-1:0}function E0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function to(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function C0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gf(n,e){let t=Xl(n.i,n.x,n.y),i=Xl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function md(n,e,t,i){let s=Xl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function no(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Xl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var ql=class{static triangulate(e,t,i=2){return f0(e,t,i)}},rs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];gd(e),xd(i,e);let o=e.length;t.forEach(gd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,xd(i,t[c]);let a=ql.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function gd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function xd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var li=class n extends ht{constructor(e=new $n([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new De(s,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:I0,v,_=!1,b,w,R,M;if(g){v=g.getSpacedPoints(h),_=!0,f=!1;let se=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,se),w=new L,R=new L,M=new L}f||(m=0,d=0,p=0,x=0);let T=a.extractPoints(l),N=T.shape,U=T.holes;if(!rs.isClockWise(N)){N=N.reverse();for(let se=0,le=U.length;se<le;se++){let he=U[se];rs.isClockWise(he)&&(U[se]=he.reverse())}}function F(se){let he=10000000000000001e-36,ue=se[0];for(let ge=1;ge<=se.length;ge++){let Xe=ge%se.length,He=se[Xe],Ke=He.x-ue.x,Qe=He.y-ue.y,k=Ke*Ke+Qe*Qe,pt=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(ue.x),Math.abs(ue.y)),ot=he*pt*pt;if(k<=ot){se.splice(Xe,1),ge--;continue}ue=He}}F(N),U.forEach(F);let C=U.length,D=N;for(let se=0;se<C;se++){let le=U[se];N=N.concat(le)}function G(se,le,he){return le||Ze("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(le,he)}let O=N.length;function j(se,le,he){let ue,ge,Xe,He=se.x-le.x,Ke=se.y-le.y,Qe=he.x-se.x,k=he.y-se.y,pt=He*He+Ke*Ke,ot=He*k-Ke*Qe;if(Math.abs(ot)>Number.EPSILON){let P=Math.sqrt(pt),S=Math.sqrt(Qe*Qe+k*k),X=le.x-Ke/P,Z=le.y+He/P,K=he.x-k/S,fe=he.y+Qe/S,me=((K-X)*k-(fe-Z)*Qe)/(He*k-Ke*Qe);ue=X+He*me-se.x,ge=Z+Ke*me-se.y;let Q=ue*ue+ge*ge;if(Q<=2)return new de(ue,ge);Xe=Math.sqrt(Q/2)}else{let P=!1;He>Number.EPSILON?Qe>Number.EPSILON&&(P=!0):He<-Number.EPSILON?Qe<-Number.EPSILON&&(P=!0):Math.sign(Ke)===Math.sign(k)&&(P=!0),P?(ue=-Ke,ge=He,Xe=Math.sqrt(pt)):(ue=He,ge=Ke,Xe=Math.sqrt(pt/2))}return new de(ue/Xe,ge/Xe)}let I=[];for(let se=0,le=D.length,he=le-1,ue=se+1;se<le;se++,he++,ue++)he===le&&(he=0),ue===le&&(ue=0),I[se]=j(D[se],D[he],D[ue]);let B=[],W,ie=I.concat();for(let se=0,le=C;se<le;se++){let he=U[se];W=[];for(let ue=0,ge=he.length,Xe=ge-1,He=ue+1;ue<ge;ue++,Xe++,He++)Xe===ge&&(Xe=0),He===ge&&(He=0),W[ue]=j(he[ue],he[Xe],he[He]);B.push(W),ie=ie.concat(W)}let re;if(m===0)re=rs.triangulateShape(D,U);else{let se=[],le=[];for(let he=0;he<m;he++){let ue=he/m,ge=d*Math.cos(ue*Math.PI/2),Xe=p*Math.sin(ue*Math.PI/2)+x;for(let He=0,Ke=D.length;He<Ke;He++){let Qe=G(D[He],I[He],Xe);Se(Qe.x,Qe.y,-ge),ue===0&&se.push(Qe)}for(let He=0,Ke=C;He<Ke;He++){let Qe=U[He];W=B[He];let k=[];for(let pt=0,ot=Qe.length;pt<ot;pt++){let P=G(Qe[pt],W[pt],Xe);Se(P.x,P.y,-ge),ue===0&&k.push(P)}ue===0&&le.push(k)}}re=rs.triangulateShape(se,le)}let Pe=re.length,Ve=p+x;for(let se=0;se<O;se++){let le=f?G(N[se],ie[se],Ve):N[se];_?(R.copy(b.normals[0]).multiplyScalar(le.x),w.copy(b.binormals[0]).multiplyScalar(le.y),M.copy(v[0]).add(R).add(w),Se(M.x,M.y,M.z)):Se(le.x,le.y,0)}for(let se=1;se<=h;se++)for(let le=0;le<O;le++){let he=f?G(N[le],ie[le],Ve):N[le];_?(R.copy(b.normals[se]).multiplyScalar(he.x),w.copy(b.binormals[se]).multiplyScalar(he.y),M.copy(v[se]).add(R).add(w),Se(M.x,M.y,M.z)):Se(he.x,he.y,u/h*se)}for(let se=m-1;se>=0;se--){let le=se/m,he=d*Math.cos(le*Math.PI/2),ue=p*Math.sin(le*Math.PI/2)+x;for(let ge=0,Xe=D.length;ge<Xe;ge++){let He=G(D[ge],I[ge],ue);Se(He.x,He.y,u+he)}for(let ge=0,Xe=U.length;ge<Xe;ge++){let He=U[ge];W=B[ge];for(let Ke=0,Qe=He.length;Ke<Qe;Ke++){let k=G(He[Ke],W[Ke],ue);_?Se(k.x,k.y+v[h-1].y,v[h-1].x+he):Se(k.x,k.y,u+he)}}}et(),J();function et(){let se=s.length/3;if(f){let le=0,he=O*le;for(let ue=0;ue<Pe;ue++){let ge=re[ue];$e(ge[2]+he,ge[1]+he,ge[0]+he)}le=h+m*2,he=O*le;for(let ue=0;ue<Pe;ue++){let ge=re[ue];$e(ge[0]+he,ge[1]+he,ge[2]+he)}}else{for(let le=0;le<Pe;le++){let he=re[le];$e(he[2],he[1],he[0])}for(let le=0;le<Pe;le++){let he=re[le];$e(he[0]+O*h,he[1]+O*h,he[2]+O*h)}}i.addGroup(se,s.length/3-se,0)}function J(){let se=s.length/3,le=0;ee(D,le),le+=D.length;for(let he=0,ue=U.length;he<ue;he++){let ge=U[he];ee(ge,le),le+=ge.length}i.addGroup(se,s.length/3-se,1)}function ee(se,le){let he=se.length;for(;--he>=0;){let ue=he,ge=he-1;ge<0&&(ge=se.length-1);for(let Xe=0,He=h+m*2;Xe<He;Xe++){let Ke=O*Xe,Qe=O*(Xe+1),k=le+ue+Ke,pt=le+ge+Ke,ot=le+ge+Qe,P=le+ue+Qe;Ee(k,pt,ot,P)}}}function Se(se,le,he){c.push(se),c.push(le),c.push(he)}function $e(se,le,he){je(se),je(le),je(he);let ue=s.length/3,ge=y.generateTopUV(i,s,ue-3,ue-2,ue-1);yt(ge[0]),yt(ge[1]),yt(ge[2])}function Ee(se,le,he,ue){je(se),je(le),je(ue),je(le),je(he),je(ue);let ge=s.length/3,Xe=y.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);yt(Xe[0]),yt(Xe[1]),yt(Xe[3]),yt(Xe[1]),yt(Xe[2]),yt(Xe[3])}function je(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function yt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return P0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ra[s.type]().fromJSON(s)),new n(i,e.options)}},I0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new de(r,o),new de(a,c),new de(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new de(o,1-c),new de(l,1-u),new de(f,1-p),new de(x,1-g)]:[new de(a,1-c),new de(h,1-u),new de(d,1-p),new de(m,1-g)]}};function P0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var io=class n extends qr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},so=class n extends ht{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new L,f=new de,d=new L,p=new L,x=new L,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=t;y++){let v=i+y*h*s,_=Math.sin(v),b=Math.cos(v);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*b,o.push(u.x,u.y,u.z),f.x=y/t,f.y=w/(e.length-1),a.push(f.x,f.y);let R=c[3*w+0]*_,M=c[3*w+1],T=c[3*w+0]*b;l.push(R,M,T)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,b=_,w=_+e.length,R=_+e.length+1,M=_+1;r.push(b,w,M),r.push(R,M,w)}this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("uv",new De(a,2)),this.setAttribute("normal",new De(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var jn=class n extends ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let v=0;v<l;v++){let _=v*u-r;p.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let v=y+l*g,_=y+l*(g+1),b=y+1+l*(g+1),w=y+1+l*g;d.push(v,_,w),d.push(_,b,w)}this.setIndex(d),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ro=class n extends ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],v=g/i,_=o+v*a,b=e*Math.cos(_),w=Math.sqrt(e*e-b*b),R=0;g===0&&o===0?R=.5/t:g===i&&c===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){let T=M/t,N=s+T*r;u.x=-w*Math.cos(N),u.y=b,u.z=w*Math.sin(N),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+R,1-v),y.push(l++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let v=h[g][y+1],_=h[g][y],b=h[g+1][y],w=h[g+1][y+1];(g!==0||o>0)&&d.push(v,_,w),(g!==i-1||c<Math.PI)&&d.push(_,b,w)}this.setIndex(d),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wi=class n extends ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new L,d=new L,p=new L;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,v=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(g,y,_),c.push(y,v,_)}this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var mn=class n extends ht{constructor(e=new Kr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new de,h=new L,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(d,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),g()}function m(v){h=e.getPointAt(v/t,h);let _=o.normals[v],b=o.binormals[v];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,M=Math.sin(R),T=-Math.cos(R);c.x=T*_.x+M*b.x,c.y=T*_.y+M*b.y,c.z=T*_.z+M*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let b=(s+1)*(v-1)+(_-1),w=(s+1)*v+(_-1),R=(s+1)*v+_,M=(s+1)*(v-1)+_;p.push(b,w,M),p.push(w,R,M)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)l.x=v/t,l.y=_/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ra[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ms(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(_d(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(_d(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=ms(n[t]);for(let s in i)e[s]=i[s]}return e}function _d(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function D0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var xf={clone:ms,merge:Qt},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(s.value);break;case"v2":this.uniforms[i].value=new de().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pa=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},an=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var oo=class extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Ya,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Da=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ds(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Bl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Xi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gl,endingEnd:Gl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vl:r=e,a=2*t-i;break;case Hl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Vl:o=e,c=2*i-t;break;case Hl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*m+(1.5+d)*x+.5*p,_=d*m-d*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[l+b]+v*o[c+b]+_*o[u+b];return r}},Ua=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Fa=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Oa=class extends Xi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[l+p],m=o[c+p],g=d*f+p*2,y=u[g],v=u[g+1],_=e*f+p*2,b=h[_],w=h[_+1],R=F0(i,t,y,b,s);r[p]=_f(R,x,v,w,m)}return r}};function _f(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function U0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function F0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=_f(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=U0(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Bl(e.settings)&&(i.settings={inTangents:Ds(e.settings.inTangents,Array),outTangents:Ds(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break;case zl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ha;case this.InterpolantFactoryMethodBezier:return zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Bl(this.settings)&&(yd(this.settings.inTangents,e),yd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ze("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&wm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ha,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Bl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Ma;var qi=class extends wn{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Nr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};Ba.prototype.ValueTypeName="color";var ka=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};ka.prototype.ValueTypeName="number";var za=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Ct.slerpFlat(r,0,o,l-a,o,l,c);return r}},ao=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends wn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Nr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends wn{constructor(e,t,i,s){super(e,t,i,s)}};Ga.prototype.ValueTypeName="vector";var da={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(vd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!vd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function vd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Va=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yf=new Va,co=class{constructor(e){this.manager=e!==void 0?e:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=new WeakMap,lo=class extends co{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=da.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ls.get(o);u===void 0&&(u=[],Ls.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=zs("img");function c(){h(),t&&t(this);let u=Ls.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),da.remove(`image:${e}`);let f=Ls.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),da.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var js=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kl=new _t,Md=new L,bd=new L,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(kl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ca=new L,la=new Ct,ri=new L,fo=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,la,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ca,la,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new L,Sd=new de,wd=new de,rn=class extends fo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,wd),t.subVectors(wd,Sd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Yl=class extends uo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zi=class extends fo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zl=class extends uo{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Zl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ns=-90,Us=1,Ha=class extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Ns,Us,e,t);s.layers=this.layers,this.add(s);let r=new rn(Ns,Us,e,t);r.layers=this.layers,this.add(r);let o=new rn(Ns,Us,e,t);o.layers=this.layers,this.add(o);let a=new rn(Ns,Us,e,t);a.layers=this.layers,this.add(a);let c=new rn(Ns,Us,e,t);c.layers=this.layers,this.add(c);let l=new rn(Ns,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Wa=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bh="\\[\\]\\.:\\/",O0=new RegExp("["+bh+"]","g"),Sh="[^"+bh+"]",B0="[^"+bh.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",Sh),z0=/(WCOD+)?/.source.replace("WCOD",B0),G0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),V0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),H0=new RegExp("^"+k0+z0+G0+V0+"$"),W0=["material","materials","bones","map"],$l=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(e){let t=H0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);W0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=$l;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eM=new Float32Array(1);var Td=new _t,po=class{constructor(e,t,i=0,s=1/0){this.ray=new kr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Td.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(e,t=!0,i=[]){return jl(e,this,i,t),i.sort(Ad),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jl(e[s],this,i,t);return i.sort(Ad),i}};function Ad(n,e){return n.distance-e.distance}function jl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)jl(r[o],e,t,!0)}}var Rh=class Rh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Rh.prototype.isMatrix2=!0;var Kl=Rh;function wh(n,e,t,i){let s=X0(i);switch(t){case mh:return n*e;case ec:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case Ji:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case gh:return n*e*3/s.components*s.byteLength;case Jt:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case _o:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(n,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(n,8)*Math.max(e,8)/2;case cc:case lc:case uc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hc:case bo:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Rc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case So:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(n){switch(n){case gn:case uh:return{byteLength:1,components:1};case er:case dh:case Qn:return{byteLength:2,components:1};case Ja:case Qa:return{byteLength:2,components:4};case Jn:case Ka:case Un:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function Gf(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function K0(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
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
#endif`,jg=`uniform sampler2D dfgLUT;
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
}`,Kg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c1=`#if defined( USE_POINTS_UV )
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
#endif`,l1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`#ifdef USE_MORPHTARGETS
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
#endif`,m1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q1=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ox=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,wx=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Ix=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:rg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:cg,beginnormal_vertex:lg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:dg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:xg,color_pars_fragment:_g,color_pars_vertex:yg,color_vertex:vg,common:Mg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:wg,displacementmap_vertex:Tg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Eg,colorspace_fragment:Cg,colorspace_pars_fragment:Rg,envmap_fragment:Ig,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Dg,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Wg,envmap_vertex:Ng,fog_vertex:Ug,fog_pars_vertex:Fg,fog_fragment:Og,fog_pars_fragment:Bg,gradientmap_pars_fragment:kg,lightmap_pars_fragment:zg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Hg,lights_toon_fragment:Xg,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:Zg,lights_physical_fragment:$g,lights_physical_pars_fragment:jg,lights_fragment_begin:Kg,lights_fragment_maps:Jg,lights_fragment_end:Qg,lightprobes_pars_fragment:e1,logdepthbuf_fragment:t1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:i1,logdepthbuf_vertex:s1,map_fragment:r1,map_pars_fragment:o1,map_particle_fragment:a1,map_particle_pars_fragment:c1,metalnessmap_fragment:l1,metalnessmap_pars_fragment:h1,morphinstance_vertex:u1,morphcolor_vertex:d1,morphnormal_vertex:f1,morphtarget_pars_vertex:p1,morphtarget_vertex:m1,normal_fragment_begin:g1,normal_fragment_maps:x1,normal_pars_fragment:_1,normal_pars_vertex:y1,normal_vertex:v1,normalmap_pars_fragment:M1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:T1,opaque_fragment:A1,packing:E1,premultiplied_alpha_fragment:C1,project_vertex:R1,dithering_fragment:I1,dithering_pars_fragment:P1,roughnessmap_fragment:D1,roughnessmap_pars_fragment:L1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:U1,shadowmap_vertex:F1,shadowmask_pars_fragment:O1,skinbase_vertex:B1,skinning_pars_vertex:k1,skinning_vertex:z1,skinnormal_vertex:G1,specularmap_fragment:V1,specularmap_pars_fragment:H1,tonemapping_fragment:W1,tonemapping_pars_fragment:X1,transmission_fragment:q1,transmission_pars_fragment:Y1,uv_pars_fragment:Z1,uv_pars_vertex:$1,uv_vertex:j1,worldpos_vertex:K1,background_vert:J1,background_frag:Q1,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distance_vert:ox,distance_frag:ax,equirect_vert:cx,equirect_frag:lx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:_x,meshnormal_frag:yx,meshphong_vert:vx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:Sx,meshtoon_vert:wx,meshtoon_frag:Tx,points_vert:Ax,points_frag:Ex,shadow_vert:Cx,shadow_frag:Rx,sprite_vert:Ix,sprite_frag:Px},be={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},di={basic:{uniforms:Qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Qt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Qt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Qt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Qt([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Qt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Qt([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Qt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Qt([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Qt([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Qt([be.lights,be.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};di.physical={uniforms:Qt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Fc={r:0,b:0,g:0},Dx=new _t,Vf=new Je;Vf.set(-1,0,0,0,1,0,0,0,1);function Lx(n,e,t,i,s,r){let o=new tt(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let _=y.backgroundBlurriness>0;v=e.get(v,_)}return v}function p(y){let v=!1,_=d(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),v=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,v){let _=d(v);_&&(_.isCubeTexture||_.mapping===go)?(l===void 0&&(l=new ut(new Ln(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:ms(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vf),l.material.toneMapped=ct.getTransfer(_.colorSpace)!==xt,(h!==_||u!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ut(new jn(2,2),new Sn({name:"BackgroundMaterial",uniforms:ms(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Fc,Mh(n)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,v,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Nx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(U,z,F,C,D){let G=!1,O=u(U,C,F,z);r!==O&&(r=O,l(r.object)),G=d(U,C,F,D),G&&p(U,C,F,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(U,z,F,C),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,z,F,C){let D=C.wireframe===!0,G=i[z.id];G===void 0&&(G={},i[z.id]=G);let O=U.isInstancedMesh===!0?U.id:0,j=G[O];j===void 0&&(j={},G[O]=j);let I=j[F.id];I===void 0&&(I={},j[F.id]=I);let B=I[D];return B===void 0&&(B=f(c()),I[D]=B),B}function f(U){let z=[],F=[],C=[];for(let D=0;D<t;D++)z[D]=0,F[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:C,object:U,attributes:{},index:null}}function d(U,z,F,C){let D=r.attributes,G=z.attributes,O=0,j=F.getAttributes();for(let I in j)if(j[I].location>=0){let W=D[I],ie=G[I];if(ie===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function p(U,z,F,C){let D={},G=z.attributes,O=0,j=F.getAttributes();for(let I in j)if(j[I].location>=0){let W=G[I];W===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(W=U.instanceColor));let ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),D[I]=ie,O++}r.attributes=D,r.attributesNum=O,r.index=C}function x(){let U=r.newAttributes;for(let z=0,F=U.length;z<F;z++)U[z]=0}function m(U){g(U,0)}function g(U,z){let F=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;F[U]=1,C[U]===0&&(n.enableVertexAttribArray(U),C[U]=1),D[U]!==z&&(n.vertexAttribDivisor(U,z),D[U]=z)}function y(){let U=r.newAttributes,z=r.enabledAttributes;for(let F=0,C=z.length;F<C;F++)z[F]!==U[F]&&(n.disableVertexAttribArray(F),z[F]=0)}function v(U,z,F,C,D,G,O){O===!0?n.vertexAttribIPointer(U,z,F,D,G):n.vertexAttribPointer(U,z,F,C,D,G)}function _(U,z,F,C){x();let D=C.attributes,G=F.getAttributes(),O=z.defaultAttributeValues;for(let j in G){let I=G[j];if(I.location>=0){let B=D[j];if(B===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),B!==void 0){let W=B.normalized,ie=B.itemSize,re=e.get(B);if(re===void 0)continue;let Pe=re.buffer,Ve=re.type,et=re.bytesPerElement,J=Ve===n.INT||Ve===n.UNSIGNED_INT||B.gpuType===Ka;if(B.isInterleavedBufferAttribute){let ee=B.data,Se=ee.stride,$e=B.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<I.locationSize;Ee++)g(I.location+Ee,ee.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<I.locationSize;Ee++)m(I.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Ee=0;Ee<I.locationSize;Ee++)v(I.location+Ee,ie/I.locationSize,Ve,W,Se*et,($e+ie/I.locationSize*Ee)*et,J)}else{if(B.isInstancedBufferAttribute){for(let ee=0;ee<I.locationSize;ee++)g(I.location+ee,B.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ee=0;ee<I.locationSize;ee++)m(I.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ee=0;ee<I.locationSize;ee++)v(I.location+ee,ie/I.locationSize,Ve,W,ie*et,ie/I.locationSize*ee*et,J)}}else if(O!==void 0){let W=O[j];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(I.location,W);break;case 3:n.vertexAttrib3fv(I.location,W);break;case 4:n.vertexAttrib4fv(I.location,W);break;default:n.vertexAttrib1fv(I.location,W)}}}}y()}function b(){T();for(let U in i){let z=i[U];for(let F in z){let C=z[F];for(let D in C){let G=C[D];for(let O in G)h(G[O].object),delete G[O];delete C[D]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let F in z){let C=z[F];for(let D in C){let G=C[D];for(let O in G)h(G[O].object),delete G[O];delete C[D]}}delete i[U.id]}function R(U){for(let z in i){let F=i[z];for(let C in F){let D=F[C];if(D[U.id]===void 0)continue;let G=D[U.id];for(let O in G)h(G[O].object),delete G[O];delete D[U.id]}}}function M(U){for(let z in i){let F=i[z],C=U.isInstancedMesh===!0?U.id:0,D=F[C];if(D!==void 0){for(let G in D){let O=D[G];for(let j in O)h(O[j].object),delete O[j];delete D[G]}delete F[C],Object.keys(F).length===0&&delete i[z]}}}function T(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ux(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Jt&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let M=R===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&R!==Un&&!M&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,maxSamples:b,samples:w}}function Ox(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Xn,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let y=r?0:i,v=y*4,_=g.clippingState||null;c.value=_,_=h(p,f,v,d);for(let b=0;b!==v;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,_=d;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ir=4,Bx=6,kx=20,zx=256,To=new Zi,vf=new tt,Ih=null,Ph=0,Dh=0,Lh=!1,Gx=new L,gs=new L,rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Gx}=r;Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Ph,Dh),this._renderer.xr.enabled=Lh,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Qn,format:Jt,colorSpace:as,depthBuffer:!1},s=Mf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vx(r)),this._blurMaterial=Wx(r,e,t),this._ggxMaterial=Hx(r,e,t)}return s}_compileMaterial(e){let t=new ut(new ht,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,s,r){let c=new rn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vf),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Ln,new zr({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(vf),g=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));let b=this._cubeSize;nr(s,_*b,v>2?b:0,b,b),u.setRenderTarget(s),g&&u.render(x,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ji||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;nr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,To)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-ir?i-p+ir:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,nr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,To),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,nr(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,To)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-ir?s-this._lodMax+ir:0),f=4*(this._cubeSize-h);nr(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(c,To)}};function Vx(n){let e=[],t=[],i=n,s=n-ir+1+Bx;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,v=g>2?0:-1,_=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];p.set(_,d*f*g);for(let b=0;b<f;b++){let w=h[b*2]*2-1,R=h[b*2+1]*2-1;g===0?gs.set(1,R,w):g===1?gs.set(-w,1,-R):g===2?gs.set(-w,R,1):g===3?gs.set(-1,R,-w):g===4?gs.set(-w,-1,R):gs.set(w,R,-1),gs.toArray(x,(g*f+b)*d)}}let m=new ht;m.setAttribute("position",new kt(p,d)),m.setAttribute("outputDirection",new kt(x,d)),t.push(new ut(m,null)),i>ir&&i--}return{lodMeshes:t,sizeLods:e}}function Mf(n,e,t){let i=new pn(n,e,t);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Hx(n,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Wx(n,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function bf(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Sf(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:hi});r.uniforms.tEquirect.value=t;let o=new ut(s,r),a=t.minFilter;return t.minFilter===cn&&(t.minFilter=Et),new Ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function Xx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Za||d===$a)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Bc(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Za||d===$a,x=d===ji||d===fs;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new rr(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&c(y)?(i===null&&(i=new rr(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Za?f.mapping=ji:d===$a&&(f.mapping=fs),f}function c(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function qx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&os("WebGLRenderer: "+i+" extension not supported."),s}}}function Yx(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){let b=y[v+0],w=y[v+1],R=y[v+2];f.push(b,w,w,R,R,b)}}else{let y=p.array;x=p.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let b=v+0,w=v+1,R=v+2;f.push(b,w,w,R,R,b)}}let m=new(p.count>=65535?Br:Or)(f,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zx(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function l(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function $x(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function jx(n,e,t){let i=new WeakMap,s=new Rt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*b*4*u),R=new Fr(w,_,b,u);R.type=Un,R.needsUpdate=!0;let M=v*4;for(let N=0;N<u;N++){let U=m[N],z=g[N],F=y[N],C=_*b*4*N;for(let D=0;D<U.count;D++){let G=D*M;d===!0&&(s.fromBufferAttribute(U,D),w[C+G+0]=s.x,w[C+G+1]=s.y,w[C+G+2]=s.z,w[C+G+3]=0),p===!0&&(s.fromBufferAttribute(z,D),w[C+G+4]=s.x,w[C+G+5]=s.y,w[C+G+6]=s.z,w[C+G+7]=0),x===!0&&(s.fromBufferAttribute(F,D),w[C+G+8]=s.x,w[C+G+9]=s.y,w[C+G+10]=s.z,w[C+G+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new de(_,b)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Kx(n,e,t,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Jx={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function Qx(n,e,t,i,s,r){let o=new pn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ht;l.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new De([0,2,0,0,2,0],2));let h=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ut(l,h),f=new Zi(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,y=[],v=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),c!==null&&c.setSize(_,b);for(let w=0;w<y.length;w++){let R=y[w];R.setSize&&R.setSize(_,b)}},this.setEffects=function(_){y=_,v=y.length>0&&y[0].isRenderPass===!0;let b=o.width,w=o.height;y.length>0&&a===null&&(a=new pn(b,w,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(b,w,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let M=y[R];M.setSize&&M.setSize(b,w)}},this.begin=function(_,b){if(x||_.toneMapping===Kn&&y.length===0)return!1;if(g=b,b!==null){let w=b.width,R=b.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return v===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Kn,!0},this.hasRenderPass=function(){return v},this.end=function(_,b){_.toneMapping=m,x=!0;let w=o,R=a;for(let M=0;M<y.length;M++){let T=y[M];T.enabled!==!1&&(T.render(_,R,w,b),T.needsSwap!==!1&&(w=R,R=R===a?c:a))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,h.defines={},ct.getTransfer(d)===xt&&(h.defines.SRGB_TRANSFER="");let M=Jx[p];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(g),_.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Hf=new fn,Fh=new Hi(1,1),Wf=new Fr,Xf=new wa,qf=new Vr,wf=[],Tf=[],Af=new Float32Array(16),Ef=new Float32Array(9),Cf=new Float32Array(4);function or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gc(n,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function n_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function i_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function s_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Cf.set(i),n.uniformMatrix2fv(this.addr,!1,Cf),Vt(t,i)}}function r_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Ef.set(i),n.uniformMatrix3fv(this.addr,!1,Ef),Vt(t,i)}}function o_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Af.set(i),n.uniformMatrix4fv(this.addr,!1,Af),Vt(t,i)}}function a_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function c_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function h_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function u_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function m_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fh.compareFunction=t.isReversedDepthBuffer()?Uc:Nc,r=Fh):r=Hf,t.setTexture2D(e||r,s)}function g_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xf,s)}function x_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qf,s)}function __(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wf,s)}function y_(n){switch(n){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return c_;case 35668:case 35672:return l_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}function v_(n,e){n.uniform1fv(this.addr,e)}function M_(n,e){let t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function b_(n,e){let t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function S_(n,e){let t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function w_(n,e){let t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T_(n,e){let t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function A_(n,e){let t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E_(n,e){n.uniform1iv(this.addr,e)}function C_(n,e){n.uniform2iv(this.addr,e)}function R_(n,e){n.uniform3iv(this.addr,e)}function I_(n,e){n.uniform4iv(this.addr,e)}function P_(n,e){n.uniform1uiv(this.addr,e)}function D_(n,e){n.uniform2uiv(this.addr,e)}function L_(n,e){n.uniform3uiv(this.addr,e)}function N_(n,e){n.uniform4uiv(this.addr,e)}function U_(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fh:o=Hf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function F_(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xf,r[o])}function O_(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qf,r[o])}function B_(n,e,t){let i=this.cache,s=e.length,r=Gc(t,s);Gt(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wf,r[o])}function k_(n){switch(n){case 5126:return v_;case 35664:return M_;case 35665:return b_;case 35666:return S_;case 35674:return w_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return E_;case 35667:case 35671:return C_;case 35668:case 35672:return R_;case 35669:case 35673:return I_;case 5125:return P_;case 36294:return D_;case 36295:return L_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}var Oh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}},Bh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}},kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function Rf(n,e){n.seq.push(e),n.map[e.id]=e}function z_(n,e,t){let i=n.name,s=i.length;for(Nh.lastIndex=0;;){let r=Nh.exec(i),o=Nh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rf(t,l===void 0?new Oh(a,n,e):new Bh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new kh(a),Rf(t,u)),t=u}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);z_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function If(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var G_=37297,V_=0;function H_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Pf=new Je;function W_(n){ct._getMatrix(Pf,ct.workingColorSpace,n);let e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Ur:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Df(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+H_(n.getShaderSource(e),a)}else return r}function X_(n,e){let t=W_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var q_={[sh]:"Linear",[rh]:"Reinhard",[oh]:"Cineon",[mo]:"ACESFilmic",[ch]:"AgX",[lh]:"Neutral",[ah]:"Custom"};function Y_(n,e){let t=q_[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new L;function Z_(){ct.getLuminanceCoefficients(Oc);let n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function j_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function K_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Eo(n){return n!==""}function Lf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(n){return n.replace(J_,ey)}var Q_=new Map;function ey(n,e){let t=st[e];if(t===void 0){let i=Q_.get(e);if(i!==void 0)t=st[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zh(t)}var ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(ty,ny)}function ny(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var iy={[us]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function sy(n){return iy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ry={[ji]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function oy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ry[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ay={[fs]:"ENVMAP_MODE_REFRACTION"};function cy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ay[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ly={[Ya]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[$d]:"ENVMAP_BLENDING_ADD"};function hy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ly[n.combine]||"ENVMAP_BLENDING_NONE"}function uy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=sy(t),l=oy(t),h=cy(t),u=hy(t),f=uy(t),d=$_(t),p=j_(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Eo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Eo).join(`
`),g.length>0&&(g+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?st.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),Z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=zh(o),o=Lf(o,t),o=Nf(o,t),a=zh(a),a=Lf(a,t),a=Nf(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=y+m+o,_=y+g+a,b=If(s,s.VERTEX_SHADER,v),w=If(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(w)||"",D=z.trim(),G=F.trim(),O=C.trim(),j=!0,I=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,w);else{let B=Df(s,b,"vertex"),W=Df(s,w,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+B+`
`+W)}else D!==""?Ye("WebGLProgram: Program Info Log:",D):(G===""||O==="")&&(I=!1);I&&(U.diagnostics={runnable:j,programLog:D,vertexShader:{log:G,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(b),s.deleteShader(w),M=new sr(s,x),T=K_(s,x)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(x,G_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}var fy=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vh(e),t.set(e,i)),i}},Vh=class{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}};function py(n){return n===Ji||n===bo||n===So}function my(n,e,t,i,s,r){let o=new Ws,a=new Gh,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,T,N,U,z,F){let C=U.fog,D=z.geometry,G=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,j=e.get(M.envMap||G,O),I=j&&j.mapping===go?j.image.height:null,B=d[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=W!==void 0?W.length:0,re=0;D.morphAttributes.position!==void 0&&(re=1),D.morphAttributes.normal!==void 0&&(re=2),D.morphAttributes.color!==void 0&&(re=3);let Pe,Ve,et,J;if(B){let bt=di[B];Pe=bt.vertexShader,Ve=bt.fragmentShader}else{Pe=M.vertexShader,Ve=M.fragmentShader;let bt=a.getVertexShaderStage(M),mt=a.getFragmentShaderStage(M);a.update(M,bt,mt),et=bt.id,J=mt.id}let ee=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),$e=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,je=!!M.map,yt=!!M.matcap,se=!!j,le=!!M.aoMap,he=!!M.lightMap,ue=!!M.bumpMap&&M.wireframe===!1,ge=!!M.normalMap,Xe=!!M.displacementMap,He=!!M.emissiveMap,Ke=!!M.metalnessMap,Qe=!!M.roughnessMap,k=M.anisotropy>0,pt=M.clearcoat>0,ot=M.dispersion>0,P=M.retroreflectivity>0,S=M.iridescence>0,X=M.sheen>0,Z=M.transmission>0,K=k&&!!M.anisotropyMap,fe=pt&&!!M.clearcoatMap,me=pt&&!!M.clearcoatNormalMap,Q=pt&&!!M.clearcoatRoughnessMap,ne=S&&!!M.iridescenceMap,xe=S&&!!M.iridescenceThicknessMap,ke=X&&!!M.sheenColorMap,Me=X&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ze=!!M.specularColorMap,qe=!!M.specularIntensityMap,nt=Z&&!!M.transmissionMap,H=Z&&!!M.thicknessMap,ye=!!M.gradientMap,te=!!M.alphaMap,ve=M.alphaTest>0,Ae=!!M.alphaHash,oe=!!M.extensions,Ge=Kn;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let Fe={shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:Ve,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:$e,instancingColor:$e&&z.instanceColor!==null,instancingMorph:$e&&z.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:yt,envMap:se,envMapMode:se&&j.mapping,envMapCubeUVHeight:I,aoMap:le,lightMap:he,bumpMap:ue,normalMap:ge,displacementMap:Xe,emissiveMap:He,normalMapObjectSpace:ge&&M.normalMapType===Jd,normalMapTangentSpace:ge&&M.normalMapType===wo,packedNormalMap:ge&&M.normalMapType===wo&&py(M.normalMap.format),metalnessMap:Ke,roughnessMap:Qe,anisotropy:k,anisotropyMap:K,clearcoat:pt,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:Q,dispersion:ot,retroreflection:P,iridescence:S,iridescenceMap:ne,iridescenceThicknessMap:xe,sheen:X,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:_e,specularColorMap:ze,specularIntensityMap:qe,transmission:Z,transmissionMap:nt,thicknessMap:H,gradientMap:ye,opaque:M.transparent===!1&&M.blending===Qs&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:Ae,combine:M.combine,mapUv:je&&p(M.map.channel),aoMapUv:le&&p(M.aoMap.channel),lightMapUv:he&&p(M.lightMap.channel),bumpMapUv:ue&&p(M.bumpMap.channel),normalMapUv:ge&&p(M.normalMap.channel),displacementMapUv:Xe&&p(M.displacementMap.channel),emissiveMapUv:He&&p(M.emissiveMap.channel),metalnessMapUv:Ke&&p(M.metalnessMap.channel),roughnessMapUv:Qe&&p(M.roughnessMap.channel),anisotropyMapUv:K&&p(M.anisotropyMap.channel),clearcoatMapUv:fe&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(M.sheenRoughnessMap.channel),specularMapUv:_e&&p(M.specularMap.channel),specularColorMapUv:ze&&p(M.specularColorMap.channel),specularIntensityMapUv:qe&&p(M.specularIntensityMap.channel),transmissionMapUv:nt&&p(M.transmissionMap.channel),thicknessMapUv:H&&p(M.thicknessMap.channel),alphaMapUv:te&&p(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ge||k),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!D.attributes.uv&&(je||te),fog:!!C,useFog:M.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&ge===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:He&&M.emissiveMap.isVideoTexture===!0&&ct.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&M.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function m(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(g(T,M),y(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let T=d[M.type],N;if(T){let U=di[T];N=xf.clone(U.uniforms)}else N=M.uniforms;return N}function _(M,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new dy(n,T,M,s),l.push(N),h.set(T,N)),N}function b(M){if(--M.usedTimes===0){let T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function w(M){a.remove(M)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:_,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:R}}function gy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function c(f,d,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let v=a(f,d,p,x,m,g);p.transmission>0?i.push(v):p.transparent===!0?s.push(v):t.push(v)}function l(f,d,p,x,m,g){let y=a(f,d,p,x,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||xy),i.length>1&&i.sort(d||Of),s.length>1&&s.sort(d||Of)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function _y(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Bf,n.set(i,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new tt};break;case"SpotLight":t={position:new L,direction:new L,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function vy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var My=0;function by(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sy(n){let e=new yy,t=vy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let s=new L,r=new _t,o=new _t;function a(l){let h=0,u=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,y=0,v=0,_=0,b=0,w=0,R=0,M=0,T=0,N=0;l.sort(by);for(let z=0,F=l.length;z<F;z++){let C=l[z],D=C.color,G=C.intensity,O=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ji?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*G,u+=D.g*G,f+=D.b*G;else if(C.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(C.sh.coefficients[I],G);N++}else if(C.isSunLight){let I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,W=t.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),i.sunShadow[p]=W,i.sunShadowMap[p]=j;let ie=B.getViewportCount();for(let re=0;re<ie;re++)i.sunShadowMatrix[x+re]=B.getMatrix(re),i.sunShadowCascade[x+re]=B._cascadeData[re];x+=ie,p++}i.sun[d]=I,d++}else if(C.isDirectionalLight){let I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,W=t.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=I,m++}else if(C.isSpotLight){let I=e.get(C);I.position.setFromMatrixPosition(C.matrixWorld),I.color.copy(D).multiplyScalar(G),I.distance=O,I.coneCos=Math.cos(C.angle),I.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),I.decay=C.decay,i.spot[y]=I;let B=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,B.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=B.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,i.spotShadow[y]=W,i.spotShadowMap[y]=j,R++}y++}else if(C.isRectAreaLight){let I=e.get(C);I.color.copy(D).multiplyScalar(G),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=I,v++}else if(C.isPointLight){let I=e.get(C);if(I.color.copy(C.color).multiplyScalar(C.intensity),I.distance=C.distance,I.decay=C.decay,C.castShadow){let B=C.shadow,W=t.get(C);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=I,g++}else if(C.isHemisphereLight){let I=e.get(C);I.skyColor.copy(C.color).multiplyScalar(G),I.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[_]=I,_++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==v||U.hemiLength!==_||U.numSunShadows!==p||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==R||U.numSpotMaps!==M||U.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=N,U.sunLength=d,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=v,U.hemiLength=_,U.numSunShadows=p,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=R,U.numSpotMaps=M,U.numLightProbes=N,i.version=My++)}function c(l,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,v=l.length;y<v;y++){let _=l[y];if(_.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),u++}else if(_.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(_.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:i}}function kf(n){let e=new Sy(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function wy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new kf(n),e.set(s,[a])):r>=o.length?(a=new kf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
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
}`,Ey=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Cy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],zf=new _t,Ao=new L,Uh=new L;function Ry(n,e,t){let i=new Ys,s=new de,r=new de,o=new Rt,a=new Da,c=new La,l={},h=t.maxTextureSize,u={[$i]:Yt,[Yt]:$i,[Nn]:Nn},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ty,fragmentShader:Ay}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ht;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let g=this.type;this.render=function(w,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Rd&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let T=n.getRenderTarget(),N=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(hi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=g!==this.type;F&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=w.length;C<D;C++){let G=w[C],O=G.shadow;if(O===void 0){Ye("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let j=O.getFrameExtents();s.multiply(j),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,O.mapSize.y=r.y));let I=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=I,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Js){if(G.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new pn(s.x,s.y,{format:Ji,type:Qn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Hi(s.x,s.y,Un),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=ai,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Wt,O.map.depthTexture.magFilter=Wt}else G.isPointLight?(O.map=new Bc(s.x),O.map.depthTexture=new Ta(s.x,Jn)):(O.map=new pn(s.x,s.y),O.map.depthTexture=new Hi(s.x,s.y,Jn)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=ai,this.type===us?(O.map.depthTexture.compareFunction=I?Uc:Nc,O.map.depthTexture.minFilter=Et,O.map.depthTexture.magFilter=Et):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Wt,O.map.depthTexture.magFilter=Wt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let B=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,M);for(let W=0;W<B;W++){let ie=O.getCamera(W);if(G.isPointLight){let re=O.camera,Pe=O.matrix,Ve=G.distance||re.far;Ve!==re.far&&(re.far=Ve,re.updateProjectionMatrix()),Ao.setFromMatrixPosition(G.matrixWorld),re.position.copy(Ao),Uh.copy(re.position),Uh.add(Ey[W]),re.up.copy(Cy[W]),re.lookAt(Uh),re.updateMatrixWorld(),Pe.makeTranslation(-Ao.x,-Ao.y,-Ao.z),zf.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),O._frustum.setFromProjectionMatrix(zf,re.coordinateSystem,re.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,W),n.clear();else{W===0&&(n.setRenderTarget(O.map),n.clear());let re=O.getViewport(W);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),z.viewport(o)}i=O.getFrustum(W),_(R,M,ie,G,this.type)}O.isPointLightShadow!==!0&&this.type===Js&&y(O,M),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,N,U)};function y(w,R){let M=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new pn(s.x,s.y,{format:Ji,type:Qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,M,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,M,d,x,null)}function v(w,R,M,T){let N=null,U=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)N=U;else if(N=M.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=N.uuid,F=R.uuid,C=l[z];C===void 0&&(C={},l[z]=C);let D=C[F];D===void 0&&(D=N.clone(),C[F]=D,R.addEventListener("dispose",b)),N=D}if(N.visible=R.visible,N.wireframe=R.wireframe,T===Js?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:u[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let z=n.properties.get(N);z.light=M}return N}function _(w,R,M,T,N){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Js)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let F=e.update(w),C=w.material;if(Array.isArray(C)){let D=F.groups;for(let G=0,O=D.length;G<O;G++){let j=D[G],I=C[j.materialIndex];if(I&&I.visible){let B=v(w,I,T,N);w.onBeforeShadow(n,w,R,M,F,B,j),n.renderBufferDirect(M,null,F,B,w,j),w.onAfterShadow(n,w,R,M,F,B,j)}}}else if(C.visible){let D=v(w,C,T,N);w.onBeforeShadow(n,w,R,M,F,D,null),n.renderBufferDirect(M,null,F,D,w,null),w.onAfterShadow(n,w,R,M,F,D,null)}}let z=w.children;for(let F=0,C=z.length;F<C;F++)_(z[F],R,M,T,N)}function b(w){w.target.removeEventListener("dispose",b);for(let M in l){let T=l[M],N=w.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function Iy(n,e){function t(){let H=!1,ye=new Rt,te=null,ve=new Rt(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,oe,Ge,Fe,bt){bt===!0&&(Ae*=Fe,oe*=Fe,Ge*=Fe),ye.set(Ae,oe,Ge,Fe),ve.equals(ye)===!1&&(n.clearColor(Ae,oe,Ge,Fe),ve.copy(ye))},reset:function(){H=!1,te=null,ve.set(-1,0,0,0)}}}function i(){let H=!1,ye=!1,te=null,ve=null,Ae=null;return{setReversed:function(oe){if(ye!==oe){let Ge=e.get("EXT_clip_control");oe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ye=oe;let Fe=Ae;Ae=null,this.setClear(Fe)}},getReversed:function(){return ye},setTest:function(oe){oe?ee(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(oe){te!==oe&&!H&&(n.depthMask(oe),te=oe)},setFunc:function(oe){if(ye&&(oe=uf[oe]),ve!==oe){switch(oe){case fa:n.depthFunc(n.NEVER);break;case pa:n.depthFunc(n.ALWAYS);break;case ma:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case ga:n.depthFunc(n.EQUAL);break;case xa:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=oe}},setLocked:function(oe){H=oe},setClear:function(oe){Ae!==oe&&(Ae=oe,ye&&(oe=1-oe),n.clearDepth(oe))},reset:function(){H=!1,te=null,ve=null,Ae=null,ye=!1}}}function s(){let H=!1,ye=null,te=null,ve=null,Ae=null,oe=null,Ge=null,Fe=null,bt=null;return{setTest:function(mt){H||(mt?ee(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(mt){ye!==mt&&!H&&(n.stencilMask(mt),ye=mt)},setFunc:function(mt,Gn,ii){(te!==mt||ve!==Gn||Ae!==ii)&&(n.stencilFunc(mt,Gn,ii),te=mt,ve=Gn,Ae=ii)},setOp:function(mt,Gn,ii){(oe!==mt||Ge!==Gn||Fe!==ii)&&(n.stencilOp(mt,Gn,ii),oe=mt,Ge=Gn,Fe=ii)},setLocked:function(mt){H=mt},setClear:function(mt){bt!==mt&&(n.clearStencil(mt),bt=mt)},reset:function(){H=!1,ye=null,te=null,ve=null,Ae=null,oe=null,Ge=null,Fe=null,bt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,_=null,b=null,w=null,R=null,M=new tt(0,0,0),T=0,N=!1,U=null,z=null,F=null,C=null,D=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,j=0,I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(I)[1]),O=j>=1):I.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),O=j>=2);let B=null,W={},ie=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Pe=new Rt().fromArray(ie),Ve=new Rt().fromArray(re);function et(H,ye,te,ve){let Ae=new Uint8Array(4),oe=n.createTexture();n.bindTexture(H,oe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<te;Ge++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ye+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return oe}let J={};J[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(Bs),ue(!1),ge(Jl),ee(n.CULL_FACE),le(hi);function ee(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function Se(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function $e(H,ye){return f[H]!==ye?(n.bindFramebuffer(H,ye),f[H]=ye,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ee(H,ye){let te=p,ve=!1;if(H){te=d.get(ye),te===void 0&&(te=[],d.set(ye,te));let Ae=H.textures;if(te.length!==Ae.length||te[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ge=Ae.length;oe<Ge;oe++)te[oe]=n.COLOR_ATTACHMENT0+oe;te.length=Ae.length,ve=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ve=!0);ve&&n.drawBuffers(te)}function je(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let yt={[ds]:n.FUNC_ADD,[Pd]:n.FUNC_SUBTRACT,[Dd]:n.FUNC_REVERSE_SUBTRACT};yt[Ld]=n.MIN,yt[Nd]=n.MAX;let se={[Ud]:n.ZERO,[Fd]:n.ONE,[Od]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[Hd]:n.SRC_ALPHA_SATURATE,[Gd]:n.DST_COLOR,[kd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[Vd]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function le(H,ye,te,ve,Ae,oe,Ge,Fe,bt,mt){if(H===hi){m===!0&&(Se(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),H!==Id){if(H!==g||mt!==N){if((y!==ds||b!==ds)&&(n.blendEquation(n.FUNC_ADD),y=ds,b=ds),mt)switch(H){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",H);break}else switch(H){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eh:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",H);break}v=null,_=null,w=null,R=null,M.set(0,0,0),T=0,g=H,N=mt}return}Ae=Ae||ye,oe=oe||te,Ge=Ge||ve,(ye!==y||Ae!==b)&&(n.blendEquationSeparate(yt[ye],yt[Ae]),y=ye,b=Ae),(te!==v||ve!==_||oe!==w||Ge!==R)&&(n.blendFuncSeparate(se[te],se[ve],se[oe],se[Ge]),v=te,_=ve,w=oe,R=Ge),(Fe.equals(M)===!1||bt!==T)&&(n.blendColor(Fe.r,Fe.g,Fe.b,bt),M.copy(Fe),T=bt),g=H,N=!1}function he(H,ye){H.side===Nn?Se(n.CULL_FACE):ee(n.CULL_FACE);let te=H.side===Yt;ye&&(te=!te),ue(te),H.blending===Qs&&H.transparent===!1?le(hi):le(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ve=H.stencilWrite;a.setTest(ve),ve&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),He(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(H){U!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),U=H)}function ge(H){H!==Ed?(ee(n.CULL_FACE),H!==z&&(H===Jl?n.cullFace(n.BACK):H===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),z=H}function Xe(H){H!==F&&(O&&n.lineWidth(H),F=H)}function He(H,ye,te){H?(ee(n.POLYGON_OFFSET_FILL),(C!==ye||D!==te)&&(C=ye,D=te,o.getReversed()&&(ye=-ye),n.polygonOffset(ye,te))):Se(n.POLYGON_OFFSET_FILL)}function Ke(H){H?ee(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Qe(H){H===void 0&&(H=n.TEXTURE0+G-1),B!==H&&(n.activeTexture(H),B=H)}function k(H,ye,te){te===void 0&&(B===null?te=n.TEXTURE0+G-1:te=B);let ve=W[te];ve===void 0&&(ve={type:void 0,texture:void 0},W[te]=ve),(ve.type!==H||ve.texture!==ye)&&(B!==te&&(n.activeTexture(te),B=te),n.bindTexture(H,ye||J[H]),ve.type=H,ve.texture=ye)}function pt(){let H=W[B];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function S(){try{n.texSubImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function X(){try{n.texSubImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function fe(){try{n.texStorage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function me(){try{n.texStorage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function Q(){try{n.texImage2D(...arguments)}catch(H){Ze("WebGLState:",H)}}function ne(){try{n.texImage3D(...arguments)}catch(H){Ze("WebGLState:",H)}}function xe(H){return u[H]!==void 0?u[H]:n.getParameter(H)}function ke(H,ye){u[H]!==ye&&(n.pixelStorei(H,ye),u[H]=ye)}function Me(H){Pe.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Pe.copy(H))}function _e(H){Ve.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ve.copy(H))}function ze(H,ye){let te=l.get(ye);te===void 0&&(te=new WeakMap,l.set(ye,te));let ve=te.get(H);ve===void 0&&(ve=n.getUniformBlockIndex(ye,H.name),te.set(H,ve))}function qe(H,ye){let ve=l.get(ye).get(H);c.get(ye)!==ve&&(n.uniformBlockBinding(ye,ve,H.__bindingPointIndex),c.set(ye,ve))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,W={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,v=null,_=null,b=null,w=null,R=null,M=new tt(0,0,0),T=0,N=!1,U=null,z=null,F=null,C=null,D=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Se,bindFramebuffer:$e,drawBuffers:Ee,useProgram:je,setBlending:le,setMaterial:he,setFlipSided:ue,setCullFace:ge,setLineWidth:Xe,setPolygonOffset:He,setScissorTest:Ke,activeTexture:Qe,bindTexture:k,unbindTexture:pt,compressedTexImage2D:ot,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:ke,getParameter:xe,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:fe,texStorage3D:me,texSubImage2D:S,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:K,scissor:Me,viewport:_e,reset:nt}}function Py(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,S){return p?new OffscreenCanvas(P,S):zs("canvas")}function m(P,S,X){let Z=1,K=ot(P);if((K.width>X||K.height>X)&&(Z=X/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let fe=Math.floor(Z*K.width),me=Math.floor(Z*K.height);f===void 0&&(f=x(fe,me));let Q=S?x(fe,me):f;return Q.width=fe,Q.height=me,Q.getContext("2d").drawImage(P,0,0,fe,me),Ye("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+fe+"x"+me+")."),Q}else return"data"in P&&Ye("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function g(P){return P.generateMipmaps}function y(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(P,S,X,Z,K,fe=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me;Z&&(me=e.get("EXT_texture_norm16"),me||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===n.RED&&(X===n.FLOAT&&(Q=n.R32F),X===n.HALF_FLOAT&&(Q=n.R16F),X===n.UNSIGNED_BYTE&&(Q=n.R8),X===n.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),X===n.SHORT&&me&&(Q=me.R16_SNORM_EXT)),S===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.R8UI),X===n.UNSIGNED_SHORT&&(Q=n.R16UI),X===n.UNSIGNED_INT&&(Q=n.R32UI),X===n.BYTE&&(Q=n.R8I),X===n.SHORT&&(Q=n.R16I),X===n.INT&&(Q=n.R32I)),S===n.RG&&(X===n.FLOAT&&(Q=n.RG32F),X===n.HALF_FLOAT&&(Q=n.RG16F),X===n.UNSIGNED_BYTE&&(Q=n.RG8),X===n.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),X===n.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RG8UI),X===n.UNSIGNED_SHORT&&(Q=n.RG16UI),X===n.UNSIGNED_INT&&(Q=n.RG32UI),X===n.BYTE&&(Q=n.RG8I),X===n.SHORT&&(Q=n.RG16I),X===n.INT&&(Q=n.RG32I)),S===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),X===n.UNSIGNED_INT&&(Q=n.RGB32UI),X===n.BYTE&&(Q=n.RGB8I),X===n.SHORT&&(Q=n.RGB16I),X===n.INT&&(Q=n.RGB32I)),S===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),X===n.UNSIGNED_INT&&(Q=n.RGBA32UI),X===n.BYTE&&(Q=n.RGBA8I),X===n.SHORT&&(Q=n.RGBA16I),X===n.INT&&(Q=n.RGBA32I)),S===n.RGB&&(X===n.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),X===n.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),S===n.RGBA){let ne=fe?Ur:ct.getTransfer(K);X===n.FLOAT&&(Q=n.RGBA32F),X===n.HALF_FLOAT&&(Q=n.RGBA16F),X===n.UNSIGNED_BYTE&&(Q=ne===xt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),X===n.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(P,S){let X;return P?S===null||S===Jn||S===tr?X=n.DEPTH24_STENCIL8:S===Un?X=n.DEPTH32F_STENCIL8:S===er&&(X=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Jn||S===tr?X=n.DEPTH_COMPONENT24:S===Un?X=n.DEPTH_COMPONENT32F:S===er&&(X=n.DEPTH_COMPONENT16),X}function w(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==Et?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function R(P){let S=P.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function M(P){let S=P.target;S.removeEventListener("dispose",M),U(S)}function T(P){let S=i.get(P);if(S.__webglInit===void 0)return;let X=P.source,Z=d.get(X);if(Z){let K=Z[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&N(P),Object.keys(Z).length===0&&d.delete(X)}i.remove(P)}function N(P){let S=i.get(P);n.deleteTexture(S.__webglTexture);let X=P.source,Z=d.get(X);delete Z[S.__cacheKey],o.memory.textures--}function U(P){let S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let K=0;K<S.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(S.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)n.deleteFramebuffer(S.__webglFramebuffer[Z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=P.textures;for(let Z=0,K=X.length;Z<K;Z++){let fe=i.get(X[Z]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(X[Z])}i.remove(P)}let z=0;function F(){z=0}function C(){return z}function D(P){z=P}function G(){let P=z;return P>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function O(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function j(P,S){let X=i.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let Z=P.image;if(Z===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(X,P,S);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+S)}function I(P,S){let X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Se(X,P,S);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+S)}function B(P,S){let X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Se(X,P,S);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+S)}function W(P,S){let X=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){$e(X,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+S)}let ie={[Yn]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[va]:n.MIRRORED_REPEAT},re={[Wt]:n.NEAREST,[jd]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[cn]:n.LINEAR_MIPMAP_LINEAR},Pe={[ef]:n.NEVER,[of]:n.ALWAYS,[tf]:n.LESS,[Nc]:n.LEQUAL,[nf]:n.EQUAL,[Uc]:n.GEQUAL,[sf]:n.GREATER,[rf]:n.NOTEQUAL};function Ve(P,S){if(S.type===Un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Et||S.magFilter===ja||S.magFilter===xo||S.magFilter===cn||S.minFilter===Et||S.minFilter===ja||S.minFilter===xo||S.minFilter===cn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ie[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ie[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ie[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,re[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==xo&&S.minFilter!==cn||S.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function et(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",R));let Z=S.source,K=d.get(Z);K===void 0&&(K={},d.set(Z,K));let fe=O(S);if(fe!==P.__cacheKey){K[fe]===void 0&&(K[fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),K[fe].usedTimes++;let me=K[P.__cacheKey];me!==void 0&&(K[P.__cacheKey].usedTimes--,me.usedTimes===0&&N(S)),P.__cacheKey=fe,P.__webglTexture=K[fe].texture}return X}function J(P,S,X){return Math.floor(Math.floor(P/X)/S)}function ee(P,S,X,Z){let fe=P.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,X,Z,S.data);else{fe.sort((ke,Me)=>ke.start-Me.start);let me=0;for(let ke=1;ke<fe.length;ke++){let Me=fe[me],_e=fe[ke],ze=Me.start+Me.count,qe=J(_e.start,S.width,4),nt=J(Me.start,S.width,4);_e.start<=ze+1&&qe===nt&&J(_e.start+_e.count-1,S.width,4)===qe?Me.count=Math.max(Me.count,_e.start+_e.count-Me.start):(++me,fe[me]=_e)}fe.length=me+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let ke=0,Me=fe.length;ke<Me;ke++){let _e=fe[ke],ze=Math.floor(_e.start/4),qe=Math.ceil(_e.count/4),nt=ze%S.width,H=Math.floor(ze/S.width),ye=qe,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,nt,H,ye,te,X,Z,S.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Se(P,S,X){let Z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=n.TEXTURE_3D);let K=et(P,S),fe=S.source;t.bindTexture(Z,P.__webglTexture,n.TEXTURE0+X);let me=i.get(fe);if(fe.version!==me.__version||K===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let te=ct.getPrimaries(ct.workingColorSpace),ve=S.colorSpace===Fn?null:ct.getPrimaries(S.colorSpace),Ae=S.colorSpace===Fn||te===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=m(S.image,!1,s.maxTextureSize);ne=pt(S,ne);let xe=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Me=_(S.internalFormat,xe,ke,S.normalized,S.colorSpace,S.isVideoTexture);Ve(Z,S);let _e,ze=S.mipmaps,qe=S.isVideoTexture!==!0,nt=me.__version===void 0||K===!0,H=fe.dataReady,ye=w(S,ne);if(S.isDepthTexture)Me=b(S.format===Ki,S.type),nt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Me,ne.width,ne.height,0,xe,ke,null));else if(S.isDataTexture)if(ze.length>0){qe&&nt&&t.texStorage2D(n.TEXTURE_2D,ye,Me,ze[0].width,ze[0].height);for(let te=0,ve=ze.length;te<ve;te++)_e=ze[te],qe?H&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,ke,_e.data):t.texImage2D(n.TEXTURE_2D,te,Me,_e.width,_e.height,0,xe,ke,_e.data);S.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(n.TEXTURE_2D,ye,Me,ne.width,ne.height),H&&ee(S,ne,xe,ke)):t.texImage2D(n.TEXTURE_2D,0,Me,ne.width,ne.height,0,xe,ke,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qe&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Me,ze[0].width,ze[0].height,ne.depth);for(let te=0,ve=ze.length;te<ve;te++)if(_e=ze[te],S.format!==Jt)if(xe!==null)if(qe){if(H)if(S.layerUpdates.size>0){let Ae=wh(_e.width,_e.height,S.format,S.type);for(let oe of S.layerUpdates){let Ge=_e.data.subarray(oe*Ae/_e.data.BYTES_PER_ELEMENT,(oe+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,oe,_e.width,_e.height,1,xe,Ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,ne.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Me,_e.width,_e.height,ne.depth,0,_e.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,_e.width,_e.height,ne.depth,xe,ke,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Me,_e.width,_e.height,ne.depth,0,xe,ke,_e.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{qe&&nt&&t.texStorage2D(n.TEXTURE_2D,ye,Me,ze[0].width,ze[0].height);for(let te=0,ve=ze.length;te<ve;te++)_e=ze[te],S.format!==Jt?xe!==null?qe?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Me,_e.width,_e.height,0,_e.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,_e.width,_e.height,xe,ke,_e.data):t.texImage2D(n.TEXTURE_2D,te,Me,_e.width,_e.height,0,xe,ke,_e.data)}else if(S.isDataArrayTexture)if(qe){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Me,ne.width,ne.height,ne.depth),H)if(S.layerUpdates.size>0){let te=wh(ne.width,ne.height,S.format,S.type);for(let ve of S.layerUpdates){let Ae=ne.data.subarray(ve*te/ne.data.BYTES_PER_ELEMENT,(ve+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,ne.width,ne.height,1,xe,ke,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,ke,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,xe,ke,ne.data);else if(S.isData3DTexture)qe?(nt&&t.texStorage3D(n.TEXTURE_3D,ye,Me,ne.width,ne.height,ne.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,ke,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,xe,ke,ne.data);else if(S.isFramebufferTexture){if(nt)if(qe)t.texStorage2D(n.TEXTURE_2D,ye,Me,ne.width,ne.height);else{let te=ne.width,ve=ne.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Me,te,ve,0,xe,ke,null),te>>=1,ve>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(S),te.onpaint=ve=>{let Ae=ve.changedElements;for(let oe of u)Ae.includes(oe.image)&&(oe.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{let Ae=n.RGBA,oe=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,oe,Ge,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(qe&&nt){let te=ot(ze[0]);t.texStorage2D(n.TEXTURE_2D,ye,Me,te.width,te.height)}for(let te=0,ve=ze.length;te<ve;te++)_e=ze[te],qe?H&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe,ke,_e):t.texImage2D(n.TEXTURE_2D,te,Me,xe,ke,_e);S.generateMipmaps=!1}else if(qe){if(nt){let te=ot(ne);t.texStorage2D(n.TEXTURE_2D,ye,Me,te.width,te.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,ke,ne)}else t.texImage2D(n.TEXTURE_2D,0,Me,xe,ke,ne);g(S)&&y(Z),me.__version=fe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $e(P,S,X){if(S.image.length!==6)return;let Z=et(P,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);let fe=i.get(K);if(K.version!==fe.__version||Z===!0){t.activeTexture(n.TEXTURE0+X);let me=ct.getPrimaries(ct.workingColorSpace),Q=S.colorSpace===Fn?null:ct.getPrimaries(S.colorSpace),ne=S.colorSpace===Fn||me===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let oe=0;oe<6;oe++)!xe&&!ke?Me[oe]=m(S.image[oe],!0,s.maxCubemapSize):Me[oe]=ke?S.image[oe].image:S.image[oe],Me[oe]=pt(S,Me[oe]);let _e=Me[0],ze=r.convert(S.format,S.colorSpace),qe=r.convert(S.type),nt=_(S.internalFormat,ze,qe,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,ye=fe.__version===void 0||Z===!0,te=K.dataReady,ve=w(S,_e);Ve(n.TEXTURE_CUBE_MAP,S);let Ae;if(xe){H&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,nt,_e.width,_e.height);for(let oe=0;oe<6;oe++){Ae=Me[oe].mipmaps;for(let Ge=0;Ge<Ae.length;Ge++){let Fe=Ae[Ge];S.format!==Jt?ze!==null?H?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,nt,Fe.width,Fe.height,0,Fe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,0,0,Fe.width,Fe.height,ze,qe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge,nt,Fe.width,Fe.height,0,ze,qe,Fe.data)}}}else{if(Ae=S.mipmaps,H&&ye){Ae.length>0&&ve++;let oe=ot(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,nt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ke){H?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Me[oe].width,Me[oe].height,ze,qe,Me[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,Me[oe].width,Me[oe].height,0,ze,qe,Me[oe].data);for(let Ge=0;Ge<Ae.length;Ge++){let bt=Ae[Ge].image[oe].image;H?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,0,0,bt.width,bt.height,ze,qe,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,nt,bt.width,bt.height,0,ze,qe,bt.data)}}else{H?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,qe,Me[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,nt,ze,qe,Me[oe]);for(let Ge=0;Ge<Ae.length;Ge++){let Fe=Ae[Ge];H?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,0,0,ze,qe,Fe.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ge+1,nt,ze,qe,Fe.image[oe])}}}g(S)&&y(n.TEXTURE_CUBE_MAP),fe.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ee(P,S,X,Z,K,fe){let me=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),ne=_(X.internalFormat,me,Q,X.normalized,X.colorSpace),xe=i.get(S),ke=i.get(X);if(ke.__renderTarget=S,!xe.__hasExternalTextures){let Me=Math.max(1,S.width>>fe),_e=Math.max(1,S.height>>fe);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,fe,ne,Me,_e,S.depth,0,me,Q,null):t.texImage2D(K,fe,ne,Me,_e,0,me,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Qe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,K,ke.__webglTexture,0,Ke(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,K,ke.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(P,S,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){let Z=S.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,fe=b(S.stencilBuffer,K),me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(S),fe,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(S),fe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,fe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,P)}else{let Z=S.textures;for(let K=0;K<Z.length;K++){let fe=Z[K],me=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),ne=_(fe.internalFormat,me,Q,fe.normalized,fe.colorSpace);Qe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke(S),ne,S.width,S.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke(S),ne,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ne,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(P,S,X){let Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,S.depthTexture);let xe=r.convert(S.depthTexture.format),ke=r.convert(S.depthTexture.type),Me;S.depthTexture.format===ai?Me=n.DEPTH_COMPONENT24:S.depthTexture.format===Ki&&(Me=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,S.width,S.height,0,xe,ke,null)}}else j(S.depthTexture,0);let fe=K.__webglTexture,me=Ke(S),Q=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ne=S.depthTexture.format===Ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===ai)Qe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,Q,fe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ne,Q,fe,0);else if(S.depthTexture.format===Ki)Qe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,Q,fe,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ne,Q,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){let S=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=Z}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)yt(S.__webglFramebuffer[Z],P,Z);else{let Z=P.texture.mipmaps;Z&&Z.length>0?yt(S.__webglFramebuffer[0],P,0):yt(S.__webglFramebuffer,P,0)}else if(X){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=n.createRenderbuffer(),je(S.__webglDepthbuffer[Z],P,!1);else{let K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,fe)}}else{let Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),je(S.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(P,S,X){let Z=i.get(P);S!==void 0&&Ee(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&se(P)}function he(P){let S=P.texture,X=i.get(P),Z=i.get(S);P.addEventListener("dispose",M);let K=P.textures,fe=P.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=S.version,o.memory.textures++),fe){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let ne=0;ne<S.mipmaps.length;ne++)X.__webglFramebuffer[Q][ne]=n.createFramebuffer()}else X.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)X.__webglFramebuffer[Q]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(me)for(let Q=0,ne=K.length;Q<ne;Q++){let xe=i.get(K[Q]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Qe(P)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let ne=K[Q];X.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let xe=r.convert(ne.format,ne.colorSpace),ke=r.convert(ne.type),Me=_(ne.internalFormat,xe,ke,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),_e=Ke(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Me,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),je(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ee(X.__webglFramebuffer[Q][ne],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Ee(X.__webglFramebuffer[Q],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(S)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Q=0,ne=K.length;Q<ne;Q++){let xe=K[Q],ke=i.get(xe),Me=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ke.__webglTexture),Ve(Me,xe),Ee(X.__webglFramebuffer,P,xe,n.COLOR_ATTACHMENT0+Q,Me,0),g(xe)&&y(Me)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,Z.__webglTexture),Ve(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ee(X.__webglFramebuffer[ne],P,S,n.COLOR_ATTACHMENT0,Q,ne);else Ee(X.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,Q,0);g(S)&&y(Q),t.unbindTexture()}P.depthBuffer&&se(P)}function ue(P){let S=P.textures;for(let X=0,Z=S.length;X<Z;X++){let K=S[X];if(g(K)){let fe=v(P),me=i.get(K).__webglTexture;t.bindTexture(fe,me),y(fe),t.unbindTexture()}}}let ge=[],Xe=[];function He(P){if(P.samples>0){if(Qe(P)===!1){let S=P.textures,X=P.width,Z=P.height,K=n.COLOR_BUFFER_BIT,fe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(P),Q=S.length>1;if(Q)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let ke=i.get(S[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,X,Z,0,0,X,Z,K,n.NEAREST),c===!0&&(ge.length=0,Xe.length=0,ge.push(n.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ge.push(fe),Xe.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let ke=i.get(S[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ke(P){return Math.min(s.maxSamples,P.samples)}function Qe(P){let S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(P){let S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function pt(P,S){let X=P.colorSpace,Z=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==as&&X!==Fn&&(ct.getTransfer(X)===xt?(Z!==Jt||K!==gn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",X)),S}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=I,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=le,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Dy(n,e){function t(i,s=Fn){let r,o=ct.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Ja)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uh)return n.BYTE;if(i===dh)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===Jt)return n.RGBA;if(i===ai)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===ec)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===_o||i===yo||i===vo||i===Mo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===lc||i===hc||i===uc||i===dc||i===bo||i===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===lc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uc)return r.COMPRESSED_R11_EAC;if(i===dc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===Mc||i===bc||i===Sc||i===wc||i===Tc||i===Ac||i===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Rc||i===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Cc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Dc||i===So||i===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Sn({vertexShader:Ly,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Hh,g={},y=t.getContextAttributes(),v=null,_=null,b=[],w=[],R=new de,M=null,T=null,N=new rn;N.viewport=new Rt;let U=new rn;U.viewport=new Rt;let z=[N,U],F=new Wa,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=b[J];return ee===void 0&&(ee=new Xs,b[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=b[J];return ee===void 0&&(ee=new Xs,b[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=b[J];return ee===void 0&&(ee=new Xs,b[J]=ee),ee.getHandSpace()};function G(J){let ee=w.indexOf(J.inputSource);if(ee===-1)return;let Se=b[ee];Se!==void 0&&(Se.update(J.inputSource,J.frame,l||o),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let J=0;J<b.length;J++){let ee=w[J];ee!==null&&(w[J]=null,b[J].disconnect(ee))}C=null,D=null,m.reset();for(let J in g)delete g[J];if(e.setRenderTarget(v),d=null,f=null,u=null,s=null,_=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,$e=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?Ki:ai,$e=y.stencil?tr:Jn);let je={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new pn(f.textureWidth,f.textureHeight,{format:Jt,type:gn,depthTexture:new Hi(f.textureWidth,f.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pn(d.framebufferWidth,d.framebufferHeight,{format:Jt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(J){for(let ee=0;ee<J.removed.length;ee++){let Se=J.removed[ee],$e=w.indexOf(Se);$e>=0&&(w[$e]=null,b[$e].disconnect(Se))}for(let ee=0;ee<J.added.length;ee++){let Se=J.added[ee],$e=w.indexOf(Se);if($e===-1){for(let je=0;je<b.length;je++)if(je>=w.length){w.push(Se),$e=je;break}else if(w[je]===null){w[je]=Se,$e=je;break}if($e===-1)break}let Ee=b[$e];Ee&&Ee.connect(Se)}}let I=new L,B=new L;function W(J,ee,Se){I.setFromMatrixPosition(ee.matrixWorld),B.setFromMatrixPosition(Se.matrixWorld);let $e=I.distanceTo(B),Ee=ee.projectionMatrix.elements,je=Se.projectionMatrix.elements,yt=Ee[14]/(Ee[10]-1),se=Ee[14]/(Ee[10]+1),le=(Ee[9]+1)/Ee[5],he=(Ee[9]-1)/Ee[5],ue=(Ee[8]-1)/Ee[0],ge=(je[8]+1)/je[0],Xe=yt*ue,He=yt*ge,Ke=$e/(-ue+ge),Qe=Ke*-ue;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(Ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let k=yt+Ke,pt=se+Ke,ot=Xe-Qe,P=He+($e-Qe),S=le*se/pt*k,X=he*se/pt*k;J.projectionMatrix.makePerspective(ot,P,S,X,k,pt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ie(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ee=J.near,Se=J.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),F.near=U.near=N.near=ee,F.far=U.far=N.far=Se,(C!==F.near||D!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,D=F.far),F.layers.mask=J.layers.mask|6,N.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;let $e=J.parent,Ee=F.cameras;ie(F,$e);for(let je=0;je<Ee.length;je++)ie(Ee[je],$e);Ee.length===2?W(F,N,U):F.projectionMatrix.copy(N.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),re(J,F,$e)};function re(J,ee,Se){Se===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(J){return g[J]};let Pe=null;function Ve(J,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){let Se=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let $e=!1;Se.length!==F.cameras.length&&(F.cameras.length=0,$e=!0);for(let se=0;se<Se.length;se++){let le=Se[se],he=null;if(d!==null)he=d.getViewport(le);else{let ge=u.getViewSubImage(f,le);he=ge.viewport,se===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let ue=z[se];ue===void 0&&(ue=new rn,ue.layers.enable(se),ue.viewport=new Rt,z[se]=ue),ue.matrix.fromArray(le.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(le.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),se===0&&(F.matrix.copy(ue.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),$e===!0&&F.cameras.push(ue)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let se=u.getDepthInformation(Se[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<Se.length;se++){let le=Se[se].camera;if(le){let he=g[le];he||(he=new Hr,g[le]=he);let ue=u.getCameraImage(le);he.sourceTexture=ue}}}}for(let Se=0;Se<b.length;Se++){let $e=w[Se],Ee=b[Se];$e!==null&&Ee!==void 0&&Ee.update($e,ee,l||o)}Pe&&Pe(J,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),p=null}let et=new Gf;et.setAnimationLoop(Ve),this.setAnimationLoop=function(J){Pe=J},this.dispose=function(){}}},Uy=new _t,Yf=new Je;Yf.set(-1,0,0,0,1,0,0,0,1);function Fy(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Mh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,v,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,v):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Yt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Yt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Oy(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let w=b.program;i.uniformBlockBinding(_,w)}function l(_,b){let w=s[_.id];w===void 0&&(m(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",y));let R=b.program;i.updateUBOMapping(_,R);let M=e.render.frame;r[_.id]!==M&&(f(_),r[_.id]=M)}function h(_){let b=u();_.__bindingPointIndex=b;let w=n.createBuffer(),R=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let b=s[_.id],w=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,T=w.length;M<T;M++){let N=w[M];if(Array.isArray(N))for(let U=0,z=N.length;U<z;U++)d(N[U],M,U,R);else d(N,M,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,b,w,R){if(x(_,b,w,R)===!0){let M=_.__offset,T=_.value;if(Array.isArray(T)){let N=0;for(let U=0;U<T.length;U++){let z=T[U],F=g(z);p(z,_.__data,N),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,_.__data)}}function p(_,b,w){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,w)}function x(_,b,w,R){let M=_.value,T=b+"_"+w;if(R[T]===void 0)return typeof M=="number"||typeof M=="boolean"?R[T]=M:ArrayBuffer.isView(M)?R[T]=M.slice():R[T]=M.clone(),!0;{let N=R[T];if(typeof M=="number"||typeof M=="boolean"){if(N!==M)return R[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(N.equals(M)===!1)return N.copy(M),!0}}return!1}function m(_){let b=_.uniforms,w=0,R=16;for(let T=0,N=b.length;T<N;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let z=0,F=U.length;z<F;z++){let C=U[z],D=Array.isArray(C.value)?C.value:[C.value];for(let G=0,O=D.length;G<O;G++){let j=D[G],I=g(j),B=w%R,W=B%I.boundary,ie=B+W;w+=W,ie!==0&&R-ie<I.storage&&(w+=R-ie),C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=I.storage}}}let M=w%R;return M>0&&(w+=R-M),_.__size=w,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",_),b}function y(_){let b=_.target;b.removeEventListener("dispose",y);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function v(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var By=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function ky(){return ui===null&&(ui=new Dn(By,16,16,Ji,Qn),ui.name="DFG_LUT",ui.minFilter=Et,ui.magFilter=Et,ui.wrapS=oi,ui.wrapT=oi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var kc=class{constructor(e={}){let{canvas:t=cf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=gn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,m=new Set([ic,nc,tc]),g=new Set([gn,Jn,er,tr,Ja,Qa]),y=new Uint32Array(4),v=new Int32Array(4),_=new L,b=null,w=null,R=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,U=!1,z=null,F=null,C=null,D=null;this._outputColorSpace=Pt;let G=0,O=0,j=null,I=-1,B=null,W=new Rt,ie=new Rt,re=null,Pe=new tt(0),Ve=0,et=t.width,J=t.height,ee=1,Se=null,$e=null,Ee=new Rt(0,0,et,J),je=new Rt(0,0,et,J),yt=!1,se=new Ys,le=!1,he=!1,ue=new _t,ge=new L,Xe=new Rt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Qe(){return j===null?ee:1}let k=i;function pt(A,V){return t.getContext(A,V)}let ot,P,S,X,Z,K,fe,me,Q,ne,xe,ke,Me,_e,ze,qe,nt,H,ye,te,ve,Ae,oe;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),k===null){let V="webgl2";if(k=pt(V,A),k===null)throw pt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(A){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),Ze("WebGLRenderer: "+A.message),A}function Ge(){ot=new qx(k),ot.init(),ve=new Dy(k,ot),P=new Fx(k,ot,e,ve),S=new Iy(k,ot),P.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),F=k.createFramebuffer(),C=k.createFramebuffer(),D=k.createFramebuffer(),X=new $x(k),Z=new gy,K=new Py(k,ot,S,Z,P,ve,X),fe=new Xx(N),me=new K0(k),Ae=new Nx(k,me),Q=new Yx(k,me,X,Ae),ne=new Kx(k,Q,me,Ae,X),H=new jx(k,P,K),ze=new Ox(Z),xe=new my(N,fe,ot,P,Ae,ze),ke=new Fy(N,Z),Me=new _y,_e=new wy(ot),nt=new Lx(N,fe,S,ne,p,c),qe=new Ry(N,ne,P),oe=new Oy(k,X,P,S),ye=new Ux(k,ot,X),te=new Zx(k,ot,X),X.programs=xe.programs,N.capabilities=P,N.extensions=ot,N.properties=Z,N.renderLists=Me,N.shadowMap=qe,N.state=S,N.info=X}x!==gn&&(T=new Qx(x,t.width,t.height,a,s,r));let Fe=new Wh(N,k);this.xr=Fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(et,J,!1))},this.getSize=function(A){return A.set(et,J)},this.setSize=function(A,V,$=!0){if(Fe.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}et=A,J=V,t.width=Math.floor(A*ee),t.height=Math.floor(V*ee),$===!0&&(t.style.width=A+"px",t.style.height=V+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(et*ee,J*ee).floor()},this.setDrawingBufferSize=function(A,V,$){et=A,J=V,ee=$,t.width=Math.floor(A*$),t.height=Math.floor(V*$),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===gn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,V,$,q){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,V,$,q),S.viewport(W.copy(Ee).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(je)},this.setScissor=function(A,V,$,q){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,V,$,q),S.scissor(ie.copy(je).multiplyScalar(ee).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){S.setScissorTest(yt=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){$e=A},this.getClearColor=function(A){return A.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,$=!0){let q=0;if(A){let Y=!1;if(j!==null){let Te=j.texture.format;Y=m.has(Te)}if(Y){let Te=j.texture.type,Re=g.has(Te),we=nt.getClearColor(),Le=nt.getClearAlpha(),Be=we.r,it=we.g,at=we.b;Re?(y[0]=Be,y[1]=it,y[2]=at,y[3]=Le,k.clearBufferuiv(k.COLOR,0,y)):(v[0]=Be,v[1]=it,v[2]=at,v[3]=Le,k.clearBufferiv(k.COLOR,0,v))}else q|=k.COLOR_BUFFER_BIT}V&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),nt.dispose(),Me.dispose(),_e.dispose(),Z.dispose(),fe.dispose(),ne.dispose(),Ae.dispose(),oe.dispose(),xe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",ku),Fe.removeEventListener("sessionend",zu),es.stop()};function bt(A){A.preventDefault(),_h("WebGLRenderer: Context Lost."),U=!0}function mt(){_h("WebGLRenderer: Context Restored."),U=!1;let A=X.autoReset,V=qe.enabled,$=qe.autoUpdate,q=qe.needsUpdate,Y=qe.type;Ge(),X.autoReset=A,qe.enabled=V,qe.autoUpdate=$,qe.needsUpdate=q,qe.type=Y}function Gn(A){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ii(A){let V=A.target;V.removeEventListener("dispose",ii),gm(V)}function gm(A){xm(A),Z.remove(A)}function xm(A){let V=Z.get(A).programs;V!==void 0&&(V.forEach(function($){xe.releaseProgram($)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,$,q,Y,Te){V===null&&(V=He);let Re=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,we=vm(A,V,$,q,Y);S.setMaterial(q,Re);let Le=$.index,Be=1;if(q.wireframe===!0){if(Le=Q.getWireframeAttribute($),Le===void 0)return;Be=2}let it=$.drawRange,at=$.attributes.position,Ne=it.start*Be,gt=(it.start+it.count)*Be;Te!==null&&(Ne=Math.max(Ne,Te.start*Be),gt=Math.min(gt,(Te.start+Te.count)*Be)),Le!==null?(Ne=Math.max(Ne,0),gt=Math.min(gt,Le.count)):at!=null&&(Ne=Math.max(Ne,0),gt=Math.min(gt,at.count));let Ot=gt-Ne;if(Ot<0||Ot===1/0)return;Ae.setup(Y,q,we,$,Le);let wt,Mt=ye;if(Le!==null&&(wt=me.get(Le),Mt=te,Mt.setIndex(wt)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*Qe()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(Y.isLine){let Zt=q.linewidth;Zt===void 0&&(Zt=1),S.setLineWidth(Zt*Qe()),Y.isLineSegments?Mt.setMode(k.LINES):Y.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else Y.isPoints?Mt.setMode(k.POINTS):Y.isSprite&&Mt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Zt=Y._multiDrawStarts,Ce=Y._multiDrawCounts,nn=Y._multiDrawCount,dt=Le?me.get(Le).bytesPerElement:1,In=Z.get(q).currentProgram.getUniforms();for(let si=0;si<nn;si++)In.setValue(k,"_gl_DrawID",si),Mt.render(Zt[si]/dt,Ce[si])}else if(Y.isInstancedMesh)Mt.renderInstances(Ne,Ot,Y.count);else if($.isInstancedBufferGeometry){let Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,Zt);Mt.renderInstances(Ne,Ot,Ce)}else Mt.render(Ne,Ot)};function Bu(A,V,$,q){z!==null&&A.isNodeMaterial&&z.setObject(q,A),le===!0&&ze.setState(A,$,!1),A.transparent===!0&&A.side===Nn&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,Go(A,V,q),A.side=$i,A.needsUpdate=!0,Go(A,V,q),A.side=Nn):Go(A,V,q)}this.compile=function(A,V,$=null){$===null&&($=A),z!==null&&z.renderStart(A,V,$),w=_e.get($),w.init(V),M.push(w),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),he=this.localClippingEnabled,le=ze.init(this.clippingPlanes,he),le===!0&&ze.setGlobalState(this.clippingPlanes,V),z!==null&&qe.render(w.state.shadowsArray,$,V);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Re=0;Re<Te.length;Re++){let we=Te[Re];Bu(we,$,V,Y),q.add(we)}else Bu(Te,$,V,Y),q.add(Te)}),w=M.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(A,V,$=null){let q=this.compile(A,V,$);return new Promise(Y=>{function Te(){if(q.forEach(function(Re){let Le=Z.get(Re).currentProgram;(Le===void 0||Le.isReady())&&q.delete(Re)}),q.size===0){Y(A);return}setTimeout(Te,10)}ot.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let pl=null;function _m(A){pl&&pl(A)}function ku(){es.stop()}function zu(){es.start()}let es=new Gf;es.setAnimationLoop(_m),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(A){pl=A,Fe.setAnimationLoop(A),A===null?es.stop():es.start()},Fe.addEventListener("sessionstart",ku),Fe.addEventListener("sessionend",zu),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(A,V);let $=Fe.enabled===!0&&Fe.isPresenting===!0,q=T!==null&&(j===null||$)&&T.begin(N,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(V),V=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,V,j),w=_e.get(A,M.length),w.init(V),w.state.textureUnits=K.getTextureUnits(),M.push(w),ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),se.setFromProjectionMatrix(ue,qn,V.reversedDepth),he=this.localClippingEnabled,le=ze.init(this.clippingPlanes,he),b=Me.get(A,R.length),b.init(),R.push(b),Fe.enabled===!0&&Fe.isPresenting===!0){let Re=N.xr.getDepthSensingMesh();Re!==null&&ml(Re,V,-1/0,N.sortObjects)}ml(A,V,0,N.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),N.sortObjects===!0&&b.sort(Se,$e),Ke=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ke&&nt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&ze.beginShadows();let Y=w.state.shadowsArray;if(qe.render(Y,A,V),le===!0&&ze.endShadows(),(q&&T.hasRenderPass())===!1){let Re=b.opaque,we=b.transmissive;if(w.setupLights(),V.isArrayCamera){let Le=V.cameras;if(we.length>0)for(let Be=0,it=Le.length;Be<it;Be++){let at=Le[Be];Vu(Re,we,A,at)}Ke&&nt.render(A);for(let Be=0,it=Le.length;Be<it;Be++){let at=Le[Be];Gu(b,A,at,at.viewport)}}else we.length>0&&Vu(Re,we,A,V),Ke&&nt.render(A),Gu(b,A,V)}j!==null&&O===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),q&&T.end(N),A.isScene===!0&&A.onAfterRender(N,A,V),Ae.resetDefaultState(),I=-1,B=null,M.pop(),M.length>0?(w=M[M.length-1],K.setTextureUnits(w.state.textureUnits),le===!0&&ze.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,z!==null&&z.renderEnd()};function ml(A,V,$,q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(se)){q&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let Re=ne.update(A),we=A.material;we.visible&&b.push(A,Re,we,$,Xe.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(se))){let Re=ne.update(A),we=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Xe.copy(Re.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){let Le=Re.groups;for(let Be=0,it=Le.length;Be<it;Be++){let at=Le[Be],Ne=we[at.materialIndex];Ne&&Ne.visible&&b.push(A,Re,Ne,$,Xe.z,at,V)}}else we.visible&&b.push(A,Re,we,$,Xe.z,null,V)}}let Te=A.children;for(let Re=0,we=Te.length;Re<we;Re++)ml(Te[Re],V,$,q)}function Gu(A,V,$,q){let{opaque:Y,transmissive:Te,transparent:Re}=A;w.setupLightsView($),le===!0&&ze.setGlobalState(N.clippingPlanes,$),q&&S.viewport(W.copy(q)),Y.length>0&&zo(Y,V,$),Te.length>0&&zo(Te,V,$),Re.length>0&&zo(Re,V,$),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Vu(A,V,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let Ne=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new pn(1,1,{generateMipmaps:!0,type:Ne?Qn:gn,minFilter:cn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Te=w.state.transmissionRenderTarget[q.id],Re=q.viewport||W;Te.setSize(Re.z*N.transmissionResolutionScale,Re.w*N.transmissionResolutionScale);let we=N.getRenderTarget(),Le=N.getActiveCubeFace(),Be=N.getActiveMipmapLevel();N.setRenderTarget(Te),N.getClearColor(Pe),Ve=N.getClearAlpha(),Ve<1&&N.setClearColor(16777215,.5),N.clear(),Ke&&nt.render($);let it=N.toneMapping;N.toneMapping=Kn;let at=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),le===!0&&ze.setGlobalState(N.clippingPlanes,q),zo(A,$,q),K.updateMultisampleRenderTarget(Te),K.updateRenderTargetMipmap(Te),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let gt=0,Ot=V.length;gt<Ot;gt++){let wt=V[gt],{object:Mt,geometry:Zt,material:Ce,group:nn}=wt;if(Ce.side===Nn&&Mt.layers.test(q.layers)){let dt=Ce.side;Ce.side=Yt,Ce.needsUpdate=!0,Hu(Mt,$,q,Zt,Ce,nn),Ce.side=dt,Ce.needsUpdate=!0,Ne=!0}}Ne===!0&&(K.updateMultisampleRenderTarget(Te),K.updateRenderTargetMipmap(Te))}N.setRenderTarget(we,Le,Be),N.setClearColor(Pe,Ve),at!==void 0&&(q.viewport=at),N.toneMapping=it}function zo(A,V,$){let q=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Te=A.length;Y<Te;Y++){let Re=A[Y],{object:we,geometry:Le,group:Be}=Re,it=Re.material;it.allowOverride===!0&&q!==null&&(it=q),we.layers.test($.layers)&&Hu(we,V,$,Le,it,Be)}}function Hu(A,V,$,q,Y,Te){z!==null&&Y.isNodeMaterial&&z.setObject(A,Y),A.onBeforeRender(N,V,$,q,Y,Te),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(N,V,$,q,A,Te),Y.transparent===!0&&Y.side===Nn&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,N.renderBufferDirect($,V,q,Y,A,Te),Y.side=$i,Y.needsUpdate=!0,N.renderBufferDirect($,V,q,Y,A,Te),Y.side=Nn):N.renderBufferDirect($,V,q,Y,A,Te),A.onAfterRender(N,V,$,q,Y,Te)}function Go(A,V,$){V.isScene!==!0&&(V=He);let q=Z.get(A),Y=w.state.lights,Te=w.state.shadowsArray,Re=Y.state.version,we=xe.getParameters(A,Y.state,Te,V,$,w.state.lightProbeGridArray),Le=xe.getProgramCacheKey(we),Be=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,q.fog=V.fog;let it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=fe.get(A.envMap||q.environment,it),q.envMapRotation=q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",ii),Be=new Map,q.programs=Be);let at=Be.get(Le);if(at!==void 0){if(q.currentProgram===at&&q.lightsStateVersion===Re)return Xu(A,we),at}else we.uniforms=xe.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,$,we),A.onBeforeCompile(we,N),at=xe.acquireProgram(we,Le),Be.set(Le,at),q.uniforms=we.uniforms;let Ne=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Xu(A,we),q.needsLights=bm(A),q.lightsStateVersion=Re,q.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.sunLights.value=Y.state.sun,Ne.sunLightShadows.value=Y.state.sunShadow,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ne.sunShadowCascade.value=Y.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=w.state.lightProbeGridArray.length>0,q.currentProgram=at,q.uniformsList=null,at}function Wu(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=sr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Xu(A,V){let $=Z.get(A);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function ym(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(V.matrixWorld);for(let $=0,q=A.length;$<q;$++){let Y=A[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function vm(A,V,$,q,Y){V.isScene!==!0&&(V=He),K.resetTextureUnits();let Te=V.fog,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?V.environment:null,we=j===null?N.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ct.workingColorSpace,Le=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Be=fe.get(q.envMap||Re,Le),it=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,at=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!$.morphAttributes.position,gt=!!$.morphAttributes.normal,Ot=!!$.morphAttributes.color,wt=Kn;q.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(wt=N.toneMapping);let Mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=Mt!==void 0?Mt.length:0,Ce=Z.get(q),nn=w.state.lights;if(le===!0&&(he===!0||A!==B)){let St=A===B&&q.id===I;ze.setState(q,A,St)}let dt=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==nn.state.version||Ce.outputColorSpace!==we||Y.isBatchedMesh&&Ce.batching===!1||!Y.isBatchedMesh&&Ce.batching===!0||Y.isBatchedMesh&&Ce.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ce.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ce.instancing===!1||!Y.isInstancedMesh&&Ce.instancing===!0||Y.isSkinnedMesh&&Ce.skinning===!1||!Y.isSkinnedMesh&&Ce.skinning===!0||Y.isInstancedMesh&&Ce.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ce.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ce.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ce.instancingMorph===!1&&Y.morphTexture!==null||Ce.envMap!==Be||q.fog===!0&&Ce.fog!==Te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ze.numPlanes||Ce.numIntersection!==ze.numIntersection)||Ce.vertexAlphas!==it||Ce.vertexTangents!==at||Ce.morphTargets!==Ne||Ce.morphNormals!==gt||Ce.morphColors!==Ot||Ce.toneMapping!==wt||Ce.morphTargetsCount!==Zt||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Ce.__version=q.version);let In=Ce.currentProgram;dt===!0&&(In=Go(q,V,Y),z&&q.isNodeMaterial&&z.onUpdateProgram(q,In,Ce));let si=!1,Li=!1,ys=!1,vt=In.getUniforms(),Lt=Ce.uniforms;if(S.useProgram(In.program)&&(si=!0,Li=!0,ys=!0),q.id!==I&&(I=q.id,Li=!0),Ce.needsLights){let St=ym(w.state.lightProbeGridArray,Y);Ce.lightProbeGrid!==St&&(Ce.lightProbeGrid=St,Li=!0)}if(si||B!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue(k,"projectionMatrix",A.projectionMatrix),vt.setValue(k,"viewMatrix",A.matrixWorldInverse);let Ui=vt.map.cameraPosition;Ui!==void 0&&Ui.setValue(k,ge.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&vt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Li=!0,ys=!0)}if(Ce.needsLights&&(nn.state.sunShadowMap.length>0&&vt.setValue(k,"sunShadowMap",nn.state.sunShadowMap,K),nn.state.directionalShadowMap.length>0&&vt.setValue(k,"directionalShadowMap",nn.state.directionalShadowMap,K),nn.state.spotShadowMap.length>0&&vt.setValue(k,"spotShadowMap",nn.state.spotShadowMap,K),nn.state.pointShadowMap.length>0&&vt.setValue(k,"pointShadowMap",nn.state.pointShadowMap,K)),Y.isSkinnedMesh){vt.setOptional(k,Y,"bindMatrix"),vt.setOptional(k,Y,"bindMatrixInverse");let St=Y.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),vt.setValue(k,"boneTexture",St.boneTexture,K))}Y.isBatchedMesh&&(vt.setOptional(k,Y,"batchingTexture"),vt.setValue(k,"batchingTexture",Y._matricesTexture,K),vt.setOptional(k,Y,"batchingIdTexture"),vt.setValue(k,"batchingIdTexture",Y._indirectTexture,K),vt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(k,"batchingColorTexture",Y._colorsTexture,K));let Ni=$.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&H.update(Y,$,In),(Li||Ce.receiveShadow!==Y.receiveShadow)&&(Ce.receiveShadow=Y.receiveShadow,vt.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&V.environment!==null&&(Lt.envMapIntensity.value=V.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=ky()),Li){if(vt.setValue(k,"toneMappingExposure",N.toneMappingExposure),Ce.needsLights&&Mm(Lt,ys),Te&&q.fog===!0&&ke.refreshFogUniforms(Lt,Te),ke.refreshMaterialUniforms(Lt,q,ee,J,w.state.transmissionRenderTarget[A.id]),Ce.needsLights&&Ce.lightProbeGrid){let St=Ce.lightProbeGrid;Lt.probesSH.value=St.texture,Lt.probesMin.value.copy(St.boundingBox.min),Lt.probesMax.value.copy(St.boundingBox.max),Lt.probesResolution.value.copy(St.resolution)}sr.upload(k,Wu(Ce),Lt,K)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(sr.upload(k,Wu(Ce),Lt,K),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(k,"center",Y.center),vt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(k,"normalMatrix",Y.normalMatrix),vt.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let St=q.uniformsGroups;for(let Ui=0,vs=St.length;Ui<vs;Ui++){let Yu=St[Ui];oe.update(Yu,In),oe.bind(Yu,In)}}return In}function Mm(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function bm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,V,$){let q=Z.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=V,Z.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let $=Z.get(A);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,$=0){j=A,G=V,O=$;let q=null,Y=!1,Te=!1;if(A){let we=Z.get(A);if(we.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),W.copy(A.viewport),ie.copy(A.scissor),re=A.scissorTest,S.viewport(W),S.scissor(ie),S.setScissorTest(re),I=-1;return}else if(we.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(we.__hasExternalTextures)K.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let it=A.depthTexture;if(we.__boundDepthTexture!==it){if(it!==null&&Z.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Te=!0);let Be=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?q=Be[V][$]:q=Be[V],Y=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?q=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?q=Be[$]:q=Be,W.copy(A.viewport),ie.copy(A.scissor),re=A.scissorTest}else W.copy(Ee).multiplyScalar(ee).floor(),ie.copy(je).multiplyScalar(ee).floor(),re=yt;if($!==0&&(q=F),S.bindFramebuffer(k.FRAMEBUFFER,q)&&S.drawBuffers(A,q),S.viewport(W),S.scissor(ie),S.setScissorTest(re),Y){let we=Z.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,$)}else if(Te){let we=V;for(let Le=0;Le<A.textures.length;Le++){let Be=Z.get(A.textures[Le]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Le,Be.__webglTexture,$,we)}}else if(A!==null&&$!==0){let we=Z.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,$)}I=-1};function qu(A){let V=Z.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=P.textureFormatReadable(A.format),V.__typeReadable=P.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,$,q,Y,Te,Re,we=0){if(!(A&&A.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){S.bindFramebuffer(k.FRAMEBUFFER,Le);try{let Be=A.textures[we],it=Be.format,at=Be.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Ne=qu(Be);if(Ne.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-q&&$>=0&&$<=A.height-Y&&k.readPixels(V,$,q,Y,ve.convert(it),ve.convert(at),Te)}finally{let Be=j!==null?Z.get(j).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,V,$,q,Y,Te,Re,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(V>=0&&V<=A.width-q&&$>=0&&$<=A.height-Y){S.bindFramebuffer(k.FRAMEBUFFER,Le);let Be=A.textures[we],it=Be.format,at=Be.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Ne=qu(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(V,$,q,Y,ve.convert(it),ve.convert(at),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ot=j!==null?Z.get(j).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Ot);let wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await hf(k,wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,gt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(gt),k.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,$=0){let q=Math.pow(2,-$),Y=Math.floor(A.image.width*q),Te=Math.floor(A.image.height*q),Re=V!==null?V.x:0,we=V!==null?V.y:0;K.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Re,we,Y,Te),S.unbindTexture()},this.copyTextureToTexture=function(A,V,$=null,q=null,Y=0,Te=0){let Re,we,Le,Be,it,at,Ne,gt,Ot,wt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if($!==null)Re=$.max.x-$.min.x,we=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,it=$.min.y,at=$.isBox3?$.min.z:0;else{let Lt=Math.pow(2,-Y);Re=Math.floor(wt.width*Lt),we=Math.floor(wt.height*Lt),A.isDataArrayTexture?Le=wt.depth:A.isData3DTexture?Le=Math.floor(wt.depth*Lt):Le=1,Be=0,it=0,at=0}q!==null?(Ne=q.x,gt=q.y,Ot=q.z):(Ne=0,gt=0,Ot=0);let Mt=ve.convert(V.format),Zt=ve.convert(V.type),Ce;V.isData3DTexture?(K.setTexture3D(V,0),Ce=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),Ce=k.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),Ce=k.TEXTURE_2D),S.activeTexture(k.TEXTURE0),S.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),S.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),S.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let nn=S.getParameter(k.UNPACK_ROW_LENGTH),dt=S.getParameter(k.UNPACK_IMAGE_HEIGHT),In=S.getParameter(k.UNPACK_SKIP_PIXELS),si=S.getParameter(k.UNPACK_SKIP_ROWS),Li=S.getParameter(k.UNPACK_SKIP_IMAGES);S.pixelStorei(k.UNPACK_ROW_LENGTH,wt.width),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt.height),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(k.UNPACK_SKIP_ROWS,it),S.pixelStorei(k.UNPACK_SKIP_IMAGES,at);let ys=A.isDataArrayTexture||A.isData3DTexture,vt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Lt=Z.get(A),Ni=Z.get(V),St=Z.get(Lt.__renderTarget),Ui=Z.get(Ni.__renderTarget);S.bindFramebuffer(k.READ_FRAMEBUFFER,St.__webglFramebuffer),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let vs=0;vs<Le;vs++)ys&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,Y,at+vs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(V).__webglTexture,Te,Ot+vs)),k.blitFramebuffer(Be,it,Re,we,Ne,gt,Re,we,k.DEPTH_BUFFER_BIT,k.NEAREST);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Z.has(A)){let Lt=Z.get(A),Ni=Z.get(V);S.bindFramebuffer(k.READ_FRAMEBUFFER,C),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,D);for(let St=0;St<Le;St++)ys?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.__webglTexture,Y,at+St):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Lt.__webglTexture,Y),vt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ni.__webglTexture,Te,Ot+St):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ni.__webglTexture,Te),Y!==0?k.blitFramebuffer(Be,it,Re,we,Ne,gt,Re,we,k.COLOR_BUFFER_BIT,k.NEAREST):vt?k.copyTexSubImage3D(Ce,Te,Ne,gt,Ot+St,Be,it,Re,we):k.copyTexSubImage2D(Ce,Te,Ne,gt,Be,it,Re,we);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else vt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ce,Te,Ne,gt,Ot,Re,we,Le,Mt,Zt,wt.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Ce,Te,Ne,gt,Ot,Re,we,Le,Mt,wt.data):k.texSubImage3D(Ce,Te,Ne,gt,Ot,Re,we,Le,Mt,Zt,wt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,Ne,gt,Re,we,Mt,Zt,wt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,Ne,gt,wt.width,wt.height,Mt,wt.data):k.texSubImage2D(k.TEXTURE_2D,Te,Ne,gt,Re,we,Mt,Zt,wt);S.pixelStorei(k.UNPACK_ROW_LENGTH,nn),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt),S.pixelStorei(k.UNPACK_SKIP_PIXELS,In),S.pixelStorei(k.UNPACK_SKIP_ROWS,si),S.pixelStorei(k.UNPACK_SKIP_IMAGES,Li),Te===0&&V.generateMipmaps&&k.generateMipmap(Ce),S.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){G=0,O=0,j=null,S.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Vc=class extends cs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ln;e.deleteAttribute("uv");let t=new an({side:Yt}),i=new an,s=new hs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ut(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gr(e,i,6),a=new Xt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new ut(e,ar(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ut(e,ar(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ut(e,ar(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ut(e,ar(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new ut(e,ar(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ut(e,ar(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ar(n){return new oo({color:0,emissive:16777215,emissiveIntensity:n})}var fi={ashigaru:{name:"아시가루",title:"창병",tier:1,hp:70,speed:1,armor:0,resist:0,bounty:5,lives:1,atk:8,size:.28,desc:"가장 흔한 왜군 보병. 수로 밀어붙인다."},teppo:{name:"조총병",title:"철포대",tier:1,hp:56,speed:.95,armor:0,resist:0,bounty:6,lives:1,atk:6,size:.28,shoot:{range:2.6,dmg:12,cd:2.2},desc:"걸으면서 가까운 영웅과 의병을 조총으로 저격한다."},scout:{name:"척후병",title:"정찰대",tier:1,hp:42,speed:1.7,armor:0,resist:0,bounty:4,lives:1,atk:5,size:.25,desc:"빠르게 달려드는 경보병. 방어선의 빈틈을 노린다."},samurai:{name:"사무라이",title:"무사",tier:2,hp:330,speed:.9,armor:.3,resist:.1,bounty:15,lives:2,atk:25,size:.32,enrage:{at:.5,speed:1.6},desc:"갑옷을 두른 무사. 체력이 절반 아래로 떨어지면 칼을 뽑고 돌진한다."},ninja:{name:"시노비",title:"닌자",tier:2,hp:170,speed:1.35,armor:0,resist:.2,bounty:14,lives:2,atk:0,size:.27,stealth:!0,unblockable:!0,desc:"은신 상태로 이동한다. 첨성대·곽재우·봉수 경보로만 발각할 수 있다. 범위 공격은 맞는다."},onmyoji:{name:"음양사",title:"주술사",tier:2,hp:210,speed:.85,armor:0,resist:.5,bounty:17,lives:2,atk:10,size:.3,heal:{range:2,pct:.06,cd:3},desc:"3초마다 주변 아군 체력을 6% 회복시킨다(여럿이어도 겹치지 않음). 신성 저항이 높다."},cavalry:{name:"기마무사",title:"기병",tier:2,hp:230,speed:1.5,armor:.15,resist:0,bounty:17,lives:2,atk:18,size:.36,unblockable:!0,desc:"말을 탄 무사. 빠르고 저지당하지 않는다."},drum:{name:"진군 고수",title:"군악대",tier:2,hp:250,speed:.9,armor:.1,resist:.1,bounty:18,lives:2,atk:8,size:.32,haste:{range:2,mult:.25},desc:"북을 울려 주변 아군의 이동 속도를 25% 올린다. 우선 제거 대상."},armored:{name:"철갑무사",title:"갑주대",tier:3,hp:950,speed:.6,armor:.6,resist:.1,bounty:35,lives:3,atk:40,size:.38,desc:"두꺼운 철갑. 물리 피해를 60% 막는다. 신성·화기로 상대하라."},ram:{name:"공성 충차",title:"공성병기",tier:3,hp:1500,speed:.5,armor:.35,resist:.3,bounty:45,lives:5,atk:60,size:.45,spawnOnDeath:{type:"ashigaru",n:4},desc:"성문을 부수는 충차. 파괴되면 안에서 아시가루 4명이 뛰쳐나온다."},konishi:{name:"고니시 유키나가",title:"제1군 선봉장",tier:4,hp:5500,speed:.55,armor:.3,resist:.3,bounty:250,lives:6,atk:90,size:.55,boss:{summon:{type:"ashigaru",n:4,cd:9}},desc:"임진왜란 선봉장. 9초마다 아시가루 4명을 불러낸다."},kato:{name:"가토 기요마사",title:"제2군 대장",tier:4,hp:9e3,speed:.5,armor:.45,resist:.2,bounty:320,lives:8,atk:130,size:.58,boss:{charge:{cd:11,dur:1.6,mult:3},disable:{range:3,dur:4}},desc:"11초마다 창을 던져 가까운 유산 하나를 4초간 봉쇄하고 돌진한다."},wakizaka:{name:"와키자카 야스하루",title:"수군 대장",tier:4,hp:9500,speed:.6,armor:.3,resist:.35,bounty:320,lives:8,atk:110,size:.56,boss:{shield:{pct:.12,cd:15}},desc:"안택선 방패. 15초마다 최대 체력 12%의 보호막을 새로 두른다."},ukita:{name:"우키타 히데이에",title:"총대장",tier:4,hp:12e3,speed:.5,armor:.4,resist:.4,bounty:400,lives:10,atk:140,size:.6,boss:{rally:{cd:12,heal:.08,haste:.3,dur:3}},desc:"12초마다 전군을 독려해 모든 왜군의 체력 8% 회복, 3초간 이동 속도 +30%."},ishida:{name:"이시다 미쓰나리",title:"삼봉행",tier:4,hp:12500,speed:.45,armor:.4,resist:.4,bounty:600,lives:14,atk:200,size:.66,boss:{phases:[.7,.35],phaseSummon:[{type:"samurai",n:3},{type:"ninja",n:3}],disableN:3,disableDur:5,phaseText:"봉행의 계략"},desc:"침략을 꾸린 책사. 체력 70%·35%에서 정예를 부르고 유산 3개를 봉쇄한다."},so:{name:"소 요시토시",title:"대마도주",tier:4,hp:5200,speed:.6,armor:.25,resist:.3,bounty:240,lives:6,atk:80,size:.55,boss:{summon:{type:"scout",n:5,cd:8,text:"길잡이 척후대!"}},desc:"길잡이 노릇을 한 대마도주. 8초마다 척후병 5명을 풀어 방어선을 흔든다."},kuroda:{name:"구로다 나가마사",title:"제3군 대장",tier:4,hp:7200,speed:.5,armor:.4,resist:.25,bounty:280,lives:7,atk:110,size:.57,boss:{summon:{type:"teppo",n:5,cd:10,text:"철포대 사격 준비!"}},desc:"조총 부대를 앞세운 장수. 10초마다 조총병 5명을 불러낸다."},todo:{name:"도도 다카토라",title:"수군 장수",tier:4,hp:6400,speed:.55,armor:.3,resist:.3,bounty:300,lives:7,atk:110,size:.57,boss:{shield:{pct:.08,cd:13,text:"판옥 방패!"},summon:{type:"ashigaru",n:4,cd:12,text:"수군 상륙!"}},desc:"옥포·칠천량의 수군 장수. 13초마다 보호막(8%), 12초마다 아시가루 4명 상륙."},kuki:{name:"구키 요시타카",title:"수군 대장",tier:4,hp:7600,speed:.5,armor:.4,resist:.3,bounty:320,lives:8,atk:120,size:.58,boss:{shield:{pct:.12,cd:15,text:"철갑선 방벽!"}},desc:"철갑선을 몰던 수군 대장. 15초마다 최대 체력 12%의 두꺼운 보호막."},kurushima:{name:"구루시마 미치후사",title:"선봉 수군장",tier:4,hp:9e3,speed:.6,armor:.3,resist:.3,bounty:330,lives:9,atk:130,size:.58,boss:{rally:{cd:10,heal:.05,haste:.35,dur:3,text:"노를 저어라!"}},desc:"명량의 선봉. 10초마다 모든 왜군 체력 5% 회복, 3초간 이동 속도 +35%."},shimazu:{name:"시마즈 요시히로",title:"귀신 시마즈",tier:4,hp:14e3,speed:.5,armor:.5,resist:.35,bounty:450,lives:12,atk:170,size:.62,enrage:{at:.4,speed:1.5},boss:{charge:{cd:10,dur:1.4,mult:3,text:"귀신 돌격!"},disable:{range:3.2,dur:4}},desc:"가장 사나운 적장. 10초마다 유산 하나를 봉쇄하며 돌진하고, 체력 40% 아래에서 더 빨라진다."},hideyoshi:{name:"도요토미 히데요시",title:"태합 · 침략의 원흉",tier:4,hp:38e3,speed:.3,armor:.88,resist:.55,bounty:3e3,lives:999,atk:400,size:.8,scale:2.15,fixedHp:!0,line:"갑옷 88% — 화기·신성·갑옷 깎기로 공략하라!",boss:{phases:[.75,.5,.25],phaseSummon:[{type:"samurai",n:4},{type:"armored",n:3},{type:"ninja",n:6}],disableN:4,disableDur:6,phaseText:"천하인의 호령",shield:{pct:.05,cd:15,text:"황금 표주박!"}},desc:"단 한 명. 갑옷 88% — 물리 피해가 거의 통하지 않는다. 화기(갑옷 절반 무시)·신성·갑옷 깎기로 공략하라. 도성에 닿으면 즉시 패배."}},Zf={ash:"ashigaru",tep:"teppo",sco:"scout",sam:"samurai",nin:"ninja",onm:"onmyoji",cav:"cavalry",drm:"drum",arm:"armored",ram:"ram"};function cr(n){let e=n.rng=n.rng+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xh(n,e,t){return e+(t-e)*cr(n)}function ei(n){let e={rng:n>>>0};return()=>cr(e)}var Tn=24,An=14;function Nt(n){let e=ei(n.seed||1),t=Array.from({length:An},()=>Array(Tn).fill(".")),i=(c,l)=>c>=0&&l>=0&&c<Tn&&l<An,s=(c,l,h)=>i(c,l)&&(t[l][c]=h),r=(c,l)=>i(c,l)?t[l][c]:"X";if(n.land){for(let c=0;c<An;c++)for(let l=0;l<Tn;l++)s(l,c,"W");for(let[c,l,h,u]of n.land)for(let f=l;f<=u;f++)for(let d=c;d<=h;d++)s(d,f,".")}if(n.sea){let{side:c,depth:l}=n.sea,h=c==="left"||c==="right"?An:Tn,u=l;for(let f=0;f<h;f++){u=Math.max(1,Math.min(l+2,u+(e()<.5?-1:1)*(e()<.55?1:0)));for(let d=0;d<u;d++)c==="left"?s(d,f,"W"):c==="right"?s(Tn-1-d,f,"W"):c==="top"?s(f,d,"W"):s(f,An-1-d,"W")}}if(n.river){let{axis:c,at:l,w:h=2}=n.river,u=l,f=c==="v"?An:Tn;for(let d=0;d<f;d++){d%3===0&&e()<.5&&(u+=e()<.5?-1:1),u=Math.max(l-1,Math.min(l+1,u));for(let p=0;p<h;p++)c==="v"?s(u+p,d,"W"):s(d,u+p,"W")}}if(n.mountains){let{side:c,depth:l=1,from:h=0,to:u=c==="left"||c==="right"?An-1:Tn-1}=n.mountains;for(let f=h;f<=u;f++){let d=l+(e()<.35?1:0);for(let p=0;p<d;p++)c==="top"?s(f,p,"M"):c==="bottom"?s(f,An-1-p,"M"):s(c==="left"?p:Tn-1-p,f,"M")}}if(n.wall){let{side:c,w:l=3}=n.wall;for(let h=0;h<An;h++)for(let u=0;u<l;u++)c==="right"?s(Tn-1-u,h,"K"):c==="left"&&s(u,h,"K");if(c==="top"||c==="bottom")for(let h=0;h<Tn;h++)for(let u=0;u<l;u++)s(h,c==="top"?u:An-1-u,"K")}for(let[c,l]of n.houses||[])s(c,l,"H");for(let[c,l]of n.jang||[])s(c,l,"J");let o=n.trees??.45;for(let c=0;c<Tn;c++)for(let l of[0,An-1])r(c,l)==="."&&e()<o&&s(c,l,"T");for(let c=0;c<An;c++)for(let l of[0,Tn-1])r(l,c)==="."&&e()<o*.6&&s(l,c,"T");let a=(c,l)=>{for(let h=0;h<c;h++){let u=Math.floor(e()*Tn),f=Math.floor(e()*An);r(u,f)==="."&&s(u,f,l)}};return a(n.inner??4,"T"),a(n.rocks??5,"R"),a(n.flowers??9,"f"),t.map(c=>c.join(""))}var zy=[["ash",1,0,1,.7],["sco",1,0,.75,.45],["tep",1,0,1.25,.9],["sam",2,1,5,1.6],["cav",2,2,4.4,1.1],["nin",2,3,4.6,1.2],["onm",2,4,5.2,2.2],["drm",2,4,5.4,3],["arm",3,6,13,2.6],["ram",3,7,17,3.6]];function $f({seed:n,n:e,level:t,weights:i={},boss:s={},paths:r=1,budget:o=1}){let a=ei(n),c=[];for(let l=1;l<=e;l++){let h=l/e,u=(12+t*1.6)*(.45+h*1.35)*o,f=zy.filter(([,y,v])=>v<=t&&(y===1||l>=(y===2?3:Math.ceil(e*.35)))),d=[],p=u,x=0,m=l<3?2:2+Math.floor(a()*2)+(h>.6?1:0);for(let y=0;y<m&&p>.5;y++){let v=f.map(D=>[D,(i[D[0]]??1)*(D[1]===1?1.4-h*.6:D[1]===2?.6+h:.3+h*1.2)]),_=v.reduce((D,[,G])=>D+G,0),b=a()*_,w=v[0][0];for(let[D,G]of v)if(b-=G,b<=0){w=D;break}let[R,M,,T,N]=w,U=y===m-1?p:p*(.3+a()*.35),z=Math.max(1,Math.round(U/T));p-=z*T;let F=Math.round(N*(1.1-h*.35)*10)/10,C=r>1?a()<.75?"a":String(Math.floor(a()*r)):null;d.push(`${R}${z>1?`*${z}@${F}`:""}${x?`+${x}`:""}${C!==null?`>${C}`:""}`),x+=Math.round(2+a()*4+(M>=2?2:0))}let g=s[l];if(g){let[y,v]=Array.isArray(g)?g:[g,0];d.unshift(`${y}${r>1?`>${v}`:""}`);for(let _=1;_<d.length;_++)d[_]=d[_].includes("+")?d[_].replace(/\+(\d+)/,(b,w)=>`+${+w+4}`):d[_].replace(/(>[0-9a])?$/,b=>`+4${b||""}`)}c.push(d.join(", "))}return c}var Kf=24,Jf=14,Hc={normal:{name:"보통",hp:1,speed:1,bounty:1,lives:20,reward:1},hard:{name:"어려움",hp:1.3,speed:1.05,bounty:.92,lives:15,reward:1.6},hell:{name:"지옥",hp:1.6,speed:1.08,bounty:.9,lives:10,reward:2.4}};var Co={hpMult:1.1,goldShare:.6,startGoldShare:.65},Gy=[{id:"s1",name:"부산진 전투",date:"1592년 4월",season:"spring",base:"부산진성",desc:"임진년 4월, 왜군 선봉이 부산포에 상륙했다. 바다에서 올라오는 적을 부산진성 앞에서 막아내라.",region:{x:201,y:378},startGold:240,hpBase:1,hpGrowth:.1,unlockTowers:["haeinsa"],grid:["TTT..TT.....MMMMM...TTMM","T.........f.......R...TM","......................TT","..........R........f....","WW.....f................","WWW.......f.........T...","WWW....R.............R..","WWWW...........f......HH","WWWW..T..............fH.","WWWW.......f...........J","WWWWW..............R....","WWWWW...................","WWWWWW......T.....f....H","WWWWWWWTT...TT.....HHTTT"],paths:[[[-1,2],[5,2],[5,10],[11,10],[11,4],[17,4],[17,11],[23,11]]],waves:["ash*8@1.3","ash*10@1.1, sco*4@0.8+8","ash*8@1, tep*5@1.4+4","sco*10@0.6, ash*10@1+6","ash*12@0.9, sam*1+10","tep*8@1.1, ash*10@0.8+3, sco*6@0.5+12","sam*3@3, ash*12@0.8+2","drm*1, ash*14@0.6+1, sco*8@0.5+10","tep*12@0.8, sam*3@2.5+6","ash*18@0.6, sam*4@2+4, drm*2@6+8","sco*16@0.4, tep*10@0.8+6, sam*5@1.8+12","konishi, ash*16@0.7+2, sam*4@3+8"]},{id:"s2",name:"탄금대 전투",date:"1592년 4월",season:"summer",base:"탄금대 본진",desc:"신립 장군이 강을 등지고 배수진을 친 탄금대. 두 갈래로 몰려와 하나로 합쳐지는 왜군을 막아라.",region:{x:159,y:292},startGold:260,hpBase:1.12,hpGrowth:.1,unlockTowers:["seokguram"],grid:["TT....TTT....MMMMMM..TWW","T...........f........WWW","....f..R..............WW","......................WW","..T.......f.....R.....WW","......R..............WWW","..f..........f.......WWW","......................WW","..T.....R.......f.....WW","....f.......T........WWW","......................WW","........f...........TWWW","..R...........f.....TWWW","TTT...TTTT...TTTT...TTWW"],paths:[[[-1,3],[7,3],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]],[[-1,11],[7,11],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]]],waves:["ash*10@1>a","ash*8@1>0, sco*8@0.6>1+3","tep*10@1>a, ash*8@0.9>a+5","cav*3@2>a, ash*12@0.8>a+3","sam*3@2.5>a, sco*10@0.5>a+4","nin*3@2>a, ash*14@0.7>a+3","drm*2@4>a, ash*16@0.6>a+1, tep*8@1>a+8","arm*1>0, sam*3@2>a+4, sco*10@0.5>a+8","cav*6@1.2>a, nin*4@1.5>a+8","ash*20@0.5>a, sam*5@1.8>a+5, drm*2@5>a+10","arm*2@5>a, tep*14@0.7>a+3","nin*6@1.2>a, cav*6@1.2>a+6, sco*14@0.4>a+12","sam*8@1.5>a, drm*3@4>a+2, ash*20@0.5>a+6","arm*4@3>a, cav*8@1>a+6, nin*6@1>a+12","kato>0, sam*6@2>a+4, ash*20@0.5>a+8, arm*2@5>a+14"]},{id:"s3",name:"한산도 대첩",date:"1592년 7월",season:"sea",base:"한산 수영",desc:"한산도 앞바다. 학익진에 쫓긴 왜 수군이 섬으로 상륙한다. 좁은 땅을 지혜롭게 써라.",region:{x:176,y:396},startGold:300,hpBase:1.12,hpGrowth:.1,unlockTowers:["gyeongbok"],grid:["WWWW..TT..WWW...TT.WWWWW","....................WWWW","WW.....f......R.....WWWW","WWW.f....WWW.....f..WWWW","WW..R...WWWWW.......WWWW","WW..................WWWW","WWW.....f....T.......WWW","WWW..WWW........WW...WWW","WWW..WWWW...f..WWW....WW","WWW.................f.WW","WWWWW..R....f.....T...WW","WWWWWWW..f.....WW.....HW","WWWWWWWWW...T.WWW.......","WWWWWWWWWWW....WWWT..HHH"],paths:[[[-1,1],[19,1],[19,5],[4,5],[4,9],[19,9],[19,12],[23,12]]],waves:["ash*12@0.9","sco*12@0.5, ash*8@1+6","onm*1, ash*14@0.7+2","tep*12@0.8, sam*2@3+6","cav*5@1.2, drm*1+6, ash*12@0.6+7","ram*1, sco*12@0.4+4","nin*5@1.3, onm*2@3+4, ash*14@0.6+6","sam*6@1.5, tep*12@0.7+5","arm*2@4, onm*2@4+2, ash*18@0.5+6","ram*2@6, cav*8@1+4, drm*2@5+8","nin*8@0.9, sam*6@1.4+6","arm*4@2.5, onm*3@3+3, tep*16@0.5+8","cav*12@0.7, drm*3@3+2, sco*20@0.3+8","ram*3@5, sam*8@1.2+4, nin*6@1+12","wakizaka, onm*3@3+3, arm*3@4+6, sam*8@1.2+10"]},{id:"s4",name:"행주대첩",date:"1593년 2월",season:"winter",base:"행주산성",desc:"눈 덮인 행주산성. 두 갈래 길로 3만 대군이 몰려온다. 협동이라면 한 사람이 한 길씩!",region:{x:110,y:270},startGold:390,hpBase:1.2,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT....MMMM....TTMMM","T.......f.........R...MM","..............T.......MM","....R...........f.....MM","..f.......T..........RMM","......................MM","..T.......f....R.......M","......R................M","...f..........T.......MM","...R..................MM","..T...........f......WWM","......f..........T..WWWW","...................WWWWW","TTT..TTT...TTTT..WWWWWWW"],paths:[[[-1,2],[9,2],[9,5],[16,5],[16,7],[21,7]],[[-1,12],[6,12],[6,9],[18,9],[18,7],[21,7]]],waves:["ash*8@1>0, ash*8@1>1","sco*8@0.6>0, tep*6@1.2>1+2","sam*2@3>0, ash*12@0.8>1+2","cav*4@1.5>1, ash*12@0.8>0+3","nin*4@1.5>0, onm*2@3>1+2, ash*12@0.7>a+6","arm*1>0, arm*1>1+2, sco*14@0.5>a+6","drm*2@3>a, sam*6@1.5>a+2","ram*1>0, cav*6@1>1+3, tep*12@0.6>a+8","onm*4@2>a, arm*3@3>a+3, ash*20@0.5>a+6","nin*8@0.9>a, sam*6@1.4>a+6, drm*2@4>a+10","ram*2@4>1, cav*10@0.8>0+2, sco*16@0.35>a+10","arm*5@2.5>a, onm*4@2.5>a+4, tep*16@0.5>a+8","sam*10@1.1>a, nin*8@0.9>a+6, drm*3@3>a+10","ram*3@4>a, arm*4@3>a+3, cav*10@0.7>a+10","onm*6@1.8>a, sam*12@0.9>a+3, ash*30@0.3>a+8","nin*14@0.6>a, arm*6@2>a+6, drm*4@3>a+10","ram*4@3.5>a, cav*14@0.6>a+4, sam*10@1>a+10, onm*4@2>a+14","ukita>0, arm*6@2.5>a+3, sam*12@1>a+8, nin*10@0.8>a+14"]},{id:"s5",name:"한양 수복",date:"1593년 4월",season:"autumn",base:"경복궁",desc:"도성을 되찾는 날. 한양으로 향하는 두 길을 모두 지키고, 침략을 꾸민 책사를 물리쳐라.",region:{x:133,y:255},startGold:450,hpBase:1.26,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT..MMMMM....TTTKKK","T......f.........R...KKK","..R.......f..........KKK","......T..............KKK","...........f.........KKK","..f...R........f.....KKK",".....................KKK","...T.........R.......KKK","..................f..KKK",".f......T..........T.KKK","...R..............f..KKK",".......f............TKKK","..T..............f...KKK","TTT..TTTT..TTTT...TTTKKK"],paths:[[[3,-1],[3,4],[9,4],[9,1],[15,1],[15,6],[20,6]],[[-1,11],[5,11],[5,8],[12,8],[12,12],[18,12],[18,6],[20,6]]],waves:["ash*12@0.8>a","sco*14@0.5>a, tep*8@1>a+5","sam*4@2>a, ash*14@0.6>a+3","cav*4@1.4>a, onm*2@3>a+5","nin*4@1.4>a, drm*1>a+3, ash*16@0.5>a+6","arm*3@3>a, tep*14@0.6>a+4","ram*2@4>a, sam*6@1.4>a+4, sco*16@0.35>a+10","onm*3@2>a, cav*8@0.9>a+3, nin*5@1.1>a+10","arm*5@2.4>a, drm*3@3>a+2, ash*24@0.4>a+6","konishi>0, sam*8@1.2>a+3, tep*16@0.5>a+8","nin*12@0.7>a, cav*10@0.8>a+6","ram*4@3>a, onm*5@2>a+3, sam*10@1>a+8","arm*8@1.8>a, drm*4@3>a+2, sco*24@0.3>a+8","cav*16@0.6>a, nin*12@0.7>a+6, onm*4@2>a+12","kato>1, arm*6@2>a+3, sam*12@0.9>a+8","ram*5@3>a, sam*14@0.8>a+4, tep*20@0.4>a+12","nin*16@0.5>a, onm*6@1.6>a+4, cav*14@0.6>a+10","arm*10@1.4>a, drm*5@2.5>a+3, sam*16@0.7>a+8","wakizaka>0, ukita>1+4, ram*4@3>a+8, nin*14@0.6>a+12","ishida>0, arm*8@2>a+4, sam*16@0.8>a+10, onm*6@2>a+16, cav*16@0.6>a+20"]}],Vy={s6:{id:"s6",name:"동래성 전투",date:"1592년 4월",season:"spring",base:"동래성",desc:'"싸워 죽기는 쉬우나 길을 내주기는 어렵다." 송상현 부사가 지킨 동래성. 성벽 앞 굽은 길에서 왜군을 막아라.',region:{x:214,y:364},startGold:250,hpGrowth:.1,grid:Nt({seed:6,mountains:{side:"top",depth:1,from:0,to:8},wall:{side:"right",w:3},houses:[[17,1],[18,1],[17,12],[18,12]],jang:[[20,4]]}),paths:[[[-1,3],[5,3],[5,10],[10,10],[10,2],[15,2],[15,11],[19,11],[19,6],[20,6]]],gen:{level:1,n:12,boss:{12:"so"},weights:{sco:1.4}}},s7:{id:"s7",name:"상주 전투",date:"1592년 4월",season:"spring",base:"상주 진영",desc:"북천을 건너 두 갈래로 몰려오는 왜군. 다리목에서 하나로 합쳐지는 길을 노려라.",region:{x:172,y:313},startGold:260,hpGrowth:.1,grid:Nt({seed:7,river:{axis:"v",at:10,w:2},mountains:{side:"right",depth:1},houses:[[20,11],[21,11]],jang:[[20,6]]}),paths:[[[-1,2],[7,2],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]],[[-1,11],[7,11],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]]],gen:{level:2,n:14,boss:{14:["kuroda",0]}}},s8:{id:"s8",name:"옥포 해전",date:"1592년 5월",season:"sea",base:"옥포 수영",desc:"이순신 함대의 첫 승리. 옥포 앞바다에서 뭍으로 기어오르는 왜 수군을 포구에서 쓸어버려라.",region:{x:189,y:390},startGold:280,hpGrowth:.1,grid:Nt({seed:8,land:[[0,0,17,13],[18,3,20,10]],trees:.3,houses:[[1,11],[2,12],[1,12]]}),paths:[[[24,1],[15,1],[15,5],[9,5],[9,1],[3,1],[3,9],[12,9],[12,12],[4,12]]],gen:{level:3,n:14,boss:{14:"todo"},weights:{sco:1.3,tep:1.3}},unlockTowers:["namhansan"]},s9:{id:"s9",name:"사천 해전",date:"1592년 5월",season:"sea",base:"사천 포구",desc:"거북선이 처음 바다에 나선 날. 두 물길로 들어오는 왜선을 막아내라.",region:{x:160,y:381},startGold:290,hpGrowth:.1,grid:Nt({seed:9,sea:{side:"bottom",depth:2},mountains:{side:"top",depth:1,from:6,to:17},houses:[[1,3],[1,4]]}),paths:[[[24,3],[17,3],[17,7],[9,7],[9,3],[3,3],[3,6],[1,6]],[[24,10],[14,10],[14,7],[9,7],[9,3],[3,3],[3,6],[1,6]]],gen:{level:4,n:15,boss:{8:["todo",1],15:["kuki",0]},weights:{cav:.6}}},s10:{id:"s10",name:"평양성 전투",date:"1592년 6월",season:"summer",base:"평양성",desc:"대동강을 사이에 둔 평양성. 강을 건너오는 다리 두 곳을 모두 지켜라.",region:{x:92,y:182},startGold:300,hpGrowth:.1,grid:Nt({seed:10,river:{axis:"h",at:6,w:2},wall:{side:"left",w:2},houses:[[3,1],[4,1],[3,12]]}),paths:[[[24,11],[17,11],[17,2],[8,2],[8,9],[2,9]],[[24,2],[20,2],[20,11],[12,11],[12,9],[2,9]]],gen:{level:5,n:15,boss:{15:["konishi",0]}}},s11:{id:"s11",name:"부산포 해전",date:"1592년 9월",season:"sea",base:"부산포",desc:"왜군의 본거지 부산포를 들이친다. 끝없이 쏟아지는 왜 수군을 길고 긴 해안길에서 버텨라.",region:{x:214,y:386},startGold:320,hpGrowth:.1,grid:Nt({seed:11,sea:{side:"left",depth:3},sea2:null,mountains:{side:"right",depth:1},houses:[[20,12],[21,12]]}),paths:[[[4,-1],[4,3],[12,3],[12,1],[19,1],[19,6],[7,6],[7,10],[16,10],[16,12],[20,12]]],gen:{level:6,n:16,boss:{9:"todo",16:"kuki"},weights:{sco:1.2,nin:1.2}}},s12:{id:"s12",name:"진주대첩",date:"1592년 10월",season:"autumn",base:"진주성",desc:"김시민 목사와 3,800 군사가 3만 대군을 막아낸 진주성. 남강을 등진 성으로 세 방향에서 몰려온다.",region:{x:157,y:368},startGold:330,hpGrowth:.1,grid:Nt({seed:12,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[20,3],[20,10]]}),paths:[[[-1,2],[4,2],[4,5],[9,5],[9,1],[15,1],[15,5],[18,5],[18,7],[21,7]],[[-1,9],[4,9],[4,11],[11,11],[11,8],[15,8],[15,10],[18,10],[18,7],[21,7]]],gen:{level:7,n:16,boss:{16:["kuroda",1]},weights:{ram:1.5,drm:1.3}}},s13:{id:"s13",name:"평양성 탈환",date:"1593년 1월",season:"winter",base:"평양 본진",desc:"조명 연합군의 반격. 눈 덮인 평양 들판에서 성을 빠져나와 역습하는 왜군을 막아라.",region:{x:100,y:176},startGold:340,hpGrowth:.1,grid:Nt({seed:13,mountains:{side:"bottom",depth:1},river:{axis:"v",at:15,w:1},houses:[[1,6],[1,7]]}),paths:[[[24,3],[19,3],[19,9],[12,9],[12,3],[6,3],[6,7],[2,7]],[[24,11],[16,11],[16,9],[12,9],[12,3],[6,3],[6,7],[2,7]]],gen:{level:8,n:16,boss:{8:["so",1],16:["konishi",0]},weights:{arm:1.4}},unlockTowers:["seokbinggo"]},s14:{id:"s14",name:"진주성 2차 전투",date:"1593년 6월",season:"summer",base:"촉석루",desc:"복수를 벼른 왜군 대군이 다시 진주성으로. 세 길로 몰려오는 적을 촉석루 앞에서 막아라.",region:{x:166,y:372},startGold:380,hpGrowth:.1,grid:Nt({seed:14,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[19,3],[19,10]]}),paths:[[[-1,1],[6,1],[6,4],[11,4],[11,1],[16,1],[16,4],[19,4],[19,6],[21,6]],[[-1,11],[6,11],[6,8],[11,8],[11,11],[16,11],[16,8],[19,8],[19,6],[21,6]],[[-1,6],[21,6]]],gen:{level:10,n:18,boss:{9:["kuroda",0],18:["kato",1]},weights:{ram:1.3,sam:1.3}},unlockTowers:["bulguksa"]},s15:{id:"s15",name:"칠천량의 밤",date:"1597년 7월",season:"sea",base:"한산 수영",desc:"칠천량에서 조선 수군이 무너진 밤. 살아남은 배를 지키며 밤바다로 밀려드는 왜군을 버텨라.",region:{x:184,y:386},startGold:380,hpGrowth:.1,night:!0,grid:Nt({seed:15,land:[[0,0,23,3],[2,5,21,7],[0,10,23,13]],trees:.3}),paths:[[[24,1],[2,1],[2,6],[21,6],[21,11],[5,11]]],gen:{level:11,n:16,boss:{8:"wakizaka",16:"todo"},weights:{nin:1.8,sco:1.2}}},s16:{id:"s16",name:"남원성 전투",date:"1597년 8월",season:"summer",base:"남원성",desc:"정유재란, 호남으로 가는 길목 남원성. 성을 둘러싼 왜군이 네 모퉁이를 돌아 성문으로 몰려온다.",region:{x:147,y:363},startGold:400,hpGrowth:.1,grid:Nt({seed:16,mountains:{side:"left",depth:1},houses:[[11,6],[12,6],[11,7]]}),paths:[[[-1,1],[21,1],[21,12],[3,12],[3,4],[18,4],[18,9],[12,9]]],gen:{level:12,n:18,boss:{9:"so",18:"ukita"},weights:{ram:1.4}}},s17:{id:"s17",name:"직산 전투",date:"1597년 9월",season:"autumn",base:"직산 진영",desc:"한양으로 북상하는 왜군을 조명 연합군이 막아선 들판. 넓은 들을 가로지르는 두 길을 모두 지켜라.",region:{x:139,y:289},startGold:420,hpGrowth:.1,grid:Nt({seed:17,flowers:16,rocks:6,houses:[[22,1],[22,2]]}),paths:[[[-1,4],[4,4],[4,1],[10,1],[10,5],[14,5],[14,2],[19,2],[19,7],[22,7]],[[-1,10],[5,10],[5,12],[11,12],[11,9],[16,9],[16,11],[19,11],[19,7],[22,7]]],gen:{level:13,n:18,boss:{18:["kuroda",1]},weights:{cav:1.8,drm:1.2}}},s18:{id:"s18",name:"명량 대첩",date:"1597년 9월",season:"sea",base:"울돌목 진영",desc:'"신에게는 아직 열두 척의 배가 남아 있사옵니다." 거센 물살 울돌목, 133척의 왜선이 좁은 물길로 쏟아진다.',region:{x:111,y:405},startGold:440,hpGrowth:.1,grid:Nt({seed:18,land:[[0,3,23,10]],trees:.2,rocks:3}),paths:[[[24,4],[15,4],[15,9],[9,9],[9,4],[3,4],[3,8],[1,8]]],gen:{level:14,n:20,boss:{20:"kurushima"},weights:{sco:2.2,ash:1.6,cav:1.4},budget:1.15}},s19:{id:"s19",name:"울산성 전투",date:"1597년 12월",season:"winter",base:"울산 진영",desc:"가토 기요마사가 쌓은 울산 왜성. 한겨울 성에서 뛰쳐나오는 철갑 부대를 막아라.",region:{x:210,y:357},startGold:460,hpGrowth:.1,grid:Nt({seed:19,sea:{side:"right",depth:2},mountains:{side:"top",depth:1},houses:[[1,12],[2,12]]}),paths:[[[20,-1],[20,3],[15,3],[15,1],[10,1],[10,5],[5,5],[5,9],[9,9],[9,12],[2,12]],[[20,14],[20,10],[16,10],[16,7],[12,7],[12,9],[9,9],[9,12],[2,12]]],gen:{level:15,n:19,boss:{19:["kato",0]},weights:{arm:1.8,sam:1.2}}},s20:{id:"s20",name:"사천 왜성 전투",date:"1598년 10월",season:"autumn",base:"사천 진영",desc:"귀신 시마즈가 지키는 사천 왜성. 성문이 열리면 사나운 무사들이 두 갈래로 쏟아진다.",region:{x:168,y:378},startGold:480,hpGrowth:.1,grid:Nt({seed:20,wall:{side:"left",w:2},sea:{side:"bottom",depth:1},houses:[[21,5],[22,5]]}),paths:[[[2,2],[7,2],[7,5],[11,5],[11,1],[16,1],[16,4],[19,4],[19,6],[22,6]],[[2,10],[6,10],[6,7],[11,7],[11,11],[16,11],[16,8],[19,8],[19,6],[22,6]]],gen:{level:16,n:20,boss:{10:["kurushima",1],20:["shimazu",0]},weights:{sam:1.6,cav:1.2}}},s21:{id:"s21",name:"순천 왜교성 전투",date:"1598년 11월",season:"autumn",base:"순천 진영",desc:"바다와 뭍에서 동시에 에워싼 왜교성. 성에서 뛰쳐나오는 고니시의 결사대를 막아라.",region:{x:151,y:388},startGold:500,hpGrowth:.1,grid:Nt({seed:21,sea:{side:"bottom",depth:2},wall:{side:"right",w:2},houses:[[1,1],[2,1]]}),paths:[[[21,1],[16,1],[16,4],[12,4],[12,1],[7,1],[7,4],[3,4],[3,6],[1,6]],[[21,10],[17,10],[17,7],[12,7],[12,10],[7,10],[7,7],[3,7],[3,6],[1,6]]],gen:{level:17,n:20,boss:{10:["so",1],20:["konishi",0]},weights:{tep:1.4,nin:1.4}}},s22:{id:"s22",name:"노량 해전",date:"1598년 11월",season:"sea",base:"노량 수영",desc:'"나의 죽음을 적에게 알리지 말라." 7년 전쟁의 마지막 바다. 물러가는 왜 수군을 끝까지 쫓아 막아라.',region:{x:163,y:385},startGold:520,hpGrowth:.1,night:!0,grid:Nt({seed:22,land:[[0,0,23,2],[0,5,23,8],[0,11,23,13]],trees:.3}),paths:[[[24,1],[3,1],[3,6],[20,6],[20,12],[1,12]]],gen:{level:18,n:21,boss:{11:"kuki",21:"shimazu"},weights:{sco:1.3,nin:1.5,cav:1.2}}},s23:{id:"s23",name:"대마도 정벌",date:"가상 · 1599년",season:"sea",base:"조선 수군 진영",desc:"세종 때처럼 다시 대마도로! 침략의 길잡이 섬에 상륙한 조선군 진영을 지켜라. (역사를 바꾼 가상 전장)",region:{x:226,y:412},startGold:540,hpGrowth:.1,grid:Nt({seed:23,land:[[1,1,22,12]],trees:.5,inner:8,houses:[[20,2],[21,2],[20,3]]}),paths:[[[24,12],[18,12],[18,8],[12,8],[12,11],[5,11],[5,4],[16,4],[16,2],[21,2]]],gen:{level:19,n:21,boss:{11:"todo",21:"so"},weights:{nin:1.6,onm:1.4}}},s24:{id:"s24",name:"현해탄 상륙전",date:"가상 · 1599년",season:"summer",base:"상륙 진지",desc:"현해탄을 건너 규슈 바닷가에 발을 디뎠다. 사방에서 몰려드는 정예 무사들을 해변 진지에서 버텨라. (가상 전장)",region:{x:246,y:436},startGold:560,hpGrowth:.1,grid:Nt({seed:24,sea:{side:"left",depth:2},mountains:{side:"right",depth:1},flowers:5}),paths:[[[22,-1],[22,2],[17,2],[17,5],[12,5],[12,1],[8,1],[8,4],[5,4],[5,6]],[[22,14],[22,11],[17,11],[17,8],[12,8],[12,12],[8,12],[8,8],[5,8],[5,6]]],gen:{level:21,n:22,boss:{11:["kuki",1],22:["ishida",0]},weights:{sam:1.5,arm:1.3,cav:1.2}}},s25:{id:"s25",name:"나고야성 최후의 결전",date:"가상 · 1599년",season:"autumn",base:"조선군 본진",desc:"침략의 본영 히젠 나고야성. 네 명의 대장을 차례로 꺾고 나면 마침내 그가 성문을 나선다. 초반에는 두 길이 갈라지기 전 굽이에 영웅을 배치하라. 마지막 결전에서는 은신 탐지를 유지하고, 기여가 적은 유산을 철거해 강한 단일 공격의 특화 유산에 재투자하라.",region:{x:246,y:452},startGold:600,hpGrowth:.1,finale:!0,grid:Nt({seed:25,wall:{side:"top",w:1},mountains:{side:"bottom",depth:1},houses:[[1,6],[1,7],[2,6]]}),paths:[[[21,1],[21,5],[16,5],[16,2],[11,2],[11,5],[7,5],[7,2],[3,2],[3,7]],[[21,1],[21,9],[16,9],[16,12],[11,12],[11,9],[7,9],[7,12],[3,12],[3,7]]],gen:{level:23,n:24,weights:{sam:1.4,arm:1.3,onm:1.2},boss:{6:["konishi",0],12:["kato",1],17:["ukita",0],21:["shimazu",1]},final:"hideyoshi>0"}}},Hy={s1:1,s6:2.26,s7:1.43,s2:1.78,s8:3.11,s9:1.14,s10:1.58,s3:1.63,s11:1.49,s12:1.14,s13:2.02,s4:1.65,s5:1.49,s14:1.38,s15:.97,s16:3.48,s17:2.76,s18:3.97,s19:3.68,s20:2.24,s21:3.2,s22:3.66,s23:4.3,s24:2.26,s25:2.85},Wy=[{name:"제1장 · 임진년의 봄",stages:["s1","s6","s7","s2","s8"]},{name:"제2장 · 바다와 성",stages:["s9","s10","s3","s11","s12"]},{name:"제3장 · 반격",stages:["s13","s4","s5","s14","s15"]},{name:"제4장 · 정유재란",stages:["s16","s17","s18","s19","s20"]},{name:"제5장 · 최후의 결전",stages:["s21","s22","s23","s24","s25"]}];function Xy(n){let e=n.gen,t=$f({seed:qy(n.id),n:e.n,level:e.level,weights:e.weights,boss:e.boss,paths:n.paths.length,budget:e.budget||1});return e.final&&(t[t.length-1]=e.final),{unlockTowers:[],...n,waves:t}}function qy(n){let e=7;for(let t of n)e=e*31+t.charCodeAt(0)>>>0;return e}var jf=Object.fromEntries([...Gy.map(n=>[n.id,n]),...Object.values(Vy).map(n=>[n.id,Xy(n)])]),Wc=Wy.flatMap((n,e)=>n.stages.map(t=>({...jf[t],chapter:e,hpBase:Hy[t]??jf[t].hpBase}))).map((n,e)=>({...n,bossHp:.9+.045*e})),ti=Object.fromEntries(Wc.map(n=>[n.id,n]));function qh(n){return n.split(",").map(e=>{let t=e.trim(),i=t.match(/^([a-z_]+)(?:\*(\d+))?(?:@([\d.]+))?((?:[+>][\d.a]+)*)$/);if(!i)throw new Error("잘못된 웨이브 문법: "+t);let s=Zf[i[1]]||i[1],r=(i[4].match(/\+([\d.]+)/)||[])[1],o=(i[4].match(/>([0-9a])/)||[])[1];return{type:s,n:i[2]?+i[2]:1,gap:i[3]?+i[3]:1,delay:r?+r:0,path:o===void 0||o==="a"?"a":+o}})}var Qf=["sungnyemun","hwaseong","bosingak","cheomseong","haeinsa","seokguram","gyeongbok","namhansan","seokbinggo","bulguksa"];var Ai={sungnyemun:{name:"숭례문",title:"궁수루",cat:"palace",kind:"arrow",dmgType:"phys",desc:"한양 도성의 남대문. 값싸고 빠른 궁수들이 한 명씩 정확히 쏜다.",levels:[{cost:70,dmg:12,cd:.85,range:3},{cost:60,dmg:19,cd:.8,range:3.2},{cost:100,dmg:28,cd:.75,range:3.4}],branches:{A:{name:"편전 명궁",cost:190,dmg:90,cd:1.1,range:4.4,crit:.25,critMult:2.5,target:"strong",desc:"애기살(편전)을 쓰는 명궁. 사거리 대폭 증가, 25% 확률 2.5배 치명타. 강한 적 우선."},B:{name:"연사 궁대",cost:180,dmg:20,cd:.5,range:3.4,multishot:3,desc:"궁대가 늘어나 한 번에 세 명을 동시에 쏜다. 졸병 떼에 강하다."}}},hwaseong:{name:"수원화성",title:"포루",cat:"fortress",kind:"cannon",dmgType:"fire",desc:"정조의 성곽. 포루에서 쏘는 화포가 범위 피해를 준다. 화기는 갑옷을 절반 무시.",levels:[{cost:120,dmg:32,cd:2,range:3,splash:.9},{cost:90,dmg:50,cd:1.9,range:3.2,splash:1},{cost:140,dmg:76,cd:1.8,range:3.4,splash:1.1}],branches:{A:{name:"홍이포",cost:250,dmg:190,cd:2.4,range:4.6,splash:1.4,stun:.3,desc:"거대한 포탄이 넓은 범위를 강타하고 잠시 기절시킨다."},B:{name:"화차 신기전",cost:240,dmg:46,cd:2.2,range:3.8,splash:.7,rockets:6,desc:"화차에서 신기전 6발을 흩뿌린다. 넓게 퍼진 적에게 강하다."}}},bosingak:{name:"보신각",title:"종루",cat:"palace",kind:"bell",dmgType:"holy",desc:"도성의 종. 종이 울릴 때마다 주변 모든 적에게 피해를 주고 둔화시킨다.",levels:[{cost:110,dmg:9,cd:1.6,range:2,slow:.3,slowDur:1.2},{cost:80,dmg:14,cd:1.5,range:2.2,slow:.35,slowDur:1.3},{cost:120,dmg:20,cd:1.4,range:2.4,slow:.4,slowDur:1.4}],branches:{A:{name:"에밀레종",cost:230,dmg:34,cd:1.4,range:2.6,slow:.4,slowDur:1.5,stunEvery:3,stun:.9,desc:"신종의 울림. 세 번째 타종마다 범위 내 모든 적을 기절시킨다."},B:{name:"인정·파루",cost:200,dmg:20,cd:1.2,range:2.8,slow:.55,slowDur:1.6,vuln:.15,desc:"통행금지의 종. 강한 둔화와 함께 받는 피해를 15% 늘린다."}}},cheomseong:{name:"첨성대",title:"천문대",cat:"fortress",kind:"star",dmgType:"holy",detect:!0,desc:"신라의 천문대. 먼 거리의 적을 별빛으로 꿰뚫고, 은신한 시노비를 찾아낸다.",levels:[{cost:140,dmg:48,cd:1.8,range:4.6},{cost:100,dmg:72,cd:1.7,range:4.9},{cost:150,dmg:105,cd:1.6,range:5.2}],branches:{A:{name:"혼천의",cost:260,dmg:135,cd:1.5,range:5.6,meteorEvery:3,meteorMult:2,meteorSplash:1.3,desc:"천체의 운행을 계산해 세 번째 공격마다 유성을 떨어뜨린다."},B:{name:"관상감",cost:230,dmg:120,cd:1.3,range:5.4,vuln:.25,vulnDur:4,detectMult:1.4,desc:"적의 운명을 읽는다. 맞은 적은 4초간 받는 피해 +25%. 탐지 범위 확대."}}},haeinsa:{name:"해인사",title:"장경각",cat:"temple",kind:"sutra",dmgType:"holy",desc:"팔만대장경의 가호. 범위 안의 적은 갑옷이 약해지고 느려지며 지속 피해를 입는다.",levels:[{cost:90,dps:4,shred:.2,slow:.1,range:2.4},{cost:80,dps:7,shred:.3,slow:.12,range:2.6},{cost:110,dps:11,shred:.4,slow:.14,range:2.8}],branches:{A:{name:"경판 결계",cost:220,dps:24,shred:.6,rshred:.3,slow:.18,range:3,desc:"결계 안에서는 갑옷과 저항이 크게 무너진다."},B:{name:"호국 법회",cost:200,dps:13,shred:.4,slow:.15,range:3,killGold:3,heroHeal:.03,desc:"범위에서 쓰러진 적마다 군자금 +3, 범위 안 영웅은 초당 3% 회복."}}},seokguram:{name:"석굴암",title:"본존불",cat:"temple",kind:"beam",dmgType:"holy",desc:"본존불의 광배에서 뻗는 빛. 한 적을 오래 비출수록 피해가 최대 4배까지 증가한다.",levels:[{cost:200,dps:26,ramp:4,rampTime:3,range:3.4},{cost:140,dps:40,ramp:4,rampTime:3,range:3.6},{cost:180,dps:58,ramp:4,rampTime:3,range:3.8}],branches:{A:{name:"대광명",cost:320,dps:85,ramp:7,rampTime:3,range:4,desc:"빛이 3초 만에 최대 7배까지 강해진다. 적장 사냥에 특화."},B:{name:"천불 광배",cost:300,dps:56,ramp:4,rampTime:3,range:3.8,chain:2,chainMult:.6,desc:"빛이 주변 적 2명에게 갈라져 60% 피해를 준다."}}},gyeongbok:{name:"경복궁",title:"근정전",cat:"palace",kind:"palace",dmgType:"none",desc:"조선의 법궁. 직접 공격하지 않지만 주변 유산을 강화하고 매 파도 군자금을 내린다.",levels:[{cost:220,buffDmg:.15,buffAs:.08,range:2.5,income:15},{cost:150,buffDmg:.22,buffAs:.12,range:2.7,income:25},{cost:200,buffDmg:.3,buffAs:.15,range:2.9,income:35}],branches:{A:{name:"왕도 정치",cost:320,buffDmg:.45,buffAs:.2,buffRange:.1,range:3.2,income:40,desc:"주변 유산 공격력 +45%, 공격속도 +20%, 사거리 +10%."},B:{name:"호조 국고",cost:280,buffDmg:.3,buffAs:.15,range:2.9,income:90,interest:.05,interestCap:60,desc:"매 파도 군자금 +90, 보유 군자금의 5% 이자(최대 60)."}}},namhansan:{name:"남한산성",title:"수어장대",cat:"fortress",kind:"barracks",dmgType:"phys",desc:"산성을 지키는 수어청 군사. 가장 가까운 길목에 병사를 세워 적을 붙잡는다. 쓰러진 병사는 잠시 뒤 다시 나온다.",levels:[{cost:90,soldiers:2,hp:175,dmg:11,cd:1,respawn:8,range:2.2},{cost:75,soldiers:2,hp:265,dmg:17,cd:1,respawn:8,range:2.4},{cost:120,soldiers:3,hp:340,dmg:23,cd:1,respawn:7,range:2.6}],branches:{A:{name:"수어청 정예",cost:230,soldiers:3,hp:680,dmg:38,cd:1,respawn:7,range:2.8,armor:.4,desc:"두꺼운 갑옷을 입은 정예병 셋. 받는 피해 -40%. 적장 앞에서도 오래 버틴다."},B:{name:"의승군",cost:210,soldiers:4,hp:360,dmg:27,cd:1,respawn:6,range:2.8,regen:.03,soldierType:"holy",desc:"남한산성을 쌓은 승병 넷. 신성 피해로 싸우고 초당 체력 3%씩 스스로 회복한다."}}},seokbinggo:{name:"석빙고",title:"얼음 창고",cat:"fortress",kind:"frost",dmgType:"phys",desc:"한여름에도 녹지 않는 얼음 창고. 얼음 덩이가 맞은 자리의 적들을 느리게 하고, 몇 번째마다 맞은 적을 꽁꽁 얼려 멈춰 세운다.",levels:[{cost:110,dmg:12,cd:1.2,range:3,splash:.5,slow:.3,slowDur:1.6,freezeEvery:5,freeze:1},{cost:80,dmg:18,cd:1.15,range:3.2,splash:.55,slow:.35,slowDur:1.7,freezeEvery:4,freeze:1.1},{cost:120,dmg:26,cd:1.1,range:3.4,splash:.6,slow:.4,slowDur:1.8,freezeEvery:4,freeze:1.3}],branches:{A:{name:"한파",cost:230,dmg:40,cd:1.3,range:3.6,slow:.45,slowDur:2,splash:1.1,freezeEvery:3,freeze:1,freezeAll:!0,desc:"큰 얼음 덩이가 넓게 터진다. 세 번째마다 터진 자리의 적을 모두 1초 얼린다."},B:{name:"얼음 감옥",cost:220,dmg:50,cd:1,range:3.8,slow:.45,slowDur:2,splash:.5,freezeEvery:3,freeze:2,shatter:.3,target:"strong",desc:"세 번째마다 한 적을 2초 얼음에 가둔다. 얼어 있는 동안 받는 피해 +30%. 강한 적 우선."}}},bulguksa:{name:"불국사",title:"다보탑",cat:"temple",kind:"pagoda",dmgType:"true",desc:"부처님 나라의 탑. 하늘에서 내린 빛기둥이 적의 최대 체력에 비례한 피해를 주고, 갑옷과 저항을 모두 무시한다. 적장에게 강하다.",levels:[{cost:150,dmg:20,pct:.03,pctCap:150,cd:2.5,range:3.4},{cost:110,dmg:30,pct:.04,pctCap:240,cd:2.4,range:3.6},{cost:150,dmg:45,pct:.05,pctCap:330,cd:2.3,range:3.8}],branches:{A:{name:"석가탑",cost:280,dmg:70,pct:.08,pctCap:650,cd:2.4,range:4.2,desc:"그림자 없는 탑. 최대 체력의 8%(한 번에 최대 650) + 70. 적장 사냥 전용."},B:{name:"연등회",cost:260,dmg:50,pct:.035,pctCap:220,cd:2.3,range:4,targets:3,vuln:.15,vulnDur:3,desc:"연등 셋이 세 적을 한꺼번에 비춘다. 맞은 적은 3초간 받는 피해 +15%."}}}},ep=.7,tp=2;function Yh(n,e,t){let i=Ai[n];return t?i.branches[t]:i.levels[e-1]}var np=[0,60,150,280,450,680,960,1300,1720,2200],Yy=10;var lr=Object.freeze({range:4.2,halfAngle:.72}),xn={yi:{name:"이순신",title:"충무공",era:"조선",role:"원거리 · 지휘",color:"#2f5f8f",accent:"#c8412f",hp:420,dmg:22,cd:.9,range:3.4,speed:2.2,dmgType:"phys",attack:"arrow",block:0,passive:{name:"필사즉생",desc:"주변 2.5칸 유산의 공격 속도 +12%."},skill:{short:"학익진",name:"학익진",cd:14,base:60,perLv:10,desc:"학의 날개처럼 펼친 부채꼴 화살 세례. 전방 4칸 부채꼴 적에게 물리 피해."},ult:{short:"거북선",name:"거북선 출격",cd:60,base:220,perLv:30,desc:"거북선이 길을 거슬러 돌진하며 닿는 모든 적에게 화기 피해를 주고 밀어낸다."},quote:"신에게는 아직 열두 척의 배가 남아 있사옵니다.",unlock:null},sejong:{name:"세종대왕",title:"성군",era:"조선",role:"지원 · 통제",color:"#b8322a",accent:"#d9a300",hp:360,dmg:16,cd:1,range:3,speed:2,dmgType:"holy",attack:"orb",block:0,passive:{name:"집현전",desc:"모든 아군의 처치 군자금 +10%."},skill:{short:`훈민
정음`,name:"훈민정음",cd:16,base:50,perLv:8,desc:"하늘에서 한글 자모가 쏟아져 반경 1.8칸 적에게 신성 피해와 기절 1.2초."},ult:{short:"자격루",name:"자격루",cd:70,desc:"시간을 다스린다. 6초간 모든 적 50% 둔화, 모든 유산 재장전 후 공격 속도 +30%."},quote:"나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.",unlock:null},eulji:{name:"을지문덕",title:"살수의 명장",era:"고구려",role:"범위 · 전략",color:"#3d6b4f",accent:"#d9a300",hp:380,dmg:18,cd:1.2,range:3.2,speed:2,dmgType:"holy",attack:"orb",splash:.7,block:0,passive:{name:"여수장우중문시",desc:"주변 2.5칸 적의 갑옷 -20%. 적장의 기세를 꺾는 시(詩)."},skill:{short:"청야",name:"청야전술",cd:15,base:30,perLv:5,desc:"들판을 불태워 5초간 반경 1.5칸에 초당 화기 피해 + 20% 둔화."},ult:{short:"살수",name:"살수대첩",cd:65,base:300,perLv:40,desc:"둑을 터뜨려 반경 3칸 적에게 큰 피해를 주고 3칸 뒤로 쓸어낸다."},quote:"전승공기고 지족원운지 — 싸움에 이겨 공이 높으니 만족하고 그만두라.",unlock:{coins:1500,stage:"s1"}},gang:{name:"강감찬",title:"귀주의 별",era:"고려",role:"근접 · 적장 사냥",color:"#5a4a8a",accent:"#f0c75e",hp:700,dmg:40,cd:1,range:1.1,speed:2.3,dmgType:"phys",attack:"melee",block:2,passive:{name:"낙성",desc:"4번째 공격마다 별이 떨어져 주변 1.2칸에 2배 신성 피해."},skill:{short:"돌격",name:"귀주 돌격",cd:12,base:80,perLv:12,desc:"지정 지점까지 돌진하며 경로의 적에게 피해와 기절 0.5초."},ult:{short:"낙성우",name:"낙성우",cd:60,base:180,perLv:25,desc:"가장 강한 적 8명에게 유성이 떨어진다."},quote:"별이 떨어진 곳에서 태어났으니, 이 땅에 떨어지는 적 또한 별과 같으리라.",unlock:{coins:2e3,stage:"s2"}},gwon:{name:"권율",title:"행주의 방패",era:"조선",role:"근접 · 방어",color:"#7a5230",accent:"#e6d3a3",hp:900,dmg:30,cd:1.1,range:1.1,speed:2,dmgType:"phys",attack:"melee",block:3,regen:.015,passive:{name:"행주치마",desc:"초당 최대 체력 1.5% 회복. 적 3명까지 저지."},skill:{short:"투석",name:"투석",cd:12,base:45,perLv:7,desc:"행주치마에 담아 온 돌 6개가 반경 2칸에 떨어져 피해와 기절 0.6초."},ult:{short:"산성",name:"행주산성",cd:55,desc:"길 위에 목책을 세워 6초간 모든 졸병·정예·중장을 막고, 권율이 받는 피해 50% 감소."},quote:"돌 하나, 치마폭 하나까지 모두가 성벽이다.",unlock:{coins:2500,stage:"s3"}},gwak:{name:"곽재우",title:"홍의장군",era:"조선",role:"기동 · 게릴라",color:"#c0392b",accent:"#2c2c2c",hp:440,dmg:16,cd:.5,range:3,speed:2.8,dmgType:"phys",attack:"arrow",block:0,detect:3,passive:{name:"천강홍의",desc:"주변 3칸의 은신한 적을 발각한다. 이동 속도가 빠르다."},skill:{short:"매복",name:"의병 매복",cd:18,desc:"지정 지점에 의병 3명을 매복시켜 12초간 적을 저지한다."},ult:{short:"질풍",name:"홍의 질풍",cd:50,desc:"8초간 무적, 공격 속도 2배, 화살이 적 3명에게 튕긴다."},quote:"하늘이 내린 붉은 옷의 장군이 여기 있다!",unlock:{coins:3e3,stage:"s4"}},ahn:{name:"안중근",title:"대한의군 참모중장",era:"대한제국",role:"원거리 · 저격",color:"#2e2e36",accent:"#c8a24a",hp:380,dmg:32,cd:1.6,range:4.2,speed:2.2,dmgType:"fire",attack:"gun",block:0,passive:{name:"위국헌신",desc:"권총은 화기라 갑옷의 절반을 무시한다. 적장에게 주는 피해 +25%. 사거리가 가장 길다."},skill:{short:"연발",name:"일곱 발의 총성",cd:14,base:34,perLv:6,desc:"지정 지점 반경 2.2칸의 적에게 권총 7발을 연달아 쏜다. 발당 화기 피해."},ult:{short:"저격",name:"하얼빈 의거",cd:65,base:800,perLv:100,desc:"전장에서 가장 강한 적(적장 우선)을 저격해 큰 화기 피해, 기절 1.5초, 6초간 받는 피해 +30%."},quote:"위국헌신 군인본분 — 나라를 위해 몸 바치는 것은 군인의 본분이다.",unlock:{coins:3500,stage:"s12"}},dangun:{name:"단군왕검",title:"고조선의 시조",era:"고조선",role:"범위 · 번개",color:"#e8e2d0",accent:"#3a8a5a",hp:480,dmg:17,cd:1.15,range:3.2,speed:2,dmgType:"holy",attack:"lightning",block:0,passive:{name:"홍익인간",desc:"널리 사람을 이롭게: 모든 아군 영웅이 초당 체력 0.7% 회복. 기본 공격 번개가 옆의 적 1명에게 절반 피해로 튄다."},skill:{short:"마늘",name:"마늘 던지기",cd:12,base:44,perLv:7,desc:"곰이 사람이 된 백일의 마늘! 마늘 3통을 던져 반경 0.9칸마다 신성 피해 + 3초간 매워서 35% 둔화."},ult:{short:"천둥",name:"천부인 번개",cd:60,base:135,perLv:18,desc:"하늘의 세 보물을 들어 번개 12줄기를 가장 강한 적들에게 내리친다. 줄기마다 신성 피해 + 기절 0.8초."},quote:"널리 인간을 이롭게 하라.",unlock:{coins:4e3,stage:"s5"}}};function ip(n,e){return{hp:(1+.09*(n-1))*(1+.04*e),dmg:(1+.08*(n-1))*(1+.04*e),skill:1+.04*e}}function sp(n){let e=1;for(let t=1;t<np.length;t++)n>=np[t]&&(e=t+1);return Math.min(e,Yy)}var Zy={yi:[{id:"yi_white",name:"백의종군",price:60,body:"#e9e6dc",sleeve:"#dcd8cc",desc:"벼슬을 잃고도 흰옷으로 싸움터를 지킨 충무공."},{id:"yi_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 두정갑과 전설의 기운."}],sejong:[{id:"sejong_blue",name:"청룡포",price:60,body:"#2d5b8a",sleeve:"#2d5b8a",desc:"푸른 곤룡포를 입은 성군."},{id:"sejong_gold",name:"금빛 전설",price:150,gold:!0,desc:"황금 곤룡포와 전설의 기운."}],eulji:[{id:"eulji_iron",name:"고구려 철기",price:60,body:"#4a4f5c",sleeve:"#5a606e",desc:"개마무사의 검은 쇠비늘 갑옷."},{id:"eulji_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 찰갑과 전설의 기운."}],gang:[{id:"gang_crimson",name:"귀주의 붉은 별",price:60,body:"#8a2a2a",sleeve:"#9a3434",desc:"귀주대첩의 붉은 전포."},{id:"gang_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑주와 전설의 기운."}],gwon:[{id:"gwon_hill",name:"행주 산성",price:60,body:"#556b3a",sleeve:"#62783f",desc:"산성을 지키던 들녘빛 전복."},{id:"gwon_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑옷과 전설의 기운."}],gwak:[{id:"gwak_black",name:"흑의 의병",price:60,body:"#2c2b33",sleeve:"#3a3944",desc:"밤을 틈타 기습하던 검은 옷."},{id:"gwak_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 홍의와 전설의 기운."}],ahn:[{id:"ahn_militia",name:"대한의군 군복",price:60,body:"#4a5a3a",sleeve:"#3e4c30",desc:"연해주 의병 부대의 국방색 군복."},{id:"ahn_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 외투와 전설의 기운."}],dangun:[{id:"dangun_sky",name:"천제의 푸른 옷",price:60,body:"#3a6a9a",sleeve:"#4a7aaa",desc:"하늘에서 내려온 환웅의 푸른 옷."},{id:"dangun_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 신의(神衣)와 전설의 기운."}]},rp={body:"#caa12a",sleeve:"#b8901f",boots:"#5a3a14"};function Xc(n,e){return e&&(Zy[n]||[]).find(t=>t.id===e)||null}var xs={singijeon:{short:"신기전",name:"신기전 일제사격",cd:28,rank:0,target:"point",radius:1.6,dmg:32,n:12,desc:"지정 위치 반경 1.6칸에 신기전 12발을 퍼붓는다. 발당 화기 피해 {dmg}."},bongsu:{short:"봉수",name:"봉수 경보",cd:45,rank:0,target:"none",dur:10,vuln:.2,desc:"봉화를 올려 {dur}초간 모든 은신 적을 발각하고, 모든 적이 받는 피해 +20%."},uibyeong:{short:"의병",name:"의병 소집",cd:35,rank:1,target:"path",n:4,hp:200,dmg:14,life:12,desc:"지정 위치 길목에 의병 {n}명을 소집해 {life}초간 적을 저지한다."},bigyeok:{short:"비격",name:"비격진천뢰",cd:40,rank:2,target:"point",radius:1.4,dmg:420,delay:2,stun:1,desc:"2초 뒤 터지는 조선의 시한폭탄. 반경 1.4칸 화기 피해 {dmg} + 기절 1초."},gunryang:{short:"군량",name:"군량 보급",cd:75,rank:3,target:"none",gold:120,desc:"즉시 군자금 {gold} 획득. 협동 시 동료도 절반을 받는다."},cheonja:{short:"천자",name:"천자총통",cd:50,rank:4,target:"point",radius:2,dmg:900,desc:"조선 최대의 화포. 지정 범위(2칸) 안 가장 강한 적에게 화기 피해 {dmg}."},donguibogam:{short:"동의",name:"동의보감",cd:60,rank:5,target:"none",desc:"허준의 의술. 모든 영웅의 체력을 완전히 회복하고, 쓰러진 영웅을 즉시 부활시킨다."},hanpa:{short:"한파",name:"동장군 한파",cd:32,rank:6,target:"point",radius:2,slow:.6,dur:6,dps:12,desc:"반경 2칸을 얼려 {dur}초간 60% 둔화, 초당 신성 피해 {dps}."}};function op(n){return 1+.1*n}function ap(n){return 1-.03*n}var hr={volley:{name:"조총 일제사격",minStage:1,bonus:40,desc:"조총병이 추가로 투입되고, 조총 피해가 50% 증가한다.",counter:"영웅을 조총 사거리 밖에 두거나 궁수로 먼저 제거하라.",add:[{type:"teppo",n:8,gap:.6}],teppoDmg:1.5},night:{name:"야습(夜襲)",minStage:2,bonus:60,desc:"밤이 된다. 모든 유산 사거리 -15%, 시노비 4명 추가.",counter:"첨성대와 봉수 경보로 은신을 드러내라.",add:[{type:"ninja",n:4,gap:1.2}],rangeMult:.85},march:{name:"강행군",minStage:1,bonus:40,desc:"이번 파도 왜군 이동 속도 +25%, 체력 -10%.",counter:"보신각·해인사로 발을 묶어라.",speedMult:1.25,hpMult:.9},iron:{name:"철갑 행렬",minStage:1,bonus:50,desc:"이번 파도 왜군 갑옷 +15%p.",counter:"해인사로 갑옷을 깎고 신성·화기 피해로 상대하라.",armorAdd:.15},cavalry:{name:"기마 돌격",minStage:2,bonus:50,desc:"기마무사 6명이 뒤따라 돌격한다.",counter:"기병은 저지되지 않는다. 둔화와 범위 피해를 준비하라.",add:[{type:"cavalry",n:6,gap:1,delay:6}]},hex:{name:"음양 결계",minStage:3,bonus:50,desc:"음양사 3명 추가. 이번 파도 왜군 신성 저항 +20%p.",counter:"물리·화기 유산 비중을 높여라.",add:[{type:"onmyoji",n:3,gap:2,delay:3}],resistAdd:.2}};var Zh=.02;var $y=n=>n>=20?.9:1;var qc=(n,e)=>Math.round(n*$y(e));var $h={insam:{short:"산삼",name:"산삼",price:12,target:"none",lives:3,desc:"백성을 달래 민심 +3. 최대치를 넘어서도 쌓인다."},chest:{short:"궤짝",name:"군량 궤짝",price:15,target:"none",gold:120,desc:"즉시 군자금 +120냥."},hwacha:{short:"화차",name:"화차 일제사격",price:20,target:"point",radius:1.7,n:14,dmg:34,stun:.8,desc:"지정 지점 반경 1.7칸에 화차 신기전 14발. 발당 화기 피해 34, 맞은 적 0.8초 기절."},bujeok:{short:"부적",name:"빙설 부적",price:25,target:"none",freeze:4,desc:"전장의 모든 적을 4초간 얼린다. 적장은 짧게 얼어붙는다."}};var Ro=0,ur=1,cp=2,Kh=3,lp=4,jh=new Map;function pi(n){return jh.has(n)||jh.set(n,jy(ti[n])),jh.get(n)}function jy(n){let e=Kf,t=Jf,i=new Array(e*t).fill(Ro),s=[];for(let u=0;u<t;u++){let f=n.grid[u];if(!f||f.length!==e)throw new Error(`${n.id} 지도 ${u}행 길이 오류 (${f&&f.length})`);for(let d=0;d<e;d++){let p=f[d];if(p!=="."){if(p==="f"){s.push({x:d,y:u,ch:p});continue}i[u*e+d]=p==="W"?Kh:cp,p!=="W"&&s.push({x:d,y:u,ch:p})}}}let r=n.paths.map(Ky),o=new Set;for(let u of n.paths)for(let f=0;f<u.length-1;f++){let[d,p]=u[f],[x,m]=u[f+1];if(d!==x&&p!==m)throw new Error(`${n.id} 경로는 축 정렬이어야 합니다`);let g=Math.max(Math.abs(x-d),Math.abs(m-p));for(let y=0;y<=g;y++){let v=d+Math.sign(x-d)*y,_=p+Math.sign(m-p)*y;v<0||_<0||v>=e||_>=t||(i[_*e+v]=ur,o.add(_*e+v))}}let a=s.filter(u=>!o.has(u.y*e+u.x)),c=n.paths[0][n.paths[0].length-1],l={x:c[0],y:c[1]};i[l.y*e+l.x]=lp;let h=[];return r.forEach((u,f)=>{for(let d=0;d<=u.total;d+=.25){let p=Ei(u,d);h.push({x:p.x,y:p.y,d,path:f})}}),{id:n.id,w:e,h:t,grid:i,decor:a,paths:r,base:l,samples:h}}function Ky(n){let e=n.map(([i,s])=>({x:i+.5,y:s+.5})),t=[0];for(let i=1;i<e.length;i++)t.push(t[i-1]+Math.hypot(e[i].x-e[i-1].x,e[i].y-e[i-1].y));return{pts:e,cum:t,total:t[t.length-1]}}function Ei(n,e){let{pts:t,cum:i}=n;if(e<=0){let u=t[1].x-t[0].x,f=t[1].y-t[0].y,d=Math.hypot(u,f)||1;return{x:t[0].x+u/d*e,y:t[0].y+f/d*e,dx:u/d,dy:f/d}}let s=1;for(;s<i.length-1&&i[s]<e;)s++;let r=t[s-1],o=t[s],a=i[s]-i[s-1]||1,c=Math.min(1,(e-i[s-1])/a),l=(o.x-r.x)/a,h=(o.y-r.y)/a;return{x:r.x+(o.x-r.x)*c,y:r.y+(o.y-r.y)*c,dx:l,dy:h}}function hp(n,e,t){return e<0||t<0||e>=n.w||t>=n.h?cp:n.grid[t*n.w+e]}function dr(n,e,t,i=-1){let s=null,r=1/0;for(let o of n.samples){if(i>=0&&o.path!==i||o.x<0||o.y<0||o.x>n.w||o.y>n.h)continue;let a=(o.x-e)**2+(o.y-t)**2;a<r&&(r=a,s=o)}return s?{...s,dist:Math.sqrt(r)}:null}var Jy=[{id:"yi_sejong",pair:["yi","sejong"],name:"성군과 성웅",desc:"10초간 모든 유산 공격력 +60%, 공격 속도 +20%. 모든 길에 거북선 출격."},{id:"eulji_gang",pair:["eulji","gang"],name:"살수낙성",desc:"고구려의 물과 고려의 별. 모든 적에게 신성 피해 350 + 4초간 50% 둔화."},{id:"gwak_gwon",pair:["gwon","gwak"],name:"의병 궐기",desc:"모든 길목에 정예 의병이 일어서고 왜군이 겁에 질린다(6초간 40% 둔화). 8초간 영웅 무적 + 공격력 2배."},{id:"gwon_yi",pair:["yi","gwon"],name:"수륙병진",desc:"바다와 육지에서 동시에 친다. 모든 적에게 화기 피해 400 + 기절 1.5초."},{id:"eulji_sejong",pair:["sejong","eulji"],name:"문무겸전",desc:"10초간 모든 적의 갑옷·저항 0. 모든 플레이어 군자금 +150."},{id:"gang_yi",pair:["yi","gang"],name:"불멸의 대첩",desc:"가장 강한 적 12명에게 유성 + 거북선 포격. 대상마다 신성 피해 500."},{id:"ahn_sejong",pair:["sejong","ahn"],name:"대한 독립 만세",desc:"한글로 새긴 만세 소리가 울려 퍼진다. 모든 적 기절 2초 + 화기 피해 380, 8초간 모든 유산 공격 속도 +25%."},{id:"dangun_eulji",pair:["eulji","dangun"],name:"고조선의 후예",desc:"하늘 문이 열려 모든 적에게 번개. 신성 피해 420 + 적장은 받는 피해 +40% (8초)."},{id:"ahn_yi",pair:["yi","ahn"],name:"필사즉생의 총성",desc:"가장 강한 적 6명에게 거북선 포격과 저격이 겹친다. 대상마다 화기 피해 700."},{id:"dangun_sejong",pair:["sejong","dangun"],name:"홍익의 나라",desc:"모든 영웅 완전 회복·8초 무적, 모든 플레이어 군자금 +200."}],Qy={id:"generic",name:"호국 합격",desc:"모든 적에게 신성 피해(260 + 영웅 레벨 합×18)와 기절. 두 영웅 주변 5칸은 1.5배 피해·기절 1.5초. 모두 군자금 +60."};function Jh(n,e){for(let t of Jy)if(t.pair[0]===n&&t.pair[1]===e||t.pair[0]===e&&t.pair[1]===n)return t;return Qy}var ev=.35;var Yc=n=>ti[n.stageId],up=n=>Hc[n.difficulty],yn=n=>pi(n.stageId);function pr(n){return n.nextId++}function pe(n,e,t={}){t.k=e,n.events.push(t)}var Ci=(n,e,t)=>n<e?e:n>t?t:n,Ri=(n,e)=>(n.x-e.x)**2+(n.y-e.y)**2;function _n(n,e){if(!n||n.left)return;n.goldFrac+=e;let t=Math.floor(n.goldFrac);t>0&&(n.gold+=t,n.goldFrac-=t,n.stats.goldEarned+=t)}function Io(n,e,t=-1){if(t>=0)return _n(n.players[t],e);let i=n.players.filter(r=>!r.left),s=i.length>1?Co.goldShare:1;for(let r of i)_n(r,e*s)}function Qh(n){return Ci(n,0,.9)}function On(n,e,t,i,s){if(e.hp<=0||t<=0)return 0;let r=e.hp,o=n.buffs.armorZeroT>0,a=o?0:e.armor,c=o?0:e.resist,l=1;i==="phys"?l=1-Qh(a-e.shred):i==="fire"?l=1-Qh((a-e.shred)*.5):i==="holy"&&(l=1-Qh(c-e.rshred));let h=(e.vulnT>0?e.vulnA:0)+(n.buffs.vulnT>0?n.buffs.vuln:0),u=t*l*(1+h);if(e.shield>0){let f=Math.min(e.shield,u);e.shield-=f,u-=f}if(e.hp-=u,e.hitT=n.time,s){let f=n.players[s.p];if(f&&(f.stats.damage+=u),s.ref&&s.kind==="tower"&&(s.ref.dmgDone+=u),n.damageLedger){let d=s.kind==="hero"?`hero:${s.ref?.heroId}`:s.kind==="tower"?`tower:${s.ref?.type}`:s.kind==="skill"?`skill:${s.skillId}`:s.kind;n.damageLedger[d]=(n.damageLedger[d]??0)+Math.min(r,Math.max(0,u))}}return e.hp<=0&&tv(n,e,s),u}function eu(n,e,t,i,s,r,o,a={}){let c=0,l=i*i;for(let h of n.enemies){if(h.hp<=0)continue;let u=(h.x-e)**2+(h.y-t)**2;if(u>l)continue;let f=1-.4*Math.sqrt(u/l);a.stun&&Ii(h,a.stun),a.slow&&Po(h,a.slow,a.slowDur||1.5),a.vuln&&Do(h,a.vuln,a.vulnDur||2),a.push&&dp(n,h,a.push),On(n,h,s*(a.noFalloff?1:f),r,o),c++}return c}function Po(n,e,t){e>n.slowA||n.slowT<=0?(n.slowA=e,n.slowT=t):e===n.slowA&&(n.slowT=Math.max(n.slowT,t))}function Ii(n,e){let t=n.tier===4?e*ev:e;n.stunT=Math.max(n.stunT,t)}function Do(n,e,t){(e>=n.vulnA||n.vulnT<=0)&&(n.vulnA=e,n.vulnT=Math.max(n.vulnT,t))}function dp(n,e,t){e.tier===4&&(t*=.4),e.d=Math.max(0,e.d-t),e.blockedBy&&nu(n,e),fp(n,e)}function fp(n,e){let t=yn(n).paths[e.path],i=Ei(t,e.d);e.x=i.x-i.dy*e.off,e.y=i.y+i.dx*e.off,e.dx=i.dx,e.dy=i.dy}function pp(n,e,t,i,s=-.4,r={}){let o=fi[e],a=Yc(n),c=up(n),l=r.tactic?hr[r.tactic]:null,h=(o.fixedHp?1:o.tier===4?a.bossHp??a.hpBase:n.hpBase??a.hpBase)*(o.tier===4?1:1+a.hpGrowth*(i-1))*c.hp*(n.coop?n.coopHp:1)*(l&&l.hpMult?l.hpMult:1),u=o.tier===4&&!o.fixedHp&&i<a.waves.length?.35+.6*(i/a.waves.length):1,f=o.hp*h*u,d={id:pr(n),type:e,tier:o.tier,path:t,d:s,off:Xh(n,-.2,.2),x:0,y:0,dx:1,dy:0,hp:f,maxHp:f,speed:o.speed*c.speed*(l&&l.speedMult?l.speedMult:1),armor:o.armor+(l&&l.armorAdd?l.armorAdd:0),resist:o.resist+(l&&l.resistAdd?l.resistAdd:0),lives:o.lives,atk:o.atk*(1+.05*(i-1)),wave:i,stealth:!!o.stealth,revealed:!o.stealth,unblockable:!!o.unblockable,slowT:0,slowA:0,stunT:0,vulnT:0,vulnA:0,burnT:0,burnDps:0,shred:0,rshred:0,auraSlow:0,haste:0,hasteT:0,hasteA:0,blockedBy:0,atkCd:1,abT:3,shield:0,enraged:!1,phase:0,sutraOwner:0,shotMult:l&&l.teppoDmg?l.teppoDmg:1,bountyMult:r.bountyMult??1,hitT:-9,chargeT:0};if(o.boss){let x=o.boss;d.ab={},x.summon&&(d.ab.summon=x.summon.cd),x.charge&&(d.ab.charge=x.charge.cd*.6),x.shield&&(d.ab.shield=x.shield.cd,d.shield=d.maxHp*x.shield.pct),x.rally&&(d.ab.rally=x.rally.cd*.7)}o.shoot&&(d.abT=Xh(n,.5,o.shoot.cd)),o.heal&&(d.abT=o.heal.cd),fp(n,d),n.enemies.push(d);let p=n.waveStats[i];return p&&p.remaining++,o.tier===4&&pe(n,"boss",{type:e,id:d.id}),d}function tv(n,e,t){if(e.dead)return;e.hp=0,e.dead=!0;let i=fi[e.type],s=up(n),r=i.bounty*s.bounty*(1+.04*(e.wave-1))*n.goldMult*e.bountyMult;Io(n,r),e.sutraOwner&&_n(n.players[e.sutraOwner-1],3),e.blockedBy&&nu(n,e);let o=t&&t.kind==="hero";if(t){let a=n.players[t.p];a&&(a.stats.kills++,i.tier>=2&&a.stats.elites++,i.tier===4&&a.stats.bossKills++,o&&a.stats.heroKills++),t.ref&&t.kind==="tower"&&t.ref.kills++}for(let a of n.heroes){if(a.dead)continue;let c=o&&t.ref===a;(c||Ri(a,e)<=16)&&nv(n,a,i.bounty*(c?1.5:1))}if(mr(n,o?1.5:.45),i.spawnOnDeath){let a=i.spawnOnDeath;for(let c=0;c<a.n;c++)pp(n,a.type,e.path,e.wave,Math.max(0,e.d-c*.35),{bountyMult:.5})}pe(n,"death",{x:e.x,y:e.y,type:e.type,tier:e.tier,id:e.id,f:e.dx<-.1?-1:1,g:Math.round(r)}),i.tier===4&&(pe(n,"announce",{text:`${i.name} 격퇴!`,sub:i.title,color:"#f0c75e"}),pe(n,"sfx",{n:"victoryGong"})),mp(n,e.wave)}function mp(n,e){let t=n.waveStats[e];t&&(t.remaining--,gp(n,e))}function gp(n,e){let t=n.waveStats[e];if(!(!t||t.resolved||t.remaining>0||t.queued>0)&&(t.resolved=!0,t.leaks===0)){for(let i of n.players)i.stats.perfectWaves++;if(t.tactic){let i=hr[t.tactic];Io(n,i.bonus);for(let s of n.players)s.stats.tacticsBroken++;pe(n,"announce",{text:"전술 파훼!",sub:`${i.name} 격파 · 군자금 +${i.bonus}`,color:"#7fd1ff"}),pe(n,"sfx",{n:"tactic"})}}}function mr(n,e){let t=n.resonance,i=t.gauge;t.gauge=Math.min(100,t.gauge+e),i<100&&t.gauge>=100&&(pe(n,"resonanceFull"),pe(n,"sfx",{n:"resonance"}))}function tu(n){let e=xn[n.heroId],t=ip(n.lv,n.metaLv),i=n.maxHp?n.hp/n.maxHp:1;n.maxHp=e.hp*t.hp,n.hp=n.maxHp*i,n.dmg=e.dmg*t.dmg,n.skillMult=t.skill}function nv(n,e,t){e.xp+=t;let i=sp(e.xp);i>e.lv&&(e.lv=i,tu(e),e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.3),pe(n,"levelUp",{x:e.x,y:e.y,id:e.id,lv:i}))}function Lo(n){return n.skillMult*(n.buffs.dmgT>0?2:1)}function Zc(n,e){for(let i of n.enemies)i.blockedBy===e&&(i.blockedBy=0);let t=iu(n,e);t&&(t.engaged=[])}function nu(n,e){let t=iu(n,e.blockedBy);t&&(t.engaged=t.engaged.filter(i=>i!==e.id)),e.blockedBy=0}function iu(n,e){if(!e)return null;for(let t of n.heroes)if(t.id===e)return t;for(let t of n.summons)if(t.id===e)return t;return null}function $c(n,e){let t={id:pr(n),kind:"militia",owner:0,x:0,y:0,px:0,py:0,hp:200,maxHp:200,dmg:14,cd:0,block:1,engaged:[],life:12,...e};return t.px=t.x,t.py=t.y,n.summons.push(t),t}function xp(n,e){let t={id:pr(n),t:0,...e};return n.projectiles.push(t),t}function En(n,e,t,i,s,r,o,a={}){return xp(n,{kind:e,mode:"drop",x:t,y:i,tx:t,ty:i,dur:s,hit:r,src:o,...a})}function gr(n,e,t,i){let s=cr(n)*Math.PI*2,r=Math.sqrt(cr(n))*i;return{x:e+Math.cos(s)*r,y:t+Math.sin(s)*r}}var vp=1.25,Mp=(n,e)=>n.heroId==="ahn"&&e.tier===4?vp:1;function sv(n){let e=null;for(let t of n.enemies)t.hp<=0||(!e||(t.tier===4)>(e.tier===4)||t.tier===4==(e.tier===4)&&t.hp>e.hp)&&(e=t);return e}var rv=5;function Qi(n,e,t,i=rv){let s=e-n.x,r=t-n.y,o=Math.hypot(s,r);return o<=i?{x:e,y:t}:{x:n.x+s/o*i,y:n.y+r/o*i}}function bp(n){return{p:n.owner,kind:"hero",ref:n}}function Bn(n,e,t){return(e+t*(n.lv-1))*Lo(n)}function su(n,e,t,i,s,r){let o=yn(n),a=dr(o,e,t);if(!a)return;let c=o.paths[a.path];for(let l=0;l<i;l++){let h=(l-(i-1)/2)*.55,u=Ei(c,Ci(a.d+h,0,c.total)),f=(l%2?1:-1)*.18;$c(n,{...s,owner:r,x:u.x-u.dy*f,y:u.y+u.dx*f})}}function Sp(n,e,t,i){let s=xn[e.heroId],r=bp(e),o=Lo(e);switch(e.heroId){case"yi":{let a=Math.atan2(i-e.y,t-e.x),c=Bn(e,s.skill.base,s.skill.perLv);for(let l of n.enemies){if(l.hp<=0||Ri(e,l)>lr.range*lr.range)continue;let u=Math.atan2(l.y-e.y,l.x-e.x)-a;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;Math.abs(u)<=lr.halfAngle&&On(n,l,c,"phys",r)}e.facing=Math.cos(a)>=0?1:-1,pe(n,"cone",{x:e.x,y:e.y,a,r:lr.range,w:lr.halfAngle}),pe(n,"sfx",{n:"volley"});break}case"sejong":{let a=Qi(e,t,i),c=Bn(e,s.skill.base,s.skill.perLv);En(n,"hangul",a.x,a.y,.55,{r:1.8,dmg:c,type:"holy",stun:1.2},r),pe(n,"hangul",{x:a.x,y:a.y,r:1.8}),pe(n,"sfx",{n:"chime"});break}case"eulji":{let a=Qi(e,t,i);n.zones.push({id:n.nextId++,kind:"fire",x:a.x,y:a.y,r:1.5,t:5,max:5,dps:Bn(e,s.skill.base,s.skill.perLv),slow:.2,src:r}),pe(n,"sfx",{n:"fire"});break}case"gang":{let a=Qi(e,t,i,4),c=Bn(e,s.skill.base,s.skill.perLv),l=e.x,h=e.y,u=a.x,f=a.y,d=u-l,p=f-h,x=d*d+p*p||1;for(let m of n.enemies){if(m.hp<=0)continue;let g=Ci(((m.x-l)*d+(m.y-h)*p)/x,0,1),y=l+d*g,v=h+p*g;(m.x-y)**2+(m.y-v)**2<=.8*.8&&(Ii(m,.5),On(n,m,c,"phys",r))}Zc(n,e.id),pe(n,"dash",{x1:l,y1:h,x2:u,y2:f}),e.x=u,e.y=f,e.tx=u,e.ty=f,e.post={x:u,y:f},e.facing=d>=0?1:-1,pe(n,"sfx",{n:"slash"});break}case"gwon":{let a=Qi(e,t,i),c=Bn(e,s.skill.base,s.skill.perLv);for(let l=0;l<6;l++){let h=gr(n,a.x,a.y,1.6);En(n,"stone",h.x,h.y,.35+l*.09,{r:.7,dmg:c,type:"phys",stun:.6},r)}pe(n,"sfx",{n:"throw"});break}case"gwak":{let a=Qi(e,t,i),c=o*(1+.08*(e.lv-1));su(n,a.x,a.y,3,{hp:220*c,maxHp:220*c,dmg:15*c,life:12,kind:"militia"},e.owner),pe(n,"sfx",{n:"horn"});break}case"ahn":{let a=Qi(e,t,i),c=Bn(e,s.skill.base,s.skill.perLv),l=n.enemies.filter(h=>h.hp>0&&(h.x-a.x)**2+(h.y-a.y)**2<=2.2*2.2).sort((h,u)=>Ri(h,a)-Ri(u,a));for(let h=0;h<7&&l.length;h++){let u=l[h%l.length];On(n,u,c*Mp(e,u),"fire",r),pe(n,"shot",{x1:e.x,y1:e.y-.1,x2:u.x,y2:u.y,gun:1,caster:e.id})}e.facing=a.x>=e.x?1:-1,pe(n,"sfx",{n:"gunVolley"});break}case"dangun":{let a=Qi(e,t,i),c=Bn(e,s.skill.base,s.skill.perLv);for(let l=0;l<3;l++){let h=l===0?a:gr(n,a.x,a.y,1.2);En(n,"garlic",h.x,h.y,.45+l*.12,{r:.9,dmg:c,type:"holy",slow:.35,slowDur:3},r,{sx:e.x,sy:e.y-.4})}e.facing=a.x>=e.x?1:-1,pe(n,"sfx",{n:"throw"});break}}mr(n,4)}function wp(n,e,t,i){let s=xn[e.heroId],r=bp(e);switch(e.heroId){case"yi":{let o=yn(n),a=dr(o,t,i);Tp(n,a?a.path:0,Bn(e,s.ult.base,s.ult.perLv),r);break}case"sejong":{n.buffs.slowT=6,n.buffs.slow=.5,n.buffs.asT=Math.max(n.buffs.asT,6),n.buffs.as=Math.max(n.buffs.as,.3);for(let o of n.towers)o.cd=0;pe(n,"announce",{text:"자격루",sub:"시간이 느려진다",color:"#7fd1ff"}),pe(n,"clock"),pe(n,"sfx",{n:"bell"});break}case"eulji":{let o=Bn(e,s.ult.base,s.ult.perLv);eu(n,t,i,3,o,"holy",r,{push:3,slow:.4,slowDur:3,noFalloff:!0}),pe(n,"flood",{x:t,y:i,r:3}),pe(n,"sfx",{n:"splash"});break}case"gang":{let o=Bn(e,s.ult.base,s.ult.perLv);n.enemies.filter(c=>c.hp>0).sort((c,l)=>l.hp-c.hp).slice(0,8).forEach((c,l)=>{En(n,"meteor",c.x,c.y,.5+l*.12,{r:.8,dmg:o,type:"holy",follow:c.id},r)}),pe(n,"sfx",{n:"meteor"});break}case"gwon":{let o=Qi(e,t,i),a=yn(n),c=dr(a,o.x,o.y);c&&$c(n,{kind:"wall",owner:e.owner,x:c.x,y:c.y,hp:2500*Lo(e),maxHp:2500*Lo(e),dmg:0,block:99,life:6}),e.buffs.drT=6,pe(n,"sfx",{n:"build"});break}case"gwak":{e.buffs.gwakT=8,pe(n,"announce",{text:"홍의 질풍",sub:"하늘이 내린 붉은 옷의 장군",color:"#ff7b6b"}),pe(n,"sfx",{n:"horn"});break}case"ahn":{let o=sv(n);o&&(Ii(o,1.5),Do(o,.3,6),On(n,o,Bn(e,s.ult.base,s.ult.perLv)*Mp(e,o),"fire",r),pe(n,"snipe",{x1:e.x,y1:e.y-.1,x2:o.x,y2:o.y,caster:e.id}),e.facing=o.x>=e.x?1:-1),pe(n,"announce",{text:"하얼빈의 총성",sub:"대한 독립 만세!",color:"#f0c75e"}),pe(n,"sfx",{n:"snipe"});break}case"dangun":{let o=Bn(e,s.ult.base,s.ult.perLv),a=n.enemies.filter(c=>c.hp>0).sort((c,l)=>(l.tier===4)-(c.tier===4)||l.hp-c.hp);for(let c=0;c<12&&a.length;c++){let l=a[c%a.length];En(n,"thunder",l.x,l.y,.3+c*.13,{r:.7,dmg:o,type:"holy",stun:.8},r,{follow:l.id})}pe(n,"announce",{text:"천부인 번개",sub:"하늘이 열린다",color:"#bfe6ff"}),pe(n,"sfx",{n:"thunder"});break}}mr(n,8)}function Tp(n,e,t,i){let s=yn(n).paths[e];n.movers.push({id:n.nextId++,kind:"turtle",path:e,d:s.total,speed:7,dmg:t,src:i,hit:[],x:0,y:0,dx:0,dy:0}),pe(n,"announce",{text:"거북선 출격!",color:"#f0c75e"}),pe(n,"sfx",{n:"drum"})}function Ap(n,e,t,i,s){let r=xs[t.id],o=op(t.lv),a={p:e.idx,kind:"skill",skillId:t.id};switch(t.id){case"singijeon":for(let c=0;c<r.n;c++){let l=gr(n,i,s,r.radius);En(n,"rocket",l.x,l.y,.25+c*.07,{r:.55,dmg:r.dmg*o,type:"fire"},a,{sx:i-3,sy:s-6})}pe(n,"sfx",{n:"rockets"});break;case"bongsu":n.buffs.revealT=r.dur,n.buffs.vulnT=r.dur,n.buffs.vuln=r.vuln*o,pe(n,"announce",{text:"봉수 경보!",sub:"은신한 적이 모두 드러난다",color:"#ffb35c"}),pe(n,"sfx",{n:"horn"});break;case"uibyeong":su(n,i,s,r.n,{hp:r.hp*o,maxHp:r.hp*o,dmg:r.dmg*o,life:r.life,kind:"militia"},e.idx),pe(n,"sfx",{n:"horn"});break;case"bigyeok":En(n,"bomb",i,s,r.delay,{r:r.radius,dmg:r.dmg*o,type:"fire",stun:r.stun},a),pe(n,"sfx",{n:"fuse"});break;case"gunryang":{_n(e,r.gold*o);for(let c of n.players)c!==e&&_n(c,r.gold*o*.5);pe(n,"gold",{p:e.idx,amount:Math.round(r.gold*o)}),pe(n,"sfx",{n:"coin"});break}case"cheonja":{let c=null;for(let u of n.enemies)u.hp<=0||(u.x-i)**2+(u.y-s)**2>r.radius*r.radius||(!c||u.hp>c.hp)&&(c=u);let l=c?c.x:i,h=c?c.y:s;En(n,"bigshell",l,h,.45,{r:.5,dmg:r.dmg*o,type:"fire",single:c?c.id:0},a,{sx:l-8,sy:h-4,follow:c?c.id:0}),pe(n,"sfx",{n:"cannonBig"});break}case"donguibogam":for(let c of n.heroes)c.dead&&(c.dead=!1,c.respawn=0),c.hp=c.maxHp,pe(n,"heal",{x:c.x,y:c.y});pe(n,"announce",{text:"동의보감",sub:"모든 영웅 회복",color:"#8fe3a0"}),pe(n,"sfx",{n:"heal"});break;case"hanpa":n.zones.push({id:n.nextId++,kind:"ice",x:i,y:s,r:r.radius,t:r.dur,max:r.dur,dps:r.dps*o,slow:r.slow,src:a}),pe(n,"sfx",{n:"ice"});break}e.stats.skillsUsed++,mr(n,3)}function Ep(n){let e=n.heroes.filter(s=>!s.dead);if(n.heroes.length<2)return{ok:!1,why:"영웅이 둘 필요합니다"};if(n.resonance.gauge<100)return{ok:!1,why:"공명 게이지 부족"};if(e.length<2)return{ok:!1,why:"두 영웅이 모두 살아 있어야 합니다"};let[t,i]=n.heroes;return Ri(t,i)>5*5?{ok:!1,why:`두 영웅이 ${5}칸 이내에 있어야 합니다`}:{ok:!0}}function Cp(n,e){let t=Ep(n);if(!t.ok){pe(n,"toast",{p:e,text:t.why});return}if(n.players.filter(r=>!r.left).length<2){yp(n);return}n.resonance.press[e]=n.time;let s=n.resonance.press[1-e];n.time-s<=2.5?yp(n):pe(n,"comboWait",{p:e,until:n.time+2.5})}function yp(n){let[e,t]=n.heroes,i=Jh(e.heroId,t.heroId);n.resonance.gauge=0,n.resonance.press=[-99,-99];for(let a of n.players)a.stats.combos++;let s={p:0,kind:"combo"},r=e.lv+t.lv,o=()=>n.enemies.filter(a=>a.hp>0);switch(i.id){case"yi_sejong":{n.buffs.dmgT=10,n.buffs.dmg=.6,n.buffs.asT=Math.max(n.buffs.asT,10),n.buffs.as=Math.max(n.buffs.as,.2),yn(n).paths.forEach((c,l)=>Tp(n,l,260+r*15,s));break}case"eulji_gang":for(let a of o())Po(a,.5,4),On(n,a,350+r*12,"holy",s);break;case"gwak_gwon":{yn(n).paths.forEach(c=>{for(let l of[.45,.7]){let h=Ei(c,c.total*l);su(n,h.x,h.y,3,{hp:320,maxHp:320,dmg:26,life:15,kind:"militia"},0)}});for(let c of n.heroes)c.buffs.invulnT=8,c.buffs.dmgT=8;for(let c of o())Po(c,.4,6);break}case"gwon_yi":for(let a of o())Ii(a,1.5),On(n,a,400+r*12,"fire",s);break;case"eulji_sejong":n.buffs.armorZeroT=10;for(let a of n.players)_n(a,150);break;case"gang_yi":{o().sort((c,l)=>l.hp-c.hp).slice(0,12).forEach((c,l)=>En(n,"meteor",c.x,c.y,.4+l*.1,{r:.6,dmg:500+r*15,type:"holy",follow:c.id},s));break}case"ahn_sejong":for(let a of o())Ii(a,2),On(n,a,380+r*12,"fire",s);n.buffs.asT=Math.max(n.buffs.asT,8),n.buffs.as=Math.max(n.buffs.as,.25),pe(n,"announce",{text:"대한 독립 만세!",color:"#f0c75e"});break;case"dangun_eulji":o().forEach((a,c)=>{On(n,a,420+r*12,"holy",s),a.tier===4&&Do(a,.4,8),c<16&&pe(n,"boom",{x:a.x,y:a.y,r:.6,kind:"thunder"})});break;case"ahn_yi":{o().sort((c,l)=>(l.tier===4)-(c.tier===4)||l.hp-c.hp).slice(0,6).forEach((c,l)=>En(n,"bigshell",c.x,c.y,.4+l*.12,{r:.6,dmg:700+r*15,type:"fire",single:c.id},s,{sx:c.x-8,sy:c.y-4,follow:c.id}));break}case"dangun_sejong":for(let a of n.heroes)a.dead&&(a.dead=!1,a.respawn=0),a.hp=a.maxHp,a.buffs.invulnT=8,pe(n,"heal",{x:a.x,y:a.y});for(let a of n.players)_n(a,200);break;default:{let a=260+r*18;for(let c of o()){let l=Ri(c,e)<=25||Ri(c,t)<=25;Ii(c,l?1.5:.6),On(n,c,l?a*1.5:a,"holy",s)}for(let c of n.players)_n(c,60)}}pe(n,"combo",{id:i.id,name:i.name,a:e.heroId,b:t.heroId,x:(e.x+t.x)/2,y:(e.y+t.y)/2}),pe(n,"sfx",{n:"combo"})}var nw=1/60;var hv=30,uv=.05;var dv=[100,500],fv=2;function ou(n){let e=ti[n.stageId],t=Hc[n.difficulty||"normal"],i=n.mode!=="solo",s=pi(e.id),r=(n.seed??12345)>>>0,o={v:1,stageId:e.id,difficulty:n.difficulty||"normal",mode:n.mode||"solo",coop:i,coopHp:Co.hpMult,seed:r,rng:r,tick:0,time:0,nextId:1,speed:1,paused:!1,lives:t.lives,maxLives:t.lives,goldMult:1,players:[],heroes:[],towers:[],enemies:[],projectiles:[],summons:[],zones:[],movers:[],wave:{n:0,total:e.waves.length,phase:"prep",timer:hv,queue:[],tactic:null,nextTactic:null,alt:0},waveStats:{},resonance:{gauge:0,press:[-99,-99]},buffs:{dmgT:0,dmg:0,asT:0,as:0,slowT:0,slow:0,revealT:0,vulnT:0,vuln:0,armorZeroT:0},events:[],cmds:[],result:null};n.hpBase&&(o.hpBase=n.hpBase),o.courier=yv(r,e,s,n.courier);let a=i?Math.round(e.startGold*Co.startGoldShare):e.startGold;n.players.forEach((l,h)=>{o.players.push({idx:h,name:l.name||`P${h+1}`,gold:a,goldFrac:0,left:!1,towers:l.towers||Object.keys(Ai),towerLv:l.towerLv||{},skills:(l.skills||[]).map(u=>{let f=l.skillLv&&l.skillLv[u]||0;return{id:u,lv:f,cd:xs[u].cd*.35,max:xs[u].cd*ap(f)}}),items:Object.fromEntries(Object.entries(l.items||{}).filter(([u,f])=>$h[u]&&f>0).map(([u,f])=>[u,Math.min(2,f|0)])),itemCd:0,stats:{kills:0,elites:0,bossKills:0,heroKills:0,builds:0,branches:0,skillsUsed:0,combos:0,earlyCalls:0,perfectWaves:0,tacticsBroken:0,damage:0,goldEarned:0,itemsUsed:0}})});let c=0;return n.players.forEach((l,h)=>{for(let u of l.heroes){let f=s.paths[Math.min(c,s.paths.length-1)],d=Ei(f,Math.max(1,f.total*(.62-c*.12))),p={id:pr(o),owner:h,slot:c,heroId:u,skin:l.skins&&l.skins[u]||null,metaLv:l.heroLv&&l.heroLv[u]||0,lv:1,xp:0,x:d.x+.6,y:d.y-.6,tx:0,ty:0,post:null,facing:1,hp:0,maxHp:0,dmg:0,skillMult:1,cd:0,skillCd:2,ultCd:xn[u].ult.cd*.5,dead:!1,respawn:0,engaged:[],atkCount:0,anim:0,moving:!1,hurtT:-9,buffs:{invulnT:0,dmgT:0,drT:0,gwakT:0}};p.tx=p.x,p.ty=p.y,p.post={x:p.x,y:p.y},tu(p),p.hp=p.maxHp,o.heroes.push(p),c++}}),o.heroes.some(l=>l.heroId==="sejong")&&(o.goldMult=1.1),o}function ru(n,e,t){return t&&(t.owner===e||n.players[t.owner].left)}function au(n,e){let t=n.players[e.p];if(!(!t||t.left))switch(e.t){case"build":return pv(n,t,e);case"upgrade":return mv(n,t,e);case"sell":return xv(n,t,e);case"target":{let i=n.towers.find(s=>s.id===e.id);i&&["first","last","strong","close"].includes(e.mode)&&(i.mode=e.mode);return}case"move":{let i=n.heroes[e.h];if(!ru(n,e.p,i)||i.dead)return;i.tx=Ci(e.x,.3,yn(n).w-.3),i.ty=Ci(e.y,.3,yn(n).h-.3),i.post={x:i.tx,y:i.ty};return}case"heroSkill":{let i=n.heroes[e.h];if(!ru(n,e.p,i)||i.dead||i.skillCd>0)return;i.skillCd=xn[i.heroId].skill.cd,i.anim=.35,Sp(n,i,e.x,e.y);return}case"heroUlt":{let i=n.heroes[e.h];if(!ru(n,e.p,i)||i.dead||i.ultCd>0)return;i.ultCd=xn[i.heroId].ult.cd,i.anim=.5,wp(n,i,e.x,e.y);return}case"skill":{let i=t.skills[e.slot];if(!i||i.cd>0)return;i.cd=i.max,Ap(n,t,i,e.x,e.y);return}case"combo":return Cp(n,e.p);case"item":return gv(n,t,e);case"nextWave":return _v(n,t);case"sendGold":{let i=n.players[1-e.p],s=Math.floor(Math.min(e.amount,t.gold));if(!i||i.left||s<=0)return;t.gold-=s,i.gold+=s,pe(n,"toast",{p:-1,text:`${t.name} → ${i.name} 군자금 ${s} 지원`}),pe(n,"sfx",{n:"coin"});return}case"ping":pe(n,"ping",{p:e.p,x:e.x,y:e.y}),pe(n,"sfx",{n:"ping"});return;case"leave":{let i=n.players.find(s=>s!==t&&!s.left);if(t.left=!0,i){i.gold+=t.gold,t.gold=0;for(let s of n.towers)s.owner===t.idx&&(s.owner=i.idx);for(let s of n.heroes)s.owner===t.idx&&(s.owner=i.idx);pe(n,"toast",{p:-1,text:`${t.name} 이탈 — ${i.name}이(가) 지휘를 넘겨받습니다`})}return}}}function pv(n,e,t){let i=Ai[t.tower];if(!i||!e.towers.includes(t.tower))return;let s=yn(n);if(hp(s,t.x,t.y)!==Ro||n.towers.some(a=>a.x===t.x&&a.y===t.y))return;let r=qc(i.levels[0].cost,e.towerLv[t.tower]||0);if(e.gold<r)return pe(n,"toast",{p:e.idx,text:"군자금이 부족합니다"});e.gold-=r;let o={id:pr(n),type:t.tower,x:t.x,y:t.y,cx:t.x+.5,cy:t.y+.5,level:1,branch:null,owner:e.idx,cd:.4,angle:-Math.PI/2,spent:[0,0],kills:0,dmgDone:0,shots:0,ramp:0,beam:[],disabledT:0,flash:0,mode:i.kind==="beam"||i.kind==="pagoda"?"strong":"first",syn:0,synIds:[],bDmg:0,bAs:0,bRange:0,metaLv:e.towerLv[t.tower]||0,built:n.time};if(i.kind==="barracks"){let a=dr(s,o.cx,o.cy);o.rally=a?{path:a.path,d:a.d,dist:a.dist}:null,o.respawnT=0}o.spent[e.idx]=r,n.towers.push(o),e.stats.builds++,cu(n),pe(n,"build",{x:o.cx,y:o.cy,type:o.type,p:e.idx}),pe(n,"sfx",{n:"build"})}function mv(n,e,t){let i=n.towers.find(a=>a.id===t.id);if(!i||i.branch)return;let s=Ai[i.type],r,o=e.towerLv[i.type]||0;if(i.level<s.levels.length){if(r=qc(s.levels[i.level].cost,o),e.gold<r)return pe(n,"toast",{p:e.idx,text:"군자금이 부족합니다"});i.level++}else{if(!s.branches[t.branch])return;if(r=qc(s.branches[t.branch].cost,o),e.gold<r)return pe(n,"toast",{p:e.idx,text:"군자금이 부족합니다"});i.branch=t.branch,s.branches[t.branch].target&&(i.mode=s.branches[t.branch].target),e.stats.branches++}e.gold-=r,i.spent[e.idx]+=r,s.kind==="barracks"&&(i.respawnT=0),cu(n),pe(n,"upgrade",{x:i.cx,y:i.cy,type:i.type,branch:i.branch,level:i.level}),pe(n,"sfx",{n:"upgrade"})}function gv(n,e,t){let i=$h[t.id];if(!i||!e.items||!(e.items[t.id]>0)||e.itemCd>0||n.result)return;e.items[t.id]--,e.itemCd=3,e.stats.itemsUsed++;let s={p:e.idx,kind:"skill"},r=yn(n);switch(t.id){case"insam":n.lives+=i.lives,n.maxLives=Math.max(n.maxLives,n.lives),pe(n,"announce",{text:"산삼",sub:`민심 +${i.lives}`,color:"#8fe3a0"}),pe(n,"heal",{x:r.base.x,y:r.base.y}),pe(n,"sfx",{n:"heal"});break;case"chest":_n(e,i.gold),pe(n,"toast",{p:e.idx,text:`${i.name}: 군자금 +${i.gold}냥`}),pe(n,"sfx",{n:"coin"});break;case"hwacha":{let o=Ci(+t.x||0,0,r.w),a=Ci(+t.y||0,0,r.h);for(let c=0;c<i.n;c++){let l=gr(n,o,a,i.radius);En(n,"rocket",l.x,l.y,.3+c*.045,{r:.6,dmg:i.dmg,type:"fire",stun:i.stun},s,{sx:o-4,sy:a-7})}pe(n,"sfx",{n:"rockets"});break}case"bujeok":{let o=[];for(let a of n.enemies)a.hp<=0||(Ii(a,i.freeze),a.iceT=a.stunT,o.push([Math.round(a.x*10)/10,Math.round(a.y*10)/10]));pe(n,"freeze",{pts:o}),pe(n,"announce",{text:i.name,sub:"모든 왜군이 얼어붙었다",color:"#bfe6ff"}),pe(n,"sfx",{n:"ice"});break}}}function xv(n,e,t){let i=n.towers.findIndex(r=>r.id===t.id);if(i<0)return;let s=n.towers[i];if(s.owner!==e.idx)return pe(n,"toast",{p:e.idx,text:"자기 유산만 철거할 수 있습니다"});s.spent.forEach((r,o)=>_n(n.players[o],r*ep)),n.towers.splice(i,1);for(let r of n.summons)r.tower===s.id&&(r.hp=0,Zc(n,r.id));cu(n),pe(n,"sell",{x:s.cx,y:s.cy}),pe(n,"sfx",{n:"coin"})}function _v(n,e){let t=n.wave;if(!(t.phase!=="prep"||t.n>=t.total)){if(t.timer>0&&t.n>0){let i=Math.floor(t.timer*fv);i>0&&(Io(n,i),pe(n,"toast",{p:-1,text:`조기 출정 보너스 +${i}`})),e.stats.earlyCalls++}vv(n)}}function cu(n){for(let e of n.towers){let t=Ai[e.type].cat,i=new Map;for(let s of n.towers)s===e||s.type===e.type||Ai[s.type].cat!==t||Math.max(Math.abs(s.x-e.x),Math.abs(s.y-e.y))>tp||i.has(s.type)||i.set(s.type,s.id);e.syn=i.size,e.synIds=[...i.values()]}}function Rp(n,e){let t=Yc(n).waves[e-1]||"";return qh(t).some(i=>fi[i.type]&&fi[i.type].tier===4)}function yv(n,e,t,i){let s=ei((n^5352222)>>>0),r=s();if(i===!1||i!==!0&&r>=uv)return null;let o=e.waves.length,[a,c]=dv;return{wave:2+Math.floor(s()*Math.max(1,o-3)),delay:3+s()*8,path:Math.floor(s()*t.paths.length),gold:a+Math.floor(s()*((c-a)/10+1))*10,at:-1,sent:!1,done:!1}}function vv(n){let e=n.wave,t=++e.n;n.courier&&n.courier.at<0&&t>=n.courier.wave&&(n.courier.at=n.time+n.courier.delay);let s=yn(n).paths.length,r=e.nextTactic;e.tactic=r,e.nextTactic=null;let o=qh(Yc(n).waves[t-1]);if(r&&hr[r].add)for(let c of hr[r].add)o.push({type:c.type,n:c.n,gap:c.gap,delay:c.delay??2,path:"a",tactic:!0});let a=0;for(let c of o)for(let l=0;l<c.n;l++){let h=c.path==="a"?e.alt++%s:Math.min(c.path,s-1);e.queue.push({at:n.time+c.delay+l*c.gap,type:c.type,path:h,wave:t}),a++}e.queue.sort((c,l)=>c.at-l.at),n.waveStats[t]={remaining:0,queued:a,leaks:0,tactic:r,resolved:!1},e.phase="spawn",e.timer=0,t>1&&Io(n,20+4*t);for(let c of n.towers){if(c.type!=="gyeongbok")continue;let l=Yh(c.type,c.level,c.branch),h=n.players[c.owner];_n(h,l.income*(1+Zh*c.metaLv)),l.interest&&_n(h,Math.min(l.interestCap,Math.floor(h.gold*l.interest))),pe(n,"income",{x:c.cx,y:c.cy,amount:l.income})}pe(n,"wave",{n:t,tactic:r,boss:Rp(n,t)}),pe(n,"sfx",{n:Rp(n,t)?"bossWave":"wave"})}function Ip(n={}){let e=Array.isArray(n.skillIds)?n.skillIds:Object.hasOwn(n,"skillId")?[n.skillId]:["singijeon","hanpa"],t=[...new Set(e.filter(i=>Object.hasOwn(xs,i)))].slice(0,2);return t.length?t:["singijeon"]}var Kc="winter3d",Lp=["sungnyemun","hwaseong"];var Pp=Qf,Mv={id:Kc,name:"설야의 산성",base:"산성 성문",season:"winter",chapter:0,desc:"눈 덮인 산성의 길목을 지켜라.",date:"겨울 전장 · 3D 체험",startGold:420,hpBase:.95,hpGrowth:.08,bossHp:1,unlockTowers:[],grid:["TTT...TT....MMM...TTTTTT","T.............M.......TT","T.HH....................","..HH....................","T........R..............","T.......................","........................","...R...............R....","........................","........................","T..........R........T...","T.R......T........HH....","TT......TTT.......HH...T","TTT....TTTT....MMMM..TTT"],paths:[[[-1,9],[6,9],[6,6],[15,6],[15,3],[22,3]]],waves:["ash*9@1.1","ash*14@0.85","ash*12@0.7, sam*2@3+5","ash*16@0.65, sam*3@3+6","sam*5@2.8, ash*18@0.65+3","ash*24@0.55, sam*7@2.3+5"]};ti[Kc]=Mv;function bv(n=20261009,e={}){let t=ou({stageId:Kc,difficulty:"normal",mode:"solo",seed:n,courier:!1,players:[{name:"수호자",heroes:["yi"],skills:["singijeon"],towers:Lp,skins:e}]});for(let[i,s,r]of[["sungnyemun",8,7],["hwaseong",16,4]])au(t,{t:"build",p:0,tower:i,x:s,y:r});return t.wave.timer=60,t.events.length=0,t}function Dp(n,e,t){let i=pi(n.stageId);return Number.isInteger(e)&&Number.isInteger(t)&&e>=0&&t>=0&&e<i.w&&t<i.h&&i.grid[t*i.w+e]===Ro&&!n.towers.some(s=>s.x===e&&s.y===t)}function Sv(n){let e=Math.max(0,Wc.findIndex(t=>t.id===n));return{hero:Math.min(10,Math.round(e*.45)),skill:Math.min(5,Math.round(e*.22)),tower:Math.min(30,Math.round(e*1.3))}}function Np(n={}){let{stageId:e="s1",heroIds:t=["yi","gwon"],support:i=!0,seed:s=20261010}=n,r=Ip(n),o=Object.fromEntries(Object.entries(n.skins??{}).filter(([d,p])=>Xc(d,p)));if(e===Kc&&t.length===1&&t[0]==="yi"&&r.length===1&&r[0]==="singijeon")return bv(s,o);if(!ti[e])throw new Error(`Unknown battlefield: ${e}`);let a=[...new Set(t)].filter(d=>xn[d]).slice(0,2);a.length||a.push("yi");let c=i?Sv(e):{hero:0,skill:0,tower:0},l=(d,p)=>Object.fromEntries(d.map(x=>[x,p])),h=ou({stageId:e,difficulty:"normal",mode:"solo",seed:s,courier:!1,players:[{name:"수호자",heroes:a,skills:r,towers:Pp,skins:o,heroLv:l(a,c.hero),skillLv:l(r,c.skill),towerLv:l(Pp,c.tower)}]}),u=pi(e),f=[];for(let d=0;d<u.h;d++)for(let p=0;p<u.w;p++)if(Dp(h,p,d)){if(h.heroes.some(m=>Math.hypot(p+.5-m.x,d+.5-m.y)<1.2))continue;let x=1/0;for(let m of u.samples)x=Math.min(x,Math.hypot(p+.5-m.x,d+.5-m.y));x>.85&&x<1.8&&f.push({x:p,y:d,score:x+Math.hypot(p+.5-h.heroes[0].x,d+.5-h.heroes[0].y)*.09})}f.sort((d,p)=>d.score-p.score||d.y-p.y||d.x-p.x);for(let d of Lp){let p=f.find(x=>Dp(h,x.x,x.y)&&!h.towers.some(m=>Math.hypot(m.cx-x.x-.5,m.cy-x.y-.5)<2));p&&au(h,{t:"build",p:0,tower:d,x:p.x,y:p.y})}return h.wave.timer=60,h.events.length=0,h}var lu={spring:{name:"봄",english:"SPRING",caption:"꽃잎이 흩날리는 길목, 다시 피어나는 수호의 맹세.",sky:"#182d3b",fog:"#263d4c",ground:"#a7b9a6",road:"#ddd0b5",shore:"#929b87",water:"#365c72",leaf:["#dfa3b3","#e7c0c8","#b67e97"],grass:"#5d775b",sun:"#ffe2ba",sunPower:2.05,hemi:"#abc9e2",bounce:"#364940",fill:"#829fbf",exposure:1.02,particle:"petal",snow:!1},summer:{name:"여름",english:"SUMMER",caption:"푸른 숲과 강을 따라, 뜨거운 진격을 막아라.",sky:"#162c38",fog:"#254151",ground:"#879e91",road:"#d1c5aa",shore:"#9a9c83",water:"#265975",leaf:["#416d43","#648a4c","#355f48"],grass:"#3e6150",sun:"#ffe8c4",sunPower:2.15,hemi:"#a6c8e6",bounce:"#293e35",fill:"#779cbe",exposure:1.03,particle:"none",snow:!1},autumn:{name:"가을",english:"AUTUMN",caption:"붉게 물든 산하, 황혼의 방어선을 지켜라.",sky:"#292d40",fog:"#3b4056",ground:"#baa58a",road:"#dfc5a4",shore:"#a79a81",water:"#36566f",leaf:["#b65d33","#d79841","#8e4032"],grass:"#8b7953",sun:"#ffd0a0",sunPower:2,hemi:"#b2bdd9",bounce:"#4c3d39",fill:"#899cbf",exposure:1.01,particle:"leaf",snow:!1},winter:{name:"겨울",english:"WINTER",caption:"푸른 눈빛 아래, 마지막 길목을 지켜라.",sky:"#102039",fog:"#1b3151",ground:"#94b0d4",road:"#7896b6",shore:"#6d88a4",water:"#223d60",leaf:["#334e55","#243b48","#526b72"],grass:"#94a7bb",sun:"#aac9ff",sunPower:1.7,hemi:"#88b0ee",bounce:"#263953",fill:"#557bb1",exposure:.96,particle:"snow",snow:!0}},wv={s8:"spring",s9:"summer",s3:"summer",s11:"autumn",s15:"summer",s18:"autumn",s22:"winter",s23:"spring"};function Up(n,e="auto"){let t=lu[e]?e:wv[n.id]??(lu[n.season]?n.season:"summer");return{id:t,...lu[t]}}function Fp(n){let e=1088;for(let t of n)e=e*31+t.charCodeAt(0)>>>0;return e}var fu={stone:"assets/3d/painted/granite-v2.webp",wood:"assets/3d/painted/timber-v1.webp",road:"assets/3d/painted/road-v2.webp",ground:"assets/3d/painted/ground-v3.webp","snow-ground":"assets/3d/painted/snow-ground-v2.webp"},en=512;function Jc(n,e,t){if(!fu[t])return{data:n,width:e,height:e};let i=new Uint8Array(en*en*4);for(let s=0;s<en;s++)for(let r=0;r<en;r++){let o=(Math.floor(s*e/en)*e+Math.floor(r*e/en))*4;i.set(n.subarray(o,o+4),(s*en+r)*4)}return{data:i,width:en,height:en}}var hu=new Map,uu=new Set,Tv=Float32Array.from({length:256},(n,e)=>e<=10?e/255/12.92:((e/255+.055)/1.055)**2.4),Av=n=>Math.round(Math.max(0,Math.min(1,n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055))*255);function Ev(n,e){let t=[e.r,e.g,e.b].map(i=>Uint8Array.from(Tv,s=>Av(s*i)));for(let i=0;i<n.length;i+=4)for(let s=0;s<3;s++)n[i+s]=t[s][n[i+s]];return n}var Bp=0,kp=0,du=0;function zp(n){return uu.add(n),()=>uu.delete(n)}function Op(){typeof document<"u"&&document.documentElement&&(document.documentElement.dataset.paintedReady=Bp,document.documentElement.dataset.paintedPending=du,document.documentElement.dataset.paintedFailed=kp);for(let n of uu)n()}function Cv(n){return hu.has(n)||hu.set(n,new Promise((e,t)=>{let i=new URL(fu[n],new URL("../../",import.meta.url)).href;new lo().load(i,s=>{try{let r=document.createElement("canvas");r.width=r.height=en;let o=r.getContext("2d");o.drawImage(s,0,0,en,en),e({width:en,height:en,data:o.getImageData(0,0,en,en).data})}catch(r){t(r)}},void 0,t)})),hu.get(n)}function Qc(n,e,t=null){return!fu[e]||typeof document>"u"||typeof document.createElementNS!="function"||(n.userData.paintedSurface=e,du++,Op(),Cv(e).then(i=>{if(n.image.width!==i.width||n.image.height!==i.height)throw new Error("Albedo placeholder dimensions must stay fixed");let s=new Uint8Array(i.data);t&&Ev(s,t),n.image={width:i.width,height:i.height,data:s},n.colorSpace=Pt,n.needsUpdate=!0,Bp++,n.userData.paintedLoaded=!0}).catch(i=>{kp++,console.warn(`Painted surface fallback: ${e}`,i.message)}).finally(()=>{du--,Op()})),n}var pu=new Map,mu=n=>n-Math.floor(n),xr=(n,e)=>mu(Math.sin(n*127.1+e*311.7)*43758.5453);function _s(n,e){let t=Math.floor(n),i=Math.floor(e),s=mu(n),r=mu(e),o=s*s*(3-2*s),a=r*r*(3-2*r);return lt.lerp(lt.lerp(xr(t,i),xr(t+1,i),o),lt.lerp(xr(t,i+1),xr(t+1,i+1),o),a)}var mi=_s;function Rv(n){if(pu.has(n))return pu.get(n);let e=128,t=new Uint8Array(e*e*4),i=new Uint8Array(t.length),s=new Uint8Array(t.length);for(let a=0;a<e;a++)for(let c=0;c<e;c++){let l=c/e,h=a/e,u=xr(c,a),f=mi(l*7,h*7),d=.91+u*.09,p=.5+(u-.5)*.15,x=255;if(n==="wood"){let _=Math.sin(l*150+mi(l*5,h*8)*11+Math.sin(h*13)*1.7);d=.72+_*.12+f*.16+u*.08,p=.5+_*.14+u*.04}else if(n==="stone"){let _=Math.sin(h*90+mi(l*5,h*4)*7);d=.72+f*.23+u*.14+_*.035,p=.46+mi(l*4,h*4)*.07+mi(l*16,h*16)*.045+u*.025}else if(n==="cloth"){let _=c%4<2!=a%4<2?.07:-.04;d=.86+f*.12+_,p=.5+_*2}else if(n==="metal"){let _=Math.pow(xr(c,0),15)*mi(l*2,h*30);d=.85+f*.12+u*.025-_*.16,p=.5-_*.14}else if(n==="tile"){let _=Math.pow(Math.abs(Math.sin(l*Math.PI*8)),6),b=mi(l*17,h*21);d=.73+f*.17+_*.08+b*.08,p=.38+_*.19+b*.06}else n==="plaster"?(d=.88+f*.09+u*.03,p=.46+mi(l*23,h*23)*.06):n==="roof-snow"?(x=Math.abs(Math.sin(l*Math.PI*19+Math.sin(h*11)*.15))<.06+f*.1&&mi(l*12,h*18)>.38||mi(l*12,h*10)<.19?0:255,d=.94+u*.06,p=.47+f*.06+u*.025):(d=.92+f*.05+u*.03,p=.48+f*.03+u*.025);let m=(a*e+c)*4,g=Math.round(lt.clamp(d,0,1)*255);t.set([g,g,g,x],m);let y=Math.round(lt.clamp(p,0,1)*255);i.set([y,y,y,255],m);let v=Math.round((n==="metal"?.64+f*.3:n==="tile"?.74+f*.22:.86+u*.13)*255);s.set([v,v,v,255],m)}let r=(a,c)=>{let l=c?Jc(a,e,n):{data:a,width:e,height:e},h=new Dn(l.data,l.width,l.height,Jt);return h.wrapS=h.wrapT=Yn,h.magFilter=Et,h.minFilter=cn,h.generateMipmaps=!0,h.anisotropy=4,c&&(h.colorSpace=Pt),h.needsUpdate=!0,h},o={map:r(t,!0),bumpMap:r(i,!1),roughnessMap:r(s,!1)};return Qc(o.map,n),pu.set(n,o),o}function zt(n,e,t={}){return new an({color:n,...Rv(e),roughness:.86,bumpScale:e==="stone"||e==="wood"?.018:.006,...t})}function gu(n){let e=ei(Math.floor(n*7919)+17),t=[],i=[],s=[];for(let o=0;o<36;o++){let a=o*2.399+n,c=Math.sqrt((o+.5)/36)*.93,l=new L(Math.cos(a)*c,(e()-.5)*1.15,Math.sin(a)*c),h=e()*Math.PI*2,u=(e()-.5)*1.1,f=new Kt(u,h,(e()-.5)*.8),d=.18+e()*.15,p=d*(.32+e()*.16),x=[[0,0,d],[p,0,0],[0,0,-d],[-p,0,0],[0,.04,0],[0,-.012,0]].map(g=>new L(...g).applyEuler(f).add(l)),m=.74+e()*.26;for(let g of[[0,1,4],[1,2,4],[2,3,4],[3,0,4],[1,0,5],[2,1,5],[3,2,5],[0,3,5]])for(let y of g){let v=x[y];t.push(...v.toArray()),i.push(v.x*.5+.5,v.z*.5+.5);let _=m*(y===4?1:y===5?.75:.9);s.push(_,_,_)}}let r=new ht;return r.setAttribute("position",new De(t,3)),r.setAttribute("uv",new De(i,2)),r.setAttribute("color",new De(s,3)),r.computeVertexNormals(),r}function xu(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ht,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Gp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=Gp(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Gp(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new kt(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Vp(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,v=a.length;y<v;y++){let _=a[y],b=n.attributes[_];c[_]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let w=n.morphAttributes[_];w&&(l[_]||(l[_]=[]),w.forEach((R,M)=>{let T=new R.array.constructor(R.count*R.itemSize);l[_][M]=new R.constructor(T,R.itemSize,R.normalized)}))}let d=e*.5,p=Math.log10(1/e),x=Math.pow(10,p),m=d*x;for(let y=0;y<r;y++){let v=i?i.getX(y):y,_="";for(let b=0,w=a.length;b<w;b++){let R=a[b],M=n.getAttribute(R),T=M.itemSize;for(let N=0;N<T;N++)_+=`${Math.trunc(M[u[N]](v)*x+m)},`}if(_ in t)h.push(t[_]);else{for(let b=0,w=a.length;b<w;b++){let R=a[b],M=n.getAttribute(R),T=n.morphAttributes[R],N=M.itemSize,U=c[R],z=l[R];for(let F=0;F<N;F++){let C=u[F],D=f[F];if(U[D](o,M[C](v)),T)for(let G=0,O=T.length;G<O;G++)z[G][D](o,T[G][C](v))}}t[_]=o,h.push(o),o++}}let g=n.clone();for(let y in n.attributes){let v=c[y];if(g.setAttribute(y,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),y in l)for(let _=0;_<l[y].length;_++){let b=l[y][_];g.morphAttributes[y][_]=new b.constructor(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return g.setIndex(h),g}var No=new L;function kn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;No.copy(e),No[i]=0,No.normalize();let l=.5*o/(o+a),h=1-No.angleTo(n)/c;return Math.sign(No[t])===1?h*l:a/(o+a)+l+l*(1-h)}var el=class n extends Ln{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new L,l=new L,h=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new L,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(c.fromArray(u,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[g+0]=h.x*Math.sign(c.x)+l.x*r,u[g+1]=h.y*Math.sign(c.y)+l.y*r,u[g+2]=h.z*Math.sign(c.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[y+0]=kn(x,l,"z","y",r,i),d[y+1]=1-kn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),d[y+0]=1-kn(x,l,"z","y",r,i),d[y+1]=1-kn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),d[y+0]=1-kn(x,l,"x","z",r,e),d[y+1]=kn(x,l,"z","x",r,i);break;case 3:x.set(0,-1,0),d[y+0]=1-kn(x,l,"x","z",r,e),d[y+1]=1-kn(x,l,"z","x",r,i);break;case 4:x.set(0,0,1),d[y+0]=1-kn(x,l,"x","y",r,e),d[y+1]=1-kn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),d[y+0]=kn(x,l,"x","y",r,e),d[y+1]=1-kn(x,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Iv=3,Pv=4;var Dv={sungnyemun:[{name:"목조 궁수루",appearance:"낮은 목조 누각 · 단층 지붕"},{name:"석축 궁수루",appearance:"높은 석축 · 돌계단 · 붉은 군기"},{name:"중층 수호문",appearance:"이층 누각 · 두 겹 지붕 · 금빛 용마루와 대형 군기"}],hwaseong:[{name:"목조 포루",appearance:"개방형 목조 포대 · 소형 화포"},{name:"석축 중포루",appearance:"보강 석축 · 철갑 포가 · 길어진 화포"},{name:"중층 수호포루",appearance:"높은 보루 · 중층 지휘각 · 대형 금테 화포"}],bosingak:[{name:"기본 종루",appearance:"남색 기와 · 붉은 기둥 · 청동 범종"},{name:"보강 종루",appearance:"단청 보강 · 기둥 양옆의 등불"},{name:"호국 종각",appearance:"금빛 지붕 장식 · 조각 석축 · 종테"}],cheomseong:[{name:"석조 천문대",appearance:"풍화된 화강석 · 사각 관측창"},{name:"혼천 관측대",appearance:"황동 관측창 · 정상의 천문 기구"},{name:"별빛 관측대",appearance:"금속 띠 · 별자리 원판 · 따뜻한 관측창"}],haeinsa:[{name:"장경각",appearance:"나무 창살 · 남색 기와 · 경판 전각"},{name:"보강 장경각",appearance:"붉은 기둥 · 녹색 단청 · 한 쌍의 등불"},{name:"호국 장경각",appearance:"드러난 경판 서가 · 금빛 용마루 장식"}],seokguram:[{name:"본존 석굴",appearance:"이끼 낀 둥근 석굴 · 금빛 본존상"},{name:"연화 석굴",appearance:"다듬은 돌 아치 · 연화 기단 · 석등"},{name:"대광배 석굴",appearance:"연꽃 조각 아치 · 금빛 광배"}],gyeongbok:[{name:"근정전",appearance:"겹처마 궁궐 · 붉은 기둥 · 석조 난간"},{name:"월대 근정전",appearance:"금속 난간 장식 · 따뜻한 창빛"},{name:"호국 근정전",appearance:"금빛 용마루 · 조각 석수 · 장식 월대"}],namhansan:[{name:"수어장대",appearance:"원형 석축 · 남색 기와 수비각"},{name:"보강 수어장대",appearance:"보강 여장 · 철제 장식 · 성벽 등불"},{name:"호국 수어장대",appearance:"남색 군기 · 금빛 수호 문장"}],seokbinggo:[{name:"석빙 창고",appearance:"풀 덮인 석조 아치 · 얼음 창고"},{name:"보강 얼음고",appearance:"다듬은 돌 입구 · 푸른 얼음 · 석등"},{name:"호국 얼음고",appearance:"청동 냉기 문장 · 정돈된 얼음 저장고"}],bulguksa:[{name:"기본 석탑",appearance:"화강석 다층 석탑 · 둥근 상륜"},{name:"연화 석탑",appearance:"연꽃 조각 기단 · 석등 장식"},{name:"호국 석탑",appearance:"금빛 상륜 · 석재 조각 보강"}]},Lv={bosingak:{A:"금빛 범종 · 좌우 공명판 · 붉은 군기",B:"짙은 청동 종 · 한 쌍의 시각 북 · 남색 군기"},cheomseong:{A:"정상의 황동 혼천의 · 금빛 관측창",B:"망원 관측기 · 청옥 별지도 · 남색 군기"},haeinsa:{A:"금빛 결계 문장 · 드러난 대장경 경판",B:"청옥 향로 · 의례용 입구 장식"},seokguram:{A:"본존상을 감싼 금빛 태양 광배",B:"세 불상 · 청옥과 금빛 조각 아치"},gyeongbok:{A:"붉은 휘장 · 금빛 왕실 문장",B:"열린 창고 문 · 금빛 국고 궤짝"},namhansan:{A:"청동 갑판 · 붉은 정예 군기",B:"청옥 기도 깃발 · 연꽃 수호 문장"},seokbinggo:{A:"부채꼴 얼음 결정 · 푸른 냉기 분출구",B:"세로 얼음 창살 · 청동 잠금쇠"},bulguksa:{A:"절제된 삼층 석탑 · 돌 상륜",B:"청옥·호박빛 연꽃 등 세 개"}};function tl(n,e=1,t=null,i=!1){let s=Ai[n];if(!s)throw new Error(`Unknown 3D tower: ${n}`);let r=i||e===4?Pv:Iv;if(!Number.isInteger(e)||e<1||e>r||e===4&&!s.branches[t])throw new RangeError(`Invalid 3D tower level: ${e} ${t??""}`);let o=Dv[n]??[{name:`${s.title} 기본`,appearance:"기본 건물과 핵심 장치"},{name:`${s.title} 보강`,appearance:"석축·장치 보강 · 높아진 구조"},{name:`${s.title} 완성`,appearance:"확장된 누각·기단 · 금빛 장식"}],a=e===4,c=a?{name:s.branches[t].name,appearance:Lv[n]?.[t]??s.branches[t].desc}:o[e-1],l=e===r,h=e-1;return{...c,level:e,maxLevel:r,upgradeCount:h,isMax:l,branch:t,status:l?"최대 강화":e===1?"기본":`강화 ${h}회`,next:e===3&&r===4?"두 가지 특화 중 하나를 선택합니다":o[e]?.appearance??null,cost:e<3?s.levels[e].cost:null}}var Ut=(n,e,t=.8,i=0)=>({jaw:n,length:e,cheek:.96+(n-1)*.4,temple:.99,depth:1,eyes:.96,lid:t,nose:1.04,age:i}),ni={ashigaru:{body:[.92,.98,.93],color:"#847352",accent:"#b09a67",helmet:"jingasa",weapon:"yari",gait:7.7,stride:.14,face:Ut(.94,1.03),detail:"넓은 진가사 · 긴 창 · 두 손 전진"},teppo:{body:[.94,1.02,.95],color:"#4e6069",accent:"#a9976e",helmet:"flat-hat",weapon:"rifle",gait:7.3,stride:.13,face:Ut(1.02,1.05),detail:"낮은 모자 · 화승총 · 두 손 조준"},scout:{body:[.81,.96,.85],color:"#8e6650",accent:"#c0a576",helmet:"headband",weapon:"shortblade",gait:10.1,stride:.18,face:Ut(.87,.99,.94),detail:"머리띠 · 짧은 칼 · 가벼운 달리기"},samurai:{body:[1.06,1.04,1.02],color:"#793f3d",accent:"#b49b72",helmet:"crescent",weapon:"katana",gait:7.2,stride:.13,face:Ut(1.08,1.05,.76),detail:"초승달 투구 · 층진 갑주 · 긴 칼"},ninja:{body:[.85,.99,.86],color:"#303449",accent:"#756d83",helmet:"hood",weapon:"kunai",gait:9.6,stride:.17,face:Ut(.89,1.07,.73),detail:"얼굴 두건 · 쌍 단검 · 낮은 자세"},onmyoji:{body:[.92,1.07,.96],color:"#c4c5b1",accent:"#89575b",helmet:"eboshi",weapon:"ritual",gait:6.5,stride:.12,face:Ut(.91,1.14,.7,.3),detail:"높은 관 · 부적과 지팡이 · 의식 자세"},cavalry:{body:[1.02,1.02,1],color:"#514d68",accent:"#b4a27e",helmet:"horns",weapon:"naginata",gait:8.6,stride:.15,face:Ut(1.04,1.09,.8),detail:"뿔 투구 · 장도 · 안장과 고삐 · 대각 속보"},drum:{body:[1.06,1,1.1],color:"#914d45",accent:"#b79d67",helmet:"headband",weapon:"drum",gait:7.2,stride:.13,face:Ut(1.12,.97,.88),detail:"붉은 띠 · 끈으로 맨 북 · 교대 타격"},armored:{body:[1.22,1.04,1.16],color:"#48585a",accent:"#a59b83",helmet:"visor",weapon:"axe",gait:5.8,stride:.11,face:Ut(1.18,1.04,.66,.3),detail:"철제 안면갑 · 넓은 방패 · 무거운 도끼"},ram:{body:[1,1,1],color:"#69513a",weapon:"ram",detail:"덧댄 지붕 · 철띠 통나무 · 전후 공성 타격"},konishi:{body:[1.04,1.06,1.02],scale:1.17,color:"#783f3e",accent:"#c4aa74",helmet:"split-crescent",weapon:"katana",offhand:"fan",face:Ut(1.01,1.08,.77,.35),gait:6.7,stride:.12,detail:"갈라진 반달 투구 · 붉은 갑주 · 지휘 부채"},kato:{body:[1.01,1.15,1],scale:1.17,color:"#45566d",accent:"#b0a58b",helmet:"tall-cone",weapon:"yari",face:Ut(.93,1.18,.69,.5),gait:6.1,stride:.13,detail:"긴 원뿔 투구 · 긴 창 · 앞으로 찌르기"},wakizaka:{body:[1.13,1.03,1.08],scale:1.17,color:"#38616a",accent:"#bda779",helmet:"wide-crescent",weapon:"cutlass",offhand:"shield",face:Ut(1.13,1.02,.8,.3),gait:6.7,stride:.12,detail:"넓은 반달 투구 · 청록 갑주 · 수군 방패"},ukita:{body:[1.1,1.1,1.05],scale:1.19,color:"#724b69",accent:"#c1a97c",helmet:"antlers",weapon:"katana",offhand:"fan",face:Ut(1.08,1.12,.82,.25),gait:6.3,stride:.12,detail:"가지뿔 투구 · 자주 갑주 · 넓은 부채"},ishida:{body:[.96,1.13,.98],scale:1.19,color:"#59644b",accent:"#bfab7d",helmet:"banner",weapon:"shortblade",offhand:"fan",face:Ut(.9,1.16,.7,.4),gait:6.1,stride:.11,detail:"세로 관식 · 경갑 · 세 갈래 지휘 깃발"},so:{body:[.95,1.05,.96],scale:1.16,color:"#5b4d6c",accent:"#b39e7e",helmet:"swept",weapon:"cutlass",face:Ut(.96,1.1,.84,.15),gait:7.5,stride:.15,detail:"뒤로 흐르는 관식 · 가벼운 갑주 · 굽은 칼"},kuroda:{body:[1.12,1.05,1.09],scale:1.18,color:"#323d40",accent:"#ad9c79",helmet:"bowl",weapon:"yari",face:Ut(1.16,1.06,.72,.5),gait:6.4,stride:.12,detail:"넓은 그릇 투구 · 검은 갑주 · 철포대 지휘 창"},todo:{body:[1.03,1.14,1.02],scale:1.18,color:"#535c75",accent:"#b3a486",helmet:"stacked",weapon:"naginata",face:Ut(.98,1.15,.78,.6),gait:6.4,stride:.12,detail:"겹친 원형 관식 · 긴 장도 · 수군 갑주"},kuki:{body:[1.25,1.04,1.17],scale:1.2,color:"#3d526b",accent:"#afa88d",helmet:"iron-wings",weapon:"mace",offhand:"shield",face:Ut(1.21,1.01,.7,.5),gait:5.9,stride:.11,detail:"철제 날개 투구 · 두꺼운 방벽 · 철퇴"},kurushima:{body:[1.03,1.08,1.01],scale:1.18,color:"#87503c",accent:"#c1a16c",helmet:"wave",weapon:"cutlass",offhand:"blade",face:Ut(1.05,1.11,.75,.3),gait:7.1,stride:.14,detail:"파도 관식 · 구리빛 갑주 · 양손 칼"},shimazu:{body:[1.2,1.1,1.14],scale:1.23,color:"#5a476e",accent:"#c1ad84",helmet:"great-horns",weapon:"nodachi",face:Ut(1.19,1.12,.64,.9),gait:6.6,stride:.15,detail:"긴 쌍뿔 · 넓은 어깨 · 대도 참격"},hideyoshi:{body:[1.16,1.12,1.12],scale:1.5,color:"#a58245",accent:"#e0c98e",helmet:"sunburst",weapon:"katana",offhand:"fan",face:Ut(1.07,1.04,.62,1),gait:5.6,stride:.1,detail:"큰 금빛 방사 관식 · 장식 갑주 · 표주박 군기"}};var Nv={jaw:1,cheek:1,temple:1,length:1,depth:1,eyes:1,lid:1,nose:1,age:0},_r={yi:{body:[1.02,1.04,1],face:{jaw:1.05,cheek:.96,temple:.98,length:1.05,depth:1.02,eyes:.96,lid:.83,nose:1.08,age:.3},gait:7.4,stride:.15},sejong:{body:[1.09,1.02,1.08],face:{jaw:1.08,cheek:1.13,temple:1.05,length:.98,depth:1.06,eyes:1.02,lid:.9,nose:.96,age:.25},gait:6.2,stride:.12},eulji:{body:[.99,1.09,.96],face:{jaw:.9,cheek:.97,temple:1.01,length:1.12,depth:.98,eyes:.94,lid:.77,nose:1.14,age:.35},gait:7,stride:.14},gang:{body:[1.08,.98,1.04],face:{jaw:1.1,cheek:1.02,temple:1.06,length:.99,depth:1.04,eyes:1.02,lid:.72,nose:1.12,age:1},gait:7.1,stride:.14},gwon:{body:[1.16,1.03,1.1],face:{jaw:1.17,cheek:1.09,temple:1.02,length:1.04,depth:1.09,eyes:1.04,lid:.78,nose:1.15,age:.8},gait:6.6,stride:.13},gwak:{body:[.94,1.03,.93],face:{jaw:.93,cheek:.95,temple:.96,length:1.03,depth:.96,eyes:.94,lid:.86,nose:.97,age:.2},gait:9.1,stride:.17},ahn:{body:[.92,1.09,.94],face:{jaw:.94,cheek:.94,temple:.97,length:1.1,depth:.99,eyes:.96,lid:.82,nose:1.04,age:.15},gait:7.8,stride:.15},dangun:{body:[1.01,1.12,1],face:{jaw:.93,cheek:1.03,temple:1.01,length:1.13,depth:1.02,eyes:1,lid:.7,nose:1.1,age:1},gait:5.9,stride:.12}},yr=n=>({...Nv,..._r[n]?.face??ni[n]?.face});var Pi=new Map;function Ft(n,e,{segments:t=20,steps:i=2,folds:s=0,skin:r=!1,arc:o=Math.PI*2,smooth:a=!1}={}){let c=JSON.stringify([n,e,t,i,s,r,o,a]);if(Pi.has(c))return Pi.get(c);let l=[];for(let g=0;g<e.length-1;g++)for(let y=0;y<i;y++){let v=y/i,_=e[g],b=e[g+1];l.push(a?yu(e,g,v):_.map((w,R)=>lt.lerp(w,b[R]??0,v)))}l.push(e.at(-1));let h=[],u=[],f=[],d=[],p=t+1;for(let g=0;g<l.length;g++){let[y,v,_,b=0]=l[g];for(let w=0;w<=t;w++){let R=-o/2+w/t*o,M=1+s*Math.cos(R*10)*(1-g/(l.length+3)),T=Math.sin(R)*v*M,N=Math.cos(R)*_*M+b;h.push(T,y,N),u.push(w/t,g/(l.length-1));let U=r?Math.exp(-((Math.abs(T)-.105)**2/.002+(y+.055)**2/.003))*Math.max(0,Math.cos(R)):0,z=r?.96+Math.max(0,y)*.16:1;if(f.push(z,z-U*.065,z-U*.095),g<l.length-1&&w<t){let F=g*p+w;d.push(F,F+1,F+p,F+1,F+p+1,F+p)}}}if(o===Math.PI*2)for(let[g,y]of[[0,!0],[l.length-1,!1]]){let v=h.length/3;h.push(0,l[g][0],l[g][3]??0),u.push(.5,.5),f.push(1,1,1);for(let _=0;_<t;_++){let b=g*p+_;d.push(...y?[v,b+1,b]:[v,b,b+1])}}let x=new ht;x.setAttribute("position",new De(h,3)),x.setAttribute("uv",new De(u,2)),x.setAttribute("color",new De(f,3)),x.setIndex(d),x.computeVertexNormals();let m=x.attributes.normal;for(let g=0;g<l.length&&o===Math.PI*2;g++){let y=g*p,v=y+t,_=new L().fromBufferAttribute(m,y).add(new L().fromBufferAttribute(m,v)).normalize();m.setXYZ(y,_.x,_.y,_.z),m.setXYZ(v,_.x,_.y,_.z)}return x.userData.sculpture=n,Pi.set(c,x),x}function yu(n,e,t){return n[e].map((i,s)=>{let r=n[e+1][s]??0;if(!s)return lt.lerp(i,r,t);let o=n[Math.max(0,e-1)][s]??0,a=n[Math.min(n.length-1,e+2)][s]??0,c=.5*(2*i+(-o+r)*t+(2*o-5*i+4*r-a)*t*t+(-o+3*i-3*r+a)*t*t*t);return lt.clamp(c,Math.min(i,r),Math.max(i,r))})}function _u(n){let e=yr(n);return[[-.224,.045,.065,.026],[-.194,.092,.099,.018],[-.143,.138,.123,.008],[-.065,.166,.145,-.004],[.025,.177,.158,-.014],[.107,.172,.151,-.022],[.174,.133,.122,-.024],[.21,.05,.06,-.022]].map(([t,i,s,r],o)=>[t*e.length,i*(o<3?e.jaw:o<5?e.cheek:e.temple),s*e.depth,r*e.depth])}function Uv(n,e,t){let i=yr(n),s=e/i.nose,r=t/i.length,o=(a,c,l,h)=>Math.exp(-(((s-a)/l)**2+((r-c)/h)**2));return i.depth*(.009*(o(.098,-.035,.045,.054)+o(-.098,-.035,.045,.054))-.006*(o(.07,.025,.037,.027)+o(-.07,.025,.037,.027))+.013*o(0,-.005,.023,.06)+.029*o(0,-.047,.026,.022)+.009*o(0,-.145,.06,.034)+.006*o(0,-.087,.064,.026))}function vr(n,e,t){let i=_u(n),s=0;for(;s<i.length-2&&t>i[s+1][0];)s++;let r=yu(i,s,lt.clamp((t-i[s][0])/(i[s+1][0]-i[s][0]),0,1)),o=Math.sqrt(Math.max(0,1-(e/r[1])**2));return o*r[2]+r[3]+Uv(n,e,t)*o**8}function vu(n,e,t,i=0){let r=vr(n,e,t),o=new L(-(vr(n,e+5e-4,t)-vr(n,e-5e-4,t))/(2*5e-4),-(vr(n,e,t+5e-4)-vr(n,e,t-5e-4))/(2*5e-4),1).normalize();return{position:new L(e,t,r).addScaledVector(o,i),normal:o}}function nl(n="neutral"){let e=`sculpted-face-${n}`;if(Pi.has(e))return Pi.get(e);let t=40,i=4,s=_u(n),r=(s.length-1)*i+1,o=r*(t+1),a=Ft(e,s,{segments:t,steps:i,skin:!0,smooth:!0}).clone(),c=a.attributes.position,l=a.attributes.color;for(let u=0;u<o;u++){let f=c.getX(u),d=c.getY(u),p=c.getZ(u),x=yr(n),m=_u(n),g=0;for(;g<m.length-2&&d>m[g+1][0];)g++;let y=yu(m,g,lt.clamp((d-m[g][0])/(m[g+1][0]-m[g][0]),0,1))[3];p>y&&c.setZ(u,vr(n,f,d));let v=Math.exp(-(((Math.abs(f)-.098*x.cheek)/.052)**2+((d+.045*x.length)/.06)**2))*Math.max(0,(p-y)/.15),_=Math.exp(-((f/.034)**2+((d+.048*x.length)/.033)**2))*Math.max(0,(p-y)/.15),b=Math.exp(-(((Math.abs(f)-.07*x.eyes)/.042)**2+((d-.025*x.length)/.032)**2))*Math.max(0,(p-y)/.15),w=.965+Math.max(0,d)*.1-lt.smoothstep(-d,.07,.2)*.035-b*.028;l.setXYZ(u,w,w-v*.065-_*.025,w-v*.09-_*.035)}a.computeVertexNormals();let h=a.attributes.normal;for(let u=0;u<r;u++){let f=u*(t+1),d=f+t,p=new L().fromBufferAttribute(h,f).add(new L().fromBufferAttribute(h,d)).normalize();h.setXYZ(f,...p.toArray()),h.setXYZ(d,...p.toArray())}return a.userData.sculpture=`face-${n}`,Pi.set(e,a),a}function gi(n){if(n==="tunic")return Ft(n,[[-.285,.22,.154,0],[-.2,.232,.168,0],[-.05,.266,.18,0],[.12,.292,.18,-.008],[.26,.27,.154,-.016],[.34,.105,.105,-.012]],{folds:.008});if(n==="cuirass")return Ft(n,[[-.2,.237,.175,.004],[-.05,.275,.191,.004],[.12,.297,.187,-.003],[.245,.273,.164,-.01]],{folds:.004});if(n==="robe")return Ft(n,[[-.64,.335,.237,.012],[-.58,.327,.23,.008],[-.4,.29,.207,0],[-.27,.239,.171,0]],{segments:24,folds:.023});if(n==="belt")return Ft(n,[[-.267,.24,.174,0],[-.251,.246,.18,0],[-.203,.246,.18,0],[-.19,.24,.174,0]],{segments:24});if(n==="thigh")return Ft(n,[[-.32,.085,.087,.012],[-.24,.114,.108,.006],[-.09,.126,.117,0],[0,.11,.104,0]],{segments:16,folds:.012});if(n==="boot")return Ft(n,[[-.3,.073,.087,.035],[-.23,.083,.091,.018],[-.1,.097,.098,.005],[.015,.099,.096,0]],{segments:16});if(n==="upperSleeve")return Ft(n,[[-.25,.086,.086,.014],[-.19,.112,.106,.006],[-.05,.135,.123,0],[.045,.111,.102,0]],{segments:16,folds:.013});if(n==="foreSleeve")return Ft(n,[[-.23,.078,.083,.024],[-.19,.086,.087,.019],[-.08,.098,.092,.006],[.018,.091,.088,0]],{segments:16,folds:.012});if(n==="wideSleeve")return Ft(n,[[-.245,.145,.13,.02],[-.21,.15,.132,.017],[-.08,.124,.115,.003],[.022,.092,.092,0]],{segments:20,folds:.022});if(n==="tasset")return Ft(n,[[-.51,.245,.205,.006],[-.46,.25,.21,.004],[-.31,.244,.19,0],[-.255,.233,.172,0]],{segments:24,folds:.018});throw new Error(`Unknown garment ${n}`)}function Uo(){let n=new $n;n.moveTo(-.025,0),n.lineTo(.025,0),n.lineTo(.021,-.49),n.lineTo(-.006,-.66),n.lineTo(-.024,-.5),n.closePath();let e="blade";if(!Pi.has(e)){let t=new li(n,{depth:.018,steps:1,bevelEnabled:!0,bevelSegments:1,bevelSize:.004,bevelThickness:.004});t.translate(0,0,-.009),Pi.set(e,t)}return Pi.get(e)}function Mu(n,e,t,i,s=1){let r=ft("#8d8050",{metalness:.65,roughness:.4}),o=[[0,.24],[.1,.24],[.17,.2],[.2,.13],[.225,-.08],[.255,-.19],[.3,-.23],[.295,-.255],[.26,-.25],[.225,-.18],[.19,.1],[.12,.17],[0,.17]].map(c=>new de(...c));ce(n,new so(o,28),r,e,t,i,s,s,s),xi(n,E.gold,e,t-.225*s,i,.28*s,.018*s,Math.PI/2);for(let c of[.14,-.14])xi(n,r,e,t+c*s,i,(c>0?.197:.247)*s,.012*s,Math.PI/2);Ue(n,r,e,t+.25*s,i,.1*s,.055*s,.09*s);let a=new ut(new Wi(.065*s,.018*s,5,12),E.gold);a.position.set(e,t+.32*s,i),n.add(a);for(let c=0;c<4;c++)for(let l=0;l<3;l++)for(let h=0;h<3;h++){let u=c*Math.PI/2+(h-1)*.1,f=.218-l*.01;Ue(n,E.gold,e+Math.sin(u)*f*s,t+(.045+l*.035)*s,i+Math.cos(u)*f*s,.009*s)}}function xi(n,e,t,i,s,r,o=.025,a=0,c=0){let l=new ut(new Wi(r,o,6,32),e);return l.position.set(t,i,s),l.rotation.set(a,c,0),l.castShadow=!0,n.add(l),l}function il(n,e,t,i,s,r=!1,o=1){for(let c=0;c<s;c++){let l=(1.16-c*.1)*o,h=i+c*.34*o;ce(n,"bevel",E.stone,e,h+.12*o,t,l*.54,.22*o,l*.54);for(let f of[-1,1])for(let d of[-1,1])ae(n,E.stoneDark,e+f*l*.25,h+.12*o,t+d*l*.25,.035,.2*o,.035);ce(n,"bevel",E.stone,e,h+.225*o,t,l*.68,.06*o,l*.68);let u=ce(n,new Zn(l*.62/Math.SQRT2,l/Math.SQRT2,.09*o,4,1),E.stoneDark,e,h+.28*o,t);u.rotation.y=Math.PI/4,ce(n,"bevel",E.stone,e,h+.32*o,t,l*.98,.035*o,l*.98),ae(n,E.snow,e,h+.33*o,t,l*.94,.035*o,l*.94),r&&ae(n,E.gold,e,h+.28*o,t+l*.5,l,.025,.025)}let a=i+s*.34*o;We(n,E.gold,e,a+.2*o,t,.025,.4*o),Ue(n,E.gold,e,a+.39*o,t,.065*o);for(let c=0;c<3;c++)Ue(n,E.stone,e,a+(.05+c*.09)*o,t,(.1-c*.022)*o,.026*o,(.1-c*.022)*o)}function Hp(n,e,t=1){let i=ft("#b3ab86",{metalness:.24,roughness:.65}),s=new Oe;s.position.y=e,s.scale.setScalar(t),n.add(s),ce(s,nl(),i,0,.54,.03,.82,.82,.82),Ue(s,i,0,.73,-.015,.11,.1,.1),Ue(s,i,0,.82,-.015,.045,.05,.045),Ue(s,i,0,.51,.165,.018,.035,.02);for(let r of[-1,1])Ie(s,E.stoneDark,[r*.025,.56,.157],[r*.075,.56,.15],.004),Ue(s,i,r*.145,.51,.01,.02,.06,.02);ce(s,Ft("statue-robe",[[-.04,.28,.21,.015],[.05,.28,.18,0],[.26,.22,.14,-.015],[.4,.15,.12,0]],{segments:24,folds:.025}),i,0,0,0);for(let r of[-1,1]){let o=Ue(s,i,r*.16,-.03,.13,.23,.11,.17);o.rotation.y=r*.3,Ie(s,i,[r*.2,.31,.01],[r*.23,.15,.09],.065),Ie(s,i,[r*.23,.15,.09],[r*.07,.1,.23],.047),Ue(s,i,r*.065,.1,.23,.045,.022,.045);for(let a=0;a<3;a++)Ie(s,E.stone,[r*(.08+a*.05),.28-a*.05,.135],[r*(.02+a*.06),.02,.2],.007)}ce(s,"bevel",E.stone,0,-.145,.03,.75,.12,.56);for(let r=0;r<10;r++){let o=r*Math.PI/5,a=Ue(s,i,Math.sin(o)*.3,-.09,.03+Math.cos(o)*.22,.075,.035,.055);a.rotation.y=o}xi(s,E.gold,0,.44,-.12,.4,.025)}function Wp(n,e,t,i=1,s=!1){let o=s?Math.PI:Math.PI*2,a=s?Math.PI/2:0;for(let c=0;c<6;c++){let l=c/6*Math.PI/2+.009,h=(c+1)/6*Math.PI/2-.009,u=Math.max(5,Math.round(Math.sin((l+h)/2)*e*o/.19));for(let f=0;f<u;f++){let d=a+f/u*o+.009,p=a+(f+1)/u*o-.009,x=(w,R,M)=>[Math.sin(M)*Math.sin(R)*w,t+Math.cos(R)*w*i,Math.cos(M)*Math.sin(R)*w],m=[x(e,l,d),x(e,l,p),x(e,h,p),x(e,h,d)],g=[x(e-.085,l,d),x(e-.085,l,p),x(e-.085,h,p),x(e-.085,h,d)],y=[...m,...g],v=[],_=[];for(let[w,R,M]of[[0,1,2],[0,2,3],[4,6,5],[4,7,6],[0,4,5],[0,5,1],[3,2,6],[3,6,7],[0,3,7],[0,7,4],[1,5,6],[1,6,2]])for(let T of[w,M,R])v.push(...y[T]),_.push(y[T][0],y[T][1]);let b=new ht;b.setAttribute("position",new De(v,3)),b.setAttribute("uv",new De(_,2)),b.computeVertexNormals(),ce(n,b,(f+c)%5?E.stone:E.stoneDark,0,0,0)}}Ue(n,E.stone,0,t+e*i-.008,0,.1,.03,.1)}function bu(n,e,t,i,s,r){let o=ft("#72c4d4",{roughness:.24,metalness:.2,emissive:"#2f7c93",emissiveIntensity:.3}),a=Dt(n,o,e,t+r/2,i,s,r);a.rotation.z=e*.18}function Xp(n,e=1,t=null){let i=new Oe,s=Math.min(3,e),r=e===4,o=s===3,a=.13+(s-1)*.18;if(sl(i,1.15+(s-1)*.13,1,a),n==="bosingak"){let c=a+.14,l=.83+(s-1)*.1;if(tn(i,1.02,.82,c,l,{open:!0,railing:s>1,gold:o}),Mu(i,0,c+.4,0,1+(s-1)*.12),Ie(i,E.wood,[-.46,c+.4,.33],[.46,c+.4,.33],.045),hn(i,1.62,1.38,c+l+.03),o&&(tn(i,.7,.65,2.2,.47,{open:!0,gold:o}),hn(i,1.14,1.02,2.72)),t==="A"&&(Mu(i,0,1.03,0,1.6),xi(i,E.gold,0,1.5,-.17,.65,.035)),t==="B")for(let h of[-1,1])Mu(i,h*.65,.96,.02,.7),_i(i,h*.72,1.35,0,!0)}else if(n==="cheomseong"){let c=1+s*.3,l=6+s*2;for(let h=0;h<l;h++){let u=.43-h/l*.12;for(let f=0;f<10;f++){let d=(f+h%2*.5)*Math.PI/5,p=ce(i,"bevel",(h+f)%3?E.stone:E.stoneDark,Math.sin(d)*u,a+(h+.5)*c/l,Math.cos(d)*u,.27,c/l-.012,.16);p.rotation.y=d}}ae(i,E.woodDark,0,a+c*.65,.39,.18,.24,.025),ae(i,E.stone,0,a+c,0,.85,.13,.85);for(let h of[-1,1])ae(i,E.stone,h*.37,a+c+.15,0,.13,.24,.85);if(s>1&&(xi(i,E.gold,0,a+c+.56,0,.36,.022,Math.PI/2),xi(i,E.gold,0,a+c+.56,0,.36,.022,0,.8),Ue(i,E.gold,0,a+c+.56,0,.08)),o)for(let h of[-1,1])_i(i,h*.65,1.3,-.1,!0);if(r&&(xi(i,E.gold,0,a+c+.67,0,t==="A"?.68:.52,.035,0,.6),xi(i,E.gold,0,a+c+.67,0,.54,.025,.8,0),t==="B"))for(let h=0;h<3;h++){let u=We(i,E.steel,Math.cos(h*2.09)*.53,a+c+.45,Math.sin(h*2.09)*.53,.08,.45);u.rotation.z=.8}}else if(n==="haeinsa"){tn(i,1.12,.82,a+.14,.84,{open:!0,railing:s>1,gold:o});for(let c of[-1,1])for(let l=0;l<3;l++)for(let h=0;h<5;h++)ae(i,h%2?E.woodDark:E.wood,(h-2)*.19,a+.27+l*.16,c*.27,.17,.11,.25);if(hn(i,1.7,1.34,a+1.03),o&&(tn(i,.75,.64,2.16,.43,{gold:!0}),hn(i,1.2,1.05,2.64)),r)for(let c of[-1,1])_i(i,c*.76,1.3,0,!0),t==="A"?(ce(i,"bevel",E.stone,c*.8,.48,.58,.2,.9,.2),ae(i,ft("#80c3b4",{emissive:"#4fa48e",emissiveIntensity:.6}),c*.8,.7,.69,.12,.4,.015)):ae(i,E.gold,c*.72,.51,.55,.3,.4,.3)}else if(n==="seokguram"){let c=1+(s-1)*.12;Wp(i,.72*c,a+.3,1,!0);for(let l=0;l<13;l++){let h=l*Math.PI/12,u=ce(i,"bevel",l%4?E.stone:E.stoneDark,Math.cos(h)*.65*c,a+.3+Math.sin(h)*.65*c,.035,.15*c,.145*c,.19);u.rotation.z=h-Math.PI/2}if(Hp(i,a+.33,.8+(s-1)*.13),s>1)for(let l of[-1,1])ce(i,"bevel",E.stone,l*.68,a+.25,0,.23,.5,.9),ae(i,E.snow,l*.68,a+.52,0,.24,.04,.9);if(o&&xi(i,E.gold,0,a+.96,-.13,.57,.045),t==="A"){xi(i,E.gold,0,a+1.1,-.15,.83,.05);for(let l=0;l<12;l++){let h=l*Math.PI/6;Ie(i,E.gold,[Math.cos(h)*.73,a+1.1+Math.sin(h)*.73,-.14],[Math.cos(h)*.95,a+1.1+Math.sin(h)*.95,-.14],.025)}}if(t==="B")for(let l of[-1,1]){let h=new Oe;Hp(h,0,.48),h.position.set(l*.72,a+.3,.3),i.add(h)}}else if(n==="gyeongbok"){if(tn(i,1.22,.93,a+.18,.84,{railing:s>1,gold:o}),hn(i,1.82,1.5,a+1.06),o&&(tn(i,.92,.78,2.24,.54,{gold:!0}),hn(i,1.52,1.24,2.83)),s>1)for(let c of[-1,1])_i(i,c*.79,a+.4,-.15,o);if(t==="A"&&(tn(i,.54,.5,3.35,.37,{gold:!0}),hn(i,.92,.8,3.75)),t==="B")for(let c of[-1,1])ae(i,E.wood,c*.78,.61,.25,.48,.56,.55),ae(i,E.gold,c*.78,.67,.54,.44,.12,.04),hn(i,.71,.76,.96)}else if(n==="namhansan"){for(let c of[-1,1]){let l=new Oe;for(let h=0;h<3;h++)ce(l,"bevel",E.stone,c*.55,a+.13+h*.18,0,.26,.16,1.1);for(let h of[-.4,0,.4])ae(l,E.stone,c*.55,a+.7,h,.28,.26,.24);i.add(l)}tn(i,.74,.69,a+.62,.62,{open:!0,gold:o}),hn(i,1.34,1.18,a+1.27);for(let c of[-1,1])Ie(i,E.wood,[c*.28,a+.1,.4],[c*.28,a+.9,.4],.025);if(o&&(tn(i,.65,.55,2.25,.45,{gold:!0}),hn(i,1.05,.96,2.74)),r)for(let c of[-1,1])_i(i,c*.75,1.3,-.2,!0),t==="A"?ce(i,"bevel",E.steel,c*.68,.8,.56,.38,.65,.08):Dt(i,E.gold,c*.67,1,.5,.18,.55)}else if(n==="seokbinggo"){Wp(i,.7,a+.05,.65+(s-1)*.15),ae(i,E.woodDark,0,a+.24,.64,.38,.5,.07);for(let c of[-1,1])ae(i,E.stone,c*.28,a+.3,.62,.17,.66,.25);ae(i,E.stone,0,a+.65,.62,.65,.16,.25);for(let c=0;c<s;c++)We(i,E.stone,(c-(s-1)/2)*.33,a+.75,0,.07,.32),bu(i,(c-(s-1)/2)*.33,a+.88,0,.1,.3+s*.1);if(o)for(let c of[-1,1])bu(i,c*.53,a+.44,.15,.14,.8);if(r)for(let c=0;c<5;c++){let l=c*1.257;bu(i,Math.cos(l)*.36,a+.88,Math.sin(l)*.36,t==="A"?.15:.11,t==="A"?1.5:1)}if(t==="B"){hn(i,1.6,1.25,a+1.6);for(let c of[-1,1])We(i,E.wood,c*.6,a+.8,0,.04,1.6)}}else if(n==="bulguksa"){if(il(i,0,0,a+.08,s+1,o),s>1)for(let c of[-1,1])Ue(i,E.stone,c*.49,a+.18,.37,.14,.16,.12),ae(i,E.stone,c*.49,a+.06,.37,.25,.1,.24);t==="A"&&il(i,0,0,a+.08,7,!0,.9),t==="B"&&(il(i,-.42,0,a+.08,4,!0,.72),il(i,.42,0,a+.08,4,!0,.72))}else throw new Error(`Missing landmark model: ${n}`);if(o&&n!=="cheomseong")for(let c of[-1,1])ae(i,E.gold,c*.54,a+.07,.54,.05,.07,.03);return At(i),i.userData.visual=tl(n,e,t,e===4),i.userData.labelHeight=new qt().setFromObject(i).max.y+.16,i}function qp(n,e,t){if(e==="sungnyemun")if(t==="A"){let i=ft("#83d1d4",{emissive:"#347f94",emissiveIntensity:.35}),s=2.83+Fo(1.46,1.26)+.095;Ie(n,E.gold,[0,s,0],[0,s+.57,0],.025),Dt(n,i,0,s+.62,0,.13,.26);for(let r of[-1,1])ae(n,E.gold,r*.45,2.69,.42,.18,.17,.04),Ie(n,E.wood,[r*.42,2.6,.45],[r*.42,3.2,.45],.025)}else for(let i of[-1,1]){let s=new Oe;tn(s,.52,.58,1.2,.66,{open:!0,gold:!0}),hn(s,.9,.88,1.9),s.position.x=i*.98,n.add(s),ce(n,"bevel",E.stone,i*.98,.82,0,.24,.72,.6),Ie(n,E.woodDark,[i*.66,.85,0],[i*1.18,1.19,0],.045);for(let r=0;r<3;r++)Ie(n,E.wood,[i*.7+(r-1)*.07,1.4,.5],[i*.7+(r-1)*.07,2.1,.5],.012)}else if(t==="A"){n.userData.gun.scale.set(1.24,1.2,1.28);for(let s of[-1,1])ae(n,E.steel,s*.55,1.46,.4,.21,.62,.48)}else{n.remove(n.userData.gun);let i=new Oe;i.position.set(0,1.28,.18),i.userData.restZ=.18,i.userData.muzzle=new L(0,.34,.54),ae(i,E.woodDark,0,0,0,.73,.12,.68);for(let s=0;s<3;s++)for(let r=0;r<4;r++){let o=(r-1.5)*.16,a=.1+s*.14;ae(i,E.wood,o,a,0,.12,.11,.64),Ie(i,E.steel,[o,a,.1],[o,a+.16,.65],.027),Dt(i,E.gold,o,a+.18,.69,.04,.13).rotation.x=Math.PI/2}for(let s of[-1,1]){let r=We(i,E.woodDark,s*.44,-.1,-.13,.23,.08);r.rotation.z=Math.PI/2}n.add(i),n.userData.gun=i}}var Su=new Map,wu=new Map,Tu=new WeakMap,Di=128,Eu=Math.PI*2,Cn=(n,e,t,i,s=0)=>Math.sin(Eu*(n*t+e*i)+s),Au=n=>Math.max(0,Math.min(1,n));function Fv(n){if(Su.has(n))return Su.get(n);if(!["skin","hair","cloth","armor","leather"].includes(n))throw new Error(`Unknown character surface ${n}`);let e=new Uint8Array(Di*Di*4),t=new Uint8Array(e.length),i=new Uint8Array(e.length);for(let o=0;o<Di;o++)for(let a=0;a<Di;a++){let c=a/Di,l=o/Di,h=Cn(c,l,2,3)*.55+Cn(c,l,5,-2,1.3)*.3+Cn(c,l,3,7,.7)*.15,u=Cn(c,l,41,37,.4)*Cn(c,l,23,-29,2),f=Cn(c,l,48,0)*Cn(c,l,0,48),d=.97,p=.5,x=.95,m=[1,1,1];if(n==="skin"&&(d=.985+h*.012+u*.004,p=.5+u*.09,x=.96+h*.025,m=[1,.995,.989]),n==="hair"){let y=Math.sin(Eu*c*22+Cn(c,l,1,1)*1.2),v=Math.sin(Eu*c*49+Cn(c,l,2,1)*.8);d=.86+y*.09+v*.025+h*.018,p=.5+y*.19+v*.05,x=.86-y*.055,m=[1,.99,.97]}if(n==="cloth"&&(d=.93+h*.035+f*.025,p=.5+f*.17+u*.035,x=.98+h*.015),n==="armor"){let y=Cn(c,l,13,11)*Cn(c,l,9,-17),v=Math.max(0,Cn(c,l,1,43)+Cn(c,l,5,41)-1.68);d=.9+h*.035+y*.035-v*.06,p=.5+y*.07-v*.12,x=.87+h*.045+y*.055,m=[.98,.99,1]}n==="leather"&&(d=.89+h*.045+u*.025,p=.5+u*.15+h*.04,x=.94+u*.035,m=[1,.985,.965]);let g=(o*Di+a)*4;for(let y=0;y<3;y++)e[g+y]=Math.round(Au(d*m[y])*255),t[g+y]=Math.round(Au(p)*255),i[g+y]=Math.round(Au(x)*255);e[g+3]=t[g+3]=i[g+3]=255}let s=(o,a)=>{let c=new Dn(o,Di,Di,Jt);return c.colorSpace=a,c.wrapS=c.wrapT=Yn,c.magFilter=Et,c.minFilter=cn,c.generateMipmaps=!0,c.anisotropy=4,c.needsUpdate=!0,c.name=`character-${n}-${a===Pt?"pigment":o===t?"height":"roughness"}`,c},r={map:s(e,Pt),bumpMap:s(t,Fn),roughnessMap:s(i,Fn)};return Su.set(n,r),r}function zn(n,e,t={}){let i=JSON.stringify([n,e,t]);if(wu.has(i))return wu.get(i);let s={skin:{roughness:.94,bumpScale:7e-4,envMapIntensity:.28,vertexColors:!0},hair:{roughness:.91,bumpScale:.003,envMapIntensity:.34},cloth:{roughness:1,bumpScale:.0035,envMapIntensity:.35},armor:{roughness:.73,metalness:.46,bumpScale:.0025,envMapIntensity:.6,vertexColors:!0},leather:{roughness:.97,bumpScale:.0025,envMapIntensity:.3}},r=new an({color:e,...Fv(n),...s[n],...t});return r.name=`character-${n}-${e}`,r.userData.characterSurface=n,wu.set(i,r),r}function Yp(n){if(Tu.has(n))return Tu.get(n);let e=n.clone(),t=e.attributes.position,i=e.attributes.normal,s=new Float32Array(t.count*3);for(let r=0;r<t.count;r++){let o=[Math.abs(i.getX(r)),Math.abs(i.getY(r)),Math.abs(i.getZ(r))].sort((l,h)=>h-l),a=lt.smoothstep(o[1],.04,.55),c=.82+a*.18;s[r*3]=c*.985,s[r*3+1]=c*.993,s[r*3+2]=c}return e.setAttribute("color",new kt(s,3)),e.userData.characterArmor=!0,Tu.set(n,e),e}var Ov={yi:{skin:"#d4a47e",hair:"#382e2b",brow:.13,beard:.1},sejong:{skin:"#ddb18d",hair:"#3c302c",brow:.04,beard:.18},eulji:{skin:"#cda482",hair:"#3d3330",brow:.18,beard:.1},gang:{skin:"#c9ad91",hair:"#a3a29b",brow:.14,beard:.2},gwon:{skin:"#cda885",hair:"#62564a",brow:.12,beard:.15},gwak:{skin:"#d6a37b",hair:"#332c29",brow:.18,beard:.06},ahn:{skin:"#d1ab88",hair:"#302b28",brow:.08,beard:0},dangun:{skin:"#dcc2a4",hair:"#e0ddd0",brow:.04,beard:.24},ashigaru:{skin:"#c9a17e",hair:"#39312c",brow:.1,beard:0},teppo:{skin:"#c6a285",hair:"#45403a",brow:.14,beard:.025},scout:{skin:"#cfab86",hair:"#3b302a",brow:.08,beard:0},samurai:{skin:"#c5a282",hair:"#342e2c",brow:.18,beard:.035},ninja:{skin:"#c3a48a",hair:"#302f30",brow:.16,beard:0},onmyoji:{skin:"#d4b99b",hair:"#514b43",brow:.05,beard:0},cavalry:{skin:"#bd9877",hair:"#433831",brow:.15,beard:.04},drum:{skin:"#cba27e",hair:"#43372d",brow:.08,beard:0},armored:{skin:"#bea18a",hair:"#554b43",brow:.2,beard:.05},konishi:{skin:"#caa989",hair:"#3d3430",brow:.12,beard:.035},kato:{skin:"#c2a183",hair:"#3b332d",brow:.2,beard:.05},wakizaka:{skin:"#bf9d7c",hair:"#53493d",brow:.16,beard:.035},ukita:{skin:"#d0ad88",hair:"#36302d",brow:.08,beard:0},ishida:{skin:"#cfb393",hair:"#3b3531",brow:.1,beard:.02},so:{skin:"#d0b294",hair:"#3e352f",brow:.08,beard:0},kuroda:{skin:"#c2a38b",hair:"#60574d",brow:.18,beard:.045},todo:{skin:"#c8aa8c",hair:"#554b42",brow:.14,beard:.045},kuki:{skin:"#bd9b7d",hair:"#73695b",brow:.18,beard:.055},kurushima:{skin:"#bb9674",hair:"#44382d",brow:.18,beard:.035},shimazu:{skin:"#c4a789",hair:"#827a6d",brow:.2,beard:.065},hideyoshi:{skin:"#d1b18a",hair:"#7c7261",brow:.14,beard:.035},militia:{skin:"#cba581",hair:"#4c3d31",brow:.08,beard:0},guard:{skin:"#c9a580",hair:"#3b312c",brow:.12,beard:.025},elite:{skin:"#c6a17d",hair:"#4b3e34",brow:.18,beard:.035},monk:{skin:"#d1b391",hair:"#777064",brow:.05,beard:.045}},rl=n=>Ov[n]??{skin:"#c79a76",hair:"#39312c",brow:.17,beard:0},Cu=new Map,Bv=new L(0,0,1);function Mr(n,e){return Cu.has(n)||Cu.set(n,e()),Cu.get(n)}function kv(){return Mr("combed-hair-cap",()=>{let e=Ft("combed-hair-cap",[[.075,.181,.16,-.015],[.11,.186,.166,-.017],[.16,.174,.163,-.02],[.21,.125,.13,-.022],[.247,.04,.055,-.022],[.263,.01,.015,-.03]],{segments:32,steps:4,smooth:!0}).clone(),t=e.attributes.position,i=e.attributes.uv;for(let o=0;o<t.count-2;o++)if(i.getY(o)<.25&&t.getZ(o)>0){let a=.022*Math.exp(-(((t.getX(o)-.035)/.045)**2)),c=(1-i.getY(o)/.25)**2;t.setY(o,t.getY(o)+a*c)}e.computeVertexNormals();let s=e.attributes.normal,r=(t.count-2)/33;for(let o=0;o<r;o++){let a=o*33,c=a+32,l=new L().fromBufferAttribute(s,a).add(new L().fromBufferAttribute(s,c)).normalize();s.setXYZ(a,l.x,l.y,l.z),s.setXYZ(c,l.x,l.y,l.z)}return e})}function zv(n,e){return Mr(`eye-${n}-${e}`,()=>{let t=[0,0,.005],i=[.5,.5],s=[],r=24,o=3;for(let c=1;c<=o;c++)for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=c/o,f=Math.cos(h)*u,d=Math.sin(h)*Math.abs(Math.sin(h))**.35*u;if(t.push(f*n,d*e,.005*(1-u*u)),i.push(.5+f*.5,.5+d*.5),c===1&&l<r&&s.push(0,l+1,l+2),c>1&&l<r){let p=1+(c-2)*(r+1)+l;s.push(p,p+r+1,p+1,p+1,p+r+1,p+r+2)}}let a=new ht;return a.setAttribute("position",new De(t,3)),a.setAttribute("uv",new De(i,2)),a.setIndex(s),a.computeVertexNormals(),a})}function Zp(n,e,{ball:t,box:i,between:s,mesh:r,material:o,MAT:a}){let c=rl(e),l=yr(e),h=zn("skin",c.skin),u=zn("hair",c.hair);r(n,nl(e),h,0,0,0);let f=(x,m,g,y,v=.0015)=>{let _=Mr(`${e}-${x}`,()=>new mn(new on(g.map(([b,w])=>vu(e,b*l.eyes,w*l.length,v).position)),12,y,5,!1));return r(n,_,m,0,0,0)},d=o("#9d6d60",{roughness:.98,envMapIntensity:.2}),p=o("#ac8065",{roughness:1,envMapIntensity:.2});for(let x of[-1,1]){t(n,h,x*.176*l.cheek,-.025*l.length,-.025,.027,.051,.028),t(n,zn("skin","#b77e65"),x*.187*l.cheek,-.027*l.length,-.007,.012,.029,.009);let m=vu(e,x*.069*l.eyes,.021*l.length,.002),g=new Oe;g.position.copy(m.position),g.quaternion.setFromUnitVectors(Bv,m.normal),n.add(g);let y=.034*l.eyes,v=.014*l.lid;r(g,zv(y,v),o("#ded7c3",{roughness:.94,envMapIntensity:.25}),0,0,0),t(g,o("#715a3d",{roughness:.7,envMapIntensity:.3}),0,0,.0055,.0105,.0105*l.lid,.0018),t(g,o("#28302e",{roughness:.7,envMapIntensity:.3}),0,0,.007,.0048,.0075*l.lid,.0014),t(g,o("#f5e9c9",{roughness:.7}),-.003,.003,.008,.0018);for(let[_,b,w]of[[!0,u,.0018],[!1,p,.0011]]){let R=Mr(`lid-${e}-${_}`,()=>{let M=[];for(let T=0;T<=8;T++){let N=-1+T/4,U=Math.max(0,1-N*N)**.675;M.push(new L(N*y,(_?1:-1)*v*U,5e-4))}return new mn(new on(M),16,w,5,!1)});r(g,R,b,0,0,0)}f(`brow-${x}`,u,[[x*.035,.063-c.brow*.02],[x*.073,.069],[x*.108,.057+c.brow*.03]],.0048,.002),f(`nostril-${x}`,p,[[x*.011,-.052],[x*.02,-.055],[x*.027,-.052]],.0016,8e-4),l.age>.5&&(f(`eye-crease-${x}`,p,[[x*.104,.008],[x*.12,.002],[x*.133,-.005]],.0013*l.age,8e-4),f(`cheek-crease-${x}`,p,[[x*.035,-.063],[x*.048,-.08],[x*.055,-.101]],.0013*l.age,8e-4))}if(f("upper-lip",d,[[-.027,-.092],[-.012,-.087],[0,-.089],[.012,-.087],[.027,-.092]],.0024,.001),f("lower-lip",d,[[-.025,-.094],[0,-.098],[.025,-.094]],.0022,.001),t(n,u,0,.105,-.057,.18,.14,.143),c.beard){let x=Mr(`shaped-beard-${e}`,()=>{let m=Ft(`beard-${e}`,[[-.145-c.beard*.9,.021,.018,.098],[-.14-c.beard*.45,.075,.046,.108],[-.135,.115,.075,.084],[-.105,.115,.048,.078]],{segments:28,steps:4,folds:.035,arc:Math.PI*1.35,smooth:!0}).clone(),g=m.attributes.position,y=m.attributes.uv;for(let v=0;v<g.count;v++){let _=(y.getX(v)-.5)*Math.PI*1.35,b=y.getY(v),w=.009*(.5+.5*Math.cos(_*7))*(1-b)**2;g.setXYZ(v,g.getX(v)*l.jaw,(g.getY(v)+.039*Math.abs(Math.sin(_))*b**3-w)*l.length,g.getZ(v)*l.depth)}return m.computeVertexNormals(),m});r(n,x,u,0,0,0);for(let m of[-1,1])f(`mustache-${m}`,u,[[m*.006,-.072],[m*.027,-.074],[m*.052,-.084]],.0075,.004),f(`sideburn-${m}`,u,[[m*.144,-.014],[m*.137,-.071],[m*.117,-.128]],.01,.003)}if(e==="ahn")for(let x of[-1,1])f(`mustache-${x}`,u,[[x*.006,-.072],[x*.026,-.073],[x*.052,-.079]],.0045,.002);if(e==="dangun")for(let x of[-1,1])for(let m=0;m<3;m++){let g=t(n,u,x*(.17-m*.012),-.07-m*.07,-.072,.032,.093,.043);g.rotation.z=x*.13}n.userData.portrait=e,n.userData.faceForm=l}function $p(n,e,t,{ball:i,box:s,cylinder:r,cone:o,between:a,mesh:c,material:l,MAT:h}){let u=h.gold,f=zn("hair",rl(e).hair);if(["yi","eulji","gang","gwon"].includes(e)){let d=e==="eulji",p=e==="gang",x=d?.35:p?.245:.28;c(n,Ft(`helmet-${e}`,[[.066,.208,.188,-.018],[.12,.216,.192,-.025],[.205,.167,.154,-.035],[x,.018,.021,-.045]],{segments:28}),t,0,0,0),r(n,u,0,.074,-.018,.213,.025);for(let m of[-1,1])for(let g=0;g<3;g++){let y=c(n,"bevel",t,m*(.192+g*.006),.018-g*.058,-.063,.055,.073,.23);y.rotation.z=m*-.11,s(n,u,m*(.224+g*.006),.037-g*.058,-.063,.009,.008,.2)}for(let m=0;m<7;m++){let g=(m/6-.5)*2.6;a(n,u,[Math.sin(g)*.205,.081,Math.cos(g)*.188-.02],[Math.sin(g)*.152,.209,Math.cos(g)*.137-.035],.006)}if(e==="yi"){s(n,u,0,.18,.16,.045,.18,.025);for(let m=0;m<5;m++){let g=i(n,h.red,0,.3+m*.03,-.055-m*.034,.029,.09-m*.008,.045);g.rotation.x=-.5}}else if(e==="eulji"){for(let m of[-1,1]){let g=c(n,"bevel",u,m*.16,.29,-.035,.055,.29,.065);g.rotation.z=m*-.42,a(n,u,[m*.04,.22,.13],[m*.075,.45,.07],.017)}i(n,h.jade,0,.19,.17,.045,.06,.015)}else if(e==="gang"){for(let m of[-1,0,1]){let g=c(n,"bevel",h.steel,m*.085,.265,.005,.034,.14-Math.abs(m)*.045,.04);g.rotation.z=m*-.25}i(n,u,0,.11,.19,.035)}else{c(n,"bevel",h.steel,0,.16,.163,.08,.14,.026);for(let m=0;m<3;m++)i(n,f,0,.29+m*.018,-.065-m*.035,.04,.065,.055)}}else if(e==="sejong"){c(n,Ft("royal-cap",[[.095,.181,.16,-.03],[.22,.183,.153,-.03],[.32,.13,.13,-.03]],{segments:20}),h.black,0,0,0);for(let d of[-1,1]){let p=c(n,"bevel",h.black,d*.27,.23,-.09,.25,.045,.14);p.rotation.z=d*.08,s(n,h.woodDark,d*.3,.233,-.017,.16,.012,.008)}}else if(e==="dangun"){i(n,f,0,.1,-.067,.205,.2,.18),r(n,u,0,.13,0,.203,.045);for(let d of[-1,0,1])a(n,u,[d*.13,.15,.13],[d*.15,.33+(d?0:.055),.1],.018),i(n,h.jade,d*.15,.34+(d?0:.055),.1,.027,.042,.018)}else if(e==="gwak"){i(n,f,0,.11,-.044,.182,.14,.16),i(n,f,0,.25,-.07,.064,.075,.064),r(n,h.red,0,.075,-.008,.195,.052);for(let d of[-1,1]){let p=c(n,"bevel",h.red,d*.045,-.06,-.21,.052,.32,.024);p.rotation.z=d*.27}}else if(e==="ahn"){let d=kv();c(n,d,f,0,0,0);let p=new ut(d,f),x=new po,m=zn("hair","#3d3530");for(let g=0;g<9;g++){let y=Mr(`combed-strand-${g}`,()=>{let v=[];for(let _=0;_<=10;_++){let b=_/10,w=(-.145+g*.036)*(1-b*.82),R=.084+b*.151;x.set(new L(w,R,1),new L(0,0,-1));let M=x.intersectObject(p,!1)[0];M&&v.push(M.point.clone().addScaledVector(M.face.normal,.0015))}return new mn(new on(v),20,.0015,5,!1)});c(n,y,m,0,0,0)}for(let g of[-1,1])a(n,f,[g*.145,.075,-.01],[g*.14,-.035,.052],.014)}}function jp(n,e,t,i,s,{ball:r,box:o,cylinder:a,between:c,mesh:l,material:h,MAT:u}){let f=u.gold,d=zn("leather","#594231");for(let p of[-1,1]){c(e,f,[p*.23,.21,.15],[p*.16,-.16,.205],.009);for(let m=0;m<4;m++)r(e,f,p*.21,.14-m*.065,.185,.008);let x=t[p<0?0:1].userData.elbow;a(x,d,0,-.16,.018,.092,.11);for(let m of[-.105,-.21])a(x,f,0,m,.018,.094,.012)}if(["sejong","dangun","ahn"].includes(n))for(let p=0;p<12;p++){let x=p*Math.PI/6;c(e,n==="ahn"?d:f,[Math.sin(x)*.32,-.59,Math.cos(x)*.224],[Math.sin(x)*.335,-.635,Math.cos(x)*.237],.007)}if(n==="sejong"){for(let p=0;p<18;p++){let x=p*Math.PI/9;r(e,f,Math.cos(x)*.102,.025+Math.sin(x)*.12,.207,.008)}for(let p=0;p<9;p++){let x=p*.65;r(e,f,Math.sin(x)*(.045+p*.003),.02+Math.cos(x)*.075,.217,.015,.01,.007)}}else if(n==="dangun"){for(let p=0;p<11;p++){let x=p*Math.PI/10;r(e,u.snow,Math.cos(x)*.29,.19-Math.sin(x)*.08,.11+Math.sin(x)*.12,.06,.042,.05)}for(let p of[-1,1])r(e,u.jade,p*.09,-.29,.27,.032,.065,.025),c(e,f,[p*.09,-.2,.24],[p*.09,-.34,.26],.008)}else if(n==="ahn"){for(let p of[-1,1]){let x=o(e,d,p*.095,.075,.2,.1,.27,.025);x.rotation.z=p*.28,o(e,d,p*.17,-.13,.2,.12,.09,.025)}for(let p=0;p<3;p++)r(e,f,0,.03-p*.075,.23,.011);for(let p of[-1,1]){let x=l(e,"bevel",i,p*.085,.28,.1,.105,.15,.085);x.rotation.z=p*.32}c(e,d,[-.24,.22,.16],[.18,-.19,.21],.019)}else{let p=n==="gwak"?u.red:f;for(let x of[-1,1]){let m=o(e,p,x*.12,-.32,.235,.09,.27,.023);m.rotation.z=x*.11;for(let g=0;g<3;g++)o(e,f,x*.12,-.39-g*.025,.25,.083,.008,.008)}if(n==="gang")for(let x=0;x<5;x++){let m=x*Math.PI*2/5;r(e,f,Math.sin(m)*.06,.04+Math.cos(m)*.06,.227,.018)}if(n==="gwon")for(let x of[-1,1])o(e,d,x*.24,-.07,.16,.06,.29,.06);if(n==="eulji")for(let x of[-1,1])c(e,u.jade,[x*.24,.17,.16],[x*.04,-.17,.207],.022)}}function un(n,e,t,i,s=new Ct){let r=n.arms[e],o=n.elbows[e],a=n.wrists[e];n.torso.updateMatrix();let c=n.torso.matrix.clone().invert(),l=new L(...t).applyMatrix4(c),h=new L(...i).applyMatrix4(c),u=o.position.clone(),f=a.position.clone(),d=r.position,p=l.clone().sub(d),x=lt.clamp(p.length(),.025,u.length()+f.length()-.002),m=p.normalize();h.sub(d);let g=h.addScaledVector(m,-h.dot(m)).normalize(),y=(u.lengthSq()+x*x-f.lengthSq())/(2*x),v=Math.sqrt(Math.max(0,u.lengthSq()-y*y)),_=d.clone().addScaledVector(m,y).addScaledVector(g,v);r.quaternion.setFromUnitVectors(u.normalize(),_.clone().sub(d).normalize());let b=d.clone().addScaledVector(m,x);o.quaternion.setFromUnitVectors(f.normalize(),b.sub(_).applyQuaternion(r.quaternion.clone().invert()).normalize());let w=n.torso.quaternion.clone().multiply(r.quaternion).multiply(o.quaternion);a.quaternion.copy(w.invert().multiply(s))}function ol(n,e,t,i){let s=n.legs[e],r=n.knees[e],o=.31,a=Math.hypot(.3,.035),c=n.hips.position.y-(.064+i),l=lt.clamp(Math.hypot(c,t),.03,o+a-.001),h=Math.atan2(t,c),u=Math.acos(lt.clamp((o*o+l*l-a*a)/(2*o*l),-1,1));s.rotation.x=-(h+u);let f=Math.sin(h+u)*o,d=Math.cos(h+u)*o;r.rotation.x=Math.atan2(.035,.3)-Math.atan2(t-f,c-d)-s.rotation.x,n.ankles[e].rotation.x=-s.rotation.x-r.rotation.x}var Gv=new L(0,1,0),Vv=new L(0,0,1);function al(n,e,t=[0,0,0]){return new L(...t).applyMatrix4(e.matrixWorld).applyMatrix4(n.rig.matrixWorld.clone().invert())}function Hv(n,e,t,i){let s=n.userData,r=s.kind==="gwak",o=t?Math.sin(i*_r[s.kind].gait)*.012:0;s.torso.rotation.y=r?.1:.04,s.torso.rotation.x=t?.04:0,un(s,0,[-.12,1.2+o,.37],[-.5,.92,.15]),un(s,1,[-.12,1.235+o,.025+e*.17],[.38,1.01,.19]),n.updateMatrixWorld(!0);let a=al(s,s.weapons[0]),c=al(s,s.weapons[1]),l=new Ct().setFromUnitVectors(Vv,a.clone().sub(c).normalize()),h=s.torso.quaternion.clone().multiply(s.arms[1].quaternion).multiply(s.elbows[1].quaternion);s.wrists[1].quaternion.copy(h.invert().multiply(l)),s.weapons[1].visible=e<.72,n.updateMatrixWorld(!0);let u=al(s,s.weapons[1]);for(let f=0;f<2;f++){let d=al(s,s.weapons[0],s.weapons[0].userData.bowTips[f]),p=u.clone().sub(d),x=s.bowStrings[f];x.position.copy(d).add(u).multiplyScalar(.5),x.scale.set(.0045,p.length(),.0045),x.quaternion.setFromUnitVectors(Gv,p.normalize())}}function Ru(n,e,t,i){let s=n.userData,r=_r[s.kind],o=e*r.gait+s.phase,a=lt.clamp(i/.25,0,1),c=Math.sin(e*1.8+s.phase),l=t?1:0;s.rig.position.y=(s.mountOffset??0)+c*.006*(1-l),s.hips.position.y=t?.65:.67,s.torso.rotation.set(l*.035,Math.sin(o)*l*.035,0),s.head.rotation.set(c*.008,-s.torso.rotation.y*.45,0);for(let h=0;h<2;h++)s.legs[h].rotation.set(0,0,0),s.knees[h].rotation.set(0,0,0),ol(s,h,l*Math.sin(o+h*Math.PI)*r.stride,l*Math.max(0,Math.cos(o+h*Math.PI))*.065),s.arms[h].rotation.set(-Math.sin(o+h*Math.PI)*l*.2,0,(h?1:-1)*.07),s.arms[h].position.z=-.012,s.elbows[h].rotation.set(-.18,0,0),s.wrists[h].rotation.set(0,0,0),s.weapons[h].visible=!0;if(s.weapon==="arrow")Hv(n,a,t,e);else if(s.kind==="ahn")s.torso.rotation.y=-.08+a*.05,un(s,1,[.23,1.19+a*.025,.4-a*.075],[.39,.88,.1]),s.arms[0].rotation.x=-.26-Math.sin(o)*l*.12,s.elbows[0].rotation.x=-.63,s.head.rotation.y=.06;else if(s.weapon==="melee"){let h=Math.sin(a*Math.PI*.72),u=s.kind==="gwon";s.torso.rotation.y=(u?-.1:-.16)+(u?.23:.43)*h,s.torso.rotation.x=l*.035+h*.055,s.arms[0].rotation.x=-(u?.65:.45)-h*.12,s.arms[0].rotation.y=u?.22:.13,s.elbows[0].rotation.x=-(u?.6:.42),s.wrists[0].rotation.x=-(s.arms[0].rotation.x+s.elbows[0].rotation.x)*.8,s.arms[1].rotation.x=-.25-h*(u?1.1:1.55),s.arms[1].rotation.y=-.15-h*.6,s.elbows[1].rotation.x=-.24-h*.48,s.wrists[1].rotation.z=-h*.3,s.head.rotation.y=-s.torso.rotation.y*.65}else{let h=s.kind==="sejong",u=s.kind==="dangun",f=h?.52:u?.85:.72;s.torso.rotation.y=-a*(h?.1:.2),s.arms[0].rotation.x=h?-.67:-.23-a*.25,s.elbows[0].rotation.x=h?-.51:-.3-a*.2,s.arms[1].rotation.x=-.18-a*f,s.arms[1].rotation.y=-a*(u?.4:.22),s.elbows[1].rotation.x=-.23-a*(h?.22:.4);for(let d=0;d<2;d++)s.wrists[d].rotation.x=-(s.arms[d].rotation.x+s.elbows[d].rotation.x)*(h?.95:.8);s.head.rotation.x=-a*.035}}function Kp(n,e,t,i,{ball:s,box:r,cylinder:o,cone:a,between:c,mesh:l,material:h,MAT:u}){let f=ni[e],d=f.helmet,p=h(f.accent,{metalness:.35,roughness:.56});if(["jingasa","flat-hat"].includes(d)){let v=d==="jingasa";a(n,i,0,v?.215:.19,-.025,v?.34:.29,v?.23:.13),o(n,p,0,v?.1:.13,-.025,v?.325:.28,.021);for(let _=0;_<8;_++){let b=_*Math.PI/4;c(n,u.rope,[0,v?.33:.255,-.025],[Math.sin(b)*(v?.32:.27),v?.105:.135,Math.cos(b)*(v?.32:.27)-.025],.004)}for(let _ of[-1,1])c(n,u.rope,[_*.17,.1,.02],[0,-.16,.105],.006);return}if(d==="headband"){o(n,i,0,.085,-.025,.194,.048);for(let v of[-1,1]){let _=r(n,i,v*.055,0,-.205,.045,.23,.025);_.rotation.z=v*.25}e==="drum"&&r(n,u.rope,0,.085,.174,.13,.035,.012);return}if(d==="hood"){s(n,i,0,.075,-.065,.224,.226,.185),l(n,"bevel",i,0,-.105,.158,.31,.14,.057);for(let v of[-1,1])r(n,i,v*.19,-.015,.06,.045,.23,.15);for(let v of[-1,1]){let _=r(n,i,v*.05,-.03,-.21,.047,.26,.026);_.rotation.z=v*.3}return}if(d==="eboshi"){l(n,Ft("enemy-eboshi",[[.08,.19,.16,-.025],[.18,.177,.15,-.04],[.39,.12,.1,-.07],[.55,.07,.055,-.1]],{segments:20}),u.black,0,0,0),r(n,p,0,.28,.1,.042,.28,.022);for(let v of[-1,1])r(n,i,v*.17,-.02,-.12,.065,.36,.025);return}let x=d==="tall-cone",m=d==="bowl",g=x?.63:.27;l(n,Ft(`enemy-helm-${d}`,[[.057,.212,.189,-.022],[.11,m?.29:.218,m?.245:.197,-.03],[x?.34:.205,m?.27:.17,m?.22:.153,-.04],[g,.025,.028,-.048]],{segments:24}),t,0,0,0),o(n,p,0,.072,-.022,m?.28:.215,.025);for(let v of[-1,1])for(let _=0;_<3;_++){let b=l(n,"bevel",t,v*(.199+_*.006),.014-_*.056,-.075,.055,.07,.23);b.rotation.z=-v*.12,r(n,p,v*(.229+_*.006),.03-_*.056,-.075,.009,.008,.205)}let y=(v,_,b=.023)=>l(n,new mn(new on(_.map(w=>new L(...w))),16,b,5,!1),p,0,0,0);if(["crescent","split-crescent","wide-crescent"].includes(d)){let v=d==="wide-crescent"?.43:d==="split-crescent"?.34:.29;for(let _ of[-1,1])y(d,[[_*.035,.19,.16],[_*v*.6,.2,.17],[_*v,.43,.15]],d==="wide-crescent"?.03:.024);d==="split-crescent"&&r(n,p,0,.31,.17,.026,.22,.024)}else if(["horns","great-horns","antlers"].includes(d)){let v=d==="great-horns",_=d==="antlers";for(let b of[-1,1])if(y(d,[[b*.13,.19,.035],[b*(v?.35:.25),.32,.015],[b*(v?.43:.31),v?.62:.48,-.025]],v?.035:.023),_)for(let w=0;w<2;w++)c(n,p,[b*(.2+w*.045),.29+w*.07,.02],[b*(.36+w*.05),.37+w*.1,.03],.018)}else if(d==="visor"){l(n,"bevel",t,0,-.095,.16,.31,.14,.065);for(let v of[-.065,-.105,-.145])r(n,u.black,0,v,.198,.22,.012,.009);r(n,p,0,.22,.17,.08,.19,.025)}else if(d==="banner"){l(n,"bevel",p,0,.34,.12,.09,.43,.04);for(let v of[-1,1])r(n,t,v*.085,.26,.08,.035,.24,.04)}else if(d==="swept")for(let v of[-1,1])y(d,[[v*.12,.18,.05],[v*.24,.3,-.1],[v*.19,.34,-.3]],.026);else if(d==="bowl")s(n,p,0,.19,.24,.055,.055,.017);else if(d==="stacked")for(let v=0;v<3;v++)o(n,p,0,.25+v*.095,.12,.11-v*.023,.029).rotation.x=Math.PI/2;else if(d==="iron-wings")for(let v of[-1,1]){let _=l(n,"bevel",t,v*.27,.28,.025,.24,.29,.06);_.rotation.z=-v*.35,c(n,p,[v*.17,.18,.065],[v*.36,.44,.065],.012)}else if(d==="wave")for(let v=0;v<5;v++)y(d,[[(v-2)*.045,.19,.13],[(v-2)*.085,.35,.12],[(v-2)*.12+.1,.46-v*.015,.1]],.017);else if(d==="sunburst"){for(let v=0;v<13;v++){let _=(v/12-.5)*Math.PI*1.35;c(n,p,[Math.sin(_)*.19,.15+Math.cos(_)*.17,-.07],[Math.sin(_)*.55,.15+Math.cos(_)*.55,-.09],.021)}o(n,p,0,.18,.2,.105,.04).rotation.x=Math.PI/2}}function Jp(n,e,t,i,{ball:s,box:r,between:o,mesh:a,cylinder:c,material:l,MAT:h}){let u=ni[n],f=l(u.accent,{metalness:.35,roughness:.56});if(["teppo","ashigaru","scout"].includes(n)&&(o(e,h.woodDark,[-.23,.23,.16],[.17,-.23,.2],.021),a(e,"bevel",h.woodDark,.22,-.21,.1,.14,.14,.1),n==="teppo"))for(let d=0;d<4;d++)r(e,h.rope,-.12+d*.065,.07-d*.053,.208,.04,.065,.035);if(n==="onmyoji")for(let d of[-1,1]){r(e,f,d*.12,-.15,.215,.085,.66,.018);for(let p=0;p<4;p++)r(e,h.black,d*.12,.08-p*.12,.228,.035,.016,.007)}if(n==="ninja"){o(e,h.woodDark,[-.22,.22,.16],[.18,-.22,.205],.022);for(let d of[-1,1])a(e,"bevel",i,d*.19,-.1,.12,.105,.23,.1)}if(n==="armored"||n==="kuki")for(let d of[-1,1]){a(e,"bevel",i,d*.27,.12,.11,.12,.32,.15);for(let p=0;p<3;p++)r(e,f,d*.27,.22-p*.095,.19,.1,.015,.015)}if(u.scale){let d=n==="hideyoshi"?h.gold:f;for(let p of[-1,1])o(e,d,[p*.24,.21,.17],[p*.15,-.17,.216],.012);if(s(e,d,0,.03,.22,.065,.065,.018),["ishida","hideyoshi"].includes(n)){let p=n==="ishida"?3:1;for(let x=0;x<p;x++){let m=(x-(p-1)/2)*.19;o(e,h.woodDark,[m,-.22,-.27],[m,1.08,-.27],.012),r(e,t,m,.8,-.27,p===1?.27:.15,.44,.025),r(e,d,m,.8,-.25,.045,.21,.013)}if(n==="hideyoshi")for(let x of[-1,1])s(e,h.gold,x*.21,.37,-.28,.07,.1,.06),s(e,h.gold,x*.21,.5,-.28,.045,.06,.045)}}}function Qp(n,e,t,i,{ball:s,box:r,cylinder:o,cone:a,between:c,mesh:l,material:h,MAT:u}){let f=ni[n],d=f.weapon,p=h(f.accent,{metalness:.35,roughness:.56}),x=t[1],m=t[0];for(let y of t)y.position.set(0,0,0);let g=(y,v=1,_=!1)=>{let b=l(y,Uo(),u.steel,0,-.09,0,1,v,1);b.rotation.z=_?-.19:-.06,c(y,u.woodDark,[0,-.075,0],[0,.075,0],.024),r(y,p,0,-.09,0,.13,.025,.055),s(y,p,0,.082,0,.029)};if(["yari","naginata"].includes(d)){c(x,u.wood,[0,-.66,0],[0,.91,0],.019);for(let y of[-.12,.12,.77])o(x,p,0,y,0,.026,.04);if(d==="yari")a(x,u.steel,0,1.06,0,.049,.3);else{let y=l(x,Uo(),u.steel,0,.87,0,1.2,.65,1);y.rotation.z=Math.PI-.18}x.userData.support=[0,.23,0]}else if(d==="rifle"){o(x,u.steel,0,.015,.35,.021,.66).rotation.x=Math.PI/2,l(x,"bevel",u.wood,0,-.024,.21,.07,.073,.54);let y=l(x,"bevel",u.woodDark,0,-.045,-.145,.08,.13,.23);y.rotation.x=-.14;for(let v of[.08,.39,.58])o(x,p,0,.015,v,.025,.03).rotation.x=Math.PI/2;r(x,u.black,0,.044,.58,.013,.018,.025),c(x,u.steel,[.044,.02,.03],[.044,.075,.075],.009),x.userData.muzzle=new L(0,.015,.685),x.userData.support=[0,-.02,.24]}else if(d==="ritual"){c(x,u.wood,[0,-.75,0],[0,.76,0],.026);let y=h("#c5d9b7",{emissive:"#628d7a",emissiveIntensity:.7});s(x,p,0,.79,0,.1),s(x,y,0,.85,0,.065),x.userData.muzzle=new L(0,.85,0);for(let v of[-1,1]){r(x,u.rope,v*.11,.58,0,.095,.31,.018);for(let _=0;_<3;_++)r(x,u.red,v*.11,.68-_*.07,.013,.05,.011,.007)}r(m,u.rope,0,.08,.04,.15,.28,.018);for(let v=0;v<4;v++)r(m,u.red,0,.18-v*.055,.054,.06,.012,.008)}else if(d==="drum"){o(e,u.wood,0,-.075,.36,.25,.3).rotation.x=Math.PI/2;for(let y of[.2,.52]){o(e,u.rope,0,-.075,y,.251,.024).rotation.x=Math.PI/2;for(let v=0;v<10;v++){let _=v*Math.PI/5;s(e,p,Math.sin(_)*.23,-.075+Math.cos(_)*.23,y,.012)}}for(let y=0;y<10;y++){let v=y*Math.PI/5,_=v+Math.PI/10;c(e,u.rope,[Math.sin(v)*.255,-.075+Math.cos(v)*.255,.21],[Math.sin(_)*.255,-.075+Math.cos(_)*.255,.51],.006)}for(let y of[-1,1])c(e,u.woodDark,[y*.2,.25,.11],[y*.2,-.01,.29],.016);for(let y of t)c(y,u.wood,[0,0,0],[0,0,.3],.014),s(y,u.rope,0,0,.32,.025)}else if(["axe","mace"].includes(d))if(c(x,u.woodDark,[0,.08,0],[0,-.6,0],.028),d==="axe")l(x,"bevel",u.steel,.07,-.47,0,.29,.24,.065),r(x,p,0,-.47,0,.075,.29,.08);else{s(x,u.steel,0,-.51,0,.115,.16,.115);for(let y=0;y<6;y++){let v=y*Math.PI/3;c(x,p,[Math.sin(v)*.08,-.64,Math.cos(v)*.08],[Math.sin(v)*.13,-.41,Math.cos(v)*.13],.018)}}else g(x,d==="shortblade"?.52:d==="kunai"?.34:d==="nodachi"?1.35:1,d==="cutlass");if((d==="kunai"||f.offhand==="blade")&&g(m,d==="kunai"?.34:.67,!0),d==="axe"||f.offhand==="shield"){l(m,"bevel",i,0,-.06,.1,.43,.57,.09);for(let y of[-1,1])r(m,p,y*.19,-.06,.155,.022,.55,.015);for(let y of[-.31,.19])r(m,p,0,y,.157,.4,.026,.017);s(m,p,0,-.06,.167,.068,.068,.03)}if(f.offhand==="fan"){let y=new $n;y.moveTo(0,0);for(let v=0;v<=16;v++){let _=.23+v/16*(Math.PI-.46);y.lineTo(Math.cos(_)*.32,Math.sin(_)*.32)}y.closePath(),l(m,new li(y,{depth:.014,bevelEnabled:!1,curveSegments:8}),p,0,0,.035);for(let v=0;v<7;v++){let _=.23+v/6*(Math.PI-.46);c(m,u.woodDark,[0,0,.055],[Math.cos(_)*.3,Math.sin(_)*.3,.055],.005)}c(m,u.woodDark,[0,-.07,.04],[0,.06,.04],.016)}}var Oo=new L(1,0,0),Wv=new L(0,0,1);function em(n,e){let t=n.userData,i=t.weapons[1];n.updateMatrixWorld(!0);let s=new L(...i.userData.support).applyMatrix4(i.matrixWorld).applyMatrix4(t.rig.matrixWorld.clone().invert());un(t,0,s.toArray(),[-.44,1.02,.19],e)}function Xv(n,e,t){if(n.horseLegs)for(let i=0;i<4;i++){let s=n.horseLegs[i],r=n.horseKnees[i],o=n.horseHooves[i],a=e+(i===0||i===3?0:Math.PI),c=t?Math.sin(a)*.15:0,l=t?Math.max(0,Math.cos(a))*.075:0,h=r.position.length(),u=o.position.length(),f=s.position.y-(.058+l),d=lt.clamp(Math.hypot(f,c),.03,h+u-.001),p=Math.atan2(c,f),x=Math.acos(lt.clamp((h*h+d*d-u*u)/(2*h*d),-1,1));s.rotation.set(-(p+x),0,0);let m=Math.sin(p+x)*h,g=Math.cos(p+x)*h;r.rotation.set(Math.atan2(.02,.27)-Math.atan2(c-m,f-g)-s.rotation.x,0,0),o.rotation.set(-s.rotation.x-r.rotation.x,0,0)}}function qv(n){let e=n.userData;if(!e.horseReins)return;n.updateMatrixWorld(!0);let t=n.matrixWorld.clone().invert(),i=e.wrists[0].getWorldPosition(new L).applyMatrix4(t);for(let s=0;s<2;s++){let r=new L((s?1:-1)*.11,1.1,.65),o=i.clone().sub(r),a=e.horseReins[s];a.position.copy(r).add(i).multiplyScalar(.5),a.scale.set(.007,o.length(),.007),a.quaternion.setFromUnitVectors(new L(0,1,0),o.normalize())}}function Iu(n,e,t,i){let s=n.userData,r=ni[s.kind];if(!r||s.vehicle)return;let o=e*r.gait+s.phase,a=lt.clamp(i/.25,0,1),c=Math.sin(a*Math.PI*.72),l=t?1:0,h=Math.sin(e*1.8+s.phase);s.rig.position.y=(s.mountOffset??0)+h*.005*(1-l),s.hips.position.y=t?.65:.67,s.torso.rotation.set(l*(s.kind==="ninja"?.13:.025),Math.sin(o)*l*.025,0),s.head.rotation.set(h*.008,-s.torso.rotation.y*.4,0);for(let u=0;u<2;u++)s.legs[u].rotation.set(0,0,0),s.knees[u].rotation.set(0,0,0),s.ankles[u].rotation.set(0,0,0),s.kind==="cavalry"?(s.legs[u].rotation.set(-.72,0,(u?1:-1)*.36),s.knees[u].rotation.x=.94,s.ankles[u].rotation.x=-.22):ol(s,u,l*Math.sin(o+u*Math.PI)*r.stride,l*Math.max(0,Math.cos(o+u*Math.PI))*.06),s.arms[u].rotation.set(-Math.sin(o+u*Math.PI)*l*.18,0,(u?1:-1)*.07),s.arms[u].position.z=-.012,s.elbows[u].rotation.set(-.23,0,0),s.wrists[u].rotation.set(0,0,0);if(r.weapon==="rifle"){s.torso.rotation.y=.12;let u=new Ct().setFromAxisAngle(Oo,-.025-a*.13);un(s,1,[-.1,1.2+a*.013,.1-a*.045],[.37,.94,.08],u),em(n,u),s.head.rotation.y=-.1}else if(["yari","naginata"].includes(r.weapon)){s.torso.rotation.y=-.08+c*.15;let u=new Ct().setFromAxisAngle(Oo,.38+c*.72);un(s,1,[-.08,1.04,.14+c*.09],[.42,.88,.06],u),em(n,u)}else if(r.weapon==="ritual")un(s,1,[.25,1.1+a*.12,.12],[.44,.93,.1],new Ct().setFromAxisAngle(Oo,-a*.18)),un(s,0,[-.2,1.19+a*.08,.22],[-.44,.98,.1],new Ct().setFromAxisAngle(Oo,-.22-a*.42)),s.torso.rotation.y=-a*.12;else if(r.weapon==="drum")for(let u=0;u<2;u++){let f=Math.sin(e*8.8+s.phase+u*Math.PI),d=(f+1)*.045,p=[(u?1:-1)*.16,1.065+d,.235],x=new L((u?1:-1)*.12,.94,.54).sub(new L(...p)).normalize();un(s,u,p,[(u?1:-1)*.43,.95,.1],new Ct().setFromUnitVectors(Wv,x))}else{let u=["axe","mace","nodachi"].includes(r.weapon),f=r.weapon==="kunai"||r.offhand==="blade";s.torso.rotation.y=-.08+c*(u?.48:.32),s.torso.rotation.x+=c*.04;let d=new Ct().setFromEuler(new Kt(-.18-c*(u?1.8:1.55),-.1-c*.34,-.14-c*.25));un(s,1,[.28,1.09+c*.05,.18+c*.13],[.49,.92,.06],d),r.offhand==="shield"||r.weapon==="axe"?un(s,0,[-.25,1.1,.27],[-.46,.97,.1],new Ct().setFromAxisAngle(Oo,-.1)):r.offhand==="fan"?un(s,0,[-.29,1.04+a*.03,.22],[-.46,.94,.08],new Ct().setFromEuler(new Kt(-.17-a*.2,0,.35))):f&&un(s,0,[-.28,1.08+c*.1,.2],[-.47,.93,.08],new Ct().setFromEuler(new Kt(-.2-c*1.2,.12+c*.4,.16))),s.head.rotation.y=-s.torso.rotation.y*.6}Xv(s,o,t),qv(n)}var Pu=new Map,Du=new Map,Lu=new Map;function br(n,e="cloth"){let t=n+e;return Lu.has(t)||Lu.set(t,zn(e==="metal"?"armor":e==="wood"?"leather":"cloth",n,e==="cape"?{side:Nn}:{})),Lu.get(t)}function ft(n,e={}){let t=n+JSON.stringify(e);return Pu.has(t)||Pu.set(t,new an({color:n,roughness:.86,...e})),Pu.get(t)}function Yv(n){return Du.has(n)||Du.set(n,n==="sphere"?new ro(1,12,8):n==="cylinder"?new Zn(1,1,1,10):n==="cone"?new Xr(1,1,12):n==="rock"?new Yr(1,0):n==="foliage"?new io(1,1):n==="bevel"?new el(1,1,1,1,.055):new Ln(1,1,1)),Du.get(n)}function ce(n,e,t,i,s,r,o=1,a=1,c=1){let l=typeof e=="string"?Yv(e):e,h=new ut(e==="bevel"&&t.userData.characterSurface==="armor"?Yp(l):l,t);return h.position.set(i,s,r),h.scale.set(o,a,c),h.castShadow=h.receiveShadow=!0,n.add(h),h}var ae=(n,e,t,i,s,r,o,a)=>ce(n,"box",e,t,i,s,r,o,a),Ue=(n,e,t,i,s,r,o=r,a=r)=>ce(n,"sphere",e,t,i,s,r,o,a),We=(n,e,t,i,s,r,o)=>ce(n,"cylinder",e,t,i,s,r,o,r),Dt=(n,e,t,i,s,r,o)=>ce(n,"cone",e,t,i,s,r,o,r);function Ie(n,e,t,i,s=.035){let r=new L(...t),o=new L(...i),a=o.clone().sub(r),c=We(n,e,...r.clone().add(o).multiplyScalar(.5).toArray(),s,a.length());return c.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),c}var E={snow:zt("#d6e2ee","snow"),snowShade:zt("#afc6db","snow"),stone:zt("#8995a0","stone",{vertexColors:!0}),stoneDark:zt("#576677","stone",{vertexColors:!0}),wood:zt("#795b3c","wood"),woodDark:zt("#44372e","wood"),plaster:zt("#b9b4a1","plaster"),roof:zt("#344751","tile",{roughness:.74,bumpScale:.018}),red:zt("#873f39","cloth"),blue:zt("#293d53","cloth"),gold:zt("#c0a06b","metal",{metalness:.68,roughness:.36}),steel:zt("#7b8b93","metal",{metalness:.78,roughness:.32}),black:zt("#25323b","metal",{metalness:.45}),skin:ft("#d5a078",{roughness:.72}),pine:ft("#334e55"),pineDark:ft("#243b48"),rope:ft("#a99164"),window:ft("#dec08c",{emissive:"#ffa34b",emissiveIntensity:.85}),ice:ft("#b9d4df",{roughness:.28,metalness:.12}),roofSnow:zt("#d6e2ee","roof-snow",{alphaTest:.5}),jade:zt("#426c61","wood"),heroCloth:zn("cloth","#2d5873"),heroArmor:zn("armor","#435462"),samuraiArmor:zt("#633f35","metal",{metalness:.3}),footCloth:zt("#8c7854","cloth"),footArmor:zt("#3e514c","metal",{metalness:.2}),straw:zt("#ad925f","cloth")};function At(n){n.updateMatrixWorld(!0);let e=new Map,t=n.matrixWorld.clone().invert();n.traverse(i=>{if(!i.isMesh)return;let s=i.geometry.clone().applyMatrix4(new _t().multiplyMatrices(t,i.matrixWorld));if(s.getAttribute("uv")||s.setAttribute("uv",new kt(new Float32Array(s.getAttribute("position").count*2),2)),!s.getAttribute("color")){let r=new Float32Array(s.getAttribute("position").count*3);r.fill(1),s.setAttribute("color",new kt(r,3))}e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(s)}),n.clear();for(let[i,s]of e){let r=xu(s.map(a=>a.index?a.toNonIndexed():a),!1);for(let a of s)a.dispose();if(!r)continue;r.userData.owned3d=!0;let o=new ut(r,i);o.castShadow=o.receiveShadow=!i.userData.fixedArt,n.add(o)}return n}var Fo=(n,e)=>lt.clamp(Math.min(n,e)*.27,.26,.68);function tm(n,e,t,i=.085){let s=new jn(n,e,20,16);s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let m=0;m<r.count;m++)r.setY(m,Bo(r.getX(m),r.getZ(m),n,e,t));if(s.computeVertexNormals(),!i)return s;let o=s.clone(),a=o.attributes.position;for(let m=0;m<a.count;m++)a.setY(m,a.getY(m)-i);let c=o.index.array;for(let m=0;m<c.length;m+=3)[c[m+1],c[m+2]]=[c[m+2],c[m+1]];o.computeVertexNormals();let l=[],h=[],u=(m,g,y)=>{l.push(...m,...g,...y);for(let v of[m,g,y])h.push(v[0],v[2])};for(let[m,g,y]of[[[-n/2,-e/2],[n/2,-e/2],20],[[n/2,-e/2],[n/2,e/2],16],[[n/2,e/2],[-n/2,e/2],20],[[-n/2,e/2],[-n/2,-e/2],16]])for(let v=0;v<y;v++){let _=T=>{let N=lt.lerp(m[0],g[0],T),U=lt.lerp(m[1],g[1],T);return[N,Bo(N,U,n,e,t),U]},b=_(v/y),w=_((v+1)/y),R=[b[0],b[1]-i,b[2]],M=[w[0],w[1]-i,w[2]];u(b,w,R),u(w,M,R)}let f=new ht;f.setAttribute("position",new De(l,3)),f.setAttribute("uv",new De(h,2)),f.computeVertexNormals();let d=s.toNonIndexed(),p=o.toNonIndexed(),x=xu([d,p,f],!1);for(let m of[s,o,d,p,f])m.dispose();return x}function Bo(n,e,t,i,s=Fo(t,i)){let r=Math.min(1,Math.abs(n)/(t/2)),o=Math.min(1,Math.abs(e)/(i/2)),a=Math.max(r,o);return Math.min(s*Math.pow(1-o,.82),s*1.8*Math.pow(1-r,.8))+.105*Math.pow(Math.max(0,(a-.72)/.28),2)}function hn(n,e,t,i){let s=Fo(e,t),r=tm(e,t,s);ce(n,r,E.roof,0,i,0);for(let a=-e/2+.12;a<e/2-.08;a+=.19)for(let c of[-1,1]){let l=[];for(let h=0;h<=8;h++){let u=c*(.03+(t/2-.07)*h/8);l.push(new L(a,i+Bo(a,u,e,t)+.012,u))}ce(n,new mn(new on(l),10,.022,5,!1),E.roof,0,0,0)}let o=tm(e*.985,t*.98,s,0);ce(n,o,E.roofSnow,0,i+.038,0),Ie(n,E.roof,[-e*.26,i+s+.045,0],[e*.26,i+s+.045,0],.056),Ie(n,E.snow,[-e*.26,i+s+.085,0],[e*.26,i+s+.085,0],.044);for(let a of[-1,1])Ie(n,E.roof,[a*e*.26,i+s+.045,0],[a*e*.35,i+s+.11,0],.044),Ue(n,E.roof,a*e*.35,i+s+.115,0,.049);for(let a of[-1,1])for(let c=-e/2+.09;c<e/2;c+=.18){let l=We(n,E.roof,c,i+.075,a*(t/2-.018),.035,.12);l.rotation.x=Math.PI/2,Ue(n,E.stoneDark,c,i+.075,a*(t/2+.045),.019,.019,.005)}for(let a of[-1,1]){let c=[];for(let h=0;h<=16;h++){let u=-e/2+h*e/16;c.push(new L(u,i+Bo(u,a*t*.48,e,t)-.105,a*t*.48))}ce(n,new mn(new on(c),16,.045,5,!1),E.woodDark,0,0,0);let l=[];for(let h=0;h<=12;h++){let u=-t/2+h*t/12;l.push(new L(a*e*.48,i+Bo(a*e*.48,u,e,t)-.105,u))}ce(n,new mn(new on(l),12,.04,5,!1),E.woodDark,0,0,0)}for(let a of[-1,1])for(let c=-e/2+.2;c<e/2;c+=.39){let l=ae(n,E.jade,c,i-.065,a*(t/2-.15),.09,.08,.46);if(l.rotation.x=a*.12,Math.sin(c*31+a*7)>.15){let h=Dt(n,E.ice,c,i-.12,a*(t/2-.02),.025,.12+.09*Math.abs(Math.sin(c*12)));h.rotation.z=Math.PI}}}function ll(n,e,t){let i=Math.max(.018,Math.min(e,t)*.065),s=Math.max(3,Math.round(e/.12));ce(n,"bevel",E.woodDark,0,0,0,e,t,.075),ae(n,E.window,0,t*.04,.041,e-i*3,t*.77,.012);for(let r=0;r<=s;r++)ae(n,E.wood,(r/s-.5)*(e-i*2),t*.04,.06,i*.35,t*.79,.025);for(let r=0;r<5;r++)ae(n,E.wood,0,t*(-.33+r*.18),.064,e-i*2,i*.35,.027);for(let r of[-1,1])ce(n,"bevel",E.wood,r*(e/2-i*.5),0,.063,i,t,.045),ce(n,"bevel",E.wood,0,r*(t/2-i*.5),.063,e,i,.045);ae(n,E.woodDark,0,-t*.405,.064,e-i*2,t*.12,.035)}function nm(n,e,t,i,s=.24,r=!1){ce(n,"bevel",E.red,e,t-.08,i,s*.58,.12,s*.52),ce(n,"bevel",E.jade,e,t-.018,i,s,.05,s*.67),ce(n,"bevel",r?E.gold:E.red,e,t+.032,i,s*.75,.045,s),Ue(n,r?E.gold:E.rope,e,t-.052,i+s*.28,.018,.012,.009)}function im(n,e,t,i,s=0){ae(n,E.stoneDark,0,s+i/2,0,e,i,t);let r=Math.max(1,Math.ceil(i/.2)),o=i/r;for(let[a,c,l]of[[e,t/2,0],[e,t/2,Math.PI],[t,e/2,Math.PI/2],[t,e/2,-Math.PI/2]]){let h=new Oe;h.rotation.y=l,h.position.set(Math.sin(l)*c,s,Math.cos(l)*c),n.add(h);let u=a/Math.max(2,Math.ceil(a/.32));for(let f=0;f<r;f++)for(let d=-a/2-u*(f%2)*.5;d<a/2-.003;d+=u){let p=Math.max(-a/2,d),x=Math.min(a/2,d+u);x-p<.025||ce(h,"bevel",(f+Math.round((d+a)*17))%4?E.stone:E.stoneDark,(p+x)/2,(f+.5)*o,.015,x-p-.012,o-.012,.075)}}ce(n,"bevel",E.stone,0,s+i-.025,0,e+.065,.07,t+.065)}function Nu(n=3.2,e=2.35){let t=new Oe;im(t,n+.28,e+.35,.24);for(let i=0;i<3;i++)ce(t,"bevel",E.stone,0,.04+i*.065,e/2+.45-i*.15,1.18,.08+i*.13,.33);ae(t,E.plaster,0,.8,0,n-.15,1.28,e-.1),ce(t,"bevel",E.woodDark,0,.29,0,n+.18,.14,e+.18);for(let i=-n/2+.08;i<n/2;i+=.17)ae(t,E.wood,i,.366,e/2-.13,.16,.024,.42);for(let i of[-n/2,0,n/2])for(let s of[-e/2,e/2])We(t,E.stone,i,.4,s,.11,.12),We(t,E.woodDark,i,.94,s,.064,1.13);for(let i of[-1,1]){for(let s=-n*.33;s<=n*.34;s+=n*.33){let r=new Oe;r.position.set(s,.93,i*(e/2+.015)),r.rotation.y=i<0?Math.PI:0,t.add(r),ll(r,n*.275,.83),We(r,E.gold,n*.09,-.06,.096,.022,.018).rotation.x=Math.PI/2}ae(t,E.woodDark,0,1.48,i*e/2,n,.12,.12),ae(t,E.wood,0,1.36,i*e/2,n,.055,.16);for(let s of[-n/2,0,n/2])nm(t,s,1.45,i*e/2,.38),Ie(t,E.woodDark,[s,1.15,i*e/2],[s+.18,1.4,i*(e/2+.12)],.035)}hn(t,n+.75,e+.75,1.54);for(let i of[-1,1]){ae(t,E.woodDark,i*n/2,.85,0,.06,1.2,.07),ae(t,E.woodDark,i*n/2,1.35,0,.07,.09,e);for(let s of[-e*.27,e*.27]){let r=new Oe;r.position.set(i*(n/2+.01),.93,s),r.rotation.y=i*Math.PI/2,t.add(r),ll(r,e*.33,.68)}}return t}function hl(n=3.4,e=0){let t=new Oe;ce(t,new Zn(.025,.11,n*.88,7),E.woodDark,0,n*.44,0);for(let i=0;i<5;i++){let s=n*(.29+i*.13),r=n*(.34-i*.052),o=i<3?5:4;for(let a=0;a<o;a++){let c=e+a*Math.PI*2/o+i*1.7,l=r*(.85+.16*Math.sin(e*7+a*13+i)),h=new Oe;h.position.y=s+.035*Math.sin(a*7+e),h.rotation.y=c,t.add(h),Ie(h,E.woodDark,[0,-.04,0],[0,.08,l*.92],.022),ce(h,cl(l,l*.54,e+a*2+i*11),i%2?E.pine:E.pineDark,0,0,0),ce(h,cl(l*.84,l*.4,e+a*2+i*11,!0),E.snow,0,.055,l*.035);for(let u of[-1,1]){let f=ce(h,cl(l*.48,l*.22,e+a),E.pine,u*l*.13,.025,l*.44);f.rotation.y=u*.75;let d=ce(h,cl(l*.34,l*.16,e+a,!0),E.snow,u*l*.13,.063,l*.44);d.rotation.y=u*.75}}}return Dt(t,E.pine,0,n*.92,0,n*.055,n*.22),Dt(t,E.snow,0,n*.96,0,n*.032,n*.17),t}function cl(n,e,t,i=!1){let s=[],r=[],a=(h,u,f=!0)=>{let d=h/6,p=Math.pow(Math.max(0,Math.sin(d*Math.PI)),.62),x=h%2?.76:1;return[u*e*p*x*.5,Math.sin(d*Math.PI)*e*(u===0?.23:-.06)+d*n*.11+(f?0:-.045),d*n]},c=(h,u,f)=>{s.push(...h,...u,...f);for(let d of[h,u,f])r.push(d[0]/e+.5,d[2]/n)};for(let h=0;h<6;h++)for(let u of[-1,1]){let f=a(h,0),d=a(h,u),p=a(h+1,u),x=a(h+1,0);if(u<0?(c(f,d,p),c(f,p,x)):(c(f,p,d),c(f,x,p)),!i){let m=a(h,0,!1),g=a(h+1,0,!1);u<0?(c(d,m,g),c(d,g,p)):(c(d,g,m),c(d,p,g))}}let l=new ht;return l.setAttribute("position",new De(s,3)),l.setAttribute("uv",new De(r,2)),l.computeVertexNormals(),l}function ko(n=1,e=0){let t=new Oe,i=[],s=[],r=[],o=[],a=[],c=[],l=24,h=[.42,.52,.58,.59,.57,.52,.44,.34,.21,.1],u=[0,.08,.2,.34,.49,.64,.77,.88,.96,1];for(let b=0;b<h.length;b++){let w=[];for(let R=0;R<l;R++){let M=R*Math.PI*2/l+e*.7,T=h[b]*(1+.065*Math.sin(M*3+e*13)+.045*Math.sin(M*5+b*.35+e));w.push(new L(Math.cos(M)*T+Math.sin(b*.5+e)*.035,u[b]+Math.sin(M*3+e*7)*.018+Math.sin(M*5+b*.3)*.012,Math.sin(M)*T*.8))}c.push(w)}let f=(b,w,R)=>{let M=w.clone().sub(b).cross(R.clone().sub(b)).normalize(),T=[b,w,R],N=T.map(D=>D.y>1&&Math.hypot(D.x,D.z)<.05),U=T.map(D=>(Math.atan2(D.z,D.x)+Math.PI)/(Math.PI*2)),z=U.filter((D,G)=>!N[G]),F=Math.max(...z)-Math.min(...z)>.5,C=U.map(D=>D+(F&&D<.5?1:0));for(let D=0;D<3;D++)N[D]&&(C[D]=(C[(D+1)%3]+C[(D+2)%3])/2);for(let D=0;D<3;D++){let G=T[D],O=.95+.04*Math.sin(G.x*7+G.y*4+G.z*5+e);i.push(...G.toArray()),r.push(O,O,O),o.push(C[D]*2,G.y*1.4)}if(M.y>.38&&(b.y+w.y+R.y)/3>.27)for(let D of[b,w,R])s.push(D.x,D.y+.025,D.z),a.push(D.x,D.z)};for(let b=0;b<c.length-1;b++)for(let w=0;w<l;w++){let R=(w+1)%l;f(c[b][w],c[b+1][w],c[b+1][R]),f(c[b][w],c[b+1][R],c[b][R])}let d=new L(Math.sin(e)*.035,1.025,0);for(let b=0;b<l;b++)f(c.at(-1)[b],d,c.at(-1)[(b+1)%l]);let p=new ht;p.setAttribute("position",new De(i,3)),p.setAttribute("color",new De(r,3)),p.setAttribute("uv",new De(o,2)),p.computeVertexNormals();let x=new Map,m=p.attributes.position,g=p.attributes.normal,y=b=>[m.getX(b),m.getY(b),m.getZ(b)].map(w=>w.toFixed(5)).join(",");for(let b=0;b<m.count;b++){let w=y(b);x.has(w)||x.set(w,new L),x.get(w).add(new L().fromBufferAttribute(g,b))}for(let b=0;b<m.count;b++){let w=new L().fromBufferAttribute(g,b).lerp(x.get(y(b)).clone().normalize(),.92).normalize();g.setXYZ(b,w.x,w.y,w.z)}ce(t,p,e%2>1?E.stoneDark:E.stone,0,0,0,n,n,n);let v=new ht;v.setAttribute("position",new De(s,3)),v.setAttribute("uv",new De(a,2));let _=Vp(v);return _.computeVertexNormals(),v.dispose(),ce(t,_,E.snow,0,0,0,n,n,n),t}function sm(){let n=new Oe;for(let e=0;e<3;e++){let t=Ue(n,ft(e%2?"#4b5258":"#5e4940"),e*.35,.23,e%2*.2,.22,.29,.22);We(n,E.woodDark,e*.35,.52,e%2*.2,.14,.04),Ue(n,E.snow,e*.35,.55,e%2*.2,.145,.02,.145),t.rotation.y=e}ae(n,E.wood,-.42,.25,.1,.48,.5,.5);for(let e of[.1,.4])ae(n,E.woodDark,-.42,e,.36,.5,.035,.025);return ae(n,E.snow,-.42,.51,.1,.5,.04,.53),n}function Uu(n=3,e=1.6){let t=new Oe;ae(t,E.stoneDark,0,e/2,0,n,e,.65);for(let i=0;i<Math.ceil(e/.25);i++)for(let s=-n/2+.16;s<n/2;s+=.42){let r=Math.min(n/2-.1,s+i%2*.18);for(let o of[-1,1])ce(t,"bevel",(i+Math.round(s*10))%3?E.stone:E.stoneDark,r,i*.25+.12,o*.335,.38,.225,.1)}for(let i=-n/2+.2;i<n/2;i+=.65)ae(t,E.stone,i,e+.13,0,.4,.3,.7),ae(t,E.snow,i,e+.3,0,.46,.05,.76);return ae(t,E.snow,0,e+.025,0,n,.06,.69),t}function rm(){let n=new Oe;for(let s of[-1,1]){let r=Uu(1.38,2.3);r.position.x=s*1.53,n.add(r)}ae(n,E.stone,0,2.1,0,2,.65,.85);let e=new $n;e.moveTo(-.8,0),e.lineTo(.8,0),e.lineTo(.8,1.15),e.absarc(0,1.15,.8,0,Math.PI,!1),e.closePath();let t=new li(e,{depth:.14,bevelEnabled:!1,curveSegments:14});ce(n,t,E.woodDark,0,0,.4);for(let s=0;s<9;s++){let r=-.72+s*.18,o=1.15+Math.sqrt(Math.max(0,.64-r*r));ae(n,E.wood,r,o/2,.57,.15,o,.035);for(let a of[.4,.8,1.1])Ue(n,E.gold,r,a,.61,.027)}for(let s=0;s<11;s++){let r=s*Math.PI/10,o=ae(n,E.stone,Math.cos(r)*.92,1.15+Math.sin(r)*.92,.48,.29,.25,.25);o.rotation.z=r-Math.PI/2}let i=Nu(3.6,1.6);i.position.y=2.33,i.scale.y=.73,n.add(i);for(let s of[-1,1])Ie(n,E.wood,[s*2.1,.3,.8],[s*2.1,2.1,.8],.035),ae(n,s<0?E.red:E.blue,s*2.1,1.53,.8,.34,.8,.025),We(n,E.gold,s*2.1,1.53,.82,.075,.02).rotation.x=Math.PI/2;return n}function _i(n,e,t,i,s=!1){let r=s?1.05:.68,o=s?.38:.23;if(We(n,E.woodDark,e,t+r/2,i,.018,r),Ue(n,E.gold,e,t+r+.025,i,.045),ae(n,s?E.blue:E.red,e+o/2,t+r*.73,i,o,r*.55,.025),s){for(let a of[.025,o-.025])ae(n,E.gold,e+a,t+r*.73,i+.018,.024,r*.55,.012);ae(n,E.gold,e+o/2,t+r*.73,i+.022,.055,.19,.015),ae(n,E.gold,e+o/2,t+r*.73,i+.023,.17,.04,.015)}}function tn(n,e,t,i,s,{open:r=!1,railing:o=!1,gold:a=!1}={}){ce(n,"bevel",E.woodDark,0,i,0,e+.12,.12,t+.12);for(let c=-e/2+.06;c<e/2;c+=.13)ae(n,E.wood,c,i+.066,0,.12,.018,t+.05);for(let c of[-e/2,e/2])for(let l of[-t/2,t/2]){We(n,E.stone,c,i+.1,l,.08,.1),We(n,E.red,c,i+s/2,l,.048,s),nm(n,c,i+s-.03,l,.24,a);for(let h of[-1,1])Ie(n,E.woodDark,[c,i+s-.24,l],[c+h*.12,i+s-.08,l],.017)}for(let c of[-1,1])ae(n,E.woodDark,0,i+s-.04,c*t/2,e+.12,.07,.08),ae(n,E.woodDark,c*e/2,i+s-.04,0,.08,.07,t+.12);if(!r){ae(n,E.plaster,0,i+s*.43,0,e-.13,s*.78,t-.14);for(let c of[-1,1]){for(let h of[-e*.27,0,e*.27]){let u=new Oe;u.position.set(h,i+s*.47,c*(t/2+.015)),u.rotation.y=c<0?Math.PI:0,n.add(u),ll(u,e*.23,s*.46)}let l=new Oe;l.position.set(c*(e/2+.015),i+s*.47,0),l.rotation.y=c*Math.PI/2,n.add(l),ll(l,t*.65,s*.46)}}if(o)for(let[c,l,h]of[[e,t/2+.08,0],[e,t/2+.08,Math.PI],[t,e/2+.08,Math.PI/2],[t,e/2+.08,-Math.PI/2]]){let u=new Oe;u.position.set(Math.sin(h)*l,i,Math.cos(h)*l),u.rotation.y=h,n.add(u);for(let f=0;f<=6;f++)ae(u,E.red,(f/6-.5)*c,.17,0,.025,.27,.027);ae(u,a?E.gold:E.jade,0,.31,0,c+.1,.045,.055),ae(u,E.woodDark,0,.075,0,c,.025,.035)}}function sl(n,e,t,i,s=!1){if(im(n,e,t,i),ae(n,E.snow,0,i+.02,0,e+.06,.055,t+.06),s){ae(n,E.woodDark,0,i*.36,t/2+.071,.42,i*.72,.025);for(let r of[-1,1])ae(n,E.wood,r*.105,i*.35,t/2+.09,.035,i*.65,.025);for(let r=0;r<7;r++){let o=r*Math.PI/6,a=ce(n,"bevel",E.stone,Math.cos(o)*.265,i*.56+Math.sin(o)*.22,t/2+.1,.11,.13,.12);a.rotation.z=o-Math.PI/2}}for(let r=0;r<3;r++)ce(n,"bevel",E.stone,0,.04+r*.06,t/2+.29-r*.09,.63,.08+r*.12,.22)}function Zv(n,e,t){let i=new Oe,s=[.105,.145,.19][e-1],r=[.72,1.03,1.34][e-1],o=.25;i.position.set(0,t,.18),i.userData.restZ=.18,i.userData.muzzle=new L(0,.1,o+r/2+.02);let a=We(i,E.black,0,.1,o,s,r);a.rotation.x=Math.PI/2;for(let l of[-.27,.28,.46]){let h=We(i,e===3?E.gold:E.steel,0,.1,o+r*l,s*1.12,.055);h.rotation.x=Math.PI/2}let c=We(i,E.woodDark,0,.1,o+r/2+.006,s*.74,.014);c.rotation.x=Math.PI/2,ae(i,e>1?E.steel:E.wood,0,-.1,0,.38+e*.06,.16,.54+e*.06);for(let l of[-1,1]){ae(i,E.woodDark,l*(.23+e*.025),-.04,0,.07,.27,.52);let h=l*(.28+e*.025),u=-.15,f=-.13,d=.16+e*.015,p=We(i,E.woodDark,h,u,f,d,.07);p.rotation.z=Math.PI/2;let x=new ut(new Wi(d-.01,.021,5,12),e===3?E.gold:E.steel);x.rotation.y=Math.PI/2,x.position.set(h+l*.04,u,f),i.add(x);for(let m=0;m<3;m++){let g=m*Math.PI/3;Ie(i,E.wood,[h+l*.045,u+Math.sin(g)*d*.85,f+Math.cos(g)*d*.85],[h+l*.045,u-Math.sin(g)*d*.85,f-Math.cos(g)*d*.85],.016)}}n.add(i),n.userData.gun=i}function om(n,e=1,t=null){if(!["sungnyemun","hwaseong"].includes(n))return Xp(n,e,t);let i=new Oe,s=tl(n,e,t,e===4);e=Math.min(3,e);let r=(a,c,l,h=!1)=>{if(hn(i,a,c,l),h){let u=Fo(a,c);Ie(i,E.gold,[-a*.28,l+u+.095,0],[a*.28,l+u+.095,0],.037);for(let f of[-1,1])Ie(i,E.gold,[f*a*.28,l+u+.095,0],[f*a*.37,l+u+.18,0],.026),Ue(i,E.gold,f*a*.37,l+u+.19,0,.037)}};if(n==="sungnyemun")if(i.userData.arrowHeight=[.72,1.2,2.53][e-1],e===1)ae(i,E.stoneDark,0,.08,0,1.08,.16,.98),tn(i,.98,.82,.24,.78),r(1.46,1.29,1.06);else{let a=e===2?.64:.86,c=e===2?1.24:1.43;if(sl(i,c,1.08,a,!0),tn(i,c-.13,.96,a+.14,.81,{railing:!0,gold:e===3}),r(c+.47,1.48,a+.99,e===3),e===3){tn(i,.97,.8,2.24,.56,{gold:!0}),r(1.46,1.26,2.83,!0);for(let l of[-1,1])_i(i,l*.76,1.26,-.08,!0)}else for(let l of[-1,1])_i(i,l*.64,.88,-.04)}else{let a=[.28,.61,.9][e-1],c=[1.12,1.34,1.5][e-1];if(e===1){ae(i,E.stoneDark,0,a/2,0,c,a,1.05);for(let l of[-1,1])ae(i,E.wood,l*.47,.36,0,.16,.12,1.1)}else{sl(i,c,1.13,a);for(let l of[-1,1])for(let h of[-.39,.05,.48])ce(i,"bevel",E.stone,l*(c/2-.08),a+.14,h,.2,.28,.27),ae(i,E.snow,l*(c/2-.08),a+.29,h,.21,.045,.28)}if(tn(i,c-.31,.78,a+.12,e===3?.94:.79,{open:!0}),r(c+.27,1.27,a+(e===3?1.12:.95),e===3),e===3){tn(i,.82,.7,2.39,.48,{gold:!0}),r(1.25,1.12,2.9,!0);for(let l of[-1,1])_i(i,l*.79,1.35,-.13,!0)}else if(e===2)for(let l of[-1,1])_i(i,l*.66,.84,-.08);Zv(i,e,a+.43)}t&&qp(i,n,t);let o=i.userData.gun;return o&&(i.remove(o),At(o)),At(i),o&&i.add(o),i.userData.visual=s,i.userData.labelHeight=new qt().setFromObject(i).max.y+.16,i}function am(n="yi"){let e=new Oe,t=new Oe;e.add(t);let i=!!xn[n],s=fi[n]?.tier===4,r=["militia","guard","elite","monk"].includes(n),o=n==="ram"?null:ni[n],a=i||!!o,c=s||["samurai","armored","cavalry","elite","guard"].includes(n),l=["sejong","dangun","ahn","onmyoji","monk"].includes(n),h=["gwak","scout","ninja","militia"].includes(n),u=Object.keys(fi).filter(I=>fi[I].tier===4).indexOf(n),f=["#723c3a","#3e4e69","#385e67","#6b4463","#506044","#544365","#2d383c","#4e5368","#374b67","#794733","#503f68","#917139"],d={yi:"#35566c",sejong:"#963f38",eulji:"#416257",gang:"#565472",gwon:"#76513b",gwak:"#ad4940",ahn:"#323638",dangun:"#c7c7ae"},p={yi:"#843e33",sejong:"#8b692d",eulji:"#a58d60",gang:"#a3a087",gwon:"#b5a17f",gwak:"#7a302e",ahn:"#303537",dangun:"#557966"},x=d[n]??o?.color??(s?f[u]:r?n==="monk"?"#b7a17a":n==="militia"?"#72856d":"#37647a":"#967b55"),m=n==="yi"?E.heroCloth:br(x),g=i?n==="yi"?E.heroArmor:br(x,l||h?"cloth":"metal"):o?br(x,l||h?"cloth":"metal"):c?br(x,"metal"):E.footArmor,y=i?E.gold:ft("#9a8259"),v=zn("skin",rl(n).skin),_=br("#49382c","wood"),b=new Oe;b.position.y=.68,t.add(b);let w=[],R=[],M=[];for(let I of[-1,1]){let B=new Oe;B.position.x=I*.14,b.add(B),w.push(B),ce(B,gi("thigh"),m,0,0,0);let W=new Oe;if(W.position.y=-.31,B.add(W),R.push(W),B.userData.knee=W,ce(W,gi("boot"),_,0,0,0),a){let ie=new Oe;ie.position.set(0,-.3,.035),W.add(ie),M.push(ie),Ue(ie,_,0,.005,.05,.095,.067,.178),ce(ie,"bevel",E.woodDark,0,-.045,.04,.19,.032,.32)}else Ue(W,_,0,-.295,.085,.095,.067,.178),ce(W,"bevel",E.woodDark,0,-.345,.075,.19,.032,.32);for(let ie of[-.07,-.19])We(W,y,0,ie,.009,.099,.012);if(!l&&!h){let ie=ce(W,"bevel",g,0,-.11,.087,.12,.21,.045);ie.rotation.x=-.07}}let T=new Oe;T.position.y=.98,t.add(T),ce(T,gi("tunic"),m,0,0,0),We(T,v,0,.345,-.012,.084,.17),!l&&!h&&ce(T,gi("cuirass"),g,0,0,0);for(let I=0;I<(l||h?0:4);I++)for(let B=0;B<6;B++){let W=(B-2.5)*.22,ie=Math.sin(W)*.28,re=Math.cos(W)*.196,Pe=ce(T,"bevel",I%2?g:m,ie,.16-I*.085,re,.059,.071,.022);Pe.rotation.y=W,Ue(T,y,ie,.185-I*.085,re+.018,.006),Ie(T,E.rope,[ie-.018,.174-I*.085,re+.016],[ie+.018,.15-I*.085,re+.016],.003)}if(ce(T,gi("belt"),_,0,0,0),Ue(T,y,0,-.225,.189,.054,.043,.014),l){ce(T,gi("robe"),m,0,0,0);for(let I of[-1,1])Ie(T,i?E.gold:E.rope,[I*.19,.26,.12],[I*.025,-.16,.181],.017);n==="sejong"&&Ue(T,E.gold,0,.02,.184,.117,.138,.016)}if(!l){ce(T,gi("tasset"),g,0,0,0);for(let I of[-1,1]){for(let B=0;B<3;B++)for(let W=0;W<3;W++){let ie=I*(.17+W*.25),re=-.3-B*.074,Pe=Math.sin(ie)*.25,Ve=Math.cos(ie)*(.19+B*.009),et=ce(T,"bevel",y,Pe,re,Ve+.011,.055,.008,.012);et.rotation.y=ie}Ie(T,_,[I*.025,-.27,.179],[I*.027,-.5,.207],.009)}}let N=[],U=[],z=[],F=[];for(let I of[-1,1]){let B=new Oe;B.position.set(I*.3,.19,-.012),T.add(B),N.push(B),ce(B,gi("upperSleeve"),m,0,0,0),Ue(B,l?m:g,0,.016,-.003,.145,.105,.133);for(let Ve=0;Ve<(l||h?0:3);Ve++){let et=ce(B,"bevel",g,I*.022,-.035-Ve*.038,.006,.226,.045,.25);et.rotation.z=I*.12}let W=new Oe;W.position.set(I*.024,-.24,.012),B.add(W),U.push(W),B.userData.elbow=W,ce(W,gi(l?"wideSleeve":"foreSleeve"),m,0,0,0),l&&We(W,y,0,-.228,.018,.147,.018);let ie=new Oe;ie.position.set(I*.016,-.24,.026),W.add(ie),z.push(ie),Ue(ie,v,0,-.012,0,.061,.074,.041);for(let Ve=0;Ve<3;Ve++){let et=Ue(ie,v,(Ve-1)*.027,-.046,.022,.018,.038,.023);et.rotation.x=-.25}let re=Ue(ie,v,-I*.05,-.017,.025,.022,.043,.025);re.rotation.z=I*.5;let Pe=new Oe;Pe.position.set(-I*.04,.48,-.038),ie.add(Pe),F.push(Pe),B.rotation.z=I*.09}let C=new Oe;C.position.set(0,1.47,-.012),C.scale.setScalar(.88),t.add(C);let D={ball:Ue,box:ae,cylinder:We,between:Ie,mesh:ce,material:ft,MAT:E};if(Zp(C,n,D),i&&jp(n,T,N,m,g,D),o&&Jp(n,T,m,g,D),i)$p(C,n,g,D);else if(o)Kp(C,n,g,m,{...D,cone:Dt});else if(c&&!l&&!h){Ue(C,g,0,.13,-.015,.225,.18,.205),We(C,y,0,.075,0,.227,.035),ae(C,y,0,.21,.17,.055,.22,.025);for(let I=0;I<10;I++){let B=I*Math.PI/5;Ue(C,y,Math.cos(B)*.228,.079,Math.sin(B)*.228,.012)}for(let I of[-1,1]){ce(C,"bevel",g,I*.2,-.05,-.02,.075,.25,.28);for(let B=0;B<3;B++)ae(C,y,I*.24,.025-B*.065,-.02,.012,.012,.25)}if(i)for(let I=0;I<4;I++){let B=Ue(C,E.red,(I-1.5)*.022,.32+I*.035,-.07-I*.025,.033,.15-I*.012,.045);B.rotation.x=-.35-I*.09}else for(let I of[-1,1])Ie(C,y,[I*.08,.2,.12],[I*.25,.43,.11],.025);if(s){for(let B=0;B<3+u%4;B++){let W=(B/(2+u%4)-.5)*2.2;Ie(C,E.gold,[Math.sin(W)*.14,.22,.02],[Math.sin(W)*.4,.32+Math.cos(W)*.22,.05],.022)}let I=new Oe;ae(I,m,0,1.07,-.27,.32,.64,.035),Ie(I,E.woodDark,[0,.25,-.27],[0,1.47,-.27],.018),ae(I,E.gold,0,1.09,-.245,.12,.13,.02),C.add(I)}}else if(n==="sejong"){ce(C,"bevel",E.black,0,.21,-.03,.35,.32,.31);for(let I of[-1,1])ce(C,"bevel",E.black,I*.26,.26,-.06,.23,.06,.13)}else if(n==="dangun"){Ue(C,E.snow,0,.09,-.065,.21,.22,.18),We(C,E.gold,0,.2,0,.21,.09);for(let I of[-1,1])Dt(C,E.gold,I*.13,.34,0,.038,.25)}else if(n==="ahn")We(C,E.black,0,.2,0,.21,.23),We(C,E.black,0,.11,0,.28,.035),ae(C,E.gold,0,.13,.205,.19,.027,.02),ae(C,E.woodDark,0,-.085,.16,.13,.02,.018);else if(n==="onmyoji")Dt(C,E.snow,0,.32,0,.19,.45),ae(C,E.red,0,.31,.13,.045,.34,.025);else if(n==="monk")for(let I=0;I<9;I++){let B=I*Math.PI/8;Ue(T,E.woodDark,Math.cos(B)*.22,.16-Math.sin(B)*.15,.23,.027)}else if(h)if(n==="ninja"){Ue(C,m,0,.08,-.02,.215,.19,.195),ae(C,m,0,-.08,.15,.3,.13,.05);for(let I of[-1,1])Ue(C,E.skin,I*.075,.012,.165,.033,.017,.014)}else Ue(C,E.black,0,.12,-.03,.19,.14,.17),We(C,n==="gwak"?E.red:E.rope,0,.08,0,.2,.055),ae(C,m,.16,.04,-.2,.055,.34,.04).rotation.z=-.4;else{Dt(C,E.straw,0,.21,0,.36,.24),We(C,E.woodDark,0,.1,0,.34,.025);for(let I=0;I<10;I++){let B=I*Math.PI/5;Ie(C,E.rope,[0,.33,0],[Math.cos(B)*.34,.105,Math.sin(B)*.34],.006)}Ie(C,E.rope,[-.18,.1,.04],[0,-.17,.1],.007),Ie(C,E.rope,[.18,.1,.04],[0,-.17,.1],.007)}let G=null;if(i||c){let I=new jn(.67,.87,10,12);I.translate(0,-.36,0);let B=I.attributes.position;for(let W=0;W<B.count;W++){let ie=(.075-B.getY(W))/.87,re=B.getX(W)*(.52+Math.sqrt(Math.max(0,ie))*.48);B.setXYZ(W,re,B.getY(W)+Math.sin(re*23)*ie*.016,Math.cos(re*31)*ie*.018)}I.computeVertexNormals(),G=ce(T,I,br(i?p[n]:x,"cape"),0,.19,-.225),G.userData.rest=I.attributes.position.array.slice()}let O=i?xn[n].attack:n==="teppo"?"gun":["onmyoji","monk"].includes(n)?"orb":n==="drum"?"drum":c||h?"melee":"spear";if(o)Qp(n,T,F,g,{...D,cone:Dt});else if(i&&O==="arrow"){for(let re of F)re.position.set(0,0,0);let I=ae(T,E.red,0,-.18,.23,.53,.052,.028);I.rotation.z=-.12,Ue(T,y,0,-.18,.26,.075,.055,.025);let B=We(T,E.woodDark,.2,-.03,-.25,.09,.47);B.rotation.z=-.17;for(let re=0;re<4;re++){let Pe=.16+re*.025;Ie(T,E.wood,[Pe,-.1,-.27],[Pe-.04,.43+re*.018,-.27],.006),ce(T,"bevel",E.rope,Pe-.04,.39+re*.018,-.27,.035,.1,.015)}let W=[];for(let re=0;re<=20;re++){let Pe=-Math.PI/2+re*Math.PI/20;W.push(new L(0,Math.sin(Pe)*.43,Math.cos(Pe)*.15-.15))}let ie=new on(W);ce(F[0],new mn(ie,24,.017,6,!1),E.wood,0,0,0),Ie(F[0],_,[0,-.065,0],[0,.065,0],.023);for(let re of[-.37,.37])Ie(F[0],y,[0,re-.018,-.073],[0,re+.018,-.073],.019);F[0].userData.bowTips=[[0,-.43,-.15],[0,.43,-.15]],Ie(F[1],E.wood,[0,0,0],[0,0,.6],.007),Dt(F[1],E.steel,0,0,.64,.021,.08).rotation.x=Math.PI/2;for(let re of[-1,1])ce(F[1],"bevel",E.rope,re*.018,0,.07,.035,.01,.09).rotation.y=re*.2;F[1].userData.muzzle=new L(0,0,.68)}else if(O==="gun")if(n==="ahn"){F[1].position.set(0,0,0);let I=We(F[1],E.steel,0,.025,.23,.022,.25);I.rotation.x=Math.PI/2;let B=We(F[1],E.black,0,.02,.08,.045,.09);B.rotation.x=Math.PI/2;for(let ie=0;ie<6;ie++){let re=ie*Math.PI/3,Pe=We(F[1],E.steel,Math.sin(re)*.037,.02+Math.cos(re)*.037,.08,.009,.075);Pe.rotation.x=Math.PI/2}let W=ce(F[1],"bevel",E.woodDark,0,-.045,.02,.052,.11,.065);W.rotation.x=-.25,ae(F[1],E.black,0,.05,.3,.013,.025,.018),F[1].userData.muzzle=new L(0,.025,.355)}else{let I=We(F[1],E.steel,0,-.42,.24,.025,.75);I.rotation.x=Math.PI/2,ce(F[1],"bevel",E.woodDark,0,-.49,.04,.07,.14,.11),ce(F[1],"bevel",E.black,0,-.42,.1,.075,.065,.25),F[1].userData.muzzle=new L(0,-.42,.615)}else if(O==="orb"||O==="lightning"){Ie(F[1],E.wood,[0,-.85,.045],[0,.75,.045],.026),Ue(F[1],n==="dangun"?E.jade:E.gold,0,.82,.045,.12);let I=ft(n==="dangun"?"#a8efe6":"#f6d881",{emissive:n==="dangun"?"#438d9f":"#b28337",emissiveIntensity:.9});if(Ue(F[1],I,0,.86,.045,.07),F[1].userData.muzzle=new L(0,.86,.045),n==="onmyoji")for(let B of[-1,1])ae(F[1],E.snow,B*.12,.57,.045,.11,.33,.02);if(n==="sejong")for(let B of[-1,1]){let W=new Oe;W.position.set(B*.064,-.45,.08),W.rotation.z=B*.18,F[0].add(W),ce(W,"bevel",E.woodDark,0,-.02,0,.133,.035,.31),ae(W,ft("#d5c8a5"),0,.005,0,.12,.015,.29);for(let ie=0;ie<4;ie++)for(let re=0;re<2;re++)ae(W,ft("#72644e"),B*(re-.5)*.025,.015,(ie-1.5)*.048,.013,.003,.025)}if(n==="eulji")for(let B of[-1,1])Ie(F[1],y,[0,.75,.045],[B*.14,.94,.045],.022);if(n==="dangun"){for(let B of[.57,.69,.81]){let W=We(F[1],y,0,B,.045,.105,.018);W.rotation.x=Math.PI/2}for(let B of[-1,1])Ie(F[1],E.rope,[B*.08,.6,.045],[B*.11,.36,.045],.006),Ue(F[1],E.jade,B*.11,.35,.045,.026,.045,.018)}}else if(O==="drum"){let I=We(T,E.wood,0,-.06,.34,.24,.3);I.rotation.x=Math.PI/2;for(let B of[.18,.51])We(T,E.rope,0,-.06,B,.245,.025).rotation.x=Math.PI/2;for(let B of F)Ie(B,E.wood,[0,-.48,.04],[0,-.15,.4],.018)}else if(O==="melee"){let I=ce(F[1],Uo(),E.steel,0,-.52,.03);if(I.rotation.z=-.12,Ie(F[1],_,[0,-.48,.03],[0,-.35,.03],.024),Ue(F[1],y,0,-.35,.03,.033),ce(F[1],"bevel",y,0,-.52,.03,.18,.035,.07),["gang","gwon","guard","elite","armored"].includes(n)){if(n==="gwon"){let B=new $n;B.moveTo(-.21,.29),B.quadraticCurveTo(0,.36,.21,.29),B.lineTo(.2,-.2),B.quadraticCurveTo(0,-.34,-.2,-.2),B.closePath();let W=new li(B,{depth:.055,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:2,curveSegments:10});ce(F[0],W,E.wood,-.04,-.45,.14);for(let ie of[-.18,0,.18])ae(F[0],E.steel,-.04+ie,-.43,.21,.025,.51,.015);for(let ie of[-.67,-.22])ae(F[0],y,-.04,ie,.22,.35,.025,.015)}else Ue(F[0],g,-.04,-.45,.16,.205,.285,.065);Ue(F[0],y,-.04,-.45,.225,.07,.07,.025),Ie(F[0],y,[-.04,-.69,.218],[-.04,-.21,.218],.013),Ie(F[0],y,[-.21,-.45,.218],[.13,-.45,.218],.013)}}else Ie(F[1],E.wood,[0,-.85,.045],[0,.8,.045],.018),Dt(F[1],E.steel,0,.93,.045,.07,.3);for(let I=0;I<2;I++)a&&(At(M[I]),R[I].remove(M[I])),At(R[I]),w[I].remove(R[I]),At(w[I]),w[I].add(R[I]),a&&R[I].add(M[I]),At(F[I]),z[I].remove(F[I]),At(z[I]),z[I].add(F[I]),U[I].remove(z[I]),At(U[I]),U[I].add(z[I]),N[I].remove(U[I]),At(N[I]),N[I].add(U[I]);At(C);for(let I of N)T.remove(I);G&&T.remove(G),At(T);for(let I of N)T.add(I);G&&T.add(G);let j=i&&O==="arrow"?Array.from({length:2},()=>We(t,E.rope,0,1,0,.0045,.43)):null;if(i||o){let I=_r[n]??o;t.scale.fromArray(I.body),C.scale.set(.88/I.body[0],.88/I.body[1],.88/I.body[2])}return e.scale.setScalar(i?1.02:o?.scale??(n==="armored"?1.04:c?.9:.82)),e.userData={rig:t,hips:b,legs:w,knees:R,ankles:M,torso:T,arms:N,elbows:U,wrists:z,weapons:F,head:C,cape:G,bowStrings:j,hero:i,kind:n,weapon:O,phase:0,costumeMaterials:[m,g]},i?Ru(e,0,!1,0):o&&Iu(e,0,!1,0),e.userData.labelHeight=new qt().setFromObject(e).max.y+.15,e}function cm(n,e,t,i,s){let r=n.userData,o=e*8+r.phase,a=t?.5:0;if(r.vehicle){for(let h of r.wheels)h.rotation.x=e*(t?5:0);r.rig.position.y=Math.sin(e*5)*.007,r.ramBeam&&(r.ramBeam.position.z=Math.sin(lt.clamp(i/.25,0,1)*Math.PI*.8)*.18);return}if(r.rig.position.y=(r.mountOffset??0)+(t?Math.abs(Math.sin(o))*.035:Math.sin(e*2+r.phase)*.012),r.horseLegs)for(let h=0;h<r.horseLegs.length;h++)r.horseLegs[h].rotation.x=Math.sin(o+h%3*Math.PI)*a;r.legs[0].rotation.x=Math.sin(o)*a,r.legs[1].rotation.x=-Math.sin(o)*a;for(let h=0;h<2;h++)r.knees[h].rotation.x=t?Math.max(0,Math.sin(o+h*Math.PI))*.72:.04;let c=lt.clamp(i/.25,0,1),l=Math.sin(e*2.4+r.phase)*.02;for(let h of r.arms)h.rotation.y=0,h.position.z=-.012;for(let h of r.elbows)h.rotation.x=-.18;for(let h of r.wrists)h.rotation.set(0,0,0);if(r.head.rotation.y=l*.8,r.weapon==="arrow"){r.arms[0].rotation.x=-1.12+l,r.arms[0].rotation.y=.25,r.elbows[0].rotation.x=-.05,r.arms[1].rotation.x=-.85+c*.2,r.arms[1].rotation.y=-.48-c*.2,r.arms[1].position.z=-c*.09,r.elbows[1].rotation.x=-.65-c*.3;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-r.arms[h].rotation.x-r.elbows[h].rotation.x;r.torso.rotation.y=-.18-c*.12}else if(r.weapon==="gun"){r.arms[1].rotation.x=-1.36+c*.24,r.arms[0].rotation.x=-1.12+c*.1,r.arms[0].rotation.y=.55,r.elbows[0].rotation.x=-.45,r.elbows[1].rotation.x=-.12;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-(r.arms[h].rotation.x+r.elbows[h].rotation.x)*.92;r.torso.rotation.y=-.13+c*.1}else if(["orb","lightning"].includes(r.weapon)){r.arms[0].rotation.x=r.kind==="sejong"?-.62:-.18+l,r.arms[1].rotation.x=-.24-c*.9,r.arms[1].rotation.y=-c*.3,r.torso.rotation.y=-c*.22,r.elbows[0].rotation.x=r.kind==="sejong"?-.48:-.18,r.elbows[1].rotation.x=-.14-c*.55;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-(r.arms[h].rotation.x+r.elbows[h].rotation.x)*.9}else{let h=Math.sin(c*Math.PI*.85);r.arms[0].rotation.x=-Math.sin(o)*a*.5-h*.3,r.arms[1].rotation.x=Math.sin(o)*a*.5-h*1.65,r.arms[1].rotation.y=-h*.55,r.elbows[0].rotation.x=-.18-h*.13,r.elbows[1].rotation.x=-.18-h*.5,r.wrists[0].rotation.x=-(r.arms[0].rotation.x+r.elbows[0].rotation.x)*.65,r.torso.rotation.y=h*.35}if(r.hero?Ru(n,e,t,i):ni[r.kind]&&Iu(n,e,t,i),r.cape){let h=r.cape.geometry.attributes.position,u=r.cape.userData.rest;for(let f=0;f<h.count;f++){let d=u[f*3+1],p=Math.max(0,-d/.8);h.setZ(f,u[f*3+2]-p*.13+Math.sin(e*4+u[f*3]*5+p*4)*p*(t?.09:.04))}h.needsUpdate=!0,r.cape.geometry.computeVertexNormals()}}var Fu=new Map;function ul(n,e=!1){let t=n.id+(e?"-road":"-land");if(Fu.has(t))return Fu.get(t);let i=256,s=new Uint8Array(i*i*4),r=new Uint8Array(s.length),o=new tt(e?n.road:n.ground),a=ei(e?701:211);for(let d=0;d<i;d++)for(let p=0;p<i;p++){let x=p/i,m=d/i,g=_s(x*5,m*5),y=_s(x*48,m*48),v=a(),_=d+_s(x*9,m*7)*7,b=Math.floor(_/28),w=p+b*17+_s(x*9,m*7)*8,R=e&&(w%37<1.6||_%28<1.5),M=v>.975?.08:0,T=e?(g-.5)*.07+(y-.5)*.035+(v-.5)*.018-(R?.075:0)-M:(g-.5)*.105+(y-.5)*.035+(v-.5)*.018,N=[o.r,o.g,o.b],U=(d*i+p)*4;for(let F=0;F<3;F++)s[U+F]=Math.round(lt.clamp(N[F]+T+(e?0:(F===1?.012:-.008)*g),0,1)*255);s[U+3]=255;let z=Math.round((R?.25:.48+y*.09+M)*255);r.set([z,z,z,255],U)}let c=e?"road":n.snow?"snow-ground":"ground",l=Jc(s,i,c),h=new Dn(l.data,l.width,l.height);h.colorSpace=as,h.wrapS=h.wrapT=Yn,h.magFilter=Et,h.minFilter=cn,h.generateMipmaps=!0,h.anisotropy=4,h.needsUpdate=!0;let u=new Dn(r,i,i);u.wrapS=u.wrapT=Yn,u.magFilter=Et,u.minFilter=cn,u.generateMipmaps=!0,u.needsUpdate=!0,Qc(h,c,o);let f=new an({map:h,roughness:n.snow?.87:.96,bumpMap:u,bumpScale:e&&!n.snow?.009:0,vertexColors:!0});return Fu.set(t,f),f}function Rn(n,e){if(e.snow)return n;let t=[];n.traverse(i=>{i.isMesh&&(i.material===E.snow||i.material===E.roofSnow||i.material===E.ice?t.push(i):i.material===E.pine?i.material=ft("#41684a"):i.material===E.pineDark&&(i.material=ft("#2e513c")))});for(let i of t)i.removeFromParent(),i.geometry.userData.owned3d&&i.geometry.dispose();return n.userData.season=e.id,n}function lm(n,e=2.8,t=1){let i=new Oe,s=ei(Math.floor(t*997)+1),r=ce(i,new Zn(.025,.085,e*.71,9),E.woodDark,0,e*.355,0);r.rotation.z=.04*Math.sin(t);let o=n.leaf.map(a=>ft(a,{roughness:.96,vertexColors:!0}));for(let a=0;a<4;a++){let c=a*Math.PI/2+t;Ie(i,E.woodDark,[0,.18,0],[Math.cos(c)*.18,.025,Math.sin(c)*.18],.026)}for(let a=0;a<8;a++){let c=a*2.399+t,l=.42+s()*.3,h=e*(.53+s()*.22),u=Math.cos(c)*l,f=Math.sin(c)*l;Ie(i,E.woodDark,[0,e*.38,0],[u*.55,h-.17,f*.55],.029),Ie(i,E.woodDark,[u*.55,h-.17,f*.55],[u*1.15,h+.05,f*1.15],.017);for(let d=0;d<3;d++){let p=u+(s()-.5)*.46,x=f+(s()-.5)*.46,m=h+(s()-.2)*.32,g=ce(i,gu(t+a*3+d),o[(a+d)%3],p,m,x,.34+s()*.15,.25+s()*.14,.35+s()*.13);if(g.rotation.y=s()*6,d===1)for(let y=0;y<3;y++){let v=$v(t+a+y),_=ce(i,gu(t+a+y+17),o[(a+y)%3],p+Math.cos(v)*.24,m-.04+y*.07,x+Math.sin(v)*.24,.23,.12,.25);_.rotation.z=(s()-.5)*.5}}}return i}var $v=n=>n*2.399;function jv(n){let e=pi(n.id),t=[],i=[],s=[];for(let r=0;r<e.h;r++)for(let o=0;o<e.w;o++){let a=e.grid[r*e.w+o],c=a===ur&&n.grid[r][o]==="W";a===Kh||c?i.push([o,r]):t.push([o,r]),c&&s.push([o,r])}return{map:e,land:t,water:i,bridges:s}}function dl(n,e=0,t=0,i=2){let s=n.attributes.position,r=n.attributes.uv,o=[];for(let a=0;a<s.count;a++){let c=s.getX(a)+e,l=s.getZ(a)+t;r.setXY(a,c/i,l/i);let h=1;o.push(h,h,h)}return n.setAttribute("color",new De(o,3)),n}function Ou(n,e,t=!1,i=3.2){let s=[],r=[],o=[],a=(l,h)=>t?-.014-.008*Math.hypot(Math.max(0,-l,l-24),Math.max(0,-h,h-14))+.005*Math.sin(l*.7+h*.5):e;for(let[l,h,u=1]of n){let f=s.length/3;s.push(l,a(l,h),h,l,a(l,h+u),h+u,l+u,a(l+u,h+u),h+u,l+u,a(l+u,h),h),r.push(0,0,0,0,0,0,0,0),o.push(f,f+1,f+2,f+2,f+3,f)}let c=new ht;return c.setAttribute("position",new De(s,3)),c.setAttribute("uv",new De(r,2)),c.setIndex(o),dl(c,0,0,i),c.computeVertexNormals(),c.userData.owned3d=!0,c}function Kv(n){let e=[],t=[],i=new Set(n.water.map(([a,c])=>`${a},${c}`)),{w:s,h:r}=n.map,o=.5;for(let a=-5;a<r+5;a+=o)for(let c=-5;c<s+5;c+=o){if(c>=0&&a>=0&&c<s&&a<r||Math.hypot(Math.max(0,-c,c-s+o),Math.max(0,-a,a-r+o))>3.7+_s(c*.27+9,a*.27+3)*1.4)continue;let h=`${lt.clamp(Math.floor(c),0,s-1)},${lt.clamp(Math.floor(a),0,r-1)}`;(i.has(h)?t:e).push([c,a,o])}return{land:e,water:t}}function hm(n,e,t=null){let i=new Oe,s=jv(n),{map:r,land:o,water:a,bridges:c}=s,l=ei(Fp(n.id)),h=[],u=new Set(o.map(([C,D])=>`${C},${D}`)),f=Kv(s),d=e.snow?8:12,p=new jn(130,110);p.rotateX(-Math.PI/2),dl(p,12,7,d),p.userData.owned3d=!0;let x=ce(i,p,ul(e),12,-.13,7);x.castShadow=!1,ce(i,Ou(o,.006,!1,d),ul(e),0,0,0),ce(i,Ou(f.land,0,!0,d),ul(e),0,0,0);let m=new an({color:e.water,roughness:.29,metalness:.26});m.userData.owned3d=!0;let g=new ut(Ou([...a,...f.water],-.075),m);g.receiveShadow=!0;for(let[C,D]of o)for(let[G,O]of[[1,0],[-1,0],[0,1],[0,-1]])if(!u.has(`${C+G},${D+O}`)&&!(C+G<0||D+O<0||C+G>=r.w||D+O>=r.h)&&(ce(i,"bevel",E.stoneDark,C+.5+G*.48,-.26,D+.5+O*.48,G?.09:1,.52,O?.09:1),C+G>=0&&D+O>=0&&C+G<r.w&&D+O<r.h&&(ae(i,ft(e.shore),C+.5+G*.42,.012,D+.5+O*.42,G?.15:1,.035,O?.15:1),l()<.2))){let j=Rn(ko(.22+l()*.25,l()*6),e);j.position.set(C+.5+G*.42,.015,D+.5+O*.42),i.add(j)}let y=ul(e,!0),v=ft(e.snow?"#667e99":"#535b4c"),_=new Set,b=(C,D,G,O,j,I)=>{let B=new jn(G,O);B.rotateX(-Math.PI/2),dl(B,C,D),ce(i,B,j,C,I,D)};for(let C of r.paths)for(let D=1;D<C.pts.length;D++){let G=C.pts[D-1],O=C.pts[D],j=Math.hypot(G.x-O.x,G.y-O.y),I=(O.x-G.x)/j,B=(O.y-G.y)/j;for(let W=0;W<j;W+=.5){let ie=G.x+I*(W+.25),re=G.y+B*(W+.25),Pe=`${ie.toFixed(2)},${re.toFixed(2)}`;if(!_.has(Pe)){if(_.add(Pe),b(ie,re,I?.51:1.22,B?.51:1.22,v,.018),b(ie,re,I?.51:1.09,B?.51:1.09,y,.027),l()<.6)for(let Ve of[-1,1]){let et=ce(i,"rock",E.stone,ie-B*Ve*.59,.048,re+I*Ve*.59,.07+l()*.05,.03,.06+l()*.04);et.rotation.y=l()*6}if(e.snow&&l()<.5){let Ve=ae(i,E.snowShade,ie+B*.17,.03,re-I*.17,.07,.008,.13);Ve.rotation.y=Math.atan2(I,B)}}}for(let W of[G,O]){let ie=new Wr(.55,24);ie.rotateX(-Math.PI/2),dl(ie,W.x,W.y),ce(i,ie,y,W.x,.029,W.y)}}for(let[C,D]of c){let G=r.grid[D*r.w+C-1]===ur||r.grid[D*r.w+C+1]===ur;if(G)for(let O=0;O<5;O++)ae(i,E.wood,C+.1+O*.2,.04,D+.5,.17,.08,.92);else for(let O=0;O<5;O++)ae(i,E.wood,C+.5,.055,D+.1+O*.2,.92,.06,.17);for(let O of[-1,1]){let j=G?[C,.06,D+.5+O*.48]:[C+.5+O*.48,.06,D],I=G?[C+1,.06,D+.5+O*.48]:[C+.5+O*.48,.06,D+1];Ie(i,E.woodDark,[j[0],-.4,j[2]],[j[0],.52,j[2]],.035),Ie(i,E.wood,[j[0],.4,j[2]],[I[0],.4,I[2]],.025)}}let w=new Set,R=new Map(r.decor.filter(C=>C.ch==="H").map(C=>[`${C.x},${C.y}`,C]));for(let C of r.decor){let D=C.x+.5,G=C.y+.5;if(C.ch==="H"){if(w.has(`${C.x},${C.y}`))continue;let O=[],j=[C];for(;j.length;){let Pe=j.pop(),Ve=`${Pe.x},${Pe.y}`;if(!w.has(Ve)){w.add(Ve),O.push(Pe);for(let[et,J]of[[1,0],[-1,0],[0,1],[0,-1]]){let ee=R.get(`${Pe.x+et},${Pe.y+J}`);ee&&!w.has(`${ee.x},${ee.y}`)&&j.push(ee)}}}let I=Math.min(...O.map(Pe=>Pe.x)),B=Math.max(...O.map(Pe=>Pe.x)),W=Math.min(...O.map(Pe=>Pe.y)),ie=Math.max(...O.map(Pe=>Pe.y)),re=t?t.prop("hanok",O.length===1?1.9:2.9,l()):Rn(Nu(Math.min(3.2,B-I+.8),Math.min(2.4,ie-W+.8)),e);re.position.set((I+B+1)/2,0,(W+ie+1)/2),!t&&O.length===1&&(re.scale.y=.72),i.add(re),h.push([re.position.x,re.position.z+.7,.75,!0])}else if(C.ch==="T"){let O=t?t.prop(e.snow?"snowPine":e.id==="autumn"?"maple":"pine",2+l()*.8,l()):e.snow||l()<.28?Rn(hl(2.3+l()*1.3,l()*6),e):lm(e,2.2+l()*1.1,l()*9);O.position.set(D,0,G),t||(O.rotation.y=l()*6),i.add(O)}else if(C.ch==="R"||C.ch==="M"){let O=t?t.prop(C.ch==="M"?"cliff":e.snow?"snowRock":"rock",C.ch==="M"?1.9+l()*.7:.65+l()*.4):Rn(ko(C.ch==="M"?1.6+l()*.5:.55+l()*.45,l()*6),e);O.position.set(D,0,G),!t&&C.ch==="M"&&(O.scale.y=C.y>=r.h-2?.55:1.7),i.add(O)}else if(C.ch==="K"){let O=t?t.prop("wall",1):Rn(Uu(.98,1.16),e);O.position.set(D,0,G),!t&&r.decor.some(j=>j.ch==="K"&&j.x===C.x&&Math.abs(j.y-C.y)===1)&&(O.rotation.y=Math.PI/2),i.add(O)}else if(C.ch==="J"){We(i,E.wood,D,.6,G,.11,1.2),ae(i,E.wood,D,1.3,G,.29,.38,.22);for(let O of[-1,1])Ue(i,E.black,D+O*.07,1.37,G+.12,.025);ae(i,E.red,D,1.2,G+.12,.13,.045,.02)}else if(C.ch==="f"&&!e.snow)for(let O=0;O<7;O++){let j=D+(l()-.5)*.8,I=G+(l()-.5)*.8;Ie(i,ft(e.grass),[j,0,I],[j,.14+l()*.1,I],.008),Ue(i,ft(e.id==="autumn"?"#d1ac5c":O%2?"#e2b4c1":"#ddd0a1"),j,.16,I,.035,.025,.035)}if(["T","R","M"].includes(C.ch)&&!e.snow)for(let O=0;O<4;O++){let j=D+(l()-.5)*.8,I=G+(l()-.5)*.8;for(let B=0;B<3;B++)Ie(i,ft(e.grass),[j,.015,I],[j+(l()-.5)*.18,.16+l()*.14,I+(l()-.5)*.18],.009)}}let M=r.base,T=r.paths[0].pts.at(-1),N=r.paths[0].pts.at(-2),U=t?t.prop("gate",2.3):Rn(rm(),e);t||(U.scale.set(.36,.55,.48),U.rotation.y=Math.atan2(T.x-N.x,T.y-N.y)+Math.PI),U.position.set(M.x+.5,.025,M.y+.5),i.add(U),h.push([M.x+.5-.7,M.y+.5,.75,!0],[M.x+.5+.7,M.y+.5,.75,!0]);for(let C of r.decor.filter(D=>D.ch==="J"||D.ch==="H").slice(0,4)){let D=t?t.prop("supplies",.48):Rn(sm(),e);t||D.scale.setScalar(.45),D.position.set(C.x+.38,0,C.y+.4),i.add(D)}let z=r.paths[0];for(let C of[.28,.55,.78]){let D=z.pts[Math.max(1,Math.floor((z.pts.length-1)*C))];h.push([D.x+.65,D.y+.5,.65,!1])}let F=0;for(let[C,D,G]of f.land){if(D>=0&&C>=0&&C<r.w||l()>.035)continue;if(F++>=20)break;let O=t?t.prop(e.snow?"snowPine":e.id==="autumn"?"maple":"pine",1.1+l()*.9,l()):e.snow?Rn(hl(.75+l()*.65,l()*9),e):lm(e,.8+l()*.7,l()*9);O.position.set(C+G/2,-.035,D+G/2),i.add(O)}if(a.length<30){for(let C=-1;C<26;C+=3.7+l()*1.2){let D=t?t.prop("cliff",3+l()*1.4):Rn(ko(1.8+l(),l()*7),e);D.position.set(C,-.25,-3.6-l()),t||(D.scale.y=1.6),i.add(D)}for(let C=0;C<11;C++){let D=-5+C*3.4,G=-8-l()*4,O=3+l()*3,j=t?t.prop("cliff",O):ko(3.6+l()*2,l()*9);if(t||(Rn(j,e),j.scale.y=O/3.8),j.position.set(D,-1.8,G),i.add(j),C%2===0){let I=t?t.prop(e.snow?"snowPine":"pine",3.1+l()):Rn(hl(3+l()*1.7,l()*8),e);I.position.set(D+.6,-.4,G+1.7),i.add(I)}}}return At(i),i.userData.stageId=n.id,i.userData.season=e.id,{root:i,water:g,lamps:h.slice(0,9),plan:s,surroundings:f}}function um(n,e,t,i=.22){let s=new Oe;s.position.set(e,i,t),n.add(s),We(s,E.woodDark,0,0,0,i,.08).rotation.z=Math.PI/2,We(s,E.steel,e<0?-.05:.05,0,0,i*.78,.025).rotation.z=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/4;Ie(s,E.wood,[0,Math.sin(o)*i,Math.cos(o)*i],[0,-Math.sin(o)*i,-Math.cos(o)*i],.02)}return At(s)}function Jv(n){let e=new Oe,t=new Oe,i=[];e.add(t);let s=null;if(n==="wall"){for(let r=0;r<7;r++){let o=(r-3)*.18;Ie(t,E.woodDark,[o,.04,0],[o,.85,.15],.06),Dt(t,E.wood,o,.94,.17,.065,.22)}for(let r of[.25,.65])ae(t,E.wood,0,r,.04,1.34,.08,.1)}else if(n==="ram"){for(let o of[-.45,.45])for(let a of[-.57,.57])i.push(um(e,o,a));ae(t,E.woodDark,0,.38,0,.76,.16,1.4);for(let o of[-.33,.33])for(let a of[-.5,.5])Ie(t,E.wood,[o,.4,a],[o,1.25,a],.045);s=new Oe,t.add(s);let r=We(s,E.wood,0,.75,.12,.17,1.8);r.rotation.x=Math.PI/2,Ue(s,E.steel,0,.75,1.05,.21,.2,.2);for(let o of[-.58,-.28,.38,.76])We(s,E.steel,0,.75,o,.179,.055).rotation.x=Math.PI/2;for(let o of[-1,1])ae(s,E.steel,o*.1,.75,1.17,.055,.21,.08);for(let o of[-.45,.45])Ie(t,E.rope,[0,1.3,o],[0,.8,o],.016);for(let o of[-1,1]){let a=ae(t,E.woodDark,o*.25,1.3,0,.61,.08,1.65);a.rotation.z=o*-.36}for(let o=0;o<4;o++)ae(t,E.steel,0,1.4,(o-1.5)*.42,.74,.055,.07);for(let o of[-1,1])for(let a=0;a<7;a++){let c=ce(t,"bevel",E.wood,o*.25,1.31,(a-3)*.23,.6,.045,.21);c.rotation.z=-o*.36;for(let l of[-.55,.55])Ue(t,E.steel,o*.48,.38+a*.025,l,.016)}}else if(n==="turtle"){ce(t,"sphere",E.woodDark,0,.3,0,.66,.27,1.18),ae(t,E.wood,0,.45,0,1.15,.16,1.85);let r=ft("#627878",{roughness:.6,metalness:.25});ce(t,"sphere",r,0,.69,-.08,.59,.42,.98);for(let o=0;o<5;o++)for(let a=0;a<3;a++){let c=(a-1)*.3,l=(o-2)*.31;Dt(t,E.steel,c,1.06-Math.abs(c)*.3,l,.035,.15)}for(let o of[-1,1])for(let a=0;a<4;a++){let c=(a-1.5)*.4;Ie(t,E.wood,[o*.46,.43,c],[o*.95,.12,c-.3],.025),ae(t,E.woodDark,o*.96,.12,c-.3,.13,.035,.23),We(t,E.black,o*.57,.49,c,.055,.12).rotation.z=Math.PI/2}Ie(t,E.wood,[0,.53,.74],[0,.73,1.28],.12),Ue(t,E.gold,0,.78,1.25,.16,.14,.22),Dt(t,E.gold,0,.91,1.16,.055,.16);for(let o of[-1,1])Ue(t,E.red,o*.11,.83,1.38,.025);ae(t,E.black,0,.75,1.45,.1,.07,.03),Ie(t,E.woodDark,[0,.85,-.55],[0,1.75,-.55],.025),ae(t,E.red,.18,1.57,-.55,.36,.32,.025),ae(t,E.gold,.18,1.57,-.53,.08,.14,.015)}else{ae(t,E.wood,0,.4,0,.65,.25,1.15);for(let r of[-.4,.4])for(let o of[-.4,.4])i.push(um(e,r,o,.18));for(let r=0;r<3;r++)Ue(t,E.rope,0,.65,(r-1)*.3,.28,.2,.18)}return s&&(t.remove(s),At(s)),At(t),s&&t.add(s),e.userData={rig:t,wheels:i,ramBeam:s,vehicle:n,kind:n,phase:0,labelHeight:n==="wall"?1.35:n==="turtle"?1.95:1.7},e}function dm(n,e=null){if(["ram","wall","turtle","courier"].includes(n))return Jv(n);let t=am(n),i=Xc(n,e);if(i){let s=i.gold?rp:i,r=new Set(t.userData.costumeMaterials),o=new Map;if(t.traverse(a=>{if(!(!a.isMesh||!r.has(a.material))){if(!o.has(a.material)){let c=a.material.clone();c.color.set(s.body),c.userData.owned3d=!0,i.gold&&(c.metalness=.62,c.roughness=.4),o.set(a.material,c)}a.material=o.get(a.material)}}),t.userData.cape){let a=t.userData.cape.material.clone();a.color.set(s.sleeve||s.body),a.userData.owned3d=!0,t.userData.cape.material=a}t.userData.skin=i.id}if(n==="cavalry"){let s=new Oe,r=[],o=[],a=[];t.add(s);let c=ft("#70523c",{roughness:.95}),l=ft("#342e29",{roughness:.96});ce(s,"sphere",c,0,.73,0,.285,.285,.55);for(let u of[-.31,.3])ce(s,"sphere",c,0,.72,u,.275,.27,.25);let h=We(s,c,0,.97,.35,.145,.5);h.rotation.x=.36,ce(s,"sphere",c,0,1.19,.49,.145,.175,.235),ce(s,"sphere",c,0,1.12,.67,.11,.105,.19);for(let u of[-1,1]){let f=Dt(s,c,u*.085,1.39,.42,.042,.17);f.rotation.z=-u*.16,Ue(s,E.black,u*.135,1.23,.53,.019,.017,.012),Ue(s,E.black,u*.086,1.14,.78,.018,.012,.009),Ie(s,E.woodDark,[u*.13,1.27,.43],[u*.115,1.1,.65],.012),Ie(s,E.rope,[u*.11,1.1,.65],[u*.09,1.16,.77],.009);for(let d=0;d<5;d++)Ue(s,l,u*.025,1.24-d*.075,.32-d*.025,.05,.085,.045)}Ie(s,E.woodDark,[-.11,1.1,.65],[.11,1.1,.65],.016);for(let u=0;u<3;u++)Ie(s,l,[(u-1)*.03,.77,-.46],[(u-1)*.04,.28,-.72],.028);ce(s,"bevel",E.red,0,.93,-.02,.52,.08,.56),ce(s,"bevel",E.woodDark,0,.99,-.04,.36,.095,.36);for(let u of[-.21,.15])Ue(s,E.woodDark,0,1.02,u,.22,.085,.045);for(let u of[-1,1])Ie(s,E.woodDark,[u*.25,.93,0],[u*.29,.57,0],.014),ce(s,"bevel",E.steel,u*.29,.56,.01,.12,.025,.15);for(let u of[-.19,.19])for(let f of[-.36,.36]){let d=new Oe,p=new Oe,x=new Oe;d.position.set(u,.575,f),s.add(d),r.push(d),p.position.y=-.27,d.add(p),o.push(p),x.position.set(0,-.27,.02),p.add(x),a.push(x),We(d,c,0,-.13,0,.059,.27),Ue(d,c,0,-.24,.008,.062,.065,.058),We(p,c,0,-.13,.012,.041,.27),ce(x,"bevel",l,0,0,.025,.135,.11,.17),At(x),p.remove(x),At(p),p.add(x),d.remove(p),At(d),d.add(p)}for(let u of r)s.remove(u);At(s);for(let u of r)s.add(u);t.userData.horseLegs=r,t.userData.horseKnees=o,t.userData.horseHooves=a,t.userData.horseReins=Array.from({length:2},()=>We(t,E.woodDark,0,1,0,.007,.7)),t.userData.mountOffset=.72,cm(t,0,!1,0,0),t.userData.labelHeight=new qt().setFromObject(t).max.y+.15}return t}var dn=new kc({canvas:document.getElementById("season-canvas"),antialias:!0,alpha:!0});dn.setPixelRatio(Math.min(devicePixelRatio,1.5));dn.outputColorSpace=Pt;dn.toneMapping=mo;dn.shadowMap.enabled=!0;dn.shadowMap.type=us;var fm=new Vc,pm=new rr(dn),Qv=pm.fromScene(fm,.04);fm.dispose();pm.dispose();var mm=[];for(let[n,e]of[["s6","봄 · 꽃잎과 성곽"],["s10","여름 · 녹음과 강"],["s12","가을 · 단풍과 황혼"],["s13","겨울 · 눈 덮인 반격"]]){let t=ti[n],i=Up(t),s=document.createElement("article");s.innerHTML=`<div class="season-viewport"></div><div class="season-info"><div><small>${i.english}</small><h2>${e}</h2><p>${t.name} · ${t.paths.length}개 진입로 · ${t.waves.length}파도</p></div><a href="../3d.html?stage=${n}">이 전장으로 →</a></div>`,document.getElementById("season-review").append(s);let r=new cs;r.background=new tt(i.sky),r.environment=Qv.texture,r.environmentIntensity=.14,r.add(new ho(i.hemi,i.bounce,i.snow?.9:1.2));let o=new Ks(i.sun,i.sunPower);o.position.set(-7,23,-8),o.target.position.set(12,0,7),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-23,right:23,top:20,bottom:-20,near:.5,far:70}),o.shadow.normalBias=.03,r.add(o,o.target);let a=new Ks(i.fill,i.snow?.35:.5);a.position.set(30,8,20),r.add(a);let c=hm(t,i);r.add(c.root,c.water);for(let[u,f,d]of c.lamps){let p=new Oe;We(p,E.woodDark,u,d/2,f,.025,d),ae(p,E.window,u,d+.1,f,.12,.21,.12),Dt(p,E.roof,u,d+.24,f,.17,.12),At(p),r.add(p);let x=new hs("#ffb36b",i.snow?8.5:3,4.2,2);x.position.set(u,d+.2,f),r.add(x)}let l=Np({stageId:n});for(let u of l.towers){let f=Rn(om(u.type,2),i);f.position.set(u.cx,.03,u.cy),r.add(f)}for(let u of l.heroes){let f=dm(u.heroId);f.position.set(u.x,.035,u.y),f.rotation.y=Math.PI/5,r.add(f)}let h=new Zi(-20,20,12,-12,.1,150);h.position.set(29,26,33),h.lookAt(12,.1,7),mm.push({scene:r,camera:h,theme:i,viewport:s.querySelector(".season-viewport")})}function fl(){let n=innerWidth,e=innerHeight;dn.setSize(n,e,!1),dn.setScissorTest(!1),dn.setClearColor(0,0),dn.clear(),dn.setScissorTest(!0);for(let{scene:t,camera:i,theme:s,viewport:r}of mm){let o=r.getBoundingClientRect();if(o.bottom<0||o.top>e)continue;let a=10.7;i.left=-a*o.width/o.height,i.right=a*o.width/o.height,i.top=a,i.bottom=-a,i.zoom=1,i.updateProjectionMatrix(),dn.toneMappingExposure=s.exposure,dn.setViewport(o.left,e-o.bottom,o.width,o.height),dn.setScissor(o.left,e-o.bottom,o.width,o.height),dn.render(t,i)}document.body.dataset.renderer="webgl2"}addEventListener("resize",fl);addEventListener("scroll",fl,{passive:!0});zp(fl);fl();
/*! For license information please see season-review.js.LEGAL.txt */
