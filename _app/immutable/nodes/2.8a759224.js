import{s as q,n as g,f as C}from"../chunks/scheduler.63274e7e.js";import{S as L,i as S,g as m,s as E,h as _,j as x,y as W,c as I,f as b,k as a,a as k,x as y,z as R,A as Y}from"../chunks/index.7fdde5fb.js";function j(o){let t,e="Invalid URL!";return{c(){t=m("p"),t.textContent=e,this.h()},l(s){t=_(s,"P",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-go042d"&&(t.textContent=e),this.h()},h(){a(t,"class","text-lg text-secondary break-all my-2")},m(s,l){k(s,t,l)},p:g,d(s){s&&b(t)}}}function A(o){let t,e;return{c(){t=m("iframe"),this.h()},l(s){t=_(s,"IFRAME",{width:!0,height:!0,id:!0,class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),x(t).forEach(b),this.h()},h(){a(t,"width","949"),a(t,"height","534"),a(t,"id","embed"),a(t,"class","embed"),C(t.src,e=o[2])||a(t,"src",e),a(t,"title","Youtube Embed"),a(t,"frameborder","0"),a(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),t.allowFullscreen=!0},m(s,l){k(s,t,l)},p(s,l){l&4&&!C(t.src,e=s[2])&&a(t,"src",e)},d(s){s&&b(t)}}}function P(o){let t,e,s,l="Youtube Embed Generator",c,i,f,u,w;function v(n,p){if(n[1])return A;if(n[0].length>0)return j}let h=v(o),r=h&&h(o);return{c(){t=m("main"),e=m("div"),s=m("h2"),s.textContent=l,c=E(),i=m("input"),f=E(),r&&r.c(),this.h()},l(n){t=_(n,"MAIN",{class:!0});var p=x(t);e=_(p,"DIV",{class:!0});var d=x(e);s=_(d,"H2",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-541p0r"&&(s.textContent=l),c=I(d),i=_(d,"INPUT",{type:!0,placeholder:!0,class:!0}),f=I(d),r&&r.l(d),d.forEach(b),p.forEach(b),this.h()},h(){a(s,"class","text-4xl my-2"),a(i,"type","text"),a(i,"placeholder","Youtube URL"),a(i,"class","input w-full my-2"),a(e,"class","flex flex-col justify-center w-4/5 p-8"),a(t,"class","w-full text-center flex justify-center")},m(n,p){k(n,t,p),y(t,e),y(e,s),y(e,c),y(e,i),R(i,o[0]),y(e,f),r&&r.m(e,null),u||(w=Y(i,"input",o[3]),u=!0)},p(n,[p]){p&1&&i.value!==n[0]&&R(i,n[0]),h===(h=v(n))&&r?r.p(n,p):(r&&r.d(1),r=h&&h(n),r&&(r.c(),r.m(e,null)))},i:g,o:g,d(n){n&&b(t),r&&r.d(),u=!1,w()}}}function U(o,t){const e=o.split("?");if(e.length>1){const l=e[1].split("&");for(const c of l){const[i,f]=c.split("=");if(i===t)return f}}}function F(o,t,e){let s,l="",c=!1;function i(u){if(u.startsWith("https://www.youtube.com/watch?v=")||u.startsWith("https://youtube.com/watch?v="))return e(1,c=!0),U(u,"v");if(u.startsWith("https://www.youtu.be/")||u.startsWith("https://youtu.be/"))return u.split("/").reverse()[0].split("?")[0];if(u.startsWith("https://www.google.com/url?")||u.startsWith("https://google.com/url?")){const w=U(u,"url"),v=decodeURIComponent(w);return i(v)}else{e(1,c=!1);return}}function f(){l=this.value,e(0,l)}return o.$$.update=()=>{o.$$.dirty&1&&e(2,s="https://youtube.com/embed/"+i(l))},[l,c,s,f]}class z extends L{constructor(t){super(),S(this,t,F,P,q,{})}}export{z as component};
