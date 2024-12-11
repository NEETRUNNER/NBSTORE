"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[172],{9328:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(6058),r=s(8696),n=s(579);const o=e=>{let{title:t}=e;(0,r.zh)({from:{transform:"translateY(-100%)",opacity:0},to:{transform:"translateY(0)",opacity:1},config:{tension:200,friction:20}}),(0,r.zh)({from:{transform:"scale(0.8) translateY(-20px)",opacity:0},to:{transform:"scale(1) translateY(0)",opacity:1},config:{tension:220,friction:18}});const s=(0,r.zh)({from:{opacity:0,filter:"blur(10px)"},to:{opacity:1,filter:"blur(0px)"},config:{duration:300}});(0,r.zh)({from:{transform:"translateX(-100%) rotate(-10deg)",opacity:0},to:{transform:"translateX(0) rotate(0deg)",opacity:1},config:{tension:250,friction:20}});return(0,n.jsx)("div",{className:"modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,n.jsxs)(r.CS.div,{style:s,children:[" ",(0,n.jsxs)("div",{className:"modal-wrap md:min-w-96 xs:max-w-72 md:max-w-max bg-white shadow-lg p-6 text-center",children:[(0,n.jsx)("div",{className:"flex justify-end items-center border-gray-200"}),(0,n.jsx)(a.qK0,{className:"text-center mx-auto text-5xl"}),(0,n.jsx)("h1",{className:"modal-accept xs:text-md md:text-xl mt-4 uppercase font-light",children:t})]})]})})}},8702:(e,t,s)=>{s.d(t,{A:()=>d});var a=s(5043),r=s(3216),n=s(5475),o=s(948),l=s.n(o),c=s(2471),i=s(579);const d=e=>{let{className:t}=e;const[s,o]=(0,a.useState)([]),{productData:d}=(0,c.G)(),m=(0,r.zy)().pathname.split("/").filter((e=>e));return console.log(m),(0,a.useEffect)((()=>{const e=d.map((e=>({...e,slug:l()(e.title,{lower:!0,locale:"ru"})})));o(e)}),[]),(0,i.jsx)("nav",{className:`${t} my-6`,"aria-label":"Breadcrumb",children:(0,i.jsxs)("ol",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-600",children:[(0,i.jsx)("li",{children:(0,i.jsxs)(n.N_,{to:"/",className:"block transition hover:text-gray-700",children:[(0,i.jsx)("span",{className:"sr-only",children:"Home"}),(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 md:w-6 md:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})]})}),m.map(((e,t)=>{const r=`/${m.slice(0,t+1).join("/")}`,o=s.find((t=>t.slug===e));return(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4 md:w-5 md:h-5 text-gray-500",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 20.247l6-16.5"})}),(0,i.jsx)("li",{children:(0,i.jsx)(n.N_,{to:r,className:"block transition hover:text-gray-700 text-base md:text-sm font-medium whitespace-nowrap truncate max-w-[100px] md:max-w-none",children:o?o.title:e})})]},r)}))]})})}},2172:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(3216),r=s(8702),n=s(184),o=s(2471),l=s(9328),c=s(5043);const i={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let d;const m=new Uint8Array(16);function x(){if(!d){if("undefined"===typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");d=crypto.getRandomValues.bind(crypto)}return d(m)}const u=[];for(let w=0;w<256;++w)u.push((w+256).toString(16).slice(1));function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase()}const f=function(e,t,s){if(i.randomUUID&&!t&&!e)return i.randomUUID();const a=(e=e||{}).random||(e.rng||x)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){s=s||0;for(let e=0;e<16;++e)t[s+e]=a[e];return t}return p(a)};var h=s(948),g=s.n(h),y=s(579);const j=()=>{const{setBasketData:e,setSelectSize:t,selectSize:i,openModal:d,setOpenModal:m,productData:x}=(0,o.G)(),u=(0,a.zy)();console.log(u);const[p,h]=(0,c.useState)([]),[j,w]=(0,c.useState)(),[b,v]=(0,c.useState)(!1),{itemDetailTitle:N}=(0,a.g)();console.log(N),(0,c.useEffect)((()=>{h(x)}),[]);(0,c.useEffect)((()=>{p.length>0&&k()}),[u.pathname,p]);const k=()=>{const e=p.find((e=>g()(e.title,{lower:!0,locale:"ru"})===N));console.log(e),e&&w(e)};return(0,y.jsxs)("section",{className:"card-item h-full md:py-8 xs:py-0 bg-gray-50",children:[(0,y.jsx)("div",{className:"card-container my-11 md:w-full w-3/4 mx-auto flex justify-center md:flex-nowrap xs:flex-wrap xs:w-11/12",children:j&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("img",{src:s(7958)(`./${j.image}`),alt:j.name,className:"card-img xs:w-full object-cover md:mr-6 md:w-max"}),(0,y.jsxs)("div",{className:"card-wrap  p-6 md:w-1/3 xs:w-full flex flex-col text-left h-full xs:mt-4 md:mt-0",children:[(0,y.jsx)(r.A,{}),(0,y.jsx)("h1",{className:"card-title mt-4 text-2xl text-gray-800\tfont-light mb-3 lg:text-4xl md:text-2xl xs:text-xl",children:j.title}),(0,y.jsxs)("div",{className:"card-price font-light text-lg text-gray-600 mb-4",children:[(0,y.jsx)("span",{className:"text-gray-500 font-medium",children:"\u0426\u0456\u043d\u0430: "}),j.price," \u20b4"]}),"bags"===j.category?null:(0,y.jsxs)("div",{className:"card-size font-light\ttext-gray-600 mb-5",children:[(0,y.jsx)("label",{htmlFor:"size",className:"mr-2",children:"\u0420\u043e\u0437\u043c\u0456\u0440:"}),(0,y.jsxs)("select",{onChange:e=>(e=>{const s=e.target.value;t(s.toUpperCase())})(e),id:"size",className:"border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-gray-500",children:[(0,y.jsx)("option",{value:"s",children:"S"}),(0,y.jsx)("option",{value:"m",children:"M"}),(0,y.jsx)("option",{value:"l",children:"L"}),(0,y.jsx)("option",{value:"xl",children:"XL"}),(0,y.jsx)("option",{value:"2xl",children:"2XL"})]})]}),(0,y.jsxs)("div",{className:"card-descr font-light text-gray-600 text-base leading-relaxed mb-4",children:[(0,y.jsx)("span",{className:"text-gray-500 font-medium",children:"\u041e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443: "}),j.descr]}),(0,y.jsxs)("button",{disabled:b,onClick:()=>{const t=f();"bags"===j.category?e((e=>[...e,{...j,size:"",id:t}])):e((e=>[...e,{...j,size:i,id:t}])),v(!0),m(!0),setTimeout((()=>{v(!1),m(!1)}),1500),console.log("\u0422\u043e\u0432\u0430\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.log(i)},type:"button",className:"mt-4 font-mono w-max\t bg-gray-800 text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-base px-4 py-2 transition-colors duration-200 flex justify-center items-center",children:[(0,y.jsx)(n.AsH,{className:"mr-2"}),b?"\u0417\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435...":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0443 \u043a\u043e\u0448\u0438\u043a"]})]})]})}),d?(0,y.jsx)(l.A,{title:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0434\u0430\u043d\u043e \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0443"}):null]})}}}]);
//# sourceMappingURL=172.09d9199b.chunk.js.map