(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9931:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(6096)}])},7502:function(e,i,t){"use strict";var n=t(1527),r=t(1986),s=t(894);i.Z=e=>{let{children:i,delay:t}=e;return(0,n.jsx)(s.xu,{as:r.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",delay:t,duration:.4},children:i})}},7113:function(e,i,t){"use strict";var n=t(1527),r=t(9731),s=t(894);let WidgetHeader=e=>{let{children:i}=e;return(0,n.jsx)(o,{color:"cyan14",size:"max",height:20,children:(0,n.jsx)(a,{children:i})})},a=(0,r.zo)("div",{position:"relative"}),o=(0,r.zo)(s.xT,{transition:"background 150ms ease-out",$$iconOpacity:0,"&:hover":{$$iconOpacity:1},"&:active":{$$iconOpacity:1,background:"$cyan10"}});WidgetHeader.Right=e=>{let{children:i}=e;return(0,n.jsx)(s.xu,{css:{position:"absolute",right:0},children:i})},WidgetHeader.Left=e=>{let{children:i}=e;return(0,n.jsxs)(s.xu,{css:{position:"absolute",left:0,display:"flex",gap:"6px"},children:[(0,n.jsx)(s.xu,{children:i}),(0,n.jsx)(s.xu,{css:{display:"flex",alignItems:"center",opacity:"$$iconOpacity",transition:"opacity 100ms ease-out"}})]})},i.Z=WidgetHeader},8923:function(e,i,t){"use strict";var n=t(1102),r=t.n(n),s=t(959);let parseNumber=(e,i)=>Number(e.toFixed(null!=i?i:2)),randomNumberRange=(e,i)=>{let t=.5>Math.random();if(void 0===i)return parseNumber(r()(e.minValue,e.maxValue,!0),e.digits);let n=e.multiplyAdd?Math.random()*e.multiplyAdd:Math.random();return i+n>=e.maxValue?parseNumber(i-n,e.digits):i-n<=e.minValue?parseNumber(i+n,e.digits):(i+n>e.maxValue&&(t=!1),i-n<e.minValue&&(t=!0),t)?parseNumber(i+n,e.digits):parseNumber(i-n,e.digits)};i.Z=e=>{let[i,t]=(0,s.useState)();return(0,s.useEffect)(()=>{let i=randomNumberRange(e);(0,s.startTransition)(()=>{t(i)});let n=setInterval(()=>{(0,s.startTransition)(()=>{t(i=>randomNumberRange(e,i))})},e.updateInterval);return()=>{clearInterval(n)}},[]),i}},6096:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return Home}});var n=t(1527),r=t(7502),s=t(894),a=t(1450),o=t(9731),l=t(959),c=t(8397),d=t.n(c),u=t(4275),x=t(1986),h=t(5726),p=t.n(h),g=t(3171),use_is_mounted=()=>{let[e,i]=(0,l.useState)(!1);return(0,l.useEffect)(()=>(i(!0),()=>{i(!1)}),[]),e},m=t(8923);let imageLoader=e=>{let{src:i,width:t,quality:n}=e;return"https://sws.imgix.net".concat(i,"?w=").concat(t,"&q=").concat(null!=n?n:75),"".concat(i)},y=(0,o.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",background:"$cyan14",border:"0.1px solid rgba(0, 255, 255, 0.025)"}),j=(0,o.zo)("div",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"360px",height:"300px"}),f=(0,o.zo)(x.E.div,{position:"absolute",width:"260px",height:"260px",borderRadius:"50%",border:"3px dotted $cyan2",transition:"200ms",variants:{color:{cyan1:{border:"3px dotted $cyan1"},cyan9:{border:"3px dotted $cyan9"}}}});var model_render=()=>{let{resolvedTheme:e}=(0,g.F)(),[i,t]=(0,l.useState)(),[r,a]=(0,l.useState)(!1),o=(0,m.Z)({minValue:28,maxValue:37,updateInterval:1e3,digits:8}),c=use_is_mounted();(0,l.useEffect)(()=>{t(p()())},[]);let[h,b]=(0,l.useState)(!1);return(0,n.jsxs)(y,{children:[(0,n.jsxs)(s.cX,{children:[(0,n.jsxs)(s.F9,{children:[(0,n.jsxs)(s.XN,{children:[(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"ALIAS: MAKAROV"}),(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"DOB: 04/12/1995 "}),(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"STATUS: JOB-HUNTING "}),(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"LOCATION: SYDNEY, AUSTRALIA "}),(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"UNIT GROUP: BLACKBOOK.AI "})]}),(0,n.jsxs)(s.XN,{align:"right",children:[(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:null==i?void 0:i.toISOString()}),(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"[UP TO DATE]"})]})]}),(0,n.jsxs)(s.F9,{align:"bottom",children:[(0,n.jsx)(s.XN,{children:(0,n.jsxs)(s.T,{background:"cyan1",size:5,color:"gray1",padding:"tiny",children:["FPS: ",o]})}),(0,n.jsxs)(s.XN,{align:"right",children:[(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"FRAMER-MOTION"}),(0,n.jsx)(s.T,{size:5,color:"gray8",padding:"tiny",children:"8.5.3-ALPHA.1 "})]})]})]}),(0,n.jsxs)(j,{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,n.jsx)(u.M,{children:(0,n.jsx)(f,{as:x.E.div,initial:{opacity:0},animate:h?{scale:r?[1,1,1]:[1.02,1.05,1.02],opacity:1}:{opacity:1},onAnimationComplete:()=>b(!0),transition:h?{repeat:1/0,duration:4}:{type:"spring",stiffness:100,damping:10,delay:1.8},color:r?"cyan1":void 0})}),(0,n.jsx)(s.xu,{as:x.E.div,animate:{rotate:[0,0,0]},transition:{repeat:1/0,duration:8},children:(0,n.jsx)(u.M,{children:c&&(0,n.jsx)(x.E.div,{initial:{scale:0},animate:{scale:1},transition:{duration:3,ease:"easeOut"},exit:{scale:0},children:(0,n.jsx)(d(),{loader:imageLoader,src:"/quark.gif",alt:"Sample analysis",width:250,height:250,draggable:!1,style:{userSelect:"none"}})},"quark_gif")})})]})]})},b=t(7113),model_render_container=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.wv,{children:[(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(b.Z.Right,{children:(0,n.jsx)(s.T,{color:"cyan1",weight:2,children:"ID: [REDACTED]"})}),(0,n.jsxs)(b.Z.Left,{children:[(0,n.jsx)(s.T,{color:"cyan1",weight:2,children:"OPERATIVE "}),(0,n.jsx)(s.T,{color:"cyan1",weight:1,children:"BLUEPRINT "})]})]}),(0,n.jsx)(s.xu,{css:{h:10}}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(model_render,{})]}),(0,n.jsx)(a.Z,{})]});let v=(0,o.zo)("div",{"@media (max-width: 510px)":{textShadow:"0 0 4px BLACK",height:"calc(100vh - 375px)",overflowY:"scroll",paddingRight:"20px"},marginRight:"-20px"}),T=(0,o.zo)("div",{background:"$cyan14",padding:"12px",display:"flex",flexDirection:"column",border:"0.1px solid rgba(0, 255, 255, 0.025)"});var about=()=>(0,n.jsxs)(v,{children:[(0,n.jsx)(s.xT,{color:"cyan14",size:"max",children:(0,n.jsx)(s.xu,{css:{display:"flex",justifyContent:"space-between"}})}),(0,n.jsx)(s.xu,{css:{h:15}}),(0,n.jsx)(a.Z,{}),(0,n.jsxs)(T,{children:[(0,n.jsx)(s.xu,{css:{h:10}}),(0,n.jsxs)(s.T,{color:"gray12",size:"6",children:["I am Alexander, based in Sydney, Australia. As a software developer, I actively explore various areas of technology, mainly focusing on ",(0,n.jsx)("b",{children:"React"}),", ",(0,n.jsx)("b",{children:"Javascript"}),", and ",(0,n.jsx)("b",{children:" Three.js"}),". My professional background includes approximately three years in the ",(0,n.jsx)("b",{children:" Robotics Process Automation "})," (RPA) sector, serving as an automation engineer consultant.  ",(0,n.jsx)("b",{children:" "}),"During this time, I have contributed to organizations like Woolworths, Super Retail Group, and Vocus, developing and sustaining efficient business automation solutions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"What you are looking at right now is my personal website - a homage to my love of the mysterious wonders of the cosmos. It features a futuristic dashboard, birthed from the fictitious ",(0,n.jsx)("b",{children:"Event Horizon Pathfinder."})," It stands as a vigilant sentinel, overseeing an enigmatic black hole, nestled in the profound depths of the celestial abyss.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"In the futuristic control room of the Pathfinder's custom ",(0,n.jsx)("b",{children:" 'ГОРИЗОНТ СОБЫТИЙ ВЗОР' "})," kernel, as you remotely observe the singularity, you have the unique opportunity to engage the onboard ambient sound system. This advanced feature offers an immersive listening experience - ",(0,n.jsx)("b",{children:" Tchaikovsky's 'Waltz of the Flowers' "}),", a classical masterpiece, masterfully reinterpreted through our state-of-the-art audio technology for a deeply moving cosmic experience.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"I'm available for opportunities in all realms of software development. Please get in touch with me through the contact page."]})]}),(0,n.jsx)(a.Z,{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(model_render_container,{})]}),w=t(852),A=t.n(w);function Home(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A(),{children:[(0,n.jsx)("title",{children:"Alexander Makarov | about"}),(0,n.jsx)("meta",{name:"description",content:"About me."}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(N,{children:[(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.xT,{color:"cyan1",children:(0,n.jsx)(s.T,{color:"gray1",weight:"2",children:"ABOUT"})})}),(0,n.jsx)(s.xu,{css:{h:20}}),(0,n.jsx)(z,{children:(0,n.jsx)(s.xu,{css:{flex:1,minWidth:300,maxWidth:600},children:(0,n.jsx)(r.Z,{children:(0,n.jsx)(about,{})})})})]})]})}let N=(0,o.zo)("div",{display:"flex",flexDirection:"column"}),z=(0,o.zo)("div",{display:"flex",flexDirection:"row",gap:"30px",flexWrap:"wrap"})}},function(e){e.O(0,[374,774,888,179],function(){return e(e.s=9931)}),_N_E=e.O()}]);