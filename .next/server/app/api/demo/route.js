"use strict";(()=>{var e={};e.id=971,e.ids=[971],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3292:e=>{e.exports=require("fs/promises")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},9796:e=>{e.exports=require("zlib")},5870:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>l,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>n,serverHooks:()=>x,staticGenerationAsyncStorage:()=>c});var o={};t.r(o),t.d(o,{GET:()=>u});var i=t(9303),s=t(8716),p=t(670),a=t(8697);async function u(){let e=await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"),r=await e.blob(),t=await a.KU.connect("MaziyarPanahi/Qwen2-VL-2B"),o=await t.predict("/run_example",{image:r,text_input:"Hello!!",model_id:"Qwen/Qwen2-VL-2B-Instruct"});return Response.json({result:o})}let n=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/demo/route",pathname:"/api/demo",filename:"route",bundlePath:"app/api/demo/route"},resolvedPagePath:"/Users/loo617/Documents/git-project/outfit-studio/src/app/api/demo/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:x}=n,l="/api/demo/route";function m(){return(0,p.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:c})}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,590],()=>t(5870));module.exports=o})();