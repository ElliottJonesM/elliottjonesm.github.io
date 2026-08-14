(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="165",Ii={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Pa=1,$u=2,Ul=1,Ol=2,Fn=3,Vn=0,qt=1,vn=2,si=0,Qi=1,Da=2,Na=3,Ua=4,Ju=5,xi=100,Qu=101,eh=102,th=103,nh=104,ih=200,rh=201,sh=202,oh=203,Vo=204,Wo=205,ah=206,ch=207,lh=208,uh=209,hh=210,dh=211,fh=212,ph=213,mh=214,gh=0,_h=1,vh=2,Is=3,Sh=4,xh=5,Mh=6,Eh=7,Fl=0,yh=1,Th=2,oi=0,Ah=1,bh=2,wh=3,Bl=4,Rh=5,Ch=6,Lh=7,Oa="attached",Ih="detached",kl=300,rr=301,sr=302,Xo=303,Ko=304,Hs=306,or=1e3,xn=1001,Ps=1002,Xt=1003,Hl=1004,Lr=1005,It=1006,Rs=1007,Mn=1008,ai=1009,Ph=1010,Dh=1011,Ds=1012,zl=1013,ar=1014,$t=1015,ii=1016,Gl=1017,Vl=1018,cr=1020,Nh=35902,Uh=1021,Oh=1022,rn=1023,Fh=1024,Bh=1025,er=1026,lr=1027,la=1028,Wl=1029,kh=1030,Xl=1031,Kl=1033,js=33776,Zs=33777,$s=33778,Js=33779,Fa=35840,Ba=35841,ka=35842,Ha=35843,za=36196,Ga=37492,Va=37496,Wa=37808,Xa=37809,Ka=37810,Ya=37811,qa=37812,ja=37813,Za=37814,$a=37815,Ja=37816,Qa=37817,ec=37818,tc=37819,nc=37820,ic=37821,Qs=36492,rc=36494,sc=36495,Hh=36283,oc=36284,ac=36285,cc=36286,Fr=2300,Br=2301,eo=2302,lc=2400,uc=2401,hc=2402,zh=2500,Gh=0,Yl=1,Yo=2,Vh=3200,Wh=3201,ql=0,Xh=1,kn="",Gt="srgb",bt="srgb-linear",ua="display-p3",zs="display-p3-linear",Ns="linear",mt="srgb",Us="rec709",Os="p3",Di=7680,dc=519,Kh=512,Yh=513,qh=514,jl=515,jh=516,Zh=517,$h=518,Jh=519,qo=35044,fc="300 es",zn=2e3,Fs=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Pr=Math.PI/180,ur=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function ha(i,e){return(i%e+e)%e}function Qh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ed(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function td(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function nd(i,e=1){return e-Math.abs(ha(i,e*2)-e)}function id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function od(i,e){return i+Math.random()*(e-i)}function ad(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ld(i){return i*Pr}function ud(i){return i*ur}function hd(i){return(i&i-1)===0&&i!==0}function dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pd(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),S=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*S,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*S,a*l);break;case"ZYZ":i.set(c*S,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ei={DEG2RAD:Pr,RAD2DEG:ur,generateUUID:dn,clamp:Lt,euclideanModulo:ha,mapLinear:Qh,inverseLerp:ed,lerp:Dr,damp:td,pingpong:nd,smoothstep:id,smootherstep:rd,randInt:sd,randFloat:od,randFloatSpread:ad,seededRandom:cd,degToRad:ld,radToDeg:ud,isPowerOfTwo:hd,ceilPowerOfTwo:dd,floorPowerOfTwo:fd,setQuaternionFromProperEuler:pd,normalize:ut,denormalize:hn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,r,s,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],S=n[8],x=r[0],g=r[3],m=r[6],w=r[1],A=r[4],R=r[7],H=r[2],N=r[5],I=r[8];return s[0]=o*x+a*w+c*H,s[3]=o*g+a*A+c*N,s[6]=o*m+a*R+c*I,s[1]=l*x+u*w+h*H,s[4]=l*g+u*A+h*N,s[7]=l*m+u*R+h*I,s[2]=f*x+p*w+S*H,s[5]=f*g+p*A+S*N,s[8]=f*m+p*R+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,S=t*h+n*f+r*p;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/S;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new $e;function Zl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){const i=kr("canvas");return i.style.display="block",i}const mc={};function da(i){i in mc||(mc[i]=!0,console.warn(i))}function gd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const gc=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_c=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[bt]:{transfer:Ns,primaries:Us,toReference:i=>i,fromReference:i=>i},[Gt]:{transfer:mt,primaries:Us,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zs]:{transfer:Ns,primaries:Os,toReference:i=>i.applyMatrix3(_c),fromReference:i=>i.applyMatrix3(gc)},[ua]:{transfer:mt,primaries:Os,toReference:i=>i.convertSRGBToLinear().applyMatrix3(_c),fromReference:i=>i.applyMatrix3(gc).convertLinearToSRGB()}},_d=new Set([bt,zs]),ot={enabled:!0,_workingColorSpace:bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_d.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=$r[e].toReference,r=$r[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===kn?Ns:$r[i].transfer}};function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=kr("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sd=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(io(r[o].image)):s.push(io(r[o]))}else s=io(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class Pt extends Ri{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=xn,r=xn,s=It,o=Mn,a=rn,c=ai,l=Pt.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=dn(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=kl;Pt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],S=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(S-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(S+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,R=(p+1)/2,H=(m+1)/2,N=(u+f)/4,I=(h+x)/4,z=(S+g)/4;return A>R&&A>H?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=N/n,s=I/n):R>H?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=N/r,s=z/r):H<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),n=I/s,r=z/s),this.set(n,r,s,t),this}let w=Math.sqrt((g-S)*(g-S)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-S)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((l+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Md{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jl extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],S=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=S,e[t+3]=x;return}if(h!==x||c!==f||l!==p||u!==S){let g=1-a;const m=c*f+l*p+u*S+h*x,w=m>=0?1:-1,A=1-m*m;if(A>Number.EPSILON){const H=Math.sqrt(A),N=Math.atan2(H,m*w);g=Math.sin(g*N)/H,a=Math.sin(a*N)/H}const R=a*w;if(c=c*g+f*R,l=l*g+p*R,u=u*g+S*R,h=h*g+x*R,g===1-a){const H=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=H,l*=H,u*=H,h*=H}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],S=s[o+3];return e[t]=a*S+u*h+c*p-l*f,e[t+1]=c*S+u*f+l*h-a*p,e[t+2]=l*S+u*p+a*f-c*h,e[t+3]=u*S-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),p=c(r/2),S=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*S,this._y=l*p*h-f*u*S,this._z=l*u*S+f*p*h,this._w=l*u*h-f*p*S;break;case"YXZ":this._x=f*u*h+l*p*S,this._y=l*p*h-f*u*S,this._z=l*u*S-f*p*h,this._w=l*u*h+f*p*S;break;case"ZXY":this._x=f*u*h-l*p*S,this._y=l*p*h+f*u*S,this._z=l*u*S+f*p*h,this._w=l*u*h-f*p*S;break;case"ZYX":this._x=f*u*h-l*p*S,this._y=l*p*h+f*u*S,this._z=l*u*S-f*p*h,this._w=l*u*h+f*p*S;break;case"YZX":this._x=f*u*h+l*p*S,this._y=l*p*h+f*u*S,this._z=l*u*S-f*p*h,this._w=l*u*h-f*p*S;break;case"XZY":this._x=f*u*h-l*p*S,this._y=l*p*h-f*u*S,this._z=l*u*S+f*p*h,this._w=l*u*h+f*p*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new F,vc=new yn;class Xn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Qr.subVectors(this.max,Mr),Ui.subVectors(e.a,Mr),Oi.subVectors(e.b,Mr),Fi.subVectors(e.c,Mr),Kn.subVectors(Oi,Ui),Yn.subVectors(Fi,Oi),di.subVectors(Ui,Fi);let t=[0,-Kn.z,Kn.y,0,-Yn.z,Yn.y,0,-di.z,di.y,Kn.z,0,-Kn.x,Yn.z,0,-Yn.x,di.z,0,-di.x,-Kn.y,Kn.x,0,-Yn.y,Yn.x,0,-di.y,di.x,0];return!so(t,Ui,Oi,Fi,Qr)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Ui,Oi,Fi,Qr))?!1:(es.crossVectors(Kn,Yn),t=[es.x,es.y,es.z],so(t,Ui,Oi,Fi,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new F,new F,new F,new F,new F,new F,new F,new F],on=new F,Jr=new Xn,Ui=new F,Oi=new F,Fi=new F,Kn=new F,Yn=new F,di=new F,Mr=new F,Qr=new F,es=new F,fi=new F;function so(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fi.fromArray(i,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const yd=new Xn,Er=new F,oo=new F;class An{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(oo)),this.expandByPoint(Er.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new F,ao=new F,ts=new F,qn=new F,co=new F,ns=new F,lo=new F;class Hr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ao.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ao);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ts),a=qn.dot(this.direction),c=-qn.dot(ts),l=qn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,S;if(u>0)if(h=o*c-a,f=o*a-c,S=s*u,h>=0)if(f>=-S)if(f<=S){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-S?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=S?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ao).addScaledVector(ts,f),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,r,s){co.subVectors(t,e),ns.subVectors(n,e),lo.crossVectors(co,ns);let o=this.direction.dot(lo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const c=a*this.direction.dot(ns.crossVectors(qn,ns));if(c<0)return null;const l=a*this.direction.dot(co.cross(qn));if(l<0||c+l>o)return null;const u=-a*qn.dot(lo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,s,o,a,c,l,u,h,f,p,S,x,g){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,f,p,S,x,g)}set(e,t,n,r,s,o,a,c,l,u,h,f,p,S,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=S,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,S=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+S*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=S+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,S=l*u,x=l*h;t[0]=f+x*a,t[4]=S*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-S,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,S=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=S+p*a,t[1]=p+S*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,p=o*h,S=a*u,x=a*h;t[0]=c*u,t[4]=S*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-S,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,S=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=S*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+S,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,p=o*l,S=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-S,t[2]=S*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Td,e,Ad)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),jn.crossVectors(n,jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),jn.crossVectors(n,jt)),jn.normalize(),is.crossVectors(jt,jn),r[0]=jn.x,r[4]=is.x,r[8]=jt.x,r[1]=jn.y,r[5]=is.y,r[9]=jt.y,r[2]=jn.z,r[6]=is.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],S=n[2],x=n[6],g=n[10],m=n[14],w=n[3],A=n[7],R=n[11],H=n[15],N=r[0],I=r[4],z=r[8],b=r[12],T=r[1],U=r[5],Z=r[9],K=r[13],ne=r[2],ie=r[6],Q=r[10],re=r[14],ee=r[3],Me=r[7],Te=r[11],Ae=r[15];return s[0]=o*N+a*T+c*ne+l*ee,s[4]=o*I+a*U+c*ie+l*Me,s[8]=o*z+a*Z+c*Q+l*Te,s[12]=o*b+a*K+c*re+l*Ae,s[1]=u*N+h*T+f*ne+p*ee,s[5]=u*I+h*U+f*ie+p*Me,s[9]=u*z+h*Z+f*Q+p*Te,s[13]=u*b+h*K+f*re+p*Ae,s[2]=S*N+x*T+g*ne+m*ee,s[6]=S*I+x*U+g*ie+m*Me,s[10]=S*z+x*Z+g*Q+m*Te,s[14]=S*b+x*K+g*re+m*Ae,s[3]=w*N+A*T+R*ne+H*ee,s[7]=w*I+A*U+R*ie+H*Me,s[11]=w*z+A*Z+R*Q+H*Te,s[15]=w*b+A*K+R*re+H*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],S=e[3],x=e[7],g=e[11],m=e[15];return S*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*p-n*c*p)+x*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+g*(+t*l*h-t*a*p-s*o*h+n*o*p+s*a*u-n*l*u)+m*(-r*a*u-t*c*h+t*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],S=e[12],x=e[13],g=e[14],m=e[15],w=h*g*l-x*f*l+x*c*p-a*g*p-h*c*m+a*f*m,A=S*f*l-u*g*l-S*c*p+o*g*p+u*c*m-o*f*m,R=u*x*l-S*h*l+S*a*p-o*x*p-u*a*m+o*h*m,H=S*h*c-u*x*c-S*a*f+o*x*f+u*a*g-o*h*g,N=t*w+n*A+r*R+s*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=w*I,e[1]=(x*f*s-h*g*s-x*r*p+n*g*p+h*r*m-n*f*m)*I,e[2]=(a*g*s-x*c*s+x*r*l-n*g*l-a*r*m+n*c*m)*I,e[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*p-n*c*p)*I,e[4]=A*I,e[5]=(u*g*s-S*f*s+S*r*p-t*g*p-u*r*m+t*f*m)*I,e[6]=(S*c*s-o*g*s-S*r*l+t*g*l+o*r*m-t*c*m)*I,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*I,e[8]=R*I,e[9]=(S*h*s-u*x*s-S*n*p+t*x*p+u*n*m-t*h*m)*I,e[10]=(o*x*s-S*a*s+S*n*l-t*x*l-o*n*m+t*a*m)*I,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*p-t*a*p)*I,e[12]=H*I,e[13]=(u*x*r-S*h*r+S*n*f-t*x*f-u*n*g+t*h*g)*I,e[14]=(S*a*r-o*x*r-S*n*c+t*x*c+o*n*g-t*a*g)*I,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,S=s*h,x=o*u,g=o*h,m=a*h,w=c*l,A=c*u,R=c*h,H=n.x,N=n.y,I=n.z;return r[0]=(1-(x+m))*H,r[1]=(p+R)*H,r[2]=(S-A)*H,r[3]=0,r[4]=(p-R)*N,r[5]=(1-(f+m))*N,r[6]=(g+w)*N,r[7]=0,r[8]=(S+A)*I,r[9]=(g-w)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const o=Bi.set(r[4],r[5],r[6]).length(),a=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const l=1/s,u=1/o,h=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=zn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let p,S;if(a===zn)p=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Fs)p=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=zn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*l,p=(n+r)*u;let S,x;if(a===zn)S=(o+s)*h,x=-2*h;else if(a===Fs)S=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new F,an=new Je,Td=new F(0,0,0),Ad=new F(1,1,1),jn=new F,is=new F,jt=new F,Sc=new Je,xc=new yn;class Tn{constructor(e=0,t=0,n=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bd=0;const Mc=new F,ki=new yn,Dn=new Je,rs=new F,yr=new F,wd=new F,Rd=new yn,Ec=new F(1,0,0),yc=new F(0,1,0),Tc=new F(0,0,1),Ac={type:"added"},Cd={type:"removed"},Hi={type:"childadded",child:null},uo={type:"childremoved",child:null};class St extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new F,t=new Tn,n=new yn,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new $e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(yr,rs,this.up):Dn.lookAt(rs,yr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cd),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ac),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),S=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new F(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new F,Nn=new F,ho=new F,Un=new F,zi=new F,Gi=new F,bc=new F,fo=new F,po=new F,mo=new F;class Sn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){cn.subVectors(r,t),Nn.subVectors(n,t),ho.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Nn),c=cn.dot(ho),l=Nn.dot(Nn),u=Nn.dot(ho),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,S=(o*u-a*c)*f;return s.set(1-p-S,S,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),Nn.subVectors(e,t),cn.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),cn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;zi.subVectors(r,n),Gi.subVectors(s,n),fo.subVectors(e,n);const c=zi.dot(fo),l=Gi.dot(fo);if(c<=0&&l<=0)return t.copy(n);po.subVectors(e,r);const u=zi.dot(po),h=Gi.dot(po);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(zi,o);mo.subVectors(e,s);const p=zi.dot(mo),S=Gi.dot(mo);if(S>=0&&p<=S)return t.copy(s);const x=p*l-c*S;if(x<=0&&l>=0&&S<=0)return a=l/(l-S),t.copy(n).addScaledVector(Gi,a);const g=u*S-p*h;if(g<=0&&h-u>=0&&p-S>=0)return bc.subVectors(s,r),a=(h-u)/(h-u+(p-S)),t.copy(r).addScaledVector(bc,a);const m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(zi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=ha(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=go(o,s,e+1/3),this.g=go(o,s,e),this.b=go(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ot.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Lt(Ot.r*255,0,255))*65536+Math.round(Lt(Ot.g*255,0,255))*256+Math.round(Lt(Ot.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Gt){ot.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,r=Ot.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(ss);const n=Dr(Zn.h,ss.h,t),r=Dr(Zn.s,ss.s,t),s=Dr(Zn.l,ss.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Be;Be.NAMES=eu;let Ld=0;class fn extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Qi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Wo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yi extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hn=Id();function Id(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,r[c]=24,r[c|256]=24):(n[c]=31744,n[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,s[c]=l|u}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Pd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Lt(i,-65504,65504),Hn.floatView[0]=i;const e=Hn.uint32View[0],t=e>>23&511;return Hn.baseTable[t]+((e&8388607)>>Hn.shiftTable[t])}function Dd(i){const e=i>>10;return Hn.uint32View[0]=Hn.mantissaTable[Hn.offsetTable[e]+(i&1023)]+Hn.exponentTable[e],Hn.floatView[0]}const wc={toHalfFloat:Pd,fromHalfFloat:Dd},Tt=new F,os=new Ue;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return da("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class tu extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nu extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nd=0;const en=new Je,_o=new St,Vi=new F,Zt=new Xn,Tr=new Xn,Ct=new F;class bn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?nu:tu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Zt.min,Tr.min),Zt.expandByPoint(Ct),Ct.addVectors(Zt.max,Tr.max),Zt.expandByPoint(Ct)):(Zt.expandByPoint(Tr.min),Zt.expandByPoint(Tr.max))}Zt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ct.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(e,l),Ct.add(Vi)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new F,c[z]=new F;const l=new F,u=new F,h=new F,f=new Ue,p=new Ue,S=new Ue,x=new F,g=new F;function m(z,b,T){l.fromBufferAttribute(n,z),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),f.fromBufferAttribute(s,z),p.fromBufferAttribute(s,b),S.fromBufferAttribute(s,T),u.sub(l),h.sub(l),p.sub(f),S.sub(f);const U=1/(p.x*S.y-S.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(S.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-S.x).multiplyScalar(U),a[z].add(x),a[b].add(x),a[T].add(x),c[z].add(g),c[b].add(g),c[T].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,b=w.length;z<b;++z){const T=w[z],U=T.start,Z=T.count;for(let K=U,ne=U+Z;K<ne;K+=3)m(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const A=new F,R=new F,H=new F,N=new F;function I(z){H.fromBufferAttribute(r,z),N.copy(H);const b=a[z];A.copy(b),A.sub(H.multiplyScalar(H.dot(b))).normalize(),R.crossVectors(N,b);const U=R.dot(c[z])<0?-1:1;o.setXYZW(z,A.x,A.y,A.z,U)}for(let z=0,b=w.length;z<b;++z){const T=w[z],U=T.start,Z=T.count;for(let K=U,ne=U+Z;K<ne;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const S=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,S),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,S=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let m=0;m<u;m++)f[S++]=l[p++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rc=new Je,pi=new Hr,as=new An,Cc=new F,Wi=new F,Xi=new F,Ki=new F,vo=new F,cs=new F,ls=new Ue,us=new Ue,hs=new Ue,Lc=new F,Ic=new F,Pc=new F,ds=new F,fs=new F;class Yt extends St{constructor(e=new bn,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(vo.fromBufferAttribute(h,e),o?cs.addScaledVector(vo,u):cs.addScaledVector(vo.sub(t),u))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(as.containsPoint(pi.origin)===!1&&(pi.intersectSphere(as,Cc)===null||pi.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Rc.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,x=f.length;S<x;S++){const g=f[S],m=o[g.materialIndex],w=Math.max(g.start,p.start),A=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let R=w,H=A;R<H;R+=3){const N=a.getX(R),I=a.getX(R+1),z=a.getX(R+2);r=ps(this,m,e,n,l,u,h,N,I,z),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=S,m=x;g<m;g+=3){const w=a.getX(g),A=a.getX(g+1),R=a.getX(g+2);r=ps(this,o,e,n,l,u,h,w,A,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let S=0,x=f.length;S<x;S++){const g=f[S],m=o[g.materialIndex],w=Math.max(g.start,p.start),A=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let R=w,H=A;R<H;R+=3){const N=R,I=R+1,z=R+2;r=ps(this,m,e,n,l,u,h,N,I,z),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=S,m=x;g<m;g+=3){const w=g,A=g+1,R=g+2;r=ps(this,o,e,n,l,u,h,w,A,R),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Ud(i,e,t,n,r,s,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Vn,a),c===null)return null;fs.copy(a),fs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fs);return l<t.near||l>t.far?null:{distance:l,point:fs.clone(),object:i}}function ps(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,Ki);const u=Ud(i,e,t,n,Wi,Xi,Ki,ds);if(u){r&&(ls.fromBufferAttribute(r,a),us.fromBufferAttribute(r,c),hs.fromBufferAttribute(r,l),u.uv=Sn.getInterpolation(ds,Wi,Xi,Ki,ls,us,hs,new Ue)),s&&(ls.fromBufferAttribute(s,a),us.fromBufferAttribute(s,c),hs.fromBufferAttribute(s,l),u.uv1=Sn.getInterpolation(ds,Wi,Xi,Ki,ls,us,hs,new Ue)),o&&(Lc.fromBufferAttribute(o,a),Ic.fromBufferAttribute(o,c),Pc.fromBufferAttribute(o,l),u.normal=Sn.getInterpolation(ds,Wi,Xi,Ki,Lc,Ic,Pc,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new F,materialIndex:0};Sn.getNormal(Wi,Xi,Ki,h.normal),u.face=h}return u}class zr extends bn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,r,o,2),S("x","z","y",1,-1,e,n,-t,r,o,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Gn(l,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(h,2));function S(x,g,m,w,A,R,H,N,I,z,b){const T=R/I,U=H/z,Z=R/2,K=H/2,ne=N/2,ie=I+1,Q=z+1;let re=0,ee=0;const Me=new F;for(let Te=0;Te<Q;Te++){const Ae=Te*U-K;for(let De=0;De<ie;De++){const We=De*T-Z;Me[x]=We*w,Me[g]=Ae*A,Me[m]=ne,l.push(Me.x,Me.y,Me.z),Me[x]=0,Me[g]=0,Me[m]=N>0?1:-1,u.push(Me.x,Me.y,Me.z),h.push(De/I),h.push(1-Te/z),re+=1}}for(let Te=0;Te<z;Te++)for(let Ae=0;Ae<I;Ae++){const De=f+Ae+ie*Te,We=f+Ae+ie*(Te+1),te=f+(Ae+1)+ie*(Te+1),he=f+(Ae+1)+ie*Te;c.push(De,We,he),c.push(We,te,he),ee+=6}a.addGroup(p,ee,b),p+=ee,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=hr(i[t]);for(const r in n)e[r]=n[r]}return e}function Od(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function iu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Fd={clone:hr,merge:Ht};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ru extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new F,Dc=new Ue,Nc=new Ue;class Vt extends ru{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,Nc),t.subVectors(Nc,Dc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,qi=1;class Hd extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(Yi,qi,e,t);r.layers=this.layers,this.add(r);const s=new Vt(Yi,qi,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Yi,qi,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Yi,qi,e,t);a.layers=this.layers,this.add(a);const c=new Vt(Yi,qi,e,t);c.layers=this.layers,this.add(c);const l=new Vt(Yi,qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class su extends Pt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new su(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zr(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:si});s.uniforms.tEquirect.value=t;const o=new Yt(r,s),a=t.minFilter;return t.minFilter===Mn&&(t.minFilter=It),new Hd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const So=new F,Gd=new F,Vd=new $e;class ti{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=So.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(So),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vd.getNormalMatrix(e),r=this.coplanarPoint(So).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new An,ms=new F;class fa{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],S=r[9],x=r[10],g=r[11],m=r[12],w=r[13],A=r[14],R=r[15];if(n[0].setComponents(c-s,f-l,g-p,R-m).normalize(),n[1].setComponents(c+s,f+l,g+p,R+m).normalize(),n[2].setComponents(c+o,f+u,g+S,R+w).normalize(),n[3].setComponents(c-o,f-u,g-S,R-w).normalize(),n[4].setComponents(c-a,f-h,g-x,R-A).normalize(),t===zn)n[5].setComponents(c+a,f+h,g+x,R+A).normalize();else if(t===Fs)n[5].setComponents(a,h,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ms.x=r.normal.x>0?e.max.x:e.min.x,ms.y=r.normal.y>0?e.max.y:e.min.y,ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wd(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&f.length===0&&i.bufferSubData(l,0,u),f.length!==0){for(let p=0,S=f.length;p<S;p++){const x=f[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Gr extends bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,p=[],S=[],x=[],g=[];for(let m=0;m<u;m++){const w=m*f-o;for(let A=0;A<l;A++){const R=A*h-s;S.push(R,-w,0),x.push(0,0,1),g.push(A/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const A=w+l*m,R=w+l*(m+1),H=w+1+l*(m+1),N=w+1+l*m;p.push(A,R,N),p.push(R,H,N)}this.setIndex(p),this.setAttribute("position",new Gn(S,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qp=`#define DISTANCE
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
}`,em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,lm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fm=`#define PHONG
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
}`,pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mm=`#define STANDARD
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
}`,gm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,_m=`#define TOON
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
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Xd,alphahash_pars_fragment:Kd,alphamap_fragment:Yd,alphamap_pars_fragment:qd,alphatest_fragment:jd,alphatest_pars_fragment:Zd,aomap_fragment:$d,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:sf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:lf,clipping_planes_vertex:uf,color_fragment:hf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:vf,displacementmap_vertex:Sf,emissivemap_fragment:xf,emissivemap_pars_fragment:Mf,colorspace_fragment:Ef,colorspace_pars_fragment:yf,envmap_fragment:Tf,envmap_common_pars_fragment:Af,envmap_pars_fragment:bf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Bf,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Lf,fog_fragment:If,fog_pars_fragment:Pf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Nf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Of,lights_pars_begin:Ff,lights_toon_fragment:kf,lights_toon_pars_fragment:Hf,lights_phong_fragment:zf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:Kf,lights_fragment_end:Yf,logdepthbuf_fragment:qf,logdepthbuf_pars_fragment:jf,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:$f,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:rp,morphcolor_vertex:sp,morphnormal_vertex:op,morphtarget_pars_vertex:ap,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:up,normal_pars_fragment:hp,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:vp,opaque_fragment:Sp,packing:xp,premultiplied_alpha_fragment:Mp,project_vertex:Ep,dithering_fragment:yp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Lp,skinbase_vertex:Ip,skinning_pars_vertex:Pp,skinning_vertex:Dp,skinnormal_vertex:Np,specularmap_fragment:Up,specularmap_pars_fragment:Op,tonemapping_fragment:Fp,tonemapping_pars_fragment:Bp,transmission_fragment:kp,transmission_pars_fragment:Hp,uv_pars_fragment:zp,uv_pars_vertex:Gp,uv_vertex:Vp,worldpos_vertex:Wp,background_vert:Xp,background_frag:Kp,backgroundCube_vert:Yp,backgroundCube_frag:qp,cube_vert:jp,cube_frag:Zp,depth_vert:$p,depth_frag:Jp,distanceRGBA_vert:Qp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:nm,linedashed_vert:im,linedashed_frag:rm,meshbasic_vert:sm,meshbasic_frag:om,meshlambert_vert:am,meshlambert_frag:cm,meshmatcap_vert:lm,meshmatcap_frag:um,meshnormal_vert:hm,meshnormal_frag:dm,meshphong_vert:fm,meshphong_frag:pm,meshphysical_vert:mm,meshphysical_frag:gm,meshtoon_vert:_m,meshtoon_frag:vm,points_vert:Sm,points_frag:xm,shadow_vert:Mm,shadow_frag:Em,sprite_vert:ym,sprite_frag:Tm},ye={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},_n={basic:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ht([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ht([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ht([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Ht([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Ht([ye.lights,ye.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_n.physical={uniforms:Ht([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const gs={r:0,b:0,g:0},gi=new Tn,Am=new Je;function bm(i,e,t,n,r,s,o){const a=new Be(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function S(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?t:e).get(A)),A}function x(w){let A=!1;const R=S(w);R===null?m(a,c):R&&R.isColor&&(m(R,1),A=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,o):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,A){const R=S(A);R&&(R.isCubeTexture||R.mapping===Hs)?(u===void 0&&(u=new Yt(new zr(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:hr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(H,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gi.copy(A.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(gi)),u.material.toneMapped=ot.getTransfer(R.colorSpace)!==mt,(h!==R||f!==R.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Yt(new Gr(2,2),new ci({name:"BackgroundMaterial",uniforms:hr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ot.getTransfer(R.colorSpace)!==mt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,f=R.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,A){w.getRGB(gs,iu(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),c=A,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:x,addToRenderList:g}}function wm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(T,U,Z,K,ne){let ie=!1;const Q=h(K,Z,U);s!==Q&&(s=Q,l(s.object)),ie=p(T,K,Z,ne),ie&&S(T,K,Z,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,R(T,U,Z,K),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,U,Z){const K=Z.wireframe===!0;let ne=n[T.id];ne===void 0&&(ne={},n[T.id]=ne);let ie=ne[U.id];ie===void 0&&(ie={},ne[U.id]=ie);let Q=ie[K];return Q===void 0&&(Q=f(c()),ie[K]=Q),Q}function f(T){const U=[],Z=[],K=[];for(let ne=0;ne<t;ne++)U[ne]=0,Z[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Z,attributeDivisors:K,object:T,attributes:{},index:null}}function p(T,U,Z,K){const ne=s.attributes,ie=U.attributes;let Q=0;const re=Z.getAttributes();for(const ee in re)if(re[ee].location>=0){const Te=ne[ee];let Ae=ie[ee];if(Ae===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(Ae=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(Ae=T.instanceColor)),Te===void 0||Te.attribute!==Ae||Ae&&Te.data!==Ae.data)return!0;Q++}return s.attributesNum!==Q||s.index!==K}function S(T,U,Z,K){const ne={},ie=U.attributes;let Q=0;const re=Z.getAttributes();for(const ee in re)if(re[ee].location>=0){let Te=ie[ee];Te===void 0&&(ee==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),ee==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor));const Ae={};Ae.attribute=Te,Te&&Te.data&&(Ae.data=Te.data),ne[ee]=Ae,Q++}s.attributes=ne,s.attributesNum=Q,s.index=K}function x(){const T=s.newAttributes;for(let U=0,Z=T.length;U<Z;U++)T[U]=0}function g(T){m(T,0)}function m(T,U){const Z=s.newAttributes,K=s.enabledAttributes,ne=s.attributeDivisors;Z[T]=1,K[T]===0&&(i.enableVertexAttribArray(T),K[T]=1),ne[T]!==U&&(i.vertexAttribDivisor(T,U),ne[T]=U)}function w(){const T=s.newAttributes,U=s.enabledAttributes;for(let Z=0,K=U.length;Z<K;Z++)U[Z]!==T[Z]&&(i.disableVertexAttribArray(Z),U[Z]=0)}function A(T,U,Z,K,ne,ie,Q){Q===!0?i.vertexAttribIPointer(T,U,Z,ne,ie):i.vertexAttribPointer(T,U,Z,K,ne,ie)}function R(T,U,Z,K){x();const ne=K.attributes,ie=Z.getAttributes(),Q=U.defaultAttributeValues;for(const re in ie){const ee=ie[re];if(ee.location>=0){let Me=ne[re];if(Me===void 0&&(re==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),re==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),Me!==void 0){const Te=Me.normalized,Ae=Me.itemSize,De=e.get(Me);if(De===void 0)continue;const We=De.buffer,te=De.type,he=De.bytesPerElement,fe=te===i.INT||te===i.UNSIGNED_INT||Me.gpuType===zl;if(Me.isInterleavedBufferAttribute){const _e=Me.data,Ne=_e.stride,Oe=Me.offset;if(_e.isInstancedInterleavedBuffer){for(let qe=0;qe<ee.locationSize;qe++)m(ee.location+qe,_e.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let qe=0;qe<ee.locationSize;qe++)g(ee.location+qe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let qe=0;qe<ee.locationSize;qe++)A(ee.location+qe,Ae/ee.locationSize,te,Te,Ne*he,(Oe+Ae/ee.locationSize*qe)*he,fe)}else{if(Me.isInstancedBufferAttribute){for(let _e=0;_e<ee.locationSize;_e++)m(ee.location+_e,Me.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let _e=0;_e<ee.locationSize;_e++)g(ee.location+_e);i.bindBuffer(i.ARRAY_BUFFER,We);for(let _e=0;_e<ee.locationSize;_e++)A(ee.location+_e,Ae/ee.locationSize,te,Te,Ae*he,Ae/ee.locationSize*_e*he,fe)}}else if(Q!==void 0){const Te=Q[re];if(Te!==void 0)switch(Te.length){case 2:i.vertexAttrib2fv(ee.location,Te);break;case 3:i.vertexAttrib3fv(ee.location,Te);break;case 4:i.vertexAttrib4fv(ee.location,Te);break;default:i.vertexAttrib1fv(ee.location,Te)}}}}w()}function H(){z();for(const T in n){const U=n[T];for(const Z in U){const K=U[Z];for(const ne in K)u(K[ne].object),delete K[ne];delete U[Z]}delete n[T]}}function N(T){if(n[T.id]===void 0)return;const U=n[T.id];for(const Z in U){const K=U[Z];for(const ne in K)u(K[ne].object),delete K[ne];delete U[Z]}delete n[T.id]}function I(T){for(const U in n){const Z=n[U];if(Z[T.id]===void 0)continue;const K=Z[T.id];for(const ne in K)u(K[ne].object),delete K[ne];delete Z[T.id]}}function z(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function Rm(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h;p++)this.render(l[p],u[p]);else{f.multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let S=0;S<h;S++)p+=u[S];t.update(p,n,1)}}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let S=0;S<l.length;S++)o(l[S],u[S],f[S]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let S=0;for(let x=0;x<h;x++)S+=u[x];for(let x=0;x<f.length;x++)t.update(S,n,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==rn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const I=N===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ai&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==$t&&!I)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,H=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:R,maxSamples:H}}function Lm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ti,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const S=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||S===null||S.length===0||s&&!g)s?u(null):l();else{const w=s?0:n,A=w*4;let R=m.clippingState||null;c.value=R,R=u(S,f,A,p);for(let H=0;H!==A;++H)R[H]=t[H];m.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,S){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=c.value,S!==!0||g===null){const m=p+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,R=p;A!==x;++A,R+=4)o.copy(h[A]).applyMatrix4(w,a),o.normal.toArray(g,R),g[R+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Im(i){let e=new WeakMap;function t(o,a){return a===Xo?o.mapping=rr:a===Ko&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xo||a===Ko)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class pa extends ru{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Uc=[.125,.215,.35,.446,.526,.582],Mi=20,xo=new pa,Oc=new Be;let Mo=null,Eo=0,yo=0,To=!1;const Si=(1+Math.sqrt(5))/2,ji=1/Si,Fc=[new F(-Si,ji,0),new F(Si,ji,0),new F(-ji,0,Si),new F(ji,0,Si),new F(0,Si,-ji),new F(0,Si,ji),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mo,Eo,yo),this._renderer.xr.enabled=To,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:ii,format:rn,colorSpace:bt,depthBuffer:!1},r=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(s)),this._blurMaterial=Dm(s,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,n,r){const a=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Oc),u.toneMapping=oi,u.autoClear=!1;const p=new yi({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),S=new Yt(new zr,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Oc),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const A=this._cubeSize;_s(r,w*A,m>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(S,a),u.render(e,a)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;_s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fc[(r-s-1)%Fc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),x=s/S,g=isFinite(s)?1+Math.floor(u*x):Mi;g>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);const m=[];let w=0;for(let I=0;I<Mi;++I){const z=I/x,b=Math.exp(-z*z/2);m.push(b),I===0?w+=b:I<g&&(w+=2*b)}for(let I=0;I<m.length;I++)m[I]=m[I]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=S,f.mipInt.value=A-n;const R=this._sizeLods[r],H=3*R*(r>A-$i?r-A+$i:0),N=4*(this._cubeSize-R);_s(t,H,N,3*R,2*R),c.setRenderTarget(t),c.render(h,xo)}}function Pm(i){const e=[],t=[],n=[];let r=i;const s=i-$i+1+Uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-$i?c=Uc[o-i+$i-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,S=6,x=3,g=2,m=1,w=new Float32Array(x*S*p),A=new Float32Array(g*S*p),R=new Float32Array(m*S*p);for(let N=0;N<p;N++){const I=N%3*2/3-1,z=N>2?0:-1,b=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];w.set(b,x*S*N),A.set(f,g*S*N);const T=[N,N,N,N,N,N];R.set(T,m*S*N)}const H=new bn;H.setAttribute("position",new Kt(w,x)),H.setAttribute("uv",new Kt(A,g)),H.setAttribute("faceIndex",new Kt(R,m)),e.push(H),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bc(i,e,t){const n=new bi(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dm(i,e,t){const n=new Float32Array(Mi),r=new F(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function kc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Hc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xo||c===Ko,u=c===rr||c===sr;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jo(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new jo(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Um(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Om(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);for(const S in f.morphAttributes){const x=f.morphAttributes[S];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const S in f)e.update(f[S],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const S in p){const x=p[S];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,S=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let A=0,R=w.length;A<R;A+=3){const H=w[A+0],N=w[A+1],I=w[A+2];f.push(H,N,N,I,I,H)}}else if(S!==void 0){const w=S.array;x=S.version;for(let A=0,R=w.length/3-1;A<R;A+=3){const H=A+0,N=A+1,I=A+2;f.push(H,N,N,I,I,H)}}else return;const g=new(Zl(f)?nu:tu)(f,1);g.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Fm(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function l(f,p,S){S!==0&&(i.drawElementsInstanced(n,p,s,f*o,S),t.update(p,n,S))}function u(f,p,S){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<S;g++)this.render(f[g]/o,p[g]);else{x.multiDrawElementsWEBGL(n,p,0,s,f,0,S);let g=0;for(let m=0;m<S;m++)g+=p[m];t.update(g,n,1)}}function h(f,p,S,x){if(S===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,S);let m=0;for(let w=0;w<S;w++)m+=p[w];for(let w=0;w<x.length;w++)t.update(m,n,x[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function km(i,e,t){const n=new WeakMap,r=new dt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let T=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const S=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let R=0;S===!0&&(R=1),x===!0&&(R=2),g===!0&&(R=3);let H=a.attributes.position.count*R,N=1;H>e.maxTextureSize&&(N=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const I=new Float32Array(H*N*4*h),z=new Jl(I,H,N,h);z.type=$t,z.needsUpdate=!0;const b=R*4;for(let U=0;U<h;U++){const Z=m[U],K=w[U],ne=A[U],ie=H*N*4*U;for(let Q=0;Q<Z.count;Q++){const re=Q*b;S===!0&&(r.fromBufferAttribute(Z,Q),I[ie+re+0]=r.x,I[ie+re+1]=r.y,I[ie+re+2]=r.z,I[ie+re+3]=0),x===!0&&(r.fromBufferAttribute(K,Q),I[ie+re+4]=r.x,I[ie+re+5]=r.y,I[ie+re+6]=r.z,I[ie+re+7]=0),g===!0&&(r.fromBufferAttribute(ne,Q),I[ie+re+8]=r.x,I[ie+re+9]=r.y,I[ie+re+10]=r.z,I[ie+re+11]=ne.itemSize===4?r.w:1)}}f={count:h,texture:z,size:new Ue(H,N)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let S=0;for(let g=0;g<l.length;g++)S+=l[g];const x=a.morphTargetsRelative?1:1-S;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Hm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class au extends Pt{constructor(e,t,n,r,s,o,a,c,l,u=er){if(u!==er&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=ar),n===void 0&&u===lr&&(n=cr),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cu=new Pt,lu=new au(1,1);lu.compareFunction=jl;const uu=new Jl,hu=new Ed,du=new su,zc=[],Gc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=zc[r];if(s===void 0&&(s=new Float32Array(r),zc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Rt(t,n)}}function Km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Rt(t,n)}}function Ym(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Rt(t,n)}}function qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function ng(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?lu:cu;t.setTexture2D(e||s,r)}function ig(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hu,r)}function rg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||du,r)}function sg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||uu,r)}function og(i){switch(i){case 5126:return zm;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return Km;case 35676:return Ym;case 5124:case 35670:return qm;case 35667:case 35671:return jm;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Qm;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(i,e){i.uniform1fv(this.addr,e)}function cg(i,e){const t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function lg(i,e){const t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function ug(i,e){const t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function hg(i,e){const t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dg(i,e){const t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fg(i,e){const t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pg(i,e){i.uniform1iv(this.addr,e)}function mg(i,e){i.uniform2iv(this.addr,e)}function gg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function vg(i,e){i.uniform1uiv(this.addr,e)}function Sg(i,e){i.uniform2uiv(this.addr,e)}function xg(i,e){i.uniform3uiv(this.addr,e)}function Mg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cu,s[o])}function yg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hu,s[o])}function Tg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||du,s[o])}function Ag(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uu,s[o])}function bg(i){switch(i){case 5126:return ag;case 35664:return cg;case 35665:return lg;case 35666:return ug;case 35674:return hg;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return vg;case 36294:return Sg;case 36295:return xg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}class wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}}class Cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function Kc(i,e){i.seq.push(e),i.map[e.id]=e}function Lg(i,e,t){const n=i.name,r=n.length;for(Ao.lastIndex=0;;){const s=Ao.exec(n),o=Ao.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Kc(t,l===void 0?new wg(a,i,e):new Rg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Cg(a),Kc(t,h)),t=h}}}class Cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Lg(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Yc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ig=37297;let Pg=0;function Dg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ng(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let n;switch(e===t?n="":e===Os&&t===Us?n="LinearDisplayP3ToLinearSRGB":e===Us&&t===Os&&(n="LinearSRGBToLinearDisplayP3"),i){case bt:case zs:return[n,"LinearTransferOETF"];case Gt:case ua:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function qc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dg(i.getShaderSource(e),o)}else return r}function Ug(i,e){const t=Ng(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Og(i,e){let t;switch(e){case Ah:t="Linear";break;case bh:t="Reinhard";break;case wh:t="OptimizedCineon";break;case Bl:t="ACESFilmic";break;case Ch:t="AgX";break;case Lh:t="Neutral";break;case Rh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Bg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(Hg,Gg)}const zg=new Map;function Gg(i,e){let t=Ze[e];if(t===void 0){const n=zg.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zo(t)}const Vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(Vg,Wg)}function Wg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Xg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function qg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case Th:e="ENVMAP_BLENDING_ADD";break}return e}function jg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Xg(t),l=Kg(t),u=Yg(t),h=qg(t),f=jg(t),p=Fg(t),S=Bg(s),x=r.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ir).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(g=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[Jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==oi?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Zo(o),o=jc(o,t),o=Zc(o,t),a=Zo(a),a=jc(a,t),a=Zc(a,t),o=$c(o),a=$c(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=w+g+o,R=w+m+a,H=Yc(r,r.VERTEX_SHADER,A),N=Yc(r,r.FRAGMENT_SHADER,R);r.attachShader(x,H),r.attachShader(x,N),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(U){if(i.debug.checkShaderErrors){const Z=r.getProgramInfoLog(x).trim(),K=r.getShaderInfoLog(H).trim(),ne=r.getShaderInfoLog(N).trim();let ie=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,H,N);else{const re=qc(r,H,"vertex"),ee=qc(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+re+`
`+ee)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(K===""||ne==="")&&(Q=!1);Q&&(U.diagnostics={runnable:ie,programLog:Z,vertexShader:{log:K,prefix:g},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(H),r.deleteShader(N),z=new Cs(r,x),b=kg(r,x)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,Ig)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=H,this.fragmentShader=N,this}let $g=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qg(e),t.set(e,n)),n}}class Qg{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}}function e_(i,e,t,n,r,s,o){const a=new Ql,c=new Jg,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,T,U,Z,K){const ne=Z.fog,ie=K.geometry,Q=b.isMeshStandardMaterial?Z.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),ee=re&&re.mapping===Hs?re.image.height:null,Me=S[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Te=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ae=Te!==void 0?Te.length:0;let De=0;ie.morphAttributes.position!==void 0&&(De=1),ie.morphAttributes.normal!==void 0&&(De=2),ie.morphAttributes.color!==void 0&&(De=3);let We,te,he,fe;if(Me){const nt=_n[Me];We=nt.vertexShader,te=nt.fragmentShader}else We=b.vertexShader,te=b.fragmentShader,c.update(b),he=c.getVertexShaderID(b),fe=c.getFragmentShaderID(b);const _e=i.getRenderTarget(),Ne=K.isInstancedMesh===!0,Oe=K.isBatchedMesh===!0,qe=!!b.map,O=!!b.matcap,Ke=!!re,Ve=!!b.aoMap,at=!!b.lightMap,Le=!!b.bumpMap,Qe=!!b.normalMap,Ye=!!b.displacementMap,ze=!!b.emissiveMap,ft=!!b.metalnessMap,L=!!b.roughnessMap,M=b.anisotropy>0,X=b.clearcoat>0,oe=b.dispersion>0,le=b.iridescence>0,ce=b.sheen>0,Re=b.transmission>0,Ee=M&&!!b.anisotropyMap,xe=X&&!!b.clearcoatMap,Fe=X&&!!b.clearcoatNormalMap,me=X&&!!b.clearcoatRoughnessMap,be=le&&!!b.iridescenceMap,je=le&&!!b.iridescenceThicknessMap,we=ce&&!!b.sheenColorMap,ge=ce&&!!b.sheenRoughnessMap,He=!!b.specularMap,Pe=!!b.specularColorMap,tt=!!b.specularIntensityMap,v=Re&&!!b.transmissionMap,Y=Re&&!!b.thicknessMap,P=!!b.gradientMap,q=!!b.alphaMap,ae=b.alphaTest>0,Ce=!!b.alphaHash,ke=!!b.extensions;let _t=oi;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(_t=i.toneMapping);const xt={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:We,fragmentShader:te,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:bt,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:O,envMap:Ke,envMapMode:Ke&&re.mapping,envMapCubeUVHeight:ee,aoMap:Ve,lightMap:at,bumpMap:Le,normalMap:Qe,displacementMap:f&&Ye,emissiveMap:ze,normalMapObjectSpace:Qe&&b.normalMapType===Xh,normalMapTangentSpace:Qe&&b.normalMapType===ql,metalnessMap:ft,roughnessMap:L,anisotropy:M,anisotropyMap:Ee,clearcoat:X,clearcoatMap:xe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:me,dispersion:oe,iridescence:le,iridescenceMap:be,iridescenceThicknessMap:je,sheen:ce,sheenColorMap:we,sheenRoughnessMap:ge,specularMap:He,specularColorMap:Pe,specularIntensityMap:tt,transmission:Re,transmissionMap:v,thicknessMap:Y,gradientMap:P,opaque:b.transparent===!1&&b.blending===Qi&&b.alphaToCoverage===!1,alphaMap:q,alphaTest:ae,alphaHash:Ce,combine:b.combine,mapUv:qe&&x(b.map.channel),aoMapUv:Ve&&x(b.aoMap.channel),lightMapUv:at&&x(b.lightMap.channel),bumpMapUv:Le&&x(b.bumpMap.channel),normalMapUv:Qe&&x(b.normalMap.channel),displacementMapUv:Ye&&x(b.displacementMap.channel),emissiveMapUv:ze&&x(b.emissiveMap.channel),metalnessMapUv:ft&&x(b.metalnessMap.channel),roughnessMapUv:L&&x(b.roughnessMap.channel),anisotropyMapUv:Ee&&x(b.anisotropyMap.channel),clearcoatMapUv:xe&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(b.sheenRoughnessMap.channel),specularMapUv:He&&x(b.specularMap.channel),specularColorMapUv:Pe&&x(b.specularColorMap.channel),specularIntensityMapUv:tt&&x(b.specularIntensityMap.channel),transmissionMapUv:v&&x(b.transmissionMap.channel),thicknessMapUv:Y&&x(b.thicknessMap.channel),alphaMapUv:q&&x(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Qe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ie.attributes.uv&&(qe||q),fog:!!ne,useFog:b.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:De,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ke&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)T.push(U),T.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(w(T,b),A(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function w(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function A(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.transmission&&a.enable(14),T.sheen&&a.enable(15),T.opaque&&a.enable(16),T.pointsUvs&&a.enable(17),T.decodeVideoTexture&&a.enable(18),T.alphaToCoverage&&a.enable(19),b.push(a.mask)}function R(b){const T=S[b.type];let U;if(T){const Z=_n[T];U=Fd.clone(Z.uniforms)}else U=b.uniforms;return U}function H(b,T){let U;for(let Z=0,K=u.length;Z<K;Z++){const ne=u[Z];if(ne.cacheKey===T){U=ne,++U.usedTimes;break}}return U===void 0&&(U=new Zg(i,T,b,s),u.push(U)),U}function N(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),b.destroy()}}function I(b){c.remove(b)}function z(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:R,acquireProgram:H,releaseProgram:N,releaseShaderCache:I,programs:u,dispose:z}}function t_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function n_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function el(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,S,x,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:S,renderOrder:h.renderOrder,z:x,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=S,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,f,p,S,x,g){const m=o(h,f,p,S,x,g);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):t.push(m)}function c(h,f,p,S,x,g){const m=o(h,f,p,S,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||n_),n.length>1&&n.sort(f||Qc),r.length>1&&r.sort(f||Qc)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function i_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new el,i.set(n,[o])):r>=s.length?(o=new el,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function r_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function s_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let o_=0;function a_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c_(i){const e=new r_,t=s_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new Je,o=new Je;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,S=0,x=0,g=0,m=0,w=0,A=0,R=0,H=0,N=0,I=0;l.sort(a_);for(let b=0,T=l.length;b<T;b++){const U=l[b],Z=U.color,K=U.intensity,ne=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=Z.r*K,h+=Z.g*K,f+=Z.b*K;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],K);I++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,ee=t.get(U);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=U.shadow.matrix,w++}n.directional[p]=Q,p++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(Z).multiplyScalar(K),Q.distance=ne,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[x]=Q;const re=U.shadow;if(U.map&&(n.spotLightMap[H]=U.map,H++,re.updateMatrices(U),U.castShadow&&N++),n.spotLightMatrix[x]=re.matrix,U.castShadow){const ee=t.get(U);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=ie,R++}x++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(Z).multiplyScalar(K),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=Q,g++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const re=U.shadow,ee=t.get(U);ee.shadowBias=re.bias,ee.shadowNormalBias=re.normalBias,ee.shadowRadius=re.radius,ee.shadowMapSize=re.mapSize,ee.shadowCameraNear=re.camera.near,ee.shadowCameraFar=re.camera.far,n.pointShadow[S]=ee,n.pointShadowMap[S]=ie,n.pointShadowMatrix[S]=U.shadow.matrix,A++}n.point[S]=Q,S++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(K),Q.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[m]=Q,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const z=n.hash;(z.directionalLength!==p||z.pointLength!==S||z.spotLength!==x||z.rectAreaLength!==g||z.hemiLength!==m||z.numDirectionalShadows!==w||z.numPointShadows!==A||z.numSpotShadows!==R||z.numSpotMaps!==H||z.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=S,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=R+H-N,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,z.directionalLength=p,z.pointLength=S,z.spotLength=x,z.rectAreaLength=g,z.hemiLength=m,z.numDirectionalShadows=w,z.numPointShadows=A,z.numSpotShadows=R,z.numSpotMaps=H,z.numLightProbes=I,n.version=o_++)}function c(l,u){let h=0,f=0,p=0,S=0,x=0;const g=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const A=l[m];if(A.isDirectionalLight){const R=n.directional[h];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),h++}else if(A.isSpotLight){const R=n.spot[p];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(g),p++}else if(A.isRectAreaLight){const R=n.rectArea[S];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),o.identity(),s.copy(A.matrixWorld),s.premultiply(g),o.extractRotation(s),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),S++}else if(A.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(g),f++}else if(A.isHemisphereLight){const R=n.hemi[x];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function tl(i){const e=new c_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function l_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new tl(i),e.set(r,[a])):s>=o.length?(a=new tl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class u_ extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h_ extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p_(i,e,t){let n=new fa;const r=new Ue,s=new Ue,o=new dt,a=new u_({depthPacking:Wh}),c=new h_,l={},u=t.maxTextureSize,h={[Vn]:qt,[qt]:Vn,[vn]:vn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const S=new bn;S.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Yt(S,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let m=this.type;this.render=function(N,I,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const b=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(si),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=m!==Fn&&this.type===Fn,ne=m===Fn&&this.type!==Fn;for(let ie=0,Q=N.length;ie<Q;ie++){const re=N[ie],ee=re.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const Me=ee.getFrameExtents();if(r.multiply(Me),s.copy(ee.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Me.x),r.x=s.x*Me.x,ee.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Me.y),r.y=s.y*Me.y,ee.mapSize.y=s.y)),ee.map===null||K===!0||ne===!0){const Ae=this.type!==Fn?{minFilter:Xt,magFilter:Xt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new bi(r.x,r.y,Ae),ee.map.texture.name=re.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();const Te=ee.getViewportCount();for(let Ae=0;Ae<Te;Ae++){const De=ee.getViewport(Ae);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),Z.viewport(o),ee.updateMatrices(re,Ae),n=ee.getFrustum(),R(I,z,ee.camera,re,this.type)}ee.isPointLightShadow!==!0&&this.type===Fn&&w(ee,z),ee.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,T,U)};function w(N,I){const z=e.update(x);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(I,null,z,f,x,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(I,null,z,p,x,null)}function A(N,I,z,b){let T=null;const U=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(U!==void 0)T=U;else if(T=z.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Z=T.uuid,K=I.uuid;let ne=l[Z];ne===void 0&&(ne={},l[Z]=ne);let ie=ne[K];ie===void 0&&(ie=T.clone(),ne[K]=ie,I.addEventListener("dispose",H)),T=ie}if(T.visible=I.visible,T.wireframe=I.wireframe,b===Fn?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:h[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=i.properties.get(T);Z.light=z}return T}function R(N,I,z,b,T){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Fn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const K=e.update(N),ne=N.material;if(Array.isArray(ne)){const ie=K.groups;for(let Q=0,re=ie.length;Q<re;Q++){const ee=ie[Q],Me=ne[ee.materialIndex];if(Me&&Me.visible){const Te=A(N,Me,b,T);N.onBeforeShadow(i,N,I,z,K,Te,ee),i.renderBufferDirect(z,null,K,Te,N,ee),N.onAfterShadow(i,N,I,z,K,Te,ee)}}}else if(ne.visible){const ie=A(N,ne,b,T);N.onBeforeShadow(i,N,I,z,K,ie,null),i.renderBufferDirect(z,null,K,ie,N,null),N.onAfterShadow(i,N,I,z,K,ie,null)}}const Z=N.children;for(let K=0,ne=Z.length;K<ne;K++)R(Z[K],I,z,b,T)}function H(N){N.target.removeEventListener("dispose",H);for(const z in l){const b=l[z],T=N.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function m_(i){function e(){let v=!1;const Y=new dt;let P=null;const q=new dt(0,0,0,0);return{setMask:function(ae){P!==ae&&!v&&(i.colorMask(ae,ae,ae,ae),P=ae)},setLocked:function(ae){v=ae},setClear:function(ae,Ce,ke,_t,xt){xt===!0&&(ae*=_t,Ce*=_t,ke*=_t),Y.set(ae,Ce,ke,_t),q.equals(Y)===!1&&(i.clearColor(ae,Ce,ke,_t),q.copy(Y))},reset:function(){v=!1,P=null,q.set(-1,0,0,0)}}}function t(){let v=!1,Y=null,P=null,q=null;return{setTest:function(ae){ae?fe(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ae){Y!==ae&&!v&&(i.depthMask(ae),Y=ae)},setFunc:function(ae){if(P!==ae){switch(ae){case gh:i.depthFunc(i.NEVER);break;case _h:i.depthFunc(i.ALWAYS);break;case vh:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Sh:i.depthFunc(i.EQUAL);break;case xh:i.depthFunc(i.GEQUAL);break;case Mh:i.depthFunc(i.GREATER);break;case Eh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}P=ae}},setLocked:function(ae){v=ae},setClear:function(ae){q!==ae&&(i.clearDepth(ae),q=ae)},reset:function(){v=!1,Y=null,P=null,q=null}}}function n(){let v=!1,Y=null,P=null,q=null,ae=null,Ce=null,ke=null,_t=null,xt=null;return{setTest:function(nt){v||(nt?fe(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(nt){Y!==nt&&!v&&(i.stencilMask(nt),Y=nt)},setFunc:function(nt,Mt,Et){(P!==nt||q!==Mt||ae!==Et)&&(i.stencilFunc(nt,Mt,Et),P=nt,q=Mt,ae=Et)},setOp:function(nt,Mt,Et){(Ce!==nt||ke!==Mt||_t!==Et)&&(i.stencilOp(nt,Mt,Et),Ce=nt,ke=Mt,_t=Et)},setLocked:function(nt){v=nt},setClear:function(nt){xt!==nt&&(i.clearStencil(nt),xt=nt)},reset:function(){v=!1,Y=null,P=null,q=null,ae=null,Ce=null,ke=null,_t=null,xt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],p=null,S=!1,x=null,g=null,m=null,w=null,A=null,R=null,H=null,N=new Be(0,0,0),I=0,z=!1,b=null,T=null,U=null,Z=null,K=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,Q=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(re)[1]),ie=Q>=1):re.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ie=Q>=2);let ee=null,Me={};const Te=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),De=new dt().fromArray(Te),We=new dt().fromArray(Ae);function te(v,Y,P,q){const ae=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(v,Ce),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<P;ke++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,q,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(Y+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Ce}const he={};he[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),s.setFunc(Is),Le(!1),Qe(Pa),fe(i.CULL_FACE),Ve(si);function fe(v){l[v]!==!0&&(i.enable(v),l[v]=!0)}function _e(v){l[v]!==!1&&(i.disable(v),l[v]=!1)}function Ne(v,Y){return u[v]!==Y?(i.bindFramebuffer(v,Y),u[v]=Y,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Y),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Oe(v,Y){let P=f,q=!1;if(v){P=h.get(Y),P===void 0&&(P=[],h.set(Y,P));const ae=v.textures;if(P.length!==ae.length||P[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ke=ae.length;Ce<ke;Ce++)P[Ce]=i.COLOR_ATTACHMENT0+Ce;P.length=ae.length,q=!0}}else P[0]!==i.BACK&&(P[0]=i.BACK,q=!0);q&&i.drawBuffers(P)}function qe(v){return p!==v?(i.useProgram(v),p=v,!0):!1}const O={[xi]:i.FUNC_ADD,[Qu]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};O[th]=i.MIN,O[nh]=i.MAX;const Ke={[ih]:i.ZERO,[rh]:i.ONE,[sh]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[hh]:i.SRC_ALPHA_SATURATE,[lh]:i.DST_COLOR,[ah]:i.DST_ALPHA,[oh]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[uh]:i.ONE_MINUS_DST_COLOR,[ch]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(v,Y,P,q,ae,Ce,ke,_t,xt,nt){if(v===si){S===!0&&(_e(i.BLEND),S=!1);return}if(S===!1&&(fe(i.BLEND),S=!0),v!==Ju){if(v!==x||nt!==z){if((g!==xi||A!==xi)&&(i.blendEquation(i.FUNC_ADD),g=xi,A=xi),nt)switch(v){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,w=null,R=null,H=null,N.set(0,0,0),I=0,x=v,z=nt}return}ae=ae||Y,Ce=Ce||P,ke=ke||q,(Y!==g||ae!==A)&&(i.blendEquationSeparate(O[Y],O[ae]),g=Y,A=ae),(P!==m||q!==w||Ce!==R||ke!==H)&&(i.blendFuncSeparate(Ke[P],Ke[q],Ke[Ce],Ke[ke]),m=P,w=q,R=Ce,H=ke),(_t.equals(N)===!1||xt!==I)&&(i.blendColor(_t.r,_t.g,_t.b,xt),N.copy(_t),I=xt),x=v,z=!1}function at(v,Y){v.side===vn?_e(i.CULL_FACE):fe(i.CULL_FACE);let P=v.side===qt;Y&&(P=!P),Le(P),v.blending===Qi&&v.transparent===!1?Ve(si):Ve(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),r.setMask(v.colorWrite);const q=v.stencilWrite;o.setTest(q),q&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),ze(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(v){b!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),b=v)}function Qe(v){v!==Zu?(fe(i.CULL_FACE),v!==T&&(v===Pa?i.cullFace(i.BACK):v===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),T=v}function Ye(v){v!==U&&(ie&&i.lineWidth(v),U=v)}function ze(v,Y,P){v?(fe(i.POLYGON_OFFSET_FILL),(Z!==Y||K!==P)&&(i.polygonOffset(Y,P),Z=Y,K=P)):_e(i.POLYGON_OFFSET_FILL)}function ft(v){v?fe(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function L(v){v===void 0&&(v=i.TEXTURE0+ne-1),ee!==v&&(i.activeTexture(v),ee=v)}function M(v,Y,P){P===void 0&&(ee===null?P=i.TEXTURE0+ne-1:P=ee);let q=Me[P];q===void 0&&(q={type:void 0,texture:void 0},Me[P]=q),(q.type!==v||q.texture!==Y)&&(ee!==P&&(i.activeTexture(P),ee=P),i.bindTexture(v,Y||he[v]),q.type=v,q.texture=Y)}function X(){const v=Me[ee];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function je(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function we(v){De.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),De.copy(v))}function ge(v){We.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),We.copy(v))}function He(v,Y){let P=c.get(Y);P===void 0&&(P=new WeakMap,c.set(Y,P));let q=P.get(v);q===void 0&&(q=i.getUniformBlockIndex(Y,v.name),P.set(v,q))}function Pe(v,Y){const q=c.get(Y).get(v);a.get(Y)!==q&&(i.uniformBlockBinding(Y,q,v.__bindingPointIndex),a.set(Y,q))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ee=null,Me={},u={},h=new WeakMap,f=[],p=null,S=!1,x=null,g=null,m=null,w=null,A=null,R=null,H=null,N=new Be(0,0,0),I=0,z=!1,b=null,T=null,U=null,Z=null,K=null,De.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:_e,bindFramebuffer:Ne,drawBuffers:Oe,useProgram:qe,setBlending:Ve,setMaterial:at,setFlipSided:Le,setCullFace:Qe,setLineWidth:Ye,setPolygonOffset:ze,setScissorTest:ft,activeTexture:L,bindTexture:M,unbindTexture:X,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:be,texImage3D:je,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Fe,texStorage3D:me,texSubImage2D:ce,texSubImage3D:Re,compressedTexSubImage2D:Ee,compressedTexSubImage3D:xe,scissor:we,viewport:ge,reset:tt}}function g_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,M){return p?new OffscreenCanvas(L,M):kr("canvas")}function x(L,M,X){let oe=1;const le=ft(L);if((le.width>X||le.height>X)&&(oe=X/Math.max(le.width,le.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(oe*le.width),Re=Math.floor(oe*le.height);h===void 0&&(h=S(ce,Re));const Ee=M?S(ce,Re):h;return Ee.width=ce,Ee.height=Re,Ee.getContext("2d").drawImage(L,0,0,ce,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ce+"x"+Re+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Xt&&L.minFilter!==It}function m(L){i.generateMipmap(L)}function w(L,M,X,oe,le=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=M;if(M===i.RED&&(X===i.FLOAT&&(ce=i.R32F),X===i.HALF_FLOAT&&(ce=i.R16F),X===i.UNSIGNED_BYTE&&(ce=i.R8)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.R8UI),X===i.UNSIGNED_SHORT&&(ce=i.R16UI),X===i.UNSIGNED_INT&&(ce=i.R32UI),X===i.BYTE&&(ce=i.R8I),X===i.SHORT&&(ce=i.R16I),X===i.INT&&(ce=i.R32I)),M===i.RG&&(X===i.FLOAT&&(ce=i.RG32F),X===i.HALF_FLOAT&&(ce=i.RG16F),X===i.UNSIGNED_BYTE&&(ce=i.RG8)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RG8UI),X===i.UNSIGNED_SHORT&&(ce=i.RG16UI),X===i.UNSIGNED_INT&&(ce=i.RG32UI),X===i.BYTE&&(ce=i.RG8I),X===i.SHORT&&(ce=i.RG16I),X===i.INT&&(ce=i.RG32I)),M===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),M===i.RGBA){const Re=le?Ns:ot.getTransfer(oe);X===i.FLOAT&&(ce=i.RGBA32F),X===i.HALF_FLOAT&&(ce=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ce=Re===mt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(L,M){let X;return L?M===null||M===ar||M===cr?X=i.DEPTH24_STENCIL8:M===$t?X=i.DEPTH32F_STENCIL8:M===Ds&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ar||M===cr?X=i.DEPTH_COMPONENT24:M===$t?X=i.DEPTH_COMPONENT32F:M===Ds&&(X=i.DEPTH_COMPONENT16),X}function R(L,M){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xt&&L.minFilter!==It?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function H(L){const M=L.target;M.removeEventListener("dispose",H),I(M),M.isVideoTexture&&u.delete(M)}function N(L){const M=L.target;M.removeEventListener("dispose",N),b(M)}function I(L){const M=n.get(L);if(M.__webglInit===void 0)return;const X=L.source,oe=f.get(X);if(oe){const le=oe[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&z(L),Object.keys(oe).length===0&&f.delete(X)}n.remove(L)}function z(L){const M=n.get(L);i.deleteTexture(M.__webglTexture);const X=L.source,oe=f.get(X);delete oe[M.__cacheKey],o.memory.textures--}function b(L){const M=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let le=0;le<M.__webglFramebuffer[oe].length;le++)i.deleteFramebuffer(M.__webglFramebuffer[oe][le]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=L.textures;for(let oe=0,le=X.length;oe<le;oe++){const ce=n.get(X[oe]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(X[oe])}n.remove(L)}let T=0;function U(){T=0}function Z(){const L=T;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),T+=1,L}function K(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function ne(L,M){const X=n.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const oe=L.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(X,L,M);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function ie(L,M){const X=n.get(L);if(L.version>0&&X.__version!==L.version){We(X,L,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function Q(L,M){const X=n.get(L);if(L.version>0&&X.__version!==L.version){We(X,L,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function re(L,M){const X=n.get(L);if(L.version>0&&X.__version!==L.version){te(X,L,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}const ee={[or]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Ps]:i.MIRRORED_REPEAT},Me={[Xt]:i.NEAREST,[Hl]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},Te={[Kh]:i.NEVER,[Jh]:i.ALWAYS,[Yh]:i.LESS,[jl]:i.LEQUAL,[qh]:i.EQUAL,[$h]:i.GEQUAL,[jh]:i.GREATER,[Zh]:i.NOTEQUAL};function Ae(L,M){if(M.type===$t&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===It||M.magFilter===Rs||M.magFilter===Lr||M.magFilter===Mn||M.minFilter===It||M.minFilter===Rs||M.minFilter===Lr||M.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ee[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Me[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==Lr&&M.minFilter!==Mn||M.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function De(L,M){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",H));const oe=M.source;let le=f.get(oe);le===void 0&&(le={},f.set(oe,le));const ce=K(M);if(ce!==L.__cacheKey){le[ce]===void 0&&(le[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[ce].usedTimes++;const Re=le[L.__cacheKey];Re!==void 0&&(le[L.__cacheKey].usedTimes--,Re.usedTimes===0&&z(M)),L.__cacheKey=ce,L.__webglTexture=le[ce].texture}return X}function We(L,M,X){let oe=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(oe=i.TEXTURE_3D);const le=De(L,M),ce=M.source;t.bindTexture(oe,L.__webglTexture,i.TEXTURE0+X);const Re=n.get(ce);if(ce.version!==Re.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const Ee=ot.getPrimaries(ot.workingColorSpace),xe=M.colorSpace===kn?null:ot.getPrimaries(M.colorSpace),Fe=M.colorSpace===kn||Ee===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let me=x(M.image,!1,r.maxTextureSize);me=ze(M,me);const be=s.convert(M.format,M.colorSpace),je=s.convert(M.type);let we=w(M.internalFormat,be,je,M.colorSpace,M.isVideoTexture);Ae(oe,M);let ge;const He=M.mipmaps,Pe=M.isVideoTexture!==!0,tt=Re.__version===void 0||le===!0,v=ce.dataReady,Y=R(M,me);if(M.isDepthTexture)we=A(M.format===lr,M.type),tt&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,we,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,we,me.width,me.height,0,be,je,null));else if(M.isDataTexture)if(He.length>0){Pe&&tt&&t.texStorage2D(i.TEXTURE_2D,Y,we,He[0].width,He[0].height);for(let P=0,q=He.length;P<q;P++)ge=He[P],Pe?v&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ge.width,ge.height,be,je,ge.data):t.texImage2D(i.TEXTURE_2D,P,we,ge.width,ge.height,0,be,je,ge.data);M.generateMipmaps=!1}else Pe?(tt&&t.texStorage2D(i.TEXTURE_2D,Y,we,me.width,me.height),v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,be,je,me.data)):t.texImage2D(i.TEXTURE_2D,0,we,me.width,me.height,0,be,je,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,we,He[0].width,He[0].height,me.depth);for(let P=0,q=He.length;P<q;P++)if(ge=He[P],M.format!==rn)if(be!==null)if(Pe){if(v)if(M.layerUpdates.size>0){for(const ae of M.layerUpdates){const Ce=ge.width*ge.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,ae,ge.width,ge.height,1,be,ge.data.slice(Ce*ae,Ce*(ae+1)),0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,ge.width,ge.height,me.depth,be,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,we,ge.width,ge.height,me.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?v&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,ge.width,ge.height,me.depth,be,je,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,P,we,ge.width,ge.height,me.depth,0,be,je,ge.data)}else{Pe&&tt&&t.texStorage2D(i.TEXTURE_2D,Y,we,He[0].width,He[0].height);for(let P=0,q=He.length;P<q;P++)ge=He[P],M.format!==rn?be!==null?Pe?v&&t.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,ge.width,ge.height,be,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,P,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?v&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ge.width,ge.height,be,je,ge.data):t.texImage2D(i.TEXTURE_2D,P,we,ge.width,ge.height,0,be,je,ge.data)}else if(M.isDataArrayTexture)if(Pe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,we,me.width,me.height,me.depth),v)if(M.layerUpdates.size>0){let P;switch(je){case i.UNSIGNED_BYTE:switch(be){case i.ALPHA:P=1;break;case i.LUMINANCE:P=1;break;case i.LUMINANCE_ALPHA:P=2;break;case i.RGB:P=3;break;case i.RGBA:P=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:P=1;break;default:throw new Error(`Unknown texel size for type ${je}.`)}const q=me.width*me.height*P;for(const ae of M.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,me.width,me.height,1,be,je,me.data.slice(q*ae,q*(ae+1)));M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,be,je,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,me.width,me.height,me.depth,0,be,je,me.data);else if(M.isData3DTexture)Pe?(tt&&t.texStorage3D(i.TEXTURE_3D,Y,we,me.width,me.height,me.depth),v&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,be,je,me.data)):t.texImage3D(i.TEXTURE_3D,0,we,me.width,me.height,me.depth,0,be,je,me.data);else if(M.isFramebufferTexture){if(tt)if(Pe)t.texStorage2D(i.TEXTURE_2D,Y,we,me.width,me.height);else{let P=me.width,q=me.height;for(let ae=0;ae<Y;ae++)t.texImage2D(i.TEXTURE_2D,ae,we,P,q,0,be,je,null),P>>=1,q>>=1}}else if(He.length>0){if(Pe&&tt){const P=ft(He[0]);t.texStorage2D(i.TEXTURE_2D,Y,we,P.width,P.height)}for(let P=0,q=He.length;P<q;P++)ge=He[P],Pe?v&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,be,je,ge):t.texImage2D(i.TEXTURE_2D,P,we,be,je,ge);M.generateMipmaps=!1}else if(Pe){if(tt){const P=ft(me);t.texStorage2D(i.TEXTURE_2D,Y,we,P.width,P.height)}v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,je,me)}else t.texImage2D(i.TEXTURE_2D,0,we,be,je,me);g(M)&&m(oe),Re.__version=ce.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function te(L,M,X){if(M.image.length!==6)return;const oe=De(L,M),le=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const ce=n.get(le);if(le.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const Re=ot.getPrimaries(ot.workingColorSpace),Ee=M.colorSpace===kn?null:ot.getPrimaries(M.colorSpace),xe=M.colorSpace===kn||Re===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,be=[];for(let q=0;q<6;q++)!Fe&&!me?be[q]=x(M.image[q],!0,r.maxCubemapSize):be[q]=me?M.image[q].image:M.image[q],be[q]=ze(M,be[q]);const je=be[0],we=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),He=w(M.internalFormat,we,ge,M.colorSpace),Pe=M.isVideoTexture!==!0,tt=ce.__version===void 0||oe===!0,v=le.dataReady;let Y=R(M,je);Ae(i.TEXTURE_CUBE_MAP,M);let P;if(Fe){Pe&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,He,je.width,je.height);for(let q=0;q<6;q++){P=be[q].mipmaps;for(let ae=0;ae<P.length;ae++){const Ce=P[ae];M.format!==rn?we!==null?Pe?v&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,He,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,Ce.width,Ce.height,we,ge,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,He,Ce.width,Ce.height,0,we,ge,Ce.data)}}}else{if(P=M.mipmaps,Pe&&tt){P.length>0&&Y++;const q=ft(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,He,q.width,q.height)}for(let q=0;q<6;q++)if(me){Pe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,be[q].width,be[q].height,we,ge,be[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,be[q].width,be[q].height,0,we,ge,be[q].data);for(let ae=0;ae<P.length;ae++){const ke=P[ae].image[q].image;Pe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,ke.width,ke.height,we,ge,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,He,ke.width,ke.height,0,we,ge,ke.data)}}else{Pe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,we,ge,be[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,we,ge,be[q]);for(let ae=0;ae<P.length;ae++){const Ce=P[ae];Pe?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,we,ge,Ce.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,He,we,ge,Ce.image[q])}}}g(M)&&m(i.TEXTURE_CUBE_MAP),ce.__version=le.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function he(L,M,X,oe,le,ce){const Re=s.convert(X.format,X.colorSpace),Ee=s.convert(X.type),xe=w(X.internalFormat,Re,Ee,X.colorSpace);if(!n.get(M).__hasExternalTextures){const me=Math.max(1,M.width>>ce),be=Math.max(1,M.height>>ce);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ce,xe,me,be,M.depth,0,Re,Ee,null):t.texImage2D(le,ce,xe,me,be,0,Re,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Qe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,le,n.get(X).__webglTexture,0,Le(M)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,le,n.get(X).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(L,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){const oe=M.depthTexture,le=oe&&oe.isDepthTexture?oe.type:null,ce=A(M.stencilBuffer,le),Re=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=Le(M);Qe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ce,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,L)}else{const oe=M.textures;for(let le=0;le<oe.length;le++){const ce=oe[le],Re=s.convert(ce.format,ce.colorSpace),Ee=s.convert(ce.type),xe=w(ce.internalFormat,Re,Ee,ce.colorSpace),Fe=Le(M);X&&Qe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,xe,M.width,M.height):Qe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne(M.depthTexture,0);const oe=n.get(M.depthTexture).__webglTexture,le=Le(M);if(M.depthTexture.format===er)Qe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===lr)Qe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const M=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,L)}else if(X){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=i.createRenderbuffer(),fe(M.__webglDepthbuffer[oe],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),fe(M.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(L,M,X){const oe=n.get(L);M!==void 0&&he(oe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ne(L)}function qe(L){const M=L.texture,X=n.get(L),oe=n.get(M);L.addEventListener("dispose",N);const le=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=M.version,o.memory.textures++),ce){X.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Ee]=[];for(let xe=0;xe<M.mipmaps.length;xe++)X.__webglFramebuffer[Ee][xe]=i.createFramebuffer()}else X.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)X.__webglFramebuffer[Ee]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Re)for(let Ee=0,xe=le.length;Ee<xe;Ee++){const Fe=n.get(le[Ee]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Qe(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ee=0;Ee<le.length;Ee++){const xe=le[Ee];X.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Ee]);const Fe=s.convert(xe.format,xe.colorSpace),me=s.convert(xe.type),be=w(xe.internalFormat,Fe,me,xe.colorSpace,L.isXRRenderTarget===!0),je=Le(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,be,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,X.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)he(X.__webglFramebuffer[Ee][xe],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,xe);else he(X.__webglFramebuffer[Ee],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);g(M)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let Ee=0,xe=le.length;Ee<xe;Ee++){const Fe=le[Ee],me=n.get(Fe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),Ae(i.TEXTURE_2D,Fe),he(X.__webglFramebuffer,L,Fe,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),g(Fe)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),Ae(Ee,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)he(X.__webglFramebuffer[xe],L,M,i.COLOR_ATTACHMENT0,Ee,xe);else he(X.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,Ee,0);g(M)&&m(Ee),t.unbindTexture()}L.depthBuffer&&Ne(L)}function O(L){const M=L.textures;for(let X=0,oe=M.length;X<oe;X++){const le=M[X];if(g(le)){const ce=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(le).__webglTexture;t.bindTexture(ce,Re),m(ce),t.unbindTexture()}}}const Ke=[],Ve=[];function at(L){if(L.samples>0){if(Qe(L)===!1){const M=L.textures,X=L.width,oe=L.height;let le=i.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(L),Ee=M.length>1;if(Ee)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Fe=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,X,oe,0,0,X,oe,le,i.NEAREST),c===!0&&(Ke.length=0,Ve.length=0,Ke.push(i.COLOR_ATTACHMENT0+xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ke.push(ce),Ve.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Fe=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Le(L){return Math.min(r.maxSamples,L.samples)}function Qe(L){const M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(L){const M=o.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function ze(L,M){const X=L.colorSpace,oe=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==bt&&X!==kn&&(ot.getTransfer(X)===mt?(oe!==rn||le!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=Oe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Qe}function __(i,e){function t(n,r=kn){let s;const o=ot.getTransfer(r);if(n===ai)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Dh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===ar)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===rn)return i.RGBA;if(n===Fh)return i.LUMINANCE;if(n===Bh)return i.LUMINANCE_ALPHA;if(n===er)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===la)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===kh)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===js||n===Zs||n===$s||n===Js)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Ba||n===ka||n===Ha)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ga||n===Va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===za||n===Ga)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Va)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===Ka||n===Ya||n===qa||n===ja||n===Za||n===$a||n===Ja||n===Qa||n===ec||n===tc||n===nc||n===ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===rc||n===sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qs)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===oc||n===ac||n===cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class v_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,S=.005;l.inputState.pinching&&f>p+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`;class E_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:x_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new Gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class y_ extends Ri{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,S=null;const x=new E_,g=t.getContextAttributes();let m=null,w=null;const A=[],R=[],H=new Ue;let N=null;const I=new Vt;I.layers.enable(1),I.viewport=new dt;const z=new Vt;z.layers.enable(2),z.viewport=new dt;const b=[I,z],T=new v_;T.layers.enable(1),T.layers.enable(2);let U=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=A[te];return he===void 0&&(he=new bo,A[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=A[te];return he===void 0&&(he=new bo,A[te]=he),he.getGripSpace()},this.getHand=function(te){let he=A[te];return he===void 0&&(he=new bo,A[te]=he),he.getHandSpace()};function K(te){const he=R.indexOf(te.inputSource);if(he===-1)return;const fe=A[he];fe!==void 0&&(fe.update(te.inputSource,te.frame,l||o),fe.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",ie);for(let te=0;te<A.length;te++){const he=R[te];he!==null&&(R[te]=null,A[te].disconnect(he))}U=null,Z=null,x.reset(),e.setRenderTarget(m),p=null,f=null,h=null,r=null,w=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",ie),g.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(H),r.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new bi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,fe=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?lr:er,fe=g.stencil?cr:ar);const Ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new bi(f.textureWidth,f.textureHeight,{format:rn,type:ai,depthTexture:new au(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ie(te){for(let he=0;he<te.removed.length;he++){const fe=te.removed[he],_e=R.indexOf(fe);_e>=0&&(R[_e]=null,A[_e].disconnect(fe))}for(let he=0;he<te.added.length;he++){const fe=te.added[he];let _e=R.indexOf(fe);if(_e===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=R.length){R.push(fe),_e=Oe;break}else if(R[Oe]===null){R[Oe]=fe,_e=Oe;break}if(_e===-1)break}const Ne=A[_e];Ne&&Ne.connect(fe)}}const Q=new F,re=new F;function ee(te,he,fe){Q.setFromMatrixPosition(he.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const _e=Q.distanceTo(re),Ne=he.projectionMatrix.elements,Oe=fe.projectionMatrix.elements,qe=Ne[14]/(Ne[10]-1),O=Ne[14]/(Ne[10]+1),Ke=(Ne[9]+1)/Ne[5],Ve=(Ne[9]-1)/Ne[5],at=(Ne[8]-1)/Ne[0],Le=(Oe[8]+1)/Oe[0],Qe=qe*at,Ye=qe*Le,ze=_e/(-at+Le),ft=ze*-at;he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ft),te.translateZ(ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const L=qe+ze,M=O+ze,X=Qe-ft,oe=Ye+(_e-ft),le=Ke*O/M*L,ce=Ve*O/M*L;te.projectionMatrix.makePerspective(X,oe,le,ce,L,M),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function Me(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;x.texture!==null&&(te.near=x.depthNear,te.far=x.depthFar),T.near=z.near=I.near=te.near,T.far=z.far=I.far=te.far,(U!==T.near||Z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,Z=T.far,I.near=U,I.far=Z,z.near=U,z.far=Z,I.updateProjectionMatrix(),z.updateProjectionMatrix(),te.updateProjectionMatrix());const he=te.parent,fe=T.cameras;Me(T,he);for(let _e=0;_e<fe.length;_e++)Me(fe[_e],he);fe.length===2?ee(T,I,z):T.projectionMatrix.copy(I.projectionMatrix),Te(te,T,he)};function Te(te,he,fe){fe===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(fe.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ur*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)};let Ae=null;function De(te,he){if(u=he.getViewerPose(l||o),S=he,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let _e=!1;fe.length!==T.cameras.length&&(T.cameras.length=0,_e=!0);for(let Oe=0;Oe<fe.length;Oe++){const qe=fe[Oe];let O=null;if(p!==null)O=p.getViewport(qe);else{const Ve=h.getViewSubImage(f,qe);O=Ve.viewport,Oe===0&&(e.setRenderTargetTextures(w,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(w))}let Ke=b[Oe];Ke===void 0&&(Ke=new Vt,Ke.layers.enable(Oe),Ke.viewport=new dt,b[Oe]=Ke),Ke.matrix.fromArray(qe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(qe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(O.x,O.y,O.width,O.height),Oe===0&&(T.matrix.copy(Ke.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),_e===!0&&T.cameras.push(Ke)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Oe=h.getDepthInformation(fe[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let fe=0;fe<A.length;fe++){const _e=R[fe],Ne=A[fe];_e!==null&&Ne!==void 0&&Ne.update(_e,he,l||o)}Ae&&Ae(te,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),S=null}const We=new ou;We.setAnimationLoop(De),this.setAnimationLoop=function(te){Ae=te},this.dispose=function(){}}}const _i=new Tn,T_=new Je;function A_(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,iu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,w,A,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,R)):m.isMeshMatcapMaterial?(s(g,m),S(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,A):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),A=w.envMap,R=w.envMapRotation;A&&(g.envMap.value=A,_i.copy(R),_i.x*=-1,_i.y*=-1,_i.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),g.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(_i)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function b_(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,A){const R=A.program;n.uniformBlockBinding(w,R)}function l(w,A){let R=r[w.id];R===void 0&&(S(w),R=u(w),r[w.id]=R,w.addEventListener("dispose",g));const H=A.program;n.updateUBOMapping(w,H);const N=e.render.frame;s[w.id]!==N&&(f(w),s[w.id]=N)}function u(w){const A=h();w.__bindingPointIndex=A;const R=i.createBuffer(),H=w.__size,N=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,H,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,R),R}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const A=r[w.id],R=w.uniforms,H=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let N=0,I=R.length;N<I;N++){const z=Array.isArray(R[N])?R[N]:[R[N]];for(let b=0,T=z.length;b<T;b++){const U=z[b];if(p(U,N,b,H)===!0){const Z=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let ne=0;for(let ie=0;ie<K.length;ie++){const Q=K[ie],re=x(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Z+ne,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,ne),ne+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,A,R,H){const N=w.value,I=A+"_"+R;if(H[I]===void 0)return typeof N=="number"||typeof N=="boolean"?H[I]=N:H[I]=N.clone(),!0;{const z=H[I];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return H[I]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function S(w){const A=w.uniforms;let R=0;const H=16;for(let I=0,z=A.length;I<z;I++){const b=Array.isArray(A[I])?A[I]:[A[I]];for(let T=0,U=b.length;T<U;T++){const Z=b[T],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let ne=0,ie=K.length;ne<ie;ne++){const Q=K[ne],re=x(Q),ee=R%H;ee!==0&&H-ee<re.boundary&&(R+=H-ee),Z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=re.storage}}}const N=R%H;return N>0&&(R+=H-N),w.__size=R,w.__cache={},this}function x(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function g(w){const A=w.target;A.removeEventListener("dispose",g);const R=o.indexOf(A.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:m}}class w_{constructor(e={}){const{canvas:t=md(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),S=new Int32Array(4);let x=null,g=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=oi,this.toneMappingExposure=1;const A=this;let R=!1,H=0,N=0,I=null,z=-1,b=null;const T=new dt,U=new dt;let Z=null;const K=new Be(0);let ne=0,ie=t.width,Q=t.height,re=1,ee=null,Me=null;const Te=new dt(0,0,ie,Q),Ae=new dt(0,0,ie,Q);let De=!1;const We=new fa;let te=!1,he=!1;const fe=new Je,_e=new F,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function qe(){return I===null?re:1}let O=n;function Ke(y,B){return t.getContext(y,B)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ca}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",q,!1),O===null){const B="webgl2";if(O=Ke(B,y),O===null)throw Ke(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ve,at,Le,Qe,Ye,ze,ft,L,M,X,oe,le,ce,Re,Ee,xe,Fe,me,be,je,we,ge,He,Pe;function tt(){Ve=new Um(O),Ve.init(),ge=new __(O,Ve),at=new Cm(O,Ve,e,ge),Le=new m_(O),Qe=new Bm(O),Ye=new t_,ze=new g_(O,Ve,Le,Ye,at,ge,Qe),ft=new Im(A),L=new Nm(A),M=new Wd(O),He=new wm(O,M),X=new Om(O,M,Qe,He),oe=new Hm(O,X,M,Qe),be=new km(O,at,ze),xe=new Lm(Ye),le=new e_(A,ft,L,Ve,at,He,xe),ce=new A_(A,Ye),Re=new i_,Ee=new l_(Ve),me=new bm(A,ft,L,Le,oe,f,c),Fe=new p_(A,oe,at),Pe=new b_(O,Qe,at,Le),je=new Rm(O,Ve,Qe),we=new Fm(O,Ve,Qe),Qe.programs=le.programs,A.capabilities=at,A.extensions=Ve,A.properties=Ye,A.renderLists=Re,A.shadowMap=Fe,A.state=Le,A.info=Qe}tt();const v=new y_(A,O);this.xr=v,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=Ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(y){y!==void 0&&(re=y,this.setSize(ie,Q,!1))},this.getSize=function(y){return y.set(ie,Q)},this.setSize=function(y,B,G=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,Q=B,t.width=Math.floor(y*re),t.height=Math.floor(B*re),G===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(ie*re,Q*re).floor()},this.setDrawingBufferSize=function(y,B,G){ie=y,Q=B,re=G,t.width=Math.floor(y*G),t.height=Math.floor(B*G),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(Te)},this.setViewport=function(y,B,G,d){y.isVector4?Te.set(y.x,y.y,y.z,y.w):Te.set(y,B,G,d),Le.viewport(T.copy(Te).multiplyScalar(re).round())},this.getScissor=function(y){return y.copy(Ae)},this.setScissor=function(y,B,G,d){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,B,G,d),Le.scissor(U.copy(Ae).multiplyScalar(re).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){Le.setScissorTest(De=y)},this.setOpaqueSort=function(y){ee=y},this.setTransparentSort=function(y){Me=y},this.getClearColor=function(y){return y.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(y=!0,B=!0,G=!0){let d=0;if(y){let _=!1;if(I!==null){const E=I.texture.format;_=E===Kl||E===Xl||E===Wl}if(_){const E=I.texture.type,C=E===ai||E===ar||E===Ds||E===cr||E===Gl||E===Vl,k=me.getClearColor(),D=me.getClearAlpha(),W=k.r,J=k.g,V=k.b;C?(p[0]=W,p[1]=J,p[2]=V,p[3]=D,O.clearBufferuiv(O.COLOR,0,p)):(S[0]=W,S[1]=J,S[2]=V,S[3]=D,O.clearBufferiv(O.COLOR,0,S))}else d|=O.COLOR_BUFFER_BIT}B&&(d|=O.DEPTH_BUFFER_BIT),G&&(d|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(d)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Re.dispose(),Ee.dispose(),Ye.dispose(),ft.dispose(),L.dispose(),oe.dispose(),He.dispose(),Pe.dispose(),le.dispose(),v.dispose(),v.removeEventListener("sessionstart",Mt),v.removeEventListener("sessionend",Et),Ft.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=Qe.autoReset,B=Fe.enabled,G=Fe.autoUpdate,d=Fe.needsUpdate,_=Fe.type;tt(),Qe.autoReset=y,Fe.enabled=B,Fe.autoUpdate=G,Fe.needsUpdate=d,Fe.type=_}function q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ae(y){const B=y.target;B.removeEventListener("dispose",ae),Ce(B)}function Ce(y){ke(y),Ye.remove(y)}function ke(y){const B=Ye.get(y).programs;B!==void 0&&(B.forEach(function(G){le.releaseProgram(G)}),y.isShaderMaterial&&le.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,G,d,_,E){B===null&&(B=Ne);const C=_.isMesh&&_.matrixWorld.determinant()<0,k=qs(y,B,G,d,_);Le.setMaterial(d,C);let D=G.index,W=1;if(d.wireframe===!0){if(D=X.getWireframeAttribute(G),D===void 0)return;W=2}const J=G.drawRange,V=G.attributes.position;let j=J.start*W,$=(J.start+J.count)*W;E!==null&&(j=Math.max(j,E.start*W),$=Math.min($,(E.start+E.count)*W)),D!==null?(j=Math.max(j,0),$=Math.min($,D.count)):V!=null&&(j=Math.max(j,0),$=Math.min($,V.count));const de=$-j;if(de<0||de===1/0)return;He.setup(_,d,k,G,D);let Se,ue=je;if(D!==null&&(Se=M.get(D),ue=we,ue.setIndex(Se)),_.isMesh)d.wireframe===!0?(Le.setLineWidth(d.wireframeLinewidth*qe()),ue.setMode(O.LINES)):ue.setMode(O.TRIANGLES);else if(_.isLine){let se=d.linewidth;se===void 0&&(se=1),Le.setLineWidth(se*qe()),_.isLineSegments?ue.setMode(O.LINES):_.isLineLoop?ue.setMode(O.LINE_LOOP):ue.setMode(O.LINE_STRIP)}else _.isPoints?ue.setMode(O.POINTS):_.isSprite&&ue.setMode(O.TRIANGLES);if(_.isBatchedMesh)_._multiDrawInstances!==null?ue.renderMultiDrawInstances(_._multiDrawStarts,_._multiDrawCounts,_._multiDrawCount,_._multiDrawInstances):ue.renderMultiDraw(_._multiDrawStarts,_._multiDrawCounts,_._multiDrawCount);else if(_.isInstancedMesh)ue.renderInstances(j,de,_.count);else if(G.isInstancedBufferGeometry){const se=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ve=Math.min(G.instanceCount,se);ue.renderInstances(j,de,ve)}else ue.render(j,de)};function _t(y,B,G){y.transparent===!0&&y.side===vn&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,Li(y,B,G),y.side=Vn,y.needsUpdate=!0,Li(y,B,G),y.side=vn):Li(y,B,G)}this.compile=function(y,B,G=null){G===null&&(G=y),g=Ee.get(G),g.init(B),w.push(g),G.traverseVisible(function(_){_.isLight&&_.layers.test(B.layers)&&(g.pushLight(_),_.castShadow&&g.pushShadow(_))}),y!==G&&y.traverseVisible(function(_){_.isLight&&_.layers.test(B.layers)&&(g.pushLight(_),_.castShadow&&g.pushShadow(_))}),g.setupLights();const d=new Set;return y.traverse(function(_){const E=_.material;if(E)if(Array.isArray(E))for(let C=0;C<E.length;C++){const k=E[C];_t(k,G,_),d.add(k)}else _t(E,G,_),d.add(E)}),w.pop(),g=null,d},this.compileAsync=function(y,B,G=null){const d=this.compile(y,B,G);return new Promise(_=>{function E(){if(d.forEach(function(C){Ye.get(C).currentProgram.isReady()&&d.delete(C)}),d.size===0){_(y);return}setTimeout(E,10)}Ve.get("KHR_parallel_shader_compile")!==null?E():setTimeout(E,10)})};let xt=null;function nt(y){xt&&xt(y)}function Mt(){Ft.stop()}function Et(){Ft.start()}const Ft=new ou;Ft.setAnimationLoop(nt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(y){xt=y,v.setAnimationLoop(y),y===null?Ft.stop():Ft.start()},v.addEventListener("sessionstart",Mt),v.addEventListener("sessionend",Et),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(B),B=v.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,B,I),g=Ee.get(y,w.length),g.init(B),w.push(g),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),We.setFromProjectionMatrix(fe),he=this.localClippingEnabled,te=xe.init(this.clippingPlanes,he),x=Re.get(y,m.length),x.init(),m.push(x),v.enabled===!0&&v.isPresenting===!0){const E=A.xr.getDepthSensingMesh();E!==null&&Bt(E,B,-1/0,A.sortObjects)}Bt(y,B,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(ee,Me),Oe=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,Oe&&me.addToRenderList(x,y),this.info.render.frame++,te===!0&&xe.beginShadows();const G=g.state.shadowsArray;Fe.render(G,y,B),te===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const d=x.opaque,_=x.transmissive;if(g.setupLights(),B.isArrayCamera){const E=B.cameras;if(_.length>0)for(let C=0,k=E.length;C<k;C++){const D=E[C];Rn(d,_,y,D)}Oe&&me.render(y);for(let C=0,k=E.length;C<k;C++){const D=E[C];mn(x,y,D,D.viewport)}}else _.length>0&&Rn(d,_,y,B),Oe&&me.render(y),mn(x,y,B);I!==null&&(ze.updateMultisampleRenderTarget(I),ze.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(A,y,B),He.resetDefaultState(),z=-1,b=null,w.pop(),w.length>0?(g=w[w.length-1],te===!0&&xe.setGlobalState(A.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Bt(y,B,G,d){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)g.pushLight(y),y.castShadow&&g.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||We.intersectsSprite(y)){d&&_e.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);const C=oe.update(y),k=y.material;k.visible&&x.push(y,C,k,G,_e.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||We.intersectsObject(y))){const C=oe.update(y),k=y.material;if(d&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),_e.copy(y.boundingSphere.center)):(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)),_e.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(k)){const D=C.groups;for(let W=0,J=D.length;W<J;W++){const V=D[W],j=k[V.materialIndex];j&&j.visible&&x.push(y,C,j,G,_e.z,V)}}else k.visible&&x.push(y,C,k,G,_e.z,null)}}const E=y.children;for(let C=0,k=E.length;C<k;C++)Bt(E[C],B,G,d)}function mn(y,B,G,d){const _=y.opaque,E=y.transmissive,C=y.transparent;g.setupLightsView(G),te===!0&&xe.setGlobalState(A.clippingPlanes,G),d&&Le.viewport(T.copy(d)),_.length>0&&Cn(_,B,G),E.length>0&&Cn(E,B,G),C.length>0&&Cn(C,B,G),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Rn(y,B,G,d){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[d.id]===void 0&&(g.state.transmissionRenderTarget[d.id]=new bi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ii:ai,minFilter:Mn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const E=g.state.transmissionRenderTarget[d.id],C=d.viewport||T;E.setSize(C.z,C.w);const k=A.getRenderTarget();A.setRenderTarget(E),A.getClearColor(K),ne=A.getClearAlpha(),ne<1&&A.setClearColor(16777215,.5),Oe?me.render(G):A.clear();const D=A.toneMapping;A.toneMapping=oi;const W=d.viewport;if(d.viewport!==void 0&&(d.viewport=void 0),g.setupLightsView(d),te===!0&&xe.setGlobalState(A.clippingPlanes,d),Cn(y,G,d),ze.updateMultisampleRenderTarget(E),ze.updateRenderTargetMipmap(E),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let V=0,j=B.length;V<j;V++){const $=B[V],de=$.object,Se=$.geometry,ue=$.material,se=$.group;if(ue.side===vn&&de.layers.test(d.layers)){const ve=ue.side;ue.side=qt,ue.needsUpdate=!0,Sr(de,G,d,Se,ue,se),ue.side=ve,ue.needsUpdate=!0,J=!0}}J===!0&&(ze.updateMultisampleRenderTarget(E),ze.updateRenderTargetMipmap(E))}A.setRenderTarget(k),A.setClearColor(K,ne),W!==void 0&&(d.viewport=W),A.toneMapping=D}function Cn(y,B,G){const d=B.isScene===!0?B.overrideMaterial:null;for(let _=0,E=y.length;_<E;_++){const C=y[_],k=C.object,D=C.geometry,W=d===null?C.material:d,J=C.group;k.layers.test(G.layers)&&Sr(k,B,G,D,W,J)}}function Sr(y,B,G,d,_,E){y.onBeforeRender(A,B,G,d,_,E),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),_.onBeforeRender(A,B,G,d,y,E),_.transparent===!0&&_.side===vn&&_.forceSinglePass===!1?(_.side=qt,_.needsUpdate=!0,A.renderBufferDirect(G,B,d,_,y,E),_.side=Vn,_.needsUpdate=!0,A.renderBufferDirect(G,B,d,_,y,E),_.side=vn):A.renderBufferDirect(G,B,d,_,y,E),y.onAfterRender(A,B,G,d,_,E)}function Li(y,B,G){B.isScene!==!0&&(B=Ne);const d=Ye.get(y),_=g.state.lights,E=g.state.shadowsArray,C=_.state.version,k=le.getParameters(y,_.state,E,B,G),D=le.getProgramCacheKey(k);let W=d.programs;d.environment=y.isMeshStandardMaterial?B.environment:null,d.fog=B.fog,d.envMap=(y.isMeshStandardMaterial?L:ft).get(y.envMap||d.environment),d.envMapRotation=d.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,W===void 0&&(y.addEventListener("dispose",ae),W=new Map,d.programs=W);let J=W.get(D);if(J!==void 0){if(d.currentProgram===J&&d.lightsStateVersion===C)return Yr(y,k),J}else k.uniforms=le.getUniforms(y),y.onBuild(G,k,A),y.onBeforeCompile(k,A),J=le.acquireProgram(k,D),W.set(D,J),d.uniforms=k.uniforms;const V=d.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(V.clippingPlanes=xe.uniform),Yr(y,k),d.needsLights=jr(y),d.lightsStateVersion=C,d.needsLights&&(V.ambientLightColor.value=_.state.ambient,V.lightProbe.value=_.state.probe,V.directionalLights.value=_.state.directional,V.directionalLightShadows.value=_.state.directionalShadow,V.spotLights.value=_.state.spot,V.spotLightShadows.value=_.state.spotShadow,V.rectAreaLights.value=_.state.rectArea,V.ltc_1.value=_.state.rectAreaLTC1,V.ltc_2.value=_.state.rectAreaLTC2,V.pointLights.value=_.state.point,V.pointLightShadows.value=_.state.pointShadow,V.hemisphereLights.value=_.state.hemi,V.directionalShadowMap.value=_.state.directionalShadowMap,V.directionalShadowMatrix.value=_.state.directionalShadowMatrix,V.spotShadowMap.value=_.state.spotShadowMap,V.spotLightMatrix.value=_.state.spotLightMatrix,V.spotLightMap.value=_.state.spotLightMap,V.pointShadowMap.value=_.state.pointShadowMap,V.pointShadowMatrix.value=_.state.pointShadowMatrix),d.currentProgram=J,d.uniformsList=null,J}function Kr(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Cs.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Yr(y,B){const G=Ye.get(y);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function qs(y,B,G,d,_){B.isScene!==!0&&(B=Ne),ze.resetTextureUnits();const E=B.fog,C=d.isMeshStandardMaterial?B.environment:null,k=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bt,D=(d.isMeshStandardMaterial?L:ft).get(d.envMap||C),W=d.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,J=!!G.attributes.tangent&&(!!d.normalMap||d.anisotropy>0),V=!!G.morphAttributes.position,j=!!G.morphAttributes.normal,$=!!G.morphAttributes.color;let de=oi;d.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=A.toneMapping);const Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=Se!==void 0?Se.length:0,se=Ye.get(d),ve=g.state.lights;if(te===!0&&(he===!0||y!==b)){const pt=y===b&&d.id===z;xe.setState(d,y,pt)}let pe=!1;d.version===se.__version?(se.needsLights&&se.lightsStateVersion!==ve.state.version||se.outputColorSpace!==k||_.isBatchedMesh&&se.batching===!1||!_.isBatchedMesh&&se.batching===!0||_.isBatchedMesh&&se.batchingColor===!0&&_.colorTexture===null||_.isBatchedMesh&&se.batchingColor===!1&&_.colorTexture!==null||_.isInstancedMesh&&se.instancing===!1||!_.isInstancedMesh&&se.instancing===!0||_.isSkinnedMesh&&se.skinning===!1||!_.isSkinnedMesh&&se.skinning===!0||_.isInstancedMesh&&se.instancingColor===!0&&_.instanceColor===null||_.isInstancedMesh&&se.instancingColor===!1&&_.instanceColor!==null||_.isInstancedMesh&&se.instancingMorph===!0&&_.morphTexture===null||_.isInstancedMesh&&se.instancingMorph===!1&&_.morphTexture!==null||se.envMap!==D||d.fog===!0&&se.fog!==E||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==xe.numPlanes||se.numIntersection!==xe.numIntersection)||se.vertexAlphas!==W||se.vertexTangents!==J||se.morphTargets!==V||se.morphNormals!==j||se.morphColors!==$||se.toneMapping!==de||se.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,se.__version=d.version);let Ie=se.currentProgram;pe===!0&&(Ie=Li(d,B,_));let it=!1,rt=!1,Dt=!1;const Ge=Ie.getUniforms(),Xe=se.uniforms;if(Le.useProgram(Ie.program)&&(it=!0,rt=!0,Dt=!0),d.id!==z&&(z=d.id,rt=!0),it||b!==y){Ge.setValue(O,"projectionMatrix",y.projectionMatrix),Ge.setValue(O,"viewMatrix",y.matrixWorldInverse);const pt=Ge.map.cameraPosition;pt!==void 0&&pt.setValue(O,_e.setFromMatrixPosition(y.matrixWorld)),at.logarithmicDepthBuffer&&Ge.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(d.isMeshPhongMaterial||d.isMeshToonMaterial||d.isMeshLambertMaterial||d.isMeshBasicMaterial||d.isMeshStandardMaterial||d.isShaderMaterial)&&Ge.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,rt=!0,Dt=!0)}if(_.isSkinnedMesh){Ge.setOptional(O,_,"bindMatrix"),Ge.setOptional(O,_,"bindMatrixInverse");const pt=_.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Ge.setValue(O,"boneTexture",pt.boneTexture,ze))}_.isBatchedMesh&&(Ge.setOptional(O,_,"batchingTexture"),Ge.setValue(O,"batchingTexture",_._matricesTexture,ze),Ge.setOptional(O,_,"batchingColorTexture"),_._colorsTexture!==null&&Ge.setValue(O,"batchingColorTexture",_._colorsTexture,ze));const vt=G.morphAttributes;if((vt.position!==void 0||vt.normal!==void 0||vt.color!==void 0)&&be.update(_,G,Ie),(rt||se.receiveShadow!==_.receiveShadow)&&(se.receiveShadow=_.receiveShadow,Ge.setValue(O,"receiveShadow",_.receiveShadow)),d.isMeshGouraudMaterial&&d.envMap!==null&&(Xe.envMap.value=D,Xe.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1),d.isMeshStandardMaterial&&d.envMap===null&&B.environment!==null&&(Xe.envMapIntensity.value=B.environmentIntensity),rt&&(Ge.setValue(O,"toneMappingExposure",A.toneMappingExposure),se.needsLights&&qr(Xe,Dt),E&&d.fog===!0&&ce.refreshFogUniforms(Xe,E),ce.refreshMaterialUniforms(Xe,d,re,Q,g.state.transmissionRenderTarget[y.id]),Cs.upload(O,Kr(se),Xe,ze)),d.isShaderMaterial&&d.uniformsNeedUpdate===!0&&(Cs.upload(O,Kr(se),Xe,ze),d.uniformsNeedUpdate=!1),d.isSpriteMaterial&&Ge.setValue(O,"center",_.center),Ge.setValue(O,"modelViewMatrix",_.modelViewMatrix),Ge.setValue(O,"normalMatrix",_.normalMatrix),Ge.setValue(O,"modelMatrix",_.matrixWorld),d.isShaderMaterial||d.isRawShaderMaterial){const pt=d.uniformsGroups;for(let yt=0,st=pt.length;yt<st;yt++){const ct=pt[yt];Pe.update(ct,Ie),Pe.bind(ct,Ie)}}return Ie}function qr(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function jr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,B,G){Ye.get(y.texture).__webglTexture=B,Ye.get(y.depthTexture).__webglTexture=G;const d=Ye.get(y);d.__hasExternalTextures=!0,d.__autoAllocateDepthBuffer=G===void 0,d.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),d.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,B){const G=Ye.get(y);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,G=0){I=y,H=B,N=G;let d=!0,_=null,E=!1,C=!1;if(y){const D=Ye.get(y);D.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(O.FRAMEBUFFER,null),d=!1):D.__webglFramebuffer===void 0?ze.setupRenderTarget(y):D.__hasExternalTextures&&ze.rebindTextures(y,Ye.get(y.texture).__webglTexture,Ye.get(y.depthTexture).__webglTexture);const W=y.texture;(W.isData3DTexture||W.isDataArrayTexture||W.isCompressedArrayTexture)&&(C=!0);const J=Ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(J[B])?_=J[B][G]:_=J[B],E=!0):y.samples>0&&ze.useMultisampledRTT(y)===!1?_=Ye.get(y).__webglMultisampledFramebuffer:Array.isArray(J)?_=J[G]:_=J,T.copy(y.viewport),U.copy(y.scissor),Z=y.scissorTest}else T.copy(Te).multiplyScalar(re).floor(),U.copy(Ae).multiplyScalar(re).floor(),Z=De;if(Le.bindFramebuffer(O.FRAMEBUFFER,_)&&d&&Le.drawBuffers(y,_),Le.viewport(T),Le.scissor(U),Le.setScissorTest(Z),E){const D=Ye.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,D.__webglTexture,G)}else if(C){const D=Ye.get(y.texture),W=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,D.__webglTexture,G||0,W)}z=-1},this.readRenderTargetPixels=function(y,B,G,d,_,E,C){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k=Ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&C!==void 0&&(k=k[C]),k){Le.bindFramebuffer(O.FRAMEBUFFER,k);try{const D=y.texture,W=D.format,J=D.type;if(!at.textureFormatReadable(W)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-d&&G>=0&&G<=y.height-_&&O.readPixels(B,G,d,_,ge.convert(W),ge.convert(J),E)}finally{const D=I!==null?Ye.get(I).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,D)}}},this.readRenderTargetPixelsAsync=async function(y,B,G,d,_,E,C){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k=Ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&C!==void 0&&(k=k[C]),k){Le.bindFramebuffer(O.FRAMEBUFFER,k);try{const D=y.texture,W=D.format,J=D.type;if(!at.textureFormatReadable(W))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=y.width-d&&G>=0&&G<=y.height-_){const V=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,V),O.bufferData(O.PIXEL_PACK_BUFFER,E.byteLength,O.STREAM_READ),O.readPixels(B,G,d,_,ge.convert(W),ge.convert(J),0),O.flush();const j=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await gd(O,j,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,V),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,E)}finally{O.deleteBuffer(V),O.deleteSync(j)}return E}}finally{const D=I!==null?Ye.get(I).__webglFramebuffer:null;Le.bindFramebuffer(O.FRAMEBUFFER,D)}}},this.copyFramebufferToTexture=function(y,B=null,G=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1]);const d=Math.pow(2,-G),_=Math.floor(y.image.width*d),E=Math.floor(y.image.height*d),C=B!==null?B.x:0,k=B!==null?B.y:0;ze.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,C,k,_,E),Le.unbindTexture()},this.copyTextureToTexture=function(y,B,G=null,d=null,_=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),d=arguments[0]||null,y=arguments[1],B=arguments[2],_=arguments[3]||0,G=null);let E,C,k,D,W,J;G!==null?(E=G.max.x-G.min.x,C=G.max.y-G.min.y,k=G.min.x,D=G.min.y):(E=y.image.width,C=y.image.height,k=0,D=0),d!==null?(W=d.x,J=d.y):(W=0,J=0);const V=ge.convert(B.format),j=ge.convert(B.type);ze.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const $=O.getParameter(O.UNPACK_ROW_LENGTH),de=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Se=O.getParameter(O.UNPACK_SKIP_PIXELS),ue=O.getParameter(O.UNPACK_SKIP_ROWS),se=O.getParameter(O.UNPACK_SKIP_IMAGES),ve=y.isCompressedTexture?y.mipmaps[_]:y.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ve.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,k),O.pixelStorei(O.UNPACK_SKIP_ROWS,D),y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_,W,J,E,C,V,j,ve.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_,W,J,ve.width,ve.height,V,ve.data):O.texSubImage2D(O.TEXTURE_2D,_,W,J,V,j,ve),O.pixelStorei(O.UNPACK_ROW_LENGTH,$),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,se),_===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(y,B,G=null,d=null,_=0){y.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,d=arguments[1]||null,y=arguments[2],B=arguments[3],_=arguments[4]||0);let E,C,k,D,W,J,V,j,$;const de=y.isCompressedTexture?y.mipmaps[_]:y.image;G!==null?(E=G.max.x-G.min.x,C=G.max.y-G.min.y,k=G.max.z-G.min.z,D=G.min.x,W=G.min.y,J=G.min.z):(E=de.width,C=de.height,k=de.depth,D=0,W=0,J=0),d!==null?(V=d.x,j=d.y,$=d.z):(V=0,j=0,$=0);const Se=ge.convert(B.format),ue=ge.convert(B.type);let se;if(B.isData3DTexture)ze.setTexture3D(B,0),se=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)ze.setTexture2DArray(B,0),se=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const ve=O.getParameter(O.UNPACK_ROW_LENGTH),pe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ie=O.getParameter(O.UNPACK_SKIP_PIXELS),it=O.getParameter(O.UNPACK_SKIP_ROWS),rt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,de.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,D),O.pixelStorei(O.UNPACK_SKIP_ROWS,W),O.pixelStorei(O.UNPACK_SKIP_IMAGES,J),y.isDataTexture||y.isData3DTexture?O.texSubImage3D(se,_,V,j,$,E,C,k,Se,ue,de.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(se,_,V,j,$,E,C,k,Se,de.data):O.texSubImage3D(se,_,V,j,$,E,C,k,Se,ue,de),O.pixelStorei(O.UNPACK_ROW_LENGTH,ve),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ie),O.pixelStorei(O.UNPACK_SKIP_ROWS,it),O.pixelStorei(O.UNPACK_SKIP_IMAGES,rt),_===0&&B.generateMipmaps&&O.generateMipmap(se),Le.unbindTexture()},this.initRenderTarget=function(y){Ye.get(y).__webglFramebuffer===void 0&&ze.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ze.setTextureCube(y,0):y.isData3DTexture?ze.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ze.setTexture2DArray(y,0):ze.setTexture2D(y,0),Le.unbindTexture()},this.resetState=function(){H=0,N=0,I=null,Le.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ua?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===zs?"display-p3":"srgb"}}class R_ extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class C_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return da("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new F;class ga{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ga(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nl=new F,il=new dt,rl=new dt,L_=new F,sl=new Je,vs=new F,wo=new An,ol=new Je,Ro=new Hr;class I_ extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oa,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vs),this.boundingBox.expandByPoint(vs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vs),this.boundingSphere.expandByPoint(vs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(r),e.ray.intersectsSphere(wo)!==!1&&(ol.copy(r).invert(),Ro.copy(e.ray).applyMatrix4(ol),!(this.boundingBox!==null&&Ro.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ro)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oa?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ih?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;il.fromBufferAttribute(r.attributes.skinIndex,e),rl.fromBufferAttribute(r.attributes.skinWeight,e),nl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=rl.getComponent(s);if(o!==0){const a=il.getComponent(s);sl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(L_.copy(nl).applyMatrix4(sl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fu extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _a extends Pt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Xt,u=Xt,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new Je,P_=new Je;class va{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:P_;al.multiplyMatrices(a,t[s]),al.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new va(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _a(t,e,e,rn,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new fu),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class $o extends Kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new Je,cl=new Je,Ss=[],ll=new Xn,D_=new Je,Ar=new Yt,br=new An;class N_ extends Yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,D_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),ll.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),br.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Zi),cl.multiplyMatrices(n,Zi),Ar.matrixWorld=cl,Ar.raycast(e,Ss);for(let o=0,a=Ss.length;o<a;o++){const c=Ss[o];c.instanceId=s,c.object=this,t.push(c)}Ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _a(new Float32Array(r*this.count),r,this.count,la,$t));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pu extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bs=new F,ks=new F,ul=new Je,wr=new Hr,xs=new An,Co=new F,hl=new F;class Sa extends St{constructor(e=new bn,t=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Bs.fromBufferAttribute(t,r-1),ks.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bs.distanceTo(ks);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),xs.radius+=s,e.ray.intersectsSphere(xs)===!1)return;ul.copy(r).invert(),wr.copy(e.ray).applyMatrix4(ul);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),S=Math.min(u.count,o.start+o.count);for(let x=p,g=S-1;x<g;x+=l){const m=u.getX(x),w=u.getX(x+1),A=Ms(this,e,wr,c,m,w);A&&t.push(A)}if(this.isLineLoop){const x=u.getX(S-1),g=u.getX(p),m=Ms(this,e,wr,c,x,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let x=p,g=S-1;x<g;x+=l){const m=Ms(this,e,wr,c,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=Ms(this,e,wr,c,S-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ms(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Bs.fromBufferAttribute(o,r),ks.fromBufferAttribute(o,s),t.distanceSqToSegment(Bs,ks,Co,hl)>n)return;Co.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Co);if(!(c<e.near||c>e.far))return{distance:c,point:hl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const dl=new F,fl=new F;class U_ extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)dl.fromBufferAttribute(t,r),fl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+dl.distanceTo(fl);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O_ extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mu extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pl=new Je,Jo=new Hr,Es=new An,ys=new F;class F_ extends St{constructor(e=new bn,t=new mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Es.radius+=s,e.ray.intersectsSphere(Es)===!1)return;pl.copy(r).invert(),Jo.copy(e.ray).applyMatrix4(pl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let S=f,x=p;S<x;S++){const g=l.getX(S);ys.fromBufferAttribute(h,g),ml(ys,g,c,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let S=f,x=p;S<x;S++)ys.fromBufferAttribute(h,S),ml(ys,S,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ml(i,e,t,n,r,s,o){const a=Jo.distanceSqToPoint(i);if(a<t){const c=new F;Jo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class B_ extends fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class xa extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pn extends xa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ts(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function k_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function H_(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function gl(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function gu(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Vr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class z_ extends Vr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lc,endingEnd:lc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case uc:s=e,a=2*t-n;break;case hc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uc:o=e,c=2*n-t;break;case hc:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,S=(n-t)/(r-t),x=S*S,g=x*S,m=-f*g+2*f*x-f*S,w=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*S+1,A=(-1-p)*g+(1.5+p)*x+.5*S,R=p*g-p*x;for(let H=0;H!==a;++H)s[H]=m*o[u+H]+w*o[l+H]+A*o[c+H]+R*o[h+H];return s}}class G_ extends Vr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class V_ extends Vr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ts(t,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ts(e.times,Array),values:Ts(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new V_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new G_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new z_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&k_(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===eo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const h=a*n,f=h-n,p=h+n;for(let S=0;S!==n;++S){const x=t[h+S];if(x!==t[f+S]||x!==t[p+S]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Br;class _r extends wn{constructor(e,t,n){super(e,t,n)}}_r.prototype.ValueTypeName="bool";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=Fr;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class _u extends wn{}_u.prototype.ValueTypeName="color";class dr extends wn{}dr.prototype.ValueTypeName="number";class W_ extends Vr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)yn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class fr extends wn{InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}}fr.prototype.ValueTypeName="quaternion";fr.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends wn{constructor(e,t,n){super(e,t,n)}}vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=Fr;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends wn{}pr.prototype.ValueTypeName="vector";class X_{constructor(e="",t=-1,n=[],r=zh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Y_(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=H_(c);c=gl(c,1,u),l=gl(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new dr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,S,x){if(p.length!==0){const g=[],m=[];gu(p,g,m,S),g.length!==0&&x.push(new h(f,g,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let S;for(S=0;S<f.length;S++)if(f[S].morphTargets)for(let x=0;x<f[S].morphTargets.length;x++)p[f[S].morphTargets[x]]=-1;for(const x in p){const g=[],m=[];for(let w=0;w!==f[S].morphTargets.length;++w){const A=f[S];g.push(A.time),m.push(A.morphTarget===x?1:0)}r.push(new dr(".morphTargetInfluence["+x+"]",g,m))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(pr,p+".position",f,"pos",r),n(fr,p+".quaternion",f,"rot",r),n(pr,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function K_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return _u;case"quaternion":return fr;case"bool":case"boolean":return _r;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Y_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=K_(i.type);if(i.times===void 0){const t=[],n=[];gu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vu{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],S=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return S}return null}}}const q_=new vu;class Ci{constructor(e){this.manager=e!==void 0?e:q_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class j_ extends Error{constructor(e,t){super(e),this.response=t}}class Ma extends Ci{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ri.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:r});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=On[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,S=p!==0;let x=0;const g=new ReadableStream({start(m){w();function w(){h.read().then(({done:A,value:R})=>{if(A)m.close();else{x+=R.byteLength;const H=new ProgressEvent("progress",{lengthComputable:S,loaded:x,total:p});for(let N=0,I=u.length;N<I;N++){const z=u[N];z.onProgress&&z.onProgress(H)}m.enqueue(R),w()}},A=>{m.error(A)})}}});return new Response(g)}else throw new j_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(S=>p.decode(S))}}}).then(l=>{ri.add(e,l);const u=On[e];delete On[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=On[e];if(u===void 0)throw this.manager.itemError(e),l;delete On[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Z_ extends Ci{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ri.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=kr("img");function c(){u(),ri.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $_ extends Ci{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new _a,a=new Ma(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:xn,o.wrapT=l.wrapT!==void 0?l.wrapT:xn,o.magFilter=l.magFilter!==void 0?l.magFilter:It,o.minFilter=l.minFilter!==void 0?l.minFilter:It,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Mn),l.mipmapCount===1&&(o.minFilter=It),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,r),o}}class J_ extends Ci{constructor(e){super(e)}load(e,t,n,r){const s=new Pt,o=new Z_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ea extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Lo=new Je,_l=new F,vl=new F;class ya{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q_ extends ya{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ur*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Su extends Ea{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sl=new Je,Rr=new F,Io=new F;class e0 extends ya{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rr),Io.copy(n.position),Io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Io),n.updateMatrixWorld(),r.makeTranslation(-Rr.x,-Rr.y,-Rr.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class t0 extends Ea{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class n0 extends ya{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vs extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class i0 extends Ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ri.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),ri.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ri.add(e,c),s.manager.itemStart(e)}}const Ta="\\[\\]\\.:\\/",r0=new RegExp("["+Ta+"]","g"),Aa="[^"+Ta+"]",s0="[^"+Ta.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",Aa),a0=/(WCOD+)?/.source.replace("WCOD",s0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Aa),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Aa),u0=new RegExp("^"+o0+a0+c0+l0+"$"),h0=["material","materials","bones","map"];class d0{constructor(e,t,n){const r=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){const t=u0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);h0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=d0;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const Ml={type:"change"},Po={type:"start"},El={type:"end"},As=new Hr,yl=new ti,f0=Math.cos(70*ei.DEG2RAD);class p0 extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",xe),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ml),n.update(),s=r.NONE},this.update=function(){const v=new F,Y=new yn().setFromUnitVectors(e.up,new F(0,1,0)),P=Y.clone().invert(),q=new F,ae=new yn,Ce=new F,ke=2*Math.PI;return function(xt=null){const nt=n.object.position;v.copy(nt).sub(n.target),v.applyQuaternion(Y),a.setFromVector3(v),n.autoRotate&&s===r.NONE&&Z(T(xt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Mt=n.minAzimuthAngle,Et=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(Et)&&(Mt<-Math.PI?Mt+=ke:Mt>Math.PI&&(Mt-=ke),Et<-Math.PI?Et+=ke:Et>Math.PI&&(Et-=ke),Mt<=Et?a.theta=Math.max(Mt,Math.min(Et,a.theta)):a.theta=a.theta>(Mt+Et)/2?Math.max(Mt,a.theta):Math.min(Et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ft=!1;if(n.zoomToCursor&&N||n.object.isOrthographicCamera)a.radius=Te(a.radius);else{const Bt=a.radius;a.radius=Te(a.radius*l),Ft=Bt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(P),nt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&N){let Bt=null;if(n.object.isPerspectiveCamera){const mn=v.length();Bt=Te(mn*l);const Rn=mn-Bt;n.object.position.addScaledVector(R,Rn),n.object.updateMatrixWorld(),Ft=!!Rn}else if(n.object.isOrthographicCamera){const mn=new F(H.x,H.y,0);mn.unproject(n.object);const Rn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ft=Rn!==n.object.zoom;const Cn=new F(H.x,H.y,0);Cn.unproject(n.object),n.object.position.sub(Cn).add(mn),n.object.updateMatrixWorld(),Bt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Bt).add(n.object.position):(As.origin.copy(n.object.position),As.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(As.direction))<f0?e.lookAt(n.target):(yl.setFromNormalAndCoplanarPoint(n.object.up,n.target),As.intersectPlane(yl,n.target))))}else if(n.object.isOrthographicCamera){const Bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ft=!0)}return l=1,N=!1,Ft||q.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>o?(n.dispatchEvent(Ml),q.copy(n.object.position),ae.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",be),n.domElement.removeEventListener("pointerdown",ft),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",le),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",M),n.domElement.getRootNode().removeEventListener("keydown",Re,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new xl,c=new xl;let l=1;const u=new F,h=new Ue,f=new Ue,p=new Ue,S=new Ue,x=new Ue,g=new Ue,m=new Ue,w=new Ue,A=new Ue,R=new F,H=new Ue;let N=!1;const I=[],z={};let b=!1;function T(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function U(v){const Y=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*Y)}function Z(v){c.theta-=v}function K(v){c.phi-=v}const ne=function(){const v=new F;return function(P,q){v.setFromMatrixColumn(q,0),v.multiplyScalar(-P),u.add(v)}}(),ie=function(){const v=new F;return function(P,q){n.screenSpacePanning===!0?v.setFromMatrixColumn(q,1):(v.setFromMatrixColumn(q,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(P),u.add(v)}}(),Q=function(){const v=new F;return function(P,q){const ae=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;v.copy(Ce).sub(n.target);let ke=v.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),ne(2*P*ke/ae.clientHeight,n.object.matrix),ie(2*q*ke/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ne(P*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),ie(q*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function re(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Me(v,Y){if(!n.zoomToCursor)return;N=!0;const P=n.domElement.getBoundingClientRect(),q=v-P.left,ae=Y-P.top,Ce=P.width,ke=P.height;H.x=q/Ce*2-1,H.y=-(ae/ke)*2+1,R.set(H.x,H.y,1).unproject(n.object).sub(n.object.position).normalize()}function Te(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function Ae(v){h.set(v.clientX,v.clientY)}function De(v){Me(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function We(v){S.set(v.clientX,v.clientY)}function te(v){f.set(v.clientX,v.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;Z(2*Math.PI*p.x/Y.clientHeight),K(2*Math.PI*p.y/Y.clientHeight),h.copy(f),n.update()}function he(v){w.set(v.clientX,v.clientY),A.subVectors(w,m),A.y>0?re(U(A.y)):A.y<0&&ee(U(A.y)),m.copy(w),n.update()}function fe(v){x.set(v.clientX,v.clientY),g.subVectors(x,S).multiplyScalar(n.panSpeed),Q(g.x,g.y),S.copy(x),n.update()}function _e(v){Me(v.clientX,v.clientY),v.deltaY<0?ee(U(v.deltaY)):v.deltaY>0&&re(U(v.deltaY)),n.update()}function Ne(v){let Y=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),Y=!0;break}Y&&(v.preventDefault(),n.update())}function Oe(v){if(I.length===1)h.set(v.pageX,v.pageY);else{const Y=Pe(v),P=.5*(v.pageX+Y.x),q=.5*(v.pageY+Y.y);h.set(P,q)}}function qe(v){if(I.length===1)S.set(v.pageX,v.pageY);else{const Y=Pe(v),P=.5*(v.pageX+Y.x),q=.5*(v.pageY+Y.y);S.set(P,q)}}function O(v){const Y=Pe(v),P=v.pageX-Y.x,q=v.pageY-Y.y,ae=Math.sqrt(P*P+q*q);m.set(0,ae)}function Ke(v){n.enableZoom&&O(v),n.enablePan&&qe(v)}function Ve(v){n.enableZoom&&O(v),n.enableRotate&&Oe(v)}function at(v){if(I.length==1)f.set(v.pageX,v.pageY);else{const P=Pe(v),q=.5*(v.pageX+P.x),ae=.5*(v.pageY+P.y);f.set(q,ae)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;Z(2*Math.PI*p.x/Y.clientHeight),K(2*Math.PI*p.y/Y.clientHeight),h.copy(f)}function Le(v){if(I.length===1)x.set(v.pageX,v.pageY);else{const Y=Pe(v),P=.5*(v.pageX+Y.x),q=.5*(v.pageY+Y.y);x.set(P,q)}g.subVectors(x,S).multiplyScalar(n.panSpeed),Q(g.x,g.y),S.copy(x)}function Qe(v){const Y=Pe(v),P=v.pageX-Y.x,q=v.pageY-Y.y,ae=Math.sqrt(P*P+q*q);w.set(0,ae),A.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),re(A.y),m.copy(w);const Ce=(v.pageX+Y.x)*.5,ke=(v.pageY+Y.y)*.5;Me(Ce,ke)}function Ye(v){n.enableZoom&&Qe(v),n.enablePan&&Le(v)}function ze(v){n.enableZoom&&Qe(v),n.enableRotate&&at(v)}function ft(v){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",M)),!ge(v)&&(je(v),v.pointerType==="touch"?Fe(v):X(v)))}function L(v){n.enabled!==!1&&(v.pointerType==="touch"?me(v):oe(v))}function M(v){switch(we(v),I.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",M),n.dispatchEvent(El),s=r.NONE;break;case 1:const Y=I[0],P=z[Y];Fe({pointerId:Y,pageX:P.x,pageY:P.y});break}}function X(v){let Y;switch(v.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Ii.DOLLY:if(n.enableZoom===!1)return;De(v),s=r.DOLLY;break;case Ii.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;We(v),s=r.PAN}else{if(n.enableRotate===!1)return;Ae(v),s=r.ROTATE}break;case Ii.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;Ae(v),s=r.ROTATE}else{if(n.enablePan===!1)return;We(v),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Po)}function oe(v){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;te(v);break;case r.DOLLY:if(n.enableZoom===!1)return;he(v);break;case r.PAN:if(n.enablePan===!1)return;fe(v);break}}function le(v){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(v.preventDefault(),n.dispatchEvent(Po),_e(ce(v)),n.dispatchEvent(El))}function ce(v){const Y=v.deltaMode,P={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(Y){case 1:P.deltaY*=16;break;case 2:P.deltaY*=100;break}return v.ctrlKey&&!b&&(P.deltaY*=10),P}function Re(v){v.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",Ee,{passive:!0,capture:!0}))}function Ee(v){v.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",Ee,{passive:!0,capture:!0}))}function xe(v){n.enabled===!1||n.enablePan===!1||Ne(v)}function Fe(v){switch(He(v),I.length){case 1:switch(n.touches.ONE){case Pi.ROTATE:if(n.enableRotate===!1)return;Oe(v),s=r.TOUCH_ROTATE;break;case Pi.PAN:if(n.enablePan===!1)return;qe(v),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ke(v),s=r.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ve(v),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Po)}function me(v){switch(He(v),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;at(v),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Le(v),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(v),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(v),n.update();break;default:s=r.NONE}}function be(v){n.enabled!==!1&&v.preventDefault()}function je(v){I.push(v.pointerId)}function we(v){delete z[v.pointerId];for(let Y=0;Y<I.length;Y++)if(I[Y]==v.pointerId){I.splice(Y,1);return}}function ge(v){for(let Y=0;Y<I.length;Y++)if(I[Y]==v.pointerId)return!0;return!1}function He(v){let Y=z[v.pointerId];Y===void 0&&(Y=new Ue,z[v.pointerId]=Y),Y.set(v.pageX,v.pageY)}function Pe(v){const Y=v.pointerId===I[0]?I[1]:I[0];return z[Y]}n.domElement.addEventListener("contextmenu",be),n.domElement.addEventListener("pointerdown",ft),n.domElement.addEventListener("pointercancel",M),n.domElement.addEventListener("wheel",le,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Re,{passive:!0,capture:!0}),this.update()}}function Tl(i,e){if(e===Gh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yo||e===Yl){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Yo)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class m0 extends Ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new x0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new L0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new P0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new A0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new C0(t)}),this.register(function(t){return new R0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new N0(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Nr.extractUrlBase(e);o=Nr.resolveURL(l,this.path)}else o=Nr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ma(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===xu){try{o[et.KHR_BINARY_GLTF]=new U0(e)}catch(h){r&&r(h);return}s=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new q0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new v0;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new O0(s,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new F0;break;case et.KHR_MESH_QUANTIZATION:o[h]=new B0;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function g0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _0{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Be(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],bt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vs(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new t0(u),l.distance=h;break;case"spot":l=new Su(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class v0{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){const r=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Gt))}return Promise.all(r)}}class S0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class x0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(s)}}class M0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class E0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class y0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class T0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class A0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(a[0],a[1],a[2],bt),Promise.all(s)}}class b0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class w0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(a[0],a[1],a[2],bt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(s)}}class R0{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class C0{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class L0{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class I0{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class P0{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D0{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}}class N0{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==tn.TRIANGLES&&l.mode!==tn.TRIANGLE_STRIP&&l.mode!==tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(const S of h){const x=new Je,g=new F,m=new yn,w=new F(1,1,1),A=new N_(S.geometry,S.material,f);for(let R=0;R<f;R++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,R),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,R),c.SCALE&&w.fromBufferAttribute(c.SCALE,R),A.setMatrixAt(R,x.compose(g,m,w));for(const R in c)if(R==="_COLOR_0"){const H=c[R];A.instanceColor=new $o(H.array,H.itemSize,H.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&S.geometry.setAttribute(R,c[R]);St.prototype.copy.call(A,S),this.parser.assignFinalMaterial(A),p.push(A)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const xu="glTF",Cr=12,Al={JSON:1313821514,BIN:5130562};class U0{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Cr,s=new DataView(e,Cr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Al.JSON){const l=new Uint8Array(e,Cr+o,a);this.content=n.decode(l)}else if(c===Al.BIN){const l=Cr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class O0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Qo[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Qo[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=nr[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(const S in p.attributes){const x=p.attributes[S],g=c[S];g!==void 0&&(x.normalized=g)}h(p)},a,l,bt,f)})})}}class F0{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class B0{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Mu extends Vr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,h=(n-t)/u,f=h*h,p=f*h,S=e*l,x=S-l,g=-2*p+3*f,m=p-f,w=1-g,A=m-f+h;for(let R=0;R!==a;R++){const H=o[x+R+a],N=o[x+R+c]*u,I=o[S+R+a],z=o[S+R]*u;s[R]=w*H+A*N+g*I+m*z}return s}}const k0=new yn;class H0 extends Mu{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return k0.fromArray(s).normalize().toArray(s),s}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bl={9728:Xt,9729:It,9984:Hl,9985:Rs,9986:Lr,9987:Mn},wl={33071:xn,33648:Ps,10497:or},Do={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},z0={CUBICSPLINE:void 0,LINEAR:Br,STEP:Fr},No={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new xa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),i.DefaultMaterial}function vi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function V0(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function W0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function X0(i){let e;const t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Uo(t.attributes):e=i.indices+":"+Uo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Uo(i.targets[n]);return e}function Uo(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ea(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function K0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Y0=new Je;class q0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new g0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new J_(this.options.manager):this.textureLoader=new i0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return vi(s,a,r),Bn(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Nr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Do[r.type],a=nr[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new Kt(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Do[r.type],l=nr[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,S=r.normalized===!0;let x,g;if(p&&p!==h){const m=Math.floor(f/p),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let A=t.cache.get(w);A||(x=new l(a,m*p,r.count*p/u),A=new C_(x,p/u),t.cache.add(w,A)),g=new ga(A,c,f%p/u,S)}else a===null?x=new l(r.count*c):x=new l(a,f,r.count*c),g=new Kt(x,c,S);if(r.sparse!==void 0){const m=Do.SCALAR,w=nr[r.sparse.indices.componentType],A=r.sparse.indices.byteOffset||0,R=r.sparse.values.byteOffset||0,H=new w(o[1],A,r.sparse.count*m),N=new l(o[2],R,r.sparse.count*c);a!==null&&(g=new Kt(g.array.slice(),g.itemSize,g.normalized));for(let I=0,z=H.length;I<z;I++){const b=H[I];if(g.setX(b,N[I*c]),c>=2&&g.setY(b,N[I*c+1]),c>=3&&g.setZ(b,N[I*c+2]),c>=4&&g.setW(b,N[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=bl[f.magFilter]||It,u.minFilter=bl[f.minFilter]||Mn,u.wrapS=wl[f.wrapS]||or,u.wrapT=wl[f.wrapT]||or,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let S=f;t.isImageBitmapLoader===!0&&(S=function(x){const g=new Pt(x);g.needsUpdate=!0,f(g)}),t.load(Nr.resolveURL(h,s.path),S,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Bn(h,o),h.userData.mimeType=o.mimeType||K0(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new mu,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new pu,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return xa}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[et.KHR_MATERIALS_UNLIT]){const h=r[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],bt),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Gt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=vn);const u=s.alphaMode||No.OPAQUE;if(u===No.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===No.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yi&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==yi&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yi){const h=s.emissiveFactor;a.emissive=new Be().setRGB(h[0],h[1],h[2],bt)}return s.emissiveTexture!==void 0&&o!==yi&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Gt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Bn(h,s),t.associations.set(h,{materials:e}),s.extensions&&vi(r,h,s),h})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rl(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=X0(l),h=r[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Rl(new bn,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?G0(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,S=u.length;p<S;p++){const x=u[p],g=o[p];let m;const w=l[p];if(g.mode===tn.TRIANGLES||g.mode===tn.TRIANGLE_STRIP||g.mode===tn.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new I_(x,w):new Yt(x,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===tn.TRIANGLE_STRIP?m.geometry=Tl(m.geometry,Yl):g.mode===tn.TRIANGLE_FAN&&(m.geometry=Tl(m.geometry,Yo));else if(g.mode===tn.LINES)m=new U_(x,w);else if(g.mode===tn.LINE_STRIP)m=new Sa(x,w);else if(g.mode===tn.LINE_LOOP)m=new O_(x,w);else if(g.mode===tn.POINTS)m=new F_(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&W0(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Bn(m,s),g.extensions&&vi(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,S=h.length;p<S;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&vi(r,h[0],s),h[0];const f=new Ti;s.extensions&&vi(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,S=h.length;p<S;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(ei.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new pa(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Je;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new va(a,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const p=r.channels[h],S=r.samplers[p.sampler],x=p.target,g=x.node,m=r.parameters!==void 0?r.parameters[S.input]:S.input,w=r.parameters!==void 0?r.parameters[S.output]:S.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",w)),l.push(S),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],S=h[2],x=h[3],g=h[4],m=[];for(let w=0,A=f.length;w<A;w++){const R=f[w],H=p[w],N=S[w],I=x[w],z=g[w];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const b=n._createAnimationTracks(R,H,N,I,z);if(b)for(let T=0;T<b.length;T++)m.push(b[T])}return new X_(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Y0)});for(let p=0,S=h.length;p<S;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new fu:l.length>1?u=new Ti:l.length===1?u=l[0]:u=new St,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Bn(u,s),s.extensions&&vi(n,u,s),s.matrix!==void 0){const h=new Je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Ti;n.name&&(s.name=r.createUniqueName(n.name)),Bn(s,n),n.extensions&&vi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof fn||f instanceof Pt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];Jn[s.path]===Jn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Jn[s.path]){case Jn.weights:l=dr;break;case Jn.rotation:l=fr;break;case Jn.position:case Jn.scale:l=pr;break;default:switch(n.itemSize){case 1:l=dr;break;case 2:case 3:default:l=pr;break}break}const u=r.interpolation!==void 0?z0[r.interpolation]:Br,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const S=new l(c[f]+"."+Jn[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),o.push(S)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ea(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof fr?H0:Mu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function j0(i,e,t){const n=e.attributes,r=new Xn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),a.normalized){const u=ea(nr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,c=new F;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,S=f.max;if(p!==void 0&&S!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(S[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(S[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(S[2]))),f.normalized){const x=ea(nr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new An;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Rl(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Qo[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ot.workingColorSpace!==bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Bn(i,e),j0(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?V0(i,e.targets,t):i})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var nn=Uint8Array,Ji=Uint16Array,Z0=Int32Array,Eu=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yu=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$0=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tu=function(i,e){for(var t=new Ji(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Z0(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return{b:t,r}},Au=Tu(Eu,2),bu=Au.b,J0=Au.r;bu[28]=258,J0[258]=28;var Q0=Tu(yu,0),ev=Q0.b,ta=new Ji(32768);for(var gt=0;gt<32768;++gt){var Qn=(gt&43690)>>1|(gt&21845)<<1;Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,ta[gt]=((Qn&65280)>>8|(Qn&255)<<8)>>1}var Ur=function(i,e,t){for(var n=i.length,r=0,s=new Ji(e);r<n;++r)i[r]&&++s[i[r]-1];var o=new Ji(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Ji(1<<e);var c=15-e;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[ta[h]>>c]=l}else for(a=new Ji(n),r=0;r<n;++r)i[r]&&(a[r]=ta[o[i[r]-1]++]>>15-i[r]);return a},Wr=new nn(288);for(var gt=0;gt<144;++gt)Wr[gt]=8;for(var gt=144;gt<256;++gt)Wr[gt]=9;for(var gt=256;gt<280;++gt)Wr[gt]=7;for(var gt=280;gt<288;++gt)Wr[gt]=8;var wu=new nn(32);for(var gt=0;gt<32;++gt)wu[gt]=5;var tv=Ur(Wr,9,1),nv=Ur(wu,5,1),Oo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},ln=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Fo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},iv=function(i){return(i+7)/8|0},rv=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new nn(i.subarray(e,t))},sv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],un=function(i,e,t){var n=new Error(e||sv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,un),!t)throw n;return n},ov=function(i,e,t,n){var r=i.length,s=0;if(!r||e.f&&!e.l)return t||new nn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new nn(r*3));var l=function(O){var Ke=t.length;if(O>Ke){var Ve=new nn(Math.max(Ke*2,O));Ve.set(t),t=Ve}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,S=e.d,x=e.m,g=e.n,m=r*8;do{if(!p){u=ln(i,h,1);var w=ln(i,h+1,3);if(h+=3,w)if(w==1)p=tv,S=nv,x=9,g=5;else if(w==2){var N=ln(i,h,31)+257,I=ln(i,h+10,15)+4,z=N+ln(i,h+5,31)+1;h+=14;for(var b=new nn(z),T=new nn(19),U=0;U<I;++U)T[$0[U]]=ln(i,h+U*3,7);h+=I*3;for(var Z=Oo(T),K=(1<<Z)-1,ne=Ur(T,Z,1),U=0;U<z;){var ie=ne[ln(i,h,K)];h+=ie&15;var A=ie>>4;if(A<16)b[U++]=A;else{var Q=0,re=0;for(A==16?(re=3+ln(i,h,3),h+=2,Q=b[U-1]):A==17?(re=3+ln(i,h,7),h+=3):A==18&&(re=11+ln(i,h,127),h+=7);re--;)b[U++]=Q}}var ee=b.subarray(0,N),Me=b.subarray(N);x=Oo(ee),g=Oo(Me),p=Ur(ee,x,1),S=Ur(Me,g,1)}else un(1);else{var A=iv(h)+4,R=i[A-4]|i[A-3]<<8,H=A+R;if(H>r){c&&un(0);break}a&&l(f+R),t.set(i.subarray(A,H),f),e.b=f+=R,e.p=h=H*8,e.f=u;continue}if(h>m){c&&un(0);break}}a&&l(f+131072);for(var Te=(1<<x)-1,Ae=(1<<g)-1,De=h;;De=h){var Q=p[Fo(i,h)&Te],We=Q>>4;if(h+=Q&15,h>m){c&&un(0);break}if(Q||un(2),We<256)t[f++]=We;else if(We==256){De=h,p=null;break}else{var te=We-254;if(We>264){var U=We-257,he=Eu[U];te=ln(i,h,(1<<he)-1)+bu[U],h+=he}var fe=S[Fo(i,h)&Ae],_e=fe>>4;fe||un(3),h+=fe&15;var Me=ev[_e];if(_e>3){var he=yu[_e];Me+=Fo(i,h)&(1<<he)-1,h+=he}if(h>m){c&&un(0);break}a&&l(f+131072);var Ne=f+te;if(f<Me){var Oe=s-Me,qe=Math.min(Me,Ne);for(Oe+f<0&&un(3);f<qe;++f)t[f]=n[Oe+f]}for(;f<Ne;++f)t[f]=t[f-Me]}}e.l=p,e.p=De,e.b=f,e.f=u,p&&(u=1,e.m=x,e.d=S,e.n=g)}while(!u);return f!=t.length&&o?rv(t,0,f):t.subarray(0,f)},av=new nn(0),cv=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&un(6,"invalid zlib data"),(i[1]>>5&1)==1&&un(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function bs(i,e){return ov(i.subarray(cv(i),-4),{i:2},e,e)}var lv=typeof TextDecoder<"u"&&new TextDecoder,uv=0;try{lv.decode(av,{stream:!0}),uv=1}catch{}class hv extends $_{constructor(e){super(e),this.type=ii}parse(e){const b=Math.pow(2.7182818,2.2);function T(d,_){let E=0;for(let k=0;k<65536;++k)(k==0||d[k>>3]&1<<(k&7))&&(_[E++]=k);const C=E-1;for(;E<65536;)_[E++]=0;return C}function U(d){for(let _=0;_<16384;_++)d[_]={},d[_].len=0,d[_].lit=0,d[_].p=null}const Z={l:0,c:0,lc:0};function K(d,_,E,C,k){for(;E<d;)_=_<<8|He(C,k),E+=8;E-=d,Z.l=_>>E&(1<<d)-1,Z.c=_,Z.lc=E}const ne=new Array(59);function ie(d){for(let E=0;E<=58;++E)ne[E]=0;for(let E=0;E<65537;++E)ne[d[E]]+=1;let _=0;for(let E=58;E>0;--E){const C=_+ne[E]>>1;ne[E]=_,_=C}for(let E=0;E<65537;++E){const C=d[E];C>0&&(d[E]=C|ne[C]++<<6)}}function Q(d,_,E,C,k,D){const W=_;let J=0,V=0;for(;C<=k;C++){if(W.value-_.value>E)return!1;K(6,J,V,d,W);const j=Z.l;if(J=Z.c,V=Z.lc,D[C]=j,j==63){if(W.value-_.value>E)throw new Error("Something wrong with hufUnpackEncTable");K(8,J,V,d,W);let $=Z.l+6;if(J=Z.c,V=Z.lc,C+$>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;$--;)D[C++]=0;C--}else if(j>=59){let $=j-59+2;if(C+$>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;$--;)D[C++]=0;C--}}ie(D)}function re(d){return d&63}function ee(d){return d>>6}function Me(d,_,E,C){for(;_<=E;_++){const k=ee(d[_]),D=re(d[_]);if(k>>D)throw new Error("Invalid table entry");if(D>14){const W=C[k>>D-14];if(W.len)throw new Error("Invalid table entry");if(W.lit++,W.p){const J=W.p;W.p=new Array(W.lit);for(let V=0;V<W.lit-1;++V)W.p[V]=J[V]}else W.p=new Array(1);W.p[W.lit-1]=_}else if(D){let W=0;for(let J=1<<14-D;J>0;J--){const V=C[(k<<14-D)+W];if(V.len||V.p)throw new Error("Invalid table entry");V.len=D,V.lit=_,W++}}}return!0}const Te={c:0,lc:0};function Ae(d,_,E,C){d=d<<8|He(E,C),_+=8,Te.c=d,Te.lc=_}const De={c:0,lc:0};function We(d,_,E,C,k,D,W,J,V){if(d==_){C<8&&(Ae(E,C,k,D),E=Te.c,C=Te.lc),C-=8;let j=E>>C;if(j=new Uint8Array([j])[0],J.value+j>V)return!1;const $=W[J.value-1];for(;j-- >0;)W[J.value++]=$}else if(J.value<V)W[J.value++]=d;else return!1;De.c=E,De.lc=C}function te(d){return d&65535}function he(d){const _=te(d);return _>32767?_-65536:_}const fe={a:0,b:0};function _e(d,_){const E=he(d),k=he(_),D=E+(k&1)+(k>>1),W=D,J=D-k;fe.a=W,fe.b=J}function Ne(d,_){const E=te(d),C=te(_),k=E-(C>>1)&65535,D=C+k-32768&65535;fe.a=D,fe.b=k}function Oe(d,_,E,C,k,D,W){const J=W<16384,V=E>k?k:E;let j=1,$,de;for(;j<=V;)j<<=1;for(j>>=1,$=j,j>>=1;j>=1;){de=0;const Se=de+D*(k-$),ue=D*j,se=D*$,ve=C*j,pe=C*$;let Ie,it,rt,Dt;for(;de<=Se;de+=se){let Ge=de;const Xe=de+C*(E-$);for(;Ge<=Xe;Ge+=pe){const vt=Ge+ve,pt=Ge+ue,yt=pt+ve;J?(_e(d[Ge+_],d[pt+_]),Ie=fe.a,rt=fe.b,_e(d[vt+_],d[yt+_]),it=fe.a,Dt=fe.b,_e(Ie,it),d[Ge+_]=fe.a,d[vt+_]=fe.b,_e(rt,Dt),d[pt+_]=fe.a,d[yt+_]=fe.b):(Ne(d[Ge+_],d[pt+_]),Ie=fe.a,rt=fe.b,Ne(d[vt+_],d[yt+_]),it=fe.a,Dt=fe.b,Ne(Ie,it),d[Ge+_]=fe.a,d[vt+_]=fe.b,Ne(rt,Dt),d[pt+_]=fe.a,d[yt+_]=fe.b)}if(E&j){const vt=Ge+ue;J?_e(d[Ge+_],d[vt+_]):Ne(d[Ge+_],d[vt+_]),Ie=fe.a,d[vt+_]=fe.b,d[Ge+_]=Ie}}if(k&j){let Ge=de;const Xe=de+C*(E-$);for(;Ge<=Xe;Ge+=pe){const vt=Ge+ve;J?_e(d[Ge+_],d[vt+_]):Ne(d[Ge+_],d[vt+_]),Ie=fe.a,d[vt+_]=fe.b,d[Ge+_]=Ie}}$=j,j>>=1}return de}function qe(d,_,E,C,k,D,W,J,V){let j=0,$=0;const de=W,Se=Math.trunc(C.value+(k+7)/8);for(;C.value<Se;)for(Ae(j,$,E,C),j=Te.c,$=Te.lc;$>=14;){const se=j>>$-14&16383,ve=_[se];if(ve.len)$-=ve.len,We(ve.lit,D,j,$,E,C,J,V,de),j=De.c,$=De.lc;else{if(!ve.p)throw new Error("hufDecode issues");let pe;for(pe=0;pe<ve.lit;pe++){const Ie=re(d[ve.p[pe]]);for(;$<Ie&&C.value<Se;)Ae(j,$,E,C),j=Te.c,$=Te.lc;if($>=Ie&&ee(d[ve.p[pe]])==(j>>$-Ie&(1<<Ie)-1)){$-=Ie,We(ve.p[pe],D,j,$,E,C,J,V,de),j=De.c,$=De.lc;break}}if(pe==ve.lit)throw new Error("hufDecode issues")}}const ue=8-k&7;for(j>>=ue,$-=ue;$>0;){const se=_[j<<14-$&16383];if(se.len)$-=se.len,We(se.lit,D,j,$,E,C,J,V,de),j=De.c,$=De.lc;else throw new Error("hufDecode issues")}return!0}function O(d,_,E,C,k,D){const W={value:0},J=E.value,V=ge(_,E),j=ge(_,E);E.value+=4;const $=ge(_,E);if(E.value+=4,V<0||V>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const de=new Array(65537),Se=new Array(16384);U(Se);const ue=C-(E.value-J);if(Q(d,E,ue,V,j,de),$>8*(C-(E.value-J)))throw new Error("Something wrong with hufUncompress");Me(de,V,j,Se),qe(de,Se,d,E,$,j,D,k,W)}function Ke(d,_,E){for(let C=0;C<E;++C)_[C]=d[_[C]]}function Ve(d){for(let _=1;_<d.length;_++){const E=d[_-1]+d[_]-128;d[_]=E}}function at(d,_){let E=0,C=Math.floor((d.length+1)/2),k=0;const D=d.length-1;for(;!(k>D||(_[k++]=d[E++],k>D));)_[k++]=d[C++]}function Le(d){let _=d.byteLength;const E=new Array;let C=0;const k=new DataView(d);for(;_>0;){const D=k.getInt8(C++);if(D<0){const W=-D;_-=W+1;for(let J=0;J<W;J++)E.push(k.getUint8(C++))}else{const W=D;_-=2;const J=k.getUint8(C++);for(let V=0;V<W+1;V++)E.push(J)}}return E}function Qe(d,_,E,C,k,D){let W=new DataView(D.buffer);const J=E[d.idx[0]].width,V=E[d.idx[0]].height,j=3,$=Math.floor(J/8),de=Math.ceil(J/8),Se=Math.ceil(V/8),ue=J-(de-1)*8,se=V-(Se-1)*8,ve={value:0},pe=new Array(j),Ie=new Array(j),it=new Array(j),rt=new Array(j),Dt=new Array(j);for(let Xe=0;Xe<j;++Xe)Dt[Xe]=_[d.idx[Xe]],pe[Xe]=Xe<1?0:pe[Xe-1]+de*Se,Ie[Xe]=new Float32Array(64),it[Xe]=new Uint16Array(64),rt[Xe]=new Uint16Array(de*64);for(let Xe=0;Xe<Se;++Xe){let vt=8;Xe==Se-1&&(vt=se);let pt=8;for(let st=0;st<de;++st){st==de-1&&(pt=ue);for(let ct=0;ct<j;++ct)it[ct].fill(0),it[ct][0]=k[pe[ct]++],Ye(ve,C,it[ct]),ze(it[ct],Ie[ct]),ft(Ie[ct]);L(Ie);for(let ct=0;ct<j;++ct)M(Ie[ct],rt[ct],st*64)}let yt=0;for(let st=0;st<j;++st){const ct=E[d.idx[st]].type;for(let Ln=8*Xe;Ln<8*Xe+vt;++Ln){yt=Dt[st][Ln];for(let xr=0;xr<$;++xr){const gn=xr*64+(Ln&7)*8;W.setUint16(yt+0*2*ct,rt[st][gn+0],!0),W.setUint16(yt+1*2*ct,rt[st][gn+1],!0),W.setUint16(yt+2*2*ct,rt[st][gn+2],!0),W.setUint16(yt+3*2*ct,rt[st][gn+3],!0),W.setUint16(yt+4*2*ct,rt[st][gn+4],!0),W.setUint16(yt+5*2*ct,rt[st][gn+5],!0),W.setUint16(yt+6*2*ct,rt[st][gn+6],!0),W.setUint16(yt+7*2*ct,rt[st][gn+7],!0),yt+=8*2*ct}}if($!=de)for(let Ln=8*Xe;Ln<8*Xe+vt;++Ln){const xr=Dt[st][Ln]+8*$*2*ct,gn=$*64+(Ln&7)*8;for(let Zr=0;Zr<pt;++Zr)W.setUint16(xr+Zr*2*ct,rt[st][gn+Zr],!0)}}}const Ge=new Uint16Array(J);W=new DataView(D.buffer);for(let Xe=0;Xe<j;++Xe){E[d.idx[Xe]].decoded=!0;const vt=E[d.idx[Xe]].type;if(E[Xe].type==2)for(let pt=0;pt<V;++pt){const yt=Dt[Xe][pt];for(let st=0;st<J;++st)Ge[st]=W.getUint16(yt+st*2*vt,!0);for(let st=0;st<J;++st)W.setFloat32(yt+st*2*vt,P(Ge[st]),!0)}}}function Ye(d,_,E){let C,k=1;for(;k<64;)C=_[d.value],C==65280?k=64:C>>8==255?k+=C&255:(E[k]=C,k++),d.value++}function ze(d,_){_[0]=P(d[0]),_[1]=P(d[1]),_[2]=P(d[5]),_[3]=P(d[6]),_[4]=P(d[14]),_[5]=P(d[15]),_[6]=P(d[27]),_[7]=P(d[28]),_[8]=P(d[2]),_[9]=P(d[4]),_[10]=P(d[7]),_[11]=P(d[13]),_[12]=P(d[16]),_[13]=P(d[26]),_[14]=P(d[29]),_[15]=P(d[42]),_[16]=P(d[3]),_[17]=P(d[8]),_[18]=P(d[12]),_[19]=P(d[17]),_[20]=P(d[25]),_[21]=P(d[30]),_[22]=P(d[41]),_[23]=P(d[43]),_[24]=P(d[9]),_[25]=P(d[11]),_[26]=P(d[18]),_[27]=P(d[24]),_[28]=P(d[31]),_[29]=P(d[40]),_[30]=P(d[44]),_[31]=P(d[53]),_[32]=P(d[10]),_[33]=P(d[19]),_[34]=P(d[23]),_[35]=P(d[32]),_[36]=P(d[39]),_[37]=P(d[45]),_[38]=P(d[52]),_[39]=P(d[54]),_[40]=P(d[20]),_[41]=P(d[22]),_[42]=P(d[33]),_[43]=P(d[38]),_[44]=P(d[46]),_[45]=P(d[51]),_[46]=P(d[55]),_[47]=P(d[60]),_[48]=P(d[21]),_[49]=P(d[34]),_[50]=P(d[37]),_[51]=P(d[47]),_[52]=P(d[50]),_[53]=P(d[56]),_[54]=P(d[59]),_[55]=P(d[61]),_[56]=P(d[35]),_[57]=P(d[36]),_[58]=P(d[48]),_[59]=P(d[49]),_[60]=P(d[57]),_[61]=P(d[58]),_[62]=P(d[62]),_[63]=P(d[63])}function ft(d){const _=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),C=.5*Math.cos(3.14159/8),k=.5*Math.cos(3*3.14159/16),D=.5*Math.cos(5*3.14159/16),W=.5*Math.cos(3*3.14159/8),J=.5*Math.cos(7*3.14159/16),V=new Array(4),j=new Array(4),$=new Array(4),de=new Array(4);for(let Se=0;Se<8;++Se){const ue=Se*8;V[0]=C*d[ue+2],V[1]=W*d[ue+2],V[2]=C*d[ue+6],V[3]=W*d[ue+6],j[0]=E*d[ue+1]+k*d[ue+3]+D*d[ue+5]+J*d[ue+7],j[1]=k*d[ue+1]-J*d[ue+3]-E*d[ue+5]-D*d[ue+7],j[2]=D*d[ue+1]-E*d[ue+3]+J*d[ue+5]+k*d[ue+7],j[3]=J*d[ue+1]-D*d[ue+3]+k*d[ue+5]-E*d[ue+7],$[0]=_*(d[ue+0]+d[ue+4]),$[3]=_*(d[ue+0]-d[ue+4]),$[1]=V[0]+V[3],$[2]=V[1]-V[2],de[0]=$[0]+$[1],de[1]=$[3]+$[2],de[2]=$[3]-$[2],de[3]=$[0]-$[1],d[ue+0]=de[0]+j[0],d[ue+1]=de[1]+j[1],d[ue+2]=de[2]+j[2],d[ue+3]=de[3]+j[3],d[ue+4]=de[3]-j[3],d[ue+5]=de[2]-j[2],d[ue+6]=de[1]-j[1],d[ue+7]=de[0]-j[0]}for(let Se=0;Se<8;++Se)V[0]=C*d[16+Se],V[1]=W*d[16+Se],V[2]=C*d[48+Se],V[3]=W*d[48+Se],j[0]=E*d[8+Se]+k*d[24+Se]+D*d[40+Se]+J*d[56+Se],j[1]=k*d[8+Se]-J*d[24+Se]-E*d[40+Se]-D*d[56+Se],j[2]=D*d[8+Se]-E*d[24+Se]+J*d[40+Se]+k*d[56+Se],j[3]=J*d[8+Se]-D*d[24+Se]+k*d[40+Se]-E*d[56+Se],$[0]=_*(d[Se]+d[32+Se]),$[3]=_*(d[Se]-d[32+Se]),$[1]=V[0]+V[3],$[2]=V[1]-V[2],de[0]=$[0]+$[1],de[1]=$[3]+$[2],de[2]=$[3]-$[2],de[3]=$[0]-$[1],d[0+Se]=de[0]+j[0],d[8+Se]=de[1]+j[1],d[16+Se]=de[2]+j[2],d[24+Se]=de[3]+j[3],d[32+Se]=de[3]-j[3],d[40+Se]=de[2]-j[2],d[48+Se]=de[1]-j[1],d[56+Se]=de[0]-j[0]}function L(d){for(let _=0;_<64;++_){const E=d[0][_],C=d[1][_],k=d[2][_];d[0][_]=E+1.5747*k,d[1][_]=E-.1873*C-.4682*k,d[2][_]=E+1.8556*C}}function M(d,_,E){for(let C=0;C<64;++C)_[E+C]=wc.toHalfFloat(X(d[C]))}function X(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(b,Math.abs(d)-1)}function oe(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function le(d){const _=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),E=new Uint8Array(Le(_)),C=new Uint8Array(E.length);return Ve(E),at(E,C),new DataView(C.buffer)}function ce(d){const _=d.array.slice(d.offset.value,d.offset.value+d.size),E=bs(_),C=new Uint8Array(E.length);return Ve(E),at(E,C),new DataView(C.buffer)}function Re(d){const _=d.viewer,E={value:d.offset.value},C=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),k=new Uint8Array(8192);let D=0;const W=new Array(d.inputChannels.length);for(let se=0,ve=d.inputChannels.length;se<ve;se++)W[se]={},W[se].start=D,W[se].end=W[se].start,W[se].nx=d.columns,W[se].ny=d.lines,W[se].size=d.type,D+=W[se].nx*W[se].ny*W[se].size;const J=q(_,E),V=q(_,E);if(V>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(J<=V)for(let se=0;se<V-J+1;se++)k[se+J]=Pe(_,E);const j=new Uint16Array(65536),$=T(k,j),de=ge(_,E);O(d.array,_,E,de,C,D);for(let se=0;se<d.inputChannels.length;++se){const ve=W[se];for(let pe=0;pe<W[se].size;++pe)Oe(C,ve.start+pe,ve.nx,ve.size,ve.ny,ve.nx*ve.size,$)}Ke(j,C,D);let Se=0;const ue=new Uint8Array(C.buffer.byteLength);for(let se=0;se<d.lines;se++)for(let ve=0;ve<d.inputChannels.length;ve++){const pe=W[ve],Ie=pe.nx*pe.size,it=new Uint8Array(C.buffer,pe.end*2,Ie*2);ue.set(it,Se),Se+=Ie*2,pe.end+=Ie}return new DataView(ue.buffer)}function Ee(d){const _=d.array.slice(d.offset.value,d.offset.value+d.size),E=bs(_),C=d.inputChannels.length*d.lines*d.columns*d.totalBytes,k=new ArrayBuffer(C),D=new DataView(k);let W=0,J=0;const V=new Array(4);for(let j=0;j<d.lines;j++)for(let $=0;$<d.inputChannels.length;$++){let de=0;switch(d.inputChannels[$].pixelType){case 1:V[0]=W,V[1]=V[0]+d.columns,W=V[1]+d.columns;for(let ue=0;ue<d.columns;++ue){const se=E[V[0]++]<<8|E[V[1]++];de+=se,D.setUint16(J,de,!0),J+=2}break;case 2:V[0]=W,V[1]=V[0]+d.columns,V[2]=V[1]+d.columns,W=V[2]+d.columns;for(let ue=0;ue<d.columns;++ue){const se=E[V[0]++]<<24|E[V[1]++]<<16|E[V[2]++]<<8;de+=se,D.setUint32(J,de,!0),J+=4}break}}return D}function xe(d){const _=d.viewer,E={value:d.offset.value},C=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),k={version:tt(_,E),unknownUncompressedSize:tt(_,E),unknownCompressedSize:tt(_,E),acCompressedSize:tt(_,E),dcCompressedSize:tt(_,E),rleCompressedSize:tt(_,E),rleUncompressedSize:tt(_,E),rleRawSize:tt(_,E),totalAcUncompressedCount:tt(_,E),totalDcUncompressedCount:tt(_,E),acCompression:tt(_,E)};if(k.version<2)throw new Error("EXRLoader.parse: "+B.compression+" version "+k.version+" is unsupported");const D=new Array;let W=q(_,E)-2;for(;W>0;){const ve=Fe(_.buffer,E),pe=Pe(_,E),Ie=pe>>2&3,it=(pe>>4)-1,rt=new Int8Array([it])[0],Dt=Pe(_,E);D.push({name:ve,index:rt,type:Dt,compression:Ie}),W-=ve.length+3}const J=B.channels,V=new Array(d.inputChannels.length);for(let ve=0;ve<d.inputChannels.length;++ve){const pe=V[ve]={},Ie=J[ve];pe.name=Ie.name,pe.compression=0,pe.decoded=!1,pe.type=Ie.pixelType,pe.pLinear=Ie.pLinear,pe.width=d.columns,pe.height=d.lines}const j={idx:new Array(3)};for(let ve=0;ve<d.inputChannels.length;++ve){const pe=V[ve];for(let Ie=0;Ie<D.length;++Ie){const it=D[Ie];pe.name==it.name&&(pe.compression=it.compression,it.index>=0&&(j.idx[it.index]=ve),pe.offset=ve)}}let $,de,Se;if(k.acCompressedSize>0)switch(k.acCompression){case 0:$=new Uint16Array(k.totalAcUncompressedCount),O(d.array,_,E,k.acCompressedSize,$,k.totalAcUncompressedCount);break;case 1:const ve=d.array.slice(E.value,E.value+k.totalAcUncompressedCount),pe=bs(ve);$=new Uint16Array(pe.buffer),E.value+=k.totalAcUncompressedCount;break}if(k.dcCompressedSize>0){const ve={array:d.array,offset:E,size:k.dcCompressedSize};de=new Uint16Array(ce(ve).buffer),E.value+=k.dcCompressedSize}if(k.rleRawSize>0){const ve=d.array.slice(E.value,E.value+k.rleCompressedSize),pe=bs(ve);Se=Le(pe.buffer),E.value+=k.rleCompressedSize}let ue=0;const se=new Array(V.length);for(let ve=0;ve<se.length;++ve)se[ve]=new Array;for(let ve=0;ve<d.lines;++ve)for(let pe=0;pe<V.length;++pe)se[pe].push(ue),ue+=V[pe].width*d.type*2;Qe(j,se,V,$,de,C);for(let ve=0;ve<V.length;++ve){const pe=V[ve];if(!pe.decoded)switch(pe.compression){case 2:let Ie=0,it=0;for(let rt=0;rt<d.lines;++rt){let Dt=se[ve][Ie];for(let Ge=0;Ge<pe.width;++Ge){for(let Xe=0;Xe<2*pe.type;++Xe)C[Dt++]=Se[it+Xe*pe.width*pe.height];it++}Ie++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(C.buffer)}function Fe(d,_){const E=new Uint8Array(d);let C=0;for(;E[_.value+C]!=0;)C+=1;const k=new TextDecoder().decode(E.slice(_.value,_.value+C));return _.value=_.value+C+1,k}function me(d,_,E){const C=new TextDecoder().decode(new Uint8Array(d).slice(_.value,_.value+E));return _.value=_.value+E,C}function be(d,_){const E=we(d,_),C=ge(d,_);return[E,C]}function je(d,_){const E=ge(d,_),C=ge(d,_);return[E,C]}function we(d,_){const E=d.getInt32(_.value,!0);return _.value=_.value+4,E}function ge(d,_){const E=d.getUint32(_.value,!0);return _.value=_.value+4,E}function He(d,_){const E=d[_.value];return _.value=_.value+1,E}function Pe(d,_){const E=d.getUint8(_.value);return _.value=_.value+1,E}const tt=function(d,_){let E;return"getBigInt64"in DataView.prototype?E=Number(d.getBigInt64(_.value,!0)):E=d.getUint32(_.value+4,!0)+Number(d.getUint32(_.value,!0)<<32),_.value+=8,E};function v(d,_){const E=d.getFloat32(_.value,!0);return _.value+=4,E}function Y(d,_){return wc.toHalfFloat(v(d,_))}function P(d){const _=(d&31744)>>10,E=d&1023;return(d>>15?-1:1)*(_?_===31?E?NaN:1/0:Math.pow(2,_-15)*(1+E/1024):6103515625e-14*(E/1024))}function q(d,_){const E=d.getUint16(_.value,!0);return _.value+=2,E}function ae(d,_){return P(q(d,_))}function Ce(d,_,E,C){const k=E.value,D=[];for(;E.value<k+C-1;){const W=Fe(_,E),J=we(d,E),V=Pe(d,E);E.value+=3;const j=we(d,E),$=we(d,E);D.push({name:W,pixelType:J,pLinear:V,xSampling:j,ySampling:$})}return E.value+=1,D}function ke(d,_){const E=v(d,_),C=v(d,_),k=v(d,_),D=v(d,_),W=v(d,_),J=v(d,_),V=v(d,_),j=v(d,_);return{redX:E,redY:C,greenX:k,greenY:D,blueX:W,blueY:J,whiteX:V,whiteY:j}}function _t(d,_){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],C=Pe(d,_);return E[C]}function xt(d,_){const E=we(d,_),C=we(d,_),k=we(d,_),D=we(d,_);return{xMin:E,yMin:C,xMax:k,yMax:D}}function nt(d,_){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],C=Pe(d,_);return E[C]}function Mt(d,_){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],C=Pe(d,_);return E[C]}function Et(d,_){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],C=["ROUND_DOWN","ROUND_UP"],k=ge(d,_),D=ge(d,_),W=Pe(d,_);return{xSize:k,ySize:D,levelMode:E[W&15],roundingMode:C[W>>4]}}function Ft(d,_){const E=v(d,_),C=v(d,_);return[E,C]}function Bt(d,_){const E=v(d,_),C=v(d,_),k=v(d,_);return[E,C,k]}function mn(d,_,E,C,k){if(C==="string"||C==="stringvector"||C==="iccProfile")return me(_,E,k);if(C==="chlist")return Ce(d,_,E,k);if(C==="chromaticities")return ke(d,E);if(C==="compression")return _t(d,E);if(C==="box2i")return xt(d,E);if(C==="envmap")return Mt(d,E);if(C==="tiledesc")return Et(d,E);if(C==="lineOrder")return nt(d,E);if(C==="float")return v(d,E);if(C==="v2f")return Ft(d,E);if(C==="v3f")return Bt(d,E);if(C==="int")return we(d,E);if(C==="rational")return be(d,E);if(C==="timecode")return je(d,E);if(C==="preview")return E.value+=k,"skipped";E.value+=k}function Rn(d,_){const E=Math.log2(d);return _=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function Cn(d,_,E){let C=0;switch(d.levelMode){case"ONE_LEVEL":C=1;break;case"MIPMAP_LEVELS":C=Rn(Math.max(_,E),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return C}function Sr(d,_,E,C){const k=new Array(d);for(let D=0;D<d;D++){const W=1<<D;let J=_/W|0;C=="ROUND_UP"&&J*W<_&&(J+=1);const V=Math.max(J,1);k[D]=(V+E-1)/E|0}return k}function Li(){const d=this,_=d.offset,E={value:0};for(let C=0;C<d.tileCount;C++){const k=we(d.viewer,_),D=we(d.viewer,_);_.value+=8,d.size=ge(d.viewer,_);const W=k*d.blockWidth,J=D*d.blockHeight;d.columns=W+d.blockWidth>d.width?d.width-W:d.blockWidth,d.lines=J+d.blockHeight>d.height?d.height-J:d.blockHeight;const V=d.columns*d.totalBytes,$=d.size<d.lines*V?d.uncompress(d):oe(d);_.value+=d.size;for(let de=0;de<d.lines;de++){const Se=de*d.columns*d.totalBytes;for(let ue=0;ue<d.inputChannels.length;ue++){const se=B.channels[ue].name,ve=d.channelByteOffsets[se]*d.columns,pe=d.decodeChannels[se];if(pe===void 0)continue;E.value=Se+ve;const Ie=(d.height-(1+J+de))*d.outLineWidth;for(let it=0;it<d.columns;it++){const rt=Ie+(it+W)*d.outputChannels+pe;d.byteArray[rt]=d.getter($,E)}}}}}function Kr(){const d=this,_=d.offset,E={value:0};for(let C=0;C<d.height/d.blockHeight;C++){const k=we(d.viewer,_)-B.dataWindow.yMin;d.size=ge(d.viewer,_),d.lines=k+d.blockHeight>d.height?d.height-k:d.blockHeight;const D=d.columns*d.totalBytes,J=d.size<d.lines*D?d.uncompress(d):oe(d);_.value+=d.size;for(let V=0;V<d.blockHeight;V++){const j=C*d.blockHeight,$=V+d.scanOrder(j);if($>=d.height)continue;const de=V*D,Se=(d.height-1-$)*d.outLineWidth;for(let ue=0;ue<d.inputChannels.length;ue++){const se=B.channels[ue].name,ve=d.channelByteOffsets[se]*d.columns,pe=d.decodeChannels[se];if(pe!==void 0){E.value=de+ve;for(let Ie=0;Ie<d.columns;Ie++){const it=Se+Ie*d.outputChannels+pe;d.byteArray[it]=d.getter(J,E)}}}}}}function Yr(d,_,E){const C={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");C.version=d.getUint8(4);const k=d.getUint8(5);C.spec={singleTile:!!(k&2),longName:!!(k&4),deepFormat:!!(k&8),multiPart:!!(k&16)},E.value=8;let D=!0;for(;D;){const W=Fe(_,E);if(W==0)D=!1;else{const J=Fe(_,E),V=ge(d,E),j=mn(d,_,E,J,V);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${J}'.`):C[W]=j}}if(k&-7)throw console.error("THREE.EXRHeader:",C),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return C}function qs(d,_,E,C,k){const D={size:0,viewer:_,array:E,offset:C,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:bt};switch(d.compression){case"NO_COMPRESSION":D.blockHeight=1,D.uncompress=oe;break;case"RLE_COMPRESSION":D.blockHeight=1,D.uncompress=le;break;case"ZIPS_COMPRESSION":D.blockHeight=1,D.uncompress=ce;break;case"ZIP_COMPRESSION":D.blockHeight=16,D.uncompress=ce;break;case"PIZ_COMPRESSION":D.blockHeight=32,D.uncompress=Re;break;case"PXR24_COMPRESSION":D.blockHeight=16,D.uncompress=Ee;break;case"DWAA_COMPRESSION":D.blockHeight=32,D.uncompress=xe;break;case"DWAB_COMPRESSION":D.blockHeight=256,D.uncompress=xe;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}const W={};for(const $ of d.channels)switch($.name){case"Y":case"R":case"G":case"B":case"A":W[$.name]=!0,D.type=$.pixelType}let J=!1;if(W.R&&W.G&&W.B)J=!W.A,D.outputChannels=4,D.decodeChannels={R:0,G:1,B:2,A:3};else if(W.Y)D.outputChannels=1,D.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(D.type==1)switch(k){case $t:D.getter=ae;break;case ii:D.getter=q;break}else if(D.type==2)switch(k){case $t:D.getter=v;break;case ii:D.getter=Y}else throw new Error("EXRLoader.parse: unsupported pixelType "+D.type+" for "+d.compression+".");D.columns=D.width;const V=D.width*D.height*D.outputChannels;switch(k){case $t:D.byteArray=new Float32Array(V),J&&D.byteArray.fill(1,0,V);break;case ii:D.byteArray=new Uint16Array(V),J&&D.byteArray.fill(15360,0,V);break;default:console.error("THREE.EXRLoader: unsupported type: ",k);break}let j=0;for(const $ of d.channels)D.decodeChannels[$.name]!==void 0&&(D.channelByteOffsets[$.name]=j),j+=$.pixelType*2;if(D.totalBytes=j,D.outLineWidth=D.width*D.outputChannels,d.lineOrder==="INCREASING_Y"?D.scanOrder=$=>$:D.scanOrder=$=>D.height-1-$,D.outputChannels==4?(D.format=rn,D.colorSpace=bt):(D.format=la,D.colorSpace=kn),d.spec.singleTile){D.blockHeight=d.tiles.ySize,D.blockWidth=d.tiles.xSize;const $=Cn(d.tiles,D.width,D.height),de=Sr($,D.width,d.tiles.xSize,d.tiles.roundingMode),Se=Sr($,D.height,d.tiles.ySize,d.tiles.roundingMode);D.tileCount=de[0]*Se[0];for(let ue=0;ue<$;ue++)for(let se=0;se<Se[ue];se++)for(let ve=0;ve<de[ue];ve++)tt(_,C);D.decode=Li.bind(D)}else{D.blockWidth=D.width;const $=Math.ceil(D.height/D.blockHeight);for(let de=0;de<$;de++)tt(_,C);D.decode=Kr.bind(D)}return D}const qr={value:0},jr=new DataView(e),y=new Uint8Array(e),B=Yr(jr,e,qr),G=qs(B,jr,y,qr,this.type);return G.decode(),{header:B,width:G.width,height:G.height,data:G.byteArray,format:G.format,colorSpace:G.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=It,o.magFilter=It,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}const dv=document.getElementById("loadingOverlay"),fv=document.getElementById("progressBarInner"),pv=document.getElementById("loadingPercent"),Ws=new vu;Ws.onProgress=function(i,e,t){const n=Math.round(e/t*100);fv.style.width=n+"%",pv.textContent=n+"%"};Ws.onLoad=function(){dv.style.display="none"};Ws.onError=function(i){console.error("Error loading:",i)};const Ru=new m0(Ws),Cl=document.getElementById("bodyColorPicker");Cl&&(Cl.value="#ffffff");const ba=document.getElementById("bodyColorPicker"),Cu=document.getElementById("bodyFinishSelect");ba.value;ba.addEventListener("input",()=>{wa(),At()});Cu.addEventListener("change",()=>{wa(),At()});const Ll=document.getElementById("bgsetColorPicker");Ll.addEventListener("input",()=>{Object.values(Nt).forEach(i=>{i.traverse(e=>{if(!e.isMesh)return;(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n&&n.name==="Ground"&&n.color.set(Ll.value)})})}),At()});document.getElementById("bcaliperColorPicker");const wi={handlebars:{selectId:"handlebarsSelect",options:["HandleBars_CHR","HandleBars_BLK_GLSS","HandleBars_BLK_MTT"],stock:"HandleBars_CHR",socket:"SOCKET_Frame"},clutchfbrake:{selectId:"clutchfbrakeSelect",options:["ClutchFBrake_STOCK_ALMN","ClutchFBrake_STOCK_BLK_GLSS"],stock:"ClutchFBrake_STOCK_ALMN",socket:"SOCKET_Frame"},tach:{selectId:"tachSelect",options:["Tach_OG","Tach_Nacelle"],stock:"Tach_OG",socket:"SOCKET_Frame"},grips:{selectId:"gripsSelect",options:["Grips_STOCK","Grips_KURY_ISO_CHR","Grips_KURY_ISO_BLK_GLSS","Grips_KURY_ISO_STLTO_CHR","Grips_KURY_ISO_STLTO_BLK_GLSS"],stock:"Grips_STOCK",socket:"SOCKET_Frame"},switchassembly:{selectId:"switchassembSelect",options:["SwitchAssemb_ALMN","SwitchAssemb_BOSS"],stock:"SwitchAssemb_ALMN",socket:"SOCKET_Frame"},mastercylinder:{selectId:"mastercylinderSelect",options:["MasterCylinder_ALMN","MasterCylinder_BOSS"],stock:"MasterCylinder_ALMN",socket:"SOCKET_Frame"},dash:{selectId:"dashSelect",options:["Dash_STOCK","Dash_STOCK_COLORMATCH","Dash_STOCK_BLK_GLSS","Dash_EXT_CHR","Dash_EXT_BLK_GLSS","Dash_EXT_BLK_MTT","Dash_EXT_COLORMATCH"],stock:"Dash_STOCK",socket:"SOCKET_Frame"},windscreen:{selectId:"windscreenSelect",options:["None","Windscreen_SPORT_10_BLK","Windscreen_SPORT_10_CLR"],stock:"None",socket:"SOCKET_Frame"},swingarmcover:{selectId:"swingarmcoverSelect",options:["None","SwingArmCover_BLANK_CHR","SwingArmCover_BLANK_BLK_GLSS","SwingArmCover_M109R_CHR","SwingArmCover_M109R_BLK_GLSS"],stock:"None",socket:"SOCKET_Swingarm"},wheelfront:{selectId:"wheelfrontSelect",options:["WheelFront_STOCK"],stock:"WheelFront_STOCK"},tirefront:{selectId:"tirefrontSelect",options:["TireFront_130_70R18_ELITE4","TireFront_130_70R18_ME888"],stock:"TireFront_130_70R18_ELITE4"},wheelrear:{selectId:"wheelrearSelect",options:["WheelRear_STOCK","WheelRear_10in"],stock:"WheelRear_STOCK"},tirerear:{selectId:"tirerearSelect",options:["TireRear_240_40R18_ELITE4","TireRear_240_40R18_ME888","TireRear_280_35R18_ELITE4","TireRear_280_35R18_ME888"],stock:"TireRear_240_40R18_ELITE4"},risers:{selectId:"risersSelect",options:["Risers_STOCK","Risers_STOCK_BLK_GLSS","Risers_STOCK_BLK_MTT"],stock:"Risers_STOCK",socket:"SOCKET_Frame"},tripletree:{selectId:"tripletreeSelect",options:["TripleTree_STOCK","TripleTree_STOCK_BLK_GLSS","TripleTree_STOCK_BLK_MTT"],stock:"TripleTree_STOCK",socket:"SOCKET_Frame"},chin:{selectId:"chinSelect",options:["Chin_STOCK","Chin_MEANY","Chin_MEANY_COLORMATCH_MESH_OCT_CHR","Chin_MEANY_COLORMATCH_MESH_OCT_BLK_GLSS","Chin_MEANY_BLK_GLSS_MESH_OCT_CHR","Chin_MEANY_BLK_GLSS_MESH_OCT_BLK_GLSS"],stock:"Chin_STOCK",socket:"SOCKET_Frame"},radiatorgrill:{selectId:"radiatorgrillSelect",options:["RadiatorGrill_STOCK","RadiatorGrill_M109R_001_CHR","RadiatorGrill_M109R_001_BLK","RadiatorGrill_Flames_CHR"],stock:"RadiatorGrill_STOCK",socket:"SOCKET_Frame"},engineguard:{selectId:"engineguardSelect",options:["None","EngineGuard_GEN_SUZ_CHR","EngineGuard_GEN_SUZ_BLK_GLSS"],stock:"None",socket:"SOCKET_Frame"},tankcap:{selectId:"tankcapSelect",options:["TankCap_ALMN","TankCap_BOSS"],stock:"TankCap_ALMN",socket:"SOCKET_Frame"},tankbra:{selectId:"tankbraSelect",options:["Tank_Bra_LEATHER","Tank_Bra_CARBON"],stock:"None",socket:"SOCKET_Frame"},fender:{selectId:"fenderSelect",options:["FrontFender_STOCK","FrontFender_STEALTH"],stock:"FrontFender_STOCK",socket:"SOCKET_Frame"},nacelle:{selectId:"nacelleShroudSelect",options:["NacelleShroud_CHR","NacelleShroud_BSCLR","NacelleShroud_BLK_GLSS","NacelleShroud_BLK_MTT"],stock:"NacelleShroud_CHR",socket:"SOCKET_Frame"},derbycover:{selectId:"derbyCoverSelect",options:["DerbyCover_ALMN","DerbyCover_3D_CHR","DerbyCover_3D_BLK_GLSS"],stock:"DerbyCover_ALMN",socket:"SOCKET_Frame"},intake:{selectId:"intakeSelect",options:["Intake_STOCK_CHR","Intake_STOCK_BLK_GLSS","Intake_STOCK_BLK_MTT","Intake_Q5_CHR","Intake_Q5_BLK_GLSS","Intake_Q5_BLK_MTT","Intake_SPIKE_CHR","Intake_SPIKE_BLK_GLSS","Intake_SPIKE_BLK_MTT","Intake_KURY_HYPER_01_BLOOD_CHR","Intake_KURY_HYPER_01_BLOOD_BLK_GLSS","Intake_KURY_HYPER_01_DIMPLE_CHR","Intake_KURY_HYPER_01_DIMPLE_BLK_GLSS"],stock:"Intake_STOCK_CHR",socket:"SOCKET_Frame"},exhaust:{selectId:"exhaustSelect",options:["Exhaust_STOCK_CHR","Exhaust_STOCK_BLK_GLSS","Exhaust_STOCK_BLK_MTT","Exhaust_SCORPION_CHR","Exhaust_SCORPION_BLK_GLSS","Exhaust_SCORPION_BLK_MTT","Exhaust_SharpCurve_CHR","Exhaust_SharpCurve_BLK_GLSS","Exhaust_SharpCurve_BLK_MTT","Exhaust_VLCTY_PRO_SHRT_CHR","Exhaust_VLCTY_PRO_SHRT_CRMC_BLK","Exhaust_VLCTY_PRO_CHR","Exhaust_VLCTY_PRO_CRMC_BLK","Exhaust_SDBRNR_SHRT_CHR","Exhaust_SDBRNR_SHRT_CRMC_BLK","Exhaust_SDBRNR_CHR","Exhaust_SDBRNR_CRMC_BLK","Exhaust_REVO_CANNON_MONSTER_CHR","Exhaust_REVO_CANNON_MONSTER_BLK_GLSS","Exhaust_REVO_CANNON_MONSTER_BLK_MTT"],stock:"Exhaust_STOCK_CHR",socket:"SOCKET_Frame"},forks:{selectId:"forksSelect",options:["Forks_STOCK","Forks_STOCK_BLK_GLSS","Forks_STOCK_BLK_MTT","Forks_SUMOX_FAT_CHR","Forks_SUMOX_FAT_BLK_GLSS","Forks_SUMOX_FAT_BLK_MTT"],stock:"Forks_STOCK",socket:"SOCKET_Frame"},forkcaps:{selectId:"forkcapsSelect",options:["ForkCaps_STOCK","ForkCaps_BLK_GLSS","ForkCaps_BLK_MTT"],stock:"ForkCaps_STOCK",socket:"SOCKET_Frame"},forkends:{selectId:"forkendsSelect",options:["ForkEnds_STOCK","ForkEnds_BLK_GLSS"],stock:"ForkEnds_STOCK",socket:"SOCKET_Frame"},rearrotors:{selectId:"rearrotorsSelect",options:["RearRotor_STOCK","RearRotor_GALFER"],stock:"RearRotor_STOCK",socket:"SOCKET_Swingarm"},frontrotors:{selectId:"frontrotorsSelect",options:["FrontRotors_STOCK","FrontRotors_STOCK_BLK_GLSS","FrontRotors_ARASH_BLK","FrontRotors_ARASH_GOLD"],stock:"FrontRotors_STOCK",socket:"SOCKET_Frame"},rearfender:{selectId:"rearFenderSelect",options:["RearFender_STOCK","RearFender_STEALTH"],stock:"RearFender_STOCK",socket:"SOCKET_Frame"},siderearcovers:{selectId:"siderearcoverSelect",options:["SideRearCover_STOCK","SideRearCover_COLORMATCH","SideRearCover_CHR","SideRearCover_CHR_PLT","SideRearCover_COLORMATCH_CHR_PLT"],stock:"SideRearCover_STOCK",socket:"SOCKET_Frame"},framehandles:{selectId:"framehandleSelect",options:["FrameHandle_CHR","FrameHandle_COLORMATCH","FrameHandle_BLK_GLSS","FrameHandle_BLK_MTT"],stock:"FrameHandle_CHR",socket:"SOCKET_Frame"},lowersidecovers:{selectId:"lowersidecoversSelect",options:["LowerSideCovers_STOCK","LowerSideCovers_COLORMATCH"],stock:"LowerSideCovers_STOCK",socket:"SOCKET_Frame"},passengerseat:{selectId:"passseatSelect",options:["PassengerSeat_COVER_STOCK","PassengerSeat_STOCK","PassengerSeat_GEL_CARBON","PassengerSeat_GEL_LEATHER"],stock:"PassengerSeat_COVER_STOCK",socket:"SOCKET_Frame"},seat:{selectId:"seatSelect",options:["Seat_STOCK","Seat_GEL_LEATHER","Seat_GEL_CARBON","Seat_ULTIMATE","Seat_ULTIMATE_TABDOWN","Seat_ULTIMATE_BACKREST"],stock:"Seat_STOCK",socket:"SOCKET_Frame"},brakelight:{selectId:"brakelightSelect",options:["BrakeLight_RED","BrakeLight_CLEAR","BrakeLight_SMOKE"],stock:"BrakeLight_RED",socket:"SOCKET_Frame"},headlamp:{selectId:"headlampSelect",options:["Headlamp_STOCK","Headlamp_LED"],stock:"Headlamp_STOCK",socket:"SOCKET_Frame"},rearturnsignals:{selectId:"RearTurnSignalsSelect",options:["RearTurnSignals_STOCK_WHITE","RearTurnSignals_STOCK_AMBR","RearTurnSignals_RAW"],stock:"RearTurnSignals_STOCK_AMBR",socket:"SOCKET_Frame"},frontturnsignals:{selectId:"FrontTurnSignalsSelect",options:["FrontTurnSignals_STOCK_AMBR","FrontTurnSignals_STOCK_WHITE","FrontTurnSignals_LOWPRO1_CHR","FrontTurnSignals_LOWPRO1_BLK"],stock:"FrontTurnSignals_STOCK_AMBR",socket:"SOCKET_Frame"},mirrors:{selectId:"mirrorsSelect",options:["Mirrors_STOCK","Mirrors_KURYMAG"],stock:"Mirrors_STOCK",socket:"SOCKET_Frame"}},mv={Seat_ULTIMATE:["Seat_ULTIMATE","Seat_ULTIMATE_TABDOWN"],Seat_ULTIMATE_BACKREST:["Seat_ULTIMATE","Seat_ULTIMATE_BACKREST"]},ir=document.getElementById("wheelrearSelect"),Ai=document.getElementById("tirerearSelect");ir.addEventListener("change",()=>{const i=Ai.value.split("_").pop();let e;ir.value==="WheelRear_10in"?e=`TireRear_280_35R18_${i}`:ir.value==="WheelRear_STOCK"&&(e=`TireRear_240_40R18_${i}`),[...Ai.options].some(n=>n.value===e)?(Ai.value=e,Ai.dispatchEvent(new Event("change",{bubbles:!0}))):console.warn(`Matching tire not found: ${e}`)});Ai.addEventListener("change",()=>{let i;Ai.value.startsWith("TireRear_240_")?i="WheelRear_STOCK":Ai.value.startsWith("TireRear_280_")&&(i="WheelRear_10in"),i&&ir.value!==i&&(ir.value=i,ir.dispatchEvent(new Event("change",{bubbles:!0})))});function lt(i,e,t={}){const n=i.getObjectByName(e);if(!n){console.warn(`Could not find lens object: ${e}`);return}const r=t.transmission!==void 0||t.thickness!==void 0||t.ior!==void 0||t.attenuationColor!==void 0||t.attenuationDistance!==void 0;n.traverse(s=>{if(!s.isMesh||!s.material)return;const a=(Array.isArray(s.material)?s.material:[s.material]).map(c=>{let l=c;return r&&!l.isMeshPhysicalMaterial&&(l=new pn({name:c.name,color:c.color?c.color.clone():new Be(16777215),map:c.map||null,alphaMap:c.alphaMap||null,normalMap:c.normalMap||null,roughnessMap:c.roughnessMap||null,metalnessMap:c.metalnessMap||null,side:c.side,transparent:!0,opacity:c.opacity??1})),t.color!==void 0&&l.color.set(t.color),t.metalness!==void 0&&"metalness"in l&&(l.metalness=t.metalness),t.roughness!==void 0&&"roughness"in l&&(l.roughness=t.roughness),t.transmission!==void 0&&"transmission"in l&&(l.transmission=t.transmission),t.thickness!==void 0&&"thickness"in l&&(l.thickness=t.thickness),t.ior!==void 0&&"ior"in l&&(l.ior=t.ior),t.attenuationColor!==void 0&&"attenuationColor"in l&&l.attenuationColor.set(t.attenuationColor),t.attenuationDistance!==void 0&&"attenuationDistance"in l&&(l.attenuationDistance=t.attenuationDistance),t.opacity!==void 0&&(l.opacity=t.opacity),t.transparent!==void 0&&(l.transparent=t.transparent),t.depthWrite!==void 0&&(l.depthWrite=t.depthWrite),t.envMapIntensity!==void 0&&"envMapIntensity"in l&&(l.envMapIntensity=t.envMapIntensity),l});s.material=Array.isArray(s.material)?a:a[0]})}const gv={Headlamp_STOCK:i=>{lt(i,"Headlamp_STOCK_GLSS",{color:16777215,metalness:0,roughness:.1,transmission:0,opacity:.4,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:2}),lt(i,"Headlamp_STOCK_BULB",{color:16777215,metalness:0,roughness:.1,transmission:1,opacity:.4,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:2})},Headlamp_LED:i=>{lt(i,"Headlamp_LED_GLSS",{color:16777215,metalness:0,roughness:.01,transmission:.5,opacity:.3,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:2}),lt(i,"Headlamp_LED_BULB",{color:16777215,metalness:0,roughness:.01,transmission:1,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:2}),lt(i,"Headlamp_LED_RING",{color:16777215,metalness:0,roughness:.01,transmission:.3,opacity:.8,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:2})},Dash_STOCK:i=>{lt(i,"Dash_STOCK_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},Dash_STOCK_COLORMATCH:i=>{lt(i,"Dash_STOCK_COLORMATCH_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},Dash_STOCK_BLK_GLSS:i=>{lt(i,"Dash_STOCK_BLK_GLSS_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},Dash_EXT_CHR:i=>{lt(i,"Dash_EXT_CHR_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},Dash_EXT_BLK_GLSS:i=>{lt(i,"Dash_EXT_BLK_GLSS_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},Dash_EXT_BLK_MTT:i=>{lt(i,"Dash_EXT_BLK_MTT_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},Dash_EXT_COLORMATCH:i=>{lt(i,"Dash_EXT_COLORMATCH_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},MasterCylinder_ALMN:i=>{lt(i,"MasterCylinder_Window_ALMN",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},MasterCylinder_BOSS:i=>{lt(i,"MasterCylinder_Window_BOSS",{metalness:0,roughness:.1,transmission:.8,opacity:.5,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},RearTurnSignals_STOCK_WHITE:i=>{lt(i,"Signal_RTSW_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.9,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5}),lt(i,"Beaver_GLSS_RED",{metalness:0,roughness:.1,transmission:.8,opacity:.8,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},RearTurnSignals_STOCK_AMBR:i=>{lt(i,"Signal_RTSA_GLSS",{color:16757504,metalness:0,roughness:.18,transmission:.35,thickness:.35,ior:1.52,attenuationColor:16777215,attenuationDistance:.3,opacity:1,transparent:!0,depthWrite:!1,envMapIntensity:.8})},FrontTurnSignals_STOCK_WHITE:i=>{lt(i,"Signal_TSW_GLSS",{metalness:0,roughness:.1,transmission:.8,opacity:.9,thickness:.5,ior:1.52,transparent:!0,depthWrite:!1,envMapIntensity:.5})},FrontTurnSignals_STOCK_AMBR:i=>{lt(i,"Signal_TSA_GLSS",{color:16757504,metalness:0,roughness:.18,attenuationColor:16777215,attenuationDistance:.3,transmission:.35,thickness:.35,ior:1.52,opacity:1,transparent:!0,depthWrite:!1,envMapIntensity:.8})},BrakeLight_RED:i=>{lt(i,"BrakeLight_RED",{color:6356992,roughness:0,transmission:.2,thickness:.1,ior:1.52,opacity:.8,transparent:!0,depthWrite:!1,envMapIntensity:.2}),lt(i,"BrakeLight_RIR",{opacity:.1}),lt(i,"BrakeLight_RED_Inner",{metalness:1,roughness:.1})},BrakeLight_CLEAR:i=>{lt(i,"BrakeLight_CLEAR",{color:14540253,roughness:.1,transmission:.6,thickness:.2,ior:1.52,opacity:.4,transparent:!0,depthWrite:!1,envMapIntensity:.2}),lt(i,"BrakeLight_CIR",{opacity:.1,transmission:.5,thickness:.1,ior:1.52}),lt(i,"BrakeLight_CLEAR_Inner",{metalness:1,roughness:.1})},BrakeLight_SMOKE:i=>{lt(i,"BrakeLight_SMOKE",{color:3355443,roughness:0,transmission:.2,thickness:.1,ior:1.52,opacity:.8,transparent:!0,depthWrite:!1,envMapIntensity:.2}),lt(i,"BrakeLight_SIR",{opacity:.1}),lt(i,"BrakeLight_SMOKE_Inner",{metalness:1,roughness:.1})},Windscreen_SPORT_10_CLR:i=>{lt(i,"Windscreen_SPORT_10_CLR",{transparent:!1,roughness:0,transmission:.99,thickness:.02,ior:1.49})}},_v="None";function vv(i){return[...new Set(Object.values(i).flatMap(e=>e.options).filter(e=>e!==_v))]}function Sv(i,e){return Object.values(e).some(t=>t.stock===i)}function xv(i){vv(i).forEach(t=>{const n=gv[t];hi(t,yv(t),Sv(t,i),n)})}Lv(wi);const Mv=new Set(["Seat_STOCK","Seat_GEL_CARBON","Seat_GEL_LEATHER","Seat_ULTIMATE","Seat_ULTIMATE_TABDOWN","Seat_ULTIMATE_BACKREST","PassengerSeat_STOCK","PassengerSeat_GEL_LEATHER","PassengerSeat_GEL_CARBON","Tank_Bra_CARBON","Tank_Bra_LEATHER"]),Ev={low:"_1K",medium:"_2K",high:"_4K"};function yv(i){let e=i;if(Mv.has(i)){const t=Ev[En]||"_1K";e+=t}return`/models/${e}.glb`}const na=["BrakeLight_RED","BrakeLight_CLEAR","BrakeLight_SMOKE"],ia=["RearTurnSignals_STOCK_AMBR","RearTurnSignals_STOCK_WHITE","RearTurnSignals_RAW"],ra=["FrameHandle_CHR","FrameHandle_BLK_GLSS","FrameHandle_BLK_MTT"];let Lu="RearFender_STOCK",Iu="BrakeLight_RED",Pu="RearTurnSignals_STOCK_AMBR",Du="FrameHandle_CHR",Tv=!0;function Bo(i){i.forEach(e=>{Nt[e]&&(Nt[e].visible=!1)})}function ko(i,e){i.forEach(t=>{Nt[t]&&(Nt[t].visible=t===e)})}function Av(){if(Lu==="RearFender_STEALTH"){Bo(na),Bo(ia),Bo(ra);return}ko(na,Iu),ko(ia,Pu),ko(ra,Du),Nt.Stickers_Rear&&(Nt.Stickers_Rear.visible=Tv)}const Wn={},Ls=[],bv={EngineCovers_BSCLR:"SOCKET_Frame",BrakeCaliper_REAR:"SOCKET_Swingarm",BrakeCalipers_FRONT:"SOCKET_Frame",Badges_STOCK:"SOCKET_Frame",Stickers_Fender:"SOCKET_Frame",Stickers_Rear:"SOCKET_Frame"};function wv(i){const e={};return Object.values(i).forEach(t=>{t.socket&&t.options.forEach(n=>{e[n]=t.socket})}),e}const Nu={...wv(wi),...bv};function Rv(i,e){const t=Nu[i];if(!t)return;const n=Wn[t];if(!n){Ls.push({name:i,part:e}),console.log(`${i} is waiting for ${t}`);return}const r=e.visible;Qt.updateMatrixWorld(!0),n.updateMatrixWorld(!0),n.attach(e),e.visible=r,console.log(`${i} attached to ${t}`)}function Cv(){for(let i=Ls.length-1;i>=0;i--){const e=Ls[i],t=Nu[e.name],n=Wn[t];if(!n)continue;const r=e.part.visible;Qt.updateMatrixWorld(!0),n.updateMatrixWorld(!0),n.attach(e.part),e.part.visible=r,console.log(`${e.name} attached to ${t} from waiting room`),Ls.splice(i,1)}}function Lv(i){Object.values(i).forEach(e=>{const t=document.getElementById(e.selectId);if(!t){console.warn(`Could not find select: ${e.selectId}`);return}t.addEventListener("change",n=>{const r=n.target.value;ju(e.options,r),e.selectId==="rearFenderSelect"&&(Lu=r),na.includes(r)&&(Iu=r),ia.includes(r)&&(Pu=r),ra.includes(r)&&(Du=r),Av(),At()})})}const mr=document.getElementById("rideheightSelect");let ni=null,Ei=null;function Iv(){const i=Wn.SOCKET_Frame,e=Wn.SOCKET_Swingarm;if(!i||!e){console.warn("Ride-height sockets are not ready.");return}ni=i.rotation.x,Ei=e.rotation.x,console.log("Stock frame rotation:",ni),console.log("Stock swingarm rotation:",Ei)}mr.addEventListener("change",()=>{const i=Wn.SOCKET_Frame,e=Wn.SOCKET_Swingarm;if(!i||!e){console.warn("Ride-height sockets are unavailable.");return}const t=ei.degToRad(1),n=ei.degToRad(2.4),r=ei.degToRad(3.5),s=ei.degToRad(5);switch(mr.value){case"stock":i.rotation.x=ni,e.rotation.x=Ei;break;case"lowered1":i.rotation.x=ni+t,e.rotation.x=Ei-t;break;case"lowered2":i.rotation.x=ni+n,e.rotation.x=Ei-n;break;case"lowered3":i.rotation.x=ni+r,e.rotation.x=Ei-r;break;case"lowered4":console.log("Swingarm before:",ei.radToDeg(e.rotation.x)),e.rotation.x=Ei-s,i.rotation.x=ni+s,console.log("Swingarm after:",ei.radToDeg(e.rotation.x));break}At()});function wa(){Object.values(Nt).forEach(i=>{Uu(i)})}function Uu(i){if(!i)return;const e=Gu[Cu.value];i.traverse(t=>{if(!t.isMesh)return;(Array.isArray(t.material)?t.material:[t.material]).forEach(r=>{r.name.endsWith("_BSCLR")&&(r.color.set(ba.value),e&&("roughness"in e&&(r.roughness=e.roughness),"metalness"in e&&(r.metalness=e.metalness),"clearcoat"in e&&"clearcoat"in r&&(r.clearcoat=e.clearcoat),"clearcoatRoughness"in e&&"clearcoatRoughness"in r&&(r.clearcoatRoughness=e.clearcoatRoughness),"envMapIntensity"in e&&(r.envMapIntensity=e.envMapIntensity)))})})}function Or(i,e){const t=Nt[i];if(!t){console.warn(`Badge part not loaded yet: ${i}`);return}t.visible=e;const r={Badges_STOCK:"showBadges_STOCK",Stickers_Fender:"showStickers_Fender",Stickers_Rear:"showStickers_Rear"}[i],s=document.getElementById(r);s&&s.classList.toggle("active-toggle",e)}document.getElementById("resetStockButton").addEventListener("click",Pv);function Pv(){Object.values(wi).forEach(i=>{ju(i.options,i.stock);const e=document.getElementById(i.selectId);e&&(e.value=i.stock)}),Or("Badges_STOCK",!0),Or("Stickers_Fender",!0),Or("Stickers_Rear",!0),aa.rotation.x=ni,mr.value="stock",document.getElementById("bodyColorPicker").value="#ffffff",document.getElementById("bodyFinishSelect").value="metallicgloss",document.getElementById("rimsColorPicker").value="#666666",document.getElementById("rimsFinishSelect").value="gloss",document.getElementById("engineColorPicker").value="#ffffff",document.getElementById("engineFinishSelect").value="chrome",document.getElementById("bcaliperColorPicker").value="#888888",document.getElementById("bcaliperFinishSelect").value="gloss",document.getElementById("rideheightSelect").value="stock",Ks(),wa(),La(),Ys(),Xr(),console.log("Reset to stock"),At()}const Qt=new R_;Qt.background=new Be(2236962);const li=document.getElementById("viewer"),Dv=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Nv=Dv||/Android/i.test(navigator.userAgent)||window.innerWidth<=900,Il=navigator.hardwareConcurrency||4,Uv=navigator.deviceMemory||4;let En="high";Il<=4||Uv<=4?En="low":(Il<=8||Nv)&&(En="medium");const Wt=new w_({antialias:En==="high",powerPreference:En==="high"?"high-performance":"default"});Wt.setPixelRatio(En==="low"?1:Math.min(window.devicePixelRatio,En==="medium"?1.5:2));li.appendChild(Wt.domElement);Wt.toneMapping=Bl;Wt.toneMappingExposure=.8;Wt.shadowMap.type=Ol;Wt.shadowMap.enabled=!0;const zt=new Vs(16777215,2.5);zt.position.set(0,20,0);En==="high"?(zt.castShadow=!0,zt.shadow.normalBias=.01,zt.shadow.mapSize.width=2048,zt.shadow.mapSize.height=2048):En==="medium"?(zt.castShadow=!0,zt.shadow.normalBias=.01,zt.shadow.mapSize.width=1024,zt.shadow.mapSize.height=1024):En==="low"?(zt.castShadow=!0,zt.shadow.normalBias=.01,zt.shadow.mapSize.width=512,zt.shadow.mapSize.height=512):zt.castShadow=!1;Qt.add(zt);const Ou=new Vs(16777215,.5);Ou.position.set(-20,7,-10);Qt.add(Ou);const Fu=new Vs(16777215,.5);Fu.position.set(20,7,10);Qt.add(Fu);const sn=new Vt(35,li.clientWidth/li.clientHeight,.1,1e3);sn.position.set(2,0,-1.7);Qt.add(sn);const ui=new Su(16777215,5);ui.angle=Math.PI/6;ui.penumbra=.5;ui.decay=2;ui.distance=250;ui.position.set(0,0,0);ui.target.position.set(0,0,-1);sn.add(ui);sn.add(ui.target);const sa=-.49,Xs=new Yt(new Gr(10,500,1,1),new B_({opacity:.5}));Xs.rotation.x=-Math.PI/2;Xs.position.y=sa;Xs.receiveShadow=!0;Qt.add(Xs);var Ov=new F(-1,-1,-1),Fv=new F(1,1,1);const Jt=new p0(sn,Wt.domElement);Jt.enableDamping=!0;Jt.target.set(-.3,.125,0);Jt.minPolarAngle=0;Jt.maxPolarAngle=Math.PI/2.05;Jt.maxDistance=10;Jt.update();const Pl=new F;function Bv(){Pl.copy(sn.position).sub(Jt.target),Jt.target.clamp(Ov,Fv),sn.position.copy(Jt.target).add(Pl)}function kv(){Jt.target.y=Math.max(Jt.target.y,sa),sn.position.y=Math.max(sn.position.y,sa)}const Bu=new jo(Wt);Bu.compileEquirectangularShader();let oa=!1,Ho=0,Dl=performance.now();function At(){oa||(oa=!0,requestAnimationFrame(Hv))}function Hv(){oa=!1,kv(),Jt.update(),Bv(),Wt.render(Qt,sn),Ho++;const i=performance.now();i-Dl>=1e3&&(console.log(`Rendered frames this second: ${Ho}`),Ho=0,Dl=i)}Jt.addEventListener("change",At);function Ra(){const i=li.clientWidth,e=li.clientHeight;i<1||e<1||(Wt.setSize(i,e,!1),sn.aspect=i/e,sn.updateProjectionMatrix(),At())}function zv(){console.log({viewerCSS:`${li.clientWidth} × ${li.clientHeight}`,canvasCSS:`${Wt.domElement.clientWidth} × ${Wt.domElement.clientHeight}`,drawingBuffer:`${Wt.domElement.width} × ${Wt.domElement.height}`,pixelRatio:Wt.getPixelRatio()})}const Gv=new ResizeObserver(()=>{Ra()});Gv.observe(li);window.addEventListener("orientationchange",()=>{setTimeout(Ra,100)});Ra();zv();const Vv=new hv().setPath("/hdri/");let ws=null,Ca="studiohdri4.exr",zo=0;function ku(i){Ca=i;const e=++zo;Go(i,!0),Vv.load(i,function(t){if(e!==zo){t.dispose();return}const n=Bu.fromEquirectangular(t).texture;t.dispose(),ws&&ws.dispose(),ws=n,Qt.environment=ws,Qt.background=new Be(0),Go(i,!1),Hu(i),At()},void 0,function(t){e===zo&&Go(i,!1),console.error(`Error loading HDRI: ${i}`,t)})}function Hu(i){document.querySelectorAll(".hdriButton").forEach(e=>{const t=e.dataset.hdri===i;e.classList.toggle("active",t)})}function Go(i,e){document.querySelectorAll(".hdriButton").forEach(t=>{const n=t.dataset.hdri===i;t.classList.toggle("loading",n&&e)})}document.querySelectorAll(".hdriButton").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.hdri;Ca=e,ku(e),Hu(e)})});ku(Ca);At();const zu=[],Gu={gloss:{roughness:.1,metalness:0,envMapIntensity:1.5},semigloss:{roughness:.4,metalness:0,envMapIntensity:.8,clearcoat:.4,clearcoatRoughness:.8},matte:{roughness:.65,metalness:0,envMapIntensity:.8,clearcoat:.1,clearcoatRoughness:.4},metallicgloss:{roughness:.1,metalness:.4,envMapIntensity:1.5}};function Wv(i){i.traverse(e=>{!e.isMesh||!e.material||!(e.material.name.toLowerCase()==="color_bsclr")||(e.material=e.material.clone(),zu.push(e.material))})}function Ks(){const i=document.getElementById("bodyFinishSelect").value,e=document.getElementById("bodyColorPicker").value,t=Gu[i];zu.forEach(n=>{n.color.set(e),n.roughness=t.roughness,n.metalness=t.metalness,"envMapIntensity"in n&&(n.envMapIntensity=t.envMapIntensity),"clearcoat"in n&&(n.clearcoat=t.clearcoat??0),"clearcoatRoughness"in n&&(n.clearcoatRoughness=t.clearcoatRoughness??1),"specularIntensity"in n&&(n.specularIntensity=t.specularIntensity??1)}),At()}document.getElementById("bodyFinishSelect").addEventListener("change",Ks);document.getElementById("bodyColorPicker").addEventListener("input",Ks);const Nt={};hi("SET","/models/SET.glb",!0);let aa,Nl;Ru.load("/models/stock_m109r.glb",function(i){const e=i.scene;Qt.add(e),e.traverse(t=>{t.name==="SOCKET_Frame"&&(aa=t,Wn[t.name]=t),t.name==="SOCKET_Swingarm"&&(Nl=t,Wn[t.name]=t),t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),aa||console.warn("SOCKET_Frame not found!"),Nl||console.warn("SOCKET_Swingarm not found!"),Nt.stock_m109r=e,Cv(),Iv(),Wv(e),Ks(),At()},void 0,function(i){console.error("Error loading stock model:",i)});console.log(Wn);function hi(i,e,t=!0,n=null){Ru.load(e,r=>{const s=r.scene;s.visible=t,s.traverse(o=>{o.isMesh&&(o.castShadow=i!=="SET",o.receiveShadow=!0)}),Qt.add(s),Nt[i]=s,Yv(s),n&&n(s),Rv(i,s),Uu(s),At()})}xv(wi);const Vu="m109r_config_v1";function Wu(){var l,u,h;const i={version:"1.0.0",savedAt:new Date().toISOString(),parts:{},bodyFinish:null};Object.entries(wi).forEach(([f,p])=>{const S=document.getElementById(p.selectId);if(!S){console.warn(`No select found for ${f}:`,p.selectId);return}i.parts[f]=S.value});const e=document.getElementById("bodyFinishSelect");e?i.bodyFinish=e.value:console.warn("No select found: bodyFinishSelect");const t=document.getElementById("bodyColorPicker");t?i.bodyColor=t.value:console.warn("No color picker found: bodyColorPicker");const n=document.getElementById("rimsFinishSelect");n?i.rimsFinish=n.value:console.warn("No select found: rimsFinishSelect");const r=document.getElementById("rimsColorPicker");r?i.rimsColor=r.value:console.warn("No color picker found: rimsColorPicker");const s=document.getElementById("engineColorPicker");s?i.engineColor=s.value:console.warn("No color picker found: engineColorPicker");const o=document.getElementById("engineFinishSelect");o?i.engineFinish=o.value:console.warn("No select found: engineFinishSelect");const a=document.getElementById("bcaliperFinishSelect");a?i.bcaliperFinish=a.value:console.warn("No select found: bcaliperFinishSelect");const c=document.getElementById("bcaliperColorPicker");c?i.bcaliperColor=c.value:console.warn("No color picker found: bcaliperColorPicker"),Object.entries(wi).forEach(([f,p])=>{const S=document.getElementById(p.selectId);S&&(i.parts[f]=S.value)}),i.badges={Badges_STOCK:((l=Nt.Badges_STOCK)==null?void 0:l.visible)??!1,Stickers_Fender:((u=Nt.Stickers_Fender)==null?void 0:u.visible)??!1,Stickers_Rear:((h=Nt.Stickers_Rear)==null?void 0:h.visible)??!1},i.rideheight=mr.value,localStorage.setItem(Vu,JSON.stringify(i)),console.log("Saved configuration:",i)}function Xv(){const i=localStorage.getItem(Vu);if(!i){console.warn("No saved configuration found.");return}let e;try{e=JSON.parse(i)}catch(u){console.error("Saved configuration is invalid:",u);return}Object.entries(e.parts).forEach(([u,h])=>{const f=wi[u];if(!f){console.warn(`Saved group no longer exists: ${u}`);return}if(!f.options.includes(h)){console.warn(`Saved option no longer exists for ${u}: ${h}`);return}const p=document.getElementById(f.selectId);if(!p){console.warn(`No select found for ${u}:`,f.selectId);return}p.value=h,p.dispatchEvent(new Event("change",{bubbles:!0}))});const t=document.getElementById("bodyColorPicker");t&&e.bodyColor?(t.value=e.bodyColor,t.dispatchEvent(new Event("input",{bubbles:!0}))):console.warn("No color picker found: bodyColorPicker or no saved body color.");const n=document.getElementById("bodyFinishSelect");n&&e.bodyFinish?(n.value=e.bodyFinish,n.dispatchEvent(new Event("change",{bubbles:!0}))):console.warn("No select found: bodyFinishSelect or no saved body finish.");const r=document.getElementById("rimsFinishSelect");r&&e.rimsFinish?(r.value=e.rimsFinish,r.dispatchEvent(new Event("change",{bubbles:!0}))):console.warn("No select found: rimsFinishSelect or no saved rims finish.");const s=document.getElementById("rimsColorPicker");s&&e.rimsColor?(s.value=e.rimsColor,s.dispatchEvent(new Event("input",{bubbles:!0}))):console.warn("No color picker found: rimsColorPicker or no saved rims color.");const o=document.getElementById("engineColorPicker");o&&e.engineColor?(o.value=e.engineColor,o.dispatchEvent(new Event("input",{bubbles:!0}))):console.warn("No color picker found: engineColorPicker or no saved engine color.");const a=document.getElementById("engineFinishSelect");a&&e.engineFinish?(a.value=e.engineFinish,a.dispatchEvent(new Event("change",{bubbles:!0}))):console.warn("No select found: engineFinishSelect or no saved engine finish.");const c=document.getElementById("bcaliperColorPicker");c&&e.bcaliperColor?(c.value=e.bcaliperColor,c.dispatchEvent(new Event("input",{bubbles:!0}))):console.warn("No color picker found: bcaliperColorPicker or no saved caliper color.");const l=document.getElementById("bcaliperFinishSelect");l&&e.bcaliperFinish?(l.value=e.bcaliperFinish,l.dispatchEvent(new Event("change",{bubbles:!0}))):console.warn("No select found: bcaliperFinishSelect or no saved caliper finish."),e.badges&&Object.entries(e.badges).forEach(([u,h])=>{Or(u,!!h)}),console.log("Loaded configuration:",e),typeof requestRenderIfNotRequested=="function"&&requestRenderIfNotRequested(),mr.value=e.rideheight,mr.dispatchEvent(new Event("change"))}document.getElementById("saveConfigurationButton").addEventListener("click",Wu);document.getElementById("loadConfigurationButton").addEventListener("click",Xv);hi("Badges_STOCK","/models/Badges_STOCK.glb",!0);document.getElementById("showBadges_STOCK").classList.add("active-toggle");hi("Stickers_Fender","/models/Stickers_Fender.glb",!0);document.getElementById("showStickers_Fender").classList.add("active-toggle");hi("Stickers_Rear","/models/Stickers_Rear.glb",!0);document.getElementById("showStickers_Rear").classList.add("active-toggle");const Xu=[],Kv={gloss:{roughness:.1,metalness:0,envMapIntensity:1.5},semigloss:{roughness:.4,metalness:0,envMapIntensity:.8,clearcoat:.4,clearcoatRoughness:.8},matte:{roughness:.65,metalness:0,envMapIntensity:.8,clearcoat:.1,clearcoatRoughness:.4},chrome:{roughness:0,metalness:1,envMapIntensity:1.5}};function Yv(i){i.traverse(e=>{!e.isMesh||!e.material||!e.name.toLowerCase().includes("_rmclr")||(e.material=e.material.clone(),Xu.push(e.material))})}function La(){const i=document.getElementById("rimsFinishSelect").value,e=document.getElementById("rimsColorPicker").value,t=Kv[i];Xu.forEach(n=>{n.color.set(e),n.roughness=t.roughness,n.metalness=t.metalness,"envMapIntensity"in n&&(n.envMapIntensity=t.envMapIntensity)}),At()}document.getElementById("rimsFinishSelect").addEventListener("change",La);document.getElementById("rimsColorPicker").addEventListener("input",La);const Ku=[],qv={chrome:{roughness:0,metalness:1,envMapIntensity:1.5},semigloss:{roughness:.4,metalness:0,envMapIntensity:.8,clearcoat:.4,clearcoatRoughness:.8},gloss:{roughness:.1,metalness:0,envMapIntensity:1.5},matte:{roughness:.65,metalness:0,envMapIntensity:.8,clearcoat:.1,clearcoatRoughness:.4}};function jv(i){i.traverse(e=>{!e.isMesh||!e.material||!e.material.name.toLowerCase().includes("engine")||(e.material=e.material.clone(),Ku.push(e.material))})}function Ys(){const i=document.getElementById("engineFinishSelect").value,e=document.getElementById("engineColorPicker").value,t=qv[i];Ku.forEach(n=>{n.color.set(e),n.roughness=t.roughness,n.metalness=t.metalness,"envMapIntensity"in n&&(n.envMapIntensity=t.envMapIntensity),"clearcoat"in n&&(n.clearcoat=t.clearcoat??0),"clearcoatRoughness"in n&&(n.clearcoatRoughness=t.clearcoatRoughness??1),"specularIntensity"in n&&(n.specularIntensity=t.specularIntensity??1)}),At()}document.getElementById("engineFinishSelect").addEventListener("change",Ys);document.getElementById("engineColorPicker").addEventListener("input",Ys);hi("EngineCovers_BSCLR","/models/EngineCovers_BSCLR.glb",!0,i=>{jv(i),Ys(),At()});const Yu=[],Zv={chrome:{roughness:0,metalness:1,envMapIntensity:1.5},semigloss:{roughness:.4,metalness:0,envMapIntensity:.8,clearcoat:.4,clearcoatRoughness:.8},gloss:{roughness:.1,metalness:0,envMapIntensity:1.5},matte:{roughness:.65,metalness:0,envMapIntensity:.8,clearcoat:.1,clearcoatRoughness:.4}};function qu(i){i.traverse(e=>{!e.isMesh||!e.material||!e.material.name.toLowerCase().includes("brakecaliper")||(e.material=e.material.clone(),Yu.push(e.material))})}function Xr(){const i=document.getElementById("bcaliperFinishSelect").value,e=document.getElementById("bcaliperColorPicker").value,t=Zv[i];Yu.forEach(n=>{n.color.set(e),n.roughness=t.roughness,n.metalness=t.metalness,"envMapIntensity"in n&&(n.envMapIntensity=t.envMapIntensity),"clearcoat"in n&&(n.clearcoat=t.clearcoat??0),"clearcoatRoughness"in n&&(n.clearcoatRoughness=t.clearcoatRoughness??1),"specularIntensity"in n&&(n.specularIntensity=t.specularIntensity??1)}),At()}document.getElementById("bcaliperFinishSelect").addEventListener("change",Xr);document.getElementById("bcaliperColorPicker").addEventListener("input",Xr);hi("BrakeCalipers_FRONT","/models/BrakeCalipers_FRONT.glb",!0,i=>{qu(i),Xr(),At()});hi("BrakeCaliper_REAR","/models/BrakeCaliper_REAR.glb",!0,i=>{qu(i),Xr(),At()});function ju(i,e){const t=mv[e]||[e];i.forEach(n=>{if(!Nt[n]){console.warn(`${n} has not loaded yet`);return}Nt[n].visible=t.includes(n)})}function Ia(i,e){const t=document.getElementById(i);if(!t){console.warn(`Toggle button not found: ${i}`);return}t.addEventListener("click",()=>{const n=Nt[e];if(!n){console.warn(`Toggle part not loaded yet: ${e}`);return}Or(e,!n.visible),Wu(),At()})}Ia("showBadges_STOCK","Badges_STOCK");Ia("showStickers_Fender","Stickers_Fender");Ia("showStickers_Rear","Stickers_Rear");
