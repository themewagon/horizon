import{r as i,g as D,a as I,s as W,h as g,_ as a,u as $,y as H,b as N,j as A,c as P,e as w,a0 as E,k as J}from"./index-6ba0FqsG.js";function X(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function Y(...t){return i.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(r=>{X(r,e)})},t)}const F={};function Z(t,e){const r=i.useRef(F);return r.current===F&&(r.current=t(e)),r}const q=[];function G(t){i.useEffect(t,q)}class b{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new b}start(e,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},e)}}function Tt(){const t=Z(b.create).current;return G(t.disposeEffect),t}let x=!0,k=!1;const Q=new b,S={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tt(t){const{type:e,tagName:r}=t;return!!(r==="INPUT"&&S[e]&&!t.readOnly||r==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function et(t){t.metaKey||t.altKey||t.ctrlKey||(x=!0)}function V(){x=!1}function rt(){this.visibilityState==="hidden"&&k&&(x=!0)}function nt(t){t.addEventListener("keydown",et,!0),t.addEventListener("mousedown",V,!0),t.addEventListener("pointerdown",V,!0),t.addEventListener("touchstart",V,!0),t.addEventListener("visibilitychange",rt,!0)}function ot(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return x||tt(e)}function st(){const t=i.useCallback(n=>{n!=null&&nt(n.ownerDocument)},[]),e=i.useRef(!1);function r(){return e.current?(k=!0,Q.start(100,()=>{k=!1}),e.current=!1,!0):!1}function o(n){return ot(n)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:o,onBlur:r,ref:t}}function at(t){return D("MuiTypography",t)}I("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const it=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ut=t=>{const{align:e,gutterBottom:r,noWrap:o,paragraph:n,variant:s,classes:c}=t,u={root:["root",s,t.align!=="inherit"&&`align${g(e)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return w(u,at,c)},lt=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],r.align!=="inherit"&&e[`align${g(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>a({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),M={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ct={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},pt=t=>ct[t]||t,ht=i.forwardRef(function(e,r){const o=$({props:e,name:"MuiTypography"}),n=pt(o.color),s=H(a({},o,{color:n})),{align:c="inherit",className:u,component:p,gutterBottom:v=!1,noWrap:T=!1,paragraph:h=!1,variant:l="body1",variantMapping:d=M}=s,m=N(s,it),y=a({},s,{align:c,color:n,className:u,component:p,gutterBottom:v,noWrap:T,paragraph:h,variant:l,variantMapping:d}),C=p||(h?"p":d[l]||M[l])||"span",R=ut(y);return A.jsx(lt,a({as:C,ref:r,ownerState:y,className:P(R.root,u)},m))});function ft(t){return D("MuiLink",t)}const dt=I("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),U={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},mt=t=>U[t]||t,yt=({theme:t,ownerState:e})=>{const r=mt(e.color),o=E(t,`palette.${r}`,!1)||e.color,n=E(t,`palette.${r}Channel`);return"vars"in t&&n?`rgba(${n} / 0.4)`:J(o,.4)},gt=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],bt=t=>{const{classes:e,component:r,focusVisible:o,underline:n}=t,s={root:["root",`underline${g(n)}`,r==="button"&&"button",o&&"focusVisible"]};return w(s,ft,e)},xt=W(ht,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`underline${g(r.underline)}`],r.component==="button"&&e.button]}})(({theme:t,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:yt({theme:t,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dt.focusVisible}`]:{outline:"auto"}})),Ct=i.forwardRef(function(e,r){const o=$({props:e,name:"MuiLink"}),{className:n,color:s="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:v,underline:T="always",variant:h="inherit",sx:l}=o,d=N(o,gt),{isFocusVisibleRef:m,onBlur:y,onFocus:C,ref:R}=st(),[j,B]=i.useState(!1),K=Y(r,R),O=f=>{y(f),m.current===!1&&B(!1),u&&u(f)},_=f=>{C(f),m.current===!0&&B(!0),p&&p(f)},L=a({},o,{color:s,component:c,focusVisible:j,underline:T,variant:h}),z=bt(L);return A.jsx(xt,a({color:s,className:P(z.root,n),classes:v,component:c,onBlur:O,onFocus:_,ref:K,ownerState:L,variant:h,sx:[...Object.keys(U).includes(s)?[]:[{color:s}],...Array.isArray(l)?l:[l]]},d))});export{Ct as L,ht as T,Y as a,st as b,b as c,Z as d,G as e,X as s,Tt as u};
