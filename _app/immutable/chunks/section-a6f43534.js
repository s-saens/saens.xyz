import{S as J,i as P,s as j,F as w,k as v,a as C,l as b,m as g,c as D,h as c,n as h,b as q,D as m,H as z,I as B,J as G,f as K,t as L,q as I,r as S,u as T}from"./index-a53413c5.js";function V(s){let e,i,t=s[0]&&H(s),l=s[1]&&A(s);return{c(){e=v("div"),t&&t.c(),i=C(),l&&l.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var r=g(e);t&&t.l(r),i=D(r),l&&l.l(r),r.forEach(c),this.h()},h(){h(e,"class","text svelte-1g564oq")},m(n,r){q(n,e,r),t&&t.m(e,null),m(e,i),l&&l.m(e,null)},p(n,r){n[0]?t?t.p(n,r):(t=H(n),t.c(),t.m(e,i)):t&&(t.d(1),t=null),n[1]?l?l.p(n,r):(l=A(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&c(e),t&&t.d(),l&&l.d()}}}function H(s){let e,i;return{c(){e=v("h2"),i=I(s[0])},l(t){e=b(t,"H2",{});var l=g(e);i=S(l,s[0]),l.forEach(c)},m(t,l){q(t,e,l),m(e,i)},p(t,l){l&1&&T(i,t[0])},d(t){t&&c(e)}}}function A(s){let e,i;return{c(){e=v("p"),i=I(s[1])},l(t){e=b(t,"P",{});var l=g(e);i=S(l,s[1]),l.forEach(c)},m(t,l){q(t,e,l),m(e,i)},p(t,l){l&2&&T(i,t[1])},d(t){t&&c(e)}}}function F(s){let e,i,t;return{c(){e=v("a"),i=I(s[2]),this.h()},l(l){e=b(l,"A",{class:!0,href:!0});var n=g(e);i=S(n,s[2]),n.forEach(c),this.h()},h(){h(e,"class",t="button "+s[4]+" svelte-1g564oq"),h(e,"href",s[3])},m(l,n){q(l,e,n),m(e,i)},p(l,n){n&4&&T(i,l[2]),n&16&&t!==(t="button "+l[4]+" svelte-1g564oq")&&h(e,"class",t),n&8&&h(e,"href",l[3])},d(l){l&&c(e)}}}function M(s){let e,i,t,l,n,r,d,o=(s[0]||s[1])&&V(s),u=s[2]&&s[3]&&F(s);const k=s[7].default,a=w(k,s,s[6],null);return{c(){e=v("div"),i=v("div"),o&&o.c(),t=C(),u&&u.c(),l=C(),n=v("div"),a&&a.c(),this.h()},l(f){e=b(f,"DIV",{class:!0});var _=g(e);i=b(_,"DIV",{class:!0});var E=g(i);o&&o.l(E),t=D(E),u&&u.l(E),E.forEach(c),l=D(_),n=b(_,"DIV",{class:!0});var U=g(n);a&&a.l(U),U.forEach(c),_.forEach(c),this.h()},h(){h(i,"class","title-area svelte-1g564oq"),h(n,"class","content-area svelte-1g564oq"),h(e,"class",r="section-container "+s[5]+" svelte-1g564oq")},m(f,_){q(f,e,_),m(e,i),o&&o.m(i,null),m(i,t),u&&u.m(i,null),m(e,l),m(e,n),a&&a.m(n,null),d=!0},p(f,[_]){f[0]||f[1]?o?o.p(f,_):(o=V(f),o.c(),o.m(i,t)):o&&(o.d(1),o=null),f[2]&&f[3]?u?u.p(f,_):(u=F(f),u.c(),u.m(i,null)):u&&(u.d(1),u=null),a&&a.p&&(!d||_&64)&&z(a,k,f,f[6],d?G(k,f[6],_,null):B(f[6]),null),(!d||_&32&&r!==(r="section-container "+f[5]+" svelte-1g564oq"))&&h(e,"class",r)},i(f){d||(K(a,f),d=!0)},o(f){L(a,f),d=!1},d(f){f&&c(e),o&&o.d(),u&&u.d(),a&&a.d(f)}}}function N(s,e,i){let{$$slots:t={},$$scope:l}=e,{title:n=null}=e,{description:r=null}=e,{buttonText:d=null}=e,{buttonUrl:o=null}=e,{buttonColor:u="primary"}=e,{align:k="left"}=e;return s.$$set=a=>{"title"in a&&i(0,n=a.title),"description"in a&&i(1,r=a.description),"buttonText"in a&&i(2,d=a.buttonText),"buttonUrl"in a&&i(3,o=a.buttonUrl),"buttonColor"in a&&i(4,u=a.buttonColor),"align"in a&&i(5,k=a.align),"$$scope"in a&&i(6,l=a.$$scope)},[n,r,d,o,u,k,l,t]}class Q extends J{constructor(e){super(),P(this,e,N,M,j,{title:0,description:1,buttonText:2,buttonUrl:3,buttonColor:4,align:5})}}export{Q as S};