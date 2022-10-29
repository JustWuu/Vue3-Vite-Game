(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ml="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pl=_a(ml);function So(e){return!!e||e===""}function xa(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?vl(r):xa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(se(e))return e}}const hl=/;(?![^(]*\))/g,gl=/:(.+)/;function vl(e){const t={};return e.split(hl).forEach(n=>{if(n){const r=n.split(gl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function wa(e){let t="";if(he(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=wa(e[n]);r&&(t+=r+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bl=e=>he(e)?e:e==null?"":H(e)||se(e)&&(e.toString===No||!B(e.toString))?JSON.stringify(e,Ro,2):String(e),Ro=(e,t)=>t&&t.__v_isRef?Ro(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Io(t)?{[`Set(${t.size})`]:[...t.values()]}:se(t)&&!H(t)&&!Mo(t)?String(t):t,ee={},Bt=[],De=()=>{},yl=()=>!1,_l=/^on[^a-z]/,br=e=>_l.test(e),ka=e=>e.startsWith("onUpdate:"),_e=Object.assign,Ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xl=Object.prototype.hasOwnProperty,Y=(e,t)=>xl.call(e,t),H=Array.isArray,Ut=e=>yr(e)==="[object Map]",Io=e=>yr(e)==="[object Set]",B=e=>typeof e=="function",he=e=>typeof e=="string",Aa=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",To=e=>se(e)&&B(e.then)&&B(e.catch),No=Object.prototype.toString,yr=e=>No.call(e),wl=e=>yr(e).slice(8,-1),Mo=e=>yr(e)==="[object Object]",Oa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kl=/-(\w)/g,Ge=_r(e=>e.replace(kl,(t,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,en=_r(e=>e.replace(El,"-$1").toLowerCase()),xr=_r(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=_r(e=>e?`on${xr(e)}`:""),xn=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},or=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Al=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let li;const Ol=()=>li||(li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ye;class Fo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Pl(e){return new Fo(e)}function Cl(e,t=Ye){t&&t.active&&t.effects.push(e)}const Pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Lo=e=>(e.w&pt)>0,$o=e=>(e.n&pt)>0,Sl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},Rl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Lo(a)&&!$o(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},Vr=new WeakMap;let un=0,pt=1;const qr=30;let Fe;const Pt=Symbol(""),Xr=Symbol("");class Ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cl(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,ut=!0,pt=1<<++un,un<=qr?Sl(this):ci(this),this.fn()}finally{un<=qr&&Rl(this),pt=1<<--un,Fe=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const jo=[];function tn(){jo.push(ut),ut=!1}function nn(){const e=jo.pop();ut=e===void 0?!0:e}function Se(e,t,n){if(ut&&Fe){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Pa()),Do(a)}}function Do(e,t){let n=!1;un<=qr?$o(e)||(e.n|=pt,n=!Lo(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function Ze(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?Oa(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Ut(e)&&s.push(o.get(Xr)));break;case"delete":H(e)||(s.push(o.get(Pt)),Ut(e)&&s.push(o.get(Xr)));break;case"set":Ut(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&Gr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Gr(Pa(l))}}function Gr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&fi(r);for(const r of n)r.computed||fi(r)}function fi(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Il=_a("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Aa)),Tl=Sa(),Nl=Sa(!1,!0),Ml=Sa(!0),ui=Fl();function Fl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=q(this)[t].apply(this,n);return nn(),r}}),e}function Sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ql:Yo:t?Wo:Uo).get(r))return r;const o=H(r);if(!e&&o&&Y(ui,a))return Reflect.get(ui,a,i);const s=Reflect.get(r,a,i);return(Aa(a)?zo.has(a):Il(a))||(e||Se(r,"get",a),t)?s:ve(s)?o&&Oa(a)?s:s.value:se(s)?e?Ko(s):Nn(s):s}}const Ll=Ho(),$l=Ho(!0);function Ho(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ve(o)&&!ve(a))return!1;if(!e&&(!sr(a)&&!Vt(a)&&(o=q(o),a=q(a)),!H(n)&&ve(o)&&!ve(a)))return o.value=a,!0;const s=H(n)&&Oa(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===q(i)&&(s?xn(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function jl(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function Dl(e,t){const n=Reflect.has(e,t);return(!Aa(t)||!zo.has(t))&&Se(e,"has",t),n}function zl(e){return Se(e,"iterate",H(e)?"length":Pt),Reflect.ownKeys(e)}const Bo={get:Tl,set:Ll,deleteProperty:jl,has:Dl,ownKeys:zl},Hl={get:Ml,set(e,t){return!0},deleteProperty(e,t){return!0}},Bl=_e({},Bo,{get:Nl,set:$l}),Ra=e=>e,wr=e=>Reflect.getPrototypeOf(e);function Dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=q(e),i=q(t);n||(t!==i&&Se(a,"get",t),Se(a,"get",i));const{has:o}=wr(a),s=r?Ra:n?Ma:wn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function zn(e,t=!1){const n=this.__v_raw,r=q(n),a=q(e);return t||(e!==a&&Se(r,"has",e),Se(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Hn(e,t=!1){return e=e.__v_raw,!t&&Se(q(e),"iterate",Pt),Reflect.get(e,"size",e)}function di(e){e=q(e);const t=q(this);return wr(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function mi(e,t){t=q(t);const n=q(this),{has:r,get:a}=wr(n);let i=r.call(n,e);i||(e=q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?xn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function pi(e){const t=q(this),{has:n,get:r}=wr(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function hi(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function Bn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=q(o),l=t?Ra:e?Ma:wn;return!e&&Se(s,"iterate",Pt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Un(e,t,n){return function(...r){const a=this.__v_raw,i=q(a),o=Ut(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ra:t?Ma:wn;return!t&&Se(i,"iterate",l?Xr:Pt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:this}}function Ul(){const e={get(i){return Dn(this,i)},get size(){return Hn(this)},has:zn,add:di,set:mi,delete:pi,clear:hi,forEach:Bn(!1,!1)},t={get(i){return Dn(this,i,!1,!0)},get size(){return Hn(this)},has:zn,add:di,set:mi,delete:pi,clear:hi,forEach:Bn(!1,!0)},n={get(i){return Dn(this,i,!0)},get size(){return Hn(this,!0)},has(i){return zn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Bn(!0,!1)},r={get(i){return Dn(this,i,!0,!0)},get size(){return Hn(this,!0)},has(i){return zn.call(this,i,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Un(i,!1,!1),n[i]=Un(i,!0,!1),t[i]=Un(i,!1,!0),r[i]=Un(i,!0,!0)}),[e,n,t,r]}const[Wl,Yl,Kl,Vl]=Ul();function Ia(e,t){const n=t?e?Vl:Kl:e?Yl:Wl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const ql={get:Ia(!1,!1)},Xl={get:Ia(!1,!0)},Gl={get:Ia(!0,!1)},Uo=new WeakMap,Wo=new WeakMap,Yo=new WeakMap,Ql=new WeakMap;function Jl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zl(e){return e.__v_skip||!Object.isExtensible(e)?0:Jl(wl(e))}function Nn(e){return Vt(e)?e:Ta(e,!1,Bo,ql,Uo)}function ec(e){return Ta(e,!1,Bl,Xl,Wo)}function Ko(e){return Ta(e,!0,Hl,Gl,Yo)}function Ta(e,t,n,r,a){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Zl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Wt(e){return Vt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function Vo(e){return Wt(e)||Vt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Na(e){return or(e,"__v_skip",!0),e}const wn=e=>se(e)?Nn(e):e,Ma=e=>se(e)?Ko(e):e;function qo(e){ut&&Fe&&(e=q(e),Do(e.dep||(e.dep=Pa())))}function Xo(e,t){e=q(e),e.dep&&Gr(e.dep)}function ve(e){return!!(e&&e.__v_isRef===!0)}function Go(e){return Qo(e,!1)}function tc(e){return Qo(e,!0)}function Qo(e,t){return ve(e)?e:new nc(e,t)}class nc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:wn(t)}get value(){return qo(this),this._value}set value(t){const n=this.__v_isShallow||sr(t)||Vt(t);t=n?t:q(t),xn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:wn(t),Xo(this))}}function Ae(e){return ve(e)?e.value:e}const rc={get:(e,t,n)=>Ae(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ve(a)&&!ve(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Jo(e){return Wt(e)?e:new Proxy(e,rc)}var Zo;class ac{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zo]=!1,this._dirty=!0,this.effect=new Ca(t,()=>{this._dirty||(this._dirty=!0,Xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=q(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zo="__v_isReadonly";function ic(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=De):(r=e.get,a=e.set),new ac(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){kr(i,t,n)}return a}function ze(e,t,n,r){if(B(e)){const i=dt(e,t,n,r);return i&&To(i)&&i.catch(o=>{kr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function kr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}oc(e,n,a,r)}function oc(e,t,n,r=!0){console.error(e)}let kn=!1,Qr=!1;const ge=[];let Ve=0;const Yt=[];let Je=null,kt=0;const es=Promise.resolve();let Fa=null;function ts(e){const t=Fa||es;return e?t.then(this?e.bind(this):e):t}function sc(e){let t=Ve+1,n=ge.length;for(;t<n;){const r=t+n>>>1;En(ge[r])<e?t=r+1:n=r}return t}function La(e){(!ge.length||!ge.includes(e,kn&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?ge.push(e):ge.splice(sc(e.id),0,e),ns())}function ns(){!kn&&!Qr&&(Qr=!0,Fa=es.then(as))}function lc(e){const t=ge.indexOf(e);t>Ve&&ge.splice(t,1)}function cc(e){H(e)?Yt.push(...e):(!Je||!Je.includes(e,e.allowRecurse?kt+1:kt))&&Yt.push(e),ns()}function gi(e,t=kn?Ve+1:0){for(;t<ge.length;t++){const n=ge[t];n&&n.pre&&(ge.splice(t,1),t--,n())}}function rs(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>En(n)-En(r)),kt=0;kt<Je.length;kt++)Je[kt]();Je=null,kt=0}}const En=e=>e.id==null?1/0:e.id,fc=(e,t)=>{const n=En(e)-En(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function as(e){Qr=!1,kn=!0,ge.sort(fc);const t=De;try{for(Ve=0;Ve<ge.length;Ve++){const n=ge[Ve];n&&n.active!==!1&&dt(n,null,14)}}finally{Ve=0,ge.length=0,rs(),kn=!1,Fa=null,(ge.length||Yt.length)&&as()}}function uc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||ee;p&&(a=n.map(g=>g.trim())),d&&(a=n.map(Al))}let s,l=r[s=Fr(t)]||r[s=Fr(Ge(t))];!l&&i&&(l=r[s=Fr(en(t))]),l&&ze(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,a)}}function is(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!B(e)){const l=f=>{const c=is(f,t,!0);c&&(s=!0,_e(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(se(e)&&r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):_e(o,i),se(e)&&r.set(e,o),o)}function Er(e,t){return!e||!br(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,en(t))||Y(e,t))}let Oe=null,Ar=null;function lr(e){const t=Oe;return Oe=e,Ar=e&&e.type.__scopeId||null,t}function dc(e){Ar=e}function mc(){Ar=null}function Ct(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Oi(-1);const i=lr(t);let o;try{o=e(...a)}finally{lr(i),r._d&&Oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let T,v;const w=lr(e);try{if(n.shapeFlag&4){const D=a||r;T=Ke(c.call(D,D,d,i,g,p,A)),v=l}else{const D=t;T=Ke(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),v=t.props?l:pc(l)}}catch(D){hn.length=0,kr(D,e,1),T=ne(qt)}let F=T;if(v&&S!==!1){const D=Object.keys(v),{shapeFlag:K}=F;D.length&&K&7&&(o&&D.some(ka)&&(v=hc(v,o)),F=Xt(F,v))}return n.dirs&&(F=Xt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,lr(w),T}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||br(n))&&((t||(t={}))[n]=e[n]);return t},hc=(e,t)=>{const n={};for(const r in e)(!ka(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!Er(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?vi(r,o,f):!0:!!o;return!1}function vi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function vc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bc=e=>e.__isSuspense;function yc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):cc(e)}function tr(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function mt(e,t,n=!1){const r=pe||Oe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r.proxy):t}}const bi={};function mn(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){const s=pe;let l,f=!1,c=!1;if(ve(e)?(l=()=>e.value,f=sr(e)):Wt(e)?(l=()=>e,r=!0):H(e)?(c=!0,f=e.some(v=>Wt(v)||sr(v)),l=()=>e.map(v=>{if(ve(v))return v.value;if(Wt(v))return Dt(v);if(B(v))return dt(v,s,2)})):B(e)?t?l=()=>dt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[p])}:l=De,t&&r){const v=l;l=()=>Dt(v())}let d,p=v=>{d=T.onStop=()=>{dt(v,s,4)}};if(On)return p=De,t?n&&ze(t,s,3,[l(),c?[]:void 0,p]):l(),De;let g=c?[]:bi;const A=()=>{if(!!T.active)if(t){const v=T.run();(r||f||(c?v.some((w,F)=>xn(w,g[F])):xn(v,g)))&&(d&&d(),ze(t,s,3,[v,g===bi?void 0:g,p]),g=v)}else T.run()};A.allowRecurse=!!t;let S;a==="sync"?S=A:a==="post"?S=()=>ke(A,s&&s.suspense):(A.pre=!0,s&&(A.id=s.uid),S=()=>La(A));const T=new Ca(l,S);return t?n?A():g=T.run():a==="post"?ke(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Ea(s.scope.effects,T)}}function _c(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const o=pe;Gt(this);const s=os(a,i.bind(r),n);return o?Gt(o):St(),s}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Dt(e,t){if(!se(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ve(e))Dt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Dt(e[n],t);else if(Io(e)||Ut(e))e.forEach(n=>{Dt(n,t)});else if(Mo(e))for(const n in e)Dt(e[n],t);return e}function Mn(e){return B(e)?{setup:e,name:e.name}:e}const pn=e=>!!e.type.__asyncLoader,ls=e=>e.type.__isKeepAlive;function xc(e,t){cs(e,"a",t)}function wc(e,t){cs(e,"da",t)}function cs(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Or(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ls(a.parent.vnode)&&kc(r,t,n,a),a=a.parent}}function kc(e,t,n,r){const a=Or(t,e,r,!0);fs(()=>{Ea(r[t],a)},n)}function Or(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Gt(n);const s=ze(t,n,e,o);return St(),nn(),s});return r?a.unshift(i):a.push(i),i}}const rt=e=>(t,n=pe)=>(!On||e==="sp")&&Or(e,(...r)=>t(...r),n),Ec=rt("bm"),Ac=rt("m"),Oc=rt("bu"),Pc=rt("u"),Cc=rt("bum"),fs=rt("um"),Sc=rt("sp"),Rc=rt("rtg"),Ic=rt("rtc");function Tc(e,t=pe){Or("ec",e,t)}function _t(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),ze(l,n,8,[e.el,s,e,t]),nn())}}const us="components";function Nc(e,t){return Fc(us,e,!0,t)||e}const Mc=Symbol();function Fc(e,t,n=!0,r=!1){const a=Oe||pe;if(a){const i=a.type;if(e===us){const s=mf(i,!1);if(s&&(s===t||s===Ge(t)||s===xr(Ge(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[Ge(t)]||e[xr(Ge(t))])}function hp(e,t,n={},r,a){if(Oe.isCE||Oe.parent&&pn(Oe.parent)&&Oe.parent.isCE)return ne("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),Nt();const o=i&&ds(i(n)),s=ef(Ee,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function ds(e){return e.some(t=>ur(t)?!(t.type===qt||t.type===Ee&&!ds(t.children)):!0)?e:null}const Jr=e=>e?ks(e)?Ha(e)||e.proxy:Jr(e.parent):null,cr=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$emit:e=>e.emit,$options:e=>$a(e),$forceUpdate:e=>e.f||(e.f=()=>La(e.update)),$nextTick:e=>e.n||(e.n=ts.bind(e.proxy)),$watch:e=>_c.bind(e)}),Lc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ee&&Y(r,t))return o[t]=1,r[t];if(a!==ee&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==ee&&Y(n,t))return o[t]=4,n[t];Zr&&(o[t]=0)}}const c=cr[t];let d,p;if(c)return t==="$attrs"&&Se(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&Y(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ee&&Y(a,t)?(a[t]=n,!0):r!==ee&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&Y(e,o)||t!==ee&&Y(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(cr,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Zr=!0;function $c(e){const t=$a(e),n=e.proxy,r=e.ctx;Zr=!1,t.beforeCreate&&_i(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:T,beforeDestroy:v,beforeUnmount:w,destroyed:F,unmounted:D,render:K,renderTracked:ae,renderTriggered:le,errorCaptured:Pe,serverPrefetch:be,expose:Ie,inheritAttrs:it,components:Be,directives:Mt,filters:bt}=t;if(f&&jc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];B(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);se(J)&&(e.data=Nn(J))}if(Zr=!0,i)for(const J in i){const G=i[J],Te=B(G)?G.bind(n,n):B(G.get)?G.get.bind(n,n):De,yt=!B(G)&&B(G.set)?G.set.bind(n):De,Ne=oe({get:Te,set:yt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:xe=>Ne.value=xe})}if(s)for(const J in s)ms(s[J],r,n,J);if(l){const J=B(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{tr(G,J[G])})}c&&_i(c,e,"c");function fe(J,G){H(G)?G.forEach(Te=>J(Te.bind(n))):G&&J(G.bind(n))}if(fe(Ec,d),fe(Ac,p),fe(Oc,g),fe(Pc,A),fe(xc,S),fe(wc,T),fe(Tc,Pe),fe(Ic,ae),fe(Rc,le),fe(Cc,w),fe(fs,D),fe(Sc,be),H(Ie))if(Ie.length){const J=e.exposed||(e.exposed={});Ie.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Te=>n[G]=Te})})}else e.exposed||(e.exposed={});K&&e.render===De&&(e.render=K),it!=null&&(e.inheritAttrs=it),Be&&(e.components=Be),Mt&&(e.directives=Mt)}function jc(e,t,n=De,r=!1){H(e)&&(e=ea(e));for(const a in e){const i=e[a];let o;se(i)?"default"in i?o=mt(i.from||a,i.default,!0):o=mt(i.from||a):o=mt(i),ve(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function _i(e,t,n){ze(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ms(e,t,n,r){const a=r.includes(".")?ss(n,r):()=>n[r];if(he(e)){const i=t[e];B(i)&&mn(a,i)}else if(B(e))mn(a,e.bind(n));else if(se(e))if(H(e))e.forEach(i=>ms(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&mn(a,i,e)}}function $a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>fr(l,f,o,!0)),fr(l,t,o)),se(t)&&i.set(t,l),l}function fr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&fr(e,i,n,!0),a&&a.forEach(o=>fr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Dc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Dc={data:xi,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:wt,directives:wt,watch:Hc,provide:xi,inject:zc};function xi(e,t){return t?e?function(){return _e(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function zc(e,t){return wt(ea(e),ea(t))}function ea(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?_e(_e(Object.create(null),e),t):t}function Hc(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function Bc(e,t,n,r=!1){const a={},i={};or(i,Pr,1),e.propsDefaults=Object.create(null),ps(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ec(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Uc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Er(e.emitsOptions,p))continue;const g=t[p];if(l)if(Y(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const A=Ge(p);a[A]=ta(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{ps(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!Y(t,d)&&((c=en(d))===d||!Y(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ta(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!Y(t,d)&&!0)&&(delete i[d],f=!0)}f&&Ze(e,"set","$attrs")}function ps(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(er(l))continue;const f=t[l];let c;a&&Y(a,c=Ge(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Er(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=q(n),f=s||ee;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ta(a,l,d,f[d],e,!Y(f,d))}}return o}function ta(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Gt(a),r=f[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function hs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!B(e)){const c=d=>{l=!0;const[p,g]=hs(d,t,!0);_e(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return se(e)&&r.set(e,Bt),Bt;if(H(i))for(let c=0;c<i.length;c++){const d=Ge(i[c]);wi(d)&&(o[d]=ee)}else if(i)for(const c in i){const d=Ge(c);if(wi(d)){const p=i[c],g=o[d]=H(p)||B(p)?{type:p}:p;if(g){const A=Ai(Boolean,g.type),S=Ai(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||Y(g,"default"))&&s.push(d)}}}const f=[o,s];return se(e)&&r.set(e,f),f}function wi(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ei(e,t){return ki(e)===ki(t)}function Ai(e,t){return H(t)?t.findIndex(n=>Ei(n,e)):B(t)&&Ei(t,e)?0:-1}const gs=e=>e[0]==="_"||e==="$stable",ja=e=>H(e)?e.map(Ke):[Ke(e)],Wc=(e,t,n)=>{if(t._n)return t;const r=Ct((...a)=>ja(t(...a)),n);return r._c=!1,r},vs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(gs(a))continue;const i=e[a];if(B(i))t[a]=Wc(a,i,r);else if(i!=null){const o=ja(i);t[a]=()=>o}}},bs=(e,t)=>{const n=ja(t);e.slots.default=()=>n},Yc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),or(t,"_",n)):vs(t,e.slots={})}else e.slots={},t&&bs(e,t);or(e.slots,Pr,1)},Kc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,vs(t,a)),o=t}else t&&(bs(e,t),o={default:1});if(i)for(const s in a)!gs(s)&&!(s in o)&&delete a[s]};function ys(){return{app:null,config:{isNativeTag:yl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vc=0;function qc(e,t){return function(r,a=null){B(r)||(r=Object.assign({},r)),a!=null&&!se(a)&&(a=null);const i=ys(),o=new Set;let s=!1;const l=i.app={_uid:Vc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...c)):B(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=ne(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Ha(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function na(e,t,n,r,a=!1){if(H(e)){e.forEach((p,g)=>na(p,t&&(H(t)?t[g]:t),n,r,a));return}if(pn(r)&&!a)return;const i=r.shapeFlag&4?Ha(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,Y(d,f)&&(d[f]=null)):ve(f)&&(f.value=null)),B(l))dt(l,s,12,[o,c]);else{const p=he(l),g=ve(l);if(p||g){const A=()=>{if(e.f){const S=p?Y(d,l)?d[l]:c[l]:l.value;a?H(S)&&Ea(S,i):H(S)?S.includes(i)||S.push(i):p?(c[l]=[i],Y(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,Y(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,ke(A,n)):A()}}}const ke=yc;function Xc(e){return Gc(e)}function Gc(e,t){const n=Ol();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=De,insertStaticContent:A}=e,S=(u,m,h,b=null,_=null,E=null,C=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!cn(u,m)&&(b=P(u),xe(u,_,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:x,ref:$,shapeFlag:N}=m;switch(x){case Da:T(u,m,h,b);break;case qt:v(u,m,h,b);break;case nr:u==null&&w(m,h,b,C);break;case Ee:Be(u,m,h,b,_,E,C,k,O);break;default:N&1?K(u,m,h,b,_,E,C,k,O):N&6?Mt(u,m,h,b,_,E,C,k,O):(N&64||N&128)&&x.process(u,m,h,b,_,E,C,k,O,V)}$!=null&&_&&na($,u&&u.ref,E,m||u,!m)},T=(u,m,h,b)=>{if(u==null)r(m.el=s(m.children),h,b);else{const _=m.el=u.el;m.children!==u.children&&f(_,m.children)}},v=(u,m,h,b)=>{u==null?r(m.el=l(m.children||""),h,b):m.el=u.el},w=(u,m,h,b)=>{[u.el,u.anchor]=A(u.children,m,h,b,u.el,u.anchor)},F=({el:u,anchor:m},h,b)=>{let _;for(;u&&u!==m;)_=p(u),r(u,h,b),u=_;r(m,h,b)},D=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},K=(u,m,h,b,_,E,C,k,O)=>{C=C||m.type==="svg",u==null?ae(m,h,b,_,E,C,k,O):be(u,m,_,E,C,k,O)},ae=(u,m,h,b,_,E,C,k)=>{let O,x;const{type:$,props:N,shapeFlag:j,transition:z,dirs:W}=u;if(O=u.el=o(u.type,E,N&&N.is,N),j&8?c(O,u.children):j&16&&Pe(u.children,O,null,b,_,E&&$!=="foreignObject",C,k),W&&_t(u,null,b,"created"),N){for(const Q in N)Q!=="value"&&!er(Q)&&i(O,Q,null,N[Q],E,u.children,b,_,R);"value"in N&&i(O,"value",null,N.value),(x=N.onVnodeBeforeMount)&&We(x,b,u)}le(O,u,u.scopeId,C,b),W&&_t(u,null,b,"beforeMount");const Z=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;Z&&z.beforeEnter(O),r(O,m,h),((x=N&&N.onVnodeMounted)||Z||W)&&ke(()=>{x&&We(x,b,u),Z&&z.enter(O),W&&_t(u,null,b,"mounted")},_)},le=(u,m,h,b,_)=>{if(h&&g(u,h),b)for(let E=0;E<b.length;E++)g(u,b[E]);if(_){let E=_.subTree;if(m===E){const C=_.vnode;le(u,C,C.scopeId,C.slotScopeIds,_.parent)}}},Pe=(u,m,h,b,_,E,C,k,O=0)=>{for(let x=O;x<u.length;x++){const $=u[x]=k?ct(u[x]):Ke(u[x]);S(null,$,m,h,b,_,E,C,k)}},be=(u,m,h,b,_,E,C)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:x,dirs:$}=m;O|=u.patchFlag&16;const N=u.props||ee,j=m.props||ee;let z;h&&xt(h,!1),(z=j.onVnodeBeforeUpdate)&&We(z,h,m,u),$&&_t(m,u,h,"beforeUpdate"),h&&xt(h,!0);const W=_&&m.type!=="foreignObject";if(x?Ie(u.dynamicChildren,x,k,h,b,W,E):C||G(u,m,k,null,h,b,W,E,!1),O>0){if(O&16)it(k,m,N,j,h,b,_);else if(O&2&&N.class!==j.class&&i(k,"class",null,j.class,_),O&4&&i(k,"style",N.style,j.style,_),O&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ue=Z[Q],Me=N[ue],Lt=j[ue];(Lt!==Me||ue==="value")&&i(k,ue,Me,Lt,_,u.children,h,b,R)}}O&1&&u.children!==m.children&&c(k,m.children)}else!C&&x==null&&it(k,m,N,j,h,b,_);((z=j.onVnodeUpdated)||$)&&ke(()=>{z&&We(z,h,m,u),$&&_t(m,u,h,"updated")},b)},Ie=(u,m,h,b,_,E,C)=>{for(let k=0;k<m.length;k++){const O=u[k],x=m[k],$=O.el&&(O.type===Ee||!cn(O,x)||O.shapeFlag&70)?d(O.el):h;S(O,x,$,null,b,_,E,C,!0)}},it=(u,m,h,b,_,E,C)=>{if(h!==b){if(h!==ee)for(const k in h)!er(k)&&!(k in b)&&i(u,k,h[k],null,C,m.children,_,E,R);for(const k in b){if(er(k))continue;const O=b[k],x=h[k];O!==x&&k!=="value"&&i(u,k,x,O,C,m.children,_,E,R)}"value"in b&&i(u,"value",h.value,b.value)}},Be=(u,m,h,b,_,E,C,k,O)=>{const x=m.el=u?u.el:s(""),$=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:z}=m;z&&(k=k?k.concat(z):z),u==null?(r(x,h,b),r($,h,b),Pe(m.children,h,$,_,E,C,k,O)):N>0&&N&64&&j&&u.dynamicChildren?(Ie(u.dynamicChildren,j,h,_,E,C,k),(m.key!=null||_&&m===_.subTree)&&_s(u,m,!0)):G(u,m,h,$,_,E,C,k,O)},Mt=(u,m,h,b,_,E,C,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?_.ctx.activate(m,h,b,C,O):bt(m,h,b,_,E,C,O):sn(u,m,O)},bt=(u,m,h,b,_,E,C)=>{const k=u.component=lf(u,b,_);if(ls(u)&&(k.ctx.renderer=V),cf(k),k.asyncDep){if(_&&_.registerDep(k,fe),!u.el){const O=k.subTree=ne(qt);v(null,O,m,h)}return}fe(k,u,m,h,_,E,C)},sn=(u,m,h)=>{const b=m.component=u.component;if(gc(u,m,h))if(b.asyncDep&&!b.asyncResolved){J(b,m,h);return}else b.next=m,lc(b.update),b.update();else m.el=u.el,b.vnode=m},fe=(u,m,h,b,_,E,C)=>{const k=()=>{if(u.isMounted){let{next:$,bu:N,u:j,parent:z,vnode:W}=u,Z=$,Q;xt(u,!1),$?($.el=W.el,J(u,$,C)):$=W,N&&Lr(N),(Q=$.props&&$.props.onVnodeBeforeUpdate)&&We(Q,z,$,W),xt(u,!0);const ue=$r(u),Me=u.subTree;u.subTree=ue,S(Me,ue,d(Me.el),P(Me),u,_,E),$.el=ue.el,Z===null&&vc(u,ue.el),j&&ke(j,_),(Q=$.props&&$.props.onVnodeUpdated)&&ke(()=>We(Q,z,$,W),_)}else{let $;const{el:N,props:j}=m,{bm:z,m:W,parent:Z}=u,Q=pn(m);if(xt(u,!1),z&&Lr(z),!Q&&($=j&&j.onVnodeBeforeMount)&&We($,Z,m),xt(u,!0),N&&U){const ue=()=>{u.subTree=$r(u),U(N,u.subTree,u,_,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=$r(u);S(null,ue,h,b,u,_,E),m.el=ue.el}if(W&&ke(W,_),!Q&&($=j&&j.onVnodeMounted)){const ue=m;ke(()=>We($,Z,ue),_)}(m.shapeFlag&256||Z&&pn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&ke(u.a,_),u.isMounted=!0,m=h=b=null}},O=u.effect=new Ca(k,()=>La(x),u.scope),x=u.update=()=>O.run();x.id=u.uid,xt(u,!0),x()},J=(u,m,h)=>{m.component=u;const b=u.vnode.props;u.vnode=m,u.next=null,Uc(u,m.props,b,h),Kc(u,m.children,h),tn(),gi(),nn()},G=(u,m,h,b,_,E,C,k,O=!1)=>{const x=u&&u.children,$=u?u.shapeFlag:0,N=m.children,{patchFlag:j,shapeFlag:z}=m;if(j>0){if(j&128){yt(x,N,h,b,_,E,C,k,O);return}else if(j&256){Te(x,N,h,b,_,E,C,k,O);return}}z&8?($&16&&R(x,_,E),N!==x&&c(h,N)):$&16?z&16?yt(x,N,h,b,_,E,C,k,O):R(x,_,E,!0):($&8&&c(h,""),z&16&&Pe(N,h,b,_,E,C,k,O))},Te=(u,m,h,b,_,E,C,k,O)=>{u=u||Bt,m=m||Bt;const x=u.length,$=m.length,N=Math.min(x,$);let j;for(j=0;j<N;j++){const z=m[j]=O?ct(m[j]):Ke(m[j]);S(u[j],z,h,null,_,E,C,k,O)}x>$?R(u,_,E,!0,!1,N):Pe(m,h,b,_,E,C,k,O,N)},yt=(u,m,h,b,_,E,C,k,O)=>{let x=0;const $=m.length;let N=u.length-1,j=$-1;for(;x<=N&&x<=j;){const z=u[x],W=m[x]=O?ct(m[x]):Ke(m[x]);if(cn(z,W))S(z,W,h,null,_,E,C,k,O);else break;x++}for(;x<=N&&x<=j;){const z=u[N],W=m[j]=O?ct(m[j]):Ke(m[j]);if(cn(z,W))S(z,W,h,null,_,E,C,k,O);else break;N--,j--}if(x>N){if(x<=j){const z=j+1,W=z<$?m[z].el:b;for(;x<=j;)S(null,m[x]=O?ct(m[x]):Ke(m[x]),h,W,_,E,C,k,O),x++}}else if(x>j)for(;x<=N;)xe(u[x],_,E,!0),x++;else{const z=x,W=x,Z=new Map;for(x=W;x<=j;x++){const Ce=m[x]=O?ct(m[x]):Ke(m[x]);Ce.key!=null&&Z.set(Ce.key,x)}let Q,ue=0;const Me=j-W+1;let Lt=!1,ii=0;const ln=new Array(Me);for(x=0;x<Me;x++)ln[x]=0;for(x=z;x<=N;x++){const Ce=u[x];if(ue>=Me){xe(Ce,_,E,!0);continue}let Ue;if(Ce.key!=null)Ue=Z.get(Ce.key);else for(Q=W;Q<=j;Q++)if(ln[Q-W]===0&&cn(Ce,m[Q])){Ue=Q;break}Ue===void 0?xe(Ce,_,E,!0):(ln[Ue-W]=x+1,Ue>=ii?ii=Ue:Lt=!0,S(Ce,m[Ue],h,null,_,E,C,k,O),ue++)}const oi=Lt?Qc(ln):Bt;for(Q=oi.length-1,x=Me-1;x>=0;x--){const Ce=W+x,Ue=m[Ce],si=Ce+1<$?m[Ce+1].el:b;ln[x]===0?S(null,Ue,h,si,_,E,C,k,O):Lt&&(Q<0||x!==oi[Q]?Ne(Ue,h,si,2):Q--)}}},Ne=(u,m,h,b,_=null)=>{const{el:E,type:C,transition:k,children:O,shapeFlag:x}=u;if(x&6){Ne(u.component.subTree,m,h,b);return}if(x&128){u.suspense.move(m,h,b);return}if(x&64){C.move(u,m,h,V);return}if(C===Ee){r(E,m,h);for(let N=0;N<O.length;N++)Ne(O[N],m,h,b);r(u.anchor,m,h);return}if(C===nr){F(u,m,h);return}if(b!==2&&x&1&&k)if(b===0)k.beforeEnter(E),r(E,m,h),ke(()=>k.enter(E),_);else{const{leave:N,delayLeave:j,afterLeave:z}=k,W=()=>r(E,m,h),Z=()=>{N(E,()=>{W(),z&&z()})};j?j(E,W,Z):Z()}else r(E,m,h)},xe=(u,m,h,b=!1,_=!1)=>{const{type:E,props:C,ref:k,children:O,dynamicChildren:x,shapeFlag:$,patchFlag:N,dirs:j}=u;if(k!=null&&na(k,null,h,u,!0),$&256){m.ctx.deactivate(u);return}const z=$&1&&j,W=!pn(u);let Z;if(W&&(Z=C&&C.onVnodeBeforeUnmount)&&We(Z,m,u),$&6)y(u.component,h,b);else{if($&128){u.suspense.unmount(h,b);return}z&&_t(u,null,m,"beforeUnmount"),$&64?u.type.remove(u,m,h,_,V,b):x&&(E!==Ee||N>0&&N&64)?R(x,m,h,!1,!0):(E===Ee&&N&384||!_&&$&16)&&R(O,m,h),b&&Ft(u)}(W&&(Z=C&&C.onVnodeUnmounted)||z)&&ke(()=>{Z&&We(Z,m,u),z&&_t(u,null,m,"unmounted")},h)},Ft=u=>{const{type:m,el:h,anchor:b,transition:_}=u;if(m===Ee){jn(h,b);return}if(m===nr){D(u);return}const E=()=>{a(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:k}=_,O=()=>C(h,E);k?k(u.el,E,O):O()}else E()},jn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:b,scope:_,update:E,subTree:C,um:k}=u;b&&Lr(b),_.stop(),E&&(E.active=!1,xe(C,u,m,h)),k&&ke(k,m),ke(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(u,m,h,b=!1,_=!1,E=0)=>{for(let C=E;C<u.length;C++)xe(u[C],m,h,b,_)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),L=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),gi(),rs(),m._vnode=u},V={p:S,um:xe,m:Ne,r:Ft,mt:bt,mc:Pe,pc:G,pbc:Ie,n:P,o:e};let ie,U;return t&&([ie,U]=t(V)),{render:L,hydrate:ie,createApp:qc(L,ie)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _s(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||_s(o,s))}}function Qc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jc=e=>e.__isTeleport,Ee=Symbol(void 0),Da=Symbol(void 0),qt=Symbol(void 0),nr=Symbol(void 0),hn=[];let $e=null;function Nt(e=!1){hn.push($e=e?null:[])}function Zc(){hn.pop(),$e=hn[hn.length-1]||null}let An=1;function Oi(e){An+=e}function xs(e){return e.dynamicChildren=An>0?$e||Bt:null,Zc(),An>0&&$e&&$e.push(e),e}function rn(e,t,n,r,a,i){return xs(me(e,t,n,r,a,i,!0))}function ef(e,t,n,r,a){return xs(ne(e,t,n,r,a,!0))}function ur(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",ws=({key:e})=>e!=null?e:null,rr=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||ve(e)||B(e)?{i:Oe,r:e,k:t,f:!!n}:e:null;function me(e,t=null,n=null,r=0,a=null,i=e===Ee?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ws(t),ref:t&&rr(t),scopeId:Ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(za(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),An>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const ne=tf;function tf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Mc)&&(e=qt),ur(e)){const s=Xt(e,t,!0);return n&&za(s,n),An>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(pf(e)&&(e=e.__vccOpts),t){t=nf(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=wa(s)),se(l)&&(Vo(l)&&!H(l)&&(l=_e({},l)),t.style=xa(l))}const o=he(e)?1:bc(e)?128:Jc(e)?64:se(e)?4:B(e)?2:0;return me(e,t,n,r,a,o,i,!0)}function nf(e){return e?Vo(e)||Pr in e?_e({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?af(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ws(s),ref:t&&t.ref?n&&a?H(a)?a.concat(rr(t)):[a,rr(t)]:rr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor}}function Xe(e=" ",t=0){return ne(Da,null,e,t)}function rf(e,t){const n=ne(nr,null,e);return n.staticCount=t,n}function Ke(e){return e==null||typeof e=="boolean"?ne(qt):H(e)?ne(Ee,null,e.slice()):typeof e=="object"?ct(e):ne(Da,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function za(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),za(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[Xe(t)]):n=8);e.children=t,e.shapeFlag|=n}function af(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=wa([t.class,r.class]));else if(a==="style")t.style=xa([t.style,r.style]);else if(br(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function We(e,t,n,r=null){ze(e,t,7,[n,r])}const of=ys();let sf=0;function lf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||of,i={uid:sf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hs(r,a),emitsOptions:is(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uc.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Gt=e=>{pe=e,e.scope.on()},St=()=>{pe&&pe.scope.off(),pe=null};function ks(e){return e.vnode.shapeFlag&4}let On=!1;function cf(e,t=!1){On=t;const{props:n,children:r}=e.vnode,a=ks(e);Bc(e,n,a,t),Yc(e,r);const i=a?ff(e,t):void 0;return On=!1,i}function ff(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Na(new Proxy(e.ctx,Lc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?df(e):null;Gt(e),tn();const i=dt(r,e,0,[e.props,a]);if(nn(),St(),To(i)){if(i.then(St,St),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{kr(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else Es(e,t)}function Pi(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=Jo(t)),Es(e,n)}let Ci;function Es(e,t,n){const r=e.type;if(!e.render){if(!t&&Ci&&!r.render){const a=r.template||$a(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=Ci(a,f)}}e.render=r.render||De}Gt(e),tn(),$c(e),nn(),St()}function uf(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function df(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=uf(e))},slots:e.slots,emit:e.emit,expose:t}}function Ha(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Jo(Na(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cr)return cr[n](e)}}))}function mf(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function pf(e){return B(e)&&"__vccOpts"in e}const oe=(e,t)=>ic(e,t,On);function Cr(e,t,n){const r=arguments.length;return r===2?se(t)&&!H(t)?ur(t)?ne(e,null,[t]):ne(e,t):ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ur(n)&&(n=[n]),ne(e,t,n))}const hf="3.2.41",gf="http://www.w3.org/2000/svg",Et=typeof document<"u"?document:null,Si=Et&&Et.createElement("template"),vf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Et.createElementNS(gf,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function bf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function yf(e,t,n){const r=e.style,a=he(n);if(n&&!a){for(const i in n)ra(r,i,n[i]);if(t&&!he(t))for(const i in t)n[i]==null&&ra(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ri=/\s*!important$/;function ra(e,t,n){if(H(n))n.forEach(r=>ra(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_f(e,t);Ri.test(n)?e.setProperty(en(r),n.replace(Ri,""),"important"):e[r]=n}}const Ii=["Webkit","Moz","ms"],jr={};function _f(e,t){const n=jr[t];if(n)return n;let r=Ge(t);if(r!=="filter"&&r in e)return jr[t]=r;r=xr(r);for(let a=0;a<Ii.length;a++){const i=Ii[a]+r;if(i in e)return jr[t]=i}return t}const Ti="http://www.w3.org/1999/xlink";function xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ti,t.slice(6,t.length)):e.setAttributeNS(Ti,t,n);else{const i=pl(t);n==null||i&&!So(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=So(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function kf(e,t,n,r){e.addEventListener(t,n,r)}function Ef(e,t,n,r){e.removeEventListener(t,n,r)}function Af(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Of(t);if(r){const f=i[t]=Sf(r,a);kf(e,s,f,l)}else o&&(Ef(e,s,o,l),i[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Of(e){let t;if(Ni.test(e)){t={};let r;for(;r=e.match(Ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Dr=0;const Pf=Promise.resolve(),Cf=()=>Dr||(Pf.then(()=>Dr=0),Dr=Date.now());function Sf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Cf(),n}function Rf(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Mi=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?bf(e,r,a):t==="style"?yf(e,n,r):br(t)?ka(t)||Af(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,a))?wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xf(e,t,r,a))};function Tf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Mi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mi.test(t)&&he(n)?!1:t in e}const Nf=_e({patchProp:If},vf);let Fi;function Mf(){return Fi||(Fi=Xc(Nf))}const Ff=(...e)=>{const t=Mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Lf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){return he(e)?document.querySelector(e):e}var $f=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jf=Symbol();var Li;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Li||(Li={}));function Df(){const e=Pl(!0),t=e.run(()=>Go({}));let n=[],r=[];const a=Na({install(i){a._a=i,i.provide(jf,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!$f?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function zf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function zr(e,t){const n={};for(const r in t){const a=t[r];n[r]=He(a)?a.map(e):e(a)}return n}const gn=()=>{},He=Array.isArray,Hf=/\/$/,Bf=e=>e.replace(Hf,"");function Hr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Kf(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Uf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $i(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Qt(t.matched[r],n.matched[a])&&As(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function As(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yf(e[n],t[n]))return!1;return!0}function Yf(e,t){return He(e)?ji(e,t):He(t)?ji(t,e):e===t}function ji(e,t){return He(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Kf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function Vf(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Bf(e)}const qf=/^[^#]+#/;function Xf(e,t){return e.replace(qf,"#")+t}function Gf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Gf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Di(e,t){return(history.state?history.state.position-t:-1)+e}const aa=new Map;function Jf(e,t){aa.set(e,t)}function Zf(e){const t=aa.get(e);return aa.delete(e),t}let eu=()=>location.protocol+"//"+location.host;function Os(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),$i(l,"")}return $i(n,e)+r+a}function tu(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=Os(e,location),A=n.value,S=t.value;let T=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}T=S?p.position-S.position:0}else r(g);a.forEach(v=>{v(n.value,A,{delta:T,type:Pn.pop,direction:T?T>0?vn.forward:vn.back:vn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Sr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function zi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Sr():null}}function nu(e){const{history:t,location:n}=window,r={value:Os(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:eu()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=X({},t.state,zi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Sr()});i(c.current,c,!0);const d=X({},zi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function ru(e){e=Vf(e);const t=nu(e),n=tu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Xf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function au(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ru(e)}function iu(e){return typeof e=="string"||e&&typeof e=="object"}function Ps(e){return typeof e=="string"||typeof e=="symbol"}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cs=Symbol("");var Hi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hi||(Hi={}));function Jt(e,t){return X(new Error,{type:e,[Cs]:!0},t)}function Qe(e,t){return e instanceof Error&&Cs in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",ou={sensitive:!1,strict:!1,start:!0,end:!0},su=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=X({},ou,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(su,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:T,regexp:v}=p;i.push({name:A,repeatable:S,optional:T});const w=v||Bi;if(w!==Bi){g+=10;try{new RegExp(`(${w})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+D.message)}}let F=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(F=T&&f.length<2?`(?:/${F})`:"/"+F),T&&(F+="?"),a+=F,g+=20,T&&(g+=-8),S&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:T}=g,v=A in f?f[A]:"";if(He(v)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=He(v)?v.join("/"):v;if(!w)if(T)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function fu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=cu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uu={type:0,value:""},du=/[a-zA-Z0-9_]/;function mu(e){if(!e)return[[]];if(e==="/")return[[uu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:du.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function pu(e,t,n){const r=lu(mu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function hu(e,t){const n=[],r=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,A=gu(c);A.aliasOf=p&&p.record;const S=Ki(t,c),T=[A];if("alias"in c){const F=typeof c.alias=="string"?[c.alias]:c.alias;for(const D of F)T.push(X({},A,{components:p?p.record.components:A.components,path:D,aliasOf:p?p.record:A}))}let v,w;for(const F of T){const{path:D}=F;if(d&&D[0]!=="/"){const K=d.record.path,ae=K[K.length-1]==="/"?"":"/";F.path=d.record.path+(D&&ae+D)}if(v=pu(F,d,S),p?p.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),g&&c.name&&!Yi(v)&&o(c.name)),A.children){const K=A.children;for(let ae=0;ae<K.length;ae++)i(K[ae],v,p&&p.children[ae])}p=p||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return w?()=>{o(w)}:gn}function o(c){if(Ps(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&fu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Ss(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Yi(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},A,S;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Jt(1,{location:c});S=p.record.name,g=X(Wi(d.params,p.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Wi(c.params,p.keys.map(w=>w.name))),A=p.stringify(g)}else if("path"in c)A=c.path,p=n.find(w=>w.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!p)throw Jt(1,{location:c,currentLocation:d});S=p.record.name,g=X({},d.params,c.params),A=p.stringify(g)}const T=[];let v=p;for(;v;)T.unshift(v.record),v=v.parent;return{name:S,path:A,params:g,matched:T,meta:bu(T)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Wi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:vu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function vu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ss(e,t){return t.children.some(n=>n===e||Ss(e,n))}const Rs=/#/g,yu=/&/g,_u=/\//g,xu=/=/g,wu=/\?/g,Is=/\+/g,ku=/%5B/g,Eu=/%5D/g,Ts=/%5E/g,Au=/%60/g,Ns=/%7B/g,Ou=/%7C/g,Ms=/%7D/g,Pu=/%20/g;function Ba(e){return encodeURI(""+e).replace(Ou,"|").replace(ku,"[").replace(Eu,"]")}function Cu(e){return Ba(e).replace(Ns,"{").replace(Ms,"}").replace(Ts,"^")}function ia(e){return Ba(e).replace(Is,"%2B").replace(Pu,"+").replace(Rs,"%23").replace(yu,"%26").replace(Au,"`").replace(Ns,"{").replace(Ms,"}").replace(Ts,"^")}function Su(e){return ia(e).replace(xu,"%3D")}function Ru(e){return Ba(e).replace(Rs,"%23").replace(wu,"%3F")}function Iu(e){return e==null?"":Ru(e).replace(_u,"%2F")}function dr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Tu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Is," "),o=i.indexOf("="),s=dr(o<0?i:i.slice(0,o)),l=o<0?null:dr(i.slice(o+1));if(s in t){let f=t[s];He(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Vi(e){let t="";for(let n in e){const r=e[n];if(n=Su(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&ia(i)):[r&&ia(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Nu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=He(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Mu=Symbol(""),qi=Symbol(""),Ua=Symbol(""),Fs=Symbol(""),oa=Symbol("");function fn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Jt(4,{from:n,to:t})):d instanceof Error?s(d):iu(d)?s(Jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Fu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ft(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=zf(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&ft(p,n,r,i,o)()}))}}return a}function Fu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=mt(Ua),n=mt(Fs),r=oe(()=>t.resolve(Ae(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Qt.bind(null,c));if(p>-1)return p;const g=Gi(l[f-2]);return f>1&&Gi(c)===g&&d[d.length-1].path!==g?d.findIndex(Qt.bind(null,l[f-2])):p}),i=oe(()=>a.value>-1&&ju(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&As(n.params,r.value.params));function s(l={}){return $u(l)?t[Ae(e.replace)?"replace":"push"](Ae(e.to)).catch(gn):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Lu=Mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const n=Nn(Xi(e)),{options:r}=mt(Ua),a=oe(()=>({[Qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Cr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Rt=Lu;function $u(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ju(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!He(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qi=(e,t,n)=>e!=null?e:t!=null?t:n,Du=Mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=mt(oa),a=oe(()=>e.route||r.value),i=mt(qi,0),o=oe(()=>{let f=Ae(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=oe(()=>a.value.matched[o.value]);tr(qi,oe(()=>o.value+1)),tr(Mu,s),tr(oa,a);const l=Go();return mn(()=>[l.value,s.value,e.name],([f,c,d],[p,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Qt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Ji(n.default,{Component:p,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,T=Cr(p,X({},A,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Ji(n.default,{Component:T,route:f})||T}}});function Ji(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wa=Du;function zu(e){const t=hu(e.routes,e),n=e.parseQuery||Tu,r=e.stringifyQuery||Vi,a=e.history,i=fn(),o=fn(),s=fn(),l=tc(st);let f=st;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,y=>""+y),d=zr.bind(null,Iu),p=zr.bind(null,dr);function g(y,R){let P,L;return Ps(y)?(P=t.getRecordMatcher(y),L=R):L=y,t.addRoute(L,P)}function A(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function S(){return t.getRoutes().map(y=>y.record)}function T(y){return!!t.getRecordMatcher(y)}function v(y,R){if(R=X({},R||l.value),typeof y=="string"){const u=Hr(n,y,R.path),m=t.resolve({path:u.path},R),h=a.createHref(u.fullPath);return X(u,m,{params:p(m.params),hash:dr(u.hash),redirectedFrom:void 0,href:h})}let P;if("path"in y)P=X({},y,{path:Hr(n,y.path,R.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];P=X({},y,{params:d(y.params)}),R.params=d(R.params)}const L=t.resolve(P,R),V=y.hash||"";L.params=c(p(L.params));const ie=Uf(r,X({},y,{hash:Cu(V),path:L.path})),U=a.createHref(ie);return X({fullPath:ie,hash:V,query:r===Vi?Nu(y.query):y.query||{}},L,{redirectedFrom:void 0,href:U})}function w(y){return typeof y=="string"?Hr(n,y,l.value.path):X({},y)}function F(y,R){if(f!==y)return Jt(8,{from:R,to:y})}function D(y){return le(y)}function K(y){return D(X(w(y),{replace:!0}))}function ae(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:P}=R;let L=typeof P=="function"?P(y):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),X({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function le(y,R){const P=f=v(y),L=l.value,V=y.state,ie=y.force,U=y.replace===!0,u=ae(P);if(u)return le(X(w(u),{state:typeof u=="object"?X({},V,u.state):V,force:ie,replace:U}),R||P);const m=P;m.redirectedFrom=R;let h;return!ie&&Wf(r,L,P)&&(h=Jt(16,{to:m,from:L}),yt(L,L,!0,!1)),(h?Promise.resolve(h):be(m,L)).catch(b=>Qe(b)?Qe(b,2)?b:Te(b):J(b,m,L)).then(b=>{if(b){if(Qe(b,2))return le(X({replace:U},w(b.to),{state:typeof b.to=="object"?X({},V,b.to.state):V,force:ie}),R||m)}else b=it(m,L,!0,U,V);return Ie(m,L,b),b})}function Pe(y,R){const P=F(y,R);return P?Promise.reject(P):Promise.resolve()}function be(y,R){let P;const[L,V,ie]=Hu(y,R);P=Br(L.reverse(),"beforeRouteLeave",y,R);for(const u of L)u.leaveGuards.forEach(m=>{P.push(ft(m,y,R))});const U=Pe.bind(null,y,R);return P.push(U),$t(P).then(()=>{P=[];for(const u of i.list())P.push(ft(u,y,R));return P.push(U),$t(P)}).then(()=>{P=Br(V,"beforeRouteUpdate",y,R);for(const u of V)u.updateGuards.forEach(m=>{P.push(ft(m,y,R))});return P.push(U),$t(P)}).then(()=>{P=[];for(const u of y.matched)if(u.beforeEnter&&!R.matched.includes(u))if(He(u.beforeEnter))for(const m of u.beforeEnter)P.push(ft(m,y,R));else P.push(ft(u.beforeEnter,y,R));return P.push(U),$t(P)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),P=Br(ie,"beforeRouteEnter",y,R),P.push(U),$t(P))).then(()=>{P=[];for(const u of o.list())P.push(ft(u,y,R));return P.push(U),$t(P)}).catch(u=>Qe(u,8)?u:Promise.reject(u))}function Ie(y,R,P){for(const L of s.list())L(y,R,P)}function it(y,R,P,L,V){const ie=F(y,R);if(ie)return ie;const U=R===st,u=jt?history.state:{};P&&(L||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},V)):a.push(y.fullPath,V)),l.value=y,yt(y,R,P,U),Te()}let Be;function Mt(){Be||(Be=a.listen((y,R,P)=>{if(!jn.listening)return;const L=v(y),V=ae(L);if(V){le(X(V,{replace:!0}),L).catch(gn);return}f=L;const ie=l.value;jt&&Jf(Di(ie.fullPath,P.delta),Sr()),be(L,ie).catch(U=>Qe(U,12)?U:Qe(U,2)?(le(U.to,L).then(u=>{Qe(u,20)&&!P.delta&&P.type===Pn.pop&&a.go(-1,!1)}).catch(gn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),J(U,L,ie))).then(U=>{U=U||it(L,ie,!1),U&&(P.delta&&!Qe(U,8)?a.go(-P.delta,!1):P.type===Pn.pop&&Qe(U,20)&&a.go(-1,!1)),Ie(L,ie,U)}).catch(gn)}))}let bt=fn(),sn=fn(),fe;function J(y,R,P){Te(y);const L=sn.list();return L.length?L.forEach(V=>V(y,R,P)):console.error(y),Promise.reject(y)}function G(){return fe&&l.value!==st?Promise.resolve():new Promise((y,R)=>{bt.add([y,R])})}function Te(y){return fe||(fe=!y,Mt(),bt.list().forEach(([R,P])=>y?P(y):R()),bt.reset()),y}function yt(y,R,P,L){const{scrollBehavior:V}=e;if(!jt||!V)return Promise.resolve();const ie=!P&&Zf(Di(y.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return ts().then(()=>V(y,R,ie)).then(U=>U&&Qf(U)).catch(U=>J(U,y,R))}const Ne=y=>a.go(y);let xe;const Ft=new Set,jn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:T,getRoutes:S,resolve:v,options:e,push:D,replace:K,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:sn.add,isReady:G,install(y){const R=this;y.component("RouterLink",Rt),y.component("RouterView",Wa),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(l)}),jt&&!xe&&l.value===st&&(xe=!0,D(a.location).catch(V=>{}));const P={};for(const V in st)P[V]=oe(()=>l.value[V]);y.provide(Ua,R),y.provide(Fs,Nn(P)),y.provide(oa,l);const L=y.unmount;Ft.add(y),y.unmount=function(){Ft.delete(y),Ft.size<1&&(f=st,Be&&Be(),Be=null,l.value=st,xe=!1,fe=!1),L()}}};return jn}function $t(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Hu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Qt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Qt(f,l))||a.push(l))}return[n,r,a]}const an=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Bu={class:"greetings"},Uu={class:"green"},Wu={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(e){return(t,n)=>{const r=Nc("font-awesome-icon");return Nt(),rn("div",Bu,[me("h1",Uu,bl(e.msg),1),me("h3",null,[ne(r,{icon:"fa-solid fa-rocket"}),Xe(" \u6B61\u8FCE\u52A0\u5165\u904A\u6232 ")])])}}},Yu=an(Wu,[["__scopeId","data-v-8214ea47"]]);const Ku={},Vu={class:"footer"},qu=me("hr",{style:{width:"100%","margin-top":"20px"}},null,-1),Xu=me("h4",null,"\u6B64\u7DB2\u9801\u5716\u7247\u7D20\u6750\u53D6\u81EA\uFF1A",-1),Gu=me("p",null,[Xe("\u4EBA\u7269\u5716\u7247\uFF1A\u30B8\u30E5\u30A8\u30EB\u30BB\u30A4\u30D0\u30FCFREE "),me("a",{href:"http://www.jewel-s.jp/",target:"_blank"},"http://www.jewel-s.jp/")],-1),Qu=me("p",null,[Xe("\u80CC\u666F\u5716\u7247\uFF1Apngtree "),me("a",{href:"https://pngtree.com/free-backgrounds",target:"_blank"},"pngtree.com/")],-1),Ju=[qu,Xu,Gu,Qu];function Zu(e,t){return Nt(),rn("div",Vu,Ju)}const ed=an(Ku,[["render",Zu]]);const td={class:"wrapper"},nd={__name:"App",setup(e){return(t,n)=>(Nt(),rn(Ee,null,[me("header",null,[me("div",td,[ne(Yu,{msg:"\u6240\u6709\u76F8\u95DC\u7CFB\u7D71\u5EFA\u7ACB\u4E2D..."}),me("nav",null,[ne(Ae(Rt),{to:"/Home"},{default:Ct(()=>[Xe("\u4E3B\u9801")]),_:1}),ne(Ae(Rt),{to:"/Dialogue"},{default:Ct(()=>[Xe("\u5C0D\u8A71\u8996\u7A97")]),_:1}),ne(Ae(Rt),{to:"/Attack"},{default:Ct(()=>[Xe("\u50B7\u5BB3\u8A08\u7B97")]),_:1})])])]),ne(Ae(Wa)),ne(ed)],64))}},rd=an(nd,[["__scopeId","data-v-f28d5a8c"]]),ad="modulepreload",id=function(e){return"/Vue3-Vite-Game/"+e},Zi={},Wn=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=id(i),i in Zi)return;Zi[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":ad,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};const od={__name:"Home",setup(e){return(t,n)=>(Nt(),rn(Ee,null,[me("nav",null,[ne(Ae(Rt),{to:"/Home/pack"},{default:Ct(()=>[Xe("\u80CC\u5305")]),_:1}),ne(Ae(Rt),{to:"/Home/strengthen"},{default:Ct(()=>[Xe("\u5F37\u5316")]),_:1}),ne(Ae(Rt),{to:"/Home/summon"},{default:Ct(()=>[Xe("\u53EC\u559A")]),_:1})]),me("main",null,[ne(Ae(Wa))])],64))}},eo=an(od,[["__scopeId","data-v-e068a644"]]),sd="/Vue3-Vite-Game/assets/pexels-wendel-moretti-1850021.efe82839.jpg",ld="/Vue3-Vite-Game/assets/f119.24bdbef2.png";const cd=rf('<h1 class="green" data-v-80cab790>\u5C0D\u8A71\u8996\u7A97</h1><div id="speech" data-v-80cab790><img class="background-img" src="'+sd+'" alt="" data-v-80cab790><div class="spech-img" data-v-80cab790><img src="'+ld+'" alt="" data-v-80cab790></div><div class="speech-box" data-v-80cab790><div class="speech-name" data-v-80cab790><h3 data-v-80cab790>\u5F13\u6708 \u73B2\u90A3</h3></div><div class="speech-text" data-v-80cab790><p data-v-80cab790>\u5582\uFF0C\u4F60\u6709\u5728\u8A8D\u771F\u807D\u6211\u8AAA\u8A71\u55CE\uFF01</p></div></div></div>',2),fd=[cd],ud={__name:"Dialogue",props:{},setup(e){return(t,n)=>(Nt(),rn("div",null,fd))}},dd=an(ud,[["__scopeId","data-v-80cab790"]]);const Ls=e=>(dc("data-v-2bbe8b65"),e=e(),mc(),e),md=Ls(()=>me("h1",{class:"green"},"\u653B\u64CA\u50B7\u5BB3\u8A08\u7B97",-1)),pd=Ls(()=>me("div",{class:"greetings"},[me("h3",null," \u9019\u88E1\u6703\u5C55\u793A\u50B7\u5BB3\u8A08\u7B97\u8996\u7A97 ")],-1)),hd={__name:"Attack",props:{},setup(e){return(t,n)=>(Nt(),rn(Ee,null,[md,pd],64))}},gd=an(hd,[["__scopeId","data-v-2bbe8b65"]]),vd=zu({history:au("/Vue3-Vite-Game/"),routes:[{path:"/",name:"initial",component:eo},{path:"/Home",name:"home",component:eo,children:[{path:"pack",name:"pack",component:()=>Wn(()=>import("./pack.c8f831b1.js"),["assets/pack.c8f831b1.js","assets/IconSupport.7b6343bc.js","assets/IconSupport.b4c2ba49.css","assets/pack.b55e178b.css"])},{path:"strengthen",name:"strengthen",component:()=>Wn(()=>import("./strengthen.f2bb1bdc.js"),["assets/strengthen.f2bb1bdc.js","assets/IconSupport.7b6343bc.js","assets/IconSupport.b4c2ba49.css"])},{path:"summon",name:"summon",component:()=>Wn(()=>import("./summon.bb767bf9.js"),["assets/summon.bb767bf9.js","assets/IconSupport.7b6343bc.js","assets/IconSupport.b4c2ba49.css"])}]},{path:"/Dialogue",name:"Dialogue",component:dd},{path:"/Attack",name:"Attack",component:gd},{path:"/:404(.*)*",name:"404",component:()=>Wn(()=>import("./404.074a3d00.js"),[])}]});function to(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?to(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function bd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function no(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function yd(e,t,n){return t&&no(e.prototype,t),n&&no(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ya(e,t){return xd(e)||kd(e,t)||$s(e,t)||Ad()}function Fn(e){return _d(e)||wd(e)||$s(e)||Ed()}function _d(e){if(Array.isArray(e))return sa(e)}function xd(e){if(Array.isArray(e))return e}function wd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function $s(e,t){if(!!e){if(typeof e=="string")return sa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sa(e,t)}}function sa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ad(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ro=function(){},Ka={},js={},Ds=null,zs={mark:ro,measure:ro};try{typeof window<"u"&&(Ka=window),typeof document<"u"&&(js=document),typeof MutationObserver<"u"&&(Ds=MutationObserver),typeof performance<"u"&&(zs=performance)}catch{}var Od=Ka.navigator||{},ao=Od.userAgent,io=ao===void 0?"":ao,ht=Ka,re=js,oo=Ds,Yn=zs;ht.document;var at=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Hs=~io.indexOf("MSIE")||~io.indexOf("Trident/"),Kn,Vn,qn,Xn,Gn,et="___FONT_AWESOME___",la=16,Bs="fa",Us="svg-inline--fa",It="data-fa-i2svg",ca="data-fa-pseudo-element",Pd="data-fa-pseudo-element-pending",Va="data-prefix",qa="data-icon",so="fontawesome-i2svg",Cd="async",Sd=["HTML","HEAD","STYLE","SCRIPT"],Ws=function(){try{return!0}catch{return!1}}(),te="classic",ce="sharp",Xa=[te,ce];function Ln(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Cn=Ln((Kn={},de(Kn,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Kn,ce,{fa:"solid",fass:"solid","fa-solid":"solid"}),Kn)),Sn=Ln((Vn={},de(Vn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Vn,ce,{solid:"fass"}),Vn)),Rn=Ln((qn={},de(qn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(qn,ce,{fass:"fa-solid"}),qn)),Rd=Ln((Xn={},de(Xn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(Xn,ce,{"fa-solid":"fass"}),Xn)),Id=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ys="fa-layers-text",Td=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nd=Ln((Gn={},de(Gn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Gn,ce,{900:"fass"}),Gn)),Ks=[1,2,3,4,5,6,7,8,9,10],Md=Ks.concat([11,12,13,14,15,16,17,18,19,20]),Fd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=new Set;Object.keys(Sn[te]).map(In.add.bind(In));Object.keys(Sn[ce]).map(In.add.bind(In));var Ld=[].concat(Xa,Fn(In),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Ks.map(function(e){return"".concat(e,"x")})).concat(Md.map(function(e){return"w-".concat(e)})),bn=ht.FontAwesomeConfig||{};function $d(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Dd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dd.forEach(function(e){var t=Ya(e,2),n=t[0],r=t[1],a=jd($d(n));a!=null&&(bn[r]=a)})}var Vs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bs,replacementClass:Us,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bn.familyPrefix&&(bn.cssPrefix=bn.familyPrefix);var Zt=I(I({},Vs),bn);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var M={};Object.keys(Vs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Zt[e]=n,yn.forEach(function(r){return r(M)})},get:function(){return Zt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Zt.cssPrefix=t,yn.forEach(function(n){return n(M)})},get:function(){return Zt.cssPrefix}});ht.FontAwesomeConfig=M;var yn=[];function zd(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var lt=la,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hd(e){if(!(!e||!at)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return re.head.insertBefore(t,r),e}}var Bd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tn(){for(var e=12,t="";e-- >0;)t+=Bd[Math.random()*62|0];return t}function on(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?on(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ud(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qs(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qa(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function Wd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Yd(e){var t=e.transform,n=e.width,r=n===void 0?la:n,a=e.height,i=a===void 0?la:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Hs?l+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):l+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),l+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Kd=`:root, :host {
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
}`;function Xs(){var e=Bs,t=Us,n=M.cssPrefix,r=M.replacementClass,a=Kd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var lo=!1;function Ur(){M.autoAddCss&&!lo&&(Hd(Xs()),lo=!0)}var Vd={mixout:function(){return{dom:{css:Xs,insertCss:Ur}}},hooks:function(){return{beforeDOMElementCreation:function(){Ur()},beforeI2svg:function(){Ur()}}}},tt=ht||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var je=tt[et],Gs=[],qd=function e(){re.removeEventListener("DOMContentLoaded",e),pr=1,Gs.map(function(t){return t()})},pr=!1;at&&(pr=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),pr||re.addEventListener("DOMContentLoaded",qd));function Xd(e){!at||(pr?setTimeout(e,0):Gs.push(e))}function $n(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?qs(e):"<".concat(t," ").concat(Ud(r),">").concat(i.map($n).join(""),"</").concat(t,">")}function co(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Gd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Gd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Qd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function fa(e){var t=Qd(e);return t.length===1?t[0].toString(16):null}function Jd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ua(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fo(t);typeof je.hooks.addPack=="function"&&!a?je.hooks.addPack(e,fo(t)):je.styles[e]=I(I({},je.styles[e]||{}),i),e==="fas"&&ua("fa",t)}var Qn,Jn,Zn,zt=je.styles,Zd=je.shims,em=(Qn={},de(Qn,te,Object.values(Rn[te])),de(Qn,ce,Object.values(Rn[ce])),Qn),Ja=null,Qs={},Js={},Zs={},el={},tl={},tm=(Jn={},de(Jn,te,Object.keys(Cn[te])),de(Jn,ce,Object.keys(Cn[ce])),Jn);function nm(e){return~Ld.indexOf(e)}function rm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!nm(a)?a:null}var nl=function(){var t=function(i){return Wr(zt,function(o,s,l){return o[l]=Wr(s,i,{}),o},{})};Qs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Js=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),tl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||M.autoFetchSvg,r=Wr(Zd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zs=r.names,el=r.unicodes,Ja=Ir(M.styleDefault,{family:M.familyDefault})};zd(function(e){Ja=Ir(e.styleDefault,{family:M.familyDefault})});nl();function Za(e,t){return(Qs[e]||{})[t]}function am(e,t){return(Js[e]||{})[t]}function Ot(e,t){return(tl[e]||{})[t]}function rl(e){return Zs[e]||{prefix:null,iconName:null}}function im(e){var t=el[e],n=Za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Ja}var ei=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=Cn[r][e],i=Sn[r][e]||Sn[r][a],o=e in je.styles?e:null;return i||o||null}var uo=(Zn={},de(Zn,te,Object.keys(Rn[te])),de(Zn,ce,Object.keys(Rn[ce])),Zn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,te,"".concat(M.cssPrefix,"-").concat(te)),de(t,ce,"".concat(M.cssPrefix,"-").concat(ce)),t),o=null,s=te;(e.includes(i[te])||e.some(function(f){return uo[te].includes(f)}))&&(s=te),(e.includes(i[ce])||e.some(function(f){return uo[ce].includes(f)}))&&(s=ce);var l=e.reduce(function(f,c){var d=rm(M.cssPrefix,c);if(zt[c]?(c=em[s].includes(c)?Rd[s][c]:c,o=c,f.prefix=c):tm[s].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[te]&&c!==i[ce]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?rl(f.iconName):{},g=Ot(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ei());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(zt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var om=function(){function e(){bd(this,e),this.definitions={}}return yd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),ua(s,o[s]);var l=Rn[te][s];l&&ua(l,o[s]),nl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),mo=[],Ht={},Kt={},sm=Object.keys(Kt);function lm(e,t){var n=t.mixoutsTo;return mo=e,Ht={},Object.keys(Kt).forEach(function(r){sm.indexOf(r)===-1&&delete Kt[r]}),mo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),mr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ht[o]||(Ht[o]=[]),Ht[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function da(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function ma(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(!!t)return t=Ot(n,t)||t,co(al.definitions,n,t)||co(je.styles,n,t)}var al=new om,cm=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Tt("noAuto")},fm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(Tt("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Xd(function(){dm({autoReplaceSvgRoot:n}),Tt("watch",t)})}},um={icon:function(t){if(t===null)return null;if(mr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Id))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Ot(i,t)||t}}}},Re={noAuto:cm,config:M,dom:fm,parse:um,library:al,findIconDefinition:ma,toHtml:$n},dm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(je.styles).length>0||M.autoFetchSvg)&&at&&M.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return $n(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!at){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function mm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Rr(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function pm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ti(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,T=A.height,v=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(be){return d.classes.indexOf(be)===-1}).filter(function(be){return be!==""||!!be}).concat(d.classes).join(" "),F={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(T)})},D=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/T*16*.0625,"em")}:{};g&&(F.attributes[It]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(c||Tn())},children:[l]}),delete F.attributes.title);var K=I(I({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},D),d.styles)}),ae=r.found&&n.found?nt("generateAbstractMask",K)||{children:[],attributes:{}}:nt("generateAbstractIcon",K)||{children:[],attributes:{}},le=ae.children,Pe=ae.attributes;return K.children=le,K.attributes=Pe,s?pm(K):mm(K)}function po(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[It]="");var c=I({},o.styles);Qa(a)&&(c.transform=Yd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function hm(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yr=je.styles;function pa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var gm={found:!1,width:512,height:512};function vm(e,t){!Ws&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=rl(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Yr[t]&&Yr[t][e]){var o=Yr[t][e];return r(pa(o))}vm(e,t),r(I(I({},gm),{},{icon:M.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var ho=function(){},ga=M.measurePerformance&&Yn&&Yn.mark&&Yn.measure?Yn:{mark:ho,measure:ho},dn='FA "6.2.0"',bm=function(t){return ga.mark("".concat(dn," ").concat(t," begins")),function(){return il(t)}},il=function(t){ga.mark("".concat(dn," ").concat(t," ends")),ga.measure("".concat(dn," ").concat(t),"".concat(dn," ").concat(t," begins"),"".concat(dn," ").concat(t," ends"))},ni={begin:bm,end:il},ar=function(){};function go(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function ym(e){var t=e.getAttribute?e.getAttribute(Va):null,n=e.getAttribute?e.getAttribute(qa):null;return t&&n}function _m(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function xm(){if(M.autoReplaceSvg===!0)return ir.replace;var e=ir[M.autoReplaceSvg];return e||ir.replace}function wm(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function km(e){return re.createElement(e)}function ol(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wm:km:n;if(typeof e=="string")return re.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ol(o,{ceFn:r}))}),a}function Em(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ir={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ol(a),n)}),n.getAttribute(It)===null&&M.keepOriginalSource){var r=re.createComment(Em(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(M.replacementClass))return ir.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return $n(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function vo(e){e()}function sl(e,t){var n=typeof t=="function"?t:ar;if(e.length===0)n();else{var r=vo;M.mutateApproach===Cd&&(r=ht.requestAnimationFrame||vo),r(function(){var a=xm(),i=ni.begin("mutate");e.map(a),i(),n()})}}var ri=!1;function ll(){ri=!0}function va(){ri=!1}var hr=null;function bo(e){if(!!oo&&!!M.observeMutations){var t=e.treeCallback,n=t===void 0?ar:t,r=e.nodeCallback,a=r===void 0?ar:r,i=e.pseudoElementsCallback,o=i===void 0?ar:i,s=e.observeMutationsRoot,l=s===void 0?re:s;hr=new oo(function(f){if(!ri){var c=gt();on(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!go(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&go(d.target)&&~Fd.indexOf(d.attributeName))if(d.attributeName==="class"&&ym(d.target)){var p=Tr(Ga(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Va,g||c),A&&d.target.setAttribute(qa,A)}else _m(d.target)&&a(d.target)})}}),at&&hr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Am(){!hr||hr.disconnect()}function Om(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Pm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(Ga(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=am(a.prefix,e.innerText)||Za(a.prefix,fa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Cm(e){var t=on(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Pm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Cm(e),s=da("parseNodeAttributes",{},e),l=t.styleParser?Om(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Rm=je.styles;function cl(e){var t=M.autoReplaceSvg==="nest"?yo(e,{styleParser:!1}):yo(e);return~t.extra.classes.indexOf(Ys)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}var vt=new Set;Xa.map(function(e){vt.add("fa-".concat(e))});Object.keys(Cn[te]).map(vt.add.bind(vt));Object.keys(Cn[ce]).map(vt.add.bind(vt));vt=Fn(vt);function _o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=re.documentElement.classList,r=function(d){return n.add("".concat(so,"-").concat(d))},a=function(d){return n.remove("".concat(so,"-").concat(d))},i=M.autoFetchSvg?vt:Xa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Rm));i.includes("fa")||i.push("fa");var o=[".".concat(Ys,":not([").concat(It,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=on(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ni.begin("onTree"),f=s.reduce(function(c,d){try{var p=cl(d);p&&c.push(p)}catch(g){Ws||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){sl(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Im(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cl(e).then(function(n){n&&sl([n],t)})}function Tm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ma(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ma(a||{})),e(r,I(I({},n),{},{mask:a}))}}var Nm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,T=S===void 0?[]:S,v=n.attributes,w=v===void 0?{}:v,F=n.styles,D=F===void 0?{}:F;if(!!t){var K=t.prefix,ae=t.iconName,le=t.icon;return Nr(I({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Tn()):(w["aria-hidden"]="true",w.focusable="false")),ti({icons:{main:pa(le),mask:l?pa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ae,transform:I(I({},qe),a),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:w,styles:D,classes:T}})})}},Mm={mixout:function(){return{icon:Tm(Nm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_o,n.nodeCallback=Im,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?re:r,i=n.callback,o=i===void 0?function(){}:i;return _o(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ha(a,s),c.iconName?ha(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=Ya(S,2),v=T[0],w=T[1];g([n,ti({icons:{main:v,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rr(s);l.length>0&&(a.style=l);var f;return Qa(o)&&(f=nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Fm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Nr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Fn(i)).join(" ")},children:o}]})}}}},Lm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Nr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),hm({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Fn(s))}})})}}}},$m={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Nr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),po({content:n,transform:I(I({},qe),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Fn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Hs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,po({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},jm=new RegExp('"',"ug"),xo=[1105920,1112319];function Dm(e){var t=e.replace(jm,""),n=Jd(t,0),r=n>=xo[0]&&n<=xo[1],a=t.length===2?t[0]===t[1]:!1;return{value:fa(a?t[0]:t),isSecondary:r||a}}function wo(e,t){var n="".concat(Pd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=on(e.children),o=i.filter(function(le){return le.getAttribute(ca)===t})[0],s=ht.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Td),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[p][l[2].toLowerCase()]:Nd[p][f],A=Dm(d),S=A.value,T=A.isSecondary,v=l[0].startsWith("FontAwesome"),w=Za(g,S),F=w;if(v){var D=im(S);D.iconName&&D.prefix&&(w=D.iconName,g=D.prefix)}if(w&&!T&&(!o||o.getAttribute(Va)!==g||o.getAttribute(qa)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var K=Sm(),ae=K.extra;ae.attributes[ca]=t,ha(w,g).then(function(le){var Pe=ti(I(I({},K),{},{icons:{main:le,mask:ei()},prefix:g,iconName:F,extra:ae,watchable:!0})),be=re.createElement("svg");t==="::before"?e.insertBefore(be,e.firstChild):e.appendChild(be),be.outerHTML=Pe.map(function(Ie){return $n(Ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function zm(e){return Promise.all([wo(e,"::before"),wo(e,"::after")])}function Hm(e){return e.parentNode!==document.head&&!~Sd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ca)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ko(e){if(!!at)return new Promise(function(t,n){var r=on(e.querySelectorAll("*")).filter(Hm).map(zm),a=ni.begin("searchPseudoElements");ll(),Promise.all(r).then(function(){a(),va(),t()}).catch(function(){a(),va(),n()})})}var Bm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ko,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?re:r;M.searchPseudoElements&&ko(a)}}},Eo=!1,Um={mixout:function(){return{dom:{unwatch:function(){ll(),Eo=!0}}}},hooks:function(){return{bootstrap:function(){bo(da("mutationObserverCallbacks",{}))},noAuto:function(){Am()},watch:function(n){var r=n.observeMutationsRoot;Eo?va():bo(da("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ao=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Wm={mixout:function(){return{parse:{transform:function(n){return Ao(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ao(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},Kr={x:0,y:0,width:"100%",height:"100%"};function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ym(e){return e.tag==="g"?e.children:[e]}var Km={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):ei();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=Wd({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:I(I({},Kr),{},{fill:"white"})},S=c.children?{children:c.children.map(Oo)}:{},T={tag:"g",attributes:I({},g.inner),children:[Oo(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},S))]},v={tag:"g",attributes:I({},g.outer),children:[T]},w="mask-".concat(s||Tn()),F="clip-".concat(s||Tn()),D={tag:"mask",attributes:I(I({},Kr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Ym(p)},D]};return r.push(K,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(w,")")},Kr)}),{children:r,attributes:a}}}},Vm={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Xm=[Vd,Mm,Fm,Lm,$m,Bm,Um,Wm,Km,Vm,qm];lm(Xm,{mixoutsTo:Re});Re.noAuto;var fl=Re.config,Gm=Re.library;Re.dom;var gr=Re.parse;Re.findIconDefinition;Re.toHtml;var Qm=Re.icon;Re.layer;var Jm=Re.text;Re.counter;function Po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Po(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Po(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vr(e){return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ep(e,t){if(e==null)return{};var n=Zm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ba(e){return tp(e)||np(e)||rp(e)||ap()}function tp(e){if(Array.isArray(e))return ya(e)}function np(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rp(e,t){if(!!e){if(typeof e=="string")return ya(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ya(e,t)}}function ya(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ap(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ul={exports:{}};(function(e){(function(t){var n=function(v,w,F){if(!f(w)||d(w)||p(w)||g(w)||l(w))return w;var D,K=0,ae=0;if(c(w))for(D=[],ae=w.length;K<ae;K++)D.push(n(v,w[K],F));else{D={};for(var le in w)Object.prototype.hasOwnProperty.call(w,le)&&(D[v(le,F)]=n(v,w[le],F))}return D},r=function(v,w){w=w||{};var F=w.separator||"_",D=w.split||/(?=[A-Z])/;return v.split(D).join(F)},a=function(v){return A(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,F){return F?F.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var w=a(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},f=function(v){return v===Object(v)},c=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},p=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},A=function(v){return v=v-0,v===v},S=function(v,w){var F=w&&"process"in w?w.process:w;return typeof F!="function"?v:function(D,K){return F(D,v,K)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,w){return n(S(a,w),v)},decamelizeKeys:function(v,w){return n(S(o,w),v,w)},pascalizeKeys:function(v,w){return n(S(i,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(ip)})(ul);var op=ul.exports,sp=["class","style"];function lp(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=op.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function cp(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ai(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=cp(c);break;case"style":l.style=lp(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ep(n,sp);return Cr(e.tag,Le(Le(Le({},t),{},{class:a.class,style:Le(Le({},a.style),o)},a.attrs),s),r)}var dl=!1;try{dl=!0}catch{}function fp(){if(!dl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _n(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function up(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Co(e){if(e&&vr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(gr.icon)return gr.icon(e);if(e===null)return null;if(vr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var dp=Mn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Co(t.icon)}),i=oe(function(){return _n("classes",up(t))}),o=oe(function(){return _n("transform",typeof t.transform=="string"?gr.transform(t.transform):t.transform)}),s=oe(function(){return _n("mask",Co(t.mask))}),l=oe(function(){return Qm(a.value,Le(Le(Le(Le({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});mn(l,function(c){if(!c)return fp("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=oe(function(){return l.value?ai(l.value.abstract[0],{},r):null});return function(){return f.value}}});Mn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=fl.familyPrefix,i=oe(function(){return["".concat(a,"-layers")].concat(ba(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Cr("div",{class:i.value},r.default?r.default():[])}}});Mn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=fl.familyPrefix,i=oe(function(){return _n("classes",[].concat(ba(t.counter?["".concat(a,"-layers-counter")]:[]),ba(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=oe(function(){return _n("transform",typeof t.transform=="string"?gr.transform(t.transform):t.transform)}),s=oe(function(){var f=Jm(t.value.toString(),Le(Le({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=oe(function(){return ai(s.value,{},r)});return function(){return l.value}}});var mp={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},pp={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"]};Gm.add(mp,pp);const Mr=Ff(rd);Mr.component("font-awesome-icon",dp);Mr.use(Df());Mr.use(vd);Mr.mount("#app");export{Ee as F,an as _,ne as a,Xe as b,rn as c,me as d,Nt as o,hp as r,Ct as w};
