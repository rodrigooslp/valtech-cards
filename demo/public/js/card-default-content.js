(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["CardDefaultContent"]=e():t["CardDefaultContent"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"2c9e":function(t,e,n){"use strict";var r=n("934a"),o=n.n(r);o.a},"2f40":function(t,e,n){"use strict";var r=n("63ff"),o=n.n(r);o.a},3714:function(t,e,n){},"63ff":function(t,e,n){},"64d3":function(t,e,n){"use strict";var r=n("bf45"),o=n.n(r);o.a},"7bf3":function(t,e,n){"use strict";var r=n("3714"),o=n.n(r);o.a},"934a":function(t,e,n){},bf45:function(t,e,n){},e1e6:function(t,e,n){"use strict";var r=n("f1f4"),o=n.n(r);o.a},f1f4:function(t,e,n){},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card__default-content"},[n("card-overlay",{staticClass:"card__overlay--color-light"}),n("card-title",[t._v(t._s(t.title))]),n("card-logo"),n("card-text",[t._v(t._s(t.text))])],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card__overlay"})},c=[];n("2f40");function u(t,e,n,r,o,i,a,c){var u,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var f=l.render;l.render=function(t,e){return u.call(e),f(t,e)}}else{var s=l.beforeCreate;l.beforeCreate=s?[].concat(s,u):[u]}return{exports:t,options:l}}var l={},f=u(l,a,c,!1,null,null,null),s=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"card__title"},[t._t("default")],2)},p=[],_=(n("64d3"),{}),v=u(_,d,p,!1,null,null,null),y=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"card__text"},[t._t("default")],2)},m=[],g=(n("e1e6"),{}),x=u(g,b,m,!1,null,null,null),h=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"card__card-logo",attrs:{src:"/img/logo.svg",alt:"card_"}})},S=[],j=(n("7bf3"),{}),$=u(j,C,S,!1,null,null,null),E=$.exports,O={props:{title:{type:String},text:{type:String}},components:{CardOverlay:s,CardTitle:y,CardText:h,CardLogo:E}},T=O,w=(n("2c9e"),u(T,o,i,!1,null,null,null)),P=w.exports;e["default"]=P}})["default"]}));
//# sourceMappingURL=CardDefaultContent.umd.min.js.map