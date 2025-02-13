/*! For license information please see 834.main.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[834],{834:(e,t,n)=>{n.d(t,{Dc:()=>k,Dx:()=>S,GQ:()=>m,Xb:()=>Ms,Zf:()=>Ls,iX:()=>v,t3:()=>Es,xI:()=>u});var r,o=n(931),i=!o.S$&&!!o.IJ,s=()=>{},a=e=>null!=e,l=e=>"function"!=typeof e||e.length?e:e(),d=e=>Array.isArray(e)?e:e?[e]:[],c=i?e=>(0,o.QQ)()?(0,o.Ki)(e):e:o.Ki,u=function(e){const[t,n]=(0,o.n5)(),r=e?.throw?(e,t)=>{throw n(e instanceof Error?e:new Error(t)),e}:(e,t)=>{n(e instanceof Error?e:new Error(t))},i=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),s=e?.prefix?`${e.prefix}.`:"",a=new Map,l=new Proxy({},{get(t,n){let l=a.get(n);l||(l=(0,o.n5)(void 0,{equals:!1}),a.set(n,l)),l[0]();const d=i.reduce(((e,t)=>{if(null!==e||!t)return e;try{return t.getItem(`${s}${n}`)}catch(e){return r(e,`Error reading ${s}${n} from ${t.name}`),null}}),null);return null!==d&&e?.deserializer?e.deserializer(d,n,e.options):d}});return!1!==e?.sync&&(0,o.Rc)((()=>{const e=e=>{let t=!1;i.forEach((n=>{try{n!==e.storageArea&&e.key&&e.newValue!==n.getItem(e.key)&&(e.newValue?n.setItem(e.key,e.newValue):n.removeItem(e.key),t=!0)}catch(t){r(t,`Error synching api ${n.name} from storage event (${e.key}=${e.newValue})`)}})),t&&e.key&&a.get(e.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",e),(0,o.Ki)((()=>globalThis.removeEventListener("storage",e)))):(i.forEach((t=>t.addEventListener?.("storage",e))),(0,o.Ki)((()=>i.forEach((t=>t.removeEventListener?.("storage",e))))))})),[l,(t,n,o)=>{const l=e?.serializer?e.serializer(n,t,o??e.options):n,d=`${s}${t}`;i.forEach((e=>{try{e.getItem(d)!==l&&e.setItem(d,l)}catch(n){r(n,`Error setting ${s}${t} to ${l} in ${e.name}`)}}));const c=a.get(t);c&&c[1]()},{clear:()=>i.forEach((e=>{try{e.clear()}catch(t){r(t,`Error clearing ${e.name}`)}})),error:t,remove:e=>i.forEach((t=>{try{t.removeItem(`${s}${e}`)}catch(n){r(n,`Error removing ${s}${e} from ${t.name}`)}})),toJSON:()=>{const t={},n=(n,r)=>{if(!t.hasOwnProperty(n)){const o=r&&e?.deserializer?e.deserializer(r,n,e.options):r;o&&(t[n]=o)}};return i.forEach((e=>{if("function"==typeof e.getAll){let t;try{t=e.getAll()}catch(t){r(t,`Error getting all values from in ${e.name}`)}for(const e of t)n(e,t[e])}else{let o,i=0;try{for(;o=e.key(i++);)t.hasOwnProperty(o)||n(o,e.getItem(o))}catch(t){r(t,`Error getting all values from ${e.name}`)}}})),t}}]},g=e=>{if(!e)return"";let t="";for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:"boolean"==typeof r?`; ${n}`:`; ${n}=${r}`}return t},f=("function"==typeof(r={_cookies:[globalThis.document,"cookie"],getItem:e=>f._cookies[0][f._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,n)=>{const r=f.getItem(e);f._cookies[0][f._cookies[1]]=`${e}=${t}${g(n)}`;const o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:f});window.dispatchEvent(o)},removeItem:e=>{f._cookies[0][f._cookies[1]]=`${e}=deleted${g({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return f._cookies[0][f._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,((r,o)=>(!t&&o&&n++===e&&(t=o),""))),t},get length(){let e=0;return f._cookies[0][f._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,(t=>(e+=t?1:0,""))),e}}).clear||(r.clear=()=>{let e;for(;e=r.key(0);)r.removeItem(e)}),r),p=796,h="bottom",v="system",y=Object.keys(o.O$)[0],b=Object.keys(o.bs)[0],m=(0,o.q6)({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function w(){return(0,o.NT)(m)}var x=(0,o.q6)(void 0),k=e=>{const[t,n]=(0,o.n5)(null),r=()=>{const e=t();null!=e&&(e.close(),n(null))},i=(r,i)=>{if(null!=t())return;const s=window.open("","TSQD-Devtools-Panel",`width=${r},height=${i},popup`);if(!s)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");s.document.head.innerHTML="",s.document.body.innerHTML="",(0,o.MQ)(s.document),s.document.title="TanStack Query Devtools",s.document.body.style.margin="0",s.addEventListener("pagehide",(()=>{e.setLocalStore("pip_open","false"),n(null)})),[...(w().shadowDOMTarget||document).styleSheets].forEach((e=>{try{const t=[...e.cssRules].map((e=>e.cssText)).join(""),n=document.createElement("style"),r=e.ownerNode;let o="";r&&"id"in r&&(o=r.id),o&&n.setAttribute("id",o),n.textContent=t,s.document.head.appendChild(n)}catch(t){const n=document.createElement("link");if(null==e.href)return;n.rel="stylesheet",n.type=e.type,n.media=e.media.toString(),n.href=e.href,s.document.head.appendChild(n)}})),(0,o.z_)(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],s.document),e.setLocalStore("pip_open","true"),n(s)};(0,o.EH)((()=>{"true"!==(e.localStore.pip_open??"false")||e.disabled||i(Number(window.innerWidth),Number(e.localStore.height||500))})),(0,o.EH)((()=>{const e=(w().shadowDOMTarget||document).querySelector("#_goober"),n=t();if(e&&n){const t=new MutationObserver((()=>{const t=(w().shadowDOMTarget||n.document).querySelector("#_goober");t&&(t.textContent=e.textContent)}));t.observe(e,{childList:!0,subtree:!0,characterDataOldValue:!0}),(0,o.Ki)((()=>{t.disconnect()}))}}));const s=(0,o.To)((()=>({pipWindow:t(),requestPipWindow:i,closePipWindow:r,disabled:e.disabled??!1})));return(0,o.a0)(x.Provider,{value:s,get children(){return e.children}})},$=()=>(0,o.To)((()=>{const e=(0,o.NT)(x);if(!e)throw new Error("usePiPWindow must be used within a PiPProvider");return e()})),S=(0,o.q6)((()=>"dark"));function C(){return(0,o.NT)(S)}var q={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},E=Object.keys(q).join("|"),T=new RegExp(E,"g");function M(e,t,n){var r;if((n=n||{}).threshold=null!=(r=n.threshold)?r:1,!n.accessors){const r=F(e,t,n);return{rankedValue:e,rank:r,accessorIndex:-1,accessorThreshold:n.threshold,passed:r>=n.threshold}}const o=function(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const o=t[r],i=O(o),s=D(e,o);for(let e=0,t=s.length;e<t;e++)n.push({itemValue:s[e],attributes:i})}return n}(e,n.accessors),i={rankedValue:e,rank:0,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let e=0;e<o.length;e++){const r=o[e];let s=F(r.itemValue,t,n);const{minRanking:a,maxRanking:l,threshold:d=n.threshold}=r.attributes;s<a&&s>=1?s=a:s>l&&(s=l),s=Math.min(s,l),s>=d&&s>i.rank&&(i.rank=s,i.passed=!0,i.accessorIndex=e,i.accessorThreshold=d,i.rankedValue=r.itemValue)}return i}function F(e,t,n){return e=L(e,n),(t=L(t,n)).length>e.length?0:e===t?7:(e=e.toLowerCase())===(t=t.toLowerCase())?6:e.startsWith(t)?5:e.includes(` ${t}`)?4:e.includes(t)?3:1===t.length?0:function(e){let t="";return e.split(" ").forEach((e=>{e.split("-").forEach((e=>{t+=e.substr(0,1)}))})),t}(e).includes(t)?2:function(e,t){let n=0,r=0;function o(e,t,r){for(let o=r,i=t.length;o<i;o++)if(t[o]===e)return n+=1,o+1;return-1}const i=o(t[0],e,0);if(i<0)return 0;r=i;for(let n=1,i=t.length;n<i;n++)if(r=o(t[n],e,r),!(r>-1))return 0;return function(e){const r=1/e;return 1+n/t.length*r}(r-i)}(e,t)}function L(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=e.replace(T,(e=>q[e]))),e}function D(e,t){let n=t;"object"==typeof t&&(n=t.accessor);const r=n(e);return null==r?[]:Array.isArray(r)?r:[String(r)]}var z={maxRanking:1/0,minRanking:-1/0};function O(e){return"function"==typeof e?z:{...z,...e}}var A={data:""},I=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,K=/\/\*[^]*?\*\/|  +/g,P=/\n+/g,B=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+s+";":r+="f"==i[1]?B(s,i):i+"{"+B(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=B(s,t?t.replace(/([^,])+/g,(e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=B.p?B.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},R={},H=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+H(e[n]);return t}return e};function G(e){let t=this||{},n=e.call?e(t.p):e;return((e,t,n,r,o)=>{let i=H(e),s=R[i]||(R[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!R[s]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=I.exec(e.replace(K,""));)t[4]?r.shift():t[3]?(n=t[3].replace(P," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(P," ").trim();return r[0]})(e);R[s]=B(o?{["@keyframes "+s]:t}:t,n?"":"."+s)}let a=n&&R.g?R.g:null;return n&&(R.g=R[s]),l=R[s],d=t,c=r,(u=a)?d.data=d.data.replace(u,l):-1===d.data.indexOf(l)&&(d.data=c?l+d.data:d.data+l),s;var l,d,c,u})(n.unshift?n.raw?((e,t,n)=>e.reduce(((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":B(e,""):!1===e?"":e}return e+r+(null==i?"":i)}),""))(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,(r=t.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||A),t.g,t.o,t.k);var r}function U(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=U(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Y(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=U(e))&&(r&&(r+=" "),r+=t);return r}G.bind({g:1}),G.bind({k:1});var V=()=>{};function N(...e){return t=e,(...e)=>{for(const n of t)n&&n(...e)};var t}var j=o.S$?e=>null!=e&&"object"==typeof e&&"t"in e:e=>e instanceof Element;function W(e,t){if(t(e))return e;if("function"==typeof e&&!e.length)return W(e(),t);if(Array.isArray(e)){const n=[];for(const r of e){const e=W(r,t);e&&(Array.isArray(e)?n.push.apply(n,e):n.push(e))}return n.length?n:null}return null}function Q(e,t=j,n=j){const r=(0,o.To)(e),i=(0,o.To)((()=>W(r(),o.S$?n:t)));return i.toArray=()=>{const e=i();return Array.isArray(e)?e:e?[e]:[]},i}function _(e){requestAnimationFrame((()=>requestAnimationFrame(e)))}function Z(e,t,n,r){const{onBeforeEnter:o,onEnter:i,onAfterEnter:s}=t;function a(t){t&&t.target!==n||(n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),s?.(n))}o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask((()=>{if(!n.parentNode)return r?.();i?.(n,(()=>a()))})),_((()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))}))}function X(e,t,n,r){const{onBeforeExit:o,onExit:i,onAfterExit:s}=t;if(!n.parentNode)return r?.();function a(t){t&&t.target!==n||(r?.(),n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),s?.(n))}o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),i?.(n,(()=>a())),_((()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!i||i.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))}))}var J=e=>{const t=function(e){return(0,o.To)((()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}}))}(e);return function(e,t){const n=(0,o.vz)(e);if(o.S$){const e=n.slice();return()=>e}const{onChange:r}=t;let i=new Set(t.appear?void 0:n);const s=new WeakSet,[a,l]=(0,o.n5)([],{equals:!1}),[d]=(0,o.pn)(),c="remove"===t.exitMethod?V:e=>{l((t=>(t.push.apply(t,e),t)));for(const t of e)s.delete(t)},u="remove"===t.exitMethod?V:"keep-index"===t.exitMethod?(e,t,n)=>e.splice(n,0,t):(e,t)=>e.push(t);return(0,o.To)((t=>{const n=a(),l=e();if(l[o.WX],(0,o.vz)(d))return d(),t;if(n.length){const e=t.filter((e=>!n.includes(e)));return n.length=0,r({list:e,added:[],removed:[],unchanged:e,finishRemoved:c}),e}return(0,o.vz)((()=>{const e=new Set(l),n=l.slice(),o=[],a=[],d=[];for(const e of l)(i.has(e)?d:o).push(e);let g=!o.length;for(let r=0;r<t.length;r++){const o=t[r];e.has(o)||(s.has(o)||(a.push(o),s.add(o)),u(n,o,r)),g&&o!==n[r]&&(g=!1)}return!a.length&&g?t:(r({list:n,added:o,removed:a,unchanged:d,finishRemoved:c}),i=e,n)}))}),t.appear?[]:n.slice())}(Q((()=>e.children)).toArray,{appear:e.appear,exitMethod:"keep-index",onChange({added:n,removed:r,finishRemoved:o,list:i}){const s=t();for(const t of n)Z(s,e,t);const a=[];for(const e of i)e.isConnected&&(e instanceof HTMLElement||e instanceof SVGElement)&&a.push({el:e,rect:e.getBoundingClientRect()});queueMicrotask((()=>{const e=[];for(const{el:t,rect:n}of a)if(t.isConnected){const r=t.getBoundingClientRect(),o=n.left-r.left,i=n.top-r.top;(o||i)&&(t.style.transform=`translate(${o}px, ${i}px)`,t.style.transitionDuration="0s",e.push(t))}document.body.offsetHeight;for(const t of e){let e=function(n){(n.target===t||/transform$/.test(n.propertyName))&&(t.removeEventListener("transitionend",e),t.classList.remove(...s.move))};t.classList.add(...s.move),t.style.transform=t.style.transitionDuration="",t.addEventListener("transitionend",e)}}));for(const t of r)X(s,e,t,(()=>o([t])))}})},ee=Symbol("fallback");function te(e){for(const t of e)t.dispose()}function ne(e){const{by:t}=e;return(0,o.To)(function(e,t,n,r={}){if(o.S$){const t=e();let o=[];if(t&&t.length)for(let e=0,r=t.length;e<r;e++)o.push(n((()=>t[e]),(()=>e)));else r.fallback&&(o=[r.fallback()]);return()=>o}const i=new Map;return(0,o.Ki)((()=>te(i.values()))),()=>{const n=e()||[];return n[o.WX],(0,o.vz)((()=>{if(!n.length)return te(i.values()),i.clear(),r.fallback?[(0,o.Hr)((e=>(i.set(ee,{dispose:e}),r.fallback())))]:[];const e=new Array(n.length),a=i.get(ee);if(!i.size||a){a?.dispose(),i.delete(ee);for(let r=0;r<n.length;r++){const o=n[r];s(e,o,r,t(o,r))}return e}const l=new Set(i.keys());for(let r=0;r<n.length;r++){const o=n[r],a=t(o,r);l.delete(a);const d=i.get(a);d?(e[r]=d.mapped,d.setIndex?.(r),d.setItem((()=>o))):s(e,o,r,a)}for(const e of l)i.get(e)?.dispose(),i.delete(e);return e}))};function s(e,t,r,s){(0,o.Hr)((a=>{const[l,d]=(0,o.n5)(t),c={setItem:d,dispose:a};if(n.length>1){const[e,t]=(0,o.n5)(r);c.setIndex=t,c.mapped=n(l,e)}else c.mapped=n(l);i.set(s,c),e[r]=c.mapped}))}}((()=>e.each),"function"==typeof t?t:e=>e[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function re(e,t,n){if(o.S$)return;const r=new WeakMap,{observe:i,unobserve:c}=function(e,n){if(o.S$)return{observe:s,unobserve:s};const i=new ResizeObserver((e=>{for(const n of e){const{contentRect:e,target:o}=n,i=Math.round(e.width),s=Math.round(e.height),a=r.get(o);a&&a.width===i&&a.height===s||(t(e,o,n),r.set(o,{width:i,height:s}))}}));return(0,o.Ki)(i.disconnect.bind(i)),{observe:e=>i.observe(e,n),unobserve:i.unobserve.bind(i)}}(0,n);(0,o.EH)((t=>{const n=d(l(e)).filter(a);return function(e,t,n,r){const o=e.length,i=t.length;let s,a,l=0;if(i)if(o){for(;l<i&&t[l]===e[l];l++);for(s of(t=t.slice(l),e=e.slice(l),t))e.includes(s)||r(s);for(a of e)t.includes(a)||n(a)}else for(;l<i;l++)r(t[l]);else for(;l<o;l++)n(e[l])}(n,t,i,c),n}),[])}var oe=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function ie(e){const t={};let n;for(;n=oe.exec(e);)t[n[1]]=n[2];return t}function se(e,t){if("string"==typeof e){if("string"==typeof t)return`${e};${t}`;e=ie(e)}else"string"==typeof t&&(t=ie(t));return{...e,...t}}function ae(e,t){const n=[...e],r=n.indexOf(t);return-1!==r&&n.splice(r,1),n}function le(e){return"[object String]"===Object.prototype.toString.call(e)}function de(e){return t=>`${e()}-${t}`}function ce(e,t){return!!e&&(e===t||e.contains(t))}function ue(e,t=!1){const{activeElement:n}=ge(e);if(!n?.nodeName)return null;if(fe(n)&&n.contentDocument)return ue(n.contentDocument.body,t);if(t){const e=n.getAttribute("aria-activedescendant");if(e){const t=ge(n).getElementById(e);if(t)return t}}return n}function ge(e){return e?e.ownerDocument||e:document}function fe(e){return"IFRAME"===e.tagName}var pe=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(pe||{});function he(e){return"undefined"!=typeof window&&null!=window.navigator&&e.test(window.navigator.userAgentData?.platform||window.navigator.platform)}function ve(){return he(/^Mac/i)}function ye(e,t){return t&&("function"==typeof t?t(e):t[0](t[1],e)),e?.defaultPrevented}function be(e){return t=>{for(const n of e)ye(t,n)}}function me(e){return ve()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function we(e){if(e)if(function(){if(null==xe){xe=!1;try{document.createElement("div").focus({get preventScroll(){return xe=!0,!0}})}catch(e){}}return xe}())e.focus({preventScroll:!0});else{const t=function(e){let t=e.parentNode;const n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(const{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}var xe=null,ke=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],$e=[...ke,'[tabindex]:not([tabindex="-1"]):not([disabled])'],Se=ke.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Ce=$e.join(':not([hidden]):not([tabindex="-1"]),');function qe(e,t){const n=Array.from(e.querySelectorAll(Se)).filter(Ee);return t&&Ee(e)&&n.unshift(e),n.forEach(((e,t)=>{if(fe(e)&&e.contentDocument){const r=qe(e.contentDocument.body,!1);n.splice(t,1,...r)}})),n}function Ee(e){return Te(e)&&!function(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}(e)}function Te(e){return e.matches(Se)&&Me(e)}function Me(e,t){return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const{display:t,visibility:n}=e.style;let r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){if(!e.ownerDocument.defaultView)return r;const{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:o}=t(e);r="none"!==n&&"hidden"!==o&&"collapse"!==o}return r}(e)&&function(e,t){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!t||"SUMMARY"===t.nodeName||e.hasAttribute("open"))}(e,t)&&(!e.parentElement||Me(e.parentElement,e))}function Fe(e){for(;e&&!Le(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Le(e){const t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function De(){}function ze(e,t){return(0,o.v6)(e,t)}var Oe=new Map,Ae=new Set;function Ie(){if("undefined"==typeof window)return;const e=t=>{if(!t.target)return;const n=Oe.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),Oe.delete(t.target)),0===Oe.size)){for(const e of Ae)e();Ae.clear()}};document.body.addEventListener("transitionrun",(t=>{if(!t.target)return;let n=Oe.get(t.target);n||(n=new Set,Oe.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}function Ke(e,t){const n=Pe(e,t,"left"),r=Pe(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight;let s=e.scrollLeft,a=e.scrollTop;const l=s+e.offsetWidth,d=a+e.offsetHeight;n<=s?s=n:n+o>l&&(s+=n+o-l),r<=a?a=r:r+i>d&&(a+=r+i-d),e.scrollLeft=s,e.scrollTop=a}function Pe(e,t,n){const r="left"===n?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}"undefined"!=typeof document&&("loading"!==document.readyState?Ie():document.addEventListener("DOMContentLoaded",Ie));var Be={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Re(e){return t=>(e(t),()=>e(void 0))}function He(e,t){const[n,r]=(0,o.n5)(Ge(t?.()));return(0,o.EH)((()=>{r(e()?.tagName.toLowerCase()||Ge(t?.()))})),n}function Ge(e){return le(e)?e:void 0}function Ue(e){const[t,n]=(0,o.rg)(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return(0,o.a0)(o.Qi,(0,o.v6)(n,{get component(){return t.as}}))}var Ye=["id","name","validationState","required","disabled","readOnly"],Ve=(0,o.q6)();function Ne(){const e=(0,o.NT)(Ve);if(void 0===e)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function je(e){const t=Ne(),n=ze({id:t.generateId("description")},e);return(0,o.EH)((()=>(0,o.Ki)(t.registerDescription(n.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"div"},(()=>t.dataset()),n))}function We(e){const t=Ne(),n=ze({id:t.generateId("error-message")},e),[r,i]=(0,o.rg)(n,["forceMount"]),s=()=>"invalid"===t.validationState();return(0,o.EH)((()=>{s()&&(0,o.Ki)(t.registerErrorMessage(i.id))})),(0,o.a0)(o.wv,{get when(){return r.forceMount||s()},get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div"},(()=>t.dataset()),i))}})}function Qe(e){let t;const n=Ne(),r=ze({id:n.generateId("label")},e),[i,s]=(0,o.rg)(r,["ref"]),a=He((()=>t),(()=>"label"));return(0,o.EH)((()=>(0,o.Ki)(n.registerLabel(s.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"label",ref(e){const n=N((e=>t=e),i.ref);"function"==typeof n&&n(e)},get for(){return(0,o.To)((()=>"label"===a()))()?n.fieldId():void 0}},(()=>n.dataset()),s))}function _e(e){const[t,n]=(0,o.n5)(e.defaultValue?.()),r=(0,o.To)((()=>void 0!==e.value?.())),i=(0,o.To)((()=>r()?e.value?.():t()));return[i,t=>{(0,o.vz)((()=>{const o=function(e,...t){return"function"==typeof e?e(...t):e}(t,i());return Object.is(o,i())||(r()||n(o),e.onChange?.(o)),o}))}]}function Ze(e){const[t,n]=_e(e);return[()=>t()??!1,n]}var Xe=Object.defineProperty,Je=(e,t)=>{for(var n in t)Xe(e,n,{get:t[n],enumerable:!0})},et=(0,o.q6)();function tt(){return(0,o.NT)(et)}function nt(e,t){return Boolean(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function rt(e,t){const n=function(e){const t=e.map(((e,t)=>[t,e]));let n=!1;return t.sort((([e,t],[r,o])=>{const i=t.ref(),s=o.ref();return i===s?0:i&&s?nt(i,s)?(e>r&&(n=!0),-1):(e<r&&(n=!0),1):0})),n?t.map((([e,t])=>t)):e}(e);e!==n&&t(n)}function ot(e={}){const[t,n]=function(e){const[t,n]=_e(e);return[()=>t()??[],n]}({value:()=>l(e.items),onChange:t=>e.onItemsChange?.(t)});!function(e,t){if("function"!=typeof IntersectionObserver)return void function(e,t){(0,o.EH)((()=>{const n=setTimeout((()=>{rt(e(),t)}));(0,o.Ki)((()=>clearTimeout(n)))}))}(e,t);let n=[];(0,o.EH)((()=>{const r=function(e){const t=e[0],n=e[e.length-1]?.ref();let r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return ge(r).body}(e()),i=new IntersectionObserver((()=>{const r=!!n.length;n=e(),r&&rt(e(),t)}),{root:r});for(const t of e()){const e=t.ref();e&&i.observe(e)}(0,o.Ki)((()=>i.disconnect()))}))}(t,n);const r=e=>(n((t=>{const n=function(e,t){const n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){const t=e[r]?.ref();if(t&&nt(t,n))return r+1}return 0}(t,e);return function(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}(t,e,n)})),()=>{n((t=>{const n=t.filter((t=>t.ref()!==e.ref()));return t.length===n.length?t:n}))});return{DomCollectionProvider:e=>(0,o.a0)(et.Provider,{value:{registerItem:r},get children(){return e.children}})}}function it(e){let t=e.startIndex??0;const n=e.startLevel??0,r=[],o=t=>{if(null==t)return"";const n=e.getKey??"key",r=le(n)?t[n]:n(t);return null!=r?String(r):""},i=t=>{if(null==t)return"";const n=e.getTextValue??"textValue",r=le(n)?t[n]:n(t);return null!=r?String(r):""},s=t=>{if(null==t)return!1;const n=e.getDisabled??"disabled";return(le(n)?t[n]:n(t))??!1},a=t=>{if(null!=t)return le(e.getSectionChildren)?t[e.getSectionChildren]:e.getSectionChildren?.(t)};for(const l of e.dataSource)if(le(l)||"number"==typeof l)r.push({type:"item",rawValue:l,key:String(l),textValue:String(l),disabled:s(l),level:n,index:t}),t++;else if(null!=a(l)){r.push({type:"section",rawValue:l,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;const o=a(l)??[];if(o.length>0){const i=it({dataSource:o,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...i),t+=i.length}}else r.push({type:"item",rawValue:l,key:o(l),textValue:i(l),disabled:s(l),level:n,index:t}),t++;return r}function st(e,t=[]){return(0,o.To)((()=>{const n=it({dataSource:l(e.dataSource),getKey:l(e.getKey),getTextValue:l(e.getTextValue),getDisabled:l(e.getDisabled),getSectionChildren:l(e.getSectionChildren)});for(let e=0;e<t.length;e++)t[e]();return e.factory(n)}))}var at=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),lt=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function dt(e){return function(e){if(Intl.Locale){const t=new Intl.Locale(e).maximize().script??"";return at.has(t)}const t=e.split("-")[0];return lt.has(t)}(e)?"rtl":"ltr"}function ct(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:dt(e)}}var ut=ct(),gt=new Set;function ft(){ut=ct();for(const e of gt)e(ut)}var pt=(0,o.q6)();function ht(){const e=function(){const e={locale:"en-US",direction:"ltr"},[t,n]=(0,o.n5)(ut),r=(0,o.To)((()=>o.S$?e:t()));return(0,o.Rc)((()=>{0===gt.size&&window.addEventListener("languagechange",ft),gt.add(n),(0,o.Ki)((()=>{gt.delete(n),0===gt.size&&window.removeEventListener("languagechange",ft)}))})),{locale:()=>r().locale,direction:()=>r().direction}}();return(0,o.NT)(pt)||e}var vt=new Map,yt=class e extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function bt(e){return ve()||he(/^iPhone/i)||he(/^iPad/i)||ve()&&navigator.maxTouchPoints>1?e.altKey:e.ctrlKey}function mt(e){return ve()?e.metaKey:e.ctrlKey}function wt(e){return new yt(e)}function xt(e,t,n){const r={selectOnFocus:()=>"replace"===l(e.selectionManager).selectionBehavior()},i=(0,o.v6)(r,e),s=()=>t(),{direction:a}=ht();let u={top:0,left:0};!function(e,t,n,r){if(o.S$)return;const i=()=>{d(l(e)).forEach((e=>{e&&d(l(t)).forEach((t=>function(e,t,n,r){return e.addEventListener(t,n,r),c(e.removeEventListener.bind(e,t,n,r))}(e,t,n,r)))}))};"function"==typeof e?(0,o.EH)(i):(0,o.gb)(i)}((()=>l(i.isVirtualized)?void 0:s()),"scroll",(()=>{const e=s();e&&(u={top:e.scrollTop,left:e.scrollLeft})}));const{typeSelectHandlers:g}=function(e){const[t,n]=(0,o.n5)(""),[r,i]=(0,o.n5)(-1);return{typeSelectHandlers:{onKeyDown:o=>{if(l(e.isDisabled))return;const s=l(e.keyboardDelegate),a=l(e.selectionManager);if(!s.getKeyForSearch)return;const d=function(e){return 1!==e.length&&/^[A-Z]/i.test(e)?"":e}(o.key);if(!d||o.ctrlKey||o.metaKey)return;" "===d&&t().trim().length>0&&(o.preventDefault(),o.stopPropagation());let c=n((e=>e+d)),u=s.getKeyForSearch(c,a.focusedKey())??s.getKeyForSearch(c);null==u&&function(e){return e.split("").every((t=>t===e[0]))}(c)&&(c=c[0],u=s.getKeyForSearch(c,a.focusedKey())??s.getKeyForSearch(c)),null!=u&&(a.setFocusedKey(u),e.onTypeSelect?.(u)),clearTimeout(r()),i(window.setTimeout((()=>n("")),500))}}}}({isDisabled:()=>l(i.disallowTypeAhead),keyboardDelegate:()=>l(i.keyboardDelegate),selectionManager:()=>l(i.selectionManager)}),f=()=>l(i.orientation)??"vertical",p=()=>{const e=l(i.autoFocus);if(!e)return;const n=l(i.selectionManager),r=l(i.keyboardDelegate);let o;"first"===e&&(o=r.getFirstKey?.()),"last"===e&&(o=r.getLastKey?.());const s=n.selectedKeys();s.size&&(o=s.values().next().value),n.setFocused(!0),n.setFocusedKey(o);const a=t();a&&null==o&&!l(i.shouldUseVirtualFocus)&&we(a)};return(0,o.Rc)((()=>{i.deferAutoFocus?setTimeout(p,0):p()})),(0,o.EH)((0,o.on)([s,()=>l(i.isVirtualized),()=>l(i.selectionManager).focusedKey()],(e=>{const[t,n,r]=e;if(n)r&&i.scrollToKey?.(r);else if(r&&t){const e=t.querySelector(`[data-key="${r}"]`);e&&Ke(t,e)}}))),{tabIndex:(0,o.To)((()=>{if(!l(i.shouldUseVirtualFocus))return null==l(i.selectionManager).focusedKey()?0:-1})),onKeyDown:e=>{ye(e,g.onKeyDown),e.altKey&&"Tab"===e.key&&e.preventDefault();const n=t();if(!n?.contains(e.target))return;const r=l(i.selectionManager),o=l(i.selectOnFocus),s=t=>{null!=t&&(r.setFocusedKey(t),e.shiftKey&&"multiple"===r.selectionMode()?r.extendSelection(t):o&&!bt(e)&&r.replaceSelection(t))},d=l(i.keyboardDelegate),c=l(i.shouldFocusWrap),u=r.focusedKey();switch(e.key){case"vertical"===f()?"ArrowDown":"ArrowRight":if(d.getKeyBelow){let t;e.preventDefault(),t=null!=u?d.getKeyBelow(u):d.getFirstKey?.(),null==t&&c&&(t=d.getFirstKey?.(u)),s(t)}break;case"vertical"===f()?"ArrowUp":"ArrowLeft":if(d.getKeyAbove){let t;e.preventDefault(),t=null!=u?d.getKeyAbove(u):d.getLastKey?.(),null==t&&c&&(t=d.getLastKey?.(u)),s(t)}break;case"vertical"===f()?"ArrowLeft":"ArrowUp":if(d.getKeyLeftOf){e.preventDefault();const t="rtl"===a();let n;n=null!=u?d.getKeyLeftOf(u):t?d.getFirstKey?.():d.getLastKey?.(),s(n)}break;case"vertical"===f()?"ArrowRight":"ArrowDown":if(d.getKeyRightOf){e.preventDefault();const t="rtl"===a();let n;n=null!=u?d.getKeyRightOf(u):t?d.getLastKey?.():d.getFirstKey?.(),s(n)}break;case"Home":if(d.getFirstKey){e.preventDefault();const t=d.getFirstKey(u,mt(e));null!=t&&(r.setFocusedKey(t),mt(e)&&e.shiftKey&&"multiple"===r.selectionMode()?r.extendSelection(t):o&&r.replaceSelection(t))}break;case"End":if(d.getLastKey){e.preventDefault();const t=d.getLastKey(u,mt(e));null!=t&&(r.setFocusedKey(t),mt(e)&&e.shiftKey&&"multiple"===r.selectionMode()?r.extendSelection(t):o&&r.replaceSelection(t))}break;case"PageDown":d.getKeyPageBelow&&null!=u&&(e.preventDefault(),s(d.getKeyPageBelow(u)));break;case"PageUp":d.getKeyPageAbove&&null!=u&&(e.preventDefault(),s(d.getKeyPageAbove(u)));break;case"a":mt(e)&&"multiple"===r.selectionMode()&&!0!==l(i.disallowSelectAll)&&(e.preventDefault(),r.selectAll());break;case"Escape":e.defaultPrevented||(e.preventDefault(),l(i.disallowEmptySelection)||r.clearSelection());break;case"Tab":if(!l(i.allowsTabNavigation)){if(e.shiftKey)n.focus();else{const e=function(e,t){const n=t?.tabbable?Ce:Se,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>t?.from?.contains(e)?NodeFilter.FILTER_REJECT:!e.matches(n)||!Me(e)||t?.accept&&!t.accept(e)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT});return t?.from&&(r.currentNode=t.from),r}(n,{tabbable:!0});let t,r;do{r=e.lastChild(),r&&(t=r)}while(r);t&&!t.contains(document.activeElement)&&we(t)}break}}},onMouseDown:e=>{s()===e.target&&e.preventDefault()},onFocusIn:e=>{const t=l(i.selectionManager),n=l(i.keyboardDelegate),r=l(i.selectOnFocus);if(t.isFocused())e.currentTarget.contains(e.target)||t.setFocused(!1);else if(e.currentTarget.contains(e.target))if(t.setFocused(!0),null==t.focusedKey()){const o=e=>{null!=e&&(t.setFocusedKey(e),r&&t.replaceSelection(e))},i=e.relatedTarget;i&&e.currentTarget.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?o(t.lastSelectedKey()??n.getLastKey?.()):o(t.firstSelectedKey()??n.getFirstKey?.())}else if(!l(i.isVirtualized)){const e=s();if(e){e.scrollTop=u.top,e.scrollLeft=u.left;const n=e.querySelector(`[data-key="${t.focusedKey()}"]`);n&&(we(n),Ke(e,n))}}},onFocusOut:e=>{const t=l(i.selectionManager);e.currentTarget.contains(e.relatedTarget)||t.setFocused(!1)}}}function kt(e,t){const n=()=>l(e.selectionManager),r=()=>l(e.key),i=()=>l(e.shouldUseVirtualFocus),s=e=>{"none"!==n().selectionMode()&&("single"===n().selectionMode()?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):e?.shiftKey?n().extendSelection(r()):"toggle"===n().selectionBehavior()||mt(e)||"pointerType"in e&&"touch"===e.pointerType?n().toggleSelection(r()):n().replaceSelection(r()))},a=()=>l(e.disabled)||n().isDisabled(r()),d=()=>!a()&&n().canSelectItem(r());let c=null;const u=(0,o.To)((()=>{if(!i()&&!a())return r()===n().focusedKey()?0:-1})),g=(0,o.To)((()=>l(e.virtualized)?void 0:r()));return(0,o.EH)((0,o.on)([t,r,i,()=>n().focusedKey(),()=>n().isFocused()],(([t,n,r,o,i])=>{t&&n===o&&i&&!r&&document.activeElement!==t&&(e.focus?e.focus():we(t))}))),{isSelected:()=>n().isSelected(r()),isDisabled:a,allowsSelection:d,tabIndex:u,dataKey:g,onPointerDown:t=>{d()&&(c=t.pointerType,"mouse"!==t.pointerType||0!==t.button||l(e.shouldSelectOnPressUp)||s(t))},onPointerUp:t=>{d()&&"mouse"===t.pointerType&&0===t.button&&l(e.shouldSelectOnPressUp)&&l(e.allowsDifferentPressOrigin)&&s(t)},onClick:t=>{d()&&(l(e.shouldSelectOnPressUp)&&!l(e.allowsDifferentPressOrigin)||"mouse"!==c)&&s(t)},onKeyDown:e=>{d()&&["Enter"," "].includes(e.key)&&(bt(e)?n().toggleSelection(r()):s(e))},onMouseDown:e=>{a()&&e.preventDefault()},onFocus:e=>{const o=t();i()||a()||!o||e.target===o&&n().setFocusedKey(r())}}}var $t,St=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(null==e||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if("none"===this.state.selectionMode())return!1;const t=this.getKey(e);return null!=t&&this.state.selectedKeys().has(t)}isEmpty(){return 0===this.state.selectedKeys().size}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every((t=>e.has(t)))}firstSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=null!=n?.index&&null!=e?.index&&n.index<e.index;e&&!r||(e=n)}return e?.key}lastSelectedKey(){let e;for(const t of this.state.selectedKeys()){const n=this.collection().getItem(t),r=null!=n?.index&&null!=e?.index&&n.index>e.index;e&&!r||(e=n)}return e?.key}extendSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode())return void this.replaceSelection(e);const t=this.getKey(e);if(null==t)return;const n=this.state.selectedKeys(),r=n.anchorKey||t,o=new yt(n,r,t);for(const e of this.getKeyRange(r,n.currentKey||t))o.delete(e);for(const e of this.getKeyRange(t,r))this.canSelectItem(e)&&o.add(e);this.state.setSelectedKeys(o)}getKeyRange(e,t){const n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?null!=n.index&&null!=r.index&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){const n=[];let r=e;for(;null!=r;){const e=this.collection().getItem(r);if(e&&"item"===e.type&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){const t=this.collection().getItem(e);return t?t&&"item"===t.type?t.key:null:e}toggleSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode()&&!this.isSelected(e))return void this.replaceSelection(e);const t=this.getKey(e);if(null==t)return;const n=new yt(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),this.disallowEmptySelection()&&0===n.size||this.state.setSelectedKeys(n)}replaceSelection(e){if("none"===this.selectionMode())return;const t=this.getKey(e);if(null==t)return;const n=this.canSelectItem(t)?new yt([t],t,t):new yt;this.state.setSelectedKeys(n)}setSelectedKeys(e){if("none"===this.selectionMode())return;const t=new yt;for(const n of e){const e=this.getKey(n);if(null!=e&&(t.add(e),"single"===this.selectionMode()))break}this.state.setSelectedKeys(t)}selectAll(){"multiple"===this.selectionMode()&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new yt)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode()&&("single"===this.selectionMode()?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior()||t&&"touch"===t.pointerType?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const t=this.selectedKeys();if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;for(const n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode())return!1;const t=this.collection().getItem(e);return null!=t&&!t.disabled}isDisabled(e){const t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){const e=[];return(t=>{for(;null!=t;){if(this.canSelectItem(t)){const n=this.collection().getItem(t);if(!n)continue;"item"===n.type&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},Ct=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(const t of e)this.keyMap.set(t.key,t);if(0===this.keyMap.size)return;let t,n=0;for(const[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),"item"===r.type&&(r.index=n++),t=r,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}},qt=e=>"function"==typeof e?e():e,Et=e=>{const t=(0,o.To)((()=>{const t=qt(e.element);if(t)return getComputedStyle(t)})),n=()=>t()?.animationName??"none",[r,i]=(0,o.n5)(qt(e.show)?"present":"hidden");let s="none";return(0,o.EH)((r=>{const a=qt(e.show);return(0,o.vz)((()=>{if(r===a)return a;const e=s,o=n();a?i("present"):"none"===o||"none"===t()?.display?i("hidden"):i(!0===r&&e!==o?"hiding":"hidden")})),a})),(0,o.EH)((()=>{const t=qt(e.element);if(!t)return;const a=e=>{e.target===t&&(s=n())},l=e=>{const o=n().includes(e.animationName);e.target===t&&o&&"hiding"===r()&&i("hidden")};t.addEventListener("animationstart",a),t.addEventListener("animationcancel",l),t.addEventListener("animationend",l),(0,o.Ki)((()=>{t.removeEventListener("animationstart",a),t.removeEventListener("animationcancel",l),t.removeEventListener("animationend",l)}))})),{present:()=>"present"===r()||"hiding"===r(),state:r}},Tt="data-kb-top-layer",Mt=!1,Ft=[];function Lt(e){return Ft.findIndex((t=>t.node===e))}function Dt(){return Ft.filter((e=>e.isPointerBlocking))}function zt(){return Dt().length>0}function Ot(e){const t=Lt([...Dt()].slice(-1)[0]?.node);return Lt(e)<t}var At={layers:Ft,isTopMostLayer:function(e){return Ft[Ft.length-1].node===e},hasPointerBlockingLayer:zt,isBelowPointerBlockingLayer:Ot,addLayer:function(e){Ft.push(e)},removeLayer:function(e){const t=Lt(e);t<0||Ft.splice(t,1)},indexOf:Lt,find:function(e){return Ft[Lt(e)]},assignPointerEventToLayers:function(){for(const{node:e}of Ft)e.style.pointerEvents=Ot(e)?"none":"auto"},disableBodyPointerEvents:function(e){if(zt()&&!Mt){const t=ge(e);$t=document.body.style.pointerEvents,t.body.style.pointerEvents="none",Mt=!0}},restoreBodyPointerEvents:function(e){if(zt())return;const t=ge(e);t.body.style.pointerEvents=$t,0===t.body.style.length&&t.body.removeAttribute("style"),Mt=!1}};Je({},{Button:()=>Pt,Root:()=>Kt});var It=["button","color","file","image","reset","submit"];function Kt(e){let t;const n=ze({type:"button"},e),[r,i]=(0,o.rg)(n,["ref","type","disabled"]),s=He((()=>t),(()=>"button")),a=(0,o.To)((()=>{const e=s();return null!=e&&function(e){const t=e.tagName.toLowerCase();return"button"===t||!("input"!==t||!e.type)&&-1!==It.indexOf(e.type)}({tagName:e,type:r.type})})),l=(0,o.To)((()=>"input"===s())),d=(0,o.To)((()=>"a"===s()&&null!=t?.getAttribute("href")));return(0,o.a0)(Ue,(0,o.v6)({as:"button",ref(e){const n=N((e=>t=e),r.ref);"function"==typeof n&&n(e)},get type(){return a()||l()?r.type:void 0},get role(){return a()||d()?void 0:"button"},get tabIndex(){return a()||d()||r.disabled?void 0:0},get disabled(){return a()||l()?r.disabled:void 0},get"aria-disabled"(){return!(a()||l()||!r.disabled)||void 0},get"data-disabled"(){return r.disabled?"":void 0}},i))}var Pt=Kt,Bt=["top","right","bottom","left"],Rt=Math.min,Ht=Math.max,Gt=Math.round,Ut=Math.floor,Yt=e=>({x:e,y:e}),Vt={left:"right",right:"left",bottom:"top",top:"bottom"},Nt={start:"end",end:"start"};function jt(e,t,n){return Ht(e,Rt(t,n))}function Wt(e,t){return"function"==typeof e?e(t):e}function Qt(e){return e.split("-")[0]}function _t(e){return e.split("-")[1]}function Zt(e){return"x"===e?"y":"x"}function Xt(e){return"y"===e?"height":"width"}function Jt(e){return["top","bottom"].includes(Qt(e))?"y":"x"}function en(e){return Zt(Jt(e))}function tn(e){return e.replace(/start|end/g,(e=>Nt[e]))}function nn(e){return e.replace(/left|right|bottom|top/g,(e=>Vt[e]))}function rn(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function on(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function sn(e,t,n){let{reference:r,floating:o}=e;const i=Jt(t),s=en(t),a=Xt(s),l=Qt(t),d="y"===i,c=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,g=r[a]/2-o[a]/2;let f;switch(l){case"top":f={x:c,y:r.y-o.height};break;case"bottom":f={x:c,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:u};break;case"left":f={x:r.x-o.width,y:u};break;default:f={x:r.x,y:r.y}}switch(_t(t)){case"start":f[s]-=g*(n&&d?-1:1);break;case"end":f[s]+=g*(n&&d?-1:1)}return f}async function an(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:s,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=Wt(t,e),p=rn(f),h=a[g?"floating"===u?"reference":"floating":u],v=on(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(h)))||n?h:h.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:d,rootBoundary:c,strategy:l})),y="floating"===u?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,b=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),m=await(null==i.isElement?void 0:i.isElement(b))&&await(null==i.getScale?void 0:i.getScale(b))||{x:1,y:1},w=on(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:b,strategy:l}):y);return{top:(v.top-w.top+p.top)/m.y,bottom:(w.bottom-v.bottom+p.bottom)/m.y,left:(v.left-w.left+p.left)/m.x,right:(w.right-v.right+p.right)/m.x}}function ln(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function dn(e){return Bt.some((t=>e[t]>=0))}function cn(e){return fn(e)?(e.nodeName||"").toLowerCase():"#document"}function un(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function gn(e){var t;return null==(t=(fn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function fn(e){return e instanceof Node||e instanceof un(e).Node}function pn(e){return e instanceof Element||e instanceof un(e).Element}function hn(e){return e instanceof HTMLElement||e instanceof un(e).HTMLElement}function vn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof un(e).ShadowRoot)}function yn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=$n(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function bn(e){return["table","td","th"].includes(cn(e))}function mn(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function wn(e){const t=xn(),n=pn(e)?$n(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function xn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function kn(e){return["html","body","#document"].includes(cn(e))}function $n(e){return un(e).getComputedStyle(e)}function Sn(e){return pn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Cn(e){if("html"===cn(e))return e;const t=e.assignedSlot||e.parentNode||vn(e)&&e.host||gn(e);return vn(t)?t.host:t}function qn(e){const t=Cn(e);return kn(t)?e.ownerDocument?e.ownerDocument.body:e.body:hn(t)&&yn(t)?t:qn(t)}function En(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=qn(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),s=un(o);return i?t.concat(s,s.visualViewport||[],yn(o)?o:[],s.frameElement&&n?En(s.frameElement):[]):t.concat(o,En(o,[],n))}function Tn(e){const t=$n(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=hn(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,a=Gt(n)!==i||Gt(r)!==s;return a&&(n=i,r=s),{width:n,height:r,$:a}}function Mn(e){return pn(e)?e:e.contextElement}function Fn(e){const t=Mn(e);if(!hn(t))return Yt(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Tn(t);let s=(i?Gt(n.width):n.width)/r,a=(i?Gt(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}var Ln=Yt(0);function Dn(e){const t=un(e);return xn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Ln}function zn(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Mn(e);let s=Yt(1);t&&(r?pn(r)&&(s=Fn(r)):s=Fn(e));const a=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==un(e))&&t}(i,n,r)?Dn(i):Yt(0);let l=(o.left+a.x)/s.x,d=(o.top+a.y)/s.y,c=o.width/s.x,u=o.height/s.y;if(i){const e=un(i),t=r&&pn(r)?un(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Fn(o),t=o.getBoundingClientRect(),r=$n(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,s=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,d*=e.y,c*=e.x,u*=e.y,l+=i,d+=s,n=un(o),o=n.frameElement}}return on({width:c,height:u,x:l,y:d})}function On(e){return zn(gn(e)).left+Sn(e).scrollLeft}function An(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=un(e),r=gn(e),o=n.visualViewport;let i=r.clientWidth,s=r.clientHeight,a=0,l=0;if(o){i=o.width,s=o.height;const e=xn();(!e||e&&"fixed"===t)&&(a=o.offsetLeft,l=o.offsetTop)}return{width:i,height:s,x:a,y:l}}(e,n);else if("document"===t)r=function(e){const t=gn(e),n=Sn(e),r=e.ownerDocument.body,o=Ht(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Ht(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+On(e);const a=-n.scrollTop;return"rtl"===$n(r).direction&&(s+=Ht(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:a}}(gn(e));else if(pn(t))r=function(e,t){const n=zn(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=hn(e)?Fn(e):Yt(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Dn(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return on(r)}function In(e,t){const n=Cn(e);return!(n===t||!pn(n)||kn(n))&&("fixed"===$n(n).position||In(n,t))}function Kn(e,t,n){const r=hn(t),o=gn(t),i="fixed"===n,s=zn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const l=Yt(0);if(r||!r&&!i)if(("body"!==cn(t)||yn(o))&&(a=Sn(t)),r){const e=zn(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=On(o));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Pn(e){return"static"===$n(e).position}function Bn(e,t){return hn(e)&&"fixed"!==$n(e).position?t?t(e):e.offsetParent:null}function Rn(e,t){const n=un(e);if(mn(e))return n;if(!hn(e)){let t=Cn(e);for(;t&&!kn(t);){if(pn(t)&&!Pn(t))return t;t=Cn(t)}return n}let r=Bn(e,t);for(;r&&bn(r)&&Pn(r);)r=Bn(r,t);return r&&kn(r)&&Pn(r)&&!wn(r)?n:r||function(e){let t=Cn(e);for(;hn(t)&&!kn(t);){if(wn(t))return t;if(mn(t))return null;t=Cn(t)}return null}(e)||n}var Hn={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,s=gn(r),a=!!t&&mn(t.floating);if(r===s||a&&i)return n;let l={scrollLeft:0,scrollTop:0},d=Yt(1);const c=Yt(0),u=hn(r);if((u||!u&&!i)&&(("body"!==cn(r)||yn(s))&&(l=Sn(r)),hn(r))){const e=zn(r);d=Fn(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-l.scrollLeft*d.x+c.x,y:n.y*d.y-l.scrollTop*d.y+c.y}},getDocumentElement:gn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?mn(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=En(e,[],!1).filter((e=>pn(e)&&"body"!==cn(e))),o=null;const i="fixed"===$n(e).position;let s=i?Cn(e):e;for(;pn(s)&&!kn(s);){const t=$n(s),n=wn(s);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||yn(s)&&!n&&In(e,s))?r=r.filter((e=>e!==s)):o=t,s=Cn(s)}return t.set(e,r),r}(t,this._c):[].concat(n),r],s=i[0],a=i.reduce(((e,n)=>{const r=An(t,n,o);return e.top=Ht(r.top,e.top),e.right=Rt(r.right,e.right),e.bottom=Rt(r.bottom,e.bottom),e.left=Ht(r.left,e.left),e}),An(t,s,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:Rn,getElementRects:async function(e){const t=this.getOffsetParent||Rn,n=this.getDimensions,r=await n(e.floating);return{reference:Kn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Tn(e);return{width:t,height:n}},getScale:Fn,isElement:pn,isRTL:function(e){return"rtl"===$n(e).direction}};var Gn=(0,o.q6)();function Un(){const e=(0,o.NT)(Gn);if(void 0===e)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Yn=(0,o.vs)('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),Vn={top:180,right:-90,bottom:0,left:90};function Nn(e){const t=Un(),n=ze({size:30},e),[r,i]=(0,o.rg)(n,["ref","style","size"]),s=()=>t.currentPlacement().split("-")[0],a=function(e){const[t,n]=(0,o.n5)();return(0,o.EH)((()=>{const t=e();var r;t&&n((r=t,ge(r).defaultView||window).getComputedStyle(t))})),t}(t.contentRef);return(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const n=N(t.setArrowRef,r.ref);"function"==typeof n&&n(e)},"aria-hidden":"true",get style(){return se({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:a()?.getPropertyValue("background-color")||"none",stroke:a()?.getPropertyValue(`border-${s()}-color`)||"none","stroke-width":2*Number.parseInt(a()?.getPropertyValue(`border-${s()}-width`)||"0px")*(30/r.size)},r.style)}},i,{get children(){const e=Yn(),t=e.firstChild;return(0,o.gb)((()=>(0,o.Bq)(t,"transform",`rotate(${Vn[s()]} 15 15) translate(0 2)`))),e}}))}function jn(e){const{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if("function"==typeof DOMRect)return new DOMRect(t,n,r,o);const i={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return{...i,toJSON:()=>i}}function Wn(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Qn={top:"bottom",right:"left",bottom:"top",left:"right"},_n=Object.assign((function(e){const t=ze({getAnchorRect:e=>e?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=(0,o.n5)(),[i,s]=(0,o.n5)(),[a,l]=(0,o.n5)(t.placement),d=()=>{return e=t.anchorRef?.(),n=t.getAnchorRect,{contextElement:e,getBoundingClientRect:()=>{const t=n(e);return t?jn(t):e?e.getBoundingClientRect():jn()}};var e,n},{direction:c}=ht();async function u(){const e=d(),r=n(),o=i();if(!e||!r)return;const s=(o?.clientHeight||0)/2,a="number"==typeof t.gutter?t.gutter+s:t.gutter??s;r.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),e.getBoundingClientRect();const u=[(g=({placement:e})=>{const n=!!e.split("-")[1];return{mainAxis:a,crossAxis:n?void 0:t.shift,alignmentAxis:t.shift}},void 0===g&&(g=0),{name:"offset",options:g,async fn(e){var t,n;const{x:r,y:o,placement:i,middlewareData:s}=e,a=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),s=Qt(n),a=_t(n),l="y"===Jt(n),d=["left","top"].includes(s)?-1:1,c=i&&l?-1:1,u=Wt(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:p}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"==typeof p&&(f="end"===a?-1*p:p),l?{x:f*c,y:g*d}:{x:g*d,y:f*c}}(e,g);return i===(null==(t=s.offset)?void 0:t.placement)&&null!=(n=s.arrow)&&n.alignmentOffset?{}:{x:r+a.x,y:o+a.y,data:{...a,placement:i}}}})];var g;if(!1!==t.flip){const e="string"==typeof t.flip?t.flip.split(" "):void 0;if(void 0!==e&&!e.every(Wn))throw new Error("`flip` expects a spaced-delimited list of placements");u.push(function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:d}=t,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...v}=Wt(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=Qt(o),b=Jt(a),m=Qt(a)===a,w=await(null==l.isRTL?void 0:l.isRTL(d.floating)),x=g||(m||!h?[nn(a)]:function(e){const t=nn(e);return[tn(e),t,tn(t)]}(a)),k="none"!==p;!g&&k&&x.push(...function(e,t,n,r){const o=_t(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:s;default:return[]}}(Qt(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(tn)))),i}(a,h,p,w));const $=[a,...x],S=await an(t,v),C=[];let q=(null==(r=i.flip)?void 0:r.overflows)||[];if(c&&C.push(S[y]),u){const e=function(e,t,n){void 0===n&&(n=!1);const r=_t(e),o=en(e),i=Xt(o);let s="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=nn(s)),[s,nn(s)]}(o,s,w);C.push(S[e[0]],S[e[1]])}if(q=[...q,{placement:o,overflows:C}],!C.every((e=>e<=0))){var E,T;const e=((null==(E=i.flip)?void 0:E.index)||0)+1,t=$[e];if(t)return{data:{index:e,overflows:q},reset:{placement:t}};let n=null==(T=q.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:T.placement;if(!n)switch(f){case"bestFit":{var M;const e=null==(M=q.filter((e=>{if(k){const t=Jt(e.placement);return t===b||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:M[0];e&&(n=e);break}case"initialPlacement":n=a}if(o!==n)return{reset:{placement:n}}}return{}}}}({padding:t.overflowPadding,fallbackPlacements:e}))}(t.slide||t.overlap)&&u.push(function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Wt(e,t),d={x:n,y:r},c=await an(t,l),u=Jt(Qt(o)),g=Zt(u);let f=d[g],p=d[u];if(i){const e="y"===g?"bottom":"right";f=jt(f+c["y"===g?"top":"left"],f,f-c[e])}if(s){const e="y"===u?"bottom":"right";p=jt(p+c["y"===u?"top":"left"],p,p-c[e])}const h=a.fn({...t,[g]:f,[u]:p});return{...h,data:{x:h.x-n,y:h.y-r}}}}}({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),u.push(function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:s=()=>{},...a}=Wt(e,t),l=await an(t,a),d=Qt(n),c=_t(n),u="y"===Jt(n),{width:g,height:f}=r.floating;let p,h;"top"===d||"bottom"===d?(p=d,h=c===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(h=d,p="end"===c?"top":"bottom");const v=f-l.top-l.bottom,y=g-l.left-l.right,b=Rt(f-l[p],v),m=Rt(g-l[h],y),w=!t.middlewareData.shift;let x=b,k=m;if(u?k=c||w?Rt(m,y):y:x=c||w?Rt(b,v):v,w&&!c){const e=Ht(l.left,0),t=Ht(l.right,0),n=Ht(l.top,0),r=Ht(l.bottom,0);u?k=g-2*(0!==e||0!==t?e+t:Ht(l.left,l.right)):x=f-2*(0!==n||0!==r?n+r:Ht(l.top,l.bottom))}await s({...t,availableWidth:k,availableHeight:x});const $=await o.getDimensions(i.floating);return g!==$.width||f!==$.height?{reset:{rects:!0}}:{}}}}({padding:t.overflowPadding,apply({availableWidth:e,availableHeight:n,rects:o}){const i=Math.round(o.reference.width);e=Math.floor(e),n=Math.floor(n),r.style.setProperty("--kb-popper-anchor-width",`${i}px`),r.style.setProperty("--kb-popper-content-available-width",`${e}px`),r.style.setProperty("--kb-popper-content-available-height",`${n}px`),t.sameWidth&&(r.style.width=`${i}px`),t.fitViewport&&(r.style.maxWidth=`${e}px`,r.style.maxHeight=`${n}px`)}})),t.hideWhenDetached&&u.push(function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Wt(e,t);switch(r){case"referenceHidden":{const e=ln(await an(t,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:dn(e)}}}case"escaped":{const e=ln(await an(t,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:dn(e)}}}default:return{}}}}}({padding:t.detachedPadding})),o&&u.push((e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:s,elements:a,middlewareData:l}=t,{element:d,padding:c=0}=Wt(e,t)||{};if(null==d)return{};const u=rn(c),g={x:n,y:r},f=en(o),p=Xt(f),h=await s.getDimensions(d),v="y"===f,y=v?"top":"left",b=v?"bottom":"right",m=v?"clientHeight":"clientWidth",w=i.reference[p]+i.reference[f]-g[f]-i.floating[p],x=g[f]-i.reference[f],k=await(null==s.getOffsetParent?void 0:s.getOffsetParent(d));let $=k?k[m]:0;$&&await(null==s.isElement?void 0:s.isElement(k))||($=a.floating[m]||i.floating[p]);const S=w/2-x/2,C=$/2-h[p]/2-1,q=Rt(u[y],C),E=Rt(u[b],C),T=q,M=$-h[p]-E,F=$/2-h[p]/2+S,L=jt(T,F,M),D=!l.arrow&&null!=_t(o)&&F!==L&&i.reference[p]/2-(F<T?q:E)-h[p]/2<0,z=D?F<T?F-T:F-M:0;return{[f]:g[f]+z,data:{[f]:L,centerOffset:F-L-z,...D&&{alignmentOffset:z}},reset:D}}}))({element:o,padding:t.arrowPadding}));const f=await((e,t,n)=>{const r=new Map,o={platform:Hn,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:s}=n,a=i.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(t));let d=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:u}=sn(d,r,l),g=r,f={},p=0;for(let n=0;n<a.length;n++){const{name:i,fn:h}=a[n],{x:v,y,data:b,reset:m}=await h({x:c,y:u,initialPlacement:r,placement:g,strategy:o,middlewareData:f,rects:d,platform:s,elements:{reference:e,floating:t}});c=null!=v?v:c,u=null!=y?y:u,f={...f,[i]:{...f[i],...b}},m&&p<=50&&(p++,"object"==typeof m&&(m.placement&&(g=m.placement),m.rects&&(d=!0===m.rects?await s.getElementRects({reference:e,floating:t,strategy:o}):m.rects),({x:c,y:u}=sn(d,g,l))),n=-1)}return{x:c,y:u,placement:g,strategy:o,middlewareData:f}})(e,t,{...o,platform:i})})(e,r,{placement:t.placement,strategy:"absolute",middleware:u,platform:{...Hn,isRTL:()=>"rtl"===c()}});if(l(f.placement),t.onCurrentPlacementChange?.(f.placement),!r)return;r.style.setProperty("--kb-popper-content-transform-origin",function(e,t){const[n,r]=e.split("-"),o=Qn[n];return r?"left"===n||"right"===n?`${o} ${"start"===r?"top":"bottom"}`:"start"===r?`${o} ${"rtl"===t?"right":"left"}`:`${o} ${"rtl"===t?"left":"right"}`:`${o} center`}(f.placement,c()));const p=Math.round(f.x),h=Math.round(f.y);let v;if(t.hideWhenDetached&&(v=f.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(r.style,{top:"0",left:"0",transform:`translate3d(${p}px, ${h}px, 0)`,visibility:v}),o&&f.middlewareData.arrow){const{x:e,y:t}=f.middlewareData.arrow,n=f.placement.split("-")[0];Object.assign(o.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[n]:"100%"})}}(0,o.EH)((()=>{const e=d(),t=n();if(!e||!t)return;const r=function(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,d=Mn(e),c=o||i?[...d?En(d):[],...En(t)]:[];c.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const u=d&&a?function(e,t){let n,r=null;const o=gn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),i();const{left:d,top:c,width:u,height:g}=e.getBoundingClientRect();if(a||t(),!u||!g)return;const f={rootMargin:-Ut(c)+"px "+-Ut(o.clientWidth-(d+u))+"px "+-Ut(o.clientHeight-(c+g))+"px "+-Ut(d)+"px",threshold:Ht(0,Rt(1,l))||1};let p=!0;function h(e){const t=e[0].intersectionRatio;if(t!==l){if(!p)return s();t?s(!1,t):n=setTimeout((()=>{s(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(h,{...f,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(h,f)}r.observe(e)}(!0),i}(d,n):null;let g,f=-1,p=null;s&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),d&&!l&&p.observe(d),p.observe(t));let h=l?zn(e):null;return l&&function t(){const r=zn(e);!h||r.x===h.x&&r.y===h.y&&r.width===h.width&&r.height===h.height||n(),h=r,g=requestAnimationFrame(t)}(),n(),()=>{var e;c.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==u||u(),null==(e=p)||e.disconnect(),p=null,l&&cancelAnimationFrame(g)}}(e,t,u,{elementResize:"function"==typeof ResizeObserver});(0,o.Ki)(r)})),(0,o.EH)((()=>{const e=n(),r=t.contentRef?.();e&&r&&queueMicrotask((()=>{e.style.zIndex=getComputedStyle(r).zIndex}))}));const g={currentPlacement:a,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:s};return(0,o.a0)(Gn.Provider,{value:g,get children(){return t.children}})}),{Arrow:Nn,Context:Gn,usePopperContext:Un,Positioner:function(e){const t=Un(),[n,r]=(0,o.rg)(e,["ref","style"]);return(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const r=N(t.setPositionerRef,n.ref);"function"==typeof r&&r(e)},"data-popper-positioner":"",get style(){return se({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}}),Zn="interactOutside.pointerDownOutside",Xn="interactOutside.focusOutside",Jn=(0,o.q6)();function er(e){let t;const n=(0,o.NT)(Jn),[r,i]=(0,o.rg)(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]);!function(e,t){let n,r=De;const i=()=>ge(t()),s=t=>e.onPointerDownOutside?.(t),a=t=>e.onFocusOutside?.(t),d=t=>e.onInteractOutside?.(t),c=n=>{const r=n.target;return r instanceof HTMLElement&&!r.closest(`[${Tt}]`)&&!!ce(i(),r)&&!ce(t(),r)&&!e.shouldExcludeElement?.(r)},u=e=>{function n(){const n=t(),r=e.target;if(!n||!r||!c(e))return;const o=be([s,d]);r.addEventListener(Zn,o,{once:!0});const i=new CustomEvent(Zn,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:2===e.button||me(e)&&0===e.button}});r.dispatchEvent(i)}"touch"===e.pointerType?(i().removeEventListener("click",n),r=n,i().addEventListener("click",n,{once:!0})):n()},g=e=>{const n=t(),r=e.target;if(!n||!r||!c(e))return;const o=be([a,d]);r.addEventListener(Xn,o,{once:!0});const i=new CustomEvent(Xn,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});r.dispatchEvent(i)};(0,o.EH)((()=>{o.S$||l(e.isDisabled)||(n=window.setTimeout((()=>{i().addEventListener("pointerdown",u,!0)}),0),i().addEventListener("focusin",g,!0),(0,o.Ki)((()=>{window.clearTimeout(n),i().removeEventListener("click",r),i().removeEventListener("pointerdown",u,!0),i().removeEventListener("focusin",g,!0)})))}))}({shouldExcludeElement:e=>!!t&&(r.excludedElements?.some((t=>ce(t(),e)))||[...s].some((t=>ce(t,e)))),onPointerDownOutside:e=>{t&&!At.isBelowPointerBlockingLayer(t)&&(r.bypassTopMostLayerCheck||At.isTopMostLayer(t))&&(r.onPointerDownOutside?.(e),r.onInteractOutside?.(e),e.defaultPrevented||r.onDismiss?.())},onFocusOutside:e=>{r.onFocusOutside?.(e),r.onInteractOutside?.(e),e.defaultPrevented||r.onDismiss?.()}},(()=>t)),function(e){const t=t=>{t.key===pe.Escape&&e.onEscapeKeyDown?.(t)};(0,o.EH)((()=>{if(o.S$)return;if(l(e.isDisabled))return;const n=e.ownerDocument?.()??ge();n.addEventListener("keydown",t),(0,o.Ki)((()=>{n.removeEventListener("keydown",t)}))}))}({ownerDocument:()=>ge(t),onEscapeKeyDown:e=>{t&&At.isTopMostLayer(t)&&(r.onEscapeKeyDown?.(e),!e.defaultPrevented&&r.onDismiss&&(e.preventDefault(),r.onDismiss()))}}),(0,o.Rc)((()=>{if(!t)return;At.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});const e=n?.registerNestedLayer(t);At.assignPointerEventToLayers(),At.disableBodyPointerEvents(t),(0,o.Ki)((()=>{t&&(At.removeLayer(t),e?.(),At.assignPointerEventToLayers(),At.restoreBodyPointerEvents(t))}))})),(0,o.EH)((0,o.on)([()=>t,()=>r.disableOutsidePointerEvents],(([e,t])=>{if(!e)return;const n=At.find(e);n&&n.isPointerBlocking!==t&&(n.isPointerBlocking=t,At.assignPointerEventToLayers()),t&&At.disableBodyPointerEvents(e),(0,o.Ki)((()=>{At.restoreBodyPointerEvents(e)}))}),{defer:!0}));const a={registerNestedLayer:e=>{s.add(e);const t=n?.registerNestedLayer(e);return()=>{s.delete(e),t?.()}}};return(0,o.a0)(Jn.Provider,{value:a,get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const n=N((e=>t=e),r.ref);"function"==typeof n&&n(e)}},i))}})}function tr(e={}){const[t,n]=Ze({value:()=>l(e.open),defaultValue:()=>!!l(e.defaultOpen),onChange:t=>e.onOpenChange?.(t)}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var nr={};Je(nr,{Description:()=>je,ErrorMessage:()=>We,Item:()=>ar,ItemControl:()=>lr,ItemDescription:()=>dr,ItemIndicator:()=>cr,ItemInput:()=>ur,ItemLabel:()=>gr,Label:()=>fr,RadioGroup:()=>hr,Root:()=>pr});var rr=(0,o.q6)();function or(){const e=(0,o.NT)(rr);if(void 0===e)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var ir=(0,o.q6)();function sr(){const e=(0,o.NT)(ir);if(void 0===e)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function ar(e){const t=Ne(),n=or(),r=ze({id:`${t.generateId("item")}-${(0,o.Ds)()}`},e),[i,s]=(0,o.rg)(r,["value","disabled","onPointerDown"]),[a,l]=(0,o.n5)(),[d,c]=(0,o.n5)(),[u,g]=(0,o.n5)(),[f,p]=(0,o.n5)(),[h,v]=(0,o.n5)(!1),y=(0,o.To)((()=>n.isSelectedValue(i.value))),b=(0,o.To)((()=>i.disabled||t.isDisabled()||!1)),m=e=>{ye(e,i.onPointerDown),h()&&e.preventDefault()},w=(0,o.To)((()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0}))),x={value:()=>i.value,dataset:w,isSelected:y,isDisabled:b,inputId:a,labelId:d,descriptionId:u,inputRef:f,select:()=>n.setSelectedValue(i.value),generateId:de((()=>s.id)),registerInput:Re(l),registerLabel:Re(c),registerDescription:Re(g),setIsFocused:v,setInputRef:p};return(0,o.a0)(ir.Provider,{value:x,get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div",role:"group",onPointerDown:m},w,s))}})}function lr(e){const t=sr(),n=ze({id:t.generateId("control")},e),[r,i]=(0,o.rg)(n,["onClick","onKeyDown"]);return(0,o.a0)(Ue,(0,o.v6)({as:"div",onClick:e=>{ye(e,r.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:e=>{ye(e,r.onKeyDown),e.key===pe.Space&&(t.select(),t.inputRef()?.focus())}},(()=>t.dataset()),i))}function dr(e){const t=sr(),n=ze({id:t.generateId("description")},e);return(0,o.EH)((()=>(0,o.Ki)(t.registerDescription(n.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"div"},(()=>t.dataset()),n))}function cr(e){const t=sr(),n=ze({id:t.generateId("indicator")},e),[r,i]=(0,o.rg)(n,["ref","forceMount"]),[s,a]=(0,o.n5)(),{present:l}=Et({show:()=>r.forceMount||t.isSelected(),element:()=>s()??null});return(0,o.a0)(o.wv,{get when(){return l()},get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const t=N(a,r.ref);"function"==typeof t&&t(e)}},(()=>t.dataset()),i))}})}function ur(e){const t=Ne(),n=or(),r=sr(),i=ze({id:r.generateId("input")},e),[s,a]=(0,o.rg)(i,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),[l,d]=(0,o.n5)(!1);return(0,o.EH)((0,o.on)([()=>r.isSelected(),()=>r.value()],(e=>{if(!e[0]&&e[1]===r.value())return;d(!0);const t=r.inputRef();t?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),t?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))}),{defer:!0})),(0,o.EH)((()=>(0,o.Ki)(r.registerInput(a.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"input",ref(e){const t=N(r.setInputRef,s.ref);"function"==typeof t&&t(e)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return se({...Be},s.style)},get"aria-labelledby"(){return[s["aria-labelledby"],r.labelId(),null!=s["aria-labelledby"]&&null!=a["aria-label"]?a.id:void 0].filter(Boolean).join(" ")||void 0},get"aria-describedby"(){return[s["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0},onChange:e=>{ye(e,s.onChange),e.stopPropagation(),l()||(n.setSelectedValue(r.value()),e.target.checked=r.isSelected()),d(!1)},onFocus:e=>{ye(e,s.onFocus),r.setIsFocused(!0)},onBlur:e=>{ye(e,s.onBlur),r.setIsFocused(!1)}},(()=>r.dataset()),a))}function gr(e){const t=sr(),n=ze({id:t.generateId("label")},e);return(0,o.EH)((()=>(0,o.Ki)(t.registerLabel(n.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"label",get for(){return t.inputId()}},(()=>t.dataset()),n))}function fr(e){return(0,o.a0)(Qe,(0,o.v6)({as:"span"},e))}function pr(e){let t;const n=ze({id:`radiogroup-${(0,o.Ds)()}`,orientation:"vertical"},e),[r,i,s]=(0,o.rg)(n,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Ye),[a,d]=_e({value:()=>r.value,defaultValue:()=>r.defaultValue,onChange:e=>r.onChange?.(e)}),{formControlContext:c}=function(e){const t=ze({id:`form-control-${(0,o.Ds)()}`},e),[n,r]=(0,o.n5)(),[i,s]=(0,o.n5)(),[a,d]=(0,o.n5)(),[c,u]=(0,o.n5)();return{formControlContext:{name:()=>l(t.name)??l(t.id),dataset:(0,o.To)((()=>({"data-valid":"valid"===l(t.validationState)?"":void 0,"data-invalid":"invalid"===l(t.validationState)?"":void 0,"data-required":l(t.required)?"":void 0,"data-disabled":l(t.disabled)?"":void 0,"data-readonly":l(t.readOnly)?"":void 0}))),validationState:()=>l(t.validationState),isRequired:()=>l(t.required),isDisabled:()=>l(t.disabled),isReadOnly:()=>l(t.readOnly),labelId:n,fieldId:i,descriptionId:a,errorMessageId:c,getAriaLabelledBy:(e,t,r)=>{const o=null!=r||null!=n();return[r,n(),o&&null!=t?e:void 0].filter(Boolean).join(" ")||void 0},getAriaDescribedBy:e=>[a(),c(),e].filter(Boolean).join(" ")||void 0,generateId:de((()=>l(t.id))),registerLabel:Re(r),registerField:Re(s),registerDescription:Re(d),registerErrorMessage:Re(u)}}}(i);var u,g;u=()=>t,g=()=>d(r.defaultValue??""),(0,o.EH)((0,o.on)(u,(e=>{if(null==e)return;const t=function(e){return function(e){return e.matches("textarea, input, select, button")}(e)?e.form:e.closest("form")}(e);null!=t&&(t.addEventListener("reset",g,{passive:!0}),(0,o.Ki)((()=>{t.removeEventListener("reset",g)})))})));const f=()=>c.getAriaDescribedBy(r["aria-describedby"]),p=e=>e===a(),h={ariaDescribedBy:f,isSelectedValue:p,setSelectedValue:e=>{if(!c.isReadOnly()&&!c.isDisabled()&&(d(e),t))for(const e of t.querySelectorAll("[type='radio']")){const t=e;t.checked=p(t.value)}}};return(0,o.a0)(Ve.Provider,{value:c,get children(){return(0,o.a0)(rr.Provider,{value:h,get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const n=N((e=>t=e),r.ref);"function"==typeof n&&n(e)},role:"radiogroup",get id(){return l(i.id)},get"aria-invalid"(){return"invalid"===c.validationState()||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return r.orientation},get"aria-labelledby"(){return c.getAriaLabelledBy(l(i.id),s["aria-label"],r["aria-labelledby"])},get"aria-describedby"(){return f()}},(()=>c.dataset()),s))}})}})}var hr=Object.assign(pr,{Description:je,ErrorMessage:We,Item:ar,ItemControl:lr,ItemDescription:dr,ItemIndicator:cr,ItemInput:ur,ItemLabel:gr,Label:fr}),vr=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;null!=t;){const e=this.collection().getItem(t);if(e&&"item"===e.type&&!e.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;null!=t;){const e=this.collection().getItem(t);if(e&&"item"===e.type&&!e.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;null!=e;){const t=this.collection().getItem(e);if(t&&"item"===t.type&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;null!=e;){const t=this.collection().getItem(e);if(t&&"item"===t.type&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){const t=this.ref?.();let n=this.getItem(e);if(!t||!n)return;const r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=null!=o?this.getItem(o):null;return o}getKeyPageBelow(e){const t=this.ref?.();let n=this.getItem(e);if(!t||!n)return;const r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight);let o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=null!=o?this.getItem(o):null;return o}getKeyForSearch(e,t){const n=this.collator?.();if(!n)return;let r=null!=t?this.getKeyBelow(t):this.getFirstKey();for(;null!=r;){const t=this.collection().getItem(r);if(t){const o=t.textValue.slice(0,e.length);if(t.textValue&&0===n.compare(o,e))return r}r=this.getKeyBelow(r)}}};var yr="focusScope.autoFocusOnMount",br="focusScope.autoFocusOnUnmount",mr={bubbles:!1,cancelable:!0},wr={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=ae(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=ae(this.stack,e),this.active()?.resume()}};function xr(e,t){const[n,r]=(0,o.n5)(!1),i={pause(){r(!0)},resume(){r(!1)}};let s=null;const a=t=>e.onMountAutoFocus?.(t),d=t=>e.onUnmountAutoFocus?.(t),c=()=>ge(t()),u=()=>{const e=c().createElement("span");return e.setAttribute("data-focus-trap",""),e.tabIndex=0,Object.assign(e.style,Be),e},g=()=>{const e=t();return e?qe(e,!0).filter((e=>!e.hasAttribute("data-focus-trap"))):[]},f=()=>{const e=g();return e.length>0?e[0]:null};(0,o.EH)((()=>{if(o.S$)return;const e=t();if(!e)return;wr.add(i);const n=ue(e);if(!ce(e,n)){const t=new CustomEvent(yr,mr);e.addEventListener(yr,a),e.dispatchEvent(t),t.defaultPrevented||setTimeout((()=>{we(f()),ue(e)===n&&we(e)}),0)}(0,o.Ki)((()=>{e.removeEventListener(yr,a),setTimeout((()=>{const r=new CustomEvent(br,mr);(()=>{const e=t();if(!e)return!1;const n=ue(e);return!!n&&!ce(e,n)&&Te(n)})()&&r.preventDefault(),e.addEventListener(br,d),e.dispatchEvent(r),r.defaultPrevented||we(n??c().body),e.removeEventListener(br,d),wr.remove(i)}),0)}))})),(0,o.EH)((()=>{if(o.S$)return;const r=t();if(!r||!l(e.trapFocus)||n())return;const i=e=>{const t=e.target;t?.closest(`[${Tt}]`)||(ce(r,t)?s=t:we(s))},a=e=>{const t=e.relatedTarget??ue(r);t?.closest(`[${Tt}]`)||ce(r,t)||we(s)};c().addEventListener("focusin",i),c().addEventListener("focusout",a),(0,o.Ki)((()=>{c().removeEventListener("focusin",i),c().removeEventListener("focusout",a)}))})),(0,o.EH)((()=>{if(o.S$)return;const r=t();if(!r||!l(e.trapFocus)||n())return;const i=u();r.insertAdjacentElement("afterbegin",i);const s=u();function a(e){const t=f(),n=(()=>{const e=g();return e.length>0?e[e.length-1]:null})();e.relatedTarget===t?we(n):we(t)}r.insertAdjacentElement("beforeend",s),i.addEventListener("focusin",a),s.addEventListener("focusin",a);const d=new MutationObserver((e=>{for(const t of e)t.previousSibling===s&&(s.remove(),r.insertAdjacentElement("beforeend",s)),t.nextSibling===i&&(i.remove(),r.insertAdjacentElement("afterbegin",i))}));d.observe(r,{childList:!0,subtree:!1}),(0,o.Ki)((()=>{i.removeEventListener("focusin",a),s.removeEventListener("focusin",a),i.remove(),s.remove(),d.disconnect()}))}))}var kr=new WeakMap,$r=[],Sr=new Map,Cr=e=>{(0,o.EH)((()=>{const t=qt(e.style)??{},n=qt(e.properties)??[],r={};for(const n in t)r[n]=e.element.style[n];const i=Sr.get(e.key);i?i.activeCount++:Sr.set(e.key,{activeCount:1,originalStyles:r,properties:n.map((e=>e.key))}),Object.assign(e.element.style,e.style);for(const t of n)e.element.style.setProperty(t.key,t.value);(0,o.Ki)((()=>{const t=Sr.get(e.key);if(t)if(1===t.activeCount){Sr.delete(e.key);for(const[n,r]of Object.entries(t.originalStyles))e.element.style[n]=r;for(const n of t.properties)e.element.style.removeProperty(n);0===e.element.style.length&&e.element.removeAttribute("style"),e.cleanup?.()}else t.activeCount--}))}))},qr=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Er=(e,t)=>{const n=getComputedStyle(e),r="x"===t?n.overflowX:n.overflowY;return"auto"===r||"scroll"===r||"HTML"===e.tagName&&"visible"===r},[Tr,Mr]=(0,o.n5)([]),Fr=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Lr=(e,t,n,r)=>{const o=null!==r&&Dr(r,e),[i,s]=((e,t,n)=>{const r="x"===t&&"rtl"===window.getComputedStyle(e).direction?-1:1;let o=e,i=0,s=0,a=!1;do{const[e,l,d]=qr(o,t),c=d-e-r*l;0===l&&0===c||!Er(o,t)||(i+=c,s+=l),o===(n??document.documentElement)?a=!0:o=o._$host??o.parentElement}while(o&&!a);return[i,s]})(e,t,o?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(s)<1)},Dr=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},zr=(0,o.q6)();function Or(){return(0,o.NT)(zr)}function Ar(){const e=Or();if(void 0===e)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Ir=(0,o.q6)();function Kr(){const e=(0,o.NT)(Ir);if(void 0===e)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Pr=(0,o.q6)();function Br(){const e=(0,o.NT)(Pr);if(void 0===e)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Rr(e){let t;const n=Br(),r=Ar(),i=ze({id:n.generateId(`item-${(0,o.Ds)()}`)},e),[s,a]=(0,o.rg)(i,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[l,d]=(0,o.n5)(),[c,u]=(0,o.n5)(),[g,f]=(0,o.n5)(),p=()=>r.listState().selectionManager(),h=()=>a.id,v=()=>{s.onSelect?.(),s.closeOnSelect&&setTimeout((()=>{r.close(!0)}))};!function(e){const t=function(){const e=tt();if(void 0===e)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}(),n=ze({shouldRegisterItem:!0},e);(0,o.EH)((()=>{if(!n.shouldRegisterItem)return;const e=t.registerItem(n.getItem());(0,o.Ki)(e)}))}({getItem:()=>({ref:()=>t,type:"item",key:h(),textValue:s.textValue??g()?.textContent??t?.textContent??"",disabled:s.disabled??!1})});const y=kt({key:h,selectionManager:p,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},(()=>t)),b=e=>{ye(e,s.onPointerMove),"mouse"===e.pointerType&&(s.disabled?r.onItemLeave(e):(r.onItemEnter(e),e.defaultPrevented||(we(e.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(h()))))},m=e=>{ye(e,s.onPointerLeave),"mouse"===e.pointerType&&r.onItemLeave(e)},w=e=>{ye(e,s.onPointerUp),s.disabled||0!==e.button||v()},x=e=>{if(ye(e,s.onKeyDown),!e.repeat&&!s.disabled)switch(e.key){case"Enter":case" ":v()}},k=(0,o.To)((()=>s.indeterminate?"mixed":null!=s.checked?s.checked:void 0)),$=(0,o.To)((()=>({"data-indeterminate":s.indeterminate?"":void 0,"data-checked":s.checked&&!s.indeterminate?"":void 0,"data-disabled":s.disabled?"":void 0,"data-highlighted":p().focusedKey()===h()?"":void 0}))),S={isChecked:()=>s.checked,dataset:$,setLabelRef:f,generateId:de((()=>a.id)),registerLabel:Re(d),registerDescription:Re(u)};return(0,o.a0)(Ir.Provider,{value:S,get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const n=N((e=>t=e),s.ref);"function"==typeof n&&n(e)},get tabIndex(){return y.tabIndex()},get"aria-checked"(){return k()},get"aria-disabled"(){return s.disabled},get"aria-labelledby"(){return l()},get"aria-describedby"(){return c()},get"data-key"(){return y.dataKey()},get onPointerDown(){return be([s.onPointerDown,y.onPointerDown])},get onPointerUp(){return be([w,y.onPointerUp])},get onClick(){return be([s.onClick,y.onClick])},get onKeyDown(){return be([x,y.onKeyDown])},get onMouseDown(){return be([s.onMouseDown,y.onMouseDown])},get onFocus(){return be([s.onFocus,y.onFocus])},onPointerMove:b,onPointerLeave:m},$,a))}})}function Hr(e){const t=ze({closeOnSelect:!1},e),[n,r]=(0,o.rg)(t,["checked","defaultChecked","onChange","onSelect"]),i=function(e={}){const[t,n]=Ze({value:()=>l(e.isSelected),defaultValue:()=>!!l(e.defaultIsSelected),onChange:t=>e.onSelectedChange?.(t)});return{isSelected:t,setIsSelected:t=>{l(e.isReadOnly)||l(e.isDisabled)||n(t)},toggle:()=>{l(e.isReadOnly)||l(e.isDisabled)||n(!t())}}}({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:e=>n.onChange?.(e),isDisabled:()=>r.disabled});return(0,o.a0)(Rr,(0,o.v6)({role:"menuitemcheckbox",get checked(){return i.isSelected()},onSelect:()=>{n.onSelect?.(),i.toggle()}},r))}var Gr=(0,o.q6)();function Ur(){return(0,o.NT)(Gr)}var Yr={next:(e,t)=>"ltr"===e?"horizontal"===t?"ArrowRight":"ArrowDown":"horizontal"===t?"ArrowLeft":"ArrowUp",previous:(e,t)=>Yr.next("ltr"===e?"rtl":"ltr",t)};function Vr(e){const t=Br(),n=Ar(),r=Ur(),{direction:i}=ht(),s=ze({id:t.generateId("trigger")},e),[a,l]=(0,o.rg)(s,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let d=()=>t.value();void 0!==r&&(d=()=>t.value()??a.id,void 0===r.lastValue()&&r.setLastValue(d));const c=He((()=>n.triggerRef()),(()=>"button")),u=(0,o.To)((()=>"a"===c()&&null!=n.triggerRef()?.getAttribute("href")));(0,o.EH)((0,o.on)((()=>r?.value()),(e=>{u()&&e===d()&&n.triggerRef()?.focus()})));const g=()=>{void 0!==r?n.isOpen()?r.value()===d()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)};return(0,o.EH)((()=>(0,o.Ki)(n.registerTriggerId(a.id)))),(0,o.a0)(Kt,(0,o.v6)({ref(e){const t=N(n.setTriggerRef,a.ref);"function"==typeof t&&t(e)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return a.id},get disabled(){return a.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return(0,o.To)((()=>!!n.isOpen()))()?n.contentId():void 0},get"data-highlighted"(){return void 0!==d()&&r?.value()===d()||void 0},get tabIndex(){return void 0!==r?r.value()===d()||r.lastValue()===d()?0:-1:void 0},onPointerDown:e=>{ye(e,a.onPointerDown),e.currentTarget.dataset.pointerType=e.pointerType,a.disabled||"touch"===e.pointerType||0!==e.button||g()},onMouseOver:e=>{ye(e,a.onMouseOver),"touch"!==n.triggerRef()?.dataset.pointerType&&(a.disabled||void 0===r||void 0===r.value()||r.setValue(d))},onClick:e=>{ye(e,a.onClick),a.disabled||"touch"===e.currentTarget.dataset.pointerType&&g()},onKeyDown:e=>{if(ye(e,a.onKeyDown),!a.disabled){if(u())switch(e.key){case"Enter":case" ":return}switch(e.key){case"Enter":case" ":case"horizontal"===t.orientation()?"ArrowDown":"ArrowRight":e.stopPropagation(),e.preventDefault(),function(e){if(document.contains(e)){const t=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(t).overflow){let n=Fe(e);for(;e&&n&&e!==t&&n!==t;)Ke(n,e),n=Fe(e=n)}else{const{left:t,top:n}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});const{left:r,top:o}=e.getBoundingClientRect();(Math.abs(t-r)>1||Math.abs(n-o)>1)&&e.scrollIntoView?.({block:"nearest"})}}}(e.currentTarget),n.open("first"),r?.setAutoFocusMenu(!0),r?.setValue(d);break;case(e=>"horizontal"===e?"ArrowUp":"ArrowLeft")(t.orientation()):e.stopPropagation(),e.preventDefault(),n.open("last");break;case Yr.next(i(),t.orientation()):if(void 0===r)break;e.stopPropagation(),e.preventDefault(),r.nextMenu();break;case Yr.previous(i(),t.orientation()):if(void 0===r)break;e.stopPropagation(),e.preventDefault(),r.previousMenu()}}},onFocus:e=>{ye(e,a.onFocus),void 0!==r&&"touch"!==e.currentTarget.dataset.pointerType&&r.setValue(d)},role:void 0!==r?"menuitem":void 0},(()=>n.dataset()),l))}var Nr=(0,o.q6)();function jr(){return(0,o.NT)(Nr)}function Wr(e){let t;const n=Br(),r=Ar(),i=Ur(),s=jr(),{direction:a}=ht(),d=ze({id:n.generateId(`content-${(0,o.Ds)()}`)},e),[c,u]=(0,o.rg)(d,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let g=0;const f=()=>null==r.parentMenuContext()&&void 0===i&&n.isModal(),p=function(e,t){const n=function(e){const{locale:t}=ht(),n=(0,o.To)((()=>t()+(e?Object.entries(e).sort(((e,t)=>e[0]<t[0]?-1:1)).join():"")));return(0,o.To)((()=>{const r=n();let o;return vt.has(r)&&(o=vt.get(r)),o||(o=new Intl.Collator(t(),e),vt.set(r,o)),o}))}({usage:"search",sensitivity:"base"});return xt({selectionManager:()=>l(e.selectionManager),keyboardDelegate:(0,o.To)((()=>l(e.keyboardDelegate)||new vr(e.collection,t,n))),autoFocus:()=>l(e.autoFocus),deferAutoFocus:()=>l(e.deferAutoFocus),shouldFocusWrap:()=>l(e.shouldFocusWrap),disallowEmptySelection:()=>l(e.disallowEmptySelection),selectOnFocus:()=>l(e.selectOnFocus),disallowTypeAhead:()=>l(e.disallowTypeAhead),shouldUseVirtualFocus:()=>l(e.shouldUseVirtualFocus),allowsTabNavigation:()=>l(e.allowsTabNavigation),isVirtualized:()=>l(e.isVirtualized),scrollToKey:t=>l(e.scrollToKey)?.(t),orientation:()=>l(e.orientation)},t)}({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>"horizontal"===n.orientation()?"vertical":"horizontal"},(()=>t));xr({trapFocus:()=>f()&&r.isOpen(),onMountAutoFocus:e=>{void 0===i&&c.onOpenAutoFocus?.(e)},onUnmountAutoFocus:c.onCloseAutoFocus},(()=>t));const h=e=>{c.onEscapeKeyDown?.(e),i?.setAutoFocusMenu(!1),r.close(!0)},v=e=>{c.onFocusOutside?.(e),n.isModal()&&e.preventDefault()};(0,o.EH)((()=>(0,o.Ki)(r.registerContentId(c.id))));const y={ref:N((e=>{r.setContentRef(e),t=e}),c.ref),role:"menu",get id(){return c.id},get tabIndex(){return p.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:be([c.onKeyDown,p.onKeyDown,e=>{if(ce(e.currentTarget,e.target)&&("Tab"===e.key&&r.isOpen()&&e.preventDefault(),void 0!==i&&"true"!==e.currentTarget.getAttribute("aria-haspopup")))switch(e.key){case Yr.next(a(),n.orientation()):e.stopPropagation(),e.preventDefault(),r.close(!0),i.setAutoFocusMenu(!0),i.nextMenu();break;case Yr.previous(a(),n.orientation()):if(e.currentTarget.hasAttribute("data-closed"))break;e.stopPropagation(),e.preventDefault(),r.close(!0),i.setAutoFocusMenu(!0),i.previousMenu()}}]),onMouseDown:be([c.onMouseDown,p.onMouseDown]),onFocusIn:be([c.onFocusIn,p.onFocusIn]),onFocusOut:be([c.onFocusOut,p.onFocusOut]),onPointerEnter:e=>{ye(e,c.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},onPointerMove:e=>{if(ye(e,c.onPointerMove),"mouse"!==e.pointerType)return;const t=e.target,n=g!==e.clientX;ce(e.currentTarget,t)&&n&&(r.setPointerDir(e.clientX>g?"right":"left"),g=e.clientX)},get"data-orientation"(){return n.orientation()}};return(0,o.a0)(o.wv,{get when(){return r.contentPresent()},get children(){return(0,o.a0)(o.wv,{get when(){return void 0===s||null!=r.parentMenuContext()},get fallback(){return(0,o.a0)(Ue,(0,o.v6)({as:"div"},(()=>r.dataset()),y,u))},get children(){return(0,o.a0)(_n.Positioner,{get children(){return(0,o.a0)(er,(0,o.v6)({get disableOutsidePointerEvents(){return(0,o.To)((()=>!!f()))()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return se({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},c.style)},onEscapeKeyDown:h,onFocusOutside:v,get onDismiss(){return r.close}},(()=>r.dataset()),y,u))}})}})}})}function Qr(e){let t;const n=Br(),r=Ar(),[i,s]=(0,o.rg)(e,["ref"]);return(e=>{const t=(0,o.v6)({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=(0,o.Ds)();let r=[0,0],i=null,s=null;(0,o.EH)((()=>{qt(t.enabled)&&(Mr((e=>[...e,n])),(0,o.Ki)((()=>{Mr((e=>e.filter((e=>e!==n))))})))})),(0,o.EH)((()=>{if(!qt(t.enabled)||!qt(t.hideScrollbar))return;const{body:e}=document,n=window.innerWidth-e.offsetWidth;if(qt(t.preventScrollbarShift)){const r={overflow:"hidden"},o=[];n>0&&("padding"===qt(t.preventScrollbarShiftMode)?r.paddingRight=`calc(${window.getComputedStyle(e).paddingRight} + ${n}px)`:r.marginRight=`calc(${window.getComputedStyle(e).marginRight} + ${n}px)`,o.push({key:"--scrollbar-width",value:`${n}px`}));const i=window.scrollY,s=window.scrollX;Cr({key:"prevent-scroll",element:e,style:r,properties:o,cleanup:()=>{qt(t.restoreScrollPosition)&&n>0&&window.scrollTo(s,i)}})}else Cr({key:"prevent-scroll",element:e,style:{overflow:"hidden"}})})),(0,o.EH)((()=>{var e;e=n,Tr().indexOf(e)===Tr().length-1&&qt(t.enabled)&&(document.addEventListener("wheel",l,{passive:!1}),document.addEventListener("touchstart",a,{passive:!1}),document.addEventListener("touchmove",d,{passive:!1}),(0,o.Ki)((()=>{document.removeEventListener("wheel",l),document.removeEventListener("touchstart",a),document.removeEventListener("touchmove",d)})))}));const a=e=>{r=Fr(e),i=null,s=null},l=e=>{const n=e.target,r=qt(t.element),o=(e=>[e.deltaX,e.deltaY])(e),i=Math.abs(o[0])>Math.abs(o[1])?"x":"y",s="x"===i?o[0]:o[1],a=Lr(n,i,s,r);let l;l=!r||!Dr(r,n)||!a,l&&e.cancelable&&e.preventDefault()},d=e=>{const n=qt(t.element),o=e.target;let a;if(2===e.touches.length)a=!qt(t.allowPinchZoom);else{if(null==i||null===s){const t=Fr(e).map(((e,t)=>r[t]-e)),n=Math.abs(t[0])>Math.abs(t[1])?"x":"y";i=n,s="x"===n?t[0]:t[1]}if("range"===o.type)a=!1;else{const e=Lr(o,i,s,n);a=!n||!Dr(n,o)||!e}}a&&e.cancelable&&e.preventDefault()}})({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),(0,o.a0)(Wr,(0,o.v6)({ref(e){const n=N((e=>{t=e}),i.ref);"function"==typeof n&&n(e)}},s))}var _r=(0,o.q6)();function Zr(e){const t=ze({id:Br().generateId(`group-${(0,o.Ds)()}`)},e),[n,r]=(0,o.n5)(),i={generateId:de((()=>t.id)),registerLabelId:Re(r)};return(0,o.a0)(_r.Provider,{value:i,get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div",role:"group",get"aria-labelledby"(){return n()}},t))}})}function Xr(e){const t=function(){const e=(0,o.NT)(_r);if(void 0===e)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}(),n=ze({id:t.generateId("label")},e),[r,i]=(0,o.rg)(n,["id"]);return(0,o.EH)((()=>(0,o.Ki)(t.registerLabelId(r.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"span",get id(){return r.id},"aria-hidden":"true"},i))}function Jr(e){const t=Ar(),n=ze({children:"▼"},e);return(0,o.a0)(Ue,(0,o.v6)({as:"span","aria-hidden":"true"},(()=>t.dataset()),n))}function eo(e){return(0,o.a0)(Rr,(0,o.v6)({role:"menuitem",closeOnSelect:!0},e))}function to(e){const t=Kr(),n=ze({id:t.generateId("description")},e),[r,i]=(0,o.rg)(n,["id"]);return(0,o.EH)((()=>(0,o.Ki)(t.registerDescription(r.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"div",get id(){return r.id}},(()=>t.dataset()),i))}function no(e){const t=Kr(),n=ze({id:t.generateId("indicator")},e),[r,i]=(0,o.rg)(n,["forceMount"]);return(0,o.a0)(o.wv,{get when(){return r.forceMount||t.isChecked()},get children(){return(0,o.a0)(Ue,(0,o.v6)({as:"div"},(()=>t.dataset()),i))}})}function ro(e){const t=Kr(),n=ze({id:t.generateId("label")},e),[r,i]=(0,o.rg)(n,["ref","id"]);return(0,o.EH)((()=>(0,o.Ki)(t.registerLabel(r.id)))),(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const n=N(t.setLabelRef,r.ref);"function"==typeof n&&n(e)},get id(){return r.id}},(()=>t.dataset()),i))}function oo(e){const t=Ar();return(0,o.a0)(o.wv,{get when(){return t.contentPresent()},get children(){return(0,o.a0)(o.ZL,e)}})}var io=(0,o.q6)();function so(e){const t=ze({id:Br().generateId(`radiogroup-${(0,o.Ds)()}`)},e),[n,r]=(0,o.rg)(t,["value","defaultValue","onChange","disabled"]),[i,s]=_e({value:()=>n.value,defaultValue:()=>n.defaultValue,onChange:e=>n.onChange?.(e)}),a={isDisabled:()=>n.disabled,isSelectedValue:e=>e===i(),setSelectedValue:s};return(0,o.a0)(io.Provider,{value:a,get children(){return(0,o.a0)(Zr,r)}})}function ao(e){const t=function(){const e=(0,o.NT)(io);if(void 0===e)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}(),n=ze({closeOnSelect:!1},e),[r,i]=(0,o.rg)(n,["value","onSelect"]);return(0,o.a0)(Rr,(0,o.v6)({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{r.onSelect?.(),t.setSelectedValue(r.value)}},i))}function lo(e,t,n){const r=e.split("-")[0],o=n.getBoundingClientRect(),i=[],s=t.clientX,a=t.clientY;switch(r){case"top":i.push([s,a+5]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]);break;case"right":i.push([s-5,a]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]);break;case"bottom":i.push([s,a-5]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]);break;case"left":i.push([s+5,a]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top])}return i}function co(e){const t=Br(),n=tt(),r=Or(),i=Ur(),s=jr(),a=ze({placement:"horizontal"===t.orientation()?"bottom-start":"right-start"},e),[d,c]=(0,o.rg)(a,["open","defaultOpen","onOpenChange"]);let u=0,g=null,f="right";const[p,h]=(0,o.n5)(),[v,y]=(0,o.n5)(),[b,m]=(0,o.n5)(),[w,x]=(0,o.n5)(),[k,$]=(0,o.n5)(!0),[S,C]=(0,o.n5)(c.placement),[q,E]=(0,o.n5)([]),[T,M]=(0,o.n5)([]),{DomCollectionProvider:F}=ot({items:T,onItemsChange:M}),L=tr({open:()=>d.open,defaultOpen:()=>d.defaultOpen,onOpenChange:e=>d.onOpenChange?.(e)}),{present:D}=Et({show:()=>t.forceMount()||L.isOpen(),element:()=>w()??null}),z=function(e){const t=function(e){const t=ze({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=(0,o.n5)(!1),[i,s]=(0,o.n5)(),a=(0,o.To)((()=>{const e=l(t.selectedKeys);return null!=e?wt(e):e})),d=(0,o.To)((()=>{const e=l(t.defaultSelectedKeys);return null!=e?wt(e):new yt})),[c,u]=function(e){const[t,n]=_e(e);return[()=>t()??new yt,n]}({value:a,defaultValue:d,onChange:e=>t.onSelectionChange?.(e)}),[g,f]=(0,o.n5)(l(t.selectionBehavior));return(0,o.EH)((()=>{const e=c();"replace"===l(t.selectionBehavior)&&"toggle"===g()&&"object"==typeof e&&0===e.size&&f("replace")})),(0,o.EH)((()=>{f(l(t.selectionBehavior)??"toggle")})),{selectionMode:()=>l(t.selectionMode),disallowEmptySelection:()=>l(t.disallowEmptySelection)??!1,selectionBehavior:g,setSelectionBehavior:f,isFocused:n,setFocused:r,focusedKey:i,setFocusedKey:s,selectedKeys:c,setSelectedKeys:e=>{!l(t.allowDuplicateSelectionEvents)&&function(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}(e,c())||u(e)}}}(e),n=st({dataSource:()=>l(e.dataSource),getKey:()=>l(e.getKey),getTextValue:()=>l(e.getTextValue),getDisabled:()=>l(e.getDisabled),getSectionChildren:()=>l(e.getSectionChildren),factory:t=>e.filter?new Ct(e.filter(t)):new Ct(t)},[()=>e.filter]),r=new St(n,t);return(0,o.KZ)((()=>{const e=t.focusedKey();null==e||n().getItem(e)||t.setFocusedKey(void 0)})),{collection:n,selectionManager:()=>r}}({selectionMode:"none",dataSource:T}),O=e=>{$(e),L.open()},A=(e=!1)=>{L.close(),e&&r&&r.close(!0)},I=()=>{const e=w();e&&(we(e),z.selectionManager().setFocused(!0),z.selectionManager().setFocusedKey(void 0))},K=()=>{null!=s?setTimeout((()=>I())):I()},P=e=>{return f===g?.side&&(t=e,n=g?.area,!!n&&function(e,t){const[n,r]=e;let o=!1;for(let e=t.length,i=0,s=e-1;i<e;s=i++){const[a,l]=t[i],[d,c]=t[s],[,u]=t[0===s?e-1:s-1]||[0,0],g=(l-c)*(n-a)-(a-d)*(r-l);if(c<l){if(r>=c&&r<l){if(0===g)return!0;g>0&&(r===c?r>u&&(o=!o):o=!o)}}else if(l<c){if(r>l&&r<=c){if(0===g)return!0;g<0&&(r===c?r<u&&(o=!o):o=!o)}}else if(r==l&&(n>=d&&n<=a||n>=a&&n<=d))return!0}return o}([t.clientX,t.clientY],n));var t,n};(function(e){(0,o.EH)((()=>{l(e.isDisabled)||(0,o.Ki)(function(e,t=document.body){const n=new Set(e),r=new Set,o=e=>{for(const t of e.querySelectorAll(`[data-live-announcer], [${Tt}]`))n.add(t);const t=e=>{if(n.has(e)||e.parentElement&&r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(const t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),s=t(e);if(s===NodeFilter.FILTER_ACCEPT&&i(e),s!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)i(e),e=o.nextNode()}},i=e=>{const t=kr.get(e)??0;"true"===e.getAttribute("aria-hidden")&&0===t||(0===t&&e.setAttribute("aria-hidden","true"),r.add(e),kr.set(e,t+1))};$r.length&&$r[$r.length-1].disconnect(),o(t);const s=new MutationObserver((e=>{for(const t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some((e=>e.contains(t.target)))){for(const e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(const e of t.addedNodes)!(e instanceof HTMLElement||e instanceof SVGElement)||"true"!==e.dataset.liveAnnouncer&&"true"!==e.dataset.reactAriaTopLayer?e instanceof Element&&o(e):n.add(e)}}));s.observe(t,{childList:!0,subtree:!0});const a={observe(){s.observe(t,{childList:!0,subtree:!0})},disconnect(){s.disconnect()}};return $r.push(a),()=>{s.disconnect();for(const e of r){const t=kr.get(e);if(null==t)return;1===t?(e.removeAttribute("aria-hidden"),kr.delete(e)):kr.set(e,t-1)}a===$r[$r.length-1]?($r.pop(),$r.length&&$r[$r.length-1].observe()):$r.splice($r.indexOf(a),1)}}(l(e.targets),l(e.root)))}))})({isDisabled:()=>!(null==r&&L.isOpen()&&t.isModal()),targets:()=>[w(),...q()].filter(Boolean)}),(0,o.EH)((()=>{const e=w();if(!e||!r)return;const t=r.registerNestedMenu(e);(0,o.Ki)((()=>{t()}))})),(0,o.EH)((()=>{void 0===r&&i?.registerMenu(t.value(),[w(),...q()])})),(0,o.EH)((()=>{void 0===r&&void 0!==i&&(i.value()===t.value()?(b()?.focus(),i.autoFocusMenu()&&O(!0)):A())})),(0,o.EH)((()=>{void 0===r&&void 0!==i&&L.isOpen()&&i.setValue(t.value())})),(0,o.Ki)((()=>{void 0===r&&i?.unregisterMenu(t.value())}));const B={dataset:(0,o.To)((()=>({"data-expanded":L.isOpen()?"":void 0,"data-closed":L.isOpen()?void 0:""}))),isOpen:L.isOpen,contentPresent:D,nestedMenus:q,currentPlacement:S,pointerGraceTimeoutId:()=>u,autoFocus:k,listState:()=>z,parentMenuContext:()=>r,triggerRef:b,contentRef:w,triggerId:p,contentId:v,setTriggerRef:m,setContentRef:x,open:O,close:A,toggle:e=>{$(e),L.toggle()},focusContent:K,onItemEnter:e=>{P(e)&&e.preventDefault()},onItemLeave:e=>{P(e)||K()},onTriggerLeave:e=>{P(e)&&e.preventDefault()},setPointerDir:e=>f=e,setPointerGraceTimeoutId:e=>u=e,setPointerGraceIntent:e=>g=e,registerNestedMenu:e=>{E((t=>[...t,e]));const t=r?.registerNestedMenu(e);return()=>{E((t=>ae(t,e))),t?.()}},registerItemToParentDomCollection:n?.registerItem,registerTriggerId:Re(h),registerContentId:Re(y)};return(0,o.a0)(F,{get children(){return(0,o.a0)(zr.Provider,{value:B,get children(){return(0,o.a0)(o.wv,{when:void 0===s,get fallback(){return c.children},get children(){return(0,o.a0)(_n,(0,o.v6)({anchorRef:b,contentRef:w,onCurrentPlacementChange:C},c))}})}})}})}function uo(e){const{direction:t}=ht();return(0,o.a0)(co,(0,o.v6)({get placement(){return"rtl"===t()?"left-start":"right-start"},flip:!0},e))}function go(e){const t=Ar(),n=Br(),[r,i]=(0,o.rg)(e,["onFocusOutside","onKeyDown"]),{direction:s}=ht();return(0,o.a0)(Wr,(0,o.v6)({onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onFocusOutside:e=>{r.onFocusOutside?.(e);const n=e.target;ce(t.triggerRef(),n)||t.close()},onKeyDown:e=>{ye(e,r.onKeyDown);const o=ce(e.currentTarget,e.target),i=(l=s(),d=n.orientation(),"ltr"===l?["horizontal"===d?"ArrowLeft":"ArrowUp"]:["horizontal"===d?"ArrowRight":"ArrowDown"]).includes(e.key),a=null!=t.parentMenuContext();var l,d;o&&i&&a&&(t.close(),we(t.triggerRef()))}},i))}var fo=["Enter"," "];function po(e){let t;const n=Br(),r=Ar(),i=ze({id:n.generateId(`sub-trigger-${(0,o.Ds)()}`)},e),[s,a]=(0,o.rg)(i,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let l=null;const d=()=>{o.S$||(l&&window.clearTimeout(l),l=null)},{direction:c}=ht(),u=()=>s.id,g=()=>{const e=r.parentMenuContext();if(null==e)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return e.listState().selectionManager()},f=kt({key:u,selectionManager:g,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},(()=>t)),p=e=>{ye(e,s.onClick),r.isOpen()||s.disabled||r.open(!0)},h=e=>{var t,o;ye(e,s.onKeyDown),e.repeat||s.disabled||(t=c(),o=n.orientation(),"ltr"===t?[...fo,"horizontal"===o?"ArrowRight":"ArrowDown"]:[...fo,"horizontal"===o?"ArrowLeft":"ArrowUp"]).includes(e.key)&&(e.stopPropagation(),e.preventDefault(),g().setFocused(!1),g().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(r.listState().collection().getFirstKey()))};return(0,o.EH)((()=>{if(null==r.registerItemToParentDomCollection)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const e=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:u(),textValue:s.textValue??t?.textContent??"",disabled:s.disabled??!1});(0,o.Ki)(e)})),(0,o.EH)((0,o.on)((()=>r.parentMenuContext()?.pointerGraceTimeoutId()),(e=>{(0,o.Ki)((()=>{window.clearTimeout(e),r.parentMenuContext()?.setPointerGraceIntent(null)}))}))),(0,o.EH)((()=>(0,o.Ki)(r.registerTriggerId(s.id)))),(0,o.Ki)((()=>{d()})),(0,o.a0)(Ue,(0,o.v6)({as:"div",ref(e){const n=N((e=>{r.setTriggerRef(e),t=e}),s.ref);"function"==typeof n&&n(e)},get id(){return s.id},role:"menuitem",get tabIndex(){return f.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return(0,o.To)((()=>!!r.isOpen()))()?r.contentId():void 0},get"aria-disabled"(){return s.disabled},get"data-key"(){return f.dataKey()},get"data-highlighted"(){return g().focusedKey()===u()?"":void 0},get"data-disabled"(){return s.disabled?"":void 0},get onPointerDown(){return be([s.onPointerDown,f.onPointerDown])},get onPointerUp(){return be([s.onPointerUp,f.onPointerUp])},get onClick(){return be([p,f.onClick])},get onKeyDown(){return be([h,f.onKeyDown])},get onMouseDown(){return be([s.onMouseDown,f.onMouseDown])},get onFocus(){return be([s.onFocus,f.onFocus])},onPointerMove:e=>{if(ye(e,s.onPointerMove),"mouse"!==e.pointerType)return;const t=r.parentMenuContext();t?.onItemEnter(e),e.defaultPrevented||(s.disabled?t?.onItemLeave(e):(r.isOpen()||l||(r.parentMenuContext()?.setPointerGraceIntent(null),l=window.setTimeout((()=>{r.open(!1),d()}),100)),t?.onItemEnter(e),e.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),we(e.currentTarget),t?.listState().selectionManager().setFocused(!0),t?.listState().selectionManager().setFocusedKey(u()))))},onPointerLeave:e=>{if(ye(e,s.onPointerLeave),"mouse"!==e.pointerType)return;d();const t=r.parentMenuContext(),n=r.contentRef();if(n){t?.setPointerGraceIntent({area:lo(r.currentPlacement(),e,n),side:r.currentPlacement().split("-")[0]}),window.clearTimeout(t?.pointerGraceTimeoutId());const o=window.setTimeout((()=>{t?.setPointerGraceIntent(null)}),300);t?.setPointerGraceTimeoutId(o)}else{if(t?.onTriggerLeave(e),e.defaultPrevented)return;t?.setPointerGraceIntent(null)}t?.onItemLeave(e)}},(()=>r.dataset()),a))}function ho(e){const t=Ur(),n=ze({id:`menu-${(0,o.Ds)()}`,modal:!0},e),[r,i]=(0,o.rg)(n,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),s=tr({open:()=>r.open,defaultOpen:()=>r.defaultOpen,onOpenChange:e=>r.onOpenChange?.(e)}),a={isModal:()=>r.modal??!0,preventScroll:()=>r.preventScroll??a.isModal(),forceMount:()=>r.forceMount??!1,generateId:de((()=>r.id)),value:()=>r.value,orientation:()=>r.orientation??t?.orientation()??"horizontal"};return(0,o.a0)(Pr.Provider,{value:a,get children(){return(0,o.a0)(co,(0,o.v6)({get open(){return s.isOpen()},get onOpenChange(){return s.setIsOpen}},i))}})}function vo(e){let t;const n=ze({orientation:"horizontal"},e),[r,i]=(0,o.rg)(n,["ref","orientation"]),s=He((()=>t),(()=>"hr"));return(0,o.a0)(Ue,(0,o.v6)({as:"hr",ref(e){const n=N((e=>t=e),r.ref);"function"==typeof n&&n(e)},get role(){return"hr"!==s()?"separator":void 0},get"aria-orientation"(){return"vertical"===r.orientation?"vertical":void 0},get"data-orientation"(){return r.orientation}},i))}Je({},{Root:()=>vo,Separator:()=>yo});var yo=vo,bo={};function mo(e){const t=Br(),n=Ar(),[r,i]=(0,o.rg)(e,["onCloseAutoFocus","onInteractOutside"]);let s=!1;return(0,o.a0)(Qr,(0,o.v6)({onCloseAutoFocus:e=>{r.onCloseAutoFocus?.(e),s||we(n.triggerRef()),s=!1,e.preventDefault()},onInteractOutside:e=>{r.onInteractOutside?.(e),t.isModal()&&!e.detail.isContextMenu||(s=!0)}},i))}function wo(e){const t=ze({id:`dropdownmenu-${(0,o.Ds)()}`},e);return(0,o.a0)(ho,t)}Je(bo,{Arrow:()=>Nn,CheckboxItem:()=>Hr,Content:()=>mo,DropdownMenu:()=>xo,Group:()=>Zr,GroupLabel:()=>Xr,Icon:()=>Jr,Item:()=>eo,ItemDescription:()=>to,ItemIndicator:()=>no,ItemLabel:()=>ro,Portal:()=>oo,RadioGroup:()=>so,RadioItem:()=>ao,Root:()=>wo,Separator:()=>vo,Sub:()=>uo,SubContent:()=>go,SubTrigger:()=>po,Trigger:()=>Vr});var xo=Object.assign(wo,{Arrow:Nn,CheckboxItem:Hr,Content:mo,Group:Zr,GroupLabel:Xr,Icon:Jr,Item:eo,ItemDescription:to,ItemIndicator:no,ItemLabel:ro,Portal:oo,RadioGroup:so,RadioItem:ao,Separator:vo,Sub:uo,SubContent:go,SubTrigger:po,Trigger:Vr}),ko={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},$o=(0,o.vs)('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),So=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Co=(0,o.vs)('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),qo=(0,o.vs)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Eo=(0,o.vs)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),To=(0,o.vs)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Mo=(0,o.vs)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Fo=(0,o.vs)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Lo=(0,o.vs)('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),Do=(0,o.vs)('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),zo=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Oo=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ao=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Io=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ko=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Po=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Bo=(0,o.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),Ro=(0,o.vs)('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ho=(0,o.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Go=(0,o.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Uo=(0,o.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Yo=(0,o.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Vo=(0,o.vs)('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function No(){return $o()}function jo(){return So()}function Wo(){return Co()}function Qo(){return qo()}function _o(){return Eo()}function Zo(){return(e=Eo()).style.setProperty("transform","rotate(90deg)"),e;var e}function Xo(){return(e=Eo()).style.setProperty("transform","rotate(-90deg)"),e;var e}function Jo(){return To()}function ei(){return Mo()}function ti(){return Fo()}function ni(){return Lo()}function ri(){return Do()}function oi(){return zo()}function ii(){return Oo()}function si(){return Ao()}function ai(){return Io()}function li(e){return t=Ko(),n=t.firstChild,(0,o.gb)((()=>(0,o.Bq)(n,"stroke","dark"===e.theme?"#12B76A":"#027A48"))),t;var t,n}function di(){return Po()}function ci(){return Bo()}function ui(e){return[(0,o.a0)(o.wv,{get when(){return e.checked},get children(){var t=Ko(),n=t.firstChild;return(0,o.gb)((()=>(0,o.Bq)(n,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF"))),t}}),(0,o.a0)(o.wv,{get when(){return!e.checked},get children(){var t=Ro(),n=t.firstChild;return(0,o.gb)((()=>(0,o.Bq)(n,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF"))),t}})]}function gi(){return Ho()}function fi(){return Go()}function pi(){return Uo()}function hi(){return Yo()}function vi(){const e=(0,o.Ds)();return s=(i=(r=(n=(t=Vo()).firstChild).nextSibling).nextSibling).firstChild,l=(a=i.nextSibling).firstChild,u=(c=(d=a.nextSibling).nextSibling).firstChild,f=(g=c.nextSibling).firstChild,v=(h=(p=g.nextSibling).nextSibling).firstChild,b=(y=h.nextSibling).firstChild,x=(w=(m=y.nextSibling).nextSibling).firstChild,$=(k=w.nextSibling).firstChild,q=(C=(S=k.nextSibling).nextSibling).firstChild,T=(E=C.nextSibling).firstChild,L=(F=(M=E.nextSibling).nextSibling).firstChild,z=(D=F.nextSibling).firstChild,I=(A=(O=D.nextSibling).nextSibling).firstChild,P=(K=A.nextSibling).firstChild,H=(R=(B=K.nextSibling).firstChild.nextSibling.nextSibling.nextSibling).nextSibling,U=(G=B.nextSibling).firstChild,V=(Y=G.nextSibling).firstChild,se=(ie=(oe=(re=(ne=(te=(ee=(J=(X=(Z=(_=(Q=(W=(j=(N=Y.nextSibling).firstChild).nextSibling).nextSibling.firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling,le=(ae=N.nextSibling).firstChild,ce=(de=ae.nextSibling).firstChild,fe=(ge=(ue=de.nextSibling).firstChild).nextSibling,he=(pe=ue.nextSibling).firstChild,ye=(ve=pe.nextSibling).firstChild,Ie=(Ae=(Oe=(ze=(De=(Le=(Fe=(Me=(Te=(Ee=(qe=(Ce=(Se=($e=(ke=(xe=(we=(me=(be=ve.nextSibling).firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling,(0,o.Bq)(n,"id",`a-${e}`),(0,o.Bq)(r,"fill",`url(#a-${e})`),(0,o.Bq)(s,"id",`am-${e}`),(0,o.Bq)(a,"id",`b-${e}`),(0,o.Bq)(l,"filter",`url(#am-${e})`),(0,o.Bq)(d,"mask",`url(#b-${e})`),(0,o.Bq)(u,"id",`ah-${e}`),(0,o.Bq)(g,"id",`k-${e}`),(0,o.Bq)(f,"filter",`url(#ah-${e})`),(0,o.Bq)(p,"mask",`url(#k-${e})`),(0,o.Bq)(v,"id",`ae-${e}`),(0,o.Bq)(y,"id",`j-${e}`),(0,o.Bq)(b,"filter",`url(#ae-${e})`),(0,o.Bq)(m,"mask",`url(#j-${e})`),(0,o.Bq)(x,"id",`ai-${e}`),(0,o.Bq)(k,"id",`i-${e}`),(0,o.Bq)($,"filter",`url(#ai-${e})`),(0,o.Bq)(S,"mask",`url(#i-${e})`),(0,o.Bq)(q,"id",`aj-${e}`),(0,o.Bq)(E,"id",`h-${e}`),(0,o.Bq)(T,"filter",`url(#aj-${e})`),(0,o.Bq)(M,"mask",`url(#h-${e})`),(0,o.Bq)(L,"id",`ag-${e}`),(0,o.Bq)(D,"id",`g-${e}`),(0,o.Bq)(z,"filter",`url(#ag-${e})`),(0,o.Bq)(O,"mask",`url(#g-${e})`),(0,o.Bq)(I,"id",`af-${e}`),(0,o.Bq)(K,"id",`f-${e}`),(0,o.Bq)(P,"filter",`url(#af-${e})`),(0,o.Bq)(B,"mask",`url(#f-${e})`),(0,o.Bq)(R,"id",`m-${e}`),(0,o.Bq)(H,"fill",`url(#m-${e})`),(0,o.Bq)(U,"id",`ak-${e}`),(0,o.Bq)(Y,"id",`e-${e}`),(0,o.Bq)(V,"filter",`url(#ak-${e})`),(0,o.Bq)(N,"mask",`url(#e-${e})`),(0,o.Bq)(j,"id",`n-${e}`),(0,o.Bq)(W,"fill",`url(#n-${e})`),(0,o.Bq)(Q,"id",`r-${e}`),(0,o.Bq)(_,"fill",`url(#r-${e})`),(0,o.Bq)(Z,"id",`s-${e}`),(0,o.Bq)(X,"fill",`url(#s-${e})`),(0,o.Bq)(J,"id",`q-${e}`),(0,o.Bq)(ee,"fill",`url(#q-${e})`),(0,o.Bq)(te,"id",`p-${e}`),(0,o.Bq)(ne,"fill",`url(#p-${e})`),(0,o.Bq)(re,"id",`o-${e}`),(0,o.Bq)(oe,"fill",`url(#o-${e})`),(0,o.Bq)(ie,"id",`l-${e}`),(0,o.Bq)(se,"fill",`url(#l-${e})`),(0,o.Bq)(le,"id",`al-${e}`),(0,o.Bq)(de,"id",`d-${e}`),(0,o.Bq)(ce,"filter",`url(#al-${e})`),(0,o.Bq)(ue,"mask",`url(#d-${e})`),(0,o.Bq)(ge,"id",`u-${e}`),(0,o.Bq)(fe,"fill",`url(#u-${e})`),(0,o.Bq)(he,"id",`ad-${e}`),(0,o.Bq)(ve,"id",`c-${e}`),(0,o.Bq)(ye,"filter",`url(#ad-${e})`),(0,o.Bq)(be,"mask",`url(#c-${e})`),(0,o.Bq)(me,"id",`t-${e}`),(0,o.Bq)(we,"fill",`url(#t-${e})`),(0,o.Bq)(xe,"id",`v-${e}`),(0,o.Bq)(ke,"stroke",`url(#v-${e})`),(0,o.Bq)($e,"id",`aa-${e}`),(0,o.Bq)(Se,"stroke",`url(#aa-${e})`),(0,o.Bq)(Ce,"id",`w-${e}`),(0,o.Bq)(qe,"stroke",`url(#w-${e})`),(0,o.Bq)(Ee,"id",`ac-${e}`),(0,o.Bq)(Te,"stroke",`url(#ac-${e})`),(0,o.Bq)(Me,"id",`ab-${e}`),(0,o.Bq)(Fe,"stroke",`url(#ab-${e})`),(0,o.Bq)(Le,"id",`y-${e}`),(0,o.Bq)(De,"stroke",`url(#y-${e})`),(0,o.Bq)(ze,"id",`x-${e}`),(0,o.Bq)(Oe,"stroke",`url(#x-${e})`),(0,o.Bq)(Ae,"id",`z-${e}`),(0,o.Bq)(Ie,"stroke",`url(#z-${e})`),t;var t,n,r,i,s,a,l,d,c,u,g,f,p,h,v,y,b,m,w,x,k,$,S,C,q,E,T,M,F,L,D,z,O,A,I,K,P,B,R,H,G,U,Y,V,N,j,W,Q,_,Z,X,J,ee,te,ne,re,oe,ie,se,ae,le,de,ce,ue,ge,fe,pe,he,ve,ye,be,me,we,xe,ke,$e,Se,Ce,qe,Ee,Te,Me,Fe,Le,De,ze,Oe,Ae,Ie}var yi=(0,o.vs)('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),bi=(0,o.vs)('<button title="Copy object to clipboard">'),mi=(0,o.vs)('<button title="Remove all items"aria-label="Remove all items">'),wi=(0,o.vs)('<button title="Delete item"aria-label="Delete item">'),xi=(0,o.vs)('<button title="Toggle value"aria-label="Toggle value">'),ki=(0,o.vs)('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),$i=(0,o.vs)("<div>"),Si=(0,o.vs)("<div><button> <span></span> <span> "),Ci=(0,o.vs)("<input>"),qi=(0,o.vs)("<span>"),Ei=(0,o.vs)("<div><span>:"),Ti=(0,o.vs)("<div><div><button> [<!>...<!>]"),Mi=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?Pi(n):Ki(n)));return i=yi(),(0,o.gb)((()=>(0,o.s7)(i,Y(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `)))),i;var i},Fi=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?Pi(n):Ki(n))),[i,s]=(0,o.n5)("NoCopy");return a=bi(),(0,o.q2)(a,"click","NoCopy"===i()?()=>{navigator.clipboard.writeText((0,o.As)(e.value)).then((()=>{s("SuccessCopy"),setTimeout((()=>{s("NoCopy")}),1500)}),(e=>{s("ErrorCopy"),setTimeout((()=>{s("NoCopy")}),1500)}))}:void 0,!0),(0,o.Yr)(a,(0,o.a0)(o.dO,{get children(){return[(0,o.a0)(o.YG,{get when(){return"NoCopy"===i()},get children(){return(0,o.a0)(si,{})}}),(0,o.a0)(o.YG,{get when(){return"SuccessCopy"===i()},get children(){return(0,o.a0)(li,{get theme(){return t()}})}}),(0,o.a0)(o.YG,{get when(){return"ErrorCopy"===i()},get children(){return(0,o.a0)(di,{})}})]}})),(0,o.gb)((e=>{var t=r().actionButton,n="NoCopy"===i()?"Copy object to clipboard":"SuccessCopy"===i()?"Object copied to clipboard":"Error copying object to clipboard";return t!==e.e&&(0,o.s7)(a,e.e=t),n!==e.t&&(0,o.Bq)(a,"aria-label",e.t=n),e}),{e:void 0,t:void 0}),a;var a},Li=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?Pi(n):Ki(n))),i=w().client;return(s=mi()).$$click=()=>{const t=e.activeQuery.state.data,n=(0,o.zt)(t,e.dataPath,[]);i.setQueryData(e.activeQuery.queryKey,n)},(0,o.Yr)(s,(0,o.a0)(ci,{})),(0,o.gb)((()=>(0,o.s7)(s,r().actionButton))),s;var s},Di=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?Pi(n):Ki(n))),i=w().client;return(s=wi()).$$click=()=>{const t=e.activeQuery.state.data,n=(0,o.Dc)(t,e.dataPath);i.setQueryData(e.activeQuery.queryKey,n)},(0,o.Yr)(s,(0,o.a0)(jo,{})),(0,o.gb)((()=>(0,o.s7)(s,Y(r().actionButton)))),s;var s},zi=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?Pi(n):Ki(n))),i=w().client;return(s=xi()).$$click=()=>{const t=e.activeQuery.state.data,n=(0,o.zt)(t,e.dataPath,!e.value);i.setQueryData(e.activeQuery.queryKey,n)},(0,o.Yr)(s,(0,o.a0)(ui,{get theme(){return t()},get checked(){return e.value}})),(0,o.gb)((()=>(0,o.s7)(s,Y(r().actionButton,n`
          width: ${ko.size[3.5]};
          height: ${ko.size[3.5]};
        `)))),s;var s};function Oi(e){return Symbol.iterator in e}function Ai(e){const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?Pi(n):Ki(n))),i=w().client,[s,a]=(0,o.n5)((e.defaultExpanded||[]).includes(e.label)),[l,d]=(0,o.n5)([]),c=(0,o.To)((()=>Array.isArray(e.value)?e.value.map(((e,t)=>({label:t.toString(),value:e}))):null!==e.value&&"object"==typeof e.value&&Oi(e.value)&&"function"==typeof e.value[Symbol.iterator]?e.value instanceof Map?Array.from(e.value,(([e,t])=>({label:e,value:t}))):Array.from(e.value,((e,t)=>({label:t.toString(),value:e}))):"object"==typeof e.value&&null!==e.value?Object.entries(e.value).map((([e,t])=>({label:e,value:t}))):[])),u=(0,o.To)((()=>Array.isArray(e.value)?"array":null!==e.value&&"object"==typeof e.value&&Oi(e.value)&&"function"==typeof e.value[Symbol.iterator]?"Iterable":"object"==typeof e.value&&null!==e.value?"object":typeof e.value)),g=(0,o.To)((()=>function(e){let t=0;const n=[];for(;t<e.length;)n.push(e.slice(t,t+100)),t+=100;return n}(c()))),f=e.dataPath??[];return p=$i(),(0,o.Yr)(p,(0,o.a0)(o.wv,{get when(){return g().length},get children(){return[(t=Si(),n=t.firstChild,i=n.firstChild,p=i.nextSibling,h=p.nextSibling.nextSibling,v=h.firstChild,n.$$click=()=>a((e=>!e)),(0,o.Yr)(n,(0,o.a0)(Mi,{get expanded(){return s()}}),i),(0,o.Yr)(p,(()=>e.label)),(0,o.Yr)(h,(()=>"iterable"===String(u()).toLowerCase()?"(Iterable) ":""),v),(0,o.Yr)(h,(()=>c().length),v),(0,o.Yr)(h,(()=>c().length>1?"items":"item"),null),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return e.editable},get children(){var t=$i();return(0,o.Yr)(t,(0,o.a0)(Fi,{get value(){return e.value}}),null),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,o.a0)(Di,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return"array"===u()&&void 0!==e.activeQuery},get children(){return(0,o.a0)(Li,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!!e.onEdit))()&&!(0,o.lK)(e.value).meta},get children(){var t=ki();return t.$$click=()=>{e.onEdit?.()},(0,o.Yr)(t,(0,o.a0)(ai,{})),(0,o.gb)((()=>(0,o.s7)(t,r().actionButton))),t}}),null),(0,o.gb)((()=>(0,o.s7)(t,r().actions))),t}}),null),(0,o.gb)((e=>{var i=r().expanderButtonContainer,s=r().expanderButton,a=r().info;return i!==e.e&&(0,o.s7)(t,e.e=i),s!==e.t&&(0,o.s7)(n,e.t=s),a!==e.a&&(0,o.s7)(h,e.a=a),e}),{e:void 0,t:void 0,a:void 0}),t),(0,o.a0)(o.wv,{get when(){return s()},get children(){return[(0,o.a0)(o.wv,{get when(){return 1===g().length},get children(){var t=$i();return(0,o.Yr)(t,(0,o.a0)(ne,{get each(){return c()},by:e=>e.label,children:t=>(0,o.a0)(Ai,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...f,t().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return"array"===u()||"Iterable"===u()||"object"===u()}})})),(0,o.gb)((()=>(0,o.s7)(t,r().subEntry))),t}}),(0,o.a0)(o.wv,{get when(){return g().length>1},get children(){var t=$i();return(0,o.Yr)(t,(0,o.a0)(o.jK,{get each(){return g()},children:(t,n)=>{return i=Ti(),s=i.firstChild,(g=(u=(c=(a=s.firstChild).firstChild).nextSibling).nextSibling.nextSibling).nextSibling,a.$$click=()=>d((e=>e.includes(n)?e.filter((e=>e!==n)):[...e,n])),(0,o.Yr)(a,(0,o.a0)(Mi,{get expanded(){return l().includes(n)}}),c),(0,o.Yr)(a,100*n,u),(0,o.Yr)(a,100*n+100-1,g),(0,o.Yr)(s,(0,o.a0)(o.wv,{get when(){return l().includes(n)},get children(){var n=$i();return(0,o.Yr)(n,(0,o.a0)(ne,{get each(){return t()},by:e=>e.label,children:t=>(0,o.a0)(Ai,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...f,t().label]},get activeQuery(){return e.activeQuery}})})),(0,o.gb)((()=>(0,o.s7)(n,r().subEntry))),n}}),null),(0,o.gb)((e=>{var t=r().entry,n=r().expanderButton;return t!==e.e&&(0,o.s7)(s,e.e=t),n!==e.t&&(0,o.s7)(a,e.t=n),e}),{e:void 0,t:void 0}),i;var i,s,a,c,u,g}})),(0,o.gb)((()=>(0,o.s7)(t,r().subEntry))),t}})]}})];var t,n,i,p,h,v}}),null),(0,o.Yr)(p,(0,o.a0)(o.wv,{get when(){return 0===g().length},get children(){var t=Ei(),n=t.firstChild,s=n.firstChild;return(0,o.Yr)(n,(()=>e.label),s),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!(!e.editable||void 0===e.activeQuery)))()&&("string"===u()||"number"===u()||"boolean"===u())},get fallback(){return t=qi(),(0,o.Yr)(t,(()=>(0,o.KN)(e.value))),(0,o.gb)((()=>(0,o.s7)(t,r().value))),t;var t},get children(){return[(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!(!e.editable||void 0===e.activeQuery)))()&&("string"===u()||"number"===u())},get children(){var t=Ci();return t.addEventListener("change",(t=>{const n=e.activeQuery.state.data,r=(0,o.zt)(n,f,"number"===u()?t.target.valueAsNumber:t.target.value);i.setQueryData(e.activeQuery.queryKey,r)})),(0,o.gb)((e=>{var n="number"===u()?"number":"text",i=Y(r().value,r().editableInput);return n!==e.e&&(0,o.Bq)(t,"type",e.e=n),i!==e.t&&(0,o.s7)(t,e.t=i),e}),{e:void 0,t:void 0}),(0,o.gb)((()=>t.value=e.value)),t}}),(0,o.a0)(o.wv,{get when(){return"boolean"===u()},get children(){var t=qi();return(0,o.Yr)(t,(0,o.a0)(zi,{get activeQuery(){return e.activeQuery},dataPath:f,get value(){return e.value}}),null),(0,o.Yr)(t,(()=>(0,o.KN)(e.value)),null),(0,o.gb)((()=>(0,o.s7)(t,Y(r().value,r().actions,r().editableInput)))),t}})]}}),null),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return e.editable&&e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,o.a0)(Di,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),(0,o.gb)((e=>{var i=r().row,s=r().label;return i!==e.e&&(0,o.s7)(t,e.e=i),s!==e.t&&(0,o.s7)(n,e.t=s),e}),{e:void 0,t:void 0}),t}}),null),(0,o.gb)((()=>(0,o.s7)(p,r().entry))),p;var p}var Ii=(e,t)=>{const{colors:n,font:r,size:o,border:i}=ko,s=(t,n)=>"light"===e?t:n;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${s(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${s(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${s(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${s(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${i.radius.xs};
      background-color: ${s(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${s(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${s(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${s(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Ki=e=>Ii("light",e),Pi=e=>Ii("dark",e);(0,o.z_)(["click"]);var Bi=(0,o.vs)('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),Ri=(0,o.vs)("<div>"),Hi=(0,o.vs)('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),Gi=(0,o.vs)("<select name=tsqd-queries-filter-sort>"),Ui=(0,o.vs)("<select name=tsqd-mutations-filter-sort>"),Yi=(0,o.vs)("<span>Asc"),Vi=(0,o.vs)("<span>Desc"),Ni=(0,o.vs)('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),ji=(0,o.vs)("<div>Settings"),Wi=(0,o.vs)("<span>Position"),Qi=(0,o.vs)("<span>Top"),_i=(0,o.vs)("<span>Bottom"),Zi=(0,o.vs)("<span>Left"),Xi=(0,o.vs)("<span>Right"),Ji=(0,o.vs)("<span>Theme"),es=(0,o.vs)("<span>Light"),ts=(0,o.vs)("<span>Dark"),ns=(0,o.vs)("<span>System"),rs=(0,o.vs)("<div><div class=tsqd-queries-container>"),os=(0,o.vs)("<div><div class=tsqd-mutations-container>"),is=(0,o.vs)('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),ss=(0,o.vs)("<option>Sort by "),as=(0,o.vs)("<div class=tsqd-query-disabled-indicator>disabled"),ls=(0,o.vs)("<button><div></div><code class=tsqd-query-hash>"),ds=(0,o.vs)("<div role=tooltip id=tsqd-status-tooltip>"),cs=(0,o.vs)("<span>"),us=(0,o.vs)("<button><span></span><span>"),gs=(0,o.vs)("<button><span></span> Error"),fs=(0,o.vs)('<div><span></span>Trigger Error<select><option value=""disabled selected>'),ps=(0,o.vs)('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),hs=(0,o.vs)("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),vs=(0,o.vs)('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),ys=(0,o.vs)("<option>"),bs=(0,o.vs)('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[ms,ws]=(0,o.n5)(null),[xs,ks]=(0,o.n5)(null),[$s,Ss]=(0,o.n5)(0),[Cs,qs]=(0,o.n5)(!1),Es=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?js(n):Ns(n))),i=$(),s=(0,o.To)((()=>w().buttonPosition||"bottom-right")),a=(0,o.To)((()=>"true"===e.localStore.open||"false"!==e.localStore.open&&(w().initialIsOpen||!1))),l=(0,o.To)((()=>e.localStore.position||w().position||h));let d;(0,o.EH)((()=>{const t=d.parentElement,n=e.localStore.height||500,r=e.localStore.width||500,o=l();t.style.setProperty("--tsqd-panel-height",`${"top"===o?"-":""}${n}px`),t.style.setProperty("--tsqd-panel-width",`${"left"===o?"-":""}${r}px`)})),(0,o.Rc)((()=>{const e=()=>{const e=d.parentElement,t=getComputedStyle(e).fontSize;e.style.setProperty("--tsqd-font-size",t)};e(),window.addEventListener("focus",e),(0,o.Ki)((()=>{window.removeEventListener("focus",e)}))}));const c=(0,o.To)((()=>e.localStore.pip_open??"false"));return[(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!!i().pipWindow))()&&"true"==c()},get children(){return(0,o.a0)(o.ZL,{get mount(){return i().pipWindow?.document.body},get children(){return(0,o.a0)(Ts,{get children(){return(0,o.a0)(Ls,e)}})}})}}),(u=Ri(),g=d,"function"==typeof g?(0,o.Yx)(g,u):d=u,(0,o.Yr)(u,(0,o.a0)(J,{name:"tsqd-panel-transition",get children(){return(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!(!a()||i().pipWindow)))()&&"false"==c()},get children(){return(0,o.a0)(Fs,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),(0,o.Yr)(u,(0,o.a0)(J,{name:"tsqd-button-transition",get children(){return(0,o.a0)(o.wv,{get when(){return!a()},get children(){var t=Bi(),n=t.firstChild,i=n.nextSibling;return(0,o.Yr)(n,(0,o.a0)(vi,{})),i.$$click=()=>e.setLocalStore("open","true"),(0,o.Yr)(i,(0,o.a0)(vi,{})),(0,o.gb)((()=>(0,o.s7)(t,Y(r().devtoolsBtn,r()[`devtoolsBtn-position-${s()}`],"tsqd-open-btn-container")))),t}})}}),null),(0,o.gb)((()=>(0,o.s7)(u,Y(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${"top"===l()||"bottom"===l()?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${"relative"===s()?"none;":"top-left"===s()?"translateX(-72px);":"top-right"===s()?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container")))),u)];var u,g},Ts=e=>{const t=$(),n=C(),r=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,i=(0,o.To)((()=>"dark"===n()?js(r):Ns(r)));return(0,o.EH)((()=>{const e=t().pipWindow,n=()=>{e&&Ss(e.innerWidth)};e&&(e.addEventListener("resize",n),n()),(0,o.Ki)((()=>{e&&e.removeEventListener("resize",n)}))})),(s=Ri()).style.setProperty("--tsqd-font-size","16px"),s.style.setProperty("max-height","100vh"),s.style.setProperty("height","100vh"),s.style.setProperty("width","100vw"),(0,o.Yr)(s,(()=>e.children)),(0,o.gb)((()=>(0,o.s7)(s,Y(i().panel,(()=>{const{colors:e}=ko,t=(e,t)=>"dark"===n()?t:e;return $s()<p?r`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `})(),{[r`
            min-width: min-content;
          `]:$s()<700},"tsqd-main-panel")))),s;var s},Ms=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?js(n):Ns(n)));let i;return(0,o.Rc)((()=>{re(i,(({width:e},t)=>{t===i&&Ss(e)}))})),s=Ri(),"function"==typeof(a=i)?(0,o.Yx)(a,s):i=s,s.style.setProperty("--tsqd-font-size","16px"),(0,o.Yr)(s,(()=>e.children)),(0,o.gb)((()=>(0,o.s7)(s,Y(r().parentPanel,(()=>{const{colors:e}=ko,r=(e,n)=>"dark"===t()?n:e;return $s()<p?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `})(),{[n`
            min-width: min-content;
          `]:$s()<700},"tsqd-main-panel")))),s;var s,a},Fs=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?js(n):Ns(n))),[i,s]=(0,o.n5)(!1),a=(0,o.To)((()=>e.localStore.position||w().position||h));let l;return(0,o.Rc)((()=>{re(l,(({width:e},t)=>{t===l&&Ss(e)}))})),(0,o.EH)((()=>{const t=l.parentElement?.parentElement?.parentElement;if(!t)return;const n=e.localStore.position||h,r=(0,o.zZ)("padding",n),i="left"===e.localStore.position||"right"===e.localStore.position,s=(({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:o})=>({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:o}))(t.style);t.style[r]=`${i?e.localStore.width:e.localStore.height}px`,(0,o.Ki)((()=>{Object.entries(s).forEach((([e,n])=>{t.style[e]=n}))}))})),d=Hi(),c=d.firstChild,u=c.nextSibling,"function"==typeof(g=l)?(0,o.Yx)(g,d):l=d,c.$$mousedown=t=>{const n=t.currentTarget.parentElement;if(!n)return;s(!0);const{height:r,width:l}=n.getBoundingClientRect(),d=t.clientX,c=t.clientY;let u=0;const g=(0,o.mO)(3.5),f=(0,o.mO)(12),p=t=>{if(t.preventDefault(),"left"===a()||"right"===a()){const r="right"===a()?d-t.clientX:t.clientX-d;u=Math.round(l+r),u<f&&(u=f),e.setLocalStore("width",String(Math.round(u)));const o=n.getBoundingClientRect().width;Number(e.localStore.width)<o&&e.setLocalStore("width",String(o))}else{const n="bottom"===a()?c-t.clientY:t.clientY-c;u=Math.round(r+n),u<g&&(u=g,ws(null)),e.setLocalStore("height",String(Math.round(u)))}},h=()=>{i()&&s(!1),document.removeEventListener("mousemove",p,!1),document.removeEventListener("mouseUp",h,!1)};document.addEventListener("mousemove",p,!1),document.addEventListener("mouseup",h,!1)},u.$$click=()=>e.setLocalStore("open","false"),(0,o.Yr)(u,(0,o.a0)(Wo,{})),(0,o.Yr)(d,(0,o.a0)(Ls,e),null),(0,o.gb)((i=>{var s=Y(r().panel,r()[`panel-position-${a()}`],(()=>{const{colors:e}=ko,r=(e,n)=>"dark"===t()?n:e;return $s()<p?n`
        flex-direction: column;
        background-color: ${r(e.gray[300],e.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${r(e.gray[200],e.darkGray[900])};
    `})(),{[n`
            min-width: min-content;
          `]:$s()<700&&("right"===a()||"left"===a())},"tsqd-main-panel"),l="bottom"===a()||"top"===a()?`${e.localStore.height||500}px`:"auto",g="right"===a()||"left"===a()?`${e.localStore.width||500}px`:"auto",f=Y(r().dragHandle,r()[`dragHandle-position-${a()}`],"tsqd-drag-handle"),h=Y(r().closeBtn,r()[`closeBtn-position-${a()}`],"tsqd-minimize-btn");return s!==i.e&&(0,o.s7)(d,i.e=s),l!==i.t&&(null!=(i.t=l)?d.style.setProperty("height",l):d.style.removeProperty("height")),g!==i.a&&(null!=(i.a=g)?d.style.setProperty("width",g):d.style.removeProperty("width")),f!==i.o&&(0,o.s7)(c,i.o=f),h!==i.i&&(0,o.s7)(u,i.i=h),i}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),d;var d,c,u,g},Ls=e=>{let t;Rs(),Us();const n=C(),r=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,i=(0,o.To)((()=>"dark"===n()?js(r):Ns(r))),s=$(),[a,l]=(0,o.n5)("queries"),d=(0,o.To)((()=>e.localStore.sort||y)),c=(0,o.To)((()=>Number(e.localStore.sortOrder)||1)),u=(0,o.To)((()=>e.localStore.mutationSort||b)),g=(0,o.To)((()=>Number(e.localStore.mutationSortOrder)||1)),f=(0,o.To)((()=>o.O$[d()])),h=(0,o.To)((()=>o.bs[u()])),v=(0,o.To)((()=>w().onlineManager)),m=(0,o.To)((()=>w().client.getQueryCache())),x=(0,o.To)((()=>w().client.getMutationCache())),k=Hs((e=>e().getAll().length),!1),S=(0,o.To)((0,o.on)((()=>[k(),e.localStore.filter,d(),c()]),(()=>{const t=m().getAll(),n=e.localStore.filter?t.filter((t=>M(t.queryHash,e.localStore.filter||"").passed)):[...t];return f()?n.sort(((e,t)=>f()(e,t)*c())):n}))),q=Ys((e=>e().getAll().length),!1),E=(0,o.To)((0,o.on)((()=>[q(),e.localStore.mutationFilter,u(),g()]),(()=>{const t=x().getAll(),n=e.localStore.mutationFilter?t.filter((t=>M(`${t.options.mutationKey?JSON.stringify(t.options.mutationKey)+" - ":""}${new Date(t.state.submittedAt).toLocaleString()}`,e.localStore.mutationFilter||"").passed)):[...t];return h()?n.sort(((e,t)=>h()(e,t)*g())):n}))),T=t=>{e.setLocalStore("position",t)},F=e=>{const n=getComputedStyle(t).getPropertyValue("--tsqd-font-size");e.style.setProperty("--tsqd-font-size",n)};return[(D=is(),z=D.firstChild,O=z.firstChild,A=O.firstChild,I=A.firstChild,K=I.nextSibling,P=K.firstChild,B=z.nextSibling,R=B.firstChild,H=R.firstChild,U=H.firstChild,V=H.nextSibling,N=V.nextSibling,j=R.nextSibling,W=j.firstChild,Q=W.nextSibling,_=t,"function"==typeof _?(0,o.Yx)(_,D):t=D,A.$$click=()=>{s().pipWindow||e.showPanelViewOnly?e.onClose&&e.onClose():e.setLocalStore("open","false")},(0,o.Yr)(K,(()=>w().queryFlavor),P),(0,o.Yr)(K,(()=>w().version),null),(0,o.Yr)(O,(0,o.a0)(nr.Root,{get class(){return Y(i().viewToggle)},get value(){return a()},onChange:e=>{l(e),ws(null),ks(null)},get children(){return[(0,o.a0)(nr.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[(0,o.a0)(nr.ItemInput,{}),(0,o.a0)(nr.ItemControl,{get children(){return(0,o.a0)(nr.ItemIndicator,{})}}),(0,o.a0)(nr.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),(0,o.a0)(nr.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[(0,o.a0)(nr.ItemInput,{}),(0,o.a0)(nr.ItemControl,{get children(){return(0,o.a0)(nr.ItemIndicator,{})}}),(0,o.a0)(nr.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),(0,o.Yr)(z,(0,o.a0)(o.wv,{get when(){return"queries"===a()},get children(){return(0,o.a0)(Os,{})}}),null),(0,o.Yr)(z,(0,o.a0)(o.wv,{get when(){return"mutations"===a()},get children(){return(0,o.a0)(As,{})}}),null),(0,o.Yr)(H,(0,o.a0)(No,{}),U),U.$$input=t=>{"queries"===a()?e.setLocalStore("filter",t.currentTarget.value):e.setLocalStore("mutationFilter",t.currentTarget.value)},(0,o.Yr)(V,(0,o.a0)(o.wv,{get when(){return"queries"===a()},get children(){var t=Gi();return t.addEventListener("change",(t=>{e.setLocalStore("sort",t.currentTarget.value)})),(0,o.Yr)(t,(()=>Object.keys(o.O$).map((e=>{return(t=ss()).firstChild,t.value=e,(0,o.Yr)(t,e,null),t;var t})))),(0,o.gb)((()=>t.value=d())),t}}),null),(0,o.Yr)(V,(0,o.a0)(o.wv,{get when(){return"mutations"===a()},get children(){var t=Ui();return t.addEventListener("change",(t=>{e.setLocalStore("mutationSort",t.currentTarget.value)})),(0,o.Yr)(t,(()=>Object.keys(o.bs).map((e=>{return(t=ss()).firstChild,t.value=e,(0,o.Yr)(t,e,null),t;var t})))),(0,o.gb)((()=>t.value=u())),t}}),null),(0,o.Yr)(V,(0,o.a0)(Wo,{}),null),N.$$click=()=>{"queries"===a()?e.setLocalStore("sortOrder",String(-1*c())):e.setLocalStore("mutationSortOrder",String(-1*g()))},(0,o.Yr)(N,(0,o.a0)(o.wv,{get when(){return 1===("queries"===a()?c():g())},get children(){return[Yi(),(0,o.a0)(Qo,{})]}}),null),(0,o.Yr)(N,(0,o.a0)(o.wv,{get when(){return-1===("queries"===a()?c():g())},get children(){return[Vi(),(0,o.a0)(_o,{})]}}),null),W.$$click=()=>{"queries"===a()?m().clear():x().clear()},(0,o.Yr)(W,(0,o.a0)(jo,{})),Q.$$click=()=>{Cs()?(v().setOnline(!0),qs(!1)):(v().setOnline(!1),qs(!0))},(0,o.Yr)(Q,(L=(0,o.To)((()=>!!Cs())),()=>L()?(0,o.a0)(ri,{}):(0,o.a0)(ni,{}))),(0,o.Yr)(j,(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!s().pipWindow))()&&!s().disabled},get children(){var t=Ni();return t.$$click=()=>{s().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},(0,o.Yr)(t,(0,o.a0)(ii,{})),(0,o.gb)((()=>(0,o.s7)(t,Y(i().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip")))),t}}),null),(0,o.Yr)(j,(0,o.a0)(bo.Root,{gutter:4,get children(){return[(0,o.a0)(bo.Trigger,{get class(){return Y(i().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return(0,o.a0)(oi,{})}}),(0,o.a0)(bo.Portal,{ref:e=>F(e),get mount(){return(0,o.To)((()=>!!s().pipWindow))()?s().pipWindow.document.body:document.body},get children(){return(0,o.a0)(bo.Content,{get class(){return Y(i().settingsMenu,"tsqd-settings-menu")},get children(){return[(t=ji(),(0,o.gb)((()=>(0,o.s7)(t,Y(i().settingsMenuHeader,"tsqd-settings-menu-header")))),t),(0,o.a0)(o.wv,{get when(){return!e.showPanelViewOnly},get children(){return(0,o.a0)(bo.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,o.a0)(bo.SubTrigger,{get class(){return Y(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Wi(),(0,o.a0)(Wo,{})]}}),(0,o.a0)(bo.Portal,{ref:e=>F(e),get mount(){return(0,o.To)((()=>!!s().pipWindow))()?s().pipWindow.document.body:document.body},get children(){return(0,o.a0)(bo.SubContent,{get class(){return Y(i().settingsMenu,"tsqd-settings-submenu")},get children(){return[(0,o.a0)(bo.Item,{onSelect:()=>{T("top")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Qi(),(0,o.a0)(Qo,{})]}}),(0,o.a0)(bo.Item,{onSelect:()=>{T("bottom")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[_i(),(0,o.a0)(_o,{})]}}),(0,o.a0)(bo.Item,{onSelect:()=>{T("left")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Zi(),(0,o.a0)(Zo,{})]}}),(0,o.a0)(bo.Item,{onSelect:()=>{T("right")},as:"button",get class(){return Y(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Xi(),(0,o.a0)(Xo,{})]}})]}})}})]}})}}),(0,o.a0)(bo.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,o.a0)(bo.SubTrigger,{get class(){return Y(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Ji(),(0,o.a0)(Wo,{})]}}),(0,o.a0)(bo.Portal,{ref:e=>F(e),get mount(){return(0,o.To)((()=>!!s().pipWindow))()?s().pipWindow.document.body:document.body},get children(){return(0,o.a0)(bo.SubContent,{get class(){return Y(i().settingsMenu,"tsqd-settings-submenu")},get children(){return[(0,o.a0)(bo.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return Y(i().settingsSubButton,"light"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[es(),(0,o.a0)(Jo,{})]}}),(0,o.a0)(bo.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return Y(i().settingsSubButton,"dark"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[ts(),(0,o.a0)(ei,{})]}}),(0,o.a0)(bo.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return Y(i().settingsSubButton,"system"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[ns(),(0,o.a0)(ti,{})]}})]}})}})]}})];var t}})}})]}}),null),(0,o.Yr)(D,(0,o.a0)(o.wv,{get when(){return"queries"===a()},get children(){var e=rs(),t=e.firstChild;return(0,o.Yr)(t,(0,o.a0)(ne,{by:e=>e.queryHash,get each(){return S()},children:e=>(0,o.a0)(Ds,{get query(){return e()}})})),(0,o.gb)((()=>(0,o.s7)(e,Y(i().overflowQueryContainer,"tsqd-queries-overflow-container")))),e}}),null),(0,o.Yr)(D,(0,o.a0)(o.wv,{get when(){return"mutations"===a()},get children(){var e=os(),t=e.firstChild;return(0,o.Yr)(t,(0,o.a0)(ne,{by:e=>e.mutationId,get each(){return E()},children:e=>(0,o.a0)(zs,{get mutation(){return e()}})})),(0,o.gb)((()=>(0,o.s7)(e,Y(i().overflowQueryContainer,"tsqd-mutations-overflow-container")))),e}}),null),(0,o.gb)((e=>{var t=Y(i().queriesContainer,$s()<p&&(ms()||xs())&&r`
              height: 50%;
              max-height: 50%;
            `,$s()<p&&!(ms()||xs())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),n=Y(i().row,"tsqd-header"),s=i().logoAndToggleContainer,l=Y(i().logo,"tsqd-text-logo-container"),d=Y(i().tanstackLogo,"tsqd-text-logo-tanstack"),u=Y(i().queryFlavorLogo,"tsqd-text-logo-query-flavor"),f=Y(i().row,"tsqd-filters-actions-container"),h=Y(i().filtersContainer,"tsqd-filters-container"),v=Y(i().filterInput,"tsqd-query-filter-textfield-container"),y=Y("tsqd-query-filter-textfield"),b=Y(i().filterSelect,"tsqd-query-filter-sort-container"),m="Sort order "+(-1===("queries"===a()?c():g())?"descending":"ascending"),w=-1===("queries"===a()?c():g()),x=Y(i().actionsContainer,"tsqd-actions-container"),k=Y(i().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),$=`Clear ${a()} cache`,S=Y(i().actionsBtn,Cs()&&i().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),C=Cs()?"Unset offline mocking behavior":"Mock offline behavior",q=Cs(),E=Cs()?"Unset offline mocking behavior":"Mock offline behavior";return t!==e.e&&(0,o.s7)(D,e.e=t),n!==e.t&&(0,o.s7)(z,e.t=n),s!==e.a&&(0,o.s7)(O,e.a=s),l!==e.o&&(0,o.s7)(A,e.o=l),d!==e.i&&(0,o.s7)(I,e.i=d),u!==e.n&&(0,o.s7)(K,e.n=u),f!==e.s&&(0,o.s7)(B,e.s=f),h!==e.h&&(0,o.s7)(R,e.h=h),v!==e.r&&(0,o.s7)(H,e.r=v),y!==e.d&&(0,o.s7)(U,e.d=y),b!==e.l&&(0,o.s7)(V,e.l=b),m!==e.u&&(0,o.Bq)(N,"aria-label",e.u=m),w!==e.c&&(0,o.Bq)(N,"aria-pressed",e.c=w),x!==e.w&&(0,o.s7)(j,e.w=x),k!==e.m&&(0,o.s7)(W,e.m=k),$!==e.f&&(0,o.Bq)(W,"title",e.f=$),S!==e.y&&(0,o.s7)(Q,e.y=S),C!==e.g&&(0,o.Bq)(Q,"aria-label",e.g=C),q!==e.p&&(0,o.Bq)(Q,"aria-pressed",e.p=q),E!==e.b&&(0,o.Bq)(Q,"title",e.b=E),e}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),(0,o.gb)((()=>U.value="queries"===a()?e.localStore.filter||"":e.localStore.mutationFilter||"")),D),(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>"queries"===a()))()&&ms()},get children(){return(0,o.a0)(Ks,{})}}),(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>"mutations"===a()))()&&xs()},get children(){return(0,o.a0)(Ps,{})}})];var L,D,z,O,A,I,K,P,B,R,H,U,V,N,j,W,Q,_},Ds=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?js(n):Ns(n))),{colors:i,alpha:s}=ko,a=(e,n)=>"dark"===t()?n:e,l=Hs((t=>t().find({queryKey:e.query.queryKey})?.state),!0,(t=>t.query.queryHash===e.query.queryHash)),d=Hs((t=>t().find({queryKey:e.query.queryKey})?.isDisabled()??!1),!0,(t=>t.query.queryHash===e.query.queryHash)),c=Hs((t=>t().find({queryKey:e.query.queryKey})?.isStale()??!1),!0,(t=>t.query.queryHash===e.query.queryHash)),u=Hs((t=>t().find({queryKey:e.query.queryKey})?.getObserversCount()??0),!0,(t=>t.query.queryHash===e.query.queryHash)),g=(0,o.To)((()=>(0,o.MI)({queryState:l(),observerCount:u(),isStale:c()})));return(0,o.a0)(o.wv,{get when(){return l()},get children(){var t=ls(),l=t.firstChild,c=l.nextSibling;return t.$$click=()=>ws(e.query.queryHash===ms()?null:e.query.queryHash),(0,o.Yr)(l,u),(0,o.Yr)(c,(()=>e.query.queryHash)),(0,o.Yr)(t,(0,o.a0)(o.wv,{get when(){return d()},get children(){return as()}}),null),(0,o.gb)((d=>{var c=Y(r().queryRow,ms()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),u=`Query key ${e.query.queryHash}`,f=Y("gray"===g()?n`
        background-color: ${a(i[g()][200],i[g()][700])};
        color: ${a(i[g()][700],i[g()][300])};
      `:n`
      background-color: ${a(i[g()][200]+s[80],i[g()][900])};
      color: ${a(i[g()][800],i[g()][300])};
    `,"tsqd-query-observer-count");return c!==d.e&&(0,o.s7)(t,d.e=c),u!==d.t&&(0,o.Bq)(t,"aria-label",d.t=u),f!==d.a&&(0,o.s7)(l,d.a=f),d}),{e:void 0,t:void 0,a:void 0}),t}})},zs=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?js(n):Ns(n))),{colors:i,alpha:s}=ko,a=(e,n)=>"dark"===t()?n:e,l=Ys((t=>{const n=t().getAll().find((t=>t.mutationId===e.mutation.mutationId));return n?.state})),d=Ys((t=>{const n=t().getAll().find((t=>t.mutationId===e.mutation.mutationId));return!!n&&n.state.isPaused})),c=Ys((t=>{const n=t().getAll().find((t=>t.mutationId===e.mutation.mutationId));return n?n.state.status:"idle"})),u=(0,o.To)((()=>(0,o.TH)({isPaused:d(),status:c()})));return(0,o.a0)(o.wv,{get when(){return l()},get children(){var t=ls(),l=t.firstChild,d=l.nextSibling;return t.$$click=()=>{ks(e.mutation.mutationId===xs()?null:e.mutation.mutationId)},(0,o.Yr)(l,(0,o.a0)(o.wv,{get when(){return"purple"===u()},get children(){return(0,o.a0)(hi,{})}}),null),(0,o.Yr)(l,(0,o.a0)(o.wv,{get when(){return"green"===u()},get children(){return(0,o.a0)(gi,{})}}),null),(0,o.Yr)(l,(0,o.a0)(o.wv,{get when(){return"red"===u()},get children(){return(0,o.a0)(pi,{})}}),null),(0,o.Yr)(l,(0,o.a0)(o.wv,{get when(){return"yellow"===u()},get children(){return(0,o.a0)(fi,{})}}),null),(0,o.Yr)(d,(0,o.a0)(o.wv,{get when(){return e.mutation.options.mutationKey},get children(){return[(0,o.To)((()=>JSON.stringify(e.mutation.options.mutationKey)))," -"," "]}}),null),(0,o.Yr)(d,(()=>new Date(e.mutation.state.submittedAt).toLocaleString()),null),(0,o.gb)((d=>{var c=Y(r().queryRow,xs()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),g=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,f=Y("gray"===u()?n`
        background-color: ${a(i[u()][200],i[u()][700])};
        color: ${a(i[u()][700],i[u()][300])};
      `:n`
      background-color: ${a(i[u()][200]+s[80],i[u()][900])};
      color: ${a(i[u()][800],i[u()][300])};
    `,"tsqd-query-observer-count");return c!==d.e&&(0,o.s7)(t,d.e=c),g!==d.t&&(0,o.Bq)(t,"aria-label",d.t=g),f!==d.a&&(0,o.s7)(l,d.a=f),d}),{e:void 0,t:void 0,a:void 0}),t}})},Os=()=>{const e=Hs((e=>e().getAll().filter((e=>"stale"===(0,o.lR)(e))).length)),t=Hs((e=>e().getAll().filter((e=>"fresh"===(0,o.lR)(e))).length)),n=Hs((e=>e().getAll().filter((e=>"fetching"===(0,o.lR)(e))).length)),r=Hs((e=>e().getAll().filter((e=>"paused"===(0,o.lR)(e))).length)),i=Hs((e=>e().getAll().filter((e=>"inactive"===(0,o.lR)(e))).length)),s=C(),a=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,l=(0,o.To)((()=>"dark"===s()?js(a):Ns(a)));return d=Ri(),(0,o.Yr)(d,(0,o.a0)(Is,{label:"Fresh",color:"green",get count(){return t()}}),null),(0,o.Yr)(d,(0,o.a0)(Is,{label:"Fetching",color:"blue",get count(){return n()}}),null),(0,o.Yr)(d,(0,o.a0)(Is,{label:"Paused",color:"purple",get count(){return r()}}),null),(0,o.Yr)(d,(0,o.a0)(Is,{label:"Stale",color:"yellow",get count(){return e()}}),null),(0,o.Yr)(d,(0,o.a0)(Is,{label:"Inactive",color:"gray",get count(){return i()}}),null),(0,o.gb)((()=>(0,o.s7)(d,Y(l().queryStatusContainer,"tsqd-query-status-container")))),d;var d},As=()=>{const e=Ys((e=>e().getAll().filter((e=>"green"===(0,o.TH)({isPaused:e.state.isPaused,status:e.state.status}))).length)),t=Ys((e=>e().getAll().filter((e=>"yellow"===(0,o.TH)({isPaused:e.state.isPaused,status:e.state.status}))).length)),n=Ys((e=>e().getAll().filter((e=>"purple"===(0,o.TH)({isPaused:e.state.isPaused,status:e.state.status}))).length)),r=Ys((e=>e().getAll().filter((e=>"red"===(0,o.TH)({isPaused:e.state.isPaused,status:e.state.status}))).length)),i=C(),s=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,a=(0,o.To)((()=>"dark"===i()?js(s):Ns(s)));return l=Ri(),(0,o.Yr)(l,(0,o.a0)(Is,{label:"Paused",color:"purple",get count(){return n()}}),null),(0,o.Yr)(l,(0,o.a0)(Is,{label:"Pending",color:"yellow",get count(){return t()}}),null),(0,o.Yr)(l,(0,o.a0)(Is,{label:"Success",color:"green",get count(){return e()}}),null),(0,o.Yr)(l,(0,o.a0)(Is,{label:"Error",color:"red",get count(){return r()}}),null),(0,o.gb)((()=>(0,o.s7)(l,Y(a().queryStatusContainer,"tsqd-query-status-container")))),l;var l},Is=e=>{const t=C(),n=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,r=(0,o.To)((()=>"dark"===t()?js(n):Ns(n))),{colors:i,alpha:s}=ko,a=(e,n)=>"dark"===t()?n:e;let l;const[d,c]=(0,o.n5)(!1),[u,g]=(0,o.n5)(!1),f=(0,o.To)((()=>!(ms()&&$s()<1024&&$s()>p||$s()<p)));return h=us(),v=h.firstChild,y=v.nextSibling,"function"==typeof(b=l)?(0,o.Yx)(b,h):l=h,h.addEventListener("mouseleave",(()=>{c(!1),g(!1)})),h.addEventListener("mouseenter",(()=>c(!0))),h.addEventListener("blur",(()=>g(!1))),h.addEventListener("focus",(()=>g(!0))),(0,o.il)(h,(0,o.v6)({get disabled(){return f()},get class(){return Y(r().queryStatusTag,!f()&&n`
            cursor: pointer;
            &:hover {
              background: ${a(i.gray[200],i.darkGray[400])}${s[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},(()=>d()||u()?{"aria-describedby":"tsqd-status-tooltip"}:{})),!1,!0),(0,o.Yr)(h,(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!f()))()&&(d()||u())},get children(){var t=ds();return(0,o.Yr)(t,(()=>e.label)),(0,o.gb)((()=>(0,o.s7)(t,Y(r().statusTooltip,"tsqd-query-status-tooltip")))),t}}),v),(0,o.Yr)(h,(0,o.a0)(o.wv,{get when(){return f()},get children(){var t=cs();return(0,o.Yr)(t,(()=>e.label)),(0,o.gb)((()=>(0,o.s7)(t,Y(r().queryStatusTagLabel,"tsqd-query-status-tag-label")))),t}}),y),(0,o.Yr)(y,(()=>e.count)),(0,o.gb)((t=>{var s=Y(n`
            width: ${ko.size[1.5]};
            height: ${ko.size[1.5]};
            border-radius: ${ko.border.radius.full};
            background-color: ${ko.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),l=Y(r().queryStatusCount,e.count>0&&"gray"!==e.color&&n`
              background-color: ${a(i[e.color][100],i[e.color][900])};
              color: ${a(i[e.color][700],i[e.color][300])};
            `,"tsqd-query-status-tag-count");return s!==t.e&&(0,o.s7)(v,t.e=s),l!==t.t&&(0,o.s7)(y,t.t=l),t}),{e:void 0,t:void 0}),h;var h,v,y,b},Ks=()=>{const e=C(),t=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,n=(0,o.To)((()=>"dark"===e()?js(t):Ns(t))),{colors:r}=ko,i=(t,n)=>"dark"===e()?n:t,s=w().client,[a,l]=(0,o.n5)(!1),[d,c]=(0,o.n5)("view"),[u,g]=(0,o.n5)(!1),f=(0,o.To)((()=>w().errorTypes||[])),p=Hs((e=>e().getAll().find((e=>e.queryHash===ms()))),!1),h=Hs((e=>e().getAll().find((e=>e.queryHash===ms()))),!1),v=Hs((e=>e().getAll().find((e=>e.queryHash===ms()))?.state),!1),y=Hs((e=>e().getAll().find((e=>e.queryHash===ms()))?.state.data),!1),b=Hs((e=>{const t=e().getAll().find((e=>e.queryHash===ms()));return t?(0,o.lR)(t):"inactive"})),m=Hs((e=>{const t=e().getAll().find((e=>e.queryHash===ms()));return t?t.state.status:"pending"})),x=Hs((e=>e().getAll().find((e=>e.queryHash===ms()))?.getObserversCount()??0)),k=(0,o.To)((()=>(0,o.ZZ)(b()))),$=()=>{const e=p()?.fetch();e?.catch((()=>{}))},S=e=>{const t=e?.initializer(p())??new Error("Unknown error from devtools"),n=p().options;p().setState({status:"error",error:t,fetchMeta:{...p().state.fetchMeta,__previousQueryOptions:n}})};return(0,o.EH)((()=>{"fetching"!==b()&&l(!1)})),(0,o.a0)(o.wv,{get when(){return(0,o.To)((()=>!!p()))()&&v()},get children(){var e=vs(),w=e.firstChild,C=w.nextSibling,q=C.firstChild,E=q.firstChild,T=E.firstChild,M=E.nextSibling,F=q.nextSibling,L=F.firstChild.nextSibling,D=F.nextSibling.firstChild.nextSibling,z=C.nextSibling,O=z.nextSibling,A=O.firstChild,I=A.firstChild,K=A.nextSibling,P=K.firstChild,B=K.nextSibling,R=B.firstChild,H=B.nextSibling,G=H.firstChild,U=H.nextSibling,V=U.firstChild,N=V.nextSibling,j=O.nextSibling;j.firstChild;var W=j.nextSibling,Q=W.nextSibling;return(0,o.Yr)(T,(()=>(0,o.KN)(p().queryKey,!0))),(0,o.Yr)(M,b),(0,o.Yr)(L,x),(0,o.Yr)(D,(()=>new Date(v().dataUpdatedAt).toLocaleTimeString())),A.$$click=$,K.$$click=()=>s.invalidateQueries(p()),B.$$click=()=>s.resetQueries(p()),H.$$click=()=>{s.removeQueries(p()),ws(null)},U.$$click=()=>{if(void 0===p()?.state.data)l(!0),(()=>{const e=p(),t=e.state,n=e.state.fetchMeta?e.state.fetchMeta.__previousQueryOptions:null;e.cancel({silent:!0}),e.setState({...t,fetchStatus:"idle",fetchMeta:null}),n&&e.fetch(n)})();else{const e=p();if(!e)return;const t=e.options;e.fetch({...t,queryFn:()=>new Promise((()=>{})),gcTime:-1}),e.setState({data:void 0,status:"pending",fetchMeta:{...e.state.fetchMeta,__previousQueryOptions:t}})}},(0,o.Yr)(U,(()=>"pending"===m()?"Restore":"Trigger"),N),(0,o.Yr)(O,(0,o.a0)(o.wv,{get when(){return 0===f().length||"error"===m()},get children(){var e=gs(),n=e.firstChild,a=n.nextSibling;return e.$$click=()=>{p().state.error?s.resetQueries(p()):S()},(0,o.Yr)(e,(()=>"error"===m()?"Restore":"Trigger"),a),(0,o.gb)((s=>{var a=Y(t`
                  color: ${i(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),l="pending"===m(),d=t`
                  background-color: ${i(r.red[500],r.red[400])};
                `;return a!==s.e&&(0,o.s7)(e,s.e=a),l!==s.t&&(e.disabled=s.t=l),d!==s.a&&(0,o.s7)(n,s.a=d),s}),{e:void 0,t:void 0,a:void 0}),e}}),null),(0,o.Yr)(O,(0,o.a0)(o.wv,{get when(){return!(0===f().length||"error"===m())},get children(){var e=fs(),r=e.firstChild,i=r.nextSibling.nextSibling;return i.firstChild,i.addEventListener("change",(e=>{const t=f().find((t=>t.name===e.currentTarget.value));S(t)})),(0,o.Yr)(i,(0,o.a0)(o.a,{get each(){return f()},children:e=>{return t=ys(),(0,o.Yr)(t,(()=>e.name)),(0,o.gb)((()=>t.value=e.name)),t;var t}}),null),(0,o.Yr)(e,(0,o.a0)(Wo,{}),null),(0,o.gb)((s=>{var a=Y(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),l=t`
                  background-color: ${ko.colors.red[400]};
                `,d="pending"===m();return a!==s.e&&(0,o.s7)(e,s.e=a),l!==s.t&&(0,o.s7)(r,s.t=l),d!==s.a&&(i.disabled=s.a=d),s}),{e:void 0,t:void 0,a:void 0}),e}}),null),(0,o.Yr)(j,(()=>"view"===d()?"Explorer":"Editor"),null),(0,o.Yr)(e,(0,o.a0)(o.wv,{get when(){return"view"===d()},get children(){var e=ps();return(0,o.Yr)(e,(0,o.a0)(Ai,{label:"Data",defaultExpanded:["Data"],get value(){return y()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return p()}})),(0,o.gb)((t=>null!=(t=ko.size[2])?e.style.setProperty("padding",t):e.style.removeProperty("padding"))),e}}),W),(0,o.Yr)(e,(0,o.a0)(o.wv,{get when(){return"edit"===d()},get children(){var e=hs(),s=e.firstChild,a=s.nextSibling,l=a.firstChild,d=l.nextSibling,f=d.firstChild,h=f.nextSibling;return e.addEventListener("submit",(e=>{e.preventDefault();const t=new FormData(e.currentTarget).get("data");try{const e=JSON.parse(t);p().setState({...p().state,data:e}),c("view")}catch(e){g(!0)}})),s.addEventListener("focus",(()=>g(!1))),(0,o.Yr)(l,(()=>u()?"Invalid Value":"")),f.$$click=()=>c("view"),(0,o.gb)((c=>{var g=Y(n().devtoolsEditForm,"tsqd-query-details-data-editor"),p=n().devtoolsEditTextarea,v=u(),y=n().devtoolsEditFormActions,b=n().devtoolsEditFormError,m=n().devtoolsEditFormActionContainer,w=Y(n().devtoolsEditFormAction,t`
                      color: ${i(r.gray[600],r.gray[300])};
                    `),x=Y(n().devtoolsEditFormAction,t`
                      color: ${i(r.blue[600],r.blue[400])};
                    `);return g!==c.e&&(0,o.s7)(e,c.e=g),p!==c.t&&(0,o.s7)(s,c.t=p),v!==c.a&&(0,o.Bq)(s,"data-error",c.a=v),y!==c.o&&(0,o.s7)(a,c.o=y),b!==c.i&&(0,o.s7)(l,c.i=b),m!==c.n&&(0,o.s7)(d,c.n=m),w!==c.s&&(0,o.s7)(f,c.s=w),x!==c.h&&(0,o.s7)(h,c.h=x),c}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),(0,o.gb)((()=>s.value=JSON.stringify(y(),null,2))),e}}),W),(0,o.Yr)(Q,(0,o.a0)(Ai,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),(0,o.gb)((s=>{var l=Y(n().detailsContainer,"tsqd-query-details-container"),d=Y(n().detailsHeader,"tsqd-query-details-header"),c=Y(n().detailsBody,"tsqd-query-details-summary-container"),u=Y(n().queryDetailsStatus,"gray"===k()?t`
        background-color: ${i(r[k()][200],r[k()][700])};
        color: ${i(r[k()][700],r[k()][300])};
        border-color: ${i(r[k()][400],r[k()][600])};
      `:t`
      background-color: ${i(r[k()][100],r[k()][900])};
      color: ${i(r[k()][700],r[k()][300])};
      border-color: ${i(r[k()][400],r[k()][600])};
    `),g=Y(n().detailsHeader,"tsqd-query-details-header"),f=Y(n().actionsBody,"tsqd-query-details-actions-container"),p=Y(t`
                color: ${i(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),h="fetching"===b(),v=t`
                background-color: ${i(r.blue[600],r.blue[400])};
              `,y=Y(t`
                color: ${i(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),x="pending"===m(),$=t`
                background-color: ${i(r.yellow[600],r.yellow[400])};
              `,S=Y(t`
                color: ${i(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),q="pending"===m(),E=t`
                background-color: ${i(r.gray[600],r.gray[400])};
              `,T=Y(t`
                color: ${i(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),F="fetching"===b(),L=t`
                background-color: ${i(r.pink[500],r.pink[400])};
              `,D=Y(t`
                color: ${i(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),N=a(),_=t`
                background-color: ${i(r.cyan[500],r.cyan[400])};
              `,Z=Y(n().detailsHeader,"tsqd-query-details-header"),X=Y(n().detailsHeader,"tsqd-query-details-header"),J=ko.size[2];return l!==s.e&&(0,o.s7)(e,s.e=l),d!==s.t&&(0,o.s7)(w,s.t=d),c!==s.a&&(0,o.s7)(C,s.a=c),u!==s.o&&(0,o.s7)(M,s.o=u),g!==s.i&&(0,o.s7)(z,s.i=g),f!==s.n&&(0,o.s7)(O,s.n=f),p!==s.s&&(0,o.s7)(A,s.s=p),h!==s.h&&(A.disabled=s.h=h),v!==s.r&&(0,o.s7)(I,s.r=v),y!==s.d&&(0,o.s7)(K,s.d=y),x!==s.l&&(K.disabled=s.l=x),$!==s.u&&(0,o.s7)(P,s.u=$),S!==s.c&&(0,o.s7)(B,s.c=S),q!==s.w&&(B.disabled=s.w=q),E!==s.m&&(0,o.s7)(R,s.m=E),T!==s.f&&(0,o.s7)(H,s.f=T),F!==s.y&&(H.disabled=s.y=F),L!==s.g&&(0,o.s7)(G,s.g=L),D!==s.p&&(0,o.s7)(U,s.p=D),N!==s.b&&(U.disabled=s.b=N),_!==s.T&&(0,o.s7)(V,s.T=_),Z!==s.A&&(0,o.s7)(j,s.A=Z),X!==s.O&&(0,o.s7)(W,s.O=X),J!==s.I&&(null!=(s.I=J)?Q.style.setProperty("padding",J):Q.style.removeProperty("padding")),s}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),e}})},Ps=()=>{const e=C(),t=w().shadowDOMTarget?G.bind({target:w().shadowDOMTarget}):G,n=(0,o.To)((()=>"dark"===e()?js(t):Ns(t))),{colors:r}=ko,i=(t,n)=>"dark"===e()?n:t,s=Ys((e=>{const t=e().getAll().find((e=>e.mutationId===xs()));return!!t&&t.state.isPaused})),a=Ys((e=>{const t=e().getAll().find((e=>e.mutationId===xs()));return t?t.state.status:"idle"})),l=(0,o.To)((()=>(0,o.TH)({isPaused:s(),status:a()}))),d=Ys((e=>e().getAll().find((e=>e.mutationId===xs()))),!1);return(0,o.a0)(o.wv,{get when(){return d()},get children(){var e=bs(),s=e.firstChild,c=s.nextSibling,u=c.firstChild,g=u.firstChild,f=g.firstChild,p=g.nextSibling,h=u.nextSibling.firstChild.nextSibling,v=c.nextSibling,y=v.nextSibling,b=y.nextSibling,m=b.nextSibling,w=m.nextSibling,x=w.nextSibling,k=x.nextSibling,$=k.nextSibling;return(0,o.Yr)(f,(0,o.a0)(o.wv,{get when(){return d().options.mutationKey},fallback:"No mutationKey found",get children(){return(0,o.KN)(d().options.mutationKey,!0)}})),(0,o.Yr)(p,(0,o.a0)(o.wv,{get when(){return"purple"===l()},children:"pending"}),null),(0,o.Yr)(p,(0,o.a0)(o.wv,{get when(){return"purple"!==l()},get children(){return a()}}),null),(0,o.Yr)(h,(()=>new Date(d().state.submittedAt).toLocaleTimeString())),(0,o.Yr)(y,(0,o.a0)(Ai,{label:"Variables",defaultExpanded:["Variables"],get value(){return d().state.variables}})),(0,o.Yr)(m,(0,o.a0)(Ai,{label:"Context",defaultExpanded:["Context"],get value(){return d().state.context}})),(0,o.Yr)(x,(0,o.a0)(Ai,{label:"Data",defaultExpanded:["Data"],get value(){return d().state.data}})),(0,o.Yr)($,(0,o.a0)(Ai,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return d()}})),(0,o.gb)((a=>{var d=Y(n().detailsContainer,"tsqd-query-details-container"),u=Y(n().detailsHeader,"tsqd-query-details-header"),g=Y(n().detailsBody,"tsqd-query-details-summary-container"),f=Y(n().queryDetailsStatus,"gray"===l()?t`
        background-color: ${i(r[l()][200],r[l()][700])};
        color: ${i(r[l()][700],r[l()][300])};
        border-color: ${i(r[l()][400],r[l()][600])};
      `:t`
      background-color: ${i(r[l()][100],r[l()][900])};
      color: ${i(r[l()][700],r[l()][300])};
      border-color: ${i(r[l()][400],r[l()][600])};
    `),h=Y(n().detailsHeader,"tsqd-query-details-header"),S=ko.size[2],C=Y(n().detailsHeader,"tsqd-query-details-header"),q=ko.size[2],E=Y(n().detailsHeader,"tsqd-query-details-header"),T=ko.size[2],M=Y(n().detailsHeader,"tsqd-query-details-header"),F=ko.size[2];return d!==a.e&&(0,o.s7)(e,a.e=d),u!==a.t&&(0,o.s7)(s,a.t=u),g!==a.a&&(0,o.s7)(c,a.a=g),f!==a.o&&(0,o.s7)(p,a.o=f),h!==a.i&&(0,o.s7)(v,a.i=h),S!==a.n&&(null!=(a.n=S)?y.style.setProperty("padding",S):y.style.removeProperty("padding")),C!==a.s&&(0,o.s7)(b,a.s=C),q!==a.h&&(null!=(a.h=q)?m.style.setProperty("padding",q):m.style.removeProperty("padding")),E!==a.r&&(0,o.s7)(w,a.r=E),T!==a.d&&(null!=(a.d=T)?x.style.setProperty("padding",T):x.style.removeProperty("padding")),M!==a.l&&(0,o.s7)(k,a.l=M),F!==a.u&&(null!=(a.u=F)?$.style.setProperty("padding",F):$.style.removeProperty("padding")),a}),{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e}})},Bs=new Map,Rs=()=>{const e=(0,o.To)((()=>w().client.getQueryCache())),t=e().subscribe((t=>{(0,o.vA)((()=>{for(const[n,r]of Bs.entries())r.shouldUpdate(t)&&r.setter(n(e))}))}));return(0,o.Ki)((()=>{Bs.clear(),t()})),t},Hs=(e,t=!0,n=()=>!0)=>{const r=(0,o.To)((()=>w().client.getQueryCache())),[i,s]=(0,o.n5)(e(r),t?void 0:{equals:!1});return(0,o.EH)((()=>{s(e(r))})),Bs.set(e,{setter:s,shouldUpdate:n}),(0,o.Ki)((()=>{Bs.delete(e)})),i},Gs=new Map,Us=()=>{const e=(0,o.To)((()=>w().client.getMutationCache())),t=e().subscribe((()=>{for(const[t,n]of Gs.entries())queueMicrotask((()=>{n(t(e))}))}));return(0,o.Ki)((()=>{Gs.clear(),t()})),t},Ys=(e,t=!0)=>{const n=(0,o.To)((()=>w().client.getMutationCache())),[r,i]=(0,o.n5)(e(n),t?void 0:{equals:!1});return(0,o.EH)((()=>{i(e(n))})),Gs.set(e,i),(0,o.Ki)((()=>{Gs.delete(e)})),r},Vs=(e,t)=>{const{colors:n,font:r,size:o,alpha:i,shadow:s,border:a}=ko,l=(t,n)=>"light"===e?t:n;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${s.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${ko.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${l(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${l(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${ko.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${l(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${l(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${l(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${l(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${a.radius.sm} ${a.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${a.radius.sm} 0px 0px ${a.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${l(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${a.radius.sm} ${a.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${l(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${l("",i[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${ko.size[2]} ${ko.size[2.5]};
      gap: ${ko.size[2.5]};
      border-bottom: ${l(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${ko.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${ko.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${l(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${l("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${ko.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${ko.size[1.5]};
      box-sizing: border-box;
      height: ${ko.size[6.5]};
      background: ${l(n.gray[50],n.darkGray[500])};
      color: ${l(n.gray[700],n.gray[300])};
      border-radius: ${ko.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${ko.size[1]};
      padding-left: ${ko.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${l("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${l(n.gray[500],n.gray[400])};
      background-color: ${l(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${ko.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${l(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${ko.size[2]}));
      padding: ${ko.size[.5]} ${ko.size[2]};
      border-radius: ${ko.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${l(n.gray[400],n.gray[600])};
      color: ${l(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${l(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${l(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${ko.size[2]};
      & > button {
        cursor: pointer;
        padding: ${ko.size[.5]} ${ko.size[1.5]} ${ko.size[.5]}
          ${ko.size[2]};
        border-radius: ${ko.border.radius.sm};
        background-color: ${l(n.gray[100],n.darkGray[400])};
        border: 1px solid ${l(n.gray[300],n.darkGray[200])};
        color: ${l(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${ko.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${ko.size[3]};
          height: ${ko.size[3]};
          color: ${l(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${ko.border.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${ko.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${l(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${l(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${l(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${l(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${ko.size[.5]} ${ko.size[2]};
      border-radius: ${ko.border.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${ko.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${l(n.gray[600],n.gray[400])};
        width: ${ko.size[2]};
        height: ${ko.size[2]};
      }
      & > select {
        appearance: none;
        color: ${l(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${l(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${ko.size[2]};
    `,actionsBtn:t`
      border-radius: ${ko.border.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[400])};
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      width: ${ko.size[6.5]};
      height: ${ko.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${ko.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${l(n.gray[700],n.gray[300])};
        width: ${ko.size[3]};
        height: ${ko.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${l(n.yellow[700],n.yellow[500])};
        fill: ${l(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${l(n.gray[700],n.gray[300])};
      background-color: ${l(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${l(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${ko.size[1]};
        user-select: none;
        min-width: ${ko.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${l(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${ko.size[6]};
        flex: 1;
        padding: ${ko.size[1]} ${ko.size[2]};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${l(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${ko.size[2]};
        color: ${l(n.gray[800],n.gray[300])};
        background-color: ${l(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${l(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${l(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${l(n.gray[50],n.darkGray[700])};
      color: ${l(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${l(n.gray[200],n.darkGray[600])};
      padding: ${ko.size[1.5]} ${ko.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${ko.size[1.5]} 0px ${ko.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${ko.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${ko.size[1.5]};
      }

      & code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${ko.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${ko.size[1]} ${ko.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${ko.size[2]} 0px ${ko.size[2]} 0px;
      display: flex;
      gap: ${ko.size[2]};
      padding: 0px ${ko.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${ko.size[1]} ${ko.size[2]};
        display: flex;
        border-radius: ${ko.border.radius.sm};
        background-color: ${l(n.gray[100],n.darkGray[600])};
        border: 1px solid ${l(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${ko.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${l(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${ko.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${ko.size[.5]} ${ko.size[2]};
      display: flex;
      border-radius: ${ko.border.radius.sm};
      overflow: hidden;
      background-color: ${l(n.gray[100],n.darkGray[600])};
      border: 1px solid ${l(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${ko.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${l(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${ko.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${ko.colors.red[400]};
      }
      & svg {
        width: ${ko.size[2]};
        height: ${ko.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${ko.border.radius.sm};
      border: 1px solid ${l(n.gray[300],n.gray[700])};
      background-color: ${l(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${l(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${ko.border.radius.xs};
      padding: ${ko.size[1]} ${ko.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${l(n.gray[700],n.gray[300])};
      & svg {
        color: ${l(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${ko.size[2]};
        height: ${ko.size[2]};
      }
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${ko.size[1]} ${ko.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${l(n.gray[300],n.darkGray[400])};
      color: ${l(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${l(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${ko.border.radius.xs};
      padding: ${ko.size[1]} ${ko.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${l(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${l(n.purple[100],n.purple[900])};
      color: ${l(n.purple[700],n.purple[300])};
      & svg {
        color: ${l(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${l(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${ko.border.radius.sm};
      background-color: ${l(n.gray[200],n.darkGray[600])};
      border: 1px solid ${l(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${l(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${l(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${l(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${l(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${ko.size[1.5]} 0 ${ko.size[2]};
        }
        border-right: 1px solid ${l(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${ko.size[2]} 0 ${ko.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${l(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${a.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${l(n.gray[100],n.darkGray[800])};
      color: ${l(n.gray[900],n.gray[100])};
      border: 1px solid ${l(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${l(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${l(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${ko.size[2]};
      display: flex;
      border-radius: ${a.radius.sm};
      background-color: ${l(n.gray[100],n.darkGray[600])};
      border: 1px solid ${l(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${l(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Ns=e=>Vs("light",e),js=e=>Vs("dark",e);(0,o.z_)(["click","mousedown","input"])}}]);