(()=>{"use strict";const n="https://pokeapi.co/api/v2";async function e({id:e}){try{const t=await fetch(`${n}/pokemon/${e}/`);return await t.json()}catch(n){console.error(n)}}const t=async function({indexPage:t=0,limit:o=10}){const i=t;try{const t=await fetch(`${n}/pokemon/?limit=${o}&offset=${i}/`),s=await t.json();return Promise.all(s.results.map((({name:n})=>e({id:n}))))}catch(n){console.error(n)}},o=function({list:n}){return n.map((n=>{const e=n.name,t=n.types[0].type.name,o=n.sprites.front_default;return`\n    <div class="container_pokemon type_${t}">\n    <a href="/#/${n.id}">\n      <h3 class="title_pokemon">${e}</h3>\n      <div class="container_img">\n        <img src="${o}" class="img_${t}">\n      </div>\n      <div class="description_pokemon">\n      <span class="type_pokemon"><b>Type: </b></span><span class="type_pokemon" id="type">${t}\n      </span>\n      </div>\n      </a>\n    </div>\n`})).join("")};let i=0;async function s(){const n=document.getElementById("Main");console.log(i),i+=10;const e=await t({indexPage:i}),s=o({list:e});n.innerHTML+=s}const a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",c=async function({id:t}){const i=await async function({id:t}){try{const o=await fetch(`${n}/pokemon-species/${t}/`),i=(await o.json()).evolution_chain.url,s=await fetch(i),a=await s.json();return await function({listEvolution:n}){let t=[];return t[0]=n.chain.species.name,void 0!==n.chain.evolves_to[0]&&(t[1]=n.chain.evolves_to[0].species.name,void 0!==n.chain.evolves_to[0].evolves_to[0]&&(t[2]=n.chain.evolves_to[0].evolves_to[0].species.name)),Promise.all(t.map((n=>e({id:n}))))}({listEvolution:a})}catch(n){console.error(n)}}({id:t});return`\n  <div class="evolution">\n    ${o({list:i})}\n  </div>\n  `},r={electric:!0,normal:!0,flying:!0,bug:!0,fairy:!0},l=function(){return"\n  <div>\n    <h2>Page not found</h2>\n  </div>\n  "};let d="";const p=document.getElementById("form"),m=document.getElementById("header"),u=document.getElementById("Main"),_=document.getElementById("results"),y=document.getElementById("viewport"),v={"/":async function(){try{const n=await t({}),e=o({list:n});return function({distance:n="100px",index:e=0}){i=e,new IntersectionObserver(s,{rootMargin:n}).observe(document.getElementById("viewport"))}({index:0}),e}catch(n){console.error(n)}},"/:id":async function(){try{const n=a(),t=await e({id:n}),o=await c({id:n}),i=t.name,s=t.types[0].type.name,{"official-artwork":l}=t.sprites.other,d=l.front_default,p=t.id,m=function({types:n}){return n.map((n=>`\n  <li>${n.type.name}</li>\n  `)).join("")}({types:t.types}),u=function({abilities:n}){return n.map((({ability:n})=>`\n    <li>${n.name}</li>\n  `)).join("")}({abilities:t.abilities}),_=function({stats:n}){return n.map((({base_stat:n,stat:e})=>`\n    <li><span>${e.name}: </span>${n}</li>\n  `)).join("")}({stats:t.stats}),y=Boolean(r[s])?"pokemon__description_dark":"pokemon__description_light";return`\n    <div class="pokemon type_${s}">\n      <h3 class="pokemon__title ${y}">${i} #${p}</h3>\n      <div class="pokemon__image"><img src="${d}"/></div>\n      <div class="pokemon__description ${y}">\n        <div class="pokemon__description--type">\n          <span class="type__title">Types</span>\n          <ul class="type__list">${m}</ul>\n        </div>\n        <div class="pokemon__description--type">\n          <span class="abilities__title">Abilities</span>\n          <ul class="abilities__list">${u}</ul>\n        </div>\n        <div class="pokemon__description--stats">\n          <span class="stats__title">Stats</span>\n          <ul class="stats__list">${_}</ul>\n        </div>\n      </div>\n    </div>\n    ${o}\n`}catch(n){return console.error(n),'\n  <span class="text__error">\n    Pokemon id or name not found\n  </span>\n  '}}},h=async function(){m.innerHTML='<h1 class="header__title"><a href="/#/">Pokedex</a></h1>',p.innerHTML='\n  <form id="dataForm" class="searched">\n        <input\n          id="dataPokemon"\n          type="text"\n          name="name"\n          class="searched__input"\n          placeholder="Search a pokemon for name or id"\n        />\n        <button class="searched__button" type="submit" >Search</button>\n      </form>\n  ',_.innerHTML=null;const n=document.getElementById("dataForm"),e=document.getElementById("dataPokemon");n.onsubmit=f,e.onchange=n=>function(n){d=n.target.value}(n);const t=a(),o=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(t),i=v[o]?v[o]:l;console.log(o),u.innerHTML=await i(),u.className="/"===o?"container":null,y.style.display="/"===o?"block":"none"};async function f(n){n.preventDefault(),_.innerHTML=await async function({keyword:n}){n=n.toLowerCase();try{let t=[];return t[0]=await e({id:n}),o({list:t})}catch(n){return console.error(n),'\n    <span class="text__error">\n      Pokemon id or name not found\n    </span>\n    '}}({keyword:d})}window.addEventListener("load",h),window.addEventListener("hashchange",h)})();