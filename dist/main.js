!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(()=>{const e=e=>{const t={className:"fade-and-drop",width:"100%",height:"100px",buttons:"underline|bold|italic",buttonBgColor:"#eee",buttonColor:"#555",frameStyles:{border:"1px solid #ced4da",borderRadius:"0.25rem",color:"#495057"}},n={...t.frameStyles,...e.frameStyles};return Object.keys(e).forEach(o=>{"frameStyles"!==o?e.hasOwnProperty(o)&&(t[o]=e[o]):t[o]=n}),t};return{extendDefaults:e,concatClassName:e=>{const t=e.classList;let n="";return t.forEach(e=>{"snip-write"!==e&&(n+=e+" ")}),n.trim()},containerStyles:t=>{const n=document.querySelector("textarea#snip-write"),o=e(t),r=getComputedStyle(n),a=o.frameStyles.border,s=o.frameStyles.borderRadius,i=a||r.border,l=s||r.borderRadius,c={...{fontSize:r.fontSize,fontWeight:r.fontWeight,lineHeight:r.lineHeight,color:r.color,fontFamily:r.fontFamily,margin:r.margin},...o.frameStyles};delete c.border,delete c.borderRadius;const d={padding:"5px",backgroundColor:""+o.buttonBgColor,borderRadius:`${l} ${l} 0 0`,border:i,display:"flex",justifyContent:"space-between",fontFamily:"inherit"},u={border:"none",outline:"none",backgroundColor:"transparent",color:o.buttonColor},p={outline:"none",border:i,borderTop:"none",borderRadius:`0 0 ${l} ${l}`,boxSizing:"border-box"},b=document.querySelector(".snipText-button-container");Object.assign(b.style,d);const y=document.querySelector(".snipTextBody");Object.assign(y.style,p);const f=document.querySelector(".snipTextBody");Object.assign(f.style,c);const m=document.querySelector(".snipText-tabnav-tabs .tabnav");Object.assign(m.style,{padding:"0 10px 10px",backgroundColor:"#fff",border:"1px solid #ccc",borderBottom:"none"});document.querySelectorAll(".buttons").forEach(e=>{Object.assign(e.style,u)})}}})();t.default=()=>{const e=document.querySelector("textarea.snip-text");return{markDown:(...t)=>{let n={};if(t[0]&&"object"==typeof t[0]&&(n=o.extendDefaults(t[0])),null!==e){const r=e.parentElement;r.style.width=n.width,e.style.display="none";const a=document.createElement("div");a.className="snip-text-mark-down",r.append(a);const s=document.createElement("div"),i=document.createElement("textarea"),l=document.createElement("div"),c=o.concatClassName(e);s.className="snipTextBody",s.style.height="auto",s.style.width="100%",i.id="snip-write",i.className="snip-write snip-tab-content tab-content active "+c,i.style.height="100%",i.style.width="100%",i.style.border="none",l.id="snip-preview",l.className="snip-preview snip-tab-content tab-content "+c,l.style.height="auto",l.style.width="100%",l.style.display="none",s.append(i),s.append(l),window.addEventListener("load",()=>{o.containerStyles(t[0]),o.execCmd(".buttons"),o.toggleNav("snipText-tabnav-tabs")});const d=document.createElement("div");d.className="snipText-button-container",a.append(d),o.editButtons(t[0]),a.append(s)}}}}}]);