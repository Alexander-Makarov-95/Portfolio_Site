(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{848:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1269)}])},7502:function(e,t,r){"use strict";var i=r(1527),n=r(1986),a=r(894);t.Z=e=>{let{children:t,delay:r}=e;return(0,i.jsx)(a.xu,{as:n.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",delay:r,duration:.4},children:t})}},7113:function(e,t,r){"use strict";var i=r(1527),n=r(9731),a=r(894);let WidgetHeader=e=>{let{children:t}=e;return(0,i.jsx)(c,{color:"cyan14",size:"max",height:20,children:(0,i.jsx)(s,{children:t})})},s=(0,n.zo)("div",{position:"relative"}),c=(0,n.zo)(a.xT,{transition:"background 150ms ease-out",$$iconOpacity:0,"&:hover":{$$iconOpacity:1},"&:active":{$$iconOpacity:1,background:"$cyan10"}});WidgetHeader.Right=e=>{let{children:t}=e;return(0,i.jsx)(a.xu,{css:{position:"absolute",right:0},children:t})},WidgetHeader.Left=e=>{let{children:t}=e;return(0,i.jsxs)(a.xu,{css:{position:"absolute",left:0,display:"flex",gap:"6px"},children:[(0,i.jsx)(a.xu,{children:t}),(0,i.jsx)(a.xu,{css:{display:"flex",alignItems:"center",opacity:"$$iconOpacity",transition:"opacity 100ms ease-out"}})]})},t.Z=WidgetHeader},1269:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Home}});var i=r(1527),n=r(852),a=r.n(n),s=r(894),c=r(1450),o=r(5971),d=r(1986),l=r(959),x=r(9731);let u=(0,x.zo)("div",{position:"relative"}),h=(0,x.zo)(d.E.div,{position:"absolute",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid rgba(216, 60, 60, 0.5)",transition:"200ms",variants:{color:{cyan9:{border:"3px dotted $cyan9"},cyanCustom:{border:"3px dotted rgba(153, 250, 255, .9)"}}}}),p=(0,x.zo)("div",{position:"relative",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid rgba(216, 60, 60, 0.5)",transition:"200ms",variants:{color:{cyan9:{border:"3px dotted $cyan9"},cyanCustom:{border:"3px dotted rgba(153, 250, 255, .9)"}}}}),g=(0,x.zo)("div",{background:"rgba(216, 60, 60, 0.8)",width:"8px",height:"8px",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"});var live_data_circle=()=>{let e=(0,o._)();(0,l.useEffect)(()=>{let e=setInterval(animationSequence,3300);return()=>{clearInterval(e)}},[]);let animationSequence=async()=>{e.set({scale:1,opacity:1}),await e.start({scale:3,opacity:0}),await e.start({scale:1,opacity:0})};return(0,i.jsxs)(u,{children:[(0,i.jsx)(h,{animate:e,transition:{duration:2,ease:"easeOut"}}),(0,i.jsx)(p,{children:(0,i.jsx)(g,{})})]})},j=r(5726),v=r.n(j),use_chart_data=e=>{let{dataLength:t}=e,[r,i]=(0,l.useState)(),n=(0,l.useRef)(v()()),a=(0,l.useRef)(200*Math.random()),randomDataItem=()=>(n.current=n.current.add(1,"second"),a.current=a.current+21*Math.random()-10,{name:n.current.toString(),value:[n.current.toISOString(),Math.round(a.current)]});return(0,l.useEffect)(()=>{n.current=n.current.subtract(t,"seconds");let e=[...Array(t)].map(()=>randomDataItem());i(e);let r=setInterval(()=>{let e=randomDataItem();(0,l.startTransition)(()=>{i(t=>{if(t){let[,...r]=t;return[...r,e]}return[e]})})},1e3);return()=>{clearInterval(r)}},[]),{chartData:r}};let b=(0,x.zo)("div",{"@media (max-width: 510px)":{textShadow:"\n    1px 1px 1px rgba(0, 0, 0, 0.5),\n    -1px -1px 1px rgba(0, 0, 0, 0.5),\n    1px -1px 1px rgba(0, 0, 0, 0.5),\n    -1px 1px 1px rgba(0, 0, 0, 0.5),\n    2px 1px 1px rgba(0, 0, 0, 0.5)\n  "}}),f=(0,x.zo)("div",{position:"relative",background:"$cyan14",height:"75vh","@media (max-width: 510px)":{height:"50vh"}});var m=(0,l.forwardRef)((e,t)=>{let{chartData:r}=use_chart_data({dataLength:100});return(0,i.jsx)(f,{children:(0,i.jsxs)(s.cX,{children:[(0,i.jsx)(b,{children:(0,i.jsx)(s.F9,{children:(0,i.jsxs)(s.XN,{children:[(0,i.jsx)(s.T,{size:5,padding:"tiny",children:"ID: EVENT HORIZON PATHFINDER "}),(0,i.jsx)(s.T,{size:5,padding:"tiny",children:"DATA SET: ECHO VAULT DOSSIER "})]})})}),(0,i.jsxs)(s.F9,{align:"bottom",children:[(0,i.jsx)(s.XN,{children:(0,i.jsxs)(s.T,{background:"cyan1",size:5,color:"gray1",padding:"tiny",children:["CURRENT STREAM: ",null==r?void 0:r.slice(-1)[0].value.join(": ")]})}),(0,i.jsx)(b,{children:(0,i.jsx)(s.XN,{align:"right",children:(0,i.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"KERNEL: ADVANCED PROTOTYPE T-1000"})})})]})]})})}),y=r(7113);let w=(0,x.zo)("div",{display:"flex",flexDirection:"row",gap:"6px",alignItems:"center"}),R=(0,x.zo)("div",{"@media (max-width: 510px)":{textShadow:"\n      0.5px 0.5px 0.1px rgba(0, 0, 0, 0.5),\n      -0.1px -0.1px 0.1px rgba(0, 0, 0, 0.5),\n      1px -0.5px 0.1px rgba(0, 0, 0, 0.5),\n      -1px 1px 0.1px rgba(0, 0, 0, 0.5),\n      0.5px 1px 0.1px rgba(0, 0, 0, 0.5)\n    "}});var T=(0,l.forwardRef)((e,t)=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.wv,{children:[(0,i.jsx)(R,{children:(0,i.jsxs)(y.Z,{children:[(0,i.jsxs)(y.Z.Left,{children:[(0,i.jsx)(s.T,{color:"cyan1",weight:2,children:"SINGULARTIY "}),(0,i.jsx)(s.T,{color:"cyan1",weight:1,children:"MONITOR"})]}),(0,i.jsx)(y.Z.Right,{children:(0,i.jsxs)(w,{children:[(0,i.jsx)(s.T,{size:"5",color:"gray8",weight:3,children:"LIVE FEED"}),(0,i.jsx)(live_data_circle,{})]})})]})}),(0,i.jsx)(s.xu,{css:{h:10}}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(m,{ref:t}),(0,i.jsx)(c.Z,{})]})})),E=r(7502),_=r(9268),z=r(6292),I=r.n(z),use_element_width=e=>{let{debounceMs:t}=e,[r,i]=(0,l.useState)(0),n=(0,l.useRef)(null),a=(0,l.useCallback)(I()(e=>i(e),t),[t]);return(0,l.useEffect)(()=>{let e;e=new ResizeObserver(t?e=>{a(e[0].contentRect.width)}:e=>{i(e[0].contentRect.width)}),n.current&&e.observe(n.current);let r=n.current;return()=>{r&&e.unobserve(r)}},[t,a]),{width:r,ref:n}};function Home(){let e=(0,l.useRef)(null),{width:t,ref:r}=use_element_width({debounceMs:100});return(0,l.useEffect)(()=>{var t;null===(t=e.current)||void 0===t||t.resize()},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Alexander Makarov | Software Developer"}),(0,i.jsx)("meta",{name:"description",content:"Private website built with React, TypeScript & Next.js. For inquiries please go to the contact section."}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(E.Z,{children:(0,i.jsx)(s.xT,{color:"cyan1",height:20,children:(0,i.jsx)(s.T,{color:"gray1",weight:"2",children:"MAKAROV'S QUANTUM"})})}),(0,i.jsx)(s.xu,{css:{h:20}}),(0,i.jsx)(s.xu,{children:(0,i.jsx)(E.Z,{delay:.3,children:(0,i.jsx)(s.xu,{children:(0,i.jsx)(T,{})})})},"2")]})}(0,_.WidthProvider)(_.Responsive)}},function(e){e.O(0,[381,774,888,179],function(){return e(e.s=848)}),_N_E=e.O()}]);