(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ha(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hm=Ha(Bm);function bf(t){return!!t||t===""}function ja(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ue(r)?zm(r):ja(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ue(t))return t;if(Ce(t))return t}}const jm=/;(?![^(]*\))/g,Wm=/:(.+)/;function zm(t){const e={};return t.split(jm).forEach(n=>{if(n){const r=n.split(Wm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ke(t){let e="";if(Ue(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=ke(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Re=t=>Ue(t)?t:t==null?"":K(t)||Ce(t)&&(t.toString===kf||!Y(t.toString))?JSON.stringify(t,wf,2):String(t),wf=(t,e)=>e&&e.__v_isRef?wf(t,e.value):ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Cf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!K(e)&&!xf(e)?String(e):e,de={},rr=[],Et=()=>{},Vm=()=>!1,Km=/^on[^a-z]/,Fs=t=>Km.test(t),Wa=t=>t.startsWith("onUpdate:"),qe=Object.assign,za=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ym=Object.prototype.hasOwnProperty,ne=(t,e)=>Ym.call(t,e),K=Array.isArray,ir=t=>$s(t)==="[object Map]",Cf=t=>$s(t)==="[object Set]",Y=t=>typeof t=="function",Ue=t=>typeof t=="string",Va=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Ef=t=>Ce(t)&&Y(t.then)&&Y(t.catch),kf=Object.prototype.toString,$s=t=>kf.call(t),Gm=t=>$s(t).slice(8,-1),xf=t=>$s(t)==="[object Object]",Ka=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ts=Ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Us=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qm=/-(\w)/g,fr=Us(t=>t.replace(qm,(e,n)=>n?n.toUpperCase():"")),Qm=/\B([A-Z])/g,Hn=Us(t=>t.replace(Qm,"-$1").toLowerCase()),If=Us(t=>t.charAt(0).toUpperCase()+t.slice(1)),vo=Us(t=>t?`on${If(t)}`:""),ri=(t,e)=>!Object.is(t,e),ns=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},cs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ho=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let uc;const Xm=()=>uc||(uc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class Sf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Tf(t){return new Sf(t)}function Jm(t,e=Pt){e&&e.active&&e.effects.push(t)}const Ya=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Af=t=>(t.w&fn)>0,Pf=t=>(t.n&fn)>0,Zm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=fn},ep=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Af(i)&&!Pf(i)?i.delete(t):e[n++]=i,i.w&=~fn,i.n&=~fn}e.length=n}},jo=new WeakMap;let jr=0,fn=1;const Wo=30;let gt;const Rn=Symbol(""),zo=Symbol("");class Ga{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jm(this,r)}run(){if(!this.active)return this.fn();let e=gt,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,rn=!0,fn=1<<++jr,jr<=Wo?Zm(this):fc(this),this.fn()}finally{jr<=Wo&&ep(this),fn=1<<--jr,gt=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(fc(this),this.onStop&&this.onStop(),this.active=!1)}}function fc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const Rf=[];function Sr(){Rf.push(rn),rn=!1}function Tr(){const t=Rf.pop();rn=t===void 0?!0:t}function it(t,e,n){if(rn&&gt){let r=jo.get(t);r||jo.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ya()),Nf(i)}}function Nf(t,e){let n=!1;jr<=Wo?Pf(t)||(t.n|=fn,n=!Af(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function jt(t,e,n,r,i,s){const o=jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?Ka(n)&&a.push(o.get("length")):(a.push(o.get(Rn)),ir(t)&&a.push(o.get(zo)));break;case"delete":K(t)||(a.push(o.get(Rn)),ir(t)&&a.push(o.get(zo)));break;case"set":ir(t)&&a.push(o.get(Rn));break}if(a.length===1)a[0]&&Vo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vo(Ya(l))}}function Vo(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&dc(r);for(const r of n)r.computed||dc(r)}function dc(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tp=Ha("__proto__,__v_isRef,__isVue"),Of=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Va)),np=qa(),rp=qa(!1,!0),ip=qa(!0),hc=sp();function sp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let s=0,o=this.length;s<o;s++)it(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sr();const r=se(this)[e].apply(this,n);return Tr(),r}}),t}function qa(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?wp:$f:e?Ff:Lf).get(r))return r;const o=K(r);if(!t&&o&&ne(hc,i))return Reflect.get(hc,i,s);const a=Reflect.get(r,i,s);return(Va(i)?Of.has(i):tp(i))||(t||it(r,"get",i),e)?a:Te(a)?o&&Ka(i)?a:a.value:Ce(a)?t?Uf(a):Ar(a):a}}const op=Df(),ap=Df(!0);function Df(t=!1){return function(n,r,i,s){let o=n[r];if(dr(o)&&Te(o)&&!Te(i))return!1;if(!t&&(!us(i)&&!dr(i)&&(o=se(o),i=se(i)),!K(n)&&Te(o)&&!Te(i)))return o.value=i,!0;const a=K(n)&&Ka(r)?Number(r)<n.length:ne(n,r),l=Reflect.set(n,r,i,s);return n===se(s)&&(a?ri(i,o)&&jt(n,"set",r,i):jt(n,"add",r,i)),l}}function lp(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&jt(t,"delete",e,void 0),r}function cp(t,e){const n=Reflect.has(t,e);return(!Va(e)||!Of.has(e))&&it(t,"has",e),n}function up(t){return it(t,"iterate",K(t)?"length":Rn),Reflect.ownKeys(t)}const Mf={get:np,set:op,deleteProperty:lp,has:cp,ownKeys:up},fp={get:ip,set(t,e){return!0},deleteProperty(t,e){return!0}},dp=qe({},Mf,{get:rp,set:ap}),Qa=t=>t,Bs=t=>Reflect.getPrototypeOf(t);function Ui(t,e,n=!1,r=!1){t=t.__v_raw;const i=se(t),s=se(e);n||(e!==s&&it(i,"get",e),it(i,"get",s));const{has:o}=Bs(i),a=r?Qa:n?Za:ii;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Bi(t,e=!1){const n=this.__v_raw,r=se(n),i=se(t);return e||(t!==i&&it(r,"has",t),it(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Hi(t,e=!1){return t=t.__v_raw,!e&&it(se(t),"iterate",Rn),Reflect.get(t,"size",t)}function mc(t){t=se(t);const e=se(this);return Bs(e).has.call(e,t)||(e.add(t),jt(e,"add",t,t)),this}function pc(t,e){e=se(e);const n=se(this),{has:r,get:i}=Bs(n);let s=r.call(n,t);s||(t=se(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ri(e,o)&&jt(n,"set",t,e):jt(n,"add",t,e),this}function gc(t){const e=se(this),{has:n,get:r}=Bs(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&jt(e,"delete",t,void 0),s}function _c(){const t=se(this),e=t.size!==0,n=t.clear();return e&&jt(t,"clear",void 0,void 0),n}function ji(t,e){return function(r,i){const s=this,o=s.__v_raw,a=se(o),l=e?Qa:t?Za:ii;return!t&&it(a,"iterate",Rn),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Wi(t,e,n){return function(...r){const i=this.__v_raw,s=se(i),o=ir(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?Qa:e?Za:ii;return!e&&it(s,"iterate",l?zo:Rn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Qt(t){return function(...e){return t==="delete"?!1:this}}function hp(){const t={get(s){return Ui(this,s)},get size(){return Hi(this)},has:Bi,add:mc,set:pc,delete:gc,clear:_c,forEach:ji(!1,!1)},e={get(s){return Ui(this,s,!1,!0)},get size(){return Hi(this)},has:Bi,add:mc,set:pc,delete:gc,clear:_c,forEach:ji(!1,!0)},n={get(s){return Ui(this,s,!0)},get size(){return Hi(this,!0)},has(s){return Bi.call(this,s,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:ji(!0,!1)},r={get(s){return Ui(this,s,!0,!0)},get size(){return Hi(this,!0)},has(s){return Bi.call(this,s,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:ji(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Wi(s,!1,!1),n[s]=Wi(s,!0,!1),e[s]=Wi(s,!1,!0),r[s]=Wi(s,!0,!0)}),[t,n,e,r]}const[mp,pp,gp,_p]=hp();function Xa(t,e){const n=e?t?_p:gp:t?pp:mp;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ne(n,i)&&i in r?n:r,i,s)}const vp={get:Xa(!1,!1)},yp={get:Xa(!1,!0)},bp={get:Xa(!0,!1)},Lf=new WeakMap,Ff=new WeakMap,$f=new WeakMap,wp=new WeakMap;function Cp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ep(t){return t.__v_skip||!Object.isExtensible(t)?0:Cp(Gm(t))}function Ar(t){return dr(t)?t:Ja(t,!1,Mf,vp,Lf)}function kp(t){return Ja(t,!1,dp,yp,Ff)}function Uf(t){return Ja(t,!0,fp,bp,$f)}function Ja(t,e,n,r,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Ep(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function sn(t){return dr(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function us(t){return!!(t&&t.__v_isShallow)}function Bf(t){return sn(t)||dr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function hr(t){return cs(t,"__v_skip",!0),t}const ii=t=>Ce(t)?Ar(t):t,Za=t=>Ce(t)?Uf(t):t;function Hf(t){rn&&gt&&(t=se(t),Nf(t.dep||(t.dep=Ya())))}function jf(t,e){t=se(t),t.dep&&Vo(t.dep)}function Te(t){return!!(t&&t.__v_isRef===!0)}function te(t){return Wf(t,!1)}function xp(t){return Wf(t,!0)}function Wf(t,e){return Te(t)?t:new Ip(t,e)}class Ip{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:ii(e)}get value(){return Hf(this),this._value}set value(e){const n=this.__v_isShallow||us(e)||dr(e);e=n?e:se(e),ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ii(e),jf(this))}}function J(t){return Te(t)?t.value:t}const Sp={get:(t,e,n)=>J(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function zf(t){return sn(t)?t:new Proxy(t,Sp)}function Tp(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=Pp(t,n);return e}class Ap{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Pp(t,e,n){const r=t[e];return Te(r)?r:new Ap(t,e,n)}var Vf;class Rp{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Vf]=!1,this._dirty=!0,this.effect=new Ga(e,()=>{this._dirty||(this._dirty=!0,jf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=se(this);return Hf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Vf="__v_isReadonly";function Np(t,e,n=!1){let r,i;const s=Y(t);return s?(r=t,i=Et):(r=t.get,i=t.set),new Rp(r,i,s||!i,n)}function on(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Hs(s,e,n)}return i}function kt(t,e,n,r){if(Y(t)){const s=on(t,e,n,r);return s&&Ef(s)&&s.catch(o=>{Hs(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(kt(t[s],e,n,r));return i}function Hs(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){on(l,null,10,[t,o,a]);return}}Op(t,n,i,r)}function Op(t,e,n,r=!0){console.error(t)}let si=!1,Ko=!1;const We=[];let Nt=0;const sr=[];let $t=null,xn=0;const Kf=Promise.resolve();let el=null;function tl(t){const e=el||Kf;return t?e.then(this?t.bind(this):t):e}function Dp(t){let e=Nt+1,n=We.length;for(;e<n;){const r=e+n>>>1;oi(We[r])<t?e=r+1:n=r}return e}function nl(t){(!We.length||!We.includes(t,si&&t.allowRecurse?Nt+1:Nt))&&(t.id==null?We.push(t):We.splice(Dp(t.id),0,t),Yf())}function Yf(){!si&&!Ko&&(Ko=!0,el=Kf.then(qf))}function Mp(t){const e=We.indexOf(t);e>Nt&&We.splice(e,1)}function Lp(t){K(t)?sr.push(...t):(!$t||!$t.includes(t,t.allowRecurse?xn+1:xn))&&sr.push(t),Yf()}function vc(t,e=si?Nt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function Gf(t){if(sr.length){const e=[...new Set(sr)];if(sr.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,r)=>oi(n)-oi(r)),xn=0;xn<$t.length;xn++)$t[xn]();$t=null,xn=0}}const oi=t=>t.id==null?1/0:t.id,Fp=(t,e)=>{const n=oi(t)-oi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function qf(t){Ko=!1,si=!0,We.sort(Fp);const e=Et;try{for(Nt=0;Nt<We.length;Nt++){const n=We[Nt];n&&n.active!==!1&&on(n,null,14)}}finally{Nt=0,We.length=0,Gf(),si=!1,el=null,(We.length||sr.length)&&qf()}}function $p(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||de;d&&(i=n.map(m=>m.trim())),f&&(i=n.map(Ho))}let a,l=r[a=vo(e)]||r[a=vo(fr(e))];!l&&s&&(l=r[a=vo(Hn(e))]),l&&kt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(c,t,6,i)}}function Qf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Qf(c,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Ce(t)&&r.set(t,null),null):(K(s)?s.forEach(l=>o[l]=null):qe(o,s),Ce(t)&&r.set(t,o),o)}function js(t,e){return!t||!Fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Hn(e))||ne(t,e))}let yt=null,Ws=null;function fs(t){const e=yt;return yt=t,Ws=t&&t.type.__scopeId||null,e}function jn(t){Ws=t}function Wn(){Ws=null}function at(t,e=yt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Sc(-1);const s=fs(e);let o;try{o=t(...i)}finally{fs(s),r._d&&Sc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yo(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:g,inheritAttrs:_}=t;let b,v;const k=fs(t);try{if(n.shapeFlag&4){const H=i||r;b=Rt(u.call(H,H,f,s,m,d,g)),v=l}else{const H=e;b=Rt(H.length>1?H(s,{attrs:l,slots:a,emit:c}):H(s,null)),v=e.props?l:Up(l)}}catch(H){zr.length=0,Hs(H,t,1),b=le(ai)}let M=b;if(v&&_!==!1){const H=Object.keys(v),{shapeFlag:W}=M;H.length&&W&7&&(o&&H.some(Wa)&&(v=Bp(v,o)),M=mr(M,v))}return n.dirs&&(M=mr(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),b=M,fs(k),b}const Up=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fs(n))&&((e||(e={}))[n]=t[n]);return e},Bp=(t,e)=>{const n={};for(const r in t)(!Wa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hp(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?yc(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!js(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?yc(r,o,c):!0:!!o;return!1}function yc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!js(n,s))return!0}return!1}function jp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wp=t=>t.__isSuspense;function zp(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Lp(t)}function rs(t,e){if(He){let n=He.provides;const r=He.parent&&He.parent.provides;r===n&&(n=He.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=He||yt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(r.proxy):e}}const bc={};function ft(t,e,n){return Xf(t,e,n)}function Xf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=de){const a=He;let l,c=!1,u=!1;if(Te(t)?(l=()=>t.value,c=us(t)):sn(t)?(l=()=>t,r=!0):K(t)?(u=!0,c=t.some(v=>sn(v)||us(v)),l=()=>t.map(v=>{if(Te(v))return v.value;if(sn(v))return Sn(v);if(Y(v))return on(v,a,2)})):Y(t)?e?l=()=>on(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),kt(t,a,3,[d])}:l=Et,e&&r){const v=l;l=()=>Sn(v())}let f,d=v=>{f=b.onStop=()=>{on(v,a,4)}};if(ci)return d=Et,e?n&&kt(e,a,3,[l(),u?[]:void 0,d]):l(),Et;let m=u?[]:bc;const g=()=>{if(!!b.active)if(e){const v=b.run();(r||c||(u?v.some((k,M)=>ri(k,m[M])):ri(v,m)))&&(f&&f(),kt(e,a,3,[v,m===bc?void 0:m,d]),m=v)}else b.run()};g.allowRecurse=!!e;let _;i==="sync"?_=g:i==="post"?_=()=>Ze(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),_=()=>nl(g));const b=new Ga(l,_);return e?n?g():m=b.run():i==="post"?Ze(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&za(a.scope.effects,b)}}function Vp(t,e,n){const r=this.proxy,i=Ue(t)?t.includes(".")?Jf(r,t):()=>r[t]:t.bind(r,r);let s;Y(e)?s=e:(s=e.handler,n=e);const o=He;pr(this);const a=Xf(i,s.bind(r),n);return o?pr(o):Nn(),a}function Jf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Sn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))Sn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Sn(t[n],e);else if(Cf(t)||ir(t))t.forEach(n=>{Sn(n,e)});else if(xf(t))for(const n in t)Sn(t[n],e);return t}function Ii(t){return Y(t)?{setup:t,name:t.name}:t}const is=t=>!!t.type.__asyncLoader,Zf=t=>t.type.__isKeepAlive;function Kp(t,e){ed(t,"a",e)}function Yp(t,e){ed(t,"da",e)}function ed(t,e,n=He){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(zs(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Zf(i.parent.vnode)&&Gp(r,e,n,i),i=i.parent}}function Gp(t,e,n,r){const i=zs(e,t,r,!0);rl(()=>{za(r[e],i)},n)}function zs(t,e,n=He,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sr(),pr(n);const a=kt(e,n,t,o);return Nn(),Tr(),a});return r?i.unshift(s):i.push(s),s}}const Yt=t=>(e,n=He)=>(!ci||t==="sp")&&zs(t,(...r)=>e(...r),n),qp=Yt("bm"),td=Yt("m"),Qp=Yt("bu"),Xp=Yt("u"),Jp=Yt("bum"),rl=Yt("um"),Zp=Yt("sp"),eg=Yt("rtg"),tg=Yt("rtc");function ng(t,e=He){zs("ec",t,e)}function Yo(t,e){const n=yt;if(n===null)return t;const r=Ks(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=de]=e[s];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Sn(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function bn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Sr(),kt(l,n,8,[t.el,a,t,e]),Tr())}}const rg=Symbol();function nd(t,e,n,r){let i;const s=n&&n[r];if(K(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Go=t=>t?hd(t)?Ks(t)||t.proxy:Go(t.parent):null,ds=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Go(t.parent),$root:t=>Go(t.root),$emit:t=>t.emit,$options:t=>il(t),$forceUpdate:t=>t.f||(t.f=()=>nl(t.update)),$nextTick:t=>t.n||(t.n=tl.bind(t.proxy)),$watch:t=>Vp.bind(t)}),ig={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==de&&ne(r,e))return o[e]=1,r[e];if(i!==de&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,s[e];if(n!==de&&ne(n,e))return o[e]=4,n[e];qo&&(o[e]=0)}}const u=ds[e];let f,d;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==de&&ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==de&&ne(i,e)?(i[e]=n,!0):r!==de&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==de&&ne(t,o)||e!==de&&ne(e,o)||(a=s[0])&&ne(a,o)||ne(r,o)||ne(ds,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qo=!0;function sg(t){const e=il(t),n=t.proxy,r=t.ctx;qo=!1,e.beforeCreate&&wc(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:b,beforeDestroy:v,beforeUnmount:k,destroyed:M,unmounted:H,render:W,renderTracked:oe,renderTriggered:z,errorCaptured:X,serverPrefetch:be,expose:Me,inheritAttrs:Qe,components:ot,directives:qt,filters:nt}=e;if(c&&og(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const ce=o[he];Y(ce)&&(r[he]=ce.bind(n))}if(i){const he=i.call(n,n);Ce(he)&&(t.data=Ar(he))}if(qo=!0,s)for(const he in s){const ce=s[he],ht=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):Et,yn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):Et,mt=we({get:ht,set:yn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Xe=>mt.value=Xe})}if(a)for(const he in a)rd(a[he],r,n,he);if(l){const he=Y(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ce=>{rs(ce,he[ce])})}u&&wc(u,t,"c");function Ae(he,ce){K(ce)?ce.forEach(ht=>he(ht.bind(n))):ce&&he(ce.bind(n))}if(Ae(qp,f),Ae(td,d),Ae(Qp,m),Ae(Xp,g),Ae(Kp,_),Ae(Yp,b),Ae(ng,X),Ae(tg,oe),Ae(eg,z),Ae(Jp,k),Ae(rl,H),Ae(Zp,be),K(Me))if(Me.length){const he=t.exposed||(t.exposed={});Me.forEach(ce=>{Object.defineProperty(he,ce,{get:()=>n[ce],set:ht=>n[ce]=ht})})}else t.exposed||(t.exposed={});W&&t.render===Et&&(t.render=W),Qe!=null&&(t.inheritAttrs=Qe),ot&&(t.components=ot),qt&&(t.directives=qt)}function og(t,e,n=Et,r=!1){K(t)&&(t=Qo(t));for(const i in t){const s=t[i];let o;Ce(s)?"default"in s?o=Dt(s.from||i,s.default,!0):o=Dt(s.from||i):o=Dt(s),Te(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function wc(t,e,n){kt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function rd(t,e,n,r){const i=r.includes(".")?Jf(n,r):()=>n[r];if(Ue(t)){const s=e[t];Y(s)&&ft(i,s)}else if(Y(t))ft(i,t.bind(n));else if(Ce(t))if(K(t))t.forEach(s=>rd(s,e,n,r));else{const s=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(s)&&ft(i,s,t)}}function il(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>hs(l,c,o,!0)),hs(l,e,o)),Ce(e)&&s.set(e,l),l}function hs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&hs(t,s,n,!0),i&&i.forEach(o=>hs(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ag[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ag={data:Cc,props:Cn,emits:Cn,methods:Cn,computed:Cn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Cn,directives:Cn,watch:cg,provide:Cc,inject:lg};function Cc(t,e){return e?t?function(){return qe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function lg(t,e){return Cn(Qo(t),Qo(e))}function Qo(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?qe(qe(Object.create(null),t),e):e}function cg(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=ze(t[r],e[r]);return n}function ug(t,e,n,r=!1){const i={},s={};cs(s,Vs,1),t.propsDefaults=Object.create(null),id(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:kp(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function fg(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=se(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(js(t.emitsOptions,d))continue;const m=e[d];if(l)if(ne(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=fr(d);i[g]=Xo(l,a,g,m,t,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{id(t,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!ne(e,f)&&((u=Hn(f))===f||!ne(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Xo(l,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ne(e,f)&&!0)&&(delete s[f],c=!0)}c&&jt(t,"set","$attrs")}function id(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ts(l))continue;const c=e[l];let u;i&&ne(i,u=fr(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:js(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=se(n),c=a||de;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Xo(i,l,f,c[f],t,!ne(c,f))}}return o}function Xo(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Y(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(pr(i),r=c[n]=l.call(null,e),Nn())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function sd(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=f=>{l=!0;const[d,m]=sd(f,e,!0);qe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Ce(t)&&r.set(t,rr),rr;if(K(s))for(let u=0;u<s.length;u++){const f=fr(s[u]);Ec(f)&&(o[f]=de)}else if(s)for(const u in s){const f=fr(u);if(Ec(f)){const d=s[u],m=o[f]=K(d)||Y(d)?{type:d}:d;if(m){const g=Ic(Boolean,m.type),_=Ic(String,m.type);m[0]=g>-1,m[1]=_<0||g<_,(g>-1||ne(m,"default"))&&a.push(f)}}}const c=[o,a];return Ce(t)&&r.set(t,c),c}function Ec(t){return t[0]!=="$"}function kc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xc(t,e){return kc(t)===kc(e)}function Ic(t,e){return K(e)?e.findIndex(n=>xc(n,t)):Y(e)&&xc(e,t)?0:-1}const od=t=>t[0]==="_"||t==="$stable",sl=t=>K(t)?t.map(Rt):[Rt(t)],dg=(t,e,n)=>{if(e._n)return e;const r=at((...i)=>sl(e(...i)),n);return r._c=!1,r},ad=(t,e,n)=>{const r=t._ctx;for(const i in t){if(od(i))continue;const s=t[i];if(Y(s))e[i]=dg(i,s,r);else if(s!=null){const o=sl(s);e[i]=()=>o}}},ld=(t,e)=>{const n=sl(e);t.slots.default=()=>n},hg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),cs(e,"_",n)):ad(e,t.slots={})}else t.slots={},e&&ld(t,e);cs(t.slots,Vs,1)},mg=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(qe(i,e),!n&&a===1&&delete i._):(s=!e.$stable,ad(e,i)),o=e}else e&&(ld(t,e),o={default:1});if(s)for(const a in i)!od(a)&&!(a in o)&&delete i[a]};function cd(){return{app:null,config:{isNativeTag:Vm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pg=0;function gg(t,e){return function(r,i=null){Y(r)||(r=Object.assign({},r)),i!=null&&!Ce(i)&&(i=null);const s=cd(),o=new Set;let a=!1;const l=s.app={_uid:pg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Mg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=le(r,i);return d.appContext=s,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ks(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Jo(t,e,n,r,i=!1){if(K(t)){t.forEach((d,m)=>Jo(d,e&&(K(e)?e[m]:e),n,r,i));return}if(is(r)&&!i)return;const s=r.shapeFlag&4?Ks(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,ne(f,c)&&(f[c]=null)):Te(c)&&(c.value=null)),Y(l))on(l,a,12,[o,u]);else{const d=Ue(l),m=Te(l);if(d||m){const g=()=>{if(t.f){const _=d?ne(f,l)?f[l]:u[l]:l.value;i?K(_)&&za(_,s):K(_)?_.includes(s)||_.push(s):d?(u[l]=[s],ne(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ne(f,l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ze(g,n)):g()}}}const Ze=zp;function _g(t){return vg(t)}function vg(t,e){const n=Xm();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Et,insertStaticContent:g}=t,_=(h,p,y,w=null,x=null,A=null,N=!1,T=null,P=!!p.dynamicChildren)=>{if(h===p)return;h&&!Lr(h,p)&&(w=R(h),Xe(h,x,A,!0),h=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:I,ref:U,shapeFlag:L}=p;switch(I){case ol:b(h,p,y,w);break;case ai:v(h,p,y,w);break;case ss:h==null&&k(p,y,w,N);break;case et:ot(h,p,y,w,x,A,N,T,P);break;default:L&1?W(h,p,y,w,x,A,N,T,P):L&6?qt(h,p,y,w,x,A,N,T,P):(L&64||L&128)&&I.process(h,p,y,w,x,A,N,T,P,re)}U!=null&&x&&Jo(U,h&&h.ref,A,p||h,!p)},b=(h,p,y,w)=>{if(h==null)r(p.el=a(p.children),y,w);else{const x=p.el=h.el;p.children!==h.children&&c(x,p.children)}},v=(h,p,y,w)=>{h==null?r(p.el=l(p.children||""),y,w):p.el=h.el},k=(h,p,y,w)=>{[h.el,h.anchor]=g(h.children,p,y,w,h.el,h.anchor)},M=({el:h,anchor:p},y,w)=>{let x;for(;h&&h!==p;)x=d(h),r(h,y,w),h=x;r(p,y,w)},H=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),i(h),h=y;i(p)},W=(h,p,y,w,x,A,N,T,P)=>{N=N||p.type==="svg",h==null?oe(p,y,w,x,A,N,T,P):be(h,p,x,A,N,T,P)},oe=(h,p,y,w,x,A,N,T)=>{let P,I;const{type:U,props:L,shapeFlag:B,transition:V,dirs:ee}=h;if(P=h.el=o(h.type,A,L&&L.is,L),B&8?u(P,h.children):B&16&&X(h.children,P,null,w,x,A&&U!=="foreignObject",N,T),ee&&bn(h,null,w,"created"),L){for(const ue in L)ue!=="value"&&!ts(ue)&&s(P,ue,null,L[ue],A,h.children,w,x,O);"value"in L&&s(P,"value",null,L.value),(I=L.onVnodeBeforeMount)&&At(I,w,h)}z(P,h,h.scopeId,N,w),ee&&bn(h,null,w,"beforeMount");const me=(!x||x&&!x.pendingBranch)&&V&&!V.persisted;me&&V.beforeEnter(P),r(P,p,y),((I=L&&L.onVnodeMounted)||me||ee)&&Ze(()=>{I&&At(I,w,h),me&&V.enter(P),ee&&bn(h,null,w,"mounted")},x)},z=(h,p,y,w,x)=>{if(y&&m(h,y),w)for(let A=0;A<w.length;A++)m(h,w[A]);if(x){let A=x.subTree;if(p===A){const N=x.vnode;z(h,N,N.scopeId,N.slotScopeIds,x.parent)}}},X=(h,p,y,w,x,A,N,T,P=0)=>{for(let I=P;I<h.length;I++){const U=h[I]=T?Zt(h[I]):Rt(h[I]);_(null,U,p,y,w,x,A,N,T)}},be=(h,p,y,w,x,A,N)=>{const T=p.el=h.el;let{patchFlag:P,dynamicChildren:I,dirs:U}=p;P|=h.patchFlag&16;const L=h.props||de,B=p.props||de;let V;y&&wn(y,!1),(V=B.onVnodeBeforeUpdate)&&At(V,y,p,h),U&&bn(p,h,y,"beforeUpdate"),y&&wn(y,!0);const ee=x&&p.type!=="foreignObject";if(I?Me(h.dynamicChildren,I,T,y,w,ee,A):N||ce(h,p,T,null,y,w,ee,A,!1),P>0){if(P&16)Qe(T,p,L,B,y,w,x);else if(P&2&&L.class!==B.class&&s(T,"class",null,B.class,x),P&4&&s(T,"style",L.style,B.style,x),P&8){const me=p.dynamicProps;for(let ue=0;ue<me.length;ue++){const Pe=me[ue],pt=L[Pe],Gn=B[Pe];(Gn!==pt||Pe==="value")&&s(T,Pe,pt,Gn,x,h.children,y,w,O)}}P&1&&h.children!==p.children&&u(T,p.children)}else!N&&I==null&&Qe(T,p,L,B,y,w,x);((V=B.onVnodeUpdated)||U)&&Ze(()=>{V&&At(V,y,p,h),U&&bn(p,h,y,"updated")},w)},Me=(h,p,y,w,x,A,N)=>{for(let T=0;T<p.length;T++){const P=h[T],I=p[T],U=P.el&&(P.type===et||!Lr(P,I)||P.shapeFlag&70)?f(P.el):y;_(P,I,U,null,w,x,A,N,!0)}},Qe=(h,p,y,w,x,A,N)=>{if(y!==w){if(y!==de)for(const T in y)!ts(T)&&!(T in w)&&s(h,T,y[T],null,N,p.children,x,A,O);for(const T in w){if(ts(T))continue;const P=w[T],I=y[T];P!==I&&T!=="value"&&s(h,T,I,P,N,p.children,x,A,O)}"value"in w&&s(h,"value",y.value,w.value)}},ot=(h,p,y,w,x,A,N,T,P)=>{const I=p.el=h?h.el:a(""),U=p.anchor=h?h.anchor:a("");let{patchFlag:L,dynamicChildren:B,slotScopeIds:V}=p;V&&(T=T?T.concat(V):V),h==null?(r(I,y,w),r(U,y,w),X(p.children,y,U,x,A,N,T,P)):L>0&&L&64&&B&&h.dynamicChildren?(Me(h.dynamicChildren,B,y,x,A,N,T),(p.key!=null||x&&p===x.subTree)&&ud(h,p,!0)):ce(h,p,y,U,x,A,N,T,P)},qt=(h,p,y,w,x,A,N,T,P)=>{p.slotScopeIds=T,h==null?p.shapeFlag&512?x.ctx.activate(p,y,w,N,P):nt(p,y,w,x,A,N,P):Le(h,p,P)},nt=(h,p,y,w,x,A,N)=>{const T=h.component=Ag(h,w,x);if(Zf(h)&&(T.ctx.renderer=re),Pg(T),T.asyncDep){if(x&&x.registerDep(T,Ae),!h.el){const P=T.subTree=le(ai);v(null,P,p,y)}return}Ae(T,h,p,y,x,A,N)},Le=(h,p,y)=>{const w=p.component=h.component;if(Hp(h,p,y))if(w.asyncDep&&!w.asyncResolved){he(w,p,y);return}else w.next=p,Mp(w.update),w.update();else p.el=h.el,w.vnode=p},Ae=(h,p,y,w,x,A,N)=>{const T=()=>{if(h.isMounted){let{next:U,bu:L,u:B,parent:V,vnode:ee}=h,me=U,ue;wn(h,!1),U?(U.el=ee.el,he(h,U,N)):U=ee,L&&ns(L),(ue=U.props&&U.props.onVnodeBeforeUpdate)&&At(ue,V,U,ee),wn(h,!0);const Pe=yo(h),pt=h.subTree;h.subTree=Pe,_(pt,Pe,f(pt.el),R(pt),h,x,A),U.el=Pe.el,me===null&&jp(h,Pe.el),B&&Ze(B,x),(ue=U.props&&U.props.onVnodeUpdated)&&Ze(()=>At(ue,V,U,ee),x)}else{let U;const{el:L,props:B}=p,{bm:V,m:ee,parent:me}=h,ue=is(p);if(wn(h,!1),V&&ns(V),!ue&&(U=B&&B.onVnodeBeforeMount)&&At(U,me,p),wn(h,!0),L&&G){const Pe=()=>{h.subTree=yo(h),G(L,h.subTree,h,x,null)};ue?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Pe()):Pe()}else{const Pe=h.subTree=yo(h);_(null,Pe,y,w,h,x,A),p.el=Pe.el}if(ee&&Ze(ee,x),!ue&&(U=B&&B.onVnodeMounted)){const Pe=p;Ze(()=>At(U,me,Pe),x)}(p.shapeFlag&256||me&&is(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&Ze(h.a,x),h.isMounted=!0,p=y=w=null}},P=h.effect=new Ga(T,()=>nl(I),h.scope),I=h.update=()=>P.run();I.id=h.uid,wn(h,!0),I()},he=(h,p,y)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,fg(h,p.props,w,y),mg(h,p.children,y),Sr(),vc(),Tr()},ce=(h,p,y,w,x,A,N,T,P=!1)=>{const I=h&&h.children,U=h?h.shapeFlag:0,L=p.children,{patchFlag:B,shapeFlag:V}=p;if(B>0){if(B&128){yn(I,L,y,w,x,A,N,T,P);return}else if(B&256){ht(I,L,y,w,x,A,N,T,P);return}}V&8?(U&16&&O(I,x,A),L!==I&&u(y,L)):U&16?V&16?yn(I,L,y,w,x,A,N,T,P):O(I,x,A,!0):(U&8&&u(y,""),V&16&&X(L,y,w,x,A,N,T,P))},ht=(h,p,y,w,x,A,N,T,P)=>{h=h||rr,p=p||rr;const I=h.length,U=p.length,L=Math.min(I,U);let B;for(B=0;B<L;B++){const V=p[B]=P?Zt(p[B]):Rt(p[B]);_(h[B],V,y,null,x,A,N,T,P)}I>U?O(h,x,A,!0,!1,L):X(p,y,w,x,A,N,T,P,L)},yn=(h,p,y,w,x,A,N,T,P)=>{let I=0;const U=p.length;let L=h.length-1,B=U-1;for(;I<=L&&I<=B;){const V=h[I],ee=p[I]=P?Zt(p[I]):Rt(p[I]);if(Lr(V,ee))_(V,ee,y,null,x,A,N,T,P);else break;I++}for(;I<=L&&I<=B;){const V=h[L],ee=p[B]=P?Zt(p[B]):Rt(p[B]);if(Lr(V,ee))_(V,ee,y,null,x,A,N,T,P);else break;L--,B--}if(I>L){if(I<=B){const V=B+1,ee=V<U?p[V].el:w;for(;I<=B;)_(null,p[I]=P?Zt(p[I]):Rt(p[I]),y,ee,x,A,N,T,P),I++}}else if(I>B)for(;I<=L;)Xe(h[I],x,A,!0),I++;else{const V=I,ee=I,me=new Map;for(I=ee;I<=B;I++){const rt=p[I]=P?Zt(p[I]):Rt(p[I]);rt.key!=null&&me.set(rt.key,I)}let ue,Pe=0;const pt=B-ee+1;let Gn=!1,ac=0;const Mr=new Array(pt);for(I=0;I<pt;I++)Mr[I]=0;for(I=V;I<=L;I++){const rt=h[I];if(Pe>=pt){Xe(rt,x,A,!0);continue}let Tt;if(rt.key!=null)Tt=me.get(rt.key);else for(ue=ee;ue<=B;ue++)if(Mr[ue-ee]===0&&Lr(rt,p[ue])){Tt=ue;break}Tt===void 0?Xe(rt,x,A,!0):(Mr[Tt-ee]=I+1,Tt>=ac?ac=Tt:Gn=!0,_(rt,p[Tt],y,null,x,A,N,T,P),Pe++)}const lc=Gn?yg(Mr):rr;for(ue=lc.length-1,I=pt-1;I>=0;I--){const rt=ee+I,Tt=p[rt],cc=rt+1<U?p[rt+1].el:w;Mr[I]===0?_(null,Tt,y,cc,x,A,N,T,P):Gn&&(ue<0||I!==lc[ue]?mt(Tt,y,cc,2):ue--)}}},mt=(h,p,y,w,x=null)=>{const{el:A,type:N,transition:T,children:P,shapeFlag:I}=h;if(I&6){mt(h.component.subTree,p,y,w);return}if(I&128){h.suspense.move(p,y,w);return}if(I&64){N.move(h,p,y,re);return}if(N===et){r(A,p,y);for(let L=0;L<P.length;L++)mt(P[L],p,y,w);r(h.anchor,p,y);return}if(N===ss){M(h,p,y);return}if(w!==2&&I&1&&T)if(w===0)T.beforeEnter(A),r(A,p,y),Ze(()=>T.enter(A),x);else{const{leave:L,delayLeave:B,afterLeave:V}=T,ee=()=>r(A,p,y),me=()=>{L(A,()=>{ee(),V&&V()})};B?B(A,ee,me):me()}else r(A,p,y)},Xe=(h,p,y,w=!1,x=!1)=>{const{type:A,props:N,ref:T,children:P,dynamicChildren:I,shapeFlag:U,patchFlag:L,dirs:B}=h;if(T!=null&&Jo(T,null,y,h,!0),U&256){p.ctx.deactivate(h);return}const V=U&1&&B,ee=!is(h);let me;if(ee&&(me=N&&N.onVnodeBeforeUnmount)&&At(me,p,h),U&6)E(h.component,y,w);else{if(U&128){h.suspense.unmount(y,w);return}V&&bn(h,null,p,"beforeUnmount"),U&64?h.type.remove(h,p,y,x,re,w):I&&(A!==et||L>0&&L&64)?O(I,p,y,!1,!0):(A===et&&L&384||!x&&U&16)&&O(P,p,y),w&&Yn(h)}(ee&&(me=N&&N.onVnodeUnmounted)||V)&&Ze(()=>{me&&At(me,p,h),V&&bn(h,null,p,"unmounted")},y)},Yn=h=>{const{type:p,el:y,anchor:w,transition:x}=h;if(p===et){$i(y,w);return}if(p===ss){H(h);return}const A=()=>{i(y),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:N,delayLeave:T}=x,P=()=>N(y,A);T?T(h.el,A,P):P()}else A()},$i=(h,p)=>{let y;for(;h!==p;)y=d(h),i(h),h=y;i(p)},E=(h,p,y)=>{const{bum:w,scope:x,update:A,subTree:N,um:T}=h;w&&ns(w),x.stop(),A&&(A.active=!1,Xe(N,h,p,y)),T&&Ze(T,p),Ze(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},O=(h,p,y,w=!1,x=!1,A=0)=>{for(let N=A;N<h.length;N++)Xe(h[N],p,y,w,x)},R=h=>h.shapeFlag&6?R(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),$=(h,p,y)=>{h==null?p._vnode&&Xe(p._vnode,null,null,!0):_(p._vnode||null,h,p,null,null,null,y),vc(),Gf(),p._vnode=h},re={p:_,um:Xe,m:mt,r:Yn,mt:nt,mc:X,pc:ce,pbc:Me,n:R,o:t};let Ee,G;return e&&([Ee,G]=e(re)),{render:$,hydrate:Ee,createApp:gg($,Ee)}}function wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ud(t,e,n=!1){const r=t.children,i=e.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Zt(i[s]),a.el=o.el),n||ud(o,a))}}function yg(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const bg=t=>t.__isTeleport,et=Symbol(void 0),ol=Symbol(void 0),ai=Symbol(void 0),ss=Symbol(void 0),zr=[];let bt=null;function Ke(t=!1){zr.push(bt=t?null:[])}function wg(){zr.pop(),bt=zr[zr.length-1]||null}let li=1;function Sc(t){li+=t}function Cg(t){return t.dynamicChildren=li>0?bt||rr:null,wg(),li>0&&bt&&bt.push(t),t}function Ye(t,e,n,r,i,s){return Cg(C(t,e,n,r,i,s,!0))}function Zo(t){return t?t.__v_isVNode===!0:!1}function Lr(t,e){return t.type===e.type&&t.key===e.key}const Vs="__vInternal",fd=({key:t})=>t!=null?t:null,os=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||Te(t)||Y(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function C(t,e=null,n=null,r=0,i=null,s=t===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fd(e),ref:e&&os(e),scopeId:Ws,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(al(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),li>0&&!o&&bt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bt.push(l),l}const le=Eg;function Eg(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===rg)&&(t=ai),Zo(t)){const a=mr(t,e,!0);return n&&al(a,n),li>0&&!s&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag|=-2,a}if(Dg(t)&&(t=t.__vccOpts),e){e=kg(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=ke(a)),Ce(l)&&(Bf(l)&&!K(l)&&(l=qe({},l)),e.style=ja(l))}const o=Ue(t)?1:Wp(t)?128:bg(t)?64:Ce(t)?4:Y(t)?2:0;return C(t,e,n,r,i,o,s,!0)}function kg(t){return t?Bf(t)||Vs in t?qe({},t):t:null}function mr(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Ig(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&fd(a),ref:e&&e.ref?n&&i?K(i)?i.concat(os(e)):[i,os(e)]:os(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),el:t.el,anchor:t.anchor}}function lt(t=" ",e=0){return le(ol,null,t,e)}function xg(t,e){const n=le(ss,null,t);return n.staticCount=e,n}function Rt(t){return t==null||typeof t=="boolean"?le(ai):K(t)?le(et,null,t.slice()):typeof t=="object"?Zt(t):le(ol,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function al(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),al(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Vs in e)?e._ctx=yt:i===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),r&64?(n=16,e=[lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ig(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ke([e.class,r.class]));else if(i==="style")e.style=ja([e.style,r.style]);else if(Fs(i)){const s=e[i],o=r[i];o&&s!==o&&!(K(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function At(t,e,n,r=null){kt(t,e,7,[n,r])}const Sg=cd();let Tg=0;function Ag(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Sg,s={uid:Tg++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sd(r,i),emitsOptions:Qf(r,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$p.bind(null,s),t.ce&&t.ce(s),s}let He=null;const dd=()=>He||yt,pr=t=>{He=t,t.scope.on()},Nn=()=>{He&&He.scope.off(),He=null};function hd(t){return t.vnode.shapeFlag&4}let ci=!1;function Pg(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,i=hd(t);ug(t,n,i,e),hg(t,r);const s=i?Rg(t,e):void 0;return ci=!1,s}function Rg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hr(new Proxy(t.ctx,ig));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Og(t):null;pr(t),Sr();const s=on(r,t,0,[t.props,i]);if(Tr(),Nn(),Ef(s)){if(s.then(Nn,Nn),e)return s.then(o=>{Tc(t,o,e)}).catch(o=>{Hs(o,t,0)});t.asyncDep=s}else Tc(t,s,e)}else md(t,e)}function Tc(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=zf(e)),md(t,n)}let Ac;function md(t,e,n){const r=t.type;if(!t.render){if(!e&&Ac&&!r.render){const i=r.template||il(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=qe(qe({isCustomElement:s,delimiters:a},o),l);r.render=Ac(i,c)}}t.render=r.render||Et}pr(t),Sr(),sg(t),Tr(),Nn()}function Ng(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function Og(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ng(t))},slots:t.slots,emit:t.emit,expose:e}}function Ks(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zf(hr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ds)return ds[n](t)}}))}function Dg(t){return Y(t)&&"__vccOpts"in t}const we=(t,e)=>Np(t,e,ci);function Ys(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!K(e)?Zo(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zo(n)&&(n=[n]),le(t,e,n))}const Mg="3.2.41",Lg="http://www.w3.org/2000/svg",In=typeof document<"u"?document:null,Pc=In&&In.createElement("template"),Fg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?In.createElementNS(Lg,t):In.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Pc.innerHTML=r?`<svg>${t}</svg>`:t;const a=Pc.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $g(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ug(t,e,n){const r=t.style,i=Ue(n);if(n&&!i){for(const s in n)ea(r,s,n[s]);if(e&&!Ue(e))for(const s in e)n[s]==null&&ea(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Rc=/\s*!important$/;function ea(t,e,n){if(K(n))n.forEach(r=>ea(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bg(t,e);Rc.test(n)?t.setProperty(Hn(r),n.replace(Rc,""),"important"):t[r]=n}}const Nc=["Webkit","Moz","ms"],bo={};function Bg(t,e){const n=bo[e];if(n)return n;let r=fr(e);if(r!=="filter"&&r in t)return bo[e]=r;r=If(r);for(let i=0;i<Nc.length;i++){const s=Nc[i]+r;if(s in t)return bo[e]=s}return e}const Oc="http://www.w3.org/1999/xlink";function Hg(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Oc,e.slice(6,e.length)):t.setAttributeNS(Oc,e,n);else{const s=Hm(e);n==null||s&&!bf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function jg(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Jn(t,e,n,r){t.addEventListener(e,n,r)}function Wg(t,e,n,r){t.removeEventListener(e,n,r)}function zg(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=Vg(e);if(r){const c=s[e]=Gg(r,i);Jn(t,a,c,l)}else o&&(Wg(t,a,o,l),s[e]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function Vg(t){let e;if(Dc.test(t)){e={};let r;for(;r=t.match(Dc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let wo=0;const Kg=Promise.resolve(),Yg=()=>wo||(Kg.then(()=>wo=0),wo=Date.now());function Gg(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(qg(r,n.value),e,5,[r])};return n.value=t,n.attached=Yg(),n}function qg(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Mc=/^on[a-z]/,Qg=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?$g(t,r,i):e==="style"?Ug(t,n,r):Fs(e)?Wa(e)||zg(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xg(t,e,r,i))?jg(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hg(t,e,r,i))};function Xg(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mc.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mc.test(e)&&Ue(n)?!1:e in t}const Lc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>ns(e,n):e};function Jg(t){t.target.composing=!0}function Fc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ta={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Lc(i);const s=r||i.props&&i.props.type==="number";Jn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Ho(a)),t._assign(a)}),n&&Jn(t,"change",()=>{t.value=t.value.trim()}),e||(Jn(t,"compositionstart",Jg),Jn(t,"compositionend",Fc),Jn(t,"change",Fc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Lc(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Ho(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Zg=["ctrl","shift","alt","meta"],e_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Zg.some(n=>t[`${n}Key`]&&!e.includes(n))},t_=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=e_[e[i]];if(s&&s(n,e))return}return t(n,...r)},n_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},r_=(t,e)=>n=>{if(!("key"in n))return;const r=Hn(n.key);if(e.some(i=>i===r||n_[i]===r))return t(n)},i_=qe({patchProp:Qg},Fg);let $c;function s_(){return $c||($c=_g(i_))}const o_=(...t)=>{const e=s_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=a_(r);if(!i)return;const s=e._component;!Y(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function a_(t){return Ue(t)?document.querySelector(t):t}var l_=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let pd;const Gs=t=>pd=t,gd=Symbol();function na(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vr||(Vr={}));function c_(){const t=Tf(!0),e=t.run(()=>te({}));let n=[],r=[];const i=hr({install(s){Gs(i),i._a=s,s.provide(gd,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!l_?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const _d=()=>{};function Uc(t,e,n,r=_d){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&dd()&&rl(i),i}function qn(t,...e){t.slice().forEach(n=>{n(...e)})}function ra(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];na(i)&&na(r)&&t.hasOwnProperty(n)&&!Te(r)&&!sn(r)?t[n]=ra(i,r):t[n]=r}return t}const u_=Symbol();function f_(t){return!na(t)||!t.hasOwnProperty(u_)}const{assign:en}=Object;function d_(t){return!!(Te(t)&&t.effect)}function h_(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Tp(n.state.value[t]);return en(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=hr(we(()=>{Gs(n);const m=n._s.get(t);return o[d].call(m,m)})),f),{}))}return l=vd(t,c,e,n,r,!0),l.$reset=function(){const f=i?i():{};this.$patch(d=>{en(d,f)})},l}function vd(t,e,n={},r,i,s){let o;const a=en({actions:{}},n),l={deep:!0};let c,u,f=hr([]),d=hr([]),m;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),te({});let _;function b(z){let X;c=u=!1,typeof z=="function"?(z(r.state.value[t]),X={type:Vr.patchFunction,storeId:t,events:m}):(ra(r.state.value[t],z),X={type:Vr.patchObject,payload:z,storeId:t,events:m});const be=_=Symbol();tl().then(()=>{_===be&&(c=!0)}),u=!0,qn(f,X,r.state.value[t])}const v=_d;function k(){o.stop(),f=[],d=[],r._s.delete(t)}function M(z,X){return function(){Gs(r);const be=Array.from(arguments),Me=[],Qe=[];function ot(Le){Me.push(Le)}function qt(Le){Qe.push(Le)}qn(d,{args:be,name:z,store:W,after:ot,onError:qt});let nt;try{nt=X.apply(this&&this.$id===t?this:W,be)}catch(Le){throw qn(Qe,Le),Le}return nt instanceof Promise?nt.then(Le=>(qn(Me,Le),Le)).catch(Le=>(qn(Qe,Le),Promise.reject(Le))):(qn(Me,nt),nt)}}const H={_p:r,$id:t,$onAction:Uc.bind(null,d),$patch:b,$reset:v,$subscribe(z,X={}){const be=Uc(f,z,X.detached,()=>Me()),Me=o.run(()=>ft(()=>r.state.value[t],Qe=>{(X.flush==="sync"?u:c)&&z({storeId:t,type:Vr.direct,events:m},Qe)},en({},l,X)));return be},$dispose:k},W=Ar(H);r._s.set(t,W);const oe=r._e.run(()=>(o=Tf(),o.run(()=>e())));for(const z in oe){const X=oe[z];if(Te(X)&&!d_(X)||sn(X))s||(g&&f_(X)&&(Te(X)?X.value=g[z]:ra(X,g[z])),r.state.value[t][z]=X);else if(typeof X=="function"){const be=M(z,X);oe[z]=be,a.actions[z]=X}}return en(W,oe),en(se(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:z=>{b(X=>{en(X,z)})}}),r._p.forEach(z=>{en(W,o.run(()=>z({store:W,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(W.$state,g),c=!0,u=!0,W}function m_(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=dd();return a=a||c&&Dt(gd),a&&Gs(a),a=pd,a._s.has(r)||(s?vd(r,e,i,a):h_(r,i,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zn=typeof window<"u";function p_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Co(t,e){const n={};for(const r in e){const i=e[r];n[r]=It(i)?i.map(t):t(i)}return n}const Kr=()=>{},It=Array.isArray,g_=/\/$/,__=t=>t.replace(g_,"");function Eo(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=w_(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function v_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function y_(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gr(e.matched[r],n.matched[i])&&yd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!b_(t[n],e[n]))return!1;return!0}function b_(t,e){return It(t)?Hc(t,e):It(e)?Hc(e,t):t===e}function Hc(t,e){return It(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function w_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yr||(Yr={}));function C_(t){if(!t)if(Zn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),__(t)}const E_=/^[^#]+#/;function k_(t,e){return t.replace(E_,"#")+e}function x_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function I_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=x_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jc(t,e){return(history.state?history.state.position-e:-1)+t}const ia=new Map;function S_(t,e){ia.set(t,e)}function T_(t){const e=ia.get(t);return ia.delete(t),e}let A_=()=>location.protocol+"//"+location.host;function bd(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Bc(l,"")}return Bc(n,t)+r+i}function P_(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const m=bd(t,location),g=n.value,_=e.value;let b=0;if(d){if(n.value=m,e.value=d,o&&o===g){o=null;return}b=_?d.position-_.position:0}else r(m);i.forEach(v=>{v(n.value,g,{delta:b,type:ui.pop,direction:b?b>0?Yr.forward:Yr.back:Yr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const m=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(ae({},d.state,{scroll:qs()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Wc(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?qs():null}}function R_(t){const{history:e,location:n}=window,r={value:bd(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:A_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(l,c){const u=ae({},e.state,Wc(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:qs()});s(u.current,u,!0);const f=ae({},Wc(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function N_(t){t=C_(t);const e=R_(t),n=P_(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ae({location:"",base:t,go:r,createHref:k_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function O_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),N_(t)}function D_(t){return typeof t=="string"||t&&typeof t=="object"}function wd(t){return typeof t=="string"||typeof t=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cd=Symbol("");var zc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zc||(zc={}));function _r(t,e){return ae(new Error,{type:t,[Cd]:!0},e)}function Ft(t,e){return t instanceof Error&&Cd in t&&(e==null||!!(t.type&e))}const Vc="[^/]+?",M_={sensitive:!1,strict:!1,start:!0,end:!0},L_=/[.+*?^${}()[\]/\\]/g;function F_(t,e){const n=ae({},M_,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(L_,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:_,optional:b,regexp:v}=d;s.push({name:g,repeatable:_,optional:b});const k=v||Vc;if(k!==Vc){m+=10;try{new RegExp(`(${k})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${g}" (${k}): `+H.message)}}let M=_?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(M=b&&c.length<2?`(?:/${M})`:"/"+M),b&&(M+="?"),i+=M,m+=20,b&&(m+=-8),_&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=s[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:_,optional:b}=m,v=g in c?c[g]:"";if(It(v)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const k=It(v)?v.join("/"):v;if(!k)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function $_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function U_(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=$_(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Kc(r))return 1;if(Kc(i))return-1}return i.length-r.length}function Kc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const B_={type:0,value:""},H_=/[a-zA-Z0-9_]/;function j_(t){if(!t)return[[]];if(t==="/")return[[B_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:H_.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function W_(t,e,n){const r=F_(j_(t.path),n),i=ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function z_(t,e){const n=[],r=new Map;e=qc({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,d){const m=!d,g=V_(u);g.aliasOf=d&&d.record;const _=qc(e,u),b=[g];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of M)b.push(ae({},g,{components:d?d.record.components:g.components,path:H,aliasOf:d?d.record:g}))}let v,k;for(const M of b){const{path:H}=M;if(f&&H[0]!=="/"){const W=f.record.path,oe=W[W.length-1]==="/"?"":"/";M.path=f.record.path+(H&&oe+H)}if(v=W_(M,f,_),d?d.alias.push(v):(k=k||v,k!==v&&k.alias.push(v),m&&u.name&&!Gc(v)&&o(u.name)),g.children){const W=g.children;for(let oe=0;oe<W.length;oe++)s(W[oe],v,d&&d.children[oe])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return k?()=>{o(k)}:Kr}function o(u){if(wd(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&U_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Ed(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Gc(u)&&r.set(u.record.name,u)}function c(u,f){let d,m={},g,_;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw _r(1,{location:u});_=d.record.name,m=ae(Yc(f.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Yc(u.params,d.keys.map(k=>k.name))),g=d.stringify(m)}else if("path"in u)g=u.path,d=n.find(k=>k.re.test(g)),d&&(m=d.parse(g),_=d.record.name);else{if(d=f.name?r.get(f.name):n.find(k=>k.re.test(f.path)),!d)throw _r(1,{location:u,currentLocation:f});_=d.record.name,m=ae({},f.params,u.params),g=d.stringify(m)}const b=[];let v=d;for(;v;)b.unshift(v.record),v=v.parent;return{name:_,path:g,params:m,matched:b,meta:Y_(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Yc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function V_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:K_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function K_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Gc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Y_(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function qc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ed(t,e){return e.children.some(n=>n===t||Ed(t,n))}const kd=/#/g,G_=/&/g,q_=/\//g,Q_=/=/g,X_=/\?/g,xd=/\+/g,J_=/%5B/g,Z_=/%5D/g,Id=/%5E/g,ev=/%60/g,Sd=/%7B/g,tv=/%7C/g,Td=/%7D/g,nv=/%20/g;function ll(t){return encodeURI(""+t).replace(tv,"|").replace(J_,"[").replace(Z_,"]")}function rv(t){return ll(t).replace(Sd,"{").replace(Td,"}").replace(Id,"^")}function sa(t){return ll(t).replace(xd,"%2B").replace(nv,"+").replace(kd,"%23").replace(G_,"%26").replace(ev,"`").replace(Sd,"{").replace(Td,"}").replace(Id,"^")}function iv(t){return sa(t).replace(Q_,"%3D")}function sv(t){return ll(t).replace(kd,"%23").replace(X_,"%3F")}function ov(t){return t==null?"":sv(t).replace(q_,"%2F")}function ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function av(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(xd," "),o=s.indexOf("="),a=ms(o<0?s:s.slice(0,o)),l=o<0?null:ms(s.slice(o+1));if(a in e){let c=e[a];It(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Qc(t){let e="";for(let n in t){const r=t[n];if(n=iv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(It(r)?r.map(s=>s&&sa(s)):[r&&sa(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function lv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=It(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const cv=Symbol(""),Xc=Symbol(""),Qs=Symbol(""),Ad=Symbol(""),oa=Symbol("");function Fr(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function tn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(_r(4,{from:n,to:e})):f instanceof Error?a(f):D_(f)?a(_r(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function ko(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(uv(a)){const c=(a.__vccOpts||a)[e];c&&i.push(tn(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=p_(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&tn(d,n,r,s,o)()}))}}return i}function uv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jc(t){const e=Dt(Qs),n=Dt(Ad),r=we(()=>e.resolve(J(t.to))),i=we(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(gr.bind(null,u));if(d>-1)return d;const m=Zc(l[c-2]);return c>1&&Zc(u)===m&&f[f.length-1].path!==m?f.findIndex(gr.bind(null,l[c-2])):d}),s=we(()=>i.value>-1&&hv(n.params,r.value.params)),o=we(()=>i.value>-1&&i.value===n.matched.length-1&&yd(n.params,r.value.params));function a(l={}){return dv(l)?e[J(t.replace)?"replace":"push"](J(t.to)).catch(Kr):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const fv=Ii({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jc,setup(t,{slots:e}){const n=Ar(Jc(t)),{options:r}=Dt(Qs),i=we(()=>({[eu(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eu(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Ys("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),ct=fv;function dv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hv(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!It(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Zc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eu=(t,e,n)=>t!=null?t:e!=null?e:n,mv=Ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(oa),i=we(()=>t.route||r.value),s=Dt(Xc,0),o=we(()=>{let c=J(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=we(()=>i.value.matched[o.value]);rs(Xc,we(()=>o.value+1)),rs(cv,a),rs(oa,i);const l=te();return ft(()=>[l.value,a.value,t.name],([c,u,f],[d,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!gr(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return tu(n.default,{Component:d,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,b=Ys(d,ae({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return tu(n.default,{Component:b,route:c})||b}}});function tu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cl=mv;function pv(t){const e=z_(t.routes,t),n=t.parseQuery||av,r=t.stringifyQuery||Qc,i=t.history,s=Fr(),o=Fr(),a=Fr(),l=xp(Xt);let c=Xt;Zn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Co.bind(null,E=>""+E),f=Co.bind(null,ov),d=Co.bind(null,ms);function m(E,O){let R,$;return wd(E)?(R=e.getRecordMatcher(E),$=O):$=E,e.addRoute($,R)}function g(E){const O=e.getRecordMatcher(E);O&&e.removeRoute(O)}function _(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function v(E,O){if(O=ae({},O||l.value),typeof E=="string"){const h=Eo(n,E,O.path),p=e.resolve({path:h.path},O),y=i.createHref(h.fullPath);return ae(h,p,{params:d(p.params),hash:ms(h.hash),redirectedFrom:void 0,href:y})}let R;if("path"in E)R=ae({},E,{path:Eo(n,E.path,O.path).path});else{const h=ae({},E.params);for(const p in h)h[p]==null&&delete h[p];R=ae({},E,{params:f(E.params)}),O.params=f(O.params)}const $=e.resolve(R,O),re=E.hash||"";$.params=u(d($.params));const Ee=v_(r,ae({},E,{hash:rv(re),path:$.path})),G=i.createHref(Ee);return ae({fullPath:Ee,hash:re,query:r===Qc?lv(E.query):E.query||{}},$,{redirectedFrom:void 0,href:G})}function k(E){return typeof E=="string"?Eo(n,E,l.value.path):ae({},E)}function M(E,O){if(c!==E)return _r(8,{from:O,to:E})}function H(E){return z(E)}function W(E){return H(ae(k(E),{replace:!0}))}function oe(E){const O=E.matched[E.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let $=typeof R=="function"?R(E):R;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=k($):{path:$},$.params={}),ae({query:E.query,hash:E.hash,params:"path"in $?{}:E.params},$)}}function z(E,O){const R=c=v(E),$=l.value,re=E.state,Ee=E.force,G=E.replace===!0,h=oe(R);if(h)return z(ae(k(h),{state:typeof h=="object"?ae({},re,h.state):re,force:Ee,replace:G}),O||R);const p=R;p.redirectedFrom=O;let y;return!Ee&&y_(r,$,R)&&(y=_r(16,{to:p,from:$}),yn($,$,!0,!1)),(y?Promise.resolve(y):be(p,$)).catch(w=>Ft(w)?Ft(w,2)?w:ht(w):he(w,p,$)).then(w=>{if(w){if(Ft(w,2))return z(ae({replace:G},k(w.to),{state:typeof w.to=="object"?ae({},re,w.to.state):re,force:Ee}),O||p)}else w=Qe(p,$,!0,G,re);return Me(p,$,w),w})}function X(E,O){const R=M(E,O);return R?Promise.reject(R):Promise.resolve()}function be(E,O){let R;const[$,re,Ee]=gv(E,O);R=ko($.reverse(),"beforeRouteLeave",E,O);for(const h of $)h.leaveGuards.forEach(p=>{R.push(tn(p,E,O))});const G=X.bind(null,E,O);return R.push(G),Qn(R).then(()=>{R=[];for(const h of s.list())R.push(tn(h,E,O));return R.push(G),Qn(R)}).then(()=>{R=ko(re,"beforeRouteUpdate",E,O);for(const h of re)h.updateGuards.forEach(p=>{R.push(tn(p,E,O))});return R.push(G),Qn(R)}).then(()=>{R=[];for(const h of E.matched)if(h.beforeEnter&&!O.matched.includes(h))if(It(h.beforeEnter))for(const p of h.beforeEnter)R.push(tn(p,E,O));else R.push(tn(h.beforeEnter,E,O));return R.push(G),Qn(R)}).then(()=>(E.matched.forEach(h=>h.enterCallbacks={}),R=ko(Ee,"beforeRouteEnter",E,O),R.push(G),Qn(R))).then(()=>{R=[];for(const h of o.list())R.push(tn(h,E,O));return R.push(G),Qn(R)}).catch(h=>Ft(h,8)?h:Promise.reject(h))}function Me(E,O,R){for(const $ of a.list())$(E,O,R)}function Qe(E,O,R,$,re){const Ee=M(E,O);if(Ee)return Ee;const G=O===Xt,h=Zn?history.state:{};R&&($||G?i.replace(E.fullPath,ae({scroll:G&&h&&h.scroll},re)):i.push(E.fullPath,re)),l.value=E,yn(E,O,R,G),ht()}let ot;function qt(){ot||(ot=i.listen((E,O,R)=>{if(!$i.listening)return;const $=v(E),re=oe($);if(re){z(ae(re,{replace:!0}),$).catch(Kr);return}c=$;const Ee=l.value;Zn&&S_(jc(Ee.fullPath,R.delta),qs()),be($,Ee).catch(G=>Ft(G,12)?G:Ft(G,2)?(z(G.to,$).then(h=>{Ft(h,20)&&!R.delta&&R.type===ui.pop&&i.go(-1,!1)}).catch(Kr),Promise.reject()):(R.delta&&i.go(-R.delta,!1),he(G,$,Ee))).then(G=>{G=G||Qe($,Ee,!1),G&&(R.delta&&!Ft(G,8)?i.go(-R.delta,!1):R.type===ui.pop&&Ft(G,20)&&i.go(-1,!1)),Me($,Ee,G)}).catch(Kr)}))}let nt=Fr(),Le=Fr(),Ae;function he(E,O,R){ht(E);const $=Le.list();return $.length?$.forEach(re=>re(E,O,R)):console.error(E),Promise.reject(E)}function ce(){return Ae&&l.value!==Xt?Promise.resolve():new Promise((E,O)=>{nt.add([E,O])})}function ht(E){return Ae||(Ae=!E,qt(),nt.list().forEach(([O,R])=>E?R(E):O()),nt.reset()),E}function yn(E,O,R,$){const{scrollBehavior:re}=t;if(!Zn||!re)return Promise.resolve();const Ee=!R&&T_(jc(E.fullPath,0))||($||!R)&&history.state&&history.state.scroll||null;return tl().then(()=>re(E,O,Ee)).then(G=>G&&I_(G)).catch(G=>he(G,E,O))}const mt=E=>i.go(E);let Xe;const Yn=new Set,$i={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:b,getRoutes:_,resolve:v,options:t,push:H,replace:W,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:ce,install(E){const O=this;E.component("RouterLink",ct),E.component("RouterView",cl),E.config.globalProperties.$router=O,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>J(l)}),Zn&&!Xe&&l.value===Xt&&(Xe=!0,H(i.location).catch(re=>{}));const R={};for(const re in Xt)R[re]=we(()=>l.value[re]);E.provide(Qs,O),E.provide(Ad,Ar(R)),E.provide(oa,l);const $=E.unmount;Yn.add(E),E.unmount=function(){Yn.delete(E),Yn.size<1&&(c=Xt,ot&&ot(),ot=null,l.value=Xt,Xe=!1,Ae=!1),$()}}};return $i}function Qn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gv(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>gr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>gr(c,l))||i.push(l))}return[n,r,i]}function Pd(){return Dt(Qs)}const St=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},_v={},vv={class:"footer"},yv=xg('<hr style="width:100%;margin-top:20px;"><h4>\u6B64\u7DB2\u9801\u5716\u7247\u7D20\u6750\u53D6\u81EA\uFF1A</h4><p>\u4EBA\u7269\u5716\u7247\uFF1A\u30B8\u30E5\u30A8\u30EB\u30BB\u30A4\u30D0\u30FCFREE <a href="http://www.jewel-s.jp/" target="_blank">http://www.jewel-s.jp/</a></p><p>\u80CC\u666F\u5716\u7247\uFF1A<a href="https://pngtree.com/free-backgrounds" target="_blank">pngtree, </a><a href="https://www.pexels.com/zh-tw/" target="_blank"> Pexels, </a><a href="https://www.freepik.com/" target="_blank">Freepik</a></p>',4),bv=[yv];function wv(t,e){return Ke(),Ye("div",vv,bv)}const Cv=St(_v,[["render",wv]]),Gr=[{number:"001",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"002",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"003",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"004",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"005",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"006",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"007",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"008",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"009",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"010",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"011",trait:"\u6BC0\u6EC5",attack:15,awake:!1},{number:"012",trait:"\u6BC0\u6EC5",attack:20,awake:!0},{number:"013",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"014",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"015",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"016",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"017",trait:"\u52D5\u76EA",attack:10,awake:!1},{number:"018",trait:"\u52D5\u76EA",attack:15,awake:!0},{number:"019",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"020",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"021",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"022",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"023",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"024",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"025",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"026",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"027",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"028",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"029",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"030",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"031",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"032",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"033",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"034",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"035",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"036",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"037",trait:"\u52D5\u76EA",attack:10,awake:!1},{number:"038",trait:"\u52D5\u76EA",attack:15,awake:!0},{number:"050",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"051",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"052",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"053",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"067",trait:"\u52D5\u76EA",attack:20,awake:!1},{number:"068",trait:"\u52D5\u76EA",attack:25,awake:!0},{number:"069",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"070",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"071",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"072",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"073",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"074",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"075",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"076",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"077",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"078",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"079",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"080",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"081",trait:"\u6BC0\u6EC5",attack:15,awake:!1},{number:"082",trait:"\u6BC0\u6EC5",attack:20,awake:!0},{number:"083",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"084",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"085",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"086",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"087",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"088",trait:"\u5FAA\u74B0",attack:25,awake:!0},{number:"089",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"090",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"091",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"092",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"093",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"094",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"095",trait:"\u52D5\u76EA",attack:15,awake:!1},{number:"096",trait:"\u52D5\u76EA",attack:20,awake:!0},{number:"097",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"098",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"099",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"100",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"101",trait:"\u548C\u8AE7",attack:20,awake:!1},{number:"102",trait:"\u548C\u8AE7",attack:25,awake:!0},{number:"103",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"104",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"105",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"106",trait:"\u548C\u8AE7",attack:15,awake:!1},{number:"107",trait:"\u548C\u8AE7",attack:20,awake:!0},{number:"108",trait:"\u5FAA\u74B0",attack:10,awake:!1},{number:"109",trait:"\u5FAA\u74B0",attack:15,awake:!0},{number:"110",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"111",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"112",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"113",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"114",trait:"\u548C\u8AE7",attack:10,awake:!1},{number:"115",trait:"\u548C\u8AE7",attack:15,awake:!0},{number:"119",trait:"\u5FAA\u74B0",attack:15,awake:!1},{number:"120",trait:"\u5FAA\u74B0",attack:20,awake:!0},{number:"121",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"122",trait:"\u5FAA\u74B0",attack:25,awake:!0},{number:"123",trait:"\u52D5\u76EA",attack:20,awake:!1},{number:"124",trait:"\u52D5\u76EA",attack:25,awake:!0},{number:"125",trait:"\u5FAA\u74B0",attack:20,awake:!1},{number:"126",trait:"\u5FAA\u74B0",attack:25,awake:!0}],vn=m_("counter",()=>{const t=te(""),e=te({account:"",team:[],havecard:[],remainCard:[]}),n=te({img:"304"}),r=te({img:"305"}),i=te(Gr),s=te(0),o=te(0),a=te(0),l=te(0),c=te(0),u=te(!1);return{drama:t,user:e,Profile:n,ProfileCover:r,Char:i,SummonPoints:s,AwakePoints:o,pvp:a,win:l,lose:c,chatopen:u}});/**
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
 */const Rd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw Pr(e)},Pr=function(t){return new Error("Firebase Database ("+Rd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Nd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ev=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ev(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),c!==64){const m=a<<4&240|c>>2;if(r.push(m),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Od=function(t){const e=Nd(t);return ul.encodeByteArray(e,!0)},ps=function(t){return Od(t).replace(/\./g,"")},aa=function(t){try{return ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kv(t){return Dd(void 0,t)}function Dd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xv(n)||(t[n]=Dd(t[n],e[n]));return t}function xv(t){return t!=="__proto__"}/**
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
 */function Iv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Iv())}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ld(){return Rd.NODE_ADMIN===!0}function Tv(){return typeof indexedDB=="object"}function Av(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rv=()=>Pv().__FIREBASE_DEFAULTS__,Nv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ov=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aa(t[1]);return e&&JSON.parse(e)},Fd=()=>{try{return Rv()||Nv()||Ov()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dv=t=>{var e,n;return(n=(e=Fd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Mv=t=>{const e=Dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lv=()=>{var t;return(t=Fd())===null||t===void 0?void 0:t.config};/**
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
 */class Si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ps(JSON.stringify(n)),ps(JSON.stringify(o)),a].join(".")}/**
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
 */const $v="FirebaseError";class Ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$v,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$d.prototype.create)}}class $d{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Uv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ti(i,a,r)}}function Uv(t,e){return t.replace(Bv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bv=/\{\$([^}]+)}/g;/**
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
 */function fi(t){return JSON.parse(t)}function Oe(t){return JSON.stringify(t)}/**
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
 */const Ud=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fi(aa(s[0])||""),n=fi(aa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Hv=function(t){const e=Ud(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jv=function(t){const e=Ud(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gs(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function la(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ru(s)&&ru(o)){if(!la(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ru(t){return t!==null&&typeof t=="object"}/**
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
 */function Wv(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class zv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Xs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Vv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Js=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function zn(t){return t&&t._delegate?t._delegate:t}class di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class Kv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Si;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gv(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yv(t){return t===En?void 0:t}function Gv(t){return t.instantiationMode==="EAGER"}/**
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
 */class qv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Qv={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Xv=ge.INFO,Jv={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Zv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Jv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=Xv,this._logHandler=Zv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const ey=(t,e)=>e.some(n=>t instanceof n);let iu,su;function ty(){return iu||(iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ny(){return su||(su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hd=new WeakMap,ca=new WeakMap,jd=new WeakMap,xo=new WeakMap,fl=new WeakMap;function ry(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hd.set(n,t)}).catch(()=>{}),fl.set(e,t),e}function iy(t){if(ca.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ca.set(t,e)}let ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sy(t){ua=t(ua)}function oy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Io(this),e,...n);return jd.set(r,e.sort?e.sort():[e]),an(r)}:ny().includes(t)?function(...e){return t.apply(Io(this),e),an(Hd.get(this))}:function(...e){return an(t.apply(Io(this),e))}}function ay(t){return typeof t=="function"?oy(t):(t instanceof IDBTransaction&&iy(t),ey(t,ty())?new Proxy(t,ua):t)}function an(t){if(t instanceof IDBRequest)return ry(t);if(xo.has(t))return xo.get(t);const e=ay(t);return e!==t&&(xo.set(t,e),fl.set(e,t)),e}const Io=t=>fl.get(t);function ly(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=an(o);return r&&o.addEventListener("upgradeneeded",l=>{r(an(o.result),l.oldVersion,l.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const cy=["get","getKey","getAll","getAllKeys","count"],uy=["put","add","delete","clear"],So=new Map;function ou(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cy.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return So.set(e,s),s}sy(t=>({...t,get:(e,n,r)=>ou(e,n)||t.get(e,n,r),has:(e,n)=>!!ou(e,n)||t.has(e,n)}));/**
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
 */class fy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fa="@firebase/app",au="0.8.3";/**
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
 */const Mn=new Bd("@firebase/app"),hy="@firebase/app-compat",my="@firebase/analytics-compat",py="@firebase/analytics",gy="@firebase/app-check-compat",_y="@firebase/app-check",vy="@firebase/auth",yy="@firebase/auth-compat",by="@firebase/database",wy="@firebase/database-compat",Cy="@firebase/functions",Ey="@firebase/functions-compat",ky="@firebase/installations",xy="@firebase/installations-compat",Iy="@firebase/messaging",Sy="@firebase/messaging-compat",Ty="@firebase/performance",Ay="@firebase/performance-compat",Py="@firebase/remote-config",Ry="@firebase/remote-config-compat",Ny="@firebase/storage",Oy="@firebase/storage-compat",Dy="@firebase/firestore",My="@firebase/firestore-compat",Ly="firebase",Fy="9.13.0";/**
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
 */const da="[DEFAULT]",$y={[fa]:"fire-core",[hy]:"fire-core-compat",[py]:"fire-analytics",[my]:"fire-analytics-compat",[_y]:"fire-app-check",[gy]:"fire-app-check-compat",[vy]:"fire-auth",[yy]:"fire-auth-compat",[by]:"fire-rtdb",[wy]:"fire-rtdb-compat",[Cy]:"fire-fn",[Ey]:"fire-fn-compat",[ky]:"fire-iid",[xy]:"fire-iid-compat",[Iy]:"fire-fcm",[Sy]:"fire-fcm-compat",[Ty]:"fire-perf",[Ay]:"fire-perf-compat",[Py]:"fire-rc",[Ry]:"fire-rc-compat",[Ny]:"fire-gcs",[Oy]:"fire-gcs-compat",[Dy]:"fire-fst",[My]:"fire-fst-compat","fire-js":"fire-js",[Ly]:"fire-js-all"};/**
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
 */const _s=new Map,ha=new Map;function Uy(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(ha.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,t);for(const n of _s.values())Uy(n,t);return!0}function By(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Hy={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ln=new $d("app","Firebase",Hy);/**
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
 */class jy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Wy=Fy;function Zs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=Lv()),!n)throw ln.create("no-options");const s=_s.get(i);if(s){if(la(n,s.options)&&la(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new qv(i);for(const l of ha.values())o.addComponent(l);const a=new jy(n,r,o);return _s.set(i,a),a}function zy(t=da){const e=_s.get(t);if(!e&&t===da)return Zs();if(!e)throw ln.create("no-app",{appName:t});return e}function or(t,e,n){var r;let i=(r=$y[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(a.join(" "));return}vs(new di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vy="firebase-heartbeat-database",Ky=1,hi="firebase-heartbeat-store";let To=null;function Wd(){return To||(To=ly(Vy,Ky,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),To}async function Yy(t){var e;try{return(await Wd()).transaction(hi).objectStore(hi).get(zd(t))}catch(n){if(n instanceof Ti)Mn.warn(n.message);else{const r=ln.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Mn.warn(r.message)}}}async function lu(t,e){var n;try{const i=(await Wd()).transaction(hi,"readwrite");return await i.objectStore(hi).put(e,zd(t)),i.done}catch(r){if(r instanceof Ti)Mn.warn(r.message);else{const i=ln.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Mn.warn(i.message)}}}function zd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Gy=1024,qy=30*24*60*60*1e3;class Qy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cu(),{heartbeatsToSend:n,unsentEntries:r}=Xy(this._heartbeatsCache.heartbeats),i=ps(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cu(){return new Date().toISOString().substring(0,10)}function Xy(t,e=Gy){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uu(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tv()?Av().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uu(t){return ps(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Zy(t){vs(new di("platform-logger",e=>new fy(e),"PRIVATE")),vs(new di("heartbeat",e=>new Qy(e),"PRIVATE")),or(fa,au,t),or(fa,au,"esm2017"),or("fire-js","")}Zy("");var eb="firebase",tb="9.13.0";/**
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
 */or(eb,tb,"app");const fu="@firebase/database",du="0.13.10";/**
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
 */let Vd="";function nb(t){Vd=t}/**
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
 */class rb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ib{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Kd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rb(e)}}catch{}return new ib},Tn=Kd("localStorage"),ma=Kd("sessionStorage");/**
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
 */const ar=new Bd("@firebase/database"),sb=function(){let t=1;return function(){return t++}}(),Yd=function(t){const e=Vv(t),n=new zv;n.update(e);const r=n.digest();return ul.encodeByteArray(r)},Ai=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ai.apply(null,r):typeof r=="object"?e+=Oe(r):e+=r,e+=" "}return e};let On=null,hu=!0;const ob=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ar.logLevel=ge.VERBOSE,On=ar.log.bind(ar),e&&ma.set("logging_enabled",!0)):typeof t=="function"?On=t:(On=null,ma.remove("logging_enabled"))},Be=function(...t){if(hu===!0&&(hu=!1,On===null&&ma.get("logging_enabled")===!0&&ob(!0)),On){const e=Ai.apply(null,t);On(e)}},Pi=function(t){return function(...e){Be(t,...e)}},pa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ai(...t);ar.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ai(...t)}`;throw ar.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Ai(...t);ar.warn(e)},ab=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yr="[MIN_NAME]",Ln="[MAX_NAME]",Vn=function(t,e){if(t===e)return 0;if(t===yr||e===Ln)return-1;if(e===yr||t===Ln)return 1;{const n=mu(t),r=mu(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cb=function(t,e){return t===e?0:t<e?-1:1},$r=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Oe(e))},hl=function(t){if(typeof t!="object"||t===null)return Oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Oe(e[r]),n+=":",n+=hl(t[e[r]]);return n+="}",n},Gd=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const qd=function(t){S(!dl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},ub=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function db(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const hb=new RegExp("^-?(0*)\\d{1,10}$"),mb=-2147483648,pb=2147483647,mu=function(t){if(hb.test(t)){const e=Number(t);if(e>=mb&&e<=pb)return e}return null},Rr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},gb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class _b{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class lr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lr.OWNER="owner";/**
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
 */const ml="5",Qd="v",Xd="s",Jd="r",Zd="f",eh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,th="ls",nh="p",ga="ac",rh="websocket",ih="long_polling";/**
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
 */class sh{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function oh(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===rh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ih)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yb(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class bb{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kv(this.counters_)}}/**
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
 */const Ao={},Po={};function pl(t){const e=t.toString();return Ao[e]||(Ao[e]=new bb),Ao[e]}function wb(t,e){const n=t.toString();return Po[n]||(Po[n]=e()),Po[n]}/**
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
 */class Cb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Rr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pu="start",Eb="close",kb="pLPCommand",xb="pRTLPCB",ah="id",lh="pw",ch="ser",Ib="cb",Sb="seg",Tb="ts",Ab="d",Pb="dframe",uh=1870,fh=30,Rb=uh-fh,Nb=25e3,Ob=3e4;class er{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pi(e),this.stats_=pl(n),this.urlFn=l=>(this.appCheckToken&&(l[ga]=this.appCheckToken),oh(n,ih,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ob)),lb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gl((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===pu)this.id=a,this.password=l;else if(o===Eb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[pu]="t",r[ch]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Ib]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Qd]=ml,this.transportSessionId&&(r[Xd]=this.transportSessionId),this.lastSessionId&&(r[th]=this.lastSessionId),this.applicationId&&(r[nh]=this.applicationId),this.appCheckToken&&(r[ga]=this.appCheckToken),typeof location<"u"&&location.hostname&&eh.test(location.hostname)&&(r[Jd]=Zd);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){er.forceAllow_=!0}static forceDisallow(){er.forceDisallow_=!0}static isAvailable(){return er.forceAllow_?!0:!er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ub()&&!fb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Od(n),i=Gd(r,Rb);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Pb]="t",r[ah]=e,r[lh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gl{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sb(),window[kb+this.uniqueCallbackIdentifier]=e,window[xb+this.uniqueCallbackIdentifier]=n,this.myIFrame=gl.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Be("frame writing exception"),a.stack&&Be(a.stack),Be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ah]=this.myID,e[lh]=this.myPW,e[ch]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fh+r.length<=uh;){const o=this.pendingSegs.shift();r=r+"&"+Sb+i+"="+o.seg+"&"+Tb+i+"="+o.ts+"&"+Ab+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Nb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Db=16384,Mb=45e3;let ys=null;typeof MozWebSocket<"u"?ys=MozWebSocket:typeof WebSocket<"u"&&(ys=WebSocket);class _t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pi(this.connId),this.stats_=pl(n),this.connURL=_t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Qd]=ml,typeof location<"u"&&location.hostname&&eh.test(location.hostname)&&(o[Jd]=Zd),n&&(o[Xd]=n),r&&(o[th]=r),i&&(o[ga]=i),s&&(o[nh]=s),oh(e,rh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tn.set("previous_websocket_failure",!0);try{let r;Ld(),this.mySock=new ys(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ys!==null&&!_t.forceDisallow_}static previouslyFailed(){return Tn.isInMemoryStorage||Tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gd(n,Db);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class mi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[er,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of mi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);mi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mi.globalTransportInitialized_=!1;/**
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
 */const Lb=6e4,Fb=5e3,$b=10*1024,Ub=100*1024,Ro="t",gu="d",Bb="s",_u="r",Hb="e",vu="o",yu="a",bu="n",wu="p",jb="h";class Wb{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pi("c:"+this.id+":"),this.transportManager_=new mi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ub?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$b?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ro in e){const n=e[Ro];n===yu?this.upgradeIfSecondaryHealthy_():n===_u?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$r("t",e),r=$r("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$r("t",e),r=$r("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$r(Ro,e);if(gu in e){const r=e[gu];if(n===jb)this.onHandshake_(r);else if(n===bu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Bb?this.onConnectionShutdown_(r):n===_u?this.onReset_(r):n===Hb?pa("Server Error: "+r):n===vu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ml!==r&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class dh{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class hh{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bs extends hh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bs}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Cu=32,Eu=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new fe("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function dn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function _l(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function mh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function Ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=q(t),r=q(e);if(n===null)return e;if(n===r)return Ve(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vb(t,e){const n=pi(t,0),r=pi(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Vn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function vl(t,e){if(dn(t)!==dn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(dn(t)>dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Kb{constructor(e,n){this.errorPrefix_=n,this.parts_=pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Js(this.parts_[r]);ph(this)}}function Yb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Js(e),ph(t)}function Gb(t){const e=t.parts_.pop();t.byteLength_-=Js(e),t.parts_.length>0&&(t.byteLength_-=1)}function ph(t){if(t.byteLength_>Eu)throw new Error(t.errorPrefix_+"has a key path longer than "+Eu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cu+") or object contains a cycle "+kn(t))}function kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yl extends hh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yl}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ur=1e3,qb=60*5*1e3,ku=30*1e3,Qb=1.3,Xb=3e4,Jb="server_kill",xu=3;class Bt extends dh{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=Pi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ur,this.maxReconnectDelay_=qb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ld())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Oe(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Si,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=vr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ku)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Hv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pa("Unrecognized action received from server: "+Oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ur,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ur,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xb&&(this.reconnectDelay_=Ur),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new Wb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Ge(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jb)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ge(f),l())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nu(this.interruptReasons_)&&(this.reconnectDelay_=Ur,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>hl(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xu&&(this.reconnectDelay_=ku,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vd.replace(/\./g,"-")]=1,Md()?e["framework.cordova"]=1:Sv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bs.getInstance().currentlyOnline();return nu(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
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
 */class eo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(yr,e),i=new Q(yr,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
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
 */let zi;class gh extends eo{static get __EMPTY_NODE(){return zi}static set __EMPTY_NODE(e){zi=e}compare(e,n){return Vn(e.name,n.name)}isDefinedOn(e){throw Pr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Ln,zi)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,zi)}toString(){return".key"}}const cr=new gh;/**
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
 */class Vi{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:$e.RED,this.left=i!=null?i:tt.EMPTY_NODE,this.right=s!=null?s:tt.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class Zb{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tt{constructor(e,n=tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vi(this.root_,null,this.comparator_,!0,e)}}tt.EMPTY_NODE=new Zb;/**
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
 */function e0(t,e){return Vn(t.name,e.name)}function bl(t,e){return Vn(t,e)}/**
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
 */let _a;function t0(t){_a=t}const _h=function(t){return typeof t=="number"?"number:"+qd(t):"string:"+t},vh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else S(t===_a||t.isEmpty(),"priority of unexpected type.");S(t===_a||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Iu;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vh(this.priorityNode_)}static set __childrenNodeConstructor(e){Iu=e}static get __childrenNodeConstructor(){return Iu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:q(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_h(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qd(this.value_):e+=this.value_,this.lazyHash_=Yd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),s=Fe.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yh,bh;function n0(t){yh=t}function r0(t){bh=t}class i0 extends eo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Ln,new Fe("[PRIORITY-POST]",bh))}makePost(e,n){const r=yh(e);return new Q(n,new Fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new i0;/**
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
 */const s0=Math.log(2);class o0{constructor(e){const n=s=>parseInt(Math.log(s)/s0,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ws=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new $e(d,f.node,$e.BLACK,null,null);{const m=parseInt(u/2,10)+l,g=i(l,m),_=i(m+1,c);return f=t[m],d=n?n(f):f,new $e(d,f.node,$e.BLACK,g,_)}},s=function(l){let c=null,u=null,f=t.length;const d=function(g,_){const b=f-g,v=f;f-=g;const k=i(b+1,v),M=t[b],H=n?n(M):M;m(new $e(H,M.node,_,null,k))},m=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));_?d(b,$e.BLACK):(d(b,$e.BLACK),d(b,$e.RED))}return u},o=new o0(t.length),a=s(o);return new tt(r||e,a)};/**
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
 */let No;const Xn={};class Ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Xn&&Se,"ChildrenNode.ts has not been loaded"),No=No||new Ut({".priority":Xn},{".priority":Se}),No}get(e){const n=vr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tt?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ws(r,e.getCompare()):a=Xn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ut(u,c)}addToIndexes(e,n){const r=gs(this.indexes_,(i,s)=>{const o=vr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Xn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ws(a,o.getCompare())}else return Xn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=gs(this.indexes_,i=>{if(i===Xn)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
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
 */let Br;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Br||(Br=new j(new tt(bl),null,Ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Br}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Br:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Br:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=q(e);if(r===null)return n;{S(q(e)!==".priority"||dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_h(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Yd(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ri?-1:0}withIndex(e){if(e===cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class a0 extends j{constructor(){super(new tt(bl),j.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ri=new a0;Object.defineProperties(Q,{MIN:{value:new Q(yr,j.EMPTY_NODE)},MAX:{value:new Q(Ln,Ri)}});gh.__EMPTY_NODE=j.EMPTY_NODE;Fe.__childrenNodeConstructor=j;t0(Ri);r0(Ri);/**
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
 */const l0=!0;function Ne(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,Ne(e))}if(!(t instanceof Array)&&l0){const n=[];let r=!1;if(je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=ws(n,e0,o=>o.name,bl);if(r){const o=ws(n,Se.getCompare());return new j(s,Ne(e),new Ut({".priority":o},{".priority":Se}))}else return new j(s,Ne(e),Ut.Default)}else{let n=j.EMPTY_NODE;return je(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=Ne(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ne(e))}}n0(Ne);/**
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
 */class c0 extends eo{constructor(e){super(),this.indexPath_=e,S(!Z(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vn(e.name,n.name):s}makePost(e,n){const r=Ne(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ri);return new Q(Ln,e)}toString(){return pi(this.indexPath_,0).join("/")}}/**
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
 */class u0 extends eo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=Ne(e);return new Q(n,r)}toString(){return".value"}}const f0=new u0;/**
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
 */const Su="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",d0=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Su.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Su.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function wh(t){return{type:"value",snapshotNode:t}}function br(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _i(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function h0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wl{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gi(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(br(n,r)):o.trackChildChange(_i(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(gi(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_i(i,s,o))}else r.trackChildChange(br(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vi{constructor(e){this.indexedFilter_=new wl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vi.getStartPost_(e),this.endPost_=vi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class m0{constructor(e){this.rangedFilter_=new vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();a=(d,m)=>f(m,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const f=l.getNext();!u&&a(s,f)<=0&&(u=!0),u&&c<this.limit_&&a(f,o)<=0?c++:i=i.updateImmediateChild(f.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,m)=>f(m,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new Q(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(u&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(_i(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gi(n,f));const _=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(br(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(gi(c.name,c.node)),s.trackChildChange(br(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class Cl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Cl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function p0(t){return t.loadsAllData()?new wl(t.getIndex()):t.hasLimit()?new m0(t):new vi(t)}function Tu(t){const e={};if(t.isDefault())return e;let n;return t.index_===Se?n="$priority":t.index_===f0?n="$value":t.index_===cr?n="$key":(S(t.index_ instanceof c0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Oe(n),t.startSet_&&(e.startAt=Oe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Oe(t.indexStartName_))),t.endSet_&&(e.endAt=Oe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Oe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Au(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class Cs extends dh{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Pi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cs.getListenId_(e,r),a={};this.listens_[o]=a;const l=Tu(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),vr(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=Cs.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Tu(e._queryParams),r=e._path.toString(),i=new Si;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fi(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class g0{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Es(){return{value:null,children:new Map}}function Ch(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=q(e);t.children.has(r)||t.children.set(r,Es());const i=t.children.get(r);e=_e(e),Ch(i,e,n)}}function va(t,e,n){t.value!==null?n(e,t.value):_0(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);va(i,s,n)})}function _0(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class v0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Pu=10*1e3,y0=30*1e3,b0=5*60*1e3;class w0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new v0(e);const r=Pu+(y0-Pu)*Math.random();qr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qr(this.reportStats_.bind(this),Math.floor(Math.random()*2*b0))}}/**
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
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function El(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ks{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=El()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new ks(ie(),n,this.revert)}}else return S(q(this.path)===e,"operationForChild called for unrelated child."),new ks(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class yi{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new yi(this.source,ie()):new yi(this.source,_e(this.path))}}/**
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
 */class Fn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return Z(this.path)?new Fn(this.source,ie(),this.snap.getImmediateChild(e)):new Fn(this.source,_e(this.path),this.snap)}}/**
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
 */class wr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Fn(this.source,ie(),n.value):new wr(this.source,ie(),n)}else return S(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wr(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class hn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class C0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function E0(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(h0(o.childName,o.snapshotNode))}),Hr(t,i,"child_removed",e,r,n),Hr(t,i,"child_added",e,r,n),Hr(t,i,"child_moved",s,r,n),Hr(t,i,"child_changed",e,r,n),Hr(t,i,"value",e,r,n),i}function Hr(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>x0(t,a,l)),o.forEach(a=>{const l=k0(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function k0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function x0(t,e,n){if(e.childName==null||n.childName==null)throw Pr("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function to(t,e){return{eventCache:t,serverCache:e}}function Qr(t,e,n,r){return to(new hn(e,n,r),t.serverCache)}function Eh(t,e,n,r){return to(t.eventCache,new hn(e,n,r))}function xs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Oo;const I0=()=>(Oo||(Oo=new tt(cb)),Oo);class pe{constructor(e,n=I0()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return je(e,(r,i)=>{n=n.set(new fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(Z(e))return null;{const r=q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(_e(e),n);return s!=null?{path:Ie(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=q(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new pe(null)}}set(e,n){if(Z(e))return new pe(n,this.children);{const r=q(e),s=(this.children.get(r)||new pe(null)).set(_e(e),n),o=this.children.insert(r,s);return new pe(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=q(e),r=this.children.get(n);if(r){const i=r.remove(_e(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new pe(null):new pe(this.value,s)}else return this}}get(e){if(Z(e))return this.value;{const n=q(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(Z(e))return n;{const r=q(e),s=(this.children.get(r)||new pe(null)).setTree(_e(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new pe(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Z(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(_e(e),Ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,r){if(Z(e))return this;{this.value&&r(n,this.value);const i=q(e),s=this.children.get(i);return s?s.foreachOnPath_(_e(e),Ie(n,i),r):new pe(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new pe(null))}}function Xr(t,e,n){if(Z(e))return new xt(new pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ve(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new pe(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function ya(t,e,n){let r=t;return je(n,(i,s)=>{r=Xr(r,Ie(e,i),s)}),r}function Ru(t,e){if(Z(e))return xt.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new xt(n)}}function ba(t,e){return Kn(t,e)!=null}function Kn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Nu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function cn(t,e){if(Z(e))return t;{const n=Kn(t,e);return n!=null?new xt(new pe(n)):new xt(t.writeTree_.subtree(e))}}function wa(t){return t.writeTree_.isEmpty()}function Cr(t,e){return kh(ie(),t.writeTree_,e)}function kh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=kh(Ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ie(t,".priority"),r)),n}}/**
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
 */function no(t,e){return Th(e,t)}function S0(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Xr(t.visibleWrites,e,n)),t.lastWriteId=r}function T0(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ya(t.visibleWrites,e,n),t.lastWriteId=r}function A0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function P0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&R0(a,r.path)?i=!1:ut(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return N0(t),!0;if(r.snap)t.visibleWrites=Ru(t.visibleWrites,r.path);else{const a=r.children;je(a,l=>{t.visibleWrites=Ru(t.visibleWrites,Ie(r.path,l))})}return!0}else return!1}function R0(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(Ie(t.path,n),e))return!0;return!1}function N0(t){t.visibleWrites=xh(t.allWrites,O0,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function O0(t){return t.visible}function xh(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ut(n,o)?(a=Ve(n,o),r=Xr(r,a,s.snap)):ut(o,n)&&(a=Ve(o,n),r=Xr(r,ie(),s.snap.getChild(a)));else if(s.children){if(ut(n,o))a=Ve(n,o),r=ya(r,a,s.children);else if(ut(o,n))if(a=Ve(o,n),Z(a))r=ya(r,ie(),s.children);else{const l=vr(s.children,q(a));if(l){const c=l.getChild(_e(a));r=Xr(r,ie(),c)}}}else throw Pr("WriteRecord should have .snap or .children")}}return r}function Ih(t,e,n,r,i){if(!r&&!i){const s=Kn(t.visibleWrites,e);if(s!=null)return s;{const o=cn(t.visibleWrites,e);if(wa(o))return n;if(n==null&&!ba(o,ie()))return null;{const a=n||j.EMPTY_NODE;return Cr(o,a)}}}else{const s=cn(t.visibleWrites,e);if(!i&&wa(s))return n;if(!i&&n==null&&!ba(s,ie()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},a=xh(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Cr(a,l)}}}function D0(t,e,n){let r=j.EMPTY_NODE;const i=Kn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=cn(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const l=Cr(cn(s,new fe(o)),a);r=r.updateImmediateChild(o,l)}),Nu(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=cn(t.visibleWrites,e);return Nu(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function M0(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ie(e,n);if(ba(t.visibleWrites,s))return null;{const o=cn(t.visibleWrites,s);return wa(o)?i.getChild(n):Cr(o,i.getChild(n))}}function L0(t,e,n,r){const i=Ie(e,n),s=Kn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return Cr(o,r.getNode().getImmediateChild(n))}else return null}function F0(t,e){return Kn(t.visibleWrites,e)}function $0(t,e,n,r,i,s,o){let a;const l=cn(t.visibleWrites,e),c=Kn(l,ie());if(c!=null)a=c;else if(n!=null)a=Cr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=d.getNext();for(;m&&u.length<i;)f(m,r)!==0&&u.push(m),m=d.getNext();return u}else return[]}function U0(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function Is(t,e,n,r){return Ih(t.writeTree,t.treePath,e,n,r)}function Il(t,e){return D0(t.writeTree,t.treePath,e)}function Ou(t,e,n,r){return M0(t.writeTree,t.treePath,e,n,r)}function Ss(t,e){return F0(t.writeTree,Ie(t.treePath,e))}function B0(t,e,n,r,i,s){return $0(t.writeTree,t.treePath,e,n,r,i,s)}function Sl(t,e,n){return L0(t.writeTree,t.treePath,e,n)}function Sh(t,e){return Th(Ie(t.treePath,e),t.writeTree)}function Th(t,e){return{treePath:t,writeTree:e}}/**
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
 */class H0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_i(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,br(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_i(r,e.snapshotNode,i.oldSnap));else throw Pr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class j0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ah=new j0;class Tl{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sl(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$n(this.viewCache_),s=B0(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function W0(t){return{filter:t}}function z0(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function V0(t,e,n,r,i){const s=new H0;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=Ca(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=Ts(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=Y0(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ea(t,e,c.path,c.children,r,i,a,s))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=Q0(t,e,c.path,r,i,s):o=G0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===wt.LISTEN_COMPLETE)o=q0(t,e,n.path,r,s);else throw Pr("Unknown operation type: "+n.type);const l=s.getChanges();return K0(e,o,l),{viewCache:o,changes:l}}function K0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(wh(xs(e)))}}function Ph(t,e,n,r,i,s){const o=e.eventCache;if(Ss(r,n)!=null)return e;{let a,l;if(Z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=$n(e),u=c instanceof j?c:j.EMPTY_NODE,f=Il(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Is(r,$n(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=q(n);if(c===".priority"){S(dn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Ou(r,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=_e(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ou(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Sl(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,s):a=o.getNode()}}return Qr(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function Ts(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),m,null)}else{const m=q(n);if(!l.isCompleteForPath(n)&&dn(n)>1)return e;const g=_e(n),b=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),m,b,g,Ah,null)}const f=Eh(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),d=new Tl(i,f,s);return Ph(t,f,n,i,d,a)}function Ca(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Tl(i,e,s);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qr(e,c,!0,t.filter.filtersNodes());else{const f=q(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),m=a.getNode().getImmediateChild(f);let g;if(Z(d))g=r;else{const _=u.getCompleteChild(f);_!=null?_l(d)===".priority"&&_.getChild(mh(d)).isEmpty()?g=_:g=_.updateChild(d,r):g=j.EMPTY_NODE}if(m.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),f,g,d,u,o);l=Qr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Du(t,e){return t.eventCache.isCompleteForChild(e)}function Y0(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Ie(n,l);Du(e,q(u))&&(a=Ca(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Ie(n,l);Du(e,q(u))||(a=Ca(t,a,u,c,i,s,o))}),a}function Mu(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ea(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=r:c=new pe(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),g=Mu(t,m,d);l=Ts(t,l,new fe(f),g,i,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const m=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!m){const g=e.serverCache.getNode().getImmediateChild(f),_=Mu(t,g,d);l=Ts(t,l,new fe(f),_,i,s,o,a)}}),l}function G0(t,e,n,r,i,s,o){if(Ss(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ts(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Z(n)){let c=new pe(null);return l.getNode().forEachChild(cr,(u,f)=>{c=c.set(new fe(u),f)}),Ea(t,e,n,c,i,s,a,o)}else return e}else{let c=new pe(null);return r.foreach((u,f)=>{const d=Ie(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ea(t,e,n,c,i,s,a,o)}}function q0(t,e,n,r,i){const s=e.serverCache,o=Eh(e,s.getNode(),s.isFullyInitialized()||Z(n),s.isFiltered());return Ph(t,o,n,r,Ah,i)}function Q0(t,e,n,r,i,s){let o;if(Ss(r,n)!=null)return e;{const a=new Tl(r,e,i),l=e.eventCache.getNode();let c;if(Z(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Is(r,$n(e));else{const f=e.serverCache.getNode();S(f instanceof j,"serverChildren would be complete if leaf node"),u=Il(r,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=q(n);let f=Sl(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,_e(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,_e(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Is(r,$n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ss(r,ie())!=null,Qr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class X0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wl(r.getIndex()),s=p0(r);this.processor_=W0(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new hn(l,o.isFullyInitialized(),i.filtersNodes()),f=new hn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=to(f,u),this.eventGenerator_=new C0(this.query_)}get query(){return this.query_}}function J0(t){return t.viewCache_.serverCache.getNode()}function Z0(t){return xs(t.viewCache_)}function e1(t,e){const n=$n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Lu(t){return t.eventRegistrations_.length===0}function t1(t,e){t.eventRegistrations_.push(e)}function Fu(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function $u(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(S($n(t.viewCache_),"We should always have a full cache before handling merges"),S(xs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=V0(t.processor_,i,e,n,r);return z0(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Rh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function n1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(br(s,o))}),n.isFullyInitialized()&&r.push(wh(n.getNode())),Rh(t,r,n.getNode(),e)}function Rh(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return E0(t.eventGenerator_,e,n,i)}/**
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
 */let As;class Nh{constructor(){this.views=new Map}}function r1(t){S(!As,"__referenceConstructor has already been defined"),As=t}function i1(){return S(As,"Reference.ts has not been loaded"),As}function s1(t){return t.views.size===0}function Al(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),$u(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat($u(o,e,n,r));return s}}function Oh(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Is(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Il(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const c=to(new hn(a,l,!1),new hn(r,i,!1));return new X0(e,c)}return o}function o1(t,e,n,r,i,s){const o=Oh(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),t1(o,n),n1(o,n)}function a1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=mn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fu(c,n,r)),Lu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fu(l,n,r)),Lu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!mn(t)&&s.push(new(i1())(e._repo,e._path)),{removed:s,events:o}}function Dh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function un(t,e){let n=null;for(const r of t.views.values())n=n||e1(r,e);return n}function Mh(t,e){if(e._queryParams.loadsAllData())return ro(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Lh(t,e){return Mh(t,e)!=null}function mn(t){return ro(t)!=null}function ro(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ps;function l1(t){S(!Ps,"__referenceConstructor has already been defined"),Ps=t}function c1(){return S(Ps,"Reference.ts has not been loaded"),Ps}let u1=1;class Uu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=U0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fh(t,e,n,r,i){return S0(t.pendingWriteTree_,e,n,r,i),i?Nr(t,new Fn(El(),e,n)):[]}function f1(t,e,n,r){T0(t.pendingWriteTree_,e,n,r);const i=pe.fromObject(n);return Nr(t,new wr(El(),e,i))}function nn(t,e,n=!1){const r=A0(t.pendingWriteTree_,e);if(P0(t.pendingWriteTree_,e)){let s=new pe(null);return r.snap!=null?s=s.set(ie(),!0):je(r.children,o=>{s=s.set(new fe(o),!0)}),Nr(t,new ks(r.path,s,n))}else return[]}function Ni(t,e,n){return Nr(t,new Fn(kl(),e,n))}function d1(t,e,n){const r=pe.fromObject(n);return Nr(t,new wr(kl(),e,r))}function h1(t,e){return Nr(t,new yi(kl(),e))}function m1(t,e,n){const r=Rl(t,n);if(r){const i=Nl(r),s=i.path,o=i.queryId,a=Ve(s,e),l=new yi(xl(o),a);return Ol(t,s,l)}else return[]}function Rs(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Lh(o,e))){const l=a1(o,e,n,r);s1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,m)=>mn(m));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=_1(d);for(let g=0;g<m.length;++g){const _=m[g],b=_.query,v=Hh(t,_);t.listenProvider_.startListening(Jr(b),bi(t,b),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Jr(e),null):c.forEach(d=>{const m=t.queryToTagMap.get(io(d));t.listenProvider_.stopListening(Jr(d),m)}))}v1(t,c)}return a}function $h(t,e,n,r){const i=Rl(t,r);if(i!=null){const s=Nl(i),o=s.path,a=s.queryId,l=Ve(o,e),c=new Fn(xl(a),l,n);return Ol(t,o,c)}else return[]}function p1(t,e,n,r){const i=Rl(t,r);if(i){const s=Nl(i),o=s.path,a=s.queryId,l=Ve(o,e),c=pe.fromObject(n),u=new wr(xl(a),l,c);return Ol(t,o,u)}else return[]}function ka(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const g=Ve(d,i);s=s||un(m,g),o=o||mn(m)});let a=t.syncPointTree_.get(i);a?(o=o||mn(a),s=s||un(a,ie())):(a=new Nh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const _=un(g,ie());_&&(s=s.updateImmediateChild(m,_))}));const c=Lh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=io(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=y1();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const u=no(t.pendingWriteTree_,i);let f=o1(a,e,n,u,s,l);if(!c&&!o&&!r){const d=Mh(a,e);f=f.concat(b1(t,e,d))}return f}function Pl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=un(a,l);if(c)return c});return Ih(i,e,s,n,!0)}function g1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Ve(c,n);r=r||un(u,f)});let i=t.syncPointTree_.get(n);i?r=r||un(i,ie()):(i=new Nh,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new hn(r,!0,!1):null,a=no(t.pendingWriteTree_,e._path),l=Oh(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return Z0(l)}function Nr(t,e){return Uh(e,t.syncPointTree_,null,no(t.pendingWriteTree_,ie()))}function Uh(t,e,n,r){if(Z(t.path))return Bh(t,e,n,r);{const i=e.get(ie());n==null&&i!=null&&(n=un(i,ie()));let s=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sh(r,o);s=s.concat(Uh(a,l,c,u))}return i&&(s=s.concat(Al(i,t,r,n))),s}}function Bh(t,e,n,r){const i=e.get(ie());n==null&&i!=null&&(n=un(i,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sh(r,o),u=t.operationForChild(o);u&&(s=s.concat(Bh(u,a,l,c)))}),i&&(s=s.concat(Al(i,t,r,n))),s}function Hh(t,e){const n=e.query,r=bi(t,n);return{hashFn:()=>(J0(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?m1(t,n._path,r):h1(t,n._path);{const s=db(i,n);return Rs(t,n,null,s)}}}}function bi(t,e){const n=io(e);return t.queryToTagMap.get(n)}function io(t){return t._path.toString()+"$"+t._queryIdentifier}function Rl(t,e){return t.tagToQueryMap.get(e)}function Nl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Ol(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=no(t.pendingWriteTree_,e);return Al(r,n,i,null)}function _1(t){return t.fold((e,n,r)=>{if(n&&mn(n))return[ro(n)];{let i=[];return n&&(i=Dh(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function Jr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(c1())(t._repo,t._path):t}function v1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=io(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function y1(){return u1++}function b1(t,e,n){const r=e._path,i=bi(t,e),s=Hh(t,n),o=t.listenProvider_.startListening(Jr(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!mn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!Z(c)&&u&&mn(u))return[ro(u).query];{let d=[];return u&&(d=d.concat(Dh(u).map(m=>m.query))),je(f,(m,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Jr(u),bi(t,u))}}return o}/**
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
 */class Dl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dl(n)}node(){return this.node_}}class Ml{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Ml(this.syncTree_,n)}node(){return Pl(this.syncTree_,this.path_)}}const w1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bu=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return C1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return E1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},C1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},E1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},jh=function(t,e,n,r){return Ll(e,new Ml(n,t),r)},Wh=function(t,e,n){return Ll(t,new Dl(e),n)};function Ll(t,e,n){const r=t.getPriority().val(),i=Bu(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Bu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,Ne(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Fe(i))),o.forEachChild(Se,(a,l)=>{const c=Ll(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Fl{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function $l(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=q(n);for(;i!==null;){const s=vr(r.node.children,i)||{children:{},childCount:0};r=new Fl(i,r,s),n=_e(n),i=q(n)}return r}function Or(t){return t.node.value}function zh(t,e){t.node.value=e,xa(t)}function Vh(t){return t.node.childCount>0}function k1(t){return Or(t)===void 0&&!Vh(t)}function so(t,e){je(t.node.children,(n,r)=>{e(new Fl(n,t,r))})}function Kh(t,e,n,r){n&&!r&&e(t),so(t,i=>{Kh(i,e,!0,r)}),n&&r&&e(t)}function x1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Oi(t){return new fe(t.parent===null?t.name:Oi(t.parent)+"/"+t.name)}function xa(t){t.parent!==null&&I1(t.parent,t.name,t)}function I1(t,e,n){const r=k1(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xa(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xa(t))}/**
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
 */const S1=/[\[\].#$\/\u0000-\u001F\u007F]/,T1=/[\[\].#$\u0000-\u001F\u007F]/,Do=10*1024*1024,Ul=function(t){return typeof t=="string"&&t.length!==0&&!S1.test(t)},Yh=function(t){return typeof t=="string"&&t.length!==0&&!T1.test(t)},A1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yh(t)},P1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!dl(t)||t&&typeof t=="object"&&Mt(t,".sv")},Gh=function(t,e,n,r){r&&e===void 0||oo(Xs(t,"value"),e,n)},oo=function(t,e,n){const r=n instanceof fe?new Kb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+kn(r)+" with contents = "+e.toString());if(dl(e))throw new Error(t+"contains "+e.toString()+" "+kn(r));if(typeof e=="string"&&e.length>Do/3&&Js(e)>Do)throw new Error(t+"contains a string greater than "+Do+" utf8 bytes "+kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ul(o)))throw new Error(t+" contains an invalid key ("+o+") "+kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Yb(r,o),oo(t,a,r),Gb(r)}),i&&s)throw new Error(t+' contains ".value" child '+kn(r)+" in addition to actual children.")}},R1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=pi(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ul(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Vb);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},N1=function(t,e,n,r){if(r&&e===void 0)return;const i=Xs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];je(e,(o,a)=>{const l=new fe(o);if(oo(i,a,Ie(n,l)),_l(l)===".priority"&&!P1(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),R1(i,s)},qh=function(t,e,n,r){if(!(r&&n===void 0)&&!Yh(n))throw new Error(Xs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},O1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qh(t,e,n,r)},Qh=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},D1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ul(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!A1(n))throw new Error(Xs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class M1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ao(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!vl(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xh(t,e,n){ao(t,n),Jh(t,r=>vl(r,e))}function dt(t,e,n){ao(t,n),Jh(t,r=>ut(r,e)||ut(e,r))}function Jh(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(L1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function L1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();On&&Be("event: "+n.toString()),Rr(r)}}}/**
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
 */const F1="repo_interrupt",$1=25;class U1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new M1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Es(),this.transactionQueueTree_=new Fl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function B1(t,e,n){if(t.stats_=pl(t.repoInfo_),t.forceRestClient_||gb())t.server_=new Cs(t.repoInfo_,(r,i,s,o)=>{Hu(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ju(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(r,i,s,o)=>{Hu(t,r,i,s,o)},r=>{ju(t,r)},r=>{H1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=wb(t.repoInfo_,()=>new w0(t.stats_,t.server_)),t.infoData_=new g0,t.infoSyncTree_=new Uu({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ni(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bl(t,"connected",!1),t.serverSyncTree_=new Uu({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);dt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Zh(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lo(t){return w1({timestamp:Zh(t)})}function Hu(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=gs(n,c=>Ne(c));o=p1(t.serverSyncTree_,s,l,i)}else{const l=Ne(n);o=$h(t.serverSyncTree_,s,l,i)}else if(r){const l=gs(n,c=>Ne(c));o=d1(t.serverSyncTree_,s,l)}else{const l=Ne(n);o=Ni(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Er(t,s)),dt(t.eventQueue_,a,o)}function ju(t,e){Bl(t,"connected",e),e===!1&&V1(t)}function H1(t,e){je(e,(n,r)=>{Bl(t,n,r)})}function Bl(t,e,n){const r=new fe("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(r,i);const s=Ni(t.infoSyncTree_,r,i);dt(t.eventQueue_,r,s)}function Hl(t){return t.nextWriteId_++}function j1(t,e,n){const r=g1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ne(i).withIndex(e._queryParams.getIndex());ka(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ni(t.serverSyncTree_,e._path,s);else{const a=bi(t.serverSyncTree_,e);o=$h(t.serverSyncTree_,e._path,s,a)}return dt(t.eventQueue_,e._path,o),Rs(t.serverSyncTree_,e,n,null,!0),s},i=>(Di(t,"get for query "+Oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function W1(t,e,n,r,i){Di(t,"set",{path:e.toString(),value:n,priority:r});const s=lo(t),o=Ne(n,r),a=Pl(t.serverSyncTree_,e),l=Wh(o,a,s),c=Hl(t),u=Fh(t.serverSyncTree_,e,l,c,!0);ao(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,m)=>{const g=d==="ok";g||Ge("set at "+e+" failed: "+d);const _=nn(t.serverSyncTree_,c,!g);dt(t.eventQueue_,e,_),Ia(t,i,d,m)});const f=Wl(t,e);Er(t,f),dt(t.eventQueue_,f,[])}function z1(t,e,n,r){Di(t,"update",{path:e.toString(),value:n});let i=!0;const s=lo(t),o={};if(je(n,(a,l)=>{i=!1,o[a]=jh(Ie(e,a),Ne(l),t.serverSyncTree_,s)}),i)Be("update() called with empty data.  Don't do anything."),Ia(t,r,"ok",void 0);else{const a=Hl(t),l=f1(t.serverSyncTree_,e,o,a);ao(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||Ge("update at "+e+" failed: "+c);const d=nn(t.serverSyncTree_,a,!f),m=d.length>0?Er(t,e):e;dt(t.eventQueue_,m,d),Ia(t,r,c,u)}),je(n,c=>{const u=Wl(t,Ie(e,c));Er(t,u)}),dt(t.eventQueue_,e,[])}}function V1(t){Di(t,"onDisconnectEvents");const e=lo(t),n=Es();va(t.onDisconnect_,ie(),(i,s)=>{const o=jh(i,s,t.serverSyncTree_,e);Ch(n,i,o)});let r=[];va(n,ie(),(i,s)=>{r=r.concat(Ni(t.serverSyncTree_,i,s));const o=Wl(t,i);Er(t,o)}),t.onDisconnect_=Es(),dt(t.eventQueue_,ie(),r)}function K1(t,e,n){let r;q(e._path)===".info"?r=ka(t.infoSyncTree_,e,n):r=ka(t.serverSyncTree_,e,n),Xh(t.eventQueue_,e._path,r)}function Wu(t,e,n){let r;q(e._path)===".info"?r=Rs(t.infoSyncTree_,e,n):r=Rs(t.serverSyncTree_,e,n),Xh(t.eventQueue_,e._path,r)}function Y1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(F1)}function Di(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Be(n,...e)}function Ia(t,e,n,r){e&&Rr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function em(t,e,n){return Pl(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function jl(t,e=t.transactionQueueTree_){if(e||co(t,e),Or(e)){const n=nm(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&G1(t,Oi(e),n)}else Vh(e)&&so(e,n=>{jl(t,n)})}function G1(t,e,n){const r=n.map(c=>c.currentWriteId),i=em(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ve(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Di(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(nn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();co(t,$l(t.transactionQueueTree_,e)),jl(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Rr(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Er(t,e)}},o)}function Er(t,e){const n=tm(t,e),r=Oi(n),i=nm(t,n);return q1(t,i,r),r}function q1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,f;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(nn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$1)u=!0,f="maxretry",i=i.concat(nn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=em(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){oo("transaction failed: Data returned ",m,l.path);let g=Ne(m);typeof m=="object"&&m!=null&&Mt(m,".priority")||(g=g.updatePriority(d.getPriority()));const b=l.currentWriteId,v=lo(t),k=Wh(g,d,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=k,l.currentWriteId=Hl(t),o.splice(o.indexOf(b),1),i=i.concat(Fh(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),i=i.concat(nn(t.serverSyncTree_,b,!0))}else u=!0,f="nodata",i=i.concat(nn(t.serverSyncTree_,l.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}co(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Rr(r[a]);jl(t,t.transactionQueueTree_)}function tm(t,e){let n,r=t.transactionQueueTree_;for(n=q(e);n!==null&&Or(r)===void 0;)r=$l(r,n),e=_e(e),n=q(e);return r}function nm(t,e){const n=[];return rm(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rm(t,e,n){const r=Or(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);so(e,i=>{rm(t,i,n)})}function co(t,e){const n=Or(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,zh(e,n.length>0?n:void 0)}so(e,r=>{co(t,r)})}function Wl(t,e){const n=Oi(tm(t,e)),r=$l(t.transactionQueueTree_,e);return x1(r,i=>{Mo(t,i)}),Mo(t,r),Kh(r,i=>{Mo(t,i)}),n}function Mo(t,e){const n=Or(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(nn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zh(e,void 0):n.length=s+1,dt(t.eventQueue_,Oi(e),i);for(let o=0;o<r.length;o++)Rr(r[o])}}/**
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
 */function Q1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function X1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const zu=function(t,e){const n=J1(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ab();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sh(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},J1=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=Q1(t.substring(u,f)));const d=X1(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class im{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Oe(this.snapshot.exportVal())}}class sm{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class om{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zl{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Z(this._path)?null:_l(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=Au(this._queryParams),n=hl(e);return n==="{}"?"default":n}get _queryObject(){return Au(this._queryParams)}isEqual(e){if(e=zn(e),!(e instanceof zl))return!1;const n=this._repo===e._repo,r=vl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zb(this._path)}}class Lt extends zl{constructor(e,n){super(e,n,new Cl,!1)}get parent(){const e=mh(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=Ht(this.ref,e);return new kr(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new kr(i,Ht(this.ref,r),Se)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xr(t,e){return t=zn(t),t._checkNotDeleted("ref"),e!==void 0?Ht(t._root,e):t._root}function Ht(t,e){return t=zn(t),q(t._path)===null?O1("child","path",e,!1):qh("child","path",e,!1),new Lt(t._repo,Ie(t._path,e))}function Z1(t,e){t=zn(t),Qh("push",t._path),Gh("push",e,t._path,!0);const n=Zh(t._repo),r=d0(n),i=Ht(t,r),s=Ht(t,r);let o;return e!=null?o=Vl(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Vl(t,e){t=zn(t),Qh("set",t._path),Gh("set",e,t._path,!1);const n=new Si;return W1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ew(t,e){N1("update",e,t._path,!1);const n=new Si;return z1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Lo(t){t=zn(t);const e=new om(()=>{}),n=new uo(e);return j1(t._repo,t,n).then(r=>new kr(r,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class uo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new im("value",this,new kr(e.snapshotNode,new Lt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sm(this,e,n):null}matches(e){return e instanceof uo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Kl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sm(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=Ht(new Lt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new im(e.type,this,new kr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Kl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function tw(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,f)=>{Wu(t._repo,t,a),l(u,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new om(n,s||void 0),a=e==="value"?new uo(o):new Kl(e,o);return K1(t._repo,t,a),()=>Wu(t._repo,t,a)}function nw(t,e,n,r){return tw(t,"value",e,n,r)}r1(Lt);l1(Lt);/**
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
 */const rw="FIREBASE_DATABASE_EMULATOR_HOST",Sa={};let iw=!1;function sw(t,e,n,r){t.repoInfo_=new sh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function ow(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zu(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[rw]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=zu(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new lr(lr.OWNER):new vb(t.name,t.options,e);D1("Invalid Firebase Database URL",o),Z(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=lw(a,t,u,new _b(t.name,n));return new cw(f,t)}function aw(t,e){const n=Sa[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Y1(t),delete n[t.key]}function lw(t,e,n,r){let i=Sa[e.name];i||(i={},Sa[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new U1(t,iw,n,r),i[t.toURLString()]=s,s}class cw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(B1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function Dn(t=zy(),e){const n=By(t,"database").getImmediate({identifier:e}),r=Mv("database");return r&&uw(n,...r),n}function uw(t,e,n,r={}){t=zn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new lr(lr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Fv(r.mockUserToken,t.app.options.projectId);s=new lr(o)}sw(i,e,n,s)}/**
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
 */function fw(t){nb(Wy),vs(new di("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ow(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),or(fu,du,t),or(fu,du,"esm2017")}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fw();const dw=t=>(jn("data-v-41302a0f"),t=t(),Wn(),t),hw={class:"wrapper"},mw=dw(()=>C("h3",null,"\u5E7B\u5922\u82F1\u9748\u6BBF",-1)),pw={__name:"App",setup(t){const n=Zs({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"});Dn(n),xr(Dn());const r=Dn(),i=vn();function s(a){i.user.account!==""?ew(xr(r,"Users/"+a),{havercard:i.user.havecard,remainCard:i.user.remainCard,team:i.user.team,Profile:{img:i.Profile.img},ProfileCover:{img:i.ProfileCover.img},SummonPoints:i.SummonPoints,AwakePoints:i.AwakePoints,drama:i.drama,pvp:i.pvp,win:i.win,lose:i.lose}).then(()=>{editOK.value=!0,getdata()}).catch(l=>{}):alert("\u4F60\u6C92\u6709\u767B\u5165")}ft(i,()=>{s(i.user.account)});const o=Pd();return(a,l)=>(Ke(),Ye(et,null,[C("header",null,[C("div",hw,[mw,C("button",{onClick:l[0]||(l[0]=c=>J(o).replace({path:"/"})),class:ke({display_none:J(i).user.account!==""})},"\u8FD4\u56DE\u767B\u5165\u756B\u9762",2)])]),le(J(cl)),le(Cv)],64))}},gw=St(pw,[["__scopeId","data-v-41302a0f"]]),_w="modulepreload",vw=function(t){return"/Vue3-Vite-Game/"+t},Vu={},Zr=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=vw(s),s in Vu)return;Vu[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_w,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},yw="/Vue3-Vite-Game/assets/pexels-philippe-donn-1169754.27b5d31a.jpg";const bw={class:"chat-box"},ww={class:"chat-img"},Cw=["src"],Ew={class:"chat-font"},kw={class:"chat-time"},xw={class:"chat-text"},Iw={class:"chat-input"},Sw=["onKeyup"],Tw={__name:"Chat",setup(t){const n=Zs({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"}),r=Dn(n),i=xr(r,"Chat/"),s=vn(),o=te("");function a(){const f=Z1(i).key;if(!o.value.trim()||s.user.account=="")return;let d=new Date;Vl(xr(r,`Chat/${f}`),{name:s.user.account,message:o.value,icon:s.Profile,time:d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+" -"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"-"}),o.value=""}function l(){let f=document.getElementById("chat-home"),d;clearTimeout(d),d=setTimeout(()=>{f.scrollTop=f.scrollHeight},100)}const c=te([]);nw(i,f=>{c.value=f.val(),l()}),ft(s,()=>{l()});function u(f){return`./imgage/character/c${f}_C.png`}return(f,d)=>(Ke(),Ye(et,null,[C("button",{class:"chat-open",onClick:d[0]||(d[0]=m=>J(s).chatopen=!J(s).chatopen)},"\u5C55\u958B\u804A\u5929\u7A97"),C("div",{id:"chat-home",class:ke({display_none:!J(s).chatopen},{chat_open_anm:J(s).chatopen})},[(Ke(!0),Ye(et,null,nd(c.value,(m,g)=>(Ke(),Ye("div",bw,[C("div",ww,[C("img",{src:u(m.icon.img),alt:""},null,8,Cw)]),C("div",Ew,[C("span",null,Re(m.name)+"\uFF1A",1),C("p",kw,Re(m.time),1),C("p",xw,Re(m.message),1)])]))),256))],2),C("div",Iw,[Yo(C("input",{type:"text","onUpdate:modelValue":d[1]||(d[1]=m=>o.value=m),onKeyup:r_(a,["enter"])},null,40,Sw),[[ta,o.value]]),C("button",{onClick:a},"\u9001\u51FA")])],64))}},Aw=St(Tw,[["__scopeId","data-v-16ee98f2"]]);const Pw={class:"player-home"},Rw={class:"player-img"},Nw=["src"],Ow={class:"profile-box"},Dw={class:"profile-lv"},Mw={class:"profile-data"},Lw={__name:"PlayerProfile",setup(t){const e=vn(),n=te(`./imgage/character/c${e.Profile.img}_C.png`);return ft(e.Profile,()=>{n.value=`./imgage/character/c${e.Profile.img}_C.png`}),(r,i)=>(Ke(),Ye("div",Pw,[C("div",Rw,[C("img",{src:n.value,alt:""},null,8,Nw)]),C("div",Ow,[C("div",Dw,[C("span",null,Re(J(e).user.account),1),C("p",null,"\u53EC\u559A\u9EDE\u6578\uFF1A"+Re(J(e).SummonPoints),1),C("p",null,"\u89BA\u9192\u9EDE\u6578\uFF1A"+Re(J(e).AwakePoints),1)]),C("div",Mw,"\u5C0D\u6230\uFF1A"+Re(J(e).pvp)+"\u5834 - \u52DD\u5229\uFF1A"+Re(J(e).win)+"\u5834 - \u5931\u6557\uFF1A"+Re(J(e).lose)+"\u5834\uFF0C\u5361\u724C\u6301\u6709\uFF1A"+Re(J(e).user.havecard.length)+"\u5F35",1)])]))}},Fw=St(Lw,[["__scopeId","data-v-cf5c4cb3"]]);const $w={},Uw=t=>(jn("data-v-6b231dfb"),t=t(),Wn(),t),Bw={id:"advertisehome"},Hw=Uw(()=>C("div",{class:"img-box"}," \u9810\u7559\u5340\u584A ",-1)),jw=[Hw];function Ww(t,e){return Ke(),Ye("div",Bw,jw)}const zw=St($w,[["render",Ww],["__scopeId","data-v-6b231dfb"]]);const am=t=>(jn("data-v-eedf417f"),t=t(),Wn(),t),Vw={id:"home"},Kw=am(()=>C("img",{class:"background-img",src:yw,alt:""},null,-1)),Yw={class:"spech-img"},Gw=["src"],qw=am(()=>C("div",{class:"character-text"},[C("h2",null,"\u9019\u88E1\u53EA\u6709\u6211\u5011\u5169\u500B\u4E86...")],-1)),Qw={class:"Go"},Xw={class:"view"},Jw={class:"player"},Zw={class:"chat"},eC={class:"advertise"},tC={__name:"Home",setup(t){const e=vn(),n=te(`./imgage/character/c${e.ProfileCover.img}_D.png`);return e.chatopen=!1,ft(e.ProfileCover,()=>{n.value=`./imgage/character/c${e.ProfileCover.img}_D.png`}),(r,i)=>(Ke(),Ye("div",null,[C("div",Vw,[Kw,C("div",Yw,[C("img",{src:n.value,alt:""},null,8,Gw)]),qw,C("div",Qw,[C("div",Xw,[le(J(cl))]),C("nav",null,[le(J(ct),{to:"/Home"},{default:at(()=>[lt("\u96B1\u85CF")]),_:1}),le(J(ct),{to:"/Pack"},{default:at(()=>[lt("\u82F1\u9748")]),_:1}),le(J(ct),{to:"/Summon"},{default:at(()=>[lt("\u53EC\u559A")]),_:1}),le(J(ct),{to:"/Home/character"},{default:at(()=>[lt("\u968A\u4F0D")]),_:1}),le(J(ct),{to:"/Home/Info"},{default:at(()=>[lt("\u8AAA\u660E")]),_:1}),le(J(ct),{to:"/Home/Info"},{default:at(()=>[lt("\u73A9\u5BB6\u5C0D\u6230")]),_:1}),le(J(ct),{to:"/Home/Info"},{default:at(()=>[lt("\u96FB\u8166\u5C0D\u6230")]),_:1}),le(J(ct),{to:"/Dialogue"},{default:at(()=>[lt("\u5287\u60C5")]),_:1})])]),C("div",Jw,[le(Fw)]),C("div",Zw,[le(Aw)]),C("div",eC,[le(zw)])])]))}},nC=St(tC,[["__scopeId","data-v-eedf417f"]]),rC=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};const iC=t=>(jn("data-v-651e25e5"),t=t(),Wn(),t),sC={id:"speech"},oC={class:"home-router"},aC=["src"],lC={class:"spech-img"},cC=["src"],uC={class:"speech-box"},fC={class:"speech-name"},dC=iC(()=>C("div",{class:"load"},[C("div",{style:{color:"#9784ed"},class:"la-ball-pulse"},[C("div"),C("div"),C("div")])],-1)),hC={__name:"Dialogue",setup(t){const e=vn(),n=te(1),r=te([]),i=te(`${e.drama}`);ft(e,()=>{i.value=e.drama,s()});function s(){rC(Object.assign({"./Dialogue/a001_01.js":()=>Zr(()=>import("./a001_01.6af9655d.js"),[]),"./Dialogue/a002_01.js":()=>Zr(()=>import("./a002_01.62dcd319.js"),[])}),`./Dialogue/${i.value}.js`).then(u=>{r.value=u.default,c(r.value)})}function o(){n.value<r.value.length&&(n.value++,c(r.value))}function a(){n.value>1&&(n.value--,c(r.value))}const l=te({});function c(u){for(let f=0;f<u.length;f++)u[f].page==n.value&&(l.value=u[f])}return td(()=>{s()}),ft(l,()=>{l.value.fun!==void 0&&(l.value.fun(),s())}),(u,f)=>(Ke(),Ye("div",null,[C("div",sC,[C("div",oC,[le(J(ct),{to:"/Home"},{default:at(()=>[lt("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),C("img",{class:"background-img",src:l.value.background,alt:""},null,8,aC),C("div",lC,[C("img",{src:l.value.img,alt:"",class:ke(l.value.eff)},null,10,cC)]),C("div",uC,[C("div",fC,[C("h3",null,Re(l.value.name),1)]),C("div",{class:"speech-text",onClick:f[0]||(f[0]=d=>o()),onContextmenu:f[1]||(f[1]=t_(d=>a(),["right"]))},[C("p",{class:ke(l.value.font)},Re(l.value.text),3),dC],32)])])]))}},mC=St(hC,[["__scopeId","data-v-651e25e5"]]);const lm=t=>(jn("data-v-2bbe8b65"),t=t(),Wn(),t),pC=lm(()=>C("h1",{class:"green"},"\u653B\u64CA\u50B7\u5BB3\u8A08\u7B97",-1)),gC=lm(()=>C("div",{class:"greetings"},[C("h3",null," \u9019\u88E1\u6703\u5C55\u793A\u50B7\u5BB3\u8A08\u7B97\u8996\u7A97 ")],-1)),_C={__name:"Attack",props:{},setup(t){return(e,n)=>(Ke(),Ye(et,null,[pC,gC],64))}},vC=St(_C,[["__scopeId","data-v-2bbe8b65"]]),yC="/Vue3-Vite-Game/assets/PngtreeTechnolo_939240.febec1c5.jpg";const cm=t=>(jn("data-v-bb1e00b3"),t=t(),Wn(),t),bC={id:"Summon"},wC={class:"home-router"},CC=cm(()=>C("img",{class:"background-img",src:yC,alt:""},null,-1)),EC={class:"remain"},kC=cm(()=>C("div",{class:"load"},[C("div",{class:"la-cog la-dark la-2x"},[C("div")])],-1)),xC=["src"],IC={__name:"Summon",setup(t){const e=vn(),n=te(!1),r=te(e.user.havecard),i=te(e.user.remainCard),s=te(e.SummonPoints),o=te(""),a=te(0);function l(){s.value===0?alert("\u53EC\u559A\u9EDE\u6578\u4E0D\u8DB3"):(n.value=!n.value,s.value--,e.SummonPoints=s.value,a.value=Math.floor(Math.random()*i.value.length),r.value.unshift(i.value[a.value]),e.user.havecard=r.value,o.value=`./imgage/character/c${i.value[a.value]}_A.png`,i.value.splice(a.value,1),e.user.remainCard=i.value)}return(c,u)=>(Ke(),Ye("div",bC,[C("div",wC,[le(J(ct),{to:"/Home"},{default:at(()=>[lt("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),CC,C("div",EC,[C("p",null,"\u5DF2\u64C1\u6709\u82F1\u9748\uFF1A"+Re(r.value.length),1),C("p",null,"\u672A\u7372\u5F97\u82F1\u9748\uFF1A"+Re(i.value.length),1)]),C("div",{class:ke(["summon-btn",{display_none:n.value}])},[C("p",null,"\u53EC\u559A\u9EDE\u6578\uFF1A"+Re(s.value),1),C("button",{onClick:u[0]||(u[0]=f=>l())},"\u53EC\u559A")],2),C("div",{class:ke(["summon_start display_none",{start_summon:n.value}])},[kC,C("div",{class:ke(["summon-img",{SummoAnm:n.value}])},[C("img",{src:o.value,alt:""},null,8,xC)],2),C("button",{onClick:u[1]||(u[1]=f=>n.value=!n.value)},"\u78BA\u5B9A")],2)]))}},SC=St(IC,[["__scopeId","data-v-bb1e00b3"]]);const TC={id:"Pack"},AC={class:"home-router"},PC={class:"awake"},RC={class:"awake-p"},NC={class:"pack-home"},OC={class:"pack-trait"},DC={class:"pack-boxhome"},MC={class:"pack-boxtop"},LC={class:"pack-img"},FC=["src"],$C={class:"pack-hidden"},UC={class:"pack-data"},BC={class:"pack-button"},HC=["onClick"],jC=["onClick"],WC=["onClick"],zC={__name:"Pack",setup(t){const e=vn(),n=te(e.user.havecard),r=te([]);function i(){let g=[];for(let _=0;_<n.value.length;_++)for(let b=0;b<Gr.length;b++)n.value[_]==Gr[b].number&&(g.push(Gr[b]),r.value=g)}i();const s=te([]);function o(){let g=[];for(let _=0;_<n.value.length;_++)g.push(`./imgage/character/c${n.value[_]}_A.png`),s.value=g}o();const a=te("all"),l=te(null),c=te(e.AwakePoints);function u(g){if(c.value===0)alert("\u53EC\u559A\u9EDE\u6578\u4E0D\u8DB3");else if(f(g.number))alert("\u5DF2\u7D93\u64C1\u6709\u89BA\u9192");else{const _=(Number(g.number)+1).toString();let b="";_.length==1?b="00"+_:_.length==2?b="0"+_:b=_,c.value--,e.AwakePoints=c.value,n.value.unshift(b),e.user.havecard=n.value,i(),o()}}function f(g){const _=(Number(g)+1).toString();let b="";_.length==1?b="00"+_:_.length==2?b="0"+_:b=_;for(let v=0;v<n.value.length;v++)if(b==n.value[v])return!0;return!1}function d(g){e.ProfileCover.img=g}function m(g){e.Profile.img=g}return(g,_)=>(Ke(),Ye("div",TC,[C("div",AC,[le(J(ct),{to:"/Home"},{default:at(()=>[lt("\u8FD4\u56DE\u6BBF\u5802")]),_:1})]),C("div",PC,[C("button",{onClick:_[0]||(_[0]=b=>l.value=null),class:ke({now_botton:l.value==null})},"\u986F\u793A\u5168\u90E8",2),C("button",{onClick:_[1]||(_[1]=b=>l.value=!0),class:ke({now_botton:l.value==!0})},"\u986F\u793A\u89BA\u9192",2),C("button",{onClick:_[2]||(_[2]=b=>l.value=!1),class:ke({now_botton:l.value==!1})},"\u986F\u793A\u89BA\u9192\u524D",2),C("div",RC,[C("p",null,"\u89BA\u9192\u9EDE\u6578\uFF1A"+Re(J(e).AwakePoints),1)])]),C("div",NC,[C("div",OC,[C("button",{onClick:_[3]||(_[3]=b=>a.value="all"),class:ke({now_botton:a.value=="all"})},"\u5168\u90E8\u5C6C\u6027",2),C("button",{onClick:_[4]||(_[4]=b=>a.value="\u548C\u8AE7"),class:ke({now_botton:a.value=="\u548C\u8AE7"})},"\u548C\u8AE7",2),C("button",{onClick:_[5]||(_[5]=b=>a.value="\u5FAA\u74B0"),class:ke({now_botton:a.value=="\u5FAA\u74B0"})},"\u5FAA\u74B0",2),C("button",{onClick:_[6]||(_[6]=b=>a.value="\u52D5\u76EA"),class:ke({now_botton:a.value=="\u52D5\u76EA"})},"\u52D5\u76EA",2),C("button",{onClick:_[7]||(_[7]=b=>a.value="\u6BC0\u6EC5"),class:ke({now_botton:a.value=="\u6BC0\u6EC5"})},"\u6BC0\u6EC5",2)]),C("div",DC,[C("div",MC,[(Ke(!0),Ye(et,null,nd(r.value,(b,v)=>(Ke(),Ye("div",{class:ke(["pack-box",{display_none:a.value!==b.trait&&a.value!=="all"},{display_none:l.value!==b.awake&&l.value!==null}])},[C("div",LC,[C("img",{src:s.value[v],alt:""},null,8,FC)]),C("div",$C,[C("div",UC,[C("p",null,"\u6230\u529B\uFF1A"+Re(b.attack),1),C("p",null,"\u5C6C\u6027\uFF1A"+Re(b.trait),1)]),C("div",BC,[C("button",{onClick:k=>u(b),class:ke({display_none:b.awake==!0})},"\u89BA\u9192",10,HC),C("button",{onClick:k=>m(b.number)},"\u8A2D\u70BA\u4EE3\u8868",8,jC),C("button",{onClick:k=>d(b.number)},"\u8A2D\u70BA\u5C01\u9762",8,WC)])])],2))),256))])])])]))}},VC=St(zC,[["__scopeId","data-v-76055567"]]),KC="/Vue3-Vite-Game/assets/pexels-pixabay-268533.074f5772.jpg";const fo=t=>(jn("data-v-379e314a"),t=t(),Wn(),t),YC={id:"Register"},GC=fo(()=>C("img",{class:"background-img",src:KC,alt:""},null,-1)),qC={class:"login-home"},QC={class:"login-home"},XC=fo(()=>C("h3",null,"\u767B\u5165",-1)),JC={class:"acc"},ZC=fo(()=>C("p",null,"\u5E33\u865F\uFF1A",-1)),eE={class:"pas"},tE=fo(()=>C("p",null,"\u5BC6\u78BC\uFF1A",-1)),nE={class:"login-button"},rE={__name:"Register",setup(t){const n=Zs({apiKey:"AIzaSyAc_y-1VBJZalvud50kqtfc-KCG9Qriy00",authDomain:"mygame01-6fe41.firebaseapp.com",databaseURL:"https://mygame01-6fe41-default-rtdb.firebaseio.com",projectId:"mygame01-6fe41",storageBucket:"mygame01-6fe41.appspot.com",messagingSenderId:"444640701465",appId:"1:444640701465:web:8aaba0d8ef73abaaf7ce88"});Dn(n);const r=xr(Dn()),i=Dn(),s=vn();function o(m){Lo(Ht(r,`Users/${m}`)).then(g=>{g.exists()?(s.user.account=m,s.user.havecard=g.val().havercard,s.user.remainCard=g.val().remainCard,s.user.team=g.val().team,s.Profile.img=g.val().Profile.img,s.ProfileCover.img=g.val().ProfileCover.img,s.SummonPoints=g.val().SummonPoints,s.AwakePoints=g.val().AwakePoints,s.drama=g.val().drama,s.pvp=g.val().pvp,s.win=g.val().win,s.lose=g.val().lose):console.log("\u6C92\u6709\u8CC7\u6599")}).catch(g=>{console.error(g)})}const a=Pd(),l=te(""),c=te("");function u(){l.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):Lo(Ht(r,"Users/"+l.value)).then(m=>{m.val()===null?alert("\u67E5\u7121\u6B64\u5E33\u6236"):m.val().password===c.value?(o(l.value),alert("\u767B\u5165\u6210\u529F"),a.replace({path:"/Home"})):alert("\u5BC6\u78BC\u932F\u8AA4")}).catch(m=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}function f(){const m=Gr.filter(b=>b.awake==!1),g=[];let _=[];for(let b=0;b<m.length;b++)g.push(m[b].number);return _=g.filter(b=>b!=="001"&&b!=="003"&&b!=="017"&&b!=="019"&&b!=="021"),_}function d(){l.value===""||c.value===""?alert("\u8ACB\u8F38\u5165\u5B8C\u6574\u5E33\u865F\u5BC6\u78BC"):Lo(Ht(r,"Users/"+l.value)).then(m=>{m.val()===null?(Vl(xr(i,`Users/${l.value}`),{havercard:["001","003","017","019","021"],remainCard:f(),team:["001","003","017","019","021"],Profile:{img:"003"},ProfileCover:{img:"021"},SummonPoints:10,AwakePoints:5,drama:"a001_01",pvp:0,win:0,lose:0,password:c.value}),alert("\u8A3B\u518A\u5B8C\u6210"),u()):alert("\u5DF2\u6709\u6B64\u5E33\u865F")}).catch(m=>{alert("\u8CC7\u6599\u5B58\u53D6\u932F\u8AA4")})}return(m,g)=>(Ke(),Ye("div",YC,[GC,C("div",{class:ke(["login",{display_none:J(s).user.account==""}])},[C("div",qC,[C("h3",null,"\u4F60\u767B\u5165\uFF0C\u73A9\u5BB6\u540D\u7A31\uFF1A"+Re(J(s).user.account),1),C("button",{onClick:g[0]||(g[0]=_=>J(a).replace({path:"/Home"}))},"\u9EDE\u64CA\u8FD4\u56DE\u6BBF\u5802")])],2),C("div",{class:ke(["login",{display_none:J(s).user.account!==""}])},[C("div",QC,[XC,C("div",JC,[ZC,Yo(C("input",{type:"text",placeholder:"\u5E33\u865F",name:"",id:"aa","onUpdate:modelValue":g[1]||(g[1]=_=>l.value=_)},null,512),[[ta,l.value,void 0,{lazy:!0}]])]),C("div",eE,[tE,Yo(C("input",{type:"password",placeholder:"\u5BC6\u78BC",name:"",id:"bb","onUpdate:modelValue":g[2]||(g[2]=_=>c.value=_)},null,512),[[ta,c.value,void 0,{lazy:!0}]])]),C("div",nE,[C("button",{onClick:g[3]||(g[3]=_=>d())},"\u8A3B\u518A"),C("button",{onClick:g[4]||(g[4]=_=>u())},"\u767B\u5165")])])],2)]))}},iE=St(rE,[["__scopeId","data-v-379e314a"]]),sE=pv({history:O_("/Vue3-Vite-Game/"),routes:[{path:"/",name:"initial",component:iE},{path:"/Home",name:"home",component:nC,children:[{path:"character",name:"character",component:()=>Zr(()=>import("./character.34939c84.js"),["assets/character.34939c84.js","assets/character.75cb6d40.css"])},{path:"Info",name:"Info",component:()=>Zr(()=>import("./Info.dba9a9b0.js"),["assets/Info.dba9a9b0.js","assets/Info.f6be1269.css"])}]},{path:"/Dialogue",name:"Dialogue",component:mC},{path:"/Summon",name:"Summon",component:SC},{path:"/Pack",name:"Pack",component:VC},{path:"/Attack",name:"Attack",component:vC},{path:"/:404(.*)*",name:"404",component:()=>Zr(()=>import("./404.a2a089c7.js"),[])}]});function Ku(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ku(Object(n),!0).forEach(function(r){De(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ku(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ns(t){return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ns(t)}function oE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function aE(t,e,n){return e&&Yu(t.prototype,e),n&&Yu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function De(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Yl(t,e){return cE(t)||fE(t,e)||um(t,e)||hE()}function Mi(t){return lE(t)||uE(t)||um(t)||dE()}function lE(t){if(Array.isArray(t))return Ta(t)}function cE(t){if(Array.isArray(t))return t}function uE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fE(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function um(t,e){if(!!t){if(typeof t=="string")return Ta(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ta(t,e)}}function Ta(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gu=function(){},Gl={},fm={},dm=null,hm={mark:Gu,measure:Gu};try{typeof window<"u"&&(Gl=window),typeof document<"u"&&(fm=document),typeof MutationObserver<"u"&&(dm=MutationObserver),typeof performance<"u"&&(hm=performance)}catch{}var mE=Gl.navigator||{},qu=mE.userAgent,Qu=qu===void 0?"":qu,pn=Gl,ye=fm,Xu=dm,Ki=hm;pn.document;var Gt=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",mm=~Qu.indexOf("MSIE")||~Qu.indexOf("Trident/"),Yi,Gi,qi,Qi,Xi,zt="___FONT_AWESOME___",Aa=16,pm="fa",gm="svg-inline--fa",Un="data-fa-i2svg",Pa="data-fa-pseudo-element",pE="data-fa-pseudo-element-pending",ql="data-prefix",Ql="data-icon",Ju="fontawesome-i2svg",gE="async",_E=["HTML","HEAD","STYLE","SCRIPT"],_m=function(){try{return!0}catch{return!1}}(),ve="classic",xe="sharp",Xl=[ve,xe];function Li(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var wi=Li((Yi={},De(Yi,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),De(Yi,xe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Yi)),Ci=Li((Gi={},De(Gi,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),De(Gi,xe,{solid:"fass"}),Gi)),Ei=Li((qi={},De(qi,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),De(qi,xe,{fass:"fa-solid"}),qi)),vE=Li((Qi={},De(Qi,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),De(Qi,xe,{"fa-solid":"fass"}),Qi)),yE=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,vm="fa-layers-text",bE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wE=Li((Xi={},De(Xi,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),De(Xi,xe,{900:"fass"}),Xi)),ym=[1,2,3,4,5,6,7,8,9,10],CE=ym.concat([11,12,13,14,15,16,17,18,19,20]),EE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],An={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ki=new Set;Object.keys(Ci[ve]).map(ki.add.bind(ki));Object.keys(Ci[xe]).map(ki.add.bind(ki));var kE=[].concat(Xl,Mi(ki),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",An.GROUP,An.SWAP_OPACITY,An.PRIMARY,An.SECONDARY]).concat(ym.map(function(t){return"".concat(t,"x")})).concat(CE.map(function(t){return"w-".concat(t)})),ei=pn.FontAwesomeConfig||{};function xE(t){var e=ye.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function IE(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ye&&typeof ye.querySelector=="function"){var SE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];SE.forEach(function(t){var e=Yl(t,2),n=e[0],r=e[1],i=IE(xE(n));i!=null&&(ei[r]=i)})}var bm={styleDefault:"solid",familyDefault:"classic",cssPrefix:pm,replacementClass:gm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ei.familyPrefix&&(ei.cssPrefix=ei.familyPrefix);var Ir=D(D({},bm),ei);Ir.autoReplaceSvg||(Ir.observeMutations=!1);var F={};Object.keys(bm).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(n){Ir[t]=n,ti.forEach(function(r){return r(F)})},get:function(){return Ir[t]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){Ir.cssPrefix=e,ti.forEach(function(n){return n(F)})},get:function(){return Ir.cssPrefix}});pn.FontAwesomeConfig=F;var ti=[];function TE(t){return ti.push(t),function(){ti.splice(ti.indexOf(t),1)}}var Jt=Aa,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AE(t){if(!(!t||!Gt)){var e=ye.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ye.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ye.head.insertBefore(e,r),t}}var PE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xi(){for(var t=12,e="";t-- >0;)e+=PE[Math.random()*62|0];return e}function Dr(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Jl(t){return t.classList?Dr(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function RE(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(wm(t[n]),'" ')},"").trim()}function ho(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Zl(t){return t.size!==Ot.size||t.x!==Ot.x||t.y!==Ot.y||t.rotate!==Ot.rotate||t.flipX||t.flipY}function NE(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function OE(t){var e=t.transform,n=t.width,r=n===void 0?Aa:n,i=t.height,s=i===void 0?Aa:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&mm?l+="translate(".concat(e.x/Jt-r/2,"em, ").concat(e.y/Jt-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Jt,"em), calc(-50% + ").concat(e.y/Jt,"em)) "):l+="translate(".concat(e.x/Jt,"em, ").concat(e.y/Jt,"em) "),l+="scale(".concat(e.size/Jt*(e.flipX?-1:1),", ").concat(e.size/Jt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var DE=`:root, :host {
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
}`;function Cm(){var t=pm,e=gm,n=F.cssPrefix,r=F.replacementClass,i=DE;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Zu=!1;function Fo(){F.autoAddCss&&!Zu&&(AE(Cm()),Zu=!0)}var ME={mixout:function(){return{dom:{css:Cm,insertCss:Fo}}},hooks:function(){return{beforeDOMElementCreation:function(){Fo()},beforeI2svg:function(){Fo()}}}},Vt=pn||{};Vt[zt]||(Vt[zt]={});Vt[zt].styles||(Vt[zt].styles={});Vt[zt].hooks||(Vt[zt].hooks={});Vt[zt].shims||(Vt[zt].shims=[]);var Ct=Vt[zt],Em=[],LE=function t(){ye.removeEventListener("DOMContentLoaded",t),Os=1,Em.map(function(e){return e()})},Os=!1;Gt&&(Os=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),Os||ye.addEventListener("DOMContentLoaded",LE));function FE(t){!Gt||(Os?setTimeout(t,0):Em.push(t))}function Fi(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?wm(t):"<".concat(e," ").concat(RE(r),">").concat(s.map(Fi).join(""),"</").concat(e,">")}function ef(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var $E=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},$o=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?$E(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function UE(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ra(t){var e=UE(t);return e.length===1?e[0].toString(16):null}function BE(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function tf(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Na(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=tf(e);typeof Ct.hooks.addPack=="function"&&!i?Ct.hooks.addPack(t,tf(e)):Ct.styles[t]=D(D({},Ct.styles[t]||{}),s),t==="fas"&&Na("fa",e)}var Ji,Zi,es,tr=Ct.styles,HE=Ct.shims,jE=(Ji={},De(Ji,ve,Object.values(Ei[ve])),De(Ji,xe,Object.values(Ei[xe])),Ji),ec=null,km={},xm={},Im={},Sm={},Tm={},WE=(Zi={},De(Zi,ve,Object.keys(wi[ve])),De(Zi,xe,Object.keys(wi[xe])),Zi);function zE(t){return~kE.indexOf(t)}function VE(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!zE(i)?i:null}var Am=function(){var e=function(s){return $o(tr,function(o,a,l){return o[l]=$o(a,s,{}),o},{})};km=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),xm=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Tm=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in tr||F.autoFetchSvg,r=$o(HE,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Im=r.names,Sm=r.unicodes,ec=mo(F.styleDefault,{family:F.familyDefault})};TE(function(t){ec=mo(t.styleDefault,{family:F.familyDefault})});Am();function tc(t,e){return(km[t]||{})[e]}function KE(t,e){return(xm[t]||{})[e]}function Pn(t,e){return(Tm[t]||{})[e]}function Pm(t){return Im[t]||{prefix:null,iconName:null}}function YE(t){var e=Sm[t],n=tc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gn(){return ec}var nc=function(){return{prefix:null,iconName:null,rest:[]}};function mo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=wi[r][t],s=Ci[r][t]||Ci[r][i],o=t in Ct.styles?t:null;return s||o||null}var nf=(es={},De(es,ve,Object.keys(Ei[ve])),De(es,xe,Object.keys(Ei[xe])),es);function po(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},De(e,ve,"".concat(F.cssPrefix,"-").concat(ve)),De(e,xe,"".concat(F.cssPrefix,"-").concat(xe)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(c){return nf[ve].includes(c)}))&&(a=ve),(t.includes(s[xe])||t.some(function(c){return nf[xe].includes(c)}))&&(a=xe);var l=t.reduce(function(c,u){var f=VE(F.cssPrefix,u);if(tr[u]?(u=jE[a].includes(u)?vE[a][u]:u,o=u,c.prefix=u):WE[a].indexOf(u)>-1?(o=u,c.prefix=mo(u,{family:a})):f?c.iconName=f:u!==F.replacementClass&&u!==s[ve]&&u!==s[xe]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var d=o==="fa"?Pm(c.iconName):{},m=Pn(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!tr.far&&tr.fas&&!F.autoFetchSvg&&(c.prefix="fas")}return c},nc());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===xe&&(tr.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gn()||"fas"),l}var GE=function(){function t(){oE(this,t),this.definitions={}}return aE(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Na(a,o[a]);var l=Ei[ve][a];l&&Na(l,o[a]),Am()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}]),t}(),rf=[],nr={},ur={},qE=Object.keys(ur);function QE(t,e){var n=e.mixoutsTo;return rf=t,nr={},Object.keys(ur).forEach(function(r){qE.indexOf(r)===-1&&delete ur[r]}),rf.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ns(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){nr[o]||(nr[o]=[]),nr[o].push(s[o])})}r.provides&&r.provides(ur)}),n}function Oa(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=nr[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Bn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=nr[t]||[];i.forEach(function(s){s.apply(null,n)})}function Kt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ur[t]?ur[t].apply(null,e):void 0}function Da(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||gn();if(!!e)return e=Pn(n,e)||e,ef(Rm.definitions,n,e)||ef(Ct.styles,n,e)}var Rm=new GE,XE=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Bn("noAuto")},JE={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gt?(Bn("beforeI2svg",e),Kt("pseudoElements2svg",e),Kt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,FE(function(){ek({autoReplaceSvgRoot:n}),Bn("watch",e)})}},ZE={icon:function(e){if(e===null)return null;if(Ns(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Pn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=mo(e[0]);return{prefix:r,iconName:Pn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(F.cssPrefix,"-"))>-1||e.match(yE))){var i=po(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||gn(),iconName:Pn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=gn();return{prefix:s,iconName:Pn(s,e)||e}}}},st={noAuto:XE,config:F,dom:JE,parse:ZE,library:Rm,findIconDefinition:Da,toHtml:Fi},ek=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ye:n;(Object.keys(Ct.styles).length>0||F.autoFetchSvg)&&Gt&&F.autoReplaceSvg&&st.dom.i2svg({node:r})};function go(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Fi(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Gt){var r=ye.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function tk(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Zl(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=ho(D(D({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function nk(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(F.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function rc(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,g=r.found?r:n,_=g.width,b=g.height,v=i==="fak",k=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(be){return f.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(f.classes).join(" "),M={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(b)})},H=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/b*16*.0625,"em")}:{};m&&(M.attributes[Un]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||xi())},children:[l]}),delete M.attributes.title);var W=D(D({},M),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:D(D({},H),f.styles)}),oe=r.found&&n.found?Kt("generateAbstractMask",W)||{children:[],attributes:{}}:Kt("generateAbstractIcon",W)||{children:[],attributes:{}},z=oe.children,X=oe.attributes;return W.children=z,W.attributes=X,a?nk(W):tk(W)}function sf(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Un]="");var u=D({},o.styles);Zl(i)&&(u.transform=OE({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=ho(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function rk(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ho(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Uo=Ct.styles;function Ma(t){var e=t[0],n=t[1],r=t.slice(4),i=Yl(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(An.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(An.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(An.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var ik={found:!1,width:512,height:512};function sk(t,e){!_m&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function La(t,e){var n=e;return e==="fa"&&F.styleDefault!==null&&(e=gn()),new Promise(function(r,i){if(Kt("missingIconAbstract"),n==="fa"){var s=Pm(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Uo[e]&&Uo[e][t]){var o=Uo[e][t];return r(Ma(o))}sk(t,e),r(D(D({},ik),{},{icon:F.showMissingIcons&&t?Kt("missingIconAbstract")||{}:{}}))})}var of=function(){},Fa=F.measurePerformance&&Ki&&Ki.mark&&Ki.measure?Ki:{mark:of,measure:of},Wr='FA "6.2.0"',ok=function(e){return Fa.mark("".concat(Wr," ").concat(e," begins")),function(){return Nm(e)}},Nm=function(e){Fa.mark("".concat(Wr," ").concat(e," ends")),Fa.measure("".concat(Wr," ").concat(e),"".concat(Wr," ").concat(e," begins"),"".concat(Wr," ").concat(e," ends"))},ic={begin:ok,end:Nm},as=function(){};function af(t){var e=t.getAttribute?t.getAttribute(Un):null;return typeof e=="string"}function ak(t){var e=t.getAttribute?t.getAttribute(ql):null,n=t.getAttribute?t.getAttribute(Ql):null;return e&&n}function lk(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function ck(){if(F.autoReplaceSvg===!0)return ls.replace;var t=ls[F.autoReplaceSvg];return t||ls.replace}function uk(t){return ye.createElementNS("http://www.w3.org/2000/svg",t)}function fk(t){return ye.createElement(t)}function Om(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?uk:fk:n;if(typeof t=="string")return ye.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Om(o,{ceFn:r}))}),i}function dk(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ls={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Om(i),n)}),n.getAttribute(Un)===null&&F.keepOriginalSource){var r=ye.createComment(dk(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Jl(n).indexOf(F.replacementClass))return ls.replace(e);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===F.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Fi(a)}).join(`
`);n.setAttribute(Un,""),n.innerHTML=o}};function lf(t){t()}function Dm(t,e){var n=typeof e=="function"?e:as;if(t.length===0)n();else{var r=lf;F.mutateApproach===gE&&(r=pn.requestAnimationFrame||lf),r(function(){var i=ck(),s=ic.begin("mutate");t.map(i),s(),n()})}}var sc=!1;function Mm(){sc=!0}function $a(){sc=!1}var Ds=null;function cf(t){if(!!Xu&&!!F.observeMutations){var e=t.treeCallback,n=e===void 0?as:e,r=t.nodeCallback,i=r===void 0?as:r,s=t.pseudoElementsCallback,o=s===void 0?as:s,a=t.observeMutationsRoot,l=a===void 0?ye:a;Ds=new Xu(function(c){if(!sc){var u=gn();Dr(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!af(f.addedNodes[0])&&(F.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&af(f.target)&&~EE.indexOf(f.attributeName))if(f.attributeName==="class"&&ak(f.target)){var d=po(Jl(f.target)),m=d.prefix,g=d.iconName;f.target.setAttribute(ql,m||u),g&&f.target.setAttribute(Ql,g)}else lk(f.target)&&i(f.target)})}}),Gt&&Ds.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hk(){!Ds||Ds.disconnect()}function mk(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function pk(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=po(Jl(t));return i.prefix||(i.prefix=gn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=KE(i.prefix,t.innerText)||tc(i.prefix,Ra(t.innerText))),!i.iconName&&F.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function gk(t){var e=Dr(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return F.autoA11y&&(n?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||xi()):(e["aria-hidden"]="true",e.focusable="false")),e}function _k(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function uf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=pk(t),r=n.iconName,i=n.prefix,s=n.rest,o=gk(t),a=Oa("parseNodeAttributes",{},t),l=e.styleParser?mk(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var vk=Ct.styles;function Lm(t){var e=F.autoReplaceSvg==="nest"?uf(t,{styleParser:!1}):uf(t);return~e.extra.classes.indexOf(vm)?Kt("generateLayersText",t,e):Kt("generateSvgReplacementMutation",t,e)}var _n=new Set;Xl.map(function(t){_n.add("fa-".concat(t))});Object.keys(wi[ve]).map(_n.add.bind(_n));Object.keys(wi[xe]).map(_n.add.bind(_n));_n=Mi(_n);function ff(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gt)return Promise.resolve();var n=ye.documentElement.classList,r=function(f){return n.add("".concat(Ju,"-").concat(f))},i=function(f){return n.remove("".concat(Ju,"-").concat(f))},s=F.autoFetchSvg?_n:Xl.map(function(u){return"fa-".concat(u)}).concat(Object.keys(vk));s.includes("fa")||s.push("fa");var o=[".".concat(vm,":not([").concat(Un,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Un,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Dr(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ic.begin("onTree"),c=a.reduce(function(u,f){try{var d=Lm(f);d&&u.push(d)}catch(m){_m||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){Dm(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function yk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lm(t).then(function(n){n&&Dm([n],e)})}function bk(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Da(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Da(i||{})),t(r,D(D({},n),{},{mask:i}))}}var wk=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ot:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,m=n.titleId,g=m===void 0?null:m,_=n.classes,b=_===void 0?[]:_,v=n.attributes,k=v===void 0?{}:v,M=n.styles,H=M===void 0?{}:M;if(!!e){var W=e.prefix,oe=e.iconName,z=e.icon;return go(D({type:"icon"},e),function(){return Bn("beforeDOMElementCreation",{iconDefinition:e,params:n}),F.autoA11y&&(d?k["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(g||xi()):(k["aria-hidden"]="true",k.focusable="false")),rc({icons:{main:Ma(z),mask:l?Ma(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:oe,transform:D(D({},Ot),i),symbol:o,title:d,maskId:u,titleId:g,extra:{attributes:k,styles:H,classes:b}})})}},Ck={mixout:function(){return{icon:bk(wk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ff,n.nodeCallback=yk,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ye:r,s=n.callback,o=s===void 0?function(){}:s;return ff(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,g){Promise.all([La(i,a),u.iconName?La(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var b=Yl(_,2),v=b[0],k=b[1];m([n,rc({icons:{main:v,mask:k},prefix:a,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ho(a);l.length>0&&(i.style=l);var c;return Zl(o)&&(c=Kt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Ek={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return go({type:"layer"},function(){Bn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Mi(s)).join(" ")},children:o}]})}}}},kk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return go({type:"counter",content:n},function(){return Bn("beforeDOMElementCreation",{content:n,params:r}),rk({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Mi(a))}})})}}}},xk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Ot:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return go({type:"text",content:n},function(){return Bn("beforeDOMElementCreation",{content:n,params:r}),sf({content:n,transform:D(D({},Ot),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Mi(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(mm){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return F.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,sf({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Ik=new RegExp('"',"ug"),df=[1105920,1112319];function Sk(t){var e=t.replace(Ik,""),n=BE(e,0),r=n>=df[0]&&n<=df[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ra(i?e[0]:e),isSecondary:r||i}}function hf(t,e){var n="".concat(pE).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Dr(t.children),o=s.filter(function(z){return z.getAttribute(Pa)===e})[0],a=pn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(bE),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?xe:ve,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ci[d][l[2].toLowerCase()]:wE[d][c],g=Sk(f),_=g.value,b=g.isSecondary,v=l[0].startsWith("FontAwesome"),k=tc(m,_),M=k;if(v){var H=YE(_);H.iconName&&H.prefix&&(k=H.iconName,m=H.prefix)}if(k&&!b&&(!o||o.getAttribute(ql)!==m||o.getAttribute(Ql)!==M)){t.setAttribute(n,M),o&&t.removeChild(o);var W=_k(),oe=W.extra;oe.attributes[Pa]=e,La(k,m).then(function(z){var X=rc(D(D({},W),{},{icons:{main:z,mask:nc()},prefix:m,iconName:M,extra:oe,watchable:!0})),be=ye.createElement("svg");e==="::before"?t.insertBefore(be,t.firstChild):t.appendChild(be),be.outerHTML=X.map(function(Me){return Fi(Me)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Tk(t){return Promise.all([hf(t,"::before"),hf(t,"::after")])}function Ak(t){return t.parentNode!==document.head&&!~_E.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Pa)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mf(t){if(!!Gt)return new Promise(function(e,n){var r=Dr(t.querySelectorAll("*")).filter(Ak).map(Tk),i=ic.begin("searchPseudoElements");Mm(),Promise.all(r).then(function(){i(),$a(),e()}).catch(function(){i(),$a(),n()})})}var Pk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mf,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ye:r;F.searchPseudoElements&&mf(i)}}},pf=!1,Rk={mixout:function(){return{dom:{unwatch:function(){Mm(),pf=!0}}}},hooks:function(){return{bootstrap:function(){cf(Oa("mutationObserverCallbacks",{}))},noAuto:function(){hk()},watch:function(n){var r=n.observeMutationsRoot;pf?$a():cf(Oa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gf=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Nk={mixout:function(){return{parse:{transform:function(n){return gf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=gf(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:d};return{tag:"g",attributes:D({},m.outer),children:[{tag:"g",attributes:D({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),m.path)}]}]}}}},Bo={x:0,y:0,width:"100%",height:"100%"};function _f(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ok(t){return t.tag==="g"?t.children:[t]}var Dk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?po(i.split(" ").map(function(o){return o.trim()})):nc();return s.prefix||(s.prefix=gn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,f=o.width,d=o.icon,m=NE({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:D(D({},Bo),{},{fill:"white"})},_=u.children?{children:u.children.map(_f)}:{},b={tag:"g",attributes:D({},m.inner),children:[_f(D({tag:u.tag,attributes:D(D({},u.attributes),m.path)},_))]},v={tag:"g",attributes:D({},m.outer),children:[b]},k="mask-".concat(a||xi()),M="clip-".concat(a||xi()),H={tag:"mask",attributes:D(D({},Bo),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Ok(d)},H]};return r.push(W,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(k,")")},Bo)}),{children:r,attributes:i}}}},Mk={provides:function(e){var n=!1;pn.matchMedia&&(n=pn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Fk=[ME,Ck,Ek,kk,xk,Pk,Rk,Nk,Dk,Mk,Lk];QE(Fk,{mixoutsTo:st});st.noAuto;var Fm=st.config,$k=st.library;st.dom;var Ms=st.parse;st.findIconDefinition;st.toHtml;var Uk=st.icon;st.layer;var Bk=st.text;st.counter;function vf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vf(Object(n),!0).forEach(function(r){Je(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ls(t){return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ls(t)}function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jk(t,e){if(t==null)return{};var n=Hk(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Ua(t){return Wk(t)||zk(t)||Vk(t)||Kk()}function Wk(t){if(Array.isArray(t))return Ba(t)}function zk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Vk(t,e){if(!!t){if(typeof t=="string")return Ba(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ba(t,e)}}function Ba(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Kk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Yk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$m={exports:{}};(function(t){(function(e){var n=function(v,k,M){if(!c(k)||f(k)||d(k)||m(k)||l(k))return k;var H,W=0,oe=0;if(u(k))for(H=[],oe=k.length;W<oe;W++)H.push(n(v,k[W],M));else{H={};for(var z in k)Object.prototype.hasOwnProperty.call(k,z)&&(H[v(z,M)]=n(v,k[z],M))}return H},r=function(v,k){k=k||{};var M=k.separator||"_",H=k.split||/(?=[A-Z])/;return v.split(H).join(M)},i=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(k,M){return M?M.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var k=i(v);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(v,k){return r(v,k).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},m=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},_=function(v,k){var M=k&&"process"in k?k.process:k;return typeof M!="function"?v:function(H,W){return M(H,v,W)}},b={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,k){return n(_(i,k),v)},decamelizeKeys:function(v,k){return n(_(o,k),v,k)},pascalizeKeys:function(v,k){return n(_(s,k),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(Yk)})($m);var Gk=$m.exports,qk=["class","style"];function Qk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Gk.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Xk(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function oc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return oc(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Xk(u);break;case"style":l.style=Qk(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=jk(n,qk);return Ys(t.tag,vt(vt(vt({},e),{},{class:i.class,style:vt(vt({},i.style),o)},i.attrs),a),r)}var Um=!1;try{Um=!0}catch{}function Jk(){if(!Um&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ni(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Je({},t,e):{}}function Zk(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Je(e,"fa-".concat(t.size),t.size!==null),Je(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),Je(e,"fa-pull-".concat(t.pull),t.pull!==null),Je(e,"fa-swap-opacity",t.swapOpacity),Je(e,"fa-bounce",t.bounce),Je(e,"fa-shake",t.shake),Je(e,"fa-beat",t.beat),Je(e,"fa-fade",t.fade),Je(e,"fa-beat-fade",t.beatFade),Je(e,"fa-flash",t.flash),Je(e,"fa-spin-pulse",t.spinPulse),Je(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function yf(t){if(t&&Ls(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ms.icon)return Ms.icon(t);if(t===null)return null;if(Ls(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ex=Ii({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=we(function(){return yf(e.icon)}),s=we(function(){return ni("classes",Zk(e))}),o=we(function(){return ni("transform",typeof e.transform=="string"?Ms.transform(e.transform):e.transform)}),a=we(function(){return ni("mask",yf(e.mask))}),l=we(function(){return Uk(i.value,vt(vt(vt(vt({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ft(l,function(u){if(!u)return Jk("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=we(function(){return l.value?oc(l.value.abstract[0],{},r):null});return function(){return c.value}}});Ii({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Fm.familyPrefix,s=we(function(){return["".concat(i,"-layers")].concat(Ua(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Ys("div",{class:s.value},r.default?r.default():[])}}});Ii({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Fm.familyPrefix,s=we(function(){return ni("classes",[].concat(Ua(e.counter?["".concat(i,"-layers-counter")]:[]),Ua(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=we(function(){return ni("transform",typeof e.transform=="string"?Ms.transform(e.transform):e.transform)}),a=we(function(){var c=Bk(e.value.toString(),vt(vt({},o.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=we(function(){return oc(a.value,{},r)});return function(){return l.value}}});var tx={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},nx={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"]};$k.add(tx,nx);const _o=o_(gw);_o.component("font-awesome-icon",ex);_o.use(c_());_o.use(sE);_o.mount("#app");document.oncontextmenu=function(){window.event.returnValue=!1};export{Gr as C,et as F,St as _,C as a,nd as b,Ye as c,Wn as d,ke as n,Ke as o,jn as p,te as r,Re as t,vn as u,ft as w};
