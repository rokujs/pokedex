(()=>{var e={132:()=>{}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=o(132),n=o.n(e);!async function(){try{const e=document.querySelector(".container");for(let o=1;o<10;o++){const t=await n()(o);console.log(t);const r=t.name,s=t.types[0].type.name,a=t.sprites.front_default;e.innerHTML+=`\n      <div class="container_pokemon type_${s}">\n        <h3 class="title_pokemon">${r}</h3>\n        <div class="container_img">\n          <img src="${a}">\n        </div>\n        <div class="description_pokemon">\n        <span class="type_pokemon"><b>Type: </b></span><span class="type_pokemon" id="type">${s}\n        </span>\n        </div>\n      </div>\n  `}}catch(e){console.error(e)}}()})()})();