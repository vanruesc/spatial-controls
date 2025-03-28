"use strict";(()=>{var Pm=Object.defineProperty;var hd=Math.pow,Rm=(n,t,e)=>t in n?Pm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var H=(n,t,e)=>Rm(n,typeof t!="symbol"?t+"":t,e);var lo=(n,t,e)=>new Promise((i,s)=>{var r=l=>{try{a(e.next(l))}catch(c){s(c)}},o=l=>{try{a(e.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((e=e.apply(n,t)).next())});var na="175";var Dd=0,xc=1,Ld=2;var bc=1,Nd=2,Mn=3,kn=0,Oe=1,sn=2,zn=0,Ii=1,br=2,yc=3,wc=4,Ud=5,ci=100,Od=101,Fd=102,Bd=103,kd=104,Vd=200,zd=201,Hd=202,Gd=203,Io=204,Do=205,Wd=206,Xd=207,qd=208,Yd=209,Kd=210,$d=211,Zd=212,Jd=213,jd=214,ia=0,sa=1,ra=2,Di=3,oa=4,aa=5,la=6,ca=7,Mc=0,Qd=1,tp=2,Hn=0,ep=1,np=2,ip=3,ha=4,sp=5,rp=6,op=7;var Ec=300,ki=301,Vi=302,ua=303,da=304,yr=306,vs=1e3,li=1001,Lo=1002,nn=1003,ap=1004;var wr=1005;var pn=1006,pa=1007;var pi=1008;var En=1009,Sc=1010,Ac=1011,Ss=1012,fa=1013,fi=1014,Sn=1015,As=1016,ma=1017,ga=1018,Ts=1020,Tc=35902,Cc=1021,Pc=1022,rn=1023,Rc=1024,Ic=1025,_s=1026,Cs=1027,Dc=1028,va=1029,Lc=1030,_a=1031;var xa=1033,Mr=33776,Er=33777,Sr=33778,Ar=33779,ba=35840,ya=35841,wa=35842,Ma=35843,Ea=36196,Sa=37492,Aa=37496,Ta=37808,Ca=37809,Pa=37810,Ra=37811,Ia=37812,Da=37813,La=37814,Na=37815,Ua=37816,Oa=37817,Fa=37818,Ba=37819,ka=37820,Va=37821,Tr=36492,za=36494,Ha=36495,Nc=36283,Ga=36284,Wa=36285,Xa=36286;var Qs=2300,No=2301,Ro=2302,dc=2400,pc=2401,fc=2402;var lp=3200,cp=3201;var Uc=0,hp=1,Gn="",Ee="srgb",Li="srgb-linear",tr="linear",te="srgb";var Pi=7680;var mc=519,up=512,dp=513,pp=514,Oc=515,fp=516,mp=517,gp=518,vp=519,gc=35044;var Fc="300 es",bn=2e3,er=2001;var $t=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gl=Math.PI/180,Uo=180/Math.PI;function Cr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Ut(n,t,e){return Math.max(t,Math.min(e,n))}function Im(n,t){return(n%t+t)%t}function Wl(n,t,e){return(1-e)*n+e*t}function Ys(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Kt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],v=i[8],x=s[0],f=s[3],d=s[6],S=s[1],E=s[4],w=s[7],T=s[2],C=s[5],I=s[8];return r[0]=o*x+a*S+l*T,r[3]=o*f+a*E+l*C,r[6]=o*d+a*w+l*I,r[1]=c*x+h*S+u*T,r[4]=c*f+h*E+u*C,r[7]=c*d+h*w+u*I,r[2]=p*x+m*S+v*T,r[5]=p*f+m*E+v*C,r[8]=p*d+m*w+v*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,v=e*u+i*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=p*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new Pt;function Bc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _p(){let n=xs("canvas");return n.style.display="block",n}var ud={};function Pr(n){n in ud||(ud[n]=!0,console.warn(n))}function xp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function bp(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yp(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var dd=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pd=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dm(){let n={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?tr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Li]:{primaries:t,whitePoint:i,transfer:tr,toXYZ:dd,fromXYZ:pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:i,transfer:te,toXYZ:dd,fromXYZ:pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),n}var Gt=Dm();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ss,Oo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=xs("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bn(e[i]/255)*255):e[i]=Bn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lm=0,bs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ql(s[o].image)):r.push(ql(s[o]))}else r=ql(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ql(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nm=0,He=class n extends $t{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=li,s=li,r=pn,o=pi,a=rn,l=En,c=n.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Cr(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ec;He.DEFAULT_ANISOTROPY=1;var pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],v=l[9],x=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,w=(m+1)/2,T=(d+1)/2,C=(h+p)/4,I=(u+x)/4,P=(v+f)/4;return E>w&&E>T?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=I/i):w>T?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=C/s,r=P/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=I/r,s=P/r),this.set(i,s,r,e),this}let S=Math.sqrt((f-v)*(f-v)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(f-v)/S,this.y=(u-x)/S,this.z=(p-h)/S,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends $t{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new He(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends Fo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},nr=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bo=class extends He{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=v,t[e+3]=x;return}if(u!==x||l!==p||c!==m||h!==v){let f=1-a,d=l*p+c*m+h*v+u*x,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let T=Math.sqrt(E),C=Math.atan2(T,d*S);f=Math.sin(f*C)/T,a=Math.sin(a*C)/T}let w=a*S;if(l=l*f+p*w,c=c*f+m*w,h=h*f+v*w,u=u*f+x*w,f===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+h*u+l*m-c*p,t[e+1]=l*v+h*p+c*u-a*m,t[e+2]=c*v+h*m+a*p-l*u,t[e+3]=h*v-a*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),p=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*v,this._y=c*m*u-p*h*v,this._z=c*h*v+p*m*u,this._w=c*h*u-p*m*v;break;case"YXZ":this._x=p*h*u+c*m*v,this._y=c*m*u-p*h*v,this._z=c*h*v-p*m*u,this._w=c*h*u+p*m*v;break;case"ZXY":this._x=p*h*u-c*m*v,this._y=c*m*u+p*h*v,this._z=c*h*v+p*m*u,this._w=c*h*u-p*m*v;break;case"ZYX":this._x=p*h*u-c*m*v,this._y=c*m*u+p*h*v,this._z=c*h*v-p*m*u,this._w=c*h*u+p*m*v;break;case"YZX":this._x=p*h*u+c*m*v,this._y=c*m*u+p*h*v,this._z=c*h*v-p*m*u,this._w=c*h*u-p*m*v;break;case"XZY":this._x=p*h*u-c*m*v,this._y=c*m*u-p*h*v,this._z=c*h*v+p*m*u,this._w=c*h*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=i+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new L,fd=new Ie,wn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),ho.subVectors(this.max,Ks),rs.subVectors(t.a,Ks),os.subVectors(t.b,Ks),as.subVectors(t.c,Ks),ei.subVectors(os,rs),ni.subVectors(as,os),Si.subVectors(rs,as);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Si.z,Si.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Si.z,0,-Si.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Si.y,Si.x,0];return!Kl(e,rs,os,as,ho)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,rs,os,as,ho))?!1:(uo.crossVectors(ei,ni),e=[uo.x,uo.y,uo.z],Kl(e,rs,os,as,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ln=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,co=new wn,rs=new L,os=new L,as=new L,ei=new L,ni=new L,Si=new L,Ks=new L,ho=new L,uo=new L,Ai=new L;function Kl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ai.fromArray(n,r);let a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Um=new wn,$s=new L,$l=new L,Ni=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Um.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add($l)),this.expandByPoint($s.copy(t.center).sub($l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new L,Zl=new L,po=new L,ii=new L,Jl=new L,fo=new L,jl=new L,ir=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zl.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Zl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=ii.dot(this.direction),l=-ii.dot(po),c=ii.lengthSq(),h=Math.abs(1-o*o),u,p,m,v;if(h>0)if(u=o*l-a,p=o*a-l,v=r*h,u>=0)if(p>=-v)if(p<=v){let x=1/h;u*=x,p*=x,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-v?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=v?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zl).addScaledVector(po,p),m}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){Jl.subVectors(e,t),fo.subVectors(i,t),jl.crossVectors(Jl,fo);let o=this.direction.dot(jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let l=a*this.direction.dot(fo.crossVectors(ii,fo));if(l<0)return null;let c=a*this.direction.dot(Jl.cross(ii));if(c<0||l+c>o)return null;let h=-a*ii.dot(jl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,p,m,v,x,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,p,m,v,x,f)}set(t,e,i,s,r,o,a,l,c,h,u,p,m,v,x,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=v,d[11]=x,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*u,v=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+v*c,e[5]=p-x*c,e[9]=-a*l,e[2]=x-p*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*u,v=c*h,x=c*u;e[0]=p+x*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*u,v=c*h,x=c*u;e[0]=p-x*a,e[4]=-o*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=x-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*u,v=a*h,x=a*u;e[0]=l*h,e[4]=v*c-m,e[8]=p*c+x,e[1]=l*u,e[5]=x*c+p,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,v=a*l,x=a*c;e[0]=l*h,e[4]=x-p*u,e[8]=v*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+v,e[10]=p-x*u}else if(t.order==="XZY"){let p=o*l,m=o*c,v=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+x,e[5]=o*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*h,e[10]=x*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Om,t,Fm)}lookAt(t,e,i){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),si.crossVectors(i,qe),si.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),si.crossVectors(i,qe)),si.normalize(),mo.crossVectors(qe,si),s[0]=si.x,s[4]=mo.x,s[8]=qe.x,s[1]=si.y,s[5]=mo.y,s[9]=qe.y,s[2]=si.z,s[6]=mo.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],v=i[2],x=i[6],f=i[10],d=i[14],S=i[3],E=i[7],w=i[11],T=i[15],C=s[0],I=s[4],P=s[8],y=s[12],b=s[1],R=s[5],Y=s[9],k=s[13],X=s[2],J=s[6],G=s[10],tt=s[14],z=s[3],st=s[7],ut=s[11],xt=s[15];return r[0]=o*C+a*b+l*X+c*z,r[4]=o*I+a*R+l*J+c*st,r[8]=o*P+a*Y+l*G+c*ut,r[12]=o*y+a*k+l*tt+c*xt,r[1]=h*C+u*b+p*X+m*z,r[5]=h*I+u*R+p*J+m*st,r[9]=h*P+u*Y+p*G+m*ut,r[13]=h*y+u*k+p*tt+m*xt,r[2]=v*C+x*b+f*X+d*z,r[6]=v*I+x*R+f*J+d*st,r[10]=v*P+x*Y+f*G+d*ut,r[14]=v*y+x*k+f*tt+d*xt,r[3]=S*C+E*b+w*X+T*z,r[7]=S*I+E*R+w*J+T*st,r[11]=S*P+E*Y+w*G+T*ut,r[15]=S*y+E*k+w*tt+T*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],v=t[3],x=t[7],f=t[11],d=t[15];return v*(+r*l*u-s*c*u-r*a*p+i*c*p+s*a*m-i*l*m)+x*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+f*(+e*c*u-e*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+d*(-s*a*h-e*l*u+e*a*p+s*o*u-i*o*p+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],v=t[12],x=t[13],f=t[14],d=t[15],S=u*f*c-x*p*c+x*l*m-a*f*m-u*l*d+a*p*d,E=v*p*c-h*f*c-v*l*m+o*f*m+h*l*d-o*p*d,w=h*x*c-v*u*c+v*a*m-o*x*m-h*a*d+o*u*d,T=v*u*l-h*x*l-v*a*p+o*x*p+h*a*f-o*u*f,C=e*S+i*E+s*w+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=S*I,t[1]=(x*p*r-u*f*r-x*s*m+i*f*m+u*s*d-i*p*d)*I,t[2]=(a*f*r-x*l*r+x*s*c-i*f*c-a*s*d+i*l*d)*I,t[3]=(u*l*r-a*p*r-u*s*c+i*p*c+a*s*m-i*l*m)*I,t[4]=E*I,t[5]=(h*f*r-v*p*r+v*s*m-e*f*m-h*s*d+e*p*d)*I,t[6]=(v*l*r-o*f*r-v*s*c+e*f*c+o*s*d-e*l*d)*I,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*I,t[8]=w*I,t[9]=(v*u*r-h*x*r-v*i*m+e*x*m+h*i*d-e*u*d)*I,t[10]=(o*x*r-v*a*r+v*i*c-e*x*c-o*i*d+e*a*d)*I,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*m-e*a*m)*I,t[12]=T*I,t[13]=(h*x*s-v*u*s+v*i*p-e*x*p-h*i*f+e*u*f)*I,t[14]=(v*a*s-o*x*s-v*i*l+e*x*l+o*i*f-e*a*f)*I,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*p+e*a*p)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,v=r*u,x=o*h,f=o*u,d=a*u,S=l*c,E=l*h,w=l*u,T=i.x,C=i.y,I=i.z;return s[0]=(1-(x+d))*T,s[1]=(m+w)*T,s[2]=(v-E)*T,s[3]=0,s[4]=(m-w)*C,s[5]=(1-(p+d))*C,s[6]=(f+S)*C,s[7]=0,s[8]=(v+E)*I,s[9]=(f-S)*I,s[10]=(1-(p+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=bn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),m,v;if(a===bn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===er)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=bn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),p=(e+t)*c,m=(i+s)*h,v,x;if(a===bn)v=(o+r)*u,x=-2*u;else if(a===er)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ls=new L,un=new ce,Om=new L(0,0,0),Fm=new L(1,1,1),si=new L,mo=new L,qe=new L,md=new ce,gd=new Ie,fn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(md,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gd.setFromEuler(this),this.setFromQuaternion(gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bm=0,vd=new L,cs=new Ie,Un=new ce,go=new L,Zs=new L,km=new L,Vm=new Ie,_d=new L(1,0,0),xd=new L(0,1,0),bd=new L(0,0,1),yd={type:"added"},zm={type:"removed"},hs={type:"childadded",child:null},Ql={type:"childremoved",child:null},Ke=class n extends $t{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new fn,i=new Ie,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Pt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(_d,t)}rotateY(t){return this.rotateOnAxis(xd,t)}rotateZ(t){return this.rotateOnAxis(bd,t)}translateOnAxis(t,e){return vd.copy(t).applyQuaternion(this.quaternion),this.position.add(vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_d,t)}translateY(t){return this.translateOnAxis(xd,t)}translateZ(t){return this.translateOnAxis(bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Zs,go,this.up):Un.lookAt(go,Zs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Un),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yd),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zm),Ql.child=t,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yd),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new L(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new L,On=new L,tc=new L,Fn=new L,us=new L,ds=new L,wd=new L,ec=new L,nc=new L,ic=new L,sc=new pe,rc=new pe,oc=new pe,ai=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){dn.subVectors(s,e),On.subVectors(i,e),tc.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(On),l=dn.dot(tc),c=On.dot(On),h=On.dot(tc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,v=(o*h-a*l)*p;return r.set(1-m-v,v,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(t,e,i,s){return dn.subVectors(i,e),On.subVectors(t,e),dn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,i),ds.subVectors(r,i),ec.subVectors(t,i);let l=us.dot(ec),c=ds.dot(ec);if(l<=0&&c<=0)return e.copy(i);nc.subVectors(t,s);let h=us.dot(nc),u=ds.dot(nc);if(h>=0&&u<=h)return e.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(us,o);ic.subVectors(t,r);let m=us.dot(ic),v=ds.dot(ic);if(v>=0&&m<=v)return e.copy(r);let x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(ds,a);let f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return wd.subVectors(r,s),a=(u-h)/(u-h+(m-v)),e.copy(s).addScaledVector(wd,a);let d=1/(f+x+p);return o=x*d,a=p*d,e.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Gt.workingColorSpace){if(t=Im(t,1),e=Ut(e,0,1),i=Ut(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ac(o,r,t+1/3),this.g=ac(o,r,t),this.b=ac(o,r,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=wp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Gt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ut(Ce.r*255,0,255))*65536+Math.round(Ut(Ce.g*255,0,255))*256+Math.round(Ut(Ce.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Ce.copy(this),e);let i=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ee){Gt.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,i=Ce.g,s=Ce.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(vo);let i=Wl(ri.h,vo.h,e),s=Wl(ri.s,vo.s,e),r=Wl(ri.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Ot;Ot.NAMES=wp;var Hm=0,Vn=class extends $t{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Ii,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Do,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Io&&(i.blendSrc=this.blendSrc),this.blendDst!==Do&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ui=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new L,_o=new Kt,Gm=0,ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}};var rr=class extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var or=class extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Re=class extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},Wm=0,en=new ce,lc=new Ke,ps=new L,Ye=new wn,Js=new wn,ye=new L,mn=class n extends $t{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bc(t)?or:rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Pt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ye.min,Js.min),Ye.expandByPoint(ye),ye.addVectors(Ye.max,Js.max),Ye.expandByPoint(ye)):(Ye.expandByPoint(Js.min),Ye.expandByPoint(Js.max))}Ye.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(t,c),ye.add(ps)),s=Math.max(s,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new L,l[P]=new L;let c=new L,h=new L,u=new L,p=new Kt,m=new Kt,v=new Kt,x=new L,f=new L;function d(P,y,b){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,b),h.sub(c),u.sub(c),m.sub(p),v.sub(p);let R=1/(m.x*v.y-v.x*m.y);isFinite(R)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(R),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(R),a[P].add(x),a[y].add(x),a[b].add(x),l[P].add(f),l[y].add(f),l[b].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,y=S.length;P<y;++P){let b=S[P],R=b.start,Y=b.count;for(let k=R,X=R+Y;k<X;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let E=new L,w=new L,T=new L,C=new L;function I(P){T.fromBufferAttribute(s,P),C.copy(T);let y=a[P];E.copy(y),E.sub(T.multiplyScalar(T.dot(y))).normalize(),w.crossVectors(C,y);let R=w.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,y=S.length;P<y;++P){let b=S[P],R=b.start,Y=b.count;for(let k=R,X=R+Y;k<X;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){let v=t.getX(p+0),x=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,v=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let d=0;d<h;d++)p[v++]=c[m++]}return new ze(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=t(p,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Md=new ce,Ti=new ir,xo=new Ni,Ed=new L,bo=new L,yo=new L,wo=new L,cc=new L,Mo=new L,Sd=new L,Eo=new L,Ue=class extends Ke{constructor(t=new mn,e=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(cc.fromBufferAttribute(u,t),o?Mo.addScaledVector(cc,h):Mo.addScaledVector(cc.sub(e),h))}e.add(Mo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(xo.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(xo,Ed)===null||Ti.origin.distanceToSquared(Ed)>hd(t.far-t.near,2)))&&(Md.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Md),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){let f=p[v],d=o[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let w=S,T=E;w<T;w+=3){let C=a.getX(w),I=a.getX(w+1),P=a.getX(w+2);s=So(this,d,t,i,c,h,u,C,I,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,d=x;f<d;f+=3){let S=a.getX(f),E=a.getX(f+1),w=a.getX(f+2);s=So(this,o,t,i,c,h,u,S,E,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){let f=p[v],d=o[f.materialIndex],S=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=S,T=E;w<T;w+=3){let C=w,I=w+1,P=w+2;s=So(this,d,t,i,c,h,u,C,I,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,d=x;f<d;f+=3){let S=f,E=f+1,w=f+2;s=So(this,o,t,i,c,h,u,S,E,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Xm(n,t,e,i,s,r,o,a){let l;if(t.side===Oe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===kn,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:n}}function So(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,bo),n.getVertexPosition(l,yo),n.getVertexPosition(c,wo);let h=Xm(n,t,e,i,bo,yo,wo,Sd);if(h){let u=new L;ai.getBarycoord(Sd,bo,yo,wo,u),s&&(h.uv=ai.getInterpolatedAttribute(s,a,l,c,u,new Kt)),r&&(h.uv1=ai.getInterpolatedAttribute(r,a,l,c,u,new Kt)),o&&(h.normal=ai.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new L,materialIndex:0};ai.getNormal(bo,yo,wo,p.normal),h.face=p,h.barycoord=u}return h}var ys=class n extends mn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function v(x,f,d,S,E,w,T,C,I,P,y){let b=w/I,R=T/P,Y=w/2,k=T/2,X=C/2,J=I+1,G=P+1,tt=0,z=0,st=new L;for(let ut=0;ut<G;ut++){let xt=ut*R-k;for(let Nt=0;Nt<J;Nt++){let ee=Nt*b-Y;st[x]=ee*S,st[f]=xt*E,st[d]=X,c.push(st.x,st.y,st.z),st[x]=0,st[f]=0,st[d]=C>0?1:-1,h.push(st.x,st.y,st.z),u.push(Nt/I),u.push(1-ut/P),tt+=1}}for(let ut=0;ut<P;ut++)for(let xt=0;xt<I;xt++){let Nt=p+xt+J*ut,ee=p+xt+J*(ut+1),q=p+(xt+1)+J*(ut+1),et=p+(xt+1)+J*ut;l.push(Nt,ee,et),l.push(ee,q,et),z+=6}a.addGroup(m,z,y),m+=z,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function De(n){let t={};for(let e=0;e<n.length;e++){let i=zi(n[e]);for(let s in i)t[s]=i[s]}return t}function qm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Mp={clone:zi,merge:De},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ar=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new L,Ad=new Kt,Td=new Kt,Pe=class extends ar{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Uo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Ad,Td),e.subVectors(Td,Ad)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ms=1,ko=class extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(fs,ms,t,e);s.layers=this.layers,this.add(s);let r=new Pe(fs,ms,t,e);r.layers=this.layers,this.add(r);let o=new Pe(fs,ms,t,e);o.layers=this.layers,this.add(o);let a=new Pe(fs,ms,t,e);a.layers=this.layers,this.add(a);let l=new Pe(fs,ms,t,e);l.layers=this.layers,this.add(l);let c=new Pe(fs,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},ws=class extends He{constructor(t=[],e=ki,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vo=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ws(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:zn});r.uniforms.tEquirect.value=e;let o=new Ue(s,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=pn),new ko(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ri=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},$m={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,i),d=this._getHandJoint(c,x);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($m)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},lr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var cr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var hc=new L,Zm=new L,Jm=new Pt,xn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=hc.subVectors(i,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(hc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Jm.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Ni,Ao=new L,hr=class{constructor(t=new xn,e=new xn,i=new xn,s=new xn,r=new xn,o=new xn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],v=s[9],x=s[10],f=s[11],d=s[12],S=s[13],E=s[14],w=s[15];if(i[0].setComponents(l-r,p-c,f-m,w-d).normalize(),i[1].setComponents(l+r,p+c,f+m,w+d).normalize(),i[2].setComponents(l+o,p+h,f+v,w+S).normalize(),i[3].setComponents(l-o,p-h,f-v,w-S).normalize(),i[4].setComponents(l-a,p-u,f-x,w-E).normalize(),e===bn)i[5].setComponents(l+a,p+u,f+x,w+E).normalize();else if(e===er)i[5].setComponents(a,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ur=class extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zo=new L,Ho=new L,Cd=new ce,js=new ir,To=new Ni,uc=new L,Pd=new L,Go=class extends Ke{constructor(t=new mn,e=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)zo.fromBufferAttribute(e,s-1),Ho.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=zo.distanceTo(Ho);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Cd.copy(s).invert(),js.copy(t.ray).applyMatrix4(Cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){let m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let x=m,f=v-1;x<f;x+=c){let d=h.getX(x),S=h.getX(x+1),E=Co(this,t,js,l,d,S,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(v-1),f=h.getX(m),d=Co(this,t,js,l,x,f,v-1);d&&e.push(d)}}else{let m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=m,f=v-1;x<f;x+=c){let d=Co(this,t,js,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){let x=Co(this,t,js,l,v-1,m,v-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Co(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(zo.fromBufferAttribute(a,s),Ho.fromBufferAttribute(a,r),e.distanceSqToSegment(zo,Ho,uc,Pd)>i)return;uc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(uc);if(!(c<t.near||c>t.far))return{distance:c,point:Pd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Rd=new L,Id=new L,Wo=class extends Go{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Rd.fromBufferAttribute(e,s),Id.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rd.distanceTo(Id);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var dr=class extends He{constructor(t,e,i=fi,s,r,o,a=nn,l=nn,c,h=_s){if(h!==_s&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var Oi=class n extends mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,p=e/l,m=[],v=[],x=[],f=[];for(let d=0;d<h;d++){let S=d*p-o;for(let E=0;E<c;E++){let w=E*u-r;v.push(w,-S,0),x.push(0,0,1),f.push(E/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){let E=S+c*d,w=S+c*(d+1),T=S+1+c*(d+1),C=S+1+c*d;m.push(E,w,C),m.push(w,T,C)}this.setIndex(m),this.setAttribute("position",new Re(v,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var pr=class n extends mn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,p=new L,m=[],v=[],x=[],f=[];for(let d=0;d<=i;d++){let S=[],E=d/i,w=0;d===0&&o===0?w=.5/e:d===i&&l===Math.PI&&(w=-.5/e);for(let T=0;T<=e;T++){let C=T/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+E*a),v.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),f.push(C+w,1-E),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<e;S++){let E=h[d][S+1],w=h[d][S],T=h[d+1][S],C=h[d+1][S+1];(d!==0||o>0)&&m.push(E,w,C),(d!==i-1||l<Math.PI)&&m.push(w,T,C)}this.setIndex(m),this.setAttribute("position",new Re(v,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fr=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xo=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Po(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function jm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Fi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yo=class extends Fi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pc:r=t,a=2*e-i;break;case fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:o=t,l=2*i-e;break;case fc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,v=(i-e)/(s-e),x=v*v,f=x*v,d=-p*f+2*p*x-p*v,S=(1+p)*f+(-1.5-2*p)*x+(-.5+p)*v+1,E=(-1-m)*f+(1.5+m)*x+.5*v,w=m*f-m*x;for(let T=0;T!==a;++T)r[T]=d*o[h+T]+S*o[c+T]+E*o[l+T]+w*o[u+T];return r}},Ko=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},$o=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$e=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Po(e,this.TimeBufferType),this.values=Po(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Po(t.times,Array),values:Po(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case No:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&jm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,p=u-i,m=u+i;for(let v=0;v!==i;++v){let x=e[u+v];if(x!==e[p+v]||x!==e[m+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,p=o*i;for(let m=0;m!==i;++m)e[p+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=No;var hi=class extends $e{constructor(t,e,i){super(t,e,i)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Qs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Zo.prototype.ValueTypeName="color";var Jo=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Jo.prototype.ValueTypeName="number";var jo=class extends Fi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}},mr=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends $e{constructor(t,e,i){super(t,e,i)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Qs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends $e{constructor(t,e,i,s){super(t,e,i,s)}};Qo.prototype.ValueTypeName="vector";var vc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Es=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null}}},Ep=new Es,Bi=class{constructor(t){this.manager=t!==void 0?t:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends Bi{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=vc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=xs("img");function l(){h(),vc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},vr=class extends Bi{constructor(t){super(t)}load(t,e,i,s){let r=new ws;r.colorSpace=Ee;let o=new gr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let c=0;c<t.length;++c)l(c);return r}};var _r=class extends Bi{constructor(t){super(t)}load(t,e,i,s){let r=new He,o=new gr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}};var ta=class extends ar{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ea=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}};var Vc="\\[\\]\\.:\\/",Qm=new RegExp("["+Vc+"]","g"),zc="[^"+Vc+"]",tg="[^"+Vc.replace("\\.","")+"]",eg=/((?:WC+[\/:])*)/.source.replace("WC",zc),ng=/(WCOD+)?/.source.replace("WCOD",tg),ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),rg=new RegExp("^"+eg+ng+ig+sg+"$"),og=["material","materials","bones","map"],_c=class{constructor(t,e,i){let s=i||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(t){let e=rg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);og.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=_c;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xw=new Float32Array(1);var di=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ut(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xr=class extends Wo{constructor(t,e=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new mn;r.setIndex(new ze(i,1)),r.setAttribute("position",new Re(s,3)),super(r,new ur({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}};function Hc(n,t,e,i){let s=ag(i);switch(e){case Cc:return n*t;case Rc:return n*t;case Ic:return n*t*2;case Dc:return n*t/s.components*s.byteLength;case va:return n*t/s.components*s.byteLength;case Lc:return n*t*2/s.components*s.byteLength;case _a:return n*t*2/s.components*s.byteLength;case Pc:return n*t*3/s.components*s.byteLength;case rn:return n*t*4/s.components*s.byteLength;case xa:return n*t*4/s.components*s.byteLength;case Mr:case Er:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sr:case Ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ma:return Math.max(n,16)*Math.max(t,8)/4;case ba:case wa:return Math.max(n,8)*Math.max(t,8)/2;case Ea:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Tr:case za:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Nc:case Ga:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ag(n){switch(n){case En:case Sc:return{byteLength:1,components:1};case Ss:case Ac:case As:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case fi:case fa:case Sn:return{byteLength:4,components:1};case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);function Kp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function lg(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<u.length;m++){let v=u[p],x=u[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,u[p]=x)}u.length=p+1;for(let m=0,v=u.length;m<v;m++){let x=u[m];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
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
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ov=`PhysicalMaterial material;
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
#endif`,av=`struct PhysicalMaterial {
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
}`,lv=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cv=`#if defined( RE_IndirectDiffuse )
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_v=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
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
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
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
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n_=`#ifdef USE_TRANSMISSION
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
#endif`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`#include <common>
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
}`,m_=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,y_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
}`,S_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,T_=`#define MATCAP
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
}`,C_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,I_=`#define PHONG
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
}`,D_=`#define STANDARD
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
}`,L_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,U_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,F_=`uniform vec3 diffuse;
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
}`,B_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,V_=`uniform float rotation;
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
}`,z_=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:cg,alphahash_pars_fragment:hg,alphamap_fragment:ug,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:fg,aomap_fragment:mg,aomap_pars_fragment:gg,batching_pars_vertex:vg,batching_vertex:_g,begin_vertex:xg,beginnormal_vertex:bg,bsdfs:yg,iridescence_fragment:wg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Tg,color_fragment:Cg,color_pars_fragment:Pg,color_pars_vertex:Rg,color_vertex:Ig,common:Dg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Ug,displacementmap_vertex:Og,emissivemap_fragment:Fg,emissivemap_pars_fragment:Bg,colorspace_fragment:kg,colorspace_pars_fragment:Vg,envmap_fragment:zg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Gg,envmap_pars_vertex:Wg,envmap_physical_pars_fragment:ev,envmap_vertex:Xg,fog_vertex:qg,fog_pars_vertex:Yg,fog_fragment:Kg,fog_pars_fragment:$g,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Jg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:tv,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:sv,lights_phong_pars_fragment:rv,lights_physical_fragment:ov,lights_physical_pars_fragment:av,lights_fragment_begin:lv,lights_fragment_maps:cv,lights_fragment_end:hv,logdepthbuf_fragment:uv,logdepthbuf_pars_fragment:dv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:fv,map_fragment:mv,map_pars_fragment:gv,map_particle_fragment:vv,map_particle_pars_fragment:_v,metalnessmap_fragment:xv,metalnessmap_pars_fragment:bv,morphinstance_vertex:yv,morphcolor_vertex:wv,morphnormal_vertex:Mv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Sv,normal_fragment_begin:Av,normal_fragment_maps:Tv,normal_pars_fragment:Cv,normal_pars_vertex:Pv,normal_vertex:Rv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Nv,iridescence_pars_fragment:Uv,opaque_fragment:Ov,packing:Fv,premultiplied_alpha_fragment:Bv,project_vertex:kv,dithering_fragment:Vv,dithering_pars_fragment:zv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:Xv,shadowmap_vertex:qv,shadowmask_pars_fragment:Yv,skinbase_vertex:Kv,skinning_pars_vertex:$v,skinning_vertex:Zv,skinnormal_vertex:Jv,specularmap_fragment:jv,specularmap_pars_fragment:Qv,tonemapping_fragment:t_,tonemapping_pars_fragment:e_,transmission_fragment:n_,transmission_pars_fragment:i_,uv_pars_fragment:s_,uv_pars_vertex:r_,uv_vertex:o_,worldpos_vertex:a_,background_vert:l_,background_frag:c_,backgroundCube_vert:h_,backgroundCube_frag:u_,cube_vert:d_,cube_frag:p_,depth_vert:f_,depth_frag:m_,distanceRGBA_vert:g_,distanceRGBA_frag:v_,equirect_vert:__,equirect_frag:x_,linedashed_vert:b_,linedashed_frag:y_,meshbasic_vert:w_,meshbasic_frag:M_,meshlambert_vert:E_,meshlambert_frag:S_,meshmatcap_vert:A_,meshmatcap_frag:T_,meshnormal_vert:C_,meshnormal_frag:P_,meshphong_vert:R_,meshphong_frag:I_,meshphysical_vert:D_,meshphysical_frag:L_,meshtoon_vert:N_,meshtoon_frag:U_,points_vert:O_,points_frag:F_,shadow_vert:B_,shadow_frag:k_,sprite_vert:V_,sprite_frag:z_},nt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},An={basic:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:De([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:De([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:De([nt.points,nt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:De([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:De([nt.common,nt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:De([nt.sprite,nt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:De([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:De([nt.lights,nt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};An.physical={uniforms:De([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var qa={r:0,b:0,g:0},Hi=new fn,H_=new ce;function G_(n,t,e,i,s,r,o){let a=new Ot(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function v(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function x(E){let w=!1,T=v(E);T===null?d(a,l):T&&T.isColor&&(d(T,1),w=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(E,w){let T=v(w);T&&(T.isCubeTexture||T.mapping===yr)?(h===void 0&&(h=new Ue(new ys(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:zi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(w.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Hi)),h.material.toneMapped=Gt.getTransfer(T.colorSpace)!==te,(u!==T||p!==T.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,p=T.version,m=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ue(new Oi(2,2),new gn({name:"BackgroundMaterial",uniforms:zi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(T.colorSpace)!==te,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,p=T.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,w){E.getRGB(qa,kc(n)),i.buffers.color.setClear(qa.r,qa.g,qa.b,w,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:x,addToRenderList:f,dispose:S}}function W_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null),r=s,o=!1;function a(b,R,Y,k,X){let J=!1,G=u(k,Y,R);r!==G&&(r=G,c(r.object)),J=m(b,k,Y,X),J&&v(b,k,Y,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,w(b,R,Y,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,R,Y){let k=Y.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let J=X[R.id];J===void 0&&(J={},X[R.id]=J);let G=J[k];return G===void 0&&(G=p(l()),J[k]=G),G}function p(b){let R=[],Y=[],k=[];for(let X=0;X<e;X++)R[X]=0,Y[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:k,object:b,attributes:{},index:null}}function m(b,R,Y,k){let X=r.attributes,J=R.attributes,G=0,tt=Y.getAttributes();for(let z in tt)if(tt[z].location>=0){let ut=X[z],xt=J[z];if(xt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function v(b,R,Y,k){let X={},J=R.attributes,G=0,tt=Y.getAttributes();for(let z in tt)if(tt[z].location>=0){let ut=J[z];ut===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor));let xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),X[z]=xt,G++}r.attributes=X,r.attributesNum=G,r.index=k}function x(){let b=r.newAttributes;for(let R=0,Y=b.length;R<Y;R++)b[R]=0}function f(b){d(b,0)}function d(b,R){let Y=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;Y[b]=1,k[b]===0&&(n.enableVertexAttribArray(b),k[b]=1),X[b]!==R&&(n.vertexAttribDivisor(b,R),X[b]=R)}function S(){let b=r.newAttributes,R=r.enabledAttributes;for(let Y=0,k=R.length;Y<k;Y++)R[Y]!==b[Y]&&(n.disableVertexAttribArray(Y),R[Y]=0)}function E(b,R,Y,k,X,J,G){G===!0?n.vertexAttribIPointer(b,R,Y,X,J):n.vertexAttribPointer(b,R,Y,k,X,J)}function w(b,R,Y,k){x();let X=k.attributes,J=Y.getAttributes(),G=R.defaultAttributeValues;for(let tt in J){let z=J[tt];if(z.location>=0){let st=X[tt];if(st===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){let ut=st.normalized,xt=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;let ee=Nt.buffer,q=Nt.type,et=Nt.bytesPerElement,gt=q===n.INT||q===n.UNSIGNED_INT||st.gpuType===fa;if(st.isInterleavedBufferAttribute){let rt=st.data,Mt=rt.stride,Yt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let St=0;St<z.locationSize;St++)d(z.location+St,rt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let St=0;St<z.locationSize;St++)f(z.location+St);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let St=0;St<z.locationSize;St++)E(z.location+St,xt/z.locationSize,q,ut,Mt*et,(Yt+xt/z.locationSize*St)*et,gt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)d(z.location+rt,st.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<z.locationSize;rt++)f(z.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let rt=0;rt<z.locationSize;rt++)E(z.location+rt,xt/z.locationSize,q,ut,xt*et,xt/z.locationSize*rt*et,gt)}}else if(G!==void 0){let ut=G[tt];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(z.location,ut);break;case 3:n.vertexAttrib3fv(z.location,ut);break;case 4:n.vertexAttrib4fv(z.location,ut);break;default:n.vertexAttrib1fv(z.location,ut)}}}}S()}function T(){P();for(let b in i){let R=i[b];for(let Y in R){let k=R[Y];for(let X in k)h(k[X].object),delete k[X];delete R[Y]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let R=i[b.id];for(let Y in R){let k=R[Y];for(let X in k)h(k[X].object),delete k[X];delete R[Y]}delete i[b.id]}function I(b){for(let R in i){let Y=i[R];if(Y[b.id]===void 0)continue;let k=Y[b.id];for(let X in k)h(k[X].object),delete k[X];delete Y[b.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:f,disableUnusedAttributes:S}}function X_(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];e.update(m,i,1)}function l(c,h,u,p){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*p[x];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function q_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==rn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===As&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==En&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sn&&!P)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:T,maxSamples:C}}function Y_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new xn,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){let v=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,d=n.get(u);if(!s||v===null||v.length===0||r&&!f)r?h(null):c();else{let S=r?0:i,E=S*4,w=d.clippingState||null;l.value=w,w=h(v,p,E,m);for(let T=0;T!==E;++T)w[T]=e[T];d.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,p,m,v){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=l.value,v!==!0||f===null){let d=m+x*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<d)&&(f=new Float32Array(d));for(let E=0,w=m;E!==x;++E,w+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function K_(n){let t=new WeakMap;function e(o,a){return a===ua?o.mapping=ki:a===da&&(o.mapping=Vi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ua||a===da)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vo(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Rs=4,Sp=[.125,.215,.35,.446,.526,.582],Xi=20,Gc=new ta,Ap=new Ot,Wc=null,Xc=0,qc=0,Yc=!1,Wi=(1+Math.sqrt(5))/2,Ps=1/Wi,Tp=[new L(-Wi,Ps,0),new L(Wi,Ps,0),new L(-Ps,0,Wi),new L(Ps,0,Wi),new L(0,Wi,-Ps),new L(0,Wi,Ps),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],$_=new L,$a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=$_}=r;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,Ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:As,format:rn,colorSpace:Li,depthBuffer:!1},s=Cp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(r)),this._blurMaterial=J_(r,t,e)}return s}_compileMaterial(t){let e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,Gc)}_sceneToCubeUV(t,e,i,s,r){let l=new Pe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Ap),u.toneMapping=Hn,u.autoClear=!1;let v=new Ui({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),x=new Ue(new ys,v),f=!1,d=t.background;d?d.isColor&&(v.color.copy(d),t.background=null,f=!0):(v.color.copy(Ap),f=!0);for(let S=0;S<6;S++){let E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let w=this._cubeSize;Ya(s,E*w,S>2?w:0,w,w),u.setRenderTarget(s),f&&u.render(x,l),u.render(t,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=m,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ki||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ya(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Gc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tp[(s-r-1)%Tp.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ue(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),x=r/v,f=isFinite(r)?1+Math.floor(h*x):Xi;f>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Xi}`);let d=[],S=0;for(let I=0;I<Xi;++I){let P=I/x,y=Math.exp(-P*P/2);d.push(y),I===0?S+=y:I<f&&(S+=2*y)}for(let I=0;I<d.length;I++)d[I]=d[I]/S;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:E}=this;p.dTheta.value=v,p.mipInt.value=E-i;let w=this._sizeLods[s],T=3*w*(s>E-Rs?s-E+Rs:0),C=4*(this._cubeSize-w);Ya(e,T,C,3*w,2*w),l.setRenderTarget(e),l.render(u,Gc)}};function Z_(n){let t=[],e=[],i=[],s=n,r=n-Rs+1+Sp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Rs?l=Sp[o-n+Rs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,x=3,f=2,d=1,S=new Float32Array(x*v*m),E=new Float32Array(f*v*m),w=new Float32Array(d*v*m);for(let C=0;C<m;C++){let I=C%3*2/3-1,P=C>2?0:-1,y=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];S.set(y,x*v*C),E.set(p,f*v*C);let b=[C,C,C,C,C,C];w.set(b,d*v*C)}let T=new mn;T.setAttribute("position",new ze(S,x)),T.setAttribute("uv",new ze(E,f)),T.setAttribute("faceIndex",new ze(w,d)),t.push(T),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cp(n,t,e){let i=new yn(n,t,e);return i.texture.mapping=yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function J_(n,t,e){let i=new Float32Array(Xi),s=new L(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ih(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Pp(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Rp(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function j_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ua||l===da,h=l===ki||l===Vi;if(c||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new $a(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new $a(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Q_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function t0(n,t,e,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let m in p)t.update(p[m],n.ARRAY_BUFFER)}function c(u){let p=[],m=u.index,v=u.attributes.position,x=0;if(m!==null){let S=m.array;x=m.version;for(let E=0,w=S.length;E<w;E+=3){let T=S[E+0],C=S[E+1],I=S[E+2];p.push(T,C,C,I,I,T)}}else if(v!==void 0){let S=v.array;x=v.version;for(let E=0,w=S.length/3-1;E<w;E+=3){let T=E+0,C=E+1,I=E+2;p.push(T,C,C,I,I,T)}}else return;let f=new(Bc(p)?or:rr)(p,1);f.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,f)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function e0(n,t,e){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){n.drawElements(i,m,r,p*o),e.update(m,i,1)}function c(p,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,p*o,v),e.update(m,i,v))}function h(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,v);let f=0;for(let d=0;d<v;d++)f+=m[d];e.update(f,i,1)}function u(p,m,v,x){if(v===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)c(p[d]/o,m[d],x[d]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,v);let d=0;for(let S=0;S<v;S++)d+=m[S]*x[S];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function n0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function i0(n,t,e){let i=new WeakMap,s=new pe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=i.get(a);if(p===void 0||p.count!==u){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;m===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let w=a.attributes.position.count*E,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let C=new Float32Array(w*T*4*u),I=new nr(C,w,T,u);I.type=Sn,I.needsUpdate=!0;let P=E*4;for(let b=0;b<u;b++){let R=f[b],Y=d[b],k=S[b],X=w*T*4*b;for(let J=0;J<R.count;J++){let G=J*P;m===!0&&(s.fromBufferAttribute(R,J),C[X+G+0]=s.x,C[X+G+1]=s.y,C[X+G+2]=s.z,C[X+G+3]=0),v===!0&&(s.fromBufferAttribute(Y,J),C[X+G+4]=s.x,C[X+G+5]=s.y,C[X+G+6]=s.z,C[X+G+7]=0),x===!0&&(s.fromBufferAttribute(k,J),C[X+G+8]=s.x,C[X+G+9]=s.y,C[X+G+10]=s.z,C[X+G+11]=k.itemSize===4?s.w:1)}}p={count:u,texture:I,size:new Kt(w,T)},i.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function s0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var $p=new He,Ip=new dr(1,1),Zp=new nr,Jp=new Bo,jp=new ws,Dp=[],Lp=[],Np=new Float32Array(16),Up=new Float32Array(9),Op=new Float32Array(4);function Ds(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Dp[s];if(r===void 0&&(r=new Float32Array(s),Dp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=Lp[t];e===void 0&&(e=new Int32Array(t),Lp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function r0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function o0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function a0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function l0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function c0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;Op.set(i),n.uniformMatrix2fv(this.addr,!1,Op),xe(e,i)}}function h0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;Up.set(i),n.uniformMatrix3fv(this.addr,!1,Up),xe(e,i)}}function u0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,i))return;Np.set(i),n.uniformMatrix4fv(this.addr,!1,Np),xe(e,i)}}function d0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function p0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function f0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function m0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function g0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function _0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function x0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function b0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ip.compareFunction=Oc,r=Ip):r=$p,e.setTexture2D(t||r,s)}function y0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jp,s)}function w0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||jp,s)}function M0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zp,s)}function E0(n){switch(n){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return f0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return v0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return M0}}function S0(n,t){n.uniform1fv(this.addr,t)}function A0(n,t){let e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function T0(n,t){let e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function C0(n,t){let e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function P0(n,t){let e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function R0(n,t){let e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function I0(n,t){let e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function D0(n,t){n.uniform1iv(this.addr,t)}function L0(n,t){n.uniform2iv(this.addr,t)}function N0(n,t){n.uniform3iv(this.addr,t)}function U0(n,t){n.uniform4iv(this.addr,t)}function O0(n,t){n.uniform1uiv(this.addr,t)}function F0(n,t){n.uniform2uiv(this.addr,t)}function B0(n,t){n.uniform3uiv(this.addr,t)}function k0(n,t){n.uniform4uiv(this.addr,t)}function V0(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$p,r[o])}function z0(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jp,r[o])}function H0(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jp,r[o])}function G0(n,t,e){let i=this.cache,s=t.length,r=Ja(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zp,r[o])}function W0(n){switch(n){case 5126:return S0;case 35664:return A0;case 35665:return T0;case 35666:return C0;case 35674:return P0;case 35675:return R0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return L0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return O0;case 36294:return F0;case 36295:return B0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return G0}}var $c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=E0(e.type)}},Zc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function Fp(n,t){n.seq.push(t),n.map[t.id]=t}function X0(n,t,e){let i=n.name,s=i.length;for(Kc.lastIndex=0;;){let r=Kc.exec(i),o=Kc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fp(e,c===void 0?new $c(a,n,t):new Zc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Jc(a),Fp(e,u)),e=u}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);X0(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Bp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var q0=37297,Y0=0;function K0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var kp=new Pt;function $0(n){Gt._getMatrix(kp,Gt.workingColorSpace,n);let t=`mat3( ${kp.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(n)){case tr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+K0(n.getShaderSource(t),o)}else return s}function Z0(n,t){let e=$0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J0(n,t){let e;switch(t){case ep:e="Linear";break;case np:e="Reinhard";break;case ip:e="Cineon";break;case ha:e="ACESFilmic";break;case rp:e="AgX";break;case op:e="Neutral";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ka=new L;function j0(){Gt.getLuminanceCoefficients(Ka);let n=Ka.x.toFixed(4),t=Ka.y.toFixed(4),e=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function tx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ex(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Rr(n){return n!==""}function zp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(nx,sx)}var ix=new Map;function sx(n,t){let e=Dt[t];if(e===void 0){let i=ix.get(t);if(i!==void 0)e=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(n){return n.replace(rx,ox)}function ox(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wp(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ax(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function lx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ki:case Vi:t="ENVMAP_TYPE_CUBE";break;case yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function hx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qd:t="ENVMAP_BLENDING_MIX";break;case tp:t="ENVMAP_BLENDING_ADD";break}return t}function ux(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ax(e),c=lx(e),h=cx(e),u=hx(e),p=ux(e),m=Q0(e),v=tx(r),x=s.createProgram(),f,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rr).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rr).join(`
`),d.length>0&&(d+=`
`)):(f=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),d=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?J0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Z0("linearToOutputTexel",e.outputColorSpace),j0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=jc(o),o=zp(o,e),o=Hp(o,e),a=jc(a),a=zp(a,e),a=Hp(a,e),o=Gp(o),a=Gp(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=S+f+o,w=S+d+a,T=Bp(s,s.VERTEX_SHADER,E),C=Bp(s,s.FRAGMENT_SHADER,w);s.attachShader(x,T),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(R){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(C).trim(),J=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,C);else{let tt=Vp(s,T,"vertex"),z=Vp(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+tt+`
`+z)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(k===""||X==="")&&(G=!1);G&&(R.diagnostics={runnable:J,programLog:Y,vertexShader:{log:k,prefix:f},fragmentShader:{log:X,prefix:d}})}s.deleteShader(T),s.deleteShader(C),P=new Is(s,x),y=ex(s,x)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,q0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}var px=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new th(t),e.set(t,i)),i}},th=class{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}};function fx(n,t,e,i,s,r,o){let a=new sr,l=new Qc,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function f(y,b,R,Y,k){let X=Y.fog,J=k.geometry,G=y.isMeshStandardMaterial?Y.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),z=tt&&tt.mapping===yr?tt.image.height:null,st=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=ut!==void 0?ut.length:0,Nt=0;J.morphAttributes.position!==void 0&&(Nt=1),J.morphAttributes.normal!==void 0&&(Nt=2),J.morphAttributes.color!==void 0&&(Nt=3);let ee,q,et,gt;if(st){let Qt=An[st];ee=Qt.vertexShader,q=Qt.fragmentShader}else ee=y.vertexShader,q=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);let rt=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),Yt=k.isInstancedMesh===!0,St=k.isBatchedMesh===!0,me=!!y.map,le=!!y.matcap,Ft=!!tt,A=!!y.aoMap,je=!!y.lightMap,Vt=!!y.bumpMap,Bt=!!y.normalMap,bt=!!y.displacementMap,se=!!y.emissiveMap,_t=!!y.metalnessMap,M=!!y.roughnessMap,g=y.anisotropy>0,O=y.clearcoat>0,K=y.dispersion>0,Z=y.iridescence>0,W=y.sheen>0,vt=y.transmission>0,ot=g&&!!y.anisotropyMap,dt=O&&!!y.clearcoatMap,zt=O&&!!y.clearcoatNormalMap,Q=O&&!!y.clearcoatRoughnessMap,pt=Z&&!!y.iridescenceMap,Et=Z&&!!y.iridescenceThicknessMap,Tt=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,kt=!!y.specularMap,It=!!y.specularColorMap,ne=!!y.specularIntensityMap,D=vt&&!!y.transmissionMap,at=vt&&!!y.thicknessMap,V=!!y.gradientMap,$=!!y.alphaMap,ct=y.alphaTest>0,lt=!!y.alphaHash,Rt=!!y.extensions,ue=Hn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=n.toneMapping);let Ae={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:St,batchingColor:St&&k._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&k.instanceColor!==null,instancingMorph:Yt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Li,alphaToCoverage:!!y.alphaToCoverage,map:me,matcap:le,envMap:Ft,envMapMode:Ft&&tt.mapping,envMapCubeUVHeight:z,aoMap:A,lightMap:je,bumpMap:Vt,normalMap:Bt,displacementMap:p&&bt,emissiveMap:se,normalMapObjectSpace:Bt&&y.normalMapType===hp,normalMapTangentSpace:Bt&&y.normalMapType===Uc,metalnessMap:_t,roughnessMap:M,anisotropy:g,anisotropyMap:ot,clearcoat:O,clearcoatMap:dt,clearcoatNormalMap:zt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Tt,sheenRoughnessMap:ft,specularMap:kt,specularColorMap:It,specularIntensityMap:ne,transmission:vt,transmissionMap:D,thicknessMap:at,gradientMap:V,opaque:y.transparent===!1&&y.blending===Ii&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:lt,combine:y.combine,mapUv:me&&x(y.map.channel),aoMapUv:A&&x(y.aoMap.channel),lightMapUv:je&&x(y.lightMap.channel),bumpMapUv:Vt&&x(y.bumpMap.channel),normalMapUv:Bt&&x(y.normalMap.channel),displacementMapUv:bt&&x(y.displacementMap.channel),emissiveMapUv:se&&x(y.emissiveMap.channel),metalnessMapUv:_t&&x(y.metalnessMap.channel),roughnessMapUv:M&&x(y.roughnessMap.channel),anisotropyMapUv:ot&&x(y.anisotropyMap.channel),clearcoatMapUv:dt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:zt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(y.sheenRoughnessMap.channel),specularMapUv:kt&&x(y.specularMap.channel),specularColorMapUv:It&&x(y.specularColorMap.channel),specularIntensityMapUv:ne&&x(y.specularIntensityMap.channel),transmissionMapUv:D&&x(y.transmissionMap.channel),thicknessMapUv:at&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Bt||g),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(me||$),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,decodeVideoTexture:me&&y.map.isVideoTexture===!0&&Gt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===Oe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Rt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&y.extensions.multiDraw===!0||St)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function d(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(b,y),E(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){let b=v[y.type],R;if(b){let Y=An[b];R=Mp.clone(Y.uniforms)}else R=y.uniforms;return R}function T(y,b){let R;for(let Y=0,k=h.length;Y<k;Y++){let X=h[Y];if(X.cacheKey===b){R=X,++R.usedTimes;break}}return R===void 0&&(R=new dx(n,b,y,r),h.push(R)),R}function C(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function I(y){l.remove(y)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:w,acquireProgram:T,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:P}}function mx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function gx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,p,m,v,x,f){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:x,group:f},n[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=x,d.group=f),t++,d}function a(u,p,m,v,x,f){let d=o(u,p,m,v,x,f);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,p,m,v,x,f){let d=o(u,p,m,v,x,f);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,p){e.length>1&&e.sort(u||gx),i.length>1&&i.sort(p||Xp),s.length>1&&s.sort(p||Xp)}function h(){for(let u=t,p=n.length;u<p;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function vx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new qp,n.set(i,[o])):s>=r.length?(o=new qp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function _x(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function xx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var bx=0;function yx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wx(n){let t=new _x,e=xx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new ce,o=new ce;function a(c){let h=0,u=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,v=0,x=0,f=0,d=0,S=0,E=0,w=0,T=0,C=0,I=0;c.sort(yx);for(let y=0,b=c.length;y<b;y++){let R=c[y],Y=R.color,k=R.intensity,X=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=Y.r*k,u+=Y.g*k,p+=Y.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],k);I++}else if(R.isDirectionalLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,z=e.get(R);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=R.shadow.matrix,S++}i.directional[m]=G,m++}else if(R.isSpotLight){let G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(Y).multiplyScalar(k),G.distance=X,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[x]=G;let tt=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,tt.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[x]=tt.matrix,R.castShadow){let z=e.get(R);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=J,w++}x++}else if(R.isRectAreaLight){let G=t.get(R);G.color.copy(Y).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=G,f++}else if(R.isPointLight){let G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let tt=R.shadow,z=e.get(R);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=R.shadow.matrix,E++}i.point[v]=G,v++}else if(R.isHemisphereLight){let G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[d]=G,d++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;let P=i.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==f||P.hemiLength!==d||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==w||P.numSpotMaps!==T||P.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=f,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,P.directionalLength=m,P.pointLength=v,P.spotLength=x,P.rectAreaLength=f,P.hemiLength=d,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=w,P.numSpotMaps=T,P.numLightProbes=I,i.version=bx++)}function l(c,h){let u=0,p=0,m=0,v=0,x=0,f=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){let E=c[d];if(E.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),u++}else if(E.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),m++}else if(E.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let w=i.hemi[x];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:i}}function Yp(n){let t=new wx(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yp(n),t.set(s,[a])):r>=o.length?(a=new Yp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`;function Ax(n,t,e){let i=new hr,s=new Kt,r=new Kt,o=new pe,a=new Xo({depthPacking:cp}),l=new qo,c={},h=e.maxTextureSize,u={[kn]:Oe,[Oe]:kn,[sn]:sn},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Ex,fragmentShader:Sx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let v=new mn;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ue(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let d=this.type;this.render=function(C,I,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;let y=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(zn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let k=d!==Mn&&this.type===Mn,X=d===Mn&&this.type!==Mn;for(let J=0,G=C.length;J<G;J++){let tt=C[J],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let st=z.getFrameExtents();if(s.multiply(st),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||k===!0||X===!0){let xt=this.type!==Mn?{minFilter:nn,magFilter:nn}:{};z.map!==null&&z.map.dispose(),z.map=new yn(s.x,s.y,xt),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let ut=z.getViewportCount();for(let xt=0;xt<ut;xt++){let Nt=z.getViewport(xt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),Y.viewport(o),z.updateMatrices(tt,xt),i=z.getFrustum(),w(I,P,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===Mn&&S(z,P),z.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(y,b,R)};function S(C,I){let P=t.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new yn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,P,p,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,P,m,x,null)}function E(C,I,P,y){let b=null,R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let Y=b.uuid,k=I.uuid,X=c[Y];X===void 0&&(X={},c[Y]=X);let J=X[k];J===void 0&&(J=b.clone(),X[k]=J,I.addEventListener("dispose",T)),b=J}if(b.visible=I.visible,b.wireframe=I.wireframe,y===Mn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let Y=n.properties.get(b);Y.light=P}return b}function w(C,I,P,y,b){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Mn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let k=t.update(C),X=C.material;if(Array.isArray(X)){let J=k.groups;for(let G=0,tt=J.length;G<tt;G++){let z=J[G],st=X[z.materialIndex];if(st&&st.visible){let ut=E(C,st,y,b);C.onBeforeShadow(n,C,I,P,k,ut,z),n.renderBufferDirect(P,null,k,ut,C,z),C.onAfterShadow(n,C,I,P,k,ut,z)}}}else if(X.visible){let J=E(C,X,y,b);C.onBeforeShadow(n,C,I,P,k,J,null),n.renderBufferDirect(P,null,k,J,C,null),C.onAfterShadow(n,C,I,P,k,J,null)}}let Y=C.children;for(let k=0,X=Y.length;k<X;k++)w(Y[k],I,P,y,b)}function T(C){C.target.removeEventListener("dispose",T);for(let P in c){let y=c[P],b=C.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var Tx={[ia]:sa,[ra]:la,[oa]:ca,[Di]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:Di};function Cx(n,t){function e(){let D=!1,at=new pe,V=null,$=new pe(0,0,0,0);return{setMask:function(ct){V!==ct&&!D&&(n.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){D=ct},setClear:function(ct,lt,Rt,ue,Ae){Ae===!0&&(ct*=ue,lt*=ue,Rt*=ue),at.set(ct,lt,Rt,ue),$.equals(at)===!1&&(n.clearColor(ct,lt,Rt,ue),$.copy(at))},reset:function(){D=!1,V=null,$.set(-1,0,0,0)}}}function i(){let D=!1,at=!1,V=null,$=null,ct=null;return{setReversed:function(lt){if(at!==lt){let Rt=t.get("EXT_clip_control");lt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),at=lt;let ue=ct;ct=null,this.setClear(ue)}},getReversed:function(){return at},setTest:function(lt){lt?rt(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(lt){V!==lt&&!D&&(n.depthMask(lt),V=lt)},setFunc:function(lt){if(at&&(lt=Tx[lt]),$!==lt){switch(lt){case ia:n.depthFunc(n.NEVER);break;case sa:n.depthFunc(n.ALWAYS);break;case ra:n.depthFunc(n.LESS);break;case Di:n.depthFunc(n.LEQUAL);break;case oa:n.depthFunc(n.EQUAL);break;case aa:n.depthFunc(n.GEQUAL);break;case la:n.depthFunc(n.GREATER);break;case ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ct!==lt&&(at&&(lt=1-lt),n.clearDepth(lt),ct=lt)},reset:function(){D=!1,V=null,$=null,ct=null,at=!1}}}function s(){let D=!1,at=null,V=null,$=null,ct=null,lt=null,Rt=null,ue=null,Ae=null;return{setTest:function(Qt){D||(Qt?rt(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!D&&(n.stencilMask(Qt),at=Qt)},setFunc:function(Qt,ln,Dn){(V!==Qt||$!==ln||ct!==Dn)&&(n.stencilFunc(Qt,ln,Dn),V=Qt,$=ln,ct=Dn)},setOp:function(Qt,ln,Dn){(lt!==Qt||Rt!==ln||ue!==Dn)&&(n.stencilOp(Qt,ln,Dn),lt=Qt,Rt=ln,ue=Dn)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ae!==Qt&&(n.clearStencil(Qt),Ae=Qt)},reset:function(){D=!1,at=null,V=null,$=null,ct=null,lt=null,Rt=null,ue=null,Ae=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,m=[],v=null,x=!1,f=null,d=null,S=null,E=null,w=null,T=null,C=null,I=new Ot(0,0,0),P=0,y=!1,b=null,R=null,Y=null,k=null,X=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=tt>=2);let st=null,ut={},xt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),ee=new pe().fromArray(xt),q=new pe().fromArray(Nt);function et(D,at,V,$){let ct=new Uint8Array(4),lt=n.createTexture();n.bindTexture(D,lt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<V;Rt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(at+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return lt}let gt={};gt[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(n.DEPTH_TEST),o.setFunc(Di),Vt(!1),Bt(xc),rt(n.CULL_FACE),A(zn);function rt(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Mt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Yt(D,at){return u[D]!==at?(n.bindFramebuffer(D,at),u[D]=at,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=at),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=at),!0):!1}function St(D,at){let V=m,$=!1;if(D){V=p.get(at),V===void 0&&(V=[],p.set(at,V));let ct=D.textures;if(V.length!==ct.length||V[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Rt=ct.length;lt<Rt;lt++)V[lt]=n.COLOR_ATTACHMENT0+lt;V.length=ct.length,$=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,$=!0);$&&n.drawBuffers(V)}function me(D){return v!==D?(n.useProgram(D),v=D,!0):!1}let le={[ci]:n.FUNC_ADD,[Od]:n.FUNC_SUBTRACT,[Fd]:n.FUNC_REVERSE_SUBTRACT};le[Bd]=n.MIN,le[kd]=n.MAX;let Ft={[Vd]:n.ZERO,[zd]:n.ONE,[Hd]:n.SRC_COLOR,[Io]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[qd]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[Do]:n.ONE_MINUS_SRC_ALPHA,[Yd]:n.ONE_MINUS_DST_COLOR,[Xd]:n.ONE_MINUS_DST_ALPHA,[$d]:n.CONSTANT_COLOR,[Zd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function A(D,at,V,$,ct,lt,Rt,ue,Ae,Qt){if(D===zn){x===!0&&(Mt(n.BLEND),x=!1);return}if(x===!1&&(rt(n.BLEND),x=!0),D!==Ud){if(D!==f||Qt!==y){if((d!==ci||w!==ci)&&(n.blendEquation(n.FUNC_ADD),d=ci,w=ci),Qt)switch(D){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case br:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case br:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,T=null,C=null,I.set(0,0,0),P=0,f=D,y=Qt}return}ct=ct||at,lt=lt||V,Rt=Rt||$,(at!==d||ct!==w)&&(n.blendEquationSeparate(le[at],le[ct]),d=at,w=ct),(V!==S||$!==E||lt!==T||Rt!==C)&&(n.blendFuncSeparate(Ft[V],Ft[$],Ft[lt],Ft[Rt]),S=V,E=$,T=lt,C=Rt),(ue.equals(I)===!1||Ae!==P)&&(n.blendColor(ue.r,ue.g,ue.b,Ae),I.copy(ue),P=Ae),f=D,y=!1}function je(D,at){D.side===sn?Mt(n.CULL_FACE):rt(n.CULL_FACE);let V=D.side===Oe;at&&(V=!V),Vt(V),D.blending===Ii&&D.transparent===!1?A(zn):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function Bt(D){D!==Dd?(rt(n.CULL_FACE),D!==R&&(D===xc?n.cullFace(n.BACK):D===Ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),R=D}function bt(D){D!==Y&&(G&&n.lineWidth(D),Y=D)}function se(D,at,V){D?(rt(n.POLYGON_OFFSET_FILL),(k!==at||X!==V)&&(n.polygonOffset(at,V),k=at,X=V)):Mt(n.POLYGON_OFFSET_FILL)}function _t(D){D?rt(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function M(D){D===void 0&&(D=n.TEXTURE0+J-1),st!==D&&(n.activeTexture(D),st=D)}function g(D,at,V){V===void 0&&(st===null?V=n.TEXTURE0+J-1:V=st);let $=ut[V];$===void 0&&($={type:void 0,texture:void 0},ut[V]=$),($.type!==D||$.texture!==at)&&(st!==V&&(n.activeTexture(V),st=V),n.bindTexture(D,at||gt[D]),$.type=D,$.texture=at)}function O(){let D=ut[st];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(D){ee.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function ft(D){q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function kt(D,at){let V=c.get(at);V===void 0&&(V=new WeakMap,c.set(at,V));let $=V.get(D);$===void 0&&($=n.getUniformBlockIndex(at,D.name),V.set(D,$))}function It(D,at){let $=c.get(at).get(D);l.get(at)!==$&&(n.uniformBlockBinding(at,$,D.__bindingPointIndex),l.set(at,$))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},st=null,ut={},u={},p=new WeakMap,m=[],v=null,x=!1,f=null,d=null,S=null,E=null,w=null,T=null,C=null,I=new Ot(0,0,0),P=0,y=!1,b=null,R=null,Y=null,k=null,X=null,ee.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Mt,bindFramebuffer:Yt,drawBuffers:St,useProgram:me,setBlending:A,setMaterial:je,setFlipSided:Vt,setCullFace:Bt,setLineWidth:bt,setPolygonOffset:se,setScissorTest:_t,activeTexture:M,bindTexture:g,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:pt,texImage3D:Et,updateUBOMapping:kt,uniformBlockBinding:It,texStorage2D:zt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Tt,viewport:ft,reset:ne}}function Px(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function v(M,g){return m?new OffscreenCanvas(M,g):xs("canvas")}function x(M,g,O){let K=1,Z=_t(M);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!="undefined"&&M instanceof VideoFrame){let W=Math.floor(K*Z.width),vt=Math.floor(K*Z.height);u===void 0&&(u=v(W,vt));let ot=g?v(W,vt):u;return ot.width=W,ot.height=vt,ot.getContext("2d").drawImage(M,0,0,W,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+W+"x"+vt+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function f(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,g,O,K,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W=g;if(g===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),g===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),g===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),g===n.RGBA){let vt=Z?tr:Gt.getTransfer(K);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=vt===te?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function w(M,g){let O;return M?g===null||g===fi||g===Ts?O=n.DEPTH24_STENCIL8:g===Sn?O=n.DEPTH32F_STENCIL8:g===Ss&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===fi||g===Ts?O=n.DEPTH_COMPONENT24:g===Sn?O=n.DEPTH_COMPONENT32F:g===Ss&&(O=n.DEPTH_COMPONENT16),O}function T(M,g){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==nn&&M.minFilter!==pn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){let g=M.target;g.removeEventListener("dispose",C),P(g),g.isVideoTexture&&h.delete(g)}function I(M){let g=M.target;g.removeEventListener("dispose",I),b(g)}function P(M){let g=i.get(M);if(g.__webglInit===void 0)return;let O=M.source,K=p.get(O);if(K){let Z=K[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(M),Object.keys(K).length===0&&p.delete(O)}i.remove(M)}function y(M){let g=i.get(M);n.deleteTexture(g.__webglTexture);let O=M.source,K=p.get(O);delete K[g.__cacheKey],o.memory.textures--}function b(M){let g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let Z=0;Z<g.__webglFramebuffer[K].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[K][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)n.deleteFramebuffer(g.__webglFramebuffer[K]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let O=M.textures;for(let K=0,Z=O.length;K<Z;K++){let W=i.get(O[K]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(M)}let R=0;function Y(){R=0}function k(){let M=R;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),R+=1,M}function X(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function J(M,g){let O=i.get(M);if(M.isVideoTexture&&bt(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){let K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,M,g);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function G(M,g){let O=i.get(M);if(M.version>0&&O.__version!==M.version){q(O,M,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function tt(M,g){let O=i.get(M);if(M.version>0&&O.__version!==M.version){q(O,M,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function z(M,g){let O=i.get(M);if(M.version>0&&O.__version!==M.version){et(O,M,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}let st={[vs]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},ut={[nn]:n.NEAREST,[ap]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[pa]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},xt={[up]:n.NEVER,[vp]:n.ALWAYS,[dp]:n.LESS,[Oc]:n.LEQUAL,[pp]:n.EQUAL,[gp]:n.GEQUAL,[fp]:n.GREATER,[mp]:n.NOTEQUAL};function Nt(M,g){if(g.type===Sn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===pn||g.magFilter===pa||g.magFilter===wr||g.magFilter===pi||g.minFilter===pn||g.minFilter===pa||g.minFilter===wr||g.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,st[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,st[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,st[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ut[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ut[g.minFilter]),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,xt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===nn||g.minFilter!==wr&&g.minFilter!==pi||g.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ee(M,g){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",C));let K=g.source,Z=p.get(K);Z===void 0&&(Z={},p.set(K,Z));let W=X(g);if(W!==M.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[W].usedTimes++;let vt=Z[M.__cacheKey];vt!==void 0&&(Z[M.__cacheKey].usedTimes--,vt.usedTimes===0&&y(g)),M.__cacheKey=W,M.__webglTexture=Z[W].texture}return O}function q(M,g,O){let K=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=n.TEXTURE_3D);let Z=ee(M,g),W=g.source;e.bindTexture(K,M.__webglTexture,n.TEXTURE0+O);let vt=i.get(W);if(W.version!==vt.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);let ot=Gt.getPrimaries(Gt.workingColorSpace),dt=g.colorSpace===Gn?null:Gt.getPrimaries(g.colorSpace),zt=g.colorSpace===Gn||ot===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let Q=x(g.image,!1,s.maxTextureSize);Q=se(g,Q);let pt=r.convert(g.format,g.colorSpace),Et=r.convert(g.type),Tt=E(g.internalFormat,pt,Et,g.colorSpace,g.isVideoTexture);Nt(K,g);let ft,kt=g.mipmaps,It=g.isVideoTexture!==!0,ne=vt.__version===void 0||Z===!0,D=W.dataReady,at=T(g,Q);if(g.isDepthTexture)Tt=w(g.format===Cs,g.type),ne&&(It?e.texStorage2D(n.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Tt,Q.width,Q.height,0,pt,Et,null));else if(g.isDataTexture)if(kt.length>0){It&&ne&&e.texStorage2D(n.TEXTURE_2D,at,Tt,kt[0].width,kt[0].height);for(let V=0,$=kt.length;V<$;V++)ft=kt[V],It?D&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft.width,ft.height,pt,Et,ft.data):e.texImage2D(n.TEXTURE_2D,V,Tt,ft.width,ft.height,0,pt,Et,ft.data);g.generateMipmaps=!1}else It?(ne&&e.texStorage2D(n.TEXTURE_2D,at,Tt,Q.width,Q.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Et,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,Q.width,Q.height,0,pt,Et,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Tt,kt[0].width,kt[0].height,Q.depth);for(let V=0,$=kt.length;V<$;V++)if(ft=kt[V],g.format!==rn)if(pt!==null)if(It){if(D)if(g.layerUpdates.size>0){let ct=Hc(ft.width,ft.height,g.format,g.type);for(let lt of g.layerUpdates){let Rt=ft.data.subarray(lt*ct/ft.data.BYTES_PER_ELEMENT,(lt+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,lt,ft.width,ft.height,1,pt,Rt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,Q.depth,pt,ft.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Tt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ft.width,ft.height,Q.depth,pt,Et,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,Tt,ft.width,ft.height,Q.depth,0,pt,Et,ft.data)}else{It&&ne&&e.texStorage2D(n.TEXTURE_2D,at,Tt,kt[0].width,kt[0].height);for(let V=0,$=kt.length;V<$;V++)ft=kt[V],g.format!==rn?pt!==null?It?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ft.width,ft.height,pt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,V,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?D&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft.width,ft.height,pt,Et,ft.data):e.texImage2D(n.TEXTURE_2D,V,Tt,ft.width,ft.height,0,pt,Et,ft.data)}else if(g.isDataArrayTexture)if(It){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Tt,Q.width,Q.height,Q.depth),D)if(g.layerUpdates.size>0){let V=Hc(Q.width,Q.height,g.format,g.type);for(let $ of g.layerUpdates){let ct=Q.data.subarray($*V/Q.data.BYTES_PER_ELEMENT,($+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,pt,Et,ct)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Et,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,pt,Et,Q.data);else if(g.isData3DTexture)It?(ne&&e.texStorage3D(n.TEXTURE_3D,at,Tt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Et,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,pt,Et,Q.data);else if(g.isFramebufferTexture){if(ne)if(It)e.texStorage2D(n.TEXTURE_2D,at,Tt,Q.width,Q.height);else{let V=Q.width,$=Q.height;for(let ct=0;ct<at;ct++)e.texImage2D(n.TEXTURE_2D,ct,Tt,V,$,0,pt,Et,null),V>>=1,$>>=1}}else if(kt.length>0){if(It&&ne){let V=_t(kt[0]);e.texStorage2D(n.TEXTURE_2D,at,Tt,V.width,V.height)}for(let V=0,$=kt.length;V<$;V++)ft=kt[V],It?D&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,pt,Et,ft):e.texImage2D(n.TEXTURE_2D,V,Tt,pt,Et,ft);g.generateMipmaps=!1}else if(It){if(ne){let V=_t(Q);e.texStorage2D(n.TEXTURE_2D,at,Tt,V.width,V.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Et,Q)}else e.texImage2D(n.TEXTURE_2D,0,Tt,pt,Et,Q);f(g)&&d(K),vt.__version=W.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function et(M,g,O){if(g.image.length!==6)return;let K=ee(M,g),Z=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);let W=i.get(Z);if(Z.version!==W.__version||K===!0){e.activeTexture(n.TEXTURE0+O);let vt=Gt.getPrimaries(Gt.workingColorSpace),ot=g.colorSpace===Gn?null:Gt.getPrimaries(g.colorSpace),dt=g.colorSpace===Gn||vt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let zt=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!zt&&!Q?pt[$]=x(g.image[$],!0,s.maxCubemapSize):pt[$]=Q?g.image[$].image:g.image[$],pt[$]=se(g,pt[$]);let Et=pt[0],Tt=r.convert(g.format,g.colorSpace),ft=r.convert(g.type),kt=E(g.internalFormat,Tt,ft,g.colorSpace),It=g.isVideoTexture!==!0,ne=W.__version===void 0||K===!0,D=Z.dataReady,at=T(g,Et);Nt(n.TEXTURE_CUBE_MAP,g);let V;if(zt){It&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,kt,Et.width,Et.height);for(let $=0;$<6;$++){V=pt[$].mipmaps;for(let ct=0;ct<V.length;ct++){let lt=V[ct];g.format!==rn?Tt!==null?It?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,Tt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,kt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,lt.width,lt.height,Tt,ft,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,kt,lt.width,lt.height,0,Tt,ft,lt.data)}}}else{if(V=g.mipmaps,It&&ne){V.length>0&&at++;let $=_t(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,kt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){It?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Tt,ft,pt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,pt[$].width,pt[$].height,0,Tt,ft,pt[$].data);for(let ct=0;ct<V.length;ct++){let Rt=V[ct].image[$].image;It?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Rt.width,Rt.height,Tt,ft,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,kt,Rt.width,Rt.height,0,Tt,ft,Rt.data)}}else{It?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Tt,ft,pt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,Tt,ft,pt[$]);for(let ct=0;ct<V.length;ct++){let lt=V[ct];It?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Tt,ft,lt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,kt,Tt,ft,lt.image[$])}}}f(g)&&d(n.TEXTURE_CUBE_MAP),W.__version=Z.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function gt(M,g,O,K,Z,W){let vt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),dt=E(O.internalFormat,vt,ot,O.colorSpace),zt=i.get(g),Q=i.get(O);if(Q.__renderTarget=g,!zt.__hasExternalTextures){let pt=Math.max(1,g.width>>W),Et=Math.max(1,g.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,W,dt,pt,Et,g.depth,0,vt,ot,null):e.texImage2D(Z,W,dt,pt,Et,0,vt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),Bt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Z,Q.__webglTexture,0,Vt(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Z,Q.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(M,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer){let K=g.depthTexture,Z=K&&K.isDepthTexture?K.type:null,W=w(g.stencilBuffer,Z),vt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Vt(g);Bt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,W,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,M)}else{let K=g.textures;for(let Z=0;Z<K.length;Z++){let W=K[Z],vt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),dt=E(W.internalFormat,vt,ot,W.colorSpace),zt=Vt(g);O&&Bt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,dt,g.width,g.height):Bt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,dt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,dt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Mt(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(g.depthTexture);K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);let Z=K.__webglTexture,W=Vt(g);if(g.depthTexture.format===_s)Bt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Cs)Bt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Yt(M){let g=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let K=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=K}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Mt(g.__webglFramebuffer,M)}else if(O){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=n.createRenderbuffer(),rt(g.__webglDepthbuffer[K],M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),rt(g.__webglDepthbuffer,M,!1);else{let K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(M,g,O){let K=i.get(M);g!==void 0&&gt(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Yt(M)}function me(M){let g=M.texture,O=i.get(M),K=i.get(g);M.addEventListener("dispose",I);let Z=M.textures,W=M.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=g.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let dt=0;dt<g.mipmaps.length;dt++)O.__webglFramebuffer[ot][dt]=n.createFramebuffer()}else O.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<g.mipmaps.length;ot++)O.__webglFramebuffer[ot]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(vt)for(let ot=0,dt=Z.length;ot<dt;ot++){let zt=i.get(Z[ot]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Bt(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){let dt=Z[ot];O.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);let zt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),pt=E(dt.internalFormat,zt,Q,dt.colorSpace,M.isXRRenderTarget===!0),Et=Vt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,pt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,g);for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)gt(O.__webglFramebuffer[ot][dt],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else gt(O.__webglFramebuffer[ot],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);f(g)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,dt=Z.length;ot<dt;ot++){let zt=Z[ot],Q=i.get(zt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Nt(n.TEXTURE_2D,zt),gt(O.__webglFramebuffer,M,zt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),f(zt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Nt(ot,g),g.mipmaps&&g.mipmaps.length>0)for(let dt=0;dt<g.mipmaps.length;dt++)gt(O.__webglFramebuffer[dt],M,g,n.COLOR_ATTACHMENT0,ot,dt);else gt(O.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,ot,0);f(g)&&d(ot),e.unbindTexture()}M.depthBuffer&&Yt(M)}function le(M){let g=M.textures;for(let O=0,K=g.length;O<K;O++){let Z=g[O];if(f(Z)){let W=S(M),vt=i.get(Z).__webglTexture;e.bindTexture(W,vt),d(W),e.unbindTexture()}}}let Ft=[],A=[];function je(M){if(M.samples>0){if(Bt(M)===!1){let g=M.textures,O=M.width,K=M.height,Z=n.COLOR_BUFFER_BIT,W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(M),ot=g.length>1;if(ot)for(let dt=0;dt<g.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<g.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let zt=i.get(g[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,Z,n.NEAREST),l===!0&&(Ft.length=0,A.length=0,Ft.push(n.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ft.push(W),A.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<g.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let zt=i.get(g[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let g=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Vt(M){return Math.min(s.maxSamples,M.samples)}function Bt(M){let g=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function bt(M){let g=o.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function se(M,g){let O=M.colorSpace,K=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==Li&&O!==Gn&&(Gt.getTransfer(O)===te?(K!==rn||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function _t(M){return typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame!="undefined"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=St,this.setupRenderTarget=me,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Bt}function Rx(n,t){function e(i,s=Gn){let r,o=Gt.getTransfer(s);if(i===En)return n.UNSIGNED_BYTE;if(i===ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sc)return n.BYTE;if(i===Ac)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===fa)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===As)return n.HALF_FLOAT;if(i===Cc)return n.ALPHA;if(i===Pc)return n.RGB;if(i===rn)return n.RGBA;if(i===Rc)return n.LUMINANCE;if(i===Ic)return n.LUMINANCE_ALPHA;if(i===_s)return n.DEPTH_COMPONENT;if(i===Cs)return n.DEPTH_STENCIL;if(i===Dc)return n.RED;if(i===va)return n.RED_INTEGER;if(i===Lc)return n.RG;if(i===_a)return n.RG_INTEGER;if(i===xa)return n.RGBA_INTEGER;if(i===Mr||i===Er||i===Sr||i===Ar)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ba||i===ya||i===wa||i===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===Sa||i===Aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===Sa)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ta||i===Ca||i===Pa||i===Ra||i===Ia||i===Da||i===La||i===Na||i===Ua||i===Oa||i===Fa||i===Ba||i===ka||i===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ta)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ia)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===La)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ba)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ka)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tr||i===za||i===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Tr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nc||i===Ga||i===Wa||i===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new gn({vertexShader:Ix,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends $t{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,v=null,x=new eh,f=e.getContextAttributes(),d=null,S=null,E=[],w=[],T=new Kt,C=null,I=new Pe;I.viewport=new pe;let P=new Pe;P.viewport=new pe;let y=[I,P],b=new ea,R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=E[q];return et===void 0&&(et=new Ms,E[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=E[q];return et===void 0&&(et=new Ms,E[q]=et),et.getGripSpace()},this.getHand=function(q){let et=E[q];return et===void 0&&(et=new Ms,E[q]=et),et.getHandSpace()};function k(q){let et=w.indexOf(q.inputSource);if(et===-1)return;let gt=E[et];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",J);for(let q=0;q<E.length;q++){let et=w[q];et!==null&&(w[q]=null,E[q].disconnect(et))}R=null,Y=null,x.reset(),t.setRenderTarget(d),m=null,p=null,u=null,s=null,S=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=function(q){return lo(this,null,function*(){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&(yield e.makeXRCompatible()),C=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,rt=null,Mt=null;f.depth&&(Mt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=f.stencil?Cs:_s,rt=f.stencil?Ts:fi);let Yt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Yt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new yn(p.textureWidth,p.textureHeight,{format:rn,type:En,depthTexture:new dr(p.textureWidth,p.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let gt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new yn(m.framebufferWidth,m.framebufferHeight,{format:rn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield s.requestReferenceSpace(a),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(q){for(let et=0;et<q.removed.length;et++){let gt=q.removed[et],rt=w.indexOf(gt);rt>=0&&(w[rt]=null,E[rt].disconnect(gt))}for(let et=0;et<q.added.length;et++){let gt=q.added[et],rt=w.indexOf(gt);if(rt===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=w.length){w.push(gt),rt=Yt;break}else if(w[Yt]===null){w[Yt]=gt,rt=Yt;break}if(rt===-1)break}let Mt=E[rt];Mt&&Mt.connect(gt)}}let G=new L,tt=new L;function z(q,et,gt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(gt.matrixWorld);let rt=G.distanceTo(tt),Mt=et.projectionMatrix.elements,Yt=gt.projectionMatrix.elements,St=Mt[14]/(Mt[10]-1),me=Mt[14]/(Mt[10]+1),le=(Mt[9]+1)/Mt[5],Ft=(Mt[9]-1)/Mt[5],A=(Mt[8]-1)/Mt[0],je=(Yt[8]+1)/Yt[0],Vt=St*A,Bt=St*je,bt=rt/(-A+je),se=bt*-A;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let _t=St+bt,M=me+bt,g=Vt-se,O=Bt+(rt-se),K=le*me/M*_t,Z=Ft*me/M*_t;q.projectionMatrix.makePerspective(g,O,K,Z,_t,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,gt=q.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),b.near=P.near=I.near=et,b.far=P.far=I.far=gt,(R!==b.near||Y!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,Y=b.far),I.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,b.layers.mask=I.layers.mask|P.layers.mask;let rt=q.parent,Mt=b.cameras;st(b,rt);for(let Yt=0;Yt<Mt.length;Yt++)st(Mt[Yt],rt);Mt.length===2?z(b,I,P):b.projectionMatrix.copy(I.projectionMatrix),ut(q,b,rt)};function ut(q,et,gt){gt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Uo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let xt=null;function Nt(q,et){if(h=et.getViewerPose(c||o),v=et,h!==null){let gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let rt=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let St=0;St<gt.length;St++){let me=gt[St],le=null;if(m!==null)le=m.getViewport(me);else{let A=u.getViewSubImage(p,me);le=A.viewport,St===0&&(t.setRenderTargetTextures(S,A.colorTexture,A.depthStencilTexture),t.setRenderTarget(S))}let Ft=y[St];Ft===void 0&&(Ft=new Pe,Ft.layers.enable(St),Ft.viewport=new pe,y[St]=Ft),Ft.matrix.fromArray(me.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(me.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(le.x,le.y,le.width,le.height),St===0&&(b.matrix.copy(Ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(Ft)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){let St=u.getDepthInformation(gt[0]);St&&St.isValid&&St.texture&&x.init(t,St,s.renderState)}}for(let gt=0;gt<E.length;gt++){let rt=w[gt],Mt=E[gt];rt!==null&&Mt!==void 0&&Mt.update(rt,et,c||o)}xt&&xt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),v=null}let ee=new Kp;ee.setAnimationLoop(Nt),this.setAnimationLoop=function(q){xt=q},this.dispose=function(){}}},Gi=new fn,Lx=new ce;function Nx(n,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,kc(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,S,E,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,w)):d.isMeshMatcapMaterial?(r(f,d),v(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),x(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,S,E):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Oe&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Oe&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let S=t.get(d),E=S.envMap,w=S.envMapRotation;E&&(f.envMap.value=E,Gi.copy(w),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),f.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Gi)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,S,E){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*S,f.scale.value=E*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,S){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,d){d.matcap&&(f.matcap.value=d.matcap)}function x(f,d){let S=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ux(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){let w=E.program;i.uniformBlockBinding(S,w)}function c(S,E){let w=s[S.id];w===void 0&&(v(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",f));let T=E.program;i.updateUBOMapping(S,T);let C=t.render.frame;r[S.id]!==C&&(p(S),r[S.id]=C)}function h(S){let E=u();S.__bindingPointIndex=E;let w=n.createBuffer(),T=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,T,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let E=s[S.id],w=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,I=w.length;C<I;C++){let P=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,b=P.length;y<b;y++){let R=P[y];if(m(R,C,y,T)===!0){let Y=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],X=0;for(let J=0;J<k.length;J++){let G=k[J],tt=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,Y+X,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,E,w,T){let C=S.value,I=E+"_"+w;if(T[I]===void 0)return typeof C=="number"||typeof C=="boolean"?T[I]=C:T[I]=C.clone(),!0;{let P=T[I];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return T[I]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(S){let E=S.uniforms,w=0,T=16;for(let I=0,P=E.length;I<P;I++){let y=Array.isArray(E[I])?E[I]:[E[I]];for(let b=0,R=y.length;b<R;b++){let Y=y[b],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,J=k.length;X<J;X++){let G=k[X],tt=x(G),z=w%T,st=z%tt.boundary,ut=z+st;w+=st,ut!==0&&T-ut<tt.storage&&(w+=T-ut),Y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=tt.storage}}}let C=w%T;return C>0&&(w+=T-C),S.__size=w,S.__cache={},this}function x(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function f(S){let E=S.target;E.removeEventListener("dispose",f);let w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Za=class{constructor(t={}){let{canvas:e=_p(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let v=new Uint32Array(4),x=new Int32Array(4),f=null,d=null,S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,T=!1;this._outputColorSpace=Ee;let C=0,I=0,P=null,y=-1,b=null,R=new pe,Y=new pe,k=null,X=new Ot(0),J=0,G=e.width,tt=e.height,z=1,st=null,ut=null,xt=new pe(0,0,G,tt),Nt=new pe(0,0,G,tt),ee=!1,q=new hr,et=!1,gt=!1,rt=new ce,Mt=new ce,Yt=new L,St=new pe,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function Ft(){return P===null?z:1}let A=i;function je(_,N){return e.getContext(_,N)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${na}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),A===null){let N="webgl2";if(A=je(N,_),A===null)throw je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Vt,Bt,bt,se,_t,M,g,O,K,Z,W,vt,ot,dt,zt,Q,pt,Et,Tt,ft,kt,It,ne,D;function at(){Vt=new Q_(A),Vt.init(),It=new Rx(A,Vt),Bt=new q_(A,Vt,t,It),bt=new Cx(A,Vt),Bt.reverseDepthBuffer&&p&&bt.buffers.depth.setReversed(!0),se=new n0(A),_t=new mx,M=new Px(A,Vt,bt,_t,Bt,It,se),g=new K_(w),O=new j_(w),K=new lg(A),ne=new W_(A,K),Z=new t0(A,K,se,ne),W=new s0(A,Z,K,se),Tt=new i0(A,Bt,M),Q=new Y_(_t),vt=new fx(w,g,O,Vt,Bt,ne,Q),ot=new Nx(w,_t),dt=new vx,zt=new Mx(Vt),Et=new G_(w,g,O,bt,W,m,l),pt=new Ax(w,W,Bt),D=new Ux(A,se,Bt,bt),ft=new X_(A,Vt,se),kt=new e0(A,Vt,se),se.programs=vt.programs,w.capabilities=Bt,w.extensions=Vt,w.properties=_t,w.renderLists=dt,w.shadowMap=pt,w.state=bt,w.info=se}at();let V=new nh(w,A);this.xr=V,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=Vt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Vt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(_){_!==void 0&&(z=_,this.setSize(G,tt,!1))},this.getSize=function(_){return _.set(G,tt)},this.setSize=function(_,N,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=_,tt=N,e.width=Math.floor(_*z),e.height=Math.floor(N*z),F===!0&&(e.style.width=_+"px",e.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(G*z,tt*z).floor()},this.setDrawingBufferSize=function(_,N,F){G=_,tt=N,z=F,e.width=Math.floor(_*F),e.height=Math.floor(N*F),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(xt)},this.setViewport=function(_,N,F,B){_.isVector4?xt.set(_.x,_.y,_.z,_.w):xt.set(_,N,F,B),bt.viewport(R.copy(xt).multiplyScalar(z).round())},this.getScissor=function(_){return _.copy(Nt)},this.setScissor=function(_,N,F,B){_.isVector4?Nt.set(_.x,_.y,_.z,_.w):Nt.set(_,N,F,B),bt.scissor(Y.copy(Nt).multiplyScalar(z).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(_){bt.setScissorTest(ee=_)},this.setOpaqueSort=function(_){st=_},this.setTransparentSort=function(_){ut=_},this.getClearColor=function(_){return _.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(_=!0,N=!0,F=!0){let B=0;if(_){let U=!1;if(P!==null){let j=P.texture.format;U=j===xa||j===_a||j===va}if(U){let j=P.texture.type,it=j===En||j===fi||j===Ss||j===Ts||j===ma||j===ga,ht=Et.getClearColor(),mt=Et.getClearAlpha(),Ct=ht.r,At=ht.g,yt=ht.b;it?(v[0]=Ct,v[1]=At,v[2]=yt,v[3]=mt,A.clearBufferuiv(A.COLOR,0,v)):(x[0]=Ct,x[1]=At,x[2]=yt,x[3]=mt,A.clearBufferiv(A.COLOR,0,x))}else B|=A.COLOR_BUFFER_BIT}N&&(B|=A.DEPTH_BUFFER_BIT),F&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Et.dispose(),dt.dispose(),zt.dispose(),_t.dispose(),g.dispose(),O.dispose(),W.dispose(),ne.dispose(),D.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",id),V.removeEventListener("sessionend",sd),Mi.stop()};function $(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let _=se.autoReset,N=pt.enabled,F=pt.autoUpdate,B=pt.needsUpdate,U=pt.type;at(),se.autoReset=_,pt.enabled=N,pt.autoUpdate=F,pt.needsUpdate=B,pt.type=U}function lt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Rt(_){let N=_.target;N.removeEventListener("dispose",Rt),ue(N)}function ue(_){Ae(_),_t.remove(_)}function Ae(_){let N=_t.get(_).programs;N!==void 0&&(N.forEach(function(F){vt.releaseProgram(F)}),_.isShaderMaterial&&vt.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,F,B,U,j){N===null&&(N=me);let it=U.isMesh&&U.matrixWorld.determinant()<0,ht=Mm(_,N,F,B,U);bt.setMaterial(B,it);let mt=F.index,Ct=1;if(B.wireframe===!0){if(mt=Z.getWireframeAttribute(F),mt===void 0)return;Ct=2}let At=F.drawRange,yt=F.attributes.position,Ht=At.start*Ct,Zt=(At.start+At.count)*Ct;j!==null&&(Ht=Math.max(Ht,j.start*Ct),Zt=Math.min(Zt,(j.start+j.count)*Ct)),mt!==null?(Ht=Math.max(Ht,0),Zt=Math.min(Zt,mt.count)):yt!=null&&(Ht=Math.max(Ht,0),Zt=Math.min(Zt,yt.count));let ge=Zt-Ht;if(ge<0||ge===1/0)return;ne.setup(U,B,ht,F,mt);let de,Xt=ft;if(mt!==null&&(de=K.get(mt),Xt=kt,Xt.setIndex(de)),U.isMesh)B.wireframe===!0?(bt.setLineWidth(B.wireframeLinewidth*Ft()),Xt.setMode(A.LINES)):Xt.setMode(A.TRIANGLES);else if(U.isLine){let wt=B.linewidth;wt===void 0&&(wt=1),bt.setLineWidth(wt*Ft()),U.isLineSegments?Xt.setMode(A.LINES):U.isLineLoop?Xt.setMode(A.LINE_LOOP):Xt.setMode(A.LINE_STRIP)}else U.isPoints?Xt.setMode(A.POINTS):U.isSprite&&Xt.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let wt=U._multiDrawStarts,Me=U._multiDrawCounts,Jt=U._multiDrawCount,cn=mt?K.get(mt).bytesPerElement:1,is=_t.get(B).currentProgram.getUniforms();for(let Xe=0;Xe<Jt;Xe++)is.setValue(A,"_gl_DrawID",Xe),Xt.render(wt[Xe]/cn,Me[Xe])}else if(U.isInstancedMesh)Xt.renderInstances(Ht,ge,U.count);else if(F.isInstancedBufferGeometry){let wt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Me=Math.min(F.instanceCount,wt);Xt.renderInstances(Ht,ge,Me)}else Xt.render(Ht,ge)};function Qt(_,N,F){_.transparent===!0&&_.side===sn&&_.forceSinglePass===!1?(_.side=Oe,_.needsUpdate=!0,ao(_,N,F),_.side=kn,_.needsUpdate=!0,ao(_,N,F),_.side=sn):ao(_,N,F)}this.compile=function(_,N,F=null){F===null&&(F=_),d=zt.get(F),d.init(N),E.push(d),F.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),_!==F&&_.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let B=new Set;return _.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let it=0;it<j.length;it++){let ht=j[it];Qt(ht,F,U),B.add(ht)}else Qt(j,F,U),B.add(j)}),d=E.pop(),B},this.compileAsync=function(_,N,F=null){let B=this.compile(_,N,F);return new Promise(U=>{function j(){if(B.forEach(function(it){_t.get(it).currentProgram.isReady()&&B.delete(it)}),B.size===0){U(_);return}setTimeout(j,10)}Vt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let ln=null;function Dn(_){ln&&ln(_)}function id(){Mi.stop()}function sd(){Mi.start()}let Mi=new Kp;Mi.setAnimationLoop(Dn),typeof self!="undefined"&&Mi.setContext(self),this.setAnimationLoop=function(_){ln=_,V.setAnimationLoop(_),_===null?Mi.stop():Mi.start()},V.addEventListener("sessionstart",id),V.addEventListener("sessionend",sd),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),_.isScene===!0&&_.onBeforeRender(w,_,N,P),d=zt.get(_,E.length),d.init(N),E.push(d),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Mt),gt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,gt),f=dt.get(_,S.length),f.init(),S.push(f),V.enabled===!0&&V.isPresenting===!0){let j=w.xr.getDepthSensingMesh();j!==null&&zl(j,N,-1/0,w.sortObjects)}zl(_,N,0,w.sortObjects),f.finish(),w.sortObjects===!0&&f.sort(st,ut),le=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,le&&Et.addToRenderList(f,_),this.info.render.frame++,et===!0&&Q.beginShadows();let F=d.state.shadowsArray;pt.render(F,_,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=f.opaque,U=f.transmissive;if(d.setupLights(),N.isArrayCamera){let j=N.cameras;if(U.length>0)for(let it=0,ht=j.length;it<ht;it++){let mt=j[it];od(B,U,_,mt)}le&&Et.render(_);for(let it=0,ht=j.length;it<ht;it++){let mt=j[it];rd(f,_,mt,mt.viewport)}}else U.length>0&&od(B,U,_,N),le&&Et.render(_),rd(f,_,N);P!==null&&I===0&&(M.updateMultisampleRenderTarget(P),M.updateRenderTargetMipmap(P)),_.isScene===!0&&_.onAfterRender(w,_,N),ne.resetDefaultState(),y=-1,b=null,E.pop(),E.length>0?(d=E[E.length-1],et===!0&&Q.setGlobalState(w.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?f=S[S.length-1]:f=null};function zl(_,N,F,B){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||q.intersectsSprite(_)){B&&St.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Mt);let it=W.update(_),ht=_.material;ht.visible&&f.push(_,it,ht,F,St.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||q.intersectsObject(_))){let it=W.update(_),ht=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),St.copy(_.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),St.copy(it.boundingSphere.center)),St.applyMatrix4(_.matrixWorld).applyMatrix4(Mt)),Array.isArray(ht)){let mt=it.groups;for(let Ct=0,At=mt.length;Ct<At;Ct++){let yt=mt[Ct],Ht=ht[yt.materialIndex];Ht&&Ht.visible&&f.push(_,it,Ht,F,St.z,yt)}}else ht.visible&&f.push(_,it,ht,F,St.z,null)}}let j=_.children;for(let it=0,ht=j.length;it<ht;it++)zl(j[it],N,F,B)}function rd(_,N,F,B){let U=_.opaque,j=_.transmissive,it=_.transparent;d.setupLightsView(F),et===!0&&Q.setGlobalState(w.clippingPlanes,F),B&&bt.viewport(R.copy(B)),U.length>0&&oo(U,N,F),j.length>0&&oo(j,N,F),it.length>0&&oo(it,N,F),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function od(_,N,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new yn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?As:En,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let j=d.state.transmissionRenderTarget[B.id],it=B.viewport||R;j.setSize(it.z*w.transmissionResolutionScale,it.w*w.transmissionResolutionScale);let ht=w.getRenderTarget();w.setRenderTarget(j),w.getClearColor(X),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),le&&Et.render(F);let mt=w.toneMapping;w.toneMapping=Hn;let Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),et===!0&&Q.setGlobalState(w.clippingPlanes,B),oo(_,F,B),M.updateMultisampleRenderTarget(j),M.updateRenderTargetMipmap(j),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let yt=0,Ht=N.length;yt<Ht;yt++){let Zt=N[yt],ge=Zt.object,de=Zt.geometry,Xt=Zt.material,wt=Zt.group;if(Xt.side===sn&&ge.layers.test(B.layers)){let Me=Xt.side;Xt.side=Oe,Xt.needsUpdate=!0,ad(ge,F,B,de,Xt,wt),Xt.side=Me,Xt.needsUpdate=!0,At=!0}}At===!0&&(M.updateMultisampleRenderTarget(j),M.updateRenderTargetMipmap(j))}w.setRenderTarget(ht),w.setClearColor(X,J),Ct!==void 0&&(B.viewport=Ct),w.toneMapping=mt}function oo(_,N,F){let B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,j=_.length;U<j;U++){let it=_[U],ht=it.object,mt=it.geometry,Ct=it.group,At=it.material;At.allowOverride===!0&&B!==null&&(At=B),ht.layers.test(F.layers)&&ad(ht,N,F,mt,At,Ct)}}function ad(_,N,F,B,U,j){_.onBeforeRender(w,N,F,B,U,j),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),U.onBeforeRender(w,N,F,B,_,j),U.transparent===!0&&U.side===sn&&U.forceSinglePass===!1?(U.side=Oe,U.needsUpdate=!0,w.renderBufferDirect(F,N,B,U,_,j),U.side=kn,U.needsUpdate=!0,w.renderBufferDirect(F,N,B,U,_,j),U.side=sn):w.renderBufferDirect(F,N,B,U,_,j),_.onAfterRender(w,N,F,B,U,j)}function ao(_,N,F){N.isScene!==!0&&(N=me);let B=_t.get(_),U=d.state.lights,j=d.state.shadowsArray,it=U.state.version,ht=vt.getParameters(_,U.state,j,N,F),mt=vt.getProgramCacheKey(ht),Ct=B.programs;B.environment=_.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(_.isMeshStandardMaterial?O:g).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Ct===void 0&&(_.addEventListener("dispose",Rt),Ct=new Map,B.programs=Ct);let At=Ct.get(mt);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===it)return cd(_,ht),At}else ht.uniforms=vt.getUniforms(_),_.onBeforeCompile(ht,w),At=vt.acquireProgram(ht,mt),Ct.set(mt,At),B.uniforms=ht.uniforms;let yt=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(yt.clippingPlanes=Q.uniform),cd(_,ht),B.needsLights=Sm(_),B.lightsStateVersion=it,B.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function ld(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=Is.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function cd(_,N){let F=_t.get(_);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function Mm(_,N,F,B,U){N.isScene!==!0&&(N=me),M.resetTextureUnits();let j=N.fog,it=B.isMeshStandardMaterial?N.environment:null,ht=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Li,mt=(B.isMeshStandardMaterial?O:g).get(B.envMap||it),Ct=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,At=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),yt=!!F.morphAttributes.position,Ht=!!F.morphAttributes.normal,Zt=!!F.morphAttributes.color,ge=Hn;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=w.toneMapping);let de=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=de!==void 0?de.length:0,wt=_t.get(B),Me=d.state.lights;if(et===!0&&(gt===!0||_!==b)){let Ne=_===b&&B.id===y;Q.setState(B,_,Ne)}let Jt=!1;B.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Me.state.version||wt.outputColorSpace!==ht||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==mt||B.fog===!0&&wt.fog!==j||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Q.numPlanes||wt.numIntersection!==Q.numIntersection)||wt.vertexAlphas!==Ct||wt.vertexTangents!==At||wt.morphTargets!==yt||wt.morphNormals!==Ht||wt.morphColors!==Zt||wt.toneMapping!==ge||wt.morphTargetsCount!==Xt)&&(Jt=!0):(Jt=!0,wt.__version=B.version);let cn=wt.currentProgram;Jt===!0&&(cn=ao(B,N,U));let is=!1,Xe=!1,qs=!1,oe=cn.getUniforms(),Qe=wt.uniforms;if(bt.useProgram(cn.program)&&(is=!0,Xe=!0,qs=!0),B.id!==y&&(y=B.id,Xe=!0),is||b!==_){bt.buffers.depth.getReversed()?(rt.copy(_.projectionMatrix),bp(rt),yp(rt),oe.setValue(A,"projectionMatrix",rt)):oe.setValue(A,"projectionMatrix",_.projectionMatrix),oe.setValue(A,"viewMatrix",_.matrixWorldInverse);let ke=oe.map.cameraPosition;ke!==void 0&&ke.setValue(A,Yt.setFromMatrixPosition(_.matrixWorld)),Bt.logarithmicDepthBuffer&&oe.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),b!==_&&(b=_,Xe=!0,qs=!0)}if(U.isSkinnedMesh){oe.setOptional(A,U,"bindMatrix"),oe.setOptional(A,U,"bindMatrixInverse");let Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),oe.setValue(A,"boneTexture",Ne.boneTexture,M))}U.isBatchedMesh&&(oe.setOptional(A,U,"batchingTexture"),oe.setValue(A,"batchingTexture",U._matricesTexture,M),oe.setOptional(A,U,"batchingIdTexture"),oe.setValue(A,"batchingIdTexture",U._indirectTexture,M),oe.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(A,"batchingColorTexture",U._colorsTexture,M));let tn=F.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Tt.update(U,F,cn),(Xe||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,oe.setValue(A,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Qe.envMap.value=mt,Qe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Qe.envMapIntensity.value=N.environmentIntensity),Xe&&(oe.setValue(A,"toneMappingExposure",w.toneMappingExposure),wt.needsLights&&Em(Qe,qs),j&&B.fog===!0&&ot.refreshFogUniforms(Qe,j),ot.refreshMaterialUniforms(Qe,B,z,tt,d.state.transmissionRenderTarget[_.id]),Is.upload(A,ld(wt),Qe,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Is.upload(A,ld(wt),Qe,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(A,"center",U.center),oe.setValue(A,"modelViewMatrix",U.modelViewMatrix),oe.setValue(A,"normalMatrix",U.normalMatrix),oe.setValue(A,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ne=B.uniformsGroups;for(let ke=0,Hl=Ne.length;ke<Hl;ke++){let Ei=Ne[ke];D.update(Ei,cn),D.bind(Ei,cn)}}return cn}function Em(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function Sm(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(_,N,F){let B=_t.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_t.get(_.texture).__webglTexture=N,_t.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:F,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,N){let F=_t.get(_);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0};let Am=A.createFramebuffer();this.setRenderTarget=function(_,N=0,F=0){P=_,C=N,I=F;let B=!0,U=null,j=!1,it=!1;if(_){let mt=_t.get(_);if(mt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(mt.__hasExternalTextures)M.rebindTextures(_,_t.get(_.texture).__webglTexture,_t.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let yt=_.depthTexture;if(mt.__boundDepthTexture!==yt){if(yt!==null&&_t.has(yt)&&(_.width!==yt.image.width||_.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}let Ct=_.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(it=!0);let At=_t.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(At[N])?U=At[N][F]:U=At[N],j=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?U=_t.get(_).__webglMultisampledFramebuffer:Array.isArray(At)?U=At[F]:U=At,R.copy(_.viewport),Y.copy(_.scissor),k=_.scissorTest}else R.copy(xt).multiplyScalar(z).floor(),Y.copy(Nt).multiplyScalar(z).floor(),k=ee;if(F!==0&&(U=Am),bt.bindFramebuffer(A.FRAMEBUFFER,U)&&B&&bt.drawBuffers(_,U),bt.viewport(R),bt.scissor(Y),bt.setScissorTest(k),j){let mt=_t.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,F)}else if(it){let mt=_t.get(_.texture),Ct=N;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.__webglTexture,F,Ct)}else if(_!==null&&F!==0){let mt=_t.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mt.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(_,N,F,B,U,j,it){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=_t.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&it!==void 0&&(ht=ht[it]),ht){bt.bindFramebuffer(A.FRAMEBUFFER,ht);try{let mt=_.texture,Ct=mt.format,At=mt.type;if(!Bt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-B&&F>=0&&F<=_.height-U&&A.readPixels(N,F,B,U,It.convert(Ct),It.convert(At),j)}finally{let mt=P!==null?_t.get(P).__webglFramebuffer:null;bt.bindFramebuffer(A.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=function(_,N,F,B,U,j,it){return lo(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=_t.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&it!==void 0&&(ht=ht[it]),ht)if(N>=0&&N<=_.width-B&&F>=0&&F<=_.height-U){bt.bindFramebuffer(A.FRAMEBUFFER,ht);let mt=_.texture,Ct=mt.format,At=mt.type;if(!Bt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,yt),A.bufferData(A.PIXEL_PACK_BUFFER,j.byteLength,A.STREAM_READ),A.readPixels(N,F,B,U,It.convert(Ct),It.convert(At),0);let Ht=P!==null?_t.get(P).__webglFramebuffer:null;bt.bindFramebuffer(A.FRAMEBUFFER,Ht);let Zt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),yield xp(A,Zt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,yt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,j),A.deleteBuffer(yt),A.deleteSync(Zt),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(_,N=null,F=0){let B=Math.pow(2,-F),U=Math.floor(_.image.width*B),j=Math.floor(_.image.height*B),it=N!==null?N.x:0,ht=N!==null?N.y:0;M.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,it,ht,U,j),bt.unbindTexture()};let Tm=A.createFramebuffer(),Cm=A.createFramebuffer();this.copyTextureToTexture=function(_,N,F=null,B=null,U=0,j=null){j===null&&(U!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=U,U=0):j=0);let it,ht,mt,Ct,At,yt,Ht,Zt,ge,de=_.isCompressedTexture?_.mipmaps[j]:_.image;if(F!==null)it=F.max.x-F.min.x,ht=F.max.y-F.min.y,mt=F.isBox3?F.max.z-F.min.z:1,Ct=F.min.x,At=F.min.y,yt=F.isBox3?F.min.z:0;else{let tn=Math.pow(2,-U);it=Math.floor(de.width*tn),ht=Math.floor(de.height*tn),_.isDataArrayTexture?mt=de.depth:_.isData3DTexture?mt=Math.floor(de.depth*tn):mt=1,Ct=0,At=0,yt=0}B!==null?(Ht=B.x,Zt=B.y,ge=B.z):(Ht=0,Zt=0,ge=0);let Xt=It.convert(N.format),wt=It.convert(N.type),Me;N.isData3DTexture?(M.setTexture3D(N,0),Me=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(M.setTexture2DArray(N,0),Me=A.TEXTURE_2D_ARRAY):(M.setTexture2D(N,0),Me=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);let Jt=A.getParameter(A.UNPACK_ROW_LENGTH),cn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),is=A.getParameter(A.UNPACK_SKIP_PIXELS),Xe=A.getParameter(A.UNPACK_SKIP_ROWS),qs=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,de.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,de.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ct),A.pixelStorei(A.UNPACK_SKIP_ROWS,At),A.pixelStorei(A.UNPACK_SKIP_IMAGES,yt);let oe=_.isDataArrayTexture||_.isData3DTexture,Qe=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let tn=_t.get(_),Ne=_t.get(N),ke=_t.get(tn.__renderTarget),Hl=_t.get(Ne.__renderTarget);bt.bindFramebuffer(A.READ_FRAMEBUFFER,ke.__webglFramebuffer),bt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Hl.__webglFramebuffer);for(let Ei=0;Ei<mt;Ei++)oe&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.get(_).__webglTexture,U,yt+Ei),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_t.get(N).__webglTexture,j,ge+Ei)),A.blitFramebuffer(Ct,At,it,ht,Ht,Zt,it,ht,A.DEPTH_BUFFER_BIT,A.NEAREST);bt.bindFramebuffer(A.READ_FRAMEBUFFER,null),bt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||_.isRenderTargetTexture||_t.has(_)){let tn=_t.get(_),Ne=_t.get(N);bt.bindFramebuffer(A.READ_FRAMEBUFFER,Tm),bt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Cm);for(let ke=0;ke<mt;ke++)oe?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,tn.__webglTexture,U,yt+ke):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,tn.__webglTexture,U),Qe?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ne.__webglTexture,j,ge+ke):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ne.__webglTexture,j),U!==0?A.blitFramebuffer(Ct,At,it,ht,Ht,Zt,it,ht,A.COLOR_BUFFER_BIT,A.NEAREST):Qe?A.copyTexSubImage3D(Me,j,Ht,Zt,ge+ke,Ct,At,it,ht):A.copyTexSubImage2D(Me,j,Ht,Zt,Ct,At,it,ht);bt.bindFramebuffer(A.READ_FRAMEBUFFER,null),bt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Qe?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(Me,j,Ht,Zt,ge,it,ht,mt,Xt,wt,de.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Me,j,Ht,Zt,ge,it,ht,mt,Xt,de.data):A.texSubImage3D(Me,j,Ht,Zt,ge,it,ht,mt,Xt,wt,de):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,j,Ht,Zt,it,ht,Xt,wt,de.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,j,Ht,Zt,de.width,de.height,Xt,de.data):A.texSubImage2D(A.TEXTURE_2D,j,Ht,Zt,it,ht,Xt,wt,de);A.pixelStorei(A.UNPACK_ROW_LENGTH,Jt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,cn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,is),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qs),j===0&&N.generateMipmaps&&A.generateMipmap(Me),bt.unbindTexture()},this.copyTextureToTexture3D=function(_,N,F=null,B=null,U=0){return Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,N,F,B,U)},this.initRenderTarget=function(_){_t.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),bt.unbindTexture()},this.resetState=function(){C=0,I=0,P=null,bt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var ja=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=sh(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ox.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=sh()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:sh())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sh(){return performance.now()}function Ox(){this._document.hidden===!1&&this.reset()}var Qa=(e=>(e.FIRST_PERSON="first-person",e.THIRD_PERSON="third-person",e))(Qa||{});var tl=(i=>(i.DEFAULT="default",i.LOCK="lock",i.LOCK_HOLD="lock-hold",i))(tl||{});var el=class{constructor(t){H(this,"controls");this.controls=t}execute(t,e){let i=this.controls.settings.pointer.behaviour;(e.type==="mousedown"||e.type==="mouseup")&&i!=="default"?this.controls.setPointerLocked():this.controls.setRotationEnabled(t)}};var Ir=class{constructor(t,e){H(this,"rotationManager");H(this,"zoomIn");this.rotationManager=t,this.zoomIn=e}execute(t){t&&this.rotationManager.zoom(this.zoomIn?-1:1)}};var nl=new Map([[8,"Backspace"],[9,"Tab"],[13,"Enter"],[16,"ShiftLeft"],[17,"ControlLeft"],[18,"AltLeft"],[19,"Pause"],[20,"CapsLock"],[27,"Escape"],[32,"Space"],[33,"PageUp"],[34,"PageDown"],[35,"End"],[36,"Home"],[37,"ArrowLeft"],[38,"ArrowUp"],[39,"ArrowRight"],[40,"ArrowDown"],[45,"Insert"],[46,"Delete"],[48,"Digit0"],[49,"Digit1"],[50,"Digit2"],[51,"Digit3"],[52,"Digit4"],[53,"Digit5"],[54,"Digit6"],[55,"Digit7"],[56,"Digit8"],[57,"Digit9"],[65,"KeyA"],[66,"KeyB"],[67,"KeyC"],[68,"KeyD"],[69,"KeyE"],[70,"KeyF"],[71,"KeyG"],[72,"KeyH"],[73,"KeyI"],[74,"KeyJ"],[75,"KeyK"],[76,"KeyL"],[77,"KeyM"],[78,"KeyN"],[79,"KeyO"],[80,"KeyP"],[81,"KeyQ"],[82,"KeyR"],[83,"KeyS"],[84,"KeyT"],[85,"KeyU"],[86,"KeyV"],[87,"KeyW"],[88,"KeyX"],[89,"KeyY"],[90,"KeyZ"],[91,"MetaLeft"],[92,"MetaRight"],[93,"MediaSelect"],[96,"Numpad0"],[97,"Numpad1"],[98,"Numpad2"],[99,"Numpad3"],[100,"Numpad4"],[101,"Numpad5"],[102,"Numpad6"],[103,"Numpad7"],[104,"Numpad8"],[105,"Numpad9"],[106,"NumpadMultiply"],[107,"NumpadAdd"],[109,"NumpadSubtract"],[110,"NumpadDecimal"],[111,"NumpadDivide"],[112,"F1"],[113,"F2"],[114,"F3"],[115,"F4"],[116,"F5"],[117,"F6"],[118,"F7"],[119,"F8"],[120,"F9"],[121,"F10"],[122,"F11"],[123,"F12"],[144,"NumLock"],[145,"ScrollLock"],[186,"Semicolon"],[187,"Equal"],[188,"Comma"],[189,"Minus"],[190,"Period"],[191,"Slash"],[192,"Backquote"],[219,"BracketLeft"],[221,"BracketRight"],[220,"Backslash"]]);var Le=class{constructor(t=Number.POSITIVE_INFINITY){H(this,"maxSpeed");H(this,"velocity");this.maxSpeed=t,this.velocity=0}resetVelocity(){this.velocity=0}interpolate(t,e,i,s,r,o){let a=this.maxSpeed*Math.max(i,1e-4),l=Math.min(Math.max(t-e,-a),a),c=t-l,h=this.velocity,u=(h+s*l)*o;this.velocity=(h-s*u)*r;let p=c+(l+u)*r;return Math.abs(l)<1e-6?(p=e,this.velocity=0):e-t>0==p>e&&(this.velocity=(p-e)/o,p=e),p}static calculateOmega(t){return 2/Math.max(t,1e-4)}static calculateExp(t,e){let i=t*e,s=i*i;return 1/(1+i+.48*s+.235*i*s)}};var mi=2*Math.PI,Qp=new L,il=new L,rh=new ce,rl=class rl extends $t{constructor(e,i,s,r){super();H(this,"_position");H(this,"_quaternion");H(this,"_target");H(this,"settings");H(this,"spherical0");H(this,"spherical1");H(this,"scalarDampers");H(this,"timestamp");H(this,"updateEvent");this._position=e,this._quaternion=i,this._target=s,this.settings=r,this.spherical0=new di,this.spherical1=new di,this.timestamp=0,this.updateEvent={type:rl.EVENT_UPDATE},this.scalarDampers=[new Le,new Le,new Le]}get position(){return this._position}set position(e){this._position=e}get quaternion(){return this._quaternion}set quaternion(e){this._quaternion=e}get target(){return this._target}set target(e){this._target=e}get radius(){return this.spherical0.radius}resetVelocity(){this.spherical1.copy(this.spherical0);for(let e of this.scalarDampers)e.resetVelocity()}restrictAngles(){let e=this.spherical1,i=this.settings.rotation,s=i.minAzimuthalAngle,r=i.maxAzimuthalAngle,o=i.minPolarAngle,a=i.maxPolarAngle;return e.theta=Math.min(Math.max(e.theta,s),r),e.phi=Math.min(Math.max(e.phi,o),a),(e.phi===0||e.phi===Math.PI)&&e.makeSafe(),this}restrictRadius(){let e=this.spherical1,i=this.settings.zoom,s=i.minDistance,r=i.maxDistance;return e.radius=Math.min(Math.max(e.radius,s),r),this}restrictSpherical(){return this.restrictRadius().restrictAngles()}updateSpherical(){if(this.settings.general.mode==="third-person"){let e=this.settings.rotation.pivotOffset;il.subVectors(Qp.subVectors(this.position,e),this.target),this.spherical1.setFromVector3(il)}else this.spherical1.setFromVector3(this.target);return this.restrictSpherical(),this.spherical0.copy(this.spherical1),this}updatePosition(){if(this.settings.general.mode==="third-person"){let e=this.settings.rotation.pivotOffset;this.position.setFromSpherical(this.spherical0).add(this.target).add(e)}return this}updateQuaternion(){let e=this.settings,i=e.rotation,s=this.target,r=Qp.copy(i.up),o=this.spherical0.phi%mi;return(o<0&&o>-Math.PI||o>Math.PI&&o<mi)&&r.negate(),e.general.mode==="third-person"?rh.lookAt(il.subVectors(this.position,s),i.pivotOffset,r):rh.lookAt(il.set(0,0,0),s.setFromSpherical(this.spherical0),r),this.quaternion.setFromRotationMatrix(rh),this.dispatchEvent(this.updateEvent),this}adjustSpherical(e,i){let s=this.spherical1,r=this.settings,o=r.rotation,a=o.invertedY,l=r.general.mode==="third-person",c=(l||a)&&!(l&&a);return s.theta=o.invertedX?s.theta+e:s.theta-e,s.phi=c?s.phi-i:s.phi+i,this.restrictAngles()}zoom(e){let i=this.spherical1,s=this.settings,r=s.zoom;if(r.enabled&&s.general.mode==="third-person"){let o=e*r.sensitivity;i.radius=r.inverted?i.radius-o:i.radius+o,this.restrictRadius()}return this}lookAt(e){return this.settings.general.mode==="third-person"?this.target.copy(e).sub(this.settings.rotation.pivotOffset):this.target.subVectors(e,this.position).normalize(),this}getViewDirection(e){let i=this.settings.general.mode==="third-person";return e.setFromSpherical(this.spherical0).normalize(),i?e.negate():e}getProjectedViewDirection(e){let i=this.settings.general.mode==="third-person";return e.setFromSpherical(this.spherical1).normalize(),i?e.negate():e}update(e){let i=this.spherical0,s=this.spherical1;if(i.radius===s.radius&&i.theta===s.theta&&i.phi===s.phi)Math.abs(i.theta)>=mi&&(i.theta%=mi,s.theta%=mi),Math.abs(i.phi)>=mi&&(i.phi%=mi,s.phi%=mi);else{let o=this.settings,a=this.scalarDampers,l=(e-this.timestamp)*.001;if(o.rotation.damping>0){let c=o.rotation.damping,h=Le.calculateOmega(c),u=Le.calculateExp(h,l);i.theta=a[0].interpolate(i.theta,s.theta,c,h,u,l),i.phi=a[1].interpolate(i.phi,s.phi,c,h,u,l)}else i.theta=s.theta,i.phi=s.phi;if(o.zoom.damping>0){let c=o.zoom.damping,h=Le.calculateOmega(c),u=Le.calculateExp(h,l);i.radius=a[2].interpolate(i.radius,s.radius,c,h,u,l)}else i.radius=s.radius;this.updatePosition().updateQuaternion()}this.timestamp=e}};H(rl,"EVENT_UPDATE","update");var sl=rl;var Dr=class n{constructor(){H(this,"defaultActions");H(this,"actions");this.defaultActions=new Map,this.actions=new Map}reset(){return this.actions=new Map(this.defaultActions),this}setDefault(t){return this.defaultActions=t,this.reset()}clearDefault(){return this.defaultActions.clear(),this}clear(){return this.actions.clear(),this}copy(t){return this.defaultActions=new Map(t.defaultActions),this.actions=new Map(t.actions),this}clone(){return new n().copy(this)}fromJSON(t){return t!==void 0&&(this.defaultActions=new Map(t.defaultActions),this.actions=new Map(t.actions)),this}has(t){return this.actions.has(t)}get(t){return this.actions.get(t)}set(t,e){return this.actions.set(t,e),this}delete(t){return this.actions.delete(t)}toJSON(){return{defaultActions:[...this.defaultActions],actions:[...this.actions]}}};var Lr=class Lr extends $t{constructor(){super();H(this,"_mode");H(this,"_previousMode");this._mode="first-person",this._previousMode=this._mode}get previousMode(){return this._previousMode}get mode(){return this._mode}set mode(e){this._mode!==e&&(this._mode=e,this.dispatchEvent({type:Lr.EVENT_CHANGE}),this._previousMode=e)}copy(e){return this.mode=e.mode,this}clone(){return new Lr().copy(this)}fromJSON(e){return this.mode=e.mode,this}toJSON(){return{mode:this.mode}}};H(Lr,"EVENT_CHANGE","change");var ol=Lr;var Ls=class Ls extends $t{constructor(){super();H(this,"_behaviour");H(this,"_sensitivity");this._behaviour="default",this._sensitivity=.001}get behaviour(){return this._behaviour}set behaviour(e){this._behaviour=e,this.dispatchEvent({type:Ls.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(e){this._sensitivity=e,this.dispatchEvent({type:Ls.EVENT_CHANGE})}copy(e){return this.behaviour=e.behaviour,this.sensitivity=e.sensitivity,this}clone(){return new Ls().copy(this)}fromJSON(e){return this.behaviour=e.behaviour,this.sensitivity=e.sensitivity,this}toJSON(){return{behaviour:this.behaviour,sensitivity:this.sensitivity}}};H(Ls,"EVENT_CHANGE","change");var al=Ls;var VA=new L(1,0,0),tf=new L(0,1,0),zA=new L(0,0,1);var Se=class Se extends $t{constructor(){super();H(this,"_enabled");H(this,"_up");H(this,"_pivotOffset");H(this,"_minAzimuthalAngle");H(this,"_maxAzimuthalAngle");H(this,"_minPolarAngle");H(this,"_maxPolarAngle");H(this,"_invertedX");H(this,"_invertedY");H(this,"_sensitivityX");H(this,"_sensitivityY");H(this,"_damping");this._enabled=!0,this._up=new L,this._up.copy(tf),this._pivotOffset=new L,this._minAzimuthalAngle=Number.NEGATIVE_INFINITY,this._maxAzimuthalAngle=Number.POSITIVE_INFINITY,this._minPolarAngle=0,this._maxPolarAngle=Math.PI,this._invertedX=!1,this._invertedY=!1,this._sensitivityX=1,this._sensitivityY=1,this._damping=0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get up(){return this._up}set up(e){this._up=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get pivotOffset(){return this._pivotOffset}set pivotOffset(e){this._pivotOffset=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get minAzimuthalAngle(){return this._minAzimuthalAngle}set minAzimuthalAngle(e){this._minAzimuthalAngle=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get maxAzimuthalAngle(){return this._maxAzimuthalAngle}set maxAzimuthalAngle(e){this._maxAzimuthalAngle=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get minPolarAngle(){return this._minPolarAngle}set minPolarAngle(e){this._minPolarAngle=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get maxPolarAngle(){return this._maxPolarAngle}set maxPolarAngle(e){this._maxPolarAngle=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get invertedX(){return this._invertedX}set invertedX(e){this._invertedX=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get invertedY(){return this._invertedY}set invertedY(e){this._invertedY=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get sensitivityX(){return this._sensitivityX}set sensitivityX(e){this._sensitivityX=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get sensitivityY(){return this._sensitivityY}set sensitivityY(e){this._sensitivityY=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}set sensitivity(e){this._sensitivityX=this._sensitivityY=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}get damping(){return this._damping}set damping(e){this._damping=e,this.dispatchEvent({type:Se.EVENT_CHANGE})}copy(e){return this.up.copy(e.up),this.pivotOffset.copy(e.pivotOffset),this.minAzimuthalAngle=e.minAzimuthalAngle,this.maxAzimuthalAngle=e.maxAzimuthalAngle,this.minPolarAngle=e.minPolarAngle,this.maxPolarAngle=e.maxPolarAngle,this.invertedX=e.invertedX,this.invertedY=e.invertedY,this.sensitivityX=e.sensitivityX,this.sensitivityY=e.sensitivityY,this.damping=e.damping,this}clone(){return new Se().copy(this)}fromJSON(e){var i,s,r,o;return this.enabled=e.enabled,this.up.copy(e.up),this.pivotOffset.copy(e.pivotOffset),this.minAzimuthalAngle=(i=e.minAzimuthalAngle)!=null?i:Number.NEGATIVE_INFINITY,this.maxAzimuthalAngle=(s=e.maxAzimuthalAngle)!=null?s:Number.POSITIVE_INFINITY,this.minPolarAngle=(r=e.minPolarAngle)!=null?r:Number.NEGATIVE_INFINITY,this.maxPolarAngle=(o=e.maxPolarAngle)!=null?o:Number.POSITIVE_INFINITY,this.invertedX=e.invertedX,this.invertedY=e.invertedY,this.sensitivityX=e.sensitivityX,this.sensitivityY=e.sensitivityY,this.damping=e.damping,this}toJSON(){return{enabled:this.enabled,up:this.up,pivotOffset:this.pivotOffset,minAzimuthalAngle:this.minAzimuthalAngle,maxAzimuthalAngle:this.maxAzimuthalAngle,minPolarAngle:this.minPolarAngle,maxPolarAngle:this.maxPolarAngle,invertedX:this.invertedX,invertedY:this.invertedY,sensitivityX:this.sensitivityX,sensitivityY:this.sensitivityY,damping:this.damping}}};H(Se,"EVENT_CHANGE","change");var ll=Se;var Wn=class Wn extends $t{constructor(){super();H(this,"_enabled");H(this,"_sensitivity");H(this,"_boostMultiplier");H(this,"_axisWeights");H(this,"_damping");this._enabled=!0,this._sensitivity=1,this._boostMultiplier=2,this._axisWeights=new L(1,1,1),this._damping=0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.dispatchEvent({type:Wn.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(e){this._sensitivity=e,this.dispatchEvent({type:Wn.EVENT_CHANGE})}get boostMultiplier(){return this._boostMultiplier}set boostMultiplier(e){this._boostMultiplier=Math.max(e,1),this.dispatchEvent({type:Wn.EVENT_CHANGE})}get axisWeights(){return this._axisWeights}set axisWeights(e){this._axisWeights=e,this.dispatchEvent({type:Wn.EVENT_CHANGE})}get damping(){return this._damping}set damping(e){this._damping=e,this.dispatchEvent({type:Wn.EVENT_CHANGE})}copy(e){return this.enabled=e.enabled,this.sensitivity=e.sensitivity,this.boostMultiplier=e.boostMultiplier,this.damping=e.damping,this}clone(){return new Wn().copy(this)}fromJSON(e){return this.enabled=e.enabled,this.sensitivity=e.sensitivity,this.boostMultiplier=e.boostMultiplier,this.damping=e.damping,e.axisWeights!==void 0&&this.axisWeights.copy(e.axisWeights),this}toJSON(){return{enabled:this.enabled,sensitivity:this.sensitivity,boostMultiplier:this.boostMultiplier,axisWeights:this.axisWeights,damping:this.damping}}};H(Wn,"EVENT_CHANGE","change");var cl=Wn;var vn=class vn extends $t{constructor(){super();H(this,"_enabled");H(this,"_inverted");H(this,"_minDistance");H(this,"_maxDistance");H(this,"_sensitivity");H(this,"_damping");this._enabled=!0,this._inverted=!1,this._minDistance=1e-6,this._maxDistance=Number.POSITIVE_INFINITY,this._sensitivity=1,this._damping=0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.dispatchEvent({type:vn.EVENT_CHANGE})}get inverted(){return this._inverted}set inverted(e){this._inverted=e,this.dispatchEvent({type:vn.EVENT_CHANGE})}get minDistance(){return this._minDistance}set minDistance(e){this._minDistance=Math.min(Math.max(e,1e-6),Number.POSITIVE_INFINITY),this.dispatchEvent({type:vn.EVENT_CHANGE})}get maxDistance(){return this._maxDistance}set maxDistance(e){this._maxDistance=Math.min(Math.max(e,this._minDistance),Number.POSITIVE_INFINITY),this.dispatchEvent({type:vn.EVENT_CHANGE})}setRange(e,i){this._minDistance=e,this._maxDistance=i,this.dispatchEvent({type:vn.EVENT_CHANGE})}get sensitivity(){return this._sensitivity}set sensitivity(e){this._sensitivity=e,this.dispatchEvent({type:vn.EVENT_CHANGE})}get damping(){return this._damping}set damping(e){this._damping=e,this.dispatchEvent({type:vn.EVENT_CHANGE})}copy(e){return this.enabled=e.enabled,this.inverted=e.inverted,this.minDistance=e.minDistance,this.maxDistance=e.maxDistance,this.sensitivity=e.sensitivity,this.damping=e.damping,this}clone(){return new vn().copy(this)}fromJSON(e){return this.enabled=e.enabled,this.inverted=e.inverted,this.minDistance=e.minDistance,this.maxDistance=e.maxDistance||Number.POSITIVE_INFINITY,this.sensitivity=e.sensitivity,this.damping=e.damping,this}toJSON(){return{enabled:this.enabled,inverted:this.inverted,minDistance:this.minDistance,maxDistance:this.maxDistance,sensitivity:this.sensitivity,damping:this.damping}}};H(vn,"EVENT_CHANGE","change");var hl=vn;var _n=class _n extends $t{constructor(){super();H(this,"keyBindings");H(this,"pointerBindings");H(this,"general");H(this,"pointer");H(this,"rotation");H(this,"translation");H(this,"zoom");this.keyBindings=new Dr,this.keyBindings.setDefault(new Map([["KeyW",0],["KeyA",1],["KeyS",2],["KeyD",3],["ArrowUp",0],["ArrowLeft",1],["ArrowDown",2],["ArrowRight",3],["KeyX",4],["Space",5],["PageDown",6],["PageUp",7],["ShiftLeft",8]])),this.pointerBindings=new Dr,this.pointerBindings.setDefault(new Map([[0,9]])),this.general=new ol,this.pointer=new al,this.rotation=new ll,this.translation=new cl,this.zoom=new hl,this.general.addEventListener(_n.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.pointer.addEventListener(_n.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.rotation.addEventListener(_n.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.translation.addEventListener(_n.EVENT_CHANGE,e=>this.dispatchEvent(e)),this.zoom.addEventListener(_n.EVENT_CHANGE,e=>this.dispatchEvent(e))}copy(e){return this.keyBindings.copy(e.keyBindings),this.pointerBindings.copy(e.pointerBindings),this.general.copy(e.general),this.pointer.copy(e.pointer),this.rotation.copy(e.rotation),this.translation.copy(e.translation),this.zoom.copy(e.zoom),this.dispatchEvent({type:_n.EVENT_CHANGE}),this}clone(){return new _n().copy(this)}fromJSON(e){let i=JSON.parse(e);return this.keyBindings.fromJSON(i.keyBindings),this.pointerBindings.fromJSON(i.pointerBindings),this.general.fromJSON(i.general),this.pointer.fromJSON(i.pointer),this.rotation.fromJSON(i.rotation),this.translation.fromJSON(i.translation),this.zoom.fromJSON(i.zoom),this.dispatchEvent({type:_n.EVENT_CHANGE}),this}toBlob(){return new Blob([JSON.stringify(this)],{type:"text/json"})}toJSON(){return{keyBindings:this.keyBindings,pointerBindings:this.pointerBindings,general:this.general,pointer:this.pointer,rotation:this.rotation,translation:this.translation,zoom:this.zoom}}};H(_n,"EVENT_CHANGE","change");var gi=_n;var oh=new L,ul=new Kt,pl=class pl extends $t{constructor(e=new L,i=new Ie,s=new L,r=new gi){super();H(this,"_domElement");H(this,"rotationManager");H(this,"strategies");H(this,"dragging");H(this,"_enabled");H(this,"settings");this._domElement=null,this._enabled=!1,this.dragging=!1,this.settings=r,r.addEventListener("change",o=>this.handleEvent(o)),this.rotationManager=new sl(e,i,s,r),this.rotationManager.addEventListener(pl.EVENT_UPDATE,o=>this.dispatchEvent(o)),this.strategies=new Map([[6,new Ir(this.rotationManager,!1)],[7,new Ir(this.rotationManager,!0)],[9,new el(this)]])}get domElement(){return this._domElement}set domElement(e){this._domElement=e;let i=this.enabled;this.dispose(),this.enabled=i}get position(){return this.rotationManager.position}set position(e){this.rotationManager.position=e}get quaternion(){return this.rotationManager.quaternion}set quaternion(e){this.rotationManager.quaternion=e}get target(){return this.rotationManager.target}set target(e){this.rotationManager.target=e}lookAt(e,i,s){return e instanceof L?this.rotationManager.lookAt(e):this.rotationManager.lookAt(oh.set(e,i,s)),this}getViewDirection(e){return this.rotationManager.getViewDirection(e)}getProjectedViewDirection(e){return this.rotationManager.getProjectedViewDirection(e)}get enabled(){return this._enabled}set enabled(e){if(this.domElement===null||typeof document=="undefined")return;let i=this.domElement;e&&!this._enabled?(i.style.touchAction="none",document.addEventListener("pointerlockchange",this),document.addEventListener("pointerlockerror",this),document.addEventListener("visibilitychange",this),document.body.addEventListener("keyup",this),document.body.addEventListener("keydown",this),i.addEventListener("mousedown",this),i.addEventListener("mouseup",this),i.addEventListener("pointerdown",this),i.addEventListener("pointerup",this),i.addEventListener("pointercancel",this),i.addEventListener("wheel",this,{passive:!0})):!e&&this._enabled&&(i.style.touchAction="",document.removeEventListener("pointerlockchange",this),document.removeEventListener("pointerlockerror",this),document.removeEventListener("visibilitychange",this),document.body.removeEventListener("keyup",this),document.body.removeEventListener("keydown",this),i.removeEventListener("mousedown",this),i.removeEventListener("mouseup",this),i.removeEventListener("pointerdown",this),i.removeEventListener("pointerup",this),i.removeEventListener("pointercancel",this),i.removeEventListener("wheel",this),i.removeEventListener("pointermove",this)),this.rotationManager.resetVelocity(),this.setPointerLocked(!1),this._enabled=e}setPointerLocked(e=!0){var i;e?document.pointerLockElement!==this.domElement&&((i=this.domElement)==null?void 0:i.requestPointerLock)!==void 0&&this.domElement.requestPointerLock():document.exitPointerLock!==void 0&&document.exitPointerLock()}setRotationEnabled(e){var i,s;this.settings.rotation.enabled&&e?(i=this.domElement)==null||i.addEventListener("pointermove",this,{passive:!0}):(s=this.domElement)==null||s.removeEventListener("pointermove",this)}handlePointerMoveEvent(e){let i=this.settings,s=i.rotation,r=i.pointer.behaviour,o=i.pointer.sensitivity,a=this.rotationManager;if(r!=="lock-hold"||this.dragging){let{movementX:l,movementY:c}=e;(l===void 0||c===void 0)&&(l=e.clientX-ul.x,c=e.clientY-ul.y,ul.set(e.clientX,e.clientY)),a.adjustSpherical(l*o*s.sensitivityX,c*o*s.sensitivityY)}}handlePointerButtonEvent(e,i){var o;let s=this.settings.pointerBindings;if(!s.has(e.button))return;ul.set(e.clientX,e.clientY);let r=s.get(e.button);if(!(e instanceof PointerEvent&&e.pointerType==="mouse")){let a=this.strategies.get(r);a==null||a.execute(i,e),r===9&&(this.dragging=i)}if(e instanceof PointerEvent){let a=this.settings.pointer.behaviour;i&&a==="default"&&((o=this.domElement)==null||o.setPointerCapture(e.pointerId))}}handlePointerCancelEvent(e){var i;(i=this.domElement)==null||i.removeEventListener("pointermove",this)}handleWheelEvent(e){this.rotationManager.zoom(Math.sign(e.deltaY))}handlePointerLockEvent(){this.setRotationEnabled(document.pointerLockElement===this.domElement)}handleKeyboardEvent(e,i){let s=this.settings.keyBindings,r=e.code!==void 0?e.code:nl.get(e.keyCode);if(s.has(r)){e.preventDefault();let o=this.strategies.get(s.get(r));o==null||o.execute(i)}}handleVisibilityChangeEvent(){var e;document.hidden&&((e=this.domElement)==null||e.removeEventListener("pointermove",this))}onSettingsChanged(e){let i=this.rotationManager,s=this.settings,r=s.general;s.rotation.enabled||this.rotationManager.resetVelocity(),r.mode!==r.previousMode?(r.mode==="third-person"?(oh.copy(this.target),this.target.copy(this.position),this.position.sub(oh)):(this.position.copy(this.target),this.target.set(0,0,-1).applyQuaternion(this.quaternion)),i.updateSpherical()):i.restrictSpherical(),i.updatePosition().updateQuaternion()}synchronize(e,i,s){let r=this.settings.general.mode,o=this.rotationManager,a=this.position,l=this.quaternion,c=this.target;i.equals(l)?s.equals(c)?e.equals(a)||r==="third-person"&&o.updateSpherical().updateQuaternion():e.equals(a)&&r==="third-person"?o.updatePosition():o.updateSpherical().updateQuaternion():(r==="third-person"?(c.set(0,0,-1).applyQuaternion(l),c.multiplyScalar(o.radius),c.add(a)):c.set(0,0,-1).applyQuaternion(l),o.updateSpherical())}handleEvent(e){switch(e.type){case"pointermove":this.handlePointerMoveEvent(e);break;case"pointerdown":case"mousedown":this.handlePointerButtonEvent(e,!0);break;case"pointerup":case"mouseup":this.handlePointerButtonEvent(e,!1);break;case"pointercancel":this.handlePointerCancelEvent(e);break;case"wheel":this.handleWheelEvent(e);break;case"pointerlockchange":case"pointerlockerror":this.handlePointerLockEvent();break;case"keydown":this.handleKeyboardEvent(e,!0);break;case"keyup":this.handleKeyboardEvent(e,!1);break;case"visibilitychange":this.handleVisibilityChangeEvent();break;case"change":this.onSettingsChanged(e);break}}update(e){this.rotationManager.update(e)}dispose(){this.enabled=!1}};H(pl,"EVENT_UPDATE","update");var dl=pl;var fl=class{constructor(t){H(this,"movementState");this.movementState=t}execute(t){this.movementState.boost=t}};var Xn=class{constructor(t,e){H(this,"movementState");H(this,"direction");this.movementState=t,this.direction=e}execute(t){let e=this.movementState;switch(this.direction){case 2:e.backward=t,e.backwardBeforeForward=t;break;case 0:e.forward=t,e.backwardBeforeForward=!t;break;case 3:e.right=t,e.rightBeforeLeft=t;break;case 1:e.left=t,e.rightBeforeLeft=!t;break;case 5:e.up=t,e.upBeforeDown=t;break;case 4:e.down=t,e.upBeforeDown=!t;break}}};var ml=class{constructor(){H(this,"left");H(this,"right");H(this,"forward");H(this,"backward");H(this,"up");H(this,"down");H(this,"backwardBeforeForward");H(this,"rightBeforeLeft");H(this,"upBeforeDown");H(this,"boost");this.reset()}get active(){return this.forward||this.backward||this.left||this.right||this.up||this.down}reset(){return this.left=!1,this.right=!1,this.forward=!1,this.backward=!1,this.up=!1,this.down=!1,this.backwardBeforeForward=!1,this.rightBeforeLeft=!1,this.upBeforeDown=!1,this.boost=!1,this}};var ah=new L,Ns=new L,vl=class vl extends $t{constructor(e,i,s,r){super();H(this,"_position");H(this,"_quaternion");H(this,"_target");H(this,"settings");H(this,"movementState");H(this,"velocity0");H(this,"velocity1");H(this,"scalarDampers");H(this,"timestamp");H(this,"updateEvent");this._position=e,this._quaternion=i,this._target=s,this.settings=r,this.movementState=new ml,this.velocity0=new L,this.velocity1=new L,this.timestamp=0,this.updateEvent={type:vl.EVENT_UPDATE},this.scalarDampers=[new Le,new Le,new Le]}get position(){return this._position}set position(e){this._position=e}get quaternion(){return this._quaternion}set quaternion(e){this._quaternion=e}get target(){return this._target}set target(e){this._target=e}resetVelocity(){this.velocity0.set(0,0,0),this.velocity1.set(0,0,0);for(let e of this.scalarDampers)e.resetVelocity()}translate(e,i,s){let r=this.settings.translation.axisWeights;Ns.copy(i).applyQuaternion(this.quaternion),r.x!==1||r.y!==1||r.z!==1?(Ns.multiply(this.settings.translation.axisWeights).normalize(),Ns.multiplyScalar(i.length()*s)):Ns.multiplyScalar(s),e.add(Ns),this.dispatchEvent(this.updateEvent)}update(e){if(!this.settings.translation.enabled){this.timestamp=e;return}let s=this.movementState,r=this.settings.translation,o=s.boost?r.boostMultiplier:1,a=r.sensitivity,l=this.scalarDampers,c=this.velocity0,h=this.velocity1;h.setScalar(0),s.active&&(s.backward&&s.forward?h.z=s.backwardBeforeForward?1:-1:s.backward?h.z=1:s.forward&&(h.z=-1),s.right&&s.left?h.x=s.rightBeforeLeft?1:-1:s.right?h.x=1:s.left&&(h.x=-1),s.up&&s.down?h.y=s.upBeforeDown?1:-1:s.up?h.y=1:s.down&&(h.y=-1));let u=a*o;h.normalize().multiplyScalar(u);let p=(e-this.timestamp)*.001;if(this.timestamp=e,!c.equals(h))if(r.damping>0){let m=r.damping,v=Le.calculateOmega(m),x=Le.calculateExp(v,p);c.x=l[0].interpolate(c.x,h.x,m,v,x,p),c.y=l[1].interpolate(c.y,h.y,m,v,x,p),c.z=l[2].interpolate(c.z,h.z,m,v,x,p)}else c.copy(h);(c.x!==0||c.y!==0||c.z!==0)&&(this.settings.general.mode==="third-person"?(ah.copy(this.target),this.translate(this.target,c,p),this.target.copy(this.target),this.position.add(Ns.subVectors(this.target,ah))):(ah.copy(this.position),this.translate(this.position,c,p),this.position.copy(this.position)))}};H(vl,"EVENT_UPDATE","update");var gl=vl;var xl=class xl extends $t{constructor(e=new L,i=new Ie,s=new L,r=new gi){super();H(this,"translationManager");H(this,"strategies");H(this,"_enabled");H(this,"settings");this._enabled=!1,this.settings=r,r.addEventListener("change",a=>this.handleEvent(a)),this.translationManager=new gl(e,i,s,r),this.translationManager.addEventListener(xl.EVENT_UPDATE,a=>this.dispatchEvent(a));let o=this.translationManager.movementState;this.strategies=new Map([[0,new Xn(o,0)],[1,new Xn(o,1)],[2,new Xn(o,2)],[3,new Xn(o,3)],[4,new Xn(o,4)],[5,new Xn(o,5)],[8,new fl(o)]])}set position(e){this.translationManager.position=e}set quaternion(e){this.translationManager.quaternion=e}set target(e){this.translationManager.target=e}get enabled(){return this._enabled}set enabled(e){typeof document!="undefined"&&(this.translationManager.movementState.reset(),e&&!this._enabled?(document.addEventListener("visibilitychange",this),document.body.addEventListener("keyup",this),document.body.addEventListener("keydown",this)):!e&&this._enabled&&(document.removeEventListener("visibilitychange",this),document.body.removeEventListener("keyup",this),document.body.removeEventListener("keydown",this)),this.translationManager.resetVelocity(),this._enabled=e)}handleKeyboardEvent(e,i){let s=this.settings.keyBindings,r=e.code!==void 0?e.code:nl.get(e.keyCode);if(s.has(r)){e.preventDefault();let o=this.strategies.get(s.get(r));o==null||o.execute(i)}}handleVisibilityChangeEvent(){document.hidden&&this.translationManager.movementState.reset()}onSettingsChanged(e){this.settings.translation.enabled||this.translationManager.resetVelocity()}handleEvent(e){switch(e.type){case"keydown":this.handleKeyboardEvent(e,!0);break;case"keyup":this.handleKeyboardEvent(e,!1);break;case"visibilitychange":this.handleVisibilityChangeEvent();break;case"change":this.onSettingsChanged(e);break}}update(e){this.translationManager.update(e)}dispose(){this.enabled=!1}};H(xl,"EVENT_UPDATE","update");var _l=xl;var bl=new L;function ef(n,t){for(let e of t)n=e(n);return n}var Us=class Us extends $t{constructor(e=new L,i=new Ie,s=null){super();H(this,"_domElement");H(this,"_position");H(this,"_quaternion");H(this,"_target");H(this,"previousPosition");H(this,"previousQuaternion");H(this,"previousTarget");H(this,"rotationControls");H(this,"translationControls");H(this,"_enabled");H(this,"settings");H(this,"constraints");s===null&&typeof document!="undefined"&&(s=document.body),this._domElement=null,this._enabled=!1;let r=new L;this._target=r,this._position=e,this._quaternion=i,this.previousPosition=new L,this.previousQuaternion=new Ie,this.previousTarget=new L;let o=new gi;o.addEventListener("change",l=>this.handleEvent(l)),this.settings=o;let a=new Set;this.constraints=a,this.rotationControls=new dl(e,i,r,o),this.translationControls=new _l(e,i,r,o),this.rotationControls.addEventListener(Us.EVENT_UPDATE,l=>this.dispatchEvent(l)),this.translationControls.addEventListener(Us.EVENT_UPDATE,l=>this.dispatchEvent(l)),e!==null&&i!==null&&(this._target.set(0,0,-1).applyQuaternion(this._quaternion),this.lookAt(this._target),this.domElement=s,this.enabled=!0,this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target))}get domElement(){return this._domElement}set domElement(e){this._domElement=e,this.rotationControls.domElement=e;let i=this.enabled;this.dispose(),this.enabled=i}get position(){return this._position}set position(e){this._position=e,this.rotationControls.position=e,this.translationControls.position=e}get quaternion(){return this._quaternion}set quaternion(e){this._quaternion=e,this.rotationControls.quaternion=e,this.translationControls.quaternion=e}get target(){return this._target}set target(e){this._target=e,this.rotationControls.target=e,this.translationControls.target=e}lookAt(e,i,s){return e instanceof L?this.rotationControls.lookAt(e):this.rotationControls.lookAt(bl.set(e,i,s)),this}getViewDirection(e){return this.rotationControls.getViewDirection(e)}getProjectedViewDirection(e){return this.rotationControls.getProjectedViewDirection(e)}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this.rotationControls.enabled=e,this.translationControls.enabled=e}copy(e){return this.position=e.position,this.quaternion=e.quaternion,this.target=e.target,this.domElement=e.domElement,this.settings.copy(e.settings),this.lookAt(this.target)}clone(){return new Us().copy(this)}synchronize(){this.rotationControls.synchronize(this.previousPosition,this.previousQuaternion,this.previousTarget)}applyConstraints(){this.constraints.size!==0&&(this.settings.general.mode==="third-person"?(bl.copy(this.target),this.target.copy(ef(this.target,this.constraints)),this.position.add(bl.subVectors(this.target,bl))):this.position.copy(ef(this.position,this.constraints)))}onSettingsChanged(e){this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target)}handleEvent(e){switch(e.type){case"change":this.onSettingsChanged(e);break}}update(e){this.synchronize(),this.rotationControls.update(e),this.translationControls.update(e),this.applyConstraints(),this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.previousTarget.copy(this.target)}dispose(){this.enabled=!1}};H(Us,"EVENT_UPDATE","update");var Nr=Us;function ie(n){return n==null}function zu(n){return n!==null&&typeof n=="object"}function gh(n){return n!==null&&typeof n=="object"}function kx(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Ki(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,s)=>{let r=n[s],o=t[s];return gh(r)&&gh(o)?Object.assign(Object.assign({},i),{[s]:Ki(r,o)}):Object.assign(Object.assign({},i),{[s]:s in t?o:r})},{})}function Hu(n){return zu(n)?"target"in n:!1}var Vx={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"},we=class n{static alreadyDisposed(){return new n({type:"alreadydisposed"})}static notBindable(){return new n({type:"notbindable"})}static notCompatible(t,e){return new n({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new n({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new n({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=Vx[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}},El=class n{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){let i=this.read();if(!n.isBindable(i))throw we.notBindable();if(!(t in i))throw we.propertyNotFound(t);i[t]=e}},fe=class{constructor(){this.observers_={}}on(t,e,i){var s;let r=this.observers_[t];return r||(r=this.observers_[t]=[]),r.push({handler:e,key:(s=i==null?void 0:i.key)!==null&&s!==void 0?s:e}),this}off(t,e){let i=this.observers_[t];return i&&(this.observers_[t]=i.filter(s=>s.key!==e)),this}emit(t,e){let i=this.observers_[t];i&&i.forEach(s=>{s.handler(e)})}},vh=class{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(s,r)=>s===r,this.emitter=new fe,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){let i=e!=null?e:{forceEmit:!1,last:!0},s=this.constraint_?this.constraint_.constrain(t):t,r=this.rawValue_;this.equals_(r,s)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=s,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:s,sender:this}))}},_h=class{constructor(t){this.emitter=new fe,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){let i=e!=null?e:{forceEmit:!1,last:!0},s=this.value_;s===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:this.value_,sender:this}))}},xh=class{constructor(t){this.emitter=new fe,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}};function ae(n,t){let e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new _h(n):new vh(n,t)}function zx(n){return[new xh(n),(t,e)=>{n.setRawValue(t,e)}]}var Lt=class n{constructor(t){this.emitter=new fe,this.valMap_=t;for(let e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,s)=>Object.assign(i,{[s]:ae(t[s])}),{})}static fromObject(t){let e=this.createCore(t);return new n(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}},$i=class{constructor(t){this.values=Lt.fromObject({max:t.max,min:t.min})}constrain(t){let e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}},bh=class{constructor(t){this.values=Lt.fromObject({max:t.max,min:t.min})}constrain(t){let e=this.values.get("max"),i=this.values.get("min"),s=t;return ie(i)||(s=Math.max(s,i)),ie(e)||(s=Math.min(s,e)),s}},yh=class{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){let e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}},wh=class{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}},Hx={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t},Mh=class{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){let t=Hx[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}},Gx={"+":n=>n,"-":n=>-n,"~":n=>~n},Eh=class{constructor(t,e){this.operator=t,this.expression=e}evaluate(){let t=Gx[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}};function Gu(n){return(t,e)=>{for(let i=0;i<n.length;i++){let s=n[i](t,e);if(s!=="")return s}return""}}function kr(n,t){var e;let i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Wx(n,t){let e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Vr(n,t){var e;let i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Xx(n,t){let e=Vr(n,t);if(e!=="")return e;let i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";let s=Vr(n,t);return s===""?"":i+s}function Wu(n,t){let e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";let i=Xx(n,t);return i===""?"":e+i}function Tf(n,t){let e=n.substr(t,1);if(e==="0")return e;let i=Wx(n,t);return t+=i.length,i===""?"":i+Vr(n,t)}function qx(n,t){let e=Tf(n,t);if(t+=e.length,e==="")return"";let i=n.substr(t,1);if(t+=i.length,i!==".")return"";let s=Vr(n,t);return t+=s.length,e+i+s+Wu(n,t)}function Yx(n,t){let e=n.substr(t,1);if(t+=e.length,e!==".")return"";let i=Vr(n,t);return t+=i.length,i===""?"":e+i+Wu(n,t)}function Kx(n,t){let e=Tf(n,t);return t+=e.length,e===""?"":e+Wu(n,t)}var $x=Gu([qx,Yx,Kx]);function Zx(n,t){var e;let i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Jx(n,t){let e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";let i=Zx(n,t);return i===""?"":e+i}function jx(n,t){var e;let i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Qx(n,t){let e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";let i=jx(n,t);return i===""?"":e+i}function tb(n,t){var e;let i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function eb(n,t){let e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";let i=tb(n,t);return i===""?"":e+i}var nb=Gu([Jx,Qx,eb]),ib=Gu([nb,$x]);function sb(n,t){let e=ib(n,t);return t+=e.length,e===""?null:{evaluable:new wh(e),cursor:t}}function rb(n,t){let e=n.substr(t,1);if(t+=e.length,e!=="(")return null;let i=Pf(n,t);if(!i)return null;t=i.cursor,t+=kr(n,t).length;let s=n.substr(t,1);return t+=s.length,s!==")"?null:{evaluable:i.evaluable,cursor:t}}function ob(n,t){var e;return(e=sb(n,t))!==null&&e!==void 0?e:rb(n,t)}function Cf(n,t){let e=ob(n,t);if(e)return e;let i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;let s=Cf(n,t);return s?(t=s.cursor,{cursor:t,evaluable:new Eh(i,s.evaluable)}):null}function ab(n,t,e){e+=kr(t,e).length;let i=n.filter(s=>t.startsWith(s,e))[0];return i?(e+=i.length,e+=kr(t,e).length,{cursor:e,operator:i}):null}function lb(n,t){return(e,i)=>{let s=n(e,i);if(!s)return null;i=s.cursor;let r=s.evaluable;for(;;){let o=ab(t,e,i);if(!o)break;i=o.cursor;let a=n(e,i);if(!a)return null;i=a.cursor,r=new Mh(o.operator,r,a.evaluable)}return r?{cursor:i,evaluable:r}:null}}var cb=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>lb(n,t),Cf);function Pf(n,t){return t+=kr(n,t).length,cb(n,t)}function hb(n){let t=Pf(n,0);return!t||t.cursor+kr(n,t.cursor).length!==n.length?null:t.evaluable}function $n(n){var t;let e=hb(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Rf(n){if(typeof n=="number")return n;if(typeof n=="string"){let t=$n(n);if(!ie(t))return t}return 0}function ub(n){return String(n)}function We(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function jt(n,t,e,i,s){let r=(n-t)/(e-t);return i+r*(s-i)}function nf(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function be(n,t,e){return Math.min(Math.max(n,t),e)}function If(n,t){return(n%t+t)%t}function db(n,t){return ie(n.step)?Math.max(nf(t),2):nf(n.step)}function Df(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function Lf(n,t){var e;let i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function Nf(n,t){return ie(n.step)?null:new yh(n.step,t)}function Uf(n){return!ie(n.max)&&!ie(n.min)?new $i({max:n.max,min:n.min}):!ie(n.max)||!ie(n.min)?new bh({max:n.max,min:n.min}):null}function Of(n,t){var e,i,s;return{formatter:(e=n.format)!==null&&e!==void 0?e:We(db(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:Df(n),pointerScale:(s=n.pointerScale)!==null&&s!==void 0?s:Lf(n,t)}}function Ff(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Xu(n){return{constraint:n.constraint,textProps:Lt.fromObject(Of(n.params,n.initialValue))}}var Zn=class{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}},Bs=class{constructor(t){this.target=t}},Zi=class extends Bs{constructor(t,e,i){super(t),this.value=e,this.last=i!=null?i:!0}},Sh=class extends Bs{constructor(t,e){super(t),this.expanded=e}},Ah=class extends Bs{constructor(t,e){super(t),this.index=e}},Th=class extends Bs{constructor(t,e){super(t),this.native=e}},Ji=class extends Zn{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new fe,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){let e=this.controller.value;this.emitter_.emit("change",new Zi(this,e.binding.target.read(),t.options.last))}},Ch=class{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new fe}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}};function pb(n){if(!("binding"in n))return!1;let t=n.binding;return Hu(t)&&"read"in t&&"write"in t}function fb(n,t){let i=Object.keys(t).reduce((s,r)=>{if(s===void 0)return;let o=t[r],a=o(n[r]);return a.succeeded?Object.assign(Object.assign({},s),{[r]:a.value}):void 0},{});return i}function mb(n,t){return n.reduce((e,i)=>{if(e===void 0)return;let s=t(i);if(!(!s.succeeded||s.value===void 0))return[...e,s.value]},[])}function gb(n){return n===null?!1:typeof n=="object"}function qn(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};let i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function sf(n){return{custom:t=>qn(t)(n),boolean:qn(t=>typeof t=="boolean"?t:void 0)(n),number:qn(t=>typeof t=="number"?t:void 0)(n),string:qn(t=>typeof t=="string"?t:void 0)(n),function:qn(t=>typeof t=="function"?t:void 0)(n),constant:t=>qn(e=>e===t?t:void 0)(n),raw:qn(t=>t)(n),object:t=>qn(e=>{if(gb(e))return fb(e,t)})(n),array:t=>qn(e=>{if(Array.isArray(e))return mb(e,t)})(n)}}var Ph={optional:sf(!0),required:sf(!1)};function he(n,t){let e=t(Ph),i=Ph.required.object(e)(n);return i.succeeded?i.value:void 0}function Ze(n,t,e,i){if(t&&!t(n))return!1;let s=he(n,e);return s?i(s):!1}function Je(n,t){var e;return Ki((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function Yi(n){return"value"in n}function Bf(n){if(!zu(n)||!("binding"in n))return!1;let t=n.binding;return Hu(t)}var Tn="http://www.w3.org/2000/svg";function Sl(n){n.offsetHeight}function vb(n,t){let e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function qu(n){return n.ontouchstart!==void 0}function _b(){return globalThis}function xb(){return _b().document}function bb(n){let t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}var yb={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function kl(n,t){let e=n.createElementNS(Tn,"svg");return e.innerHTML=yb[t],e}function kf(n,t,e){n.insertBefore(t,n.children[e])}function Yu(n){n.parentElement&&n.parentElement.removeChild(n)}function Vf(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function wb(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function zf(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function Kn(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function Pn(n,t,e){Kn(n.value(t),e)}var Mb="tp";function Wt(n){return(e,i)=>[Mb,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}var Ur=Wt("lbl");function Eb(n,t){let e=n.createDocumentFragment();return t.split(`
`).map(s=>n.createTextNode(s)).forEach((s,r)=>{r>0&&e.appendChild(n.createElement("br")),e.appendChild(s)}),e}var Al=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ur()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(Ur("l")),Pn(e.props,"label",r=>{ie(r)?this.element.classList.add(Ur(void 0,"nol")):(this.element.classList.remove(Ur(void 0,"nol")),wb(i),i.appendChild(Eb(t,r)))}),this.element.appendChild(i),this.labelElement=i;let s=t.createElement("div");s.classList.add(Ur("v")),this.element.appendChild(s),this.valueElement=s}},Tl=class{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new Al(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return Ze(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return Je(null,{label:this.props.get("label")})}};function Sb(){return["veryfirst","first","last","verylast"]}var rf=Wt(""),of={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"},ks=class{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;let e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Sb().forEach(i=>{e.classList.remove(rf(void 0,of[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(rf(void 0,of[i]))})}),this.viewProps.handleDispose(()=>{Yu(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return Ze(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return Je(null,Object.assign({},this.viewProps.exportState()))}},Jn=class extends ks{constructor(t,e){if(e.value!==e.valueController.value)throw we.shouldNeverHappen();let i=e.valueController.viewProps,s=new Tl(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new Al(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=s,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return Ze(t,e=>{var i,s,r;return super.importState(e)&&this.labelController.importProps(e)&&((r=(s=(i=this.valueController).importProps)===null||s===void 0?void 0:s.call(i,t))!==null&&r!==void 0?r:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return Je(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}};function af(n){let t=Object.assign({},n);return delete t.value,t}var Cl=class extends Jn{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return Ze(t,e=>super.importState(af(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return Je(()=>af(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}};function Ab(n){return Yi(n)&&Bf(n.value)}var Rh=class extends Cl{importState(t){return Ze(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}};function Tb(n){return Yi(n)&&pb(n.value)}function Hf(n,t){for(;n.length<t;)n.push(void 0)}function Cb(n){let t=[];return Hf(t,n),t}function Pb(n){let t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function Rb(n,t){let e=[...Pb(n),t];return e.length>n.length?e.splice(0,e.length-n.length):Hf(e,n.length),e}var Ih=class{constructor(t){this.emitter=new fe,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=ae(Cb(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=Rb(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}};function Ib(n){if(!("binding"in n))return!1;let t=n.binding;return Hu(t)&&"read"in t&&!("write"in t)}var Dh=class extends Cl{exportState(){return Je(()=>super.exportState(),{binding:{readonly:!0}})}};function Db(n){return Yi(n)&&Ib(n.value)}var Lh=class extends Zn{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){let i=e.bind(this);return this.controller.buttonController.emitter.on(t,r=>{i(new Th(this,r.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}};function Lb(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function Hs(n,t){return e=>{Lb(n,t,e)}}function Ku(n,t){Kn(n,e=>{t.textContent=e!=null?e:""})}var lh=Wt("btn"),Nh=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(lh()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("button");i.classList.add(lh("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;let s=t.createElement("div");s.classList.add(lh("t")),Ku(e.props.value("title"),s),this.buttonElement.appendChild(s)}},Uh=class{constructor(t,e){this.emitter=new fe,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Nh(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return Ze(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return Je(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}},Pl=class extends ks{constructor(t,e){let i=new Uh(t,{props:e.buttonProps,viewProps:e.viewProps}),s=new Tl(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:s.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=s}importState(t){return Ze(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return Je(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}},Rl=class{constructor(t){let[e,i]=t.split("-"),s=e.split(".");this.major=parseInt(s[0],10),this.minor=parseInt(s[1],10),this.patch=parseInt(s[2],10),this.prerelease=i!=null?i:null}toString(){let t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}},Gs=new Rl("2.0.5");function Be(n){return Object.assign({core:Gs},n)}var Nb=Be({id:"button",type:"blade",accept(n){let t=he(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new Pl(n.document,{blade:n.blade,buttonProps:Lt.fromObject({title:n.params.title}),labelProps:Lt.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof Pl?new Lh(n.controller):null}});function Ub(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function Ob(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function Fb(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function Bb(n){return zu(n)?"refresh"in n&&typeof n.refresh=="function":!1}function kb(n,t){if(!El.isBindable(n))throw we.notBindable();return new El(n,t)}var Oh=class{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new fe,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){let s=i!=null?i:{},r=this.controller_.element.ownerDocument,o=this.pool_.createBinding(r,kb(t,e),s),a=this.pool_.createBindingApi(o);return this.add(a,s.index)}addFolder(t){return Ob(this,t)}addButton(t){return Ub(this,t)}addTab(t){return Fb(this,t)}add(t,e){let i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){let e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),s=this.pool_.createApi(i);return this.add(s,t.index)}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{Bb(t)&&t.refresh()})}onRackValueChange_(t){let e=t.bladeController,i=this.pool_.createApi(e),s=Bf(e.value)?e.value.binding:null;this.emitter_.emit("change",new Zi(i,s?s.target.read():e.value.rawValue,t.options.last))}},zr=class extends Zn{constructor(t,e){super(t),this.rackApi_=new Oh(t.rackController,e)}refresh(){this.rackApi_.refresh()}},Hr=class extends ks{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return Ze(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,s)=>i.importState(e.children[s])))}exportState(){return Je(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}};function Fh(n){return"rackController"in n}var Bh=class{constructor(t){this.emitter=new fe,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(let e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw we.shouldNeverHappen();let i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);let s=this.extract_(t);s&&(s.emitter.on("add",this.onSubListAdd_),s.emitter.on("remove",this.onSubListRemove_),s.allItems().forEach(r=>{this.cache_.add(r)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){let e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);let i=this.extract_(t);i&&(i.allItems().forEach(s=>{this.cache_.delete(s)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}};function Vb(n,t){for(let e=0;e<n.length;e++){let i=n[e];if(Yi(i)&&i.value===t)return i}return null}function zb(n){return Fh(n)?n.rackController.rack.bcSet_:null}var kh=class{constructor(t){var e,i;this.emitter=new fe,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Bh(zb),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();let e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;let i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),Yi(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Fh(i)){let s=i.rackController.rack;if(s){let r=s.emitter;r.on("layout",this.onRackLayout_),r.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();let e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;let i=t.item;if(Yi(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Fh(i)){let s=i.rackController.rack;if(s){let r=s.emitter;r.off("layout",this.onRackLayout_),r.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){let t=this.bcSet_.items.filter(s=>!s.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(s=>{let r=[];s===e&&(r.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&r.push("veryfirst")),s===i&&(r.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&r.push("verylast")),s.blade.set("positions",r)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){let e=Vb(this.find(Yi),t.sender);if(!e)throw we.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}},Gr=class{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;let e=new kh({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&kf(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Yu(t.bladeController.view.element)}};function Ws(){return new Lt({positions:ae([],{equals:kx})})}var Wr=class n extends Lt{constructor(t){super(t)}static create(t){let e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=Lt.createCore(e);return new n(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";let t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!ie(t)?`${t}px`:"auto"}bindExpandedClass(t,e){let i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};Pn(this,"expanded",i),Pn(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}};function Hb(n,t){let e=0;return vb(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),Sl(t),e=t.clientHeight,n.set("temporaryExpanded",null),Sl(t)}),e}function lf(n,t){t.style.height=n.styleHeight}function $u(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),ie(n.get("expandedHeight"))){let e=Hb(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),Sl(t)}),n.emitter.on("change",()=>{lf(n,t)}),lf(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}var Il=class extends zr{constructor(t,e){super(t,e),this.emitter_=new fe,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new Sh(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},Gf=Wt("cnt"),Vh=class{constructor(t,e){var i;this.className_=Wt((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),Gf()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),Pn(this.foldable_,"completed",Hs(this.element,this.className_(void 0,"cpl")));let s=t.createElement("button");s.classList.add(this.className_("b")),Pn(e.props,"title",c=>{ie(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s;let r=t.createElement("div");r.classList.add(this.className_("i")),this.element.appendChild(r);let o=t.createElement("div");o.classList.add(this.className_("t")),Ku(e.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;let a=t.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);let l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}},Xr=class extends Hr{constructor(t,e){var i;let s=Wr.create((i=e.expanded)!==null&&i!==void 0?i:!0),r=new Vh(t,{foldable:s,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Gr({blade:e.blade,element:r.containerElement,root:e.root,viewProps:e.viewProps}),view:r})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=s,$u(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return Ze(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return Je(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}},Gb=Be({id:"folder",type:"blade",accept(n){let t=he(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Xr(n.document,{blade:n.blade,expanded:n.params.expanded,props:Lt.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Xr?new Il(n.controller,n.pool):null}}),Wb=Wt("");function cf(n,t){return Hs(n,Wb(void 0,t))}var jn=class n extends Lt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=zx(ae(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,s;let r=t!=null?t:{};return new n(Lt.createCore({disabled:(e=r.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=r.hidden)!==null&&i!==void 0?i:!1,parent:(s=r.parent)!==null&&s!==void 0?s:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Kn(this.globalDisabled_,cf(t,"disabled")),Pn(this,"hidden",cf(t,"hidden"))}bindDisabled(t){Kn(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Kn(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){let t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;let i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}},hf=Wt("tbp"),zh=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(hf()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(hf("c")),this.element.appendChild(i),this.containerElement=i}},Or=Wt("tbi"),Hh=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Or()),e.viewProps.bindClassModifiers(this.element),Pn(e.props,"selected",r=>{r?this.element.classList.add(Or(void 0,"sel")):this.element.classList.remove(Or(void 0,"sel"))});let i=t.createElement("button");i.classList.add(Or("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;let s=t.createElement("div");s.classList.add(Or("t")),Ku(e.props.value("title"),s),this.buttonElement.appendChild(s),this.titleElement=s}},Gh=class{constructor(t,e){this.emitter=new fe,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Hh(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}},qr=class extends Hr{constructor(t,e){let i=new zh(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Gr({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Gh(t,{props:e.itemProps,viewProps:jn.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,Pn(this.props,"selected",s=>{this.itemController.props.set("selected",s),this.viewProps.set("hidden",!s)})}get itemController(){return this.ic_}importState(t){return Ze(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return Je(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}},Wh=class extends zr{constructor(t,e){super(t,e),this.emitter_=new fe,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){let e=this.controller.view.element.ownerDocument,i=new qr(e,{blade:Ws(),itemProps:Lt.fromObject({selected:!1,title:t.title}),props:Lt.fromObject({selected:!1}),viewProps:jn.create()}),s=this.pool_.createApi(i);return this.rackApi_.add(s,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new Ah(this,t.rawValue))}},Xh=class extends zr{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}},uf=-1,qh=class{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ae(!0),this.selectedIndex=ae(uf),this.items_=[]}add(t,e){let i=e!=null?e:this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){let e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=uf,this.empty.rawValue=!0;return}let t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){let e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,s)=>{i.rawValue=s===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}},Fr=Wt("tab"),Yh=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Fr(),Gf()),e.viewProps.bindClassModifiers(this.element),Kn(e.empty,Hs(this.element,Fr(void 0,"nop")));let i=t.createElement("div");i.classList.add(Fr("t")),this.element.appendChild(i),this.itemsElement=i;let s=t.createElement("div");s.classList.add(Fr("i")),this.element.appendChild(s);let r=t.createElement("div");r.classList.add(Fr("c")),this.element.appendChild(r),this.contentsElement=r}},Dl=class extends Hr{constructor(t,e){let i=new qh,s=new Yh(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new Gr({blade:e.blade,element:s.contentsElement,viewProps:e.viewProps}),view:s}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);let r=this.rackController.rack;r.emitter.on("add",this.onRackAdd_),r.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;let e=t.bladeController;kf(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;let e=t.bladeController;Yu(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}},Wf=Be({id:"tab",type:"blade",accept(n){let t=he(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){let t=new Dl(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{let i=new qr(n.document,{blade:Ws(),itemProps:Lt.fromObject({selected:!1,title:e.title}),props:Lt.fromObject({selected:!1}),viewProps:jn.create()});t.add(i)}),t},api(n){return n.controller instanceof Dl?new Wh(n.controller,n.pool):n.controller instanceof qr?new Xh(n.controller,n.pool):null}});function Xb(n,t){let e=n.accept(t.params);if(!e)return null;let i=he(t.params,s=>({disabled:s.optional.boolean,hidden:s.optional.boolean}));return n.controller({blade:Ws(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:jn.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}var Yr=class extends Ji{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}},Kh=class{constructor(){this.disabled=!1,this.emitter=new fe}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}},$h=class{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new fe,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;let t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;let t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}},ji=class{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}};function Ll(n,t){if(n instanceof t)return n;if(n instanceof ji){let e=n.constraints.reduce((i,s)=>i||(s instanceof t?s:null),null);if(e)return e}return null}var Qi=class{constructor(t){this.values=Lt.fromObject({options:t})}constrain(t){let e=this.values.get("options");return e.length===0||e.filter(s=>s.value===t).length>0?t:e[0].value}};function no(n){var t;let e=Ph;if(Array.isArray(n))return(t=he({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function Zu(n){if(Array.isArray(n))return n;let t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function Ju(n){return ie(n)?null:new Qi(Zu(n))}var ch=Wt("lst"),Zh=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(ch()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("select");i.classList.add(ch("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;let s=t.createElement("div");s.classList.add(ch("m")),s.appendChild(kl(t,"dropdown")),this.element.appendChild(s),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,Pn(this.props_,"options",r=>{Vf(this.selectElement),r.forEach(o=>{let a=t.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){let t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}},Rn=class{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Zh(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){let e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return Ze(t,null,e=>({options:e.required.custom(no)}),e=>(this.props.set("options",Zu(e.options)),!0))}exportProps(){return Je(null,{options:this.props.get("options")})}},df=Wt("pop"),Jh=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(df()),e.viewProps.bindClassModifiers(this.element),Kn(e.shows,Hs(this.element,df(void 0,"v")))}},Nl=class{constructor(t,e){this.shows=ae(!1),this.viewProps=e.viewProps,this.view=new Jh(t,{shows:this.shows,viewProps:this.viewProps})}},pf=Wt("txt"),jh=class{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(pf()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);let i=t.createElement("input");i.classList.add(pf("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){let t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}},ts=class{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new jh(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){let i=t.currentTarget.value,s=this.parser_(i);ie(s)||(this.value.rawValue=s),this.view.refresh()}};function qb(n){return String(n)}function Xf(n){return n==="false"?!1:!!n}function ff(n){return qb(n)}function Yb(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}var Kb=We(0);function Ul(n){return Kb(n)+"%"}function qf(n){return String(n)}function Qh(n){return n}function Xs({primary:n,secondary:t,forward:e,backward:i}){let s=!1;function r(o){s||(s=!0,o(),s=!1)}n.emitter.on("change",o=>{r(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),t.emitter.on("change",o=>{r(()=>{n.setRawValue(i(n.rawValue,t.rawValue),o.options)}),r(()=>{t.setRawValue(e(n.rawValue,t.rawValue),o.options)})}),r(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Ge(n,t){let e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function Kr(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Qn(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function $b(n){return n==="ArrowUp"||n==="ArrowDown"}function Yf(n){return $b(n)||n==="ArrowLeft"||n==="ArrowRight"}function hh(n,t){var e,i;let s=t.ownerDocument.defaultView,r=t.getBoundingClientRect();return{x:n.pageX-(((e=s&&s.scrollX)!==null&&e!==void 0?e:0)+r.left),y:n.pageY-(((i=s&&s.scrollY)!==null&&i!==void 0?i:0)+r.top)}}var ti=class{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new fe,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){let e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();let i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(hh(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(hh(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){let e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(hh(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();let e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){let e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;let i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,s=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-s.left,y:i.clientY-s.top}:void 0),sender:this,shiftKey:t.shiftKey})}},on=Wt("txt"),tu=class{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(on(),on(void 0,"num")),e.arrayPosition&&this.element.classList.add(on(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("input");i.classList.add(on("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(on()),this.inputElement.classList.add(on("i"));let s=t.createElement("div");s.classList.add(on("k")),this.element.appendChild(s),this.knobElement=s;let r=t.createElementNS(Tn,"svg");r.classList.add(on("g")),this.knobElement.appendChild(r);let o=t.createElementNS(Tn,"path");o.classList.add(on("gb")),r.appendChild(o),this.guideBodyElem_=o;let a=t.createElementNS(Tn,"path");a.classList.add(on("gh")),r.appendChild(a),this.guideHeadElem_=a;let l=t.createElement("div");l.classList.add(Wt("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(on(void 0,"drg"));return}this.element.classList.add(on(void 0,"drg"));let e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),s=be(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+s},0 L${i},4 L${i+s},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);let r=this.props_.get("formatter");this.tooltipElem_.textContent=r(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){let t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}},es=class{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=ae(null),this.view=new tu(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);let s=new ti(this.view.knobElement);s.emitter.on("down",this.onPointerDown_),s.emitter.on("move",this.onPointerMove_),s.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;let s=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),r=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max"),o=t;return s!==void 0&&(o=Math.max(o,s)),r!==void 0&&(o=Math.min(o,r)),o}onInputChange_(t){let i=t.currentTarget.value,s=this.parser_(i);ie(s)||(this.value.rawValue=this.constrainValue_(s)),this.view.refresh()}onInputKeyDown_(t){let e=Ge(this.props.get("keyScale"),Kr(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Ge(this.props.get("keyScale"),Kr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;let e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){let e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){let e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}},uh=Wt("sld"),eu=class{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(uh()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(uh("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;let s=t.createElement("div");s.classList.add(uh("k")),this.trackElement.appendChild(s),this.knobElement=s,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){let t=be(jt(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}},nu=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new eu(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ti(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(jt(be(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){let e=Ge(this.props.get("keyScale"),Qn(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Ge(this.props.get("keyScale"),Qn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},dh=Wt("sldtxt"),iu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(dh());let i=t.createElement("div");i.classList.add(dh("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);let s=t.createElement("div");s.classList.add(dh("t")),this.textView_=e.textView,s.appendChild(this.textView_.element),this.element.appendChild(s)}},Vs=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new nu(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new es(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new iu(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return Ze(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{let i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){let t=this.sliderC_.props;return Je(null,{max:t.get("max"),min:t.get("min")})}};function Kf(n){return{sliderProps:new Lt({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new Lt({formatter:ae(n.formatter),keyScale:n.keyScale,pointerScale:ae(n.pointerScale)})}}var Zb={containerUnitSize:"cnt-usz"};function $f(n){return`--${Zb[n]}`}function $r(n){return Ff(n)}function bi(n){if(gh(n))return he(n,$r)}function Yn(n,t){if(!n)return;let e=[],i=Nf(n,t);i&&e.push(i);let s=Uf(n);return s&&e.push(s),new ji(e)}function Jb(n){return n?n.major===Gs.major:!1}function Zf(n){if(n==="inline"||n==="popup")return n}function io(n,t){n.write(t)}var yl=Wt("ckb"),su=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(yl()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("label");i.classList.add(yl("l")),this.element.appendChild(i),this.labelElement=i;let s=t.createElement("input");s.classList.add(yl("i")),s.type="checkbox",this.labelElement.appendChild(s),this.inputElement=s,e.viewProps.bindDisabled(this.inputElement);let r=t.createElement("div");r.classList.add(yl("w")),this.labelElement.appendChild(r);let o=kl(t,"check");r.appendChild(o),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}},ru=class{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new su(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){let e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}};function jb(n){let t=[],e=Ju(n.options);return e&&t.push(e),new ji(t)}var Qb=Be({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;let e=he(t,i=>({options:i.optional.custom(no),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Xf,constraint:n=>jb(n.params),writer:n=>io},controller:n=>{let t=n.document,e=n.value,i=n.constraint,s=i&&Ll(i,Qi);return s?new Rn(t,{props:new Lt({options:s.values.value("options")}),value:e,viewProps:n.viewProps}):new ru(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof Rn?new Yr(n.controller):null}}),qi=Wt("col"),ou=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(qi()),e.foldable.bindExpandedClass(this.element,qi(void 0,"expanded")),Pn(e.foldable,"completed",Hs(this.element,qi(void 0,"cpl")));let i=t.createElement("div");i.classList.add(qi("h")),this.element.appendChild(i);let s=t.createElement("div");s.classList.add(qi("s")),i.appendChild(s),this.swatchElement=s;let r=t.createElement("div");if(r.classList.add(qi("t")),i.appendChild(r),this.textElement=r,e.pickerLayout==="inline"){let o=t.createElement("div");o.classList.add(qi("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}};function ty(n,t,e){let i=be(n/255,0,1),s=be(t/255,0,1),r=be(e/255,0,1),o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a,c=0,h=0,u=(a+o)/2;return l!==0&&(h=l/(1-Math.abs(o+a-1)),i===o?c=(s-r)/l:s===o?c=2+(r-i)/l:c=4+(i-s)/l,c=c/6+(c<0?1:0)),[c*360,h*100,u*100]}function ey(n,t,e){let i=(n%360+360)%360,s=be(t/100,0,1),r=be(e/100,0,1),o=(1-Math.abs(2*r-1))*s,a=o*(1-Math.abs(i/60%2-1)),l=r-o/2,c,h,u;return i>=0&&i<60?[c,h,u]=[o,a,0]:i>=60&&i<120?[c,h,u]=[a,o,0]:i>=120&&i<180?[c,h,u]=[0,o,a]:i>=180&&i<240?[c,h,u]=[0,a,o]:i>=240&&i<300?[c,h,u]=[a,0,o]:[c,h,u]=[o,0,a],[(c+l)*255,(h+l)*255,(u+l)*255]}function ny(n,t,e){let i=be(n/255,0,1),s=be(t/255,0,1),r=be(e/255,0,1),o=Math.max(i,s,r),a=Math.min(i,s,r),l=o-a,c;l===0?c=0:o===i?c=60*(((s-r)/l%6+6)%6):o===s?c=60*((r-i)/l+2):c=60*((i-s)/l+4);let h=o===0?0:l/o,u=o;return[c,h*100,u*100]}function Jf(n,t,e){let i=If(n,360),s=be(t/100,0,1),r=be(e/100,0,1),o=r*s,a=o*(1-Math.abs(i/60%2-1)),l=r-o,c,h,u;return i>=0&&i<60?[c,h,u]=[o,a,0]:i>=60&&i<120?[c,h,u]=[a,o,0]:i>=120&&i<180?[c,h,u]=[0,o,a]:i>=180&&i<240?[c,h,u]=[0,a,o]:i>=240&&i<300?[c,h,u]=[a,0,o]:[c,h,u]=[o,0,a],[(c+l)*255,(h+l)*255,(u+l)*255]}function iy(n,t,e){let i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function sy(n,t,e){let i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function In(n){return[n[0],n[1],n[2]]}function Vl(n,t){return[n[0],n[1],n[2],t]}var ry={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:iy,rgb:ey},hsv:{hsl:sy,hsv:(n,t,e)=>[n,t,e],rgb:Jf},rgb:{hsl:ty,hsv:ny,rgb:(n,t,e)=>[n,t,e]}};function zs(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function oy(n,t){return n===t?t:If(n,t)}function jf(n,t,e){var i;let s=zs(t,e);return[t==="rgb"?be(n[0],0,s[0]):oy(n[0],s[0]),be(n[1],0,s[1]),be(n[2],0,s[2]),be((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function mf(n,t,e,i){let s=zs(t,e),r=zs(t,i);return n.map((o,a)=>o/s[a]*r[a])}function Qf(n,t,e){let i=mf(n,t.mode,t.type,"int"),s=ry[t.mode][e.mode](...i);return mf(s,e.mode,"int",e.type)}var qt=class n{static black(){return new n([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=jf(t,e,this.type)}getComponents(t){return Vl(Qf(In(this.comps_),{mode:this.mode,type:this.type},{mode:t!=null?t:this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){let t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}},vi=Wt("colp"),au=class{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(vi()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(vi("hsv"));let s=t.createElement("div");s.classList.add(vi("sv")),this.svPaletteView_=e.svPaletteView,s.appendChild(this.svPaletteView_.element),i.appendChild(s);let r=t.createElement("div");r.classList.add(vi("h")),this.hPaletteView_=e.hPaletteView,r.appendChild(this.hPaletteView_.element),i.appendChild(r),this.element.appendChild(i);let o=t.createElement("div");if(o.classList.add(vi("rgb")),this.textsView_=e.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};let a=t.createElement("div");a.classList.add(vi("a"));let l=t.createElement("div");l.classList.add(vi("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);let c=t.createElement("div");c.classList.add(vi("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){let t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}};function ay(n){return n==="int"?"int":n==="float"?"float":void 0}function ju(n){return he(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(ay)}),expanded:t.optional.boolean,picker:t.optional.custom(Zf),readonly:t.optional.constant(!1)}))}function ns(n){return n?.1:1}function tm(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}var Zr=class{constructor(t,e){this.type="float",this.mode=e,this.comps_=jf(t,e,this.type)}getComponents(t){return Vl(Qf(In(this.comps_),{mode:this.mode,type:this.type},{mode:t!=null?t:this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){let t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}},ly={int:(n,t)=>new qt(n,t),float:(n,t)=>new Zr(n,t)};function Qu(n,t,e){return ly[e](n,t)}function cy(n){return n.type==="float"}function hy(n){return n.type==="int"}function uy(n){let t=n.getComponents(),e=zs(n.mode,"int");return new qt([Math.round(jt(t[0],0,1,0,e[0])),Math.round(jt(t[1],0,1,0,e[1])),Math.round(jt(t[2],0,1,0,e[2])),t[3]],n.mode)}function dy(n){let t=n.getComponents(),e=zs(n.mode,"int");return new Zr([jt(t[0],0,e[0],0,1),jt(t[1],0,e[1],0,1),jt(t[2],0,e[2],0,1),t[3]],n.mode)}function Fe(n,t){if(n.type===t)return n;if(hy(n)&&t==="float")return dy(n);if(cy(n)&&t==="int")return uy(n);throw we.shouldNeverHappen()}function py(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function an(n,t){let e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}var fy={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function em(n){let t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);let e=parseFloat(t[1]),i=t[2];return fy[i](e)}function nm(n){let t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[an(t[1],255),an(t[2],255),an(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function my(n){let t=nm(n);return t?new qt(t,"rgb"):null}function im(n){let t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[an(t[1],255),an(t[2],255),an(t[3],255),an(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function gy(n){let t=im(n);return t?new qt(t,"rgb"):null}function sm(n){let t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[em(t[1]),an(t[2],100),an(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function vy(n){let t=sm(n);return t?new qt(t,"hsl"):null}function rm(n){let t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;let e=[em(t[1]),an(t[2],100),an(t[3],100),an(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function _y(n){let t=rm(n);return t?new qt(t,"hsl"):null}function om(n){let t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];let e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function xy(n){let t=om(n);return t?new qt(t,"rgb"):null}function am(n){let t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),jt(parseInt(t[4]+t[4],16),0,255,0,1)];let e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),jt(parseInt(e[4],16),0,255,0,1)]:null}function by(n){let t=am(n);return t?new qt(t,"rgb"):null}function lm(n){let t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;let e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function gf(n){return t=>{let e=lm(t);return e?Qu(e,"rgb",n):null}}function cm(n){let t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;let e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function vf(n){return t=>{let e=cm(t);return e?Qu(e,"rgb",n):null}}var yy=[{parser:om,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:am,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:nm,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:im,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:sm,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:rm,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:lm,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:cm,result:{alpha:!0,mode:"rgb",notation:"object"}}];function wy(n){return yy.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function My(n,t="int"){let e=wy(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function so(n){let t=[xy,by,my,gy,vy,_y];n==="int"&&t.push(gf("int"),vf("int")),n==="float"&&t.push(gf("float"),vf("float"));let e=Yb(t);return i=>{let s=e(i);return s?Fe(s,n):null}}function Ey(n){let t=so("int");if(typeof n!="string")return qt.black();let e=t(n);return e!=null?e:qt.black()}function hm(n){let t=be(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function td(n,t="#"){let e=In(n.getComponents("rgb")).map(hm).join("");return`${t}${e}`}function ed(n,t="#"){let e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(hm).join("");return`${t}${i}`}function um(n){let t=We(0),e=Fe(n,"int");return`rgb(${In(e.getComponents("rgb")).map(s=>t(s)).join(", ")})`}function wl(n){let t=We(2),e=We(0);return`rgba(${Fe(n,"int").getComponents("rgb").map((r,o)=>(o===3?t:e)(r)).join(", ")})`}function Sy(n){let t=[We(0),Ul,Ul],e=Fe(n,"int");return`hsl(${In(e.getComponents("hsl")).map((s,r)=>t[r](s)).join(", ")})`}function Ay(n){let t=[We(0),Ul,Ul,We(2)];return`hsla(${Fe(n,"int").getComponents("hsl").map((s,r)=>t[r](s)).join(", ")})`}function dm(n,t){let e=We(t==="float"?2:0),i=["r","g","b"],s=Fe(n,t);return`{${In(s.getComponents("rgb")).map((o,a)=>`${i[a]}: ${e(o)}`).join(", ")}}`}function Ty(n){return t=>dm(t,n)}function pm(n,t){let e=We(2),i=We(t==="float"?2:0),s=["r","g","b","a"];return`{${Fe(n,t).getComponents("rgb").map((a,l)=>{let c=l===3?e:i;return`${s[l]}: ${c(a)}`}).join(", ")}}`}function Cy(n){return t=>pm(t,n)}var Py=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:td},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ed},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:um},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:wl},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Sy},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Ay},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:Ty(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Cy(t)}],[])];function fm(n){return Py.reduce((t,e)=>t||(py(e.format,n)?e.stringifier:null),null)}var Br=Wt("apl"),lu=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Br()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);let i=t.createElement("div");i.classList.add(Br("b")),this.element.appendChild(i);let s=t.createElement("div");s.classList.add(Br("c")),i.appendChild(s),this.colorElem_=s;let r=t.createElement("div");r.classList.add(Br("m")),this.element.appendChild(r),this.markerElem_=r;let o=t.createElement("div");o.classList.add(Br("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){let t=this.value.rawValue,e=t.getComponents("rgb"),i=new qt([e[0],e[1],e[2],0],"rgb"),s=new qt([e[0],e[1],e[2],255],"rgb"),r=["to right",wl(i),wl(s)];this.colorElem_.style.background=`linear-gradient(${r.join(",")})`,this.previewElem_.style.backgroundColor=wl(t);let o=jt(e[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}},cu=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new lu(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ti(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let i=t.point.x/t.bounds.width,s=this.value.rawValue,[r,o,a]=s.getComponents("hsv");this.value.setRawValue(new qt([r,o,a,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){let e=Ge(ns(!0),Qn(t));if(e===0)return;let i=this.value.rawValue,[s,r,o,a]=i.getComponents("hsv");this.value.setRawValue(new qt([s,r,o,a+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Ge(ns(!0),Qn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},Os=Wt("coltxt");function Ry(n){let t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,s)=>{let r=n.createElement("option");return r.textContent=s.text,r.value=s.value,i.appendChild(r),i},n.createDocumentFragment())),t}var hu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Os()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(Os("m")),this.modeElem_=Ry(t),this.modeElem_.classList.add(Os("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);let s=t.createElement("div");s.classList.add(Os("mm")),s.appendChild(kl(t,"dropdown")),i.appendChild(s),this.element.appendChild(i);let r=t.createElement("div");r.classList.add(Os("w")),this.element.appendChild(r),this.inputsElem_=r,this.inputViews_=e.inputViews,this.applyInputViews_(),Kn(e.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){Vf(this.inputsElem_);let t=this.element.ownerDocument;this.inputViews_.forEach(e=>{let i=t.createElement("div");i.classList.add(Os("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}};function Iy(n){return We(n==="float"?2:0)}function Dy(n,t,e){let i=zs(n,t)[e];return new $i({min:0,max:i})}function Ly(n,t,e){return new es(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:Lt.fromObject({formatter:Iy(t.colorType),keyScale:ns(!1),pointerScale:t.colorType==="float"?.01:1}),value:ae(0,{constraint:Dy(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function Ny(n,t){let e={colorMode:t.colorMode,colorType:t.colorType,parser:$n,viewProps:t.viewProps};return[0,1,2].map(i=>{let s=Ly(n,e,i);return Xs({primary:t.value,secondary:s.value,forward(r){return Fe(r,t.colorType).getComponents(t.colorMode)[i]},backward(r,o){let a=t.colorMode,c=Fe(r,t.colorType).getComponents(a);c[i]=o;let h=Qu(Vl(In(c),c[3]),a,t.colorType);return Fe(h,"int")}}),s})}function Uy(n,t){let e=new ts(n,{parser:so("int"),props:Lt.fromObject({formatter:td}),value:ae(qt.black()),viewProps:t.viewProps});return Xs({primary:t.value,secondary:e.value,forward:i=>new qt(In(i.getComponents()),i.mode),backward:(i,s)=>new qt(Vl(In(s.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Oy(n){return n!=="hex"}var uu=class{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=ae(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new hu(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){let e=this.colorMode.rawValue;return Oy(e)?Ny(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):Uy(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){let e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}},ph=Wt("hpl"),du=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ph()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);let i=t.createElement("div");i.classList.add(ph("c")),this.element.appendChild(i);let s=t.createElement("div");s.classList.add(ph("m")),this.element.appendChild(s),this.markerElem_=s,this.update_()}update_(){let t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=um(new qt([e,100,100],"hsv"));let i=jt(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}},pu=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new du(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ti(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let i=jt(be(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),s=this.value.rawValue,[,r,o,a]=s.getComponents("hsv");this.value.setRawValue(new qt([i,r,o,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){let e=Ge(ns(!1),Qn(t));if(e===0)return;let i=this.value.rawValue,[s,r,o,a]=i.getComponents("hsv");this.value.setRawValue(new qt([s+e,r,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Ge(ns(!1),Qn(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},fh=Wt("svp"),_f=64,fu=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(fh()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);let i=t.createElement("canvas");i.height=_f,i.width=_f,i.classList.add(fh("c")),this.element.appendChild(i),this.canvasElement=i;let s=t.createElement("div");s.classList.add(fh("m")),this.element.appendChild(s),this.markerElem_=s,this.update_()}update_(){let t=bb(this.canvasElement);if(!t)return;let i=this.value.rawValue.getComponents("hsv"),s=this.canvasElement.width,r=this.canvasElement.height,o=t.getImageData(0,0,s,r),a=o.data;for(let h=0;h<r;h++)for(let u=0;u<s;u++){let p=jt(u,0,s,0,100),m=jt(h,0,r,100,0),v=Jf(i[0],p,m),x=(h*s+u)*4;a[x]=v[0],a[x+1]=v[1],a[x+2]=v[2],a[x+3]=255}t.putImageData(o,0,0);let l=jt(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;let c=jt(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}},mu=class{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new fu(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ti(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let i=jt(t.point.x,0,t.bounds.width,0,100),s=jt(t.point.y,0,t.bounds.height,100,0),[r,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new qt([r,i,s,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){Yf(t.key)&&t.preventDefault();let[e,i,s,r]=this.value.rawValue.getComponents("hsv"),o=ns(!1),a=Ge(o,Qn(t)),l=Ge(o,Kr(t));a===0&&l===0||this.value.setRawValue(new qt([e,i+a,s+l,r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){let e=ns(!1),i=Ge(e,Qn(t)),s=Ge(e,Kr(t));i===0&&s===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},gu=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new pu(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new mu(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new cu(t,{value:this.value,viewProps:this.viewProps}),text:new es(t,{parser:$n,props:Lt.fromObject({pointerScale:.01,keyScale:.1,formatter:We(2)}),value:ae(0,{constraint:new $i({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Xs({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,s)=>{let r=i.getComponents();return r[3]=s,new qt(r,i.mode)}}),this.textsC_=new uu(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new au(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}},mh=Wt("colsw"),vu=class{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(mh()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(mh("sw")),this.element.appendChild(i),this.swatchElem_=i;let s=t.createElement("button");s.classList.add(mh("b")),e.viewProps.bindDisabled(s),this.element.appendChild(s),this.buttonElement=s,this.update_()}update_(){let t=this.value.rawValue;this.swatchElem_.style.backgroundColor=ed(t)}onValueChange_(){this.update_()}},_u=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new vu(t,{value:this.value,viewProps:this.viewProps})}},Jr=class{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Wr.create(e.expanded),this.swatchC_=new _u(t,{value:this.value,viewProps:this.viewProps});let i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new ts(t,{parser:e.parser,props:Lt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new ou(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Nl(t,{viewProps:this.viewProps}):null;let s=new gu(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(r=>{r.addEventListener("blur",this.onPopupChildBlur_),r.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(s.view.element),Xs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:r=>r,backward:(r,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),$u(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;let e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;let e=this.popC_.view.element,i=zf(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!qu(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}};function Fy(n){return In(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function By(n){return n.getComponents("rgb").reduce((t,e,i)=>{let s=Math.floor(i===3?e*255:e)&255;return t<<8|s},0)>>>0}function ky(n){return new qt([n>>16&255,n>>8&255,n&255],"rgb")}function Vy(n){return new qt([n>>24&255,n>>16&255,n>>8&255,jt(n&255,0,255,0,1)],"rgb")}function zy(n){return typeof n!="number"?qt.black():ky(n)}function Hy(n){return typeof n!="number"?qt.black():Vy(n)}function Ml(n,t){return typeof n!="object"||ie(n)?!1:t in n&&typeof n[t]=="number"}function mm(n){return Ml(n,"r")&&Ml(n,"g")&&Ml(n,"b")}function gm(n){return mm(n)&&Ml(n,"a")}function vm(n){return mm(n)}function nd(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;let e=n.getComponents(),i=t.getComponents();for(let s=0;s<e.length;s++)if(e[s]!==i[s])return!1;return!0}function xf(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function Gy(n){let t=fm(n);return t?(e,i)=>{io(e,t(i))}:null}function Wy(n){let t=n?By:Fy;return(e,i)=>{io(e,t(i))}}function Xy(n,t,e){let s=Fe(t,e).toRgbaObject();n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b),n.writeProperty("a",s.a)}function qy(n,t,e){let s=Fe(t,e).toRgbaObject();n.writeProperty("r",s.r),n.writeProperty("g",s.g),n.writeProperty("b",s.b)}function Yy(n,t){return(e,i)=>{n?Xy(e,i,t):qy(e,i,t)}}function Ky(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function $y(n){return n?t=>ed(t,"0x"):t=>td(t,"0x")}function Zy(n){return"color"in n||n.view==="color"}var Jy=Be({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!Zy(t))return null;let e=ju(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:Ky(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?Hy:zy,equals:nd,writer:n=>Wy(n.params.supportsAlpha)},controller:n=>{var t,e;return new Jr(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:$y(n.params.supportsAlpha),parser:so("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function jy(n,t){if(!vm(n))return Fe(qt.black(),t);if(t==="int"){let e=xf(n);return new qt(e,"rgb")}if(t==="float"){let e=xf(n);return new Zr(e,"rgb")}return Fe(qt.black(),"int")}function Qy(n){return gm(n)}function tw(n){return t=>{let e=jy(t,n);return Fe(e,"int")}}function ew(n,t){return e=>n?pm(e,t):dm(e,t)}var nw=Be({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!vm(n))return null;let i=ju(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=tm(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>tw(n.params.colorType),equals:nd,writer:n=>Yy(Qy(n.initialValue),n.params.colorType)},controller:n=>{var t,e;let i=gm(n.initialValue);return new Jr(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:ew(i,n.params.colorType),parser:so("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),iw=Be({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;let e=My(n,tm(t));if(!e)return null;let i=fm(e);if(!i)return null;let s=ju(t);return s?{initialValue:n,params:Object.assign(Object.assign({},s),{format:e,stringifier:i})}:null},binding:{reader:()=>Ey,equals:nd,writer:n=>{let t=Gy(n.params.format);if(!t)throw we.notBindable();return t}},controller:n=>{var t,e;return new Jr(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:so("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}}),jr=class{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){let e=this.asm_.toComponents(t).map((i,s)=>{var r,o;return(o=(r=this.components[s])===null||r===void 0?void 0:r.constrain(i))!==null&&o!==void 0?o:i});return this.asm_.fromComponents(e)}},bf=Wt("pndtxt"),xu=class{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(bf()),this.textViews.forEach(i=>{let s=t.createElement("div");s.classList.add(bf("a")),s.appendChild(i.element),this.element.appendChild(s)})}};function sw(n,t,e){return new es(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:ae(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}var Qr=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,s)=>sw(t,e,s)),this.acs_.forEach((i,s)=>{Xs({primary:this.value,secondary:i.value,forward:r=>e.assembly.toComponents(r)[s],backward:(r,o)=>{let a=e.assembly.toComponents(r);return a[s]=o,e.assembly.fromComponents(a)}})}),this.view=new xu(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}},bu=class extends Ji{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}};function rw(n,t){let e=[],i=Nf(n,t);i&&e.push(i);let s=Uf(n);s&&e.push(s);let r=Ju(n.options);return r&&e.push(r),new ji(e)}var ow=Be({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;let e=he(t,i=>Object.assign(Object.assign({},Ff(i)),{options:i.optional.custom(no),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Rf,constraint:n=>rw(n.params,n.initialValue),writer:n=>io},controller:n=>{let t=n.value,e=n.constraint,i=e&&Ll(e,Qi);if(i)return new Rn(n.document,{props:new Lt({options:i.values.value("options")}),value:t,viewProps:n.viewProps});let s=Of(n.params,t.rawValue),r=e&&Ll(e,$i);return r?new Vs(n.document,Object.assign(Object.assign({},Kf(Object.assign(Object.assign({},s),{keyScale:ae(s.keyScale),max:r.values.value("max"),min:r.values.value("min")}))),{parser:$n,value:t,viewProps:n.viewProps})):new es(n.document,{parser:$n,props:Lt.fromObject(s),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof Vs?new bu(n.controller):n.controller.valueController instanceof Rn?new Yr(n.controller):null}}),Cn=class{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(ie(t))return!1;let e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}},_m={toComponents:n=>n.getComponents(),fromComponents:n=>new Cn(...n)},Fs=Wt("p2d"),yu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Fs()),e.viewProps.bindClassModifiers(this.element),Kn(e.expanded,Hs(this.element,Fs(void 0,"expanded")));let i=t.createElement("div");i.classList.add(Fs("h")),this.element.appendChild(i);let s=t.createElement("button");s.classList.add(Fs("b")),s.appendChild(kl(t,"p2dpad")),e.viewProps.bindDisabled(s),i.appendChild(s),this.buttonElement=s;let r=t.createElement("div");if(r.classList.add(Fs("t")),i.appendChild(r),this.textElement=r,e.pickerLayout==="inline"){let o=t.createElement("div");o.classList.add(Fs("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}},_i=Wt("p2dp"),wu=class{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(_i()),e.layout==="popup"&&this.element.classList.add(_i(void 0,"p")),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("div");i.classList.add(_i("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;let s=t.createElementNS(Tn,"svg");s.classList.add(_i("g")),this.padElement.appendChild(s),this.svgElem_=s;let r=t.createElementNS(Tn,"line");r.classList.add(_i("ax")),r.setAttributeNS(null,"x1","0"),r.setAttributeNS(null,"y1","50%"),r.setAttributeNS(null,"x2","100%"),r.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(r);let o=t.createElementNS(Tn,"line");o.classList.add(_i("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);let a=t.createElementNS(Tn,"line");a.classList.add(_i("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;let l=t.createElement("div");l.classList.add(_i("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){let[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),s=jt(t,-i,+i,0,100),r=jt(e,-i,+i,0,100),o=this.props_.get("invertsY")?100-r:r;this.lineElem_.setAttributeNS(null,"x2",`${s}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${s}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}};function yf(n,t,e){return[Ge(t[0],Qn(n)),Ge(t[1],Kr(n))*(e?1:-1)]}var Mu=class{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new wu(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new ti(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;let i=this.props.get("max"),s=jt(t.point.x,0,t.bounds.width,-i,+i),r=jt(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Cn(s,r),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){Yf(t.key)&&t.preventDefault();let[e,i]=yf(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new Cn(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){let[e,i]=yf(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}},Eu=class{constructor(t,e){var i,s;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=Wr.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Nl(t,{viewProps:this.viewProps}):null;let r=new Mu(t,{layout:e.pickerLayout,props:new Lt({invertsY:ae(e.invertsY),max:ae(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.textC_=new Qr(t,{assembly:_m,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new yu(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(s=this.view.buttonElement)===null||s===void 0||s.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Xs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),$u(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;let e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;let e=this.popC_.view.element,i=zf(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!qu(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}};function aw(n){return Cn.isObject(n)?new Cn(n.x,n.y):new Cn}function lw(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function cw(n,t){return new jr({assembly:_m,components:[Yn(Object.assign(Object.assign({},n),n.x),t.x),Yn(Object.assign(Object.assign({},n),n.y),t.y)]})}function wf(n,t){var e,i;if(!ie(n.min)||!ie(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));let s=Df(n);return Math.max(Math.abs(s)*10,Math.abs(t)*10)}function hw(n,t){var e,i;let s=wf(Ki(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),r=wf(Ki(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(s,r)}function uw(n){if(!("y"in n))return!1;let t=n.y;return t&&"inverted"in t?!!t.inverted:!1}var dw=Be({id:"input-point2d",type:"input",accept:(n,t)=>{if(!Cn.isObject(n))return null;let e=he(t,i=>Object.assign(Object.assign({},$r(i)),{expanded:i.optional.boolean,picker:i.optional.custom(Zf),readonly:i.optional.constant(!1),x:i.optional.custom(bi),y:i.optional.object(Object.assign(Object.assign({},$r(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>aw,constraint:n=>cw(n.params,n.initialValue),equals:Cn.equals,writer:()=>lw},controller:n=>{var t,e;let i=n.document,s=n.value,r=n.constraint,o=[n.params.x,n.params.y];return new Eu(i,{axes:s.rawValue.getComponents().map((a,l)=>{var c;return Xu({constraint:r.components[l],initialValue:a,params:Ki(n.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:uw(n.params),max:hw(n.params,s.rawValue),parser:$n,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:s,viewProps:n.viewProps})}}),yi=class{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(ie(t))return!1;let e=t.x,i=t.y,s=t.z;return!(typeof e!="number"||typeof i!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}},xm={toComponents:n=>n.getComponents(),fromComponents:n=>new yi(...n)};function pw(n){return yi.isObject(n)?new yi(n.x,n.y,n.z):new yi}function fw(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function mw(n,t){return new jr({assembly:xm,components:[Yn(Object.assign(Object.assign({},n),n.x),t.x),Yn(Object.assign(Object.assign({},n),n.y),t.y),Yn(Object.assign(Object.assign({},n),n.z),t.z)]})}var gw=Be({id:"input-point3d",type:"input",accept:(n,t)=>{if(!yi.isObject(n))return null;let e=he(t,i=>Object.assign(Object.assign({},$r(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(bi),y:i.optional.custom(bi),z:i.optional.custom(bi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>pw,constraint:n=>mw(n.params,n.initialValue),equals:yi.equals,writer:n=>fw},controller:n=>{let t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new Qr(n.document,{assembly:xm,axes:t.rawValue.getComponents().map((s,r)=>{var o;return Xu({constraint:e.components[r],initialValue:s,params:Ki(n.params,(o=i[r])!==null&&o!==void 0?o:{})})}),parser:$n,value:t,viewProps:n.viewProps})}}),wi=class{constructor(t=0,e=0,i=0,s=0){this.x=t,this.y=e,this.z=i,this.w=s}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(ie(t))return!1;let e=t.x,i=t.y,s=t.z,r=t.w;return!(typeof e!="number"||typeof i!="number"||typeof s!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}},bm={toComponents:n=>n.getComponents(),fromComponents:n=>new wi(...n)};function vw(n){return wi.isObject(n)?new wi(n.x,n.y,n.z,n.w):new wi}function _w(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function xw(n,t){return new jr({assembly:bm,components:[Yn(Object.assign(Object.assign({},n),n.x),t.x),Yn(Object.assign(Object.assign({},n),n.y),t.y),Yn(Object.assign(Object.assign({},n),n.z),t.z),Yn(Object.assign(Object.assign({},n),n.w),t.w)]})}var bw=Be({id:"input-point4d",type:"input",accept:(n,t)=>{if(!wi.isObject(n))return null;let e=he(t,i=>Object.assign(Object.assign({},$r(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(bi),x:i.optional.custom(bi),y:i.optional.custom(bi),z:i.optional.custom(bi)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>vw,constraint:n=>xw(n.params,n.initialValue),equals:wi.equals,writer:n=>_w},controller:n=>{let t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new Qr(n.document,{assembly:bm,axes:t.rawValue.getComponents().map((s,r)=>{var o;return Xu({constraint:e.components[r],initialValue:s,params:Ki(n.params,(o=i[r])!==null&&o!==void 0?o:{})})}),parser:$n,value:t,viewProps:n.viewProps})}});function yw(n){let t=[],e=Ju(n.options);return e&&t.push(e),new ji(t)}var ww=Be({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;let e=he(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(no)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>qf,constraint:n=>yw(n.params),writer:n=>io},controller:n=>{let t=n.document,e=n.value,i=n.constraint,s=i&&Ll(i,Qi);return s?new Rn(t,{props:new Lt({options:s.values.value("options")}),value:e,viewProps:n.viewProps}):new ts(t,{parser:r=>r,props:Lt.fromObject({formatter:Qh}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof Rn?new Yr(n.controller):null}}),ro={monitor:{defaultInterval:200,defaultRows:3}},Mf=Wt("mll"),Su=class{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Mf()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("textarea");i.classList.add(Mf("i")),i.style.height=`calc(var(${$f("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){let t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(s=>{s!==void 0&&i.push(this.formatter_(s))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}},to=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Su(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}},Ef=Wt("sgl"),Au=class{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(Ef()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("input");i.classList.add(Ef("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){let t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}},eo=class{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new Au(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}},Mw=Be({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;let e=he(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Xf},controller:n=>{var t;return n.value.rawValue.length===1?new eo(n.document,{formatter:ff,value:n.value,viewProps:n.viewProps}):new to(n.document,{formatter:ff,rows:(t=n.params.rows)!==null&&t!==void 0?t:ro.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}}),Tu=class extends Ji{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}},xi=Wt("grl"),Cu=class{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(xi()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);let i=t.createElementNS(Tn,"svg");i.classList.add(xi("g")),i.style.height=`calc(var(${$f("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;let s=t.createElementNS(Tn,"polyline");this.svgElem_.appendChild(s),this.lineElem_=s;let r=t.createElement("div");r.classList.add(xi("t"),Wt("tt")()),this.element.appendChild(r),this.tooltipElem_=r,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){let{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,s=this.props_.get("min"),r=this.props_.get("max"),o=[];this.value.rawValue.forEach((u,p)=>{if(u===void 0)return;let m=jt(p,0,i,0,t),v=jt(u,s,r,e,0);o.push([m,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));let a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(xi("t","a"));return}let c=jt(this.cursor_.rawValue,0,i,0,t),h=jt(l,s,r,e,0);a.style.left=`${c}px`,a.style.top=`${h}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(xi("t","a"))||(a.classList.add(xi("t","a"),xi("t","in")),Sl(a),a.classList.remove(xi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}},Ol=class{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=ae(-1),this.view=new Cu(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!qu(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{let i=new ti(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return Ze(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return Je(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){let{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(jt(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(jt(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}};function Pu(n){return ie(n.format)?We(2):n.format}function Ew(n){var t;return n.value.rawValue.length===1?new eo(n.document,{formatter:Pu(n.params),value:n.value,viewProps:n.viewProps}):new to(n.document,{formatter:Pu(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:ro.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function Sw(n){var t,e,i;return new Ol(n.document,{formatter:Pu(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:ro.monitor.defaultRows,props:Lt.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function Sf(n){return n.view==="graph"}var Aw=Be({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;let e=he(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>Sf(n)?64:1,reader:n=>Rf},controller:n=>Sf(n.params)?Sw(n):Ew(n),api:n=>n.controller.valueController instanceof Ol?new Tu(n.controller):null}),Tw=Be({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;let e=he(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>qf},controller:n=>{var t;let e=n.value;return e.rawValue.length>1||n.params.multiline?new to(n.document,{formatter:Qh,rows:(t=n.params.rows)!==null&&t!==void 0?t:ro.monitor.defaultRows,value:e,viewProps:n.viewProps}):new eo(n.document,{formatter:Qh,value:e,viewProps:n.viewProps})}}),Ru=class{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}},Iu=class{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}};function Cw(n,t){var e;let i=n.accept(t.target.read(),t.params);if(ie(i))return null;let s={target:t.target,initialValue:i.initialValue,params:i.params},r=he(t.params,u=>({disabled:u.optional.boolean,hidden:u.optional.boolean,label:u.optional.string,tag:u.optional.string})),o=n.binding.reader(s),a=n.binding.constraint?n.binding.constraint(s):void 0,l=new Iu({reader:o,target:t.target,writer:n.binding.writer(s)}),c=new Ch(ae(o(i.initialValue),{constraint:a,equals:n.binding.equals}),l),h=n.controller({constraint:a,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:jn.create({disabled:r==null?void 0:r.disabled,hidden:r==null?void 0:r.hidden})});return new Rh(t.document,{blade:Ws(),props:Lt.fromObject({label:"label"in t.params?(e=r==null?void 0:r.label)!==null&&e!==void 0?e:null:t.target.key}),tag:r==null?void 0:r.tag,value:c,valueController:h})}var Du=class{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}};function Pw(n,t){return t===0?new Kh:new $h(n,t!=null?t:ro.monitor.defaultInterval)}function Rw(n,t){var e,i,s;let r=n.accept(t.target.read(),t.params);if(ie(r))return null;let o={target:t.target,initialValue:r.initialValue,params:r.params},a=he(t.params,p=>({bufferSize:p.optional.number,disabled:p.optional.boolean,hidden:p.optional.boolean,interval:p.optional.number,label:p.optional.string})),l=n.binding.reader(o),c=(i=(e=a==null?void 0:a.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(r.params))!==null&&i!==void 0?i:1,h=new Ih({binding:new Du({reader:l,target:t.target}),bufferSize:c,ticker:Pw(t.document,a==null?void 0:a.interval)}),u=n.controller({document:t.document,params:r.params,value:h,viewProps:jn.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return u.viewProps.bindDisabled(h.ticker),u.viewProps.handleDispose(()=>{h.ticker.dispose()}),new Dh(t.document,{blade:Ws(),props:Lt.fromObject({label:"label"in t.params?(s=a==null?void 0:a.label)!==null&&s!==void 0?s:null:t.target.key}),value:h,valueController:u})}var Lu=class{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!Jb(e.core))throw we.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((s,r)=>s!=null?s:Cw(r,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((s,r)=>s!=null?s:Rw(r,{document:t,params:i,target:e}),null)}createBinding(t,e,i){let s=e.read();if(ie(s))throw new we({context:{key:e.key},type:"nomatchingcontroller"});let r=this.createInput_(t,e,i);if(r)return r;let o=this.createMonitor_(t,e,i);if(o)return o;throw new we({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){let i=this.pluginsMap_.blades.reduce((s,r)=>s!=null?s:Xb(r,{document:t,params:e}),null);if(!i)throw new we({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){let e=this.pluginsMap_.inputs.reduce((i,s)=>{var r,o;return i||((o=(r=s.api)===null||r===void 0?void 0:r.call(s,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e!=null?e:new Ji(t))}createMonitorBindingApi_(t){let e=this.pluginsMap_.monitors.reduce((i,s)=>{var r,o;return i||((o=(r=s.api)===null||r===void 0?void 0:r.call(s,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e!=null?e:new Ji(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(Tb(t))return this.createInputBindingApi_(t);if(Db(t))return this.createMonitorBindingApi_(t);throw we.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(Ab(t))return this.createBindingApi(t);let e=this.pluginsMap_.blades.reduce((i,s)=>i!=null?i:s.api({controller:t,pool:this}),null);if(!e)throw we.shouldNeverHappen();return this.apiCache_.add(t,e)}},Iw=new Ru;function Dw(){let n=new Lu(Iw);return[dw,gw,bw,ww,ow,iw,nw,Jy,Qb,Mw,Tw,Aw,Nb,Gb,Wf].forEach(t=>{n.register("core",t)}),n}var Nu=class extends Zn{constructor(t){super(t),this.emitter_=new fe,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Zi(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},Uu=class extends Zn{},Ou=class extends Zn{constructor(t){super(t),this.emitter_=new fe,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Zi(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},Fu=class extends Zn{constructor(t){super(t),this.emitter_=new fe,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new Zi(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){let i=e.bind(this);return this.emitter_.on(t,s=>{i(s)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}},Lw=function(){return{id:"list",type:"blade",core:Gs,accept(n){let t=he(n,e=>({options:e.required.custom(no),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){let t=new Qi(Zu(n.params.options)),e=ae(n.params.value,{constraint:t}),i=new Rn(n.document,{props:new Lt({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Jn(n.document,{blade:n.blade,props:Lt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Jn)||!(n.controller.valueController instanceof Rn)?null:new Nu(n.controller)}}}(),Bu=class extends Il{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}},ku=class extends Xr{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}},Af=Wt("spr"),Vu=class{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Af()),e.viewProps.bindClassModifiers(this.element);let i=t.createElement("hr");i.classList.add(Af("r")),this.element.appendChild(i)}},Fl=class extends ks{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new Vu(t,{viewProps:e.viewProps})}))}},Nw={id:"separator",type:"blade",core:Gs,accept(n){let t=he(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new Fl(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof Fl?new Uu(n.controller):null}},Uw={id:"slider",type:"blade",core:Gs,accept(n){let t=he(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;let i=(t=n.params.value)!==null&&t!==void 0?t:0,s=new $i({max:n.params.max,min:n.params.min}),r=ae(i,{constraint:s}),o=new Vs(n.document,Object.assign(Object.assign({},Kf({formatter:(e=n.params.format)!==null&&e!==void 0?e:ub,keyScale:ae(1),max:s.values.value("max"),min:s.values.value("min"),pointerScale:Lf(n.params,i)})),{parser:$n,value:r,viewProps:n.viewProps}));return new Jn(n.document,{blade:n.blade,props:Lt.fromObject({label:n.params.label}),value:r,valueController:o})},api(n){return!(n.controller instanceof Jn)||!(n.controller.valueController instanceof Vs)?null:new Ou(n.controller)}},Ow=function(){return{id:"text",type:"blade",core:Gs,accept(n){let t=he(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;let e=ae(n.params.value),i=new ts(n.document,{parser:n.params.parse,props:Lt.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:s=>String(s)}),value:e,viewProps:n.viewProps});return new Jn(n.document,{blade:n.blade,props:Lt.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Jn)||!(n.controller.valueController instanceof ts)?null:new Fu(n.controller)}}}();function Fw(n){let t=n.createElement("div");return t.classList.add(Wt("dfw")()),n.body&&n.body.appendChild(t),t}function Bw(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;let i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}var Bl=class extends Bu{constructor(t){var e,i;let s=t!=null?t:{},r=(e=s.document)!==null&&e!==void 0?e:xb(),o=Dw(),a=new ku(r,{expanded:s.expanded,blade:Ws(),props:Lt.fromObject({title:s.title}),viewProps:jn.create()});super(a,o),this.pool_=o,this.containerElem_=(i=s.container)!==null&&i!==void 0?i:Fw(r),this.containerElem_.appendChild(this.element),this.doc_=r,this.usesDefaultWrapper_=!s.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw we.alreadyDisposed();return this.doc_}dispose(){let t=this.containerElem_;if(!t)throw we.alreadyDisposed();if(this.usesDefaultWrapper_){let e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&Bw(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[Lw,Nw,Uw,Wf,Ow]})}},qT=new Rl("4.0.5");var kw=Math.PI/180,Vw=180/Math.PI;function ym(n,t=16/9){return Math.atan(Math.tan(n*kw*.5)/t)*Vw*2}function wm(n,t=".png"){let e=`${document.baseURI}textures/skies/${n}/`;return[e+"right"+t,e+"left"+t,e+"top"+t,e+"bottom"+t,e+"front"+t,e+"back"+t]}function zw(){let n=new Map,t=new Es,e=new _r(t),i=new vr(t);return new Promise((s,r)=>{t.onLoad=()=>s(n),t.onError=o=>r(new Error(`Failed to load ${o}`)),i.load(wm("space",".jpg"),o=>{o.colorSpace=Ee,n.set("sky",o)}),e.load("textures/checkerboard.png",o=>{o.wrapS=o.wrapT=vs,o.colorSpace=Ee,n.set("checkerboard",o)})})}window.addEventListener("load",()=>void zw().then(n=>{var I;(I=document.querySelector(".loading"))==null||I.classList.add("hidden");let t=new Za({powerPreference:"high-performance",antialias:!0,stencil:!1,depth:!0});t.toneMapping=ha,t.debug.checkShaderErrors=window.location.hostname==="localhost",t.setClearColor(0,0);let e=document.querySelector(".viewport");e.append(t.domElement);let i=new cr,s=n.get("sky");i.fog=new lr(0,.05),i.background=s;let r=new Pe,{position:o,quaternion:a}=r,l=new Nr(o,a,t.domElement),c=l.settings;c.general.mode="third-person",c.pointer.behaviour="default",c.zoom.setRange(.25,3),c.rotation.sensitivity=2.2,c.rotation.damping=.1,c.rotation.minPolarAngle=Number.NEGATIVE_INFINITY,c.rotation.maxPolarAngle=Number.POSITIVE_INFINITY,c.translation.sensitivity=1,c.translation.damping=.1,c.zoom.sensitivity=.1,c.zoom.damping=.2;let h=new wn;h.min.set(-2,0,-4),h.max.set(2,2,4);let u=new xr(h);u.visible=!1,i.add(u);let p=P=>h.clampPoint(P,P),m=n.get("checkerboard");m.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),m.repeat.set(1e3,1e3);let v=new Ue(new Oi(1e3,1e3,4,4),new fr({blending:br,side:sn,transparent:!0,color:16777215,roughness:0,metalness:1,envMap:s,map:m}));v.rotation.x=-Math.PI*.5;let x=new Ue(new pr(.01,16,16),new Ui({color:16711680}));i.add(v),i.add(x),l.position.set(0,.67,2),l.target=x.position,l.target.set(0,.5,1);let f={orbitEnabled:!1,constraintEnabled:!1,rotation:{"min azim. angle":-Math.PI,"max azim. angle":Math.PI,"min polar angle":-Math.PI,"max polar angle":Math.PI}},d=new ja,S=new di(1,Math.PI/2,0);function E(P){d.update(P);let y=.5,b=S;b.theta-=d.getDelta()*.25,b.theta%=Math.PI*2,l.settings.general.mode==="third-person"?(l.target.setFromSpherical(b),l.target.y=y):(l.position.setFromSpherical(b),l.position.y=y)}let w=new Bl({title:"Settings",container:e.querySelector(".tp"),expanded:e.clientWidth>=800}),T=w.addFolder({title:"General"});T.addBinding(c.general,"mode",{options:Qa}).on("change",P=>void(x.visible=P.value==="third-person")),T=w.addFolder({title:"Pointer"}),T.addBinding(c.pointer,"behaviour",{options:tl}),T=w.addFolder({title:"Sensitivity"}),T.addBinding(c.rotation,"sensitivityX",{label:"rotation X",min:.1,max:3,step:.01}),T.addBinding(c.rotation,"sensitivityY",{label:"rotation Y",min:.1,max:3,step:.01}),T.addBinding(c.translation,"sensitivity",{label:"translation",min:.1,max:3,step:.01}),T.addBinding(c.translation,"boostMultiplier",{min:.1,max:4,step:.01}),T.addBinding(c.zoom,"sensitivity",{label:"zoom",min:.01,max:3,step:.01}),T=w.addFolder({title:"Damping"}),T.addBinding(c.rotation,"damping",{label:"rotation",min:0,max:1,step:.01}),T.addBinding(c.zoom,"damping",{label:"zoom",min:0,max:1,step:.01}),T.addBinding(c.translation,"damping",{label:"translation",min:0,max:1,step:.01}),T=w.addFolder({title:"Rotation",expanded:!1}),T.addBinding(c.rotation,"enabled"),T.addBinding(c.rotation,"pivotOffset"),T.addBinding(f.rotation,"min azim. angle",{min:-Math.PI,max:0,step:.001}).on("change",P=>{let y=P.value<=-Math.PI+.001?Number.NEGATIVE_INFINITY:P.value;c.rotation.minAzimuthalAngle=y}),T.addBinding(f.rotation,"max azim. angle",{min:0,max:Math.PI,step:.001}).on("change",P=>{let y=P.value>=Math.PI-.001?Number.POSITIVE_INFINITY:P.value;c.rotation.maxAzimuthalAngle=y}),T.addBinding(f.rotation,"min polar angle",{min:-Math.PI,max:0,step:.001}).on("change",P=>{let y=P.value<=-Math.PI+.001?Number.NEGATIVE_INFINITY:P.value;c.rotation.minPolarAngle=y}),T.addBinding(f.rotation,"max polar angle",{min:0,max:Math.PI,step:.001}).on("change",P=>{let y=P.value>=Math.PI-.001?Number.POSITIVE_INFINITY:P.value;c.rotation.maxPolarAngle=y}),T.addBinding(c.rotation,"invertedX"),T.addBinding(c.rotation,"invertedY"),T=w.addFolder({title:"Translation",expanded:!1}),T.addBinding(c.translation,"enabled").on("change",P=>{f.orbitEnabled&&(c.translation.enabled=!1)}),T.addBinding(c.translation,"axisWeights",{x:{min:0,max:1,step:1},y:{min:0,max:1,step:1},z:{min:0,max:1,step:1}}),T=w.addFolder({title:"Zooming",expanded:!1}),T.addBinding(c.zoom,"enabled"),T.addBinding(c.zoom,"inverted"),T.addBinding(c.zoom,"minDistance",{min:.1,max:1,step:.01}),T.addBinding(c.zoom,"maxDistance",{min:1,max:10,step:.01}),w.addButton({title:"save as JSON"}).on("click",()=>{let P=URL.createObjectURL(c.toBlob()),y=document.createElement("a");y.setAttribute("href",P),y.setAttribute("download","spatial-controls.json"),y.click(),URL.revokeObjectURL(P)}),w.addBinding(f,"orbitEnabled",{label:"orbit"}).on("change",P=>{c.translation.enabled=!P.value,d.reset()}),w.addBinding(f,"constraintEnabled",{label:"constrain"}).on("change",P=>{u.visible=P.value,P.value?l.constraints.add(p):l.constraints.delete(p)}),document.addEventListener("keyup",P=>{let y=new L,b=new L,R=e.querySelector(".tp");switch(P.key){case"h":P.preventDefault(),R==null||R.classList.toggle("hidden");break;case"c":console.log("Camera position",y.copy(l.position)),console.log("World direction",l.getViewDirection(b)),console.log("Target position",y.clone().add(b));break;case"i":console.log(t.info);break}});function C(){let P=e.clientWidth,y=e.clientHeight;r.aspect=P/y,r.fov=ym(90,Math.max(r.aspect,16/9)),r.updateProjectionMatrix(),t.setSize(P,y)}window.addEventListener("resize",C),C(),t.setAnimationLoop(P=>{f.orbitEnabled&&E(P),l.update(P),t.render(i,r)})}));})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

tweakpane/dist/tweakpane.js:
  (*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. *)
*/
