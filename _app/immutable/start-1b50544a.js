import{S as Me,i as Xe,s as Ye,a as Qe,e as A,c as Ze,b as z,g as F,t as j,d as G,f as T,h as C,j as xe,o as ve,k as et,l as tt,m as nt,n as we,p as H,q as rt,r as at,u as st,v as q,w as ee,x as B,y as J,z as Ce}from"./chunks/index-7d488c81.js";import{g as qe,f as Be,s as x,a as $e,b as ot,i as it}from"./chunks/singletons-55fc8077.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(r,e){return new URL(r,e).href},Je={},V=function(e,n,s){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=ct(f,s),f in Je)return;Je[f]=!0;const t=f.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(!!s)for(let h=a.length-1;h>=0;h--){const k=a[h];if(k.href===f&&(!t||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${i}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":lt,t||(u.as="script",u.crossOrigin=""),u.href=f,document.head.appendChild(u),t)return new Promise((h,k)=>{u.addEventListener("load",h),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())};class be{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,n){this.status=e,this.location=n}}function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const s of dt){let a=n[s];Object.defineProperty(n,s,{get(){return e(),a},enumerable:!0,configurable:!0})}return n[Symbol.for("nodejs.util.inspect.custom")]=(s,a,f)=>f(r,a),_t(n),n}function _t(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ce.delete(s)}return Re(r,e)};const ce=new Map;function ht(r,e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;n&&typeof n.body=="string"&&(a+=`[data-hash="${mt(n.body)}"]`);const f=document.querySelector(a);if(f!=null&&f.textContent){const{body:t,...i}=JSON.parse(f.textContent),l=f.getAttribute("data-ttl");return l&&ce.set(e,{body:t,init:i,ttl:1e3*Number(l)}),Promise.resolve(new Response(t,i))}return Re(r,n)}function gt(r,e){const n=ce.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);ce.delete(r)}return Re(r,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(yt).map((f,t,i)=>{const l=decodeURIComponent(f),u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(u)return e.push(u[1]),n.push(u[2]),"(?:/(.*))?";const h=t===i.length-1;return l&&"/"+l.split(/\[(.+?)\]/).map((k,N)=>{if(N%2){const K=wt.exec(k);if(!K)throw new Error(`Invalid param: ${k}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,W,M]=K;return e.push(W),n.push(M),y?"(.*?)":"([^/]+?)"}return h&&k.includes(".")&&(s=!1),k.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function yt(r){return!/^\([^)]+\)$/.test(r)}function vt(r,e,n,s){const a={};for(let f=0;f<e.length;f+=1){const t=e[f],i=n[f],l=r[f+1]||"";if(i){const u=s[i];if(!u)throw new Error(`Missing "${i}" param matcher`);if(!u(l))return}a[t]=l}return a}function $t(r,e,n,s){const a=new Set(e);return Object.entries(n).map(([i,[l,u,h]])=>{const{pattern:k,names:N,types:K}=bt(i),y={id:i,exec:W=>{const M=k.exec(W);if(M)return vt(M,N,K,s)},errors:[1,...h||[]].map(W=>r[W]),layouts:[0,...u||[]].map(t),leaf:f(l)};return y.errors.length=y.layouts.length=Math.max(y.errors.length,y.layouts.length),y});function f(i){const l=i<0;return l&&(i=~i),[l,r[i]]}function t(i){return i===void 0?i:[a.has(i),r[i]]}}function kt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&2&&(l.form=t[1]),a!==(a=t[0][0])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function Et(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[At]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&2107&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function Rt(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&8&&(l.data=t[3]),i&2&&(l.form=t[1]),a!==(a=t[0][1])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function Lt(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[3],$$slots:{default:[It]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&8&&(l.data=t[3]),i&2099&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function St(r){let e,n,s;var a=r[0][2];function f(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&16&&(l.data=t[4]),i&2&&(l.form=t[1]),a!==(a=t[0][2])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function Pt(r){let e,n,s;var a=r[0][2];function f(t){return{props:{data:t[4],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&16&&(l.data=t[4]),i&2083&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][2])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function Ot(r){let e,n,s;var a=r[0][3];function f(t){return{props:{data:t[5],form:t[1]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=A()},l(t){e&&ee(e.$$.fragment,t),n=A()},m(t,i){e&&B(e,t,i),z(t,n,i),s=!0},p(t,i){const l={};if(i&32&&(l.data=t[5]),i&2&&(l.form=t[1]),a!==(a=t[0][3])){if(e){F();const u=e;j(u.$$.fragment,1,0,()=>{J(u,1)}),G()}a?(e=new a(f(t)),q(e.$$.fragment),T(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&T(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&J(e,t)}}}function It(r){let e,n,s,a;const f=[Pt,St],t=[];function i(l,u){return l[0][3]?0:1}return e=i(r),n=t[e]=f[e](r),{c(){n.c(),s=A()},l(l){n.l(l),s=A()},m(l,u){t[e].m(l,u),z(l,s,u),a=!0},p(l,u){let h=e;e=i(l),e===h?t[e].p(l,u):(F(),j(t[h],1,1,()=>{t[h]=null}),G(),n=t[e],n?n.p(l,u):(n=t[e]=f[e](l),n.c()),T(n,1),n.m(s.parentNode,s))},i(l){a||(T(n),a=!0)},o(l){j(n),a=!1},d(l){t[e].d(l),l&&C(s)}}}function At(r){let e,n,s,a;const f=[Lt,Rt],t=[];function i(l,u){return l[0][2]?0:1}return e=i(r),n=t[e]=f[e](r),{c(){n.c(),s=A()},l(l){n.l(l),s=A()},m(l,u){t[e].m(l,u),z(l,s,u),a=!0},p(l,u){let h=e;e=i(l),e===h?t[e].p(l,u):(F(),j(t[h],1,1,()=>{t[h]=null}),G(),n=t[e],n?n.p(l,u):(n=t[e]=f[e](l),n.c()),T(n,1),n.m(s.parentNode,s))},i(l){a||(T(n),a=!0)},o(l){j(n),a=!1},d(l){t[e].d(l),l&&C(s)}}}function Ke(r){let e,n=r[7]&&Fe(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(s){e=tt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=nt(e);n&&n.l(a),a.forEach(C),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(s,a){z(s,e,a),n&&n.m(e,null)},p(s,a){s[7]?n?n.p(s,a):(n=Fe(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&C(e),n&&n.d()}}}function Fe(r){let e;return{c(){e=rt(r[8])},l(n){e=at(n,r[8])},m(n,s){z(n,e,s)},p(n,s){s&256&&st(e,n[8])},d(n){n&&C(e)}}}function jt(r){let e,n,s,a,f;const t=[Et,kt],i=[];function l(h,k){return h[0][1]?0:1}e=l(r),n=i[e]=t[e](r);let u=r[6]&&Ke(r);return{c(){n.c(),s=Qe(),u&&u.c(),a=A()},l(h){n.l(h),s=Ze(h),u&&u.l(h),a=A()},m(h,k){i[e].m(h,k),z(h,s,k),u&&u.m(h,k),z(h,a,k),f=!0},p(h,[k]){let N=e;e=l(h),e===N?i[e].p(h,k):(F(),j(i[N],1,1,()=>{i[N]=null}),G(),n=i[e],n?n.p(h,k):(n=i[e]=t[e](h),n.c()),T(n,1),n.m(s.parentNode,s)),h[6]?u?u.p(h,k):(u=Ke(h),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null)},i(h){f||(T(n),f=!0)},o(h){j(n),f=!1},d(h){i[e].d(h),h&&C(s),u&&u.d(h),h&&C(a)}}}function Tt(r,e,n){let{stores:s}=e,{page:a}=e,{components:f}=e,{form:t}=e,{data_0:i=null}=e,{data_1:l=null}=e,{data_2:u=null}=e,{data_3:h=null}=e;xe(s.page.notify);let k=!1,N=!1,K=null;return ve(()=>{const y=s.page.subscribe(()=>{k&&(n(7,N=!0),n(8,K=document.title||"untitled page"))});return n(6,k=!0),y}),r.$$set=y=>{"stores"in y&&n(9,s=y.stores),"page"in y&&n(10,a=y.page),"components"in y&&n(0,f=y.components),"form"in y&&n(1,t=y.form),"data_0"in y&&n(2,i=y.data_0),"data_1"in y&&n(3,l=y.data_1),"data_2"in y&&n(4,u=y.data_2),"data_3"in y&&n(5,h=y.data_3)},r.$$.update=()=>{r.$$.dirty&1536&&s.page.set(a)},[f,t,i,l,u,h,k,N,K,s,a]}class Ut extends Me{constructor(e){super(),Xe(this,e,Tt,jt,Ye,{stores:9,page:10,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5})}}const Dt={},fe=[()=>V(()=>import("./chunks/0-04abea2e.js"),["./chunks/0-04abea2e.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-3c8dcc2c.js","./chunks/index-7d488c81.js","./chunks/meta-b98ed552.js","./assets/_layout-6b5c9c81.css","./assets/app-7302626d.css"],import.meta.url),()=>V(()=>import("./chunks/1-35c9dfa1.js"),["./chunks/1-35c9dfa1.js","./components/pages/_error.svelte-cfa4c730.js","./chunks/index-7d488c81.js","./assets/_error-c1a5aa40.css"],import.meta.url),()=>V(()=>import("./chunks/2-94152051.js"),["./chunks/2-94152051.js","./components/pages/(can-navigate)/_layout.svelte-c0cf35fd.js","./chunks/index-7d488c81.js","./chunks/footer-1fed4882.js","./chunks/email-b83bc62f.js","./assets/footer-61925872.css","./chunks/meta-b98ed552.js"],import.meta.url),()=>V(()=>import("./chunks/3-d4252ffa.js"),["./chunks/3-d4252ffa.js","./components/pages/(can-navigate)/blog/(blog-article)/_layout.svelte-228350d8.js","./chunks/index-7d488c81.js","./chunks/image-d8c58abd.js","./assets/image-68278ab0.css","./chunks/tag-33074fce.js","./assets/tag-9942ccb2.css","./chunks/blog-post-card-46d6c7fe.js","./chunks/section-0dd963ce.js","./assets/section-5503a7f2.css","./chunks/meta-b98ed552.js","./chunks/index-cbc60b15.js","./assets/_layout-c71ee51f.css","./assets/app-7302626d.css"],import.meta.url),()=>V(()=>import("./chunks/4-6a4b0049.js"),["./chunks/4-6a4b0049.js","./components/pages/(can-navigate)/blog/_page.svelte-90f9cb7f.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/section-0dd963ce.js","./assets/section-5503a7f2.css","./chunks/blog-post-card-46d6c7fe.js","./chunks/image-d8c58abd.js","./assets/image-68278ab0.css","./chunks/tag-33074fce.js","./assets/tag-9942ccb2.css","./assets/_page-562b8872.css"],import.meta.url),()=>V(()=>import("./chunks/5-c92b3a3a.js"),["./chunks/5-c92b3a3a.js","./chunks/_page-ee052ff9.js","./chunks/index-7d488c81.js","./chunks/image-d8c58abd.js","./assets/image-68278ab0.css","./assets/_page-f45b9a6e.css","./components/pages/(can-navigate)/blog/(blog-article)/_slug_/_page.svelte-a8b6fd1d.js"],import.meta.url),()=>V(()=>import("./chunks/6-8da14433.js"),["./chunks/6-8da14433.js","./components/pages/(can-navigate)/projects/_page.svelte-2fa637ae.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/section-0dd963ce.js","./assets/section-5503a7f2.css","./chunks/image-d8c58abd.js","./assets/image-68278ab0.css","./chunks/projects-05c8613c.js","./assets/_page-afc6c558.css"],import.meta.url),()=>V(()=>import("./chunks/7-fd27c341.js"),["./chunks/7-fd27c341.js","./components/pages/(can-navigate)/projects/_title_/_page.svelte-a09b7c80.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/projects-05c8613c.js","./chunks/tag-33074fce.js","./assets/tag-9942ccb2.css","./chunks/image-d8c58abd.js","./assets/image-68278ab0.css","./chunks/stores-0d1c6b1c.js","./chunks/singletons-55fc8077.js","./assets/_page-f3612e1e.css"],import.meta.url),()=>V(()=>import("./chunks/8-7d886a1f.js"),["./chunks/8-7d886a1f.js","./components/pages/(can-navigate)/resume/_page.svelte-9aac7096.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/email-b83bc62f.js","./assets/_page-0177c8f7.css"],import.meta.url),()=>V(()=>import("./chunks/9-0c7917df.js"),["./chunks/9-0c7917df.js","./components/pages/(root)/_page.svelte-6e774603.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/footer-1fed4882.js","./chunks/email-b83bc62f.js","./assets/footer-61925872.css","./assets/_page-414f66cd.css"],import.meta.url),()=>V(()=>import("./chunks/10-e96fdd3a.js"),["./chunks/10-e96fdd3a.js","./components/pages/404/_page.svelte-ca484bdf.js","./chunks/index-7d488c81.js","./assets/_page-bc1c4876.css"],import.meta.url),()=>V(()=>import("./chunks/11-c3e3e02d.js"),["./chunks/11-c3e3e02d.js","./components/pages/privacy/_page.svelte-fb029493.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/footer-1fed4882.js","./chunks/email-b83bc62f.js","./assets/footer-61925872.css","./chunks/privacies-54eb2190.js","./assets/_page-1c360dd4.css"],import.meta.url),()=>V(()=>import("./chunks/12-e54382a9.js"),["./chunks/12-e54382a9.js","./components/pages/privacy/(page)/_lang_/_page.svelte-abe6199f.js","./chunks/index-7d488c81.js","./chunks/index-cbc60b15.js","./chunks/privacies-54eb2190.js","./chunks/footer-1fed4882.js","./chunks/email-b83bc62f.js","./assets/footer-61925872.css","./chunks/stores-0d1c6b1c.js","./chunks/singletons-55fc8077.js","./assets/_page-bf500460.css"],import.meta.url)],Nt=[3],Vt={"(root)":[9],"(can-navigate)/blog":[-5,[2]],"(can-navigate)/projects":[-7,[2]],"(can-navigate)/resume":[8,[2]],404:[10],privacy:[11],"(can-navigate)/blog/(blog-article)/[slug]":[5,[2,3]],"(can-navigate)/projects/[title]":[7,[2]],"privacy/(page)/[lang]":[12]},Ct={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},qt="/__data.js",He="sveltekit:scroll",Q="sveltekit:index",oe=$t(fe,Nt,Vt,Dt),ke=fe[0],Ee=fe[1];ke();Ee();let ae={};try{ae=JSON.parse(sessionStorage[He])}catch{}function ye(r){ae[r]=$e()}function Bt({target:r,base:e,trailing_slash:n}){var Ue;const s=[],a={id:null,promise:null},f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},i=!1,l=!0,u=!1,h=1,k=null,N=!1,K,y=(Ue=history.state)==null?void 0:Ue[Q];y||(y=Date.now(),history.replaceState({...history.state,[Q]:y},"",location.href));const W=ae[y];W&&(history.scrollRestoration="manual",scrollTo(W.x,W.y));let M=!1,X,Le;function Se(){if(!k){const o=new URL(location.href);k=Promise.resolve().then(async()=>{const d=_e(o,!0);await Oe(d,o,[]),k=null,N=!1})}return k}async function ue(o,{noscroll:d=!1,replaceState:m=!1,keepfocus:c=!1,state:p={}},g){return typeof o=="string"&&(o=new URL(o,qe(document))),me({url:o,scroll:d?$e():null,keepfocus:c,redirect_chain:g,details:{state:p,replaceState:m},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(o){const d=_e(o,!1);if(!d)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=je(d),a.id=d.id,a.promise}async function Oe(o,d,m,c,p){var $,E;const g=Le={};let w=o&&await je(o);if(!w&&d.origin===location.origin&&d.pathname===location.pathname&&(w=await se({status:404,error:new Error(`Not found: ${d.pathname}`),url:d,routeId:null})),!w)return await ne(d),!1;if(d=(o==null?void 0:o.url)||d,Le!==g)return!1;if(s.length=0,w.type==="redirect")if(m.length>10||m.includes(d.pathname))w=await se({status:500,error:new Error("Redirect loop"),url:d,routeId:null});else return ue(new URL(w.location,d).href,{},[...m,d.pathname]),!1;else((E=($=w.props)==null?void 0:$.page)==null?void 0:E.status)>=400&&await x.updated.check()&&await ne(d);if(u=!0,c&&c.details){const{details:v}=c,b=v.replaceState?0:1;v.state[Q]=y+=b,history[v.replaceState?"replaceState":"pushState"](v.state,"",d)}if(i){t=w.state,w.props.page&&(w.props.page.url=d);const v=le();K.$set(w.props),v()}else Ie(w);if(c){const{scroll:v,keepfocus:b}=c;if(!b){const R=document.body,I=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),I!==null?R.setAttribute("tabindex",I):R.removeAttribute("tabindex")}if(await Ce(),l){const R=d.hash&&document.getElementById(d.hash.slice(1));v?scrollTo(v.x,v.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();a.promise=null,a.id=null,l=!0,w.props.page&&(X=w.props.page),p&&p(),u=!1}function Ie(o){var p,g;t=o.state;const d=document.querySelector("style[data-sveltekit]");d&&d.remove(),X=o.props.page;const m=le();K=new Ut({target:r,props:{...o.props,stores:x},hydrate:!0}),m();const c={from:null,to:ie("to",{params:t.params,routeId:(g=(p=t.route)==null?void 0:p.id)!=null?g:null,url:new URL(location.href)}),type:"load"};f.after_navigate.forEach(w=>w(c)),i=!0}async function te({url:o,params:d,branch:m,status:c,error:p,route:g,form:w}){var I;const $=m.filter(Boolean),E={type:"loaded",state:{url:o,params:d,branch:m,error:p,route:g,session_id:h},props:{components:$.map(S=>S.node.component)}};w!==void 0&&(E.props.form=w);let v={},b=!X;for(let S=0;S<$.length;S+=1){const U=$[S];v={...v,...U.data},(b||!t.branch.some(D=>D===U))&&(E.props[`data_${S}`]=v,b=b||Object.keys((I=U.data)!=null?I:{}).length>0)}if(b||(b=Object.keys(X.data).length!==Object.keys(v).length),!t.url||o.href!==t.url.href||t.error!==p||b){E.props.page={error:p,params:d,routeId:g&&g.id,status:c,url:o,data:b?v:X.data};const S=(U,D)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${D}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function de({loader:o,parent:d,url:m,params:c,routeId:p,server_data_node:g}){var v,b,R,I,S;let w=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await o();if((v=E.shared)!=null&&v.load){let U=function(..._){for(const L of _){const{href:P}=new URL(L,m);$.dependencies.add(P)}};const D={};for(const _ in c)Object.defineProperty(D,_,{get(){return $.params.add(_),c[_]},enumerable:!0});const Y={routeId:p,params:D,data:(b=g==null?void 0:g.data)!=null?b:null,url:pt(m,()=>{$.url=!0}),async fetch(_,L){let P;typeof _=="string"?P=_:(P=_.url,L={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...L});const O=new URL(P,m).href;return U(O),i?gt(O,L):ht(P,O,L)},setHeaders:()=>{},depends:U,parent(){return $.parent=!0,d()}};Object.defineProperties(Y,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),w=(R=await E.shared.load.call(null,Y))!=null?R:null}return{node:E,loader:o,server:g,shared:(I=E.shared)!=null&&I.load?{type:"data",data:w,uses:$}:null,data:(S=w!=null?w:g==null?void 0:g.data)!=null?S:null}}function Ae(o,d,m){if(N)return!0;if(!m)return!1;if(m.parent&&d||o.url&&m.url)return!0;for(const c of o.params)if(m.params.has(c))return!0;for(const c of m.dependencies)if(s.some(p=>p(new URL(c))))return!0;return!1}function pe(o,d){var m,c;return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set((m=o.uses.dependencies)!=null?m:[]),params:new Set((c=o.uses.params)!=null?c:[]),parent:!!o.uses.parent,url:!!o.uses.url}}:(o==null?void 0:o.type)==="skip"&&d!=null?d:null}async function je({id:o,invalidating:d,url:m,params:c,route:p}){var Y;if(a.id===o&&a.promise)return a.promise;const{errors:g,layouts:w,leaf:$}=p,E=t.url&&{url:o!==t.url.pathname+t.url.search,params:Object.keys(c).filter(_=>t.params[_]!==c[_])},v=[...w,$];g.forEach(_=>_==null?void 0:_().catch(()=>{})),v.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let b=null;const R=v.reduce((_,L,P)=>{var Z;const O=t.branch[P],re=!!(L!=null&&L[0])&&((O==null?void 0:O.loader)!==L[1]||Ae(E,_.some(Boolean),(Z=O.server)==null?void 0:Z.uses));return _.push(re),_},[]);if(R.some(Boolean)){try{b=await Ge(m,R)}catch(_){return se({status:500,error:_,url:m,routeId:p.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let S=!1;const U=v.map(async(_,L)=>{var he,De;if(!_)return;const P=t.branch[L],O=(he=I==null?void 0:I[L])!=null?he:null;if((!O||O.type==="skip")&&_[1]===(P==null?void 0:P.loader)&&!Ae(E,S,(De=P.shared)==null?void 0:De.uses))return P;if(S=!0,(O==null?void 0:O.type)==="error")throw O;return de({loader:_[1],url:m,params:c,routeId:p.id,parent:async()=>{var Ve;const Ne={};for(let ge=0;ge<L;ge+=1)Object.assign(Ne,(Ve=await U[ge])==null?void 0:Ve.data);return Ne},server_data_node:pe(O,P==null?void 0:P.server)})});for(const _ of U)_.catch(()=>{});const D=[];for(let _=0;_<v.length;_+=1)if(v[_])try{D.push(await U[_])}catch(L){if(L instanceof ze)return{type:"redirect",location:L.location};let P=500,O;for(I!=null&&I.includes(L)?(P=(Y=L.status)!=null?Y:P,O=L.error):L instanceof be?(P=L.status,O=L.body):O=We(L,{params:c,url:m,routeId:p.id});_--;)if(g[_]){let re,Z=_;for(;!D[Z];)Z-=1;try{return re={node:await g[_](),loader:g[_],data:{},server:null,shared:null},await te({url:m,params:c,branch:D.slice(0,Z+1).concat(re),status:P,error:O,route:p})}catch{continue}}await ne(m);return}else D.push(void 0);return await te({url:m,params:c,branch:D,status:200,error:null,route:p,form:d?void 0:null})}async function se({status:o,error:d,url:m,routeId:c}){var v;const p={},g=await ke();let w=null;if(g.server)try{const b=await Ge(m,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;w=(v=b.nodes[0])!=null?v:null}catch{await ne(m);return}const $=await de({loader:ke,url:m,params:p,routeId:c,parent:()=>Promise.resolve({}),server_data_node:pe(w)}),E={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await te({url:m,params:p,branch:[$,E],status:o,error:d instanceof be?d.body:We(d,{url:m,params:p,routeId:null}),route:null})}function _e(o,d){if(Te(o))return;const m=decodeURI(o.pathname.slice(e.length)||"/");for(const c of oe){const p=c.exec(m);if(p){const g=new URL(o.origin+ft(o.pathname,n)+o.search+o.hash);return{id:g.pathname+g.search,invalidating:d,route:c,params:ut(p),url:g}}}}function Te(o){return o.origin!==location.origin||!o.pathname.startsWith(e)}async function me({url:o,scroll:d,keepfocus:m,redirect_chain:c,details:p,type:g,delta:w,accepted:$,blocked:E}){var S,U,D,Y;let v=!1;const b=_e(o,!1),R={from:ie("from",{params:t.params,routeId:(U=(S=t.route)==null?void 0:S.id)!=null?U:null,url:t.url}),to:ie("to",{params:(D=b==null?void 0:b.params)!=null?D:null,routeId:(Y=b==null?void 0:b.route.id)!=null?Y:null,url:o}),type:g};w!==void 0&&(R.delta=w);const I={...R,cancel:()=>{v=!0}};if(f.before_navigate.forEach(_=>_(I)),v){E();return}ye(y),$(),i&&x.navigating.set(R),await Oe(b,o,c,{scroll:d,keepfocus:m,details:p},()=>{f.after_navigate.forEach(_=>_(R)),x.navigating.set(null)})}function ne(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{ve(()=>(f.after_navigate.push(o),()=>{const d=f.after_navigate.indexOf(o);f.after_navigate.splice(d,1)}))},before_navigate:o=>{ve(()=>(f.before_navigate.push(o),()=>{const d=f.before_navigate.indexOf(o);f.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(u||!i)&&(l=!1)},goto:(o,d={})=>ue(o,d,[]),invalidate:o=>{if(o===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof o=="function")s.push(o);else{const{href:d}=new URL(o,location.href);s.push(m=>m.href===d)}return Se()},invalidateAll:()=>(N=!0,Se()),prefetch:async o=>{const d=new URL(o,qe(document));await Pe(d)},prefetch_routes:async o=>{const m=(o?oe.filter(c=>o.some(p=>c.exec(p))):oe).map(c=>Promise.all([...c.layouts,c.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(m)},apply_action:async o=>{if(o.type==="error"){const d=new URL(location.href),{branch:m,route:c}=t;if(!c)return;let p=t.branch.length;for(;p--;)if(c.errors[p]){let g,w=p;for(;!m[w];)w-=1;try{g={node:await c.errors[p](),loader:c.errors[p],data:{},server:null,shared:null};const $=await te({url:d,params:t.params,branch:m.slice(0,w+1).concat(g),status:500,error:o.error,route:c});t=$.state;const E=le();K.$set($.props),E();return}catch{continue}}}else if(o.type==="redirect")ue(o.location,{},[]);else{const d={form:o.data};o.status!==X.status&&(d.page={...X,status:o.status});const m=le();K.$set(d),m()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{var w,$;let p=!1;const g={from:ie("from",{params:t.params,routeId:($=(w=t.route)==null?void 0:w.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>p=!0};f.before_navigate.forEach(E=>E(g)),p?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(y);try{sessionStorage[He]=JSON.stringify(ae)}catch{}}});const o=c=>{const{url:p,options:g}=Be(c);if(p&&g.prefetch){if(Te(p))return;Pe(p)}};let d;const m=c=>{clearTimeout(d),d=setTimeout(()=>{var p;(p=c.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",m),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",c=>{if(c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const{a:p,url:g,options:w}=Be(c);if(!p||!g)return;const $=p instanceof SVGAElement;if(!$&&!(g.protocol==="https:"||g.protocol==="http:"))return;const E=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||E.includes("external")||w.reload||($?p.target.baseVal:p.target))return;const[v,b]=g.href.split("#");if(b!==void 0&&v===location.href.split("#")[0]){M=!0,ye(y),x.page.set({...X,url:g}),x.page.notify();return}me({url:g,scroll:w.noscroll?$e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:g.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault(),type:"link"})}),addEventListener("popstate",c=>{if(c.state){if(c.state[Q]===y)return;const p=c.state[Q]-y;me({url:new URL(location.href),scroll:ae[c.state[Q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{y=c.state[Q]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[Q]:++y},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&x.navigating.set(null)})},_hydrate:async({status:o,error:d,node_ids:m,params:c,routeId:p,data:g,form:w})=>{var v;const $=new URL(location.href);let E;try{const b=m.map(async(R,I)=>{const S=g[I];return de({loader:fe[R],url:$,params:c,routeId:p,parent:async()=>{const U={};for(let D=0;D<I;D+=1)Object.assign(U,(await b[D]).data);return U},server_data_node:pe(S)})});E=await te({url:$,params:c,branch:await Promise.all(b),status:o,error:d,form:w,route:(v=oe.find(R=>R.id===p))!=null?v:null})}catch(b){const R=b;if(R instanceof ze){await ne(new URL(b.location,location.href));return}E=await se({status:R instanceof be?R.status:500,error:R,url:$,routeId:p})}Ie(E)}}}let Jt=1;async function Ge(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+qt,n.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),n.searchParams.set("__id",String(Jt++)),await V(()=>import(n.href),[],import.meta.url);const s=window.__sveltekit_data;return delete window.__sveltekit_data,s}function We(r,e){var n;return(n=Ct.handleError({error:r,event:e}))!=null?n:{message:"Internal Error"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ie(r,e){for(const n of zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)}});return e}function le(){return()=>{}}async function Gt({env:r,hydrate:e,paths:n,target:s,trailing_slash:a}){ot(n);const f=Bt({target:s,base:n.base,trailing_slash:a});it({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Gt as start};
