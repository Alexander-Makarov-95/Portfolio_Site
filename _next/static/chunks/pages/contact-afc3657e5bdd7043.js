(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{9926:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(2046)}])},7502:function(e,i,n){"use strict";var a=n(1527),t=n(1986),r=n(894);i.Z=e=>{let{children:i,delay:n}=e;return(0,a.jsx)(r.xu,{as:t.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",delay:n,duration:.4},children:i})}},4544:function(e,i,n){"use strict";var a=n(1527),t=n(894);i.Z=e=>{let{color:i,width:n,height:r,css:o}=e;return(0,a.jsxs)(t.xu,{as:"svg",viewBox:"0 0 24 24",css:{fill:"$".concat(i),width:n,height:r,...o},children:[(0,a.jsx)(t.xu,{as:"path",d:"M12 1.96L1.29 21h21.42zm0 4.08L19.29 19H4.71z",css:{fill:"$".concat(i)}}),(0,a.jsx)(t.xu,{as:"path",d:"M11 10h2v5h-2zm0 6h2v2h-2z",css:{fill:"$".concat(i)}})]})}},3779:function(e,i,n){"use strict";var a=n(1527),t=n(9731);let CornerLinesBox=e=>{let{children:i,topHorizontalLine:n,bottomHorizontalLine:t,topLeft:x,topRight:p,bottomLeft:u,bottomRight:g,bottom:m,top:v,lineLength:j,css:f}=e;return m&&(u=!0,g=!0),v&&(x=!0,p=!0),(0,a.jsxs)(r,{css:{...f},children:[(0,a.jsxs)(o,{verticalAlign:"top",children:[n&&(0,a.jsx)(d,{children:(0,a.jsx)(h,{})}),(0,a.jsxs)(s,{children:[(0,a.jsx)(l,{align:"topLeft",children:x&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{variant:"vertical",css:{$$lineLength:j}}),(0,a.jsx)(c,{variant:"horizontal",css:{$$lineLength:j}})]})}),(0,a.jsx)(l,{align:"topRight",children:p&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{variant:"horizontal",css:{$$lineLength:j}}),(0,a.jsx)(c,{variant:"vertical",css:{$$lineLength:j}})]})})]})]}),(0,a.jsxs)(o,{verticalAlign:"bottom",children:[t&&(0,a.jsx)(d,{children:(0,a.jsx)(h,{})}),(0,a.jsxs)(s,{children:[(0,a.jsx)(l,{align:"bottomLeft",children:u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{variant:"vertical",css:{$$lineLength:j}}),(0,a.jsx)(c,{variant:"horizontal",css:{$$lineLength:j}})]})}),(0,a.jsx)(l,{align:"bottomRight",children:g&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{variant:"horizontal",css:{$$lineLength:j}}),(0,a.jsx)(c,{variant:"vertical",css:{$$lineLength:j}})]})})]})]}),i]})};CornerLinesBox.defaultProps={withHorizontalLine:!1,lineLength:"7px"};let r=(0,t.zo)("div",{position:"relative"}),o=(0,t.zo)("div",{position:"absolute",right:0,left:0,variants:{verticalAlign:{top:{top:0,bottom:"unset"},bottom:{top:"unset",bottom:0}}}}),s=(0,t.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"space-between"}),l=(0,t.zo)("div",{display:"flex",justifyContent:"space-between",variants:{align:{topLeft:{flexDirection:"row"},topRight:{},bottomLeft:{alignItems:"end"},bottomRight:{alignItems:"end"}}}}),c=(0,t.zo)("div",{backgroundColor:"$cyan1",variants:{variant:{vertical:{height:"$$lineLength",width:"1px"},horizontal:{height:"1px",width:"$$lineLength"}}}}),d=(0,t.zo)("div",{position:"relative"}),h=(0,t.zo)("div",{height:"1px",position:"absolute",top:0,right:50,left:50,bottom:0,borderRadius:"4px",backgroundColor:"$cyan1"});i.Z=CornerLinesBox},7113:function(e,i,n){"use strict";var a=n(1527),t=n(9731),r=n(894);let WidgetHeader=e=>{let{children:i}=e;return(0,a.jsx)(s,{color:"cyan14",size:"max",height:20,children:(0,a.jsx)(o,{children:i})})},o=(0,t.zo)("div",{position:"relative"}),s=(0,t.zo)(r.xT,{transition:"background 150ms ease-out",$$iconOpacity:0,"&:hover":{$$iconOpacity:1},"&:active":{$$iconOpacity:1,background:"$cyan10"}});WidgetHeader.Right=e=>{let{children:i}=e;return(0,a.jsx)(r.xu,{css:{position:"absolute",right:0},children:i})},WidgetHeader.Left=e=>{let{children:i}=e;return(0,a.jsxs)(r.xu,{css:{position:"absolute",left:0,display:"flex",gap:"6px"},children:[(0,a.jsx)(r.xu,{children:i}),(0,a.jsx)(r.xu,{css:{display:"flex",alignItems:"center",opacity:"$$iconOpacity",transition:"opacity 100ms ease-out"}})]})},i.Z=WidgetHeader},2620:function(e,i,n){"use strict";var a=n(1527),t=n(894),r=n(9731);n(2052);var o=n(6093),s=n(959);let l=(0,r.zo)("div",{maxWidth:"calc($sizes$tileSize * 9)",opacity:.9}),c=(0,r.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",border:"1px solid transparent",width:58,"@bp570":{width:48},alignItems:"center",flexWrap:"wrap",height:17,["& ".concat(t.T)]:{fontFamily:"$fonts$petch",fontSize:9},transition:"border 200ms",variants:{variant:{primary:{background:"unset"},secondary:{background:"$cyan10"},cyanPrimary:{background:"$cyan8",["& ".concat(t.T)]:{color:"$cyan1"}},cyanSecondary:{["& ".concat(t.T)]:{color:"$cyan1"}},orangePrimary:{["& ".concat(t.T)]:{color:"$orange1"}},yellowSecondary:{["& ".concat(t.T)]:{color:"$yellow1"}}},hightlight:{true:{border:"1px solid $gray10"}}}}),d=(0,r.zo)("div",{display:"flex",gap:4,justifyContent:"space-between","@media (max-width: 510px)":{gap:4}}),h=(0,r.zo)("div",{display:"flex",flexDirection:"column","@media (max-width: 510px)":{display:"none"}});i.ZP=e=>{let{data:i}=e,[n,r]=(0,s.useState)();return(0,a.jsx)(l,{children:(0,a.jsx)(h,{children:null==i?void 0:i.map((e,i)=>(0,a.jsx)(d,{children:e.map((e,i)=>(0,a.jsx)(c,{hightlight:n===e,variant:o.V[e].variant,onMouseEnter:()=>r(e),onMouseLeave:()=>r(void 0),children:(0,a.jsxs)(t.T,{size:"4",weight:3,children:[e," - AM1"]})},"".concat(e,"-MC").concat(i)))},"".concat(e.toString(),"-").concat(i)))})})}},6093:function(e,i,n){"use strict";var a,t;n.d(i,{V:function(){return r},a:function(){return a}}),(t=a||(a={})).EVC="EVC",t.AXH="AXH",t.ERR="ERR",t.OBX="OBX",t.DCX="DCX",t.CTA="CTA";let r={EVC:{variant:"primary"},AXH:{variant:"cyanSecondary"},ERR:{variant:"orangePrimary"},OBX:{variant:"yellowSecondary"},DCX:{variant:"secondary"},CTA:{variant:"cyanPrimary"}}},2686:function(e,i,n){"use strict";n.d(i,{Jt:function(){return o},Mo:function(){return r},jl:function(){return t}});var a=n(6093);let t={id:"MAKAROV CORP",dueDate:"[IMPERATIVE]",label:"PROJECT_ARCHIVE_TERMINAL",description:"Makarov Corps presents an operating system with a sleek, lightweight terminal, optimized for navigating an array of projects with ease. You are free to move around the icons and pop-ups on the desktop. ",unitCodeData:[[a.a.EVC,a.a.CTA,a.a.ERR,a.a.EVC],[a.a.AXH,a.a.OBX,a.a.EVC,a.a.DCX],[a.a.ERR,a.a.EVC,a.a.ERR,a.a.AXH],[a.a.EVC,a.a.CTA,a.a.OBX,a.a.OBX]]},r={id:"alexander.makarov62",dueDate:"[IMPERATIVE CONVERGENCE]",label:"WARP_MAIL_PROTOCOL",description:"Groundbreaking technology in the field of digital communication, employing quantum entanglement and advanced encryption methods to deliver messages instantaneously across vast distances.",unitCodeData:[[a.a.CTA,a.a.OBX,a.a.EVC,a.a.EVC],[a.a.EVC,a.a.AXH,a.a.AXH,a.a.ERR],[a.a.OBX,a.a.DCX,a.a.ERR,a.a.ERR],[a.a.EVC,a.a.AXH,a.a.CTA,a.a.OBX]]},o={id:"alexander-makarov-52b5a215a",dueDate:"[PROXIMAL MANDATE]",label:"LINKEDIN_QUANTUM_LINK",description:"Access the hyperlink to send me a message through LinkedIn in the cybernetic dimension.",unitCodeData:[[a.a.OBX,a.a.EVC,a.a.ERR,a.a.OBX],[a.a.AXH,a.a.ERR,a.a.EVC,a.a.CTA],[a.a.DCX,a.a.DCX,a.a.EVC,a.a.EVC],[a.a.EVC,a.a.AXH,a.a.CTA,a.a.OBX]]}},2046:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return Home}});var a=n(1527),t=n(7502),r=n(894),o=n(1450),s=n(9731),l=n(2686),c=n(3779),d=n(4544),h=n(2620),x=n(959),p=n(1422),u=n(3914),g=n(8050),m=n(6338);async function verifyCaptcha(e){try{let i=await m.Z.post("/api/verify-captcha",{token:e});if(i.data.success)return"success!";throw Error("Failed Captcha")}catch(e){throw Error("Failed to verify Captcha")}}p.d.configure({aws_project_region:"ap-southeast-2",aws_cloud_logic_custom:[{name:"BlackHoleContactForm",endpoint:"https://8y45ts0n37.execute-api.ap-southeast-2.amazonaws.com/dev",region:"ap-southeast-2"}],ssr:!0});let v=(0,s.zo)("form",{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"325px",margin:"auto"}),j=(0,s.zo)("input",{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc",backgroundColor:"$cyan8","::placeholder":{color:"red",fontFamily:"inherit"}}),f=(0,s.zo)(g.Z,{width:"100px"}),y=(0,s.zo)("textarea",{padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc",minHeight:"100px",backgroundColor:"$cyan8",resize:"none"}),C=(0,s.zo)("button",{padding:"0.5rem 1rem",borderRadius:"4px",border:"none",backgroundColor:"$cyan8",color:"white",cursor:"pointer","&:hover":{background:"$cyan4"}}),w=(0,s.zo)("div",{width:"304px",height:"74px",display:"flex",textAlign:"center",alignItems:"center",backgroundColor:"$cyan8",color:"rgba(255,255,255,1)",borderRadius:"0.25rem",border:"1px solid #C3E6CB"});var contact_form=()=>{let[e,i]=(0,x.useState)({name:"",email:"",message:""}),[n,t]=(0,x.useState)(!1),[r,o]=(0,x.useState)(!1),s=(0,x.useRef)(null),handleChange=n=>{i({...e,[n.target.name]:n.target.value})};async function handleCaptchaSubmission(e){try{await verifyCaptcha(e),await sendEmail()}catch(e){console.error("Error verifying captcha:",e)}}let sendEmail=async()=>{try{let i=await u.b.post("BlackHoleContactForm","/items",{body:e,headers:{}});console.log("Response from Lambda:",i),t(!0)}catch(e){console.error("Error submitting form:",e)}},handleSubmit=async e=>{e.preventDefault(),o(!0)};return n?(0,a.jsx)(w,{children:"Thank you for your message! We will be in touch soon."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{onSubmit:handleSubmit,children:!r&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{type:"text",name:"name",value:e.name,onChange:handleChange,placeholder:"Your Name",required:!0}),(0,a.jsx)(j,{type:"email",name:"email",value:e.email,onChange:handleChange,placeholder:"Your Email",required:!0}),(0,a.jsx)(y,{name:"message",value:e.message,onChange:handleChange,placeholder:"Your message",required:!0}),(0,a.jsx)(C,{type:"submit",children:"Submit"})]})}),r&&(0,a.jsx)(f,{sitekey:"6Lf4ZYEpAAAAAJDMsFC43eic_OnBvuH7EtTnZgUR",ref:s,onChange:handleCaptchaSubmission})]})};let b=(0,s.zo)("div",{height:"600px",background:"$cyan14",transition:"background 200ms ease-out","&:hover":{background:"$cyan12"}}),z=(0,s.zo)("div",{display:"flex",flexDirection:"column",padding:"12px",gap:"20px",justifyContent:"space-between"}),E=(0,s.zo)("div",{display:"flex",flex:1}),$=(0,s.zo)("div",{flex:1,maxHeight:"100px",overflow:"hidden"}),T=(0,s.zo)("div",{display:"flex",flexDirection:"row",padding:"4px 0px 0px 0px"}),R=(0,s.zo)("div",{display:"flex",flexDirection:"column"}),k=(0,s.zo)("div",{display:"flex",flexDirection:"column",flex:1}),A=(0,s.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",width:"48px",height:"30px"}),D=(0,s.zo)("div",{display:"row",justifyContent:"center",alignItems:"center"});var alarm_view=e=>{let{alarm:i}=e;return(0,a.jsxs)(b,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsxs)(z,{children:[(0,a.jsxs)(E,{children:[(0,a.jsxs)(k,{children:[(0,a.jsx)(c.Z,{topLeft:!0,lineLength:"10px"}),(0,a.jsxs)(T,{children:[(0,a.jsx)(A,{children:(0,a.jsx)(d.Z,{color:"red1",width:22,height:22})}),(0,a.jsxs)(R,{children:[(0,a.jsx)(r.T2,{color:"gray12",size:{"@initial":"6","@bp570":"4"},weight:"4",children:i.label}),(0,a.jsx)(r.xu,{css:{h:5}}),(0,a.jsxs)(r.T2,{color:"yellow1",size:"4",weight:"4",children:["ID: ",i.id]})]})]}),(0,a.jsx)(r.xu,{css:{h:12}}),(0,a.jsxs)(r.xu,{children:[(0,a.jsxs)(r.T,{size:"5",color:"gray9",children:["DUE DATE:"," ",(0,a.jsx)(r.T,{size:"5",color:"gray11",children:i.dueDate})]}),(0,a.jsx)(r.xu,{css:{h:10}}),(0,a.jsx)(contact_form,{})]})]}),(0,a.jsx)(D,{children:(0,a.jsx)(h.ZP,{data:i.unitCodeData})})]}),(0,a.jsx)(r.xu,{children:(0,a.jsxs)($,{title:i.description,children:[(0,a.jsxs)(r.T,{size:"5",color:"gray9",children:["PROTOCOL DESC: "," "]}),(0,a.jsx)(r.T,{size:"5",color:"gray10",children:i.description})]})})]}),(0,a.jsx)(o.Z,{})]})},linkedin_icon=e=>{let{color:i,css:n,width:t,height:o}=e;return(0,a.jsxs)(r.xu,{as:"svg",width:"1200",height:"800",viewBox:"-40.125525 -16.3118 347.75455 97.8708",fill:"none",css:{fill:"$".concat(i),width:t,height:o,...n},children:[(0,a.jsx)("title",{children:"LinkedIn logo"}),(0,a.jsx)(r.xu,{as:"path",fill:"#0a66c2",d:"M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"}),(0,a.jsx)(r.xu,{as:"path",fill:"#0a66c2",d:"M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"})]})};let L=(0,s.zo)("div",{height:"200px",background:"$cyan14",transition:"background 200ms ease-out","&:hover":{background:"$cyan12"}}),_=(0,s.zo)("div",{display:"flex",flexDirection:"column",padding:"12px",gap:"10px",justifyContent:"space-between"}),O=(0,s.zo)("div",{display:"flex",flex:1}),X=(0,s.zo)("div",{flex:1,maxHeight:"58px",overflow:"hidden"}),I=(0,s.zo)("div",{display:"flex",flexDirection:"row",padding:"4px 0px 0px 0px"}),H=(0,s.zo)("div",{display:"flex",flexDirection:"column"}),V=(0,s.zo)("div",{display:"flex",flexDirection:"column",flex:1}),M=(0,s.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",width:"48px",height:"30px"}),S=(0,s.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center"}),Z=(0,s.zo)("button",{padding:"8px 16px",backgroundColor:"$cyan11",border:"none",borderRadius:"4px",color:"white",fontSize:"16px",cursor:"pointer",transition:"background-color 200ms ease",width:"200px","&:hover":{backgroundColor:"$cyan9",cursor:"pointer"}});var linkedin_view=e=>{let{alarm:i}=e;return(0,a.jsxs)(L,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsxs)(_,{children:[(0,a.jsxs)(O,{children:[(0,a.jsxs)(V,{children:[(0,a.jsx)(c.Z,{topLeft:!0,lineLength:"10px"}),(0,a.jsxs)(I,{children:[(0,a.jsx)(M,{children:(0,a.jsx)(d.Z,{color:"red1",width:22,height:22})}),(0,a.jsxs)(H,{children:[(0,a.jsx)(r.T2,{color:"gray12",size:{"@initial":"6","@bp570":"4"},weight:"4",children:i.label}),(0,a.jsx)(r.xu,{css:{h:4}}),(0,a.jsxs)(r.T2,{color:"yellow1",size:"4",weight:"4",children:["ID: ",i.id]})]})]}),(0,a.jsx)(r.xu,{css:{h:12}}),(0,a.jsx)(r.xu,{children:(0,a.jsxs)(r.T,{size:"5",color:"gray9",children:["DUE DATE:"," ",(0,a.jsx)(r.T,{size:"5",color:"gray11",children:i.dueDate})]})})]}),(0,a.jsx)(S,{children:(0,a.jsx)(h.ZP,{data:i.unitCodeData})})]}),(0,a.jsx)(Z,{onClick:()=>{window.open("https://www.linkedin.com/in/alexander-makarov-52b5a215a/")},children:(0,a.jsx)(linkedin_icon,{width:100,height:25})}),(0,a.jsx)(r.xu,{children:(0,a.jsxs)(X,{title:i.description,children:[(0,a.jsxs)(r.T,{size:"5",color:"gray9",children:["TRANSMISSION DESC: "," "]}),(0,a.jsx)(r.T,{size:"5",color:"gray10",children:i.description})]})})]}),(0,a.jsx)(o.Z,{})]})},B=n(7113);let N=(0,s.zo)("div",{height:"calc($sizes$tileSize * 10)",display:"flex",flexDirection:"column",gap:"30px","@media (max-width: 510px)":{width:"375px"}});var alarm_list_container=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.wv,{children:[(0,a.jsx)(B.Z,{children:(0,a.jsxs)(B.Z.Left,{children:[(0,a.jsx)(r.T,{color:"cyan1",weight:2,children:"COMMUNICATION "}),(0,a.jsx)(r.T,{color:"cyan1",weight:1,children:"BEACON"})]})}),(0,a.jsx)(r.xu,{css:{h:10}}),(0,a.jsxs)(N,{children:[(0,a.jsx)(alarm_view,{alarm:l.Mo}),(0,a.jsx)(linkedin_view,{alarm:l.Jt})]})]})});let P=(0,s.zo)("div",{"@media (max-width: 510px)":{textShadow:"0 0 4px BLACK",height:"calc(100vh - 375px)",overflowY:"scroll",paddingRight:"20px"},marginRight:"-20px"}),F=(0,s.zo)("div",{background:"$cyan14",padding:"12px",display:"flex",flexDirection:"column"});var contact=()=>(0,a.jsxs)(P,{children:[(0,a.jsx)(r.xT,{color:"cyan14",size:"max",children:(0,a.jsx)(r.xu,{css:{display:"flex",justifyContent:"space-between"}})}),(0,a.jsx)(r.xu,{css:{h:15}}),(0,a.jsx)(o.Z,{}),(0,a.jsxs)(F,{children:[(0,a.jsx)(r.xu,{css:{h:10}}),(0,a.jsx)(r.T,{color:"gray12",size:"6",children:"Embark on a futuristic journey of professional collaboration. Below, discover the portals to connect with me for a spectrum of professional services. Engage through the digital dimensions of LinkedIn or directly via email, forging new alliances in the realms of expertise and innovation."})]}),(0,a.jsx)(o.Z,{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(alarm_list_container,{})]}),W=n(852),U=n.n(W);function Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(U(),{children:[(0,a.jsx)("title",{children:"Alexander Makarov | contact"}),(0,a.jsx)("meta",{name:"description",content:"Contact me."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)(Y,{children:[(0,a.jsx)(t.Z,{children:(0,a.jsx)(r.xT,{color:"cyan1",children:(0,a.jsx)(r.T,{color:"gray1",weight:"2",children:"CONTACT"})})}),(0,a.jsx)(r.xu,{css:{h:20}}),(0,a.jsx)(q,{children:(0,a.jsx)(r.xu,{css:{flex:1,minWidth:300,maxWidth:600},children:(0,a.jsx)(t.Z,{children:(0,a.jsx)(contact,{})})})})]})]})}let Y=(0,s.zo)("div",{display:"flex",flexDirection:"column"}),q=(0,s.zo)("div",{display:"flex",flexDirection:"row",gap:"30px",flexWrap:"wrap"})},765:function(){}},function(e){e.O(0,[956,365,466,774,888,179],function(){return e(e.s=9926)}),_N_E=e.O()}]);