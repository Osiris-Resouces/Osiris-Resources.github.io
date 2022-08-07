/*! For license information please see 8fd5a9e252d576f3219acbcac3a91f4e063fd92e-62af0393c4a4ff46b095.js.LICENSE.txt */
(self.webpackChunkosiris_resources=self.webpackChunkosiris_resources||[]).push([[147],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return w}});var r=n(4694),o=n(5697),i=n.n(o),a=n(7294);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var v=["style"];function h(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=d(t.slice(0,r)),i=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[o]=i,e}),{})}var y=!1;try{y=!0}catch(T){}function b(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:r.parse.icon?r.parse.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var w=a.forwardRef((function(e,t){var n=e.icon,o=e.mask,i=e.symbol,a=e.className,c=e.title,s=e.titleId,f=e.maskId,m=b(n),d=g("classes",[].concat(p(function(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,c=e.flash,l=e.spin,s=e.spinPulse,f=e.spinReverse,p=e.pulse,m=e.fixedWidth,d=e.inverse,v=e.border,h=e.listItem,y=e.flip,b=e.size,g=e.rotation,w=e.pull,E=(u(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":c,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":s,"fa-pulse":p,"fa-fw":m,"fa-inverse":d,"fa-border":v,"fa-li":h,"fa-flip":!0===y,"fa-flip-horizontal":"horizontal"===y||"both"===y,"fa-flip-vertical":"vertical"===y||"both"===y},"fa-".concat(b),null!=b),u(t,"fa-rotate-".concat(g),null!=g&&0!==g),u(t,"fa-pull-".concat(w),null!=w),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map((function(e){return E[e]?e:null})).filter((function(e){return e}))}(e)),p(a.split(" ")))),v=g("transform","string"==typeof e.transform?r.parse.transform(e.transform):e.transform),h=g("mask",b(o)),T=(0,r.icon)(m,l(l(l(l({},d),v),h),{},{symbol:i,title:c,titleId:s,maskId:f}));if(!T)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var O=T.abstract,S={ref:t};return Object.keys(e).forEach((function(t){w.defaultProps.hasOwnProperty(t)||(S[t]=e[t])})),E(O[0],S)}));w.displayName="FontAwesomeIcon",w.propTypes={beat:i().bool,border:i().bool,beatFade:i().bool,bounce:i().bool,className:i().string,fade:i().bool,flash:i().bool,mask:i().oneOfType([i().object,i().array,i().string]),maskId:i().string,fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf([!0,!1,"horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),shake:i().bool,size:i().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,spinPulse:i().bool,spinReverse:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,titleId:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},w.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var E=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=h(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[d(t)]=r}return e}),{attrs:{}}),a=r.style,c=void 0===a?{}:a,s=f(r,v);return i.attrs.style=l(l({},i.attrs.style),c),t.apply(void 0,[n.tag,l(l({},i.attrs),s)].concat(p(o)))}.bind(null,a.createElement)},6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},3476:function(e,t,n){"use strict";n.d(t,{h:function(){return S}});var r=n(4578),o=!("undefined"==typeof window||!window.document||!window.document.createElement);var i=void 0;function a(){return void 0===i&&(i=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(r){}return e}()),i}function c(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){var n,r=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[r]||(this.events[r]={handlers:[],handleEvent:void 0},this.events[r].nextHandlers=this.events[r].handlers),this.events[r]},l.prototype.handleEvent=function(e,t,n){var r=this.getEventHandlers(e,t);r.handlers=r.nextHandlers,r.handlers.forEach((function(e){e&&e(n)}))},l.prototype.add=function(e,t,n){var r=this,o=this.getEventHandlers(e,n);c(o),0===o.nextHandlers.length&&(o.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,o.handleEvent,n)),o.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,c(o);var a=o.nextHandlers.indexOf(t);o.nextHandlers.splice(a,1),0===o.nextHandlers.length&&(r.target&&r.target.removeEventListener(e,o.handleEvent,n),o.handleEvent=void 0)}}};var s="__consolidated_events_handlers__";function u(e,t,n,r){e[s]||(e[s]=new l(e));var o=function(e){if(e)return a()?e:!!e.capture}(r);return e[s].add(t,n,o)}var f=n(7294),p=n(6443);function m(e,t){var n,r=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof r)return r;var o=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof o?o*t:void 0}var d="above",v="inside",h="below",y="invisible";function b(e){return"string"==typeof e.type}var g;var w=[];function E(e){w.push(e),g||(g=setTimeout((function(){var e;for(g=null;e=w.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=w.indexOf(e);-1!==n&&(w.splice(n,1),!w.length&&g&&(clearTimeout(g),g=null))}}}var T="undefined"!=typeof window,O={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},S=function(e){function t(t){var n;return(n=e.call(this,t)||this).refElement=function(e){n._ref=e},n}(0,r.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;T&&(this.cancelOnNextTick=E((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug;!function(e,t){if(e&&!b(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=u(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=u(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))},o.componentDidUpdate=function(){var e=this;T&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=E((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))},o.componentWillUnmount=function(){T&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},o._findScrollableAncestor=function(){var e=this.props,t=e.horizontal,r=e.scrollableAncestor;if(r)return function(e){return"window"===e?n.g.window:e}(r);for(var o=this._ref;o.parentNode;){if((o=o.parentNode)===document.body)return window;var i=window.getComputedStyle(o),a=(t?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===a||"scroll"===a||"overlay"===a)return o}return window},o._handleScroll=function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?y:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?v:e.viewportBottom<e.waypointTop?h:e.waypointTop<e.viewportTop?d:y}(t),r=this._previousPosition,o=this.props,i=(o.debug,o.onPositionChange),a=o.onEnter,c=o.onLeave,l=o.fireOnRapidScroll;if(this._previousPosition=n,r!==n){var s={currentPosition:n,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,s),n===v?a.call(this,s):r===v&&c.call(this,s),l&&(r===h&&n===d||r===d&&n===h)&&(a.call(this,{currentPosition:v,previousPosition:r,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),c.call(this,{currentPosition:n,previousPosition:v,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}},o._getBounds=function(){var e,t,n=this.props,r=n.horizontal,o=(n.debug,this._ref.getBoundingClientRect()),i=o.left,a=o.top,c=o.right,l=o.bottom,s=r?i:a,u=r?c:l;this.scrollableAncestor===window?(e=r?window.innerWidth:window.innerHeight,t=0):(e=r?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=r?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var f=this.props,p=f.bottomOffset;return{waypointTop:s,waypointBottom:u,viewportTop:t+m(f.topOffset,e),viewportBottom:t+e-m(p,e)}},o.render=function(){var e=this,t=this.props.children;if(!t)return f.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(b(t)||(0,p.isForwardRef)(t)){return f.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}})}return f.cloneElement(t,{innerRef:this.refElement})},t}(f.PureComponent);S.above=d,S.below=h,S.inside=v,S.invisible=y,S.defaultProps=O,S.displayName="Waypoint"},8241:function(e,t){"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case c:case a:case p:case m:return e;default:switch(e=e&&e.$$typeof){case u:case s:case f:case v:case d:case l:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.isForwardRef=function(e){return y(e)===f}},6443:function(e,t,n){"use strict";e.exports=n(8241)},9683:function(e,t,n){"use strict";var r=n(7294),o=n(3476),i=n(7606),a=n(7190);t.Z=function(e){var t=e.highlightAnimation;return r.createElement("div",{id:"contact",className:"contact-container"},r.createElement(o.h,{onEnter:function(){return t(!0,"highlightContact")},onLeave:function(){return t(!1,"highlightContact")}},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12 text-center"},r.createElement("h2",{className:"highlight-heading"},r.createElement("span",{id:"highlightContact"}),"Contact Us"))),r.createElement("div",{className:"row contact-info-main"},r.createElement("div",{className:"col-lg-4"},r.createElement("a",{href:"mailto:info@osirisresources.com"},r.createElement("h5",null,"info[@]osirisresources.com"))),r.createElement("div",{className:"col-lg-4 text-center social-footer"},r.createElement("a",{href:"/"},r.createElement(i.G,{icon:a.pZl})),r.createElement("a",{href:"/"},r.createElement(i.G,{icon:a.D9H})),r.createElement("a",{href:"/"},r.createElement(i.G,{icon:a.sd1}))),r.createElement("div",{className:"col-lg-4 text-end"},r.createElement("a",{className:"btn btn-content",href:"mailto:info@osirisresources.com"},"Send Us A Message"))))))}},1425:function(e,t,n){"use strict";n.d(t,{Z:function(){return ke}});var r,o,i,a,c=n(7294),l=n(1597),s=n.p+"static/Osiris_Resources_Logo-dbd43d7d75a565e54d00284bf7349355.svg",u=n(7606),f=n(7190),p=n(8014),m=function(e){var t=e.simpleNav,n=e.isHero,r=e.scrollTo,o=(0,c.useState)(!1),i=o[0],a=o[1];return c.createElement(c.Fragment,null,c.createElement("nav",{className:"navbar fixed-top navbar-expand-xl navbar-dark "+(n?"menu-scrolling-hero":"menu-scrolling-content")},c.createElement("div",{className:"me-auto tog-container"},c.createElement(l.Link,{className:"navbar-brand",to:"/"},c.createElement("img",{src:s,alt:"Osiris Resources Logo"})),c.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(e){return function(e,t,n){e.preventDefault(),t(!n)}(e,a,i)},"data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},c.createElement("span",{className:"navbar-toggler-icon"}))),c.createElement("div",{className:"collapse navbar-collapse nav-collapse "+(i?"show":""),id:"navbarCollapse"},t?c.createElement("ul",{className:"navbar-nav ms-auto"},c.createElement("li",{className:"nav-item"},c.createElement(l.Link,{className:"nav-link",to:"/"},"Home"))):c.createElement("ul",{className:"navbar-nav ms-auto"},c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"about")}},"About Us")),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"services")}},"Services")),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"platform")}},"Platform")),c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"javascript:void(0)",onClick:function(e){return r(e,"contact")}},"Contact Us")),c.createElement("li",{className:"nav-item nav-only"},c.createElement("a",{className:"nav-link",href:"tel:+441179410523"},c.createElement(u.G,{icon:p.yeU})," +44 (0) 117 941 0523")),c.createElement("li",{className:"nav-item nav-only"},c.createElement("div",{className:"nav-social"},c.createElement("a",{href:"/"},c.createElement(u.G,{icon:f.pZl})),c.createElement("a",{href:"/"},c.createElement(u.G,{icon:f.D9H})),c.createElement("a",{href:"/"},c.createElement(u.G,{icon:f.sd1}))))))),c.createElement("nav",{className:"navbar fixed-top navbar-expand-xl navbar-dark "+(n?"top-menu-scrolling-hero":"top-menu-scrolling-content")},c.createElement("div",{className:"me-auto tog-container"},c.createElement("div",{className:"nav-social"},c.createElement("a",{href:"/"},c.createElement(u.G,{icon:f.pZl})),c.createElement("a",{href:"/"},c.createElement(u.G,{icon:f.D9H})),c.createElement("a",{href:"/"},c.createElement(u.G,{icon:f.sd1})))),c.createElement("div",null,c.createElement("ul",{className:"navbar-nav ms-auto nav-contact"},c.createElement("li",{className:"nav-item"},c.createElement("a",{className:"nav-link",href:"tel:+441179410523"},c.createElement(u.G,{icon:p.yeU})," +44 (0) 117 941 0523"))))))},d=function(){return c.createElement("footer",null,c.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Osiris Resources. All Rights Reserved."),c.createElement(l.Link,{to:"/privacy"},"Privacy Policy"))},v=n(5697),h=n.n(v),y=n(4839),b=n.n(y),g=n(2993),w=n.n(g),E=n(6494),T=n.n(E),O="bodyAttributes",S="htmlAttributes",A="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(C).map((function(e){return C[e]})),"charset"),x="cssText",N="href",j="http-equiv",P="innerHTML",L="itemprop",_="name",I="property",B="rel",R="src",H="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",U="defer",F="encodeSpecialCharacters",z="onChangeClientState",G="titleTemplate",q=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),W=[C.NOSCRIPT,C.SCRIPT,C.STYLE],Y="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ee=function(e){var t=ie(e,C.TITLE),n=ie(e,G);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ie(e,D);return t||r||void 0},te=function(e){return ie(e,z)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},oe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ue("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===B&&"canonical"===e[n].toLowerCase()||l===B&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==P&&c!==x&&c!==L||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=T()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},ie=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ae=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ae(e)}),0)}),ce=function(e){return clearTimeout(e)},le="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:n.g.requestAnimationFrame||ae,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:n.g.cancelAnimationFrame||ce,ue=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},fe=null,pe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ve(C.BODY,r),ve(C.HTML,o),de(f,p);var m={baseTag:he(C.BASE,n),linkTags:he(C.LINK,i),metaTags:he(C.META,a),noscriptTags:he(C.NOSCRIPT,c),scriptTags:he(C.SCRIPT,s),styleTags:he(C.STYLE,u)},d={},v={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(v[e]=m[e].oldTags)})),t&&t(),l(e,d,v)},me=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){void 0!==e&&document.title!==e&&(document.title=me(e)),ve(C.TITLE,t)},ve=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},he=function(e,t){var n=document.head||document.querySelector(C.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===P)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ye=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,o=be(n,r),[c.createElement(C.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ye(n),i=me(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case O:case S:return{toComponent:function(){return be(t)},toString:function(){return ye(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===P||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===P||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},we=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:ge(C.BASE,t,r),bodyAttributes:ge(O,n,r),htmlAttributes:ge(S,o,r),link:ge(C.LINK,i,r),meta:ge(C.META,a,r),noscript:ge(C.NOSCRIPT,c,r),script:ge(C.SCRIPT,l,r),style:ge(C.STYLE,s,r),title:ge(C.TITLE,{title:f,titleAttributes:p},r)}},Ee=b()((function(e){return{baseTag:re([N,H],e),bodyAttributes:ne(O,e),defer:ie(e,U),encode:ie(e,F),htmlAttributes:ne(S,e),linkTags:oe(C.LINK,[B,N],e),metaTags:oe(C.META,[_,k,j,I,L],e),noscriptTags:oe(C.NOSCRIPT,[P],e),onChangeClientState:te(e),scriptTags:oe(C.SCRIPT,[R,P],e),styleTags:oe(C.STYLE,[x],e),title:ee(e),titleAttributes:ne(A,e)}}),(function(e){fe&&se(fe),e.defer?fe=le((function(){pe(e,(function(){fe=null}))})):(pe(e),fe=null)}),we)((function(){return null})),Te=(o=Ee,a=i=function(e){function t(){return $(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!w()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case C.TITLE:return Z({},o,((t={})[r.type]=a,t.titleAttributes=Z({},i),t));case C.BODY:return Z({},o,{bodyAttributes:Z({},i)});case C.HTML:return Z({},o,{htmlAttributes:Z({},i)})}return Z({},o,((n={})[r.type]=Z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},V(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=we({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Te.renderStatic=Te.rewind;var Oe=n(9499),Se=function(e){var t=e.title,n=e.description,r=e.image,o=e.keywords,i=(0,Oe.useLocation)().pathname,a=(0,l.useStaticQuery)(Ce).site.siteMetadata,s=a.defaultTitle,u=a.titleTemplate,f=a.defaultDescription,p=a.siteUrl,m=a.defaultImage,d=a.defaultKeywords,v=a.shortTitle,h=a.maskedIcon,y={title:t||s,description:n||f,image:""+p+(r||m),url:""+p+i,keywords:o||d};return c.createElement(Te,{title:y.title,titleTemplate:t?u:""},c.createElement("link",{rel:"mask-icon",href:""+p+h,color:"#2a2a2a"}),c.createElement("meta",{name:"apple-mobile-web-app-title",content:v}),c.createElement("meta",{name:"application-name",content:v}),c.createElement("meta",{name:"description",content:y.description}),y.keywords&&c.createElement("meta",{name:"keywords",content:y.keywords}),c.createElement("meta",{name:"image",content:y.image}),y.url&&c.createElement("meta",{property:"og:url",content:y.url}),c.createElement("meta",{property:"og:locale",content:"en_GB"}),c.createElement("meta",{property:"og:site_name",content:s}),y.title&&c.createElement("meta",{property:"og:title",content:y.title}),y.description&&c.createElement("meta",{property:"og:description",content:y.description}),y.image&&c.createElement("meta",{property:"og:image",content:y.image}))},Ae=Se;Se.defaultProps={title:null,description:null,image:null,keywords:null};var Ce="2810838613",ke=function(e){var t=e.title,n=e.description,r=e.keywords,o=e.image,i=e.simpleNav,a=e.isHero,l=e.scrollTo,s=e.children;return c.createElement(c.Fragment,null,c.createElement(Ae,{title:t,description:n,image:o,keywords:r}),c.createElement(m,{simpleNav:i,isHero:a,scrollTo:l}),c.createElement("main",null,s,c.createElement(d,null)))}}}]);
//# sourceMappingURL=8fd5a9e252d576f3219acbcac3a91f4e063fd92e-62af0393c4a4ff46b095.js.map