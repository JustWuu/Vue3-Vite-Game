(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Da(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tp=Da(Sp);function hf(t){return!!t||t===""}function Ma(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=$e(r)?Rp(r):Ma(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if($e(t))return t;if(Ee(t))return t}}const Ap=/;(?![^(]*\))/g,Pp=/:(.+)/;function Rp(t){const e={};return t.split(Ap).forEach(n=>{if(n){const r=n.split(Pp);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ke(t){let e="";if($e(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=ke(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const je=t=>$e(t)?t:t==null?"":K(t)||Ee(t)&&(t.toString===_f||!Y(t.toString))?JSON.stringify(t,pf,2):String(t),pf=(t,e)=>e&&e.__v_isRef?pf(t,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:mf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!K(e)&&!vf(e)?String(e):e,de={},Zn=[],Et=()=>{},Np=()=>!1,Op=/^on[^a-z]/,Ls=t=>Op.test(t),La=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Fa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dp=Object.prototype.hasOwnProperty,te=(t,e)=>Dp.call(t,e),K=Array.isArray,er=t=>Fs(t)==="[object Map]",mf=t=>Fs(t)==="[object Set]",Y=t=>typeof t=="function",$e=t=>typeof t=="string",$a=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",gf=t=>Ee(t)&&Y(t.then)&&Y(t.catch),_f=Object.prototype.toString,Fs=t=>_f.call(t),Mp=t=>Fs(t).slice(8,-1),vf=t=>Fs(t)==="[object Object]",Ua=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,es=Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lp=/-(\w)/g,cr=$s(t=>t.replace(Lp,(e,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,Cr=$s(t=>t.replace(Fp,"-$1").toLowerCase()),yf=$s(t=>t.charAt(0).toUpperCase()+t.slice(1)),po=$s(t=>t?`on${yf(t)}`:""),ti=(t,e)=>!Object.is(t,e),ts=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ls=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rc;const $p=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class bf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function wf(t){return new bf(t)}function Up(t,e=Pt){e&&e.active&&e.effects.push(t)}const Ba=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ef=t=>(t.w&un)>0,Cf=t=>(t.n&un)>0,Bp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=un},Hp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Ef(i)&&!Cf(i)?i.delete(t):e[n++]=i,i.w&=~un,i.n&=~un}e.length=n}},$o=new WeakMap;let Br=0,un=1;const Uo=30;let mt;const Nn=Symbol(""),Bo=Symbol("");class Ha{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Up(this,r)}run(){if(!this.active)return this.fn();let e=mt,n=nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,nn=!0,un=1<<++Br,Br<=Uo?Bp(this):ic(this),this.fn()}finally{Br<=Uo&&Hp(this),un=1<<--Br,mt=this.parent,nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(ic(this),this.onStop&&this.onStop(),this.active=!1)}}function ic(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nn=!0;const kf=[];function kr(){kf.push(nn),nn=!1}function xr(){const t=kf.pop();nn=t===void 0?!0:t}function it(t,e,n){if(nn&&mt){let r=$o.get(t);r||$o.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ba()),xf(i)}}function xf(t,e){let n=!1;Br<=Uo?Cf(t)||(t.n|=un,n=!Ef(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function Bt(t,e,n,r,i,s){const o=$o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Ua(n)&&a.push(o.get("length")):(a.push(o.get(Nn)),er(t)&&a.push(o.get(Bo)));break;case"delete":K(t)||(a.push(o.get(Nn)),er(t)&&a.push(o.get(Bo)));break;case"set":er(t)&&a.push(o.get(Nn));break}if(a.length===1)a[0]&&Ho(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ho(Ba(l))}}function Ho(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&sc(r);for(const r of n)r.computed||sc(r)}function sc(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jp=Da("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($a)),Wp=ja(),zp=ja(!1,!0),Vp=ja(!0),oc=Kp();function Kp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let s=0,o=this.length;s<o;s++)it(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kr();const r=se(this)[e].apply(this,n);return xr(),r}}),t}function ja(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?lm:Rf:e?Pf:Af).get(r))return r;const o=K(r);if(!t&&o&&te(oc,i))return Reflect.get(oc,i,s);const a=Reflect.get(r,i,s);return($a(i)?If.has(i):jp(i))||(t||it(r,"get",i),e)?a:Te(a)?o&&Ua(i)?a:a.value:Ee(a)?t?Nf(a):Ir(a):a}}const Yp=Sf(),Gp=Sf(!0);function Sf(t=!1){return function(n,r,i,s){let o=n[r];if(ur(o)&&Te(o)&&!Te(i))return!1;if(!t&&(!cs(i)&&!ur(i)&&(o=se(o),i=se(i)),!K(n)&&Te(o)&&!Te(i)))return o.value=i,!0;const a=K(n)&&Ua(r)?Number(r)<n.length:te(n,r),l=Reflect.set(n,r,i,s);return n===se(s)&&(a?ti(i,o)&&Bt(n,"set",r,i):Bt(n,"add",r,i)),l}}function qp(t,e){const n=te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Bt(t,"delete",e,void 0),r}function Qp(t,e){const n=Reflect.has(t,e);return(!$a(e)||!If.has(e))&&it(t,"has",e),n}function Xp(t){return it(t,"iterate",K(t)?"length":Nn),Reflect.ownKeys(t)}const Tf={get:Wp,set:Yp,deleteProperty:qp,has:Qp,ownKeys:Xp},Jp={get:Vp,set(t,e){return!0},deleteProperty(t,e){return!0}},Zp=Ye({},Tf,{get:zp,set:Gp}),Wa=t=>t,Us=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,r=!1){t=t.__v_raw;const i=se(t),s=se(e);n||(e!==s&&it(i,"get",e),it(i,"get",s));const{has:o}=Us(i),a=r?Wa:n?Ka:ni;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ui(t,e=!1){const n=this.__v_raw,r=se(n),i=se(t);return e||(t!==i&&it(r,"has",t),it(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Bi(t,e=!1){return t=t.__v_raw,!e&&it(se(t),"iterate",Nn),Reflect.get(t,"size",t)}function ac(t){t=se(t);const e=se(this);return Us(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function lc(t,e){e=se(e);const n=se(this),{has:r,get:i}=Us(n);let s=r.call(n,t);s||(t=se(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ti(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function cc(t){const e=se(this),{has:n,get:r}=Us(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Bt(e,"delete",t,void 0),s}function uc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function Hi(t,e){return function(r,i){const s=this,o=s.__v_raw,a=se(o),l=e?Wa:t?Ka:ni;return!t&&it(a,"iterate",Nn),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ji(t,e,n){return function(...r){const i=this.__v_raw,s=se(i),o=er(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Wa:e?Ka:ni;return!e&&it(s,"iterate",l?Bo:Nn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function qt(t){return function(...e){return t==="delete"?!1:this}}function em(){const t={get(s){return $i(this,s)},get size(){return Bi(this)},has:Ui,add:ac,set:lc,delete:cc,clear:uc,forEach:Hi(!1,!1)},e={get(s){return $i(this,s,!1,!0)},get size(){return Bi(this)},has:Ui,add:ac,set:lc,delete:cc,clear:uc,forEach:Hi(!1,!0)},n={get(s){return $i(this,s,!0)},get size(){return Bi(this,!0)},has(s){return Ui.call(this,s,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Hi(!0,!1)},r={get(s){return $i(this,s,!0,!0)},get size(){return Bi(this,!0)},has(s){return Ui.call(this,s,!0)},add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear"),forEach:Hi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ji(s,!1,!1),n[s]=ji(s,!0,!1),e[s]=ji(s,!1,!0),r[s]=ji(s,!0,!0)}),[t,n,e,r]}const[tm,nm,rm,im]=em();function za(t,e){const n=e?t?im:rm:t?nm:tm;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(te(n,i)&&i in r?n:r,i,s)}const sm={get:za(!1,!1)},om={get:za(!1,!0)},am={get:za(!0,!1)},Af=new WeakMap,Pf=new WeakMap,Rf=new WeakMap,lm=new WeakMap;function cm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function um(t){return t.__v_skip||!Object.isExtensible(t)?0:cm(Mp(t))}function Ir(t){return ur(t)?t:Va(t,!1,Tf,sm,Af)}function fm(t){return Va(t,!1,Zp,om,Pf)}function Nf(t){return Va(t,!0,Jp,am,Rf)}function Va(t,e,n,r,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=um(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function rn(t){return ur(t)?rn(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function cs(t){return!!(t&&t.__v_isShallow)}function Of(t){return rn(t)||ur(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function fr(t){return ls(t,"__v_skip",!0),t}const ni=t=>Ee(t)?Ir(t):t,Ka=t=>Ee(t)?Nf(t):t;function Df(t){nn&&mt&&(t=se(t),xf(t.dep||(t.dep=Ba())))}function Mf(t,e){t=se(t),t.dep&&Ho(t.dep)}function Te(t){return!!(t&&t.__v_isRef===!0)}function ne(t){return Lf(t,!1)}function dm(t){return Lf(t,!0)}function Lf(t,e){return Te(t)?t:new hm(t,e)}class hm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:ni(e)}get value(){return Df(this),this._value}set value(e){const n=this.__v_isShallow||cs(e)||ur(e);e=n?e:se(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),Mf(this))}}function X(t){return Te(t)?t.value:t}const pm={get:(t,e,n)=>X(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ff(t){return rn(t)?t:new Proxy(t,pm)}function mm(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=_m(t,n);return e}class gm{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function _m(t,e,n){const r=t[e];return Te(r)?r:new gm(t,e,n)}var $f;class vm{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[$f]=!1,this._dirty=!0,this.effect=new Ha(e,()=>{this._dirty||(this._dirty=!0,Mf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=se(this);return Df(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$f="__v_isReadonly";function ym(t,e,n=!1){let r,i;const s=Y(t);return s?(r=t,i=Et):(r=t.get,i=t.set),new vm(r,i,s||!i,n)}function sn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Bs(s,e,n)}return i}function Ct(t,e,n,r){if(Y(t)){const s=sn(t,e,n,r);return s&&gf(s)&&s.catch(o=>{Bs(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ct(t[s],e,n,r));return i}function Bs(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){sn(l,null,10,[t,o,a]);return}}bm(t,n,i,r)}function bm(t,e,n,r=!0){console.error(t)}let ri=!1,jo=!1;const We=[];let Nt=0;const tr=[];let Ft=null,In=0;const Uf=Promise.resolve();let Ya=null;function Ga(t){const e=Ya||Uf;return t?e.then(this?t.bind(this):t):e}function wm(t){let e=Nt+1,n=We.length;for(;e<n;){const r=e+n>>>1;ii(We[r])<t?e=r+1:n=r}return e}function qa(t){(!We.length||!We.includes(t,ri&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?We.push(t):We.splice(wm(t.id),0,t),Bf())}function Bf(){!ri&&!jo&&(jo=!0,Ya=Uf.then(jf))}function Em(t){const e=We.indexOf(t);e>Nt&&We.splice(e,1)}function Cm(t){K(t)?tr.push(...t):(!Ft||!Ft.includes(t,t.allowRecurse?In+1:In))&&tr.push(t),Bf()}function fc(t,e=ri?Nt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function Hf(t){if(tr.length){const e=[...new Set(tr)];if(tr.length=0,Ft){Ft.push(...e);return}for(Ft=e,Ft.sort((n,r)=>ii(n)-ii(r)),In=0;In<Ft.length;In++)Ft[In]();Ft=null,In=0}}const ii=t=>t.id==null?1/0:t.id,km=(t,e)=>{const n=ii(t)-ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jf(t){jo=!1,ri=!0,We.sort(km);const e=Et;try{for(Nt=0;Nt<We.length;Nt++){const n=We[Nt];n&&n.active!==!1&&sn(n,null,14)}}finally{Nt=0,We.length=0,Hf(),ri=!1,Ya=null,(We.length||tr.length)&&jf()}}function xm(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||de;d&&(i=n.map(p=>p.trim())),f&&(i=n.map(Fo))}let a,l=r[a=po(e)]||r[a=po(cr(e))];!l&&s&&(l=r[a=po(Cr(e))]),l&&Ct(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(c,t,6,i)}}function Wf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Wf(c,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ee(t)&&r.set(t,null),null):(K(s)?s.forEach(l=>o[l]=null):Ye(o,s),Ee(t)&&r.set(t,o),o)}function Hs(t,e){return!t||!Ls(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Cr(e))||te(t,e))}let vt=null,js=null;function us(t){const e=vt;return vt=t,js=t&&t.type.__scopeId||null,e}function _n(t){js=t}function vn(){js=null}function at(t,e=vt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&wc(-1);const s=us(e);let o;try{o=t(...i)}finally{us(s),r._d&&wc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=t;let b,v;const k=us(t);try{if(n.shapeFlag&4){const H=i||r;b=Rt(u.call(H,H,f,s,p,d,g)),v=l}else{const H=e;b=Rt(H.length>1?H(s,{attrs:l,slots:a,emit:c}):H(s,null)),v=e.props?l:Im(l)}}catch(H){jr.length=0,Bs(H,t,1),b=le(si)}let M=b;if(v&&_!==!1){const H=Object.keys(v),{shapeFlag:W}=M;H.length&&W&7&&(o&&H.some(La)&&(v=Sm(v,o)),M=dr(M,v))}return n.dirs&&(M=dr(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),b=M,us(k),b}const Im=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ls(n))&&((e||(e={}))[n]=t[n]);return e},Sm=(t,e)=>{const n={};for(const r in t)(!La(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tm(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?dc(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Hs(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?dc(r,o,c):!0:!!o;return!1}function dc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Hs(n,s))return!0}return!1}function Am({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pm=t=>t.__isSuspense;function Rm(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Cm(t)}function ns(t,e){if(Be){let n=Be.provides;const r=Be.parent&&Be.parent.provides;r===n&&(n=Be.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=Be||vt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(r.proxy):e}}const hc={};function kt(t,e,n){return zf(t,e,n)}function zf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=de){const a=Be;let l,c=!1,u=!1;if(Te(t)?(l=()=>t.value,c=cs(t)):rn(t)?(l=()=>t,r=!0):K(t)?(u=!0,c=t.some(v=>rn(v)||cs(v)),l=()=>t.map(v=>{if(Te(v))return v.value;if(rn(v))return Tn(v);if(Y(v))return sn(v,a,2)})):Y(t)?e?l=()=>sn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ct(t,a,3,[d])}:l=Et,e&&r){const v=l;l=()=>Tn(v())}let f,d=v=>{f=b.onStop=()=>{sn(v,a,4)}};if(ai)return d=Et,e?n&&Ct(e,a,3,[l(),u?[]:void 0,d]):l(),Et;let p=u?[]:hc;const g=()=>{if(!!b.active)if(e){const v=b.run();(r||c||(u?v.some((k,M)=>ti(k,p[M])):ti(v,p)))&&(f&&f(),Ct(e,a,3,[v,p===hc?void 0:p,d]),p=v)}else b.run()};g.allowRecurse=!!e;let _;i==="sync"?_=g:i==="post"?_=()=>Xe(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),_=()=>qa(g));const b=new Ha(l,_);return e?n?g():p=b.run():i==="post"?Xe(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&Fa(a.scope.effects,b)}}function Nm(t,e,n){const r=this.proxy,i=$e(t)?t.includes(".")?Vf(r,t):()=>r[t]:t.bind(r,r);let s;Y(e)?s=e:(s=e.handler,n=e);const o=Be;hr(this);const a=zf(i,s.bind(r),n);return o?hr(o):On(),a}function Vf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Tn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))Tn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Tn(t[n],e);else if(mf(t)||er(t))t.forEach(n=>{Tn(n,e)});else if(vf(t))for(const n in t)Tn(t[n],e);return t}function xi(t){return Y(t)?{setup:t,name:t.name}:t}const rs=t=>!!t.type.__asyncLoader,Kf=t=>t.type.__isKeepAlive;function Om(t,e){Yf(t,"a",e)}function Dm(t,e){Yf(t,"da",e)}function Yf(t,e,n=Be){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ws(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Kf(i.parent.vnode)&&Mm(r,e,n,i),i=i.parent}}function Mm(t,e,n,r){const i=Ws(e,t,r,!0);Qa(()=>{Fa(r[e],i)},n)}function Ws(t,e,n=Be,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;kr(),hr(n);const a=Ct(e,n,t,o);return On(),xr(),a});return r?i.unshift(s):i.push(s),s}}const Vt=t=>(e,n=Be)=>(!ai||t==="sp")&&Ws(t,(...r)=>e(...r),n),Lm=Vt("bm"),Gf=Vt("m"),Fm=Vt("bu"),$m=Vt("u"),Um=Vt("bum"),Qa=Vt("um"),Bm=Vt("sp"),Hm=Vt("rtg"),jm=Vt("rtc");function Wm(t,e=Be){Ws("ec",t,e)}function pc(t,e){const n=vt;if(n===null)return t;const r=Vs(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=de]=e[s];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Tn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function wn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(kr(),Ct(l,n,8,[t.el,a,t,e]),xr())}}const zm=Symbol();function Vm(t,e,n,r){let i;const s=n&&n[r];if(K(t)||$e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Wo=t=>t?od(t)?Vs(t)||t.proxy:Wo(t.parent):null,fs=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wo(t.parent),$root:t=>Wo(t.root),$emit:t=>t.emit,$options:t=>Xa(t),$forceUpdate:t=>t.f||(t.f=()=>qa(t.update)),$nextTick:t=>t.n||(t.n=Ga.bind(t.proxy)),$watch:t=>Nm.bind(t)}),Km={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==de&&te(r,e))return o[e]=1,r[e];if(i!==de&&te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,s[e];if(n!==de&&te(n,e))return o[e]=4,n[e];zo&&(o[e]=0)}}const u=fs[e];let f,d;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==de&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==de&&te(i,e)?(i[e]=n,!0):r!==de&&te(r,e)?(r[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==de&&te(t,o)||e!==de&&te(e,o)||(a=s[0])&&te(a,o)||te(r,o)||te(fs,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zo=!0;function Ym(t){const e=Xa(t),n=t.proxy,r=t.ctx;zo=!1,e.beforeCreate&&mc(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:b,beforeDestroy:v,beforeUnmount:k,destroyed:M,unmounted:H,render:W,renderTracked:oe,renderTriggered:z,errorCaptured:Q,serverPrefetch:be,expose:De,inheritAttrs:Ge,components:ot,directives:Gt,filters:Ze}=e;if(c&&Gm(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ce=o[he];Y(ce)&&(r[he]=ce.bind(n))}if(i){const he=i.call(n,n);Ee(he)&&(t.data=Ir(he))}if(zo=!0,s)for(const he in s){const ce=s[he],dt=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):Et,bn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):Et,ht=we({get:dt,set:bn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>ht.value,set:qe=>ht.value=qe})}if(a)for(const he in a)qf(a[he],r,n,he);if(l){const he=Y(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ce=>{ns(ce,he[ce])})}u&&mc(u,t,"c");function Ae(he,ce){K(ce)?ce.forEach(dt=>he(dt.bind(n))):ce&&he(ce.bind(n))}if(Ae(Lm,f),Ae(Gf,d),Ae(Fm,p),Ae($m,g),Ae(Om,_),Ae(Dm,b),Ae(Wm,Q),Ae(jm,oe),Ae(Hm,z),Ae(Um,k),Ae(Qa,H),Ae(Bm,be),K(De))if(De.length){const he=t.exposed||(t.exposed={});De.forEach(ce=>{Object.defineProperty(he,ce,{get:()=>n[ce],set:dt=>n[ce]=dt})})}else t.exposed||(t.exposed={});W&&t.render===Et&&(t.render=W),Ge!=null&&(t.inheritAttrs=Ge),ot&&(t.components=ot),Gt&&(t.directives=Gt)}function Gm(t,e,n=Et,r=!1){K(t)&&(t=Vo(t));for(const i in t){const s=t[i];let o;Ee(s)?"default"in s?o=Dt(s.from||i,s.default,!0):o=Dt(s.from||i):o=Dt(s),Te(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function mc(t,e,n){Ct(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qf(t,e,n,r){const i=r.includes(".")?Vf(n,r):()=>n[r];if($e(t)){const s=e[t];Y(s)&&kt(i,s)}else if(Y(t))kt(i,t.bind(n));else if(Ee(t))if(K(t))t.forEach(s=>qf(s,e,n,r));else{const s=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(s)&&kt(i,s,t)}}function Xa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>ds(l,c,o,!0)),ds(l,e,o)),Ee(e)&&s.set(e,l),l}function ds(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&ds(t,s,n,!0),i&&i.forEach(o=>ds(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=qm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const qm={data:gc,props:Cn,emits:Cn,methods:Cn,computed:Cn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Cn,directives:Cn,watch:Xm,provide:gc,inject:Qm};function gc(t,e){return e?t?function(){return Ye(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Qm(t,e){return Cn(Vo(t),Vo(e))}function Vo(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function Xm(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=ze(t[r],e[r]);return n}function Jm(t,e,n,r=!1){const i={},s={};ls(s,zs,1),t.propsDefaults=Object.create(null),Qf(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:fm(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Zm(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=se(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Hs(t.emitsOptions,d))continue;const p=e[d];if(l)if(te(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=cr(d);i[g]=Ko(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Qf(t,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!te(e,f)&&((u=Cr(f))===f||!te(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ko(l,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!te(e,f)&&!0)&&(delete s[f],c=!0)}c&&Bt(t,"set","$attrs")}function Qf(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(es(l))continue;const c=e[l];let u;i&&te(i,u=cr(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=se(n),c=a||de;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ko(i,l,f,c[f],t,!te(c,f))}}return o}function Ko(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Y(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(hr(i),r=c[n]=l.call(null,e),On())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}function Xf(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=f=>{l=!0;const[d,p]=Xf(f,e,!0);Ye(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ee(t)&&r.set(t,Zn),Zn;if(K(s))for(let u=0;u<s.length;u++){const f=cr(s[u]);_c(f)&&(o[f]=de)}else if(s)for(const u in s){const f=cr(u);if(_c(f)){const d=s[u],p=o[f]=K(d)||Y(d)?{type:d}:d;if(p){const g=bc(Boolean,p.type),_=bc(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||te(p,"default"))&&a.push(f)}}}const c=[o,a];return Ee(t)&&r.set(t,c),c}function _c(t){return t[0]!=="$"}function vc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function yc(t,e){return vc(t)===vc(e)}function bc(t,e){return K(e)?e.findIndex(n=>yc(n,t)):Y(e)&&yc(e,t)?0:-1}const Jf=t=>t[0]==="_"||t==="$stable",Ja=t=>K(t)?t.map(Rt):[Rt(t)],eg=(t,e,n)=>{if(e._n)return e;const r=at((...i)=>Ja(e(...i)),n);return r._c=!1,r},Zf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Jf(i))continue;const s=t[i];if(Y(s))e[i]=eg(i,s,r);else if(s!=null){const o=Ja(s);e[i]=()=>o}}},ed=(t,e)=>{const n=Ja(e);t.slots.default=()=>n},tg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),ls(e,"_",n)):Zf(e,t.slots={})}else t.slots={},e&&ed(t,e);ls(t.slots,zs,1)},ng=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ye(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Zf(e,i)),o=e}else e&&(ed(t,e),o={default:1});if(s)for(const a in i)!Jf(a)&&!(a in o)&&delete i[a]};function td(){return{app:null,config:{isNativeTag:Np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rg=0;function ig(t,e){return function(r,i=null){Y(r)||(r=Object.assign({},r)),i!=null&&!Ee(i)&&(i=null);const s=td(),o=new Set;let a=!1;const l=s.app={_uid:rg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Eg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=le(r,i);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Vs(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Yo(t,e,n,r,i=!1){if(K(t)){t.forEach((d,p)=>Yo(d,e&&(K(e)?e[p]:e),n,r,i));return}if(rs(r)&&!i)return;const s=r.shapeFlag&4?Vs(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,te(f,c)&&(f[c]=null)):Te(c)&&(c.value=null)),Y(l))sn(l,a,12,[o,u]);else{const d=$e(l),p=Te(l);if(d||p){const g=()=>{if(t.f){const _=d?te(f,l)?f[l]:u[l]:l.value;i?K(_)&&Fa(_,s):K(_)?_.includes(s)||_.push(s):d?(u[l]=[s],te(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,te(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Xe(g,n)):g()}}}const Xe=Rm;function sg(t){return og(t)}function og(t,e){const n=$p();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Et,insertStaticContent:g}=t,_=(h,m,y,w=null,x=null,A=null,N=!1,T=null,P=!!m.dynamicChildren)=>{if(h===m)return;h&&!Dr(h,m)&&(w=R(h),qe(h,x,A,!0),h=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:I,ref:U,shapeFlag:L}=m;switch(I){case Za:b(h,m,y,w);break;case si:v(h,m,y,w);break;case is:h==null&&k(m,y,w,N);break;case tt:ot(h,m,y,w,x,A,N,T,P);break;default:L&1?W(h,m,y,w,x,A,N,T,P):L&6?Gt(h,m,y,w,x,A,N,T,P):(L&64||L&128)&&I.process(h,m,y,w,x,A,N,T,P,re)}U!=null&&x&&Yo(U,h&&h.ref,A,m||h,!m)},b=(h,m,y,w)=>{if(h==null)r(m.el=a(m.children),y,w);else{const x=m.el=h.el;m.children!==h.children&&c(x,m.children)}},v=(h,m,y,w)=>{h==null?r(m.el=l(m.children||""),y,w):m.el=h.el},k=(h,m,y,w)=>{[h.el,h.anchor]=g(h.children,m,y,w,h.el,h.anchor)},M=({el:h,anchor:m},y,w)=>{let x;for(;h&&h!==m;)x=d(h),r(h,y,w),h=x;r(m,y,w)},H=({el:h,anchor:m})=>{let y;for(;h&&h!==m;)y=d(h),i(h),h=y;i(m)},W=(h,m,y,w,x,A,N,T,P)=>{N=N||m.type==="svg",h==null?oe(m,y,w,x,A,N,T,P):be(h,m,x,A,N,T,P)},oe=(h,m,y,w,x,A,N,T)=>{let P,I;const{type:U,props:L,shapeFlag:B,transition:V,dirs:Z}=h;if(P=h.el=o(h.type,A,L&&L.is,L),B&8?u(P,h.children):B&16&&Q(h.children,P,null,w,x,A&&U!=="foreignObject",N,T),Z&&wn(h,null,w,"created"),L){for(const ue in L)ue!=="value"&&!es(ue)&&s(P,ue,null,L[ue],A,h.children,w,x,O);"value"in L&&s(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&At(I,w,h)}z(P,h,h.scopeId,N,w),Z&&wn(h,null,w,"beforeMount");const pe=(!x||x&&!x.pendingBranch)&&V&&!V.persisted;pe&&V.beforeEnter(P),r(P,m,y),((I=L&&L.onVnodeMounted)||pe||Z)&&Xe(()=>{I&&At(I,w,h),pe&&V.enter(P),Z&&wn(h,null,w,"mounted")},x)},z=(h,m,y,w,x)=>{if(y&&p(h,y),w)for(let A=0;A<w.length;A++)p(h,w[A]);if(x){let A=x.subTree;if(m===A){const N=x.vnode;z(h,N,N.scopeId,N.slotScopeIds,x.parent)}}},Q=(h,m,y,w,x,A,N,T,P=0)=>{for(let I=P;I<h.length;I++){const U=h[I]=T?Jt(h[I]):Rt(h[I]);_(null,U,m,y,w,x,A,N,T)}},be=(h,m,y,w,x,A,N)=>{const T=m.el=h.el;let{patchFlag:P,dynamicChildren:I,dirs:U}=m;P|=h.patchFlag&16;const L=h.props||de,B=m.props||de;let V;y&&En(y,!1),(V=B.onVnodeBeforeUpdate)&&At(V,y,m,h),U&&wn(m,h,y,"beforeUpdate"),y&&En(y,!0);const Z=x&&m.type!=="foreignObject";if(I?De(h.dynamicChildren,I,T,y,w,Z,A):N||ce(h,m,T,null,y,w,Z,A,!1),P>0){if(P&16)Ge(T,m,L,B,y,w,x);else if(P&2&&L.class!==B.class&&s(T,"class",null,B.class,x),P&4&&s(T,"style",L.style,B.style,x),P&8){const pe=m.dynamicProps;for(let ue=0;ue<pe.length;ue++){const Pe=pe[ue],pt=L[Pe],zn=B[Pe];(zn!==pt||Pe==="value")&&s(T,Pe,pt,zn,x,h.children,y,w,O)}}P&1&&h.children!==m.children&&u(T,m.children)}else!N&&I==null&&Ge(T,m,L,B,y,w,x);((V=B.onVnodeUpdated)||U)&&Xe(()=>{V&&At(V,y,m,h),U&&wn(m,h,y,"updated")},w)},De=(h,m,y,w,x,A,N)=>{for(let T=0;T<m.length;T++){const P=h[T],I=m[T],U=P.el&&(P.type===tt||!Dr(P,I)||P.shapeFlag&70)?f(P.el):y;_(P,I,U,null,w,x,A,N,!0)}},Ge=(h,m,y,w,x,A,N)=>{if(y!==w){if(y!==de)for(const T in y)!es(T)&&!(T in w)&&s(h,T,y[T],null,N,m.children,x,A,O);for(const T in w){if(es(T))continue;const P=w[T],I=y[T];P!==I&&T!=="value"&&s(h,T,I,P,N,m.children,x,A,O)}"value"in w&&s(h,"value",y.value,w.value)}},ot=(h,m,y,w,x,A,N,T,P)=>{const I=m.el=h?h.el:a(""),U=m.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:V}=m;V&&(T=T?T.concat(V):V),h==null?(r(I,y,w),r(U,y,w),Q(m.children,y,U,x,A,N,T,P)):L>0&&L&64&&B&&h.dynamicChildren?(De(h.dynamicChildren,B,y,x,A,N,T),(m.key!=null||x&&m===x.subTree)&&nd(h,m,!0)):ce(h,m,y,U,x,A,N,T,P)},Gt=(h,m,y,w,x,A,N,T,P)=>{m.slotScopeIds=T,h==null?m.shapeFlag&512?x.ctx.activate(m,y,w,N,P):Ze(m,y,w,x,A,N,P):Me(h,m,P)},Ze=(h,m,y,w,x,A,N)=>{const T=h.component=gg(h,w,x);if(Kf(h)&&(T.ctx.renderer=re),_g(T),T.asyncDep){if(x&&x.registerDep(T,Ae),!h.el){const P=T.subTree=le(si);v(null,P,m,y)}return}Ae(T,h,m,y,x,A,N)},Me=(h,m,y)=>{const w=m.component=h.component;if(Tm(h,m,y))if(w.asyncDep&&!w.asyncResolved){he(w,m,y);return}else w.next=m,Em(w.update),w.update();else m.el=h.el,w.vnode=m},Ae=(h,m,y,w,x,A,N)=>{const T=()=>{if(h.isMounted){let{next:U,bu:L,u:B,parent:V,vnode:Z}=h,pe=U,ue;En(h,!1),U?(U.el=Z.el,he(h,U,N)):U=Z,L&&ts(L),(ue=U.props&&U.props.onVnodeBeforeUpdate)&&At(ue,V,U,Z),En(h,!0);const Pe=mo(h),pt=h.subTree;h.subTree=Pe,_(pt,Pe,f(pt.el),R(pt),h,x,A),U.el=Pe.el,pe===null&&Am(h,Pe.el),B&&Xe(B,x),(ue=U.props&&U.props.onVnodeUpdated)&&Xe(()=>At(ue,V,U,Z),x)}else{let U;const{el:L,props:B}=m,{bm:V,m:Z,parent:pe}=h,ue=rs(m);if(En(h,!1),V&&ts(V),!ue&&(U=B&&B.onVnodeBeforeMount)&&At(U,pe,m),En(h,!0),L&&G){const Pe=()=>{h.subTree=mo(h),G(L,h.subTree,h,x,null)};ue?m.type.__asyncLoader().then(()=>!h.isUnmounted&&Pe()):Pe()}else{const Pe=h.subTree=mo(h);_(null,Pe,y,w,h,x,A),m.el=Pe.el}if(Z&&Xe(Z,x),!ue&&(U=B&&B.onVnodeMounted)){const Pe=m;Xe(()=>At(U,pe,Pe),x)}(m.shapeFlag&256||pe&&rs(pe.vnode)&&pe.vnode.shapeFlag&256)&&h.a&&Xe(h.a,x),h.isMounted=!0,m=y=w=null}},P=h.effect=new Ha(T,()=>qa(I),h.scope),I=h.update=()=>P.run();I.id=h.uid,En(h,!0),I()},he=(h,m,y)=>{m.component=h;const w=h.vnode.props;h.vnode=m,h.next=null,Zm(h,m.props,w,y),ng(h,m.children,y),kr(),fc(),xr()},ce=(h,m,y,w,x,A,N,T,P=!1)=>{const I=h&&h.children,U=h?h.shapeFlag:0,L=m.children,{patchFlag:B,shapeFlag:V}=m;if(B>0){if(B&128){bn(I,L,y,w,x,A,N,T,P);return}else if(B&256){dt(I,L,y,w,x,A,N,T,P);return}}V&8?(U&16&&O(I,x,A),L!==I&&u(y,L)):U&16?V&16?bn(I,L,y,w,x,A,N,T,P):O(I,x,A,!0):(U&8&&u(y,""),V&16&&Q(L,y,w,x,A,N,T,P))},dt=(h,m,y,w,x,A,N,T,P)=>{h=h||Zn,m=m||Zn;const I=h.length,U=m.length,L=Math.min(I,U);let B;for(B=0;B<L;B++){const V=m[B]=P?Jt(m[B]):Rt(m[B]);_(h[B],V,y,null,x,A,N,T,P)}I>U?O(h,x,A,!0,!1,L):Q(m,y,w,x,A,N,T,P,L)},bn=(h,m,y,w,x,A,N,T,P)=>{let I=0;const U=m.length;let L=h.length-1,B=U-1;for(;I<=L&&I<=B;){const V=h[I],Z=m[I]=P?Jt(m[I]):Rt(m[I]);if(Dr(V,Z))_(V,Z,y,null,x,A,N,T,P);else break;I++}for(;I<=L&&I<=B;){const V=h[L],Z=m[B]=P?Jt(m[B]):Rt(m[B]);if(Dr(V,Z))_(V,Z,y,null,x,A,N,T,P);else break;L--,B--}if(I>L){if(I<=B){const V=B+1,Z=V<U?m[V].el:w;for(;I<=B;)_(null,m[I]=P?Jt(m[I]):Rt(m[I]),y,Z,x,A,N,T,P),I++}}else if(I>B)for(;I<=L;)qe(h[I],x,A,!0),I++;else{const V=I,Z=I,pe=new Map;for(I=Z;I<=B;I++){const et=m[I]=P?Jt(m[I]):Rt(m[I]);et.key!=null&&pe.set(et.key,I)}let ue,Pe=0;const pt=B-Z+1;let zn=!1,ec=0;const Or=new Array(pt);for(I=0;I<pt;I++)Or[I]=0;for(I=V;I<=L;I++){const et=h[I];if(Pe>=pt){qe(et,x,A,!0);continue}let Tt;if(et.key!=null)Tt=pe.get(et.key);else for(ue=Z;ue<=B;ue++)if(Or[ue-Z]===0&&Dr(et,m[ue])){Tt=ue;break}Tt===void 0?qe(et,x,A,!0):(Or[Tt-Z]=I+1,Tt>=ec?ec=Tt:zn=!0,_(et,m[Tt],y,null,x,A,N,T,P),Pe++)}const tc=zn?ag(Or):Zn;for(ue=tc.length-1,I=pt-1;I>=0;I--){const et=Z+I,Tt=m[et],nc=et+1<U?m[et+1].el:w;Or[I]===0?_(null,Tt,y,nc,x,A,N,T,P):zn&&(ue<0||I!==tc[ue]?ht(Tt,y,nc,2):ue--)}}},ht=(h,m,y,w,x=null)=>{const{el:A,type:N,transition:T,children:P,shapeFlag:I}=h;if(I&6){ht(h.component.subTree,m,y,w);return}if(I&128){h.suspense.move(m,y,w);return}if(I&64){N.move(h,m,y,re);return}if(N===tt){r(A,m,y);for(let L=0;L<P.length;L++)ht(P[L],m,y,w);r(h.anchor,m,y);return}if(N===is){M(h,m,y);return}if(w!==2&&I&1&&T)if(w===0)T.beforeEnter(A),r(A,m,y),Xe(()=>T.enter(A),x);else{const{leave:L,delayLeave:B,afterLeave:V}=T,Z=()=>r(A,m,y),pe=()=>{L(A,()=>{Z(),V&&V()})};B?B(A,Z,pe):pe()}else r(A,m,y)},qe=(h,m,y,w=!1,x=!1)=>{const{type:A,props:N,ref:T,children:P,dynamicChildren:I,shapeFlag:U,patchFlag:L,dirs:B}=h;if(T!=null&&Yo(T,null,y,h,!0),U&256){m.ctx.deactivate(h);return}const V=U&1&&B,Z=!rs(h);let pe;if(Z&&(pe=N&&N.onVnodeBeforeUnmount)&&At(pe,m,h),U&6)C(h.component,y,w);else{if(U&128){h.suspense.unmount(y,w);return}V&&wn(h,null,m,"beforeUnmount"),U&64?h.type.remove(h,m,y,x,re,w):I&&(A!==tt||L>0&&L&64)?O(I,m,y,!1,!0):(A===tt&&L&384||!x&&U&16)&&O(P,m,y),w&&Wn(h)}(Z&&(pe=N&&N.onVnodeUnmounted)||V)&&Xe(()=>{pe&&At(pe,m,h),V&&wn(h,null,m,"unmounted")},y)},Wn=h=>{const{type:m,el:y,anchor:w,transition:x}=h;if(m===tt){Fi(y,w);return}if(m===is){H(h);return}const A=()=>{i(y),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:T}=x,P=()=>N(y,A);T?T(h.el,A,P):P()}else A()},Fi=(h,m)=>{let y;for(;h!==m;)y=d(h),i(h),h=y;i(m)},C=(h,m,y)=>{const{bum:w,scope:x,update:A,subTree:N,um:T}=h;w&&ts(w),x.stop(),A&&(A.active=!1,qe(N,h,m,y)),T&&Xe(T,m),Xe(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},O=(h,m,y,w=!1,x=!1,A=0)=>{for(let N=A;N<h.length;N++)qe(h[N],m,y,w,x)},R=h=>h.shapeFlag&6?R(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),$=(h,m,y)=>{h==null?m._vnode&&qe(m._vnode,null,null,!0):_(m._vnode||null,h,m,null,null,null,y),fc(),Hf(),m._vnode=h},re={p:_,um:qe,m:ht,r:Wn,mt:Ze,mc:Q,pc:ce,pbc:De,n:R,o:t};let Ce,G;return e&&([Ce,G]=e(re)),{render:$,hydrate:Ce,createApp:ig($,Ce)}}function En({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nd(t,e,n=!1){const r=t.children,i=e.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Jt(i[s]),a.el=o.el),n||nd(o,a))}}function ag(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const lg=t=>t.__isTeleport,tt=Symbol(void 0),Za=Symbol(void 0),si=Symbol(void 0),is=Symbol(void 0),jr=[];let yt=null;function nt(t=!1){jr.push(yt=t?null:[])}function cg(){jr.pop(),yt=jr[jr.length-1]||null}let oi=1;function wc(t){oi+=t}function ug(t){return t.dynamicChildren=oi>0?yt||Zn:null,cg(),oi>0&&yt&&yt.push(t),t}function rt(t,e,n,r,i,s){return ug(E(t,e,n,r,i,s,!0))}function Go(t){return t?t.__v_isVNode===!0:!1}function Dr(t,e){return t.type===e.type&&t.key===e.key}const zs="__vInternal",rd=({key:t})=>t!=null?t:null,ss=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Te(t)||Y(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function E(t,e=null,n=null,r=0,i=null,s=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rd(e),ref:e&&ss(e),scopeId:js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(el(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),oi>0&&!o&&yt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yt.push(l),l}const le=fg;function fg(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===zm)&&(t=si),Go(t)){const a=dr(t,e,!0);return n&&el(a,n),oi>0&&!s&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(wg(t)&&(t=t.__vccOpts),e){e=dg(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=ke(a)),Ee(l)&&(Of(l)&&!K(l)&&(l=Ye({},l)),e.style=Ma(l))}const o=$e(t)?1:Pm(t)?128:lg(t)?64:Ee(t)?4:Y(t)?2:0;return E(t,e,n,r,i,o,s,!0)}function dg(t){return t?Of(t)||zs in t?Ye({},t):t:null}function dr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?hg(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rd(a),ref:e&&e.ref?n&&i?K(i)?i.concat(ss(e)):[i,ss(e)]:ss(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dr(t.ssContent),ssFallback:t.ssFallback&&dr(t.ssFallback),el:t.el,anchor:t.anchor}}function lt(t=" ",e=0){return le(Za,null,t,e)}function id(t,e){const n=le(is,null,t);return n.staticCount=e,n}function Rt(t){return t==null||typeof t=="boolean"?le(si):K(t)?le(tt,null,t.slice()):typeof t=="object"?Jt(t):le(Za,null,String(t))}function Jt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dr(t)}function el(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),el(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(zs in e)?e._ctx=vt:i===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function hg(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ke([e.class,r.class]));else if(i==="style")e.style=Ma([e.style,r.style]);else if(Ls(i)){const s=e[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function At(t,e,n,r=null){Ct(t,e,7,[n,r])}const pg=td();let mg=0;function gg(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||pg,s={uid:mg++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(r,i),emitsOptions:Wf(r,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xm.bind(null,s),t.ce&&t.ce(s),s}let Be=null;const sd=()=>Be||vt,hr=t=>{Be=t,t.scope.on()},On=()=>{Be&&Be.scope.off(),Be=null};function od(t){return t.vnode.shapeFlag&4}let ai=!1;function _g(t,e=!1){ai=e;const{props:n,children:r}=t.vnode,i=od(t);Jm(t,n,i,e),tg(t,r);const s=i?vg(t,e):void 0;return ai=!1,s}function vg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fr(new Proxy(t.ctx,Km));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?bg(t):null;hr(t),kr();const s=sn(r,t,0,[t.props,i]);if(xr(),On(),gf(s)){if(s.then(On,On),e)return s.then(o=>{Ec(t,o,e)}).catch(o=>{Bs(o,t,0)});t.asyncDep=s}else Ec(t,s,e)}else ad(t,e)}function Ec(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Ff(e)),ad(t,n)}let Cc;function ad(t,e,n){const r=t.type;if(!t.render){if(!e&&Cc&&!r.render){const i=r.template||Xa(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ye(Ye({isCustomElement:s,delimiters:a},o),l);r.render=Cc(i,c)}}t.render=r.render||Et}hr(t),kr(),Ym(t),xr(),On()}function yg(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function bg(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=yg(t))},slots:t.slots,emit:t.emit,expose:e}}function Vs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ff(fr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fs)return fs[n](t)}}))}function wg(t){return Y(t)&&"__vccOpts"in t}const we=(t,e)=>ym(t,e,ai);function Ks(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!K(e)?Go(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Go(n)&&(n=[n]),le(t,e,n))}const Eg="3.2.41",Cg="http://www.w3.org/2000/svg",Sn=typeof document<"u"?document:null,kc=Sn&&Sn.createElement("template"),kg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Sn.createElementNS(Cg,t):Sn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{kc.innerHTML=r?`<svg>${t}</svg>`:t;const a=kc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xg(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ig(t,e,n){const r=t.style,i=$e(n);if(n&&!i){for(const s in n)qo(r,s,n[s]);if(e&&!$e(e))for(const s in e)n[s]==null&&qo(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const xc=/\s*!important$/;function qo(t,e,n){if(K(n))n.forEach(r=>qo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Sg(t,e);xc.test(n)?t.setProperty(Cr(r),n.replace(xc,""),"important"):t[r]=n}}const Ic=["Webkit","Moz","ms"],go={};function Sg(t,e){const n=go[e];if(n)return n;let r=cr(e);if(r!=="filter"&&r in t)return go[e]=r;r=yf(r);for(let i=0;i<Ic.length;i++){const s=Ic[i]+r;if(s in t)return go[e]=s}return e}const Sc="http://www.w3.org/1999/xlink";function Tg(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sc,e.slice(6,e.length)):t.setAttributeNS(Sc,e,n);else{const s=Tp(e);n==null||s&&!hf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ag(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=hf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Gn(t,e,n,r){t.addEventListener(e,n,r)}function Pg(t,e,n,r){t.removeEventListener(e,n,r)}function Rg(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Ng(e);if(r){const c=s[e]=Mg(r,i);Gn(t,a,c,l)}else o&&(Pg(t,a,o,l),s[e]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function Ng(t){let e;if(Tc.test(t)){e={};let r;for(;r=t.match(Tc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let _o=0;const Og=Promise.resolve(),Dg=()=>_o||(Og.then(()=>_o=0),_o=Date.now());function Mg(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(Lg(r,n.value),e,5,[r])};return n.value=t,n.attached=Dg(),n}function Lg(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Ac=/^on[a-z]/,Fg=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?xg(t,r,i):e==="style"?Ig(t,n,r):Ls(e)?La(e)||Rg(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$g(t,e,r,i))?Ag(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tg(t,e,r,i))};function $g(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ac.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ac.test(e)&&$e(n)?!1:e in t}const Pc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>ts(e,n):e};function Ug(t){t.target.composing=!0}function Rc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nc={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Pc(i);const s=r||i.props&&i.props.type==="number";Gn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Fo(a)),t._assign(a)}),n&&Gn(t,"change",()=>{t.value=t.value.trim()}),e||(Gn(t,"compositionstart",Ug),Gn(t,"compositionend",Rc),Gn(t,"change",Rc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Pc(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Fo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Bg=["ctrl","shift","alt","meta"],Hg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bg.some(n=>t[`${n}Key`]&&!e.includes(n))},jg=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Hg[e[i]];if(s&&s(n,e))return}return t(n,...r)},Wg=Ye({patchProp:Fg},kg);let Oc;function zg(){return Oc||(Oc=sg(Wg))}const Vg=(...t)=>{const e=zg().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Kg(r);if(!i)return;const s=e._component;!Y(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Kg(t){return $e(t)?document.querySelector(t):t}var Yg=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ld;const Ys=t=>ld=t,cd=Symbol();function Qo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Wr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Wr||(Wr={}));function Gg(){const t=wf(!0),e=t.run(()=>ne({}));let n=[],r=[];const i=fr({install(s){Ys(i),i._a=s,s.provide(cd,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Yg?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ud=()=>{};function Dc(t,e,n,r=ud){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&sd()&&Qa(i),i}function Vn(t,...e){t.slice().forEach(n=>{n(...e)})}function Xo(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Qo(i)&&Qo(r)&&t.hasOwnProperty(n)&&!Te(r)&&!rn(r)?t[n]=Xo(i,r):t[n]=r}return t}const qg=Symbol();function Qg(t){return!Qo(t)||!t.hasOwnProperty(qg)}const{assign:Zt}=Object;function Xg(t){return!!(Te(t)&&t.effect)}function Jg(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=mm(n.state.value[t]);return Zt(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=fr(we(()=>{Ys(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=fd(t,c,e,n,r,!0),l.$reset=function(){const f=i?i():{};this.$patch(d=>{Zt(d,f)})},l}function fd(t,e,n={},r,i,s){let o;const a=Zt({actions:{}},n),l={deep:!0};let c,u,f=fr([]),d=fr([]),p;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),ne({});let _;function b(z){let Q;c=u=!1,typeof z=="function"?(z(r.state.value[t]),Q={type:Wr.patchFunction,storeId:t,events:p}):(Xo(r.state.value[t],z),Q={type:Wr.patchObject,payload:z,storeId:t,events:p});const be=_=Symbol();Ga().then(()=>{_===be&&(c=!0)}),u=!0,Vn(f,Q,r.state.value[t])}const v=ud;function k(){o.stop(),f=[],d=[],r._s.delete(t)}function M(z,Q){return function(){Ys(r);const be=Array.from(arguments),De=[],Ge=[];function ot(Me){De.push(Me)}function Gt(Me){Ge.push(Me)}Vn(d,{args:be,name:z,store:W,after:ot,onError:Gt});let Ze;try{Ze=Q.apply(this&&this.$id===t?this:W,be)}catch(Me){throw Vn(Ge,Me),Me}return Ze instanceof Promise?Ze.then(Me=>(Vn(De,Me),Me)).catch(Me=>(Vn(Ge,Me),Promise.reject(Me))):(Vn(De,Ze),Ze)}}const H={_p:r,$id:t,$onAction:Dc.bind(null,d),$patch:b,$reset:v,$subscribe(z,Q={}){const be=Dc(f,z,Q.detached,()=>De()),De=o.run(()=>kt(()=>r.state.value[t],Ge=>{(Q.flush==="sync"?u:c)&&z({storeId:t,type:Wr.direct,events:p},Ge)},Zt({},l,Q)));return be},$dispose:k},W=Ir(H);r._s.set(t,W);const oe=r._e.run(()=>(o=wf(),o.run(()=>e())));for(const z in oe){const Q=oe[z];if(Te(Q)&&!Xg(Q)||rn(Q))s||(g&&Qg(Q)&&(Te(Q)?Q.value=g[z]:Xo(Q,g[z])),r.state.value[t][z]=Q);else if(typeof Q=="function"){const be=M(z,Q);oe[z]=be,a.actions[z]=Q}}return Zt(W,oe),Zt(se(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:z=>{b(Q=>{Zt(Q,z)})}}),r._p.forEach(z=>{Zt(W,o.run(()=>z({store:W,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(W.$state,g),c=!0,u=!0,W}function Zg(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=sd();return a=a||c&&Dt(cd),a&&Ys(a),a=ld,a._s.has(r)||(s?fd(r,e,i,a):Jg(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qn=typeof window<"u";function e_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function vo(t,e){const n={};for(const r in e){const i=e[r];n[r]=It(i)?i.map(t):t(i)}return n}const zr=()=>{},It=Array.isArray,t_=/\/$/,n_=t=>t.replace(t_,"");function yo(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=o_(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function r_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function i_(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&pr(e.matched[r],n.matched[i])&&dd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!s_(t[n],e[n]))return!1;return!0}function s_(t,e){return It(t)?Lc(t,e):It(e)?Lc(e,t):t===e}function Lc(t,e){return It(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function o_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Vr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vr||(Vr={}));function a_(t){if(!t)if(qn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),n_(t)}const l_=/^[^#]+#/;function c_(t,e){return t.replace(l_,"#")+e}function u_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Gs=()=>({left:window.pageXOffset,top:window.pageYOffset});function f_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=u_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fc(t,e){return(history.state?history.state.position-e:-1)+t}const Jo=new Map;function d_(t,e){Jo.set(t,e)}function h_(t){const e=Jo.get(t);return Jo.delete(t),e}let p_=()=>location.protocol+"//"+location.host;function hd(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Mc(l,"")}return Mc(n,t)+r+i}function m_(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const p=hd(t,location),g=n.value,_=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}b=_?d.position-_.position:0}else r(p);i.forEach(v=>{v(n.value,g,{delta:b,type:li.pop,direction:b?b>0?Vr.forward:Vr.back:Vr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ae({},d.state,{scroll:Gs()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function $c(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Gs():null}}function g_(t){const{history:e,location:n}=window,r={value:hd(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:p_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ae({},e.state,$c(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:Gs()});s(u.current,u,!0);const f=ae({},$c(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function __(t){t=a_(t);const e=g_(t),n=m_(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ae({location:"",base:t,go:r,createHref:c_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function v_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),__(t)}function y_(t){return typeof t=="string"||t&&typeof t=="object"}function pd(t){return typeof t=="string"||typeof t=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},md=Symbol("");var Uc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Uc||(Uc={}));function mr(t,e){return ae(new Error,{type:t,[md]:!0},e)}function Lt(t,e){return t instanceof Error&&md in t&&(e==null||!!(t.type&e))}const Bc="[^/]+?",b_={sensitive:!1,strict:!1,start:!0,end:!0},w_=/[.+*?^${}()[\]/\\]/g;function E_(t,e){const n=ae({},b_,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(w_,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:_,optional:b,regexp:v}=d;s.push({name:g,repeatable:_,optional:b});const k=v||Bc;if(k!==Bc){p+=10;try{new RegExp(`(${k})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${g}" (${k}): `+H.message)}}let M=_?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(M=b&&c.length<2?`(?:/${M})`:"/"+M),b&&(M+="?"),i+=M,p+=20,b&&(p+=-8),_&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:b}=p,v=g in c?c[g]:"";if(It(v)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const k=It(v)?v.join("/"):v;if(!k)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function C_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function k_(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=C_(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Hc(r))return 1;if(Hc(i))return-1}return i.length-r.length}function Hc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const x_={type:0,value:""},I_=/[a-zA-Z0-9_]/;function S_(t){if(!t)return[[]];if(t==="/")return[[x_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:I_.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function T_(t,e,n){const r=E_(S_(t.path),n),i=ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function A_(t,e){const n=[],r=new Map;e=zc({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,d){const p=!d,g=P_(u);g.aliasOf=d&&d.record;const _=zc(e,u),b=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of M)b.push(ae({},g,{components:d?d.record.components:g.components,path:H,aliasOf:d?d.record:g}))}let v,k;for(const M of b){const{path:H}=M;if(f&&H[0]!=="/"){const W=f.record.path,oe=W[W.length-1]==="/"?"":"/";M.path=f.record.path+(H&&oe+H)}if(v=T_(M,f,_),d?d.alias.push(v):(k=k||v,k!==v&&k.alias.push(v),p&&u.name&&!Wc(v)&&o(u.name)),g.children){const W=g.children;for(let oe=0;oe<W.length;oe++)s(W[oe],v,d&&d.children[oe])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return k?()=>{o(k)}:zr}function o(u){if(pd(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&k_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!gd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Wc(u)&&r.set(u.record.name,u)}function c(u,f){let d,p={},g,_;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw mr(1,{location:u});_=d.record.name,p=ae(jc(f.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&jc(u.params,d.keys.map(k=>k.name))),g=d.stringify(p)}else if("path"in u)g=u.path,d=n.find(k=>k.re.test(g)),d&&(p=d.parse(g),_=d.record.name);else{if(d=f.name?r.get(f.name):n.find(k=>k.re.test(f.path)),!d)throw mr(1,{location:u,currentLocation:f});_=d.record.name,p=ae({},f.params,u.params),g=d.stringify(p)}const b=[];let v=d;for(;v;)b.unshift(v.record),v=v.parent;return{name:_,path:g,params:p,matched:b,meta:N_(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function jc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function P_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:R_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function R_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Wc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function N_(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function zc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gd(t,e){return e.children.some(n=>n===t||gd(t,n))}const _d=/#/g,O_=/&/g,D_=/\//g,M_=/=/g,L_=/\?/g,vd=/\+/g,F_=/%5B/g,$_=/%5D/g,yd=/%5E/g,U_=/%60/g,bd=/%7B/g,B_=/%7C/g,wd=/%7D/g,H_=/%20/g;function tl(t){return encodeURI(""+t).replace(B_,"|").replace(F_,"[").replace($_,"]")}function j_(t){return tl(t).replace(bd,"{").replace(wd,"}").replace(yd,"^")}function Zo(t){return tl(t).replace(vd,"%2B").replace(H_,"+").replace(_d,"%23").replace(O_,"%26").replace(U_,"`").replace(bd,"{").replace(wd,"}").replace(yd,"^")}function W_(t){return Zo(t).replace(M_,"%3D")}function z_(t){return tl(t).replace(_d,"%23").replace(L_,"%3F")}function V_(t){return t==null?"":z_(t).replace(D_,"%2F")}function hs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function K_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(vd," "),o=s.indexOf("="),a=hs(o<0?s:s.slice(0,o)),l=o<0?null:hs(s.slice(o+1));if(a in e){let c=e[a];It(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vc(t){let e="";for(let n in t){const r=t[n];if(n=W_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(It(r)?r.map(s=>s&&Zo(s)):[r&&Zo(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Y_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=It(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const G_=Symbol(""),Kc=Symbol(""),qs=Symbol(""),Ed=Symbol(""),ea=Symbol("");function Mr(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function en(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(mr(4,{from:n,to:e})):f instanceof Error?a(f):y_(f)?a(mr(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function bo(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(q_(a)){const c=(a.__vccOpts||a)[e];c&&i.push(en(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=e_(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&en(d,n,r,s,o)()}))}}return i}function q_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yc(t){const e=Dt(qs),n=Dt(Ed),r=we(()=>e.resolve(X(t.to))),i=we(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(pr.bind(null,u));if(d>-1)return d;const p=Gc(l[c-2]);return c>1&&Gc(u)===p&&f[f.length-1].path!==p?f.findIndex(pr.bind(null,l[c-2])):d}),s=we(()=>i.value>-1&&J_(n.params,r.value.params)),o=we(()=>i.value>-1&&i.value===n.matched.length-1&&dd(n.params,r.value.params));function a(l={}){return X_(l)?e[X(t.replace)?"replace":"push"](X(t.to)).catch(zr):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Q_=xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yc,setup(t,{slots:e}){const n=Ir(Yc(t)),{options:r}=Dt(qs),i=we(()=>({[qc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ks("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),ct=Q_;function X_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function J_(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!It(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Gc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qc=(t,e,n)=>t!=null?t:e!=null?e:n,Z_=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(ea),i=we(()=>t.route||r.value),s=Dt(Kc,0),o=we(()=>{let c=X(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=we(()=>i.value.matched[o.value]);ns(Kc,we(()=>o.value+1)),ns(G_,a),ns(ea,i);const l=ne();return kt(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!pr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Qc(n.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=Ks(d,ae({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Qc(n.default,{Component:b,route:c})||b}}});function Qc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nl=Z_;function ev(t){const e=A_(t.routes,t),n=t.parseQuery||K_,r=t.stringifyQuery||Vc,i=t.history,s=Mr(),o=Mr(),a=Mr(),l=dm(Qt);let c=Qt;qn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vo.bind(null,C=>""+C),f=vo.bind(null,V_),d=vo.bind(null,hs);function p(C,O){let R,$;return pd(C)?(R=e.getRecordMatcher(C),$=O):$=C,e.addRoute($,R)}function g(C){const O=e.getRecordMatcher(C);O&&e.removeRoute(O)}function _(){return e.getRoutes().map(C=>C.record)}function b(C){return!!e.getRecordMatcher(C)}function v(C,O){if(O=ae({},O||l.value),typeof C=="string"){const h=yo(n,C,O.path),m=e.resolve({path:h.path},O),y=i.createHref(h.fullPath);return ae(h,m,{params:d(m.params),hash:hs(h.hash),redirectedFrom:void 0,href:y})}let R;if("path"in C)R=ae({},C,{path:yo(n,C.path,O.path).path});else{const h=ae({},C.params);for(const m in h)h[m]==null&&delete h[m];R=ae({},C,{params:f(C.params)}),O.params=f(O.params)}const $=e.resolve(R,O),re=C.hash||"";$.params=u(d($.params));const Ce=r_(r,ae({},C,{hash:j_(re),path:$.path})),G=i.createHref(Ce);return ae({fullPath:Ce,hash:re,query:r===Vc?Y_(C.query):C.query||{}},$,{redirectedFrom:void 0,href:G})}function k(C){return typeof C=="string"?yo(n,C,l.value.path):ae({},C)}function M(C,O){if(c!==C)return mr(8,{from:O,to:C})}function H(C){return z(C)}function W(C){return H(ae(k(C),{replace:!0}))}function oe(C){const O=C.matched[C.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let $=typeof R=="function"?R(C):R;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=k($):{path:$},$.params={}),ae({query:C.query,hash:C.hash,params:"path"in $?{}:C.params},$)}}function z(C,O){const R=c=v(C),$=l.value,re=C.state,Ce=C.force,G=C.replace===!0,h=oe(R);if(h)return z(ae(k(h),{state:typeof h=="object"?ae({},re,h.state):re,force:Ce,replace:G}),O||R);const m=R;m.redirectedFrom=O;let y;return!Ce&&i_(r,$,R)&&(y=mr(16,{to:m,from:$}),bn($,$,!0,!1)),(y?Promise.resolve(y):be(m,$)).catch(w=>Lt(w)?Lt(w,2)?w:dt(w):he(w,m,$)).then(w=>{if(w){if(Lt(w,2))return z(ae({replace:G},k(w.to),{state:typeof w.to=="object"?ae({},re,w.to.state):re,force:Ce}),O||m)}else w=Ge(m,$,!0,G,re);return De(m,$,w),w})}function Q(C,O){const R=M(C,O);return R?Promise.reject(R):Promise.resolve()}function be(C,O){let R;const[$,re,Ce]=tv(C,O);R=bo($.reverse(),"beforeRouteLeave",C,O);for(const h of $)h.leaveGuards.forEach(m=>{R.push(en(m,C,O))});const G=Q.bind(null,C,O);return R.push(G),Kn(R).then(()=>{R=[];for(const h of s.list())R.push(en(h,C,O));return R.push(G),Kn(R)}).then(()=>{R=bo(re,"beforeRouteUpdate",C,O);for(const h of re)h.updateGuards.forEach(m=>{R.push(en(m,C,O))});return R.push(G),Kn(R)}).then(()=>{R=[];for(const h of C.matched)if(h.beforeEnter&&!O.matched.includes(h))if(It(h.beforeEnter))for(const m of h.beforeEnter)R.push(en(m,C,O));else R.push(en(h.beforeEnter,C,O));return R.push(G),Kn(R)}).then(()=>(C.matched.forEach(h=>h.enterCallbacks={}),R=bo(Ce,"beforeRouteEnter",C,O),R.push(G),Kn(R))).then(()=>{R=[];for(const h of o.list())R.push(en(h,C,O));return R.push(G),Kn(R)}).catch(h=>Lt(h,8)?h:Promise.reject(h))}function De(C,O,R){for(const $ of a.list())$(C,O,R)}function Ge(C,O,R,$,re){const Ce=M(C,O);if(Ce)return Ce;const G=O===Qt,h=qn?history.state:{};R&&($||G?i.replace(C.fullPath,ae({scroll:G&&h&&h.scroll},re)):i.push(C.fullPath,re)),l.value=C,bn(C,O,R,G),dt()}let ot;function Gt(){ot||(ot=i.listen((C,O,R)=>{if(!Fi.listening)return;const $=v(C),re=oe($);if(re){z(ae(re,{replace:!0}),$).catch(zr);return}c=$;const Ce=l.value;qn&&d_(Fc(Ce.fullPath,R.delta),Gs()),be($,Ce).catch(G=>Lt(G,12)?G:Lt(G,2)?(z(G.to,$).then(h=>{Lt(h,20)&&!R.delta&&R.type===li.pop&&i.go(-1,!1)}).catch(zr),Promise.reject()):(R.delta&&i.go(-R.delta,!1),he(G,$,Ce))).then(G=>{G=G||Ge($,Ce,!1),G&&(R.delta&&!Lt(G,8)?i.go(-R.delta,!1):R.type===li.pop&&Lt(G,20)&&i.go(-1,!1)),De($,Ce,G)}).catch(zr)}))}let Ze=Mr(),Me=Mr(),Ae;function he(C,O,R){dt(C);const $=Me.list();return $.length?$.forEach(re=>re(C,O,R)):console.error(C),Promise.reject(C)}function ce(){return Ae&&l.value!==Qt?Promise.resolve():new Promise((C,O)=>{Ze.add([C,O])})}function dt(C){return Ae||(Ae=!C,Gt(),Ze.list().forEach(([O,R])=>C?R(C):O()),Ze.reset()),C}function bn(C,O,R,$){const{scrollBehavior:re}=t;if(!qn||!re)return Promise.resolve();const Ce=!R&&h_(Fc(C.fullPath,0))||($||!R)&&history.state&&history.state.scroll||null;return Ga().then(()=>re(C,O,Ce)).then(G=>G&&f_(G)).catch(G=>he(G,C,O))}const ht=C=>i.go(C);let qe;const Wn=new Set,Fi={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:b,getRoutes:_,resolve:v,options:t,push:H,replace:W,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:ce,install(C){const O=this;C.component("RouterLink",ct),C.component("RouterView",nl),C.config.globalProperties.$router=O,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>X(l)}),qn&&!qe&&l.value===Qt&&(qe=!0,H(i.location).catch(re=>{}));const R={};for(const re in Qt)R[re]=we(()=>l.value[re]);C.provide(qs,O),C.provide(Ed,Ir(R)),C.provide(ea,l);const $=C.unmount;Wn.add(C),C.unmount=function(){Wn.delete(C),Wn.size<1&&(c=Qt,ot&&ot(),ot=null,l.value=Qt,qe=!1,Ae=!1),$()}}};return Fi}function Kn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tv(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>pr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>pr(c,l))||i.push(l))}return[n,r,i]}function Cd(){return Dt(qs)}const St=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},nv={},rv={class:"footer"},iv=id('<hr style="width:100%;margin-top:20px;"><h4>\u6B64\u7DB2\u9801\u5716\u7247\u7D20\u6750\u53D6\u81EA\uFF1A</h4><p>\u4EBA\u7269\u5716\u7247\uFF1A\u30B8\u30E5\u30A8\u30EB\u30BB\u30A4\u30D0\u30FCFREE <a href="http://www.jewel-s.jp/" target="_blank">http://www.jewel-s.jp/</a></p><p>\u80CC\u666F\u5716\u7247\uFF1A<a href="https://pngtree.com/free-backgrounds" target="_blank">pngtree, </a><a href="https://www.pexels.com/zh-tw/" target="_blank"> Pexels, </a><a href="https://www.freepik.com/" target="_blank">Freepik</a></p>',4),sv=[iv];function ov(t,e){return nt(),rt("div",rv,sv)}const av=St(nv,[["render",ov]]),Kr=[{number:"001",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"002",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"003",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"004",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"005",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"006",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"007",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"008",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"009",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"010",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"011",trait:"\u6BC0\u6EC5",attack:15,awake:!1},{number:"012",trait:"\u6BC0\u6EC5",attack:20,awake:!0},{number:"013",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"014",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"015",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"016",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"017",trait:"\u52D5\u76EA",attack:10,awake:!1},{number:"018",trait:"\u52D5\u76EA",attack:15,awake:!0},{number:"019",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"020",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"021",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"022",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"023",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"024",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"025",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"026",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"027",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"028",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"029",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"030",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"031",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"032",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"033",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"034",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"035",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"036",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"037",trait:"\u52D5\u76EA",attack:10,awake:!1},{number:"038",trait:"\u52D5\u76EA",attack:15,awake:!0},{number:"050",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"051",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"052",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"053",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"067",trait:"\u52D5\u76EA",attack:20,awake:!1},{number:"068",trait:"\u52D5\u76EA",attack:25,awake:!0},{number:"069",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"070",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"071",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"072",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"073",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"074",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"075",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"076",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"077",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"078",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"079",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"080",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"081",trait:"\u6BC0\u6EC5",attack:15,awake:!1},{number:"082",trait:"\u6BC0\u6EC5",attack:20,awake:!0},{number:"083",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"084",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"085",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"086",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"087",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"088",trait:"\u5FAA\u74B0",attack:25,awake:!0},{number:"089",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"090",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"091",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"092",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"093",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"094",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"095",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"096",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"097",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"098",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"099",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"100",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"101",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"102",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"103",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"104",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"105",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"106",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"107",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"108",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"109",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"110",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"111",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"112",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"113",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"114",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"115",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"119",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"120",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"121",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"122",trait:"\u5FAA\u74B0",attack:25,awake:!0},{number:"123",trait:"\u52D5\u76EA",attack:20,awake:!1},{number:"124",trait:"\u52D5\u76EA",attack:25,awake:!0},{number:"125",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"126",trait:"\u5FAA\u74B0",attack:25,awake:!0}],yn=Zg("counter",()=>{const t=ne(""),e=ne({account:"",team:[],havecard:[],remainCard:[]}),n=ne({img:"304"}),r=ne({img:"305"}),i=ne(Kr),s=ne(0),o=ne(0),a=ne(0),l=ne(0),c=ne(0),u=ne(!1);return{drama:t,user:e,Profile:n,ProfileCover:r,Char:i,SummonPoints:s,AwakePoints:o,pvp:a,win:l,lose:c,chatopen:u}});/**
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
 */const kd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw Sr(e)},Sr=function(t){return new Error("Firebase Database ("+kd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Id=function(t){const e=xd(t);return rl.encodeByteArray(e,!0)},ps=function(t){return Id(t).replace(/\./g,"")},ta=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cv(t){return Sd(void 0,t)}function Sd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uv(n)||(t[n]=Sd(t[n],e[n]));return t}function uv(t){return t!=="__proto__"}/**
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
 */function fv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fv())}function dv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ad(){return kd.NODE_ADMIN===!0}function hv(){return typeof indexedDB=="object"}function pv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gv=()=>mv().__FIREBASE_DEFAULTS__,_v=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ta(t[1]);return e&&JSON.parse(e)},Pd=()=>{try{return gv()||_v()||vv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yv=t=>{var e,n;return(n=(e=Pd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bv=t=>{const e=yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wv=()=>{var t;return(t=Pd())===null||t===void 0?void 0:t.config};/**
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
 */class Ii{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ev(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ps(JSON.stringify(n)),ps(JSON.stringify(o)),a].join(".")}/**
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
 */const Cv="FirebaseError";class Si extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cv,Object.setPrototypeOf(this,Si.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rd.prototype.create)}}class Rd{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Si(i,a,r)}}function kv(t,e){return t.replace(xv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xv=/\{\$([^}]+)}/g;/**
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
 */function ci(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
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
 */const Nd=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ci(ta(s[0])||""),n=ci(ta(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Iv=function(t){const e=Nd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Sv=function(t){const e=Nd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jc(s)&&Jc(o)){if(!na(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jc(t){return t!==null&&typeof t=="object"}/**
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
 */function Tv(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Av{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Qs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xs=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tr(t){return t&&t._delegate?t._delegate:t}class ui{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kn="[DEFAULT]";/**
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
 */class Rv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ii;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ov(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nv(t){return t===kn?void 0:t}function Ov(t){return t.instantiationMode==="EAGER"}/**
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
 */class Dv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Mv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Lv=ge.INFO,Fv={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},$v=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=Lv,this._logHandler=$v,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Uv=(t,e)=>e.some(n=>t instanceof n);let Zc,eu;function Bv(){return Zc||(Zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hv(){return eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,ra=new WeakMap,Md=new WeakMap,wo=new WeakMap,il=new WeakMap;function jv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dd.set(n,t)}).catch(()=>{}),il.set(e,t),e}function Wv(t){if(ra.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ra.set(t,e)}let ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ra.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Md.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zv(t){ia=t(ia)}function Vv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eo(this),e,...n);return Md.set(r,e.sort?e.sort():[e]),on(r)}:Hv().includes(t)?function(...e){return t.apply(Eo(this),e),on(Dd.get(this))}:function(...e){return on(t.apply(Eo(this),e))}}function Kv(t){return typeof t=="function"?Vv(t):(t instanceof IDBTransaction&&Wv(t),Uv(t,Bv())?new Proxy(t,ia):t)}function on(t){if(t instanceof IDBRequest)return jv(t);if(wo.has(t))return wo.get(t);const e=Kv(t);return e!==t&&(wo.set(t,e),il.set(e,t)),e}const Eo=t=>il.get(t);function Yv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=on(o);return r&&o.addEventListener("upgradeneeded",l=>{r(on(o.result),l.oldVersion,l.newVersion,on(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Gv=["get","getKey","getAll","getAllKeys","count"],qv=["put","add","delete","clear"],Co=new Map;function tu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Co.get(e))return Co.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Co.set(e,s),s}zv(t=>({...t,get:(e,n,r)=>tu(e,n)||t.get(e,n,r),has:(e,n)=>!!tu(e,n)||t.has(e,n)}));/**
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
 */class Qv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sa="@firebase/app",nu="0.8.3";/**
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
 */const Mn=new Od("@firebase/app"),Jv="@firebase/app-compat",Zv="@firebase/analytics-compat",ey="@firebase/analytics",ty="@firebase/app-check-compat",ny="@firebase/app-check",ry="@firebase/auth",iy="@firebase/auth-compat",sy="@firebase/database",oy="@firebase/database-compat",ay="@firebase/functions",ly="@firebase/functions-compat",cy="@firebase/installations",uy="@firebase/installations-compat",fy="@firebase/messaging",dy="@firebase/messaging-compat",hy="@firebase/performance",py="@firebase/performance-compat",my="@firebase/remote-config",gy="@firebase/remote-config-compat",_y="@firebase/storage",vy="@firebase/storage-compat",yy="@firebase/firestore",by="@firebase/firestore-compat",wy="firebase",Ey="9.13.0";/**
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
 */const oa="[DEFAULT]",Cy={[sa]:"fire-core",[Jv]:"fire-core-compat",[ey]:"fire-analytics",[Zv]:"fire-analytics-compat",[ny]:"fire-app-check",[ty]:"fire-app-check-compat",[ry]:"fire-auth",[iy]:"fire-auth-compat",[sy]:"fire-rtdb",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[ly]:"fire-fn-compat",[cy]:"fire-iid",[uy]:"fire-iid-compat",[fy]:"fire-fcm",[dy]:"fire-fcm-compat",[hy]:"fire-perf",[py]:"fire-perf-compat",[my]:"fire-rc",[gy]:"fire-rc-compat",[_y]:"fire-gcs",[vy]:"fire-gcs-compat",[yy]:"fire-fst",[by]:"fire-fst-compat","fire-js":"fire-js",[wy]:"fire-js-all"};/**
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
 */const gs=new Map,aa=new Map;function ky(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(aa.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,t);for(const n of gs.values())ky(n,t);return!0}function xy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Iy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new Rd("app","Firebase",Iy);/**
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
 */class Sy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Ty=Ey;function sl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=wv()),!n)throw an.create("no-options");const s=gs.get(i);if(s){if(na(n,s.options)&&na(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new Dv(i);for(const l of aa.values())o.addComponent(l);const a=new Sy(n,r,o);return gs.set(i,a),a}function Ay(t=oa){const e=gs.get(t);if(!e&&t===oa)return sl();if(!e)throw an.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=Cy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}_s(new ui(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Py="firebase-heartbeat-database",Ry=1,fi="firebase-heartbeat-store";let ko=null;function Ld(){return ko||(ko=Yv(Py,Ry,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),ko}async function Ny(t){var e;try{return(await Ld()).transaction(fi).objectStore(fi).get(Fd(t))}catch(n){if(n instanceof Si)Mn.warn(n.message);else{const r=an.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Mn.warn(r.message)}}}async function ru(t,e){var n;try{const i=(await Ld()).transaction(fi,"readwrite");return await i.objectStore(fi).put(e,Fd(t)),i.done}catch(r){if(r instanceof Si)Mn.warn(r.message);else{const i=an.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Mn.warn(i.message)}}}function Fd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Oy=1024,Dy=30*24*60*60*1e3;class My{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Dy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iu(),{heartbeatsToSend:n,unsentEntries:r}=Ly(this._heartbeatsCache.heartbeats),i=ps(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iu(){return new Date().toISOString().substring(0,10)}function Ly(t,e=Oy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),su(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),su(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hv()?pv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ny(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ru(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ru(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function su(t){return ps(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $y(t){_s(new ui("platform-logger",e=>new Qv(e),"PRIVATE")),_s(new ui("heartbeat",e=>new My(e),"PRIVATE")),nr(sa,nu,t),nr(sa,nu,"esm2017"),nr("fire-js","")}$y("");var Uy="firebase",By="9.13.0";/**
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
 */nr(Uy,By,"app");const ou="@firebase/database",au="0.13.10";/**
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
 */let $d="";function Hy(t){$d=t}/**
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
 */class jy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ci(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Wy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ud=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jy(e)}}catch{}return new Wy},An=Ud("localStorage"),la=Ud("sessionStorage");/**
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
 */const rr=new Od("@firebase/database"),zy=function(){let t=1;return function(){return t++}}(),Bd=function(t){const e=Pv(t),n=new Av;n.update(e);const r=n.digest();return rl.encodeByteArray(r)},Ti=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ti.apply(null,r):typeof r=="object"?e+=Ne(r):e+=r,e+=" "}return e};let Dn=null,lu=!0;const Vy=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(rr.logLevel=ge.VERBOSE,Dn=rr.log.bind(rr),e&&la.set("logging_enabled",!0)):typeof t=="function"?Dn=t:(Dn=null,la.remove("logging_enabled"))},Ue=function(...t){if(lu===!0&&(lu=!1,Dn===null&&la.get("logging_enabled")===!0&&Vy(!0)),Dn){const e=Ti.apply(null,t);Dn(e)}},Ai=function(t){return function(...e){Ue(t,...e)}},ca=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ti(...t);rr.error(e)},Ht=function(...t){const e=`FIREBASE FATAL ERROR: ${Ti(...t)}`;throw rr.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Ti(...t);rr.warn(e)},Ky=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ol=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_r="[MIN_NAME]",Ln="[MAX_NAME]",Hn=function(t,e){if(t===e)return 0;if(t===_r||e===Ln)return-1;if(e===_r||t===Ln)return 1;{const n=cu(t),r=cu(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Gy=function(t,e){return t===e?0:t<e?-1:1},Lr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},al=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ne(e[r]),n+=":",n+=al(t[e[r]]);return n+="}",n},Hd=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function He(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jd=function(t){S(!ol(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},qy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Qy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Jy=new RegExp("^-?(0*)\\d{1,10}$"),Zy=-2147483648,eb=2147483647,cu=function(t){if(Jy.test(t)){const e=Number(t);if(e>=Zy&&e<=eb)return e}return null},Ar=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},tb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Yr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class rb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class ir{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ir.OWNER="owner";/**
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
 */const ll="5",Wd="v",zd="s",Vd="r",Kd="f",Yd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gd="ls",qd="p",ua="ac",Qd="websocket",Xd="long_polling";/**
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
 */class Jd{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=An.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&An.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ib(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zd(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Qd)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xd)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ib(t)&&(n.ns=t.namespace);const i=[];return He(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class sb{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cv(this.counters_)}}/**
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
 */const xo={},Io={};function cl(t){const e=t.toString();return xo[e]||(xo[e]=new sb),xo[e]}function ob(t,e){const n=t.toString();return Io[n]||(Io[n]=e()),Io[n]}/**
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
 */class ab{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ar(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const uu="start",lb="close",cb="pLPCommand",ub="pRTLPCB",eh="id",th="pw",nh="ser",fb="cb",db="seg",hb="ts",pb="d",mb="dframe",rh=1870,ih=30,gb=rh-ih,_b=25e3,vb=3e4;class Qn{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ai(e),this.stats_=cl(n),this.urlFn=l=>(this.appCheckToken&&(l[ua]=this.appCheckToken),Zd(n,Xd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ab(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vb)),Yy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ul((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===uu)this.id=a,this.password=l;else if(o===lb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[uu]="t",r[nh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Wd]=ll,this.transportSessionId&&(r[zd]=this.transportSessionId),this.lastSessionId&&(r[Gd]=this.lastSessionId),this.applicationId&&(r[qd]=this.applicationId),this.appCheckToken&&(r[ua]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yd.test(location.hostname)&&(r[Vd]=Kd);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qn.forceAllow_=!0}static forceDisallow(){Qn.forceDisallow_=!0}static isAvailable(){return Qn.forceAllow_?!0:!Qn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qy()&&!Qy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Id(n),i=Hd(r,gb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mb]="t",r[eh]=e,r[th]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ul{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zy(),window[cb+this.uniqueCallbackIdentifier]=e,window[ub+this.uniqueCallbackIdentifier]=n,this.myIFrame=ul.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eh]=this.myID,e[th]=this.myPW,e[nh]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ih+r.length<=rh;){const o=this.pendingSegs.shift();r=r+"&"+db+i+"="+o.seg+"&"+hb+i+"="+o.ts+"&"+pb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(_b)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const yb=16384,bb=45e3;let vs=null;typeof MozWebSocket<"u"?vs=MozWebSocket:typeof WebSocket<"u"&&(vs=WebSocket);class gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ai(this.connId),this.stats_=cl(n),this.connURL=gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Wd]=ll,typeof location<"u"&&location.hostname&&Yd.test(location.hostname)&&(o[Vd]=Kd),n&&(o[zd]=n),r&&(o[Gd]=r),i&&(o[ua]=i),s&&(o[qd]=s),Zd(e,Qd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,An.set("previous_websocket_failure",!0);try{let r;Ad(),this.mySock=new vs(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vs!==null&&!gt.forceDisallow_}static previouslyFailed(){return An.isInMemoryStorage||An.get("previous_websocket_failure")===!0}markConnectionHealthy(){An.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ci(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hd(n,yb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gt.responsesRequiredToBeHealthy=2;gt.healthyTimeout=3e4;/**
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
 */class di{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qn,gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=gt&&gt.isAvailable();let r=n&&!gt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[gt];else{const i=this.transports_=[];for(const s of di.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);di.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}di.globalTransportInitialized_=!1;/**
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
 */const wb=6e4,Eb=5e3,Cb=10*1024,kb=100*1024,So="t",fu="d",xb="s",du="r",Ib="e",hu="o",pu="a",mu="n",gu="p",Sb="h";class Tb{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ai("c:"+this.id+":"),this.transportManager_=new di(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Yr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Cb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(So in e){const n=e[So];n===pu?this.upgradeIfSecondaryHealthy_():n===du?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Lr("t",e),r=Lr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Lr("t",e),r=Lr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Lr(So,e);if(fu in e){const r=e[fu];if(n===Sb)this.onHandshake_(r);else if(n===mu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xb?this.onConnectionShutdown_(r):n===du?this.onReset_(r):n===Ib?ca("Server Error: "+r):n===hu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ca("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ll!==r&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Yr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Yr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Eb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(An.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sh{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class oh{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ys extends oh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Td()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ys}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _u=32,vu=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new fe("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function fl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ab(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ah(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return Ve(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Pb(t,e){const n=hi(t,0),r=hi(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Hn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function lh(t,e){if(fn(t)!==fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fn(t)>fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Rb{constructor(e,n){this.errorPrefix_=n,this.parts_=hi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Xs(this.parts_[r]);ch(this)}}function Nb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xs(e),ch(t)}function Ob(t){const e=t.parts_.pop();t.byteLength_-=Xs(e),t.parts_.length>0&&(t.byteLength_-=1)}function ch(t){if(t.byteLength_>vu)throw new Error(t.errorPrefix_+"has a key path longer than "+vu+" bytes ("+t.byteLength_+").");if(t.parts_.length>_u)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_u+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class dl extends oh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new dl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fr=1e3,Db=60*5*1e3,yu=30*1e3,Mb=1.3,Lb=3e4,Fb="server_kill",bu=3;class Ut extends sh{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=Ai("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fr,this.maxReconnectDelay_=Db,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ad())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ys.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ne(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ii,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ca("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Lb&&(this.reconnectDelay_=Fr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new Tb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Ke(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Fb)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ke(f),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xc(this.interruptReasons_)&&(this.reconnectDelay_=Fr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>al(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bu&&(this.reconnectDelay_=yu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$d.replace(/\./g,"-")]=1,Td()?e["framework.cordova"]=1:dv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ys.getInstance().currentlyOnline();return Xc(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
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
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
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
 */class Js{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(_r,e),i=new q(_r,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
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
 */let Wi;class uh extends Js{static get __EMPTY_NODE(){return Wi}static set __EMPTY_NODE(e){Wi=e}compare(e,n){return Hn(e.name,n.name)}isDefinedOn(e){throw Sr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Ln,Wi)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Wi)}toString(){return".key"}}const sr=new uh;/**
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
 */class zi{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=i!=null?i:Je.EMPTY_NODE,this.right=s!=null?s:Je.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class $b{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zi(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new $b;/**
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
 */function Ub(t,e){return Hn(t.name,e.name)}function hl(t,e){return Hn(t,e)}/**
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
 */let fa;function Bb(t){fa=t}const fh=function(t){return typeof t=="number"?"number:"+jd(t):"string:"+t},dh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else S(t===fa||t.isEmpty(),"priority of unexpected type.");S(t===fa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wu;class Le{constructor(e,n=Le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dh(this.priorityNode_)}static set __childrenNodeConstructor(e){wu=e}static get __childrenNodeConstructor(){return wu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:ee(e)===".priority"?this.priorityNode_:Le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Le.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jd(this.value_):e+=this.value_,this.lazyHash_=Bd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Le.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Le.VALUE_TYPE_ORDER.indexOf(n),s=Le.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let hh,ph;function Hb(t){hh=t}function jb(t){ph=t}class Wb extends Js{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Hn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Ln,new Le("[PRIORITY-POST]",ph))}makePost(e,n){const r=hh(e);return new q(n,new Le("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new Wb;/**
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
 */const zb=Math.log(2);class Vb{constructor(e){const n=s=>parseInt(Math.log(s)/zb,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bs=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Fe(d,f.node,Fe.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),_=i(p+1,c);return f=t[p],d=n?n(f):f,new Fe(d,f.node,Fe.BLACK,g,_)}},s=function(l){let c=null,u=null,f=t.length;const d=function(g,_){const b=f-g,v=f;f-=g;const k=i(b+1,v),M=t[b],H=n?n(M):M;p(new Fe(H,M.node,_,null,k))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));_?d(b,Fe.BLACK):(d(b,Fe.BLACK),d(b,Fe.RED))}return u},o=new Vb(t.length),a=s(o);return new Je(r||e,a)};/**
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
 */let To;const Yn={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Yn&&Se,"ChildrenNode.ts has not been loaded"),To=To||new $t({".priority":Yn},{".priority":Se}),To}get(e){const n=gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==sr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=bs(r,e.getCompare()):a=Yn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(e,n){const r=ms(this.indexes_,(i,s)=>{const o=gr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Yn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bs(a,o.getCompare())}else return Yn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new $t(r,this.indexSet_)}removeFromIndexes(e,n){const r=ms(this.indexes_,i=>{if(i===Yn)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new $t(r,this.indexSet_)}}/**
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
 */let $r;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $r||($r=new j(new Je(hl),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$r}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$r:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$r:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{S(ee(e)!==".priority"||fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fh(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Bd(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pi?-1:0}withIndex(e){if(e===sr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===sr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kb extends j{constructor(){super(new Je(hl),j.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Pi=new Kb;Object.defineProperties(q,{MIN:{value:new q(_r,j.EMPTY_NODE)},MAX:{value:new q(Ln,Pi)}});uh.__EMPTY_NODE=j.EMPTY_NODE;Le.__childrenNodeConstructor=j;Bb(Pi);jb(Pi);/**
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
 */const Yb=!0;function Re(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Le(n,Re(e))}if(!(t instanceof Array)&&Yb){const n=[];let r=!1;if(He(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=bs(n,Ub,o=>o.name,hl);if(r){const o=bs(n,Se.getCompare());return new j(s,Re(e),new $t({".priority":o},{".priority":Se}))}else return new j(s,Re(e),$t.Default)}else{let n=j.EMPTY_NODE;return He(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=Re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Re(e))}}Hb(Re);/**
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
 */class Gb extends Js{constructor(e){super(),this.indexPath_=e,S(!J(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Hn(e.name,n.name):s}makePost(e,n){const r=Re(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Pi);return new q(Ln,e)}toString(){return hi(this.indexPath_,0).join("/")}}/**
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
 */class qb extends Js{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Hn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Re(e);return new q(n,r)}toString(){return".value"}}const Qb=new qb;/**
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
 */function mh(t){return{type:"value",snapshotNode:t}}function vr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function pi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Xb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class pl{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(pi(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vr(n,r)):o.trackChildChange(mi(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(pi(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(mi(i,s,o))}else r.trackChildChange(vr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gi{constructor(e){this.indexedFilter_=new pl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gi.getStartPost_(e),this.endPost_=gi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Jb{constructor(e){this.rangedFilter_=new gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,p)=>f(p,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:i=i.updateImmediateChild(f.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new q(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(mi(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(pi(n,f));const _=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(vr(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(pi(c.name,c.node)),s.trackChildChange(vr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class ml{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_r}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new ml;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zb(t){return t.loadsAllData()?new pl(t.getIndex()):t.hasLimit()?new Jb(t):new gi(t)}function Eu(t){const e={};if(t.isDefault())return e;let n;return t.index_===Se?n="$priority":t.index_===Qb?n="$value":t.index_===sr?n="$key":(S(t.index_ instanceof Gb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_&&(e.startAt=Ne(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ne(t.indexStartName_))),t.endSet_&&(e.endAt=Ne(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ne(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class ws extends sh{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ai("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ws.getListenId_(e,r),a={};this.listens_[o]=a;const l=Eu(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),gr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=ws.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Eu(e._queryParams),r=e._path.toString(),i=new Ii;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Tv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ci(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class e0{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Es(){return{value:null,children:new Map}}function gh(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,Es());const i=t.children.get(r);e=_e(e),gh(i,e,n)}}function da(t,e,n){t.value!==null?n(e,t.value):t0(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);da(i,s,n)})}function t0(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class n0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&He(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const ku=10*1e3,r0=30*1e3,i0=5*60*1e3;class s0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new n0(e);const r=ku+(r0-ku)*Math.random();Yr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;He(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Yr(this.reportStats_.bind(this),Math.floor(Math.random()*2*i0))}}/**
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
 */var bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bt||(bt={}));function gl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _l(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Cs{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=bt.ACK_USER_WRITE,this.source=gl()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Cs(ie(),n,this.revert)}}else return S(ee(this.path)===e,"operationForChild called for unrelated child."),new Cs(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class _i{constructor(e,n){this.source=e,this.path=n,this.type=bt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new _i(this.source,ie()):new _i(this.source,_e(this.path))}}/**
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
 */class Fn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=bt.OVERWRITE}operationForChild(e){return J(this.path)?new Fn(this.source,ie(),this.snap.getImmediateChild(e)):new Fn(this.source,_e(this.path),this.snap)}}/**
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
 */class yr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=bt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Fn(this.source,ie(),n.value):new yr(this.source,ie(),n)}else return S(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yr(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class dn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class o0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function a0(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Xb(o.childName,o.snapshotNode))}),Ur(t,i,"child_removed",e,r,n),Ur(t,i,"child_added",e,r,n),Ur(t,i,"child_moved",s,r,n),Ur(t,i,"child_changed",e,r,n),Ur(t,i,"value",e,r,n),i}function Ur(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>c0(t,a,l)),o.forEach(a=>{const l=l0(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function l0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function c0(t,e,n){if(e.childName==null||n.childName==null)throw Sr("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Zs(t,e){return{eventCache:t,serverCache:e}}function Gr(t,e,n,r){return Zs(new dn(e,n,r),t.serverCache)}function _h(t,e,n,r){return Zs(t.eventCache,new dn(e,n,r))}function ks(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ao;const u0=()=>(Ao||(Ao=new Je(Gy)),Ao);class me{constructor(e,n=u0()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return He(e,(r,i)=>{n=n.set(new fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(J(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:Ie(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new me(null)}}set(e,n){if(J(e))return new me(n,this.children);{const r=ee(e),s=(this.children.get(r)||new me(null)).set(_e(e),n),o=this.children.insert(r,s);return new me(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(J(e))return n;{const r=ee(e),s=(this.children.get(r)||new me(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new me(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),Ie(n,i),r):new me(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new me(null))}}function qr(t,e,n){if(J(e))return new xt(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ve(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new me(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function ha(t,e,n){let r=t;return He(n,(i,s)=>{r=qr(r,Ie(e,i),s)}),r}function xu(t,e){if(J(e))return xt.empty();{const n=t.writeTree_.setTree(e,new me(null));return new xt(n)}}function pa(t,e){return jn(t,e)!=null}function jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Iu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function ln(t,e){if(J(e))return t;{const n=jn(t,e);return n!=null?new xt(new me(n)):new xt(t.writeTree_.subtree(e))}}function ma(t){return t.writeTree_.isEmpty()}function br(t,e){return vh(ie(),t.writeTree_,e)}function vh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vh(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
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
 */function eo(t,e){return Eh(e,t)}function f0(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qr(t.visibleWrites,e,n)),t.lastWriteId=r}function d0(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ha(t.visibleWrites,e,n),t.lastWriteId=r}function h0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function p0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&m0(a,r.path)?i=!1:ut(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return g0(t),!0;if(r.snap)t.visibleWrites=xu(t.visibleWrites,r.path);else{const a=r.children;He(a,l=>{t.visibleWrites=xu(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function m0(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(Ie(t.path,n),e))return!0;return!1}function g0(t){t.visibleWrites=yh(t.allWrites,_0,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _0(t){return t.visible}function yh(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ut(n,o)?(a=Ve(n,o),r=qr(r,a,s.snap)):ut(o,n)&&(a=Ve(o,n),r=qr(r,ie(),s.snap.getChild(a)));else if(s.children){if(ut(n,o))a=Ve(n,o),r=ha(r,a,s.children);else if(ut(o,n))if(a=Ve(o,n),J(a))r=ha(r,ie(),s.children);else{const l=gr(s.children,ee(a));if(l){const c=l.getChild(_e(a));r=qr(r,ie(),c)}}}else throw Sr("WriteRecord should have .snap or .children")}}return r}function bh(t,e,n,r,i){if(!r&&!i){const s=jn(t.visibleWrites,e);if(s!=null)return s;{const o=ln(t.visibleWrites,e);if(ma(o))return n;if(n==null&&!pa(o,ie()))return null;{const a=n||j.EMPTY_NODE;return br(o,a)}}}else{const s=ln(t.visibleWrites,e);if(!i&&ma(s))return n;if(!i&&n==null&&!pa(s,ie()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},a=yh(t.allWrites,o,e),l=n||j.EMPTY_NODE;return br(a,l)}}}function v0(t,e,n){let r=j.EMPTY_NODE;const i=jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ln(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=br(ln(s,new fe(o)),a);r=r.updateImmediateChild(o,l)}),Iu(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ln(t.visibleWrites,e);return Iu(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function y0(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(pa(t.visibleWrites,s))return null;{const o=ln(t.visibleWrites,s);return ma(o)?i.getChild(n):br(o,i.getChild(n))}}function b0(t,e,n,r){const i=Ie(e,n),s=jn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ln(t.visibleWrites,i);return br(o,r.getNode().getImmediateChild(n))}else return null}function w0(t,e){return jn(t.visibleWrites,e)}function E0(t,e,n,r,i,s,o){let a;const l=ln(t.visibleWrites,e),c=jn(l,ie());if(c!=null)a=c;else if(n!=null)a=br(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&u.length<i;)f(p,r)!==0&&u.push(p),p=d.getNext();return u}else return[]}function C0(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function xs(t,e,n,r){return bh(t.writeTree,t.treePath,e,n,r)}function yl(t,e){return v0(t.writeTree,t.treePath,e)}function Su(t,e,n,r){return y0(t.writeTree,t.treePath,e,n,r)}function Is(t,e){return w0(t.writeTree,Ie(t.treePath,e))}function k0(t,e,n,r,i,s){return E0(t.writeTree,t.treePath,e,n,r,i,s)}function bl(t,e,n){return b0(t.writeTree,t.treePath,e,n)}function wh(t,e){return Eh(Ie(t.treePath,e),t.writeTree)}function Eh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class x0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,mi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,pi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,mi(r,e.snapshotNode,i.oldSnap));else throw Sr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class I0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ch=new I0;class wl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bl(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$n(this.viewCache_),s=k0(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function S0(t){return{filter:t}}function T0(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function A0(t,e,n,r,i){const s=new x0;let o,a;if(n.type===bt.OVERWRITE){const c=n;c.source.fromUser?o=ga(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Ss(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===bt.MERGE){const c=n;c.source.fromUser?o=R0(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=_a(t,e,c.path,c.children,r,i,a,s))}else if(n.type===bt.ACK_USER_WRITE){const c=n;c.revert?o=D0(t,e,c.path,r,i,s):o=N0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===bt.LISTEN_COMPLETE)o=O0(t,e,n.path,r,s);else throw Sr("Unknown operation type: "+n.type);const l=s.getChanges();return P0(e,o,l),{viewCache:o,changes:l}}function P0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ks(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(mh(ks(e)))}}function kh(t,e,n,r,i,s){const o=e.eventCache;if(Is(r,n)!=null)return e;{let a,l;if(J(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$n(e),u=c instanceof j?c:j.EMPTY_NODE,f=yl(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=xs(r,$n(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ee(n);if(c===".priority"){S(fn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Su(r,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=_e(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Su(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=bl(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,s):a=o.getNode()}}return Gr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Ss(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=ee(n);if(!l.isCompleteForPath(n)&&fn(n)>1)return e;const g=_e(n),b=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,g,Ch,null)}const f=_h(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new wl(i,f,s);return kh(t,f,n,i,d,a)}function ga(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new wl(i,e,s);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Gr(e,c,!0,t.filter.filtersNodes());else{const f=ee(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Gr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),p=a.getNode().getImmediateChild(f);let g;if(J(d))g=r;else{const _=u.getCompleteChild(f);_!=null?fl(d)===".priority"&&_.getChild(ah(d)).isEmpty()?g=_:g=_.updateChild(d,r):g=j.EMPTY_NODE}if(p.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),f,g,d,u,o);l=Gr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tu(t,e){return t.eventCache.isCompleteForChild(e)}function R0(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Ie(n,l);Tu(e,ee(u))&&(a=ga(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Ie(n,l);Tu(e,ee(u))||(a=ga(t,a,u,c,i,s,o))}),a}function Au(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _a(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=r:c=new me(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),g=Au(t,p,d);l=Ss(t,l,new fe(f),g,i,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const g=e.serverCache.getNode().getImmediateChild(f),_=Au(t,g,d);l=Ss(t,l,new fe(f),_,i,s,o,a)}}),l}function N0(t,e,n,r,i,s,o){if(Is(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ss(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let c=new me(null);return l.getNode().forEachChild(sr,(u,f)=>{c=c.set(new fe(u),f)}),_a(t,e,n,c,i,s,a,o)}else return e}else{let c=new me(null);return r.foreach((u,f)=>{const d=Ie(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),_a(t,e,n,c,i,s,a,o)}}function O0(t,e,n,r,i){const s=e.serverCache,o=_h(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return kh(t,o,n,r,Ch,i)}function D0(t,e,n,r,i,s){let o;if(Is(r,n)!=null)return e;{const a=new wl(r,e,i),l=e.eventCache.getNode();let c;if(J(n)||ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xs(r,$n(e));else{const f=e.serverCache.getNode();S(f instanceof j,"serverChildren would be complete if leaf node"),u=yl(r,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=ee(n);let f=bl(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,_e(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,_e(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xs(r,$n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Is(r,ie())!=null,Gr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class M0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new pl(r.getIndex()),s=Zb(r);this.processor_=S0(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new dn(l,o.isFullyInitialized(),i.filtersNodes()),f=new dn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zs(f,u),this.eventGenerator_=new o0(this.query_)}get query(){return this.query_}}function L0(t){return t.viewCache_.serverCache.getNode()}function F0(t){return ks(t.viewCache_)}function $0(t,e){const n=$n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Pu(t){return t.eventRegistrations_.length===0}function U0(t,e){t.eventRegistrations_.push(e)}function Ru(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Nu(t,e,n,r){e.type===bt.MERGE&&e.source.queryId!==null&&(S($n(t.viewCache_),"We should always have a full cache before handling merges"),S(ks(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=A0(t.processor_,i,e,n,r);return T0(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function B0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(vr(s,o))}),n.isFullyInitialized()&&r.push(mh(n.getNode())),xh(t,r,n.getNode(),e)}function xh(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return a0(t.eventGenerator_,e,n,i)}/**
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
 */let Ts;class Ih{constructor(){this.views=new Map}}function H0(t){S(!Ts,"__referenceConstructor has already been defined"),Ts=t}function j0(){return S(Ts,"Reference.ts has not been loaded"),Ts}function W0(t){return t.views.size===0}function El(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Nu(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Nu(o,e,n,r));return s}}function Sh(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=xs(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=yl(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=Zs(new dn(a,l,!1),new dn(r,i,!1));return new M0(e,c)}return o}function z0(t,e,n,r,i,s){const o=Sh(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),U0(o,n),B0(o,n)}function V0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=hn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ru(c,n,r)),Pu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ru(l,n,r)),Pu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!hn(t)&&s.push(new(j0())(e._repo,e._path)),{removed:s,events:o}}function Th(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function cn(t,e){let n=null;for(const r of t.views.values())n=n||$0(r,e);return n}function Ah(t,e){if(e._queryParams.loadsAllData())return to(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ph(t,e){return Ah(t,e)!=null}function hn(t){return to(t)!=null}function to(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let As;function K0(t){S(!As,"__referenceConstructor has already been defined"),As=t}function Y0(){return S(As,"Reference.ts has not been loaded"),As}let G0=1;class Ou{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=C0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rh(t,e,n,r,i){return f0(t.pendingWriteTree_,e,n,r,i),i?Pr(t,new Fn(gl(),e,n)):[]}function q0(t,e,n,r){d0(t.pendingWriteTree_,e,n,r);const i=me.fromObject(n);return Pr(t,new yr(gl(),e,i))}function tn(t,e,n=!1){const r=h0(t.pendingWriteTree_,e);if(p0(t.pendingWriteTree_,e)){let s=new me(null);return r.snap!=null?s=s.set(ie(),!0):He(r.children,o=>{s=s.set(new fe(o),!0)}),Pr(t,new Cs(r.path,s,n))}else return[]}function Ri(t,e,n){return Pr(t,new Fn(_l(),e,n))}function Q0(t,e,n){const r=me.fromObject(n);return Pr(t,new yr(_l(),e,r))}function X0(t,e){return Pr(t,new _i(_l(),e))}function J0(t,e,n){const r=kl(t,n);if(r){const i=xl(r),s=i.path,o=i.queryId,a=Ve(s,e),l=new _i(vl(o),a);return Il(t,s,l)}else return[]}function Nh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Ph(o,e))){const l=V0(o,e,n,r);W0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,p)=>hn(p));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=n1(d);for(let g=0;g<p.length;++g){const _=p[g],b=_.query,v=Lh(t,_);t.listenProvider_.startListening(Qr(b),vi(t,b),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Qr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(no(d));t.listenProvider_.stopListening(Qr(d),p)}))}r1(t,c)}return a}function Oh(t,e,n,r){const i=kl(t,r);if(i!=null){const s=xl(i),o=s.path,a=s.queryId,l=Ve(o,e),c=new Fn(vl(a),l,n);return Il(t,o,c)}else return[]}function Z0(t,e,n,r){const i=kl(t,r);if(i){const s=xl(i),o=s.path,a=s.queryId,l=Ve(o,e),c=me.fromObject(n),u=new yr(vl(a),l,c);return Il(t,o,u)}else return[]}function e1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=Ve(d,i);s=s||cn(p,g),o=o||hn(p)});let a=t.syncPointTree_.get(i);a?(o=o||hn(a),s=s||cn(a,ie())):(a=new Ih,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const _=cn(g,ie());_&&(s=s.updateImmediateChild(p,_))}));const c=Ph(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=no(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=i1();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=eo(t.pendingWriteTree_,i);let f=z0(a,e,n,u,s,l);if(!c&&!o&&!r){const d=Ah(a,e);f=f.concat(s1(t,e,d))}return f}function Cl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=cn(a,l);if(c)return c});return bh(i,e,s,n,!0)}function t1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Ve(c,n);r=r||cn(u,f)});let i=t.syncPointTree_.get(n);i?r=r||cn(i,ie()):(i=new Ih,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new dn(r,!0,!1):null,a=eo(t.pendingWriteTree_,e._path),l=Sh(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return F0(l)}function Pr(t,e){return Dh(e,t.syncPointTree_,null,eo(t.pendingWriteTree_,ie()))}function Dh(t,e,n,r){if(J(t.path))return Mh(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=cn(i,ie()));let s=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wh(r,o);s=s.concat(Dh(a,l,c,u))}return i&&(s=s.concat(El(i,t,r,n))),s}}function Mh(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=cn(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wh(r,o),u=t.operationForChild(o);u&&(s=s.concat(Mh(u,a,l,c)))}),i&&(s=s.concat(El(i,t,r,n))),s}function Lh(t,e){const n=e.query,r=vi(t,n);return{hashFn:()=>(L0(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?J0(t,n._path,r):X0(t,n._path);{const s=Xy(i,n);return Nh(t,n,null,s)}}}}function vi(t,e){const n=no(e);return t.queryToTagMap.get(n)}function no(t){return t._path.toString()+"$"+t._queryIdentifier}function kl(t,e){return t.tagToQueryMap.get(e)}function xl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Il(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=eo(t.pendingWriteTree_,e);return El(r,n,i,null)}function n1(t){return t.fold((e,n,r)=>{if(n&&hn(n))return[to(n)];{let i=[];return n&&(i=Th(n)),He(r,(s,o)=>{i=i.concat(o)}),i}})}function Qr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Y0())(t._repo,t._path):t}function r1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=no(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function i1(){return G0++}function s1(t,e,n){const r=e._path,i=vi(t,e),s=Lh(t,n),o=t.listenProvider_.startListening(Qr(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!hn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!J(c)&&u&&hn(u))return[to(u).query];{let d=[];return u&&(d=d.concat(Th(u).map(p=>p.query))),He(f,(p,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Qr(u),vi(t,u))}}return o}/**
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
 */class Sl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Sl(n)}node(){return this.node_}}class Tl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Tl(this.syncTree_,n)}node(){return Cl(this.syncTree_,this.path_)}}const o1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Du=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return a1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return l1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},a1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},l1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Fh=function(t,e,n,r){return Al(e,new Tl(n,t),r)},$h=function(t,e,n){return Al(t,new Sl(e),n)};function Al(t,e,n){const r=t.getPriority().val(),i=Du(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Du(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Le(a,Re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Le(i))),o.forEachChild(Se,(a,l)=>{const c=Al(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Pl{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Rl(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=ee(n);for(;i!==null;){const s=gr(r.node.children,i)||{children:{},childCount:0};r=new Pl(i,r,s),n=_e(n),i=ee(n)}return r}function Rr(t){return t.node.value}function Uh(t,e){t.node.value=e,va(t)}function Bh(t){return t.node.childCount>0}function c1(t){return Rr(t)===void 0&&!Bh(t)}function ro(t,e){He(t.node.children,(n,r)=>{e(new Pl(n,t,r))})}function Hh(t,e,n,r){n&&!r&&e(t),ro(t,i=>{Hh(i,e,!0,r)}),n&&r&&e(t)}function u1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ni(t){return new fe(t.parent===null?t.name:Ni(t.parent)+"/"+t.name)}function va(t){t.parent!==null&&f1(t.parent,t.name,t)}function f1(t,e,n){const r=c1(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,va(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,va(t))}/**
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
 */const d1=/[\[\].#$\/\u0000-\u001F\u007F]/,h1=/[\[\].#$\u0000-\u001F\u007F]/,Po=10*1024*1024,Nl=function(t){return typeof t=="string"&&t.length!==0&&!d1.test(t)},jh=function(t){return typeof t=="string"&&t.length!==0&&!h1.test(t)},p1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jh(t)},m1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ol(t)||t&&typeof t=="object"&&Mt(t,".sv")},g1=function(t,e,n,r){r&&e===void 0||io(Qs(t,"value"),e,n)},io=function(t,e,n){const r=n instanceof fe?new Rb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+xn(r)+" with contents = "+e.toString());if(ol(e))throw new Error(t+"contains "+e.toString()+" "+xn(r));if(typeof e=="string"&&e.length>Po/3&&Xs(e)>Po)throw new Error(t+"contains a string greater than "+Po+" utf8 bytes "+xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(He(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Nl(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Nb(r,o),io(t,a,r),Ob(r)}),i&&s)throw new Error(t+' contains ".value" child '+xn(r)+" in addition to actual children.")}},_1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=hi(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Nl(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Pb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},v1=function(t,e,n,r){if(r&&e===void 0)return;const i=Qs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];He(e,(o,a)=>{const l=new fe(o);if(io(i,a,Ie(n,l)),fl(l)===".priority"&&!m1(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),_1(i,s)},Wh=function(t,e,n,r){if(!(r&&n===void 0)&&!jh(n))throw new Error(Qs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},y1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wh(t,e,n,r)},b1=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},w1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!p1(n))throw new Error(Qs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class E1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ol(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!lh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ft(t,e,n){Ol(t,n),C1(t,r=>ut(r,e)||ut(e,r))}function C1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(k1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function k1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Dn&&Ue("event: "+n.toString()),Ar(r)}}}/**
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
 */const x1="repo_interrupt",I1=25;class S1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new E1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Es(),this.transactionQueueTree_=new Pl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T1(t,e,n){if(t.stats_=cl(t.repoInfo_),t.forceRestClient_||tb())t.server_=new ws(t.repoInfo_,(r,i,s,o)=>{Mu(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Lu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(r,i,s,o)=>{Mu(t,r,i,s,o)},r=>{Lu(t,r)},r=>{P1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ob(t.repoInfo_,()=>new s0(t.stats_,t.server_)),t.infoData_=new e0,t.infoSyncTree_=new Ou({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ri(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Dl(t,"connected",!1),t.serverSyncTree_=new Ou({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);ft(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function A1(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function so(t){return o1({timestamp:A1(t)})}function Mu(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ms(n,c=>Re(c));o=Z0(t.serverSyncTree_,s,l,i)}else{const l=Re(n);o=Oh(t.serverSyncTree_,s,l,i)}else if(r){const l=ms(n,c=>Re(c));o=Q0(t.serverSyncTree_,s,l)}else{const l=Re(n);o=Ri(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=wr(t,s)),ft(t.eventQueue_,a,o)}function Lu(t,e){Dl(t,"connected",e),e===!1&&D1(t)}function P1(t,e){He(e,(n,r)=>{Dl(t,n,r)})}function Dl(t,e,n){const r=new fe("/.info/"+e),i=Re(n);t.infoData_.updateSnapshot(r,i);const s=Ri(t.infoSyncTree_,r,i);ft(t.eventQueue_,r,s)}function Ml(t){return t.nextWriteId_++}function R1(t,e,n){const r=t1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Re(i).withIndex(e._queryParams.getIndex());e1(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ri(t.serverSyncTree_,e._path,s);else{const a=vi(t.serverSyncTree_,e);o=Oh(t.serverSyncTree_,e._path,s,a)}return ft(t.eventQueue_,e._path,o),Nh(t.serverSyncTree_,e,n,null,!0),s},i=>(Oi(t,"get for query "+Ne(e)+" failed: "+i),Promise.reject(new Error(i))))}function N1(t,e,n,r,i){Oi(t,"set",{path:e.toString(),value:n,priority:r});const s=so(t),o=Re(n,r),a=Cl(t.serverSyncTree_,e),l=$h(o,a,s),c=Ml(t),u=Rh(t.serverSyncTree_,e,l,c,!0);Ol(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||Ke("set at "+e+" failed: "+d);const _=tn(t.serverSyncTree_,c,!g);ft(t.eventQueue_,e,_),ya(t,i,d,p)});const f=Fl(t,e);wr(t,f),ft(t.eventQueue_,f,[])}function O1(t,e,n,r){Oi(t,"update",{path:e.toString(),value:n});let i=!0;const s=so(t),o={};if(He(n,(a,l)=>{i=!1,o[a]=Fh(Ie(e,a),Re(l),t.serverSyncTree_,s)}),i)Ue("update() called with empty data.  Don't do anything."),ya(t,r,"ok",void 0);else{const a=Ml(t),l=q0(t.serverSyncTree_,e,o,a);Ol(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||Ke("update at "+e+" failed: "+c);const d=tn(t.serverSyncTree_,a,!f),p=d.length>0?wr(t,e):e;ft(t.eventQueue_,p,d),ya(t,r,c,u)}),He(n,c=>{const u=Fl(t,Ie(e,c));wr(t,u)}),ft(t.eventQueue_,e,[])}}function D1(t){Oi(t,"onDisconnectEvents");const e=so(t),n=Es();da(t.onDisconnect_,ie(),(i,s)=>{const o=Fh(i,s,t.serverSyncTree_,e);gh(n,i,o)});let r=[];da(n,ie(),(i,s)=>{r=r.concat(Ri(t.serverSyncTree_,i,s));const o=Fl(t,i);wr(t,o)}),t.onDisconnect_=Es(),ft(t.eventQueue_,ie(),r)}function M1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(x1)}function Oi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function ya(t,e,n,r){e&&Ar(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function zh(t,e,n){return Cl(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Ll(t,e=t.transactionQueueTree_){if(e||oo(t,e),Rr(e)){const n=Kh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&L1(t,Ni(e),n)}else Bh(e)&&ro(e,n=>{Ll(t,n)})}function L1(t,e,n){const r=n.map(c=>c.currentWriteId),i=zh(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ve(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Oi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(tn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();oo(t,Rl(t.transactionQueueTree_,e)),Ll(t,t.transactionQueueTree_),ft(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Ar(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}wr(t,e)}},o)}function wr(t,e){const n=Vh(t,e),r=Ni(n),i=Kh(t,n);return F1(t,i,r),r}function F1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,f;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(tn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=I1)u=!0,f="maxretry",i=i.concat(tn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=zh(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){io("transaction failed: Data returned ",p,l.path);let g=Re(p);typeof p=="object"&&p!=null&&Mt(p,".priority")||(g=g.updatePriority(d.getPriority()));const b=l.currentWriteId,v=so(t),k=$h(g,d,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=k,l.currentWriteId=Ml(t),o.splice(o.indexOf(b),1),i=i.concat(Rh(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),i=i.concat(tn(t.serverSyncTree_,b,!0))}else u=!0,f="nodata",i=i.concat(tn(t.serverSyncTree_,l.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}oo(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ar(r[a]);Ll(t,t.transactionQueueTree_)}function Vh(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&Rr(r)===void 0;)r=Rl(r,n),e=_e(e),n=ee(e);return r}function Kh(t,e){const n=[];return Yh(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Yh(t,e,n){const r=Rr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ro(e,i=>{Yh(t,i,n)})}function oo(t,e){const n=Rr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Uh(e,n.length>0?n:void 0)}ro(e,r=>{oo(t,r)})}function Fl(t,e){const n=Ni(Vh(t,e)),r=Rl(t.transactionQueueTree_,e);return u1(r,i=>{Ro(t,i)}),Ro(t,r),Hh(r,i=>{Ro(t,i)}),n}function Ro(t,e){const n=Rr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(tn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Uh(e,void 0):n.length=s+1,ft(t.eventQueue_,Ni(e),i);for(let o=0;o<r.length;o++)Ar(r[o])}}/**
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
 */function $1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function U1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fu=function(t,e){const n=B1(t),r=n.namespace;n.domain==="firebase.com"&&Ht(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ht("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ky();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jd(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},B1=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=$1(t.substring(u,f)));const d=U1(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class H1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class j1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class W1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $l{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:fl(this._path)}get ref(){return new Kt(this._repo,this._path)}get _queryIdentifier(){const e=Cu(this._queryParams),n=al(e);return n==="{}"?"default":n}get _queryObject(){return Cu(this._queryParams)}isEqual(e){if(e=Tr(e),!(e instanceof $l))return!1;const n=this._repo===e._repo,r=lh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ab(this._path)}}class Kt extends $l{constructor(e,n){super(e,n,new ml,!1)}get parent(){const e=ah(this._path);return e===null?null:new Kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=or(this.ref,e);return new yi(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new yi(i,or(this.ref,r),Se)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ps(t,e){return t=Tr(t),t._checkNotDeleted("ref"),e!==void 0?or(t._root,e):t._root}function or(t,e){return t=Tr(t),ee(t._path)===null?y1("child","path",e,!1):Wh("child","path",e,!1),new Kt(t._repo,Ie(t._path,e))}function z1(t,e){t=Tr(t),b1("set",t._path),g1("set",e,t._path,!1);const n=new Ii;return N1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function V1(t,e){v1("update",e,t._path,!1);const n=new Ii;return O1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function No(t){t=Tr(t);const e=new W1(()=>{}),n=new Ul(e);return R1(t._repo,t,n).then(r=>new yi(r,new Kt(t._repo,t._path),t._queryParams.getIndex()))}class Ul{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new H1("value",this,new yi(e.snapshotNode,new Kt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new j1(this,e,n):null}matches(e){return e instanceof Ul?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}H0(Kt);K0(Kt);/**
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
 */const K1="FIREBASE_DATABASE_EMULATOR_HOST",ba={};let Y1=!1;function G1(t,e,n,r){t.repoInfo_=new Jd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function q1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ht("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fu(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[K1]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Fu(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ir(ir.OWNER):new rb(t.name,t.options,e);w1("Invalid Firebase Database URL",o),J(o.path)||Ht("Database URL must point to the root of a Firebase Database (not including a child path).");const f=X1(a,t,u,new nb(t.name,n));return new J1(f,t)}function Q1(t,e){const n=ba[e];(!n||n[t.key]!==t)&&Ht(`Database ${e}(${t.repoInfo_}) has already been deleted.`),M1(t),delete n[t.key]}function X1(t,e,n,r){let i=ba[e.name];i||(i={},ba[e.name]=i);let s=i[t.toURLString()];return s&&Ht("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new S1(t,Y1,n,r),i[t.toURLString()]=s,s}class J1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ht("Cannot call "+e+" on a deleted database.")}}function ar(t=Ay(),e){const n=xy(t,"database").getImmediate({identifier:e}),r=bv("database");return r&&Z1(n,...r),n}function Z1(t,e,n,r={}){t=Tr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ht("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ht('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ir(ir.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ev(r.mockUserToken,t.app.options.projectId);s=new ir(o)}G1(i,e,n,s)}/**
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
 */function ew(t){Hy(Ty),_s(new ui("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return q1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),nr(ou,au,t),nr(ou,au,"esm2017")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ew();const tw=t=>(_n("data-v-af5d60f5"),t=t(),vn(),t),nw={class:"wrapper"},rw=tw(()=>E("h3",null,"\u5E7B\u5922\u82F1\u9748\u6BBF",-1)),iw={__name:"App",setup(t){const n=sl({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"});ar(n),Ps(ar());const r=ar(),i=yn();function s(a){i.user.account!==""?V1(Ps(r,"Users/"+a),{havercard:i.user.havecard,remainCard:i.user.remainCard,team:i.user.team,Profile:{img:i.Profile.img},ProfileCover:{img:i.ProfileCover.img},SummonPoints:i.SummonPoints,AwakePoints:i.AwakePoints,drama:i.drama,pvp:i.pvp,win:i.win,lose:i.lose}).then(()=>{editOK.value=!0,getdata()}).catch(l=>{}):alert("\u4F60\u6C92\u6709\u767B\u5165")}kt(i,()=>{s(i.user.account),console.log("\u88AB\u6539\u8B8A\u4E86")});const o=Cd();return(a,l)=>(nt(),rt(tt,null,[E("header",null,[E("div",nw,[rw,E("button",{onClick:l[0]||(l[0]=c=>X(o).replace({path:"/"})),class:ke({display_none:X(i).user.account!==""})},"\u8FD4\u56DE\u767B\u5165\u756B\u9762",2)])]),le(X(nl)),le(av)],64))}},sw=St(iw,[["__scopeId","data-v-af5d60f5"]]),ow="modulepreload",aw=function(t){return"/Vue3-Vite-Game/"+t},$u={},Xr=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=aw(s),s in $u)return;$u[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ow,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},lw="/Vue3-Vite-Game/assets/pexels-philippe-donn-1169754.27b5d31a.jpg",cw="/Vue3-Vite-Game/assets/c021_C.c44b21d1.png",uw="/Vue3-Vite-Game/assets/c022_C.66d848ff.png",fw="/Vue3-Vite-Game/assets/c035_C.dd219eda.png",dw="/Vue3-Vite-Game/assets/c037_C.a5d1deb4.png",hw="/Vue3-Vite-Game/assets/c079_C.c53674f7.png";const pw=t=>(_n("data-v-a921cada"),t=t(),vn(),t),mw=id('<div class="chat-box" data-v-a921cada><div class="chat-img" data-v-a921cada><img src="'+cw+'" alt="" data-v-a921cada></div><div class="chat-font" data-v-a921cada><span data-v-a921cada>\u73A9\u5BB6\u540D\u5B50\u5C31\u516B\u500B\u5B57\uFF1A</span><p class="chat-time" data-v-a921cada>2022/11/1 -23:12-</p><p class="chat-text" data-v-a921cada>\u8F9B\u5C3C\u52A0\u8B1B\u904E\uFF0C\u6211\u5011\u7684\u5EA7\u53F3\u9298\uFF0C\u773E\u6240\u5468\u77E5\u662F\u670D\u5F9E\u81EA\u7136\u751F\u6D3B</p></div></div><div class="chat-box" data-v-a921cada><div class="chat-img" data-v-a921cada><img src="'+uw+'" alt="" data-v-a921cada></div><div class="chat-font" data-v-a921cada><span data-v-a921cada>\u8D85\u7D1A\u65B0\u624B\uFF1A</span><p class="chat-time" data-v-a921cada>2022/11/1 -22:44-</p><p class="chat-text" data-v-a921cada>\u5728\u4EBA\u751F\u7684\u6B77\u7A0B\u4E2D\uFF0C\u904A\u6232\u7684\u51FA\u73FE\u662F\u5FC5\u7136\u7684\u3002\u904A\u6232\u7684\u767C\u751F\uFF0C\u5230\u5E95\u9700\u8981\u5982\u4F55\u5BE6\u73FE</p></div></div><div class="chat-box" data-v-a921cada><div class="chat-img" data-v-a921cada><img src="'+fw+'" alt="" data-v-a921cada></div><div class="chat-font" data-v-a921cada><span data-v-a921cada>\u5C0F\u8AB2\u9577\uFF1A</span><p class="chat-time" data-v-a921cada>2022/11/1 -22:30-</p><p class="chat-text" data-v-a921cada>\u6C92\u9322\u4E86QQ</p></div></div><div class="chat-box" data-v-a921cada><div class="chat-img" data-v-a921cada><img src="'+dw+'" alt="" data-v-a921cada></div><div class="chat-font" data-v-a921cada><span data-v-a921cada>KillKing\uFF1A</span><p class="chat-time" data-v-a921cada>2022/11/1 -21:54-</p><p class="chat-text" data-v-a921cada>\u6211\u5011\u8981\u5F9E\u672C\u8CEA\u601D\u8003\uFF0C\u5F9E\u6839\u672C\u89E3\u6C7A\u554F\u984C</p></div></div><div class="chat-box" data-v-a921cada><div class="chat-img" data-v-a921cada><img src="'+hw+'" alt="" data-v-a921cada></div><div class="chat-font" data-v-a921cada><span data-v-a921cada>Low\u7537\uFF1A</span><p class="chat-time" data-v-a921cada>2022/11/1 -21:12-</p><p class="chat-text" data-v-a921cada>Low...</p></div></div>',5),gw=[mw],_w=pw(()=>E("div",{class:"chat-input"},[E("input",{type:"text"}),E("button",null,"\u9001\u51FA")],-1)),vw={__name:"Chat",setup(t){const e=yn();return(n,r)=>(nt(),rt(tt,null,[E("button",{class:"chat-open",onClick:r[0]||(r[0]=i=>X(e).chatopen=!X(e).chatopen)},"\u5C55\u958B\u804A\u5929\u7A97"),E("div",{class:ke(["chat-home",{display_none:!X(e).chatopen},{chat_open_anm:X(e).chatopen}])},gw,2),_w],64))}},yw=St(vw,[["__scopeId","data-v-a921cada"]]);const bw={class:"player-home"},ww={class:"player-img"},Ew=["src"],Cw={class:"profile-box"},kw={class:"profile-lv"},xw={class:"profile-data"},Iw={__name:"PlayerProfile",setup(t){const e=yn(),n=ne(`./imgage/character/c${e.Profile.img}_C.png`);return kt(e.Profile,()=>{n.value=`./imgage/character/c${e.Profile.img}_C.png`}),(r,i)=>(nt(),rt("div",bw,[E("div",ww,[E("img",{src:n.value,alt:""},null,8,Ew)]),E("div",Cw,[E("div",kw,[E("span",null,je(X(e).user.account),1),E("p",null,"\u53EC\u559A\u9EDE\u6578\uFF1A"+je(X(e).SummonPoints),1),E("p",null,"\u89BA\u9192\u9EDE\u6578\uFF1A"+je(X(e).AwakePoints),1)]),E("div",xw,"\u5C0D\u6230\uFF1A"+je(X(e).pvp)+"\u5834 - \u52DD\u5229\uFF1A"+je(X(e).win)+"\u5834 - \u5931\u6557\uFF1A"+je(X(e).lose)+"\u5834\uFF0C\u5361\u724C\u6301\u6709\uFF1A"+je(X(e).user.havecard.length)+"\u5F35",1)])]))}},Sw=St(Iw,[["__scopeId","data-v-cf5c4cb3"]]);const Tw={},Aw=t=>(_n("data-v-6b231dfb"),t=t(),vn(),t),Pw={id:"advertisehome"},Rw=Aw(()=>E("div",{class:"img-box"}," \u9810\u7559\u5340\u584A ",-1)),Nw=[Rw];function Ow(t,e){return nt(),rt("div",Pw,Nw)}const Dw=St(Tw,[["render",Ow],["__scopeId","data-v-6b231dfb"]]);const Gh=t=>(_n("data-v-bf2a5e94"),t=t(),vn(),t),Mw={id:"home"},Lw=Gh(()=>E("img",{class:"background-img",src:lw,alt:""},null,-1)),Fw={class:"spech-img"},$w=["src"],Uw=Gh(()=>E("div",{class:"character-text"},[E("h2",null,"\u9019\u88E1\u53EA\u6709\u6211\u5011\u5169\u500B\u4E86...")],-1)),Bw={class:"Go"},Hw={class:"view"},jw={class:"player"},Ww={class:"chat"},zw={class:"advertise"},Vw={__name:"Home",setup(t){const e=yn(),n=ne(`./imgage/character/c${e.ProfileCover.img}_D.png`);return kt(e.ProfileCover,()=>{n.value=`./imgage/character/c${e.ProfileCover.img}_D.png`}),(r,i)=>(nt(),rt("div",null,[E("div",Mw,[Lw,E("div",Fw,[E("img",{src:n.value,alt:""},null,8,$w)]),Uw,E("div",Bw,[E("div",Hw,[le(X(nl))]),E("nav",null,[le(X(ct),{to:"/Home"},{default:at(()=>[lt("\u96B1\u85CF")]),_:1}),le(X(ct),{to:"/Pack"},{default:at(()=>[lt("\u82F1\u9748")]),_:1}),le(X(ct),{to:"/Summon"},{default:at(()=>[lt("\u53EC\u559A")]),_:1}),le(X(ct),{to:"/Home/character"},{default:at(()=>[lt("\u968A\u4F0D")]),_:1}),le(X(ct),{to:"/Home/Info"},{default:at(()=>[lt("\u8AAA\u660E")]),_:1}),le(X(ct),{to:"/Home/Info"},{default:at(()=>[lt("\u73A9\u5BB6\u5C0D\u6230")]),_:1}),le(X(ct),{to:"/Home/Info"},{default:at(()=>[lt("\u96FB\u8166\u5C0D\u6230")]),_:1}),le(X(ct),{to:"/Dialogue"},{default:at(()=>[lt("\u5287\u60C5")]),_:1})])]),E("div",jw,[le(Sw)]),E("div",Ww,[le(yw)]),E("div",zw,[le(Dw)])])]))}},Kw=St(Vw,[["__scopeId","data-v-bf2a5e94"]]),Yw=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};const Gw=t=>(_n("data-v-651e25e5"),t=t(),vn(),t),qw={id:"speech"},Qw={class:"home-router"},Xw=["src"],Jw={class:"spech-img"},Zw=["src"],eE={class:"speech-box"},tE={class:"speech-name"},nE=Gw(()=>E("div",{class:"load"},[E("div",{style:{color:"#9784ed"},class:"la-ball-pulse"},[E("div"),E("div"),E("div")])],-1)),rE={__name:"Dialogue",setup(t){const e=yn(),n=ne(1),r=ne([]),i=ne(`${e.drama}`);kt(e,()=>{i.value=e.drama,s()});function s(){Yw(Object.assign({"./Dialogue/a001_01.js":()=>Xr(()=>import("./a001_01.d7e040ac.js"),[]),"./Dialogue/a002_01.js":()=>Xr(()=>import("./a002_01.62dcd319.js"),[])}),`./Dialogue/${i.value}.js`).then(u=>{r.value=u.default,c(r.value)})}function o(){n.value<r.value.length&&(n.value++,c(r.value))}function a(){n.value>1&&(n.value--,c(r.value))}const l=ne({});function c(u){for(let f=0;f<u.length;f++)u[f].page==n.value&&(l.value=u[f])}return Gf(()=>{s()}),kt(l,()=>{l.value.fun!==void 0&&(l.value.fun(),s())}),(u,f)=>(nt(),rt("div",null,[E("div",qw,[E("div",Qw,[le(X(ct),{to:"/Home"},{default:at(()=>[lt("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),E("img",{class:"background-img",src:l.value.background,alt:""},null,8,Xw),E("div",Jw,[E("img",{src:l.value.img,alt:"",class:ke(l.value.eff)},null,10,Zw)]),E("div",eE,[E("div",tE,[E("h3",null,je(l.value.name),1)]),E("div",{class:"speech-text",onClick:f[0]||(f[0]=d=>o()),onContextmenu:f[1]||(f[1]=jg(d=>a(),["right"]))},[E("p",{class:ke(l.value.font)},je(l.value.text),3),nE],32)])])]))}},iE=St(rE,[["__scopeId","data-v-651e25e5"]]);const qh=t=>(_n("data-v-2bbe8b65"),t=t(),vn(),t),sE=qh(()=>E("h1",{class:"green"},"\u653B\u64CA\u50B7\u5BB3\u8A08\u7B97",-1)),oE=qh(()=>E("div",{class:"greetings"},[E("h3",null," \u9019\u88E1\u6703\u5C55\u793A\u50B7\u5BB3\u8A08\u7B97\u8996\u7A97 ")],-1)),aE={__name:"Attack",props:{},setup(t){return(e,n)=>(nt(),rt(tt,null,[sE,oE],64))}},lE=St(aE,[["__scopeId","data-v-2bbe8b65"]]),cE="/Vue3-Vite-Game/assets/PngtreeTechnolo_939240.febec1c5.jpg";const Qh=t=>(_n("data-v-bb1e00b3"),t=t(),vn(),t),uE={id:"Summon"},fE={class:"home-router"},dE=Qh(()=>E("img",{class:"background-img",src:cE,alt:""},null,-1)),hE={class:"remain"},pE=Qh(()=>E("div",{class:"load"},[E("div",{class:"la-cog la-dark la-2x"},[E("div")])],-1)),mE=["src"],gE={__name:"Summon",setup(t){const e=yn(),n=ne(!1),r=ne(e.user.havecard),i=ne(e.user.remainCard),s=ne(e.SummonPoints),o=ne(""),a=ne(0);function l(){s.value===0?alert("\u53EC\u559A\u9EDE\u6578\u4E0D\u8DB3"):(n.value=!n.value,s.value--,e.SummonPoints=s.value,a.value=Math.floor(Math.random()*i.value.length),r.value.unshift(i.value[a.value]),e.user.havecard=r.value,o.value=`./imgage/character/c${i.value[a.value]}_A.png`,i.value.splice(a.value,1),e.user.remainCard=i.value)}return(c,u)=>(nt(),rt("div",uE,[E("div",fE,[le(X(ct),{to:"/Home"},{default:at(()=>[lt("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),dE,E("div",hE,[E("p",null,"\u5DF2\u64C1\u6709\u82F1\u9748\uFF1A"+je(r.value.length),1),E("p",null,"\u672A\u7372\u5F97\u82F1\u9748\uFF1A"+je(i.value.length),1)]),E("div",{class:ke(["summon-btn",{display_none:n.value}])},[E("p",null,"\u53EC\u559A\u9EDE\u6578\uFF1A"+je(s.value),1),E("button",{onClick:u[0]||(u[0]=f=>l())},"\u53EC\u559A")],2),E("div",{class:ke(["summon_start display_none",{start_summon:n.value}])},[pE,E("div",{class:ke(["summon-img",{SummoAnm:n.value}])},[E("img",{src:o.value,alt:""},null,8,mE)],2),E("button",{onClick:u[1]||(u[1]=f=>n.value=!n.value)},"\u78BA\u5B9A")],2)]))}},_E=St(gE,[["__scopeId","data-v-bb1e00b3"]]);const vE={id:"Pack"},yE={class:"home-router"},bE={class:"awake"},wE={class:"awake-p"},EE={class:"pack-home"},CE={class:"pack-trait"},kE={class:"pack-boxhome"},xE={class:"pack-boxtop"},IE={class:"pack-img"},SE=["src"],TE={class:"pack-hidden"},AE={class:"pack-data"},PE={class:"pack-button"},RE=["onClick"],NE=["onClick"],OE=["onClick"],DE={__name:"Pack",setup(t){const e=yn(),n=ne(e.user.havecard),r=ne([]);function i(){let g=[];for(let _=0;_<n.value.length;_++)for(let b=0;b<Kr.length;b++)n.value[_]==Kr[b].number&&(g.push(Kr[b]),r.value=g)}i();const s=ne([]);function o(){let g=[];for(let _=0;_<n.value.length;_++)g.push(`./imgage/character/c${n.value[_]}_A.png`),s.value=g}o();const a=ne("all"),l=ne(null),c=ne(e.AwakePoints);function u(g){if(c.value===0)alert("\u53EC\u559A\u9EDE\u6578\u4E0D\u8DB3");else if(f(g.number))alert("\u5DF2\u7D93\u64C1\u6709\u89BA\u9192");else{const _=(Number(g.number)+1).toString();let b="";_.length==1?b="00"+_:_.length==2?b="0"+_:b=_,c.value--,e.AwakePoints=c.value,n.value.unshift(b),e.user.havecard=n.value,i(),o()}}function f(g){const _=(Number(g)+1).toString();let b="";_.length==1?b="00"+_:_.length==2?b="0"+_:b=_;for(let v=0;v<n.value.length;v++)if(b==n.value[v])return!0;return!1}function d(g){e.ProfileCover.img=g}function p(g){e.Profile.img=g}return(g,_)=>(nt(),rt("div",vE,[E("div",yE,[le(X(ct),{to:"/Home"},{default:at(()=>[lt("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),E("div",bE,[E("button",{onClick:_[0]||(_[0]=b=>l.value=null),class:ke({now_botton:l.value==null})},"\u986F\u793A\u5168\u90E8",2),E("button",{onClick:_[1]||(_[1]=b=>l.value=!0),class:ke({now_botton:l.value==!0})},"\u986F\u793A\u89BA\u9192",2),E("button",{onClick:_[2]||(_[2]=b=>l.value=!1),class:ke({now_botton:l.value==!1})},"\u986F\u793A\u89BA\u9192\u524D",2),E("div",wE,[E("p",null,"\u89BA\u9192\u9EDE\u6578\uFF1A"+je(X(e).AwakePoints),1)])]),E("div",EE,[E("div",CE,[E("button",{onClick:_[3]||(_[3]=b=>a.value="all"),class:ke({now_botton:a.value=="all"})},"\u5168\u90E8\u5C6C\u6027",2),E("button",{onClick:_[4]||(_[4]=b=>a.value="\u548C\u8AE7"),class:ke({now_botton:a.value=="\u548C\u8AE7"})},"\u548C\u8AE7",2),E("button",{onClick:_[5]||(_[5]=b=>a.value="\u5FAA\u74B0"),class:ke({now_botton:a.value=="\u5FAA\u74B0"})},"\u5FAA\u74B0",2),E("button",{onClick:_[6]||(_[6]=b=>a.value="\u52D5\u76EA"),class:ke({now_botton:a.value=="\u52D5\u76EA"})},"\u52D5\u76EA",2),E("button",{onClick:_[7]||(_[7]=b=>a.value="\u6BC0\u6EC5"),class:ke({now_botton:a.value=="\u6BC0\u6EC5"})},"\u6BC0\u6EC5",2)]),E("div",kE,[E("div",xE,[(nt(!0),rt(tt,null,Vm(r.value,(b,v)=>(nt(),rt("div",{class:ke(["pack-box",{display_none:a.value!==b.trait&&a.value!=="all"},{display_none:l.value!==b.awake&&l.value!==null}])},[E("div",IE,[E("img",{src:s.value[v],alt:""},null,8,SE)]),E("div",TE,[E("div",AE,[E("p",null,"\u6230\u529B\uFF1A"+je(b.attack),1),E("p",null,"\u5C6C\u6027\uFF1A"+je(b.trait),1)]),E("div",PE,[E("button",{onClick:k=>u(b),class:ke({display_none:b.awake==!0})},"\u89BA\u9192",10,RE),E("button",{onClick:k=>p(b.number)},"\u8A2D\u70BA\u4EE3\u8868",8,NE),E("button",{onClick:k=>d(b.number)},"\u8A2D\u70BA\u5C01\u9762",8,OE)])])],2))),256))])])])]))}},ME=St(DE,[["__scopeId","data-v-76055567"]]),LE="/Vue3-Vite-Game/assets/pexels-pixabay-268533.074f5772.jpg";const ao=t=>(_n("data-v-379e314a"),t=t(),vn(),t),FE={id:"Register"},$E=ao(()=>E("img",{class:"background-img",src:LE,alt:""},null,-1)),UE={class:"login-home"},BE={class:"login-home"},HE=ao(()=>E("h3",null,"\u767B\u5165",-1)),jE={class:"acc"},WE=ao(()=>E("p",null,"\u5E33\u865F\uFF1A",-1)),zE={class:"pas"},VE=ao(()=>E("p",null,"\u5BC6\u78BC\uFF1A",-1)),KE={class:"login-button"},YE={__name:"Register",setup(t){const n=sl({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"});ar(n);const r=Ps(ar()),i=ar(),s=yn();function o(p){No(or(r,`Users/${p}`)).then(g=>{g.exists()?(s.user.account=p,s.user.havecard=g.val().havercard,s.user.remainCard=g.val().remainCard,s.user.team=g.val().team,s.Profile.img=g.val().Profile.img,s.ProfileCover.img=g.val().ProfileCover.img,s.SummonPoints=g.val().SummonPoints,s.AwakePoints=g.val().AwakePoints,s.drama=g.val().drama,s.pvp=g.val().pvp,s.win=g.val().win,s.lose=g.val().lose):console.log("\u6C92\u6709\u8CC7\u6599")}).catch(g=>{console.error(g)})}const a=Cd(),l=ne(""),c=ne("");function u(){l.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):No(or(r,"Users/"+l.value)).then(p=>{p.val()===null?alert("\u67E5\u7121\u6B64\u5E33\u6236"):p.val().password===c.value?(o(l.value),alert("\u767B\u5165\u6210\u529F"),a.replace({path:"/Home"})):alert("\u5BC6\u78BC\u932F\u8AA4")}).catch(p=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}function f(){const p=Kr.filter(b=>b.awake==!1),g=[];let _=[];for(let b=0;b<p.length;b++)g.push(p[b].number);return _=g.filter(b=>b!=="001"&&b!=="003"&&b!=="017"&&b!=="019"&&b!=="021"),_}function d(){l.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):No(or(r,"Users/"+l.value)).then(p=>{p.val()===null?(z1(Ps(i,`Users/${l.value}`),{havercard:["001","003","017","019","021"],remainCard:f(),team:["001","003","017","019","021"],Profile:{img:"003"},ProfileCover:{img:"021"},SummonPoints:10,AwakePoints:5,drama:"a001_01",pvp:0,win:0,lose:0,password:c.value}),alert("\u8A3B\u518A\u5B8C\u6210"),u()):alert("\u5DF2\u6709\u6B64\u5E33\u865F")}).catch(p=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}return(p,g)=>(nt(),rt("div",FE,[$E,E("div",{class:ke(["login",{display_none:X(s).user.account==""}])},[E("div",UE,[E("h3",null,"\u4F60\u767B\u5165\uFF0C\u73A9\u5BB6\u540D\u7A31\uFF1A"+je(X(s).user.account),1),E("button",{onClick:g[0]||(g[0]=_=>X(a).replace({path:"/Home"}))},"\u9EDE\u64CA\u8FD4\u56DE\u6BBF\u5802")])],2),E("div",{class:ke(["login",{display_none:X(s).user.account!==""}])},[E("div",BE,[HE,E("div",jE,[WE,pc(E("input",{type:"text",placeholder:"\u5E33\u865F",name:"",id:"aa","onUpdate:modelValue":g[1]||(g[1]=_=>l.value=_)},null,512),[[Nc,l.value,void 0,{lazy:!0}]])]),E("div",zE,[VE,pc(E("input",{type:"password",placeholder:"\u5BC6\u78BC",name:"",id:"bb","onUpdate:modelValue":g[2]||(g[2]=_=>c.value=_)},null,512),[[Nc,c.value,void 0,{lazy:!0}]])]),E("div",KE,[E("button",{onClick:g[3]||(g[3]=_=>d())},"\u8A3B\u518A"),E("button",{onClick:g[4]||(g[4]=_=>u())},"\u767B\u5165")])])],2)]))}},GE=St(YE,[["__scopeId","data-v-379e314a"]]),qE=ev({history:v_("/Vue3-Vite-Game/"),routes:[{path:"/",name:"initial",component:GE},{path:"/Home",name:"home",component:Kw,children:[{path:"character",name:"character",component:()=>Xr(()=>import("./character.ffd680ac.js"),["assets/character.ffd680ac.js","assets/character.75cb6d40.css"])},{path:"Info",name:"Info",component:()=>Xr(()=>import("./Info.14918084.js"),["assets/Info.14918084.js","assets/Info.f6be1269.css"])}]},{path:"/Dialogue",name:"Dialogue",component:iE},{path:"/Summon",name:"Summon",component:_E},{path:"/Pack",name:"Pack",component:ME},{path:"/Attack",name:"Attack",component:lE},{path:"/:404(.*)*",name:"404",component:()=>Xr(()=>import("./404.979e0ccd.js"),[])}]});function Uu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Uu(Object(n),!0).forEach(function(r){Oe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Uu(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Rs(t){return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rs(t)}function QE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function XE(t,e,n){return e&&Bu(t.prototype,e),n&&Bu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bl(t,e){return ZE(t)||tC(t,e)||Xh(t,e)||rC()}function Di(t){return JE(t)||eC(t)||Xh(t)||nC()}function JE(t){if(Array.isArray(t))return wa(t)}function ZE(t){if(Array.isArray(t))return t}function eC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tC(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function Xh(t,e){if(!!t){if(typeof t=="string")return wa(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wa(t,e)}}function wa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function nC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Hu=function(){},Hl={},Jh={},Zh=null,ep={mark:Hu,measure:Hu};try{typeof window<"u"&&(Hl=window),typeof document<"u"&&(Jh=document),typeof MutationObserver<"u"&&(Zh=MutationObserver),typeof performance<"u"&&(ep=performance)}catch{}var iC=Hl.navigator||{},ju=iC.userAgent,Wu=ju===void 0?"":ju,pn=Hl,ye=Jh,zu=Zh,Vi=ep;pn.document;var Yt=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",tp=~Wu.indexOf("MSIE")||~Wu.indexOf("Trident/"),Ki,Yi,Gi,qi,Qi,jt="___FONT_AWESOME___",Ea=16,np="fa",rp="svg-inline--fa",Un="data-fa-i2svg",Ca="data-fa-pseudo-element",sC="data-fa-pseudo-element-pending",jl="data-prefix",Wl="data-icon",Vu="fontawesome-i2svg",oC="async",aC=["HTML","HEAD","STYLE","SCRIPT"],ip=function(){try{return!0}catch{return!1}}(),ve="classic",xe="sharp",zl=[ve,xe];function Mi(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var bi=Mi((Ki={},Oe(Ki,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Oe(Ki,xe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ki)),wi=Mi((Yi={},Oe(Yi,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(Yi,xe,{solid:"fass"}),Yi)),Ei=Mi((Gi={},Oe(Gi,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(Gi,xe,{fass:"fa-solid"}),Gi)),lC=Mi((qi={},Oe(qi,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(qi,xe,{"fa-solid":"fass"}),qi)),cC=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,sp="fa-layers-text",uC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fC=Mi((Qi={},Oe(Qi,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(Qi,xe,{900:"fass"}),Qi)),op=[1,2,3,4,5,6,7,8,9,10],dC=op.concat([11,12,13,14,15,16,17,18,19,20]),hC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ci=new Set;Object.keys(wi[ve]).map(Ci.add.bind(Ci));Object.keys(wi[xe]).map(Ci.add.bind(Ci));var pC=[].concat(zl,Di(Ci),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pn.GROUP,Pn.SWAP_OPACITY,Pn.PRIMARY,Pn.SECONDARY]).concat(op.map(function(t){return"".concat(t,"x")})).concat(dC.map(function(t){return"w-".concat(t)})),Jr=pn.FontAwesomeConfig||{};function mC(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function gC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ye&&typeof ye.querySelector=="function"){var _C=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_C.forEach(function(t){var e=Bl(t,2),n=e[0],r=e[1],i=gC(mC(n));i!=null&&(Jr[r]=i)})}var ap={styleDefault:"solid",familyDefault:"classic",cssPrefix:np,replacementClass:rp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jr.familyPrefix&&(Jr.cssPrefix=Jr.familyPrefix);var Er=D(D({},ap),Jr);Er.autoReplaceSvg||(Er.observeMutations=!1);var F={};Object.keys(ap).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(n){Er[t]=n,Zr.forEach(function(r){return r(F)})},get:function(){return Er[t]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){Er.cssPrefix=e,Zr.forEach(function(n){return n(F)})},get:function(){return Er.cssPrefix}});pn.FontAwesomeConfig=F;var Zr=[];function vC(t){return Zr.push(t),function(){Zr.splice(Zr.indexOf(t),1)}}var Xt=Ea,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yC(t){if(!(!t||!Yt)){var e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ye.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}}var bC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ki(){for(var t=12,e="";t-- >0;)e+=bC[Math.random()*62|0];return e}function Nr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vl(t){return t.classList?Nr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function lp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wC(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(lp(t[n]),'" ')},"").trim()}function lo(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Kl(t){return t.size!==Ot.size||t.x!==Ot.x||t.y!==Ot.y||t.rotate!==Ot.rotate||t.flipX||t.flipY}function EC(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function CC(t){var e=t.transform,n=t.width,r=n===void 0?Ea:n,i=t.height,s=i===void 0?Ea:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&tp?l+="translate(".concat(e.x/Xt-r/2,"em, ").concat(e.y/Xt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Xt,"em), calc(-50% + ").concat(e.y/Xt,"em)) "):l+="translate(".concat(e.x/Xt,"em, ").concat(e.y/Xt,"em) "),l+="scale(".concat(e.size/Xt*(e.flipX?-1:1),", ").concat(e.size/Xt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var kC=`:root, :host {
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
}`;function cp(){var t=np,e=rp,n=F.cssPrefix,r=F.replacementClass,i=kC;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ku=!1;function Oo(){F.autoAddCss&&!Ku&&(yC(cp()),Ku=!0)}var xC={mixout:function(){return{dom:{css:cp,insertCss:Oo}}},hooks:function(){return{beforeDOMElementCreation:function(){Oo()},beforeI2svg:function(){Oo()}}}},Wt=pn||{};Wt[jt]||(Wt[jt]={});Wt[jt].styles||(Wt[jt].styles={});Wt[jt].hooks||(Wt[jt].hooks={});Wt[jt].shims||(Wt[jt].shims=[]);var wt=Wt[jt],up=[],IC=function t(){ye.removeEventListener("DOMContentLoaded",t),Ns=1,up.map(function(e){return e()})},Ns=!1;Yt&&(Ns=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),Ns||ye.addEventListener("DOMContentLoaded",IC));function SC(t){!Yt||(Ns?setTimeout(t,0):up.push(t))}function Li(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?lp(t):"<".concat(e," ").concat(wC(r),">").concat(s.map(Li).join(""),"</").concat(e,">")}function Yu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var TC=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Do=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?TC(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function AC(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ka(t){var e=AC(t);return e.length===1?e[0].toString(16):null}function PC(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Gu(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function xa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Gu(e);typeof wt.hooks.addPack=="function"&&!i?wt.hooks.addPack(t,Gu(e)):wt.styles[t]=D(D({},wt.styles[t]||{}),s),t==="fas"&&xa("fa",e)}var Xi,Ji,Zi,Xn=wt.styles,RC=wt.shims,NC=(Xi={},Oe(Xi,ve,Object.values(Ei[ve])),Oe(Xi,xe,Object.values(Ei[xe])),Xi),Yl=null,fp={},dp={},hp={},pp={},mp={},OC=(Ji={},Oe(Ji,ve,Object.keys(bi[ve])),Oe(Ji,xe,Object.keys(bi[xe])),Ji);function DC(t){return~pC.indexOf(t)}function MC(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!DC(i)?i:null}var gp=function(){var e=function(s){return Do(Xn,function(o,a,l){return o[l]=Do(a,s,{}),o},{})};fp=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),dp=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),mp=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Xn||F.autoFetchSvg,r=Do(RC,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});hp=r.names,pp=r.unicodes,Yl=co(F.styleDefault,{family:F.familyDefault})};vC(function(t){Yl=co(t.styleDefault,{family:F.familyDefault})});gp();function Gl(t,e){return(fp[t]||{})[e]}function LC(t,e){return(dp[t]||{})[e]}function Rn(t,e){return(mp[t]||{})[e]}function _p(t){return hp[t]||{prefix:null,iconName:null}}function FC(t){var e=pp[t],n=Gl("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mn(){return Yl}var ql=function(){return{prefix:null,iconName:null,rest:[]}};function co(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=bi[r][t],s=wi[r][t]||wi[r][i],o=t in wt.styles?t:null;return s||o||null}var qu=(Zi={},Oe(Zi,ve,Object.keys(Ei[ve])),Oe(Zi,xe,Object.keys(Ei[xe])),Zi);function uo(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Oe(e,ve,"".concat(F.cssPrefix,"-").concat(ve)),Oe(e,xe,"".concat(F.cssPrefix,"-").concat(xe)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(c){return qu[ve].includes(c)}))&&(a=ve),(t.includes(s[xe])||t.some(function(c){return qu[xe].includes(c)}))&&(a=xe);var l=t.reduce(function(c,u){var f=MC(F.cssPrefix,u);if(Xn[u]?(u=NC[a].includes(u)?lC[a][u]:u,o=u,c.prefix=u):OC[a].indexOf(u)>-1?(o=u,c.prefix=co(u,{family:a})):f?c.iconName=f:u!==F.replacementClass&&u!==s[ve]&&u!==s[xe]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var d=o==="fa"?_p(c.iconName):{},p=Rn(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Xn.far&&Xn.fas&&!F.autoFetchSvg&&(c.prefix="fas")}return c},ql());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===xe&&(Xn.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Rn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mn()||"fas"),l}var $C=function(){function t(){QE(this,t),this.definitions={}}return XE(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),xa(a,o[a]);var l=Ei[ve][a];l&&xa(l,o[a]),gp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),Qu=[],Jn={},lr={},UC=Object.keys(lr);function BC(t,e){var n=e.mixoutsTo;return Qu=t,Jn={},Object.keys(lr).forEach(function(r){UC.indexOf(r)===-1&&delete lr[r]}),Qu.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Rs(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Jn[o]||(Jn[o]=[]),Jn[o].push(s[o])})}r.provides&&r.provides(lr)}),n}function Ia(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Jn[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Bn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Jn[t]||[];i.forEach(function(s){s.apply(null,n)})}function zt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return lr[t]?lr[t].apply(null,e):void 0}function Sa(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||mn();if(!!e)return e=Rn(n,e)||e,Yu(vp.definitions,n,e)||Yu(wt.styles,n,e)}var vp=new $C,HC=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Bn("noAuto")},jC={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yt?(Bn("beforeI2svg",e),zt("pseudoElements2svg",e),zt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,SC(function(){zC({autoReplaceSvgRoot:n}),Bn("watch",e)})}},WC={icon:function(e){if(e===null)return null;if(Rs(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Rn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=co(e[0]);return{prefix:r,iconName:Rn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(F.cssPrefix,"-"))>-1||e.match(cC))){var i=uo(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||mn(),iconName:Rn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=mn();return{prefix:s,iconName:Rn(s,e)||e}}}},st={noAuto:HC,config:F,dom:jC,parse:WC,library:vp,findIconDefinition:Sa,toHtml:Li},zC=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ye:n;(Object.keys(wt.styles).length>0||F.autoFetchSvg)&&Yt&&F.autoReplaceSvg&&st.dom.i2svg({node:r})};function fo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Li(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Yt){var r=ye.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function VC(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Kl(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=lo(D(D({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function KC(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(F.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function Ql(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,g=r.found?r:n,_=g.width,b=g.height,v=i==="fak",k=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(be){return f.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(f.classes).join(" "),M={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(b)})},H=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/b*16*.0625,"em")}:{};p&&(M.attributes[Un]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||ki())},children:[l]}),delete M.attributes.title);var W=D(D({},M),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:D(D({},H),f.styles)}),oe=r.found&&n.found?zt("generateAbstractMask",W)||{children:[],attributes:{}}:zt("generateAbstractIcon",W)||{children:[],attributes:{}},z=oe.children,Q=oe.attributes;return W.children=z,W.attributes=Q,a?KC(W):VC(W)}function Xu(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Un]="");var u=D({},o.styles);Kl(i)&&(u.transform=CC({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=lo(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function YC(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=lo(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mo=wt.styles;function Ta(t){var e=t[0],n=t[1],r=t.slice(4),i=Bl(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Pn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Pn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Pn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var GC={found:!1,width:512,height:512};function qC(t,e){!ip&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Aa(t,e){var n=e;return e==="fa"&&F.styleDefault!==null&&(e=mn()),new Promise(function(r,i){if(zt("missingIconAbstract"),n==="fa"){var s=_p(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mo[e]&&Mo[e][t]){var o=Mo[e][t];return r(Ta(o))}qC(t,e),r(D(D({},GC),{},{icon:F.showMissingIcons&&t?zt("missingIconAbstract")||{}:{}}))})}var Ju=function(){},Pa=F.measurePerformance&&Vi&&Vi.mark&&Vi.measure?Vi:{mark:Ju,measure:Ju},Hr='FA "6.2.0"',QC=function(e){return Pa.mark("".concat(Hr," ").concat(e," begins")),function(){return yp(e)}},yp=function(e){Pa.mark("".concat(Hr," ").concat(e," ends")),Pa.measure("".concat(Hr," ").concat(e),"".concat(Hr," ").concat(e," begins"),"".concat(Hr," ").concat(e," ends"))},Xl={begin:QC,end:yp},os=function(){};function Zu(t){var e=t.getAttribute?t.getAttribute(Un):null;return typeof e=="string"}function XC(t){var e=t.getAttribute?t.getAttribute(jl):null,n=t.getAttribute?t.getAttribute(Wl):null;return e&&n}function JC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function ZC(){if(F.autoReplaceSvg===!0)return as.replace;var t=as[F.autoReplaceSvg];return t||as.replace}function ek(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function tk(t){return ye.createElement(t)}function bp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ek:tk:n;if(typeof t=="string")return ye.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(bp(o,{ceFn:r}))}),i}function nk(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var as={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(bp(i),n)}),n.getAttribute(Un)===null&&F.keepOriginalSource){var r=ye.createComment(nk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vl(n).indexOf(F.replacementClass))return as.replace(e);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===F.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Li(a)}).join(`
`);n.setAttribute(Un,""),n.innerHTML=o}};function ef(t){t()}function wp(t,e){var n=typeof e=="function"?e:os;if(t.length===0)n();else{var r=ef;F.mutateApproach===oC&&(r=pn.requestAnimationFrame||ef),r(function(){var i=ZC(),s=Xl.begin("mutate");t.map(i),s(),n()})}}var Jl=!1;function Ep(){Jl=!0}function Ra(){Jl=!1}var Os=null;function tf(t){if(!!zu&&!!F.observeMutations){var e=t.treeCallback,n=e===void 0?os:e,r=t.nodeCallback,i=r===void 0?os:r,s=t.pseudoElementsCallback,o=s===void 0?os:s,a=t.observeMutationsRoot,l=a===void 0?ye:a;Os=new zu(function(c){if(!Jl){var u=mn();Nr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Zu(f.addedNodes[0])&&(F.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Zu(f.target)&&~hC.indexOf(f.attributeName))if(f.attributeName==="class"&&XC(f.target)){var d=uo(Vl(f.target)),p=d.prefix,g=d.iconName;f.target.setAttribute(jl,p||u),g&&f.target.setAttribute(Wl,g)}else JC(f.target)&&i(f.target)})}}),Yt&&Os.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rk(){!Os||Os.disconnect()}function ik(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function sk(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=uo(Vl(t));return i.prefix||(i.prefix=mn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=LC(i.prefix,t.innerText)||Gl(i.prefix,ka(t.innerText))),!i.iconName&&F.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function ok(t){var e=Nr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return F.autoA11y&&(n?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||ki()):(e["aria-hidden"]="true",e.focusable="false")),e}function ak(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function nf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=sk(t),r=n.iconName,i=n.prefix,s=n.rest,o=ok(t),a=Ia("parseNodeAttributes",{},t),l=e.styleParser?ik(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var lk=wt.styles;function Cp(t){var e=F.autoReplaceSvg==="nest"?nf(t,{styleParser:!1}):nf(t);return~e.extra.classes.indexOf(sp)?zt("generateLayersText",t,e):zt("generateSvgReplacementMutation",t,e)}var gn=new Set;zl.map(function(t){gn.add("fa-".concat(t))});Object.keys(bi[ve]).map(gn.add.bind(gn));Object.keys(bi[xe]).map(gn.add.bind(gn));gn=Di(gn);function rf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yt)return Promise.resolve();var n=ye.documentElement.classList,r=function(f){return n.add("".concat(Vu,"-").concat(f))},i=function(f){return n.remove("".concat(Vu,"-").concat(f))},s=F.autoFetchSvg?gn:zl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(lk));s.includes("fa")||s.push("fa");var o=[".".concat(sp,":not([").concat(Un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Nr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Xl.begin("onTree"),c=a.reduce(function(u,f){try{var d=Cp(f);d&&u.push(d)}catch(p){ip||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){wp(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function ck(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cp(t).then(function(n){n&&wp([n],e)})}function uk(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Sa(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Sa(i||{})),t(r,D(D({},n),{},{mask:i}))}}var fk=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ot:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,g=p===void 0?null:p,_=n.classes,b=_===void 0?[]:_,v=n.attributes,k=v===void 0?{}:v,M=n.styles,H=M===void 0?{}:M;if(!!e){var W=e.prefix,oe=e.iconName,z=e.icon;return fo(D({type:"icon"},e),function(){return Bn("beforeDOMElementCreation",{iconDefinition:e,params:n}),F.autoA11y&&(d?k["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(g||ki()):(k["aria-hidden"]="true",k.focusable="false")),Ql({icons:{main:Ta(z),mask:l?Ta(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:oe,transform:D(D({},Ot),i),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:k,styles:H,classes:b}})})}},dk={mixout:function(){return{icon:uk(fk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rf,n.nodeCallback=ck,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ye:r,s=n.callback,o=s===void 0?function(){}:s;return rf(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,g){Promise.all([Aa(i,a),u.iconName?Aa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var b=Bl(_,2),v=b[0],k=b[1];p([n,Ql({icons:{main:v,mask:k},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=lo(a);l.length>0&&(i.style=l);var c;return Kl(o)&&(c=zt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},hk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return fo({type:"layer"},function(){Bn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Di(s)).join(" ")},children:o}]})}}}},pk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return fo({type:"counter",content:n},function(){return Bn("beforeDOMElementCreation",{content:n,params:r}),YC({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Di(a))}})})}}}},mk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ot:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,d=r.styles,p=d===void 0?{}:d;return fo({type:"text",content:n},function(){return Bn("beforeDOMElementCreation",{content:n,params:r}),Xu({content:n,transform:D(D({},Ot),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Di(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(tp){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Xu({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},gk=new RegExp('"',"ug"),sf=[1105920,1112319];function _k(t){var e=t.replace(gk,""),n=PC(e,0),r=n>=sf[0]&&n<=sf[1],i=e.length===2?e[0]===e[1]:!1;return{value:ka(i?e[0]:e),isSecondary:r||i}}function of(t,e){var n="".concat(sC).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Nr(t.children),o=s.filter(function(z){return z.getAttribute(Ca)===e})[0],a=pn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(uC),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?xe:ve,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wi[d][l[2].toLowerCase()]:fC[d][c],g=_k(f),_=g.value,b=g.isSecondary,v=l[0].startsWith("FontAwesome"),k=Gl(p,_),M=k;if(v){var H=FC(_);H.iconName&&H.prefix&&(k=H.iconName,p=H.prefix)}if(k&&!b&&(!o||o.getAttribute(jl)!==p||o.getAttribute(Wl)!==M)){t.setAttribute(n,M),o&&t.removeChild(o);var W=ak(),oe=W.extra;oe.attributes[Ca]=e,Aa(k,p).then(function(z){var Q=Ql(D(D({},W),{},{icons:{main:z,mask:ql()},prefix:p,iconName:M,extra:oe,watchable:!0})),be=ye.createElement("svg");e==="::before"?t.insertBefore(be,t.firstChild):t.appendChild(be),be.outerHTML=Q.map(function(De){return Li(De)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function vk(t){return Promise.all([of(t,"::before"),of(t,"::after")])}function yk(t){return t.parentNode!==document.head&&!~aC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ca)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function af(t){if(!!Yt)return new Promise(function(e,n){var r=Nr(t.querySelectorAll("*")).filter(yk).map(vk),i=Xl.begin("searchPseudoElements");Ep(),Promise.all(r).then(function(){i(),Ra(),e()}).catch(function(){i(),Ra(),n()})})}var bk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=af,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ye:r;F.searchPseudoElements&&af(i)}}},lf=!1,wk={mixout:function(){return{dom:{unwatch:function(){Ep(),lf=!0}}}},hooks:function(){return{bootstrap:function(){tf(Ia("mutationObserverCallbacks",{}))},noAuto:function(){rk()},watch:function(n){var r=n.observeMutationsRoot;lf?Ra():tf(Ia("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},cf=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Ek={mixout:function(){return{parse:{transform:function(n){return cf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=cf(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:D({},p.outer),children:[{tag:"g",attributes:D({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),p.path)}]}]}}}},Lo={x:0,y:0,width:"100%",height:"100%"};function uf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ck(t){return t.tag==="g"?t.children:[t]}var kk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?uo(i.split(" ").map(function(o){return o.trim()})):ql();return s.prefix||(s.prefix=mn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,p=EC({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:D(D({},Lo),{},{fill:"white"})},_=u.children?{children:u.children.map(uf)}:{},b={tag:"g",attributes:D({},p.inner),children:[uf(D({tag:u.tag,attributes:D(D({},u.attributes),p.path)},_))]},v={tag:"g",attributes:D({},p.outer),children:[b]},k="mask-".concat(a||ki()),M="clip-".concat(a||ki()),H={tag:"mask",attributes:D(D({},Lo),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Ck(d)},H]};return r.push(W,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(k,")")},Lo)}),{children:r,attributes:i}}}},xk={provides:function(e){var n=!1;pn.matchMedia&&(n=pn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ik={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Sk=[xC,dk,hk,pk,mk,bk,wk,Ek,kk,xk,Ik];BC(Sk,{mixoutsTo:st});st.noAuto;var kp=st.config,Tk=st.library;st.dom;var Ds=st.parse;st.findIconDefinition;st.toHtml;var Ak=st.icon;st.layer;var Pk=st.text;st.counter;function ff(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ff(Object(n),!0).forEach(function(r){Qe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ff(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ms(t){return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ms(t)}function Qe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Nk(t,e){if(t==null)return{};var n=Rk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Na(t){return Ok(t)||Dk(t)||Mk(t)||Lk()}function Ok(t){if(Array.isArray(t))return Oa(t)}function Dk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mk(t,e){if(!!t){if(typeof t=="string")return Oa(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oa(t,e)}}function Oa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Lk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xp={exports:{}};(function(t){(function(e){var n=function(v,k,M){if(!c(k)||f(k)||d(k)||p(k)||l(k))return k;var H,W=0,oe=0;if(u(k))for(H=[],oe=k.length;W<oe;W++)H.push(n(v,k[W],M));else{H={};for(var z in k)Object.prototype.hasOwnProperty.call(k,z)&&(H[v(z,M)]=n(v,k[z],M))}return H},r=function(v,k){k=k||{};var M=k.separator||"_",H=k.split||/(?=[A-Z])/;return v.split(H).join(M)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(k,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var k=i(v);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(v,k){return r(v,k).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},_=function(v,k){var M=k&&"process"in k?k.process:k;return typeof M!="function"?v:function(H,W){return M(H,v,W)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,k){return n(_(i,k),v)},decamelizeKeys:function(v,k){return n(_(o,k),v,k)},pascalizeKeys:function(v,k){return n(_(s,k),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(Fk)})(xp);var $k=xp.exports,Uk=["class","style"];function Bk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=$k.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Hk(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Zl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Zl(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Hk(u);break;case"style":l.style=Bk(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=Nk(n,Uk);return Ks(t.tag,_t(_t(_t({},e),{},{class:i.class,style:_t(_t({},i.style),o)},i.attrs),a),r)}var Ip=!1;try{Ip=!0}catch{}function jk(){if(!Ip&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ei(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Qe({},t,e):{}}function Wk(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Qe(e,"fa-".concat(t.size),t.size!==null),Qe(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Qe(e,"fa-pull-".concat(t.pull),t.pull!==null),Qe(e,"fa-swap-opacity",t.swapOpacity),Qe(e,"fa-bounce",t.bounce),Qe(e,"fa-shake",t.shake),Qe(e,"fa-beat",t.beat),Qe(e,"fa-fade",t.fade),Qe(e,"fa-beat-fade",t.beatFade),Qe(e,"fa-flash",t.flash),Qe(e,"fa-spin-pulse",t.spinPulse),Qe(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function df(t){if(t&&Ms(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ds.icon)return Ds.icon(t);if(t===null)return null;if(Ms(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var zk=xi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=we(function(){return df(e.icon)}),s=we(function(){return ei("classes",Wk(e))}),o=we(function(){return ei("transform",typeof e.transform=="string"?Ds.transform(e.transform):e.transform)}),a=we(function(){return ei("mask",df(e.mask))}),l=we(function(){return Ak(i.value,_t(_t(_t(_t({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});kt(l,function(u){if(!u)return jk("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=we(function(){return l.value?Zl(l.value.abstract[0],{},r):null});return function(){return c.value}}});xi({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=kp.familyPrefix,s=we(function(){return["".concat(i,"-layers")].concat(Na(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Ks("div",{class:s.value},r.default?r.default():[])}}});xi({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=kp.familyPrefix,s=we(function(){return ei("classes",[].concat(Na(e.counter?["".concat(i,"-layers-counter")]:[]),Na(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=we(function(){return ei("transform",typeof e.transform=="string"?Ds.transform(e.transform):e.transform)}),a=we(function(){var c=Pk(e.value.toString(),_t(_t({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=we(function(){return Zl(a.value,{},r)});return function(){return l.value}}});var Vk={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Kk={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"]};Tk.add(Vk,Kk);const ho=Vg(sw);ho.component("font-awesome-icon",zk);ho.use(Gg());ho.use(qE);ho.mount("#app");document.oncontextmenu=function(){window.event.returnValue=!1};export{Kr as C,tt as F,St as _,E as a,Vm as b,rt as c,vn as d,ke as n,nt as o,_n as p,ne as r,je as t,yn as u,kt as w};
