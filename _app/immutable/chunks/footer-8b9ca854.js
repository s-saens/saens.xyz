import{S as z,i as X,s as J,K as re,k as m,r as E,a as Y,l as g,m as f,u as $,h as c,c as B,p as e,L as te,b as Q,D as a,E as ae,n as V,B as M,C as N,w as q,x as H,y as O,f as G,t as L,z as P}from"./index-e3f0bc09.js";import{G as se,E as le}from"./email-7898634c.js";/* empty css                                             */function ne(_){let t=!1,r=()=>{t=!1},l,i,s,n,p,o,u,h,d,k,v,I,x,w,R;return re(_[5]),{c(){i=m("header"),s=m("nav"),n=m("a"),p=E("S A E N S"),o=Y(),u=m("div"),h=m("a"),d=E("Blog"),k=Y(),v=m("a"),I=E("Resume"),this.h()},l(b){i=g(b,"HEADER",{class:!0});var y=f(i);s=g(y,"NAV",{class:!0});var A=f(s);n=g(A,"A",{class:!0,href:!0,alt:!0});var D=f(n);p=$(D,"S A E N S"),D.forEach(c),o=B(A),u=g(A,"DIV",{class:!0});var j=f(u);h=g(j,"A",{href:!0,class:!0});var S=f(h);d=$(S,"Blog"),S.forEach(c),k=B(j),v=g(j,"A",{href:!0,class:!0});var F=f(v);I=$(F,"Resume"),F.forEach(c),j.forEach(c),A.forEach(c),y.forEach(c),this.h()},h(){e(n,"class","logo clickable svelte-16etdvf"),e(n,"href","/"),e(n,"alt","Site logo"),e(h,"href","/blog"),e(h,"class","svelte-16etdvf"),e(v,"href","/resume"),e(v,"class","svelte-16etdvf"),e(u,"class","links clickable svelte-16etdvf"),e(s,"class",x=te(_[1])+" svelte-16etdvf"),e(i,"class","svelte-16etdvf")},m(b,y){Q(b,i,y),a(i,s),a(s,n),a(n,p),a(s,o),a(s,u),a(u,h),a(h,d),a(u,k),a(u,v),a(v,I),w||(R=ae(window,"scroll",()=>{t=!0,clearTimeout(l),l=setTimeout(r,100),_[5]()}),w=!0)},p(b,[y]){y&1&&!t&&(t=!0,clearTimeout(l),scrollTo(window.pageXOffset,b[0]),l=setTimeout(r,100)),y&2&&x!==(x=te(b[1])+" svelte-16etdvf")&&e(s,"class",x)},i:V,o:V,d(b){b&&c(i),w=!1,R()}}}function oe(_,t,r){let{animated:l=!0}=t,i="on";var s=100;let n=100,p=0;function o(){r(0,p=window.pageYOffset)}return _.$$set=u=>{"animated"in u&&r(2,l=u.animated)},_.$$.update=()=>{_.$$.dirty&25&&(r(4,n=s-p),r(3,s=p),r(1,i=n>=0?"on":"off"))},[p,i,l,s,n,o]}class _e extends z{constructor(t){super(),X(this,t,oe,ne,J,{animated:2})}}function ie(_){let t,r,l,i;return{c(){t=M("svg"),r=M("path"),l=M("path"),i=M("path"),this.h()},l(s){t=N(s,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0,xmlns:!0});var n=f(t);r=N(n,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),f(r).forEach(c),l=N(n,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),f(l).forEach(c),i=N(n,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),f(i).forEach(c),n.forEach(c),this.h()},h(){e(r,"d","M12 19C12 14.8 9.2 12 5 12"),e(r,"stroke","currentColor"),e(r,"stroke-linecap","round"),e(r,"stroke-linejoin","round"),e(l,"d","M19 19C19 10.6 13.4 5 5 5"),e(l,"stroke","currentColor"),e(l,"stroke-linecap","round"),e(l,"stroke-linejoin","round"),e(i,"d","M5 19.01L5.01 18.9989"),e(i,"stroke","currentColor"),e(i,"stroke-linecap","round"),e(i,"stroke-linejoin","round"),e(t,"width","100%"),e(t,"height","100%"),e(t,"stroke-width","1.5"),e(t,"viewBox","0 0 24 24"),e(t,"fill","none"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(s,n){Q(s,t,n),a(t,r),a(t,l),a(t,i)},p:V,i:V,o:V,d(s){s&&c(t)}}}class ce extends z{constructor(t){super(),X(this,t,null,ie,J,{})}}function ue(_){let t,r,l,i,s,n,p,o,u,h;return l=new se({}),n=new le({}),u=new ce({}),{c(){t=m("div"),r=m("a"),q(l.$$.fragment),i=Y(),s=m("a"),q(n.$$.fragment),p=Y(),o=m("a"),q(u.$$.fragment),this.h()},l(d){t=g(d,"DIV",{class:!0});var k=f(t);r=g(k,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var v=f(r);H(l.$$.fragment,v),v.forEach(c),i=B(k),s=g(k,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var I=f(s);H(n.$$.fragment,I),I.forEach(c),p=B(k),o=g(k,"A",{href:!0,target:!0,rel:!0,title:!0,class:!0});var x=f(o);H(u.$$.fragment,x),x.forEach(c),k.forEach(c),this.h()},h(){e(r,"href","https://github.com/s-saens"),e(r,"target","_blank"),e(r,"rel","noopener"),e(r,"title","See my GitHub profile"),e(r,"class","svelte-1xbtv6l"),e(s,"href","mailto:songsh5775@gmail.com"),e(s,"target","_blank"),e(s,"rel","noopener"),e(s,"title","Send an email to saens"),e(s,"class","svelte-1xbtv6l"),e(o,"href","/rss.xml"),e(o,"target","_blank"),e(o,"rel","noopener"),e(o,"title","Subscribe to my RSS Feed"),e(o,"class","svelte-1xbtv6l"),e(t,"class","socials svelte-1xbtv6l")},m(d,k){Q(d,t,k),a(t,r),O(l,r,null),a(t,i),a(t,s),O(n,s,null),a(t,p),a(t,o),O(u,o,null),h=!0},p:V,i(d){h||(G(l.$$.fragment,d),G(n.$$.fragment,d),G(u.$$.fragment,d),h=!0)},o(d){L(l.$$.fragment,d),L(n.$$.fragment,d),L(u.$$.fragment,d),h=!1},d(d){d&&c(t),P(l),P(n),P(u)}}}class fe extends z{constructor(t){super(),X(this,t,null,ue,J,{})}}function he(_){let t,r,l,i,s,n,p,o,u,h,d,k,v,I,x,w,R,b,y,A,D,j;return D=new fe({}),{c(){t=m("footer"),r=m("div"),l=m("div"),i=E("\xA9 "),s=E(_[0]),n=E(" SAENS, in Korea"),p=Y(),o=m("div"),u=E(`Powered by
				`),h=m("a"),d=E("SvelteKit"),k=E(`
			and
				`),v=m("a"),I=E("Matt Fantinel's project"),x=E(`.
			Icons by
				`),w=m("a"),R=E("Iconoir"),b=E("."),y=Y(),A=m("div"),q(D.$$.fragment),this.h()},l(S){t=g(S,"FOOTER",{class:!0});var F=f(t);r=g(F,"DIV",{class:!0});var T=f(r);l=g(T,"DIV",{class:!0});var K=f(l);i=$(K,"\xA9 "),s=$(K,_[0]),n=$(K," SAENS, in Korea"),K.forEach(c),p=B(T),o=g(T,"DIV",{class:!0});var C=f(o);u=$(C,`Powered by
				`),h=g(C,"A",{href:!0,target:!0,rel:!0});var U=f(h);d=$(U,"SvelteKit"),U.forEach(c),k=$(C,`
			and
				`),v=g(C,"A",{href:!0,target:!0,rel:!0});var W=f(v);I=$(W,"Matt Fantinel's project"),W.forEach(c),x=$(C,`.
			Icons by
				`),w=g(C,"A",{href:!0,target:!0,rel:!0});var Z=f(w);R=$(Z,"Iconoir"),Z.forEach(c),b=$(C,"."),C.forEach(c),y=B(T),A=g(T,"DIV",{class:!0});var ee=f(A);H(D.$$.fragment,ee),ee.forEach(c),T.forEach(c),F.forEach(c),this.h()},h(){e(l,"class","copyright"),e(h,"href","https://kit.svelte.dev/"),e(h,"target","_blank"),e(h,"rel","noopener"),e(v,"href","https://github.com/matfantinel/matfantinel.github.io"),e(v,"target","_blank"),e(v,"rel","noopener"),e(w,"href","https://iconoir.com/"),e(w,"target","_blank"),e(w,"rel","noopener"),e(o,"class","credits svelte-q1v1w7"),e(A,"class","socials"),e(r,"class","content svelte-q1v1w7"),e(t,"class","svelte-q1v1w7")},m(S,F){Q(S,t,F),a(t,r),a(r,l),a(l,i),a(l,s),a(l,n),a(r,p),a(r,o),a(o,u),a(o,h),a(h,d),a(o,k),a(o,v),a(v,I),a(o,x),a(o,w),a(w,R),a(o,b),a(r,y),a(r,A),O(D,A,null),j=!0},p:V,i(S){j||(G(D.$$.fragment,S),j=!0)},o(S){L(D.$$.fragment,S),j=!1},d(S){S&&c(t),P(D)}}}function de(_){return[new Date().getFullYear()]}class pe extends z{constructor(t){super(),X(this,t,de,he,J,{})}}export{pe as F,_e as H};
