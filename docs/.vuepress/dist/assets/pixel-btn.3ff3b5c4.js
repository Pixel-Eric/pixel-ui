var l=Object.defineProperty,s=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var o=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,i=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&o(e,t,n[t]);if(a)for(var t of a(n))c.call(n,t)&&o(e,t,n[t]);return e},r=(e,n)=>s(e,u(n));import{d,o as f,c as _,a as m,t as g,n as y}from"./app.003b2b4b.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";const v=d({name:"pixel-btn",props:{value:{type:String,default:"\u9ED8\u8BA4\u6309\u94AE"},icon:String,type:{type:String,default:"normal"},radius:Boolean,mode:{type:String,default:"fill"}},setup(e){const n={};return n[`${e.mode}-${e.type}`]=!0,e.icon!==null&&(n[`iconfont ${e.icon}`]=!0),{config:n}}});function B(e,n,t,x,S,b){return f(),_("button",{class:y(["pixel-btn",r(i({},e.config),{radius:e.radius})])},[m("span",null,g(e.value),1)],2)}var z=$(v,[["render",B]]);export{z as default};