(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wa(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zm=Wa(Wm);function Cf(t){return!!t||t===""}function za(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Be(r)?Ym(r):za(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Be(t))return t;if(ke(t))return t}}const Vm=/;(?![^(]*\))/g,Km=/:(.+)/;function Ym(t){const e={};return t.split(Vm).forEach(n=>{if(n){const r=n.split(Km);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function le(t){let e="";if(Be(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const r=le(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const de=t=>Be(t)?t:t==null?"":Y(t)||ke(t)&&(t.toString===If||!G(t.toString))?JSON.stringify(t,Ef,2):String(t),Ef=(t,e)=>e&&e.__v_isRef?Ef(t,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:kf(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!Y(e)&&!Sf(e)?String(e):e,me={},ir=[],xt=()=>{},Gm=()=>!1,qm=/^on[^a-z]/,Ws=t=>qm.test(t),Va=t=>t.startsWith("onUpdate:"),qe=Object.assign,Ka=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qm=Object.prototype.hasOwnProperty,ne=(t,e)=>Qm.call(t,e),Y=Array.isArray,sr=t=>zs(t)==="[object Map]",kf=t=>zs(t)==="[object Set]",G=t=>typeof t=="function",Be=t=>typeof t=="string",Ya=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",xf=t=>ke(t)&&G(t.then)&&G(t.catch),If=Object.prototype.toString,zs=t=>If.call(t),Xm=t=>zs(t).slice(8,-1),Sf=t=>zs(t)==="[object Object]",Ga=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ss=Wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jm=/-(\w)/g,mr=Vs(t=>t.replace(Jm,(e,n)=>n?n.toUpperCase():"")),Zm=/\B([A-Z])/g,Hn=Vs(t=>t.replace(Zm,"-$1").toLowerCase()),Tf=Vs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Co=Vs(t=>t?`on${Tf(t)}`:""),si=(t,e)=>!Object.is(t,e),os=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},hs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dc;const ep=()=>dc||(dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class Af{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Pf(t){return new Af(t)}function tp(t,e=Nt){e&&e.active&&e.effects.push(t)}const qa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rf=t=>(t.w&mn)>0,Nf=t=>(t.n&mn)>0,np=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mn},rp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Rf(i)&&!Nf(i)?i.delete(t):e[n++]=i,i.w&=~mn,i.n&=~mn}e.length=n}},Vo=new WeakMap;let zr=0,mn=1;const Ko=30;let vt;const On=Symbol(""),Yo=Symbol("");class Qa{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tp(this,r)}run(){if(!this.active)return this.fn();let e=vt,n=an;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vt,vt=this,an=!0,mn=1<<++zr,zr<=Ko?np(this):hc(this),this.fn()}finally{zr<=Ko&&rp(this),mn=1<<--zr,vt=this.parent,an=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&(hc(this),this.onStop&&this.onStop(),this.active=!1)}}function hc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let an=!0;const Of=[];function Ar(){Of.push(an),an=!1}function Pr(){const t=Of.pop();an=t===void 0?!0:t}function ot(t,e,n){if(an&&vt){let r=Vo.get(t);r||Vo.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=qa()),Df(i)}}function Df(t,e){let n=!1;zr<=Ko?Nf(t)||(t.n|=mn,n=!Rf(t)):n=!t.has(vt),n&&(t.add(vt),vt.deps.push(t))}function zt(t,e,n,r,i,s){const o=Vo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Ga(n)&&a.push(o.get("length")):(a.push(o.get(On)),sr(t)&&a.push(o.get(Yo)));break;case"delete":Y(t)||(a.push(o.get(On)),sr(t)&&a.push(o.get(Yo)));break;case"set":sr(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&Go(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Go(qa(l))}}function Go(t,e){const n=Y(t)?t:[...t];for(const r of n)r.computed&&mc(r);for(const r of n)r.computed||mc(r)}function mc(t,e){(t!==vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ip=Wa("__proto__,__v_isRef,__isVue"),Mf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ya)),sp=Xa(),op=Xa(!1,!0),ap=Xa(!0),pc=lp();function lp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let s=0,o=this.length;s<o;s++)ot(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ar();const r=se(this)[e].apply(this,n);return Pr(),r}}),t}function Xa(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?kp:Uf:e?Bf:$f).get(r))return r;const o=Y(r);if(!t&&o&&ne(pc,i))return Reflect.get(pc,i,s);const a=Reflect.get(r,i,s);return(Ya(i)?Mf.has(i):ip(i))||(t||ot(r,"get",i),e)?a:Ae(a)?o&&Ga(i)?a:a.value:ke(a)?t?jf(a):Rr(a):a}}const cp=Lf(),up=Lf(!0);function Lf(t=!1){return function(n,r,i,s){let o=n[r];if(pr(o)&&Ae(o)&&!Ae(i))return!1;if(!t&&(!ms(i)&&!pr(i)&&(o=se(o),i=se(i)),!Y(n)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const a=Y(n)&&Ga(r)?Number(r)<n.length:ne(n,r),l=Reflect.set(n,r,i,s);return n===se(s)&&(a?si(i,o)&&zt(n,"set",r,i):zt(n,"add",r,i)),l}}function fp(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&zt(t,"delete",e,void 0),r}function dp(t,e){const n=Reflect.has(t,e);return(!Ya(e)||!Mf.has(e))&&ot(t,"has",e),n}function hp(t){return ot(t,"iterate",Y(t)?"length":On),Reflect.ownKeys(t)}const Ff={get:sp,set:cp,deleteProperty:fp,has:dp,ownKeys:hp},mp={get:ap,set(t,e){return!0},deleteProperty(t,e){return!0}},pp=qe({},Ff,{get:op,set:up}),Ja=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function Wi(t,e,n=!1,r=!1){t=t.__v_raw;const i=se(t),s=se(e);n||(e!==s&&ot(i,"get",e),ot(i,"get",s));const{has:o}=Ks(i),a=r?Ja:n?tl:oi;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,r=se(n),i=se(t);return e||(t!==i&&ot(r,"has",t),ot(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Vi(t,e=!1){return t=t.__v_raw,!e&&ot(se(t),"iterate",On),Reflect.get(t,"size",t)}function gc(t){t=se(t);const e=se(this);return Ks(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function _c(t,e){e=se(e);const n=se(this),{has:r,get:i}=Ks(n);let s=r.call(n,t);s||(t=se(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?si(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function vc(t){const e=se(this),{has:n,get:r}=Ks(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&zt(e,"delete",t,void 0),s}function yc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function Ki(t,e){return function(r,i){const s=this,o=s.__v_raw,a=se(o),l=e?Ja:t?tl:oi;return!t&&ot(a,"iterate",On),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Yi(t,e,n){return function(...r){const i=this.__v_raw,s=se(i),o=sr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Ja:e?tl:oi;return!e&&ot(s,"iterate",l?Yo:On),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function gp(){const t={get(s){return Wi(this,s)},get size(){return Vi(this)},has:zi,add:gc,set:_c,delete:vc,clear:yc,forEach:Ki(!1,!1)},e={get(s){return Wi(this,s,!1,!0)},get size(){return Vi(this)},has:zi,add:gc,set:_c,delete:vc,clear:yc,forEach:Ki(!1,!0)},n={get(s){return Wi(this,s,!0)},get size(){return Vi(this,!0)},has(s){return zi.call(this,s,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Ki(!0,!1)},r={get(s){return Wi(this,s,!0,!0)},get size(){return Vi(this,!0)},has(s){return zi.call(this,s,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Yi(s,!1,!1),n[s]=Yi(s,!0,!1),e[s]=Yi(s,!1,!0),r[s]=Yi(s,!0,!0)}),[t,n,e,r]}const[_p,vp,yp,bp]=gp();function Za(t,e){const n=e?t?bp:yp:t?vp:_p;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ne(n,i)&&i in r?n:r,i,s)}const wp={get:Za(!1,!1)},Cp={get:Za(!1,!0)},Ep={get:Za(!0,!1)},$f=new WeakMap,Bf=new WeakMap,Uf=new WeakMap,kp=new WeakMap;function xp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ip(t){return t.__v_skip||!Object.isExtensible(t)?0:xp(Xm(t))}function Rr(t){return pr(t)?t:el(t,!1,Ff,wp,$f)}function Sp(t){return el(t,!1,pp,Cp,Bf)}function jf(t){return el(t,!0,mp,Ep,Uf)}function el(t,e,n,r,i){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Ip(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ln(t){return pr(t)?ln(t.__v_raw):!!(t&&t.__v_isReactive)}function pr(t){return!!(t&&t.__v_isReadonly)}function ms(t){return!!(t&&t.__v_isShallow)}function Hf(t){return ln(t)||pr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function gr(t){return hs(t,"__v_skip",!0),t}const oi=t=>ke(t)?Rr(t):t,tl=t=>ke(t)?jf(t):t;function Wf(t){an&&vt&&(t=se(t),Df(t.dep||(t.dep=qa())))}function zf(t,e){t=se(t),t.dep&&Go(t.dep)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function K(t){return Vf(t,!1)}function Tp(t){return Vf(t,!0)}function Vf(t,e){return Ae(t)?t:new Ap(t,e)}class Ap{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:oi(e)}get value(){return Wf(this),this._value}set value(e){const n=this.__v_isShallow||ms(e)||pr(e);e=n?e:se(e),si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:oi(e),zf(this))}}function Z(t){return Ae(t)?t.value:t}const Pp={get:(t,e,n)=>Z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Kf(t){return ln(t)?t:new Proxy(t,Pp)}function Rp(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=Op(t,n);return e}class Np{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Op(t,e,n){const r=t[e];return Ae(r)?r:new Np(t,e,n)}var Yf;class Dp{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yf]=!1,this._dirty=!0,this.effect=new Qa(e,()=>{this._dirty||(this._dirty=!0,zf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=se(this);return Wf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Yf="__v_isReadonly";function Mp(t,e,n=!1){let r,i;const s=G(t);return s?(r=t,i=xt):(r=t.get,i=t.set),new Dp(r,i,s||!i,n)}function cn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ys(s,e,n)}return i}function It(t,e,n,r){if(G(t)){const s=cn(t,e,n,r);return s&&xf(s)&&s.catch(o=>{Ys(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(It(t[s],e,n,r));return i}function Ys(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){cn(l,null,10,[t,o,a]);return}}Lp(t,n,i,r)}function Lp(t,e,n,r=!0){console.error(t)}let ai=!1,qo=!1;const We=[];let Dt=0;const or=[];let Ut=null,Sn=0;const Gf=Promise.resolve();let nl=null;function rl(t){const e=nl||Gf;return t?e.then(this?t.bind(this):t):e}function Fp(t){let e=Dt+1,n=We.length;for(;e<n;){const r=e+n>>>1;li(We[r])<t?e=r+1:n=r}return e}function il(t){(!We.length||!We.includes(t,ai&&t.allowRecurse?Dt+1:Dt))&&(t.id==null?We.push(t):We.splice(Fp(t.id),0,t),qf())}function qf(){!ai&&!qo&&(qo=!0,nl=Gf.then(Xf))}function $p(t){const e=We.indexOf(t);e>Dt&&We.splice(e,1)}function Bp(t){Y(t)?or.push(...t):(!Ut||!Ut.includes(t,t.allowRecurse?Sn+1:Sn))&&or.push(t),qf()}function bc(t,e=ai?Dt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function Qf(t){if(or.length){const e=[...new Set(or)];if(or.length=0,Ut){Ut.push(...e);return}for(Ut=e,Ut.sort((n,r)=>li(n)-li(r)),Sn=0;Sn<Ut.length;Sn++)Ut[Sn]();Ut=null,Sn=0}}const li=t=>t.id==null?1/0:t.id,Up=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Xf(t){qo=!1,ai=!0,We.sort(Up);const e=xt;try{for(Dt=0;Dt<We.length;Dt++){const n=We[Dt];n&&n.active!==!1&&cn(n,null,14)}}finally{Dt=0,We.length=0,Qf(),ai=!1,nl=null,(We.length||or.length)&&Xf()}}function jp(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||me;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||me;d&&(i=n.map(m=>m.trim())),f&&(i=n.map(zo))}let a,l=r[a=Co(e)]||r[a=Co(mr(e))];!l&&s&&(l=r[a=Co(Hn(e))]),l&&It(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(c,t,6,i)}}function Jf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Jf(c,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ke(t)&&r.set(t,null),null):(Y(s)?s.forEach(l=>o[l]=null):qe(o,s),ke(t)&&r.set(t,o),o)}function Gs(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Hn(e))||ne(t,e))}let wt=null,qs=null;function ps(t){const e=wt;return wt=t,qs=t&&t.type.__scopeId||null,e}function Wn(t){qs=t}function zn(){qs=null}function ct(t,e=wt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ac(-1);const s=ps(e);let o;try{o=t(...i)}finally{ps(s),r._d&&Ac(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Eo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:g,inheritAttrs:_}=t;let b,v;const C=ps(t);try{if(n.shapeFlag&4){const j=i||r;b=Ot(u.call(j,j,f,s,m,d,g)),v=l}else{const j=e;b=Ot(j.length>1?j(s,{attrs:l,slots:a,emit:c}):j(s,null)),v=e.props?l:Hp(l)}}catch(j){Kr.length=0,Ys(j,t,1),b=ae(ci)}let M=b;if(v&&_!==!1){const j=Object.keys(v),{shapeFlag:W}=M;j.length&&W&7&&(o&&j.some(Va)&&(v=Wp(v,o)),M=_r(M,v))}return n.dirs&&(M=_r(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),b=M,ps(C),b}const Hp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Wp=(t,e)=>{const n={};for(const r in t)(!Va(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zp(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wc(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Gs(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wc(r,o,c):!0:!!o;return!1}function wc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Gs(n,s))return!0}return!1}function Vp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Kp=t=>t.__isSuspense;function Yp(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Bp(t)}function as(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=je||wt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(r.proxy):e}}const Cc={};function st(t,e,n){return Zf(t,e,n)}function Zf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=me){const a=je;let l,c=!1,u=!1;if(Ae(t)?(l=()=>t.value,c=ms(t)):ln(t)?(l=()=>t,r=!0):Y(t)?(u=!0,c=t.some(v=>ln(v)||ms(v)),l=()=>t.map(v=>{if(Ae(v))return v.value;if(ln(v))return An(v);if(G(v))return cn(v,a,2)})):G(t)?e?l=()=>cn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),It(t,a,3,[d])}:l=xt,e&&r){const v=l;l=()=>An(v())}let f,d=v=>{f=b.onStop=()=>{cn(v,a,4)}};if(fi)return d=xt,e?n&&It(e,a,3,[l(),u?[]:void 0,d]):l(),xt;let m=u?[]:Cc;const g=()=>{if(!!b.active)if(e){const v=b.run();(r||c||(u?v.some((C,M)=>si(C,m[M])):si(v,m)))&&(f&&f(),It(e,a,3,[v,m===Cc?void 0:m,d]),m=v)}else b.run()};g.allowRecurse=!!e;let _;i==="sync"?_=g:i==="post"?_=()=>Ze(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),_=()=>il(g));const b=new Qa(l,_);return e?n?g():m=b.run():i==="post"?Ze(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Ka(a.scope.effects,b)}}function Gp(t,e,n){const r=this.proxy,i=Be(t)?t.includes(".")?ed(r,t):()=>r[t]:t.bind(r,r);let s;G(e)?s=e:(s=e.handler,n=e);const o=je;vr(this);const a=Zf(i,s.bind(r),n);return o?vr(o):Dn(),a}function ed(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function An(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))An(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)An(t[n],e);else if(kf(t)||sr(t))t.forEach(n=>{An(n,e)});else if(Sf(t))for(const n in t)An(t[n],e);return t}function Ti(t){return G(t)?{setup:t,name:t.name}:t}const ls=t=>!!t.type.__asyncLoader,td=t=>t.type.__isKeepAlive;function qp(t,e){nd(t,"a",e)}function Qp(t,e){nd(t,"da",e)}function nd(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qs(e,r,n),n){let i=n.parent;for(;i&&i.parent;)td(i.parent.vnode)&&Xp(r,e,n,i),i=i.parent}}function Xp(t,e,n,r){const i=Qs(e,t,r,!0);sl(()=>{Ka(r[e],i)},n)}function Qs(t,e,n=je,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ar(),vr(n);const a=It(e,n,t,o);return Dn(),Pr(),a});return r?i.unshift(s):i.push(s),s}}const qt=t=>(e,n=je)=>(!fi||t==="sp")&&Qs(t,(...r)=>e(...r),n),Jp=qt("bm"),rd=qt("m"),Zp=qt("bu"),eg=qt("u"),tg=qt("bum"),sl=qt("um"),ng=qt("sp"),rg=qt("rtg"),ig=qt("rtc");function sg(t,e=je){Qs("ec",t,e)}function gs(t,e){const n=wt;if(n===null)return t;const r=Js(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=me]=e[s];G(o)&&(o={mounted:o,updated:o}),o.deep&&An(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Cn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Ar(),It(l,n,8,[t.el,a,t,e]),Pr())}}const og=Symbol();function id(t,e,n,r){let i;const s=n&&n[r];if(Y(t)||Be(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ke(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Qo=t=>t?pd(t)?Js(t)||t.proxy:Qo(t.parent):null,_s=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qo(t.parent),$root:t=>Qo(t.root),$emit:t=>t.emit,$options:t=>ol(t),$forceUpdate:t=>t.f||(t.f=()=>il(t.update)),$nextTick:t=>t.n||(t.n=rl.bind(t.proxy)),$watch:t=>Gp.bind(t)}),ag={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==me&&ne(r,e))return o[e]=1,r[e];if(i!==me&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,s[e];if(n!==me&&ne(n,e))return o[e]=4,n[e];Xo&&(o[e]=0)}}const u=_s[e];let f,d;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==me&&ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==me&&ne(i,e)?(i[e]=n,!0):r!==me&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==me&&ne(t,o)||e!==me&&ne(e,o)||(a=s[0])&&ne(a,o)||ne(r,o)||ne(_s,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Xo=!0;function lg(t){const e=ol(t),n=t.proxy,r=t.ctx;Xo=!1,e.beforeCreate&&Ec(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:b,beforeDestroy:v,beforeUnmount:C,destroyed:M,unmounted:j,render:W,renderTracked:oe,renderTriggered:z,errorCaptured:J,serverPrefetch:Ce,expose:Me,inheritAttrs:Qe,components:lt,directives:Jt,filters:nt}=e;if(c&&cg(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ue=o[pe];G(ue)&&(r[pe]=ue.bind(n))}if(i){const pe=i.call(n,n);ke(pe)&&(t.data=Rr(pe))}if(Xo=!0,s)for(const pe in s){const ue=s[pe],pt=G(ue)?ue.bind(n,n):G(ue.get)?ue.get.bind(n,n):xt,wn=!G(ue)&&G(ue.set)?ue.set.bind(n):xt,gt=Ee({get:pt,set:wn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>gt.value,set:Xe=>gt.value=Xe})}if(a)for(const pe in a)sd(a[pe],r,n,pe);if(l){const pe=G(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ue=>{as(ue,pe[ue])})}u&&Ec(u,t,"c");function Pe(pe,ue){Y(ue)?ue.forEach(pt=>pe(pt.bind(n))):ue&&pe(ue.bind(n))}if(Pe(Jp,f),Pe(rd,d),Pe(Zp,m),Pe(eg,g),Pe(qp,_),Pe(Qp,b),Pe(sg,J),Pe(ig,oe),Pe(rg,z),Pe(tg,C),Pe(sl,j),Pe(ng,Ce),Y(Me))if(Me.length){const pe=t.exposed||(t.exposed={});Me.forEach(ue=>{Object.defineProperty(pe,ue,{get:()=>n[ue],set:pt=>n[ue]=pt})})}else t.exposed||(t.exposed={});W&&t.render===xt&&(t.render=W),Qe!=null&&(t.inheritAttrs=Qe),lt&&(t.components=lt),Jt&&(t.directives=Jt)}function cg(t,e,n=xt,r=!1){Y(t)&&(t=Jo(t));for(const i in t){const s=t[i];let o;ke(s)?"default"in s?o=Lt(s.from||i,s.default,!0):o=Lt(s.from||i):o=Lt(s),Ae(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Ec(t,e,n){It(Y(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sd(t,e,n,r){const i=r.includes(".")?ed(n,r):()=>n[r];if(Be(t)){const s=e[t];G(s)&&st(i,s)}else if(G(t))st(i,t.bind(n));else if(ke(t))if(Y(t))t.forEach(s=>sd(s,e,n,r));else{const s=G(t.handler)?t.handler.bind(n):e[t.handler];G(s)&&st(i,s,t)}}function ol(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>vs(l,c,o,!0)),vs(l,e,o)),ke(e)&&s.set(e,l),l}function vs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&vs(t,s,n,!0),i&&i.forEach(o=>vs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ug[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ug={data:kc,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:kn,directives:kn,watch:dg,provide:kc,inject:fg};function kc(t,e){return e?t?function(){return qe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function fg(t,e){return kn(Jo(t),Jo(e))}function Jo(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?qe(qe(Object.create(null),t),e):e}function dg(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=ze(t[r],e[r]);return n}function hg(t,e,n,r=!1){const i={},s={};hs(s,Xs,1),t.propsDefaults=Object.create(null),od(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Sp(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function mg(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=se(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Gs(t.emitsOptions,d))continue;const m=e[d];if(l)if(ne(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=mr(d);i[g]=Zo(l,a,g,m,t,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{od(t,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!ne(e,f)&&((u=Hn(f))===f||!ne(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Zo(l,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ne(e,f)&&!0)&&(delete s[f],c=!0)}c&&zt(t,"set","$attrs")}function od(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ss(l))continue;const c=e[l];let u;i&&ne(i,u=mr(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=se(n),c=a||me;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Zo(i,l,f,c[f],t,!ne(c,f))}}return o}function Zo(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(vr(i),r=c[n]=l.call(null,e),Dn())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function ad(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!G(t)){const u=f=>{l=!0;const[d,m]=ad(f,e,!0);qe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ke(t)&&r.set(t,ir),ir;if(Y(s))for(let u=0;u<s.length;u++){const f=mr(s[u]);xc(f)&&(o[f]=me)}else if(s)for(const u in s){const f=mr(u);if(xc(f)){const d=s[u],m=o[f]=Y(d)||G(d)?{type:d}:d;if(m){const g=Tc(Boolean,m.type),_=Tc(String,m.type);m[0]=g>-1,m[1]=_<0||g<_,(g>-1||ne(m,"default"))&&a.push(f)}}}const c=[o,a];return ke(t)&&r.set(t,c),c}function xc(t){return t[0]!=="$"}function Ic(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Sc(t,e){return Ic(t)===Ic(e)}function Tc(t,e){return Y(e)?e.findIndex(n=>Sc(n,t)):G(e)&&Sc(e,t)?0:-1}const ld=t=>t[0]==="_"||t==="$stable",al=t=>Y(t)?t.map(Ot):[Ot(t)],pg=(t,e,n)=>{if(e._n)return e;const r=ct((...i)=>al(e(...i)),n);return r._c=!1,r},cd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(ld(i))continue;const s=t[i];if(G(s))e[i]=pg(i,s,r);else if(s!=null){const o=al(s);e[i]=()=>o}}},ud=(t,e)=>{const n=al(e);t.slots.default=()=>n},gg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),hs(e,"_",n)):cd(e,t.slots={})}else t.slots={},e&&ud(t,e);hs(t.slots,Xs,1)},_g=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=me;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(qe(i,e),!n&&a===1&&delete i._):(s=!e.$stable,cd(e,i)),o=e}else e&&(ud(t,e),o={default:1});if(s)for(const a in i)!ld(a)&&!(a in o)&&delete i[a]};function fd(){return{app:null,config:{isNativeTag:Gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vg=0;function yg(t,e){return function(r,i=null){G(r)||(r=Object.assign({},r)),i!=null&&!ke(i)&&(i=null);const s=fd(),o=new Set;let a=!1;const l=s.app={_uid:vg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:$g,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=ae(r,i);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Js(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ea(t,e,n,r,i=!1){if(Y(t)){t.forEach((d,m)=>ea(d,e&&(Y(e)?e[m]:e),n,r,i));return}if(ls(r)&&!i)return;const s=r.shapeFlag&4?Js(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===me?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Be(c)?(u[c]=null,ne(f,c)&&(f[c]=null)):Ae(c)&&(c.value=null)),G(l))cn(l,a,12,[o,u]);else{const d=Be(l),m=Ae(l);if(d||m){const g=()=>{if(t.f){const _=d?ne(f,l)?f[l]:u[l]:l.value;i?Y(_)&&Ka(_,s):Y(_)?_.includes(s)||_.push(s):d?(u[l]=[s],ne(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ne(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ze(g,n)):g()}}}const Ze=Yp;function bg(t){return wg(t)}function wg(t,e){const n=ep();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=xt,insertStaticContent:g}=t,_=(h,p,w,E=null,x=null,A=null,N=!1,T=null,P=!!p.dynamicChildren)=>{if(h===p)return;h&&!$r(h,p)&&(E=R(h),Xe(h,x,A,!0),h=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:I,ref:B,shapeFlag:L}=p;switch(I){case ll:b(h,p,w,E);break;case ci:v(h,p,w,E);break;case cs:h==null&&C(p,w,E,N);break;case it:lt(h,p,w,E,x,A,N,T,P);break;default:L&1?W(h,p,w,E,x,A,N,T,P):L&6?Jt(h,p,w,E,x,A,N,T,P):(L&64||L&128)&&I.process(h,p,w,E,x,A,N,T,P,re)}B!=null&&x&&ea(B,h&&h.ref,A,p||h,!p)},b=(h,p,w,E)=>{if(h==null)r(p.el=a(p.children),w,E);else{const x=p.el=h.el;p.children!==h.children&&c(x,p.children)}},v=(h,p,w,E)=>{h==null?r(p.el=l(p.children||""),w,E):p.el=h.el},C=(h,p,w,E)=>{[h.el,h.anchor]=g(h.children,p,w,E,h.el,h.anchor)},M=({el:h,anchor:p},w,E)=>{let x;for(;h&&h!==p;)x=d(h),r(h,w,E),h=x;r(p,w,E)},j=({el:h,anchor:p})=>{let w;for(;h&&h!==p;)w=d(h),i(h),h=w;i(p)},W=(h,p,w,E,x,A,N,T,P)=>{N=N||p.type==="svg",h==null?oe(p,w,E,x,A,N,T,P):Ce(h,p,x,A,N,T,P)},oe=(h,p,w,E,x,A,N,T)=>{let P,I;const{type:B,props:L,shapeFlag:U,transition:V,dirs:te}=h;if(P=h.el=o(h.type,A,L&&L.is,L),U&8?u(P,h.children):U&16&&J(h.children,P,null,E,x,A&&B!=="foreignObject",N,T),te&&Cn(h,null,E,"created"),L){for(const fe in L)fe!=="value"&&!ss(fe)&&s(P,fe,null,L[fe],A,h.children,E,x,O);"value"in L&&s(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Rt(I,E,h)}z(P,h,h.scopeId,N,E),te&&Cn(h,null,E,"beforeMount");const ge=(!x||x&&!x.pendingBranch)&&V&&!V.persisted;ge&&V.beforeEnter(P),r(P,p,w),((I=L&&L.onVnodeMounted)||ge||te)&&Ze(()=>{I&&Rt(I,E,h),ge&&V.enter(P),te&&Cn(h,null,E,"mounted")},x)},z=(h,p,w,E,x)=>{if(w&&m(h,w),E)for(let A=0;A<E.length;A++)m(h,E[A]);if(x){let A=x.subTree;if(p===A){const N=x.vnode;z(h,N,N.scopeId,N.slotScopeIds,x.parent)}}},J=(h,p,w,E,x,A,N,T,P=0)=>{for(let I=P;I<h.length;I++){const B=h[I]=T?nn(h[I]):Ot(h[I]);_(null,B,p,w,E,x,A,N,T)}},Ce=(h,p,w,E,x,A,N)=>{const T=p.el=h.el;let{patchFlag:P,dynamicChildren:I,dirs:B}=p;P|=h.patchFlag&16;const L=h.props||me,U=p.props||me;let V;w&&En(w,!1),(V=U.onVnodeBeforeUpdate)&&Rt(V,w,p,h),B&&Cn(p,h,w,"beforeUpdate"),w&&En(w,!0);const te=x&&p.type!=="foreignObject";if(I?Me(h.dynamicChildren,I,T,w,E,te,A):N||ue(h,p,T,null,w,E,te,A,!1),P>0){if(P&16)Qe(T,p,L,U,w,E,x);else if(P&2&&L.class!==U.class&&s(T,"class",null,U.class,x),P&4&&s(T,"style",L.style,U.style,x),P&8){const ge=p.dynamicProps;for(let fe=0;fe<ge.length;fe++){const Re=ge[fe],_t=L[Re],qn=U[Re];(qn!==_t||Re==="value")&&s(T,Re,_t,qn,x,h.children,w,E,O)}}P&1&&h.children!==p.children&&u(T,p.children)}else!N&&I==null&&Qe(T,p,L,U,w,E,x);((V=U.onVnodeUpdated)||B)&&Ze(()=>{V&&Rt(V,w,p,h),B&&Cn(p,h,w,"updated")},E)},Me=(h,p,w,E,x,A,N)=>{for(let T=0;T<p.length;T++){const P=h[T],I=p[T],B=P.el&&(P.type===it||!$r(P,I)||P.shapeFlag&70)?f(P.el):w;_(P,I,B,null,E,x,A,N,!0)}},Qe=(h,p,w,E,x,A,N)=>{if(w!==E){if(w!==me)for(const T in w)!ss(T)&&!(T in E)&&s(h,T,w[T],null,N,p.children,x,A,O);for(const T in E){if(ss(T))continue;const P=E[T],I=w[T];P!==I&&T!=="value"&&s(h,T,I,P,N,p.children,x,A,O)}"value"in E&&s(h,"value",w.value,E.value)}},lt=(h,p,w,E,x,A,N,T,P)=>{const I=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:V}=p;V&&(T=T?T.concat(V):V),h==null?(r(I,w,E),r(B,w,E),J(p.children,w,B,x,A,N,T,P)):L>0&&L&64&&U&&h.dynamicChildren?(Me(h.dynamicChildren,U,w,x,A,N,T),(p.key!=null||x&&p===x.subTree)&&dd(h,p,!0)):ue(h,p,w,B,x,A,N,T,P)},Jt=(h,p,w,E,x,A,N,T,P)=>{p.slotScopeIds=T,h==null?p.shapeFlag&512?x.ctx.activate(p,w,E,N,P):nt(p,w,E,x,A,N,P):Le(h,p,P)},nt=(h,p,w,E,x,A,N)=>{const T=h.component=Ng(h,E,x);if(td(h)&&(T.ctx.renderer=re),Og(T),T.asyncDep){if(x&&x.registerDep(T,Pe),!h.el){const P=T.subTree=ae(ci);v(null,P,p,w)}return}Pe(T,h,p,w,x,A,N)},Le=(h,p,w)=>{const E=p.component=h.component;if(zp(h,p,w))if(E.asyncDep&&!E.asyncResolved){pe(E,p,w);return}else E.next=p,$p(E.update),E.update();else p.el=h.el,E.vnode=p},Pe=(h,p,w,E,x,A,N)=>{const T=()=>{if(h.isMounted){let{next:B,bu:L,u:U,parent:V,vnode:te}=h,ge=B,fe;En(h,!1),B?(B.el=te.el,pe(h,B,N)):B=te,L&&os(L),(fe=B.props&&B.props.onVnodeBeforeUpdate)&&Rt(fe,V,B,te),En(h,!0);const Re=Eo(h),_t=h.subTree;h.subTree=Re,_(_t,Re,f(_t.el),R(_t),h,x,A),B.el=Re.el,ge===null&&Vp(h,Re.el),U&&Ze(U,x),(fe=B.props&&B.props.onVnodeUpdated)&&Ze(()=>Rt(fe,V,B,te),x)}else{let B;const{el:L,props:U}=p,{bm:V,m:te,parent:ge}=h,fe=ls(p);if(En(h,!1),V&&os(V),!fe&&(B=U&&U.onVnodeBeforeMount)&&Rt(B,ge,p),En(h,!0),L&&q){const Re=()=>{h.subTree=Eo(h),q(L,h.subTree,h,x,null)};fe?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Re()):Re()}else{const Re=h.subTree=Eo(h);_(null,Re,w,E,h,x,A),p.el=Re.el}if(te&&Ze(te,x),!fe&&(B=U&&U.onVnodeMounted)){const Re=p;Ze(()=>Rt(B,ge,Re),x)}(p.shapeFlag&256||ge&&ls(ge.vnode)&&ge.vnode.shapeFlag&256)&&h.a&&Ze(h.a,x),h.isMounted=!0,p=w=E=null}},P=h.effect=new Qa(T,()=>il(I),h.scope),I=h.update=()=>P.run();I.id=h.uid,En(h,!0),I()},pe=(h,p,w)=>{p.component=h;const E=h.vnode.props;h.vnode=p,h.next=null,mg(h,p.props,E,w),_g(h,p.children,w),Ar(),bc(),Pr()},ue=(h,p,w,E,x,A,N,T,P=!1)=>{const I=h&&h.children,B=h?h.shapeFlag:0,L=p.children,{patchFlag:U,shapeFlag:V}=p;if(U>0){if(U&128){wn(I,L,w,E,x,A,N,T,P);return}else if(U&256){pt(I,L,w,E,x,A,N,T,P);return}}V&8?(B&16&&O(I,x,A),L!==I&&u(w,L)):B&16?V&16?wn(I,L,w,E,x,A,N,T,P):O(I,x,A,!0):(B&8&&u(w,""),V&16&&J(L,w,E,x,A,N,T,P))},pt=(h,p,w,E,x,A,N,T,P)=>{h=h||ir,p=p||ir;const I=h.length,B=p.length,L=Math.min(I,B);let U;for(U=0;U<L;U++){const V=p[U]=P?nn(p[U]):Ot(p[U]);_(h[U],V,w,null,x,A,N,T,P)}I>B?O(h,x,A,!0,!1,L):J(p,w,E,x,A,N,T,P,L)},wn=(h,p,w,E,x,A,N,T,P)=>{let I=0;const B=p.length;let L=h.length-1,U=B-1;for(;I<=L&&I<=U;){const V=h[I],te=p[I]=P?nn(p[I]):Ot(p[I]);if($r(V,te))_(V,te,w,null,x,A,N,T,P);else break;I++}for(;I<=L&&I<=U;){const V=h[L],te=p[U]=P?nn(p[U]):Ot(p[U]);if($r(V,te))_(V,te,w,null,x,A,N,T,P);else break;L--,U--}if(I>L){if(I<=U){const V=U+1,te=V<B?p[V].el:E;for(;I<=U;)_(null,p[I]=P?nn(p[I]):Ot(p[I]),w,te,x,A,N,T,P),I++}}else if(I>U)for(;I<=L;)Xe(h[I],x,A,!0),I++;else{const V=I,te=I,ge=new Map;for(I=te;I<=U;I++){const rt=p[I]=P?nn(p[I]):Ot(p[I]);rt.key!=null&&ge.set(rt.key,I)}let fe,Re=0;const _t=U-te+1;let qn=!1,cc=0;const Fr=new Array(_t);for(I=0;I<_t;I++)Fr[I]=0;for(I=V;I<=L;I++){const rt=h[I];if(Re>=_t){Xe(rt,x,A,!0);continue}let Pt;if(rt.key!=null)Pt=ge.get(rt.key);else for(fe=te;fe<=U;fe++)if(Fr[fe-te]===0&&$r(rt,p[fe])){Pt=fe;break}Pt===void 0?Xe(rt,x,A,!0):(Fr[Pt-te]=I+1,Pt>=cc?cc=Pt:qn=!0,_(rt,p[Pt],w,null,x,A,N,T,P),Re++)}const uc=qn?Cg(Fr):ir;for(fe=uc.length-1,I=_t-1;I>=0;I--){const rt=te+I,Pt=p[rt],fc=rt+1<B?p[rt+1].el:E;Fr[I]===0?_(null,Pt,w,fc,x,A,N,T,P):qn&&(fe<0||I!==uc[fe]?gt(Pt,w,fc,2):fe--)}}},gt=(h,p,w,E,x=null)=>{const{el:A,type:N,transition:T,children:P,shapeFlag:I}=h;if(I&6){gt(h.component.subTree,p,w,E);return}if(I&128){h.suspense.move(p,w,E);return}if(I&64){N.move(h,p,w,re);return}if(N===it){r(A,p,w);for(let L=0;L<P.length;L++)gt(P[L],p,w,E);r(h.anchor,p,w);return}if(N===cs){M(h,p,w);return}if(E!==2&&I&1&&T)if(E===0)T.beforeEnter(A),r(A,p,w),Ze(()=>T.enter(A),x);else{const{leave:L,delayLeave:U,afterLeave:V}=T,te=()=>r(A,p,w),ge=()=>{L(A,()=>{te(),V&&V()})};U?U(A,te,ge):ge()}else r(A,p,w)},Xe=(h,p,w,E=!1,x=!1)=>{const{type:A,props:N,ref:T,children:P,dynamicChildren:I,shapeFlag:B,patchFlag:L,dirs:U}=h;if(T!=null&&ea(T,null,w,h,!0),B&256){p.ctx.deactivate(h);return}const V=B&1&&U,te=!ls(h);let ge;if(te&&(ge=N&&N.onVnodeBeforeUnmount)&&Rt(ge,p,h),B&6)k(h.component,w,E);else{if(B&128){h.suspense.unmount(w,E);return}V&&Cn(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,w,x,re,E):I&&(A!==it||L>0&&L&64)?O(I,p,w,!1,!0):(A===it&&L&384||!x&&B&16)&&O(P,p,w),E&&Gn(h)}(te&&(ge=N&&N.onVnodeUnmounted)||V)&&Ze(()=>{ge&&Rt(ge,p,h),V&&Cn(h,null,p,"unmounted")},w)},Gn=h=>{const{type:p,el:w,anchor:E,transition:x}=h;if(p===it){Hi(w,E);return}if(p===cs){j(h);return}const A=()=>{i(w),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:T}=x,P=()=>N(w,A);T?T(h.el,A,P):P()}else A()},Hi=(h,p)=>{let w;for(;h!==p;)w=d(h),i(h),h=w;i(p)},k=(h,p,w)=>{const{bum:E,scope:x,update:A,subTree:N,um:T}=h;E&&os(E),x.stop(),A&&(A.active=!1,Xe(N,h,p,w)),T&&Ze(T,p),Ze(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(h,p,w,E=!1,x=!1,A=0)=>{for(let N=A;N<h.length;N++)Xe(h[N],p,w,E,x)},R=h=>h.shapeFlag&6?R(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),$=(h,p,w)=>{h==null?p._vnode&&Xe(p._vnode,null,null,!0):_(p._vnode||null,h,p,null,null,null,w),bc(),Qf(),p._vnode=h},re={p:_,um:Xe,m:gt,r:Gn,mt:nt,mc:J,pc:ue,pbc:Me,n:R,o:t};let xe,q;return e&&([xe,q]=e(re)),{render:$,hydrate:xe,createApp:yg($,xe)}}function En({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dd(t,e,n=!1){const r=t.children,i=e.children;if(Y(r)&&Y(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=nn(i[s]),a.el=o.el),n||dd(o,a))}}function Cg(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Eg=t=>t.__isTeleport,it=Symbol(void 0),ll=Symbol(void 0),ci=Symbol(void 0),cs=Symbol(void 0),Kr=[];let Ct=null;function Ke(t=!1){Kr.push(Ct=t?null:[])}function kg(){Kr.pop(),Ct=Kr[Kr.length-1]||null}let ui=1;function Ac(t){ui+=t}function xg(t){return t.dynamicChildren=ui>0?Ct||ir:null,kg(),ui>0&&Ct&&Ct.push(t),t}function Ye(t,e,n,r,i,s){return xg(y(t,e,n,r,i,s,!0))}function ta(t){return t?t.__v_isVNode===!0:!1}function $r(t,e){return t.type===e.type&&t.key===e.key}const Xs="__vInternal",hd=({key:t})=>t!=null?t:null,us=({ref:t,ref_key:e,ref_for:n})=>t!=null?Be(t)||Ae(t)||G(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,r=0,i=null,s=t===it?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hd(e),ref:e&&us(e),scopeId:qs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(cl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),ui>0&&!o&&Ct&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ct.push(l),l}const ae=Ig;function Ig(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===og)&&(t=ci),ta(t)){const a=_r(t,e,!0);return n&&cl(a,n),ui>0&&!s&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(Fg(t)&&(t=t.__vccOpts),e){e=Sg(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=le(a)),ke(l)&&(Hf(l)&&!Y(l)&&(l=qe({},l)),e.style=za(l))}const o=Be(t)?1:Kp(t)?128:Eg(t)?64:ke(t)?4:G(t)?2:0;return y(t,e,n,r,i,o,s,!0)}function Sg(t){return t?Hf(t)||Xs in t?qe({},t):t:null}function _r(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Ag(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hd(a),ref:e&&e.ref?n&&i?Y(i)?i.concat(us(e)):[i,us(e)]:us(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_r(t.ssContent),ssFallback:t.ssFallback&&_r(t.ssFallback),el:t.el,anchor:t.anchor}}function ut(t=" ",e=0){return ae(ll,null,t,e)}function Tg(t,e){const n=ae(cs,null,t);return n.staticCount=e,n}function Ot(t){return t==null||typeof t=="boolean"?ae(ci):Y(t)?ae(it,null,t.slice()):typeof t=="object"?nn(t):ae(ll,null,String(t))}function nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_r(t)}function cl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),cl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Xs in e)?e._ctx=wt:i===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ag(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=le([e.class,r.class]));else if(i==="style")e.style=za([e.style,r.style]);else if(Ws(i)){const s=e[i],o=r[i];o&&s!==o&&!(Y(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Rt(t,e,n,r=null){It(t,e,7,[n,r])}const Pg=fd();let Rg=0;function Ng(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Pg,s={uid:Rg++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Af(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(r,i),emitsOptions:Jf(r,i),emit:null,emitted:null,propsDefaults:me,inheritAttrs:r.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jp.bind(null,s),t.ce&&t.ce(s),s}let je=null;const md=()=>je||wt,vr=t=>{je=t,t.scope.on()},Dn=()=>{je&&je.scope.off(),je=null};function pd(t){return t.vnode.shapeFlag&4}let fi=!1;function Og(t,e=!1){fi=e;const{props:n,children:r}=t.vnode,i=pd(t);hg(t,n,i,e),gg(t,r);const s=i?Dg(t,e):void 0;return fi=!1,s}function Dg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gr(new Proxy(t.ctx,ag));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Lg(t):null;vr(t),Ar();const s=cn(r,t,0,[t.props,i]);if(Pr(),Dn(),xf(s)){if(s.then(Dn,Dn),e)return s.then(o=>{Pc(t,o,e)}).catch(o=>{Ys(o,t,0)});t.asyncDep=s}else Pc(t,s,e)}else gd(t,e)}function Pc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Kf(e)),gd(t,n)}let Rc;function gd(t,e,n){const r=t.type;if(!t.render){if(!e&&Rc&&!r.render){const i=r.template||ol(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=qe(qe({isCustomElement:s,delimiters:a},o),l);r.render=Rc(i,c)}}t.render=r.render||xt}vr(t),Ar(),lg(t),Pr(),Dn()}function Mg(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function Lg(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Mg(t))},slots:t.slots,emit:t.emit,expose:e}}function Js(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Kf(gr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)}}))}function Fg(t){return G(t)&&"__vccOpts"in t}const Ee=(t,e)=>Mp(t,e,fi);function Zs(t,e,n){const r=arguments.length;return r===2?ke(e)&&!Y(e)?ta(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),ae(t,e,n))}const $g="3.2.41",Bg="http://www.w3.org/2000/svg",Tn=typeof document<"u"?document:null,Nc=Tn&&Tn.createElement("template"),Ug={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Tn.createElementNS(Bg,t):Tn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Nc.innerHTML=r?`<svg>${t}</svg>`:t;const a=Nc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function jg(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Hg(t,e,n){const r=t.style,i=Be(n);if(n&&!i){for(const s in n)na(r,s,n[s]);if(e&&!Be(e))for(const s in e)n[s]==null&&na(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Oc=/\s*!important$/;function na(t,e,n){if(Y(n))n.forEach(r=>na(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Wg(t,e);Oc.test(n)?t.setProperty(Hn(r),n.replace(Oc,""),"important"):t[r]=n}}const Dc=["Webkit","Moz","ms"],ko={};function Wg(t,e){const n=ko[e];if(n)return n;let r=mr(e);if(r!=="filter"&&r in t)return ko[e]=r;r=Tf(r);for(let i=0;i<Dc.length;i++){const s=Dc[i]+r;if(s in t)return ko[e]=s}return e}const Mc="http://www.w3.org/1999/xlink";function zg(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mc,e.slice(6,e.length)):t.setAttributeNS(Mc,e,n);else{const s=zm(e);n==null||s&&!Cf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Vg(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Cf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Zn(t,e,n,r){t.addEventListener(e,n,r)}function Kg(t,e,n,r){t.removeEventListener(e,n,r)}function Yg(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Gg(e);if(r){const c=s[e]=Xg(r,i);Zn(t,a,c,l)}else o&&(Kg(t,a,o,l),s[e]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function Gg(t){let e;if(Lc.test(t)){e={};let r;for(;r=t.match(Lc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let xo=0;const qg=Promise.resolve(),Qg=()=>xo||(qg.then(()=>xo=0),xo=Date.now());function Xg(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;It(Jg(r,n.value),e,5,[r])};return n.value=t,n.attached=Qg(),n}function Jg(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Fc=/^on[a-z]/,Zg=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?jg(t,r,i):e==="style"?Hg(t,n,r):Ws(e)?Va(e)||Yg(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):e_(t,e,r,i))?Vg(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zg(t,e,r,i))};function e_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Fc.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fc.test(e)&&Be(n)?!1:e in t}const $c=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>os(e,n):e};function t_(t){t.target.composing=!0}function Bc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ys={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=$c(i);const s=r||i.props&&i.props.type==="number";Zn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=zo(a)),t._assign(a)}),n&&Zn(t,"change",()=>{t.value=t.value.trim()}),e||(Zn(t,"compositionstart",t_),Zn(t,"compositionend",Bc),Zn(t,"change",Bc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=$c(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&zo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},n_=["ctrl","shift","alt","meta"],r_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>n_.some(n=>t[`${n}Key`]&&!e.includes(n))},i_=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=r_[e[i]];if(s&&s(n,e))return}return t(n,...r)},s_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},o_=(t,e)=>n=>{if(!("key"in n))return;const r=Hn(n.key);if(e.some(i=>i===r||s_[i]===r))return t(n)},a_=qe({patchProp:Zg},Ug);let Uc;function l_(){return Uc||(Uc=bg(a_))}const c_=(...t)=>{const e=l_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=u_(r);if(!i)return;const s=e._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function u_(t){return Be(t)?document.querySelector(t):t}var f_=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let _d;const eo=t=>_d=t,vd=Symbol();function ra(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Yr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yr||(Yr={}));function d_(){const t=Pf(!0),e=t.run(()=>K({}));let n=[],r=[];const i=gr({install(s){eo(i),i._a=s,s.provide(vd,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!f_?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const yd=()=>{};function jc(t,e,n,r=yd){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&md()&&sl(i),i}function Qn(t,...e){t.slice().forEach(n=>{n(...e)})}function ia(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ra(i)&&ra(r)&&t.hasOwnProperty(n)&&!Ae(r)&&!ln(r)?t[n]=ia(i,r):t[n]=r}return t}const h_=Symbol();function m_(t){return!ra(t)||!t.hasOwnProperty(h_)}const{assign:rn}=Object;function p_(t){return!!(Ae(t)&&t.effect)}function g_(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Rp(n.state.value[t]);return rn(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=gr(Ee(()=>{eo(n);const m=n._s.get(t);return o[d].call(m,m)})),f),{}))}return l=bd(t,c,e,n,r,!0),l.$reset=function(){const f=i?i():{};this.$patch(d=>{rn(d,f)})},l}function bd(t,e,n={},r,i,s){let o;const a=rn({actions:{}},n),l={deep:!0};let c,u,f=gr([]),d=gr([]),m;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),K({});let _;function b(z){let J;c=u=!1,typeof z=="function"?(z(r.state.value[t]),J={type:Yr.patchFunction,storeId:t,events:m}):(ia(r.state.value[t],z),J={type:Yr.patchObject,payload:z,storeId:t,events:m});const Ce=_=Symbol();rl().then(()=>{_===Ce&&(c=!0)}),u=!0,Qn(f,J,r.state.value[t])}const v=yd;function C(){o.stop(),f=[],d=[],r._s.delete(t)}function M(z,J){return function(){eo(r);const Ce=Array.from(arguments),Me=[],Qe=[];function lt(Le){Me.push(Le)}function Jt(Le){Qe.push(Le)}Qn(d,{args:Ce,name:z,store:W,after:lt,onError:Jt});let nt;try{nt=J.apply(this&&this.$id===t?this:W,Ce)}catch(Le){throw Qn(Qe,Le),Le}return nt instanceof Promise?nt.then(Le=>(Qn(Me,Le),Le)).catch(Le=>(Qn(Qe,Le),Promise.reject(Le))):(Qn(Me,nt),nt)}}const j={_p:r,$id:t,$onAction:jc.bind(null,d),$patch:b,$reset:v,$subscribe(z,J={}){const Ce=jc(f,z,J.detached,()=>Me()),Me=o.run(()=>st(()=>r.state.value[t],Qe=>{(J.flush==="sync"?u:c)&&z({storeId:t,type:Yr.direct,events:m},Qe)},rn({},l,J)));return Ce},$dispose:C},W=Rr(j);r._s.set(t,W);const oe=r._e.run(()=>(o=Pf(),o.run(()=>e())));for(const z in oe){const J=oe[z];if(Ae(J)&&!p_(J)||ln(J))s||(g&&m_(J)&&(Ae(J)?J.value=g[z]:ia(J,g[z])),r.state.value[t][z]=J);else if(typeof J=="function"){const Ce=M(z,J);oe[z]=Ce,a.actions[z]=J}}return rn(W,oe),rn(se(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:z=>{b(J=>{rn(J,z)})}}),r._p.forEach(z=>{rn(W,o.run(()=>z({store:W,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(W.$state,g),c=!0,u=!0,W}function __(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=md();return a=a||c&&Lt(vd),a&&eo(a),a=_d,a._s.has(r)||(s?bd(r,e,i,a):g_(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const er=typeof window<"u";function v_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Io(t,e){const n={};for(const r in e){const i=e[r];n[r]=Tt(i)?i.map(t):t(i)}return n}const Gr=()=>{},Tt=Array.isArray,y_=/\/$/,b_=t=>t.replace(y_,"");function So(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=k_(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function w_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function C_(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&yr(e.matched[r],n.matched[i])&&wd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!E_(t[n],e[n]))return!1;return!0}function E_(t,e){return Tt(t)?Wc(t,e):Tt(e)?Wc(e,t):t===e}function Wc(t,e){return Tt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function k_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var di;(function(t){t.pop="pop",t.push="push"})(di||(di={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));function x_(t){if(!t)if(er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),b_(t)}const I_=/^[^#]+#/;function S_(t,e){return t.replace(I_,"#")+e}function T_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const to=()=>({left:window.pageXOffset,top:window.pageYOffset});function A_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=T_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zc(t,e){return(history.state?history.state.position-e:-1)+t}const sa=new Map;function P_(t,e){sa.set(t,e)}function R_(t){const e=sa.get(t);return sa.delete(t),e}let N_=()=>location.protocol+"//"+location.host;function Cd(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Hc(l,"")}return Hc(n,t)+r+i}function O_(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const m=Cd(t,location),g=n.value,_=e.value;let b=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}b=_?d.position-_.position:0}else r(m);i.forEach(v=>{v(n.value,g,{delta:b,type:di.pop,direction:b?b>0?qr.forward:qr.back:qr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const m=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(ce({},d.state,{scroll:to()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Vc(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?to():null}}function D_(t){const{history:e,location:n}=window,r={value:Cd(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:N_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(l,c){const u=ce({},e.state,Vc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=ce({},i.value,e.state,{forward:l,scroll:to()});s(u.current,u,!0);const f=ce({},Vc(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function M_(t){t=x_(t);const e=D_(t),n=O_(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ce({location:"",base:t,go:r,createHref:S_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function L_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),M_(t)}function F_(t){return typeof t=="string"||t&&typeof t=="object"}function Ed(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kd=Symbol("");var Kc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kc||(Kc={}));function br(t,e){return ce(new Error,{type:t,[kd]:!0},e)}function Bt(t,e){return t instanceof Error&&kd in t&&(e==null||!!(t.type&e))}const Yc="[^/]+?",$_={sensitive:!1,strict:!1,start:!0,end:!0},B_=/[.+*?^${}()[\]/\\]/g;function U_(t,e){const n=ce({},$_,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(B_,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:_,optional:b,regexp:v}=d;s.push({name:g,repeatable:_,optional:b});const C=v||Yc;if(C!==Yc){m+=10;try{new RegExp(`(${C})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+j.message)}}let M=_?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(M=b&&c.length<2?`(?:/${M})`:"/"+M),b&&(M+="?"),i+=M,m+=20,b&&(m+=-8),_&&(m+=-20),C===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=s[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:_,optional:b}=m,v=g in c?c[g]:"";if(Tt(v)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=Tt(v)?v.join("/"):v;if(!C)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function j_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function H_(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=j_(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Gc(r))return 1;if(Gc(i))return-1}return i.length-r.length}function Gc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const W_={type:0,value:""},z_=/[a-zA-Z0-9_]/;function V_(t){if(!t)return[[]];if(t==="/")return[[W_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:z_.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function K_(t,e,n){const r=U_(V_(t.path),n),i=ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Y_(t,e){const n=[],r=new Map;e=Xc({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,d){const m=!d,g=G_(u);g.aliasOf=d&&d.record;const _=Xc(e,u),b=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of M)b.push(ce({},g,{components:d?d.record.components:g.components,path:j,aliasOf:d?d.record:g}))}let v,C;for(const M of b){const{path:j}=M;if(f&&j[0]!=="/"){const W=f.record.path,oe=W[W.length-1]==="/"?"":"/";M.path=f.record.path+(j&&oe+j)}if(v=K_(M,f,_),d?d.alias.push(v):(C=C||v,C!==v&&C.alias.push(v),m&&u.name&&!Qc(v)&&o(u.name)),g.children){const W=g.children;for(let oe=0;oe<W.length;oe++)s(W[oe],v,d&&d.children[oe])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return C?()=>{o(C)}:Gr}function o(u){if(Ed(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&H_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!xd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Qc(u)&&r.set(u.record.name,u)}function c(u,f){let d,m={},g,_;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw br(1,{location:u});_=d.record.name,m=ce(qc(f.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&qc(u.params,d.keys.map(C=>C.name))),g=d.stringify(m)}else if("path"in u)g=u.path,d=n.find(C=>C.re.test(g)),d&&(m=d.parse(g),_=d.record.name);else{if(d=f.name?r.get(f.name):n.find(C=>C.re.test(f.path)),!d)throw br(1,{location:u,currentLocation:f});_=d.record.name,m=ce({},f.params,u.params),g=d.stringify(m)}const b=[];let v=d;for(;v;)b.unshift(v.record),v=v.parent;return{name:_,path:g,params:m,matched:b,meta:Q_(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function qc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function G_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:q_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function q_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Qc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Q_(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function Xc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xd(t,e){return e.children.some(n=>n===t||xd(t,n))}const Id=/#/g,X_=/&/g,J_=/\//g,Z_=/=/g,ev=/\?/g,Sd=/\+/g,tv=/%5B/g,nv=/%5D/g,Td=/%5E/g,rv=/%60/g,Ad=/%7B/g,iv=/%7C/g,Pd=/%7D/g,sv=/%20/g;function ul(t){return encodeURI(""+t).replace(iv,"|").replace(tv,"[").replace(nv,"]")}function ov(t){return ul(t).replace(Ad,"{").replace(Pd,"}").replace(Td,"^")}function oa(t){return ul(t).replace(Sd,"%2B").replace(sv,"+").replace(Id,"%23").replace(X_,"%26").replace(rv,"`").replace(Ad,"{").replace(Pd,"}").replace(Td,"^")}function av(t){return oa(t).replace(Z_,"%3D")}function lv(t){return ul(t).replace(Id,"%23").replace(ev,"%3F")}function cv(t){return t==null?"":lv(t).replace(J_,"%2F")}function bs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Sd," "),o=s.indexOf("="),a=bs(o<0?s:s.slice(0,o)),l=o<0?null:bs(s.slice(o+1));if(a in e){let c=e[a];Tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Jc(t){let e="";for(let n in t){const r=t[n];if(n=av(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(r)?r.map(s=>s&&oa(s)):[r&&oa(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function fv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Tt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const dv=Symbol(""),Zc=Symbol(""),no=Symbol(""),Rd=Symbol(""),aa=Symbol("");function Br(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(br(4,{from:n,to:e})):f instanceof Error?a(f):F_(f)?a(br(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function To(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(hv(a)){const c=(a.__vccOpts||a)[e];c&&i.push(sn(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=v_(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&sn(d,n,r,s,o)()}))}}return i}function hv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eu(t){const e=Lt(no),n=Lt(Rd),r=Ee(()=>e.resolve(Z(t.to))),i=Ee(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(yr.bind(null,u));if(d>-1)return d;const m=tu(l[c-2]);return c>1&&tu(u)===m&&f[f.length-1].path!==m?f.findIndex(yr.bind(null,l[c-2])):d}),s=Ee(()=>i.value>-1&&gv(n.params,r.value.params)),o=Ee(()=>i.value>-1&&i.value===n.matched.length-1&&wd(n.params,r.value.params));function a(l={}){return pv(l)?e[Z(t.replace)?"replace":"push"](Z(t.to)).catch(Gr):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const mv=Ti({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eu,setup(t,{slots:e}){const n=Rr(eu(t)),{options:r}=Lt(no),i=Ee(()=>({[nu(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[nu(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Zs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),ft=mv;function pv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gv(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Tt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function tu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const nu=(t,e,n)=>t!=null?t:e!=null?e:n,_v=Ti({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(aa),i=Ee(()=>t.route||r.value),s=Lt(Zc,0),o=Ee(()=>{let c=Z(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ee(()=>i.value.matched[o.value]);as(Zc,Ee(()=>o.value+1)),as(dv,a),as(aa,i);const l=K();return st(()=>[l.value,a.value,t.name],([c,u,f],[d,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!yr(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return ru(n.default,{Component:d,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,b=Zs(d,ce({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ru(n.default,{Component:b,route:c})||b}}});function ru(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fl=_v;function vv(t){const e=Y_(t.routes,t),n=t.parseQuery||uv,r=t.stringifyQuery||Jc,i=t.history,s=Br(),o=Br(),a=Br(),l=Tp(en);let c=en;er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Io.bind(null,k=>""+k),f=Io.bind(null,cv),d=Io.bind(null,bs);function m(k,O){let R,$;return Ed(k)?(R=e.getRecordMatcher(k),$=O):$=k,e.addRoute($,R)}function g(k){const O=e.getRecordMatcher(k);O&&e.removeRoute(O)}function _(){return e.getRoutes().map(k=>k.record)}function b(k){return!!e.getRecordMatcher(k)}function v(k,O){if(O=ce({},O||l.value),typeof k=="string"){const h=So(n,k,O.path),p=e.resolve({path:h.path},O),w=i.createHref(h.fullPath);return ce(h,p,{params:d(p.params),hash:bs(h.hash),redirectedFrom:void 0,href:w})}let R;if("path"in k)R=ce({},k,{path:So(n,k.path,O.path).path});else{const h=ce({},k.params);for(const p in h)h[p]==null&&delete h[p];R=ce({},k,{params:f(k.params)}),O.params=f(O.params)}const $=e.resolve(R,O),re=k.hash||"";$.params=u(d($.params));const xe=w_(r,ce({},k,{hash:ov(re),path:$.path})),q=i.createHref(xe);return ce({fullPath:xe,hash:re,query:r===Jc?fv(k.query):k.query||{}},$,{redirectedFrom:void 0,href:q})}function C(k){return typeof k=="string"?So(n,k,l.value.path):ce({},k)}function M(k,O){if(c!==k)return br(8,{from:O,to:k})}function j(k){return z(k)}function W(k){return j(ce(C(k),{replace:!0}))}function oe(k){const O=k.matched[k.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let $=typeof R=="function"?R(k):R;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=C($):{path:$},$.params={}),ce({query:k.query,hash:k.hash,params:"path"in $?{}:k.params},$)}}function z(k,O){const R=c=v(k),$=l.value,re=k.state,xe=k.force,q=k.replace===!0,h=oe(R);if(h)return z(ce(C(h),{state:typeof h=="object"?ce({},re,h.state):re,force:xe,replace:q}),O||R);const p=R;p.redirectedFrom=O;let w;return!xe&&C_(r,$,R)&&(w=br(16,{to:p,from:$}),wn($,$,!0,!1)),(w?Promise.resolve(w):Ce(p,$)).catch(E=>Bt(E)?Bt(E,2)?E:pt(E):pe(E,p,$)).then(E=>{if(E){if(Bt(E,2))return z(ce({replace:q},C(E.to),{state:typeof E.to=="object"?ce({},re,E.to.state):re,force:xe}),O||p)}else E=Qe(p,$,!0,q,re);return Me(p,$,E),E})}function J(k,O){const R=M(k,O);return R?Promise.reject(R):Promise.resolve()}function Ce(k,O){let R;const[$,re,xe]=yv(k,O);R=To($.reverse(),"beforeRouteLeave",k,O);for(const h of $)h.leaveGuards.forEach(p=>{R.push(sn(p,k,O))});const q=J.bind(null,k,O);return R.push(q),Xn(R).then(()=>{R=[];for(const h of s.list())R.push(sn(h,k,O));return R.push(q),Xn(R)}).then(()=>{R=To(re,"beforeRouteUpdate",k,O);for(const h of re)h.updateGuards.forEach(p=>{R.push(sn(p,k,O))});return R.push(q),Xn(R)}).then(()=>{R=[];for(const h of k.matched)if(h.beforeEnter&&!O.matched.includes(h))if(Tt(h.beforeEnter))for(const p of h.beforeEnter)R.push(sn(p,k,O));else R.push(sn(h.beforeEnter,k,O));return R.push(q),Xn(R)}).then(()=>(k.matched.forEach(h=>h.enterCallbacks={}),R=To(xe,"beforeRouteEnter",k,O),R.push(q),Xn(R))).then(()=>{R=[];for(const h of o.list())R.push(sn(h,k,O));return R.push(q),Xn(R)}).catch(h=>Bt(h,8)?h:Promise.reject(h))}function Me(k,O,R){for(const $ of a.list())$(k,O,R)}function Qe(k,O,R,$,re){const xe=M(k,O);if(xe)return xe;const q=O===en,h=er?history.state:{};R&&($||q?i.replace(k.fullPath,ce({scroll:q&&h&&h.scroll},re)):i.push(k.fullPath,re)),l.value=k,wn(k,O,R,q),pt()}let lt;function Jt(){lt||(lt=i.listen((k,O,R)=>{if(!Hi.listening)return;const $=v(k),re=oe($);if(re){z(ce(re,{replace:!0}),$).catch(Gr);return}c=$;const xe=l.value;er&&P_(zc(xe.fullPath,R.delta),to()),Ce($,xe).catch(q=>Bt(q,12)?q:Bt(q,2)?(z(q.to,$).then(h=>{Bt(h,20)&&!R.delta&&R.type===di.pop&&i.go(-1,!1)}).catch(Gr),Promise.reject()):(R.delta&&i.go(-R.delta,!1),pe(q,$,xe))).then(q=>{q=q||Qe($,xe,!1),q&&(R.delta&&!Bt(q,8)?i.go(-R.delta,!1):R.type===di.pop&&Bt(q,20)&&i.go(-1,!1)),Me($,xe,q)}).catch(Gr)}))}let nt=Br(),Le=Br(),Pe;function pe(k,O,R){pt(k);const $=Le.list();return $.length?$.forEach(re=>re(k,O,R)):console.error(k),Promise.reject(k)}function ue(){return Pe&&l.value!==en?Promise.resolve():new Promise((k,O)=>{nt.add([k,O])})}function pt(k){return Pe||(Pe=!k,Jt(),nt.list().forEach(([O,R])=>k?R(k):O()),nt.reset()),k}function wn(k,O,R,$){const{scrollBehavior:re}=t;if(!er||!re)return Promise.resolve();const xe=!R&&R_(zc(k.fullPath,0))||($||!R)&&history.state&&history.state.scroll||null;return rl().then(()=>re(k,O,xe)).then(q=>q&&A_(q)).catch(q=>pe(q,k,O))}const gt=k=>i.go(k);let Xe;const Gn=new Set,Hi={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:b,getRoutes:_,resolve:v,options:t,push:j,replace:W,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:ue,install(k){const O=this;k.component("RouterLink",ft),k.component("RouterView",fl),k.config.globalProperties.$router=O,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(l)}),er&&!Xe&&l.value===en&&(Xe=!0,j(i.location).catch(re=>{}));const R={};for(const re in en)R[re]=Ee(()=>l.value[re]);k.provide(no,O),k.provide(Rd,Rr(R)),k.provide(aa,l);const $=k.unmount;Gn.add(k),k.unmount=function(){Gn.delete(k),Gn.size<1&&(c=en,lt&&lt(),lt=null,l.value=en,Xe=!1,Pe=!1),$()}}};return Hi}function Xn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function yv(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>yr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>yr(c,l))||i.push(l))}return[n,r,i]}function Nd(){return Lt(no)}const At=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},bv={},wv={class:"footer"},Cv=Tg('<hr style="width:100%;margin-top:20px;"><h4>\u6B64\u7DB2\u9801\u5716\u7247\u7D20\u6750\u53D6\u81EA\uFF1A</h4><p>\u4EBA\u7269\u5716\u7247\uFF1A\u30B8\u30E5\u30A8\u30EB\u30BB\u30A4\u30D0\u30FCFREE <a href="http://www.jewel-s.jp/" target="_blank">http://www.jewel-s.jp/</a></p><p>\u80CC\u666F\u5716\u7247\uFF1A<a href="https://pngtree.com/free-backgrounds" target="_blank">pngtree, </a><a href="https://www.pexels.com/zh-tw/" target="_blank"> Pexels, </a><a href="https://www.freepik.com/" target="_blank">Freepik</a></p>',4),Ev=[Cv];function kv(t,e){return Ke(),Ye("div",wv,Ev)}const xv=At(bv,[["render",kv]]),Qr=[{number:"001",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"002",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"003",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"004",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"005",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"006",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"007",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"008",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"009",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"010",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"011",trait:"\u6BC0\u6EC5",attack:15,awake:!1},{number:"012",trait:"\u6BC0\u6EC5",attack:20,awake:!0},{number:"013",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"014",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"015",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"016",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"017",trait:"\u52D5\u76EA",attack:10,awake:!1},{number:"018",trait:"\u52D5\u76EA",attack:15,awake:!0},{number:"019",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"020",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"021",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"022",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"023",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"024",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"025",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"026",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"027",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"028",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"029",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"030",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"031",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"032",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"033",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"034",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"035",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"036",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"037",trait:"\u52D5\u76EA",attack:10,awake:!1},{number:"038",trait:"\u52D5\u76EA",attack:15,awake:!0},{number:"050",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"051",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"052",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"053",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"067",trait:"\u52D5\u76EA",attack:20,awake:!1},{number:"068",trait:"\u52D5\u76EA",attack:25,awake:!0},{number:"069",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"070",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"071",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"072",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"073",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"074",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"075",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"076",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"077",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"078",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"079",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"080",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"081",trait:"\u6BC0\u6EC5",attack:15,awake:!1},{number:"082",trait:"\u6BC0\u6EC5",attack:20,awake:!0},{number:"083",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"084",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"085",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"086",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"087",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"088",trait:"\u5FAA\u74B0",attack:25,awake:!0},{number:"089",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"090",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"091",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"092",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"093",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"094",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"095",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"096",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"097",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"098",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"099",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"100",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"101",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"102",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"103",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"104",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"105",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"106",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"107",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"108",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"109",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"110",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"111",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"112",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"113",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"114",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"115",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"119",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"120",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"121",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"122",trait:"\u5FAA\u74B0",attack:25,awake:!0},{number:"123",trait:"\u52D5\u76EA",attack:20,awake:!1},{number:"124",trait:"\u52D5\u76EA",attack:25,awake:!0},{number:"125",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"126",trait:"\u5FAA\u74B0",attack:25,awake:!0}],Qt=__("counter",()=>{const t=K(""),e=K({account:"",team:[],havecard:[],remainCard:[]}),n=K({img:"304"}),r=K({img:"305"}),i=K(Qr),s=K(0),o=K(0),a=K(0),l=K(0),c=K(0),u=K(!1);return{drama:t,user:e,Profile:n,ProfileCover:r,Char:i,SummonPoints:s,AwakePoints:o,pvp:a,win:l,lose:c,chatopen:u}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Nr(e)},Nr=function(t){return new Error("Firebase Database ("+Od.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Iv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),c!==64){const m=a<<4&240|c>>2;if(r.push(m),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Md=function(t){const e=Dd(t);return dl.encodeByteArray(e,!0)},ws=function(t){return Md(t).replace(/\./g,"")},la=function(t){try{return dl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){return Ld(void 0,t)}function Ld(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Tv(n)||(t[n]=Ld(t[n],e[n]));return t}function Tv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Av())}function Pv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $d(){return Od.NODE_ADMIN===!0}function Rv(){return typeof indexedDB=="object"}function Nv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ov(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=()=>Ov().__FIREBASE_DEFAULTS__,Mv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&la(t[1]);return e&&JSON.parse(e)},Bd=()=>{try{return Dv()||Mv()||Lv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fv=t=>{var e,n;return(n=(e=Bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$v=t=>{const e=Fv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bv=()=>{var t;return(t=Bd())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ws(JSON.stringify(n)),ws(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="FirebaseError";class Pi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jv,Object.setPrototypeOf(this,Pi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ud.prototype.create)}}class Ud{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pi(i,a,r)}}function Hv(t,e){return t.replace(Wv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hi(la(s[0])||""),n=hi(la(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zv=function(t){const e=jd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Vv=function(t){const e=jd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function iu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(su(s)&&su(o)){if(!ca(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function su(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ro(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},io=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){return t&&t._delegate?t._delegate:t}class mi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ai;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xv(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qv(t){return t===xn?void 0:t}function Xv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Zv={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},ey=ve.INFO,ty={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},ny=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ty[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=ey,this._logHandler=ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const ry=(t,e)=>e.some(n=>t instanceof n);let ou,au;function iy(){return ou||(ou=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sy(){return au||(au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wd=new WeakMap,ua=new WeakMap,zd=new WeakMap,Ao=new WeakMap,hl=new WeakMap;function oy(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wd.set(n,t)}).catch(()=>{}),hl.set(e,t),e}function ay(t){if(ua.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ua.set(t,e)}let fa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ua.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ly(t){fa=t(fa)}function cy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Po(this),e,...n);return zd.set(r,e.sort?e.sort():[e]),un(r)}:sy().includes(t)?function(...e){return t.apply(Po(this),e),un(Wd.get(this))}:function(...e){return un(t.apply(Po(this),e))}}function uy(t){return typeof t=="function"?cy(t):(t instanceof IDBTransaction&&ay(t),ry(t,iy())?new Proxy(t,fa):t)}function un(t){if(t instanceof IDBRequest)return oy(t);if(Ao.has(t))return Ao.get(t);const e=uy(t);return e!==t&&(Ao.set(t,e),hl.set(e,t)),e}const Po=t=>hl.get(t);function fy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(un(o.result),l.oldVersion,l.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dy=["get","getKey","getAll","getAllKeys","count"],hy=["put","add","delete","clear"],Ro=new Map;function lu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ro.get(e))return Ro.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ro.set(e,s),s}ly(t=>({...t,get:(e,n,r)=>lu(e,n)||t.get(e,n,r),has:(e,n)=>!!lu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(py(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function py(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",cu="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Hd("@firebase/app"),gy="@firebase/app-compat",_y="@firebase/analytics-compat",vy="@firebase/analytics",yy="@firebase/app-check-compat",by="@firebase/app-check",wy="@firebase/auth",Cy="@firebase/auth-compat",Ey="@firebase/database",ky="@firebase/database-compat",xy="@firebase/functions",Iy="@firebase/functions-compat",Sy="@firebase/installations",Ty="@firebase/installations-compat",Ay="@firebase/messaging",Py="@firebase/messaging-compat",Ry="@firebase/performance",Ny="@firebase/performance-compat",Oy="@firebase/remote-config",Dy="@firebase/remote-config-compat",My="@firebase/storage",Ly="@firebase/storage-compat",Fy="@firebase/firestore",$y="@firebase/firestore-compat",By="firebase",Uy="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",jy={[da]:"fire-core",[gy]:"fire-core-compat",[vy]:"fire-analytics",[_y]:"fire-analytics-compat",[by]:"fire-app-check",[yy]:"fire-app-check-compat",[wy]:"fire-auth",[Cy]:"fire-auth-compat",[Ey]:"fire-rtdb",[ky]:"fire-rtdb-compat",[xy]:"fire-fn",[Iy]:"fire-fn-compat",[Sy]:"fire-iid",[Ty]:"fire-iid-compat",[Ay]:"fire-fcm",[Py]:"fire-fcm-compat",[Ry]:"fire-perf",[Ny]:"fire-perf-compat",[Oy]:"fire-rc",[Dy]:"fire-rc-compat",[My]:"fire-gcs",[Ly]:"fire-gcs-compat",[Fy]:"fire-fst",[$y]:"fire-fst-compat","fire-js":"fire-js",[By]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Map,ma=new Map;function Hy(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(ma.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;ma.set(e,t);for(const n of Es.values())Hy(n,t);return!0}function Wy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new Ud("app","Firebase",zy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=Uy;function Ri(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ha,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=Bv()),!n)throw fn.create("no-options");const s=Es.get(i);if(s){if(ca(n,s.options)&&ca(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new Jv(i);for(const l of ma.values())o.addComponent(l);const a=new Vy(n,r,o);return Es.set(i,a),a}function Yy(t=ha){const e=Es.get(t);if(!e&&t===ha)return Ri();if(!e)throw fn.create("no-app",{appName:t});return e}function ar(t,e,n){var r;let i=(r=jy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(a.join(" "));return}ks(new mi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="firebase-heartbeat-database",qy=1,pi="firebase-heartbeat-store";let No=null;function Vd(){return No||(No=fy(Gy,qy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),No}async function Qy(t){var e;try{return(await Vd()).transaction(pi).objectStore(pi).get(Kd(t))}catch(n){if(n instanceof Pi)Ln.warn(n.message);else{const r=fn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ln.warn(r.message)}}}async function uu(t,e){var n;try{const i=(await Vd()).transaction(pi,"readwrite");return await i.objectStore(pi).put(e,Kd(t)),i.done}catch(r){if(r instanceof Pi)Ln.warn(r.message);else{const i=fn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ln.warn(i.message)}}}function Kd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=1024,Jy=30*24*60*60*1e3;class Zy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Jy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fu(),{heartbeatsToSend:n,unsentEntries:r}=eb(this._heartbeatsCache.heartbeats),i=ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fu(){return new Date().toISOString().substring(0,10)}function eb(t,e=Xy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),du(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),du(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rv()?Nv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function du(t){return ws(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t){ks(new mi("platform-logger",e=>new my(e),"PRIVATE")),ks(new mi("heartbeat",e=>new Zy(e),"PRIVATE")),ar(da,cu,t),ar(da,cu,"esm2017"),ar("fire-js","")}nb("");var rb="firebase",ib="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(rb,ib,"app");const hu="@firebase/database",mu="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yd="";function sb(t){Yd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ob(e)}}catch{}return new ab},Pn=Gd("localStorage"),pa=Gd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Hd("@firebase/database"),lb=function(){let t=1;return function(){return t++}}(),qd=function(t){const e=Gv(t),n=new Yv;n.update(e);const r=n.digest();return dl.encodeByteArray(r)},Ni=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ni.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let Mn=null,pu=!0;const cb=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(lr.logLevel=ve.VERBOSE,Mn=lr.log.bind(lr),e&&pa.set("logging_enabled",!0)):typeof t=="function"?Mn=t:(Mn=null,pa.remove("logging_enabled"))},Ue=function(...t){if(pu===!0&&(pu=!1,Mn===null&&pa.get("logging_enabled")===!0&&cb(!0)),Mn){const e=Ni.apply(null,t);Mn(e)}},Oi=function(t){return function(...e){Ue(t,...e)}},ga=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ni(...t);lr.error(e)},Vt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ni(...t)}`;throw lr.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Ni(...t);lr.warn(e)},ub=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ml=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cr="[MIN_NAME]",Fn="[MAX_NAME]",Kn=function(t,e){if(t===e)return 0;if(t===Cr||e===Fn)return-1;if(e===Cr||t===Fn)return 1;{const n=gu(t),r=gu(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},db=function(t,e){return t===e?0:t<e?-1:1},Ur=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},pl=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=pl(t[e[r]]);return n+="}",n},Qd=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xd=function(t){S(!ml(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},hb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function pb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const gb=new RegExp("^-?(0*)\\d{1,10}$"),_b=-2147483648,vb=2147483647,gu=function(t){if(gb.test(t)){const e=Number(t);if(e>=_b&&e<=vb)return e}return null},Or=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},yb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class cr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="5",Jd="v",Zd="s",eh="r",th="f",nh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rh="ls",ih="p",_a="ac",sh="websocket",oh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Cb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function lh(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===sh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===oh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Cb(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo={},Do={};function _l(t){const e=t.toString();return Oo[e]||(Oo[e]=new Eb),Oo[e]}function kb(t,e){const n=t.toString();return Do[n]||(Do[n]=e()),Do[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Or(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="start",Ib="close",Sb="pLPCommand",Tb="pRTLPCB",ch="id",uh="pw",fh="ser",Ab="cb",Pb="seg",Rb="ts",Nb="d",Ob="dframe",dh=1870,hh=30,Db=dh-hh,Mb=25e3,Lb=3e4;class tr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Oi(e),this.stats_=_l(n),this.urlFn=l=>(this.appCheckToken&&(l[_a]=this.appCheckToken),lh(n,oh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lb)),fb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vl((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_u)this.id=a,this.password=l;else if(o===Ib)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[_u]="t",r[fh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Ab]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jd]=gl,this.transportSessionId&&(r[Zd]=this.transportSessionId),this.lastSessionId&&(r[rh]=this.lastSessionId),this.applicationId&&(r[ih]=this.applicationId),this.appCheckToken&&(r[_a]=this.appCheckToken),typeof location<"u"&&location.hostname&&nh.test(location.hostname)&&(r[eh]=th);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tr.forceAllow_=!0}static forceDisallow(){tr.forceDisallow_=!0}static isAvailable(){return tr.forceAllow_?!0:!tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hb()&&!mb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Md(n),i=Qd(r,Db);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ob]="t",r[ch]=e,r[uh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vl{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lb(),window[Sb+this.uniqueCallbackIdentifier]=e,window[Tb+this.uniqueCallbackIdentifier]=n,this.myIFrame=vl.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ch]=this.myID,e[uh]=this.myPW,e[fh]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hh+r.length<=dh;){const o=this.pendingSegs.shift();r=r+"&"+Pb+i+"="+o.seg+"&"+Rb+i+"="+o.ts+"&"+Nb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Mb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=16384,$b=45e3;let xs=null;typeof MozWebSocket<"u"?xs=MozWebSocket:typeof WebSocket<"u"&&(xs=WebSocket);class yt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Oi(this.connId),this.stats_=_l(n),this.connURL=yt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jd]=gl,typeof location<"u"&&location.hostname&&nh.test(location.hostname)&&(o[eh]=th),n&&(o[Zd]=n),r&&(o[rh]=r),i&&(o[_a]=i),s&&(o[ih]=s),lh(e,sh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let r;$d(),this.mySock=new xs(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xs!==null&&!yt.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qd(n,Fb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($b))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2;yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[tr,yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yt&&yt.isAvailable();let r=n&&!yt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[yt];else{const i=this.transports_=[];for(const s of gi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=6e4,Ub=5e3,jb=10*1024,Hb=100*1024,Mo="t",vu="d",Wb="s",yu="r",zb="e",bu="o",wu="a",Cu="n",Eu="p",Vb="h";class Kb{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Oi("c:"+this.id+":"),this.transportManager_=new gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mo in e){const n=e[Mo];n===wu?this.upgradeIfSecondaryHealthy_():n===yu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ur("t",e),r=Ur("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Eu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ur("t",e),r=Ur("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ur(Mo,e);if(vu in e){const r=e[vu];if(n===Vb)this.onHandshake_(r);else if(n===Cu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wb?this.onConnectionShutdown_(r):n===yu?this.onReset_(r):n===zb?ga("Server Error: "+r):n===bu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ga("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gl!==r&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Bb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ub))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Eu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends ph{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Is}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=32,xu=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new he("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function yl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _i(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new he(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return Ve(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gb(t,e){const n=_i(t,0),r=_i(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Kn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function bl(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class qb{constructor(e,n){this.errorPrefix_=n,this.parts_=_i(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=io(this.parts_[r]);_h(this)}}function Qb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=io(e),_h(t)}function Xb(t){const e=t.parts_.pop();t.byteLength_-=io(e),t.parts_.length>0&&(t.byteLength_-=1)}function _h(t){if(t.byteLength_>xu)throw new Error(t.errorPrefix_+"has a key path longer than "+xu+" bytes ("+t.byteLength_+").");if(t.parts_.length>ku)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ku+") or object contains a cycle "+In(t))}function In(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends ph{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new wl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=1e3,Jb=60*5*1e3,Iu=30*1e3,Zb=1.3,e0=3e4,t0="server_kill",Su=3;class Ht extends mh{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ht.nextPersistentConnectionId_++,this.log_=Oi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jr,this.maxReconnectDelay_=Jb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$d())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Is.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ai,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ht.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const r=wr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Iu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ga("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>e0&&(this.reconnectDelay_=jr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Zb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ht.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new Kb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Ge(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(t0)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ge(f),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],iu(this.interruptReasons_)&&(this.reconnectDelay_=jr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pl(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new he(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Su&&(this.reconnectDelay_=Iu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Su&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yd.replace(/\./g,"-")]=1,Fd()?e["framework.cordova"]=1:Pv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Is.getInstance().currentlyOnline();return iu(this.interruptReasons_)&&e}}Ht.nextPersistentConnectionId_=0;Ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new X(Cr,e),i=new X(Cr,n);return this.compare(r,i)!==0}minPost(){return X.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi;class vh extends so{static get __EMPTY_NODE(){return Gi}static set __EMPTY_NODE(e){Gi=e}compare(e,n){return Kn(e.name,n.name)}isDefinedOn(e){throw Nr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Fn,Gi)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,Gi)}toString(){return".key"}}const ur=new vh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:$e.RED,this.left=i!=null?i:tt.EMPTY_NODE,this.right=s!=null?s:tt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class n0{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tt{constructor(e,n=tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qi(this.root_,null,this.comparator_,!0,e)}}tt.EMPTY_NODE=new n0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e){return Kn(t.name,e.name)}function Cl(t,e){return Kn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;function i0(t){va=t}const yh=function(t){return typeof t=="number"?"number:"+Xd(t):"string:"+t},bh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else S(t===va||t.isEmpty(),"priority of unexpected type.");S(t===va||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bh(this.priorityNode_)}static set __childrenNodeConstructor(e){Tu=e}static get __childrenNodeConstructor(){return Tu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:Q(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xd(this.value_):e+=this.value_,this.lazyHash_=qd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh,Ch;function s0(t){wh=t}function o0(t){Ch=t}class a0 extends so{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Kn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Fn,new Fe("[PRIORITY-POST]",Ch))}makePost(e,n){const r=wh(e);return new X(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Te=new a0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=Math.log(2);class c0{constructor(e){const n=s=>parseInt(Math.log(s)/l0,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ss=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new $e(d,f.node,$e.BLACK,null,null);{const m=parseInt(u/2,10)+l,g=i(l,m),_=i(m+1,c);return f=t[m],d=n?n(f):f,new $e(d,f.node,$e.BLACK,g,_)}},s=function(l){let c=null,u=null,f=t.length;const d=function(g,_){const b=f-g,v=f;f-=g;const C=i(b+1,v),M=t[b],j=n?n(M):M;m(new $e(j,M.node,_,null,C))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));_?d(b,$e.BLACK):(d(b,$e.BLACK),d(b,$e.RED))}return u},o=new c0(t.length),a=s(o);return new tt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;const Jn={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Jn&&Te,"ChildrenNode.ts has not been loaded"),Lo=Lo||new jt({".priority":Jn},{".priority":Te}),Lo}get(e){const n=wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tt?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){S(e!==ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(X.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ss(r,e.getCompare()):a=Jn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new jt(u,c)}addToIndexes(e,n){const r=Cs(this.indexes_,(i,s)=>{const o=wr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Jn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ss(a,o.getCompare())}else return Jn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cs(this.indexes_,i=>{if(i===Jn)return i;{const s=n.get(e.name);return s?i.remove(new X(e.name,s)):i}});return new jt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;class H{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Hr||(Hr=new H(new tt(Cl),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hr}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Hr:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new X(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Hr:this.priorityNode_;return new H(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{S(Q(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yh(this.getPriority().val())+":"),this.forEachChild(Te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qd(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new X(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Di?-1:0}withIndex(e){if(e===ur||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Te),i=n.getIterator(Te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ur?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class u0 extends H{constructor(){super(new tt(Cl),H.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Di=new u0;Object.defineProperties(X,{MIN:{value:new X(Cr,H.EMPTY_NODE)},MAX:{value:new X(Fn,Di)}});vh.__EMPTY_NODE=H.EMPTY_NODE;Fe.__childrenNodeConstructor=H;i0(Di);o0(Di);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=!0;function Ne(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Ne(e))}if(!(t instanceof Array)&&f0){const n=[];let r=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return H.EMPTY_NODE;const s=Ss(n,r0,o=>o.name,Cl);if(r){const o=Ss(n,Te.getCompare());return new H(s,Ne(e),new jt({".priority":o},{".priority":Te}))}else return new H(s,Ne(e),jt.Default)}else{let n=H.EMPTY_NODE;return He(t,(r,i)=>{if(Ft(t,r)&&r.substring(0,1)!=="."){const s=Ne(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ne(e))}}s0(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends so{constructor(e){super(),this.indexPath_=e,S(!ee(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Kn(e.name,n.name):s}makePost(e,n){const r=Ne(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new X(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Di);return new X(Fn,e)}toString(){return _i(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends so{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Kn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const r=Ne(e);return new X(n,r)}toString(){return".value"}}const m0=new h0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",p0=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Au.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Au.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){return{type:"value",snapshotNode:t}}function Er(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function g0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vi(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Er(n,r)):o.trackChildChange(yi(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Te,(i,s)=>{n.hasChild(i)||r.trackChildChange(vi(i,s))}),n.isLeafNode()||n.forEachChild(Te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(yi(i,s,o))}else r.trackChildChange(Er(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.indexedFilter_=new El(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bi.getStartPost_(e),this.endPost_=bi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new X(n,r))||(r=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,a)=>{s.matches(new X(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.rangedFilter_=new bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new X(n,r))||(r=H.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,m)=>f(m,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:i=i.updateImmediateChild(f.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new X(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(u&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(yi(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vi(n,f));const _=a.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Er(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(vi(c.name,c.node)),s.trackChildChange(Er(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new kl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function v0(t){return t.loadsAllData()?new El(t.getIndex()):t.hasLimit()?new _0(t):new bi(t)}function Pu(t){const e={};if(t.isDefault())return e;let n;return t.index_===Te?n="$priority":t.index_===m0?n="$value":t.index_===ur?n="$key":(S(t.index_ instanceof d0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_&&(e.startAt=Oe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Oe(t.indexStartName_))),t.endSet_&&(e.endAt=Oe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Oe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ru(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends mh{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Oi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ts.getListenId_(e,r),a={};this.listens_[o]=a;const l=Pu(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),wr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=Ts.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Pu(e._queryParams),r=e._path.toString(),i=new Ai;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Kv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hi(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return{value:null,children:new Map}}function kh(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,As());const i=t.children.get(r);e=ye(e),kh(i,e,n)}}function ya(t,e,n){t.value!==null?n(e,t.value):b0(t,(r,i)=>{const s=new he(e.toString()+"/"+r);ya(i,s,n)})}function b0(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=10*1e3,C0=30*1e3,E0=5*60*1e3;class k0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new w0(e);const r=Nu+(C0-Nu)*Math.random();Xr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&Ft(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xr(this.reportStats_.bind(this),Math.floor(Math.random()*2*E0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function xl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Il(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=xl()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new Ps(ie(),n,this.revert)}}else return S(Q(this.path)===e,"operationForChild called for unrelated child."),new Ps(ye(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new wi(this.source,ie()):new wi(this.source,ye(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return ee(this.path)?new $n(this.source,ie(),this.snap.getImmediateChild(e)):new $n(this.source,ye(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new $n(this.source,ie(),n.value):new kr(this.source,ie(),n)}else return S(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new kr(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function I0(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(g0(o.childName,o.snapshotNode))}),Wr(t,i,"child_removed",e,r,n),Wr(t,i,"child_added",e,r,n),Wr(t,i,"child_moved",s,r,n),Wr(t,i,"child_changed",e,r,n),Wr(t,i,"value",e,r,n),i}function Wr(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>T0(t,a,l)),o.forEach(a=>{const l=S0(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function S0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function T0(t,e,n){if(e.childName==null||n.childName==null)throw Nr("Should only compare child_ events.");const r=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,e){return{eventCache:t,serverCache:e}}function Jr(t,e,n,r){return oo(new gn(e,n,r),t.serverCache)}function xh(t,e,n,r){return oo(t.eventCache,new gn(e,n,r))}function Rs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;const A0=()=>(Fo||(Fo=new tt(db)),Fo);class _e{constructor(e,n=A0()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return He(e,(r,i)=>{n=n.set(new he(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(ee(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ye(e),n);return s!=null?{path:Se(new he(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(ye(e)):new _e(null)}}set(e,n){if(ee(e))return new _e(n,this.children);{const r=Q(e),s=(this.children.get(r)||new _e(null)).set(ye(e),n),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(ye(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(ee(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(ye(e)):null}}setTree(e,n){if(ee(e))return n;{const r=Q(e),s=(this.children.get(r)||new _e(null)).setTree(ye(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ee(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(ye(e),Se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(ee(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(ye(e),Se(n,i),r):new _e(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new _e(null))}}function Zr(t,e,n){if(ee(e))return new St(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ve(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function ba(t,e,n){let r=t;return He(n,(i,s)=>{r=Zr(r,Se(e,i),s)}),r}function Ou(t,e){if(ee(e))return St.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new St(n)}}function wa(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Du(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(r,i)=>{e.push(new X(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new X(r,i.value))}),e}function dn(t,e){if(ee(e))return t;{const n=Yn(t,e);return n!=null?new St(new _e(n)):new St(t.writeTree_.subtree(e))}}function Ca(t){return t.writeTree_.isEmpty()}function xr(t,e){return Ih(ie(),t.writeTree_,e)}function Ih(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ih(Se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){return Ph(e,t)}function P0(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zr(t.visibleWrites,e,n)),t.lastWriteId=r}function R0(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ba(t.visibleWrites,e,n),t.lastWriteId=r}function N0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function O0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&D0(a,r.path)?i=!1:dt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return M0(t),!0;if(r.snap)t.visibleWrites=Ou(t.visibleWrites,r.path);else{const a=r.children;He(a,l=>{t.visibleWrites=Ou(t.visibleWrites,Se(r.path,l))})}return!0}else return!1}function D0(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(Se(t.path,n),e))return!0;return!1}function M0(t){t.visibleWrites=Sh(t.allWrites,L0,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function L0(t){return t.visible}function Sh(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)dt(n,o)?(a=Ve(n,o),r=Zr(r,a,s.snap)):dt(o,n)&&(a=Ve(o,n),r=Zr(r,ie(),s.snap.getChild(a)));else if(s.children){if(dt(n,o))a=Ve(n,o),r=ba(r,a,s.children);else if(dt(o,n))if(a=Ve(o,n),ee(a))r=ba(r,ie(),s.children);else{const l=wr(s.children,Q(a));if(l){const c=l.getChild(ye(a));r=Zr(r,ie(),c)}}}else throw Nr("WriteRecord should have .snap or .children")}}return r}function Th(t,e,n,r,i){if(!r&&!i){const s=Yn(t.visibleWrites,e);if(s!=null)return s;{const o=dn(t.visibleWrites,e);if(Ca(o))return n;if(n==null&&!wa(o,ie()))return null;{const a=n||H.EMPTY_NODE;return xr(o,a)}}}else{const s=dn(t.visibleWrites,e);if(!i&&Ca(s))return n;if(!i&&n==null&&!wa(s,ie()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=Sh(t.allWrites,o,e),l=n||H.EMPTY_NODE;return xr(a,l)}}}function F0(t,e,n){let r=H.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=dn(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=xr(dn(s,new he(o)),a);r=r.updateImmediateChild(o,l)}),Du(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=dn(t.visibleWrites,e);return Du(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $0(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Se(e,n);if(wa(t.visibleWrites,s))return null;{const o=dn(t.visibleWrites,s);return Ca(o)?i.getChild(n):xr(o,i.getChild(n))}}function B0(t,e,n,r){const i=Se(e,n),s=Yn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=dn(t.visibleWrites,i);return xr(o,r.getNode().getImmediateChild(n))}else return null}function U0(t,e){return Yn(t.visibleWrites,e)}function j0(t,e,n,r,i,s,o){let a;const l=dn(t.visibleWrites,e),c=Yn(l,ie());if(c!=null)a=c;else if(n!=null)a=xr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=d.getNext();for(;m&&u.length<i;)f(m,r)!==0&&u.push(m),m=d.getNext();return u}else return[]}function H0(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function Ns(t,e,n,r){return Th(t.writeTree,t.treePath,e,n,r)}function Tl(t,e){return F0(t.writeTree,t.treePath,e)}function Mu(t,e,n,r){return $0(t.writeTree,t.treePath,e,n,r)}function Os(t,e){return U0(t.writeTree,Se(t.treePath,e))}function W0(t,e,n,r,i,s){return j0(t.writeTree,t.treePath,e,n,r,i,s)}function Al(t,e,n){return B0(t.writeTree,t.treePath,e,n)}function Ah(t,e){return Ph(Se(t.treePath,e),t.writeTree)}function Ph(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,yi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Er(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,yi(r,e.snapshotNode,i.oldSnap));else throw Nr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Rh=new V0;class Pl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new gn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Al(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),s=W0(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){return{filter:t}}function Y0(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function G0(t,e,n,r,i){const s=new z0;let o,a;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?o=Ea(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=Ds(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?o=Q0(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ka(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Et.ACK_USER_WRITE){const c=n;c.revert?o=Z0(t,e,c.path,r,i,s):o=X0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=J0(t,e,n.path,r,s);else throw Nr("Unknown operation type: "+n.type);const l=s.getChanges();return q0(e,o,l),{viewCache:o,changes:l}}function q0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Rs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Eh(Rs(e)))}}function Nh(t,e,n,r,i,s){const o=e.eventCache;if(Os(r,n)!=null)return e;{let a,l;if(ee(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bn(e),u=c instanceof H?c:H.EMPTY_NODE,f=Tl(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Ns(r,Bn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Q(n);if(c===".priority"){S(pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Mu(r,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ye(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Mu(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Al(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,s):a=o.getNode()}}return Jr(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Ds(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),m,null)}else{const m=Q(n);if(!l.isCompleteForPath(n)&&pn(n)>1)return e;const g=ye(n),b=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),m,b,g,Rh,null)}const f=xh(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),d=new Pl(i,f,s);return Nh(t,f,n,i,d,a)}function Ea(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Pl(i,e,s);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Jr(e,c,!0,t.filter.filtersNodes());else{const f=Q(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Jr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ye(n),m=a.getNode().getImmediateChild(f);let g;if(ee(d))g=r;else{const _=u.getCompleteChild(f);_!=null?yl(d)===".priority"&&_.getChild(gh(d)).isEmpty()?g=_:g=_.updateChild(d,r):g=H.EMPTY_NODE}if(m.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),f,g,d,u,o);l=Jr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lu(t,e){return t.eventCache.isCompleteForChild(e)}function Q0(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Se(n,l);Lu(e,Q(u))&&(a=Ea(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Se(n,l);Lu(e,Q(u))||(a=Ea(t,a,u,c,i,s,o))}),a}function Fu(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ka(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=r:c=new _e(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),g=Fu(t,m,d);l=Ds(t,l,new he(f),g,i,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!m){const g=e.serverCache.getNode().getImmediateChild(f),_=Fu(t,g,d);l=Ds(t,l,new he(f),_,i,s,o,a)}}),l}function X0(t,e,n,r,i,s,o){if(Os(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ds(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ee(n)){let c=new _e(null);return l.getNode().forEachChild(ur,(u,f)=>{c=c.set(new he(u),f)}),ka(t,e,n,c,i,s,a,o)}else return e}else{let c=new _e(null);return r.foreach((u,f)=>{const d=Se(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ka(t,e,n,c,i,s,a,o)}}function J0(t,e,n,r,i){const s=e.serverCache,o=xh(e,s.getNode(),s.isFullyInitialized()||ee(n),s.isFiltered());return Nh(t,o,n,r,Rh,i)}function Z0(t,e,n,r,i,s){let o;if(Os(r,n)!=null)return e;{const a=new Pl(r,e,i),l=e.eventCache.getNode();let c;if(ee(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ns(r,Bn(e));else{const f=e.serverCache.getNode();S(f instanceof H,"serverChildren would be complete if leaf node"),u=Tl(r,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Q(n);let f=Al(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ye(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,ye(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ns(r,Bn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Os(r,ie())!=null,Jr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new El(r.getIndex()),s=v0(r);this.processor_=K0(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new gn(l,o.isFullyInitialized(),i.filtersNodes()),f=new gn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=oo(f,u),this.eventGenerator_=new x0(this.query_)}get query(){return this.query_}}function t1(t){return t.viewCache_.serverCache.getNode()}function n1(t){return Rs(t.viewCache_)}function r1(t,e){const n=Bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function $u(t){return t.eventRegistrations_.length===0}function i1(t,e){t.eventRegistrations_.push(e)}function Bu(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Uu(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(S(Bn(t.viewCache_),"We should always have a full cache before handling merges"),S(Rs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=G0(t.processor_,i,e,n,r);return Y0(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Oh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function s1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{r.push(Er(s,o))}),n.isFullyInitialized()&&r.push(Eh(n.getNode())),Oh(t,r,n.getNode(),e)}function Oh(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return I0(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms;class Dh{constructor(){this.views=new Map}}function o1(t){S(!Ms,"__referenceConstructor has already been defined"),Ms=t}function a1(){return S(Ms,"Reference.ts has not been loaded"),Ms}function l1(t){return t.views.size===0}function Rl(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Uu(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Uu(o,e,n,r));return s}}function Mh(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ns(n,i?r:null),l=!1;a?l=!0:r instanceof H?(a=Tl(n,r),l=!1):(a=H.EMPTY_NODE,l=!1);const c=oo(new gn(a,l,!1),new gn(r,i,!1));return new e1(e,c)}return o}function c1(t,e,n,r,i,s){const o=Mh(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),i1(o,n),s1(o,n)}function u1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=_n(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Bu(c,n,r)),$u(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Bu(l,n,r)),$u(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!_n(t)&&s.push(new(a1())(e._repo,e._path)),{removed:s,events:o}}function Lh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hn(t,e){let n=null;for(const r of t.views.values())n=n||r1(r,e);return n}function Fh(t,e){if(e._queryParams.loadsAllData())return lo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $h(t,e){return Fh(t,e)!=null}function _n(t){return lo(t)!=null}function lo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;function f1(t){S(!Ls,"__referenceConstructor has already been defined"),Ls=t}function d1(){return S(Ls,"Reference.ts has not been loaded"),Ls}let h1=1;class ju{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=H0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bh(t,e,n,r,i){return P0(t.pendingWriteTree_,e,n,r,i),i?Dr(t,new $n(xl(),e,n)):[]}function m1(t,e,n,r){R0(t.pendingWriteTree_,e,n,r);const i=_e.fromObject(n);return Dr(t,new kr(xl(),e,i))}function on(t,e,n=!1){const r=N0(t.pendingWriteTree_,e);if(O0(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(ie(),!0):He(r.children,o=>{s=s.set(new he(o),!0)}),Dr(t,new Ps(r.path,s,n))}else return[]}function Mi(t,e,n){return Dr(t,new $n(Il(),e,n))}function p1(t,e,n){const r=_e.fromObject(n);return Dr(t,new kr(Il(),e,r))}function g1(t,e){return Dr(t,new wi(Il(),e))}function _1(t,e,n){const r=Ol(t,n);if(r){const i=Dl(r),s=i.path,o=i.queryId,a=Ve(s,e),l=new wi(Sl(o),a);return Ml(t,s,l)}else return[]}function Fs(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$h(o,e))){const l=u1(o,e,n,r);l1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,m)=>_n(m));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=b1(d);for(let g=0;g<m.length;++g){const _=m[g],b=_.query,v=Wh(t,_);t.listenProvider_.startListening(ei(b),Ci(t,b),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(ei(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(co(d));t.listenProvider_.stopListening(ei(d),m)}))}w1(t,c)}return a}function Uh(t,e,n,r){const i=Ol(t,r);if(i!=null){const s=Dl(i),o=s.path,a=s.queryId,l=Ve(o,e),c=new $n(Sl(a),l,n);return Ml(t,o,c)}else return[]}function v1(t,e,n,r){const i=Ol(t,r);if(i){const s=Dl(i),o=s.path,a=s.queryId,l=Ve(o,e),c=_e.fromObject(n),u=new kr(Sl(a),l,c);return Ml(t,o,u)}else return[]}function xa(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const g=Ve(d,i);s=s||hn(m,g),o=o||_n(m)});let a=t.syncPointTree_.get(i);a?(o=o||_n(a),s=s||hn(a,ie())):(a=new Dh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const _=hn(g,ie());_&&(s=s.updateImmediateChild(m,_))}));const c=$h(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=co(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=C1();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const u=ao(t.pendingWriteTree_,i);let f=c1(a,e,n,u,s,l);if(!c&&!o&&!r){const d=Fh(a,e);f=f.concat(E1(t,e,d))}return f}function Nl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=hn(a,l);if(c)return c});return Th(i,e,s,n,!0)}function y1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Ve(c,n);r=r||hn(u,f)});let i=t.syncPointTree_.get(n);i?r=r||hn(i,ie()):(i=new Dh,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new gn(r,!0,!1):null,a=ao(t.pendingWriteTree_,e._path),l=Mh(i,e,a,s?o.getNode():H.EMPTY_NODE,s);return n1(l)}function Dr(t,e){return jh(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,ie()))}function jh(t,e,n,r){if(ee(t.path))return Hh(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=hn(i,ie()));let s=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ah(r,o);s=s.concat(jh(a,l,c,u))}return i&&(s=s.concat(Rl(i,t,r,n))),s}}function Hh(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=hn(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ah(r,o),u=t.operationForChild(o);u&&(s=s.concat(Hh(u,a,l,c)))}),i&&(s=s.concat(Rl(i,t,r,n))),s}function Wh(t,e){const n=e.query,r=Ci(t,n);return{hashFn:()=>(t1(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?_1(t,n._path,r):g1(t,n._path);{const s=pb(i,n);return Fs(t,n,null,s)}}}}function Ci(t,e){const n=co(e);return t.queryToTagMap.get(n)}function co(t){return t._path.toString()+"$"+t._queryIdentifier}function Ol(t,e){return t.tagToQueryMap.get(e)}function Dl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Ml(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=ao(t.pendingWriteTree_,e);return Rl(r,n,i,null)}function b1(t){return t.fold((e,n,r)=>{if(n&&_n(n))return[lo(n)];{let i=[];return n&&(i=Lh(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(d1())(t._repo,t._path):t}function w1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=co(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function C1(){return h1++}function E1(t,e,n){const r=e._path,i=Ci(t,e),s=Wh(t,n),o=t.listenProvider_.startListening(ei(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!_n(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!ee(c)&&u&&_n(u))return[lo(u).query];{let d=[];return u&&(d=d.concat(Lh(u).map(m=>m.query))),He(f,(m,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ei(u),Ci(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ll(n)}node(){return this.node_}}class Fl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new Fl(this.syncTree_,n)}node(){return Nl(this.syncTree_,this.path_)}}const k1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hu=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return I1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},I1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},zh=function(t,e,n,r){return $l(e,new Fl(n,t),r)},Vh=function(t,e,n){return $l(t,new Ll(e),n)};function $l(t,e,n){const r=t.getPriority().val(),i=Hu(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Hu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Ne(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(Te,(a,l)=>{const c=$l(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ul(t,e){let n=e instanceof he?e:new he(e),r=t,i=Q(n);for(;i!==null;){const s=wr(r.node.children,i)||{children:{},childCount:0};r=new Bl(i,r,s),n=ye(n),i=Q(n)}return r}function Mr(t){return t.node.value}function Kh(t,e){t.node.value=e,Ia(t)}function Yh(t){return t.node.childCount>0}function S1(t){return Mr(t)===void 0&&!Yh(t)}function uo(t,e){He(t.node.children,(n,r)=>{e(new Bl(n,t,r))})}function Gh(t,e,n,r){n&&!r&&e(t),uo(t,i=>{Gh(i,e,!0,r)}),n&&r&&e(t)}function T1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Li(t){return new he(t.parent===null?t.name:Li(t.parent)+"/"+t.name)}function Ia(t){t.parent!==null&&A1(t.parent,t.name,t)}function A1(t,e,n){const r=S1(n),i=Ft(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ia(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ia(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=/[\[\].#$\/\u0000-\u001F\u007F]/,R1=/[\[\].#$\u0000-\u001F\u007F]/,$o=10*1024*1024,jl=function(t){return typeof t=="string"&&t.length!==0&&!P1.test(t)},qh=function(t){return typeof t=="string"&&t.length!==0&&!R1.test(t)},N1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qh(t)},O1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ml(t)||t&&typeof t=="object"&&Ft(t,".sv")},Qh=function(t,e,n,r){r&&e===void 0||fo(ro(t,"value"),e,n)},fo=function(t,e,n){const r=n instanceof he?new qb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+In(r));if(typeof e=="function")throw new Error(t+"contains a function "+In(r)+" with contents = "+e.toString());if(ml(e))throw new Error(t+"contains "+e.toString()+" "+In(r));if(typeof e=="string"&&e.length>$o/3&&io(e)>$o)throw new Error(t+"contains a string greater than "+$o+" utf8 bytes "+In(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!jl(o)))throw new Error(t+" contains an invalid key ("+o+") "+In(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qb(r,o),fo(t,a,r),Xb(r)}),i&&s)throw new Error(t+' contains ".value" child '+In(r)+" in addition to actual children.")}},D1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=_i(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!jl(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Gb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&dt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},M1=function(t,e,n,r){if(r&&e===void 0)return;const i=ro(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];He(e,(o,a)=>{const l=new he(o);if(fo(i,a,Se(n,l)),yl(l)===".priority"&&!O1(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),D1(i,s)},Xh=function(t,e,n,r){if(!(r&&n===void 0)&&!qh(n))throw new Error(ro(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},L1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xh(t,e,n,r)},Jh=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},F1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!N1(n))throw new Error(ro(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ho(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!bl(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zh(t,e,n){ho(t,n),em(t,r=>bl(r,e))}function mt(t,e,n){ho(t,n),em(t,r=>dt(r,e)||dt(e,r))}function em(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(B1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function B1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mn&&Ue("event: "+n.toString()),Or(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="repo_interrupt",j1=25;class H1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=As(),this.transactionQueueTree_=new Bl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function W1(t,e,n){if(t.stats_=_l(t.repoInfo_),t.forceRestClient_||yb())t.server_=new Ts(t.repoInfo_,(r,i,s,o)=>{Wu(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>zu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ht(t.repoInfo_,e,(r,i,s,o)=>{Wu(t,r,i,s,o)},r=>{zu(t,r)},r=>{z1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=kb(t.repoInfo_,()=>new k0(t.stats_,t.server_)),t.infoData_=new y0,t.infoSyncTree_=new ju({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Mi(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Hl(t,"connected",!1),t.serverSyncTree_=new ju({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);mt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function tm(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mo(t){return k1({timestamp:tm(t)})}function Wu(t,e,n,r,i){t.dataUpdateCount++;const s=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Cs(n,c=>Ne(c));o=v1(t.serverSyncTree_,s,l,i)}else{const l=Ne(n);o=Uh(t.serverSyncTree_,s,l,i)}else if(r){const l=Cs(n,c=>Ne(c));o=p1(t.serverSyncTree_,s,l)}else{const l=Ne(n);o=Mi(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ir(t,s)),mt(t.eventQueue_,a,o)}function zu(t,e){Hl(t,"connected",e),e===!1&&G1(t)}function z1(t,e){He(e,(n,r)=>{Hl(t,n,r)})}function Hl(t,e,n){const r=new he("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(r,i);const s=Mi(t.infoSyncTree_,r,i);mt(t.eventQueue_,r,s)}function Wl(t){return t.nextWriteId_++}function V1(t,e,n){const r=y1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ne(i).withIndex(e._queryParams.getIndex());xa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Mi(t.serverSyncTree_,e._path,s);else{const a=Ci(t.serverSyncTree_,e);o=Uh(t.serverSyncTree_,e._path,s,a)}return mt(t.eventQueue_,e._path,o),Fs(t.serverSyncTree_,e,n,null,!0),s},i=>(Fi(t,"get for query "+Oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function K1(t,e,n,r,i){Fi(t,"set",{path:e.toString(),value:n,priority:r});const s=mo(t),o=Ne(n,r),a=Nl(t.serverSyncTree_,e),l=Vh(o,a,s),c=Wl(t),u=Bh(t.serverSyncTree_,e,l,c,!0);ho(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const g=d==="ok";g||Ge("set at "+e+" failed: "+d);const _=on(t.serverSyncTree_,c,!g);mt(t.eventQueue_,e,_),Sa(t,i,d,m)});const f=Vl(t,e);Ir(t,f),mt(t.eventQueue_,f,[])}function Y1(t,e,n,r){Fi(t,"update",{path:e.toString(),value:n});let i=!0;const s=mo(t),o={};if(He(n,(a,l)=>{i=!1,o[a]=zh(Se(e,a),Ne(l),t.serverSyncTree_,s)}),i)Ue("update() called with empty data.  Don't do anything."),Sa(t,r,"ok",void 0);else{const a=Wl(t),l=m1(t.serverSyncTree_,e,o,a);ho(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||Ge("update at "+e+" failed: "+c);const d=on(t.serverSyncTree_,a,!f),m=d.length>0?Ir(t,e):e;mt(t.eventQueue_,m,d),Sa(t,r,c,u)}),He(n,c=>{const u=Vl(t,Se(e,c));Ir(t,u)}),mt(t.eventQueue_,e,[])}}function G1(t){Fi(t,"onDisconnectEvents");const e=mo(t),n=As();ya(t.onDisconnect_,ie(),(i,s)=>{const o=zh(i,s,t.serverSyncTree_,e);kh(n,i,o)});let r=[];ya(n,ie(),(i,s)=>{r=r.concat(Mi(t.serverSyncTree_,i,s));const o=Vl(t,i);Ir(t,o)}),t.onDisconnect_=As(),mt(t.eventQueue_,ie(),r)}function q1(t,e,n){let r;Q(e._path)===".info"?r=xa(t.infoSyncTree_,e,n):r=xa(t.serverSyncTree_,e,n),Zh(t.eventQueue_,e._path,r)}function Vu(t,e,n){let r;Q(e._path)===".info"?r=Fs(t.infoSyncTree_,e,n):r=Fs(t.serverSyncTree_,e,n),Zh(t.eventQueue_,e._path,r)}function Q1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(U1)}function Fi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function Sa(t,e,n,r){e&&Or(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nm(t,e,n){return Nl(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function zl(t,e=t.transactionQueueTree_){if(e||po(t,e),Mr(e)){const n=im(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&X1(t,Li(e),n)}else Yh(e)&&uo(e,n=>{zl(t,n)})}function X1(t,e,n){const r=n.map(c=>c.currentWriteId),i=nm(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ve(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Fi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(on(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();po(t,Ul(t.transactionQueueTree_,e)),zl(t,t.transactionQueueTree_),mt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Or(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ir(t,e)}},o)}function Ir(t,e){const n=rm(t,e),r=Li(n),i=im(t,n);return J1(t,i,r),r}function J1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,f;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=j1)u=!0,f="maxretry",i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0));else{const d=nm(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){fo("transaction failed: Data returned ",m,l.path);let g=Ne(m);typeof m=="object"&&m!=null&&Ft(m,".priority")||(g=g.updatePriority(d.getPriority()));const b=l.currentWriteId,v=mo(t),C=Vh(g,d,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=Wl(t),o.splice(o.indexOf(b),1),i=i.concat(Bh(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(on(t.serverSyncTree_,b,!0))}else u=!0,f="nodata",i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0))}mt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}po(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Or(r[a]);zl(t,t.transactionQueueTree_)}function rm(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&Mr(r)===void 0;)r=Ul(r,n),e=ye(e),n=Q(e);return r}function im(t,e){const n=[];return sm(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sm(t,e,n){const r=Mr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uo(e,i=>{sm(t,i,n)})}function po(t,e){const n=Mr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Kh(e,n.length>0?n:void 0)}uo(e,r=>{po(t,r)})}function Vl(t,e){const n=Li(rm(t,e)),r=Ul(t.transactionQueueTree_,e);return T1(r,i=>{Bo(t,i)}),Bo(t,r),Gh(r,i=>{Bo(t,i)}),n}function Bo(t,e){const n=Mr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(on(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Kh(e,void 0):n.length=s+1,mt(t.eventQueue_,Li(e),i);for(let o=0;o<r.length;o++)Or(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ew(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ku=function(t,e){const n=tw(t),r=n.namespace;n.domain==="firebase.com"&&Vt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Vt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ub();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ah(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new he(n.pathString)}},tw=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=Z1(t.substring(u,f)));const d=ew(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class am{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ee(this._path)?null:yl(this._path)}get ref(){return new $t(this._repo,this._path)}get _queryIdentifier(){const e=Ru(this._queryParams),n=pl(e);return n==="{}"?"default":n}get _queryObject(){return Ru(this._queryParams)}isEqual(e){if(e=Vn(e),!(e instanceof Kl))return!1;const n=this._repo===e._repo,r=bl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yb(this._path)}}class $t extends Kl{constructor(e,n){super(e,n,new kl,!1)}get parent(){const e=gh(this._path);return e===null?null:new $t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),r=ht(this.ref,e);return new Sr(this._node.getChild(n),r,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Sr(i,ht(this.ref,r),Te)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function et(t,e){return t=Vn(t),t._checkNotDeleted("ref"),e!==void 0?ht(t._root,e):t._root}function ht(t,e){return t=Vn(t),Q(t._path)===null?L1("child","path",e,!1):Xh("child","path",e,!1),new $t(t._repo,Se(t._path,e))}function nw(t,e){t=Vn(t),Jh("push",t._path),Qh("push",e,t._path,!0);const n=tm(t._repo),r=p0(n),i=ht(t,r),s=ht(t,r);let o;return e!=null?o=fr(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function fr(t,e){t=Vn(t),Jh("set",t._path),Qh("set",e,t._path,!1);const n=new Ai;return K1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function cm(t,e){M1("update",e,t._path,!1);const n=new Ai;return Y1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function dr(t){t=Vn(t);const e=new lm(()=>{}),n=new go(e);return V1(t._repo,t,n).then(r=>new Sr(r,new $t(t._repo,t._path),t._queryParams.getIndex()))}class go{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new om("value",this,new Sr(e.snapshotNode,new $t(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new am(this,e,n):null}matches(e){return e instanceof go?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Yl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new am(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=ht(new $t(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new om(e.type,this,new Sr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Yl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function rw(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,f)=>{Vu(t._repo,t,a),l(u,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new lm(n,s||void 0),a=e==="value"?new go(o):new Yl(e,o);return q1(t._repo,t,a),()=>Vu(t._repo,t,a)}function Ta(t,e,n,r){return rw(t,"value",e,n,r)}o1($t);f1($t);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="FIREBASE_DATABASE_EMULATOR_HOST",Aa={};let sw=!1;function ow(t,e,n,r){t.repoInfo_=new ah(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function aw(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Vt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ku(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[iw]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Ku(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new cr(cr.OWNER):new wb(t.name,t.options,e);F1("Invalid Firebase Database URL",o),ee(o.path)||Vt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=cw(a,t,u,new bb(t.name,n));return new uw(f,t)}function lw(t,e){const n=Aa[e];(!n||n[t.key]!==t)&&Vt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Q1(t),delete n[t.key]}function cw(t,e,n,r){let i=Aa[e.name];i||(i={},Aa[e.name]=i);let s=i[t.toURLString()];return s&&Vt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new H1(t,sw,n,r),i[t.toURLString()]=s,s}class uw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(W1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $t(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vt("Cannot call "+e+" on a deleted database.")}}function Wt(t=Yy(),e){const n=Wy(t,"database").getImmediate({identifier:e}),r=$v("database");return r&&fw(n,...r),n}function fw(t,e,n,r={}){t=Vn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Vt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Vt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new cr(cr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Uv(r.mockUserToken,t.app.options.projectId);s=new cr(o)}ow(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){sb(Ky),ks(new mi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return aw(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ar(hu,mu,t),ar(hu,mu,"esm2017")}Ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dw();const hw=t=>(Wn("data-v-e9e76ca2"),t=t(),zn(),t),mw={class:"wrapper"},pw=hw(()=>y("h3",null,"\u5E7B\u5922\u82F1\u9748\u6BBF",-1)),gw={__name:"App",setup(t){const n=Ri({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"});Wt(n),et(Wt());const r=Wt(),i=Qt();function s(a){i.user.account!==""?cm(et(r,"Users/"+a),{havercard:i.user.havecard,remainCard:i.user.remainCard,team:i.user.team,Profile:{img:i.Profile.img},ProfileCover:{img:i.ProfileCover.img},SummonPoints:i.SummonPoints,AwakePoints:i.AwakePoints,drama:i.drama,pvp:i.pvp,win:i.win,lose:i.lose}).then(()=>{editOK.value=!0,getdata()}).catch(l=>{}):alert("\u4F60\u6C92\u6709\u767B\u5165")}st(i,()=>{s(i.user.account)});const o=Nd();return(a,l)=>(Ke(),Ye(it,null,[y("header",null,[y("div",mw,[pw,y("button",{onClick:l[0]||(l[0]=c=>Z(o).replace({path:"/"})),class:le({display_none:Z(i).user.account!==""})},"\u76EE\u524D\u672A\u767B\u5165\uFF0C\u6309\u6B64\u8FD4\u56DE\u767B\u5165\u756B\u9762",2)])]),ae(Z(fl)),ae(xv)],64))}},_w=At(gw,[["__scopeId","data-v-e9e76ca2"]]),vw="modulepreload",yw=function(t){return"/Vue3-Vite-Game/"+t},Yu={},ti=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=yw(s),s in Yu)return;Yu[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":vw,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},bw="/Vue3-Vite-Game/assets/pexels-philippe-donn-1169754.27b5d31a.jpg";const ww={class:"chat-box"},Cw={class:"chat-img"},Ew=["src"],kw={class:"chat-font"},xw={class:"chat-time"},Iw={class:"chat-text"},Sw={class:"chat-input"},Tw=["onKeyup"],Aw={__name:"Chat",setup(t){const n=Ri({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"}),r=Wt(n),i=et(r,"Chat/"),s=Qt(),o=K("");function a(){const f=nw(i).key;if(!o.value.trim()||s.user.account=="")return;let d=new Date;fr(et(r,`Chat/${f}`),{name:s.user.account,message:o.value,icon:s.Profile,time:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+" -"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"-"}),o.value=""}function l(){let f=document.getElementById("chat-home"),d;clearTimeout(d),d=setTimeout(()=>{f.scrollTop=f.scrollHeight},100)}const c=K([]);Ta(i,f=>{c.value=f.val(),l()}),st(s,()=>{l()});function u(f){return`./imgage/character/c${f}_C.png`}return(f,d)=>(Ke(),Ye(it,null,[y("button",{class:"chat-open",onClick:d[0]||(d[0]=m=>Z(s).chatopen=!Z(s).chatopen)},"\u5C55\u958B\u804A\u5929\u7A97"),y("div",{id:"chat-home",class:le({display_none:!Z(s).chatopen},{chat_open_anm:Z(s).chatopen})},[(Ke(!0),Ye(it,null,id(c.value,(m,g)=>(Ke(),Ye("div",ww,[y("div",Cw,[y("img",{src:u(m.icon.img),alt:""},null,8,Ew)]),y("div",kw,[y("span",null,de(m.name)+"\uFF1A",1),y("p",xw,de(m.time),1),y("p",Iw,de(m.message),1)])]))),256))],2),y("div",Sw,[gs(y("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=m=>o.value=m),onKeyup:o_(a,["enter"])},null,40,Tw),[[ys,o.value]]),y("button",{onClick:a},"\u9001\u51FA")])],64))}},um=At(Aw,[["__scopeId","data-v-16ee98f2"]]);const Pw={class:"player-home"},Rw={class:"player-img"},Nw=["src"],Ow={class:"profile-box"},Dw={class:"profile-lv"},Mw={class:"profile-data"},Lw={__name:"PlayerProfile",setup(t){const e=Qt(),n=K(`./imgage/character/c${e.Profile.img}_C.png`);return st(e.Profile,()=>{n.value=`./imgage/character/c${e.Profile.img}_C.png`}),(r,i)=>(Ke(),Ye("div",Pw,[y("div",Rw,[y("img",{src:n.value,alt:""},null,8,Nw)]),y("div",Ow,[y("div",Dw,[y("span",null,de(Z(e).user.account),1),y("p",null,"\u53EC\u559A\u9EDE\u6578\uFF1A"+de(Z(e).SummonPoints),1),y("p",null,"\u89BA\u9192\u9EDE\u6578\uFF1A"+de(Z(e).AwakePoints),1)]),y("div",Mw,"\u5C0D\u6230\uFF1A"+de(Z(e).pvp)+"\u5834 - \u52DD\u5229\uFF1A"+de(Z(e).win)+"\u5834 - \u5931\u6557\uFF1A"+de(Z(e).lose)+"\u5834\uFF0C\u5361\u724C\u6301\u6709\uFF1A"+de(Z(e).user.havecard.length)+"\u5F35",1)])]))}},Fw=At(Lw,[["__scopeId","data-v-cf5c4cb3"]]);const $w={},Bw=t=>(Wn("data-v-6b231dfb"),t=t(),zn(),t),Uw={id:"advertisehome"},jw=Bw(()=>y("div",{class:"img-box"}," \u9810\u7559\u5340\u584A ",-1)),Hw=[jw];function Ww(t,e){return Ke(),Ye("div",Uw,Hw)}const zw=At($w,[["render",Ww],["__scopeId","data-v-6b231dfb"]]);const fm=t=>(Wn("data-v-364e0076"),t=t(),zn(),t),Vw={id:"home"},Kw=fm(()=>y("img",{class:"background-img",src:bw,alt:""},null,-1)),Yw={class:"spech-img"},Gw=["src"],qw=fm(()=>y("div",{class:"character-text"},[y("h2",null,"\u9019\u88E1\u53EA\u6709\u6211\u5011\u5169\u500B\u4E86...")],-1)),Qw={class:"Go"},Xw={class:"view"},Jw={class:"player"},Zw={class:"chat"},eC={class:"advertise"},tC={__name:"Home",setup(t){const e=Qt(),n=K(`./imgage/character/c${e.ProfileCover.img}_D.png`);return e.chatopen=!1,st(e.ProfileCover,()=>{n.value=`./imgage/character/c${e.ProfileCover.img}_D.png`}),(r,i)=>(Ke(),Ye("div",null,[y("div",Vw,[Kw,y("div",Yw,[y("img",{src:n.value,alt:""},null,8,Gw)]),qw,y("div",Qw,[y("div",Xw,[ae(Z(fl))]),y("nav",null,[ae(Z(ft),{to:"/Home"},{default:ct(()=>[ut("\u96B1\u85CF")]),_:1}),ae(Z(ft),{to:"/Pack"},{default:ct(()=>[ut("\u82F1\u9748")]),_:1}),ae(Z(ft),{to:"/Summon"},{default:ct(()=>[ut("\u53EC\u559A")]),_:1}),ae(Z(ft),{to:"/Home/character"},{default:ct(()=>[ut("\u968A\u4F0D")]),_:1}),ae(Z(ft),{to:"/Home/Info"},{default:ct(()=>[ut("\u8AAA\u660E")]),_:1}),ae(Z(ft),{to:"/Battle"},{default:ct(()=>[ut("\u73A9\u5BB6\u5C0D\u6230")]),_:1}),ae(Z(ft),{to:"/Home/Info"},{default:ct(()=>[ut("\u96FB\u8166\u5C0D\u6230")]),_:1}),ae(Z(ft),{to:"/Dialogue"},{default:ct(()=>[ut("\u5287\u60C5")]),_:1})])]),y("div",Jw,[ae(Fw)]),y("div",Zw,[ae(um)]),y("div",eC,[ae(zw)])])]))}},nC=At(tC,[["__scopeId","data-v-364e0076"]]),rC=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};const iC=t=>(Wn("data-v-651e25e5"),t=t(),zn(),t),sC={id:"speech"},oC={class:"home-router"},aC=["src"],lC={class:"spech-img"},cC=["src"],uC={class:"speech-box"},fC={class:"speech-name"},dC=iC(()=>y("div",{class:"load"},[y("div",{style:{color:"#9784ed"},class:"la-ball-pulse"},[y("div"),y("div"),y("div")])],-1)),hC={__name:"Dialogue",setup(t){const e=Qt(),n=K(1),r=K([]),i=K(`${e.drama}`);st(e,()=>{i.value=e.drama,s()});function s(){rC(Object.assign({"./Dialogue/a001_01.js":()=>ti(()=>import("./a001_01.df348ce6.js"),[]),"./Dialogue/a002_01.js":()=>ti(()=>import("./a002_01.62dcd319.js"),[])}),`./Dialogue/${i.value}.js`).then(u=>{r.value=u.default,c(r.value)})}function o(){n.value<r.value.length&&(n.value++,c(r.value))}function a(){n.value>1&&(n.value--,c(r.value))}const l=K({});function c(u){for(let f=0;f<u.length;f++)u[f].page==n.value&&(l.value=u[f])}return rd(()=>{s()}),st(l,()=>{l.value.fun!==void 0&&(l.value.fun(),s())}),(u,f)=>(Ke(),Ye("div",null,[y("div",sC,[y("div",oC,[ae(Z(ft),{to:"/Home"},{default:ct(()=>[ut("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),y("img",{class:"background-img",src:l.value.background,alt:""},null,8,aC),y("div",lC,[y("img",{src:l.value.img,alt:"",class:le(l.value.eff)},null,10,cC)]),y("div",uC,[y("div",fC,[y("h3",null,de(l.value.name),1)]),y("div",{class:"speech-text",onClick:f[0]||(f[0]=d=>o()),onContextmenu:f[1]||(f[1]=i_(d=>a(),["right"]))},[y("p",{class:le(l.value.font)},de(l.value.text),3),dC],32)])])]))}},mC=At(hC,[["__scopeId","data-v-651e25e5"]]),pC="/Vue3-Vite-Game/assets/PngtreeTechnolo_939240.febec1c5.jpg";const dm=t=>(Wn("data-v-bb1e00b3"),t=t(),zn(),t),gC={id:"Summon"},_C={class:"home-router"},vC=dm(()=>y("img",{class:"background-img",src:pC,alt:""},null,-1)),yC={class:"remain"},bC=dm(()=>y("div",{class:"load"},[y("div",{class:"la-cog la-dark la-2x"},[y("div")])],-1)),wC=["src"],CC={__name:"Summon",setup(t){const e=Qt(),n=K(!1),r=K(e.user.havecard),i=K(e.user.remainCard),s=K(e.SummonPoints),o=K(""),a=K(0);function l(){s.value===0?alert("\u53EC\u559A\u9EDE\u6578\u4E0D\u8DB3"):(n.value=!n.value,s.value--,e.SummonPoints=s.value,a.value=Math.floor(Math.random()*i.value.length),r.value.unshift(i.value[a.value]),e.user.havecard=r.value,o.value=`./imgage/character/c${i.value[a.value]}_A.png`,i.value.splice(a.value,1),e.user.remainCard=i.value)}return(c,u)=>(Ke(),Ye("div",gC,[y("div",_C,[ae(Z(ft),{to:"/Home"},{default:ct(()=>[ut("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),vC,y("div",yC,[y("p",null,"\u5DF2\u64C1\u6709\u82F1\u9748\uFF1A"+de(r.value.length),1),y("p",null,"\u672A\u7372\u5F97\u82F1\u9748\uFF1A"+de(i.value.length),1)]),y("div",{class:le(["summon-btn",{display_none:n.value}])},[y("p",null,"\u53EC\u559A\u9EDE\u6578\uFF1A"+de(s.value),1),y("button",{onClick:u[0]||(u[0]=f=>l())},"\u53EC\u559A")],2),y("div",{class:le(["summon_start display_none",{start_summon:n.value}])},[bC,y("div",{class:le(["summon-img",{SummoAnm:n.value}])},[y("img",{src:o.value,alt:""},null,8,wC)],2),y("button",{onClick:u[1]||(u[1]=f=>n.value=!n.value)},"\u78BA\u5B9A")],2)]))}},EC=At(CC,[["__scopeId","data-v-bb1e00b3"]]);const kC={id:"Pack"},xC={class:"home-router"},IC={class:"awake"},SC={class:"awake-p"},TC={class:"pack-home"},AC={class:"pack-trait"},PC={class:"pack-boxhome"},RC={class:"pack-boxtop"},NC={class:"pack-img"},OC=["src"],DC={class:"pack-hidden"},MC={class:"pack-data"},LC={class:"pack-button"},FC=["onClick"],$C=["onClick"],BC=["onClick"],UC={__name:"Pack",setup(t){const e=Qt(),n=K(e.user.havecard),r=K([]);function i(){let g=[];for(let _=0;_<n.value.length;_++)for(let b=0;b<Qr.length;b++)n.value[_]==Qr[b].number&&(g.push(Qr[b]),r.value=g)}i();const s=K([]);function o(){let g=[];for(let _=0;_<n.value.length;_++)g.push(`./imgage/character/c${n.value[_]}_A.png`),s.value=g}o();const a=K("all"),l=K(null),c=K(e.AwakePoints);function u(g){if(c.value===0)alert("\u53EC\u559A\u9EDE\u6578\u4E0D\u8DB3");else if(f(g.number))alert("\u5DF2\u7D93\u64C1\u6709\u89BA\u9192");else{const _=(Number(g.number)+1).toString();let b="";_.length==1?b="00"+_:_.length==2?b="0"+_:b=_,c.value--,e.AwakePoints=c.value,n.value.unshift(b),e.user.havecard=n.value,i(),o()}}function f(g){const _=(Number(g)+1).toString();let b="";_.length==1?b="00"+_:_.length==2?b="0"+_:b=_;for(let v=0;v<n.value.length;v++)if(b==n.value[v])return!0;return!1}function d(g){e.ProfileCover.img=g}function m(g){e.Profile.img=g}return(g,_)=>(Ke(),Ye("div",kC,[y("div",xC,[ae(Z(ft),{to:"/Home"},{default:ct(()=>[ut("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),y("div",IC,[y("button",{onClick:_[0]||(_[0]=b=>l.value=null),class:le({now_botton:l.value==null})},"\u986F\u793A\u5168\u90E8",2),y("button",{onClick:_[1]||(_[1]=b=>l.value=!0),class:le({now_botton:l.value==!0})},"\u986F\u793A\u89BA\u9192",2),y("button",{onClick:_[2]||(_[2]=b=>l.value=!1),class:le({now_botton:l.value==!1})},"\u986F\u793A\u89BA\u9192\u524D",2),y("div",SC,[y("p",null,"\u89BA\u9192\u9EDE\u6578\uFF1A"+de(Z(e).AwakePoints),1)])]),y("div",TC,[y("div",AC,[y("button",{onClick:_[3]||(_[3]=b=>a.value="all"),class:le({now_botton:a.value=="all"})},"\u5168\u90E8\u5C6C\u6027",2),y("button",{onClick:_[4]||(_[4]=b=>a.value="\u548C\u8AE7"),class:le({now_botton:a.value=="\u548C\u8AE7"})},"\u548C\u8AE7",2),y("button",{onClick:_[5]||(_[5]=b=>a.value="\u5FAA\u74B0"),class:le({now_botton:a.value=="\u5FAA\u74B0"})},"\u5FAA\u74B0",2),y("button",{onClick:_[6]||(_[6]=b=>a.value="\u52D5\u76EA"),class:le({now_botton:a.value=="\u52D5\u76EA"})},"\u52D5\u76EA",2),y("button",{onClick:_[7]||(_[7]=b=>a.value="\u6BC0\u6EC5"),class:le({now_botton:a.value=="\u6BC0\u6EC5"})},"\u6BC0\u6EC5",2)]),y("div",PC,[y("div",RC,[(Ke(!0),Ye(it,null,id(r.value,(b,v)=>(Ke(),Ye("div",{class:le(["pack-box",{display_none:a.value!==b.trait&&a.value!=="all"},{display_none:l.value!==b.awake&&l.value!==null}])},[y("div",NC,[y("img",{src:s.value[v],alt:""},null,8,OC)]),y("div",DC,[y("div",MC,[y("p",null,"\u6230\u529B\uFF1A"+de(b.attack),1),y("p",null,"\u5C6C\u6027\uFF1A"+de(b.trait),1)]),y("div",LC,[y("button",{onClick:C=>u(b),class:le({display_none:b.awake==!0})},"\u89BA\u9192",10,FC),y("button",{onClick:C=>m(b.number)},"\u8A2D\u70BA\u4EE3\u8868",8,$C),y("button",{onClick:C=>d(b.number)},"\u8A2D\u70BA\u5C01\u9762",8,BC)])])],2))),256))])])])]))}},jC=At(UC,[["__scopeId","data-v-76055567"]]),HC="/Vue3-Vite-Game/assets/pexels-pixabay-268533.074f5772.jpg";const $i=t=>(Wn("data-v-7000bea0"),t=t(),zn(),t),WC={id:"Register"},zC=$i(()=>y("img",{class:"background-img",src:HC,alt:""},null,-1)),VC={class:"login-home"},KC={class:"login-home"},YC=$i(()=>y("h3",null,"\u767B\u5165",-1)),GC=$i(()=>y("h3",null,"*\u5E33\u865F\u8ACB\u52FF\u53C3\u96DC\u7B26\u865F*",-1)),qC={class:"acc"},QC=$i(()=>y("p",null,"\u5E33\u865F\uFF1A",-1)),XC={class:"pas"},JC=$i(()=>y("p",null,"\u5BC6\u78BC\uFF1A",-1)),ZC={class:"login-button"},eE={__name:"Register",setup(t){const n=Ri({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"});Wt(n);const r=et(Wt()),i=Wt(),s=Qt();function o(m){dr(ht(r,`Users/${m}`)).then(g=>{g.exists()?(s.user.account=m,s.user.havecard=g.val().havercard,s.user.remainCard=g.val().remainCard,s.user.team=g.val().team,s.Profile.img=g.val().Profile.img,s.ProfileCover.img=g.val().ProfileCover.img,s.SummonPoints=g.val().SummonPoints,s.AwakePoints=g.val().AwakePoints,s.drama=g.val().drama,s.pvp=g.val().pvp,s.win=g.val().win,s.lose=g.val().lose):console.log("\u6C92\u6709\u8CC7\u6599")}).catch(g=>{console.error(g)})}const a=Nd(),l=K(""),c=K("");function u(){l.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):dr(ht(r,"Users/"+l.value)).then(m=>{m.val()===null?alert("\u67E5\u7121\u6B64\u5E33\u6236"):m.val().password===c.value?(o(l.value),alert("\u767B\u5165\u6210\u529F"),a.replace({path:"/Home"})):alert("\u5BC6\u78BC\u932F\u8AA4")}).catch(m=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}function f(){const m=Qr.filter(b=>b.awake==!1),g=[];let _=[];for(let b=0;b<m.length;b++)g.push(m[b].number);return _=g.filter(b=>b!=="001"&&b!=="003"&&b!=="017"&&b!=="019"&&b!=="021"),_}function d(){l.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):dr(ht(r,"Users/"+l.value)).then(m=>{m.val()===null?(fr(et(i,`Users/${l.value}`),{havercard:["001","003","017","019","021"],remainCard:f(),team:["001","003","017","019","021"],Profile:{img:"003"},ProfileCover:{img:"021"},SummonPoints:10,AwakePoints:5,drama:"a001_01",pvp:0,win:0,lose:0,password:c.value}),alert("\u8A3B\u518A\u5B8C\u6210"),u()):alert("\u5DF2\u6709\u6B64\u5E33\u865F")}).catch(m=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}return(m,g)=>(Ke(),Ye("div",WC,[zC,y("div",{class:le(["login",{display_none:Z(s).user.account==""}])},[y("div",VC,[y("h3",null,"\u4F60\u767B\u5165\uFF0C\u73A9\u5BB6\u540D\u7A31\uFF1A"+de(Z(s).user.account),1),y("button",{onClick:g[0]||(g[0]=_=>Z(a).replace({path:"/Home"}))},"\u9EDE\u64CA\u8FD4\u56DE\u6BBF\u5802")])],2),y("div",{class:le(["login",{display_none:Z(s).user.account!==""}])},[y("div",KC,[YC,GC,y("div",qC,[QC,gs(y("input",{type:"text",placeholder:"\u5E33\u865F",name:"",id:"aa","onUpdate:modelValue":g[1]||(g[1]=_=>l.value=_)},null,512),[[ys,l.value,void 0,{lazy:!0}]])]),y("div",XC,[JC,gs(y("input",{type:"password",placeholder:"\u5BC6\u78BC",name:"",id:"bb","onUpdate:modelValue":g[2]||(g[2]=_=>c.value=_)},null,512),[[ys,c.value,void 0,{lazy:!0}]])]),y("div",ZC,[y("button",{onClick:g[3]||(g[3]=_=>d())},"\u8A3B\u518A"),y("button",{onClick:g[4]||(g[4]=_=>u())},"\u767B\u5165")])])],2)]))}},tE=At(eE,[["__scopeId","data-v-7000bea0"]]);const Gl=t=>(Wn("data-v-49138aac"),t=t(),zn(),t),nE={id:"Battle"},rE={class:"jOc-box"},iE={class:"room-number"},sE=Gl(()=>y("h3",null,"\u623F\u9593\u521D\u5275\u5EFA\u6642\uFF0C\u6575\u4EBA\u6703\u662F\u986F\u793A\u81EA\u5DF1",-1)),oE={class:"room-create player"},aE=Gl(()=>y("h3",null,"\u5275\u5EFA\u8005",-1)),lE={class:"img-box"},cE=["src"],uE={class:"create-name name"},fE={class:"create-data data"},dE={class:"room-join player"},hE=Gl(()=>y("h3",null,"\u6311\u6230\u8005",-1)),mE={class:"img-box"},pE=["src"],gE={class:"join-name name"},_E={class:"join-data data"},vE={class:"room-ready"},yE={class:"chat"},bE={__name:"Battle",setup(t){const n=Ri({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"}),r=Wt(n);et(r,"Room/");const i=et(Wt()),s=Qt(),o=K(""),a=K(!1);K(!1),K(!1),K(!1);const l=K(""),c=K({name:s.user.account,team:s.user.team,icon:s.Profile,pvp:s.pvp,win:s.win,lose:s.lose,ready:!1}),u=K({name:s.user.account,team:s.user.team,icon:s.Profile,pvp:s.pvp,win:s.win,lose:s.lose,ready:!1});function f(){const b=/^\d{4}$/;if(!l.value.trim()||!b.test(l.value)){alert("\u8ACB\u78BA\u8A8D\u623F\u865F\u70BA4\u4F4D\u6578\u5B57");return}dr(ht(i,`Room/${l.value}`)).then(v=>{if(v.val()===null){let C=new Date;o.value="create",fr(et(r,`Room/${l.value}/create`),{name:s.user.account,team:s.user.team,icon:s.Profile,pvp:s.pvp,win:s.win,lose:s.lose,ready:!1,time:C.getFullYear()+"/"+(C.getMonth()+1)+"/"+C.getDate()+"/"+C.getHours()+":"+C.getMinutes()+":"+C.getSeconds()}),fr(et(r,`Room/${l.value}/join`),{name:s.user.account,team:s.user.team,icon:s.Profile,pvp:s.pvp,win:s.win,lose:s.lose,ready:!1,time:C.getFullYear()+"/"+(C.getMonth()+1)+"/"+C.getDate()+"/"+C.getHours()+":"+C.getMinutes()+":"+C.getSeconds()}),Ta(et(r,`Room/${l.value}`),M=>{g()}),alert("\u5275\u5EFA\u5B8C\u6210")}else alert("\u5DF2\u6709\u6B64\u623F\u9593\u865F\u78BC")})}function d(b){return`./imgage/character/c${b}_C.png`}function m(){const b=/^\d{4}$/;if(!l.value.trim()||!b.test(l.value)){alert("\u8ACB\u78BA\u8A8D\u623F\u865F\u70BA4\u4F4D\u6578\u5B57");return}dr(ht(i,`Room/${l.value}`)).then(v=>{if(v.val()!==null){let C=new Date;o.value="join",fr(et(r,`Room/${l.value}/join`),{name:s.user.account,team:s.user.team,icon:s.Profile,pvp:s.pvp,win:s.win,lose:s.lose,ready:!1,time:C.getFullYear()+"/"+(C.getMonth()+1)+"/"+C.getDate()+"/"+C.getHours()+":"+C.getMinutes()+":"+C.getSeconds()}),Ta(et(r,`Room/${l.value}`),M=>{g()}),alert("\u52A0\u5165\u5B8C\u6210")}else alert("\u67E5\u7121\u6B64\u623F\u9593\u865F\u78BC")})}function g(){dr(ht(i,`Room/${l.value}`)).then(b=>{c.value=b.val().create,u.value=b.val().join,b.val().create.ready==!0&&b.val().join.ready==!0&&alert("\u904A\u6232\u958B\u59CB")})}function _(){cm(et(r,`Room/${l.value}/${o.value}`),{ready:a.value})}return st(a,()=>{_()}),(b,v)=>(Ke(),Ye("div",nE,[y("div",{class:le(["joinORcreate",{display_none:o.value!==""}])},[y("div",rE,[gs(y("input",{type:"text","onUpdate:modelValue":v[0]||(v[0]=C=>l.value=C)},null,512),[[ys,l.value]]),y("div",{class:"jOc-button"},[y("button",{onClick:f},"\u5275\u5EFA\u623F\u9593"),y("button",{onClick:m},"\u52A0\u5165\u623F\u9593")])])],2),y("div",{class:le(["room",{display_none:o.value==""}])},[y("div",iE,[y("h3",null,"\u7576\u524D\u623F\u9593\u7DE8\u865F\uFF1A"+de(l.value),1),sE]),y("div",oE,[aE,y("div",lE,[y("img",{src:d(c.value.icon.img),alt:""},null,8,cE)]),y("div",uE,[y("p",null,de(c.value.name),1)]),y("div",fE,"\u5C0D\u6230\uFF1A"+de(c.value.pvp)+"\u5834 - \u52DD\u5229\uFF1A"+de(c.value.win)+"\u5834 - \u5931\u6557\uFF1A"+de(c.value.lose)+"\u5834",1),y("div",{class:le(["ready",{display_none:!c.value.ready}])},"\u5DF2\u6E96\u5099",2),y("div",{class:le(["ready",{display_none:c.value.ready}])},"\u5C1A\u672A\u6E96\u5099",2)]),y("div",dE,[hE,y("div",mE,[y("img",{src:d(u.value.icon.img),alt:""},null,8,pE)]),y("div",gE,[y("p",null,de(u.value.name),1)]),y("div",_E,"\u5C0D\u6230\uFF1A"+de(u.value.pvp)+"\u5834 - \u52DD\u5229\uFF1A"+de(u.value.win)+"\u5834 - \u5931\u6557\uFF1A"+de(u.value.lose)+"\u5834",1),y("div",{class:le(["ready",{display_none:!u.value.ready}])},"\u5DF2\u6E96\u5099",2),y("div",{class:le(["ready",{display_none:u.value.ready}])},"\u5C1A\u672A\u6E96\u5099",2)]),y("div",vE,[y("button",{onClick:v[1]||(v[1]=C=>a.value=!0),class:le({display_none:a.value})},"\u6E96\u5099",2),y("button",{onClick:v[2]||(v[2]=C=>a.value=!1),class:le({display_none:!a.value})},"\u53D6\u6D88\u6E96\u5099",2)])],2),y("div",yE,[ae(um)])]))}},wE=At(bE,[["__scopeId","data-v-49138aac"]]),CE=vv({history:L_("/Vue3-Vite-Game/"),routes:[{path:"/",name:"initial",component:tE},{path:"/Home",name:"home",component:nC,children:[{path:"character",name:"character",component:()=>ti(()=>import("./character.f96280d0.js"),["assets/character.f96280d0.js","assets/character.75cb6d40.css"])},{path:"Info",name:"Info",component:()=>ti(()=>import("./Info.879d192f.js"),["assets/Info.879d192f.js","assets/Info.f6be1269.css"])}]},{path:"/Dialogue",name:"Dialogue",component:mC},{path:"/Summon",name:"Summon",component:EC},{path:"/Pack",name:"Pack",component:jC},{path:"/Battle",name:"Battle",component:wE},{path:"/:404(.*)*",name:"404",component:()=>ti(()=>import("./404.75f95582.js"),[])}]});function Gu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gu(Object(n),!0).forEach(function(r){De(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $s(t){return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$s(t)}function EE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function qu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function kE(t,e,n){return e&&qu(t.prototype,e),n&&qu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function De(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ql(t,e){return IE(t)||TE(t,e)||hm(t,e)||PE()}function Bi(t){return xE(t)||SE(t)||hm(t)||AE()}function xE(t){if(Array.isArray(t))return Pa(t)}function IE(t){if(Array.isArray(t))return t}function SE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function TE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function hm(t,e){if(!!t){if(typeof t=="string")return Pa(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pa(t,e)}}function Pa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function AE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qu=function(){},Ql={},mm={},pm=null,gm={mark:Qu,measure:Qu};try{typeof window<"u"&&(Ql=window),typeof document<"u"&&(mm=document),typeof MutationObserver<"u"&&(pm=MutationObserver),typeof performance<"u"&&(gm=performance)}catch{}var RE=Ql.navigator||{},Xu=RE.userAgent,Ju=Xu===void 0?"":Xu,vn=Ql,we=mm,Zu=pm,Qi=gm;vn.document;var Xt=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",_m=~Ju.indexOf("MSIE")||~Ju.indexOf("Trident/"),Xi,Ji,Zi,es,ts,Kt="___FONT_AWESOME___",Ra=16,vm="fa",ym="svg-inline--fa",Un="data-fa-i2svg",Na="data-fa-pseudo-element",NE="data-fa-pseudo-element-pending",Xl="data-prefix",Jl="data-icon",ef="fontawesome-i2svg",OE="async",DE=["HTML","HEAD","STYLE","SCRIPT"],bm=function(){try{return!0}catch{return!1}}(),be="classic",Ie="sharp",Zl=[be,Ie];function Ui(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var Ei=Ui((Xi={},De(Xi,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),De(Xi,Ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),Xi)),ki=Ui((Ji={},De(Ji,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),De(Ji,Ie,{solid:"fass"}),Ji)),xi=Ui((Zi={},De(Zi,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),De(Zi,Ie,{fass:"fa-solid"}),Zi)),ME=Ui((es={},De(es,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),De(es,Ie,{"fa-solid":"fass"}),es)),LE=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,wm="fa-layers-text",FE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$E=Ui((ts={},De(ts,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),De(ts,Ie,{900:"fass"}),ts)),Cm=[1,2,3,4,5,6,7,8,9,10],BE=Cm.concat([11,12,13,14,15,16,17,18,19,20]),UE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ii=new Set;Object.keys(ki[be]).map(Ii.add.bind(Ii));Object.keys(ki[Ie]).map(Ii.add.bind(Ii));var jE=[].concat(Zl,Bi(Ii),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rn.GROUP,Rn.SWAP_OPACITY,Rn.PRIMARY,Rn.SECONDARY]).concat(Cm.map(function(t){return"".concat(t,"x")})).concat(BE.map(function(t){return"w-".concat(t)})),ni=vn.FontAwesomeConfig||{};function HE(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function WE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(we&&typeof we.querySelector=="function"){var zE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];zE.forEach(function(t){var e=ql(t,2),n=e[0],r=e[1],i=WE(HE(n));i!=null&&(ni[r]=i)})}var Em={styleDefault:"solid",familyDefault:"classic",cssPrefix:vm,replacementClass:ym,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ni.familyPrefix&&(ni.cssPrefix=ni.familyPrefix);var Tr=D(D({},Em),ni);Tr.autoReplaceSvg||(Tr.observeMutations=!1);var F={};Object.keys(Em).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(n){Tr[t]=n,ri.forEach(function(r){return r(F)})},get:function(){return Tr[t]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){Tr.cssPrefix=e,ri.forEach(function(n){return n(F)})},get:function(){return Tr.cssPrefix}});vn.FontAwesomeConfig=F;var ri=[];function VE(t){return ri.push(t),function(){ri.splice(ri.indexOf(t),1)}}var tn=Ra,Mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KE(t){if(!(!t||!Xt)){var e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=we.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return we.head.insertBefore(e,r),t}}var YE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Si(){for(var t=12,e="";t-- >0;)e+=YE[Math.random()*62|0];return e}function Lr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ec(t){return t.classList?Lr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function km(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(km(t[n]),'" ')},"").trim()}function _o(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function tc(t){return t.size!==Mt.size||t.x!==Mt.x||t.y!==Mt.y||t.rotate!==Mt.rotate||t.flipX||t.flipY}function qE(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function QE(t){var e=t.transform,n=t.width,r=n===void 0?Ra:n,i=t.height,s=i===void 0?Ra:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&_m?l+="translate(".concat(e.x/tn-r/2,"em, ").concat(e.y/tn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/tn,"em), calc(-50% + ").concat(e.y/tn,"em)) "):l+="translate(".concat(e.x/tn,"em, ").concat(e.y/tn,"em) "),l+="scale(".concat(e.size/tn*(e.flipX?-1:1),", ").concat(e.size/tn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var XE=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xm(){var t=vm,e=ym,n=F.cssPrefix,r=F.replacementClass,i=XE;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var tf=!1;function Uo(){F.autoAddCss&&!tf&&(KE(xm()),tf=!0)}var JE={mixout:function(){return{dom:{css:xm,insertCss:Uo}}},hooks:function(){return{beforeDOMElementCreation:function(){Uo()},beforeI2svg:function(){Uo()}}}},Yt=vn||{};Yt[Kt]||(Yt[Kt]={});Yt[Kt].styles||(Yt[Kt].styles={});Yt[Kt].hooks||(Yt[Kt].hooks={});Yt[Kt].shims||(Yt[Kt].shims=[]);var kt=Yt[Kt],Im=[],ZE=function t(){we.removeEventListener("DOMContentLoaded",t),Bs=1,Im.map(function(e){return e()})},Bs=!1;Xt&&(Bs=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Bs||we.addEventListener("DOMContentLoaded",ZE));function ek(t){!Xt||(Bs?setTimeout(t,0):Im.push(t))}function ji(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?km(t):"<".concat(e," ").concat(GE(r),">").concat(s.map(ji).join(""),"</").concat(e,">")}function nf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var tk=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},jo=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?tk(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function nk(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Oa(t){var e=nk(t);return e.length===1?e[0].toString(16):null}function rk(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function rf(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Da(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=rf(e);typeof kt.hooks.addPack=="function"&&!i?kt.hooks.addPack(t,rf(e)):kt.styles[t]=D(D({},kt.styles[t]||{}),s),t==="fas"&&Da("fa",e)}var ns,rs,is,nr=kt.styles,ik=kt.shims,sk=(ns={},De(ns,be,Object.values(xi[be])),De(ns,Ie,Object.values(xi[Ie])),ns),nc=null,Sm={},Tm={},Am={},Pm={},Rm={},ok=(rs={},De(rs,be,Object.keys(Ei[be])),De(rs,Ie,Object.keys(Ei[Ie])),rs);function ak(t){return~jE.indexOf(t)}function lk(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!ak(i)?i:null}var Nm=function(){var e=function(s){return jo(nr,function(o,a,l){return o[l]=jo(a,s,{}),o},{})};Sm=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Tm=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Rm=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in nr||F.autoFetchSvg,r=jo(ik,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Am=r.names,Pm=r.unicodes,nc=vo(F.styleDefault,{family:F.familyDefault})};VE(function(t){nc=vo(t.styleDefault,{family:F.familyDefault})});Nm();function rc(t,e){return(Sm[t]||{})[e]}function ck(t,e){return(Tm[t]||{})[e]}function Nn(t,e){return(Rm[t]||{})[e]}function Om(t){return Am[t]||{prefix:null,iconName:null}}function uk(t){var e=Pm[t],n=rc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yn(){return nc}var ic=function(){return{prefix:null,iconName:null,rest:[]}};function vo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=Ei[r][t],s=ki[r][t]||ki[r][i],o=t in kt.styles?t:null;return s||o||null}var sf=(is={},De(is,be,Object.keys(xi[be])),De(is,Ie,Object.keys(xi[Ie])),is);function yo(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},De(e,be,"".concat(F.cssPrefix,"-").concat(be)),De(e,Ie,"".concat(F.cssPrefix,"-").concat(Ie)),e),o=null,a=be;(t.includes(s[be])||t.some(function(c){return sf[be].includes(c)}))&&(a=be),(t.includes(s[Ie])||t.some(function(c){return sf[Ie].includes(c)}))&&(a=Ie);var l=t.reduce(function(c,u){var f=lk(F.cssPrefix,u);if(nr[u]?(u=sk[a].includes(u)?ME[a][u]:u,o=u,c.prefix=u):ok[a].indexOf(u)>-1?(o=u,c.prefix=vo(u,{family:a})):f?c.iconName=f:u!==F.replacementClass&&u!==s[be]&&u!==s[Ie]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var d=o==="fa"?Om(c.iconName):{},m=Nn(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!nr.far&&nr.fas&&!F.autoFetchSvg&&(c.prefix="fas")}return c},ic());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ie&&(nr.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Nn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yn()||"fas"),l}var fk=function(){function t(){EE(this,t),this.definitions={}}return kE(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Da(a,o[a]);var l=xi[be][a];l&&Da(l,o[a]),Nm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),of=[],rr={},hr={},dk=Object.keys(hr);function hk(t,e){var n=e.mixoutsTo;return of=t,rr={},Object.keys(hr).forEach(function(r){dk.indexOf(r)===-1&&delete hr[r]}),of.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$s(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){rr[o]||(rr[o]=[]),rr[o].push(s[o])})}r.provides&&r.provides(hr)}),n}function Ma(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=rr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function jn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=rr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Gt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hr[t]?hr[t].apply(null,e):void 0}function La(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yn();if(!!e)return e=Nn(n,e)||e,nf(Dm.definitions,n,e)||nf(kt.styles,n,e)}var Dm=new fk,mk=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,jn("noAuto")},pk={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xt?(jn("beforeI2svg",e),Gt("pseudoElements2svg",e),Gt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,ek(function(){_k({autoReplaceSvgRoot:n}),jn("watch",e)})}},gk={icon:function(e){if(e===null)return null;if($s(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Nn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=vo(e[0]);return{prefix:r,iconName:Nn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(F.cssPrefix,"-"))>-1||e.match(LE))){var i=yo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||yn(),iconName:Nn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=yn();return{prefix:s,iconName:Nn(s,e)||e}}}},at={noAuto:mk,config:F,dom:pk,parse:gk,library:Dm,findIconDefinition:La,toHtml:ji},_k=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?we:n;(Object.keys(kt.styles).length>0||F.autoFetchSvg)&&Xt&&F.autoReplaceSvg&&at.dom.i2svg({node:r})};function bo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ji(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Xt){var r=we.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function vk(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(tc(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=_o(D(D({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function yk(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(F.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function sc(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,g=r.found?r:n,_=g.width,b=g.height,v=i==="fak",C=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(Ce){return f.classes.indexOf(Ce)===-1}).filter(function(Ce){return Ce!==""||!!Ce}).concat(f.classes).join(" "),M={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:C,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(b)})},j=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/b*16*.0625,"em")}:{};m&&(M.attributes[Un]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||Si())},children:[l]}),delete M.attributes.title);var W=D(D({},M),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:D(D({},j),f.styles)}),oe=r.found&&n.found?Gt("generateAbstractMask",W)||{children:[],attributes:{}}:Gt("generateAbstractIcon",W)||{children:[],attributes:{}},z=oe.children,J=oe.attributes;return W.children=z,W.attributes=J,a?yk(W):vk(W)}function af(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Un]="");var u=D({},o.styles);tc(i)&&(u.transform=QE({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=_o(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function bk(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=_o(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ho=kt.styles;function Fa(t){var e=t[0],n=t[1],r=t.slice(4),i=ql(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var wk={found:!1,width:512,height:512};function Ck(t,e){!bm&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $a(t,e){var n=e;return e==="fa"&&F.styleDefault!==null&&(e=yn()),new Promise(function(r,i){if(Gt("missingIconAbstract"),n==="fa"){var s=Om(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ho[e]&&Ho[e][t]){var o=Ho[e][t];return r(Fa(o))}Ck(t,e),r(D(D({},wk),{},{icon:F.showMissingIcons&&t?Gt("missingIconAbstract")||{}:{}}))})}var lf=function(){},Ba=F.measurePerformance&&Qi&&Qi.mark&&Qi.measure?Qi:{mark:lf,measure:lf},Vr='FA "6.2.0"',Ek=function(e){return Ba.mark("".concat(Vr," ").concat(e," begins")),function(){return Mm(e)}},Mm=function(e){Ba.mark("".concat(Vr," ").concat(e," ends")),Ba.measure("".concat(Vr," ").concat(e),"".concat(Vr," ").concat(e," begins"),"".concat(Vr," ").concat(e," ends"))},oc={begin:Ek,end:Mm},fs=function(){};function cf(t){var e=t.getAttribute?t.getAttribute(Un):null;return typeof e=="string"}function kk(t){var e=t.getAttribute?t.getAttribute(Xl):null,n=t.getAttribute?t.getAttribute(Jl):null;return e&&n}function xk(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function Ik(){if(F.autoReplaceSvg===!0)return ds.replace;var t=ds[F.autoReplaceSvg];return t||ds.replace}function Sk(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function Tk(t){return we.createElement(t)}function Lm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Sk:Tk:n;if(typeof t=="string")return we.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Lm(o,{ceFn:r}))}),i}function Ak(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ds={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Lm(i),n)}),n.getAttribute(Un)===null&&F.keepOriginalSource){var r=we.createComment(Ak(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ec(n).indexOf(F.replacementClass))return ds.replace(e);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===F.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ji(a)}).join(`
`);n.setAttribute(Un,""),n.innerHTML=o}};function uf(t){t()}function Fm(t,e){var n=typeof e=="function"?e:fs;if(t.length===0)n();else{var r=uf;F.mutateApproach===OE&&(r=vn.requestAnimationFrame||uf),r(function(){var i=Ik(),s=oc.begin("mutate");t.map(i),s(),n()})}}var ac=!1;function $m(){ac=!0}function Ua(){ac=!1}var Us=null;function ff(t){if(!!Zu&&!!F.observeMutations){var e=t.treeCallback,n=e===void 0?fs:e,r=t.nodeCallback,i=r===void 0?fs:r,s=t.pseudoElementsCallback,o=s===void 0?fs:s,a=t.observeMutationsRoot,l=a===void 0?we:a;Us=new Zu(function(c){if(!ac){var u=yn();Lr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!cf(f.addedNodes[0])&&(F.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&cf(f.target)&&~UE.indexOf(f.attributeName))if(f.attributeName==="class"&&kk(f.target)){var d=yo(ec(f.target)),m=d.prefix,g=d.iconName;f.target.setAttribute(Xl,m||u),g&&f.target.setAttribute(Jl,g)}else xk(f.target)&&i(f.target)})}}),Xt&&Us.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pk(){!Us||Us.disconnect()}function Rk(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Nk(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=yo(ec(t));return i.prefix||(i.prefix=yn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ck(i.prefix,t.innerText)||rc(i.prefix,Oa(t.innerText))),!i.iconName&&F.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ok(t){var e=Lr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return F.autoA11y&&(n?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Si()):(e["aria-hidden"]="true",e.focusable="false")),e}function Dk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function df(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Nk(t),r=n.iconName,i=n.prefix,s=n.rest,o=Ok(t),a=Ma("parseNodeAttributes",{},t),l=e.styleParser?Rk(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Mk=kt.styles;function Bm(t){var e=F.autoReplaceSvg==="nest"?df(t,{styleParser:!1}):df(t);return~e.extra.classes.indexOf(wm)?Gt("generateLayersText",t,e):Gt("generateSvgReplacementMutation",t,e)}var bn=new Set;Zl.map(function(t){bn.add("fa-".concat(t))});Object.keys(Ei[be]).map(bn.add.bind(bn));Object.keys(Ei[Ie]).map(bn.add.bind(bn));bn=Bi(bn);function hf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xt)return Promise.resolve();var n=we.documentElement.classList,r=function(f){return n.add("".concat(ef,"-").concat(f))},i=function(f){return n.remove("".concat(ef,"-").concat(f))},s=F.autoFetchSvg?bn:Zl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Mk));s.includes("fa")||s.push("fa");var o=[".".concat(wm,":not([").concat(Un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Lr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=oc.begin("onTree"),c=a.reduce(function(u,f){try{var d=Bm(f);d&&u.push(d)}catch(m){bm||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Fm(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function Lk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bm(t).then(function(n){n&&Fm([n],e)})}function Fk(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:La(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:La(i||{})),t(r,D(D({},n),{},{mask:i}))}}var $k=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Mt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,m=n.titleId,g=m===void 0?null:m,_=n.classes,b=_===void 0?[]:_,v=n.attributes,C=v===void 0?{}:v,M=n.styles,j=M===void 0?{}:M;if(!!e){var W=e.prefix,oe=e.iconName,z=e.icon;return bo(D({type:"icon"},e),function(){return jn("beforeDOMElementCreation",{iconDefinition:e,params:n}),F.autoA11y&&(d?C["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(g||Si()):(C["aria-hidden"]="true",C.focusable="false")),sc({icons:{main:Fa(z),mask:l?Fa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:oe,transform:D(D({},Mt),i),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:C,styles:j,classes:b}})})}},Bk={mixout:function(){return{icon:Fk($k)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hf,n.nodeCallback=Lk,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?we:r,s=n.callback,o=s===void 0?function(){}:s;return hf(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,g){Promise.all([$a(i,a),u.iconName?$a(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var b=ql(_,2),v=b[0],C=b[1];m([n,sc({icons:{main:v,mask:C},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=_o(a);l.length>0&&(i.style=l);var c;return tc(o)&&(c=Gt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Uk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return bo({type:"layer"},function(){jn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Bi(s)).join(" ")},children:o}]})}}}},jk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return bo({type:"counter",content:n},function(){return jn("beforeDOMElementCreation",{content:n,params:r}),bk({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Bi(a))}})})}}}},Hk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Mt:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return bo({type:"text",content:n},function(){return jn("beforeDOMElementCreation",{content:n,params:r}),af({content:n,transform:D(D({},Mt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Bi(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(_m){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,af({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Wk=new RegExp('"',"ug"),mf=[1105920,1112319];function zk(t){var e=t.replace(Wk,""),n=rk(e,0),r=n>=mf[0]&&n<=mf[1],i=e.length===2?e[0]===e[1]:!1;return{value:Oa(i?e[0]:e),isSecondary:r||i}}function pf(t,e){var n="".concat(NE).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Lr(t.children),o=s.filter(function(z){return z.getAttribute(Na)===e})[0],a=vn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(FE),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Ie:be,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ki[d][l[2].toLowerCase()]:$E[d][c],g=zk(f),_=g.value,b=g.isSecondary,v=l[0].startsWith("FontAwesome"),C=rc(m,_),M=C;if(v){var j=uk(_);j.iconName&&j.prefix&&(C=j.iconName,m=j.prefix)}if(C&&!b&&(!o||o.getAttribute(Xl)!==m||o.getAttribute(Jl)!==M)){t.setAttribute(n,M),o&&t.removeChild(o);var W=Dk(),oe=W.extra;oe.attributes[Na]=e,$a(C,m).then(function(z){var J=sc(D(D({},W),{},{icons:{main:z,mask:ic()},prefix:m,iconName:M,extra:oe,watchable:!0})),Ce=we.createElement("svg");e==="::before"?t.insertBefore(Ce,t.firstChild):t.appendChild(Ce),Ce.outerHTML=J.map(function(Me){return ji(Me)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Vk(t){return Promise.all([pf(t,"::before"),pf(t,"::after")])}function Kk(t){return t.parentNode!==document.head&&!~DE.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Na)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function gf(t){if(!!Xt)return new Promise(function(e,n){var r=Lr(t.querySelectorAll("*")).filter(Kk).map(Vk),i=oc.begin("searchPseudoElements");$m(),Promise.all(r).then(function(){i(),Ua(),e()}).catch(function(){i(),Ua(),n()})})}var Yk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gf,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?we:r;F.searchPseudoElements&&gf(i)}}},_f=!1,Gk={mixout:function(){return{dom:{unwatch:function(){$m(),_f=!0}}}},hooks:function(){return{bootstrap:function(){ff(Ma("mutationObserverCallbacks",{}))},noAuto:function(){Pk()},watch:function(n){var r=n.observeMutationsRoot;_f?Ua():ff(Ma("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vf=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},qk={mixout:function(){return{parse:{transform:function(n){return vf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=vf(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:d};return{tag:"g",attributes:D({},m.outer),children:[{tag:"g",attributes:D({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),m.path)}]}]}}}},Wo={x:0,y:0,width:"100%",height:"100%"};function yf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Qk(t){return t.tag==="g"?t.children:[t]}var Xk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?yo(i.split(" ").map(function(o){return o.trim()})):ic();return s.prefix||(s.prefix=yn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,m=qE({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:D(D({},Wo),{},{fill:"white"})},_=u.children?{children:u.children.map(yf)}:{},b={tag:"g",attributes:D({},m.inner),children:[yf(D({tag:u.tag,attributes:D(D({},u.attributes),m.path)},_))]},v={tag:"g",attributes:D({},m.outer),children:[b]},C="mask-".concat(a||Si()),M="clip-".concat(a||Si()),j={tag:"mask",attributes:D(D({},Wo),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Qk(d)},j]};return r.push(W,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(C,")")},Wo)}),{children:r,attributes:i}}}},Jk={provides:function(e){var n=!1;vn.matchMedia&&(n=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},ex=[JE,Bk,Uk,jk,Hk,Yk,Gk,qk,Xk,Jk,Zk];hk(ex,{mixoutsTo:at});at.noAuto;var Um=at.config,tx=at.library;at.dom;var js=at.parse;at.findIconDefinition;at.toHtml;var nx=at.icon;at.layer;var rx=at.text;at.counter;function bf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?bf(Object(n),!0).forEach(function(r){Je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hs(t){return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hs(t)}function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ix(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sx(t,e){if(t==null)return{};var n=ix(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function ja(t){return ox(t)||ax(t)||lx(t)||cx()}function ox(t){if(Array.isArray(t))return Ha(t)}function ax(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lx(t,e){if(!!t){if(typeof t=="string")return Ha(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ha(t,e)}}function Ha(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ux=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jm={exports:{}};(function(t){(function(e){var n=function(v,C,M){if(!c(C)||f(C)||d(C)||m(C)||l(C))return C;var j,W=0,oe=0;if(u(C))for(j=[],oe=C.length;W<oe;W++)j.push(n(v,C[W],M));else{j={};for(var z in C)Object.prototype.hasOwnProperty.call(C,z)&&(j[v(z,M)]=n(v,C[z],M))}return j},r=function(v,C){C=C||{};var M=C.separator||"_",j=C.split||/(?=[A-Z])/;return v.split(j).join(M)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(C,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var C=i(v);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(v,C){return r(v,C).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},m=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},_=function(v,C){var M=C&&"process"in C?C.process:C;return typeof M!="function"?v:function(j,W){return M(j,v,W)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,C){return n(_(i,C),v)},decamelizeKeys:function(v,C){return n(_(o,C),v,C)},pascalizeKeys:function(v,C){return n(_(s,C),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(ux)})(jm);var fx=jm.exports,dx=["class","style"];function hx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=fx.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function mx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function lc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return lc(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=mx(u);break;case"style":l.style=hx(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=sx(n,dx);return Zs(t.tag,bt(bt(bt({},e),{},{class:i.class,style:bt(bt({},i.style),o)},i.attrs),a),r)}var Hm=!1;try{Hm=!0}catch{}function px(){if(!Hm&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ii(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Je({},t,e):{}}function gx(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Je(e,"fa-".concat(t.size),t.size!==null),Je(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Je(e,"fa-pull-".concat(t.pull),t.pull!==null),Je(e,"fa-swap-opacity",t.swapOpacity),Je(e,"fa-bounce",t.bounce),Je(e,"fa-shake",t.shake),Je(e,"fa-beat",t.beat),Je(e,"fa-fade",t.fade),Je(e,"fa-beat-fade",t.beatFade),Je(e,"fa-flash",t.flash),Je(e,"fa-spin-pulse",t.spinPulse),Je(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function wf(t){if(t&&Hs(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(js.icon)return js.icon(t);if(t===null)return null;if(Hs(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var _x=Ti({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Ee(function(){return wf(e.icon)}),s=Ee(function(){return ii("classes",gx(e))}),o=Ee(function(){return ii("transform",typeof e.transform=="string"?js.transform(e.transform):e.transform)}),a=Ee(function(){return ii("mask",wf(e.mask))}),l=Ee(function(){return nx(i.value,bt(bt(bt(bt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});st(l,function(u){if(!u)return px("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=Ee(function(){return l.value?lc(l.value.abstract[0],{},r):null});return function(){return c.value}}});Ti({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Um.familyPrefix,s=Ee(function(){return["".concat(i,"-layers")].concat(ja(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Zs("div",{class:s.value},r.default?r.default():[])}}});Ti({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Um.familyPrefix,s=Ee(function(){return ii("classes",[].concat(ja(e.counter?["".concat(i,"-layers-counter")]:[]),ja(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=Ee(function(){return ii("transform",typeof e.transform=="string"?js.transform(e.transform):e.transform)}),a=Ee(function(){var c=rx(e.value.toString(),bt(bt({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ee(function(){return lc(a.value,{},r)});return function(){return l.value}}});var vx={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},yx={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"]};tx.add(vx,yx);const wo=c_(_w);wo.component("font-awesome-icon",_x);wo.use(d_());wo.use(CE);wo.mount("#app");document.oncontextmenu=function(){window.event.returnValue=!1};export{Qr as C,it as F,At as _,y as a,id as b,Ye as c,zn as d,le as n,Ke as o,Wn as p,K as r,de as t,Qt as u,st as w};
