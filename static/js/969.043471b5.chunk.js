"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[969],{969:function(e,t,r){r.r(t),r.d(t,{default:function(){return he}});var n=r(5861),a=r(885),o=r(4687),i=r.n(o),s=r(5218),c=r(2811),l=r(6015),d=r(7205),u=r(2299),p=r.n(u),m=r(4903),v=r(184);function f(){var e=(0,m.Tn)(),t=(0,a.Z)(e,2),r=t[0],o=t[1].isLoading,u=(0,m.Jx)().data,f=function(e,t){return e.map((function(e){return e.name})).includes(t)},b=function(){var e=(0,n.Z)(i().mark((function e(t){var n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.currentTarget.elements,a=n.name,o=n.number,""!==a.value&&""!==o.value){e.next=5;break}return s.ZP.error("Please enter data"),e.abrupt("return");case 5:if(!f(u,a.value)){e.next=8;break}return s.ZP.error("Such contact already exists!"),e.abrupt("return");case 8:try{r({name:a.value,number:o.value}),s.ZP.success("Contact added"),t.currentTarget.reset()}catch(i){s.ZP.error("Error! Try again")}case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(l.Z,{component:"form",onSubmit:b,noValidate:!0,children:[(0,v.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",type:"tel",label:"Name",name:"name",autoComplete:"name",autoFocus:!0}),(0,v.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Number",id:"number",autoComplete:"off"}),(0,v.jsxs)(d.Z,{type:"submit",disabled:o,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:[o&&(0,v.jsx)(p(),{color:"#464646",size:12}),"Add contact"]})]})}var b=r(5048),g=r(4808);function h(){var e=(0,b.v9)((function(e){return e.filter.filter})),t=(0,b.I0)();return(0,v.jsx)(c.Z,{sx:{mt:2},fullWidth:!0,label:"Search contact",value:e,inputProps:{"aria-label":"search contact"},onChange:function(e){return t((0,g.M6)(e.target.value.toLowerCase()))}})}var y=r(2791),Z=r(5629),x=r(4942),j=r(3366),S=r(7462),C=r(8182),w=r(4419),I=r(627),P=r(2065),O=r(277),M=r(5513),R=r(9917),L=r(6258),k=r(3026),A=r(7933),N=r(8826),_=r(5878),z=r(1217);function T(e){return(0,z.Z)("MuiListItem",e)}var F=(0,_.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var G=(0,_.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function V(e){return(0,z.Z)("MuiListItemSecondaryAction",e)}(0,_.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var B=["className"],q=(0,O.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,S.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),D=y.forwardRef((function(e,t){var r=(0,M.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=r.className,a=(0,j.Z)(r,B),o=y.useContext(N.Z),i=(0,S.Z)({},r,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,r=e.classes,n={root:["root",t&&"disableGutters"]};return(0,w.Z)(n,V,r)}(i);return(0,v.jsx)(q,(0,S.Z)({className:(0,C.Z)(s.root,n),ownerState:i,ref:t},a))}));D.muiName="ListItemSecondaryAction";var W=D,E=["className"],H=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],J=(0,O.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters,!r.disablePadding&&t.padding,r.button&&t.button,r.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,r=e.theme,n=e.ownerState;return(0,S.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,S.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,x.Z)({},"& > .".concat(G.root),{paddingRight:48}),(t={},(0,x.Z)(t,"&.".concat(F.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,x.Z)(t,"&.".concat(F.selected),(0,x.Z)({backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(F.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,P.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),(0,x.Z)(t,"&.".concat(F.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((r.vars||r).palette.divider),backgroundClip:"padding-box"},n.button&&(0,x.Z)({transition:r.transitions.create("background-color",{duration:r.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(F.selected,":hover"),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,P.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),U=(0,O.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),Y=y.forwardRef((function(e,t){var r=(0,M.Z)({props:e,name:"MuiListItem"}),n=r.alignItems,a=void 0===n?"center":n,o=r.autoFocus,i=void 0!==o&&o,s=r.button,c=void 0!==s&&s,l=r.children,d=r.className,u=r.component,p=r.components,m=void 0===p?{}:p,f=r.componentsProps,b=void 0===f?{}:f,g=r.ContainerComponent,h=void 0===g?"li":g,Z=r.ContainerProps,x=(Z=void 0===Z?{}:Z).className,P=r.dense,O=void 0!==P&&P,_=r.disabled,z=void 0!==_&&_,G=r.disableGutters,V=void 0!==G&&G,B=r.disablePadding,q=void 0!==B&&B,D=r.divider,Y=void 0!==D&&D,$=r.focusVisibleClassName,K=r.secondaryAction,Q=r.selected,X=void 0!==Q&&Q,ee=r.slotProps,te=void 0===ee?{}:ee,re=r.slots,ne=void 0===re?{}:re,ae=(0,j.Z)(r.ContainerProps,E),oe=(0,j.Z)(r,H),ie=y.useContext(N.Z),se=y.useMemo((function(){return{dense:O||ie.dense||!1,alignItems:a,disableGutters:V}}),[a,ie.dense,O,V]),ce=y.useRef(null);(0,k.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var le=y.Children.toArray(l),de=le.length&&(0,L.Z)(le[le.length-1],["ListItemSecondaryAction"]),ue=(0,S.Z)({},r,{alignItems:a,autoFocus:i,button:c,dense:se.dense,disabled:z,disableGutters:V,disablePadding:q,divider:Y,hasSecondaryAction:de,selected:X}),pe=function(e){var t=e.alignItems,r=e.button,n=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",r&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,w.Z)(i,T,n)}(ue),me=(0,A.Z)(ce,t),ve=ne.root||m.Root||J,fe=te.root||b.root||{},be=(0,S.Z)({className:(0,C.Z)(pe.root,fe.className,d),disabled:z},oe),ge=u||"li";return c&&(be.component=u||"div",be.focusVisibleClassName=(0,C.Z)(F.focusVisible,$),ge=R.Z),de?(ge=be.component||u?ge:"div","li"===h&&("li"===ge?ge="div":"li"===be.component&&(be.component="div")),(0,v.jsx)(N.Z.Provider,{value:se,children:(0,v.jsxs)(U,(0,S.Z)({as:h,className:(0,C.Z)(pe.container,x),ref:me,ownerState:ue},ae,{children:[(0,v.jsx)(ve,(0,S.Z)({},fe,!(0,I.Z)(ve)&&{as:ge,ownerState:(0,S.Z)({},ue,fe.ownerState)},be,{children:le})),le.pop()]}))})):(0,v.jsx)(N.Z.Provider,{value:se,children:(0,v.jsxs)(ve,(0,S.Z)({},fe,{as:ge,ref:me},!(0,I.Z)(ve)&&{ownerState:(0,S.Z)({},ue,fe.ownerState)},be,{children:[le,K&&(0,v.jsx)(W,{children:K})]}))})}));function $(e){return(0,z.Z)("MuiListItemAvatar",e)}(0,_.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var K=["className"],Q=(0,O.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,S.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),X=y.forwardRef((function(e,t){var r=(0,M.Z)({props:e,name:"MuiListItemAvatar"}),n=r.className,a=(0,j.Z)(r,K),o=y.useContext(N.Z),i=(0,S.Z)({},r,{alignItems:o.alignItems}),s=function(e){var t=e.alignItems,r=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,w.Z)(n,$,r)}(i);return(0,v.jsx)(Q,(0,S.Z)({className:(0,C.Z)(s.root,n),ownerState:i,ref:t},a))})),ee=r(4565);function te(e){return(0,z.Z)("MuiListItemText",e)}var re=(0,_.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ne=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ae=(0,O.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,x.Z)({},"& .".concat(re.primary),t.primary),(0,x.Z)({},"& .".concat(re.secondary),t.secondary),t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,S.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),oe=y.forwardRef((function(e,t){var r=(0,M.Z)({props:e,name:"MuiListItemText"}),n=r.children,a=r.className,o=r.disableTypography,i=void 0!==o&&o,s=r.inset,c=void 0!==s&&s,l=r.primary,d=r.primaryTypographyProps,u=r.secondary,p=r.secondaryTypographyProps,m=(0,j.Z)(r,ne),f=y.useContext(N.Z).dense,b=null!=l?l:n,g=u,h=(0,S.Z)({},r,{disableTypography:i,inset:c,primary:!!b,secondary:!!g,dense:f}),Z=function(e){var t=e.classes,r=e.inset,n=e.primary,a=e.secondary,o={root:["root",r&&"inset",e.dense&&"dense",n&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,w.Z)(o,te,t)}(h);return null==b||b.type===ee.Z||i||(b=(0,v.jsx)(ee.Z,(0,S.Z)({variant:f?"body2":"body1",className:Z.primary,component:null!=d&&d.variant?void 0:"span",display:"block"},d,{children:b}))),null==g||g.type===ee.Z||i||(g=(0,v.jsx)(ee.Z,(0,S.Z)({variant:"body2",className:Z.secondary,color:"text.secondary",display:"block"},p,{children:g}))),(0,v.jsxs)(ae,(0,S.Z)({className:(0,C.Z)(Z.root,a),ownerState:h,ref:t},m,{children:[b,g]}))})),ie=r(3978),se=r(9853);function ce(e){return(0,z.Z)("MuiIconButton",e)}var le=(0,_.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),de=["edge","children","className","color","disabled","disableFocusRipple","size"],ue=(0,O.ZP)(R.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,"default"!==r.color&&t["color".concat((0,se.Z)(r.color))],r.edge&&t["edge".concat((0,se.Z)(r.edge))],t["size".concat((0,se.Z)(r.size))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,S.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,P.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(e){var t,r=e.theme,n=e.ownerState,a=null==(t=(r.vars||r).palette)?void 0:t[n.color];return(0,S.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,S.Z)({color:null==a?void 0:a.main},!n.disableRipple&&{"&:hover":(0,S.Z)({},a&&{backgroundColor:r.vars?"rgba(".concat(a.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,P.Fq)(a.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:r.typography.pxToRem(28)},(0,x.Z)({},"&.".concat(le.disabled),{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}))})),pe=y.forwardRef((function(e,t){var r=(0,M.Z)({props:e,name:"MuiIconButton"}),n=r.edge,a=void 0!==n&&n,o=r.children,i=r.className,s=r.color,c=void 0===s?"default":s,l=r.disabled,d=void 0!==l&&l,u=r.disableFocusRipple,p=void 0!==u&&u,m=r.size,f=void 0===m?"medium":m,b=(0,j.Z)(r,de),g=(0,S.Z)({},r,{edge:a,color:c,disabled:d,disableFocusRipple:p,size:f}),h=function(e){var t=e.classes,r=e.disabled,n=e.color,a=e.edge,o=e.size,i={root:["root",r&&"disabled","default"!==n&&"color".concat((0,se.Z)(n)),a&&"edge".concat((0,se.Z)(a)),"size".concat((0,se.Z)(o))]};return(0,w.Z)(i,ce,t)}(g);return(0,v.jsx)(ue,(0,S.Z)({className:(0,C.Z)(h.root,i),centerRipple:!0,focusRipple:!p,disabled:d,ref:t,ownerState:g},b,{children:o}))})),me=r(5953),ve=r(7247),fe=r(8619);function be(e){var t=e.contacts,r=(0,m.Nt)(),n=(0,a.Z)(r,2),o=n[0],i=n[1].isLoading;return(0,v.jsx)(l.Z,{sx:{flexGrow:1},children:(0,v.jsx)(me.ZP,{container:!0,spacing:2,children:(0,v.jsx)(me.ZP,{item:!0,xs:12,md:10,children:(0,v.jsx)(Z.Z,{children:t.map((function(e){var t=e.id,r=e.name,n=e.number;return(0,v.jsxs)(Y,{secondaryAction:(0,v.jsx)(pe,{edge:"end","aria-label":"delete",type:"button",onClick:function(){return o(t)},disabled:i,children:(0,v.jsx)(ve.Z,{})}),children:[(0,v.jsx)(X,{children:(0,v.jsx)(ie.Z,{children:(0,v.jsx)(fe.Z,{})})}),(0,v.jsx)(oe,{primary:r,secondary:n})]},t)}))})})})})}var ge=function(){var e=(0,m.Jx)(),t=e.data,r=e.isFetching,n=(0,b.v9)((function(e){return e.filter.filter})),a=function(e,t){return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t)}))};return(0,v.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,v.jsx)(h,{}),r&&(0,v.jsx)("p",{children:"Loading..."}),null!==t&&void 0!==t&&t.length?a(t,n)&&(0,v.jsx)(be,{contacts:a(t,n)}):(0,v.jsx)("p",{children:"There are no contacts in your list yet!"})]})},he=function(){return(0,v.jsx)(l.Z,{children:(0,v.jsxs)(me.ZP,{container:!0,direction:"row-reverse",spacing:1,children:[(0,v.jsx)(me.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(f,{})}),(0,v.jsx)(me.ZP,{item:!0,xs:12,md:6,children:(0,v.jsx)(ge,{})})]})})}},8619:function(e,t,r){var n=r(4836);t.Z=void 0;var a=n(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhone");t.Z=i},7247:function(e,t,r){var n=r(4836);t.Z=void 0;var a=n(r(5649)),o=r(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},2299:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},s=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var c=i(r(2791)),l=r(8945),d=(0,r(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,r=void 0===t||t,a=e.color,o=void 0===a?"#000000":a,i=e.speedMultiplier,u=void 0===i?1:i,p=e.cssOverride,m=void 0===p?{}:p,v=e.size,f=void 0===v?35:v,b=s(e,["loading","color","speedMultiplier","cssOverride","size"]),g=n({background:"transparent !important",width:(0,l.cssValue)(f),height:(0,l.cssValue)(f),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(d," ").concat(.75/u,"s 0s infinite linear"),animationFillMode:"both"},m);return r?c.createElement("span",n({style:g},b)):null}},7074:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),n}},8945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=969.043471b5.chunk.js.map