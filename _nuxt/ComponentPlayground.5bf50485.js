import{u as m}from"./asyncData.d5029911.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.70bd5a02.js";import f from"./Ellipsis.39218453.js";import _ from"./ComponentPlaygroundData.dbc9026a.js";import"./TabsHeader.e646afc8.js";import"./ComponentPlaygroundProps.c7e79eca.js";import"./ProseH4.e2818bce.js";import"./ProseCodeInline.8c782018.js";import"./Badge.aa7df4a2.js";import"./MDCSlot.e8d5c315.js";import"./slot.94dfa1b8.js";import"./ProseP.aaedeaf5.js";import"./index.dc2304c4.js";import"./ComponentPlaygroundSlots.vue.d18234df.js";import"./ComponentPlaygroundTokens.vue.a0dd8e81.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-101e6304"]]);export{V as default};
