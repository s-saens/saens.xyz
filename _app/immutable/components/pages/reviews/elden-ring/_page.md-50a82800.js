import{S as M,i as H,s as L,F as Ke,k as g,l as y,m,h as n,p as i,b as f,H as et,I as tt,J as at,f as T,t as j,B,C as z,q as Je,D as d,n as D,a as I,c as E,g as Ht,Y as wa,d as Lt,o as va,Z as ba,e as ua,w as x,x as C,y as P,z as A,_ as ka,U as Mt,V as _a,W as fa,X as da,r as v,u as b}from"../../../../chunks/index-e3f0bc09.js";import{A as $a}from"../../../../chunks/article-3e7ae3a5.js";import{I as Dt}from"../../../../chunks/image-f0fe2dd8.js";function Ia(h){let e,a;const o=h[1].default,l=Ke(o,h,h[0],null);return{c(){e=g("span"),l&&l.c(),this.h()},l(r){e=y(r,"SPAN",{class:!0});var s=m(e);l&&l.l(s),s.forEach(n),this.h()},h(){i(e,"class","wrapper svelte-1sgfl7c")},m(r,s){f(r,e,s),l&&l.m(e,null),a=!0},p(r,[s]){l&&l.p&&(!a||s&1)&&et(l,o,r,r[0],a?at(o,r[0],s,null):tt(r[0]),null)},i(r){a||(T(l,r),a=!0)},o(r){j(l,r),a=!1},d(r){r&&n(e),l&&l.d(r)}}}function Ea(h,e,a){let{$$slots:o={},$$scope:l}=e;return h.$$set=r=>{"$$scope"in r&&a(0,l=r.$$scope)},[l,o]}class Ta extends M{constructor(e){super(),H(this,e,Ea,Ia,L,{})}}function ja(h){let e,a,o;return{c(){e=g("div"),a=B("svg"),o=B("path"),this.h()},l(l){e=y(l,"DIV",{class:!0,style:!0});var r=m(e);a=z(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var s=m(a);o=z(s,"path",{d:!0,fill:!0}),m(o).forEach(n),s.forEach(n),r.forEach(n),this.h()},h(){i(o,"d","M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"),i(o,"fill",h[0]),i(a,"width",h[1]),i(a,"height",h[1]),i(a,"viewBox","0 0 160 160"),i(a,"fill","none"),i(a,"xmlns","http://www.w3.org/2000/svg"),i(a,"class","svelte-sixv8c"),i(e,"class","wrapper svelte-sixv8c"),Je(e,"top",h[2].top),Je(e,"left",h[2].left)},m(l,r){f(l,e,r),d(e,a),d(a,o)},p(l,[r]){r&1&&i(o,"fill",l[0]),r&2&&i(a,"width",l[1]),r&2&&i(a,"height",l[1]),r&4&&Je(e,"top",l[2].top),r&4&&Je(e,"left",l[2].left)},i:D,o:D,d(l){l&&n(e)}}}function Sa(h,e,a){let{color:o}=e,{size:l}=e,{style:r}=e;return h.$$set=s=>{"color"in s&&a(0,o=s.color),"size"in s&&a(1,l=s.size),"style"in s&&a(2,r=s.style)},[o,l,r]}class xa extends M{constructor(e){super(),H(this,e,Sa,ja,L,{color:0,size:1,style:2})}}function ma(h,e,a){const o=h.slice();return o[6]=e[a],o}function ca(h,e){let a,o,l;return o=new xa({props:{color:e[6].color,size:e[6].size,style:e[6].style}}),{key:h,first:null,c(){a=ua(),x(o.$$.fragment),this.h()},l(r){a=ua(),C(o.$$.fragment,r),this.h()},h(){this.first=a},m(r,s){f(r,a,s),P(o,r,s),l=!0},p(r,s){e=r;const k={};s&1&&(k.color=e[6].color),s&1&&(k.size=e[6].size),s&1&&(k.style=e[6].style),o.$set(k)},i(r){l||(T(o.$$.fragment,r),l=!0)},o(r){j(o.$$.fragment,r),l=!1},d(r){r&&n(a),A(o,r)}}}function Ca(h){let e,a=[],o=new Map,l,r,s,k=h[0];const c=w=>w[6].id;for(let w=0;w<k.length;w+=1){let _=ma(h,k,w),S=c(_);o.set(S,a[w]=ca(S,_))}const p=h[2].default,$=Ke(p,h,h[1],null);return{c(){e=g("div");for(let w=0;w<a.length;w+=1)a[w].c();l=I(),r=g("div"),$&&$.c(),this.h()},l(w){e=y(w,"DIV",{class:!0});var _=m(e);for(let q=0;q<a.length;q+=1)a[q].l(_);l=E(_),r=y(_,"DIV",{class:!0});var S=m(r);$&&$.l(S),S.forEach(n),_.forEach(n),this.h()},h(){i(r,"class","slot-wrapper svelte-exdx8u"),i(e,"class","sparkle-wrapper svelte-exdx8u")},m(w,_){f(w,e,_);for(let S=0;S<a.length;S+=1)a[S].m(e,null);d(e,l),d(e,r),$&&$.m(r,null),s=!0},p(w,[_]){_&1&&(k=w[0],Ht(),a=wa(a,_,c,1,w,k,o,e,ka,ca,l,ma),Lt()),$&&$.p&&(!s||_&2)&&et($,p,w,w[1],s?at(p,w[1],_,null):tt(w[1]),null)},i(w){if(!s){for(let _=0;_<k.length;_+=1)T(a[_]);T($,w),s=!0}},o(w){for(let _=0;_<a.length;_+=1)j(a[_]);j($,w),s=!1},d(w){w&&n(e);for(let _=0;_<a.length;_+=1)a[_].d();$&&$.d(w)}}}const Pa="hsl(50deg, 100%, 50%)";function Aa(h,e,a){let{$$slots:o={},$$scope:l}=e;const r=(p,$)=>Math.floor(Math.random()*($-p))+p,s=(p=Pa)=>({id:String(r(1e4,99999)),createdAt:Date.now(),color:p,size:r(10,20),style:{top:r(-10,80)+"%",left:r(0,100)+"%"}});let k=[],c;return va(()=>{c=setInterval(()=>{const p=Date.now(),$=s(),w=k.filter(_=>p-_.createdAt<1500);w.push($),a(0,k=w)},400)}),ba(()=>{clearInterval(c)}),h.$$set=p=>{"$$scope"in p&&a(1,l=p.$$scope)},[k,l,o]}class Ba extends M{constructor(e){super(),H(this,e,Aa,Ca,L,{})}}function za(h){let e,a;const o=h[0].default,l=Ke(o,h,h[1],null);return{c(){e=g("strong"),l&&l.c(),this.h()},l(r){e=y(r,"STRONG",{class:!0});var s=m(e);l&&l.l(s),s.forEach(n),this.h()},h(){i(e,"class","text-secondary")},m(r,s){f(r,e,s),l&&l.m(e,null),a=!0},p(r,s){l&&l.p&&(!a||s&2)&&et(l,o,r,r[1],a?at(o,r[1],s,null):tt(r[1]),null)},i(r){a||(T(l,r),a=!0)},o(r){j(l,r),a=!1},d(r){r&&n(e),l&&l.d(r)}}}function Ra(h){let e,a;return e=new Ba({props:{$$slots:{default:[za]},$$scope:{ctx:h}}}),{c(){x(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,l){P(e,o,l),a=!0},p(o,[l]){const r={};l&2&&(r.$$scope={dirty:l,ctx:o}),e.$set(r)},i(o){a||(T(e.$$.fragment,o),a=!0)},o(o){j(e.$$.fragment,o),a=!1},d(o){A(e,o)}}}function Da(h,e,a){let{$$slots:o={},$$scope:l}=e;return h.$$set=r=>{"$$scope"in r&&a(1,l=r.$$scope)},[o,l]}class pa extends M{constructor(e){super(),H(this,e,Da,Ra,L,{})}}function Ma(h){let e,a,o,l;return{c(){e=B("svg"),a=B("path"),o=B("path"),l=B("path"),this.h()},l(r){e=z(r,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0,xmlns:!0});var s=m(e);a=z(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(a).forEach(n),o=z(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(o).forEach(n),l=z(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(l).forEach(n),s.forEach(n),this.h()},h(){i(a,"d","M12 7L12 13"),i(a,"stroke","currentColor"),i(a,"stroke-linecap","round"),i(a,"stroke-linejoin","round"),i(o,"d","M12 17.01L12.01 16.9989"),i(o,"stroke","currentColor"),i(o,"stroke-linecap","round"),i(o,"stroke-linejoin","round"),i(l,"d","M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"),i(l,"stroke","currentColor"),i(l,"stroke-linecap","round"),i(l,"stroke-linejoin","round"),i(e,"width","100%"),i(e,"height","100%"),i(e,"stroke-width","1.5"),i(e,"viewBox","0 0 24 24"),i(e,"fill","none"),i(e,"xmlns","http://www.w3.org/2000/svg")},m(r,s){f(r,e,s),d(e,a),d(e,o),d(e,l)},p:D,i:D,o:D,d(r){r&&n(e)}}}class Ha extends M{constructor(e){super(),H(this,e,null,Ma,L,{})}}function La(h){let e,a,o;return{c(){e=B("svg"),a=B("path"),o=B("path"),this.h()},l(l){e=z(l,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0,xmlns:!0});var r=m(e);a=z(r,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(a).forEach(n),o=z(r,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(o).forEach(n),r.forEach(n),this.h()},h(){i(a,"d","M7 12.5L10 15.5L17 8.5"),i(a,"stroke","currentColor"),i(a,"stroke-linecap","round"),i(a,"stroke-linejoin","round"),i(o,"d","M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"),i(o,"stroke","currentColor"),i(o,"stroke-linecap","round"),i(o,"stroke-linejoin","round"),i(e,"width","100%"),i(e,"height","100%"),i(e,"stroke-width","1.5"),i(e,"viewBox","0 0 24 24"),i(e,"fill","none"),i(e,"xmlns","http://www.w3.org/2000/svg")},m(l,r){f(l,e,r),d(e,a),d(e,o)},p:D,i:D,o:D,d(l){l&&n(e)}}}class qa extends M{constructor(e){super(),H(this,e,null,La,L,{})}}function Na(h){let e,a,o,l;return{c(){e=B("svg"),a=B("path"),o=B("path"),l=B("path"),this.h()},l(r){e=z(r,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0,xmlns:!0});var s=m(e);a=z(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(a).forEach(n),o=z(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(o).forEach(n),l=z(s,"path",{d:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),m(l).forEach(n),s.forEach(n),this.h()},h(){i(a,"d","M12 11.5V16.5"),i(a,"stroke","currentColor"),i(a,"stroke-linecap","round"),i(a,"stroke-linejoin","round"),i(o,"d","M12 7.51L12.01 7.49889"),i(o,"stroke","currentColor"),i(o,"stroke-linecap","round"),i(o,"stroke-linejoin","round"),i(l,"d","M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"),i(l,"stroke","currentColor"),i(l,"stroke-linecap","round"),i(l,"stroke-linejoin","round"),i(e,"width","100%"),i(e,"height","100%"),i(e,"stroke-width","1.5"),i(e,"viewBox","0 0 24 24"),i(e,"fill","none"),i(e,"xmlns","http://www.w3.org/2000/svg")},m(r,s){f(r,e,s),d(e,a),d(e,o),d(e,l)},p:D,i:D,o:D,d(r){r&&n(e)}}}class Ya extends M{constructor(e){super(),H(this,e,null,Na,L,{})}}function ga(h){let e,a,o,l;const r=[Oa,Va,Fa],s=[];function k(c,p){return c[0]=="info"?0:c[0]=="warning"||c[0]=="error"?1:c[0]=="success"?2:-1}return~(a=k(h))&&(o=s[a]=r[a](h)),{c(){e=g("div"),o&&o.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var p=m(e);o&&o.l(p),p.forEach(n),this.h()},h(){i(e,"class","icon-wrapper svelte-1pi2pyj")},m(c,p){f(c,e,p),~a&&s[a].m(e,null),l=!0},p(c,p){let $=a;a=k(c),a!==$&&(o&&(Ht(),j(s[$],1,1,()=>{s[$]=null}),Lt()),~a?(o=s[a],o||(o=s[a]=r[a](c),o.c()),T(o,1),o.m(e,null)):o=null)},i(c){l||(T(o),l=!0)},o(c){j(o),l=!1},d(c){c&&n(e),~a&&s[a].d()}}}function Fa(h){let e,a;return e=new qa({}),{c(){x(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,l){P(e,o,l),a=!0},i(o){a||(T(e.$$.fragment,o),a=!0)},o(o){j(e.$$.fragment,o),a=!1},d(o){A(e,o)}}}function Va(h){let e,a;return e=new Ha({}),{c(){x(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,l){P(e,o,l),a=!0},i(o){a||(T(e.$$.fragment,o),a=!0)},o(o){j(e.$$.fragment,o),a=!1},d(o){A(e,o)}}}function Oa(h){let e,a;return e=new Ya({}),{c(){x(e.$$.fragment)},l(o){C(e.$$.fragment,o)},m(o,l){P(e,o,l),a=!0},i(o){a||(T(e.$$.fragment,o),a=!0)},o(o){j(e.$$.fragment,o),a=!1},d(o){A(e,o)}}}function Wa(h){let e,a,o,l,r=h[0]&&ga(h);const s=h[2].default,k=Ke(s,h,h[1],null);return{c(){e=g("div"),r&&r.c(),a=I(),k&&k.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var p=m(e);r&&r.l(p),a=E(p),k&&k.l(p),p.forEach(n),this.h()},h(){var c;i(e,"class",o="callout-block "+((c=h[0])!=null?c:"")+" svelte-1pi2pyj")},m(c,p){f(c,e,p),r&&r.m(e,null),d(e,a),k&&k.m(e,null),l=!0},p(c,[p]){var $;c[0]?r?(r.p(c,p),p&1&&T(r,1)):(r=ga(c),r.c(),T(r,1),r.m(e,a)):r&&(Ht(),j(r,1,1,()=>{r=null}),Lt()),k&&k.p&&(!l||p&2)&&et(k,s,c,c[1],l?at(s,c[1],p,null):tt(c[1]),null),(!l||p&1&&o!==(o="callout-block "+(($=c[0])!=null?$:"")+" svelte-1pi2pyj"))&&i(e,"class",o)},i(c){l||(T(r),T(k,c),l=!0)},o(c){j(r),j(k,c),l=!1},d(c){c&&n(e),r&&r.d(),k&&k.d(c)}}}function Xa(h,e,a){let{$$slots:o={},$$scope:l}=e,{type:r=null}=e;return h.$$set=s=>{"type"in s&&a(0,r=s.type),"$$scope"in s&&a(1,l=s.$$scope)},[r,l,o]}class Za extends M{constructor(e){super(),H(this,e,Xa,Wa,L,{type:0})}}function Ua(h){let e;return{c(){e=v("TL;DR: It's incredible and worth all the praise it's got. Not perfect, but really close to it.")},l(a){e=b(a,"TL;DR: It's incredible and worth all the praise it's got. Not perfect, but really close to it.")},m(a,o){f(a,e,o)},d(a){a&&n(e)}}}function Ga(h){let e;return{c(){e=v("will totally destroy you")},l(a){e=b(a,"will totally destroy you")},m(a,o){f(a,e,o)},d(a){a&&n(e)}}}function Qa(h){let e;return{c(){e=v("The world is fully realized, and there are rewards in every corner.")},l(a){e=b(a,"The world is fully realized, and there are rewards in every corner.")},m(a,o){f(a,e,o)},d(a){a&&n(e)}}}function Ja(h){let e;return{c(){e=v("10/10")},l(a){e=b(a,"10/10")},m(a,o){f(a,e,o)},d(a){a&&n(e)}}}function Ka(h){let e,a,o,l,r,s,k,c,p,$,w,_,S,q,N,ot,Y,ne,rt,Se,R,lt,F,nt,Ie,it,st,Ee,ht,xe,ie,ut,Ce,te,Pe,se,ft,Ae,he,dt,Be,V,mt,O,ue,ct,ze,fe,pt,Re,de,gt,De,me,yt,Me,ae,He,ce,wt,Le,pe,vt,qe,W,bt,X,ge,kt,Ne,ye,_t,Ye,oe,Fe,Z,Ve,we,$t,Oe,U,It,G,ve,Et,We,be,Tt,Xe,Q,jt,J,ke,St,Ze,_e,xt,Ue,K,Ct,ee,Pt,Ge;return e=new Za({props:{$$slots:{default:[Ua]},$$scope:{ctx:h}}}),F=new pa({props:{$$slots:{default:[Ga]},$$scope:{ctx:h}}}),te=new Dt({props:{path:"reviews/elden-ring",filename:"tree-sentinel",alt:"Screenshot of the game, showing the first boss you see right after opening the door into the game's big open world.",figcaption:"The Tree Sentinel is likely the first boss you'll encounter, but not the first one you'll defeat."}}),ae=new Dt({props:{path:"reviews/elden-ring",filename:"malenia-and-radahn",alt:"Screenshot of a game cutscene, showing two demigods fighting each other.",figcaption:"The demigods have an interesting backstory and while you interact little with them, knowing that backstory makes their appearances much more meaningful."}}),oe=new Dt({props:{path:"reviews/elden-ring",filename:"liurnia",alt:"Screenshot of the game, showing a beautiful landscape with hills, a lake, and golden trees surrounded by fog."}}),Z=new Ta({props:{$$slots:{default:[Qa]},$$scope:{ctx:h}}}),ee=new pa({props:{$$slots:{default:[Ja]},$$scope:{ctx:h}}}),{c(){x(e.$$.fragment),a=I(),o=g("p"),l=v("Elden Ring was probably the most hyped up game of the past couple of years, and its release in February (2022) was met with a lot of media coverage and players raving about how incredible it was."),r=I(),s=g("p"),k=v("I wasn\u2019t hyped at all about the game, mainly because I had never played a From Software (the game\u2019s developer) game before. Dark Souls was a big hit when it came out, but I was never into difficult games, and I didn\u2019t have a console to play it on (I was one of the 6 people that owned a Wii U, but not a PlayStation or Xbox). However, with all that talk surrounding Elden Ring I couldn\u2019t just ignore its existence. The game was really expensive though, and I didn\u2019t feel like spending R$300 to play something I thought I wouldn\u2019t enjoy. So, I downloaded Bloodborne (free on PS Plus), another From Software game with good reviews, which I figured would give me a taste if I liked this kind of game or not."),c=I(),p=g("p"),$=v("I did "),w=g("a"),_=v("a mini-review of Bloodborne on Twitter"),S=v(", and, if you\u2019ve read it, you know I was completely amazed by that game, and it became one of my all-time favorites. After finishing that one and immediatelly tweeting about wanting a sequel, I had no choice but to play Elden Ring next."),q=I(),N=g("h2"),ot=v("The Game"),Y=g("a"),ne=g("span"),rt=v("#"),Se=I(),R=g("p"),lt=v("A few minutes into the game and you\u2019re presented with its selling point: you open a door and you\u2019re now free to explore an entire world, full of mysteries and dangers. Right in front of you is a boss that "),x(F.$$.fragment),nt=v(" if you try to beat it, and it\u2019s an important lesson of what to expect in the game: you need to be prepared. You circle around that boss and make a note on the map to come back to it later. Then you proceed into a forest and find some soldiers that you can defeat. You\u2019re not sure why you\u2019re fighting them or why they wanna kill you, but it\u2019s fun, so you do it. Then you find an entire camp full of them, including one with a more menacing armor, a big shield and a spear. You try to face it and it kills you "),Ie=g("i"),it=v("once. Twice. Three times"),st=v(". You get really close to beating it, your hands start sweating with anticipation, and you finally do it! Metaphorical tears of joy roll down your face and you feel really good about what you just accomplished. Then you realize that was just a regular enemy, that will respawn every time you rest. "),Ee=g("b"),ht=v("There\u2019s so much more to uncover."),xe=I(),ie=g("p"),ut=v("That\u2019s the main hook of all games in the \u201CSoulsborne\u201D series, and it works really well. It uses frustration to build up an extremely satisfying reward when you win. Elden Ring did not change that, instead it mixed that feeling with an open world that gives you more ways to cool down between tough fights, or multiple ways to get stronger to prepare. It took me over 30 hours to have my character strong enough to tackle that boss right after the first door of the game. That was like 1/3 of my play time, and it was probably the best part of it. Every discovery was something brand new, and many encounters provided a fair challenge."),Ce=I(),x(te.$$.fragment),Pe=I(),se=g("p"),ft=v("However, I feel that the feeling of challenge was really uneven throughout the game. When both my character and I were not well prepared or strong enough, it felt more rewarding when I got a win. Later in the game, I was so overleveled for some bosses that I didn\u2019t get that feeling of adrenaline during a big fight, nor the big endorphine release when I defeated them. And that did not come from me grinding XP somewhere. I was just enjoying the game, exploring every nook and cranny I could find, and getting stronger as I did that."),Ae=I(),he=g("p"),dt=v("To be fair, I do think making a game like this completely balanced is nigh impossible. Not only there are dozens of different builds you can make for your character, but also every player will have a different journey, ending up with more or less Runes (the currency you use to buy levels and improve your character) than others. So, on a technical level, I truly understand the complexity of balancing this and still think they did a good job overall. It just was a bit underwhelming on my specific case."),Be=I(),V=g("h2"),mt=v("The Story"),O=g("a"),ue=g("span"),ct=v("#"),ze=I(),fe=g("p"),pt=v("Elden Ring, just like other From Software games, has almost no story. It has a huge and rich lore, though. For most of the game, you simply have no idea what\u2019s going on. It\u2019s by hearing some cryptic dialogue, reading item descriptions, and observing the world around you that you can start to put together the puzzle surrounding the game. Or, you can watch some really good YouTube videos explaining the lore behind the game, which make you finally understand why things are the way they are."),Re=I(),de=g("p"),gt=v("I like this."),De=I(),me=g("p"),yt=v("It has a bit of a more realistic approach to storytelling - your character is part of that world, and as such you\u2019d probably be acquainted to some of the more common stories and myths in there, and definitely not be aware at all of the secrets and twists of the royal family of demigods. Having to go out of your way to figure things out makes you more attached to the game in a way, and makes you care more. Old games used to do this for technical reasons, but there\u2019s definitely an appeal here. I do understand it\u2019s not very accessible though."),Me=I(),x(ae.$$.fragment),He=I(),ce=g("p"),wt=v("The lore itself is great. It\u2019s a more common fantasy setting, with dragons, wizards, gods, but it feels unique by adding a lot of nuance to it, and making it centered on a family of very unique characters that you either befriend or fight during the game. These characters are well-written and have a lot of depth, and looking into how they got to be what they are now is a really cool way to spend time when you\u2019re not playing the game."),Le=I(),pe=g("p"),vt=v("Had I not played this immediately after playing Bloodborne, I think I\u2019d have enjoyed it more. Bloodborne was just so unique and atmospherically perfect, this one didn\u2019t really get to the same level. But it\u2019s still one of the best game worlds I\u2019ve ever adventured in."),qe=I(),W=g("h2"),bt=v("The World"),X=g("a"),ge=g("span"),kt=v("#"),Ne=I(),ye=g("p"),_t=v("The Lands Between (the name of the in-game world) is a beautiful place, and all of its areas tell a bit of the story surrounding everything. You have vast green areas, a huge lake surrounded by mist, a mountain around a volcano, icy peaks, a golden city, and an area that\u2019s almost literal hell and that will kill you so many times you\u2019ll kinda start to like it. Almost everything is fully explorable from the start of the game, though you might face some \u201Cnatural barriers\u201D in the form of enemies you\u2019re still not ready to face."),Ye=I(),x(oe.$$.fragment),Fe=I(),x(Z.$$.fragment),Ve=v(` However, it's not the best part of the game.
`),we=g("p"),$t=v("In some parts of the world are places called Legacy Dungeons - they\u2019re areas that work just like the older games (like Dark Souls or Bloodborne) did: smaller, more linear areas, with great level design and that offer a more curated, if limited, experience. Those are still the best parts of the game, not its open world. I really hope they continue to be a thing in future games."),Oe=I(),U=g("h2"),It=v("The Bad"),G=g("a"),ve=g("span"),Et=v("#"),We=I(),be=g("p"),Tt=v("The sidequests, really. They\u2019re kinda bullshit. Not their content per se, but they rely so much on \u201Crandomly coming across a character on a very random part of a gigantic open world\u201D that it\u2019s nearly impossible to complete one of them without following an online guide. Quest markers would make this better and still keep the same level of immersion."),Xe=I(),Q=g("h2"),jt=v("Verdict"),J=g("a"),ke=g("span"),St=v("#"),Ze=I(),_e=g("p"),xt=v("I think the best thing I can say about this game is that after I\u2019ve beat it (which took me 92 hours), I immediately started the game over again, to play with a different character. Even after so many hours, I was still wanting more. Though not my favorite game ever, it was still one of the best."),Ue=I(),K=g("p"),Ct=v("I hereby give this game a sparkling "),x(ee.$$.fragment),Pt=v(" score!"),this.h()},l(t){C(e.$$.fragment,t),a=E(t),o=y(t,"P",{});var u=m(o);l=b(u,"Elden Ring was probably the most hyped up game of the past couple of years, and its release in February (2022) was met with a lot of media coverage and players raving about how incredible it was."),u.forEach(n),r=E(t),s=y(t,"P",{});var Te=m(s);k=b(Te,"I wasn\u2019t hyped at all about the game, mainly because I had never played a From Software (the game\u2019s developer) game before. Dark Souls was a big hit when it came out, but I was never into difficult games, and I didn\u2019t have a console to play it on (I was one of the 6 people that owned a Wii U, but not a PlayStation or Xbox). However, with all that talk surrounding Elden Ring I couldn\u2019t just ignore its existence. The game was really expensive though, and I didn\u2019t feel like spending R$300 to play something I thought I wouldn\u2019t enjoy. So, I downloaded Bloodborne (free on PS Plus), another From Software game with good reviews, which I figured would give me a taste if I liked this kind of game or not."),Te.forEach(n),c=E(t),p=y(t,"P",{});var re=m(p);$=b(re,"I did "),w=y(re,"A",{href:!0,rel:!0,target:!0});var je=m(w);_=b(je,"a mini-review of Bloodborne on Twitter"),je.forEach(n),S=b(re,", and, if you\u2019ve read it, you know I was completely amazed by that game, and it became one of my all-time favorites. After finishing that one and immediatelly tweeting about wanting a sequel, I had no choice but to play Elden Ring next."),re.forEach(n),q=E(t),N=y(t,"H2",{id:!0});var $e=m(N);ot=b($e,"The Game"),Y=y($e,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var qt=m(Y);ne=y(qt,"SPAN",{class:!0});var Nt=m(ne);rt=b(Nt,"#"),Nt.forEach(n),qt.forEach(n),$e.forEach(n),Se=E(t),R=y(t,"P",{});var le=m(R);lt=b(le,"A few minutes into the game and you\u2019re presented with its selling point: you open a door and you\u2019re now free to explore an entire world, full of mysteries and dangers. Right in front of you is a boss that "),C(F.$$.fragment,le),nt=b(le," if you try to beat it, and it\u2019s an important lesson of what to expect in the game: you need to be prepared. You circle around that boss and make a note on the map to come back to it later. Then you proceed into a forest and find some soldiers that you can defeat. You\u2019re not sure why you\u2019re fighting them or why they wanna kill you, but it\u2019s fun, so you do it. Then you find an entire camp full of them, including one with a more menacing armor, a big shield and a spear. You try to face it and it kills you "),Ie=y(le,"I",{});var Yt=m(Ie);it=b(Yt,"once. Twice. Three times"),Yt.forEach(n),st=b(le,". You get really close to beating it, your hands start sweating with anticipation, and you finally do it! Metaphorical tears of joy roll down your face and you feel really good about what you just accomplished. Then you realize that was just a regular enemy, that will respawn every time you rest. "),Ee=y(le,"B",{});var Ft=m(Ee);ht=b(Ft,"There\u2019s so much more to uncover."),Ft.forEach(n),le.forEach(n),xe=E(t),ie=y(t,"P",{});var Vt=m(ie);ut=b(Vt,"That\u2019s the main hook of all games in the \u201CSoulsborne\u201D series, and it works really well. It uses frustration to build up an extremely satisfying reward when you win. Elden Ring did not change that, instead it mixed that feeling with an open world that gives you more ways to cool down between tough fights, or multiple ways to get stronger to prepare. It took me over 30 hours to have my character strong enough to tackle that boss right after the first door of the game. That was like 1/3 of my play time, and it was probably the best part of it. Every discovery was something brand new, and many encounters provided a fair challenge."),Vt.forEach(n),Ce=E(t),C(te.$$.fragment,t),Pe=E(t),se=y(t,"P",{});var Ot=m(se);ft=b(Ot,"However, I feel that the feeling of challenge was really uneven throughout the game. When both my character and I were not well prepared or strong enough, it felt more rewarding when I got a win. Later in the game, I was so overleveled for some bosses that I didn\u2019t get that feeling of adrenaline during a big fight, nor the big endorphine release when I defeated them. And that did not come from me grinding XP somewhere. I was just enjoying the game, exploring every nook and cranny I could find, and getting stronger as I did that."),Ot.forEach(n),Ae=E(t),he=y(t,"P",{});var Wt=m(he);dt=b(Wt,"To be fair, I do think making a game like this completely balanced is nigh impossible. Not only there are dozens of different builds you can make for your character, but also every player will have a different journey, ending up with more or less Runes (the currency you use to buy levels and improve your character) than others. So, on a technical level, I truly understand the complexity of balancing this and still think they did a good job overall. It just was a bit underwhelming on my specific case."),Wt.forEach(n),Be=E(t),V=y(t,"H2",{id:!0});var At=m(V);mt=b(At,"The Story"),O=y(At,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Xt=m(O);ue=y(Xt,"SPAN",{class:!0});var Zt=m(ue);ct=b(Zt,"#"),Zt.forEach(n),Xt.forEach(n),At.forEach(n),ze=E(t),fe=y(t,"P",{});var Ut=m(fe);pt=b(Ut,"Elden Ring, just like other From Software games, has almost no story. It has a huge and rich lore, though. For most of the game, you simply have no idea what\u2019s going on. It\u2019s by hearing some cryptic dialogue, reading item descriptions, and observing the world around you that you can start to put together the puzzle surrounding the game. Or, you can watch some really good YouTube videos explaining the lore behind the game, which make you finally understand why things are the way they are."),Ut.forEach(n),Re=E(t),de=y(t,"P",{});var Gt=m(de);gt=b(Gt,"I like this."),Gt.forEach(n),De=E(t),me=y(t,"P",{});var Qt=m(me);yt=b(Qt,"It has a bit of a more realistic approach to storytelling - your character is part of that world, and as such you\u2019d probably be acquainted to some of the more common stories and myths in there, and definitely not be aware at all of the secrets and twists of the royal family of demigods. Having to go out of your way to figure things out makes you more attached to the game in a way, and makes you care more. Old games used to do this for technical reasons, but there\u2019s definitely an appeal here. I do understand it\u2019s not very accessible though."),Qt.forEach(n),Me=E(t),C(ae.$$.fragment,t),He=E(t),ce=y(t,"P",{});var Jt=m(ce);wt=b(Jt,"The lore itself is great. It\u2019s a more common fantasy setting, with dragons, wizards, gods, but it feels unique by adding a lot of nuance to it, and making it centered on a family of very unique characters that you either befriend or fight during the game. These characters are well-written and have a lot of depth, and looking into how they got to be what they are now is a really cool way to spend time when you\u2019re not playing the game."),Jt.forEach(n),Le=E(t),pe=y(t,"P",{});var Kt=m(pe);vt=b(Kt,"Had I not played this immediately after playing Bloodborne, I think I\u2019d have enjoyed it more. Bloodborne was just so unique and atmospherically perfect, this one didn\u2019t really get to the same level. But it\u2019s still one of the best game worlds I\u2019ve ever adventured in."),Kt.forEach(n),qe=E(t),W=y(t,"H2",{id:!0});var Bt=m(W);bt=b(Bt,"The World"),X=y(Bt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ea=m(X);ge=y(ea,"SPAN",{class:!0});var ta=m(ge);kt=b(ta,"#"),ta.forEach(n),ea.forEach(n),Bt.forEach(n),Ne=E(t),ye=y(t,"P",{});var aa=m(ye);_t=b(aa,"The Lands Between (the name of the in-game world) is a beautiful place, and all of its areas tell a bit of the story surrounding everything. You have vast green areas, a huge lake surrounded by mist, a mountain around a volcano, icy peaks, a golden city, and an area that\u2019s almost literal hell and that will kill you so many times you\u2019ll kinda start to like it. Almost everything is fully explorable from the start of the game, though you might face some \u201Cnatural barriers\u201D in the form of enemies you\u2019re still not ready to face."),aa.forEach(n),Ye=E(t),C(oe.$$.fragment,t),Fe=E(t),C(Z.$$.fragment,t),Ve=b(t,` However, it's not the best part of the game.
`),we=y(t,"P",{});var oa=m(we);$t=b(oa,"In some parts of the world are places called Legacy Dungeons - they\u2019re areas that work just like the older games (like Dark Souls or Bloodborne) did: smaller, more linear areas, with great level design and that offer a more curated, if limited, experience. Those are still the best parts of the game, not its open world. I really hope they continue to be a thing in future games."),oa.forEach(n),Oe=E(t),U=y(t,"H2",{id:!0});var zt=m(U);It=b(zt,"The Bad"),G=y(zt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ra=m(G);ve=y(ra,"SPAN",{class:!0});var la=m(ve);Et=b(la,"#"),la.forEach(n),ra.forEach(n),zt.forEach(n),We=E(t),be=y(t,"P",{});var na=m(be);Tt=b(na,"The sidequests, really. They\u2019re kinda bullshit. Not their content per se, but they rely so much on \u201Crandomly coming across a character on a very random part of a gigantic open world\u201D that it\u2019s nearly impossible to complete one of them without following an online guide. Quest markers would make this better and still keep the same level of immersion."),na.forEach(n),Xe=E(t),Q=y(t,"H2",{id:!0});var Rt=m(Q);jt=b(Rt,"Verdict"),J=y(Rt,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var ia=m(J);ke=y(ia,"SPAN",{class:!0});var sa=m(ke);St=b(sa,"#"),sa.forEach(n),ia.forEach(n),Rt.forEach(n),Ze=E(t),_e=y(t,"P",{});var ha=m(_e);xt=b(ha,"I think the best thing I can say about this game is that after I\u2019ve beat it (which took me 92 hours), I immediately started the game over again, to play with a different character. Even after so many hours, I was still wanting more. Though not my favorite game ever, it was still one of the best."),ha.forEach(n),Ue=E(t),K=y(t,"P",{});var Qe=m(K);Ct=b(Qe,"I hereby give this game a sparkling "),C(ee.$$.fragment,Qe),Pt=b(Qe," score!"),Qe.forEach(n),this.h()},h(){i(w,"href","https://twitter.com/matt_fantinel/status/1524768955461689349?s=21&t=fQJwMvgZo0Xe1nf9jLDtjg"),i(w,"rel","nofollow noopener noreferrer"),i(w,"target","_blank"),i(ne,"class","heading-link"),i(Y,"aria-hidden","true"),i(Y,"tabindex","-1"),i(Y,"href","#the-game"),i(N,"id","the-game"),i(ue,"class","heading-link"),i(O,"aria-hidden","true"),i(O,"tabindex","-1"),i(O,"href","#the-story"),i(V,"id","the-story"),i(ge,"class","heading-link"),i(X,"aria-hidden","true"),i(X,"tabindex","-1"),i(X,"href","#the-world"),i(W,"id","the-world"),i(ve,"class","heading-link"),i(G,"aria-hidden","true"),i(G,"tabindex","-1"),i(G,"href","#the-bad"),i(U,"id","the-bad"),i(ke,"class","heading-link"),i(J,"aria-hidden","true"),i(J,"tabindex","-1"),i(J,"href","#verdict"),i(Q,"id","verdict")},m(t,u){P(e,t,u),f(t,a,u),f(t,o,u),d(o,l),f(t,r,u),f(t,s,u),d(s,k),f(t,c,u),f(t,p,u),d(p,$),d(p,w),d(w,_),d(p,S),f(t,q,u),f(t,N,u),d(N,ot),d(N,Y),d(Y,ne),d(ne,rt),f(t,Se,u),f(t,R,u),d(R,lt),P(F,R,null),d(R,nt),d(R,Ie),d(Ie,it),d(R,st),d(R,Ee),d(Ee,ht),f(t,xe,u),f(t,ie,u),d(ie,ut),f(t,Ce,u),P(te,t,u),f(t,Pe,u),f(t,se,u),d(se,ft),f(t,Ae,u),f(t,he,u),d(he,dt),f(t,Be,u),f(t,V,u),d(V,mt),d(V,O),d(O,ue),d(ue,ct),f(t,ze,u),f(t,fe,u),d(fe,pt),f(t,Re,u),f(t,de,u),d(de,gt),f(t,De,u),f(t,me,u),d(me,yt),f(t,Me,u),P(ae,t,u),f(t,He,u),f(t,ce,u),d(ce,wt),f(t,Le,u),f(t,pe,u),d(pe,vt),f(t,qe,u),f(t,W,u),d(W,bt),d(W,X),d(X,ge),d(ge,kt),f(t,Ne,u),f(t,ye,u),d(ye,_t),f(t,Ye,u),P(oe,t,u),f(t,Fe,u),P(Z,t,u),f(t,Ve,u),f(t,we,u),d(we,$t),f(t,Oe,u),f(t,U,u),d(U,It),d(U,G),d(G,ve),d(ve,Et),f(t,We,u),f(t,be,u),d(be,Tt),f(t,Xe,u),f(t,Q,u),d(Q,jt),d(Q,J),d(J,ke),d(ke,St),f(t,Ze,u),f(t,_e,u),d(_e,xt),f(t,Ue,u),f(t,K,u),d(K,Ct),P(ee,K,null),d(K,Pt),Ge=!0},p(t,u){const Te={};u&2&&(Te.$$scope={dirty:u,ctx:t}),e.$set(Te);const re={};u&2&&(re.$$scope={dirty:u,ctx:t}),F.$set(re);const je={};u&2&&(je.$$scope={dirty:u,ctx:t}),Z.$set(je);const $e={};u&2&&($e.$$scope={dirty:u,ctx:t}),ee.$set($e)},i(t){Ge||(T(e.$$.fragment,t),T(F.$$.fragment,t),T(te.$$.fragment,t),T(ae.$$.fragment,t),T(oe.$$.fragment,t),T(Z.$$.fragment,t),T(ee.$$.fragment,t),Ge=!0)},o(t){j(e.$$.fragment,t),j(F.$$.fragment,t),j(te.$$.fragment,t),j(ae.$$.fragment,t),j(oe.$$.fragment,t),j(Z.$$.fragment,t),j(ee.$$.fragment,t),Ge=!1},d(t){A(e,t),t&&n(a),t&&n(o),t&&n(r),t&&n(s),t&&n(c),t&&n(p),t&&n(q),t&&n(N),t&&n(Se),t&&n(R),A(F),t&&n(xe),t&&n(ie),t&&n(Ce),A(te,t),t&&n(Pe),t&&n(se),t&&n(Ae),t&&n(he),t&&n(Be),t&&n(V),t&&n(ze),t&&n(fe),t&&n(Re),t&&n(de),t&&n(De),t&&n(me),t&&n(Me),A(ae,t),t&&n(He),t&&n(ce),t&&n(Le),t&&n(pe),t&&n(qe),t&&n(W),t&&n(Ne),t&&n(ye),t&&n(Ye),A(oe,t),t&&n(Fe),A(Z,t),t&&n(Ve),t&&n(we),t&&n(Oe),t&&n(U),t&&n(We),t&&n(be),t&&n(Xe),t&&n(Q),t&&n(Ze),t&&n(_e),t&&n(Ue),t&&n(K),A(ee)}}}function eo(h){let e,a;const o=[h[0],ya];let l={$$slots:{default:[Ka]},$$scope:{ctx:h}};for(let r=0;r<o.length;r+=1)l=Mt(l,o[r]);return e=new $a({props:l}),{c(){x(e.$$.fragment)},l(r){C(e.$$.fragment,r)},m(r,s){P(e,r,s),a=!0},p(r,[s]){const k=s&1?_a(o,[s&1&&fa(r[0]),s&0&&fa(ya)]):{};s&2&&(k.$$scope={dirty:s,ctx:r}),e.$set(k)},i(r){a||(T(e.$$.fragment,r),a=!0)},o(r){j(e.$$.fragment,r),a=!1},d(r){A(e,r)}}}const ya={layout:"article",title:"Elden Ring Review",excerpt:"My thoughts on what probably is the biggest game release of 2022.",image:{path:"reviews/elden-ring",filename:"cover"}};function to(h,e,a){return h.$$set=o=>{a(0,e=Mt(Mt({},e),da(o)))},e=da(e),[e]}class lo extends M{constructor(e){super(),H(this,e,to,eo,L,{})}}export{lo as default,ya as metadata};
