(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((e,t)=>{var n=a.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return a=>{var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var c=d[s];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=a.props[c],p=r[c]||new Set;p.has(l)?o=!1:(p.add(l),r[c]=p)}}}return o}}()).reverse().map((e,t)=>{var n=e.key||t;return a.default.cloneElement(e,{key:n})})}function h(e){var{children:t}=e,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=()=>{};var m=h;t.default=m},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("lB6z"),n("VxdY"),n("8Kt/")),i=n.n(o),s=n("t4m3"),u=a.a.createElement;t.default=function(e){var{Component:t,pageProps:n}=e;return a.a.useEffect(()=>{!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!==typeof document){var n=document.createElement("script");n.async=!0,n.defer=!0,Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n.src=e,document.body.appendChild(n)}}("https://buttons.github.io/buttons.js")},[]),u(a.a.Fragment,null,u(i.a,null,u("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),u("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),u("link",{href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",rel:"stylesheet"}),u("style",{dangerouslySetInnerHTML:{__html:"\n        @media (max-width: 390px) {\n            .formkit-slide-in {\n              display: none;\n            }\n          }\n          @media (max-height: 740px) {\n            .formkit-slide-in {\n              display: none;\n            }\n          }\n          "}})),u(s.a,null,u(t,n)))}},VxdY:function(e,t,n){},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");class a extends r.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=a},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,o=r(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,c=window.IntersectionObserver,l={};var p=(e,t)=>{var n=a||(c?a=new c(e=>{e.forEach(e=>{if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}})},{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),()=>{try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):()=>{}};function d(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch(e=>{0}),l[t+"%"+n]=!0)}var f=function(e){var t=!1!==e.prefetch,[n,r]=o.default.useState(),a=(0,s.useRouter)(),u=a&&a.pathname||"/",{href:f,as:h}=o.default.useMemo(()=>{var[t,n]=(0,i.resolveHref)(u,e.href,!0);return{href:t,as:e.as?(0,i.resolveHref)(u,e.as):n||t}},[u,e.href,e.as]);o.default.useEffect(()=>{if(t&&c&&n&&n.tagName&&(0,i.isLocalURL)(f)&&!l[f+"%"+h])return p(n,()=>{d(a,f,h)})},[t,n,f,h,a]);var{children:m,replace:v,shallow:y,scroll:g}=e;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=o.Children.only(m),w={ref:e=>{e&&r(e),b&&"object"===typeof b&&b.ref&&("function"===typeof b.ref?b.ref(e):"object"===typeof b.ref&&(b.ref.current=e))},onClick:e=>{b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s){var{nodeName:u}=e.currentTarget;("A"!==u||!function(e){var{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then(e=>{e&&s&&(window.scrollTo(0,0),document.body.focus())}))}(e,a,f,h,v,y,g)}};return t&&(w.onMouseEnter=e=>{(0,i.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(a,f,h,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(w.href=(0,i.addBasePath)((0,i.addLocale)(h,a&&a.locale,a&&a.defaultLocale))),o.default.cloneElement(b,w)};t.default=f},lB6z:function(e,t,n){},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mrum:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={editUrl:"https://github.com/hyperjumptech/monika/edit/main/docs/src/pages",copyright:"Copyright \xa9 ".concat((new Date).getFullYear()," Hyperjump Tech. All Rights Reserved."),repoUrl:"https://github.com/hyperjumptech/monika",algolia:{appId:"",apiKey:"",indexName:""}}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},t4m3:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return O}));var r=n("wx14"),a=n("rePB"),o=n("q1tI"),i=n.n(o),s=n("i8i4"),u=n("nOHt"),c=n.n(u),l=n("8Kt/"),p=n.n(l),d=n("YFqc"),f=n.n(d);var h=n("mrum"),m=i.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=i.a.createContext(),b=null,w=()=>i.a.useContext(g);function O(e){var{children:t,searchParameters:a={hitsPerPage:5}}=e,[o,u]=i.a.useState(!1),l=i.a.useCallback((function(){(b?Promise.resolve():n.e(20).then(n.bind(null,"m3sE")).then(e=>{var{DocSearchModal:t}=e;return b=t})).then(()=>{u(!0)})}),[]),d=i.a.useCallback(()=>u(!1),[]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose;i.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey))&&(e.preventDefault(),t?r():n())}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r])}({isOpen:o,onOpen:l,onClose:d});var f={appId:h.a.algolia.appId,apiKey:h.a.algolia.apiKey,indexName:h.a.algolia.indexName,renderModal:!0};return m(i.a.Fragment,null,m(p.a,null,m("link",{key:"algolia",rel:"preconnect",href:"https://".concat(f.appId,"-dsn.algolia.net"),crossOrigin:"true"})),m(g.Provider,{value:{DocSearchModal:b,onOpen:l}},t),o&&Object(s.createPortal)(m(b,Object(r.a)({},f,{searchParameters:a,onClose:d,navigator:{navigate(e){var{suggestionUrl:t}=e;c.a.push(t)}},transformItems:e=>e.map(e=>{var t=new URL(e.url);return y(y({},e),{},{url:e.url.replace(t.origin,"").replace("#__next","").replace("/docs/#","/docs/overview#")})}),hitComponent:M})),document.body))}function M(e){var{hit:t,children:n}=e;return m(f.a,{href:t.url.replace()},m("a",null,n))}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[[0,0,1,2]]]);