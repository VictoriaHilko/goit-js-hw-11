!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var n=s.default(e,t,"get");return u.default(e,n)};var s=c(o("1UHsN")),u=c(o("ffZzF"));function c(e){return e&&e.__esModule?e:{default:e}}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){d.default(e,t),t.set(e,n)};var f,d=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var p={};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){t&&h(e.prototype,t);n&&h(e,n);return e};var v=new WeakMap,y=new WeakMap;var b=new(function(){"use strict";function t(n){e(a)(this,t),e(l)(this,v,{writable:!0,value:"38891748-11b65a2738d0d93056d31f78c"}),e(l)(this,y,{writable:!0,value:"https://pixabay.com/api/"}),this.page=1,this.query=null,this.per_page=n}return e(p)(t,[{key:"fetchPhotosByQuery",value:function(){var t=new URLSearchParams({query:this.query,page:this.page,per_page:this.per_page,key:e(i)(this,v),q:"cats",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch("".concat(e(i)(this,y),"?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}}]),t}())(40);refs={form:document.querySelector(".search-form"),searchBtn:document.querySelector(".search-btn"),container:document.querySelector(".gallery"),loadBtn:document.querySelector(".load-btn")},b.fetchPhotosByQuery().then((function(e){refs.container.innerHTML=e.hits.map((function(e){var t=e.webformatURL,n=(e.largeImageURL,e.tags),r=e.likes,o=e.views,a=e.comments,i=e.downloads;return'<div class="photo-card">\n        <img class="img" src='.concat(t," alt=").concat(n,' loading="lazy"/>\n        <div class="info">\n          <p class="info-item">\n            <b>Likes</b>').concat(r,'\n          </p>\n          <p class="info-item">\n            <b>Views</b>').concat(o,'\n          </p>\n          <p class="info-item">\n            <b>Comments</b>').concat(a,'\n          </p>\n          <p class="info-item">\n            <b>Downloads</b>').concat(i,"\n            </div>\n            </div>\n        ")})).join("")})).catch((function(e){return console.log(e)})),refs.searchBtn.addEventListener("submit",(function(e){console.log("Event: ",e)}))}();
//# sourceMappingURL=index.ff96ee16.js.map
