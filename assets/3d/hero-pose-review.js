var qo="186";var _c=0,Ca=1,xc=2;var Er=1,vc=2,Wi=3,Jn=0,Yt=1,Ot=2,Mn=0,Xi=1,Ra=2,Ia=3,Pa=4,yc=5;var fi=100,bc=101,Mc=102,Sc=103,Tc=104,Ac=200,Ec=201,Hc=202,Cc=203,La=204,Da=205,Rc=206,Ic=207,Pc=208,Lc=209,Dc=210,Yc=211,Nc=212,Uc=213,Fc=214,_o=0,xo=1,vo=2,Yi=3,yo=4,bo=5,Ni=6,Mo=7,Ya=0,Oc=1,Bc=2,ln=0,Na=1,Ua=2,Fa=3,Oa=4,Ba=5,ka=6,za=7;var Va=300,$n=301,di=302,Ko=303,Zo=304,Hr=306,So=1e3,vn=1001,To=1002,yt=1003,kc=1004;var Cr=1005;var Mt=1006,Jo=1007;var jn=1008;var Wt=1009,Ga=1010,Wa=1011,qi=1012,$o=1013,fn=1014,dn=1015,un=1016,jo=1017,Qo=1018,Ki=1020,Xa=35902,qa=35899,Ka=1021,Za=1022,Qt=1023,yn=1026,Qn=1027,Ja=1028,es=1029,ei=1030,ts=1031;var ns=1033,Rr=33776,Ir=33777,Pr=33778,Lr=33779,is=35840,rs=35841,os=35842,ss=35843,as=36196,hs=37492,cs=37496,ls=37488,fs=37489,Dr=37490,ds=37491,us=37808,ps=37809,gs=37810,ms=37811,ws=37812,_s=37813,xs=37814,vs=37815,ys=37816,bs=37817,Ms=37818,Ss=37819,Ts=37820,As=37821,Es=36492,Hs=36494,Cs=36495,Rs=36283,Is=36284,Yr=36285,Ps=36286;var cr=2300,Ao=2301,go=2302,Ma=2303,Sa=2400,Ta=2401,Aa=2402;var zc=3200;var $a=0,Vc=1,Pn="",bt="srgb",lr="srgb-linear",fr="linear",Ze="srgb";var mo=7680;var Gc=519,Wc=512,Xc=513,qc=514,Ls=515,Kc=516,Zc=517,Ds=518,Jc=519,$c=35044;var ja="300 es",hn=2e3,dr=2001;function Af(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jc(){let i=Ui("canvas");return i.style.display="block",i}var $h={},Fi=null;function Qa(...i){let e="THREE."+i.shift();Fi?Fi("log",e,...i):console.log(e,...i)}function Qc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Qc(i);let e="THREE."+i.shift();if(Fi)Fi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ce(...i){i=Qc(i);let e="THREE."+i.shift();if(Fi)Fi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hi(...i){let e=i.join(" ");e in $h||($h[e]=!0,He(...i))}function el(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var tl={[_o]:xo,[vo]:Ni,[yo]:Mo,[Yi]:bo,[xo]:_o,[Ni]:vo,[Mo]:yo,[bo]:Yi},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,ar=Math.PI/180,Oi=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function eh(i,e){return(i%e+e)%e}function Hf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Cf(i,e,t){return i!==e?(t-i)/(e-i):0}function hr(i,e,t){return(1-t)*i+t*e}function Rf(i,e,t,n){return hr(i,e,1-Math.exp(-t*n))}function If(i,e=1){return e-Math.abs(eh(i,e*2)-e)}function Pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Df(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yf(i,e){return i+Math.random()*(e-i)}function Nf(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&(jh=i);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ff(i){return i*ar}function Of(i){return i*Oi}function Bf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vf(i,e,t,n,r){let o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),h=o((e+n)/2),f=s((e+n)/2),d=o((e-n)/2),l=s((e-n)/2),u=o((n-e)/2),w=s((n-e)/2);switch(r){case"XYX":i.set(a*f,c*d,c*l,a*h);break;case"YZY":i.set(c*l,a*f,c*d,a*h);break;case"ZXZ":i.set(c*d,c*l,a*f,a*h);break;case"XZX":i.set(a*f,c*w,c*u,a*h);break;case"YXY":i.set(c*u,a*f,c*w,a*h);break;case"ZYZ":i.set(c*w,c*u,a*f,a*h);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ys={DEG2RAD:ar,RAD2DEG:Oi,generateUUID:Zi,clamp:Be,euclideanModulo:eh,mapLinear:Hf,inverseLerp:Cf,lerp:hr,damp:Rf,pingpong:If,smoothstep:Pf,smootherstep:Lf,randInt:Df,randFloat:Yf,randFloatSpread:Nf,seededRandom:Uf,degToRad:Ff,radToDeg:Of,isPowerOfTwo:Bf,ceilPowerOfTwo:kf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:Vf,normalize:It,denormalize:Li},oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*r+e.x,this.y=o*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var Ve=oh,zt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,s,a){let c=n[r+0],h=n[r+1],f=n[r+2],d=n[r+3],l=o[s+0],u=o[s+1],w=o[s+2],v=o[s+3];if(d!==v||c!==l||h!==u||f!==w){let g=c*l+h*u+f*w+d*v;g<0&&(l=-l,u=-u,w=-w,v=-v,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),H=Math.sin(M);p=Math.sin(p*M)/H,a=Math.sin(a*M)/H,c=c*p+l*a,h=h*p+u*a,f=f*p+w*a,d=d*p+v*a}else{c=c*p+l*a,h=h*p+u*a,f=f*p+w*a,d=d*p+v*a;let M=1/Math.sqrt(c*c+h*h+f*f+d*d);c*=M,h*=M,f*=M,d*=M}}e[t]=c,e[t+1]=h,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,o,s){let a=n[r],c=n[r+1],h=n[r+2],f=n[r+3],d=o[s],l=o[s+1],u=o[s+2],w=o[s+3];return e[t]=a*w+f*d+c*u-h*l,e[t+1]=c*w+f*l+h*d-a*u,e[t+2]=h*w+f*u+a*l-c*d,e[t+3]=f*w-a*d-c*l-h*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,h=a(n/2),f=a(r/2),d=a(o/2),l=c(n/2),u=c(r/2),w=c(o/2);switch(s){case"XYZ":this._x=l*f*d+h*u*w,this._y=h*u*d-l*f*w,this._z=h*f*w+l*u*d,this._w=h*f*d-l*u*w;break;case"YXZ":this._x=l*f*d+h*u*w,this._y=h*u*d-l*f*w,this._z=h*f*w-l*u*d,this._w=h*f*d+l*u*w;break;case"ZXY":this._x=l*f*d-h*u*w,this._y=h*u*d+l*f*w,this._z=h*f*w+l*u*d,this._w=h*f*d-l*u*w;break;case"ZYX":this._x=l*f*d-h*u*w,this._y=h*u*d+l*f*w,this._z=h*f*w-l*u*d,this._w=h*f*d+l*u*w;break;case"YZX":this._x=l*f*d+h*u*w,this._y=h*u*d+l*f*w,this._z=h*f*w-l*u*d,this._w=h*f*d-l*u*w;break;case"XZY":this._x=l*f*d-h*u*w,this._y=h*u*d-l*f*w,this._z=h*f*w+l*u*d,this._w=h*f*d+l*u*w;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],h=t[2],f=t[6],d=t[10],l=n+a+d;if(l>0){let u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(f-c)*u,this._y=(o-h)*u,this._z=(s-r)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(f-c)/u,this._x=.25*u,this._y=(r+s)/u,this._z=(o+h)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(o-h)/u,this._x=(r+s)/u,this._y=.25*u,this._z=(c+f)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(s-r)/u,this._x=(o+h)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,h=t._z,f=t._w;return this._x=n*f+s*a+r*h-o*c,this._y=r*f+s*c+o*a-n*h,this._z=o*f+s*h+n*c-r*a,this._w=s*f-n*a-r*c-o*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let h=Math.acos(a),f=Math.sin(h);c=Math.sin(c*h)/f,t=Math.sin(t*h)/f,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,h=2*(s*r-a*n),f=2*(a*t-o*r),d=2*(o*n-s*t);return this.x=t+c*h+s*d-a*f,this.y=n+c*f+a*h-o*d,this.z=r+c*d+o*f-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-n*c,this.z=n*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var N=sh,ia=new N,Qh=new zt,ah=class ah{constructor(e,t,n,r,o,s,a,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,c,h)}set(e,t,n,r,o,s,a,c,h){let f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=o,f[5]=c,f[6]=n,f[7]=s,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[3],c=n[6],h=n[1],f=n[4],d=n[7],l=n[2],u=n[5],w=n[8],v=r[0],g=r[3],p=r[6],M=r[1],H=r[4],y=r[7],S=r[2],b=r[5],E=r[8];return o[0]=s*v+a*M+c*S,o[3]=s*g+a*H+c*b,o[6]=s*p+a*y+c*E,o[1]=h*v+f*M+d*S,o[4]=h*g+f*H+d*b,o[7]=h*p+f*y+d*E,o[2]=l*v+u*M+w*S,o[5]=l*g+u*H+w*b,o[8]=l*p+u*y+w*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],h=e[7],f=e[8];return t*s*f-t*a*h-n*o*f+n*a*c+r*o*h-r*s*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],h=e[7],f=e[8],d=f*s-a*h,l=a*c-f*o,u=h*o-s*c,w=t*d+n*l+r*u;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/w;return e[0]=d*v,e[1]=(r*h-f*n)*v,e[2]=(a*n-r*s)*v,e[3]=l*v,e[4]=(f*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=u*v,e[7]=(n*c-h*t)*v,e[8]=(s*t-n*o)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,s,a){let c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*s+h*a)+s+e,-r*h,r*c,-r*(-h*s+c*a)+a+t,0,0,1),this}scale(e,t){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ra.makeScale(e,t)),this}rotate(e){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;var Re=ah,ra=new Re,ec=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tc=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){let i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Ze&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ze&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?fr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:e,whitePoint:n,transfer:fr,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:ec,fromXYZ:tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),i}var Oe=Gf();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xi,Eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xi===void 0&&(xi=Ui("canvas")),xi.width=e.width,xi.height=e.height;let r=xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ui("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=In(o[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wf=0,Bi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(oa(r[s].image)):o.push(oa(r[s]))}else o=oa(r);n.url=o}return t||(e.images[this.uuid]=n),n}};function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Xf=0,sa=new N,Dt=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,r=vn,o=Mt,s=jn,a=Qt,c=Wt,h=i.DEFAULT_ANISOTROPY,f=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Zi(),this.name="",this.source=new Bi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Va)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Va;Dt.DEFAULT_ANISOTROPY=1;var hh=class hh{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o,c=e.elements,h=c[0],f=c[4],d=c[8],l=c[1],u=c[5],w=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(f-l)<.01&&Math.abs(d-v)<.01&&Math.abs(w-g)<.01){if(Math.abs(f+l)<.1&&Math.abs(d+v)<.1&&Math.abs(w+g)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let H=(h+1)/2,y=(u+1)/2,S=(p+1)/2,b=(f+l)/4,E=(d+v)/4,_=(w+g)/4;return H>y&&H>S?H<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(H),r=b/n,o=E/n):y>S?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=b/r,o=_/r):S<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),n=E/o,r=_/o),this.set(n,r,o,t),this}let M=Math.sqrt((g-w)*(g-w)+(d-v)*(d-v)+(l-f)*(l-f));return Math.abs(M)<.001&&(M=1),this.x=(g-w)/M,this.y=(d-v)/M,this.z=(l-f)/M,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hh.prototype.isVector4=!0;var ht=hh,Ho=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},o=new Dt(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bi(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Ho{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ur=class extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xo=class Xo{constructor(e,t,n,r,o,s,a,c,h,f,d,l,u,w,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,s,a,c,h,f,d,l,u,w,v,g)}set(e,t,n,r,o,s,a,c,h,f,d,l,u,w,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=h,p[6]=f,p[10]=d,p[14]=l,p[3]=u,p[7]=w,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),o=1/vi.setFromMatrixColumn(e,1).length(),s=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,o=e.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(r),h=Math.sin(r),f=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){let l=s*f,u=s*d,w=a*f,v=a*d;t[0]=c*f,t[4]=-c*d,t[8]=h,t[1]=u+w*h,t[5]=l-v*h,t[9]=-a*c,t[2]=v-l*h,t[6]=w+u*h,t[10]=s*c}else if(e.order==="YXZ"){let l=c*f,u=c*d,w=h*f,v=h*d;t[0]=l+v*a,t[4]=w*a-u,t[8]=s*h,t[1]=s*d,t[5]=s*f,t[9]=-a,t[2]=u*a-w,t[6]=v+l*a,t[10]=s*c}else if(e.order==="ZXY"){let l=c*f,u=c*d,w=h*f,v=h*d;t[0]=l-v*a,t[4]=-s*d,t[8]=w+u*a,t[1]=u+w*a,t[5]=s*f,t[9]=v-l*a,t[2]=-s*h,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let l=s*f,u=s*d,w=a*f,v=a*d;t[0]=c*f,t[4]=w*h-u,t[8]=l*h+v,t[1]=c*d,t[5]=v*h+l,t[9]=u*h-w,t[2]=-h,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let l=s*c,u=s*h,w=a*c,v=a*h;t[0]=c*f,t[4]=v-l*d,t[8]=w*d+u,t[1]=d,t[5]=s*f,t[9]=-a*f,t[2]=-h*f,t[6]=u*d+w,t[10]=l-v*d}else if(e.order==="XZY"){let l=s*c,u=s*h,w=a*c,v=a*h;t[0]=c*f,t[4]=-d,t[8]=h*f,t[1]=l*d+v,t[5]=s*f,t[9]=u*d-w,t[2]=w*d-u,t[6]=a*f,t[10]=v*d+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,Kf)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Un.crossVectors(n,Bt),Un.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Un.crossVectors(n,Bt)),Un.normalize(),Zr.crossVectors(Bt,Un),r[0]=Un.x,r[4]=Zr.x,r[8]=Bt.x,r[1]=Un.y,r[5]=Zr.y,r[9]=Bt.y,r[2]=Un.z,r[6]=Zr.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,o=this.elements,s=n[0],a=n[4],c=n[8],h=n[12],f=n[1],d=n[5],l=n[9],u=n[13],w=n[2],v=n[6],g=n[10],p=n[14],M=n[3],H=n[7],y=n[11],S=n[15],b=r[0],E=r[4],_=r[8],A=r[12],P=r[1],D=r[5],U=r[9],z=r[13],I=r[2],B=r[6],Z=r[10],W=r[14],ne=r[3],X=r[7],Q=r[11],te=r[15];return o[0]=s*b+a*P+c*I+h*ne,o[4]=s*E+a*D+c*B+h*X,o[8]=s*_+a*U+c*Z+h*Q,o[12]=s*A+a*z+c*W+h*te,o[1]=f*b+d*P+l*I+u*ne,o[5]=f*E+d*D+l*B+u*X,o[9]=f*_+d*U+l*Z+u*Q,o[13]=f*A+d*z+l*W+u*te,o[2]=w*b+v*P+g*I+p*ne,o[6]=w*E+v*D+g*B+p*X,o[10]=w*_+v*U+g*Z+p*Q,o[14]=w*A+v*z+g*W+p*te,o[3]=M*b+H*P+y*I+S*ne,o[7]=M*E+H*D+y*B+S*X,o[11]=M*_+H*U+y*Z+S*Q,o[15]=M*A+H*z+y*W+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],h=e[13],f=e[2],d=e[6],l=e[10],u=e[14],w=e[3],v=e[7],g=e[11],p=e[15],M=c*u-h*l,H=a*u-h*d,y=a*l-c*d,S=s*u-h*f,b=s*l-c*f,E=s*d-a*f;return t*(v*M-g*H+p*y)-n*(w*M-g*S+p*b)+r*(w*H-v*S+p*E)-o*(w*y-v*b+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],c=e[2],h=e[6],f=e[10];return t*(s*f-a*h)-n*(o*f-a*c)+r*(o*h-s*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],h=e[7],f=e[8],d=e[9],l=e[10],u=e[11],w=e[12],v=e[13],g=e[14],p=e[15],M=t*a-n*s,H=t*c-r*s,y=t*h-o*s,S=n*c-r*a,b=n*h-o*a,E=r*h-o*c,_=f*v-d*w,A=f*g-l*w,P=f*p-u*w,D=d*g-l*v,U=d*p-u*v,z=l*p-u*g,I=M*z-H*U+y*D+S*P-b*A+E*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(a*z-c*U+h*D)*B,e[1]=(r*U-n*z-o*D)*B,e[2]=(v*E-g*b+p*S)*B,e[3]=(l*b-d*E-u*S)*B,e[4]=(c*P-s*z-h*A)*B,e[5]=(t*z-r*P+o*A)*B,e[6]=(g*y-w*E-p*H)*B,e[7]=(f*E-l*y+u*H)*B,e[8]=(s*U-a*P+h*_)*B,e[9]=(n*P-t*U-o*_)*B,e[10]=(w*b-v*y+p*M)*B,e[11]=(d*y-f*b-u*M)*B,e[12]=(a*A-s*D-c*_)*B,e[13]=(t*D-n*A+r*_)*B,e[14]=(v*H-w*S-g*M)*B,e[15]=(f*S-d*H+l*M)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),o=1-n,s=e.x,a=e.y,c=e.z,h=o*s,f=o*a;return this.set(h*s+n,h*a-r*c,h*c+r*a,0,h*a+r*c,f*a+n,f*c-r*s,0,h*c-r*a,f*c+r*s,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,s){return this.set(1,n,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,h=o+o,f=s+s,d=a+a,l=o*h,u=o*f,w=o*d,v=s*f,g=s*d,p=a*d,M=c*h,H=c*f,y=c*d,S=n.x,b=n.y,E=n.z;return r[0]=(1-(v+p))*S,r[1]=(u+y)*S,r[2]=(w-H)*S,r[3]=0,r[4]=(u-y)*b,r[5]=(1-(l+p))*b,r[6]=(g+M)*b,r[7]=0,r[8]=(w+H)*E,r[9]=(g-M)*E,r[10]=(1-(l+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let s=vi.set(r[0],r[1],r[2]).length(),a=vi.set(r[4],r[5],r[6]).length(),c=vi.set(r[8],r[9],r[10]).length();o<0&&(s=-s),rn.copy(this);let h=1/s,f=1/a,d=1/c;return rn.elements[0]*=h,rn.elements[1]*=h,rn.elements[2]*=h,rn.elements[4]*=f,rn.elements[5]*=f,rn.elements[6]*=f,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,r,o,s,a=hn,c=!1){let h=this.elements,f=2*o/(t-e),d=2*o/(n-r),l=(t+e)/(t-e),u=(n+r)/(n-r),w,v;if(c)w=o/(s-o),v=s*o/(s-o);else if(a===hn)w=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===dr)w=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=d,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,s,a=hn,c=!1){let h=this.elements,f=2/(t-e),d=2/(n-r),l=-(t+e)/(t-e),u=-(n+r)/(n-r),w,v;if(c)w=1/(s-o),v=s/(s-o);else if(a===hn)w=-2/(s-o),v=-(s+o)/(s-o);else if(a===dr)w=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=f,h[4]=0,h[8]=0,h[12]=l,h[1]=0,h[5]=d,h[9]=0,h[13]=u,h[2]=0,h[6]=0,h[10]=w,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xo.prototype.isMatrix4=!0;var st=Xo,vi=new N,rn=new st,qf=new N(0,0,0),Kf=new N(1,1,1),Un=new N,Zr=new N,Bt=new N,nc=new st,ic=new zt,Vn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],h=r[5],f=r[9],d=r[2],l=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Be(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,u),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zf=0,rc=new N,yi=new zt,An=new st,Jr=new N,ir=new N,Jf=new N,$f=new zt,oc=new N(1,0,0),sc=new N(0,1,0),ac=new N(0,0,1),hc={type:"added"},jf={type:"removed"},bi={type:"childadded",child:null},aa={type:"childremoved",child:null},$t=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Vn,n=new zt,r=new N(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Re}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ir,Jr,this.up):An.lookAt(Jr,ir,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),yi.setFromRotationMatrix(An),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hc),bi.child=e,this.dispatchEvent(bi),bi.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hc),bi.child=e,this.dispatchEvent(bi),bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,Jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*r,o[13]+=n-o[1]*t-o[5]*n-o[9]*r,o[14]+=r-o[2]*t-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){let d=c[h];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){let a=s(e.geometries),c=s(e.materials),h=s(e.textures),f=s(e.images),d=s(e.shapes),l=s(e.skeletons),u=s(e.animations),w=s(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),w.length>0&&(n.nodes=w)}return n.object=r,n;function s(a){let c=[];for(let h in a){let f=a[h];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new N(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qf={type:"move"},ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let f=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],l=f.position.distanceTo(d.position),u=.02,w=.005;h.inputState.pinching&&l>u+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=u-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function ha(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Oe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Oe.workingColorSpace){if(e=eh(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=ha(s,o,e+1/3),this.g=ha(s,o,e),this.b=ha(s,o,e-1/3)}return Oe.colorSpaceToWorking(this,r),this}setStyle(e,t=bt){function n(o){o!==void 0&&parseFloat(o)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Oe.workingToColorSpace(Et.copy(this),e),Math.round(Be(Et.r*255,0,255))*65536+Math.round(Be(Et.g*255,0,255))*256+Math.round(Be(Et.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oe.workingColorSpace){Oe.workingToColorSpace(Et.copy(this),t);let n=Et.r,r=Et.g,o=Et.b,s=Math.max(n,r,o),a=Math.min(n,r,o),c,h,f=(a+s)/2;if(a===s)c=0,h=0;else{let d=s-a;switch(h=f<=.5?d/(s+a):d/(2-s-a),s){case n:c=(r-o)/d+(r<o?6:0);break;case r:c=(o-n)/d+2;break;case o:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=f,e}getRGB(e,t=Oe.workingColorSpace){return Oe.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=bt){Oe.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,r=Et.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL($r);let n=hr(Fn.h,$r.h,t),r=hr(Fn.s,$r.s,t),o=hr(Fn.l,$r.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Ge;Ge.NAMES=nl;var gr=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},on=new N,En=new N,ca=new N,Hn=new N,Mi=new N,Si=new N,cc=new N,la=new N,fa=new N,da=new N,ua=new ht,pa=new ht,ga=new ht,zn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){on.subVectors(r,t),En.subVectors(n,t),ca.subVectors(e,t);let s=on.dot(on),a=on.dot(En),c=on.dot(ca),h=En.dot(En),f=En.dot(ca),d=s*h-a*a;if(d===0)return o.set(0,0,0),null;let l=1/d,u=(h*c-a*f)*l,w=(s*f-a*c)*l;return o.set(1-u-w,w,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,o,s,a,c){return this.getBarycoord(e,t,n,r,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Hn.x),c.addScaledVector(s,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,r,o,s){return ua.setScalar(0),pa.setScalar(0),ga.setScalar(0),ua.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(ua,o.x),s.addScaledVector(pa,o.y),s.addScaledVector(ga,o.z),s}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),En.subVectors(e,t),on.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,o=this.c,s,a;Mi.subVectors(r,n),Si.subVectors(o,n),la.subVectors(e,n);let c=Mi.dot(la),h=Si.dot(la);if(c<=0&&h<=0)return t.copy(n);fa.subVectors(e,r);let f=Mi.dot(fa),d=Si.dot(fa);if(f>=0&&d<=f)return t.copy(r);let l=c*d-f*h;if(l<=0&&c>=0&&f<=0)return s=c/(c-f),t.copy(n).addScaledVector(Mi,s);da.subVectors(e,o);let u=Mi.dot(da),w=Si.dot(da);if(w>=0&&u<=w)return t.copy(o);let v=u*h-c*w;if(v<=0&&h>=0&&w<=0)return a=h/(h-w),t.copy(n).addScaledVector(Si,a);let g=f*w-u*d;if(g<=0&&d-f>=0&&u-w>=0)return cc.subVectors(o,r),a=(d-f)/(d-f+(u-w)),t.copy(r).addScaledVector(cc,a);let p=1/(g+v+l);return s=v*p,a=l*p,t.copy(n).addScaledVector(Mi,s).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,sn):sn.fromBufferAttribute(o,s),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Qr.subVectors(this.max,rr),Ti.subVectors(e.a,rr),Ai.subVectors(e.b,rr),Ei.subVectors(e.c,rr),On.subVectors(Ai,Ti),Bn.subVectors(Ei,Ai),ri.subVectors(Ti,Ei);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ri.z,ri.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ri.z,0,-ri.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ri.y,ri.x,0];return!ma(t,Ti,Ai,Ei,Qr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,Ti,Ai,Ei,Qr))?!1:(eo.crossVectors(On,Bn),t=[eo.x,eo.y,eo.z],ma(t,Ti,Ai,Ei,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Cn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,jr=new Gn,Ti=new N,Ai=new N,Ei=new N,On=new N,Bn=new N,ri=new N,rr=new N,Qr=new N,eo=new N,oi=new N;function ma(i,e,t,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){oi.fromArray(i,o);let a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),c=e.dot(oi),h=t.dot(oi),f=n.dot(oi);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>a)return!1}return!0}var ut=new N,to=new Ve,ed=0,Jt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var mr=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wr=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},td=new Gn,or=new N,wa=new N,zi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(or,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(wa)),this.expandByPoint(or.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nd=0,Zt=new st,_a=new $t,Hi=new N,kt=new Gn,sr=new Gn,vt=new N,cn=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?wr:mr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Re().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let o=t[n];kt.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(kt.min,sr.min),kt.expandByPoint(vt),vt.addVectors(kt.max,sr.max),kt.expandByPoint(vt)):(kt.expandByPoint(sr.min),kt.expandByPoint(sr.max))}kt.getCenter(n);let r=0;for(let o=0,s=e.count;o<s;o++)vt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)vt.fromBufferAttribute(a,h),c&&(Hi.fromBufferAttribute(e,h),vt.add(Hi)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new N,c[_]=new N;let h=new N,f=new N,d=new N,l=new Ve,u=new Ve,w=new Ve,v=new N,g=new N;function p(_,A,P){h.fromBufferAttribute(n,_),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),l.fromBufferAttribute(o,_),u.fromBufferAttribute(o,A),w.fromBufferAttribute(o,P),f.sub(h),d.sub(h),u.sub(l),w.sub(l);let D=1/(u.x*w.y-w.x*u.y);isFinite(D)&&(v.copy(f).multiplyScalar(w.y).addScaledVector(d,-u.y).multiplyScalar(D),g.copy(d).multiplyScalar(u.x).addScaledVector(f,-w.x).multiplyScalar(D),a[_].add(v),a[A].add(v),a[P].add(v),c[_].add(g),c[A].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,A=M.length;_<A;++_){let P=M[_],D=P.start,U=P.count;for(let z=D,I=D+U;z<I;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let H=new N,y=new N,S=new N,b=new N;function E(_){S.fromBufferAttribute(r,_),b.copy(S);let A=a[_];H.copy(A),H.sub(S.multiplyScalar(S.dot(A))).normalize(),y.crossVectors(b,A);let D=y.dot(c[_])<0?-1:1;s.setXYZW(_,H.x,H.y,H.z,D)}for(let _=0,A=M.length;_<A;++_){let P=M[_],D=P.start,U=P.count;for(let z=D,I=D+U;z<I;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);let r=new N,o=new N,s=new N,a=new N,c=new N,h=new N,f=new N,d=new N;if(e)for(let l=0,u=e.count;l<u;l+=3){let w=e.getX(l+0),v=e.getX(l+1),g=e.getX(l+2);r.fromBufferAttribute(t,w),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),a.add(f),c.add(f),h.add(f),n.setXYZ(w,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let l=0,u=t.count;l<u;l+=3)r.fromBufferAttribute(t,l+0),o.fromBufferAttribute(t,l+1),s.fromBufferAttribute(t,l+2),f.subVectors(s,o),d.subVectors(r,o),f.cross(d),n.setXYZ(l+0,f.x,f.y,f.z),n.setXYZ(l+1,f.x,f.y,f.z),n.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){let h=a.array,f=a.itemSize,d=a.normalized,l=new h.constructor(c.length*f),u=0,w=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?u=c[v]*a.data.stride+a.offset:u=c[v]*f;for(let p=0;p<f;p++)l[w++]=h[u++]}return new Jt(l,f,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],h=e(c,n);t.setAttribute(a,h)}let o=this.morphAttributes;for(let a in o){let c=[],h=o[a];for(let f=0,d=h.length;f<d;f++){let l=h[f],u=e(l,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let h=s[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],f=[];for(let d=0,l=h.length;d<l;d++){let u=h[d];f.push(u.toJSON(e.data))}f.length>0&&(r[c]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let h in r){let f=r[h];this.setAttribute(h,f.clone(t))}let o=e.morphAttributes;for(let h in o){let f=[],d=o[h];for(let l=0,u=d.length;l<u;l++)f.push(d[l].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let h=0,f=s.length;h<f;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xa=new N,id=new N,rd=new Re,an=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=xa.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(xa),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rd.getNormalMatrix(e),r=this.coplanarPoint(xa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},od=0,ci=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Xi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new an().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Rn=new N,va=new N,no=new N,io=new N,Ro=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){va.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),io.copy(this.origin).sub(va);let o=e.distanceTo(t)*.5,s=-this.direction.dot(no),a=io.dot(this.direction),c=-io.dot(no),h=io.lengthSq(),f=Math.abs(1-s*s),d,l,u,w;if(f>0)if(d=s*c-a,l=s*a-c,w=o*f,d>=0)if(l>=-w)if(l<=w){let v=1/f;d*=v,l*=v,u=d*(d+s*l+2*a)+l*(s*d+l+2*c)+h}else l=o,d=Math.max(0,-(s*l+a)),u=-d*d+l*(l+2*c)+h;else l=-o,d=Math.max(0,-(s*l+a)),u=-d*d+l*(l+2*c)+h;else l<=-w?(d=Math.max(0,-(-s*o+a)),l=d>0?-o:Math.min(Math.max(-o,-c),o),u=-d*d+l*(l+2*c)+h):l<=w?(d=0,l=Math.min(Math.max(-o,-c),o),u=l*(l+2*c)+h):(d=Math.max(0,-(s*o+a)),l=d>0?o:Math.min(Math.max(-o,-c),o),u=-d*d+l*(l+2*c)+h);else l=s>0?-o:o,d=Math.max(0,-(s*l+a)),u=-d*d+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(va).addScaledVector(no,l),u}intersectSphere(e,t){if(e.radius<0)return null;Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),r=Rn.dot(Rn)-n*n,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,s,a,c,h=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,r=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,r=(e.min.x-l.x)*h),f>=0?(o=(e.min.y-l.y)*f,s=(e.max.y-l.y)*f):(o=(e.max.y-l.y)*f,s=(e.min.y-l.y)*f),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-l.z)*d,c=(e.max.z-l.z)*d):(a=(e.max.z-l.z)*d,c=(e.min.z-l.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,r,o){let s=this.origin,a=this.direction,c=a.x,h=a.y,f=a.z,d=e.x-s.x,l=e.y-s.y,u=e.z-s.z,w=t.x-s.x,v=t.y-s.y,g=t.z-s.z,p=n.x-s.x,M=n.y-s.y,H=n.z-s.z,y=Math.abs(c),S=Math.abs(h),b=Math.abs(f),E,_,A,P,D,U,z,I,B,Z,W,ne;if(y>=S&&y>=b?(A=c,U=d,B=w,ne=p,c>=0?(E=h,_=f,P=l,D=u,z=v,I=g,Z=M,W=H):(E=f,_=h,P=u,D=l,z=g,I=v,Z=H,W=M)):S>=b?(A=h,U=l,B=v,ne=M,h>=0?(E=f,_=c,P=u,D=d,z=g,I=w,Z=H,W=p):(E=c,_=f,P=d,D=u,z=w,I=g,Z=p,W=H)):(A=f,U=u,B=g,ne=H,f>=0?(E=c,_=h,P=d,D=l,z=w,I=v,Z=p,W=M):(E=h,_=c,P=l,D=d,z=v,I=w,Z=M,W=p)),A===0)return null;let X=E/A,Q=_/A,te=1/A,Ae=P-X*U,Se=D-Q*U,Qe=z-X*B,ke=I-Q*B,Xe=Z-X*ne,q=W-Q*ne,j=Xe*ke-q*Qe,we=Ae*q-Se*Xe,Ie=Qe*Se-ke*Ae;if(r){if(j<0||we<0||Ie<0)return null}else if((j<0||we<0||Ie<0)&&(j>0||we>0||Ie>0))return null;let ge=j+we+Ie;if(ge===0)return null;let Ye=te*(j*U+we*B+Ie*ne);return(ge>0?Ye<0:Ye>0)?null:this.at(Ye/ge,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lc=new st,si=new Ro,ro=new zi,fc=new N,oo=new N,so=new N,ao=new N,ya=new N,ho=new N,dc=new N,co=new N,gt=class extends $t{constructor(e=new cn,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){ho.set(0,0,0);for(let c=0,h=o.length;c<h;c++){let f=a[c],d=o[c];f!==0&&(ya.fromBufferAttribute(d,e),s?ho.addScaledVector(ya,f):ho.addScaledVector(ya.sub(t),f))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(o),si.copy(e.ray).recast(e.near),!(ro.containsPoint(si.origin)===!1&&(si.intersectSphere(ro,fc)===null||si.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(lc.copy(o).invert(),si.copy(e.ray).applyMatrix4(lc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,f=o.attributes.uv1,d=o.attributes.normal,l=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(s))for(let w=0,v=l.length;w<v;w++){let g=l[w],p=s[g.materialIndex],M=Math.max(g.start,u.start),H=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let y=M,S=H;y<S;y+=3){let b=a.getX(y),E=a.getX(y+1),_=a.getX(y+2);r=lo(this,p,e,n,h,f,d,b,E,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let w=Math.max(0,u.start),v=Math.min(a.count,u.start+u.count);for(let g=w,p=v;g<p;g+=3){let M=a.getX(g),H=a.getX(g+1),y=a.getX(g+2);r=lo(this,s,e,n,h,f,d,M,H,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let w=0,v=l.length;w<v;w++){let g=l[w],p=s[g.materialIndex],M=Math.max(g.start,u.start),H=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=M,S=H;y<S;y+=3){let b=y,E=y+1,_=y+2;r=lo(this,p,e,n,h,f,d,b,E,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let w=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let g=w,p=v;g<p;g+=3){let M=g,H=g+1,y=g+2;r=lo(this,s,e,n,h,f,d,M,H,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function sd(i,e,t,n,r,o,s,a){let c;if(e.side===Yt?c=n.intersectTriangle(s,o,r,!0,a):c=n.intersectTriangle(r,o,s,e.side===Jn,a),c===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(co);return h<t.near||h>t.far?null:{distance:h,point:co.clone(),object:i}}function lo(i,e,t,n,r,o,s,a,c,h){i.getVertexPosition(a,oo),i.getVertexPosition(c,so),i.getVertexPosition(h,ao);let f=sd(i,e,t,n,oo,so,ao,dc);if(f){let d=new N;zn.getBarycoord(dc,oo,so,ao,d),r&&(f.uv=zn.getInterpolatedAttribute(r,a,c,h,d,new Ve)),o&&(f.uv1=zn.getInterpolatedAttribute(o,a,c,h,d,new Ve)),s&&(f.normal=zn.getInterpolatedAttribute(s,a,c,h,d,new N),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let l={a,b:c,c:h,normal:new N,materialIndex:0};zn.getNormal(oo,so,ao,l.normal),f.face=l,f.barycoord=d}return f}var Vi=class extends Dt{constructor(e=null,t=1,n=1,r,o,s,a,c,h=yt,f=yt,d,l){super(null,s,a,c,h,f,r,o,d,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=new zi,ad=new Ve(.5,.5),fo=new N,_r=class{constructor(e=new an,t=new an,n=new an,r=new an,o=new an,s=new an){this.planes=[e,t,n,r,o,s]}set(e,t,n,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],h=o[3],f=o[4],d=o[5],l=o[6],u=o[7],w=o[8],v=o[9],g=o[10],p=o[11],M=o[12],H=o[13],y=o[14],S=o[15];if(r[0].setComponents(h-s,u-f,p-w,S-M).normalize(),r[1].setComponents(h+s,u+f,p+w,S+M).normalize(),r[2].setComponents(h+a,u+d,p+v,S+H).normalize(),r[3].setComponents(h-a,u-d,p-v,S-H).normalize(),n)r[4].setComponents(c,l,g,y).normalize(),r[5].setComponents(h-c,u-l,p-g,S-y).normalize();else if(r[4].setComponents(h-c,u-l,p-g,S-y).normalize(),t===hn)r[5].setComponents(h+c,u+l,p+g,S+y).normalize();else if(t===dr)r[5].setComponents(c,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);let t=ad.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends Dt{constructor(e=[],t=$n,n,r,o,s,a,c,h,f){super(e,t,n,r,o,s,a,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vr=class extends Dt{constructor(e,t,n,r,o,s,a,c,h){super(e,t,n,r,o,s,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends Dt{constructor(e,t,n=fn,r,o,s,a=yt,c=yt,h,f=yn,d=1){if(f!==yn&&f!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let l={width:e,height:t,depth:d};super(l,r,o,s,a,c,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Io=class extends Wn{constructor(e,t=fn,n=$n,r,o,s=yt,a=yt,c,h=yn){let f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,r,o,s,a,c,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yr=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gi=class i extends cn{constructor(e=1,t=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],h=[],f=[],d=[],l=0,u=0;w("z","y","x",-1,-1,n,t,e,s,o,0),w("z","y","x",1,-1,n,t,-e,s,o,1),w("x","z","y",1,1,e,n,t,r,s,2),w("x","z","y",1,-1,e,n,-t,r,s,3),w("x","y","z",1,-1,e,t,n,r,o,4),w("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(c),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(f,3)),this.setAttribute("uv",new Lt(d,2));function w(v,g,p,M,H,y,S,b,E,_,A){let P=y/E,D=S/_,U=y/2,z=S/2,I=b/2,B=E+1,Z=_+1,W=0,ne=0,X=new N;for(let Q=0;Q<Z;Q++){let te=Q*D-z;for(let Ae=0;Ae<B;Ae++){let Se=Ae*P-U;X[v]=Se*M,X[g]=te*H,X[p]=I,h.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[p]=b>0?1:-1,f.push(X.x,X.y,X.z),d.push(Ae/E),d.push(1-Q/_),W+=1}}for(let Q=0;Q<_;Q++)for(let te=0;te<E;te++){let Ae=l+te+B*Q,Se=l+te+B*(Q+1),Qe=l+(te+1)+B*(Q+1),ke=l+(te+1)+B*Q;c.push(Ae,Se,ke),c.push(Se,Qe,ke),ne+=6}a.addGroup(u,ne,A),u+=ne,l+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var br=class i extends cn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],c=[],h=new N,f=new Ve;s.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,l=3;d<=t;d++,l+=3){let u=n+d/t*r;h.x=e*Math.cos(u),h.y=e*Math.sin(u),s.push(h.x,h.y,h.z),a.push(0,0,1),f.x=(s[l]/e+1)/2,f.y=(s[l+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Xn=class i extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(n),c=Math.floor(r),h=a+1,f=c+1,d=e/a,l=t/c,u=[],w=[],v=[],g=[];for(let p=0;p<f;p++){let M=p*l-s;for(let H=0;H<h;H++){let y=H*d-o;w.push(y,-M,0),v.push(0,0,1),g.push(H/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let H=M+h*p,y=M+h*(p+1),S=M+1+h*(p+1),b=M+1+h*p;u.push(H,y,b),u.push(y,S,b)}this.setIndex(u),this.setAttribute("position",new Lt(w,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(uc(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(uc(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][n]=o}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=ui(i[t]);for(let r in n)e[r]=n[r]}return e}function uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}var il={clone:ui,merge:Ht},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(r.value);break;case"m4":this.uniforms[n].value=new st().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Po=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Lo=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ci(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ba(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qn=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],o=t[n-1];n:{e:{let s;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=t[++n],e<r)break e}s=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=o,o=t[--n-1],e>=o)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let s=0;s!==r;++s)t[s]=n[o+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends qn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sa,endingEnd:Sa}}intervalChanged_(e,t,n){let r=this.parameterPositions,o=e-2,s=e+1,a=r[o],c=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ta:o=e,a=2*t-n;break;case Aa:o=r.length-2,a=t+r[o]-r[o+1];break;default:o=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ta:s=e,c=2*n-t;break;case Aa:s=1,c=n+r[1]-r[0];break;default:s=e-1,c=t}let h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(c-n),this._offsetPrev=o*f,this._offsetNext=s*f}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,f=this._offsetPrev,d=this._offsetNext,l=this._weightPrev,u=this._weightNext,w=(n-t)/(r-t),v=w*w,g=v*w,p=-l*g+2*l*v-l*w,M=(1+l)*g+(-1.5-2*l)*v+(-.5+l)*w+1,H=(-1-u)*g+(1.5+u)*v+.5*w,y=u*g-u*v;for(let S=0;S!==a;++S)o[S]=p*s[f+S]+M*s[h+S]+H*s[c+S]+y*s[d+S];return o}},No=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,f=(n-t)/(r-t),d=1-f;for(let l=0;l!==a;++l)o[l]=s[h+l]*d+s[c+l]*f;return o}},Uo=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fo=class extends qn{interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,f=this.inTangents,d=this.outTangents;if(!f||!d){let w=(n-t)/(r-t),v=1-w;for(let g=0;g!==a;++g)o[g]=s[h+g]*v+s[c+g]*w;return o}let l=a*2,u=e-1;for(let w=0;w!==a;++w){let v=s[h+w],g=s[c+w],p=u*l+w*2,M=d[p],H=d[p+1],y=e*l+w*2,S=f[y],b=f[y+1],E=dd(n,t,M,S,r);o[w]=rl(E,v,H,b,g)}return o}};function rl(i,e,t,n,r){let o=1-i;return o*o*o*e+3*o*o*i*t+3*o*i*i*n+i*i*i*r}function fd(i,e,t,n,r){let o=1-i;return 3*o*o*(t-e)+6*o*i*(n-t)+3*i*i*(r-n)}function dd(i,e,t,n,r){let o=(i-e)/(r-e);for(let s=0;s<8;s++){let a=rl(o,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let c=fd(o,e,t,n,r);if(Math.abs(c)<1e-10)break;o=Math.max(0,Math.min(1,o-a/c))}return o}var Gt=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ci(t,this.TimeBufferType),this.values=Ci(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ci(e.times,Array),values:Ci(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),ba(e.settings)&&(n.settings={inTangents:Ci(e.settings.inTangents,Array),outTangents:Ci(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case Ma:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ba(this.settings)&&(pc(this.settings.inTangents,e),pc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<e;)++o;for(;s!==-1&&n[s]>t;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==o;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ce("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){Ce("KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(r!==void 0&&Ef(r))for(let a=0,c=r.length;a!==c;++a){let h=r[a];if(isNaN(h)){Ce("KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===go,o=e.length-1,s=1;for(let a=1;a<o;++a){let c=!1,h=e[a],f=e[a+1];if(h!==f&&(a!==1||h!==e[0]))if(r)c=!0;else{let d=a*n,l=d-n,u=d+n;for(let w=0;w!==n;++w){let v=t[d+w];if(v!==t[l+w]||v!==t[u+w]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*n,l=s*n;for(let u=0;u!==n;++u)t[l+u]=t[d+u]}++s}}if(o>0){e[s]=e[o];for(let a=o*n,c=s*n,h=0;h!==n;++h)t[c+h]=t[a+h];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ba(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function pc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Ao;var Kn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=cr;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}};Oo.prototype.ValueTypeName="color";var Bo=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}};Bo.prototype.ValueTypeName="number";var ko=class extends qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),h=e*a;for(let f=h+a;h!==f;h+=4)zt.slerpFlat(o,0,s,h-a,s,h,c);return o}},Mr=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=cr;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends Gt{constructor(e,t,n,r){super(e,t,n,r)}};zo.prototype.ValueTypeName="vector";var wo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(gc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!gc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function gc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Vo=class{constructor(e,t,n){let r=this,o=!1,s=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,o===!1&&r.onStart!==void 0&&r.onStart(f,s,a),o=!0},this.itemEnd=function(f){s++,r.onProgress!==void 0&&r.onProgress(f,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return h.push(f,d),this},this.removeHandler=function(f){let d=h.indexOf(f);return d!==-1&&h.splice(d,2),this},this.getHandler=function(f){for(let d=0,l=h.length;d<l;d+=2){let u=h[d],w=h[d+1];if(u.global&&(u.lastIndex=0),u.test(f))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ol=new Vo,Sr=class{constructor(e){this.manager=e!==void 0?e:ol,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri=new WeakMap,Tr=class extends Sr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let o=this,s=wo.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let d=Ri.get(s);d===void 0&&(d=[],Ri.set(s,d)),d.push({onLoad:t,onError:r})}return s}let a=Ui("img");function c(){f(),t&&t(this);let d=Ri.get(this)||[];for(let l=0;l<d.length;l++){let u=d[l];u.onLoad&&u.onLoad(this)}Ri.delete(this),o.manager.itemEnd(e)}function h(d){f(),r&&r(d),wo.remove(`image:${e}`);let l=Ri.get(this)||[];for(let u=0;u<l.length;u++){let w=l[u];w.onError&&w.onError(d)}Ri.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wo.add(`image:${e}`,a),o.manager.itemStart(e),a.src=e,a}};var uo=new N,po=new zt,xn=new N,Ar=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uo,po,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,po,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uo,po,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,po,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kn=new N,mc=new Ve,wc=new Ve,Ut=class extends Ar{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,wc),t.subVectors(wc,mc)}setViewOffset(e,t,n,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,h=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*n/h,r*=s.width/c,n*=s.height/h}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var li=class extends Ar{constructor(e=-1,t=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-e,s=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,s=o+h*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ii=-90,Pi=1,Go=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ut(Ii,Pi,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Ii,Pi,e,t);o.layers=this.layers,this.add(o);let s=new Ut(Ii,Pi,e,t);s.layers=this.layers,this.add(s);let a=new Ut(Ii,Pi,e,t);a.layers=this.layers,this.add(a);let c=new Ut(Ii,Pi,e,t);c.layers=this.layers,this.add(c);let h=new Ut(Ii,Pi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,o,s,a,c]=t;for(let h of t)this.remove(h);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,h,f]=this.children,d=e.getRenderTarget(),l=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,l,u),e.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},Wo=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nh="\\[\\]\\.:\\/",ud=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",pd="[^"+nh.replace("\\.","")+"]",gd=/((?:WC+[\/:])*)/.source.replace("WC",ih),md=/(WCOD+)?/.source.replace("WCOD",pd),wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),_d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),xd=new RegExp("^"+gd+md+wd+_d+"$"),vd=["material","materials","bones","map"],Ea=class{constructor(e,t,n){let r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ud,"")}static parseTrackName(e){let t=xd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);vd.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,o=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let s=e[r];if(s===void 0){let h=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Ea;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);var ch=class ch{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=r,this}};ch.prototype.isMatrix2=!0;var Ha=ch;function rh(i,e,t,n){let r=yd(n);switch(t){case Ka:return i*e;case Ja:return i*e/r.components*r.byteLength;case es:return i*e/r.components*r.byteLength;case ei:return i*e*2/r.components*r.byteLength;case ts:return i*e*2/r.components*r.byteLength;case Za:return i*e*3/r.components*r.byteLength;case Qt:return i*e*4/r.components*r.byteLength;case ns:return i*e*4/r.components*r.byteLength;case Rr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rs:case ss:return Math.max(i,16)*Math.max(e,8)/4;case is:case os:return Math.max(i,8)*Math.max(e,8)/2;case as:case hs:case ls:case fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cs:case Dr:case ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ps:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ms:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _s:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ys:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ms:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ss:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ts:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case As:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Es:case Hs:case Cs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rs:case Is:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yr:case Ps:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(i){switch(i){case Wt:case Ga:return{byteLength:1,components:1};case qi:case Wa:case un:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case fn:case $o:case dn:return{byteLength:4,components:1};case Xa:case qa:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);function El(){let i=null,e=!1,t=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function bd(i){let e=new WeakMap;function t(a,c){let h=a.array,f=a.usage,d=h.byteLength,l=i.createBuffer();i.bindBuffer(c,l),i.bufferData(c,h,f),a.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)u=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:l,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,h){let f=c.array,d=c.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,f);else{d.sort((u,w)=>u.start-w.start);let l=0;for(let u=1;u<d.length;u++){let w=d[l],v=d[u];v.start<=w.start+w.count+1?w.count=Math.max(w.count,v.start+v.count-w.start):(++l,d[l]=v)}d.length=l+1;for(let u=0,w=d.length;u<w;u++){let v=d[u];i.bufferSubData(h,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=e.get(a);if(h===void 0)e.set(a,t(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:r,remove:o,update:s}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xd=`#define PI 3.141592653589793
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
} // validated`,qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
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
}`,fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gu=`#ifdef USE_ENVMAP
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vu=`PhysicalMaterial material;
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
#endif`,yu=`uniform sampler2D dfgLUT;
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
}`,bu=`
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sp=`uniform sampler2D t2D;
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,Vp=`#define NORMAL
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
}`,Gp=`#define NORMAL
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
}`,Wp=`#define PHONG
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
}`,Xp=`#define PHONG
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
}`,qp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Md,alphahash_pars_fragment:Sd,alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:Ed,alphatest_pars_fragment:Hd,aomap_fragment:Cd,aomap_pars_fragment:Rd,batching_pars_vertex:Id,batching_vertex:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Yd,iridescence_fragment:Nd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:kd,color_fragment:zd,color_pars_fragment:Vd,color_pars_vertex:Gd,color_vertex:Wd,common:Xd,cube_uv_reflection_fragment:qd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Zd,displacementmap_vertex:Jd,emissivemap_fragment:$d,emissivemap_pars_fragment:jd,colorspace_fragment:Qd,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:ou,fog_vertex:su,fog_pars_vertex:au,fog_fragment:hu,fog_pars_fragment:cu,gradientmap_pars_fragment:lu,lightmap_pars_fragment:fu,lights_lambert_fragment:du,lights_lambert_pars_fragment:uu,lights_pars_begin:pu,lights_toon_fragment:mu,lights_toon_pars_fragment:wu,lights_phong_fragment:_u,lights_phong_pars_fragment:xu,lights_physical_fragment:vu,lights_physical_pars_fragment:yu,lights_fragment_begin:bu,lights_fragment_maps:Mu,lights_fragment_end:Su,lightprobes_pars_fragment:Tu,logdepthbuf_fragment:Au,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Cu,map_fragment:Ru,map_pars_fragment:Iu,map_particle_fragment:Pu,map_particle_pars_fragment:Lu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Yu,morphinstance_vertex:Nu,morphcolor_vertex:Uu,morphnormal_vertex:Fu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Bu,normal_fragment_begin:ku,normal_fragment_maps:zu,normal_pars_fragment:Vu,normal_pars_vertex:Gu,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Ku,clearcoat_pars_fragment:Zu,iridescence_pars_fragment:Ju,opaque_fragment:$u,packing:ju,premultiplied_alpha_fragment:Qu,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:sp,shadowmap_vertex:ap,shadowmask_pars_fragment:hp,skinbase_vertex:cp,skinning_pars_vertex:lp,skinning_vertex:fp,skinnormal_vertex:dp,specularmap_fragment:up,specularmap_pars_fragment:pp,tonemapping_fragment:gp,tonemapping_pars_fragment:mp,transmission_fragment:wp,transmission_pars_fragment:_p,uv_pars_fragment:xp,uv_pars_vertex:vp,uv_vertex:yp,worldpos_vertex:bp,background_vert:Mp,background_frag:Sp,backgroundCube_vert:Tp,backgroundCube_frag:Ap,cube_vert:Ep,cube_frag:Hp,depth_vert:Cp,depth_frag:Rp,distance_vert:Ip,distance_frag:Pp,equirect_vert:Lp,equirect_frag:Dp,linedashed_vert:Yp,linedashed_frag:Np,meshbasic_vert:Up,meshbasic_frag:Fp,meshlambert_vert:Op,meshlambert_frag:Bp,meshmatcap_vert:kp,meshmatcap_frag:zp,meshnormal_vert:Vp,meshnormal_frag:Gp,meshphong_vert:Wp,meshphong_frag:Xp,meshphysical_vert:qp,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:$p,points_frag:jp,shadow_vert:Qp,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Tn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Tn.physical={uniforms:Ht([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var Ns={r:0,b:0,g:0},ig=new st,Hl=new Re;Hl.set(-1,0,0,0,1,0,0,0,1);function rg(i,e,t,n,r,o){let s=new Ge(0),a=r===!0?0:1,c,h,f=null,d=0,l=null;function u(M){let H=M.isScene===!0?M.background:null;if(H&&H.isTexture){let y=M.backgroundBlurriness>0;H=e.get(H,y)}return H}function w(M){let H=!1,y=u(M);y===null?g(s,a):y&&y.isColor&&(g(y,1),H=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||H)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,H){let y=u(H);y&&(y.isCubeTexture||y.mapping===Hr)?(h===void 0&&(h=new gt(new Gi(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:ui(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(H.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Hl),h.material.toneMapped=Oe.getTransfer(y.colorSpace)!==Ze,(f!==y||d!==y.version||l!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,l=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new gt(new Xn(2,2),new Vt({name:"BackgroundMaterial",uniforms:ui(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,c.material.toneMapped=Oe.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||l!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,l=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,H){M.getRGB(Ns,th(i)),t.buffers.color.setClear(Ns.r,Ns.g,Ns.b,H,o)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,H=1){s.set(M),a=H,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(s,a)},render:w,addToRenderList:v,dispose:p}}function og(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),o=r,s=!1;function a(D,U,z,I,B){let Z=!1,W=d(D,I,z,U);o!==W&&(o=W,h(o.object)),Z=u(D,I,z,B),Z&&w(D,I,z,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,y(D,U,z,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function h(D){return i.bindVertexArray(D)}function f(D){return i.deleteVertexArray(D)}function d(D,U,z,I){let B=I.wireframe===!0,Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);let W=D.isInstancedMesh===!0?D.id:0,ne=Z[W];ne===void 0&&(ne={},Z[W]=ne);let X=ne[z.id];X===void 0&&(X={},ne[z.id]=X);let Q=X[B];return Q===void 0&&(Q=l(c()),X[B]=Q),Q}function l(D){let U=[],z=[],I=[];for(let B=0;B<t;B++)U[B]=0,z[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,U,z,I){let B=o.attributes,Z=U.attributes,W=0,ne=z.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=B[X],Ae=Z[X];if(Ae===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor)),te===void 0||te.attribute!==Ae||Ae&&te.data!==Ae.data)return!0;W++}return o.attributesNum!==W||o.index!==I}function w(D,U,z,I){let B={},Z=U.attributes,W=0,ne=z.getAttributes();for(let X in ne)if(ne[X].location>=0){let te=Z[X];te===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let Ae={};Ae.attribute=te,te&&te.data&&(Ae.data=te.data),B[X]=Ae,W++}o.attributes=B,o.attributesNum=W,o.index=I}function v(){let D=o.newAttributes;for(let U=0,z=D.length;U<z;U++)D[U]=0}function g(D){p(D,0)}function p(D,U){let z=o.newAttributes,I=o.enabledAttributes,B=o.attributeDivisors;z[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),B[D]!==U&&(i.vertexAttribDivisor(D,U),B[D]=U)}function M(){let D=o.newAttributes,U=o.enabledAttributes;for(let z=0,I=U.length;z<I;z++)U[z]!==D[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function H(D,U,z,I,B,Z,W){W===!0?i.vertexAttribIPointer(D,U,z,B,Z):i.vertexAttribPointer(D,U,z,I,B,Z)}function y(D,U,z,I){v();let B=I.attributes,Z=z.getAttributes(),W=U.defaultAttributeValues;for(let ne in Z){let X=Z[ne];if(X.location>=0){let Q=B[ne];if(Q===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let te=Q.normalized,Ae=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;let Qe=Se.buffer,ke=Se.type,Xe=Se.bytesPerElement,q=ke===i.INT||ke===i.UNSIGNED_INT||Q.gpuType===$o;if(Q.isInterleavedBufferAttribute){let j=Q.data,we=j.stride,Ie=Q.offset;if(j.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<X.locationSize;ge++)g(X.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ge=0;ge<X.locationSize;ge++)H(X.location+ge,Ae/X.locationSize,ke,te,we*Xe,(Ie+Ae/X.locationSize*ge)*Xe,q)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let j=0;j<X.locationSize;j++)H(X.location+j,Ae/X.locationSize,ke,te,Ae*Xe,Ae/X.locationSize*j*Xe,q)}}else if(W!==void 0){let te=W[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}M()}function S(){A();for(let D in n){let U=n[D];for(let z in U){let I=U[z];for(let B in I){let Z=I[B];for(let W in Z)f(Z[W].object),delete Z[W];delete I[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let z in U){let I=U[z];for(let B in I){let Z=I[B];for(let W in Z)f(Z[W].object),delete Z[W];delete I[B]}}delete n[D.id]}function E(D){for(let U in n){let z=n[U];for(let I in z){let B=z[I];if(B[D.id]===void 0)continue;let Z=B[D.id];for(let W in Z)f(Z[W].object),delete Z[W];delete B[D.id]}}}function _(D){for(let U in n){let z=n[U],I=D.isInstancedMesh===!0?D.id:0,B=z[I];if(B!==void 0){for(let Z in B){let W=B[Z];for(let ne in W)f(W[ne].object),delete W[ne];delete B[Z]}delete z[I],Object.keys(z).length===0&&delete n[U]}}}function A(){P(),s=!0,o!==r&&(o=r,h(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function sg(i,e,t){let n;function r(c){n=c}function o(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let l=0;for(let u=0;u<f;u++)l+=h[u];t.update(l,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function ag(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(E){return!(E!==Qt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let _=E===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wt&&E!==dn&&!_&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",f=c(h);f!==h&&(He("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);let d=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&l===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),H=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:l,maxTextures:u,maxVertexTextures:w,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:H,maxFragmentUniforms:y,maxSamples:S,samples:b}}function hg(i){let e=this,t=null,n=0,r=!1,o=!1,s=new an,a=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){let u=d.length!==0||l||n!==0||r;return r=l,n=d.length,u},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,l){t=f(d,l,0)},this.setState=function(d,l,u){let w=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!r||w===null||w.length===0||o&&!g)o?f(null):h();else{let M=o?0:n,H=M*4,y=p.clippingState||null;c.value=y,y=f(w,l,H,u);for(let S=0;S!==H;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,l,u,w){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,w!==!0||g===null){let p=u+v*4,M=l.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let H=0,y=u;H!==v;++H,y+=4)s.copy(d[H]).applyMatrix4(M,a),s.normal.toArray(g,y),g[y+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var $i=4,cg=6,lg=20,fg=256,Nr=new li,sl=new Ge,lh=null,fh=0,dh=0,uh=!1,dg=new N,pi=new N,Fs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){let{size:s=256,position:a=dg}=o;lh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,fh,dh),this._renderer.xr.enabled=uh,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:un,format:Qt,colorSpace:lr,depthBuffer:!1},r=al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ug(o)),this._blurMaterial=gg(o,e,t),this._ggxMaterial=pg(o,e,t)}return r}_compileMaterial(e){let t=new gt(new cn,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,r,o){let c=new Ut(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,l=d.autoClear,u=d.toneMapping;d.getClearColor(sl),d.toneMapping=ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new Gi,new jt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(sl),p=!0);for(let H=0;H<6;H++){let y=H%3;y===0?(c.up.set(0,h[H],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+f[H],o.y,o.z)):y===1?(c.up.set(0,0,h[H]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+f[H],o.z)):(c.up.set(0,h[H],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+f[H]));let S=this._cubeSize;Ji(r,y*S,H>2?S:0,S,S),d.setRenderTarget(r),p&&d.render(v,c),d.render(e,c)}d.toneMapping=u,d.autoClear=l,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===$n||e.mapping===di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hl());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;Ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Nr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let c=s.uniforms,h=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(h*h-f*f),l=h*1.25,u=d*l,{_lodMax:w}=this,v=this._sizeLods[n],g=3*v*(n>w-$i?n-w+$i:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=w-t,Ji(o,g,p,3*v,2*v),r.setRenderTarget(o),r.render(a,Nr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=w-n,Ji(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Nr)}_blur(e,t,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,n,s),this._blurPass(o,e,n,n,s)}_blurPass(e,t,n,r,o){let s=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;let h=a.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],d=3*f*(r>this._lodMax-$i?r-this._lodMax+$i:0),l=4*(this._cubeSize-f);Ji(t,d,l,3*f,2*f),s.setRenderTarget(t),s.render(c,Nr)}};function ug(i){let e=[],t=[],n=i,r=i-$i+1+cg;for(let o=0;o<r;o++){let s=Math.pow(2,n);e.push(s);let a=1/(s-2),c=-a,h=1+a,f=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,l=6,u=3,w=new Float32Array(u*l*d),v=new Float32Array(u*l*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,H=p>2?0:-1,y=[M,H,0,M+2/3,H,0,M+2/3,H+1,0,M,H,0,M+2/3,H+1,0,M,H+1,0];w.set(y,u*l*p);for(let S=0;S<l;S++){let b=f[S*2]*2-1,E=f[S*2+1]*2-1;p===0?pi.set(1,E,b):p===1?pi.set(-b,1,-E):p===2?pi.set(-b,E,1):p===3?pi.set(-1,E,-b):p===4?pi.set(-b,-1,E):pi.set(b,E,-1),pi.toArray(v,(p*l+S)*u)}}let g=new cn;g.setAttribute("position",new Jt(w,u)),g.setAttribute("outputDirection",new Jt(v,u)),t.push(new gt(g,null)),n>$i&&n--}return{lodMeshes:t,sizeLods:e}}function al(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function pg(i,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function gg(i,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:lg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function hl(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function cl(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Os=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),o=new Vt({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Mn});o.uniforms.tEquirect.value=t;let s=new gt(r,o),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=Mt),new Go(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(o)}};function mg(i){let e=new WeakMap,t=new WeakMap,n=null;function r(l,u=!1){return l==null?null:u?s(l):o(l)}function o(l){if(l&&l.isTexture){let u=l.mapping;if(u===Ko||u===Zo)if(e.has(l)){let w=e.get(l).texture;return a(w,l.mapping)}else{let w=l.image;if(w&&w.height>0){let v=new Os(w.height);return v.fromEquirectangularTexture(i,l),e.set(l,v),l.addEventListener("dispose",h),a(v.texture,l.mapping)}else return null}}return l}function s(l){if(l&&l.isTexture){let u=l.mapping,w=u===Ko||u===Zo,v=u===$n||u===di;if(w||v){let g=t.get(l),p=g!==void 0?g.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return n===null&&(n=new Fs(i)),g=w?n.fromEquirectangular(l,g):n.fromCubemap(l,g),g.texture.pmremVersion=l.pmremVersion,t.set(l,g),g.texture;if(g!==void 0)return g.texture;{let M=l.image;return w&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new Fs(i)),g=w?n.fromEquirectangular(l):n.fromCubemap(l),g.texture.pmremVersion=l.pmremVersion,t.set(l,g),l.addEventListener("dispose",f),g.texture):null}}}return l}function a(l,u){return u===Ko?l.mapping=$n:u===Zo&&(l.mapping=di),l}function c(l){let u=0,w=6;for(let v=0;v<w;v++)l[v]!==void 0&&u++;return u===w}function h(l){let u=l.target;u.removeEventListener("dispose",h);let w=e.get(u);w!==void 0&&(e.delete(u),w.dispose())}function f(l){let u=l.target;u.removeEventListener("dispose",f);let w=t.get(u);w!==void 0&&(t.delete(u),w.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function wg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&hi("WebGLRenderer: "+n+" extension not supported."),r}}}function _g(i,e,t,n){let r={},o=new WeakMap;function s(d){let l=d.target;l.index!==null&&e.remove(l.index);for(let w in l.attributes)e.remove(l.attributes[w]);l.removeEventListener("dispose",s),delete r[l.id];let u=o.get(l);u&&(e.remove(u),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function a(d,l){return r[l.id]===!0||(l.addEventListener("dispose",s),r[l.id]=!0,t.memory.geometries++),l}function c(d){let l=d.attributes;for(let u in l)e.update(l[u],i.ARRAY_BUFFER)}function h(d){let l=[],u=d.index,w=d.attributes.position,v=0;if(w===void 0)return;if(u!==null){let M=u.array;v=u.version;for(let H=0,y=M.length;H<y;H+=3){let S=M[H+0],b=M[H+1],E=M[H+2];l.push(S,b,b,E,E,S)}}else{let M=w.array;v=w.version;for(let H=0,y=M.length/3-1;H<y;H+=3){let S=H+0,b=H+1,E=H+2;l.push(S,b,b,E,E,S)}}let g=new(w.count>=65535?wr:mr)(l,1);g.version=v;let p=o.get(d);p&&e.remove(p),o.set(d,g)}function f(d){let l=o.get(d);if(l){let u=d.index;u!==null&&l.version<u.version&&h(d)}else h(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:f}}function xg(i,e,t){let n;function r(d){n=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function c(d,l){i.drawElements(n,l,o,d*s),t.update(l,n,1)}function h(d,l,u){u!==0&&(i.drawElementsInstanced(n,l,o,d*s,u),t.update(l,n,u))}function f(d,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,o,d,0,u);let v=0;for(let g=0;g<u;g++)v+=l[g];t.update(v,n,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:Ce("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yg(i,e,t){let n=new WeakMap,r=new ht;function o(s,a,c){let h=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0,l=n.get(a);if(l===void 0||l.count!==d){let A=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",A)};l!==void 0&&l.texture.dispose();let u=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],H=0;u===!0&&(H=1),w===!0&&(H=2),v===!0&&(H=3);let y=a.attributes.position.count*H,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*S*4*d),E=new ur(b,y,S,d);E.type=dn,E.needsUpdate=!0;let _=H*4;for(let P=0;P<d;P++){let D=g[P],U=p[P],z=M[P],I=y*S*4*P;for(let B=0;B<D.count;B++){let Z=B*_;u===!0&&(r.fromBufferAttribute(D,B),b[I+Z+0]=r.x,b[I+Z+1]=r.y,b[I+Z+2]=r.z,b[I+Z+3]=0),w===!0&&(r.fromBufferAttribute(U,B),b[I+Z+4]=r.x,b[I+Z+5]=r.y,b[I+Z+6]=r.z,b[I+Z+7]=0),v===!0&&(r.fromBufferAttribute(z,B),b[I+Z+8]=r.x,b[I+Z+9]=r.y,b[I+Z+10]=r.z,b[I+Z+11]=z.itemSize===4?r.w:1)}}l={count:d,texture:E,size:new Ve(y,S)},n.set(a,l),a.addEventListener("dispose",A)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let u=0;for(let v=0;v<h.length;v++)u+=h[v];let w=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",w),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:o}}function bg(i,e,t,n,r){let o=new WeakMap;function s(h){let f=r.render.frame,d=h.geometry,l=e.get(h,d);if(o.get(l)!==f&&(e.update(l),o.set(l,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){let u=h.skeleton;o.get(u)!==f&&(u.update(),o.set(u,f))}return l}function a(){o=new WeakMap}function c(h){let f=h.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}var Mg={[Na]:"LINEAR_TONE_MAPPING",[Ua]:"REINHARD_TONE_MAPPING",[Fa]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[ka]:"AGX_TONE_MAPPING",[za]:"NEUTRAL_TONE_MAPPING",[Ba]:"CUSTOM_TONE_MAPPING"};function Sg(i,e,t,n,r,o){let s=new Ft(e,t,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,h=new cn;h.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let f=new Po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new gt(h,f),l=new li(-1,1,1,-1,0,1),u=null,w=null,v=!1,g,p=null,M=[],H=!1;this.setSize=function(y,S){s.setSize(y,S),a!==null&&a.setSize(y,S),c!==null&&c.setSize(y,S);for(let b=0;b<M.length;b++){let E=M[b];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){M=y,H=M.length>0&&M[0].isRenderPass===!0;let S=s.width,b=s.height;M.length>0&&a===null&&(a=new Ft(S,b,{type:un,depthBuffer:!1,stencilBuffer:!1}),c=new Ft(S,b,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<M.length;E++){let _=M[E];_.setSize&&_.setSize(S,b)}},this.begin=function(y,S){if(v||y.toneMapping===ln&&M.length===0)return!1;if(p=S,S!==null){let b=S.width,E=S.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return H===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=ln,!0},this.hasRenderPass=function(){return H},this.end=function(y,S){y.toneMapping=g,v=!0;let b=s,E=a;for(let _=0;_<M.length;_++){let A=M[_];A.enabled!==!1&&(A.render(y,E,b,S),A.needsSwap!==!1&&(b=E,E=E===a?c:a))}if(u!==y.outputColorSpace||w!==y.toneMapping){u=y.outputColorSpace,w=y.toneMapping,f.defines={},Oe.getTransfer(u)===Ze&&(f.defines.SRGB_TRANSFER="");let _=Mg[w];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,l),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Cl=new Dt,mh=new Wn(1,1),Rl=new ur,Il=new Co,Pl=new xr,ll=[],fl=[],dl=new Float32Array(16),ul=new Float32Array(9),pl=new Float32Array(4);function Qi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,o=ll[r];if(o===void 0&&(o=new Float32Array(r),ll[r]=o),e!==0){n.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,i[s].toArray(o,a)}return o}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=fl[e];t===void 0&&(t=new Int32Array(e),fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(mt(t,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),wt(t,n)}}function Rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(mt(t,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),wt(t,n)}}function Ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(mt(t,n))return;dl.set(n),i.uniformMatrix4fv(this.addr,!1,dl),wt(t,n)}}function Pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Bg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=t.isReversedDepthBuffer()?Ds:Ls,o=mh):o=Cl,t.setTexture2D(e||o,r)}function kg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Il,r)}function zg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pl,r)}function Vg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rl,r)}function Gg(i){switch(i){case 5126:return Tg;case 35664:return Ag;case 35665:return Eg;case 35666:return Hg;case 35674:return Cg;case 35675:return Rg;case 35676:return Ig;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Yg;case 5125:return Ng;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(i,e){i.uniform1fv(this.addr,e)}function Xg(i,e){let t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function qg(i,e){let t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function Kg(i,e){let t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Zg(i,e){let t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jg(i,e){let t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $g(i,e){let t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jg(i,e){i.uniform1iv(this.addr,e)}function Qg(i,e){i.uniform2iv(this.addr,e)}function e0(i,e){i.uniform3iv(this.addr,e)}function t0(i,e){i.uniform4iv(this.addr,e)}function n0(i,e){i.uniform1uiv(this.addr,e)}function i0(i,e){i.uniform2uiv(this.addr,e)}function r0(i,e){i.uniform3uiv(this.addr,e)}function o0(i,e){i.uniform4uiv(this.addr,e)}function s0(i,e,t){let n=this.cache,r=e.length,o=zs(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),wt(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=mh:s=Cl;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function a0(i,e,t){let n=this.cache,r=e.length,o=zs(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),wt(n,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Il,o[s])}function h0(i,e,t){let n=this.cache,r=e.length,o=zs(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),wt(n,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Pl,o[s])}function c0(i,e,t){let n=this.cache,r=e.length,o=zs(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),wt(n,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Rl,o[s])}function l0(i){switch(i){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Kg;case 35674:return Zg;case 35675:return Jg;case 35676:return $g;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return c0}}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},_h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l0(t.type)}},xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function gl(i,e){i.seq.push(e),i.map[e.id]=e}function f0(i,e,t){let n=i.name,r=n.length;for(ph.lastIndex=0;;){let o=ph.exec(n),s=ph.lastIndex,a=o[1],c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&s+2===r){gl(t,h===void 0?new wh(a,i,e):new _h(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new xh(a),gl(t,d)),t=d}}}var ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);f0(a,c,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){let o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&n.push(s)}return n}};function ml(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var d0=37297,u0=0;function p0(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}var wl=new Re;function g0(i){Oe._getMatrix(wl,Oe.workingColorSpace,i);let e=`mat3( ${wl.elements.map(t=>t.toFixed(4))} )`;switch(Oe.getTransfer(i)){case fr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _l(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+p0(i.getShaderSource(e),a)}else return o}function m0(i,e){let t=g0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var w0={[Na]:"Linear",[Ua]:"Reinhard",[Fa]:"Cineon",[Oa]:"ACESFilmic",[ka]:"AgX",[za]:"Neutral",[Ba]:"Custom"};function _0(i,e){let t=w0[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Us=new N;function x0(){Oe.getLuminanceCoefficients(Us);let i=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function y0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(e,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:a}}return t}function Fr(i){return i!==""}function xl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(M0,T0)}var S0=new Map;function T0(i,e){let t=De[e];if(t===void 0){let n=S0.get(e);if(n!==void 0)t=De[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(t)}var A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(i){return i.replace(A0,E0)}function E0(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function bl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var H0={[Er]:"SHADOWMAP_TYPE_PCF",[Wi]:"SHADOWMAP_TYPE_VSM"};function C0(i){return H0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R0={[$n]:"ENVMAP_TYPE_CUBE",[di]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function I0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var P0={[di]:"ENVMAP_MODE_REFRACTION"};function L0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D0={[Ya]:"ENVMAP_BLENDING_MULTIPLY",[Oc]:"ENVMAP_BLENDING_MIX",[Bc]:"ENVMAP_BLENDING_ADD"};function Y0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D0[i.combine]||"ENVMAP_BLENDING_NONE"}function N0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function U0(i,e,t,n){let r=i.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=C0(t),h=I0(t),f=L0(t),d=Y0(t),l=N0(t),u=v0(t),w=y0(o),v=r.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Fr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(g=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[bl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?De.tonemapping_pars_fragment:"",t.toneMapping!==ln?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),s=vh(s),s=xl(s,t),s=vl(s,t),a=vh(a),a=xl(a,t),a=vl(a,t),s=yl(s),a=yl(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let H=M+g+s,y=M+p+a,S=ml(r,r.VERTEX_SHADER,H),b=ml(r,r.FRAGMENT_SHADER,y);r.attachShader(v,S),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(D){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(S)||"",I=r.getShaderInfoLog(b)||"",B=U.trim(),Z=z.trim(),W=I.trim(),ne=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,b);else{let Q=_l(r,S,"vertex"),te=_l(r,b,"fragment");Ce("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+te)}else B!==""?He("WebGLProgram: Program Info Log:",B):(Z===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:ne,programLog:B,vertexShader:{log:Z,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(S),r.deleteShader(b),_=new ji(r,v),A=b0(r,v)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,d0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var F0=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}};function O0(i){return i===ei||i===Dr||i===Yr}function B0(i,e,t,n,r,o){let s=new pr,a=new yh,c=new Set,h=[],f=new Map,d=n.logarithmicDepthBuffer,l=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,A,P,D,U,z){let I=D.fog,B=U.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||Z,W),X=ne&&ne.mapping===Hr?ne.image.height:null,Q=u[_.type];_.precision!==null&&(l=n.getMaxPrecision(_.precision),l!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",l,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ae=te!==void 0?te.length:0,Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let Qe,ke,Xe,q;if(Q){let tt=Tn[Q];Qe=tt.vertexShader,ke=tt.fragmentShader}else{Qe=_.vertexShader,ke=_.fragmentShader;let tt=a.getVertexShaderStage(_),qe=a.getFragmentShaderStage(_);a.update(_,tt,qe),Xe=tt.id,q=qe.id}let j=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,Ye=!!_.map,pt=!!_.matcap,Ne=!!ne,We=!!_.aoMap,et=!!_.lightMap,Fe=!!_.bumpMap&&_.wireframe===!1,ot=!!_.normalMap,xt=!!_.displacementMap,Nt=!!_.emissiveMap,at=!!_.metalnessMap,ft=!!_.roughnessMap,L=_.anisotropy>0,St=_.clearcoat>0,Je=_.dispersion>0,T=_.retroreflectivity>0,m=_.iridescence>0,Y=_.sheen>0,k=_.transmission>0,G=L&&!!_.anisotropyMap,ie=St&&!!_.clearcoatMap,re=St&&!!_.clearcoatNormalMap,K=St&&!!_.clearcoatRoughnessMap,$=m&&!!_.iridescenceMap,oe=m&&!!_.iridescenceThicknessMap,be=Y&&!!_.sheenColorMap,ce=Y&&!!_.sheenRoughnessMap,se=!!_.specularMap,Me=!!_.specularColorMap,Ee=!!_.specularIntensityMap,Pe=k&&!!_.transmissionMap,R=k&&!!_.thicknessMap,ae=!!_.gradientMap,J=!!_.alphaMap,he=_.alphaTest>0,ue=!!_.alphaHash,ee=!!_.extensions,Te=ln;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=i.toneMapping);let ve={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:ke,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:l,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ye,matcap:pt,envMap:Ne,envMapMode:Ne&&ne.mapping,envMapCubeUVHeight:X,aoMap:We,lightMap:et,bumpMap:Fe,normalMap:ot,displacementMap:xt,emissiveMap:Nt,normalMapObjectSpace:ot&&_.normalMapType===Vc,normalMapTangentSpace:ot&&_.normalMapType===$a,packedNormalMap:ot&&_.normalMapType===$a&&O0(_.normalMap.format),metalnessMap:at,roughnessMap:ft,anisotropy:L,anisotropyMap:G,clearcoat:St,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:K,dispersion:Je,retroreflection:T,iridescence:m,iridescenceMap:$,iridescenceThicknessMap:oe,sheen:Y,sheenColorMap:be,sheenRoughnessMap:ce,specularMap:se,specularColorMap:Me,specularIntensityMap:Ee,transmission:k,transmissionMap:Pe,thicknessMap:R,gradientMap:ae,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:ue,combine:_.combine,mapUv:Ye&&w(_.map.channel),aoMapUv:We&&w(_.aoMap.channel),lightMapUv:et&&w(_.lightMap.channel),bumpMapUv:Fe&&w(_.bumpMap.channel),normalMapUv:ot&&w(_.normalMap.channel),displacementMapUv:xt&&w(_.displacementMap.channel),emissiveMapUv:Nt&&w(_.emissiveMap.channel),metalnessMapUv:at&&w(_.metalnessMap.channel),roughnessMapUv:ft&&w(_.roughnessMap.channel),anisotropyMapUv:G&&w(_.anisotropyMap.channel),clearcoatMapUv:ie&&w(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&w(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&w(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&w(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&w(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&w(_.sheenColorMap.channel),sheenRoughnessMapUv:ce&&w(_.sheenRoughnessMap.channel),specularMapUv:se&&w(_.specularMap.channel),specularColorMapUv:Me&&w(_.specularColorMap.channel),specularIntensityMapUv:Ee&&w(_.specularIntensityMap.channel),transmissionMapUv:Pe&&w(_.transmissionMap.channel),thicknessMapUv:R&&w(_.thicknessMap.channel),alphaMapUv:J&&w(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ot||L),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Ye||J),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Se,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ye&&_.map.isVideoTexture===!0&&Oe.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ot,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function g(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(A,_),M(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function M(_,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.retroreflection&&s.enable(24),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),A.packedNormalMap&&s.enable(22),A.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),A.numLightProbeGrids>0&&s.enable(22),A.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function H(_){let A=u[_.type],P;if(A){let D=Tn[A];P=il.clone(D.uniforms)}else P=_.uniforms;return P}function y(_,A){let P=f.get(A);return P!==void 0?++P.usedTimes:(P=new U0(i,A,_,r),h.push(P),f.set(A,P)),P}function S(_){if(--_.usedTimes===0){let A=h.indexOf(_);h[A]=h[h.length-1],h.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function E(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:H,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:h,dispose:E}}function k0(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,c){i.get(s)[a]=c}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function z0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sl(){let i=[],e=0,t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function s(l){let u=0;return l.isInstancedMesh&&(u+=2),l.isSkinnedMesh&&(u+=1),u}function a(l,u,w,v,g,p){let M=i[e];return M===void 0?(M={id:l.id,object:l,geometry:u,material:w,materialVariant:s(l),groupOrder:v,renderOrder:l.renderOrder,z:g,group:p},i[e]=M):(M.id=l.id,M.object=l,M.geometry=u,M.material=w,M.materialVariant=s(l),M.groupOrder=v,M.renderOrder=l.renderOrder,M.z=g,M.group=p),e++,M}function c(l,u,w,v,g,p,M){M.reversedDepth===!0&&(g=-g);let H=a(l,u,w,v,g,p);w.transmission>0?n.push(H):w.transparent===!0?r.push(H):t.push(H)}function h(l,u,w,v,g,p){let M=a(l,u,w,v,g,p);w.transmission>0?n.unshift(M):w.transparent===!0?r.unshift(M):t.unshift(M)}function f(l,u){t.length>1&&t.sort(l||z0),n.length>1&&n.sort(u||Ml),r.length>1&&r.sort(u||Ml)}function d(){for(let l=e,u=i.length;l<u;l++){let w=i[l];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:c,unshift:h,finish:d,sort:f}}function V0(){let i=new WeakMap;function e(n,r){let o=i.get(n),s;return o===void 0?(s=new Sl,i.set(n,[s])):r>=o.length?(s=new Sl,o.push(s)):s=o[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function G0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function W0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var X0=0;function q0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function K0(i){let e=new G0,t=W0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);let r=new N,o=new st,s=new st;function a(h){let f=0,d=0,l=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,w=0,v=0,g=0,p=0,M=0,H=0,y=0,S=0,b=0,E=0,_=0,A=0,P=0;h.sort(q0);for(let U=0,z=h.length;U<z;U++){let I=h[U],B=I.color,Z=I.intensity,W=I.distance,ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ei?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=B.r*Z,d+=B.g*Z,l+=B.b*Z;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],Z);P++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[w]=te,n.sunShadowMap[w]=ne;let Ae=Q.getViewportCount();for(let Se=0;Se<Ae;Se++)n.sunShadowMatrix[v+Se]=Q.getMatrix(Se),n.sunShadowCascade[v+Se]=Q._cascadeData[Se];v+=Ae,w++}n.sun[u]=X,u++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ne,n.directionalShadowMatrix[g]=I.shadow.matrix,S++}n.directional[g]=X,g++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(B).multiplyScalar(Z),X.distance=W,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[M]=X;let Q=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,Q.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[M]=Q.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ne,E++}M++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(B).multiplyScalar(Z),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[H]=X,H++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=X,p++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(Z),X.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[y]=X,y++}}H>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=l;let D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==H||D.hemiLength!==y||D.numSunShadows!==w||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==_||D.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=H,n.point.length=p,n.hemi.length=y,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.sunLength=u,D.directionalLength=g,D.pointLength=p,D.spotLength=M,D.rectAreaLength=H,D.hemiLength=y,D.numSunShadows=w,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=_,D.numLightProbes=P,n.version=X0++)}function c(h,f){let d=0,l=0,u=0,w=0,v=0,g=0,p=f.matrixWorldInverse;for(let M=0,H=h.length;M<H;M++){let y=h[M];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=n.directional[l];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),l++}else if(y.isSpotLight){let S=n.spot[w];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),w++}else if(y.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),s.identity(),o.copy(y.matrixWorld),o.premultiply(p),s.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Tl(i){let e=new K0(i),t=[],n=[],r=[];function o(l){d.camera=l,t.length=0,n.length=0,r.length=0}function s(l){t.push(l)}function a(l){n.push(l)}function c(l){r.push(l)}function h(){e.setup(t)}function f(l){e.setupView(t,l)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:h,setupLightsView:f,pushLight:s,pushShadow:a,pushLightProbeGrid:c}}function Z0(i){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Tl(i),e.set(r,[a])):o>=s.length?(a=new Tl(i),s.push(a)):a=s[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var J0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`,j0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Q0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Al=new st,Ur=new N,gh=new N;function e1(i,e,t){let n=new _r,r=new Ve,o=new Ve,s=new ht,a=new Lo,c=new Do,h={},f=t.maxTextureSize,d={[Jn]:Yt,[Yt]:Jn,[Ot]:Ot},l=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:J0,fragmentShader:$0}),u=l.clone();u.defines.HORIZONTAL_PASS=1;let w=new cn;w.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new gt(w,l),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let p=this.type;this.render=function(b,E,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===vc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Mn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=p!==this.type;z&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=b.length;I<B;I++){let Z=b[I],W=Z.shadow;if(W===void 0){He("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ne=W.getFrameExtents();r.multiply(ne),o.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/ne.x),r.x=o.x*ne.x,W.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/ne.y),r.y=o.y*ne.y,W.mapSize.y=o.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Wi){if(Z.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ft(r.x,r.y,{format:ei,type:un,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new Wn(r.x,r.y,dn),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=yn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt}else Z.isPointLight?(W.map=new Os(r.x),W.map.depthTexture=new Io(r.x,fn)):(W.map=new Ft(r.x,r.y),W.map.depthTexture=new Wn(r.x,r.y,fn)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=yn,this.type===Er?(W.map.depthTexture.compareFunction=X?Ds:Ls,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);let Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,_);for(let te=0;te<Q;te++){let Ae=W.getCamera(te);if(Z.isPointLight){let Se=W.camera,Qe=W.matrix,ke=Z.distance||Se.far;ke!==Se.far&&(Se.far=ke,Se.updateProjectionMatrix()),Ur.setFromMatrixPosition(Z.matrixWorld),Se.position.copy(Ur),gh.copy(Se.position),gh.add(j0[te]),Se.up.copy(Q0[te]),Se.lookAt(gh),Se.updateMatrixWorld(),Qe.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Al.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Al,Se.coordinateSystem,Se.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,te),i.clear();else{te===0&&(i.setRenderTarget(W.map),i.clear());let Se=W.getViewport(te);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),U.viewport(s)}n=W.getFrustum(te),y(E,_,Ae,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Wi&&M(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,P,D)};function M(b,E){let _=e.update(v);l.defines.VSM_SAMPLES!==b.blurSamples&&(l.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ft(r.x,r.y,{format:ei,type:un}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),l.uniforms.shadow_pass.value=b.map.depthTexture,l.uniforms.resolution.value.set(b.map.width,b.map.height),l.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,_,l,v,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,_,u,v,null)}function H(b,E,_,A){let P=null,D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let U=P.uuid,z=E.uuid,I=h[U];I===void 0&&(I={},h[U]=I);let B=I[z];B===void 0&&(B=P.clone(),I[z]=B,E.addEventListener("dispose",S)),P=B}if(P.visible=E.visible,P.wireframe=E.wireframe,A===Wi?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:d[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=_}return P}function y(b,E,_,A,P){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Wi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let z=e.update(b),I=b.material;if(Array.isArray(I)){let B=z.groups;for(let Z=0,W=B.length;Z<W;Z++){let ne=B[Z],X=I[ne.materialIndex];if(X&&X.visible){let Q=H(b,X,A,P);b.onBeforeShadow(i,b,E,_,z,Q,ne),i.renderBufferDirect(_,null,z,Q,b,ne),b.onAfterShadow(i,b,E,_,z,Q,ne)}}}else if(I.visible){let B=H(b,I,A,P);b.onBeforeShadow(i,b,E,_,z,B,null),i.renderBufferDirect(_,null,z,B,b,null),b.onAfterShadow(i,b,E,_,z,B,null)}}let U=b.children;for(let z=0,I=U.length;z<I;z++)y(U[z],E,_,A,P)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in h){let A=h[_],P=b.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function t1(i,e){function t(){let R=!1,ae=new ht,J=null,he=new ht(0,0,0,0);return{setMask:function(ue){J!==ue&&!R&&(i.colorMask(ue,ue,ue,ue),J=ue)},setLocked:function(ue){R=ue},setClear:function(ue,ee,Te,ve,tt){tt===!0&&(ue*=ve,ee*=ve,Te*=ve),ae.set(ue,ee,Te,ve),he.equals(ae)===!1&&(i.clearColor(ue,ee,Te,ve),he.copy(ae))},reset:function(){R=!1,J=null,he.set(-1,0,0,0)}}}function n(){let R=!1,ae=!1,J=null,he=null,ue=null;return{setReversed:function(ee){if(ae!==ee){let Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;let ve=ue;ue=null,this.setClear(ve)}},getReversed:function(){return ae},setTest:function(ee){ee?j(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ee){J!==ee&&!R&&(i.depthMask(ee),J=ee)},setFunc:function(ee){if(ae&&(ee=tl[ee]),he!==ee){switch(ee){case _o:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case Ni:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){R=ee},setClear:function(ee){ue!==ee&&(ue=ee,ae&&(ee=1-ee),i.clearDepth(ee))},reset:function(){R=!1,J=null,he=null,ue=null,ae=!1}}}function r(){let R=!1,ae=null,J=null,he=null,ue=null,ee=null,Te=null,ve=null,tt=null;return{setTest:function(qe){R||(qe?j(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!R&&(i.stencilMask(qe),ae=qe)},setFunc:function(qe,nn,wn){(J!==qe||he!==nn||ue!==wn)&&(i.stencilFunc(qe,nn,wn),J=qe,he=nn,ue=wn)},setOp:function(qe,nn,wn){(ee!==qe||Te!==nn||ve!==wn)&&(i.stencilOp(qe,nn,wn),ee=qe,Te=nn,ve=wn)},setLocked:function(qe){R=qe},setClear:function(qe){tt!==qe&&(i.clearStencil(qe),tt=qe)},reset:function(){R=!1,ae=null,J=null,he=null,ue=null,ee=null,Te=null,ve=null,tt=null}}}let o=new t,s=new n,a=new r,c=new WeakMap,h=new WeakMap,f={},d={},l={},u=new WeakMap,w=[],v=null,g=!1,p=null,M=null,H=null,y=null,S=null,b=null,E=null,_=new Ge(0,0,0),A=0,P=!1,D=null,U=null,z=null,I=null,B=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ne>=2);let Q=null,te={},Ae=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Qe=new ht().fromArray(Ae),ke=new ht().fromArray(Se);function Xe(R,ae,J,he){let ue=new Uint8Array(4),ee=i.createTexture();i.bindTexture(R,ee),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<J;Te++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ae+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ee}let q={};q[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(i.DEPTH_TEST),s.setFunc(Yi),Fe(!1),ot(Ca),j(i.CULL_FACE),We(Mn);function j(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function we(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Ie(R,ae){return l[R]!==ae?(i.bindFramebuffer(R,ae),l[R]=ae,R===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function ge(R,ae){let J=w,he=!1;if(R){J=u.get(ae),J===void 0&&(J=[],u.set(ae,J));let ue=R.textures;if(J.length!==ue.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=ue.length;ee<Te;ee++)J[ee]=i.COLOR_ATTACHMENT0+ee;J.length=ue.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function Ye(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let pt={[fi]:i.FUNC_ADD,[bc]:i.FUNC_SUBTRACT,[Mc]:i.FUNC_REVERSE_SUBTRACT};pt[Sc]=i.MIN,pt[Tc]=i.MAX;let Ne={[Ac]:i.ZERO,[Ec]:i.ONE,[Hc]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Pc]:i.DST_COLOR,[Rc]:i.DST_ALPHA,[Cc]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Lc]:i.ONE_MINUS_DST_COLOR,[Ic]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[Nc]:i.ONE_MINUS_CONSTANT_COLOR,[Uc]:i.CONSTANT_ALPHA,[Fc]:i.ONE_MINUS_CONSTANT_ALPHA};function We(R,ae,J,he,ue,ee,Te,ve,tt,qe){if(R===Mn){g===!0&&(we(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),R!==yc){if(R!==p||qe!==P){if((M!==fi||S!==fi)&&(i.blendEquation(i.FUNC_ADD),M=fi,S=fi),qe)switch(R){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",R);break}else switch(R){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ia:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pa:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",R);break}H=null,y=null,b=null,E=null,_.set(0,0,0),A=0,p=R,P=qe}return}ue=ue||ae,ee=ee||J,Te=Te||he,(ae!==M||ue!==S)&&(i.blendEquationSeparate(pt[ae],pt[ue]),M=ae,S=ue),(J!==H||he!==y||ee!==b||Te!==E)&&(i.blendFuncSeparate(Ne[J],Ne[he],Ne[ee],Ne[Te]),H=J,y=he,b=ee,E=Te),(ve.equals(_)===!1||tt!==A)&&(i.blendColor(ve.r,ve.g,ve.b,tt),_.copy(ve),A=tt),p=R,P=!1}function et(R,ae){R.side===Ot?we(i.CULL_FACE):j(i.CULL_FACE);let J=R.side===Yt;ae&&(J=!J),Fe(J),R.blending===Xi&&R.transparent===!1?We(Mn):We(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),o.setMask(R.colorWrite);let he=R.stencilWrite;a.setTest(he),he&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Nt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function ot(R){R!==_c?(j(i.CULL_FACE),R!==U&&(R===Ca?i.cullFace(i.BACK):R===xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),U=R}function xt(R){R!==z&&(W&&i.lineWidth(R),z=R)}function Nt(R,ae,J){R?(j(i.POLYGON_OFFSET_FILL),(I!==ae||B!==J)&&(I=ae,B=J,s.getReversed()&&(ae=-ae),i.polygonOffset(ae,J))):we(i.POLYGON_OFFSET_FILL)}function at(R){R?j(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function ft(R){R===void 0&&(R=i.TEXTURE0+Z-1),Q!==R&&(i.activeTexture(R),Q=R)}function L(R,ae,J){J===void 0&&(Q===null?J=i.TEXTURE0+Z-1:J=Q);let he=te[J];he===void 0&&(he={type:void 0,texture:void 0},te[J]=he),(he.type!==R||he.texture!==ae)&&(Q!==J&&(i.activeTexture(J),Q=J),i.bindTexture(R,ae||q[R]),he.type=R,he.texture=ae)}function St(){let R=te[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function m(){try{i.texSubImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function Y(){try{i.texSubImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function ie(){try{i.texStorage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function re(){try{i.texStorage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function K(){try{i.texImage2D(...arguments)}catch(R){Ce("WebGLState:",R)}}function $(){try{i.texImage3D(...arguments)}catch(R){Ce("WebGLState:",R)}}function oe(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function be(R,ae){d[R]!==ae&&(i.pixelStorei(R,ae),d[R]=ae)}function ce(R){Qe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Qe.copy(R))}function se(R){ke.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ke.copy(R))}function Me(R,ae){let J=h.get(ae);J===void 0&&(J=new WeakMap,h.set(ae,J));let he=J.get(R);he===void 0&&(he=i.getUniformBlockIndex(ae,R.name),J.set(R,he))}function Ee(R,ae){let he=h.get(ae).get(R);c.get(ae)!==he&&(i.uniformBlockBinding(ae,he,R.__bindingPointIndex),c.set(ae,he))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},Q=null,te={},l={},u=new WeakMap,w=[],v=null,g=!1,p=null,M=null,H=null,y=null,S=null,b=null,E=null,_=new Ge(0,0,0),A=0,P=!1,D=null,U=null,z=null,I=null,B=null,Qe.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:j,disable:we,bindFramebuffer:Ie,drawBuffers:ge,useProgram:Ye,setBlending:We,setMaterial:et,setFlipSided:Fe,setCullFace:ot,setLineWidth:xt,setPolygonOffset:Nt,setScissorTest:at,activeTexture:ft,bindTexture:L,unbindTexture:St,compressedTexImage2D:Je,compressedTexImage3D:T,texImage2D:K,texImage3D:$,pixelStorei:be,getParameter:oe,updateUBOMapping:Me,uniformBlockBinding:Ee,texStorage2D:ie,texStorage3D:re,texSubImage2D:m,texSubImage3D:Y,compressedTexSubImage2D:k,compressedTexSubImage3D:G,scissor:ce,viewport:se,reset:Pe}}function n1(i,e,t,n,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ve,f=new WeakMap,d=new Set,l,u=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,m){return w?new OffscreenCanvas(T,m):Ui("canvas")}function g(T,m,Y){let k=1,G=Je(T);if((G.width>Y||G.height>Y)&&(k=Y/Math.max(G.width,G.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ie=Math.floor(k*G.width),re=Math.floor(k*G.height);l===void 0&&(l=v(ie,re));let K=m?v(ie,re):l;return K.width=ie,K.height=re,K.getContext("2d").drawImage(T,0,0,ie,re),He("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+ie+"x"+re+")."),K}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),T;return T}function p(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function H(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,m,Y,k,G,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re;k&&(re=e.get("EXT_texture_norm16"),re||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=m;if(m===i.RED&&(Y===i.FLOAT&&(K=i.R32F),Y===i.HALF_FLOAT&&(K=i.R16F),Y===i.UNSIGNED_BYTE&&(K=i.R8),Y===i.UNSIGNED_SHORT&&re&&(K=re.R16_EXT),Y===i.SHORT&&re&&(K=re.R16_SNORM_EXT)),m===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(K=i.R8UI),Y===i.UNSIGNED_SHORT&&(K=i.R16UI),Y===i.UNSIGNED_INT&&(K=i.R32UI),Y===i.BYTE&&(K=i.R8I),Y===i.SHORT&&(K=i.R16I),Y===i.INT&&(K=i.R32I)),m===i.RG&&(Y===i.FLOAT&&(K=i.RG32F),Y===i.HALF_FLOAT&&(K=i.RG16F),Y===i.UNSIGNED_BYTE&&(K=i.RG8),Y===i.UNSIGNED_SHORT&&re&&(K=re.RG16_EXT),Y===i.SHORT&&re&&(K=re.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(K=i.RG8UI),Y===i.UNSIGNED_SHORT&&(K=i.RG16UI),Y===i.UNSIGNED_INT&&(K=i.RG32UI),Y===i.BYTE&&(K=i.RG8I),Y===i.SHORT&&(K=i.RG16I),Y===i.INT&&(K=i.RG32I)),m===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(K=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(K=i.RGB16UI),Y===i.UNSIGNED_INT&&(K=i.RGB32UI),Y===i.BYTE&&(K=i.RGB8I),Y===i.SHORT&&(K=i.RGB16I),Y===i.INT&&(K=i.RGB32I)),m===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),Y===i.UNSIGNED_INT&&(K=i.RGBA32UI),Y===i.BYTE&&(K=i.RGBA8I),Y===i.SHORT&&(K=i.RGBA16I),Y===i.INT&&(K=i.RGBA32I)),m===i.RGB&&(Y===i.UNSIGNED_SHORT&&re&&(K=re.RGB16_EXT),Y===i.SHORT&&re&&(K=re.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),m===i.RGBA){let $=ie?fr:Oe.getTransfer(G);Y===i.FLOAT&&(K=i.RGBA32F),Y===i.HALF_FLOAT&&(K=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(K=$===Ze?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&re&&(K=re.RGBA16_EXT),Y===i.SHORT&&re&&(K=re.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(T,m){let Y;return T?m===null||m===fn||m===Ki?Y=i.DEPTH24_STENCIL8:m===dn?Y=i.DEPTH32F_STENCIL8:m===qi&&(Y=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===fn||m===Ki?Y=i.DEPTH_COMPONENT24:m===dn?Y=i.DEPTH_COMPONENT32F:m===qi&&(Y=i.DEPTH_COMPONENT16),Y}function b(T,m){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==yt&&T.minFilter!==Mt?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function E(T){let m=T.target;m.removeEventListener("dispose",E),A(m),m.isVideoTexture&&f.delete(m),m.isHTMLTexture&&d.delete(m)}function _(T){let m=T.target;m.removeEventListener("dispose",_),D(m)}function A(T){let m=n.get(T);if(m.__webglInit===void 0)return;let Y=T.source,k=u.get(Y);if(k){let G=k[m.__cacheKey];G.usedTimes--,G.usedTimes===0&&P(T),Object.keys(k).length===0&&u.delete(Y)}n.remove(T)}function P(T){let m=n.get(T);i.deleteTexture(m.__webglTexture);let Y=T.source,k=u.get(Y);delete k[m.__cacheKey],s.memory.textures--}function D(T){let m=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let G=0;G<m.__webglFramebuffer[k].length;G++)i.deleteFramebuffer(m.__webglFramebuffer[k][G]);else i.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)i.deleteFramebuffer(m.__webglFramebuffer[k]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let Y=T.textures;for(let k=0,G=Y.length;k<G;k++){let ie=n.get(Y[k]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(Y[k])}n.remove(T)}let U=0;function z(){U=0}function I(){return U}function B(T){U=T}function Z(){let T=U;return T>=r.maxTextures&&He("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,T}function W(T){let m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function ne(T,m){let Y=n.get(T);if(T.isVideoTexture&&L(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&Y.__version!==T.version){let k=T.image;if(k===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{we(Y,T,m);return}}else T.isExternalTexture&&(Y.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+m)}function X(T,m){let Y=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){we(Y,T,m);return}else T.isExternalTexture&&(Y.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+m)}function Q(T,m){let Y=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){we(Y,T,m);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+m)}function te(T,m){let Y=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&Y.__version!==T.version){Ie(Y,T,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+m)}let Ae={[So]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},Se={[yt]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},Qe={[Wc]:i.NEVER,[Jc]:i.ALWAYS,[Xc]:i.LESS,[Ls]:i.LEQUAL,[qc]:i.EQUAL,[Ds]:i.GEQUAL,[Kc]:i.GREATER,[Zc]:i.NOTEQUAL};function ke(T,m){if(m.type===dn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Mt||m.magFilter===Jo||m.magFilter===Cr||m.magFilter===jn||m.minFilter===Mt||m.minFilter===Jo||m.minFilter===Cr||m.minFilter===jn)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ae[m.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ae[m.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ae[m.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Se[m.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Se[m.minFilter]),m.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Qe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===yt||m.minFilter!==Cr&&m.minFilter!==jn||m.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Xe(T,m){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",E));let k=m.source,G=u.get(k);G===void 0&&(G={},u.set(k,G));let ie=W(m);if(ie!==T.__cacheKey){G[ie]===void 0&&(G[ie]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),G[ie].usedTimes++;let re=G[T.__cacheKey];re!==void 0&&(G[T.__cacheKey].usedTimes--,re.usedTimes===0&&P(m)),T.__cacheKey=ie,T.__webglTexture=G[ie].texture}return Y}function q(T,m,Y){return Math.floor(Math.floor(T/Y)/m)}function j(T,m,Y,k){let ie=T.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,Y,k,m.data);else{ie.sort((be,ce)=>be.start-ce.start);let re=0;for(let be=1;be<ie.length;be++){let ce=ie[re],se=ie[be],Me=ce.start+ce.count,Ee=q(se.start,m.width,4),Pe=q(ce.start,m.width,4);se.start<=Me+1&&Ee===Pe&&q(se.start+se.count-1,m.width,4)===Ee?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++re,ie[re]=se)}ie.length=re+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let be=0,ce=ie.length;be<ce;be++){let se=ie[be],Me=Math.floor(se.start/4),Ee=Math.ceil(se.count/4),Pe=Me%m.width,R=Math.floor(Me/m.width),ae=Ee,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Pe,R,ae,J,Y,k,m.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function we(T,m,Y){let k=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=i.TEXTURE_3D);let G=Xe(T,m),ie=m.source;t.bindTexture(k,T.__webglTexture,i.TEXTURE0+Y);let re=n.get(ie);if(ie.version!==re.__version||G===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let J=Oe.getPrimaries(Oe.workingColorSpace),he=m.colorSpace===Pn?null:Oe.getPrimaries(m.colorSpace),ue=m.colorSpace===Pn||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let $=g(m.image,!1,r.maxTextureSize);$=St(m,$);let oe=o.convert(m.format,m.colorSpace),be=o.convert(m.type),ce=y(m.internalFormat,oe,be,m.normalized,m.colorSpace,m.isVideoTexture);ke(k,m);let se,Me=m.mipmaps,Ee=m.isVideoTexture!==!0,Pe=re.__version===void 0||G===!0,R=ie.dataReady,ae=b(m,$);if(m.isDepthTexture)ce=S(m.format===Qn,m.type),Pe&&(Ee?t.texStorage2D(i.TEXTURE_2D,1,ce,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ce,$.width,$.height,0,oe,be,null));else if(m.isDataTexture)if(Me.length>0){Ee&&Pe&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Me[0].width,Me[0].height);for(let J=0,he=Me.length;J<he;J++)se=Me[J],Ee?R&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,se.width,se.height,oe,be,se.data):t.texImage2D(i.TEXTURE_2D,J,ce,se.width,se.height,0,oe,be,se.data);m.generateMipmaps=!1}else Ee?(Pe&&t.texStorage2D(i.TEXTURE_2D,ae,ce,$.width,$.height),R&&j(m,$,oe,be)):t.texImage2D(i.TEXTURE_2D,0,ce,$.width,$.height,0,oe,be,$.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ee&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,Me[0].width,Me[0].height,$.depth);for(let J=0,he=Me.length;J<he;J++)if(se=Me[J],m.format!==Qt)if(oe!==null)if(Ee){if(R)if(m.layerUpdates.size>0){let ue=rh(se.width,se.height,m.format,m.type);for(let ee of m.layerUpdates){let Te=se.data.subarray(ee*ue/se.data.BYTES_PER_ELEMENT,(ee+1)*ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,ee,se.width,se.height,1,oe,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,$.depth,oe,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ce,se.width,se.height,$.depth,0,se.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,$.depth,oe,be,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ce,se.width,se.height,$.depth,0,oe,be,se.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ee&&Pe&&t.texStorage2D(i.TEXTURE_2D,ae,ce,Me[0].width,Me[0].height);for(let J=0,he=Me.length;J<he;J++)se=Me[J],m.format!==Qt?oe!==null?Ee?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,se.width,se.height,oe,se.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ce,se.width,se.height,0,se.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?R&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,se.width,se.height,oe,be,se.data):t.texImage2D(i.TEXTURE_2D,J,ce,se.width,se.height,0,oe,be,se.data)}else if(m.isDataArrayTexture)if(Ee){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,ce,$.width,$.height,$.depth),R)if(m.layerUpdates.size>0){let J=rh($.width,$.height,m.format,m.type);for(let he of m.layerUpdates){let ue=$.data.subarray(he*J/$.data.BYTES_PER_ELEMENT,(he+1)*J/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,$.width,$.height,1,oe,be,ue)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,be,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,$.width,$.height,$.depth,0,oe,be,$.data);else if(m.isData3DTexture)Ee?(Pe&&t.texStorage3D(i.TEXTURE_3D,ae,ce,$.width,$.height,$.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,be,$.data)):t.texImage3D(i.TEXTURE_3D,0,ce,$.width,$.height,$.depth,0,oe,be,$.data);else if(m.isFramebufferTexture){if(Pe)if(Ee)t.texStorage2D(i.TEXTURE_2D,ae,ce,$.width,$.height);else{let J=$.width,he=$.height;for(let ue=0;ue<ae;ue++)t.texImage2D(i.TEXTURE_2D,ue,ce,J,he,0,oe,be,null),J>>=1,he>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),d.add(m),J.onpaint=he=>{let ue=he.changedElements;for(let ee of d)ue.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let ue=i.RGBA,ee=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,ee,Te,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Ee&&Pe){let J=Je(Me[0]);t.texStorage2D(i.TEXTURE_2D,ae,ce,J.width,J.height)}for(let J=0,he=Me.length;J<he;J++)se=Me[J],Ee?R&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,oe,be,se):t.texImage2D(i.TEXTURE_2D,J,ce,oe,be,se);m.generateMipmaps=!1}else if(Ee){if(Pe){let J=Je($);t.texStorage2D(i.TEXTURE_2D,ae,ce,J.width,J.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,be,$)}else t.texImage2D(i.TEXTURE_2D,0,ce,oe,be,$);p(m)&&M(k),re.__version=ie.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function Ie(T,m,Y){if(m.image.length!==6)return;let k=Xe(T,m),G=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Y);let ie=n.get(G);if(G.version!==ie.__version||k===!0){t.activeTexture(i.TEXTURE0+Y);let re=Oe.getPrimaries(Oe.workingColorSpace),K=m.colorSpace===Pn?null:Oe.getPrimaries(m.colorSpace),$=m.colorSpace===Pn||re===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=m.isCompressedTexture||m.image[0].isCompressedTexture,be=m.image[0]&&m.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!oe&&!be?ce[ee]=g(m.image[ee],!0,r.maxCubemapSize):ce[ee]=be?m.image[ee].image:m.image[ee],ce[ee]=St(m,ce[ee]);let se=ce[0],Me=o.convert(m.format,m.colorSpace),Ee=o.convert(m.type),Pe=y(m.internalFormat,Me,Ee,m.normalized,m.colorSpace),R=m.isVideoTexture!==!0,ae=ie.__version===void 0||k===!0,J=G.dataReady,he=b(m,se);ke(i.TEXTURE_CUBE_MAP,m);let ue;if(oe){R&&ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Pe,se.width,se.height);for(let ee=0;ee<6;ee++){ue=ce[ee].mipmaps;for(let Te=0;Te<ue.length;Te++){let ve=ue[Te];m.format!==Qt?Me!==null?R?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Pe,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ve.width,ve.height,Me,Ee,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Pe,ve.width,ve.height,0,Me,Ee,ve.data)}}}else{if(ue=m.mipmaps,R&&ae){ue.length>0&&he++;let ee=Je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Pe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Me,Ee,ce[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,ce[ee].width,ce[ee].height,0,Me,Ee,ce[ee].data);for(let Te=0;Te<ue.length;Te++){let tt=ue[Te].image[ee].image;R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,tt.width,tt.height,Me,Ee,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Pe,tt.width,tt.height,0,Me,Ee,tt.data)}}else{R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me,Ee,ce[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,Me,Ee,ce[ee]);for(let Te=0;Te<ue.length;Te++){let ve=ue[Te];R?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Me,Ee,ve.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Pe,Me,Ee,ve.image[ee])}}}p(m)&&M(i.TEXTURE_CUBE_MAP),ie.__version=G.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function ge(T,m,Y,k,G,ie){let re=o.convert(Y.format,Y.colorSpace),K=o.convert(Y.type),$=y(Y.internalFormat,re,K,Y.normalized,Y.colorSpace),oe=n.get(m),be=n.get(Y);if(be.__renderTarget=m,!oe.__hasExternalTextures){let ce=Math.max(1,m.width>>ie),se=Math.max(1,m.height>>ie);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,ie,$,ce,se,m.depth,0,re,K,null):t.texImage2D(G,ie,$,ce,se,0,re,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ft(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,G,be.__webglTexture,0,at(m)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,G,be.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,m,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,T),m.depthBuffer){let k=m.depthTexture,G=k&&k.isDepthTexture?k.type:null,ie=S(m.stencilBuffer,G),re=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(m),ie,m.width,m.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(m),ie,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ie,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,T)}else{let k=m.textures;for(let G=0;G<k.length;G++){let ie=k[G],re=o.convert(ie.format,ie.colorSpace),K=o.convert(ie.type),$=y(ie.internalFormat,re,K,ie.normalized,ie.colorSpace);ft(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(m),$,m.width,m.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(m),$,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,$,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(T,m,Y){let k=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=n.get(m.depthTexture);if(G.__renderTarget=m,(!G.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),k){if(G.__webglInit===void 0&&(G.__webglInit=!0,m.depthTexture.addEventListener("dispose",E)),G.__webglTexture===void 0){G.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ke(i.TEXTURE_CUBE_MAP,m.depthTexture);let oe=o.convert(m.depthTexture.format),be=o.convert(m.depthTexture.type),ce;m.depthTexture.format===yn?ce=i.DEPTH_COMPONENT24:m.depthTexture.format===Qn&&(ce=i.DEPTH24_STENCIL8);for(let se=0;se<6;se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,m.width,m.height,0,oe,be,null)}}else ne(m.depthTexture,0);let ie=G.__webglTexture,re=at(m),K=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,$=m.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===yn)ft(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,K,ie,0);else if(m.depthTexture.format===Qn)ft(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,$,K,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(T){let m=n.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){let G=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",G)};k.addEventListener("dispose",G),m.__depthDisposeCallback=G}m.__boundDepthTexture=k}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(Y)for(let k=0;k<6;k++)pt(m.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?pt(m.__webglFramebuffer[0],T,0):pt(m.__webglFramebuffer,T,0)}else if(Y){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=i.createRenderbuffer(),Ye(m.__webglDepthbuffer[k],T,!1);else{let G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=m.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ie)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Ye(m.__webglDepthbuffer,T,!1);else{let G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(T,m,Y){let k=n.get(T);m!==void 0&&ge(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ne(T)}function et(T){let m=T.texture,Y=n.get(T),k=n.get(m);T.addEventListener("dispose",_);let G=T.textures,ie=T.isWebGLCubeRenderTarget===!0,re=G.length>1;if(re||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=m.version,s.memory.textures++),ie){Y.__webglFramebuffer=[];for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0){Y.__webglFramebuffer[K]=[];for(let $=0;$<m.mipmaps.length;$++)Y.__webglFramebuffer[K][$]=i.createFramebuffer()}else Y.__webglFramebuffer[K]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){Y.__webglFramebuffer=[];for(let K=0;K<m.mipmaps.length;K++)Y.__webglFramebuffer[K]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(re)for(let K=0,$=G.length;K<$;K++){let oe=n.get(G[K]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),s.memory.textures++)}if(T.samples>0&&ft(T)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<G.length;K++){let $=G[K];Y.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);let oe=o.convert($.format,$.colorSpace),be=o.convert($.type),ce=y($.internalFormat,oe,be,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),se=at(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ce,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(Y.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),ke(i.TEXTURE_CUBE_MAP,m);for(let K=0;K<6;K++)if(m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)ge(Y.__webglFramebuffer[K][$],T,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else ge(Y.__webglFramebuffer[K],T,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(m)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let K=0,$=G.length;K<$;K++){let oe=G[K],be=n.get(oe),ce=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,be.__webglTexture),ke(ce,oe),ge(Y.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+K,ce,0),p(oe)&&M(ce)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,k.__webglTexture),ke(K,m),m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)ge(Y.__webglFramebuffer[$],T,m,i.COLOR_ATTACHMENT0,K,$);else ge(Y.__webglFramebuffer,T,m,i.COLOR_ATTACHMENT0,K,0);p(m)&&M(K),t.unbindTexture()}T.depthBuffer&&Ne(T)}function Fe(T){let m=T.textures;for(let Y=0,k=m.length;Y<k;Y++){let G=m[Y];if(p(G)){let ie=H(T),re=n.get(G).__webglTexture;t.bindTexture(ie,re),M(ie),t.unbindTexture()}}}let ot=[],xt=[];function Nt(T){if(T.samples>0){if(ft(T)===!1){let m=T.textures,Y=T.width,k=T.height,G=i.COLOR_BUFFER_BIT,ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(T),K=m.length>1;if(K)for(let oe=0;oe<m.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let $=T.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<m.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let be=n.get(m[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,Y,k,0,0,Y,k,G,i.NEAREST),c===!0&&(ot.length=0,xt.length=0,ot.push(i.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ot.push(ie),xt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<m.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let be=n.get(m[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let m=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function at(T){return Math.min(r.maxSamples,T.samples)}function ft(T){let m=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function L(T){let m=s.render.frame;f.get(T)!==m&&(f.set(T,m),T.update())}function St(T,m){let Y=T.colorSpace,k=T.format,G=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||Y!==lr&&Y!==Pn&&(Oe.getTransfer(Y)===Ze?(k!==Qt||G!==Wt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",Y)),m}function Je(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=ne,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=We,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function i1(i,e){function t(n,r=Pn){let o,s=Oe.getTransfer(r);if(n===Wt)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qa)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ga)return i.BYTE;if(n===Wa)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===fn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Ka)return i.ALPHA;if(n===Za)return i.RGB;if(n===Qt)return i.RGBA;if(n===yn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===es)return i.RED_INTEGER;if(n===ei)return i.RG;if(n===ts)return i.RG_INTEGER;if(n===ns)return i.RGBA_INTEGER;if(n===Rr||n===Ir||n===Pr||n===Lr)if(s===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===is||n===rs||n===os||n===ss)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===is)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===os)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ss)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===as||n===hs||n===cs||n===ls||n===fs||n===Dr||n===ds)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===as||n===hs)return s===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===cs)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===ls)return o.COMPRESSED_R11_EAC;if(n===fs)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Dr)return o.COMPRESSED_RG11_EAC;if(n===ds)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===us||n===ps||n===gs||n===ms||n===ws||n===_s||n===xs||n===vs||n===ys||n===bs||n===Ms||n===Ss||n===Ts||n===As)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===us)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ps)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gs)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ms)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ws)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_s)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xs)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vs)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ys)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bs)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ms)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ss)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ts)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===As)return s===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===Hs||n===Cs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Es)return s===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cs)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rs||n===Is||n===Yr||n===Ps)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Rs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Is)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ps)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var r1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o1=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new yr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:r1,fragmentShader:o1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends bn{constructor(e,t){super();let n=this,r=null,o=1,s=null,a="local-floor",c=1,h=null,f=null,d=null,l=null,u=null,w=null,v=typeof XRWebGLBinding<"u",g=new Mh,p={},M=t.getContextAttributes(),H=null,y=null,S=[],b=[],E=new Ve,_=null,A=null,P=new Ut;P.viewport=new ht;let D=new Ut;D.viewport=new ht;let U=[P,D],z=new Wo,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new ki,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new ki,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new ki,S[q]=j),j.getHandSpace()};function Z(q){let j=b.indexOf(q.inputSource);if(j===-1)return;let we=S[j];we!==void 0&&(we.update(q.inputSource,q.frame,h||s),we.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ne);for(let q=0;q<S.length;q++){let j=b[q];j!==null&&(b[q]=null,S[q].disconnect(j))}I=null,B=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(H),u=null,l=null,d=null,r=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),A!==null){let q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(H=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=M.stencil?Qn:yn,Ie=M.stencil?Ki:fn);let Ye={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:o};d=this.getBinding(),l=d.createProjectionLayer(Ye),r.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),y=new Ft(l.textureWidth,l.textureHeight,{format:Qt,type:Wt,depthTexture:new Wn(l.textureWidth,l.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}else{let we={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ft(u.framebufferWidth,u.framebufferHeight,{format:Qt,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,s=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(q){for(let j=0;j<q.removed.length;j++){let we=q.removed[j],Ie=b.indexOf(we);Ie>=0&&(b[Ie]=null,S[Ie].disconnect(we))}for(let j=0;j<q.added.length;j++){let we=q.added[j],Ie=b.indexOf(we);if(Ie===-1){for(let Ye=0;Ye<S.length;Ye++)if(Ye>=b.length){b.push(we),Ie=Ye;break}else if(b[Ye]===null){b[Ye]=we,Ie=Ye;break}if(Ie===-1)break}let ge=S[Ie];ge&&ge.connect(we)}}let X=new N,Q=new N;function te(q,j,we){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(we.matrixWorld);let Ie=X.distanceTo(Q),ge=j.projectionMatrix.elements,Ye=we.projectionMatrix.elements,pt=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],et=(ge[9]-1)/ge[5],Fe=(ge[8]-1)/ge[0],ot=(Ye[8]+1)/Ye[0],xt=pt*Fe,Nt=pt*ot,at=Ie/(-Fe+ot),ft=at*-Fe;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(at),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let L=pt+at,St=Ne+at,Je=xt-ft,T=Nt+(Ie-ft),m=We*Ne/St*L,Y=et*Ne/St*L;q.projectionMatrix.makePerspective(Je,T,m,Y,L,St),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ae(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,we=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(we=g.depthFar)),z.near=D.near=P.near=j,z.far=D.far=P.far=we,(I!==z.near||B!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,B=z.far),z.layers.mask=q.layers.mask|6,P.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let Ie=q.parent,ge=z.cameras;Ae(z,Ie);for(let Ye=0;Ye<ge.length;Ye++)Ae(ge[Ye],Ie);ge.length===2?te(z,P,D):z.projectionMatrix.copy(P.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),Se(q,z,Ie)};function Se(q,j,we){we===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(we.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(q){c=q,l!==null&&(l.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let Qe=null;function ke(q,j){if(f=j.getViewerPose(h||s),w=j,f!==null){let we=f.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Ie=!1;we.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let Ne=0;Ne<we.length;Ne++){let We=we[Ne],et=null;if(u!==null)et=u.getViewport(We);else{let ot=d.getViewSubImage(l,We);et=ot.viewport,Ne===0&&(e.setRenderTargetTextures(y,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(y))}let Fe=U[Ne];Fe===void 0&&(Fe=new Ut,Fe.layers.enable(Ne),Fe.viewport=new ht,U[Ne]=Fe),Fe.matrix.fromArray(We.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(We.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(et.x,et.y,et.width,et.height),Ne===0&&(z.matrix.copy(Fe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(Fe)}let ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Ne=d.getDepthInformation(we[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,r.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<we.length;Ne++){let We=we[Ne].camera;if(We){let et=p[We];et||(et=new yr,p[We]=et);let Fe=d.getCameraImage(We);et.sourceTexture=Fe}}}}for(let we=0;we<S.length;we++){let Ie=b[we],ge=S[we];Ie!==null&&ge!==void 0&&ge.update(Ie,j,h||s)}Qe&&Qe(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),w=null}let Xe=new El;Xe.setAnimationLoop(ke),this.setAnimationLoop=function(q){Qe=q},this.dispose=function(){}}},s1=new st,Ll=new Re;Ll.set(-1,0,0,0,1,0,0,0,1);function a1(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,th(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,H,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),l(g,p),p.isMeshPhysicalMaterial&&u(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),w(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,H):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),H=M.envMap,y=M.envMapRotation;H&&(g.envMap.value=H,g.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(y)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ll),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,H){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=H*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function l(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h1(i,e,t,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function h(y,S){let b=r[y.id];b===void 0&&(g(y),b=f(y),r[y.id]=b,y.addEventListener("dispose",M));let E=S.program;n.updateUBOMapping(y,E);let _=e.render.frame;o[y.id]!==_&&(l(y),o[y.id]=_)}function f(y){let S=d();y.__bindingPointIndex=S;let b=i.createBuffer(),E=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(y){let S=r[y.id],b=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,A=b.length;_<A;_++){let P=b[_];if(Array.isArray(P))for(let D=0,U=P.length;D<U;D++)u(P[D],_,D,E);else u(P,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,S,b,E){if(v(y,S,b,E)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let D=0;D<A.length;D++){let U=A[D],z=p(U);w(U,y.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function w(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function v(y,S,b,E){let _=y.value,A=S+"_"+b;if(E[A]===void 0)return typeof _=="number"||typeof _=="boolean"?E[A]=_:ArrayBuffer.isView(_)?E[A]=_.slice():E[A]=_.clone(),!0;{let P=E[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return E[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(y){let S=y.uniforms,b=0,E=16;for(let A=0,P=S.length;A<P;A++){let D=Array.isArray(S[A])?S[A]:[S[A]];for(let U=0,z=D.length;U<z;U++){let I=D[U],B=Array.isArray(I.value)?I.value:[I.value];for(let Z=0,W=B.length;Z<W;Z++){let ne=B[Z],X=p(ne),Q=b%E,te=Q%X.boundary,Ae=Q+te;b+=te,Ae!==0&&E-Ae<X.storage&&(b+=E-Ae),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=X.storage}}}let _=b%E;return _>0&&(b+=E-_),y.__size=b,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),S}function M(y){let S=y.target;S.removeEventListener("dispose",M);let b=s.indexOf(S.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function H(){for(let y in r)i.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:c,update:h,dispose:H}}var c1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function l1(){return Sn===null&&(Sn=new Vi(c1,16,16,ei,un),Sn.name="DFG_LUT",Sn.minFilter=Mt,Sn.magFilter=Mt,Sn.wrapS=vn,Sn.wrapT=vn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Bs=class{constructor(e={}){let{canvas:t=jc(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:l=!1,outputBufferType:u=Wt}=e;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=s;let v=u,g=new Set([ns,ts,es]),p=new Set([Wt,fn,qi,Ki,jo,Qo]),M=new Uint32Array(4),H=new Int32Array(4),y=new N,S=null,b=null,E=[],_=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,U=null,z=null,I=null,B=null;this._outputColorSpace=bt;let Z=0,W=0,ne=null,X=-1,Q=null,te=new ht,Ae=new ht,Se=null,Qe=new Ge(0),ke=0,Xe=t.width,q=t.height,j=1,we=null,Ie=null,ge=new ht(0,0,Xe,q),Ye=new ht(0,0,Xe,q),pt=!1,Ne=new _r,We=!1,et=!1,Fe=new st,ot=new N,xt=new ht,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function ft(){return ne===null?j:1}let L=n;function St(x,C){return t.getContext(x,C)}let Je,T,m,Y,k,G,ie,re,K,$,oe,be,ce,se,Me,Ee,Pe,R,ae,J,he,ue,ee;try{let x={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qo}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",nn,!1),L===null){let C="webgl2";if(L=St(C,x),L===null)throw St(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(x){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Ce("WebGLRenderer: "+x.message),x}function Te(){Je=new wg(L),Je.init(),he=new i1(L,Je),T=new ag(L,Je,e,he),m=new t1(L,Je),T.reversedDepthBuffer&&l&&m.buffers.depth.setReversed(!0),z=L.createFramebuffer(),I=L.createFramebuffer(),B=L.createFramebuffer(),Y=new vg(L),k=new k0,G=new n1(L,Je,m,k,T,he,Y),ie=new mg(P),re=new bd(L),ue=new og(L,re),K=new _g(L,re,Y,ue),$=new bg(L,K,re,ue,Y),R=new yg(L,T,G),Me=new hg(k),oe=new B0(P,ie,Je,T,ue,Me),be=new a1(P,k),ce=new V0,se=new Z0(Je),Pe=new rg(P,ie,m,$,w,c),Ee=new e1(P,$,T),ee=new h1(L,Y,T,m),ae=new sg(L,Je,Y),J=new xg(L,Je,Y),Y.programs=oe.programs,P.capabilities=T,P.extensions=Je,P.properties=k,P.renderLists=ce,P.shadowMap=Ee,P.state=m,P.info=Y}v!==Wt&&(A=new Sg(v,t.width,t.height,a,r,o));let ve=new Sh(P,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let x=Je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(Xe,q,!1))},this.getSize=function(x){return x.set(Xe,q)},this.setSize=function(x,C,V=!0){if(ve.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=x,q=C,t.width=Math.floor(x*j),t.height=Math.floor(C*j),V===!0&&(t.style.width=x+"px",t.style.height=C+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Xe*j,q*j).floor()},this.setDrawingBufferSize=function(x,C,V){Xe=x,q=C,j=V,t.width=Math.floor(x*V),t.height=Math.floor(C*V),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(v===Wt){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(te)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,C,V,F){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,C,V,F),m.viewport(te.copy(ge).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Ye)},this.setScissor=function(x,C,V,F){x.isVector4?Ye.set(x.x,x.y,x.z,x.w):Ye.set(x,C,V,F),m.scissor(Ae.copy(Ye).multiplyScalar(j).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(x){m.setScissorTest(pt=x)},this.setOpaqueSort=function(x){we=x},this.setTransparentSort=function(x){Ie=x},this.getClearColor=function(x){return x.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,V=!0){let F=0;if(x){let O=!1;if(ne!==null){let de=ne.texture.format;O=g.has(de)}if(O){let de=ne.texture.type,me=p.has(de),fe=Pe.getClearColor(),_e=Pe.getClearAlpha(),ye=fe.r,Le=fe.g,Ue=fe.b;me?(M[0]=ye,M[1]=Le,M[2]=Ue,M[3]=_e,L.clearBufferuiv(L.COLOR,0,M)):(H[0]=ye,H[1]=Le,H[2]=Ue,H[3]=_e,L.clearBufferiv(L.COLOR,0,H))}else F|=L.COLOR_BUFFER_BIT}C&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),Pe.dispose(),ce.dispose(),se.dispose(),k.dispose(),ie.dispose(),$.dispose(),ue.dispose(),ee.dispose(),oe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",zh),ve.removeEventListener("sessionend",Vh),ii.stop()};function tt(x){x.preventDefault(),Qa("WebGLRenderer: Context Lost."),D=!0}function qe(){Qa("WebGLRenderer: Context Restored."),D=!1;let x=Y.autoReset,C=Ee.enabled,V=Ee.autoUpdate,F=Ee.needsUpdate,O=Ee.type;Te(),Y.autoReset=x,Ee.enabled=C,Ee.autoUpdate=V,Ee.needsUpdate=F,Ee.type=O}function nn(x){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function wn(x){let C=x.target;C.removeEventListener("dispose",wn),xf(C)}function xf(x){vf(x),k.remove(x)}function vf(x){let C=k.get(x).programs;C!==void 0&&(C.forEach(function(V){oe.releaseProgram(V)}),x.isShaderMaterial&&oe.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,V,F,O,de){C===null&&(C=Nt);let me=O.isMesh&&O.matrixWorld.determinantAffine()<0,fe=Mf(x,C,V,F,O);m.setMaterial(F,me);let _e=V.index,ye=1;if(F.wireframe===!0){if(_e=K.getWireframeAttribute(V),_e===void 0)return;ye=2}let Le=V.drawRange,Ue=V.attributes.position,xe=Le.start*ye,Ke=(Le.start+Le.count)*ye;de!==null&&(xe=Math.max(xe,de.start*ye),Ke=Math.min(Ke,(de.start+de.count)*ye)),_e!==null?(xe=Math.max(xe,0),Ke=Math.min(Ke,_e.count)):Ue!=null&&(xe=Math.max(xe,0),Ke=Math.min(Ke,Ue.count));let dt=Ke-xe;if(dt<0||dt===1/0)return;ue.setup(O,F,fe,V,_e);let it,je=ae;if(_e!==null&&(it=re.get(_e),je=J,je.setIndex(it)),O.isMesh)F.wireframe===!0?(m.setLineWidth(F.wireframeLinewidth*ft()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(O.isLine){let Tt=F.linewidth;Tt===void 0&&(Tt=1),m.setLineWidth(Tt*ft()),O.isLineSegments?je.setMode(L.LINES):O.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else O.isPoints?je.setMode(L.POINTS):O.isSprite&&je.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Tt=O._multiDrawStarts,pe=O._multiDrawCounts,Rt=O._multiDrawCount,ze=_e?re.get(_e).bytesPerElement:1,Kt=k.get(F).currentProgram.getUniforms();for(let _n=0;_n<Rt;_n++)Kt.setValue(L,"_gl_DrawID",_n),je.render(Tt[_n]/ze,pe[_n])}else if(O.isInstancedMesh)je.renderInstances(xe,dt,O.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,Tt);je.renderInstances(xe,dt,pe)}else je.render(xe,dt)};function kh(x,C,V,F){U!==null&&x.isNodeMaterial&&U.setObject(F,x),We===!0&&Me.setState(x,V,!1),x.transparent===!0&&x.side===Ot&&x.forceSinglePass===!1?(x.side=Yt,x.needsUpdate=!0,Kr(x,C,F),x.side=Jn,x.needsUpdate=!0,Kr(x,C,F),x.side=Ot):Kr(x,C,F)}this.compile=function(x,C,V=null){V===null&&(V=x),U!==null&&U.renderStart(x,C,V),b=se.get(V),b.init(C),_.push(b),V.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),et=this.localClippingEnabled,We=Me.init(this.clippingPlanes,et),We===!0&&Me.setGlobalState(this.clippingPlanes,C),U!==null&&Ee.render(b.state.shadowsArray,V,C);let F=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let de=O.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){let fe=de[me];kh(fe,V,C,O),F.add(fe)}else kh(de,V,C,O),F.add(de)}),b=_.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(x,C,V=null){let F=this.compile(x,C,V);return new Promise(O=>{function de(){if(F.forEach(function(me){let _e=k.get(me).currentProgram;(_e===void 0||_e.isReady())&&F.delete(me)}),F.size===0){O(x);return}setTimeout(de,10)}Je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ta=null;function yf(x){ta&&ta(x)}function zh(){ii.stop()}function Vh(){ii.start()}let ii=new El;ii.setAnimationLoop(yf),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(x){ta=x,ve.setAnimationLoop(x),x===null?ii.stop():ii.start()},ve.addEventListener("sessionstart",zh),ve.addEventListener("sessionend",Vh),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(x,C);let V=ve.enabled===!0&&ve.isPresenting===!0,F=A!==null&&(ne===null||V)&&A.begin(P,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(C),C=ve.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,C,ne),b=se.get(x,_.length),b.init(C),b.state.textureUnits=G.getTextureUnits(),_.push(b),Fe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Ne.setFromProjectionMatrix(Fe,hn,C.reversedDepth),et=this.localClippingEnabled,We=Me.init(this.clippingPlanes,et),S=ce.get(x,E.length),S.init(),E.push(S),ve.enabled===!0&&ve.isPresenting===!0){let me=P.xr.getDepthSensingMesh();me!==null&&na(me,C,-1/0,P.sortObjects)}na(x,C,0,P.sortObjects),S.finish(),U!==null&&U.updateLights(b.state.lightsArray),P.sortObjects===!0&&S.sort(we,Ie),at=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,at&&Pe.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Me.beginShadows();let O=b.state.shadowsArray;if(Ee.render(O,x,C),We===!0&&Me.endShadows(),(F&&A.hasRenderPass())===!1){let me=S.opaque,fe=S.transmissive;if(b.setupLights(),C.isArrayCamera){let _e=C.cameras;if(fe.length>0)for(let ye=0,Le=_e.length;ye<Le;ye++){let Ue=_e[ye];Wh(me,fe,x,Ue)}at&&Pe.render(x);for(let ye=0,Le=_e.length;ye<Le;ye++){let Ue=_e[ye];Gh(S,x,Ue,Ue.viewport)}}else fe.length>0&&Wh(me,fe,x,C),at&&Pe.render(x),Gh(S,x,C)}ne!==null&&W===0&&(G.updateMultisampleRenderTarget(ne),G.updateRenderTargetMipmap(ne)),F&&A.end(P),x.isScene===!0&&x.onAfterRender(P,x,C),ue.resetDefaultState(),X=-1,Q=null,_.pop(),_.length>0?(b=_[_.length-1],G.setTextureUnits(b.state.textureUnits),We===!0&&Me.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,U!==null&&U.renderEnd()};function na(x,C,V,F){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Ne)){F&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);let me=$.update(x),fe=x.material;fe.visible&&S.push(x,me,fe,V,xt.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Ne))){let me=$.update(x),fe=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),xt.copy(me.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)),Array.isArray(fe)){let _e=me.groups;for(let ye=0,Le=_e.length;ye<Le;ye++){let Ue=_e[ye],xe=fe[Ue.materialIndex];xe&&xe.visible&&S.push(x,me,xe,V,xt.z,Ue,C)}}else fe.visible&&S.push(x,me,fe,V,xt.z,null,C)}}let de=x.children;for(let me=0,fe=de.length;me<fe;me++)na(de[me],C,V,F)}function Gh(x,C,V,F){let{opaque:O,transmissive:de,transparent:me}=x;b.setupLightsView(V),We===!0&&Me.setGlobalState(P.clippingPlanes,V),F&&m.viewport(te.copy(F)),O.length>0&&qr(O,C,V),de.length>0&&qr(de,C,V),me.length>0&&qr(me,C,V),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Wh(x,C,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){let xe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new Ft(1,1,{generateMipmaps:!0,type:xe?un:Wt,minFilter:jn,samples:Math.max(4,T.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}let de=b.state.transmissionRenderTarget[F.id],me=F.viewport||te;de.setSize(me.z*P.transmissionResolutionScale,me.w*P.transmissionResolutionScale);let fe=P.getRenderTarget(),_e=P.getActiveCubeFace(),ye=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(Qe),ke=P.getClearAlpha(),ke<1&&P.setClearColor(16777215,.5),P.clear(),at&&Pe.render(V);let Le=P.toneMapping;P.toneMapping=ln;let Ue=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),We===!0&&Me.setGlobalState(P.clippingPlanes,F),qr(x,V,F),G.updateMultisampleRenderTarget(de),G.updateRenderTargetMipmap(de),Je.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Ke=0,dt=C.length;Ke<dt;Ke++){let it=C[Ke],{object:je,geometry:Tt,material:pe,group:Rt}=it;if(pe.side===Ot&&je.layers.test(F.layers)){let ze=pe.side;pe.side=Yt,pe.needsUpdate=!0,Xh(je,V,F,Tt,pe,Rt),pe.side=ze,pe.needsUpdate=!0,xe=!0}}xe===!0&&(G.updateMultisampleRenderTarget(de),G.updateRenderTargetMipmap(de))}P.setRenderTarget(fe,_e,ye),P.setClearColor(Qe,ke),Ue!==void 0&&(F.viewport=Ue),P.toneMapping=Le}function qr(x,C,V){let F=C.isScene===!0?C.overrideMaterial:null;for(let O=0,de=x.length;O<de;O++){let me=x[O],{object:fe,geometry:_e,group:ye}=me,Le=me.material;Le.allowOverride===!0&&F!==null&&(Le=F),fe.layers.test(V.layers)&&Xh(fe,C,V,_e,Le,ye)}}function Xh(x,C,V,F,O,de){U!==null&&O.isNodeMaterial&&U.setObject(x,O),x.onBeforeRender(P,C,V,F,O,de),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(P,C,V,F,x,de),O.transparent===!0&&O.side===Ot&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,P.renderBufferDirect(V,C,F,O,x,de),O.side=Jn,O.needsUpdate=!0,P.renderBufferDirect(V,C,F,O,x,de),O.side=Ot):P.renderBufferDirect(V,C,F,O,x,de),x.onAfterRender(P,C,V,F,O,de)}function Kr(x,C,V){C.isScene!==!0&&(C=Nt);let F=k.get(x),O=b.state.lights,de=b.state.shadowsArray,me=O.state.version,fe=oe.getParameters(x,O.state,de,C,V,b.state.lightProbeGridArray),_e=oe.getProgramCacheKey(fe),ye=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;let Le=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=ie.get(x.envMap||F.environment,Le),F.envMapRotation=F.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,ye===void 0&&(x.addEventListener("dispose",wn),ye=new Map,F.programs=ye);let Ue=ye.get(_e);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===me)return Kh(x,fe),Ue}else fe.uniforms=oe.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,V,fe),x.onBeforeCompile(fe,P),Ue=oe.acquireProgram(fe,_e),ye.set(_e,Ue),F.uniforms=fe.uniforms;let xe=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(xe.clippingPlanes=Me.uniform),Kh(x,fe),F.needsLights=Tf(x),F.lightsStateVersion=me,F.needsLights&&(xe.ambientLightColor.value=O.state.ambient,xe.lightProbe.value=O.state.probe,xe.sunLights.value=O.state.sun,xe.sunLightShadows.value=O.state.sunShadow,xe.directionalLights.value=O.state.directional,xe.directionalLightShadows.value=O.state.directionalShadow,xe.spotLights.value=O.state.spot,xe.spotLightShadows.value=O.state.spotShadow,xe.rectAreaLights.value=O.state.rectArea,xe.ltc_1.value=O.state.rectAreaLTC1,xe.ltc_2.value=O.state.rectAreaLTC2,xe.pointLights.value=O.state.point,xe.pointLightShadows.value=O.state.pointShadow,xe.hemisphereLights.value=O.state.hemi,xe.sunShadowMatrix.value=O.state.sunShadowMatrix,xe.sunShadowCascade.value=O.state.sunShadowCascade,xe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xe.spotLightMatrix.value=O.state.spotLightMatrix,xe.spotLightMap.value=O.state.spotLightMap,xe.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=b.state.lightProbeGridArray.length>0,F.currentProgram=Ue,F.uniformsList=null,Ue}function qh(x){if(x.uniformsList===null){let C=x.currentProgram.getUniforms();x.uniformsList=ji.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function Kh(x,C){let V=k.get(x);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function bf(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;y.setFromMatrixPosition(C.matrixWorld);for(let V=0,F=x.length;V<F;V++){let O=x[V];if(O.texture!==null&&O.boundingBox.containsPoint(y))return O}return null}function Mf(x,C,V,F,O){C.isScene!==!0&&(C=Nt),G.resetTextureUnits();let de=C.fog,me=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,fe=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Oe.workingColorSpace,_e=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,ye=ie.get(F.envMap||me,_e),Le=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xe=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color,it=ln;F.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(it=P.toneMapping);let je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=je!==void 0?je.length:0,pe=k.get(F),Rt=b.state.lights;if(We===!0&&(et===!0||x!==Q)){let nt=x===Q&&F.id===X;Me.setState(F,x,nt)}let ze=!1;F.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Rt.state.version||pe.outputColorSpace!==fe||O.isBatchedMesh&&pe.batching===!1||!O.isBatchedMesh&&pe.batching===!0||O.isBatchedMesh&&pe.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&pe.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&pe.instancing===!1||!O.isInstancedMesh&&pe.instancing===!0||O.isSkinnedMesh&&pe.skinning===!1||!O.isSkinnedMesh&&pe.skinning===!0||O.isInstancedMesh&&pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&pe.instancingMorph===!1&&O.morphTexture!==null||pe.envMap!==ye||F.fog===!0&&pe.fog!==de||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Me.numPlanes||pe.numIntersection!==Me.numIntersection)||pe.vertexAlphas!==Le||pe.vertexTangents!==Ue||pe.morphTargets!==xe||pe.morphNormals!==Ke||pe.morphColors!==dt||pe.toneMapping!==it||pe.morphTargetsCount!==Tt||!!pe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ze=!0):(ze=!0,pe.__version=F.version);let Kt=pe.currentProgram;ze===!0&&(Kt=Kr(F,C,O),U&&F.isNodeMaterial&&U.onUpdateProgram(F,Kt,pe));let _n=!1,Dn=!1,wi=!1,$e=Kt.getUniforms(),ct=pe.uniforms;if(m.useProgram(Kt.program)&&(_n=!0,Dn=!0,wi=!0),F.id!==X&&(X=F.id,Dn=!0),pe.needsLights){let nt=bf(b.state.lightProbeGridArray,O);pe.lightProbeGrid!==nt&&(pe.lightProbeGrid=nt,Dn=!0)}if(_n||Q!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),$e.setValue(L,"projectionMatrix",x.projectionMatrix),$e.setValue(L,"viewMatrix",x.matrixWorldInverse);let Nn=$e.map.cameraPosition;Nn!==void 0&&Nn.setValue(L,ot.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&$e.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&$e.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,Dn=!0,wi=!0)}if(pe.needsLights&&(Rt.state.sunShadowMap.length>0&&$e.setValue(L,"sunShadowMap",Rt.state.sunShadowMap,G),Rt.state.directionalShadowMap.length>0&&$e.setValue(L,"directionalShadowMap",Rt.state.directionalShadowMap,G),Rt.state.spotShadowMap.length>0&&$e.setValue(L,"spotShadowMap",Rt.state.spotShadowMap,G),Rt.state.pointShadowMap.length>0&&$e.setValue(L,"pointShadowMap",Rt.state.pointShadowMap,G)),O.isSkinnedMesh){$e.setOptional(L,O,"bindMatrix"),$e.setOptional(L,O,"bindMatrixInverse");let nt=O.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),$e.setValue(L,"boneTexture",nt.boneTexture,G))}O.isBatchedMesh&&($e.setOptional(L,O,"batchingTexture"),$e.setValue(L,"batchingTexture",O._matricesTexture,G),$e.setOptional(L,O,"batchingIdTexture"),$e.setValue(L,"batchingIdTexture",O._indirectTexture,G),$e.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&$e.setValue(L,"batchingColorTexture",O._colorsTexture,G));let Yn=V.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&R.update(O,V,Kt),(Dn||pe.receiveShadow!==O.receiveShadow)&&(pe.receiveShadow=O.receiveShadow,$e.setValue(L,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(ct.envMapIntensity.value=C.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=l1()),Dn){if($e.setValue(L,"toneMappingExposure",P.toneMappingExposure),pe.needsLights&&Sf(ct,wi),de&&F.fog===!0&&be.refreshFogUniforms(ct,de),be.refreshMaterialUniforms(ct,F,j,q,b.state.transmissionRenderTarget[x.id]),pe.needsLights&&pe.lightProbeGrid){let nt=pe.lightProbeGrid;ct.probesSH.value=nt.texture,ct.probesMin.value.copy(nt.boundingBox.min),ct.probesMax.value.copy(nt.boundingBox.max),ct.probesResolution.value.copy(nt.resolution)}ji.upload(L,qh(pe),ct,G)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ji.upload(L,qh(pe),ct,G),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&$e.setValue(L,"center",O.center),$e.setValue(L,"modelViewMatrix",O.modelViewMatrix),$e.setValue(L,"normalMatrix",O.normalMatrix),$e.setValue(L,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let nt=F.uniformsGroups;for(let Nn=0,_i=nt.length;Nn<_i;Nn++){let Jh=nt[Nn];ee.update(Jh,Kt),ee.bind(Jh,Kt)}}return Kt}function Sf(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Tf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,C,V){let F=k.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(x.texture).__webglTexture=C,k.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){let V=k.get(x);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,V=0){ne=x,Z=C,W=V;let F=null,O=!1,de=!1;if(x){let fe=k.get(x);if(fe.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),te.copy(x.viewport),Ae.copy(x.scissor),Se=x.scissorTest,m.viewport(te),m.scissor(Ae),m.setScissorTest(Se),X=-1;return}else if(fe.__webglFramebuffer===void 0)G.setupRenderTarget(x);else if(fe.__hasExternalTextures)G.rebindTextures(x,k.get(x.texture).__webglTexture,k.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Le=x.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&k.has(Le)&&(x.width!==Le.image.width||x.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(x)}}let _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(de=!0);let ye=k.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[C])?F=ye[C][V]:F=ye[C],O=!0):x.samples>0&&G.useMultisampledRTT(x)===!1?F=k.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?F=ye[V]:F=ye,te.copy(x.viewport),Ae.copy(x.scissor),Se=x.scissorTest}else te.copy(ge).multiplyScalar(j).floor(),Ae.copy(Ye).multiplyScalar(j).floor(),Se=pt;if(V!==0&&(F=z),m.bindFramebuffer(L.FRAMEBUFFER,F)&&m.drawBuffers(x,F),m.viewport(te),m.scissor(Ae),m.setScissorTest(Se),O){let fe=k.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,V)}else if(de){let fe=C;for(let _e=0;_e<x.textures.length;_e++){let ye=k.get(x.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,ye.__webglTexture,V,fe)}}else if(x!==null&&V!==0){let fe=k.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,V)}X=-1};function Zh(x){let C=k.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=T.textureFormatReadable(x.format),C.__typeReadable=T.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,V,F,O,de,me,fe=0){if(!(x&&x.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){m.bindFramebuffer(L.FRAMEBUFFER,_e);try{let ye=x.textures[fe],Le=ye.format,Ue=ye.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);let xe=Zh(ye);if(xe.__formatReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-F&&V>=0&&V<=x.height-O&&L.readPixels(C,V,F,O,he.convert(Le),he.convert(Ue),de)}finally{let ye=ne!==null?k.get(ne).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(x,C,V,F,O,de,me,fe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(C>=0&&C<=x.width-F&&V>=0&&V<=x.height-O){m.bindFramebuffer(L.FRAMEBUFFER,_e);let ye=x.textures[fe],Le=ye.format,Ue=ye.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);let xe=Zh(ye);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(C,V,F,O,he.convert(Le),he.convert(Ue),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let dt=ne!==null?k.get(ne).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,dt);let it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await el(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ke),L.deleteSync(it),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,V=0){let F=Math.pow(2,-V),O=Math.floor(x.image.width*F),de=Math.floor(x.image.height*F),me=C!==null?C.x:0,fe=C!==null?C.y:0;G.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,me,fe,O,de),m.unbindTexture()},this.copyTextureToTexture=function(x,C,V=null,F=null,O=0,de=0){let me,fe,_e,ye,Le,Ue,xe,Ke,dt,it=x.isCompressedTexture?x.mipmaps[de]:x.image;if(V!==null)me=V.max.x-V.min.x,fe=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,ye=V.min.x,Le=V.min.y,Ue=V.isBox3?V.min.z:0;else{let ct=Math.pow(2,-O);me=Math.floor(it.width*ct),fe=Math.floor(it.height*ct),x.isDataArrayTexture?_e=it.depth:x.isData3DTexture?_e=Math.floor(it.depth*ct):_e=1,ye=0,Le=0,Ue=0}F!==null?(xe=F.x,Ke=F.y,dt=F.z):(xe=0,Ke=0,dt=0);let je=he.convert(C.format),Tt=he.convert(C.type),pe;C.isData3DTexture?(G.setTexture3D(C,0),pe=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(G.setTexture2DArray(C,0),pe=L.TEXTURE_2D_ARRAY):(G.setTexture2D(C,0),pe=L.TEXTURE_2D),m.activeTexture(L.TEXTURE0),m.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),m.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),m.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Rt=m.getParameter(L.UNPACK_ROW_LENGTH),ze=m.getParameter(L.UNPACK_IMAGE_HEIGHT),Kt=m.getParameter(L.UNPACK_SKIP_PIXELS),_n=m.getParameter(L.UNPACK_SKIP_ROWS),Dn=m.getParameter(L.UNPACK_SKIP_IMAGES);m.pixelStorei(L.UNPACK_ROW_LENGTH,it.width),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it.height),m.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),m.pixelStorei(L.UNPACK_SKIP_ROWS,Le),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);let wi=x.isDataArrayTexture||x.isData3DTexture,$e=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){let ct=k.get(x),Yn=k.get(C),nt=k.get(ct.__renderTarget),Nn=k.get(Yn.__renderTarget);m.bindFramebuffer(L.READ_FRAMEBUFFER,nt.__webglFramebuffer),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let _i=0;_i<_e;_i++)wi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(x).__webglTexture,O,Ue+_i),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(C).__webglTexture,de,dt+_i)),L.blitFramebuffer(ye,Le,me,fe,xe,Ke,me,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||k.has(x)){let ct=k.get(x),Yn=k.get(C);m.bindFramebuffer(L.READ_FRAMEBUFFER,I),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let nt=0;nt<_e;nt++)wi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ct.__webglTexture,O,Ue+nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,O),$e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yn.__webglTexture,de,dt+nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yn.__webglTexture,de),O!==0?L.blitFramebuffer(ye,Le,me,fe,xe,Ke,me,fe,L.COLOR_BUFFER_BIT,L.NEAREST):$e?L.copyTexSubImage3D(pe,de,xe,Ke,dt+nt,ye,Le,me,fe):L.copyTexSubImage2D(pe,de,xe,Ke,ye,Le,me,fe);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $e?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(pe,de,xe,Ke,dt,me,fe,_e,je,Tt,it.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(pe,de,xe,Ke,dt,me,fe,_e,je,it.data):L.texSubImage3D(pe,de,xe,Ke,dt,me,fe,_e,je,Tt,it):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,xe,Ke,me,fe,je,Tt,it.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,xe,Ke,it.width,it.height,je,it.data):L.texSubImage2D(L.TEXTURE_2D,de,xe,Ke,me,fe,je,Tt,it);m.pixelStorei(L.UNPACK_ROW_LENGTH,Rt),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ze),m.pixelStorei(L.UNPACK_SKIP_PIXELS,Kt),m.pixelStorei(L.UNPACK_SKIP_ROWS,_n),m.pixelStorei(L.UNPACK_SKIP_IMAGES,Dn),de===0&&C.generateMipmaps&&L.generateMipmap(pe),m.unbindTexture()},this.initRenderTarget=function(x){k.get(x).__webglFramebuffer===void 0&&G.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?G.setTextureCube(x,0):x.isData3DTexture?G.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?G.setTexture2DArray(x,0):G.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){Z=0,W=0,ne=null,m.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Oe._getUnpackColorSpace()}};var Th=["yi","sejong","eulji","gang","gwon","gwak","ahn","dangun"];var Mw=Object.freeze({range:4.2,halfAngle:.72}),Yl={yi:{name:"이순신",title:"충무공",era:"조선",role:"원거리 · 지휘",color:"#2f5f8f",accent:"#c8412f",hp:420,dmg:22,cd:.9,range:3.4,speed:2.2,dmgType:"phys",attack:"arrow",block:0,passive:{name:"필사즉생",desc:"주변 2.5칸 유산의 공격 속도 +12%."},skill:{short:"학익진",name:"학익진",cd:14,base:60,perLv:10,desc:"학의 날개처럼 펼친 부채꼴 화살 세례. 전방 4칸 부채꼴 적에게 물리 피해."},ult:{short:"거북선",name:"거북선 출격",cd:60,base:220,perLv:30,desc:"거북선이 길을 거슬러 돌진하며 닿는 모든 적에게 화기 피해를 주고 밀어낸다."},quote:"신에게는 아직 열두 척의 배가 남아 있사옵니다.",unlock:null},sejong:{name:"세종대왕",title:"성군",era:"조선",role:"지원 · 통제",color:"#b8322a",accent:"#d9a300",hp:360,dmg:16,cd:1,range:3,speed:2,dmgType:"holy",attack:"orb",block:0,passive:{name:"집현전",desc:"모든 아군의 처치 군자금 +10%."},skill:{short:`훈민
정음`,name:"훈민정음",cd:16,base:50,perLv:8,desc:"하늘에서 한글 자모가 쏟아져 반경 1.8칸 적에게 신성 피해와 기절 1.2초."},ult:{short:"자격루",name:"자격루",cd:70,desc:"시간을 다스린다. 6초간 모든 적 50% 둔화, 모든 유산 재장전 후 공격 속도 +30%."},quote:"나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.",unlock:null},eulji:{name:"을지문덕",title:"살수의 명장",era:"고구려",role:"범위 · 전략",color:"#3d6b4f",accent:"#d9a300",hp:380,dmg:18,cd:1.2,range:3.2,speed:2,dmgType:"holy",attack:"orb",splash:.7,block:0,passive:{name:"여수장우중문시",desc:"주변 2.5칸 적의 갑옷 -20%. 적장의 기세를 꺾는 시(詩)."},skill:{short:"청야",name:"청야전술",cd:15,base:30,perLv:5,desc:"들판을 불태워 5초간 반경 1.5칸에 초당 화기 피해 + 20% 둔화."},ult:{short:"살수",name:"살수대첩",cd:65,base:300,perLv:40,desc:"둑을 터뜨려 반경 3칸 적에게 큰 피해를 주고 3칸 뒤로 쓸어낸다."},quote:"전승공기고 지족원운지 — 싸움에 이겨 공이 높으니 만족하고 그만두라.",unlock:{coins:1500,stage:"s1"}},gang:{name:"강감찬",title:"귀주의 별",era:"고려",role:"근접 · 적장 사냥",color:"#5a4a8a",accent:"#f0c75e",hp:700,dmg:40,cd:1,range:1.1,speed:2.3,dmgType:"phys",attack:"melee",block:2,passive:{name:"낙성",desc:"4번째 공격마다 별이 떨어져 주변 1.2칸에 2배 신성 피해."},skill:{short:"돌격",name:"귀주 돌격",cd:12,base:80,perLv:12,desc:"지정 지점까지 돌진하며 경로의 적에게 피해와 기절 0.5초."},ult:{short:"낙성우",name:"낙성우",cd:60,base:180,perLv:25,desc:"가장 강한 적 8명에게 유성이 떨어진다."},quote:"별이 떨어진 곳에서 태어났으니, 이 땅에 떨어지는 적 또한 별과 같으리라.",unlock:{coins:2e3,stage:"s2"}},gwon:{name:"권율",title:"행주의 방패",era:"조선",role:"근접 · 방어",color:"#7a5230",accent:"#e6d3a3",hp:900,dmg:30,cd:1.1,range:1.1,speed:2,dmgType:"phys",attack:"melee",block:3,regen:.015,passive:{name:"행주치마",desc:"초당 최대 체력 1.5% 회복. 적 3명까지 저지."},skill:{short:"투석",name:"투석",cd:12,base:45,perLv:7,desc:"행주치마에 담아 온 돌 6개가 반경 2칸에 떨어져 피해와 기절 0.6초."},ult:{short:"산성",name:"행주산성",cd:55,desc:"길 위에 목책을 세워 6초간 모든 졸병·정예·중장을 막고, 권율이 받는 피해 50% 감소."},quote:"돌 하나, 치마폭 하나까지 모두가 성벽이다.",unlock:{coins:2500,stage:"s3"}},gwak:{name:"곽재우",title:"홍의장군",era:"조선",role:"기동 · 게릴라",color:"#c0392b",accent:"#2c2c2c",hp:440,dmg:16,cd:.5,range:3,speed:2.8,dmgType:"phys",attack:"arrow",block:0,detect:3,passive:{name:"천강홍의",desc:"주변 3칸의 은신한 적을 발각한다. 이동 속도가 빠르다."},skill:{short:"매복",name:"의병 매복",cd:18,desc:"지정 지점에 의병 3명을 매복시켜 12초간 적을 저지한다."},ult:{short:"질풍",name:"홍의 질풍",cd:50,desc:"8초간 무적, 공격 속도 2배, 화살이 적 3명에게 튕긴다."},quote:"하늘이 내린 붉은 옷의 장군이 여기 있다!",unlock:{coins:3e3,stage:"s4"}},ahn:{name:"안중근",title:"대한의군 참모중장",era:"대한제국",role:"원거리 · 저격",color:"#2e2e36",accent:"#c8a24a",hp:380,dmg:32,cd:1.6,range:4.2,speed:2.2,dmgType:"fire",attack:"gun",block:0,passive:{name:"위국헌신",desc:"권총은 화기라 갑옷의 절반을 무시한다. 적장에게 주는 피해 +25%. 사거리가 가장 길다."},skill:{short:"연발",name:"일곱 발의 총성",cd:14,base:34,perLv:6,desc:"지정 지점 반경 2.2칸의 적에게 권총 7발을 연달아 쏜다. 발당 화기 피해."},ult:{short:"저격",name:"하얼빈 의거",cd:65,base:800,perLv:100,desc:"전장에서 가장 강한 적(적장 우선)을 저격해 큰 화기 피해, 기절 1.5초, 6초간 받는 피해 +30%."},quote:"위국헌신 군인본분 — 나라를 위해 몸 바치는 것은 군인의 본분이다.",unlock:{coins:3500,stage:"s12"}},dangun:{name:"단군왕검",title:"고조선의 시조",era:"고조선",role:"범위 · 번개",color:"#e8e2d0",accent:"#3a8a5a",hp:480,dmg:17,cd:1.15,range:3.2,speed:2,dmgType:"holy",attack:"lightning",block:0,passive:{name:"홍익인간",desc:"널리 사람을 이롭게: 모든 아군 영웅이 초당 체력 0.7% 회복. 기본 공격 번개가 옆의 적 1명에게 절반 피해로 튄다."},skill:{short:"마늘",name:"마늘 던지기",cd:12,base:44,perLv:7,desc:"곰이 사람이 된 백일의 마늘! 마늘 3통을 던져 반경 0.9칸마다 신성 피해 + 3초간 매워서 35% 둔화."},ult:{short:"천둥",name:"천부인 번개",cd:60,base:135,perLv:18,desc:"하늘의 세 보물을 들어 번개 12줄기를 가장 강한 적들에게 내리친다. 줄기마다 신성 피해 + 기절 0.8초."},quote:"널리 인간을 이롭게 하라.",unlock:{coins:4e3,stage:"s5"}}};var er=(i,e)=>Object.fromEntries(e.map((t,n)=>[t,{atlas:i,cell:n}])),tr={atlases:{heroes:{src:"assets/illustrated/heroes.webp",columns:4,rows:2},units:{src:"assets/illustrated/units.webp",columns:4,rows:4},bosses:{src:"assets/illustrated/bosses.webp",columns:4,rows:3},buildings:{src:"assets/illustrated/buildings.webp",columns:4,rows:3},props:{src:"assets/illustrated/props.webp",columns:4,rows:3},terrain:{src:"assets/illustrated/terrain.webp",columns:4,rows:2}},heroes:er("heroes",["yi","sejong","eulji","gang","gwon","gwak","ahn","dangun"]),enemies:{...er("units",["ashigaru","teppo","scout","samurai","ninja","onmyoji","cavalry","drum","armored","ram"]),...er("bosses",["konishi","kato","wakizaka","ukita","ishida","so","kuroda","todo","kuki","kurushima","shimazu","hideyoshi"])},allies:Object.fromEntries(["militia","guard","elite","monk","courier","turtle"].map((i,e)=>[i,{atlas:"units",cell:e+10}])),towers:er("buildings",["sungnyemun","hwaseong","bosingak","cheomseong","haeinsa","seokguram","gyeongbok","namhansan","seokbinggo","bulguksa"]),structures:{gate:{atlas:"buildings",cell:10},hall:{atlas:"buildings",cell:11}},props:er("props",["pine","snowPine","maple","bamboo","rock","snowRock","hanok","thatch","supplies","jangseung","cliff","wall"]),terrain:er("terrain",["spring","summer","autumn","winter","road","snowRoad","court","water"]),faces:{yi:[.61,.25,.37],sejong:[.44,.23,.36],eulji:[.59,.28,.37],gang:[.66,.25,.37],gwon:[.49,.25,.36],gwak:[.58,.22,.36],ahn:[.59,.22,.35],dangun:[.55,.26,.38]},portraits:{},backgrounds:{},scene:"assets/illustrated/scene.webp"};var f1={yi:[{id:"yi_white",name:"백의종군",price:60,body:"#e9e6dc",sleeve:"#dcd8cc",desc:"벼슬을 잃고도 흰옷으로 싸움터를 지킨 충무공."},{id:"yi_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 두정갑과 전설의 기운."}],sejong:[{id:"sejong_blue",name:"청룡포",price:60,body:"#2d5b8a",sleeve:"#2d5b8a",desc:"푸른 곤룡포를 입은 성군."},{id:"sejong_gold",name:"금빛 전설",price:150,gold:!0,desc:"황금 곤룡포와 전설의 기운."}],eulji:[{id:"eulji_iron",name:"고구려 철기",price:60,body:"#4a4f5c",sleeve:"#5a606e",desc:"개마무사의 검은 쇠비늘 갑옷."},{id:"eulji_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 찰갑과 전설의 기운."}],gang:[{id:"gang_crimson",name:"귀주의 붉은 별",price:60,body:"#8a2a2a",sleeve:"#9a3434",desc:"귀주대첩의 붉은 전포."},{id:"gang_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑주와 전설의 기운."}],gwon:[{id:"gwon_hill",name:"행주 산성",price:60,body:"#556b3a",sleeve:"#62783f",desc:"산성을 지키던 들녘빛 전복."},{id:"gwon_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑옷과 전설의 기운."}],gwak:[{id:"gwak_black",name:"흑의 의병",price:60,body:"#2c2b33",sleeve:"#3a3944",desc:"밤을 틈타 기습하던 검은 옷."},{id:"gwak_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 홍의와 전설의 기운."}],ahn:[{id:"ahn_militia",name:"대한의군 군복",price:60,body:"#4a5a3a",sleeve:"#3e4c30",desc:"연해주 의병 부대의 국방색 군복."},{id:"ahn_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 외투와 전설의 기운."}],dangun:[{id:"dangun_sky",name:"천제의 푸른 옷",price:60,body:"#3a6a9a",sleeve:"#4a7aaa",desc:"하늘에서 내려온 환웅의 푸른 옷."},{id:"dangun_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 신의(神衣)와 전설의 기운."}]},Nl={body:"#caa12a",sleeve:"#b8901f",boots:"#5a3a14"};function en(i,e){return e&&(f1[i]||[]).find(t=>t.id===e)||null}var gi={path:"assets/illustrated/hero-menu-poses-v1.webp",width:1160,height:2022,padding:12,frames:[{key:"yi",heroId:"yi",skinId:null,left:12,top:12,width:247,height:313,anchor:.491608,face:[.6,.27,.38]},{key:"yi_white",heroId:"yi",skinId:"yi_white",left:302,top:12,width:209,height:260,anchor:.502999,face:[.62,.25,.4]},{key:"yi_gold",heroId:"yi",skinId:"yi_gold",left:592,top:12,width:201,height:239,anchor:.5006,face:[.63,.27,.4]},{key:"sejong",heroId:"sejong",skinId:null,left:882,top:12,width:222,height:302,anchor:.502476,face:[.62,.235,.38]},{key:"sejong_blue",heroId:"sejong",skinId:"sejong_blue",left:12,top:349,width:174,height:238,anchor:.505103,face:[.62,.23,.39]},{key:"sejong_gold",heroId:"sejong",skinId:"sejong_gold",left:302,top:349,width:186,height:248,anchor:.512843,face:[.65,.235,.39]},{key:"eulji",heroId:"eulji",skinId:null,left:592,top:349,width:152,height:189,anchor:.563421,face:[.7,.3,.45]},{key:"eulji_iron",heroId:"eulji",skinId:"eulji_iron",left:882,top:349,width:167,height:208,anchor:.571386,face:[.69,.29,.45]},{key:"eulji_gold",heroId:"eulji",skinId:"eulji_gold",left:12,top:686,width:171,height:211,anchor:.560129,face:[.69,.29,.45]},{key:"gang",heroId:"gang",skinId:null,left:302,top:686,width:259,height:295,anchor:.543238,face:[.63,.24,.4]},{key:"gang_crimson",heroId:"gang",skinId:"gang_crimson",left:592,top:686,width:262,height:297,anchor:.547801,face:[.63,.24,.4]},{key:"gang_gold",heroId:"gang",skinId:"gang_gold",left:882,top:686,width:266,height:297,anchor:.545031,face:[.63,.24,.4]},{key:"gwon",heroId:"gwon",skinId:null,left:12,top:1023,width:242,height:290,anchor:.512638,face:[.61,.25,.39]},{key:"gwon_hill",heroId:"gwon",skinId:"gwon_hill",left:302,top:1023,width:223,height:254,anchor:.534367,face:[.62,.25,.4]},{key:"gwon_gold",heroId:"gwon",skinId:"gwon_gold",left:592,top:1023,width:231,height:264,anchor:.524076,face:[.62,.25,.4]},{key:"gwak",heroId:"gwak",skinId:null,left:882,top:1023,width:191,height:270,anchor:.492593,face:[.64,.22,.39]},{key:"gwak_black",heroId:"gwak",skinId:"gwak_black",left:12,top:1360,width:172,height:248,anchor:.492582,face:[.66,.22,.39]},{key:"gwak_gold",heroId:"gwak",skinId:"gwak_gold",left:302,top:1360,width:191,height:267,anchor:.493775,face:[.66,.22,.39]},{key:"ahn",heroId:"ahn",skinId:null,left:592,top:1360,width:175,height:258,anchor:.52479,face:[.66,.22,.4]},{key:"ahn_militia",heroId:"ahn",skinId:"ahn_militia",left:882,top:1360,width:166,height:244,anchor:.518786,face:[.65,.22,.4]},{key:"ahn_gold",heroId:"ahn",skinId:"ahn_gold",left:12,top:1697,width:172,height:254,anchor:.523402,face:[.65,.22,.4]},{key:"dangun",heroId:"dangun",skinId:null,left:302,top:1697,width:181,height:244,anchor:.527138,face:[.68,.24,.42]},{key:"dangun_sky",heroId:"dangun",skinId:"dangun_sky",left:592,top:1697,width:179,height:238,anchor:.520614,face:[.67,.24,.42]},{key:"dangun_gold",heroId:"dangun",skinId:"dangun_gold",left:882,top:1697,width:181,height:237,anchor:.517983,face:[.67,.24,.42]}]};function Ul(i,e=null){let t=en(i,e)?.id??null;return gi.frames.find(n=>n.heroId===i&&n.skinId===t)??null}var d1=176,pn=new Map,Ah=new Map,Vs;function Or(i,e){let t=document.createElement("canvas");return t.width=Math.max(1,Math.round(i)),t.height=Math.max(1,Math.round(e)),t}function Gs(i){return new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i.startsWith("data:")?i:new URL(i,new URL("../../",import.meta.url)).href})}function u1(i,e,t,n){let r=t%e.columns,o=Math.floor(t/e.columns),s=Math.round(r*i.naturalWidth/e.columns),a=Math.round(o*i.naturalHeight/e.rows),c=Math.round((r+1)*i.naturalWidth/e.columns)-s,h=Math.round((o+1)*i.naturalHeight/e.rows)-a,f=Or(c,h);if(f.getContext("2d").drawImage(i,s,a,c,h,0,0,c,h),!n)return f;let d=f.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,c,h).data,l=c,u=h,w=0,v=0;for(let p=0;p<h;p++)for(let M=0;M<c;M++)d[(p*c+M)*4+3]<32||(l=Math.min(l,M),w=Math.max(w,M),u=Math.min(u,p),v=Math.max(v,p));if(l>w)return f;l=Math.max(0,l-1),u=Math.max(0,u-1),w=Math.min(c-1,w+1),v=Math.min(h-1,v+1);let g=Or(w-l+1,v-u+1);return g.getContext("2d").drawImage(f,l,u,g.width,g.height,0,0,g.width,g.height),g}function p1(i){let{width:e,height:t}=i,n=Math.floor(t*.88),r=i.getContext("2d").getImageData(0,n,e,t-n).data,o=0,s=0;for(let a=0;a<r.length;a+=4)r[a+3]>=80&&(o+=a/4%e,s++);return s?Math.max(.25,Math.min(.75,o/s/e)):.5}function Eh(i,e=.5){let t=d1,n=2,r=Math.round(i.width*t/i.height),o=Or(r+n*2,t+n*2),s=o.getContext("2d");return s.imageSmoothingQuality="high",s.shadowColor="rgba(8,18,29,0.5)",s.shadowBlur=1.5,s.drawImage(i,n,n,r,t),{img:i,canvas:o,pad:n,ax:e,h:t}}function Ol(){return typeof document>"u"?Promise.resolve():Vs||(Vs=(async()=>{let[i,e]=await Promise.all([Promise.all(Object.entries(tr.atlases).map(async([r,o])=>[r,await Gs(o.src)])),Gs(gi.path)]),t=new Map(i),n=new Map;for(let r of["heroes","enemies","allies","towers","structures","props","terrain"])for(let[o,s]of Object.entries(tr[r])){let a=t.get(s.atlas);if(!a)continue;let c=`${s.atlas}:${s.cell}`,h=n.get(c);h||(h=u1(a,tr.atlases[s.atlas],s.cell,r!=="terrain"),n.set(c,h));let f=["heroes","enemies","allies"].includes(r);pn.set(`${r}:${o}`,Eh(h,s.ax??(f?p1(h):.5)))}if(e&&(e.naturalWidth||e.width)===gi.width&&(e.naturalHeight||e.height)===gi.height)for(let r of gi.frames){let o=Or(r.width,r.height);o.getContext("2d").drawImage(e,r.left,r.top,r.width,r.height,0,0,r.width,r.height);let s={...Eh(o,r.anchor),face:r.face,source:"approved-menu-poses",look:r.key};pn.set(r.skinId?`look:${r.heroId}:${r.skinId}`:`heroes:${r.heroId}`,s)}await Promise.all([...Object.entries(tr.backgrounds).map(async([r,o])=>{let s=await Gs(o);s&&pn.set(`bg:${r}`,{img:s})}),Gs(tr.scene).then(r=>{r&&pn.set("scene",{img:r})})])})(),Vs)}function Fl(i,e,t){i/=255,e/=255,t/=255;let n=Math.max(i,e,t),r=Math.min(i,e,t),o=(n+r)/2,s=n-r;if(!s)return[0,0,o];let a=s/(1-Math.abs(2*o-1));return[(n===i?(e-t)/s+(e<t?6:0):n===e?(t-i)/s+2:(i-e)/s+4)/6,a,o]}function g1(i,e,t){let n=e*Math.min(t,1-t),r=o=>{let s=(o+i*12)%12;return 255*(t-n*Math.max(-1,Math.min(s-3,9-s,1)))};return[r(0),r(8),r(4)]}var m1={sejong:.01,eulji:.14,gang:.75,gwon:.075,gwak:.01};function Bl(i,e=null){let t=pn.get(`heroes:${i}`);if(!t||!e)return t||null;let n=en(i,e);if(!n)return t;let r=Ul(i,e),o=r&&pn.get(`look:${i}:${r.skinId}`);if(o)return o;let s=`${i}:${e}`;if(Ah.has(s))return Ah.get(s);let a=Or(t.img.width,t.img.height),c=a.getContext("2d",{willReadFrequently:!0});c.drawImage(t.img,0,0);let h=c.getImageData(0,0,a.width,a.height),f=n.gold?Nl.body:n.body,d=Fl(...f.match(/[a-f\d]{2}/gi).map(u=>parseInt(u,16)));for(let u=Math.floor(a.height*.3);u<a.height;u++)for(let w=0;w<a.width;w++){let v=(u*a.width+w)*4;if(!h.data[v+3])continue;let[g,p,M]=Fl(h.data[v],h.data[v+1],h.data[v+2]),H=Math.abs(g-m1[i]);if(!(i==="yi"?p<.38&&M<.6:i==="ahn"?p<.27&&M<.6:i==="dangun"?p<.28&&M>.42&&!(u<a.height*.49&&w>a.width*.35&&w<a.width*.65):p>.18&&Math.min(H,1-H)<.12))continue;let S=Math.max(.06,Math.min(.94,M*.8+(d[2]-.3)*.65)),b=g1(d[0],d[1]*.9,S);for(let E=0;E<3;E++)h.data[v+E]=b[E]}c.putImageData(h,0,0);let l={...Eh(a,t.ax),face:t.face,source:"fallback-recolour",look:e};return Ah.set(s,l),l}var kl=i=>pn.get(`enemies:${i}`)||null,zl=i=>pn.get(`allies:${i}`)||null,Vl=i=>pn.get(`towers:${i}`)||null,Gl=i=>pn.get(`structures:${i}`)||null,Wl=i=>pn.get(`props:${i}`)||null;var Hh={a:{path:"assets/3d/fixed/landmark-tiers-a-v1.webp",width:1402,height:1122,x:[0,287,565,841,1123,1402],y:[0,299,578,830,1122],types:["bosingak","cheomseong","haeinsa","seokguram"]},b:{path:"assets/3d/fixed/landmark-tiers-b-v1.webp",width:1402,height:1122,x:[0,284,567,846,1124,1402],y:[0,312,579,806,1122],types:["gyeongbok","namhansan","seokbinggo","bulguksa"]}};function Xl(i,e,t){for(let[n,r]of Object.entries(Hh)){let o=r.types.indexOf(i);if(o>=0)return{sheet:n,index:o*5+(e===4?t==="B"?4:3:e-1)}}return null}var ti={yi:{path:"assets/3d/fixed/yi-directions-v2.webp",width:1233,height:1276,frames:[{left:50,top:11,width:247,height:313,anchor:.491608,anchorY:1,referenceHeight:310},{left:379,top:12,width:209,height:306,anchor:.440923,anchorY:1,referenceHeight:310},{left:644,top:10,width:229,height:307,anchor:.524589,anchorY:1,referenceHeight:310},{left:957,top:12,width:226,height:313,anchor:.518284,anchorY:1,referenceHeight:310},{left:53,top:327,width:244,height:308,anchor:.545612,anchorY:1,referenceHeight:310},{left:375,top:328,width:212,height:306,anchor:.480835,anchorY:1,referenceHeight:310},{left:656,top:328,width:220,height:307,anchor:.51022,anchorY:1,referenceHeight:310},{left:973,top:329,width:217,height:305,anchor:.395054,anchorY:1,referenceHeight:310},{left:53,top:638,width:243,height:300,anchor:.571707,anchorY:1,referenceHeight:310},{left:378,top:638,width:202,height:300,anchor:.464838,anchorY:1,referenceHeight:310},{left:662,top:638,width:211,height:301,anchor:.493892,anchorY:1,referenceHeight:310},{left:962,top:641,width:232,height:298,anchor:.455643,anchorY:1,referenceHeight:310},{left:37,top:942,width:285,height:293,anchor:.434693,anchorY:1,referenceHeight:310},{left:355,top:944,width:250,height:298,anchor:.397755,anchorY:1,referenceHeight:310},{left:634,top:943,width:267,height:290,anchor:.52379,anchorY:1,referenceHeight:310},{left:943,top:942,width:264,height:286,anchor:.540051,anchorY:1,referenceHeight:310}]},sejong:{path:"assets/3d/fixed/sejong-directions-v1.webp",width:1233,height:1276,frames:[{left:87,top:17,width:222,height:302,anchor:.502476,anchorY:1,referenceHeight:305},{left:390,top:15,width:187,height:306,anchor:.463072,anchorY:1,referenceHeight:305},{left:672,top:16,width:188,height:305,anchor:.53696,anchorY:1,referenceHeight:305},{left:955,top:15,width:192,height:305,anchor:.477977,anchorY:1,referenceHeight:305},{left:74,top:325,width:228,height:304,anchor:.511003,anchorY:1,referenceHeight:305},{left:383,top:328,width:199,height:307,anchor:.4891,anchorY:1,referenceHeight:305},{left:672,top:328,width:190,height:309,anchor:.535207,anchorY:1,referenceHeight:305},{left:963,top:331,width:202,height:303,anchor:.475254,anchorY:1,referenceHeight:305},{left:65,top:639,width:231,height:299,anchor:.550924,anchorY:1,referenceHeight:305},{left:386,top:643,width:190,height:296,anchor:.492765,anchorY:1,referenceHeight:305},{left:677,top:643,width:186,height:301,anchor:.522836,anchorY:1,referenceHeight:305},{left:963,top:645,width:205,height:302,anchor:.451802,anchorY:1,referenceHeight:305},{left:78,top:945,width:233,height:288,anchor:.413069,anchorY:1,referenceHeight:305},{left:362,top:951,width:242,height:298,anchor:.413517,anchorY:1,referenceHeight:305},{left:649,top:955,width:234,height:290,anchor:.592494,anchorY:1,referenceHeight:305},{left:923,top:948,width:231,height:289,anchor:.607881,anchorY:1,referenceHeight:305}]},eulji:{path:"assets/3d/fixed/eulji-directions-v2.webp",width:1232,height:1277,frames:[{left:66,top:99,width:152,height:189,anchor:.563421,anchorY:1,referenceHeight:190},{left:390,top:97,width:148,height:190,anchor:.49777,anchorY:1,referenceHeight:190},{left:697,top:96,width:149,height:190,anchor:.509059,anchorY:1,referenceHeight:190},{left:1015,top:98,width:149,height:190,anchor:.452595,anchorY:1,referenceHeight:190},{left:59,top:407,width:163,height:200,anchor:.617775,anchorY:1,referenceHeight:190},{left:388,top:403,width:151,height:203,anchor:.532211,anchorY:1,referenceHeight:190},{left:698,top:402,width:151,height:206,anchor:.458367,anchorY:1,referenceHeight:190},{left:1016,top:407,width:156,height:200,anchor:.343307,anchorY:1,referenceHeight:190},{left:65,top:709,width:159,height:195,anchor:.643038,anchorY:1,referenceHeight:190},{left:388,top:708,width:162,height:201,anchor:.43655,anchorY:1,referenceHeight:190},{left:694,top:706,width:156,height:206,anchor:.520778,anchorY:1,referenceHeight:190},{left:1017,top:709,width:152,height:195,anchor:.373035,anchorY:1,referenceHeight:190},{left:63,top:1003,width:219,height:180,anchor:.424389,anchorY:1,referenceHeight:190},{left:381,top:1007,width:196,height:183,anchor:.405173,anchorY:1,referenceHeight:190},{left:659,top:1006,width:196,height:185,anchor:.557538,anchorY:1,referenceHeight:190},{left:951,top:1002,width:220,height:181,anchor:.561561,anchorY:1,referenceHeight:190}]},gang:{path:"assets/3d/fixed/gang-directions-v1.webp",width:1233,height:1276,frames:[{left:30,top:32,width:259,height:295,anchor:.543238,anchorY:1,referenceHeight:293},{left:347,top:33,width:257,height:292,anchor:.494672,anchorY:1,referenceHeight:293},{left:675,top:35,width:236,height:290,anchor:.458745,anchorY:1,referenceHeight:293},{left:951,top:34,width:267,height:294,anchor:.485671,anchorY:1,referenceHeight:293},{left:28,top:340,width:255,height:297,anchor:.592097,anchorY:1,referenceHeight:293},{left:358,top:340,width:220,height:300,anchor:.576402,anchorY:1,referenceHeight:293},{left:673,top:340,width:231,height:301,anchor:.42382,anchorY:1,referenceHeight:293},{left:957,top:340,width:258,height:296,anchor:.374528,anchorY:1,referenceHeight:293},{left:38,top:656,width:231,height:282,anchor:.615708,anchorY:1,referenceHeight:293},{left:347,top:655,width:218,height:291,anchor:.541424,anchorY:1,referenceHeight:293},{left:685,top:655,width:211,height:292,anchor:.448194,anchorY:1,referenceHeight:293},{left:978,top:657,width:228,height:288,anchor:.352715,anchorY:1,referenceHeight:293},{left:24,top:962,width:282,height:263,anchor:.466717,anchorY:1,referenceHeight:293},{left:334,top:959,width:280,height:268,anchor:.449052,anchorY:1,referenceHeight:293},{left:647,top:958,width:265,height:270,anchor:.53166,anchorY:1,referenceHeight:293},{left:947,top:965,width:268,height:260,anchor:.526119,anchorY:1,referenceHeight:293}]},gwon:{path:"assets/3d/fixed/gwon-directions-v1.webp",width:1233,height:1276,frames:[{left:50,top:22,width:242,height:290,anchor:.512638,anchorY:1,referenceHeight:285},{left:369,top:28,width:208,height:284,anchor:.509672,anchorY:1,referenceHeight:285},{left:659,top:29,width:208,height:283,anchor:.463326,anchorY:1,referenceHeight:285},{left:954,top:26,width:233,height:286,anchor:.460919,anchorY:1,referenceHeight:285},{left:54,top:328,width:237,height:292,anchor:.513685,anchorY:1,referenceHeight:285},{left:364,top:334,width:211,height:288,anchor:.499539,anchorY:1,referenceHeight:285},{left:668,top:335,width:206,height:288,anchor:.475291,anchorY:1,referenceHeight:285},{left:949,top:330,width:235,height:291,anchor:.48038,anchorY:1,referenceHeight:285},{left:45,top:640,width:241,height:293,anchor:.546076,anchorY:1,referenceHeight:285},{left:362,top:649,width:208,height:289,anchor:.473427,anchorY:1,referenceHeight:285},{left:665,top:649,width:203,height:290,anchor:.506037,anchorY:1,referenceHeight:285},{left:956,top:641,width:237,height:294,anchor:.45055,anchorY:1,referenceHeight:285},{left:29,top:954,width:297,height:278,anchor:.44644,anchorY:1,referenceHeight:285},{left:350,top:961,width:262,height:272,anchor:.38118,anchorY:1,referenceHeight:285},{left:638,top:964,width:247,height:265,anchor:.552449,anchorY:1,referenceHeight:285},{left:913,top:955,width:288,height:277,anchor:.537893,anchorY:1,referenceHeight:285}]},gwak:{path:"assets/3d/fixed/gwak-directions-v1.webp",width:1230,height:1278,frames:[{left:69,top:45,width:191,height:270,anchor:.492593,anchorY:1,referenceHeight:270},{left:397,top:43,width:156,height:272,anchor:.452126,anchorY:1,referenceHeight:270},{left:674,top:46,width:166,height:269,anchor:.52941,anchorY:1,referenceHeight:270},{left:965,top:45,width:178,height:270,anchor:.495042,anchorY:1,referenceHeight:270},{left:71,top:371,width:187,height:265,anchor:.530171,anchorY:1,referenceHeight:270},{left:385,top:370,width:167,height:270,anchor:.462805,anchorY:1,referenceHeight:270},{left:674,top:370,width:178,height:266,anchor:.536497,anchorY:1,referenceHeight:270},{left:974,top:370,width:192,height:263,anchor:.403296,anchorY:1,referenceHeight:270},{left:65,top:681,width:203,height:262,anchor:.5228,anchorY:1,referenceHeight:270},{left:381,top:681,width:181,height:267,anchor:.425163,anchorY:1,referenceHeight:270},{left:671,top:683,width:191,height:261,anchor:.523219,anchorY:1,referenceHeight:270},{left:962,top:681,width:202,height:264,anchor:.466803,anchorY:1,referenceHeight:270},{left:58,top:977,width:235,height:256,anchor:.434951,anchorY:1,referenceHeight:270},{left:374,top:964,width:204,height:273,anchor:.440223,anchorY:1,referenceHeight:270},{left:656,top:965,width:205,height:276,anchor:.552396,anchorY:1,referenceHeight:270},{left:937,top:974,width:230,height:260,anchor:.558612,anchorY:1,referenceHeight:270}]},ahn:{path:"assets/3d/fixed/ahn-directions-v1.webp",width:1232,height:1277,frames:[{left:68,top:60,width:175,height:258,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:382,top:63,width:171,height:252,anchor:.525213,anchorY:1,referenceHeight:254.5},{left:694,top:63,width:173,height:251,anchor:.461072,anchorY:1,referenceHeight:254.5},{left:988,top:60,width:166,height:257,anchor:.473755,anchorY:1,referenceHeight:254.5},{left:65,top:367,width:170,height:261,anchor:.528265,anchorY:1,referenceHeight:254.5},{left:389,top:367,width:165,height:263,anchor:.416816,anchorY:1,referenceHeight:254.5},{left:698,top:368,width:159,height:264,anchor:.507658,anchorY:1,referenceHeight:254.5},{left:998,top:367,width:160,height:261,anchor:.476308,anchorY:1,referenceHeight:254.5},{left:70,top:672,width:174,height:257,anchor:.516201,anchorY:1,referenceHeight:254.5},{left:391,top:674,width:172,height:259,anchor:.463042,anchorY:1,referenceHeight:254.5},{left:693,top:675,width:161,height:259,anchor:.46128,anchorY:1,referenceHeight:254.5},{left:990,top:674,width:169,height:257,anchor:.447727,anchorY:1,referenceHeight:254.5},{left:59,top:973,width:239,height:243,anchor:.428626,anchorY:1,referenceHeight:254.5},{left:369,top:974,width:228,height:240,anchor:.427352,anchorY:1,referenceHeight:254.5},{left:651,top:973,width:217,height:244,anchor:.531864,anchorY:1,referenceHeight:254.5},{left:938,top:971,width:236,height:250,anchor:.570551,anchorY:1,referenceHeight:254.5}]},dangun:{path:"assets/3d/fixed/dangun-directions-v1.webp",width:1233,height:1276,frames:[{left:65,top:82,width:181,height:244,anchor:.527138,anchorY:1,referenceHeight:244},{left:370,top:84,width:183,height:244,anchor:.570995,anchorY:1,referenceHeight:244},{left:687,top:83,width:178,height:245,anchor:.412022,anchorY:1,referenceHeight:244},{left:989,top:83,width:178,height:243,anchor:.460881,anchorY:1,referenceHeight:244},{left:66,top:393,width:174,height:240,anchor:.567557,anchorY:1,referenceHeight:244},{left:375,top:389,width:181,height:250,anchor:.481275,anchorY:1,referenceHeight:244},{left:680,top:394,width:174,height:245,anchor:.49329,anchorY:1,referenceHeight:244},{left:992,top:392,width:176,height:241,anchor:.430678,anchorY:1,referenceHeight:244},{left:57,top:692,width:182,height:235,anchor:.605548,anchorY:1,referenceHeight:244},{left:378,top:690,width:189,height:239,anchor:.510881,anchorY:1,referenceHeight:244},{left:671,top:689,width:179,height:243,anchor:.477481,anchorY:1,referenceHeight:244},{left:988,top:692,width:185,height:235,anchor:.419611,anchorY:1,referenceHeight:244},{left:48,top:975,width:233,height:231,anchor:.478438,anchorY:1,referenceHeight:244},{left:367,top:974,width:215,height:238,anchor:.432054,anchorY:1,referenceHeight:244},{left:660,top:973,width:213,height:239,anchor:.551343,anchorY:1,referenceHeight:244},{left:954,top:974,width:231,height:233,anchor:.523123,anchorY:1,referenceHeight:244}]}};function Ch(i){if(i===void 0)return Object.keys(ti).sort();let e=Array.isArray(i)?i.map(t=>t?.heroId):[];return[...new Set(e.filter(t=>Object.hasOwn(ti,t)))].sort()}function ql(i){return Ch(i).join(",")}var Kl={enemy:{ashigaru:{path:"assets/3d/fixed/units/ashigaru-directions-v1.webp",width:1232,height:1277,frames:[{left:51,top:84,width:258,height:227,anchor:.351542,anchorY:1,referenceHeight:222.5},{left:363,top:88,width:231,height:221,anchor:.381496,anchorY:1,referenceHeight:222.5},{left:636,top:89,width:235,height:222,anchor:.607857,anchorY:1,referenceHeight:222.5},{left:927,top:89,width:254,height:223,anchor:.640334,anchorY:1,referenceHeight:222.5},{left:46,top:390,width:263,height:228,anchor:.407625,anchorY:1,referenceHeight:222.5},{left:370,top:388,width:221,height:233,anchor:.353316,anchorY:1,referenceHeight:222.5},{left:644,top:388,width:218,height:234,anchor:.627735,anchorY:1,referenceHeight:222.5},{left:923,top:391,width:263,height:228,anchor:.590797,anchorY:1,referenceHeight:222.5},{left:56,top:680,width:252,height:228,anchor:.414972,anchorY:1,referenceHeight:222.5},{left:374,top:680,width:220,height:233,anchor:.309664,anchorY:1,referenceHeight:222.5},{left:639,top:680,width:219,height:234,anchor:.694072,anchorY:1,referenceHeight:222.5},{left:925,top:682,width:251,height:229,anchor:.578414,anchorY:1,referenceHeight:222.5},{left:49,top:984,width:277,height:199,anchor:.32061,anchorY:1,referenceHeight:222.5},{left:360,top:988,width:246,height:205,anchor:.299266,anchorY:1,referenceHeight:222.5},{left:626,top:989,width:246,height:207,anchor:.689024,anchorY:1,referenceHeight:222.5},{left:906,top:984,width:275,height:200,anchor:.673618,anchorY:1,referenceHeight:222.5}]},teppo:{path:"assets/3d/fixed/units/teppo-directions-v1.webp",width:1230,height:1278,frames:[{left:81,top:78,width:219,height:225,anchor:.364421,anchorY:1,referenceHeight:231},{left:377,top:78,width:210,height:231,anchor:.403921,anchorY:1,referenceHeight:231},{left:652,top:78,width:203,height:231,anchor:.586885,anchorY:1,referenceHeight:231},{left:980,top:77,width:189,height:232,anchor:.430626,anchorY:1,referenceHeight:231},{left:81,top:379,width:219,height:236,anchor:.408489,anchorY:1,referenceHeight:231},{left:383,top:373,width:205,height:240,anchor:.332207,anchorY:1,referenceHeight:231},{left:645,top:371,width:205,height:251,anchor:.671,anchorY:1,referenceHeight:231},{left:976,top:372,width:192,height:245,anchor:.379369,anchorY:1,referenceHeight:231},{left:78,top:680,width:221,height:238,anchor:.424564,anchorY:1,referenceHeight:231},{left:388,top:678,width:189,height:247,anchor:.285882,anchorY:1,referenceHeight:231},{left:657,top:677,width:185,height:253,anchor:.74438,anchorY:1,referenceHeight:231},{left:993,top:673,width:185,height:249,anchor:.325011,anchorY:1,referenceHeight:231},{left:66,top:970,width:244,height:224,anchor:.36383,anchorY:1,referenceHeight:231},{left:364,top:972,width:228,height:232,anchor:.419231,anchorY:1,referenceHeight:231},{left:638,top:972,width:222,height:233,anchor:.598916,anchorY:1,referenceHeight:231},{left:924,top:969,width:239,height:228,anchor:.626433,anchorY:1,referenceHeight:231}]},scout:{path:"assets/3d/fixed/units/scout-directions-v1.webp",width:1232,height:1277,frames:[{left:77,top:60,width:200,height:242,anchor:.493896,anchorY:1,referenceHeight:241.5},{left:379,top:61,width:222,height:250,anchor:.482148,anchorY:1,referenceHeight:241.5},{left:664,top:62,width:178,height:240,anchor:.521726,anchorY:1,referenceHeight:241.5},{left:944,top:61,width:191,height:241,anchor:.496524,anchorY:1,referenceHeight:241.5},{left:95,top:367,width:170,height:259,anchor:.500762,anchorY:1,referenceHeight:241.5},{left:386,top:369,width:219,height:260,anchor:.314269,anchorY:1,referenceHeight:241.5},{left:669,top:368,width:180,height:262,anchor:.593669,anchorY:1,referenceHeight:241.5},{left:973,top:366,width:169,height:263,anchor:.420782,anchorY:1,referenceHeight:241.5},{left:81,top:686,width:191,height:252,anchor:.470271,anchorY:1,referenceHeight:241.5},{left:389,top:676,width:209,height:264,anchor:.327406,anchorY:1,referenceHeight:241.5},{left:691,top:679,width:152,height:263,anchor:.554879,anchorY:1,referenceHeight:241.5},{left:972,top:678,width:162,height:264,anchor:.445527,anchorY:1,referenceHeight:241.5},{left:60,top:998,width:296,height:212,anchor:.347111,anchorY:1,referenceHeight:241.5},{left:373,top:989,width:252,height:226,anchor:.251149,anchorY:1,referenceHeight:241.5},{left:637,top:996,width:243,height:218,anchor:.653108,anchorY:1,referenceHeight:241.5},{left:887,top:998,width:287,height:208,anchor:.643878,anchorY:1,referenceHeight:241.5}]},samurai:{path:"assets/3d/fixed/units/samurai-directions-v1.webp",width:1254,height:1254,frames:[{left:68,top:65,width:180,height:243,anchor:.506986,anchorY:1,referenceHeight:248.5},{left:393,top:63,width:166,height:249,anchor:.593464,anchorY:1,referenceHeight:248.5},{left:706,top:61,width:164,height:250,anchor:.421724,anchorY:1,referenceHeight:248.5},{left:1009,top:66,width:178,height:248,anchor:.512229,anchorY:1,referenceHeight:248.5},{left:68,top:353,width:172,height:258,anchor:.509157,anchorY:1,referenceHeight:248.5},{left:390,top:351,width:175,height:256,anchor:.524287,anchorY:1,referenceHeight:248.5},{left:704,top:354,width:175,height:261,anchor:.431053,anchorY:1,referenceHeight:248.5},{left:1031,top:358,width:170,height:257,anchor:.450338,anchorY:1,referenceHeight:248.5},{left:66,top:646,width:179,height:259,anchor:.586299,anchorY:1,referenceHeight:248.5},{left:401,top:645,width:162,height:261,anchor:.490299,anchorY:1,referenceHeight:248.5},{left:704,top:646,width:172,height:264,anchor:.492571,anchorY:1,referenceHeight:248.5},{left:1038,top:649,width:163,height:257,anchor:.382731,anchorY:1,referenceHeight:248.5},{left:60,top:954,width:278,height:233,anchor:.404508,anchorY:1,referenceHeight:248.5},{left:371,top:939,width:234,height:255,anchor:.467216,anchorY:1,referenceHeight:248.5},{left:655,top:938,width:223,height:258,anchor:.551209,anchorY:1,referenceHeight:248.5},{left:961,top:963,width:239,height:230,anchor:.589473,anchorY:1,referenceHeight:248.5}]},ninja:{path:"assets/3d/fixed/units/ninja-directions-v1.webp",width:1232,height:1277,frames:[{left:61,top:111,width:212,height:203,anchor:.419812,anchorY:1,referenceHeight:224.5},{left:376,top:95,width:225,height:234,anchor:.543098,anchorY:1,referenceHeight:224.5},{left:659,top:93,width:231,height:237,anchor:.414481,anchorY:1,referenceHeight:224.5},{left:977,top:107,width:188,height:215,anchor:.461037,anchorY:1,referenceHeight:224.5},{left:72,top:403,width:203,height:229,anchor:.480077,anchorY:1,referenceHeight:224.5},{left:386,top:388,width:215,height:243,anchor:.39059,anchorY:1,referenceHeight:224.5},{left:663,top:390,width:237,height:242,anchor:.512702,anchorY:1,referenceHeight:224.5},{left:996,top:403,width:186,height:230,anchor:.380795,anchorY:1,referenceHeight:224.5},{left:70,top:703,width:207,height:221,anchor:.499651,anchorY:1,referenceHeight:224.5},{left:385,top:696,width:222,height:237,anchor:.343392,anchorY:1,referenceHeight:224.5},{left:661,top:694,width:237,height:239,anchor:.555508,anchorY:1,referenceHeight:224.5},{left:1005,top:704,width:174,height:223,anchor:.359241,anchorY:1,referenceHeight:224.5},{left:59,top:1006,width:289,height:188,anchor:.357671,anchorY:1,referenceHeight:224.5},{left:380,top:992,width:229,height:213,anchor:.203949,anchorY:1,referenceHeight:224.5},{left:650,top:992,width:237,height:214,anchor:.80403,anchorY:1,referenceHeight:224.5},{left:925,top:1012,width:246,height:190,anchor:.507869,anchorY:1,referenceHeight:224.5}]},onmyoji:{path:"assets/3d/fixed/units/onmyoji-directions-v1.webp",width:1232,height:1277,frames:[{left:78,top:44,width:193,height:255,anchor:.477432,anchorY:1,referenceHeight:258.5},{left:391,top:43,width:182,height:259,anchor:.502243,anchorY:1,referenceHeight:258.5},{left:672,top:43,width:197,height:259,anchor:.467931,anchorY:1,referenceHeight:258.5},{left:972,top:44,width:195,height:258,anchor:.469257,anchorY:1,referenceHeight:258.5},{left:68,top:362,width:213,height:257,anchor:.489037,anchorY:1,referenceHeight:258.5},{left:381,top:354,width:211,height:273,anchor:.434797,anchorY:1,referenceHeight:258.5},{left:676,top:358,width:196,height:267,anchor:.48054,anchorY:1,referenceHeight:258.5},{left:959,top:362,width:213,height:265,anchor:.459477,anchorY:1,referenceHeight:258.5},{left:72,top:672,width:205,height:261,anchor:.465016,anchorY:1,referenceHeight:258.5},{left:383,top:669,width:208,height:262,anchor:.46126,anchorY:1,referenceHeight:258.5},{left:666,top:669,width:211,height:263,anchor:.476598,anchorY:1,referenceHeight:258.5},{left:960,top:678,width:204,height:259,anchor:.429816,anchorY:1,referenceHeight:258.5},{left:60,top:971,width:252,height:241,anchor:.422607,anchorY:1,referenceHeight:258.5},{left:368,top:972,width:215,height:253,anchor:.489079,anchorY:1,referenceHeight:258.5},{left:655,top:970,width:227,height:254,anchor:.549405,anchorY:1,referenceHeight:258.5},{left:941,top:974,width:241,height:244,anchor:.517168,anchorY:1,referenceHeight:258.5}]},cavalry:{path:"assets/3d/fixed/units/cavalry-directions-v1.webp",width:1254,height:1254,frames:[{left:49,top:55,width:262,height:257,anchor:.431453,anchorY:1,referenceHeight:258},{left:351,top:49,width:256,height:263,anchor:.325303,anchorY:1,referenceHeight:258},{left:651,top:49,width:249,height:259,anchor:.660878,anchorY:1,referenceHeight:258},{left:946,top:56,width:255,height:256,anchor:.576719,anchorY:1,referenceHeight:258},{left:52,top:348,width:271,height:250,anchor:.461449,anchorY:1,referenceHeight:258},{left:356,top:343,width:247,height:256,anchor:.348722,anchorY:1,referenceHeight:258},{left:659,top:348,width:238,height:253,anchor:.633991,anchorY:1,referenceHeight:258},{left:929,top:353,width:274,height:248,anchor:.567021,anchorY:1,referenceHeight:258},{left:48,top:647,width:282,height:257,anchor:.425029,anchorY:1,referenceHeight:258},{left:364,top:645,width:242,height:259,anchor:.371875,anchorY:1,referenceHeight:258},{left:652,top:644,width:244,height:260,anchor:.632935,anchorY:1,referenceHeight:258},{left:927,top:648,width:280,height:255,anchor:.573412,anchorY:1,referenceHeight:258},{left:47,top:948,width:288,height:237,anchor:.465551,anchorY:1,referenceHeight:258},{left:350,top:945,width:264,height:242,anchor:.312556,anchorY:1,referenceHeight:258},{left:641,top:948,width:264,height:242,anchor:.689818,anchorY:1,referenceHeight:258},{left:922,top:948,width:286,height:248,anchor:.518374,anchorY:1,referenceHeight:258}]},drum:{path:"assets/3d/fixed/units/drum-directions-v1.webp",width:1254,height:1254,frames:[{left:94,top:58,width:178,height:238,anchor:.380697,anchorY:1,referenceHeight:237.5},{left:400,top:68,width:164,height:237,anchor:.562471,anchorY:1,referenceHeight:237.5},{left:686,top:67,width:159,height:237,anchor:.451333,anchorY:1,referenceHeight:237.5},{left:982,top:58,width:176,height:238,anchor:.620658,anchorY:1,referenceHeight:237.5},{left:98,top:358,width:173,height:242,anchor:.556343,anchorY:1,referenceHeight:237.5},{left:408,top:360,width:159,height:248,anchor:.309234,anchorY:1,referenceHeight:237.5},{left:684,top:362,width:164,height:248,anchor:.682264,anchorY:1,referenceHeight:237.5},{left:983,top:356,width:176,height:244,anchor:.466239,anchorY:1,referenceHeight:237.5},{left:92,top:647,width:178,height:252,anchor:.54928,anchorY:1,referenceHeight:237.5},{left:408,top:658,width:164,height:251,anchor:.314978,anchorY:1,referenceHeight:237.5},{left:682,top:664,width:166,height:245,anchor:.644367,anchorY:1,referenceHeight:237.5},{left:985,top:648,width:176,height:252,anchor:.453169,anchorY:1,referenceHeight:237.5},{left:87,top:928,width:185,height:255,anchor:.473323,anchorY:1,referenceHeight:237.5},{left:402,top:943,width:157,height:256,anchor:.57019,anchorY:1,referenceHeight:237.5},{left:699,top:945,width:166,height:253,anchor:.489703,anchorY:1,referenceHeight:237.5},{left:983,top:928,width:185,height:262,anchor:.42249,anchorY:1,referenceHeight:237.5}]},armored:{path:"assets/3d/fixed/units/armored-directions-v1.webp",width:1232,height:1277,frames:[{left:75,top:80,width:213,height:227,anchor:.427526,anchorY:1,referenceHeight:227},{left:373,top:85,width:231,height:227,anchor:.462308,anchorY:1,referenceHeight:227},{left:650,top:85,width:230,height:226,anchor:.546258,anchorY:1,referenceHeight:227},{left:965,top:79,width:225,height:230,anchor:.435745,anchorY:1,referenceHeight:227},{left:73,top:384,width:203,height:233,anchor:.495647,anchorY:1,referenceHeight:227},{left:386,top:385,width:212,height:238,anchor:.384729,anchorY:1,referenceHeight:227},{left:659,top:385,width:216,height:241,anchor:.546784,anchorY:1,referenceHeight:227},{left:985,top:385,width:200,height:233,anchor:.45323,anchorY:1,referenceHeight:227},{left:95,top:686,width:205,height:228,anchor:.571161,anchorY:1,referenceHeight:227},{left:385,top:684,width:205,height:237,anchor:.410528,anchorY:1,referenceHeight:227},{left:671,top:684,width:196,height:237,anchor:.490683,anchorY:1,referenceHeight:227},{left:997,top:687,width:192,height:235,anchor:.361298,anchorY:1,referenceHeight:227},{left:54,top:1011,width:268,height:199,anchor:.465412,anchorY:1,referenceHeight:227},{left:371,top:1003,width:253,height:211,anchor:.449067,anchorY:1,referenceHeight:227},{left:655,top:1004,width:237,height:214,anchor:.517426,anchorY:1,referenceHeight:227},{left:947,top:1009,width:237,height:208,anchor:.413692,anchorY:1,referenceHeight:227}]},ram:{path:"assets/3d/fixed/units/ram-directions-v1.webp",width:1232,height:1277,frames:[{left:52,top:88,width:259,height:200,anchor:.526883,anchorY:1,referenceHeight:199.5},{left:360,top:84,width:228,height:199,anchor:.441172,anchorY:1,referenceHeight:199.5},{left:646,top:84,width:226,height:199,anchor:.551232,anchorY:1,referenceHeight:199.5},{left:923,top:87,width:258,height:201,anchor:.467263,anchorY:1,referenceHeight:199.5},{left:58,top:378,width:256,height:201,anchor:.539796,anchorY:1,referenceHeight:199.5},{left:356,top:369,width:231,height:202,anchor:.445109,anchorY:1,referenceHeight:199.5},{left:647,top:370,width:230,height:202,anchor:.543588,anchorY:1,referenceHeight:199.5},{left:918,top:377,width:257,height:202,anchor:.457042,anchorY:1,referenceHeight:199.5},{left:58,top:659,width:271,height:207,anchor:.549575,anchorY:1,referenceHeight:199.5},{left:357,top:646,width:226,height:206,anchor:.435656,anchorY:1,referenceHeight:199.5},{left:649,top:647,width:227,height:205,anchor:.559404,anchorY:1,referenceHeight:199.5},{left:904,top:658,width:271,height:208,anchor:.446533,anchorY:1,referenceHeight:199.5},{left:50,top:955,width:274,height:200,anchor:.489687,anchorY:1,referenceHeight:199.5},{left:350,top:947,width:245,height:203,anchor:.384892,anchorY:1,referenceHeight:199.5},{left:637,top:947,width:246,height:203,anchor:.611607,anchorY:1,referenceHeight:199.5},{left:907,top:951,width:276,height:203,anchor:.511043,anchorY:1,referenceHeight:199.5}]},konishi:{path:"assets/3d/fixed/units/konishi-directions-v1.webp",width:1232,height:1277,frames:[{left:81,top:31,width:214,height:297,anchor:.392778,anchorY:1,referenceHeight:296.5},{left:384,top:31,width:205,height:297,anchor:.50664,anchorY:1,referenceHeight:296.5},{left:640,top:33,width:196,height:296,anchor:.509581,anchorY:1,referenceHeight:296.5},{left:950,top:35,width:226,height:292,anchor:.541736,anchorY:1,referenceHeight:296.5},{left:79,top:350,width:216,height:295,anchor:.461929,anchorY:1,referenceHeight:296.5},{left:385,top:347,width:205,height:298,anchor:.465496,anchorY:1,referenceHeight:296.5},{left:650,top:349,width:201,height:296,anchor:.511732,anchorY:1,referenceHeight:296.5},{left:960,top:350,width:210,height:294,anchor:.49077,anchorY:1,referenceHeight:296.5},{left:69,top:667,width:216,height:286,anchor:.500247,anchorY:1,referenceHeight:296.5},{left:386,top:663,width:202,height:290,anchor:.437207,anchorY:1,referenceHeight:296.5},{left:648,top:665,width:197,height:290,anchor:.554778,anchorY:1,referenceHeight:296.5},{left:964,top:666,width:213,height:289,anchor:.482147,anchorY:1,referenceHeight:296.5},{left:44,top:970,width:315,height:269,anchor:.416834,anchorY:1,referenceHeight:296.5},{left:358,top:970,width:255,height:259,anchor:.401536,anchorY:1,referenceHeight:296.5},{left:628,top:969,width:240,height:264,anchor:.549084,anchorY:1,referenceHeight:296.5},{left:886,top:972,width:312,height:267,anchor:.52625,anchorY:1,referenceHeight:296.5}]},kato:{path:"assets/3d/fixed/units/kato-directions-v1.webp",width:1232,height:1277,frames:[{left:93,top:18,width:147,height:303,anchor:.500772,anchorY:1,referenceHeight:301},{left:409,top:22,width:148,height:297,anchor:.514287,anchorY:1,referenceHeight:301},{left:682,top:20,width:148,height:299,anchor:.508477,anchorY:1,referenceHeight:301},{left:1002,top:18,width:149,height:307,anchor:.484676,anchorY:1,referenceHeight:301},{left:95,top:339,width:159,height:294,anchor:.463186,anchorY:1,referenceHeight:301},{left:403,top:348,width:153,height:288,anchor:.474912,anchorY:1,referenceHeight:301},{left:680,top:350,width:156,height:290,anchor:.519869,anchorY:1,referenceHeight:301},{left:1007,top:341,width:150,height:299,anchor:.512711,anchorY:1,referenceHeight:301},{left:93,top:652,width:155,height:293,anchor:.471403,anchorY:1,referenceHeight:301},{left:401,top:662,width:154,height:282,anchor:.429321,anchorY:1,referenceHeight:301},{left:674,top:663,width:158,height:284,anchor:.552803,anchorY:1,referenceHeight:301},{left:992,top:659,width:169,height:293,anchor:.495296,anchorY:1,referenceHeight:301},{left:43,top:959,width:274,height:262,anchor:.421909,anchorY:1,referenceHeight:301},{left:363,top:971,width:241,height:255,anchor:.309179,anchorY:1,referenceHeight:301},{left:630,top:970,width:240,height:257,anchor:.677421,anchorY:1,referenceHeight:301},{left:921,top:961,width:268,height:264,anchor:.597619,anchorY:1,referenceHeight:301}]},wakizaka:{path:"assets/3d/fixed/units/wakizaka-directions-v1.webp",width:1230,height:1278,frames:[{left:77,top:26,width:197,height:307,anchor:.43784,anchorY:1,referenceHeight:305.5},{left:377,top:25,width:196,height:298,anchor:.498361,anchorY:1,referenceHeight:305.5},{left:662,top:23,width:230,height:304,anchor:.461632,anchorY:1,referenceHeight:305.5},{left:937,top:26,width:238,height:308,anchor:.574901,anchorY:1,referenceHeight:305.5},{left:78,top:351,width:201,height:287,anchor:.475853,anchorY:1,referenceHeight:305.5},{left:389,top:347,width:189,height:291,anchor:.514229,anchorY:1,referenceHeight:305.5},{left:657,top:343,width:224,height:290,anchor:.419168,anchorY:1,referenceHeight:305.5},{left:912,top:343,width:272,height:299,anchor:.546734,anchorY:1,referenceHeight:305.5},{left:79,top:652,width:197,height:287,anchor:.538717,anchorY:1,referenceHeight:305.5},{left:382,top:648,width:196,height:290,anchor:.55998,anchorY:1,referenceHeight:305.5},{left:661,top:652,width:232,height:292,anchor:.381649,anchorY:1,referenceHeight:305.5},{left:929,top:656,width:253,height:287,anchor:.510389,anchorY:1,referenceHeight:305.5},{left:40,top:963,width:244,height:258,anchor:.518104,anchorY:1,referenceHeight:305.5},{left:350,top:963,width:244,height:249,anchor:.425528,anchorY:1,referenceHeight:305.5},{left:643,top:961,width:256,height:259,anchor:.526284,anchorY:1,referenceHeight:305.5},{left:915,top:971,width:276,height:252,anchor:.574441,anchorY:1,referenceHeight:305.5}]},ukita:{path:"assets/3d/fixed/units/ukita-directions-v1.webp",width:1232,height:1277,frames:[{left:45,top:24,width:226,height:297,anchor:.478951,anchorY:1,referenceHeight:294.5},{left:375,top:24,width:199,height:295,anchor:.530305,anchorY:1,referenceHeight:294.5},{left:669,top:26,width:184,height:293,anchor:.524243,anchorY:1,referenceHeight:294.5},{left:985,top:28,width:220,height:294,anchor:.538708,anchorY:1,referenceHeight:294.5},{left:46,top:342,width:223,height:293,anchor:.498573,anchorY:1,referenceHeight:294.5},{left:375,top:339,width:208,height:299,anchor:.47426,anchorY:1,referenceHeight:294.5},{left:670,top:342,width:184,height:297,anchor:.577831,anchorY:1,referenceHeight:294.5},{left:987,top:345,width:214,height:293,anchor:.500391,anchorY:1,referenceHeight:294.5},{left:53,top:661,width:215,height:285,anchor:.489688,anchorY:1,referenceHeight:294.5},{left:377,top:657,width:203,height:292,anchor:.449267,anchorY:1,referenceHeight:294.5},{left:672,top:660,width:189,height:291,anchor:.569735,anchorY:1,referenceHeight:294.5},{left:991,top:666,width:214,height:284,anchor:.503522,anchorY:1,referenceHeight:294.5},{left:45,top:970,width:260,height:268,anchor:.514888,anchorY:1,referenceHeight:294.5},{left:348,top:967,width:266,height:270,anchor:.406818,anchorY:1,referenceHeight:294.5},{left:643,top:967,width:262,height:268,anchor:.568888,anchorY:1,referenceHeight:294.5},{left:947,top:970,width:257,height:268,anchor:.490088,anchorY:1,referenceHeight:294.5}]},ishida:{path:"assets/3d/fixed/units/ishida-directions-v1.webp",width:1232,height:1277,frames:[{left:79,top:34,width:192,height:288,anchor:.49734,anchorY:1,referenceHeight:286.5},{left:379,top:29,width:206,height:285,anchor:.487701,anchorY:1,referenceHeight:286.5},{left:656,top:32,width:203,height:282,anchor:.516246,anchorY:1,referenceHeight:286.5},{left:950,top:31,width:201,height:291,anchor:.533119,anchorY:1,referenceHeight:286.5},{left:86,top:342,width:191,height:283,anchor:.558582,anchorY:1,referenceHeight:286.5},{left:379,top:339,width:204,height:291,anchor:.399002,anchorY:1,referenceHeight:286.5},{left:661,top:343,width:196,height:289,anchor:.568257,anchorY:1,referenceHeight:286.5},{left:941,top:343,width:206,height:283,anchor:.489691,anchorY:1,referenceHeight:286.5},{left:78,top:651,width:194,height:275,anchor:.602506,anchorY:1,referenceHeight:286.5},{left:376,top:652,width:208,height:281,anchor:.42849,anchorY:1,referenceHeight:286.5},{left:663,top:651,width:193,height:284,anchor:.553288,anchorY:1,referenceHeight:286.5},{left:948,top:650,width:217,height:279,anchor:.447405,anchorY:1,referenceHeight:286.5},{left:67,top:940,width:251,height:285,anchor:.452569,anchorY:1,referenceHeight:286.5},{left:361,top:942,width:244,height:276,anchor:.415536,anchorY:1,referenceHeight:286.5},{left:636,top:942,width:240,height:275,anchor:.564564,anchorY:1,referenceHeight:286.5},{left:934,top:940,width:228,height:286,anchor:.513357,anchorY:1,referenceHeight:286.5}]},so:{path:"assets/3d/fixed/units/so-directions-v1.webp",width:1232,height:1277,frames:[{left:66,top:41,width:188,height:278,anchor:.543333,anchorY:1,referenceHeight:277},{left:375,top:41,width:177,height:271,anchor:.628505,anchorY:1,referenceHeight:277},{left:690,top:41,width:161,height:276,anchor:.423527,anchorY:1,referenceHeight:277},{left:979,top:40,width:187,height:279,anchor:.450426,anchorY:1,referenceHeight:277},{left:64,top:347,width:193,height:278,anchor:.587446,anchorY:1,referenceHeight:277},{left:400,top:346,width:160,height:278,anchor:.498731,anchorY:1,referenceHeight:277},{left:676,top:346,width:162,height:279,anchor:.585777,anchorY:1,referenceHeight:277},{left:976,top:347,width:192,height:278,anchor:.408526,anchorY:1,referenceHeight:277},{left:62,top:654,width:181,height:278,anchor:.637757,anchorY:1,referenceHeight:277},{left:388,top:652,width:161,height:276,anchor:.502471,anchorY:1,referenceHeight:277},{left:689,top:655,width:169,height:274,anchor:.505493,anchorY:1,referenceHeight:277},{left:990,top:653,width:181,height:278,anchor:.363807,anchorY:1,referenceHeight:277},{left:59,top:955,width:276,height:268,anchor:.255294,anchorY:1,referenceHeight:277},{left:356,top:956,width:262,height:258,anchor:.253165,anchorY:1,referenceHeight:277},{left:639,top:957,width:231,height:270,anchor:.669008,anchorY:1,referenceHeight:277},{left:914,top:954,width:256,height:271,anchor:.535504,anchorY:1,referenceHeight:277}]},kuroda:{path:"assets/3d/fixed/units/kuroda-directions-v1.webp",width:1232,height:1277,frames:[{left:76,top:34,width:184,height:309,anchor:.446595,anchorY:1,referenceHeight:307},{left:384,top:35,width:159,height:307,anchor:.552187,anchorY:1,referenceHeight:307},{left:682,top:35,width:162,height:307,anchor:.444634,anchorY:1,referenceHeight:307},{left:972,top:45,width:178,height:296,anchor:.541504,anchorY:1,referenceHeight:307},{left:81,top:349,width:186,height:305,anchor:.488633,anchorY:1,referenceHeight:307},{left:390,top:354,width:169,height:302,anchor:.499827,anchorY:1,referenceHeight:307},{left:694,top:361,width:162,height:294,anchor:.481921,anchorY:1,referenceHeight:307},{left:978,top:352,width:174,height:303,anchor:.457313,anchorY:1,referenceHeight:307},{left:82,top:662,width:186,height:296,anchor:.479387,anchorY:1,referenceHeight:307},{left:386,top:665,width:165,height:300,anchor:.510931,anchorY:1,referenceHeight:307},{left:688,top:672,width:165,height:296,anchor:.492629,anchorY:1,referenceHeight:307},{left:972,top:670,width:181,height:293,anchor:.489538,anchorY:1,referenceHeight:307},{left:37,top:974,width:294,height:248,anchor:.394881,anchorY:1,referenceHeight:307},{left:363,top:990,width:249,height:249,anchor:.343684,anchorY:1,referenceHeight:307},{left:642,top:989,width:238,height:252,anchor:.664178,anchorY:1,referenceHeight:307},{left:917,top:980,width:278,height:247,anchor:.626509,anchorY:1,referenceHeight:307}]},todo:{path:"assets/3d/fixed/units/todo-directions-v1.webp",width:1232,height:1277,frames:[{left:88,top:18,width:208,height:301,anchor:.440389,anchorY:1,referenceHeight:303.5},{left:389,top:16,width:219,height:303,anchor:.487931,anchorY:1,referenceHeight:303.5},{left:695,top:15,width:186,height:304,anchor:.489393,anchorY:1,referenceHeight:303.5},{left:943,top:19,width:219,height:304,anchor:.523337,anchorY:1,referenceHeight:303.5},{left:93,top:346,width:208,height:293,anchor:.445779,anchorY:1,referenceHeight:303.5},{left:393,top:338,width:211,height:303,anchor:.382795,anchorY:1,referenceHeight:303.5},{left:678,top:341,width:194,height:301,anchor:.572051,anchorY:1,referenceHeight:303.5},{left:969,top:348,width:203,height:295,anchor:.473155,anchorY:1,referenceHeight:303.5},{left:84,top:658,width:194,height:290,anchor:.475216,anchorY:1,referenceHeight:303.5},{left:384,top:650,width:228,height:302,anchor:.387505,anchorY:1,referenceHeight:303.5},{left:701,top:653,width:181,height:299,anchor:.558871,anchorY:1,referenceHeight:303.5},{left:1005,top:661,width:169,height:290,anchor:.407089,anchorY:1,referenceHeight:303.5},{left:79,top:965,width:266,height:273,anchor:.353684,anchorY:1,referenceHeight:303.5},{left:377,top:959,width:236,height:273,anchor:.352592,anchorY:1,referenceHeight:303.5},{left:646,top:963,width:240,height:271,anchor:.627792,anchorY:1,referenceHeight:303.5},{left:910,top:972,width:262,height:264,anchor:.620223,anchorY:1,referenceHeight:303.5}]},kuki:{path:"assets/3d/fixed/units/kuki-directions-v1.webp",width:1232,height:1277,frames:[{left:75,top:47,width:243,height:281,anchor:.476318,anchorY:1,referenceHeight:281},{left:363,top:47,width:226,height:281,anchor:.527798,anchorY:1,referenceHeight:281},{left:638,top:47,width:225,height:281,anchor:.472611,anchorY:1,referenceHeight:281},{left:932,top:59,width:237,height:273,anchor:.534909,anchorY:1,referenceHeight:281},{left:75,top:364,width:244,height:277,anchor:.465943,anchorY:1,referenceHeight:281},{left:379,top:359,width:213,height:280,anchor:.492188,anchorY:1,referenceHeight:281},{left:673,top:361,width:184,height:275,anchor:.484337,anchorY:1,referenceHeight:281},{left:919,top:362,width:247,height:280,anchor:.493462,anchorY:1,referenceHeight:281},{left:76,top:663,width:249,height:274,anchor:.491711,anchorY:1,referenceHeight:281},{left:376,top:661,width:225,height:272,anchor:.48905,anchorY:1,referenceHeight:281},{left:675,top:665,width:178,height:272,anchor:.565826,anchorY:1,referenceHeight:281},{left:928,top:673,width:253,height:274,anchor:.427042,anchorY:1,referenceHeight:281},{left:54,top:970,width:218,height:266,anchor:.730144,anchorY:1,referenceHeight:281},{left:369,top:970,width:241,height:238,anchor:.412679,anchorY:1,referenceHeight:281},{left:624,top:973,width:246,height:248,anchor:.629705,anchorY:1,referenceHeight:281},{left:956,top:978,width:227,height:256,anchor:.368411,anchorY:1,referenceHeight:281}]},kurushima:{path:"assets/3d/fixed/units/kurushima-directions-v2.webp",width:1232,height:1277,frames:[{left:108,top:58,width:167,height:246,anchor:.446185,anchorY:1,referenceHeight:243},{left:385,top:58,width:163,height:240,anchor:.524779,anchorY:1,referenceHeight:243},{left:682,top:59,width:164,height:240,anchor:.463207,anchorY:1,referenceHeight:243},{left:956,top:58,width:169,height:247,anchor:.55006,anchorY:1,referenceHeight:243},{left:99,top:368,width:173,height:242,anchor:.524773,anchorY:1,referenceHeight:243},{left:391,top:366,width:171,height:246,anchor:.497844,anchorY:1,referenceHeight:243},{left:672,top:367,width:169,height:245,anchor:.493365,anchorY:1,referenceHeight:243},{left:959,top:368,width:176,height:242,anchor:.472715,anchorY:1,referenceHeight:243},{left:99,top:669,width:172,height:240,anchor:.557221,anchorY:1,referenceHeight:243},{left:387,top:673,width:173,height:248,anchor:.478124,anchorY:1,referenceHeight:243},{left:677,top:674,width:168,height:248,anchor:.509378,anchorY:1,referenceHeight:243},{left:961,top:670,width:177,height:240,anchor:.42612,anchorY:1,referenceHeight:243},{left:60,top:970,width:276,height:236,anchor:.401553,anchorY:1,referenceHeight:243},{left:385,top:974,width:205,height:228,anchor:.405706,anchorY:1,referenceHeight:243},{left:642,top:973,width:204,height:229,anchor:.585706,anchorY:1,referenceHeight:243},{left:895,top:970,width:276,height:235,anchor:.599495,anchorY:1,referenceHeight:243}]},shimazu:{path:"assets/3d/fixed/units/shimazu-directions-v2.webp",width:1232,height:1277,frames:[{left:97,top:78,width:188,height:237,anchor:.451465,anchorY:1,referenceHeight:234.5},{left:382,top:77,width:199,height:232,anchor:.474376,anchorY:1,referenceHeight:234.5},{left:652,top:77,width:196,height:232,anchor:.521202,anchorY:1,referenceHeight:234.5},{left:949,top:77,width:186,height:237,anchor:.544705,anchorY:1,referenceHeight:234.5},{left:88,top:372,width:205,height:242,anchor:.500654,anchorY:1,referenceHeight:234.5},{left:387,top:370,width:166,height:238,anchor:.477353,anchorY:1,referenceHeight:234.5},{left:652,top:368,width:197,height:245,anchor:.54684,anchorY:1,referenceHeight:234.5},{left:980,top:373,width:164,height:242,anchor:.470024,anchorY:1,referenceHeight:234.5},{left:100,top:662,width:201,height:234,anchor:.474291,anchorY:1,referenceHeight:234.5},{left:381,top:653,width:160,height:245,anchor:.494634,anchorY:1,referenceHeight:234.5},{left:689,top:654,width:160,height:245,anchor:.507165,anchorY:1,referenceHeight:234.5},{left:933,top:662,width:201,height:234,anchor:.521203,anchorY:1,referenceHeight:234.5},{left:93,top:937,width:172,height:246,anchor:.476946,anchorY:1,referenceHeight:234.5},{left:400,top:940,width:155,height:237,anchor:.457964,anchorY:1,referenceHeight:234.5},{left:674,top:938,width:159,height:236,anchor:.519236,anchorY:1,referenceHeight:234.5},{left:972,top:938,width:170,height:245,anchor:.516657,anchorY:1,referenceHeight:234.5}]},hideyoshi:{path:"assets/3d/fixed/units/hideyoshi-directions-v1.webp",width:1232,height:1277,frames:[{left:54,top:18,width:234,height:298,anchor:.447344,anchorY:1,referenceHeight:292.5},{left:362,top:22,width:217,height:289,anchor:.461509,anchorY:1,referenceHeight:292.5},{left:653,top:22,width:212,height:289,anchor:.50033,anchorY:1,referenceHeight:292.5},{left:951,top:18,width:233,height:296,anchor:.563795,anchorY:1,referenceHeight:292.5},{left:45,top:330,width:253,height:297,anchor:.500068,anchorY:1,referenceHeight:292.5},{left:361,top:332,width:235,height:298,anchor:.455746,anchorY:1,referenceHeight:292.5},{left:641,top:332,width:226,height:299,anchor:.50647,anchorY:1,referenceHeight:292.5},{left:939,top:330,width:257,height:299,anchor:.479688,anchorY:1,referenceHeight:292.5},{left:52,top:646,width:248,height:291,anchor:.522355,anchorY:1,referenceHeight:292.5},{left:361,top:647,width:232,height:294,anchor:.467327,anchorY:1,referenceHeight:292.5},{left:647,top:647,width:229,height:294,anchor:.503396,anchorY:1,referenceHeight:292.5},{left:942,top:646,width:252,height:291,anchor:.477873,anchorY:1,referenceHeight:292.5},{left:32,top:946,width:280,height:281,anchor:.489459,anchorY:1,referenceHeight:292.5},{left:336,top:950,width:265,height:271,anchor:.494209,anchorY:1,referenceHeight:292.5},{left:631,top:949,width:275,height:277,anchor:.419283,anchorY:1,referenceHeight:292.5},{left:925,top:946,width:286,height:279,anchor:.492675,anchorY:1,referenceHeight:292.5}]}},ally:{militia:{path:"assets/3d/fixed/units/militia-directions-v1.webp",width:1254,height:1254,frames:[{left:56,top:94,width:254,height:206,anchor:.353708,anchorY:1,referenceHeight:214.5},{left:397,top:89,width:192,height:219,anchor:.376786,anchorY:1,referenceHeight:214.5},{left:661,top:84,width:200,height:223,anchor:.613673,anchorY:1,referenceHeight:214.5},{left:942,top:92,width:253,height:210,anchor:.640953,anchorY:1,referenceHeight:214.5},{left:69,top:397,width:240,height:216,anchor:.397728,anchorY:1,referenceHeight:214.5},{left:412,top:382,width:188,height:232,anchor:.22394,anchorY:1,referenceHeight:214.5},{left:659,top:380,width:182,height:234,anchor:.734545,anchorY:1,referenceHeight:214.5},{left:941,top:392,width:238,height:221,anchor:.609778,anchorY:1,referenceHeight:214.5},{left:82,top:696,width:237,height:211,anchor:.365779,anchorY:1,referenceHeight:214.5},{left:411,top:683,width:196,height:227,anchor:.216273,anchorY:1,referenceHeight:214.5},{left:650,top:684,width:201,height:226,anchor:.728808,anchorY:1,referenceHeight:214.5},{left:934,top:694,width:243,height:212,anchor:.628275,anchorY:1,referenceHeight:214.5},{left:53,top:1004,width:281,height:171,anchor:.323158,anchorY:1,referenceHeight:214.5},{left:381,top:983,width:220,height:210,anchor:.252511,anchorY:1,referenceHeight:214.5},{left:654,top:984,width:216,height:211,anchor:.742499,anchorY:1,referenceHeight:214.5},{left:926,top:1009,width:275,height:173,anchor:.665593,anchorY:1,referenceHeight:214.5}]},guard:{path:"assets/3d/fixed/units/guard-directions-v1.webp",width:1232,height:1277,frames:[{left:103,top:24,width:151,height:303,anchor:.4011,anchorY:1,referenceHeight:295},{left:404,top:32,width:150,height:292,anchor:.492409,anchorY:1,referenceHeight:295},{left:678,top:30,width:152,height:294,anchor:.473181,anchorY:1,referenceHeight:295},{left:1006,top:35,width:127,height:296,anchor:.487313,anchorY:1,referenceHeight:295},{left:96,top:349,width:142,height:272,anchor:.495015,anchorY:1,referenceHeight:295},{left:417,top:356,width:135,height:277,anchor:.46212,anchorY:1,referenceHeight:295},{left:673,top:354,width:145,height:282,anchor:.54715,anchorY:1,referenceHeight:295},{left:1009,top:361,width:128,height:278,anchor:.411361,anchorY:1,referenceHeight:295},{left:92,top:660,width:146,height:272,anchor:.511829,anchorY:1,referenceHeight:295},{left:407,top:655,width:142,height:285,anchor:.419264,anchorY:1,referenceHeight:295},{left:679,top:653,width:151,height:287,anchor:.585605,anchorY:1,referenceHeight:295},{left:1012,top:674,width:127,height:267,anchor:.419655,anchorY:1,referenceHeight:295},{left:51,top:999,width:278,height:212,anchor:.297936,anchorY:1,referenceHeight:295},{left:385,top:1002,width:221,height:216,anchor:.292655,anchorY:1,referenceHeight:295},{left:628,top:1001,width:227,height:218,anchor:.683168,anchorY:1,referenceHeight:295},{left:914,top:1e3,width:265,height:211,anchor:.69172,anchorY:1,referenceHeight:295}]},elite:{path:"assets/3d/fixed/units/elite-directions-v1.webp",width:1230,height:1278,frames:[{left:62,top:43,width:204,height:253,anchor:.46958,anchorY:1,referenceHeight:256.5},{left:384,top:35,width:177,height:260,anchor:.441406,anchorY:1,referenceHeight:256.5},{left:682,top:36,width:174,height:262,anchor:.519205,anchorY:1,referenceHeight:256.5},{left:974,top:51,width:197,height:247,anchor:.509655,anchorY:1,referenceHeight:256.5},{left:63,top:358,width:213,height:258,anchor:.490276,anchorY:1,referenceHeight:256.5},{left:382,top:347,width:178,height:271,anchor:.436327,anchorY:1,referenceHeight:256.5},{left:680,top:351,width:178,height:268,anchor:.551384,anchorY:1,referenceHeight:256.5},{left:965,top:366,width:199,height:251,anchor:.509838,anchorY:1,referenceHeight:256.5},{left:80,top:666,width:193,height:259,anchor:.512304,anchorY:1,referenceHeight:256.5},{left:384,top:667,width:176,height:263,anchor:.41313,anchorY:1,referenceHeight:256.5},{left:677,top:668,width:176,height:265,anchor:.551006,anchorY:1,referenceHeight:256.5},{left:969,top:670,width:189,height:259,anchor:.462179,anchorY:1,referenceHeight:256.5},{left:59,top:991,width:285,height:205,anchor:.338526,anchorY:1,referenceHeight:256.5},{left:380,top:984,width:225,height:225,anchor:.318442,anchorY:1,referenceHeight:256.5},{left:633,top:987,width:233,height:227,anchor:.631124,anchorY:1,referenceHeight:256.5},{left:903,top:989,width:274,height:211,anchor:.63015,anchorY:1,referenceHeight:256.5}]},monk:{path:"assets/3d/fixed/units/monk-directions-v1.webp",width:1230,height:1278,frames:[{left:78,top:62,width:177,height:239,anchor:.486358,anchorY:1,referenceHeight:246},{left:392,top:48,width:171,height:257,anchor:.442644,anchorY:1,referenceHeight:246},{left:668,top:55,width:170,height:250,anchor:.541839,anchorY:1,referenceHeight:246},{left:975,top:61,width:190,height:242,anchor:.422995,anchorY:1,referenceHeight:246},{left:93,top:364,width:169,height:255,anchor:.491248,anchorY:1,referenceHeight:246},{left:393,top:363,width:192,height:259,anchor:.3882,anchorY:1,referenceHeight:246},{left:646,top:362,width:197,height:258,anchor:.605026,anchorY:1,referenceHeight:246},{left:975,top:362,width:186,height:259,anchor:.409871,anchorY:1,referenceHeight:246},{left:77,top:666,width:172,height:258,anchor:.597027,anchorY:1,referenceHeight:246},{left:389,top:665,width:188,height:266,anchor:.328233,anchorY:1,referenceHeight:246},{left:668,top:669,width:180,height:258,anchor:.642929,anchorY:1,referenceHeight:246},{left:981,top:668,width:181,height:257,anchor:.450071,anchorY:1,referenceHeight:246},{left:64,top:1001,width:257,height:196,anchor:.380501,anchorY:1,referenceHeight:246},{left:367,top:980,width:229,height:224,anchor:.421514,anchorY:1,referenceHeight:246},{left:642,top:977,width:212,height:226,anchor:.59724,anchorY:1,referenceHeight:246},{left:909,top:1004,width:259,height:199,anchor:.602665,anchorY:1,referenceHeight:246}]},courier:{path:"assets/3d/fixed/units/courier-directions-v1.webp",width:1254,height:1254,frames:[{left:83,top:48,width:209,height:268,anchor:.474896,anchorY:1,referenceHeight:268.5},{left:381,top:48,width:199,height:267,anchor:.43692,anchorY:1,referenceHeight:268.5},{left:691,top:48,width:191,height:270,anchor:.58182,anchorY:1,referenceHeight:268.5},{left:994,top:47,width:197,height:269,anchor:.515951,anchorY:1,referenceHeight:268.5},{left:71,top:346,width:222,height:257,anchor:.537626,anchorY:1,referenceHeight:268.5},{left:386,top:341,width:195,height:263,anchor:.474838,anchorY:1,referenceHeight:268.5},{left:691,top:343,width:191,height:261,anchor:.527009,anchorY:1,referenceHeight:268.5},{left:988,top:346,width:210,height:257,anchor:.451742,anchorY:1,referenceHeight:268.5},{left:72,top:642,width:224,height:266,anchor:.595651,anchorY:1,referenceHeight:268.5},{left:385,top:640,width:205,height:270,anchor:.385071,anchorY:1,referenceHeight:268.5},{left:684,top:643,width:198,height:268,anchor:.59966,anchorY:1,referenceHeight:268.5},{left:982,top:643,width:222,height:265,anchor:.446826,anchorY:1,referenceHeight:268.5},{left:59,top:947,width:246,height:243,anchor:.574607,anchorY:1,referenceHeight:268.5},{left:372,top:943,width:215,height:251,anchor:.367161,anchorY:1,referenceHeight:268.5},{left:677,top:946,width:223,height:251,anchor:.657932,anchorY:1,referenceHeight:268.5},{left:974,top:954,width:241,height:238,anchor:.389964,anchorY:1,referenceHeight:268.5}]},turtle:{path:"assets/3d/fixed/units/turtle-directions-v1.webp",width:1308,height:1202,frames:[{left:49,top:84,width:246,height:185,anchor:.51472,anchorY:1,referenceHeight:188},{left:381,top:79,width:229,height:191,anchor:.469716,anchorY:1,referenceHeight:188},{left:696,top:79,width:233,height:191,anchor:.530725,anchorY:1,referenceHeight:188},{left:1016,top:85,width:245,height:184,anchor:.475043,anchorY:1,referenceHeight:188},{left:45,top:360,width:260,height:194,anchor:.511607,anchorY:1,referenceHeight:188},{left:377,top:354,width:241,height:185,anchor:.449712,anchorY:1,referenceHeight:188},{left:691,top:354,width:240,height:185,anchor:.547959,anchorY:1,referenceHeight:188},{left:1004,top:360,width:260,height:194,anchor:.484142,anchorY:1,referenceHeight:188},{left:53,top:642,width:252,height:193,anchor:.484675,anchorY:1,referenceHeight:188},{left:361,top:639,width:256,height:190,anchor:.474169,anchorY:1,referenceHeight:188},{left:692,top:639,width:256,height:190,anchor:.521622,anchorY:1,referenceHeight:188},{left:1004,top:641,width:252,height:194,anchor:.513618,anchorY:1,referenceHeight:188},{left:53,top:904,width:264,height:202,anchor:.446221,anchorY:1,referenceHeight:188},{left:367,top:907,width:250,height:201,anchor:.473557,anchorY:1,referenceHeight:188},{left:693,top:906,width:249,height:202,anchor:.520426,anchorY:1,referenceHeight:188},{left:993,top:904,width:263,height:202,anchor:.548828,anchorY:1,referenceHeight:188}]}}};var Ws={ashigaru:{kind:"ashigaru",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ashigaru-inbetweens-v1.webp",width:1160,height:1074,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:232,height:228,anchor:.339805,anchorY:1,referenceHeight:222.5},{left:339,top:24,width:210,height:220,anchor:.323443,anchorY:1,referenceHeight:222.5},{left:607,top:24,width:211,height:222,anchor:.656074,anchorY:1,referenceHeight:222.5},{left:868,top:24,width:220,height:223,anchor:.639307,anchorY:1,referenceHeight:222.5},{left:24,top:300,width:213,height:224,anchor:.412242,anchorY:1,referenceHeight:222.5},{left:339,top:300,width:197,height:219,anchor:.420587,anchorY:1,referenceHeight:222.5},{left:607,top:300,width:192,height:221,anchor:.570704,anchorY:1,referenceHeight:222.5},{left:868,top:300,width:209,height:224,anchor:.575709,anchorY:1,referenceHeight:222.5},{left:24,top:572,width:267,height:213,anchor:.309281,anchorY:1,referenceHeight:222.5},{left:339,top:572,width:220,height:220,anchor:.305392,anchorY:1,referenceHeight:222.5},{left:607,top:572,width:213,height:220,anchor:.669095,anchorY:1,referenceHeight:222.5},{left:868,top:572,width:268,height:216,anchor:.704457,anchorY:1,referenceHeight:222.5},{left:24,top:840,width:206,height:209,anchor:.384082,anchorY:1,referenceHeight:222.5},{left:339,top:840,width:192,height:208,anchor:.409617,anchorY:1,referenceHeight:222.5},{left:607,top:840,width:189,height:210,anchor:.580776,anchorY:1,referenceHeight:222.5},{left:868,top:840,width:205,height:209,anchor:.596386,anchorY:1,referenceHeight:222.5}]},teppo:{kind:"teppo",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/teppo-inbetweens-v1.webp",width:945,height:1105,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:197,height:233,anchor:.355098,anchorY:1,referenceHeight:231},{left:269,top:24,width:179,height:231,anchor:.363434,anchorY:1,referenceHeight:231},{left:499,top:24,width:188,height:231,anchor:.611569,anchorY:1,referenceHeight:231},{left:735,top:24,width:186,height:228,anchor:.375372,anchorY:1,referenceHeight:231},{left:24,top:305,width:195,height:231,anchor:.375981,anchorY:1,referenceHeight:231},{left:269,top:305,width:179,height:229,anchor:.403723,anchorY:1,referenceHeight:231},{left:499,top:305,width:178,height:231,anchor:.581763,anchorY:1,referenceHeight:231},{left:735,top:305,width:183,height:231,anchor:.384518,anchorY:1,referenceHeight:231},{left:24,top:584,width:197,height:225,anchor:.449644,anchorY:1,referenceHeight:231},{left:269,top:584,width:181,height:224,anchor:.505887,anchorY:1,referenceHeight:231},{left:499,top:584,width:174,height:226,anchor:.530421,anchorY:1,referenceHeight:231},{left:735,top:584,width:182,height:232,anchor:.527723,anchorY:1,referenceHeight:231},{left:24,top:864,width:192,height:217,anchor:.392547,anchorY:1,referenceHeight:231},{left:269,top:864,width:182,height:216,anchor:.423513,anchorY:1,referenceHeight:231},{left:499,top:864,width:182,height:217,anchor:.556723,anchorY:1,referenceHeight:231},{left:735,top:864,width:179,height:217,anchor:.460863,anchorY:1,referenceHeight:231}]},scout:{kind:"scout",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/scout-inbetweens-v1.webp",width:1089,height:1113,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:153,height:240,anchor:.460468,anchorY:1,referenceHeight:241.5},{left:309,top:24,width:193,height:246,anchor:.349347,anchorY:1,referenceHeight:241.5},{left:579,top:24,width:151,height:240,anchor:.554486,anchorY:1,referenceHeight:241.5},{left:828,top:24,width:138,height:243,anchor:.480386,anchorY:1,referenceHeight:241.5},{left:24,top:318,width:150,height:243,anchor:.431975,anchorY:1,referenceHeight:241.5},{left:309,top:318,width:186,height:240,anchor:.344191,anchorY:1,referenceHeight:241.5},{left:579,top:318,width:143,height:239,anchor:.574192,anchorY:1,referenceHeight:241.5},{left:828,top:318,width:167,height:242,anchor:.488729,anchorY:1,referenceHeight:241.5},{left:24,top:609,width:237,height:201,anchor:.455766,anchorY:1,referenceHeight:241.5},{left:309,top:609,width:222,height:208,anchor:.274201,anchorY:1,referenceHeight:241.5},{left:579,top:609,width:201,height:212,anchor:.701671,anchorY:1,referenceHeight:241.5},{left:828,top:609,width:237,height:205,anchor:.540578,anchorY:1,referenceHeight:241.5},{left:24,top:869,width:167,height:213,anchor:.496178,anchorY:1,referenceHeight:241.5},{left:309,top:869,width:201,height:220,anchor:.450477,anchorY:1,referenceHeight:241.5},{left:579,top:869,width:155,height:219,anchor:.456013,anchorY:1,referenceHeight:241.5},{left:828,top:869,width:154,height:215,anchor:.489767,anchorY:1,referenceHeight:241.5}]},samurai:{kind:"samurai",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/samurai-inbetweens-v1.webp",width:1087,height:1188,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:145,height:248,anchor:.59854,anchorY:1,referenceHeight:248.5},{left:309,top:24,width:142,height:249,anchor:.562279,anchorY:1,referenceHeight:248.5},{left:569,top:24,width:145,height:250,anchor:.414221,anchorY:1,referenceHeight:248.5},{left:830,top:24,width:142,height:245,anchor:.423604,anchorY:1,referenceHeight:248.5},{left:24,top:322,width:162,height:248,anchor:.553923,anchorY:1,referenceHeight:248.5},{left:309,top:322,width:159,height:249,anchor:.531134,anchorY:1,referenceHeight:248.5},{left:569,top:322,width:161,height:248,anchor:.451081,anchorY:1,referenceHeight:248.5},{left:830,top:322,width:157,height:246,anchor:.408805,anchorY:1,referenceHeight:248.5},{left:24,top:619,width:237,height:240,anchor:.428926,anchorY:1,referenceHeight:248.5},{left:309,top:619,width:212,height:245,anchor:.464235,anchorY:1,referenceHeight:248.5},{left:569,top:619,width:213,height:247,anchor:.526812,anchorY:1,referenceHeight:248.5},{left:830,top:619,width:233,height:239,anchor:.565252,anchorY:1,referenceHeight:248.5},{left:24,top:914,width:147,height:250,anchor:.544805,anchorY:1,referenceHeight:248.5},{left:309,top:914,width:139,height:248,anchor:.592941,anchorY:1,referenceHeight:248.5},{left:569,top:914,width:135,height:249,anchor:.419772,anchorY:1,referenceHeight:248.5},{left:830,top:914,width:142,height:247,anchor:.467155,anchorY:1,referenceHeight:248.5}]},ninja:{kind:"ninja",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ninja-inbetweens-v1.webp",width:1096,height:1083,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:148,height:212,anchor:.499708,anchorY:1,referenceHeight:224.5},{left:326,top:24,width:180,height:230,anchor:.432636,anchorY:1,referenceHeight:224.5},{left:575,top:24,width:168,height:233,anchor:.588898,anchorY:1,referenceHeight:224.5},{left:843,top:24,width:149,height:219,anchor:.414084,anchorY:1,referenceHeight:224.5},{left:24,top:305,width:179,height:223,anchor:.355198,anchorY:1,referenceHeight:224.5},{left:326,top:305,width:175,height:228,anchor:.370216,anchorY:1,referenceHeight:224.5},{left:575,top:305,width:185,height:226,anchor:.578479,anchorY:1,referenceHeight:224.5},{left:843,top:305,width:171,height:225,anchor:.532289,anchorY:1,referenceHeight:224.5},{left:24,top:581,width:254,height:193,anchor:.447117,anchorY:1,referenceHeight:224.5},{left:326,top:581,width:201,height:210,anchor:.26785,anchorY:1,referenceHeight:224.5},{left:575,top:581,width:220,height:213,anchor:.747169,anchorY:1,referenceHeight:224.5},{left:843,top:581,width:229,height:193,anchor:.565644,anchorY:1,referenceHeight:224.5},{left:24,top:842,width:155,height:196,anchor:.549068,anchorY:1,referenceHeight:224.5},{left:326,top:842,width:175,height:214,anchor:.380824,anchorY:1,referenceHeight:224.5},{left:575,top:842,width:184,height:217,anchor:.609561,anchorY:1,referenceHeight:224.5},{left:843,top:842,width:152,height:202,anchor:.388955,anchorY:1,referenceHeight:224.5}]},onmyoji:{kind:"onmyoji",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/onmyoji-inbetweens-v1.webp",width:1059,height:1220,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:194,height:257,anchor:.470333,anchorY:1,referenceHeight:258.5},{left:296,top:24,width:181,height:258,anchor:.486567,anchorY:1,referenceHeight:258.5},{left:561,top:24,width:189,height:260,anchor:.505547,anchorY:1,referenceHeight:258.5},{left:833,top:24,width:187,height:259,anchor:.449923,anchorY:1,referenceHeight:258.5},{left:24,top:332,width:198,height:263,anchor:.481239,anchorY:1,referenceHeight:258.5},{left:296,top:332,width:198,height:259,anchor:.459171,anchorY:1,referenceHeight:258.5},{left:561,top:332,width:195,height:261,anchor:.500504,anchorY:1,referenceHeight:258.5},{left:833,top:332,width:195,height:259,anchor:.497906,anchorY:1,referenceHeight:258.5},{left:24,top:643,width:224,height:254,anchor:.447301,anchorY:1,referenceHeight:258.5},{left:296,top:643,width:217,height:252,anchor:.438132,anchorY:1,referenceHeight:258.5},{left:561,top:643,width:224,height:257,anchor:.52172,anchorY:1,referenceHeight:258.5},{left:833,top:643,width:202,height:255,anchor:.456473,anchorY:1,referenceHeight:258.5},{left:24,top:948,width:180,height:240,anchor:.491974,anchorY:1,referenceHeight:258.5},{left:296,top:948,width:191,height:245,anchor:.516014,anchorY:1,referenceHeight:258.5},{left:561,top:948,width:194,height:246,anchor:.461665,anchorY:1,referenceHeight:258.5},{left:833,top:948,width:182,height:248,anchor:.461191,anchorY:1,referenceHeight:258.5}]},cavalry:{kind:"cavalry",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/cavalry-inbetweens-v1.webp",width:1547,height:1214,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:267,height:258,anchor:.475333,anchorY:1,referenceHeight:258},{left:410,top:24,width:250,height:258,anchor:.31995,anchorY:1,referenceHeight:258},{left:807,top:24,width:245,height:258,anchor:.664284,anchorY:1,referenceHeight:258},{left:1192,top:24,width:263,height:258,anchor:.521353,anchorY:1,referenceHeight:258},{left:24,top:330,width:261,height:258,anchor:.455279,anchorY:1,referenceHeight:258},{left:410,top:330,width:253,height:256,anchor:.326796,anchorY:1,referenceHeight:258},{left:807,top:330,width:243,height:259,anchor:.647213,anchorY:1,referenceHeight:258},{left:1192,top:330,width:259,height:258,anchor:.483215,anchorY:1,referenceHeight:258},{left:24,top:637,width:338,height:234,anchor:.399459,anchorY:1,referenceHeight:258},{left:410,top:637,width:349,height:236,anchor:.280089,anchorY:1,referenceHeight:258},{left:807,top:637,width:337,height:239,anchor:.711423,anchorY:1,referenceHeight:258},{left:1192,top:637,width:331,height:243,anchor:.570123,anchorY:1,referenceHeight:258},{left:24,top:928,width:270,height:248,anchor:.510705,anchorY:1,referenceHeight:258},{left:410,top:928,width:245,height:262,anchor:.339514,anchorY:1,referenceHeight:258},{left:807,top:928,width:239,height:255,anchor:.636884,anchorY:1,referenceHeight:258},{left:1192,top:928,width:267,height:247,anchor:.49687,anchorY:1,referenceHeight:258}]},drum:{kind:"drum",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/drum-inbetweens-v1.webp",width:826,height:1179,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:153,height:237,anchor:.43664,anchorY:1,referenceHeight:237.5},{left:229,top:24,width:141,height:237,anchor:.421128,anchorY:1,referenceHeight:237.5},{left:436,top:24,width:143,height:237,anchor:.567673,anchorY:1,referenceHeight:237.5},{left:644,top:24,width:154,height:240,anchor:.519039,anchorY:1,referenceHeight:237.5},{left:24,top:312,width:157,height:239,anchor:.441496,anchorY:1,referenceHeight:237.5},{left:229,top:312,width:143,height:240,anchor:.458463,anchorY:1,referenceHeight:237.5},{left:436,top:312,width:144,height:237,anchor:.522314,anchorY:1,referenceHeight:237.5},{left:644,top:312,width:153,height:241,anchor:.551437,anchorY:1,referenceHeight:237.5},{left:24,top:601,width:157,height:262,anchor:.475749,anchorY:1,referenceHeight:237.5},{left:229,top:601,width:159,height:234,anchor:.401079,anchorY:1,referenceHeight:237.5},{left:436,top:601,width:160,height:234,anchor:.614123,anchorY:1,referenceHeight:237.5},{left:644,top:601,width:155,height:268,anchor:.421734,anchorY:1,referenceHeight:237.5},{left:24,top:917,width:157,height:232,anchor:.458043,anchorY:1,referenceHeight:237.5},{left:229,top:917,width:142,height:231,anchor:.442753,anchorY:1,referenceHeight:237.5},{left:436,top:917,width:142,height:230,anchor:.558652,anchorY:1,referenceHeight:237.5},{left:644,top:917,width:158,height:238,anchor:.543536,anchorY:1,referenceHeight:237.5}]},armored:{kind:"armored",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/armored-inbetweens-v1.webp",width:1055,height:1087,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:187,height:229,anchor:.458557,anchorY:1,referenceHeight:227},{left:287,top:24,width:215,height:231,anchor:.421895,anchorY:1,referenceHeight:227},{left:568,top:24,width:199,height:222,anchor:.560457,anchorY:1,referenceHeight:227},{left:821,top:24,width:189,height:225,anchor:.476709,anchorY:1,referenceHeight:227},{left:24,top:303,width:197,height:227,anchor:.520997,anchorY:1,referenceHeight:227},{left:287,top:303,width:223,height:227,anchor:.410278,anchorY:1,referenceHeight:227},{left:568,top:303,width:205,height:214,anchor:.62253,anchorY:1,referenceHeight:227},{left:821,top:303,width:191,height:227,anchor:.480433,anchorY:1,referenceHeight:227},{left:24,top:578,width:215,height:209,anchor:.540495,anchorY:1,referenceHeight:227},{left:287,top:578,width:233,height:214,anchor:.347209,anchorY:1,referenceHeight:227},{left:568,top:578,width:198,height:220,anchor:.624903,anchorY:1,referenceHeight:227},{left:821,top:578,width:210,height:215,anchor:.331061,anchorY:1,referenceHeight:227},{left:24,top:846,width:187,height:208,anchor:.46022,anchorY:1,referenceHeight:227},{left:287,top:846,width:202,height:215,anchor:.421184,anchorY:1,referenceHeight:227},{left:568,top:846,width:193,height:216,anchor:.547712,anchorY:1,referenceHeight:227},{left:821,top:846,width:195,height:217,anchor:.471431,anchorY:1,referenceHeight:227}]},ram:{kind:"ram",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ram-inbetweens-v1.webp",width:1231,height:1008,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:256,height:199,anchor:.524253,anchorY:1,referenceHeight:199.5},{left:352,top:24,width:223,height:200,anchor:.440407,anchorY:1,referenceHeight:199.5},{left:639,top:24,width:224,height:199,anchor:.556577,anchorY:1,referenceHeight:199.5},{left:927,top:24,width:256,height:200,anchor:.471158,anchorY:1,referenceHeight:199.5},{left:24,top:272,width:256,height:203,anchor:.530247,anchorY:1,referenceHeight:199.5},{left:352,top:272,width:230,height:200,anchor:.426517,anchorY:1,referenceHeight:199.5},{left:639,top:272,width:231,height:199,anchor:.568348,anchorY:1,referenceHeight:199.5},{left:927,top:272,width:256,height:204,anchor:.466696,anchorY:1,referenceHeight:199.5},{left:24,top:524,width:280,height:210,anchor:.543875,anchorY:1,referenceHeight:199.5},{left:352,top:524,width:239,height:203,anchor:.401869,anchorY:1,referenceHeight:199.5},{left:639,top:524,width:240,height:202,anchor:.590623,anchorY:1,referenceHeight:199.5},{left:927,top:524,width:280,height:211,anchor:.456102,anchorY:1,referenceHeight:199.5},{left:24,top:783,width:267,height:200,anchor:.490271,anchorY:1,referenceHeight:199.5},{left:352,top:783,width:237,height:201,anchor:.395524,anchorY:1,referenceHeight:199.5},{left:639,top:783,width:237,height:201,anchor:.603763,anchorY:1,referenceHeight:199.5},{left:927,top:783,width:267,height:201,anchor:.504239,anchorY:1,referenceHeight:199.5}]},konishi:{kind:"konishi",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/konishi-inbetweens-v1.webp",width:1207,height:1365,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:198,height:296,anchor:.448078,anchorY:1,referenceHeight:296.5},{left:330,top:24,width:193,height:296,anchor:.465096,anchorY:1,referenceHeight:296.5},{left:631,top:24,width:190,height:299,anchor:.538841,anchorY:1,referenceHeight:296.5},{left:934,top:24,width:209,height:296,anchor:.477358,anchorY:1,referenceHeight:296.5},{left:24,top:371,width:196,height:303,anchor:.490711,anchorY:1,referenceHeight:296.5},{left:330,top:371,width:198,height:300,anchor:.478658,anchorY:1,referenceHeight:296.5},{left:631,top:371,width:195,height:292,anchor:.48316,anchorY:1,referenceHeight:296.5},{left:934,top:371,width:195,height:293,anchor:.506666,anchorY:1,referenceHeight:296.5},{left:24,top:722,width:258,height:268,anchor:.485073,anchorY:1,referenceHeight:296.5},{left:330,top:722,width:253,height:275,anchor:.345901,anchorY:1,referenceHeight:296.5},{left:631,top:722,width:255,height:273,anchor:.638405,anchorY:1,referenceHeight:296.5},{left:934,top:722,width:249,height:271,anchor:.502507,anchorY:1,referenceHeight:296.5},{left:24,top:1045,width:201,height:295,anchor:.367123,anchorY:1,referenceHeight:296.5},{left:330,top:1045,width:205,height:296,anchor:.442358,anchorY:1,referenceHeight:296.5},{left:631,top:1045,width:190,height:295,anchor:.528841,anchorY:1,referenceHeight:296.5},{left:934,top:1045,width:208,height:294,anchor:.561052,anchorY:1,referenceHeight:296.5}]},kato:{kind:"kato",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kato-inbetweens-v1.webp",width:1211,height:1352,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:140,height:304,anchor:.462691,anchorY:1,referenceHeight:301},{left:353,top:24,width:138,height:295,anchor:.432391,anchorY:1,referenceHeight:301},{left:624,top:24,width:136,height:299,anchor:.545595,anchorY:1,referenceHeight:301},{left:895,top:24,width:143,height:303,anchor:.492061,anchorY:1,referenceHeight:301},{left:24,top:376,width:141,height:284,anchor:.513398,anchorY:1,referenceHeight:301},{left:353,top:376,width:151,height:305,anchor:.487762,anchorY:1,referenceHeight:301},{left:624,top:376,width:153,height:298,anchor:.511399,anchorY:1,referenceHeight:301},{left:895,top:376,width:143,height:288,anchor:.458833,anchorY:1,referenceHeight:301},{left:24,top:729,width:281,height:259,anchor:.38565,anchorY:1,referenceHeight:301},{left:353,top:729,width:223,height:250,anchor:.34336,anchorY:1,referenceHeight:301},{left:624,top:729,width:223,height:250,anchor:.647411,anchorY:1,referenceHeight:301},{left:895,top:729,width:292,height:253,anchor:.619573,anchorY:1,referenceHeight:301},{left:24,top:1036,width:146,height:286,anchor:.464807,anchorY:1,referenceHeight:301},{left:353,top:1036,width:143,height:290,anchor:.468215,anchorY:1,referenceHeight:301},{left:624,top:1036,width:140,height:292,anchor:.512911,anchorY:1,referenceHeight:301},{left:895,top:1036,width:140,height:286,anchor:.526821,anchorY:1,referenceHeight:301}]},wakizaka:{kind:"wakizaka",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/wakizaka-inbetweens-v1.webp",width:1261,height:1371,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:189,height:301,anchor:.441326,anchorY:1,referenceHeight:305.5},{left:323,top:24,width:189,height:304,anchor:.53811,anchorY:1,referenceHeight:305.5},{left:625,top:24,width:226,height:307,anchor:.449886,anchorY:1,referenceHeight:305.5},{left:976,top:24,width:253,height:309,anchor:.554308,anchorY:1,referenceHeight:305.5},{left:24,top:381,width:188,height:306,anchor:.490682,anchorY:1,referenceHeight:305.5},{left:323,top:381,width:223,height:305,anchor:.454027,anchorY:1,referenceHeight:305.5},{left:625,top:381,width:227,height:305,anchor:.358945,anchorY:1,referenceHeight:305.5},{left:976,top:381,width:238,height:302,anchor:.563343,anchorY:1,referenceHeight:305.5},{left:24,top:735,width:251,height:266,anchor:.449958,anchorY:1,referenceHeight:305.5},{left:323,top:735,width:254,height:275,anchor:.459046,anchorY:1,referenceHeight:305.5},{left:625,top:735,width:303,height:259,anchor:.624889,anchorY:1,referenceHeight:305.5},{left:976,top:735,width:261,height:275,anchor:.527856,anchorY:1,referenceHeight:305.5},{left:24,top:1058,width:187,height:283,anchor:.455205,anchorY:1,referenceHeight:305.5},{left:323,top:1058,width:182,height:284,anchor:.503374,anchorY:1,referenceHeight:305.5},{left:625,top:1058,width:182,height:289,anchor:.581844,anchorY:1,referenceHeight:305.5},{left:976,top:1058,width:230,height:281,anchor:.520647,anchorY:1,referenceHeight:305.5}]},ukita:{kind:"ukita",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ukita-inbetweens-v1.webp",width:1510,height:1348,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:212,height:295,anchor:.47091,anchorY:1,referenceHeight:294.5},{left:350,top:24,width:191,height:292,anchor:.502677,anchorY:1,referenceHeight:294.5},{left:799,top:24,width:180,height:296,anchor:.539793,anchorY:1,referenceHeight:294.5},{left:1225,top:24,width:205,height:295,anchor:.54469,anchorY:1,referenceHeight:294.5},{left:24,top:368,width:197,height:294,anchor:.550089,anchorY:1,referenceHeight:294.5},{left:350,top:368,width:199,height:294,anchor:.47858,anchorY:1,referenceHeight:294.5},{left:799,top:368,width:180,height:295,anchor:.600632,anchorY:1,referenceHeight:294.5},{left:1225,top:368,width:214,height:295,anchor:.4636,anchorY:1,referenceHeight:294.5},{left:24,top:711,width:278,height:271,anchor:.394762,anchorY:1,referenceHeight:294.5},{left:350,top:711,width:401,height:270,anchor:.477442,anchorY:1,referenceHeight:294.5},{left:799,top:711,width:378,height:268,anchor:.560629,anchorY:1,referenceHeight:294.5},{left:1225,top:711,width:261,height:273,anchor:.567065,anchorY:1,referenceHeight:294.5},{left:24,top:1032,width:202,height:292,anchor:.482053,anchorY:1,referenceHeight:294.5},{left:350,top:1032,width:191,height:287,anchor:.485363,anchorY:1,referenceHeight:294.5},{left:799,top:1032,width:180,height:282,anchor:.527629,anchorY:1,referenceHeight:294.5},{left:1225,top:1032,width:206,height:292,anchor:.519671,anchorY:1,referenceHeight:294.5}]},ishida:{kind:"ishida",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/ishida-inbetweens-v1.webp",width:1210,height:1336,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:182,height:283,anchor:.593798,anchorY:1,referenceHeight:286.5},{left:339,top:24,width:210,height:288,anchor:.441236,anchorY:1,referenceHeight:286.5},{left:634,top:24,width:198,height:288,anchor:.523338,anchorY:1,referenceHeight:286.5},{left:916,top:24,width:201,height:285,anchor:.473062,anchorY:1,referenceHeight:286.5},{left:24,top:360,width:206,height:291,anchor:.600292,anchorY:1,referenceHeight:286.5},{left:339,top:360,width:217,height:293,anchor:.498158,anchorY:1,referenceHeight:286.5},{left:634,top:360,width:211,height:280,anchor:.531301,anchorY:1,referenceHeight:286.5},{left:916,top:360,width:213,height:282,anchor:.457338,anchorY:1,referenceHeight:286.5},{left:24,top:701,width:267,height:276,anchor:.461161,anchorY:1,referenceHeight:286.5},{left:339,top:701,width:247,height:279,anchor:.384129,anchorY:1,referenceHeight:286.5},{left:634,top:701,width:234,height:279,anchor:.588278,anchorY:1,referenceHeight:286.5},{left:916,top:701,width:270,height:275,anchor:.531232,anchorY:1,referenceHeight:286.5},{left:24,top:1028,width:192,height:274,anchor:.571592,anchorY:1,referenceHeight:286.5},{left:339,top:1028,width:210,height:283,anchor:.448167,anchorY:1,referenceHeight:286.5},{left:634,top:1028,width:215,height:284,anchor:.550918,anchorY:1,referenceHeight:286.5},{left:916,top:1028,width:203,height:272,anchor:.466463,anchorY:1,referenceHeight:286.5}]},so:{kind:"so",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/so-inbetweens-v1.webp",width:1150,height:1282,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:184,height:277,anchor:.602019,anchorY:1,referenceHeight:277},{left:343,top:24,width:173,height:277,anchor:.505629,anchorY:1,referenceHeight:277},{left:625,top:24,width:154,height:278,anchor:.496515,anchorY:1,referenceHeight:277},{left:887,top:24,width:184,height:277,anchor:.400204,anchorY:1,referenceHeight:277},{left:24,top:350,width:189,height:277,anchor:.658438,anchorY:1,referenceHeight:277},{left:343,top:350,width:165,height:268,anchor:.457724,anchorY:1,referenceHeight:277},{left:625,top:350,width:153,height:268,anchor:.454558,anchorY:1,referenceHeight:277},{left:887,top:350,width:180,height:277,anchor:.378511,anchorY:1,referenceHeight:277},{left:24,top:675,width:271,height:259,anchor:.299216,anchorY:1,referenceHeight:277},{left:343,top:675,width:234,height:267,anchor:.329521,anchorY:1,referenceHeight:277},{left:625,top:675,width:214,height:262,anchor:.700579,anchorY:1,referenceHeight:277},{left:887,top:675,width:239,height:259,anchor:.563837,anchorY:1,referenceHeight:277},{left:24,top:990,width:211,height:268,anchor:.399958,anchorY:1,referenceHeight:277},{left:343,top:990,width:158,height:265,anchor:.535071,anchorY:1,referenceHeight:277},{left:625,top:990,width:146,height:265,anchor:.581726,anchorY:1,referenceHeight:277},{left:887,top:990,width:218,height:264,anchor:.532222,anchorY:1,referenceHeight:277}]},kuroda:{kind:"kuroda",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kuroda-inbetweens-v1.webp",width:1143,height:1360,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:181,height:307,anchor:.47224,anchorY:1,referenceHeight:307},{left:340,top:24,width:154,height:307,anchor:.547031,anchorY:1,referenceHeight:307},{left:608,top:24,width:160,height:307,anchor:.451344,anchorY:1,referenceHeight:307},{left:862,top:24,width:176,height:298,anchor:.488675,anchorY:1,referenceHeight:307},{left:24,top:379,width:171,height:311,anchor:.488891,anchorY:1,referenceHeight:307},{left:340,top:379,width:150,height:307,anchor:.4673,anchorY:1,referenceHeight:307},{left:608,top:379,width:153,height:307,anchor:.52759,anchorY:1,referenceHeight:307},{left:862,top:379,width:162,height:306,anchor:.475542,anchorY:1,referenceHeight:307},{left:24,top:738,width:268,height:262,anchor:.374915,anchorY:1,referenceHeight:307},{left:340,top:738,width:220,height:266,anchor:.406986,anchorY:1,referenceHeight:307},{left:608,top:738,width:206,height:262,anchor:.571764,anchorY:1,referenceHeight:307},{left:862,top:738,width:257,height:262,anchor:.591162,anchorY:1,referenceHeight:307},{left:24,top:1052,width:170,height:282,anchor:.466661,anchorY:1,referenceHeight:307},{left:340,top:1052,width:149,height:284,anchor:.533207,anchorY:1,referenceHeight:307},{left:608,top:1052,width:161,height:284,anchor:.464428,anchorY:1,referenceHeight:307},{left:862,top:1052,width:172,height:276,anchor:.517363,anchorY:1,referenceHeight:307}]},todo:{kind:"todo",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/todo-inbetweens-v1.webp",width:1141,height:1360,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:198,height:304,anchor:.433315,anchorY:1,referenceHeight:303.5},{left:307,top:24,width:205,height:303,anchor:.403825,anchorY:1,referenceHeight:303.5},{left:597,top:24,width:181,height:304,anchor:.577495,anchorY:1,referenceHeight:303.5},{left:892,top:24,width:212,height:302,anchor:.476994,anchorY:1,referenceHeight:303.5},{left:24,top:376,width:204,height:306,anchor:.439721,anchorY:1,referenceHeight:303.5},{left:307,top:376,width:223,height:304,anchor:.467033,anchorY:1,referenceHeight:303.5},{left:597,top:376,width:188,height:302,anchor:.500549,anchorY:1,referenceHeight:303.5},{left:892,top:376,width:192,height:303,anchor:.459792,anchorY:1,referenceHeight:303.5},{left:24,top:730,width:235,height:271,anchor:.430339,anchorY:1,referenceHeight:303.5},{left:307,top:730,width:242,height:272,anchor:.331751,anchorY:1,referenceHeight:303.5},{left:597,top:730,width:247,height:272,anchor:.641536,anchorY:1,referenceHeight:303.5},{left:892,top:730,width:225,height:262,anchor:.510689,anchorY:1,referenceHeight:303.5},{left:24,top:1050,width:197,height:285,anchor:.433585,anchorY:1,referenceHeight:303.5},{left:307,top:1050,width:207,height:279,anchor:.430661,anchorY:1,referenceHeight:303.5},{left:597,top:1050,width:181,height:286,anchor:.532002,anchorY:1,referenceHeight:303.5},{left:892,top:1050,width:209,height:286,anchor:.493467,anchorY:1,referenceHeight:303.5}]},kuki:{kind:"kuki",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kuki-inbetweens-v1.webp",width:1212,height:1311,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:244,height:278,anchor:.518406,anchorY:1,referenceHeight:281},{left:321,top:24,width:224,height:286,anchor:.510893,anchorY:1,referenceHeight:281},{left:629,top:24,width:218,height:281,anchor:.471791,anchorY:1,referenceHeight:281},{left:937,top:24,width:241,height:281,anchor:.459172,anchorY:1,referenceHeight:281},{left:24,top:358,width:240,height:275,anchor:.514647,anchorY:1,referenceHeight:281},{left:321,top:358,width:213,height:279,anchor:.458254,anchorY:1,referenceHeight:281},{left:629,top:358,width:212,height:282,anchor:.531883,anchorY:1,referenceHeight:281},{left:937,top:358,width:240,height:274,anchor:.493043,anchorY:1,referenceHeight:281},{left:24,top:688,width:243,height:264,anchor:.551514,anchorY:1,referenceHeight:281},{left:321,top:688,width:260,height:267,anchor:.33186,anchorY:1,referenceHeight:281},{left:629,top:688,width:260,height:264,anchor:.63537,anchorY:1,referenceHeight:281},{left:937,top:688,width:193,height:258,anchor:.383347,anchorY:1,referenceHeight:281},{left:24,top:1003,width:249,height:278,anchor:.523272,anchorY:1,referenceHeight:281},{left:321,top:1003,width:227,height:281,anchor:.481513,anchorY:1,referenceHeight:281},{left:629,top:1003,width:223,height:283,anchor:.532228,anchorY:1,referenceHeight:281},{left:937,top:1003,width:251,height:284,anchor:.493324,anchorY:1,referenceHeight:281}]},kurushima:{kind:"kurushima",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/kurushima-inbetweens-v1.webp",width:1078,height:1166,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:162,height:243,anchor:.568567,anchorY:1,referenceHeight:243},{left:295,top:24,width:164,height:243,anchor:.480263,anchorY:1,referenceHeight:243},{left:564,top:24,width:163,height:243,anchor:.511228,anchorY:1,referenceHeight:243},{left:831,top:24,width:161,height:246,anchor:.409986,anchorY:1,referenceHeight:243},{left:24,top:318,width:164,height:240,anchor:.504607,anchorY:1,referenceHeight:243},{left:295,top:318,width:152,height:244,anchor:.508776,anchorY:1,referenceHeight:243},{left:564,top:318,width:154,height:243,anchor:.467847,anchorY:1,referenceHeight:243},{left:831,top:318,width:163,height:237,anchor:.467306,anchorY:1,referenceHeight:243},{left:24,top:610,width:223,height:230,anchor:.46851,anchorY:1,referenceHeight:243},{left:295,top:610,width:221,height:238,anchor:.418727,anchorY:1,referenceHeight:243},{left:564,top:610,width:219,height:236,anchor:.569554,anchorY:1,referenceHeight:243},{left:831,top:610,width:223,height:233,anchor:.520364,anchorY:1,referenceHeight:243},{left:24,top:896,width:159,height:244,anchor:.495822,anchorY:1,referenceHeight:243},{left:295,top:896,width:161,height:244,anchor:.486258,anchorY:1,referenceHeight:243},{left:564,top:896,width:161,height:246,anchor:.501008,anchorY:1,referenceHeight:243},{left:831,top:896,width:158,height:244,anchor:.501999,anchorY:1,referenceHeight:243}]},shimazu:{kind:"shimazu",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/shimazu-inbetweens-v1.webp",width:1116,height:1111,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:192,height:234,anchor:.481422,anchorY:1,referenceHeight:234.5},{left:310,top:24,width:194,height:235,anchor:.468354,anchorY:1,referenceHeight:234.5},{left:593,top:24,width:194,height:236,anchor:.528842,anchorY:1,referenceHeight:234.5},{left:874,top:24,width:192,height:233,anchor:.515655,anchorY:1,referenceHeight:234.5},{left:24,top:308,width:204,height:234,anchor:.516457,anchorY:1,referenceHeight:234.5},{left:310,top:308,width:152,height:234,anchor:.469797,anchorY:1,referenceHeight:234.5},{left:593,top:308,width:186,height:234,anchor:.525033,anchorY:1,referenceHeight:234.5},{left:874,top:308,width:165,height:234,anchor:.428687,anchorY:1,referenceHeight:234.5},{left:24,top:590,width:238,height:203,anchor:.408486,anchorY:1,referenceHeight:234.5},{left:310,top:590,width:235,height:224,anchor:.348713,anchorY:1,referenceHeight:234.5},{left:593,top:590,width:233,height:224,anchor:.627298,anchorY:1,referenceHeight:234.5},{left:874,top:590,width:218,height:212,anchor:.564304,anchorY:1,referenceHeight:234.5},{left:24,top:862,width:195,height:224,anchor:.440802,anchorY:1,referenceHeight:234.5},{left:310,top:862,width:191,height:225,anchor:.483453,anchorY:1,referenceHeight:234.5},{left:593,top:862,width:190,height:224,anchor:.5185,anchorY:1,referenceHeight:234.5},{left:874,top:862,width:194,height:223,anchor:.556539,anchorY:1,referenceHeight:234.5}]},hideyoshi:{kind:"hideyoshi",side:"enemy",path:"assets/3d/fixed/combat-inbetweens/hideyoshi-inbetweens-v1.webp",width:1386,height:1388,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:242,height:295,anchor:.513539,anchorY:1,referenceHeight:292.5},{left:333,top:24,width:222,height:290,anchor:.458241,anchorY:1,referenceHeight:292.5},{left:723,top:24,width:223,height:289,anchor:.504986,anchorY:1,referenceHeight:292.5},{left:1100,top:24,width:253,height:293,anchor:.487736,anchorY:1,referenceHeight:292.5},{left:24,top:367,width:245,height:297,anchor:.530961,anchorY:1,referenceHeight:292.5},{left:333,top:367,width:220,height:294,anchor:.509905,anchorY:1,referenceHeight:292.5},{left:723,top:367,width:231,height:290,anchor:.476498,anchorY:1,referenceHeight:292.5},{left:1100,top:367,width:245,height:291,anchor:.452442,anchorY:1,referenceHeight:292.5},{left:24,top:712,width:261,height:307,anchor:.541641,anchorY:1,referenceHeight:292.5},{left:333,top:712,width:342,height:271,anchor:.522734,anchorY:1,referenceHeight:292.5},{left:723,top:712,width:329,height:277,anchor:.465245,anchorY:1,referenceHeight:292.5},{left:1100,top:712,width:262,height:295,anchor:.460548,anchorY:1,referenceHeight:292.5},{left:24,top:1067,width:236,height:297,anchor:.459664,anchorY:1,referenceHeight:292.5},{left:333,top:1067,width:226,height:293,anchor:.458779,anchorY:1,referenceHeight:292.5},{left:723,top:1067,width:234,height:286,anchor:.513537,anchorY:1,referenceHeight:292.5},{left:1100,top:1067,width:236,height:292,anchor:.511446,anchorY:1,referenceHeight:292.5}]},militia:{kind:"militia",side:"ally",path:"assets/3d/fixed/combat-inbetweens/militia-inbetweens-v1.webp",width:1346,height:1029,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:248,height:214,anchor:.303755,anchorY:1,referenceHeight:214.5},{left:380,top:24,width:166,height:217,anchor:.233638,anchorY:1,referenceHeight:214.5},{left:699,top:24,width:169,height:215,anchor:.751442,anchorY:1,referenceHeight:214.5},{left:1028,top:24,width:242,height:209,anchor:.691229,anchorY:1,referenceHeight:214.5},{left:24,top:289,width:231,height:215,anchor:.376608,anchorY:1,referenceHeight:214.5},{left:380,top:289,width:219,height:215,anchor:.345603,anchorY:1,referenceHeight:214.5},{left:699,top:289,width:194,height:214,anchor:.717287,anchorY:1,referenceHeight:214.5},{left:1028,top:289,width:247,height:215,anchor:.565269,anchorY:1,referenceHeight:214.5},{left:24,top:552,width:308,height:199,anchor:.309765,anchorY:1,referenceHeight:214.5},{left:380,top:552,width:271,height:206,anchor:.26732,anchorY:1,referenceHeight:214.5},{left:699,top:552,width:281,height:206,anchor:.745506,anchorY:1,referenceHeight:214.5},{left:1028,top:552,width:294,height:201,anchor:.665837,anchorY:1,referenceHeight:214.5},{left:24,top:806,width:233,height:192,anchor:.350225,anchorY:1,referenceHeight:214.5},{left:380,top:806,width:195,height:198,anchor:.353827,anchorY:1,referenceHeight:214.5},{left:699,top:806,width:193,height:199,anchor:.638931,anchorY:1,referenceHeight:214.5},{left:1028,top:806,width:233,height:191,anchor:.648168,anchorY:1,referenceHeight:214.5}]},guard:{kind:"guard",side:"ally",path:"assets/3d/fixed/combat-inbetweens/guard-inbetweens-v1.webp",width:1082,height:1315,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:149,height:303,anchor:.412476,anchorY:1,referenceHeight:295},{left:321,top:24,width:152,height:295,anchor:.4815,anchorY:1,referenceHeight:295},{left:570,top:24,width:152,height:295,anchor:.502303,anchorY:1,referenceHeight:295},{left:820,top:24,width:129,height:295,anchor:.492853,anchorY:1,referenceHeight:295},{left:24,top:375,width:154,height:306,anchor:.546057,anchorY:1,referenceHeight:295},{left:321,top:375,width:148,height:292,anchor:.486764,anchorY:1,referenceHeight:295},{left:570,top:375,width:148,height:295,anchor:.476979,anchorY:1,referenceHeight:295},{left:820,top:375,width:132,height:295,anchor:.582791,anchorY:1,referenceHeight:295},{left:24,top:729,width:249,height:213,anchor:.312724,anchorY:1,referenceHeight:295},{left:321,top:729,width:201,height:232,anchor:.329505,anchorY:1,referenceHeight:295},{left:570,top:729,width:202,height:231,anchor:.65584,anchorY:1,referenceHeight:295},{left:820,top:729,width:238,height:213,anchor:.669952,anchorY:1,referenceHeight:295},{left:24,top:1009,width:153,height:281,anchor:.427279,anchorY:1,referenceHeight:295},{left:321,top:1009,width:143,height:282,anchor:.493231,anchorY:1,referenceHeight:295},{left:570,top:1009,width:148,height:281,anchor:.513681,anchorY:1,referenceHeight:295},{left:820,top:1009,width:128,height:275,anchor:.478192,anchorY:1,referenceHeight:295}]},elite:{kind:"elite",side:"ally",path:"assets/3d/fixed/combat-inbetweens/elite-inbetweens-v1.webp",width:1198,height:1208,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:193,height:251,anchor:.438333,anchorY:1,referenceHeight:256.5},{left:344,top:24,width:171,height:262,anchor:.400807,anchorY:1,referenceHeight:256.5},{left:631,top:24,width:172,height:259,anchor:.581968,anchorY:1,referenceHeight:256.5},{left:903,top:24,width:189,height:254,anchor:.521269,anchorY:1,referenceHeight:256.5},{left:24,top:334,width:192,height:248,anchor:.453928,anchorY:1,referenceHeight:256.5},{left:344,top:334,width:168,height:254,anchor:.382658,anchorY:1,referenceHeight:256.5},{left:631,top:334,width:167,height:252,anchor:.60535,anchorY:1,referenceHeight:256.5},{left:903,top:334,width:186,height:248,anchor:.528713,anchorY:1,referenceHeight:256.5},{left:24,top:636,width:272,height:215,anchor:.363927,anchorY:1,referenceHeight:256.5},{left:344,top:636,width:239,height:229,anchor:.314571,anchorY:1,referenceHeight:256.5},{left:631,top:636,width:224,height:236,anchor:.6783,anchorY:1,referenceHeight:256.5},{left:903,top:636,width:271,height:211,anchor:.693934,anchorY:1,referenceHeight:256.5},{left:24,top:920,width:197,height:242,anchor:.434111,anchorY:1,referenceHeight:256.5},{left:344,top:920,width:168,height:263,anchor:.455109,anchorY:1,referenceHeight:256.5},{left:631,top:920,width:170,height:264,anchor:.550413,anchorY:1,referenceHeight:256.5},{left:903,top:920,width:203,height:254,anchor:.566553,anchorY:1,referenceHeight:256.5}]},monk:{kind:"monk",side:"ally",path:"assets/3d/fixed/combat-inbetweens/monk-inbetweens-v1.webp",width:1029,height:1117,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:149,height:238,anchor:.526654,anchorY:1,referenceHeight:246},{left:282,top:24,width:147,height:247,anchor:.469488,anchorY:1,referenceHeight:246},{left:538,top:24,width:145,height:246,anchor:.524693,anchorY:1,referenceHeight:246},{left:794,top:24,width:147,height:246,anchor:.429109,anchorY:1,referenceHeight:246},{left:24,top:319,width:158,height:246,anchor:.53203,anchorY:1,referenceHeight:246},{left:282,top:319,width:165,height:246,anchor:.407362,anchorY:1,referenceHeight:246},{left:538,top:319,width:163,height:246,anchor:.644135,anchorY:1,referenceHeight:246},{left:794,top:319,width:156,height:243,anchor:.487956,anchorY:1,referenceHeight:246},{left:24,top:613,width:210,height:171,anchor:.537243,anchorY:1,referenceHeight:246},{left:282,top:613,width:208,height:179,anchor:.34183,anchorY:1,referenceHeight:246},{left:538,top:613,width:208,height:179,anchor:.641209,anchorY:1,referenceHeight:246},{left:794,top:613,width:211,height:173,anchor:.4547,anchorY:1,referenceHeight:246},{left:24,top:840,width:117,height:237,anchor:.507723,anchorY:1,referenceHeight:246},{left:282,top:840,width:125,height:253,anchor:.496519,anchorY:1,referenceHeight:246},{left:538,top:840,width:125,height:252,anchor:.497165,anchorY:1,referenceHeight:246},{left:794,top:840,width:129,height:236,anchor:.443583,anchorY:1,referenceHeight:246}]},courier:{kind:"courier",side:"ally",path:"assets/3d/fixed/combat-inbetweens/courier-inbetweens-v1.webp",width:1107,height:1258,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:211,height:269,anchor:.518047,anchorY:1,referenceHeight:268.5},{left:310,top:24,width:204,height:268,anchor:.463832,anchorY:1,referenceHeight:268.5},{left:577,top:24,width:193,height:269,anchor:.562402,anchorY:1,referenceHeight:268.5},{left:847,top:24,width:214,height:264,anchor:.466726,anchorY:1,referenceHeight:268.5},{left:24,top:341,width:228,height:269,anchor:.599341,anchorY:1,referenceHeight:268.5},{left:310,top:341,width:219,height:267,anchor:.435028,anchorY:1,referenceHeight:268.5},{left:577,top:341,width:219,height:263,anchor:.538536,anchorY:1,referenceHeight:268.5},{left:847,top:341,width:236,height:269,anchor:.393699,anchorY:1,referenceHeight:268.5},{left:24,top:658,width:231,height:264,anchor:.61528,anchorY:1,referenceHeight:268.5},{left:310,top:658,width:211,height:265,anchor:.406646,anchorY:1,referenceHeight:268.5},{left:577,top:658,width:220,height:271,anchor:.570336,anchorY:1,referenceHeight:268.5},{left:847,top:658,width:233,height:260,anchor:.38939,anchorY:1,referenceHeight:268.5},{left:24,top:977,width:238,height:253,anchor:.577539,anchorY:1,referenceHeight:268.5},{left:310,top:977,width:212,height:254,anchor:.458656,anchorY:1,referenceHeight:268.5},{left:577,top:977,width:222,height:257,anchor:.55534,anchorY:1,referenceHeight:268.5},{left:847,top:977,width:231,height:252,anchor:.420759,anchorY:1,referenceHeight:268.5}]},turtle:{kind:"turtle",side:"ally",path:"assets/3d/fixed/combat-inbetweens/turtle-inbetweens-v1.webp",width:1262,height:1009,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:262,height:184,anchor:.494718,anchorY:1,referenceHeight:188},{left:345,top:24,width:253,height:192,anchor:.496229,anchorY:1,referenceHeight:188},{left:654,top:24,width:256,height:200,anchor:.47497,anchorY:1,referenceHeight:188},{left:962,top:24,width:262,height:184,anchor:.492671,anchorY:1,referenceHeight:188},{left:24,top:272,width:271,height:201,anchor:.491808,anchorY:1,referenceHeight:188},{left:345,top:272,width:245,height:190,anchor:.469072,anchorY:1,referenceHeight:188},{left:654,top:272,width:249,height:190,anchor:.527662,anchorY:1,referenceHeight:188},{left:962,top:272,width:271,height:199,anchor:.483245,anchorY:1,referenceHeight:188},{left:24,top:521,width:263,height:203,anchor:.46966,anchorY:1,referenceHeight:188},{left:345,top:521,width:261,height:194,anchor:.480755,anchorY:1,referenceHeight:188},{left:654,top:521,width:257,height:198,anchor:.497093,anchorY:1,referenceHeight:188},{left:962,top:521,width:267,height:201,anchor:.510017,anchorY:1,referenceHeight:188},{left:24,top:772,width:273,height:212,anchor:.473048,anchorY:1,referenceHeight:188},{left:345,top:772,width:253,height:212,anchor:.474186,anchorY:1,referenceHeight:188},{left:654,top:772,width:260,height:211,anchor:.514641,anchorY:1,referenceHeight:188},{left:962,top:772,width:276,height:213,anchor:.504161,anchorY:1,referenceHeight:188}]}};var Zl={ashigaru:{name:"아시가루",title:"창병",tier:1,hp:70,speed:1,armor:0,resist:0,bounty:5,lives:1,atk:8,size:.28,desc:"가장 흔한 왜군 보병. 수로 밀어붙인다."},teppo:{name:"조총병",title:"철포대",tier:1,hp:56,speed:.95,armor:0,resist:0,bounty:6,lives:1,atk:6,size:.28,shoot:{range:2.6,dmg:12,cd:2.2},desc:"걸으면서 가까운 영웅과 의병을 조총으로 저격한다."},scout:{name:"척후병",title:"정찰대",tier:1,hp:42,speed:1.7,armor:0,resist:0,bounty:4,lives:1,atk:5,size:.25,desc:"빠르게 달려드는 경보병. 방어선의 빈틈을 노린다."},samurai:{name:"사무라이",title:"무사",tier:2,hp:330,speed:.9,armor:.3,resist:.1,bounty:15,lives:2,atk:25,size:.32,enrage:{at:.5,speed:1.6},desc:"갑옷을 두른 무사. 체력이 절반 아래로 떨어지면 칼을 뽑고 돌진한다."},ninja:{name:"시노비",title:"닌자",tier:2,hp:170,speed:1.35,armor:0,resist:.2,bounty:14,lives:2,atk:0,size:.27,stealth:!0,unblockable:!0,desc:"은신 상태로 이동한다. 첨성대·곽재우·봉수 경보로만 발각할 수 있다. 범위 공격은 맞는다."},onmyoji:{name:"음양사",title:"주술사",tier:2,hp:210,speed:.85,armor:0,resist:.5,bounty:17,lives:2,atk:10,size:.3,heal:{range:2,pct:.06,cd:3},desc:"3초마다 주변 아군 체력을 6% 회복시킨다(여럿이어도 겹치지 않음). 신성 저항이 높다."},cavalry:{name:"기마무사",title:"기병",tier:2,hp:230,speed:1.5,armor:.15,resist:0,bounty:17,lives:2,atk:18,size:.36,unblockable:!0,desc:"말을 탄 무사. 빠르고 저지당하지 않는다."},drum:{name:"진군 고수",title:"군악대",tier:2,hp:250,speed:.9,armor:.1,resist:.1,bounty:18,lives:2,atk:8,size:.32,haste:{range:2,mult:.25},desc:"북을 울려 주변 아군의 이동 속도를 25% 올린다. 우선 제거 대상."},armored:{name:"철갑무사",title:"갑주대",tier:3,hp:950,speed:.6,armor:.6,resist:.1,bounty:35,lives:3,atk:40,size:.38,desc:"두꺼운 철갑. 물리 피해를 60% 막는다. 신성·화기로 상대하라."},ram:{name:"공성 충차",title:"공성병기",tier:3,hp:1500,speed:.5,armor:.35,resist:.3,bounty:45,lives:5,atk:60,size:.45,spawnOnDeath:{type:"ashigaru",n:4},desc:"성문을 부수는 충차. 파괴되면 안에서 아시가루 4명이 뛰쳐나온다."},konishi:{name:"고니시 유키나가",title:"제1군 선봉장",tier:4,hp:5500,speed:.55,armor:.3,resist:.3,bounty:250,lives:6,atk:90,size:.55,boss:{summon:{type:"ashigaru",n:4,cd:9}},desc:"임진왜란 선봉장. 9초마다 아시가루 4명을 불러낸다."},kato:{name:"가토 기요마사",title:"제2군 대장",tier:4,hp:9e3,speed:.5,armor:.45,resist:.2,bounty:320,lives:8,atk:130,size:.58,boss:{charge:{cd:11,dur:1.6,mult:3},disable:{range:3,dur:4}},desc:"11초마다 창을 던져 가까운 유산 하나를 4초간 봉쇄하고 돌진한다."},wakizaka:{name:"와키자카 야스하루",title:"수군 대장",tier:4,hp:9500,speed:.6,armor:.3,resist:.35,bounty:320,lives:8,atk:110,size:.56,boss:{shield:{pct:.12,cd:15}},desc:"안택선 방패. 15초마다 최대 체력 12%의 보호막을 새로 두른다."},ukita:{name:"우키타 히데이에",title:"총대장",tier:4,hp:12e3,speed:.5,armor:.4,resist:.4,bounty:400,lives:10,atk:140,size:.6,boss:{rally:{cd:12,heal:.08,haste:.3,dur:3}},desc:"12초마다 전군을 독려해 모든 왜군의 체력 8% 회복, 3초간 이동 속도 +30%."},ishida:{name:"이시다 미쓰나리",title:"삼봉행",tier:4,hp:12500,speed:.45,armor:.4,resist:.4,bounty:600,lives:14,atk:200,size:.66,boss:{phases:[.7,.35],phaseSummon:[{type:"samurai",n:3},{type:"ninja",n:3}],disableN:3,disableDur:5,phaseText:"봉행의 계략"},desc:"침략을 꾸린 책사. 체력 70%·35%에서 정예를 부르고 유산 3개를 봉쇄한다."},so:{name:"소 요시토시",title:"대마도주",tier:4,hp:5200,speed:.6,armor:.25,resist:.3,bounty:240,lives:6,atk:80,size:.55,boss:{summon:{type:"scout",n:5,cd:8,text:"길잡이 척후대!"}},desc:"길잡이 노릇을 한 대마도주. 8초마다 척후병 5명을 풀어 방어선을 흔든다."},kuroda:{name:"구로다 나가마사",title:"제3군 대장",tier:4,hp:7200,speed:.5,armor:.4,resist:.25,bounty:280,lives:7,atk:110,size:.57,boss:{summon:{type:"teppo",n:5,cd:10,text:"철포대 사격 준비!"}},desc:"조총 부대를 앞세운 장수. 10초마다 조총병 5명을 불러낸다."},todo:{name:"도도 다카토라",title:"수군 장수",tier:4,hp:6400,speed:.55,armor:.3,resist:.3,bounty:300,lives:7,atk:110,size:.57,boss:{shield:{pct:.08,cd:13,text:"판옥 방패!"},summon:{type:"ashigaru",n:4,cd:12,text:"수군 상륙!"}},desc:"옥포·칠천량의 수군 장수. 13초마다 보호막(8%), 12초마다 아시가루 4명 상륙."},kuki:{name:"구키 요시타카",title:"수군 대장",tier:4,hp:7600,speed:.5,armor:.4,resist:.3,bounty:320,lives:8,atk:120,size:.58,boss:{shield:{pct:.12,cd:15,text:"철갑선 방벽!"}},desc:"철갑선을 몰던 수군 대장. 15초마다 최대 체력 12%의 두꺼운 보호막."},kurushima:{name:"구루시마 미치후사",title:"선봉 수군장",tier:4,hp:9e3,speed:.6,armor:.3,resist:.3,bounty:330,lives:9,atk:130,size:.58,boss:{rally:{cd:10,heal:.05,haste:.35,dur:3,text:"노를 저어라!"}},desc:"명량의 선봉. 10초마다 모든 왜군 체력 5% 회복, 3초간 이동 속도 +35%."},shimazu:{name:"시마즈 요시히로",title:"귀신 시마즈",tier:4,hp:14e3,speed:.5,armor:.5,resist:.35,bounty:450,lives:12,atk:170,size:.62,enrage:{at:.4,speed:1.5},boss:{charge:{cd:10,dur:1.4,mult:3,text:"귀신 돌격!"},disable:{range:3.2,dur:4}},desc:"가장 사나운 적장. 10초마다 유산 하나를 봉쇄하며 돌진하고, 체력 40% 아래에서 더 빨라진다."},hideyoshi:{name:"도요토미 히데요시",title:"태합 · 침략의 원흉",tier:4,hp:38e3,speed:.3,armor:.88,resist:.55,bounty:3e3,lives:999,atk:400,size:.8,scale:2.15,fixedHp:!0,line:"갑옷 88% — 화기·신성·갑옷 깎기로 공략하라!",boss:{phases:[.75,.5,.25],phaseSummon:[{type:"samurai",n:4},{type:"armored",n:3},{type:"ninja",n:6}],disableN:4,disableDur:6,phaseText:"천하인의 호령",shield:{pct:.05,cd:15,text:"황금 표주박!"}},desc:"단 한 명. 갑옷 88% — 물리 피해가 거의 통하지 않는다. 화기(갑옷 절반 무시)·신성·갑옷 깎기로 공략하라. 도성에 닿으면 즉시 패배."}},Jl={ash:"ashigaru",tep:"teppo",sco:"scout",sam:"samurai",nin:"ninja",onm:"onmyoji",cav:"cavalry",drm:"drum",arm:"armored",ram:"ram"};function w1(i){let e=i.rng=i.rng+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rh(i){let e={rng:i>>>0};return()=>w1(e)}var Xt=24,qt=14;function lt(i){let e=Rh(i.seed||1),t=Array.from({length:qt},()=>Array(Xt).fill(".")),n=(c,h)=>c>=0&&h>=0&&c<Xt&&h<qt,r=(c,h,f)=>n(c,h)&&(t[h][c]=f),o=(c,h)=>n(c,h)?t[h][c]:"X";if(i.land){for(let c=0;c<qt;c++)for(let h=0;h<Xt;h++)r(h,c,"W");for(let[c,h,f,d]of i.land)for(let l=h;l<=d;l++)for(let u=c;u<=f;u++)r(u,l,".")}if(i.sea){let{side:c,depth:h}=i.sea,f=c==="left"||c==="right"?qt:Xt,d=h;for(let l=0;l<f;l++){d=Math.max(1,Math.min(h+2,d+(e()<.5?-1:1)*(e()<.55?1:0)));for(let u=0;u<d;u++)c==="left"?r(u,l,"W"):c==="right"?r(Xt-1-u,l,"W"):c==="top"?r(l,u,"W"):r(l,qt-1-u,"W")}}if(i.river){let{axis:c,at:h,w:f=2}=i.river,d=h,l=c==="v"?qt:Xt;for(let u=0;u<l;u++){u%3===0&&e()<.5&&(d+=e()<.5?-1:1),d=Math.max(h-1,Math.min(h+1,d));for(let w=0;w<f;w++)c==="v"?r(d+w,u,"W"):r(u,d+w,"W")}}if(i.mountains){let{side:c,depth:h=1,from:f=0,to:d=c==="left"||c==="right"?qt-1:Xt-1}=i.mountains;for(let l=f;l<=d;l++){let u=h+(e()<.35?1:0);for(let w=0;w<u;w++)c==="top"?r(l,w,"M"):c==="bottom"?r(l,qt-1-w,"M"):r(c==="left"?w:Xt-1-w,l,"M")}}if(i.wall){let{side:c,w:h=3}=i.wall;for(let f=0;f<qt;f++)for(let d=0;d<h;d++)c==="right"?r(Xt-1-d,f,"K"):c==="left"&&r(d,f,"K");if(c==="top"||c==="bottom")for(let f=0;f<Xt;f++)for(let d=0;d<h;d++)r(f,c==="top"?d:qt-1-d,"K")}for(let[c,h]of i.houses||[])r(c,h,"H");for(let[c,h]of i.jang||[])r(c,h,"J");let s=i.trees??.45;for(let c=0;c<Xt;c++)for(let h of[0,qt-1])o(c,h)==="."&&e()<s&&r(c,h,"T");for(let c=0;c<qt;c++)for(let h of[0,Xt-1])o(h,c)==="."&&e()<s*.6&&r(h,c,"T");let a=(c,h)=>{for(let f=0;f<c;f++){let d=Math.floor(e()*Xt),l=Math.floor(e()*qt);o(d,l)==="."&&r(d,l,h)}};return a(i.inner??4,"T"),a(i.rocks??5,"R"),a(i.flowers??9,"f"),t.map(c=>c.join(""))}var _1=[["ash",1,0,1,.7],["sco",1,0,.75,.45],["tep",1,0,1.25,.9],["sam",2,1,5,1.6],["cav",2,2,4.4,1.1],["nin",2,3,4.6,1.2],["onm",2,4,5.2,2.2],["drm",2,4,5.4,3],["arm",3,6,13,2.6],["ram",3,7,17,3.6]];function $l({seed:i,n:e,level:t,weights:n={},boss:r={},paths:o=1,budget:s=1}){let a=Rh(i),c=[];for(let h=1;h<=e;h++){let f=h/e,d=(12+t*1.6)*(.45+f*1.35)*s,l=_1.filter(([,M,H])=>H<=t&&(M===1||h>=(M===2?3:Math.ceil(e*.35)))),u=[],w=d,v=0,g=h<3?2:2+Math.floor(a()*2)+(f>.6?1:0);for(let M=0;M<g&&w>.5;M++){let H=l.map(B=>[B,(n[B[0]]??1)*(B[1]===1?1.4-f*.6:B[1]===2?.6+f:.3+f*1.2)]),y=H.reduce((B,[,Z])=>B+Z,0),S=a()*y,b=H[0][0];for(let[B,Z]of H)if(S-=Z,S<=0){b=B;break}let[E,_,,A,P]=b,D=M===g-1?w:w*(.3+a()*.35),U=Math.max(1,Math.round(D/A));w-=U*A;let z=Math.round(P*(1.1-f*.35)*10)/10,I=o>1?a()<.75?"a":String(Math.floor(a()*o)):null;u.push(`${E}${U>1?`*${U}@${z}`:""}${v?`+${v}`:""}${I!==null?`>${I}`:""}`),v+=Math.round(2+a()*4+(_>=2?2:0))}let p=r[h];if(p){let[M,H]=Array.isArray(p)?p:[p,0];u.unshift(`${M}${o>1?`>${H}`:""}`);for(let y=1;y<u.length;y++)u[y]=u[y].includes("+")?u[y].replace(/\+(\d+)/,(S,b)=>`+${+b+4}`):u[y].replace(/(>[0-9a])?$/,S=>`+4${S||""}`)}c.push(u.join(", "))}return c}var x1=[{id:"s1",name:"부산진 전투",date:"1592년 4월",season:"spring",base:"부산진성",desc:"임진년 4월, 왜군 선봉이 부산포에 상륙했다. 바다에서 올라오는 적을 부산진성 앞에서 막아내라.",region:{x:201,y:378},startGold:240,hpBase:1,hpGrowth:.1,unlockTowers:["haeinsa"],grid:["TTT..TT.....MMMMM...TTMM","T.........f.......R...TM","......................TT","..........R........f....","WW.....f................","WWW.......f.........T...","WWW....R.............R..","WWWW...........f......HH","WWWW..T..............fH.","WWWW.......f...........J","WWWWW..............R....","WWWWW...................","WWWWWW......T.....f....H","WWWWWWWTT...TT.....HHTTT"],paths:[[[-1,2],[5,2],[5,10],[11,10],[11,4],[17,4],[17,11],[23,11]]],waves:["ash*8@1.3","ash*10@1.1, sco*4@0.8+8","ash*8@1, tep*5@1.4+4","sco*10@0.6, ash*10@1+6","ash*12@0.9, sam*1+10","tep*8@1.1, ash*10@0.8+3, sco*6@0.5+12","sam*3@3, ash*12@0.8+2","drm*1, ash*14@0.6+1, sco*8@0.5+10","tep*12@0.8, sam*3@2.5+6","ash*18@0.6, sam*4@2+4, drm*2@6+8","sco*16@0.4, tep*10@0.8+6, sam*5@1.8+12","konishi, ash*16@0.7+2, sam*4@3+8"]},{id:"s2",name:"탄금대 전투",date:"1592년 4월",season:"summer",base:"탄금대 본진",desc:"신립 장군이 강을 등지고 배수진을 친 탄금대. 두 갈래로 몰려와 하나로 합쳐지는 왜군을 막아라.",region:{x:159,y:292},startGold:260,hpBase:1.12,hpGrowth:.1,unlockTowers:["seokguram"],grid:["TT....TTT....MMMMMM..TWW","T...........f........WWW","....f..R..............WW","......................WW","..T.......f.....R.....WW","......R..............WWW","..f..........f.......WWW","......................WW","..T.....R.......f.....WW","....f.......T........WWW","......................WW","........f...........TWWW","..R...........f.....TWWW","TTT...TTTT...TTTT...TTWW"],paths:[[[-1,3],[7,3],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]],[[-1,11],[7,11],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]]],waves:["ash*10@1>a","ash*8@1>0, sco*8@0.6>1+3","tep*10@1>a, ash*8@0.9>a+5","cav*3@2>a, ash*12@0.8>a+3","sam*3@2.5>a, sco*10@0.5>a+4","nin*3@2>a, ash*14@0.7>a+3","drm*2@4>a, ash*16@0.6>a+1, tep*8@1>a+8","arm*1>0, sam*3@2>a+4, sco*10@0.5>a+8","cav*6@1.2>a, nin*4@1.5>a+8","ash*20@0.5>a, sam*5@1.8>a+5, drm*2@5>a+10","arm*2@5>a, tep*14@0.7>a+3","nin*6@1.2>a, cav*6@1.2>a+6, sco*14@0.4>a+12","sam*8@1.5>a, drm*3@4>a+2, ash*20@0.5>a+6","arm*4@3>a, cav*8@1>a+6, nin*6@1>a+12","kato>0, sam*6@2>a+4, ash*20@0.5>a+8, arm*2@5>a+14"]},{id:"s3",name:"한산도 대첩",date:"1592년 7월",season:"sea",base:"한산 수영",desc:"한산도 앞바다. 학익진에 쫓긴 왜 수군이 섬으로 상륙한다. 좁은 땅을 지혜롭게 써라.",region:{x:176,y:396},startGold:300,hpBase:1.12,hpGrowth:.1,unlockTowers:["gyeongbok"],grid:["WWWW..TT..WWW...TT.WWWWW","....................WWWW","WW.....f......R.....WWWW","WWW.f....WWW.....f..WWWW","WW..R...WWWWW.......WWWW","WW..................WWWW","WWW.....f....T.......WWW","WWW..WWW........WW...WWW","WWW..WWWW...f..WWW....WW","WWW.................f.WW","WWWWW..R....f.....T...WW","WWWWWWW..f.....WW.....HW","WWWWWWWWW...T.WWW.......","WWWWWWWWWWW....WWWT..HHH"],paths:[[[-1,1],[19,1],[19,5],[4,5],[4,9],[19,9],[19,12],[23,12]]],waves:["ash*12@0.9","sco*12@0.5, ash*8@1+6","onm*1, ash*14@0.7+2","tep*12@0.8, sam*2@3+6","cav*5@1.2, drm*1+6, ash*12@0.6+7","ram*1, sco*12@0.4+4","nin*5@1.3, onm*2@3+4, ash*14@0.6+6","sam*6@1.5, tep*12@0.7+5","arm*2@4, onm*2@4+2, ash*18@0.5+6","ram*2@6, cav*8@1+4, drm*2@5+8","nin*8@0.9, sam*6@1.4+6","arm*4@2.5, onm*3@3+3, tep*16@0.5+8","cav*12@0.7, drm*3@3+2, sco*20@0.3+8","ram*3@5, sam*8@1.2+4, nin*6@1+12","wakizaka, onm*3@3+3, arm*3@4+6, sam*8@1.2+10"]},{id:"s4",name:"행주대첩",date:"1593년 2월",season:"winter",base:"행주산성",desc:"눈 덮인 행주산성. 두 갈래 길로 3만 대군이 몰려온다. 협동이라면 한 사람이 한 길씩!",region:{x:110,y:270},startGold:390,hpBase:1.2,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT....MMMM....TTMMM","T.......f.........R...MM","..............T.......MM","....R...........f.....MM","..f.......T..........RMM","......................MM","..T.......f....R.......M","......R................M","...f..........T.......MM","...R..................MM","..T...........f......WWM","......f..........T..WWWW","...................WWWWW","TTT..TTT...TTTT..WWWWWWW"],paths:[[[-1,2],[9,2],[9,5],[16,5],[16,7],[21,7]],[[-1,12],[6,12],[6,9],[18,9],[18,7],[21,7]]],waves:["ash*8@1>0, ash*8@1>1","sco*8@0.6>0, tep*6@1.2>1+2","sam*2@3>0, ash*12@0.8>1+2","cav*4@1.5>1, ash*12@0.8>0+3","nin*4@1.5>0, onm*2@3>1+2, ash*12@0.7>a+6","arm*1>0, arm*1>1+2, sco*14@0.5>a+6","drm*2@3>a, sam*6@1.5>a+2","ram*1>0, cav*6@1>1+3, tep*12@0.6>a+8","onm*4@2>a, arm*3@3>a+3, ash*20@0.5>a+6","nin*8@0.9>a, sam*6@1.4>a+6, drm*2@4>a+10","ram*2@4>1, cav*10@0.8>0+2, sco*16@0.35>a+10","arm*5@2.5>a, onm*4@2.5>a+4, tep*16@0.5>a+8","sam*10@1.1>a, nin*8@0.9>a+6, drm*3@3>a+10","ram*3@4>a, arm*4@3>a+3, cav*10@0.7>a+10","onm*6@1.8>a, sam*12@0.9>a+3, ash*30@0.3>a+8","nin*14@0.6>a, arm*6@2>a+6, drm*4@3>a+10","ram*4@3.5>a, cav*14@0.6>a+4, sam*10@1>a+10, onm*4@2>a+14","ukita>0, arm*6@2.5>a+3, sam*12@1>a+8, nin*10@0.8>a+14"]},{id:"s5",name:"한양 수복",date:"1593년 4월",season:"autumn",base:"경복궁",desc:"도성을 되찾는 날. 한양으로 향하는 두 길을 모두 지키고, 침략을 꾸민 책사를 물리쳐라.",region:{x:133,y:255},startGold:450,hpBase:1.26,hpGrowth:.1,unlockTowers:[],grid:["TT..TTT..MMMMM....TTTKKK","T......f.........R...KKK","..R.......f..........KKK","......T..............KKK","...........f.........KKK","..f...R........f.....KKK",".....................KKK","...T.........R.......KKK","..................f..KKK",".f......T..........T.KKK","...R..............f..KKK",".......f............TKKK","..T..............f...KKK","TTT..TTTT..TTTT...TTTKKK"],paths:[[[3,-1],[3,4],[9,4],[9,1],[15,1],[15,6],[20,6]],[[-1,11],[5,11],[5,8],[12,8],[12,12],[18,12],[18,6],[20,6]]],waves:["ash*12@0.8>a","sco*14@0.5>a, tep*8@1>a+5","sam*4@2>a, ash*14@0.6>a+3","cav*4@1.4>a, onm*2@3>a+5","nin*4@1.4>a, drm*1>a+3, ash*16@0.5>a+6","arm*3@3>a, tep*14@0.6>a+4","ram*2@4>a, sam*6@1.4>a+4, sco*16@0.35>a+10","onm*3@2>a, cav*8@0.9>a+3, nin*5@1.1>a+10","arm*5@2.4>a, drm*3@3>a+2, ash*24@0.4>a+6","konishi>0, sam*8@1.2>a+3, tep*16@0.5>a+8","nin*12@0.7>a, cav*10@0.8>a+6","ram*4@3>a, onm*5@2>a+3, sam*10@1>a+8","arm*8@1.8>a, drm*4@3>a+2, sco*24@0.3>a+8","cav*16@0.6>a, nin*12@0.7>a+6, onm*4@2>a+12","kato>1, arm*6@2>a+3, sam*12@0.9>a+8","ram*5@3>a, sam*14@0.8>a+4, tep*20@0.4>a+12","nin*16@0.5>a, onm*6@1.6>a+4, cav*14@0.6>a+10","arm*10@1.4>a, drm*5@2.5>a+3, sam*16@0.7>a+8","wakizaka>0, ukita>1+4, ram*4@3>a+8, nin*14@0.6>a+12","ishida>0, arm*8@2>a+4, sam*16@0.8>a+10, onm*6@2>a+16, cav*16@0.6>a+20"]}],v1={s6:{id:"s6",name:"동래성 전투",date:"1592년 4월",season:"spring",base:"동래성",desc:'"싸워 죽기는 쉬우나 길을 내주기는 어렵다." 송상현 부사가 지킨 동래성. 성벽 앞 굽은 길에서 왜군을 막아라.',region:{x:214,y:364},startGold:250,hpGrowth:.1,grid:lt({seed:6,mountains:{side:"top",depth:1,from:0,to:8},wall:{side:"right",w:3},houses:[[17,1],[18,1],[17,12],[18,12]],jang:[[20,4]]}),paths:[[[-1,3],[5,3],[5,10],[10,10],[10,2],[15,2],[15,11],[19,11],[19,6],[20,6]]],gen:{level:1,n:12,boss:{12:"so"},weights:{sco:1.4}}},s7:{id:"s7",name:"상주 전투",date:"1592년 4월",season:"spring",base:"상주 진영",desc:"북천을 건너 두 갈래로 몰려오는 왜군. 다리목에서 하나로 합쳐지는 길을 노려라.",region:{x:172,y:313},startGold:260,hpGrowth:.1,grid:lt({seed:7,river:{axis:"v",at:10,w:2},mountains:{side:"right",depth:1},houses:[[20,11],[21,11]],jang:[[20,6]]}),paths:[[[-1,2],[7,2],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]],[[-1,11],[7,11],[7,6],[14,6],[14,2],[18,2],[18,8],[21,8]]],gen:{level:2,n:14,boss:{14:["kuroda",0]}}},s8:{id:"s8",name:"옥포 해전",date:"1592년 5월",season:"sea",base:"옥포 수영",desc:"이순신 함대의 첫 승리. 옥포 앞바다에서 뭍으로 기어오르는 왜 수군을 포구에서 쓸어버려라.",region:{x:189,y:390},startGold:280,hpGrowth:.1,grid:lt({seed:8,land:[[0,0,17,13],[18,3,20,10]],trees:.3,houses:[[1,11],[2,12],[1,12]]}),paths:[[[24,1],[15,1],[15,5],[9,5],[9,1],[3,1],[3,9],[12,9],[12,12],[4,12]]],gen:{level:3,n:14,boss:{14:"todo"},weights:{sco:1.3,tep:1.3}},unlockTowers:["namhansan"]},s9:{id:"s9",name:"사천 해전",date:"1592년 5월",season:"sea",base:"사천 포구",desc:"거북선이 처음 바다에 나선 날. 두 물길로 들어오는 왜선을 막아내라.",region:{x:160,y:381},startGold:290,hpGrowth:.1,grid:lt({seed:9,sea:{side:"bottom",depth:2},mountains:{side:"top",depth:1,from:6,to:17},houses:[[1,3],[1,4]]}),paths:[[[24,3],[17,3],[17,7],[9,7],[9,3],[3,3],[3,6],[1,6]],[[24,10],[14,10],[14,7],[9,7],[9,3],[3,3],[3,6],[1,6]]],gen:{level:4,n:15,boss:{8:["todo",1],15:["kuki",0]},weights:{cav:.6}}},s10:{id:"s10",name:"평양성 전투",date:"1592년 6월",season:"summer",base:"평양성",desc:"대동강을 사이에 둔 평양성. 강을 건너오는 다리 두 곳을 모두 지켜라.",region:{x:92,y:182},startGold:300,hpGrowth:.1,grid:lt({seed:10,river:{axis:"h",at:6,w:2},wall:{side:"left",w:2},houses:[[3,1],[4,1],[3,12]]}),paths:[[[24,11],[17,11],[17,2],[8,2],[8,9],[2,9]],[[24,2],[20,2],[20,11],[12,11],[12,9],[2,9]]],gen:{level:5,n:15,boss:{15:["konishi",0]}}},s11:{id:"s11",name:"부산포 해전",date:"1592년 9월",season:"sea",base:"부산포",desc:"왜군의 본거지 부산포를 들이친다. 끝없이 쏟아지는 왜 수군을 길고 긴 해안길에서 버텨라.",region:{x:214,y:386},startGold:320,hpGrowth:.1,grid:lt({seed:11,sea:{side:"left",depth:3},sea2:null,mountains:{side:"right",depth:1},houses:[[20,12],[21,12]]}),paths:[[[4,-1],[4,3],[12,3],[12,1],[19,1],[19,6],[7,6],[7,10],[16,10],[16,12],[20,12]]],gen:{level:6,n:16,boss:{9:"todo",16:"kuki"},weights:{sco:1.2,nin:1.2}}},s12:{id:"s12",name:"진주대첩",date:"1592년 10월",season:"autumn",base:"진주성",desc:"김시민 목사와 3,800 군사가 3만 대군을 막아낸 진주성. 남강을 등진 성으로 세 방향에서 몰려온다.",region:{x:157,y:368},startGold:330,hpGrowth:.1,grid:lt({seed:12,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[20,3],[20,10]]}),paths:[[[-1,2],[4,2],[4,5],[9,5],[9,1],[15,1],[15,5],[18,5],[18,7],[21,7]],[[-1,9],[4,9],[4,11],[11,11],[11,8],[15,8],[15,10],[18,10],[18,7],[21,7]]],gen:{level:7,n:16,boss:{16:["kuroda",1]},weights:{ram:1.5,drm:1.3}}},s13:{id:"s13",name:"평양성 탈환",date:"1593년 1월",season:"winter",base:"평양 본진",desc:"조명 연합군의 반격. 눈 덮인 평양 들판에서 성을 빠져나와 역습하는 왜군을 막아라.",region:{x:100,y:176},startGold:340,hpGrowth:.1,grid:lt({seed:13,mountains:{side:"bottom",depth:1},river:{axis:"v",at:15,w:1},houses:[[1,6],[1,7]]}),paths:[[[24,3],[19,3],[19,9],[12,9],[12,3],[6,3],[6,7],[2,7]],[[24,11],[16,11],[16,9],[12,9],[12,3],[6,3],[6,7],[2,7]]],gen:{level:8,n:16,boss:{8:["so",1],16:["konishi",0]},weights:{arm:1.4}},unlockTowers:["seokbinggo"]},s14:{id:"s14",name:"진주성 2차 전투",date:"1593년 6월",season:"summer",base:"촉석루",desc:"복수를 벼른 왜군 대군이 다시 진주성으로. 세 길로 몰려오는 적을 촉석루 앞에서 막아라.",region:{x:166,y:372},startGold:380,hpGrowth:.1,grid:lt({seed:14,river:{axis:"h",at:12,w:2},wall:{side:"right",w:2},houses:[[19,3],[19,10]]}),paths:[[[-1,1],[6,1],[6,4],[11,4],[11,1],[16,1],[16,4],[19,4],[19,6],[21,6]],[[-1,11],[6,11],[6,8],[11,8],[11,11],[16,11],[16,8],[19,8],[19,6],[21,6]],[[-1,6],[21,6]]],gen:{level:10,n:18,boss:{9:["kuroda",0],18:["kato",1]},weights:{ram:1.3,sam:1.3}},unlockTowers:["bulguksa"]},s15:{id:"s15",name:"칠천량의 밤",date:"1597년 7월",season:"sea",base:"한산 수영",desc:"칠천량에서 조선 수군이 무너진 밤. 살아남은 배를 지키며 밤바다로 밀려드는 왜군을 버텨라.",region:{x:184,y:386},startGold:380,hpGrowth:.1,night:!0,grid:lt({seed:15,land:[[0,0,23,3],[2,5,21,7],[0,10,23,13]],trees:.3}),paths:[[[24,1],[2,1],[2,6],[21,6],[21,11],[5,11]]],gen:{level:11,n:16,boss:{8:"wakizaka",16:"todo"},weights:{nin:1.8,sco:1.2}}},s16:{id:"s16",name:"남원성 전투",date:"1597년 8월",season:"summer",base:"남원성",desc:"정유재란, 호남으로 가는 길목 남원성. 성을 둘러싼 왜군이 네 모퉁이를 돌아 성문으로 몰려온다.",region:{x:147,y:363},startGold:400,hpGrowth:.1,grid:lt({seed:16,mountains:{side:"left",depth:1},houses:[[11,6],[12,6],[11,7]]}),paths:[[[-1,1],[21,1],[21,12],[3,12],[3,4],[18,4],[18,9],[12,9]]],gen:{level:12,n:18,boss:{9:"so",18:"ukita"},weights:{ram:1.4}}},s17:{id:"s17",name:"직산 전투",date:"1597년 9월",season:"autumn",base:"직산 진영",desc:"한양으로 북상하는 왜군을 조명 연합군이 막아선 들판. 넓은 들을 가로지르는 두 길을 모두 지켜라.",region:{x:139,y:289},startGold:420,hpGrowth:.1,grid:lt({seed:17,flowers:16,rocks:6,houses:[[22,1],[22,2]]}),paths:[[[-1,4],[4,4],[4,1],[10,1],[10,5],[14,5],[14,2],[19,2],[19,7],[22,7]],[[-1,10],[5,10],[5,12],[11,12],[11,9],[16,9],[16,11],[19,11],[19,7],[22,7]]],gen:{level:13,n:18,boss:{18:["kuroda",1]},weights:{cav:1.8,drm:1.2}}},s18:{id:"s18",name:"명량 대첩",date:"1597년 9월",season:"sea",base:"울돌목 진영",desc:'"신에게는 아직 열두 척의 배가 남아 있사옵니다." 거센 물살 울돌목, 133척의 왜선이 좁은 물길로 쏟아진다.',region:{x:111,y:405},startGold:440,hpGrowth:.1,grid:lt({seed:18,land:[[0,3,23,10]],trees:.2,rocks:3}),paths:[[[24,4],[15,4],[15,9],[9,9],[9,4],[3,4],[3,8],[1,8]]],gen:{level:14,n:20,boss:{20:"kurushima"},weights:{sco:2.2,ash:1.6,cav:1.4},budget:1.15}},s19:{id:"s19",name:"울산성 전투",date:"1597년 12월",season:"winter",base:"울산 진영",desc:"가토 기요마사가 쌓은 울산 왜성. 한겨울 성에서 뛰쳐나오는 철갑 부대를 막아라.",region:{x:210,y:357},startGold:460,hpGrowth:.1,grid:lt({seed:19,sea:{side:"right",depth:2},mountains:{side:"top",depth:1},houses:[[1,12],[2,12]]}),paths:[[[20,-1],[20,3],[15,3],[15,1],[10,1],[10,5],[5,5],[5,9],[9,9],[9,12],[2,12]],[[20,14],[20,10],[16,10],[16,7],[12,7],[12,9],[9,9],[9,12],[2,12]]],gen:{level:15,n:19,boss:{19:["kato",0]},weights:{arm:1.8,sam:1.2}}},s20:{id:"s20",name:"사천 왜성 전투",date:"1598년 10월",season:"autumn",base:"사천 진영",desc:"귀신 시마즈가 지키는 사천 왜성. 성문이 열리면 사나운 무사들이 두 갈래로 쏟아진다.",region:{x:168,y:378},startGold:480,hpGrowth:.1,grid:lt({seed:20,wall:{side:"left",w:2},sea:{side:"bottom",depth:1},houses:[[21,5],[22,5]]}),paths:[[[2,2],[7,2],[7,5],[11,5],[11,1],[16,1],[16,4],[19,4],[19,6],[22,6]],[[2,10],[6,10],[6,7],[11,7],[11,11],[16,11],[16,8],[19,8],[19,6],[22,6]]],gen:{level:16,n:20,boss:{10:["kurushima",1],20:["shimazu",0]},weights:{sam:1.6,cav:1.2}}},s21:{id:"s21",name:"순천 왜교성 전투",date:"1598년 11월",season:"autumn",base:"순천 진영",desc:"바다와 뭍에서 동시에 에워싼 왜교성. 성에서 뛰쳐나오는 고니시의 결사대를 막아라.",region:{x:151,y:388},startGold:500,hpGrowth:.1,grid:lt({seed:21,sea:{side:"bottom",depth:2},wall:{side:"right",w:2},houses:[[1,1],[2,1]]}),paths:[[[21,1],[16,1],[16,4],[12,4],[12,1],[7,1],[7,4],[3,4],[3,6],[1,6]],[[21,10],[17,10],[17,7],[12,7],[12,10],[7,10],[7,7],[3,7],[3,6],[1,6]]],gen:{level:17,n:20,boss:{10:["so",1],20:["konishi",0]},weights:{tep:1.4,nin:1.4}}},s22:{id:"s22",name:"노량 해전",date:"1598년 11월",season:"sea",base:"노량 수영",desc:'"나의 죽음을 적에게 알리지 말라." 7년 전쟁의 마지막 바다. 물러가는 왜 수군을 끝까지 쫓아 막아라.',region:{x:163,y:385},startGold:520,hpGrowth:.1,night:!0,grid:lt({seed:22,land:[[0,0,23,2],[0,5,23,8],[0,11,23,13]],trees:.3}),paths:[[[24,1],[3,1],[3,6],[20,6],[20,12],[1,12]]],gen:{level:18,n:21,boss:{11:"kuki",21:"shimazu"},weights:{sco:1.3,nin:1.5,cav:1.2}}},s23:{id:"s23",name:"대마도 정벌",date:"가상 · 1599년",season:"sea",base:"조선 수군 진영",desc:"세종 때처럼 다시 대마도로! 침략의 길잡이 섬에 상륙한 조선군 진영을 지켜라. (역사를 바꾼 가상 전장)",region:{x:226,y:412},startGold:540,hpGrowth:.1,grid:lt({seed:23,land:[[1,1,22,12]],trees:.5,inner:8,houses:[[20,2],[21,2],[20,3]]}),paths:[[[24,12],[18,12],[18,8],[12,8],[12,11],[5,11],[5,4],[16,4],[16,2],[21,2]]],gen:{level:19,n:21,boss:{11:"todo",21:"so"},weights:{nin:1.6,onm:1.4}}},s24:{id:"s24",name:"현해탄 상륙전",date:"가상 · 1599년",season:"summer",base:"상륙 진지",desc:"현해탄을 건너 규슈 바닷가에 발을 디뎠다. 사방에서 몰려드는 정예 무사들을 해변 진지에서 버텨라. (가상 전장)",region:{x:246,y:436},startGold:560,hpGrowth:.1,grid:lt({seed:24,sea:{side:"left",depth:2},mountains:{side:"right",depth:1},flowers:5}),paths:[[[22,-1],[22,2],[17,2],[17,5],[12,5],[12,1],[8,1],[8,4],[5,4],[5,6]],[[22,14],[22,11],[17,11],[17,8],[12,8],[12,12],[8,12],[8,8],[5,8],[5,6]]],gen:{level:21,n:22,boss:{11:["kuki",1],22:["ishida",0]},weights:{sam:1.5,arm:1.3,cav:1.2}}},s25:{id:"s25",name:"나고야성 최후의 결전",date:"가상 · 1599년",season:"autumn",base:"조선군 본진",desc:"침략의 본영 히젠 나고야성. 네 명의 대장을 차례로 꺾고 나면 마침내 그가 성문을 나선다. 초반에는 두 길이 갈라지기 전 굽이에 영웅을 배치하라. 마지막 결전에서는 은신 탐지를 유지하고, 기여가 적은 유산을 철거해 강한 단일 공격의 특화 유산에 재투자하라.",region:{x:246,y:452},startGold:600,hpGrowth:.1,finale:!0,grid:lt({seed:25,wall:{side:"top",w:1},mountains:{side:"bottom",depth:1},houses:[[1,6],[1,7],[2,6]]}),paths:[[[21,1],[21,5],[16,5],[16,2],[11,2],[11,5],[7,5],[7,2],[3,2],[3,7]],[[21,1],[21,9],[16,9],[16,12],[11,12],[11,9],[7,9],[7,12],[3,12],[3,7]]],gen:{level:23,n:24,weights:{sam:1.4,arm:1.3,onm:1.2},boss:{6:["konishi",0],12:["kato",1],17:["ukita",0],21:["shimazu",1]},final:"hideyoshi>0"}}},y1={s1:1,s6:2.26,s7:1.43,s2:1.78,s8:3.11,s9:1.14,s10:1.58,s3:1.63,s11:1.49,s12:1.14,s13:2.02,s4:1.65,s5:1.49,s14:1.38,s15:.97,s16:3.48,s17:2.76,s18:3.97,s19:3.68,s20:2.24,s21:3.2,s22:3.66,s23:4.3,s24:2.26,s25:2.85},b1=[{name:"제1장 · 임진년의 봄",stages:["s1","s6","s7","s2","s8"]},{name:"제2장 · 바다와 성",stages:["s9","s10","s3","s11","s12"]},{name:"제3장 · 반격",stages:["s13","s4","s5","s14","s15"]},{name:"제4장 · 정유재란",stages:["s16","s17","s18","s19","s20"]},{name:"제5장 · 최후의 결전",stages:["s21","s22","s23","s24","s25"]}];function M1(i){let e=i.gen,t=$l({seed:S1(i.id),n:e.n,level:e.level,weights:e.weights,boss:e.boss,paths:i.paths.length,budget:e.budget||1});return e.final&&(t[t.length-1]=e.final),{unlockTowers:[],...i,waves:t}}function S1(i){let e=7;for(let t of i)e=e*31+t.charCodeAt(0)>>>0;return e}var jl=Object.fromEntries([...x1.map(i=>[i.id,i]),...Object.values(v1).map(i=>[i.id,M1(i)])]),Ih=b1.flatMap((i,e)=>i.stages.map(t=>({...jl[t],chapter:e,hpBase:y1[t]??jl[t].hpBase}))).map((i,e)=>({...i,bossHp:.9+.045*e})),Kw=Object.fromEntries(Ih.map(i=>[i.id,i]));function Ql(i){return i.split(",").map(e=>{let t=e.trim(),n=t.match(/^([a-z_]+)(?:\*(\d+))?(?:@([\d.]+))?((?:[+>][\d.a]+)*)$/);if(!n)throw new Error("잘못된 웨이브 문법: "+t);let r=Jl[n[1]]||n[1],o=(n[4].match(/\+([\d.]+)/)||[])[1],s=(n[4].match(/>([0-9a])/)||[])[1];return{type:r,n:n[2]?+n[2]:1,gap:n[3]?+n[3]:1,delay:o?+o:0,path:s===void 0||s==="a"?"a":+s}})}var ef={volley:{name:"조총 일제사격",minStage:1,bonus:40,desc:"조총병이 추가로 투입되고, 조총 피해가 50% 증가한다.",counter:"영웅을 조총 사거리 밖에 두거나 궁수로 먼저 제거하라.",add:[{type:"teppo",n:8,gap:.6}],teppoDmg:1.5},night:{name:"야습(夜襲)",minStage:2,bonus:60,desc:"밤이 된다. 모든 유산 사거리 -15%, 시노비 4명 추가.",counter:"첨성대와 봉수 경보로 은신을 드러내라.",add:[{type:"ninja",n:4,gap:1.2}],rangeMult:.85},march:{name:"강행군",minStage:1,bonus:40,desc:"이번 파도 왜군 이동 속도 +25%, 체력 -10%.",counter:"보신각·해인사로 발을 묶어라.",speedMult:1.25,hpMult:.9},iron:{name:"철갑 행렬",minStage:1,bonus:50,desc:"이번 파도 왜군 갑옷 +15%p.",counter:"해인사로 갑옷을 깎고 신성·화기 피해로 상대하라.",armorAdd:.15},cavalry:{name:"기마 돌격",minStage:2,bonus:50,desc:"기마무사 6명이 뒤따라 돌격한다.",counter:"기병은 저지되지 않는다. 둔화와 범위 피해를 준비하라.",add:[{type:"cavalry",n:6,gap:1,delay:6}]},hex:{name:"음양 결계",minStage:3,bonus:50,desc:"음양사 3명 추가. 이번 파도 왜군 신성 저항 +20%p.",counter:"물리·화기 유산 비중을 높여라.",add:[{type:"onmyoji",n:3,gap:2,delay:3}],resistAdd:.2}};function tf(i,e=null){if(e)return{enemy:[...new Set(e.enemy??[])],ally:[...new Set(e.ally??[])]};if(!i)return{enemy:[],ally:[]};let t=new Set,n=Math.max(1,Ih.findIndex(r=>r.id===i.id)+1);for(let r of i.waves??[])for(let o of Ql(r))t.add(o.type);for(let r of Object.values(ef))if(r.minStage<=n)for(let o of r.add??[])t.add(o.type);for(let r of t){let o=Zl[r];if(o)for(let s of[o.spawnOnDeath,o.boss?.summon,...o.boss?.phaseSummon??[]])s&&t.add(s.type)}return{enemy:[...t],ally:["militia","guard","elite","monk","courier","turtle"]}}var nf={yi_white:{path:"assets/3d/fixed/skins/yi_white-directions-v2.webp",width:1232,height:1277,frames:[{left:67,top:68,width:209,height:260,anchor:.502999,anchorY:1,referenceHeight:256.5},{left:385,top:71,width:181,height:254,anchor:.465024,anchorY:1,referenceHeight:256.5},{left:666,top:71,width:188,height:254,anchor:.514575,anchorY:1,referenceHeight:256.5},{left:951,top:68,width:200,height:259,anchor:.492754,anchorY:1,referenceHeight:256.5},{left:62,top:363,width:218,height:263,anchor:.572412,anchorY:1,referenceHeight:256.5},{left:380,top:364,width:188,height:260,anchor:.472593,anchorY:1,referenceHeight:256.5},{left:665,top:363,width:196,height:263,anchor:.516281,anchorY:1,referenceHeight:256.5},{left:957,top:364,width:204,height:262,anchor:.392027,anchorY:1,referenceHeight:256.5},{left:66,top:655,width:214,height:258,anchor:.561478,anchorY:1,referenceHeight:256.5},{left:380,top:656,width:184,height:259,anchor:.475719,anchorY:1,referenceHeight:256.5},{left:667,top:656,width:193,height:261,anchor:.487039,anchorY:1,referenceHeight:256.5},{left:951,top:657,width:211,height:257,anchor:.42222,anchorY:1,referenceHeight:256.5},{left:52,top:946,width:260,height:252,anchor:.462826,anchorY:1,referenceHeight:256.5},{left:377,top:948,width:228,height:254,anchor:.393381,anchorY:1,referenceHeight:256.5},{left:647,top:948,width:239,height:248,anchor:.546559,anchorY:1,referenceHeight:256.5},{left:933,top:946,width:256,height:250,anchor:.511141,anchorY:1,referenceHeight:256.5}]},yi_gold:{path:"assets/3d/fixed/skins/yi_gold-directions-v2.webp",width:1232,height:1277,frames:[{left:79,top:83,width:201,height:239,anchor:.5006,anchorY:1,referenceHeight:235.5},{left:385,top:83,width:180,height:232,anchor:.456632,anchorY:1,referenceHeight:235.5},{left:670,top:83,width:184,height:232,anchor:.509842,anchorY:1,referenceHeight:235.5},{left:972,top:83,width:181,height:239,anchor:.478022,anchorY:1,referenceHeight:235.5},{left:82,top:376,width:205,height:242,anchor:.564905,anchorY:1,referenceHeight:235.5},{left:387,top:375,width:185,height:244,anchor:.472981,anchorY:1,referenceHeight:235.5},{left:669,top:374,width:190,height:245,anchor:.498821,anchorY:1,referenceHeight:235.5},{left:970,top:374,width:183,height:244,anchor:.398078,anchorY:1,referenceHeight:235.5},{left:79,top:661,width:207,height:242,anchor:.585206,anchorY:1,referenceHeight:235.5},{left:384,top:661,width:178,height:244,anchor:.458584,anchorY:1,referenceHeight:235.5},{left:670,top:660,width:185,height:244,anchor:.502544,anchorY:1,referenceHeight:235.5},{left:963,top:661,width:199,height:242,anchor:.410266,anchorY:1,referenceHeight:235.5},{left:58,top:955,width:242,height:236,anchor:.45606,anchorY:1,referenceHeight:235.5},{left:371,top:956,width:214,height:241,anchor:.423276,anchorY:1,referenceHeight:235.5},{left:646,top:954,width:228,height:238,anchor:.508329,anchorY:1,referenceHeight:235.5},{left:948,top:957,width:229,height:234,anchor:.525121,anchorY:1,referenceHeight:235.5}]},sejong_blue:{path:"assets/3d/fixed/skins/sejong_blue-directions-v2.webp",width:1232,height:1277,frames:[{left:96,top:90,width:174,height:238,anchor:.505103,anchorY:1,referenceHeight:238},{left:400,top:91,width:153,height:237,anchor:.464448,anchorY:1,referenceHeight:238},{left:678,top:90,width:149,height:238,anchor:.530764,anchorY:1,referenceHeight:238},{left:969,top:88,width:163,height:240,anchor:.476784,anchorY:1,referenceHeight:238},{left:87,top:387,width:178,height:246,anchor:.521949,anchorY:1,referenceHeight:238},{left:386,top:386,width:164,height:253,anchor:.498383,anchorY:1,referenceHeight:238},{left:684,top:387,width:164,height:253,anchor:.512865,anchorY:1,referenceHeight:238},{left:973,top:386,width:174,height:251,anchor:.466586,anchorY:1,referenceHeight:238},{left:76,top:681,width:190,height:249,anchor:.548796,anchorY:1,referenceHeight:238},{left:396,top:682,width:161,height:249,anchor:.481071,anchorY:1,referenceHeight:238},{left:689,top:681,width:160,height:252,anchor:.514123,anchorY:1,referenceHeight:238},{left:971,top:680,width:181,height:256,anchor:.450948,anchorY:1,referenceHeight:238},{left:93,top:967,width:197,height:238,anchor:.411903,anchorY:1,referenceHeight:238},{left:377,top:969,width:197,height:241,anchor:.408948,anchorY:1,referenceHeight:238},{left:660,top:972,width:206,height:238,anchor:.59139,anchorY:1,referenceHeight:238},{left:938,top:968,width:197,height:236,anchor:.605131,anchorY:1,referenceHeight:238}]},sejong_gold:{path:"assets/3d/fixed/skins/sejong_gold-directions-v2.webp",width:1232,height:1277,frames:[{left:103,top:87,width:186,height:248,anchor:.512843,anchorY:1,referenceHeight:247},{left:404,top:87,width:153,height:246,anchor:.467145,anchorY:1,referenceHeight:247},{left:666,top:87,width:160,height:245,anchor:.527329,anchorY:1,referenceHeight:247},{left:955,top:86,width:167,height:250,anchor:.458335,anchorY:1,referenceHeight:247},{left:94,top:386,width:190,height:255,anchor:.508472,anchorY:1,referenceHeight:247},{left:398,top:388,width:172,height:255,anchor:.497175,anchorY:1,referenceHeight:247},{left:666,top:386,width:165,height:259,anchor:.521952,anchorY:1,referenceHeight:247},{left:955,top:390,width:178,height:256,anchor:.476612,anchorY:1,referenceHeight:247},{left:85,top:688,width:202,height:253,anchor:.550913,anchorY:1,referenceHeight:247},{left:398,top:687,width:165,height:251,anchor:.500212,anchorY:1,referenceHeight:247},{left:668,top:686,width:164,height:255,anchor:.515579,anchorY:1,referenceHeight:247},{left:957,top:690,width:187,height:258,anchor:.449307,anchorY:1,referenceHeight:247},{left:93,top:978,width:209,height:239,anchor:.41347,anchorY:1,referenceHeight:247},{left:384,top:978,width:205,height:244,anchor:.418648,anchorY:1,referenceHeight:247},{left:646,top:978,width:202,height:244,anchor:.575493,anchorY:1,referenceHeight:247},{left:930,top:977,width:203,height:240,anchor:.598142,anchorY:1,referenceHeight:247}]},eulji_iron:{path:"assets/3d/fixed/skins/eulji_iron-directions-v1.webp",width:1232,height:1277,frames:[{left:59,top:94,width:167,height:208,anchor:.571386,anchorY:1,referenceHeight:207.5},{left:376,top:95,width:170,height:207,anchor:.499112,anchorY:1,referenceHeight:207.5},{left:695,top:94,width:165,height:205,anchor:.493816,anchorY:1,referenceHeight:207.5},{left:1011,top:94,width:162,height:208,anchor:.447838,anchorY:1,referenceHeight:207.5},{left:55,top:395,width:182,height:231,anchor:.656626,anchorY:1,referenceHeight:207.5},{left:376,top:396,width:182,height:230,anchor:.503934,anchorY:1,referenceHeight:207.5},{left:690,top:394,width:178,height:235,anchor:.46906,anchorY:1,referenceHeight:207.5},{left:1010,top:398,width:174,height:230,anchor:.307783,anchorY:1,referenceHeight:207.5},{left:57,top:702,width:180,height:216,anchor:.657381,anchorY:1,referenceHeight:207.5},{left:376,top:702,width:183,height:222,anchor:.428624,anchorY:1,referenceHeight:207.5},{left:686,top:703,width:182,height:223,anchor:.531088,anchorY:1,referenceHeight:207.5},{left:1013,top:704,width:170,height:214,anchor:.350108,anchorY:1,referenceHeight:207.5},{left:56,top:996,width:244,height:199,anchor:.424997,anchorY:1,referenceHeight:207.5},{left:371,top:1e3,width:220,height:205,anchor:.404568,anchorY:1,referenceHeight:207.5},{left:647,top:999,width:221,height:204,anchor:.568404,anchorY:1,referenceHeight:207.5},{left:943,top:992,width:241,height:203,anchor:.558682,anchorY:1,referenceHeight:207.5}]},eulji_gold:{path:"assets/3d/fixed/skins/eulji_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:57,top:92,width:171,height:211,anchor:.560129,anchorY:1,referenceHeight:210.5},{left:381,top:90,width:174,height:213,anchor:.500873,anchorY:1,referenceHeight:210.5},{left:681,top:91,width:171,height:209,anchor:.503765,anchorY:1,referenceHeight:210.5},{left:1009,top:92,width:170,height:210,anchor:.442674,anchorY:1,referenceHeight:210.5},{left:48,top:373,width:184,height:233,anchor:.610114,anchorY:1,referenceHeight:210.5},{left:379,top:373,width:177,height:233,anchor:.530131,anchorY:1,referenceHeight:210.5},{left:681,top:378,width:177,height:233,anchor:.48567,anchorY:1,referenceHeight:210.5},{left:1003,top:374,width:182,height:232,anchor:.362626,anchorY:1,referenceHeight:210.5},{left:55,top:688,width:184,height:221,anchor:.631223,anchorY:1,referenceHeight:210.5},{left:376,top:683,width:184,height:228,anchor:.422585,anchorY:1,referenceHeight:210.5},{left:680,top:691,width:183,height:228,anchor:.530534,anchorY:1,referenceHeight:210.5},{left:1e3,top:686,width:179,height:220,anchor:.383177,anchorY:1,referenceHeight:210.5},{left:53,top:988,width:247,height:205,anchor:.419221,anchorY:1,referenceHeight:210.5},{left:375,top:990,width:223,height:210,anchor:.396568,anchorY:1,referenceHeight:210.5},{left:638,top:988,width:226,height:210,anchor:.566218,anchorY:1,referenceHeight:210.5},{left:933,top:988,width:246,height:203,anchor:.570058,anchorY:1,referenceHeight:210.5}]},gang_crimson:{path:"assets/3d/fixed/skins/gang_crimson-directions-v1.webp",width:1232,height:1277,frames:[{left:29,top:31,width:262,height:297,anchor:.547801,anchorY:1,referenceHeight:294},{left:344,top:32,width:261,height:293,anchor:.494162,anchorY:1,referenceHeight:294},{left:674,top:34,width:237,height:292,anchor:.453607,anchorY:1,referenceHeight:294},{left:950,top:33,width:265,height:295,anchor:.482616,anchorY:1,referenceHeight:294},{left:26,top:340,width:261,height:298,anchor:.59419,anchorY:1,referenceHeight:294},{left:353,top:339,width:226,height:302,anchor:.57606,anchorY:1,referenceHeight:294},{left:670,top:340,width:235,height:302,anchor:.428216,anchorY:1,referenceHeight:294},{left:954,top:340,width:259,height:297,anchor:.369767,anchorY:1,referenceHeight:294},{left:36,top:655,width:236,height:286,anchor:.615482,anchorY:1,referenceHeight:294},{left:343,top:651,width:222,height:295,anchor:.537968,anchorY:1,referenceHeight:294},{left:683,top:653,width:214,height:295,anchor:.444902,anchorY:1,referenceHeight:294},{left:976,top:656,width:229,height:292,anchor:.345983,anchorY:1,referenceHeight:294},{left:23,top:961,width:285,height:267,anchor:.467391,anchorY:1,referenceHeight:294},{left:334,top:959,width:280,height:268,anchor:.454773,anchorY:1,referenceHeight:294},{left:647,top:958,width:263,height:271,anchor:.531438,anchorY:1,referenceHeight:294},{left:946,top:965,width:270,height:263,anchor:.462578,anchorY:1,referenceHeight:294}]},gang_gold:{path:"assets/3d/fixed/skins/gang_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:26,top:30,width:266,height:297,anchor:.545031,anchorY:1,referenceHeight:294},{left:342,top:31,width:262,height:292,anchor:.492586,anchorY:1,referenceHeight:294},{left:673,top:33,width:240,height:292,anchor:.464078,anchorY:1,referenceHeight:294},{left:949,top:32,width:270,height:296,anchor:.48249,anchorY:1,referenceHeight:294},{left:27,top:338,width:260,height:300,anchor:.588292,anchorY:1,referenceHeight:294},{left:355,top:339,width:225,height:302,anchor:.581552,anchorY:1,referenceHeight:294},{left:670,top:340,width:235,height:302,anchor:.426124,anchorY:1,referenceHeight:294},{left:955,top:339,width:261,height:298,anchor:.369495,anchorY:1,referenceHeight:294},{left:36,top:657,width:236,height:284,anchor:.616726,anchorY:1,referenceHeight:294},{left:343,top:653,width:223,height:293,anchor:.542092,anchorY:1,referenceHeight:294},{left:683,top:653,width:214,height:295,anchor:.444854,anchorY:1,referenceHeight:294},{left:974,top:655,width:235,height:292,anchor:.350274,anchorY:1,referenceHeight:294},{left:24,top:959,width:282,height:267,anchor:.471659,anchorY:1,referenceHeight:294},{left:329,top:958,width:284,height:269,anchor:.462414,anchorY:1,referenceHeight:294},{left:642,top:957,width:272,height:273,anchor:.531699,anchorY:1,referenceHeight:294},{left:947,top:964,width:270,height:261,anchor:.459931,anchorY:1,referenceHeight:294}]},gwon_hill:{path:"assets/3d/fixed/skins/gwon_hill-directions-v1.webp",width:1254,height:1254,frames:[{left:76,top:59,width:223,height:254,anchor:.534367,anchorY:1,referenceHeight:255},{left:392,top:58,width:182,height:256,anchor:.515826,anchorY:1,referenceHeight:255},{left:674,top:59,width:192,height:252,anchor:.466782,anchorY:1,referenceHeight:255},{left:963,top:58,width:220,height:257,anchor:.456555,anchorY:1,referenceHeight:255},{left:80,top:347,width:219,height:261,anchor:.518259,anchorY:1,referenceHeight:255},{left:388,top:349,width:192,height:263,anchor:.493011,anchorY:1,referenceHeight:255},{left:688,top:350,width:186,height:261,anchor:.443,anchorY:1,referenceHeight:255},{left:962,top:347,width:219,height:262,anchor:.47598,anchorY:1,referenceHeight:255},{left:72,top:639,width:223,height:261,anchor:.553839,anchorY:1,referenceHeight:255},{left:381,top:640,width:196,height:263,anchor:.484528,anchorY:1,referenceHeight:255},{left:685,top:640,width:193,height:262,anchor:.491582,anchorY:1,referenceHeight:255},{left:966,top:639,width:223,height:263,anchor:.44936,anchorY:1,referenceHeight:255},{left:50,top:942,width:274,height:240,anchor:.452655,anchorY:1,referenceHeight:255},{left:365,top:941,width:245,height:241,anchor:.394156,anchorY:1,referenceHeight:255},{left:647,top:942,width:240,height:240,anchor:.568054,anchorY:1,referenceHeight:255},{left:931,top:943,width:276,height:241,anchor:.535279,anchorY:1,referenceHeight:255}]},gwon_gold:{path:"assets/3d/fixed/skins/gwon_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:68,top:61,width:231,height:264,anchor:.524076,anchorY:1,referenceHeight:263.5},{left:385,top:62,width:194,height:263,anchor:.523322,anchorY:1,referenceHeight:263.5},{left:655,top:64,width:199,height:261,anchor:.461837,anchorY:1,referenceHeight:263.5},{left:945,top:60,width:219,height:267,anchor:.466867,anchorY:1,referenceHeight:263.5},{left:66,top:353,width:228,height:266,anchor:.527961,anchorY:1,referenceHeight:263.5},{left:381,top:357,width:194,height:264,anchor:.474564,anchorY:1,referenceHeight:263.5},{left:670,top:358,width:193,height:263,anchor:.470551,anchorY:1,referenceHeight:263.5},{left:945,top:353,width:229,height:268,anchor:.460764,anchorY:1,referenceHeight:263.5},{left:59,top:656,width:232,height:269,anchor:.557458,anchorY:1,referenceHeight:263.5},{left:378,top:662,width:201,height:267,anchor:.45728,anchorY:1,referenceHeight:263.5},{left:661,top:663,width:196,height:265,anchor:.525769,anchorY:1,referenceHeight:263.5},{left:947,top:657,width:230,height:270,anchor:.443978,anchorY:1,referenceHeight:263.5},{left:48,top:968,width:282,height:247,anchor:.440406,anchorY:1,referenceHeight:263.5},{left:367,top:971,width:244,height:245,anchor:.375811,anchorY:1,referenceHeight:263.5},{left:633,top:972,width:235,height:243,anchor:.580245,anchorY:1,referenceHeight:263.5},{left:912,top:968,width:274,height:245,anchor:.550714,anchorY:1,referenceHeight:263.5}]},gwak_black:{path:"assets/3d/fixed/skins/gwak_black-directions-v1.webp",width:1230,height:1278,frames:[{left:84,top:74,width:172,height:248,anchor:.492582,anchorY:1,referenceHeight:246.5},{left:402,top:73,width:148,height:246,anchor:.474569,anchorY:1,referenceHeight:246.5},{left:680,top:74,width:151,height:245,anchor:.500797,anchorY:1,referenceHeight:246.5},{left:972,top:74,width:166,height:247,anchor:.486733,anchorY:1,referenceHeight:246.5},{left:80,top:383,width:180,height:250,anchor:.537712,anchorY:1,referenceHeight:246.5},{left:397,top:382,width:165,height:255,anchor:.467086,anchorY:1,referenceHeight:246.5},{left:678,top:383,width:171,height:251,anchor:.517215,anchorY:1,referenceHeight:246.5},{left:973,top:383,width:184,height:249,anchor:.399116,anchorY:1,referenceHeight:246.5},{left:71,top:683,width:193,height:254,anchor:.53595,anchorY:1,referenceHeight:246.5},{left:392,top:685,width:176,height:256,anchor:.432033,anchorY:1,referenceHeight:246.5},{left:676,top:688,width:184,height:250,anchor:.489655,anchorY:1,referenceHeight:246.5},{left:971,top:684,width:195,height:255,anchor:.452416,anchorY:1,referenceHeight:246.5},{left:76,top:984,width:219,height:240,anchor:.427036,anchorY:1,referenceHeight:246.5},{left:387,top:973,width:190,height:256,anchor:.43596,anchorY:1,referenceHeight:246.5},{left:675,top:977,width:189,height:252,anchor:.538061,anchorY:1,referenceHeight:246.5},{left:947,top:985,width:212,height:239,anchor:.550277,anchorY:1,referenceHeight:246.5}]},gwak_gold:{path:"assets/3d/fixed/skins/gwak_gold-directions-v1.webp",width:1230,height:1278,frames:[{left:68,top:52,width:191,height:267,anchor:.493775,anchorY:1,referenceHeight:266.5},{left:387,top:50,width:161,height:269,anchor:.459058,anchorY:1,referenceHeight:266.5},{left:677,top:53,width:169,height:265,anchor:.518178,anchorY:1,referenceHeight:266.5},{left:970,top:53,width:177,height:266,anchor:.47891,anchorY:1,referenceHeight:266.5},{left:66,top:365,width:194,height:273,anchor:.552925,anchorY:1,referenceHeight:266.5},{left:373,top:364,width:181,height:281,anchor:.469801,anchorY:1,referenceHeight:266.5},{left:677,top:364,width:185,height:277,anchor:.521707,anchorY:1,referenceHeight:266.5},{left:979,top:364,width:196,height:273,anchor:.382924,anchorY:1,referenceHeight:266.5},{left:66,top:676,width:204,height:268,anchor:.534367,anchorY:1,referenceHeight:266.5},{left:375,top:676,width:189,height:275,anchor:.426754,anchorY:1,referenceHeight:266.5},{left:673,top:678,width:192,height:266,anchor:.517008,anchorY:1,referenceHeight:266.5},{left:962,top:677,width:204,height:270,anchor:.44875,anchorY:1,referenceHeight:266.5},{left:56,top:973,width:238,height:257,anchor:.424246,anchorY:1,referenceHeight:266.5},{left:368,top:961,width:210,height:274,anchor:.436976,anchorY:1,referenceHeight:266.5},{left:650,top:963,width:215,height:277,anchor:.547014,anchorY:1,referenceHeight:266.5},{left:941,top:973,width:231,height:260,anchor:.552417,anchorY:1,referenceHeight:266.5}]},ahn_militia:{path:"assets/3d/fixed/skins/ahn_militia-directions-v1.webp",width:1232,height:1277,frames:[{left:84,top:77,width:166,height:244,anchor:.518786,anchorY:1,referenceHeight:244.5},{left:389,top:78,width:174,height:243,anchor:.500173,anchorY:1,referenceHeight:244.5},{left:679,top:78,width:172,height:245,anchor:.469344,anchorY:1,referenceHeight:244.5},{left:986,top:76,width:159,height:245,anchor:.479465,anchorY:1,referenceHeight:244.5},{left:77,top:374,width:168,height:249,anchor:.527389,anchorY:1,referenceHeight:244.5},{left:388,top:375,width:171,height:256,anchor:.414847,anchorY:1,referenceHeight:244.5},{left:698,top:375,width:157,height:255,anchor:.512197,anchorY:1,referenceHeight:244.5},{left:993,top:373,width:160,height:253,anchor:.467324,anchorY:1,referenceHeight:244.5},{left:80,top:677,width:170,height:246,anchor:.510671,anchorY:1,referenceHeight:244.5},{left:387,top:677,width:173,height:253,anchor:.4727,anchorY:1,referenceHeight:244.5},{left:700,top:677,width:156,height:254,anchor:.468309,anchorY:1,referenceHeight:244.5},{left:989,top:676,width:166,height:250,anchor:.466436,anchorY:1,referenceHeight:244.5},{left:73,top:979,width:232,height:232,anchor:.437488,anchorY:1,referenceHeight:244.5},{left:376,top:977,width:214,height:233,anchor:.430029,anchorY:1,referenceHeight:244.5},{left:649,top:976,width:209,height:235,anchor:.541053,anchorY:1,referenceHeight:244.5},{left:936,top:976,width:227,height:240,anchor:.573105,anchorY:1,referenceHeight:244.5}]},ahn_gold:{path:"assets/3d/fixed/skins/ahn_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:77,top:67,width:172,height:254,anchor:.523402,anchorY:1,referenceHeight:250.5},{left:379,top:71,width:174,height:246,anchor:.529271,anchorY:1,referenceHeight:250.5},{left:689,top:72,width:173,height:248,anchor:.464005,anchorY:1,referenceHeight:250.5},{left:986,top:68,width:161,height:253,anchor:.463834,anchorY:1,referenceHeight:250.5},{left:74,top:377,width:167,height:253,anchor:.564375,anchorY:1,referenceHeight:250.5},{left:385,top:378,width:171,height:255,anchor:.41694,anchorY:1,referenceHeight:250.5},{left:698,top:377,width:158,height:259,anchor:.513573,anchorY:1,referenceHeight:250.5},{left:991,top:376,width:163,height:255,anchor:.450959,anchorY:1,referenceHeight:250.5},{left:78,top:679,width:169,height:250,anchor:.566424,anchorY:1,referenceHeight:250.5},{left:382,top:680,width:181,height:255,anchor:.458653,anchorY:1,referenceHeight:250.5},{left:693,top:684,width:162,height:253,anchor:.479444,anchorY:1,referenceHeight:250.5},{left:989,top:682,width:167,height:248,anchor:.43832,anchorY:1,referenceHeight:250.5},{left:68,top:981,width:233,height:229,anchor:.412357,anchorY:1,referenceHeight:250.5},{left:370,top:981,width:216,height:230,anchor:.427795,anchorY:1,referenceHeight:250.5},{left:647,top:980,width:221,height:232,anchor:.55273,anchorY:1,referenceHeight:250.5},{left:936,top:981,width:230,height:234,anchor:.574507,anchorY:1,referenceHeight:250.5}]},dangun_sky:{path:"assets/3d/fixed/skins/dangun_sky-directions-v1.webp",width:1231,height:1277,frames:[{left:69,top:89,width:179,height:238,anchor:.520614,anchorY:1,referenceHeight:236.5},{left:375,top:92,width:176,height:236,anchor:.562855,anchorY:1,referenceHeight:236.5},{left:679,top:91,width:175,height:237,anchor:.423567,anchorY:1,referenceHeight:236.5},{left:983,top:91,width:178,height:236,anchor:.470293,anchorY:1,referenceHeight:236.5},{left:65,top:391,width:180,height:245,anchor:.568574,anchorY:1,referenceHeight:236.5},{left:373,top:389,width:180,height:250,anchor:.517191,anchorY:1,referenceHeight:236.5},{left:682,top:392,width:176,height:248,anchor:.466686,anchorY:1,referenceHeight:236.5},{left:985,top:391,width:180,height:244,anchor:.408409,anchorY:1,referenceHeight:236.5},{left:59,top:693,width:181,height:237,anchor:.592857,anchorY:1,referenceHeight:236.5},{left:376,top:689,width:188,height:242,anchor:.510405,anchorY:1,referenceHeight:236.5},{left:676,top:689,width:179,height:242,anchor:.46072,anchorY:1,referenceHeight:236.5},{left:990,top:694,width:179,height:235,anchor:.405559,anchorY:1,referenceHeight:236.5},{left:52,top:974,width:232,height:231,anchor:.466313,anchorY:1,referenceHeight:236.5},{left:367,top:975,width:214,height:233,anchor:.442921,anchorY:1,referenceHeight:236.5},{left:654,top:977,width:209,height:232,anchor:.535644,anchorY:1,referenceHeight:236.5},{left:949,top:975,width:229,height:230,anchor:.532757,anchorY:1,referenceHeight:236.5}]},dangun_gold:{path:"assets/3d/fixed/skins/dangun_gold-directions-v1.webp",width:1232,height:1277,frames:[{left:67,top:93,width:181,height:237,anchor:.517983,anchorY:1,referenceHeight:237},{left:380,top:95,width:178,height:237,anchor:.549466,anchorY:1,referenceHeight:237},{left:687,top:94,width:175,height:237,anchor:.425451,anchorY:1,referenceHeight:237},{left:984,top:93,width:181,height:237,anchor:.467242,anchorY:1,referenceHeight:237},{left:64,top:394,width:174,height:242,anchor:.571118,anchorY:1,referenceHeight:237},{left:374,top:394,width:185,height:247,anchor:.481896,anchorY:1,referenceHeight:237},{left:683,top:398,width:177,height:242,anchor:.474326,anchorY:1,referenceHeight:237},{left:992,top:394,width:175,height:242,anchor:.423303,anchorY:1,referenceHeight:237},{left:59,top:695,width:180,height:236,anchor:.602977,anchorY:1,referenceHeight:237},{left:379,top:694,width:186,height:237,anchor:.51462,anchorY:1,referenceHeight:237},{left:673,top:695,width:177,height:236,anchor:.474269,anchorY:1,referenceHeight:237},{left:989,top:695,width:185,height:235,anchor:.406595,anchorY:1,referenceHeight:237},{left:51,top:975,width:228,height:228,anchor:.468754,anchorY:1,referenceHeight:237},{left:366,top:976,width:213,height:234,anchor:.432484,anchorY:1,referenceHeight:237},{left:654,top:976,width:208,height:234,anchor:.546433,anchorY:1,referenceHeight:237},{left:952,top:976,width:226,height:229,anchor:.524766,anchorY:1,referenceHeight:237}]}};function Ph(i=[]){let e=new Map;for(let t of i)en(t.heroId,t.skin)&&e.set(t.skin,{heroId:t.heroId,skin:t.skin});return[...e.values()].sort((t,n)=>t.skin.localeCompare(n.skin))}function rf(i=[]){return Ph(i).map(e=>e.skin).join(",")}var Br={path:"assets/3d/fixed/season-trees-v1.webp",width:1536,height:1024,frames:[{left:44,top:51,width:458,height:443,anchor:.51031,anchorY:1,referenceHeight:443},{left:553,top:40,width:436,height:456,anchor:.525476,anchorY:1,referenceHeight:456},{left:1029,top:32,width:470,height:465,anchor:.516112,anchorY:1,referenceHeight:465},{left:29,top:536,width:467,height:440,anchor:.620795,anchorY:1,referenceHeight:440},{left:537,top:527,width:453,height:458,anchor:.504335,anchorY:1,referenceHeight:458},{left:1038,top:525,width:469,height:454,anchor:.466093,anchorY:1,referenceHeight:454}],indices:{spring:[0,1],summer:[2,3],autumn:[4,5]}};var T1={spring:"blossom",summer:"broadleaf",autumn:"maple"};function of(i,e,t=0){return i.snow||e!==T1[i.id]?null:Br.indices[i.id]?.[t>=.5?1:0]??null}var sf={temperate:{path:"assets/3d/fixed/village-props-v1.webp",width:1536,height:1024,frames:[{left:46,top:156,width:455,height:305,anchor:.5,anchorY:1,referenceHeight:305},{left:582,top:139,width:382,height:295,anchor:.5,anchorY:1,referenceHeight:295},{left:1045,top:158,width:452,height:310,anchor:.5,anchorY:1,referenceHeight:310},{left:37,top:575,width:465,height:355,anchor:.5,anchorY:1,referenceHeight:355},{left:590,top:565,width:366,height:378,anchor:.5,anchorY:1,referenceHeight:378},{left:1066,top:586,width:425,height:356,anchor:.5,anchorY:1,referenceHeight:356}]},winter:{path:"assets/3d/fixed/village-props-winter-v1.webp",width:1536,height:1024,frames:[{left:44,top:143,width:461,height:321,anchor:.5,anchorY:1,referenceHeight:321},{left:580,top:122,width:386,height:313,anchor:.5,anchorY:1,referenceHeight:313},{left:1044,top:141,width:456,height:330,anchor:.5,anchorY:1,referenceHeight:330},{left:36,top:568,width:474,height:365,anchor:.5,anchorY:1,referenceHeight:365},{left:588,top:559,width:371,height:384,anchor:.5,anchorY:1,referenceHeight:384},{left:1065,top:574,width:431,height:370,anchor:.5,anchorY:1,referenceHeight:370}]}};var A1={villageFence:[0,1],fieldWall:[2,3],villageCargo:[4,5]},af=i=>i.snow?"winter":"temperate",hf=(i,e=0)=>A1[i]?.[e>=.5?1:0]??null,cf=i=>i==="villageCargo"?"supplies":i==="villageFence"||i==="fieldWall"?"wall":null;function lf(i,e){if(!Number.isFinite(e)||e<=0)return 1;let t=i.geometry.attributes.position,n=i.position.clone(),r=0;for(let s=0;s<t.count;s++)n.fromBufferAttribute(t,s).applyQuaternion(i.quaternion),r=Math.max(r,Math.hypot(n.x,n.z));let o=r>e?e/r:1;return i.scale.setScalar(o),o}var kr=(i,e,t)=>Math.max(e,Math.min(t,i)),ni=(i,e)=>Number.isFinite(i)?i:e,Lh=i=>i*i*(3-2*i),E1=i=>i==="cavalry"||i==="courier"?.52:i==="ram"?.48:i==="turtle"?.6:.32,ff=[1,4,2,5],Xs=.12,df=[1,8,4,2,9,5];function H1(i,e,t,n){let r=Math.hypot(e,t);if(!Number.isFinite(r)||r<1e-8)return i??0;if(e/=r,t/=r,i===void 0||n)return t>=0?e>=0?1:2:e>=0?0:3;let o=Math.sin(Math.PI*8/180),s=i<2?e>=-o:e>o;return(i===1||i===2?t>=-o:t>o)?s?1:2:s?0:3}function uf(i,e){let t=ni(e.x,0),n=ni(e.z,0),r=ni(e.time,0),o=kr(ni(e.dt,0),0,.15),s=ni(e.targetX,t),a=ni(e.targetZ,n),c=!i||r<i.lastTime-.1||e.reset||e.resetKey!==i.resetKey,h=c?{x:t,z:n,tx:s,tz:a,lastTime:r,clock:r,phase:0,blend:0,hp:e.hp,seq:void 0,actionStart:-9,duration:.25,hitAt:-9,attack:0,resetKey:e.resetKey}:i,f=Math.hypot(s-h.tx,a-h.tz)>1.25||Math.hypot(t-h.x,n-h.z)>1.25;if((e.frozen||o===0)&&!c&&h.visual)return h.frozenJump=!!h.frozenJump||f,h.x=t,h.z=n,h.tx=s,h.tz=a,h.lastTime=r,h.wasFrozen=!0,{...h.visual,state:h};!e.frozen&&o>0&&(h.clock=h.wasFrozen||r>h.lastTime?Math.max(r,h.clock):Math.min(r+.12,h.clock+o)),h.wasFrozen=!!e.frozen||o===0;let d=!c&&!f&&!e.stunned&&!e.frozen&&o>0?Math.hypot(t-h.x,n-h.z):0,l=f||h.frozenJump;l&&(h.phase=0,h.blend=0,h.stop=null,h.moving=!1,h.frozenJump=!1),d>1e-5&&(h.phase=(h.phase+d/(2*E1(e.kind)))%1),e.stunned?h.blend=0:!e.frozen&&o>0&&(h.blend+=(+(d>1e-5)-h.blend)*(1-Math.exp(-o*18)));let w=Number.isFinite(e.actionSeq)?e.actionSeq>0&&e.actionSeq!==h.seq:e.attack>0&&(h.attack<=0||e.attack>h.attack+.06);w&&(h.actionStart=ni(e.actionAt,h.clock),h.duration=kr(ni(e.actionDuration,e.attack||.25),.12,.6)),Number.isFinite(h.hp)&&Number.isFinite(e.hp)&&e.hp<h.hp&&(h.hitAt=h.clock),h.hp=e.hp,h.seq=e.actionSeq,h.attack=e.attack||0,h.x=t,h.z=n,h.tx=s,h.tz=a,h.lastTime=r;let v=!!(e.longMotion&&e.inbetweens),g=v?.14:.09,p=Math.max(0,h.clock-h.actionStart),M=p<h.duration+g&&!e.stunned,H=M?1-Lh(kr(p/(h.duration+g),0,1)):0,y=h.clock-h.hitAt,S=y>=0&&y<.18?Math.sin(Math.PI*y/.18):0,b=d>1e-5,E=e.kind==="turtle"||e.kind==="ram";b||M||e.stunned||l?h.stop=null:h.moving&&e.inbetweens&&!E&&(v?df:ff).includes(h.visual?.row)?h.stop={elapsed:0,row:h.visual.row,landing:{4:2,5:1,8:1,9:2}[h.visual.row]??h.visual.row,lift:Math.abs(Math.sin(h.phase*Math.PI*2))*.009*h.blend,blend:h.blend}:h.stop&&(h.stop.elapsed+=o),h.moving=b;let _=h.stop?.elapsed??Xs,A=_<Xs,P=A?h.stop.blend*(1-Lh(kr(_/Xs,0,1))):b||!e.inbetweens?h.blend:0,D=h.phase%1,U=D<.3?1:D<.5?0:D<.8?2:0,z=v?df:ff,I=v?p<h.duration*.2?3:p<h.duration*.4?10:p<h.duration*.64?6:p<h.duration?7:11:p<h.duration*.28?3:p<h.duration*.7?6:7,B=e.inbetweens?M?I:A?_<.04?h.stop.row:h.stop.landing:(b||E)&&h.blend>.16?z[Math.min(z.length-1,Math.floor(D*z.length))]:0:M&&p<h.duration*.72?3:h.blend>.16?U:0,Z=e.aimKey!=null&&e.aimKey!==h.aimKey,W=H1(e.stunned?void 0:h.visual?.facing,e.facingX,e.facingY,c||l||w||Z);h.aimKey=e.aimKey;let ne={row:B,phase:h.phase,blend:h.blend,attacking:M,hit:S,facing:W,sign:W<2?1:-1,settling:A,lift:E?0:(A?h.stop.lift*(1-Lh(kr(_/Xs,0,1))):Math.abs(Math.sin(D*Math.PI*2))*.009*P)-S*.008,lean:E?0:.022*P-.045*H-.055*S,recoil:E?0:-.018*H-.022*S};return h.visual=ne,{...ne,state:h}}function Dh(i,e,t,n){let r=Math.floor(e/.9),o=e-r*.9;return{x:i==="walk"?e*1.6:0,z:0,time:e,dt:t,kind:n,actionSeq:i==="attack"?r+1:0,actionAt:r*.9,actionDuration:.25,attack:i==="attack"?Math.max(0,.25-o):0,resetKey:i}}var qs={yi:{heroId:"yi",skin:null,path:"assets/3d/fixed/inbetweens/yi-inbetweens-v1.webp",width:1266,height:1416,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:246,height:296,anchor:.56,anchorY:1,referenceHeight:310},{left:350,top:24,width:211,height:297,anchor:.5,anchorY:1,referenceHeight:310},{left:655,top:24,width:214,height:298,anchor:.5,anchorY:1,referenceHeight:310},{left:962,top:24,width:231,height:298,anchor:.44,anchorY:1,referenceHeight:310},{left:24,top:370,width:256,height:301,anchor:.62,anchorY:1,referenceHeight:310},{left:350,top:370,width:223,height:303,anchor:.49,anchorY:1,referenceHeight:310},{left:655,top:370,width:226,height:305,anchor:.51,anchorY:1,referenceHeight:310},{left:962,top:370,width:249,height:302,anchor:.38,anchorY:1,referenceHeight:310},{left:24,top:723,width:278,height:313,anchor:.5,anchorY:1,referenceHeight:310},{left:350,top:723,width:257,height:311,anchor:.45,anchorY:1,referenceHeight:310},{left:655,top:723,width:259,height:312,anchor:.5,anchorY:1,referenceHeight:310},{left:962,top:723,width:280,height:314,anchor:.5,anchorY:1,referenceHeight:310},{left:24,top:1085,width:244,height:304,anchor:.54,anchorY:1,referenceHeight:310},{left:350,top:1085,width:226,height:302,anchor:.49,anchorY:1,referenceHeight:310},{left:655,top:1085,width:226,height:302,anchor:.51,anchorY:1,referenceHeight:310},{left:962,top:1085,width:233,height:307,anchor:.46,anchorY:1,referenceHeight:310}]},sejong:{heroId:"sejong",skin:null,path:"assets/3d/fixed/inbetweens/sejong-inbetweens-v1.webp",width:1232,height:1460,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:218,height:304,anchor:.53,anchorY:1,referenceHeight:305},{left:338,top:24,width:190,height:304,anchor:.43,anchorY:1,referenceHeight:305},{left:644,top:24,width:191,height:303,anchor:.55,anchorY:1,referenceHeight:305},{left:944,top:24,width:191,height:305,anchor:.47,anchorY:1,referenceHeight:305},{left:24,top:377,width:234,height:319,anchor:.54,anchorY:1,referenceHeight:305},{left:338,top:377,width:199,height:320,anchor:.42,anchorY:1,referenceHeight:305},{left:644,top:377,width:200,height:320,anchor:.55,anchorY:1,referenceHeight:305},{left:944,top:377,width:217,height:321,anchor:.46,anchorY:1,referenceHeight:305},{left:24,top:746,width:266,height:307,anchor:.46,anchorY:1,referenceHeight:305},{left:338,top:746,width:258,height:323,anchor:.43,anchorY:1,referenceHeight:305},{left:644,top:746,width:252,height:319,anchor:.5,anchorY:1,referenceHeight:305},{left:944,top:746,width:264,height:303,anchor:.625,anchorY:1,referenceHeight:305},{left:24,top:1117,width:208,height:319,anchor:.54,anchorY:1,referenceHeight:305},{left:338,top:1117,width:212,height:318,anchor:.5,anchorY:1,referenceHeight:305},{left:644,top:1117,width:206,height:317,anchor:.5,anchorY:1,referenceHeight:305},{left:944,top:1117,width:203,height:316,anchor:.46,anchorY:1,referenceHeight:305}]},eulji:{heroId:"eulji",skin:null,path:"assets/3d/fixed/inbetweens/eulji-inbetweens-v1.webp",width:997,height:976,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:154,height:198,anchor:.65,anchorY:1,referenceHeight:190},{left:277,top:24,width:158,height:199,anchor:.49777,anchorY:1,referenceHeight:190},{left:518,top:24,width:158,height:201,anchor:.509059,anchorY:1,referenceHeight:190},{left:767,top:24,width:156,height:200,anchor:.36,anchorY:1,referenceHeight:190},{left:24,top:273,width:165,height:198,anchor:.63,anchorY:1,referenceHeight:190},{left:277,top:273,width:159,height:199,anchor:.49777,anchorY:1,referenceHeight:190},{left:518,top:273,width:158,height:198,anchor:.509059,anchorY:1,referenceHeight:190},{left:767,top:273,width:166,height:198,anchor:.35,anchorY:1,referenceHeight:190},{left:24,top:520,width:205,height:187,anchor:.424389,anchorY:1,referenceHeight:190},{left:277,top:520,width:193,height:191,anchor:.405173,anchorY:1,referenceHeight:190},{left:518,top:520,width:201,height:194,anchor:.557538,anchorY:1,referenceHeight:190},{left:767,top:520,width:206,height:186,anchor:.561561,anchorY:1,referenceHeight:190},{left:24,top:762,width:164,height:180,anchor:.563421,anchorY:1,referenceHeight:190},{left:277,top:762,width:160,height:184,anchor:.49777,anchorY:1,referenceHeight:190},{left:518,top:762,width:168,height:190,anchor:.509059,anchorY:1,referenceHeight:190},{left:767,top:762,width:167,height:179,anchor:.452595,anchorY:1,referenceHeight:190}]},gang:{heroId:"gang",skin:null,path:"assets/3d/fixed/inbetweens/gang-inbetweens-v1.webp",width:1333,height:1374,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:278,height:291,anchor:.543238,anchorY:1,referenceHeight:293},{left:376,top:24,width:275,height:295,anchor:.494672,anchorY:1,referenceHeight:293},{left:699,top:24,width:254,height:297,anchor:.458745,anchorY:1,referenceHeight:293},{left:1016,top:24,width:280,height:290,anchor:.485671,anchorY:1,referenceHeight:293},{left:24,top:369,width:276,height:309,anchor:.543238,anchorY:1,referenceHeight:293},{left:376,top:369,width:275,height:311,anchor:.494672,anchorY:1,referenceHeight:293},{left:699,top:369,width:253,height:312,anchor:.458745,anchorY:1,referenceHeight:293},{left:1016,top:369,width:293,height:307,anchor:.485671,anchorY:1,referenceHeight:293},{left:24,top:729,width:304,height:274,anchor:.466717,anchorY:1,referenceHeight:293},{left:376,top:729,width:271,height:280,anchor:.449052,anchorY:1,referenceHeight:293},{left:699,top:729,width:269,height:273,anchor:.53166,anchorY:1,referenceHeight:293},{left:1016,top:729,width:283,height:276,anchor:.526119,anchorY:1,referenceHeight:293},{left:24,top:1057,width:268,height:289,anchor:.543238,anchorY:1,referenceHeight:293},{left:376,top:1057,width:266,height:292,anchor:.494672,anchorY:1,referenceHeight:293},{left:699,top:1057,width:246,height:293,anchor:.458745,anchorY:1,referenceHeight:293},{left:1016,top:1057,width:240,height:288,anchor:.485671,anchorY:1,referenceHeight:293}]},gwon:{heroId:"gwon",skin:null,path:"assets/3d/fixed/inbetweens/gwon-inbetweens-v1.webp",width:1322,height:1351,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:251,height:295,anchor:.512638,anchorY:1,referenceHeight:285},{left:380,top:24,width:223,height:297,anchor:.509672,anchorY:1,referenceHeight:285},{left:688,top:24,width:215,height:290,anchor:.463326,anchorY:1,referenceHeight:285},{left:991,top:24,width:245,height:296,anchor:.460919,anchorY:1,referenceHeight:285},{left:24,top:369,width:247,height:306,anchor:.512638,anchorY:1,referenceHeight:285},{left:380,top:369,width:216,height:306,anchor:.509672,anchorY:1,referenceHeight:285},{left:688,top:369,width:209,height:299,anchor:.463326,anchorY:1,referenceHeight:285},{left:991,top:369,width:238,height:305,anchor:.460919,anchorY:1,referenceHeight:285},{left:24,top:723,width:308,height:265,anchor:.44644,anchorY:1,referenceHeight:285},{left:380,top:723,width:260,height:264,anchor:.47,anchorY:1,referenceHeight:285},{left:688,top:723,width:255,height:266,anchor:.552449,anchorY:1,referenceHeight:285},{left:991,top:723,width:307,height:268,anchor:.537893,anchorY:1,referenceHeight:285},{left:24,top:1039,width:278,height:288,anchor:.512638,anchorY:1,referenceHeight:285},{left:380,top:1039,width:254,height:278,anchor:.509672,anchorY:1,referenceHeight:285},{left:688,top:1039,width:247,height:280,anchor:.463326,anchorY:1,referenceHeight:285},{left:991,top:1039,width:275,height:283,anchor:.460919,anchorY:1,referenceHeight:285}]},gwak:{heroId:"gwak",skin:null,path:"assets/3d/fixed/inbetweens/gwak-inbetweens-v1.webp",width:1045,height:1291,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:183,height:277,anchor:.492593,anchorY:1,referenceHeight:270},{left:295,top:24,width:169,height:279,anchor:.452126,anchorY:1,referenceHeight:270},{left:547,top:24,width:165,height:277,anchor:.65,anchorY:1,referenceHeight:270},{left:799,top:24,width:167,height:276,anchor:.495042,anchorY:1,referenceHeight:270},{left:24,top:351,width:164,height:276,anchor:.492593,anchorY:1,referenceHeight:270},{left:295,top:351,width:145,height:276,anchor:.452126,anchorY:1,referenceHeight:270},{left:547,top:351,width:147,height:277,anchor:.61,anchorY:1,referenceHeight:270},{left:799,top:351,width:158,height:276,anchor:.495042,anchorY:1,referenceHeight:270},{left:24,top:676,width:223,height:280,anchor:.434951,anchorY:1,referenceHeight:270},{left:295,top:676,width:204,height:278,anchor:.440223,anchorY:1,referenceHeight:270},{left:547,top:676,width:204,height:277,anchor:.552396,anchorY:1,referenceHeight:270},{left:799,top:676,width:222,height:279,anchor:.558612,anchorY:1,referenceHeight:270},{left:24,top:1004,width:189,height:262,anchor:.492593,anchorY:1,referenceHeight:270},{left:295,top:1004,width:180,height:263,anchor:.452126,anchorY:1,referenceHeight:270},{left:547,top:1004,width:180,height:262,anchor:.52941,anchorY:1,referenceHeight:270},{left:799,top:1004,width:178,height:262,anchor:.495042,anchorY:1,referenceHeight:270}]},ahn:{heroId:"ahn",skin:null,path:"assets/3d/fixed/inbetweens/ahn-inbetweens-v1.webp",width:1030,height:1236,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:162,height:260,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:284,top:24,width:174,height:264,anchor:.44,anchorY:1,referenceHeight:254.5},{left:544,top:24,width:158,height:265,anchor:.5,anchorY:1,referenceHeight:254.5},{left:793,top:24,width:158,height:258,anchor:.473755,anchorY:1,referenceHeight:254.5},{left:24,top:337,width:157,height:256,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:284,top:337,width:172,height:255,anchor:.46,anchorY:1,referenceHeight:254.5},{left:544,top:337,width:170,height:257,anchor:.5,anchorY:1,referenceHeight:254.5},{left:793,top:337,width:155,height:255,anchor:.473755,anchorY:1,referenceHeight:254.5},{left:24,top:642,width:212,height:249,anchor:.428626,anchorY:1,referenceHeight:254.5},{left:284,top:642,width:212,height:258,anchor:.427352,anchorY:1,referenceHeight:254.5},{left:544,top:642,width:201,height:257,anchor:.531864,anchorY:1,referenceHeight:254.5},{left:793,top:642,width:213,height:250,anchor:.570551,anchorY:1,referenceHeight:254.5},{left:24,top:948,width:168,height:257,anchor:.52479,anchorY:1,referenceHeight:254.5},{left:284,top:948,width:181,height:263,anchor:.525213,anchorY:1,referenceHeight:254.5},{left:544,top:948,width:181,height:264,anchor:.461072,anchorY:1,referenceHeight:254.5},{left:793,top:948,width:168,height:255,anchor:.473755,anchorY:1,referenceHeight:254.5}]},dangun:{heroId:"dangun",skin:null,path:"assets/3d/fixed/inbetweens/dangun-inbetweens-v1.webp",width:1058,height:1127,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:171,height:245,anchor:.527138,anchorY:1,referenceHeight:244},{left:301,top:24,width:169,height:241,anchor:.45,anchorY:1,referenceHeight:244},{left:556,top:24,width:164,height:242,anchor:.54,anchorY:1,referenceHeight:244},{left:809,top:24,width:172,height:245,anchor:.460881,anchorY:1,referenceHeight:244},{left:24,top:317,width:182,height:244,anchor:.527138,anchorY:1,referenceHeight:244},{left:301,top:317,width:169,height:244,anchor:.46,anchorY:1,referenceHeight:244},{left:556,top:317,width:169,height:244,anchor:.52,anchorY:1,referenceHeight:244},{left:809,top:317,width:183,height:244,anchor:.460881,anchorY:1,referenceHeight:244},{left:24,top:609,width:229,height:216,anchor:.478438,anchorY:1,referenceHeight:244},{left:301,top:609,width:207,height:218,anchor:.432054,anchorY:1,referenceHeight:244},{left:556,top:609,width:205,height:217,anchor:.551343,anchorY:1,referenceHeight:244},{left:809,top:609,width:225,height:218,anchor:.523123,anchorY:1,referenceHeight:244},{left:24,top:875,width:179,height:224,anchor:.527138,anchorY:1,referenceHeight:244},{left:301,top:875,width:180,height:228,anchor:.570995,anchorY:1,referenceHeight:244},{left:556,top:875,width:176,height:227,anchor:.412022,anchorY:1,referenceHeight:244},{left:809,top:875,width:185,height:225,anchor:.460881,anchorY:1,referenceHeight:244}]},yi_white:{heroId:"yi",skin:"yi_white",path:"assets/3d/fixed/inbetweens/yi_white-inbetweens-v1.webp",width:1089,height:1205,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:204,height:246,anchor:.56,anchorY:1,referenceHeight:256.5},{left:304,top:24,width:173,height:245,anchor:.5,anchorY:1,referenceHeight:256.5},{left:569,top:24,width:178,height:248,anchor:.5,anchorY:1,referenceHeight:256.5},{left:831,top:24,width:193,height:247,anchor:.44,anchorY:1,referenceHeight:256.5},{left:24,top:320,width:209,height:248,anchor:.62,anchorY:1,referenceHeight:256.5},{left:304,top:320,width:183,height:249,anchor:.49,anchorY:1,referenceHeight:256.5},{left:569,top:320,width:187,height:251,anchor:.51,anchorY:1,referenceHeight:256.5},{left:831,top:320,width:206,height:249,anchor:.38,anchorY:1,referenceHeight:256.5},{left:24,top:619,width:232,height:259,anchor:.5,anchorY:1,referenceHeight:256.5},{left:304,top:619,width:217,height:256,anchor:.45,anchorY:1,referenceHeight:256.5},{left:569,top:619,width:214,height:258,anchor:.5,anchorY:1,referenceHeight:256.5},{left:831,top:619,width:234,height:258,anchor:.5,anchorY:1,referenceHeight:256.5},{left:24,top:926,width:202,height:253,anchor:.54,anchorY:1,referenceHeight:256.5},{left:304,top:926,width:187,height:251,anchor:.49,anchorY:1,referenceHeight:256.5},{left:569,top:926,width:187,height:251,anchor:.51,anchorY:1,referenceHeight:256.5},{left:831,top:926,width:195,height:255,anchor:.46,anchorY:1,referenceHeight:256.5}]},yi_gold:{heroId:"yi",skin:"yi_gold",path:"assets/3d/fixed/inbetweens/yi_gold-inbetweens-v1.webp",width:1021,height:1124,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:188,height:227,anchor:.56,anchorY:1,referenceHeight:235.5},{left:289,top:24,width:165,height:228,anchor:.5,anchorY:1,referenceHeight:235.5},{left:534,top:24,width:169,height:228,anchor:.5,anchorY:1,referenceHeight:235.5},{left:779,top:24,width:182,height:226,anchor:.44,anchorY:1,referenceHeight:235.5},{left:24,top:300,width:194,height:227,anchor:.62,anchorY:1,referenceHeight:235.5},{left:289,top:300,width:170,height:229,anchor:.49,anchorY:1,referenceHeight:235.5},{left:534,top:300,width:175,height:231,anchor:.51,anchorY:1,referenceHeight:235.5},{left:779,top:300,width:189,height:229,anchor:.38,anchorY:1,referenceHeight:235.5},{left:24,top:579,width:217,height:239,anchor:.5,anchorY:1,referenceHeight:235.5},{left:289,top:579,width:197,height:238,anchor:.45,anchorY:1,referenceHeight:235.5},{left:534,top:579,width:197,height:238,anchor:.5,anchorY:1,referenceHeight:235.5},{left:779,top:579,width:218,height:240,anchor:.5,anchorY:1,referenceHeight:235.5},{left:24,top:867,width:187,height:231,anchor:.54,anchorY:1,referenceHeight:235.5},{left:289,top:867,width:171,height:229,anchor:.49,anchorY:1,referenceHeight:235.5},{left:534,top:867,width:173,height:230,anchor:.51,anchorY:1,referenceHeight:235.5},{left:779,top:867,width:181,height:233,anchor:.46,anchorY:1,referenceHeight:235.5}]},sejong_blue:{heroId:"sejong",skin:"sejong_blue",path:"assets/3d/fixed/inbetweens/sejong_blue-inbetweens-v1.webp",width:1025,height:1181,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:170,height:237,anchor:.53,anchorY:1,referenceHeight:238},{left:287,top:24,width:154,height:237,anchor:.43,anchorY:1,referenceHeight:238},{left:543,top:24,width:152,height:238,anchor:.55,anchorY:1,referenceHeight:238},{left:791,top:24,width:157,height:239,anchor:.47,anchorY:1,referenceHeight:238},{left:24,top:311,width:183,height:249,anchor:.54,anchorY:1,referenceHeight:238},{left:287,top:311,width:162,height:249,anchor:.42,anchorY:1,referenceHeight:238},{left:543,top:311,width:159,height:249,anchor:.55,anchorY:1,referenceHeight:238},{left:791,top:311,width:175,height:250,anchor:.46,anchorY:1,referenceHeight:238},{left:24,top:609,width:215,height:240,anchor:.46,anchorY:1,referenceHeight:238},{left:287,top:609,width:208,height:252,anchor:.43,anchorY:1,referenceHeight:238},{left:543,top:609,width:200,height:250,anchor:.5,anchorY:1,referenceHeight:238},{left:791,top:609,width:210,height:238,anchor:.625,anchorY:1,referenceHeight:238},{left:24,top:909,width:165,height:245,anchor:.54,anchorY:1,referenceHeight:238},{left:287,top:909,width:166,height:248,anchor:.5,anchorY:1,referenceHeight:238},{left:543,top:909,width:169,height:248,anchor:.5,anchorY:1,referenceHeight:238},{left:791,top:909,width:165,height:246,anchor:.46,anchorY:1,referenceHeight:238}]},sejong_gold:{heroId:"sejong",skin:"sejong_gold",path:"assets/3d/fixed/inbetweens/sejong_gold-inbetweens-v1.webp",width:1029,height:1215,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:181,height:247,anchor:.53,anchorY:1,referenceHeight:247},{left:288,top:24,width:156,height:247,anchor:.43,anchorY:1,referenceHeight:247},{left:542,top:24,width:155,height:247,anchor:.55,anchorY:1,referenceHeight:247},{left:793,top:24,width:159,height:247,anchor:.47,anchorY:1,referenceHeight:247},{left:24,top:319,width:188,height:261,anchor:.54,anchorY:1,referenceHeight:247},{left:288,top:319,width:162,height:261,anchor:.42,anchorY:1,referenceHeight:247},{left:542,top:319,width:161,height:261,anchor:.55,anchorY:1,referenceHeight:247},{left:793,top:319,width:178,height:265,anchor:.46,anchorY:1,referenceHeight:247},{left:24,top:632,width:216,height:248,anchor:.46,anchorY:1,referenceHeight:247},{left:288,top:632,width:206,height:258,anchor:.43,anchorY:1,referenceHeight:247},{left:542,top:632,width:203,height:257,anchor:.5,anchorY:1,referenceHeight:247},{left:793,top:632,width:212,height:243,anchor:.625,anchorY:1,referenceHeight:247},{left:24,top:938,width:163,height:250,anchor:.54,anchorY:1,referenceHeight:247},{left:288,top:938,width:175,height:253,anchor:.5,anchorY:1,referenceHeight:247},{left:542,top:938,width:170,height:252,anchor:.5,anchorY:1,referenceHeight:247},{left:793,top:938,width:167,height:251,anchor:.46,anchorY:1,referenceHeight:247}]},eulji_iron:{heroId:"eulji",skin:"eulji_iron",path:"assets/3d/fixed/inbetweens/eulji_iron-inbetweens-v1.webp",width:1095,height:1048,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:171,height:215,anchor:.65,anchorY:1,referenceHeight:207.5},{left:302,top:24,width:178,height:215,anchor:.49777,anchorY:1,referenceHeight:207.5},{left:570,top:24,width:182,height:218,anchor:.509059,anchorY:1,referenceHeight:207.5},{left:841,top:24,width:174,height:216,anchor:.36,anchorY:1,referenceHeight:207.5},{left:24,top:290,width:186,height:216,anchor:.63,anchorY:1,referenceHeight:207.5},{left:302,top:290,width:181,height:219,anchor:.49777,anchorY:1,referenceHeight:207.5},{left:570,top:290,width:178,height:217,anchor:.509059,anchorY:1,referenceHeight:207.5},{left:841,top:290,width:188,height:215,anchor:.35,anchorY:1,referenceHeight:207.5},{left:24,top:557,width:230,height:205,anchor:.424389,anchorY:1,referenceHeight:207.5},{left:302,top:557,width:220,height:206,anchor:.405173,anchorY:1,referenceHeight:207.5},{left:570,top:557,width:223,height:209,anchor:.557538,anchorY:1,referenceHeight:207.5},{left:841,top:557,width:230,height:204,anchor:.561561,anchorY:1,referenceHeight:207.5},{left:24,top:814,width:183,height:201,anchor:.563421,anchorY:1,referenceHeight:207.5},{left:302,top:814,width:182,height:201,anchor:.49777,anchorY:1,referenceHeight:207.5},{left:570,top:814,width:189,height:210,anchor:.509059,anchorY:1,referenceHeight:207.5},{left:841,top:814,width:183,height:200,anchor:.452595,anchorY:1,referenceHeight:207.5}]},eulji_gold:{heroId:"eulji",skin:"eulji_gold",path:"assets/3d/fixed/inbetweens/eulji_gold-inbetweens-v1.webp",width:1097,height:1062,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:173,height:217,anchor:.65,anchorY:1,referenceHeight:210.5},{left:301,top:24,width:181,height:216,anchor:.49777,anchorY:1,referenceHeight:210.5},{left:570,top:24,width:177,height:219,anchor:.509059,anchorY:1,referenceHeight:210.5},{left:841,top:24,width:177,height:216,anchor:.36,anchorY:1,referenceHeight:210.5},{left:24,top:291,width:191,height:220,anchor:.63,anchorY:1,referenceHeight:210.5},{left:301,top:291,width:185,height:219,anchor:.49777,anchorY:1,referenceHeight:210.5},{left:570,top:291,width:184,height:220,anchor:.509059,anchorY:1,referenceHeight:210.5},{left:841,top:291,width:191,height:221,anchor:.35,anchorY:1,referenceHeight:210.5},{left:24,top:560,width:229,height:207,anchor:.424389,anchorY:1,referenceHeight:210.5},{left:301,top:560,width:221,height:209,anchor:.405173,anchorY:1,referenceHeight:210.5},{left:570,top:560,width:223,height:213,anchor:.557538,anchorY:1,referenceHeight:210.5},{left:841,top:560,width:232,height:206,anchor:.561561,anchorY:1,referenceHeight:210.5},{left:24,top:821,width:187,height:208,anchor:.563421,anchorY:1,referenceHeight:210.5},{left:301,top:821,width:184,height:214,anchor:.49777,anchorY:1,referenceHeight:210.5},{left:570,top:821,width:192,height:217,anchor:.509059,anchorY:1,referenceHeight:210.5},{left:841,top:821,width:188,height:207,anchor:.452595,anchorY:1,referenceHeight:210.5}]},gang_crimson:{heroId:"gang",skin:"gang_crimson",path:"assets/3d/fixed/inbetweens/gang_crimson-inbetweens-v1.webp",width:1381,height:1374,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:287,height:296,anchor:.543238,anchorY:1,referenceHeight:294},{left:383,top:24,width:283,height:295,anchor:.494672,anchorY:1,referenceHeight:294},{left:720,top:24,width:263,height:298,anchor:.458745,anchorY:1,referenceHeight:294},{left:1052,top:24,width:302,height:295,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:370,width:288,height:309,anchor:.543238,anchorY:1,referenceHeight:294},{left:383,top:370,width:288,height:308,anchor:.494672,anchorY:1,referenceHeight:294},{left:720,top:370,width:264,height:309,anchor:.458745,anchorY:1,referenceHeight:294},{left:1052,top:370,width:305,height:308,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:727,width:311,height:272,anchor:.466717,anchorY:1,referenceHeight:294},{left:383,top:727,width:289,height:279,anchor:.449052,anchorY:1,referenceHeight:294},{left:720,top:727,width:284,height:274,anchor:.53166,anchorY:1,referenceHeight:294},{left:1052,top:727,width:298,height:277,anchor:.526119,anchorY:1,referenceHeight:294},{left:24,top:1054,width:280,height:293,anchor:.543238,anchorY:1,referenceHeight:294},{left:383,top:1054,width:280,height:295,anchor:.494672,anchorY:1,referenceHeight:294},{left:720,top:1054,width:261,height:296,anchor:.458745,anchorY:1,referenceHeight:294},{left:1052,top:1054,width:260,height:292,anchor:.485671,anchorY:1,referenceHeight:294}]},gang_gold:{heroId:"gang",skin:"gang_gold",path:"assets/3d/fixed/inbetweens/gang_gold-inbetweens-v1.webp",width:1340,height:1378,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:279,height:292,anchor:.543238,anchorY:1,referenceHeight:294},{left:376,top:24,width:279,height:293,anchor:.494672,anchorY:1,referenceHeight:294},{left:704,top:24,width:253,height:295,anchor:.458745,anchorY:1,referenceHeight:294},{left:1024,top:24,width:290,height:293,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:367,width:282,height:307,anchor:.543238,anchorY:1,referenceHeight:294},{left:376,top:367,width:280,height:309,anchor:.494672,anchorY:1,referenceHeight:294},{left:704,top:367,width:256,height:311,anchor:.458745,anchorY:1,referenceHeight:294},{left:1024,top:367,width:292,height:308,anchor:.485671,anchorY:1,referenceHeight:294},{left:24,top:726,width:304,height:274,anchor:.466717,anchorY:1,referenceHeight:294},{left:376,top:726,width:276,height:281,anchor:.449052,anchorY:1,referenceHeight:294},{left:704,top:726,width:272,height:273,anchor:.53166,anchorY:1,referenceHeight:294},{left:1024,top:726,width:289,height:277,anchor:.526119,anchorY:1,referenceHeight:294},{left:24,top:1055,width:273,height:293,anchor:.543238,anchorY:1,referenceHeight:294},{left:376,top:1055,width:271,height:293,anchor:.494672,anchorY:1,referenceHeight:294},{left:704,top:1055,width:251,height:299,anchor:.458745,anchorY:1,referenceHeight:294},{left:1024,top:1055,width:257,height:293,anchor:.485671,anchorY:1,referenceHeight:294}]},gwon_hill:{heroId:"gwon",skin:"gwon_hill",path:"assets/3d/fixed/inbetweens/gwon_hill-inbetweens-v1.webp",width:1218,height:1227,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:226,height:266,anchor:.512638,anchorY:1,referenceHeight:255},{left:349,top:24,width:202,height:266,anchor:.509672,anchorY:1,referenceHeight:255},{left:637,top:24,width:194,height:260,anchor:.463326,anchorY:1,referenceHeight:255},{left:917,top:24,width:222,height:265,anchor:.460919,anchorY:1,referenceHeight:255},{left:24,top:338,width:223,height:274,anchor:.512638,anchorY:1,referenceHeight:255},{left:349,top:338,width:200,height:274,anchor:.509672,anchorY:1,referenceHeight:255},{left:637,top:338,width:193,height:268,anchor:.463326,anchorY:1,referenceHeight:255},{left:917,top:338,width:218,height:274,anchor:.460919,anchorY:1,referenceHeight:255},{left:24,top:660,width:277,height:240,anchor:.44644,anchorY:1,referenceHeight:255},{left:349,top:660,width:240,height:236,anchor:.47,anchorY:1,referenceHeight:255},{left:637,top:660,width:232,height:237,anchor:.552449,anchorY:1,referenceHeight:255},{left:917,top:660,width:277,height:240,anchor:.537893,anchorY:1,referenceHeight:255},{left:24,top:948,width:250,height:255,anchor:.512638,anchorY:1,referenceHeight:255},{left:349,top:948,width:238,height:246,anchor:.509672,anchorY:1,referenceHeight:255},{left:637,top:948,width:224,height:245,anchor:.463326,anchorY:1,referenceHeight:255},{left:917,top:948,width:251,height:251,anchor:.460919,anchorY:1,referenceHeight:255}]},gwon_gold:{heroId:"gwon",skin:"gwon_gold",path:"assets/3d/fixed/inbetweens/gwon_gold-inbetweens-v1.webp",width:1260,height:1260,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:237,height:275,anchor:.512638,anchorY:1,referenceHeight:263.5},{left:360,top:24,width:207,height:275,anchor:.509672,anchorY:1,referenceHeight:263.5},{left:656,top:24,width:201,height:270,anchor:.463326,anchorY:1,referenceHeight:263.5},{left:949,top:24,width:233,height:274,anchor:.460919,anchorY:1,referenceHeight:263.5},{left:24,top:347,width:234,height:283,anchor:.512638,anchorY:1,referenceHeight:263.5},{left:360,top:347,width:207,height:278,anchor:.509672,anchorY:1,referenceHeight:263.5},{left:656,top:347,width:203,height:277,anchor:.463326,anchorY:1,referenceHeight:263.5},{left:949,top:347,width:231,height:281,anchor:.460919,anchorY:1,referenceHeight:263.5},{left:24,top:678,width:288,height:245,anchor:.44644,anchorY:1,referenceHeight:263.5},{left:360,top:678,width:248,height:243,anchor:.47,anchorY:1,referenceHeight:263.5},{left:656,top:678,width:245,height:246,anchor:.552449,anchorY:1,referenceHeight:263.5},{left:949,top:678,width:287,height:248,anchor:.537893,anchorY:1,referenceHeight:263.5},{left:24,top:974,width:261,height:262,anchor:.512638,anchorY:1,referenceHeight:263.5},{left:360,top:974,width:238,height:259,anchor:.509672,anchorY:1,referenceHeight:263.5},{left:656,top:974,width:235,height:258,anchor:.463326,anchorY:1,referenceHeight:263.5},{left:949,top:974,width:261,height:259,anchor:.460919,anchorY:1,referenceHeight:263.5}]},gwak_black:{heroId:"gwak",skin:"gwak_black",path:"assets/3d/fixed/inbetweens/gwak_black-inbetweens-v1.webp",width:974,height:1195,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:165,height:253,anchor:.492593,anchorY:1,referenceHeight:246.5},{left:277,top:24,width:153,height:254,anchor:.452126,anchorY:1,referenceHeight:246.5},{left:515,top:24,width:153,height:254,anchor:.65,anchorY:1,referenceHeight:246.5},{left:750,top:24,width:153,height:253,anchor:.495042,anchorY:1,referenceHeight:246.5},{left:24,top:326,width:156,height:256,anchor:.492593,anchorY:1,referenceHeight:246.5},{left:277,top:326,width:141,height:256,anchor:.452126,anchorY:1,referenceHeight:246.5},{left:515,top:326,width:142,height:256,anchor:.61,anchorY:1,referenceHeight:246.5},{left:750,top:326,width:152,height:255,anchor:.495042,anchorY:1,referenceHeight:246.5},{left:24,top:630,width:205,height:253,anchor:.434951,anchorY:1,referenceHeight:246.5},{left:277,top:630,width:190,height:252,anchor:.440223,anchorY:1,referenceHeight:246.5},{left:515,top:630,width:187,height:252,anchor:.552396,anchorY:1,referenceHeight:246.5},{left:750,top:630,width:200,height:257,anchor:.558612,anchorY:1,referenceHeight:246.5},{left:24,top:935,width:169,height:233,anchor:.492593,anchorY:1,referenceHeight:246.5},{left:277,top:935,width:164,height:235,anchor:.452126,anchorY:1,referenceHeight:246.5},{left:515,top:935,width:166,height:236,anchor:.52941,anchorY:1,referenceHeight:246.5},{left:750,top:935,width:159,height:236,anchor:.495042,anchorY:1,referenceHeight:246.5}]},gwak_gold:{heroId:"gwak",skin:"gwak_gold",path:"assets/3d/fixed/inbetweens/gwak_gold-inbetweens-v1.webp",width:1040,height:1280,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:179,height:273,anchor:.492593,anchorY:1,referenceHeight:266.5},{left:294,top:24,width:163,height:276,anchor:.452126,anchorY:1,referenceHeight:266.5},{left:546,top:24,width:163,height:274,anchor:.65,anchorY:1,referenceHeight:266.5},{left:796,top:24,width:165,height:273,anchor:.495042,anchorY:1,referenceHeight:266.5},{left:24,top:348,width:163,height:275,anchor:.492593,anchorY:1,referenceHeight:266.5},{left:294,top:348,width:149,height:274,anchor:.452126,anchorY:1,referenceHeight:266.5},{left:546,top:348,width:150,height:277,anchor:.61,anchorY:1,referenceHeight:266.5},{left:796,top:348,width:160,height:274,anchor:.495042,anchorY:1,referenceHeight:266.5},{left:24,top:673,width:222,height:275,anchor:.434951,anchorY:1,referenceHeight:266.5},{left:294,top:673,width:204,height:274,anchor:.440223,anchorY:1,referenceHeight:266.5},{left:546,top:673,width:202,height:272,anchor:.552396,anchorY:1,referenceHeight:266.5},{left:796,top:673,width:220,height:277,anchor:.558612,anchorY:1,referenceHeight:266.5},{left:24,top:998,width:184,height:258,anchor:.492593,anchorY:1,referenceHeight:266.5},{left:294,top:998,width:178,height:257,anchor:.452126,anchorY:1,referenceHeight:266.5},{left:546,top:998,width:176,height:256,anchor:.52941,anchorY:1,referenceHeight:266.5},{left:796,top:998,width:176,height:256,anchor:.495042,anchorY:1,referenceHeight:266.5}]},ahn_militia:{heroId:"ahn",skin:"ahn_militia",path:"assets/3d/fixed/inbetweens/ahn_militia-inbetweens-v1.webp",width:988,height:1198,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:156,height:250,anchor:.52479,anchorY:1,referenceHeight:244.5},{left:274,top:24,width:171,height:253,anchor:.44,anchorY:1,referenceHeight:244.5},{left:526,top:24,width:153,height:254,anchor:.5,anchorY:1,referenceHeight:244.5},{left:766,top:24,width:154,height:248,anchor:.473755,anchorY:1,referenceHeight:244.5},{left:24,top:326,width:153,height:247,anchor:.52479,anchorY:1,referenceHeight:244.5},{left:274,top:326,width:170,height:244,anchor:.46,anchorY:1,referenceHeight:244.5},{left:526,top:326,width:166,height:248,anchor:.5,anchorY:1,referenceHeight:244.5},{left:766,top:326,width:151,height:247,anchor:.473755,anchorY:1,referenceHeight:244.5},{left:24,top:622,width:202,height:238,anchor:.428626,anchorY:1,referenceHeight:244.5},{left:274,top:622,width:204,height:248,anchor:.427352,anchorY:1,referenceHeight:244.5},{left:526,top:622,width:192,height:246,anchor:.531864,anchorY:1,referenceHeight:244.5},{left:766,top:622,width:198,height:239,anchor:.570551,anchorY:1,referenceHeight:244.5},{left:24,top:918,width:162,height:247,anchor:.52479,anchorY:1,referenceHeight:244.5},{left:274,top:918,width:178,height:254,anchor:.525213,anchorY:1,referenceHeight:244.5},{left:526,top:918,width:179,height:256,anchor:.461072,anchorY:1,referenceHeight:244.5},{left:766,top:918,width:169,height:245,anchor:.473755,anchorY:1,referenceHeight:244.5}]},ahn_gold:{heroId:"ahn",skin:"ahn_gold",path:"assets/3d/fixed/inbetweens/ahn_gold-inbetweens-v1.webp",width:1022,height:1221,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:159,height:256,anchor:.52479,anchorY:1,referenceHeight:250.5},{left:283,top:24,width:175,height:260,anchor:.44,anchorY:1,referenceHeight:250.5},{left:540,top:24,width:156,height:259,anchor:.5,anchorY:1,referenceHeight:250.5},{left:789,top:24,width:155,height:256,anchor:.473755,anchorY:1,referenceHeight:250.5},{left:24,top:332,width:157,height:254,anchor:.52479,anchorY:1,referenceHeight:250.5},{left:283,top:332,width:175,height:253,anchor:.46,anchorY:1,referenceHeight:250.5},{left:540,top:332,width:167,height:253,anchor:.5,anchorY:1,referenceHeight:250.5},{left:789,top:332,width:155,height:253,anchor:.473755,anchorY:1,referenceHeight:250.5},{left:24,top:634,width:211,height:245,anchor:.428626,anchorY:1,referenceHeight:250.5},{left:283,top:634,width:209,height:254,anchor:.427352,anchorY:1,referenceHeight:250.5},{left:540,top:634,width:201,height:254,anchor:.531864,anchorY:1,referenceHeight:250.5},{left:789,top:634,width:209,height:246,anchor:.570551,anchorY:1,referenceHeight:250.5},{left:24,top:936,width:169,height:253,anchor:.52479,anchorY:1,referenceHeight:250.5},{left:283,top:936,width:180,height:261,anchor:.525213,anchorY:1,referenceHeight:250.5},{left:540,top:936,width:179,height:260,anchor:.461072,anchorY:1,referenceHeight:250.5},{left:789,top:936,width:168,height:251,anchor:.473755,anchorY:1,referenceHeight:250.5}]},dangun_sky:{heroId:"dangun",skin:"dangun_sky",path:"assets/3d/fixed/inbetweens/dangun_sky-inbetweens-v1.webp",width:1068,height:1104,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:163,height:232,anchor:.527138,anchorY:1,referenceHeight:236.5},{left:299,top:24,width:164,height:226,anchor:.45,anchorY:1,referenceHeight:236.5},{left:559,top:24,width:166,height:230,anchor:.54,anchorY:1,referenceHeight:236.5},{left:817,top:24,width:167,height:232,anchor:.460881,anchorY:1,referenceHeight:236.5},{left:24,top:304,width:175,height:237,anchor:.527138,anchorY:1,referenceHeight:236.5},{left:299,top:304,width:167,height:235,anchor:.46,anchorY:1,referenceHeight:236.5},{left:559,top:304,width:167,height:234,anchor:.52,anchorY:1,referenceHeight:236.5},{left:817,top:304,width:175,height:236,anchor:.460881,anchorY:1,referenceHeight:236.5},{left:24,top:589,width:227,height:209,anchor:.478438,anchorY:1,referenceHeight:236.5},{left:299,top:589,width:212,height:214,anchor:.432054,anchorY:1,referenceHeight:236.5},{left:559,top:589,width:210,height:216,anchor:.551343,anchorY:1,referenceHeight:236.5},{left:817,top:589,width:227,height:211,anchor:.523123,anchorY:1,referenceHeight:236.5},{left:24,top:853,width:173,height:219,anchor:.527138,anchorY:1,referenceHeight:236.5},{left:299,top:853,width:181,height:227,anchor:.570995,anchorY:1,referenceHeight:236.5},{left:559,top:853,width:181,height:226,anchor:.412022,anchorY:1,referenceHeight:236.5},{left:817,top:853,width:179,height:222,anchor:.460881,anchorY:1,referenceHeight:236.5}]},dangun_gold:{heroId:"dangun",skin:"dangun_gold",path:"assets/3d/fixed/inbetweens/dangun_gold-inbetweens-v1.webp",width:1075,height:1105,roles:["pass-a","pass-b","follow-through","recover"],frames:[{left:24,top:24,width:167,height:234,anchor:.527138,anchorY:1,referenceHeight:237},{left:301,top:24,width:165,height:232,anchor:.45,anchorY:1,referenceHeight:237},{left:561,top:24,width:167,height:232,anchor:.54,anchorY:1,referenceHeight:237},{left:821,top:24,width:173,height:234,anchor:.460881,anchorY:1,referenceHeight:237},{left:24,top:306,width:179,height:236,anchor:.527138,anchorY:1,referenceHeight:237},{left:301,top:306,width:171,height:236,anchor:.46,anchorY:1,referenceHeight:237},{left:561,top:306,width:169,height:236,anchor:.52,anchorY:1,referenceHeight:237},{left:821,top:306,width:180,height:236,anchor:.460881,anchorY:1,referenceHeight:237},{left:24,top:590,width:229,height:211,anchor:.478438,anchorY:1,referenceHeight:237},{left:301,top:590,width:212,height:217,anchor:.432054,anchorY:1,referenceHeight:237},{left:561,top:590,width:212,height:217,anchor:.551343,anchorY:1,referenceHeight:237},{left:821,top:590,width:230,height:213,anchor:.523123,anchorY:1,referenceHeight:237},{left:24,top:855,width:186,height:218,anchor:.527138,anchorY:1,referenceHeight:237},{left:301,top:855,width:191,height:226,anchor:.570995,anchorY:1,referenceHeight:237},{left:561,top:855,width:181,height:226,anchor:.412022,anchorY:1,referenceHeight:237},{left:821,top:855,width:190,height:221,anchor:.460881,anchorY:1,referenceHeight:237}]}};function Ks(i=[]){let e=new Map;for(let t of i){if(!ti[t.heroId])continue;let n=en(t.heroId,t.skin)?t.skin:null,r=n??t.heroId;e.set(r,{key:r,heroId:t.heroId,skin:n})}return[...e.values()].sort((t,n)=>t.key.localeCompare(n.key))}function Yh(i=[]){return Ks(i).map(e=>e.key).join(",")}var Zs={yi:{heroId:"yi",skin:null,path:"assets/3d/fixed/long-motion/yi-long-motion-v1.webp",width:1324,height:1492,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:37,top:24,width:258,height:308,anchor:.481428,anchorY:1,referenceHeight:310},{left:380,top:24,width:234,height:312,anchor:.412704,anchorY:1,referenceHeight:310},{left:708,top:24,width:240,height:312,anchor:.543589,anchorY:1,referenceHeight:310},{left:1034,top:24,width:249,height:307,anchor:.481223,anchorY:1,referenceHeight:310},{left:37,top:397,width:258,height:307,anchor:.523938,anchorY:1,referenceHeight:310},{left:379,top:397,width:236,height:311,anchor:.466383,anchorY:1,referenceHeight:310},{left:706,top:397,width:244,height:309,anchor:.512756,anchorY:1,referenceHeight:310},{left:1036,top:397,width:246,height:307,anchor:.441222,anchorY:1,referenceHeight:310},{left:24,top:770,width:283,height:293,anchor:.474921,anchorY:1,referenceHeight:310},{left:369,top:770,width:255,height:289,anchor:.44513,anchorY:1,referenceHeight:310},{left:695,top:770,width:266,height:283,anchor:.551219,anchorY:1,referenceHeight:310},{left:1019,top:770,width:280,height:294,anchor:.495963,anchorY:1,referenceHeight:310},{left:40,top:1143,width:252,height:325,anchor:.486756,anchorY:1,referenceHeight:310},{left:381,top:1143,width:231,height:319,anchor:.476606,anchorY:1,referenceHeight:310},{left:705,top:1143,width:246,height:316,anchor:.491238,anchorY:1,referenceHeight:310},{left:1036,top:1143,width:245,height:323,anchor:.489447,anchorY:1,referenceHeight:310}]},sejong:{heroId:"sejong",skin:null,path:"assets/3d/fixed/long-motion/sejong-long-motion-v1.webp",width:1180,height:1416,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:42,top:24,width:211,height:304,anchor:.567219,anchorY:1,referenceHeight:305},{left:348,top:24,width:189,height:306,anchor:.441965,anchorY:1,referenceHeight:305},{left:645,top:24,width:186,height:303,anchor:.559599,anchorY:1,referenceHeight:305},{left:935,top:24,width:195,height:306,anchor:.400636,anchorY:1,referenceHeight:305},{left:39,top:378,width:217,height:301,anchor:.509773,anchorY:1,referenceHeight:305},{left:345,top:378,width:196,height:296,anchor:.432805,anchorY:1,referenceHeight:305},{left:646,top:378,width:184,height:293,anchor:.565024,anchorY:1,referenceHeight:305},{left:935,top:378,width:196,height:298,anchor:.440609,anchorY:1,referenceHeight:305},{left:24,top:732,width:247,height:288,anchor:.367171,anchorY:1,referenceHeight:305},{left:323,top:732,width:240,height:287,anchor:.392015,anchorY:1,referenceHeight:305},{left:623,top:732,width:229,height:286,anchor:.594258,anchorY:1,referenceHeight:305},{left:911,top:732,width:243,height:286,anchor:.628595,anchorY:1,referenceHeight:305},{left:43,top:1086,width:210,height:302,anchor:.494086,anchorY:1,referenceHeight:305},{left:347,top:1086,width:192,height:300,anchor:.476959,anchorY:1,referenceHeight:305},{left:642,top:1086,width:192,height:301,anchor:.508799,anchorY:1,referenceHeight:305},{left:933,top:1086,width:200,height:301,anchor:.464558,anchorY:1,referenceHeight:305}]},eulji:{heroId:"eulji",skin:null,path:"assets/3d/fixed/long-motion/eulji-long-motion-v1.webp",width:1e3,height:960,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:49,top:24,width:153,height:191,anchor:.583497,anchorY:1,referenceHeight:190},{left:295,top:24,width:161,height:188,anchor:.448164,anchorY:1,referenceHeight:190},{left:546,top:24,width:158,height:189,anchor:.52492,anchorY:1,referenceHeight:190},{left:799,top:24,width:153,height:191,anchor:.41096,anchorY:1,referenceHeight:190},{left:45,top:264,width:161,height:192,anchor:.545287,anchorY:1,referenceHeight:190},{left:294,top:264,width:163,height:192,anchor:.478613,anchorY:1,referenceHeight:190},{left:546,top:264,width:159,height:192,anchor:.494423,anchorY:1,referenceHeight:190},{left:796,top:264,width:159,height:192,anchor:.447276,anchorY:1,referenceHeight:190},{left:24,top:504,width:202,height:169,anchor:.423296,anchorY:1,referenceHeight:190},{left:280,top:504,width:190,height:181,anchor:.397901,anchorY:1,referenceHeight:190},{left:533,top:504,width:185,height:180,anchor:.575916,anchorY:1,referenceHeight:190},{left:774,top:504,width:202,height:169,anchor:.566451,anchorY:1,referenceHeight:190},{left:48,top:744,width:155,height:188,anchor:.584767,anchorY:1,referenceHeight:190},{left:295,top:744,width:161,height:186,anchor:.505769,anchorY:1,referenceHeight:190},{left:546,top:744,width:159,height:188,anchor:.491114,anchorY:1,referenceHeight:190},{left:798,top:744,width:154,height:188,anchor:.415102,anchorY:1,referenceHeight:190}]},gang:{heroId:"gang",skin:null,path:"assets/3d/fixed/long-motion/gang-long-motion-v1.webp",width:1400,height:1428,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:37,top:24,width:276,height:287,anchor:.562741,anchorY:1,referenceHeight:293},{left:398,top:24,width:255,height:298,anchor:.507372,anchorY:1,referenceHeight:293},{left:746,top:24,width:258,height:298,anchor:.450175,anchorY:1,referenceHeight:293},{left:1084,top:24,width:282,height:288,anchor:.396558,anchorY:1,referenceHeight:293},{left:41,top:381,width:269,height:304,anchor:.578518,anchorY:1,referenceHeight:293},{left:407,top:381,width:237,height:301,anchor:.562713,anchorY:1,referenceHeight:293},{left:750,top:381,width:250,height:303,anchor:.4349,anchorY:1,referenceHeight:293},{left:1087,top:381,width:277,height:302,anchor:.368034,anchorY:1,referenceHeight:293},{left:30,top:738,width:290,height:282,anchor:.536071,anchorY:1,referenceHeight:293},{left:378,top:738,width:294,height:290,anchor:.434023,anchorY:1,referenceHeight:293},{left:726,top:738,width:298,height:288,anchor:.543067,anchorY:1,referenceHeight:293},{left:1074,top:738,width:302,height:284,anchor:.440748,anchorY:1,referenceHeight:293},{left:36,top:1095,width:278,height:309,anchor:.532114,anchorY:1,referenceHeight:293},{left:381,top:1095,width:289,height:305,anchor:.50903,anchorY:1,referenceHeight:293},{left:746,top:1095,width:258,height:304,anchor:.46717,anchorY:1,referenceHeight:293},{left:1094,top:1095,width:263,height:307,anchor:.422171,anchorY:1,referenceHeight:293}]},gwon:{heroId:"gwon",skin:null,path:"assets/3d/fixed/long-motion/gwon-long-motion-v1.webp",width:1496,height:1364,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:69,top:24,width:236,height:290,anchor:.515091,anchorY:1,referenceHeight:285},{left:455,top:24,width:212,height:273,anchor:.451511,anchorY:1,referenceHeight:285},{left:830,top:24,width:211,height:280,anchor:.468929,anchorY:1,referenceHeight:285},{left:1194,top:24,width:231,height:290,anchor:.434391,anchorY:1,referenceHeight:285},{left:67,top:365,width:240,height:281,anchor:.492377,anchorY:1,referenceHeight:285},{left:454,top:365,width:214,height:280,anchor:.47577,anchorY:1,referenceHeight:285},{left:832,top:365,width:206,height:280,anchor:.494619,anchorY:1,referenceHeight:285},{left:1192,top:365,width:234,height:280,anchor:.498094,anchorY:1,referenceHeight:285},{left:25,top:706,width:325,height:263,anchor:.443352,anchorY:1,referenceHeight:285},{left:423,top:706,width:276,height:259,anchor:.376263,anchorY:1,referenceHeight:285},{left:798,top:706,width:274,height:260,anchor:.615304,anchorY:1,referenceHeight:285},{left:1146,top:706,width:326,height:264,anchor:.549256,anchorY:1,referenceHeight:285},{left:61,top:1047,width:253,height:288,anchor:.527203,anchorY:1,referenceHeight:285},{left:458,top:1047,width:207,height:284,anchor:.502314,anchorY:1,referenceHeight:285},{left:827,top:1047,width:216,height:289,anchor:.417357,anchorY:1,referenceHeight:285},{left:1190,top:1047,width:239,height:293,anchor:.493759,anchorY:1,referenceHeight:285}]},gwak:{heroId:"gwak",skin:null,path:"assets/3d/fixed/long-motion/gwak-long-motion-v1.webp",width:1048,height:1272,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:40,top:24,width:182,height:270,anchor:.508629,anchorY:1,referenceHeight:270},{left:310,top:24,width:167,height:270,anchor:.450429,anchorY:1,referenceHeight:270},{left:567,top:24,width:177,height:270,anchor:.553749,anchorY:1,referenceHeight:270},{left:828,top:24,width:179,height:269,anchor:.457094,anchorY:1,referenceHeight:270},{left:40,top:342,width:183,height:258,anchor:.532797,anchorY:1,referenceHeight:270},{left:310,top:342,width:166,height:262,anchor:.431244,anchorY:1,referenceHeight:270},{left:569,top:342,width:173,height:263,anchor:.545663,anchorY:1,referenceHeight:270},{left:824,top:342,width:186,height:257,anchor:.445518,anchorY:1,referenceHeight:270},{left:24,top:660,width:214,height:258,anchor:.436636,anchorY:1,referenceHeight:270},{left:298,top:660,width:190,height:259,anchor:.453772,anchorY:1,referenceHeight:270},{left:558,top:660,width:195,height:261,anchor:.533099,anchorY:1,referenceHeight:270},{left:810,top:660,width:214,height:257,anchor:.518007,anchorY:1,referenceHeight:270},{left:42,top:978,width:178,height:264,anchor:.483426,anchorY:1,referenceHeight:270},{left:309,top:978,width:168,height:262,anchor:.457283,anchorY:1,referenceHeight:270},{left:567,top:978,width:177,height:262,anchor:.50202,anchorY:1,referenceHeight:270},{left:830,top:978,width:175,height:266,anchor:.486511,anchorY:1,referenceHeight:270}]},ahn:{heroId:"ahn",skin:null,path:"assets/3d/fixed/long-motion/ahn-long-motion-v1.webp",width:1116,height:1224,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:58,top:24,width:164,height:257,anchor:.530899,anchorY:1,referenceHeight:254.5},{left:330,top:24,width:177,height:254,anchor:.456132,anchorY:1,referenceHeight:254.5},{left:614,top:24,width:168,height:253,anchor:.518855,anchorY:1,referenceHeight:254.5},{left:895,top:24,width:164,height:255,anchor:.450772,anchorY:1,referenceHeight:254.5},{left:56,top:330,width:167,height:255,anchor:.535025,anchorY:1,referenceHeight:254.5},{left:335,top:330,width:167,height:258,anchor:.423077,anchorY:1,referenceHeight:254.5},{left:615,top:330,width:165,height:258,anchor:.475511,anchorY:1,referenceHeight:254.5},{left:894,top:330,width:166,height:255,anchor:.448082,anchorY:1,referenceHeight:254.5},{left:24,top:636,width:231,height:238,anchor:.434171,anchorY:1,referenceHeight:254.5},{left:311,top:636,width:215,height:230,anchor:.41294,anchorY:1,referenceHeight:254.5},{left:590,top:636,width:216,height:234,anchor:.548454,anchorY:1,referenceHeight:254.5},{left:864,top:636,width:226,height:240,anchor:.558191,anchorY:1,referenceHeight:254.5},{left:61,top:942,width:157,height:251,anchor:.515802,anchorY:1,referenceHeight:254.5},{left:337,top:942,width:164,height:247,anchor:.50806,anchorY:1,referenceHeight:254.5},{left:616,top:942,width:163,height:245,anchor:.475296,anchorY:1,referenceHeight:254.5},{left:897,top:942,width:159,height:244,anchor:.495819,anchorY:1,referenceHeight:254.5}]},dangun:{heroId:"dangun",skin:null,path:"assets/3d/fixed/long-motion/dangun-long-motion-v1.webp",width:988,height:1172,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:32,top:24,width:183,height:245,anchor:.541054,anchorY:1,referenceHeight:244},{left:278,top:24,width:185,height:242,anchor:.513021,anchorY:1,referenceHeight:244},{left:528,top:24,width:179,height:243,anchor:.435063,anchorY:1,referenceHeight:244},{left:775,top:24,width:180,height:245,anchor:.438587,anchorY:1,referenceHeight:244},{left:34,top:317,width:179,height:240,anchor:.572314,anchorY:1,referenceHeight:244},{left:278,top:317,width:186,height:239,anchor:.482769,anchorY:1,referenceHeight:244},{left:527,top:317,width:182,height:240,anchor:.475698,anchorY:1,referenceHeight:244},{left:773,top:317,width:184,height:240,anchor:.399974,anchorY:1,referenceHeight:244},{left:28,top:610,width:192,height:234,anchor:.498416,anchorY:1,referenceHeight:244},{left:272,top:610,width:198,height:240,anchor:.449361,anchorY:1,referenceHeight:244},{left:518,top:610,width:199,height:239,anchor:.529011,anchorY:1,referenceHeight:244},{left:770,top:610,width:190,height:234,anchor:.465133,anchorY:1,referenceHeight:244},{left:33,top:903,width:181,height:238,anchor:.5493,anchorY:1,referenceHeight:244},{left:278,top:903,width:186,height:239,anchor:.519572,anchorY:1,referenceHeight:244},{left:528,top:903,width:180,height:239,anchor:.462584,anchorY:1,referenceHeight:244},{left:773,top:903,width:183,height:239,anchor:.434642,anchorY:1,referenceHeight:244}]},yi_white:{heroId:"yi",skin:"yi_white",path:"assets/3d/fixed/long-motion/yi_white-long-motion-v1.webp",width:1132,height:1236,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:41,top:24,width:201,height:251,anchor:.508433,anchorY:1,referenceHeight:256.5},{left:331,top:24,width:187,height:261,anchor:.458549,anchorY:1,referenceHeight:256.5},{left:614,top:24,width:188,height:260,anchor:.532152,anchorY:1,referenceHeight:256.5},{left:890,top:24,width:202,height:253,anchor:.488112,anchorY:1,referenceHeight:256.5},{left:37,top:333,width:210,height:254,anchor:.531212,anchorY:1,referenceHeight:256.5},{left:329,top:333,width:192,height:260,anchor:.471709,anchorY:1,referenceHeight:256.5},{left:611,top:333,width:194,height:259,anchor:.507827,anchorY:1,referenceHeight:256.5},{left:889,top:333,width:204,height:252,anchor:.443673,anchorY:1,referenceHeight:256.5},{left:24,top:642,width:235,height:243,anchor:.482561,anchorY:1,referenceHeight:256.5},{left:319,top:642,width:211,height:243,anchor:.436865,anchorY:1,referenceHeight:256.5},{left:603,top:642,width:210,height:243,anchor:.550973,anchorY:1,referenceHeight:256.5},{left:874,top:642,width:233,height:244,anchor:.510804,anchorY:1,referenceHeight:256.5},{left:37,top:951,width:210,height:257,anchor:.502252,anchorY:1,referenceHeight:256.5},{left:330,top:951,width:190,height:251,anchor:.464464,anchorY:1,referenceHeight:256.5},{left:612,top:951,width:192,height:250,anchor:.52654,anchorY:1,referenceHeight:256.5},{left:887,top:951,width:207,height:253,anchor:.486984,anchorY:1,referenceHeight:256.5}]},yi_gold:{heroId:"yi",skin:"yi_gold",path:"assets/3d/fixed/long-motion/yi_gold-long-motion-v1.webp",width:1100,height:1140,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:41,top:24,width:193,height:236,anchor:.520779,anchorY:1,referenceHeight:235.5},{left:323,top:24,width:180,height:236,anchor:.492068,anchorY:1,referenceHeight:235.5},{left:595,top:24,width:185,height:236,anchor:.478574,anchorY:1,referenceHeight:235.5},{left:867,top:24,width:192,height:236,anchor:.477004,anchorY:1,referenceHeight:235.5},{left:41,top:309,width:193,height:236,anchor:.571502,anchorY:1,referenceHeight:235.5},{left:321,top:309,width:184,height:236,anchor:.455026,anchorY:1,referenceHeight:235.5},{left:596,top:309,width:183,height:237,anchor:.531006,anchorY:1,referenceHeight:235.5},{left:867,top:309,width:191,height:236,anchor:.417561,anchorY:1,referenceHeight:235.5},{left:24,top:594,width:227,height:230,anchor:.490914,anchorY:1,referenceHeight:235.5},{left:309,top:594,width:208,height:229,anchor:.488035,anchorY:1,referenceHeight:235.5},{left:584,top:594,width:207,height:228,anchor:.510776,anchorY:1,referenceHeight:235.5},{left:850,top:594,width:226,height:230,anchor:.505466,anchorY:1,referenceHeight:235.5},{left:42,top:879,width:192,height:236,anchor:.522925,anchorY:1,referenceHeight:235.5},{left:322,top:879,width:181,height:231,anchor:.454194,anchorY:1,referenceHeight:235.5},{left:598,top:879,width:179,height:232,anchor:.524708,anchorY:1,referenceHeight:235.5},{left:868,top:879,width:190,height:236,anchor:.462298,anchorY:1,referenceHeight:235.5}]},sejong_blue:{heroId:"sejong",skin:"sejong_blue",path:"assets/3d/fixed/long-motion/sejong_blue-long-motion-v1.webp",width:1036,height:1188,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:40,top:24,width:179,height:240,anchor:.528445,anchorY:1,referenceHeight:238},{left:309,top:24,width:159,height:236,anchor:.451883,anchorY:1,referenceHeight:238},{left:568,top:24,width:159,height:236,anchor:.541149,anchorY:1,referenceHeight:238},{left:823,top:24,width:167,height:249,anchor:.418667,anchorY:1,referenceHeight:238},{left:36,top:321,width:187,height:244,anchor:.511816,anchorY:1,referenceHeight:238},{left:306,top:321,width:166,height:238,anchor:.437875,anchorY:1,referenceHeight:238},{left:565,top:321,width:165,height:238,anchor:.556132,anchorY:1,referenceHeight:238},{left:816,top:321,width:182,height:244,anchor:.484972,anchorY:1,referenceHeight:238},{left:24,top:618,width:211,height:236,anchor:.418653,anchorY:1,referenceHeight:238},{left:287,top:618,width:203,height:231,anchor:.386696,anchorY:1,referenceHeight:238},{left:544,top:618,width:208,height:231,anchor:.605413,anchorY:1,referenceHeight:238},{left:802,top:618,width:209,height:239,anchor:.581054,anchorY:1,referenceHeight:238},{left:40,top:915,width:180,height:242,anchor:.540614,anchorY:1,referenceHeight:238},{left:306,top:915,width:165,height:242,anchor:.501488,anchorY:1,referenceHeight:238},{left:564,top:915,width:167,height:242,anchor:.513233,anchorY:1,referenceHeight:238},{left:820,top:915,width:174,height:242,anchor:.450709,anchorY:1,referenceHeight:238}]},sejong_gold:{heroId:"sejong",skin:"sejong_gold",path:"assets/3d/fixed/long-motion/sejong_gold-long-motion-v1.webp",width:1036,height:1192,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:32,top:24,width:196,height:248,anchor:.53252,anchorY:1,referenceHeight:247},{left:306,top:24,width:166,height:246,anchor:.441859,anchorY:1,referenceHeight:247},{left:564,top:24,width:168,height:246,anchor:.542308,anchorY:1,referenceHeight:247},{left:815,top:24,width:183,height:250,anchor:.435676,anchorY:1,referenceHeight:247},{left:39,top:322,width:182,height:242,anchor:.524601,anchorY:1,referenceHeight:247},{left:304,top:322,width:170,height:238,anchor:.464666,anchorY:1,referenceHeight:247},{left:563,top:322,width:170,height:239,anchor:.51443,anchorY:1,referenceHeight:247},{left:816,top:322,width:181,height:246,anchor:.446016,anchorY:1,referenceHeight:247},{left:26,top:620,width:208,height:228,anchor:.400203,anchorY:1,referenceHeight:247},{left:288,top:620,width:201,height:230,anchor:.385806,anchorY:1,referenceHeight:247},{left:548,top:620,width:199,height:231,anchor:.609952,anchorY:1,referenceHeight:247},{left:801,top:620,width:211,height:229,anchor:.604601,anchorY:1,referenceHeight:247},{left:41,top:918,width:177,height:238,anchor:.53357,anchorY:1,referenceHeight:247},{left:310,top:918,width:157,height:237,anchor:.467585,anchorY:1,referenceHeight:247},{left:568,top:918,width:160,height:234,anchor:.522174,anchorY:1,referenceHeight:247},{left:820,top:918,width:174,height:237,anchor:.442509,anchorY:1,referenceHeight:247}]},eulji_iron:{heroId:"eulji",skin:"eulji_iron",path:"assets/3d/fixed/long-motion/eulji_iron-long-motion-v1.webp",width:1096,height:1036,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:55,top:24,width:164,height:203,anchor:.565188,anchorY:1,referenceHeight:207.5},{left:326,top:24,width:170,height:211,anchor:.47438,anchorY:1,referenceHeight:207.5},{left:600,top:24,width:171,height:210,anchor:.472649,anchorY:1,referenceHeight:207.5},{left:877,top:24,width:165,height:205,anchor:.44252,anchorY:1,referenceHeight:207.5},{left:53,top:283,width:168,height:209,anchor:.569851,anchorY:1,referenceHeight:207.5},{left:323,top:283,width:176,height:208,anchor:.473925,anchorY:1,referenceHeight:207.5},{left:599,top:283,width:172,height:208,anchor:.489938,anchorY:1,referenceHeight:207.5},{left:878,top:283,width:163,height:209,anchor:.407863,anchorY:1,referenceHeight:207.5},{left:24,top:542,width:226,height:193,anchor:.42662,anchorY:1,referenceHeight:207.5},{left:310,top:542,width:202,height:200,anchor:.41088,anchorY:1,referenceHeight:207.5},{left:586,top:542,width:199,height:200,anchor:.575618,anchorY:1,referenceHeight:207.5},{left:850,top:542,width:219,height:192,anchor:.552981,anchorY:1,referenceHeight:207.5},{left:57,top:801,width:161,height:202,anchor:.543981,anchorY:1,referenceHeight:207.5},{left:325,top:801,width:172,height:201,anchor:.491828,anchorY:1,referenceHeight:207.5},{left:601,top:801,width:169,height:201,anchor:.486761,anchorY:1,referenceHeight:207.5},{left:879,top:801,width:161,height:202,anchor:.453465,anchorY:1,referenceHeight:207.5}]},eulji_gold:{heroId:"eulji",skin:"eulji_gold",path:"assets/3d/fixed/long-motion/eulji_gold-long-motion-v1.webp",width:1084,height:1044,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:54,top:24,width:163,height:211,anchor:.541821,anchorY:1,referenceHeight:210.5},{left:319,top:24,width:176,height:210,anchor:.489514,anchorY:1,referenceHeight:210.5},{left:588,top:24,width:180,height:209,anchor:.486359,anchorY:1,referenceHeight:210.5},{left:863,top:24,width:171,height:211,anchor:.444811,anchorY:1,referenceHeight:210.5},{left:49,top:285,width:173,height:212,anchor:.574777,anchorY:1,referenceHeight:210.5},{left:319,top:285,width:176,height:212,anchor:.498951,anchorY:1,referenceHeight:210.5},{left:589,top:285,width:177,height:213,anchor:.477001,anchorY:1,referenceHeight:210.5},{left:863,top:285,width:171,height:212,anchor:.419301,anchorY:1,referenceHeight:210.5},{left:24,top:546,width:223,height:200,anchor:.408195,anchorY:1,referenceHeight:210.5},{left:298,top:546,width:217,height:204,anchor:.39246,anchorY:1,referenceHeight:210.5},{left:569,top:546,width:217,height:207,anchor:.589373,anchorY:1,referenceHeight:210.5},{left:840,top:546,width:217,height:199,anchor:.557891,anchorY:1,referenceHeight:210.5},{left:55,top:807,width:162,height:204,anchor:.538285,anchorY:1,referenceHeight:210.5},{left:316,top:807,width:181,height:207,anchor:.48783,anchorY:1,referenceHeight:210.5},{left:586,top:807,width:184,height:211,anchor:.511586,anchorY:1,referenceHeight:210.5},{left:865,top:807,width:168,height:206,anchor:.461097,anchorY:1,referenceHeight:210.5}]},gang_crimson:{heroId:"gang",skin:"gang_crimson",path:"assets/3d/fixed/long-motion/gang_crimson-long-motion-v1.webp",width:1380,height:1412,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:42,top:24,width:262,height:277,anchor:.539,anchorY:1,referenceHeight:294},{left:388,top:24,width:260,height:298,anchor:.526805,anchorY:1,referenceHeight:294},{left:744,top:24,width:237,height:298,anchor:.411153,anchorY:1,referenceHeight:294},{left:1070,top:24,width:276,height:290,anchor:.429891,anchorY:1,referenceHeight:294},{left:40,top:377,width:265,height:289,anchor:.568629,anchorY:1,referenceHeight:294},{left:384,top:377,width:267,height:299,anchor:.507864,anchorY:1,referenceHeight:294},{left:742,top:377,width:241,height:301,anchor:.440831,anchorY:1,referenceHeight:294},{left:1075,top:377,width:266,height:289,anchor:.394716,anchorY:1,referenceHeight:294},{left:33,top:730,width:279,height:271,anchor:.52392,anchorY:1,referenceHeight:294},{left:377,top:730,width:282,height:305,anchor:.522781,anchorY:1,referenceHeight:294},{left:733,top:730,width:259,height:303,anchor:.424779,anchorY:1,referenceHeight:294},{left:1059,top:730,width:297,height:284,anchor:.442646,anchorY:1,referenceHeight:294},{left:36,top:1083,width:274,height:297,anchor:.555912,anchorY:1,referenceHeight:294},{left:375,top:1083,width:285,height:293,anchor:.517823,anchorY:1,referenceHeight:294},{left:737,top:1083,width:251,height:297,anchor:.441944,anchorY:1,referenceHeight:294},{left:1074,top:1083,width:267,height:300,anchor:.418123,anchorY:1,referenceHeight:294}]},gang_gold:{heroId:"gang",skin:"gang_gold",path:"assets/3d/fixed/long-motion/gang_gold-long-motion-v1.webp",width:1576,height:1516,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:53,top:24,width:289,height:295,anchor:.561703,anchorY:1,referenceHeight:294},{left:457,top:24,width:268,height:295,anchor:.46997,anchorY:1,referenceHeight:294},{left:851,top:24,width:268,height:293,anchor:.517515,anchorY:1,referenceHeight:294},{left:1231,top:24,width:296,height:286,anchor:.414725,anchorY:1,referenceHeight:294},{left:57,top:403,width:281,height:293,anchor:.588014,anchorY:1,referenceHeight:294},{left:463,top:403,width:257,height:304,anchor:.551842,anchorY:1,referenceHeight:294},{left:856,top:403,width:259,height:305,anchor:.426844,anchorY:1,referenceHeight:294},{left:1229,top:403,width:301,height:297,anchor:.36625,anchorY:1,referenceHeight:294},{left:29,top:782,width:337,height:268,anchor:.510811,anchorY:1,referenceHeight:294},{left:429,top:782,width:324,height:331,anchor:.452406,anchorY:1,referenceHeight:294},{left:827,top:782,width:316,height:331,anchor:.538008,anchorY:1,referenceHeight:294},{left:1206,top:782,width:346,height:272,anchor:.46415,anchorY:1,referenceHeight:294},{left:55,top:1161,width:285,height:287,anchor:.527643,anchorY:1,referenceHeight:294},{left:455,top:1161,width:273,height:297,anchor:.492324,anchorY:1,referenceHeight:294},{left:856,top:1161,width:259,height:296,anchor:.465192,anchorY:1,referenceHeight:294},{left:1247,top:1161,width:265,height:285,anchor:.418789,anchorY:1,referenceHeight:294}]},gwon_hill:{heroId:"gwon",skin:"gwon_hill",path:"assets/3d/fixed/long-motion/gwon_hill-long-motion-v1.webp",width:1404,height:1256,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:61,top:24,width:230,height:254,anchor:.53954,anchorY:1,referenceHeight:255},{left:428,top:24,width:198,height:254,anchor:.485826,anchorY:1,referenceHeight:255},{left:775,top:24,width:206,height:256,anchor:.485726,anchorY:1,referenceHeight:255},{left:1115,top:24,width:228,height:256,anchor:.43282,anchorY:1,referenceHeight:255},{left:62,top:338,width:228,height:263,anchor:.561672,anchorY:1,referenceHeight:255},{left:423,top:338,width:207,height:266,anchor:.460851,anchorY:1,referenceHeight:255},{left:774,top:338,width:208,height:266,anchor:.463819,anchorY:1,referenceHeight:255},{left:1111,top:338,width:235,height:263,anchor:.420266,anchorY:1,referenceHeight:255},{left:24,top:652,width:303,height:230,anchor:.450305,anchorY:1,referenceHeight:255},{left:391,top:652,width:272,height:232,anchor:.391195,anchorY:1,referenceHeight:255},{left:742,top:652,width:271,height:232,anchor:.589018,anchorY:1,referenceHeight:255},{left:1079,top:652,width:300,height:226,anchor:.534129,anchorY:1,referenceHeight:255},{left:61,top:966,width:230,height:251,anchor:.510634,anchorY:1,referenceHeight:255},{left:423,top:966,width:207,height:253,anchor:.516219,anchorY:1,referenceHeight:255},{left:774,top:966,width:208,height:253,anchor:.451244,anchorY:1,referenceHeight:255},{left:1114,top:966,width:230,height:250,anchor:.459567,anchorY:1,referenceHeight:255}]},gwon_gold:{heroId:"gwon",skin:"gwon_gold",path:"assets/3d/fixed/long-motion/gwon_gold-long-motion-v1.webp",width:1292,height:1256,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:49,top:24,width:226,height:262,anchor:.525459,anchorY:1,referenceHeight:263.5},{left:387,top:24,width:195,height:265,anchor:.482338,anchorY:1,referenceHeight:263.5},{left:710,top:24,width:196,height:264,anchor:.475649,anchorY:1,referenceHeight:263.5},{left:1020,top:24,width:222,height:263,anchor:.450645,anchorY:1,referenceHeight:263.5},{left:49,top:338,width:225,height:264,anchor:.522112,anchorY:1,referenceHeight:263.5},{left:384,top:338,width:201,height:266,anchor:.472055,anchorY:1,referenceHeight:263.5},{left:707,top:338,width:201,height:266,anchor:.494895,anchorY:1,referenceHeight:263.5},{left:1020,top:338,width:222,height:266,anchor:.462139,anchorY:1,referenceHeight:263.5},{left:25,top:652,width:274,height:233,anchor:.499603,anchorY:1,referenceHeight:263.5},{left:360,top:652,width:250,height:238,anchor:.343888,anchorY:1,referenceHeight:263.5},{left:681,top:652,width:253,height:239,anchor:.621919,anchorY:1,referenceHeight:263.5},{left:993,top:652,width:275,height:233,anchor:.501669,anchorY:1,referenceHeight:263.5},{left:49,top:966,width:226,height:261,anchor:.520589,anchorY:1,referenceHeight:263.5},{left:395,top:966,width:180,height:265,anchor:.510935,anchorY:1,referenceHeight:263.5},{left:714,top:966,width:187,height:259,anchor:.484842,anchorY:1,referenceHeight:263.5},{left:1018,top:966,width:225,height:260,anchor:.469031,anchorY:1,referenceHeight:263.5}]},gwak_black:{heroId:"gwak",skin:"gwak_black",path:"assets/3d/fixed/long-motion/gwak_black-long-motion-v1.webp",width:1004,height:1184,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:45,top:24,width:161,height:246,anchor:.53531,anchorY:1,referenceHeight:246.5},{left:301,top:24,width:151,height:242,anchor:.506557,anchorY:1,referenceHeight:246.5},{left:554,top:24,width:148,height:248,anchor:.447753,anchorY:1,referenceHeight:246.5},{left:804,top:24,width:150,height:247,anchor:.455034,anchorY:1,referenceHeight:246.5},{left:41,top:320,width:170,height:236,anchor:.538976,anchorY:1,referenceHeight:246.5},{left:297,top:320,width:159,height:243,anchor:.482732,anchorY:1,referenceHeight:246.5},{left:548,top:320,width:159,height:243,anchor:.506985,anchorY:1,referenceHeight:246.5},{left:795,top:320,width:168,height:244,anchor:.432401,anchorY:1,referenceHeight:246.5},{left:24,top:616,width:203,height:228,anchor:.423066,anchorY:1,referenceHeight:246.5},{left:286,top:616,width:181,height:233,anchor:.443687,anchorY:1,referenceHeight:246.5},{left:535,top:616,width:185,height:231,anchor:.563303,anchorY:1,referenceHeight:246.5},{left:783,top:616,width:192,height:231,anchor:.552245,anchorY:1,referenceHeight:246.5},{left:46,top:912,width:160,height:224,anchor:.450758,anchorY:1,referenceHeight:246.5},{left:302,top:912,width:149,height:228,anchor:.447396,anchorY:1,referenceHeight:246.5},{left:557,top:912,width:141,height:228,anchor:.513138,anchorY:1,referenceHeight:246.5},{left:799,top:912,width:159,height:225,anchor:.5357,anchorY:1,referenceHeight:246.5}]},gwak_gold:{heroId:"gwak",skin:"gwak_gold",path:"assets/3d/fixed/long-motion/gwak_gold-long-motion-v1.webp",width:1020,height:1296,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:38,top:24,width:179,height:272,anchor:.529932,anchorY:1,referenceHeight:266.5},{left:302,top:24,width:161,height:261,anchor:.436085,anchorY:1,referenceHeight:266.5},{left:555,top:24,width:165,height:261,anchor:.531958,anchorY:1,referenceHeight:266.5},{left:807,top:24,width:172,height:276,anchor:.426607,anchorY:1,referenceHeight:266.5},{left:34,top:348,width:188,height:263,anchor:.535009,anchorY:1,referenceHeight:266.5},{left:294,top:348,width:177,height:263,anchor:.451053,anchorY:1,referenceHeight:266.5},{left:553,top:348,width:169,height:261,anchor:.542522,anchorY:1,referenceHeight:266.5},{left:801,top:348,width:184,height:264,anchor:.438695,anchorY:1,referenceHeight:266.5},{left:24,top:672,width:207,height:258,anchor:.451672,anchorY:1,referenceHeight:266.5},{left:290,top:672,width:185,height:254,anchor:.416071,anchorY:1,referenceHeight:266.5},{left:544,top:672,width:188,height:257,anchor:.559436,anchorY:1,referenceHeight:266.5},{left:790,top:672,width:206,height:255,anchor:.553224,anchorY:1,referenceHeight:266.5},{left:46,top:996,width:164,height:245,anchor:.458732,anchorY:1,referenceHeight:266.5},{left:304,top:996,width:157,height:242,anchor:.459488,anchorY:1,referenceHeight:266.5},{left:558,top:996,width:160,height:246,anchor:.526575,anchorY:1,referenceHeight:266.5},{left:811,top:996,width:163,height:244,anchor:.531044,anchorY:1,referenceHeight:266.5}]},ahn_militia:{heroId:"ahn",skin:"ahn_militia",path:"assets/3d/fixed/long-motion/ahn_militia-long-motion-v1.webp",width:1052,height:1188,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:55,top:24,width:154,height:245,anchor:.553165,anchorY:1,referenceHeight:244.5},{left:310,top:24,width:170,height:245,anchor:.410691,anchorY:1,referenceHeight:244.5},{left:575,top:24,width:166,height:244,anchor:.514879,anchorY:1,referenceHeight:244.5},{left:842,top:24,width:157,height:247,anchor:.454218,anchorY:1,referenceHeight:244.5},{left:53,top:321,width:158,height:243,anchor:.562817,anchorY:1,referenceHeight:244.5},{left:307,top:321,width:175,height:241,anchor:.448909,anchorY:1,referenceHeight:244.5},{left:580,top:321,width:155,height:245,anchor:.502199,anchorY:1,referenceHeight:244.5},{left:842,top:321,width:158,height:243,anchor:.422723,anchorY:1,referenceHeight:244.5},{left:24,top:618,width:215,height:229,anchor:.424907,anchorY:1,referenceHeight:244.5},{left:299,top:618,width:192,height:217,anchor:.418212,anchorY:1,referenceHeight:244.5},{left:563,top:618,width:190,height:235,anchor:.567032,anchorY:1,referenceHeight:244.5},{left:814,top:618,width:213,height:228,anchor:.587225,anchorY:1,referenceHeight:244.5},{left:52,top:915,width:159,height:249,anchor:.493134,anchorY:1,referenceHeight:244.5},{left:311,top:915,width:167,height:240,anchor:.479177,anchorY:1,referenceHeight:244.5},{left:573,top:915,width:169,height:241,anchor:.501149,anchorY:1,referenceHeight:244.5},{left:843,top:915,width:155,height:245,anchor:.477658,anchorY:1,referenceHeight:244.5}]},ahn_gold:{heroId:"ahn",skin:"ahn_gold",path:"assets/3d/fixed/long-motion/ahn_gold-long-motion-v1.webp",width:1108,height:1212,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:62,top:24,width:153,height:255,anchor:.547535,anchorY:1,referenceHeight:250.5},{left:329,top:24,width:173,height:246,anchor:.485219,anchorY:1,referenceHeight:250.5},{left:608,top:24,width:169,height:247,anchor:.512966,anchorY:1,referenceHeight:250.5},{left:889,top:24,width:161,height:254,anchor:.438063,anchorY:1,referenceHeight:250.5},{left:58,top:327,width:162,height:253,anchor:.583833,anchorY:1,referenceHeight:250.5},{left:327,top:327,width:178,height:254,anchor:.479165,anchorY:1,referenceHeight:250.5},{left:613,top:327,width:159,height:254,anchor:.481814,anchorY:1,referenceHeight:250.5},{left:889,top:327,width:161,height:255,anchor:.456645,anchorY:1,referenceHeight:250.5},{left:25,top:630,width:228,height:236,anchor:.419942,anchorY:1,referenceHeight:250.5},{left:312,top:630,width:207,height:239,anchor:.441756,anchorY:1,referenceHeight:250.5},{left:589,top:630,width:207,height:240,anchor:.535535,anchorY:1,referenceHeight:250.5},{left:855,top:630,width:229,height:239,anchor:.561593,anchorY:1,referenceHeight:250.5},{left:58,top:933,width:162,height:251,anchor:.497211,anchorY:1,referenceHeight:250.5},{left:326,top:933,width:180,height:253,anchor:.491748,anchorY:1,referenceHeight:250.5},{left:606,top:933,width:174,height:252,anchor:.493976,anchorY:1,referenceHeight:250.5},{left:889,top:933,width:161,height:249,anchor:.499091,anchorY:1,referenceHeight:250.5}]},dangun_sky:{heroId:"dangun",skin:"dangun_sky",path:"assets/3d/fixed/long-motion/dangun_sky-long-motion-v1.webp",width:1028,height:1148,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:44,top:24,width:170,height:236,anchor:.565564,anchorY:1,referenceHeight:236.5},{left:301,top:24,width:170,height:239,anchor:.517791,anchorY:1,referenceHeight:236.5},{left:558,top:24,width:170,height:237,anchor:.486145,anchorY:1,referenceHeight:236.5},{left:813,top:24,width:173,height:235,anchor:.410773,anchorY:1,referenceHeight:236.5},{left:41,top:311,width:176,height:239,anchor:.594817,anchorY:1,referenceHeight:236.5},{left:298,top:311,width:175,height:239,anchor:.503851,anchorY:1,referenceHeight:236.5},{left:556,top:311,width:173,height:238,anchor:.475584,anchorY:1,referenceHeight:236.5},{left:809,top:311,width:181,height:239,anchor:.389585,anchorY:1,referenceHeight:236.5},{left:25,top:598,width:207,height:225,anchor:.446492,anchorY:1,referenceHeight:236.5},{left:285,top:598,width:201,height:236,anchor:.430831,anchorY:1,referenceHeight:236.5},{left:544,top:598,width:197,height:234,anchor:.564017,anchorY:1,referenceHeight:236.5},{left:795,top:598,width:209,height:230,anchor:.508784,anchorY:1,referenceHeight:236.5},{left:43,top:885,width:171,height:231,anchor:.526172,anchorY:1,referenceHeight:236.5},{left:301,top:885,width:169,height:224,anchor:.512632,anchorY:1,referenceHeight:236.5},{left:559,top:885,width:168,height:224,anchor:.486522,anchorY:1,referenceHeight:236.5},{left:814,top:885,width:171,height:228,anchor:.470274,anchorY:1,referenceHeight:236.5}]},dangun_gold:{heroId:"dangun",skin:"dangun_gold",path:"assets/3d/fixed/long-motion/dangun_gold-long-motion-v1.webp",width:1e3,height:1144,roles:["compress-a","compress-b","early-follow","settle"],frames:[{left:36,top:24,width:178,height:236,anchor:.571976,anchorY:1,referenceHeight:237},{left:291,top:24,width:169,height:238,anchor:.482308,anchorY:1,referenceHeight:237},{left:541,top:24,width:169,height:238,anchor:.503339,anchorY:1,referenceHeight:237},{left:785,top:24,width:181,height:236,anchor:.431487,anchorY:1,referenceHeight:237},{left:39,top:310,width:173,height:229,anchor:.531126,anchorY:1,referenceHeight:237},{left:291,top:310,width:168,height:233,anchor:.465383,anchorY:1,referenceHeight:237},{left:541,top:310,width:169,height:233,anchor:.518059,anchorY:1,referenceHeight:237},{left:789,top:310,width:173,height:230,anchor:.443617,anchorY:1,referenceHeight:237},{left:25,top:596,width:201,height:230,anchor:.50121,anchorY:1,referenceHeight:237},{left:278,top:596,width:194,height:232,anchor:.425423,anchorY:1,referenceHeight:237},{left:527,top:596,width:197,height:234,anchor:.579432,anchorY:1,referenceHeight:237},{left:774,top:596,width:202,height:230,anchor:.474777,anchorY:1,referenceHeight:237},{left:41,top:882,width:168,height:236,anchor:.554324,anchorY:1,referenceHeight:237},{left:292,top:882,width:166,height:229,anchor:.505386,anchorY:1,referenceHeight:237},{left:542,top:882,width:167,height:230,anchor:.472456,anchorY:1,referenceHeight:237},{left:792,top:882,width:166,height:234,anchor:.430091,anchorY:1,referenceHeight:237}]}};var pf={yi:ti.yi.path,towers:"assets/3d/fixed/tower-tiers-v2.webp",winter:"assets/3d/fixed/winter-props-v2.webp"},Nh=new Map,C1=new N(0,1,0),R1=new N(1,0,0),zr=new N,Vr=new zt,gf=new N,mf=new N,I1=new st().set(1,.5,0,0,0,0,0,.042,0,-.75,1,0,0,0,0,1),wf=new st;function P1(i,e,t,n,r,o,s,a=48){let c=n+o,h=r+s,f=n-1,d=r-1;for(let w=r;w<r+s;w++)for(let v=n;v<n+o;v++)i[(w*e+v)*4+3]>=a&&(c=Math.min(c,v),f=Math.max(f,v),h=Math.min(h,w),d=Math.max(d,w));if(c>f)return{left:n,top:r,width:o,height:s,anchor:.5};let l=0,u=0;for(let w=Math.max(h,Math.floor(d-(d-h)*.1));w<=d;w++)for(let v=c;v<=f;v++)i[(w*e+v)*4+3]>=96&&(l+=v,u++);return{left:c,top:h,width:f-c+1,height:d-h+1,anchor:u?Ys.clamp((l/u-c)/(f-c+1),.2,.8):.5}}function L1(i,e,t=()=>document.createElement("canvas")){let r=t();return r.width=e.width+12*2,r.height=e.height+12*2,r.getContext("2d").drawImage(i,e.left,e.top,e.width,e.height,12,12,e.width,e.height),{canvas:r,frame:{...e,left:12,top:12},sourceBounds:e}}async function gn(i,e,t,n=null,r=!0){let o=()=>new Promise((s,a)=>{let c=i.startsWith("data:")?i:new URL(i,new URL("../../",import.meta.url)).href;new Tr().load(c,h=>{let f=document.createElement("canvas");f.width=h.width,f.height=h.height;let d=f.getContext("2d",{willReadFrequently:!0});d.drawImage(h,0,0);let l=n?.frames?null:d.getImageData(0,0,h.width,h.height).data,u=[];if(n?.frames)for(let g of n.frames)u.push({...g,left:Math.round(g.left*h.width/n.width),top:Math.round(g.top*h.height/n.height),width:Math.round(g.width*h.width/n.width),height:Math.round(g.height*h.height/n.height),referenceHeight:g.referenceHeight*h.height/n.height});else for(let g=0;g<t;g++)for(let p=0;p<e;p++){let M=Math.round(n?n.x[p]*h.width/n.width:p*h.width/e),H=Math.round(n?n.y[g]*h.height/n.height:g*h.height/t),y=Math.round(n?n.x[p+1]*h.width/n.width:(p+1)*h.width/e),S=Math.round(n?n.y[g+1]*h.height/n.height:(g+1)*h.height/t);u.push(P1(l,h.width,h.height,M,H,y-M,S-H,n?11:48))}let w=n?u.map(g=>L1(f,g)):null,v=!r&&n?.frames?h.width*h.height*4:0;v&&(f.width=0,f.height=0),s({canvas:v?null:f,frames:u,width:h.width,height:h.height,isolated:w,poseAtlas:!!n?.frames,releasedSheetBytes:v})},void 0,a)});return r?(Nh.has(i)||Nh.set(i,o()),Nh.get(i)):o()}var Js=class{constructor(e){this.world=e,this.ready=!1,this.loading=!0,this.coreLoading=!0,this.failed=!1,this.destroyed=!1,this.textures=new Map,this.materials=new Map,this.geometries=new Map,this.combatPoses={enemy:{},ally:{}},this.combatInbetweens={enemy:{},ally:{}},this.combatGeneration=0,this.heroPoses={},this.heroPoseKey=null,this.heroPoseGeneration=0,this.heroPoseRequests=new Map,this.skinPoses={},this.skinGeneration=0,this.heroLooksKey=null,this.inbetweenPoses={},this.inbetweenGeneration=0,this.inbetweenKey=null,this.longMotionPoses={},this.longMotionGeneration=0,this.longMotionKey=null,this.longMotionRequests=new Map,e.renderer.domElement.dataset.fixedArtStatus="loading";let t=Object.values(Hh).map(a=>gn(a.path,5,4,a).catch(c=>(console.warn("Landmark stage art unavailable; keeping base illustration.",c.message),null))),n=gn(Br.path,3,2,Br).catch(a=>(console.warn("Seasonal trees unavailable; keeping base scenery.",a.message),null)),r=Promise.all(Object.entries(sf).map(async([a,c])=>[a,await gn(c.path,3,2,c).catch(h=>(console.warn("Village props unavailable; keeping base scenery.",a,h.message),null))]));this.corePromise=Promise.all([Ol(),gn(pf.towers,5,2),gn(pf.winter,3,2),...t,n,r]).then(([,a,c,h,f,d,l])=>{if(this.destroyed)return;this.towerFrames=a,this.winter=c,this.landmarks={a:h,b:f},this.seasonTrees=d,this.villageProps=Object.fromEntries(l),this.ready=!0,e.renderer.domElement.dataset.seasonTreeArtStatus=d?"ready":"fallback";let u=Object.values(this.villageProps).filter(Boolean).length;e.renderer.domElement.dataset.villagePropArtStatus=u===2?"ready":u?"partial":"fallback",e.renderer.domElement.dataset.landmarkArtStatus=h&&f?"ready":h||f?"partial":"fallback"}).catch(a=>{this.failed=!0,console.warn("Illustrated battle assets unavailable; keeping mesh fallback.",a.message)}).finally(()=>{this.coreLoading=!1,this.updateLoading()}),this.prepareCombatArt(e.stage,e.combatKinds),this.prepareHeroLooks(e.heroLooks);let o=64,s=new Uint8Array(o*o*4);for(let a=0;a<o;a++)for(let c=0;c<o;c++){let h=Math.hypot((c+.5-o/2)/(o/2),(a+.5-o/2)/(o/2)),f=(a*o+c)*4;s.set([255,255,255,Math.round(Math.pow(Math.max(0,1-h),1.5)*255)],f)}this.shadowTexture=new Vi(s,o,o),this.shadowTexture.needsUpdate=!0,this.shadowMaterial=new jt({map:this.shadowTexture,color:"#061725",transparent:!0,opacity:.58,depthWrite:!1,toneMapped:!1}),this.shadowMaterial.userData.fixedArt=!0}updateLoading(){this.loading=!!(this.coreLoading||this.combatLoading||this.heroPoseLoading||this.skinLoading||this.inbetweenLoading||this.longMotionLoading),this.destroyed||(this.world.renderer.domElement.dataset.fixedArtStatus=this.loading?"loading":this.ready?"ready":"fallback")}characterMemory(){let e=new Set([...Object.values(this.heroPoses),...Object.values(this.skinPoses),...Object.values(this.inbetweenPoses),...Object.values(this.longMotionPoses),...Object.values(this.combatPoses.enemy),...Object.values(this.combatPoses.ally),...Object.values(this.combatInbetweens.enemy),...Object.values(this.combatInbetweens.ally)].filter(Boolean)),t=new Set,n=0;for(let r of e){r.canvas&&t.add(r.canvas);for(let o of r.isolated??[])t.add(o.canvas);n+=r.releasedSheetBytes??0}return{characterCanvasBytes:[...t].reduce((r,o)=>r+o.width*o.height*4,0),characterCanvasCount:t.size,releasedSheetBytes:n}}releasePoseAtlas(e){for(let{canvas:t}of e?.isolated??[]){let n=this.textures.get(t);if(n){for(let r of[t,"shadow:"+n.uuid])this.materials.get(r)?.dispose(),this.materials.delete(r);for(let[r,o]of this.geometries)r.startsWith(n.uuid+":")&&(o.dispose(),this.geometries.delete(r));n.dispose(),this.textures.delete(t)}}}prepareCombatArt(e,t=null){if(this.destroyed)return this.promise;let n=++this.combatGeneration,r=tf(e,t),o=[];this.combatPoses??(this.combatPoses={enemy:{},ally:{}}),this.combatInbetweens??(this.combatInbetweens={enemy:{},ally:{}});for(let s of["enemy","ally"]){let a=new Set(r[s]);for(let c of[this.combatPoses[s],this.combatInbetweens[s]])for(let[h,f]of Object.entries(c))a.has(h)||(this.releasePoseAtlas(f),delete c[h]);for(let c of a){let h=Kl[s][c],f=this.combatPoses[s][c],d=Ws[c],l=this.combatInbetweens[s][c],u=Promise.resolve(f!==void 0?f:h?gn(h.path,4,4,h,!1):null).catch(v=>(console.warn("Combat poses unavailable; keeping static illustration.",c,v.message),null)),w=Promise.resolve(l!==void 0?l:d?.side===s?gn(d.path,4,4,d,!1):null).catch(v=>(console.warn("Combat in-betweens unavailable; keeping original poses.",c,v.message),null));o.push(Promise.all([u,w]).then(([v,g])=>({side:s,id:c,art:v,inbetweens:g})))}}return this.combatLoading=!0,this.updateLoading(),this.combatPromise=Promise.all(o).then(s=>{if(this.destroyed||n!==this.combatGeneration)return;this.combatPoses={enemy:{},ally:{}},this.combatInbetweens={enemy:{},ally:{}};for(let{side:d,id:l,art:u,inbetweens:w}of s)this.combatPoses[d][l]=u,this.combatInbetweens[d][l]=w;let a=s.filter(d=>d.art).length,c=this.world.renderer.domElement.dataset;Object.assign(c,{combatPoseStatus:a===s.length?"ready":"partial",combatPoseCount:String(a),combatPoseExpected:String(s.length),combatPoseKinds:s.map(d=>d.id).join(",")});let h=s.filter(d=>Ws[d.id]?.side===d.side),f=h.filter(d=>d.inbetweens).length;Object.assign(c,{combatInbetweenStatus:f===h.length?"ready":"partial",combatInbetweenCount:String(f),combatInbetweenExpected:String(h.length),combatInbetweenKinds:h.map(d=>d.id).join(",")})}).finally(()=>{n===this.combatGeneration&&(this.combatLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}refreshPromise(){this.promise=Promise.all([this.corePromise,this.combatPromise,this.heroPosePromise,this.skinPromise,this.inbetweenPromise,this.longMotionPromise])}prepareHeroPoses(e){if(this.destroyed)return this.promise;let t=Ch(e),n=ql(e);if(n===this.heroPoseKey)return this.promise;this.heroPoseKey=n;let r=this.heroPoseGeneration=(this.heroPoseGeneration??0)+1,o=new Set(t);this.heroPoses??(this.heroPoses={}),this.heroPoseRequests??(this.heroPoseRequests=new Map);for(let[a,c]of Object.entries(this.heroPoses))o.has(a)||(this.releasePoseAtlas(c),delete this.heroPoses[a]);for(let a of this.heroPoseRequests.keys())o.has(a)||this.heroPoseRequests.delete(a);this.yi=this.heroPoses.yi??null,this.heroPoseLoading=!0,this.updateLoading();let s=this.world.renderer.domElement.dataset;return Object.assign(s,{heroPoseStatus:"loading",heroPoseExpected:String(t.length),heroPoseKinds:n}),this.heroPosePromise=Promise.all(t.map(async a=>{if(Object.hasOwn(this.heroPoses,a))return{id:a,art:this.heroPoses[a]};let c=this.heroPoseRequests.get(a);if(!c){let f=ti[a];c=gn(f.path,4,4,f,!1).catch(d=>(console.warn("Hero poses unavailable; keeping base illustration.",a,d.message),null)),this.heroPoseRequests.set(a,c)}let h=await c;return{id:a,art:h}})).then(a=>{if(this.destroyed||r!==this.heroPoseGeneration)return;this.heroPoses=Object.fromEntries(a.map(({id:d,art:l})=>[d,l])),this.yi=this.heroPoses.yi??null;for(let{id:d}of a)this.heroPoseRequests.delete(d);let c=a.filter(d=>d.art).length,h=new Set;for(let{art:d}of a)if(d){d.canvas&&h.add(d.canvas);for(let l of d.isolated??[])h.add(l.canvas)}let f=[...h].reduce((d,l)=>d+l.width*l.height*4,0);Object.assign(s,{heroPoseStatus:c===a.length?"ready":"partial",heroPoseCount:String(c),heroPoseExpected:String(a.length),heroPoseKinds:n,heroPoseCanvasBytes:String(f)})}).finally(()=>{r===this.heroPoseGeneration&&(this.heroPoseLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}prepareHeroLooks(e){if(this.destroyed)return this.promise;this.prepareHeroPoses(e),this.prepareInbetweens(e),this.prepareLongMotion(e);let t=rf(e);if(t===this.heroLooksKey)return this.promise;this.heroLooksKey=t;let n=this.skinGeneration=(this.skinGeneration??0)+1,r=Ph(e),o=new Set(r.map(s=>s.skin));this.skinPoses??(this.skinPoses={});for(let[s,a]of Object.entries(this.skinPoses))o.has(s)||(this.releasePoseAtlas(a),delete this.skinPoses[s]);return this.skinLoading=!0,this.updateLoading(),this.skinPromise=Promise.all(r.map(async({skin:s})=>{let a=nf[s],c=await Promise.resolve(this.skinPoses[s]??(a?gn(a.path,4,4,a,!1):null)).catch(h=>(console.warn("Costume poses unavailable; keeping base hero poses.",s,h.message),null));return{skin:s,art:c}})).then(s=>{if(this.destroyed||n!==this.skinGeneration)return;this.skinPoses=Object.fromEntries(s.map(({skin:c,art:h})=>[c,h]));let a=s.filter(c=>c.art).length;Object.assign(this.world.renderer.domElement.dataset,{skinPoseStatus:a===s.length?"ready":"partial",skinPoseCount:String(a),skinPoseExpected:String(s.length),skinPoseKinds:t})}).finally(()=>{n===this.skinGeneration&&(this.skinLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}prepareInbetweens(e=[]){if(this.destroyed)return this.promise;let t=Yh(e);if(t===this.inbetweenKey)return this.promise;this.inbetweenKey=t;let n=this.inbetweenGeneration=(this.inbetweenGeneration??0)+1,r=Ks(e).filter(s=>qs[s.key]),o=new Set(r.map(s=>s.key));this.inbetweenPoses??(this.inbetweenPoses={});for(let[s,a]of Object.entries(this.inbetweenPoses))o.has(s)||(this.releasePoseAtlas(a),delete this.inbetweenPoses[s]);return this.inbetweenLoading=!0,this.updateLoading(),this.inbetweenPromise=Promise.all(r.map(async s=>{let a=qs[s.key],c=await Promise.resolve(this.inbetweenPoses[s.key]??gn(a.path,4,4,a,!1)).catch(h=>(console.warn("In-between poses unavailable; keeping original poses.",s.key,h.message),null));return{...s,art:c}})).then(s=>{if(this.destroyed||n!==this.inbetweenGeneration)return;this.inbetweenPoses=Object.fromEntries(s.map(({key:c,art:h})=>[c,h]));let a=s.filter(c=>c.art).length;Object.assign(this.world.renderer.domElement.dataset,{heroInbetweenStatus:a===s.length?"ready":"partial",heroInbetweenCount:String(a),heroInbetweenExpected:String(s.length),heroInbetweenKinds:r.map(c=>c.key).join(","),heroInbetweenLookKey:t})}).finally(()=>{n===this.inbetweenGeneration&&(this.inbetweenLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}prepareLongMotion(e=[]){if(this.destroyed)return this.promise;let t=Yh(e);if(t===this.longMotionKey)return this.promise;this.longMotionKey=t;let n=this.longMotionGeneration=(this.longMotionGeneration??0)+1,r=Ks(e).filter(s=>Zs[s.key]),o=new Set(r.map(s=>s.key));this.longMotionPoses??(this.longMotionPoses={}),this.longMotionRequests??(this.longMotionRequests=new Map);for(let[s,a]of Object.entries(this.longMotionPoses))o.has(s)||(this.releasePoseAtlas(a),delete this.longMotionPoses[s]);for(let s of this.longMotionRequests.keys())o.has(s)||this.longMotionRequests.delete(s);return this.longMotionLoading=!0,this.updateLoading(),this.longMotionPromise=Promise.all(r.map(async s=>{if(Object.hasOwn(this.longMotionPoses,s.key))return{...s,art:this.longMotionPoses[s.key]};let a=this.longMotionRequests.get(s.key);if(!a){let c=Zs[s.key];a=gn(c.path,4,4,c,!1).catch(h=>(console.warn("Long motion unavailable; keeping same-costume original poses.",s.key,h.message),null)),this.longMotionRequests.set(s.key,a)}return{...s,art:await a}})).then(s=>{if(this.destroyed||n!==this.longMotionGeneration)return;this.longMotionPoses=Object.fromEntries(s.map(({key:c,art:h})=>[c,h]));for(let{key:c}of s)this.longMotionRequests.delete(c);let a=s.filter(c=>c.art).length;Object.assign(this.world.renderer.domElement.dataset,{heroLongMotionStatus:a===s.length?"ready":"partial",heroLongMotionCount:String(a),heroLongMotionExpected:String(s.length),heroLongMotionKinds:r.map(c=>c.key).join(",")})}).finally(()=>{n===this.longMotionGeneration&&(this.longMotionLoading=!1,this.updateLoading())}),this.refreshPromise(),this.promise}texture(e){if(!this.textures.has(e)){let t=new vr(e);t.colorSpace=bt,t.anisotropy=4,t.generateMipmaps=!0,this.textures.set(e,t)}return this.textures.get(e)}material(e,t=!1){let n=e;if(!this.materials.has(n)){let s=new jt({map:this.texture(e),transparent:!0,alphaTest:.16,depthWrite:!0,toneMapped:!1,side:Ot,forceSinglePass:!0});s.userData.fixedArt=!0,this.materials.set(n,s)}let r=this.materials.get(n),o=this.world.theme;return r.color.set(o.snow?t?"#e5ebff":"#9eb8df":o.id==="autumn"?"#e7d3c2":t?"#f2e6d2":"#bacbd0"),r}geometry(e,t,n,r=t?.anchor??.5){let o=t??{left:0,top:0,width:e.width,height:e.height},s=o.anchorY??1,a=[this.texture(e).uuid,o.left,o.top,o.width,o.height,n,r,s,o.referenceHeight].join(":");if(!this.geometries.has(a)){let c=o.referenceHeight?n*o.height/o.referenceHeight:n,h=c*o.width/o.height,f=new Xn(h,c);f.translate(h*(.5-r),c*(s-.5),0);let d=f.attributes.uv;for(let l=0;l<d.count;l++)d.setXY(l,(o.left+d.getX(l)*o.width)/e.width,1-(o.top+(1-d.getY(l))*o.height)/e.height);this.geometries.set(a,f)}return this.geometries.get(a)}image(e,t,n=null,r=!1){if(!e)return null;let o=e.img??e.canvas??e,s=new gt(this.geometry(o,n,t,e.ax??n?.anchor??.5),this.material(o,r));return s.quaternion.copy(this.world.camera.quaternion),s.userData.fixedArt=!0,s.userData.artHeight=t,s.castShadow=!1,s.receiveShadow=!1,s}shadow(e,t=1,n=t*.65){let r=new Xn(t,n);r.rotateX(-Math.PI/2),r.userData.owned3d=!0;let o=new gt(r,this.shadowMaterial);return o.position.y=.039,o.raycast=()=>{},e.add(o),o}castImage(e,t){let n=new gt(t.geometry,this.imageShadowMaterial(t));return n.matrixAutoUpdate=!1,n.raycast=()=>{},n.userData.fixedArt=!0,n.userData.illustrationShadow=!0,n.userData.shadowAllowed=!0,n.visible=this.world.highQuality!==!1,e.add(n),this.projectShadow(n,t),n}imageShadowMaterial(e){let t="shadow:"+e.material.map.uuid;if(!this.materials.has(t)){let n=new jt({map:e.material.map,color:"#07172e",transparent:!0,opacity:.46,alphaTest:.04,depthWrite:!1,toneMapped:!1,side:Ot,forceSinglePass:!0});n.userData.fixedArt=!0,this.materials.set(t,n)}return this.materials.get(t)}projectShadow(e,t,n=null){t.updateMatrix(),e.matrix.copy(t.matrix),n&&e.matrix.premultiply(wf.makeRotationFromQuaternion(n.quaternion)),e.matrix.premultiply(I1),n&&e.matrix.premultiply(wf.makeRotationFromQuaternion(n.quaternion.clone().invert())),e.geometry=t.geometry,e.material=this.imageShadowMaterial(t),e.matrixWorldNeedsUpdate=!0}prop(e,t=2,n=0,r=null){let o=hf(e,n),s=af(this.world.theme),a=o===null?null:this.villageProps?.[s]?.isolated?.[o],c=cf(e)??e,h={snowPine:n>=.5?1:0,snowRock:2,hanok:n>=.5?4:3,cliff:5}[c],f=this.world.theme.snow&&h!==void 0,d=of(this.world.theme,e,n),l=d===null?null:this.seasonTrees?.isolated?.[d],u=a?.canvas??l?.canvas??(f?this.winter:c==="gate"?Gl("gate"):Wl(c==="blossom"||c==="broadleaf"?"pine":c));if(!u)return new Pt;let w=new Pt,v=this.image(u,t,a?.frame??l?.frame??(f?u.frames[h]:null)),g=o===null?1:lf(v,r);return w.add(v),this.shadow(w,t*g*.55,t*g*.3),this.castImage(w,v),o!==null&&(w.userData.villageProp={kind:e,index:o,season:s,ready:!!a,footprintRadius:r,height:t*g}),l&&(w.userData.seasonTree={kind:e,index:d}),w}hideModel(e){for(let t of e.children)t!==e.userData.hp&&t!==e.userData.ownerRing&&(t.visible=!1)}unitArt(e,t,n){let r=t?e.heroId:n?e.kind:e.type,o=t&&en(r,e.skin)?this.skinPoses?.[e.skin]:null;return(t?o??this.heroPoses?.[r]??(r==="yi"?this.yi:null):this.combatPoses?.[n?"ally":"enemy"]?.[r])??(t?Bl(r,e.skin):n?zl(r):kl(r))}unitInbetweens(e,t,n="hero"){if(n!=="hero"){let a=n==="ally"?e.kind:e.type,c=Ws[a];return t?.poseAtlas&&t===this.combatPoses?.[n]?.[a]&&c?.side===n?this.combatInbetweens?.[n]?.[a]??null:null}let r=e.heroId;if(!r||!t?.poseAtlas)return null;let o=en(r,e.skin)?this.skinPoses?.[e.skin]:null,s=o&&t===o?e.skin:t===this.heroPoses?.[r]?r:null;return s&&qs[s]?.heroId===r?this.inbetweenPoses?.[s]??null:null}unitLongMotion(e,t,n="hero"){if(n!=="hero"||!e.heroId||!t?.poseAtlas)return null;let r=en(e.heroId,e.skin)?this.skinPoses?.[e.skin]:null,o=r&&t===r?e.skin:t===this.heroPoses?.[e.heroId]?e.heroId:null;return o&&Zs[o]?.heroId===e.heroId?this.longMotionPoses?.[o]??null:null}unitProxy(e,t=!1){if(!this.ready||!this.unitArt(e,!1,t))return null;let n=new Pt,r=new Pt,o=new Pt;return n.add(r,o),o.userData.muzzle=new N,n.userData.rig=r,n.userData.weapons=[null,o],n.userData.illustrationProxy=!0,n}attachUnit(e,t,n,r){if(!this.ready||e.userData.fixedImage)return;let o=n?t.heroId:r?t.kind:t.type,s=this.unitArt(t,n,r);if(!s)return;let a=n?1.85:["ram","turtle","courier","cavalry"].includes(o)?1.5:1.36;this.hideModel(e);let c=!!s.poseAtlas||n&&s===this.yi,h=c?s.isolated?.[0]:null,f=this.image(h??s,a,h?.frame??(c?s.frames[0]:null),!0);f.material=f.material.clone(),f.material.userData.owned3d=!0,e.add(f);let d=n?new gt(f.geometry,new jt({map:f.material.map,color:"#7cb4e6",transparent:!0,opacity:.5,alphaTest:.18,depthTest:!0,depthFunc:Ni,depthWrite:!1,toneMapped:!1,side:Ot,forceSinglePass:!0})):null;d&&(d.material.userData.owned3d=!0,d.renderOrder=30,d.raycast=()=>{},e.add(d));let l=this.shadow(e,n?.85:.65,.5),u=this.castImage(e,f);e.userData.fixedImage={image:f,hint:d,height:a,art:s,kind:o,contact:l,shadow:u,directional:c,faction:n?"hero":r?"ally":"enemy"},e.userData.labelHeight=a+.18}attachTower(e,t,n,r){if(!this.ready||e.userData.fixedImage)return;let o=["sungnyemun","hwaseong"].includes(t),s=Xl(t,n,r),a=n===4?r==="B"?4:3:n-1,c=a+(t==="hwaseong"?5:0),h=s?this.landmarks?.[s.sheet]?.isolated[s.index]:null,f=o?this.towerFrames:h??Vl(t);if(!f)return;let d=o?f.frames[c]:h?.frame??null,l=o||!!h,u=1.2;this.hideModel(e);let w=this.image(f,u,d);if(e.add(w),this.shadow(e,1,.63),this.castImage(e,w),e.userData.fixedImage={image:w,height:u,kind:t,dedicated:l,frameIndex:o?c:s?.index},e.userData.labelHeight=u+.2,!l&&n>1)for(let v=0;v<n-1;v++){let g=this.prop("jangseung",.28);g.position.set((v-(n-2)/2)*.22,0,.25),e.add(g)}}updateUnit(e,t,n,r,o,s=null){let a=e.userData.fixedImage;if(!a)return;let{image:c,hint:h,art:f,height:d}=a,l=this.unitInbetweens(t,f,a.faction);a.inbetweens=l;let u=l?this.unitLongMotion(t,f,a.faction):null;a.longMotion=u,Vr.copy(e.quaternion).invert(),c.quaternion.copy(this.world.camera.quaternion).premultiply(Vr);let w=R1.clone().applyQuaternion(this.world.camera.quaternion),v=C1.clone().applyQuaternion(this.world.camera.quaternion);zr.set(Math.sin(e.rotation.y),0,Math.cos(e.rotation.y));let g=zr.dot(w),p=zr.dot(v);gf.copy(w).setY(0).normalize(),mf.copy(v).setY(0).normalize();let M=s?uf(a.motion,{...s,kind:a.kind,attack:r,hp:t.hp,inbetweens:!!l,longMotion:!!u,facingX:zr.dot(gf),facingY:zr.dot(mf),actionSeq:t.actionSeq??s.actionSeq,actionAt:t.actionAt??s.actionAt,actionDuration:t.actionDuration??s.actionDuration,stunned:t.stunT>0}):null;M&&(a.motion=M.state,a.motionPhase=M.phase,a.motionBlend=M.blend);let H=Number.isInteger(s?.poseRow)||!M?p>=0?g>=0?1:2:g>=0?0:3:M.facing,y=H<2?1:-1;if(e.userData.illustrationProxy&&e.userData.weapons[1].position.copy(v).multiplyScalar(d*.6).addScaledVector(w,y*.18).applyQuaternion(Vr),a.directional){let S=H,b=Number.isInteger(s?.poseRow)?s.poseRow:M?M.row:r>0?3:n?1+Math.floor(o*5.5+(e.userData.phase??0))%2:0,E=b>=8&&b<=11&&u||b>=4&&b<=7&&l||b>=0&&b<=3?b:0,_=E*4+S,A=E>=8?u:E>=4?l:f,P=E>=8?_-32:E>=4?_-16:_,D=A.isolated?.[P],U=D?.canvas??A.canvas,z=D?.frame??A.frames[P];if(c.geometry=this.geometry(U,z,d),c.material.map=this.texture(U),c.material.color.copy(this.material(U,!0).color),c.scale.x=1,a.pose=["idle","walk-left","walk-right","attack","pass-a","pass-b","follow-through","recover","compress-a","compress-b","early-follow","settle"][E],a.facing=S,a.poseIndex=_,a.faction==="hero"&&(this.world.renderer.domElement.dataset.heroLongMotionActive=String(E>=8)),a.faction==="hero"&&(this.world.renderer.domElement.dataset.heroInbetweenActive=String(E>=4)),a.kind==="yi"&&(this.world.renderer.domElement.dataset.yiPose=a.pose,this.world.renderer.domElement.dataset.yiFacing=String(S)),a.faction!=="hero"){let I=this.world.renderer.domElement.dataset;I.combatPoseActive="true",I.combatPoseLastKind=a.kind,I.combatPoseLastState=a.pose,I.combatInbetweenActive=String(E>=4)}}else c.scale.x=y;c.position.set(0,M?M.lift:n?Math.abs(Math.sin(o*8+(e.userData.phase??0)))*.025:0,0),M&&(c.quaternion.multiply(new zt().setFromAxisAngle(new N(0,0,1),-M.lean*y)),c.position.addScaledVector(w.clone().applyQuaternion(Vr),M.recoil*y)),a.shadow.userData.shadowAllowed=!0,a.shadow.visible=this.world.highQuality!==!1,a.contact&&(a.contact.visible=!0),a.shadow.visible&&this.projectShadow(a.shadow,c,e),c.material.opacity=t.stealth&&!t.revealed?.25:1,h&&(h.geometry=c.geometry,h.material.map=c.material.map,h.quaternion.copy(c.quaternion),h.position.copy(c.position),h.scale.copy(c.scale),h.material.color.set(t.owner===1?"#efaa96":"#7cb4e6"),h.visible=!t.dead),e.userData.hp&&e.userData.hp.position.copy(v).multiplyScalar(d+.13).applyQuaternion(Vr),this.world.renderer.domElement.dataset.fixedArt="true",M&&(this.world.renderer.domElement.dataset.spriteMotion="distance-contact-recovery")}updateDeath(e,t,n=1.3){let r=e.userData.fixedImage;if(!r)return;let o=Ys.clamp(t/n,0,1),s=1-Math.pow(1-Math.min(1,t/.3),3);r.motion=null,r.image.quaternion.copy(this.world.camera.quaternion).premultiply(e.quaternion.clone().invert()),r.image.rotateZ((e.userData.entity?.id%2?1:-1)*s*.7),r.image.position.set(0,-s*.07,0),r.image.material.opacity=1-o,r.shadow.userData.shadowAllowed=o<.5,r.shadow.visible=o<.5&&this.world.highQuality!==!1,r.contact&&(r.contact.visible=o<.5),r.hint&&(r.hint.visible=!1),r.shadow.visible&&this.projectShadow(r.shadow,r.image,e)}anchor(e,t=.12){let n=e?.userData.fixedImage;return n?new N(0,n.height+t,0).applyQuaternion(this.world.camera.quaternion).add(e.position):null}towerMuzzle(e){let t=e?.userData.fixedImage;return t?this.anchor(e,-t.height*.45):null}dispose(){if(!this.destroyed){this.destroyed=!0;for(let e of this.textures.values())e.dispose();for(let e of this.materials.values())e.dispose();for(let e of this.geometries.values())e.dispose();this.shadowMaterial?.dispose(),this.shadowTexture?.dispose(),this.textures.clear(),this.materials.clear(),this.geometries.clear(),this.heroPoseRequests?.clear(),this.longMotionRequests?.clear(),this.heroPoses={},this.yi=null,this.skinPoses={},this.inbetweenPoses={},this.longMotionPoses={},this.combatPoses={enemy:{},ally:{}},this.combatInbetweens={enemy:{},ally:{}},this.towerFrames=null,this.winter=null,this.landmarks={},this.seasonTrees=null,this.villageProps={},this.ready=!1,this.coreLoading=this.combatLoading=this.heroPoseLoading=this.skinLoading=this.inbetweenLoading=this.longMotionLoading=this.loading=!1}}};var Uh={spring:{name:"봄",english:"SPRING",caption:"꽃잎이 흩날리는 길목, 다시 피어나는 수호의 맹세.",sky:"#182d3b",fog:"#263d4c",ground:"#a7b9a6",road:"#ddd0b5",shore:"#929b87",water:"#365c72",leaf:["#dfa3b3","#e7c0c8","#b67e97"],grass:"#5d775b",sun:"#ffe2ba",sunPower:2.05,hemi:"#abc9e2",bounce:"#364940",fill:"#829fbf",exposure:1.02,particle:"petal",snow:!1},summer:{name:"여름",english:"SUMMER",caption:"푸른 숲과 강을 따라, 뜨거운 진격을 막아라.",sky:"#162c38",fog:"#254151",ground:"#879e91",road:"#d1c5aa",shore:"#9a9c83",water:"#265975",leaf:["#416d43","#648a4c","#355f48"],grass:"#3e6150",sun:"#ffe8c4",sunPower:2.15,hemi:"#a6c8e6",bounce:"#293e35",fill:"#779cbe",exposure:1.03,particle:"none",snow:!1},autumn:{name:"가을",english:"AUTUMN",caption:"붉게 물든 산하, 황혼의 방어선을 지켜라.",sky:"#292d40",fog:"#3b4056",ground:"#baa58a",road:"#dfc5a4",shore:"#a79a81",water:"#36566f",leaf:["#b65d33","#d79841","#8e4032"],grass:"#8b7953",sun:"#ffd0a0",sunPower:2,hemi:"#b2bdd9",bounce:"#4c3d39",fill:"#899cbf",exposure:1.01,particle:"leaf",snow:!1},winter:{name:"겨울",english:"WINTER",caption:"푸른 눈빛 아래, 마지막 길목을 지켜라.",sky:"#102039",fog:"#1b3151",ground:"#94b0d4",road:"#7896b6",shore:"#6d88a4",water:"#223d60",leaf:["#334e55","#243b48","#526b72"],grass:"#94a7bb",sun:"#aac9ff",sunPower:1.7,hemi:"#88b0ee",bounce:"#263953",fill:"#557bb1",exposure:.96,particle:"snow",snow:!0}};var Ct=i=>document.getElementById(i),_t=new Bs({canvas:Ct("pose-canvas"),antialias:!0,alpha:!0});_t.setPixelRatio(Math.min(devicePixelRatio,1.5));_t.outputColorSpace=bt;var tn=new li(-1,1,1,-1,.1,50);tn.position.set(5,9,8);tn.lookAt(0,1,0);tn.updateMatrixWorld();var _f={camera:tn,renderer:_t,theme:{id:"winter",...Uh.winter},heroLooks:Th.map(i=>({heroId:i}))},Ln=new Js(_f),$s=new gr,js=[],Wr=new gt(new br(.6,48),new jt({color:"#20394c",transparent:!0,opacity:.5,depthWrite:!1}));Wr.rotation.x=-Math.PI/2;Wr.position.y=.005;$s.add(Wr);var D1={yi:"남색 망토 · 긴 붉은 술 · 활과 화살통",sejong:"곤룡포 · 익선관 · 푸른 책",eulji:"녹색 갑주 · 청록 망토 · 깃부채",gang:"노장 · 보랏빛 망토 · 검과 방패",gwon:"중갑 · 붉은 깃 · 창과 방패",gwak:"검은 갓 · 붉은 도포 · 활",ahn:"검은 외투 · 한 손 권총",dangun:"백발 · 상아빛과 옥색 도포 · 천부인"};for(let i of Th){let e=document.createElement("article");e.dataset.hero=i,e.innerHTML=`<div class="viewport"></div><div class="info"><b>${Yl[i].name}</b><p>${D1[i]}</p></div>`,Ct("pose-review").append(e);let t=new Pt;t.userData.phase=0,js.push({kind:i,root:t,card:e,viewport:e.querySelector(".viewport"),entity:{heroId:i,owner:0,dead:!1}})}var Oh=new N(1,0,0).applyQuaternion(tn.quaternion);Oh.y=0;Oh.normalize();var Bh=new N(0,1,0).applyQuaternion(tn.quaternion);Bh.y=0;Bh.normalize();function Y1(i){let e=Oh.clone().multiplyScalar(i<2?1:-1).addScaledVector(Bh,i===1||i===2?1:-1);return Math.atan2(e.x,e.z)}var mn=!1,mi=0,Gr=0,Qs=0,Fh=0,nr=0,N1=0;function Xr(i=0){let e=mn&&Gr?Math.min(.05,(i-Gr)/1e3):0;mi+=e,Gr=i,(Fh!==innerWidth||nr!==innerHeight)&&(Fh=innerWidth,nr=innerHeight,_t.setSize(Fh,nr,!1));let t=Ct("motion").value,n=Ct("season").value,r=Ct("direction").value,o=Ct("stride").value,s=Ct("attack-phase").value,a=Ct("comparison").value;Ct("pose-review").dataset.comparison=a,_f.theme={id:n,...Uh[n]};let c=r==="cycle"?Math.floor(mi/1.5)%4:Number(r),h=t==="walk"&&o!=="auto"?o==="a"?0:1/5.5:mi;_t.setScissorTest(!1),_t.setClearColor(0,0),_t.clear(),_t.setScissorTest(!0);let f=0;for(let{kind:d,root:l,card:u,viewport:w,entity:v}of js){if(u.hidden=a==="yi"?d!=="yi":a==="yi-gwon"&&d!=="yi"&&d!=="gwon",u.hidden)continue;if(Ln.ready&&!Ln.loading){Ln.attachUnit(l,v,!0,!1),l.rotation.y=Y1(c);let M=t==="walk"?{a:1,b:2,pa:4,pb:5,ca:8,cb:9}[o]:t==="attack"?{release:3,follow:6,recover:7,early:10,settle:11}[s]:void 0,H=M!==void 0?{...Dh(t,mi,e,d),poseRow:M}:mn||mi>0?Dh(t,mi,e,d):null;Ln.updateUnit(l,v,t==="walk",H?.attack??(t==="attack"?.2:0),h,H);let y=l.userData.fixedImage;u.dataset.pose=String(y.poseIndex),u.dataset.poseName=y.pose,u.dataset.supplemented=String(!!y.inbetweens),u.dataset.longMotion=String(!!y.longMotion),u.dataset.gait=String(y?.motionPhase??0),u.dataset.facing=String(y.facing),u.dataset.directional=String(y.directional)}let g=w.getBoundingClientRect();if(g.width<=0||g.height<=0||g.bottom<0||g.top>nr)continue;let p=Math.max(1.3,1.32*g.height/g.width);tn.left=-p*g.width/g.height,tn.right=p*g.width/g.height,tn.top=p,tn.bottom=-p,tn.updateProjectionMatrix(),_t.setViewport(g.left,nr-g.bottom,g.width,g.height),_t.setScissor(g.left,nr-g.bottom,g.width,g.height),$s.add(l),_t.render($s,tn),$s.remove(l),f++}Object.assign(document.body.dataset,{frames:String(++N1),motion:t,playing:String(mn),heroCount:String(js.length),comparison:a,facing:String(c),season:n,poseStatus:_t.domElement.dataset.heroPoseStatus??"loading",inbetweenStatus:_t.domElement.dataset.heroInbetweenStatus??"loading",inbetweenCount:_t.domElement.dataset.heroInbetweenCount??"0",textures:String(_t.info.memory.textures),geometries:String(_t.info.memory.geometries)}),Ct("stride").disabled=t!=="walk",Ct("attack-phase").disabled=t!=="attack",Ct("status").value=Ln.ready&&!Ln.loading?`${f}명 표시 중 · ${_t.domElement.dataset.heroPoseCount}명 기본 + ${_t.domElement.dataset.heroInbetweenCount}명 중간 그림 준비 · ${mn?"동작 재생 중":"정지 화면"}`:Ln.failed?"그림을 불러오지 못했습니다. 전장에서 대체 모델로 플레이할 수 있습니다.":"그림을 불러오는 중…",mn&&(Qs=requestAnimationFrame(Xr))}function ea(){mn||Xr()}for(let i of["direction","motion","stride","attack-phase","season","comparison"])Ct(i).addEventListener("change",()=>{mi=0,Gr=0,ea()});Ct("play").onclick=()=>{mn=!mn,Ct("play").textContent=mn?"동작 멈춤":"동작 재생",Ct("play").setAttribute("aria-pressed",String(mn)),Gr=0,mn?Qs=requestAnimationFrame(Xr):(cancelAnimationFrame(Qs),Xr())};addEventListener("resize",ea);addEventListener("scroll",ea,{passive:!0});addEventListener("pagehide",i=>{if(!i.persisted){cancelAnimationFrame(Qs);for(let{root:e}of js)e.traverse(t=>{t.material?.userData.owned3d&&t.material.dispose()});Ln.dispose(),Wr.geometry.dispose(),Wr.material.dispose(),_t.dispose()}});Ln.promise.then(ea);Xr();
/*! For license information please see hero-pose-review.js.LEGAL.txt */
