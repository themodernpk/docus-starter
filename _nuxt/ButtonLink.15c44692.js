import{a as d,z as _,b as a,e as f,o,c as s,w as g,v as x,q as S,h as b,u as h,s as z,x as k,k as y}from"./entry.1a48f663.js";import H from"./ContentSlot.2a6d1e62.js";/* empty css                       */const $=d({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:_("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const n=e,i=a(()=>((t=n)=>`{color.${t.color}.600}`)()),c=a(()=>((t=n)=>`{color.${t.color}.500}`)()),l={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:r}=f(n,l,{_YM9_buttonPrimary:i,_A23_buttonSecondary:c});return(t,C)=>{const u=z,p=H,m=k;return o(),s(m,{class:b(["button-link",[h(r)]]),to:e.href,target:e.blank?"_blank":void 0},{default:g(()=>[e.icon?(o(),s(u,{key:0,name:e.icon},null,8,["name"])):x("",!0),S(p,{use:t.$slots.default,unwrap:"p ul li"},null,8,["use"])]),_:1},8,["to","target","class"])}}}),w=y($,[["__scopeId","data-v-614b3880"]]);export{w as default};
