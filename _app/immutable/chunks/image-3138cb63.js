import{S as T,i as b,s as k,k as m,a as C,l as o,m as I,c as E,h as u,R as _,n as f,b as p,D as g,A as h}from"./index-f1216d6c.js";/* empty css                                            */function y(s){let t;return{c(){t=m("figcaption")},l(e){t=o(e,"FIGCAPTION",{});var n=I(t);n.forEach(u)},m(e,n){p(e,t,n),t.innerHTML=s[1]},p(e,n){n&2&&(t.innerHTML=e[1])},d(e){e&&u(t)}}}function M(s){let t,e,n,r,i=s[1]&&y(s);return{c(){t=m("picture"),e=m("img"),r=C(),i&&i.c(),this.h()},l(a){t=o(a,"PICTURE",{class:!0});var l=I(t);e=o(l,"IMG",{src:!0,alt:!0,loading:!0,decoding:!0,style:!0,class:!0}),r=E(l),i&&i.l(l),l.forEach(u),this.h()},h(){_(e.src,n=s[3]+".png")||f(e,"src",n),f(e,"alt",s[0]),f(e,"loading","lazy"),f(e,"decoding","async"),f(e,"style",s[2]),f(e,"class","svelte-et962n"),f(t,"class","svelte-et962n")},m(a,l){p(a,t,l),g(t,e),g(t,r),i&&i.m(t,null)},p(a,[l]){l&8&&!_(e.src,n=a[3]+".png")&&f(e,"src",n),l&1&&f(e,"alt",a[0]),l&4&&f(e,"style",a[2]),a[1]?i?i.p(a,l):(i=y(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i:h,o:h,d(a){a&&u(t),i&&i.d()}}}function S(s,t,e){let{alt:n="image is not loaded"}=t,{path:r=null}=t,{filename:i}=t,{figcaption:a=null}=t,{add_style:l=""}=t,d;return s.$$set=c=>{"alt"in c&&e(0,n=c.alt),"path"in c&&e(4,r=c.path),"filename"in c&&e(5,i=c.filename),"figcaption"in c&&e(1,a=c.figcaption),"add_style"in c&&e(2,l=c.add_style)},s.$$.update=()=>{s.$$.dirty&48&&e(3,d=`/optimized-images/${r?r+"/":""}${i}`)},[n,a,l,d,r,i]}class A extends T{constructor(t){super(),b(this,t,S,M,k,{alt:0,path:4,filename:5,figcaption:1,add_style:2})}}export{A as I};