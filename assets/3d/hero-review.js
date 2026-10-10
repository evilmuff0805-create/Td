var ra="186";var su=0,Jc=1,ru=2;var Lr=1,ou=2,As=3,Ai=0,He=1,Mn=2,qn=0,Es=1,$c=2,jc=3,Kc=4,au=5;var Vi=100,cu=101,lu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,Qc=204,tl=205,gu=206,_u=207,xu=208,yu=209,vu=210,Mu=211,bu=212,Su=213,wu=214,Ao=0,Eo=1,Co=2,ds=3,Ro=4,Io=5,Po=6,Do=7,oa=0,Tu=1,Au=2,Un=0,el=1,nl=2,il=3,Nr=4,sl=5,rl=6,ol=7;var al=300,Ei=301,Gi=302,aa=303,ca=304,Ur=306,xi=1e3,Gn=1001,Lo=1002,ke=1003,Eu=1004;var Fr=1005;var Ie=1006,la=1007;var bn=1008;var an=1009,cl=1010,ll=1011,Cs=1012,ha=1013,Fn=1014,Sn=1015,On=1016,ua=1017,da=1018,Rs=1020,hl=35902,ul=35899,dl=1021,fl=1022,Ze=1023,Hn=1026,Ci=1027,fa=1028,pa=1029,Ri=1030,ma=1031;var ga=1033,Or=33776,Br=33777,zr=33778,kr=33779,_a=35840,xa=35841,ya=35842,va=35843,Ma=36196,ba=37492,Sa=37496,wa=37488,Ta=37489,Vr=37490,Aa=37491,Ea=37808,Ca=37809,Ra=37810,Ia=37811,Pa=37812,Da=37813,La=37814,Na=37815,Ua=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Va=36492,Ga=36494,Ha=36495,Wa=36283,Xa=36284,Gr=36285,qa=36286;var Qs=2300,No=2301,So=2302,Oc=2303,Bc=2400,zc=2401,kc=2402;var Cu=3200;var Hr=0,Ru=1,wn="",Ae="srgb",tr="srgb-linear",er="linear",ue="srgb";var wo=7680;var Iu=519,Pu=512,Du=513,Lu=514,Ya=515,Nu=516,Uu=517,Za=518,Fu=519,Ou=35044;var pl="300 es",Ln=2e3,fs=2001;function tf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){let i=ps("canvas");return i.style.display="block",i}var Th={},ms=null;function ml(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function zu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=zu(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=zu(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Oi(...i){let t=i.join(" ");t in Th||(Th[t]=!0,Ot(...i))}function ku(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vu={[Ao]:Eo,[Co]:Po,[Ro]:Do,[ds]:Io,[Eo]:Ao,[Po]:Co,[Do]:Ro,[Io]:ds},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,Js=Math.PI/180,gs=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function gl(i,t){return(i%t+t)%t}function nf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function sf(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function rf(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(gl(i,t*2)-t)}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hf(i,t){return i+Math.random()*(t-i)}function uf(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(Ah=i);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ff(i){return i*Js}function pf(i){return i*gs}function mf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ge={DEG2RAD:Js,RAD2DEG:gs,generateUUID:Hi,clamp:Kt,euclideanModulo:gl,mapLinear:nf,inverseLerp:sf,lerp:$s,damp:rf,pingpong:of,smoothstep:af,smootherstep:cf,randInt:lf,randFloat:hf,randFloatSpread:uf,seededRandom:df,degToRad:ff,radToDeg:pf,isPowerOfTwo:mf,ceilPowerOfTwo:gf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:xf,normalize:Qe,denormalize:hs},bl=class bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bl.prototype.isVector2=!0;var ut=bl,Se=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);p=Math.sin(p*M)/b,a=Math.sin(a*M)/b,c=c*p+d*a,l=l*p+f*a,h=h*p+m*a,u=u*p+x*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+m*a,u=u*p+x*a;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sl=class Sl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sl.prototype.isVector3=!0;var I=Sl,fc=new I,Eh=new Se,wl=class wl{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],b=s[4],_=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*x+a*M+c*w,r[3]=o*g+a*b+c*T,r[6]=o*p+a*_+c*C,r[1]=l*x+h*M+u*w,r[4]=l*g+h*b+u*T,r[7]=l*p+h*_+u*C,r[2]=d*x+f*M+m*w,r[5]=d*g+f*b+m*T,r[8]=d*p+f*_+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pc.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;var Xt=wl,pc=new Xt,Ch=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yf(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),i}var ne=yf();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Uo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=ps("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vf=0,_s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Mf=0,gc=new I,nn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gn,s=Gn,r=Ie,o=bn,a=Ze,c=an,l=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Hi(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xi:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xi:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=al;nn.DEFAULT_ANISOTROPY=1;var Tl=class Tl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,_=(f+1)/2,w=(p+1)/2,T=(h+d)/4,C=(u+x)/4,v=(m+g)/4;return b>_&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tl.prototype.isVector4=!0;var we=Tl,Fo=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ie,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new nn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ie,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Fo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oo=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sa=class sa{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Sf)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),di.crossVectors(n,cn),di.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),di.crossVectors(n,cn)),di.normalize(),to.crossVectors(cn,di),s[0]=di.x,s[4]=to.x,s[8]=cn.x,s[1]=di.y,s[5]=to.y,s[9]=cn.y,s[2]=di.z,s[6]=to.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],b=n[7],_=n[11],w=n[15],T=s[0],C=s[4],v=s[8],A=s[12],P=s[1],N=s[5],z=s[9],L=s[13],D=s[2],V=s[6],Z=s[10],q=s[14],st=s[3],R=s[7],O=s[11],G=s[15];return r[0]=o*T+a*P+c*D+l*st,r[4]=o*C+a*N+c*V+l*R,r[8]=o*v+a*z+c*Z+l*O,r[12]=o*A+a*L+c*q+l*G,r[1]=h*T+u*P+d*D+f*st,r[5]=h*C+u*N+d*V+f*R,r[9]=h*v+u*z+d*Z+f*O,r[13]=h*A+u*L+d*q+f*G,r[2]=m*T+x*P+g*D+p*st,r[6]=m*C+x*N+g*V+p*R,r[10]=m*v+x*z+g*Z+p*O,r[14]=m*A+x*L+g*q+p*G,r[3]=M*T+b*P+_*D+w*st,r[7]=M*C+b*N+_*V+w*R,r[11]=M*v+b*z+_*Z+w*O,r[15]=M*A+b*L+_*q+w*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],M=c*f-l*d,b=a*f-l*u,_=a*d-c*u,w=o*f-l*h,T=o*d-c*h,C=o*u-a*h;return e*(x*M-g*b+p*_)-n*(m*M-g*w+p*T)+s*(m*b-x*w+p*C)-r*(m*_-x*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=e*a-n*o,b=e*c-s*o,_=e*l-r*o,w=n*c-s*a,T=n*l-r*a,C=s*l-r*c,v=h*x-u*m,A=h*g-d*m,P=h*p-f*m,N=u*g-d*x,z=u*p-f*x,L=d*p-f*g,D=M*L-b*z+_*N+w*P-T*A+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return t[0]=(a*L-c*z+l*N)*V,t[1]=(s*z-n*L-r*N)*V,t[2]=(x*C-g*T+p*w)*V,t[3]=(d*T-u*C-f*w)*V,t[4]=(c*P-o*L-l*A)*V,t[5]=(e*L-s*P+r*A)*V,t[6]=(g*_-m*C-p*b)*V,t[7]=(h*C-d*_+f*b)*V,t[8]=(o*z-a*P+l*v)*V,t[9]=(n*P-e*z-r*v)*V,t[10]=(m*T-x*_+p*M)*V,t[11]=(u*_-h*T-f*M)*V,t[12]=(a*A-o*N-c*v)*V,t[13]=(e*N-n*A+s*v)*V,t[14]=(x*b-m*w-g*M)*V,t[15]=(h*w-u*b+d*M)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=c*l,b=c*h,_=c*u,w=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+_)*w,s[2]=(m-b)*w,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+b)*C,s[9]=(g-M)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$i.set(s[0],s[1],s[2]).length(),a=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);let l=1/o,h=1/a,u=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Ln,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Ln)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fs)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ln,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Ln)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===fs)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sa.prototype.isMatrix4=!0;var de=sa,$i=new I,Rn=new de,bf=new I(0,0,0),Sf=new I(1,1,1),di=new I,to=new I,cn=new I,Ih=new de,Ph=new Se,rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wf=0,Dh=new I,ji=new Se,jn=new de,eo=new I,Gs=new I,Tf=new I,Af=new Se,Lh=new I(1,0,0),Nh=new I(0,1,0),Uh=new I(0,0,1),Fh={type:"added"},Ef={type:"removed"},Ki={type:"childadded",child:null},_c={type:"childremoved",child:null},Ve=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new rn,n=new Se,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Xt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Nh,t)}rotateZ(t){return this.rotateOnAxis(Uh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Nh,t)}translateZ(t){return this.translateOnAxis(Uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Gs,eo,this.up):jn.lookAt(eo,Gs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new I(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oe=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cf={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},no={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=gl(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ne.workingToColorSpace(Ye.copy(this),t),Math.round(Kt(Ye.r*255,0,255))*65536+Math.round(Kt(Ye.g*255,0,255))*256+Math.round(Kt(Ye.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ae){ne.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(no);let n=$s(fi.h,no.h,e),s=$s(fi.s,no.s,e),r=$s(fi.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new jt;jt.NAMES=Gu;var Bi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new I,Kn=new I,yc=new I,Qn=new I,Qi=new I,ts=new I,Oh=new I,vc=new I,Mc=new I,bc=new I,Sc=new we,wc=new we,Tc=new we,_i=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Kn.subVectors(n,e),yc.subVectors(t,e);let o=In.dot(In),a=In.dot(Kn),c=In.dot(yc),l=Kn.dot(Kn),h=Kn.dot(yc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sc.setScalar(0),wc.setScalar(0),Tc.setScalar(0),Sc.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sc,r.x),o.addScaledVector(wc,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Kn.subVectors(t,e),In.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),In.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qi.subVectors(s,n),ts.subVectors(r,n),vc.subVectors(t,n);let c=Qi.dot(vc),l=ts.dot(vc);if(c<=0&&l<=0)return e.copy(n);Mc.subVectors(t,s);let h=Qi.dot(Mc),u=ts.dot(Mc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Qi,o);bc.subVectors(t,r);let f=Qi.dot(bc),m=ts.dot(bc);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ts,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Oh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Oh,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},on=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),so.subVectors(this.max,Hs),es.subVectors(t.a,Hs),ns.subVectors(t.b,Hs),is.subVectors(t.c,Hs),pi.subVectors(ns,es),mi.subVectors(is,ns),Di.subVectors(es,is);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Di.z,Di.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Di.z,0,-Di.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Di.y,Di.x,0];return!Ac(e,es,ns,is,so)||(e=[1,0,0,0,1,0,0,0,1],!Ac(e,es,ns,is,so))?!1:(ro.crossVectors(pi,mi),e=[ro.x,ro.y,ro.z],Ac(e,es,ns,is,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new I,new I,new I,new I,new I,new I,new I,new I],Pn=new I,io=new on,es=new I,ns=new I,is=new I,pi=new I,mi=new I,Di=new I,Hs=new I,so=new I,ro=new I,Li=new I;function Ac(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Le=new I,oo=new ut,Rf=0,Ne=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ou,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},If=new on,Ws=new I,Ec=new I,yi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ec.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Ec)),this.expandByPoint(Ws.copy(t.center).sub(Ec))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pf=0,_n=new de,Cc=new Ve,ss=new I,ln=new on,Xs=new on,ze=new I,Ee=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?sr:ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,Xs.min),ln.expandByPoint(ze),ze.addVectors(ln.max,Xs.max),ln.expandByPoint(ze)):(ln.expandByPoint(Xs.min),ln.expandByPoint(Xs.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(t,l),ze.add(ss)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new I,c[v]=new I;let l=new I,h=new I,u=new I,d=new ut,f=new ut,m=new ut,x=new I,g=new I;function p(v,A,P){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let N=1/(f.x*m.y-m.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(N),a[v].add(x),a[A].add(x),a[P].add(x),c[v].add(g),c[A].add(g),c[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,A=M.length;v<A;++v){let P=M[v],N=P.start,z=P.count;for(let L=N,D=N+z;L<D;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let b=new I,_=new I,w=new I,T=new I;function C(v){w.fromBufferAttribute(s,v),T.copy(w);let A=a[v];b.copy(A),b.sub(w.multiplyScalar(w.dot(A))).normalize(),_.crossVectors(T,A);let N=_.dot(c[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,N)}for(let v=0,A=M.length;v<A;++v){let P=M[v],N=P.start,z=P.count;for(let L=N,D=N+z;L<D;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ne(d,h,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rc=new I,Df=new I,Lf=new Xt,Dn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rc.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lf.getNormalMatrix(t),s=this.coplanarPoint(Rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Nf=0,ii=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Es,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=tl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new I,Ic=new I,ao=new I,co=new I,rr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ic.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),co.copy(this.origin).sub(Ic);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=co.dot(this.direction),c=-co.dot(ao),l=co.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ic).addScaledVector(ao,d),f}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,b=n.z-o.z,_=Math.abs(c),w=Math.abs(l),T=Math.abs(h),C,v,A,P,N,z,L,D,V,Z,q,st;if(_>=w&&_>=T?(A=c,z=u,V=m,st=p,c>=0?(C=l,v=h,P=d,N=f,L=x,D=g,Z=M,q=b):(C=h,v=l,P=f,N=d,L=g,D=x,Z=b,q=M)):w>=T?(A=l,z=d,V=x,st=M,l>=0?(C=h,v=c,P=f,N=u,L=g,D=m,Z=b,q=p):(C=c,v=h,P=u,N=f,L=m,D=g,Z=p,q=b)):(A=h,z=f,V=g,st=b,h>=0?(C=c,v=l,P=u,N=d,L=m,D=x,Z=p,q=M):(C=l,v=c,P=d,N=u,L=x,D=m,Z=M,q=p)),A===0)return null;let R=C/A,O=v/A,G=1/A,rt=P-R*z,ot=N-O*z,kt=L-R*V,Ht=D-O*V,$t=Z-R*st,j=q-O*st,et=$t*Ht-j*kt,vt=rt*j-ot*$t,zt=kt*ot-Ht*rt;if(s){if(et<0||vt<0||zt<0)return null}else if((et<0||vt<0||zt<0)&&(et>0||vt>0||zt>0))return null;let wt=et+vt+zt;if(wt===0)return null;let Vt=G*(et*z+vt*V+zt*st);return(wt>0?Vt<0:Vt>0)?null:this.at(Vt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},or=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bh=new de,Ni=new rr,lo=new yi,zh=new I,ho=new I,uo=new I,fo=new I,Pc=new I,po=new I,kh=new I,mo=new I,fe=class extends Ve{constructor(t=new Ee,e=new or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Pc.fromBufferAttribute(u,t),o?po.addScaledVector(Pc,h):po.addScaledVector(Pc.sub(e),h))}e.add(po)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(lo.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(lo,zh)===null||Ni.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Bh.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Bh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,w=b;_<w;_+=3){let T=a.getX(_),C=a.getX(_+1),v=a.getX(_+2);s=go(this,p,t,n,l,h,u,T,C,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=a.getX(g),b=a.getX(g+1),_=a.getX(g+2);s=go(this,o,t,n,l,h,u,M,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,w=b;_<w;_+=3){let T=_,C=_+1,v=_+2;s=go(this,p,t,n,l,h,u,T,C,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=g,b=g+1,_=g+2;s=go(this,o,t,n,l,h,u,M,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Uf(i,t,e,n,s,r,o,a){let c;if(t.side===He?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ai,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(mo);return l<e.near||l>e.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ho),i.getVertexPosition(c,uo),i.getVertexPosition(l,fo);let h=Uf(i,t,e,n,ho,uo,fo,kh);if(h){let u=new I;_i.getBarycoord(kh,ho,uo,fo,u),s&&(h.uv=_i.getInterpolatedAttribute(s,a,c,l,u,new ut)),r&&(h.uv1=_i.getInterpolatedAttribute(r,a,c,l,u,new ut)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};_i.getNormal(ho,uo,fo,d.normal),h.face=d,h.barycoord=u}return h}var si=class extends nn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ke,h=ke,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rs=new de,Vh=new de,_o=[],Gh=new on,Ff=new de,qs=new fe,Ys=new yi,ar=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ff)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new on),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Gh.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(Gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Ys.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),Vh.multiplyMatrices(n,rs),qs.matrixWorld=Vh,qs.raycast(t,_o);for(let o=0,a=_o.length;o<a;o++){let c=_o[o];c.instanceId=r,c.object=this,e.push(c)}_o.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(s*this.count),s,this.count,fa,Sn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new yi,Of=new ut(.5,.5),xo=new I,Ms=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-m,w-M).normalize(),s[1].setComponents(l+o,f+h,p+m,w+M).normalize(),s[2].setComponents(l+a,f+u,p+x,w+b).normalize(),s[3].setComponents(l-a,f-u,p-x,w-b).normalize(),n)s[4].setComponents(c,d,g,_).normalize(),s[5].setComponents(l-c,f-d,p-g,w-_).normalize();else if(s[4].setComponents(l-c,f-d,p-g,w-_).normalize(),e===Ln)s[5].setComponents(l+c,f+d,p+g,w+_).normalize();else if(e===fs)s[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Of.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xo.x=s.normal.x>0?t.max.x:t.min.x,xo.y=s.normal.y>0?t.max.y:t.min.y,xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends nn{constructor(t=[],e=Ei,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var vi=class extends nn{constructor(t,e,n=Fn,s,r,o,a=ke,c=ke,l,h=Hn,u=1){if(h!==Hn&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bo=class extends vi{constructor(t,e=Fn,n=Ei,s,r,o=ke,a=ke,c,l=Hn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lr=class extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xn=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function m(x,g,p,M,b,_,w,T,C,v,A){let P=_/C,N=w/v,z=_/2,L=w/2,D=T/2,V=C+1,Z=v+1,q=0,st=0,R=new I;for(let O=0;O<Z;O++){let G=O*N-L;for(let rt=0;rt<V;rt++){let ot=rt*P-z;R[x]=ot*M,R[g]=G*b,R[p]=D,l.push(R.x,R.y,R.z),R[x]=0,R[g]=0,R[p]=T>0?1:-1,h.push(R.x,R.y,R.z),u.push(rt/C),u.push(1-O/v),q+=1}}for(let O=0;O<v;O++)for(let G=0;G<C;G++){let rt=d+G+V*O,ot=d+G+V*(O+1),kt=d+(G+1)+V*(O+1),Ht=d+(G+1)+V*O;c.push(rt,ot,Ht),c.push(ot,kt,Ht),st+=6}a.addGroup(f,st,A),f+=st,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Mi=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function M(){let _=new I,w=new I,T=0,C=(e-t)/n;for(let v=0;v<=r;v++){let A=[],P=v/r,N=P*(e-t)+t;for(let z=0;z<=s;z++){let L=z/s,D=L*c+a,V=Math.sin(D),Z=Math.cos(D);w.x=N*V,w.y=-P*n+g,w.z=N*Z,u.push(w.x,w.y,w.z),_.set(V,C,Z).normalize(),d.push(_.x,_.y,_.z),f.push(L,1-P),A.push(m++)}x.push(A)}for(let v=0;v<s;v++)for(let A=0;A<r;A++){let P=x[A][v],N=x[A+1][v],z=x[A+1][v+1],L=x[A][v+1];(t>0||A!==0)&&(h.push(P,N,L),T+=3),(e>0||A!==r-1)&&(h.push(N,z,L),T+=3)}l.addGroup(p,T,0),p+=T}function b(_){let w=m,T=new ut,C=new I,v=0,A=_===!0?t:e,P=_===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),m++;let N=m;for(let z=0;z<=s;z++){let D=z/s*c+a,V=Math.cos(D),Z=Math.sin(D);C.x=A*Z,C.y=g*P,C.z=A*V,u.push(C.x,C.y,C.z),d.push(0,P,0),T.x=V*.5+.5,T.y=Z*.5*P+.5,f.push(T.x,T.y),m++}for(let z=0;z<s;z++){let L=w+z,D=N+z;_===!0?h.push(D,D+1,L):h.push(D+1,D,L),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hr=class i extends Mi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ur=class i extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new I,_=new I,w=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],b),f(e[T+1],_),f(e[T+2],w),c(b,_,w,M)}function c(M,b,_,w){let T=w+1,C=[];for(let v=0;v<=T;v++){C[v]=[];let A=M.clone().lerp(_,v/T),P=b.clone().lerp(_,v/T),N=T-v;for(let z=0;z<=N;z++)z===0&&v===T?C[v][z]=A:C[v][z]=A.clone().lerp(P,z/N)}for(let v=0;v<T;v++)for(let A=0;A<2*(T-v)-1;A++){let P=Math.floor(A/2);A%2===0?(d(C[v][P+1]),d(C[v+1][P]),d(C[v][P])):(d(C[v][P+1]),d(C[v+1][P+1]),d(C[v+1][P]))}}function l(M){let b=new I;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let M=new I;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;o.push(_,1-w)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let b=o[M+0],_=o[M+2],w=o[M+4],T=Math.max(b,_,w),C=Math.min(b,_,w);T>.9&&C<.1&&(b<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,b){let _=M*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function m(){let M=new I,b=new I,_=new I,w=new I,T=new ut,C=new ut,v=new ut;for(let A=0,P=0;A<r.length;A+=9,P+=6){M.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),T.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),v.set(o[P+4],o[P+5]),w.copy(M).add(b).add(_).divideScalar(3);let N=g(w);x(T,P+0,M,N),x(C,P+2,b,N),x(v,P+4,_,N)}}function x(M,b,_,w){w<0&&M.x===1&&(o[b]=M.x-1),_.x===0&&_.z===0&&(o[b]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},dr=class i extends ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new de;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bs=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zo=class extends bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _l(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Hh=new I,Wh=new I,Dc=new _l,Lc=new _l,Nc=new _l,yn=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Wh.subVectors(s[0],s[1]).add(s[0]),l=Wh);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Dc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),Lc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Nc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Lc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Nc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Dc.calc(c),Lc.calc(c),Nc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bf(i,t){let e=1-i;return e*e*t}function zf(i,t){return 2*(1-i)*i*t}function kf(i,t){return i*i*t}function js(i,t,e,n){return Bf(i,t)+zf(i,e)+kf(i,n)}function Vf(i,t){let e=1-i;return e*e*e*t}function Gf(i,t){let e=1-i;return 3*e*e*i*t}function Hf(i,t){return 3*(1-i)*i*i*t}function Wf(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return Vf(i,t)+Gf(i,e)+Hf(i,n)+Wf(i,s)}var fr=class extends hn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,s.x,r.x,o.x,a.x),Ks(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ko=class extends hn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,s.x,r.x,o.x,a.x),Ks(t,s.y,r.y,o.y,a.y),Ks(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pr=class extends hn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mr=class extends hn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y),js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Xh(a,c.x,l.x,h.x,u.x),Xh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Go=Object.freeze({__proto__:null,ArcCurve:zo,CatmullRomCurve3:yn,CubicBezierCurve:fr,CubicBezierCurve3:ko,EllipseCurve:bs,LineCurve:pr,LineCurve3:Vo,QuadraticBezierCurve:mr,QuadraticBezierCurve3:gr,SplineCurve:_r}),Ho=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Go[s.type]().fromJSON(s))}return this}},xr=class extends Ho{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new pr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new mr(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new fr(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new bs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xn=class extends xr{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}};function Xf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=$f(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return yr(r,o,e,a,c,l,0),o}function Hu(i,t,e,n,s){let r;if(s===ap(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=qh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=qh(o/n|0,i[o],i[o+1],r);return r&&Ss(r,r.next)&&(Mr(r),r=r.next),r}function zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ss(e,e.next)||Te(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ep(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Yf(i,n,s,r):qf(i)){t.push(c.i,i.i,l.i),Mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zf(zi(i),t),yr(i,t,e,n,s,r,2)):o===2&&Jf(i,t,e,n,s,r):yr(zi(i),t,e,n,s,r,1);break}}}function qf(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Zs(s,a,r,c,o,l,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),x=Math.max(a,c,l),g=Math.max(h,u,d),p=Vc(f,m,t,e,n),M=Vc(x,g,t,e,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=p&&_&&_.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Zs(a,h,c,u,l,d,b.x,b.y)&&Te(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Zs(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Zs(a,h,c,u,l,d,b.x,b.y)&&Te(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Zs(a,h,c,u,l,d,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Zf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ss(n,s)&&Xu(n,e,e.next,s)&&vr(n,s)&&vr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return zi(e)}function Jf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sp(o,a)){let c=qu(o,a);o=zi(o,o.next),c=zi(c,c.next),yr(o,t,e,n,s,r,0),yr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $f(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Hu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ip(l))}s.sort(jf);for(let r=0;r<s.length;r++)e=Kf(s[r],e);return e}function jf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Kf(i,t){let e=Qf(i,t);if(!e)return t;let n=qu(e,i);return zi(n,n.next),zi(e,e.next)}function Qf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ss(i,e))return e;do{if(Ss(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Wu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);vr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&tp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function tp(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function ep(i,t,e,n){let s=i;do s.z===0&&(s.z=Vc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,np(s)}function np(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Vc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Zs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Wu(i,t,e,n,s,r,o,a)}function sp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rp(i,t)&&(vr(i,t)&&vr(t,i)&&op(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Ss(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ss(i,t){return i.x===t.x&&i.y===t.y}function Xu(i,t,e,n){let s=vo(Te(i,t,e)),r=vo(Te(i,t,n)),o=vo(Te(e,n,i)),a=vo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&yo(i,e,t)||r===0&&yo(i,n,t)||o===0&&yo(e,i,n)||a===0&&yo(e,t,n))}function yo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vo(i){return i>0?1:i<0?-1:0}function rp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function op(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qu(i,t){let e=Gc(i.i,i.x,i.y),n=Gc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qh(i,t,e,n){let s=Gc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ap(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hc=class{static triangulate(t,e,n=2){return Xf(t,e,n)}},Fi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Yh(t),Zh(n,t);let o=t.length;e.forEach(Yh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Zh(n,e[c]);let a=Hc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Yh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ri=class i extends Ee{constructor(t=new Xn([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:cp,b,_=!1,w,T,C,v;if(p){b=p.getSpacedPoints(h),_=!0,d=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,nt),T=new I,C=new I,v=new I}d||(g=0,f=0,m=0,x=0);let A=a.extractPoints(l),P=A.shape,N=A.holes;if(!Fi.isClockWise(P)){P=P.reverse();for(let nt=0,at=N.length;nt<at;nt++){let ct=N[nt];Fi.isClockWise(ct)&&(N[nt]=ct.reverse())}}function L(nt){let ct=10000000000000001e-36,lt=nt[0];for(let ft=1;ft<=nt.length;ft++){let Ut=ft%nt.length,Nt=nt[Ut],Gt=Nt.x-lt.x,qt=Nt.y-lt.y,U=Gt*Gt+qt*qt,ce=Math.max(Math.abs(Nt.x),Math.abs(Nt.y),Math.abs(lt.x),Math.abs(lt.y)),Qt=ct*ce*ce;if(U<=Qt){nt.splice(Ut,1),ft--;continue}lt=Nt}}L(P),N.forEach(L);let D=N.length,V=P;for(let nt=0;nt<D;nt++){let at=N[nt];P=P.concat(at)}function Z(nt,at,ct){return at||Bt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,ct)}let q=P.length;function st(nt,at,ct){let lt,ft,Ut,Nt=nt.x-at.x,Gt=nt.y-at.y,qt=ct.x-nt.x,U=ct.y-nt.y,ce=Nt*Nt+Gt*Gt,Qt=Nt*U-Gt*qt;if(Math.abs(Qt)>Number.EPSILON){let E=Math.sqrt(ce),y=Math.sqrt(qt*qt+U*U),k=at.x-Gt/E,X=at.y+Nt/E,J=ct.x-U/y,ht=ct.y+qt/y,dt=((J-k)*U-(ht-X)*qt)/(Nt*U-Gt*qt);lt=k+Nt*dt-nt.x,ft=X+Gt*dt-nt.y;let $=lt*lt+ft*ft;if($<=2)return new ut(lt,ft);Ut=Math.sqrt($/2)}else{let E=!1;Nt>Number.EPSILON?qt>Number.EPSILON&&(E=!0):Nt<-Number.EPSILON?qt<-Number.EPSILON&&(E=!0):Math.sign(Gt)===Math.sign(U)&&(E=!0),E?(lt=-Gt,ft=Nt,Ut=Math.sqrt(ce)):(lt=Nt,ft=Gt,Ut=Math.sqrt(ce/2))}return new ut(lt/Ut,ft/Ut)}let R=[];for(let nt=0,at=V.length,ct=at-1,lt=nt+1;nt<at;nt++,ct++,lt++)ct===at&&(ct=0),lt===at&&(lt=0),R[nt]=st(V[nt],V[ct],V[lt]);let O=[],G,rt=R.concat();for(let nt=0,at=D;nt<at;nt++){let ct=N[nt];G=[];for(let lt=0,ft=ct.length,Ut=ft-1,Nt=lt+1;lt<ft;lt++,Ut++,Nt++)Ut===ft&&(Ut=0),Nt===ft&&(Nt=0),G[lt]=st(ct[lt],ct[Ut],ct[Nt]);O.push(G),rt=rt.concat(G)}let ot;if(g===0)ot=Fi.triangulateShape(V,N);else{let nt=[],at=[];for(let ct=0;ct<g;ct++){let lt=ct/g,ft=f*Math.cos(lt*Math.PI/2),Ut=m*Math.sin(lt*Math.PI/2)+x;for(let Nt=0,Gt=V.length;Nt<Gt;Nt++){let qt=Z(V[Nt],R[Nt],Ut);vt(qt.x,qt.y,-ft),lt===0&&nt.push(qt)}for(let Nt=0,Gt=D;Nt<Gt;Nt++){let qt=N[Nt];G=O[Nt];let U=[];for(let ce=0,Qt=qt.length;ce<Qt;ce++){let E=Z(qt[ce],G[ce],Ut);vt(E.x,E.y,-ft),lt===0&&U.push(E)}lt===0&&at.push(U)}}ot=Fi.triangulateShape(nt,at)}let kt=ot.length,Ht=m+x;for(let nt=0;nt<q;nt++){let at=d?Z(P[nt],rt[nt],Ht):P[nt];_?(C.copy(w.normals[0]).multiplyScalar(at.x),T.copy(w.binormals[0]).multiplyScalar(at.y),v.copy(b[0]).add(C).add(T),vt(v.x,v.y,v.z)):vt(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<q;at++){let ct=d?Z(P[at],rt[at],Ht):P[at];_?(C.copy(w.normals[nt]).multiplyScalar(ct.x),T.copy(w.binormals[nt]).multiplyScalar(ct.y),v.copy(b[nt]).add(C).add(T),vt(v.x,v.y,v.z)):vt(ct.x,ct.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){let at=nt/g,ct=f*Math.cos(at*Math.PI/2),lt=m*Math.sin(at*Math.PI/2)+x;for(let ft=0,Ut=V.length;ft<Ut;ft++){let Nt=Z(V[ft],R[ft],lt);vt(Nt.x,Nt.y,u+ct)}for(let ft=0,Ut=N.length;ft<Ut;ft++){let Nt=N[ft];G=O[ft];for(let Gt=0,qt=Nt.length;Gt<qt;Gt++){let U=Z(Nt[Gt],G[Gt],lt);_?vt(U.x,U.y+b[h-1].y,b[h-1].x+ct):vt(U.x,U.y,u+ct)}}}$t(),j();function $t(){let nt=s.length/3;if(d){let at=0,ct=q*at;for(let lt=0;lt<kt;lt++){let ft=ot[lt];zt(ft[2]+ct,ft[1]+ct,ft[0]+ct)}at=h+g*2,ct=q*at;for(let lt=0;lt<kt;lt++){let ft=ot[lt];zt(ft[0]+ct,ft[1]+ct,ft[2]+ct)}}else{for(let at=0;at<kt;at++){let ct=ot[at];zt(ct[2],ct[1],ct[0])}for(let at=0;at<kt;at++){let ct=ot[at];zt(ct[0]+q*h,ct[1]+q*h,ct[2]+q*h)}}n.addGroup(nt,s.length/3-nt,0)}function j(){let nt=s.length/3,at=0;et(V,at),at+=V.length;for(let ct=0,lt=N.length;ct<lt;ct++){let ft=N[ct];et(ft,at),at+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function et(nt,at){let ct=nt.length;for(;--ct>=0;){let lt=ct,ft=ct-1;ft<0&&(ft=nt.length-1);for(let Ut=0,Nt=h+g*2;Ut<Nt;Ut++){let Gt=q*Ut,qt=q*(Ut+1),U=at+lt+Gt,ce=at+ft+Gt,Qt=at+ft+qt,E=at+lt+qt;wt(U,ce,Qt,E)}}}function vt(nt,at,ct){c.push(nt),c.push(at),c.push(ct)}function zt(nt,at,ct){Vt(nt),Vt(at),Vt(ct);let lt=s.length/3,ft=M.generateTopUV(n,s,lt-3,lt-2,lt-1);me(ft[0]),me(ft[1]),me(ft[2])}function wt(nt,at,ct,lt){Vt(nt),Vt(at),Vt(lt),Vt(at),Vt(ct),Vt(lt);let ft=s.length/3,Ut=M.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);me(Ut[0]),me(Ut[1]),me(Ut[3]),me(Ut[1]),me(Ut[2]),me(Ut[3])}function Vt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function me(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return lp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Go[s.type]().fromJSON(s)),new i(n,t.options)}},cp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-u),new ut(d,1-m),new ut(x,1-p)]:[new ut(a,1-c),new ut(h,1-u),new ut(f,1-m),new ut(g,1-p)]}};function lp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var br=class i extends ur{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ki=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let M=p*d-o;for(let b=0;b<l;b++){let _=b*u-r;m.push(_,-M,0),x.push(0,0,1),g.push(b/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let b=M+l*p,_=M+l*(p+1),w=M+1+l*(p+1),T=M+1+l*p;f.push(b,_,T),f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sr=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let M=[],b=p/n,_=o+b*a,w=t*Math.cos(_),T=Math.sqrt(t*t-w*w),C=0;p===0&&o===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){let A=v/e,P=s+A*r;u.x=-T*Math.cos(P),u.y=w,u.z=T*Math.sin(P),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+C,1-b),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let b=h[p][M+1],_=h[p][M],w=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(b,_,T),(p!==n-1||c<Math.PI)&&f.push(_,w,T)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nn=class i extends Ee{constructor(t=new gr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new ut,h=new I,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function x(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),M(),p()}function g(b){h=t.getPointAt(b/e,h);let _=o.normals[b],w=o.binormals[b];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,v=Math.sin(C),A=-Math.cos(C);c.x=A*_.x+v*w.x,c.y=A*_.y+v*w.y,c.z=A*_.z+v*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let _=1;_<=s;_++){let w=(s+1)*(b-1)+(_-1),T=(s+1)*b+(_-1),C=(s+1)*b+_,v=(s+1)*(b-1)+_;m.push(w,T,v),m.push(T,C,v)}}function M(){for(let b=0;b<=e;b++)for(let _=0;_<=s;_++)l.x=b/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Jh(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Jh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Yu={clone:Wi,merge:Je},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wo=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vn=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var wr=class extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=oa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xo=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Uc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:r=t,a=2*e-n;break;case kc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zc:o=t,c=2*n-e;break;case kc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,b=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+M*o[l+w]+b*o[c+w]+_*o[u+w];return r}},Zo=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Jo=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$o=class extends bi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*m;return r}let d=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[l+m],g=o[c+m],p=f*d+m*2,M=u[p],b=u[p+1],_=t*d+m*2,w=h[_],T=h[_+1],C=pp(n,e,M,w,s);r[m]=Zu(C,x,b,T,g)}return r}};function Zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Zu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=fp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=os(e,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:os(t.times,Array),values:os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Uc(t.settings)&&(n.settings={inTangents:os(t.settings.inTangents,Array),outTangents:os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $o(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case No:e=this.InterpolantFactoryMethodLinear;break;case So:e=this.InterpolantFactoryMethodSmooth;break;case Oc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return So;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Uc(this.settings)&&($h(this.settings.inTangents,t),$h(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Bt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ef(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===So,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Uc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $h(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=No;var Si=class extends dn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Qs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="color";var Ko=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="number";var Qo=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Se.slerpFlat(r,0,o,l-a,o,l,c);return r}},Tr=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends dn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Qs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends dn{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="vector";var To={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(jh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!jh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ju=new ea,Ar=class{constructor(t){this.manager=t!==void 0?t:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=new WeakMap,Er=class extends Ar{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=To.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=as.get(o);u===void 0&&(u=[],as.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=ps("img");function c(){h(),e&&e(this);let u=as.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}as.delete(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),To.remove(`image:${t}`);let d=as.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}as.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),To.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var ws=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Cr=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fc=new de,Kh=new I,Qh=new I,Rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mo=new I,bo=new Se,Vn=new I,Ir=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,bo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,bo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mo,bo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,bo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new I,tu=new ut,eu=new ut,tn=class extends Ir{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Wc=class extends Rr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Pr=class extends ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ti=class extends Ir{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xc=class extends Rr{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cs=-90,ls=1,na=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(cs,ls,t,e);s.layers=this.layers,this.add(s);let r=new tn(cs,ls,t,e);r.layers=this.layers,this.add(r);let o=new tn(cs,ls,t,e);o.layers=this.layers,this.add(o);let a=new tn(cs,ls,t,e);a.layers=this.layers,this.add(a);let c=new tn(cs,ls,t,e);c.layers=this.layers,this.add(c);let l=new tn(cs,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ia=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var yl="\\[\\]\\.:\\/",mp=new RegExp("["+yl+"]","g"),vl="[^"+yl+"]",gp="[^"+yl.replace("\\.","")+"]",_p=/((?:WC+[\/:])*)/.source.replace("WC",vl),xp=/(WCOD+)?/.source.replace("WCOD",gp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Mp=new RegExp("^"+_p+xp+yp+vp+"$"),bp=["material","materials","bones","map"],qc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mp,"")}static parseTrackName(t){let e=Mp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=qc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);var nu=new de,Dr=class{constructor(t,e,n=0,s=1/0){this.ray=new rr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(t,e=!0,n=[]){return Yc(t,this,n,e),n.sort(iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Yc(t[s],this,n,e);return n.sort(iu),n}};function iu(i,t){return i.distance-t.distance}function Yc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Yc(r[o],t,e,!0)}}var Al=class Al{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Al.prototype.isMatrix2=!0;var Zc=Al;function Ml(i,t,e,n){let s=Sp(n);switch(e){case dl:return i*t;case fa:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case fl:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case va:return Math.max(i,16)*Math.max(t,8)/4;case _a:case ya:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case ba:case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Vr:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gr:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sp(i){switch(i){case an:case cl:return{byteLength:1,components:1};case Cs:case ll:case On:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case Fn:case ha:case Sn:return{byteLength:4,components:1};case hl:case ul:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);function _d(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tm=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nm=`vec3 transformedNormal = objectNormal;
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
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xm=`#ifdef USE_GRADIENTMAP
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
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sm=`#ifdef USE_ENVMAP
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
#endif`,wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Rm=`uniform sampler2D dfgLUT;
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
}`,Im=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vm=`#if defined( USE_POINTS_UV )
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
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g0=`float getShadowMask() {
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
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
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
}`,B0=`#if DEPTH_PACKING == 3200
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
}`,z0=`#define DISTANCE
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
}`,k0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 diffuse;
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
}`,Y0=`#define LAMBERT
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
}`,Z0=`#define LAMBERT
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
}`,J0=`#define MATCAP
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
}`,$0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,Q0=`#define PHONG
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
}`,tg=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,ng=`#define STANDARD
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
}`,ig=`#define TOON
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
}`,sg=`#define TOON
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
}`,rg=`uniform float size;
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
}`,og=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,cg=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,hg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Pp,alphahash_pars_fragment:Dp,alphamap_fragment:Lp,alphamap_pars_fragment:Np,alphatest_fragment:Up,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Bp,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Vp,beginnormal_vertex:Gp,bsdfs:Hp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Yp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Jp,color_fragment:$p,color_pars_fragment:jp,color_pars_vertex:Kp,color_vertex:Qp,common:tm,cube_uv_reflection_fragment:em,defaultnormal_vertex:nm,displacementmap_pars_vertex:im,displacementmap_vertex:sm,emissivemap_fragment:rm,emissivemap_pars_fragment:om,colorspace_fragment:am,colorspace_pars_fragment:cm,envmap_fragment:lm,envmap_common_pars_fragment:hm,envmap_pars_fragment:um,envmap_pars_vertex:dm,envmap_physical_pars_fragment:Sm,envmap_vertex:fm,fog_vertex:pm,fog_pars_vertex:mm,fog_fragment:gm,fog_pars_fragment:_m,gradientmap_pars_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:vm,lights_lambert_pars_fragment:Mm,lights_pars_begin:bm,lights_toon_fragment:wm,lights_toon_pars_fragment:Tm,lights_phong_fragment:Am,lights_phong_pars_fragment:Em,lights_physical_fragment:Cm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Im,lights_fragment_maps:Pm,lights_fragment_end:Dm,lightprobes_pars_fragment:Lm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:km,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Hm,morphinstance_vertex:Wm,morphcolor_vertex:Xm,morphnormal_vertex:qm,morphtarget_pars_vertex:Ym,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:$m,normal_pars_fragment:jm,normal_pars_vertex:Km,normal_vertex:Qm,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:i0,iridescence_pars_fragment:s0,opaque_fragment:r0,packing:o0,premultiplied_alpha_fragment:a0,project_vertex:c0,dithering_fragment:l0,dithering_pars_fragment:h0,roughnessmap_fragment:u0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:p0,shadowmap_vertex:m0,shadowmask_pars_fragment:g0,skinbase_vertex:_0,skinning_pars_vertex:x0,skinning_vertex:y0,skinnormal_vertex:v0,specularmap_fragment:M0,specularmap_pars_fragment:b0,tonemapping_fragment:S0,tonemapping_pars_fragment:w0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:E0,uv_pars_vertex:C0,uv_vertex:R0,worldpos_vertex:I0,background_vert:P0,background_frag:D0,backgroundCube_vert:L0,backgroundCube_frag:N0,cube_vert:U0,cube_frag:F0,depth_vert:O0,depth_frag:B0,distance_vert:z0,distance_frag:k0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:H0,linedashed_frag:W0,meshbasic_vert:X0,meshbasic_frag:q0,meshlambert_vert:Y0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:$0,meshnormal_vert:j0,meshnormal_frag:K0,meshphong_vert:Q0,meshphong_frag:tg,meshphysical_vert:eg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:sg,points_vert:rg,points_frag:og,shadow_vert:ag,shadow_frag:cg,sprite_vert:lg,sprite_frag:hg},yt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Zn={basic:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Je([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Je([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Je([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Je([yt.points,yt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Je([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Je([yt.common,yt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Je([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Je([yt.sprite,yt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Je([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Je([yt.lights,yt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Zn.physical={uniforms:Je([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Ja={r:0,b:0,g:0},ug=new de,xd=new Xt;xd.set(-1,0,0,0,1,0,0,0,1);function dg(i,t,e,n,s,r){let o=new jt(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let _=M.backgroundBlurriness>0;b=t.get(b,_)}return b}function m(M){let b=!1,_=f(M);_===null?g(o,a):_&&_.isColor&&(g(_,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,b){let _=f(b);_&&(_.isCubeTexture||_.mapping===Ur)?(l===void 0&&(l=new fe(new xn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Wi(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xd),l.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new fe(new ki(2,2),new un({name:"BackgroundMaterial",uniforms:Wi(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ne.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,b){M.getRGB(Ja,xl(i)),e.buffers.color.setClear(Ja.r,Ja.g,Ja.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:x,dispose:p}}function fg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(N,z,L,D,V){let Z=!1,q=u(N,D,L,z);r!==q&&(r=q,l(r.object)),Z=f(N,D,L,V),Z&&m(N,D,L,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(N,z,L,D),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,z,L,D){let V=D.wireframe===!0,Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);let q=N.isInstancedMesh===!0?N.id:0,st=Z[q];st===void 0&&(st={},Z[q]=st);let R=st[L.id];R===void 0&&(R={},st[L.id]=R);let O=R[V];return O===void 0&&(O=d(c()),R[V]=O),O}function d(N){let z=[],L=[],D=[];for(let V=0;V<e;V++)z[V]=0,L[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:L,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,z,L,D){let V=r.attributes,Z=z.attributes,q=0,st=L.getAttributes();for(let R in st)if(st[R].location>=0){let G=V[R],rt=Z[R];if(rt===void 0&&(R==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),R==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor)),G===void 0||G.attribute!==rt||rt&&G.data!==rt.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function m(N,z,L,D){let V={},Z=z.attributes,q=0,st=L.getAttributes();for(let R in st)if(st[R].location>=0){let G=Z[R];G===void 0&&(R==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),R==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));let rt={};rt.attribute=G,G&&G.data&&(rt.data=G.data),V[R]=rt,q++}r.attributes=V,r.attributesNum=q,r.index=D}function x(){let N=r.newAttributes;for(let z=0,L=N.length;z<L;z++)N[z]=0}function g(N){p(N,0)}function p(N,z){let L=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;L[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),V[N]!==z&&(i.vertexAttribDivisor(N,z),V[N]=z)}function M(){let N=r.newAttributes,z=r.enabledAttributes;for(let L=0,D=z.length;L<D;L++)z[L]!==N[L]&&(i.disableVertexAttribArray(L),z[L]=0)}function b(N,z,L,D,V,Z,q){q===!0?i.vertexAttribIPointer(N,z,L,V,Z):i.vertexAttribPointer(N,z,L,D,V,Z)}function _(N,z,L,D){x();let V=D.attributes,Z=L.getAttributes(),q=z.defaultAttributeValues;for(let st in Z){let R=Z[st];if(R.location>=0){let O=V[st];if(O===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),O!==void 0){let G=O.normalized,rt=O.itemSize,ot=t.get(O);if(ot===void 0)continue;let kt=ot.buffer,Ht=ot.type,$t=ot.bytesPerElement,j=Ht===i.INT||Ht===i.UNSIGNED_INT||O.gpuType===ha;if(O.isInterleavedBufferAttribute){let et=O.data,vt=et.stride,zt=O.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<R.locationSize;wt++)p(R.location+wt,et.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<R.locationSize;wt++)g(R.location+wt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let wt=0;wt<R.locationSize;wt++)b(R.location+wt,rt/R.locationSize,Ht,G,vt*$t,(zt+rt/R.locationSize*wt)*$t,j)}else{if(O.isInstancedBufferAttribute){for(let et=0;et<R.locationSize;et++)p(R.location+et,O.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let et=0;et<R.locationSize;et++)g(R.location+et);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let et=0;et<R.locationSize;et++)b(R.location+et,rt/R.locationSize,Ht,G,rt*$t,rt/R.locationSize*et*$t,j)}}else if(q!==void 0){let G=q[st];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(R.location,G);break;case 3:i.vertexAttrib3fv(R.location,G);break;case 4:i.vertexAttrib4fv(R.location,G);break;default:i.vertexAttrib1fv(R.location,G)}}}}M()}function w(){A();for(let N in n){let z=n[N];for(let L in z){let D=z[L];for(let V in D){let Z=D[V];for(let q in Z)h(Z[q].object),delete Z[q];delete D[V]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let L in z){let D=z[L];for(let V in D){let Z=D[V];for(let q in Z)h(Z[q].object),delete Z[q];delete D[V]}}delete n[N.id]}function C(N){for(let z in n){let L=n[z];for(let D in L){let V=L[D];if(V[N.id]===void 0)continue;let Z=V[N.id];for(let q in Z)h(Z[q].object),delete Z[q];delete V[N.id]}}}function v(N){for(let z in n){let L=n[z],D=N.isInstancedMesh===!0?N.id:0,V=L[D];if(V!==void 0){for(let Z in V){let q=V[Z];for(let st in q)h(q[st].object),delete q[st];delete V[Z]}delete L[D],Object.keys(L).length===0&&delete n[z]}}}function A(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function pg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let v=C===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==an&&C!==Sn&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,maxSamples:w,samples:T}}function gg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Dn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,_=p.clippingState||null;c.value=_,_=h(m,d,b,f);for(let w=0;w!==b;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ps=4,_g=6,xg=20,yg=256,Wr=new Ti,$u=new jt,El=null,Cl=0,Rl=0,Il=!1,vg=new I,Xi=new I,Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=vg}=r;El=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(El,Cl,Rl),this._renderer.xr.enabled=Il,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),El=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ie,minFilter:Ie,generateMipmaps:!1,type:On,format:Ze,colorSpace:tr,depthBuffer:!1},s=ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mg(r)),this._blurMaterial=Sg(r,t,e),this._ggxMaterial=bg(r,t,e)}return s}_compileMaterial(t){let e=new fe(new Ee,t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s,r){let c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($u),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new xn,new or({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy($u),p=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;Is(s,_*w,b>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(x,c),u.render(t,c)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Is(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ps?n-m+Ps:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,Is(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Wr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Is(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Wr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),d=4*(this._cubeSize-h);Is(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(c,Wr)}};function Mg(i){let t=[],e=[],n=i,s=i-Ps+1+_g;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,b=p>2?0:-1,_=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];m.set(_,f*d*p);for(let w=0;w<d;w++){let T=h[w*2]*2-1,C=h[w*2+1]*2-1;p===0?Xi.set(1,C,T):p===1?Xi.set(-T,1,-C):p===2?Xi.set(-T,C,1):p===3?Xi.set(-1,C,-T):p===4?Xi.set(-T,-1,C):Xi.set(T,C,-1),Xi.toArray(x,(p*d+w)*f)}}let g=new Ee;g.setAttribute("position",new Ne(m,f)),g.setAttribute("outputDirection",new Ne(x,f)),e.push(new fe(g,null)),n>Ps&&n--}return{lodMeshes:e,sizeLods:t}}function ju(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bg(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Sg(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:xg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ku(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ja=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:qn});r.uniforms.tEquirect.value=e;let o=new fe(s,r),a=e.minFilter;return e.minFilter===bn&&(e.minFilter=Ie),new na(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function wg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===aa||f===ca)if(t.has(d)){let m=t.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new ja(m.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===aa||f===ca,x=f===Ei||f===Gi;if(m||x){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ls(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Ls(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===aa?d.mapping=Ei:f===ca&&(d.mapping=Gi),d}function c(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function Ag(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let b=0,_=M.length;b<_;b+=3){let w=M[b+0],T=M[b+1],C=M[b+2];d.push(w,T,T,C,C,w)}}else{let M=m.array;x=m.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let w=b+0,T=b+1,C=b+2;d.push(w,T,T,C,C,w)}}let g=new(m.count>=65535?sr:ir)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Eg(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Cg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Bt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t,e){let n=new WeakMap,s=new we;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*w*4*u),C=new nr(T,_,w,u);C.type=Sn,C.needsUpdate=!0;let v=b*4;for(let P=0;P<u;P++){let N=g[P],z=p[P],L=M[P],D=_*w*4*P;for(let V=0;V<N.count;V++){let Z=V*v;f===!0&&(s.fromBufferAttribute(N,V),T[D+Z+0]=s.x,T[D+Z+1]=s.y,T[D+Z+2]=s.z,T[D+Z+3]=0),m===!0&&(s.fromBufferAttribute(z,V),T[D+Z+4]=s.x,T[D+Z+5]=s.y,T[D+Z+6]=s.z,T[D+Z+7]=0),x===!0&&(s.fromBufferAttribute(L,V),T[D+Z+8]=s.x,T[D+Z+9]=s.y,T[D+Z+10]=s.z,T[D+Z+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ut(_,w)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ig(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Pg={[el]:"LINEAR_TONE_MAPPING",[nl]:"REINHARD_TONE_MAPPING",[il]:"CINEON_TONE_MAPPING",[Nr]:"ACES_FILMIC_TONE_MAPPING",[rl]:"AGX_TONE_MAPPING",[ol]:"NEUTRAL_TONE_MAPPING",[sl]:"CUSTOM_TONE_MAPPING"};function Dg(i,t,e,n,s,r){let o=new sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ee;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));let h=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new fe(l,h),d=new Ti(-1,1,1,-1,0,1),f=null,m=null,x=!1,g,p=null,M=[],b=!1;this.setSize=function(_,w){o.setSize(_,w),a!==null&&a.setSize(_,w),c!==null&&c.setSize(_,w);for(let T=0;T<M.length;T++){let C=M[T];C.setSize&&C.setSize(_,w)}},this.setEffects=function(_){M=_,b=M.length>0&&M[0].isRenderPass===!0;let w=o.width,T=o.height;M.length>0&&a===null&&(a=new sn(w,T,{type:On,depthBuffer:!1,stencilBuffer:!1}),c=new sn(w,T,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let v=M[C];v.setSize&&v.setSize(w,T)}},this.begin=function(_,w){if(x||_.toneMapping===Un&&M.length===0)return!1;if(p=w,w!==null){let T=w.width,C=w.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return b===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Un,!0},this.hasRenderPass=function(){return b},this.end=function(_,w){_.toneMapping=g,x=!0;let T=o,C=a;for(let v=0;v<M.length;v++){let A=M[v];A.enabled!==!1&&(A.render(_,C,T,w),A.needsSwap!==!1&&(T=C,C=C===a?c:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},ne.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let v=Pg[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(p),_.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var yd=new nn,Ll=new vi(1,1),vd=new nr,Md=new Oo,bd=new cr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tc(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Be(e,n)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Be(e,n)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Be(e,n)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ll.compareFunction=e.isReversedDepthBuffer()?Za:Ya,r=Ll):r=yd,e.setTexture2D(t||r,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Md,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bd,s)}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vd,s)}function Kg(i){switch(i){case 5126:return Lg;case 35664:return Ng;case 35665:return Ug;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Hg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return jg}}function Qg(i,t){i.uniform1fv(this.addr,t)}function t_(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function e_(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function n_(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function i_(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s_(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r_(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o_(i,t){i.uniform1iv(this.addr,t)}function a_(i,t){i.uniform2iv(this.addr,t)}function c_(i,t){i.uniform3iv(this.addr,t)}function l_(i,t){i.uniform4iv(this.addr,t)}function h_(i,t){i.uniform1uiv(this.addr,t)}function u_(i,t){i.uniform2uiv(this.addr,t)}function d_(i,t){i.uniform3uiv(this.addr,t)}function f_(i,t){i.uniform4uiv(this.addr,t)}function p_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ll:o=yd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function m_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Md,r[o])}function g_(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bd,r[o])}function __(i,t,e){let n=this.cache,s=t.length,r=tc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vd,r[o])}function x_(i){switch(i){case 5126:return Qg;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}var Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kg(e.type)}},Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x_(e.type)}},Fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function y_(i,t,e){let n=i.name,s=n.length;for(Pl.lastIndex=0;;){let r=Pl.exec(n),o=Pl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rd(e,l===void 0?new Nl(a,i,t):new Ul(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Fl(a),rd(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);y_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v_=37297,M_=0;function b_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ad=new Xt;function S_(i){ne._getMatrix(ad,ne.workingColorSpace,i);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+b_(i.getShaderSource(t),a)}else return r}function w_(i,t){let e=S_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var T_={[el]:"Linear",[nl]:"Reinhard",[il]:"Cineon",[Nr]:"ACESFilmic",[rl]:"AgX",[ol]:"Neutral",[sl]:"Custom"};function A_(i,t){let e=T_[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $a=new I;function E_(){ne.getLuminanceCoefficients($a);let i=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function R_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qr(i){return i!==""}function ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(P_,L_)}var D_=new Map;function L_(i,t){let e=Jt[t];if(e===void 0){let n=D_.get(t);if(n!==void 0)e=Jt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ol(e)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(N_,U_)}function U_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var F_={[Lr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function O_(i){return F_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B_={[Ei]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function z_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var k_={[Gi]:"ENVMAP_MODE_REFRACTION"};function V_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G_={[oa]:"ENVMAP_BLENDING_MULTIPLY",[Tu]:"ENVMAP_BLENDING_MIX",[Au]:"ENVMAP_BLENDING_ADD"};function H_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G_[i.combine]||"ENVMAP_BLENDING_NONE"}function W_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function X_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=O_(e),l=z_(e),h=V_(e),u=H_(e),d=W_(e),f=C_(e),m=R_(r),x=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(g=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Un?A_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,w_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=Ol(o),o=ld(o,e),o=hd(o,e),a=Ol(a),a=ld(a,e),a=hd(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+g+o,_=M+p+a,w=od(s,s.VERTEX_SHADER,b),T=od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,w),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(T)||"",V=z.trim(),Z=L.trim(),q=D.trim(),st=!0,R=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{let O=cd(s,w,"vertex"),G=cd(s,T,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+O+`
`+G)}else V!==""?Ot("WebGLProgram: Program Info Log:",V):(Z===""||q==="")&&(R=!1);R&&(N.diagnostics={runnable:st,programLog:V,vertexShader:{log:Z,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(w),s.deleteShader(T),v=new Ds(s,x),A=I_(s,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,v_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}var q_=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zl(t),e.set(t,n)),n}},zl=class{constructor(t){this.id=q_++,this.code=t,this.usedTimes=0}};function Y_(i){return i===Ri||i===Vr||i===Gr}function Z_(i,t,e,n,s,r){let o=new xs,a=new Bl,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,A,P,N,z,L){let D=N.fog,V=z.geometry,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,st=t.get(v.envMap||Z,q),R=st&&st.mapping===Ur?st.image.height:null,O=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=G!==void 0?G.length:0,ot=0;V.morphAttributes.position!==void 0&&(ot=1),V.morphAttributes.normal!==void 0&&(ot=2),V.morphAttributes.color!==void 0&&(ot=3);let kt,Ht,$t,j;if(O){let ye=Zn[O];kt=ye.vertexShader,Ht=ye.fragmentShader}else{kt=v.vertexShader,Ht=v.fragmentShader;let ye=a.getVertexShaderStage(v),le=a.getFragmentShaderStage(v);a.update(v,ye,le),$t=ye.id,j=le.id}let et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),zt=z.isInstancedMesh===!0,wt=z.isBatchedMesh===!0,Vt=!!v.map,me=!!v.matcap,nt=!!st,at=!!v.aoMap,ct=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,Ut=!!v.displacementMap,Nt=!!v.emissiveMap,Gt=!!v.metalnessMap,qt=!!v.roughnessMap,U=v.anisotropy>0,ce=v.clearcoat>0,Qt=v.dispersion>0,E=v.retroreflectivity>0,y=v.iridescence>0,k=v.sheen>0,X=v.transmission>0,J=U&&!!v.anisotropyMap,ht=ce&&!!v.clearcoatMap,dt=ce&&!!v.clearcoatNormalMap,$=ce&&!!v.clearcoatRoughnessMap,Q=y&&!!v.iridescenceMap,pt=y&&!!v.iridescenceThicknessMap,Pt=k&&!!v.sheenColorMap,xt=k&&!!v.sheenRoughnessMap,mt=!!v.specularMap,Dt=!!v.specularColorMap,Ft=!!v.specularIntensityMap,Yt=X&&!!v.transmissionMap,B=X&&!!v.thicknessMap,gt=!!v.gradientMap,K=!!v.alphaMap,_t=v.alphaTest>0,St=!!v.alphaHash,it=!!v.extensions,Lt=Un;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Rt={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:kt,fragmentShader:Ht,defines:v.defines,customVertexShaderID:$t,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:wt,batchingColor:wt&&z._colorsTexture!==null,instancing:zt,instancingColor:zt&&z.instanceColor!==null,instancingMorph:zt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:me,envMap:nt,envMapMode:nt&&st.mapping,envMapCubeUVHeight:R,aoMap:at,lightMap:ct,bumpMap:lt,normalMap:ft,displacementMap:Ut,emissiveMap:Nt,normalMapObjectSpace:ft&&v.normalMapType===Ru,normalMapTangentSpace:ft&&v.normalMapType===Hr,packedNormalMap:ft&&v.normalMapType===Hr&&Y_(v.normalMap.format),metalnessMap:Gt,roughnessMap:qt,anisotropy:U,anisotropyMap:J,clearcoat:ce,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:$,dispersion:Qt,retroreflection:E,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:pt,sheen:k,sheenColorMap:Pt,sheenRoughnessMap:xt,specularMap:mt,specularColorMap:Dt,specularIntensityMap:Ft,transmission:X,transmissionMap:Yt,thicknessMap:B,gradientMap:gt,opaque:v.transparent===!1&&v.blending===Es&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:_t,alphaHash:St,combine:v.combine,mapUv:Vt&&m(v.map.channel),aoMapUv:at&&m(v.aoMap.channel),lightMapUv:ct&&m(v.lightMap.channel),bumpMapUv:lt&&m(v.bumpMap.channel),normalMapUv:ft&&m(v.normalMap.channel),displacementMapUv:Ut&&m(v.displacementMap.channel),emissiveMapUv:Nt&&m(v.emissiveMap.channel),metalnessMapUv:Gt&&m(v.metalnessMap.channel),roughnessMapUv:qt&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:ht&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&m(v.sheenRoughnessMap.channel),specularMapUv:mt&&m(v.specularMap.channel),specularColorMapUv:Dt&&m(v.specularColorMap.channel),specularIntensityMapUv:Ft&&m(v.specularIntensityMap.channel),transmissionMapUv:Yt&&m(v.transmissionMap.channel),thicknessMapUv:B&&m(v.thicknessMap.channel),alphaMapUv:K&&m(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ft||U),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Vt||K),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ot,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===He,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)A.push(P),A.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(A,v),M(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function p(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let A=f[v.type],P;if(A){let N=Zn[A];P=Yu.clone(N.uniforms)}else P=v.uniforms;return P}function _(v,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new X_(i,A,v,s),l.push(P),h.set(A,P)),P}function w(v){if(--v.usedTimes===0){let A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:C}}function J_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,g,p){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=p),t++,M}function c(d,f,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);let b=a(d,f,m,x,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):e.push(b)}function l(d,f,m,x,g,p){let M=a(d,f,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||$_),n.length>1&&n.sort(f||fd),s.length>1&&s.sort(f||fd)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function j_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function K_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new jt};break;case"SpotLight":e={position:new I,direction:new I,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tx=0;function ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nx(i){let t=new K_,e=Q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new de,o=new de;function a(l){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,b=0,_=0,w=0,T=0,C=0,v=0,A=0,P=0;l.sort(ex);for(let z=0,L=l.length;z<L;z++){let D=l[z],V=D.color,Z=D.intensity,q=D.distance,st=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ri?st=D.shadow.map.texture:st=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=V.r*Z,u+=V.g*Z,d+=V.b*Z;else if(D.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(D.sh.coefficients[R],Z);P++}else if(D.isSunLight){let R=t.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let O=D.shadow,G=e.get(D);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[m]=G,n.sunShadowMap[m]=st;let rt=O.getViewportCount();for(let ot=0;ot<rt;ot++)n.sunShadowMatrix[x+ot]=O.getMatrix(ot),n.sunShadowCascade[x+ot]=O._cascadeData[ot];x+=rt,m++}n.sun[f]=R,f++}else if(D.isDirectionalLight){let R=t.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let O=D.shadow,G=e.get(D);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=D.shadow.matrix,w++}n.directional[g]=R,g++}else if(D.isSpotLight){let R=t.get(D);R.position.setFromMatrixPosition(D.matrixWorld),R.color.copy(V).multiplyScalar(Z),R.distance=q,R.coneCos=Math.cos(D.angle),R.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),R.decay=D.decay,n.spot[M]=R;let O=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,O.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[M]=O.matrix,D.castShadow){let G=e.get(D);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=st,C++}M++}else if(D.isRectAreaLight){let R=t.get(D);R.color.copy(V).multiplyScalar(Z),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=R,b++}else if(D.isPointLight){let R=t.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),R.distance=D.distance,R.decay=D.decay,D.castShadow){let O=D.shadow,G=e.get(D);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=D.shadow.matrix,T++}n.point[p]=R,p++}else if(D.isHemisphereLight){let R=t.get(D);R.skyColor.copy(D.color).multiplyScalar(Z),R.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[_]=R,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==b||N.hemiLength!==_||N.numSunShadows!==m||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==C||N.numSpotMaps!==v||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,N.sunLength=f,N.directionalLength=g,N.pointLength=p,N.spotLength=M,N.rectAreaLength=b,N.hemiLength=_,N.numSunShadows=m,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=C,N.numSpotMaps=v,N.numLightProbes=P,n.version=tx++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){let _=l[M];if(_.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(_.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function md(i){let t=new nx(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ix(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new md(i),t.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`,ox=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],ax=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],gd=new de,Xr=new I,Dl=new I;function cx(i,t,e){let n=new Ms,s=new ut,r=new ut,o=new we,a=new Xo,c=new qo,l={},h=e.maxTextureSize,u={[Ai]:He,[He]:Ai,[Mn]:Mn},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ee;m.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let p=this.type;this.render=function(T,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===ou&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lr);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(qn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let L=p!==this.type;L&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=T.length;D<V;D++){let Z=T[D],q=Z.shadow;if(q===void 0){Ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let st=q.getFrameExtents();s.multiply(st),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,q.mapSize.y=r.y));let R=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=R,q.map===null||L===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===As){if(Z.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new sn(s.x,s.y,{format:Ri,type:On,minFilter:Ie,magFilter:Ie,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new vi(s.x,s.y,Sn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Hn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ke,q.map.depthTexture.magFilter=ke}else Z.isPointLight?(q.map=new ja(s.x),q.map.depthTexture=new Bo(s.x,Fn)):(q.map=new sn(s.x,s.y),q.map.depthTexture=new vi(s.x,s.y,Fn)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Hn,this.type===Lr?(q.map.depthTexture.compareFunction=R?Za:Ya,q.map.depthTexture.minFilter=Ie,q.map.depthTexture.magFilter=Ie):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ke,q.map.depthTexture.magFilter=ke);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let O=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,v);for(let G=0;G<O;G++){let rt=q.getCamera(G);if(Z.isPointLight){let ot=q.camera,kt=q.matrix,Ht=Z.distance||ot.far;Ht!==ot.far&&(ot.far=Ht,ot.updateProjectionMatrix()),Xr.setFromMatrixPosition(Z.matrixWorld),ot.position.copy(Xr),Dl.copy(ot.position),Dl.add(ox[G]),ot.up.copy(ax[G]),ot.lookAt(Dl),ot.updateMatrixWorld(),kt.makeTranslation(-Xr.x,-Xr.y,-Xr.z),gd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),q._frustum.setFromProjectionMatrix(gd,ot.coordinateSystem,ot.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,G),i.clear();else{G===0&&(i.setRenderTarget(q.map),i.clear());let ot=q.getViewport(G);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),z.viewport(o)}n=q.getFrustum(G),_(C,v,rt,Z,this.type)}q.isPointLightShadow!==!0&&this.type===As&&M(q,v),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,P,N)};function M(T,C){let v=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new sn(s.x,s.y,{format:Ri,type:On}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,v,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,v,f,x,null)}function b(T,C,v,A){let P=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=v.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=P.uuid,L=C.uuid,D=l[z];D===void 0&&(D={},l[z]=D);let V=D[L];V===void 0&&(V=P.clone(),D[L]=V,C.addEventListener("dispose",w)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,A===As?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=v}return P}function _(T,C,v,A,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===As)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let L=t.update(T),D=T.material;if(Array.isArray(D)){let V=L.groups;for(let Z=0,q=V.length;Z<q;Z++){let st=V[Z],R=D[st.materialIndex];if(R&&R.visible){let O=b(T,R,A,P);T.onBeforeShadow(i,T,C,v,L,O,st),i.renderBufferDirect(v,null,L,O,T,st),T.onAfterShadow(i,T,C,v,L,O,st)}}}else if(D.visible){let V=b(T,D,A,P);T.onBeforeShadow(i,T,C,v,L,V,null),i.renderBufferDirect(v,null,L,V,T,null),T.onAfterShadow(i,T,C,v,L,V,null)}}let z=T.children;for(let L=0,D=z.length;L<D;L++)_(z[L],C,v,A,P)}function w(T){T.target.removeEventListener("dispose",w);for(let v in l){let A=l[v],P=T.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function lx(i,t){function e(){let B=!1,gt=new we,K=null,_t=new we(0,0,0,0);return{setMask:function(St){K!==St&&!B&&(i.colorMask(St,St,St,St),K=St)},setLocked:function(St){B=St},setClear:function(St,it,Lt,Rt,ye){ye===!0&&(St*=Rt,it*=Rt,Lt*=Rt),gt.set(St,it,Lt,Rt),_t.equals(gt)===!1&&(i.clearColor(St,it,Lt,Rt),_t.copy(gt))},reset:function(){B=!1,K=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,K=null,_t=null,St=null;return{setReversed:function(it){if(gt!==it){let Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),gt=it;let Rt=St;St=null,this.setClear(Rt)}},getReversed:function(){return gt},setTest:function(it){it?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(it){K!==it&&!B&&(i.depthMask(it),K=it)},setFunc:function(it){if(gt&&(it=Vu[it]),_t!==it){switch(it){case Ao:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=it}},setLocked:function(it){B=it},setClear:function(it){St!==it&&(St=it,gt&&(it=1-it),i.clearDepth(it))},reset:function(){B=!1,K=null,_t=null,St=null,gt=!1}}}function s(){let B=!1,gt=null,K=null,_t=null,St=null,it=null,Lt=null,Rt=null,ye=null;return{setTest:function(le){B||(le?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(le){gt!==le&&!B&&(i.stencilMask(le),gt=le)},setFunc:function(le,Cn,zn){(K!==le||_t!==Cn||St!==zn)&&(i.stencilFunc(le,Cn,zn),K=le,_t=Cn,St=zn)},setOp:function(le,Cn,zn){(it!==le||Lt!==Cn||Rt!==zn)&&(i.stencilOp(le,Cn,zn),it=le,Lt=Cn,Rt=zn)},setLocked:function(le){B=le},setClear:function(le){ye!==le&&(i.clearStencil(le),ye=le)},reset:function(){B=!1,gt=null,K=null,_t=null,St=null,it=null,Lt=null,Rt=null,ye=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,b=null,_=null,w=null,T=null,C=null,v=new jt(0,0,0),A=0,P=!1,N=null,z=null,L=null,D=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,st=0,R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(R)[1]),q=st>=1):R.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),q=st>=2);let O=null,G={},rt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),kt=new we().fromArray(rt),Ht=new we().fromArray(ot);function $t(B,gt,K,_t){let St=new Uint8Array(4),it=i.createTexture();i.bindTexture(B,it),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<K;Lt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(gt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return it}let j={};j[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(ds),lt(!1),ft(Jc),et(i.CULL_FACE),at(qn);function et(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function vt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function zt(B,gt){return d[B]!==gt?(i.bindFramebuffer(B,gt),d[B]=gt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function wt(B,gt){let K=m,_t=!1;if(B){K=f.get(gt),K===void 0&&(K=[],f.set(gt,K));let St=B.textures;if(K.length!==St.length||K[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Lt=St.length;it<Lt;it++)K[it]=i.COLOR_ATTACHMENT0+it;K.length=St.length,_t=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,_t=!0);_t&&i.drawBuffers(K)}function Vt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let me={[Vi]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};me[hu]=i.MIN,me[uu]=i.MAX;let nt={[du]:i.ZERO,[fu]:i.ONE,[pu]:i.SRC_COLOR,[Qc]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[xu]:i.DST_COLOR,[gu]:i.DST_ALPHA,[mu]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[_u]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[bu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[wu]:i.ONE_MINUS_CONSTANT_ALPHA};function at(B,gt,K,_t,St,it,Lt,Rt,ye,le){if(B===qn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),B!==au){if(B!==p||le!==P){if((M!==Vi||w!==Vi)&&(i.blendEquation(i.FUNC_ADD),M=Vi,w=Vi),le)switch(B){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",B);break}else switch(B){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jc:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",B);break}b=null,_=null,T=null,C=null,v.set(0,0,0),A=0,p=B,P=le}return}St=St||gt,it=it||K,Lt=Lt||_t,(gt!==M||St!==w)&&(i.blendEquationSeparate(me[gt],me[St]),M=gt,w=St),(K!==b||_t!==_||it!==T||Lt!==C)&&(i.blendFuncSeparate(nt[K],nt[_t],nt[it],nt[Lt]),b=K,_=_t,T=it,C=Lt),(Rt.equals(v)===!1||ye!==A)&&(i.blendColor(Rt.r,Rt.g,Rt.b,ye),v.copy(Rt),A=ye),p=B,P=!1}function ct(B,gt){B.side===Mn?vt(i.CULL_FACE):et(i.CULL_FACE);let K=B.side===He;gt&&(K=!K),lt(K),B.blending===Es&&B.transparent===!1?at(qn):at(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let _t=B.stencilWrite;a.setTest(_t),_t&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Nt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){N!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),N=B)}function ft(B){B!==su?(et(i.CULL_FACE),B!==z&&(B===Jc?i.cullFace(i.BACK):B===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),z=B}function Ut(B){B!==L&&(q&&i.lineWidth(B),L=B)}function Nt(B,gt,K){B?(et(i.POLYGON_OFFSET_FILL),(D!==gt||V!==K)&&(D=gt,V=K,o.getReversed()&&(gt=-gt),i.polygonOffset(gt,K))):vt(i.POLYGON_OFFSET_FILL)}function Gt(B){B?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function qt(B){B===void 0&&(B=i.TEXTURE0+Z-1),O!==B&&(i.activeTexture(B),O=B)}function U(B,gt,K){K===void 0&&(O===null?K=i.TEXTURE0+Z-1:K=O);let _t=G[K];_t===void 0&&(_t={type:void 0,texture:void 0},G[K]=_t),(_t.type!==B||_t.texture!==gt)&&(O!==K&&(i.activeTexture(K),O=K),i.bindTexture(B,gt||j[B]),_t.type=B,_t.texture=gt)}function ce(){let B=G[O];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Qt(){try{i.compressedTexImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function y(){try{i.texSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function k(){try{i.texSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function ht(){try{i.texStorage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function dt(){try{i.texStorage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function $(){try{i.texImage2D(...arguments)}catch(B){Bt("WebGLState:",B)}}function Q(){try{i.texImage3D(...arguments)}catch(B){Bt("WebGLState:",B)}}function pt(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function Pt(B,gt){u[B]!==gt&&(i.pixelStorei(B,gt),u[B]=gt)}function xt(B){kt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),kt.copy(B))}function mt(B){Ht.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ht.copy(B))}function Dt(B,gt){let K=l.get(gt);K===void 0&&(K=new WeakMap,l.set(gt,K));let _t=K.get(B);_t===void 0&&(_t=i.getUniformBlockIndex(gt,B.name),K.set(B,_t))}function Ft(B,gt){let _t=l.get(gt).get(B);c.get(gt)!==_t&&(i.uniformBlockBinding(gt,_t,B.__bindingPointIndex),c.set(gt,_t))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},O=null,G={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,b=null,_=null,w=null,T=null,C=null,v=new jt(0,0,0),A=0,P=!1,N=null,z=null,L=null,D=null,V=null,kt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:vt,bindFramebuffer:zt,drawBuffers:wt,useProgram:Vt,setBlending:at,setMaterial:ct,setFlipSided:lt,setCullFace:ft,setLineWidth:Ut,setPolygonOffset:Nt,setScissorTest:Gt,activeTexture:qt,bindTexture:U,unbindTexture:ce,compressedTexImage2D:Qt,compressedTexImage3D:E,texImage2D:$,texImage3D:Q,pixelStorei:Pt,getParameter:pt,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:ht,texStorage3D:dt,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:xt,viewport:mt,reset:Yt}}function hx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,y){return m?new OffscreenCanvas(E,y):ps("canvas")}function g(E,y,k){let X=1,J=Qt(E);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ht=Math.floor(X*J.width),dt=Math.floor(X*J.height);d===void 0&&(d=x(ht,dt));let $=y?x(ht,dt):d;return $.width=ht,$.height=dt,$.getContext("2d").drawImage(E,0,0,ht,dt),Ot("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ht+"x"+dt+")."),$}else return"data"in E&&Ot("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(E,y,k,X,J,ht=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let dt;X&&(dt=t.get("EXT_texture_norm16"),dt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8),k===i.UNSIGNED_SHORT&&dt&&($=dt.R16_EXT),k===i.SHORT&&dt&&($=dt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),y===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8),k===i.UNSIGNED_SHORT&&dt&&($=dt.RG16_EXT),k===i.SHORT&&dt&&($=dt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&dt&&($=dt.RGB16_EXT),k===i.SHORT&&dt&&($=dt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),y===i.RGBA){let Q=ht?er:ne.getTransfer(J);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=Q===ue?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&dt&&($=dt.RGBA16_EXT),k===i.SHORT&&dt&&($=dt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function w(E,y){let k;return E?y===null||y===Fn||y===Rs?k=i.DEPTH24_STENCIL8:y===Sn?k=i.DEPTH32F_STENCIL8:y===Cs&&(k=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Fn||y===Rs?k=i.DEPTH_COMPONENT24:y===Sn?k=i.DEPTH_COMPONENT32F:y===Cs&&(k=i.DEPTH_COMPONENT16),k}function T(E,y){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==ke&&E.minFilter!==Ie?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){let y=E.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function v(E){let y=E.target;y.removeEventListener("dispose",v),N(y)}function A(E){let y=n.get(E);if(y.__webglInit===void 0)return;let k=E.source,X=f.get(k);if(X){let J=X[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(E),Object.keys(X).length===0&&f.delete(k)}n.remove(E)}function P(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let k=E.source,X=f.get(k);delete X[y.__cacheKey],o.memory.textures--}function N(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let J=0;J<y.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[X][J]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=E.textures;for(let X=0,J=k.length;X<J;X++){let ht=n.get(k[X]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(E)}let z=0;function L(){z=0}function D(){return z}function V(E){z=E}function Z(){let E=z;return E>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function q(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function st(E,y){let k=n.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let X=E.image;if(X===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(k,E,y);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function R(E,y){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){vt(k,E,y);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function O(E,y){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){vt(k,E,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function G(E,y){let k=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){zt(k,E,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let rt={[xi]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},ot={[ke]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Ie]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},kt={[Pu]:i.NEVER,[Fu]:i.ALWAYS,[Du]:i.LESS,[Ya]:i.LEQUAL,[Lu]:i.EQUAL,[Za]:i.GEQUAL,[Nu]:i.GREATER,[Uu]:i.NOTEQUAL};function Ht(E,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ie||y.magFilter===la||y.magFilter===Fr||y.magFilter===bn||y.minFilter===Ie||y.minFilter===la||y.minFilter===Fr||y.minFilter===bn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,rt[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,rt[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,rt[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ot[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ot[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,kt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ke||y.minFilter!==Fr&&y.minFilter!==bn||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(E,y){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",C));let X=y.source,J=f.get(X);J===void 0&&(J={},f.set(X,J));let ht=q(y);if(ht!==E.__cacheKey){J[ht]===void 0&&(J[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[ht].usedTimes++;let dt=J[E.__cacheKey];dt!==void 0&&(J[E.__cacheKey].usedTimes--,dt.usedTimes===0&&P(y)),E.__cacheKey=ht,E.__webglTexture=J[ht].texture}return k}function j(E,y,k){return Math.floor(Math.floor(E/k)/y)}function et(E,y,k,X){let ht=E.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,X,y.data);else{ht.sort((Pt,xt)=>Pt.start-xt.start);let dt=0;for(let Pt=1;Pt<ht.length;Pt++){let xt=ht[dt],mt=ht[Pt],Dt=xt.start+xt.count,Ft=j(mt.start,y.width,4),Yt=j(xt.start,y.width,4);mt.start<=Dt+1&&Ft===Yt&&j(mt.start+mt.count-1,y.width,4)===Ft?xt.count=Math.max(xt.count,mt.start+mt.count-xt.start):(++dt,ht[dt]=mt)}ht.length=dt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Pt=0,xt=ht.length;Pt<xt;Pt++){let mt=ht[Pt],Dt=Math.floor(mt.start/4),Ft=Math.ceil(mt.count/4),Yt=Dt%y.width,B=Math.floor(Dt/y.width),gt=Ft,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Yt,B,gt,K,k,X,y.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function vt(E,y,k){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);let J=$t(E,y),ht=y.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+k);let dt=n.get(ht);if(ht.version!==dt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let K=ne.getPrimaries(ne.workingColorSpace),_t=y.colorSpace===wn?null:ne.getPrimaries(y.colorSpace),St=y.colorSpace===wn||K===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=g(y.image,!1,s.maxTextureSize);Q=ce(y,Q);let pt=r.convert(y.format,y.colorSpace),Pt=r.convert(y.type),xt=_(y.internalFormat,pt,Pt,y.normalized,y.colorSpace,y.isVideoTexture);Ht(X,y);let mt,Dt=y.mipmaps,Ft=y.isVideoTexture!==!0,Yt=dt.__version===void 0||J===!0,B=ht.dataReady,gt=T(y,Q);if(y.isDepthTexture)xt=w(y.format===Ci,y.type),Yt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,pt,Pt,null));else if(y.isDataTexture)if(Dt.length>0){Ft&&Yt&&e.texStorage2D(i.TEXTURE_2D,gt,xt,Dt[0].width,Dt[0].height);for(let K=0,_t=Dt.length;K<_t;K++)mt=Dt[K],Ft?B&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,K,xt,mt.width,mt.height,0,pt,Pt,mt.data);y.generateMipmaps=!1}else Ft?(Yt&&e.texStorage2D(i.TEXTURE_2D,gt,xt,Q.width,Q.height),B&&et(y,Q,pt,Pt)):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,pt,Pt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,xt,Dt[0].width,Dt[0].height,Q.depth);for(let K=0,_t=Dt.length;K<_t;K++)if(mt=Dt[K],y.format!==Ze)if(pt!==null)if(Ft){if(B)if(y.layerUpdates.size>0){let St=Ml(mt.width,mt.height,y.format,y.type);for(let it of y.layerUpdates){let Lt=mt.data.subarray(it*St/mt.data.BYTES_PER_ELEMENT,(it+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,it,mt.width,mt.height,1,pt,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,xt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,Q.depth,pt,Pt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,xt,mt.width,mt.height,Q.depth,0,pt,Pt,mt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ft&&Yt&&e.texStorage2D(i.TEXTURE_2D,gt,xt,Dt[0].width,Dt[0].height);for(let K=0,_t=Dt.length;K<_t;K++)mt=Dt[K],y.format!==Ze?pt!==null?Ft?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,xt,mt.width,mt.height,0,mt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?B&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,K,xt,mt.width,mt.height,0,pt,Pt,mt.data)}else if(y.isDataArrayTexture)if(Ft){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,xt,Q.width,Q.height,Q.depth),B)if(y.layerUpdates.size>0){let K=Ml(Q.width,Q.height,y.format,y.type);for(let _t of y.layerUpdates){let St=Q.data.subarray(_t*K/Q.data.BYTES_PER_ELEMENT,(_t+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,Q.width,Q.height,1,pt,Pt,St)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(y.isData3DTexture)Ft?(Yt&&e.texStorage3D(i.TEXTURE_3D,gt,xt,Q.width,Q.height,Q.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(y.isFramebufferTexture){if(Yt)if(Ft)e.texStorage2D(i.TEXTURE_2D,gt,xt,Q.width,Q.height);else{let K=Q.width,_t=Q.height;for(let St=0;St<gt;St++)e.texImage2D(i.TEXTURE_2D,St,xt,K,_t,0,pt,Pt,null),K>>=1,_t>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),u.add(y),K.onpaint=_t=>{let St=_t.changedElements;for(let it of u)St.includes(it.image)&&(it.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let St=i.RGBA,it=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,it,Lt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ft&&Yt){let K=Qt(Dt[0]);e.texStorage2D(i.TEXTURE_2D,gt,xt,K.width,K.height)}for(let K=0,_t=Dt.length;K<_t;K++)mt=Dt[K],Ft?B&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt,Pt,mt):e.texImage2D(i.TEXTURE_2D,K,xt,pt,Pt,mt);y.generateMipmaps=!1}else if(Ft){if(Yt){let K=Qt(Q);e.texStorage2D(i.TEXTURE_2D,gt,xt,K.width,K.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Pt,Q)}else e.texImage2D(i.TEXTURE_2D,0,xt,pt,Pt,Q);p(y)&&M(X),dt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function zt(E,y,k){if(y.image.length!==6)return;let X=$t(E,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ht=n.get(J);if(J.version!==ht.__version||X===!0){e.activeTexture(i.TEXTURE0+k);let dt=ne.getPrimaries(ne.workingColorSpace),$=y.colorSpace===wn?null:ne.getPrimaries(y.colorSpace),Q=y.colorSpace===wn||dt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Pt=y.image[0]&&y.image[0].isDataTexture,xt=[];for(let it=0;it<6;it++)!pt&&!Pt?xt[it]=g(y.image[it],!0,s.maxCubemapSize):xt[it]=Pt?y.image[it].image:y.image[it],xt[it]=ce(y,xt[it]);let mt=xt[0],Dt=r.convert(y.format,y.colorSpace),Ft=r.convert(y.type),Yt=_(y.internalFormat,Dt,Ft,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,gt=ht.__version===void 0||X===!0,K=J.dataReady,_t=T(y,mt);Ht(i.TEXTURE_CUBE_MAP,y);let St;if(pt){B&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,mt.width,mt.height);for(let it=0;it<6;it++){St=xt[it].mipmaps;for(let Lt=0;Lt<St.length;Lt++){let Rt=St[Lt];y.format!==Ze?Dt!==null?B?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,Yt,Rt.width,Rt.height,0,Rt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Rt.width,Rt.height,Dt,Ft,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,Yt,Rt.width,Rt.height,0,Dt,Ft,Rt.data)}}}else{if(St=y.mipmaps,B&&gt){St.length>0&&_t++;let it=Qt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Yt,it.width,it.height)}for(let it=0;it<6;it++)if(Pt){B?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt[it].width,xt[it].height,Dt,Ft,xt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,xt[it].width,xt[it].height,0,Dt,Ft,xt[it].data);for(let Lt=0;Lt<St.length;Lt++){let ye=St[Lt].image[it].image;B?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,ye.width,ye.height,Dt,Ft,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,Yt,ye.width,ye.height,0,Dt,Ft,ye.data)}}else{B?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Ft,xt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,Dt,Ft,xt[it]);for(let Lt=0;Lt<St.length;Lt++){let Rt=St[Lt];B?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,Dt,Ft,Rt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,Yt,Dt,Ft,Rt.image[it])}}}p(y)&&M(i.TEXTURE_CUBE_MAP),ht.__version=J.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function wt(E,y,k,X,J,ht){let dt=r.convert(k.format,k.colorSpace),$=r.convert(k.type),Q=_(k.internalFormat,dt,$,k.normalized,k.colorSpace),pt=n.get(y),Pt=n.get(k);if(Pt.__renderTarget=y,!pt.__hasExternalTextures){let xt=Math.max(1,y.width>>ht),mt=Math.max(1,y.height>>ht);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ht,Q,xt,mt,y.depth,0,dt,$,null):e.texImage2D(J,ht,Q,xt,mt,0,dt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Pt.__webglTexture,0,Gt(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Pt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(E,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let X=y.depthTexture,J=X&&X.isDepthTexture?X.type:null,ht=w(y.stencilBuffer,J),dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(y),ht,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(y),ht,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ht,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,E)}else{let X=y.textures;for(let J=0;J<X.length;J++){let ht=X[J],dt=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),Q=_(ht.internalFormat,dt,$,ht.normalized,ht.colorSpace);qt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(y),Q,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(E,y,k){let X=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,y.depthTexture);let pt=r.convert(y.depthTexture.format),Pt=r.convert(y.depthTexture.type),xt;y.depthTexture.format===Hn?xt=i.DEPTH_COMPONENT24:y.depthTexture.format===Ci&&(xt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,xt,y.width,y.height,0,pt,Pt,null)}}else st(y.depthTexture,0);let ht=J.__webglTexture,dt=Gt(y),$=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Q=y.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Hn)qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ht,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ht,0);else if(y.depthTexture.format===Ci)qt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ht,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(E){let y=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=X}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)me(y.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;X&&X.length>0?me(y.__webglFramebuffer[0],E,0):me(y.__webglFramebuffer,E,0)}else if(k){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Vt(y.__webglDepthbuffer[X],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Vt(y.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(E,y,k){let X=n.get(E);y!==void 0&&wt(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&nt(E)}function ct(E){let y=E.texture,k=n.get(E),X=n.get(y);E.addEventListener("dispose",v);let J=E.textures,ht=E.isWebGLCubeRenderTarget===!0,dt=J.length>1;if(dt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),ht){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let Q=0;Q<y.mipmaps.length;Q++)k.__webglFramebuffer[$][Q]=i.createFramebuffer()}else k.__webglFramebuffer[$]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)k.__webglFramebuffer[$]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(dt)for(let $=0,Q=J.length;$<Q;$++){let pt=n.get(J[$]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&qt(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let Q=J[$];k.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let pt=r.convert(Q.format,Q.colorSpace),Pt=r.convert(Q.type),xt=_(Q.internalFormat,pt,Pt,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),mt=Gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,k.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)wt(k.__webglFramebuffer[$][Q],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else wt(k.__webglFramebuffer[$],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(y)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let $=0,Q=J.length;$<Q;$++){let pt=J[$],Pt=n.get(pt),xt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Pt.__webglTexture),Ht(xt,pt),wt(k.__webglFramebuffer,E,pt,i.COLOR_ATTACHMENT0+$,xt,0),p(pt)&&M(xt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,X.__webglTexture),Ht($,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)wt(k.__webglFramebuffer[Q],E,y,i.COLOR_ATTACHMENT0,$,Q);else wt(k.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,$,0);p(y)&&M($),e.unbindTexture()}E.depthBuffer&&nt(E)}function lt(E){let y=E.textures;for(let k=0,X=y.length;k<X;k++){let J=y[k];if(p(J)){let ht=b(E),dt=n.get(J).__webglTexture;e.bindTexture(ht,dt),M(ht),e.unbindTexture()}}}let ft=[],Ut=[];function Nt(E){if(E.samples>0){if(qt(E)===!1){let y=E.textures,k=E.width,X=E.height,J=i.COLOR_BUFFER_BIT,ht=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(E),$=y.length>1;if($)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=E.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Pt=n.get(y[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,J,i.NEAREST),c===!0&&(ft.length=0,Ut.length=0,ft.push(i.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ft.push(ht),Ut.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Pt=n.get(y[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Gt(E){return Math.min(s.maxSamples,E.samples)}function qt(E){let y=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ce(E,y){let k=E.colorSpace,X=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==tr&&k!==wn&&(ne.getTransfer(k)===ue?(X!==Ze||J!==an)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",k)),y}function Qt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=L,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=R,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=at,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ux(i,t){function e(n,s=wn){let r,o=ne.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cl)return i.BYTE;if(n===ll)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===dl)return i.ALPHA;if(n===fl)return i.RGB;if(n===Ze)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_a||n===xa||n===ya||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===ba||n===Sa||n===wa||n===Ta||n===Vr||n===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===ba)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wa)return r.COMPRESSED_R11_EAC;if(n===Ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vr)return r.COMPRESSED_RG11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ea||n===Ca||n===Ra||n===Ia||n===Pa||n===Da||n===La||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ga||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===Gr||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new kl,p={},M=e.getContextAttributes(),b=null,_=null,w=[],T=[],C=new ut,v=null,A=null,P=new tn;P.viewport=new we;let N=new tn;N.viewport=new we;let z=[P,N],L=new ia,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=w[j];return et===void 0&&(et=new ys,w[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=w[j];return et===void 0&&(et=new ys,w[j]=et),et.getGripSpace()},this.getHand=function(j){let et=w[j];return et===void 0&&(et=new ys,w[j]=et),et.getHandSpace()};function Z(j){let et=T.indexOf(j.inputSource);if(et===-1)return;let vt=w[et];vt!==void 0&&(vt.update(j.inputSource,j.frame,l||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",st);for(let j=0;j<w.length;j++){let et=T[j];et!==null&&(T[j]=null,w[j].disconnect(et))}D=null,V=null,g.reset();for(let j in p)delete p[j];if(t.setRenderTarget(b),f=null,d=null,u=null,s=null,_=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",st),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,zt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Ci:Hn,zt=M.stencil?Rs:Fn);let Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new sn(d.textureWidth,d.textureHeight,{format:Ze,type:an,depthTexture:new vi(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new sn(f.framebufferWidth,f.framebufferHeight,{format:Ze,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(j){for(let et=0;et<j.removed.length;et++){let vt=j.removed[et],zt=T.indexOf(vt);zt>=0&&(T[zt]=null,w[zt].disconnect(vt))}for(let et=0;et<j.added.length;et++){let vt=j.added[et],zt=T.indexOf(vt);if(zt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=T.length){T.push(vt),zt=Vt;break}else if(T[Vt]===null){T[Vt]=vt,zt=Vt;break}if(zt===-1)break}let wt=w[zt];wt&&wt.connect(vt)}}let R=new I,O=new I;function G(j,et,vt){R.setFromMatrixPosition(et.matrixWorld),O.setFromMatrixPosition(vt.matrixWorld);let zt=R.distanceTo(O),wt=et.projectionMatrix.elements,Vt=vt.projectionMatrix.elements,me=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],ct=(wt[9]-1)/wt[5],lt=(wt[8]-1)/wt[0],ft=(Vt[8]+1)/Vt[0],Ut=me*lt,Nt=me*ft,Gt=zt/(-lt+ft),qt=Gt*-lt;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qt),j.translateZ(Gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=me+Gt,ce=nt+Gt,Qt=Ut-qt,E=Nt+(zt-qt),y=at*nt/ce*U,k=ct*nt/ce*U;j.projectionMatrix.makePerspective(Qt,E,y,k,U,ce),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let et=j.near,vt=j.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),L.near=N.near=P.near=et,L.far=N.far=P.far=vt,(D!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,V=L.far),L.layers.mask=j.layers.mask|6,P.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;let zt=j.parent,wt=L.cameras;rt(L,zt);for(let Vt=0;Vt<wt.length;Vt++)rt(wt[Vt],zt);wt.length===2?G(L,P,N):L.projectionMatrix.copy(P.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),ot(j,L,zt)};function ot(j,et,vt){vt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(j){return p[j]};let kt=null;function Ht(j,et){if(h=et.getViewerPose(l||o),m=et,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let zt=!1;vt.length!==L.cameras.length&&(L.cameras.length=0,zt=!0);for(let nt=0;nt<vt.length;nt++){let at=vt[nt],ct=null;if(f!==null)ct=f.getViewport(at);else{let ft=u.getViewSubImage(d,at);ct=ft.viewport,nt===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let lt=z[nt];lt===void 0&&(lt=new tn,lt.layers.enable(nt),lt.viewport=new we,z[nt]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(L.matrix.copy(lt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),zt===!0&&L.cameras.push(lt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let nt=u.getDepthInformation(vt[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<vt.length;nt++){let at=vt[nt].camera;if(at){let ct=p[at];ct||(ct=new lr,p[at]=ct);let lt=u.getCameraImage(at);ct.sourceTexture=lt}}}}for(let vt=0;vt<w.length;vt++){let zt=T[vt],wt=w[vt];zt!==null&&wt!==void 0&&wt.update(zt,et,l||o)}kt&&kt(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let $t=new _d;$t.setAnimationLoop(Ht),this.setAnimationLoop=function(j){kt=j},this.dispose=function(){}}},px=new de,Sd=new Xt;Sd.set(-1,0,0,0,1,0,0,0,1);function mx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,xl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),b=M.envMap,_=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Sd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let T=w.program;n.uniformBlockBinding(_,T)}function l(_,w){let T=s[_.id];T===void 0&&(g(_),T=h(_),s[_.id]=T,_.addEventListener("dispose",M));let C=w.program;n.updateUBOMapping(_,C);let v=t.render.frame;r[_.id]!==v&&(d(_),r[_.id]=v)}function h(_){let w=u();_.__bindingPointIndex=w;let T=i.createBuffer(),C=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=s[_.id],T=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,A=T.length;v<A;v++){let P=T[v];if(Array.isArray(P))for(let N=0,z=P.length;N<z;N++)f(P[N],v,N,C);else f(P,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,w,T,C){if(x(_,w,T,C)===!0){let v=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let N=0;N<A.length;N++){let z=A[N],L=p(z);m(z,_.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,w,T){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,T)}function x(_,w,T,C){let v=_.value,A=w+"_"+T;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{let P=C[A];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(_){let w=_.uniforms,T=0,C=16;for(let A=0,P=w.length;A<P;A++){let N=Array.isArray(w[A])?w[A]:[w[A]];for(let z=0,L=N.length;z<L;z++){let D=N[z],V=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,q=V.length;Z<q;Z++){let st=V[Z],R=p(st),O=T%C,G=O%R.boundary,rt=O+G;T+=G,rt!==0&&C-rt<R.storage&&(T+=C-rt),D.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=R.storage}}}let v=T%C;return v>0&&(T+=C-v),_.__size=T,_.__cache={},this}function p(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),w}function M(_){let w=_.target;w.removeEventListener("dispose",M);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}var _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function xx(){return Yn===null&&(Yn=new si(_x,16,16,Ri,On),Yn.name="DFG_LUT",Yn.minFilter=Ie,Yn.magFilter=Ie,Yn.wrapS=Gn,Yn.wrapT=Gn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Ka=class{constructor(t={}){let{canvas:e=Bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([ga,ma,pa]),p=new Set([an,Fn,Cs,Rs,ua,da]),M=new Uint32Array(4),b=new Int32Array(4),_=new I,w=null,T=null,C=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,z=null,L=null,D=null,V=null;this._outputColorSpace=Ae;let Z=0,q=0,st=null,R=-1,O=null,G=new we,rt=new we,ot=null,kt=new jt(0),Ht=0,$t=e.width,j=e.height,et=1,vt=null,zt=null,wt=new we(0,0,$t,j),Vt=new we(0,0,$t,j),me=!1,nt=new Ms,at=!1,ct=!1,lt=new de,ft=new I,Ut=new we,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function qt(){return st===null?et:1}let U=n;function ce(S,F){return e.getContext(S,F)}let Qt,E,y,k,X,J,ht,dt,$,Q,pt,Pt,xt,mt,Dt,Ft,Yt,B,gt,K,_t,St,it;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ra}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),U===null){let F="webgl2";if(U=ce(F,S),U===null)throw ce(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(S){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),Bt("WebGLRenderer: "+S.message),S}function Lt(){Qt=new Tg(U),Qt.init(),_t=new ux(U,Qt),E=new mg(U,Qt,t,_t),y=new lx(U,Qt),E.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),L=U.createFramebuffer(),D=U.createFramebuffer(),V=U.createFramebuffer(),k=new Cg(U),X=new J_,J=new hx(U,Qt,y,X,E,_t,k),ht=new wg(P),dt=new Ip(U),St=new fg(U,dt),$=new Ag(U,dt,k,St),Q=new Ig(U,$,dt,St,k),B=new Rg(U,E,J),Dt=new gg(X),pt=new Z_(P,ht,Qt,E,St,Dt),Pt=new mx(P,X),xt=new j_,mt=new ix(Qt),Yt=new dg(P,ht,y,Q,m,c),Ft=new cx(P,Q,E),it=new gx(U,k,E,y),gt=new pg(U,Qt,k),K=new Eg(U,Qt,k),k.programs=pt.programs,P.capabilities=E,P.extensions=Qt,P.properties=X,P.renderLists=xt,P.shadowMap=Ft,P.state=y,P.info=k}x!==an&&(A=new Dg(x,e.width,e.height,a,s,r));let Rt=new Vl(P,U);this.xr=Rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=Qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize($t,j,!1))},this.getSize=function(S){return S.set($t,j)},this.setSize=function(S,F,Y=!0){if(Rt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=S,j=F,e.width=Math.floor(S*et),e.height=Math.floor(F*et),Y===!0&&(e.style.width=S+"px",e.style.height=F+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set($t*et,j*et).floor()},this.setDrawingBufferSize=function(S,F,Y){$t=S,j=F,et=Y,e.width=Math.floor(S*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(x===an){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,F,Y,H){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,F,Y,H),y.viewport(G.copy(wt).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Vt)},this.setScissor=function(S,F,Y,H){S.isVector4?Vt.set(S.x,S.y,S.z,S.w):Vt.set(S,F,Y,H),y.scissor(rt.copy(Vt).multiplyScalar(et).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(S){y.setScissorTest(me=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){zt=S},this.getClearColor=function(S){return S.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Y=!0){let H=0;if(S){let W=!1;if(st!==null){let bt=st.texture.format;W=g.has(bt)}if(W){let bt=st.texture.type,At=p.has(bt),Mt=Yt.getClearColor(),Et=Yt.getClearAlpha(),It=Mt.r,Zt=Mt.g,te=Mt.b;At?(M[0]=It,M[1]=Zt,M[2]=te,M[3]=Et,U.clearBufferuiv(U.COLOR,0,M)):(b[0]=It,b[1]=Zt,b[2]=te,b[3]=Et,U.clearBufferiv(U.COLOR,0,b))}else H|=U.COLOR_BUFFER_BIT}F&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),z=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),Yt.dispose(),xt.dispose(),mt.dispose(),X.dispose(),ht.dispose(),Q.dispose(),St.dispose(),it.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",gh),Rt.removeEventListener("sessionend",_h),Pi.stop()};function ye(S){S.preventDefault(),ml("WebGLRenderer: Context Lost."),N=!0}function le(){ml("WebGLRenderer: Context Restored."),N=!1;let S=k.autoReset,F=Ft.enabled,Y=Ft.autoUpdate,H=Ft.needsUpdate,W=Ft.type;Lt(),k.autoReset=S,Ft.enabled=F,Ft.autoUpdate=Y,Ft.needsUpdate=H,Ft.type=W}function Cn(S){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zn(S){let F=S.target;F.removeEventListener("dispose",zn),Yd(F)}function Yd(S){Zd(S),X.remove(S)}function Zd(S){let F=X.get(S).programs;F!==void 0&&(F.forEach(function(Y){pt.releaseProgram(Y)}),S.isShaderMaterial&&pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Y,H,W,bt){F===null&&(F=Nt);let At=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=jd(S,F,Y,H,W);y.setMaterial(H,At);let Et=Y.index,It=1;if(H.wireframe===!0){if(Et=$.getWireframeAttribute(Y),Et===void 0)return;It=2}let Zt=Y.drawRange,te=Y.attributes.position,Ct=Zt.start*It,he=(Zt.start+Zt.count)*It;bt!==null&&(Ct=Math.max(Ct,bt.start*It),he=Math.min(he,(bt.start+bt.count)*It)),Et!==null?(Ct=Math.max(Ct,0),he=Math.min(he,Et.count)):te!=null&&(Ct=Math.max(Ct,0),he=Math.min(he,te.count));let De=he-Ct;if(De<0||De===1/0)return;St.setup(W,H,Mt,Y,Et);let Me,xe=gt;if(Et!==null&&(Me=dt.get(Et),xe=K,xe.setIndex(Me)),W.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*qt()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(W.isLine){let Xe=H.linewidth;Xe===void 0&&(Xe=1),y.setLineWidth(Xe*qt()),W.isLineSegments?xe.setMode(U.LINES):W.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else W.isPoints?xe.setMode(U.POINTS):W.isSprite&&xe.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Xe=W._multiDrawStarts,Tt=W._multiDrawCounts,Ke=W._multiDrawCount,re=Et?dt.get(Et).bytesPerElement:1,gn=X.get(H).currentProgram.getUniforms();for(let kn=0;kn<Ke;kn++)gn.setValue(U,"_gl_DrawID",kn),xe.render(Xe[kn]/re,Tt[kn])}else if(W.isInstancedMesh)xe.renderInstances(Ct,De,W.count);else if(Y.isInstancedBufferGeometry){let Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Tt=Math.min(Y.instanceCount,Xe);xe.renderInstances(Ct,De,Tt)}else xe.render(Ct,De)};function mh(S,F,Y,H){z!==null&&S.isNodeMaterial&&z.setObject(H,S),at===!0&&Dt.setState(S,Y,!1),S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,Qr(S,F,H),S.side=Ai,S.needsUpdate=!0,Qr(S,F,H),S.side=Mn):Qr(S,F,H)}this.compile=function(S,F,Y=null){Y===null&&(Y=S),z!==null&&z.renderStart(S,F,Y),T=mt.get(Y),T.init(F),v.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==Y&&S.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ct=this.localClippingEnabled,at=Dt.init(this.clippingPlanes,ct),at===!0&&Dt.setGlobalState(this.clippingPlanes,F),z!==null&&Ft.render(T.state.shadowsArray,Y,F);let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let bt=W.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){let Mt=bt[At];mh(Mt,Y,F,W),H.add(Mt)}else mh(bt,Y,F,W),H.add(bt)}),T=v.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(S,F,Y=null){let H=this.compile(S,F,Y);return new Promise(W=>{function bt(){if(H.forEach(function(At){let Et=X.get(At).currentProgram;(Et===void 0||Et.isReady())&&H.delete(At)}),H.size===0){W(S);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let uc=null;function Jd(S){uc&&uc(S)}function gh(){Pi.stop()}function _h(){Pi.start()}let Pi=new _d;Pi.setAnimationLoop(Jd),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(S){uc=S,Rt.setAnimationLoop(S),S===null?Pi.stop():Pi.start()},Rt.addEventListener("sessionstart",gh),Rt.addEventListener("sessionend",_h),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(S,F);let Y=Rt.enabled===!0&&Rt.isPresenting===!0,H=A!==null&&(st===null||Y)&&A.begin(P,st);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(F),F=Rt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,F,st),T=mt.get(S,v.length),T.init(F),T.state.textureUnits=J.getTextureUnits(),v.push(T),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(lt,Ln,F.reversedDepth),ct=this.localClippingEnabled,at=Dt.init(this.clippingPlanes,ct),w=xt.get(S,C.length),w.init(),C.push(w),Rt.enabled===!0&&Rt.isPresenting===!0){let At=P.xr.getDepthSensingMesh();At!==null&&dc(At,F,-1/0,P.sortObjects)}dc(S,F,0,P.sortObjects),w.finish(),z!==null&&z.updateLights(T.state.lightsArray),P.sortObjects===!0&&w.sort(vt,zt),Gt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Gt&&Yt.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Dt.beginShadows();let W=T.state.shadowsArray;if(Ft.render(W,S,F),at===!0&&Dt.endShadows(),(H&&A.hasRenderPass())===!1){let At=w.opaque,Mt=w.transmissive;if(T.setupLights(),F.isArrayCamera){let Et=F.cameras;if(Mt.length>0)for(let It=0,Zt=Et.length;It<Zt;It++){let te=Et[It];yh(At,Mt,S,te)}Gt&&Yt.render(S);for(let It=0,Zt=Et.length;It<Zt;It++){let te=Et[It];xh(w,S,te,te.viewport)}}else Mt.length>0&&yh(At,Mt,S,F),Gt&&Yt.render(S),xh(w,S,F)}st!==null&&q===0&&(J.updateMultisampleRenderTarget(st),J.updateRenderTargetMipmap(st)),H&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,F),St.resetDefaultState(),R=-1,O=null,v.pop(),v.length>0?(T=v[v.length-1],J.setTextureUnits(T.state.textureUnits),at===!0&&Dt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,z!==null&&z.renderEnd()};function dc(S,F,Y,H){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(nt)){H&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);let At=Q.update(S),Mt=S.material;Mt.visible&&w.push(S,At,Mt,Y,Ut.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(nt))){let At=Q.update(S),Mt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ut.copy(At.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(lt)),Array.isArray(Mt)){let Et=At.groups;for(let It=0,Zt=Et.length;It<Zt;It++){let te=Et[It],Ct=Mt[te.materialIndex];Ct&&Ct.visible&&w.push(S,At,Ct,Y,Ut.z,te,F)}}else Mt.visible&&w.push(S,At,Mt,Y,Ut.z,null,F)}}let bt=S.children;for(let At=0,Mt=bt.length;At<Mt;At++)dc(bt[At],F,Y,H)}function xh(S,F,Y,H){let{opaque:W,transmissive:bt,transparent:At}=S;T.setupLightsView(Y),at===!0&&Dt.setGlobalState(P.clippingPlanes,Y),H&&y.viewport(G.copy(H)),W.length>0&&Kr(W,F,Y),bt.length>0&&Kr(bt,F,Y),At.length>0&&Kr(At,F,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function yh(S,F,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Ct=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new sn(1,1,{generateMipmaps:!0,type:Ct?On:an,minFilter:bn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let bt=T.state.transmissionRenderTarget[H.id],At=H.viewport||G;bt.setSize(At.z*P.transmissionResolutionScale,At.w*P.transmissionResolutionScale);let Mt=P.getRenderTarget(),Et=P.getActiveCubeFace(),It=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor(kt),Ht=P.getClearAlpha(),Ht<1&&P.setClearColor(16777215,.5),P.clear(),Gt&&Yt.render(Y);let Zt=P.toneMapping;P.toneMapping=Un;let te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),at===!0&&Dt.setGlobalState(P.clippingPlanes,H),Kr(S,Y,H),J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let he=0,De=F.length;he<De;he++){let Me=F[he],{object:xe,geometry:Xe,material:Tt,group:Ke}=Me;if(Tt.side===Mn&&xe.layers.test(H.layers)){let re=Tt.side;Tt.side=He,Tt.needsUpdate=!0,vh(xe,Y,H,Xe,Tt,Ke),Tt.side=re,Tt.needsUpdate=!0,Ct=!0}}Ct===!0&&(J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt))}P.setRenderTarget(Mt,Et,It),P.setClearColor(kt,Ht),te!==void 0&&(H.viewport=te),P.toneMapping=Zt}function Kr(S,F,Y){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,bt=S.length;W<bt;W++){let At=S[W],{object:Mt,geometry:Et,group:It}=At,Zt=At.material;Zt.allowOverride===!0&&H!==null&&(Zt=H),Mt.layers.test(Y.layers)&&vh(Mt,F,Y,Et,Zt,It)}}function vh(S,F,Y,H,W,bt){z!==null&&W.isNodeMaterial&&z.setObject(S,W),S.onBeforeRender(P,F,Y,H,W,bt),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,F,Y,H,S,bt),W.transparent===!0&&W.side===Mn&&W.forceSinglePass===!1?(W.side=He,W.needsUpdate=!0,P.renderBufferDirect(Y,F,H,W,S,bt),W.side=Ai,W.needsUpdate=!0,P.renderBufferDirect(Y,F,H,W,S,bt),W.side=Mn):P.renderBufferDirect(Y,F,H,W,S,bt),S.onAfterRender(P,F,Y,H,W,bt)}function Qr(S,F,Y){F.isScene!==!0&&(F=Nt);let H=X.get(S),W=T.state.lights,bt=T.state.shadowsArray,At=W.state.version,Mt=pt.getParameters(S,W.state,bt,F,Y,T.state.lightProbeGridArray),Et=pt.getProgramCacheKey(Mt),It=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let Zt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ht.get(S.envMap||H.environment,Zt),H.envMapRotation=H.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",zn),It=new Map,H.programs=It);let te=It.get(Et);if(te!==void 0){if(H.currentProgram===te&&H.lightsStateVersion===At)return bh(S,Mt),te}else Mt.uniforms=pt.getUniforms(S),z!==null&&S.isNodeMaterial&&z.build(S,Y,Mt),S.onBeforeCompile(Mt,P),te=pt.acquireProgram(Mt,Et),It.set(Et,te),H.uniforms=Mt.uniforms;let Ct=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=Dt.uniform),bh(S,Mt),H.needsLights=Qd(S),H.lightsStateVersion=At,H.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=te,H.uniformsList=null,te}function Mh(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Ds.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function bh(S,F){let Y=X.get(S);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function $d(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let Y=0,H=S.length;Y<H;Y++){let W=S[Y];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function jd(S,F,Y,H,W){F.isScene!==!0&&(F=Nt),J.resetTextureUnits();let bt=F.fog,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Mt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ne.workingColorSpace,Et=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=ht.get(H.envMap||At,Et),Zt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,te=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!Y.morphAttributes.position,he=!!Y.morphAttributes.normal,De=!!Y.morphAttributes.color,Me=Un;H.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Me=P.toneMapping);let xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Xe=xe!==void 0?xe.length:0,Tt=X.get(H),Ke=T.state.lights;if(at===!0&&(ct===!0||S!==O)){let ve=S===O&&H.id===R;Dt.setState(H,S,ve)}let re=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ke.state.version||Tt.outputColorSpace!==Mt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==It||H.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Dt.numPlanes||Tt.numIntersection!==Dt.numIntersection)||Tt.vertexAlphas!==Zt||Tt.vertexTangents!==te||Tt.morphTargets!==Ct||Tt.morphNormals!==he||Tt.morphColors!==De||Tt.toneMapping!==Me||Tt.morphTargetsCount!==Xe||!!Tt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Tt.__version=H.version);let gn=Tt.currentProgram;re===!0&&(gn=Qr(H,F,W),z&&H.isNodeMaterial&&z.onUpdateProgram(H,gn,Tt));let kn=!1,li=!1,Yi=!1,_e=gn.getUniforms(),Re=Tt.uniforms;if(y.useProgram(gn.program)&&(kn=!0,li=!0,Yi=!0),H.id!==R&&(R=H.id,li=!0),Tt.needsLights){let ve=$d(T.state.lightProbeGridArray,W);Tt.lightProbeGrid!==ve&&(Tt.lightProbeGrid=ve,li=!0)}if(kn||O!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_e.setValue(U,"projectionMatrix",S.projectionMatrix),_e.setValue(U,"viewMatrix",S.matrixWorldInverse);let ui=_e.map.cameraPosition;ui!==void 0&&ui.setValue(U,ft.setFromMatrixPosition(S.matrixWorld)),E.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_e.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,li=!0,Yi=!0)}if(Tt.needsLights&&(Ke.state.sunShadowMap.length>0&&_e.setValue(U,"sunShadowMap",Ke.state.sunShadowMap,J),Ke.state.directionalShadowMap.length>0&&_e.setValue(U,"directionalShadowMap",Ke.state.directionalShadowMap,J),Ke.state.spotShadowMap.length>0&&_e.setValue(U,"spotShadowMap",Ke.state.spotShadowMap,J),Ke.state.pointShadowMap.length>0&&_e.setValue(U,"pointShadowMap",Ke.state.pointShadowMap,J)),W.isSkinnedMesh){_e.setOptional(U,W,"bindMatrix"),_e.setOptional(U,W,"bindMatrixInverse");let ve=W.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),_e.setValue(U,"boneTexture",ve.boneTexture,J))}W.isBatchedMesh&&(_e.setOptional(U,W,"batchingTexture"),_e.setValue(U,"batchingTexture",W._matricesTexture,J),_e.setOptional(U,W,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",W._indirectTexture,J),_e.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",W._colorsTexture,J));let hi=Y.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&B.update(W,Y,gn),(li||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,_e.setValue(U,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Re.envMapIntensity.value=F.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=xx()),li){if(_e.setValue(U,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&Kd(Re,Yi),bt&&H.fog===!0&&Pt.refreshFogUniforms(Re,bt),Pt.refreshMaterialUniforms(Re,H,et,j,T.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.lightProbeGrid){let ve=Tt.lightProbeGrid;Re.probesSH.value=ve.texture,Re.probesMin.value.copy(ve.boundingBox.min),Re.probesMax.value.copy(ve.boundingBox.max),Re.probesResolution.value.copy(ve.resolution)}Ds.upload(U,Mh(Tt),Re,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(U,Mh(Tt),Re,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_e.setValue(U,"center",W.center),_e.setValue(U,"modelViewMatrix",W.modelViewMatrix),_e.setValue(U,"normalMatrix",W.normalMatrix),_e.setValue(U,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let ve=H.uniformsGroups;for(let ui=0,Zi=ve.length;ui<Zi;ui++){let wh=ve[ui];it.update(wh,gn),it.bind(wh,gn)}}return gn}function Kd(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(S,F,Y){let H=X.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=F,X.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let Y=X.get(S);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Y=0){st=S,Z=F,q=Y;let H=null,W=!1,bt=!1;if(S){let Mt=X.get(S);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Mt.__webglFramebuffer),G.copy(S.viewport),rt.copy(S.scissor),ot=S.scissorTest,y.viewport(G),y.scissor(rt),y.setScissorTest(ot),R=-1;return}else if(Mt.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(Mt.__hasExternalTextures)J.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Zt=S.depthTexture;if(Mt.__boundDepthTexture!==Zt){if(Zt!==null&&X.has(Zt)&&(S.width!==Zt.image.width||S.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(bt=!0);let It=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[F])?H=It[F][Y]:H=It[F],W=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?H=X.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[Y]:H=It,G.copy(S.viewport),rt.copy(S.scissor),ot=S.scissorTest}else G.copy(wt).multiplyScalar(et).floor(),rt.copy(Vt).multiplyScalar(et).floor(),ot=me;if(Y!==0&&(H=L),y.bindFramebuffer(U.FRAMEBUFFER,H)&&y.drawBuffers(S,H),y.viewport(G),y.scissor(rt),y.setScissorTest(ot),W){let Mt=X.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,Y)}else if(bt){let Mt=F;for(let Et=0;Et<S.textures.length;Et++){let It=X.get(S.textures[Et]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Et,It.__webglTexture,Y,Mt)}}else if(S!==null&&Y!==0){let Mt=X.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,Y)}R=-1};function Sh(S){let F=X.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=E.textureFormatReadable(S.format),F.__typeReadable=E.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Y,H,W,bt,At,Mt=0){if(!(S&&S.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Et=Et[At]),Et){y.bindFramebuffer(U.FRAMEBUFFER,Et);try{let It=S.textures[Mt],Zt=It.format,te=It.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt);let Ct=Sh(It);if(Ct.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-H&&Y>=0&&Y<=S.height-W&&U.readPixels(F,Y,H,W,_t.convert(Zt),_t.convert(te),bt)}finally{let It=st!==null?X.get(st).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,F,Y,H,W,bt,At,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Et=Et[At]),Et)if(F>=0&&F<=S.width-H&&Y>=0&&Y<=S.height-W){y.bindFramebuffer(U.FRAMEBUFFER,Et);let It=S.textures[Mt],Zt=It.format,te=It.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt);let Ct=Sh(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,he),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(F,Y,H,W,_t.convert(Zt),_t.convert(te),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let De=st!==null?X.get(st).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,De);let Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ku(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,he),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(he),U.deleteSync(Me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Y=0){let H=Math.pow(2,-Y),W=Math.floor(S.image.width*H),bt=Math.floor(S.image.height*H),At=F!==null?F.x:0,Mt=F!==null?F.y:0;J.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,At,Mt,W,bt),y.unbindTexture()},this.copyTextureToTexture=function(S,F,Y=null,H=null,W=0,bt=0){let At,Mt,Et,It,Zt,te,Ct,he,De,Me=S.isCompressedTexture?S.mipmaps[bt]:S.image;if(Y!==null)At=Y.max.x-Y.min.x,Mt=Y.max.y-Y.min.y,Et=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,Zt=Y.min.y,te=Y.isBox3?Y.min.z:0;else{let Re=Math.pow(2,-W);At=Math.floor(Me.width*Re),Mt=Math.floor(Me.height*Re),S.isDataArrayTexture?Et=Me.depth:S.isData3DTexture?Et=Math.floor(Me.depth*Re):Et=1,It=0,Zt=0,te=0}H!==null?(Ct=H.x,he=H.y,De=H.z):(Ct=0,he=0,De=0);let xe=_t.convert(F.format),Xe=_t.convert(F.type),Tt;F.isData3DTexture?(J.setTexture3D(F,0),Tt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),Tt=U.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),Tt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let Ke=y.getParameter(U.UNPACK_ROW_LENGTH),re=y.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=y.getParameter(U.UNPACK_SKIP_PIXELS),kn=y.getParameter(U.UNPACK_SKIP_ROWS),li=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,It),y.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),y.pixelStorei(U.UNPACK_SKIP_IMAGES,te);let Yi=S.isDataArrayTexture||S.isData3DTexture,_e=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Re=X.get(S),hi=X.get(F),ve=X.get(Re.__renderTarget),ui=X.get(hi.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,ve.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Zi=0;Zi<Et;Zi++)Yi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(S).__webglTexture,W,te+Zi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(F).__webglTexture,bt,De+Zi)),U.blitFramebuffer(It,Zt,At,Mt,Ct,he,At,Mt,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||X.has(S)){let Re=X.get(S),hi=X.get(F);y.bindFramebuffer(U.READ_FRAMEBUFFER,D),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let ve=0;ve<Et;ve++)Yi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,W,te+ve):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,W),_e?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hi.__webglTexture,bt,De+ve):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hi.__webglTexture,bt),W!==0?U.blitFramebuffer(It,Zt,At,Mt,Ct,he,At,Mt,U.COLOR_BUFFER_BIT,U.NEAREST):_e?U.copyTexSubImage3D(Tt,bt,Ct,he,De+ve,It,Zt,At,Mt):U.copyTexSubImage2D(Tt,bt,Ct,he,It,Zt,At,Mt);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Tt,bt,Ct,he,De,At,Mt,Et,xe,Xe,Me.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,bt,Ct,he,De,At,Mt,Et,xe,Me.data):U.texSubImage3D(Tt,bt,Ct,he,De,At,Mt,Et,xe,Xe,Me):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,Ct,he,At,Mt,xe,Xe,Me.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,Ct,he,Me.width,Me.height,xe,Me.data):U.texSubImage2D(U.TEXTURE_2D,bt,Ct,he,At,Mt,xe,Xe,Me);y.pixelStorei(U.UNPACK_ROW_LENGTH,Ke),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),y.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),y.pixelStorei(U.UNPACK_SKIP_ROWS,kn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,li),bt===0&&F.generateMipmaps&&U.generateMipmap(Tt),y.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){Z=0,q=0,st=null,y.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var ec=class extends Bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new xn;t.deleteAttribute("uv");let e=new vn({side:He}),n=new vn,s=new Pr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ar(t,n,6),a=new Ve;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new fe(t,Us(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new fe(t,Us(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new fe(t,Us(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new fe(t,Us(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new fe(t,Us(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new fe(t,Us(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Us(i){return new wr({color:0,emissive:16777215,emissiveIntensity:i})}var jv=Object.freeze({range:4.2,halfAngle:.72}),Yr={yi:{name:"이순신",title:"충무공",era:"조선",role:"원거리 · 지휘",color:"#2f5f8f",accent:"#c8412f",hp:420,dmg:22,cd:.9,range:3.4,speed:2.2,dmgType:"phys",attack:"arrow",block:0,passive:{name:"필사즉생",desc:"주변 2.5칸 유산의 공격 속도 +12%."},skill:{short:"학익진",name:"학익진",cd:14,base:60,perLv:10,desc:"학의 날개처럼 펼친 부채꼴 화살 세례. 전방 4칸 부채꼴 적에게 물리 피해."},ult:{short:"거북선",name:"거북선 출격",cd:60,base:220,perLv:30,desc:"거북선이 길을 거슬러 돌진하며 닿는 모든 적에게 화기 피해를 주고 밀어낸다."},quote:"신에게는 아직 열두 척의 배가 남아 있사옵니다.",unlock:null},sejong:{name:"세종대왕",title:"성군",era:"조선",role:"지원 · 통제",color:"#b8322a",accent:"#d9a300",hp:360,dmg:16,cd:1,range:3,speed:2,dmgType:"holy",attack:"orb",block:0,passive:{name:"집현전",desc:"모든 아군의 처치 군자금 +10%."},skill:{short:`훈민
정음`,name:"훈민정음",cd:16,base:50,perLv:8,desc:"하늘에서 한글 자모가 쏟아져 반경 1.8칸 적에게 신성 피해와 기절 1.2초."},ult:{short:"자격루",name:"자격루",cd:70,desc:"시간을 다스린다. 6초간 모든 적 50% 둔화, 모든 유산 재장전 후 공격 속도 +30%."},quote:"나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.",unlock:null},eulji:{name:"을지문덕",title:"살수의 명장",era:"고구려",role:"범위 · 전략",color:"#3d6b4f",accent:"#d9a300",hp:380,dmg:18,cd:1.2,range:3.2,speed:2,dmgType:"holy",attack:"orb",splash:.7,block:0,passive:{name:"여수장우중문시",desc:"주변 2.5칸 적의 갑옷 -20%. 적장의 기세를 꺾는 시(詩)."},skill:{short:"청야",name:"청야전술",cd:15,base:30,perLv:5,desc:"들판을 불태워 5초간 반경 1.5칸에 초당 화기 피해 + 20% 둔화."},ult:{short:"살수",name:"살수대첩",cd:65,base:300,perLv:40,desc:"둑을 터뜨려 반경 3칸 적에게 큰 피해를 주고 3칸 뒤로 쓸어낸다."},quote:"전승공기고 지족원운지 — 싸움에 이겨 공이 높으니 만족하고 그만두라.",unlock:{coins:1500,stage:"s1"}},gang:{name:"강감찬",title:"귀주의 별",era:"고려",role:"근접 · 적장 사냥",color:"#5a4a8a",accent:"#f0c75e",hp:700,dmg:40,cd:1,range:1.1,speed:2.3,dmgType:"phys",attack:"melee",block:2,passive:{name:"낙성",desc:"4번째 공격마다 별이 떨어져 주변 1.2칸에 2배 신성 피해."},skill:{short:"돌격",name:"귀주 돌격",cd:12,base:80,perLv:12,desc:"지정 지점까지 돌진하며 경로의 적에게 피해와 기절 0.5초."},ult:{short:"낙성우",name:"낙성우",cd:60,base:180,perLv:25,desc:"가장 강한 적 8명에게 유성이 떨어진다."},quote:"별이 떨어진 곳에서 태어났으니, 이 땅에 떨어지는 적 또한 별과 같으리라.",unlock:{coins:2e3,stage:"s2"}},gwon:{name:"권율",title:"행주의 방패",era:"조선",role:"근접 · 방어",color:"#7a5230",accent:"#e6d3a3",hp:900,dmg:30,cd:1.1,range:1.1,speed:2,dmgType:"phys",attack:"melee",block:3,regen:.015,passive:{name:"행주치마",desc:"초당 최대 체력 1.5% 회복. 적 3명까지 저지."},skill:{short:"투석",name:"투석",cd:12,base:45,perLv:7,desc:"행주치마에 담아 온 돌 6개가 반경 2칸에 떨어져 피해와 기절 0.6초."},ult:{short:"산성",name:"행주산성",cd:55,desc:"길 위에 목책을 세워 6초간 모든 졸병·정예·중장을 막고, 권율이 받는 피해 50% 감소."},quote:"돌 하나, 치마폭 하나까지 모두가 성벽이다.",unlock:{coins:2500,stage:"s3"}},gwak:{name:"곽재우",title:"홍의장군",era:"조선",role:"기동 · 게릴라",color:"#c0392b",accent:"#2c2c2c",hp:440,dmg:16,cd:.5,range:3,speed:2.8,dmgType:"phys",attack:"arrow",block:0,detect:3,passive:{name:"천강홍의",desc:"주변 3칸의 은신한 적을 발각한다. 이동 속도가 빠르다."},skill:{short:"매복",name:"의병 매복",cd:18,desc:"지정 지점에 의병 3명을 매복시켜 12초간 적을 저지한다."},ult:{short:"질풍",name:"홍의 질풍",cd:50,desc:"8초간 무적, 공격 속도 2배, 화살이 적 3명에게 튕긴다."},quote:"하늘이 내린 붉은 옷의 장군이 여기 있다!",unlock:{coins:3e3,stage:"s4"}},ahn:{name:"안중근",title:"대한의군 참모중장",era:"대한제국",role:"원거리 · 저격",color:"#2e2e36",accent:"#c8a24a",hp:380,dmg:32,cd:1.6,range:4.2,speed:2.2,dmgType:"fire",attack:"gun",block:0,passive:{name:"위국헌신",desc:"권총은 화기라 갑옷의 절반을 무시한다. 적장에게 주는 피해 +25%. 사거리가 가장 길다."},skill:{short:"연발",name:"일곱 발의 총성",cd:14,base:34,perLv:6,desc:"지정 지점 반경 2.2칸의 적에게 권총 7발을 연달아 쏜다. 발당 화기 피해."},ult:{short:"저격",name:"하얼빈 의거",cd:65,base:800,perLv:100,desc:"전장에서 가장 강한 적(적장 우선)을 저격해 큰 화기 피해, 기절 1.5초, 6초간 받는 피해 +30%."},quote:"위국헌신 군인본분 — 나라를 위해 몸 바치는 것은 군인의 본분이다.",unlock:{coins:3500,stage:"s12"}},dangun:{name:"단군왕검",title:"고조선의 시조",era:"고조선",role:"범위 · 번개",color:"#e8e2d0",accent:"#3a8a5a",hp:480,dmg:17,cd:1.15,range:3.2,speed:2,dmgType:"holy",attack:"lightning",block:0,passive:{name:"홍익인간",desc:"널리 사람을 이롭게: 모든 아군 영웅이 초당 체력 0.7% 회복. 기본 공격 번개가 옆의 적 1명에게 절반 피해로 튄다."},skill:{short:"마늘",name:"마늘 던지기",cd:12,base:44,perLv:7,desc:"곰이 사람이 된 백일의 마늘! 마늘 3통을 던져 반경 0.9칸마다 신성 피해 + 3초간 매워서 35% 둔화."},ult:{short:"천둥",name:"천부인 번개",cd:60,base:135,perLv:18,desc:"하늘의 세 보물을 들어 번개 12줄기를 가장 강한 적들에게 내리친다. 줄기마다 신성 피해 + 기절 0.8초."},quote:"널리 인간을 이롭게 하라.",unlock:{coins:4e3,stage:"s5"}}};var nc={ashigaru:{name:"아시가루",title:"창병",tier:1,hp:70,speed:1,armor:0,resist:0,bounty:5,lives:1,atk:8,size:.28,desc:"가장 흔한 왜군 보병. 수로 밀어붙인다."},teppo:{name:"조총병",title:"철포대",tier:1,hp:56,speed:.95,armor:0,resist:0,bounty:6,lives:1,atk:6,size:.28,shoot:{range:2.6,dmg:12,cd:2.2},desc:"걸으면서 가까운 영웅과 의병을 조총으로 저격한다."},scout:{name:"척후병",title:"정찰대",tier:1,hp:42,speed:1.7,armor:0,resist:0,bounty:4,lives:1,atk:5,size:.25,desc:"빠르게 달려드는 경보병. 방어선의 빈틈을 노린다."},samurai:{name:"사무라이",title:"무사",tier:2,hp:330,speed:.9,armor:.3,resist:.1,bounty:15,lives:2,atk:25,size:.32,enrage:{at:.5,speed:1.6},desc:"갑옷을 두른 무사. 체력이 절반 아래로 떨어지면 칼을 뽑고 돌진한다."},ninja:{name:"시노비",title:"닌자",tier:2,hp:170,speed:1.35,armor:0,resist:.2,bounty:14,lives:2,atk:0,size:.27,stealth:!0,unblockable:!0,desc:"은신 상태로 이동한다. 첨성대·곽재우·봉수 경보로만 발각할 수 있다. 범위 공격은 맞는다."},onmyoji:{name:"음양사",title:"주술사",tier:2,hp:210,speed:.85,armor:0,resist:.5,bounty:17,lives:2,atk:10,size:.3,heal:{range:2,pct:.06,cd:3},desc:"3초마다 주변 아군 체력을 6% 회복시킨다(여럿이어도 겹치지 않음). 신성 저항이 높다."},cavalry:{name:"기마무사",title:"기병",tier:2,hp:230,speed:1.5,armor:.15,resist:0,bounty:17,lives:2,atk:18,size:.36,unblockable:!0,desc:"말을 탄 무사. 빠르고 저지당하지 않는다."},drum:{name:"진군 고수",title:"군악대",tier:2,hp:250,speed:.9,armor:.1,resist:.1,bounty:18,lives:2,atk:8,size:.32,haste:{range:2,mult:.25},desc:"북을 울려 주변 아군의 이동 속도를 25% 올린다. 우선 제거 대상."},armored:{name:"철갑무사",title:"갑주대",tier:3,hp:950,speed:.6,armor:.6,resist:.1,bounty:35,lives:3,atk:40,size:.38,desc:"두꺼운 철갑. 물리 피해를 60% 막는다. 신성·화기로 상대하라."},ram:{name:"공성 충차",title:"공성병기",tier:3,hp:1500,speed:.5,armor:.35,resist:.3,bounty:45,lives:5,atk:60,size:.45,spawnOnDeath:{type:"ashigaru",n:4},desc:"성문을 부수는 충차. 파괴되면 안에서 아시가루 4명이 뛰쳐나온다."},konishi:{name:"고니시 유키나가",title:"제1군 선봉장",tier:4,hp:5500,speed:.55,armor:.3,resist:.3,bounty:250,lives:6,atk:90,size:.55,boss:{summon:{type:"ashigaru",n:4,cd:9}},desc:"임진왜란 선봉장. 9초마다 아시가루 4명을 불러낸다."},kato:{name:"가토 기요마사",title:"제2군 대장",tier:4,hp:9e3,speed:.5,armor:.45,resist:.2,bounty:320,lives:8,atk:130,size:.58,boss:{charge:{cd:11,dur:1.6,mult:3},disable:{range:3,dur:4}},desc:"11초마다 창을 던져 가까운 유산 하나를 4초간 봉쇄하고 돌진한다."},wakizaka:{name:"와키자카 야스하루",title:"수군 대장",tier:4,hp:9500,speed:.6,armor:.3,resist:.35,bounty:320,lives:8,atk:110,size:.56,boss:{shield:{pct:.12,cd:15}},desc:"안택선 방패. 15초마다 최대 체력 12%의 보호막을 새로 두른다."},ukita:{name:"우키타 히데이에",title:"총대장",tier:4,hp:12e3,speed:.5,armor:.4,resist:.4,bounty:400,lives:10,atk:140,size:.6,boss:{rally:{cd:12,heal:.08,haste:.3,dur:3}},desc:"12초마다 전군을 독려해 모든 왜군의 체력 8% 회복, 3초간 이동 속도 +30%."},ishida:{name:"이시다 미쓰나리",title:"삼봉행",tier:4,hp:12500,speed:.45,armor:.4,resist:.4,bounty:600,lives:14,atk:200,size:.66,boss:{phases:[.7,.35],phaseSummon:[{type:"samurai",n:3},{type:"ninja",n:3}],disableN:3,disableDur:5,phaseText:"봉행의 계략"},desc:"침략을 꾸린 책사. 체력 70%·35%에서 정예를 부르고 유산 3개를 봉쇄한다."},so:{name:"소 요시토시",title:"대마도주",tier:4,hp:5200,speed:.6,armor:.25,resist:.3,bounty:240,lives:6,atk:80,size:.55,boss:{summon:{type:"scout",n:5,cd:8,text:"길잡이 척후대!"}},desc:"길잡이 노릇을 한 대마도주. 8초마다 척후병 5명을 풀어 방어선을 흔든다."},kuroda:{name:"구로다 나가마사",title:"제3군 대장",tier:4,hp:7200,speed:.5,armor:.4,resist:.25,bounty:280,lives:7,atk:110,size:.57,boss:{summon:{type:"teppo",n:5,cd:10,text:"철포대 사격 준비!"}},desc:"조총 부대를 앞세운 장수. 10초마다 조총병 5명을 불러낸다."},todo:{name:"도도 다카토라",title:"수군 장수",tier:4,hp:6400,speed:.55,armor:.3,resist:.3,bounty:300,lives:7,atk:110,size:.57,boss:{shield:{pct:.08,cd:13,text:"판옥 방패!"},summon:{type:"ashigaru",n:4,cd:12,text:"수군 상륙!"}},desc:"옥포·칠천량의 수군 장수. 13초마다 보호막(8%), 12초마다 아시가루 4명 상륙."},kuki:{name:"구키 요시타카",title:"수군 대장",tier:4,hp:7600,speed:.5,armor:.4,resist:.3,bounty:320,lives:8,atk:120,size:.58,boss:{shield:{pct:.12,cd:15,text:"철갑선 방벽!"}},desc:"철갑선을 몰던 수군 대장. 15초마다 최대 체력 12%의 두꺼운 보호막."},kurushima:{name:"구루시마 미치후사",title:"선봉 수군장",tier:4,hp:9e3,speed:.6,armor:.3,resist:.3,bounty:330,lives:9,atk:130,size:.58,boss:{rally:{cd:10,heal:.05,haste:.35,dur:3,text:"노를 저어라!"}},desc:"명량의 선봉. 10초마다 모든 왜군 체력 5% 회복, 3초간 이동 속도 +35%."},shimazu:{name:"시마즈 요시히로",title:"귀신 시마즈",tier:4,hp:14e3,speed:.5,armor:.5,resist:.35,bounty:450,lives:12,atk:170,size:.62,enrage:{at:.4,speed:1.5},boss:{charge:{cd:10,dur:1.4,mult:3,text:"귀신 돌격!"},disable:{range:3.2,dur:4}},desc:"가장 사나운 적장. 10초마다 유산 하나를 봉쇄하며 돌진하고, 체력 40% 아래에서 더 빨라진다."},hideyoshi:{name:"도요토미 히데요시",title:"태합 · 침략의 원흉",tier:4,hp:38e3,speed:.3,armor:.88,resist:.55,bounty:3e3,lives:999,atk:400,size:.8,scale:2.15,fixedHp:!0,line:"갑옷 88% — 화기·신성·갑옷 깎기로 공략하라!",boss:{phases:[.75,.5,.25],phaseSummon:[{type:"samurai",n:4},{type:"armored",n:3},{type:"ninja",n:6}],disableN:4,disableDur:6,phaseText:"천하인의 호령",shield:{pct:.05,cd:15,text:"황금 표주박!"}},desc:"단 한 명. 갑옷 88% — 물리 피해가 거의 통하지 않는다. 화기(갑옷 절반 무시)·신성·갑옷 깎기로 공략하라. 도성에 닿으면 즉시 패배."}};function Td(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ee,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=wd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=wd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function wd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Zr=new I;function An(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Zr.copy(t),Zr[n]=0,Zr.normalize();let l=.5*o/(o+a),h=1-Zr.angleTo(i)/c;return Math.sign(Zr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var ic=class i extends xn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new I,g=.5/o;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[M+0]=An(x,l,"z","y",r,n),f[M+1]=1-An(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[M+0]=1-An(x,l,"z","y",r,n),f[M+1]=1-An(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[M+0]=1-An(x,l,"x","z",r,t),f[M+1]=An(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-An(x,l,"x","z",r,t),f[M+1]=1-An(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-An(x,l,"x","y",r,t),f[M+1]=1-An(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[M+0]=An(x,l,"x","y",r,t),f[M+1]=1-An(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Xl={stone:"assets/3d/painted/granite-v2.webp",wood:"assets/3d/painted/timber-v1.webp",road:"assets/3d/painted/road-v2.webp",ground:"assets/3d/painted/ground-v3.webp","snow-ground":"assets/3d/painted/snow-ground-v2.webp"},$e=512;function Ed(i,t,e){if(!Xl[e])return{data:i,width:t,height:t};let n=new Uint8Array($e*$e*4);for(let s=0;s<$e;s++)for(let r=0;r<$e;r++){let o=(Math.floor(s*t/$e)*t+Math.floor(r*t/$e))*4;n.set(i.subarray(o,o+4),(s*$e+r)*4)}return{data:n,width:$e,height:$e}}var Gl=new Map,Hl=new Set,yx=Float32Array.from({length:256},(i,t)=>t<=10?t/255/12.92:((t/255+.055)/1.055)**2.4),vx=i=>Math.round(Math.max(0,Math.min(1,i<=.0031308?i*12.92:1.055*i**(1/2.4)-.055))*255);function Mx(i,t){let e=[t.r,t.g,t.b].map(n=>Uint8Array.from(yx,s=>vx(s*n)));for(let n=0;n<i.length;n+=4)for(let s=0;s<3;s++)i[n+s]=e[s][i[n+s]];return i}var Cd=0,Rd=0,Wl=0;function Id(i){return Hl.add(i),()=>Hl.delete(i)}function Ad(){typeof document<"u"&&document.documentElement&&(document.documentElement.dataset.paintedReady=Cd,document.documentElement.dataset.paintedPending=Wl,document.documentElement.dataset.paintedFailed=Rd);for(let i of Hl)i()}function bx(i){return Gl.has(i)||Gl.set(i,new Promise((t,e)=>{let n=new URL(Xl[i],new URL("../../",import.meta.url)).href;new Er().load(n,s=>{try{let r=document.createElement("canvas");r.width=r.height=$e;let o=r.getContext("2d");o.drawImage(s,0,0,$e,$e),t({width:$e,height:$e,data:o.getImageData(0,0,$e,$e).data})}catch(r){e(r)}},void 0,e)})),Gl.get(i)}function Pd(i,t,e=null){return!Xl[t]||typeof document>"u"||typeof document.createElementNS!="function"||(i.userData.paintedSurface=t,Wl++,Ad(),bx(t).then(n=>{if(i.image.width!==n.width||i.image.height!==n.height)throw new Error("Albedo placeholder dimensions must stay fixed");let s=new Uint8Array(n.data);e&&Mx(s,e),i.image={width:n.width,height:n.height,data:s},i.colorSpace=Ae,i.needsUpdate=!0,Cd++,i.userData.paintedLoaded=!0}).catch(n=>{Rd++,console.warn(`Painted surface fallback: ${t}`,n.message)}).finally(()=>{Wl--,Ad()})),i}var ql=new Map,Yl=i=>i-Math.floor(i),Fs=(i,t)=>Yl(Math.sin(i*127.1+t*311.7)*43758.5453);function Sx(i,t){let e=Math.floor(i),n=Math.floor(t),s=Yl(i),r=Yl(t),o=s*s*(3-2*s),a=r*r*(3-2*r);return ge.lerp(ge.lerp(Fs(e,n),Fs(e+1,n),o),ge.lerp(Fs(e,n+1),Fs(e+1,n+1),o),a)}var Jn=Sx;function wx(i){if(ql.has(i))return ql.get(i);let t=128,e=new Uint8Array(t*t*4),n=new Uint8Array(e.length),s=new Uint8Array(e.length);for(let a=0;a<t;a++)for(let c=0;c<t;c++){let l=c/t,h=a/t,u=Fs(c,a),d=Jn(l*7,h*7),f=.91+u*.09,m=.5+(u-.5)*.15,x=255;if(i==="wood"){let _=Math.sin(l*150+Jn(l*5,h*8)*11+Math.sin(h*13)*1.7);f=.72+_*.12+d*.16+u*.08,m=.5+_*.14+u*.04}else if(i==="stone"){let _=Math.sin(h*90+Jn(l*5,h*4)*7);f=.72+d*.23+u*.14+_*.035,m=.46+Jn(l*4,h*4)*.07+Jn(l*16,h*16)*.045+u*.025}else if(i==="cloth"){let _=c%4<2!=a%4<2?.07:-.04;f=.86+d*.12+_,m=.5+_*2}else if(i==="metal"){let _=Math.pow(Fs(c,0),15)*Jn(l*2,h*30);f=.85+d*.12+u*.025-_*.16,m=.5-_*.14}else if(i==="tile"){let _=Math.pow(Math.abs(Math.sin(l*Math.PI*8)),6),w=Jn(l*17,h*21);f=.73+d*.17+_*.08+w*.08,m=.38+_*.19+w*.06}else i==="plaster"?(f=.88+d*.09+u*.03,m=.46+Jn(l*23,h*23)*.06):i==="roof-snow"?(x=Math.abs(Math.sin(l*Math.PI*19+Math.sin(h*11)*.15))<.06+d*.1&&Jn(l*12,h*18)>.38||Jn(l*12,h*10)<.19?0:255,f=.94+u*.06,m=.47+d*.06+u*.025):(f=.92+d*.05+u*.03,m=.48+d*.03+u*.025);let g=(a*t+c)*4,p=Math.round(ge.clamp(f,0,1)*255);e.set([p,p,p,x],g);let M=Math.round(ge.clamp(m,0,1)*255);n.set([M,M,M,255],g);let b=Math.round((i==="metal"?.64+d*.3:i==="tile"?.74+d*.22:.86+u*.13)*255);s.set([b,b,b,255],g)}let r=(a,c)=>{let l=c?Ed(a,t,i):{data:a,width:t,height:t},h=new si(l.data,l.width,l.height,Ze);return h.wrapS=h.wrapT=xi,h.magFilter=Ie,h.minFilter=bn,h.generateMipmaps=!0,h.anisotropy=4,c&&(h.colorSpace=Ae),h.needsUpdate=!0,h},o={map:r(e,!0),bumpMap:r(n,!1),roughnessMap:r(s,!1)};return Pd(o.map,i),ql.set(i,o),o}function Ue(i,t,e={}){return new vn({color:i,...wx(t),roughness:.86,bumpScale:t==="stone"||t==="wood"?.018:.006,...e})}var Pe=(i,t,e=.8,n=0)=>({jaw:i,length:t,cheek:.96+(i-1)*.4,temple:.99,depth:1,eyes:.96,lid:e,nose:1.04,age:n}),Bn={ashigaru:{body:[.92,.98,.93],color:"#847352",accent:"#b09a67",helmet:"jingasa",weapon:"yari",gait:7.7,stride:.14,face:Pe(.94,1.03),detail:"넓은 진가사 · 긴 창 · 두 손 전진"},teppo:{body:[.94,1.02,.95],color:"#4e6069",accent:"#a9976e",helmet:"flat-hat",weapon:"rifle",gait:7.3,stride:.13,face:Pe(1.02,1.05),detail:"낮은 모자 · 화승총 · 두 손 조준"},scout:{body:[.81,.96,.85],color:"#8e6650",accent:"#c0a576",helmet:"headband",weapon:"shortblade",gait:10.1,stride:.18,face:Pe(.87,.99,.94),detail:"머리띠 · 짧은 칼 · 가벼운 달리기"},samurai:{body:[1.06,1.04,1.02],color:"#793f3d",accent:"#b49b72",helmet:"crescent",weapon:"katana",gait:7.2,stride:.13,face:Pe(1.08,1.05,.76),detail:"초승달 투구 · 층진 갑주 · 긴 칼"},ninja:{body:[.85,.99,.86],color:"#303449",accent:"#756d83",helmet:"hood",weapon:"kunai",gait:9.6,stride:.17,face:Pe(.89,1.07,.73),detail:"얼굴 두건 · 쌍 단검 · 낮은 자세"},onmyoji:{body:[.92,1.07,.96],color:"#c4c5b1",accent:"#89575b",helmet:"eboshi",weapon:"ritual",gait:6.5,stride:.12,face:Pe(.91,1.14,.7,.3),detail:"높은 관 · 부적과 지팡이 · 의식 자세"},cavalry:{body:[1.02,1.02,1],color:"#514d68",accent:"#b4a27e",helmet:"horns",weapon:"naginata",gait:8.6,stride:.15,face:Pe(1.04,1.09,.8),detail:"뿔 투구 · 장도 · 안장과 고삐 · 대각 속보"},drum:{body:[1.06,1,1.1],color:"#914d45",accent:"#b79d67",helmet:"headband",weapon:"drum",gait:7.2,stride:.13,face:Pe(1.12,.97,.88),detail:"붉은 띠 · 끈으로 맨 북 · 교대 타격"},armored:{body:[1.22,1.04,1.16],color:"#48585a",accent:"#a59b83",helmet:"visor",weapon:"axe",gait:5.8,stride:.11,face:Pe(1.18,1.04,.66,.3),detail:"철제 안면갑 · 넓은 방패 · 무거운 도끼"},ram:{body:[1,1,1],color:"#69513a",weapon:"ram",detail:"덧댄 지붕 · 철띠 통나무 · 전후 공성 타격"},konishi:{body:[1.04,1.06,1.02],scale:1.17,color:"#783f3e",accent:"#c4aa74",helmet:"split-crescent",weapon:"katana",offhand:"fan",face:Pe(1.01,1.08,.77,.35),gait:6.7,stride:.12,detail:"갈라진 반달 투구 · 붉은 갑주 · 지휘 부채"},kato:{body:[1.01,1.15,1],scale:1.17,color:"#45566d",accent:"#b0a58b",helmet:"tall-cone",weapon:"yari",face:Pe(.93,1.18,.69,.5),gait:6.1,stride:.13,detail:"긴 원뿔 투구 · 긴 창 · 앞으로 찌르기"},wakizaka:{body:[1.13,1.03,1.08],scale:1.17,color:"#38616a",accent:"#bda779",helmet:"wide-crescent",weapon:"cutlass",offhand:"shield",face:Pe(1.13,1.02,.8,.3),gait:6.7,stride:.12,detail:"넓은 반달 투구 · 청록 갑주 · 수군 방패"},ukita:{body:[1.1,1.1,1.05],scale:1.19,color:"#724b69",accent:"#c1a97c",helmet:"antlers",weapon:"katana",offhand:"fan",face:Pe(1.08,1.12,.82,.25),gait:6.3,stride:.12,detail:"가지뿔 투구 · 자주 갑주 · 넓은 부채"},ishida:{body:[.96,1.13,.98],scale:1.19,color:"#59644b",accent:"#bfab7d",helmet:"banner",weapon:"shortblade",offhand:"fan",face:Pe(.9,1.16,.7,.4),gait:6.1,stride:.11,detail:"세로 관식 · 경갑 · 세 갈래 지휘 깃발"},so:{body:[.95,1.05,.96],scale:1.16,color:"#5b4d6c",accent:"#b39e7e",helmet:"swept",weapon:"cutlass",face:Pe(.96,1.1,.84,.15),gait:7.5,stride:.15,detail:"뒤로 흐르는 관식 · 가벼운 갑주 · 굽은 칼"},kuroda:{body:[1.12,1.05,1.09],scale:1.18,color:"#323d40",accent:"#ad9c79",helmet:"bowl",weapon:"yari",face:Pe(1.16,1.06,.72,.5),gait:6.4,stride:.12,detail:"넓은 그릇 투구 · 검은 갑주 · 철포대 지휘 창"},todo:{body:[1.03,1.14,1.02],scale:1.18,color:"#535c75",accent:"#b3a486",helmet:"stacked",weapon:"naginata",face:Pe(.98,1.15,.78,.6),gait:6.4,stride:.12,detail:"겹친 원형 관식 · 긴 장도 · 수군 갑주"},kuki:{body:[1.25,1.04,1.17],scale:1.2,color:"#3d526b",accent:"#afa88d",helmet:"iron-wings",weapon:"mace",offhand:"shield",face:Pe(1.21,1.01,.7,.5),gait:5.9,stride:.11,detail:"철제 날개 투구 · 두꺼운 방벽 · 철퇴"},kurushima:{body:[1.03,1.08,1.01],scale:1.18,color:"#87503c",accent:"#c1a16c",helmet:"wave",weapon:"cutlass",offhand:"blade",face:Pe(1.05,1.11,.75,.3),gait:7.1,stride:.14,detail:"파도 관식 · 구리빛 갑주 · 양손 칼"},shimazu:{body:[1.2,1.1,1.14],scale:1.23,color:"#5a476e",accent:"#c1ad84",helmet:"great-horns",weapon:"nodachi",face:Pe(1.19,1.12,.64,.9),gait:6.6,stride:.15,detail:"긴 쌍뿔 · 넓은 어깨 · 대도 참격"},hideyoshi:{body:[1.16,1.12,1.12],scale:1.5,color:"#a58245",accent:"#e0c98e",helmet:"sunburst",weapon:"katana",offhand:"fan",face:Pe(1.07,1.04,.62,1),gait:5.6,stride:.1,detail:"큰 금빛 방사 관식 · 장식 갑주 · 표주박 군기"}};var Tx={jaw:1,cheek:1,temple:1,length:1,depth:1,eyes:1,lid:1,nose:1,age:0},Os={yi:{body:[1.02,1.04,1],face:{jaw:1.05,cheek:.96,temple:.98,length:1.05,depth:1.02,eyes:.96,lid:.83,nose:1.08,age:.3},gait:7.4,stride:.15},sejong:{body:[1.09,1.02,1.08],face:{jaw:1.08,cheek:1.13,temple:1.05,length:.98,depth:1.06,eyes:1.02,lid:.9,nose:.96,age:.25},gait:6.2,stride:.12},eulji:{body:[.99,1.09,.96],face:{jaw:.9,cheek:.97,temple:1.01,length:1.12,depth:.98,eyes:.94,lid:.77,nose:1.14,age:.35},gait:7,stride:.14},gang:{body:[1.08,.98,1.04],face:{jaw:1.1,cheek:1.02,temple:1.06,length:.99,depth:1.04,eyes:1.02,lid:.72,nose:1.12,age:1},gait:7.1,stride:.14},gwon:{body:[1.16,1.03,1.1],face:{jaw:1.17,cheek:1.09,temple:1.02,length:1.04,depth:1.09,eyes:1.04,lid:.78,nose:1.15,age:.8},gait:6.6,stride:.13},gwak:{body:[.94,1.03,.93],face:{jaw:.93,cheek:.95,temple:.96,length:1.03,depth:.96,eyes:.94,lid:.86,nose:.97,age:.2},gait:9.1,stride:.17},ahn:{body:[.92,1.09,.94],face:{jaw:.94,cheek:.94,temple:.97,length:1.1,depth:.99,eyes:.96,lid:.82,nose:1.04,age:.15},gait:7.8,stride:.15},dangun:{body:[1.01,1.12,1],face:{jaw:.93,cheek:1.03,temple:1.01,length:1.13,depth:1.02,eyes:1,lid:.7,nose:1.1,age:1},gait:5.9,stride:.12}},Bs=i=>({...Tx,...Os[i]?.face??Bn[i]?.face});var oi=new Map;function Fe(i,t,{segments:e=20,steps:n=2,folds:s=0,skin:r=!1,arc:o=Math.PI*2,smooth:a=!1}={}){let c=JSON.stringify([i,t,e,n,s,r,o,a]);if(oi.has(c))return oi.get(c);let l=[];for(let p=0;p<t.length-1;p++)for(let M=0;M<n;M++){let b=M/n,_=t[p],w=t[p+1];l.push(a?Jl(t,p,b):_.map((T,C)=>ge.lerp(T,w[C]??0,b)))}l.push(t.at(-1));let h=[],u=[],d=[],f=[],m=e+1;for(let p=0;p<l.length;p++){let[M,b,_,w=0]=l[p];for(let T=0;T<=e;T++){let C=-o/2+T/e*o,v=1+s*Math.cos(C*10)*(1-p/(l.length+3)),A=Math.sin(C)*b*v,P=Math.cos(C)*_*v+w;h.push(A,M,P),u.push(T/e,p/(l.length-1));let N=r?Math.exp(-((Math.abs(A)-.105)**2/.002+(M+.055)**2/.003))*Math.max(0,Math.cos(C)):0,z=r?.96+Math.max(0,M)*.16:1;if(d.push(z,z-N*.065,z-N*.095),p<l.length-1&&T<e){let L=p*m+T;f.push(L,L+1,L+m,L+1,L+m+1,L+m)}}}if(o===Math.PI*2)for(let[p,M]of[[0,!0],[l.length-1,!1]]){let b=h.length/3;h.push(0,l[p][0],l[p][3]??0),u.push(.5,.5),d.push(1,1,1);for(let _=0;_<e;_++){let w=p*m+_;f.push(...M?[b,w+1,w]:[b,w,w+1])}}let x=new Ee;x.setAttribute("position",new se(h,3)),x.setAttribute("uv",new se(u,2)),x.setAttribute("color",new se(d,3)),x.setIndex(f),x.computeVertexNormals();let g=x.attributes.normal;for(let p=0;p<l.length&&o===Math.PI*2;p++){let M=p*m,b=M+e,_=new I().fromBufferAttribute(g,M).add(new I().fromBufferAttribute(g,b)).normalize();g.setXYZ(M,_.x,_.y,_.z),g.setXYZ(b,_.x,_.y,_.z)}return x.userData.sculpture=i,oi.set(c,x),x}function Jl(i,t,e){return i[t].map((n,s)=>{let r=i[t+1][s]??0;if(!s)return ge.lerp(n,r,e);let o=i[Math.max(0,t-1)][s]??0,a=i[Math.min(i.length-1,t+2)][s]??0,c=.5*(2*n+(-o+r)*e+(2*o-5*n+4*r-a)*e*e+(-o+3*n-3*r+a)*e*e*e);return ge.clamp(c,Math.min(n,r),Math.max(n,r))})}function Zl(i){let t=Bs(i);return[[-.224,.045,.065,.026],[-.194,.092,.099,.018],[-.143,.138,.123,.008],[-.065,.166,.145,-.004],[.025,.177,.158,-.014],[.107,.172,.151,-.022],[.174,.133,.122,-.024],[.21,.05,.06,-.022]].map(([e,n,s,r],o)=>[e*t.length,n*(o<3?t.jaw:o<5?t.cheek:t.temple),s*t.depth,r*t.depth])}function Ax(i,t,e){let n=Bs(i),s=t/n.nose,r=e/n.length,o=(a,c,l,h)=>Math.exp(-(((s-a)/l)**2+((r-c)/h)**2));return n.depth*(.009*(o(.098,-.035,.045,.054)+o(-.098,-.035,.045,.054))-.006*(o(.07,.025,.037,.027)+o(-.07,.025,.037,.027))+.013*o(0,-.005,.023,.06)+.029*o(0,-.047,.026,.022)+.009*o(0,-.145,.06,.034)+.006*o(0,-.087,.064,.026))}function zs(i,t,e){let n=Zl(i),s=0;for(;s<n.length-2&&e>n[s+1][0];)s++;let r=Jl(n,s,ge.clamp((e-n[s][0])/(n[s+1][0]-n[s][0]),0,1)),o=Math.sqrt(Math.max(0,1-(t/r[1])**2));return o*r[2]+r[3]+Ax(i,t,e)*o**8}function $l(i,t,e,n=0){let r=zs(i,t,e),o=new I(-(zs(i,t+5e-4,e)-zs(i,t-5e-4,e))/(2*5e-4),-(zs(i,t,e+5e-4)-zs(i,t,e-5e-4))/(2*5e-4),1).normalize();return{position:new I(t,e,r).addScaledVector(o,n),normal:o}}function jl(i="neutral"){let t=`sculpted-face-${i}`;if(oi.has(t))return oi.get(t);let e=40,n=4,s=Zl(i),r=(s.length-1)*n+1,o=r*(e+1),a=Fe(t,s,{segments:e,steps:n,skin:!0,smooth:!0}).clone(),c=a.attributes.position,l=a.attributes.color;for(let u=0;u<o;u++){let d=c.getX(u),f=c.getY(u),m=c.getZ(u),x=Bs(i),g=Zl(i),p=0;for(;p<g.length-2&&f>g[p+1][0];)p++;let M=Jl(g,p,ge.clamp((f-g[p][0])/(g[p+1][0]-g[p][0]),0,1))[3];m>M&&c.setZ(u,zs(i,d,f));let b=Math.exp(-(((Math.abs(d)-.098*x.cheek)/.052)**2+((f+.045*x.length)/.06)**2))*Math.max(0,(m-M)/.15),_=Math.exp(-((d/.034)**2+((f+.048*x.length)/.033)**2))*Math.max(0,(m-M)/.15),w=Math.exp(-(((Math.abs(d)-.07*x.eyes)/.042)**2+((f-.025*x.length)/.032)**2))*Math.max(0,(m-M)/.15),T=.965+Math.max(0,f)*.1-ge.smoothstep(-f,.07,.2)*.035-w*.028;l.setXYZ(u,T,T-b*.065-_*.025,T-b*.09-_*.035)}a.computeVertexNormals();let h=a.attributes.normal;for(let u=0;u<r;u++){let d=u*(e+1),f=d+e,m=new I().fromBufferAttribute(h,d).add(new I().fromBufferAttribute(h,f)).normalize();h.setXYZ(d,...m.toArray()),h.setXYZ(f,...m.toArray())}return a.userData.sculpture=`face-${i}`,oi.set(t,a),a}function $n(i){if(i==="tunic")return Fe(i,[[-.285,.22,.154,0],[-.2,.232,.168,0],[-.05,.266,.18,0],[.12,.292,.18,-.008],[.26,.27,.154,-.016],[.34,.105,.105,-.012]],{folds:.008});if(i==="cuirass")return Fe(i,[[-.2,.237,.175,.004],[-.05,.275,.191,.004],[.12,.297,.187,-.003],[.245,.273,.164,-.01]],{folds:.004});if(i==="robe")return Fe(i,[[-.64,.335,.237,.012],[-.58,.327,.23,.008],[-.4,.29,.207,0],[-.27,.239,.171,0]],{segments:24,folds:.023});if(i==="belt")return Fe(i,[[-.267,.24,.174,0],[-.251,.246,.18,0],[-.203,.246,.18,0],[-.19,.24,.174,0]],{segments:24});if(i==="thigh")return Fe(i,[[-.32,.085,.087,.012],[-.24,.114,.108,.006],[-.09,.126,.117,0],[0,.11,.104,0]],{segments:16,folds:.012});if(i==="boot")return Fe(i,[[-.3,.073,.087,.035],[-.23,.083,.091,.018],[-.1,.097,.098,.005],[.015,.099,.096,0]],{segments:16});if(i==="upperSleeve")return Fe(i,[[-.25,.086,.086,.014],[-.19,.112,.106,.006],[-.05,.135,.123,0],[.045,.111,.102,0]],{segments:16,folds:.013});if(i==="foreSleeve")return Fe(i,[[-.23,.078,.083,.024],[-.19,.086,.087,.019],[-.08,.098,.092,.006],[.018,.091,.088,0]],{segments:16,folds:.012});if(i==="wideSleeve")return Fe(i,[[-.245,.145,.13,.02],[-.21,.15,.132,.017],[-.08,.124,.115,.003],[.022,.092,.092,0]],{segments:20,folds:.022});if(i==="tasset")return Fe(i,[[-.51,.245,.205,.006],[-.46,.25,.21,.004],[-.31,.244,.19,0],[-.255,.233,.172,0]],{segments:24,folds:.018});throw new Error(`Unknown garment ${i}`)}function Jr(){let i=new Xn;i.moveTo(-.025,0),i.lineTo(.025,0),i.lineTo(.021,-.49),i.lineTo(-.006,-.66),i.lineTo(-.024,-.5),i.closePath();let t="blade";if(!oi.has(t)){let e=new ri(i,{depth:.018,steps:1,bevelEnabled:!0,bevelSegments:1,bevelSize:.004,bevelThickness:.004});e.translate(0,0,-.009),oi.set(t,e)}return oi.get(t)}var Kl=new Map,Ql=new Map,th=new WeakMap,ai=128,nh=Math.PI*2,pn=(i,t,e,n,s=0)=>Math.sin(nh*(i*e+t*n)+s),eh=i=>Math.max(0,Math.min(1,i));function Cx(i){if(Kl.has(i))return Kl.get(i);if(!["skin","hair","cloth","armor","leather"].includes(i))throw new Error(`Unknown character surface ${i}`);let t=new Uint8Array(ai*ai*4),e=new Uint8Array(t.length),n=new Uint8Array(t.length);for(let o=0;o<ai;o++)for(let a=0;a<ai;a++){let c=a/ai,l=o/ai,h=pn(c,l,2,3)*.55+pn(c,l,5,-2,1.3)*.3+pn(c,l,3,7,.7)*.15,u=pn(c,l,41,37,.4)*pn(c,l,23,-29,2),d=pn(c,l,48,0)*pn(c,l,0,48),f=.97,m=.5,x=.95,g=[1,1,1];if(i==="skin"&&(f=.985+h*.012+u*.004,m=.5+u*.09,x=.96+h*.025,g=[1,.995,.989]),i==="hair"){let M=Math.sin(nh*c*22+pn(c,l,1,1)*1.2),b=Math.sin(nh*c*49+pn(c,l,2,1)*.8);f=.86+M*.09+b*.025+h*.018,m=.5+M*.19+b*.05,x=.86-M*.055,g=[1,.99,.97]}if(i==="cloth"&&(f=.93+h*.035+d*.025,m=.5+d*.17+u*.035,x=.98+h*.015),i==="armor"){let M=pn(c,l,13,11)*pn(c,l,9,-17),b=Math.max(0,pn(c,l,1,43)+pn(c,l,5,41)-1.68);f=.9+h*.035+M*.035-b*.06,m=.5+M*.07-b*.12,x=.87+h*.045+M*.055,g=[.98,.99,1]}i==="leather"&&(f=.89+h*.045+u*.025,m=.5+u*.15+h*.04,x=.94+u*.035,g=[1,.985,.965]);let p=(o*ai+a)*4;for(let M=0;M<3;M++)t[p+M]=Math.round(eh(f*g[M])*255),e[p+M]=Math.round(eh(m)*255),n[p+M]=Math.round(eh(x)*255);t[p+3]=e[p+3]=n[p+3]=255}let s=(o,a)=>{let c=new si(o,ai,ai,Ze);return c.colorSpace=a,c.wrapS=c.wrapT=xi,c.magFilter=Ie,c.minFilter=bn,c.generateMipmaps=!0,c.anisotropy=4,c.needsUpdate=!0,c.name=`character-${i}-${a===Ae?"pigment":o===e?"height":"roughness"}`,c},r={map:s(t,Ae),bumpMap:s(e,wn),roughnessMap:s(n,wn)};return Kl.set(i,r),r}function En(i,t,e={}){let n=JSON.stringify([i,t,e]);if(Ql.has(n))return Ql.get(n);let s={skin:{roughness:.94,bumpScale:7e-4,envMapIntensity:.28,vertexColors:!0},hair:{roughness:.91,bumpScale:.003,envMapIntensity:.34},cloth:{roughness:1,bumpScale:.0035,envMapIntensity:.35},armor:{roughness:.73,metalness:.46,bumpScale:.0025,envMapIntensity:.6,vertexColors:!0},leather:{roughness:.97,bumpScale:.0025,envMapIntensity:.3}},r=new vn({color:t,...Cx(i),...s[i],...e});return r.name=`character-${i}-${t}`,r.userData.characterSurface=i,Ql.set(n,r),r}function Dd(i){if(th.has(i))return th.get(i);let t=i.clone(),e=t.attributes.position,n=t.attributes.normal,s=new Float32Array(e.count*3);for(let r=0;r<e.count;r++){let o=[Math.abs(n.getX(r)),Math.abs(n.getY(r)),Math.abs(n.getZ(r))].sort((l,h)=>h-l),a=ge.smoothstep(o[1],.04,.55),c=.82+a*.18;s[r*3]=c*.985,s[r*3+1]=c*.993,s[r*3+2]=c}return t.setAttribute("color",new Ne(s,3)),t.userData.characterArmor=!0,th.set(i,t),t}var Rx={yi:{skin:"#d4a47e",hair:"#382e2b",brow:.13,beard:.1},sejong:{skin:"#ddb18d",hair:"#3c302c",brow:.04,beard:.18},eulji:{skin:"#cda482",hair:"#3d3330",brow:.18,beard:.1},gang:{skin:"#c9ad91",hair:"#a3a29b",brow:.14,beard:.2},gwon:{skin:"#cda885",hair:"#62564a",brow:.12,beard:.15},gwak:{skin:"#d6a37b",hair:"#332c29",brow:.18,beard:.06},ahn:{skin:"#d1ab88",hair:"#302b28",brow:.08,beard:0},dangun:{skin:"#dcc2a4",hair:"#e0ddd0",brow:.04,beard:.24},ashigaru:{skin:"#c9a17e",hair:"#39312c",brow:.1,beard:0},teppo:{skin:"#c6a285",hair:"#45403a",brow:.14,beard:.025},scout:{skin:"#cfab86",hair:"#3b302a",brow:.08,beard:0},samurai:{skin:"#c5a282",hair:"#342e2c",brow:.18,beard:.035},ninja:{skin:"#c3a48a",hair:"#302f30",brow:.16,beard:0},onmyoji:{skin:"#d4b99b",hair:"#514b43",brow:.05,beard:0},cavalry:{skin:"#bd9877",hair:"#433831",brow:.15,beard:.04},drum:{skin:"#cba27e",hair:"#43372d",brow:.08,beard:0},armored:{skin:"#bea18a",hair:"#554b43",brow:.2,beard:.05},konishi:{skin:"#caa989",hair:"#3d3430",brow:.12,beard:.035},kato:{skin:"#c2a183",hair:"#3b332d",brow:.2,beard:.05},wakizaka:{skin:"#bf9d7c",hair:"#53493d",brow:.16,beard:.035},ukita:{skin:"#d0ad88",hair:"#36302d",brow:.08,beard:0},ishida:{skin:"#cfb393",hair:"#3b3531",brow:.1,beard:.02},so:{skin:"#d0b294",hair:"#3e352f",brow:.08,beard:0},kuroda:{skin:"#c2a38b",hair:"#60574d",brow:.18,beard:.045},todo:{skin:"#c8aa8c",hair:"#554b42",brow:.14,beard:.045},kuki:{skin:"#bd9b7d",hair:"#73695b",brow:.18,beard:.055},kurushima:{skin:"#bb9674",hair:"#44382d",brow:.18,beard:.035},shimazu:{skin:"#c4a789",hair:"#827a6d",brow:.2,beard:.065},hideyoshi:{skin:"#d1b18a",hair:"#7c7261",brow:.14,beard:.035},militia:{skin:"#cba581",hair:"#4c3d31",brow:.08,beard:0},guard:{skin:"#c9a580",hair:"#3b312c",brow:.12,beard:.025},elite:{skin:"#c6a17d",hair:"#4b3e34",brow:.18,beard:.035},monk:{skin:"#d1b391",hair:"#777064",brow:.05,beard:.045}},sc=i=>Rx[i]??{skin:"#c79a76",hair:"#39312c",brow:.17,beard:0},ih=new Map,Ix=new I(0,0,1);function ks(i,t){return ih.has(i)||ih.set(i,t()),ih.get(i)}function Px(){return ks("combed-hair-cap",()=>{let t=Fe("combed-hair-cap",[[.075,.181,.16,-.015],[.11,.186,.166,-.017],[.16,.174,.163,-.02],[.21,.125,.13,-.022],[.247,.04,.055,-.022],[.263,.01,.015,-.03]],{segments:32,steps:4,smooth:!0}).clone(),e=t.attributes.position,n=t.attributes.uv;for(let o=0;o<e.count-2;o++)if(n.getY(o)<.25&&e.getZ(o)>0){let a=.022*Math.exp(-(((e.getX(o)-.035)/.045)**2)),c=(1-n.getY(o)/.25)**2;e.setY(o,e.getY(o)+a*c)}t.computeVertexNormals();let s=t.attributes.normal,r=(e.count-2)/33;for(let o=0;o<r;o++){let a=o*33,c=a+32,l=new I().fromBufferAttribute(s,a).add(new I().fromBufferAttribute(s,c)).normalize();s.setXYZ(a,l.x,l.y,l.z),s.setXYZ(c,l.x,l.y,l.z)}return t})}function Dx(i,t){return ks(`eye-${i}-${t}`,()=>{let e=[0,0,.005],n=[.5,.5],s=[],r=24,o=3;for(let c=1;c<=o;c++)for(let l=0;l<=r;l++){let h=l/r*Math.PI*2,u=c/o,d=Math.cos(h)*u,f=Math.sin(h)*Math.abs(Math.sin(h))**.35*u;if(e.push(d*i,f*t,.005*(1-u*u)),n.push(.5+d*.5,.5+f*.5),c===1&&l<r&&s.push(0,l+1,l+2),c>1&&l<r){let m=1+(c-2)*(r+1)+l;s.push(m,m+r+1,m+1,m+1,m+r+1,m+r+2)}}let a=new Ee;return a.setAttribute("position",new se(e,3)),a.setAttribute("uv",new se(n,2)),a.setIndex(s),a.computeVertexNormals(),a})}function Ld(i,t,{ball:e,box:n,between:s,mesh:r,material:o,MAT:a}){let c=sc(t),l=Bs(t),h=En("skin",c.skin),u=En("hair",c.hair);r(i,jl(t),h,0,0,0);let d=(x,g,p,M,b=.0015)=>{let _=ks(`${t}-${x}`,()=>new Nn(new yn(p.map(([w,T])=>$l(t,w*l.eyes,T*l.length,b).position)),12,M,5,!1));return r(i,_,g,0,0,0)},f=o("#9d6d60",{roughness:.98,envMapIntensity:.2}),m=o("#ac8065",{roughness:1,envMapIntensity:.2});for(let x of[-1,1]){e(i,h,x*.176*l.cheek,-.025*l.length,-.025,.027,.051,.028),e(i,En("skin","#b77e65"),x*.187*l.cheek,-.027*l.length,-.007,.012,.029,.009);let g=$l(t,x*.069*l.eyes,.021*l.length,.002),p=new oe;p.position.copy(g.position),p.quaternion.setFromUnitVectors(Ix,g.normal),i.add(p);let M=.034*l.eyes,b=.014*l.lid;r(p,Dx(M,b),o("#ded7c3",{roughness:.94,envMapIntensity:.25}),0,0,0),e(p,o("#715a3d",{roughness:.7,envMapIntensity:.3}),0,0,.0055,.0105,.0105*l.lid,.0018),e(p,o("#28302e",{roughness:.7,envMapIntensity:.3}),0,0,.007,.0048,.0075*l.lid,.0014),e(p,o("#f5e9c9",{roughness:.7}),-.003,.003,.008,.0018);for(let[_,w,T]of[[!0,u,.0018],[!1,m,.0011]]){let C=ks(`lid-${t}-${_}`,()=>{let v=[];for(let A=0;A<=8;A++){let P=-1+A/4,N=Math.max(0,1-P*P)**.675;v.push(new I(P*M,(_?1:-1)*b*N,5e-4))}return new Nn(new yn(v),16,T,5,!1)});r(p,C,w,0,0,0)}d(`brow-${x}`,u,[[x*.035,.063-c.brow*.02],[x*.073,.069],[x*.108,.057+c.brow*.03]],.0048,.002),d(`nostril-${x}`,m,[[x*.011,-.052],[x*.02,-.055],[x*.027,-.052]],.0016,8e-4),l.age>.5&&(d(`eye-crease-${x}`,m,[[x*.104,.008],[x*.12,.002],[x*.133,-.005]],.0013*l.age,8e-4),d(`cheek-crease-${x}`,m,[[x*.035,-.063],[x*.048,-.08],[x*.055,-.101]],.0013*l.age,8e-4))}if(d("upper-lip",f,[[-.027,-.092],[-.012,-.087],[0,-.089],[.012,-.087],[.027,-.092]],.0024,.001),d("lower-lip",f,[[-.025,-.094],[0,-.098],[.025,-.094]],.0022,.001),e(i,u,0,.105,-.057,.18,.14,.143),c.beard){let x=ks(`shaped-beard-${t}`,()=>{let g=Fe(`beard-${t}`,[[-.145-c.beard*.9,.021,.018,.098],[-.14-c.beard*.45,.075,.046,.108],[-.135,.115,.075,.084],[-.105,.115,.048,.078]],{segments:28,steps:4,folds:.035,arc:Math.PI*1.35,smooth:!0}).clone(),p=g.attributes.position,M=g.attributes.uv;for(let b=0;b<p.count;b++){let _=(M.getX(b)-.5)*Math.PI*1.35,w=M.getY(b),T=.009*(.5+.5*Math.cos(_*7))*(1-w)**2;p.setXYZ(b,p.getX(b)*l.jaw,(p.getY(b)+.039*Math.abs(Math.sin(_))*w**3-T)*l.length,p.getZ(b)*l.depth)}return g.computeVertexNormals(),g});r(i,x,u,0,0,0);for(let g of[-1,1])d(`mustache-${g}`,u,[[g*.006,-.072],[g*.027,-.074],[g*.052,-.084]],.0075,.004),d(`sideburn-${g}`,u,[[g*.144,-.014],[g*.137,-.071],[g*.117,-.128]],.01,.003)}if(t==="ahn")for(let x of[-1,1])d(`mustache-${x}`,u,[[x*.006,-.072],[x*.026,-.073],[x*.052,-.079]],.0045,.002);if(t==="dangun")for(let x of[-1,1])for(let g=0;g<3;g++){let p=e(i,u,x*(.17-g*.012),-.07-g*.07,-.072,.032,.093,.043);p.rotation.z=x*.13}i.userData.portrait=t,i.userData.faceForm=l}function Nd(i,t,e,{ball:n,box:s,cylinder:r,cone:o,between:a,mesh:c,material:l,MAT:h}){let u=h.gold,d=En("hair",sc(t).hair);if(["yi","eulji","gang","gwon"].includes(t)){let f=t==="eulji",m=t==="gang",x=f?.35:m?.245:.28;c(i,Fe(`helmet-${t}`,[[.066,.208,.188,-.018],[.12,.216,.192,-.025],[.205,.167,.154,-.035],[x,.018,.021,-.045]],{segments:28}),e,0,0,0),r(i,u,0,.074,-.018,.213,.025);for(let g of[-1,1])for(let p=0;p<3;p++){let M=c(i,"bevel",e,g*(.192+p*.006),.018-p*.058,-.063,.055,.073,.23);M.rotation.z=g*-.11,s(i,u,g*(.224+p*.006),.037-p*.058,-.063,.009,.008,.2)}for(let g=0;g<7;g++){let p=(g/6-.5)*2.6;a(i,u,[Math.sin(p)*.205,.081,Math.cos(p)*.188-.02],[Math.sin(p)*.152,.209,Math.cos(p)*.137-.035],.006)}if(t==="yi"){s(i,u,0,.18,.16,.045,.18,.025);for(let g=0;g<5;g++){let p=n(i,h.red,0,.3+g*.03,-.055-g*.034,.029,.09-g*.008,.045);p.rotation.x=-.5}}else if(t==="eulji"){for(let g of[-1,1]){let p=c(i,"bevel",u,g*.16,.29,-.035,.055,.29,.065);p.rotation.z=g*-.42,a(i,u,[g*.04,.22,.13],[g*.075,.45,.07],.017)}n(i,h.jade,0,.19,.17,.045,.06,.015)}else if(t==="gang"){for(let g of[-1,0,1]){let p=c(i,"bevel",h.steel,g*.085,.265,.005,.034,.14-Math.abs(g)*.045,.04);p.rotation.z=g*-.25}n(i,u,0,.11,.19,.035)}else{c(i,"bevel",h.steel,0,.16,.163,.08,.14,.026);for(let g=0;g<3;g++)n(i,d,0,.29+g*.018,-.065-g*.035,.04,.065,.055)}}else if(t==="sejong"){c(i,Fe("royal-cap",[[.095,.181,.16,-.03],[.22,.183,.153,-.03],[.32,.13,.13,-.03]],{segments:20}),h.black,0,0,0);for(let f of[-1,1]){let m=c(i,"bevel",h.black,f*.27,.23,-.09,.25,.045,.14);m.rotation.z=f*.08,s(i,h.woodDark,f*.3,.233,-.017,.16,.012,.008)}}else if(t==="dangun"){n(i,d,0,.1,-.067,.205,.2,.18),r(i,u,0,.13,0,.203,.045);for(let f of[-1,0,1])a(i,u,[f*.13,.15,.13],[f*.15,.33+(f?0:.055),.1],.018),n(i,h.jade,f*.15,.34+(f?0:.055),.1,.027,.042,.018)}else if(t==="gwak"){n(i,d,0,.11,-.044,.182,.14,.16),n(i,d,0,.25,-.07,.064,.075,.064),r(i,h.red,0,.075,-.008,.195,.052);for(let f of[-1,1]){let m=c(i,"bevel",h.red,f*.045,-.06,-.21,.052,.32,.024);m.rotation.z=f*.27}}else if(t==="ahn"){let f=Px();c(i,f,d,0,0,0);let m=new fe(f,d),x=new Dr,g=En("hair","#3d3530");for(let p=0;p<9;p++){let M=ks(`combed-strand-${p}`,()=>{let b=[];for(let _=0;_<=10;_++){let w=_/10,T=(-.145+p*.036)*(1-w*.82),C=.084+w*.151;x.set(new I(T,C,1),new I(0,0,-1));let v=x.intersectObject(m,!1)[0];v&&b.push(v.point.clone().addScaledVector(v.face.normal,.0015))}return new Nn(new yn(b),20,.0015,5,!1)});c(i,M,g,0,0,0)}for(let p of[-1,1])a(i,d,[p*.145,.075,-.01],[p*.14,-.035,.052],.014)}}function Ud(i,t,e,n,s,{ball:r,box:o,cylinder:a,between:c,mesh:l,material:h,MAT:u}){let d=u.gold,f=En("leather","#594231");for(let m of[-1,1]){c(t,d,[m*.23,.21,.15],[m*.16,-.16,.205],.009);for(let g=0;g<4;g++)r(t,d,m*.21,.14-g*.065,.185,.008);let x=e[m<0?0:1].userData.elbow;a(x,f,0,-.16,.018,.092,.11);for(let g of[-.105,-.21])a(x,d,0,g,.018,.094,.012)}if(["sejong","dangun","ahn"].includes(i))for(let m=0;m<12;m++){let x=m*Math.PI/6;c(t,i==="ahn"?f:d,[Math.sin(x)*.32,-.59,Math.cos(x)*.224],[Math.sin(x)*.335,-.635,Math.cos(x)*.237],.007)}if(i==="sejong"){for(let m=0;m<18;m++){let x=m*Math.PI/9;r(t,d,Math.cos(x)*.102,.025+Math.sin(x)*.12,.207,.008)}for(let m=0;m<9;m++){let x=m*.65;r(t,d,Math.sin(x)*(.045+m*.003),.02+Math.cos(x)*.075,.217,.015,.01,.007)}}else if(i==="dangun"){for(let m=0;m<11;m++){let x=m*Math.PI/10;r(t,u.snow,Math.cos(x)*.29,.19-Math.sin(x)*.08,.11+Math.sin(x)*.12,.06,.042,.05)}for(let m of[-1,1])r(t,u.jade,m*.09,-.29,.27,.032,.065,.025),c(t,d,[m*.09,-.2,.24],[m*.09,-.34,.26],.008)}else if(i==="ahn"){for(let m of[-1,1]){let x=o(t,f,m*.095,.075,.2,.1,.27,.025);x.rotation.z=m*.28,o(t,f,m*.17,-.13,.2,.12,.09,.025)}for(let m=0;m<3;m++)r(t,d,0,.03-m*.075,.23,.011);for(let m of[-1,1]){let x=l(t,"bevel",n,m*.085,.28,.1,.105,.15,.085);x.rotation.z=m*.32}c(t,f,[-.24,.22,.16],[.18,-.19,.21],.019)}else{let m=i==="gwak"?u.red:d;for(let x of[-1,1]){let g=o(t,m,x*.12,-.32,.235,.09,.27,.023);g.rotation.z=x*.11;for(let p=0;p<3;p++)o(t,d,x*.12,-.39-p*.025,.25,.083,.008,.008)}if(i==="gang")for(let x=0;x<5;x++){let g=x*Math.PI*2/5;r(t,d,Math.sin(g)*.06,.04+Math.cos(g)*.06,.227,.018)}if(i==="gwon")for(let x of[-1,1])o(t,f,x*.24,-.07,.16,.06,.29,.06);if(i==="eulji")for(let x of[-1,1])c(t,u.jade,[x*.24,.17,.16],[x*.04,-.17,.207],.022)}}function en(i,t,e,n,s=new Se){let r=i.arms[t],o=i.elbows[t],a=i.wrists[t];i.torso.updateMatrix();let c=i.torso.matrix.clone().invert(),l=new I(...e).applyMatrix4(c),h=new I(...n).applyMatrix4(c),u=o.position.clone(),d=a.position.clone(),f=r.position,m=l.clone().sub(f),x=ge.clamp(m.length(),.025,u.length()+d.length()-.002),g=m.normalize();h.sub(f);let p=h.addScaledVector(g,-h.dot(g)).normalize(),M=(u.lengthSq()+x*x-d.lengthSq())/(2*x),b=Math.sqrt(Math.max(0,u.lengthSq()-M*M)),_=f.clone().addScaledVector(g,M).addScaledVector(p,b);r.quaternion.setFromUnitVectors(u.normalize(),_.clone().sub(f).normalize());let w=f.clone().addScaledVector(g,x);o.quaternion.setFromUnitVectors(d.normalize(),w.sub(_).applyQuaternion(r.quaternion.clone().invert()).normalize());let T=i.torso.quaternion.clone().multiply(r.quaternion).multiply(o.quaternion);a.quaternion.copy(T.invert().multiply(s))}function rc(i,t,e,n){let s=i.legs[t],r=i.knees[t],o=.31,a=Math.hypot(.3,.035),c=i.hips.position.y-(.064+n),l=ge.clamp(Math.hypot(c,e),.03,o+a-.001),h=Math.atan2(e,c),u=Math.acos(ge.clamp((o*o+l*l-a*a)/(2*o*l),-1,1));s.rotation.x=-(h+u);let d=Math.sin(h+u)*o,f=Math.cos(h+u)*o;r.rotation.x=Math.atan2(.035,.3)-Math.atan2(e-d,c-f)-s.rotation.x,i.ankles[t].rotation.x=-s.rotation.x-r.rotation.x}var Lx=new I(0,1,0),Nx=new I(0,0,1);function oc(i,t,e=[0,0,0]){return new I(...e).applyMatrix4(t.matrixWorld).applyMatrix4(i.rig.matrixWorld.clone().invert())}function Ux(i,t,e,n){let s=i.userData,r=s.kind==="gwak",o=e?Math.sin(n*Os[s.kind].gait)*.012:0;s.torso.rotation.y=r?.1:.04,s.torso.rotation.x=e?.04:0,en(s,0,[-.12,1.2+o,.37],[-.5,.92,.15]),en(s,1,[-.12,1.235+o,.025+t*.17],[.38,1.01,.19]),i.updateMatrixWorld(!0);let a=oc(s,s.weapons[0]),c=oc(s,s.weapons[1]),l=new Se().setFromUnitVectors(Nx,a.clone().sub(c).normalize()),h=s.torso.quaternion.clone().multiply(s.arms[1].quaternion).multiply(s.elbows[1].quaternion);s.wrists[1].quaternion.copy(h.invert().multiply(l)),s.weapons[1].visible=t<.72,i.updateMatrixWorld(!0);let u=oc(s,s.weapons[1]);for(let d=0;d<2;d++){let f=oc(s,s.weapons[0],s.weapons[0].userData.bowTips[d]),m=u.clone().sub(f),x=s.bowStrings[d];x.position.copy(f).add(u).multiplyScalar(.5),x.scale.set(.0045,m.length(),.0045),x.quaternion.setFromUnitVectors(Lx,m.normalize())}}function sh(i,t,e,n){let s=i.userData,r=Os[s.kind],o=t*r.gait+s.phase,a=ge.clamp(n/.25,0,1),c=Math.sin(t*1.8+s.phase),l=e?1:0;s.rig.position.y=(s.mountOffset??0)+c*.006*(1-l),s.hips.position.y=e?.65:.67,s.torso.rotation.set(l*.035,Math.sin(o)*l*.035,0),s.head.rotation.set(c*.008,-s.torso.rotation.y*.45,0);for(let h=0;h<2;h++)s.legs[h].rotation.set(0,0,0),s.knees[h].rotation.set(0,0,0),rc(s,h,l*Math.sin(o+h*Math.PI)*r.stride,l*Math.max(0,Math.cos(o+h*Math.PI))*.065),s.arms[h].rotation.set(-Math.sin(o+h*Math.PI)*l*.2,0,(h?1:-1)*.07),s.arms[h].position.z=-.012,s.elbows[h].rotation.set(-.18,0,0),s.wrists[h].rotation.set(0,0,0),s.weapons[h].visible=!0;if(s.weapon==="arrow")Ux(i,a,e,t);else if(s.kind==="ahn")s.torso.rotation.y=-.08+a*.05,en(s,1,[.23,1.19+a*.025,.4-a*.075],[.39,.88,.1]),s.arms[0].rotation.x=-.26-Math.sin(o)*l*.12,s.elbows[0].rotation.x=-.63,s.head.rotation.y=.06;else if(s.weapon==="melee"){let h=Math.sin(a*Math.PI*.72),u=s.kind==="gwon";s.torso.rotation.y=(u?-.1:-.16)+(u?.23:.43)*h,s.torso.rotation.x=l*.035+h*.055,s.arms[0].rotation.x=-(u?.65:.45)-h*.12,s.arms[0].rotation.y=u?.22:.13,s.elbows[0].rotation.x=-(u?.6:.42),s.wrists[0].rotation.x=-(s.arms[0].rotation.x+s.elbows[0].rotation.x)*.8,s.arms[1].rotation.x=-.25-h*(u?1.1:1.55),s.arms[1].rotation.y=-.15-h*.6,s.elbows[1].rotation.x=-.24-h*.48,s.wrists[1].rotation.z=-h*.3,s.head.rotation.y=-s.torso.rotation.y*.65}else{let h=s.kind==="sejong",u=s.kind==="dangun",d=h?.52:u?.85:.72;s.torso.rotation.y=-a*(h?.1:.2),s.arms[0].rotation.x=h?-.67:-.23-a*.25,s.elbows[0].rotation.x=h?-.51:-.3-a*.2,s.arms[1].rotation.x=-.18-a*d,s.arms[1].rotation.y=-a*(u?.4:.22),s.elbows[1].rotation.x=-.23-a*(h?.22:.4);for(let f=0;f<2;f++)s.wrists[f].rotation.x=-(s.arms[f].rotation.x+s.elbows[f].rotation.x)*(h?.95:.8);s.head.rotation.x=-a*.035}}function Fd(i,t,e,n,{ball:s,box:r,cylinder:o,cone:a,between:c,mesh:l,material:h,MAT:u}){let d=Bn[t],f=d.helmet,m=h(d.accent,{metalness:.35,roughness:.56});if(["jingasa","flat-hat"].includes(f)){let b=f==="jingasa";a(i,n,0,b?.215:.19,-.025,b?.34:.29,b?.23:.13),o(i,m,0,b?.1:.13,-.025,b?.325:.28,.021);for(let _=0;_<8;_++){let w=_*Math.PI/4;c(i,u.rope,[0,b?.33:.255,-.025],[Math.sin(w)*(b?.32:.27),b?.105:.135,Math.cos(w)*(b?.32:.27)-.025],.004)}for(let _ of[-1,1])c(i,u.rope,[_*.17,.1,.02],[0,-.16,.105],.006);return}if(f==="headband"){o(i,n,0,.085,-.025,.194,.048);for(let b of[-1,1]){let _=r(i,n,b*.055,0,-.205,.045,.23,.025);_.rotation.z=b*.25}t==="drum"&&r(i,u.rope,0,.085,.174,.13,.035,.012);return}if(f==="hood"){s(i,n,0,.075,-.065,.224,.226,.185),l(i,"bevel",n,0,-.105,.158,.31,.14,.057);for(let b of[-1,1])r(i,n,b*.19,-.015,.06,.045,.23,.15);for(let b of[-1,1]){let _=r(i,n,b*.05,-.03,-.21,.047,.26,.026);_.rotation.z=b*.3}return}if(f==="eboshi"){l(i,Fe("enemy-eboshi",[[.08,.19,.16,-.025],[.18,.177,.15,-.04],[.39,.12,.1,-.07],[.55,.07,.055,-.1]],{segments:20}),u.black,0,0,0),r(i,m,0,.28,.1,.042,.28,.022);for(let b of[-1,1])r(i,n,b*.17,-.02,-.12,.065,.36,.025);return}let x=f==="tall-cone",g=f==="bowl",p=x?.63:.27;l(i,Fe(`enemy-helm-${f}`,[[.057,.212,.189,-.022],[.11,g?.29:.218,g?.245:.197,-.03],[x?.34:.205,g?.27:.17,g?.22:.153,-.04],[p,.025,.028,-.048]],{segments:24}),e,0,0,0),o(i,m,0,.072,-.022,g?.28:.215,.025);for(let b of[-1,1])for(let _=0;_<3;_++){let w=l(i,"bevel",e,b*(.199+_*.006),.014-_*.056,-.075,.055,.07,.23);w.rotation.z=-b*.12,r(i,m,b*(.229+_*.006),.03-_*.056,-.075,.009,.008,.205)}let M=(b,_,w=.023)=>l(i,new Nn(new yn(_.map(T=>new I(...T))),16,w,5,!1),m,0,0,0);if(["crescent","split-crescent","wide-crescent"].includes(f)){let b=f==="wide-crescent"?.43:f==="split-crescent"?.34:.29;for(let _ of[-1,1])M(f,[[_*.035,.19,.16],[_*b*.6,.2,.17],[_*b,.43,.15]],f==="wide-crescent"?.03:.024);f==="split-crescent"&&r(i,m,0,.31,.17,.026,.22,.024)}else if(["horns","great-horns","antlers"].includes(f)){let b=f==="great-horns",_=f==="antlers";for(let w of[-1,1])if(M(f,[[w*.13,.19,.035],[w*(b?.35:.25),.32,.015],[w*(b?.43:.31),b?.62:.48,-.025]],b?.035:.023),_)for(let T=0;T<2;T++)c(i,m,[w*(.2+T*.045),.29+T*.07,.02],[w*(.36+T*.05),.37+T*.1,.03],.018)}else if(f==="visor"){l(i,"bevel",e,0,-.095,.16,.31,.14,.065);for(let b of[-.065,-.105,-.145])r(i,u.black,0,b,.198,.22,.012,.009);r(i,m,0,.22,.17,.08,.19,.025)}else if(f==="banner"){l(i,"bevel",m,0,.34,.12,.09,.43,.04);for(let b of[-1,1])r(i,e,b*.085,.26,.08,.035,.24,.04)}else if(f==="swept")for(let b of[-1,1])M(f,[[b*.12,.18,.05],[b*.24,.3,-.1],[b*.19,.34,-.3]],.026);else if(f==="bowl")s(i,m,0,.19,.24,.055,.055,.017);else if(f==="stacked")for(let b=0;b<3;b++)o(i,m,0,.25+b*.095,.12,.11-b*.023,.029).rotation.x=Math.PI/2;else if(f==="iron-wings")for(let b of[-1,1]){let _=l(i,"bevel",e,b*.27,.28,.025,.24,.29,.06);_.rotation.z=-b*.35,c(i,m,[b*.17,.18,.065],[b*.36,.44,.065],.012)}else if(f==="wave")for(let b=0;b<5;b++)M(f,[[(b-2)*.045,.19,.13],[(b-2)*.085,.35,.12],[(b-2)*.12+.1,.46-b*.015,.1]],.017);else if(f==="sunburst"){for(let b=0;b<13;b++){let _=(b/12-.5)*Math.PI*1.35;c(i,m,[Math.sin(_)*.19,.15+Math.cos(_)*.17,-.07],[Math.sin(_)*.55,.15+Math.cos(_)*.55,-.09],.021)}o(i,m,0,.18,.2,.105,.04).rotation.x=Math.PI/2}}function Od(i,t,e,n,{ball:s,box:r,between:o,mesh:a,cylinder:c,material:l,MAT:h}){let u=Bn[i],d=l(u.accent,{metalness:.35,roughness:.56});if(["teppo","ashigaru","scout"].includes(i)&&(o(t,h.woodDark,[-.23,.23,.16],[.17,-.23,.2],.021),a(t,"bevel",h.woodDark,.22,-.21,.1,.14,.14,.1),i==="teppo"))for(let f=0;f<4;f++)r(t,h.rope,-.12+f*.065,.07-f*.053,.208,.04,.065,.035);if(i==="onmyoji")for(let f of[-1,1]){r(t,d,f*.12,-.15,.215,.085,.66,.018);for(let m=0;m<4;m++)r(t,h.black,f*.12,.08-m*.12,.228,.035,.016,.007)}if(i==="ninja"){o(t,h.woodDark,[-.22,.22,.16],[.18,-.22,.205],.022);for(let f of[-1,1])a(t,"bevel",n,f*.19,-.1,.12,.105,.23,.1)}if(i==="armored"||i==="kuki")for(let f of[-1,1]){a(t,"bevel",n,f*.27,.12,.11,.12,.32,.15);for(let m=0;m<3;m++)r(t,d,f*.27,.22-m*.095,.19,.1,.015,.015)}if(u.scale){let f=i==="hideyoshi"?h.gold:d;for(let m of[-1,1])o(t,f,[m*.24,.21,.17],[m*.15,-.17,.216],.012);if(s(t,f,0,.03,.22,.065,.065,.018),["ishida","hideyoshi"].includes(i)){let m=i==="ishida"?3:1;for(let x=0;x<m;x++){let g=(x-(m-1)/2)*.19;o(t,h.woodDark,[g,-.22,-.27],[g,1.08,-.27],.012),r(t,e,g,.8,-.27,m===1?.27:.15,.44,.025),r(t,f,g,.8,-.25,.045,.21,.013)}if(i==="hideyoshi")for(let x of[-1,1])s(t,h.gold,x*.21,.37,-.28,.07,.1,.06),s(t,h.gold,x*.21,.5,-.28,.045,.06,.045)}}}function Bd(i,t,e,n,{ball:s,box:r,cylinder:o,cone:a,between:c,mesh:l,material:h,MAT:u}){let d=Bn[i],f=d.weapon,m=h(d.accent,{metalness:.35,roughness:.56}),x=e[1],g=e[0];for(let M of e)M.position.set(0,0,0);let p=(M,b=1,_=!1)=>{let w=l(M,Jr(),u.steel,0,-.09,0,1,b,1);w.rotation.z=_?-.19:-.06,c(M,u.woodDark,[0,-.075,0],[0,.075,0],.024),r(M,m,0,-.09,0,.13,.025,.055),s(M,m,0,.082,0,.029)};if(["yari","naginata"].includes(f)){c(x,u.wood,[0,-.66,0],[0,.91,0],.019);for(let M of[-.12,.12,.77])o(x,m,0,M,0,.026,.04);if(f==="yari")a(x,u.steel,0,1.06,0,.049,.3);else{let M=l(x,Jr(),u.steel,0,.87,0,1.2,.65,1);M.rotation.z=Math.PI-.18}x.userData.support=[0,.23,0]}else if(f==="rifle"){o(x,u.steel,0,.015,.35,.021,.66).rotation.x=Math.PI/2,l(x,"bevel",u.wood,0,-.024,.21,.07,.073,.54);let M=l(x,"bevel",u.woodDark,0,-.045,-.145,.08,.13,.23);M.rotation.x=-.14;for(let b of[.08,.39,.58])o(x,m,0,.015,b,.025,.03).rotation.x=Math.PI/2;r(x,u.black,0,.044,.58,.013,.018,.025),c(x,u.steel,[.044,.02,.03],[.044,.075,.075],.009),x.userData.muzzle=new I(0,.015,.685),x.userData.support=[0,-.02,.24]}else if(f==="ritual"){c(x,u.wood,[0,-.75,0],[0,.76,0],.026);let M=h("#c5d9b7",{emissive:"#628d7a",emissiveIntensity:.7});s(x,m,0,.79,0,.1),s(x,M,0,.85,0,.065),x.userData.muzzle=new I(0,.85,0);for(let b of[-1,1]){r(x,u.rope,b*.11,.58,0,.095,.31,.018);for(let _=0;_<3;_++)r(x,u.red,b*.11,.68-_*.07,.013,.05,.011,.007)}r(g,u.rope,0,.08,.04,.15,.28,.018);for(let b=0;b<4;b++)r(g,u.red,0,.18-b*.055,.054,.06,.012,.008)}else if(f==="drum"){o(t,u.wood,0,-.075,.36,.25,.3).rotation.x=Math.PI/2;for(let M of[.2,.52]){o(t,u.rope,0,-.075,M,.251,.024).rotation.x=Math.PI/2;for(let b=0;b<10;b++){let _=b*Math.PI/5;s(t,m,Math.sin(_)*.23,-.075+Math.cos(_)*.23,M,.012)}}for(let M=0;M<10;M++){let b=M*Math.PI/5,_=b+Math.PI/10;c(t,u.rope,[Math.sin(b)*.255,-.075+Math.cos(b)*.255,.21],[Math.sin(_)*.255,-.075+Math.cos(_)*.255,.51],.006)}for(let M of[-1,1])c(t,u.woodDark,[M*.2,.25,.11],[M*.2,-.01,.29],.016);for(let M of e)c(M,u.wood,[0,0,0],[0,0,.3],.014),s(M,u.rope,0,0,.32,.025)}else if(["axe","mace"].includes(f))if(c(x,u.woodDark,[0,.08,0],[0,-.6,0],.028),f==="axe")l(x,"bevel",u.steel,.07,-.47,0,.29,.24,.065),r(x,m,0,-.47,0,.075,.29,.08);else{s(x,u.steel,0,-.51,0,.115,.16,.115);for(let M=0;M<6;M++){let b=M*Math.PI/3;c(x,m,[Math.sin(b)*.08,-.64,Math.cos(b)*.08],[Math.sin(b)*.13,-.41,Math.cos(b)*.13],.018)}}else p(x,f==="shortblade"?.52:f==="kunai"?.34:f==="nodachi"?1.35:1,f==="cutlass");if((f==="kunai"||d.offhand==="blade")&&p(g,f==="kunai"?.34:.67,!0),f==="axe"||d.offhand==="shield"){l(g,"bevel",n,0,-.06,.1,.43,.57,.09);for(let M of[-1,1])r(g,m,M*.19,-.06,.155,.022,.55,.015);for(let M of[-.31,.19])r(g,m,0,M,.157,.4,.026,.017);s(g,m,0,-.06,.167,.068,.068,.03)}if(d.offhand==="fan"){let M=new Xn;M.moveTo(0,0);for(let b=0;b<=16;b++){let _=.23+b/16*(Math.PI-.46);M.lineTo(Math.cos(_)*.32,Math.sin(_)*.32)}M.closePath(),l(g,new ri(M,{depth:.014,bevelEnabled:!1,curveSegments:8}),m,0,0,.035);for(let b=0;b<7;b++){let _=.23+b/6*(Math.PI-.46);c(g,u.woodDark,[0,0,.055],[Math.cos(_)*.3,Math.sin(_)*.3,.055],.005)}c(g,u.woodDark,[0,-.07,.04],[0,.06,.04],.016)}}var $r=new I(1,0,0),Fx=new I(0,0,1);function zd(i,t){let e=i.userData,n=e.weapons[1];i.updateMatrixWorld(!0);let s=new I(...n.userData.support).applyMatrix4(n.matrixWorld).applyMatrix4(e.rig.matrixWorld.clone().invert());en(e,0,s.toArray(),[-.44,1.02,.19],t)}function Ox(i,t,e){if(i.horseLegs)for(let n=0;n<4;n++){let s=i.horseLegs[n],r=i.horseKnees[n],o=i.horseHooves[n],a=t+(n===0||n===3?0:Math.PI),c=e?Math.sin(a)*.15:0,l=e?Math.max(0,Math.cos(a))*.075:0,h=r.position.length(),u=o.position.length(),d=s.position.y-(.058+l),f=ge.clamp(Math.hypot(d,c),.03,h+u-.001),m=Math.atan2(c,d),x=Math.acos(ge.clamp((h*h+f*f-u*u)/(2*h*f),-1,1));s.rotation.set(-(m+x),0,0);let g=Math.sin(m+x)*h,p=Math.cos(m+x)*h;r.rotation.set(Math.atan2(.02,.27)-Math.atan2(c-g,d-p)-s.rotation.x,0,0),o.rotation.set(-s.rotation.x-r.rotation.x,0,0)}}function Bx(i){let t=i.userData;if(!t.horseReins)return;i.updateMatrixWorld(!0);let e=i.matrixWorld.clone().invert(),n=t.wrists[0].getWorldPosition(new I).applyMatrix4(e);for(let s=0;s<2;s++){let r=new I((s?1:-1)*.11,1.1,.65),o=n.clone().sub(r),a=t.horseReins[s];a.position.copy(r).add(n).multiplyScalar(.5),a.scale.set(.007,o.length(),.007),a.quaternion.setFromUnitVectors(new I(0,1,0),o.normalize())}}function rh(i,t,e,n){let s=i.userData,r=Bn[s.kind];if(!r||s.vehicle)return;let o=t*r.gait+s.phase,a=ge.clamp(n/.25,0,1),c=Math.sin(a*Math.PI*.72),l=e?1:0,h=Math.sin(t*1.8+s.phase);s.rig.position.y=(s.mountOffset??0)+h*.005*(1-l),s.hips.position.y=e?.65:.67,s.torso.rotation.set(l*(s.kind==="ninja"?.13:.025),Math.sin(o)*l*.025,0),s.head.rotation.set(h*.008,-s.torso.rotation.y*.4,0);for(let u=0;u<2;u++)s.legs[u].rotation.set(0,0,0),s.knees[u].rotation.set(0,0,0),s.ankles[u].rotation.set(0,0,0),s.kind==="cavalry"?(s.legs[u].rotation.set(-.72,0,(u?1:-1)*.36),s.knees[u].rotation.x=.94,s.ankles[u].rotation.x=-.22):rc(s,u,l*Math.sin(o+u*Math.PI)*r.stride,l*Math.max(0,Math.cos(o+u*Math.PI))*.06),s.arms[u].rotation.set(-Math.sin(o+u*Math.PI)*l*.18,0,(u?1:-1)*.07),s.arms[u].position.z=-.012,s.elbows[u].rotation.set(-.23,0,0),s.wrists[u].rotation.set(0,0,0);if(r.weapon==="rifle"){s.torso.rotation.y=.12;let u=new Se().setFromAxisAngle($r,-.025-a*.13);en(s,1,[-.1,1.2+a*.013,.1-a*.045],[.37,.94,.08],u),zd(i,u),s.head.rotation.y=-.1}else if(["yari","naginata"].includes(r.weapon)){s.torso.rotation.y=-.08+c*.15;let u=new Se().setFromAxisAngle($r,.38+c*.72);en(s,1,[-.08,1.04,.14+c*.09],[.42,.88,.06],u),zd(i,u)}else if(r.weapon==="ritual")en(s,1,[.25,1.1+a*.12,.12],[.44,.93,.1],new Se().setFromAxisAngle($r,-a*.18)),en(s,0,[-.2,1.19+a*.08,.22],[-.44,.98,.1],new Se().setFromAxisAngle($r,-.22-a*.42)),s.torso.rotation.y=-a*.12;else if(r.weapon==="drum")for(let u=0;u<2;u++){let d=Math.sin(t*8.8+s.phase+u*Math.PI),f=(d+1)*.045,m=[(u?1:-1)*.16,1.065+f,.235],x=new I((u?1:-1)*.12,.94,.54).sub(new I(...m)).normalize();en(s,u,m,[(u?1:-1)*.43,.95,.1],new Se().setFromUnitVectors(Fx,x))}else{let u=["axe","mace","nodachi"].includes(r.weapon),d=r.weapon==="kunai"||r.offhand==="blade";s.torso.rotation.y=-.08+c*(u?.48:.32),s.torso.rotation.x+=c*.04;let f=new Se().setFromEuler(new rn(-.18-c*(u?1.8:1.55),-.1-c*.34,-.14-c*.25));en(s,1,[.28,1.09+c*.05,.18+c*.13],[.49,.92,.06],f),r.offhand==="shield"||r.weapon==="axe"?en(s,0,[-.25,1.1,.27],[-.46,.97,.1],new Se().setFromAxisAngle($r,-.1)):r.offhand==="fan"?en(s,0,[-.29,1.04+a*.03,.22],[-.46,.94,.08],new Se().setFromEuler(new rn(-.17-a*.2,0,.35))):d&&en(s,0,[-.28,1.08+c*.1,.2],[-.47,.93,.08],new Se().setFromEuler(new rn(-.2-c*1.2,.12+c*.4,.16))),s.head.rotation.y=-s.torso.rotation.y*.6}Ox(s,o,e),Bx(i)}var oh=new Map,ah=new Map,ch=new Map;function Vs(i,t="cloth"){let e=i+t;return ch.has(e)||ch.set(e,En(t==="metal"?"armor":t==="wood"?"leather":"cloth",i,t==="cape"?{side:Mn}:{})),ch.get(e)}function je(i,t={}){let e=i+JSON.stringify(t);return oh.has(e)||oh.set(e,new vn({color:i,roughness:.86,...t})),oh.get(e)}function zx(i){return ah.has(i)||ah.set(i,i==="sphere"?new Sr(1,12,8):i==="cylinder"?new Mi(1,1,1,10):i==="cone"?new hr(1,1,12):i==="rock"?new dr(1,0):i==="foliage"?new br(1,1):i==="bevel"?new ic(1,1,1,1,.055):new xn(1,1,1)),ah.get(i)}function Wt(i,t,e,n,s,r,o=1,a=1,c=1){let l=typeof t=="string"?zx(t):t,h=new fe(t==="bevel"&&e.userData.characterSurface==="armor"?Dd(l):l,e);return h.position.set(n,s,r),h.scale.set(o,a,c),h.castShadow=h.receiveShadow=!0,i.add(h),h}var pe=(i,t,e,n,s,r,o,a)=>Wt(i,"box",t,e,n,s,r,o,a),ee=(i,t,e,n,s,r,o=r,a=r)=>Wt(i,"sphere",t,e,n,s,r,o,a),ae=(i,t,e,n,s,r,o)=>Wt(i,"cylinder",t,e,n,s,r,o,r),fn=(i,t,e,n,s,r,o)=>Wt(i,"cone",t,e,n,s,r,o,r);function ie(i,t,e,n,s=.035){let r=new I(...e),o=new I(...n),a=o.clone().sub(r),c=ae(i,t,...r.clone().add(o).multiplyScalar(.5).toArray(),s,a.length());return c.quaternion.setFromUnitVectors(new I(0,1,0),a.normalize()),c}var tt={snow:Ue("#d6e2ee","snow"),snowShade:Ue("#afc6db","snow"),stone:Ue("#8995a0","stone",{vertexColors:!0}),stoneDark:Ue("#576677","stone",{vertexColors:!0}),wood:Ue("#795b3c","wood"),woodDark:Ue("#44372e","wood"),plaster:Ue("#b9b4a1","plaster"),roof:Ue("#344751","tile",{roughness:.74,bumpScale:.018}),red:Ue("#873f39","cloth"),blue:Ue("#293d53","cloth"),gold:Ue("#c0a06b","metal",{metalness:.68,roughness:.36}),steel:Ue("#7b8b93","metal",{metalness:.78,roughness:.32}),black:Ue("#25323b","metal",{metalness:.45}),skin:je("#d5a078",{roughness:.72}),pine:je("#334e55"),pineDark:je("#243b48"),rope:je("#a99164"),window:je("#dec08c",{emissive:"#ffa34b",emissiveIntensity:.85}),ice:je("#b9d4df",{roughness:.28,metalness:.12}),roofSnow:Ue("#d6e2ee","roof-snow",{alphaTest:.5}),jade:Ue("#426c61","wood"),heroCloth:En("cloth","#2d5873"),heroArmor:En("armor","#435462"),samuraiArmor:Ue("#633f35","metal",{metalness:.3}),footCloth:Ue("#8c7854","cloth"),footArmor:Ue("#3e514c","metal",{metalness:.2}),straw:Ue("#ad925f","cloth")};function Ge(i){i.updateMatrixWorld(!0);let t=new Map,e=i.matrixWorld.clone().invert();i.traverse(n=>{if(!n.isMesh)return;let s=n.geometry.clone().applyMatrix4(new de().multiplyMatrices(e,n.matrixWorld));if(s.getAttribute("uv")||s.setAttribute("uv",new Ne(new Float32Array(s.getAttribute("position").count*2),2)),!s.getAttribute("color")){let r=new Float32Array(s.getAttribute("position").count*3);r.fill(1),s.setAttribute("color",new Ne(r,3))}t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(s)}),i.clear();for(let[n,s]of t){let r=Td(s.map(a=>a.index?a.toNonIndexed():a),!1);for(let a of s)a.dispose();if(!r)continue;r.userData.owned3d=!0;let o=new fe(r,n);o.castShadow=o.receiveShadow=!n.userData.fixedArt,i.add(o)}return i}function kd(i="yi"){let t=new oe,e=new oe;t.add(e);let n=!!Yr[i],s=nc[i]?.tier===4,r=["militia","guard","elite","monk"].includes(i),o=i==="ram"?null:Bn[i],a=n||!!o,c=s||["samurai","armored","cavalry","elite","guard"].includes(i),l=["sejong","dangun","ahn","onmyoji","monk"].includes(i),h=["gwak","scout","ninja","militia"].includes(i),u=Object.keys(nc).filter(R=>nc[R].tier===4).indexOf(i),d=["#723c3a","#3e4e69","#385e67","#6b4463","#506044","#544365","#2d383c","#4e5368","#374b67","#794733","#503f68","#917139"],f={yi:"#35566c",sejong:"#963f38",eulji:"#416257",gang:"#565472",gwon:"#76513b",gwak:"#ad4940",ahn:"#323638",dangun:"#c7c7ae"},m={yi:"#843e33",sejong:"#8b692d",eulji:"#a58d60",gang:"#a3a087",gwon:"#b5a17f",gwak:"#7a302e",ahn:"#303537",dangun:"#557966"},x=f[i]??o?.color??(s?d[u]:r?i==="monk"?"#b7a17a":i==="militia"?"#72856d":"#37647a":"#967b55"),g=i==="yi"?tt.heroCloth:Vs(x),p=n?i==="yi"?tt.heroArmor:Vs(x,l||h?"cloth":"metal"):o?Vs(x,l||h?"cloth":"metal"):c?Vs(x,"metal"):tt.footArmor,M=n?tt.gold:je("#9a8259"),b=En("skin",sc(i).skin),_=Vs("#49382c","wood"),w=new oe;w.position.y=.68,e.add(w);let T=[],C=[],v=[];for(let R of[-1,1]){let O=new oe;O.position.x=R*.14,w.add(O),T.push(O),Wt(O,$n("thigh"),g,0,0,0);let G=new oe;if(G.position.y=-.31,O.add(G),C.push(G),O.userData.knee=G,Wt(G,$n("boot"),_,0,0,0),a){let rt=new oe;rt.position.set(0,-.3,.035),G.add(rt),v.push(rt),ee(rt,_,0,.005,.05,.095,.067,.178),Wt(rt,"bevel",tt.woodDark,0,-.045,.04,.19,.032,.32)}else ee(G,_,0,-.295,.085,.095,.067,.178),Wt(G,"bevel",tt.woodDark,0,-.345,.075,.19,.032,.32);for(let rt of[-.07,-.19])ae(G,M,0,rt,.009,.099,.012);if(!l&&!h){let rt=Wt(G,"bevel",p,0,-.11,.087,.12,.21,.045);rt.rotation.x=-.07}}let A=new oe;A.position.y=.98,e.add(A),Wt(A,$n("tunic"),g,0,0,0),ae(A,b,0,.345,-.012,.084,.17),!l&&!h&&Wt(A,$n("cuirass"),p,0,0,0);for(let R=0;R<(l||h?0:4);R++)for(let O=0;O<6;O++){let G=(O-2.5)*.22,rt=Math.sin(G)*.28,ot=Math.cos(G)*.196,kt=Wt(A,"bevel",R%2?p:g,rt,.16-R*.085,ot,.059,.071,.022);kt.rotation.y=G,ee(A,M,rt,.185-R*.085,ot+.018,.006),ie(A,tt.rope,[rt-.018,.174-R*.085,ot+.016],[rt+.018,.15-R*.085,ot+.016],.003)}if(Wt(A,$n("belt"),_,0,0,0),ee(A,M,0,-.225,.189,.054,.043,.014),l){Wt(A,$n("robe"),g,0,0,0);for(let R of[-1,1])ie(A,n?tt.gold:tt.rope,[R*.19,.26,.12],[R*.025,-.16,.181],.017);i==="sejong"&&ee(A,tt.gold,0,.02,.184,.117,.138,.016)}if(!l){Wt(A,$n("tasset"),p,0,0,0);for(let R of[-1,1]){for(let O=0;O<3;O++)for(let G=0;G<3;G++){let rt=R*(.17+G*.25),ot=-.3-O*.074,kt=Math.sin(rt)*.25,Ht=Math.cos(rt)*(.19+O*.009),$t=Wt(A,"bevel",M,kt,ot,Ht+.011,.055,.008,.012);$t.rotation.y=rt}ie(A,_,[R*.025,-.27,.179],[R*.027,-.5,.207],.009)}}let P=[],N=[],z=[],L=[];for(let R of[-1,1]){let O=new oe;O.position.set(R*.3,.19,-.012),A.add(O),P.push(O),Wt(O,$n("upperSleeve"),g,0,0,0),ee(O,l?g:p,0,.016,-.003,.145,.105,.133);for(let Ht=0;Ht<(l||h?0:3);Ht++){let $t=Wt(O,"bevel",p,R*.022,-.035-Ht*.038,.006,.226,.045,.25);$t.rotation.z=R*.12}let G=new oe;G.position.set(R*.024,-.24,.012),O.add(G),N.push(G),O.userData.elbow=G,Wt(G,$n(l?"wideSleeve":"foreSleeve"),g,0,0,0),l&&ae(G,M,0,-.228,.018,.147,.018);let rt=new oe;rt.position.set(R*.016,-.24,.026),G.add(rt),z.push(rt),ee(rt,b,0,-.012,0,.061,.074,.041);for(let Ht=0;Ht<3;Ht++){let $t=ee(rt,b,(Ht-1)*.027,-.046,.022,.018,.038,.023);$t.rotation.x=-.25}let ot=ee(rt,b,-R*.05,-.017,.025,.022,.043,.025);ot.rotation.z=R*.5;let kt=new oe;kt.position.set(-R*.04,.48,-.038),rt.add(kt),L.push(kt),O.rotation.z=R*.09}let D=new oe;D.position.set(0,1.47,-.012),D.scale.setScalar(.88),e.add(D);let V={ball:ee,box:pe,cylinder:ae,between:ie,mesh:Wt,material:je,MAT:tt};if(Ld(D,i,V),n&&Ud(i,A,P,g,p,V),o&&Od(i,A,g,p,V),n)Nd(D,i,p,V);else if(o)Fd(D,i,p,g,{...V,cone:fn});else if(c&&!l&&!h){ee(D,p,0,.13,-.015,.225,.18,.205),ae(D,M,0,.075,0,.227,.035),pe(D,M,0,.21,.17,.055,.22,.025);for(let R=0;R<10;R++){let O=R*Math.PI/5;ee(D,M,Math.cos(O)*.228,.079,Math.sin(O)*.228,.012)}for(let R of[-1,1]){Wt(D,"bevel",p,R*.2,-.05,-.02,.075,.25,.28);for(let O=0;O<3;O++)pe(D,M,R*.24,.025-O*.065,-.02,.012,.012,.25)}if(n)for(let R=0;R<4;R++){let O=ee(D,tt.red,(R-1.5)*.022,.32+R*.035,-.07-R*.025,.033,.15-R*.012,.045);O.rotation.x=-.35-R*.09}else for(let R of[-1,1])ie(D,M,[R*.08,.2,.12],[R*.25,.43,.11],.025);if(s){for(let O=0;O<3+u%4;O++){let G=(O/(2+u%4)-.5)*2.2;ie(D,tt.gold,[Math.sin(G)*.14,.22,.02],[Math.sin(G)*.4,.32+Math.cos(G)*.22,.05],.022)}let R=new oe;pe(R,g,0,1.07,-.27,.32,.64,.035),ie(R,tt.woodDark,[0,.25,-.27],[0,1.47,-.27],.018),pe(R,tt.gold,0,1.09,-.245,.12,.13,.02),D.add(R)}}else if(i==="sejong"){Wt(D,"bevel",tt.black,0,.21,-.03,.35,.32,.31);for(let R of[-1,1])Wt(D,"bevel",tt.black,R*.26,.26,-.06,.23,.06,.13)}else if(i==="dangun"){ee(D,tt.snow,0,.09,-.065,.21,.22,.18),ae(D,tt.gold,0,.2,0,.21,.09);for(let R of[-1,1])fn(D,tt.gold,R*.13,.34,0,.038,.25)}else if(i==="ahn")ae(D,tt.black,0,.2,0,.21,.23),ae(D,tt.black,0,.11,0,.28,.035),pe(D,tt.gold,0,.13,.205,.19,.027,.02),pe(D,tt.woodDark,0,-.085,.16,.13,.02,.018);else if(i==="onmyoji")fn(D,tt.snow,0,.32,0,.19,.45),pe(D,tt.red,0,.31,.13,.045,.34,.025);else if(i==="monk")for(let R=0;R<9;R++){let O=R*Math.PI/8;ee(A,tt.woodDark,Math.cos(O)*.22,.16-Math.sin(O)*.15,.23,.027)}else if(h)if(i==="ninja"){ee(D,g,0,.08,-.02,.215,.19,.195),pe(D,g,0,-.08,.15,.3,.13,.05);for(let R of[-1,1])ee(D,tt.skin,R*.075,.012,.165,.033,.017,.014)}else ee(D,tt.black,0,.12,-.03,.19,.14,.17),ae(D,i==="gwak"?tt.red:tt.rope,0,.08,0,.2,.055),pe(D,g,.16,.04,-.2,.055,.34,.04).rotation.z=-.4;else{fn(D,tt.straw,0,.21,0,.36,.24),ae(D,tt.woodDark,0,.1,0,.34,.025);for(let R=0;R<10;R++){let O=R*Math.PI/5;ie(D,tt.rope,[0,.33,0],[Math.cos(O)*.34,.105,Math.sin(O)*.34],.006)}ie(D,tt.rope,[-.18,.1,.04],[0,-.17,.1],.007),ie(D,tt.rope,[.18,.1,.04],[0,-.17,.1],.007)}let Z=null;if(n||c){let R=new ki(.67,.87,10,12);R.translate(0,-.36,0);let O=R.attributes.position;for(let G=0;G<O.count;G++){let rt=(.075-O.getY(G))/.87,ot=O.getX(G)*(.52+Math.sqrt(Math.max(0,rt))*.48);O.setXYZ(G,ot,O.getY(G)+Math.sin(ot*23)*rt*.016,Math.cos(ot*31)*rt*.018)}R.computeVertexNormals(),Z=Wt(A,R,Vs(n?m[i]:x,"cape"),0,.19,-.225),Z.userData.rest=R.attributes.position.array.slice()}let q=n?Yr[i].attack:i==="teppo"?"gun":["onmyoji","monk"].includes(i)?"orb":i==="drum"?"drum":c||h?"melee":"spear";if(o)Bd(i,A,L,p,{...V,cone:fn});else if(n&&q==="arrow"){for(let ot of L)ot.position.set(0,0,0);let R=pe(A,tt.red,0,-.18,.23,.53,.052,.028);R.rotation.z=-.12,ee(A,M,0,-.18,.26,.075,.055,.025);let O=ae(A,tt.woodDark,.2,-.03,-.25,.09,.47);O.rotation.z=-.17;for(let ot=0;ot<4;ot++){let kt=.16+ot*.025;ie(A,tt.wood,[kt,-.1,-.27],[kt-.04,.43+ot*.018,-.27],.006),Wt(A,"bevel",tt.rope,kt-.04,.39+ot*.018,-.27,.035,.1,.015)}let G=[];for(let ot=0;ot<=20;ot++){let kt=-Math.PI/2+ot*Math.PI/20;G.push(new I(0,Math.sin(kt)*.43,Math.cos(kt)*.15-.15))}let rt=new yn(G);Wt(L[0],new Nn(rt,24,.017,6,!1),tt.wood,0,0,0),ie(L[0],_,[0,-.065,0],[0,.065,0],.023);for(let ot of[-.37,.37])ie(L[0],M,[0,ot-.018,-.073],[0,ot+.018,-.073],.019);L[0].userData.bowTips=[[0,-.43,-.15],[0,.43,-.15]],ie(L[1],tt.wood,[0,0,0],[0,0,.6],.007),fn(L[1],tt.steel,0,0,.64,.021,.08).rotation.x=Math.PI/2;for(let ot of[-1,1])Wt(L[1],"bevel",tt.rope,ot*.018,0,.07,.035,.01,.09).rotation.y=ot*.2;L[1].userData.muzzle=new I(0,0,.68)}else if(q==="gun")if(i==="ahn"){L[1].position.set(0,0,0);let R=ae(L[1],tt.steel,0,.025,.23,.022,.25);R.rotation.x=Math.PI/2;let O=ae(L[1],tt.black,0,.02,.08,.045,.09);O.rotation.x=Math.PI/2;for(let rt=0;rt<6;rt++){let ot=rt*Math.PI/3,kt=ae(L[1],tt.steel,Math.sin(ot)*.037,.02+Math.cos(ot)*.037,.08,.009,.075);kt.rotation.x=Math.PI/2}let G=Wt(L[1],"bevel",tt.woodDark,0,-.045,.02,.052,.11,.065);G.rotation.x=-.25,pe(L[1],tt.black,0,.05,.3,.013,.025,.018),L[1].userData.muzzle=new I(0,.025,.355)}else{let R=ae(L[1],tt.steel,0,-.42,.24,.025,.75);R.rotation.x=Math.PI/2,Wt(L[1],"bevel",tt.woodDark,0,-.49,.04,.07,.14,.11),Wt(L[1],"bevel",tt.black,0,-.42,.1,.075,.065,.25),L[1].userData.muzzle=new I(0,-.42,.615)}else if(q==="orb"||q==="lightning"){ie(L[1],tt.wood,[0,-.85,.045],[0,.75,.045],.026),ee(L[1],i==="dangun"?tt.jade:tt.gold,0,.82,.045,.12);let R=je(i==="dangun"?"#a8efe6":"#f6d881",{emissive:i==="dangun"?"#438d9f":"#b28337",emissiveIntensity:.9});if(ee(L[1],R,0,.86,.045,.07),L[1].userData.muzzle=new I(0,.86,.045),i==="onmyoji")for(let O of[-1,1])pe(L[1],tt.snow,O*.12,.57,.045,.11,.33,.02);if(i==="sejong")for(let O of[-1,1]){let G=new oe;G.position.set(O*.064,-.45,.08),G.rotation.z=O*.18,L[0].add(G),Wt(G,"bevel",tt.woodDark,0,-.02,0,.133,.035,.31),pe(G,je("#d5c8a5"),0,.005,0,.12,.015,.29);for(let rt=0;rt<4;rt++)for(let ot=0;ot<2;ot++)pe(G,je("#72644e"),O*(ot-.5)*.025,.015,(rt-1.5)*.048,.013,.003,.025)}if(i==="eulji")for(let O of[-1,1])ie(L[1],M,[0,.75,.045],[O*.14,.94,.045],.022);if(i==="dangun"){for(let O of[.57,.69,.81]){let G=ae(L[1],M,0,O,.045,.105,.018);G.rotation.x=Math.PI/2}for(let O of[-1,1])ie(L[1],tt.rope,[O*.08,.6,.045],[O*.11,.36,.045],.006),ee(L[1],tt.jade,O*.11,.35,.045,.026,.045,.018)}}else if(q==="drum"){let R=ae(A,tt.wood,0,-.06,.34,.24,.3);R.rotation.x=Math.PI/2;for(let O of[.18,.51])ae(A,tt.rope,0,-.06,O,.245,.025).rotation.x=Math.PI/2;for(let O of L)ie(O,tt.wood,[0,-.48,.04],[0,-.15,.4],.018)}else if(q==="melee"){let R=Wt(L[1],Jr(),tt.steel,0,-.52,.03);if(R.rotation.z=-.12,ie(L[1],_,[0,-.48,.03],[0,-.35,.03],.024),ee(L[1],M,0,-.35,.03,.033),Wt(L[1],"bevel",M,0,-.52,.03,.18,.035,.07),["gang","gwon","guard","elite","armored"].includes(i)){if(i==="gwon"){let O=new Xn;O.moveTo(-.21,.29),O.quadraticCurveTo(0,.36,.21,.29),O.lineTo(.2,-.2),O.quadraticCurveTo(0,-.34,-.2,-.2),O.closePath();let G=new ri(O,{depth:.055,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:2,curveSegments:10});Wt(L[0],G,tt.wood,-.04,-.45,.14);for(let rt of[-.18,0,.18])pe(L[0],tt.steel,-.04+rt,-.43,.21,.025,.51,.015);for(let rt of[-.67,-.22])pe(L[0],M,-.04,rt,.22,.35,.025,.015)}else ee(L[0],p,-.04,-.45,.16,.205,.285,.065);ee(L[0],M,-.04,-.45,.225,.07,.07,.025),ie(L[0],M,[-.04,-.69,.218],[-.04,-.21,.218],.013),ie(L[0],M,[-.21,-.45,.218],[.13,-.45,.218],.013)}}else ie(L[1],tt.wood,[0,-.85,.045],[0,.8,.045],.018),fn(L[1],tt.steel,0,.93,.045,.07,.3);for(let R=0;R<2;R++)a&&(Ge(v[R]),C[R].remove(v[R])),Ge(C[R]),T[R].remove(C[R]),Ge(T[R]),T[R].add(C[R]),a&&C[R].add(v[R]),Ge(L[R]),z[R].remove(L[R]),Ge(z[R]),z[R].add(L[R]),N[R].remove(z[R]),Ge(N[R]),N[R].add(z[R]),P[R].remove(N[R]),Ge(P[R]),P[R].add(N[R]);Ge(D);for(let R of P)A.remove(R);Z&&A.remove(Z),Ge(A);for(let R of P)A.add(R);Z&&A.add(Z);let st=n&&q==="arrow"?Array.from({length:2},()=>ae(e,tt.rope,0,1,0,.0045,.43)):null;if(n||o){let R=Os[i]??o;e.scale.fromArray(R.body),D.scale.set(.88/R.body[0],.88/R.body[1],.88/R.body[2])}return t.scale.setScalar(n?1.02:o?.scale??(i==="armored"?1.04:c?.9:.82)),t.userData={rig:e,hips:w,legs:T,knees:C,ankles:v,torso:A,arms:P,elbows:N,wrists:z,weapons:L,head:D,cape:Z,bowStrings:st,hero:n,kind:i,weapon:q,phase:0,costumeMaterials:[g,p]},n?sh(t,0,!1,0):o&&rh(t,0,!1,0),t.userData.labelHeight=new on().setFromObject(t).max.y+.15,t}function ac(i,t,e,n,s){let r=i.userData,o=t*8+r.phase,a=e?.5:0;if(r.vehicle){for(let h of r.wheels)h.rotation.x=t*(e?5:0);r.rig.position.y=Math.sin(t*5)*.007,r.ramBeam&&(r.ramBeam.position.z=Math.sin(ge.clamp(n/.25,0,1)*Math.PI*.8)*.18);return}if(r.rig.position.y=(r.mountOffset??0)+(e?Math.abs(Math.sin(o))*.035:Math.sin(t*2+r.phase)*.012),r.horseLegs)for(let h=0;h<r.horseLegs.length;h++)r.horseLegs[h].rotation.x=Math.sin(o+h%3*Math.PI)*a;r.legs[0].rotation.x=Math.sin(o)*a,r.legs[1].rotation.x=-Math.sin(o)*a;for(let h=0;h<2;h++)r.knees[h].rotation.x=e?Math.max(0,Math.sin(o+h*Math.PI))*.72:.04;let c=ge.clamp(n/.25,0,1),l=Math.sin(t*2.4+r.phase)*.02;for(let h of r.arms)h.rotation.y=0,h.position.z=-.012;for(let h of r.elbows)h.rotation.x=-.18;for(let h of r.wrists)h.rotation.set(0,0,0);if(r.head.rotation.y=l*.8,r.weapon==="arrow"){r.arms[0].rotation.x=-1.12+l,r.arms[0].rotation.y=.25,r.elbows[0].rotation.x=-.05,r.arms[1].rotation.x=-.85+c*.2,r.arms[1].rotation.y=-.48-c*.2,r.arms[1].position.z=-c*.09,r.elbows[1].rotation.x=-.65-c*.3;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-r.arms[h].rotation.x-r.elbows[h].rotation.x;r.torso.rotation.y=-.18-c*.12}else if(r.weapon==="gun"){r.arms[1].rotation.x=-1.36+c*.24,r.arms[0].rotation.x=-1.12+c*.1,r.arms[0].rotation.y=.55,r.elbows[0].rotation.x=-.45,r.elbows[1].rotation.x=-.12;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-(r.arms[h].rotation.x+r.elbows[h].rotation.x)*.92;r.torso.rotation.y=-.13+c*.1}else if(["orb","lightning"].includes(r.weapon)){r.arms[0].rotation.x=r.kind==="sejong"?-.62:-.18+l,r.arms[1].rotation.x=-.24-c*.9,r.arms[1].rotation.y=-c*.3,r.torso.rotation.y=-c*.22,r.elbows[0].rotation.x=r.kind==="sejong"?-.48:-.18,r.elbows[1].rotation.x=-.14-c*.55;for(let h=0;h<2;h++)r.wrists[h].rotation.x=-(r.arms[h].rotation.x+r.elbows[h].rotation.x)*.9}else{let h=Math.sin(c*Math.PI*.85);r.arms[0].rotation.x=-Math.sin(o)*a*.5-h*.3,r.arms[1].rotation.x=Math.sin(o)*a*.5-h*1.65,r.arms[1].rotation.y=-h*.55,r.elbows[0].rotation.x=-.18-h*.13,r.elbows[1].rotation.x=-.18-h*.5,r.wrists[0].rotation.x=-(r.arms[0].rotation.x+r.elbows[0].rotation.x)*.65,r.torso.rotation.y=h*.35}if(r.hero?sh(i,t,e,n):Bn[r.kind]&&rh(i,t,e,n),r.cape){let h=r.cape.geometry.attributes.position,u=r.cape.userData.rest;for(let d=0;d<h.count;d++){let f=u[d*3+1],m=Math.max(0,-f/.8);h.setZ(d,u[d*3+2]-m*.13+Math.sin(t*4+u[d*3]*5+m*4)*m*(e?.09:.04))}h.needsUpdate=!0,r.cape.geometry.computeVertexNormals()}}var lh={yi:[{id:"yi_white",name:"백의종군",price:60,body:"#e9e6dc",sleeve:"#dcd8cc",desc:"벼슬을 잃고도 흰옷으로 싸움터를 지킨 충무공."},{id:"yi_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 두정갑과 전설의 기운."}],sejong:[{id:"sejong_blue",name:"청룡포",price:60,body:"#2d5b8a",sleeve:"#2d5b8a",desc:"푸른 곤룡포를 입은 성군."},{id:"sejong_gold",name:"금빛 전설",price:150,gold:!0,desc:"황금 곤룡포와 전설의 기운."}],eulji:[{id:"eulji_iron",name:"고구려 철기",price:60,body:"#4a4f5c",sleeve:"#5a606e",desc:"개마무사의 검은 쇠비늘 갑옷."},{id:"eulji_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 찰갑과 전설의 기운."}],gang:[{id:"gang_crimson",name:"귀주의 붉은 별",price:60,body:"#8a2a2a",sleeve:"#9a3434",desc:"귀주대첩의 붉은 전포."},{id:"gang_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑주와 전설의 기운."}],gwon:[{id:"gwon_hill",name:"행주 산성",price:60,body:"#556b3a",sleeve:"#62783f",desc:"산성을 지키던 들녘빛 전복."},{id:"gwon_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 갑옷과 전설의 기운."}],gwak:[{id:"gwak_black",name:"흑의 의병",price:60,body:"#2c2b33",sleeve:"#3a3944",desc:"밤을 틈타 기습하던 검은 옷."},{id:"gwak_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 홍의와 전설의 기운."}],ahn:[{id:"ahn_militia",name:"대한의군 군복",price:60,body:"#4a5a3a",sleeve:"#3e4c30",desc:"연해주 의병 부대의 국방색 군복."},{id:"ahn_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 외투와 전설의 기운."}],dangun:[{id:"dangun_sky",name:"천제의 푸른 옷",price:60,body:"#3a6a9a",sleeve:"#4a7aaa",desc:"하늘에서 내려온 환웅의 푸른 옷."},{id:"dangun_gold",name:"금빛 전설",price:150,gold:!0,desc:"금빛 신의(神衣)와 전설의 기운."}]},Vd={body:"#caa12a",sleeve:"#b8901f",boots:"#5a3a14"};function Gd(i,t){return t&&(lh[i]||[]).find(e=>e.id===t)||null}function Hd(i,t,e,n=.22){let s=new oe;s.position.set(t,n,e),i.add(s),ae(s,tt.woodDark,0,0,0,n,.08).rotation.z=Math.PI/2,ae(s,tt.steel,t<0?-.05:.05,0,0,n*.78,.025).rotation.z=Math.PI/2;for(let r=0;r<4;r++){let o=r*Math.PI/4;ie(s,tt.wood,[0,Math.sin(o)*n,Math.cos(o)*n],[0,-Math.sin(o)*n,-Math.cos(o)*n],.02)}return Ge(s)}function kx(i){let t=new oe,e=new oe,n=[];t.add(e);let s=null;if(i==="wall"){for(let r=0;r<7;r++){let o=(r-3)*.18;ie(e,tt.woodDark,[o,.04,0],[o,.85,.15],.06),fn(e,tt.wood,o,.94,.17,.065,.22)}for(let r of[.25,.65])pe(e,tt.wood,0,r,.04,1.34,.08,.1)}else if(i==="ram"){for(let o of[-.45,.45])for(let a of[-.57,.57])n.push(Hd(t,o,a));pe(e,tt.woodDark,0,.38,0,.76,.16,1.4);for(let o of[-.33,.33])for(let a of[-.5,.5])ie(e,tt.wood,[o,.4,a],[o,1.25,a],.045);s=new oe,e.add(s);let r=ae(s,tt.wood,0,.75,.12,.17,1.8);r.rotation.x=Math.PI/2,ee(s,tt.steel,0,.75,1.05,.21,.2,.2);for(let o of[-.58,-.28,.38,.76])ae(s,tt.steel,0,.75,o,.179,.055).rotation.x=Math.PI/2;for(let o of[-1,1])pe(s,tt.steel,o*.1,.75,1.17,.055,.21,.08);for(let o of[-.45,.45])ie(e,tt.rope,[0,1.3,o],[0,.8,o],.016);for(let o of[-1,1]){let a=pe(e,tt.woodDark,o*.25,1.3,0,.61,.08,1.65);a.rotation.z=o*-.36}for(let o=0;o<4;o++)pe(e,tt.steel,0,1.4,(o-1.5)*.42,.74,.055,.07);for(let o of[-1,1])for(let a=0;a<7;a++){let c=Wt(e,"bevel",tt.wood,o*.25,1.31,(a-3)*.23,.6,.045,.21);c.rotation.z=-o*.36;for(let l of[-.55,.55])ee(e,tt.steel,o*.48,.38+a*.025,l,.016)}}else if(i==="turtle"){Wt(e,"sphere",tt.woodDark,0,.3,0,.66,.27,1.18),pe(e,tt.wood,0,.45,0,1.15,.16,1.85);let r=je("#627878",{roughness:.6,metalness:.25});Wt(e,"sphere",r,0,.69,-.08,.59,.42,.98);for(let o=0;o<5;o++)for(let a=0;a<3;a++){let c=(a-1)*.3,l=(o-2)*.31;fn(e,tt.steel,c,1.06-Math.abs(c)*.3,l,.035,.15)}for(let o of[-1,1])for(let a=0;a<4;a++){let c=(a-1.5)*.4;ie(e,tt.wood,[o*.46,.43,c],[o*.95,.12,c-.3],.025),pe(e,tt.woodDark,o*.96,.12,c-.3,.13,.035,.23),ae(e,tt.black,o*.57,.49,c,.055,.12).rotation.z=Math.PI/2}ie(e,tt.wood,[0,.53,.74],[0,.73,1.28],.12),ee(e,tt.gold,0,.78,1.25,.16,.14,.22),fn(e,tt.gold,0,.91,1.16,.055,.16);for(let o of[-1,1])ee(e,tt.red,o*.11,.83,1.38,.025);pe(e,tt.black,0,.75,1.45,.1,.07,.03),ie(e,tt.woodDark,[0,.85,-.55],[0,1.75,-.55],.025),pe(e,tt.red,.18,1.57,-.55,.36,.32,.025),pe(e,tt.gold,.18,1.57,-.53,.08,.14,.015)}else{pe(e,tt.wood,0,.4,0,.65,.25,1.15);for(let r of[-.4,.4])for(let o of[-.4,.4])n.push(Hd(t,r,o,.18));for(let r=0;r<3;r++)ee(e,tt.rope,0,.65,(r-1)*.3,.28,.2,.18)}return s&&(e.remove(s),Ge(s)),Ge(e),s&&e.add(s),t.userData={rig:e,wheels:n,ramBeam:s,vehicle:i,kind:i,phase:0,labelHeight:i==="wall"?1.35:i==="turtle"?1.95:1.7},t}function hh(i,t=null){if(["ram","wall","turtle","courier"].includes(i))return kx(i);let e=kd(i),n=Gd(i,t);if(n){let s=n.gold?Vd:n,r=new Set(e.userData.costumeMaterials),o=new Map;if(e.traverse(a=>{if(!(!a.isMesh||!r.has(a.material))){if(!o.has(a.material)){let c=a.material.clone();c.color.set(s.body),c.userData.owned3d=!0,n.gold&&(c.metalness=.62,c.roughness=.4),o.set(a.material,c)}a.material=o.get(a.material)}}),e.userData.cape){let a=e.userData.cape.material.clone();a.color.set(s.sleeve||s.body),a.userData.owned3d=!0,e.userData.cape.material=a}e.userData.skin=n.id}if(i==="cavalry"){let s=new oe,r=[],o=[],a=[];e.add(s);let c=je("#70523c",{roughness:.95}),l=je("#342e29",{roughness:.96});Wt(s,"sphere",c,0,.73,0,.285,.285,.55);for(let u of[-.31,.3])Wt(s,"sphere",c,0,.72,u,.275,.27,.25);let h=ae(s,c,0,.97,.35,.145,.5);h.rotation.x=.36,Wt(s,"sphere",c,0,1.19,.49,.145,.175,.235),Wt(s,"sphere",c,0,1.12,.67,.11,.105,.19);for(let u of[-1,1]){let d=fn(s,c,u*.085,1.39,.42,.042,.17);d.rotation.z=-u*.16,ee(s,tt.black,u*.135,1.23,.53,.019,.017,.012),ee(s,tt.black,u*.086,1.14,.78,.018,.012,.009),ie(s,tt.woodDark,[u*.13,1.27,.43],[u*.115,1.1,.65],.012),ie(s,tt.rope,[u*.11,1.1,.65],[u*.09,1.16,.77],.009);for(let f=0;f<5;f++)ee(s,l,u*.025,1.24-f*.075,.32-f*.025,.05,.085,.045)}ie(s,tt.woodDark,[-.11,1.1,.65],[.11,1.1,.65],.016);for(let u=0;u<3;u++)ie(s,l,[(u-1)*.03,.77,-.46],[(u-1)*.04,.28,-.72],.028);Wt(s,"bevel",tt.red,0,.93,-.02,.52,.08,.56),Wt(s,"bevel",tt.woodDark,0,.99,-.04,.36,.095,.36);for(let u of[-.21,.15])ee(s,tt.woodDark,0,1.02,u,.22,.085,.045);for(let u of[-1,1])ie(s,tt.woodDark,[u*.25,.93,0],[u*.29,.57,0],.014),Wt(s,"bevel",tt.steel,u*.29,.56,.01,.12,.025,.15);for(let u of[-.19,.19])for(let d of[-.36,.36]){let f=new oe,m=new oe,x=new oe;f.position.set(u,.575,d),s.add(f),r.push(f),m.position.y=-.27,f.add(m),o.push(m),x.position.set(0,-.27,.02),m.add(x),a.push(x),ae(f,c,0,-.13,0,.059,.27),ee(f,c,0,-.24,.008,.062,.065,.058),ae(m,c,0,-.13,.012,.041,.27),Wt(x,"bevel",l,0,0,.025,.135,.11,.17),Ge(x),m.remove(x),Ge(m),m.add(x),f.remove(m),Ge(f),f.add(m)}for(let u of r)s.remove(u);Ge(s);for(let u of r)s.add(u);e.userData.horseLegs=r,e.userData.horseKnees=o,e.userData.horseHooves=a,e.userData.horseReins=Array.from({length:2},()=>ae(e,tt.woodDark,0,1,0,.007,.7)),e.userData.mountOffset=.72,ac(e,0,!1,0,0),e.userData.labelHeight=new on().setFromObject(e).max.y+.15}return e}var Ce=i=>document.getElementById(i),We=new Ka({canvas:Ce("hero-canvas"),antialias:!0,alpha:!0});We.setPixelRatio(Math.min(devicePixelRatio,1.5));We.outputColorSpace=Ae;We.toneMapping=Nr;We.toneMappingExposure=1.08;var Wd=new ec,Xd=new Ls(We),Vx=Xd.fromScene(Wd,.04);Wd.dispose();Xd.dispose();var ci=new Bi;ci.environment=Vx.texture;ci.environmentIntensity=.32;var qd=new Cr("#d8e6ed","#6a675a",1.35);ci.add(qd);var dh=new Ts("#ffe6c0",2.2);dh.position.set(-3,6,5);ci.add(dh);var fh=new Ts("#92bdd7",.8);fh.position.set(5,2,-3);ci.add(fh);var ph=new fe(new Mi(.83,.88,.07,36),tt.stoneDark);ph.position.y=-.04;ci.add(ph);var Ii=new Ti(-1,1,1,-1,.1,30),hc=[],Gx={yi:"날렵한 갑옷 · 조선 투구 · 안정된 활 자세",sejong:"둥근 얼굴 · 익선관 · 펼친 책",eulji:"긴 얼굴 · 날개 장식 투구 · 지휘 지팡이",gang:"노장 얼굴 · 낮은 투구 · 검과 방패",gwon:"넓은 체형 · 목재 방패 · 무거운 수비 자세",gwak:"가벼운 체형 · 상투와 홍건 · 빠른 걸음",ahn:"가르마 머리 · 긴 외투 · 한 손 권총",dangun:"긴 백발 · 옥 관식 · 천부인 지팡이"};for(let[i,t]of Object.entries(Yr)){let e=document.createElement("article");e.dataset.hero=i,e.innerHTML=`<div class="viewport"></div><div class="info"><b>${t.name}</b><p>${Gx[i]}</p></div>`,Ce("hero-review").append(e);let n=hh(i);hc.push({kind:i,root:n,viewport:e.querySelector(".viewport")})}function Hx(){let i=Ce("outfit").value;for(let t of hc){let e=new Set,n=new Set;t.root.traverse(r=>{r.geometry?.userData.owned3d&&e.add(r.geometry),r.material?.userData.owned3d&&n.add(r.material)}),t.root.userData.cape&&e.add(t.root.userData.cape.geometry);for(let r of e)r.dispose();for(let r of n)r.dispose();let s=i==="base"?null:lh[t.kind].find(r=>!!r.gold==(i==="gold"));t.root=hh(t.kind,s?.id),t.viewport.closest("article").dataset.skin=s?.id??"base"}qi()}function Wx(){let i=Ce("lighting").value;dh.color.set(i==="warm"?"#ffc78e":i==="cool"?"#b8d4fa":"#ffe6c0"),fh.color.set(i==="warm"?"#bfc8cc":i==="cool"?"#819ec9":"#92bdd7"),qd.color.set(i==="warm"?"#eddfca":i==="cool"?"#bacfe5":"#d8e6ed"),qi()}var mn=!1,cc=.3,lc=0,Xx=0,uh=0;function jr(i=0){mn&&lc&&(cc+=Math.min(.05,(i-lc)/1e3)),lc=i;let t=innerWidth,e=innerHeight,n=Ce("focus").value==="face",s=Ce("motion").value,r=Ce("angle").value,o=cc%1.3,a=s==="attack"?mn?Math.max(0,.25-o):.25*(1-Number(Ce("scrub").value)/100):0;Ce("scrub-label").hidden=s!=="attack",Ce("scrub").disabled=mn,Ce("progress").value=`${mn?Math.min(100,Math.round(o/.25*100)):Ce("scrub").value}%`,We.setSize(t,e,!1),We.setScissorTest(!1),We.setClearColor(0,0),We.clear(),We.setScissorTest(!0),ph.visible=!n;let c=0,l=0;for(let{root:h,viewport:u}of hc){let d=u.getBoundingClientRect();if(d.bottom<0||d.top>e)continue;h.rotation.y=r==="turn"?cc*.45:r==="front"?0:r==="back"?Math.PI:.36,ac(h,cc,s==="walk",a,1/60);let f=n?h.userData.head.getWorldPosition(new I).add(new I(0,.02,.035)):new I(0,1.36,0),m=n?.48:1.52;Ii.position.copy(f).add(new I(0,n?.1:.85,5)),Ii.lookAt(f),Ii.left=-m*d.width/d.height,Ii.right=m*d.width/d.height,Ii.top=m,Ii.bottom=-m,Ii.updateProjectionMatrix(),We.setViewport(d.left,e-d.bottom,d.width,d.height),We.setScissor(d.left,e-d.bottom,d.width,d.height),ci.add(h),We.render(ci,Ii),l+=We.info.render.triangles,ci.remove(h),c++}document.body.dataset.frames=++Xx,document.body.dataset.motion=s,document.body.dataset.playing=String(mn),document.body.dataset.heroCount=hc.length,document.body.dataset.renderer="webgl2",document.body.dataset.outfit=Ce("outfit").value,document.body.dataset.lighting=Ce("lighting").value,Ce("status").value=`표시 중 ${c}명 · ${l.toLocaleString("ko-KR")} 삼각형 · ${mn?"재생 중":"정지 화면"}`,document.body.dataset.textures=We.info.memory.textures,document.body.dataset.geometries=We.info.memory.geometries,document.body.dataset.programs=We.info.programs.length,mn&&(uh=requestAnimationFrame(jr))}function qi(){mn||jr()}for(let i of["focus","angle","motion"])Ce(i).addEventListener("change",qi);Ce("outfit").addEventListener("change",Hx);Ce("lighting").addEventListener("change",Wx);Ce("scrub").addEventListener("input",qi);Ce("play").onclick=()=>{mn=!mn,Ce("play").textContent=mn?"동작 멈춤":"동작 재생",Ce("play").setAttribute("aria-pressed",String(mn)),lc=0,mn?uh=requestAnimationFrame(jr):(cancelAnimationFrame(uh),jr())};addEventListener("resize",qi);addEventListener("scroll",qi,{passive:!0});Id(qi);jr();
/*! For license information please see hero-review.js.LEGAL.txt */
