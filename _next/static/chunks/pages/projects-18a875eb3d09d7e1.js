(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2687:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(5199)}])},7502:function(e,t,n){"use strict";var i=n(1527),a=n(1986),s=n(894);t.Z=e=>{let{children:t,delay:n}=e;return(0,i.jsx)(s.xu,{as:a.E.div,initial:{opacity:0,scale:1.05},animate:{opacity:1,scale:1},exit:{opacity:0,scale:1.02},transition:{type:"spring",delay:n,duration:.4},children:t})}},4544:function(e,t,n){"use strict";var i=n(1527),a=n(894);t.Z=e=>{let{color:t,width:n,height:s,css:o}=e;return(0,i.jsxs)(a.xu,{as:"svg",viewBox:"0 0 24 24",css:{fill:"$".concat(t),width:n,height:s,...o},children:[(0,i.jsx)(a.xu,{as:"path",d:"M12 1.96L1.29 21h21.42zm0 4.08L19.29 19H4.71z",css:{fill:"$".concat(t)}}),(0,i.jsx)(a.xu,{as:"path",d:"M11 10h2v5h-2zm0 6h2v2h-2z",css:{fill:"$".concat(t)}})]})}},6278:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(1527),a=n(959);let s={steam_sync:(0,a.lazy)(()=>n.e(211).then(n.bind(n,9211))),cat_tracker:(0,a.lazy)(()=>n.e(814).then(n.bind(n,1814))),wedding_photos:(0,a.lazy)(()=>n.e(139).then(n.bind(n,9139))),portfolio_website:(0,a.lazy)(()=>Promise.all([n.e(956),n.e(408),n.e(370)]).then(n.bind(n,1370)))},o=(0,a.createContext)({});t.C=e=>{let{children:t}=e,[n,c]=(0,a.useState)([]),[d,u]=(0,a.useState)("");return(0,a.useEffect)(()=>{if(!d||n.length<=1)return;let e=n.findIndex(e=>{let{id:t}=e;return t===d});if(-1!==e){let t=[...n],[i]=t.splice(e,1);t.push(i),c(t)}},[d]),(0,i.jsx)(o.Provider,{value:{apps:n,addApp:e=>{let{name:t,x:i,y:a}=e,o=s[t],d={id:Math.floor(1e7+89999999*Math.random()).toString(),Node:o,title:t,start:Date.now(),x:i,y:a};u(d.id),c([...n,d])},removeApp:e=>{c(t=>t.filter(t=>t.id!==e))},clearApps:()=>{c([])},appOnFocus:d,setAppOnFocus:u},children:t})}},8239:function(e,t,n){"use strict";n.d(t,{j:function(){return PythonProvider},s:function(){return usePython}});var i=n(1527),a=n(959);let s=(0,a.createContext)({}),usePython=()=>(0,a.useContext)(s);function PythonProvider(e){let{children:t}=e,n=(0,a.useRef)(null),o=(0,a.useRef)({}),c=(0,a.useRef)(null);return(0,i.jsx)(s.Provider,{value:{runCode:function(e,t,i){c.current&&(clearTimeout(c.current),c.current=null),n.current||(console.log("Creating new worker"),n.current=new Worker("/python.worker.js"),n.current.onmessage=e=>{let{id:t,stdout:n}=e.data;o.current[t]&&o.current[t](n)}),i&&(o.current[t]=i),n.current.postMessage({id:t,code:e})},deleteCallback:function(e){o.current[e]&&(delete o.current[e],Object.keys(o.current).length||(console.log("No callbacks left, unloading worker in 5 seconds"),c.current=setTimeout(()=>{n.current&&(n.current.terminate(),n.current=null)},5e3)))}},children:t})}},8226:function(e,t,n){"use strict";n.d(t,{j:function(){return WebContainerProvider},f:function(){return useWebContainer}});var i=n(1527),a=Object.defineProperty,s={};((e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})})(s,{createEndpoint:()=>c,expose:()=>expose,proxy:()=>proxy,proxyMarker:()=>o,releaseProxy:()=>d,transfer:()=>transfer,transferHandlers:()=>h,windowEndpoint:()=>windowEndpoint,wrap:()=>wrap});var o=Symbol("Comlink.proxy"),c=Symbol("Comlink.endpoint"),d=Symbol("Comlink.releaseProxy"),u=Symbol("Comlink.thrown"),isObject=e=>"object"==typeof e&&null!==e||"function"==typeof e,h=new Map([["proxy",{canHandle:e=>isObject(e)&&e[o],serialize(e){let{port1:t,port2:n}=new MessageChannel;return expose(e,t),[n,[n]]},deserialize:e=>(e.start(),wrap(e))}],["throw",{canHandle:e=>isObject(e)&&u in e,serialize:({value:e})=>[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]],deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function expose(e,t=self){t.addEventListener("message",function callback(n){let i;if(!n||!n.data)return;let{id:a,type:s,path:o}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(fromWireValue);try{let t=o.slice(0,-1).reduce((e,t)=>e[t],e),a=o.reduce((e,t)=>e[t],e);switch(s){case 0:i=a;break;case 1:t[o.slice(-1)[0]]=fromWireValue(n.data.value),i=!0;break;case 2:i=a.apply(t,c);break;case 3:{let e=new a(...c);i=proxy(e)}break;case 4:{let{port1:t,port2:n}=new MessageChannel;expose(e,n),i=transfer(t,[t])}break;case 5:i=void 0}}catch(e){i={value:e,[u]:0}}Promise.resolve(i).catch(e=>({value:e,[u]:0})).then(e=>{let[n,i]=toWireValue(e);t.postMessage(Object.assign(Object.assign({},n),{id:a}),i),5===s&&(t.removeEventListener("message",callback),closeEndPoint(t))})}),t.start&&t.start()}function closeEndPoint(e){"MessagePort"===e.constructor.name&&e.close()}function wrap(e,t){return function createProxy(e,t=[],n=function(){}){let i=!1,a=new Proxy(n,{get(n,s){if(throwIfProxyReleased(i),s===d)return()=>requestResponseMessage(e,{type:5,path:t.map(e=>e.toString())}).then(()=>{closeEndPoint(e),i=!0});if("then"===s){if(0===t.length)return{then:()=>a};let n=requestResponseMessage(e,{type:0,path:t.map(e=>e.toString())}).then(fromWireValue);return n.then.bind(n)}return createProxy(e,[...t,s])},set(n,a,s){throwIfProxyReleased(i);let[o,c]=toWireValue(s);return requestResponseMessage(e,{type:1,path:[...t,a].map(e=>e.toString()),value:o},c).then(fromWireValue)},apply(n,a,s){throwIfProxyReleased(i);let o=t[t.length-1];if(o===c)return requestResponseMessage(e,{type:4}).then(fromWireValue);if("bind"===o)return createProxy(e,t.slice(0,-1));let[d,u]=processArguments(s);return requestResponseMessage(e,{type:2,path:t.map(e=>e.toString()),argumentList:d},u).then(fromWireValue)},construct(n,a){throwIfProxyReleased(i);let[s,o]=processArguments(a);return requestResponseMessage(e,{type:3,path:t.map(e=>e.toString()),argumentList:s},o).then(fromWireValue)}});return a}(e,[],t)}function throwIfProxyReleased(e){if(e)throw Error("Proxy has been released and is not useable")}function processArguments(e){var t;let n=e.map(toWireValue);return[n.map(e=>e[0]),(t=n.map(e=>e[1]),Array.prototype.concat.apply([],t))]}var p=new WeakMap;function transfer(e,t){return p.set(e,t),e}function proxy(e){return Object.assign(e,{[o]:!0})}function windowEndpoint(e,t=self,n="*"){return{postMessage:(t,i)=>e.postMessage(t,n,i),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function toWireValue(e){for(let[t,n]of h)if(n.canHandle(e)){let[i,a]=n.serialize(e);return[{type:3,name:t,value:i},a]}return[{type:0,value:e},p.get(e)||[]]}function fromWireValue(e){switch(e.type){case 3:return h.get(e.name).deserialize(e.value);case 0:return e.value}}function requestResponseMessage(e,t,n){return new Promise(i=>{let a=[,,,,].fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function l(t){t.data&&t.data.id&&t.data.id===a&&(e.removeEventListener("message",l),i(t.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}let x=null,f=null,g={},m=new TextDecoder,y=new TextEncoder;let WebContainer=class WebContainer{_instance;_runtimeInfo;fs;static _instance=null;_tornDown=!1;constructor(e,t,n){this._instance=e,this._runtimeInfo=n,this.fs=new FileSystemAPIClient(t)}async spawn(e,t,n){let i,a=[];Array.isArray(t)?a=t:n=t;let s=new ReadableStream;if(n?.output!==!1){let e=function(){let e=null,t=new ReadableStream({start(t){e=t}});return{stream:t,push:t=>{null!=t?e?.enqueue(t):(e?.close(),e=null)}}}();i=e.push,s=e.stream}let o=proxyListener(function(e){if(null!=e)return t=>{t instanceof Uint8Array?e(m.decode(t)):null==t&&e(null)}}(i)),c=await this._instance.run({command:e,args:a,env:n?.env,terminal:n?.terminal},void 0,void 0,o);return new WebContainerProcessImpl(c,s)}on(e,t){let n=!1,unsubscribe=()=>{};return this._instance.on(e,s.proxy((...e)=>{n||t(...e)})).then(e=>{unsubscribe=e,n&&unsubscribe()}),()=>{n=!0,unsubscribe()}}mount(e,t){let n=e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):y.encode(JSON.stringify(function formatFileSystemTree(e){let t={d:{}};for(let n of Object.keys(e)){let i=e[n];if("file"in i){let e=i.file.contents,a="string"==typeof e?e:function(e){let t="";for(let n of e)t+=String.fromCharCode(n);return t}(e),s="string"==typeof e?{}:{b:!0};t.d[n]={f:{c:a,...s}};continue}let a=formatFileSystemTree(i.directory);t.d[n]=a}return t}(e)));return this._instance.loadFiles(s.transfer(n,[n.buffer]),{mountPoints:t?.mountPoint})}get path(){return this._runtimeInfo.path}get workdir(){return this._runtimeInfo.cwd}teardown(){if(this._tornDown)throw Error("WebContainer already torn down");this._tornDown=!0,this.fs._teardown(),this._instance.teardown(),this._instance[s.releaseProxy](),WebContainer._instance===this&&(WebContainer._instance=null)}static async boot(e={}){let{workdirName:t}=e;if(window.crossOriginIsolated&&"none"===e.coep&&console.warn(`A Cross-Origin-Embedder-Policy header is required in cross origin isolated environments.
Set the 'coep' option to 'require-corp'.`),t?.includes("/")||".."===t||"."===t)throw Error("workdirName should be a valid folder name");for(;x;)await x;if(WebContainer._instance)throw Error("Only a single WebContainer instance can be booted");let n=unsynchronizedBoot(e);x=n.catch(()=>{});try{let e=await n;return WebContainer._instance=e,e}finally{x=null}}};let DirEntImpl=class DirEntImpl{name;_type;constructor(e,t){this.name=e,this._type=t}isFile(){return 1===this._type}isDirectory(){return 2===this._type}};let FSWatcher=class FSWatcher{_apiClient;_path;_options;_listener;_wrappedListener;_watcher;_closed=!1;constructor(e,t,n,i){this._apiClient=e,this._path=t,this._options=n,this._listener=i,this._apiClient._watchers.add(this),this._wrappedListener=(e,t)=>{this._listener&&!this._closed&&this._listener(e,t)},this._apiClient._fs.watch(this._path,this._options,proxyListener(this._wrappedListener)).then(e=>{this._watcher=e,this._closed&&this._teardown()}).catch(console.error)}close(){this._closed||(this._closed=!0,this._apiClient._watchers.delete(this),this._teardown())}_teardown(){this._watcher?.close().finally(()=>{this._watcher?.[s.releaseProxy]()})}};let WebContainerProcessImpl=class WebContainerProcessImpl{output;input;exit;_process;constructor(e,t){this.output=t,this._process=e,this.input=new WritableStream({write:e=>{this._getProcess()?.write(e).catch(()=>{})}}),this.exit=this._onExit()}kill(){this._getProcess()?.kill()}resize(e){this._getProcess()?.resize(e)}async _onExit(){try{return await this._process.onExit}finally{this._process?.[s.releaseProxy](),this._process=null}}_getProcess(){return null==this._process&&console.warn("This process already exited"),this._process}};let FileSystemAPIClient=class FileSystemAPIClient{_fs;_watchers=new Set([]);constructor(e){this._fs=e}rm(...e){return this._fs.rm(...e)}async readFile(e,t){return await this._fs.readFile(e,t)}async rename(e,t){return await this._fs.rename(e,t)}async writeFile(e,t,n){if(t instanceof Uint8Array){let e=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);t=s.transfer(new Uint8Array(e),[e])}await this._fs.writeFile(e,t,n)}async readdir(e,t){let n=await this._fs.readdir(e,t);if("string"==typeof n[0]||n[0]instanceof Uint8Array)return n;let i=n.map(e=>new DirEntImpl(e.name,e["Symbol(type)"]));return i}async mkdir(e,t){return await this._fs.mkdir(e,t)}watch(e,t,n){return"function"==typeof t&&(n=t,t=null),new FSWatcher(this,e,t,n)}_teardown(){for(let e of(this._fs[s.releaseProxy](),this._watchers))e.close()}};async function unsynchronizedBoot(e){let{serverPromise:t}=function(e){if(null!=f)return e.coep!==g.coep&&(console.warn(`Attempting to boot WebContainer with 'coep: ${e.coep}'`),console.warn(`First boot had 'coep: ${g.coep}', new settings will not take effect!`)),{serverPromise:f};let t=document.createElement("iframe");t.style.display="none",t.setAttribute("allow","cross-origin-isolated");let n=new URL(window.WEBCONTAINER_API_IFRAME_URL??"https://stackblitz.com/headless");n.searchParams.set("version","1.1.9"),e.coep&&n.searchParams.set("coep",e.coep),t.src=n.toString();let{origin:i}=n;return g={...e},f=new Promise(e=>{window.addEventListener("message",t=>{if(t.origin!==i)return;let{data:n}=t;if("init"===n.type){e(s.wrap(t.ports[0]));return}if("warning"===n.type){console[n.level].call(console,n.message);return}})}),document.body.insertBefore(t,null),{serverPromise:f}}(e),n=await t,i=await n.build({host:window.location.host,version:"1.1.9",workdirName:e.workdirName}),a=await i.fs(),o=await i.runtimeInfo();return new WebContainer(i,a,o)}function proxyListener(e){if(null!=e)return s.proxy(e)}var w=n(959);let v=(0,w.createContext)({}),useWebContainer=()=>(0,w.useContext)(v),WebContainerProvider=e=>{let{children:t}=e,[n,a]=(0,w.useState)(),[s,o]=(0,w.useState)("/src/components/terminal"),[c,d]=(0,w.useState)(!1);async function exec(e,t){if(!n||c)return load(),t("Loading web container...");let i=await n.spawn("jsh",["-c","cd ".concat(s,"; ").concat(e.join(" "))]),a=await i.exit;if(0!==a)return i.output.pipeTo(new WritableStream({write(e){t("Error: "+e),i.kill()}}));i.output.pipeTo(new WritableStream({write(e){t(e),i.kill()}}))}async function load(){if(n||c){console.log("Web container already loaded");return}d(!0),console.log("Loading web container...");let e=await WebContainer.boot({workdirName:"singularityos"});a(e),d(!1)}return(0,w.useEffect)(()=>()=>{null==n||n.teardown()},[]),(0,i.jsx)(v.Provider,{value:{exec,webContainer:n,cd:function(e){return new Promise((t,i)=>{let a="";a=e.startsWith("/")?e:"".concat(s,"/").concat(e),null==n||n.spawn("jsh",["-c","cd ".concat(a)]).then(n=>{n.exit.then(n=>{0!==n?i(Error("cd: ".concat(e,": No such file or directory"))):(o(a),t())})})})}},children:t})}},8741:function(e,t,n){"use strict";n.d(t,{W:function(){return WindowProvider},z:function(){return useWindow}});var i=n(1527),a=n(959);let s=(0,a.createContext)({}),useWindow=()=>(0,a.useContext)(s);function WindowProvider(e){let{children:t,setIsResizable:n,isFullscreen:a,appId:o,initialSize:c,setInitialSize:d}=e;return(0,i.jsx)(s.Provider,{value:{setIsResizable:n,isFullscreen:a,appId:o,initialSize:c,setInitialSize:d},children:t})}},4143:function(e,t,n){"use strict";n.d(t,{F:function(){return useApps}});var i=n(959),a=n(6278);function useApps(){let e=(0,i.useContext)(a.Z);if(!e)throw Error("useApps must be used within an ApplicationProvider");return e}},3779:function(e,t,n){"use strict";var i=n(1527),a=n(9731);let CornerLinesBox=e=>{let{children:t,topHorizontalLine:n,bottomHorizontalLine:a,topLeft:x,topRight:f,bottomLeft:g,bottomRight:m,bottom:y,top:w,lineLength:v,css:b}=e;return y&&(g=!0,m=!0),w&&(x=!0,f=!0),(0,i.jsxs)(s,{css:{...b},children:[(0,i.jsxs)(o,{verticalAlign:"top",children:[n&&(0,i.jsx)(h,{children:(0,i.jsx)(p,{})}),(0,i.jsxs)(c,{children:[(0,i.jsx)(d,{align:"topLeft",children:x&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{variant:"vertical",css:{$$lineLength:v}}),(0,i.jsx)(u,{variant:"horizontal",css:{$$lineLength:v}})]})}),(0,i.jsx)(d,{align:"topRight",children:f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{variant:"horizontal",css:{$$lineLength:v}}),(0,i.jsx)(u,{variant:"vertical",css:{$$lineLength:v}})]})})]})]}),(0,i.jsxs)(o,{verticalAlign:"bottom",children:[a&&(0,i.jsx)(h,{children:(0,i.jsx)(p,{})}),(0,i.jsxs)(c,{children:[(0,i.jsx)(d,{align:"bottomLeft",children:g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{variant:"vertical",css:{$$lineLength:v}}),(0,i.jsx)(u,{variant:"horizontal",css:{$$lineLength:v}})]})}),(0,i.jsx)(d,{align:"bottomRight",children:m&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{variant:"horizontal",css:{$$lineLength:v}}),(0,i.jsx)(u,{variant:"vertical",css:{$$lineLength:v}})]})})]})]}),t]})};CornerLinesBox.defaultProps={withHorizontalLine:!1,lineLength:"7px"};let s=(0,a.zo)("div",{position:"relative"}),o=(0,a.zo)("div",{position:"absolute",right:0,left:0,variants:{verticalAlign:{top:{top:0,bottom:"unset"},bottom:{top:"unset",bottom:0}}}}),c=(0,a.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"space-between"}),d=(0,a.zo)("div",{display:"flex",justifyContent:"space-between",variants:{align:{topLeft:{flexDirection:"row"},topRight:{},bottomLeft:{alignItems:"end"},bottomRight:{alignItems:"end"}}}}),u=(0,a.zo)("div",{backgroundColor:"$cyan1",variants:{variant:{vertical:{height:"$$lineLength",width:"1px"},horizontal:{height:"1px",width:"$$lineLength"}}}}),h=(0,a.zo)("div",{position:"relative"}),p=(0,a.zo)("div",{height:"1px",position:"absolute",top:0,right:50,left:50,bottom:0,borderRadius:"4px",backgroundColor:"$cyan1"});t.Z=CornerLinesBox},7113:function(e,t,n){"use strict";var i=n(1527),a=n(9731),s=n(894);let WidgetHeader=e=>{let{children:t}=e;return(0,i.jsx)(c,{color:"cyan14",size:"max",height:20,children:(0,i.jsx)(o,{children:t})})},o=(0,a.zo)("div",{position:"relative"}),c=(0,a.zo)(s.xT,{transition:"background 150ms ease-out",$$iconOpacity:0,"&:hover":{$$iconOpacity:1},"&:active":{$$iconOpacity:1,background:"$cyan10"}});WidgetHeader.Right=e=>{let{children:t}=e;return(0,i.jsx)(s.xu,{css:{position:"absolute",right:0},children:t})},WidgetHeader.Left=e=>{let{children:t}=e;return(0,i.jsxs)(s.xu,{css:{position:"absolute",left:0,display:"flex",gap:"6px"},children:[(0,i.jsx)(s.xu,{children:t}),(0,i.jsx)(s.xu,{css:{display:"flex",alignItems:"center",opacity:"$$iconOpacity",transition:"opacity 100ms ease-out"}})]})},t.Z=WidgetHeader},2620:function(e,t,n){"use strict";var i=n(1527),a=n(894),s=n(9731);n(2052);var o=n(6093),c=n(959);let d=(0,s.zo)("div",{maxWidth:"calc($sizes$tileSize * 9)",opacity:.9}),u=(0,s.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"center",border:"1px solid transparent",width:58,"@bp570":{width:48},alignItems:"center",flexWrap:"wrap",height:17,["& ".concat(a.T)]:{fontFamily:"$fonts$petch",fontSize:9},transition:"border 200ms",variants:{variant:{primary:{background:"unset"},secondary:{background:"$cyan10"},cyanPrimary:{background:"$cyan8",["& ".concat(a.T)]:{color:"$cyan1"}},cyanSecondary:{["& ".concat(a.T)]:{color:"$cyan1"}},orangePrimary:{["& ".concat(a.T)]:{color:"$orange1"}},yellowSecondary:{["& ".concat(a.T)]:{color:"$yellow1"}}},hightlight:{true:{border:"1px solid $gray10"}}}}),h=(0,s.zo)("div",{display:"flex",gap:4,justifyContent:"space-between","@media (max-width: 510px)":{gap:4}}),p=(0,s.zo)("div",{display:"flex",flexDirection:"column","@media (max-width: 510px)":{display:"none"}});t.ZP=e=>{let{data:t}=e,[n,s]=(0,c.useState)();return(0,i.jsx)(d,{children:(0,i.jsx)(p,{children:null==t?void 0:t.map((e,t)=>(0,i.jsx)(h,{children:e.map((e,t)=>(0,i.jsx)(u,{hightlight:n===e,variant:o.V[e].variant,onMouseEnter:()=>s(e),onMouseLeave:()=>s(void 0),children:(0,i.jsxs)(a.T,{size:"4",weight:3,children:[e," - AM1"]})},"".concat(e,"-MC").concat(t)))},"".concat(e.toString(),"-").concat(t)))})})}},6093:function(e,t,n){"use strict";var i,a;n.d(t,{V:function(){return s},a:function(){return i}}),(a=i||(i={})).EVC="EVC",a.AXH="AXH",a.ERR="ERR",a.OBX="OBX",a.DCX="DCX",a.CTA="CTA";let s={EVC:{variant:"primary"},AXH:{variant:"cyanSecondary"},ERR:{variant:"orangePrimary"},OBX:{variant:"yellowSecondary"},DCX:{variant:"secondary"},CTA:{variant:"cyanPrimary"}}},2686:function(e,t,n){"use strict";n.d(t,{Jt:function(){return o},Mo:function(){return s},jl:function(){return a}});var i=n(6093);let a={id:"MAKAROV CORP",dueDate:"[IMPERATIVE]",label:"PROJECT_ARCHIVE_TERMINAL",description:"Makarov Corps presents an operating system with a sleek, lightweight terminal, optimized for navigating an array of projects with ease. You are free to move around the icons and pop-ups on the desktop. ",unitCodeData:[[i.a.EVC,i.a.CTA,i.a.ERR,i.a.EVC],[i.a.AXH,i.a.OBX,i.a.EVC,i.a.DCX],[i.a.ERR,i.a.EVC,i.a.ERR,i.a.AXH],[i.a.EVC,i.a.CTA,i.a.OBX,i.a.OBX]]},s={id:"alexander.makarov62@gmail.com",dueDate:"[IMPERATIVE CONVERGENCE]",label:"WARP_MAIL_PROTOCOL",description:"Groundbreaking technology in the field of digital communication, employing quantum entanglement and advanced encryption methods to deliver messages instantaneously across vast distances.",unitCodeData:[[i.a.CTA,i.a.OBX,i.a.EVC,i.a.EVC],[i.a.EVC,i.a.AXH,i.a.AXH,i.a.ERR],[i.a.OBX,i.a.DCX,i.a.ERR,i.a.ERR],[i.a.EVC,i.a.AXH,i.a.CTA,i.a.OBX]]},o={id:"alexander-makarov-52b5a215a",dueDate:"[PROXIMAL MANDATE]",label:"LINKEDIN_QUANTUM_LINK",description:"Access the hyperlink to send me a message through LinkedIn in the cybernetic dimension.",unitCodeData:[[i.a.OBX,i.a.EVC,i.a.ERR,i.a.OBX],[i.a.AXH,i.a.ERR,i.a.EVC,i.a.CTA],[i.a.DCX,i.a.DCX,i.a.EVC,i.a.EVC],[i.a.EVC,i.a.AXH,i.a.CTA,i.a.OBX]]}},5199:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var i,a,s=n(1527),o=n(7502),c=n(894),d=n(852),u=n.n(d),h=n(9731),p=n(1450);(i=a||(a={})).orange="orange",i.cyan="cyan";let x={cyan:{primary:"cyan1",secondary:"orange1",disabled:"cyan9"},orange:{primary:"orange1",secondary:"cyan1",disabled:"cyan9"}},f=(0,h.zo)("div",{flex:1}),g=(0,h.zo)("div",{height:4,flex:1,background:"$cyan1"}),m=(0,h.zo)("div",{display:"flex",flexDirection:"row",gap:"8px"});var step_progress_bar=e=>{let{data:t}=e;return(0,s.jsx)(f,{children:(0,s.jsx)(m,{children:t.map((e,t)=>(0,s.jsx)(g,{css:{background:"$".concat(x[e.color][e.state])}},"".concat(e.color,"-").concat(e.state,"-").concat(t)))})})},y=n(3779),w=n(4544),v=n(2620),b=n(638),j=n.n(b),_=n(6278),C=n(458),E=n(959),k=n(4143),P=n(5317);let DragControls=class DragControls{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(n=>{n.start(e.nativeEvent||e,t)})}};let createDragControls=()=>new DragControls;var z=["mousedown","touchstart"],esm_useClickAway=function(e,t,n){void 0===n&&(n=z);var i=(0,E.useRef)(t);(0,E.useEffect)(function(){i.current=t},[t]),(0,E.useEffect)(function(){for(var handler=function(t){var n=e.current;n&&!n.contains(t.target)&&i.current(t)},t=0,a=n;t<a.length;t++){var s=a[t];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(document,s,handler)}return function(){for(var e=0,t=n;e<t.length;e++){var i=t[e];!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(document,i,handler)}}},[n,e])},A=n(1986),S=n(6259);function AppIcon(e){let{onDoubleClick:t,defaultPosition:n,isDraggable:i,title:a,width:o=45,height:c=40,icon:d}=e,[u,h]=(0,E.useState)(!1),[p,x]=(0,E.useState)(0),f=(0,E.useRef)(null),g=(0,P.h)(createDragControls);return esm_useClickAway(f,()=>{x(0),h(!1)}),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(A.E.div,{drag:i,initial:n,dragControls:g,dragMomentum:!1,ref:f,onClickCapture:()=>{1===p&&(null==t||t());let e=setTimeout(()=>{x(0)},300);return x(e=>1===e?(h(!1),0):(h(!0),1)),()=>clearTimeout(e)},className:(0,S.Z)("flex h-fit w-fit flex-col items-center justify-center p-2"),style:{backgroundColor:u?"rgba(255, 255, 255, 0.1)":"transparent"},children:[(0,s.jsx)("div",{style:{width:.8*o,height:.8*o,backgroundImage:"url(".concat(d,")")},className:(0,S.Z)("bg-contain bg-center bg-no-repeat")}),(0,s.jsx)("strong",{style:{width:1.2*o,fontSize:"".concat(.27*o,"px"),color:u?"rgba(255, 255, 255, 0.7)":"rgba(0, 0, 0, 0.7)"},className:"break-words text-center",children:a})]})})}var R=(0,E.memo)(e=>{let{Node:t,appID:n}=e;return(0,s.jsx)(E.Suspense,{children:(0,s.jsx)(t,{appId:n})})}),I=n(8741);function Draggable(e){let{children:t,x:n,y:i,drag:a,setDrag:o,mouse:c,initialHeight:d,initialWidth:u,isFullscreen:h}=e,p=(0,P.h)(createDragControls),x=(0,E.useMemo)(()=>void 0!==n&&void 0!==i?{x:n,y:i}:{x:(300-u)/2,y:(200-d)/2},[n,i,300,200]);return(0,s.jsx)("div",{style:{position:"absolute",zIndex:25,width:h?"100%":"fit-content",height:h?"100%":"fit-content"},children:(0,s.jsx)(A.E.div,{initial:{opacity:0,scale:.1,x:x.x,y:x.y},animate:{opacity:1,scale:1,x:h?0:x.x,y:h?0:x.y},transition:{duration:.5,ease:[.43,.13,.23,.96]},drag:a,onDragEnd:()=>{o(!1)},dragControls:p,dragMomentum:!1,children:t})})}var terminal_Application=function(e){let{Node:t,...n}=e,[i,a]=(0,E.useState)(!1),[o,c]=(0,E.useState)(),[d,u]=(0,E.useState)(!1),[h,p]=(0,E.useState)(!0),{removeApp:x,setAppOnFocus:f}=(0,k.F)(),{setIsResizable:g,initialSize:m,setInitialSize:y}=function(){let[e,t]=(0,E.useState)(!1),[n,i]=(0,E.useState)({width:100,height:200});return{isResizable:e,setIsResizable:t,initialSize:n,setInitialSize:i}}(),w="/thank_you.svg";return(0,E.useEffect)(()=>{setTimeout(()=>{p(!1)},500)},[]),(0,s.jsx)(Draggable,{drag:!d&&i,mouse:o,setDrag:a,x:n.x,y:n.y,isFullscreen:d,initialHeight:m.height,initialWidth:m.width,children:(0,s.jsxs)("div",{style:{width:d?"600px":m.width,height:d?"calc(100vh - 40px)":m.height,display:"flex",flexDirection:"column",alignItems:"center",border:"3px solid rgba(0, 0, 0, 0.4)",backgroundImage:"url(".concat(w,")"),backgroundSize:"cover",backgroundPosition:"center"},onMouseDown:()=>{f(n.id)},children:[(0,s.jsxs)("div",{style:{zIndex:30,marginTop:0,height:"30px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"hsla(19, 77%, 58%, 0.7)",color:"rgba(0, 0, 0, 0.7)",userSelect:"none"},onPointerDown:e=>{c(e),a(!0)},children:[(0,s.jsx)("strong",{style:{marginLeft:"auto",display:"block",opacity:h?0:1},children:n.title}),(0,s.jsx)("div",{style:{marginLeft:"auto",display:"flex",gap:"8px"},children:(0,s.jsx)("button",{style:{display:"flex",height:"24px",width:"24px",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, 0.8)",color:"rgba(0, 0, 0, 0.8)",fontSize:"24px"},onClick:()=>{setTimeout(()=>{x(n.id)},300)},children:"x"})})]}),(0,s.jsx)("div",{style:{display:"flex",height:"100%",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",backgroundColor:"rgba(255, 255, 255, 0.8)",backgroundImage:"url(".concat(w,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,s.jsx)(I.W,{appId:n.id,setIsResizable:g,isFullscreen:d,initialSize:m,setInitialSize:y,children:(0,s.jsx)("div",{style:{height:"100%",width:"100%",opacity:h?0:1},children:(0,s.jsx)(R,{Node:t,appID:n.id})})})})]})})};let D=[{title:"Steam Sync",id:"steam_sync",icon:"icons//applications/steam_sync.svg"},{title:"Personal",id:"portfolio_website",icon:"/icons/applications/planet.svg"},{title:"Wedding Photos",id:"wedding_photos",icon:"/icons/applications/wedding_viewer.svg"},{title:"Cat Tracker",id:"cat_tracker",icon:"/icons/applications/cat_tracker.svg"}];var terminal_WelcomeCard=function(e){let{onEnterMainframe:t}=e,[n,i]=(0,E.useState)(!0);return(0,s.jsx)("div",{className:(0,S.Z)("absolute p-1"),style:{width:600,height:400,backgroundImage:"url(".concat("/welcome.svg",")"),backgroundSize:"cover",backgroundPosition:"center"},children:n&&(0,s.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center text-center",children:[(0,s.jsx)("h1",{className:j().customH1,children:"//SingularityOS//"}),(0,s.jsx)("p",{className:j().customP,children:"Welcome to the Pathfinder's onboard operating system."}),(0,s.jsx)("p",{className:j().customP,children:"Click through the icons to view my projects."}),(0,s.jsx)("button",{className:j().button,onClick:()=>{let e=new Audio("/enter_sound.mp3");e.play(),i(!1),t()},children:"Enter mainframe"})]})})};let L=["|","/","—","\\"];function Loading(){let[e,t]=(0,E.useState)(0),{clearApps:n}=(0,k.F)();return(0,E.useEffect)(()=>{n();let e=setInterval(()=>{t(e=>3===e?0:e+1)},300);return()=>{clearInterval(e)}},[]),(0,s.jsxs)("div",{style:{display:"flex",height:"292px",width:"502px",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"rgba(9, 9, 11, 0.6)",color:"white",textAlign:"center",margin:"auto",top:0,bottom:8,left:0,right:6,overflow:"hidden"},children:[(0,s.jsxs)("p",{className:"text-2xl",children:["SingularityOS ",(0,s.jsx)("br",{}),"Beta Release"]}),(0,s.jsx)("span",{className:"text-1xl",children:L[e]}),(0,s.jsx)("div",{children:(0,s.jsxs)("p",{className:"text-1xl",children:["Copyright (c) Makarov Corporation, 1995.",(0,s.jsx)("br",{}),"All Rights Reserved. SingularityOS is a registered trademark of Makarov Corp."]})})]})}let W=(0,C.zo)("div",{position:"relative",height:"400px",width:"600px",display:"flex",justifyContent:"center",alignItems:"center"}),T=(0,C.zo)("main",{position:"absolute",height:"292px",width:"502px",backgroundColor:"$cyan9",backgroundImage:"url(/brand/singularity.png)",backgroundSize:"150px 150px",backgroundPosition:"center",backgroundRepeat:"no-repeat",margin:"auto",top:0,bottom:8,left:0,right:6,overflow:"hidden"}),O=(0,C.zo)("div",{height:"100%",width:"100%",background:"url(/pattern/dotted/lightAlt.svg)",backgroundSize:"10px",backgroundRepeat:"repeat"}),M=(0,C.zo)("div",{position:"relative",height:"36px",width:"100%",backgroundSize:"425px 40px",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),$=(0,C.zo)("div",{position:"absolute",height:"293px",width:"500px",top:"49%",left:"49.5%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center",alignItems:"center"});var Desktop_Desktop=()=>{let{apps:e,addApp:t}=(0,k.F)(),[n,i]=(0,E.useState)(!1),a="/top_bar.svg",[o,c]=(0,E.useState)(!1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(W,{children:[(0,s.jsx)(terminal_WelcomeCard,{onEnterMainframe:()=>{c(!0),setTimeout(()=>{c(!1),i(!0)},2100)}}),o&&(0,s.jsx)($,{children:(0,s.jsx)(Loading,{})}),n&&(0,s.jsx)(T,{children:(0,s.jsxs)(O,{children:[(0,s.jsx)(M,{style:{backgroundImage:"url(".concat(a,")")}}),e.map(e=>(0,s.jsx)(terminal_Application,{...e},e.id)),D.map(e=>(0,s.jsx)(AppIcon,{isDraggable:!0,onDoubleClick:()=>t({name:e.id}),defaultPosition:{x:20,y:10},icon:e.icon,title:e.title},e.id)),(0,s.jsx)(M,{style:{backgroundImage:"url(".concat(a,")"),transform:"rotate(180deg)"}})]})})]})})},N=n(8239),H=n(8226),terminal_OperatingSystem=()=>(0,s.jsx)("div",{className:j().customDiv,children:(0,s.jsx)(_.C,{children:(0,s.jsx)(H.j,{children:(0,s.jsx)(N.j,{children:(0,s.jsx)(Desktop_Desktop,{})})})})});let V=(0,h.zo)("div",{background:"$cyan14",transition:"background 200ms ease-out","&:hover":{background:"$cyan12"}}),X=(0,h.zo)("div",{display:"flex",flexDirection:"column",padding:"12px",gap:"20px",justifyContent:"space-between"}),F=(0,h.zo)("div",{display:"flex",flex:1}),B=(0,h.zo)("div",{flex:1,maxHeight:"100px",overflow:"hidden"}),Z=(0,h.zo)("div",{display:"flex",flexDirection:"row",padding:"4px 0px 0px 0px"}),q=(0,h.zo)("div",{display:"flex",flexDirection:"column"}),U=(0,h.zo)("div",{display:"flex",flexDirection:"column",flex:1}),G=(0,h.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center",width:"48px",height:"30px"}),K=(0,h.zo)("div",{display:"flex",justifyContent:"center",alignItems:"center"});var project_view=e=>{let{alarm:t}=e;return(0,s.jsx)(V,{children:(0,s.jsxs)(X,{children:[(0,s.jsxs)(F,{children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(y.Z,{topLeft:!0,lineLength:"10px"}),(0,s.jsxs)(Z,{children:[(0,s.jsx)(G,{children:(0,s.jsx)(w.Z,{color:"green1",width:22,height:22})}),(0,s.jsxs)(q,{children:[(0,s.jsx)(c.T2,{color:"gray12",size:{"@initial":"6","@bp570":"4"},weight:"4",children:t.label}),(0,s.jsx)(c.xu,{css:{h:10}}),(0,s.jsxs)(c.T2,{color:"yellow1",size:"4",weight:"4",children:["ID: ",t.id]})]})]}),(0,s.jsx)(c.xu,{css:{h:12}}),(0,s.jsxs)(c.xu,{children:[(0,s.jsxs)(c.T,{size:"5",color:"gray9",children:["VIEW DATE DUE:"," ",(0,s.jsx)(c.T,{size:"5",color:"gray11",children:t.dueDate})]}),(0,s.jsx)(c.xu,{css:{h:10}})]})]}),(0,s.jsx)(K,{children:(0,s.jsx)(v.ZP,{data:t.unitCodeData})})]}),(0,s.jsx)(terminal_OperatingSystem,{}),(0,s.jsx)(c.xu,{children:(0,s.jsxs)(B,{title:t.description,children:[(0,s.jsxs)(c.T,{size:"5",color:"gray9",children:["PROTOCOL DESC: "," "]}),(0,s.jsx)(c.T,{size:"5",color:"gray10",children:t.description})]})})]})})},Y=n(2686),J=n(7113);let Q=(0,h.zo)("div",{display:"flex",flexDirection:"row",flex:1,gap:"40px",justifyContent:"space-between"});var alarm_stats_container=()=>{let e=[{color:a.cyan,state:"primary"},{color:a.cyan,state:"primary"},{color:a.cyan,state:"disabled"},{color:a.cyan,state:"disabled"}],t=[{color:a.cyan,state:"primary"},{color:a.cyan,state:"primary"},{color:a.cyan,state:"secondary"},{color:a.cyan,state:"disabled"}],n=[{color:a.cyan,state:"primary"},{color:a.cyan,state:"disabled"},{color:a.cyan,state:"disabled"},{color:a.cyan,state:"disabled"}];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c.wv,{children:[(0,s.jsx)(p.Z,{}),(0,s.jsx)(J.Z,{children:(0,s.jsxs)(J.Z.Left,{children:[(0,s.jsx)(c.T,{color:"cyan1",weight:2,children:"PERSONAL "}),(0,s.jsx)(c.T,{color:"cyan1",weight:1,children:"PROJECTS"})]})}),(0,s.jsx)(c.xu,{css:{h:10}}),(0,s.jsx)(p.Z,{children:(0,s.jsxs)(Q,{children:[(0,s.jsx)(step_progress_bar,{data:e}),(0,s.jsx)(step_progress_bar,{data:t}),(0,s.jsx)(step_progress_bar,{data:n})]})}),(0,s.jsx)(c.xu,{css:{h:15}}),(0,s.jsx)(p.Z,{}),(0,s.jsx)(project_view,{alarm:Y.jl}),(0,s.jsx)(p.Z,{})]})})};let ee=(0,h.zo)("div",{"@media (max-width: 510px)":{textShadow:"0 0 4px BLACK",height:"calc(100vh - 375px)",overflowY:"scroll",paddingRight:"20px"},marginRight:"-20px"}),et=(0,h.zo)("div",{background:"$cyan14",padding:"12px",display:"flex",flexDirection:"column",border:"0.1px solid rgba(0, 255, 255, 0.025)"});var projects=()=>(0,s.jsxs)(ee,{children:[(0,s.jsx)(c.xT,{color:"cyan14",size:"max",children:(0,s.jsx)(c.xu,{css:{display:"flex",justifyContent:"space-between"}})}),(0,s.jsx)(c.xu,{css:{h:15}}),(0,s.jsx)(p.Z,{}),(0,s.jsxs)(et,{children:[(0,s.jsx)(c.xu,{css:{h:10}}),(0,s.jsxs)(c.T,{color:"gray12",size:"6",children:["As a developer and designer, I'm passionate about using technology to craft creative solutions. My portfolio highlights projects that blend modern digital tools with innovative concepts.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"Below you will find the Pathfinder's onboard terminal, powered by Makarov Corps' SingularityOS. This interface grants you access to a curated selection of my completed and pending projects. By clicking on any of the icons, you'll be redirected to the corresponding GitHub page for more details."]})]}),(0,s.jsx)(p.Z,{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(alarm_stats_container,{})]});function Home(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u(),{children:[(0,s.jsx)("title",{children:"Alexander Makarov | projects"}),(0,s.jsx)("meta",{name:"description",content:"My projects."}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)(en,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)(c.xT,{color:"cyan1",children:(0,s.jsx)(c.T,{color:"gray1",weight:"2",children:"WORK EXPERIENCE"})})}),(0,s.jsx)(c.xu,{css:{h:20}}),(0,s.jsx)(er,{children:(0,s.jsx)(c.xu,{css:{flex:1,minWidth:300,maxWidth:600},children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(projects,{})})})})]})]})}let en=(0,h.zo)("div",{display:"flex",flexDirection:"column"}),er=(0,h.zo)("div",{display:"flex",flexDirection:"row",gap:"30px",flexWrap:"wrap"})},638:function(e){e.exports={customP:"tailwind_customP__9VADm",customH1:"tailwind_customH1__YGoxC",customH2:"tailwind_customH2__EWwnb",customH3:"tailwind_customH3__W16bH",customH4:"tailwind_customH4__MSYYt",customH5:"tailwind_customH5__agMFd",customH6:"tailwind_customH6__g7b9L",customDiv:"tailwind_customDiv__w8l53",button:"tailwind_button__99XRn"}},6259:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,i="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(i&&(i+=" "),i+=t);return i}}},function(e){e.O(0,[365,774,888,179],function(){return e(e.s=2687)}),_N_E=e.O()}]);