var Js="186";var xc=0,Ia=1,wc=2;var Pr=1,vc=2,Xi=3,jn=0,Dt=1,Ot=2,Mn=0,qi=1,Pa=2,Ha=3,La=4,yc=5;var ui=100,bc=101,Mc=102,Sc=103,Tc=104,Ac=200,Ec=201,Cc=202,Rc=203,Da=204,Na=205,Ic=206,Pc=207,Hc=208,Lc=209,Dc=210,Nc=211,Uc=212,Fc=213,Oc=214,ys=0,bs=1,Ms=2,Ui=3,Ss=4,Ts=5,Fi=6,As=7,Ua=0,Yc=1,Bc=2,fn=0,Fa=1,Oa=2,Ya=3,Ba=4,ka=5,za=6,Va=7;var Ga=300,Qn=301,pi=302,$s=303,js=304,Hr=306,Es=1e3,vn=1001,Cs=1002,vt=1003,kc=1004;var Lr=1005;var Mt=1006,Qs=1007;var ei=1008;var Wt=1009,Wa=1010,Xa=1011,Zi=1012,eo=1013,dn=1014,un=1015,pn=1016,to=1017,no=1018,Ki=1020,qa=35902,Za=35899,Ka=1021,Ja=1022,Qt=1023,yn=1026,ti=1027,$a=1028,io=1029,ni=1030,ro=1031;var so=1033,Dr=33776,Nr=33777,Ur=33778,Fr=33779,oo=35840,ao=35841,ho=35842,co=35843,lo=36196,fo=37492,uo=37496,po=37488,go=37489,Or=37490,mo=37491,_o=37808,xo=37809,wo=37810,vo=37811,yo=37812,bo=37813,Mo=37814,So=37815,To=37816,Ao=37817,Eo=37818,Co=37819,Ro=37820,Io=37821,Po=36492,Ho=36494,Lo=36495,Do=36283,No=36284,Yr=36285,Uo=36286;var ur=2300,Rs=2301,xs=2302,Sa=2303,Ta=2400,Aa=2401,Ea=2402;var zc=3200;var ja=0,Vc=1,Ln="",bt="srgb",pr="srgb-linear",gr="linear",Ke="srgb";var ws=7680;var Gc=519,Wc=512,Xc=513,qc=514,Fo=515,Zc=516,Kc=517,Oo=518,Jc=519,$c=35044;var Qa="300 es",cn=2e3,mr=2001;function wf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jc(){let i=Oi("canvas");return i.style.display="block",i}var $h={},Yi=null;function eh(...i){let e="THREE."+i.shift();Yi?Yi("log",e,...i):console.log(e,...i)}function Qc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=Qc(i);let e="THREE."+i.shift();if(Yi)Yi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Re(...i){i=Qc(i);let e="THREE."+i.shift();if(Yi)Yi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function li(...i){let e=i.join(" ");e in $h||($h[e]=!0,Ce(...i))}function el(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var tl={[ys]:bs,[Ms]:Fi,[Ss]:As,[Ui]:Ts,[bs]:ys,[Fi]:Ms,[As]:Ss,[Ts]:Ui},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,fr=Math.PI/180,Bi=180/Math.PI;function Ji(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function th(i,e){return(i%e+e)%e}function yf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bf(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function Mf(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function Sf(i,e=1){return e-Math.abs(th(i,e*2)-e)}function Tf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Af(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ef(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cf(i,e){return i+Math.random()*(e-i)}function Rf(i){return i*(.5-Math.random())}function If(i){i!==void 0&&(jh=i);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pf(i){return i*fr}function Hf(i){return i*Bi}function Lf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uf(i,e,t,n,r){let s=Math.cos,o=Math.sin,h=s(t/2),c=o(t/2),a=s((e+n)/2),f=o((e+n)/2),d=s((e-n)/2),l=o((e-n)/2),u=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(h*f,c*d,c*l,h*a);break;case"YZY":i.set(c*l,h*f,c*d,h*a);break;case"ZXZ":i.set(c*d,c*l,h*f,h*a);break;case"XZX":i.set(h*f,c*_,c*u,h*a);break;case"YXY":i.set(c*u,h*f,c*_,h*a);break;case"ZYZ":i.set(c*_,c*u,h*f,h*a);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yo={DEG2RAD:fr,RAD2DEG:Bi,generateUUID:Ji,clamp:Be,euclideanModulo:th,mapLinear:yf,inverseLerp:bf,lerp:dr,damp:Mf,pingpong:Sf,smoothstep:Tf,smootherstep:Af,randInt:Ef,randFloat:Cf,randFloatSpread:Rf,seededRandom:If,degToRad:Pf,radToDeg:Hf,isPowerOfTwo:Lf,ceilPowerOfTwo:Df,floorPowerOfTwo:Nf,setQuaternionFromProperEuler:Uf,normalize:It,denormalize:Di},oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var Ve=oh,zt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,h){let c=n[r+0],a=n[r+1],f=n[r+2],d=n[r+3],l=s[o+0],u=s[o+1],_=s[o+2],v=s[o+3];if(d!==v||c!==l||a!==u||f!==_){let g=c*l+a*u+f*_+d*v;g<0&&(l=-l,u=-u,_=-_,v=-v,g=-g);let p=1-h;if(g<.9995){let T=Math.acos(g),C=Math.sin(T);p=Math.sin(p*T)/C,h=Math.sin(h*T)/C,c=c*p+l*h,a=a*p+u*h,f=f*p+_*h,d=d*p+v*h}else{c=c*p+l*h,a=a*p+u*h,f=f*p+_*h,d=d*p+v*h;let T=1/Math.sqrt(c*c+a*a+f*f+d*d);c*=T,a*=T,f*=T,d*=T}}e[t]=c,e[t+1]=a,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let h=n[r],c=n[r+1],a=n[r+2],f=n[r+3],d=s[o],l=s[o+1],u=s[o+2],_=s[o+3];return e[t]=h*_+f*d+c*u-a*l,e[t+1]=c*_+f*l+a*d-h*u,e[t+2]=a*_+f*u+h*l-c*d,e[t+3]=f*_-h*d-c*l-a*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,h=Math.cos,c=Math.sin,a=h(n/2),f=h(r/2),d=h(s/2),l=c(n/2),u=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=l*f*d+a*u*_,this._y=a*u*d-l*f*_,this._z=a*f*_+l*u*d,this._w=a*f*d-l*u*_;break;case"YXZ":this._x=l*f*d+a*u*_,this._y=a*u*d-l*f*_,this._z=a*f*_-l*u*d,this._w=a*f*d+l*u*_;break;case"ZXY":this._x=l*f*d-a*u*_,this._y=a*u*d+l*f*_,this._z=a*f*_+l*u*d,this._w=a*f*d-l*u*_;break;case"ZYX":this._x=l*f*d-a*u*_,this._y=a*u*d+l*f*_,this._z=a*f*_-l*u*d,this._w=a*f*d+l*u*_;break;case"YZX":this._x=l*f*d+a*u*_,this._y=a*u*d+l*f*_,this._z=a*f*_-l*u*d,this._w=a*f*d-l*u*_;break;case"XZY":this._x=l*f*d-a*u*_,this._y=a*u*d-l*f*_,this._z=a*f*_+l*u*d,this._w=a*f*d+l*u*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],h=t[5],c=t[9],a=t[2],f=t[6],d=t[10],l=n+h+d;if(l>0){let u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(f-c)*u,this._y=(s-a)*u,this._z=(o-r)*u}else if(n>h&&n>d){let u=2*Math.sqrt(1+n-h-d);this._w=(f-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+a)/u}else if(h>d){let u=2*Math.sqrt(1+h-n-d);this._w=(s-a)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+f)/u}else{let u=2*Math.sqrt(1+d-n-h);this._w=(o-r)/u,this._x=(s+a)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,h=t._x,c=t._y,a=t._z,f=t._w;return this._x=n*f+o*h+r*a-s*c,this._y=r*f+o*c+s*h-n*a,this._z=s*f+o*a+n*c-r*h,this._w=o*f-n*h-r*c-s*a,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,h=this.dot(e);h<0&&(n=-n,r=-r,s=-s,o=-o,h=-h);let c=1-t;if(h<.9995){let a=Math.acos(h),f=Math.sin(a);c=Math.sin(c*a)/f,t=Math.sin(t*a)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,h=e.z,c=e.w,a=2*(o*r-h*n),f=2*(h*t-s*r),d=2*(s*n-o*t);return this.x=t+c*a+o*d-h*f,this.y=n+c*f+h*a-s*d,this.z=r+c*d+s*f-o*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,h=t.y,c=t.z;return this.x=r*c-s*h,this.y=s*o-n*c,this.z=n*h-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var U=ah,ra=new U,Qh=new zt,hh=class hh{constructor(e,t,n,r,s,o,h,c,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,h,c,a)}set(e,t,n,r,s,o,h,c,a){let f=this.elements;return f[0]=e,f[1]=r,f[2]=h,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],h=n[3],c=n[6],a=n[1],f=n[4],d=n[7],l=n[2],u=n[5],_=n[8],v=r[0],g=r[3],p=r[6],T=r[1],C=r[4],y=r[7],b=r[2],M=r[5],E=r[8];return s[0]=o*v+h*T+c*b,s[3]=o*g+h*C+c*M,s[6]=o*p+h*y+c*E,s[1]=a*v+f*T+d*b,s[4]=a*g+f*C+d*M,s[7]=a*p+f*y+d*E,s[2]=l*v+u*T+_*b,s[5]=l*g+u*C+_*M,s[8]=l*p+u*y+_*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],h=e[5],c=e[6],a=e[7],f=e[8];return t*o*f-t*h*a-n*s*f+n*h*c+r*s*a-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],h=e[5],c=e[6],a=e[7],f=e[8],d=f*o-h*a,l=h*c-f*s,u=a*s-o*c,_=t*d+n*l+r*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(r*a-f*n)*v,e[2]=(h*n-r*o)*v,e[3]=l*v,e[4]=(f*t-r*c)*v,e[5]=(r*s-h*t)*v,e[6]=u*v,e[7]=(n*c-a*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,h){let c=Math.cos(s),a=Math.sin(s);return this.set(n*c,n*a,-n*(c*o+a*h)+o+e,-r*a,r*c,-r*(-a*o+c*h)+h+t,0,0,1),this}scale(e,t){return li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sa.makeScale(e,t)),this}rotate(e){return li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;var Ie=hh,sa=new Ie,ec=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ff(){let i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ke&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?gr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return li("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return li("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var Ye=Ff();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vi,Is=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vi===void 0&&(vi=Oi("canvas")),vi.width=e.width,vi.height=e.height;let r=vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Of=0,ki=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,h=r.length;o<h;o++)r[o].isDataTexture?s.push(oa(r[o].image)):s.push(oa(r[o]))}else s=oa(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Is.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var Yf=0,aa=new U,Lt=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,r=vn,s=Mt,o=ei,h=Qt,c=Wt,a=i.DEFAULT_ANISOTROPY,f=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ji(),this.name="",this.source=new ki(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=a,this.format=h,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ga)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ga;Lt.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,a=c[0],f=c[4],d=c[8],l=c[1],u=c[5],_=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(f-l)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+l)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(a+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(a+1)/2,y=(u+1)/2,b=(p+1)/2,M=(f+l)/4,E=(d+v)/4,w=(_+g)/4;return C>y&&C>b?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=M/n,s=E/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=M/r,s=w/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=E/s,r=w/s),this.set(n,r,s,t),this}let T=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(l-f)*(l-f));return Math.abs(T)<.001&&(T=1),this.x=(g-_)/T,this.y=(d-v)/T,this.z=(l-f)/T,this.w=Math.acos((a+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var ht=ch,Ps=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Lt(r),o=n.count;for(let h=0;h<o;h++)this.textures[h]=s.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ki(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Ps{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_r=class extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hs=class extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ks=class Ks{constructor(e,t,n,r,s,o,h,c,a,f,d,l,u,_,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,h,c,a,f,d,l,u,_,v,g)}set(e,t,n,r,s,o,h,c,a,f,d,l,u,_,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=h,p[13]=c,p[2]=a,p[6]=f,p[10]=d,p[14]=l,p[3]=u,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ks().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),h=Math.sin(n),c=Math.cos(r),a=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let l=o*f,u=o*d,_=h*f,v=h*d;t[0]=c*f,t[4]=-c*d,t[8]=a,t[1]=u+_*a,t[5]=l-v*a,t[9]=-h*c,t[2]=v-l*a,t[6]=_+u*a,t[10]=o*c}else if(e.order==="YXZ"){let l=c*f,u=c*d,_=a*f,v=a*d;t[0]=l+v*h,t[4]=_*h-u,t[8]=o*a,t[1]=o*d,t[5]=o*f,t[9]=-h,t[2]=u*h-_,t[6]=v+l*h,t[10]=o*c}else if(e.order==="ZXY"){let l=c*f,u=c*d,_=a*f,v=a*d;t[0]=l-v*h,t[4]=-o*d,t[8]=_+u*h,t[1]=u+_*h,t[5]=o*f,t[9]=v-l*h,t[2]=-o*a,t[6]=h,t[10]=o*c}else if(e.order==="ZYX"){let l=o*f,u=o*d,_=h*f,v=h*d;t[0]=c*f,t[4]=_*a-u,t[8]=l*a+v,t[1]=c*d,t[5]=v*a+l,t[9]=u*a-_,t[2]=-a,t[6]=h*c,t[10]=o*c}else if(e.order==="YZX"){let l=o*c,u=o*a,_=h*c,v=h*a;t[0]=c*f,t[4]=v-l*d,t[8]=_*d+u,t[1]=d,t[5]=o*f,t[9]=-h*f,t[2]=-a*f,t[6]=u*d+_,t[10]=l-v*d}else if(e.order==="XZY"){let l=o*c,u=o*a,_=h*c,v=h*a;t[0]=c*f,t[4]=-d,t[8]=a*f,t[1]=l*d+v,t[5]=o*f,t[9]=u*d-_,t[2]=_*d-u,t[6]=h*f,t[10]=v*d+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,kf)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Yn.crossVectors(n,Bt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Yn.crossVectors(n,Bt)),Yn.normalize(),Qr.crossVectors(Bt,Yn),r[0]=Yn.x,r[4]=Qr.x,r[8]=Bt.x,r[1]=Yn.y,r[5]=Qr.y,r[9]=Bt.y,r[2]=Yn.z,r[6]=Qr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],h=n[4],c=n[8],a=n[12],f=n[1],d=n[5],l=n[9],u=n[13],_=n[2],v=n[6],g=n[10],p=n[14],T=n[3],C=n[7],y=n[11],b=n[15],M=r[0],E=r[4],w=r[8],A=r[12],H=r[1],D=r[5],Y=r[9],z=r[13],L=r[2],B=r[6],K=r[10],Z=r[14],ne=r[3],W=r[7],Q=r[11],te=r[15];return s[0]=o*M+h*H+c*L+a*ne,s[4]=o*E+h*D+c*B+a*W,s[8]=o*w+h*Y+c*K+a*Q,s[12]=o*A+h*z+c*Z+a*te,s[1]=f*M+d*H+l*L+u*ne,s[5]=f*E+d*D+l*B+u*W,s[9]=f*w+d*Y+l*K+u*Q,s[13]=f*A+d*z+l*Z+u*te,s[2]=_*M+v*H+g*L+p*ne,s[6]=_*E+v*D+g*B+p*W,s[10]=_*w+v*Y+g*K+p*Q,s[14]=_*A+v*z+g*Z+p*te,s[3]=T*M+C*H+y*L+b*ne,s[7]=T*E+C*D+y*B+b*W,s[11]=T*w+C*Y+y*K+b*Q,s[15]=T*A+C*z+y*Z+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],h=e[5],c=e[9],a=e[13],f=e[2],d=e[6],l=e[10],u=e[14],_=e[3],v=e[7],g=e[11],p=e[15],T=c*u-a*l,C=h*u-a*d,y=h*l-c*d,b=o*u-a*f,M=o*l-c*f,E=o*d-h*f;return t*(v*T-g*C+p*y)-n*(_*T-g*b+p*M)+r*(_*C-v*b+p*E)-s*(_*y-v*M+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],h=e[9],c=e[2],a=e[6],f=e[10];return t*(o*f-h*a)-n*(s*f-h*c)+r*(s*a-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],h=e[5],c=e[6],a=e[7],f=e[8],d=e[9],l=e[10],u=e[11],_=e[12],v=e[13],g=e[14],p=e[15],T=t*h-n*o,C=t*c-r*o,y=t*a-s*o,b=n*c-r*h,M=n*a-s*h,E=r*a-s*c,w=f*v-d*_,A=f*g-l*_,H=f*p-u*_,D=d*g-l*v,Y=d*p-u*v,z=l*p-u*g,L=T*z-C*Y+y*D+b*H-M*A+E*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(h*z-c*Y+a*D)*B,e[1]=(r*Y-n*z-s*D)*B,e[2]=(v*E-g*M+p*b)*B,e[3]=(l*M-d*E-u*b)*B,e[4]=(c*H-o*z-a*A)*B,e[5]=(t*z-r*H+s*A)*B,e[6]=(g*y-_*E-p*C)*B,e[7]=(f*E-l*y+u*C)*B,e[8]=(o*Y-h*H+a*w)*B,e[9]=(n*H-t*Y-s*w)*B,e[10]=(_*M-v*y+p*T)*B,e[11]=(d*y-f*M-u*T)*B,e[12]=(h*A-o*D-c*w)*B,e[13]=(t*D-n*A+r*w)*B,e[14]=(v*C-_*b-g*T)*B,e[15]=(f*b-d*C+l*T)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,h=e.y,c=e.z,a=s*o,f=s*h;return this.set(a*o+n,a*h-r*c,a*c+r*h,0,a*h+r*c,f*h+n,f*c-r*o,0,a*c-r*h,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,h=t._z,c=t._w,a=s+s,f=o+o,d=h+h,l=s*a,u=s*f,_=s*d,v=o*f,g=o*d,p=h*d,T=c*a,C=c*f,y=c*d,b=n.x,M=n.y,E=n.z;return r[0]=(1-(v+p))*b,r[1]=(u+y)*b,r[2]=(_-C)*b,r[3]=0,r[4]=(u-y)*M,r[5]=(1-(l+p))*M,r[6]=(g+T)*M,r[7]=0,r[8]=(_+C)*E,r[9]=(g-T)*E,r[10]=(1-(l+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=yi.set(r[0],r[1],r[2]).length(),h=yi.set(r[4],r[5],r[6]).length(),c=yi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),sn.copy(this);let a=1/o,f=1/h,d=1/c;return sn.elements[0]*=a,sn.elements[1]*=a,sn.elements[2]*=a,sn.elements[4]*=f,sn.elements[5]*=f,sn.elements[6]*=f,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),n.x=o,n.y=h,n.z=c,this}makePerspective(e,t,n,r,s,o,h=cn,c=!1){let a=this.elements,f=2*s/(t-e),d=2*s/(n-r),l=(t+e)/(t-e),u=(n+r)/(n-r),_,v;if(c)_=s/(o-s),v=o*s/(o-s);else if(h===cn)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(h===mr)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return a[0]=f,a[4]=0,a[8]=l,a[12]=0,a[1]=0,a[5]=d,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o,h=cn,c=!1){let a=this.elements,f=2/(t-e),d=2/(n-r),l=-(t+e)/(t-e),u=-(n+r)/(n-r),_,v;if(c)_=1/(o-s),v=o/(o-s);else if(h===cn)_=-2/(o-s),v=-(o+s)/(o-s);else if(h===mr)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return a[0]=f,a[4]=0,a[8]=0,a[12]=l,a[1]=0,a[5]=d,a[9]=0,a[13]=u,a[2]=0,a[6]=0,a[10]=_,a[14]=v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ks.prototype.isMatrix4=!0;var ot=Ks,yi=new U,sn=new ot,Bf=new U(0,0,0),kf=new U(1,1,1),Yn=new U,Qr=new U,Bt=new U,nc=new ot,ic=new zt,Wn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],h=r[8],c=r[1],a=r[5],f=r[9],d=r[2],l=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(l,a),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(h,u),this._z=Math.atan2(c,a)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,a)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,a));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,a),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(h,u));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,a),this._y=Math.atan2(h,s)):(this._x=Math.atan2(-f,u),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zf=0,rc=new U,bi=new zt,En=new ot,es=new U,ar=new U,Vf=new U,Gf=new zt,sc=new U(1,0,0),oc=new U(0,1,0),ac=new U(0,0,1),hc={type:"added"},Wf={type:"removed"},Mi={type:"childadded",child:null},ha={type:"childremoved",child:null},$t=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new Wn,n=new zt,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ie}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ar,es,this.up):En.lookAt(es,ar,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(En),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wf),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,h=s.length;o<h;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(h,c){return h[c.uuid]===void 0&&(h[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let c=h.shapes;if(Array.isArray(c))for(let a=0,f=c.length;a<f;a++){let d=c[a];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let c=0,a=this.material.length;c<a;c++)h.push(s(e.materials,this.material[c]));r.material=h}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){let c=this.animations[h];r.animations.push(s(e.animations,c))}}if(t){let h=o(e.geometries),c=o(e.materials),a=o(e.textures),f=o(e.images),d=o(e.shapes),l=o(e.skeletons),u=o(e.animations),_=o(e.nodes);h.length>0&&(n.geometries=h),c.length>0&&(n.materials=c),a.length>0&&(n.textures=a),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(h){let c=[];for(let a in h){let f=h[a];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new U(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,h=this._targetRay,c=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(a,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let f=a.joints["index-finger-tip"],d=a.joints["thumb-tip"],l=f.position.distanceTo(d.position),u=.02,_=.005;a.inputState.pinching&&l>u+_?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&l<=u-_&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return h!==null&&(h.visible=r!==null),c!==null&&(c.visible=s!==null),a!==null&&(a.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=th(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ca(o,s,e+1/3),this.g=ca(o,s,e),this.b=ca(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],h=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Ye.workingToColorSpace(Et.copy(this),e),Math.round(Be(Et.r*255,0,255))*65536+Math.round(Be(Et.g*255,0,255))*256+Math.round(Be(Et.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Et.copy(this),t);let n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),h=Math.min(n,r,s),c,a,f=(h+o)/2;if(h===o)c=0,a=0;else{let d=o-h;switch(a=f<=.5?d/(o+h):d/(2-o-h),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=a,e.l=f,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=bt){Ye.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,r=Et.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(ts);let n=dr(Bn.h,ts.h,t),r=dr(Bn.s,ts.s,t),s=dr(Bn.l,ts.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Ge;Ge.NAMES=nl;var wr=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new U,Cn=new U,la=new U,Rn=new U,Si=new U,Ti=new U,cc=new U,fa=new U,da=new U,ua=new U,pa=new ht,ga=new ht,ma=new ht,Gn=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Cn.subVectors(n,t),la.subVectors(e,t);let o=on.dot(on),h=on.dot(Cn),c=on.dot(la),a=Cn.dot(Cn),f=Cn.dot(la),d=o*a-h*h;if(d===0)return s.set(0,0,0),null;let l=1/d,u=(a*c-h*f)*l,_=(o*f-h*c)*l;return s.set(1-u-_,_,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,s,o,h,c){return this.getBarycoord(e,t,n,r,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(h,Rn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return pa.setScalar(0),ga.setScalar(0),ma.setScalar(0),pa.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pa,s.x),o.addScaledVector(ga,s.y),o.addScaledVector(ma,s.z),o}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,h;Si.subVectors(r,n),Ti.subVectors(s,n),fa.subVectors(e,n);let c=Si.dot(fa),a=Ti.dot(fa);if(c<=0&&a<=0)return t.copy(n);da.subVectors(e,r);let f=Si.dot(da),d=Ti.dot(da);if(f>=0&&d<=f)return t.copy(r);let l=c*d-f*a;if(l<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Si,o);ua.subVectors(e,s);let u=Si.dot(ua),_=Ti.dot(ua);if(_>=0&&u<=_)return t.copy(s);let v=u*a-c*_;if(v<=0&&a>=0&&_<=0)return h=a/(a-_),t.copy(n).addScaledVector(Ti,h);let g=f*_-u*d;if(g<=0&&d-f>=0&&u-_>=0)return cc.subVectors(s,r),h=(d-f)/(d-f+(u-_)),t.copy(r).addScaledVector(cc,h);let p=1/(g+v+l);return o=v*p,h=l*p,t.copy(n).addScaledVector(Si,o).addScaledVector(Ti,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,h=s.count;o<h;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),is.subVectors(this.max,hr),Ai.subVectors(e.a,hr),Ei.subVectors(e.b,hr),Ci.subVectors(e.c,hr),kn.subVectors(Ei,Ai),zn.subVectors(Ci,Ei),oi.subVectors(Ai,Ci);let t=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-oi.z,oi.y,kn.z,0,-kn.x,zn.z,0,-zn.x,oi.z,0,-oi.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-oi.y,oi.x,0];return!_a(t,Ai,Ei,Ci,is)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Ai,Ei,Ci,is))?!1:(rs.crossVectors(kn,zn),t=[rs.x,rs.y,rs.z],_a(t,Ai,Ei,Ci,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new U,new U,new U,new U,new U,new U,new U,new U],an=new U,ns=new Xn,Ai=new U,Ei=new U,Ci=new U,kn=new U,zn=new U,oi=new U,hr=new U,is=new U,rs=new U,ai=new U;function _a(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ai.fromArray(i,s);let h=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),c=e.dot(ai),a=t.dot(ai),f=n.dot(ai);if(Math.max(-Math.max(c,a,f),Math.min(c,a,f))>h)return!1}return!0}var ut=new U,ss=new Ve,qf=0,Jt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var vr=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yr=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ht=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zf=new Xn,cr=new U,xa=new U,Vi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(xa)),this.expandByPoint(cr.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kf=0,Kt=new ot,wa=new $t,Ri=new U,kt=new Xn,lr=new Xn,wt=new U,ln=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?yr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let h=t[s];lr.setFromBufferAttribute(h),this.morphTargetsRelative?(wt.addVectors(kt.min,lr.min),kt.expandByPoint(wt),wt.addVectors(kt.max,lr.max),kt.expandByPoint(wt)):(kt.expandByPoint(lr.min),kt.expandByPoint(lr.max))}kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){let h=t[s],c=this.morphTargetsRelative;for(let a=0,f=h.count;a<f;a++)wt.fromBufferAttribute(h,a),c&&(Ri.fromBufferAttribute(e,a),wt.add(Ri)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let h=[],c=[];for(let w=0;w<n.count;w++)h[w]=new U,c[w]=new U;let a=new U,f=new U,d=new U,l=new Ve,u=new Ve,_=new Ve,v=new U,g=new U;function p(w,A,H){a.fromBufferAttribute(n,w),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,H),l.fromBufferAttribute(s,w),u.fromBufferAttribute(s,A),_.fromBufferAttribute(s,H),f.sub(a),d.sub(a),u.sub(l),_.sub(l);let D=1/(u.x*_.y-_.x*u.y);isFinite(D)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(d,-u.y).multiplyScalar(D),g.copy(d).multiplyScalar(u.x).addScaledVector(f,-_.x).multiplyScalar(D),h[w].add(v),h[A].add(v),h[H].add(v),c[w].add(g),c[A].add(g),c[H].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let w=0,A=T.length;w<A;++w){let H=T[w],D=H.start,Y=H.count;for(let z=D,L=D+Y;z<L;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let C=new U,y=new U,b=new U,M=new U;function E(w){b.fromBufferAttribute(r,w),M.copy(b);let A=h[w];C.copy(A),C.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(M,A);let D=y.dot(c[w])<0?-1:1;o.setXYZW(w,C.x,C.y,C.z,D)}for(let w=0,A=T.length;w<A;++w){let H=T[w],D=H.start,Y=H.count;for(let z=D,L=D+Y;z<L;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);let r=new U,s=new U,o=new U,h=new U,c=new U,a=new U,f=new U,d=new U;if(e)for(let l=0,u=e.count;l<u;l+=3){let _=e.getX(l+0),v=e.getX(l+1),g=e.getX(l+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),h.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),h.add(f),c.add(f),a.add(f),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z)}else for(let l=0,u=t.count;l<u;l+=3)r.fromBufferAttribute(t,l+0),s.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),n.setXYZ(l+0,f.x,f.y,f.z),n.setXYZ(l+1,f.x,f.y,f.z),n.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(h,c){let a=h.array,f=h.itemSize,d=h.normalized,l=new a.constructor(c.length*f),u=0,_=0;for(let v=0,g=c.length;v<g;v++){h.isInterleavedBufferAttribute?u=c[v]*h.data.stride+h.offset:u=c[v]*f;for(let p=0;p<f;p++)l[_++]=a[u++]}return new Jt(l,f,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let h in r){let c=r[h],a=e(c,n);t.setAttribute(h,a)}let s=this.morphAttributes;for(let h in s){let c=[],a=s[h];for(let f=0,d=a.length;f<d;f++){let l=a[f],u=e(l,n);c.push(u)}t.morphAttributes[h]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let h=0,c=o.length;h<c;h++){let a=o[h];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let a in c)c[a]!==void 0&&(e[a]=c[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let a=n[c];e.data.attributes[c]=a.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let a=this.morphAttributes[c],f=[];for(let d=0,l=a.length;d<l;d++){let u=a[d];f.push(u.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let a in r){let f=r[a];this.setAttribute(a,f.clone(t))}let s=e.morphAttributes;for(let a in s){let f=[],d=s[a];for(let l=0,u=d.length;l<u;l++)f.push(d[l].clone(t));this.morphAttributes[a]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let a=0,f=o.length;a<f;a++){let d=o[a];this.addGroup(d.start,d.count,d.materialIndex)}let h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var va=new U,Jf=new U,$f=new Ie,hn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=va.subVectors(n,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(va),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$f.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jf=0,fi=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=qi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Na,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let h in s){let c=s[h];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pn=new U,ya=new U,os=new U,as=new U,Ls=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ya.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),as.copy(this.origin).sub(ya);let s=e.distanceTo(t)*.5,o=-this.direction.dot(os),h=as.dot(this.direction),c=-as.dot(os),a=as.lengthSq(),f=Math.abs(1-o*o),d,l,u,_;if(f>0)if(d=o*c-h,l=o*h-c,_=s*f,d>=0)if(l>=-_)if(l<=_){let v=1/f;d*=v,l*=v,u=d*(d+o*l+2*h)+l*(o*d+l+2*c)+a}else l=s,d=Math.max(0,-(o*l+h)),u=-d*d+l*(l+2*c)+a;else l=-s,d=Math.max(0,-(o*l+h)),u=-d*d+l*(l+2*c)+a;else l<=-_?(d=Math.max(0,-(-o*s+h)),l=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+l*(l+2*c)+a):l<=_?(d=0,l=Math.min(Math.max(-s,-c),s),u=l*(l+2*c)+a):(d=Math.max(0,-(o*s+h)),l=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+l*(l+2*c)+a);else l=o>0?-s:s,d=Math.max(0,-(o*l+h)),u=-d*d+l*(l+2*c)+a;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ya).addScaledVector(os,l),u}intersectSphere(e,t){if(e.radius<0)return null;Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),h=n-o,c=n+o;return c<0?null:h<0?this.at(c,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,h,c,a=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,l=this.origin;return a>=0?(n=(e.min.x-l.x)*a,r=(e.max.x-l.x)*a):(n=(e.max.x-l.x)*a,r=(e.min.x-l.x)*a),f>=0?(s=(e.min.y-l.y)*f,o=(e.max.y-l.y)*f):(s=(e.max.y-l.y)*f,o=(e.min.y-l.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(h=(e.min.z-l.z)*d,c=(e.max.z-l.z)*d):(h=(e.max.z-l.z)*d,c=(e.min.z-l.z)*d),n>c||h>r)||((h>n||n!==n)&&(n=h),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,h=this.direction,c=h.x,a=h.y,f=h.z,d=e.x-o.x,l=e.y-o.y,u=e.z-o.z,_=t.x-o.x,v=t.y-o.y,g=t.z-o.z,p=n.x-o.x,T=n.y-o.y,C=n.z-o.z,y=Math.abs(c),b=Math.abs(a),M=Math.abs(f),E,w,A,H,D,Y,z,L,B,K,Z,ne;if(y>=b&&y>=M?(A=c,Y=d,B=_,ne=p,c>=0?(E=a,w=f,H=l,D=u,z=v,L=g,K=T,Z=C):(E=f,w=a,H=u,D=l,z=g,L=v,K=C,Z=T)):b>=M?(A=a,Y=l,B=v,ne=T,a>=0?(E=f,w=c,H=u,D=d,z=g,L=_,K=C,Z=p):(E=c,w=f,H=d,D=u,z=_,L=g,K=p,Z=C)):(A=f,Y=u,B=g,ne=C,f>=0?(E=c,w=a,H=d,D=l,z=_,L=v,K=p,Z=T):(E=a,w=c,H=l,D=d,z=v,L=_,K=T,Z=p)),A===0)return null;let W=E/A,Q=w/A,te=1/A,Ae=H-W*Y,Se=D-Q*Y,Qe=z-W*B,ke=L-Q*B,Xe=K-W*ne,X=Z-Q*ne,j=Xe*ke-X*Qe,_e=Ae*X-Se*Xe,Pe=Qe*Se-ke*Ae;if(r){if(j<0||_e<0||Pe<0)return null}else if((j<0||_e<0||Pe<0)&&(j>0||_e>0||Pe>0))return null;let ge=j+_e+Pe;if(ge===0)return null;let Ne=te*(j*Y+_e*B+Pe*ne);return(ge>0?Ne<0:Ne>0)?null:this.at(Ne/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lc=new ot,hi=new Ls,hs=new Vi,fc=new U,cs=new U,ls=new U,fs=new U,ba=new U,ds=new U,dc=new U,us=new U,gt=class extends $t{constructor(e=new ln,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let h=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let h=this.morphTargetInfluences;if(s&&h){ds.set(0,0,0);for(let c=0,a=s.length;c<a;c++){let f=h[c],d=s[c];f!==0&&(ba.fromBufferAttribute(d,e),o?ds.addScaledVector(ba,f):ds.addScaledVector(ba.sub(t),f))}t.add(ds)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),hi.copy(e.ray).recast(e.near),!(hs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(hs,fc)===null||hi.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(lc.copy(s).invert(),hi.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,h=s.index,c=s.attributes.position,a=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,l=s.groups,u=s.drawRange;if(h!==null)if(Array.isArray(o))for(let _=0,v=l.length;_<v;_++){let g=l[_],p=o[g.materialIndex],T=Math.max(g.start,u.start),C=Math.min(h.count,Math.min(g.start+g.count,u.start+u.count));for(let y=T,b=C;y<b;y+=3){let M=h.getX(y),E=h.getX(y+1),w=h.getX(y+2);r=ps(this,p,e,n,a,f,d,M,E,w),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,u.start),v=Math.min(h.count,u.start+u.count);for(let g=_,p=v;g<p;g+=3){let T=h.getX(g),C=h.getX(g+1),y=h.getX(g+2);r=ps(this,o,e,n,a,f,d,T,C,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=l.length;_<v;_++){let g=l[_],p=o[g.materialIndex],T=Math.max(g.start,u.start),C=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=T,b=C;y<b;y+=3){let M=y,E=y+1,w=y+2;r=ps(this,p,e,n,a,f,d,M,E,w),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let _=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let g=_,p=v;g<p;g+=3){let T=g,C=g+1,y=g+2;r=ps(this,o,e,n,a,f,d,T,C,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Qf(i,e,t,n,r,s,o,h){let c;if(e.side===Dt?c=n.intersectTriangle(o,s,r,!0,h):c=n.intersectTriangle(r,s,o,e.side===jn,h),c===null)return null;us.copy(h),us.applyMatrix4(i.matrixWorld);let a=t.ray.origin.distanceTo(us);return a<t.near||a>t.far?null:{distance:a,point:us.clone(),object:i}}function ps(i,e,t,n,r,s,o,h,c,a){i.getVertexPosition(h,cs),i.getVertexPosition(c,ls),i.getVertexPosition(a,fs);let f=Qf(i,e,t,n,cs,ls,fs,dc);if(f){let d=new U;Gn.getBarycoord(dc,cs,ls,fs,d),r&&(f.uv=Gn.getInterpolatedAttribute(r,h,c,a,d,new Ve)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,h,c,a,d,new Ve)),o&&(f.normal=Gn.getInterpolatedAttribute(o,h,c,a,d,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let l={a:h,b:c,c:a,normal:new U,materialIndex:0};Gn.getNormal(cs,ls,fs,l.normal),f.face=l,f.barycoord=d}return f}var Gi=class extends Lt{constructor(e=null,t=1,n=1,r,s,o,h,c,a=vt,f=vt,d,l){super(null,o,h,c,a,f,r,s,d,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=new Vi,ed=new Ve(.5,.5),gs=new U,br=class{constructor(e=new hn,t=new hn,n=new hn,r=new hn,s=new hn,o=new hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(r),h[4].copy(s),h[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){let r=this.planes,s=e.elements,o=s[0],h=s[1],c=s[2],a=s[3],f=s[4],d=s[5],l=s[6],u=s[7],_=s[8],v=s[9],g=s[10],p=s[11],T=s[12],C=s[13],y=s[14],b=s[15];if(r[0].setComponents(a-o,u-f,p-_,b-T).normalize(),r[1].setComponents(a+o,u+f,p+_,b+T).normalize(),r[2].setComponents(a+h,u+d,p+v,b+C).normalize(),r[3].setComponents(a-h,u-d,p-v,b-C).normalize(),n)r[4].setComponents(c,l,g,y).normalize(),r[5].setComponents(a-c,u-l,p-g,b-y).normalize();else if(r[4].setComponents(a-c,u-l,p-g,b-y).normalize(),t===cn)r[5].setComponents(a+c,u+l,p+g,b+y).normalize();else if(t===mr)r[5].setComponents(c,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);let t=ed.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends Lt{constructor(e=[],t=Qn,n,r,s,o,h,c,a,f){super(e,t,n,r,s,o,h,c,a,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sr=class extends Lt{constructor(e,t,n,r,s,o,h,c,a){super(e,t,n,r,s,o,h,c,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends Lt{constructor(e,t,n=dn,r,s,o,h=vt,c=vt,a,f=yn,d=1){if(f!==yn&&f!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let l={width:e,height:t,depth:d};super(l,r,s,o,h,c,f,n,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ki(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ds=class extends qn{constructor(e,t=dn,n=Qn,r,s,o=vt,h=vt,c,a=yn){let f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,s,o,h,c,a),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Tr=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wi=class i extends ln{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let h=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],a=[],f=[],d=[],l=0,u=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function _(v,g,p,T,C,y,b,M,E,w,A){let H=y/E,D=b/w,Y=y/2,z=b/2,L=M/2,B=E+1,K=w+1,Z=0,ne=0,W=new U;for(let Q=0;Q<K;Q++){let te=Q*D-z;for(let Ae=0;Ae<B;Ae++){let Se=Ae*H-Y;W[v]=Se*T,W[g]=te*C,W[p]=L,a.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=M>0?1:-1,f.push(W.x,W.y,W.z),d.push(Ae/E),d.push(1-Q/w),Z+=1}}for(let Q=0;Q<w;Q++)for(let te=0;te<E;te++){let Ae=l+te+B*Q,Se=l+te+B*(Q+1),Qe=l+(te+1)+B*(Q+1),ke=l+(te+1)+B*Q;c.push(Ae,Se,ke),c.push(Se,Qe,ke),ne+=6}h.addGroup(u,ne,A),u+=ne,l+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ar=class i extends ln{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],h=[],c=[],a=new U,f=new Ve;o.push(0,0,0),h.push(0,0,1),c.push(.5,.5);for(let d=0,l=3;d<=t;d++,l+=3){let u=n+d/t*r;a.x=e*Math.cos(u),a.y=e*Math.sin(u),o.push(a.x,a.y,a.z),h.push(0,0,1),f.x=(o[l]/e+1)/2,f.y=(o[l+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Zn=class i extends ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,h=Math.floor(n),c=Math.floor(r),a=h+1,f=c+1,d=e/h,l=t/c,u=[],_=[],v=[],g=[];for(let p=0;p<f;p++){let T=p*l-o;for(let C=0;C<a;C++){let y=C*d-s;_.push(y,-T,0),v.push(0,0,1),g.push(C/h),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<h;T++){let C=T+a*p,y=T+a*(p+1),b=T+1+a*(p+1),M=T+1+a*p;u.push(C,y,M),u.push(y,b,M)}this.setIndex(u),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function gi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(uc(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(uc(r[0])){let s=[];for(let o=0,h=r.length;o<h;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ct(i){let e={};for(let t=0;t<i.length;t++){let n=gi(i[t]);for(let r in n)e[r]=n[r]}return e}function uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function td(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var il={clone:gi,merge:Ct},nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gi(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ns=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Us=class extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fs=class extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ii(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ma(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Kn=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let h=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===h)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let h=t[1];e<h&&(n=2,s=h);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let h=n+o>>>1;e<t[h]?o=h:n=h+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Os=class extends Kn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ta,endingEnd:Ta}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,h=r[s],c=r[o];if(h===void 0)switch(this.getSettings_().endingStart){case Aa:s=e,h=2*t-n;break;case Ea:s=r.length-2,h=t+r[s]-r[s+1];break;default:s=e,h=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Aa:o=e,c=2*n-t;break;case Ea:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let a=(n-t)*.5,f=this.valueSize;this._weightPrev=a/(t-h),this._weightNext=a/(c-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,h=this.valueSize,c=e*h,a=c-h,f=this._offsetPrev,d=this._offsetNext,l=this._weightPrev,u=this._weightNext,_=(n-t)/(r-t),v=_*_,g=v*_,p=-l*g+2*l*v-l*_,T=(1+l)*g+(-1.5-2*l)*v+(-.5+l)*_+1,C=(-1-u)*g+(1.5+u)*v+.5*_,y=u*g-u*v;for(let b=0;b!==h;++b)s[b]=p*o[f+b]+T*o[a+b]+C*o[c+b]+y*o[d+b];return s}},Ys=class extends Kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,h=this.valueSize,c=e*h,a=c-h,f=(n-t)/(r-t),d=1-f;for(let l=0;l!==h;++l)s[l]=o[a+l]*d+o[c+l]*f;return s}},Bs=class extends Kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ks=class extends Kn{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,h=this.valueSize,c=e*h,a=c-h,f=this.inTangents,d=this.outTangents;if(!f||!d){let _=(n-t)/(r-t),v=1-_;for(let g=0;g!==h;++g)s[g]=o[a+g]*v+o[c+g]*_;return s}let l=h*2,u=e-1;for(let _=0;_!==h;++_){let v=o[a+_],g=o[c+_],p=u*l+_*2,T=d[p],C=d[p+1],y=e*l+_*2,b=f[y],M=f[y+1],E=sd(n,t,T,b,r);s[_]=rl(E,v,C,M,g)}return s}};function rl(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function rd(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function sd(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let h=rl(s,e,t,n,r)-i;if(Math.abs(h)<1e-10)break;let c=rd(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-h/c))}return s}var Gt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ii(t,this.TimeBufferType),this.values=Ii(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ii(e.times,Array),values:Ii(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ma(e.settings)&&(n.settings={inTangents:Ii(e.settings.inTangents,Array),outTangents:Ii(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ys(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Os(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ks(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case xs:t=this.InterpolantFactoryMethodSmooth;break;case Sa:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return xs;case this.InterpolantFactoryMethodBezier:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ma(this.settings)&&(pc(this.settings.inTangents,e),pc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let h=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*h,o*h)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let h=0;h!==s;h++){let c=n[h];if(typeof c=="number"&&isNaN(c)){Re("KeyframeTrack: Time is not a valid number.",this,h,c),e=!1;break}if(o!==null&&o>c){Re("KeyframeTrack: Out of order keys.",this,h,c,o),e=!1;break}o=c}if(r!==void 0&&vf(r))for(let h=0,c=r.length;h!==c;++h){let a=r[h];if(isNaN(a)){Re("KeyframeTrack: Value is not a valid number.",this,h,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===xs,s=e.length-1,o=1;for(let h=1;h<s;++h){let c=!1,a=e[h],f=e[h+1];if(a!==f&&(h!==1||a!==e[0]))if(r)c=!0;else{let d=h*n,l=d-n,u=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[l+_]||v!==t[u+_]){c=!0;break}}}if(c){if(h!==o){e[o]=e[h];let d=h*n,l=o*n;for(let u=0;u!==n;++u)t[l+u]=t[d+u]}++o}}if(s>0){e[o]=e[s];for(let h=s*n,c=o*n,a=0;a!==n;++a)t[c+a]=t[h+a];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ma(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function pc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Rs;var Jn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=ur;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}};zs.prototype.ValueTypeName="color";var Vs=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}};Vs.prototype.ValueTypeName="number";var Gs=class extends Kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,h=this.valueSize,c=(n-t)/(r-t),a=e*h;for(let f=a+h;a!==f;a+=4)zt.slerpFlat(s,0,o,a-h,o,a,c);return s}},Er=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Gs(this.times,this.values,this.getValueSize(),e)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Gt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=ur;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}};Ws.prototype.ValueTypeName="vector";var vs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Xs=class{constructor(e,t,n){let r=this,s=!1,o=0,h=0,c,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){h++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,h),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,h),o===h&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return a.push(f,d),this},this.removeHandler=function(f){let d=a.indexOf(f);return d!==-1&&a.splice(d,2),this},this.getHandler=function(f){for(let d=0,l=a.length;d<l;d+=2){let u=a[d],_=a[d+1];if(u.global&&(u.lastIndex=0),u.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sl=new Xs,Cr=class{constructor(e){this.manager=e!==void 0?e:sl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi=new WeakMap,Rr=class extends Cr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=vs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Pi.get(o);d===void 0&&(d=[],Pi.set(o,d)),d.push({onLoad:t,onError:r})}return o}let h=Oi("img");function c(){f(),t&&t(this);let d=Pi.get(this)||[];for(let l=0;l<d.length;l++){let u=d[l];u.onLoad&&u.onLoad(this)}Pi.delete(this),s.manager.itemEnd(e)}function a(d){f(),r&&r(d),vs.remove(`image:${e}`);let l=Pi.get(this)||[];for(let u=0;u<l.length;u++){let _=l[u];_.onError&&_.onError(d)}Pi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){h.removeEventListener("load",c,!1),h.removeEventListener("error",a,!1)}return h.addEventListener("load",c,!1),h.addEventListener("error",a,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),vs.add(`image:${e}`,h),s.manager.itemStart(e),h.src=e,h}};var ms=new U,_s=new zt,wn=new U,Ir=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ms,_s,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ms,_s,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ms,_s,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ms,_s,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vn=new U,mc=new Ve,_c=new Ve,Ut=class extends Ir{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,_c),t.subVectors(_c,mc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,a=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/a,r*=o.width/c,n*=o.height/a}let h=this.filmOffset;h!==0&&(s+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var di=class extends Ir{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,h=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=a*this.view.offsetX,o=s+a*this.view.width,h-=f*this.view.offsetY,c=h-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,h,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Hi=-90,Li=1,qs=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ut(Hi,Li,e,t);r.layers=this.layers,this.add(r);let s=new Ut(Hi,Li,e,t);s.layers=this.layers,this.add(s);let o=new Ut(Hi,Li,e,t);o.layers=this.layers,this.add(o);let h=new Ut(Hi,Li,e,t);h.layers=this.layers,this.add(h);let c=new Ut(Hi,Li,e,t);c.layers=this.layers,this.add(c);let a=new Ut(Hi,Li,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,h,c]=t;for(let a of t)this.remove(a);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,h,c,a,f]=this.children,d=e.getRenderTarget(),l=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,l,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Zs=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ih="\\[\\]\\.:\\/",od=new RegExp("["+ih+"]","g"),rh="[^"+ih+"]",ad="[^"+ih.replace("\\.","")+"]",hd=/((?:WC+[\/:])*)/.source.replace("WC",rh),cd=/(WCOD+)?/.source.replace("WCOD",ad),ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),fd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),dd=new RegExp("^"+hd+cd+ld+fd+"$"),ud=["material","materials","bones","map"],Ca=class{constructor(e,t,n){let r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(od,"")}static parseTrackName(e){let t=dd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ud.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let h=s[o];if(h.name===t||h.uuid===t)return h;let c=n(h.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let a=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===a){a=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(a!==void 0){if(e[a]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let o=e[r];if(o===void 0){let a=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+a+"."+r+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Ca;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hm=new Float32Array(1);var lh=class lh{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};lh.prototype.isMatrix2=!0;var Ra=lh;function sh(i,e,t,n){let r=pd(n);switch(t){case Ka:return i*e;case $a:return i*e/r.components*r.byteLength;case io:return i*e/r.components*r.byteLength;case ni:return i*e*2/r.components*r.byteLength;case ro:return i*e*2/r.components*r.byteLength;case Ja:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case so:return i*e*4/r.components*r.byteLength;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:case co:return Math.max(i,16)*Math.max(e,8)/4;case oo:case ho:return Math.max(i,8)*Math.max(e,8)/2;case lo:case fo:case po:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case Or:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Po:case Ho:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Do:case No:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yr:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pd(i){switch(i){case Wt:case Wa:return{byteLength:1,components:1};case Zi:case Xa:case pn:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case dn:case eo:case un:return{byteLength:4,components:1};case qa:case Za:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);function El(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function gd(i){let e=new WeakMap;function t(h,c){let a=h.array,f=h.usage,d=a.byteLength,l=i.createBuffer();i.bindBuffer(c,l),i.bufferData(c,a,f),h.onUploadCallback();let u;if(a instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)u=i.HALF_FLOAT;else if(a instanceof Uint16Array)h.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(a instanceof Int16Array)u=i.SHORT;else if(a instanceof Uint32Array)u=i.UNSIGNED_INT;else if(a instanceof Int32Array)u=i.INT;else if(a instanceof Int8Array)u=i.BYTE;else if(a instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:l,type:u,bytesPerElement:a.BYTES_PER_ELEMENT,version:h.version,size:d}}function n(h,c,a){let f=c.array,d=c.updateRanges;if(i.bindBuffer(a,h),d.length===0)i.bufferSubData(a,0,f);else{d.sort((u,_)=>u.start-_.start);let l=0;for(let u=1;u<d.length;u++){let _=d[l],v=d[u];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++l,d[l]=v)}d.length=l+1;for(let u=0,_=d.length;u<_;u++){let v=d[u];i.bufferSubData(a,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function s(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=e.get(h);c&&(i.deleteBuffer(c.buffer),e.delete(h))}function o(h,c){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){let f=e.get(h);(!f||f.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}let a=e.get(h);if(a===void 0)e.set(h,t(h,c));else if(a.version<h.version){if(a.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(a.buffer,h,c),a.version=h.version}}return{get:r,remove:s,update:o}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ud=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iu=`#ifdef USE_GRADIENTMAP
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
}`,ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,au=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hu=`#ifdef USE_ENVMAP
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
#endif`,cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uu=`PhysicalMaterial material;
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
#endif`,pu=`uniform sampler2D dfgLUT;
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
}`,gu=`
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Au=`#if defined( USE_POINTS_UV )
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
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
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
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yu=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Np=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,Op=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Zp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:md,alphahash_pars_fragment:_d,alphamap_fragment:xd,alphamap_pars_fragment:wd,alphatest_fragment:vd,alphatest_pars_fragment:yd,aomap_fragment:bd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:Ed,bsdfs:Cd,iridescence_fragment:Rd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Dd,color_fragment:Nd,color_pars_fragment:Ud,color_pars_vertex:Fd,color_vertex:Od,common:Yd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:kd,displacementmap_pars_vertex:zd,displacementmap_vertex:Vd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Zd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Jd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:hu,envmap_vertex:jd,fog_vertex:Qd,fog_pars_vertex:eu,fog_fragment:tu,fog_pars_fragment:nu,gradientmap_pars_fragment:iu,lightmap_pars_fragment:ru,lights_lambert_fragment:su,lights_lambert_pars_fragment:ou,lights_pars_begin:au,lights_toon_fragment:cu,lights_toon_pars_fragment:lu,lights_phong_fragment:fu,lights_phong_pars_fragment:du,lights_physical_fragment:uu,lights_physical_pars_fragment:pu,lights_fragment_begin:gu,lights_fragment_maps:mu,lights_fragment_end:_u,lightprobes_pars_fragment:xu,logdepthbuf_fragment:wu,logdepthbuf_pars_fragment:vu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:bu,map_fragment:Mu,map_pars_fragment:Su,map_particle_fragment:Tu,map_particle_pars_fragment:Au,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Ru,morphcolor_vertex:Iu,morphnormal_vertex:Pu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Lu,normal_fragment_begin:Du,normal_fragment_maps:Nu,normal_pars_fragment:Uu,normal_pars_vertex:Fu,normal_vertex:Ou,normalmap_pars_fragment:Yu,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:ku,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Vu,opaque_fragment:Gu,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:qu,dithering_fragment:Zu,dithering_pars_fragment:Ku,roughnessmap_fragment:Ju,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:rp,skinnormal_vertex:sp,specularmap_fragment:op,specularmap_pars_fragment:ap,tonemapping_fragment:hp,tonemapping_pars_fragment:cp,transmission_fragment:lp,transmission_pars_fragment:fp,uv_pars_fragment:dp,uv_pars_vertex:up,uv_vertex:pp,worldpos_vertex:gp,background_vert:mp,background_frag:_p,backgroundCube_vert:xp,backgroundCube_frag:wp,cube_vert:vp,cube_frag:yp,depth_vert:bp,depth_frag:Mp,distance_vert:Sp,distance_frag:Tp,equirect_vert:Ap,equirect_frag:Ep,linedashed_vert:Cp,linedashed_frag:Rp,meshbasic_vert:Ip,meshbasic_frag:Pp,meshlambert_vert:Hp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Np,meshnormal_vert:Up,meshnormal_frag:Fp,meshphong_vert:Op,meshphong_frag:Yp,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:zp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Zp,sprite_frag:Kp},le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Tn={basic:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ct([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ct([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ct([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ct([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ct([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ct([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Ct([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Ct([le.lights,le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Tn.physical={uniforms:Ct([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Bo={r:0,b:0,g:0},Jp=new ot,Cl=new Ie;Cl.set(-1,0,0,0,1,0,0,0,1);function $p(i,e,t,n,r,s){let o=new Ge(0),h=r===!0?0:1,c,a,f=null,d=0,l=null;function u(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let y=T.backgroundBlurriness>0;C=e.get(C,y)}return C}function _(T){let C=!1,y=u(T);y===null?g(o,h):y&&y.isColor&&(g(y,1),C=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(T,C){let y=u(C);y&&(y.isCubeTexture||y.mapping===Hr)?(a===void 0&&(a=new gt(new Wi(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:gi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(b,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(a)),a.material.uniforms.envMap.value=y,a.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(Cl),a.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Ke,(f!==y||d!==y.version||l!==i.toneMapping)&&(a.material.needsUpdate=!0,f=y,d=y.version,l=i.toneMapping),a.layers.enableAll(),T.unshift(a,a.geometry,a.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gt(new Zn(2,2),new Vt({name:"BackgroundMaterial",uniforms:gi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Ke,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||l!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,l=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,C){T.getRGB(Bo,nh(i)),t.buffers.color.setClear(Bo.r,Bo.g,Bo.b,C,s)}function p(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,C=1){o.set(T),h=C,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,g(o,h)},render:_,addToRenderList:v,dispose:p}}function jp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,o=!1;function h(D,Y,z,L,B){let K=!1,Z=d(D,L,z,Y);s!==Z&&(s=Z,a(s.object)),K=u(D,L,z,B),K&&_(D,L,z,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(D,Y,z,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function a(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function d(D,Y,z,L){let B=L.wireframe===!0,K=n[Y.id];K===void 0&&(K={},n[Y.id]=K);let Z=D.isInstancedMesh===!0?D.id:0,ne=K[Z];ne===void 0&&(ne={},K[Z]=ne);let W=ne[z.id];W===void 0&&(W={},ne[z.id]=W);let Q=W[B];return Q===void 0&&(Q=l(c()),W[B]=Q),Q}function l(D){let Y=[],z=[],L=[];for(let B=0;B<t;B++)Y[B]=0,z[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:z,attributeDivisors:L,object:D,attributes:{},index:null}}function u(D,Y,z,L){let B=s.attributes,K=Y.attributes,Z=0,ne=z.getAttributes();for(let W in ne)if(ne[W].location>=0){let te=B[W],Ae=K[W];if(Ae===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),te===void 0||te.attribute!==Ae||Ae&&te.data!==Ae.data)return!0;Z++}return s.attributesNum!==Z||s.index!==L}function _(D,Y,z,L){let B={},K=Y.attributes,Z=0,ne=z.getAttributes();for(let W in ne)if(ne[W].location>=0){let te=K[W];te===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let Ae={};Ae.attribute=te,te&&te.data&&(Ae.data=te.data),B[W]=Ae,Z++}s.attributes=B,s.attributesNum=Z,s.index=L}function v(){let D=s.newAttributes;for(let Y=0,z=D.length;Y<z;Y++)D[Y]=0}function g(D){p(D,0)}function p(D,Y){let z=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;z[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),B[D]!==Y&&(i.vertexAttribDivisor(D,Y),B[D]=Y)}function T(){let D=s.newAttributes,Y=s.enabledAttributes;for(let z=0,L=Y.length;z<L;z++)Y[z]!==D[z]&&(i.disableVertexAttribArray(z),Y[z]=0)}function C(D,Y,z,L,B,K,Z){Z===!0?i.vertexAttribIPointer(D,Y,z,B,K):i.vertexAttribPointer(D,Y,z,L,B,K)}function y(D,Y,z,L){v();let B=L.attributes,K=z.getAttributes(),Z=Y.defaultAttributeValues;for(let ne in K){let W=K[ne];if(W.location>=0){let Q=B[ne];if(Q===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let te=Q.normalized,Ae=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;let Qe=Se.buffer,ke=Se.type,Xe=Se.bytesPerElement,X=ke===i.INT||ke===i.UNSIGNED_INT||Q.gpuType===eo;if(Q.isInterleavedBufferAttribute){let j=Q.data,_e=j.stride,Pe=Q.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)p(W.location+ge,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<W.locationSize;ge++)g(W.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ge=0;ge<W.locationSize;ge++)C(W.location+ge,Ae/W.locationSize,ke,te,_e*Xe,(Pe+Ae/W.locationSize*ge)*Xe,X)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)p(W.location+j,Q.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<W.locationSize;j++)g(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let j=0;j<W.locationSize;j++)C(W.location+j,Ae/W.locationSize,ke,te,Ae*Xe,Ae/W.locationSize*j*Xe,X)}}else if(Z!==void 0){let te=Z[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}T()}function b(){A();for(let D in n){let Y=n[D];for(let z in Y){let L=Y[z];for(let B in L){let K=L[B];for(let Z in K)f(K[Z].object),delete K[Z];delete L[B]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let Y=n[D.id];for(let z in Y){let L=Y[z];for(let B in L){let K=L[B];for(let Z in K)f(K[Z].object),delete K[Z];delete L[B]}}delete n[D.id]}function E(D){for(let Y in n){let z=n[Y];for(let L in z){let B=z[L];if(B[D.id]===void 0)continue;let K=B[D.id];for(let Z in K)f(K[Z].object),delete K[Z];delete B[D.id]}}}function w(D){for(let Y in n){let z=n[Y],L=D.isInstancedMesh===!0?D.id:0,B=z[L];if(B!==void 0){for(let K in B){let Z=B[K];for(let ne in Z)f(Z[ne].object),delete Z[ne];delete B[K]}delete z[L],Object.keys(z).length===0&&delete n[Y]}}}function A(){H(),o=!0,s!==r&&(s=r,a(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:A,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function Qp(i,e,t){let n;function r(c){n=c}function s(c,a){i.drawArrays(n,c,a),t.update(a,n,1)}function o(c,a,f){f!==0&&(i.drawArraysInstanced(n,c,a,f),t.update(a,n,f))}function h(c,a,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,a,0,f);let l=0;for(let u=0;u<f;u++)l+=a[u];t.update(l,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=h}function eg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Qt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(E){let w=E===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wt&&E!==un&&!w&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",f=c(a);f!==a&&(Ce("WebGLRenderer:",a,"not supported, using",f,"instead."),a=f);let d=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&l===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:h,precision:a,logarithmicDepthBuffer:d,reversedDepthBuffer:l,maxTextures:u,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:b,samples:M}}function tg(i){let e=this,t=null,n=0,r=!1,s=!1,o=new hn,h=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){let u=d.length!==0||l||n!==0||r;return r=l,n=d.length,u},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,l){t=f(d,l,0)},this.setState=function(d,l,u){let _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!r||_===null||_.length===0||s&&!g)s?f(null):a();else{let T=s?0:n,C=T*4,y=p.clippingState||null;c.value=y,y=f(_,l,C,u);for(let b=0;b!==C;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function a(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,l,u,_){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,_!==!0||g===null){let p=u+v*4,T=l.matrixWorldInverse;h.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let C=0,y=u;C!==v;++C,y+=4)o.copy(d[C]).applyMatrix4(T,h),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var ji=4,ng=6,ig=20,rg=256,Br=new di,ol=new Ge,fh=null,dh=0,uh=0,ph=!1,sg=new U,mi=new U,zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:h=sg}=s;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,h),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,uh),this._renderer.xr.enabled=ph,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:pn,format:Qt,colorSpace:pr,depthBuffer:!1},r=al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=og(s)),this._blurMaterial=hg(s,e,t),this._ggxMaterial=ag(s,e,t)}return r}_compileMaterial(e){let t=new gt(new ln,e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,r,s){let c=new Ut(90,1,t,n),a=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,l=d.autoClear,u=d.toneMapping;d.getClearColor(ol),d.toneMapping=fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new Wi,new jt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(ol),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(c.up.set(0,a[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[C],s.y,s.z)):y===1?(c.up.set(0,0,a[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[C],s.z)):(c.up.set(0,a[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[C]));let b=this._cubeSize;$i(r,y*b,C>2?b:0,b,b),d.setRenderTarget(r),p&&d.render(v,c),d.render(e,c)}d.toneMapping=u,d.autoClear=l,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Qn||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let h=s.uniforms;h.envMap.value=e;let c=this._cubeSize;$i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Br)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,h=this._lodMeshes[n];h.material=o;let c=o.uniforms,a=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(a*a-f*f),l=a*1.25,u=d*l,{_lodMax:_}=this,v=this._sizeLods[n],g=3*v*(n>_-ji?n-_+ji:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=_-t,$i(s,g,p,3*v,2*v),r.setRenderTarget(s),r.render(h,Br),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-n,$i(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(h,Br)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,h=this._blurMaterial,c=this._lodMeshes[r];c.material=h;let a=h.uniforms;a.envMap.value=e.texture,a.sigma.value=s,a.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],d=3*f*(r>this._lodMax-ji?r-this._lodMax+ji:0),l=4*(this._cubeSize-f);$i(t,d,l,3*f,2*f),o.setRenderTarget(t),o.render(c,Br)}};function og(i){let e=[],t=[],n=i,r=i-ji+1+ng;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let h=1/(o-2),c=-h,a=1+h,f=[c,c,a,c,a,a,c,c,a,a,c,a],d=6,l=6,u=3,_=new Float32Array(u*l*d),v=new Float32Array(u*l*d);for(let p=0;p<d;p++){let T=p%3*2/3-1,C=p>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(y,u*l*p);for(let b=0;b<l;b++){let M=f[b*2]*2-1,E=f[b*2+1]*2-1;p===0?mi.set(1,E,M):p===1?mi.set(-M,1,-E):p===2?mi.set(-M,E,1):p===3?mi.set(-1,E,-M):p===4?mi.set(-M,-1,E):mi.set(M,E,-1),mi.toArray(v,(p*l+b)*u)}}let g=new ln;g.setAttribute("position",new Jt(_,u)),g.setAttribute("outputDirection",new Jt(v,u)),t.push(new gt(g,null)),n>ji&&n--}return{lodMeshes:t,sizeLods:e}}function al(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ag(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function hg(i,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function hl(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function cl(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vo=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wi(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Mn});s.uniforms.tEquirect.value=t;let o=new gt(r,s),h=t.minFilter;return t.minFilter===ei&&(t.minFilter=Mt),new qs(1,10,this).update(e,o),t.minFilter=h,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function cg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(l,u=!1){return l==null?null:u?o(l):s(l)}function s(l){if(l&&l.isTexture){let u=l.mapping;if(u===$s||u===js)if(e.has(l)){let _=e.get(l).texture;return h(_,l.mapping)}else{let _=l.image;if(_&&_.height>0){let v=new Vo(_.height);return v.fromEquirectangularTexture(i,l),e.set(l,v),l.addEventListener("dispose",a),h(v.texture,l.mapping)}else return null}}return l}function o(l){if(l&&l.isTexture){let u=l.mapping,_=u===$s||u===js,v=u===Qn||u===pi;if(_||v){let g=t.get(l),p=g!==void 0?g.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new zo(i)),g=_?n.fromEquirectangular(l,g):n.fromCubemap(l,g),g.texture.pmremVersion=l.pmremVersion,t.set(l,g),g.texture;if(g!==void 0)return g.texture;{let T=l.image;return _&&T&&T.height>0||v&&T&&c(T)?(n===null&&(n=new zo(i)),g=_?n.fromEquirectangular(l):n.fromCubemap(l),g.texture.pmremVersion=l.pmremVersion,t.set(l,g),l.addEventListener("dispose",f),g.texture):null}}}return l}function h(l,u){return u===$s?l.mapping=Qn:u===js&&(l.mapping=pi),l}function c(l){let u=0,_=6;for(let v=0;v<_;v++)l[v]!==void 0&&u++;return u===_}function a(l){let u=l.target;u.removeEventListener("dispose",a);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function f(l){let u=l.target;u.removeEventListener("dispose",f);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function lg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&li("WebGLRenderer: "+n+" extension not supported."),r}}}function fg(i,e,t,n){let r={},s=new WeakMap;function o(d){let l=d.target;l.index!==null&&e.remove(l.index);for(let _ in l.attributes)e.remove(l.attributes[_]);l.removeEventListener("dispose",o),delete r[l.id];let u=s.get(l);u&&(e.remove(u),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function h(d,l){return r[l.id]===!0||(l.addEventListener("dispose",o),r[l.id]=!0,t.memory.geometries++),l}function c(d){let l=d.attributes;for(let u in l)e.update(l[u],i.ARRAY_BUFFER)}function a(d){let l=[],u=d.index,_=d.attributes.position,v=0;if(_===void 0)return;if(u!==null){let T=u.array;v=u.version;for(let C=0,y=T.length;C<y;C+=3){let b=T[C+0],M=T[C+1],E=T[C+2];l.push(b,M,M,E,E,b)}}else{let T=_.array;v=_.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let b=C+0,M=C+1,E=C+2;l.push(b,M,M,E,E,b)}}let g=new(_.count>=65535?yr:vr)(l,1);g.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,g)}function f(d){let l=s.get(d);if(l){let u=d.index;u!==null&&l.version<u.version&&a(d)}else a(d);return s.get(d)}return{get:h,update:c,getWireframeAttribute:f}}function dg(i,e,t){let n;function r(d){n=d}let s,o;function h(d){s=d.type,o=d.bytesPerElement}function c(d,l){i.drawElements(n,l,s,d*o),t.update(l,n,1)}function a(d,l,u){u!==0&&(i.drawElementsInstanced(n,l,s,d*o,u),t.update(l,n,u))}function f(d,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,s,d,0,u);let v=0;for(let g=0;g<u;g++)v+=l[g];t.update(v,n,1)}this.setMode=r,this.setIndex=h,this.render=c,this.renderInstances=a,this.renderMultiDraw=f}function ug(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,h){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=h*(s/3);break;case i.LINES:t.lines+=h*(s/2);break;case i.LINE_STRIP:t.lines+=h*(s-1);break;case i.LINE_LOOP:t.lines+=h*s;break;case i.POINTS:t.points+=h*s;break;default:Re("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pg(i,e,t){let n=new WeakMap,r=new ht;function s(o,h,c){let a=o.morphTargetInfluences,f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,d=f!==void 0?f.length:0,l=n.get(h);if(l===void 0||l.count!==d){let A=function(){E.dispose(),n.delete(h),h.removeEventListener("dispose",A)};l!==void 0&&l.texture.dispose();let u=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],p=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],C=0;u===!0&&(C=1),_===!0&&(C=2),v===!0&&(C=3);let y=h.attributes.position.count*C,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*d),E=new _r(M,y,b,d);E.type=un,E.needsUpdate=!0;let w=C*4;for(let H=0;H<d;H++){let D=g[H],Y=p[H],z=T[H],L=y*b*4*H;for(let B=0;B<D.count;B++){let K=B*w;u===!0&&(r.fromBufferAttribute(D,B),M[L+K+0]=r.x,M[L+K+1]=r.y,M[L+K+2]=r.z,M[L+K+3]=0),_===!0&&(r.fromBufferAttribute(Y,B),M[L+K+4]=r.x,M[L+K+5]=r.y,M[L+K+6]=r.z,M[L+K+7]=0),v===!0&&(r.fromBufferAttribute(z,B),M[L+K+8]=r.x,M[L+K+9]=r.y,M[L+K+10]=r.z,M[L+K+11]=z.itemSize===4?r.w:1)}}l={count:d,texture:E,size:new Ve(y,b)},n.set(h,l),h.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let v=0;v<a.length;v++)u+=a[v];let _=h.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",a)}c.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:s}}function gg(i,e,t,n,r){let s=new WeakMap;function o(a){let f=r.render.frame,d=a.geometry,l=e.get(a,d);if(s.get(l)!==f&&(e.update(l),s.set(l,f)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),s.get(a)!==f&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),s.set(a,f))),a.isSkinnedMesh){let u=a.skeleton;s.get(u)!==f&&(u.update(),s.set(u,f))}return l}function h(){s=new WeakMap}function c(a){let f=a.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:h}}var mg={[Fa]:"LINEAR_TONE_MAPPING",[Oa]:"REINHARD_TONE_MAPPING",[Ya]:"CINEON_TONE_MAPPING",[Ba]:"ACES_FILMIC_TONE_MAPPING",[za]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[ka]:"CUSTOM_TONE_MAPPING"};function _g(i,e,t,n,r,s){let o=new Ft(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),h=null,c=null,a=new ln;a.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ht([0,2,0,0,2,0],2));let f=new Ns({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new gt(a,f),l=new di(-1,1,1,-1,0,1),u=null,_=null,v=!1,g,p=null,T=[],C=!1;this.setSize=function(y,b){o.setSize(y,b),h!==null&&h.setSize(y,b),c!==null&&c.setSize(y,b);for(let M=0;M<T.length;M++){let E=T[M];E.setSize&&E.setSize(y,b)}},this.setEffects=function(y){T=y,C=T.length>0&&T[0].isRenderPass===!0;let b=o.width,M=o.height;T.length>0&&h===null&&(h=new Ft(b,M,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Ft(b,M,{type:pn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<T.length;E++){let w=T[E];w.setSize&&w.setSize(b,M)}},this.begin=function(y,b){if(v||y.toneMapping===fn&&T.length===0)return!1;if(p=b,b!==null){let M=b.width,E=b.height;(o.width!==M||o.height!==E)&&this.setSize(M,E)}return C===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=fn,!0},this.hasRenderPass=function(){return C},this.end=function(y,b){y.toneMapping=g,v=!0;let M=o,E=h;for(let w=0;w<T.length;w++){let A=T[w];A.enabled!==!1&&(A.render(y,E,M,b),A.needsSwap!==!1&&(M=E,E=E===h?c:h))}if(u!==y.outputColorSpace||_!==y.toneMapping){u=y.outputColorSpace,_=y.toneMapping,f.defines={},Ye.getTransfer(u)===Ke&&(f.defines.SRGB_TRANSFER="");let w=mg[_];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(p),y.render(d,l),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),h!==null&&h.dispose(),c!==null&&c.dispose(),a.dispose(),f.dispose()}}var Rl=new Lt,_h=new qn(1,1),Il=new _r,Pl=new Hs,Hl=new Mr,ll=[],fl=[],dl=new Float32Array(16),ul=new Float32Array(9),pl=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ll[r];if(s===void 0&&(s=new Float32Array(r),ll[r]=s),e!==0){n.toArray(s,0);for(let o=1,h=0;o!==e;++o)h+=t,i[o].toArray(s,h)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=fl[e];t===void 0&&(t=new Int32Array(e),fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),_t(t,n)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),_t(t,n)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),_t(t,n)}}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=t.isReversedDepthBuffer()?Oo:Fo,s=_h):s=Rl,t.setTexture2D(e||s,r)}function Dg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pl,r)}function Ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hl,r)}function Ug(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Il,r)}function Fg(i){switch(i){case 5126:return xg;case 35664:return wg;case 35665:return vg;case 35666:return yg;case 35674:return bg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Eg;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Ig;case 36295:return Pg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}function Og(i,e){i.uniform1fv(this.addr,e)}function Yg(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function Bg(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function kg(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function zg(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function qg(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Kg(i,e){i.uniform1uiv(this.addr,e)}function Jg(i,e){i.uniform2uiv(this.addr,e)}function $g(i,e){i.uniform3uiv(this.addr,e)}function jg(i,e){i.uniform4uiv(this.addr,e)}function Qg(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=_h:o=Rl;for(let h=0;h!==r;++h)t.setTexture2D(e[h]||o,s[h])}function e0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Pl,s[o])}function t0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hl,s[o])}function n0(i,e,t){let n=this.cache,r=e.length,s=Xo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Il,s[o])}function i0(i){switch(i){case 5126:return Og;case 35664:return Yg;case 35665:return Bg;case 35666:return kg;case 35674:return zg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return Jg;case 36295:return $g;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}var xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fg(t.type)}},wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i0(t.type)}},vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let h=r[s];h.setValue(e,t[h.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function gl(i,e){i.seq.push(e),i.map[e.id]=e}function r0(i,e,t){let n=i.name,r=n.length;for(gh.lastIndex=0;;){let s=gh.exec(n),o=gh.lastIndex,h=s[1],c=s[2]==="]",a=s[3];if(c&&(h=h|0),a===void 0||a==="["&&o+2===r){gl(t,a===void 0?new xh(h,i,e):new wh(h,i,e));break}else{let d=t.map[h];d===void 0&&(d=new vh(h),gl(t,d)),t=d}}}var Qi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let h=e.getActiveUniform(t,o),c=e.getUniformLocation(t,h.name);r0(h,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let h=t[s],c=n[h.id];c.needsUpdate!==!1&&h.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function ml(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var s0=37297,o0=0;function a0(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let h=o+1;n.push(`${h===e?">":" "} ${h}: ${t[o]}`)}return n.join(`
`)}var _l=new Ie;function h0(i){Ye._getMatrix(_l,Ye.workingColorSpace,i);let e=`mat3( ${_l.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let h=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+a0(i.getShaderSource(e),h)}else return s}function c0(i,e){let t=h0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var l0={[Fa]:"Linear",[Oa]:"Reinhard",[Ya]:"Cineon",[Ba]:"ACESFilmic",[za]:"AgX",[Va]:"Neutral",[ka]:"Custom"};function f0(i,e){let t=l0[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new U;function d0(){Ye.getLuminanceCoefficients(ko);let i=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function p0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,h=1;s.type===i.FLOAT_MAT2&&(h=2),s.type===i.FLOAT_MAT3&&(h=3),s.type===i.FLOAT_MAT4&&(h=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:h}}return t}function zr(i){return i!==""}function wl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(m0,x0)}var _0=new Map;function x0(i,e){let t=De[e];if(t===void 0){let n=_0.get(e);if(n!==void 0)t=De[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yh(t)}var w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(w0,v0)}function v0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bl(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var y0={[Pr]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function b0(i){return y0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M0={[Qn]:"ENVMAP_TYPE_CUBE",[pi]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function S0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":M0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var T0={[pi]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E0={[Ua]:"ENVMAP_BLENDING_MULTIPLY",[Yc]:"ENVMAP_BLENDING_MIX",[Bc]:"ENVMAP_BLENDING_ADD"};function C0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E0[i.combine]||"ENVMAP_BLENDING_NONE"}function R0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function I0(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,h=t.fragmentShader,c=b0(t),a=S0(t),f=A0(t),d=C0(t),l=R0(t),u=u0(t),_=p0(s),v=r.createProgram(),g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(g=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?De.tonemapping_pars_fragment:"",t.toneMapping!==fn?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),o=yh(o),o=wl(o,t),o=vl(o,t),h=yh(h),h=wl(h,t),h=vl(h,t),o=yl(o),h=yl(h),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=T+g+o,y=T+p+h,b=ml(r,r.VERTEX_SHADER,C),M=ml(r,r.FRAGMENT_SHADER,y);r.attachShader(v,b),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(D){if(i.debug.checkShaderErrors){let Y=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(b)||"",L=r.getShaderInfoLog(M)||"",B=Y.trim(),K=z.trim(),Z=L.trim(),ne=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,b,M);else{let Q=xl(r,b,"vertex"),te=xl(r,M,"fragment");Re("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+te)}else B!==""?Ce("WebGLProgram: Program Info Log:",B):(K===""||Z==="")&&(W=!1);W&&(D.diagnostics={runnable:ne,programLog:B,vertexShader:{log:K,prefix:g},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(b),r.deleteShader(M),w=new Qi(r,v),A=g0(r,v)}let w;this.getUniforms=function(){return w===void 0&&E(this),w};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(v,s0)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=M,this}var P0=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mh(e),t.set(e,n)),n}},Mh=class{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}};function H0(i){return i===ni||i===Or||i===Yr}function L0(i,e,t,n,r,s){let o=new xr,h=new bh,c=new Set,a=[],f=new Map,d=n.logarithmicDepthBuffer,l=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function v(w,A,H,D,Y,z){let L=D.fog,B=Y.geometry,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ne=e.get(w.envMap||K,Z),W=ne&&ne.mapping===Hr?ne.image.height:null,Q=u[w.type];w.precision!==null&&(l=n.getMaxPrecision(w.precision),l!==w.precision&&Ce("WebGLProgram.getParameters:",w.precision,"not supported, using",l,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ae=te!==void 0?te.length:0,Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let Qe,ke,Xe,X;if(Q){let tt=Tn[Q];Qe=tt.vertexShader,ke=tt.fragmentShader}else{Qe=w.vertexShader,ke=w.fragmentShader;let tt=h.getVertexShaderStage(w),qe=h.getFragmentShaderStage(w);h.update(w,tt,qe),Xe=tt.id,X=qe.id}let j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Pe=Y.isInstancedMesh===!0,ge=Y.isBatchedMesh===!0,Ne=!!w.map,pt=!!w.matcap,Ue=!!ne,We=!!w.aoMap,et=!!w.lightMap,Oe=!!w.bumpMap&&w.wireframe===!1,st=!!w.normalMap,xt=!!w.displacementMap,Nt=!!w.emissiveMap,at=!!w.metalnessMap,ft=!!w.roughnessMap,P=w.anisotropy>0,St=w.clearcoat>0,Je=w.dispersion>0,S=w.retroreflectivity>0,m=w.iridescence>0,N=w.sheen>0,k=w.transmission>0,G=P&&!!w.anisotropyMap,ie=St&&!!w.clearcoatMap,re=St&&!!w.clearcoatNormalMap,q=St&&!!w.clearcoatRoughnessMap,$=m&&!!w.iridescenceMap,se=m&&!!w.iridescenceThicknessMap,be=N&&!!w.sheenColorMap,ce=N&&!!w.sheenRoughnessMap,oe=!!w.specularMap,Me=!!w.specularColorMap,Ee=!!w.specularIntensityMap,He=k&&!!w.transmissionMap,I=k&&!!w.thicknessMap,ae=!!w.gradientMap,J=!!w.alphaMap,he=w.alphaTest>0,ue=!!w.alphaHash,ee=!!w.extensions,Te=fn;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ve={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:Qe,fragmentShader:ke,defines:w.defines,customVertexShaderID:Xe,customFragmentShaderID:X,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:l,batching:ge,batchingColor:ge&&Y._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&Y.instanceColor!==null,instancingMorph:Pe&&Y.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ne,matcap:pt,envMap:Ue,envMapMode:Ue&&ne.mapping,envMapCubeUVHeight:W,aoMap:We,lightMap:et,bumpMap:Oe,normalMap:st,displacementMap:xt,emissiveMap:Nt,normalMapObjectSpace:st&&w.normalMapType===Vc,normalMapTangentSpace:st&&w.normalMapType===ja,packedNormalMap:st&&w.normalMapType===ja&&H0(w.normalMap.format),metalnessMap:at,roughnessMap:ft,anisotropy:P,anisotropyMap:G,clearcoat:St,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:q,dispersion:Je,retroreflection:S,iridescence:m,iridescenceMap:$,iridescenceThicknessMap:se,sheen:N,sheenColorMap:be,sheenRoughnessMap:ce,specularMap:oe,specularColorMap:Me,specularIntensityMap:Ee,transmission:k,transmissionMap:He,thicknessMap:I,gradientMap:ae,opaque:w.transparent===!1&&w.blending===qi&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:ue,combine:w.combine,mapUv:Ne&&_(w.map.channel),aoMapUv:We&&_(w.aoMap.channel),lightMapUv:et&&_(w.lightMap.channel),bumpMapUv:Oe&&_(w.bumpMap.channel),normalMapUv:st&&_(w.normalMap.channel),displacementMapUv:xt&&_(w.displacementMap.channel),emissiveMapUv:Nt&&_(w.emissiveMap.channel),metalnessMapUv:at&&_(w.metalnessMap.channel),roughnessMapUv:ft&&_(w.roughnessMap.channel),anisotropyMapUv:G&&_(w.anisotropyMap.channel),clearcoatMapUv:ie&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(w.sheenRoughnessMap.channel),specularMapUv:oe&&_(w.specularMap.channel),specularColorMapUv:Me&&_(w.specularColorMap.channel),specularIntensityMapUv:Ee&&_(w.specularIntensityMap.channel),transmissionMapUv:He&&_(w.transmissionMap.channel),thicknessMapUv:I&&_(w.thicknessMap.channel),alphaMapUv:J&&_(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(st||P),vertexNormals:!!B.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!B.attributes.uv&&(Ne||J),fog:!!L,useFog:w.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||B.attributes.normal===void 0&&st===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Se,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ne&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===Ke,decodeVideoTextureEmissive:Nt&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===Ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ot,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ee&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&w.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function g(w){let A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(let H in w.defines)A.push(H),A.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(p(A,w),T(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function p(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numSunLights),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numSunLightShadows),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function T(w,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),w.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),w.push(o.mask)}function C(w){let A=u[w.type],H;if(A){let D=Tn[A];H=il.clone(D.uniforms)}else H=w.uniforms;return H}function y(w,A){let H=f.get(A);return H!==void 0?++H.usedTimes:(H=new I0(i,A,w,r),a.push(H),f.set(A,H)),H}function b(w){if(--w.usedTimes===0){let A=a.indexOf(w);a[A]=a[a.length-1],a.pop(),f.delete(w.cacheKey),w.destroy()}}function M(w){h.remove(w)}function E(){h.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:C,acquireProgram:y,releaseProgram:b,releaseShaderCache:M,programs:a,dispose:E}}function D0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let h=i.get(o);return h===void 0&&(h={},i.set(o,h)),h}function n(o){i.delete(o)}function r(o,h,c){i.get(o)[h]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function N0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sl(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(l){let u=0;return l.isInstancedMesh&&(u+=2),l.isSkinnedMesh&&(u+=1),u}function h(l,u,_,v,g,p){let T=i[e];return T===void 0?(T={id:l.id,object:l,geometry:u,material:_,materialVariant:o(l),groupOrder:v,renderOrder:l.renderOrder,z:g,group:p},i[e]=T):(T.id=l.id,T.object=l,T.geometry=u,T.material=_,T.materialVariant=o(l),T.groupOrder=v,T.renderOrder=l.renderOrder,T.z=g,T.group=p),e++,T}function c(l,u,_,v,g,p,T){T.reversedDepth===!0&&(g=-g);let C=h(l,u,_,v,g,p);_.transmission>0?n.push(C):_.transparent===!0?r.push(C):t.push(C)}function a(l,u,_,v,g,p){let T=h(l,u,_,v,g,p);_.transmission>0?n.unshift(T):_.transparent===!0?r.unshift(T):t.unshift(T)}function f(l,u){t.length>1&&t.sort(l||N0),n.length>1&&n.sort(u||Ml),r.length>1&&r.sort(u||Ml)}function d(){for(let l=e,u=i.length;l<u;l++){let _=i[l];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:a,finish:d,sort:f}}function U0(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Sl,i.set(n,[o])):r>=s.length?(o=new Sl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function O0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y0=0;function B0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k0(i){let e=new F0,t=O0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)n.probe.push(new U);let r=new U,s=new ot,o=new ot;function h(a){let f=0,d=0,l=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let u=0,_=0,v=0,g=0,p=0,T=0,C=0,y=0,b=0,M=0,E=0,w=0,A=0,H=0;a.sort(B0);for(let Y=0,z=a.length;Y<z;Y++){let L=a[Y],B=L.color,K=L.intensity,Z=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ni?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=B.r*K,d+=B.g*K,l+=B.b*K;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],K);H++}else if(L.isSunLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=te,n.sunShadowMap[_]=ne;let Ae=Q.getViewportCount();for(let Se=0;Se<Ae;Se++)n.sunShadowMatrix[v+Se]=Q.getMatrix(Se),n.sunShadowCascade[v+Se]=Q._cascadeData[Se];v+=Ae,_++}n.sun[u]=W,u++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=L.shadow.matrix,b++}n.directional[g]=W,g++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(B).multiplyScalar(K),W.distance=Z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[T]=W;let Q=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Q.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[T]=Q.matrix,L.castShadow){let te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[T]=te,n.spotShadowMap[T]=ne,E++}T++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(B).multiplyScalar(K),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=W,C++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let Q=L.shadow,te=t.get(L);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=L.shadow.matrix,M++}n.point[p]=W,p++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(K),W.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[y]=W,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=l;let D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==T||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==_||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==E||D.numSpotMaps!==w||D.numLightProbes!==H)&&(n.sun.length=u,n.directional.length=g,n.spot.length=T,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=H,D.sunLength=u,D.directionalLength=g,D.pointLength=p,D.spotLength=T,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=_,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=E,D.numSpotMaps=w,D.numLightProbes=H,n.version=Y0++)}function c(a,f){let d=0,l=0,u=0,_=0,v=0,g=0,p=f.matrixWorldInverse;for(let T=0,C=a.length;T<C;T++){let y=a[T];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=n.directional[l];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),l++}else if(y.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),_++}else if(y.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:h,setupView:c,state:n}}function Tl(i){let e=new k0(i),t=[],n=[],r=[];function s(l){d.camera=l,t.length=0,n.length=0,r.length=0}function o(l){t.push(l)}function h(l){n.push(l)}function c(l){r.push(l)}function a(){e.setup(t)}function f(l){e.setupView(t,l)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:a,setupLightsView:f,pushLight:o,pushShadow:h,pushLightProbeGrid:c}}function z0(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),h;return o===void 0?(h=new Tl(i),e.set(r,[h])):s>=o.length?(h=new Tl(i),o.push(h)):h=o[s],h}function n(){e=new WeakMap}return{get:t,dispose:n}}var V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
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
}`,W0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],X0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Al=new ot,kr=new U,mh=new U;function q0(i,e,t){let n=new br,r=new Ve,s=new Ve,o=new ht,h=new Us,c=new Fs,a={},f=t.maxTextureSize,d={[jn]:Dt,[Dt]:jn,[Ot]:Ot},l=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:V0,fragmentShader:G0}),u=l.clone();u.defines.HORIZONTAL_PASS=1;let _=new ln;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new gt(_,l),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let p=this.type;this.render=function(M,E,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===vc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);let A=i.getRenderTarget(),H=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Mn),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let z=p!==this.type;z&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=M.length;L<B;L++){let K=M[L],Z=K.shadow;if(Z===void 0){Ce("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let ne=Z.getFrameExtents();r.multiply(ne),s.copy(Z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ne.x),r.x=s.x*ne.x,Z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ne.y),r.y=s.y*ne.y,Z.mapSize.y=s.y));let W=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=W,Z.map===null||z===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Xi){if(K.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ft(r.x,r.y,{format:ni,type:pn,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new qn(r.x,r.y,un),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=yn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=vt,Z.map.depthTexture.magFilter=vt}else K.isPointLight?(Z.map=new Vo(r.x),Z.map.depthTexture=new Ds(r.x,dn)):(Z.map=new Ft(r.x,r.y),Z.map.depthTexture=new qn(r.x,r.y,dn)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=yn,this.type===Pr?(Z.map.depthTexture.compareFunction=W?Oo:Fo,Z.map.depthTexture.minFilter=Mt,Z.map.depthTexture.magFilter=Mt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=vt,Z.map.depthTexture.magFilter=vt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,w);for(let te=0;te<Q;te++){let Ae=Z.getCamera(te);if(K.isPointLight){let Se=Z.camera,Qe=Z.matrix,ke=K.distance||Se.far;ke!==Se.far&&(Se.far=ke,Se.updateProjectionMatrix()),kr.setFromMatrixPosition(K.matrixWorld),Se.position.copy(kr),mh.copy(Se.position),mh.add(W0[te]),Se.up.copy(X0[te]),Se.lookAt(mh),Se.updateMatrixWorld(),Qe.makeTranslation(-kr.x,-kr.y,-kr.z),Al.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Al,Se.coordinateSystem,Se.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,te),i.clear();else{te===0&&(i.setRenderTarget(Z.map),i.clear());let Se=Z.getViewport(te);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),Y.viewport(o)}n=Z.getFrustum(te),y(E,w,Ae,K,this.type)}Z.isPointLightShadow!==!0&&this.type===Xi&&T(Z,w),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,H,D)};function T(M,E){let w=e.update(v);l.defines.VSM_SAMPLES!==M.blurSamples&&(l.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ft(r.x,r.y,{format:ni,type:pn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),l.uniforms.shadow_pass.value=M.map.depthTexture,l.uniforms.resolution.value.set(M.map.width,M.map.height),l.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,w,l,v,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,w,u,v,null)}function C(M,E,w,A){let H=null,D=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)H=D;else if(H=w.isPointLight===!0?c:h,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let Y=H.uuid,z=E.uuid,L=a[Y];L===void 0&&(L={},a[Y]=L);let B=L[z];B===void 0&&(B=H.clone(),L[z]=B,E.addEventListener("dispose",b)),H=B}if(H.visible=E.visible,H.wireframe=E.wireframe,A===Xi?H.side=E.shadowSide!==null?E.shadowSide:E.side:H.side=E.shadowSide!==null?E.shadowSide:d[E.side],H.alphaMap=E.alphaMap,H.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,H.map=E.map,H.clipShadows=E.clipShadows,H.clippingPlanes=E.clippingPlanes,H.clipIntersection=E.clipIntersection,H.displacementMap=E.displacementMap,H.displacementScale=E.displacementScale,H.displacementBias=E.displacementBias,H.wireframeLinewidth=E.wireframeLinewidth,H.linewidth=E.linewidth,w.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let Y=i.properties.get(H);Y.light=w}return H}function y(M,E,w,A,H){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&H===Xi)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);let z=e.update(M),L=M.material;if(Array.isArray(L)){let B=z.groups;for(let K=0,Z=B.length;K<Z;K++){let ne=B[K],W=L[ne.materialIndex];if(W&&W.visible){let Q=C(M,W,A,H);M.onBeforeShadow(i,M,E,w,z,Q,ne),i.renderBufferDirect(w,null,z,Q,M,ne),M.onAfterShadow(i,M,E,w,z,Q,ne)}}}else if(L.visible){let B=C(M,L,A,H);M.onBeforeShadow(i,M,E,w,z,B,null),i.renderBufferDirect(w,null,z,B,M,null),M.onAfterShadow(i,M,E,w,z,B,null)}}let Y=M.children;for(let z=0,L=Y.length;z<L;z++)y(Y[z],E,w,A,H)}function b(M){M.target.removeEventListener("dispose",b);for(let w in a){let A=a[w],H=M.target.uuid;H in A&&(A[H].dispose(),delete A[H])}}}function Z0(i,e){function t(){let I=!1,ae=new ht,J=null,he=new ht(0,0,0,0);return{setMask:function(ue){J!==ue&&!I&&(i.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){I=ue},setClear:function(ue,ee,Te,ve,tt){tt===!0&&(ue*=ve,ee*=ve,Te*=ve),ae.set(ue,ee,Te,ve),he.equals(ae)===!1&&(i.clearColor(ue,ee,Te,ve),he.copy(ae))},reset:function(){I=!1,J=null,he.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,J=null,he=null,ue=null;return{setReversed:function(ee){if(ae!==ee){let Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;let ve=ue;ue=null,this.setClear(ve)}},getReversed:function(){return ae},setTest:function(ee){ee?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ee){J!==ee&&!I&&(i.depthMask(ee),J=ee)},setFunc:function(ee){if(ae&&(ee=tl[ee]),he!==ee){switch(ee){case ys:i.depthFunc(i.NEVER);break;case bs:i.depthFunc(i.ALWAYS);break;case Ms:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case Ss:i.depthFunc(i.EQUAL);break;case Ts:i.depthFunc(i.GEQUAL);break;case Fi:i.depthFunc(i.GREATER);break;case As:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){I=ee},setClear:function(ee){ue!==ee&&(ue=ee,ae&&(ee=1-ee),i.clearDepth(ee))},reset:function(){I=!1,J=null,he=null,ue=null,ae=!1}}}function r(){let I=!1,ae=null,J=null,he=null,ue=null,ee=null,Te=null,ve=null,tt=null;return{setTest:function(qe){I||(qe?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!I&&(i.stencilMask(qe),ae=qe)},setFunc:function(qe,rn,_n){(J!==qe||he!==rn||ue!==_n)&&(i.stencilFunc(qe,rn,_n),J=qe,he=rn,ue=_n)},setOp:function(qe,rn,_n){(ee!==qe||Te!==rn||ve!==_n)&&(i.stencilOp(qe,rn,_n),ee=qe,Te=rn,ve=_n)},setLocked:function(qe){I=qe},setClear:function(qe){tt!==qe&&(i.clearStencil(qe),tt=qe)},reset:function(){I=!1,ae=null,J=null,he=null,ue=null,ee=null,Te=null,ve=null,tt=null}}}let s=new t,o=new n,h=new r,c=new WeakMap,a=new WeakMap,f={},d={},l={},u=new WeakMap,_=[],v=null,g=!1,p=null,T=null,C=null,y=null,b=null,M=null,E=null,w=new Ge(0,0,0),A=0,H=!1,D=null,Y=null,z=null,L=null,B=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ne=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=ne>=2);let Q=null,te={},Ae=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Qe=new ht().fromArray(Ae),ke=new ht().fromArray(Se);function Xe(I,ae,J,he){let ue=new Uint8Array(4),ee=i.createTexture();i.bindTexture(I,ee),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<J;Te++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ae+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ee}let X={};X[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),h.setClear(0),j(i.DEPTH_TEST),o.setFunc(Ui),Oe(!1),st(Ia),j(i.CULL_FACE),We(Mn);function j(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function _e(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function Pe(I,ae){return l[I]!==ae?(i.bindFramebuffer(I,ae),l[I]=ae,I===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=ae),I===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function ge(I,ae){let J=_,he=!1;if(I){J=u.get(ae),J===void 0&&(J=[],u.set(ae,J));let ue=I.textures;if(J.length!==ue.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=ue.length;ee<Te;ee++)J[ee]=i.COLOR_ATTACHMENT0+ee;J.length=ue.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function Ne(I){return v!==I?(i.useProgram(I),v=I,!0):!1}let pt={[ui]:i.FUNC_ADD,[bc]:i.FUNC_SUBTRACT,[Mc]:i.FUNC_REVERSE_SUBTRACT};pt[Sc]=i.MIN,pt[Tc]=i.MAX;let Ue={[Ac]:i.ZERO,[Ec]:i.ONE,[Cc]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Hc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Lc]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Nc]:i.CONSTANT_COLOR,[Uc]:i.ONE_MINUS_CONSTANT_COLOR,[Fc]:i.CONSTANT_ALPHA,[Oc]:i.ONE_MINUS_CONSTANT_ALPHA};function We(I,ae,J,he,ue,ee,Te,ve,tt,qe){if(I===Mn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),I!==yc){if(I!==p||qe!==H){if((T!==ui||b!==ui)&&(i.blendEquation(i.FUNC_ADD),T=ui,b=ui),qe)switch(I){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFunc(i.ONE,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Re("WebGLState: Invalid blending: ",I);break}else switch(I){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ha:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",I);break}C=null,y=null,M=null,E=null,w.set(0,0,0),A=0,p=I,H=qe}return}ue=ue||ae,ee=ee||J,Te=Te||he,(ae!==T||ue!==b)&&(i.blendEquationSeparate(pt[ae],pt[ue]),T=ae,b=ue),(J!==C||he!==y||ee!==M||Te!==E)&&(i.blendFuncSeparate(Ue[J],Ue[he],Ue[ee],Ue[Te]),C=J,y=he,M=ee,E=Te),(ve.equals(w)===!1||tt!==A)&&(i.blendColor(ve.r,ve.g,ve.b,tt),w.copy(ve),A=tt),p=I,H=!1}function et(I,ae){I.side===Ot?_e(i.CULL_FACE):j(i.CULL_FACE);let J=I.side===Dt;ae&&(J=!J),Oe(J),I.blending===qi&&I.transparent===!1?We(Mn):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let he=I.stencilWrite;h.setTest(he),he&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){D!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),D=I)}function st(I){I!==xc?(j(i.CULL_FACE),I!==Y&&(I===Ia?i.cullFace(i.BACK):I===wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),Y=I}function xt(I){I!==z&&(Z&&i.lineWidth(I),z=I)}function Nt(I,ae,J){I?(j(i.POLYGON_OFFSET_FILL),(L!==ae||B!==J)&&(L=ae,B=J,o.getReversed()&&(ae=-ae),i.polygonOffset(ae,J))):_e(i.POLYGON_OFFSET_FILL)}function at(I){I?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ft(I){I===void 0&&(I=i.TEXTURE0+K-1),Q!==I&&(i.activeTexture(I),Q=I)}function P(I,ae,J){J===void 0&&(Q===null?J=i.TEXTURE0+K-1:J=Q);let he=te[J];he===void 0&&(he={type:void 0,texture:void 0},te[J]=he),(he.type!==I||he.texture!==ae)&&(Q!==J&&(i.activeTexture(J),Q=J),i.bindTexture(I,ae||X[I]),he.type=I,he.texture=ae)}function St(){let I=te[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function m(){try{i.texSubImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function N(){try{i.texSubImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function ie(){try{i.texStorage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function re(){try{i.texStorage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function q(){try{i.texImage2D(...arguments)}catch(I){Re("WebGLState:",I)}}function $(){try{i.texImage3D(...arguments)}catch(I){Re("WebGLState:",I)}}function se(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function be(I,ae){d[I]!==ae&&(i.pixelStorei(I,ae),d[I]=ae)}function ce(I){Qe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function oe(I){ke.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ke.copy(I))}function Me(I,ae){let J=a.get(ae);J===void 0&&(J=new WeakMap,a.set(ae,J));let he=J.get(I);he===void 0&&(he=i.getUniformBlockIndex(ae,I.name),J.set(I,he))}function Ee(I,ae){let he=a.get(ae).get(I);c.get(ae)!==he&&(i.uniformBlockBinding(ae,he,I.__bindingPointIndex),c.set(ae,he))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},Q=null,te={},l={},u=new WeakMap,_=[],v=null,g=!1,p=null,T=null,C=null,y=null,b=null,M=null,E=null,w=new Ge(0,0,0),A=0,H=!1,D=null,Y=null,z=null,L=null,B=null,Qe.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),h.reset()}return{buffers:{color:s,depth:o,stencil:h},enable:j,disable:_e,bindFramebuffer:Pe,drawBuffers:ge,useProgram:Ne,setBlending:We,setMaterial:et,setFlipSided:Oe,setCullFace:st,setLineWidth:xt,setPolygonOffset:Nt,setScissorTest:at,activeTexture:ft,bindTexture:P,unbindTexture:St,compressedTexImage2D:Je,compressedTexImage3D:S,texImage2D:q,texImage3D:$,pixelStorei:be,getParameter:se,updateUBOMapping:Me,uniformBlockBinding:Ee,texStorage2D:ie,texStorage3D:re,texSubImage2D:m,texSubImage3D:N,compressedTexSubImage2D:k,compressedTexSubImage3D:G,scissor:ce,viewport:oe,reset:He}}function K0(i,e,t,n,r,s,o){let h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new Ve,f=new WeakMap,d=new Set,l,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,m){return _?new OffscreenCanvas(S,m):Oi("canvas")}function g(S,m,N){let k=1,G=Je(S);if((G.width>N||G.height>N)&&(k=N/Math.max(G.width,G.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ie=Math.floor(k*G.width),re=Math.floor(k*G.height);l===void 0&&(l=v(ie,re));let q=m?v(ie,re):l;return q.width=ie,q.height=re,q.getContext("2d").drawImage(S,0,0,ie,re),Ce("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+ie+"x"+re+")."),q}else return"data"in S&&Ce("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),S;return S}function p(S){return S.generateMipmaps}function T(S){i.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(S,m,N,k,G,ie=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let re;k&&(re=e.get("EXT_texture_norm16"),re||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=m;if(m===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8),N===i.UNSIGNED_SHORT&&re&&(q=re.R16_EXT),N===i.SHORT&&re&&(q=re.R16_SNORM_EXT)),m===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),m===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8),N===i.UNSIGNED_SHORT&&re&&(q=re.RG16_EXT),N===i.SHORT&&re&&(q=re.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),m===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),m===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),m===i.RGB&&(N===i.UNSIGNED_SHORT&&re&&(q=re.RGB16_EXT),N===i.SHORT&&re&&(q=re.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),m===i.RGBA){let $=ie?gr:Ye.getTransfer(G);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=$===Ke?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&re&&(q=re.RGBA16_EXT),N===i.SHORT&&re&&(q=re.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(S,m){let N;return S?m===null||m===dn||m===Ki?N=i.DEPTH24_STENCIL8:m===un?N=i.DEPTH32F_STENCIL8:m===Zi&&(N=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===dn||m===Ki?N=i.DEPTH_COMPONENT24:m===un?N=i.DEPTH_COMPONENT32F:m===Zi&&(N=i.DEPTH_COMPONENT16),N}function M(S,m){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==vt&&S.minFilter!==Mt?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function E(S){let m=S.target;m.removeEventListener("dispose",E),A(m),m.isVideoTexture&&f.delete(m),m.isHTMLTexture&&d.delete(m)}function w(S){let m=S.target;m.removeEventListener("dispose",w),D(m)}function A(S){let m=n.get(S);if(m.__webglInit===void 0)return;let N=S.source,k=u.get(N);if(k){let G=k[m.__cacheKey];G.usedTimes--,G.usedTimes===0&&H(S),Object.keys(k).length===0&&u.delete(N)}n.remove(S)}function H(S){let m=n.get(S);i.deleteTexture(m.__webglTexture);let N=S.source,k=u.get(N);delete k[m.__cacheKey],o.memory.textures--}function D(S){let m=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let G=0;G<m.__webglFramebuffer[k].length;G++)i.deleteFramebuffer(m.__webglFramebuffer[k][G]);else i.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)i.deleteFramebuffer(m.__webglFramebuffer[k]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let N=S.textures;for(let k=0,G=N.length;k<G;k++){let ie=n.get(N[k]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(N[k])}n.remove(S)}let Y=0;function z(){Y=0}function L(){return Y}function B(S){Y=S}function K(){let S=Y;return S>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,S}function Z(S){let m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function ne(S,m){let N=n.get(S);if(S.isVideoTexture&&P(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){let k=S.image;if(k===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(N,S,m);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+m)}function W(S,m){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){_e(N,S,m);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+m)}function Q(S,m){let N=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){_e(N,S,m);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+m)}function te(S,m){let N=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){Pe(N,S,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+m)}let Ae={[Es]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[Cs]:i.MIRRORED_REPEAT},Se={[vt]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Qe={[Wc]:i.NEVER,[Jc]:i.ALWAYS,[Xc]:i.LESS,[Fo]:i.LEQUAL,[qc]:i.EQUAL,[Oo]:i.GEQUAL,[Zc]:i.GREATER,[Kc]:i.NOTEQUAL};function ke(S,m){if(m.type===un&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Mt||m.magFilter===Qs||m.magFilter===Lr||m.magFilter===ei||m.minFilter===Mt||m.minFilter===Qs||m.minFilter===Lr||m.minFilter===ei)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Ae[m.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Ae[m.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Ae[m.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Se[m.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Se[m.minFilter]),m.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Qe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===vt||m.minFilter!==Lr&&m.minFilter!==ei||m.type===un&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Xe(S,m){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",E));let k=m.source,G=u.get(k);G===void 0&&(G={},u.set(k,G));let ie=Z(m);if(ie!==S.__cacheKey){G[ie]===void 0&&(G[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),G[ie].usedTimes++;let re=G[S.__cacheKey];re!==void 0&&(G[S.__cacheKey].usedTimes--,re.usedTimes===0&&H(m)),S.__cacheKey=ie,S.__webglTexture=G[ie].texture}return N}function X(S,m,N){return Math.floor(Math.floor(S/N)/m)}function j(S,m,N,k){let ie=S.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,N,k,m.data);else{ie.sort((be,ce)=>be.start-ce.start);let re=0;for(let be=1;be<ie.length;be++){let ce=ie[re],oe=ie[be],Me=ce.start+ce.count,Ee=X(oe.start,m.width,4),He=X(ce.start,m.width,4);oe.start<=Me+1&&Ee===He&&X(oe.start+oe.count-1,m.width,4)===Ee?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++re,ie[re]=oe)}ie.length=re+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let be=0,ce=ie.length;be<ce;be++){let oe=ie[be],Me=Math.floor(oe.start/4),Ee=Math.ceil(oe.count/4),He=Me%m.width,I=Math.floor(Me/m.width),ae=Ee,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,He,I,ae,J,N,k,m.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function _e(S,m,N){let k=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=i.TEXTURE_3D);let G=Xe(S,m),ie=m.source;t.bindTexture(k,S.__webglTexture,i.TEXTURE0+N);let re=n.get(ie);if(ie.version!==re.__version||G===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let J=Ye.getPrimaries(Ye.workingColorSpace),he=m.colorSpace===Ln?null:Ye.getPrimaries(m.colorSpace),ue=m.colorSpace===Ln||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let $=g(m.image,!1,r.maxTextureSize);$=St(m,$);let se=s.convert(m.format,m.colorSpace),be=s.convert(m.type),ce=y(m.internalFormat,se,be,m.normalized,m.colorSpace,m.isVideoTexture);ke(k,m);let oe,Me=m.mipmaps,Ee=m.isVideoTexture!==!0,He=re.__version===void 0||G===!0,I=ie.dataReady,ae=M(m,$);if(m.isDepthTexture)ce=b(m.format===ti,m.type),He&&(Ee?t.texStorage2D(i.TEXTURE_2D,1,ce,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ce,$.width,$.height,0,se,be,null));else if(m.isDataTexture)if(Me.length>0){Ee&&He&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Me[0].width,Me[0].height);for(let J=0,he=Me.length;J<he;J++)oe=Me[J],Ee?I&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,se,be,oe.data):t.texImage2D(i.TEXTURE_2D,J,ce,oe.width,oe.height,0,se,be,oe.data);m.generateMipmaps=!1}else Ee?(He&&t.texStorage2D(i.TEXTURE_2D,ae,ce,$.width,$.height),I&&j(m,$,se,be)):t.texImage2D(i.TEXTURE_2D,0,ce,$.width,$.height,0,se,be,$.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ee&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,Me[0].width,Me[0].height,$.depth);for(let J=0,he=Me.length;J<he;J++)if(oe=Me[J],m.format!==Qt)if(se!==null)if(Ee){if(I)if(m.layerUpdates.size>0){let ue=sh(oe.width,oe.height,m.format,m.type);for(let ee of m.layerUpdates){let Te=oe.data.subarray(ee*ue/oe.data.BYTES_PER_ELEMENT,(ee+1)*ue/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ee,oe.width,oe.height,1,se,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,$.depth,se,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ce,oe.width,oe.height,$.depth,0,oe.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,$.depth,se,be,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ce,oe.width,oe.height,$.depth,0,se,be,oe.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ee&&He&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Me[0].width,Me[0].height);for(let J=0,he=Me.length;J<he;J++)oe=Me[J],m.format!==Qt?se!==null?Ee?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,se,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ce,oe.width,oe.height,0,oe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?I&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe.width,oe.height,se,be,oe.data):t.texImage2D(i.TEXTURE_2D,J,ce,oe.width,oe.height,0,se,be,oe.data)}else if(m.isDataArrayTexture)if(Ee){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,$.width,$.height,$.depth),I)if(m.layerUpdates.size>0){let J=sh($.width,$.height,m.format,m.type);for(let he of m.layerUpdates){let ue=$.data.subarray(he*J/$.data.BYTES_PER_ELEMENT,(he+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,$.width,$.height,1,se,be,ue)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,se,be,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,$.width,$.height,$.depth,0,se,be,$.data);else if(m.isData3DTexture)Ee?(He&&t.texStorage3D(i.TEXTURE_3D,ae,ce,$.width,$.height,$.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,se,be,$.data)):t.texImage3D(i.TEXTURE_3D,0,ce,$.width,$.height,$.depth,0,se,be,$.data);else if(m.isFramebufferTexture){if(He)if(Ee)t.texStorage2D(i.TEXTURE_2D,ae,ce,$.width,$.height);else{let J=$.width,he=$.height;for(let ue=0;ue<ae;ue++)t.texImage2D(i.TEXTURE_2D,ue,ce,J,he,0,se,be,null),J>>=1,he>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),d.add(m),J.onpaint=he=>{let ue=he.changedElements;for(let ee of d)ue.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let ue=i.RGBA,ee=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,ee,Te,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Ee&&He){let J=Je(Me[0]);t.texStorage2D(i.TEXTURE_2D,ae,ce,J.width,J.height)}for(let J=0,he=Me.length;J<he;J++)oe=Me[J],Ee?I&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,se,be,oe):t.texImage2D(i.TEXTURE_2D,J,ce,se,be,oe);m.generateMipmaps=!1}else if(Ee){if(He){let J=Je($);t.texStorage2D(i.TEXTURE_2D,ae,ce,J.width,J.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,be,$)}else t.texImage2D(i.TEXTURE_2D,0,ce,se,be,$);p(m)&&T(k),re.__version=ie.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function Pe(S,m,N){if(m.image.length!==6)return;let k=Xe(S,m),G=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let ie=n.get(G);if(G.version!==ie.__version||k===!0){t.activeTexture(i.TEXTURE0+N);let re=Ye.getPrimaries(Ye.workingColorSpace),q=m.colorSpace===Ln?null:Ye.getPrimaries(m.colorSpace),$=m.colorSpace===Ln||re===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let se=m.isCompressedTexture||m.image[0].isCompressedTexture,be=m.image[0]&&m.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!se&&!be?ce[ee]=g(m.image[ee],!0,r.maxCubemapSize):ce[ee]=be?m.image[ee].image:m.image[ee],ce[ee]=St(m,ce[ee]);let oe=ce[0],Me=s.convert(m.format,m.colorSpace),Ee=s.convert(m.type),He=y(m.internalFormat,Me,Ee,m.normalized,m.colorSpace),I=m.isVideoTexture!==!0,ae=ie.__version===void 0||k===!0,J=G.dataReady,he=M(m,oe);ke(i.TEXTURE_CUBE_MAP,m);let ue;if(se){I&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,He,oe.width,oe.height);for(let ee=0;ee<6;ee++){ue=ce[ee].mipmaps;for(let Te=0;Te<ue.length;Te++){let ve=ue[Te];m.format!==Qt?Me!==null?I?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,He,ve.width,ve.height,0,ve.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ve.width,ve.height,Me,Ee,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,He,ve.width,ve.height,0,Me,Ee,ve.data)}}}else{if(ue=m.mipmaps,I&&ae){ue.length>0&&he++;let ee=Je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Me,Ee,ce[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,ce[ee].width,ce[ee].height,0,Me,Ee,ce[ee].data);for(let Te=0;Te<ue.length;Te++){let tt=ue[Te].image[ee].image;I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,tt.width,tt.height,Me,Ee,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,He,tt.width,tt.height,0,Me,Ee,tt.data)}}else{I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me,Ee,ce[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Me,Ee,ce[ee]);for(let Te=0;Te<ue.length;Te++){let ve=ue[Te];I?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Me,Ee,ve.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,He,Me,Ee,ve.image[ee])}}}p(m)&&T(i.TEXTURE_CUBE_MAP),ie.__version=G.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function ge(S,m,N,k,G,ie){let re=s.convert(N.format,N.colorSpace),q=s.convert(N.type),$=y(N.internalFormat,re,q,N.normalized,N.colorSpace),se=n.get(m),be=n.get(N);if(be.__renderTarget=m,!se.__hasExternalTextures){let ce=Math.max(1,m.width>>ie),oe=Math.max(1,m.height>>ie);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,ie,$,ce,oe,m.depth,0,re,q,null):t.texImage2D(G,ie,$,ce,oe,0,re,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ft(m)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,G,be.__webglTexture,0,at(m)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,G,be.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(S,m,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),m.depthBuffer){let k=m.depthTexture,G=k&&k.isDepthTexture?k.type:null,ie=b(m.stencilBuffer,G),re=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(m)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(m),ie,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(m),ie,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ie,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,S)}else{let k=m.textures;for(let G=0;G<k.length;G++){let ie=k[G],re=s.convert(ie.format,ie.colorSpace),q=s.convert(ie.type),$=y(ie.internalFormat,re,q,ie.normalized,ie.colorSpace);ft(m)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(m),$,m.width,m.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(m),$,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,$,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(S,m,N){let k=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=n.get(m.depthTexture);if(G.__renderTarget=m,(!G.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),k){if(G.__webglInit===void 0&&(G.__webglInit=!0,m.depthTexture.addEventListener("dispose",E)),G.__webglTexture===void 0){G.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ke(i.TEXTURE_CUBE_MAP,m.depthTexture);let se=s.convert(m.depthTexture.format),be=s.convert(m.depthTexture.type),ce;m.depthTexture.format===yn?ce=i.DEPTH_COMPONENT24:m.depthTexture.format===ti&&(ce=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,m.width,m.height,0,se,be,null)}}else ne(m.depthTexture,0);let ie=G.__webglTexture,re=at(m),q=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,$=m.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===yn)ft(m)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,q,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,q,ie,0);else if(m.depthTexture.format===ti)ft(m)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,q,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,q,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(S){let m=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){let k=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){let G=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",G)};k.addEventListener("dispose",G),m.__depthDisposeCallback=G}m.__boundDepthTexture=k}if(S.depthTexture&&!m.__autoAllocateDepthBuffer)if(N)for(let k=0;k<6;k++)pt(m.__webglFramebuffer[k],S,k);else{let k=S.texture.mipmaps;k&&k.length>0?pt(m.__webglFramebuffer[0],S,0):pt(m.__webglFramebuffer,S,0)}else if(N){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=i.createRenderbuffer(),Ne(m.__webglDepthbuffer[k],S,!1);else{let G=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=m.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ie)}}else{let k=S.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ne(m.__webglDepthbuffer,S,!1);else{let G=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(S,m,N){let k=n.get(S);m!==void 0&&ge(k.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ue(S)}function et(S){let m=S.texture,N=n.get(S),k=n.get(m);S.addEventListener("dispose",w);let G=S.textures,ie=S.isWebGLCubeRenderTarget===!0,re=G.length>1;if(re||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=m.version,o.memory.textures++),ie){N.__webglFramebuffer=[];for(let q=0;q<6;q++)if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer[q]=[];for(let $=0;$<m.mipmaps.length;$++)N.__webglFramebuffer[q][$]=i.createFramebuffer()}else N.__webglFramebuffer[q]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){N.__webglFramebuffer=[];for(let q=0;q<m.mipmaps.length;q++)N.__webglFramebuffer[q]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(re)for(let q=0,$=G.length;q<$;q++){let se=n.get(G[q]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&ft(S)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let q=0;q<G.length;q++){let $=G[q];N.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[q]);let se=s.convert($.format,$.colorSpace),be=s.convert($.type),ce=y($.internalFormat,se,be,$.normalized,$.colorSpace,S.isXRRenderTarget===!0),oe=at(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ce,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,N.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),ke(i.TEXTURE_CUBE_MAP,m);for(let q=0;q<6;q++)if(m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)ge(N.__webglFramebuffer[q][$],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,$);else ge(N.__webglFramebuffer[q],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(m)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let q=0,$=G.length;q<$;q++){let se=G[q],be=n.get(se),ce=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,be.__webglTexture),ke(ce,se),ge(N.__webglFramebuffer,S,se,i.COLOR_ATTACHMENT0+q,ce,0),p(se)&&T(ce)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(q=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,k.__webglTexture),ke(q,m),m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)ge(N.__webglFramebuffer[$],S,m,i.COLOR_ATTACHMENT0,q,$);else ge(N.__webglFramebuffer,S,m,i.COLOR_ATTACHMENT0,q,0);p(m)&&T(q),t.unbindTexture()}S.depthBuffer&&Ue(S)}function Oe(S){let m=S.textures;for(let N=0,k=m.length;N<k;N++){let G=m[N];if(p(G)){let ie=C(S),re=n.get(G).__webglTexture;t.bindTexture(ie,re),T(ie),t.unbindTexture()}}}let st=[],xt=[];function Nt(S){if(S.samples>0){if(ft(S)===!1){let m=S.textures,N=S.width,k=S.height,G=i.COLOR_BUFFER_BIT,ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(S),q=m.length>1;if(q)for(let se=0;se<m.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let $=S.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let se=0;se<m.length;se++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);let be=n.get(m[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,G,i.NEAREST),c===!0&&(st.length=0,xt.length=0,st.push(i.COLOR_ATTACHMENT0+se),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(st.push(ie),xt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let se=0;se<m.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,re.__webglColorRenderbuffer[se]);let be=n.get(m[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&c){let m=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function at(S){return Math.min(r.maxSamples,S.samples)}function ft(S){let m=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function P(S){let m=o.render.frame;f.get(S)!==m&&(f.set(S,m),S.update())}function St(S,m){let N=S.colorSpace,k=S.format,G=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==pr&&N!==Ln&&(Ye.getTransfer(N)===Ke?(k!==Qt||G!==Wt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",N)),m}function Je(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(a.width=S.naturalWidth||S.width,a.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(a.width=S.displayWidth,a.height=S.displayHeight):(a.width=S.width,a.height=S.height),a}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=We,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function J0(i,e){function t(n,r=Ln){let s,o=Ye.getTransfer(r);if(n===Wt)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Za)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wa)return i.BYTE;if(n===Xa)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Ka)return i.ALPHA;if(n===Ja)return i.RGB;if(n===Qt)return i.RGBA;if(n===yn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===io)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===so)return i.RGBA_INTEGER;if(n===Dr||n===Nr||n===Ur||n===Fr)if(o===Ke)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===ao||n===ho||n===co)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===fo||n===uo||n===po||n===go||n===Or||n===mo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lo||n===fo)return o===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===po)return s.COMPRESSED_R11_EAC;if(n===go)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return s.COMPRESSED_RG11_EAC;if(n===mo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===xo||n===wo||n===vo||n===yo||n===bo||n===Mo||n===So||n===To||n===Ao||n===Eo||n===Co||n===Ro||n===Io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_o)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return o===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Ho||n===Lo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Po)return o===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===No||n===Yr||n===Uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:$0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends bn{constructor(e,t){super();let n=this,r=null,s=1,o=null,h="local-floor",c=1,a=null,f=null,d=null,l=null,u=null,_=null,v=typeof XRWebGLBinding<"u",g=new Sh,p={},T=t.getContextAttributes(),C=null,y=null,b=[],M=[],E=new Ve,w=null,A=null,H=new Ut;H.viewport=new ht;let D=new Ut;D.viewport=new ht;let Y=[H,D],z=new Zs,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=b[X];return j===void 0&&(j=new zi,b[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=b[X];return j===void 0&&(j=new zi,b[X]=j),j.getGripSpace()},this.getHand=function(X){let j=b[X];return j===void 0&&(j=new zi,b[X]=j),j.getHandSpace()};function K(X){let j=M.indexOf(X.inputSource);if(j===-1)return;let _e=b[j];_e!==void 0&&(_e.update(X.inputSource,X.frame,a||o),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ne);for(let X=0;X<b.length;X++){let j=M[X];j!==null&&(M[X]=null,b[X].disconnect(j))}L=null,B=null,g.reset();for(let X in p)delete p[X];if(e.setRenderTarget(C),u=null,l=null,d=null,r=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),A!==null){let X=A.camera;X.fov=A.fov,X.zoom=A.zoom,X.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(X){a=X},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?ti:yn,Pe=T.stencil?Ki:dn);let Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),l=d.createProjectionLayer(Ne),r.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),y=new Ft(l.textureWidth,l.textureHeight,{format:Qt,type:Wt,depthTexture:new qn(l.textureWidth,l.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}else{let _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ft(u.framebufferWidth,u.framebufferHeight,{format:Qt,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),a=null,o=await r.requestReferenceSpace(h),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(X){for(let j=0;j<X.removed.length;j++){let _e=X.removed[j],Pe=M.indexOf(_e);Pe>=0&&(M[Pe]=null,b[Pe].disconnect(_e))}for(let j=0;j<X.added.length;j++){let _e=X.added[j],Pe=M.indexOf(_e);if(Pe===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=M.length){M.push(_e),Pe=Ne;break}else if(M[Ne]===null){M[Ne]=_e,Pe=Ne;break}if(Pe===-1)break}let ge=b[Pe];ge&&ge.connect(_e)}}let W=new U,Q=new U;function te(X,j,_e){W.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);let Pe=W.distanceTo(Q),ge=j.projectionMatrix.elements,Ne=_e.projectionMatrix.elements,pt=ge[14]/(ge[10]-1),Ue=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],et=(ge[9]-1)/ge[5],Oe=(ge[8]-1)/ge[0],st=(Ne[8]+1)/Ne[0],xt=pt*Oe,Nt=pt*st,at=Pe/(-Oe+st),ft=at*-Oe;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ft),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let P=pt+at,St=Ue+at,Je=xt-ft,S=Nt+(Pe-ft),m=We*Ue/St*P,N=et*Ue/St*P;X.projectionMatrix.makePerspective(Je,S,m,N,P,St),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ae(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let j=X.near,_e=X.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),z.near=D.near=H.near=j,z.far=D.far=H.far=_e,(L!==z.near||B!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,B=z.far),z.layers.mask=X.layers.mask|6,H.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let Pe=X.parent,ge=z.cameras;Ae(z,Pe);for(let Ne=0;Ne<ge.length;Ne++)Ae(ge[Ne],Pe);ge.length===2?te(z,H,D):z.projectionMatrix.copy(H.projectionMatrix),A===null&&X.isPerspectiveCamera&&(A={camera:X,fov:X.fov,zoom:X.zoom}),Se(X,z,Pe)};function Se(X,j,_e){_e===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Bi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(X){c=X,l!==null&&(l.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(X){return p[X]};let Qe=null;function ke(X,j){if(f=j.getViewerPose(a||o),_=j,f!==null){let _e=f.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Pe=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,Pe=!0);for(let Ue=0;Ue<_e.length;Ue++){let We=_e[Ue],et=null;if(u!==null)et=u.getViewport(We);else{let st=d.getViewSubImage(l,We);et=st.viewport,Ue===0&&(e.setRenderTargetTextures(y,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(y))}let Oe=Y[Ue];Oe===void 0&&(Oe=new Ut,Oe.layers.enable(Ue),Oe.viewport=new ht,Y[Ue]=Oe),Oe.matrix.fromArray(We.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(We.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(et.x,et.y,et.width,et.height),Ue===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pe===!0&&z.cameras.push(Oe)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Ue=d.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&g.init(Ue,r.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ue=0;Ue<_e.length;Ue++){let We=_e[Ue].camera;if(We){let et=p[We];et||(et=new Tr,p[We]=et);let Oe=d.getCameraImage(We);et.sourceTexture=Oe}}}}for(let _e=0;_e<b.length;_e++){let Pe=M[_e],ge=b[_e];Pe!==null&&ge!==void 0&&ge.update(Pe,j,a||o)}Qe&&Qe(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let Xe=new El;Xe.setAnimationLoop(ke),this.setAnimationLoop=function(X){Qe=X},this.dispose=function(){}}},Q0=new ot,Ll=new Ie;Ll.set(-1,0,0,0,1,0,0,0,1);function em(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,T,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),l(g,p),p.isMeshPhysicalMaterial&&u(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&h(g,p)):p.isPointsMaterial?c(g,p,T,C):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Dt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Dt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=e.get(p),C=T.envMap,y=T.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ll),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function h(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,C){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=C*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function l(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tm(i,e,t,n){let r={},s={},o=[],h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let M=b.program;n.uniformBlockBinding(y,M)}function a(y,b){let M=r[y.id];M===void 0&&(g(y),M=f(y),r[y.id]=M,y.addEventListener("dispose",T));let E=b.program;n.updateUBOMapping(y,E);let w=e.render.frame;s[y.id]!==w&&(l(y),s[y.id]=w)}function f(y){let b=d();y.__bindingPointIndex=b;let M=i.createBuffer(),E=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<h;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(y){let b=r[y.id],M=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=M.length;w<A;w++){let H=M[w];if(Array.isArray(H))for(let D=0,Y=H.length;D<Y;D++)u(H[D],w,D,E);else u(H,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,b,M,E){if(v(y,b,M,E)===!0){let w=y.__offset,A=y.value;if(Array.isArray(A)){let H=0;for(let D=0;D<A.length;D++){let Y=A[D],z=p(Y);_(Y,y.__data,H),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(H+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function _(y,b,M){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,M)}function v(y,b,M,E){let w=y.value,A=b+"_"+M;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:ArrayBuffer.isView(w)?E[A]=w.slice():E[A]=w.clone(),!0;{let H=E[A];if(typeof w=="number"||typeof w=="boolean"){if(H!==w)return E[A]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(H.equals(w)===!1)return H.copy(w),!0}}return!1}function g(y){let b=y.uniforms,M=0,E=16;for(let A=0,H=b.length;A<H;A++){let D=Array.isArray(b[A])?b[A]:[b[A]];for(let Y=0,z=D.length;Y<z;Y++){let L=D[Y],B=Array.isArray(L.value)?L.value:[L.value];for(let K=0,Z=B.length;K<Z;K++){let ne=B[K],W=p(ne),Q=M%E,te=Q%W.boundary,Ae=Q+te;M+=te,Ae!==0&&E-Ae<W.storage&&(M+=E-Ae),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=W.storage}}}let w=M%E;return w>0&&(M+=E-w),y.__size=M,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),b}function T(y){let b=y.target;b.removeEventListener("dispose",T);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function C(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:a,dispose:C}}var nm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function im(){return Sn===null&&(Sn=new Gi(nm,16,16,ni,pn),Sn.name="DFG_LUT",Sn.minFilter=Mt,Sn.magFilter=Mt,Sn.wrapS=vn,Sn.wrapT=vn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Go=class{constructor(e={}){let{canvas:t=jc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:h=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:a=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:l=!1,outputBufferType:u=Wt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=u,g=new Set([so,ro,io]),p=new Set([Wt,dn,Zi,Ki,to,no]),T=new Uint32Array(4),C=new Int32Array(4),y=new U,b=null,M=null,E=[],w=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,D=!1,Y=null,z=null,L=null,B=null;this._outputColorSpace=bt;let K=0,Z=0,ne=null,W=-1,Q=null,te=new ht,Ae=new ht,Se=null,Qe=new Ge(0),ke=0,Xe=t.width,X=t.height,j=1,_e=null,Pe=null,ge=new ht(0,0,Xe,X),Ne=new ht(0,0,Xe,X),pt=!1,Ue=new br,We=!1,et=!1,Oe=new ot,st=new U,xt=new ht,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function ft(){return ne===null?j:1}let P=n;function St(x,R){return t.getContext(x,R)}let Je,S,m,N,k,G,ie,re,q,$,se,be,ce,oe,Me,Ee,He,I,ae,J,he,ue,ee;try{let x={alpha:!0,depth:r,stencil:s,antialias:h,premultipliedAlpha:c,preserveDrawingBuffer:a,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Js}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",rn,!1),P===null){let R="webgl2";if(P=St(R,x),P===null)throw St(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(x){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Re("WebGLRenderer: "+x.message),x}function Te(){Je=new lg(P),Je.init(),he=new J0(P,Je),S=new eg(P,Je,e,he),m=new Z0(P,Je),S.reversedDepthBuffer&&l&&m.buffers.depth.setReversed(!0),z=P.createFramebuffer(),L=P.createFramebuffer(),B=P.createFramebuffer(),N=new ug(P),k=new D0,G=new K0(P,Je,m,k,S,he,N),ie=new cg(H),re=new gd(P),ue=new jp(P,re),q=new fg(P,re,N,ue),$=new gg(P,q,re,ue,N),I=new pg(P,S,G),Me=new tg(k),se=new L0(H,ie,Je,S,ue,Me),be=new em(H,k),ce=new U0,oe=new z0(Je),He=new $p(H,ie,m,$,_,c),Ee=new q0(H,$,S),ee=new tm(P,N,S,m),ae=new Qp(P,Je,N),J=new dg(P,Je,N),N.programs=se.programs,H.capabilities=S,H.extensions=Je,H.properties=k,H.renderLists=ce,H.shadowMap=Ee,H.state=m,H.info=N}v!==Wt&&(A=new _g(v,t.width,t.height,h,r,s));let ve=new Th(H,P);this.xr=ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let x=Je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(Xe,X,!1))},this.getSize=function(x){return x.set(Xe,X)},this.setSize=function(x,R,V=!0){if(ve.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=x,X=R,t.width=Math.floor(x*j),t.height=Math.floor(R*j),V===!0&&(t.style.width=x+"px",t.style.height=R+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,x,R)},this.getDrawingBufferSize=function(x){return x.set(Xe*j,X*j).floor()},this.setDrawingBufferSize=function(x,R,V){Xe=x,X=R,j=V,t.width=Math.floor(x*V),t.height=Math.floor(R*V),this.setViewport(0,0,x,R)},this.setEffects=function(x){if(v===Wt){Re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let R=0;R<x.length;R++)if(x[R].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(te)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,R,V,F){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,R,V,F),m.viewport(te.copy(ge).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Ne)},this.setScissor=function(x,R,V,F){x.isVector4?Ne.set(x.x,x.y,x.z,x.w):Ne.set(x,R,V,F),m.scissor(Ae.copy(Ne).multiplyScalar(j).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(x){m.setScissorTest(pt=x)},this.setOpaqueSort=function(x){_e=x},this.setTransparentSort=function(x){Pe=x},this.getClearColor=function(x){return x.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(x=!0,R=!0,V=!0){let F=0;if(x){let O=!1;if(ne!==null){let de=ne.texture.format;O=g.has(de)}if(O){let de=ne.texture.type,me=p.has(de),fe=He.getClearColor(),xe=He.getClearAlpha(),ye=fe.r,Le=fe.g,Fe=fe.b;me?(T[0]=ye,T[1]=Le,T[2]=Fe,T[3]=xe,P.clearBufferuiv(P.COLOR,0,T)):(C[0]=ye,C[1]=Le,C[2]=Fe,C[3]=xe,P.clearBufferiv(P.COLOR,0,C))}else F|=P.COLOR_BUFFER_BIT}R&&(F|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),Y=x},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),He.dispose(),ce.dispose(),oe.dispose(),k.dispose(),ie.dispose(),$.dispose(),ue.dispose(),ee.dispose(),se.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",zh),ve.removeEventListener("sessionend",Vh),si.stop()};function tt(x){x.preventDefault(),eh("WebGLRenderer: Context Lost."),D=!0}function qe(){eh("WebGLRenderer: Context Restored."),D=!1;let x=N.autoReset,R=Ee.enabled,V=Ee.autoUpdate,F=Ee.needsUpdate,O=Ee.type;Te(),N.autoReset=x,Ee.enabled=R,Ee.autoUpdate=V,Ee.needsUpdate=F,Ee.type=O}function rn(x){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function _n(x){let R=x.target;R.removeEventListener("dispose",_n),df(R)}function df(x){uf(x),k.remove(x)}function uf(x){let R=k.get(x).programs;R!==void 0&&(R.forEach(function(V){se.releaseProgram(V)}),x.isShaderMaterial&&se.releaseShaderCache(x))}this.renderBufferDirect=function(x,R,V,F,O,de){R===null&&(R=Nt);let me=O.isMesh&&O.matrixWorld.determinantAffine()<0,fe=mf(x,R,V,F,O);m.setMaterial(F,me);let xe=V.index,ye=1;if(F.wireframe===!0){if(xe=q.getWireframeAttribute(V),xe===void 0)return;ye=2}let Le=V.drawRange,Fe=V.attributes.position,we=Le.start*ye,Ze=(Le.start+Le.count)*ye;de!==null&&(we=Math.max(we,de.start*ye),Ze=Math.min(Ze,(de.start+de.count)*ye)),xe!==null?(we=Math.max(we,0),Ze=Math.min(Ze,xe.count)):Fe!=null&&(we=Math.max(we,0),Ze=Math.min(Ze,Fe.count));let dt=Ze-we;if(dt<0||dt===1/0)return;ue.setup(O,F,fe,V,xe);let it,je=ae;if(xe!==null&&(it=re.get(xe),je=J,je.setIndex(it)),O.isMesh)F.wireframe===!0?(m.setLineWidth(F.wireframeLinewidth*ft()),je.setMode(P.LINES)):je.setMode(P.TRIANGLES);else if(O.isLine){let Tt=F.linewidth;Tt===void 0&&(Tt=1),m.setLineWidth(Tt*ft()),O.isLineSegments?je.setMode(P.LINES):O.isLineLoop?je.setMode(P.LINE_LOOP):je.setMode(P.LINE_STRIP)}else O.isPoints?je.setMode(P.POINTS):O.isSprite&&je.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Tt=O._multiDrawStarts,pe=O._multiDrawCounts,Rt=O._multiDrawCount,ze=xe?re.get(xe).bytesPerElement:1,Zt=k.get(F).currentProgram.getUniforms();for(let xn=0;xn<Rt;xn++)Zt.setValue(P,"_gl_DrawID",xn),je.render(Tt[xn]/ze,pe[xn])}else if(O.isInstancedMesh)je.renderInstances(we,dt,O.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,Tt);je.renderInstances(we,dt,pe)}else je.render(we,dt)};function kh(x,R,V,F){Y!==null&&x.isNodeMaterial&&Y.setObject(F,x),We===!0&&Me.setState(x,V,!1),x.transparent===!0&&x.side===Ot&&x.forceSinglePass===!1?(x.side=Dt,x.needsUpdate=!0,jr(x,R,F),x.side=jn,x.needsUpdate=!0,jr(x,R,F),x.side=Ot):jr(x,R,F)}this.compile=function(x,R,V=null){V===null&&(V=x),Y!==null&&Y.renderStart(x,R,V),M=oe.get(V),M.init(R),w.push(M),V.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(M.pushLight(O),O.castShadow&&M.pushShadow(O))}),M.setupLights(),Y!==null&&Y.updateLights(M.state.lightsArray),et=this.localClippingEnabled,We=Me.init(this.clippingPlanes,et),We===!0&&Me.setGlobalState(this.clippingPlanes,R),Y!==null&&Ee.render(M.state.shadowsArray,V,R);let F=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let de=O.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){let fe=de[me];kh(fe,V,R,O),F.add(fe)}else kh(de,V,R,O),F.add(de)}),M=w.pop(),Y!==null&&Y.renderEnd(),F},this.compileAsync=function(x,R,V=null){let F=this.compile(x,R,V);return new Promise(O=>{function de(){if(F.forEach(function(me){let xe=k.get(me).currentProgram;(xe===void 0||xe.isReady())&&F.delete(me)}),F.size===0){O(x);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let na=null;function pf(x){na&&na(x)}function zh(){si.stop()}function Vh(){si.start()}let si=new El;si.setAnimationLoop(pf),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(x){na=x,ve.setAnimationLoop(x),x===null?si.stop():si.start()},ve.addEventListener("sessionstart",zh),ve.addEventListener("sessionend",Vh),this.render=function(x,R){if(R!==void 0&&R.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;Y!==null&&Y.renderStart(x,R);let V=ve.enabled===!0&&ve.isPresenting===!0,F=A!==null&&(ne===null||V)&&A.begin(H,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(R),R=ve.getCamera()),x.isScene===!0&&x.onBeforeRender(H,x,R,ne),M=oe.get(x,w.length),M.init(R),M.state.textureUnits=G.getTextureUnits(),w.push(M),Oe.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Ue.setFromProjectionMatrix(Oe,cn,R.reversedDepth),et=this.localClippingEnabled,We=Me.init(this.clippingPlanes,et),b=ce.get(x,E.length),b.init(),E.push(b),ve.enabled===!0&&ve.isPresenting===!0){let me=H.xr.getDepthSensingMesh();me!==null&&ia(me,R,-1/0,H.sortObjects)}ia(x,R,0,H.sortObjects),b.finish(),Y!==null&&Y.updateLights(M.state.lightsArray),H.sortObjects===!0&&b.sort(_e,Pe),at=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,at&&He.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Me.beginShadows();let O=M.state.shadowsArray;if(Ee.render(O,x,R),We===!0&&Me.endShadows(),(F&&A.hasRenderPass())===!1){let me=b.opaque,fe=b.transmissive;if(M.setupLights(),R.isArrayCamera){let xe=R.cameras;if(fe.length>0)for(let ye=0,Le=xe.length;ye<Le;ye++){let Fe=xe[ye];Wh(me,fe,x,Fe)}at&&He.render(x);for(let ye=0,Le=xe.length;ye<Le;ye++){let Fe=xe[ye];Gh(b,x,Fe,Fe.viewport)}}else fe.length>0&&Wh(me,fe,x,R),at&&He.render(x),Gh(b,x,R)}ne!==null&&Z===0&&(G.updateMultisampleRenderTarget(ne),G.updateRenderTargetMipmap(ne)),F&&A.end(H),x.isScene===!0&&x.onAfterRender(H,x,R),ue.resetDefaultState(),W=-1,Q=null,w.pop(),w.length>0?(M=w[w.length-1],G.setTextureUnits(M.state.textureUnits),We===!0&&Me.setGlobalState(H.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?b=E[E.length-1]:b=null,Y!==null&&Y.renderEnd()};function ia(x,R,V,F){if(x.visible===!1)return;if(x.layers.test(R.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(R);else if(x.isLightProbeGrid)M.pushLightProbeGrid(x);else if(x.isLight)M.pushLight(x),x.castShadow&&M.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Ue)){F&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Oe);let me=$.update(x),fe=x.material;fe.visible&&b.push(x,me,fe,V,xt.z,null,R)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Ue))){let me=$.update(x),fe=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),xt.copy(me.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(Oe)),Array.isArray(fe)){let xe=me.groups;for(let ye=0,Le=xe.length;ye<Le;ye++){let Fe=xe[ye],we=fe[Fe.materialIndex];we&&we.visible&&b.push(x,me,we,V,xt.z,Fe,R)}}else fe.visible&&b.push(x,me,fe,V,xt.z,null,R)}}let de=x.children;for(let me=0,fe=de.length;me<fe;me++)ia(de[me],R,V,F)}function Gh(x,R,V,F){let{opaque:O,transmissive:de,transparent:me}=x;M.setupLightsView(V),We===!0&&Me.setGlobalState(H.clippingPlanes,V),F&&m.viewport(te.copy(F)),O.length>0&&$r(O,R,V),de.length>0&&$r(de,R,V),me.length>0&&$r(me,R,V),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Wh(x,R,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[F.id]===void 0){let we=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[F.id]=new Ft(1,1,{generateMipmaps:!0,type:we?pn:Wt,minFilter:ei,samples:Math.max(4,S.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let de=M.state.transmissionRenderTarget[F.id],me=F.viewport||te;de.setSize(me.z*H.transmissionResolutionScale,me.w*H.transmissionResolutionScale);let fe=H.getRenderTarget(),xe=H.getActiveCubeFace(),ye=H.getActiveMipmapLevel();H.setRenderTarget(de),H.getClearColor(Qe),ke=H.getClearAlpha(),ke<1&&H.setClearColor(16777215,.5),H.clear(),at&&He.render(V);let Le=H.toneMapping;H.toneMapping=fn;let Fe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),M.setupLightsView(F),We===!0&&Me.setGlobalState(H.clippingPlanes,F),$r(x,V,F),G.updateMultisampleRenderTarget(de),G.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Ze=0,dt=R.length;Ze<dt;Ze++){let it=R[Ze],{object:je,geometry:Tt,material:pe,group:Rt}=it;if(pe.side===Ot&&je.layers.test(F.layers)){let ze=pe.side;pe.side=Dt,pe.needsUpdate=!0,Xh(je,V,F,Tt,pe,Rt),pe.side=ze,pe.needsUpdate=!0,we=!0}}we===!0&&(G.updateMultisampleRenderTarget(de),G.updateRenderTargetMipmap(de))}H.setRenderTarget(fe,xe,ye),H.setClearColor(Qe,ke),Fe!==void 0&&(F.viewport=Fe),H.toneMapping=Le}function $r(x,R,V){let F=R.isScene===!0?R.overrideMaterial:null;for(let O=0,de=x.length;O<de;O++){let me=x[O],{object:fe,geometry:xe,group:ye}=me,Le=me.material;Le.allowOverride===!0&&F!==null&&(Le=F),fe.layers.test(V.layers)&&Xh(fe,R,V,xe,Le,ye)}}function Xh(x,R,V,F,O,de){Y!==null&&O.isNodeMaterial&&Y.setObject(x,O),x.onBeforeRender(H,R,V,F,O,de),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(H,R,V,F,x,de),O.transparent===!0&&O.side===Ot&&O.forceSinglePass===!1?(O.side=Dt,O.needsUpdate=!0,H.renderBufferDirect(V,R,F,O,x,de),O.side=jn,O.needsUpdate=!0,H.renderBufferDirect(V,R,F,O,x,de),O.side=Ot):H.renderBufferDirect(V,R,F,O,x,de),x.onAfterRender(H,R,V,F,O,de)}function jr(x,R,V){R.isScene!==!0&&(R=Nt);let F=k.get(x),O=M.state.lights,de=M.state.shadowsArray,me=O.state.version,fe=se.getParameters(x,O.state,de,R,V,M.state.lightProbeGridArray),xe=se.getProgramCacheKey(fe),ye=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F.fog=R.fog;let Le=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=ie.get(x.envMap||F.environment,Le),F.envMapRotation=F.environment!==null&&x.envMap===null?R.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",_n),ye=new Map,F.programs=ye);let Fe=ye.get(xe);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===me)return Zh(x,fe),Fe}else fe.uniforms=se.getUniforms(x),Y!==null&&x.isNodeMaterial&&Y.build(x,V,fe),x.onBeforeCompile(fe,H),Fe=se.acquireProgram(fe,xe),ye.set(xe,Fe),F.uniforms=fe.uniforms;let we=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=Me.uniform),Zh(x,fe),F.needsLights=xf(x),F.lightsStateVersion=me,F.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.sunLights.value=O.state.sun,we.sunLightShadows.value=O.state.sunShadow,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.sunShadowMatrix.value=O.state.sunShadowMatrix,we.sunShadowCascade.value=O.state.sunShadowCascade,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=M.state.lightProbeGridArray.length>0,F.currentProgram=Fe,F.uniformsList=null,Fe}function qh(x){if(x.uniformsList===null){let R=x.currentProgram.getUniforms();x.uniformsList=Qi.seqWithValue(R.seq,x.uniforms)}return x.uniformsList}function Zh(x,R){let V=k.get(x);V.outputColorSpace=R.outputColorSpace,V.batching=R.batching,V.batchingColor=R.batchingColor,V.instancing=R.instancing,V.instancingColor=R.instancingColor,V.instancingMorph=R.instancingMorph,V.skinning=R.skinning,V.morphTargets=R.morphTargets,V.morphNormals=R.morphNormals,V.morphColors=R.morphColors,V.morphTargetsCount=R.morphTargetsCount,V.numClippingPlanes=R.numClippingPlanes,V.numIntersection=R.numClipIntersection,V.vertexAlphas=R.vertexAlphas,V.vertexTangents=R.vertexTangents,V.toneMapping=R.toneMapping}function gf(x,R){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(R.matrixWorld);for(let V=0,F=x.length;V<F;V++){let O=x[V];if(O.texture!==null&&O.boundingBox.containsPoint(y))return O}return null}function mf(x,R,V,F,O){R.isScene!==!0&&(R=Nt),G.resetTextureUnits();let de=R.fog,me=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?R.environment:null,fe=ne===null?H.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ye.workingColorSpace,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,ye=ie.get(F.envMap||me,xe),Le=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),we=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color,it=fn;F.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(it=H.toneMapping);let je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=je!==void 0?je.length:0,pe=k.get(F),Rt=M.state.lights;if(We===!0&&(et===!0||x!==Q)){let nt=x===Q&&F.id===W;Me.setState(F,x,nt)}let ze=!1;F.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Rt.state.version||pe.outputColorSpace!==fe||O.isBatchedMesh&&pe.batching===!1||!O.isBatchedMesh&&pe.batching===!0||O.isBatchedMesh&&pe.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&pe.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&pe.instancing===!1||!O.isInstancedMesh&&pe.instancing===!0||O.isSkinnedMesh&&pe.skinning===!1||!O.isSkinnedMesh&&pe.skinning===!0||O.isInstancedMesh&&pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&pe.instancingMorph===!1&&O.morphTexture!==null||pe.envMap!==ye||F.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Me.numPlanes||pe.numIntersection!==Me.numIntersection)||pe.vertexAlphas!==Le||pe.vertexTangents!==Fe||pe.morphTargets!==we||pe.morphNormals!==Ze||pe.morphColors!==dt||pe.toneMapping!==it||pe.morphTargetsCount!==Tt||!!pe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ze=!0):(ze=!0,pe.__version=F.version);let Zt=pe.currentProgram;ze===!0&&(Zt=jr(F,R,O),Y&&F.isNodeMaterial&&Y.onUpdateProgram(F,Zt,pe));let xn=!1,Un=!1,xi=!1,$e=Zt.getUniforms(),ct=pe.uniforms;if(m.useProgram(Zt.program)&&(xn=!0,Un=!0,xi=!0),F.id!==W&&(W=F.id,Un=!0),pe.needsLights){let nt=gf(M.state.lightProbeGridArray,O);pe.lightProbeGrid!==nt&&(pe.lightProbeGrid=nt,Un=!0)}if(xn||Q!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),$e.setValue(P,"projectionMatrix",x.projectionMatrix),$e.setValue(P,"viewMatrix",x.matrixWorldInverse);let On=$e.map.cameraPosition;On!==void 0&&On.setValue(P,st.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&$e.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&$e.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Un=!0,xi=!0)}if(pe.needsLights&&(Rt.state.sunShadowMap.length>0&&$e.setValue(P,"sunShadowMap",Rt.state.sunShadowMap,G),Rt.state.directionalShadowMap.length>0&&$e.setValue(P,"directionalShadowMap",Rt.state.directionalShadowMap,G),Rt.state.spotShadowMap.length>0&&$e.setValue(P,"spotShadowMap",Rt.state.spotShadowMap,G),Rt.state.pointShadowMap.length>0&&$e.setValue(P,"pointShadowMap",Rt.state.pointShadowMap,G)),O.isSkinnedMesh){$e.setOptional(P,O,"bindMatrix"),$e.setOptional(P,O,"bindMatrixInverse");let nt=O.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),$e.setValue(P,"boneTexture",nt.boneTexture,G))}O.isBatchedMesh&&($e.setOptional(P,O,"batchingTexture"),$e.setValue(P,"batchingTexture",O._matricesTexture,G),$e.setOptional(P,O,"batchingIdTexture"),$e.setValue(P,"batchingIdTexture",O._indirectTexture,G),$e.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&$e.setValue(P,"batchingColorTexture",O._colorsTexture,G));let Fn=V.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&I.update(O,V,Zt),(Un||pe.receiveShadow!==O.receiveShadow)&&(pe.receiveShadow=O.receiveShadow,$e.setValue(P,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&R.environment!==null&&(ct.envMapIntensity.value=R.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=im()),Un){if($e.setValue(P,"toneMappingExposure",H.toneMappingExposure),pe.needsLights&&_f(ct,xi),de&&F.fog===!0&&be.refreshFogUniforms(ct,de),be.refreshMaterialUniforms(ct,F,j,X,M.state.transmissionRenderTarget[x.id]),pe.needsLights&&pe.lightProbeGrid){let nt=pe.lightProbeGrid;ct.probesSH.value=nt.texture,ct.probesMin.value.copy(nt.boundingBox.min),ct.probesMax.value.copy(nt.boundingBox.max),ct.probesResolution.value.copy(nt.resolution)}Qi.upload(P,qh(pe),ct,G)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qi.upload(P,qh(pe),ct,G),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&$e.setValue(P,"center",O.center),$e.setValue(P,"modelViewMatrix",O.modelViewMatrix),$e.setValue(P,"normalMatrix",O.normalMatrix),$e.setValue(P,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let nt=F.uniformsGroups;for(let On=0,wi=nt.length;On<wi;On++){let Jh=nt[On];ee.update(Jh,Zt),ee.bind(Jh,Zt)}}return Zt}function _f(x,R){x.ambientLightColor.needsUpdate=R,x.lightProbe.needsUpdate=R,x.sunLights.needsUpdate=R,x.sunLightShadows.needsUpdate=R,x.directionalLights.needsUpdate=R,x.directionalLightShadows.needsUpdate=R,x.pointLights.needsUpdate=R,x.pointLightShadows.needsUpdate=R,x.spotLights.needsUpdate=R,x.spotLightShadows.needsUpdate=R,x.rectAreaLights.needsUpdate=R,x.hemisphereLights.needsUpdate=R}function xf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,R,V){let F=k.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(x.texture).__webglTexture=R,k.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,R){let V=k.get(x);V.__webglFramebuffer=R,V.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(x,R=0,V=0){ne=x,K=R,Z=V;let F=null,O=!1,de=!1;if(x){let fe=k.get(x);if(fe.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(P.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(x.viewport),Ae.copy(x.scissor),Se=x.scissorTest,m.viewport(te),m.scissor(Ae),m.setScissorTest(Se),W=-1;return}else if(fe.__webglFramebuffer===void 0)G.setupRenderTarget(x);else if(fe.__hasExternalTextures)G.rebindTextures(x,k.get(x.texture).__webglTexture,k.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Le=x.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&k.has(Le)&&(x.width!==Le.image.width||x.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(x)}}let xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(de=!0);let ye=k.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[R])?F=ye[R][V]:F=ye[R],O=!0):x.samples>0&&G.useMultisampledRTT(x)===!1?F=k.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?F=ye[V]:F=ye,te.copy(x.viewport),Ae.copy(x.scissor),Se=x.scissorTest}else te.copy(ge).multiplyScalar(j).floor(),Ae.copy(Ne).multiplyScalar(j).floor(),Se=pt;if(V!==0&&(F=z),m.bindFramebuffer(P.FRAMEBUFFER,F)&&m.drawBuffers(x,F),m.viewport(te),m.scissor(Ae),m.setScissorTest(Se),O){let fe=k.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,fe.__webglTexture,V)}else if(de){let fe=R;for(let xe=0;xe<x.textures.length;xe++){let ye=k.get(x.textures[xe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xe,ye.__webglTexture,V,fe)}}else if(x!==null&&V!==0){let fe=k.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,V)}W=-1};function Kh(x){let R=k.get(x);return(R.__readFormat!==x.format||R.__readType!==x.type)&&(R.__readFormat=x.format,R.__readType=x.type,R.__formatReadable=S.textureFormatReadable(x.format),R.__typeReadable=S.textureTypeReadable(x.type)),R}this.readRenderTargetPixels=function(x,R,V,F,O,de,me,fe=0){if(!(x&&x.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){m.bindFramebuffer(P.FRAMEBUFFER,xe);try{let ye=x.textures[fe],Le=ye.format,Fe=ye.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe);let we=Kh(ye);if(we.__formatReadable===!1){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=x.width-F&&V>=0&&V<=x.height-O&&P.readPixels(R,V,F,O,he.convert(Le),he.convert(Fe),de)}finally{let ye=ne!==null?k.get(ne).__webglFramebuffer:null;m.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,R,V,F,O,de,me,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(R>=0&&R<=x.width-F&&V>=0&&V<=x.height-O){m.bindFramebuffer(P.FRAMEBUFFER,xe);let ye=x.textures[fe],Le=ye.format,Fe=ye.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+fe);let we=Kh(ye);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.bufferData(P.PIXEL_PACK_BUFFER,de.byteLength,P.STREAM_READ),P.readPixels(R,V,F,O,he.convert(Le),he.convert(Fe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let dt=ne!==null?k.get(ne).__webglFramebuffer:null;m.bindFramebuffer(P.FRAMEBUFFER,dt);let it=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await el(P,it,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,de),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Ze),P.deleteSync(it),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,R=null,V=0){let F=Math.pow(2,-V),O=Math.floor(x.image.width*F),de=Math.floor(x.image.height*F),me=R!==null?R.x:0,fe=R!==null?R.y:0;G.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,me,fe,O,de),m.unbindTexture()},this.copyTextureToTexture=function(x,R,V=null,F=null,O=0,de=0){let me,fe,xe,ye,Le,Fe,we,Ze,dt,it=x.isCompressedTexture?x.mipmaps[de]:x.image;if(V!==null)me=V.max.x-V.min.x,fe=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,ye=V.min.x,Le=V.min.y,Fe=V.isBox3?V.min.z:0;else{let ct=Math.pow(2,-O);me=Math.floor(it.width*ct),fe=Math.floor(it.height*ct),x.isDataArrayTexture?xe=it.depth:x.isData3DTexture?xe=Math.floor(it.depth*ct):xe=1,ye=0,Le=0,Fe=0}F!==null?(we=F.x,Ze=F.y,dt=F.z):(we=0,Ze=0,dt=0);let je=he.convert(R.format),Tt=he.convert(R.type),pe;R.isData3DTexture?(G.setTexture3D(R,0),pe=P.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(G.setTexture2DArray(R,0),pe=P.TEXTURE_2D_ARRAY):(G.setTexture2D(R,0),pe=P.TEXTURE_2D),m.activeTexture(P.TEXTURE0),m.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,R.flipY),m.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),m.pixelStorei(P.UNPACK_ALIGNMENT,R.unpackAlignment);let Rt=m.getParameter(P.UNPACK_ROW_LENGTH),ze=m.getParameter(P.UNPACK_IMAGE_HEIGHT),Zt=m.getParameter(P.UNPACK_SKIP_PIXELS),xn=m.getParameter(P.UNPACK_SKIP_ROWS),Un=m.getParameter(P.UNPACK_SKIP_IMAGES);m.pixelStorei(P.UNPACK_ROW_LENGTH,it.width),m.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it.height),m.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),m.pixelStorei(P.UNPACK_SKIP_ROWS,Le),m.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe);let xi=x.isDataArrayTexture||x.isData3DTexture,$e=R.isDataArrayTexture||R.isData3DTexture;if(x.isDepthTexture){let ct=k.get(x),Fn=k.get(R),nt=k.get(ct.__renderTarget),On=k.get(Fn.__renderTarget);m.bindFramebuffer(P.READ_FRAMEBUFFER,nt.__webglFramebuffer),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let wi=0;wi<xe;wi++)xi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(x).__webglTexture,O,Fe+wi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(R).__webglTexture,de,dt+wi)),P.blitFramebuffer(ye,Le,me,fe,we,Ze,me,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);m.bindFramebuffer(P.READ_FRAMEBUFFER,null),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||k.has(x)){let ct=k.get(x),Fn=k.get(R);m.bindFramebuffer(P.READ_FRAMEBUFFER,L),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let nt=0;nt<xe;nt++)xi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ct.__webglTexture,O,Fe+nt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ct.__webglTexture,O),$e?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fn.__webglTexture,de,dt+nt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fn.__webglTexture,de),O!==0?P.blitFramebuffer(ye,Le,me,fe,we,Ze,me,fe,P.COLOR_BUFFER_BIT,P.NEAREST):$e?P.copyTexSubImage3D(pe,de,we,Ze,dt+nt,ye,Le,me,fe):P.copyTexSubImage2D(pe,de,we,Ze,ye,Le,me,fe);m.bindFramebuffer(P.READ_FRAMEBUFFER,null),m.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else $e?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(pe,de,we,Ze,dt,me,fe,xe,je,Tt,it.data):R.isCompressedArrayTexture?P.compressedTexSubImage3D(pe,de,we,Ze,dt,me,fe,xe,je,it.data):P.texSubImage3D(pe,de,we,Ze,dt,me,fe,xe,je,Tt,it):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,de,we,Ze,me,fe,je,Tt,it.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,de,we,Ze,it.width,it.height,je,it.data):P.texSubImage2D(P.TEXTURE_2D,de,we,Ze,me,fe,je,Tt,it);m.pixelStorei(P.UNPACK_ROW_LENGTH,Rt),m.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze),m.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),m.pixelStorei(P.UNPACK_SKIP_ROWS,xn),m.pixelStorei(P.UNPACK_SKIP_IMAGES,Un),de===0&&R.generateMipmaps&&P.generateMipmap(pe),m.unbindTexture()},this.initRenderTarget=function(x){k.get(x).__webglFramebuffer===void 0&&G.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?G.setTextureCube(x,0):x.isData3DTexture?G.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?G.setTexture2DArray(x,0):G.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){K=0,Z=0,ne=null,m.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var tr=(i,e)=>Object.fromEntries(e.map((t,n)=>[t,{atlas:i,cell:n}])),nr={atlases:{heroes:{src:"assets/illustrated/heroes.webp",columns:4,rows:2},units:{src:"assets/illustrated/units.webp",columns:4,rows:4},bosses:{src:"assets/illustrated/bosses.webp",columns:4,rows:3},buildings:{src:"assets/illustrated/buildings.webp",columns:4,rows:3},props:{src:"assets/illustrated/props.webp",columns:4,rows:3},terrain:{src:"assets/illustrated/terrain.webp",columns:4,rows:2}},heroes:tr("heroes",["yi","sejong","eulji","gang","gwon","gwak","ahn","dangun"]),enemies:{...tr("units",["ashigaru","teppo","scout","samurai","ninja","onmyoji","cavalry","drum","armored","ram"]),...tr("bosses",["konishi","kato","wakizaka","ukita","ishida","so","kuroda","todo","kuki","kurushima","shimazu","hideyoshi"])},allies:Object.fromEntries(["militia","guard","elite","monk","courier","turtle"].map((i,e)=>[i,{atlas:"units",cell:e+10}])),towers:tr("buildings",["sungnyemun","hwaseong","bosingak","cheomseong","haeinsa","seokguram","gyeongbok","namhansan","seokbinggo","bulguksa"]),structures:{gate:{atlas:"buildings",cell:10},hall:{atlas:"buildings",cell:11}},props:tr("props",["pine","snowPine","maple","bamboo","rock","snowRock","hanok","thatch","supplies","jangseung","cliff","wall"]),terrain:tr("terrain",["spring","summer","autumn","winter","road","snowRoad","court","water"]),faces:{yi:[.61,.25,.37],sejong:[.44,.23,.36],eulji:[.59,.28,.37],gang:[.66,.25,.37],gwon:[.49,.25,.36],gwak:[.58,.22,.36],ahn:[.59,.22,.35],dangun:[.55,.26,.38]},portraits:{},backgrounds:{},scene:"assets/illustrated/scene.webp"};var rm={yi:[{id:"yi_white",name:"백의종군",price:60,body:"#e9e6dc",sleeve:"#dcd8cc",desc:"벼슬을 잃고도 흰옷으로 싸움터를 지킨 충무공."},{id:"yi_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 두정갑과 전설의 기운."}],sejong:[{id:"sejong_blue",name:"청룡포",price:60,body:"#2d5b8a",sleeve:"#2d5b8a",desc:"푸른 곤룡포를 입은 성군."},{id:"sejong_gold",name:"금빛 전설",price:150,gold:!0,desc:"황금 곤룡포와 전설의 기운."}],eulji:[{id:"eulji_iron",name:"고구려 철기",price:60,body:"#4a4f5c",sleeve:"#5a606e",desc:"개마무사의 검은 쇠비늘 갑옷."},{id:"eulji_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 찰갑과 전설의 기운."}],gang:[{id:"gang_crimson",name:"귀주의 붉은 별",price:60,body:"#8a2a2a",sleeve:"#9a3434",desc:"귀주대첩의 붉은 전포."},{id:"gang_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑주와 전설의 기운."}],gwon:[{id:"gwon_hill",name:"행주 산성",price:60,body:"#556b3a",sleeve:"#62783f",desc:"산성을 지키던 들녘빛 전복."},{id:"gwon_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑옷과 전설의 기운."}],gwak:[{id:"gwak_black",name:"흑의 의병",price:60,body:"#2c2b33",sleeve:"#3a3944",desc:"밤을 틈타 기습하던 검은 옷."},{id:"gwak_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 홍의와 전설의 기운."}],ahn:[{id:"ahn_militia",name:"대한의군 군복",price:60,body:"#4a5a3a",sleeve:"#3e4c30",desc:"연해주 의병 부대의 국방색 군복."},{id:"ahn_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 외투와 전설의 기운."}],dangun:[{id:"dangun_sky",name:"천제의 푸른 옷",price:60,body:"#3a6a9a",sleeve:"#4a7aaa",desc:"하늘에서 내려온 환웅의 푸른 옷."},{id:"dangun_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 신의(神衣)와 전설의 기운."}]},Nl={body:"#caa12a",sleeve:"#b8901f",boots:"#5a3a14"};function gn(i,e){return e&&(rm[i]||[]).find(t=>t.id===e)||null}var _i={path:"assets/illustrated/hero-menu-poses-v1.webp",width:1160,height:2022,padding:12,frames:[{key:"yi",heroId:"yi",skinId:null,left:12,top:12,width:247,height:313,anchor:.491608,face:[.6,.27,.38]},{key:"yi_white",heroId:"yi",skinId:"yi_white",left:302,top:12,width:209,height:260,anchor:.502999,face:[.62,.25,.4]},{key:"yi_gold",heroId:"yi",skinId:"yi_gold",left:592,top:12,width:201,height:239,anchor:.5006,face:[.63,.27,.4]},{key:"sejong",heroId:"sejong",skinId:null,left:882,top:12,width:222,height:302,anchor:.502476,face:[.62,.235,.38]},{key:"sejong_blue",heroId:"sejong",skinId:"sejong_blue",left:12,top:349,width:174,height:238,anchor:.505103,face:[.62,.23,.39]},{key:"sejong_gold",heroId:"sejong",skinId:"sejong_gold",left:302,top:349,width:186,height:248,anchor:.512843,face:[.65,.235,.39]},{key:"eulji",heroId:"eulji",skinId:null,left:592,top:349,width:152,height:189,anchor:.563421,face:[.7,.3,.45]},{key:"eulji_iron",heroId:"eulji",skinId:"eulji_iron",left:882,top:349,width:167,height:208,anchor:.571386,face:[.69,.29,.45]},{key:"eulji_gold",heroId:"eulji",skinId:"eulji_gold",left:12,top:686,width:171,height:211,anchor:.560129,face:[.69,.29,.45]},{key:"gang",heroId:"gang",skinId:null,left:302,top:686,width:259,height:295,anchor:.543238,face:[.63,.24,.4]},{key:"gang_crimson",heroId:"gang",skinId:"gang_crimson",left:592,top:686,width:262,height:297,anchor:.547801,face:[.63,.24,.4]},{key:"gang_gold",heroId:"gang",skinId:"gang_gold",left:882,top:686,width:266,height:297,anchor:.545031,face:[.63,.24,.4]},{key:"gwon",heroId:"gwon",skinId:null,left:12,top:1023,width:242,height:290,anchor:.512638,face:[.61,.25,.39]},{key:"gwon_hill",heroId:"gwon",skinId:"gwon_hill",left:302,top:1023,width:223,height:254,anchor:.534367,face:[.62,.25,.4]},{key:"gwon_gold",heroId:"gwon",skinId:"gwon_gold",left:592,top:1023,width:231,height:264,anchor:.524076,face:[.62,.25,.4]},{key:"gwak",heroId:"gwak",skinId:null,left:882,top:1023,width:191,height:270,anchor:.492593,face:[.64,.22,.39]},{key:"gwak_black",heroId:"gwak",skinId:"gwak_black",left:12,top:1360,width:172,height:248,anchor:.492582,face:[.66,.22,.39]},{key:"gwak_gold",heroId:"gwak",skinId:"gwak_gold",left:302,top:1360,width:191,height:267,anchor:.493775,face:[.66,.22,.39]},{key:"ahn",heroId:"ahn",skinId:null,left:592,top:1360,width:175,height:258,anchor:.52479,face:[.66,.22,.4]},{key:"ahn_militia",heroId:"ahn",skinId:"ahn_militia",left:882,top:1360,width:166,height:244,anchor:.518786,face:[.65,.22,.4]},{key:"ahn_gold",heroId:"ahn",skinId:"ahn_gold",left:12,top:1697,width:172,height:254,anchor:.523402,face:[.65,.22,.4]},{key:"dangun",heroId:"dangun",skinId:null,left:302,top:1697,width:181,height:244,anchor:.527138,face:[.68,.24,.42]},{key:"dangun_sky",heroId:"dangun",skinId:"dangun_sky",left:592,top:1697,width:179,height:238,anchor:.520614,face:[.67,.24,.42]},{key:"dangun_gold",heroId:"dangun",skinId:"dangun_gold",left:882,top:1697,width:181,height:237,anchor:.517983,face:[.67,.24,.42]}]};function Ul(i,e=null){let t=gn(i,e)?.id??null;return _i.frames.find(n=>n.heroId===i&&n.skinId===t)??null}var sm=176,mn=new Map,Ah=new Map,qo;function Vr(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,Math.round(i)),t.height=Math.max(1,Math.round(e)),t}function Zo(i){return new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i.startsWith("data:")?i:new URL(i,new URL("../../",import.meta.url)).href})}function om(i,e,t,n){let r=t%e.columns,s=Math.floor(t/e.columns),o=Math.round(r*i.naturalWidth/e.columns),h=Math.round(s*i.naturalHeight/e.rows),c=Math.round((r+1)*i.naturalWidth/e.columns)-o,a=Math.round((s+1)*i.naturalHeight/e.rows)-h,f=Vr(c,a);if(f.getContext("2d").drawImage(i,o,h,c,a,0,0,c,a),!n)return f;let d=f.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,c,a).data,l=c,u=a,_=0,v=0;for(let p=0;p<a;p++)for(let T=0;T<c;T++)d[(p*c+T)*4+3]<32||(l=Math.min(l,T),_=Math.max(_,T),u=Math.min(u,p),v=Math.max(v,p));if(l>_)return f;l=Math.max(0,l-1),u=Math.max(0,u-1),_=Math.min(c-1,_+1),v=Math.min(a-1,v+1);let g=Vr(_-l+1,v-u+1);return g.getContext("2d").drawImage(f,l,u,g.width,g.height,0,0,g.width,g.height),g}function am(i){let{width:e,height:t}=i,n=Math.floor(t*.88),r=i.getContext("2d").getImageData(0,n,e,t-n).data,s=0,o=0;for(let h=0;h<r.length;h+=4)r[h+3]>=80&&(s+=h/4%e,o++);return o?Math.max(.25,Math.min(.75,s/o/e)):.5}function Eh(i,e=.5){let t=sm,n=2,r=Math.round(i.width*t/i.height),s=Vr(r+n*2,t+n*2),o=s.getContext("2d");return o.imageSmoothingQuality="high",o.shadowColor="rgba(8,18,29,0.5)",o.shadowBlur=1.5,o.drawImage(i,n,n,r,t),{img:i,canvas:s,pad:n,ax:e,h:t}}function Ol(){return typeof document>"u"?Promise.resolve():qo||(qo=(async()=>{let[i,e]=await Promise.all([Promise.all(Object.entries(nr.atlases).map(async([r,s])=>[r,await Zo(s.src)])),Zo(_i.path)]),t=new Map(i),n=new Map;for(let r of["heroes","enemies","allies","towers","structures","props","terrain"])for(let[s,o]of Object.entries(nr[r])){let h=t.get(o.atlas);if(!h)continue;let c=`${o.atlas}:${o.cell}`,a=n.get(c);a||(a=om(h,nr.atlases[o.atlas],o.cell,r!=="terrain"),n.set(c,a));let f=["heroes","enemies","allies"].includes(r);mn.set(`${r}:${s}`,Eh(a,o.ax??(f?am(a):.5)))}if(e&&(e.naturalWidth||e.width)===_i.width&&(e.naturalHeight||e.height)===_i.height)for(let r of _i.frames){let s=Vr(r.width,r.height);s.getContext("2d").drawImage(e,r.left,r.top,r.width,r.height,0,0,r.width,r.height);let o={...Eh(s,r.anchor),face:r.face,source:"approved-menu-poses",look:r.key};mn.set(r.skinId?`look:${r.heroId}:${r.skinId}`:`heroes:${r.heroId}`,o)}await Promise.all([...Object.entries(nr.backgrounds).map(async([r,s])=>{let o=await Zo(s);o&&mn.set(`bg:${r}`,{img:o})}),Zo(nr.scene).then(r=>{r&&mn.set("scene",{img:r})})])})(),qo)}function Fl(i,e,t){i/=255,e/=255,t/=255;let n=Math.max(i,e,t),r=Math.min(i,e,t),s=(n+r)/2,o=n-r;if(!o)return[0,0,s];let h=o/(1-Math.abs(2*s-1));return[(n===i?(e-t)/o+(e<t?6:0):n===e?(t-i)/o+2:(i-e)/o+4)/6,h,s]}function hm(i,e,t){let n=e*Math.min(t,1-t),r=s=>{let o=(s+i*12)%12;return 255*(t-n*Math.max(-1,Math.min(o-3,9-o,1)))};return[r(0),r(8),r(4)]}var cm={sejong:.01,eulji:.14,gang:.75,gwon:.075,gwak:.01};function Yl(i,e=null){let t=mn.get(`heroes:${i}`);if(!t||!e)return t||null;let n=gn(i,e);if(!n)return t;let r=Ul(i,e),s=r&&mn.get(`look:${i}:${r.skinId}`);if(s)return s;let o=`${i}:${e}`;if(Ah.has(o))return Ah.get(o);let h=Vr(t.img.width,t.img.height),c=h.getContext("2d",{willReadFrequently:!0});c.drawImage(t.img,0,0);let a=c.getImageData(0,0,h.width,h.height),f=n.gold?Nl.body:n.body,d=Fl(...f.match(/[a-f\d]{2}/gi).map(u=>parseInt(u,16)));for(let u=Math.floor(h.height*.3);u<h.height;u++)for(let _=0;_<h.width;_++){let v=(u*h.width+_)*4;if(!a.data[v+3])continue;let[g,p,T]=Fl(a.data[v],a.data[v+1],a.data[v+2]),C=Math.abs(g-cm[i]);if(!(i==="yi"?p<.38&&T<.6:i==="ahn"?p<.27&&T<.6:i==="dangun"?p<.28&&T>.42&&!(u<h.height*.49&&_>h.width*.35&&_<h.width*.65):p>.18&&Math.min(C,1-C)<.12))continue;let b=Math.max(.06,Math.min(.94,T*.8+(d[2]-.3)*.65)),M=hm(d[0],d[1]*.9,b);for(let E=0;E<3;E++)a.data[v+E]=M[E]}c.putImageData(a,0,0);let l={...Eh(h,t.ax),face:t.face,source:"fallback-recolour",look:e};return Ah.set(o,l),l}var Bl=i=>mn.get(`enemies:${i}`)||null,kl=i=>mn.get(`allies:${i}`)||null,zl=i=>mn.get(`towers:${i}`)||null,Vl=i=>mn.get(`structures:${i}`)||null,Gl=i=>mn.get(`props:${i}`)||null;var Ch={a:{path:"assets/3d/fixed/landmark-tiers-a-v1.webp",width:1402,height:1122,x:[0,287,565,841,1123,1402],y:[0,299,578,830,1122],types:["bosingak","cheomseong","haeinsa","seokguram"]},b:{path:"assets/3d/fixed/landmark-tiers-b-v1.webp",width:1402,height:1122,x:[0,284,567,846,1124,1402],y:[0,312,579,806,1122],types:["gyeongbok","namhansan","seokbinggo","bulguksa"]}};function Wl(i,e,t){for(let[n,r]of Object.entries(Ch)){let s=r.types.indexOf(i);if(s>=0)return{sheet:n,index:s*5+(e===4?t==="B"?4:3:e-1)}}return null}var ir={yi:{path:"assets/3d/fixed/yi-directions-v2.webp",width:1233,height:1276,frames:[{left:50,top:11,width:247,height:313,anchor:.491608,anchorY:1,referenceHeight:310},{left:379,top:12,width:209,height:306,anchor:.440923,anchorY:1,referenceHeight:310},{left:644,top:10,width:229,height:307,anchor:.524589,anchorY:1,referenceHeight:310},{left:957,top:12,width:226,height:313,anchor:.518284,anchorY:1,referenceHeight:310},{left:53,top:327,width:244,height:308,anchor:.545612,anchorY:1,referenceHeight:310},{left:375,top:328,width:212,height:306,anchor:.480835,anchorY:1,referenceHeight:310},{left:656,top:328,width:220,height:307,anchor:.51022,anchorY:1,referenceHeight:310},{left:973,top:329,width:217,height:305,anchor:.395054,anchorY:1,referenceHeight:310},{left:53,top:638,width:243,height:300,anchor:.571707,anchorY:1,referenceHeight:310},{left:378,top:638,width:202,height:300,anchor:.464838,anchorY:1,referenceHeight:310},{left:662,top:638,width:211,height:301,anchor:.493892,anchorY:1,referenceHeight:310},{left:962,top:641,width:232,height:298,anchor:.455643,anchorY:1,referenceHeight:310},{left:37,top:942,width:285,height:293,anchor:.434693,anchorY:1,referenceHeight:310},{left:355,top:944,width:250,height:298,anchor:.397755,anchorY:1,referenceHeight:310},{left:634,top:943,width:267,height:290,anchor:.52379,anchorY:1,referenceHeight:310},{left:943,top:942,width:264,height:286,anchor:.540051,anchorY:1,referenceHeight:310}]},sejong:{path:"assets/3d/fixed/sejong-directions-v1.webp",width:1233,height:1276,frames:[{left:87,top:17,width:222,height:302,anchor:.502476,anchorY:1,referenceHeight:305},{left:390,top:15,width:187,height:306,anchor:.463072,anchorY:1,referenceHeight:305},{left:672,top:16,width:188,height:305,anchor:.53696,anchorY:1,referenceHeight:305},{left:955,top:15,width:192,height:305,anchor:.477977,anchorY:1,referenceHeight:305},{left:74,top:325,width:228,height:304,anchor:.511003,anchorY:1,referenceHeight:305},{left:383,top:328,width:199,height:307,anchor:.4891,anchorY:1,referenceHeight:305},{left:672,top:328,width:190,height:309,anchor:.535207,anchorY:1,referenceHeight:305},{left:963,top:331,width:202,height:303,anchor:.475254,anchorY:1,referenceHeight:305},{left:65,top:639,width:231,height:299,anchor:.550924,anchorY:1,referenceHeight:305},{left:386,top:643,width:190,height:296,anchor:.492765,anchorY:1,referenceHeight:305},{left:677,top:643,width:186,height:301,anchor:.522836,anchorY:1,referenceHeight:305},{left:963,top:645,width:205,height:302,anchor:.451802,anchorY:1,referenceHeight:305},{left:78,top:945,width:233,height:288,anchor:.413069,anchorY:1,referenceHeight:305},{left:362,top:951,width:242,height:298,anchor:.413517,anchorY:1,referenceHeight:305},{left:649,top:955,width:234,height:290,anchor:.592494,anchorY:1,referenceHeight:305},{left:923,top:948,width:231,height:289,anchor:.607881,anchorY:1,referenceHeight:305}]},eulji:{path:"assets/3d/fixed/eulji-directions-v2.webp",width:1232,height:1277,frames:[{left:66,top:99,width:152,height:189,anchor:.563421,anchorY:1,referenceHeight:190},{left:390,top:97,width:148,height:190,anchor:.49777,anchorY:1,referenceHeight:190},{left:697,top:96,width:149,height:190,anchor:.509059,anchorY:1,referenceHeight:190},{left:1015,top:98,width:149,height:190,anchor:.452595,anchorY:1,referenceHeight:190},{left:59,top:407,width:163,height:200,anchor:.617775,anchorY:1,referenceHeight:190},{left:388,top:403,width:151,height:203,anchor:.532211,anchorY:1,referenceHeight:190},{left:698,top:402,width:151,height:206,anchor:.458367,anchorY:1,referenceHeight:190},{left:1016,top:407,width:156,height:200,anchor:.343307,anchorY:1,referenceHeight:190},{left:65,top:709,width:159,height:195,anchor:.643038,anchorY:1,referenceHeight:190},{left:388,top:708,width:162,height:201,anchor:.43655,anchorY:1,referenceHeight:190},{left:694,top:706,width:156,height:206,anchor:.520778,anchorY:1,referenceHeight:190},{left:1017,top:709,width:152,height:195,anchor:.373035,anchorY:1,referenceHeight:190},{left:63,top:1003,width:219,height:180,anchor:.424389,anchorY:1,referenceHeight:190},{left:381,top:1007,width:196,height:183,anchor:.405173,anchorY:1,referenceHeight:190},{left:659,top:1006,width:196,height:185,anchor:.557538,anchorY:1,referenceHeight:190},{left:951,top:1002,width:220,height:181,anchor:.561561,anchorY:1,referenceHeight:190}]},gang:{path:"assets/3d/fixed/gang-directions-v1.webp",width:1233,height:1276,frames:[{left:30,top:32,width:259,height:295,anchor:.543238,anchorY:1,referenceHeight:293},{left:347,top:33,width:257,height:292,anchor:.494672,anchorY:1,referenceHeight:293},{left:675,top:35,width:236,height:290,anchor:.458745,anchorY:1,referenceHeight:293},{left:951,top:34,width:267,height:294,anchor:.485671,anchorY:1,referenceHeight:293},{left:28,top:340,width:255,height:297,anchor:.592097,anchorY:1,referenceHeight:293},{left:358,top:340,width:220,height:300,anchor:.576402,anchorY:1,referenceHeight:293},{left:673,top:340,width:231,height:301,anchor:.42382,anchorY:1,referenceHeight:293},{left:957,top:340,width:258,height:296,anchor:.374528,anchorY:1,referenceHeight:293},{left:38,top:656,width:231,height:282,anchor:.615708,anchorY:1,referenceHeight:293},{left:347,top:655,width:218,height:291,anchor:.541424,anchorY:1,referenceHeight:293},{left:685,top:655,width:211,height:292,anchor:.448194,anchorY:1,referenceHeight:293},{left:978,top:657,width:228,height:288,anchor:.352715,anchorY:1,referenceHeight:293},{left:24,top:962,width:282,height:263,anchor:.466717,anchorY:1,referenceHeight:293},{left:334,top:959,width:280,height:268,anchor:.449052,anchorY:1,referenceHeight:293},{left:647,top:958,width:265,height:270,anchor:.53166,anchorY:1,referenceHeight:293},{left:947,top:965,width:268,height:260,anchor:.526119,anchorY:1,referenceHeight:293}]},gwon:{path:"assets/3d/fixed/gwon-directions-v1.webp",width:1233,height:1276,frames:[{left:50,top:22,width:242,height:290,anchor:.512638,anchorY:1,referenceHeight:285},{left:369,top:28,width:208,height:284,anchor:.509672,anchorY:1,referenceHeight:285},{left:659,top:29,width:208,height:283,anchor:.463326,anchorY:1,referenceHeight:285},{left:954,top:26,width:233,height:286,anchor:.460919,anchorY:1,referenceHeight:285},{left:54,top:328,width:237,height:292,anchor:.513685,anchorY:1,referenceHeight:285},{left:364,top:334,width:211,height:288,anchor:.499539,anchorY:1,referenceHeight:285},{left:668,top:335,width:206,height:288,anchor:.475291,anchorY:1,referenceHeight:285},{left:949,top:330,width:235,height:291,anchor:.48038,anchorY:1,referenceHeight:285},{left:45,top:640,width:241,height:293,anchor:.546076,anchorY:1,referenceHeight:285},{left:362,top:649,width:208,height:289,anchor:.473427,anchorY:1,referenceHeight:285},{left:665,top:649,width:203,height:290,anchor:.506037,anchorY:1,referenceHeight:285},{left:956,top:641,width:237,height:294,anchor:.45055,anchorY:1,referenceHeight:285},{left:29,top:954,width:297,height:278,anchor:.44644,anchorY:1,referenceHeight:285},{left:350,top:961,width:262,height:272,anchor:.38118,anchorY:1,referenceHeight:285},{left:638,top:964,width:247,height:265,anchor:.552449,anchorY:1,referenceHeight:285},{left:913,top:955,width:288,height:277,anchor:.537893,anchorY:1,referenceHeight:285}]},gwak:{path:"assets/3d/fixed/gwak-directions-v1.webp",width:1230,height:1278,frames:[{left:69,top:45,width:191,height:270,anchor:.492593,anchorY:1,referenceHeight:270},{left:397,top:43,width:156,height:272,anchor:.452126,anchorY:1,referenceHeight:270},{left:674,top:46,width:166,height:269,anchor:.52941,anchorY:1,referenceHeight:270},{left:965,top:45,width:178,height:270,anchor:.495042,anchorY:1,referenceHeight:270},{left:71,top:371,width:187,height:265,anchor:.530171,anchorY:1,referenceHeight:270},{left:385,top:370,width:167,height:270,anchor:.462805,anchorY:1,referenceHeight:270},{left:674,top:370,width:178,height:266,anchor:.536497,anchorY:1,referenceHeight:270},{left:974,top:370,width:192,height:263,anchor:.403296,anchorY:1,referenceHeight:270},{left:65,top:681,width:203,height:262,anchor:.5228,anchorY:1,referenceHeight:270},{left:381,top:681,width:181,height:267,anchor:.425163,anchorY:1,referenceHeight:270},{left:671,top:683,width:191,height:261,anchor:.523219,anchorY:1,referenceHeight:270},{left:962,top:681,width:202,height:264,anchor:.466803,anchorY:1,referenceHeight:270},{left:58,top:977,width:235,height:256,anchor:.434951,anchorY:1,referenceHeight:270},{left:374,top:964,width:204,height:273,anchor:.440223,anchorY:1,referenceHeight:270},{left:656,top:965,width:205,height:276,anchor:.552396,anchorY:1,referenceHeight:270},{left:937,top:974,width:230,height:260,anchor:.558612,anchorY:1,referenceHeight:270}]},ahn:{path:"assets/3d/fixed/ahn-directions-v1.webp",width:1232,height:1277,frames:[{left:68,top:60,width:175,height:258,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:382,top:63,width:171,height:252,anchor:.525213,anchorY:1,referenceHeight:254.5},{left:694,top:63,width:173,height:251,anchor:.461072,anchorY:1,referenceHeight:254.5},{left:988,top:60,width:166,height:257,anchor:.473755,anchorY:1,referenceHeight:254.5},{left:65,top:367,width:170,height:261,anchor:.528265,anchorY:1,referenceHeight:254.5},{left:389,top:367,width:165,height:263,anchor:.416816,anchorY:1,referenceHeight:254.5},{left:698,top:368,width:159,height:264,anchor:.507658,anchorY:1,referenceHeight:254.5},{left:998,top:367,width:160,height:261,anchor:.476308,anchorY:1,referenceHeight:254.5},{left:70,top:672,width:174,height:257,anchor:.516201,anchorY:1,referenceHeight:254.5},{left:391,top:674,width:172,height:259,anchor:.463042,anchorY:1,referenceHeight:254.5},{left:693,top:675,width:161,height:259,anchor:.46128,anchorY:1,referenceHeight:254.5},{left:990,top:674,width:169,height:257,anchor:.447727,anchorY:1,referenceHeight:254.5},{left:59,top:973,width:239,height:243,anchor:.428626,anchorY:1,referenceHeight:254.5},{left:369,top:974,width:228,height:240,anchor:.427352,anchorY:1,referenceHeight:254.5},{left:651,top:973,width:217,height:244,anchor:.531864,anchorY:1,referenceHeight:254.5},{left:938,top:971,width:236,height:250,anchor:.570551,anchorY:1,referenceHeight:254.5}]},dangun:{path:"assets/3d/fixed/dangun-directions-v1.webp",width:1233,height:1276,frames:[{left:65,top:82,width:181,height:244,anchor:.527138,anchorY:1,referenceHeight:244},{left:370,top:84,width:183,height:244,anchor:.570995,anchorY:1,referenceHeight:244},{left:687,top:83,width:178,height:245,anchor:.412022,anchorY:1,referenceHeight:244},{left:989,top:83,width:178,height:243,anchor:.460881,anchorY:1,referenceHeight:244},{left:66,top:393,width:174,height:240,anchor:.567557,anchorY:1,referenceHeight:244},{left:375,top:389,width:181,height:250,anchor:.481275,anchorY:1,referenceHeight:244},{left:680,top:394,width:174,height:245,anchor:.49329,anchorY:1,referenceHeight:244},{left:992,top:392,width:176,height:241,anchor:.430678,anchorY:1,referenceHeight:244},{left:57,top:692,width:182,height:235,anchor:.605548,anchorY:1,referenceHeight:244},{left:378,top:690,width:189,height:239,anchor:.510881,anchorY:1,referenceHeight:244},{left:671,top:689,width:179,height:243,anchor:.477481,anchorY:1,referenceHeight:244},{left:988,top:692,width:185,height:235,anchor:.419611,anchorY:1,referenceHeight:244},{left:48,top:975,width:233,height:231,anchor:.478438,anchorY:1,referenceHeight:244},{left:367,top:974,width:215,height:238,anchor:.432054,anchorY:1,referenceHeight:244},{left:660,top:973,width:213,height:239,anchor:.551343,anchorY:1,referenceHeight:244},{left:954,top:974,width:231,height:233,anchor:.523123,anchorY:1,referenceHeight:244}]}};var Xl={enemy:{ashigaru:{path:"assets/3d/fixed/units/ashigaru-directions-v1.webp",width:1232,height:1277,frames:[{left:51,top:84,width:258,height:227,anchor:.351542,anchorY:1,referenceHeight:222.5},{left:363,top:88,width:231,height:221,anchor:.381496,anchorY:1,referenceHeight:222.5},{left:636,top:89,width:235,height:222,anchor:.607857,anchorY:1,referenceHeight:222.5},{left:927,top:89,width:254,height:223,anchor:.640334,anchorY:1,referenceHeight:222.5},{left:46,top:390,width:263,height:228,anchor:.407625,anchorY:1,referenceHeight:222.5},{left:370,top:388,width:221,height:233,anchor:.353316,anchorY:1,referenceHeight:222.5},{left:644,top:388,width:218,height:234,anchor:.627735,anchorY:1,referenceHeight:222.5},{left:923,top:391,width:263,height:228,anchor:.590797,anchorY:1,referenceHeight:222.5},{left:56,top:680,width:252,height:228,anchor:.414972,anchorY:1,referenceHeight:222.5},{left:374,top:680,width:220,height:233,anchor:.309664,anchorY:1,referenceHeight:222.5},{left:639,top:680,width:219,height:234,anchor:.694072,anchorY:1,referenceHeight:222.5},{left:925,top:682,width:251,height:229,anchor:.578414,anchorY:1,referenceHeight:222.5},{left:49,top:984,width:277,height:199,anchor:.32061,anchorY:1,referenceHeight:222.5},{left:360,top:988,width:246,height:205,anchor:.299266,anchorY:1,referenceHeight:222.5},{left:626,top:989,width:246,height:207,anchor:.689024,anchorY:1,referenceHeight:222.5},{left:906,top:984,width:275,height:200,anchor:.673618,anchorY:1,referenceHeight:222.5}]},teppo:{path:"assets/3d/fixed/units/teppo-directions-v1.webp",width:1230,height:1278,frames:[{left:81,top:78,width:219,height:225,anchor:.364421,anchorY:1,referenceHeight:231},{left:377,top:78,width:210,height:231,anchor:.403921,anchorY:1,referenceHeight:231},{left:652,top:78,width:203,height:231,anchor:.586885,anchorY:1,referenceHeight:231},{left:980,top:77,width:189,height:232,anchor:.430626,anchorY:1,referenceHeight:231},{left:81,top:379,width:219,height:236,anchor:.408489,anchorY:1,referenceHeight:231},{left:383,top:373,width:205,height:240,anchor:.332207,anchorY:1,referenceHeight:231},{left:645,top:371,width:205,height:251,anchor:.671,anchorY:1,referenceHeight:231},{left:976,top:372,width:192,height:245,anchor:.379369,anchorY:1,referenceHeight:231},{left:78,top:680,width:221,height:238,anchor:.424564,anchorY:1,referenceHeight:231},{left:388,top:678,width:189,height:247,anchor:.285882,anchorY:1,referenceHeight:231},{left:657,top:677,width:185,height:253,anchor:.74438,anchorY:1,referenceHeight:231},{left:993,top:673,width:185,height:249,anchor:.325011,anchorY:1,referenceHeight:231},{left:66,top:970,width:244,height:224,anchor:.36383,anchorY:1,referenceHeight:231},{left:364,top:972,width:228,height:232,anchor:.419231,anchorY:1,referenceHeight:231},{left:638,top:972,width:222,height:233,anchor:.598916,anchorY:1,referenceHeight:231},{left:924,top:969,width:239,height:228,anchor:.626433,anchorY:1,referenceHeight:231}]},scout:{path:"assets/3d/fixed/units/scout-directions-v1.webp",width:1232,height:1277,frames:[{left:77,top:60,width:200,height:242,anchor:.493896,anchorY:1,referenceHeight:241.5},{left:379,top:61,width:222,height:250,anchor:.482148,anchorY:1,referenceHeight:241.5},{left:664,top:62,width:178,height:240,anchor:.521726,anchorY:1,referenceHeight:241.5},{left:944,top:61,width:191,height:241,anchor:.496524,anchorY:1,referenceHeight:241.5},{left:95,top:367,width:170,height:259,anchor:.500762,anchorY:1,referenceHeight:241.5},{left:386,top:369,width:219,height:260,anchor:.314269,anchorY:1,referenceHeight:241.5},{left:669,top:368,width:180,height:262,anchor:.593669,anchorY:1,referenceHeight:241.5},{left:973,top:366,width:169,height:263,anchor:.420782,anchorY:1,referenceHeight:241.5},{left:81,top:686,width:191,height:252,anchor:.470271,anchorY:1,referenceHeight:241.5},{left:389,top:676,width:209,height:264,anchor:.327406,anchorY:1,referenceHeight:241.5},{left:691,top:679,width:152,height:263,anchor:.554879,anchorY:1,referenceHeight:241.5},{left:972,top:678,width:162,height:264,anchor:.445527,anchorY:1,referenceHeight:241.5},{left:60,top:998,width:296,height:212,anchor:.347111,anchorY:1,referenceHeight:241.5},{left:373,top:989,width:252,height:226,anchor:.251149,anchorY:1,referenceHeight:241.5},{left:637,top:996,width:243,height:218,anchor:.653108,anchorY:1,referenceHeight:241.5},{left:887,top:998,width:287,height:208,anchor:.643878,anchorY:1,referenceHeight:241.5}]},samurai:{path:"assets/3d/fixed/units/samurai-directions-v1.webp",width:1254,height:1254,frames:[{left:68,top:65,width:180,height:243,anchor:.506986,anchorY:1,referenceHeight:248.5},{left:393,top:63,width:166,height:249,anchor:.593464,anchorY:1,referenceHeight:248.5},{left:706,top:61,width:164,height:250,anchor:.421724,anchorY:1,referenceHeight:248.5},{left:1009,top:66,width:178,height:248,anchor:.512229,anchorY:1,referenceHeight:248.5},{left:68,top:353,width:172,height:258,anchor:.509157,anchorY:1,referenceHeight:248.5},{left:390,top:351,width:175,height:256,anchor:.524287,anchorY:1,referenceHeight:248.5},{left:704,top:354,width:175,height:261,anchor:.431053,anchorY:1,referenceHeight:248.5},{left:1031,top:358,width:170,height:257,anchor:.450338,anchorY:1,referenceHeight:248.5},{left:66,top:646,width:179,height:259,anchor:.586299,anchorY:1,referenceHeight:248.5},{left:401,top:645,width:162,height:261,anchor:.490299,anchorY:1,referenceHeight:248.5},{left:704,top:646,width:172,height:264,anchor:.492571,anchorY:1,referenceHeight:248.5},{left:1038,top:649,width:163,height:257,anchor:.382731,anchorY:1,referenceHeight:248.5},{left:60,top:954,width:278,height:233,anchor:.404508,anchorY:1,referenceHeight:248.5},{left:371,top:939,width:234,height:255,anchor:.467216,anchorY:1,referenceHeight:248.5},{left:655,top:938,width:223,height:258,anchor:.551209,anchorY:1,referenceHeight:248.5},{left:961,top:963,width:239,height:230,anchor:.589473,anchorY:1,referenceHeight:248.5}]},ninja:{path:"assets/3d/fixed/units/ninja-directions-v1.webp",width:1232,height:1277,frames:[{left:61,top:111,width:212,height:203,anchor:.419812,anchorY:1,referenceHeight:224.5},{left:376,top:95,width:225,height:234,anchor:.543098,anchorY:1,referenceHeight:224.5},{left:659,top:93,width:231,height:237,anchor:.414481,anchorY:1,referenceHeight:224.5},{left:977,top:107,width:188,height:215,anchor:.461037,anchorY:1,referenceHeight:224.5},{left:72,top:403,width:203,height:229,anchor:.480077,anchorY:1,referenceHeight:224.5},{left:386,top:388,width:215,height:243,anchor:.39059,anchorY:1,referenceHeight:224.5},{left:663,top:390,width:237,height:242,anchor:.512702,anchorY:1,referenceHeight:224.5},{left:996,top:403,width:186,height:230,anchor:.380795,anchorY:1,referenceHeight:224.5},{left:70,top:703,width:207,height:221,anchor:.499651,anchorY:1,referenceHeight:224.5},{left:385,top:696,width:222,height:237,anchor:.343392,anchorY:1,referenceHeight:224.5},{left:661,top:694,width:237,height:239,anchor:.555508,anchorY:1,referenceHeight:224.5},{left:1005,top:704,width:174,height:223,anchor:.359241,anchorY:1,referenceHeight:224.5},{left:59,top:1006,width:289,height:188,anchor:.357671,anchorY:1,referenceHeight:224.5},{left:380,top:992,width:229,height:213,anchor:.203949,anchorY:1,referenceHeight:224.5},{left:650,top:992,width:237,height:214,anchor:.80403,anchorY:1,referenceHeight:224.5},{left:925,top:1012,width:246,height:190,anchor:.507869,anchorY:1,referenceHeight:224.5}]},onmyoji:{path:"assets/3d/fixed/units/onmyoji-directions-v1.webp",width:1232,height:1277,frames:[{left:78,top:44,width:193,height:255,anchor:.477432,anchorY:1,referenceHeight:258.5},{left:391,top:43,width:182,height:259,anchor:.502243,anchorY:1,referenceHeight:258.5},{left:672,top:43,width:197,height:259,anchor:.467931,anchorY:1,referenceHeight:258.5},{left:972,top:44,width:195,height:258,anchor:.469257,anchorY:1,referenceHeight:258.5},{left:68,top:362,width:213,height:257,anchor:.489037,anchorY:1,referenceHeight:258.5},{left:381,top:354,width:211,height:273,anchor:.434797,anchorY:1,referenceHeight:258.5},{left:676,top:358,width:196,height:267,anchor:.48054,anchorY:1,referenceHeight:258.5},{left:959,top:362,width:213,height:265,anchor:.459477,anchorY:1,referenceHeight:258.5},{left:72,top:672,width:205,height:261,anchor:.465016,anchorY:1,referenceHeight:258.5},{left:383,top:669,width:208,height:262,anchor:.46126,anchorY:1,referenceHeight:258.5},{left:666,top:669,width:211,height:263,anchor:.476598,anchorY:1,referenceHeight:258.5},{left:960,top:678,width:204,height:259,anchor:.429816,anchorY:1,referenceHeight:258.5},{left:60,top:971,width:252,height:241,anchor:.422607,anchorY:1,referenceHeight:258.5},{left:368,top:972,width:215,height:253,anchor:.489079,anchorY:1,referenceHeight:258.5},{left:655,top:970,width:227,height:254,anchor:.549405,anchorY:1,referenceHeight:258.5},{left:941,top:974,width:241,height:244,anchor:.517168,anchorY:1,referenceHeight:258.5}]},cavalry:{path:"assets/3d/fixed/units/cavalry-directions-v1.webp",width:1254,height:1254,frames:[{left:49,top:55,width:262,height:257,anchor:.431453,anchorY:1,referenceHeight:258},{left:351,top:49,width:256,height:263,anchor:.325303,anchorY:1,referenceHeight:258},{left:651,top:49,width:249,height:259,anchor:.660878,anchorY:1,referenceHeight:258},{left:946,top:56,width:255,height:256,anchor:.576719,anchorY:1,referenceHeight:258},{left:52,top:348,width:271,height:250,anchor:.461449,anchorY:1,referenceHeight:258},{left:356,top:343,width:247,height:256,anchor:.348722,anchorY:1,referenceHeight:258},{left:659,top:348,width:238,height:253,anchor:.633991,anchorY:1,referenceHeight:258},{left:929,top:353,width:274,height:248,anchor:.567021,anchorY:1,referenceHeight:258},{left:48,top:647,width:282,height:257,anchor:.425029,anchorY:1,referenceHeight:258},{left:364,top:645,width:242,height:259,anchor:.371875,anchorY:1,referenceHeight:258},{left:652,top:644,width:244,height:260,anchor:.632935,anchorY:1,referenceHeight:258},{left:927,top:648,width:280,height:255,anchor:.573412,anchorY:1,referenceHeight:258},{left:47,top:948,width:288,height:237,anchor:.465551,anchorY:1,referenceHeight:258},{left:350,top:945,width:264,height:242,anchor:.312556,anchorY:1,referenceHeight:258},{left:641,top:948,width:264,height:242,anchor:.689818,anchorY:1,referenceHeight:258},{left:922,top:948,width:286,height:248,anchor:.518374,anchorY:1,referenceHeight:258}]},drum:{path:"assets/3d/fixed/units/drum-directions-v1.webp",width:1254,height:1254,frames:[{left:94,top:58,width:178,height:238,anchor:.380697,anchorY:1,referenceHeight:237.5},{left:400,top:68,width:164,height:237,anchor:.562471,anchorY:1,referenceHeight:237.5},{left:686,top:67,width:159,height:237,anchor:.451333,anchorY:1,referenceHeight:237.5},{left:982,top:58,width:176,height:238,anchor:.620658,anchorY:1,referenceHeight:237.5},{left:98,top:358,width:173,height:242,anchor:.556343,anchorY:1,referenceHeight:237.5},{left:408,top:360,width:159,height:248,anchor:.309234,anchorY:1,referenceHeight:237.5},{left:684,top:362,width:164,height:248,anchor:.682264,anchorY:1,referenceHeight:237.5},{left:983,top:356,width:176,height:244,anchor:.466239,anchorY:1,referenceHeight:237.5},{left:92,top:647,width:178,height:252,anchor:.54928,anchorY:1,referenceHeight:237.5},{left:408,top:658,width:164,height:251,anchor:.314978,anchorY:1,referenceHeight:237.5},{left:682,top:664,width:166,height:245,anchor:.644367,anchorY:1,referenceHeight:237.5},{left:985,top:648,width:176,height:252,anchor:.453169,anchorY:1,referenceHeight:237.5},{left:87,top:928,width:185,height:255,anchor:.473323,anchorY:1,referenceHeight:237.5},{left:402,top:943,width:157,height:256,anchor:.57019,anchorY:1,referenceHeight:237.5},{left:699,top:945,width:166,height:253,anchor:.489703,anchorY:1,referenceHeight:237.5},{left:983,top:928,width:185,height:262,anchor:.42249,anchorY:1,referenceHeight:237.5}]},armored:{path:"assets/3d/fixed/units/armored-directions-v1.webp",width:1232,height:1277,frames:[{left:75,top:80,width:213,height:227,anchor:.427526,anchorY:1,referenceHeight:227},{left:373,top:85,width:231,height:227,anchor:.462308,anchorY:1,referenceHeight:227},{left:650,top:85,width:230,height:226,anchor:.546258,anchorY:1,referenceHeight:227},{left:965,top:79,width:225,height:230,anchor:.435745,anchorY:1,referenceHeight:227},{left:73,top:384,width:203,height:233,anchor:.495647,anchorY:1,referenceHeight:227},{left:386,top:385,width:212,height:238,anchor:.384729,anchorY:1,referenceHeight:227},{left:659,top:385,width:216,height:241,anchor:.546784,anchorY:1,referenceHeight:227},{left:985,top:385,width:200,height:233,anchor:.45323,anchorY:1,referenceHeight:227},{left:95,top:686,width:205,height:228,anchor:.571161,anchorY:1,referenceHeight:227},{left:385,top:684,width:205,height:237,anchor:.410528,anchorY:1,referenceHeight:227},{left:671,top:684,width:196,height:237,anchor:.490683,anchorY:1,referenceHeight:227},{left:997,top:687,width:192,height:235,anchor:.361298,anchorY:1,referenceHeight:227},{left:54,top:1011,width:268,height:199,anchor:.465412,anchorY:1,referenceHeight:227},{left:371,top:1003,width:253,height:211,anchor:.449067,anchorY:1,referenceHeight:227},{left:655,top:1004,width:237,height:214,anchor:.517426,anchorY:1,referenceHeight:227},{left:947,top:1009,width:237,height:208,anchor:.413692,anchorY:1,referenceHeight:227}]},ram:{path:"assets/3d/fixed/units/ram-directions-v1.webp",width:1232,height:1277,frames:[{left:52,top:88,width:259,height:200,anchor:.526883,anchorY:1,referenceHeight:199.5},{left:360,top:84,width:228,height:199,anchor:.441172,anchorY:1,referenceHeight:199.5},{left:646,top:84,width:226,height:199,anchor:.551232,anchorY:1,referenceHeight:199.5},{left:923,top:87,width:258,height:201,anchor:.467263,anchorY:1,referenceHeight:199.5},{left:58,top:378,width:256,height:201,anchor:.539796,anchorY:1,referenceHeight:199.5},{left:356,top:369,width:231,height:202,anchor:.445109,anchorY:1,referenceHeight:199.5},{left:647,top:370,width:230,height:202,anchor:.543588,anchorY:1,referenceHeight:199.5},{left:918,top:377,width:257,height:202,anchor:.457042,anchorY:1,referenceHeight:199.5},{left:58,top:659,width:271,height:207,anchor:.549575,anchorY:1,referenceHeight:199.5},{left:357,top:646,width:226,height:206,anchor:.435656,anchorY:1,referenceHeight:199.5},{left:649,top:647,width:227,height:205,anchor:.559404,anchorY:1,referenceHeight:199.5},{left:904,top:658,width:271,height:208,anchor:.446533,anchorY:1,referenceHeight:199.5},{left:50,top:955,width:274,height:200,anchor:.489687,anchorY:1,referenceHeight:199.5},{left:350,top:947,width:245,height:203,anchor:.384892,anchorY:1,referenceHeight:199.5},{left:637,top:947,width:246,height:203,anchor:.611607,anchorY:1,referenceHeight:199.5},{left:907,top:951,width:276,height:203,anchor:.511043,anchorY:1,referenceHeight:199.5}]},konishi:{path:"assets/3d/fixed/units/konishi-directions-v1.webp",width:1232,height:1277,frames:[{left:81,top:31,width:214,height:297,anchor:.392778,anchorY:1,referenceHeight:296.5},{left:384,top:31,width:205,height:297,anchor:.50664,anchorY:1,referenceHeight:296.5},{left:640,top:33,width:196,height:296,anchor:.509581,anchorY:1,referenceHeight:296.5},{left:950,top:35,width:226,height:292,anchor:.541736,anchorY:1,referenceHeight:296.5},{left:79,top:350,width:216,height:295,anchor:.461929,anchorY:1,referenceHeight:296.5},{left:385,top:347,width:205,height:298,anchor:.465496,anchorY:1,referenceHeight:296.5},{left:650,top:349,width:201,height:296,anchor:.511732,anchorY:1,referenceHeight:296.5},{left:960,top:350,width:210,height:294,anchor:.49077,anchorY:1,referenceHeight:296.5},{left:69,top:667,width:216,height:286,anchor:.500247,anchorY:1,referenceHeight:296.5},{left:386,top:663,width:202,height:290,anchor:.437207,anchorY:1,referenceHeight:296.5},{left:648,top:665,width:197,height:290,anchor:.554778,anchorY:1,referenceHeight:296.5},{left:964,top:666,width:213,height:289,anchor:.482147,anchorY:1,referenceHeight:296.5},{left:44,top:970,width:315,height:269,anchor:.416834,anchorY:1,referenceHeight:296.5},{left:358,top:970,width:255,height:259,anchor:.401536,anchorY:1,referenceHeight:296.5},{left:628,top:969,width:240,height:264,anchor:.549084,anchorY:1,referenceHeight:296.5},{left:886,top:972,width:312,height:267,anchor:.52625,anchorY:1,referenceHeight:296.5}]},kato:{path:"assets/3d/fixed/units/kato-directions-v1.webp",width:1232,height:1277,frames:[{left:93,top:18,width:147,height:303,anchor:.500772,anchorY:1,referenceHeight:301},{left:409,top:22,width:148,height:297,anchor:.514287,anchorY:1,referenceHeight:301},{left:682,top:20,width:148,height:299,anchor:.508477,anchorY:1,referenceHeight:301},{left:1002,top:18,width:149,height:307,anchor:.484676,anchorY:1,referenceHeight:301},{left:95,top:339,width:159,height:294,anchor:.463186,anchorY:1,referenceHeight:301},{left:403,top:348,width:153,height:288,anchor:.474912,anchorY:1,referenceHeight:301},{left:680,top:350,width:156,height:290,anchor:.519869,anchorY:1,referenceHeight:301},{left:1007,top:341,width:150,height:299,anchor:.512711,anchorY:1,referenceHeight:301},{left:93,top:652,width:155,height:293,anchor:.471403,anchorY:1,referenceHeight:301},{left:401,top:662,width:154,height:282,anchor:.429321,anchorY:1,referenceHeight:301},{left:674,top:663,width:158,height:284,anchor:.552803,anchorY:1,referenceHeight:301},{left:992,top:659,width:169,height:293,anchor:.495296,anchorY:1,referenceHeight:301},{left:43,top:959,width:274,height:262,anchor:.421909,anchorY:1,referenceHeight:301},{left:363,top:971,width:241,height:255,anchor:.309179,anchorY:1,referenceHeight:301},{left:630,top:970,width:240,height:257,anchor:.677421,anchorY:1,referenceHeight:301},{left:921,top:961,width:268,height:264,anchor:.597619,anchorY:1,referenceHeight:301}]},wakizaka:{path:"assets/3d/fixed/units/wakizaka-directions-v1.webp",width:1230,height:1278,frames:[{left:77,top:26,width:197,height:307,anchor:.43784,anchorY:1,referenceHeight:305.5},{left:377,top:25,width:196,height:298,anchor:.498361,anchorY:1,referenceHeight:305.5},{left:662,top:23,width:230,height:304,anchor:.461632,anchorY:1,referenceHeight:305.5},{left:937,top:26,width:238,height:308,anchor:.574901,anchorY:1,referenceHeight:305.5},{left:78,top:351,width:201,height:287,anchor:.475853,anchorY:1,referenceHeight:305.5},{left:389,top:347,width:189,height:291,anchor:.514229,anchorY:1,referenceHeight:305.5},{left:657,top:343,width:224,height:290,anchor:.419168,anchorY:1,referenceHeight:305.5},{left:912,top:343,width:272,height:299,anchor:.546734,anchorY:1,referenceHeight:305.5},{left:79,top:652,width:197,height:287,anchor:.538717,anchorY:1,referenceHeight:305.5},{left:382,top:648,width:196,height:290,anchor:.55998,anchorY:1,referenceHeight:305.5},{left:661,top:652,width:232,height:292,anchor:.381649,anchorY:1,referenceHeight:305.5},{left:929,top:656,width:253,height:287,anchor:.510389,anchorY:1,referenceHeight:305.5},{left:40,top:963,width:244,height:258,anchor:.518104,anchorY:1,referenceHeight:305.5},{left:350,top:963,width:244,height:249,anchor:.425528,anchorY:1,referenceHeight:305.5},{left:643,top:961,width:256,height:259,anchor:.526284,anchorY:1,referenceHeight:305.5},{left:915,top:971,width:276,height:252,anchor:.574441,anchorY:1,referenceHeight:305.5}]},ukita:{path:"assets/3d/fixed/units/ukita-directions-v1.webp",width:1232,height:1277,frames:[{left:45,top:24,width:226,height:297,anchor:.478951,anchorY:1,referenceHeight:294.5},{left:375,top:24,width:199,height:295,anchor:.530305,anchorY:1,referenceHeight:294.5},{left:669,top:26,width:184,height:293,anchor:.524243,anchorY:1,referenceHeight:294.5},{left:985,top:28,width:220,height:294,anchor:.538708,anchorY:1,referenceHeight:294.5},{left:46,top:342,width:223,height:293,anchor:.498573,anchorY:1,referenceHeight:294.5},{left:375,top:339,width:208,height:299,anchor:.47426,anchorY:1,referenceHeight:294.5},{left:670,top:342,width:184,height:297,anchor:.577831,anchorY:1,referenceHeight:294.5},{left:987,top:345,width:214,height:293,anchor:.500391,anchorY:1,referenceHeight:294.5},{left:53,top:661,width:215,height:285,anchor:.489688,anchorY:1,referenceHeight:294.5},{left:377,top:657,width:203,height:292,anchor:.449267,anchorY:1,referenceHeight:294.5},{left:672,top:660,width:189,height:291,anchor:.569735,anchorY:1,referenceHeight:294.5},{left:991,top:666,width:214,height:284,anchor:.503522,anchorY:1,referenceHeight:294.5},{left:45,top:970,width:260,height:268,anchor:.514888,anchorY:1,referenceHeight:294.5},{left:348,top:967,width:266,height:270,anchor:.406818,anchorY:1,referenceHeight:294.5},{left:643,top:967,width:262,height:268,anchor:.568888,anchorY:1,referenceHeight:294.5},{left:947,top:970,width:257,height:268,anchor:.490088,anchorY:1,referenceHeight:294.5}]},ishida:{path:"assets/3d/fixed/units/ishida-directions-v1.webp",width:1232,height:1277,frames:[{left:79,top:34,width:192,height:288,anchor:.49734,anchorY:1,referenceHeight:286.5},{left:379,top:29,width:206,height:285,anchor:.487701,anchorY:1,referenceHeight:286.5},{left:656,top:32,width:203,height:282,anchor:.516246,anchorY:1,referenceHeight:286.5},{left:950,top:31,width:201,height:291,anchor:.533119,anchorY:1,referenceHeight:286.5},{left:86,top:342,width:191,height:283,anchor:.558582,anchorY:1,referenceHeight:286.5},{left:379,top:339,width:204,height:291,anchor:.399002,anchorY:1,referenceHeight:286.5},{left:661,top:343,width:196,height:289,anchor:.568257,anchorY:1,referenceHeight:286.5},{left:941,top:343,width:206,height:283,anchor:.489691,anchorY:1,referenceHeight:286.5},{left:78,top:651,width:194,height:275,anchor:.602506,anchorY:1,referenceHeight:286.5},{left:376,top:652,width:208,height:281,anchor:.42849,anchorY:1,referenceHeight:286.5},{left:663,top:651,width:193,height:284,anchor:.553288,anchorY:1,referenceHeight:286.5},{left:948,top:650,width:217,height:279,anchor:.447405,anchorY:1,referenceHeight:286.5},{left:67,top:940,width:251,height:285,anchor:.452569,anchorY:1,referenceHeight:286.5},{left:361,top:942,width:244,height:276,anchor:.415536,anchorY:1,referenceHeight:286.5},{left:636,top:942,width:240,height:275,anchor:.564564,anchorY:1,referenceHeight:286.5},{left:934,top:940,width:228,height:286,anchor:.513357,anchorY:1,referenceHeight:286.5}]},so:{path:"assets/3d/fixed/units/so-directions-v1.webp",width:1232,height:1277,frames:[{left:66,top:41,width:188,height:278,anchor:.543333,anchorY:1,referenceHeight:277},{left:375,top:41,width:177,height:271,anchor:.628505,anchorY:1,referenceHeight:277},{left:690,top:41,width:161,height:276,anchor:.423527,anchorY:1,referenceHeight:277},{left:979,top:40,width:187,height:279,anchor:.450426,anchorY:1,referenceHeight:277},{left:64,top:347,width:193,height:278,anchor:.587446,anchorY:1,referenceHeight:277},{left:400,top:346,width:160,height:278,anchor:.498731,anchorY:1,referenceHeight:277},{left:676,top:346,width:162,height:279,anchor:.585777,anchorY:1,referenceHeight:277},{left:976,top:347,width:192,height:278,anchor:.408526,anchorY:1,referenceHeight:277},{left:62,top:654,width:181,height:278,anchor:.637757,anchorY:1,referenceHeight:277},{left:388,top:652,width:161,height:276,anchor:.502471,anchorY:1,referenceHeight:277},{left:689,top:655,width:169,height:274,anchor:.505493,anchorY:1,referenceHeight:277},{left:990,top:653,width:181,height:278,anchor:.363807,anchorY:1,referenceHeight:277},{left:59,top:955,width:276,height:268,anchor:.255294,anchorY:1,referenceHeight:277},{left:356,top:956,width:262,height:258,anchor:.253165,anchorY:1,referenceHeight:277},{left:639,top:957,width:231,height:270,anchor:.669008,anchorY:1,referenceHeight:277},{left:914,top:954,width:256,height:271,anchor:.535504,anchorY:1,referenceHeight:277}]},kuroda:{path:"assets/3d/fixed/units/kuroda-directions-v1.webp",width:1232,height:1277,frames:[{left:76,top:34,width:184,height:309,anchor:.446595,anchorY:1,referenceHeight:307},{left:384,top:35,width:159,height:307,anchor:.552187,anchorY:1,referenceHeight:307},{left:682,top:35,width:162,height:307,anchor:.444634,anchorY:1,referenceHeight:307},{left:972,top:45,width:178,height:296,anchor:.541504,anchorY:1,referenceHeight:307},{left:81,top:349,width:186,height:305,anchor:.488633,anchorY:1,referenceHeight:307},{left:390,top:354,width:169,height:302,anchor:.499827,anchorY:1,referenceHeight:307},{left:694,top:361,width:162,height:294,anchor:.481921,anchorY:1,referenceHeight:307},{left:978,top:352,width:174,height:303,anchor:.457313,anchorY:1,referenceHeight:307},{left:82,top:662,width:186,height:296,anchor:.479387,anchorY:1,referenceHeight:307},{left:386,top:665,width:165,height:300,anchor:.510931,anchorY:1,referenceHeight:307},{left:688,top:672,width:165,height:296,anchor:.492629,anchorY:1,referenceHeight:307},{left:972,top:670,width:181,height:293,anchor:.489538,anchorY:1,referenceHeight:307},{left:37,top:974,width:294,height:248,anchor:.394881,anchorY:1,referenceHeight:307},{left:363,top:990,width:249,height:249,anchor:.343684,anchorY:1,referenceHeight:307},{left:642,top:989,width:238,height:252,anchor:.664178,anchorY:1,referenceHeight:307},{left:917,top:980,width:278,height:247,anchor:.626509,anchorY:1,referenceHeight:307}]},todo:{path:"assets/3d/fixed/units/todo-directions-v1.webp",width:1232,height:1277,frames:[{left:88,top:18,width:208,height:301,anchor:.440389,anchorY:1,referenceHeight:303.5},{left:389,top:16,width:219,height:303,anchor:.487931,anchorY:1,referenceHeight:303.5},{left:695,top:15,width:186,height:304,anchor:.489393,anchorY:1,referenceHeight:303.5},{left:943,top:19,width:219,height:304,anchor:.523337,anchorY:1,referenceHeight:303.5},{left:93,top:346,width:208,height:293,anchor:.445779,anchorY:1,referenceHeight:303.5},{left:393,top:338,width:211,height:303,anchor:.382795,anchorY:1,referenceHeight:303.5},{left:678,top:341,width:194,height:301,anchor:.572051,anchorY:1,referenceHeight:303.5},{left:969,top:348,width:203,height:295,anchor:.473155,anchorY:1,referenceHeight:303.5},{left:84,top:658,width:194,height:290,anchor:.475216,anchorY:1,referenceHeight:303.5},{left:384,top:650,width:228,height:302,anchor:.387505,anchorY:1,referenceHeight:303.5},{left:701,top:653,width:181,height:299,anchor:.558871,anchorY:1,referenceHeight:303.5},{left:1005,top:661,width:169,height:290,anchor:.407089,anchorY:1,referenceHeight:303.5},{left:79,top:965,width:266,height:273,anchor:.353684,anchorY:1,referenceHeight:303.5},{left:377,top:959,width:236,height:273,anchor:.352592,anchorY:1,referenceHeight:303.5},{left:646,top:963,width:240,height:271,anchor:.627792,anchorY:1,referenceHeight:303.5},{left:910,top:972,width:262,height:264,anchor:.620223,anchorY:1,referenceHeight:303.5}]},kuki:{path:"assets/3d/fixed/units/kuki-directions-v1.webp",width:1232,height:1277,frames:[{left:75,top:47,width:243,height:281,anchor:.476318,anchorY:1,referenceHeight:281},{left:363,top:47,width:226,height:281,anchor:.527798,anchorY:1,referenceHeight:281},{left:638,top:47,width:225,height:281,anchor:.472611,anchorY:1,referenceHeight:281},{left:932,top:59,width:237,height:273,anchor:.534909,anchorY:1,referenceHeight:281},{left:75,top:364,width:244,height:277,anchor:.465943,anchorY:1,referenceHeight:281},{left:379,top:359,width:213,height:280,anchor:.492188,anchorY:1,referenceHeight:281},{left:673,top:361,width:184,height:275,anchor:.484337,anchorY:1,referenceHeight:281},{left:919,top:362,width:247,height:280,anchor:.493462,anchorY:1,referenceHeight:281},{left:76,top:663,width:249,height:274,anchor:.491711,anchorY:1,referenceHeight:281},{left:376,top:661,width:225,height:272,anchor:.48905,anchorY:1,referenceHeight:281},{left:675,top:665,width:178,height:272,anchor:.565826,anchorY:1,referenceHeight:281},{left:928,top:673,width:253,height:274,anchor:.427042,anchorY:1,referenceHeight:281},{left:54,top:970,width:218,height:266,anchor:.730144,anchorY:1,referenceHeight:281},{left:369,top:970,width:241,height:238,anchor:.412679,anchorY:1,referenceHeight:281},{left:624,top:973,width:246,height:248,anchor:.629705,anchorY:1,referenceHeight:281},{left:956,top:978,width:227,height:256,anchor:.368411,anchorY:1,referenceHeight:281}]},kurushima:{path:"assets/3d/fixed/units/kurushima-directions-v2.webp",width:1232,height:1277,frames:[{left:108,top:58,width:167,height:246,anchor:.446185,anchorY:1,referenceHeight:243},{left:385,top:58,width:163,height:240,anchor:.524779,anchorY:1,referenceHeight:243},{left:682,top:59,width:164,height:240,anchor:.463207,anchorY:1,referenceHeight:243},{left:956,top:58,width:169,height:247,anchor:.55006,anchorY:1,referenceHeight:243},{left:99,top:368,width:173,height:242,anchor:.524773,anchorY:1,referenceHeight:243},{left:391,top:366,width:171,height:246,anchor:.497844,anchorY:1,referenceHeight:243},{left:672,top:367,width:169,height:245,anchor:.493365,anchorY:1,referenceHeight:243},{left:959,top:368,width:176,height:242,anchor:.472715,anchorY:1,referenceHeight:243},{left:99,top:669,width:172,height:240,anchor:.557221,anchorY:1,referenceHeight:243},{left:387,top:673,width:173,height:248,anchor:.478124,anchorY:1,referenceHeight:243},{left:677,top:674,width:168,height:248,anchor:.509378,anchorY:1,referenceHeight:243},{left:961,top:670,width:177,height:240,anchor:.42612,anchorY:1,referenceHeight:243},{left:60,top:970,width:276,height:236,anchor:.401553,anchorY:1,referenceHeight:243},{left:385,top:974,width:205,height:228,anchor:.405706,anchorY:1,referenceHeight:243},{left:642,top:973,width:204,height:229,anchor:.585706,anchorY:1,referenceHeight:243},{left:895,top:970,width:276,height:235,anchor:.599495,anchorY:1,referenceHeight:243}]},shimazu:{path:"assets/3d/fixed/units/shimazu-directions-v2.webp",width:1232,height:1277,frames:[{left:97,top:78,width:188,height:237,anchor:.451465,anchorY:1,referenceHeight:234.5},{left:382,top:77,width:199,height:232,anchor:.474376,anchorY:1,referenceHeight:234.5},{left:652,top:77,width:196,height:232,anchor:.521202,anchorY:1,referenceHeight:234.5},{left:949,top:77,width:186,height:237,anchor:.544705,anchorY:1,referenceHeight:234.5},{left:88,top:372,width:205,height:242,anchor:.500654,anchorY:1,referenceHeight:234.5},{left:387,top:370,width:166,height:238,anchor:.477353,anchorY:1,referenceHeight:234.5},{left:652,top:368,width:197,height:245,anchor:.54684,anchorY:1,referenceHeight:234.5},{left:980,top:373,width:164,height:242,anchor:.470024,anchorY:1,referenceHeight:234.5},{left:100,top:662,width:201,height:234,anchor:.474291,anchorY:1,referenceHeight:234.5},{left:381,top:653,width:160,height:245,anchor:.494634,anchorY:1,referenceHeight:234.5},{left:689,top:654,width:160,height:245,anchor:.507165,anchorY:1,referenceHeight:234.5},{left:933,top:662,width:201,height:234,anchor:.521203,anchorY:1,referenceHeight:234.5},{left:93,top:937,width:172,height:246,anchor:.476946,anchorY:1,referenceHeight:234.5},{left:400,top:940,width:155,height:237,anchor:.457964,anchorY:1,referenceHeight:234.5},{left:674,top:938,width:159,height:236,anchor:.519236,anchorY:1,referenceHeight:234.5},{left:972,top:938,width:170,height:245,anchor:.516657,anchorY:1,referenceHeight:234.5}]},hideyoshi:{path:"assets/3d/fixed/units/hideyoshi-directions-v1.webp",width:1232,height:1277,frames:[{left:54,top:18,width:234,height:298,anchor:.447344,anchorY:1,referenceHeight:292.5},{left:362,top:22,width:217,height:289,anchor:.461509,anchorY:1,referenceHeight:292.5},{left:653,top:22,width:212,height:289,anchor:.50033,anchorY:1,referenceHeight:292.5},{left:951,top:18,width:233,height:296,anchor:.563795,anchorY:1,referenceHeight:292.5},{left:45,top:330,width:253,height:297,anchor:.500068,anchorY:1,referenceHeight:292.5},{left:361,top:332,width:235,height:298,anchor:.455746,anchorY:1,referenceHeight:292.5},{left:641,top:332,width:226,height:299,anchor:.50647,anchorY:1,referenceHeight:292.5},{left:939,top:330,width:257,height:299,anchor:.479688,anchorY:1,referenceHeight:292.5},{left:52,top:646,width:248,height:291,anchor:.522355,anchorY:1,referenceHeight:292.5},{left:361,top:647,width:232,height:294,anchor:.467327,anchorY:1,referenceHeight:292.5},{left:647,top:647,width:229,height:294,anchor:.503396,anchorY:1,referenceHeight:292.5},{left:942,top:646,width:252,height:291,anchor:.477873,anchorY:1,referenceHeight:292.5},{left:32,top:946,width:280,height:281,anchor:.489459,anchorY:1,referenceHeight:292.5},{left:336,top:950,width:265,height:271,anchor:.494209,anchorY:1,referenceHeight:292.5},{left:631,top:949,width:275,height:277,anchor:.419283,anchorY:1,referenceHeight:292.5},{left:925,top:946,width:286,height:279,anchor:.492675,anchorY:1,referenceHeight:292.5}]}},ally:{militia:{path:"assets/3d/fixed/units/militia-directions-v1.webp",width:1254,height:1254,frames:[{left:56,top:94,width:254,height:206,anchor:.353708,anchorY:1,referenceHeight:214.5},{left:397,top:89,width:192,height:219,anchor:.376786,anchorY:1,referenceHeight:214.5},{left:661,top:84,width:200,height:223,anchor:.613673,anchorY:1,referenceHeight:214.5},{left:942,top:92,width:253,height:210,anchor:.640953,anchorY:1,referenceHeight:214.5},{left:69,top:397,width:240,height:216,anchor:.397728,anchorY:1,referenceHeight:214.5},{left:412,top:382,width:188,height:232,anchor:.22394,anchorY:1,referenceHeight:214.5},{left:659,top:380,width:182,height:234,anchor:.734545,anchorY:1,referenceHeight:214.5},{left:941,top:392,width:238,height:221,anchor:.609778,anchorY:1,referenceHeight:214.5},{left:82,top:696,width:237,height:211,anchor:.365779,anchorY:1,referenceHeight:214.5},{left:411,top:683,width:196,height:227,anchor:.216273,anchorY:1,referenceHeight:214.5},{left:650,top:684,width:201,height:226,anchor:.728808,anchorY:1,referenceHeight:214.5},{left:934,top:694,width:243,height:212,anchor:.628275,anchorY:1,referenceHeight:214.5},{left:53,top:1004,width:281,height:171,anchor:.323158,anchorY:1,referenceHeight:214.5},{left:381,top:983,width:220,height:210,anchor:.252511,anchorY:1,referenceHeight:214.5},{left:654,top:984,width:216,height:211,anchor:.742499,anchorY:1,referenceHeight:214.5},{left:926,top:1009,width:275,height:173,anchor:.665593,anchorY:1,referenceHeight:214.5}]},guard:{path:"assets/3d/fixed/units/guard-directions-v1.webp",width:1232,height:1277,frames:[{left:103,top:24,width:151,height:303,anchor:.4011,anchorY:1,referenceHeight:295},{left:404,top:32,width:150,height:292,anchor:.492409,anchorY:1,referenceHeight:295},{left:678,top:30,width:152,height:294,anchor:.473181,anchorY:1,referenceHeight:295},{left:1006,top:35,width:127,height:296,anchor:.487313,anchorY:1,referenceHeight:295},{left:96,top:349,width:142,height:272,anchor:.495015,anchorY:1,referenceHeight:295},{left:417,top:356,width:135,height:277,anchor:.46212,anchorY:1,referenceHeight:295},{left:673,top:354,width:145,height:282,anchor:.54715,anchorY:1,referenceHeight:295},{left:1009,top:361,width:128,height:278,anchor:.411361,anchorY:1,referenceHeight:295},{left:92,top:660,width:146,height:272,anchor:.511829,anchorY:1,referenceHeight:295},{left:407,top:655,width:142,height:285,anchor:.419264,anchorY:1,referenceHeight:295},{left:679,top:653,width:151,height:287,anchor:.585605,anchorY:1,referenceHeight:295},{left:1012,top:674,width:127,height:267,anchor:.419655,anchorY:1,referenceHeight:295},{left:51,top:999,width:278,height:212,anchor:.297936,anchorY:1,referenceHeight:295},{left:385,top:1002,width:221,height:216,anchor:.292655,anchorY:1,referenceHeight:295},{left:628,top:1001,width:227,height:218,anchor:.683168,anchorY:1,referenceHeight:295},{left:914,top:1e3,width:265,height:211,anchor:.69172,anchorY:1,referenceHeight:295}]},elite:{path:"assets/3d/fixed/units/elite-directions-v1.webp",width:1230,height:1278,frames:[{left:62,top:43,width:204,height:253,anchor:.46958,anchorY:1,referenceHeight:256.5},{left:384,top:35,width:177,height:260,anchor:.441406,anchorY:1,referenceHeight:256.5},{left:682,top:36,width:174,height:262,anchor:.519205,anchorY:1,referenceHeight:256.5},{left:974,top:51,width:197,height:247,anchor:.509655,anchorY:1,referenceHeight:256.5},{left:63,top:358,width:213,height:258,anchor:.490276,anchorY:1,referenceHeight:256.5},{left:382,top:347,width:178,height:271,anchor:.436327,anchorY:1,referenceHeight:256.5},{left:680,top:351,width:178,height:268,anchor:.551384,anchorY:1,referenceHeight:256.5},{left:965,top:366,width:199,height:251,anchor:.509838,anchorY:1,referenceHeight:256.5},{left:80,top:666,width:193,height:259,anchor:.512304,anchorY:1,referenceHeight:256.5},{left:384,top:667,width:176,height:263,anchor:.41313,anchorY:1,referenceHeight:256.5},{left:677,top:668,width:176,height:265,anchor:.551006,anchorY:1,referenceHeight:256.5},{left:969,top:670,width:189,height:259,anchor:.462179,anchorY:1,referenceHeight:256.5},{left:59,top:991,width:285,height:205,anchor:.338526,anchorY:1,referenceHeight:256.5},{left:380,top:984,width:225,height:225,anchor:.318442,anchorY:1,referenceHeight:256.5},{left:633,top:987,width:233,height:227,anchor:.631124,anchorY:1,referenceHeight:256.5},{left:903,top:989,width:274,height:211,anchor:.63015,anchorY:1,referenceHeight:256.5}]},monk:{path:"assets/3d/fixed/units/monk-directions-v1.webp",width:1230,height:1278,frames:[{left:78,top:62,width:177,height:239,anchor:.486358,anchorY:1,referenceHeight:246},{left:392,top:48,width:171,height:257,anchor:.442644,anchorY:1,referenceHeight:246},{left:668,top:55,width:170,height:250,anchor:.541839,anchorY:1,referenceHeight:246},{left:975,top:61,width:190,height:242,anchor:.422995,anchorY:1,referenceHeight:246},{left:93,top:364,width:169,height:255,anchor:.491248,anchorY:1,referenceHeight:246},{left:393,top:363,width:192,height:259,anchor:.3882,anchorY:1,referenceHeight:246},{left:646,top:362,width:197,height:258,anchor:.605026,anchorY:1,referenceHeight:246},{left:975,top:362,width:186,height:259,anchor:.409871,anchorY:1,referenceHeight:246},{left:77,top:666,width:172,height:258,anchor:.597027,anchorY:1,referenceHeight:246},{left:389,top:665,width:188,height:266,anchor:.328233,anchorY:1,referenceHeight:246},{left:668,top:669,width:180,height:258,anchor:.642929,anchorY:1,referenceHeight:246},{left:981,top:668,width:181,height:257,anchor:.450071,anchorY:1,referenceHeight:246},{left:64,top:1001,width:257,height:196,anchor:.380501,anchorY:1,referenceHeight:246},{left:367,top:980,width:229,height:224,anchor:.421514,anchorY:1,referenceHeight:246},{left:642,top:977,width:212,height:226,anchor:.59724,anchorY:1,referenceHeight:246},{left:909,top:1004,width:259,height:199,anchor:.602665,anchorY:1,referenceHeight:246}]},courier:{path:"assets/3d/fixed/units/courier-directions-v1.webp",width:1254,height:1254,frames:[{left:83,top:48,width:209,height:268,anchor:.474896,anchorY:1,referenceHeight:268.5},{left:381,top:48,width:199,height:267,anchor:.43692,anchorY:1,referenceHeight:268.5},{left:691,top:48,width:191,height:270,anchor:.58182,anchorY:1,referenceHeight:268.5},{left:994,top:47,width:197,height:269,anchor:.515951,anchorY:1,referenceHeight:268.5},{left:71,top:346,width:222,height:257,anchor:.537626,anchorY:1,referenceHeight:268.5},{left:386,top:341,width:195,height:263,anchor:.474838,anchorY:1,referenceHeight:268.5},{left:691,top:343,width:191,height:261,anchor:.527009,anchorY:1,referenceHeight:268.5},{left:988,top:346,width:210,height:257,anchor:.451742,anchorY:1,referenceHeight:268.5},{left:72,top:642,width:224,height:266,anchor:.595651,anchorY:1,referenceHeight:268.5},{left:385,top:640,width:205,height:270,anchor:.385071,anchorY:1,referenceHeight:268.5},{left:684,top:643,width:198,height:268,anchor:.59966,anchorY:1,referenceHeight:268.5},{left:982,top:643,width:222,height:265,anchor:.446826,anchorY:1,referenceHeight:268.5},{left:59,top:947,width:246,height:243,anchor:.574607,anchorY:1,referenceHeight:268.5},{left:372,top:943,width:215,height:251,anchor:.367161,anchorY:1,referenceHeight:268.5},{left:677,top:946,width:223,height:251,anchor:.657932,anchorY:1,referenceHeight:268.5},{left:974,top:954,width:241,height:238,anchor:.389964,anchorY:1,referenceHeight:268.5}]},turtle:{path:"assets/3d/fixed/units/turtle-directions-v1.webp",width:1308,height:1202,frames:[{left:49,top:84,width:246,height:185,anchor:.51472,anchorY:1,referenceHeight:188},{left:381,top:79,width:229,height:191,anchor:.469716,anchorY:1,referenceHeight:188},{left:696,top:79,width:233,height:191,anchor:.530725,anchorY:1,referenceHeight:188},{left:1016,top:85,width:245,height:184,anchor:.475043,anchorY:1,referenceHeight:188},{left:45,top:360,width:260,height:194,anchor:.511607,anchorY:1,referenceHeight:188},{left:377,top:354,width:241,height:185,anchor:.449712,anchorY:1,referenceHeight:188},{left:691,top:354,width:240,height:185,anchor:.547959,anchorY:1,referenceHeight:188},{left:1004,top:360,width:260,height:194,anchor:.484142,anchorY:1,referenceHeight:188},{left:53,top:642,width:252,height:193,anchor:.484675,anchorY:1,referenceHeight:188},{left:361,top:639,width:256,height:190,anchor:.474169,anchorY:1,referenceHeight:188},{left:692,top:639,width:256,height:190,anchor:.521622,anchorY:1,referenceHeight:188},{left:1004,top:641,width:252,height:194,anchor:.513618,anchorY:1,referenceHeight:188},{left:53,top:904,width:264,height:202,anchor:.446221,anchorY:1,referenceHeight:188},{left:367,top:907,width:250,height:201,anchor:.473557,anchorY:1,referenceHeight:188},{left:693,top:906,width:249,height:202,anchor:.520426,anchorY:1,referenceHeight:188},{left:993,top:904,width:263,height:202,anchor:.548828,anchorY:1,referenceHeight:188}]}}};var Ko={ashigaru:{kind:"ashigaru",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ashigaru-inbetweens-v1.webp",width:1160,height:1074,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:232,height:228,anchor:.339805,anchorY:1,referenceHeight:222.5},{left:339,top:24,width:210,height:220,anchor:.323443,anchorY:1,referenceHeight:222.5},{left:607,top:24,width:211,height:222,anchor:.656074,anchorY:1,referenceHeight:222.5},{left:868,top:24,width:220,height:223,anchor:.639307,anchorY:1,referenceHeight:222.5},{left:24,top:300,width:213,height:224,anchor:.412242,anchorY:1,referenceHeight:222.5},{left:339,top:300,width:197,height:219,anchor:.420587,anchorY:1,referenceHeight:222.5},{left:607,top:300,width:192,height:221,anchor:.570704,anchorY:1,referenceHeight:222.5},{left:868,top:300,width:209,height:224,anchor:.575709,anchorY:1,referenceHeight:222.5},{left:24,top:572,width:267,height:213,anchor:.309281,anchorY:1,referenceHeight:222.5},{left:339,top:572,width:220,height:220,anchor:.305392,anchorY:1,referenceHeight:222.5},{left:607,top:572,width:213,height:220,anchor:.669095,anchorY:1,referenceHeight:222.5},{left:868,top:572,width:268,height:216,anchor:.704457,anchorY:1,referenceHeight:222.5},{left:24,top:840,width:206,height:209,anchor:.384082,anchorY:1,referenceHeight:222.5},{left:339,top:840,width:192,height:208,anchor:.409617,anchorY:1,referenceHeight:222.5},{left:607,top:840,width:189,height:210,anchor:.580776,anchorY:1,referenceHeight:222.5},{left:868,top:840,width:205,height:209,anchor:.596386,anchorY:1,referenceHeight:222.5}]},teppo:{kind:"teppo",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/teppo-inbetweens-v1.webp",width:945,height:1105,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:197,height:233,anchor:.355098,anchorY:1,referenceHeight:231},{left:269,top:24,width:179,height:231,anchor:.363434,anchorY:1,referenceHeight:231},{left:499,top:24,width:188,height:231,anchor:.611569,anchorY:1,referenceHeight:231},{left:735,top:24,width:186,height:228,anchor:.375372,anchorY:1,referenceHeight:231},{left:24,top:305,width:195,height:231,anchor:.375981,anchorY:1,referenceHeight:231},{left:269,top:305,width:179,height:229,anchor:.403723,anchorY:1,referenceHeight:231},{left:499,top:305,width:178,height:231,anchor:.581763,anchorY:1,referenceHeight:231},{left:735,top:305,width:183,height:231,anchor:.384518,anchorY:1,referenceHeight:231},{left:24,top:584,width:197,height:225,anchor:.449644,anchorY:1,referenceHeight:231},{left:269,top:584,width:181,height:224,anchor:.505887,anchorY:1,referenceHeight:231},{left:499,top:584,width:174,height:226,anchor:.530421,anchorY:1,referenceHeight:231},{left:735,top:584,width:182,height:232,anchor:.527723,anchorY:1,referenceHeight:231},{left:24,top:864,width:192,height:217,anchor:.392547,anchorY:1,referenceHeight:231},{left:269,top:864,width:182,height:216,anchor:.423513,anchorY:1,referenceHeight:231},{left:499,top:864,width:182,height:217,anchor:.556723,anchorY:1,referenceHeight:231},{left:735,top:864,width:179,height:217,anchor:.460863,anchorY:1,referenceHeight:231}]},scout:{kind:"scout",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/scout-inbetweens-v1.webp",width:1089,height:1113,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:153,height:240,anchor:.460468,anchorY:1,referenceHeight:241.5},{left:309,top:24,width:193,height:246,anchor:.349347,anchorY:1,referenceHeight:241.5},{left:579,top:24,width:151,height:240,anchor:.554486,anchorY:1,referenceHeight:241.5},{left:828,top:24,width:138,height:243,anchor:.480386,anchorY:1,referenceHeight:241.5},{left:24,top:318,width:150,height:243,anchor:.431975,anchorY:1,referenceHeight:241.5},{left:309,top:318,width:186,height:240,anchor:.344191,anchorY:1,referenceHeight:241.5},{left:579,top:318,width:143,height:239,anchor:.574192,anchorY:1,referenceHeight:241.5},{left:828,top:318,width:167,height:242,anchor:.488729,anchorY:1,referenceHeight:241.5},{left:24,top:609,width:237,height:201,anchor:.455766,anchorY:1,referenceHeight:241.5},{left:309,top:609,width:222,height:208,anchor:.274201,anchorY:1,referenceHeight:241.5},{left:579,top:609,width:201,height:212,anchor:.701671,anchorY:1,referenceHeight:241.5},{left:828,top:609,width:237,height:205,anchor:.540578,anchorY:1,referenceHeight:241.5},{left:24,top:869,width:167,height:213,anchor:.496178,anchorY:1,referenceHeight:241.5},{left:309,top:869,width:201,height:220,anchor:.450477,anchorY:1,referenceHeight:241.5},{left:579,top:869,width:155,height:219,anchor:.456013,anchorY:1,referenceHeight:241.5},{left:828,top:869,width:154,height:215,anchor:.489767,anchorY:1,referenceHeight:241.5}]},samurai:{kind:"samurai",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/samurai-inbetweens-v1.webp",width:1087,height:1188,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:145,height:248,anchor:.59854,anchorY:1,referenceHeight:248.5},{left:309,top:24,width:142,height:249,anchor:.562279,anchorY:1,referenceHeight:248.5},{left:569,top:24,width:145,height:250,anchor:.414221,anchorY:1,referenceHeight:248.5},{left:830,top:24,width:142,height:245,anchor:.423604,anchorY:1,referenceHeight:248.5},{left:24,top:322,width:162,height:248,anchor:.553923,anchorY:1,referenceHeight:248.5},{left:309,top:322,width:159,height:249,anchor:.531134,anchorY:1,referenceHeight:248.5},{left:569,top:322,width:161,height:248,anchor:.451081,anchorY:1,referenceHeight:248.5},{left:830,top:322,width:157,height:246,anchor:.408805,anchorY:1,referenceHeight:248.5},{left:24,top:619,width:237,height:240,anchor:.428926,anchorY:1,referenceHeight:248.5},{left:309,top:619,width:212,height:245,anchor:.464235,anchorY:1,referenceHeight:248.5},{left:569,top:619,width:213,height:247,anchor:.526812,anchorY:1,referenceHeight:248.5},{left:830,top:619,width:233,height:239,anchor:.565252,anchorY:1,referenceHeight:248.5},{left:24,top:914,width:147,height:250,anchor:.544805,anchorY:1,referenceHeight:248.5},{left:309,top:914,width:139,height:248,anchor:.592941,anchorY:1,referenceHeight:248.5},{left:569,top:914,width:135,height:249,anchor:.419772,anchorY:1,referenceHeight:248.5},{left:830,top:914,width:142,height:247,anchor:.467155,anchorY:1,referenceHeight:248.5}]},ninja:{kind:"ninja",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ninja-inbetweens-v1.webp",width:1096,height:1083,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:148,height:212,anchor:.499708,anchorY:1,referenceHeight:224.5},{left:326,top:24,width:180,height:230,anchor:.432636,anchorY:1,referenceHeight:224.5},{left:575,top:24,width:168,height:233,anchor:.588898,anchorY:1,referenceHeight:224.5},{left:843,top:24,width:149,height:219,anchor:.414084,anchorY:1,referenceHeight:224.5},{left:24,top:305,width:179,height:223,anchor:.355198,anchorY:1,referenceHeight:224.5},{left:326,top:305,width:175,height:228,anchor:.370216,anchorY:1,referenceHeight:224.5},{left:575,top:305,width:185,height:226,anchor:.578479,anchorY:1,referenceHeight:224.5},{left:843,top:305,width:171,height:225,anchor:.532289,anchorY:1,referenceHeight:224.5},{left:24,top:581,width:254,height:193,anchor:.447117,anchorY:1,referenceHeight:224.5},{left:326,top:581,width:201,height:210,anchor:.26785,anchorY:1,referenceHeight:224.5},{left:575,top:581,width:220,height:213,anchor:.747169,anchorY:1,referenceHeight:224.5},{left:843,top:581,width:229,height:193,anchor:.565644,anchorY:1,referenceHeight:224.5},{left:24,top:842,width:155,height:196,anchor:.549068,anchorY:1,referenceHeight:224.5},{left:326,top:842,width:175,height:214,anchor:.380824,anchorY:1,referenceHeight:224.5},{left:575,top:842,width:184,height:217,anchor:.609561,anchorY:1,referenceHeight:224.5},{left:843,top:842,width:152,height:202,anchor:.388955,anchorY:1,referenceHeight:224.5}]},onmyoji:{kind:"onmyoji",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/onmyoji-inbetweens-v1.webp",width:1059,height:1220,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:194,height:257,anchor:.470333,anchorY:1,referenceHeight:258.5},{left:296,top:24,width:181,height:258,anchor:.486567,anchorY:1,referenceHeight:258.5},{left:561,top:24,width:189,height:260,anchor:.505547,anchorY:1,referenceHeight:258.5},{left:833,top:24,width:187,height:259,anchor:.449923,anchorY:1,referenceHeight:258.5},{left:24,top:332,width:198,height:263,anchor:.481239,anchorY:1,referenceHeight:258.5},{left:296,top:332,width:198,height:259,anchor:.459171,anchorY:1,referenceHeight:258.5},{left:561,top:332,width:195,height:261,anchor:.500504,anchorY:1,referenceHeight:258.5},{left:833,top:332,width:195,height:259,anchor:.497906,anchorY:1,referenceHeight:258.5},{left:24,top:643,width:224,height:254,anchor:.447301,anchorY:1,referenceHeight:258.5},{left:296,top:643,width:217,height:252,anchor:.438132,anchorY:1,referenceHeight:258.5},{left:561,top:643,width:224,height:257,anchor:.52172,anchorY:1,referenceHeight:258.5},{left:833,top:643,width:202,height:255,anchor:.456473,anchorY:1,referenceHeight:258.5},{left:24,top:948,width:180,height:240,anchor:.491974,anchorY:1,referenceHeight:258.5},{left:296,top:948,width:191,height:245,anchor:.516014,anchorY:1,referenceHeight:258.5},{left:561,top:948,width:194,height:246,anchor:.461665,anchorY:1,referenceHeight:258.5},{left:833,top:948,width:182,height:248,anchor:.461191,anchorY:1,referenceHeight:258.5}]},cavalry:{kind:"cavalry",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/cavalry-inbetweens-v1.webp",width:1547,height:1214,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:267,height:258,anchor:.475333,anchorY:1,referenceHeight:258},{left:410,top:24,width:250,height:258,anchor:.31995,anchorY:1,referenceHeight:258},{left:807,top:24,width:245,height:258,anchor:.664284,anchorY:1,referenceHeight:258},{left:1192,top:24,width:263,height:258,anchor:.521353,anchorY:1,referenceHeight:258},{left:24,top:330,width:261,height:258,anchor:.455279,anchorY:1,referenceHeight:258},{left:410,top:330,width:253,height:256,anchor:.326796,anchorY:1,referenceHeight:258},{left:807,top:330,width:243,height:259,anchor:.647213,anchorY:1,referenceHeight:258},{left:1192,top:330,width:259,height:258,anchor:.483215,anchorY:1,referenceHeight:258},{left:24,top:637,width:338,height:234,anchor:.399459,anchorY:1,referenceHeight:258},{left:410,top:637,width:349,height:236,anchor:.280089,anchorY:1,referenceHeight:258},{left:807,top:637,width:337,height:239,anchor:.711423,anchorY:1,referenceHeight:258},{left:1192,top:637,width:331,height:243,anchor:.570123,anchorY:1,referenceHeight:258},{left:24,top:928,width:270,height:248,anchor:.510705,anchorY:1,referenceHeight:258},{left:410,top:928,width:245,height:262,anchor:.339514,anchorY:1,referenceHeight:258},{left:807,top:928,width:239,height:255,anchor:.636884,anchorY:1,referenceHeight:258},{left:1192,top:928,width:267,height:247,anchor:.49687,anchorY:1,referenceHeight:258}]},drum:{kind:"drum",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/drum-inbetweens-v1.webp",width:826,height:1179,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:153,height:237,anchor:.43664,anchorY:1,referenceHeight:237.5},{left:229,top:24,width:141,height:237,anchor:.421128,anchorY:1,referenceHeight:237.5},{left:436,top:24,width:143,height:237,anchor:.567673,anchorY:1,referenceHeight:237.5},{left:644,top:24,width:154,height:240,anchor:.519039,anchorY:1,referenceHeight:237.5},{left:24,top:312,width:157,height:239,anchor:.441496,anchorY:1,referenceHeight:237.5},{left:229,top:312,width:143,height:240,anchor:.458463,anchorY:1,referenceHeight:237.5},{left:436,top:312,width:144,height:237,anchor:.522314,anchorY:1,referenceHeight:237.5},{left:644,top:312,width:153,height:241,anchor:.551437,anchorY:1,referenceHeight:237.5},{left:24,top:601,width:157,height:262,anchor:.475749,anchorY:1,referenceHeight:237.5},{left:229,top:601,width:159,height:234,anchor:.401079,anchorY:1,referenceHeight:237.5},{left:436,top:601,width:160,height:234,anchor:.614123,anchorY:1,referenceHeight:237.5},{left:644,top:601,width:155,height:268,anchor:.421734,anchorY:1,referenceHeight:237.5},{left:24,top:917,width:157,height:232,anchor:.458043,anchorY:1,referenceHeight:237.5},{left:229,top:917,width:142,height:231,anchor:.442753,anchorY:1,referenceHeight:237.5},{left:436,top:917,width:142,height:230,anchor:.558652,anchorY:1,referenceHeight:237.5},{left:644,top:917,width:158,height:238,anchor:.543536,anchorY:1,referenceHeight:237.5}]},armored:{kind:"armored",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/armored-inbetweens-v1.webp",width:1055,height:1087,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:187,height:229,anchor:.458557,anchorY:1,referenceHeight:227},{left:287,top:24,width:215,height:231,anchor:.421895,anchorY:1,referenceHeight:227},{left:568,top:24,width:199,height:222,anchor:.560457,anchorY:1,referenceHeight:227},{left:821,top:24,width:189,height:225,anchor:.476709,anchorY:1,referenceHeight:227},{left:24,top:303,width:197,height:227,anchor:.520997,anchorY:1,referenceHeight:227},{left:287,top:303,width:223,height:227,anchor:.410278,anchorY:1,referenceHeight:227},{left:568,top:303,width:205,height:214,anchor:.62253,anchorY:1,referenceHeight:227},{left:821,top:303,width:191,height:227,anchor:.480433,anchorY:1,referenceHeight:227},{left:24,top:578,width:215,height:209,anchor:.540495,anchorY:1,referenceHeight:227},{left:287,top:578,width:233,height:214,anchor:.347209,anchorY:1,referenceHeight:227},{left:568,top:578,width:198,height:220,anchor:.624903,anchorY:1,referenceHeight:227},{left:821,top:578,width:210,height:215,anchor:.331061,anchorY:1,referenceHeight:227},{left:24,top:846,width:187,height:208,anchor:.46022,anchorY:1,referenceHeight:227},{left:287,top:846,width:202,height:215,anchor:.421184,anchorY:1,referenceHeight:227},{left:568,top:846,width:193,height:216,anchor:.547712,anchorY:1,referenceHeight:227},{left:821,top:846,width:195,height:217,anchor:.471431,anchorY:1,referenceHeight:227}]},ram:{kind:"ram",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ram-inbetweens-v1.webp",width:1231,height:1008,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:256,height:199,anchor:.524253,anchorY:1,referenceHeight:199.5},{left:352,top:24,width:223,height:200,anchor:.440407,anchorY:1,referenceHeight:199.5},{left:639,top:24,width:224,height:199,anchor:.556577,anchorY:1,referenceHeight:199.5},{left:927,top:24,width:256,height:200,anchor:.471158,anchorY:1,referenceHeight:199.5},{left:24,top:272,width:256,height:203,anchor:.530247,anchorY:1,referenceHeight:199.5},{left:352,top:272,width:230,height:200,anchor:.426517,anchorY:1,referenceHeight:199.5},{left:639,top:272,width:231,height:199,anchor:.568348,anchorY:1,referenceHeight:199.5},{left:927,top:272,width:256,height:204,anchor:.466696,anchorY:1,referenceHeight:199.5},{left:24,top:524,width:280,height:210,anchor:.543875,anchorY:1,referenceHeight:199.5},{left:352,top:524,width:239,height:203,anchor:.401869,anchorY:1,referenceHeight:199.5},{left:639,top:524,width:240,height:202,anchor:.590623,anchorY:1,referenceHeight:199.5},{left:927,top:524,width:280,height:211,anchor:.456102,anchorY:1,referenceHeight:199.5},{left:24,top:783,width:267,height:200,anchor:.490271,anchorY:1,referenceHeight:199.5},{left:352,top:783,width:237,height:201,anchor:.395524,anchorY:1,referenceHeight:199.5},{left:639,top:783,width:237,height:201,anchor:.603763,anchorY:1,referenceHeight:199.5},{left:927,top:783,width:267,height:201,anchor:.504239,anchorY:1,referenceHeight:199.5}]},konishi:{kind:"konishi",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/konishi-inbetweens-v1.webp",width:1207,height:1365,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:198,height:296,anchor:.448078,anchorY:1,referenceHeight:296.5},{left:330,top:24,width:193,height:296,anchor:.465096,anchorY:1,referenceHeight:296.5},{left:631,top:24,width:190,height:299,anchor:.538841,anchorY:1,referenceHeight:296.5},{left:934,top:24,width:209,height:296,anchor:.477358,anchorY:1,referenceHeight:296.5},{left:24,top:371,width:196,height:303,anchor:.490711,anchorY:1,referenceHeight:296.5},{left:330,top:371,width:198,height:300,anchor:.478658,anchorY:1,referenceHeight:296.5},{left:631,top:371,width:195,height:292,anchor:.48316,anchorY:1,referenceHeight:296.5},{left:934,top:371,width:195,height:293,anchor:.506666,anchorY:1,referenceHeight:296.5},{left:24,top:722,width:258,height:268,anchor:.485073,anchorY:1,referenceHeight:296.5},{left:330,top:722,width:253,height:275,anchor:.345901,anchorY:1,referenceHeight:296.5},{left:631,top:722,width:255,height:273,anchor:.638405,anchorY:1,referenceHeight:296.5},{left:934,top:722,width:249,height:271,anchor:.502507,anchorY:1,referenceHeight:296.5},{left:24,top:1045,width:201,height:295,anchor:.367123,anchorY:1,referenceHeight:296.5},{left:330,top:1045,width:205,height:296,anchor:.442358,anchorY:1,referenceHeight:296.5},{left:631,top:1045,width:190,height:295,anchor:.528841,anchorY:1,referenceHeight:296.5},{left:934,top:1045,width:208,height:294,anchor:.561052,anchorY:1,referenceHeight:296.5}]},kato:{kind:"kato",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kato-inbetweens-v1.webp",width:1211,height:1352,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:140,height:304,anchor:.462691,anchorY:1,referenceHeight:301},{left:353,top:24,width:138,height:295,anchor:.432391,anchorY:1,referenceHeight:301},{left:624,top:24,width:136,height:299,anchor:.545595,anchorY:1,referenceHeight:301},{left:895,top:24,width:143,height:303,anchor:.492061,anchorY:1,referenceHeight:301},{left:24,top:376,width:141,height:284,anchor:.513398,anchorY:1,referenceHeight:301},{left:353,top:376,width:151,height:305,anchor:.487762,anchorY:1,referenceHeight:301},{left:624,top:376,width:153,height:298,anchor:.511399,anchorY:1,referenceHeight:301},{left:895,top:376,width:143,height:288,anchor:.458833,anchorY:1,referenceHeight:301},{left:24,top:729,width:281,height:259,anchor:.38565,anchorY:1,referenceHeight:301},{left:353,top:729,width:223,height:250,anchor:.34336,anchorY:1,referenceHeight:301},{left:624,top:729,width:223,height:250,anchor:.647411,anchorY:1,referenceHeight:301},{left:895,top:729,width:292,height:253,anchor:.619573,anchorY:1,referenceHeight:301},{left:24,top:1036,width:146,height:286,anchor:.464807,anchorY:1,referenceHeight:301},{left:353,top:1036,width:143,height:290,anchor:.468215,anchorY:1,referenceHeight:301},{left:624,top:1036,width:140,height:292,anchor:.512911,anchorY:1,referenceHeight:301},{left:895,top:1036,width:140,height:286,anchor:.526821,anchorY:1,referenceHeight:301}]},wakizaka:{kind:"wakizaka",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/wakizaka-inbetweens-v1.webp",width:1261,height:1371,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:189,height:301,anchor:.441326,anchorY:1,referenceHeight:305.5},{left:323,top:24,width:189,height:304,anchor:.53811,anchorY:1,referenceHeight:305.5},{left:625,top:24,width:226,height:307,anchor:.449886,anchorY:1,referenceHeight:305.5},{left:976,top:24,width:253,height:309,anchor:.554308,anchorY:1,referenceHeight:305.5},{left:24,top:381,width:188,height:306,anchor:.490682,anchorY:1,referenceHeight:305.5},{left:323,top:381,width:223,height:305,anchor:.454027,anchorY:1,referenceHeight:305.5},{left:625,top:381,width:227,height:305,anchor:.358945,anchorY:1,referenceHeight:305.5},{left:976,top:381,width:238,height:302,anchor:.563343,anchorY:1,referenceHeight:305.5},{left:24,top:735,width:251,height:266,anchor:.449958,anchorY:1,referenceHeight:305.5},{left:323,top:735,width:254,height:275,anchor:.459046,anchorY:1,referenceHeight:305.5},{left:625,top:735,width:303,height:259,anchor:.624889,anchorY:1,referenceHeight:305.5},{left:976,top:735,width:261,height:275,anchor:.527856,anchorY:1,referenceHeight:305.5},{left:24,top:1058,width:187,height:283,anchor:.455205,anchorY:1,referenceHeight:305.5},{left:323,top:1058,width:182,height:284,anchor:.503374,anchorY:1,referenceHeight:305.5},{left:625,top:1058,width:182,height:289,anchor:.581844,anchorY:1,referenceHeight:305.5},{left:976,top:1058,width:230,height:281,anchor:.520647,anchorY:1,referenceHeight:305.5}]},ukita:{kind:"ukita",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ukita-inbetweens-v1.webp",width:1510,height:1348,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:212,height:295,anchor:.47091,anchorY:1,referenceHeight:294.5},{left:350,top:24,width:191,height:292,anchor:.502677,anchorY:1,referenceHeight:294.5},{left:799,top:24,width:180,height:296,anchor:.539793,anchorY:1,referenceHeight:294.5},{left:1225,top:24,width:205,height:295,anchor:.54469,anchorY:1,referenceHeight:294.5},{left:24,top:368,width:197,height:294,anchor:.550089,anchorY:1,referenceHeight:294.5},{left:350,top:368,width:199,height:294,anchor:.47858,anchorY:1,referenceHeight:294.5},{left:799,top:368,width:180,height:295,anchor:.600632,anchorY:1,referenceHeight:294.5},{left:1225,top:368,width:214,height:295,anchor:.4636,anchorY:1,referenceHeight:294.5},{left:24,top:711,width:278,height:271,anchor:.394762,anchorY:1,referenceHeight:294.5},{left:350,top:711,width:401,height:270,anchor:.477442,anchorY:1,referenceHeight:294.5},{left:799,top:711,width:378,height:268,anchor:.560629,anchorY:1,referenceHeight:294.5},{left:1225,top:711,width:261,height:273,anchor:.567065,anchorY:1,referenceHeight:294.5},{left:24,top:1032,width:202,height:292,anchor:.482053,anchorY:1,referenceHeight:294.5},{left:350,top:1032,width:191,height:287,anchor:.485363,anchorY:1,referenceHeight:294.5},{left:799,top:1032,width:180,height:282,anchor:.527629,anchorY:1,referenceHeight:294.5},{left:1225,top:1032,width:206,height:292,anchor:.519671,anchorY:1,referenceHeight:294.5}]},ishida:{kind:"ishida",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ishida-inbetweens-v1.webp",width:1210,height:1336,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:182,height:283,anchor:.593798,anchorY:1,referenceHeight:286.5},{left:339,top:24,width:210,height:288,anchor:.441236,anchorY:1,referenceHeight:286.5},{left:634,top:24,width:198,height:288,anchor:.523338,anchorY:1,referenceHeight:286.5},{left:916,top:24,width:201,height:285,anchor:.473062,anchorY:1,referenceHeight:286.5},{left:24,top:360,width:206,height:291,anchor:.600292,anchorY:1,referenceHeight:286.5},{left:339,top:360,width:217,height:293,anchor:.498158,anchorY:1,referenceHeight:286.5},{left:634,top:360,width:211,height:280,anchor:.531301,anchorY:1,referenceHeight:286.5},{left:916,top:360,width:213,height:282,anchor:.457338,anchorY:1,referenceHeight:286.5},{left:24,top:701,width:267,height:276,anchor:.461161,anchorY:1,referenceHeight:286.5},{left:339,top:701,width:247,height:279,anchor:.384129,anchorY:1,referenceHeight:286.5},{left:634,top:701,width:234,height:279,anchor:.588278,anchorY:1,referenceHeight:286.5},{left:916,top:701,width:270,height:275,anchor:.531232,anchorY:1,referenceHeight:286.5},{left:24,top:1028,width:192,height:274,anchor:.571592,anchorY:1,referenceHeight:286.5},{left:339,top:1028,width:210,height:283,anchor:.448167,anchorY:1,referenceHeight:286.5},{left:634,top:1028,width:215,height:284,anchor:.550918,anchorY:1,referenceHeight:286.5},{left:916,top:1028,width:203,height:272,anchor:.466463,anchorY:1,referenceHeight:286.5}]},so:{kind:"so",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/so-inbetweens-v1.webp",width:1150,height:1282,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:184,height:277,anchor:.602019,anchorY:1,referenceHeight:277},{left:343,top:24,width:173,height:277,anchor:.505629,anchorY:1,referenceHeight:277},{left:625,top:24,width:154,height:278,anchor:.496515,anchorY:1,referenceHeight:277},{left:887,top:24,width:184,height:277,anchor:.400204,anchorY:1,referenceHeight:277},{left:24,top:350,width:189,height:277,anchor:.658438,anchorY:1,referenceHeight:277},{left:343,top:350,width:165,height:268,anchor:.457724,anchorY:1,referenceHeight:277},{left:625,top:350,width:153,height:268,anchor:.454558,anchorY:1,referenceHeight:277},{left:887,top:350,width:180,height:277,anchor:.378511,anchorY:1,referenceHeight:277},{left:24,top:675,width:271,height:259,anchor:.299216,anchorY:1,referenceHeight:277},{left:343,top:675,width:234,height:267,anchor:.329521,anchorY:1,referenceHeight:277},{left:625,top:675,width:214,height:262,anchor:.700579,anchorY:1,referenceHeight:277},{left:887,top:675,width:239,height:259,anchor:.563837,anchorY:1,referenceHeight:277},{left:24,top:990,width:211,height:268,anchor:.399958,anchorY:1,referenceHeight:277},{left:343,top:990,width:158,height:265,anchor:.535071,anchorY:1,referenceHeight:277},{left:625,top:990,width:146,height:265,anchor:.581726,anchorY:1,referenceHeight:277},{left:887,top:990,width:218,height:264,anchor:.532222,anchorY:1,referenceHeight:277}]},kuroda:{kind:"kuroda",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kuroda-inbetweens-v1.webp",width:1143,height:1360,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:181,height:307,anchor:.47224,anchorY:1,referenceHeight:307},{left:340,top:24,width:154,height:307,anchor:.547031,anchorY:1,referenceHeight:307},{left:608,top:24,width:160,height:307,anchor:.451344,anchorY:1,referenceHeight:307},{left:862,top:24,width:176,height:298,anchor:.488675,anchorY:1,referenceHeight:307},{left:24,top:379,width:171,height:311,anchor:.488891,anchorY:1,referenceHeight:307},{left:340,top:379,width:150,height:307,anchor:.4673,anchorY:1,referenceHeight:307},{left:608,top:379,width:153,height:307,anchor:.52759,anchorY:1,referenceHeight:307},{left:862,top:379,width:162,height:306,anchor:.475542,anchorY:1,referenceHeight:307},{left:24,top:738,width:268,height:262,anchor:.374915,anchorY:1,referenceHeight:307},{left:340,top:738,width:220,height:266,anchor:.406986,anchorY:1,referenceHeight:307},{left:608,top:738,width:206,height:262,anchor:.571764,anchorY:1,referenceHeight:307},{left:862,top:738,width:257,height:262,anchor:.591162,anchorY:1,referenceHeight:307},{left:24,top:1052,width:170,height:282,anchor:.466661,anchorY:1,referenceHeight:307},{left:340,top:1052,width:149,height:284,anchor:.533207,anchorY:1,referenceHeight:307},{left:608,top:1052,width:161,height:284,anchor:.464428,anchorY:1,referenceHeight:307},{left:862,top:1052,width:172,height:276,anchor:.517363,anchorY:1,referenceHeight:307}]},todo:{kind:"todo",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/todo-inbetweens-v1.webp",width:1141,height:1360,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:198,height:304,anchor:.433315,anchorY:1,referenceHeight:303.5},{left:307,top:24,width:205,height:303,anchor:.403825,anchorY:1,referenceHeight:303.5},{left:597,top:24,width:181,height:304,anchor:.577495,anchorY:1,referenceHeight:303.5},{left:892,top:24,width:212,height:302,anchor:.476994,anchorY:1,referenceHeight:303.5},{left:24,top:376,width:204,height:306,anchor:.439721,anchorY:1,referenceHeight:303.5},{left:307,top:376,width:223,height:304,anchor:.467033,anchorY:1,referenceHeight:303.5},{left:597,top:376,width:188,height:302,anchor:.500549,anchorY:1,referenceHeight:303.5},{left:892,top:376,width:192,height:303,anchor:.459792,anchorY:1,referenceHeight:303.5},{left:24,top:730,width:235,height:271,anchor:.430339,anchorY:1,referenceHeight:303.5},{left:307,top:730,width:242,height:272,anchor:.331751,anchorY:1,referenceHeight:303.5},{left:597,top:730,width:247,height:272,anchor:.641536,anchorY:1,referenceHeight:303.5},{left:892,top:730,width:225,height:262,anchor:.510689,anchorY:1,referenceHeight:303.5},{left:24,top:1050,width:197,height:285,anchor:.433585,anchorY:1,referenceHeight:303.5},{left:307,top:1050,width:207,height:279,anchor:.430661,anchorY:1,referenceHeight:303.5},{left:597,top:1050,width:181,height:286,anchor:.532002,anchorY:1,referenceHeight:303.5},{left:892,top:1050,width:209,height:286,anchor:.493467,anchorY:1,referenceHeight:303.5}]},kuki:{kind:"kuki",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kuki-inbetweens-v1.webp",width:1212,height:1311,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:244,height:278,anchor:.518406,anchorY:1,referenceHeight:281},{left:321,top:24,width:224,height:286,anchor:.510893,anchorY:1,referenceHeight:281},{left:629,top:24,width:218,height:281,anchor:.471791,anchorY:1,referenceHeight:281},{left:937,top:24,width:241,height:281,anchor:.459172,anchorY:1,referenceHeight:281},{left:24,top:358,width:240,height:275,anchor:.514647,anchorY:1,referenceHeight:281},{left:321,top:358,width:213,height:279,anchor:.458254,anchorY:1,referenceHeight:281},{left:629,top:358,width:212,height:282,anchor:.531883,anchorY:1,referenceHeight:281},{left:937,top:358,width:240,height:274,anchor:.493043,anchorY:1,referenceHeight:281},{left:24,top:688,width:243,height:264,anchor:.551514,anchorY:1,referenceHeight:281},{left:321,top:688,width:260,height:267,anchor:.33186,anchorY:1,referenceHeight:281},{left:629,top:688,width:260,height:264,anchor:.63537,anchorY:1,referenceHeight:281},{left:937,top:688,width:193,height:258,anchor:.383347,anchorY:1,referenceHeight:281},{left:24,top:1003,width:249,height:278,anchor:.523272,anchorY:1,referenceHeight:281},{left:321,top:1003,width:227,height:281,anchor:.481513,anchorY:1,referenceHeight:281},{left:629,top:1003,width:223,height:283,anchor:.532228,anchorY:1,referenceHeight:281},{left:937,top:1003,width:251,height:284,anchor:.493324,anchorY:1,referenceHeight:281}]},kurushima:{kind:"kurushima",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kurushima-inbetweens-v1.webp",width:1078,height:1166,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:162,height:243,anchor:.568567,anchorY:1,referenceHeight:243},{left:295,top:24,width:164,height:243,anchor:.480263,anchorY:1,referenceHeight:243},{left:564,top:24,width:163,height:243,anchor:.511228,anchorY:1,referenceHeight:243},{left:831,top:24,width:161,height:246,anchor:.409986,anchorY:1,referenceHeight:243},{left:24,top:318,width:164,height:240,anchor:.504607,anchorY:1,referenceHeight:243},{left:295,top:318,width:152,height:244,anchor:.508776,anchorY:1,referenceHeight:243},{left:564,top:318,width:154,height:243,anchor:.467847,anchorY:1,referenceHeight:243},{left:831,top:318,width:163,height:237,anchor:.467306,anchorY:1,referenceHeight:243},{left:24,top:610,width:223,height:230,anchor:.46851,anchorY:1,referenceHeight:243},{left:295,top:610,width:221,height:238,anchor:.418727,anchorY:1,referenceHeight:243},{left:564,top:610,width:219,height:236,anchor:.569554,anchorY:1,referenceHeight:243},{left:831,top:610,width:223,height:233,anchor:.520364,anchorY:1,referenceHeight:243},{left:24,top:896,width:159,height:244,anchor:.495822,anchorY:1,referenceHeight:243},{left:295,top:896,width:161,height:244,anchor:.486258,anchorY:1,referenceHeight:243},{left:564,top:896,width:161,height:246,anchor:.501008,anchorY:1,referenceHeight:243},{left:831,top:896,width:158,height:244,anchor:.501999,anchorY:1,referenceHeight:243}]},shimazu:{kind:"shimazu",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/shimazu-inbetweens-v1.webp",width:1116,height:1111,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:192,height:234,anchor:.481422,anchorY:1,referenceHeight:234.5},{left:310,top:24,width:194,height:235,anchor:.468354,anchorY:1,referenceHeight:234.5},{left:593,top:24,width:194,height:236,anchor:.528842,anchorY:1,referenceHeight:234.5},{left:874,top:24,width:192,height:233,anchor:.515655,anchorY:1,referenceHeight:234.5},{left:24,top:308,width:204,height:234,anchor:.516457,anchorY:1,referenceHeight:234.5},{left:310,top:308,width:152,height:234,anchor:.469797,anchorY:1,referenceHeight:234.5},{left:593,top:308,width:186,height:234,anchor:.525033,anchorY:1,referenceHeight:234.5},{left:874,top:308,width:165,height:234,anchor:.428687,anchorY:1,referenceHeight:234.5},{left:24,top:590,width:238,height:203,anchor:.408486,anchorY:1,referenceHeight:234.5},{left:310,top:590,width:235,height:224,anchor:.348713,anchorY:1,referenceHeight:234.5},{left:593,top:590,width:233,height:224,anchor:.627298,anchorY:1,referenceHeight:234.5},{left:874,top:590,width:218,height:212,anchor:.564304,anchorY:1,referenceHeight:234.5},{left:24,top:862,width:195,height:224,anchor:.440802,anchorY:1,referenceHeight:234.5},{left:310,top:862,width:191,height:225,anchor:.483453,anchorY:1,referenceHeight:234.5},{left:593,top:862,width:190,height:224,anchor:.5185,anchorY:1,referenceHeight:234.5},{left:874,top:862,width:194,height:223,anchor:.556539,anchorY:1,referenceHeight:234.5}]},hideyoshi:{kind:"hideyoshi",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/hideyoshi-inbetweens-v1.webp",width:1386,height:1388,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:242,height:295,anchor:.513539,anchorY:1,referenceHeight:292.5},{left:333,top:24,width:222,height:290,anchor:.458241,anchorY:1,referenceHeight:292.5},{left:723,top:24,width:223,height:289,anchor:.504986,anchorY:1,referenceHeight:292.5},{left:1100,top:24,width:253,height:293,anchor:.487736,anchorY:1,referenceHeight:292.5},{left:24,top:367,width:245,height:297,anchor:.530961,anchorY:1,referenceHeight:292.5},{left:333,top:367,width:220,height:294,anchor:.509905,anchorY:1,referenceHeight:292.5},{left:723,top:367,width:231,height:290,anchor:.476498,anchorY:1,referenceHeight:292.5},{left:1100,top:367,width:245,height:291,anchor:.452442,anchorY:1,referenceHeight:292.5},{left:24,top:712,width:261,height:307,anchor:.541641,anchorY:1,referenceHeight:292.5},{left:333,top:712,width:342,height:271,anchor:.522734,anchorY:1,referenceHeight:292.5},{left:723,top:712,width:329,height:277,anchor:.465245,anchorY:1,referenceHeight:292.5},{left:1100,top:712,width:262,height:295,anchor:.460548,anchorY:1,referenceHeight:292.5},{left:24,top:1067,width:236,height:297,anchor:.459664,anchorY:1,referenceHeight:292.5},{left:333,top:1067,width:226,height:293,anchor:.458779,anchorY:1,referenceHeight:292.5},{left:723,top:1067,width:234,height:286,anchor:.513537,anchorY:1,referenceHeight:292.5},{left:1100,top:1067,width:236,height:292,anchor:.511446,anchorY:1,referenceHeight:292.5}]},militia:{kind:"militia",side:"ally",path:"assets/3d/fixed/combat-inbetweens/militia-inbetweens-v1.webp",width:1346,height:1029,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:248,height:214,anchor:.303755,anchorY:1,referenceHeight:214.5},{left:380,top:24,width:166,height:217,anchor:.233638,anchorY:1,referenceHeight:214.5},{left:699,top:24,width:169,height:215,anchor:.751442,anchorY:1,referenceHeight:214.5},{left:1028,top:24,width:242,height:209,anchor:.691229,anchorY:1,referenceHeight:214.5},{left:24,top:289,width:231,height:215,anchor:.376608,anchorY:1,referenceHeight:214.5},{left:380,top:289,width:219,height:215,anchor:.345603,anchorY:1,referenceHeight:214.5},{left:699,top:289,width:194,height:214,anchor:.717287,anchorY:1,referenceHeight:214.5},{left:1028,top:289,width:247,height:215,anchor:.565269,anchorY:1,referenceHeight:214.5},{left:24,top:552,width:308,height:199,anchor:.309765,anchorY:1,referenceHeight:214.5},{left:380,top:552,width:271,height:206,anchor:.26732,anchorY:1,referenceHeight:214.5},{left:699,top:552,width:281,height:206,anchor:.745506,anchorY:1,referenceHeight:214.5},{left:1028,top:552,width:294,height:201,anchor:.665837,anchorY:1,referenceHeight:214.5},{left:24,top:806,width:233,height:192,anchor:.350225,anchorY:1,referenceHeight:214.5},{left:380,top:806,width:195,height:198,anchor:.353827,anchorY:1,referenceHeight:214.5},{left:699,top:806,width:193,height:199,anchor:.638931,anchorY:1,referenceHeight:214.5},{left:1028,top:806,width:233,height:191,anchor:.648168,anchorY:1,referenceHeight:214.5}]},guard:{kind:"guard",side:"ally",path:"assets/3d/fixed/combat-inbetweens/guard-inbetweens-v1.webp",width:1082,height:1315,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:149,height:303,anchor:.412476,anchorY:1,referenceHeight:295},{left:321,top:24,width:152,height:295,anchor:.4815,anchorY:1,referenceHeight:295},{left:570,top:24,width:152,height:295,anchor:.502303,anchorY:1,referenceHeight:295},{left:820,top:24,width:129,height:295,anchor:.492853,anchorY:1,referenceHeight:295},{left:24,top:375,width:154,height:306,anchor:.546057,anchorY:1,referenceHeight:295},{left:321,top:375,width:148,height:292,anchor:.486764,anchorY:1,referenceHeight:295},{left:570,top:375,width:148,height:295,anchor:.476979,anchorY:1,referenceHeight:295},{left:820,top:375,width:132,height:295,anchor:.582791,anchorY:1,referenceHeight:295},{left:24,top:729,width:249,height:213,anchor:.312724,anchorY:1,referenceHeight:295},{left:321,top:729,width:201,height:232,anchor:.329505,anchorY:1,referenceHeight:295},{left:570,top:729,width:202,height:231,anchor:.65584,anchorY:1,referenceHeight:295},{left:820,top:729,width:238,height:213,anchor:.669952,anchorY:1,referenceHeight:295},{left:24,top:1009,width:153,height:281,anchor:.427279,anchorY:1,referenceHeight:295},{left:321,top:1009,width:143,height:282,anchor:.493231,anchorY:1,referenceHeight:295},{left:570,top:1009,width:148,height:281,anchor:.513681,anchorY:1,referenceHeight:295},{left:820,top:1009,width:128,height:275,anchor:.478192,anchorY:1,referenceHeight:295}]},elite:{kind:"elite",side:"ally",path:"assets/3d/fixed/combat-inbetweens/elite-inbetweens-v1.webp",width:1198,height:1208,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:193,height:251,anchor:.438333,anchorY:1,referenceHeight:256.5},{left:344,top:24,width:171,height:262,anchor:.400807,anchorY:1,referenceHeight:256.5},{left:631,top:24,width:172,height:259,anchor:.581968,anchorY:1,referenceHeight:256.5},{left:903,top:24,width:189,height:254,anchor:.521269,anchorY:1,referenceHeight:256.5},{left:24,top:334,width:192,height:248,anchor:.453928,anchorY:1,referenceHeight:256.5},{left:344,top:334,width:168,height:254,anchor:.382658,anchorY:1,referenceHeight:256.5},{left:631,top:334,width:167,height:252,anchor:.60535,anchorY:1,referenceHeight:256.5},{left:903,top:334,width:186,height:248,anchor:.528713,anchorY:1,referenceHeight:256.5},{left:24,top:636,width:272,height:215,anchor:.363927,anchorY:1,referenceHeight:256.5},{left:344,top:636,width:239,height:229,anchor:.314571,anchorY:1,referenceHeight:256.5},{left:631,top:636,width:224,height:236,anchor:.6783,anchorY:1,referenceHeight:256.5},{left:903,top:636,width:271,height:211,anchor:.693934,anchorY:1,referenceHeight:256.5},{left:24,top:920,width:197,height:242,anchor:.434111,anchorY:1,referenceHeight:256.5},{left:344,top:920,width:168,height:263,anchor:.455109,anchorY:1,referenceHeight:256.5},{left:631,top:920,width:170,height:264,anchor:.550413,anchorY:1,referenceHeight:256.5},{left:903,top:920,width:203,height:254,anchor:.566553,anchorY:1,referenceHeight:256.5}]},monk:{kind:"monk",side:"ally",path:"assets/3d/fixed/combat-inbetweens/monk-inbetweens-v1.webp",width:1029,height:1117,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:149,height:238,anchor:.526654,anchorY:1,referenceHeight:246},{left:282,top:24,width:147,height:247,anchor:.469488,anchorY:1,referenceHeight:246},{left:538,top:24,width:145,height:246,anchor:.524693,anchorY:1,referenceHeight:246},{left:794,top:24,width:147,height:246,anchor:.429109,anchorY:1,referenceHeight:246},{left:24,top:319,width:158,height:246,anchor:.53203,anchorY:1,referenceHeight:246},{left:282,top:319,width:165,height:246,anchor:.407362,anchorY:1,referenceHeight:246},{left:538,top:319,width:163,height:246,anchor:.644135,anchorY:1,referenceHeight:246},{left:794,top:319,width:156,height:243,anchor:.487956,anchorY:1,referenceHeight:246},{left:24,top:613,width:210,height:171,anchor:.537243,anchorY:1,referenceHeight:246},{left:282,top:613,width:208,height:179,anchor:.34183,anchorY:1,referenceHeight:246},{left:538,top:613,width:208,height:179,anchor:.641209,anchorY:1,referenceHeight:246},{left:794,top:613,width:211,height:173,anchor:.4547,anchorY:1,referenceHeight:246},{left:24,top:840,width:117,height:237,anchor:.507723,anchorY:1,referenceHeight:246},{left:282,top:840,width:125,height:253,anchor:.496519,anchorY:1,referenceHeight:246},{left:538,top:840,width:125,height:252,anchor:.497165,anchorY:1,referenceHeight:246},{left:794,top:840,width:129,height:236,anchor:.443583,anchorY:1,referenceHeight:246}]},courier:{kind:"courier",side:"ally",path:"assets/3d/fixed/combat-inbetweens/courier-inbetweens-v1.webp",width:1107,height:1258,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:211,height:269,anchor:.518047,anchorY:1,referenceHeight:268.5},{left:310,top:24,width:204,height:268,anchor:.463832,anchorY:1,referenceHeight:268.5},{left:577,top:24,width:193,height:269,anchor:.562402,anchorY:1,referenceHeight:268.5},{left:847,top:24,width:214,height:264,anchor:.466726,anchorY:1,referenceHeight:268.5},{left:24,top:341,width:228,height:269,anchor:.599341,anchorY:1,referenceHeight:268.5},{left:310,top:341,width:219,height:267,anchor:.435028,anchorY:1,referenceHeight:268.5},{left:577,top:341,width:219,height:263,anchor:.538536,anchorY:1,referenceHeight:268.5},{left:847,top:341,width:236,height:269,anchor:.393699,anchorY:1,referenceHeight:268.5},{left:24,top:658,width:231,height:264,anchor:.61528,anchorY:1,referenceHeight:268.5},{left:310,top:658,width:211,height:265,anchor:.406646,anchorY:1,referenceHeight:268.5},{left:577,top:658,width:220,height:271,anchor:.570336,anchorY:1,referenceHeight:268.5},{left:847,top:658,width:233,height:260,anchor:.38939,anchorY:1,referenceHeight:268.5},{left:24,top:977,width:238,height:253,anchor:.577539,anchorY:1,referenceHeight:268.5},{left:310,top:977,width:212,height:254,anchor:.458656,anchorY:1,referenceHeight:268.5},{left:577,top:977,width:222,height:257,anchor:.55534,anchorY:1,referenceHeight:268.5},{left:847,top:977,width:231,height:252,anchor:.420759,anchorY:1,referenceHeight:268.5}]},turtle:{kind:"turtle",side:"ally",path:"assets/3d/fixed/combat-inbetweens/turtle-inbetweens-v1.webp",width:1262,height:1009,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:262,height:184,anchor:.494718,anchorY:1,referenceHeight:188},{left:345,top:24,width:253,height:192,anchor:.496229,anchorY:1,referenceHeight:188},{left:654,top:24,width:256,height:200,anchor:.47497,anchorY:1,referenceHeight:188},{left:962,top:24,width:262,height:184,anchor:.492671,anchorY:1,referenceHeight:188},{left:24,top:272,width:271,height:201,anchor:.491808,anchorY:1,referenceHeight:188},{left:345,top:272,width:245,height:190,anchor:.469072,anchorY:1,referenceHeight:188},{left:654,top:272,width:249,height:190,anchor:.527662,anchorY:1,referenceHeight:188},{left:962,top:272,width:271,height:199,anchor:.483245,anchorY:1,referenceHeight:188},{left:24,top:521,width:263,height:203,anchor:.46966,anchorY:1,referenceHeight:188},{left:345,top:521,width:261,height:194,anchor:.480755,anchorY:1,referenceHeight:188},{left:654,top:521,width:257,height:198,anchor:.497093,anchorY:1,referenceHeight:188},{left:962,top:521,width:267,height:201,anchor:.510017,anchorY:1,referenceHeight:188},{left:24,top:772,width:273,height:212,anchor:.473048,anchorY:1,referenceHeight:188},{left:345,top:772,width:253,height:212,anchor:.474186,anchorY:1,referenceHeight:188},{left:654,top:772,width:260,height:211,anchor:.514641,anchorY:1,referenceHeight:188},{left:962,top:772,width:276,height:213,anchor:.504161,anchorY:1,referenceHeight:188}]}};var ql={ashigaru:{name:"아시가루",title:"창병",tier:1,hp:70,speed:1,armor:0,resist:0,bounty:5,lives:1,atk:8,size:.28,desc:"가장 흔한 왜군 보병. 수로 밀어붙인다."},teppo:{name:"조총병",title:"철포대",tier:1,hp:56,speed:.95,armor:0,resist:0,bounty:6,lives:1,atk:6,size:.28,shoot:{range:2.6,dmg:12,cd:2.2},desc:"걸으면서 가까운 영웅과 의병을 조총으로 저격한다."},scout:{name:"척후병",title:"정찰대",tier:1,hp:42,speed:1.7,armor:0,resist:0,bounty:4,lives:1,atk:5,size:.25,desc:"빠르게 달려드는 경보병. 방어선의 빈틈을 노린다."},samurai:{name:"사무라이",title:"무사",tier:2,hp:330,speed:.9,armor:.3,resist:.1,bounty:15,lives:2,atk:25,size:.32,enrage:{at:.5,speed:1.6},desc:"갑옷을 두른 무사. 체력이 절반 아래로 떨어지면 칼을 뽑고 돌진한다."},ninja:{name:"시노비",title:"닌자",tier:2,hp:170,speed:1.35,armor:0,resist:.2,bounty:14,lives:2,atk:0,size:.27,stealth:!0,unblockable:!0,desc:"은신 상태로 이동한다. 첨성대·곽재우·봉수 경보로만 발각할 수 있다. 범위 공격은 맞는다."},onmyoji:{name:"음양사",title:"주술사",tier:2,hp:210,speed:.85,armor:0,resist:.5,bounty:17,lives:2,atk:10,size:.3,heal:{range:2,pct:.06,cd:3},desc:"3초마다 주변 아군 체력을 6% 회복시킨다(여럿이어도 겹치지 않음). 신성 저항이 높다."},cavalry:{name:"기마무사",title:"기병",tier:2,hp:230,speed:1.5,armor:.15,resist:0,bounty:17,lives:2,atk:18,size:.36,unblockable:!0,desc:"말을 탄 무사. 빠르고 저지당하지 않는다."},drum:{name:"진군 고수",title:"군악대",tier:2,hp:250,speed:.9,armor:.1,resist:.1,bounty:18,lives:2,atk:8,size:.32,haste:{range:2,mult:.25},desc:"북을 울려 주변 아군의 이동 속도를 25% 올린다. 우선 제거 대상."},armored:{name:"철갑무사",title:"갑주대",tier:3,hp:950,speed:.6,armor:.6,resist:.1,bounty:35,lives:3,atk:40,size:.38,desc:"두꺼운 철갑. 물리 피해를 60% 막는다. 신성·화기로 상대하라."},ram:{name:"공성 충차",title:"공성병기",tier:3,hp:1500,speed:.5,armor:.35,resist:.3,bounty:45,lives:5,atk:60,size:.45,spawnOnDeath:{type:"ashigaru",n:4},desc:"성문을 부수는 충차. 파괴되면 안에서 아시가루 4명이 뛰쳐나온다."},konishi:{name:"고니시 유키나가",title:"제1군 선봉장",tier:4,hp:5500,speed:.55,armor:.3,resist:.3,bounty:250,lives:6,atk:90,size:.55,boss:{summon:{type:"ashigaru",n:4,cd:9}},desc:"임진왜란 선봉장. 9초마다 아시가루 4명을 불러낸다."},kato:{name:"가토 기요마사",title:"제2군 대장",tier:4,hp:9e3,speed:.5,armor:.45,resist:.2,bounty:320,lives:8,atk:130,size:.58,boss:{charge:{cd:11,dur:1.6,mult:3},disable:{range:3,dur:4}},desc:"11초마다 창을 던져 가까운 유산 하나를 4초간 봉쇄하고 돌진한다."},wakizaka:{name:"와키자카 야스하루",title:"수군 대장",tier:4,hp:9500,speed:.6,armor:.3,resist:.35,bounty:320,lives:8,atk:110,size:.56,boss:{shield:{pct:.12,cd:15}},desc:"안택선 방패. 15초마다 최대 체력 12%의 보호막을 새로 두른다."},ukita:{name:"우키타 히데이에",title:"총대장",tier:4,hp:12e3,speed:.5,armor:.4,resist:.4,bounty:400,lives:10,atk:140,size:.6,boss:{rally:{cd:12,heal:.08,haste:.3,dur:3}},desc:"12초마다 전군을 독려해 모든 왜군의 체력 8% 회복, 3초간 이동 속도 +30%."},ishida:{name:"이시다 미쓰나리",title:"삼봉행",tier:4,hp:12500,speed:.45,armor:.4,resist:.4,bounty:600,lives:14,atk:200,size:.66,boss:{phases:[.7,.35],phaseSummon:[{type:"samurai",n:3},{type:"ninja",n:3}],disableN:3,disableDur:5,phaseText:"봉행의 계략"},desc:"침략을 꾸린 책사. 체력 70%·35%에서 정예를 부르고 유산 3개를 봉쇄한다."},so:{name:"소 요시토시",title:"대마도주",tier:4,hp:5200,speed:.6,armor:.25,resist:.3,bounty:240,lives:6,atk:80,size:.55,boss:{summon:{type:"scout",n:5,cd:8,text:"길잡이 척후대!"}},desc:"길잡이 노릇을 한 대마도주. 8초마다 척후병 5명을 풀어 방어선을 흔든다."},kuroda:{name:"구로다 나가마사",title:"제3군 대장",tier:4,hp:7200,speed:.5,armor:.4,resist:.25,bounty:280,lives:7,atk:110,size:.57,boss:{summon:{type:"teppo",n:5,cd:10,text:"철포대 사격 준비!"}},desc:"조총 부대를 앞세운 장수. 10초마다 조총병 5명을 불러낸다."},todo:{name:"도도 다카토라",title:"수군 장수",tier:4,hp:6400,speed:.55,armor:.3,resist:.3,bounty:300,lives:7,atk:110,size:.57,boss:{shield:{pct:.08,cd:13,text:"판옥 방패!"},summon:{type:"ashigaru",n:4,cd:12,text:"수군 상륙!"}},desc:"옥포·칠천량의 수군 장수. 13초마다 보호막(8%), 12초마다 아시가루 4명 상륙."},kuki:{name:"구키 요시타카",title:"수군 대장",tier:4,hp:7600,speed:.5,armor:.4,resist:.3,bounty:320,lives:8,atk:120,size:.58,boss:{shield:{pct:.12,cd:15,text:"철갑선 방벽!"}},desc:"철갑선을 몰던 수군 대장. 15초마다 최대 체력 12%의 두꺼운 보호막."},kurushima:{name:"구루시마 미치후사",title:"선봉 수군장",tier:4,hp:9e3,speed:.6,armor:.3,resist:.3,bounty:330,lives:9,atk:130,size:.58,boss:{rally:{cd:10,heal:.05,haste:.35,dur:3,text:"노를 저어라!"}},desc:"명량의 선봉. 10초마다 모든 왜군 체력 5% 회복, 3초간 이동 속도 +35%."},shimazu:{name:"시마즈 요시히로",title:"귀신 시마즈",tier:4,hp:14e3,speed:.5,armor:.5,resist:.35,bounty:450,lives:12,atk:170,size:.62,enrage:{at:.4,speed:1.5},boss:{charge:{cd:10,dur:1.4,mult:3,text:"귀신 돌격!"},disable:{range:3.2,dur:4}},desc:"가장 사나운 적장. 10초마다 유산 하나를 봉쇄하며 돌진하고, 체력 40% 아래에서 더 빨라진다."},hideyoshi:{name:"도요토미 히데요시",title:"태합 · 침략의 원흉",tier:4,hp:38e3,speed:.3,armor:.88,resist:.55,bounty:3e3,lives:999,atk:400,size:.8,scale:2.15,fixedHp:!0,line:"갑옷 88% — 화기·신성·갑옷 깎기로 공략하라!",boss:{phases:[.75,.5,.25],phaseSummon:[{type:"samurai",n:4},{type:"armored",n:3},{type:"ninja",n:6}],disableN:4,disableDur:6,phaseText:"천하인의 호령",shield:{pct:.05,cd:15,text:"황금 표주박!"}},desc:"단 한 명. 갑옷 88% — 물리 피해가 거의 통하지 않는다. 화기(갑옷 절반 무시)·신성·갑옷 깎기로 공략하라. 도성에 닿으면 즉시 패배."}},Zl={ash:"ashigaru",tep:"teppo",sco:"scout",sam:"samurai",nin:"ninja",onm:"onmyoji",cav:"cavalry",drm:"drum",arm:"armored",ram:"ram"};function lm(i){let e=i.rng=i.rng+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rh(i){let e={rng:i>>>0};return()=>lm(e)}var Xt=24,qt=14;function lt(i){let e=Rh(i.seed||1),t=Array.from({length:qt},()=>Array(Xt).fill(".")),n=(c,a)=>c>=0&&a>=0&&c<Xt&&a<qt,r=(c,a,f)=>n(c,a)&&(t[a][c]=f),s=(c,a)=>n(c,a)?t[a][c]:"X";if(i.land){for(let c=0;c<qt;c++)for(let a=0;a<Xt;a++)r(a,c,"W");for(let[c,a,f,d]of i.land)for(let l=a;l<=d;l++)for(let u=c;u<=f;u++)r(u,l,".")}if(i.sea){let{side:c,depth:a}=i.sea,f=c==="left"||c==="right"?qt:Xt,d=a;for(let l=0;l<f;l++){d=Math.max(1,Math.min(a+2,d+(e()<.5?-1:1)*(e()<.55?1:0)));for(let u=0;u<d;u++)c==="left"?r(u,l,"W"):c==="right"?r(Xt-1-u,l,"W"):c==="top"?r(l,u,"W"):r(l,qt-1-u,"W")}}if(i.river){let{axis:c,at:a,w:f=2}=i.river,d=a,l=c==="v"?qt:Xt;for(let u=0;u<l;u++){u%3===0&&e()<.5&&(d+=e()<.5?-1:1),d=Math.max(a-1,Math.min(a+1,d));for(let _=0;_<f;_++)c==="v"?r(d+_,u,"W"):r(u,d+_,"W")}}if(i.mountains){let{side:c,depth:a=1,from:f=0,to:d=c==="left"||c==="right"?qt-1:Xt-1}=i.mountains;for(let l=f;l<=d;l++){let u=a+(e()<.35?1:0);for(let _=0;_<u;_++)c==="top"?r(l,_,"M"):c==="bottom"?r(l,qt-1-_,"M"):r(c==="left"?_:Xt-1-_,l,"M")}}if(i.wall){let{side:c,w:a=3}=i.wall;for(let f=0;f<qt;f++)for(let d=0;d<a;d++)c==="right"?r(Xt-1-d,f,"K"):c==="left"&&r(d,f,"K");if(c==="top"||c==="bottom")for(let f=0;f<Xt;f++)for(let d=0;d<a;d++)r(f,c==="top"?d:qt-1-d,"K")}for(let[c,a]of i.houses||[])r(c,a,"H");for(let[c,a]of i.jang||[])r(c,a,"J");let o=i.trees??.45;for(let c=0;c<Xt;c++)for(let a of[0,qt-1])s(c,a)==="."&&e()<o&&r(c,a,"T");for(let c=0;c<qt;c++)for(let a of[0,Xt-1])s(a,c)==="."&&e()<o*.6&&r(a,c,"T");let h=(c,a)=>{for(let f=0;f<c;f++){let d=Math.floor(e()*Xt),l=Math.floor(e()*qt);s(d,l)==="."&&r(d,l,a)}};return h(i.inner??4,"T"),h(i.rocks??5,"R"),h(i.flowers??9,"f"),t.map(c=>c.join(""))}var fm=[["ash",1,0,1,.7],["sco",1,0,.75,.45],["tep",1,0,1.25,.9],["sam",2,1,5,1.6],["cav",2,2,4.4,1.1],["nin",2,3,4.6,1.2],["onm",2,4,5.2,2.2],["drm",2,4,5.4,3],["arm",3,6,13,2.6],["ram",3,7,17,3.6]];function Kl({seed:i,n:e,level:t,weights:n={},boss:r={},paths:s=1,budget:o=1}){let h=Rh(i),c=[];for(let a=1;a<=e;a++){let f=a/e,d=(12+t*1.6)*(.45+f*1.35)*o,l=fm.filter(([,T,C])=>C<=t&&(T===1||a>=(T===2?3:Math.ceil(e*.35)))),u=[],_=d,v=0,g=a<3?2:2+Math.floor(h()*2)+(f>.6?1:0);for(let T=0;T<g&&_>.5;T++){let C=l.map(B=>[B,(n[B[0]]??1)*(B[1]===1?1.4-f*.6:B[1]===2?.6+f:.3+f*1.2)]),y=C.reduce((B,[,K])=>B+K,0),b=h()*y,M=C[0][0];for(let[B,K]of C)if(b-=K,b<=0){M=B;break}let[E,w,,A,H]=M,D=T===g-1?_:_*(.3+h()*.35),Y=Math.max(1,Math.round(D/A));_-=Y*A;let z=Math.round(H*(1.1-f*.35)*10)/10,L=s>1?h()<.75?"a":String(Math.floor(h()*s)):null;u.push(`${E}${Y>1?`*${Y}@${z}`:""}${v?`+${v}`:""}${L!==null?`>${L}`:""}`),v+=Math.round(2+h()*4+(w>=2?2:0))}let p=r[a];if(p){let[T,C]=Array.isArray(p)?p:[p,0];u.unshift(`${T}${s>1?`>${C}`:""}`);for(let y=1;y<u.length;y++)u[y]=u[y].includes("+")?u[y].replace(/\+(\d+)/,(b,M)=>`+${+M+4}`):u[y].replace(/(>[0-9a])?$/,b=>`+4${b||""}`)}c.push(u.join(", "))}return c}var dm=[{id:"s1",name:"부산진 전투",date:"1592년 4월",season:"spring",base:"부산진성",desc:"임진년 4월, 왜군 선봉이 부산포에 상륙했다. 바다에서 올라오는 적을 부산진성 앞에서 막아내라.",region:{x:201,y:378},startGold:240,hpBase:1,hpGrowth:.1,unlockTowers:["haeinsa"],grid:["TTT..TT.....MMMMM...TTMM","T.........f.......R...TM","......................TT","..........R........f....","WW.....f................","WWW.......f.........T...","WWW....R.............R..","WWWW...........f......HH","WWWW..T..............fH.","WWWW.......f...........J","WWWWW..............R....","WWWWW...................","WWWWWW......T.....f....H","WWWWWWWTT...TT.....HHTTT"],paths:[[[-1,2],[5,2],[5,10],[11,10],[11,4],[17,4],[17,11],[23,11]]],waves:["ash*8@1.3","ash*10@1.1, sco*4@0.8+8","ash*8@1, tep*5@1.4+4","sco*10@0.6, ash*10@1+6","ash*12@0.9, sam*1+10","tep*8@1.1, ash*10@0.8+3, sco*6@0.5+12","sam*3@3, ash*12@0.8+2","drm*1, ash*14@0.6+1, sco*8@0.5+10","tep*12@0.8, sam*3@2.5+6","ash*18@0.6, sam*4@2+4, drm*2@6+8","sco*16@0.4, tep*10@0.8+6, sam*5@1.8+12","konishi, ash*16@0.7+2, sam*4@3+8"]},{id:"s2",name:"탄금대 전투",date:"1592년 4월",season:"summer",base:"탄금대 본진",desc:"신립 장군이 강을 등지고 배수진을 친 탄금대. 두 갈래로 몰려와 하나로 합쳐지는 왜군을 막아라.",region:{x:159,y:292},startGold:260,hpBase:1.12,hpGrowth:.1,unlockTowers:["seokguram"],grid:["TT....TTT....MMMMMM..TWW","T...........f........WWW","....f..R..............WW","......................WW","..T.......f.....R.....WW","......R..............WWW","..f..........f.......WWW","......................WW","..T.....R.......f.....WW","....f.......T........WWW","......................WW","........f...........TWWW","..R...........f.....TWWW","TTT...TTTT...TTTT...TTWW"],paths:[[[-1,3],[7,3],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]],[[-1,11],[7,11],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]]],waves:["ash*10@1>a","ash*8@1>0, sco*8@0.6>1+3","tep*10@1>a, ash*8@0.9>a+5","cav*3@2>a, ash*12@0.8>a+3","sam*3@2.5>a, sco*10@0.5>a+4","nin*3@2>a, ash*14@0.7>a+3","drm*2@4>a, ash*16@0.6>a+1, tep*8@1>a+8","arm*1>0, sam*3@2>a+4, sco*10@0.5>a+8","cav*6@1.2>a, nin*4@1.5>a+8","ash*20@0.5>a, sam*5@1.8>a+5, drm*2@5>a+10","arm*2@5>a, tep*14@0.7>a+3","nin*6@1.2>a, cav*6@1.2>a+6, sco*14@0.4>a+12","sam*8@1.5>a, drm*3@4>a+2, ash*20@0.5>a+6","arm*4@3>a, cav*8@1>a+6, nin*6@1>a+12","kato>0, sam*6@2>a+4, ash*20@0.5>a+8, arm*2@5>a+14"]},{id:"s3",name:"한산도 대첩",date:"1592년 7월",season:"sea",base:"한산 수영",desc:"한산도 앞바다. 학익진에 쫓긴 왜 수군이 섬으로 상륙한다. 좁은 땅을 지혜롭게 써라.",region:{x:176,y:396},startGold:300,hpBase:1.12,hpGrowth:.1,unlockTowers:["gyeongbok"],grid:["WWWW..TT..WWW...TT.WWWWW","....................WWWW","WW.....f......R.....WWWW","WWW.f....WWW.....f..WWWW","WW..R...WWWWW.......WWWW","WW..................WWWW","WWW.....f....T.......WWW","WWW..WWW........WW...WWW","WWW..WWWW...f..WWW....WW","WWW.................f.WW","WWWWW..R....f.....T...WW","WWWWWWW..f.....WW.....HW","WWWWWWWWW...T.WWW.......","WWWWWWWWWWW....WWWT..HHH"],paths:[[[-1,1],[19,1],[19,5],[4,5],[4,9],[19,9],[19,12],[23,12]]],waves:["ash*12@0.9","sco*12@0.5, ash*8@1+6","onm*1, ash*14@0.7+2","tep*12@0.8, sam*2@3+6","cav*5@1.2, drm*1+6, ash*12@0.6+7","ram*1, sco*12@0.4+4","nin*5@1.3, onm*2@3+4, ash*14@0.6+6","sam*6@1.5, tep*12@0.7+5","arm*2@4, onm*2@4+2, ash*18@0.5+6","ram*2@6, cav*8@1+4, drm*2@5+8","nin*8@0.9, sam*6@1.4+6","arm*4@2.5, onm*3@3+3, tep*16@0.5+8","cav*12@0.7, drm*3@3+2, sco*20@0.3+8","ram*3@5, sam*8@1.2+4, nin*6@1+12","wakizaka, onm*3@3+3, arm*3@4+6, sam*8@1.2+10"]},{id:"s4",name:"행주대첩",date:"1593년 2월",season:"winter",base:"행주산성",desc:"눈 덮인 행주산성. 두 갈래 길로 3만 대군이 몰려온다. 협동이라면 한 사람이 한 길씩!",region:{x:110,y:270},startGold:390,hpBase:1.2,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT....MMMM....TTMMM","T.......f.........R...MM","..............T.......MM","....R...........f.....MM","..f.......T..........RMM","......................MM","..T.......f....R.......M","......R................M","...f..........T.......MM","...R..................MM","..T...........f......WWM","......f..........T..WWWW","...................WWWWW","TTT..TTT...TTTT..WWWWWWW"],paths:[[[-1,2],[9,2],[9,5],[16,5],[16,7],[21,7]],[[-1,12],[6,12],[6,9],[18,9],[18,7],[21,7]]],waves:["ash*8@1>0, ash*8@1>1","sco*8@0.6>0, tep*6@1.2>1+2","sam*2@3>0, ash*12@0.8>1+2","cav*4@1.5>1, ash*12@0.8>0+3","nin*4@1.5>0, onm*2@3>1+2, ash*12@0.7>a+6","arm*1>0, arm*1>1+2, sco*14@0.5>a+6","drm*2@3>a, sam*6@1.5>a+2","ram*1>0, cav*6@1>1+3, tep*12@0.6>a+8","onm*4@2>a, arm*3@3>a+3, ash*20@0.5>a+6","nin*8@0.9>a, sam*6@1.4>a+6, drm*2@4>a+10","ram*2@4>1, cav*10@0.8>0+2, sco*16@0.35>a+10","arm*5@2.5>a, onm*4@2.5>a+4, tep*16@0.5>a+8","sam*10@1.1>a, nin*8@0.9>a+6, drm*3@3>a+10","ram*3@4>a, arm*4@3>a+3, cav*10@0.7>a+10","onm*6@1.8>a, sam*12@0.9>a+3, ash*30@0.3>a+8","nin*14@0.6>a, arm*6@2>a+6, drm*4@3>a+10","ram*4@3.5>a, cav*14@0.6>a+4, sam*10@1>a+10, onm*4@2>a+14","ukita>0, arm*6@2.5>a+3, sam*12@1>a+8, nin*10@0.8>a+14"]},{id:"s5",name:"한양 수복",date:"1593년 4월",season:"autumn",base:"경복궁",desc:"도성을 되찾는 날. 한양으로 향하는 두 길을 모두 지키고, 침략을 꾸민 책사를 물리쳐라.",region:{x:133,y:255},startGold:450,hpBase:1.26,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT..MMMMM....TTTKKK","T......f.........R...KKK","..R.......f..........KKK","......T..............KKK","...........f.........KKK","..f...R........f.....KKK",".....................KKK","...T.........R.......KKK","..................f..KKK",".f......T..........T.KKK","...R..............f..KKK",".......f............TKKK","..T..............f...KKK","TTT..TTTT..TTTT...TTTKKK"],paths:[[[3,-1],[3,4],[9,4],[9,1],[15,1],[15,6],[20,6]],[[-1,11],[5,11],[5,8],[12,8],[12,12],[18,12],[18,6],[20,6]]],waves:["ash*12@0.8>a","sco*14@0.5>a, tep*8@1>a+5","sam*4@2>a, ash*14@0.6>a+3","cav*4@1.4>a, onm*2@3>a+5","nin*4@1.4>a, drm*1>a+3, ash*16@0.5>a+6","arm*3@3>a, tep*14@0.6>a+4","ram*2@4>a, sam*6@1.4>a+4, sco*16@0.35>a+10","onm*3@2>a, cav*8@0.9>a+3, nin*5@1.1>a+10","arm*5@2.4>a, drm*3@3>a+2, ash*24@0.4>a+6","konishi>0, sam*8@1.2>a+3, tep*16@0.5>a+8","nin*12@0.7>a, cav*10@0.8>a+6","ram*4@3>a, onm*5@2>a+3, sam*10@1>a+8","arm*8@1.8>a, drm*4@3>a+2, sco*24@0.3>a+8","cav*16@0.6>a, nin*12@0.7>a+6, onm*4@2>a+12","kato>1, arm*6@2>a+3, sam*12@0.9>a+8","ram*5@3>a, sam*14@0.8>a+4, tep*20@0.4>a+12","nin*16@0.5>a, onm*6@1.6>a+4, cav*14@0.6>a+10","arm*10@1.4>a, drm*5@2.5>a+3, sam*16@0.7>a+8","wakizaka>0, ukita>1+4, ram*4@3>a+8, nin*14@0.6>a+12","ishida>0, arm*8@2>a+4, sam*16@0.8>a+10, onm*6@2>a+16, cav*16@0.6>a+20"]}],um={s6:{id:"s6",name:"동래성 전투",date:"1592년 4월",season:"spring",base:"동래성",desc:'"싸워 죽기는 쉬우나 길을 내주기는 어렵다." 송상현 부사가 지킨 동래성. 성벽 앞 굽은 길에서 왜군을 막아라.',region:{x:214,y:364},startGold:250,hpGrowth:.1,grid:lt({seed:6,mountains:{side:"top",depth:1,from:0,to:8},wall:{side:"right",w:3},houses:[[17,1],[18,1],[17,12],[18,12]],jang:[[20,4]]}),paths:[[[-1,3],[5,3],[5,10],[10,10],[10,2],[15,2],[15,11],[19,11],[19,6],[20,6]]],gen:{level:1,n:12,boss:{12:"so"},weights:{sco:1.4}}},s7:{id:"s7",name:"상주 전투",date:"1592년 4월",season:"spring",base:"상주 진영",desc:"북천을 건너 두 갈래로 몰려오는 왜군. 다리목에서 하나로 합쳐지는 길을 노려라.",region:{x:172,y:313},startGold:260,hpGrowth:.1,grid:lt({seed:7,river:{axis:"v",at:10,w:2},mountains:{side:"right",depth:1},houses:[[20,11],[21,11]],jang:[[20,6]]}),paths:[[[-1,2],[7,2],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]],[[-1,11],[7,11],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]]],gen:{level:2,n:14,boss:{14:["kuroda",0]}}},s8:{id:"s8",name:"옥포 해전",date:"1592년 5월",season:"sea",base:"옥포 수영",desc:"이순신 함대의 첫 승리. 옥포 앞바다에서 뭍으로 기어오르는 왜 수군을 포구에서 쓸어버려라.",region:{x:189,y:390},startGold:280,hpGrowth:.1,grid:lt({seed:8,land:[[0,0,17,13],[18,3,20,10]],trees:.3,houses:[[1,11],[2,12],[1,12]]}),paths:[[[24,1],[15,1],[15,5],[9,5],[9,1],[3,1],[3,9],[12,9],[12,12],[4,12]]],gen:{level:3,n:14,boss:{14:"todo"},weights:{sco:1.3,tep:1.3}},unlockTowers:["namhansan"]},s9:{id:"s9",name:"사천 해전",date:"1592년 5월",season:"sea",base:"사천 포구",desc:"거북선이 처음 바다에 나선 날. 두 물길로 들어오는 왜선을 막아내라.",region:{x:160,y:381},startGold:290,hpGrowth:.1,grid:lt({seed:9,sea:{side:"bottom",depth:2},mountains:{side:"top",depth:1,from:6,to:17},houses:[[1,3],[1,4]]}),paths:[[[24,3],[17,3],[17,7],[9,7],[9,3],[3,3],[3,6],[1,6]],[[24,10],[14,10],[14,7],[9,7],[9,3],[3,3],[3,6],[1,6]]],gen:{level:4,n:15,boss:{8:["todo",1],15:["kuki",0]},weights:{cav:.6}}},s10:{id:"s10",name:"평양성 전투",date:"1592년 6월",season:"summer",base:"평양성",desc:"대동강을 사이에 둔 평양성. 강을 건너오는 다리 두 곳을 모두 지켜라.",region:{x:92,y:182},startGold:300,hpGrowth:.1,grid:lt({seed:10,river:{axis:"h",at:6,w:2},wall:{side:"left",w:2},houses:[[3,1],[4,1],[3,12]]}),paths:[[[24,11],[17,11],[17,2],[8,2],[8,9],[2,9]],[[24,2],[20,2],[20,11],[12,11],[12,9],[2,9]]],gen:{level:5,n:15,boss:{15:["konishi",0]}}},s11:{id:"s11",name:"부산포 해전",date:"1592년 9월",season:"sea",base:"부산포",desc:"왜군의 본거지 부산포를 들이친다. 끝없이 쏟아지는 왜 수군을 길고 긴 해안길에서 버텨라.",region:{x:214,y:386},startGold:320,hpGrowth:.1,grid:lt({seed:11,sea:{side:"left",depth:3},sea2:null,mountains:{side:"right",depth:1},houses:[[20,12],[21,12]]}),paths:[[[4,-1],[4,3],[12,3],[12,1],[19,1],[19,6],[7,6],[7,10],[16,10],[16,12],[20,12]]],gen:{level:6,n:16,boss:{9:"todo",16:"kuki"},weights:{sco:1.2,nin:1.2}}},s12:{id:"s12",name:"진주대첩",date:"1592년 10월",season:"autumn",base:"진주성",desc:"김시민 목사와 3,800 군사가 3만 대군을 막아낸 진주성. 남강을 등진 성으로 세 방향에서 몰려온다.",region:{x:157,y:368},startGold:330,hpGrowth:.1,grid:lt({seed:12,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[20,3],[20,10]]}),paths:[[[-1,2],[4,2],[4,5],[9,5],[9,1],[15,1],[15,5],[18,5],[18,7],[21,7]],[[-1,9],[4,9],[4,11],[11,11],[11,8],[15,8],[15,10],[18,10],[18,7],[21,7]]],gen:{level:7,n:16,boss:{16:["kuroda",1]},weights:{ram:1.5,drm:1.3}}},s13:{id:"s13",name:"평양성 탈환",date:"1593년 1월",season:"winter",base:"평양 본진",desc:"조명 연합군의 반격. 눈 덮인 평양 들판에서 성을 빠져나와 역습하는 왜군을 막아라.",region:{x:100,y:176},startGold:340,hpGrowth:.1,grid:lt({seed:13,mountains:{side:"bottom",depth:1},river:{axis:"v",at:15,w:1},houses:[[1,6],[1,7]]}),paths:[[[24,3],[19,3],[19,9],[12,9],[12,3],[6,3],[6,7],[2,7]],[[24,11],[16,11],[16,9],[12,9],[12,3],[6,3],[6,7],[2,7]]],gen:{level:8,n:16,boss:{8:["so",1],16:["konishi",0]},weights:{arm:1.4}},unlockTowers:["seokbinggo"]},s14:{id:"s14",name:"진주성 2차 전투",date:"1593년 6월",season:"summer",base:"촉석루",desc:"복수를 벼른 왜군 대군이 다시 진주성으로. 세 길로 몰려오는 적을 촉석루 앞에서 막아라.",region:{x:166,y:372},startGold:380,hpGrowth:.1,grid:lt({seed:14,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[19,3],[19,10]]}),paths:[[[-1,1],[6,1],[6,4],[11,4],[11,1],[16,1],[16,4],[19,4],[19,6],[21,6]],[[-1,11],[6,11],[6,8],[11,8],[11,11],[16,11],[16,8],[19,8],[19,6],[21,6]],[[-1,6],[21,6]]],gen:{level:10,n:18,boss:{9:["kuroda",0],18:["kato",1]},weights:{ram:1.3,sam:1.3}},unlockTowers:["bulguksa"]},s15:{id:"s15",name:"칠천량의 밤",date:"1597년 7월",season:"sea",base:"한산 수영",desc:"칠천량에서 조선 수군이 무너진 밤. 살아남은 배를 지키며 밤바다로 밀려드는 왜군을 버텨라.",region:{x:184,y:386},startGold:380,hpGrowth:.1,night:!0,grid:lt({seed:15,land:[[0,0,23,3],[2,5,21,7],[0,10,23,13]],trees:.3}),paths:[[[24,1],[2,1],[2,6],[21,6],[21,11],[5,11]]],gen:{level:11,n:16,boss:{8:"wakizaka",16:"todo"},weights:{nin:1.8,sco:1.2}}},s16:{id:"s16",name:"남원성 전투",date:"1597년 8월",season:"summer",base:"남원성",desc:"정유재란, 호남으로 가는 길목 남원성. 성을 둘러싼 왜군이 네 모퉁이를 돌아 성문으로 몰려온다.",region:{x:147,y:363},startGold:400,hpGrowth:.1,grid:lt({seed:16,mountains:{side:"left",depth:1},houses:[[11,6],[12,6],[11,7]]}),paths:[[[-1,1],[21,1],[21,12],[3,12],[3,4],[18,4],[18,9],[12,9]]],gen:{level:12,n:18,boss:{9:"so",18:"ukita"},weights:{ram:1.4}}},s17:{id:"s17",name:"직산 전투",date:"1597년 9월",season:"autumn",base:"직산 진영",desc:"한양으로 북상하는 왜군을 조명 연합군이 막아선 들판. 넓은 들을 가로지르는 두 길을 모두 지켜라.",region:{x:139,y:289},startGold:420,hpGrowth:.1,grid:lt({seed:17,flowers:16,rocks:6,houses:[[22,1],[22,2]]}),paths:[[[-1,4],[4,4],[4,1],[10,1],[10,5],[14,5],[14,2],[19,2],[19,7],[22,7]],[[-1,10],[5,10],[5,12],[11,12],[11,9],[16,9],[16,11],[19,11],[19,7],[22,7]]],gen:{level:13,n:18,boss:{18:["kuroda",1]},weights:{cav:1.8,drm:1.2}}},s18:{id:"s18",name:"명량 대첩",date:"1597년 9월",season:"sea",base:"울돌목 진영",desc:'"신에게는 아직 열두 척의 배가 남아 있사옵니다." 거센 물살 울돌목, 133척의 왜선이 좁은 물길로 쏟아진다.',region:{x:111,y:405},startGold:440,hpGrowth:.1,grid:lt({seed:18,land:[[0,3,23,10]],trees:.2,rocks:3}),paths:[[[24,4],[15,4],[15,9],[9,9],[9,4],[3,4],[3,8],[1,8]]],gen:{level:14,n:20,boss:{20:"kurushima"},weights:{sco:2.2,ash:1.6,cav:1.4},budget:1.15}},s19:{id:"s19",name:"울산성 전투",date:"1597년 12월",season:"winter",base:"울산 진영",desc:"가토 기요마사가 쌓은 울산 왜성. 한겨울 성에서 뛰쳐나오는 철갑 부대를 막아라.",region:{x:210,y:357},startGold:460,hpGrowth:.1,grid:lt({seed:19,sea:{side:"right",depth:2},mountains:{side:"top",depth:1},houses:[[1,12],[2,12]]}),paths:[[[20,-1],[20,3],[15,3],[15,1],[10,1],[10,5],[5,5],[5,9],[9,9],[9,12],[2,12]],[[20,14],[20,10],[16,10],[16,7],[12,7],[12,9],[9,9],[9,12],[2,12]]],gen:{level:15,n:19,boss:{19:["kato",0]},weights:{arm:1.8,sam:1.2}}},s20:{id:"s20",name:"사천 왜성 전투",date:"1598년 10월",season:"autumn",base:"사천 진영",desc:"귀신 시마즈가 지키는 사천 왜성. 성문이 열리면 사나운 무사들이 두 갈래로 쏟아진다.",region:{x:168,y:378},startGold:480,hpGrowth:.1,grid:lt({seed:20,wall:{side:"left",w:2},sea:{side:"bottom",depth:1},houses:[[21,5],[22,5]]}),paths:[[[2,2],[7,2],[7,5],[11,5],[11,1],[16,1],[16,4],[19,4],[19,6],[22,6]],[[2,10],[6,10],[6,7],[11,7],[11,11],[16,11],[16,8],[19,8],[19,6],[22,6]]],gen:{level:16,n:20,boss:{10:["kurushima",1],20:["shimazu",0]},weights:{sam:1.6,cav:1.2}}},s21:{id:"s21",name:"순천 왜교성 전투",date:"1598년 11월",season:"autumn",base:"순천 진영",desc:"바다와 뭍에서 동시에 에워싼 왜교성. 성에서 뛰쳐나오는 고니시의 결사대를 막아라.",region:{x:151,y:388},startGold:500,hpGrowth:.1,grid:lt({seed:21,sea:{side:"bottom",depth:2},wall:{side:"right",w:2},houses:[[1,1],[2,1]]}),paths:[[[21,1],[16,1],[16,4],[12,4],[12,1],[7,1],[7,4],[3,4],[3,6],[1,6]],[[21,10],[17,10],[17,7],[12,7],[12,10],[7,10],[7,7],[3,7],[3,6],[1,6]]],gen:{level:17,n:20,boss:{10:["so",1],20:["konishi",0]},weights:{tep:1.4,nin:1.4}}},s22:{id:"s22",name:"노량 해전",date:"1598년 11월",season:"sea",base:"노량 수영",desc:'"나의 죽음을 적에게 알리지 말라." 7년 전쟁의 마지막 바다. 물러가는 왜 수군을 끝까지 쫓아 막아라.',region:{x:163,y:385},startGold:520,hpGrowth:.1,night:!0,grid:lt({seed:22,land:[[0,0,23,2],[0,5,23,8],[0,11,23,13]],trees:.3}),paths:[[[24,1],[3,1],[3,6],[20,6],[20,12],[1,12]]],gen:{level:18,n:21,boss:{11:"kuki",21:"shimazu"},weights:{sco:1.3,nin:1.5,cav:1.2}}},s23:{id:"s23",name:"대마도 정벌",date:"가상 · 1599년",season:"sea",base:"조선 수군 진영",desc:"세종 때처럼 다시 대마도로! 침략의 길잡이 섬에 상륙한 조선군 진영을 지켜라. (역사를 바꾼 가상 전장)",region:{x:226,y:412},startGold:540,hpGrowth:.1,grid:lt({seed:23,land:[[1,1,22,12]],trees:.5,inner:8,houses:[[20,2],[21,2],[20,3]]}),paths:[[[24,12],[18,12],[18,8],[12,8],[12,11],[5,11],[5,4],[16,4],[16,2],[21,2]]],gen:{level:19,n:21,boss:{11:"todo",21:"so"},weights:{nin:1.6,onm:1.4}}},s24:{id:"s24",name:"현해탄 상륙전",date:"가상 · 1599년",season:"summer",base:"상륙 진지",desc:"현해탄을 건너 규슈 바닷가에 발을 디뎠다. 사방에서 몰려드는 정예 무사들을 해변 진지에서 버텨라. (가상 전장)",region:{x:246,y:436},startGold:560,hpGrowth:.1,grid:lt({seed:24,sea:{side:"left",depth:2},mountains:{side:"right",depth:1},flowers:5}),paths:[[[22,-1],[22,2],[17,2],[17,5],[12,5],[12,1],[8,1],[8,4],[5,4],[5,6]],[[22,14],[22,11],[17,11],[17,8],[12,8],[12,12],[8,12],[8,8],[5,8],[5,6]]],gen:{level:21,n:22,boss:{11:["kuki",1],22:["ishida",0]},weights:{sam:1.5,arm:1.3,cav:1.2}}},s25:{id:"s25",name:"나고야성 최후의 결전",date:"가상 · 1599년",season:"autumn",base:"조선군 본진",desc:"침략의 본영 히젠 나고야성. 네 명의 대장을 차례로 꺾고 나면 마침내 그가 성문을 나선다. 초반에는 두 길이 갈라지기 전 굽이에 영웅을 배치하라. 마지막 결전에서는 은신 탐지를 유지하고, 기여가 적은 유산을 철거해 강한 단일 공격의 특화 유산에 재투자하라.",region:{x:246,y:452},startGold:600,hpGrowth:.1,finale:!0,grid:lt({seed:25,wall:{side:"top",w:1},mountains:{side:"bottom",depth:1},houses:[[1,6],[1,7],[2,6]]}),paths:[[[21,1],[21,5],[16,5],[16,2],[11,2],[11,5],[7,5],[7,2],[3,2],[3,7]],[[21,1],[21,9],[16,9],[16,12],[11,12],[11,9],[7,9],[7,12],[3,12],[3,7]]],gen:{level:23,n:24,weights:{sam:1.4,arm:1.3,onm:1.2},boss:{6:["konishi",0],12:["kato",1],17:["ukita",0],21:["shimazu",1]},final:"hideyoshi>0"}}},pm={s1:1,s6:2.26,s7:1.43,s2:1.78,s8:3.11,s9:1.14,s10:1.58,s3:1.63,s11:1.49,s12:1.14,s13:2.02,s4:1.65,s5:1.49,s14:1.38,s15:.97,s16:3.48,s17:2.76,s18:3.97,s19:3.68,s20:2.24,s21:3.2,s22:3.66,s23:4.3,s24:2.26,s25:2.85},gm=[{name:"제1장 · 임진년의 봄",stages:["s1","s6","s7","s2","s8"]},{name:"제2장 · 바다와 성",stages:["s9","s10","s3","s11","s12"]},{name:"제3장 · 반격",stages:["s13","s4","s5","s14","s15"]},{name:"제4장 · 정유재란",stages:["s16","s17","s18","s19","s20"]},{name:"제5장 · 최후의 결전",stages:["s21","s22","s23","s24","s25"]}];function mm(i){let e=i.gen,t=Kl({seed:_m(i.id),n:e.n,level:e.level,weights:e.weights,boss:e.boss,paths:i.paths.length,budget:e.budget||1});return e.final&&(t[t.length-1]=e.final),{unlockTowers:[],...i,waves:t}}function _m(i){let e=7;for(let t of i)e=e*31+t.charCodeAt(0)>>>0;return e}var Jl=Object.fromEntries([...dm.map(i=>[i.id,i]),...Object.values(um).map(i=>[i.id,mm(i)])]),Ih=gm.flatMap((i,e)=>i.stages.map(t=>({...Jl[t],chapter:e,hpBase:pm[t]??Jl[t].hpBase}))).map((i,e)=>({...i,bossHp:.9+.045*e})),Y_=Object.fromEntries(Ih.map(i=>[i.id,i]));function $l(i){return i.split(",").map(e=>{let t=e.trim(),n=t.match(/^([a-z_]+)(?:\*(\d+))?(?:@([\d.]+))?((?:[+>][\d.a]+)*)$/);if(!n)throw new Error("잘못된 웨이브 문법: "+t);let r=Zl[n[1]]||n[1],s=(n[4].match(/\+([\d.]+)/)||[])[1],o=(n[4].match(/>([0-9a])/)||[])[1];return{type:r,n:n[2]?+n[2]:1,gap:n[3]?+n[3]:1,delay:s?+s:0,path:o===void 0||o==="a"?"a":+o}})}var jl={volley:{name:"조총 일제사격",minStage:1,bonus:40,desc:"조총병이 추가로 투입되고, 조총 피해가 50% 증가한다.",counter:"영웅을 조총 사거리 밖에 두거나 궁수로 먼저 제거하라.",add:[{type:"teppo",n:8,gap:.6}],teppoDmg:1.5},night:{name:"야습(夜襲)",minStage:2,bonus:60,desc:"밤이 된다. 모든 유산 사거리 -15%, 시노비 4명 추가.",counter:"첨성대와 봉수 경보로 은신을 드러내라.",add:[{type:"ninja",n:4,gap:1.2}],rangeMult:.85},march:{name:"강행군",minStage:1,bonus:40,desc:"이번 파도 왜군 이동 속도 +25%, 체력 -10%.",counter:"보신각·해인사로 발을 묶어라.",speedMult:1.25,hpMult:.9},iron:{name:"철갑 행렬",minStage:1,bonus:50,desc:"이번 파도 왜군 갑옷 +15%p.",counter:"해인사로 갑옷을 깎고 신성·화기 피해로 상대하라.",armorAdd:.15},cavalry:{name:"기마 돌격",minStage:2,bonus:50,desc:"기마무사 6명이 뒤따라 돌격한다.",counter:"기병은 저지되지 않는다. 둔화와 범위 피해를 준비하라.",add:[{type:"cavalry",n:6,gap:1,delay:6}]},hex:{name:"음양 결계",minStage:3,bonus:50,desc:"음양사 3명 추가. 이번 파도 왜군 신성 저항 +20%p.",counter:"물리·화기 유산 비중을 높여라.",add:[{type:"onmyoji",n:3,gap:2,delay:3}],resistAdd:.2}};function Ql(i,e=null){if(e)return{enemy:[...new Set(e.enemy??[])],ally:[...new Set(e.ally??[])]};if(!i)return{enemy:[],ally:[]};let t=new Set,n=Math.max(1,Ih.findIndex(r=>r.id===i.id)+1);for(let r of i.waves??[])for(let s of $l(r))t.add(s.type);for(let r of Object.values(jl))if(r.minStage<=n)for(let s of r.add??[])t.add(s.type);for(let r of t){let s=ql[r];if(s)for(let o of[s.spawnOnDeath,s.boss?.summon,...s.boss?.phaseSummon??[]])o&&t.add(o.type)}return{enemy:[...t],ally:["militia","guard","elite","monk","courier","turtle"]}}var ef={yi_white:{path:"assets/3d/fixed/skins/yi_white-directions-v2.webp",width:1232,height:1277,frames:[{left:67,top:68,width:209,height:260,anchor:.502999,anchorY:1,referenceHeight:256.5},{left:385,top:71,width:181,height:254,anchor:.465024,anchorY:1,referenceHeight:256.5},{left:666,top:71,width:188,height:254,anchor:.514575,anchorY:1,referenceHeight:256.5},{left:951,top:68,width:200,height:259,anchor:.492754,anchorY:1,referenceHeight:256.5},{left:62,top:363,width:218,height:263,anchor:.572412,anchorY:1,referenceHeight:256.5},{left:380,top:364,width:188,height:260,anchor:.472593,anchorY:1,referenceHeight:256.5},{left:665,top:363,width:196,height:263,anchor:.516281,anchorY:1,referenceHeight:256.5},{left:957,top:364,width:204,height:262,anchor:.392027,anchorY:1,referenceHeight:256.5},{left:66,top:655,width:214,height:258,anchor:.561478,anchorY:1,referenceHeight:256.5},{left:380,top:656,width:184,height:259,anchor:.475719,anchorY:1,referenceHeight:256.5},{left:667,top:656,width:193,height:261,anchor:.487039,anchorY:1,referenceHeight:256.5},{left:951,top:657,width:211,height:257,anchor:.42222,anchorY:1,referenceHeight:256.5},{left:52,top:946,width:260,height:252,anchor:.462826,anchorY:1,referenceHeight:256.5},{left:377,top:948,width:228,height:254,anchor:.393381,anchorY:1,referenceHeight:256.5},{left:647,top:948,width:239,height:248,anchor:.546559,anchorY:1,referenceHeight:256.5},{left:933,top:946,width:256,height:250,anchor:.511141,anchorY:1,referenceHeight:256.5}]},yi_gold:{path:"assets/3d/fixed/skins/yi_gold-directions-v2.webp",width:1232,height:1277,frames:[{left:79,top:83,width:201,height:239,anchor:.5006,anchorY:1,referenceHeight:235.5},{left:385,top:83,width:180,height:232,anchor:.456632,anchorY:1,referenceHeight:235.5},{left:670,top:83,width:184,height:232,anchor:.509842,anchorY:1,referenceHeight:235.5},{left:972,top:83,width:181,height:239,anchor:.478022,anchorY:1,referenceHeight:235.5},{left:82,top:376,width:205,height:242,anchor:.564905,anchorY:1,referenceHeight:235.5},{left:387,top:375,width:185,height:244,anchor:.472981,anchorY:1,referenceHeight:235.5},{left:669,top:374,width:190,height:245,anchor:.498821,anchorY:1,referenceHeight:235.5},{left:970,top:374,width:183,height:244,anchor:.398078,anchorY:1,referenceHeight:235.5},{left:79,top:661,width:207,height:242,anchor:.585206,anchorY:1,referenceHeight:235.5},{left:384,top:661,width:178,height:244,anchor:.458584,anchorY:1,referenceHeight:235.5},{left:670,top:660,width:185,height:244,anchor:.502544,anchorY:1,referenceHeight:235.5},{left:963,top:661,width:199,height:242,anchor:.410266,anchorY:1,referenceHeight:235.5},{left:58,top:955,width:242,height:236,anchor:.45606,anchorY:1,referenceHeight:235.5},{left:371,top:956,width:214,height:241,anchor:.423276,anchorY:1,referenceHeight:235.5},{left:646,top:954,width:228,height:238,anchor:.508329,anchorY:1,referenceHeight:235.5},{left:948,top:957,width:229,height:234,anchor:.525121,anchorY:1,referenceHeight:235.5}]},sejong_blue:{path:"assets/3d/fixed/skins/sejong_blue-directions-v2.webp",width:1232,height:1277,frames:[{left:96,top:90,width:174,height:238,anchor:.505103,anchorY:1,referenceHeight:238},{left:400,top:91,width:153,height:237,anchor:.464448,anchorY:1,referenceHeight:238},{left:678,top:90,width:149,height:238,anchor:.530764,anchorY:1,referenceHeight:238},{left:969,top:88,width:163,height:240,anchor:.476784,anchorY:1,referenceHeight:238},{left:87,top:387,width:178,height:246,anchor:.521949,anchorY:1,referenceHeight:238},{left:386,top:386,width:164,height:253,anchor:.498383,anchorY:1,referenceHeight:238},{left:684,top:387,width:164,height:253,anchor:.512865,anchorY:1,referenceHeight:238},{left:973,top:386,width:174,height:251,anchor:.466586,anchorY:1,referenceHeight:238},{left:76,top:681,width:190,height:249,anchor:.548796,anchorY:1,referenceHeight:238},{left:396,top:682,width:161,height:249,anchor:.481071,anchorY:1,referenceHeight:238},{left:689,top:681,width:160,height:252,anchor:.514123,anchorY:1,referenceHeight:238},{left:971,top:680,width:181,height:256,anchor:.450948,anchorY:1,referenceHeight:238},{left:93,top:967,width:197,height:238,anchor:.411903,anchorY:1,referenceHeight:238},{left:377,top:969,width:197,height:241,anchor:.408948,anchorY:1,referenceHeight:238},{left:660,top:972,width:206,height:238,anchor:.59139,anchorY:1,referenceHeight:238},{left:938,top:968,width:197,height:236,anchor:.605131,anchorY:1,referenceHeight:238}]},sejong_gold:{path:"assets/3d/fixed/skins/sejong_gold-directions-v2.webp",width:1232,height:1277,frames:[{left:103,top:87,width:186,height:248,anchor:.512843,anchorY:1,referenceHeight:247},{left:404,top:87,width:153,height:246,anchor:.467145,anchorY:1,referenceHeight:247},{left:666,top:87,width:160,height:245,anchor:.527329,anchorY:1,referenceHeight:247},{left:955,top:86,width:167,height:250,anchor:.458335,anchorY:1,referenceHeight:247},{left:94,top:386,width:190,height:255,anchor:.508472,anchorY:1,referenceHeight:247},{left:398,top:388,width:172,height:255,anchor:.497175,anchorY:1,referenceHeight:247},{left:666,top:386,width:165,height:259,anchor:.521952,anchorY:1,referenceHeight:247},{left:955,top:390,width:178,height:256,anchor:.476612,anchorY:1,referenceHeight:247},{left:85,top:688,width:202,height:253,anchor:.550913,anchorY:1,referenceHeight:247},{left:398,top:687,width:165,height:251,anchor:.500212,anchorY:1,referenceHeight:247},{left:668,top:686,width:164,height:255,anchor:.515579,anchorY:1,referenceHeight:247},{left:957,top:690,width:187,height:258,anchor:.449307,anchorY:1,referenceHeight:247},{left:93,top:978,width:209,height:239,anchor:.41347,anchorY:1,referenceHeight:247},{left:384,top:978,width:205,height:244,anchor:.418648,anchorY:1,referenceHeight:247},{left:646,top:978,width:202,height:244,anchor:.575493,anchorY:1,referenceHeight:247},{left:930,top:977,width:203,height:240,anchor:.598142,anchorY:1,referenceHeight:247}]},eulji_iron:{path:"assets/3d/fixed/skins/eulji_iron-directions-v1.webp",width:1232,height:1277,frames:[{left:59,top:94,width:167,height:208,anchor:.571386,anchorY:1,referenceHeight:207.5},{left:376,top:95,width:170,height:207,anchor:.499112,anchorY:1,referenceHeight:207.5},{left:695,top:94,width:165,height:205,anchor:.493816,anchorY:1,referenceHeight:207.5},{left:1011,top:94,width:162,height:208,anchor:.447838,anchorY:1,referenceHeight:207.5},{left:55,top:395,width:182,height:231,anchor:.656626,anchorY:1,referenceHeight:207.5},{left:376,top:396,width:182,height:230,anchor:.503934,anchorY:1,referenceHeight:207.5},{left:690,top:394,width:178,height:235,anchor:.46906,anchorY:1,referenceHeight:207.5},{left:1010,top:398,width:174,height:230,anchor:.307783,anchorY:1,referenceHeight:207.5},{left:57,top:702,width:180,height:216,anchor:.657381,anchorY:1,referenceHeight:207.5},{left:376,top:702,width:183,height:222,anchor:.428624,anchorY:1,referenceHeight:207.5},{left:686,top:703,width:182,height:223,anchor:.531088,anchorY:1,referenceHeight:207.5},{left:1013,top:704,width:170,height:214,anchor:.350108,anchorY:1,referenceHeight:207.5},{left:56,top:996,width:244,height:199,anchor:.424997,anchorY:1,referenceHeight:207.5},{left:371,top:1e3,width:220,height:205,anchor:.404568,anchorY:1,referenceHeight:207.5},{left:647,top:999,width:221,height:204,anchor:.568404,anchorY:1,referenceHeight:207.5},{left:943,top:992,width:241,height:203,anchor:.558682,anchorY:1,referenceHeight:207.5}]},eulji_gold:{path:"assets/3d/fixed/skins/eulji_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:57,top:92,width:171,height:211,anchor:.560129,anchorY:1,referenceHeight:210.5},{left:381,top:90,width:174,height:213,anchor:.500873,anchorY:1,referenceHeight:210.5},{left:681,top:91,width:171,height:209,anchor:.503765,anchorY:1,referenceHeight:210.5},{left:1009,top:92,width:170,height:210,anchor:.442674,anchorY:1,referenceHeight:210.5},{left:48,top:373,width:184,height:233,anchor:.610114,anchorY:1,referenceHeight:210.5},{left:379,top:373,width:177,height:233,anchor:.530131,anchorY:1,referenceHeight:210.5},{left:681,top:378,width:177,height:233,anchor:.48567,anchorY:1,referenceHeight:210.5},{left:1003,top:374,width:182,height:232,anchor:.362626,anchorY:1,referenceHeight:210.5},{left:55,top:688,width:184,height:221,anchor:.631223,anchorY:1,referenceHeight:210.5},{left:376,top:683,width:184,height:228,anchor:.422585,anchorY:1,referenceHeight:210.5},{left:680,top:691,width:183,height:228,anchor:.530534,anchorY:1,referenceHeight:210.5},{left:1e3,top:686,width:179,height:220,anchor:.383177,anchorY:1,referenceHeight:210.5},{left:53,top:988,width:247,height:205,anchor:.419221,anchorY:1,referenceHeight:210.5},{left:375,top:990,width:223,height:210,anchor:.396568,anchorY:1,referenceHeight:210.5},{left:638,top:988,width:226,height:210,anchor:.566218,anchorY:1,referenceHeight:210.5},{left:933,top:988,width:246,height:203,anchor:.570058,anchorY:1,referenceHeight:210.5}]},gang_crimson:{path:"assets/3d/fixed/skins/gang_crimson-directions-v1.webp",width:1232,height:1277,frames:[{left:29,top:31,width:262,height:297,anchor:.547801,anchorY:1,referenceHeight:294},{left:344,top:32,width:261,height:293,anchor:.494162,anchorY:1,referenceHeight:294},{left:674,top:34,width:237,height:292,anchor:.453607,anchorY:1,referenceHeight:294},{left:950,top:33,width:265,height:295,anchor:.482616,anchorY:1,referenceHeight:294},{left:26,top:340,width:261,height:298,anchor:.59419,anchorY:1,referenceHeight:294},{left:353,top:339,width:226,height:302,anchor:.57606,anchorY:1,referenceHeight:294},{left:670,top:340,width:235,height:302,anchor:.428216,anchorY:1,referenceHeight:294},{left:954,top:340,width:259,height:297,anchor:.369767,anchorY:1,referenceHeight:294},{left:36,top:655,width:236,height:286,anchor:.615482,anchorY:1,referenceHeight:294},{left:343,top:651,width:222,height:295,anchor:.537968,anchorY:1,referenceHeight:294},{left:683,top:653,width:214,height:295,anchor:.444902,anchorY:1,referenceHeight:294},{left:976,top:656,width:229,height:292,anchor:.345983,anchorY:1,referenceHeight:294},{left:23,top:961,width:285,height:267,anchor:.467391,anchorY:1,referenceHeight:294},{left:334,top:959,width:280,height:268,anchor:.454773,anchorY:1,referenceHeight:294},{left:647,top:958,width:263,height:271,anchor:.531438,anchorY:1,referenceHeight:294},{left:946,top:965,width:270,height:263,anchor:.462578,anchorY:1,referenceHeight:294}]},gang_gold:{path:"assets/3d/fixed/skins/gang_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:26,top:30,width:266,height:297,anchor:.545031,anchorY:1,referenceHeight:294},{left:342,top:31,width:262,height:292,anchor:.492586,anchorY:1,referenceHeight:294},{left:673,top:33,width:240,height:292,anchor:.464078,anchorY:1,referenceHeight:294},{left:949,top:32,width:270,height:296,anchor:.48249,anchorY:1,referenceHeight:294},{left:27,top:338,width:260,height:300,anchor:.588292,anchorY:1,referenceHeight:294},{left:355,top:339,width:225,height:302,anchor:.581552,anchorY:1,referenceHeight:294},{left:670,top:340,width:235,height:302,anchor:.426124,anchorY:1,referenceHeight:294},{left:955,top:339,width:261,height:298,anchor:.369495,anchorY:1,referenceHeight:294},{left:36,top:657,width:236,height:284,anchor:.616726,anchorY:1,referenceHeight:294},{left:343,top:653,width:223,height:293,anchor:.542092,anchorY:1,referenceHeight:294},{left:683,top:653,width:214,height:295,anchor:.444854,anchorY:1,referenceHeight:294},{left:974,top:655,width:235,height:292,anchor:.350274,anchorY:1,referenceHeight:294},{left:24,top:959,width:282,height:267,anchor:.471659,anchorY:1,referenceHeight:294},{left:329,top:958,width:284,height:269,anchor:.462414,anchorY:1,referenceHeight:294},{left:642,top:957,width:272,height:273,anchor:.531699,anchorY:1,referenceHeight:294},{left:947,top:964,width:270,height:261,anchor:.459931,anchorY:1,referenceHeight:294}]},gwon_hill:{path:"assets/3d/fixed/skins/gwon_hill-directions-v1.webp",width:1254,height:1254,frames:[{left:76,top:59,width:223,height:254,anchor:.534367,anchorY:1,referenceHeight:255},{left:392,top:58,width:182,height:256,anchor:.515826,anchorY:1,referenceHeight:255},{left:674,top:59,width:192,height:252,anchor:.466782,anchorY:1,referenceHeight:255},{left:963,top:58,width:220,height:257,anchor:.456555,anchorY:1,referenceHeight:255},{left:80,top:347,width:219,height:261,anchor:.518259,anchorY:1,referenceHeight:255},{left:388,top:349,width:192,height:263,anchor:.493011,anchorY:1,referenceHeight:255},{left:688,top:350,width:186,height:261,anchor:.443,anchorY:1,referenceHeight:255},{left:962,top:347,width:219,height:262,anchor:.47598,anchorY:1,referenceHeight:255},{left:72,top:639,width:223,height:261,anchor:.553839,anchorY:1,referenceHeight:255},{left:381,top:640,width:196,height:263,anchor:.484528,anchorY:1,referenceHeight:255},{left:685,top:640,width:193,height:262,anchor:.491582,anchorY:1,referenceHeight:255},{left:966,top:639,width:223,height:263,anchor:.44936,anchorY:1,referenceHeight:255},{left:50,top:942,width:274,height:240,anchor:.452655,anchorY:1,referenceHeight:255},{left:365,top:941,width:245,height:241,anchor:.394156,anchorY:1,referenceHeight:255},{left:647,top:942,width:240,height:240,anchor:.568054,anchorY:1,referenceHeight:255},{left:931,top:943,width:276,height:241,anchor:.535279,anchorY:1,referenceHeight:255}]},gwon_gold:{path:"assets/3d/fixed/skins/gwon_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:68,top:61,width:231,height:264,anchor:.524076,anchorY:1,referenceHeight:263.5},{left:385,top:62,width:194,height:263,anchor:.523322,anchorY:1,referenceHeight:263.5},{left:655,top:64,width:199,height:261,anchor:.461837,anchorY:1,referenceHeight:263.5},{left:945,top:60,width:219,height:267,anchor:.466867,anchorY:1,referenceHeight:263.5},{left:66,top:353,width:228,height:266,anchor:.527961,anchorY:1,referenceHeight:263.5},{left:381,top:357,width:194,height:264,anchor:.474564,anchorY:1,referenceHeight:263.5},{left:670,top:358,width:193,height:263,anchor:.470551,anchorY:1,referenceHeight:263.5},{left:945,top:353,width:229,height:268,anchor:.460764,anchorY:1,referenceHeight:263.5},{left:59,top:656,width:232,height:269,anchor:.557458,anchorY:1,referenceHeight:263.5},{left:378,top:662,width:201,height:267,anchor:.45728,anchorY:1,referenceHeight:263.5},{left:661,top:663,width:196,height:265,anchor:.525769,anchorY:1,referenceHeight:263.5},{left:947,top:657,width:230,height:270,anchor:.443978,anchorY:1,referenceHeight:263.5},{left:48,top:968,width:282,height:247,anchor:.440406,anchorY:1,referenceHeight:263.5},{left:367,top:971,width:244,height:245,anchor:.375811,anchorY:1,referenceHeight:263.5},{left:633,top:972,width:235,height:243,anchor:.580245,anchorY:1,referenceHeight:263.5},{left:912,top:968,width:274,height:245,anchor:.550714,anchorY:1,referenceHeight:263.5}]},gwak_black:{path:"assets/3d/fixed/skins/gwak_black-directions-v1.webp",width:1230,height:1278,frames:[{left:84,top:74,width:172,height:248,anchor:.492582,anchorY:1,referenceHeight:246.5},{left:402,top:73,width:148,height:246,anchor:.474569,anchorY:1,referenceHeight:246.5},{left:680,top:74,width:151,height:245,anchor:.500797,anchorY:1,referenceHeight:246.5},{left:972,top:74,width:166,height:247,anchor:.486733,anchorY:1,referenceHeight:246.5},{left:80,top:383,width:180,height:250,anchor:.537712,anchorY:1,referenceHeight:246.5},{left:397,top:382,width:165,height:255,anchor:.467086,anchorY:1,referenceHeight:246.5},{left:678,top:383,width:171,height:251,anchor:.517215,anchorY:1,referenceHeight:246.5},{left:973,top:383,width:184,height:249,anchor:.399116,anchorY:1,referenceHeight:246.5},{left:71,top:683,width:193,height:254,anchor:.53595,anchorY:1,referenceHeight:246.5},{left:392,top:685,width:176,height:256,anchor:.432033,anchorY:1,referenceHeight:246.5},{left:676,top:688,width:184,height:250,anchor:.489655,anchorY:1,referenceHeight:246.5},{left:971,top:684,width:195,height:255,anchor:.452416,anchorY:1,referenceHeight:246.5},{left:76,top:984,width:219,height:240,anchor:.427036,anchorY:1,referenceHeight:246.5},{left:387,top:973,width:190,height:256,anchor:.43596,anchorY:1,referenceHeight:246.5},{left:675,top:977,width:189,height:252,anchor:.538061,anchorY:1,referenceHeight:246.5},{left:947,top:985,width:212,height:239,anchor:.550277,anchorY:1,referenceHeight:246.5}]},gwak_gold:{path:"assets/3d/fixed/skins/gwak_gold-directions-v1.webp",width:1230,height:1278,frames:[{left:68,top:52,width:191,height:267,anchor:.493775,anchorY:1,referenceHeight:266.5},{left:387,top:50,width:161,height:269,anchor:.459058,anchorY:1,referenceHeight:266.5},{left:677,top:53,width:169,height:265,anchor:.518178,anchorY:1,referenceHeight:266.5},{left:970,top:53,width:177,height:266,anchor:.47891,anchorY:1,referenceHeight:266.5},{left:66,top:365,width:194,height:273,anchor:.552925,anchorY:1,referenceHeight:266.5},{left:373,top:364,width:181,height:281,anchor:.469801,anchorY:1,referenceHeight:266.5},{left:677,top:364,width:185,height:277,anchor:.521707,anchorY:1,referenceHeight:266.5},{left:979,top:364,width:196,height:273,anchor:.382924,anchorY:1,referenceHeight:266.5},{left:66,top:676,width:204,height:268,anchor:.534367,anchorY:1,referenceHeight:266.5},{left:375,top:676,width:189,height:275,anchor:.426754,anchorY:1,referenceHeight:266.5},{left:673,top:678,width:192,height:266,anchor:.517008,anchorY:1,referenceHeight:266.5},{left:962,top:677,width:204,height:270,anchor:.44875,anchorY:1,referenceHeight:266.5},{left:56,top:973,width:238,height:257,anchor:.424246,anchorY:1,referenceHeight:266.5},{left:368,top:961,width:210,height:274,anchor:.436976,anchorY:1,referenceHeight:266.5},{left:650,top:963,width:215,height:277,anchor:.547014,anchorY:1,referenceHeight:266.5},{left:941,top:973,width:231,height:260,anchor:.552417,anchorY:1,referenceHeight:266.5}]},ahn_militia:{path:"assets/3d/fixed/skins/ahn_militia-directions-v1.webp",width:1232,height:1277,frames:[{left:84,top:77,width:166,height:244,anchor:.518786,anchorY:1,referenceHeight:244.5},{left:389,top:78,width:174,height:243,anchor:.500173,anchorY:1,referenceHeight:244.5},{left:679,top:78,width:172,height:245,anchor:.469344,anchorY:1,referenceHeight:244.5},{left:986,top:76,width:159,height:245,anchor:.479465,anchorY:1,referenceHeight:244.5},{left:77,top:374,width:168,height:249,anchor:.527389,anchorY:1,referenceHeight:244.5},{left:388,top:375,width:171,height:256,anchor:.414847,anchorY:1,referenceHeight:244.5},{left:698,top:375,width:157,height:255,anchor:.512197,anchorY:1,referenceHeight:244.5},{left:993,top:373,width:160,height:253,anchor:.467324,anchorY:1,referenceHeight:244.5},{left:80,top:677,width:170,height:246,anchor:.510671,anchorY:1,referenceHeight:244.5},{left:387,top:677,width:173,height:253,anchor:.4727,anchorY:1,referenceHeight:244.5},{left:700,top:677,width:156,height:254,anchor:.468309,anchorY:1,referenceHeight:244.5},{left:989,top:676,width:166,height:250,anchor:.466436,anchorY:1,referenceHeight:244.5},{left:73,top:979,width:232,height:232,anchor:.437488,anchorY:1,referenceHeight:244.5},{left:376,top:977,width:214,height:233,anchor:.430029,anchorY:1,referenceHeight:244.5},{left:649,top:976,width:209,height:235,anchor:.541053,anchorY:1,referenceHeight:244.5},{left:936,top:976,width:227,height:240,anchor:.573105,anchorY:1,referenceHeight:244.5}]},ahn_gold:{path:"assets/3d/fixed/skins/ahn_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:77,top:67,width:172,height:254,anchor:.523402,anchorY:1,referenceHeight:250.5},{left:379,top:71,width:174,height:246,anchor:.529271,anchorY:1,referenceHeight:250.5},{left:689,top:72,width:173,height:248,anchor:.464005,anchorY:1,referenceHeight:250.5},{left:986,top:68,width:161,height:253,anchor:.463834,anchorY:1,referenceHeight:250.5},{left:74,top:377,width:167,height:253,anchor:.564375,anchorY:1,referenceHeight:250.5},{left:385,top:378,width:171,height:255,anchor:.41694,anchorY:1,referenceHeight:250.5},{left:698,top:377,width:158,height:259,anchor:.513573,anchorY:1,referenceHeight:250.5},{left:991,top:376,width:163,height:255,anchor:.450959,anchorY:1,referenceHeight:250.5},{left:78,top:679,width:169,height:250,anchor:.566424,anchorY:1,referenceHeight:250.5},{left:382,top:680,width:181,height:255,anchor:.458653,anchorY:1,referenceHeight:250.5},{left:693,top:684,width:162,height:253,anchor:.479444,anchorY:1,referenceHeight:250.5},{left:989,top:682,width:167,height:248,anchor:.43832,anchorY:1,referenceHeight:250.5},{left:68,top:981,width:233,height:229,anchor:.412357,anchorY:1,referenceHeight:250.5},{left:370,top:981,width:216,height:230,anchor:.427795,anchorY:1,referenceHeight:250.5},{left:647,top:980,width:221,height:232,anchor:.55273,anchorY:1,referenceHeight:250.5},{left:936,top:981,width:230,height:234,anchor:.574507,anchorY:1,referenceHeight:250.5}]},dangun_sky:{path:"assets/3d/fixed/skins/dangun_sky-directions-v1.webp",width:1231,height:1277,frames:[{left:69,top:89,width:179,height:238,anchor:.520614,anchorY:1,referenceHeight:236.5},{left:375,top:92,width:176,height:236,anchor:.562855,anchorY:1,referenceHeight:236.5},{left:679,top:91,width:175,height:237,anchor:.423567,anchorY:1,referenceHeight:236.5},{left:983,top:91,width:178,height:236,anchor:.470293,anchorY:1,referenceHeight:236.5},{left:65,top:391,width:180,height:245,anchor:.568574,anchorY:1,referenceHeight:236.5},{left:373,top:389,width:180,height:250,anchor:.517191,anchorY:1,referenceHeight:236.5},{left:682,top:392,width:176,height:248,anchor:.466686,anchorY:1,referenceHeight:236.5},{left:985,top:391,width:180,height:244,anchor:.408409,anchorY:1,referenceHeight:236.5},{left:59,top:693,width:181,height:237,anchor:.592857,anchorY:1,referenceHeight:236.5},{left:376,top:689,width:188,height:242,anchor:.510405,anchorY:1,referenceHeight:236.5},{left:676,top:689,width:179,height:242,anchor:.46072,anchorY:1,referenceHeight:236.5},{left:990,top:694,width:179,height:235,anchor:.405559,anchorY:1,referenceHeight:236.5},{left:52,top:974,width:232,height:231,anchor:.466313,anchorY:1,referenceHeight:236.5},{left:367,top:975,width:214,height:233,anchor:.442921,anchorY:1,referenceHeight:236.5},{left:654,top:977,width:209,height:232,anchor:.535644,anchorY:1,referenceHeight:236.5},{left:949,top:975,width:229,height:230,anchor:.532757,anchorY:1,referenceHeight:236.5}]},dangun_gold:{path:"assets/3d/fixed/skins/dangun_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:67,top:93,width:181,height:237,anchor:.517983,anchorY:1,referenceHeight:237},{left:380,top:95,width:178,height:237,anchor:.549466,anchorY:1,referenceHeight:237},{left:687,top:94,width:175,height:237,anchor:.425451,anchorY:1,referenceHeight:237},{left:984,top:93,width:181,height:237,anchor:.467242,anchorY:1,referenceHeight:237},{left:64,top:394,width:174,height:242,anchor:.571118,anchorY:1,referenceHeight:237},{left:374,top:394,width:185,height:247,anchor:.481896,anchorY:1,referenceHeight:237},{left:683,top:398,width:177,height:242,anchor:.474326,anchorY:1,referenceHeight:237},{left:992,top:394,width:175,height:242,anchor:.423303,anchorY:1,referenceHeight:237},{left:59,top:695,width:180,height:236,anchor:.602977,anchorY:1,referenceHeight:237},{left:379,top:694,width:186,height:237,anchor:.51462,anchorY:1,referenceHeight:237},{left:673,top:695,width:177,height:236,anchor:.474269,anchorY:1,referenceHeight:237},{left:989,top:695,width:185,height:235,anchor:.406595,anchorY:1,referenceHeight:237},{left:51,top:975,width:228,height:228,anchor:.468754,anchorY:1,referenceHeight:237},{left:366,top:976,width:213,height:234,anchor:.432484,anchorY:1,referenceHeight:237},{left:654,top:976,width:208,height:234,anchor:.546433,anchorY:1,referenceHeight:237},{left:952,top:976,width:226,height:229,anchor:.524766,anchorY:1,referenceHeight:237}]}};function Ph(i=[]){let e=new Map;for(let t of i)gn(t.heroId,t.skin)&&e.set(t.skin,{heroId:t.heroId,skin:t.skin});return[...e.values()].sort((t,n)=>t.skin.localeCompare(n.skin))}function tf(i=[]){return Ph(i).map(e=>e.skin).join(",")}var Gr={path:"assets/3d/fixed/season-trees-v1.webp",width:1536,height:1024,frames:[{left:44,top:51,width:458,height:443,anchor:.51031,anchorY:1,referenceHeight:443},{left:553,top:40,width:436,height:456,anchor:.525476,anchorY:1,referenceHeight:456},{left:1029,top:32,width:470,height:465,anchor:.516112,anchorY:1,referenceHeight:465},{left:29,top:536,width:467,height:440,anchor:.620795,anchorY:1,referenceHeight:440},{left:537,top:527,width:453,height:458,anchor:.504335,anchorY:1,referenceHeight:458},{left:1038,top:525,width:469,height:454,anchor:.466093,anchorY:1,referenceHeight:454}],indices:{spring:[0,1],summer:[2,3],autumn:[4,5]}};var xm={spring:"blossom",summer:"broadleaf",autumn:"maple"};function nf(i,e,t=0){return i.snow||e!==xm[i.id]?null:Gr.indices[i.id]?.[t>=.5?1:0]??null}var Wr=(i,e,t)=>Math.max(e,Math.min(t,i)),ii=(i,e)=>Number.isFinite(i)?i:e,Hh=i=>i*i*(3-2*i),wm=i=>i==="cavalry"||i==="courier"?.52:i==="ram"?.48:i==="turtle"?.6:.32,rf=[1,4,2,5],Jo=.12;function vm(i,e,t,n){let r=Math.hypot(e,t);if(!Number.isFinite(r)||r<1e-8)return i??0;if(e/=r,t/=r,i===void 0||n)return t>=0?e>=0?1:2:e>=0?0:3;let s=Math.sin(Math.PI*8/180),o=i<2?e>=-s:e>s;return(i===1||i===2?t>=-s:t>s)?o?1:2:o?0:3}function sf(i,e){let t=ii(e.x,0),n=ii(e.z,0),r=ii(e.time,0),s=Wr(ii(e.dt,0),0,.15),o=ii(e.targetX,t),h=ii(e.targetZ,n),c=!i||r<i.lastTime-.1||e.reset||e.resetKey!==i.resetKey,a=c?{x:t,z:n,tx:o,tz:h,lastTime:r,clock:r,phase:0,blend:0,hp:e.hp,seq:void 0,actionStart:-9,duration:.25,hitAt:-9,attack:0,resetKey:e.resetKey}:i,f=Math.hypot(o-a.tx,h-a.tz)>1.25||Math.hypot(t-a.x,n-a.z)>1.25;if((e.frozen||s===0)&&!c&&a.visual)return a.frozenJump=!!a.frozenJump||f,a.x=t,a.z=n,a.tx=o,a.tz=h,a.lastTime=r,a.wasFrozen=!0,{...a.visual,state:a};!e.frozen&&s>0&&(a.clock=a.wasFrozen||r>a.lastTime?Math.max(r,a.clock):Math.min(r+.12,a.clock+s)),a.wasFrozen=!!e.frozen||s===0;let d=!c&&!f&&!e.stunned&&!e.frozen&&s>0?Math.hypot(t-a.x,n-a.z):0,l=f||a.frozenJump;l&&(a.phase=0,a.blend=0,a.stop=null,a.moving=!1,a.frozenJump=!1),d>1e-5&&(a.phase=(a.phase+d/(2*wm(e.kind)))%1),e.stunned?a.blend=0:!e.frozen&&s>0&&(a.blend+=(+(d>1e-5)-a.blend)*(1-Math.exp(-s*18)));let _=Number.isFinite(e.actionSeq)?e.actionSeq>0&&e.actionSeq!==a.seq:e.attack>0&&(a.attack<=0||e.attack>a.attack+.06);_&&(a.actionStart=ii(e.actionAt,a.clock),a.duration=Wr(ii(e.actionDuration,e.attack||.25),.12,.6)),Number.isFinite(a.hp)&&Number.isFinite(e.hp)&&e.hp<a.hp&&(a.hitAt=a.clock),a.hp=e.hp,a.seq=e.actionSeq,a.attack=e.attack||0,a.x=t,a.z=n,a.tx=o,a.tz=h,a.lastTime=r;let v=Math.max(0,a.clock-a.actionStart),g=v<a.duration+.09&&!e.stunned,p=g?1-Hh(Wr(v/(a.duration+.09),0,1)):0,T=a.clock-a.hitAt,C=T>=0&&T<.18?Math.sin(Math.PI*T/.18):0,y=d>1e-5,b=e.kind==="turtle"||e.kind==="ram";y||g||e.stunned||l?a.stop=null:a.moving&&e.inbetweens&&!b&&rf.includes(a.visual?.row)?a.stop={elapsed:0,row:a.visual.row,landing:a.visual.row===4?2:a.visual.row===5?1:a.visual.row,lift:Math.abs(Math.sin(a.phase*Math.PI*2))*.009*a.blend,blend:a.blend}:a.stop&&(a.stop.elapsed+=s),a.moving=y;let M=a.stop?.elapsed??Jo,E=M<Jo,w=E?a.stop.blend*(1-Hh(Wr(M/Jo,0,1))):y||!e.inbetweens?a.blend:0,A=a.phase%1,H=A<.3?1:A<.5?0:A<.8?2:0,D=e.inbetweens?g?v<a.duration*.28?3:v<a.duration*.7?6:7:E?M<.04?a.stop.row:a.stop.landing:(y||b)&&a.blend>.16?rf[Math.min(3,Math.floor(A*4))]:0:g&&v<a.duration*.72?3:a.blend>.16?H:0,Y=e.aimKey!=null&&e.aimKey!==a.aimKey,z=vm(e.stunned?void 0:a.visual?.facing,e.facingX,e.facingY,c||l||_||Y);a.aimKey=e.aimKey;let L={row:D,phase:a.phase,blend:a.blend,attacking:g,hit:C,facing:z,sign:z<2?1:-1,settling:E,lift:b?0:(E?a.stop.lift*(1-Hh(Wr(M/Jo,0,1))):Math.abs(Math.sin(A*Math.PI*2))*.009*w)-C*.008,lean:b?0:.022*w-.045*p-.055*C,recoil:b?0:-.018*p-.022*C};return a.visual=L,{...L,state:a}}var $o={yi:{heroId:"yi",skin:null,path:"assets/3d/fixed/inbetweens/yi-inbetweens-v1.webp",width:1266,height:1416,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:246,height:296,anchor:.56,anchorY:1,referenceHeight:310},{left:350,top:24,width:211,height:297,anchor:.5,anchorY:1,referenceHeight:310},{left:655,top:24,width:214,height:298,anchor:.5,anchorY:1,referenceHeight:310},{left:962,top:24,width:231,height:298,anchor:.44,anchorY:1,referenceHeight:310},{left:24,top:370,width:256,height:301,anchor:.62,anchorY:1,referenceHeight:310},{left:350,top:370,width:223,height:303,anchor:.49,anchorY:1,referenceHeight:310},{left:655,top:370,width:226,height:305,anchor:.51,anchorY:1,referenceHeight:310},{left:962,top:370,width:249,height:302,anchor:.38,anchorY:1,referenceHeight:310},{left:24,top:723,width:278,height:313,anchor:.5,anchorY:1,referenceHeight:310},{left:350,top:723,width:257,height:311,anchor:.45,anchorY:1,referenceHeight:310},{left:655,top:723,width:259,height:312,anchor:.5,anchorY:1,referenceHeight:310},{left:962,top:723,width:280,height:314,anchor:.5,anchorY:1,referenceHeight:310},{left:24,top:1085,width:244,height:304,anchor:.54,anchorY:1,referenceHeight:310},{left:350,top:1085,width:226,height:302,anchor:.49,anchorY:1,referenceHeight:310},{left:655,top:1085,width:226,height:302,anchor:.51,anchorY:1,referenceHeight:310},{left:962,top:1085,width:233,height:307,anchor:.46,anchorY:1,referenceHeight:310}]},sejong:{heroId:"sejong",skin:null,path:"assets/3d/fixed/inbetweens/sejong-inbetweens-v1.webp",width:1232,height:1460,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:218,height:304,anchor:.53,anchorY:1,referenceHeight:305},{left:338,top:24,width:190,height:304,anchor:.43,anchorY:1,referenceHeight:305},{left:644,top:24,width:191,height:303,anchor:.55,anchorY:1,referenceHeight:305},{left:944,top:24,width:191,height:305,anchor:.47,anchorY:1,referenceHeight:305},{left:24,top:377,width:234,height:319,anchor:.54,anchorY:1,referenceHeight:305},{left:338,top:377,width:199,height:320,anchor:.42,anchorY:1,referenceHeight:305},{left:644,top:377,width:200,height:320,anchor:.55,anchorY:1,referenceHeight:305},{left:944,top:377,width:217,height:321,anchor:.46,anchorY:1,referenceHeight:305},{left:24,top:746,width:266,height:307,anchor:.46,anchorY:1,referenceHeight:305},{left:338,top:746,width:258,height:323,anchor:.43,anchorY:1,referenceHeight:305},{left:644,top:746,width:252,height:319,anchor:.5,anchorY:1,referenceHeight:305},{left:944,top:746,width:264,height:303,anchor:.625,anchorY:1,referenceHeight:305},{left:24,top:1117,width:208,height:319,anchor:.54,anchorY:1,referenceHeight:305},{left:338,top:1117,width:212,height:318,anchor:.5,anchorY:1,referenceHeight:305},{left:644,top:1117,width:206,height:317,anchor:.5,anchorY:1,referenceHeight:305},{left:944,top:1117,width:203,height:316,anchor:.46,anchorY:1,referenceHeight:305}]},eulji:{heroId:"eulji",skin:null,path:"assets/3d/fixed/inbetweens/eulji-inbetweens-v1.webp",width:997,height:976,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:154,height:198,anchor:.65,anchorY:1,referenceHeight:190},{left:277,top:24,width:158,height:199,anchor:.49777,anchorY:1,referenceHeight:190},{left:518,top:24,width:158,height:201,anchor:.509059,anchorY:1,referenceHeight:190},{left:767,top:24,width:156,height:200,anchor:.36,anchorY:1,referenceHeight:190},{left:24,top:273,width:165,height:198,anchor:.63,anchorY:1,referenceHeight:190},{left:277,top:273,width:159,height:199,anchor:.49777,anchorY:1,referenceHeight:190},{left:518,top:273,width:158,height:198,anchor:.509059,anchorY:1,referenceHeight:190},{left:767,top:273,width:166,height:198,anchor:.35,anchorY:1,referenceHeight:190},{left:24,top:520,width:205,height:187,anchor:.424389,anchorY:1,referenceHeight:190},{left:277,top:520,width:193,height:191,anchor:.405173,anchorY:1,referenceHeight:190},{left:518,top:520,width:201,height:194,anchor:.557538,anchorY:1,referenceHeight:190},{left:767,top:520,width:206,height:186,anchor:.561561,anchorY:1,referenceHeight:190},{left:24,top:762,width:164,height:180,anchor:.563421,anchorY:1,referenceHeight:190},{left:277,top:762,width:160,height:184,anchor:.49777,anchorY:1,referenceHeight:190},{left:518,top:762,width:168,height:190,anchor:.509059,anchorY:1,referenceHeight:190},{left:767,top:762,width:167,height:179,anchor:.452595,anchorY:1,referenceHeight:190}]},gang:{heroId:"gang",skin:null,path:"assets/3d/fixed/inbetweens/gang-inbetweens-v1.webp",width:1333,height:1374,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:278,height:291,anchor:.543238,anchorY:1,referenceHeight:293},{left:376,top:24,width:275,height:295,anchor:.494672,anchorY:1,referenceHeight:293},{left:699,top:24,width:254,height:297,anchor:.458745,anchorY:1,referenceHeight:293},{left:1016,top:24,width:280,height:290,anchor:.485671,anchorY:1,referenceHeight:293},{left:24,top:369,width:276,height:309,anchor:.543238,anchorY:1,referenceHeight:293},{left:376,top:369,width:275,height:311,anchor:.494672,anchorY:1,referenceHeight:293},{left:699,top:369,width:253,height:312,anchor:.458745,anchorY:1,referenceHeight:293},{left:1016,top:369,width:293,height:307,anchor:.485671,anchorY:1,referenceHeight:293},{left:24,top:729,width:304,height:274,anchor:.466717,anchorY:1,referenceHeight:293},{left:376,top:729,width:271,height:280,anchor:.449052,anchorY:1,referenceHeight:293},{left:699,top:729,width:269,height:273,anchor:.53166,anchorY:1,referenceHeight:293},{left:1016,top:729,width:283,height:276,anchor:.526119,anchorY:1,referenceHeight:293},{left:24,top:1057,width:268,height:289,anchor:.543238,anchorY:1,referenceHeight:293},{left:376,top:1057,width:266,height:292,anchor:.494672,anchorY:1,referenceHeight:293},{left:699,top:1057,width:246,height:293,anchor:.458745,anchorY:1,referenceHeight:293},{left:1016,top:1057,width:240,height:288,anchor:.485671,anchorY:1,referenceHeight:293}]},gwon:{heroId:"gwon",skin:null,path:"assets/3d/fixed/inbetweens/gwon-inbetweens-v1.webp",width:1322,height:1351,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:251,height:295,anchor:.512638,anchorY:1,referenceHeight:285},{left:380,top:24,width:223,height:297,anchor:.509672,anchorY:1,referenceHeight:285},{left:688,top:24,width:215,height:290,anchor:.463326,anchorY:1,referenceHeight:285},{left:991,top:24,width:245,height:296,anchor:.460919,anchorY:1,referenceHeight:285},{left:24,top:369,width:247,height:306,anchor:.512638,anchorY:1,referenceHeight:285},{left:380,top:369,width:216,height:306,anchor:.509672,anchorY:1,referenceHeight:285},{left:688,top:369,width:209,height:299,anchor:.463326,anchorY:1,referenceHeight:285},{left:991,top:369,width:238,height:305,anchor:.460919,anchorY:1,referenceHeight:285},{left:24,top:723,width:308,height:265,anchor:.44644,anchorY:1,referenceHeight:285},{left:380,top:723,width:260,height:264,anchor:.47,anchorY:1,referenceHeight:285},{left:688,top:723,width:255,height:266,anchor:.552449,anchorY:1,referenceHeight:285},{left:991,top:723,width:307,height:268,anchor:.537893,anchorY:1,referenceHeight:285},{left:24,top:1039,width:278,height:288,anchor:.512638,anchorY:1,referenceHeight:285},{left:380,top:1039,width:254,height:278,anchor:.509672,anchorY:1,referenceHeight:285},{left:688,top:1039,width:247,height:280,anchor:.463326,anchorY:1,referenceHeight:285},{left:991,top:1039,width:275,height:283,anchor:.460919,anchorY:1,referenceHeight:285}]},gwak:{heroId:"gwak",skin:null,path:"assets/3d/fixed/inbetweens/gwak-inbetweens-v1.webp",width:1045,height:1291,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:183,height:277,anchor:.492593,anchorY:1,referenceHeight:270},{left:295,top:24,width:169,height:279,anchor:.452126,anchorY:1,referenceHeight:270},{left:547,top:24,width:165,height:277,anchor:.65,anchorY:1,referenceHeight:270},{left:799,top:24,width:167,height:276,anchor:.495042,anchorY:1,referenceHeight:270},{left:24,top:351,width:164,height:276,anchor:.492593,anchorY:1,referenceHeight:270},{left:295,top:351,width:145,height:276,anchor:.452126,anchorY:1,referenceHeight:270},{left:547,top:351,width:147,height:277,anchor:.61,anchorY:1,referenceHeight:270},{left:799,top:351,width:158,height:276,anchor:.495042,anchorY:1,referenceHeight:270},{left:24,top:676,width:223,height:280,anchor:.434951,anchorY:1,referenceHeight:270},{left:295,top:676,width:204,height:278,anchor:.440223,anchorY:1,referenceHeight:270},{left:547,top:676,width:204,height:277,anchor:.552396,anchorY:1,referenceHeight:270},{left:799,top:676,width:222,height:279,anchor:.558612,anchorY:1,referenceHeight:270},{left:24,top:1004,width:189,height:262,anchor:.492593,anchorY:1,referenceHeight:270},{left:295,top:1004,width:180,height:263,anchor:.452126,anchorY:1,referenceHeight:270},{left:547,top:1004,width:180,height:262,anchor:.52941,anchorY:1,referenceHeight:270},{left:799,top:1004,width:178,height:262,anchor:.495042,anchorY:1,referenceHeight:270}]},ahn:{heroId:"ahn",skin:null,path:"assets/3d/fixed/inbetweens/ahn-inbetweens-v1.webp",width:1030,height:1236,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:162,height:260,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:284,top:24,width:174,height:264,anchor:.44,anchorY:1,referenceHeight:254.5},{left:544,top:24,width:158,height:265,anchor:.5,anchorY:1,referenceHeight:254.5},{left:793,top:24,width:158,height:258,anchor:.473755,anchorY:1,referenceHeight:254.5},{left:24,top:337,width:157,height:256,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:284,top:337,width:172,height:255,anchor:.46,anchorY:1,referenceHeight:254.5},{left:544,top:337,width:170,height:257,anchor:.5,anchorY:1,referenceHeight:254.5},{left:793,top:337,width:155,height:255,anchor:.473755,anchorY:1,referenceHeight:254.5},{left:24,top:642,width:212,height:249,anchor:.428626,anchorY:1,referenceHeight:254.5},{left:284,top:642,width:212,height:258,anchor:.427352,anchorY:1,referenceHeight:254.5},{left:544,top:642,width:201,height:257,anchor:.531864,anchorY:1,referenceHeight:254.5},{left:793,top:642,width:213,height:250,anchor:.570551,anchorY:1,referenceHeight:254.5},{left:24,top:948,width:168,height:257,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:284,top:948,width:181,height:263,anchor:.525213,anchorY:1,referenceHeight:254.5},{left:544,top:948,width:181,height:264,anchor:.461072,anchorY:1,referenceHeight:254.5},{left:793,top:948,width:168,height:255,anchor:.473755,anchorY:1,referenceHeight:254.5}]},dangun:{heroId:"dangun",skin:null,path:"assets/3d/fixed/inbetweens/dangun-inbetweens-v1.webp",width:1058,height:1127,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:171,height:245,anchor:.527138,anchorY:1,referenceHeight:244},{left:301,top:24,width:169,height:241,anchor:.45,anchorY:1,referenceHeight:244},{left:556,top:24,width:164,height:242,anchor:.54,anchorY:1,referenceHeight:244},{left:809,top:24,width:172,height:245,anchor:.460881,anchorY:1,referenceHeight:244},{left:24,top:317,width:182,height:244,anchor:.527138,anchorY:1,referenceHeight:244},{left:301,top:317,width:169,height:244,anchor:.46,anchorY:1,referenceHeight:244},{left:556,top:317,width:169,height:244,anchor:.52,anchorY:1,referenceHeight:244},{left:809,top:317,width:183,height:244,anchor:.460881,anchorY:1,referenceHeight:244},{left:24,top:609,width:229,height:216,anchor:.478438,anchorY:1,referenceHeight:244},{left:301,top:609,width:207,height:218,anchor:.432054,anchorY:1,referenceHeight:244},{left:556,top:609,width:205,height:217,anchor:.551343,anchorY:1,referenceHeight:244},{left:809,top:609,width:225,height:218,anchor:.523123,anchorY:1,referenceHeight:244},{left:24,top:875,width:179,height:224,anchor:.527138,anchorY:1,referenceHeight:244},{left:301,top:875,width:180,height:228,anchor:.570995,anchorY:1,referenceHeight:244},{left:556,top:875,width:176,height:227,anchor:.412022,anchorY:1,referenceHeight:244},{left:809,top:875,width:185,height:225,anchor:.460881,anchorY:1,referenceHeight:244}]},yi_white:{heroId:"yi",skin:"yi_white",path:"assets/3d/fixed/inbetweens/yi_white-inbetweens-v1.webp",width:1089,height:1205,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:204,height:246,anchor:.56,anchorY:1,referenceHeight:256.5},{left:304,top:24,width:173,height:245,anchor:.5,anchorY:1,referenceHeight:256.5},{left:569,top:24,width:178,height:248,anchor:.5,anchorY:1,referenceHeight:256.5},{left:831,top:24,width:193,height:247,anchor:.44,anchorY:1,referenceHeight:256.5},{left:24,top:320,width:209,height:248,anchor:.62,anchorY:1,referenceHeight:256.5},{left:304,top:320,width:183,height:249,anchor:.49,anchorY:1,referenceHeight:256.5},{left:569,top:320,width:187,height:251,anchor:.51,anchorY:1,referenceHeight:256.5},{left:831,top:320,width:206,height:249,anchor:.38,anchorY:1,referenceHeight:256.5},{left:24,top:619,width:232,height:259,anchor:.5,anchorY:1,referenceHeight:256.5},{left:304,top:619,width:217,height:256,anchor:.45,anchorY:1,referenceHeight:256.5},{left:569,top:619,width:214,height:258,anchor:.5,anchorY:1,referenceHeight:256.5},{left:831,top:619,width:234,height:258,anchor:.5,anchorY:1,referenceHeight:256.5},{left:24,top:926,width:202,height:253,anchor:.54,anchorY:1,referenceHeight:256.5},{left:304,top:926,width:187,height:251,anchor:.49,anchorY:1,referenceHeight:256.5},{left:569,top:926,width:187,height:251,anchor:.51,anchorY:1,referenceHeight:256.5},{left:831,top:926,width:195,height:255,anchor:.46,anchorY:1,referenceHeight:256.5}]},yi_gold:{heroId:"yi",skin:"yi_gold",path:"assets/3d/fixed/inbetweens/yi_gold-inbetweens-v1.webp",width:1021,height:1124,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:188,height:227,anchor:.56,anchorY:1,referenceHeight:235.5},{left:289,top:24,width:165,height:228,anchor:.5,anchorY:1,referenceHeight:235.5},{left:534,top:24,width:169,height:228,anchor:.5,anchorY:1,referenceHeight:235.5},{left:779,top:24,width:182,height:226,anchor:.44,anchorY:1,referenceHeight:235.5},{left:24,top:300,width:194,height:227,anchor:.62,anchorY:1,referenceHeight:235.5},{left:289,top:300,width:170,height:229,anchor:.49,anchorY:1,referenceHeight:235.5},{left:534,top:300,width:175,height:231,anchor:.51,anchorY:1,referenceHeight:235.5},{left:779,top:300,width:189,height:229,anchor:.38,anchorY:1,referenceHeight:235.5},{left:24,top:579,width:217,height:239,anchor:.5,anchorY:1,referenceHeight:235.5},{left:289,top:579,width:197,height:238,anchor:.45,anchorY:1,referenceHeight:235.5},{left:534,top:579,width:197,height:238,anchor:.5,anchorY:1,referenceHeight:235.5},{left:779,top:579,width:218,height:240,anchor:.5,anchorY:1,referenceHeight:235.5},{left:24,top:867,width:187,height:231,anchor:.54,anchorY:1,referenceHeight:235.5},{left:289,top:867,width:171,height:229,anchor:.49,anchorY:1,referenceHeight:235.5},{left:534,top:867,width:173,height:230,anchor:.51,anchorY:1,referenceHeight:235.5},{left:779,top:867,width:181,height:233,anchor:.46,anchorY:1,referenceHeight:235.5}]},sejong_blue:{heroId:"sejong",skin:"sejong_blue",path:"assets/3d/fixed/inbetweens/sejong_blue-inbetweens-v1.webp",width:1025,height:1181,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:170,height:237,anchor:.53,anchorY:1,referenceHeight:238},{left:287,top:24,width:154,height:237,anchor:.43,anchorY:1,referenceHeight:238},{left:543,top:24,width:152,height:238,anchor:.55,anchorY:1,referenceHeight:238},{left:791,top:24,width:157,height:239,anchor:.47,anchorY:1,referenceHeight:238},{left:24,top:311,width:183,height:249,anchor:.54,anchorY:1,referenceHeight:238},{left:287,top:311,width:162,height:249,anchor:.42,anchorY:1,referenceHeight:238},{left:543,top:311,width:159,height:249,anchor:.55,anchorY:1,referenceHeight:238},{left:791,top:311,width:175,height:250,anchor:.46,anchorY:1,referenceHeight:238},{left:24,top:609,width:215,height:240,anchor:.46,anchorY:1,referenceHeight:238},{left:287,top:609,width:208,height:252,anchor:.43,anchorY:1,referenceHeight:238},{left:543,top:609,width:200,height:250,anchor:.5,anchorY:1,referenceHeight:238},{left:791,top:609,width:210,height:238,anchor:.625,anchorY:1,referenceHeight:238},{left:24,top:909,width:165,height:245,anchor:.54,anchorY:1,referenceHeight:238},{left:287,top:909,width:166,height:248,anchor:.5,anchorY:1,referenceHeight:238},{left:543,top:909,width:169,height:248,anchor:.5,anchorY:1,referenceHeight:238},{left:791,top:909,width:165,height:246,anchor:.46,anchorY:1,referenceHeight:238}]},sejong_gold:{heroId:"sejong",skin:"sejong_gold",path:"assets/3d/fixed/inbetweens/sejong_gold-inbetweens-v1.webp",width:1029,height:1215,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:181,height:247,anchor:.53,anchorY:1,referenceHeight:247},{left:288,top:24,width:156,height:247,anchor:.43,anchorY:1,referenceHeight:247},{left:542,top:24,width:155,height:247,anchor:.55,anchorY:1,referenceHeight:247},{left:793,top:24,width:159,height:247,anchor:.47,anchorY:1,referenceHeight:247},{left:24,top:319,width:188,height:261,anchor:.54,anchorY:1,referenceHeight:247},{left:288,top:319,width:162,height:261,anchor:.42,anchorY:1,referenceHeight:247},{left:542,top:319,width:161,height:261,anchor:.55,anchorY:1,referenceHeight:247},{left:793,top:319,width:178,height:265,anchor:.46,anchorY:1,referenceHeight:247},{left:24,top:632,width:216,height:248,anchor:.46,anchorY:1,referenceHeight:247},{left:288,top:632,width:206,height:258,anchor:.43,anchorY:1,referenceHeight:247},{left:542,top:632,width:203,height:257,anchor:.5,anchorY:1,referenceHeight:247},{left:793,top:632,width:212,height:243,anchor:.625,anchorY:1,referenceHeight:247},{left:24,top:938,width:163,height:250,anchor:.54,anchorY:1,referenceHeight:247},{left:288,top:938,width:175,height:253,anchor:.5,anchorY:1,referenceHeight:247},{left:542,top:938,width:170,height:252,anchor:.5,anchorY:1,referenceHeight:247},{left:793,top:938,width:167,height:251,anchor:.46,anchorY:1,referenceHeight:247}]},eulji_iron:{heroId:"eulji",skin:"eulji_iron",path:"assets/3d/fixed/inbetweens/eulji_iron-inbetweens-v1.webp",width:1095,height:1048,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:171,height:215,anchor:.65,anchorY:1,referenceHeight:207.5},{left:302,top:24,width:178,height:215,anchor:.49777,anchorY:1,referenceHeight:207.5},{left:570,top:24,width:182,height:218,anchor:.509059,anchorY:1,referenceHeight:207.5},{left:841,top:24,width:174,height:216,anchor:.36,anchorY:1,referenceHeight:207.5},{left:24,top:290,width:186,height:216,anchor:.63,anchorY:1,referenceHeight:207.5},{left:302,top:290,width:181,height:219,anchor:.49777,anchorY:1,referenceHeight:207.5},{left:570,top:290,width:178,height:217,anchor:.509059,anchorY:1,referenceHeight:207.5},{left:841,top:290,width:188,height:215,anchor:.35,anchorY:1,referenceHeight:207.5},{left:24,top:557,width:230,height:205,anchor:.424389,anchorY:1,referenceHeight:207.5},{left:302,top:557,width:220,height:206,anchor:.405173,anchorY:1,referenceHeight:207.5},{left:570,top:557,width:223,height:209,anchor:.557538,anchorY:1,referenceHeight:207.5},{left:841,top:557,width:230,height:204,anchor:.561561,anchorY:1,referenceHeight:207.5},{left:24,top:814,width:183,height:201,anchor:.563421,anchorY:1,referenceHeight:207.5},{left:302,top:814,width:182,height:201,anchor:.49777,anchorY:1,referenceHeight:207.5},{left:570,top:814,width:189,height:210,anchor:.509059,anchorY:1,referenceHeight:207.5},{left:841,top:814,width:183,height:200,anchor:.452595,anchorY:1,referenceHeight:207.5}]},eulji_gold:{heroId:"eulji",skin:"eulji_gold",path:"assets/3d/fixed/inbetweens/eulji_gold-inbetweens-v1.webp",width:1097,height:1062,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:173,height:217,anchor:.65,anchorY:1,referenceHeight:210.5},{left:301,top:24,width:181,height:216,anchor:.49777,anchorY:1,referenceHeight:210.5},{left:570,top:24,width:177,height:219,anchor:.509059,anchorY:1,referenceHeight:210.5},{left:841,top:24,width:177,height:216,anchor:.36,anchorY:1,referenceHeight:210.5},{left:24,top:291,width:191,height:220,anchor:.63,anchorY:1,referenceHeight:210.5},{left:301,top:291,width:185,height:219,anchor:.49777,anchorY:1,referenceHeight:210.5},{left:570,top:291,width:184,height:220,anchor:.509059,anchorY:1,referenceHeight:210.5},{left:841,top:291,width:191,height:221,anchor:.35,anchorY:1,referenceHeight:210.5},{left:24,top:560,width:229,height:207,anchor:.424389,anchorY:1,referenceHeight:210.5},{left:301,top:560,width:221,height:209,anchor:.405173,anchorY:1,referenceHeight:210.5},{left:570,top:560,width:223,height:213,anchor:.557538,anchorY:1,referenceHeight:210.5},{left:841,top:560,width:232,height:206,anchor:.561561,anchorY:1,referenceHeight:210.5},{left:24,top:821,width:187,height:208,anchor:.563421,anchorY:1,referenceHeight:210.5},{left:301,top:821,width:184,height:214,anchor:.49777,anchorY:1,referenceHeight:210.5},{left:570,top:821,width:192,height:217,anchor:.509059,anchorY:1,referenceHeight:210.5},{left:841,top:821,width:188,height:207,anchor:.452595,anchorY:1,referenceHeight:210.5}]},gang_crimson:{heroId:"gang",skin:"gang_crimson",path:"assets/3d/fixed/inbetweens/gang_crimson-inbetweens-v1.webp",width:1381,height:1374,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:287,height:296,anchor:.543238,anchorY:1,referenceHeight:294},{left:383,top:24,width:283,height:295,anchor:.494672,anchorY:1,referenceHeight:294},{left:720,top:24,width:263,height:298,anchor:.458745,anchorY:1,referenceHeight:294},{left:1052,top:24,width:302,height:295,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:370,width:288,height:309,anchor:.543238,anchorY:1,referenceHeight:294},{left:383,top:370,width:288,height:308,anchor:.494672,anchorY:1,referenceHeight:294},{left:720,top:370,width:264,height:309,anchor:.458745,anchorY:1,referenceHeight:294},{left:1052,top:370,width:305,height:308,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:727,width:311,height:272,anchor:.466717,anchorY:1,referenceHeight:294},{left:383,top:727,width:289,height:279,anchor:.449052,anchorY:1,referenceHeight:294},{left:720,top:727,width:284,height:274,anchor:.53166,anchorY:1,referenceHeight:294},{left:1052,top:727,width:298,height:277,anchor:.526119,anchorY:1,referenceHeight:294},{left:24,top:1054,width:280,height:293,anchor:.543238,anchorY:1,referenceHeight:294},{left:383,top:1054,width:280,height:295,anchor:.494672,anchorY:1,referenceHeight:294},{left:720,top:1054,width:261,height:296,anchor:.458745,anchorY:1,referenceHeight:294},{left:1052,top:1054,width:260,height:292,anchor:.485671,anchorY:1,referenceHeight:294}]},gang_gold:{heroId:"gang",skin:"gang_gold",path:"assets/3d/fixed/inbetweens/gang_gold-inbetweens-v1.webp",width:1340,height:1378,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:279,height:292,anchor:.543238,anchorY:1,referenceHeight:294},{left:376,top:24,width:279,height:293,anchor:.494672,anchorY:1,referenceHeight:294},{left:704,top:24,width:253,height:295,anchor:.458745,anchorY:1,referenceHeight:294},{left:1024,top:24,width:290,height:293,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:367,width:282,height:307,anchor:.543238,anchorY:1,referenceHeight:294},{left:376,top:367,width:280,height:309,anchor:.494672,anchorY:1,referenceHeight:294},{left:704,top:367,width:256,height:311,anchor:.458745,anchorY:1,referenceHeight:294},{left:1024,top:367,width:292,height:308,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:726,width:304,height:274,anchor:.466717,anchorY:1,referenceHeight:294},{left:376,top:726,width:276,height:281,anchor:.449052,anchorY:1,referenceHeight:294},{left:704,top:726,width:272,height:273,anchor:.53166,anchorY:1,referenceHeight:294},{left:1024,top:726,width:289,height:277,anchor:.526119,anchorY:1,referenceHeight:294},{left:24,top:1055,width:273,height:293,anchor:.543238,anchorY:1,referenceHeight:294},{left:376,top:1055,width:271,height:293,anchor:.494672,anchorY:1,referenceHeight:294},{left:704,top:1055,width:251,height:299,anchor:.458745,anchorY:1,referenceHeight:294},{left:1024,top:1055,width:257,height:293,anchor:.485671,anchorY:1,referenceHeight:294}]},gwon_hill:{heroId:"gwon",skin:"gwon_hill",path:"assets/3d/fixed/inbetweens/gwon_hill-inbetweens-v1.webp",width:1218,height:1227,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:226,height:266,anchor:.512638,anchorY:1,referenceHeight:255},{left:349,top:24,width:202,height:266,anchor:.509672,anchorY:1,referenceHeight:255},{left:637,top:24,width:194,height:260,anchor:.463326,anchorY:1,referenceHeight:255},{left:917,top:24,width:222,height:265,anchor:.460919,anchorY:1,referenceHeight:255},{left:24,top:338,width:223,height:274,anchor:.512638,anchorY:1,referenceHeight:255},{left:349,top:338,width:200,height:274,anchor:.509672,anchorY:1,referenceHeight:255},{left:637,top:338,width:193,height:268,anchor:.463326,anchorY:1,referenceHeight:255},{left:917,top:338,width:218,height:274,anchor:.460919,anchorY:1,referenceHeight:255},{left:24,top:660,width:277,height:240,anchor:.44644,anchorY:1,referenceHeight:255},{left:349,top:660,width:240,height:236,anchor:.47,anchorY:1,referenceHeight:255},{left:637,top:660,width:232,height:237,anchor:.552449,anchorY:1,referenceHeight:255},{left:917,top:660,width:277,height:240,anchor:.537893,anchorY:1,referenceHeight:255},{left:24,top:948,width:250,height:255,anchor:.512638,anchorY:1,referenceHeight:255},{left:349,top:948,width:238,height:246,anchor:.509672,anchorY:1,referenceHeight:255},{left:637,top:948,width:224,height:245,anchor:.463326,anchorY:1,referenceHeight:255},{left:917,top:948,width:251,height:251,anchor:.460919,anchorY:1,referenceHeight:255}]},gwon_gold:{heroId:"gwon",skin:"gwon_gold",path:"assets/3d/fixed/inbetweens/gwon_gold-inbetweens-v1.webp",width:1260,height:1260,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:237,height:275,anchor:.512638,anchorY:1,referenceHeight:263.5},{left:360,top:24,width:207,height:275,anchor:.509672,anchorY:1,referenceHeight:263.5},{left:656,top:24,width:201,height:270,anchor:.463326,anchorY:1,referenceHeight:263.5},{left:949,top:24,width:233,height:274,anchor:.460919,anchorY:1,referenceHeight:263.5},{left:24,top:347,width:234,height:283,anchor:.512638,anchorY:1,referenceHeight:263.5},{left:360,top:347,width:207,height:278,anchor:.509672,anchorY:1,referenceHeight:263.5},{left:656,top:347,width:203,height:277,anchor:.463326,anchorY:1,referenceHeight:263.5},{left:949,top:347,width:231,height:281,anchor:.460919,anchorY:1,referenceHeight:263.5},{left:24,top:678,width:288,height:245,anchor:.44644,anchorY:1,referenceHeight:263.5},{left:360,top:678,width:248,height:243,anchor:.47,anchorY:1,referenceHeight:263.5},{left:656,top:678,width:245,height:246,anchor:.552449,anchorY:1,referenceHeight:263.5},{left:949,top:678,width:287,height:248,anchor:.537893,anchorY:1,referenceHeight:263.5},{left:24,top:974,width:261,height:262,anchor:.512638,anchorY:1,referenceHeight:263.5},{left:360,top:974,width:238,height:259,anchor:.509672,anchorY:1,referenceHeight:263.5},{left:656,top:974,width:235,height:258,anchor:.463326,anchorY:1,referenceHeight:263.5},{left:949,top:974,width:261,height:259,anchor:.460919,anchorY:1,referenceHeight:263.5}]},gwak_black:{heroId:"gwak",skin:"gwak_black",path:"assets/3d/fixed/inbetweens/gwak_black-inbetweens-v1.webp",width:974,height:1195,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:165,height:253,anchor:.492593,anchorY:1,referenceHeight:246.5},{left:277,top:24,width:153,height:254,anchor:.452126,anchorY:1,referenceHeight:246.5},{left:515,top:24,width:153,height:254,anchor:.65,anchorY:1,referenceHeight:246.5},{left:750,top:24,width:153,height:253,anchor:.495042,anchorY:1,referenceHeight:246.5},{left:24,top:326,width:156,height:256,anchor:.492593,anchorY:1,referenceHeight:246.5},{left:277,top:326,width:141,height:256,anchor:.452126,anchorY:1,referenceHeight:246.5},{left:515,top:326,width:142,height:256,anchor:.61,anchorY:1,referenceHeight:246.5},{left:750,top:326,width:152,height:255,anchor:.495042,anchorY:1,referenceHeight:246.5},{left:24,top:630,width:205,height:253,anchor:.434951,anchorY:1,referenceHeight:246.5},{left:277,top:630,width:190,height:252,anchor:.440223,anchorY:1,referenceHeight:246.5},{left:515,top:630,width:187,height:252,anchor:.552396,anchorY:1,referenceHeight:246.5},{left:750,top:630,width:200,height:257,anchor:.558612,anchorY:1,referenceHeight:246.5},{left:24,top:935,width:169,height:233,anchor:.492593,anchorY:1,referenceHeight:246.5},{left:277,top:935,width:164,height:235,anchor:.452126,anchorY:1,referenceHeight:246.5},{left:515,top:935,width:166,height:236,anchor:.52941,anchorY:1,referenceHeight:246.5},{left:750,top:935,width:159,height:236,anchor:.495042,anchorY:1,referenceHeight:246.5}]},gwak_gold:{heroId:"gwak",skin:"gwak_gold",path:"assets/3d/fixed/inbetweens/gwak_gold-inbetweens-v1.webp",width:1040,height:1280,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:179,height:273,anchor:.492593,anchorY:1,referenceHeight:266.5},{left:294,top:24,width:163,height:276,anchor:.452126,anchorY:1,referenceHeight:266.5},{left:546,top:24,width:163,height:274,anchor:.65,anchorY:1,referenceHeight:266.5},{left:796,top:24,width:165,height:273,anchor:.495042,anchorY:1,referenceHeight:266.5},{left:24,top:348,width:163,height:275,anchor:.492593,anchorY:1,referenceHeight:266.5},{left:294,top:348,width:149,height:274,anchor:.452126,anchorY:1,referenceHeight:266.5},{left:546,top:348,width:150,height:277,anchor:.61,anchorY:1,referenceHeight:266.5},{left:796,top:348,width:160,height:274,anchor:.495042,anchorY:1,referenceHeight:266.5},{left:24,top:673,width:222,height:275,anchor:.434951,anchorY:1,referenceHeight:266.5},{left:294,top:673,width:204,height:274,anchor:.440223,anchorY:1,referenceHeight:266.5},{left:546,top:673,width:202,height:272,anchor:.552396,anchorY:1,referenceHeight:266.5},{left:796,top:673,width:220,height:277,anchor:.558612,anchorY:1,referenceHeight:266.5},{left:24,top:998,width:184,height:258,anchor:.492593,anchorY:1,referenceHeight:266.5},{left:294,top:998,width:178,height:257,anchor:.452126,anchorY:1,referenceHeight:266.5},{left:546,top:998,width:176,height:256,anchor:.52941,anchorY:1,referenceHeight:266.5},{left:796,top:998,width:176,height:256,anchor:.495042,anchorY:1,referenceHeight:266.5}]},ahn_militia:{heroId:"ahn",skin:"ahn_militia",path:"assets/3d/fixed/inbetweens/ahn_militia-inbetweens-v1.webp",width:988,height:1198,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:156,height:250,anchor:.52479,anchorY:1,referenceHeight:244.5},{left:274,top:24,width:171,height:253,anchor:.44,anchorY:1,referenceHeight:244.5},{left:526,top:24,width:153,height:254,anchor:.5,anchorY:1,referenceHeight:244.5},{left:766,top:24,width:154,height:248,anchor:.473755,anchorY:1,referenceHeight:244.5},{left:24,top:326,width:153,height:247,anchor:.52479,anchorY:1,referenceHeight:244.5},{left:274,top:326,width:170,height:244,anchor:.46,anchorY:1,referenceHeight:244.5},{left:526,top:326,width:166,height:248,anchor:.5,anchorY:1,referenceHeight:244.5},{left:766,top:326,width:151,height:247,anchor:.473755,anchorY:1,referenceHeight:244.5},{left:24,top:622,width:202,height:238,anchor:.428626,anchorY:1,referenceHeight:244.5},{left:274,top:622,width:204,height:248,anchor:.427352,anchorY:1,referenceHeight:244.5},{left:526,top:622,width:192,height:246,anchor:.531864,anchorY:1,referenceHeight:244.5},{left:766,top:622,width:198,height:239,anchor:.570551,anchorY:1,referenceHeight:244.5},{left:24,top:918,width:162,height:247,anchor:.52479,anchorY:1,referenceHeight:244.5},{left:274,top:918,width:178,height:254,anchor:.525213,anchorY:1,referenceHeight:244.5},{left:526,top:918,width:179,height:256,anchor:.461072,anchorY:1,referenceHeight:244.5},{left:766,top:918,width:169,height:245,anchor:.473755,anchorY:1,referenceHeight:244.5}]},ahn_gold:{heroId:"ahn",skin:"ahn_gold",path:"assets/3d/fixed/inbetweens/ahn_gold-inbetweens-v1.webp",width:1022,height:1221,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:159,height:256,anchor:.52479,anchorY:1,referenceHeight:250.5},{left:283,top:24,width:175,height:260,anchor:.44,anchorY:1,referenceHeight:250.5},{left:540,top:24,width:156,height:259,anchor:.5,anchorY:1,referenceHeight:250.5},{left:789,top:24,width:155,height:256,anchor:.473755,anchorY:1,referenceHeight:250.5},{left:24,top:332,width:157,height:254,anchor:.52479,anchorY:1,referenceHeight:250.5},{left:283,top:332,width:175,height:253,anchor:.46,anchorY:1,referenceHeight:250.5},{left:540,top:332,width:167,height:253,anchor:.5,anchorY:1,referenceHeight:250.5},{left:789,top:332,width:155,height:253,anchor:.473755,anchorY:1,referenceHeight:250.5},{left:24,top:634,width:211,height:245,anchor:.428626,anchorY:1,referenceHeight:250.5},{left:283,top:634,width:209,height:254,anchor:.427352,anchorY:1,referenceHeight:250.5},{left:540,top:634,width:201,height:254,anchor:.531864,anchorY:1,referenceHeight:250.5},{left:789,top:634,width:209,height:246,anchor:.570551,anchorY:1,referenceHeight:250.5},{left:24,top:936,width:169,height:253,anchor:.52479,anchorY:1,referenceHeight:250.5},{left:283,top:936,width:180,height:261,anchor:.525213,anchorY:1,referenceHeight:250.5},{left:540,top:936,width:179,height:260,anchor:.461072,anchorY:1,referenceHeight:250.5},{left:789,top:936,width:168,height:251,anchor:.473755,anchorY:1,referenceHeight:250.5}]},dangun_sky:{heroId:"dangun",skin:"dangun_sky",path:"assets/3d/fixed/inbetweens/dangun_sky-inbetweens-v1.webp",width:1068,height:1104,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:163,height:232,anchor:.527138,anchorY:1,referenceHeight:236.5},{left:299,top:24,width:164,height:226,anchor:.45,anchorY:1,referenceHeight:236.5},{left:559,top:24,width:166,height:230,anchor:.54,anchorY:1,referenceHeight:236.5},{left:817,top:24,width:167,height:232,anchor:.460881,anchorY:1,referenceHeight:236.5},{left:24,top:304,width:175,height:237,anchor:.527138,anchorY:1,referenceHeight:236.5},{left:299,top:304,width:167,height:235,anchor:.46,anchorY:1,referenceHeight:236.5},{left:559,top:304,width:167,height:234,anchor:.52,anchorY:1,referenceHeight:236.5},{left:817,top:304,width:175,height:236,anchor:.460881,anchorY:1,referenceHeight:236.5},{left:24,top:589,width:227,height:209,anchor:.478438,anchorY:1,referenceHeight:236.5},{left:299,top:589,width:212,height:214,anchor:.432054,anchorY:1,referenceHeight:236.5},{left:559,top:589,width:210,height:216,anchor:.551343,anchorY:1,referenceHeight:236.5},{left:817,top:589,width:227,height:211,anchor:.523123,anchorY:1,referenceHeight:236.5},{left:24,top:853,width:173,height:219,anchor:.527138,anchorY:1,referenceHeight:236.5},{left:299,top:853,width:181,height:227,anchor:.570995,anchorY:1,referenceHeight:236.5},{left:559,top:853,width:181,height:226,anchor:.412022,anchorY:1,referenceHeight:236.5},{left:817,top:853,width:179,height:222,anchor:.460881,anchorY:1,referenceHeight:236.5}]},dangun_gold:{heroId:"dangun",skin:"dangun_gold",path:"assets/3d/fixed/inbetweens/dangun_gold-inbetweens-v1.webp",width:1075,height:1105,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:167,height:234,anchor:.527138,anchorY:1,referenceHeight:237},{left:301,top:24,width:165,height:232,anchor:.45,anchorY:1,referenceHeight:237},{left:561,top:24,width:167,height:232,anchor:.54,anchorY:1,referenceHeight:237},{left:821,top:24,width:173,height:234,anchor:.460881,anchorY:1,referenceHeight:237},{left:24,top:306,width:179,height:236,anchor:.527138,anchorY:1,referenceHeight:237},{left:301,top:306,width:171,height:236,anchor:.46,anchorY:1,referenceHeight:237},{left:561,top:306,width:169,height:236,anchor:.52,anchorY:1,referenceHeight:237},{left:821,top:306,width:180,height:236,anchor:.460881,anchorY:1,referenceHeight:237},{left:24,top:590,width:229,height:211,anchor:.478438,anchorY:1,referenceHeight:237},{left:301,top:590,width:212,height:217,anchor:.432054,anchorY:1,referenceHeight:237},{left:561,top:590,width:212,height:217,anchor:.551343,anchorY:1,referenceHeight:237},{left:821,top:590,width:230,height:213,anchor:.523123,anchorY:1,referenceHeight:237},{left:24,top:855,width:186,height:218,anchor:.527138,anchorY:1,referenceHeight:237},{left:301,top:855,width:191,height:226,anchor:.570995,anchorY:1,referenceHeight:237},{left:561,top:855,width:181,height:226,anchor:.412022,anchorY:1,referenceHeight:237},{left:821,top:855,width:190,height:221,anchor:.460881,anchorY:1,referenceHeight:237}]}};function Lh(i=[]){let e=new Map;for(let t of i){if(!ir[t.heroId])continue;let n=gn(t.heroId,t.skin)?t.skin:null,r=n??t.heroId;e.set(r,{key:r,heroId:t.heroId,skin:n})}return[...e.values()].sort((t,n)=>t.key.localeCompare(n.key))}function of(i=[]){return Lh(i).map(e=>e.key).join(",")}var Dh={yi:ir.yi.path,towers:"assets/3d/fixed/tower-tiers-v2.webp",winter:"assets/3d/fixed/winter-props-v2.webp"},Nh=new Map,ym=new U(0,1,0),bm=new U(1,0,0),Xr=new U,qr=new zt,af=new U,hf=new U,Mm=new ot().set(1,.5,0,0,0,0,0,.042,0,-.75,1,0,0,0,0,1),cf=new ot;function Sm(i,e,t,n,r,s,o,h=48){let c=n+s,a=r+o,f=n-1,d=r-1;for(let _=r;_<r+o;_++)for(let v=n;v<n+s;v++)i[(_*e+v)*4+3]>=h&&(c=Math.min(c,v),f=Math.max(f,v),a=Math.min(a,_),d=Math.max(d,_));if(c>f)return{left:n,top:r,width:s,height:o,anchor:.5};let l=0,u=0;for(let _=Math.max(a,Math.floor(d-(d-a)*.1));_<=d;_++)for(let v=c;v<=f;v++)i[(_*e+v)*4+3]>=96&&(l+=v,u++);return{left:c,top:a,width:f-c+1,height:d-a+1,anchor:u?Yo.clamp((l/u-c)/(f-c+1),.2,.8):.5}}function Tm(i,e,t=()=>document.createElement("canvas")){let r=t();return r.width=e.width+12*2,r.height=e.height+12*2,r.getContext("2d").drawImage(i,e.left,e.top,e.width,e.height,12,12,e.width,e.height),{canvas:r,frame:{...e,left:12,top:12},sourceBounds:e}}async function An(i,e,t,n=null,r=!0){let s=()=>new Promise((o,h)=>{let c=i.startsWith("data:")?i:new URL(i,new URL("../../",import.meta.url)).href;new Rr().load(c,a=>{let f=document.createElement("canvas");f.width=a.width,f.height=a.height;let d=f.getContext("2d",{willReadFrequently:!0});d.drawImage(a,0,0);let l=n?.frames?null:d.getImageData(0,0,a.width,a.height).data,u=[];if(n?.frames)for(let _ of n.frames)u.push({..._,left:Math.round(_.left*a.width/n.width),top:Math.round(_.top*a.height/n.height),width:Math.round(_.width*a.width/n.width),height:Math.round(_.height*a.height/n.height),referenceHeight:_.referenceHeight*a.height/n.height});else for(let _=0;_<t;_++)for(let v=0;v<e;v++){let g=Math.round(n?n.x[v]*a.width/n.width:v*a.width/e),p=Math.round(n?n.y[_]*a.height/n.height:_*a.height/t),T=Math.round(n?n.x[v+1]*a.width/n.width:(v+1)*a.width/e),C=Math.round(n?n.y[_+1]*a.height/n.height:(_+1)*a.height/t);u.push(Sm(l,a.width,a.height,g,p,T-g,C-p,n?11:48))}o({canvas:f,frames:u,width:a.width,height:a.height,isolated:n?u.map(_=>Tm(f,_)):null,poseAtlas:!!n?.frames})},void 0,h)});return r?(Nh.has(i)||Nh.set(i,s()),Nh.get(i)):s()}var jo=class{constructor(e){this.world=e,this.ready=!1,this.loading=!0,this.coreLoading=!0,this.failed=!1,this.destroyed=!1,this.textures=new Map,this.materials=new Map,this.geometries=new Map,this.combatPoses={enemy:{},ally:{}},this.combatInbetweens={enemy:{},ally:{}},this.combatGeneration=0,this.skinPoses={},this.skinGeneration=0,this.heroLooksKey=null,this.inbetweenPoses={},this.inbetweenGeneration=0,this.inbetweenKey=null,e.renderer.domElement.dataset.fixedArtStatus="loading";let t=Object.values(Ch).map(h=>An(h.path,5,4,h).catch(c=>(console.warn("Landmark stage art unavailable; keeping base illustration.",c.message),null))),n=Promise.all(Object.entries(ir).filter(([h])=>h!=="yi").map(async([h,c])=>[h,await An(c.path,4,4,c).catch(a=>(console.warn("Hero poses unavailable; keeping base illustration.",h,a.message),null))])),r=An(Gr.path,3,2,Gr).catch(h=>(console.warn("Seasonal trees unavailable; keeping base scenery.",h.message),null));this.corePromise=Promise.all([Ol(),An(Dh.yi,4,4,ir.yi),An(Dh.towers,5,2),An(Dh.winter,3,2),...t,n,r]).then(([,h,c,a,f,d,l,u])=>{if(this.destroyed)return;this.yi=h,this.heroPoses={yi:h,...Object.fromEntries(l)},this.towerFrames=c,this.winter=a,this.landmarks={a:f,b:d},this.seasonTrees=u,this.ready=!0,e.renderer.domElement.dataset.seasonTreeArtStatus=u?"ready":"fallback",e.renderer.domElement.dataset.landmarkArtStatus=f&&d?"ready":f||d?"partial":"fallback";let _=Object.values(this.heroPoses).filter(Boolean).length;e.renderer.domElement.dataset.heroPoseStatus=_===8?"ready":"partial",e.renderer.domElement.dataset.heroPoseCount=String(_)}).catch(h=>{this.failed=!0,console.warn("Illustrated battle assets unavailable; keeping mesh fallback.",h.message)}).finally(()=>{this.coreLoading=!1,this.updateLoading()}),this.prepareCombatArt(e.stage,e.combatKinds),this.prepareHeroLooks(e.heroLooks);let s=64,o=new Uint8Array(s*s*4);for(let h=0;h<s;h++)for(let c=0;c<s;c++){let a=Math.hypot((c+.5-s/2)/(s/2),(h+.5-s/2)/(s/2)),f=(h*s+c)*4;o.set([255,255,255,Math.round(Math.pow(Math.max(0,1-a),1.5)*255)],f)}this.shadowTexture=new Gi(o,s,s),this.shadowTexture.needsUpdate=!0,this.shadowMaterial=new jt({map:this.shadowTexture,color:"#061725",transparent:!0,opacity:.58,depthWrite:!1,toneMapped:!1}),this.shadowMaterial.userData.fixedArt=!0}updateLoading(){this.loading=!!(this.coreLoading||this.combatLoading||this.skinLoading||this.inbetweenLoading),this.destroyed||(this.world.renderer.domElement.dataset.fixedArtStatus=this.loading?"loading":this.ready?"ready":"fallback")}releasePoseAtlas(e){for(let{canvas:t}of e?.isolated??[]){let n=this.textures.get(t);if(n){for(let r of[t,"shadow:"+n.uuid])this.materials.get(r)?.dispose(),this.materials.delete(r);for(let[r,s]of this.geometries)r.startsWith(n.uuid+":")&&(s.dispose(),this.geometries.delete(r));n.dispose(),this.textures.delete(t)}}}prepareCombatArt(e,t=null){let n=++this.combatGeneration,r=Ql(e,t),s=[];this.combatPoses??(this.combatPoses={enemy:{},ally:{}}),this.combatInbetweens??(this.combatInbetweens={enemy:{},ally:{}});for(let o of["enemy","ally"]){let h=new Set(r[o]);for(let c of[this.combatPoses[o],this.combatInbetweens[o]])for(let[a,f]of Object.entries(c))h.has(a)||(this.releasePoseAtlas(f),delete c[a]);for(let c of h){let a=Xl[o][c],f=this.combatPoses[o][c],d=Ko[c],l=this.combatInbetweens[o][c],u=Promise.resolve(f!==void 0?f:a?An(a.path,4,4,a,!1):null).catch(v=>(console.warn("Combat poses unavailable; keeping static illustration.",c,v.message),null)),_=Promise.resolve(l!==void 0?l:d?.side===o?An(d.path,4,4,d,!1):null).catch(v=>(console.warn("Combat in-betweens unavailable; keeping original poses.",c,v.message),null));s.push(Promise.all([u,_]).then(([v,g])=>({side:o,id:c,art:v,inbetweens:g})))}}return this.combatLoading=!0,this.updateLoading(),this.combatPromise=Promise.all(s).then(o=>{if(this.destroyed||n!==this.combatGeneration)return;this.combatPoses={enemy:{},ally:{}},this.combatInbetweens={enemy:{},ally:{}};for(let{side:d,id:l,art:u,inbetweens:_}of o)this.combatPoses[d][l]=u,this.combatInbetweens[d][l]=_;let h=o.filter(d=>d.art).length,c=this.world.renderer.domElement.dataset;Object.assign(c,{combatPoseStatus:h===o.length?"ready":"partial",combatPoseCount:String(h),combatPoseExpected:String(o.length),combatPoseKinds:o.map(d=>d.id).join(",")});let a=o.filter(d=>Ko[d.id]?.side===d.side),f=a.filter(d=>d.inbetweens).length;Object.assign(c,{combatInbetweenStatus:f===a.length?"ready":"partial",combatInbetweenCount:String(f),combatInbetweenExpected:String(a.length),combatInbetweenKinds:a.map(d=>d.id).join(",")})}).finally(()=>{n===this.combatGeneration&&(this.combatLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}refreshPromise(){this.promise=Promise.all([this.corePromise,this.combatPromise,this.skinPromise,this.inbetweenPromise])}prepareHeroLooks(e=[]){this.prepareInbetweens(e);let t=tf(e);if(t===this.heroLooksKey)return this.promise;this.heroLooksKey=t;let n=this.skinGeneration=(this.skinGeneration??0)+1,r=Ph(e),s=new Set(r.map(o=>o.skin));this.skinPoses??(this.skinPoses={});for(let[o,h]of Object.entries(this.skinPoses))s.has(o)||(this.releasePoseAtlas(h),delete this.skinPoses[o]);return this.skinLoading=!0,this.updateLoading(),this.skinPromise=Promise.all(r.map(async({skin:o})=>{let h=ef[o],c=await Promise.resolve(this.skinPoses[o]??(h?An(h.path,4,4,h,!1):null)).catch(a=>(console.warn("Costume poses unavailable; keeping base hero poses.",o,a.message),null));return{skin:o,art:c}})).then(o=>{if(this.destroyed||n!==this.skinGeneration)return;this.skinPoses=Object.fromEntries(o.map(({skin:c,art:a})=>[c,a]));let h=o.filter(c=>c.art).length;Object.assign(this.world.renderer.domElement.dataset,{skinPoseStatus:h===o.length?"ready":"partial",skinPoseCount:String(h),skinPoseExpected:String(o.length),skinPoseKinds:t})}).finally(()=>{n===this.skinGeneration&&(this.skinLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}prepareInbetweens(e=[]){let t=of(e);if(t===this.inbetweenKey)return this.promise;this.inbetweenKey=t;let n=this.inbetweenGeneration=(this.inbetweenGeneration??0)+1,r=Lh(e).filter(o=>$o[o.key]),s=new Set(r.map(o=>o.key));this.inbetweenPoses??(this.inbetweenPoses={});for(let[o,h]of Object.entries(this.inbetweenPoses))s.has(o)||(this.releasePoseAtlas(h),delete this.inbetweenPoses[o]);return this.inbetweenLoading=!0,this.updateLoading(),this.inbetweenPromise=Promise.all(r.map(async o=>{let h=$o[o.key],c=await Promise.resolve(this.inbetweenPoses[o.key]??An(h.path,4,4,h,!1)).catch(a=>(console.warn("In-between poses unavailable; keeping original poses.",o.key,a.message),null));return{...o,art:c}})).then(o=>{if(this.destroyed||n!==this.inbetweenGeneration)return;this.inbetweenPoses=Object.fromEntries(o.map(({key:c,art:a})=>[c,a]));let h=o.filter(c=>c.art).length;Object.assign(this.world.renderer.domElement.dataset,{heroInbetweenStatus:h===o.length?"ready":"partial",heroInbetweenCount:String(h),heroInbetweenExpected:String(o.length),heroInbetweenKinds:r.map(c=>c.key).join(","),heroInbetweenLookKey:t})}).finally(()=>{n===this.inbetweenGeneration&&(this.inbetweenLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}texture(e){if(!this.textures.has(e)){let t=new Sr(e);t.colorSpace=bt,t.anisotropy=4,t.generateMipmaps=!0,this.textures.set(e,t)}return this.textures.get(e)}material(e,t=!1){let n=e;if(!this.materials.has(n)){let o=new jt({map:this.texture(e),transparent:!0,alphaTest:.16,depthWrite:!0,toneMapped:!1,side:Ot});o.userData.fixedArt=!0,this.materials.set(n,o)}let r=this.materials.get(n),s=this.world.theme;return r.color.set(s.snow?t?"#e5ebff":"#9eb8df":s.id==="autumn"?"#e7d3c2":t?"#f2e6d2":"#bacbd0"),r}geometry(e,t,n,r=t?.anchor??.5){let s=t??{left:0,top:0,width:e.width,height:e.height},o=s.anchorY??1,h=[this.texture(e).uuid,s.left,s.top,s.width,s.height,n,r,o,s.referenceHeight].join(":");if(!this.geometries.has(h)){let c=s.referenceHeight?n*s.height/s.referenceHeight:n,a=c*s.width/s.height,f=new Zn(a,c);f.translate(a*(.5-r),c*(o-.5),0);let d=f.attributes.uv;for(let l=0;l<d.count;l++)d.setXY(l,(s.left+d.getX(l)*s.width)/e.width,1-(s.top+(1-d.getY(l))*s.height)/e.height);this.geometries.set(h,f)}return this.geometries.get(h)}image(e,t,n=null,r=!1){if(!e)return null;let s=e.img??e.canvas??e,o=new gt(this.geometry(s,n,t,e.ax??n?.anchor??.5),this.material(s,r));return o.quaternion.copy(this.world.camera.quaternion),o.userData.fixedArt=!0,o.userData.artHeight=t,o.castShadow=!1,o.receiveShadow=!1,o}shadow(e,t=1,n=t*.65){let r=new Zn(t,n);r.rotateX(-Math.PI/2),r.userData.owned3d=!0;let s=new gt(r,this.shadowMaterial);return s.position.y=.039,s.raycast=()=>{},e.add(s),s}castImage(e,t){let n=new gt(t.geometry,this.imageShadowMaterial(t));return n.matrixAutoUpdate=!1,n.raycast=()=>{},n.userData.fixedArt=!0,e.add(n),this.projectShadow(n,t),n}imageShadowMaterial(e){let t="shadow:"+e.material.map.uuid;if(!this.materials.has(t)){let n=new jt({map:e.material.map,color:"#07172e",transparent:!0,opacity:.46,alphaTest:.04,depthWrite:!1,toneMapped:!1,side:Ot});n.userData.fixedArt=!0,this.materials.set(t,n)}return this.materials.get(t)}projectShadow(e,t,n=null){t.updateMatrix(),e.matrix.copy(t.matrix),n&&e.matrix.premultiply(cf.makeRotationFromQuaternion(n.quaternion)),e.matrix.premultiply(Mm),n&&e.matrix.premultiply(cf.makeRotationFromQuaternion(n.quaternion.clone().invert())),e.geometry=t.geometry,e.material=this.imageShadowMaterial(t),e.matrixWorldNeedsUpdate=!0}prop(e,t=2,n=0){let r={snowPine:n>=.5?1:0,snowRock:2,hanok:n>=.5?4:3,cliff:5}[e],s=this.world.theme.snow&&r!==void 0,o=nf(this.world.theme,e,n),h=o===null?null:this.seasonTrees?.isolated?.[o],c=h?.canvas??(s?this.winter:e==="gate"?Vl("gate"):Gl(e==="blossom"||e==="broadleaf"?"pine":e));if(!c)return new Pt;let a=new Pt,f=this.image(c,t,h?.frame??(s?c.frames[r]:null));return a.add(f),this.shadow(a,t*.55,t*.3),this.castImage(a,f),h&&(a.userData.seasonTree={kind:e,index:o}),a}hideModel(e){for(let t of e.children)t!==e.userData.hp&&t!==e.userData.ownerRing&&(t.visible=!1)}unitArt(e,t,n){let r=t?e.heroId:n?e.kind:e.type,s=t&&gn(r,e.skin)?this.skinPoses?.[e.skin]:null;return(t?s??this.heroPoses?.[r]??(r==="yi"?this.yi:null):this.combatPoses?.[n?"ally":"enemy"]?.[r])??(t?Yl(r,e.skin):n?kl(r):Bl(r))}unitInbetweens(e,t,n="hero"){if(n!=="hero"){let h=n==="ally"?e.kind:e.type,c=Ko[h];return t?.poseAtlas&&t===this.combatPoses?.[n]?.[h]&&c?.side===n?this.combatInbetweens?.[n]?.[h]??null:null}let r=e.heroId;if(!r||!t?.poseAtlas)return null;let s=gn(r,e.skin)?this.skinPoses?.[e.skin]:null,o=s&&t===s?e.skin:t===this.heroPoses?.[r]?r:null;return o&&$o[o]?.heroId===r?this.inbetweenPoses?.[o]??null:null}unitProxy(e,t=!1){if(!this.ready||!this.unitArt(e,!1,t))return null;let n=new Pt,r=new Pt,s=new Pt;return n.add(r,s),s.userData.muzzle=new U,n.userData.rig=r,n.userData.weapons=[null,s],n.userData.illustrationProxy=!0,n}attachUnit(e,t,n,r){if(!this.ready||e.userData.fixedImage)return;let s=n?t.heroId:r?t.kind:t.type,o=this.unitArt(t,n,r);if(!o)return;let h=n?1.85:["ram","turtle","courier","cavalry"].includes(s)?1.5:1.36;this.hideModel(e);let c=!!o.poseAtlas||n&&o===this.yi,a=c?o.isolated?.[0]:null,f=this.image(a??o,h,a?.frame??(c?o.frames[0]:null),!0);f.material=f.material.clone(),f.material.userData.owned3d=!0,e.add(f);let d=n?new gt(f.geometry,new jt({map:f.material.map,color:"#7cb4e6",transparent:!0,opacity:.5,alphaTest:.18,depthTest:!0,depthFunc:Fi,depthWrite:!1,toneMapped:!1,side:Ot})):null;d&&(d.material.userData.owned3d=!0,d.renderOrder=30,d.raycast=()=>{},e.add(d));let l=this.shadow(e,n?.85:.65,.5),u=this.castImage(e,f);e.userData.fixedImage={image:f,hint:d,height:h,art:o,kind:s,contact:l,shadow:u,directional:c,faction:n?"hero":r?"ally":"enemy"},e.userData.labelHeight=h+.18}attachTower(e,t,n,r){if(!this.ready||e.userData.fixedImage)return;let s=["sungnyemun","hwaseong"].includes(t),o=Wl(t,n,r),h=n===4?r==="B"?4:3:n-1,c=h+(t==="hwaseong"?5:0),a=o?this.landmarks?.[o.sheet]?.isolated[o.index]:null,f=s?this.towerFrames:a??zl(t);if(!f)return;let d=s?f.frames[c]:a?.frame??null,l=s||!!a,u=1.2;this.hideModel(e);let _=this.image(f,u,d);if(e.add(_),this.shadow(e,1,.63),this.castImage(e,_),e.userData.fixedImage={image:_,height:u,kind:t,dedicated:l,frameIndex:s?c:o?.index},e.userData.labelHeight=u+.2,!l&&n>1)for(let v=0;v<n-1;v++){let g=this.prop("jangseung",.28);g.position.set((v-(n-2)/2)*.22,0,.25),e.add(g)}}updateUnit(e,t,n,r,s,o=null){let h=e.userData.fixedImage;if(!h)return;let{image:c,hint:a,art:f,height:d}=h,l=this.unitInbetweens(t,f,h.faction);h.inbetweens=l,qr.copy(e.quaternion).invert(),c.quaternion.copy(this.world.camera.quaternion).premultiply(qr);let u=bm.clone().applyQuaternion(this.world.camera.quaternion),_=ym.clone().applyQuaternion(this.world.camera.quaternion);Xr.set(Math.sin(e.rotation.y),0,Math.cos(e.rotation.y));let v=Xr.dot(u),g=Xr.dot(_);af.copy(u).setY(0).normalize(),hf.copy(_).setY(0).normalize();let p=o?sf(h.motion,{...o,kind:h.kind,attack:r,hp:t.hp,inbetweens:!!l,facingX:Xr.dot(af),facingY:Xr.dot(hf),actionSeq:t.actionSeq??o.actionSeq,actionAt:t.actionAt??o.actionAt,actionDuration:t.actionDuration??o.actionDuration,stunned:t.stunT>0}):null;p&&(h.motion=p.state,h.motionPhase=p.phase,h.motionBlend=p.blend);let T=Number.isInteger(o?.poseRow)||!p?g>=0?v>=0?1:2:v>=0?0:3:p.facing,C=T<2?1:-1;if(e.userData.illustrationProxy&&e.userData.weapons[1].position.copy(_).multiplyScalar(d*.6).addScaledVector(u,C*.18).applyQuaternion(qr),h.directional){let y=T,b=Number.isInteger(o?.poseRow)?o.poseRow:p?p.row:r>0?3:n?1+Math.floor(s*5.5+(e.userData.phase??0))%2:0,M=b>=4&&b<=7&&l||b>=0&&b<=3?b:0,E=M*4+y,w=M>=4?l:f,A=M>=4?E-16:E,H=w.isolated?.[A],D=H?.canvas??w.canvas,Y=H?.frame??w.frames[A];if(c.geometry=this.geometry(D,Y,d),c.material.map=this.texture(D),c.material.color.copy(this.material(D,!0).color),c.scale.x=1,h.pose=["idle","walk-left","walk-right","attack","pass-a","pass-b","follow-through","recover"][M],h.facing=y,h.poseIndex=E,h.faction==="hero"&&(this.world.renderer.domElement.dataset.heroInbetweenActive=String(M>=4)),h.kind==="yi"&&(this.world.renderer.domElement.dataset.yiPose=h.pose,this.world.renderer.domElement.dataset.yiFacing=String(y)),h.faction!=="hero"){let z=this.world.renderer.domElement.dataset;z.combatPoseActive="true",z.combatPoseLastKind=h.kind,z.combatPoseLastState=h.pose,z.combatInbetweenActive=String(M>=4)}}else c.scale.x=C;c.position.set(0,p?p.lift:n?Math.abs(Math.sin(s*8+(e.userData.phase??0)))*.025:0,0),p&&(c.quaternion.multiply(new zt().setFromAxisAngle(new U(0,0,1),-p.lean*C)),c.position.addScaledVector(u.clone().applyQuaternion(qr),p.recoil*C)),h.shadow.visible=!0,h.contact&&(h.contact.visible=!0),this.projectShadow(h.shadow,c,e),c.material.opacity=t.stealth&&!t.revealed?.25:1,a&&(a.geometry=c.geometry,a.material.map=c.material.map,a.quaternion.copy(c.quaternion),a.position.copy(c.position),a.scale.copy(c.scale),a.material.color.set(t.owner===1?"#efaa96":"#7cb4e6"),a.visible=!t.dead),e.userData.hp&&e.userData.hp.position.copy(_).multiplyScalar(d+.13).applyQuaternion(qr),this.world.renderer.domElement.dataset.fixedArt="true",p&&(this.world.renderer.domElement.dataset.spriteMotion="distance-contact-recovery")}updateDeath(e,t,n=1.3){let r=e.userData.fixedImage;if(!r)return;let s=Yo.clamp(t/n,0,1),o=1-Math.pow(1-Math.min(1,t/.3),3);r.motion=null,r.image.quaternion.copy(this.world.camera.quaternion).premultiply(e.quaternion.clone().invert()),r.image.rotateZ((e.userData.entity?.id%2?1:-1)*o*.7),r.image.position.set(0,-o*.07,0),r.image.material.opacity=1-s,r.shadow.visible=s<.5,r.contact&&(r.contact.visible=s<.5),r.hint&&(r.hint.visible=!1),this.projectShadow(r.shadow,r.image,e)}anchor(e,t=.12){let n=e?.userData.fixedImage;return n?new U(0,n.height+t,0).applyQuaternion(this.world.camera.quaternion).add(e.position):null}towerMuzzle(e){let t=e?.userData.fixedImage;return t?this.anchor(e,-t.height*.45):null}dispose(){this.destroyed=!0;for(let e of this.textures.values())e.dispose();for(let e of this.materials.values())e.dispose();for(let e of this.geometries.values())e.dispose();this.shadowMaterial.dispose(),this.shadowTexture.dispose()}};var Uh={spring:{name:"봄",english:"SPRING",caption:"꽃잎이 흩날리는 길목, 다시 피어나는 수호의 맹세.",sky:"#182d3b",fog:"#263d4c",ground:"#a7b9a6",road:"#ddd0b5",shore:"#929b87",water:"#365c72",leaf:["#dfa3b3","#e7c0c8","#b67e97"],grass:"#5d775b",sun:"#ffe2ba",sunPower:2.05,hemi:"#abc9e2",bounce:"#364940",fill:"#829fbf",exposure:1.02,particle:"petal",snow:!1},summer:{name:"여름",english:"SUMMER",caption:"푸른 숲과 강을 따라, 뜨거운 진격을 막아라.",sky:"#162c38",fog:"#254151",ground:"#879e91",road:"#d1c5aa",shore:"#9a9c83",water:"#265975",leaf:["#416d43","#648a4c","#355f48"],grass:"#3e6150",sun:"#ffe8c4",sunPower:2.15,hemi:"#a6c8e6",bounce:"#293e35",fill:"#779cbe",exposure:1.03,particle:"none",snow:!1},autumn:{name:"가을",english:"AUTUMN",caption:"붉게 물든 산하, 황혼의 방어선을 지켜라.",sky:"#292d40",fog:"#3b4056",ground:"#baa58a",road:"#dfc5a4",shore:"#a79a81",water:"#36566f",leaf:["#b65d33","#d79841","#8e4032"],grass:"#8b7953",sun:"#ffd0a0",sunPower:2,hemi:"#b2bdd9",bounce:"#4c3d39",fill:"#899cbf",exposure:1.01,particle:"leaf",snow:!1},winter:{name:"겨울",english:"WINTER",caption:"푸른 눈빛 아래, 마지막 길목을 지켜라.",sky:"#102039",fog:"#1b3151",ground:"#94b0d4",road:"#7896b6",shore:"#6d88a4",water:"#223d60",leaf:["#334e55","#243b48","#526b72"],grass:"#94a7bb",sun:"#aac9ff",sunPower:1.7,hemi:"#88b0ee",bounce:"#263953",fill:"#557bb1",exposure:.96,particle:"snow",snow:!0}};var Dn=(i,e,t)=>Math.max(0,Math.min(i,t)-e)*1.5,Fh={stop:{name:"이동 → 멈춤 → 재이동",stops:[["이동",1.1],["멈추는 순간",1.36],["발 정리",1.43],["준비",1.6],["재이동",2.6]]},combat:{name:"이동 → 교전 → 복귀",stops:[["이동",1.1],["타격",1.31],["공격 후",1.41],["복귀",1.52],["재이동",2.3]]},turn:{name:"방향 경계와 실제 회전",stops:[["오른쪽 경계",.8],["왼쪽으로 회전",2.1],["왼쪽 경계",2.9],["오른쪽으로 회전",3.8]]},pause:{name:"일시정지 중 늦은 공격 정보",stops:[["첫 공격",.83],["일시정지",1.1],["늦은 공격 도착",1.5],["재개·새 공격",2.02],["복귀",2.24]]},stun:{name:"이동 → 기절 → 재이동",stops:[["이동",1.1],["기절",1.8],["재이동",2.5],["준비",3.9]]}},Qo=4.8;function Oh(i,e,t,n){let r=0,s=e,o=0,h=0,c=!1,a=!1,f=-Math.PI/4,d="준비";if(i==="stop")r=Dn(e,.35,1.35)+Dn(e,2.35,3.35),d=e<.35?"준비":e<1.35?"이동":e<1.49?"멈춤 · 발 정리":e<2.35?"준비":e<3.35?"재이동":"준비";else if(i==="combat")r=Dn(e,.35,1.3)+Dn(e,2,3)+Dn(e,3.65,4.3),o=e>=3?2:e>=1.3?1:0,h=o===2?3:1.3,d=o&&e-h<.34?"교전 · 타격과 복귀":e<.35||e>4.3?"준비":e>=1.64&&e<2||e>=3.34&&e<3.65?"교전 뒤 대기":"이동";else if(i==="turn"){r=e*.8;let l=e<1.6?.02:e<2.6?-.35:e<3.4?-.02:.35;f=-Math.PI/2+l+Math.sin(e*28)*.04,d=e<1.6?"경계 ±2.3° 흔들림":e<2.6?"왼쪽으로 실제 회전":e<3.4?"왼쪽 경계 흔들림":"오른쪽으로 실제 회전"}else i==="pause"?(r=Dn(e,0,.8)+Dn(e,2.6,3.6),c=e>=1&&e<2,s=e<1?e:e<2?e>=1.35?1.1:1:e-.9,o=e>=1.35?2:e>=.8?1:0,h=o===2?1.1:.8,f=o===2?-Math.PI*.75:-Math.PI/4,d=c?o===2?"일시정지 · 반대 방향 공격 정보 도착":"일시정지 · 표시 유지":o&&s-h<.34?"공격과 복귀":e>=2.6&&e<3.6?"재이동":"준비"):i==="stun"&&(r=Dn(e,.35,1.4)+Dn(e,2.2,3.6),a=e>=1.4&&e<2.2,d=a?"기절 · 보행 중단":e>=2.2&&e<3.6?"기절 후 재이동":e>=.35&&e<1.4?"이동":"준비");return["courier","turtle"].includes(n)&&(o=0,d=d.replace("교전 · 타격과 복귀","이동 병기 · 대기").replace("공격과 복귀","이동 병기 · 대기")),{x:r,z:0,time:s,dt:c?0:t,frozen:c,stunned:a,actionSeq:o,actionAt:h,actionDuration:.25,attack:o?Math.max(0,.25-(s-h)):0,aimKey:o?i+":"+o:null,angle:f,label:d,resetKey:i}}var yt=i=>document.getElementById(i),Yt=new Go({canvas:yt("motion-canvas"),antialias:!0,alpha:!0});Yt.setPixelRatio(Math.min(devicePixelRatio,1.5));Yt.outputColorSpace=bt;var en=new di(-1,1,1,-1,.1,100);en.position.set(17,26,26);en.lookAt(0,1.05,0);en.updateMatrixWorld();var Am=new U(1,0,0).applyQuaternion(en.quaternion).setY(0).normalize(),Em=new U(0,1,0).applyQuaternion(en.quaternion).setY(0).normalize(),lf={camera:en,renderer:Yt,theme:{id:"winter",...Uh.winter},heroLooks:[{heroId:"yi"},{heroId:"sejong"}],combatKinds:{enemy:["ashigaru","cavalry"],ally:["guard","turtle"]}},Nn=new jo(lf),ea=new wr,Kr=new gt(new Ar(.63,48),new jt({color:"#20394c",transparent:!0,opacity:.5,depthWrite:!1}));Kr.rotation.x=-Math.PI/2;Kr.position.y=.005;ea.add(Kr);var Cm=[["yi","이순신","남색 망토 · 활과 화살통","hero"],["sejong","세종대왕","붉은 곤룡포 · 책","hero"],["guard","수비병","남색 갑주 · 창","ally"],["ashigaru","아시가루","삿갓 · 가벼운 갑주","enemy"],["cavalry","기병","기수와 갈색 말","enemy"],["turtle","거북선","철갑 지붕 · 용머리","ally"]],Rm=["준비","첫 디딤","둘째 디딤","타격","첫 중간","둘째 중간","공격 후","복귀"],Im=["오른쪽 앞","오른쪽 뒤","왼쪽 뒤","왼쪽 앞"],sr=Cm.map(([i,e,t,n],r)=>{let s=document.createElement("article");s.dataset.kind=i;let o=document.createElement("div");o.className="viewport";let h=document.createElement("div");h.className="info";let c=document.createElement("b");c.textContent=e;let a=document.createElement("small");a.textContent=" · "+t;let f=document.createElement("output");f.textContent="원화 준비 중",h.append(c,a,f),s.append(o,h),yt("actors").append(s);let d={id:r+1,hp:100,maxHp:100,...n==="hero"?{heroId:i,owner:r}:n==="ally"?{kind:i}:{type:i}},l=new Pt;return l.userData.phase=0,{kind:i,side:n,entity:d,root:l,card:s,viewport:o,output:f}}),Jr="stop",tn=0,nn=!1,Zr=0,or=0,Yh=0,rr=0,Pm=0;for(let[i,e]of Object.entries(Fh))yt("scenario").add(new Option(e.name,i));function Bh(i){if(!(!Nn.ready||Nn.loading))for(let{kind:e,side:t,entity:n,root:r,card:s,output:o}of sr){let h=Oh(Jr,tn,i,e),c=Am.clone().multiplyScalar(Math.cos(h.angle)).addScaledVector(Em,Math.sin(h.angle));Nn.attachUnit(r,n,t==="hero",t==="ally"),r.rotation.y=Math.atan2(c.x,c.z),Object.assign(n,{actionSeq:h.actionSeq,actionAt:h.actionAt,actionDuration:h.actionDuration,stunT:h.stunned?1:0}),Nn.updateUnit(r,n,i>0,h.attack,h.time,h);let a=r.userData.fixedImage;Object.assign(s.dataset,{pose:String(a.poseIndex),poseName:a.pose,facing:String(a.facing),settling:String(a.motion?.visual?.settling??!1),phase:String(a.motionPhase??0),sign:String(a.motion?.visual?.sign??1)}),o.textContent=`${Rm[Math.floor(a.poseIndex/4)]} · ${Im[a.facing]}${a.motion?.visual?.settling?" · 발 정리":""}`}}function ri(i=0){let e=nn&&Zr?Math.min(.05,(i-Zr)/1e3):0;if(Zr=i,e&&(tn+=e,tn>=Qo)){tn%=Qo;for(let{root:r}of sr)r.userData.fixedImage&&(r.userData.fixedImage.motion=null)}Bh(e),(Yh!==innerWidth||rr!==innerHeight)&&(Yh=innerWidth,rr=innerHeight,Yt.setSize(Yh,rr,!1)),Yt.setScissorTest(!1),Yt.setClearColor(0,0),Yt.clear(),Yt.setScissorTest(!0);let t=0;for(let{root:r,viewport:s}of sr){let o=s.getBoundingClientRect();if(o.width<=0||o.height<=0||o.bottom<0||o.top>rr)continue;let h=Math.max(1.45,1.5*o.height/o.width);en.left=-h*o.width/o.height,en.right=h*o.width/o.height,en.top=h,en.bottom=-h,en.updateProjectionMatrix(),Yt.setViewport(o.left,rr-o.bottom,o.width,o.height),Yt.setScissor(o.left,rr-o.bottom,o.width,o.height),ea.add(r),Yt.render(ea,en),ea.remove(r),t++}let n=Oh(Jr,tn,0,"yi");yt("time").textContent=`${tn.toFixed(2)} / ${Qo.toFixed(2)}초`,yt("status").textContent=Nn.loading?"원화를 준비하고 있습니다…":Nn.ready?n.label:"원화를 불러오지 못했습니다. 새로고침해 주세요.",Object.assign(document.body.dataset,{scenario:Jr,elapsed:tn.toFixed(4),playing:String(nn),phase:n.label,loading:String(Nn.loading),frames:String(++Pm),visible:String(t),actorCount:String(sr.length),textures:String(Yt.info.memory.textures),geometries:String(Yt.info.memory.geometries)}),nn&&(or=requestAnimationFrame(ri))}function ta(i){cancelAnimationFrame(or),tn=0,Zr=0;for(let{root:e}of sr)e.userData.fixedImage&&(e.userData.fixedImage.motion=null);for(Bh(0);tn<i-1e-8;){let e=Math.min(.016666666666666666,i-tn);tn+=e,Bh(e)}ri()}function ff(){yt("stops").replaceChildren();for(let[i,e]of Fh[Jr].stops){let t=document.createElement("button");t.textContent=i,t.onclick=()=>{nn=!1,cancelAnimationFrame(or),yt("play").textContent="동작 재생",yt("play").setAttribute("aria-pressed","false"),ta(e)},yt("stops").append(t)}}yt("scenario").onchange=()=>{Jr=yt("scenario").value,ff(),ta(0)};yt("season").onchange=()=>{lf.theme={id:yt("season").value,...Uh[yt("season").value]},nn||ri()};yt("restart").onclick=()=>ta(0);yt("play").onclick=()=>{nn=!nn,yt("play").textContent=nn?"동작 멈춤":"동작 재생",yt("play").setAttribute("aria-pressed",String(nn)),Zr=0,nn?or=requestAnimationFrame(ri):(cancelAnimationFrame(or),ri())};addEventListener("resize",()=>{nn||ri()});addEventListener("scroll",()=>{nn||ri()},{passive:!0});addEventListener("pagehide",i=>{if(!i.persisted){cancelAnimationFrame(or);for(let{root:e}of sr){let t=new Set;e.traverse(n=>{n.material?.userData.owned3d&&t.add(n.material),n.geometry?.userData.owned3d&&t.add(n.geometry)});for(let n of t)n.dispose()}Nn.dispose(),Kr.geometry.dispose(),Kr.material.dispose(),Yt.dispose()}});ff();Nn.promise.then(()=>ta(tn));ri();
/*! For license information please see motion-review.js.LEGAL.txt */
