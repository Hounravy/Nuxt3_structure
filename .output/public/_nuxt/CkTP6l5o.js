import{_ as m}from"./BrNbOR8-.js";import{u as _}from"./BpF7_Bdy.js";import{q as d,s as h,c as n,a as t,u as o,t as a,F as f,n as g,o as r,b as v,w as y}from"./DtIssw82.js";const w={class:"container-fluid"},k={class:"container-full"},$={class:"grid grid-cols-2 gap-[10px] py-[68px]"},N={class:"flex justify-center items-center"},j=["src"],B={class:"flex justify-center items-center"},C={class:"text-24px text-center"},F={class:"text-18px text-center"},P={class:"space-y-[20px]"},b=t("h5",{class:"text-20px text-center font-bold uppercase"},"Popular Products",-1),E={class:"grid grid-cols-4 gap-[10px]"},L={class:"space-y-[10px]"},O={class:"flex justify-center items-center"},V=["src"],q={class:"text-14px text-center"},A={class:"text-14px text-center"},G={__name:"[id]",async setup(D){let s,c;const{data:p}=([s,c]=d(()=>_("https://fakestoreapi.com/products?limit=8&sort=desc","$H3OxYP9tuC")),s=await s,c(),s),{id:l}=h().params,x="https://fakestoreapi.com/products/"+l,{data:i}=([s,c]=d(()=>_(x,"$nNEt1ponOx")),s=await s,c(),s);return(H,R)=>{const u=m;return r(),n("div",w,[t("div",k,[t("div",$,[t("div",N,[t("img",{src:o(i).image,alt:"images",class:"w-[450px] h-[450px]"},null,8,j)]),t("div",B,[t("div",null,[t("p",C,a(o(i).title),1),t("p",F,"$"+a(o(i).price),1)])])]),t("div",P,[b,t("div",E,[(r(!0),n(f,null,g(o(p),e=>(r(),n("div",{key:e.id},[v(u,{to:`/products/${e.id}`},{default:y(()=>[t("div",L,[t("div",O,[t("img",{src:e.image,alt:"images",class:"w-[250px] h-[250px]"},null,8,V)]),t("p",q,a(e.title),1),t("p",A,"$"+a(e.price),1)])]),_:2},1032,["to"])]))),128))])])])])}}};export{G as default};
