import{p as e,a as t,o as l,c as s,b as o,r as a,t as c,d as n,e as r,f as i,F as d,g as m,h as p,i as u,j as h,k as g,l as x,w as f,m as b,n as v}from"./vendor.721c45a7.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const s=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,a)=>{const c=new URL(e,s);if(self[t].moduleMap[c])return l(self[t].moduleMap[c]);const n=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){a(new Error(`Failed to import: ${e}`)),o(r)},onload(){l(self[t].moduleMap[c]),o(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("https:/jmrrgncpz.github.io/assets/");e("data-v-32fef4c6");const w={class:"w-4/12 md:w-5/12"},y={class:"font-bold text-lg"};t();const j={expose:[],props:["name"],setup:e=>(t,n)=>(l(),s("div",{class:"shortcut font-display flex flex-col items-center rounded-md \n    hover:bg-white hover:shadow-md hover:text-primary-500 p-2",onClick:n[1]||(n[1]=e=>t.$emit("shortcut-clicked"))},[o("div",w,[a(t.$slots,"default",{},void 0,!0)]),o("div",null,[o("span",y,c(e.name),1)])])),__scopeId:"data-v-32fef4c6"},k={props:["label","imgSrc"],computed:{customClass(){return[this.imgSrc?"p-1 pr-3":"p-3"]}}};k.render=function(e,t,o,a,i,d){return l(),s("span",{class:["text-xs md:text-sm tag bg-primary-500 text-white mr-2 mb-2 rounded-3xl flex-shrink-0 capitalize",d.customClass]},[o.imgSrc?(l(),s("img",{key:0,src:o.imgSrc,class:"rounded-full w-8 mr-2 shadow-lg inline"},null,8,["src"])):n("",!0),r(" "+c(o.label),1)],2)};const S={components:{Tag:k},props:{title:String,imagePath:String,technologies:Array,url:String},mounted(){this.technologies.forEach((e=>this.getTechnologyLogo(e)))},data:()=>({technologyLogos:[]}),methods:{getTechnologyLogo(e){const t="object"==typeof e;return fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${t?e.logoName:e}`).then((async l=>{var s;const o=(null==(s=(await l.json())[0])?void 0:s.logo)||l.url.replace("https://autocomplete.clearbit.com/v1/companies/suggest?query=","https://logo.clearbit.com/");this.technologyLogos.push({imgSrc:o,label:t?e.name:e})}))}}},C={class:"project-card"},I=o("h6",{class:"mt-2 mb-1"},"Technologies",-1),T={class:"logo-container mb-4 flex flex-wrap"};S.render=function(e,t,a,n,r,p){const u=i("Tag");return l(),s("div",C,[o("a",{href:a.url,target:"_blank",class:"text-xl md:text-2xl md:hover:underline hover:text-primary-500 font-semibold"},c(a.title),9,["href"]),I,o("div",T,[(l(!0),s(d,null,m(r.technologyLogos,((e,t)=>(l(),s(u,{key:t,label:e.label,imgSrc:e.imgSrc,"custom-class":["p-0"]},null,8,["label","imgSrc"])))),128))]),o("img",{class:"shadow-lg bg-white rounded-md",src:a.imagePath},null,8,["src"])])};const P={data:()=>({linkedIn:"",github:"",projects:[{title:"Agile Values and Principles",imagePath:"https://jmrrgncpz.github.io/assets/agile-values-principles.527c8c6c.png",technologies:["vuejs","vuetify",{logoName:"firebase.events",name:"firebase"},"jest"],url:"https://jmrrgncpz.github.io/agile-values-principles"},{title:"Covid-19 Observer",imagePath:"https://jmrrgncpz.github.io/assets/covid19-observer.3f3212af.png",technologies:["vuejs",{logoName:"buefy.org",name:"buefy"},"node","heroku","postgresql"],url:"https://jmrrgncpz.github.io/COVID19Observer"}]}),mounted(){fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=linkedin",{method:"get"}).then((e=>e.json())).then((e=>{this.linkedIn=e[0].logo})),fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=github",{method:"get"}).then((e=>e.json())).then((e=>{this.github=e[0].logo}))},components:{UserIcon:p,TemplateIcon:u,CodeIcon:h,PhoneIcon:g,MailIcon:x,Shortcut:j,Tag:k,Project:S},methods:{scrollToElement(e){document.querySelector("#"+e).scrollIntoView({block:"start",inline:"nearest"})}}},L={id:"hero",class:"p-4 md:p-7 flex flex-col font-display h-screen w-screen overflow-hidden text-black"},z=o("div",{id:"header"},[o("h4",{id:"brand",class:"font-header text-xl md:text-3xl"},"paz")],-1),A={id:"main",class:"flex flex-1 flex-col md:flex-row md:mx-40 h-4/5 p-10 md:p-0 items-center md:justify-between"},M=b('<div class="flex items-center flex-1"><div class="flex flex-col"><div class="font-header text-7xl md:text-8xl"><span>Jesmer</span><br><span>Paz</span></div><div class="mb-8"><span class="font-display text-primary-500 text-2xl md:text-3xl mb-1">Full-stack web developer</span></div><div class="flex justify-center md:justify-start"><button class="bg-primary-500 text-white text-sm md:text-md w-full md:w-auto p-2 rounded self-center"> Create something amazing with me </button></div></div></div>',1),_={id:"shortcuts-section",class:"flex flex-1 w-full items-center justify-center md:justify-end"},E={id:"shortcut-container",class:"w-full md:w-6/12 grid gap-2 grid-cols-2"},R={id:"about",class:"p-10 md:mx-40 text-black flex flex-col"},U=b('<div id="about-me" class="mb-12 md:w-3/6 md:p-5"><h1 class="font-header text-4xl md:text-5xl mb-6">About</h1><p class="text-lg md:text-2xl mb-4"> A full-stack developer with around <span class="text-primary-500 font-semibold">3 years of experience</span> working with <span class="text-primary-500 font-semibold">web technologies.</span></p><p class="text-lg md:text-2xl mb-12"> I pride myself as someone who&#39;s <span class="text-primary-500 font-semibold">passionate on web development / software engineering</span>. Learned and practiced a lot since I was a student. </p><p class="text-2xl md:text-4xl font-bold"><span class="text-primary-500">Challenges excite me.</span> <br><span class="font-medium">If you need a solution for your business, I might be able to help</span>. </p></div>',1),N={class:"md:w-3/6 md:self-end md:p-5"},$={id:"key-technologies",class:"mb-10"},q=o("h1",{class:"font-header text-4xl md:text-5xl"},"Key Technologies",-1),F=o("p",{class:"mb-6 text-lg"},"The tech I worked a lot with",-1),O={id:"technologies"},V=o("h1",{class:"font-header text-4xl md:text-5xl"},"Technologies",-1),B=o("p",{class:"mb-6 text-lg"}," Languages, frameworks, libraries, and tools I have used ",-1),J={class:"flex flex-wrap"},D={id:"projects",class:"p-10 md:mx-40 text-black"},Q=o("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Projects / Sample Works",-1),W={id:"projects-container",class:"grid gap-12 grid-cols-1 md:grid-cols-2"},G=o("div",{id:"blog",class:"p-10 md:mx-40 text-black"},[o("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Blog")],-1),H={id:"contact-me",class:"p-10 md:mx-40 bg-blue-900 text-white md:flex flex-wrap"},K={id:"contact-me-section",class:"mb-6 md:mb-0 flex-1"},X=o("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Contact me",-1),Y={class:"flex"},Z=r(" +63 977-461-9089 "),ee={class:"flex"},te=r(" paz.jesr@gmail.com "),le=o("br",null,null,-1),se={id:"social",class:"flex-1 mb-12 md:mb-0"},oe=o("h1",{class:"font-header text-4xl md:text-5xl mb-6"},"Social",-1),ae={class:"flex"},ce={href:"https://www.linkedin.com/in/jesmer-paz-24363b159/",class:"w-12 mr-2"},ne={href:"https://github.com/jmrrgncpz",class:"w-12"},re=o("div",{class:"text-center md:text-left w-full"}," © 2021, Jesmer Regencia Paz ",-1);P.render=function(e,t,a,c,n,r){const p=i("UserIcon"),u=i("Shortcut"),h=i("TemplateIcon"),g=i("CodeIcon"),x=i("PhoneIcon"),b=i("Tag"),v=i("Project"),w=i("MailIcon");return l(),s(d,null,[o("div",L,[z,o("div",A,[M,o("div",_,[o("div",E,[o(u,{name:"About",onShortcutClicked:t[1]||(t[1]=e=>r.scrollToElement("about"))},{default:f((()=>[o(p)])),_:1}),o(u,{name:"Blog",onShortcutClicked:t[2]||(t[2]=e=>r.scrollToElement("blog"))},{default:f((()=>[o(h)])),_:1}),o(u,{name:"Projects",onShortcutClicked:t[3]||(t[3]=e=>r.scrollToElement("projects"))},{default:f((()=>[o(g)])),_:1}),o(u,{name:"Contact Me",onShortcutClicked:t[4]||(t[4]=e=>r.scrollToElement("contact-me"))},{default:f((()=>[o(x)])),_:1})])])])]),o("div",R,[U,o("div",N,[o("div",$,[q,F,o(b,{label:"Javascript"}),o(b,{label:"C#"}),o(b,{label:"T-SQL"})]),o("div",O,[V,B,o("div",J,[o(b,{label:"HTML / CSS / SAAS"}),o(b,{label:"Vue / React / Aurelia / Angular"}),o(b,{label:"Vuex / Vue Router"}),o(b,{label:"C# / .Net 4.6^ / .Net Core 5"}),o(b,{label:"Bulma CSS / Buefy / Material UI / Tailwind CSS"}),o(b,{label:"T-SQL / Entity Framework 6 / Entity Framework Core"}),o(b,{label:"Git / Azure Devops CI CD"}),o(b,{label:"AJAX / Axios"}),o(b,{label:"Node / NPM / Webpack / Parcel"})])])])]),o("div",D,[Q,o("div",W,[(l(!0),s(d,null,m(n.projects,((e,t)=>(l(),s(v,{key:t,title:e.title,imagePath:e.imagePath,technologies:e.technologies,url:e.url},null,8,["title","imagePath","technologies","url"])))),128))])]),G,o("div",H,[o("div",K,[X,o("div",Y,[o(x,{class:"w-5 mr-4"}),Z]),o("div",ee,[o(w,{class:"w-5 mr-4"}),te]),le]),o("div",se,[oe,o("div",ae,[o("a",ce,[o("img",{src:n.linkedIn,class:"rounded-full"},null,8,["src"])]),o("a",ne,[o("img",{src:n.github,class:"rounded-full"},null,8,["src"])])])]),re])],64)};v(P).mount("#app");
