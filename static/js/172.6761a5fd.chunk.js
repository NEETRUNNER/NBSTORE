"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[172],{9328:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(6058),n=s(8696),r=s(579);const o=e=>{let{title:t}=e;(0,n.zh)({from:{transform:"translateY(-100%)",opacity:0},to:{transform:"translateY(0)",opacity:1},config:{tension:200,friction:20}}),(0,n.zh)({from:{transform:"scale(0.8) translateY(-20px)",opacity:0},to:{transform:"scale(1) translateY(0)",opacity:1},config:{tension:220,friction:18}});const s=(0,n.zh)({from:{opacity:0,filter:"blur(10px)"},to:{opacity:1,filter:"blur(0px)"},config:{duration:300}});(0,n.zh)({from:{transform:"translateX(-100%) rotate(-10deg)",opacity:0},to:{transform:"translateX(0) rotate(0deg)",opacity:1},config:{tension:250,friction:20}});return(0,r.jsx)("div",{className:"modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,r.jsxs)(n.CS.div,{style:s,children:[" ",(0,r.jsxs)("div",{className:"modal-wrap md:min-w-96 xs:max-w-72 md:max-w-max bg-white shadow-lg p-6 text-center",children:[(0,r.jsx)("div",{className:"flex justify-end items-center border-gray-200"}),(0,r.jsx)(a.qK0,{className:"text-center mx-auto text-5xl"}),(0,r.jsx)("h1",{className:"modal-accept xs:text-md md:text-xl mt-4 uppercase font-light",children:t})]})]})})}},8702:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(5043),n=s(3216),r=s(5475),o=s(1058),l=s(948),c=s.n(l),i=s(579);const d=e=>{let{className:t}=e;const[s,l]=(0,a.useState)([]),d=(0,n.zy)().pathname.split("/").filter((e=>e));console.log(d);const m=new o.A;(0,a.useEffect)((()=>{x()}),[]);const x=async()=>{try{const e=(await m.getApi()).map((e=>({...e,slug:c()(e.title,{lower:!0,locale:"ru"})})));l(e)}catch(e){console.log(e)}};return(0,i.jsx)("nav",{className:`${t} my-6`,"aria-label":"Breadcrumb",children:(0,i.jsxs)("ol",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-600",children:[(0,i.jsx)("li",{children:(0,i.jsxs)(r.N_,{to:"/",className:"block transition hover:text-gray-700",children:[(0,i.jsx)("span",{className:"sr-only",children:"Home"}),(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 md:w-6 md:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})]})}),d.map(((e,t)=>{const n=`/${d.slice(0,t+1).join("/")}`,o=s.find((t=>t.slug===e));return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4 md:w-5 md:h-5 text-gray-500",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 20.247l6-16.5"})}),(0,i.jsx)("li",{children:(0,i.jsx)(r.N_,{to:n,className:"block transition hover:text-gray-700 text-base md:text-sm font-medium whitespace-nowrap truncate max-w-[100px] md:max-w-none",children:o?o.title:e})})]},n)}))]})})}},2172:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(1058),n=s(3216),r=s(8702),o=s(184),l=s(9930),c=s(9328),i=s(5043);const d={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const x=new Uint8Array(16);function u(){if(!m){if("undefined"===typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");m=crypto.getRandomValues.bind(crypto)}return m(x)}const p=[];for(let b=0;b<256;++b)p.push((b+256).toString(16).slice(1));function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}const h=function(e,t,s){if(d.randomUUID&&!t&&!e)return d.randomUUID();const a=(e=e||{}).random||(e.rng||u)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){s=s||0;for(let e=0;e<16;++e)t[s+e]=a[e];return t}return f(a)};var g=s(948),y=s.n(g),w=s(579);const j=()=>{const{setBasketData:e,setSelectSize:t,selectSize:d,openModal:m,setOpenModal:x}=(0,l.G)(),u=(0,n.zy)();console.log(u);const[p,f]=(0,i.useState)([]),[g,j]=(0,i.useState)(),[b,v]=(0,i.useState)(!1),{itemDetailTitle:N}=(0,n.g)();console.log(N);const k=new a.A;(0,i.useEffect)((()=>{z()}),[]);const z=async()=>{try{const e=await k.getApi();f(e)}catch(e){throw new e}};(0,i.useEffect)((()=>{p.length>0&&U()}),[u.pathname,p]);const U=()=>{const e=p.find((e=>y()(e.title,{lower:!0,locale:"ru"})===N));console.log(e),e&&j(e)};return(0,w.jsxs)("section",{className:"card-item h-full md:py-8 xs:py-0 bg-gray-50",children:[(0,w.jsx)("div",{className:"card-container my-11 md:w-full w-3/4 mx-auto flex justify-center md:flex-nowrap xs:flex-wrap xs:w-11/12",children:g&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("img",{src:s(7958)(`./${g.image}`),alt:g.name,className:"card-img xs:w-full object-cover md:mr-6 md:w-max"}),(0,w.jsxs)("div",{className:"card-wrap  p-6 md:w-1/3 xs:w-full flex flex-col text-left h-full xs:mt-4 md:mt-0",children:[(0,w.jsx)(r.A,{}),(0,w.jsx)("h1",{className:"card-title mt-4 text-2xl text-gray-800\tfont-light mb-3 lg:text-3xl md:text-2xl xs:text-xl",children:g.title}),(0,w.jsxs)("div",{className:"card-price font-light text-lg text-gray-600 mb-4",children:[(0,w.jsx)("span",{className:"text-gray-500 font-medium",children:"\u0426\u0456\u043d\u0430: "}),g.price," \u20b4"]}),"bags"===g.category?null:(0,w.jsxs)("div",{className:"card-size font-light\ttext-gray-600 mb-5",children:[(0,w.jsx)("label",{htmlFor:"size",className:"mr-2",children:"\u0420\u043e\u0437\u043c\u0456\u0440:"}),(0,w.jsxs)("select",{onChange:e=>(e=>{const s=e.target.value;t(s.toUpperCase())})(e),id:"size",className:"border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-gray-500",children:[(0,w.jsx)("option",{value:"s",children:"S"}),(0,w.jsx)("option",{value:"m",children:"M"}),(0,w.jsx)("option",{value:"l",children:"L"}),(0,w.jsx)("option",{value:"xl",children:"XL"}),(0,w.jsx)("option",{value:"2xl",children:"2XL"})]})]}),(0,w.jsxs)("div",{className:"card-descr font-light text-gray-600 text-base leading-relaxed mb-4",children:[(0,w.jsx)("span",{className:"text-gray-500 font-medium",children:"\u041e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443: "}),g.descr]}),(0,w.jsxs)("button",{disabled:b,onClick:()=>{const t=h();"bags"===g.category?e((e=>[...e,{...g,size:"",id:t}])):e((e=>[...e,{...g,size:d,id:t}])),v(!0),x(!0),setTimeout((()=>{v(!1),x(!1)}),1500),console.log("\u0422\u043e\u0432\u0430\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.log(d)},type:"button",className:"mt-4 font-mono w-max\t bg-gray-800 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-base px-4 py-2 transition-colors duration-200 flex justify-center items-center",children:[(0,w.jsx)(o.AsH,{className:"mr-2"}),b?"\u0417\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435...":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432 \u043a\u043e\u0448\u0438\u043a"]})]})]})}),m?(0,w.jsx)(c.A,{title:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0443"}):null]})}}}]);
//# sourceMappingURL=172.6761a5fd.chunk.js.map