(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(302),t.b),l=i()(r()),p=d()(s);l.push([e.id,"\n\n@font-face {\n    font-family: 'Tangerine';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }\n\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n\nbody{\n    margin:0;\n    padding:0;\n    font-family: sans-serif;\n\n}\n\n#content{\n\n    display: grid;\n    grid-template: 50px auto 50px/ auto 60% auto;\n    grid-gap:50px;\n    height: 100vh;\n    width:100vw;\n   \n\n}\n\n.header,.footer,.main-content{\n    background-color: #f4f4f5;\n    color:#09090b;\n}\n\n.header{\n    grid-area : 1/1/2/-1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n}\n\n.footer{\n    grid-area: 3/1/3/-1;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.main-content{\n    grid-area: 2/1/3/-1;\n    background-image: url("+p+");\n    background-size: cover;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    padding-left: 15%;\n    padding-bottom:100px; \n    \n}\n\n.main-child{\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n}\n\n.main-child div{\n    margin-bottom: 10px;\n}\n\n.button-top{\n    display: block;\n    height:50px;\n    width:150px;\n    font-size:medium;\n    cursor: pointer;\n    box-sizing: border-box;\n    padding: 15px;\n    border:1px solid#84cc16;\n    border-radius: 12px;\n    background-color: #84cc16;\n    color:white;\n    font-weight: bold;\n    transform: translateY(-6px);\n   \n}\n\n.button-bottom{\n    display: grid;\n    border:none;\n    justify-content: center;\n    background-color: #65a30d;\n    height:50px;\n    width:150px;\n    border-radius: 12px;\n}\n\n.button-bottom:active .button-top{\n    transform: translateY(-2px);\n}\n\n.explore{\n    margin-top:25px;\n}\n\n.main-content h1{\n    font-family: Arial, Helvetica, sans-serif;\n    color:#f97316;\n    font-size:3.3em;\n    margin-bottom: 0;\n    font-weight: 1000;\n    text-shadow: 4px 4px 4px rgb(70, 68, 68);\n    \n}\n\n.title-desc{\n    font-family: 'Tangerine';\n    font-size:4.3em;\n    font-weight:550;\n    margin-bottom:100px;\n}\n\n.tab{\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width:70px;\n}\n\n\n.header-content{\n    display: flex;\n    justify-content: space-between;\n    width: 35%;\n}\n\n.menu-container{\n    width:75%;\n    display: flex;\n    flex-wrap: wrap;\n    padding: 50px 0 50px 50px;  \n    gap:50px;\n    background-color: #f4f4f5;\n    \n    \n}\n\n.menuContent{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-area: 2/1/3/-1;\n}\n\n.menu-item{\n\n    width:370px;\n    box-shadow: 5px 5px 2px #d4d4d8;\n    background-color: #fff;\n    height:180px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding:30px;\n}\n\n.menu-item img{\n    height:100px;\n    width:150px;\n}\n\n#item-text{\n    width: 200px;\n    color:black;\n}\n\n.item-desc{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.item-headline{\n    display: flex;\n    justify-content: space-between;\n    color:#f97316;\n    font-family: 'Roboto';\n    font-size: larger;\n    font-weight: bold;\n   \n}\n\n#price{\n    color:red;\n}\n\n#headline-text{\n    width:200px;\n}\n\n.contactContent{\n    grid-area: 2/2/3/3;\n    font-size: larger;\n    background-color:#f4f4f5;\n    display: flex;\n    padding-left: 10%;\n    align-items: center;\n}\n\n.contactContent img{\n    height:30px;\n    width:30px;\n    margin-right: 10px;\n}\n\n.contactContent div div{\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},302:(e,n,t)=>{e.exports=t.p+"498f23dc2749409e34aa.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{q:()=>z});const e=()=>{const e=document.createElement("div");e.classList.add("main-content","homeContent");const n=document.createElement("div");n.classList.add("main-child");const t=document.createElement("h1");t.textContent="ODIN RESTAURANT";const o=document.createElement("div");o.textContent="serving the best!",o.classList.add("title-desc");const r=document.createElement("div");r.classList.add("explore"),r.addEventListener("click",z);const a=document.createElement("button");a.classList.add("button-bottom");const i=document.createElement("span");i.classList.add("button-top"),i.textContent="Explore food",a.append(i),r.append(a),n.append(t,o,r),e.append(n),content.appendChild(e)},n=t.p+"679d28932b9f7024f306.jpg",r=t.p+"9dde79c6817293b91628.jpg",a=t.p+"ed8461dbfac2bc7b8536.jpg",i=t.p+"f782c754daf5f5984aaa.jpg",c=t.p+"12af5fbe27263963aada.png",d=t.p+"46965bf34b22e102b445.png";var s=t(379),l=t.n(s),p=t(795),u=t.n(p),m=t(569),f=t.n(m),g=t(565),h=t.n(g),b=t(216),x=t.n(b),v=t(589),y=t.n(v),w=t(426),C={};C.styleTagTransform=y(),C.setAttributes=h(),C.insert=f().bind(null,"head"),C.domAPI=u(),C.insertStyleElement=x(),l()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;const E=document.getElementById("content"),k=document.createElement("div");k.classList.add("header");const L=document.createElement("div");L.classList.add("header-content");const U=document.createElement("div");U.classList.add("tab"),U.setAttribute("id","home"),U.textContent="Home";const F=document.createElement("div");F.classList.add("tab"),F.setAttribute("id","menu"),F.textContent="Menu";const A=document.createElement("div");A.classList.add("tab"),A.setAttribute("id","contact"),A.textContent="Contact",L.append(U,F,A),k.appendChild(L),E.appendChild(k);const j=document.createElement("div");j.classList.add("footer");const S=document.createElement("div");S.textContent="Image by ";const T=document.createElement("a");T.href="https://www.freepik.com/free-photo/cupcake-plate-surrounded-by-fruits_3356754.htm#query=food%20white%20background&position=24&from_view=search&track=ais",T.textContent="Freepik",S.appendChild(T);const M=document.createElement("a");M.href="https://www.flaticon.com/free-icons/phone",M.title="phone icons",M.textContent="Phone icons created by Freepik - Flaticon";const I=document.createElement("a");I.href="https://www.flaticon.com/free-icons/black",I.title="black icons",I.textContent="Black icons created by Freepik - Flaticon",j.append(S,M,I),E.appendChild(j),U.style.backgroundColor="#d4d4d8",E.style.gridGap="0px";let $=U;const z=()=>{E.removeChild(document.querySelector(`.${$.getAttribute("id")}Content`)),(()=>{const e=document.createElement("div");e.classList.add("menuContent");const t=document.createElement("div");t.classList.add("menu-container");const o=(e,n,o,r)=>{const a=document.createElement("div");a.classList.add("menu-item");const i=document.createElement("div");i.classList.add("item-headline");const c=document.createElement("div");c.setAttribute("id","headline-text"),c.textContent=e;const d=document.createElement("div");d.setAttribute("id","price"),d.textContent=n,i.append(c,d);const s=document.createElement("div");s.classList.add("item-desc");const l=document.createElement("div");l.setAttribute("id","item-text"),l.textContent=o;const p=document.createElement("img");p.src=r,s.append(l,p),a.append(i,s),t.append(a)};o("Omelette with broccoli, tomatoes and red onions","3$","Craving for some omelette? Here's your best option with some extras!",a),o("Raspberry cheesecake","7$","You can never have enough of these",i),o("Hamburger","4$","Legend says no one has ever regretted ordering this burger",r),o("Pizza","5$","Mario prolly won't like it if you put pinapples on these",n),e.append(t),content.appendChild(e)})(),E.style.gridGap="50px",F.style.backgroundColor="#d4d4d8",$!=F&&($.style.backgroundColor="#f4f4f5"),$=F};e(),F.addEventListener("click",z),U.addEventListener("click",(()=>{E.removeChild(document.querySelector(`.${$.getAttribute("id")}Content`)),e(),E.style.gridGap="0px",U.style.backgroundColor="#d4d4d8",$!=U&&($.style.backgroundColor="#f4f4f5"),$=U})),A.addEventListener("click",(()=>{E.removeChild(document.querySelector(`.${$.getAttribute("id")}Content`)),(()=>{const e=document.createElement("div");e.classList.add("contactContent");const n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("img");o.src=c,o.alt="phone icon";const r=document.createElement("div"),a=document.createElement("img");a.src=d,a.alt="home icon";const i=document.createElement("div"),s=document.createElement("div");i.textContent="(123) 456 789",s.textContent="420 Empty Street, California, USA",t.append(o,i),r.append(a,s),n.append(t,r),e.append(n),content.append(e)})(),E.style.gridGap="50px",A.style.backgroundColor="#d4d4d8",$!=A&&($.style.backgroundColor="#f4f4f5"),$=A}))})()})();