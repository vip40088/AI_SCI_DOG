/*! For license information please see main.b66aa445.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,x={};function m(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=y.prototype=new b;v.constructor=y,g(v,m.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,i={},o=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:n,type:e,key:o,ref:s,props:i,_owner:S.current}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function $(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,a,i,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===i?"."+$(l,0):i,w(o)?(a="",null!=e&&(a=e.replace(E,"$&/")+"/"),z(o,t,a,"",function(e){return e})):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(l=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var d=i+$(s=e[c],c);l+=z(s,t,a,d,o)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=z(s=s.value,t,a,d=i+$(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function T(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",function(e){return t.call(n,e,a++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},O={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function R(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=a,t.Profiler=o,t.PureComponent=y,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=R,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),i=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=R,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},219:(e,t,n)=>{"use strict";var r=n(763),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?o:s[e.$$typeof]||a}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=o;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=f(n);a&&a!==h&&e(t,a,r)}var o=d(n);u&&(o=o.concat(u(n)));for(var s=l(t),g=l(n),x=0;x<o.length;++x){var m=o[x];if(!i[m]&&(!r||!r[m])&&(!g||!g[m])&&(!s||!s[m])){var b=p(n,m);try{c(t,m,b)}catch(y){}}}}return t}},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,d=e[c];if(0>i(l,n))c<a&&0>i(d,l)?(e[r]=d,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<a&&0>i(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,f=3,h=!1,g=!1,x=!1,m="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=r(d);null!==t;){if(null===t.callback)a(d);else{if(!(t.startTime<=e))break;a(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function w(e){if(x=!1,v(e),!g)if(null!==r(c))g=!0,I(k);else{var t=r(d);null!==t&&O(w,t.startTime-e)}}function k(e,n){g=!1,x&&(x=!1,b(_),_=-1),h=!0;var i=f;try{for(v(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!z());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&a(c),v(n)}else a(c);p=r(c)}if(null!==p)var l=!0;else{var u=r(d);null!==u&&O(w,u.startTime-n),l=!1}return l}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,C=null,_=-1,E=5,$=-1;function z(){return!(t.unstable_now()-$<E)}function T(){if(null!==C){var e=t.unstable_now();$=e;var n=!0;try{n=C(!0,e)}finally{n?S():(j=!1,C=null)}}else j=!1}if("function"===typeof y)S=function(){y(T)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,A=P.port2;P.port1.onmessage=T,S=function(){A.postMessage(null)}}else S=function(){m(T,0)};function I(e){C=e,j||(j=!0,S())}function O(e,n){_=m(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,I(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:a,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>o?(e.sortIndex=i,n(d,e),null===r(c)&&e===r(d)&&(x?(b(_),_=-1):x=!0,O(w,i-o))):(e.sortIndex=s,n(c,e),g||h||(g=!0,I(k))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(a=n?n.call(r,d,u,c):void 0)||void 0===a&&d!==u)return!1}return!0}},325:(e,t,n)=>{"use strict";n.d(t,{ON:()=>o}),e=n.hmd(e);const r=["\u4e60\u8fd1\u5e73","xijinpin","Xi Jinping","Xi Ping","jinping","xijing","xi jinping","\u97e9\u6b63","\u674e\u5f3a","\u8d75\u4e50\u9645","\u4e3b\u5e2d","\u4e01\u859b\u7965","\u9a6c\u5174\u745e","\u738b\u6bc5","\u738b\u6caa\u5b81","\u5c39\u529b","\u77f3\u6cf0\u5cf0","\u5218\u56fd\u4e2d","\u674e\u5e0c","\u674e\u5e72\u6770","\u674e\u4e66\u78ca","\u674e\u9e3f\u5fe0","\u4f55\u536b\u4e1c","\u4f55\u7acb\u5cf0","\u5f20\u53c8\u4fa0","\u5f20\u56fd\u6e05","\u9648\u6587\u6e05","\u9648\u5409\u5b81","\u9648\u654f\u5c14","\u8881\u5bb6\u519b","\u9ec4\u5764\u660e","\u8521\u5947","\u7586\u72ec","\u7586\u7368","\u85cf\u4eba","\u85cf\u6bd2","\u85cf\u72ec","\u85cf\u7368","\u85cf\u897f","\u897f\u72ec","\u9000\u515a","\u5171\u5974","\u6cd5\u8f2a","\u4e2d\u73d9","\u5171\u8d3c","\u8d64\u532a","\u4ec7\u5171","\u5171\u532a","\u5171\u72d7","\u5171\u94f2","\u5171\u9ee8","\u5206\u88c2","\u53cd\u515a","\u53cd\u5171","\u53cd\u534e","\u4e2d\u56fd","\u4e2d\u5171","\u4e2d\u592e"],a=[/\u4e60([\s\S]*?)\u5e73/g,/xijin([\s\S]*?)pin/gi,/Xi([\s\S]*?)ping/gi,/Xi([\s\S]*?)Jinping/gi],i=e=>{if(!e||"string"!==typeof e)return{hasSensitiveWords:!1,matchedWords:[]};const t=new Set,n=e.toLowerCase();return r.forEach(e=>{n.includes(e.toLowerCase())&&t.add(e)}),a.forEach(n=>{const r=e.match(n);r&&r.forEach(e=>t.add(e))}),{hasSensitiveWords:t.size>0,matchedWords:Array.from(t)}},o=e=>i(e).hasSensitiveWords,s=e=>{if(!e||"string"!==typeof e)return e;let t=e;return r.forEach(e=>{const n=new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi");t=t.replace(n,"*".repeat(e.length))}),a.forEach(e=>{t=t.replace(e,e=>"*".repeat(e.length))}),t};e.exports&&(e.exports={detectSensitiveWords:i,hasSensitiveWords:o,cleanSensitiveWords:s})},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler");Symbol.for("react.provider");var s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),g=Symbol.for("react.client.reference");function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case o:case i:case d:case u:case h:return e;default:switch(e=e&&e.$$typeof){case l:case c:case f:case p:case s:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===o||e===i||e===d||e===u||"object"===typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===l||e.$$typeof===s||e.$$typeof===c||e.$$typeof===g||void 0!==e.getModuleId)},t.QP=x},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function g(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){x[e]=new g(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];x[t]=new g(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){x[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){x[e]=new g(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){x[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){x[e]=new g(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){x[e]=new g(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){x[e]=new g(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){x[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var a=x.hasOwnProperty(t)?x[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!u.call(h,e)||!u.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(m,b);x[t]=new g(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(m,b);x[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(m,b);x[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){x[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)}),x.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){x[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)});var v=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),E=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var N,L=Object.assign;function D(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var M=!1;function F(e,t){if(!e||M)return"";M=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(1!==o||1!==s)do{if(o--,0>--s||a[o]!==i[s]){var l="\n"+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{M=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function B(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case z:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case $:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function K(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function H(e){e._valueTracker||(e._valueTracker=function(e){var t=K(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function V(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){X(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&V(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function ie(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return de(e,t)})}:de);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var me=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(me[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ce(e){if(e=ya(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function _e(e){Se?je?je.push(e):je=[e]:Se=e}function Ee(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function $e(e,t){return e(t)}function ze(){}var Te=!1;function Pe(e,t,n){if(Te)return e(t,n);Te=!0;try{return $e(e,t,n)}finally{Te=!1,(null!==Se||null!==je)&&(ze(),Ee())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ie=!1;if(d)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(de){Ie=!1}function Re(e,t,n,r,a,i,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ne=!1,Le=null,De=!1,Me=null,Fe={onError:function(e){Ne=!0,Le=e}};function Be(e,t,n,r,a,i,o,s,l){Ne=!1,Le=null,Re.apply(Fe,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(Ue(e)!==e)throw Error(i(188))}function Ke(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return qe(a),e;if(o===r)return qe(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ye=a.unstable_scheduleCallback,Ve=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,Qe=a.unstable_requestPaint,Xe=a.unstable_now,Je=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~a;0!==s?r=ut(s):0!==(i&=o)&&(r=ut(i))}else 0!==(o=n&~a)?r=ut(o):0!==i&&(r=ut(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var yt=0;function vt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Ct,_t=!1,Et=[],$t=null,zt=null,Tt=null,Pt=new Map,At=new Map,It=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rt(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Pt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Nt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=ya(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Lt(e){var t=ba(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Ct(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ya(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ve=r,n.target.dispatchEvent(r),ve=null,t.shift()}return!0}function Mt(e,t,n){Dt(e)&&n.delete(t)}function Ft(){_t=!1,null!==$t&&Dt($t)&&($t=null),null!==zt&&Dt(zt)&&(zt=null),null!==Tt&&Dt(Tt)&&(Tt=null),Pt.forEach(Mt),At.forEach(Mt)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,_t||(_t=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ft)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Et.length){Bt(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==$t&&Bt($t,e),null!==zt&&Bt(zt,e),null!==Tt&&Bt(Tt,e),Pt.forEach(t),At.forEach(t),n=0;n<It.length;n++)(r=It[n]).blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&null===(n=It[0]).blockedOn;)Lt(n),null===n.blockedOn&&It.shift()}var Wt=v.ReactCurrentBatchConfig,qt=!0;function Kt(e,t,n,r){var a=yt,i=Wt.transition;Wt.transition=null;try{yt=1,Yt(e,t,n,r)}finally{yt=a,Wt.transition=i}}function Ht(e,t,n,r){var a=yt,i=Wt.transition;Wt.transition=null;try{yt=4,Yt(e,t,n,r)}finally{yt=a,Wt.transition=i}}function Yt(e,t,n,r){if(qt){var a=Gt(e,t,n,r);if(null===a)qr(e,t,r,Vt,n),Rt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return $t=Nt($t,e,t,n,r,a),!0;case"dragenter":return zt=Nt(zt,e,t,n,r,a),!0;case"mouseover":return Tt=Nt(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Pt.set(i,Nt(Pt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,At.set(i,Nt(At.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Rt(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==a;){var i=ya(a);if(null!==i&&wt(i),null===(i=Gt(e,t,n,r))&&qr(e,t,r,Vt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Vt=null;function Gt(e,t,n,r){if(Vt=null,null!==(e=ba(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=an(cn),un=L({},cn,{view:0,detail:0}),pn=an(un),fn=L({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=an(fn),gn=an(L({},fn,{dataTransfer:0})),xn=an(L({},un,{relatedTarget:0})),mn=an(L({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=L({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),vn=an(L({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return jn}var _n=L({},un,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=an(_n),$n=an(L({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),zn=an(L({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=an(L({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pn=L({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=an(Pn),In=[9,13,27,32],On=d&&"CompositionEvent"in window,Rn=null;d&&"documentMode"in document&&(Rn=document.documentMode);var Nn=d&&"TextEvent"in window&&!Rn,Ln=d&&(!On||Rn&&8<Rn&&11>=Rn),Dn=String.fromCharCode(32),Mn=!1;function Fn(e,t){switch(e){case"keyup":return-1!==In.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Kn(e,t,n,r){_e(r),0<(t=Hr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Yn=null;function Vn(e){Dr(e,0)}function Gn(e){if(Y(va(e)))return e}function Qn(e,t){if("change"===e)return t}var Xn=!1;if(d){var Jn;if(d){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Hn&&(Hn.detachEvent("onpropertychange",nr),Yn=Hn=null)}function nr(e){if("value"===e.propertyName&&Gn(Yn)){var t=[];Kn(t,Yn,e,we(e)),Pe(Vn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Hn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Yn)}function ir(e,t){if("click"===e)return Gn(t)}function or(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!u.call(t,a)||!sr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function ur(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ur(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=V();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=V((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ur(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=dr(n,i);var o=dr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=d&&"documentMode"in document&&11>=document.documentMode,xr=null,mr=null,br=null,yr=!1;function vr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==xr||xr!==V(r)||("selectionStart"in(r=xr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&lr(br,r)||(br=r,0<(r=Hr(mr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}d&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var _r=Cr("animationend"),Er=Cr("animationiteration"),$r=Cr("animationstart"),zr=Cr("transitionend"),Tr=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Tr.set(e,t),l(t,[e])}for(var Ir=0;Ir<Pr.length;Ir++){var Or=Pr[Ir];Ar(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}Ar(_r,"onAnimationEnd"),Ar(Er,"onAnimationIteration"),Ar($r,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(zr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,s,l,c){if(Be.apply(this,arguments),Ne){if(!Ne)throw Error(i(198));var d=Le;Ne=!1,Le=null,De||(De=!0,Me=d)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Lr(a,s,c),i=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Lr(a,s,c),i=l}}}if(De)throw e=Me,De=!1,Me=null,e}function Mr(e,t){var n=t[ga];void 0===n&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,o.forEach(function(t){"selectionchange"!==t&&(Nr.has(t)||Fr(t,!1,e),Fr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Fr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Qt(t)){case 1:var a=Kt;break;case 4:a=Ht;break;default:a=Yt}n=a.bind(null,t,n,e),a=void 0,!Ie||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===a||8===s.nodeType&&s.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;o=o.return}for(;null!==s;){if(null===(o=ba(s)))return;if(5===(l=o.tag)||6===l){r=i=o;continue e}s=s.parentNode}}r=r.return}Pe(function(){var r=i,a=we(n),o=[];e:{var s=Tr.get(e);if(void 0!==s){var l=dn,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=xn;break;case"focusout":c="blur",l=xn;break;case"beforeblur":case"afterblur":l=xn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=zn;break;case _r:case Er:case $r:l=mn;break;case zr:l=Tn;break;case"scroll":l=pn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=$n}var d=0!==(4&t),u=!d&&"scroll"===e,p=d?null!==s?s+"Capture":null:s;d=[];for(var f,h=r;null!==h;){var g=(f=h).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==p&&(null!=(g=Ae(h,p))&&d.push(Kr(h,g,f)))),u)break;h=h.return}0<d.length&&(s=new l(s,c,null,n,a),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ve||!(c=n.relatedTarget||n.fromElement)||!ba(c)&&!c[ha])&&(l||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?ba(c):null)&&(c!==(u=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(d=hn,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=$n,g="onPointerLeave",p="onPointerEnter",h="pointer"),u=null==l?s:va(l),f=null==c?s:va(c),(s=new d(g,h+"leave",l,n,a)).target=u,s.relatedTarget=f,g=null,ba(a)===r&&((d=new d(p,h+"enter",c,n,a)).target=f,d.relatedTarget=u,g=d),u=g,l&&c)e:{for(p=c,h=0,f=d=l;f;f=Yr(f))h++;for(f=0,g=p;g;g=Yr(g))f++;for(;0<h-f;)d=Yr(d),h--;for(;0<f-h;)p=Yr(p),f--;for(;h--;){if(d===p||null!==p&&d===p.alternate)break e;d=Yr(d),p=Yr(p)}d=null}else d=null;null!==l&&Vr(o,s,l,d,!1),null!==c&&null!==u&&Vr(o,u,c,d,!0)}if("select"===(l=(s=r?va(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var x=Qn;else if(qn(s))if(Xn)x=or;else{x=ar;var m=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(x=ir);switch(x&&(x=x(e,r))?Kn(o,x,n,a):(m&&m(e,s,r),"focusout"===e&&(m=s._wrapperState)&&m.controlled&&"number"===s.type&&ee(s,"number",s.value)),m=r?va(r):window,e){case"focusin":(qn(m)||"true"===m.contentEditable)&&(xr=m,mr=r,br=null);break;case"focusout":br=mr=xr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,vr(o,n,a);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":vr(o,n,a)}var b;if(On)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Fn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Ln&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(b=en()):(Jt="value"in(Xt=a)?Xt.value:Xt.textContent,Un=!0)),0<(m=Hr(r,y)).length&&(y=new vn(y,e,null,n,a),o.push({event:y,listeners:m}),b?y.data=b:null!==(b=Bn(n))&&(y.data=b))),(b=Nn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Mn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Mn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!On&&Fn(e,t)?(e=en(),Zt=Jt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Hr(r,"onBeforeInput")).length&&(a=new vn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=b))}Dr(o,t)})}function Kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Ae(e,n))&&r.unshift(Kr(e,i,a)),null!=(i=Ae(e,t))&&r.push(Kr(e,i,a))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Vr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,a?null!=(l=Ae(n,i))&&o.unshift(Kr(n,l,s)):a||null!=(l=Ae(n,i))&&o.push(Kr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Qr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(sa)}:ra;function sa(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ua=Math.random().toString(36).slice(2),pa="__reactFiber$"+ua,fa="__reactProps$"+ua,ha="__reactContainer$"+ua,ga="__reactEvents$"+ua,xa="__reactListeners$"+ua,ma="__reactHandles$"+ua;function ba(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=da(e);null!==e;){if(n=e[pa])return n;e=da(e)}return t}n=(e=n).parentNode}return null}function ya(e){return!(e=e[pa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function va(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[fa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ca(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function _a(e,t){Sa++,ka[Sa]=e.current,e.current=t}var Ea={},$a=ja(Ea),za=ja(!1),Ta=Ea;function Pa(e,t){var n=e.type.contextTypes;if(!n)return Ea;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Aa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ia(){Ca(za),Ca($a)}function Oa(e,t,n){if($a.current!==Ea)throw Error(i(168));_a($a,t),_a(za,n)}function Ra(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return L({},n,r)}function Na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ea,Ta=$a.current,_a($a,e),_a(za,za.current),!0}function La(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ra(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ca(za),Ca($a),_a($a,e)):Ca(za),_a(za,n)}var Da=null,Ma=!1,Fa=!1;function Ba(e){null===Da?Da=[e]:Da.push(e)}function Ua(){if(!Fa&&null!==Da){Fa=!0;var e=0,t=yt;try{var n=Da;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Da=null,Ma=!1}catch(a){throw null!==Da&&(Da=Da.slice(e+1)),Ye(Ze,Ua),a}finally{yt=t,Fa=!1}}return null}var Wa=[],qa=0,Ka=null,Ha=0,Ya=[],Va=0,Ga=null,Qa=1,Xa="";function Ja(e,t){Wa[qa++]=Ha,Wa[qa++]=Ka,Ka=e,Ha=t}function Za(e,t,n){Ya[Va++]=Qa,Ya[Va++]=Xa,Ya[Va++]=Ga,Ga=e;var r=Qa;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Qa=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else Qa=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Ja(e,1),Za(e,1,0))}function ti(e){for(;e===Ka;)Ka=Wa[--qa],Wa[qa]=null,Ha=Wa[--qa],Wa[qa]=null;for(;e===Ga;)Ga=Ya[--Va],Ya[Va]=null,Xa=Ya[--Va],Ya[Va]=null,Qa=Ya[--Va],Ya[Va]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Pc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:Qa,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Pc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function li(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ai){var t=ri;if(t){var n=t;if(!si(e,t)){if(li(e))throw Error(i(418));t=ca(n.nextSibling);var r=ni;t&&si(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(li(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function ui(e){if(e!==ni)return!1;if(!ai)return di(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(li(e))throw pi(),Error(i(418));for(;t;)oi(e,t),t=ca(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ca(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=ri;e;)e=ca(e.nextSibling)}function fi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var gi=v.ReactCurrentBatchConfig;function xi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function yi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ic(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Lc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===A&&bi(i)===t.type)?((r=a(t,n.props)).ref=xi(e,t,n),r.return=e,r):((r=Oc(n.type,n.key,n.props,null,e.mode,r)).ref=xi(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function u(e,t,n,r,i){return null===t||7!==t.tag?((t=Rc(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Lc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Oc(t.type,t.key,t.props,null,e.mode,n)).ref=xi(e,null,t),n.return=e,n;case k:return(t=Dc(t,e.mode,n)).return=e,t;case A:return p(e,(0,t._init)(t._payload),n)}if(te(t)||R(t))return(t=Rc(t,e.mode,n,null)).return=e,t;mi(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?c(e,t,n,r):null;case k:return n.key===a?d(e,t,n,r):null;case A:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||R(n))return null!==a?null:u(e,t,n,r,null);mi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return d(t,e=e.get(null===r.key?n:r.key)||null,r,a);case A:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||R(r))return u(t,e=e.get(n)||null,r,a,null);mi(t,r)}return null}function g(a,i,s,l){for(var c=null,d=null,u=i,g=i=0,x=null;null!==u&&g<s.length;g++){u.index>g?(x=u,u=null):x=u.sibling;var m=f(a,u,s[g],l);if(null===m){null===u&&(u=x);break}e&&u&&null===m.alternate&&t(a,u),i=o(m,i,g),null===d?c=m:d.sibling=m,d=m,u=x}if(g===s.length)return n(a,u),ai&&Ja(a,g),c;if(null===u){for(;g<s.length;g++)null!==(u=p(a,s[g],l))&&(i=o(u,i,g),null===d?c=u:d.sibling=u,d=u);return ai&&Ja(a,g),c}for(u=r(a,u);g<s.length;g++)null!==(x=h(u,a,g,s[g],l))&&(e&&null!==x.alternate&&u.delete(null===x.key?g:x.key),i=o(x,i,g),null===d?c=x:d.sibling=x,d=x);return e&&u.forEach(function(e){return t(a,e)}),ai&&Ja(a,g),c}function x(a,s,l,c){var d=R(l);if("function"!==typeof d)throw Error(i(150));if(null==(l=d.call(l)))throw Error(i(151));for(var u=d=null,g=s,x=s=0,m=null,b=l.next();null!==g&&!b.done;x++,b=l.next()){g.index>x?(m=g,g=null):m=g.sibling;var y=f(a,g,b.value,c);if(null===y){null===g&&(g=m);break}e&&g&&null===y.alternate&&t(a,g),s=o(y,s,x),null===u?d=y:u.sibling=y,u=y,g=m}if(b.done)return n(a,g),ai&&Ja(a,x),d;if(null===g){for(;!b.done;x++,b=l.next())null!==(b=p(a,b.value,c))&&(s=o(b,s,x),null===u?d=b:u.sibling=b,u=b);return ai&&Ja(a,x),d}for(g=r(a,g);!b.done;x++,b=l.next())null!==(b=h(g,a,x,b.value,c))&&(e&&null!==b.alternate&&g.delete(null===b.key?x:b.key),s=o(b,s,x),null===u?d=b:u.sibling=b,u=b);return e&&g.forEach(function(e){return t(a,e)}),ai&&Ja(a,x),d}return function e(r,i,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,d=i;null!==d;){if(d.key===c){if((c=o.type)===S){if(7===d.tag){n(r,d.sibling),(i=a(d,o.props.children)).return=r,r=i;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===A&&bi(c)===d.type){n(r,d.sibling),(i=a(d,o.props)).ref=xi(r,d,o),i.return=r,r=i;break e}n(r,d);break}t(r,d),d=d.sibling}o.type===S?((i=Rc(o.props.children,r.mode,l,o.key)).return=r,r=i):((l=Oc(o.type,o.key,o.props,null,r.mode,l)).ref=xi(r,i,o),l.return=r,r=l)}return s(r);case k:e:{for(d=o.key;null!==i;){if(i.key===d){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Dc(o,r.mode,l)).return=r,r=i}return s(r);case A:return e(r,i,(d=o._init)(o._payload),l)}if(te(o))return g(r,i,o,l);if(R(o))return x(r,i,o,l);mi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Lc(o,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var vi=yi(!0),wi=yi(!1),ki=ja(null),Si=null,ji=null,Ci=null;function _i(){Ci=ji=Si=null}function Ei(e){var t=ki.current;Ca(ki),e._currentValue=t}function $i(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zi(e,t){Si=e,Ci=ji=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===ji){if(null===Si)throw Error(i(308));ji=e,Si.dependencies={lanes:0,firstContext:e}}else ji=ji.next=e;return t}var Pi=null;function Ai(e){null===Pi?Pi=[e]:Pi.push(e)}function Ii(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ai(t)):(n.next=a.next,a.next=n),t.interleaved=n,Oi(e,r)}function Oi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ri=!1;function Ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Li(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Di(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&$l)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Oi(e,n)}return null===(a=r.interleaved)?(t.next=t,Ai(r)):(t.next=a.next,a.next=t),r.interleaved=t,Oi(e,n)}function Fi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Bi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var a=e.updateQueue;Ri=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(null!==s){a.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?i=c:o.next=c,o=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==o&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==i){var u=a.baseState;for(o=0,d=c=l=null,s=i;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==d&&(d=d.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,g=s;switch(p=t,f=n,g.tag){case 1:if("function"===typeof(h=g.payload)){u=h.call(f,u,p);break e}u=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(f,u,p):h)||void 0===p)break e;u=L({},u,p);break e;case 2:Ri=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=f,l=u):d=d.next=f,o|=p;if(null===(s=s.next)){if(null===(s=a.shared.pending))break;s=(p=s).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===d&&(l=u),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Nl|=o,e.lanes=o,e.memoizedState=u}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var qi={},Ki=ja(qi),Hi=ja(qi),Yi=ja(qi);function Vi(e){if(e===qi)throw Error(i(174));return e}function Gi(e,t){switch(_a(Yi,t),_a(Hi,e),_a(Ki,qi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Ki),_a(Ki,t)}function Qi(){Ca(Ki),Ca(Hi),Ca(Yi)}function Xi(e){Vi(Yi.current);var t=Vi(Ki.current),n=le(t,e.type);t!==n&&(_a(Hi,e),_a(Ki,n))}function Ji(e){Hi.current===e&&(Ca(Ki),Ca(Hi))}var Zi=ja(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=v.ReactCurrentDispatcher,ao=v.ReactCurrentBatchConfig,io=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,fo=0;function ho(){throw Error(i(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,a),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(i(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,a)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,io=0,lo=so=oo=null,co=!1,t)throw Error(i(300));return e}function mo(){var e=0!==po;return po=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function yo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(i(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function vo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=so,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((io&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,oo.lanes|=u,Nl|=u}d=d.next}while(null!==d&&d!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(ys=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Nl|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=yo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var s=a=a.next;do{o=e(o,s.action),s=s.next}while(s!==a);sr(o,t.memoizedState)||(ys=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function jo(e,t){var n=oo,r=yo(),a=t(),o=!sr(r.memoizedState,a);if(o&&(r.memoizedState=a,ys=!0),r=r.queue,No(Eo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Po(9,_o.bind(null,n,r,a,t),void 0,null),null===zl)throw Error(i(349));0!==(30&io)||Co(n,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function _o(e,t,n,r){t.value=n,t.getSnapshot=r,$o(t)&&zo(e)}function Eo(e,t,n){return n(function(){$o(t)&&zo(e)})}function $o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function zo(e){var t=Oi(e,1);null!==t&&nc(t,e,1,-1)}function To(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Vo.bind(null,oo,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ao(){return yo().memoizedState}function Io(e,t,n,r){var a=bo();oo.flags|=e,a.memoizedState=Po(1|t,n,void 0,void 0===r?null:r)}function Oo(e,t,n,r){var a=yo();r=void 0===r?null:r;var i=void 0;if(null!==so){var o=so.memoizedState;if(i=o.destroy,null!==r&&go(r,o.deps))return void(a.memoizedState=Po(t,n,i,r))}oo.flags|=e,a.memoizedState=Po(1|t,n,i,r)}function Ro(e,t){return Io(8390656,8,e,t)}function No(e,t){return Oo(2048,8,e,t)}function Lo(e,t){return Oo(4,2,e,t)}function Do(e,t){return Oo(4,4,e,t)}function Mo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4,4,Mo.bind(null,t,e),n)}function Bo(){}function Uo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=n):(sr(n,t)||(n=gt(),oo.lanes|=n,Nl|=n,e.baseState=!0),t)}function Ko(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{yt=n,ao.transition=r}}function Ho(){return yo().memoizedState}function Yo(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Qo(t,n);else if(null!==(n=Ii(e,t,n,r))){nc(n,e,r,ec()),Xo(n,t,r)}}function Vo(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Qo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(a.next=a,Ai(t)):(a.next=l.next,l.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Ii(e,t,a,r))&&(nc(n,e,r,a=ec()),Xo(n,t,r))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Qo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Jo={readContext:Ti,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Ti,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:Ro,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Io(4194308,4,Mo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:To,useDebugValue:Bo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Ko.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=bo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===zl)throw Error(i(349));0!==(30&io)||Co(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ro(Eo.bind(null,r,o,e),[e]),r.flags|=2048,Po(9,_o.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=zl.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(Qa&~(1<<32-ot(Qa)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ti,useCallback:Uo,useContext:Ti,useEffect:No,useImperativeHandle:Fo,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Wo,useReducer:wo,useRef:Ao,useState:function(){return wo(vo)},useDebugValue:Bo,useDeferredValue:function(e){return qo(yo(),so.memoizedState,e)},useTransition:function(){return[wo(vo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:Ho,unstable_isNewReconciler:!1},ts={readContext:Ti,useCallback:Uo,useContext:Ti,useEffect:No,useImperativeHandle:Fo,useInsertionEffect:Lo,useLayoutEffect:Do,useMemo:Wo,useReducer:ko,useRef:Ao,useState:function(){return ko(vo)},useDebugValue:Bo,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:qo(t,so.memoizedState,e)},useTransition:function(){return[ko(vo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:Ho,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=L({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:L({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var as={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Di(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Mi(e,i,a))&&(nc(t,e,a,r),Fi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Di(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Mi(e,i,a))&&(nc(t,e,a,r),Fi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=Di(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Mi(e,a,r))&&(nc(t,e,r,n),Fi(t,e,r))}};function is(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(a,i))}function os(e,t,n){var r=!1,a=Ea,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(a=Aa(t)?Ta:$a.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Pa(e,a):Ea),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=as,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&as.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ni(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ti(i):(i=Aa(t)?Ta:$a.current,a.context=Pa(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rs(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&as.enqueueReplaceState(a,a.state,null),Ui(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Di(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Kl=r),us(0,t)},n}function hs(e,t,n){(n=Di(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){us(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){us(0,t),"function"!==typeof r&&(null===Hl?Hl=new Set([this]):Hl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function xs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ms(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Di(-1,1)).tag=2,Mi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var bs=v.ReactCurrentOwner,ys=!1;function vs(e,t,n,r){t.child=null===e?wi(t,null,n,r):vi(t,e.child,n,r)}function ws(e,t,n,r,a){n=n.render;var i=t.ref;return zi(t,a),r=xo(e,t,n,r,i,a),n=mo(),null===e||ys?(ai&&n&&ei(t),t.flags|=1,vs(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qs(e,t,a))}function ks(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ac(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Oc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return qs(e,t,a)}return t.flags|=1,(e=Ic(i,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(ys=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,qs(e,t,a);0!==(131072&e.flags)&&(ys=!0)}}return _s(e,t,n,r,a)}function js(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_a(Il,Al),Al|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_a(Il,Al),Al|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,_a(Il,Al),Al|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,_a(Il,Al),Al|=r;return vs(e,t,a,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _s(e,t,n,r,a){var i=Aa(n)?Ta:$a.current;return i=Pa(t,i),zi(t,a),n=xo(e,t,n,r,i,a),r=mo(),null===e||ys?(ai&&r&&ei(t),t.flags|=1,vs(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,qs(e,t,a))}function Es(e,t,n,r,a){if(Aa(n)){var i=!0;Na(t)}else i=!1;if(zi(t,a),null===t.stateNode)Ws(e,t),os(t,n,r),ls(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ti(c):c=Pa(t,c=Aa(n)?Ta:$a.current);var d=n.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate;u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Ri=!1;var p=t.memoizedState;o.state=p,Ui(t,r,o,a),l=t.memoizedState,s!==r||p!==l||za.current||Ri?("function"===typeof d&&(rs(t,n,d,r),l=t.memoizedState),(s=Ri||is(t,n,s,r,p,l,c))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Li(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,u=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ti(l):l=Pa(t,l=Aa(n)?Ta:$a.current);var f=n.getDerivedStateFromProps;(d="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==u||p!==l)&&ss(t,o,r,l),Ri=!1,p=t.memoizedState,o.state=p,Ui(t,r,o,a);var h=t.memoizedState;s!==u||p!==h||za.current||Ri?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=Ri||is(t,n,c,r,p,h,l)||!1)?(d||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return $s(e,t,n,r,i,a)}function $s(e,t,n,r,a,i){Cs(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&La(t,n,!1),qs(e,t,i);r=t.stateNode,bs.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=vi(t,e.child,null,i),t.child=vi(t,null,s,i)):vs(e,t,s,i),t.memoizedState=r.state,a&&La(t,n,!0),t.child}function zs(e){var t=e.stateNode;t.pendingContext?Oa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(0,t.context,!1),Gi(e,t.containerInfo)}function Ts(e,t,n,r,a){return fi(),hi(a),t.flags|=256,vs(e,t,n,r),t.child}var Ps,As,Is,Os,Rs={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ls(e,t,n){var r,a=t.pendingProps,o=Zi.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),_a(Zi,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=a.children,e=a.fallback,s?(a=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&a)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Nc(l,a,0,null),e=Rc(e,a,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ns(n),t.memoizedState=Rs,e):Ds(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,s){if(n)return 256&t.flags?(t.flags&=-257,Ms(e,t,s,r=ds(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Nc({mode:"visible",children:r.children},a,0,null),(o=Rc(o,a,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&vi(t,e.child,null,s),t.child.memoizedState=Ns(s),t.memoizedState=Rs,o);if(0===(1&t.mode))return Ms(e,t,s,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var l=r.dgst;return r=l,Ms(e,t,s,r=ds(o=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(r=zl)){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|s))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Oi(e,a),nc(r,e,a,-1))}return gc(),Ms(e,t,s,r=ds(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ca(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Ya[Va++]=Qa,Ya[Va++]=Xa,Ya[Va++]=Ga,Qa=e.id,Xa=e.overflow,Ga=t),t=Ds(t,r.children),t.flags|=4096,t)}(e,t,l,a,r,o,n);if(s){s=a.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&l)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Ic(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Ic(r,s):(s=Rc(s,l,n,null)).flags|=2,s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,l=null===(l=e.child.memoizedState)?Ns(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Rs,a}return e=(s=e.child).sibling,a=Ic(s,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ds(e,t){return(t=Nc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ms(e,t,n,r){return null!==r&&hi(r),vi(t,e.child,null,n),(e=Ds(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),$i(e.return,t,n)}function Bs(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Us(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(vs(e,t,r.children,n),0!==(2&(r=Zi.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,n,t);else if(19===e.tag)Fs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_a(Zi,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bs(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bs(t,!0,n,null,i);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Nl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ic(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ic(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ks(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Hs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hs(t),null;case 1:case 17:return Aa(t.type)&&Ia(),Hs(t),null;case 3:return r=t.stateNode,Qi(),Ca(za),Ca($a),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ui(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(oc(ii),ii=null))),As(e,t),Hs(t),null;case 5:Ji(t);var a=Vi(Yi.current);if(n=t.type,null!==e&&null!=t.stateNode)Is(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Hs(t),null}if(e=Vi(Ki.current),ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pa]=t,r[fa]=o,e=0!==(1&t.mode),n){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(a=0;a<Rr.length;a++)Mr(Rr[a],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":Q(r,o),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Mr("invalid",r);break;case"textarea":ae(r,o),Mr("invalid",r)}for(var l in be(n,o),a=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),a=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Mr("scroll",r)}switch(n){case"input":H(r),Z(r,o,!0);break;case"textarea":H(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pa]=t,e[fa]=r,Ps(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,r),n){case"dialog":Mr("cancel",e),Mr("close",e),a=r;break;case"iframe":case"object":case"embed":Mr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Rr.length;a++)Mr(Rr[a],e);a=r;break;case"source":Mr("error",e),a=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),a=r;break;case"details":Mr("toggle",e),a=r;break;case"input":Q(e,r),a=G(e,r),Mr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=L({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Mr("invalid",e)}for(o in be(n,a),c=a)if(c.hasOwnProperty(o)){var d=c[o];"style"===o?xe(e,d):"dangerouslySetInnerHTML"===o?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===o?"string"===typeof d?("textarea"!==n||""!==d)&&pe(e,d):"number"===typeof d&&pe(e,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=d&&"onScroll"===o&&Mr("scroll",e):null!=d&&y(e,o,d,l))}switch(n){case"input":H(e),Z(e,r,!1);break;case"textarea":H(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hs(t),null;case 6:if(e&&null!=t.stateNode)Os(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Vi(Yi.current),Vi(Ki.current),ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return Hs(t),null;case 13:if(Ca(Zi),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))pi(),fi(),t.flags|=98560,o=!1;else if(o=ui(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[pa]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hs(t),o=!1}else null!==ii&&(oc(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Zi.current)?0===Ol&&(Ol=3):gc())),null!==t.updateQueue&&(t.flags|=4),Hs(t),null);case 4:return Qi(),As(e,t),null===e&&Ur(t.stateNode.containerInfo),Hs(t),null;case 10:return Ei(t.type._context),Hs(t),null;case 19:if(Ca(Zi),null===(o=t.memoizedState))return Hs(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Ks(o,!1);else{if(0!==Ol||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Ks(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _a(Zi,1&Zi.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>Ul&&(t.flags|=128,r=!0,Ks(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ks(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ai)return Hs(t),null}else 2*Xe()-o.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Ks(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Zi.current,_a(Zi,r?1&n|2:1&n),t):(Hs(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Al)&&(Hs(t),6&t.subtreeFlags&&(t.flags|=8192)):Hs(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Vs(e,t){switch(ti(t),t.tag){case 1:return Aa(t.type)&&Ia(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qi(),Ca(za),Ca($a),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ji(t),null;case 13:if(Ca(Zi),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(Zi),null;case 4:return Qi(),null;case 10:return Ei(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Ps=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},As=function(){},Is=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Vi(Ki.current);var i,o=null;switch(n){case"input":a=G(e,a),r=G(e,r),o=[];break;case"select":a=L({},a,{value:void 0}),r=L({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(d in be(n,r),n=null,a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&null!=a[d])if("style"===d){var l=a[d];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=null!=a?a[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Mr("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}},Os=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Qs=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){jc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&el(t,n,i)}a=a.next}while(a!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ga],delete t[xa],delete t[ma])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,ul=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(s){}switch(n.tag){case 5:Qs||Zs(n,t);case 6:var r=dl,a=ul;dl=null,pl(e,t,n),ul=a,null!==(dl=r)&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?la(e.parentNode,n):1===e.nodeType&&la(e,n),Ut(e)):la(dl,n.stateNode));break;case 4:r=dl,a=ul,dl=n.stateNode.containerInfo,ul=!0,pl(e,t,n),dl=r,ul=a;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&el(n,t,o),a=a.next}while(a!==r)}pl(e,t,n);break;case 1:if(!Qs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){jc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach(function(t){var r=$c.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(i(160));fl(o,s,a),dl=null,ul=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(d){jc(a,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)xl(t,e),t=t.sibling}function xl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),ml(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(x){jc(e,e.return,x)}try{nl(5,e,e.return)}catch(x){jc(e,e.return,x)}}break;case 1:gl(t,e),ml(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(gl(t,e),ml(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(x){jc(e,e.return,x)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&X(a,o),ye(l,s);var d=ye(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];"style"===u?xe(a,p):"dangerouslySetInnerHTML"===u?ue(a,p):"children"===u?pe(a,p):y(a,u,p,d)}switch(l){case"input":J(a,o);break;case"textarea":ie(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[fa]=o}catch(x){jc(e,e.return,x)}}break;case 6:if(gl(t,e),ml(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(x){jc(e,e.return,x)}}break;case 3:if(gl(t,e),ml(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(x){jc(e,e.return,x)}break;case 4:default:gl(t,e),ml(e);break;case 13:gl(t,e),ml(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Bl=Xe())),4&r&&hl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(d=Qs)||u,gl(t,e),Qs=d):gl(t,e),ml(e),8192&r){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Js=e,u=e.child;null!==u;){for(p=Js=u;null!==Js;){switch(h=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var g=f.stateNode;if("function"===typeof g.componentWillUnmount){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){jc(r,n,x)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Js=h):wl(p)}u=u.sibling}e:for(u=null,p=e;;){if(5===p.tag){if(null===u){u=p;try{a=p.stateNode,d?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=ge("display",s))}catch(x){jc(e,e.return,x)}}}else if(6===p.tag){if(null===u)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(x){jc(e,e.return,x)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gl(t,e),ml(e),4&r&&hl(e);case 21:}}function ml(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(pe(a,""),r.flags&=-33),cl(e,sl(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(i(161))}}catch(s){jc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Js=e,yl(e,t,n)}function yl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var a=Js,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Gs;if(!o){var s=a.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Gs;var c=Qs;if(Gs=o,(Qs=l)&&!c)for(Js=a;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?kl(a):null!==l?(l.return=o,Js=l):kl(a);for(;null!==i;)Js=i,yl(i,t,n),i=i.sibling;Js=a,Gs=s,Qs=c}vl(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Js=i):vl(e)}}function vl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var p=u.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(i(163))}Qs||512&t.flags&&al(t)}catch(f){jc(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){jc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(l){jc(t,a,l)}}var i=t.return;try{al(t)}catch(l){jc(t,i,l)}break;case 5:var o=t.return;try{al(t)}catch(l){jc(t,o,l)}}}catch(l){jc(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,jl=Math.ceil,Cl=v.ReactCurrentDispatcher,_l=v.ReactCurrentOwner,El=v.ReactCurrentBatchConfig,$l=0,zl=null,Tl=null,Pl=0,Al=0,Il=ja(0),Ol=0,Rl=null,Nl=0,Ll=0,Dl=0,Ml=null,Fl=null,Bl=0,Ul=1/0,Wl=null,ql=!1,Kl=null,Hl=null,Yl=!1,Vl=null,Gl=0,Ql=0,Xl=null,Jl=-1,Zl=0;function ec(){return 0!==(6&$l)?Xe():-1!==Jl?Jl:Jl=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&$l)&&0!==Pl?Pl&-Pl:null!==gi.transition?(0===Zl&&(Zl=gt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,Xl=null,Error(i(185));mt(e,n,r),0!==(2&$l)&&e===zl||(e===zl&&(0===(2&$l)&&(Ll|=n),4===Ol&&sc(e,Pl)),rc(e,r),1===n&&0===$l&&0===(1&t.mode)&&(Ul=Xe()+500,Ma&&Ua()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),s=1<<o,l=a[o];-1===l?0!==(s&n)&&0===(s&r)||(a[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pt(e,e===zl?Pl:0);if(0===r)null!==n&&Ve(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ve(n),1===t)0===e.tag?function(e){Ma=!0,Ba(e)}(lc.bind(null,e)):Ba(lc.bind(null,e)),oa(function(){0===(6&$l)&&Ua()}),n=null;else{switch(vt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=zc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Jl=-1,Zl=0,0!==(6&$l))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===zl?Pl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=xc(e,r);else{t=r;var a=$l;$l|=2;var o=hc();for(zl===e&&Pl===t||(Wl=null,Ul=Xe()+500,pc(e,t));;)try{bc();break}catch(l){fc(e,l)}_i(),Cl.current=o,$l=a,null!==Tl?t=0:(zl=null,Pl=0,t=Ol)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t)throw n=Rl,pc(e,0),sc(e,r),rc(e,Xe()),n;if(6===t)sc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!sr(i(),a))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=xc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t))throw n=Rl,pc(e,0),sc(e,r),rc(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Fl,Wl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Bl+500-Xe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wc.bind(null,e,Fl,Wl),t);break}wc(e,Fl,Wl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>a&&(a=s),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=ra(wc.bind(null,e,Fl,Wl),r);break}wc(e,Fl,Wl);break;default:throw Error(i(329))}}}return rc(e,Xe()),e.callbackNode===n?ac.bind(null,e):null}function ic(e,t){var n=Ml;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=xc(e,t))&&(t=Fl,Fl=n,null!==t&&oc(t)),e}function oc(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function sc(e,t){for(t&=~Dl,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&$l))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=xc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Rl,pc(e,0),sc(e,t),rc(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fl,Wl),rc(e,Xe()),null}function cc(e,t){var n=$l;$l|=1;try{return e(t)}finally{0===($l=n)&&(Ul=Xe()+500,Ma&&Ua())}}function dc(e){null!==Vl&&0===Vl.tag&&0===(6&$l)&&kc();var t=$l;$l|=1;var n=El.transition,r=yt;try{if(El.transition=null,yt=1,e)return e()}finally{yt=r,El.transition=n,0===(6&($l=t))&&Ua()}}function uc(){Al=Il.current,Ca(Il)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Tl)for(n=Tl.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ia();break;case 3:Qi(),Ca(za),Ca($a),no();break;case 5:Ji(r);break;case 4:Qi();break;case 13:case 19:Ca(Zi);break;case 10:Ei(r.type._context);break;case 22:case 23:uc()}n=n.return}if(zl=e,Tl=e=Ic(e.current,null),Pl=Al=t,Ol=0,Rl=null,Dl=Ll=Nl=0,Fl=Ml=null,null!==Pi){for(t=0;t<Pi.length;t++)if(null!==(r=(n=Pi[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Pi=null}return e}function fc(e,t){for(;;){var n=Tl;try{if(_i(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}co=!1}if(io=0,lo=so=oo=null,uo=!1,po=0,_l.current=null,null===n||null===n.return){Ol=1,Rl=t,Tl=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Pl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,p=u.tag;if(0===(1&u.mode)&&(0===p||11===p||15===p)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=xs(s);if(null!==h){h.flags&=-257,ms(h,s,l,0,t),1&h.mode&&gs(o,d,t),c=d;var g=(t=h).updateQueue;if(null===g){var x=new Set;x.add(c),t.updateQueue=x}else g.add(c);break e}if(0===(1&t)){gs(o,d,t),gc();break e}c=Error(i(426))}else if(ai&&1&l.mode){var m=xs(s);if(null!==m){0===(65536&m.flags)&&(m.flags|=256),ms(m,s,l,0,t),hi(cs(c,l));break e}}o=c=cs(c,l),4!==Ol&&(Ol=2),null===Ml?Ml=[o]:Ml.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Bi(o,fs(0,c,t));break e;case 1:l=c;var b=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Hl||!Hl.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Bi(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}vc(n)}catch(v){t=v,Tl===n&&null!==n&&(Tl=n=n.return);continue}break}}function hc(){var e=Cl.current;return Cl.current=Jo,null===e?Jo:e}function gc(){0!==Ol&&3!==Ol&&2!==Ol||(Ol=4),null===zl||0===(268435455&Nl)&&0===(268435455&Ll)||sc(zl,Pl)}function xc(e,t){var n=$l;$l|=2;var r=hc();for(zl===e&&Pl===t||(Wl=null,pc(e,t));;)try{mc();break}catch(a){fc(e,a)}if(_i(),$l=n,Cl.current=r,null!==Tl)throw Error(i(261));return zl=null,Pl=0,Ol}function mc(){for(;null!==Tl;)yc(Tl)}function bc(){for(;null!==Tl&&!Ge();)yc(Tl)}function yc(e){var t=Sl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?vc(e):Tl=t,_l.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,Al)))return void(Tl=n)}else{if(null!==(n=Vs(n,t)))return n.flags&=32767,void(Tl=n);if(null===e)return Ol=6,void(Tl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Tl=t);Tl=t=e}while(null!==t);0===Ol&&(Ol=5)}function wc(e,t,n){var r=yt,a=El.transition;try{El.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Vl);if(0!==(6&$l))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===zl&&(Tl=zl=null,Pl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,zc(tt,function(){return kc(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=El.transition,El.transition=null;var s=yt;yt=1;var l=$l;$l|=4,_l.current=null,function(e,t){if(ea=qt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==a&&3!==p.nodeType||(l=s+a),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++d===a&&(l=s),f===o&&++u===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},qt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var x=g.memoizedProps,m=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:ns(t.type,x),m);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;1===v.nodeType?v.textContent="":9===v.nodeType&&v.documentElement&&v.removeChild(v.documentElement);break;default:throw Error(i(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}g=tl,tl=!1}(e,n),xl(n,e),hr(ta),qt=!!ea,ta=ea=null,e.current=n,bl(n,e,a),Qe(),$l=l,yt=s,El.transition=o}else e.current=n;if(Yl&&(Yl=!1,Vl=e,Gl=a),o=e.pendingLanes,0===o&&(Hl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ql)throw ql=!1,e=Kl,Kl=null,e;0!==(1&Gl)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Xl?Ql++:(Ql=0,Xl=e):Ql=0,Ua()}(e,t,n,r)}finally{El.transition=a,yt=r}return null}function kc(){if(null!==Vl){var e=vt(Gl),t=El.transition,n=yt;try{if(El.transition=null,yt=16>e?16:e,null===Vl)var r=!1;else{if(e=Vl,Vl=null,Gl=0,0!==(6&$l))throw Error(i(331));var a=$l;for($l|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Js=d;null!==Js;){var u=Js;switch(u.tag){case 0:case 11:case 15:nl(8,u,o)}var p=u.child;if(null!==p)p.return=u,Js=p;else for(;null!==Js;){var f=(u=Js).sibling,h=u.return;if(il(u),u===d){Js=null;break}if(null!==f){f.return=h,Js=f;break}Js=h}}}var g=o.alternate;if(null!==g){var x=g.child;if(null!==x){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(null!==x)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Js=b;break e}Js=o.return}}var y=e.current;for(Js=y;null!==Js;){var v=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==v)v.return=s,Js=v;else e:for(s=y;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){jc(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if($l=a,Ua(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{yt=n,El.transition=t}}return!1}function Sc(e,t,n){e=Mi(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(mt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Hl||!Hl.has(r))){t=Mi(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(mt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,zl===e&&(Pl&n)===n&&(4===Ol||3===Ol&&(130023424&Pl)===Pl&&500>Xe()-Bl?pc(e,0):Dl|=n),rc(e,t)}function _c(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var n=ec();null!==(e=Oi(e,t))&&(mt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),_c(e,n)}function $c(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),_c(e,n)}function zc(e,t){return Ye(e,t)}function Tc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pc(e,t,n,r){return new Tc(e,t,n,r)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ic(e,t){var n=e.alternate;return null===n?((n=Pc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oc(e,t,n,r,a,o){var s=2;if(r=e,"function"===typeof e)Ac(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Rc(n.children,a,o,t);case j:s=8,a|=8;break;case C:return(e=Pc(12,n,t,2|a)).elementType=C,e.lanes=o,e;case z:return(e=Pc(13,n,t,a)).elementType=z,e.lanes=o,e;case T:return(e=Pc(19,n,t,a)).elementType=T,e.lanes=o,e;case I:return Nc(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:s=10;break e;case E:s=9;break e;case $:s=11;break e;case P:s=14;break e;case A:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Pc(s,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Rc(e,t,n,r){return(e=Pc(7,e,r,t)).lanes=n,e}function Nc(e,t,n,r){return(e=Pc(22,e,r,t)).elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return(e=Pc(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Pc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xt(0),this.expirationTimes=xt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,a,i,o,s,l){return e=new Mc(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Pc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ni(i),e}function Bc(e){if(!e)return Ea;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Aa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Aa(n))return Ra(e,n,t)}return t}function Uc(e,t,n,r,a,i,o,s,l){return(e=Fc(n,r,!0,e,0,i,0,s,l)).context=Bc(null),n=e.current,(i=Di(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,Mi(n,i,a),e.current.lanes=a,mt(e,a,r),rc(e,r),e}function Wc(e,t,n,r){var a=t.current,i=ec(),o=tc(a);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Di(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Mi(a,t,o))&&(nc(e,a,o,i),Fi(e,a,o)),o}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Kc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hc(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||za.current)ys=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ys=!1,function(e,t,n){switch(t.tag){case 3:zs(t),fi();break;case 5:Xi(t);break;case 1:Aa(t.type)&&Na(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;_a(ki,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(_a(Zi,1&Zi.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ls(e,t,n):(_a(Zi,1&Zi.current),null!==(e=qs(e,t,n))?e.sibling:null);_a(Zi,1&Zi.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),_a(Zi,Zi.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return qs(e,t,n)}(e,t,n);ys=0!==(131072&e.flags)}else ys=!1,ai&&0!==(1048576&t.flags)&&Za(t,Ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var a=Pa(t,$a.current);zi(t,n),a=xo(null,t,r,e,a,n);var o=mo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Aa(r)?(o=!0,Na(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Ni(t),a.updater=as,t.stateNode=a,a._reactInternals=t,ls(t,r,e,n),t=$s(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),vs(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ac(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===$)return 11;if(e===P)return 14}return 2}(r),e=ns(r,e),a){case 0:t=_s(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,_s(e,t,r,a=t.elementType===r?a:ns(r,a),n);case 1:return r=t.type,a=t.pendingProps,Es(e,t,r,a=t.elementType===r?a:ns(r,a),n);case 3:e:{if(zs(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Li(e,t),Ui(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Ts(e,t,r,n,a=cs(Error(i(423)),t));break e}if(r!==a){t=Ts(e,t,r,n,a=cs(Error(i(424)),t));break e}for(ri=ca(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===a){t=qs(e,t,n);break e}vs(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ci(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,s=a.children,na(r,a)?s=null:null!==o&&na(r,o)&&(t.flags|=32),Cs(e,t),vs(e,t,s,n),t.child;case 6:return null===e&&ci(t),null;case 13:return Ls(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=vi(t,null,r,n):vs(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,ws(e,t,r,a=t.elementType===r?a:ns(r,a),n);case 7:return vs(e,t,t.pendingProps,n),t.child;case 8:case 12:return vs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,_a(ki,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===a.children&&!za.current){t=qs(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Di(-1,n&-n)).tag=2;var d=o.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),$i(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),$i(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}vs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zi(t,n),r=r(a=Ti(a)),t.flags|=1,vs(e,t,r,n),t.child;case 14:return a=ns(r=t.type,t.pendingProps),ks(e,t,r,a=ns(r.type,a),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ns(r,a),Ws(e,t),t.tag=1,Aa(r)?(e=!0,Na(t)):e=!1,zi(t,n),os(t,r,a),ls(t,r,a,n),$s(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return js(e,t,n)}throw Error(i(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Vc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var s=a;a=function(){var e=qc(o);s.call(e)}}Wc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=qc(o);i.call(e)}}var o=Uc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[ha]=o.current,Ur(8===e.nodeType?e.parentNode:e),dc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var s=r;r=function(){var e=qc(l);s.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[ha]=l.current,Ur(8===e.nodeType?e.parentNode:e),dc(function(){Wc(t,l,n,r)}),l}(n,t,e,a,r);return qc(o)}Gc.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wc(e,t,null,null)},Gc.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc(function(){Wc(null,e,null,null)}),t[ha]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&0!==t&&t<It[n].priority;n++);It.splice(n,0,e),0===n&&Lt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Xe()),0===(6&$l)&&(Ul=Xe()+500,Ua()))}break;case 13:dc(function(){var t=Oi(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Hc(e,1)}},kt=function(e){if(13===e.tag){var t=Oi(e,134217728);if(null!==t)nc(t,e,134217728,ec());Hc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Oi(e,t);if(null!==n)nc(n,e,t,ec());Hc(e,t)}},jt=function(){return yt},Ct=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));Y(r),J(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},$e=cc,ze=dc;var ed={usingClientEntryPoint:!1,Events:[ya,va,wa,_e,Ee,cc]},td={findFiberByHostInstance:ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:v.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ke(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{at=rd.inject(nd),it=rd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(i(299));var n=!1,r="",a=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Vc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ke(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",s=Yc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,a,0,o,s),e[ha]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(i(40));return!!e._reactRootContainer&&(dc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[ha]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,n)=>{"use strict";e.exports=n(983)},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,x=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,v=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case d:case u:case i:case s:case o:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case x:case g:case l:return e;default:return t}}case a:return t}}}function k(e){return w(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=x,t.Memo=g,t.Portal=a,t.Profiler=s,t.StrictMode=o,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||w(e)===d},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===x},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===u||e===s||e===o||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===g||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===m)},t.typeOf=w}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>gi,hasStandardBrowserEnv:()=>mi,hasStandardBrowserWebWorkerEnv:()=>bi,navigator:()=>xi,origin:()=>yi});var t=n(43),r=n.t(t,2),a=n(391),i=n(528),o=n(324),s=n.n(o);const l=function(e){function t(e,r,l,c,p){for(var f,h,g,x,v,k=0,S=0,j=0,C=0,_=0,A=0,O=g=f=0,N=0,L=0,D=0,M=0,F=l.length,B=F-1,U="",W="",q="",K="";N<F;){if(h=l.charCodeAt(N),N===B&&0!==S+C+j+k&&(0!==S&&(h=47===S?10:47),C=j=k=0,F++,B++),0===S+C+j+k){if(N===B&&(0<L&&(U=U.replace(u,"")),0<U.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:U+=l.charAt(N)}h=59}switch(h){case 123:for(f=(U=U.trim()).charCodeAt(0),g=1,M=++N;N<F;){switch(h=l.charCodeAt(N)){case 123:g++;break;case 125:g--;break;case 47:switch(h=l.charCodeAt(N+1)){case 42:case 47:e:{for(O=N+1;O<B;++O)switch(l.charCodeAt(O)){case 47:if(42===h&&42===l.charCodeAt(O-1)&&N+2!==O){N=O+1;break e}break;case 10:if(47===h){N=O+1;break e}}N=O}}break;case 91:h++;case 40:h++;case 34:case 39:for(;N++<B&&l.charCodeAt(N)!==h;);}if(0===g)break;N++}if(g=l.substring(M,N),0===f&&(f=(U=U.replace(d,"").trim()).charCodeAt(0)),64===f){switch(0<L&&(U=U.replace(u,"")),h=U.charCodeAt(1)){case 100:case 109:case 115:case 45:L=r;break;default:L=P}if(M=(g=t(r,L,g,h,p+1)).length,0<I&&(v=s(3,g,L=n(P,U,D),r,$,E,M,h,p,c),U=L.join(""),void 0!==v&&0===(M=(g=v.trim()).length)&&(h=0,g="")),0<M)switch(h){case 115:U=U.replace(w,o);case 100:case 109:case 45:g=U+"{"+g+"}";break;case 107:g=(U=U.replace(m,"$1 $2"))+"{"+g+"}",g=1===T||2===T&&i("@"+g,3)?"@-webkit-"+g+"@"+g:"@"+g;break;default:g=U+g,112===c&&(W+=g,g="")}else g=""}else g=t(r,n(r,U,D),g,c,p+1);q+=g,g=D=L=O=f=0,U="",h=l.charCodeAt(++N);break;case 125:case 59:if(1<(M=(U=(0<L?U.replace(u,""):U).trim()).length))switch(0===O&&(f=U.charCodeAt(0),45===f||96<f&&123>f)&&(M=(U=U.replace(" ",":")).length),0<I&&void 0!==(v=s(1,U,r,e,$,E,W.length,c,p,c))&&0===(M=(U=v.trim()).length)&&(U="\0\0"),f=U.charCodeAt(0),h=U.charCodeAt(1),f){case 0:break;case 64:if(105===h||99===h){K+=U+l.charAt(N);break}default:58!==U.charCodeAt(M-1)&&(W+=a(U,f,h,U.charCodeAt(2)))}D=L=O=f=0,U="",h=l.charCodeAt(++N)}}switch(h){case 13:case 10:47===S?S=0:0===1+f&&107!==c&&0<U.length&&(L=1,U+="\0"),0<I*R&&s(0,U,r,e,$,E,W.length,c,p,c),E=1,$++;break;case 59:case 125:if(0===S+C+j+k){E++;break}default:switch(E++,x=l.charAt(N),h){case 9:case 32:if(0===C+k+S)switch(_){case 44:case 58:case 9:case 32:x="";break;default:32!==h&&(x=" ")}break;case 0:x="\\0";break;case 12:x="\\f";break;case 11:x="\\v";break;case 38:0===C+S+k&&(L=D=1,x="\f"+x);break;case 108:if(0===C+S+k+z&&0<O)switch(N-O){case 2:112===_&&58===l.charCodeAt(N-3)&&(z=_);case 8:111===A&&(z=A)}break;case 58:0===C+S+k&&(O=N);break;case 44:0===S+j+C+k&&(L=1,x+="\r");break;case 34:case 39:0===S&&(C=C===h?0:0===C?h:C);break;case 91:0===C+S+j&&k++;break;case 93:0===C+S+j&&k--;break;case 41:0===C+S+k&&j--;break;case 40:if(0===C+S+k){if(0===f)if(2*_+3*A===533);else f=1;j++}break;case 64:0===S+j+C+k+O+g&&(g=1);break;case 42:case 47:if(!(0<C+k+j))switch(S){case 0:switch(2*h+3*l.charCodeAt(N+1)){case 235:S=47;break;case 220:M=N,S=42}break;case 42:47===h&&42===_&&M+2!==N&&(33===l.charCodeAt(M+2)&&(W+=l.substring(M,N+1)),x="",S=0)}}0===S&&(U+=x)}A=_,_=h,N++}if(0<(M=W.length)){if(L=r,0<I&&(void 0!==(v=s(2,W,L,e,$,E,M,c,p,c))&&0===(W=v).length))return K+W+q;if(W=L.join(",")+"{"+W+"}",0!==T*z){switch(2!==T||i(W,2)||(z=0),z){case 111:W=W.replace(y,":-moz-$1")+W;break;case 112:W=W.replace(b,"::-webkit-input-$1")+W.replace(b,"::-moz-$1")+W.replace(b,":-ms-input-$1")+W}z=0}}return K+W+q}function n(e,t,n){var a=t.trim().split(g);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<i;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",a[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(x,"$1"+e.trim());case 58:return e.trim()+t.replace(x,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(x,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===T||2===T&&i(l,1)?"-webkit-"+l+l:l}if(0===T||2===T&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(_,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return f.test(o)?o.replace(p,":-webkit-")+o.replace(p,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(v,"tb");break;case 232:l=o.replace(v,"tb-rl");break;case 220:l=o.replace(v,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),O(2!==t?r:r.replace(j,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,a,i,o,s,l,d){for(var u,p=0,f=t;p<I;++p)switch(u=A[p].call(c,e,f,n,r,a,i,o,s,l,d)){case void 0:case!1:case!0:case null:break;default:f=u}if(f!==t)return f}function l(e){return void 0!==(e=e.prefix)&&(O=null,e?"function"!==typeof e?T=1:(T=2,O=e):T=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<I){var a=s(-1,n,r,r,$,E,0,0,0,0);void 0!==a&&"string"===typeof a&&(n=a)}var i=t(P,r,n,0,0);return 0<I&&(void 0!==(a=s(-2,i,r,r,$,E,i.length,0,0,0))&&(i=a)),z=0,E=$=1,i}var d=/^\0+/g,u=/[\0\r\f]/g,p=/: */g,f=/zoo|gra/,h=/([,: ])(transform)/g,g=/,\r+?/g,x=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,y=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,S=/-self|flex-/g,j=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,_=/([^-])(image-set\()/,E=1,$=1,z=0,T=1,P=[],A=[],I=0,O=null,R=0;return c.use=function e(t){switch(t){case void 0:case null:I=A.length=0;break;default:if("function"===typeof t)A[I++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else R=0|!!t}return e},c.set=l,void 0!==e&&l(e),c};const c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function d(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,p=d(function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),f=n(219),h=n.n(f);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var x=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,i.QP)(e)},b=Object.freeze([]),y=Object.freeze({});function v(e){return"function"==typeof e}function w(e){return e.displayName||e.name||"Component"}function k(e){return e&&"string"==typeof e.styledComponentId}var S="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.SC_ATTR)||"data-styled",j="undefined"!=typeof window&&"HTMLElement"in window,C=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.SC_DISABLE_SPEEDY))),_={};function E(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var $=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&E(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),z=new Map,T=new Map,P=1,A=function(e){if(z.has(e))return z.get(e);for(;T.has(P);)P++;var t=P++;return z.set(e,t),T.set(t,e),t},I=function(e){return T.get(e)},O=function(e,t){t>=P&&(P=t+1),z.set(e,t),T.set(t,e)},R="style["+S+'][data-styled-version="5.3.11"]',N=new RegExp("^"+S+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),L=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},D=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var s=o.match(N);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(O(c,l),L(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},M=function(){return n.nc},F=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(S))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(S,"active"),r.setAttribute("data-styled-version","5.3.11");var o=M();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},B=function(){function e(e){var t=this.element=F(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}E(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),U=function(){function e(e){var t=this.element=F(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),q=j,K={isServer:!j,useCSSOMInjection:!C},H=function(){function e(e,t,n){void 0===e&&(e=y),void 0===t&&(t={}),this.options=g({},K,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&j&&q&&(q=!1,function(e){for(var t=document.querySelectorAll(R),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(S)&&(D(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return A(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(g({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new W(a):r?new B(a):new U(a),new $(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(A(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(A(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(A(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=I(a);if(void 0!==i){var o=e.names.get(i),s=t.getGroup(a);if(o&&s&&o.size){var l=S+".g"+a+'[id="'+i+'"]',c="";void 0!==o&&o.forEach(function(e){e.length>0&&(c+=e+",")}),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),Y=/(a)(d)/gi,V=function(e){return String.fromCharCode(e+(e>25?39:97))};function G(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=V(t%52)+n;return(V(t%52)+n).replace(Y,"$1-$2")}var Q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},X=function(e){return Q(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(v(n)&&!k(n))return!1}return!0}var Z=X("5.3.11"),ee=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&J(e),this.componentId=t,this.baseHash=Q(Z,t),this.baseStyle=n,H.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=be(this.rules,e,t,n).join(""),o=G(Q(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var s=n(i,"."+o,void 0,r);t.insertRules(r,o,s)}a.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=Q(this.baseHash,n.hash),d="",u=0;u<l;u++){var p=this.rules[u];if("string"==typeof p)d+=p;else if(p){var f=be(p,e,t,n),h=Array.isArray(f)?f.join(""):f;c=Q(c,h+u),d+=h}}if(d){var g=G(c>>>0);if(!t.hasNameForId(r,g)){var x=n(d,"."+g,void 0,r);t.insertRules(r,g,x)}a.push(g)}}return a.join(" ")},e}(),te=/^\s*\/\/.*$/gm,ne=[":","[",".","#"];function re(e){var t,n,r,a,i=void 0===e?y:e,o=i.options,s=void 0===o?y:o,c=i.plugins,d=void 0===c?b:c,u=new l(s),p=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,i,o,s,l,c,d,u){switch(n){case 1:if(0===d&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(a[0]+r),"";default:return r+(0===u?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}(function(e){p.push(e)}),h=function(e,r,i){return 0===r&&-1!==ne.indexOf(i[n.length])||i.match(a)?e:"."+t};function g(e,i,o,s){void 0===s&&(s="&");var l=e.replace(te,""),c=i&&o?o+" "+i+" { "+l+" }":l;return t=s,n=i,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),u(o||!i?"":i,c)}return u.use([].concat(d,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,h))},f,function(e){if(-2===e){var t=p;return p=[],t}}])),g.hash=d.length?d.reduce(function(e,t){return t.name||E(15),Q(e,t.name)},5381).toString():"",g}var ae=t.createContext(),ie=(ae.Consumer,t.createContext()),oe=(ie.Consumer,new H),se=re();function le(){return(0,t.useContext)(ae)||oe}function ce(){return(0,t.useContext)(ie)||se}function de(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],i=le(),o=(0,t.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,t.useMemo)(function(){return re({options:{prefix:!e.disableVendorPrefixes},plugins:r})},[e.disableVendorPrefixes,r]);return(0,t.useEffect)(function(){s()(r,e.stylisPlugins)||a(e.stylisPlugins)},[e.stylisPlugins]),t.createElement(ae.Provider,{value:o},t.createElement(ie.Provider,{value:l},e.children))}var ue=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=se);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return E(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=se),this.name+e.hash},e}(),pe=/([A-Z])/,fe=/([A-Z])/g,he=/^ms-/,ge=function(e){return"-"+e.toLowerCase()};function xe(e){return pe.test(e)?e.replace(fe,ge).replace(he,"-ms-"):e}var me=function(e){return null==e||!1===e||""===e};function be(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=be(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return me(e)?"":k(e)?"."+e.styledComponentId:v(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:be(e(t),t,n,r):e instanceof ue?n?(e.inject(n,r),e.getName(r)):e:m(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!me(t[o])&&(Array.isArray(t[o])&&t[o].isCss||v(t[o])?i.push(xe(o)+":",t[o],";"):m(t[o])?i.push.apply(i,e(t[o],o)):i.push(xe(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in c||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var l}var ye=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return v(e)||m(e)?ye(be(x(b,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ye(be(x(e,n)))}new Set;var we=function(e,t,n){return void 0===n&&(n=y),e.theme!==n.theme&&e.theme||t||n.theme},ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Se=/(^-|-$)/g;function je(e){return e.replace(ke,"-").replace(Se,"")}var Ce=function(e){return G(X(e)>>>0)};function _e(e){return"string"==typeof e&&!0}var Ee=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},$e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ee(t)&&Ee(r)?Te(r,t):e[n]=t}function Te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Ee(o))for(var s in o)$e(s)&&ze(e,o[s],s)}return e}var Pe=t.createContext();Pe.Consumer;var Ae={};function Ie(e,n,r){var a=k(e),i=!_e(e),o=n.attrs,s=void 0===o?b:o,l=n.componentId,c=void 0===l?function(e,t){var n="string"!=typeof e?"sc":je(e);Ae[n]=(Ae[n]||0)+1;var r=n+"-"+Ce("5.3.11"+n+Ae[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):l,d=n.displayName,u=void 0===d?function(e){return _e(e)?"styled."+e:"Styled("+w(e)+")"}(e):d,f=n.displayName&&n.componentId?je(n.displayName)+"-"+n.componentId:n.componentId||c,x=a&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,m=n.shouldForwardProp;a&&e.shouldForwardProp&&(m=n.shouldForwardProp?function(t,r,a){return e.shouldForwardProp(t,r,a)&&n.shouldForwardProp(t,r,a)}:e.shouldForwardProp);var S,j=new ee(r,f,a?e.componentStyle:void 0),C=j.isStatic&&0===s.length,_=function(e,n){return function(e,n,r,a){var i=e.attrs,o=e.componentStyle,s=e.defaultProps,l=e.foldedComponentIds,c=e.shouldForwardProp,d=e.styledComponentId,u=e.target,f=function(e,t,n){void 0===e&&(e=y);var r=g({},t,{theme:e}),a={};return n.forEach(function(e){var t,n,i,o=e;for(t in v(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]}),[r,a]}(we(n,(0,t.useContext)(Pe),s)||y,n,i),h=f[0],x=f[1],m=function(e,t,n){var r=le(),a=ce();return t?e.generateAndInjectStyles(y,r,a):e.generateAndInjectStyles(n,r,a)}(o,a,h),b=r,w=x.$as||n.$as||x.as||n.as||u,k=_e(w),S=x!==n?g({},n,{},x):n,j={};for(var C in S)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?j.as=S[C]:(c?c(C,p,w):!k||p(C))&&(j[C]=S[C]));return n.style&&x.style!==n.style&&(j.style=g({},n.style,{},x.style)),j.className=Array.prototype.concat(l,d,m!==d?m:null,n.className,x.className).filter(Boolean).join(" "),j.ref=b,(0,t.createElement)(w,j)}(S,e,n,C)};return _.displayName=u,(S=t.forwardRef(_)).attrs=x,S.componentStyle=j,S.displayName=u,S.shouldForwardProp=m,S.foldedComponentIds=a?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):b,S.styledComponentId=f,S.target=a?e.target:e,S.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(_e(e)?e:je(w(e)));return Ie(e,g({},a,{attrs:x,componentId:i}),r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=a?Te({},e.defaultProps,t):t}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),i&&h()(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Oe=function(e){return function e(t,n,r){if(void 0===r&&(r=y),!(0,i.Hy)(n))return E(1,String(n));var a=function(){return t(n,r,ve.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,g({},r,{},a))},a.attrs=function(a){return e(t,n,g({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}(Ie,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Oe[e]=Oe(e)});var Re=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),H.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var a=r(be(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&H.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ne(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ve.apply(void 0,[e].concat(n)).join(""),i=Ce(a);return new ue(i,a)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=M();return"<style "+[n&&'nonce="'+n+'"',S+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?E(2):e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)return E(2);var r=((n={})[S]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),a=M();return a&&(r.nonce=a),[t.createElement("style",g({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new H({isServer:!0}),this.sealed=!1}var n=e.prototype;n.collectStyles=function(e){return this.sealed?E(2):t.createElement(de,{sheet:this.instance},e)},n.interleaveWithNodeStream=function(e){return E(3)}}();const Le=Oe;var De,Me=n(950),Fe=n.t(Me,2);function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(De||(De={}));const Ue="popstate";function We(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function qe(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(fr){}}}function Ke(e,t){return{usr:e.state,key:e.key,idx:t}}function He(e,t,n,r){return void 0===n&&(n=null),Be({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Ve(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Ye(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Ve(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ge(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=De.Pop,l=null,c=d();function d(){return(o.state||{idx:null}).idx}function u(){s=De.Pop;let e=d(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function p(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:Ye(e);return n=n.replace(/ $/,"%20"),We(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,o.replaceState(Be({},o.state,{idx:c}),""));let f={get action(){return s},get location(){return e(a,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Ue,u),l=e,()=>{a.removeEventListener(Ue,u),l=null}},createHref:e=>t(a,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=De.Push;let r=He(f.location,e,t);n&&n(r,e),c=d()+1;let u=Ke(r,c),p=f.createHref(r);try{o.pushState(u,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;a.location.assign(p)}i&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=De.Replace;let r=He(f.location,e,t);n&&n(r,e),c=d();let a=Ke(r,c),u=f.createHref(r);o.replaceState(a,"",u),i&&l&&l({action:s,location:f.location,delta:0})},go:e=>o.go(e)};return f}var Qe;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Qe||(Qe={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function Xe(e,t,n){return void 0===n&&(n="/"),Je(e,t,n,!1)}function Je(e,t,n,r){let a=pt(("string"===typeof t?Ve(t):t).pathname||"/",n);if(null==a)return null;let i=Ze(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let s=0;null==o&&s<i.length;++s){let e=ut(a);o=ct(i[s],e,r)}return o}function Ze(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(We(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=mt([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(We(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),Ze(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:lt(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of et(e.path))a(e,t,r);else a(e,t)}),t}function et(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=et(r.join("/")),s=[];return s.push(...o.map(e=>""===e?i:[i,e].join("/"))),a&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const tt=/^:[\w-]+$/,nt=3,rt=2,at=1,it=10,ot=-2,st=e=>"*"===e;function lt(e,t){let n=e.split("/"),r=n.length;return n.some(st)&&(r+=ot),t&&(r+=rt),n.filter(e=>!st(e)).reduce((e,t)=>e+(tt.test(t)?nt:""===t?at:it),r)}function ct(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",d=dt({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&n&&!r[r.length-1].route.index&&(d=dt({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(a,d.params),o.push({params:a,pathname:mt([i,d.pathname]),pathnameBase:bt(mt([i,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(i=mt([i,d.pathnameBase]))}return o}function dt(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);qe("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=s[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=a&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function ut(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return qe(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function pt(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function ft(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function ht(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function gt(e,t){let n=ht(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function xt(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=Ve(e):(a=Be({},e),We(!a.pathname||!a.pathname.includes("?"),ft("?","pathname","search",a)),We(!a.pathname||!a.pathname.includes("#"),ft("#","pathname","hash",a)),We(!a.search||!a.search.includes("#"),ft("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?Ve(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:yt(r),hash:vt(a)}}(a,i),c=s&&"/"!==s&&s.endsWith("/"),d=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!d||(l.pathname+="/"),l}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),bt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yt=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",vt=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function wt(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const kt=["post","put","patch","delete"],St=(new Set(kt),["get",...kt]);new Set(St),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function jt(){return jt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jt.apply(this,arguments)}const Ct=t.createContext(null);const _t=t.createContext(null);const Et=t.createContext(null);const $t=t.createContext(null);const zt=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Tt=t.createContext(null);function Pt(){return null!=t.useContext($t)}function At(){return Pt()||We(!1),t.useContext($t).location}function It(e){t.useContext(Et).static||t.useLayoutEffect(e)}function Ot(){let{isDataRoute:e}=t.useContext(zt);return e?function(){let{router:e}=Wt(Bt.UseNavigateStable),n=Kt(Ut.UseNavigateStable),r=t.useRef(!1);return It(()=>{r.current=!0}),t.useCallback(function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,jt({fromRouteId:n},a)))},[e,n])}():function(){Pt()||We(!1);let e=t.useContext(Ct),{basename:n,future:r,navigator:a}=t.useContext(Et),{matches:i}=t.useContext(zt),{pathname:o}=At(),s=JSON.stringify(gt(i,r.v7_relativeSplatPath)),l=t.useRef(!1);return It(()=>{l.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void a.go(t);let i=xt(t,JSON.parse(s),o,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:mt([n,i.pathname])),(r.replace?a.replace:a.push)(i,r.state,r)},[n,a,s,o,e])}()}function Rt(e,n,r,a){Pt()||We(!1);let{navigator:i}=t.useContext(Et),{matches:o}=t.useContext(zt),s=o[o.length-1],l=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let d,u=At();if(n){var p;let e="string"===typeof n?Ve(n):n;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||We(!1),d=e}else d=u;let f=d.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=Xe(e,{pathname:h});let x=Ft(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:mt([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:mt([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,r,a);return n&&x?t.createElement($t.Provider,{value:{location:jt({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:De.Pop}},x):x}function Nt(){let e=function(){var e;let n=t.useContext(Tt),r=qt(Ut.UseRouteError),a=Kt(Ut.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=wt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const Lt=t.createElement(Nt,null);class Dt extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(zt.Provider,{value:this.props.routeContext},t.createElement(Tt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mt(e){let{routeContext:n,match:r,children:a}=e,i=t.useContext(Ct);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(zt.Provider,{value:n},a)}function Ft(e,n,r,a){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=a)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,l=null==(i=r)?void 0:i.errors;if(null!=l){let e=s.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]));e>=0||We(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,a,i)=>{let o,u=!1,p=null,f=null;var h;r&&(o=l&&a.route.id?l[a.route.id]:void 0,p=a.route.errorElement||Lt,c&&(d<0&&0===i?(h="route-fallback",!1||Ht[h]||(Ht[h]=!0),u=!0,f=null):d===i&&(u=!0,f=a.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,i+1)),x=()=>{let n;return n=o?p:u?f:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(Mt,{match:a,routeContext:{outlet:e,matches:g,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?t.createElement(Dt,{location:r.location,revalidation:r.revalidation,component:p,error:o,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var Bt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bt||{}),Ut=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ut||{});function Wt(e){let n=t.useContext(Ct);return n||We(!1),n}function qt(e){let n=t.useContext(_t);return n||We(!1),n}function Kt(e){let n=function(){let e=t.useContext(zt);return e||We(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||We(!1),r.route.id}const Ht={};function Yt(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function Vt(e){let{to:n,replace:r,state:a,relative:i}=e;Pt()||We(!1);let{future:o,static:s}=t.useContext(Et),{matches:l}=t.useContext(zt),{pathname:c}=At(),d=Ot(),u=xt(n,gt(l,o.v7_relativeSplatPath),c,"path"===i),p=JSON.stringify(u);return t.useEffect(()=>d(JSON.parse(p),{replace:r,state:a,relative:i}),[d,p,i,r,a]),null}function Gt(e){We(!1)}function Qt(e){let{basename:n="/",children:r=null,location:a,navigationType:i=De.Pop,navigator:o,static:s=!1,future:l}=e;Pt()&&We(!1);let c=n.replace(/^\/*/,"/"),d=t.useMemo(()=>({basename:c,navigator:o,static:s,future:jt({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);"string"===typeof a&&(a=Ve(a));let{pathname:u="/",search:p="",hash:f="",state:h=null,key:g="default"}=a,x=t.useMemo(()=>{let e=pt(u,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:g},navigationType:i}},[c,u,p,f,h,g,i]);return null==x?null:t.createElement(Et.Provider,{value:d},t.createElement($t.Provider,{children:r,value:x}))}function Xt(e){let{children:t,location:n}=e;return Rt(Jt(t),n)}new Promise(()=>{});t.Component;function Jt(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,a)=>{if(!t.isValidElement(e))return;let i=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,Jt(e.props.children,i));e.type!==Gt&&We(!1),e.props.index&&e.props.children&&We(!1);let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Jt(e.props.children,i)),r.push(o)}),r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(fr){}new Map;const Zt=r.startTransition;Fe.flushSync,r.useId;function en(e){let{basename:n,children:r,future:a,window:i}=e,o=t.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:i,v5Compat:!0})&&(s={}),Ge(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return He("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:Ye(t)},null,s)));let l=o.current,[c,d]=t.useState({action:l.action,location:l.location}),{v7_startTransition:u}=a||{},p=t.useCallback(e=>{u&&Zt?Zt(()=>d(e)):d(e)},[d,u]);return t.useLayoutEffect(()=>l.listen(p),[l,p]),t.useEffect(()=>Yt(a),[a]),t.createElement(Qt,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:a})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var tn,nn;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(tn||(tn={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(nn||(nn={}));var rn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},an=t.createContext&&t.createContext(rn),on=function(){return on=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},on.apply(this,arguments)},sn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function ln(e){return e&&e.map(function(e,n){return t.createElement(e.tag,on({key:n},e.attr),ln(e.child))})}function cn(e){return function(n){return t.createElement(dn,on({attr:on({},e.attr)},n),ln(e.child))}}function dn(e){var n=function(n){var r,a=e.attr,i=e.size,o=e.title,s=sn(e,["attr","size","title"]),l=i||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",on({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,s,{className:r,style:on(on({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==an?t.createElement(an.Consumer,null,function(e){return n(e)}):n(rn)}function un(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"}}]})(e)}function pn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}function fn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"}}]})(e)}function hn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"17",y1:"10",x2:"3",y2:"10"}},{tag:"line",attr:{x1:"21",y1:"6",x2:"3",y2:"6"}},{tag:"line",attr:{x1:"21",y1:"14",x2:"3",y2:"14"}},{tag:"line",attr:{x1:"17",y1:"18",x2:"3",y2:"18"}}]})(e)}function gn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function xn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"}}]})(e)}function mn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"10"}},{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"16"}}]})(e)}function bn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"}}]})(e)}function yn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}}]})(e)}function vn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(e)}function wn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function kn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function Sn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function jn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function Cn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function _n(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function En(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function $n(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function zn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}}]})(e)}function Tn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"}},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"}},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"}},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"}},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"}},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"}},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"}}]})(e)}function Pn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"}},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(e)}function An(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(e)}function In(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(e)}function On(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function Rn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"}}]})(e)}function Nn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function Ln(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(e)}function Dn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)}function Mn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 18v-6a9 9 0 0 1 18 0v6"}},{tag:"path",attr:{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"}}]})(e)}function Fn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(e)}function Bn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"}}]})(e)}function Un(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(e)}function Wn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(e)}function qn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function Kn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function Hn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Yn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}}]})(e)}function Vn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(e)}function Gn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"}}]})(e)}function Qn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function Xn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function Jn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"}},{tag:"polyline",attr:{points:"1 20 1 14 7 14"}},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(e)}function Zn(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"}},{tag:"polyline",attr:{points:"7 3 7 8 15 8"}}]})(e)}function er(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function tr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function nr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"}},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"}}]})(e)}function rr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function ar(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function ir(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}}]})(e)}function or(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function sr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(e)}function lr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 9.9-1"}}]})(e)}function cr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function dr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function ur(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}function pr(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}let fr={data:""},hr=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||fr,gr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xr=/\/\*[^]*?\*\/|  +/g,mr=/\n+/g,br=(e,t)=>{let n="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?n=i+" "+o+";":r+="f"==i[1]?br(o,i):i+"{"+br(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=br(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=br.p?br.p(i,o):i+":"+o+";")}return n+(t&&a?t+"{"+a+"}":a)+r},yr={},vr=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+vr(e[n]);return t}return e},wr=(e,t,n,r,a)=>{let i=vr(e),o=yr[i]||(yr[i]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(i));if(!yr[o]){let t=i!==e?e:(e=>{let t,n,r=[{}];for(;t=gr.exec(e.replace(xr,""));)t[4]?r.shift():t[3]?(n=t[3].replace(mr," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(mr," ").trim();return r[0]})(e);yr[o]=br(a?{["@keyframes "+o]:t}:t,n?"":"."+o)}let s=n&&yr.g?yr.g:null;return n&&(yr.g=yr[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(yr[o],t,r,s),o};function kr(e){let t=this||{},n=e.call?e(t.p):e;return wr(n.unshift?n.raw?((e,t,n)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":br(e,""):!1===e?"":e}return e+r+(null==i?"":i)},""))(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,hr(t.target),t.g,t.o,t.k)}kr.bind({g:1});let Sr,jr,Cr,_r=kr.bind({k:1});function Er(e,t){let n=this||{};return function(){let r=arguments;function a(i,o){let s=Object.assign({},i),l=s.className||a.className;n.p=Object.assign({theme:jr&&jr()},s),n.o=/ *go\d+/.test(l),s.className=kr.apply(n,r)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),Cr&&c[0]&&Cr(s),Sr(c,s)}return t?t(a):a}}var $r=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,zr=(()=>{let e=0;return()=>(++e).toString()})(),Tr=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Pr=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:n}=t;return Pr(e,{type:e.toasts.find(e=>e.id===n.id)?1:0,toast:n});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},Ar=[],Ir={toasts:[],pausedAt:void 0},Or=e=>{Ir=Pr(Ir,e),Ar.forEach(e=>{e(Ir)})},Rr={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Nr=e=>(t,n)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||zr()}}(t,e,n);return Or({type:2,toast:r}),r.id},Lr=(e,t)=>Nr("blank")(e,t);Lr.error=Nr("error"),Lr.success=Nr("success"),Lr.loading=Nr("loading"),Lr.custom=Nr("custom"),Lr.dismiss=e=>{Or({type:3,toastId:e})},Lr.remove=e=>Or({type:4,toastId:e}),Lr.promise=(e,t,n)=>{let r=Lr.loading(t.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?$r(t.success,e):void 0;return a?Lr.success(a,{id:r,...n,...null==n?void 0:n.success}):Lr.dismiss(r),e}).catch(e=>{let a=t.error?$r(t.error,e):void 0;a?Lr.error(a,{id:r,...n,...null==n?void 0:n.error}):Lr.dismiss(r)}),e};var Dr=(e,t)=>{Or({type:1,toast:{id:e,height:t}})},Mr=()=>{Or({type:5,time:Date.now()})},Fr=new Map,Br=e=>{let{toasts:n,pausedAt:r}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[n,r]=(0,t.useState)(Ir),a=(0,t.useRef)(Ir);(0,t.useEffect)(()=>(a.current!==Ir&&r(Ir),Ar.push(r),()=>{let e=Ar.indexOf(r);e>-1&&Ar.splice(e,1)}),[]);let i=n.toasts.map(t=>{var n,r,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(n=e[t.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||Rr[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...n,toasts:i}}(e);(0,t.useEffect)(()=>{if(r)return;let e=Date.now(),t=n.map(t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout(()=>Lr.dismiss(t.id),n);t.visible&&Lr.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[n,r]);let a=(0,t.useCallback)(()=>{r&&Or({type:6,time:Date.now()})},[r]),i=(0,t.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=t||{},o=n.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[n]);return(0,t.useEffect)(()=>{n.forEach(e=>{if(e.dismissed)!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(Fr.has(e))return;let n=setTimeout(()=>{Fr.delete(e),Or({type:4,toastId:e})},t);Fr.set(e,n)}(e.id,e.removeDelay);else{let t=Fr.get(e.id);t&&(clearTimeout(t),Fr.delete(e.id))}})},[n]),{toasts:n,handlers:{updateHeight:Dr,startPause:Mr,endPause:a,calculateOffset:i}}},Ur=_r`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Wr=_r`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qr=_r`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Kr=Er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ur} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Wr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${qr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Hr=_r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Yr=Er("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Hr} 1s linear infinite;
`,Vr=_r`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Gr=_r`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Qr=Er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Vr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Gr} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Xr=Er("div")`
  position: absolute;
`,Jr=Er("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Zr=_r`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ea=Er("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Zr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ta=e=>{let{toast:n}=e,{icon:r,type:a,iconTheme:i}=n;return void 0!==r?"string"==typeof r?t.createElement(ea,null,r):r:"blank"===a?null:t.createElement(Jr,null,t.createElement(Yr,{...i}),"loading"!==a&&t.createElement(Xr,null,"error"===a?t.createElement(Kr,{...i}):t.createElement(Qr,{...i})))},na=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,ra=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,aa=Er("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ia=Er("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,oa=t.memo(e=>{let{toast:n,position:r,style:a,children:i}=e,o=n.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,a]=Tr()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[na(n),ra(n)];return{animation:t?`${_r(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_r(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(n.position||r||"top-center",n.visible):{opacity:0},s=t.createElement(ta,{toast:n}),l=t.createElement(ia,{...n.ariaProps},$r(n.message,n));return t.createElement(aa,{className:n.className,style:{...o,...a,...n.style}},"function"==typeof i?i({icon:s,message:l}):t.createElement(t.Fragment,null,s,l))});!function(e,t,n,r){br.p=t,Sr=e,jr=n,Cr=r}(t.createElement);var sa=e=>{let{id:n,className:r,style:a,onHeightUpdate:i,children:o}=e,s=t.useCallback(e=>{if(e){let t=()=>{let t=e.getBoundingClientRect().height;i(n,t)};t(),new MutationObserver(t).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[n,i]);return t.createElement("div",{ref:s,className:r,style:a},o)},la=kr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ca=e=>{let{reverseOrder:n,position:r="top-center",toastOptions:a,gutter:i,children:o,containerStyle:s,containerClassName:l}=e,{toasts:c,handlers:d}=Br(a);return t.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(e=>{let a=e.position||r,s=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Tr()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...a}})(a,d.calculateOffset(e,{reverseOrder:n,gutter:i,defaultPosition:r}));return t.createElement(sa,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?la:"",style:s},"custom"===e.type?$r(e.message,e):o?o(e):t.createElement(oa,{toast:e,position:a}))}))},da=Lr;function ua(e,t){return function(){return e.apply(t,arguments)}}const{toString:pa}=Object.prototype,{getPrototypeOf:fa}=Object,{iterator:ha,toStringTag:ga}=Symbol,xa=(ma=Object.create(null),e=>{const t=pa.call(e);return ma[t]||(ma[t]=t.slice(8,-1).toLowerCase())});var ma;const ba=e=>(e=e.toLowerCase(),t=>xa(t)===e),ya=e=>t=>typeof t===e,{isArray:va}=Array,wa=ya("undefined");const ka=ba("ArrayBuffer");const Sa=ya("string"),ja=ya("function"),Ca=ya("number"),_a=e=>null!==e&&"object"===typeof e,Ea=e=>{if("object"!==xa(e))return!1;const t=fa(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(ga in e)&&!(ha in e)},$a=ba("Date"),za=ba("File"),Ta=ba("Blob"),Pa=ba("FileList"),Aa=ba("URLSearchParams"),[Ia,Oa,Ra,Na]=["ReadableStream","Request","Response","Headers"].map(ba);function La(e,t){let n,r,{allOwnKeys:a=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),va(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=a?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let o;for(n=0;n<i;n++)o=r[n],t.call(null,e[o],o,e)}}function Da(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,a=n.length;for(;a-- >0;)if(r=n[a],t===r.toLowerCase())return r;return null}const Ma="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Fa=e=>!wa(e)&&e!==Ma;const Ba=(Ua="undefined"!==typeof Uint8Array&&fa(Uint8Array),e=>Ua&&e instanceof Ua);var Ua;const Wa=ba("HTMLFormElement"),qa=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Ka=ba("RegExp"),Ha=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};La(n,(n,a)=>{let i;!1!==(i=t(n,a,e))&&(r[a]=i||n)}),Object.defineProperties(e,r)};const Ya=ba("AsyncFunction"),Va=((e,t)=>{return e?setImmediate:t?(n=`axios@${Math.random()}`,r=[],Ma.addEventListener("message",e=>{let{source:t,data:a}=e;t===Ma&&a===n&&r.length&&r.shift()()},!1),e=>{r.push(e),Ma.postMessage(n,"*")}):e=>setTimeout(e);var n,r})("function"===typeof setImmediate,ja(Ma.postMessage)),Ga="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Ma):"undefined"!==typeof process&&process.nextTick||Va,Qa={isArray:va,isArrayBuffer:ka,isBuffer:function(e){return null!==e&&!wa(e)&&null!==e.constructor&&!wa(e.constructor)&&ja(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||ja(e.append)&&("formdata"===(t=xa(e))||"object"===t&&ja(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ka(e.buffer),t},isString:Sa,isNumber:Ca,isBoolean:e=>!0===e||!1===e,isObject:_a,isPlainObject:Ea,isReadableStream:Ia,isRequest:Oa,isResponse:Ra,isHeaders:Na,isUndefined:wa,isDate:$a,isFile:za,isBlob:Ta,isRegExp:Ka,isFunction:ja,isStream:e=>_a(e)&&ja(e.pipe),isURLSearchParams:Aa,isTypedArray:Ba,isFileList:Pa,forEach:La,merge:function e(){const{caseless:t}=Fa(this)&&this||{},n={},r=(r,a)=>{const i=t&&Da(n,a)||a;Ea(n[i])&&Ea(r)?n[i]=e(n[i],r):Ea(r)?n[i]=e({},r):va(r)?n[i]=r.slice():n[i]=r};for(let a=0,i=arguments.length;a<i;a++)arguments[a]&&La(arguments[a],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return La(t,(t,r)=>{n&&ja(t)?e[r]=ua(t,n):e[r]=t},{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let a,i,o;const s={};if(t=t||{},null==e)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],r&&!r(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==n&&fa(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:xa,kindOfTest:ba,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(va(e))return e;let t=e.length;if(!Ca(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[ha]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Wa,hasOwnProperty:qa,hasOwnProp:qa,reduceDescriptors:Ha,freezeMethods:e=>{Ha(e,(t,n)=>{if(ja(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];ja(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return va(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Da,global:Ma,isContextDefined:Fa,isSpecCompliantForm:function(e){return!!(e&&ja(e.append)&&"FormData"===e[ga]&&e[ha])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(_a(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const a=va(e)?[]:{};return La(e,(e,t)=>{const i=n(e,r+1);!wa(i)&&(a[t]=i)}),t[r]=void 0,a}}return e};return n(e,0)},isAsyncFn:Ya,isThenable:e=>e&&(_a(e)||ja(e))&&ja(e.then)&&ja(e.catch),setImmediate:Va,asap:Ga,isIterable:e=>null!=e&&ja(e[ha])};function Xa(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a,this.status=a.status?a.status:null)}Qa.inherits(Xa,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Qa.toJSONObject(this.config),code:this.code,status:this.status}}});const Ja=Xa.prototype,Za={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Za[e]={value:e}}),Object.defineProperties(Xa,Za),Object.defineProperty(Ja,"isAxiosError",{value:!0}),Xa.from=(e,t,n,r,a,i)=>{const o=Object.create(Ja);return Qa.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),Xa.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const ei=Xa;function ti(e){return Qa.isPlainObject(e)||Qa.isArray(e)}function ni(e){return Qa.endsWith(e,"[]")?e.slice(0,-2):e}function ri(e,t,n){return e?e.concat(t).map(function(e,t){return e=ni(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}const ai=Qa.toFlatObject(Qa,{},null,function(e){return/^is[A-Z]/.test(e)});const ii=function(e,t,n){if(!Qa.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Qa.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Qa.isUndefined(t[e])})).metaTokens,a=n.visitor||c,i=n.dots,o=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Qa.isSpecCompliantForm(t);if(!Qa.isFunction(a))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Qa.isDate(e))return e.toISOString();if(Qa.isBoolean(e))return e.toString();if(!s&&Qa.isBlob(e))throw new ei("Blob is not supported. Use a Buffer instead.");return Qa.isArrayBuffer(e)||Qa.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,a){let s=e;if(e&&!a&&"object"===typeof e)if(Qa.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Qa.isArray(e)&&function(e){return Qa.isArray(e)&&!e.some(ti)}(e)||(Qa.isFileList(e)||Qa.endsWith(n,"[]"))&&(s=Qa.toArray(e)))return n=ni(n),s.forEach(function(e,r){!Qa.isUndefined(e)&&null!==e&&t.append(!0===o?ri([n],r,i):null===o?n:n+"[]",l(e))}),!1;return!!ti(e)||(t.append(ri(a,n,i),l(e)),!1)}const d=[],u=Object.assign(ai,{defaultVisitor:c,convertValue:l,isVisitable:ti});if(!Qa.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Qa.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),Qa.forEach(n,function(n,i){!0===(!(Qa.isUndefined(n)||null===n)&&a.call(t,n,Qa.isString(i)?i.trim():i,r,u))&&e(n,r?r.concat(i):[i])}),d.pop()}}(e),t};function oi(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function si(e,t){this._pairs=[],e&&ii(e,this,t)}const li=si.prototype;li.append=function(e,t){this._pairs.push([e,t])},li.toString=function(e){const t=e?function(t){return e.call(this,t,oi)}:oi;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const ci=si;function di(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ui(e,t,n){if(!t)return e;const r=n&&n.encode||di;Qa.isFunction(n)&&(n={serialize:n});const a=n&&n.serialize;let i;if(i=a?a(t,n):Qa.isURLSearchParams(t)?t.toString():new ci(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const pi=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Qa.forEach(this.handlers,function(t){null!==t&&e(t)})}},fi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hi={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:ci,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},gi="undefined"!==typeof window&&"undefined"!==typeof document,xi="object"===typeof navigator&&navigator||void 0,mi=gi&&(!xi||["ReactNative","NativeScript","NS"].indexOf(xi.product)<0),bi="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,yi=gi&&window.location.href||"http://localhost",vi={...e,...hi};const wi=function(e){function t(e,n,r,a){let i=e[a++];if("__proto__"===i)return!0;const o=Number.isFinite(+i),s=a>=e.length;if(i=!i&&Qa.isArray(r)?r.length:i,s)return Qa.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!o;r[i]&&Qa.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],a)&&Qa.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}(r[i])),!o}if(Qa.isFormData(e)&&Qa.isFunction(e.entries)){const n={};return Qa.forEachEntry(e,(e,r)=>{t(function(e){return Qa.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),r,n,0)}),n}return null};const ki={transitional:fi,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,a=Qa.isObject(e);a&&Qa.isHTMLForm(e)&&(e=new FormData(e));if(Qa.isFormData(e))return r?JSON.stringify(wi(e)):e;if(Qa.isArrayBuffer(e)||Qa.isBuffer(e)||Qa.isStream(e)||Qa.isFile(e)||Qa.isBlob(e)||Qa.isReadableStream(e))return e;if(Qa.isArrayBufferView(e))return e.buffer;if(Qa.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ii(e,new vi.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return vi.isNode&&Qa.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Qa.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ii(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return a||r?(t.setContentType("application/json",!1),function(e,t,n){if(Qa.isString(e))try{return(t||JSON.parse)(e),Qa.trim(e)}catch(fr){if("SyntaxError"!==fr.name)throw fr}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ki.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Qa.isResponse(e)||Qa.isReadableStream(e))return e;if(e&&Qa.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(fr){if(n){if("SyntaxError"===fr.name)throw ei.from(fr,ei.ERR_BAD_RESPONSE,this,null,this.response);throw fr}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:vi.classes.FormData,Blob:vi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Qa.forEach(["delete","get","head","post","put","patch"],e=>{ki.headers[e]={}});const Si=ki,ji=Qa.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ci=Symbol("internals");function _i(e){return e&&String(e).trim().toLowerCase()}function Ei(e){return!1===e||null==e?e:Qa.isArray(e)?e.map(Ei):String(e)}function $i(e,t,n,r,a){return Qa.isFunction(r)?r.call(this,t,n):(a&&(t=n),Qa.isString(t)?Qa.isString(r)?-1!==t.indexOf(r):Qa.isRegExp(r)?r.test(t):void 0:void 0)}class zi{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function a(e,t,n){const a=_i(t);if(!a)throw new Error("header name must be a non-empty string");const i=Qa.findKey(r,a);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ei(e))}const i=(e,t)=>Qa.forEach(e,(e,n)=>a(e,n,t));if(Qa.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Qa.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,a;return e&&e.split("\n").forEach(function(e){a=e.indexOf(":"),n=e.substring(0,a).trim().toLowerCase(),r=e.substring(a+1).trim(),!n||t[n]&&ji[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t})(e),t);else if(Qa.isObject(e)&&Qa.isIterable(e)){let n,r,a={};for(const t of e){if(!Qa.isArray(t))throw TypeError("Object iterator must return a key-value pair");a[r=t[0]]=(n=a[r])?Qa.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}i(a,t)}else null!=e&&a(t,e,n);return this}get(e,t){if(e=_i(e)){const n=Qa.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Qa.isFunction(t))return t.call(this,e,n);if(Qa.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=_i(e)){const n=Qa.findKey(this,e);return!(!n||void 0===this[n]||t&&!$i(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function a(e){if(e=_i(e)){const a=Qa.findKey(n,e);!a||t&&!$i(0,n[a],a,t)||(delete n[a],r=!0)}}return Qa.isArray(e)?e.forEach(a):a(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const a=t[n];e&&!$i(0,this[a],a,e,!0)||(delete this[a],r=!0)}return r}normalize(e){const t=this,n={};return Qa.forEach(this,(r,a)=>{const i=Qa.findKey(n,a);if(i)return t[i]=Ei(r),void delete t[a];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}(a):String(a).trim();o!==a&&delete t[a],t[o]=Ei(r),n[o]=!0}),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Qa.forEach(this,(n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Qa.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(e=>{let[t,n]=e;return t+": "+n}).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(e=>t.set(e)),t}static accessor(e){const t=(this[Ci]=this[Ci]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=_i(e);t[r]||(!function(e,t){const n=Qa.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,a){return this[r].call(this,t,e,n,a)},configurable:!0})})}(n,e),t[r]=!0)}return Qa.isArray(e)?e.forEach(r):r(e),this}}zi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Qa.reduceDescriptors(zi.prototype,(e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}}),Qa.freezeMethods(zi);const Ti=zi;function Pi(e,t){const n=this||Si,r=t||n,a=Ti.from(r.headers);let i=r.data;return Qa.forEach(e,function(e){i=e.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function Ai(e){return!(!e||!e.__CANCEL__)}function Ii(e,t,n){ei.call(this,null==e?"canceled":e,ei.ERR_CANCELED,t,n),this.name="CanceledError"}Qa.inherits(Ii,ei,{__CANCEL__:!0});const Oi=Ii;function Ri(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ei("Request failed with status code "+n.status,[ei.ERR_BAD_REQUEST,ei.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Ni=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a,i=0,o=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[o];a||(a=l),n[i]=s,r[i]=l;let d=o,u=0;for(;d!==i;)u+=n[d++],d%=e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),l-a<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}};const Li=function(e,t){let n,r,a=0,i=1e3/t;const o=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();a=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-a;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=i?o(l,e):(n=l,r||(r=setTimeout(()=>{r=null,o(n)},i-t)))},()=>n&&o(n)]},Di=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const a=Ni(50,250);return Li(n=>{const i=n.loaded,o=n.lengthComputable?n.total:void 0,s=i-r,l=a(s);r=i;e({loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&i<=o?(o-i)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0})},n)},Mi=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Fi=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Qa.asap(()=>e(...n))},Bi=vi.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,vi.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(vi.origin),vi.navigator&&/(msie|trident)/i.test(vi.navigator.userAgent)):()=>!0,Ui=vi.hasStandardBrowserEnv?{write(e,t,n,r,a,i){const o=[e+"="+encodeURIComponent(t)];Qa.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Qa.isString(r)&&o.push("path="+r),Qa.isString(a)&&o.push("domain="+a),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Wi(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const qi=e=>e instanceof Ti?{...e}:e;function Ki(e,t){t=t||{};const n={};function r(e,t,n,r){return Qa.isPlainObject(e)&&Qa.isPlainObject(t)?Qa.merge.call({caseless:r},e,t):Qa.isPlainObject(t)?Qa.merge({},t):Qa.isArray(t)?t.slice():t}function a(e,t,n,a){return Qa.isUndefined(t)?Qa.isUndefined(e)?void 0:r(void 0,e,0,a):r(e,t,0,a)}function i(e,t){if(!Qa.isUndefined(t))return r(void 0,t)}function o(e,t){return Qa.isUndefined(t)?Qa.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,a,i){return i in t?r(n,a):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>a(qi(e),qi(t),0,!0)};return Qa.forEach(Object.keys(Object.assign({},e,t)),function(r){const i=l[r]||a,o=i(e[r],t[r],r);Qa.isUndefined(o)&&i!==s||(n[r]=o)}),n}const Hi=e=>{const t=Ki({},e);let n,{data:r,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;if(t.headers=s=Ti.from(s),t.url=ui(Wi(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Qa.isFormData(r))if(vi.hasStandardBrowserEnv||vi.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map(e=>e.trim()).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(vi.hasStandardBrowserEnv&&(a&&Qa.isFunction(a)&&(a=a(t)),a||!1!==a&&Bi(t.url))){const e=i&&o&&Ui.read(o);e&&s.set(i,e)}return t},Yi="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise(function(t,n){const r=Hi(e);let a=r.data;const i=Ti.from(r.headers).normalize();let o,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:f}=r;function h(){c&&c(),d&&d(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let g=new XMLHttpRequest;function x(){if(!g)return;const r=Ti.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());Ri(function(e){t(e),h()},function(e){n(e),h()},{data:u&&"text"!==u&&"json"!==u?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g}),g=null}g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout,"onloadend"in g?g.onloadend=x:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(x)},g.onabort=function(){g&&(n(new ei("Request aborted",ei.ECONNABORTED,e,g)),g=null)},g.onerror=function(){n(new ei("Network Error",ei.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const a=r.transitional||fi;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new ei(t,a.clarifyTimeoutError?ei.ETIMEDOUT:ei.ECONNABORTED,e,g)),g=null},void 0===a&&i.setContentType(null),"setRequestHeader"in g&&Qa.forEach(i.toJSON(),function(e,t){g.setRequestHeader(t,e)}),Qa.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),u&&"json"!==u&&(g.responseType=r.responseType),f&&([l,d]=Di(f,!0),g.addEventListener("progress",l)),p&&g.upload&&([s,c]=Di(p),g.upload.addEventListener("progress",s),g.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(o=t=>{g&&(n(!t||t.type?new Oi(null,e,g):t),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const m=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);m&&-1===vi.protocols.indexOf(m)?n(new ei("Unsupported protocol "+m+":",ei.ERR_BAD_REQUEST,e)):g.send(a||null)})},Vi=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const a=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ei?t:new Oi(t instanceof Error?t.message:t))}};let i=t&&setTimeout(()=>{i=null,a(new ei(`timeout ${t} of ms exceeded`,ei.ETIMEDOUT))},t);const o=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(a):e.removeEventListener("abort",a)}),e=null)};e.forEach(e=>e.addEventListener("abort",a));const{signal:s}=r;return s.unsubscribe=()=>Qa.asap(o),s}},Gi=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,a=0;for(;a<n;)r=a+t,yield e.slice(a,r),a=r},Qi=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Xi=(e,t,n,r)=>{const a=async function*(e,t){for await(const n of Qi(e))yield*Gi(n,t)}(e,t);let i,o=0,s=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await a.next();if(t)return s(),void e.close();let i=r.byteLength;if(n){let e=o+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),a.return())},{highWaterMark:2})},Ji="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Zi=Ji&&"function"===typeof ReadableStream,eo=Ji&&("function"===typeof TextEncoder?(to=new TextEncoder,e=>to.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var to;const no=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(fr){return!1}},ro=Zi&&no(()=>{let e=!1;const t=new Request(vi.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),ao=Zi&&no(()=>Qa.isReadableStream(new Response("").body)),io={stream:ao&&(e=>e.body)};var oo;Ji&&(oo=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!io[e]&&(io[e]=Qa.isFunction(oo[e])?t=>t[e]():(t,n)=>{throw new ei(`Response type '${e}' is not supported`,ei.ERR_NOT_SUPPORT,n)})}));const so=async(e,t)=>{const n=Qa.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Qa.isBlob(e))return e.size;if(Qa.isSpecCompliantForm(e)){const t=new Request(vi.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Qa.isArrayBufferView(e)||Qa.isArrayBuffer(e)?e.byteLength:(Qa.isURLSearchParams(e)&&(e+=""),Qa.isString(e)?(await eo(e)).byteLength:void 0)})(t):n},lo=Ji&&(async e=>{let{url:t,method:n,data:r,signal:a,cancelToken:i,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=Hi(e);c=c?(c+"").toLowerCase():"text";let f,h=Vi([a,i&&i.toAbortSignal()],o);const g=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let x;try{if(l&&ro&&"get"!==n&&"head"!==n&&0!==(x=await so(d,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Qa.isFormData(r)&&(e=n.headers.get("content-type"))&&d.setContentType(e),n.body){const[e,t]=Mi(x,Di(Fi(l)));r=Xi(n.body,65536,e,t)}}Qa.isString(u)||(u=u?"include":"omit");const a="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:a?u:void 0});let i=await fetch(f,p);const o=ao&&("stream"===c||"response"===c);if(ao&&(s||o&&g)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=i[t]});const t=Qa.toFiniteNumber(i.headers.get("content-length")),[n,r]=s&&Mi(t,Di(Fi(s),!0))||[];i=new Response(Xi(i.body,65536,n,()=>{r&&r(),g&&g()}),e)}c=c||"text";let m=await io[Qa.findKey(io,c)||"text"](i,e);return!o&&g&&g(),await new Promise((t,n)=>{Ri(t,n,{data:m,headers:Ti.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})})}catch(m){if(g&&g(),m&&"TypeError"===m.name&&/Load failed|fetch/i.test(m.message))throw Object.assign(new ei("Network Error",ei.ERR_NETWORK,e,f),{cause:m.cause||m});throw ei.from(m,m&&m.code,e,f)}}),co={http:null,xhr:Yi,fetch:lo};Qa.forEach(co,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(fr){}Object.defineProperty(e,"adapterName",{value:t})}});const uo=e=>`- ${e}`,po=e=>Qa.isFunction(e)||null===e||!1===e,fo=e=>{e=Qa.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!po(n)&&(r=co[(t=String(n)).toLowerCase()],void 0===r))throw new ei(`Unknown adapter '${t}'`);if(r)break;a[t||"#"+i]=r}if(!r){const e=Object.entries(a).map(e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")});let n=t?e.length>1?"since :\n"+e.map(uo).join("\n"):" "+uo(e[0]):"as no adapter specified";throw new ei("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function ho(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Oi(null,e)}function go(e){ho(e),e.headers=Ti.from(e.headers),e.data=Pi.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return fo(e.adapter||Si.adapter)(e).then(function(t){return ho(e),t.data=Pi.call(e,e.transformResponse,t),t.headers=Ti.from(t.headers),t},function(t){return Ai(t)||(ho(e),t&&t.response&&(t.response.data=Pi.call(e,e.transformResponse,t.response),t.response.headers=Ti.from(t.response.headers))),Promise.reject(t)})}const xo="1.10.0",mo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mo[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const bo={};mo.transitional=function(e,t,n){function r(e,t){return"[Axios v"+xo+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,a,i)=>{if(!1===e)throw new ei(r(a," has been removed"+(t?" in "+t:"")),ei.ERR_DEPRECATED);return t&&!bo[a]&&(bo[a]=!0,console.warn(r(a," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,a,i)}},mo.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const yo={assertOptions:function(e,t,n){if("object"!==typeof e)throw new ei("options must be an object",ei.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=t[i];if(o){const t=e[i],n=void 0===t||o(t,i,e);if(!0!==n)throw new ei("option "+i+" must be "+n,ei.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new ei("Unknown option "+i,ei.ERR_BAD_OPTION)}},validators:mo},vo=yo.validators;class wo{constructor(e){this.defaults=e||{},this.interceptors={request:new pi,response:new pi}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(fr){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Ki(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:a}=t;void 0!==n&&yo.assertOptions(n,{silentJSONParsing:vo.transitional(vo.boolean),forcedJSONParsing:vo.transitional(vo.boolean),clarifyTimeoutError:vo.transitional(vo.boolean)},!1),null!=r&&(Qa.isFunction(r)?t.paramsSerializer={serialize:r}:yo.assertOptions(r,{encode:vo.function,serialize:vo.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),yo.assertOptions(t,{baseUrl:vo.spelling("baseURL"),withXsrfToken:vo.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=a&&Qa.merge(a.common,a[t.method]);a&&Qa.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=Ti.concat(i,a);const o=[];let s=!0;this.interceptors.request.forEach(function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))});const l=[];let c;this.interceptors.response.forEach(function(e){l.push(e.fulfilled,e.rejected)});let d,u=0;if(!s){const e=[go.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let p=t;for(u=0;u<d;){const e=o[u++],t=o[u++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=go.call(this,p)}catch(f){return Promise.reject(f)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return ui(Wi((e=Ki(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Qa.forEach(["delete","get","head","options"],function(e){wo.prototype[e]=function(t,n){return this.request(Ki(n||{},{method:e,url:t,data:(n||{}).data}))}}),Qa.forEach(["post","put","patch"],function(e){function t(t){return function(n,r,a){return this.request(Ki(a||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}wo.prototype[e]=t(),wo.prototype[e+"Form"]=t(!0)});const ko=wo;class So{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,a){n.reason||(n.reason=new Oi(e,r,a),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new So(function(t){e=t});return{token:t,cancel:e}}}const jo=So;const Co={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Co).forEach(e=>{let[t,n]=e;Co[n]=t});const _o=Co;const Eo=function e(t){const n=new ko(t),r=ua(ko.prototype.request,n);return Qa.extend(r,ko.prototype,n,{allOwnKeys:!0}),Qa.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ki(t,n))},r}(Si);Eo.Axios=ko,Eo.CanceledError=Oi,Eo.CancelToken=jo,Eo.isCancel=Ai,Eo.VERSION=xo,Eo.toFormData=ii,Eo.AxiosError=ei,Eo.Cancel=Eo.CanceledError,Eo.all=function(e){return Promise.all(e)},Eo.spread=function(e){return function(t){return e.apply(null,t)}},Eo.isAxiosError=function(e){return Qa.isObject(e)&&!0===e.isAxiosError},Eo.mergeConfig=Ki,Eo.AxiosHeaders=Ti,Eo.formToJSON=e=>wi(Qa.isHTMLForm(e)?new FormData(e):e),Eo.getAdapter=fo,Eo.HttpStatusCode=_o,Eo.default=Eo;const $o=Eo;class zo{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;this.buffer=[],this.maxSize=e,this.flushInterval=t,this.isProcessing=!1,this.retryQueue=[],this.intervalId=setInterval(()=>{this.flush()},this.flushInterval)}add(e){this.buffer.push(e),this.buffer.length>=this.maxSize&&this.flush()}async flush(){if(0===this.buffer.length||this.isProcessing)return;this.isProcessing=!0;const e=[...this.buffer];this.buffer=[];try{await $o.post("/api/logs/batch",{logs:e},{timeout:5e3,headers:{"Content-Type":"application/json"}}),this.retryQueue.length>0&&await this.processRetryQueue()}catch(t){this.retryQueue.push(...e),this.retryQueue.length>500&&(this.retryQueue=this.retryQueue.slice(-200),console.warn("\u65e5\u5fd7\u91cd\u8bd5\u961f\u5217\u5df2\u6e05\u7406\uff0c\u4fdd\u7559\u6700\u65b0200\u6761"))}finally{this.isProcessing=!1}}async processRetryQueue(){if(0===this.retryQueue.length)return;const e=[...this.retryQueue];this.retryQueue=[];try{await $o.post("/api/logs/batch",{logs:e},{timeout:5e3,headers:{"Content-Type":"application/json"}})}catch(t){e.length<100&&this.retryQueue.push(...e)}}async forceFlush(){await this.flush(),this.retryQueue.length>0&&await this.processRetryQueue()}destroy(){this.intervalId&&clearInterval(this.intervalId),this.forceFlush()}getBufferStatus(){return{bufferSize:this.buffer.length,retryQueueSize:this.retryQueue.length,isProcessing:this.isProcessing,maxSize:this.maxSize}}}const To=new class{constructor(){this.userIP=null,this.logBuffer=new zo,this.initIP(),"undefined"!==typeof window&&window.addEventListener("beforeunload",()=>{this.logBuffer.forceFlush()})}async initIP(){try{const e=await $o.get("https://httpbin.org/ip",{timeout:5e3});this.userIP=e.data.origin}catch(e){try{const e=await $o.get("https://ifconfig.me/ip",{timeout:5e3});this.userIP=e.data.trim()}catch(t){this.userIP="local_user",console.warn("\u65e0\u6cd5\u83b7\u53d6\u5916\u7f51IP\uff0c\u4f7f\u7528\u672c\u5730\u6807\u8bc6")}}}logApiCall(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;const s={timestamp:(new Date).toISOString(),date:(new Date).toLocaleDateString("zh-CN"),time:(new Date).toLocaleTimeString("zh-CN"),ip:this.userIP||"unknown",api:e,dataSource:t,success:n,responseTime:r,errorMessage:a,additionalInfo:i,resultStatus:o,userAgent:navigator.userAgent.substring(0,200),url:window.location.href};this.logBuffer.add(s)}logBatchOperation(e,t,n,r,a){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];const o={timestamp:(new Date).toISOString(),date:(new Date).toLocaleDateString("zh-CN"),time:(new Date).toLocaleTimeString("zh-CN"),ip:this.userIP||"unknown",api:`batch_${e}`,dataSource:"ai",success:0===r,responseTime:a,errorMessage:i.length>0?`${i.length} errors: ${i.slice(0,3).join("; ")}`:null,additionalInfo:{totalCount:t,successCount:n,failedCount:r,batchType:e,errorSample:i.slice(0,5),bufferStatus:this.logBuffer.getBufferStatus()},resultStatus:null,userAgent:navigator.userAgent.substring(0,200),url:window.location.href};this.logBuffer.add(o)}async flushLogs(){await this.logBuffer.forceFlush()}getLoggerStatus(){return{userIP:this.userIP,bufferStatus:this.logBuffer.getBufferStatus()}}sendToServer(e){$o.post("/api/logs",e,{timeout:2e3,headers:{"Content-Type":"application/json"}}).catch(e=>{0})}async getServerLogs(){try{const e=await $o.get("/api/logs",{timeout:2e4,headers:{Accept:"application/json","Cache-Control":"no-cache"}});return e.data&&"object"===typeof e.data?e.data.success?e.data.data:e.data:[]}catch(e){throw console.error("\u83b7\u53d6\u670d\u52a1\u5668\u65e5\u5fd7\u5931\u8d25:",e),"ECONNABORTED"===e.code?new Error("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u6216\u8054\u7cfb\u7ba1\u7406\u5458"):e.response?new Error(`\u670d\u52a1\u5668\u9519\u8bef (${e.response.status}): ${e.response.statusText}`):e.request?new Error("\u65e0\u6cd5\u8fde\u63a5\u5230\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"):new Error("\u83b7\u53d6\u65e5\u5fd7\u65f6\u53d1\u751f\u672a\u77e5\u9519\u8bef")}}async clearServerLogs(){try{const e=await $o.delete("/api/logs",{timeout:1e4,headers:{Accept:"application/json","Content-Type":"application/json"}});return!e.data||"object"!==typeof e.data||e.data.success}catch(e){throw console.error("\u6e05\u7a7a\u670d\u52a1\u5668\u65e5\u5fd7\u5931\u8d25:",e),"ECONNABORTED"===e.code?new Error("\u6e05\u7a7a\u65e5\u5fd7\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"):e.response?new Error(`\u670d\u52a1\u5668\u9519\u8bef (${e.response.status}): ${e.response.statusText}`):e.request?new Error("\u65e0\u6cd5\u8fde\u63a5\u5230\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"):new Error("\u6e05\u7a7a\u65e5\u5fd7\u65f6\u53d1\u751f\u672a\u77e5\u9519\u8bef")}}exportLogsAsJSON(e){try{const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=`api_logs_${(new Date).toISOString().split("T")[0]}.json`,r.click()}catch(t){console.error("\u5bfc\u51fa\u65e5\u5fd7\u5931\u8d25:",t)}}exportLogsAsCSV(e){try{if(0===e.length)return void alert("\u6ca1\u6709\u65e5\u5fd7\u6570\u636e\u53ef\u5bfc\u51fa");const t=[["\u65f6\u95f4\u6233","IP\u5730\u5740","\u6570\u636e\u6e90","API\u63a5\u53e3","\u662f\u5426\u6210\u529f","\u54cd\u5e94\u65f6\u95f4(ms)","\u9519\u8bef\u4fe1\u606f"].join(","),...e.map(e=>{return[e.timestamp,e.ip,(t=e.dataSource,{semantic:"3rd api",googleScholar:"Google Scholar",primaryScraping:"Primary Scraping Scholar"}[t]||t),e.api,e.success?"\u6210\u529f":"\u5931\u8d25",e.responseTime,e.errorMessage||""].map(e=>`"${String(e).replace(/"/g,'""')}"`).join(",");var t})].join("\n"),n=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download=`api_logs_${(new Date).toISOString().split("T")[0]}.csv`,r.click()}catch(t){console.error("\u5bfc\u51faCSV\u65e5\u5fd7\u5931\u8d25:",t)}}getStatistics(e){const t={totalRequests:e.length,successfulRequests:e.filter(e=>e.success&&"empty"!==e.resultStatus).length,failedRequests:e.filter(e=>!e.success).length,emptyRequests:e.filter(e=>e.success&&"empty"===e.resultStatus).length,averageResponseTime:0,dataSourceStats:{},apiStats:{},hourlyStats:{},dailyStats:{}};if(e.length>0){const n=e.reduce((e,t)=>e+t.responseTime,0);t.averageResponseTime=Math.round(n/e.length),e.forEach(e=>{t.dataSourceStats[e.dataSource]||(t.dataSourceStats[e.dataSource]={total:0,success:0,failed:0}),t.dataSourceStats[e.dataSource].total++,e.success?t.dataSourceStats[e.dataSource].success++:t.dataSourceStats[e.dataSource].failed++}),e.forEach(e=>{t.apiStats[e.api]||(t.apiStats[e.api]={total:0,success:0,failed:0}),t.apiStats[e.api].total++,e.success?t.apiStats[e.api].success++:t.apiStats[e.api].failed++}),e.forEach(e=>{const n=new Date(e.timestamp).getHours();t.hourlyStats[n]||(t.hourlyStats[n]={total:0,success:0,failed:0}),t.hourlyStats[n].total++,e.success?t.hourlyStats[n].success++:t.hourlyStats[n].failed++}),e.forEach(e=>{const n=e.date;t.dailyStats[n]||(t.dailyStats[n]={total:0,success:0,failed:0}),t.dailyStats[n].total++,e.success?t.dailyStats[n].success++:t.dailyStats[n].failed++})}return t}},Po="/api/ai/chat",Ao={GPT_4O_MINI:"gpt-4o-mini",GPT_4O_MINI_2024:"gpt-4o-mini-2024-07-18",DEEPSEEK_V3:"deepseek-v3"},Io=Ao.GPT_4O_MINI_2024,Oo=$o.create({timeout:6e4,headers:{"Content-Type":"application/json"}});Oo.interceptors.request.use(e=>{var t;return console.log("\ud83d\ude80 AI API \u8bf7\u6c42\u53d1\u9001:",{url:e.url,method:e.method,data:e.data?{model:e.data.model,messageCount:null===(t=e.data.messages)||void 0===t?void 0:t.length}:"no data"}),e},e=>(console.error("\u274c AI API \u8bf7\u6c42\u62e6\u622a\u5668\u9519\u8bef:",e),Promise.reject(e))),Oo.interceptors.response.use(e=>(console.log("\u2705 AI API \u54cd\u5e94\u6210\u529f:",e.status,e.statusText),e),e=>{var t,n,r;return console.error("\u274c AI API \u54cd\u5e94\u9519\u8bef:",{status:null===(t=e.response)||void 0===t?void 0:t.status,statusText:null===(n=e.response)||void 0===n?void 0:n.statusText,message:e.message,url:null===(r=e.config)||void 0===r?void 0:r.url}),Promise.reject(e)});const Ro=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Io,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const a=Date.now();if(!e||!e.title)throw new Error("\u65e0\u6548\u7684\u8bba\u6587\u6570\u636e");Object.values(Ao).includes(n)||(console.warn(`\u672a\u77e5\u7684\u6a21\u578b: ${n}\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6a21\u578b: ${Io}`),n=Io);let i="";const o=e.title,s=e.abstract||"\u65e0\u6458\u8981",l=(e.authors||[]).map(e=>e.name).join(", "),c=e.year||"\u672a\u77e5",d=e.venue||"\u672a\u77e5",u=(e.fieldsOfStudy||[]).join(", ");switch(t){case"research_purpose":i=`\u63d0\u53d6\u4ee5\u4e0b\u8bba\u6587\u7684\u7814\u7a76\u76ee\u7684\uff0c\u76f4\u63a5\u5217\u51fa\u6838\u5fc3\u8981\u70b9\uff0c\u4e0d\u8981\u6709\u4efb\u4f55\u4ecb\u7ecd\u53e5\u548c\u603b\u7ed3\u53e5\uff1a\n\n\u6807\u9898\uff1a${o}\n\u6458\u8981\uff1a${s}\n\u4f5c\u8005\uff1a${l}\n\u5e74\u4efd\uff1a${c}\n\u53d1\u8868\u4e8e\uff1a${d}\n\u7814\u7a76\u9886\u57df\uff1a${u}\n\n\u56de\u7b54\u4e0d\u8d85\u8fc750\u5b57\u3002`;break;case"research_methods":i=`\u63d0\u53d6\u4ee5\u4e0b\u8bba\u6587\u7684\u4e3b\u8981\u7814\u7a76\u65b9\u6cd5\u548c\u6280\u672f\uff0c\u76f4\u63a5\u5217\u51fa\u5173\u952e\u65b9\u6cd5\uff0c\u4e0d\u8981\u6709\u4efb\u4f55\u4ecb\u7ecd\u53e5\u548c\u603b\u7ed3\u53e5\uff1a\n\n\u6807\u9898\uff1a${o}\n\u6458\u8981\uff1a${s}\n\u4f5c\u8005\uff1a${l}\n\u5e74\u4efd\uff1a${c}\n\u53d1\u8868\u4e8e\uff1a${d}\n\u7814\u7a76\u9886\u57df\uff1a${u}\n\n\u56de\u7b54\u4e0d\u8d85\u8fc750\u5b57\u3002`;break;case"metrics":i=`\u63d0\u53d6\u4ee5\u4e0b\u8bba\u6587\u4f7f\u7528\u7684\u8bc4\u4f30\u6307\u6807\uff0c\u76f4\u63a5\u5217\u51fa\u6307\u6807\u540d\u79f0\uff0c\u4e0d\u8981\u6709\u4efb\u4f55\u4ecb\u7ecd\u53e5\u548c\u603b\u7ed3\u53e5\uff1a\n\n\u6807\u9898\uff1a${o}\n\u6458\u8981\uff1a${s}\n\u4f5c\u8005\uff1a${l}\n\u5e74\u4efd\uff1a${c}\n\u53d1\u8868\u4e8e\uff1a${d}\n\u7814\u7a76\u9886\u57df\uff1a${u}\n\n\u56de\u7b54\u4e0d\u8d85\u8fc750\u5b57\u3002`;break;case"research_results":i=`\u63d0\u53d6\u4ee5\u4e0b\u8bba\u6587\u7684\u4e3b\u8981\u7814\u7a76\u7ed3\u679c\uff0c\u76f4\u63a5\u5217\u51fa\u5173\u952e\u53d1\u73b0\uff0c\u4e0d\u8981\u6709\u4efb\u4f55\u4ecb\u7ecd\u53e5\u548c\u603b\u7ed3\u53e5\uff1a\n\n\u6807\u9898\uff1a${o}\n\u6458\u8981\uff1a${s}\n\u4f5c\u8005\uff1a${l}\n\u5e74\u4efd\uff1a${c}\n\u53d1\u8868\u4e8e\uff1a${d}\n\u7814\u7a76\u9886\u57df\uff1a${u}\n\n\u56de\u7b54\u4e0d\u8d85\u8fc750\u5b57\u3002`;break;default:throw new Error(`\u672a\u77e5\u7684\u5206\u6790\u7ef4\u5ea6: ${t}`)}try{const o=await Oo.post(Po,{model:n,messages:[{role:"user",content:i}],stream:!1,max_tokens:100});if(o.data&&o.data.choices&&o.data.choices.length>0){const i=o.data.choices[0].message.content;if(r){const r=Date.now()-a;To.logApiCall("analyzePaperDimension","ai",!0,r,null,{paperId:e.paperId,paperTitle:e.title,dimension:t,model:n,resultLength:i.length})}return i}throw console.error("AI API\u8fd4\u56de\u683c\u5f0f\u4e0d\u6b63\u786e:",o.data),new Error("AI\u5206\u6790\u8fd4\u56de\u7ed3\u679c\u683c\u5f0f\u4e0d\u6b63\u786e")}catch(p){if(r){const r=Date.now()-a;To.logApiCall("analyzePaperDimension","ai",!1,r,p.message,{paperId:e.paperId,paperTitle:e.title,dimension:t,model:n})}throw console.error(`AI\u5206\u6790\u5931\u8d25 (\u6a21\u578b: ${n}, \u7ef4\u5ea6: ${t}):`,p),p.response&&(console.error("\u54cd\u5e94\u72b6\u6001:",p.response.status),console.error("\u54cd\u5e94\u6570\u636e:",p.response.data)),new Error(`AI\u5206\u6790\u5931\u8d25: ${p.message}`)}},No=async function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Io;if(!e||0===e.length)throw new Error("\u6ca1\u6709\u8bba\u6587\u53ef\u4f9b\u5206\u6790");if(!t||0===t.length)throw new Error("\u6ca1\u6709\u6307\u5b9a\u5206\u6790\u7ef4\u5ea6");Object.values(Ao).includes(r)||(console.warn(`\u672a\u77e5\u7684\u6a21\u578b: ${r}\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6a21\u578b: ${Io}`),r=Io);const a={startTime:Date.now(),totalTasks:e.length*t.length,successCount:0,failedCount:0,errors:[]};let i=!1;No.cancel=()=>{i=!0};const o=[];e.length,t.length;for(let s=0;s<e.length;s++){const n=e[s];for(let e=0;e<t.length;e++){const r=t[e];o.push({paperIndex:s,dimensionIndex:e,paper:n,dimension:r,status:"pending"})}}try{const e=3;let t=0,s=0;for(;(s<o.length||t>0)&&!i;){for(;s<o.length&&t<e;){const e=o[s];"pending"===e.status&&(e.status="running",t++,(async e=>{let o=Date.now();try{if(i)return;const t=await Ro(e.paper,e.dimension,r,!1);if(i)return;n&&n(e.paperIndex,e.dimensionIndex,{paperId:e.paper.paperId,dimension:e.dimension,result:t,model:r}),e.status="completed",a.successCount++}catch(s){console.error(`\u5206\u6790\u8bba\u6587 ${e.paper.title} \u7684 ${e.dimension} \u7ef4\u5ea6\u65f6\u51fa\u9519:`,s),a.errors.push({paper:e.paper.title,dimension:e.dimension,error:s.message,responseTime:Date.now()-o}),n&&n(e.paperIndex,e.dimensionIndex,{paperId:e.paper.paperId,dimension:e.dimension,result:`\u5206\u6790\u5931\u8d25: ${s.message}`,model:r}),e.status="failed",a.failedCount++}finally{t--}})(e)),s++}await new Promise(e=>setTimeout(e,100))}const l=Date.now()-a.startTime,c=Math.round(l/a.totalTasks);To.logBatchOperation("analyzePaperDimension",a.totalTasks,a.successCount,a.failedCount,c,a.errors.map(e=>`${e.paper}(${e.dimension}): ${e.error}`))}finally{No.cancel=null}};No.cancel=null;const Lo=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Io;const n=Date.now();if(!e||""===e.trim())throw new Error("\u67e5\u8be2\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");Object.values(Ao).includes(t)||(console.warn(`\u672a\u77e5\u7684\u6a21\u578b: ${t}\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6a21\u578b: ${Io}`),t=Io);const r=`\n\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u5b66\u672f\u8bba\u6587\u641c\u7d22\u4f18\u5316\u52a9\u624b\u3002\u8bf7\u5206\u6790\u7528\u6237\u7684\u81ea\u7136\u8bed\u8a00\u67e5\u8be2\uff0c\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6700\u4f18\u7684\u5b66\u672f\u641c\u7d22\u7b56\u7565\u3002\n\n\u91cd\u8981\u4f18\u5316\u539f\u5219\uff1a\n1. **\u8bed\u8a00\u4f18\u5316**\uff1a\u65e0\u8bba\u7528\u6237\u8f93\u5165\u4ec0\u4e48\u8bed\u8a00\uff0c\u90fd\u8981\u5c06\u6838\u5fc3\u5b66\u672f\u672f\u8bed\u548c\u5173\u952e\u8bcd\u7ffb\u8bd1\u6210\u82f1\u6587\uff0c\u56e0\u4e3a\u5927\u591a\u6570\u5b66\u672f\u6570\u636e\u5e93\u4e3b\u8981\u6536\u5f55\u82f1\u6587\u8bba\u6587\uff0c\u4f7f\u7528\u82f1\u6587\u5173\u952e\u8bcd\u80fd\u83b7\u5f97\u66f4\u591a\u66f4\u51c6\u786e\u7684\u641c\u7d22\u7ed3\u679c\n2. **\u672f\u8bed\u4e13\u4e1a\u5316**\uff1a\u5c06\u901a\u4fd7\u8bcd\u6c47\u8f6c\u6362\u4e3a\u6807\u51c6\u7684\u5b66\u672f\u672f\u8bed\n3. **\u5173\u952e\u8bcd\u63d0\u53d6**\uff1a\u63d0\u53d6\u6700\u6838\u5fc3\u7684\u6280\u672f\u672f\u8bed\u548c\u6982\u5ff5\n4. **\u540c\u4e49\u8bcd\u6269\u5c55**\uff1a\u8003\u8651\u76f8\u5173\u7684\u540c\u4e49\u8bcd\u548c\u53d8\u4f53\n5. **\u8bed\u8a00\u68c0\u6d4b**\uff1a\u7528\u6237\u5982\u679c\u8981\u6c42\u4e2d\u6587\u6587\u732e\uff0c\u5219language\u5b57\u6bb5\u5efa\u8bae\u5b9a\u4e49"zh"\u4ee5\u4fbf\u5728\u67d0\u4e9b\u6570\u636e\u6e90\u4e2d\u627e\u5230\u4e2d\u6587\u6587\u732e\n6. **\u641c\u7d22\u7c7b\u578b\u8bc6\u522b**\uff1a\u8bc6\u522b\u7528\u6237\u662f\u5426\u5728\u5bfb\u627e\u7efc\u8ff0\u7c7b\u6587\u7ae0\uff08review\u3001survey\u3001overview\u7b49\u5173\u952e\u8bcd\uff09\n7. **\u7814\u7a76\u9886\u57df\u8bc6\u522b**\uff1a\u51c6\u786e\u8bc6\u522b\u7528\u6237\u641c\u7d22\u7684\u7814\u7a76\u9886\u57df\uff0c\u7528\u4e8e\u540e\u7eed\u7684\u7cbe\u51c6\u670d\u52a1\n\n\u8bf7\u4ee5JSON\u683c\u5f0f\u8fd4\u56de\uff0c\u5305\u542b\u4ee5\u4e0b\u5b57\u6bb5\uff1a\n- query\uff1a\u4f18\u5316\u540e\u7684\u82f1\u6587\u641c\u7d22\u5173\u952e\u8bcd\uff08\u5fc5\u987b\u662f\u82f1\u6587\uff0c\u5373\u4f7f\u7528\u6237\u8f93\u5165\u662f\u5176\u4ed6\u8bed\u8a00\uff09\n- year\uff1a\u53d1\u8868\u5e74\u4efd\uff0c\u683c\u5f0f\u4e3ayyyy\u6216yyyy-yyyy\uff08\u5982\uff1a2020\u30012020-2024\uff09\n- minCitationCount\uff1a\u6700\u5c0f\u5f15\u7528\u6570\uff0c\u6570\u5b57\uff08\u4ec5\u9002\u7528\u4e8e\u652f\u6301\u7684\u6570\u636e\u6e90\uff09\n- fieldsOfStudy\uff1a\u7814\u7a76\u9886\u57df\uff08\u5982Computer Science, Medicine, Biology\u7b49\uff0c\u4f7f\u7528\u82f1\u6587\uff09\n- venue\uff1a\u671f\u520a\u6216\u4f1a\u8bae\u540d\u79f0\uff08\u53ef\u7528\u4e8e\u5224\u65ad\u662f\u5426\u4e3a\u7efc\u8ff0\u7c7b\u6587\u7ae0\uff09\n- openAccessPdf\uff1a\u662f\u5426\u4ec5\u663e\u793a\u5f00\u653e\u83b7\u53d6\u8bba\u6587\uff0c"true"\u3001"false"\u6216\u7a7a\u5b57\u7b26\u4e32\uff08\u4ec5\u9002\u7528\u4e8e\u652f\u6301\u7684\u6570\u636e\u6e90\uff09\n- sort\uff1a\u6392\u5e8f\u65b9\u5f0f\uff0c\u53ef\u9009\u503c\u4e3a"relevance"\u3001"citationCount"\u6216"publicationDate"\uff08\u4ec5\u9002\u7528\u4e8e\u652f\u6301\u7684\u6570\u636e\u6e90\uff09\n- language\uff1a\u5efa\u8bae\u7684\u641c\u7d22\u8bed\u8a00\uff0c\u9ed8\u8ba4"en"\uff08\u82f1\u8bed\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f"zh"\uff08\u4e2d\u6587\uff09\u7b49\n- searchType\uff1a\u641c\u7d22\u7c7b\u578b\u5efa\u8bae\uff0c\u5982"academic"\uff08\u5b66\u672f\u6587\u7ae0\uff09\u3001"review"\uff08\u7efc\u8ff0\u6587\u7ae0\uff09\u7b49\n- researchDomain\uff1a\u7814\u7a76\u9886\u57df\u6807\u8bb0\uff0c\u7528\u4e8e\u89e6\u53d1\u76f8\u5173\u670d\u52a1\uff0c\u53ef\u4ee5\u662f\u5355\u4e2a\u503c\u6216\u6570\u7ec4\u3002\u652f\u6301\u4ee5\u4e0b\u56fa\u5b9a\u503c\uff1a\n  * "computer_science" - \u8ba1\u7b97\u673a\u79d1\u5b66\u76f8\u5173\n  * "medicine" - \u533b\u5b66\u76f8\u5173\n  * "biology" - \u751f\u7269\u5b66\u76f8\u5173\n  * "chemistry" - \u5316\u5b66\u76f8\u5173\n  * "physics" - \u7269\u7406\u5b66\u76f8\u5173\n  * "mathematics" - \u6570\u5b66\u76f8\u5173\n  * "engineering" - \u5de5\u7a0b\u5b66\u76f8\u5173\n  * "environmental_science" - \u73af\u5883\u79d1\u5b66\u76f8\u5173\n  * "psychology" - \u5fc3\u7406\u5b66\u76f8\u5173\n  * "economics" - \u7ecf\u6d4e\u5b66\u76f8\u5173\n  * "education" - \u6559\u80b2\u5b66\u76f8\u5173\n  * "social_sciences" - \u793e\u4f1a\u79d1\u5b66\u76f8\u5173\n  * "other" - \u5176\u4ed6\u9886\u57df\n\n  \u5bf9\u4e8e\u4ea4\u53c9\u5b66\u79d1\u7814\u7a76\uff0c\u53ef\u4ee5\u8fd4\u56de\u591a\u4e2a\u9886\u57df\uff0c\u4f8b\u5982\uff1a\n  - "\u751f\u7269\u4fe1\u606f\u5b66" \u2192 ["biology", "computer_science"]\n  - "\u533b\u5b66\u5f71\u50cf" \u2192 ["medicine", "engineering"]\n  - "\u8ba1\u7b97\u5316\u5b66" \u2192 ["chemistry", "computer_science"]\n  - "\u73af\u5883\u7ecf\u6d4e\u5b66" \u2192 ["environmental_science", "economics"]\n\n\u7814\u7a76\u9886\u57df\u6620\u5c04\u89c4\u5219\uff1a\n- \u8ba1\u7b97\u673a\u79d1\u5b66\u76f8\u5173\uff1aAI\u3001\u673a\u5668\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u3001\u81ea\u7136\u8bed\u8a00\u5904\u7406\u3001\u8ba1\u7b97\u673a\u89c6\u89c9\u3001\u8f6f\u4ef6\u5de5\u7a0b\u3001\u6570\u636e\u5e93\u3001\u7f51\u7edc\u7b49\n- \u533b\u5b66\u76f8\u5173\uff1a\u75be\u75c5\u3001\u836f\u7269\u3001\u6cbb\u7597\u3001\u8bca\u65ad\u3001\u4e34\u5e8a\u8bd5\u9a8c\u3001\u75ab\u82d7\u3001\u516c\u5171\u536b\u751f\u7b49\n- \u751f\u7269\u5b66\u76f8\u5173\uff1a\u57fa\u56e0\u3001\u7ec6\u80de\u3001\u86cb\u767d\u8d28\u3001\u8fdb\u5316\u3001\u751f\u6001\u3001\u751f\u7269\u6280\u672f\u7b49\n- \u5316\u5b66\u76f8\u5173\uff1a\u5206\u5b50\u3001\u5316\u5408\u7269\u3001\u53cd\u5e94\u3001\u50ac\u5316\u5242\u3001\u6750\u6599\u5316\u5b66\u7b49\n- \u7269\u7406\u5b66\u76f8\u5173\uff1a\u91cf\u5b50\u3001\u7c92\u5b50\u3001\u5149\u5b66\u3001\u529b\u5b66\u3001\u7535\u78c1\u5b66\u7b49\n- \u6570\u5b66\u76f8\u5173\uff1a\u7b97\u6cd5\u3001\u7edf\u8ba1\u3001\u6982\u7387\u3001\u51e0\u4f55\u3001\u4ee3\u6570\u7b49\n- \u5de5\u7a0b\u5b66\u76f8\u5173\uff1a\u673a\u68b0\u3001\u7535\u5b50\u3001\u571f\u6728\u3001\u6750\u6599\u3001\u63a7\u5236\u7b49\n- \u73af\u5883\u79d1\u5b66\u76f8\u5173\uff1a\u6c14\u5019\u53d8\u5316\u3001\u6c61\u67d3\u3001\u53ef\u6301\u7eed\u53d1\u5c55\u3001\u751f\u6001\u4fdd\u62a4\u7b49\n- \u5fc3\u7406\u5b66\u76f8\u5173\uff1a\u8ba4\u77e5\u3001\u884c\u4e3a\u3001\u5fc3\u7406\u6cbb\u7597\u3001\u795e\u7ecf\u79d1\u5b66\u7b49\n- \u7ecf\u6d4e\u5b66\u76f8\u5173\uff1a\u91d1\u878d\u3001\u8d38\u6613\u3001\u53d1\u5c55\u3001\u653f\u7b56\u3001\u5e02\u573a\u7b49\n- \u6559\u80b2\u5b66\u76f8\u5173\uff1a\u6559\u5b66\u3001\u5b66\u4e60\u3001\u8bfe\u7a0b\u3001\u8bc4\u4f30\u3001\u6559\u80b2\u6280\u672f\u7b49\n- \u793e\u4f1a\u79d1\u5b66\u76f8\u5173\uff1a\u793e\u4f1a\u5b66\u3001\u653f\u6cbb\u5b66\u3001\u4eba\u7c7b\u5b66\u3001\u4f20\u64ad\u5b66\u7b49\n\n\u793a\u4f8b\u8f6c\u6362\uff1a\n1. \u7528\u6237\u8f93\u5165\uff1a"\u673a\u5668\u5b66\u4e60\u7efc\u8ff0" \u2192 \n   {\n     "query": "machine learning review",\n     "language": "zh",\n     "searchType": "review",\n     "fieldsOfStudy": "Computer Science",\n     "researchDomain": "computer_science"\n   }\n\n2. \u7528\u6237\u8f93\u5165\uff1a"\u6df1\u5ea6\u5b66\u4e60\u5728\u533b\u5b66\u56fe\u50cf\u5206\u6790\u4e2d\u7684\u5e94\u7528\uff0c2020\u5e74\u4ee5\u540e" \u2192\n   {\n     "query": "deep learning medical image analysis",\n     "year": "2020-2024",\n     "language": "zh",\n     "fieldsOfStudy": "Computer Science",\n     "searchType": "academic",\n     "researchDomain": ["computer_science", "medicine"]\n   }\n\n3. \u7528\u6237\u8f93\u5165\uff1a"COVID-19 vaccine effectiveness" \u2192\n   {\n     "query": "COVID-19 vaccine effectiveness",\n     "language": "en",\n     "fieldsOfStudy": "Medicine",\n     "searchType": "academic",\n     "researchDomain": "medicine"\n   }\n\n4. \u7528\u6237\u8f93\u5165\uff1a"CRISPR gene editing" \u2192\n   {\n     "query": "CRISPR gene editing",\n     "language": "en",\n     "fieldsOfStudy": "Biology",\n     "searchType": "academic",\n     "researchDomain": "biology"\n   }\n\n5. \u7528\u6237\u8f93\u5165\uff1a"\u751f\u7269\u4fe1\u606f\u5b66\u5728\u836f\u7269\u53d1\u73b0\u4e2d\u7684\u5e94\u7528" \u2192\n   {\n     "query": "bioinformatics drug discovery",\n     "language": "zh",\n     "fieldsOfStudy": "Biology",\n     "searchType": "academic",\n     "researchDomain": ["biology", "computer_science"]\n   }\n\n6. \u7528\u6237\u8f93\u5165\uff1a"\u73af\u5883\u7ecf\u6d4e\u5b66\u7814\u7a76" \u2192\n   {\n     "query": "environmental economics",\n     "language": "zh",\n     "fieldsOfStudy": "Economics",\n     "searchType": "academic",\n     "researchDomain": ["environmental_science", "economics"]\n   }\n\n\u7528\u6237\u67e5\u8be2\uff1a${e}\n\n\u6ce8\u610f\uff1a\n1. query\u5b57\u6bb5\u5fc5\u987b\u662f\u82f1\u6587\uff0c\u8fd9\u6837\u80fd\u641c\u7d22\u5230\u66f4\u591a\u5b66\u672f\u8bba\u6587\n2. \u5982\u679c\u67d0\u4e2a\u5b57\u6bb5\u65e0\u6cd5\u4ece\u67e5\u8be2\u4e2d\u63d0\u53d6\uff0c\u8bf7\u5c06\u8be5\u5b57\u6bb5\u7559\u7a7a\u6216\u4f7f\u7528\u9ed8\u8ba4\u503c\n3. \u8fd4\u56de\u7684JSON\u5fc5\u987b\u662f\u6709\u6548\u7684JSON\u683c\u5f0f\uff0c\u952e\u540d\u548c\u503c\u90fd\u4f7f\u7528\u53cc\u5f15\u53f7\n4. \u786e\u4fdd\u4e0d\u5728JSON\u4e2d\u6dfb\u52a0\u5176\u4ed6\u63cf\u8ff0\u6216\u8bf4\u660e\u6587\u5b57\n5. researchDomain\u5b57\u6bb5\u5fc5\u987b\u4e25\u683c\u6309\u7167\u4e0a\u8ff0\u56fa\u5b9a\u503c\u8fd4\u56de\uff0c\u4e0d\u80fd\u4f7f\u7528\u5176\u4ed6\u503c\n`;try{const i=await Oo.post(Po,{model:t,messages:[{role:"system",content:"\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u5b66\u672f\u641c\u7d22\u4f18\u5316\u52a9\u624b\uff0c\u4e13\u95e8\u5e2e\u52a9\u7814\u7a76\u4eba\u5458\u5c06\u4efb\u4f55\u8bed\u8a00\u7684\u67e5\u8be2\u8f6c\u6362\u4e3a\u6700\u4f18\u7684\u82f1\u6587\u5b66\u672f\u641c\u7d22\u7b56\u7565\u3002\u4f60\u6df1\u77e5\u82f1\u6587\u662f\u5b66\u672f\u754c\u7684\u901a\u7528\u8bed\u8a00\uff0c\u4f7f\u7528\u82f1\u6587\u5173\u952e\u8bcd\u80fd\u591f\u641c\u7d22\u5230\u66f4\u591a\u9ad8\u8d28\u91cf\u7684\u5b66\u672f\u8bba\u6587\u3002"},{role:"user",content:r}],stream:!1,max_tokens:500});if(!(i.data&&i.data.choices&&i.data.choices.length>0))throw console.error("AI API\u8fd4\u56de\u683c\u5f0f\u4e0d\u6b63\u786e:",i.data),new Error("AI\u4f18\u5316\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u683c\u5f0f\u4e0d\u6b63\u786e");{const r=i.data.choices[0].message.content;try{const a=r.match(/\{[\s\S]*\}/);let i;if(a){const e=a[0];i=JSON.parse(e)}else i=JSON.parse(r);const o=Date.now()-n;return To.logApiCall("optimizeSearchQuery","ai",!0,o,null,{originalQuery:e,optimizedQuery:i.query,model:t,resultLength:r.length}),i}catch(a){const i=Date.now()-n;throw To.logApiCall("optimizeSearchQuery","ai",!1,i,`\u89e3\u6790\u5931\u8d25: ${a.message}`,{originalQuery:e,model:t,rawResult:r}),console.error("\u65e0\u6cd5\u89e3\u6790AI\u8fd4\u56de\u7684JSON:",a),new Error("\u65e0\u6cd5\u89e3\u6790AI\u8fd4\u56de\u7684\u641c\u7d22\u53c2\u6570")}}}catch(i){const r=Date.now()-n;throw To.logApiCall("optimizeSearchQuery","ai",!1,r,i.message,{originalQuery:e,model:t}),console.error(`AI\u4f18\u5316\u67e5\u8be2\u5931\u8d25 (\u6a21\u578b: ${t}):`,i),i.response&&(console.error("\u54cd\u5e94\u72b6\u6001:",i.response.status),console.error("\u54cd\u5e94\u6570\u636e:",i.response.data)),new Error(`AI\u4f18\u5316\u67e5\u8be2\u5931\u8d25: ${i.message}`)}},Do=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Io;if(!e||!e.title)throw new Error("\u8bba\u6587\u5bf9\u8c61\u6216\u6807\u9898\u4e0d\u80fd\u4e3a\u7a7a");Object.values(Ao).includes(t)||(console.warn(`\u672a\u77e5\u7684\u6a21\u578b: ${t}\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6a21\u578b: ${Io}`),t=Io);let n=`\u6807\u9898\uff1a${e.title}`;e.abstract&&e.abstract.trim()&&(n+=`\n\n\u6458\u8981\uff1a${e.abstract}`),e.tldr&&e.tldr.text&&e.tldr.text.trim()&&(n+=`\n\nAI\u6458\u8981\uff1a${e.tldr.text}`);const r=`\u8bf7\u5c06\u4ee5\u4e0b\u82f1\u6587\u5b66\u672f\u8bba\u6587\u5185\u5bb9\u7ffb\u8bd1\u4e3a\u4e2d\u6587\uff0c\u8981\u6c42\uff1a\n1. \u7ffb\u8bd1\u8981\u51c6\u786e\u3001\u4e13\u4e1a\u3001\u7b26\u5408\u4e2d\u6587\u5b66\u672f\u8868\u8fbe\u4e60\u60ef\n2. \u4fdd\u6301\u539f\u6587\u7684\u5b66\u672f\u6027\u548c\u4e13\u4e1a\u6027\n3. \u4fdd\u6301\u539f\u6709\u7684\u683c\u5f0f\u7ed3\u6784\n4. \u5982\u679c\u5305\u542b\u4e13\u4e1a\u672f\u8bed\uff0c\u8bf7\u4f7f\u7528\u6807\u51c6\u7684\u4e2d\u6587\u5b66\u672f\u672f\u8bed\n5. \u8bf7\u6309\u7167\u4ee5\u4e0b\u683c\u5f0f\u8fd4\u56de\u7ffb\u8bd1\u7ed3\u679c\uff1a\n\n\u6807\u9898\uff1a[\u7ffb\u8bd1\u540e\u7684\u6807\u9898]\n\u6458\u8981\uff1a[\u7ffb\u8bd1\u540e\u7684\u6458\u8981]\nAI\u6458\u8981\uff1a[\u7ffb\u8bd1\u540e\u7684AI\u6458\u8981]\n\n\u5982\u679c\u67d0\u4e2a\u90e8\u5206\u5728\u539f\u6587\u4e2d\u4e0d\u5b58\u5728\uff0c\u8bf7\u5728\u5bf9\u5e94\u4f4d\u7f6e\u8fd4\u56de"\u65e0"\u3002\n\n\u539f\u6587\u5185\u5bb9\uff1a\n${n}`;try{const n=await Oo.post(Po,{model:t,messages:[{role:"system",content:"\u4f60\u662f\u4e00\u4e2a\u4e13\u4e1a\u7684\u5b66\u672f\u7ffb\u8bd1\u52a9\u624b\uff0c\u64c5\u957f\u5c06\u82f1\u6587\u5b66\u672f\u8bba\u6587\u5185\u5bb9\u51c6\u786e\u7ffb\u8bd1\u4e3a\u4e2d\u6587\u3002\u4f60\u719f\u6089\u5404\u4e2a\u5b66\u79d1\u7684\u4e13\u4e1a\u672f\u8bed\uff0c\u80fd\u591f\u63d0\u4f9b\u51c6\u786e\u3001\u5730\u9053\u7684\u4e2d\u6587\u7ffb\u8bd1\u3002"},{role:"user",content:r}],stream:!1,max_tokens:1e3});if(n.data&&n.data.choices&&n.data.choices.length>0){var a;const r=n.data.choices[0].message.content.trim(),i={originalTitle:e.title,translatedTitle:null,originalAbstract:e.abstract||null,translatedAbstract:null,originalSnippet:(null===(a=e.tldr)||void 0===a?void 0:a.text)||null,translatedSnippet:null,model:t},o=r.match(/\u6807\u9898\uff1a(.+?)(?=\n|$)/);o&&(i.translatedTitle=o[1].trim());const s=r.match(/\u6458\u8981\uff1a(.+?)(?=\nAI\u6458\u8981\uff1a|$)/s);s&&"\u65e0"!==s[1].trim()&&(i.translatedAbstract=s[1].trim());const l=r.match(/AI\u6458\u8981\uff1a(.+?)$/s);return l&&"\u65e0"!==l[1].trim()&&(i.translatedSnippet=l[1].trim()),i}throw console.error("AI API\u8fd4\u56de\u683c\u5f0f\u4e0d\u6b63\u786e:",n.data),new Error("AI\u7ffb\u8bd1\u8fd4\u56de\u7ed3\u679c\u683c\u5f0f\u4e0d\u6b63\u786e")}catch(i){throw console.error(`AI\u7ffb\u8bd1\u5931\u8d25 (\u6a21\u578b: ${t}):`,i),i.response&&(console.error("\u54cd\u5e94\u72b6\u6001:",i.response.status),console.error("\u54cd\u5e94\u6570\u636e:",i.response.data)),new Error(`AI\u7ffb\u8bd1\u5931\u8d25: ${i.message}`)}},Mo=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Io;if(!e||0===e.length)throw new Error("\u6ca1\u6709\u8bba\u6587\u53ef\u4f9b\u7ffb\u8bd1");Object.values(Ao).includes(n)||(console.warn(`\u672a\u77e5\u7684\u6a21\u578b: ${n}\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6a21\u578b: ${Io}`),n=Io);let r=!1;Mo.cancel=()=>{r=!0};try{const a=3;let i=0,o=0,s=0;e.length;for(;(o<e.length||i>0)&&!r;){for(;o<e.length&&i<a;){const a=e[o],l=o;i++,o++,(async(e,a)=>{try{if(r)return;const i=await Do(e,n);if(r)return;t&&t(a,{paperId:e.paperId,...i}),s++}catch(l){var o;if(console.error(`\u7ffb\u8bd1\u8bba\u6587\u5185\u5bb9\u65f6\u51fa\u9519 ${e.title}:`,l),t)t(a,{paperId:e.paperId,originalTitle:e.title,translatedTitle:`\u7ffb\u8bd1\u5931\u8d25: ${l.message}`,originalAbstract:e.abstract||null,translatedAbstract:null,originalSnippet:(null===(o=e.tldr)||void 0===o?void 0:o.text)||null,translatedSnippet:null,model:n,error:!0});s++}finally{i--}})(a,l)}await new Promise(e=>setTimeout(e,100))}}finally{Mo.cancel=null}};Mo.cancel=null;const Fo={semantic:{name:"3rd api",fields:[{key:"year",label:"\u53d1\u8868\u5e74\u4efd",type:"text",placeholder:"\u4f8b\u5982\uff1a2020-2024 \u6216 2023",icon:"calendar",category:"basic"},{key:"minCitationCount",label:"\u6700\u5c0f\u5f15\u7528\u6570",type:"number",placeholder:"\u4f8b\u5982\uff1a10",icon:"trending-up",category:"basic"},{key:"fieldsOfStudy",label:"\u7814\u7a76\u9886\u57df",type:"select",options:[{value:"",label:"\u6240\u6709\u9886\u57df"},{value:"Computer Science",label:"\u8ba1\u7b97\u673a\u79d1\u5b66"},{value:"Medicine",label:"\u533b\u5b66"},{value:"Biology",label:"\u751f\u7269\u5b66"},{value:"Physics",label:"\u7269\u7406\u5b66"},{value:"Mathematics",label:"\u6570\u5b66"},{value:"Chemistry",label:"\u5316\u5b66"},{value:"Economics",label:"\u7ecf\u6d4e\u5b66"},{value:"Psychology",label:"\u5fc3\u7406\u5b66"},{value:"Engineering",label:"\u5de5\u7a0b\u5b66"},{value:"Materials Science",label:"\u6750\u6599\u79d1\u5b66"},{value:"Environmental Science",label:"\u73af\u5883\u79d1\u5b66"},{value:"Political Science",label:"\u653f\u6cbb\u5b66"},{value:"Sociology",label:"\u793e\u4f1a\u5b66"},{value:"Philosophy",label:"\u54f2\u5b66"}],icon:"book",category:"advanced"},{key:"venue",label:"\u671f\u520a/\u4f1a\u8bae",type:"text",placeholder:"\u4f8b\u5982\uff1aNature, Science, ICML",icon:"briefcase",category:"advanced"},{key:"openAccessPdf",label:"\u5f00\u653e\u83b7\u53d6",type:"select",options:[{value:"",label:"\u5168\u90e8"},{value:"true",label:"\u4ec5\u5f00\u653e\u83b7\u53d6"},{value:"false",label:"\u4ec5\u975e\u5f00\u653e\u83b7\u53d6"}],icon:"lock",category:"advanced"},{key:"sort",label:"\u6392\u5e8f\u65b9\u5f0f",type:"select",options:[{value:"relevance",label:"\u76f8\u5173\u6027"},{value:"citationCount",label:"\u5f15\u7528\u6570"},{value:"publicationDate",label:"\u53d1\u8868\u65e5\u671f"}],icon:"sort",category:"basic"}]},googleScholar:{name:"Google Scholar",fields:[{key:"as_ylo",label:"\u8d77\u59cb\u5e74\u4efd",type:"number",placeholder:"\u4f8b\u5982\uff1a2020",icon:"calendar",category:"basic"},{key:"as_yhi",label:"\u7ed3\u675f\u5e74\u4efd",type:"number",placeholder:"\u4f8b\u5982\uff1a2024",icon:"calendar",category:"basic"},{key:"language",label:"\u8bed\u8a00",type:"select",options:[{value:"en",label:"\u82f1\u8bed"},{value:"zh",label:"\u4e2d\u6587"},{value:"es",label:"\u897f\u73ed\u7259\u8bed"},{value:"fr",label:"\u6cd5\u8bed"},{value:"de",label:"\u5fb7\u8bed"},{value:"ja",label:"\u65e5\u8bed"},{value:"ko",label:"\u97e9\u8bed"},{value:"pt",label:"\u8461\u8404\u7259\u8bed"},{value:"ru",label:"\u4fc4\u8bed"},{value:"it",label:"\u610f\u5927\u5229\u8bed"}],icon:"globe",category:"basic"},{key:"as_sdt",label:"\u641c\u7d22\u7c7b\u578b",type:"select",options:[{value:"0",label:"\u5b66\u672f\u6587\u7ae0\uff08\u6392\u9664\u4e13\u5229\uff09"},{value:"7",label:"\u5305\u542b\u4e13\u5229"},{value:"4",label:"\u6848\u4f8b\u6cd5\uff08\u4ec5\u7f8e\u56fd\u6cd5\u9662\uff09"}],icon:"file-text",category:"advanced"},{key:"safe",label:"\u5b89\u5168\u641c\u7d22",type:"select",options:[{value:"off",label:"\u5173\u95ed"},{value:"active",label:"\u5f00\u542f"}],icon:"shield",category:"advanced"},{key:"filter",label:"\u7ed3\u679c\u8fc7\u6ee4",type:"select",options:[{value:"1",label:"\u542f\u7528\uff08\u8fc7\u6ee4\u76f8\u4f3c\u548c\u7701\u7565\u7ed3\u679c\uff09"},{value:"0",label:"\u7981\u7528"}],icon:"filter",category:"advanced"},{key:"as_vis",label:"\u5f15\u7528\u663e\u793a",type:"select",options:[{value:"0",label:"\u5305\u542b\u5f15\u7528"},{value:"1",label:"\u6392\u9664\u5f15\u7528"}],icon:"quote",category:"advanced"},{key:"as_rr",label:"\u6587\u7ae0\u7c7b\u578b",type:"select",options:[{value:"0",label:"\u6240\u6709\u6587\u7ae0"},{value:"1",label:"\u4ec5\u7efc\u8ff0\u6587\u7ae0"}],icon:"layers",category:"advanced"}]},primaryScraping:{name:"Primary Scraping Scholar",fields:[{key:"start_year",label:"\u8d77\u59cb\u5e74\u4efd",type:"number",placeholder:"\u4f8b\u5982\uff1a2020",icon:"calendar",category:"basic"},{key:"end_year",label:"\u7ed3\u675f\u5e74\u4efd",type:"number",placeholder:"\u4f8b\u5982\uff1a2024",icon:"calendar",category:"basic"},{key:"language",label:"\u8bed\u8a00",type:"select",options:[{value:"en",label:"\u82f1\u8bed"},{value:"zh-CN",label:"\u4e2d\u6587\u7b80\u4f53"},{value:"zh-TW",label:"\u4e2d\u6587\u7e41\u4f53"},{value:"es",label:"\u897f\u73ed\u7259\u8bed"},{value:"fr",label:"\u6cd5\u8bed"},{value:"de",label:"\u5fb7\u8bed"},{value:"ja",label:"\u65e5\u8bed"},{value:"ko",label:"\u97e9\u8bed"},{value:"pt",label:"\u8461\u8404\u7259\u8bed"},{value:"ru",label:"\u4fc4\u8bed"},{value:"it",label:"\u610f\u5927\u5229\u8bed"}],icon:"globe",category:"basic"},{key:"sort_by",label:"\u6392\u5e8f\u65b9\u5f0f",type:"select",options:[{value:"relevance",label:"\u76f8\u5173\u6027"},{value:"date",label:"\u53d1\u8868\u65e5\u671f"},{value:"cited_by",label:"\u5f15\u7528\u6570"}],icon:"sort",category:"basic"}]},pubmed:{name:"PubMed",disabled:!0,fields:[{key:"publication_date",label:"\u53d1\u8868\u65e5\u671f",type:"text",placeholder:"\u4f8b\u5982\uff1a2020-2024",icon:"calendar",category:"basic"},{key:"article_type",label:"\u6587\u7ae0\u7c7b\u578b",type:"select",options:[{value:"",label:"\u6240\u6709\u7c7b\u578b"},{value:"research",label:"\u7814\u7a76\u6587\u7ae0"},{value:"review",label:"\u7efc\u8ff0"},{value:"meta-analysis",label:"\u835f\u8403\u5206\u6790"}],icon:"file-text",category:"basic"}]}},Bo=e=>({calendar:"\ud83d\udcc5","trending-up":"\ud83d\udcc8",book:"\ud83d\udcda",briefcase:"\ud83d\udcbc",lock:"\ud83d\udd12",sort:"\ud83d\udd04",globe:"\ud83c\udf10","file-text":"\ud83d\udcc4",shield:"\ud83d\udee1\ufe0f",filter:"\ud83d\udd0d",quote:"\ud83d\udcac",layers:"\ud83d\udcd1"}[e]||"\u2699\ufe0f"),Uo=(e,t)=>{const n={};switch(t){case"semantic":e.year&&(n.year=e.year),e.minCitationCount&&""!==e.minCitationCount&&(n.minCitationCount=parseInt(e.minCitationCount)),e.fieldsOfStudy&&(n.fieldsOfStudy=e.fieldsOfStudy),e.venue&&(n.venue=e.venue),void 0!==e.openAccessPdf&&""!==e.openAccessPdf&&(n.openAccessPdf="true"===e.openAccessPdf),e.sort&&(n.sort=e.sort);break;case"googleScholar":e.as_ylo&&(n.as_ylo=e.as_ylo),e.as_yhi&&(n.as_yhi=e.as_yhi),e.language&&(n.language=e.language),e.as_sdt&&(n.as_sdt=e.as_sdt),e.safe&&(n.safe=e.safe),e.filter&&(n.filter=e.filter),e.as_vis&&(n.as_vis=e.as_vis),e.as_rr&&(n.as_rr=e.as_rr);break;case"primaryScraping":e.start_year&&(n.start_year=e.start_year),e.end_year&&(n.end_year=e.end_year),e.language&&(n.language=e.language),e.sort_by&&(n.sort_by=e.sort_by);break;default:return{}}return n};var Wo=n(325);const qo=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!==typeof window&&"function"===typeof window.gtag)try{window.gtag("event",e,{custom_map:{custom_parameter:"cp1"},...t})}catch(n){console.error("Error tracking event:",n)}},Ko=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const i=Object.entries(a).filter(e=>{let[t,n]=e;return n&&""!==n&&"relevance"!==n}),o=i.map(e=>{let[t,n]=e;return`${t}:${n}`}).join(",");qo("search",{search_term:e,data_source:t,results_count:n,search_time_ms:r,filters_used:o||"none",filter_count:i.length,event_category:"search",event_label:`${t}_search`,custom_parameter_1:t,custom_parameter_2:e.length,custom_parameter_3:n})},Ho=function(e,t,n,r){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const i=Object.entries(a).filter(e=>{let[t,n]=e;return n&&""!==n&&"relevance"!==n});qo("datasource_search",{search_term:t,data_source:e,results_count:n,search_duration:r,query_length:t.length,has_filters:i.length>0,filter_count:i.length,event_category:"datasource",event_label:`${e}_detailed_search`,source_type:e,success:n>0?"true":"false"}),qo(`${e}_usage`,{action:"search_executed",query:t,results:n,time_ms:r,event_category:"datasource_usage",event_label:e})},Yo=(e,t,n)=>{qo("ai_search_optimization",{original_query:e,optimized_query:t,ai_model:n,event_category:"ai",event_label:"query_optimization"})},Vo=(e,t)=>{qo("external_link_click",{url:e,link_type:t,event_category:"external",event_label:t})},Go=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";qo("error",{error_type:e,error_message:(null===t||void 0===t?void 0:t.substring(0,100))||"Unknown error",context:n,event_category:"error",event_label:e})},Qo=function(e){qo("user_behavior",{action:e,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},event_category:"behavior",event_label:e})},Xo=function(e,t){qo("feature_usage",{feature:e,action:t,value:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,event_category:"feature",event_label:`${e}_${t}`})};let Jo=!1;const Zo=()=>{if("undefined"===typeof window||Jo)return;Jo=!0,window.addEventListener("load",()=>{const e=performance.now();(e=>{qo("page_view",{page_load_time:e,event_category:"navigation",event_label:"page_load"})})(Math.round(e))});let e=Date.now();window.addEventListener("beforeunload",()=>{(e=>{qo("page_time",{time_spent:e,event_category:"engagement",event_label:"page_duration"})})(Math.round((Date.now()-e)/1e3))});let t,n=0,r={25:!1,50:!1,75:!1,100:!1};window.addEventListener("scroll",()=>{t||(t=setTimeout(()=>{const e=Math.round(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100);e>n&&(n=e,e>=25&&!r[25]?(r[25]=!0,Qo("scroll_25")):e>=50&&!r[50]?(r[50]=!0,Qo("scroll_50")):e>=75&&!r[75]?(r[75]=!0,Qo("scroll_75")):e>=100&&!r[100]&&(r[100]=!0,Qo("scroll_100"))),t=null},100))},{passive:!0})};var es=n(579);const ts=Le.div`
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 4px 25px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(226, 232, 240, 0.6);
  z-index: 5;
  
  /* 当在UsageInstructions内部时，无最大宽度限制 */
  /* 当独立显示时，添加合适的最大宽度 */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  /* 支持变体样式 - 当在UsageInstructions中使用时的装饰效果 */
  ${e=>"welcome"===e.$variant&&"\n    background: linear-gradient(135deg, rgba(93, 173, 226, 0.1), rgba(84, 153, 199, 0.1));\n    padding: 25px;\n    border-radius: 15px;\n    border: 3px solid #007acc;\n    box-shadow: \n      0 8px 32px rgba(0, 122, 204, 0.15),\n      inset 0 0 20px rgba(255, 255, 255, 0.5);\n    backdrop-filter: blur(10px);\n    \n    /* \u6dfb\u52a0\u5fae\u5999\u7684\u5149\u6655\u6548\u679c */\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: linear-gradient(135deg, \n        rgba(0, 122, 204, 0.03) 0%, \n        rgba(52, 152, 219, 0.03) 50%, \n        rgba(0, 122, 204, 0.03) 100%);\n      border-radius: 12px;\n      pointer-events: none;\n      z-index: -1;\n    }\n    \n    @media (max-width: 768px) {\n      padding: 20px;\n    }\n    \n    @media (max-width: 480px) {\n      padding: 16px;\n    }\n  "}
  
  @media (max-width: 768px) {
    border-width: 1.5px;
    border-radius: 12px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 8px;
    margin-left: 2px;
    margin-right: 2px;
    box-shadow: 
      0 2px 15px rgba(0, 0, 0, 0.06),
      0 1px 2px rgba(0, 0, 0, 0.04);
  }
  
  /* 添加AI完成时的成功效果 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
    opacity: 0;
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
  }
  
  ${e=>e.$aiCompleted&&"\n    &::after {\n      opacity: 1;\n      animation: successPulse 1.5s ease-out;\n    }\n    \n    @keyframes successPulse {\n      0% {\n        opacity: 0;\n        transform: scale(0.8);\n      }\n      50% {\n        opacity: 1;\n        transform: scale(1.02);\n      }\n      100% {\n        opacity: 0;\n        transform: scale(1.05);\n      }\n    }\n  "}
`,ns=Le.div`
  padding: 20px 24px 16px 24px; /* 减少padding让搜索区域更紧凑 */
  background: linear-gradient(135deg, #fbfcfd 0%, #f6f7f8 100%);
  border-bottom: 2px solid rgba(226, 232, 240, 0.4);
  position: relative;
  z-index: 1;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  
  /* 当筛选器关闭时，底部也有圆角 */
  ${e=>!e.$showFilters&&"\n    border-bottom: none;\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n  "}
  
  @media (max-width: 768px) {
    padding: 14px 16px 10px 16px;
    border-bottom-width: 1.5px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    
    ${e=>!e.$showFilters&&"\n      border-bottom: none;\n      border-bottom-left-radius: 12px;\n      border-bottom-right-radius: 12px;\n    "}
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px 6px 12px;
    border-bottom-width: 1px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    
    ${e=>!e.$showFilters&&"\n      border-bottom: none;\n      border-bottom-left-radius: 8px;\n      border-bottom-right-radius: 8px;\n    "}
  }
`,rs=Le.div`
  position: relative;
  flex: 1;
`,as=Le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  min-height: 80px; /* 确保容器有足够高度容纳不同状态的按钮 */
  
  /* 隐藏移动端数据源选择器（PC端不显示） */
  .mobile-datasource-tabs,
  .mobile-datasource-select {
    display: none;
  }
  
  @media (max-width: 768px) {
    min-height: 60px;
  }
`,is=Le.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    flex: 1;
    justify-content: flex-end;
    gap: 8px;
  }
`,os=Le.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  
  /* 当显示Shift+Enter时的键盘按键样式 */
  ${e=>e.$shiftPressed?`\n    width: 80px;\n    height: 50px;\n    background: linear-gradient(145deg, #374151 0%, #1f2937 100%);\n    border: 3px solid #4b5563;\n    border-bottom: 4px solid #374151;\n    border-right: 3px solid #4b5563;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n    font-weight: 700;\n    color: #f9fafb;\n    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);\n    transform: ${e.$isPressed?"scale(0.95)":"scale(1)"};\n    box-shadow: \n      0 ${e.$isPressed?"2px":"4px"} 8px rgba(0, 0, 0, 0.15),\n      inset 0 1px 0 rgba(255, 255, 255, 0.3);\n    user-select: none;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n    \n    /* \u6309\u952e\u6587\u5b57 */\n    &::before {\n      content: 'Enter\u21a9 ';\n      letter-spacing: 0.5px;\n    }\n    \n    /* Shift\u6309\u4e0b\u65f6\u7684\u547c\u5438\u6548\u679c */\n    animation: enterBreathing 2s ease-in-out infinite;\n    \n    @keyframes enterBreathing {\n      0% {\n        box-shadow: \n          0 4px 8px rgba(0, 0, 0, 0.15),\n          0 0 0 3px rgba(34, 197, 94, 0.3),\n          inset 0 1px 0 rgba(255, 255, 255, 0.3);\n        transform: scale(1);\n      }\n      50% {\n        box-shadow: \n          0 6px 12px rgba(0, 0, 0, 0.2),\n          0 0 0 5px rgba(34, 197, 94, 0.5),\n          inset 0 1px 0 rgba(255, 255, 255, 0.15);\n        transform: scale(1.02);\n      }\n      100% {\n        box-shadow: \n          0 4px 8px rgba(0, 0, 0, 0.15),\n          0 0 0 3px rgba(34, 197, 94, 0.3),\n          inset 0 1px 0 rgba(255, 255, 255, 0.3);\n        transform: scale(1);\n      }\n    }\n    \n    &:hover {\n        transform: scale(1.08);\n        background: linear-gradient(145deg, #4b5563 0%, #374151 100%);\n        box-shadow: \n          0 6px 12px rgba(0, 0, 0, 0.3),\n          inset 0 1px 0 rgba(255, 255, 255, 0.15);\n    }\n    \n    &:active {\n        transform: scale(0.92);\n      background: linear-gradient(145deg, #1f2937 0%, #111827 100%);\n      border-bottom: 2px solid #374151;\n      box-shadow: \n        0 2px 4px rgba(0, 0, 0, 0.2),\n        inset 0 1px 0 rgba(255, 255, 255, 0.05);\n    }\n    \n    @media (max-width: 768px) {\n      width: 50px;\n      height: 32px;\n        font-size: 10px;\n        border-width: 2px;\n        border-radius: 6px;\n        transform: ${e.$isPressed?"scale(0.95)":"scale(1)"};\n      \n      &:hover {\n          transform: scale(1.08);\n      }\n      \n      &:active {\n          transform: scale(0.92);\n        }\n      }\n      \n      @media (max-width: 480px) {\n        width: 45px;\n        height: 28px;\n        font-size: 9px;\n        border-width: 1.5px;\n        border-radius: 4px;\n        \n        &::before {\n          content: 'Enter';\n          letter-spacing: 0.2px;\n        }\n        \n        &:hover {\n          transform: scale(1.05);\n        }\n        \n        &:active {\n          transform: scale(0.95);\n      }\n    }\n    `:`\n     /* \u5f53\u663e\u793a\u641c\u7d22\u6309\u94ae\u65f6\u7684\u6837\u5f0f */\n     padding: 16px 28px;\n       background: linear-gradient(135deg, #374151, #4b5563);\n     color: white;\n       border: 2px solid #374151;\n       border-radius: 6px;\n     font-size: 15px;\n     font-weight: 600;\n       box-shadow: 0 4px 15px rgba(55, 65, 81, 0.25);\n     transform: ${e.$isPressed?"scale(0.95)":"scale(1)"};\n     display: flex;\n     align-items: center;\n     justify-content: center;\n     gap: 8px;\n     min-width: 100px;\n     height: 52px;\n     user-select: none;\n     \n     &:hover {\n       transform: scale(1.05);\n         box-shadow: 0 6px 25px rgba(55, 65, 81, 0.35);\n         background: linear-gradient(135deg, #1f2937, #374151);\n         border-color: #1f2937;\n     }\n     \n     &:active {\n       transform: scale(0.95);\n         box-shadow: 0 2px 10px rgba(55, 65, 81, 0.25);\n     }\n     \n     @media (max-width: 768px) {\n       padding: 15px 24px;\n       font-size: 14px;\n       min-width: 90px;\n       height: 50px;\n       gap: 6px;\n       border-width: 1.5px;\n     }\n     \n     @media (max-width: 480px) {\n       padding: 13px 18px;\n       font-size: 13px;\n       min-width: 80px;\n       height: 45px;\n       gap: 4px;\n       border-radius: 4px;\n       border-width: 1px;\n     }\n   `}
`,ss=Le.div`
  display: ${e=>e.$visible?"flex":"none"};
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #374151;
  pointer-events: none;
  text-shadow: 0 0 8px rgba(55, 65, 81, 0.6);
  min-width: 20px;
  
  ${e=>e.$visible&&"\n    animation: plusAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards, plusPulse 1.5s ease-in-out 0.3s infinite;\n    \n    @keyframes plusAppear {\n      0% {\n        opacity: 0;\n        transform: scale(0.5);\n      }\n      100% {\n        opacity: 1;\n        transform: scale(1);\n      }\n    }\n    \n    @keyframes plusPulse {\n      0% {\n        transform: scale(1);\n        opacity: 0.8;\n      }\n      50% {\n        transform: scale(1.3);\n        opacity: 1;\n      }\n      100% {\n        transform: scale(1);\n        opacity: 0.8;\n      }\n    }\n  "}
  
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: 16px;
  }
`,ls=Le.div`
  position: relative;
  width: 80px;
  height: 50px;
  background: linear-gradient(145deg, #374151 0%, #1f2937 100%);
  border: 3px solid #4b5563;
  border-bottom: 4px solid #374151;
  border-right: 3px solid #4b5563;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: ${e=>e.$isPressed?"flex":"none"};
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #f9fafb;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  opacity: 1;
  transform: ${e=>e.$isPressed?"scale(0.95)":"scale(1)"};
  box-shadow: 
    0 3px 6px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* 按键文字 */
  &::before {
    content: '⇧ Shift';
    letter-spacing: 0.3px;
  }
  
  &:hover {
    transform: scale(1.08);
    background: linear-gradient(145deg, #4b5563 0%, #374151 100%);
    box-shadow: 
      0 4px 8px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  
  &:active {
    transform: scale(0.92);
    background: linear-gradient(145deg, #1f2937 0%, #111827 100%);
    border-bottom: 2px solid #374151;
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  
  /* Shift 按下时的出现和发光效果 */
  ${e=>e.$isPressed&&"\n    animation: shiftAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards, shiftGlow 1.8s ease-in-out 0.3s infinite alternate;\n    \n    @keyframes shiftAppear {\n      0% {\n        opacity: 0;\n        transform: scale(0.8);\n      }\n      100% {\n        opacity: 1;\n        transform: scale(1);\n      }\n    }\n    \n    @keyframes shiftGlow {\n      0% { \n          box-shadow: \n            0 3px 6px rgba(0, 0, 0, 0.15),\n            0 0 0 2px rgba(34, 197, 94, 0.3),\n            inset 0 1px 0 rgba(255, 255, 255, 0.1);\n        transform: scale(1);\n      }\n      100% { \n          box-shadow: \n            0 4px 8px rgba(0, 0, 0, 0.2),\n            0 0 0 4px rgba(34, 197, 94, 0.5),\n            inset 0 1px 0 rgba(255, 255, 255, 0.15);\n        transform: scale(1.01);\n      }\n    }\n  "}
  
  @media (max-width: 768px) {
      width: 50px;
      height: 32px;
      font-size: 10px;
      border-width: 2px;
      border-radius: 6px;
      
      &::before {
        content: '⇧ Shift';
      }
    }
    
    @media (max-width: 480px) {
      width: 45px;
      height: 28px;
      font-size: 9px;
      border-width: 1.5px;
      border-radius: 4px;
      
      &::before {
        content: '⇧';
        letter-spacing: 0px;
      }
  }
`,cs=Le.div`
  position: absolute;
  right: 20px; /* 调整位置，因为删除了AI按钮 */
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #6c757d;
  pointer-events: none;
  z-index: 3;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 6px;
  backdrop-filter: blur(2px);
  
  .hint-text {
    white-space: nowrap;
    font-weight: 500;
  }
  
  .shift-key-text {
    font-weight: 700;
    color: #374151;
    padding: 2px 6px;
    background: rgba(55, 65, 81, 0.1);
    border: 1px solid rgba(55, 65, 81, 0.3);
    border-radius: 4px;
    font-size: 11px;
    margin: 0 3px;
  }
  
      @media (max-width: 768px) {
      font-size: 12px;
      right: 16px; /* 移动端也调整位置 */
      
      .shift-key-text {
        font-size: 10px;
        padding: 1px 4px;
      }
    }
  
  @media (max-width: 480px) {
    display: none; // 在很小的屏幕上隐藏提示
  }
`,ds=(Le.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  padding: 8px 16px;
  
  @media (max-width: 768px) {
    margin-top: 8px;
    padding: 6px 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 6px;
    padding: 4px 8px;
  }
`,Le.span`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`,Le.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background: ${e=>e.$checked?"#22c55e":"#d1d5db"};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.$checked?"#16a34a":"#9ca3af"};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${e=>e.$checked?"22px":"2px"};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      background: ${e=>e.$checked?"#22c55e":"#d1d5db"};
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 22px;
    
    &::after {
      width: 18px;
      height: 18px;
      left: ${e=>e.$checked?"20px":"2px"};
    }
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 20px;
    
    &::after {
      width: 16px;
      height: 16px;
      left: ${e=>e.$checked?"18px":"2px"};
    }
  }
`,Le.input`
  opacity: 0;
  width: 0;
  height: 0;
`),us=Le.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  
  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 4px 8px;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 3px 6px;
    gap: 4px;
  }
`,ps=Le.span`
  font-size: 12px;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`,fs=Le.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  background: ${e=>e.$checked?"#22c55e":"#d1d5db"};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.$checked?"#16a34a":"#9ca3af"};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${e=>e.$checked?"18px":"2px"};
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      background: ${e=>e.$checked?"#22c55e":"#d1d5db"};
    }
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 18px;
    
    &::after {
      width: 14px;
      height: 14px;
      left: ${e=>e.$checked?"16px":"2px"};
    }
  }
  
  @media (max-width: 480px) {
    width: 28px;
    height: 16px;
    
    &::after {
      width: 12px;
      height: 12px;
      left: ${e=>e.$checked?"14px":"2px"};
    }
  }
`,hs=Le.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  transform: none;
  background: #2d3748;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
  white-space: normal;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  text-align: center;
  min-width: 200px;
  max-width: 280px;
  
  /* 小箭头 */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #2d3748;
  }
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 8px 12px;
    margin-bottom: 8px;
    min-width: 180px;
    max-width: 240px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 6px 10px;
    margin-bottom: 6px;
    min-width: 160px;
    max-width: 200px;
  }
`,gs=Le.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #856404;
  opacity: ${e=>e.$visible?1:0};
  transform: translateY(${e=>e.$visible?"0":"-10px"});
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${e=>e.$visible?"auto":"none"};
  
  .alert-icon {
    color: #f39c12;
    flex-shrink: 0;
  }
  
  .alert-text {
    flex: 1;
    line-height: 1.4;
  }
  
  .alert-close {
    background: none;
    border: none;
    color: #856404;
    cursor: pointer;
    padding: 2px;
    border-radius: 3px;
    transition: background-color 0.2s ease;
    
    &:hover {
      background: rgba(133, 100, 4, 0.1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`,xs=Le.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px; /* 减少底部间距 */
  
  /* PC端默认布局：筛选-输入框-搜索按钮 */
    .filter-toggle-left {
      order: 1;
    }
    
    .search-input-wrapper {
      order: 2;
    }
    
    .search-button-group {
      order: 3;
    
    .filter-toggle-left {
      display: none; /* PC端隐藏搜索按钮组内的筛选按钮 */
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    
    /* 隐藏左侧独立的筛选按钮 */
    > .filter-toggle-left {
      display: none;
    }
    
    .search-input-wrapper {
      order: 1; /* 输入框优先显示 */
    }
    
    .search-button-group {
      order: 2;
      display: flex;
      gap: 12px;
      
      /* 显示搜索按钮组内的筛选按钮 */
      .filter-toggle-left {
        display: flex;
        padding: 14px 16px;
        font-size: 13px;
      }
      
      button {
        flex: 1;
        padding: 16px 20px;
        font-size: 15px;
      }
    }
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 6px; /* 减少移动端底部间距 */
    
    /* 隐藏左侧独立的筛选按钮 */
    > .filter-toggle-left {
      display: none;
    }
    
    .search-input-wrapper {
      order: 1;
      width: 100%;
    }
    
    .search-button-group {
      order: 2;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      
      /* 筛选按钮紧凑显示在左侧 */
    .filter-toggle-left {
        display: flex !important; /* 强制显示 */
        order: 1; /* 左侧 */
        flex: 0 0 44px; /* 固定宽度，只显示图标 */
        padding: 10px 6px;
        font-size: 16px;
        min-height: 40px;
        width: 44px;
        justify-content: center;
        align-items: center;
      
      .filter-text {
          display: none; /* 隐藏文字 */
      }
      
      .filter-icon {
        margin-right: 0;
      }
    }
    
      /* 移动端数据源下拉菜单 */
      .mobile-datasource-select {
        display: flex !important;
        order: 2; /* 中间 */
        
        select {
          flex: 1;
          min-width: 100px;
          max-width: 140px;
          height: 40px;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          background: white;
          color: #374151;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          padding-right: 28px;
          
          &:hover:not(:disabled) {
            background-color: #f8f9fa;
            border-color: #adb5bd;
          }
          
          &:focus {
            outline: none;
            border-color: #007acc;
            box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
          }
          
          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: #f9fafb;
            color: #9ca3af;
          }
        }
      }
      
      /* 搜索按钮占主要空间，显示在右侧 */
      .key-prompt-container {
        order: 3; /* 右侧 */
        flex: 1; /* 占剩余空间 */
        display: flex;
        justify-content: flex-end;
        
        /* 确保Enter按钮在右侧且占据合适的空间 */
      button {
          flex: 1;
          max-width: 120px; /* 限制最大宽度 */
          padding: 10px 14px;
          font-size: 14px;
          min-height: 40px;
        }
      }
    }
  }
`,ms=Ne`
  0% {
    opacity: 0;
    transform: translateY(5px);
    color: #6c5ce7;
  }
  50% {
    color: #6c5ce7;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    color: inherit;
  }
`,bs=Ne`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`,ys=Le.input`
  width: 100%;
  padding: 18px 20px 18px 20px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:focus {
    border-color: #374151;
    box-shadow: 
      0 0 0 3px rgba(55, 65, 81, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${e=>e.$aiProcessing?"transparent":"#9ca3af"};
    font-weight: 400;
    opacity: ${e=>e.$aiProcessing?"0":"0.8"};
  }
  
  &:focus::placeholder {
    color: ${e=>e.$aiProcessing?"transparent":"#c1c7d0"};
    opacity: ${e=>e.$aiProcessing?"0":"0.6"};
  }
  
  &:disabled {
    background-color: ${e=>e.$aiProcessing?"rgba(34, 197, 94, 0.02)":"#f8f9fa"};
    color: ${e=>e.$aiProcessing?"#374151":"#6c757d"};
    cursor: not-allowed;
    opacity: ${e=>e.$aiProcessing?"1":"0.7"};
    border-color: ${e=>e.$aiProcessing?"#22c55e":"#e8ecef"};
  }
  
  @media (max-width: 768px) {
    padding: 16px 20px 16px 20px;
    font-size: 16px;
      border-radius: 6px;
    
    &::placeholder {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 14px 16px 14px 16px;
    font-size: 15px;
    border-radius: 6px;
    
    &::placeholder {
      font-size: 13px;
    }
  }
  
  /* 添加 AI 处理时的高亮效果 - 优先级高于disabled状态 */
  ${e=>e.$aiProcessing&&"\n    border-color: transparent !important;\n    box-shadow: none !important;\n    background-color: rgba(34, 197, 94, 0.02) !important;\n    color: transparent !important;\n    opacity: 1 !important;\n  "}
  
  /* AI动画期间隐藏原始文字 */
  ${e=>e.$aiProcessing&&e.$hasAnimatedText&&"\n    color: transparent !important;\n  "}
`,vs=Le.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 18px 20px 18px 20px;
  pointer-events: none;
  font-family: inherit;
  font-size: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #374151;
  z-index: 3;

  span {
    display: inline-block;
    animation: ${ms} 0.3s forwards;
  }
`,ws=Le.span`
  display: inline-block;
  width: 2px;
  height: 18px;
  background-color: #374151;
  margin-left: 1px;
  animation: ${bs} 0.8s infinite;
  position: relative;
  top: 1px;
`,ks=Le.div`
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  pointer-events: none;
  border-radius: 10px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 10px;
    background: linear-gradient(90deg, #22c55e, #16a34a, #15803d, #166534, #22c55e) border-box;
    background-size: 200% 100%;
    animation: borderMove 2s linear infinite;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
  
  @keyframes borderMove {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
`,Ss=Le.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 16px;
  color: #4a5568;
  pointer-events: none;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease;
  
  /* 添加打字机光标效果 */
  &::after {
    content: '|';
    display: ${e=>e.$visible?"inline-block":"none"};
    animation: ${bs} 0.8s infinite;
    color: #374151;
    margin-left: 2px;
  }
`,js=Le.button`
  display: flex;
  align-items: center;
  padding: 18px 16px;
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
  background: rgba(248, 250, 252, 0.8);
  border: 2px solid #e2e8f0;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  height: auto;
  min-height: 54px;
  
  @media (max-width: 768px) {
    padding: 14px 14px;
    min-height: 48px;
    border-width: 1.5px;
    border-radius: 6px;
    font-size: 13px;
  }
  

  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: #cbd5e0;
    color: #4a5568;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
    
    .filter-icon {
      opacity: 0.4;
    }
    
    .filter-text {
      opacity: 0.6;
    }
  }
  
  .filter-icon {
    margin-right: 8px;
    display: inline-flex;
    transition: transform 0.3s ease-in-out;
    opacity: 0.7;
  }
  
  .filter-text {
    transition: all 0.3s ease;
  }
  
  /* 激活状态样式 */
  ${e=>e.$active&&"\n    background: rgba(55, 65, 81, 0.08);\n    border-color: rgba(55, 65, 81, 0.25);\n    color: #374151;\n    \n    .filter-icon {\n      opacity: 1;\n      transform: rotate(180deg);\n      color: #374151;\n    }\n    \n    .filter-text {\n      color: #374151;\n      font-weight: 500;\n    }\n  "}
`,Cs=Le.div`
  overflow: hidden;
  max-height: ${e=>e.$show?"1000px":"0"};
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  transition: 
    max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0s ${e=>e.$show?"0s":"0.6s"};
  
  padding: ${e=>e.$show?"28px 32px 32px 32px":"0 32px"};
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-top: ${e=>e.$show?"2px solid rgba(226, 232, 240, 0.6)":"0 solid transparent"};
  position: relative;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  
  @media (max-width: 768px) {
    padding: ${e=>e.$show?"24px 20px 28px 20px":"0 20px"};
  }
  
  @media (max-width: 480px) {
    padding: ${e=>e.$show?"20px 16px 24px 16px":"0 16px"};
  }
  
  /* 添加收起动画时的渐变效果 */
  ${e=>!e.$show&&"\n    pointer-events: none;\n  "}
  
  /* 当打开时，添加入场动画 */
  ${e=>e.$show&&"\n    animation: filterSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n    \n    @keyframes filterSlideIn {\n      0% {\n        opacity: 0;\n        transform: translateY(-20px);\n        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n      }\n      60% {\n        opacity: 0.8;\n        transform: translateY(-5px);\n      }\n      100% {\n        opacity: 1;\n        transform: translateY(0);\n        background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);\n      }\n    }\n  "}
  
  /* 添加顶部装饰线 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    right: 32px;
    height: 3px;
    background: linear-gradient(90deg, #374151 0%, #6b7280 50%, #374151 100%);
    border-radius: 0 0 2px 2px;
    opacity: ${e=>e.$show?1:0};
    transform: scaleX(${e=>e.$show?1:0});
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    @media (max-width: 768px) {
      left: 20px;
      right: 20px;
    }
    
    @media (max-width: 480px) {
      left: 16px;
      right: 16px;
    }
  }
`,_s=Le.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
  margin-bottom: 10px;
  
  @media (min-width: 992px) {
    grid-template-areas:
      "year citations field field"
      "venue venue access sort";
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-areas:
      "year citations field"
      "venue venue access"
      "sort sort sort";
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Es=Le.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.06),
    0 1px 3px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 122, 204, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.08),
      0 2px 4px rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
    border-color: rgba(0, 122, 204, 0.12);
  }
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 15px;
    font-weight: 600;
    color: #2d3748;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 122, 204, 0.1);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 40px;
      height: 2px;
      background: linear-gradient(90deg, #007acc 0%, #6c5ce7 100%);
      border-radius: 1px;
    }
  }
  
  @media (max-width: 767px) {
    padding: 16px;
    margin-bottom: 16px;
    
    h4 {
      font-size: 14px;
    }
  }
`,$s=Le.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  &.year-filter {
    grid-area: year;
  }
  
  &.citations-filter {
    grid-area: citations;
  }
  
  &.field-filter {
    grid-area: field;
  }
  
  &.venue-filter {
    grid-area: venue;
  }
  
  &.access-filter {
    grid-area: access;
  }
  
  &.sort-filter {
    grid-area: sort;
  }
`,zs=Le.label`
  font-size: 13px;
  font-weight: 500;
  color: #444;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
  
  svg {
    color: #777;
  }
`,Ts=Le.div`
  position: relative;
  width: 100%;
`,Ps=Le.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 6px 10px;
  pointer-events: none;
  font-family: inherit;
  font-size: 13px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 11;
  
  span {
    display: inline-block;
    animation: ${ms} 0.3s forwards;
  }
`,As=Le.input`
  width: 100%;
  padding: 5px 8px;
  border: 1px solid #e1e5e9;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  height: 30px;
  box-sizing: border-box;

  &:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
    font-size: 12px;
  }
  
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  /* 添加高亮动画效果 */
  ${e=>e.$animating&&"\n    border-color: #6c5ce7;\n    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.15);\n    background-color: rgba(108, 92, 231, 0.03);\n    color: transparent; /* \u52a8\u753b\u671f\u95f4\u9690\u85cf\u539f\u6709\u6587\u672c */\n    \n    animation: filterGradientBorder 1.5s ease;\n    \n    @keyframes filterGradientBorder {\n      0% {\n        border-color: #6c5ce7;\n        box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);\n      }\n      50% {\n        border-color: #00a8ff;\n        box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.2);\n      }\n      100% {\n        border-color: #e1e5e9;\n        box-shadow: none;\n      }\n    }\n  "}
`,Is=Le.select`
  width: 100%;
  padding: 5px 8px;
  border: 1px solid #e1e5e9;
  border-radius: 4px;
  font-size: 13px;
  outline: none;
  background: white;
  height: 30px;
  box-sizing: border-box;
  appearance: none; /* 移除默认样式 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 24px;

  &:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }
  
  &:disabled {
    background-color: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  /* 添加高亮动画效果 */
  ${e=>e.$animating&&"\n    border-color: #6c5ce7;\n    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.15);\n    background-color: rgba(108, 92, 231, 0.03);\n    color: transparent; /* \u52a8\u753b\u671f\u95f4\u9690\u85cf\u539f\u6709\u6587\u672c */\n    \n    animation: filterGradientBorder 1.5s ease;\n  "}
`,Os=Le.div`
  display: flex;
  gap: 10px;
  margin-top: 2px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    padding: 8px;
  }
  
  .action-buttons {
    display: flex;
    gap: 8px;
    
    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }
  }
  
  .filter-status {
    color: #666;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 3px;
    
    .filter-count {
      background: #e6f7ff;
      color: #1890ff;
      border-radius: 10px;
      padding: 1px 5px;
      font-size: 11px;
      font-weight: 500;
    }
  }
`,Rs=Le.button`
  background: transparent;
  color: #666;
  border: 1px solid #e1e5e9;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 100px;
  justify-content: center;
  height: 28px;

  &:hover {
    background: #f5f5f5;
    border-color: #d0d0d0;
  }
  
  &:disabled {
    background: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
    border-color: #e1e5e9;
  }
  
  @media (max-width: 767px) {
    flex: 1;
  }
`,Ns=Le.button`
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 100px;
  justify-content: center;
  height: 28px;

  &:hover {
    background: #218838;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 767px) {
    flex: 1;
  }
`,Ls=Le.div`
  position: absolute;
  background: rgba(108, 92, 231, 0.08);
  border: 1px solid rgba(108, 92, 231, 0.4);
  border-radius: 4px;
  pointer-events: none;
  opacity: 0;
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.visible {
    opacity: 1;
    animation: highlight-pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes highlight-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.4);
    }
    70% {
      box-shadow: 0 0 0 4px rgba(108, 92, 231, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(108, 92, 231, 0);
    }
  }
`,Ds=Le.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(108, 92, 231, 0.2) 0%, rgba(108, 92, 231, 0) 70%);
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  
  ${e=>e.$visible&&"\n    opacity: 1;\n    animation: fullscreenPulse 1s ease-out forwards;\n    \n    @keyframes fullscreenPulse {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 0.3;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n  "}
`,Ms=Le.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  justify-content: center; /* 改为居中对齐 */
  opacity: 0.75; /* 适度弱化显示，保持可读性 */
  transition: opacity 0.3s ease; /* 添加过渡动画 */
  
  &:hover {
    opacity: 1; /* 鼠标悬停时恢复正常 */
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 6px;
    width: 100%;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    display: none; /* 手机端隐藏底部数据源选择 */
  }
`,Fs=Le.span`
  font-size: 12px;
  font-weight: 450; /* 稍微增加字重 */
  color: #6b7280; /* 使用适中的颜色，保持可读性 */
  white-space: nowrap;
  margin-left: 0; /* 容器已经平移，不需要额外边距 */
  transition: all 0.3s ease; /* 添加过渡动画 */
  
  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 500;
    color: #4b5563;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    display: none; /* 移动端隐藏"数据源："标签 */
  }
`,Bs=Le.div`
  display: flex;
  gap: 6px;
  
  @media (max-width: 768px) {
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 2px;
    justify-content: center;
    width: 100%;
    flex-wrap: nowrap; /* 强制单行显示 */
  }
`,Us=Le.button`
  padding: 6px 12px;
  border: 1px solid ${e=>e.disabled?"#e5e7eb":e.$active?"#007acc":"#d1d5db"};
  border-radius: 4px;
  background: ${e=>e.disabled?"#f9fafb":e.$active?"#007acc":"white"};
  color: ${e=>e.disabled?"#9ca3af":e.$active?"white":"#6b7280"};
  font-size: 11px;
  font-weight: ${e=>e.$active?"500":"450"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  position: relative;
  overflow: visible; /* 改为visible以显示tooltip */
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${e=>e.$active?"#005fa3":"#f8f9fa"};
    border-color: ${e=>e.$active?"#005fa3":"#adb5bd"};
    color: ${e=>e.$active?"white":"#495057"};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${e=>e.$active&&!e.disabled&&"\n    box-shadow: 0 1px 3px rgba(0, 122, 204, 0.2);\n  "}
  
  .desktop-name {
    display: inline;
  }
  
  .mobile-name {
    display: none;
  }
  
  .mobile-icon {
    display: none;
  }
  
  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 3px;
    border-width: 1.5px;
    min-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .desktop-name {
      display: none;
    }
    
    .mobile-name {
      display: inline;
    }
    
    .mobile-icon {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 16px; /* 图标字体大小 */
    border-radius: 3px;
    border-width: 1px;
    min-height: 28px;
    flex: 1;
    min-width: 40px;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    
    .desktop-name {
      display: none;
    }
    
    .mobile-name {
      display: none;
    }
    
    .mobile-icon {
      display: inline;
      font-size: 16px;
    }
  }
`,Ws=Le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* 减少间距，让文字更靠近按键 */
  flex-shrink: 0;
  width: 100px; /* 与EnterKeyButton宽度保持一致，不包含Shift按键 */
  position: relative;
  
  @media (max-width: 768px) {
    align-items: center;
    width: 50px; /* 移动端与Enter按键宽度一致 */
    gap: 2px; /* 移动端进一步减少间距 */
  }
`,qs=Le.div`
  font-size: 14px; /* 增大字体 */
  color: #6b7280;
  text-align: center;
  margin-top: -2px; /* 上移，让文字更靠近Enter按键 */
  line-height: 1.3;
  white-space: nowrap;
  width: 100%; /* 充满容器宽度 */
  display: flex;
  justify-content: center; /* 确保水平居中 */
  align-items: center;
  opacity: ${e=>e.$visible?1:0}; /* 根据props控制显示 */
  visibility: ${e=>e.$visible?"visible":"hidden"}; /* 根据props控制显示 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 添加过渡动画 */
  
  @media (max-width: 768px) {
    font-size: 12px; /* 移动端也增大 */
    white-space: normal;
    text-align: center;
    margin-top: -1px; /* 移动端稍微上移 */
  }
  
  @media (max-width: 480px) {
    font-size: 11px; /* 小屏幕适当调整 */
    margin-top: 0px; /* 小屏幕保持原位 */
  }
`,Ks=Le.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #2d3748;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
  white-space: normal;
  min-width: 280px; /* 设置最小宽度 */
  max-width: 400px; /* 增加最大宽度 */
  width: max-content; /* 自适应内容宽度 */
  text-align: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  margin-bottom: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* 小箭头 */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #2d3748;
  }
  
  /* 显示状态 */
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 14px;
    min-width: 220px;
    max-width: 300px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 8px 12px;
    min-width: 200px;
    max-width: 280px;
    margin-bottom: 6px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: auto;
    white-space: normal;
    word-wrap: break-word;
    
    /* 在移动端适当调整箭头位置 */
    &::after {
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
    }
  }
`,Hs=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
  }
  
  @media (max-width: 480px) {
    display: none; /* 移动端隐藏底部控制区域 */
  }
`,Ys=e=>{let{onSearch:n,onExecuteSearch:r,loading:a,initialQuery:i="",dataSource:o="primaryScraping",onDataSourceChange:s,onFocusChange:l,onFiltersChange:c,variant:d="default",showTitle:u=!1,onReportSwitchChange:p,onQueryChange:f,onResearchDomainChange:h,isHomePage:g=!1,hasResults:x=!1,continueAISearchParams:m=null,onContinueAISearchComplete:b=null}=e;const[y,v]=(0,t.useState)(i),[w,k]=(0,t.useState)(!1),[S,j]=(0,t.useState)(Fo[o]),[C,_]=(0,t.useState)(()=>{const e={};return Fo[o].fields.forEach(t=>{"select"===t.type&&t.options.length>0?e[t.key]=t.options[0].value:e[t.key]=""}),e}),[E,$]=(0,t.useState)(!1),[z,T]=(0,t.useState)(!1),[P,A]=(0,t.useState)(""),[I,O]=(0,t.useState)(null),[R,N]=(0,t.useState)([]),[L,D]=(0,t.useState)(!1),[M,F]=(0,t.useState)(""),[B,U]=(0,t.useState)({}),[W,q]=(0,t.useState)({}),[K,H]=(0,t.useState)(!1),[Y,V]=(0,t.useState)(!1),[G,Q]=(0,t.useState)(!1),[X,J]=(0,t.useState)(!1),[Z,ee]=(0,t.useState)(!1),[te,ne]=(0,t.useState)(!1),[re,ae]=(0,t.useState)(null),[ie,oe]=(0,t.useState)(!1),se=(0,t.useRef)(null),le=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{const n=localStorage.getItem(e);return null!==n?JSON.parse(n):t}catch(n){return console.warn(`Failed to read ${e} from localStorage:`,n),t}},ce=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.warn(`Failed to save ${e} to localStorage:`,n)}},[de,ue]=(0,t.useState)(()=>le("aiSwitchEnabled",!0)),[pe,fe]=(0,t.useState)(()=>le("reportSwitchEnabled",!0));(0,t.useEffect)(()=>{p&&p(pe)},[p,pe]);const he=e=>({semantic:"\u6570\u636e\u6765\u6e90\u4e8e\u5404\u5927\u671f\u520a\u6570\u636e\u5e93\uff0c\u80fd\u663e\u793a\u5b8c\u6574\u7684\u6458\u8981\u4fe1\u606f\uff0c\u9ad8\u5cf0\u671f\u53ef\u80fd\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u52ff\u6ee5\u7528",googleScholar:"\u6570\u636e\u6765\u6e90\u4e8eGoogle\u5b66\u672f\uff0c\u53ef\u663e\u793a\u7f29\u7565\u7684\u6458\u8981\u4fe1\u606f\uff0c\u54cd\u5e94\u8f83\u5feb",primaryScraping:"\u6570\u636e\u6765\u6e90\u4e8e\u5b66\u672f\u641c\u7d22\u5f15\u64ce\uff0c\u63d0\u4f9b\u4e30\u5bcc\u7684\u6587\u732e\u4fe1\u606f\u548c\u5f15\u7528\u6570\u636e\uff0c\u54cd\u5e94\u7a33\u5b9a",pubmed:"\u6b63\u5728\u5bf9\u63a5\u4e2d..."}[e]||""),ge=e=>{var t;return{semantic:"3rd API",googleScholar:"Google",primaryScraping:"Primary",pubmed:"PubMed"}[e]||(null===(t=Fo[e])||void 0===t?void 0:t.name)||e},xe=e=>({semantic:"\u2462",googleScholar:"\u24bc",primaryScraping:"\u24c5",pubmed:"\u24c2"}[e]||"\u2295"),[me,be]=(0,t.useState)(!0),ye=(0,t.useRef)(null),ve=(0,t.useRef)(null),we=(0,t.useRef)({}),ke=(0,t.useRef)(null),Se=(0,t.useRef)(null),je=e=>{const t={};return e.fields.forEach(e=>{"select"===e.type&&e.options.length>0?t[e.key]=e.options[0].value:t[e.key]=""}),t};(0,t.useEffect)(()=>{const e=Fo[o];j(e);const t=je(e);_(t);const n={};e.fields.forEach(e=>{n[e.key]={current:null}}),we.current=n},[o]),(0,t.useEffect)(()=>{c&&c(w)},[w,c]),(0,t.useEffect)(()=>{i!==y&&v(i)},[i]);const Ce=e=>{s(e)},_e=e=>!!(0,Wo.ON)(e)&&(v(""),oe(!0),se.current&&clearTimeout(se.current),se.current=setTimeout(()=>{oe(!1)},5e3),!0),Ee=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!y.trim()||a||E)return;if(_e(y.trim()))return;const t=null!==e?e:de;if(x){const e=g&&pe,r=t?{...C,_isAISearch:!0}:C;return n(y.trim(),r,1,e),void(w&&k(!1))}if(t)await Re();else{const e=g&&pe;n(y.trim(),C,1,e),w&&k(!1)}};(0,t.useEffect)(()=>{const e=e=>{"Shift"===e.key&&Z&&V(!0),"Enter"===e.key&&Q(!0)},t=e=>{"Shift"===e.key&&Z&&V(!1),"Enter"===e.key&&Q(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}},[Z]),(0,t.useEffect)(()=>(y.length>0?(ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{be(!1)},3e3)):(ye.current&&clearTimeout(ye.current),be(!0)),()=>{ye.current&&clearTimeout(ye.current)}),[y]);const $e=e=>{if("enter"===e){if(!y.trim())return;Ee(null),Q(!0),setTimeout(()=>Q(!1),200)}else if("shift"===e){if(!y.trim())return;Ee(!0),V(!0),setTimeout(()=>V(!1),200)}};(0,t.useEffect)(()=>()=>{se.current&&clearTimeout(se.current)},[]);const ze=(e,t)=>{if(_(n=>({...n,[e]:t})),t&&""!==t){const n=Object.values(C).filter(e=>e&&"relevance"!==e).length+1;((e,t,n)=>{qo("filter_usage",{filter_type:e,filter_value:t,total_filters:n,event_category:"filters",event_label:`${e}_filter`})})(e,t,n)}},Te=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";return e.charAt(Math.floor(72*Math.random()))};(0,t.useEffect)(()=>{if(E&&!M){let e="";for(let n=0;n<50;n++)e+=Te();F(e);const t=setTimeout(()=>{F("")},200);return()=>clearTimeout(t)}},[E,M]);const Pe=async(e,t)=>{const n=e.split("");for(let a=n.length;a>0;a--)N(n.slice(0,a).map((e,t)=>({char:e,key:`delete-${t}-${Date.now()}`}))),await new Promise(e=>setTimeout(e,20));N([]),await new Promise(e=>setTimeout(e,150));const r=t.split("");for(let a=0;a<r.length;a++)N(e=>[...e,{char:r[a],key:`type-${a}-${Date.now()}`}]),await new Promise(e=>setTimeout(e,40));await new Promise(e=>setTimeout(e,300)),N([])};(0,t.useEffect)(()=>{if(E&&"AI\u6b63\u5728\u5206\u6790\u60a8\u7684\u641c\u7d22\u610f\u56fe..."!==P){let e="AI\u6b63\u5728\u5206\u6790\u60a8\u7684\u641c\u7d22\u610f\u56fe...",t=0;const n=setInterval(()=>{A(e.substring(0,t)),t++,t>e.length&&clearInterval(n)},50);return()=>clearInterval(n)}},[E,P]);const Ae=e=>{var t,n;if(!ke.current||!w)return;const r=null===(t=we.current[e])||void 0===t?void 0:t.current;if(!r)return;const a=r.getBoundingClientRect(),i=(null===(n=r.closest(".sc-iAEawV"))||void 0===n?void 0:n.getBoundingClientRect())||r.parentElement.getBoundingClientRect();ke.current.style.top=a.top-i.top-2+"px",ke.current.style.left=a.left-i.left-2+"px",ke.current.style.width=`${a.width+4}px`,ke.current.style.height=`${a.height+4}px`,ke.current.classList.add("visible"),setTimeout(()=>{ke.current&&ke.current.classList.remove("visible")},2e3)};(0,t.useEffect)(()=>{if(z){const e=setTimeout(()=>T(!1),3e3);return()=>clearTimeout(e)}},[z]);const Ie=async(e,t)=>{if(!t)return;U(t=>({...t,[e]:!0})),q(t=>({...t,[e]:[]})),await new Promise(e=>setTimeout(e,50));const n=Array.from({length:Math.floor(5*Math.random())+3},()=>Te()).join("");q(t=>({...t,[e]:n.split("").map((t,n)=>({char:t,key:`random-${e}-${n}-${Date.now()}`}))})),await new Promise(e=>setTimeout(e,150));const r=t.toString().split("");q(t=>({...t,[e]:[]}));for(let a=0;a<r.length;a++){if(a>0&&Math.random()>.7){const t=Te();q(n=>{const r=[...n[e]||[]];return r.length>0&&(r[r.length-1]={char:t,key:`${e}-${a}-random-${Date.now()}`}),{...n,[e]:r}}),await new Promise(e=>setTimeout(e,20))}q(t=>({...t,[e]:[...t[e]||[],{char:r[a],key:`${e}-${a}-${Date.now()}`}]}));const t=20+30*Math.random();await new Promise(e=>setTimeout(e,t))}await new Promise(e=>setTimeout(e,400)),U(t=>({...t,[e]:!1})),q(t=>({...t,[e]:[]}))},Oe=async()=>{H(!0),T(!0),await new Promise(e=>setTimeout(e,1500)),H(!1),await new Promise(e=>setTimeout(e,1500)),T(!1)},Re=async()=>{var e,t,r;if(y.trim()&&!E&&!_e(y.trim()))try{$(!0),A(""),w||(k(!0),await new Promise(e=>setTimeout(e,300)));const a=await Lo(y.trim(),Ao.GPT_4O_2024);if(Yo(y.trim(),a.query||y.trim(),Ao.GPT_4O_2024),a.query&&a.query!==y){const e=y,t=a.query;await Pe(e,t),v(t)}const i={...C};let s=[];s="googleScholar"===o?[...a.year?(()=>{const e=a.year.toString();if(e.includes("-")){const[t,n]=e.split("-");return[{key:"as_ylo",value:t.trim()},{key:"as_yhi",value:n.trim()}]}return[{key:"as_ylo",value:e},{key:"as_yhi",value:""}]})():[],{key:"language",value:a.language||"en"},{key:"as_sdt",value:(a.searchType,"0")},{key:"safe",value:"off"},{key:"filter",value:"1"},{key:"as_vis",value:"0"},{key:"as_rr",value:"review"===a.searchType||(null===(e=a.venue)||void 0===e?void 0:e.toLowerCase().includes("review"))||(null===(t=a.query)||void 0===t?void 0:t.toLowerCase().includes("review"))||(null===(r=a.query)||void 0===r?void 0:r.toLowerCase().includes("survey"))?"1":"0"}]:"primaryScraping"===o?[...a.year?(()=>{const e=a.year.toString();if(e.includes("-")){const[t,n]=e.split("-");return[{key:"start_year",value:t.trim()},{key:"end_year",value:n.trim()}]}return[{key:"start_year",value:e},{key:"end_year",value:""}]})():[],{key:"language",value:a.language||"en"},{key:"sort_by",value:"citationCount"===a.sort?"cited_by":"publicationDate"===a.sort?"date":"relevance"}]:[{key:"year",value:a.year},{key:"minCitationCount",value:a.minCitationCount},{key:"fieldsOfStudy",value:a.fieldsOfStudy},{key:"venue",value:a.venue},{key:"openAccessPdf",value:a.openAccessPdf},{key:"sort",value:a.sort}];for(const e of s){S.fields.some(t=>t.key===e.key)&&void 0!==e.value&&null!==e.value&&""!==e.value&&e.value!==C[e.key]&&(O(e.key),Ae(e.key),i[e.key]=e.value,await Ie(e.key,e.value),_(i),await new Promise(e=>setTimeout(e,150)))}if(T(!0),O(null),a.researchDomain){console.log("\u68c0\u6d4b\u5230\u7814\u7a76\u9886\u57df\u6807\u8bb0:",a.researchDomain);(Array.isArray(a.researchDomain)?a.researchDomain:[a.researchDomain]).forEach(e=>{Ne(e,a)})}const l=g&&pe;n(a.query||y.trim(),i,1,l),await Oe(),setTimeout(()=>{k(!1)},1500)}catch(a){console.error("AI \u667a\u80fd\u641c\u7d22\u5931\u8d25:",a),alert(`AI \u667a\u80fd\u641c\u7d22\u5931\u8d25: ${a.message}`)}finally{$(!1),A(""),N([]),D(!1),U({}),q({})}};(0,t.useEffect)(()=>{if(m){const{query:e,filters:t,page:a,shouldGenerateReport:i}=m;v(e),_(t);const s=async()=>{try{await(async(e,t,a,i)=>{if(e.trim()&&!E)try{$(!0),A(""),w||(k(!0),await new Promise(e=>setTimeout(e,300)));const s=await Lo(e.trim(),Ao.GPT_4O_2024);if(Yo(e.trim(),s.query||e.trim(),Ao.GPT_4O_2024),s.query&&s.query!==e){const t=e,n=s.query;await Pe(t,n),v(n)}const l={...t};if(s.year)if("googleScholar"===o){const e=s.year.toString();if(e.includes("-")){const[t,n]=e.split("-");l.as_ylo=t.trim(),l.as_yhi=n.trim()}else l.as_ylo=e,l.as_yhi=""}else if("primaryScraping"===o){const e=s.year.toString();if(e.includes("-")){const[t,n]=e.split("-");l.start_year=t.trim(),l.end_year=n.trim()}else l.start_year=e,l.end_year=""}else l.year=s.year;_(l),T(!0),s.researchDomain&&(Array.isArray(s.researchDomain)?s.researchDomain:[s.researchDomain]).forEach(e=>{Ne(e,s)});const c=s.query||e.trim();f&&f(c),r?r(c,l,a,i):n(c,l,a,i),await Oe(),setTimeout(()=>{k(!1)},1500)}catch(s){console.error("\u7ee7\u7eedAI\u641c\u7d22\u5931\u8d25:",s),alert(`AI \u667a\u80fd\u641c\u7d22\u5931\u8d25: ${s.message}`)}finally{$(!1),A(""),N([]),D(!1),U({}),q({})}})(e,t,a,i)}catch(s){console.error("\u7ee7\u7eed\u6267\u884cAI\u641c\u7d22\u5931\u8d25:",s)}finally{b&&b()}};s()}},[m,b]);const Ne=(e,t)=>{const n={computer_science:{name:"\u8ba1\u7b97\u673a\u79d1\u5b66",description:"AI\u3001\u673a\u5668\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u3001\u81ea\u7136\u8bed\u8a00\u5904\u7406\u7b49",keywords:["AI","machine learning","deep learning","NLP","computer vision","software engineering"]},medicine:{name:"\u533b\u5b66",description:"\u75be\u75c5\u3001\u836f\u7269\u3001\u6cbb\u7597\u3001\u8bca\u65ad\u3001\u4e34\u5e8a\u8bd5\u9a8c\u7b49",keywords:["disease","drug","treatment","diagnosis","clinical trial","vaccine"]},biology:{name:"\u751f\u7269\u5b66",description:"\u57fa\u56e0\u3001\u7ec6\u80de\u3001\u86cb\u767d\u8d28\u3001\u8fdb\u5316\u3001\u751f\u6001\u7b49",keywords:["gene","cell","protein","evolution","ecology","CRISPR"]},chemistry:{name:"\u5316\u5b66",description:"\u5206\u5b50\u3001\u5316\u5408\u7269\u3001\u53cd\u5e94\u3001\u50ac\u5316\u5242\u7b49",keywords:["molecule","compound","reaction","catalyst","material"]},physics:{name:"\u7269\u7406\u5b66",description:"\u91cf\u5b50\u3001\u7c92\u5b50\u3001\u5149\u5b66\u3001\u529b\u5b66\u7b49",keywords:["quantum","particle","optics","mechanics","electromagnetic"]},mathematics:{name:"\u6570\u5b66",description:"\u7b97\u6cd5\u3001\u7edf\u8ba1\u3001\u6982\u7387\u3001\u51e0\u4f55\u7b49",keywords:["algorithm","statistics","probability","geometry","algebra"]},engineering:{name:"\u5de5\u7a0b\u5b66",description:"\u673a\u68b0\u3001\u7535\u5b50\u3001\u571f\u6728\u3001\u6750\u6599\u7b49",keywords:["mechanical","electronic","civil","material","control"]},environmental_science:{name:"\u73af\u5883\u79d1\u5b66",description:"\u6c14\u5019\u53d8\u5316\u3001\u6c61\u67d3\u3001\u53ef\u6301\u7eed\u53d1\u5c55\u7b49",keywords:["climate change","pollution","sustainability","ecology"]},psychology:{name:"\u5fc3\u7406\u5b66",description:"\u8ba4\u77e5\u3001\u884c\u4e3a\u3001\u5fc3\u7406\u6cbb\u7597\u7b49",keywords:["cognitive","behavior","therapy","neuroscience"]},economics:{name:"\u7ecf\u6d4e\u5b66",description:"\u91d1\u878d\u3001\u8d38\u6613\u3001\u53d1\u5c55\u3001\u653f\u7b56\u7b49",keywords:["finance","trade","development","policy","market"]},education:{name:"\u6559\u80b2\u5b66",description:"\u6559\u5b66\u3001\u5b66\u4e60\u3001\u8bfe\u7a0b\u3001\u8bc4\u4f30\u7b49",keywords:["teaching","learning","curriculum","assessment"]},social_sciences:{name:"\u793e\u4f1a\u79d1\u5b66",description:"\u793e\u4f1a\u5b66\u3001\u653f\u6cbb\u5b66\u3001\u4eba\u7c7b\u5b66\u7b49",keywords:["sociology","political","anthropology","communication"]},other:{name:"\u5176\u4ed6\u9886\u57df",description:"\u8de8\u5b66\u79d1\u6216\u5176\u4ed6\u4e13\u4e1a\u9886\u57df",keywords:[]}},r=n[e];if(r){console.log(`\u68c0\u6d4b\u5230\u7814\u7a76\u9886\u57df: ${r.name} (${e})`),console.log(`\u9886\u57df\u63cf\u8ff0: ${r.description}`),console.log(`\u76f8\u5173\u5173\u952e\u8bcd: ${r.keywords.join(", ")}`),console.log("\ud83d\udd17 AI\u641c\u7d22\uff1a\u51c6\u5907\u8c03\u7528\u7814\u7a76\u9886\u57df\u56de\u8c03\u51fd\u6570",{researchDomain:e,domainInfo:r,hasCallback:!!h}),h?(console.log("\ud83d\ude80 AI\u641c\u7d22\uff1a\u6b63\u5728\u8c03\u7528onResearchDomainChange"),h(e,r),console.log("\u2705 AI\u641c\u7d22\uff1aonResearchDomainChange\u8c03\u7528\u5b8c\u6210")):console.error("\u274c AI\u641c\u7d22\uff1aonResearchDomainChange\u56de\u8c03\u51fd\u6570\u4e0d\u5b58\u5728");const i={domain:e,domainName:r.name,query:t.query,timestamp:(new Date).toISOString(),searchType:t.searchType,fieldsOfStudy:t.fieldsOfStudy};try{const e=JSON.parse(localStorage.getItem("userResearchInterests")||"[]");e.push(i),e.length>50&&e.splice(0,e.length-50),localStorage.setItem("userResearchInterests",JSON.stringify(e))}catch(a){console.warn("\u4fdd\u5b58\u7528\u6237\u7814\u7a76\u5174\u8da3\u5931\u8d25:",a)}if(Array.isArray(t.researchDomain)&&t.researchDomain.length>1){const e={type:"cross_domain",domains:t.researchDomain,domainNames:t.researchDomain.map(e=>{var t;return(null===(t=n[e])||void 0===t?void 0:t.name)||"\u672a\u77e5\u9886\u57df"}),query:t.query,timestamp:(new Date).toISOString(),searchType:t.searchType,fieldsOfStudy:t.fieldsOfStudy};try{const t=JSON.parse(localStorage.getItem("userCrossDomainInterests")||"[]");t.push(e),t.length>20&&t.splice(0,t.length-20),localStorage.setItem("userCrossDomainInterests",JSON.stringify(t))}catch(a){console.warn("\u4fdd\u5b58\u7528\u6237\u4ea4\u53c9\u5b66\u79d1\u5174\u8da3\u5931\u8d25:",a)}}Le(e,r,t)}else console.warn("\u672a\u77e5\u7684\u7814\u7a76\u9886\u57df\u6807\u8bb0:",e)},Le=(e,t,n)=>{console.log(`\u89e6\u53d1 ${t.name} \u9886\u57df\u7684\u76f8\u5173\u670d\u52a1`);const r={computer_science:"\ud83d\udd2c \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u8ba1\u7b97\u673a\u79d1\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684AI\u5de5\u5177\u548c\u5f00\u53d1\u8d44\u6e90\uff01",medicine:"\ud83c\udfe5 \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u533b\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u533b\u5b66\u6570\u636e\u5e93\u548c\u4e34\u5e8a\u8d44\u6e90\uff01",biology:"\ud83e\uddec \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u751f\u7269\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u751f\u7269\u4fe1\u606f\u5b66\u5de5\u5177\uff01",chemistry:"\ud83e\uddea \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u5316\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u5316\u5b66\u6570\u636e\u5e93\uff01",physics:"\u269b\ufe0f \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u7269\u7406\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u7269\u7406\u8ba1\u7b97\u5de5\u5177\uff01",mathematics:"\ud83d\udcca \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u6570\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u6570\u5b66\u8f6f\u4ef6\uff01",engineering:"\u2699\ufe0f \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u5de5\u7a0b\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u5de5\u7a0b\u8ba1\u7b97\u5de5\u5177\uff01",environmental_science:"\ud83c\udf0d \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u73af\u5883\u79d1\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u73af\u5883\u6570\u636e\u8d44\u6e90\uff01",psychology:"\ud83e\udde0 \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u5fc3\u7406\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u5fc3\u7406\u6d4b\u8bc4\u5de5\u5177\uff01",economics:"\ud83d\udcb0 \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u7ecf\u6d4e\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u7ecf\u6d4e\u6570\u636e\u8d44\u6e90\uff01",education:"\ud83d\udcda \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u6559\u80b2\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u6559\u80b2\u8d44\u6e90\uff01",social_sciences:"\ud83d\udc65 \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u793e\u4f1a\u79d1\u5b66\u76f8\u5173\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u793e\u4f1a\u8c03\u67e5\u5de5\u5177\uff01",other:"\ud83d\udd0d \u68c0\u6d4b\u5230\u60a8\u6b63\u5728\u641c\u7d22\u4e13\u4e1a\u9886\u57df\u5185\u5bb9\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u76f8\u5173\u7684\u5b66\u672f\u8d44\u6e90\uff01"}[e];r&&console.log(r)},De=e=>t=>{we.current[e]||(we.current[e]={current:null}),we.current[e].current=t},Me=Object.values(C).filter(e=>e&&"relevance"!==e).length,Fe=()=>{k(!w)},Be=e=>{var t,n,r;const a={value:C[e.key]||"",onChange:t=>ze(e.key,t.target.value),placeholder:e.placeholder,disabled:E,$animating:B[e.key]};switch(e.type){case"select":return(0,es.jsxs)($s,{children:[(0,es.jsxs)(zs,{children:[Bo(e.icon),e.label]}),(0,es.jsxs)(Ts,{children:[(0,es.jsx)(Is,{ref:De(e.key),...a,children:e.options.map(e=>(0,es.jsx)("option",{value:e.value,children:e.label},e.value))},e.key),B[e.key]&&(0,es.jsx)(Ps,{children:null===(t=W[e.key])||void 0===t?void 0:t.map(e=>(0,es.jsx)("span",{children:e.char},e.key))})]})]},e.key);case"number":return(0,es.jsxs)($s,{children:[(0,es.jsxs)(zs,{children:[Bo(e.icon),e.label]}),(0,es.jsxs)(Ts,{children:[(0,es.jsx)(As,{ref:De(e.key),...a,type:"number"},e.key),B[e.key]&&(0,es.jsx)(Ps,{children:null===(n=W[e.key])||void 0===n?void 0:n.map(e=>(0,es.jsx)("span",{children:e.char},e.key))})]})]},e.key);default:return(0,es.jsxs)($s,{children:[(0,es.jsxs)(zs,{children:[Bo(e.icon),e.label]}),(0,es.jsxs)(Ts,{children:[(0,es.jsx)(As,{ref:De(e.key),...a,type:"text"},e.key),B[e.key]&&(0,es.jsx)(Ps,{children:null===(r=W[e.key])||void 0===r?void 0:r.map(e=>(0,es.jsx)("span",{children:e.char},e.key))})]})]},e.key)}},Ue=(0,t.useCallback)(e=>{console.log("\ud83d\udd0d \u5f00\u59cb\u5173\u952e\u8bcd\u68c0\u6d4b\uff0c\u67e5\u8be2\u5185\u5bb9:",e);const t=e.toLowerCase(),n=["medicine","medical","disease","treatment","diagnosis","clinical","patient","vaccine","drug","therapy","hospital","doctor","health","cancer","diabetes","covid","virus","bacteria","infection","surgery","pharmaceutical","\u533b\u5b66","\u533b\u7597","\u75be\u75c5","\u6cbb\u7597","\u8bca\u65ad","\u4e34\u5e8a","\u60a3\u8005","\u75ab\u82d7","\u836f\u7269","\u533b\u9662","\u533b\u751f","\u5065\u5eb7","\u764c\u75c7","\u7cd6\u5c3f\u75c5","\u75c5\u6bd2","\u7ec6\u83cc","\u611f\u67d3","\u624b\u672f"].filter(e=>t.includes(e)),r=n.length>0;if(console.log("\ud83d\udd0d \u533b\u5b66\u5173\u952e\u8bcd\u5339\u914d\u7ed3\u679c:",{isMedical:r,matchedKeywords:n,hasCallback:!!h}),r&&h){const e={name:"\u533b\u5b66",description:"\u75be\u75c5\u3001\u836f\u7269\u3001\u6cbb\u7597\u3001\u8bca\u65ad\u3001\u4e34\u5e8a\u8bd5\u9a8c\u7b49",keywords:["disease","drug","treatment","diagnosis","clinical trial","vaccine"]};console.log("\ud83c\udfe5 \u89e6\u53d1\u533b\u5b66\u9886\u57df\u68c0\u6d4b\uff0c\u8c03\u7528\u56de\u8c03\u51fd\u6570"),h("medicine",e)}else r&&!h?console.warn("\u26a0\ufe0f \u68c0\u6d4b\u5230\u533b\u5b66\u5173\u952e\u8bcd\u4f46\u6ca1\u6709\u56de\u8c03\u51fd\u6570"):console.log("\u2139\ufe0f \u672a\u68c0\u6d4b\u5230\u533b\u5b66\u5173\u952e\u8bcd")},[h]);return(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Ds,{$visible:K}),(0,es.jsxs)(ts,{$aiCompleted:z,$variant:d,children:[u&&"welcome"===d&&(0,es.jsx)("div",{style:{color:"#333",fontSize:"22px",fontWeight:"bold",textAlign:"center",marginBottom:"20px",textShadow:"none"},children:"\ud83c\udf93 \u6b22\u8fce\u6765\u5230AI\u79d1\u7814\u72d7 \ud83c\udf93"}),(0,es.jsxs)(ns,{children:[(0,es.jsx)("form",{onSubmit:e=>{if(e.preventDefault(),y.trim()){if(_e(y.trim()))return;Ue(y.trim());const e=g&&pe;n(y.trim(),C,1,e),w&&k(!1)}},children:(0,es.jsxs)(xs,{children:[(0,es.jsxs)(js,{type:"button",$active:w,onClick:Fe,disabled:E,className:"filter-toggle-left",children:[(0,es.jsx)("span",{className:"filter-icon",children:(0,es.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,es.jsx)("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})}),(0,es.jsx)("span",{className:"filter-text",children:"\u9ad8\u7ea7\u7b5b\u9009"})]}),(0,es.jsxs)(rs,{className:"search-input-wrapper",children:[(0,es.jsx)(ys,{ref:ve,type:"text",placeholder:E?"":(()=>{const e=["\ud83d\udca1 \u533b\u5b66\u9886\u57df\uff1a\u7cd6\u5c3f\u75c5\u6cbb\u7597\u7684\u6700\u65b0\u4e34\u5e8a\u8bd5\u9a8c\u7814\u7a76","\ud83d\udd2c \u751f\u7269\u5b66\uff1aCRISPR\u57fa\u56e0\u7f16\u8f91\u6280\u672f\u7684\u5b89\u5168\u6027\u8bc4\u4f30","\ud83e\udd16 \u8ba1\u7b97\u673a\u79d1\u5b66\uff1a\u6df1\u5ea6\u5b66\u4e60\u5728\u81ea\u7136\u8bed\u8a00\u5904\u7406\u4e2d\u7684\u5e94\u7528","\ud83e\uddec \u751f\u7269\u533b\u5b66\uff1a\u963f\u5c14\u8328\u6d77\u9ed8\u75c5\u7684\u65e9\u671f\u8bca\u65ad\u751f\u7269\u6807\u5fd7\u7269","\ud83c\udf0d \u73af\u5883\u79d1\u5b66\uff1a\u6c14\u5019\u53d8\u5316\u5bf9\u751f\u7269\u591a\u6837\u6027\u7684\u5f71\u54cd\u7814\u7a76","\ud83d\udcca \u6570\u636e\u79d1\u5b66\uff1a\u5927\u6570\u636e\u5728\u7cbe\u51c6\u533b\u7597\u4e2d\u7684\u5e94\u7528\u6848\u4f8b","\ud83e\uddea \u5316\u5b66\uff1a\u65b0\u578b\u50ac\u5316\u5242\u5728\u7eff\u8272\u5316\u5b66\u4e2d\u7684\u7814\u7a76\u8fdb\u5c55","\ud83c\udfe5 \u516c\u5171\u536b\u751f\uff1aCOVID-19\u75ab\u82d7\u6709\u6548\u6027\u7684\u771f\u5b9e\u4e16\u754c\u7814\u7a76","\ud83d\udd0b \u6750\u6599\u79d1\u5b66\uff1a\u9499\u949b\u77ff\u592a\u9633\u80fd\u7535\u6c60\u7684\u7a33\u5b9a\u6027\u6539\u8fdb","\ud83e\udde0 \u795e\u7ecf\u79d1\u5b66\uff1a\u8111\u673a\u63a5\u53e3\u6280\u672f\u5728\u762b\u75ea\u60a3\u8005\u4e2d\u7684\u5e94\u7528","\ud83d\udcf1 \u5de5\u7a0b\u6280\u672f\uff1a5G\u901a\u4fe1\u6280\u672f\u7684\u5b89\u5168\u9690\u79c1\u95ee\u9898\u7814\u7a76","\ud83c\udf93 \u6559\u80b2\u5b66\uff1a\u5728\u7ebf\u5b66\u4e60\u5bf9\u5b66\u751f\u5b66\u4e60\u6548\u679c\u7684\u5f71\u54cd\u5206\u6790"],t=["\u26a1 \u4f7f\u7528Shift+Enter\u5f00\u542fAI\u667a\u80fd\u641c\u7d22\u4f18\u5316","\ud83d\udd0d \u652f\u6301\u4e2d\u82f1\u6587\u6df7\u5408\u641c\u7d22\uff0c\u7406\u89e3\u590d\u6742\u5b66\u672f\u67e5\u8be2\u9700\u6c42","\ud83d\udcad \u8bd5\u8bd5\u7528\u81ea\u7136\u8bed\u8a00\u63cf\u8ff0\u4f60\u7684\u7814\u7a76\u95ee\u9898","\ud83c\udfaf \u53ef\u4ee5\u76f4\u63a5\u8f93\u5165\uff1a\u67d0\u9886\u57df\u8fd1\u51e0\u5e74\u7684\u7814\u7a76\u8d8b\u52bf"];return Z?t[Math.floor(Math.random()*t.length)]:e[Math.floor(Math.random()*e.length)]})(),value:E&&R.length>0?"":y,onChange:e=>{v(e.target.value),f&&f(e.target.value)},onKeyDown:e=>{if("Enter"===e.key){if(te)return;e.preventDefault(),e.shiftKey?Ee(!0):Ee(null)}},onFocus:()=>{ee(!0),l&&l(!0)},onBlur:()=>{ee(!1),l&&l(!1)},onCompositionStart:()=>{ne(!0)},onCompositionEnd:()=>{ne(!1)},disabled:E,$aiProcessing:E,$hasAnimatedText:R.length>0}),(0,es.jsxs)(gs,{$visible:ie,children:[(0,es.jsx)(fn,{className:"alert-icon",size:16}),(0,es.jsx)("span",{className:"alert-text",children:"\u68c0\u6d4b\u5230\u654f\u611f\u8bcd\u6c47\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u5408\u89c4\u7684\u641c\u7d22\u5185\u5bb9"}),(0,es.jsx)("button",{className:"alert-close",onClick:()=>{oe(!1),se.current&&clearTimeout(se.current)},children:(0,es.jsx)(ur,{size:14})})]}),(0,es.jsxs)(cs,{$visible:!E&&me&&!Y&&Z&&!ie,children:[(0,es.jsx)("span",{className:"hint-text",children:"\u60a8\u53ef\u4ee5\u5f00\u542f\u5e95\u90e8\u7684AI\u5f00\u5173\u6216\u6309\u4e0b"}),(0,es.jsx)("span",{className:"shift-key-text",children:"Shift"}),(0,es.jsx)("span",{className:"hint-text",children:"+ Enter \u6765\u4f7f\u7528 AI \u667a\u80fd\u68c0\u7d22"})]}),E&&R.length>0&&(0,es.jsxs)(vs,{ref:Se,children:[R.map(e=>(0,es.jsx)("span",{style:{animationDelay:"0ms"},children:e.char},e.key)),L&&(0,es.jsx)(ws,{})]}),(0,es.jsx)(ks,{$visible:E}),(0,es.jsx)(Ss,{$visible:E&&0===y.length,children:P})]}),(0,es.jsxs)(as,{className:"search-button-group",children:[(0,es.jsxs)(js,{type:"button",$active:w,onClick:Fe,disabled:E,className:"filter-toggle-left",children:[(0,es.jsx)("span",{className:"filter-icon",children:(0,es.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,es.jsx)("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})}),(0,es.jsx)("span",{className:"filter-text",children:"\u9ad8\u7ea7\u7b5b\u9009"})]}),(0,es.jsx)("div",{className:"mobile-datasource-select",children:(0,es.jsx)("select",{value:o,onChange:e=>!Fo[e.target.value].disabled&&Ce(e.target.value),disabled:a||E,children:Object.keys(Fo).map(e=>(0,es.jsx)("option",{value:e,disabled:Fo[e].disabled,children:Fo[e].name},e))})}),(0,es.jsxs)(is,{className:"key-prompt-container",children:[(0,es.jsx)(ls,{$isPressed:Y&&Z,onClick:()=>$e("shift")}),(0,es.jsx)(ss,{$visible:Y&&Z,children:"+"}),(0,es.jsx)(os,{$isPressed:G,$shiftPressed:Y&&Z,onClick:()=>$e("enter"),onMouseEnter:()=>J(!0),onMouseLeave:()=>J(!1),children:!(Y&&Z)&&(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(er,{size:16}),"\u641c\u7d22"]})})]})]})]})}),(0,es.jsxs)(Hs,{children:[(0,es.jsxs)("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[(0,es.jsxs)(us,{children:[(0,es.jsx)(ps,{children:"AI\u667a\u80fd\u641c\u7d22"}),(0,es.jsx)(fs,{$checked:de,disabled:E,children:(0,es.jsx)(ds,{type:"checkbox",checked:de,onChange:()=>{const e=!de;ue(e),ce("aiSwitchEnabled",e)},disabled:E})}),(0,es.jsxs)(hs,{className:"tooltip",children:["\u5f00\u542f\u540e\u4f7f\u7528AI\u4f18\u5316\u641c\u7d22\u67e5\u8be2",(0,es.jsx)("br",{}),"\u63d0\u4f9b\u66f4\u7cbe\u51c6\u7684\u5b66\u672f\u6587\u732e"]})]}),g&&(0,es.jsxs)(us,{children:[(0,es.jsx)(ps,{children:"\u83b7\u53d6\u7814\u7a76\u62a5\u544a"}),(0,es.jsx)(fs,{$checked:pe,disabled:E,children:(0,es.jsx)(ds,{type:"checkbox",checked:pe,onChange:()=>{const e=!pe;fe(e),ce("reportSwitchEnabled",e),p&&p(e)},disabled:E})}),(0,es.jsxs)(hs,{className:"tooltip",children:["\u5f00\u542f\u540e\u81ea\u52a8\u751f\u6210\u7814\u7a76\u5206\u6790\u62a5\u544a",(0,es.jsx)("br",{}),"\u603b\u7ed3\u6587\u732e\u8981\u70b9\u548c\u8d8b\u52bf"]})]})]}),(0,es.jsxs)(Ms,{children:[(0,es.jsx)(Fs,{children:"\u6570\u636e\u6e90\uff1a"}),(0,es.jsx)(Bs,{children:Object.keys(Fo).map(e=>(0,es.jsxs)(Us,{$active:o===e,onClick:()=>!Fo[e].disabled&&Ce(e),disabled:a||E||Fo[e].disabled,onMouseEnter:()=>ae(e),onMouseLeave:()=>ae(null),style:{position:"relative"},children:[(0,es.jsx)("span",{className:"desktop-name",children:Fo[e].name}),(0,es.jsx)("span",{className:"mobile-name",children:ge(e)}),(0,es.jsx)("span",{className:"mobile-icon",children:xe(e)}),(0,es.jsx)(Ks,{className:re===e?"visible":"",children:he(e)})]},e))})]}),(0,es.jsx)(Ws,{children:(0,es.jsx)(qs,{className:"search-instruction",$visible:!1,children:Y&&Z?"AI\u667a\u80fd\u641c\u7d22":"\u641c\u7d22"})})]})]}),(0,es.jsxs)(Cs,{$show:w,className:"filters-container",children:[(0,es.jsx)(Ls,{ref:ke}),(0,es.jsxs)(Es,{children:[(0,es.jsxs)("h4",{children:[S.name," \u7b5b\u9009\u6761\u4ef6"]}),(0,es.jsx)(_s,{children:S.fields.filter(e=>"basic"===e.category).map(Be)})]}),S.fields.some(e=>"advanced"===e.category)&&(0,es.jsxs)(Es,{children:[(0,es.jsx)("h4",{children:"\u9ad8\u7ea7\u7b5b\u9009"}),(0,es.jsx)(_s,{children:S.fields.filter(e=>"advanced"===e.category).map(Be)})]}),(0,es.jsxs)(Os,{children:[(0,es.jsx)("div",{className:"filter-status",children:Me>0?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)("span",{children:"\u5df2\u9009\u62e9"}),(0,es.jsx)("span",{className:"filter-count",children:Me}),(0,es.jsx)("span",{children:"\u4e2a\u7b5b\u9009\u6761\u4ef6"})]}):(0,es.jsx)("span",{children:"\u672a\u9009\u62e9\u4efb\u4f55\u7b5b\u9009\u6761\u4ef6"})}),(0,es.jsxs)("div",{className:"action-buttons",children:[(0,es.jsxs)(Rs,{type:"button",onClick:()=>{const e=je(S);_(e)},disabled:E,children:[(0,es.jsx)(ur,{size:16}),"\u6e05\u9664\u7b5b\u9009"]}),(0,es.jsxs)(Ns,{type:"button",onClick:()=>{if(y.trim()){const e=g&&pe;n(y.trim(),C,1,e),k(!1)}},disabled:E,children:[(0,es.jsx)(er,{size:16}),"\u5e94\u7528\u7b5b\u9009"]})]})]})]})]})]})},Vs=Le.div`
  margin-bottom: 12px;
  width: 100%;
  overflow: visible;
`,Gs=Le.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`,Qs=(Le.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`,Le.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`,Le.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${e=>e.checked?"#007acc":"white"};
  border: 1px solid ${e=>e.checked?"#007acc":"#ccc"};
  border-radius: 3px;
  transition: all 0.2s;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: ${e=>e.checked?"block":"none"};
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`,Le.div`
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 12px;
  width: 100%;
  overflow: visible;
  
  .info-column {
    grid-column: 1;
    width: 520px;
  }
  
  .analysis-cards {
    grid-column: 2;
    display: flex;
    padding: 0;
    gap: 12px;
    scroll-behavior: smooth;
    position: relative;
    height: 280px;
    
    /* 默认情况下的overflow设置 */
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
      display: none;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    touch-action: auto;
    pointer-events: auto;
  }
  
  /* 独立的遮罩容器，固定在可视区域 */
  .analysis-cards-wrapper {
    grid-column: 2;
    position: relative;
    height: 280px;
    overflow: hidden; /* 关键：隐藏超出的内容 */
    
    /* 左侧遮罩 - 半透明渐变，匹配应用背景色 */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 40px;
      /* 使用与应用背景渐变中间色调相近的颜色 */
      background: linear-gradient(to right, 
        rgba(220, 225, 232, 0.95), 
        rgba(220, 225, 232, 0.7), 
        rgba(220, 225, 232, 0.3), 
        transparent
      );
      z-index: 10;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    /* 右侧遮罩 - 半透明渐变，匹配应用背景色 */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40px;
      /* 使用与应用背景渐变中间色调相近的颜色 */
      background: linear-gradient(to left, 
        rgba(220, 225, 232, 0.95), 
        rgba(220, 225, 232, 0.7), 
        rgba(220, 225, 232, 0.3), 
        transparent
      );
      z-index: 10;
      pointer-events: none;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    /* 左侧遮罩层控制 */
    &.no-left-overflow::before {
      opacity: 0;
      pointer-events: none;
    }
    
    /* 右侧遮罩层控制 */
    &.no-right-overflow::after {
      opacity: 0;
      pointer-events: none;
    }
    
    /* 当没有任何溢出时隐藏所有遮罩层 */
    &.no-overflow {
      &::before,
      &::after {
        opacity: 0;
        pointer-events: none;
      }
    }
    
    .analysis-cards {
      grid-column: unset;
      width: 100%;
      height: 100%;
      overflow-x: auto; /* 确保可以水平滚动 */
      overflow-y: hidden; /* 隐藏垂直溢出 */
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 10px;
    
    .info-column, .analysis-cards-wrapper {
      grid-column: 1;
      width: 100%;
    }
    
    .analysis-cards-wrapper {
      height: auto;
      overflow: visible; /* 移动端恢复可见性 */
      
      /* 移动端移除遮罩效果 */
      &::before,
      &::after {
        display: none;
      }
      
      .analysis-cards {
        flex-direction: column;
        overflow: visible; /* 移动端垂直布局，需要显示所有内容 */
        overflow-x: visible;
        overflow-y: visible;
        height: auto;
        gap: 10px;
        touch-action: auto;
        pointer-events: auto;
      }
    }
  }
`),Xs=Le.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 280px; /* 减少卡片高度 */
  display: flex;
  flex-direction: column;
  overflow: visible;
  border: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  
  /* Analysis cards need fixed width in the scrollable row */
  .analysis-cards & {
    width: 350px;
    max-width: 350px;
    flex-shrink: 0;
    flex: none;
  }
  
  /* Content area that can scroll */
  .card-content {
    flex: 1;
    overflow: visible;
    padding-right: 0;
    margin-bottom: 8px; /* 为底部按钮留出空间 */
    
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
    
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  @media (max-width: 768px) {
    height: 280px;
    width: 100%;
    max-width: none;
  }
  
  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
  
  /* 高亮效果 - 减弱版本，无缩放 */
  &.highlighted {
    box-shadow: 
      0 0 0 2px rgba(24, 144, 255, 0.25), 
      0 2px 8px rgba(24, 144, 255, 0.15);
    background: rgba(24, 144, 255, 0.02);
    z-index: 20;
    border-color: rgba(24, 144, 255, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      background: rgba(24, 144, 255, 0.08);
      border-radius: 9px;
      z-index: -1;
      animation: highlight-pulse 4s ease-in-out infinite;
    }
    
    @keyframes highlight-pulse {
      0%, 100% {
        opacity: 0.3;
        background: rgba(24, 144, 255, 0.05);
      }
      50% {
        opacity: 0.6;
        background: rgba(24, 144, 255, 0.12);
      }
    }
  }
`,Js=Le(Xs)`
  border-left: 3px solid #007acc;
  display: flex;
  flex-direction: column;
  width: 520px;
  @media (max-width: 768px) {
    width: 100%;
  }
`,Zs=(Le(Xs)`
  border-left: 4px solid #28a745;
  display: ${e=>e.$isVisible?"block":"none"};
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`,Le(Xs)`
  border-left: 4px solid #fd7e14;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`),el=(Le(Xs)`
  border-left: 4px solid #007bff;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`,Le(Xs)`
  border-left: 4px solid #6f42c1;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`,Le(Xs)`
  border-left: 4px solid #fd7e14;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`,Le(Xs)`
  border-left: 4px solid #20c997;
  /* 确保内容不会被截断而显示滚动条 */
  overflow: hidden;
`,Le.span`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.$expanded?"5px":"4px"};
  padding: ${e=>e.$expanded?"5px 10px":"4px 8px"};
  border-radius: ${e=>e.$expanded?"14px":"12px"};
  font-size: ${e=>e.$expanded?"12px":"11px"};
  font-weight: 500;
  margin-left: ${e=>e.$expanded?"10px":"8px"};
  transition: all 0.2s ease;
  
  ${e=>"semantic"===e.$source&&"\n    background: rgba(40, 167, 69, 0.1);\n    color: #28a745;\n    border: 1px solid rgba(40, 167, 69, 0.2);\n  "}
  
  ${e=>"googleScholar"===e.$source&&"\n    background: rgba(0, 122, 204, 0.1);\n    color: #007acc;\n    border: 1px solid rgba(0, 122, 204, 0.2);\n  "}
  
  ${e=>"primaryScraping"===e.$source&&"\n    background: rgba(138, 43, 226, 0.1);\n    color: #8a2be2;\n    border: 1px solid rgba(138, 43, 226, 0.2);\n  "}
  
  ${e=>!e.$source&&"\n    background: rgba(108, 117, 125, 0.1);\n    color: #6c757d;\n    border: 1px solid rgba(108, 117, 125, 0.2);\n  "}
`,Le.div`
  margin-bottom: 10px; /* 减少底部边距 */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 6px; /* 减少底部内边距 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`),tl=Le.h4`
  color: #2c3e50;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,nl=Le.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,rl=Le.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 14px;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
  cursor: help;
  transition: all 0.2s ease;
  position: relative;
  
  ${e=>"semantic"===e.$source&&"\n    background: rgba(40, 167, 69, 0.1);\n    border: 1px solid rgba(40, 167, 69, 0.2);\n  "}
  
  ${e=>"googleScholar"===e.$source&&"\n    background: rgba(0, 122, 204, 0.1);\n    border: 1px solid rgba(0, 122, 204, 0.2);\n  "}
  
  ${e=>"primaryScraping"===e.$source&&"\n    background: rgba(138, 43, 226, 0.1);\n    border: 1px solid rgba(138, 43, 226, 0.2);\n  "}
  
  ${e=>!e.$source&&"\n    background: rgba(108, 117, 125, 0.1);\n    border: 1px solid rgba(108, 117, 125, 0.2);\n  "}
  
  &:hover {
    transform: scale(1.1);
    ${e=>"semantic"===e.$source&&"\n      background: rgba(40, 167, 69, 0.2);\n      box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);\n    "}
    
    ${e=>"googleScholar"===e.$source&&"\n      background: rgba(0, 122, 204, 0.2);\n      box-shadow: 0 2px 4px rgba(0, 122, 204, 0.2);\n    "}
    
    ${e=>"primaryScraping"===e.$source&&"\n      background: rgba(138, 43, 226, 0.2);\n      box-shadow: 0 2px 4px rgba(138, 43, 226, 0.2);\n    "}
    
    ${e=>!e.$source&&"\n      background: rgba(108, 117, 125, 0.2);\n      box-shadow: 0 2px 4px rgba(108, 117, 125, 0.2);\n    "}
  }
  
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 1000;
    margin-bottom: 4px;
    opacity: 1;
    pointer-events: none;
  }
  
  &:hover::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    margin-bottom: -4px;
    opacity: 1;
    pointer-events: none;
  }
`,al=Le.h3`
  color: #2c3e50;
  font-size: ${e=>e.$expanded?"18px":"16px"};
  font-weight: ${e=>e.$expanded?"700":"600"};
  line-height: 1.3;
  margin-bottom: ${e=>e.$expanded?"8px":"6px"};
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  margin: 0;

  &:hover {
    color: #1976d2;
  }
`,il=Le.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.$expanded?"10px":"6px"};
  margin-bottom: ${e=>e.$expanded?"10px":"6px"};
  padding: ${e=>e.$expanded?"8px 0":"4px 0"};
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  align-items: center;
`,ol=Le.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.$expanded?"4px":"3px"};
  color: #555;
  font-size: ${e=>e.$expanded?"13px":"11px"};
  font-weight: ${e=>e.$expanded?"500":"400"};
  
  svg {
    color: #007acc;
    flex-shrink: 0;
  }
  
  strong {
    color: #007acc;
    font-weight: ${e=>e.$expanded?"600":"500"};
  }
`,sl=Le.span`
  color: #555;
  font-size: ${e=>e.$expanded?"13px":"11px"};
  max-width: ${e=>e.$expanded?"300px":"200px"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ll=Le.span`
  color: #007acc;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #005fa3;
    text-decoration: underline;
  }
`,cl=Le.div`
  color: #444;
  line-height: 1.4;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 200px;
  letter-spacing: 0.2px;
`,dl=Le.button`
  background: none;
  border: none;
  color: #007acc;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 122, 204, 0.1);
  }
`,ul=Le.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.$expanded?"5px":"3px"};
  margin-top: ${e=>e.$expanded?"8px":"4px"};
  margin-bottom: ${e=>e.$expanded?"4px":"2px"};
`,pl=Le.span`
  background: #f8f9fa;
  color: #495057;
  padding: ${e=>e.$expanded?"3px 8px":"1px 6px"};
  border-radius: ${e=>e.$expanded?"10px":"8px"};
  font-size: ${e=>e.$expanded?"11px":"9px"};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.$expanded?"3px":"2px"};
  border: 1px solid rgba(0, 0, 0, 0.08);
  line-height: 1.2;
  transition: all 0.2s ease;
  max-width: ${e=>e.$expanded?"150px":"120px"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,fl=Le(pl)`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #6a1b9a;
  border-color: rgba(106, 27, 154, 0.2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(106, 27, 154, 0.2);
  }
`,hl=Le(pl)`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  color: #1976d2;
  border-color: rgba(25, 118, 210, 0.2);
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: linear-gradient(135deg, #bbdefb, #90caf9);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(25, 118, 210, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`,gl=Le(pl)`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  color: #2e7d32;
  border-color: rgba(46, 125, 50, 0.2);
  font-weight: 600;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(46, 125, 50, 0.2);
  }
`,xl=Le(pl)`
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  color: #e65100;
  border-color: rgba(230, 81, 0, 0.2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(230, 81, 0, 0.2);
  }
`,ml=Le(pl)`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  color: #7b1fa2;
  border-color: rgba(123, 31, 162, 0.2);
  font-size: ${e=>e.$expanded?"10px":"8px"};
  padding: ${e=>e.$expanded?"2px 6px":"1px 4px"};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(123, 31, 162, 0.2);
  }
`,bl=Le.div`
  display: flex !important;
  gap: 8px !important;
  margin-top: auto !important;
  padding-top: 8px !important;
  border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
  position: relative !important;
  z-index: 50 !important;
  background: white !important;
  width: 100% !important;
  bottom: 0 !important;
  left: 0 !important;
  box-sizing: border-box !important;
  justify-content: flex-start !important;
`,yl=Le.button`
  background: ${e=>e.$primary?"#1976d2 !important":"white !important"};
  color: ${e=>e.$primary?"white !important":"#555 !important"};
  border: 1px solid ${e=>e.$primary?"#1976d2 !important":"rgba(0, 0, 0, 0.12) !important"};
  border-radius: 4px !important;
  height: 28px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: ${e=>e.disabled?"not-allowed !important":"pointer !important"};
  transition: all 0.2s !important;
  position: relative !important;
  padding: 0 12px !important;
  flex: 0 0 auto !important;
  z-index: 60 !important;
  overflow: visible !important;
  font-weight: 500 !important;
  font-size: 13px !important;
  text-align: center !important;
  width: 100px !important;
  opacity: ${e=>e.disabled?"0.6 !important":"1 !important"};
  
  svg {
    margin-right: ${e=>e.$hasText?"4px !important":"0 !important"}; /* 减少图标右边距 */
    min-width: 14px !important; /* 减少图标最小宽度 */
    width: 14px !important; /* 减少图标大小 */
    height: 14px !important; /* 减少图标大小 */
  }
  
  span {
    white-space: nowrap !important;
    display: inline-block !important;
  }
  
  &:hover {
    background: ${e=>e.disabled?e.$primary?"#1976d2 !important":"white !important":e.$primary?"#1565c0 !important":"#f5f7fa !important"};
    border-color: ${e=>e.disabled?e.$primary?"#1976d2 !important":"rgba(0, 0, 0, 0.12) !important":e.$primary?"#1565c0 !important":"rgba(0, 0, 0, 0.2) !important"};
    transform: ${e=>e.disabled?"none !important":"translateY(-1px) !important"};
  }
  
  &:active {
    transform: ${e=>e.disabled?"none !important":"translateY(1px) !important"};
  }
`,vl=(Le.span`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 6px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  
  ${yl}:hover & {
    opacity: 1;
    visibility: visible;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
  }
`,Le.div`
  color: #aaa;
  font-style: italic;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`),wl=Le.div`
  color: #ddd;
  font-size: 24px;
  margin-bottom: 8px;
`,kl=Le.div`
  font-size: 14px;
`,Sl=Le.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
`,jl=Le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px; /* 固定加载区域高度 */
  width: 100%;
`,Cl=Le(Xs)`
  border-left: 3px solid ${e=>{switch(e.$type){case"purpose":default:return"#1976d2";case"methods":return"#6f42c1";case"metrics":return"#f57c00";case"results":return"#00897b"}}};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,_l=Le(tl)`
  color: ${e=>{switch(e.$type){case"purpose":default:return"#1976d2";case"methods":return"#6f42c1";case"metrics":return"#f57c00";case"results":return"#00897b"}}};
`,El=Le.div`
  flex: 1;
  color: #444;
  line-height: 1.4;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  max-height: 200px;
  letter-spacing: 0.2px;
`,$l=Le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 12px;
  color: #666;
  text-align: center;
  padding: 16px;
  font-size: 13px;
  line-height: 1.3;
`,zl=Le.button`
  background: ${e=>e.$loading?"#f5f7fa":"#1976d2"};
  color: ${e=>e.$loading?"#1976d2":"white"};
  border: 1px solid ${e=>e.$loading?"#1976d2":"transparent"};
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: ${e=>e.$loading?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: ${e=>e.$loading?"#f5f7fa":"#1565c0"};
    transform: ${e=>e.$loading?"none":"translateY(-1px)"};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  svg {
    animation: ${e=>e.$loading?"spin 1s linear infinite":"none"};
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`,Tl=Le(jl)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.92);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px; /* 减少间距 */
  backdrop-filter: blur(2px);
  
  svg {
    animation: spin 1s linear infinite;
    color: #1976d2;
    width: 20px; /* 减少加载图标大小 */
    height: 20px; /* 减少加载图标大小 */
  }
`,Pl=Le.div`
  color: #555;
  font-size: 13px;
  line-height: 1.2;
`,Al=Le.div`
  display: flex;
  margin-bottom: 8px; /* 减少底部边距 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`,Il=Le.button`
  background: none;
  border: none;
  padding: 4px 10px;
  font-size: 13px;
  color: ${e=>e.$active?"#1976d2":"#666"};
  cursor: pointer;
  border-bottom: 2px solid ${e=>e.$active?"#1976d2":"transparent"};
  transition: all 0.2s;
  line-height: 1.2;
  
  &:hover {
    color: ${e=>e.$active?"#1976d2":"#444"};
    background-color: ${e=>e.$active?"rgba(25, 118, 210, 0.04)":"rgba(0, 0, 0, 0.02)"};
  }
`,Ol=Le.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  
  input {
    margin-right: 4px;
  }
  
  label {
    font-size: 12px;
    cursor: pointer;
  }
`,Rl=Le.div`
  margin-top: 8px;
  padding: 8px;
  background: rgba(248, 250, 252, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border-left: 2px solid #fd7e14;
`,Nl=Le.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`,Ll=Le.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-shrink: 0;
`,Dl=Le.button`
  background: ${e=>e.$active?"#fd7e14":"rgba(248, 250, 252, 0.8)"};
  color: ${e=>e.$active?"white":"#666"};
  border: 1px solid ${e=>e.$active?"#fd7e14":"rgba(0, 0, 0, 0.08)"};
  border-radius: 6px;
  padding: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${e=>e.$active?"#e8690b":"rgba(253, 126, 20, 0.1)"};
    color: ${e=>e.$active?"white":"#fd7e14"};
    border-color: #fd7e14;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`,Ml=Le.div`
  flex: 1;
  max-height: 120px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15px;
    background: linear-gradient(transparent, rgba(248, 250, 252, 0.6));
    pointer-events: none;
  }
`,Fl=Le.div`
  color: #444;
  line-height: 1.3;
  font-size: 11px;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.1px;
  word-break: break-word;
`,Bl=Le.div`
  color: #999;
  font-style: italic;
  font-size: 10px;
  text-align: center;
  padding: 8px 0;
  opacity: 0.8;
`,Ul=e=>{var n,r;let{paper:a,onPaperClick:i,onAuthorClick:o,globalControls:s=!1,showInfo:l,showAbstract:c,showSnippet:d,showPurpose:u=!0,showMethods:p=!0,showMetrics:f=!0,showResults:h=!0,onAnalysisComplete:g,purposeAnalysis:x,methodsAnalysis:m,metricsAnalysis:b,resultsAnalysis:y,selectedModel:v=Ao.GPT_4O_2024,batchAnalyzing:w=!1,batchDimensions:k=[],onScroll:S=null,setScrollRef:j=null,hoveredCardType:C=null,translationData:_=null,onTranslationComplete:E=null,batchTranslating:$=!1}=e;const[z,T]=(0,t.useState)(!1),[P,A]=(0,t.useState)(x||null),[I,O]=(0,t.useState)(m||null),[R,N]=(0,t.useState)(b||null),[L,D]=(0,t.useState)(y||null),[M,F]=(0,t.useState)({purpose:!1,methods:!1,metrics:!1,results:!1}),[B,U]=(0,t.useState)({originalTitle:a.title,translatedTitle:null,originalAbstract:a.abstract||null,translatedAbstract:null,originalSnippet:(null===(n=a.tldr)||void 0===n?void 0:n.text)||null,translatedSnippet:null,model:null}),[W,q]=(0,t.useState)(!1),[K,H]=(0,t.useState)(!1),[Y,V]=(0,t.useState)({purpose:null,methods:null,metrics:null,results:null}),G=t.useRef({purpose:null,methods:null,metrics:null,results:null}),Q=(0,t.useRef)(null),[X,J]=(0,t.useState)(!1),[Z,ee]=(0,t.useState)(!1),te=(0,t.useCallback)(()=>{if(!Q.current)return;const e=Q.current,t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;J(t>5),ee(t+r<n-5)},[]),ne=()=>{Object.values(G.current).forEach(e=>{e&&clearTimeout(e)})};(0,t.useEffect)(()=>()=>ne(),[]),(0,t.useEffect)(()=>{j&&Q.current&&j(Q.current)},[j]),(0,t.useEffect)(()=>{const e=()=>{S&&Q.current&&S(Q.current.scrollLeft),te()},t=Q.current;if(t)return S&&t.addEventListener("scroll",e,{passive:!0}),()=>{S&&t.removeEventListener("scroll",e)}},[S,te]),(0,t.useEffect)(()=>{if(w&&k.length>0){const e={...M};k.forEach(t=>{switch(t){case"research_purpose":P||(e.purpose=!0);break;case"research_methods":I||(e.methods=!0);break;case"metrics":R||(e.metrics=!0);break;case"research_results":L||(e.results=!0)}}),F(e)}else w||(F({purpose:!1,methods:!1,metrics:!1,results:!1}),ne())},[w,k,P,I,R,L]),(0,t.useEffect)(()=>{q(!!$)},[$]),(0,t.useEffect)(()=>{_?(U(e=>({...e,..._})),(_.translatedTitle||_.translatedAbstract||_.translatedSnippet)&&H(!0)):H(!1)},[_]),(0,t.useEffect)(()=>{null!==x&&x!==P&&(A(x),F(e=>({...e,purpose:!1}))),null!==m&&m!==I&&(O(m),F(e=>({...e,methods:!1}))),null!==b&&b!==R&&(N(b),F(e=>({...e,metrics:!1}))),null!==y&&y!==L&&(D(y),F(e=>({...e,results:!1})))},[x,m,b,y]);const[re,ae]=(0,t.useState)(!0),[ie,oe]=(0,t.useState)(!1),[se,le]=(0,t.useState)(!0),[ce,de]=(0,t.useState)(!0),[ue,pe]=(0,t.useState)(!0),[fe,he]=(0,t.useState)(!0),[ge,xe]=(0,t.useState)("abstract");(0,t.useEffect)(()=>{!a.abstract&&a.tldr?xe("snippet"):xe("abstract")},[a]);const me=(e,t)=>{if(G.current[e]&&(clearTimeout(G.current[e]),G.current[e]=null),F(n=>({...n,[e]:t})),t){const t=w?15e3:3e4;G.current[e]=setTimeout(()=>{console.warn(`${e} \u5206\u6790\u8d85\u65f6\u81ea\u52a8\u7ed3\u675f ${w?"(\u6279\u91cf\u5206\u6790\u6a21\u5f0f)":""}`),F(t=>({...t,[e]:!1})),G.current[e]=null},t)}},be=e=>{if("string"===typeof e)return e.length>50?e.substring(0,47)+"...":e;if(e&&e.name){const t=e.name;return t.length>50?t.substring(0,47)+"...":t}return null},ye=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return e?e.length<=t?e:e.slice(0,t)+"...":""},ve=e=>e.externalIds?e.externalIds.DOI?`https://doi.org/${e.externalIds.DOI}`:e.externalIds.ArXiv?`https://arxiv.org/abs/${e.externalIds.ArXiv}`:e.externalIds.PubMed?`https://pubmed.ncbi.nlm.nih.gov/${e.externalIds.PubMed}/`:e.externalIds.ACL?`https://aclanthology.org/${e.externalIds.ACL}`:e.externalIds.DBLP?`https://dblp.org/rec/${e.externalIds.DBLP}`:null:null,we=s?c||d:ie,ke=s?u:se,Se=s?p:ce,je=s?f:ue,Ce=s?h:fe,_e=!we;(0,t.useEffect)(()=>{if(we||ke||Se||je||Ce){const e=setTimeout(te,100);return()=>clearTimeout(e)}J(!1),ee(!1)},[we,ke,Se,je,Ce,te]),(0,t.useEffect)(()=>{if(!Q.current)return;const e=new ResizeObserver(()=>{setTimeout(te,50)});return e.observe(Q.current),()=>{e.disconnect()}},[te]);const Ee=()=>K&&((null===_||void 0===_?void 0:_.translatedAbstract)||B.translatedAbstract)||a.abstract,$e=()=>{var e,t;return K?(null===_||void 0===_?void 0:_.translatedSnippet)||B.translatedSnippet||(null===(t=a.tldr)||void 0===t?void 0:t.text):null===(e=a.tldr)||void 0===e?void 0:e.text};return(0,es.jsxs)(Vs,{children:[!s&&(0,es.jsxs)(Gs,{children:[(0,es.jsxs)(Ol,{children:[(0,es.jsx)("input",{type:"checkbox",id:`summary-${a.paperId}`,checked:ie,onChange:()=>oe(!ie)}),(0,es.jsx)("label",{htmlFor:`summary-${a.paperId}`,children:"Summary"})]}),(0,es.jsxs)(Ol,{children:[(0,es.jsx)("input",{type:"checkbox",id:`purpose-${a.paperId}`,checked:se,onChange:()=>le(!se)}),(0,es.jsx)("label",{htmlFor:`purpose-${a.paperId}`,children:"Purpose"})]}),(0,es.jsxs)(Ol,{children:[(0,es.jsx)("input",{type:"checkbox",id:`methods-${a.paperId}`,checked:ce,onChange:()=>de(!ce)}),(0,es.jsx)("label",{htmlFor:`methods-${a.paperId}`,children:"Methods"})]}),(0,es.jsxs)(Ol,{children:[(0,es.jsx)("input",{type:"checkbox",id:`metrics-${a.paperId}`,checked:ue,onChange:()=>pe(!ue)}),(0,es.jsx)("label",{htmlFor:`metrics-${a.paperId}`,children:"Metrics"})]}),(0,es.jsxs)(Ol,{children:[(0,es.jsx)("input",{type:"checkbox",id:`results-${a.paperId}`,checked:fe,onChange:()=>he(!fe)}),(0,es.jsx)("label",{htmlFor:`results-${a.paperId}`,children:"Results"})]})]}),(0,es.jsxs)(Qs,{children:[(0,es.jsx)("div",{className:"info-column",children:(0,es.jsxs)(Js,{children:[(0,es.jsx)(el,{children:(0,es.jsx)("div",{children:(0,es.jsxs)(nl,{children:[(0,es.jsxs)(rl,{$source:a.source,"data-tooltip":"semantic"===a.source?"3rd api":"googleScholar"===a.source?"Google Scholar":"primaryScraping"===a.source?"Primary Scraping Scholar":"Unknown Source",children:["semantic"===a.source&&"\ud83c\udf93","googleScholar"===a.source&&"\ud83d\udd0d","primaryScraping"===a.source&&"\ud83d\udcab",!a.source&&"\ud83d\udcc4"]}),(0,es.jsx)(al,{$expanded:we,onClick:()=>{var e,t,n,r;if(e=a.paperId,t=a.title,n=a.position||0,r=a.source||"unknown",qo("paper_click",{paper_id:e,paper_title:(null===t||void 0===t?void 0:t.substring(0,100))||"Unknown",position:n,source:r,event_category:"engagement",event_label:`paper_click_${r}`}),i)i(a);else{const e=ve(a);e?(Vo(e,"paper_title_official"),window.open(e,"_blank")):a.url&&(Vo(a.url,"paper_title_semantic"),window.open(a.url,"_blank"))}},children:K&&((null===_||void 0===_?void 0:_.translatedTitle)||B.translatedTitle)||a.title})]})})}),(0,es.jsxs)(Sl,{children:[(0,es.jsxs)(il,{$expanded:we,children:[a.year&&(0,es.jsxs)(ol,{$expanded:we,children:[(0,es.jsx)(wn,{size:we?14:12}),(0,es.jsx)("strong",{children:a.year})]}),void 0!==a.citationCount&&(0,es.jsxs)(ol,{$expanded:we,children:[(0,es.jsx)(sr,{size:we?14:12}),(0,es.jsx)("strong",{children:a.citationCount})]}),void 0!==a.influentialCitationCount&&a.influentialCitationCount>0&&(0,es.jsxs)(ol,{$expanded:we,children:[(0,es.jsx)(yn,{size:we?14:12}),(0,es.jsx)("strong",{children:a.influentialCitationCount})]}),(0,es.jsxs)(ol,{$expanded:we,children:[(0,es.jsx)(dr,{size:we?14:12}),(0,es.jsx)(sl,{$expanded:we,children:(e=>{if(!e||0===e.length)return"\u672a\u77e5\u4f5c\u8005";const t=e.slice(0,3),n=t.map((e,n)=>(0,es.jsxs)("span",{children:[(0,es.jsx)(ll,{onClick:()=>o&&o(e),children:e.name||"\u672a\u77e5"}),n<t.length-1&&", "]},`author-${a.paperId}-${n}`));return e.length>3&&n.push((0,es.jsxs)("span",{children:[" \u7b49 ",e.length," \u4f4d\u4f5c\u8005"]},`more-authors-${a.paperId}`)),n})(a.authors)})]})]}),(0,es.jsxs)(ul,{$expanded:we,children:[be(a.venue)&&(0,es.jsxs)(hl,{$expanded:we,onClick:()=>{var e;(e=be(a.venue))&&navigator.clipboard.writeText(e).then(()=>{})},title:"\u70b9\u51fb\u590d\u5236\u671f\u520a\u540d\u79f0",children:["\ud83d\udcd6 ",be(a.venue)]}),a.isOpenAccess&&(0,es.jsx)(gl,{$expanded:we,children:"\ud83d\udd13 OA"},`open-access-${a.paperId}`),(()=>{let e=[];return a.s2FieldsOfStudy&&a.s2FieldsOfStudy.length>0?e=a.s2FieldsOfStudy.map(e=>"string"===typeof e?e:e.category||e.name||e).filter(Boolean):a.fieldsOfStudy&&a.fieldsOfStudy.length>0&&(e=a.fieldsOfStudy.map(e=>"string"===typeof e?e:e.category||e.name||e).filter(Boolean)),e})().slice(0,we?6:2).map((e,t)=>(0,es.jsx)(fl,{$expanded:we,children:e},`field-${a.paperId}-${t}`)),a.publicationTypes&&a.publicationTypes.slice(0,we?4:1).map((e,t)=>(0,es.jsx)(xl,{$expanded:we,children:e},`type-${a.paperId}-${t}`)),we&&a.externalIds&&(0,es.jsxs)(es.Fragment,{children:[a.externalIds.DOI&&(0,es.jsx)(ml,{$expanded:we,children:"DOI"},`doi-${a.paperId}`),a.externalIds.ArXiv&&(0,es.jsx)(ml,{$expanded:we,children:"arXiv"},`arxiv-${a.paperId}`),a.externalIds.PubMed&&(0,es.jsx)(ml,{$expanded:we,children:"PubMed"},`pubmed-${a.paperId}`)]})]}),_e&&(0,es.jsx)(Rl,{children:(0,es.jsxs)(Nl,{children:[(0,es.jsx)(Ml,{children:"abstract"===ge?Ee()?(0,es.jsx)(Fl,{children:ye(Ee(),300)}):(0,es.jsx)(Bl,{children:"\u8be5\u8bba\u6587\u6ca1\u6709\u63d0\u4f9b\u6458\u8981"}):$e()?(0,es.jsx)(Fl,{children:ye($e(),300)}):(0,es.jsx)(Bl,{children:"\u8be5\u8bba\u6587\u6ca1\u6709\u63d0\u4f9b AI \u6458\u8981"})}),(0,es.jsxs)(Ll,{children:[(0,es.jsx)(Dl,{$active:"abstract"===ge,onClick:()=>xe("abstract"),title:"Abstract",children:"\ud83d\udcc4"}),(0,es.jsx)(Dl,{$active:"snippet"===ge,onClick:()=>xe("snippet"),title:"AI Snippet",children:"\ud83e\udd16"})]})]})})]}),(0,es.jsxs)(bl,{id:"paper-action-buttons",children:[(ve(a)||a.url)&&(0,es.jsxs)(yl,{$primary:!0,$hasText:!0,onClick:()=>{const e=ve(a);e?(Vo(e,"paper_external_official"),window.open(e,"_blank")):a.url&&(Vo(a.url,"paper_external_semantic"),window.open(a.url,"_blank"))},id:"paper-external-link",children:[(0,es.jsx)(On,{size:16}),(0,es.jsx)("span",{children:ve(a)?"\u5b98\u65b9\u94fe\u63a5":"\u67e5\u770b\u8be6\u60c5"})]}),(null===(r=a.openAccessPdf)||void 0===r?void 0:r.url)&&(0,es.jsxs)(yl,{$hasText:!0,onClick:()=>{var e;null!==(e=a.openAccessPdf)&&void 0!==e&&e.url&&(Vo(a.openAccessPdf.url,"paper_pdf"),window.open(a.openAccessPdf.url,"_blank"))},id:"paper-pdf-link",children:[(0,es.jsx)(Ln,{size:16}),(0,es.jsx)("span",{children:"PDF\u5168\u6587"})]}),!$&&(0,es.jsxs)(yl,{$hasText:!0,onClick:async()=>{if(W||$)return;if(_||K&&(B.translatedTitle||B.translatedAbstract||B.translatedSnippet))H(!1);else if(!(B.translatedTitle||B.translatedAbstract||B.translatedSnippet)||K)try{Xo("translation","paper_content",a.paperId),q(!0);const e=await Do(a,v);U(e),H(!0),E&&E(a.paperId,e)}catch(e){console.error("\u7ffb\u8bd1\u5185\u5bb9\u5931\u8d25:",e)}finally{q(!1)}else H(!0)},id:"paper-translate-button",disabled:W,children:[(0,es.jsx)(Dn,{size:16}),(0,es.jsx)("span",{children:W?"\u7ffb\u8bd1\u4e2d...":K&&(_||B.translatedTitle||B.translatedAbstract||B.translatedSnippet)?"\u8fd8\u539f":"\u7ffb\u8bd1"})]})]})]})}),(0,es.jsx)("div",{className:`analysis-cards-wrapper ${X||Z?"":"no-overflow"} ${X?"":"no-left-overflow"} ${Z?"":"no-right-overflow"}`,children:(0,es.jsxs)("div",{className:"analysis-cards",ref:Q,children:[we&&(0,es.jsxs)(Zs,{className:"summary"===C?"highlighted":"",children:[(0,es.jsxs)(el,{children:[(0,es.jsx)(tl,{children:"Summary"}),Ee()&&Ee().length>300&&"abstract"===ge&&(0,es.jsx)(dl,{onClick:()=>T(!z),children:z?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(En,{size:14})," \u6536\u8d77"]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(jn,{size:14})," \u5c55\u5f00"]})})]}),(0,es.jsxs)(Al,{children:[(0,es.jsx)(Il,{$active:"abstract"===ge,onClick:()=>xe("abstract"),children:"Abstract"}),(0,es.jsx)(Il,{$active:"snippet"===ge,onClick:()=>xe("snippet"),children:"AI Snippet"})]}),(0,es.jsx)(Sl,{children:"abstract"===ge?Ee()?(0,es.jsx)(cl,{children:z?Ee():ye(Ee())}):(0,es.jsxs)(vl,{children:[(0,es.jsx)(wl,{children:(0,es.jsx)(pn,{size:28})}),(0,es.jsx)(kl,{children:"\u8be5\u8bba\u6587\u6ca1\u6709\u63d0\u4f9b\u6458\u8981"})]}):$e()?(0,es.jsx)(cl,{children:$e()}):(0,es.jsxs)(vl,{children:[(0,es.jsx)(wl,{children:(0,es.jsx)(pn,{size:28})}),(0,es.jsx)(kl,{children:"\u8be5\u8bba\u6587\u6ca1\u6709\u63d0\u4f9b AI \u6458\u8981"})]})})]}),ke&&(0,es.jsxs)(Cl,{$type:"purpose",className:"purpose"===C?"highlighted":"",children:[(0,es.jsx)(el,{children:(0,es.jsx)(_l,{$type:"purpose",children:"\u7814\u7a76\u76ee\u7684"})}),(0,es.jsx)(Sl,{children:P?(0,es.jsx)(El,{children:P}):(0,es.jsxs)($l,{children:[(0,es.jsx)("span",{children:"\u70b9\u51fb\u5206\u6790\u6b64\u8bba\u6587\u7684\u7814\u7a76\u76ee\u7684"}),(0,es.jsxs)(zl,{onClick:async()=>{if(!M.purpose){Xo("ai_analysis","research_purpose",a.paperId);try{me("purpose",!0);const e=await Ro(a,"research_purpose",v);A(e),g&&g(a.paperId,"research_purpose",e)}catch(e){console.error("\u5206\u6790\u7814\u7a76\u76ee\u7684\u5931\u8d25:",e),A("\u5206\u6790\u5931\u8d25: "+e.message),V(t=>({...t,purpose:e}))}finally{me("purpose",!1)}}},$loading:M.purpose,children:[(0,es.jsx)(Jn,{size:14}),M.purpose?"\u5206\u6790\u4e2d...":"\u5f00\u59cb\u5206\u6790"]})]})}),M.purpose&&(0,es.jsxs)(Tl,{children:[(0,es.jsx)(Jn,{size:24}),(0,es.jsx)(Pl,{children:"AI \u6b63\u5728\u5206\u6790..."})]})]}),Se&&(0,es.jsxs)(Cl,{$type:"methods",className:"methods"===C?"highlighted":"",children:[(0,es.jsx)(el,{children:(0,es.jsx)(_l,{$type:"methods",children:"\u7814\u7a76\u65b9\u6cd5"})}),(0,es.jsx)(Sl,{children:I?(0,es.jsx)(El,{children:I}):(0,es.jsxs)($l,{children:[(0,es.jsx)("span",{children:"\u70b9\u51fb\u5206\u6790\u6b64\u8bba\u6587\u7684\u7814\u7a76\u65b9\u6cd5"}),(0,es.jsxs)(zl,{onClick:async()=>{if(!M.methods){Xo("ai_analysis","research_methods",a.paperId);try{me("methods",!0);const e=await Ro(a,"research_methods",v);O(e),g&&g(a.paperId,"research_methods",e)}catch(e){console.error("\u5206\u6790\u7814\u7a76\u65b9\u6cd5\u5931\u8d25:",e),O("\u5206\u6790\u5931\u8d25: "+e.message),V(t=>({...t,methods:e}))}finally{me("methods",!1)}}},$loading:M.methods,children:[(0,es.jsx)(Jn,{size:14}),M.methods?"\u5206\u6790\u4e2d...":"\u5f00\u59cb\u5206\u6790"]})]})}),M.methods&&(0,es.jsxs)(Tl,{children:[(0,es.jsx)(Jn,{size:24}),(0,es.jsx)(Pl,{children:"AI \u6b63\u5728\u5206\u6790..."})]})]}),je&&(0,es.jsxs)(Cl,{$type:"metrics",className:"metrics"===C?"highlighted":"",children:[(0,es.jsx)(el,{children:(0,es.jsx)(_l,{$type:"metrics",children:"\u6d4b\u91cf\u6307\u6807"})}),(0,es.jsx)(Sl,{children:R?(0,es.jsx)(El,{children:R}):(0,es.jsxs)($l,{children:[(0,es.jsx)("span",{children:"\u70b9\u51fb\u5206\u6790\u6b64\u8bba\u6587\u7684\u6d4b\u91cf\u6307\u6807"}),(0,es.jsxs)(zl,{onClick:async()=>{if(!M.metrics){Xo("ai_analysis","metrics",a.paperId);try{me("metrics",!0);const e=await Ro(a,"metrics",v);N(e),g&&g(a.paperId,"metrics",e)}catch(e){console.error("\u5206\u6790\u6d4b\u91cf\u6307\u6807\u5931\u8d25:",e),N("\u5206\u6790\u5931\u8d25: "+e.message),V(t=>({...t,metrics:e}))}finally{me("metrics",!1)}}},$loading:M.metrics,children:[(0,es.jsx)(Jn,{size:14}),M.metrics?"\u5206\u6790\u4e2d...":"\u5f00\u59cb\u5206\u6790"]})]})}),M.metrics&&(0,es.jsxs)(Tl,{children:[(0,es.jsx)(Jn,{size:24}),(0,es.jsx)(Pl,{children:"AI \u6b63\u5728\u5206\u6790..."})]})]}),Ce&&(0,es.jsxs)(Cl,{$type:"results",className:"results"===C?"highlighted":"",children:[(0,es.jsx)(el,{children:(0,es.jsx)(_l,{$type:"results",children:"\u7814\u7a76\u7ed3\u679c"})}),(0,es.jsx)(Sl,{children:L?(0,es.jsx)(El,{children:L}):(0,es.jsxs)($l,{children:[(0,es.jsx)("span",{children:"\u70b9\u51fb\u5206\u6790\u6b64\u8bba\u6587\u7684\u7814\u7a76\u7ed3\u679c"}),(0,es.jsxs)(zl,{onClick:async()=>{if(!M.results){Xo("ai_analysis","research_results",a.paperId);try{me("results",!0);const e=await Ro(a,"research_results",v);D(e),g&&g(a.paperId,"research_results",e)}catch(e){console.error("\u5206\u6790\u7814\u7a76\u7ed3\u679c\u5931\u8d25:",e),D("\u5206\u6790\u5931\u8d25: "+e.message),V(t=>({...t,results:e}))}finally{me("results",!1)}}},$loading:M.results,children:[(0,es.jsx)(Jn,{size:14}),M.results?"\u5206\u6790\u4e2d...":"\u5f00\u59cb\u5206\u6790"]})]})}),M.results&&(0,es.jsxs)(Tl,{children:[(0,es.jsx)(Jn,{size:24}),(0,es.jsx)(Pl,{children:"AI \u6b63\u5728\u5206\u6790..."})]})]})]})})]})]})},Wl=Ne`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,ql=Ne`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,Kl=(Le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
`,Le.div`
  width: 40px;
  height: 40px;
  border: 4px solid #e1e5e9;
  border-top: 4px solid #007acc;
  border-radius: 50%;
  animation: ${Wl} 1s linear infinite;
  margin-bottom: 16px;
`,Le.div`
  color: #666;
  font-size: 16px;
  animation: ${ql} 2s ease-in-out infinite;
`,Le.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 16px;
`),Hl=Le.div`
  height: ${e=>e.height||"16px"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: ${e=>e.marginBottom||"12px"};
  animation: ${Ne`
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  `} 1.5s ease-in-out infinite;
`,Yl=Le(Hl)`
  height: 24px;
  width: 80%;
  margin-bottom: 16px;
`,Vl=Le.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Gl=Le(Hl)`
  height: 14px;
  width: 80px;
  margin-bottom: 0;
`,Ql=Le(Hl)`
  height: 14px;
  margin-bottom: 8px;
  
  &:last-child {
    width: 60%;
  }
`,Xl=Le.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`,Jl=Le(Hl)`
  height: 36px;
  width: 100px;
  margin-bottom: 0;
`,Zl=()=>(0,es.jsxs)(Kl,{children:[(0,es.jsx)(Yl,{}),(0,es.jsxs)(Vl,{children:[(0,es.jsx)(Gl,{}),(0,es.jsx)(Gl,{}),(0,es.jsx)(Gl,{})]}),(0,es.jsx)(Ql,{}),(0,es.jsx)(Ql,{}),(0,es.jsx)(Ql,{}),(0,es.jsx)(Ql,{}),(0,es.jsxs)(Xl,{children:[(0,es.jsx)(Jl,{}),(0,es.jsx)(Jl,{})]})]}),ec=e=>{let{count:t=3}=e;return(0,es.jsx)("div",{children:Array.from({length:t},(e,t)=>(0,es.jsx)(Zl,{},`skeleton-${t}`))})},tc=Le.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  gap: 8px;
`,nc=Le.button`
  background: ${e=>e.$active?"#007acc":"white"};
  color: ${e=>e.$active?"white":"#666"};
  border: 1px solid ${e=>e.$active?"#007acc":"#e1e5e9"};
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;

  &:hover:not(:disabled) {
    background: ${e=>e.$active?"#005fa3":"#f5f5f5"};
    border-color: ${e=>e.$active?"#005fa3":"#007acc"};
    color: ${e=>e.$active?"white":"#007acc"};
  }

  &:disabled {
    background: #f8f9fa;
    color: #ccc;
    border-color: #e1e5e9;
    cursor: not-allowed;
  }
`,rc=Le.div`
  color: #666;
  font-size: 14px;
  margin: 0 16px;
  white-space: nowrap;
`,ac=Le.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
`,ic=Le.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  color: #ccc;
`,oc=e=>{let{currentPage:t,totalResults:n,resultsPerPage:r,onPageChange:a,maxVisiblePages:i=5}=e;const o=Math.ceil(n/r);if(o<=1)return null;const s=(t-1)*r+1,l=Math.min(t*r,n),c=(()=>{const e=[],n=Math.floor(i/2);let r=Math.max(1,t-n),a=Math.min(o,r+i-1);a-r+1<i&&(r=Math.max(1,a-i+1)),r>1&&(e.push(1),r>2&&e.push("ellipsis-start"));for(let t=r;t<=a;t++)e.push(t);return a<o&&(a<o-1&&e.push("ellipsis-end"),e.push(o)),e})();return(0,es.jsxs)(es.Fragment,{children:[(0,es.jsxs)(ac,{children:["\u663e\u793a\u7b2c ",s.toLocaleString()," - ",l.toLocaleString()," \u6761\uff0c \u5171 ",n.toLocaleString()," \u6761\u7ed3\u679c"]}),(0,es.jsxs)(tc,{children:[(0,es.jsx)(nc,{onClick:()=>{t>1&&a(t-1)},disabled:1===t,title:"\u4e0a\u4e00\u9875",children:(0,es.jsx)(Cn,{size:16})}),c.map((e,n)=>"string"===typeof e?(0,es.jsx)(ic,{children:(0,es.jsx)(Gn,{size:16})},e):(0,es.jsx)(nc,{$active:e===t,onClick:()=>(e=>{e!==t&&e>=1&&e<=o&&a(e)})(e),children:e},e)),(0,es.jsx)(nc,{onClick:()=>{t<o&&a(t+1)},disabled:t===o,title:"\u4e0b\u4e00\u9875",children:(0,es.jsx)(_n,{size:16})}),(0,es.jsxs)(rc,{children:["\u7b2c ",t," \u9875\uff0c\u5171 ",o," \u9875"]})]})]})},sc=new Map;const lc=new class{constructor(){this.cache=sc,this.requestQueue=new Map}async getIPLocation(e){if(this.cache.has(e))return this.cache.get(e);if(this.requestQueue.has(e))return this.requestQueue.get(e);if(!e||"unknown"===e||"local_user"===e){const t={country:"\u672a\u77e5",region:"",city:"",displayText:"\u672a\u77e5\u4f4d\u7f6e",flag:"\ud83c\udf0d"};return this.cache.set(e,t),t}if(this.isLocalIP(e)){const t={country:"\u672c\u5730",region:"",city:"",displayText:"\u672c\u5730\u7f51\u7edc",flag:"\ud83c\udfe0"};return this.cache.set(e,t),t}const t=this.fetchIPLocation(e);this.requestQueue.set(e,t);try{const n=await t;return this.cache.set(e,n),n}catch(n){console.warn("IP\u5730\u7406\u4f4d\u7f6e\u89e3\u6790\u5931\u8d25:",e,n.message);const t={country:"\u672a\u77e5",region:"",city:"",displayText:"\u89e3\u6790\u5931\u8d25",flag:"\u2753"};return this.cache.set(e,t),t}finally{this.requestQueue.delete(e)}}async fetchIPLocation(e){const t=[{url:`https://ipapi.co/${e}/json/`,parseResponse:e=>({country:e.country_name||"\u672a\u77e5",region:e.region||"",city:e.city||"",displayText:this.formatDisplayText(e.country_name,e.region,e.city),flag:this.getCountryFlag(e.country_code)})},{url:`https://api.ip.sb/geoip/${e}`,parseResponse:e=>({country:e.country||"\u672a\u77e5",region:e.region||"",city:e.city||"",displayText:this.formatDisplayText(e.country,e.region,e.city),flag:this.getCountryFlag(e.country_code)})},{url:`https://api.ipgeolocation.io/ipgeo?apiKey=free&ip=${e}`,parseResponse:e=>({country:e.country_name||"\u672a\u77e5",region:e.state_prov||"",city:e.city||"",displayText:this.formatDisplayText(e.country_name,e.state_prov,e.city),flag:this.getCountryFlag(e.country_code2)})}];for(let r=0;r<t.length;r++){const a=t[r];try{const t=await $o.get(a.url,{timeout:5e3,headers:{Accept:"application/json"}}),n=a.parseResponse(t.data);return console.log(`IP\u5730\u7406\u4f4d\u7f6e\u89e3\u6790\u6210\u529f (API ${r+1}):`,e,n.displayText),n}catch(n){if(console.warn(`IP\u5730\u7406\u4f4d\u7f6eAPI ${r+1}\u5931\u8d25:`,n.message),r===t.length-1)throw new Error("\u6240\u6709IP\u5730\u7406\u4f4d\u7f6eAPI\u90fd\u5931\u8d25")}}}formatDisplayText(e,t,n){const r=[];return n&&n!==t&&r.push(n),t&&t!==e&&r.push(t),e&&r.push(e),r.length>0?r.join(", "):"\u672a\u77e5\u4f4d\u7f6e"}getCountryFlag(e){if(!e||2!==e.length)return"\ud83c\udf0d";return{CN:"\ud83c\udde8\ud83c\uddf3",US:"\ud83c\uddfa\ud83c\uddf8",JP:"\ud83c\uddef\ud83c\uddf5",KR:"\ud83c\uddf0\ud83c\uddf7",GB:"\ud83c\uddec\ud83c\udde7",DE:"\ud83c\udde9\ud83c\uddea",FR:"\ud83c\uddeb\ud83c\uddf7",CA:"\ud83c\udde8\ud83c\udde6",AU:"\ud83c\udde6\ud83c\uddfa",RU:"\ud83c\uddf7\ud83c\uddfa",IN:"\ud83c\uddee\ud83c\uddf3",SG:"\ud83c\uddf8\ud83c\uddec",HK:"\ud83c\udded\ud83c\uddf0",TW:"\ud83c\uddf9\ud83c\uddfc",MY:"\ud83c\uddf2\ud83c\uddfe",TH:"\ud83c\uddf9\ud83c\udded"}[e.toUpperCase()]||this.convertToFlag(e)}convertToFlag(e){if(!e||2!==e.length)return"\ud83c\udf0d";try{const t=e.toUpperCase().split("").map(e=>127397+e.charCodeAt(0));return String.fromCodePoint(...t)}catch(t){return"\ud83c\udf0d"}}isLocalIP(e){if(!e)return!1;return[/^127\./,/^192\.168\./,/^10\./,/^172\.(1[6-9]|2[0-9]|3[0-1])\./,/^::1$/,/^fe80:/,/^localhost$/i].some(t=>t.test(e))}clearCache(){this.cache.clear()}getCacheStats(){return{size:this.cache.size,entries:Array.from(this.cache.entries())}}async preloadIPs(e){const t=[...new Set(e.filter(e=>e&&!this.cache.has(e)))];if(0===t.length)return;console.log(`\u9884\u52a0\u8f7d${t.length}\u4e2aIP\u5730\u7406\u4f4d\u7f6e...`);for(let n=0;n<t.length;n+=5){const e=t.slice(n,n+5);await Promise.allSettled(e.map(e=>this.getIPLocation(e))),n+5<t.length&&await new Promise(e=>setTimeout(e,200))}console.log("IP\u5730\u7406\u4f4d\u7f6e\u9884\u52a0\u8f7d\u5b8c\u6210")}},cc=lc,dc=Le.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: ${e=>e.$clickable?"#f8f9fa":"transparent"};
  border: 1px solid ${e=>e.$clickable?"#e9ecef":"transparent"};

  &:hover {
    background: ${e=>e.$clickable?"#e9ecef":"#f8f9fa"};
    transform: ${e=>e.$clickable?"translateY(-1px)":"none"};
  }
`,uc=Le.span`
  font-size: 13px;
  color: #495057;
  font-weight: 500;
  white-space: nowrap;
`,pc=Le.span`
  font-size: 14px;
  margin-right: 2px;
`,fc=Le.span`
  font-size: 13px;
  color: #6c757d;
  font-style: italic;
`,hc=Le.div`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  opacity: ${e=>e.$show?1:0};
  visibility: ${e=>e.$show?"visible":"hidden"};
  transition: all 0.3s ease;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`,gc=Le(zn)`
  font-size: 12px;
  color: #6c757d;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-left: 4px;

  ${dc}:hover & {
    opacity: 1;
  }
`,xc=e=>{let{ip:n,showCopyIcon:r=!0,clickable:a=!0}=e;const[i,o]=(0,t.useState)(null),[s,l]=(0,t.useState)(!0),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1);(0,t.useEffect)(()=>{n&&(async()=>{l(!0);try{const e=await cc.getIPLocation(n);o(e)}catch(e){console.error("\u83b7\u53d6IP\u5730\u7406\u4f4d\u7f6e\u5931\u8d25:",e),o({country:"\u672a\u77e5",region:"",city:"",displayText:"\u89e3\u6790\u5931\u8d25",flag:"\u2753"})}finally{l(!1)}})()},[n]);return s?(0,es.jsxs)(dc,{children:[(0,es.jsx)(Kn,{size:12,color:"#6c757d"}),(0,es.jsx)(fc,{children:"\u89e3\u6790\u4e2d..."})]}):i?(0,es.jsxs)(dc,{$clickable:a,onClick:async()=>{if(a&&n)try{await navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}catch(e){console.error("\u590d\u5236IP\u5931\u8d25:",e);const t=document.createElement("textarea");t.value=n,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),p(!0),setTimeout(()=>p(!1),2e3)}},onMouseEnter:()=>{a&&d(!0)},onMouseLeave:()=>{d(!1)},title:a?`\u70b9\u51fb\u590d\u5236IP: ${n}`:n,children:[(0,es.jsx)(pc,{children:i.flag}),(0,es.jsx)(uc,{children:i.displayText}),r&&a&&(0,es.jsx)(gc,{}),a&&(0,es.jsxs)(hc,{$show:c&&!u,children:["IP: ",n," (\u70b9\u51fb\u590d\u5236)"]}),u&&(0,es.jsx)(hc,{$show:!0,children:"\u2713 \u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"})]}):(0,es.jsx)(dc,{children:(0,es.jsx)("span",{style:{fontSize:"13px",color:"#6c757d"},children:n||"\u672a\u77e5IP"})})},mc=Le.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,bc=Le.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1200px;
  height: 85%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,yc=Le.div`
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vc=Le.h2`
  margin: 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
`,wc=Le.div`
  display: flex;
  gap: 10px;
`,kc=Le.button`
  background: ${e=>e.$danger?"#dc3545":"#007acc"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${e=>e.$danger?"#c82333":"#005fa3"};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,Sc=Le.button`
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  &:hover {
    background: #5a6268;
  }
`,jc=Le.div`
  padding: 15px 20px;
  background: #f8f9fa;
  border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`,Cc=Le.div`
  text-align: center;
`,_c=Le.div`
  font-size: 24px;
  font-weight: bold;
  color: ${e=>e.color||"#333"};
`,Ec=Le.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`,$c=Le.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
`,zc=Le.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`,Tc=Le.th`
  background: #f8f9fa;
  padding: 12px 8px;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  color: #495057;
  position: sticky;
  top: 0;
`,Pc=Le.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }

  &:hover {
    background: #e9ecef;
  }
`,Ac=Le.td`
  padding: 8px;
  border-bottom: 1px solid #dee2e6;
  vertical-align: top;
`,Ic=Le.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: ${e=>e.$success?"#d4edda":"#f8d7da"};
  color: ${e=>e.$success?"#155724":"#721c24"};
`,Oc=Le.div`
  color: #dc3545;
  font-size: 12px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rc=Le.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`,Nc=Le.label`
  font-size: 14px;
  color: #495057;
  display: flex;
  align-items: center;
  gap: 8px;
`,Lc=Le.select`
  padding: 6px 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
`,Dc=Le.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 12px 20px;
  margin: 0 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  
  .error-content {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
  }
  
  .alert-icon {
    color: #dc3545;
    flex-shrink: 0;
  }
  
  .close-button {
    background: none;
    border: none;
    color: #721c24;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;
    
    &:hover {
      background: rgba(114, 28, 36, 0.1);
    }
  }
`,Mc=e=>({semantic:"3rd api",googleScholar:"Google Scholar",primaryScraping:"Primary Scraping Scholar"}[e]||e),Fc=e=>{let{onClose:n}=e;const[r,a]=(0,t.useState)([]),[i,o]=(0,t.useState)({}),[s,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(!1),[g,x]=(0,t.useState)("");(0,t.useEffect)(()=>{if(g){const e=setTimeout(()=>{x("")},8e3);return()=>clearTimeout(e)}},[g]);const m=async()=>{h(!0);try{const e=await To.getServerLogs();if(a(e),x(""),e.length>0){const t=e.map(e=>e.ip).filter(e=>e);cc.preloadIPs(t)}}catch(g){console.error("\u52a0\u8f7d\u65e5\u5fd7\u5931\u8d25:",g),a([]),o({}),x(g.message||"\u52a0\u8f7d\u65e5\u5fd7\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}finally{h(!1)}};(0,t.useEffect)(()=>{m()},[]);const b=r.filter(e=>(!s||e.dataSource===s)&&(!("success"===c&&!e.success)&&(("failed"!==c||!e.success)&&("empty"!==c||"empty"===e.resultStatus)))),y=To.getStatistics(b),v=[...new Set(r.map(e=>e.dataSource))].sort();return(0,es.jsx)(mc,{onClick:e=>e.target===e.currentTarget&&n(),children:(0,es.jsxs)(bc,{onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(yc,{children:[(0,es.jsxs)(vc,{children:[(0,es.jsx)(Fn,{size:24}),"API\u8c03\u7528\u65e5\u5fd7 (\u670d\u52a1\u5668)"]}),(0,es.jsxs)(wc,{children:[(0,es.jsxs)(kc,{onClick:()=>{m()},disabled:f,children:[(0,es.jsx)(Jn,{size:16}),f?"\u52a0\u8f7d\u4e2d...":"\u5237\u65b0"]}),(0,es.jsxs)(kc,{onClick:()=>{To.exportLogsAsJSON(r)},children:[(0,es.jsx)(An,{size:16}),"\u5bfc\u51faJSON"]}),(0,es.jsxs)(kc,{onClick:()=>{To.exportLogsAsCSV(r)},children:[(0,es.jsx)(An,{size:16}),"\u5bfc\u51faCSV"]}),(0,es.jsxs)(kc,{onClick:()=>p(!u),children:[u?(0,es.jsx)(Rn,{size:16}):(0,es.jsx)(Nn,{size:16}),u?"\u9690\u85cf\u8be6\u60c5":"\u663e\u793a\u8be6\u60c5"]}),("true"==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_ENABLE_LOG_DELETE||"localhost"===window.location.hostname)&&(0,es.jsxs)(kc,{$danger:!0,onClick:async()=>{if(!window.confirm("\u26a0\ufe0f \u5371\u9669\u64cd\u4f5c\uff1a\u786e\u5b9a\u8981\u6e05\u7a7a\u6240\u6709\u65e5\u5fd7\u5417\uff1f\u6b64\u64cd\u4f5c\u4e0d\u53ef\u64a4\u9500\u3002"))return;if("DELETE_ALL_LOGS"===window.prompt('\ud83d\udd10 \u5b89\u5168\u9a8c\u8bc1\uff1a\u8bf7\u8f93\u5165\u786e\u8ba4\u7801 "DELETE_ALL_LOGS" \u6765\u786e\u8ba4\u6e05\u7a7a\u64cd\u4f5c\uff1a\n\n\u6ce8\u610f\uff1a\u6b64\u64cd\u4f5c\u5c06\u6c38\u4e45\u5220\u9664\u6240\u6709API\u8c03\u7528\u65e5\u5fd7\uff0c\u65e0\u6cd5\u6062\u590d\uff01')){if(window.confirm("\ud83d\udea8 \u6700\u7ec8\u786e\u8ba4\uff1a\u60a8\u5373\u5c06\u5220\u9664\u6240\u6709\u65e5\u5fd7\u6570\u636e\uff0c\u786e\u5b9a\u7ee7\u7eed\u5417\uff1f")){h(!0),x("");try{console.warn("\ud83d\uddd1\ufe0f \u7ba1\u7406\u5458\u6267\u884c\u65e5\u5fd7\u6e05\u7a7a\u64cd\u4f5c:",(new Date).toISOString());await To.clearServerLogs()?(console.log("\u2705 \u65e5\u5fd7\u6e05\u7a7a\u6210\u529f"),await m(),alert("\u2705 \u65e5\u5fd7\u5df2\u6e05\u7a7a\u5b8c\u6210")):x("\u6e05\u7a7a\u65e5\u5fd7\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}catch(g){console.error("\u6e05\u7a7a\u65e5\u5fd7\u5931\u8d25:",g),x(g.message||"\u6e05\u7a7a\u65e5\u5fd7\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}finally{h(!1)}}}else alert("\u274c \u786e\u8ba4\u7801\u9519\u8bef\uff0c\u64cd\u4f5c\u5df2\u53d6\u6d88\u3002")},disabled:f,children:[(0,es.jsx)(or,{size:16}),"\ud83d\uddd1\ufe0f \u5371\u9669\uff1a\u6e05\u7a7a\u65e5\u5fd7"]}),(0,es.jsx)(Sc,{onClick:n,children:"\u5173\u95ed"})]})]}),g&&(0,es.jsxs)(Dc,{children:[(0,es.jsxs)("div",{className:"error-content",children:[(0,es.jsx)(pn,{size:16,className:"alert-icon"}),(0,es.jsx)("span",{children:g})]}),(0,es.jsx)("button",{className:"close-button",onClick:()=>x(""),title:"\u5173\u95ed\u9519\u8bef\u63d0\u793a",children:(0,es.jsx)(ur,{size:16})})]}),(0,es.jsxs)(jc,{children:[(0,es.jsxs)(Cc,{children:[(0,es.jsx)(_c,{children:y.totalRequests||0}),(0,es.jsx)(Ec,{children:"\u603b\u8bf7\u6c42\u6570"})]}),(0,es.jsxs)(Cc,{children:[(0,es.jsx)(_c,{color:"#28a745",children:y.successfulRequests||0}),(0,es.jsx)(Ec,{children:"\u6210\u529f\u8bf7\u6c42"})]}),(0,es.jsxs)(Cc,{children:[(0,es.jsx)(_c,{color:"#dc3545",children:y.failedRequests||0}),(0,es.jsx)(Ec,{children:"\u5931\u8d25\u8bf7\u6c42"})]}),(0,es.jsxs)(Cc,{children:[(0,es.jsx)(_c,{color:"#ffc107",children:y.emptyRequests||0}),(0,es.jsx)(Ec,{children:"\u7a7a\u54cd\u5e94"})]}),(0,es.jsxs)(Cc,{children:[(0,es.jsxs)(_c,{children:[y.averageResponseTime||0,"ms"]}),(0,es.jsx)(Ec,{children:"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4"})]}),(0,es.jsxs)(Cc,{children:[(0,es.jsxs)(_c,{color:"#17a2b8",children:[y.totalRequests?(y.successfulRequests/y.totalRequests*100).toFixed(1):0,"%"]}),(0,es.jsx)(Ec,{children:"\u6210\u529f\u7387"})]})]}),(0,es.jsxs)(Rc,{children:[(0,es.jsxs)(Nc,{children:["\u6570\u636e\u6e90\u7b5b\u9009:",(0,es.jsxs)(Lc,{value:s,onChange:e=>l(e.target.value),children:[(0,es.jsx)("option",{value:"",children:"\u5168\u90e8\u6570\u636e\u6e90"}),v.map(e=>(0,es.jsx)("option",{value:e,children:Mc(e)},e))]})]}),(0,es.jsxs)(Nc,{children:["\u72b6\u6001\u7b5b\u9009:",(0,es.jsxs)(Lc,{value:c,onChange:e=>d(e.target.value),children:[(0,es.jsx)("option",{value:"",children:"\u5168\u90e8\u72b6\u6001"}),(0,es.jsx)("option",{value:"success",children:"\u6210\u529f"}),(0,es.jsx)("option",{value:"failed",children:"\u5931\u8d25"}),(0,es.jsx)("option",{value:"empty",children:"\u7a7a\u54cd\u5e94"})]})]}),(0,es.jsxs)("span",{style:{color:"#666",fontSize:"14px"},children:["\u663e\u793a ",b.length," / ",r.length," \u6761\u8bb0\u5f55"]})]}),(0,es.jsxs)($c,{children:[(0,es.jsxs)(zc,{children:[(0,es.jsx)("thead",{children:(0,es.jsxs)("tr",{children:[(0,es.jsx)(Tc,{children:"\u65f6\u95f4"}),(0,es.jsx)(Tc,{children:"\u5730\u7406\u4f4d\u7f6e"}),(0,es.jsx)(Tc,{children:"\u6570\u636e\u6e90"}),(0,es.jsx)(Tc,{children:"API"}),(0,es.jsx)(Tc,{children:"\u72b6\u6001"}),(0,es.jsx)(Tc,{children:"\u54cd\u5e94\u65f6\u95f4"}),u&&(0,es.jsx)(Tc,{children:"\u9519\u8bef\u4fe1\u606f"}),u&&(0,es.jsx)(Tc,{children:"\u989d\u5916\u4fe1\u606f"})]})}),(0,es.jsx)("tbody",{children:b.slice().reverse().map((e,t)=>(0,es.jsxs)(Pc,{children:[(0,es.jsxs)(Ac,{children:[(0,es.jsx)("div",{children:e.date}),(0,es.jsx)("div",{style:{fontSize:"12px",color:"#666"},children:e.time})]}),(0,es.jsx)(Ac,{children:(0,es.jsx)(xc,{ip:e.ip})}),(0,es.jsx)(Ac,{children:Mc(e.dataSource)}),(0,es.jsx)(Ac,{children:e.api}),(0,es.jsx)(Ac,{children:"empty"===e.resultStatus?(0,es.jsx)(Ic,{style:{background:"#fff3cd",color:"#856404"},children:"\u7a7a\u54cd\u5e94"}):(0,es.jsx)(Ic,{$success:e.success,children:e.success?"\u6210\u529f":"\u5931\u8d25"})}),(0,es.jsxs)(Ac,{children:[e.responseTime,"ms"]}),u&&(0,es.jsx)(Ac,{children:e.errorMessage&&(0,es.jsx)(Oc,{title:e.errorMessage,children:e.errorMessage})}),u&&(0,es.jsx)(Ac,{children:(0,es.jsx)("div",{style:{fontSize:"12px",color:"#666"},children:Object.entries(e.additionalInfo||{}).map(e=>{let[t,n]=e;return(0,es.jsxs)("div",{children:[(0,es.jsxs)("strong",{children:[t,":"]})," ",String(n).substring(0,50),String(n).length>50?"...":""]},t)})})})]},t))})]}),0===b.length&&(0,es.jsx)("div",{style:{textAlign:"center",padding:"40px",color:"#666"},children:"\u6682\u65e0\u65e5\u5fd7\u8bb0\u5f55"})]})]})})},Bc=Le.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
`,Uc=Le.div`
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Wc=Le.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 24px;
`,qc=Le.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 12px;
`,Kc=Le.button`
  background: none;
  border: none;
  color: #95a5a6;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    color: #2c3e50;
  }
`,Hc=Le.div`
  padding: 0 24px 24px 24px;
`,Yc=Le.div`
  margin-bottom: 20px;
`,Vc=Le.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 8px;
`,Gc=Le.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,Qc=Le.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,Xc=Le.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`,Jc=Le.button`
  width: 100%;
  padding: 14px 20px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2980b9, #1c5aa3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Zc=Le.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
  border: 1px solid #e9ecef;
`,ed=Le.h4`
  margin: 0 0 12px 0;
  color: #2c3e50;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`,td=Le.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #5a6c7d;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: #3498db;
  }
`,nd=Le.div`
  background: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #fcc;
`,rd=Le.div`
  background: #efe;
  color: #3a3;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #cfc;
`,ad=e=>{let{onClose:n}=e;const[r,a]=(0,t.useState)({name:"",contact:"",contactType:"email",category:"bug",subject:"",description:""}),[i,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(!1),u=e=>{const{name:t,value:n}=e.target;a(e=>({...e,[t]:n})),s&&l("")};return c?(0,es.jsx)(Bc,{onClick:n,children:(0,es.jsxs)(Uc,{onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(Wc,{children:[(0,es.jsxs)(qc,{children:[(0,es.jsx)(Mn,{}),"\u53cd\u9988\u63d0\u4ea4\u6210\u529f"]}),(0,es.jsx)(Kc,{onClick:n,children:(0,es.jsx)(ur,{size:20})})]}),(0,es.jsxs)(Hc,{children:[(0,es.jsxs)(rd,{children:[(0,es.jsx)(Mn,{}),"\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01\u6211\u4eec\u5df2\u6536\u5230\u60a8\u7684\u95ee\u9898\uff0c\u4f1a\u5c3d\u5feb\u5904\u7406\u5e76\u56de\u590d\u60a8\u3002"]}),(0,es.jsxs)(Zc,{children:[(0,es.jsxs)(ed,{children:[(0,es.jsx)(Mn,{}),"\u7d27\u6025\u8054\u7cfb\u65b9\u5f0f"]}),(0,es.jsxs)(td,{children:[(0,es.jsx)(qn,{}),"\u90ae\u7bb1\uff1a3639163969@qq.com"]}),(0,es.jsxs)(td,{children:[(0,es.jsx)(cr,{}),"QQ\uff1a3639163969"]}),(0,es.jsxs)(td,{children:[(0,es.jsx)(Vn,{}),"\u5fae\u4fe1\uff1aBigFe5"]})]})]})]})}):(0,es.jsxs)(Bc,{onClick:n,children:[(0,es.jsxs)(Uc,{onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(Wc,{children:[(0,es.jsxs)(qc,{children:[(0,es.jsx)(Mn,{}),"\u5ba2\u670d\u53cd\u9988"]}),(0,es.jsx)(Kc,{onClick:n,children:(0,es.jsx)(ur,{size:20})})]}),(0,es.jsxs)(Hc,{children:[(0,es.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),(()=>{if(!r.name.trim())return l("\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d"),!1;if(!r.contact.trim())return l("\u8bf7\u8f93\u5165\u8054\u7cfb\u65b9\u5f0f"),!1;if(!r.subject.trim())return l("\u8bf7\u8f93\u5165\u53cd\u9988\u4e3b\u9898"),!1;if(!r.description.trim())return l("\u8bf7\u8be6\u7ec6\u63cf\u8ff0\u60a8\u7684\u95ee\u9898\u6216\u5efa\u8bae"),!1;if("email"===r.contactType){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.contact))return l("\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740"),!1}else if("phone"===r.contactType&&!/^1[3-9]\d{9}$/.test(r.contact.replace(/\s|-/g,"")))return l("\u8bf7\u8f93\u5165\u6709\u6548\u7684\u624b\u673a\u53f7\u7801"),!1;return!0})()){o(!0),l("");try{await To.logApiCall("customer_feedback","internal_system",!0,0,null,{feedback_type:"customer_service",category:r.category,subject:r.subject,name:r.name,contact_type:r.contactType,contact:r.contact,description:r.description,timestamp:(new Date).toISOString(),user_agent:navigator.userAgent,page_url:window.location.href}),d(!0),setTimeout(()=>{n()},3e3)}catch(s){console.error("\u63d0\u4ea4\u53cd\u9988\u5931\u8d25:",s),l("\u63d0\u4ea4\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u6216\u76f4\u63a5\u8054\u7cfb\u6211\u4eec\u7684\u5ba2\u670d")}finally{o(!1)}}},children:[s&&(0,es.jsxs)(nd,{children:[(0,es.jsx)(pn,{}),s]}),(0,es.jsxs)(Yc,{children:[(0,es.jsxs)(Vc,{children:[(0,es.jsx)(cr,{}),"\u59d3\u540d *"]}),(0,es.jsx)(Gc,{type:"text",name:"name",value:r.name,onChange:u,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d",required:!0})]}),(0,es.jsxs)(Yc,{children:[(0,es.jsxs)(Vc,{children:[(0,es.jsx)(Qn,{}),"\u8054\u7cfb\u65b9\u5f0f\u7c7b\u578b *"]}),(0,es.jsx)(Xc,{name:"contactType",value:r.contactType,onChange:u,required:!0,children:[{value:"email",label:"\ud83d\udce7 \u90ae\u7bb1"},{value:"phone",label:"\ud83d\udcf1 \u624b\u673a"},{value:"qq",label:"\ud83d\udc27 QQ"},{value:"wechat",label:"\ud83d\udcac \u5fae\u4fe1"}].map(e=>(0,es.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,es.jsxs)(Yc,{children:[(0,es.jsxs)(Vc,{children:[(0,es.jsx)(qn,{}),"\u8054\u7cfb\u65b9\u5f0f *"]}),(0,es.jsx)(Gc,{type:"email"===r.contactType?"email":"text",name:"contact",value:r.contact,onChange:u,placeholder:"email"===r.contactType?"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740":"phone"===r.contactType?"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801":"qq"===r.contactType?"\u8bf7\u8f93\u5165QQ\u53f7\u7801":"\u8bf7\u8f93\u5165\u5fae\u4fe1\u53f7",required:!0})]}),(0,es.jsxs)(Yc,{children:[(0,es.jsxs)(Vc,{children:[(0,es.jsx)(Vn,{}),"\u53cd\u9988\u7c7b\u578b *"]}),(0,es.jsx)(Xc,{name:"category",value:r.category,onChange:u,required:!0,children:[{value:"bug",label:"\ud83d\udc1b Bug\u53cd\u9988"},{value:"feature",label:"\ud83d\udca1 \u529f\u80fd\u5efa\u8bae"},{value:"question",label:"\u2753 \u4f7f\u7528\u95ee\u9898"},{value:"cooperation",label:"\ud83e\udd1d \u5546\u52a1\u5408\u4f5c"},{value:"other",label:"\ud83d\udcdd \u5176\u4ed6\u53cd\u9988"}].map(e=>(0,es.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,es.jsxs)(Yc,{children:[(0,es.jsxs)(Vc,{children:[(0,es.jsx)(Vn,{}),"\u53cd\u9988\u4e3b\u9898 *"]}),(0,es.jsx)(Gc,{type:"text",name:"subject",value:r.subject,onChange:u,placeholder:"\u8bf7\u7b80\u8981\u63cf\u8ff0\u60a8\u7684\u95ee\u9898\u6216\u5efa\u8bae",required:!0})]}),(0,es.jsxs)(Yc,{children:[(0,es.jsxs)(Vc,{children:[(0,es.jsx)(Vn,{}),"\u8be6\u7ec6\u63cf\u8ff0 *"]}),(0,es.jsx)(Qc,{name:"description",value:r.description,onChange:u,placeholder:"\u8bf7\u8be6\u7ec6\u63cf\u8ff0\u60a8\u9047\u5230\u7684\u95ee\u9898\u3001\u671f\u671b\u7684\u529f\u80fd\u6216\u5176\u4ed6\u5efa\u8bae...",required:!0})]}),(0,es.jsx)(Jc,{type:"submit",disabled:i,children:i?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)("div",{style:{width:"16px",height:"16px",border:"2px solid transparent",borderTop:"2px solid white",borderRadius:"50%",animation:"spin 1s linear infinite"}}),"\u63d0\u4ea4\u4e2d..."]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(tr,{}),"\u63d0\u4ea4\u53cd\u9988"]})})]}),(0,es.jsxs)(Zc,{children:[(0,es.jsxs)(ed,{children:[(0,es.jsx)(Mn,{}),"\u5176\u4ed6\u8054\u7cfb\u65b9\u5f0f"]}),(0,es.jsxs)(td,{children:[(0,es.jsx)(qn,{}),"\u90ae\u7bb1\uff1a3639163969@qq.com"]}),(0,es.jsxs)(td,{children:[(0,es.jsx)(cr,{}),"QQ\uff1a3639163969"]}),(0,es.jsxs)(td,{children:[(0,es.jsx)(Vn,{}),"\u5fae\u4fe1\uff1aBigFe5"]})]})]})]}),(0,es.jsx)("style",{jsx:!0,children:"\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n      "})]})},id=Ne`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`,od=Ne`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,sd=Le.div`
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e1e5e9;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    border-color: #007acc;
  }
  
  /* 默认状态下的简洁长条样式 */
  ${e=>!e.$hasContent&&!e.$generating&&"\n    border-radius: 8px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n    \n    &:hover {\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n    }\n  "}
`,ld=Le.div`
  padding: 12px 16px;
  background: white;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e1e5e9;
  border-radius: 12px 12px 0 0;
  
  ${e=>e.$collapsed&&"\n    border-radius: 12px;\n    border-bottom: none;\n  "}
`,cd=Le.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,dd=Le.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
`,ud=Le.span`
  background: #f0f9ff;
  color: #0369a1;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #e0f2fe;
`,pd=Le.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,fd=(Le.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #0066aa;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    animation: ${e=>e.$generating?ve`${od} 1s linear infinite`:"none"};
  }
`,Le.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #0066aa;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`),hd=Le.div`
  padding: ${e=>e.$collapsed?"0 20px":"20px"};
  max-height: ${e=>e.$collapsed?"0":"400px"};
  height: ${e=>e.$collapsed?"0":"auto"};
  overflow: ${e=>e.$collapsed?"hidden":"visible"};
  transition: all 0.3s ease;
  opacity: ${e=>e.$collapsed?"0":"1"};
  
  /* 生成过程中禁用用户交互 */
  ${e=>e.$generating&&"\n    pointer-events: none;\n    user-select: none;\n  "}
  
  /* 默认状态下隐藏内容区域 */
  ${e=>!e.$hasContent&&!e.$generating&&"\n    display: none;\n  "}
`,gd=Le.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 8px;
  
  .spinner {
    font-size: 14px;
    color: #007acc;
    animation: ${ve`${od} 1s linear infinite`};
  }
  
  .text {
    font-size: 12px;
    color: #666;
    animation: ${ve`${id} 2s ease-in-out infinite`};
  }
`,xd=Le.div`
  line-height: 1.6;
  color: #333;
  font-size: 14px;
  max-height: 360px;
  overflow-y: auto;
  
  /* 一级标题样式 */
  h1 {
    color: #1a202c;
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 16px 0;
    padding: 12px 0 8px 0;
    border-bottom: 3px solid #007acc;
    position: relative;
    
    &:first-child {
      margin-top: 0;
    }
    
    /* 添加装饰性元素 */
    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 二级标题样式 */
  h2 {
    color: #007acc;
    font-size: 18px;
    font-weight: 600;
    margin: 18px 0 10px 0;
    padding-bottom: 6px;
    border-bottom: 2px solid #e1e5e9;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  /* 三级标题样式 */
  h3 {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    margin: 16px 0 8px 0;
  }
  
  /* 段落样式 - 减少间距 */
  p {
    margin: 8px 0;
    text-align: justify;
    line-height: 1.6;
  }
  
  /* 列表样式 */
  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin: 4px 0;
    line-height: 1.5;
  }
  
  /* 加粗文本样式 */
  strong {
    font-weight: 600;
    color: #1a202c;
  }
  
  /* 斜体文本样式 */
  em {
    font-style: italic;
    color: #4a5568;
  }
  
  /* 代码样式 */
  code {
    background: #f7fafc;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 13px;
    color: #e53e3e;
  }
  
  /* 引用样式 */
  blockquote {
    margin: 12px 0;
    padding: 10px 16px;
    background: #f8f9fa;
    border-left: 4px solid #007acc;
    border-radius: 0 4px 4px 0;
    color: #4a5568;
    font-style: italic;
  }
`,md=Le.div`
  padding: 16px 20px;
  background: #f8f9fa;
  border-top: 1px solid #e1e5e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,bd=Le.button`
  background: #007acc;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #0066aa;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,yd=Le.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
`,vd=e=>{let{papers:n=[],selectedModel:r="gpt-4o",visible:a=!0,autoGenerate:i=!1,triggerGenerate:o=!1,onGenerateComplete:s=null}=e;const[l,c]=(0,t.useState)(""),[d,u]=(0,t.useState)(!1),[p,f]=(0,t.useState)(!1),[h,g]=(0,t.useState)(!1),x=(0,t.useRef)(null),m=(0,t.useRef)(null),b=(0,t.useCallback)(e=>{if(!e)return"";let t=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");return t=t.replace(/\*([^*]+)\*/g,"<strong>$1</strong>"),t=t.replace(/_([^_]+)_/g,"<em>$1</em>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),(0,es.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})},[]),y=(0,t.useRef)(null),v=(0,t.useRef)(!1),w=(0,t.useRef)(null),k=(0,t.useRef)(i),S=(0,t.useRef)(r),j=(0,t.useRef)(s);(0,t.useEffect)(()=>{k.current=i,S.current=r,j.current=s});const C=(0,t.useCallback)(()=>n&&0!==n.length?n.map(e=>`${e.paperId}-${e.title}`).join("|"):"",[n]),_=(0,t.useCallback)(async()=>{if(0===n.length||v.current)return;const e=C();if(e===w.current&&l)console.log("Same papers already processed, skipping duplicate request");else{v.current=!0,w.current=e,u(!0),c(""),f(!1);try{const e=(e,t)=>{c(t),setTimeout(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},50)},t=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Io,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e||0===e.length)throw new Error("\u6ca1\u6709\u8bba\u6587\u53ef\u4f9b\u5206\u6790");Object.values(Ao).includes(t)||(console.warn(`\u672a\u77e5\u7684\u6a21\u578b: ${t}\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6a21\u578b: ${Io}`),t=Io);const r=e.map((e,t)=>{const n=(e.authors||[]).map(e=>e.name).join(", "),r=e.year||"n.d.",a=e.venue||"Unknown venue";return`[${t+1}] ${n} (${r}). ${e.title}. ${a}.\n   \u7814\u7a76\u9886\u57df\uff1a${(e.fieldsOfStudy||[]).join(", ")}\n   \u6458\u8981\uff1a${e.abstract||"\u65e0\u6458\u8981"}\n   \u5f15\u7528\u6570\uff1a${e.citationCount||0}`}).join("\n\n"),a=`\u8bf7\u57fa\u4e8e\u4ee5\u4e0b\u5b66\u672f\u8bba\u6587\uff0c\u751f\u6210\u4e00\u4efd\u6b63\u5f0f\u7684\u5b66\u672f\u7814\u7a76\u62a5\u544a\u3002\u62a5\u544a\u5e94\u91c7\u7528\u6807\u51c6\u7684\u5b66\u672f\u5199\u4f5c\u98ce\u683c\uff0c\u5728\u6587\u4e2d\u4f7f\u7528 APA \u683c\u5f0f\u8fdb\u884c\u6587\u732e\u5f15\u7528\uff0c\u5e76\u5728\u6587\u672b\u63d0\u4f9b\u5b8c\u6574\u7684\u53c2\u8003\u6587\u732e\u5217\u8868\u3002\n\n\u6587\u732e\u8d44\u6599\uff1a\n${r}\n\n\u62a5\u544a\u8981\u6c42\uff1a\n\n1. **\u5b66\u672f\u5199\u4f5c\u89c4\u8303**\uff1a\n   - \u4f7f\u7528\u6b63\u5f0f\u7684\u5b66\u672f\u8bed\u8a00\u548c\u5ba2\u89c2\u7684\u5206\u6790\u8bed\u8c03\n   - \u5728\u6587\u4e2d\u5f15\u7528\u6587\u732e\u65f6\u4f7f\u7528 APA \u683c\u5f0f\uff0c\u5982\uff1a(\u4f5c\u8005, \u5e74\u4efd) \u6216 \u4f5c\u8005 (\u5e74\u4efd) \u6307\u51fa...\n   - \u6bcf\u4e2a\u89c2\u70b9\u90fd\u8981\u6709\u5177\u4f53\u7684\u6587\u732e\u652f\u6491\n   - \u907f\u514d\u4e3b\u89c2\u81c6\u65ad\uff0c\u57fa\u4e8e\u6587\u732e\u8bc1\u636e\u8fdb\u884c\u5206\u6790\n\n2. **\u5f15\u7528\u683c\u5f0f\u8bf4\u660e**\uff1a\n   - \u6587\u4e2d\u5f15\u7528\uff1a\u4f7f\u7528\u7f16\u53f7 [1], [2] \u7b49\u5f62\u5f0f\u5f15\u7528\u5bf9\u5e94\u6587\u732e\n   - \u591a\u7bc7\u6587\u732e\uff1a[1, 3, 5] \u6216 [1-3]\n   - \u5177\u4f53\u9875\u7801\uff1a[1, p. 15] (\u5982\u6709)\n\n3. **\u62a5\u544a\u7ed3\u6784**\uff1a\n\n## \u6458\u8981\n\u7b80\u8981\u6982\u8ff0\u7814\u7a76\u9886\u57df\u73b0\u72b6\u3001\u4e3b\u8981\u53d1\u73b0\u548c\u7ed3\u8bba\u5efa\u8bae\uff08150-200\u5b57\uff09\n\n## \u7814\u7a76\u8d8b\u52bf\u5206\u6790\n\u6df1\u5165\u5206\u6790\u5f53\u524d\u7814\u7a76\u7684\u4e3b\u8981\u8d8b\u52bf\u548c\u53d1\u5c55\u65b9\u5411\uff1a\n- \u4e3b\u6d41\u7814\u7a76\u65b9\u5411\u548c\u70ed\u70b9\u9886\u57df\n- \u65b9\u6cd5\u5b66\u548c\u6280\u672f\u8def\u7ebf\u7684\u6f14\u8fdb\n- \u7814\u7a76\u91cd\u70b9\u7684\u65f6\u95f4\u6f14\u53d8\u7279\u5f81\n- \u65b0\u5174\u4ea4\u53c9\u9886\u57df\u7684\u51fa\u73b0\n\n## \u7814\u7a76\u5206\u6b67\u4e0e\u5b66\u672f\u4e89\u8bae\n\u5ba2\u89c2\u5206\u6790\u5b66\u672f\u754c\u5728\u4ee5\u4e0b\u65b9\u9762\u7684\u4e0d\u540c\u89c2\u70b9\u548c\u4e89\u8bae\uff1a\n- \u6838\u5fc3\u7406\u8bba\u548c\u6982\u5ff5\u7684\u5206\u6b67\n- \u7814\u7a76\u65b9\u6cd5\u9009\u62e9\u7684\u4e89\u8bae\n- \u5b9e\u9a8c\u7ed3\u679c\u89e3\u91ca\u7684\u4e0d\u540c\u89c2\u70b9\n- \u672a\u6765\u53d1\u5c55\u65b9\u5411\u7684\u5b66\u672f\u8fa9\u8bba\n\n## \u7814\u7a76\u7a7a\u767d\u4e0e\u521b\u65b0\u673a\u4f1a\n\u57fa\u4e8e\u6587\u732e\u5206\u6790\u8bc6\u522b\u7684\u7814\u7a76\u7a7a\u767d\u548c\u6f5c\u5728\u521b\u65b0\u65b9\u5411\uff1a\n- \u7406\u8bba\u6846\u67b6\u7684\u5b8c\u5584\u7a7a\u95f4\n- \u65b9\u6cd5\u5b66\u521b\u65b0\u7684\u53ef\u80fd\u6027\n- \u5e94\u7528\u573a\u666f\u7684\u62d3\u5c55\u673a\u4f1a\n- \u8de8\u5b66\u79d1\u5408\u4f5c\u7684\u6f5c\u529b\n\n## \u7ed3\u8bba\u4e0e\u5efa\u8bae\n\u4e3a\u5b66\u672f\u754c\u548c\u5b9e\u8df5\u8005\u63d0\u4f9b\u5177\u4f53\u7684\u7814\u7a76\u5efa\u8bae\uff1a\n- \u4f18\u5148\u53d1\u5c55\u7684\u7814\u7a76\u65b9\u5411\n- \u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7684\u6280\u672f\u95ee\u9898\n- \u63a8\u8350\u7684\u7814\u7a76\u5408\u4f5c\u6a21\u5f0f\n- \u8d44\u6e90\u6295\u5165\u7684\u6218\u7565\u5efa\u8bae\n\n## \u53c2\u8003\u6587\u732e\n\u6309\u7167 APA \u683c\u5f0f\u5217\u51fa\u6240\u6709\u5f15\u7528\u7684\u6587\u732e\uff0c\u6309\u7f16\u53f7\u987a\u5e8f\u6392\u5217\u3002\n\n\u5199\u4f5c\u8981\u6c42\uff1a\n- \u603b\u5b57\u6570\uff1a1200-1800\u5b57\n- \u8bed\u8a00\u98ce\u683c\uff1a\u6b63\u5f0f\u3001\u5ba2\u89c2\u3001\u4e25\u8c28\n- \u6bcf\u4e2a\u6bb5\u843d\u90fd\u8981\u6709\u660e\u786e\u7684\u6587\u732e\u652f\u6491\n- \u7ed3\u8bba\u8981\u57fa\u4e8e\u8bc1\u636e\uff0c\u907f\u514d\u8fc7\u5ea6\u63a8\u6d4b\n- \u786e\u4fdd\u903b\u8f91\u6e05\u6670\uff0c\u8bba\u8bc1\u5145\u5206`;try{const e=await fetch(Po,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,messages:[{role:"system",content:"\u4f60\u662f\u4e00\u4f4d\u8d44\u6df1\u7684\u5b66\u672f\u7814\u7a76\u4e13\u5bb6\u548c\u79d1\u7814\u5199\u4f5c\u4e13\u5bb6\uff0c\u5177\u6709\u4e30\u5bcc\u7684\u6587\u732e\u7efc\u8ff0\u548c\u7814\u7a76\u62a5\u544a\u64b0\u5199\u7ecf\u9a8c\u3002\u4f60\u64c5\u957f\uff1a1) \u4e25\u683c\u6309\u7167\u5b66\u672f\u5199\u4f5c\u89c4\u8303\u64b0\u5199\u6b63\u5f0f\u7684\u7814\u7a76\u62a5\u544a\uff1b2) \u6b63\u786e\u4f7f\u7528 APA \u5f15\u7528\u683c\u5f0f\u8fdb\u884c\u6587\u4e2d\u5f15\u7528\u548c\u53c2\u8003\u6587\u732e\u5217\u8868\uff1b3) \u57fa\u4e8e\u6587\u732e\u8bc1\u636e\u8fdb\u884c\u5ba2\u89c2\u5206\u6790\uff0c\u907f\u514d\u4e3b\u89c2\u81c6\u65ad\uff1b4) \u8bc6\u522b\u7814\u7a76\u8d8b\u52bf\u3001\u5b66\u672f\u4e89\u8bae\u548c\u521b\u65b0\u673a\u4f1a\uff1b5) \u4e3a\u7814\u7a76\u4eba\u5458\u63d0\u4f9b\u5177\u6709\u5b9e\u9645\u6307\u5bfc\u4ef7\u503c\u7684\u5efa\u8bae\u3002\u8bf7\u786e\u4fdd\u751f\u6210\u7684\u62a5\u544a\u7b26\u5408\u5b66\u672f\u671f\u520a\u7684\u53d1\u8868\u6807\u51c6\u3002"},{role:"user",content:a}],stream:!0,max_tokens:2500})});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const r=e.body.getReader(),o=new TextDecoder;let s="";try{for(;;){const{done:e,value:t}=await r.read();if(e)break;const a=o.decode(t,{stream:!0}).split("\n");for(const r of a)if(""!==r.trim()){if("data: [DONE]"===r.trim())return s;if(r.startsWith("data: ")){const e=r.substring(6);try{const t=JSON.parse(e);if(t.choices&&t.choices[0]&&t.choices[0].delta&&t.choices[0].delta.content){const e=t.choices[0].delta.content;s+=e,n&&n(e,s)}}catch(i){console.warn("\u89e3\u6790\u6d41\u5f0f\u6570\u636e\u5931\u8d25:",i)}}}}return s}finally{r.releaseLock()}}catch(o){throw console.error(`AI\u751f\u6210\u7814\u7a76\u62a5\u544a\u5931\u8d25 (\u6a21\u578b: ${t}):`,o),new Error(`AI\u751f\u6210\u7814\u7a76\u62a5\u544a\u5931\u8d25: ${o.message}`)}}(n,S.current,e);c(t)}catch(t){console.error("\u751f\u6210\u7814\u7a76\u62a5\u544a\u5931\u8d25:",t),c(`\u751f\u6210\u7814\u7a76\u62a5\u544a\u5931\u8d25: ${t.message}`)}finally{u(!1),v.current=!1,j.current&&j.current()}}},[n,C,l]),E=(0,t.useCallback)(async()=>{0!==n.length?_():alert("\u6ca1\u6709\u8bba\u6587\u53ef\u4f9b\u5206\u6790\uff0c\u8bf7\u5148\u641c\u7d22\u8bba\u6587")},[_,n.length]);(0,t.useEffect)(()=>{if(o>0&&o!==y.current&&n.length>0&&!d&&k.current&&!v.current){if(C()===w.current&&l)return console.log("Same papers already processed via trigger, skipping duplicate request"),void(y.current=o);console.log("Triggered to generate research report for",n.length,"papers"),y.current=o,_()}},[o,n.length,d,_,C,l]),(0,t.useEffect)(()=>{c(""),u(!1),y.current=null,v.current=!1,w.current=null,console.log("Papers changed, reset report state")},[n]);const $=(0,t.useCallback)(async()=>{try{await navigator.clipboard.writeText(l),g(!0),setTimeout(()=>g(!1),2e3)}catch(e){console.error("\u590d\u5236\u5931\u8d25:",e);const t=document.createElement("textarea");t.value=l,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),g(!0),setTimeout(()=>g(!1),2e3)}},[l]);return a&&0!==n.length?(0,es.jsxs)(sd,{$hasContent:!!l,$generating:d,children:[(0,es.jsxs)(ld,{$collapsed:p,children:[(0,es.jsxs)(cd,{children:[(0,es.jsxs)(dd,{children:[(0,es.jsx)(sr,{size:18}),"\u7814\u7a76\u62a5\u544a\u751f\u6210\u5668"]}),(0,es.jsxs)(ud,{children:[n.length," \u7bc7\u8bba\u6587"]}),d&&(0,es.jsxs)(gd,{children:[(0,es.jsx)("div",{className:"spinner",children:(0,es.jsx)(Jn,{})}),(0,es.jsx)("div",{className:"text",children:"\u751f\u6210\u4e2d..."})]})]}),(0,es.jsx)(pd,{children:(!d||l)&&(0,es.jsx)(fd,{onClick:()=>{l||d?l&&f(!p):E()},children:l?p?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(jn,{size:14}),"\u5c55\u5f00"]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(En,{size:14}),"\u6298\u53e0"]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Ln,{size:14}),"\u751f\u6210\u62a5\u544a"]})})})]}),(0,es.jsx)(hd,{ref:x,$collapsed:p,$generating:d,$hasContent:!!l,children:(l||d)&&!p&&(0,es.jsxs)(xd,{ref:m,children:[l.split("\n").map((e,t)=>e.startsWith("# ")?(0,es.jsx)("h1",{children:b(e.substring(2))},t):e.startsWith("## ")?(0,es.jsx)("h2",{children:b(e.substring(3))},t):e.startsWith("### ")?(0,es.jsx)("h3",{children:b(e.substring(4))},t):e.startsWith("- ")||e.startsWith("* ")?(0,es.jsx)("li",{style:{listStyle:"disc",marginLeft:"20px"},children:b(e.substring(2))},t):""===e.trim()?(0,es.jsx)("br",{},t):""!==e.trim()?(0,es.jsx)("p",{children:b(e)},t):null),d&&!l&&(0,es.jsx)("p",{style:{color:"#666",fontStyle:"italic"},children:"\u6b63\u5728\u751f\u6210\u62a5\u544a..."})]})}),l&&!p&&(0,es.jsxs)(md,{children:[(0,es.jsxs)(yd,{children:[(0,es.jsxs)("span",{children:["\u57fa\u4e8e ",n.length," \u7bc7\u8bba\u6587\u751f\u6210"]}),(0,es.jsx)("span",{children:"\u2022"}),(0,es.jsxs)("span",{children:["\u6a21\u578b: ",r]})]}),(0,es.jsxs)(bd,{onClick:$,children:[(0,es.jsx)(zn,{size:14}),h?"\u5df2\u590d\u5236!":"\u590d\u5236\u62a5\u544a"]})]})]}):null},wd=Le.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,kd=Le.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Sd=Le.h3`
  margin: 0 0 16px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
`,jd=Le.p`
  margin: 0 0 24px 0;
  color: #666;
  line-height: 1.5;
  font-size: 14px;
`,Cd=Le.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`,_d=Le.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background: #007bff;
    color: white;
    
    &:hover {
      background: #0056b3;
    }
  }
  
  &.secondary {
    background: #f8f9fa;
    color: #6c757d;
    border: 1px solid #dee2e6;
    
    &:hover {
      background: #e9ecef;
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`,Ed=e=>{let{isOpen:t,title:n="\u786e\u8ba4\u64cd\u4f5c",message:r="\u60a8\u786e\u5b9a\u8981\u6267\u884c\u6b64\u64cd\u4f5c\u5417\uff1f",confirmText:a="\u786e\u8ba4",cancelText:i="\u53d6\u6d88",onConfirm:o,onCancel:s}=e;if(!t)return null;return(0,es.jsx)(wd,{onClick:e=>{e.target===e.currentTarget&&s()},onKeyDown:e=>{"Escape"===e.key?s():"Enter"===e.key&&o()},tabIndex:-1,children:(0,es.jsxs)(kd,{children:[(0,es.jsx)(Sd,{children:n}),(0,es.jsx)(jd,{children:r}),(0,es.jsxs)(Cd,{children:[(0,es.jsx)(_d,{className:"secondary",onClick:s,children:i}),(0,es.jsx)(_d,{className:"primary",onClick:o,children:a})]})]})})},$d=Le.div`
  position: fixed;
  z-index: 999;
  pointer-events: none;
  width: 100%;
  max-width: 100vw;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 状态1：底部固定状态 */
  ${e=>e.$isFloating?"\n    /* \u72b6\u60012\uff1a\u5c4f\u5e55\u4e2d\u592e\u60ac\u6d6e\u72b6\u6001 */\n    top: 50%;\n    bottom: auto;\n    transform: translateY(-50%);\n  ":"\n    bottom: 80px; /* \u56fa\u5b9a\u5728\u5e95\u90e8\uff0c\u7559\u51fa\u5408\u9002\u7684\u95f4\u8ddd */\n    top: auto;\n    transform: none;\n  "}
  
  @media (max-width: 768px) {
    display: none;
  }
`,zd=Le.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  
  @media (min-width: 768px) {
    max-width: 90%;
  }
  
  @media (min-width: 992px) {
    max-width: 85%;
  }
  
  @media (min-width: 1200px) {
    max-width: 1240px;
  }
  
  @media (min-width: 1600px) {
    max-width: 1440px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1840px;
  }
  
  display: grid;
  grid-template-columns: 520px 1fr; /* 与工具栏布局保持一致 */
  gap: 12px;
  padding: 0 20px;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    justify-content: space-between;
    display: flex;
  }
`,Td=Le.button`
  /* 圆形尺寸 - 更简洁美观 */
  width: 48px;
  height: 48px;
  border-radius: 50%; /* 完全圆形 */
  
  /* 美化样式 */
  border: 2px solid ${e=>e.$disabled?"rgba(225, 229, 233, 0.6)":"rgba(0, 122, 204, 0.7)"};
  background: ${e=>e.$disabled?"rgba(248, 249, 250, 0.7)":"rgba(255, 255, 255, 0.8)"};
  color: ${e=>e.$disabled?"rgba(204, 204, 204, 0.8)":"rgba(0, 122, 204, 0.9)"};
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(12px);
  box-shadow: ${e=>e.$disabled?"none":"0 6px 24px rgba(0, 122, 204, 0.12)"};
  pointer-events: auto;
  position: relative;
  
  /* 透明度控制 */
  opacity: ${e=>e.$visible?e.$disabled?.4:.85:0};
  
  transform: ${e=>e.$visible?"scale(1)":"scale(0.8)"};
  
  /* 悬停效果 - 还原透明度并增强 */
  &:hover:not(:disabled) {
    opacity: 1; /* 还原透明度 */
    background: linear-gradient(135deg, #007acc, #0099ff); /* 对角渐变更适合圆形 */
    color: white;
    border-color: rgba(0, 95, 163, 0.9);
    transform: scale(1.15);
    box-shadow: 
      0 10px 40px rgba(0, 122, 204, 0.3),
      0 6px 20px rgba(0, 122, 204, 0.2);
  }

  &:active:not(:disabled) {
    transform: scale(1.08);
    box-shadow: 
      0 8px 25px rgba(0, 122, 204, 0.35),
      0 4px 12px rgba(0, 122, 204, 0.25);
  }

  /* 涟漪效果 - 适配圆形 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  &:active:not(:disabled)::before {
    width: 60px;
    height: 60px;
    opacity: 1;
  }

  /* 适配圆形的图标尺寸 - 更大更清晰 */
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease;
  }
  
  /* 悬停时图标微动效果 */
  &:hover:not(:disabled) svg {
    transform: scale(1.2);
  }
  
  &.left-button {
    justify-self: end;
    margin-right: -24px; /* 调整位置以适应圆形按钮 */
  }
  
  &.right-button {
    justify-self: end;
    margin-right: -24px; /* 调整位置以适应圆形按钮 */
  }
`,Pd=Le.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  z-index: 10;
  
  /* 左侧按钮的提示显示在右侧 */
  .left-button & {
    left: calc(100% + 20px);
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -4px;
      transform: translateY(-50%);
      border: 4px solid transparent;
      border-right-color: rgba(0, 0, 0, 0.8);
    }
  }
  
  /* 右侧按钮的提示显示在左侧 */
  .right-button & {
    right: calc(100% + 20px);
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -4px;
      transform: translateY(-50%);
      border: 4px solid transparent;
      border-left-color: rgba(0, 0, 0, 0.8);
    }
  }
  
  ${Td}:hover & {
    opacity: 1;
  }
`,Ad=e=>{let{onStepLeft:t,onStepRight:n,canStepLeft:r=!0,canStepRight:a=!0,visible:i=!0,disabled:o=!1,isFloating:s=!1}=e;return i?(0,es.jsx)($d,{$isFloating:s,children:(0,es.jsxs)(zd,{children:[(0,es.jsx)("div",{style:{gridColumn:1},children:(0,es.jsxs)(Td,{className:"left-button",onClick:()=>{!o&&r&&t&&t()},disabled:o||!r,$disabled:o||!r,$visible:i,$isFloating:s,children:[(0,es.jsx)(Pd,{children:"\u5411\u5de6\u6eda\u52a8"}),(0,es.jsx)(Cn,{})]})}),(0,es.jsx)("div",{style:{gridColumn:2},children:(0,es.jsxs)(Td,{className:"right-button",onClick:()=>{!o&&a&&n&&n()},disabled:o||!a,$disabled:o||!a,$visible:i,$isFloating:s,children:[(0,es.jsx)(Pd,{children:"\u5411\u53f3\u6eda\u52a8"}),(0,es.jsx)(_n,{})]})})]})}):null},Id=Ne`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,Od=Ne`
  0% { color: #ff0000; }
  16% { color: #ff8000; }
  32% { color: #ffff00; }
  48% { color: #00ff00; }
  64% { color: #0080ff; }
  80% { color: #8000ff; }
  100% { color: #ff0000; }
`,Rd=Ne`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`,Nd=Le.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  min-height: 600px;
  
  /* 完全透明背景 */
  background: transparent;
  border-radius: 15px;
  border: none;
  box-shadow: none;
`,Ld=(Le.div`
  text-align: center;
  background: linear-gradient(45deg, #ff9999, #7ed6df, #74b9ff, #a29bfe);
  background-size: 400% 400%;
  animation: ${Od} 5s ease-in-out infinite;
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.15),
    inset 0 0 20px rgba(255, 255, 255, 0.3);
  
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: ${Rd} 2s ease-in-out infinite;
  }
  
  .subtitle {
    font-size: 16px;
    margin-top: 8px;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
    .subtitle {
      font-size: 14px;
    }
  }
`,Le.div`
  background: linear-gradient(135deg, #ffe066, #fff3a0);
  border: 3px solid #ffab91;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 
    0 5px 15px rgba(255, 107, 53, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.4);
  
  &::before {
    content: "⭐";
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 24px;
    animation: ${Id} 2s infinite;
  }
  
  &::after {
    content: "⭐";
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 24px;
    animation: ${Id} 2s infinite 1s;
  }
  
  .bookmark-text {
    color: #d63031;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
  }
  
  .bookmark-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .bookmark-btn {
    background: linear-gradient(45deg, #ff9999, #ff7675);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .bookmark-text {
      font-size: 14px;
    }
    
    .bookmark-btn {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`),Dd=Le.div`
  background: linear-gradient(135deg, #ff7675, #e17055);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 3px solid #fff;
  box-shadow: 
    0 5px 20px rgba(231, 76, 60, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    &::before {
      content: "🎓";
      margin-right: 10px;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 10px;
      padding-left: 25px;
      position: relative;
      
      &::before {
        content: "📚";
        position: absolute;
        left: 0;
        top: 0;
      }
      
      &:nth-child(2)::before { content: "🔍"; }
      &:nth-child(3)::before { content: "🤖"; }
      &:nth-child(4)::before { content: "⚡"; }
    }
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 18px;
    }
    
    ul li {
      font-size: 14px;
    }
  }
`,Md=Le.div`
  background: linear-gradient(135deg, #fdcb6e, #f0932b);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 3px solid #fff;
  box-shadow: 
    0 5px 20px rgba(243, 156, 18, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
  
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    &::before {
      content: "💡";
      margin-right: 10px;
    }
  }
  
  .tip-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    border-left: 4px solid #fff;
    
    .key-combo {
      background: rgba(0, 0, 0, 0.3);
      padding: 4px 8px;
      border-radius: 4px;
      font-family: monospace;
      font-weight: bold;
    }
  }
  
  @media (max-width: 768px) {
    h4 {
      font-size: 16px;
    }
    
    .tip-item {
      font-size: 14px;
      padding: 10px;
    }
  }
`,Fd=Le.div`
  background: linear-gradient(135deg, #a29bfe, #b2bec3);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #fff;
  box-shadow: 
    0 3px 15px rgba(142, 68, 173, 0.2),
    inset 0 0 15px rgba(255, 255, 255, 0.2);
  
  .footer-text {
    font-size: 14px;
    margin-bottom: 10px;
    
    &::before {
      content: "💝";
      margin-right: 8px;
    }
  }
  
  .version-info {
    font-size: 12px;
    opacity: 0.9;
    font-style: italic;
    
    &::before {
      content: "🚀";
      margin-right: 5px;
    }
  }
  
  @media (max-width: 768px) {
    .footer-text {
      font-size: 12px;
    }
    
    .version-info {
      font-size: 10px;
    }
  }
`,Bd=Le.div`
  background: linear-gradient(45deg, #ff9999, #7ed6df);
  color: white;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 2px solid #fff;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  
  .marquee-text {
    display: inline-block;
    animation: marquee 30s linear infinite;
    font-weight: bold;
    font-size: 14px;
    transition: animation-duration 0.3s ease;
    
    &::before {
      content: "🎉";
      margin-right: 10px;
    }
    
    &::after {
      content: "🎉";
      margin-left: 10px;
    }
  }
  
  /* 鼠标悬停时"刹车"效果 */
  &:hover .marquee-text {
    animation-play-state: paused;
    transition: all 0.5s ease-out;
  }
  
  /* 鼠标移出时"加速冲出"效果 */
  &:not(:hover) .marquee-text {
    animation-play-state: running;
    transition: all 0.2s ease-in;
  }
  
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  @media (max-width: 768px) {
    .marquee-text {
      font-size: 12px;
    }
  }
`,Ud=e=>{let{visible:n=!1,searchInputFocused:r=!1,showFilters:a=!1,onSearch:i,loading:o,initialQuery:s,dataSource:l,onDataSourceChange:c,onFocusChange:d,onFiltersChange:u,onReportSwitchChange:p,onQueryChange:f,onResearchDomainChange:h,isHomePage:g=!1}=e;const[x,m]=(0,t.useState)(n),[b,y]=(0,t.useState)(new Date);(0,t.useEffect)(()=>{m(n);const e=setInterval(()=>{y(new Date)},1e3);return()=>clearInterval(e)},[n]);return x?(0,es.jsxs)(Nd,{children:[(0,es.jsx)(Ys,{onSearch:i,loading:o,initialQuery:s,dataSource:l,onDataSourceChange:c,onFocusChange:d,onFiltersChange:u,onReportSwitchChange:p,onQueryChange:f,variant:"welcome",showTitle:!0,onResearchDomainChange:h,isHomePage:g}),(0,es.jsx)(Bd,{children:(0,es.jsxs)("div",{className:"marquee-text",children:["\ud83c\udf89 \u6b22\u8fce\u8bbf\u95eeAI\u79d1\u7814\u72d7\u667a\u80fd\u5b66\u672f\u641c\u7d22\u5f15\u64ce\uff01\u514d\u8d39\u4e3a\u60a8\u63d0\u4f9b\u6700\u4e13\u4e1a\u7684\u5b66\u672f\u8bba\u6587\u641c\u7d22\u670d\u52a1\uff01 \ud83d\udce7 \u90ae\u7bb1\uff1a3639163969@qq.com \ud83d\udcac QQ\u6280\u672f\u4ea4\u6d41\u7fa4\uff1aAI\u79d1\u7814\u72d7\u5c0f\u7a9d \ud83d\udcf1 \u5fae\u4fe1\u5ba2\u670d\uff1aBigFe5 \ud83d\udd50 \u5f53\u524d\u65f6\u95f4\uff1a",b.toLocaleString(),"\ud83d\udd25 \u5168\u7403\u9886\u5148\u7684AI\u5b66\u672f\u641c\u7d22\u5e73\u53f0\uff0c\u5df2\u4e3a\u6570\u4e07\u79d1\u7814\u5de5\u4f5c\u8005\u63d0\u4f9b\u670d\u52a1\uff01 \ud83d\udc9d \u559c\u6b22\u6211\u4eec\u7684\u670d\u52a1\uff1f\u522b\u5fd8\u4e86\u6536\u85cf\u672c\u7ad9\u5e76\u63a8\u8350\u7ed9\u540c\u4e8b\u670b\u53cb\uff01"]})}),(0,es.jsxs)(Ld,{children:[(0,es.jsx)("div",{className:"bookmark-text",children:"\ud83d\udccc \u559c\u6b22\u672c\u7ad9\uff1f\u522b\u5fd8\u4e86\u6536\u85cf\u54e6\uff01\ud83d\udccc"}),(0,es.jsxs)("div",{className:"bookmark-buttons",children:[(0,es.jsx)("button",{className:"bookmark-btn",onClick:()=>{if(window.confirm("\u662f\u5426\u5c06\u672c\u7ad9\u6dfb\u52a0\u5230\u6536\u85cf\u5939\uff1f"))try{window.external&&window.external.addFavorite?window.external.addFavorite(window.location.href,"AI\u79d1\u7814\u72d7 - \u667a\u80fd\u5b66\u672f\u641c\u7d22\u5f15\u64ce"):window.sidebar&&window.sidebar.addPanel?window.sidebar.addPanel("AI\u79d1\u7814\u72d7 - \u667a\u80fd\u5b66\u672f\u641c\u7d22\u5f15\u64ce",window.location.href,""):alert("\u8bf7\u4f7f\u7528 Ctrl+D (Windows) \u6216 Cmd+D (Mac) \u5c06\u672c\u7ad9\u6dfb\u52a0\u5230\u6536\u85cf\u5939")}catch(fr){alert("\u8bf7\u4f7f\u7528 Ctrl+D (Windows) \u6216 Cmd+D (Mac) \u5c06\u672c\u7ad9\u6dfb\u52a0\u5230\u6536\u85cf\u5939")}},children:"\u2b50 \u6536\u85cf\u672c\u7ad9"}),(0,es.jsx)("button",{className:"bookmark-btn",onClick:()=>{if(window.confirm("\u662f\u5426\u5c06\u672c\u7ad9\u8bbe\u4e3a\u9996\u9875\uff1f"))try{document.all?(document.body.style.behavior="url(#default#homepage)",document.body.setHomePage(window.location.href)):alert("\u8bf7\u624b\u52a8\u5c06\u672c\u7ad9\u8bbe\u4e3a\u9996\u9875\uff1a"+window.location.href)}catch(fr){alert("\u8bf7\u624b\u52a8\u5c06\u672c\u7ad9\u8bbe\u4e3a\u9996\u9875\uff1a"+window.location.href)}},children:"\ud83c\udfe0 \u8bbe\u4e3a\u9996\u9875"})]})]}),(0,es.jsxs)(Md,{children:[(0,es.jsx)("h4",{children:"\u4f7f\u7528\u5c0f\u6280\u5de7"}),(0,es.jsxs)("div",{className:"tip-item",children:[(0,es.jsx)("strong",{children:"\ud83c\udfaf \u667a\u80fd\u641c\u7d22\uff1a"}),"\u76f4\u63a5\u7528\u4e2d\u6587\u63cf\u8ff0\u60a8\u7684\u7814\u7a76\u9700\u6c42\uff0cAI\u4f1a\u4e3a\u60a8\u627e\u5230\u6700\u76f8\u5173\u7684\u8bba\u6587"]}),(0,es.jsxs)("div",{className:"tip-item",children:[(0,es.jsx)("strong",{children:"\u26a1 \u5feb\u6377\u952e\uff1a"}),"\u6309\u4f4f ",(0,es.jsx)("span",{className:"key-combo",children:"Shift + Enter"})," \u8ba9AI\u4f18\u5316\u60a8\u7684\u641c\u7d22\u6761\u4ef6"]}),(0,es.jsxs)("div",{className:"tip-item",children:[(0,es.jsx)("strong",{children:"\ud83d\udd04 \u6570\u636e\u6e90\u5207\u6362\uff1a"}),"\u5982\u679c\u641c\u7d22\u7ed3\u679c\u4e0d\u6ee1\u610f\uff0c\u53ef\u4ee5\u5207\u6362\u4e0d\u540c\u7684\u6570\u636e\u6e90\u91cd\u65b0\u641c\u7d22"]})]}),(0,es.jsxs)(Dd,{children:[(0,es.jsx)("h3",{children:"\u672c\u7ad9\u7279\u8272\u529f\u80fd"}),(0,es.jsxs)("ul",{children:[(0,es.jsx)("li",{children:"\u6d77\u91cf\u5b66\u672f\u8d44\u6e90\uff1a\u8986\u76d6\u5168\u7403\u4e3b\u8981\u5b66\u672f\u6570\u636e\u5e93"}),(0,es.jsx)("li",{children:"\u667a\u80fd\u641c\u7d22\u7b97\u6cd5\uff1aAI\u9a71\u52a8\u7684\u7cbe\u51c6\u6587\u732e\u68c0\u7d22"}),(0,es.jsx)("li",{children:"\u591a\u8bed\u8a00\u652f\u6301\uff1a\u4e2d\u82f1\u6587\u65e0\u7f1d\u5207\u6362\u7ffb\u8bd1"}),(0,es.jsx)("li",{children:"\u5b9e\u65f6\u66f4\u65b0\uff1a\u7b2c\u4e00\u65f6\u95f4\u83b7\u53d6\u6700\u65b0\u7814\u7a76\u6210\u679c"})]})]}),(0,es.jsxs)(Fd,{children:[(0,es.jsx)("div",{className:"footer-text",children:"\u611f\u8c22\u60a8\u9009\u62e9AI\u79d1\u7814\u72d7\uff01\u795d\u60a8\u5b66\u672f\u7814\u7a76\u4e00\u5207\u987a\u5229\uff01"}),(0,es.jsx)("div",{className:"version-info",children:"\u7248\u672c v3.1.0 | \u4eca\u65e5\u4e3a\u60a8\u670d\u52a1 | \u8ba9\u5b66\u672f\u641c\u7d22\u66f4\u7b80\u5355"})]})]}):null},Wd=Le.div`
  position: fixed;
  right: 30px;
  top: 120px;
  bottom: 120px;
  width: 60px;
  z-index: 100;
  pointer-events: none;
  
  @media (max-width: 1200px) {
    right: 20px;
    width: 50px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,qd=Le.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    to bottom,
    #3498db 0%,
    #2980b9 25%,
    #27ae60 50%,
    #e67e22 75%,
    #e74c3c 100%
  );
  border-radius: 2px;
  transform: translateX(-50%);
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
`,Kd=Le.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>{switch(e.type){case"major":return"linear-gradient(135deg, #e74c3c, #c0392b)";case"feature":return"linear-gradient(135deg, #3498db, #2980b9)";case"improve":return"linear-gradient(135deg, #f39c12, #e67e22)";case"fix":return"linear-gradient(135deg, #27ae60, #229954)";default:return"linear-gradient(135deg, #95a5a6, #7f8c8d)"}}};
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateX(-50%) scale(1.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${e=>{switch(e.type){case"major":return"rgba(231, 76, 60, 0.2)";case"feature":return"rgba(52, 152, 219, 0.2)";case"improve":return"rgba(243, 156, 18, 0.2)";case"fix":return"rgba(39, 174, 96, 0.2)";default:return"rgba(149, 165, 166, 0.2)"}}};
    animation: pulse 2s infinite;
    opacity: 0;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.3;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
    
    &:hover {
      transform: translateX(-50%) scale(1.2);
    }
  }
`,Hd=Le.div`
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1200px) {
    font-size: 8px;
  }
`,Yd=Le.div`
  position: fixed;
  right: ${e=>e.right||100}px;
  top: ${e=>null!==e.top?`${e.top}px`:"auto"};
  bottom: ${e=>null!==e.bottom?`${e.bottom}px`:"auto"};
  width: 350px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 0;
  z-index: 1000;
  opacity: 0;
  transform: translateX(30px);
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  pointer-events: none;
  max-height: 500px;
  overflow: hidden;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @media (max-width: 1400px) {
    right: ${e=>Math.min(e.right||80,80)}px;
    width: 320px;
  }
  
  @media (max-width: 1200px) {
    right: ${e=>Math.min(e.right||70,70)}px;
    width: 280px;
    max-height: 400px;
  }
  
  /* 确保不会超出屏幕左边界 */
  ${e=>{const t="undefined"!==typeof window?window.innerWidth:1200;return(t>1400?100:t>1200?80:70)+(t>1400?350:t>1200?320:280)>t-20?"\n        right: auto;\n        left: 20px;\n        transform: translateX(-30px);\n        \n        @keyframes slideIn {\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n      ":""}}
`,Vd=Le.div`
  padding: 20px 24px 16px;
  background: ${e=>{switch(e.type){case"major":return"linear-gradient(135deg, #e74c3c, #c0392b)";case"feature":return"linear-gradient(135deg, #3498db, #2980b9)";case"improve":return"linear-gradient(135deg, #f39c12, #e67e22)";case"fix":return"linear-gradient(135deg, #27ae60, #229954)";default:return"linear-gradient(135deg, #95a5a6, #7f8c8d)"}}};
  color: white;
  border-radius: 16px 16px 0 0;
`,Gd=Le.h4`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`,Qd=Le.div`
  font-size: 13px;
  opacity: 0.9;
  font-weight: 500;
  
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`,Xd=Le.div`
  padding: 20px 24px;
  max-height: 350px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  
  @media (max-width: 1200px) {
    padding: 16px 20px;
    max-height: 280px;
  }
`,Jd=Le.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,Zd=Le.li`
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  color: #4a5568;
  line-height: 1.5;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '${e=>{switch(e.type){case"new":return"\u2728";case"improve":return"\ud83d\udd27";case"fix":return"\ud83d\udc1b";default:return"\ud83d\udcdd"}}}';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: ${e=>{switch(e.type){case"new":return"rgba(39, 174, 96, 0.1)";case"improve":return"rgba(243, 156, 18, 0.1)";case"fix":return"rgba(231, 76, 60, 0.1)";default:return"rgba(52, 152, 219, 0.1)"}}};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
  
  @media (max-width: 1200px) {
    font-size: 13px;
    margin-bottom: 10px;
    padding-left: 24px;
    
    &::before {
      width: 18px;
      height: 18px;
      font-size: 9px;
    }
  }
`,eu=e=>{let{visible:n=!0}=e;const[r,a]=(0,t.useState)(null),[i,o]=(0,t.useState)({top:null,bottom:null,right:100}),s=e=>{switch(e){case"major":return(0,es.jsx)(ar,{});case"feature":return(0,es.jsx)(pr,{});case"improve":return(0,es.jsx)(ir,{});case"fix":return(0,es.jsx)(pn,{});default:return(0,es.jsx)($n,{})}},l=()=>{a(null)};return n?(0,es.jsxs)(Wd,{children:[(0,es.jsx)(qd,{}),[{id:"v3.2.0",version:"v3.2.0",date:"2025-07-23",type:"feature",position:10,features:[{type:"new",text:"\ud83c\udf1f \u5168\u65b0\u8fdb\u5316\u6811\u5c55\u793a\uff1a\u4ea7\u54c1\u53d1\u5c55\u5386\u7a0b\u4e00\u76ee\u4e86\u7136\uff0c\u53f3\u4fa7\u4f18\u96c5\u5c55\u793a\u66f4\u65b0\u65e5\u5fd7"},{type:"new",text:"\ud83c\udf9b\ufe0f \u7edf\u4e00\u540e\u53f0\u7ba1\u7406\uff1a\u65b0\u589e\u7ba1\u7406\u5458\u9875\u9762\uff0c\u96c6\u4e2d\u7ba1\u7406\u65e5\u5fd7\u3001\u7528\u6237\u548c\u7cfb\u7edf\u8bbe\u7f6e"},{type:"new",text:"\ud83e\uddea AI\u6a21\u578b\u6d4b\u8bd5\uff1a\u96c6\u6210Grok\u6a21\u578b\u6d4b\u8bd5\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u591aAI\u9009\u62e9"},{type:"improve",text:"\ud83d\ude80 \u6027\u80fd\u4f18\u5316\uff1a\u6e05\u7406\u5197\u4f59\u4ee3\u7801\uff0c\u63d0\u5347\u9875\u9762\u54cd\u5e94\u901f\u5ea6\u548c\u7a33\u5b9a\u6027"}]},{id:"v3.1.0",version:"v3.1.0",date:"2025-07-21",type:"major",position:20,features:[{type:"new",text:"\u26a1 \u53cc\u8bf7\u6c42\u6280\u672f\uff1aPrimary Scraping\u652f\u630120\u7bc7\u5e76\u53d1\u83b7\u53d6\uff0c\u641c\u7d22\u901f\u5ea6\u7ffb\u500d"},{type:"new",text:"\ud83c\udf10 \u751f\u4ea7\u73af\u5883\u90e8\u7f72\uff1a\u5b8c\u6574\u7684\u90e8\u7f72\u811a\u672c\u548c\u73af\u5883\u5206\u79bb\uff0c\u670d\u52a1\u66f4\u7a33\u5b9a"},{type:"improve",text:"\ud83c\udfaf \u641c\u7d22\u4f18\u5316\uff1a\u6539\u8fdb\u5206\u9875\u673a\u5236\uff0c\u7ed3\u679c\u83b7\u53d6\u66f4\u51c6\u786e\u66f4\u5feb\u901f"},{type:"improve",text:"\ud83d\udd27 \u4ee3\u7801\u91cd\u6784\uff1a\u4f18\u5316\u6a21\u5757\u5bfc\u5165\u548c\u6837\u5f0f\u4e00\u81f4\u6027\uff0c\u5f00\u53d1\u4f53\u9a8c\u66f4\u597d"}]},{id:"v3.0.0",version:"v3.0.0",date:"2025-07-08",type:"major",position:30,features:[{type:"new",text:"\ud83c\udf5e \u667a\u80fd\u9519\u8bef\u63d0\u793a\uff1aReact Hot Toast\u96c6\u6210\uff0c\u53cb\u597d\u7684\u9519\u8bef\u53cd\u9988\u548c\u64cd\u4f5c\u6307\u5f15"},{type:"new",text:"\ud83d\udcca \u589e\u5f3aAPI\u65e5\u5fd7\uff1a\u8be6\u7ec6\u8bb0\u5f55\u54cd\u5e94\u72b6\u6001\uff0c\u652f\u6301\u7a7a\u54cd\u5e94\u7edf\u8ba1\u548c\u7b5b\u9009"},{type:"new",text:"\ud83d\udd04 \u6570\u636e\u6e90\u667a\u80fd\u5207\u6362\uff1a\u7edf\u4e00\u6587\u6848\u8bbe\u8ba1\uff0c\u9690\u85cf\u6280\u672f\u7ec6\u8282\u4e13\u6ce8\u7528\u6237\u4f53\u9a8c"},{type:"improve",text:"\u23f0 \u8d85\u65f6\u4f18\u5316\uff1aAPI\u8d85\u65f6\u65f6\u95f4\u5ef6\u957f\u81f320\u79d2\uff0c\u51cf\u5c11\u7f51\u7edc\u5f02\u5e38\u5f71\u54cd"},{type:"fix",text:"\ud83c\udfa8 \u754c\u9762\u4fee\u590d\uff1a\u66f4\u65b0\u5b66\u672f\u4e3b\u9898favicon\uff0c\u4fee\u590dReact\u8b66\u544a\u548c\u663e\u793a\u95ee\u9898"}]},{id:"v2.9.0",version:"v2.9.0",date:"2025-07-07",type:"feature",position:40,features:[{type:"new",text:"\ud83d\udcca \u7528\u6237\u884c\u4e3a\u5206\u6790\uff1a\u96c6\u6210Google Analytics\u548cMicrosoft Clarity\uff0c\u6301\u7eed\u4f18\u5316\u4f53\u9a8c"},{type:"new",text:"\ud83d\udd0d \u641c\u7d22\u4f53\u9a8c\u5347\u7ea7\uff1a\u6539\u8fdb\u7b5b\u9009\u5668\u5207\u6362\u903b\u8f91\u548cUI\u7ec4\u4ef6\u54cd\u5e94\u6027"},{type:"improve",text:"\ud83c\udfaf SEO\u589e\u5f3a\uff1a\u5b8c\u5584meta\u6807\u7b7e\uff0c\u63d0\u5347\u641c\u7d22\u5f15\u64ce\u6392\u540d\u548c\u5206\u4eab\u6548\u679c"},{type:"improve",text:"\ud83e\uddf9 \u4ee3\u7801\u6e05\u7406\uff1a\u79fb\u9664\u8c03\u8bd5\u65e5\u5fd7\uff0c\u4ee3\u7801\u66f4\u7b80\u6d01\u7ef4\u62a4\u6027\u66f4\u597d"}]},{id:"v2.8.0",version:"v2.8.0",date:"2025-06-27",type:"feature",position:50,features:[{type:"new",text:"\ud83d\udd10 \u5b89\u5168\u5347\u7ea7\uff1aAPI\u5bc6\u94a5\u540e\u7aef\u4ee3\u7406\uff0c\u79fb\u9664\u524d\u7aef\u66b4\u9732\u63d0\u5347\u5b89\u5168\u6027"},{type:"new",text:"\ud83d\udcac \u5ba2\u670d\u7cfb\u7edf\uff1a\u5168\u65b0\u5ba2\u6237\u670d\u52a1\u53cd\u9988\u5f39\u7a97\uff0c\u7528\u6237\u95ee\u9898\u53ca\u65f6\u54cd\u5e94"},{type:"new",text:"\ud83c\udfa8 \u5706\u5f62\u6309\u94ae\u8bbe\u8ba1\uff1aFloatingSideStepper\u91c7\u7528\u66f4\u7f8e\u89c2\u7684\u5706\u5f62\u8bbe\u8ba1"},{type:"improve",text:"\ud83e\udd16 AI\u6a21\u578b\u4f18\u5316\uff1a\u7b80\u5316\u6a21\u578b\u9009\u62e9\u9009\u9879\uff0c\u6807\u7b7e\u66f4\u6e05\u6670\u4e00\u81f4"},{type:"improve",text:"\ud83d\udcf1 \u8def\u7531\u589e\u5f3a\uff1aReact Router\u96c6\u6210\uff0c\u9875\u9762\u5bfc\u822a\u66f4\u6d41\u7545"}]},{id:"v2.7.0",version:"v2.7.0",date:"2025-06-26",type:"feature",position:60,features:[{type:"new",text:"\ud83c\udfae \u60ac\u6d6e\u5bfc\u822a\u63a7\u5236\u5668\uff1aFloatingSideStepper\u4fa7\u8fb9\u5bfc\u822a\uff0c\u8bba\u6587\u6d4f\u89c8\u66f4\u4fbf\u6377"},{type:"new",text:"\ud83c\udf0d \u5b8c\u6574\u5185\u5bb9\u7ffb\u8bd1\uff1a\u652f\u6301\u8bba\u6587\u6807\u9898\u3001\u6458\u8981\u3001AI\u603b\u7ed3\u5b8c\u6574\u7ffb\u8bd1"},{type:"new",text:"\ud83d\udd17 \u4f18\u5148\u5b98\u65b9\u94fe\u63a5\uff1a\u667a\u80fd\u8bc6\u522b\u5e76\u4f18\u5148\u663e\u793a\u5b98\u65b9\u53d1\u5e03\u8005\u94fe\u63a5"},{type:"improve",text:"\ud83d\udcca \u7ffb\u8bd1\u4f53\u9a8c\u4f18\u5316\uff1a\u6279\u91cf\u7ffb\u8bd1\u903b\u8f91\u5347\u7ea7\uff0c\u72b6\u6001\u7ba1\u7406\u66f4\u5b8c\u5584"},{type:"improve",text:"\ud83c\udfaf UI\u5e03\u5c40\u6539\u8fdb\uff1aPaperCard\u6837\u5f0f\u91cd\u6784\uff0c\u4fe1\u606f\u5c55\u793a\u66f4\u6e05\u6670"}]},{id:"v2.6.0",version:"v2.6.0",date:"2025-06-24",type:"feature",position:70,features:[{type:"new",text:"\ud83c\udf9b\ufe0f \u6570\u636e\u6e90\u9009\u62e9\uff1a\u652f\u6301\u591a\u6570\u636e\u6e90\u5207\u6362\uff0clocalStorage\u4fdd\u5b58\u7528\u6237\u504f\u597d"},{type:"new",text:"\ud83d\udca1 \u667a\u80fd\u8f93\u5165\u63d0\u793a\uff1aAI\u641c\u7d22\u63d0\u793a\u7ec4\u4ef6\uff0cEnter\u548cShift\u952e\u53ef\u89c6\u5316\u6307\u5bfc"},{type:"new",text:"\ud83d\udcf1 \u54cd\u5e94\u5f0f\u6a21\u6001\u6846\uff1a\u5168\u65b0\u6a21\u6001\u6846\u8bbe\u8ba1\uff0c\u52a8\u753b\u6548\u679c\u548c\u80cc\u666f\u5904\u7406\u4f18\u5316"},{type:"improve",text:"\u2328\ufe0f \u952e\u76d8\u4ea4\u4e92\uff1aESC\u5173\u95ed\u5f39\u7a97\uff0c\u952e\u76d8\u64cd\u4f5c\u66f4\u76f4\u89c2\u4fbf\u6377"},{type:"improve",text:"\ud83c\udfa8 \u89c6\u89c9\u4f53\u9a8c\uff1a\u641c\u7d22\u6846padding\u8c03\u6574\uff0c\u5360\u4f4d\u7b26\u6587\u672c\u4f18\u5316"}]},{id:"v2.5.0",version:"v2.5.0",date:"2025-06-24",type:"major",position:80,features:[{type:"new",text:"\ud83d\udcca \u6279\u91cf\u7ffb\u8bd1\u529f\u80fd\uff1a\u4e00\u952e\u7ffb\u8bd1\u6240\u6709\u8bba\u6587\u6807\u9898\uff0c\u8fdb\u5ea6\u5b9e\u65f6\u663e\u793a"},{type:"new",text:"\ud83d\udcc8 AI\u7814\u7a76\u62a5\u544a\uff1a\u57fa\u4e8e\u591a\u7bc7\u8bba\u6587\u751f\u6210\u6df1\u5ea6\u7814\u7a76\u8d8b\u52bf\u5206\u6790"},{type:"new",text:"\ud83d\udd0d \u641c\u7d22\u7126\u70b9\u7ba1\u7406\uff1a\u8f93\u5165\u6846\u805a\u7126\u72b6\u6001\u667a\u80fd\u5904\u7406\uff0c\u4f7f\u7528\u8bf4\u660e\u52a8\u6001\u663e\u793a"},{type:"new",text:"\ud83d\udcdd \u4f7f\u7528\u6307\u5357\u7ec4\u4ef6\uff1a\u9996\u6b21\u8bbf\u95ee\u65f6\u663e\u793a\u8be6\u7ec6\u4f7f\u7528\u8bf4\u660e"},{type:"improve",text:"\ud83c\udfaf \u6279\u91cf\u5206\u6790\u5347\u7ea7\uff1a\u9009\u62e9\u5206\u6790\u7ef4\u5ea6\uff0c\u652f\u6301\u591a\u7bc7\u8bba\u6587\u540c\u65f6\u5206\u6790"}]},{id:"v2.4.0",version:"v2.4.0",date:"2025-06-23",type:"feature",position:87,features:[{type:"new",text:"\ud83d\udcbc \u5546\u52a1\u5408\u4f5c\u5f39\u7a97\uff1a\u4e1a\u52a1\u6d3d\u8c08\u3001\u7528\u6237\u53cd\u9988\u3001\u66f4\u65b0\u65e5\u5fd7\u6a21\u6001\u6846"},{type:"new",text:"\ud83c\udfa8 \u52a8\u6001\u5de5\u5177\u63d0\u793a\uff1aAI\u529f\u80fd\u63d0\u793a\u6846\u667a\u80fd\u5b9a\u4f4d\uff0c\u54cd\u5e94\u5f0f\u8bbe\u8ba1"},{type:"improve",text:"\ud83c\udf08 \u89c6\u89c9\u6548\u679c\u5347\u7ea7\uff1a\u6e10\u53d8\u52a8\u753btagline\uff0c\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u4f18\u5316"},{type:"improve",text:"\ud83d\udd04 \u6570\u636e\u6e90\u5207\u6362\uff1a\u91cd\u7f6e\u76f8\u5173\u72b6\u6001\uff0c\u641c\u7d22\u529f\u80fd\u66f4\u7a33\u5b9a"}]},{id:"v2.0.0",version:"v2.0.0",date:"2025-06-20",type:"major",position:95,features:[{type:"new",text:'\ud83d\ude80 \u9879\u76ee\u91cd\u547d\u540d\uff1a\u4ece"semantic-scholar-search"\u5347\u7ea7\u4e3a"aisciresgo-search"'},{type:"new",text:"\ud83c\udfaf \u82f1\u96c4\u533a\u57df\uff1a\u5168\u65b0Hero section\u8bbe\u8ba1\uff0c\u54cd\u5e94\u5f0flogo\u548c\u6807\u8bed"},{type:"new",text:"\ud83c\udf1f AI\u529f\u80fd\u5361\u7247\uff1a\u5c55\u793aAI\u589e\u5f3a\u3001\u591a\u8bed\u8a00\u7ffb\u8bd1\u3001\u6df1\u5ea6\u5206\u6790\u7b49\u6838\u5fc3\u80fd\u529b"},{type:"new",text:"\ud83d\udd0d \u641c\u7d22\u8868\u5355\u96c6\u6210\uff1a\u9ad8\u7ea7\u7b5b\u9009\u548c\u6570\u636e\u6e90\u9009\u62e9\u7edf\u4e00\u6574\u5408"},{type:"improve",text:'\ud83d\udcf1 \u54c1\u724c\u5347\u7ea7\uff1a\u66f4\u65b0\u4e3a"\u79d1\u7814\u72d7\u667a\u80fd\u6587\u732e\u641c\u7d22"\uff0c\u63d0\u5347\u54c1\u724c\u5f62\u8c61'}]}].map(e=>(0,es.jsx)(Kd,{type:e.type,style:{top:`${e.position}%`},onMouseEnter:t=>((e,t)=>{const n=t.currentTarget.getBoundingClientRect(),r=window.innerHeight,i=window.innerWidth,s=i>1400?350:i>1200?320:280,l=i>1400?100:i>1200?80:70;let c=n.top-50,d=null,u=l;c+500>r-20&&(d=r-n.bottom-50,c=null),null!==c&&c<20&&(c=20),l+s>i-20&&(u=Math.max(20,i-s-20)),o({top:c,bottom:d,right:u}),a(e)})(e,t),onMouseLeave:l,children:(0,es.jsx)(Hd,{children:s(e.type)})},e.id)),r&&(0,es.jsxs)(Yd,{top:i.top,bottom:i.bottom,right:i.right,children:[(0,es.jsxs)(Vd,{type:r.type,children:[(0,es.jsxs)(Gd,{children:[s(r.type),r.version]}),(0,es.jsx)(Qd,{children:r.date})]}),(0,es.jsx)(Xd,{children:(0,es.jsx)(Jd,{children:r.features.map((e,t)=>(0,es.jsx)(Zd,{type:e.type,children:e.text},t))})})]})]}):null},tu=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const t={"Content-Type":"application/json"};return(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&e&&(t["x-api-key"]=e),$o.create({baseURL:"https://api.semanticscholar.org/graph/v1",headers:t,timeout:15e3})},nu=async()=>{try{return console.log("\u5c1d\u8bd5\u83b7\u53d6Semantic Scholar API\u5bc6\u94a5..."),null}catch(e){return console.warn("\u83b7\u53d6Semantic Scholar\u5bc6\u94a5\u5931\u8d25\uff0c\u4f7f\u7528\u516c\u5f00API\u6a21\u5f0f:",e.message),null}},ru=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"paperId,title,abstract,authors,year,venue,citationCount,referenceCount,influentialCitationCount,fieldsOfStudy,isOpenAccess,openAccessPdf,tldr,journal",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=0;const o=async function(){let s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];try{var l;const i=await nu(),o=tu(s,i),c={query:e,limit:t,offset:n,fields:r};a.year&&(c.year=a.year),a.minCitationCount&&(c.minCitationCount=a.minCitationCount),a.fieldsOfStudy&&(c.fieldsOfStudy=a.fieldsOfStudy),a.venue&&(c.venue=a.venue),void 0!==a.openAccessPdf&&(c.openAccessPdf=a.openAccessPdf),console.log("Semantic Scholar \u641c\u7d22\u53c2\u6570:",c);const d=await o.get("/paper/search",{params:c});return console.log("Semantic Scholar \u641c\u7d22\u6210\u529f:",{query:e,total:d.data.total,returned:(null===(l=d.data.data)||void 0===l?void 0:l.length)||0,hasApiKey:!!i}),{papers:d.data.data||[],total:d.data.total||0,next:d.data.next||null,hasMore:!!d.data.next}}catch(f){var c,d,u,p;if(console.error(`Semantic Scholar \u641c\u7d22\u5931\u8d25 (${s?"\u6709\u5bc6\u94a5":"\u65e0\u5bc6\u94a5"}\u6a21\u5f0f):`,f.message),429===(null===(c=f.response)||void 0===c?void 0:c.status)){if(s&&i<2)return console.log(`\u9047\u5230\u901f\u7387\u9650\u5236\uff0c\u5c1d\u8bd5\u4e0d\u4f7f\u7528API\u5bc6\u94a5\u91cd\u8bd5... (${i+1}/3)`),i++,o(!1);throw new Error("Semantic Scholar API\u8bf7\u6c42\u9891\u7387\u8fc7\u9ad8\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u6216\u4f7f\u7528\u5176\u4ed6\u6570\u636e\u6e90")}if(403===(null===(d=f.response)||void 0===d?void 0:d.status)){if(s&&i<2)return console.log(`API\u5bc6\u94a5\u6743\u9650\u9519\u8bef\uff0c\u5c1d\u8bd5\u4e0d\u4f7f\u7528\u5bc6\u94a5\u91cd\u8bd5... (${i+1}/3)`),i++,o(!1);throw new Error("Semantic Scholar API\u8bbf\u95ee\u88ab\u62d2\u7edd\uff0c\u8bf7\u68c0\u67e5\u5bc6\u94a5\u914d\u7f6e\u6216\u4f7f\u7528\u5176\u4ed6\u6570\u636e\u6e90")}if("ECONNABORTED"===f.code)throw new Error("Semantic Scholar API\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u6216\u4f7f\u7528\u5176\u4ed6\u6570\u636e\u6e90");if("ENOTFOUND"===f.code||f.message.includes("Network Error"))throw new Error("\u65e0\u6cd5\u8fde\u63a5\u5230Semantic Scholar\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u6216\u4f7f\u7528\u5176\u4ed6\u6570\u636e\u6e90");throw new Error(`Semantic Scholar\u641c\u7d22\u5931\u8d25: ${(null===(u=f.response)||void 0===u||null===(p=u.data)||void 0===p?void 0:p.message)||f.message}`)}};return o()},au="/api/google-scholar",iu=()=>$o.create({timeout:3e4,headers:{"Content-Type":"application/json"}}),ou=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};try{var a,i;const o=iu(),s={query:e,page:t,results:n,language:"en"};r.as_ylo&&(s.as_ylo=r.as_ylo),r.as_yhi&&(s.as_yhi=r.as_yhi),r.language&&(s.language=r.language),r.as_sdt&&(s.as_sdt=r.as_sdt),r.safe&&(s.safe=r.safe),console.log("Google Scholar \u641c\u7d22\u53c2\u6570:",s);const l=await o.get(au+"/search",{params:s});return console.log("Google Scholar \u641c\u7d22\u6210\u529f:",{query:e,page:t,resultsCount:(null===(a=l.data.scholar_results)||void 0===a?void 0:a.length)||0}),{papers:l.data.scholar_results||[],searchInfo:l.data.search_information||{},pagination:l.data.pagination||{},serpapi_pagination:l.data.serpapi_pagination||{},total:(null===(i=l.data.search_information)||void 0===i?void 0:i.total_results)||null}}catch(s){if(console.error("Google Scholar \u641c\u7d22\u5931\u8d25:",s.message),s.response){var o;const e=s.response.status,t=s.response.data;throw 429===e?new Error("API\u8bf7\u6c42\u9891\u7387\u8fc7\u9ad8\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"):403===e?new Error("API\u8bbf\u95ee\u88ab\u62d2\u7edd\uff0c\u8bf7\u68c0\u67e5\u5bc6\u94a5\u914d\u7f6e"):500===e&&null!==t&&void 0!==t&&null!==(o=t.error)&&void 0!==o&&o.includes("\u5bc6\u94a5")?new Error("API\u5bc6\u94a5\u914d\u7f6e\u9519\u8bef\uff0c\u8bf7\u5728\u7ba1\u7406\u540e\u53f0\u68c0\u67e5\u8bbe\u7f6e"):new Error(`\u641c\u7d22\u5931\u8d25: ${(null===t||void 0===t?void 0:t.error)||s.message}`)}throw"ECONNABORTED"===s.code?new Error("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5"):new Error(`\u7f51\u7edc\u9519\u8bef: ${s.message}`)}},su=()=>$o.create({timeout:3e4,proxy:!1,validateStatus:function(e){return e<500}}),lu=e=>{if(!e)return 0;const t=e.match(/\u88ab\u5f15\u7528\u6b21\u6570:(\d+)/),n=e.match(/Cited by (\d+)/);return t?parseInt(t[1]):n?parseInt(n[1]):0},cu=e=>{var t,n,r,a,i,o;const s=(e=>{if(!e)return{authors:[],venue:"",year:null,publisher:""};const t=e.match(/^(.+?)\s-\s(.+?),\s(\d{4})\s-\s(.+)$/);if(t)return{authors:t[1].split(",").map(e=>({name:e.trim()})),venue:t[2].trim(),year:parseInt(t[3]),publisher:t[4].trim()};const n=e.match(/^(.+?)\s-\s(.+)$/);if(n){var r,a;const t=n[2].split(","),i=e.match(/(\d{4})/);return{authors:n[1].split(",").map(e=>({name:e.trim()})),venue:(null===(r=t[0])||void 0===r?void 0:r.trim())||"",year:i?parseInt(i[1]):null,publisher:(null===(a=t[t.length-1])||void 0===a?void 0:a.trim())||""}}return{authors:[{name:e}],venue:"",year:null,publisher:""}})(e.displayed_link);return{paperId:e.id,title:e.title,abstract:e.snippet,year:s.year,authors:s.authors,citationCount:lu(null===(t=e.inline_links)||void 0===t||null===(n=t.cited_by)||void 0===n?void 0:n.total),url:e.title_link,venue:s.venue,source:"primaryScraping",clusterId:null===(r=e.inline_links)||void 0===r||null===(a=r.versions)||void 0===a?void 0:a.cluster_id,citesId:null===(i=e.inline_links)||void 0===i||null===(o=i.cited_by)||void 0===o?void 0:o.cites_id,resources:e.resources||[],publisher:s.publisher,type:e.type||"ARTICLE",publicationTypes:[e.type||"JournalArticle"],fieldsOfStudy:[],isOpenAccess:e.resources&&e.resources.length>0,openAccessPdf:e.resources&&e.resources.length>0?{url:e.resources[0].link}:null,inlineLinks:e.inline_links}},du=async function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;for(let i=0;i<=n;i++)try{var r;const t=su(),n=await t.get("/api/primary/search",{params:e});return console.log("Primary Scraping API \u54cd\u5e94\u6210\u529f:",{page:e.page,resultsCount:null===(r=n.data.scholar_results)||void 0===r?void 0:r.length,pagination:n.data.pagination,attempt:i+1}),n.data}catch(a){if(t=a,console.error(`Primary Scraping \u641c\u7d22\u5931\u8d25 (\u5c1d\u8bd5 ${i+1}/${n+1}):`,a.message),a.response&&(console.error("\u54cd\u5e94\u72b6\u6001:",a.response.status),console.error("\u54cd\u5e94\u6570\u636e:",a.response.data)),i<n&&("ECONNABORTED"===a.code||"ENOTFOUND"===a.code||a.message.includes("Network Error"))){const e=1e3*Math.pow(2,i);console.log(`\u7b49\u5f85 ${e}ms \u540e\u91cd\u8bd5...`),await new Promise(t=>setTimeout(t,e));continue}break}throw t},uu=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};console.log("Primary Scraping \u641c\u7d22\u5f00\u59cb:",{query:e,page:t,results_per_page:n,filters:r});if(20===n){console.log("\u4f7f\u7528\u53cc\u8bf7\u6c42\u903b\u8f91\u83b7\u53d620\u7bc7\u6587\u7ae0");const n=2*t,l=n+1,c={query:e,results_per_page:10,sort_by:"relevance"};r.start_year&&(c.start_year=r.start_year),r.end_year&&(c.end_year=r.end_year),r.language&&(c.language=r.language),r.sort_by&&(c.sort_by=r.sort_by);const d={...c,page:n},u={...c,page:l};console.log("\u53cc\u8bf7\u6c42\u53c2\u6570:",{firstParams:d,secondParams:u});try{var a,i;const e=await du(d),r=await du(u),o=(e.scholar_results||[]).map(cu),s=(r.scholar_results||[]).map(cu),c=[...o,...s];console.log("\u53cc\u8bf7\u6c42\u7ed3\u679c\u5408\u5e76:",{firstPageResults:o.length,secondPageResults:s.length,totalResults:c.length});let p=null;0===c.length&&(p="empty");const f=e.pagination;let h=null;void 0!==e.total&&null!==e.total?h=e.total:void 0!==(null===(a=e.search_metadata)||void 0===a?void 0:a.total_results)?h=parseInt(e.search_metadata.total_results):void 0!==(null===(i=e.search_information)||void 0===i?void 0:i.total_results)&&(h=parseInt(e.search_information.total_results));let g=h;if(null===g){const e=null!==f&&void 0!==f&&f.page_no?Object.keys(f.page_no).map(Number):[],t=e.length>0?Math.max(...e):n+1;g=20*Math.ceil((t+1)/2)}let x=!1;if(null!==h)x=20*(t+1)<g;else{const e=r.pagination,t=null!==e&&void 0!==e&&e.page_no?Object.keys(e.page_no).map(Number):[];x=l<(t.length>0?Math.max(...t):l)}return console.log("\u53cc\u8bf7\u6c42\u5206\u9875\u8ba1\u7b97\u7ed3\u679c:",{userPage:t,firstApiPage:n,secondApiPage:l,actualTotal:h,totalResults:g,hasNextPage:x,isUsingActualTotal:null!==h}),{papers:c,total:g,offset:20*t,next:x?t+1:null,pagination:e.pagination,relatedSearches:e.related_searches||[],resultStatus:p,isDoubleRequest:!0,requestDetails:{firstRequest:{page:n,results:o.length},secondRequest:{page:l,results:s.length}}}}catch(p){let e="Primary Scraping \u53cc\u8bf7\u6c42\u641c\u7d22\u5931\u8d25";if("ECONNABORTED"===p.code)e+=": \u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5";else if("ENOTFOUND"===p.code)e+=": \u65e0\u6cd5\u8fde\u63a5\u5230\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u914d\u7f6e";else if(p.message&&p.message.includes("ERR_PROXY_CONNECTION_FAILED"))e+=": \u4ee3\u7406\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u4ee3\u7406\u8bbe\u7f6e";else{var o,s;e+=`: ${(null===(o=p.response)||void 0===o||null===(s=o.data)||void 0===s?void 0:s.message)||p.message}`}throw new Error(e)}}else{const a={query:e,page:t,results_per_page:n,sort_by:"relevance"};r.start_year&&(a.start_year=r.start_year),r.end_year&&(a.end_year=r.end_year),r.language&&(a.language=r.language),r.sort_by&&(a.sort_by=r.sort_by),console.log("Primary Scraping \u5355\u8bf7\u6c42\u53c2\u6570:",a);try{var l,c;const e=await du(a),r=(e.scholar_results||[]).map(cu);let i=null;e&&e.scholar_results&&0!==e.scholar_results.length||(i="empty");const o=e.page||0,s=e.pagination;let d=null;void 0!==e.total&&null!==e.total?d=e.total:void 0!==(null===(l=e.search_metadata)||void 0===l?void 0:l.total_results)?d=parseInt(e.search_metadata.total_results):void 0!==(null===(c=e.search_information)||void 0===c?void 0:c.total_results)&&(d=parseInt(e.search_information.total_results));let u=d;if(null===u){const e=null!==s&&void 0!==s&&s.page_no?Object.keys(s.page_no).map(Number):[];u=(e.length>0?Math.max(...e):o+1)*n}let p=!1;if(null!==d)p=(o+1)*n<u;else{const e=null!==s&&void 0!==s&&s.page_no?Object.keys(s.page_no).map(Number):[];p=o<(e.length>0?Math.max(...e):o+1)-1}return console.log("Primary Scraping \u5355\u8bf7\u6c42\u5206\u9875\u8ba1\u7b97\u7ed3\u679c:",{currentPage:o,actualTotal:d,totalResults:u,hasNextPage:p,isUsingActualTotal:null!==d}),{papers:r,total:u,offset:t*n,next:p?t+1:null,pagination:e.pagination,relatedSearches:e.related_searches||[],resultStatus:i,isDoubleRequest:!1}}catch(p){let e="Primary Scraping \u641c\u7d22\u5931\u8d25";if("ECONNABORTED"===p.code)e+=": \u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5";else if("ENOTFOUND"===p.code)e+=": \u65e0\u6cd5\u8fde\u63a5\u5230\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u914d\u7f6e";else if(p.message&&p.message.includes("ERR_PROXY_CONNECTION_FAILED"))e+=": \u4ee3\u7406\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u4ee3\u7406\u8bbe\u7f6e";else{var d,u;e+=`: ${(null===(d=p.response)||void 0===d||null===(u=d.data)||void 0===u?void 0:u.message)||p.message}`}throw new Error(e)}}};class pu{static success(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return da.success(e,{...this.defaultConfig,style:{...this.defaultConfig.style,background:"#10b981",color:"#fff"},iconTheme:{primary:"#10b981",secondary:"#fff"},...t})}static error(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return da.error(e,{...this.defaultConfig,duration:6e3,style:{...this.defaultConfig.style,background:"#ef4444",color:"#fff"},iconTheme:{primary:"#ef4444",secondary:"#fff"},...t})}static warning(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return da(e,{...this.defaultConfig,icon:"\u26a0\ufe0f",style:{...this.defaultConfig.style,background:"#f59e0b",color:"#fff"},...t})}static info(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return da(e,{...this.defaultConfig,icon:"\u2139\ufe0f",style:{...this.defaultConfig.style,background:"#3b82f6",color:"#fff"},...t})}static loading(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return da.loading(e,{...this.defaultConfig,style:{...this.defaultConfig.style,background:"#6b7280",color:"#fff"},...t})}static networkError(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u641c\u7d22",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const r={primaryScraping:"Primary Scraping",googleScholar:"Google Scholar",semantic:"Semantic Scholar"}[e]||e;let a=`${r} ${t}\u5931\u8d25`;return n.includes("timeout")||n.includes("\u8d85\u65f6")?a=`${r} \u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5`:n.includes("ENOTFOUND")||n.includes("\u7f51\u7edc")?a=`\u65e0\u6cd5\u8fde\u63a5\u5230 ${r}\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8bbe\u7f6e`:n.includes("429")?a=`${r} \u8bf7\u6c42\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5`:n.includes("403")?a=`${r} \u8bbf\u95ee\u88ab\u62d2\u7edd\uff0c\u53ef\u80fd\u662fAPI\u914d\u7f6e\u95ee\u9898`:n.includes("500")||n.includes("502")||n.includes("503")?a=`${r} \u670d\u52a1\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5`:n&&(a=`${r} ${t}\u5931\u8d25: ${n}`),this.error(a,{duration:8e3})}static apiError(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u641c\u7d22",n=arguments.length>2?arguments[2]:void 0;console.error(`${e} ${t} API\u5f02\u5e38:`,n);let r=n.message||n.toString();return r.includes("ERR_PROXY_CONNECTION_FAILED")?r="\u4ee3\u7406\u8fde\u63a5\u5931\u8d25":r.includes("ECONNREFUSED")?r="\u670d\u52a1\u8fde\u63a5\u88ab\u62d2\u7edd":r.includes("ETIMEDOUT")&&(r="\u8fde\u63a5\u8d85\u65f6"),this.networkError(e,t,r)}static suggestAlternativeSource(e){const t={primaryScraping:"Primary Scraping",googleScholar:"Google Scholar",semantic:"Semantic Scholar"}[e]||e;if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).filter(t=>t!==e).length>0)return this.info(`${t} \u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u5efa\u8bae\u5c1d\u8bd5\u5207\u6362\u5230\u5176\u4ed6\u6570\u636e\u6e90`,{duration:6e3})}static custom(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return da(e,{...this.defaultConfig,...t})}static dismiss(){da.dismiss()}static dismissById(e){da.dismiss(e)}}pu.defaultConfig={duration:4e3,position:"top-right",style:{borderRadius:"8px",background:"#333",color:"#fff",fontSize:"14px",fontFamily:"system-ui, -apple-system, sans-serif",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",maxWidth:"420px"}};const fu=pu,hu=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"relevance",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"primaryScraping";const o=Date.now();try{let s;switch(i){case"semantic":const r=Uo(a,"semantic");s=await ru(e,n,t,"paperId,title,abstract,authors,year,venue,citationCount,referenceCount,influentialCitationCount,fieldsOfStudy,isOpenAccess,openAccessPdf,tldr,journal",r),s.papers=s.papers.map(e=>({...e,source:"semantic"}));break;case"googleScholar":const o=Math.floor(t/n),l=Uo(a,"googleScholar");s=await ou(e,o,n,l);break;case"primaryScraping":const c=Math.floor(t/n),d=Uo(a,"primaryScraping");s=await uu(e,c,n,d);break;default:throw new Error(`\u4e0d\u652f\u6301\u7684\u6570\u636e\u6e90: ${i}`)}const l=Date.now()-o;let c=null;return s&&s.papers&&0!==s.papers.length||(c="empty"),To.logApiCall("searchPapers",i,!0,l,null,{query:e,offset:t,limit:n,sort:r},c),s}catch(s){const a=Date.now()-o;throw To.logApiCall("searchPapers",i,!1,a,s.message,{query:e,offset:t,limit:n,sort:r}),console.error(`\u641c\u7d22\u5931\u8d25 (${i}):`,s),fu.apiError(i,"\u641c\u7d22\u8bba\u6587",s),s}},gu=Ne`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xu=Le(Jn)`
  margin-right: 4px;
  animation: ${gu} 1s linear infinite;
`,mu=Le.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 更柔和低调的中性背景 */
  background: linear-gradient(135deg, 
    #fafbfc 0%, 
    #f5f6f7 25%, 
    #f0f1f2 50%, 
    #f5f6f7 75%, 
    #fafbfc 100%
  );
  background-attachment: fixed;
  background-size: 400% 400%;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  flex: 1 0 auto;
  scroll-behavior: smooth;
  
  /* 添加微妙的动画效果 */
  animation: backgroundShift 25s ease-in-out infinite;
  
  @keyframes backgroundShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,bu=Le.header`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 12px 0;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`,yu=Le.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vu=Le.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.8;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  img {
    height: 50px;
    width: auto;
    transition: inherit;
  }
`,wu=Le.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`,ku=Le.a`
  color: #6c757d;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  /* 添加微妙的边框 */
  border: 1px solid transparent;
  
  /* 悬停效果 */
  &:hover {
    color: #007acc;
    background-color: rgba(0, 122, 204, 0.08);
    border-color: rgba(0, 122, 204, 0.15);
    text-decoration: none;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 122, 204, 0.1);
  }
  
  /* 激活效果 */
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(0, 122, 204, 0.15);
  }
  
  /* 光波扫过效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  /* 邮件链接特殊样式 */
  &[href^="mailto:"] {
    &:hover {
      color: #28a745;
      background-color: rgba(40, 167, 69, 0.08);
      border-color: rgba(40, 167, 69, 0.15);
      box-shadow: 0 2px 8px rgba(40, 167, 69, 0.1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 8px;
  }
  
  @media (max-width: 600px) {
    padding: 4px 6px;
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    /* 在小屏幕上隐藏部分链接，只保留最重要的 */
    &.hide-mobile {
      display: none;
    }
  }
`,Su=Le.div`
  width: 1px;
  height: 20px;
  background-color: #e9ecef;
  margin: 0 4px;
  
  @media (max-width: 768px) {
    height: 16px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`,ju=Le.main`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  flex: 1;
  position: relative; /* 添加相对定位 */
  
  /* Set max-width based on viewport */
  @media (min-width: 768px) {
    max-width: 90%;
  }
  
  @media (min-width: 992px) {
    max-width: 85%;
  }
  
  @media (min-width: 1200px) {
    max-width: 1240px;
  }
  
  @media (min-width: 1600px) {
    max-width: 1440px;
  }
  
  @media (min-width: 1920px) {
    max-width: 1840px;
  }
`,Cu=Le.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible; /* 确保容器不会截断内容 */
  
  /* Container for all cards */
  .cards-scroll-container {
    width: 100%;
    margin-bottom: 16px;
    overflow: visible; /* 确保容器不会截断内容 */
    
    /* 确保所有卡片的分析区域水平滚动时保持一致 */
    .analysis-cards {
      scroll-behavior: smooth;
      /* 在非移动设备上保持水平滚动 */
      @media (min-width: 993px) {
        overflow-x: auto; /* 改为auto以支持水平滚动 */
        overflow-y: hidden; /* 禁止垂直滚动 */
        flex-wrap: nowrap;
        
        /* 隐藏滚动条但保留滚动功能 */
        &::-webkit-scrollbar {
          height: 0;
          width: 0;
          display: none;
        }
        
        /* Firefox 隐藏滚动条 */
        scrollbar-width: none;
        -ms-overflow-style: none;
        
        /* 添加触摸滚动支持 */
        touch-action: pan-x; /* 允许水平平移 */
        -webkit-overflow-scrolling: touch; /* 在iOS上启用惯性滚动 */
      }
    }
  }
  
  @media (max-width: 768px) {
    .cards-scroll-container {
      overflow: visible;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`,_u=Le.div`
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`,Eu=Le.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1; /* 占据左侧空间 */
  
  .switch-link {
    color: #007acc;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 3px;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(0, 122, 204, 0.1);
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
`,$u=Le.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0; /* 不压缩 */
  
  .result-count {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }
  
  .search-time {
    font-size: 12px;
    color: #999;
  }
  
  @media (max-width: 768px) {
    align-items: flex-start;
    
    .result-count {
      font-size: 13px;
    }
    
    .search-time {
      font-size: 11px;
    }
  }
`,zu=Le.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 24px 20px;
  width: 100%;
`,Tu=Le.div`
  max-width: 1200px;
  margin: 0 auto;
`,Pu=Le.p`
  margin: 0 0 8px 0;
  opacity: 0.8;
`,Au=Le.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
`,Iu=Le.a`
  color: #bdc3c7;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: white;
  }
`,Ou=Le.div`
  display: grid;
  grid-template-columns: 520px 1fr;
  gap: 12px;
  margin-bottom: 16px;
  padding: 0;
  background: transparent;
  border-radius: 8px;
  position: sticky;
  top: 0;
  z-index: 100;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  /* 多重过渡效果 */
  transition: 
    all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.5s ease,
    border-radius 0.3s ease;
  
  /* 微妙的初始变换效果 */
  transform: translateY(0) scale(1);
  
  /* 初始渐现动画 */
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  /* 当滚动时增强样式 */
  &.scrolled {
    /* 当吸顶时扩展到全宽度 */
    position: fixed;
    top: 10px; /* 添加10px的顶部边距 */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    max-width: 1240px; /* 与MainContent保持一致 */
    
    /* 在大屏幕上保持合适的宽度 */
    @media (min-width: 768px) {
      max-width: 90%;
    }
    
    @media (min-width: 992px) {
      max-width: 85%;
    }
    
    @media (min-width: 1200px) {
      max-width: 1240px;
    }
    
    @media (min-width: 1600px) {
      max-width: 1440px;
    }
    
    @media (min-width: 1920px) {
      max-width: 1840px;
    }
  }
  
  /* 定义关键帧动画 */
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-10px) scale(0.98);
      opacity: 0.8;
    }
    50% {
      transform: translateY(2px) scale(1.02);
    }
    100% {
      transform: translateY(0) scale(1.01);
      opacity: 1;
    }
  }
  
  /* 退出动画 */
  &:not(.scrolled) {
    animation: slideOutToTop 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes slideOutToTop {
    0% {
      transform: translateY(0) scale(1.01);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }
  
  /* 确保在所有设备上都能正确吸顶 */
  @supports (position: sticky) {
    position: sticky;
  }
  
  /* 移动设备优化 */
  @media (max-width: 768px) {
    margin-bottom: 12px;
    
    &.scrolled {
      max-width: calc(100% - 40px); /* 保持侧边距 */
      transform: translateY(0) scale(1); /* 移动设备上不进行缩放 */
    }
  }
`,Ru=Le.div`
  grid-column: 1;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  backdrop-filter: blur(10px);
  
  .scrolled & {
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.15),
      0 8px 32px rgba(0, 122, 204, 0.1);
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    border: 1px solid rgba(0, 122, 204, 0.15);
    animation: slideInFromTop 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  @media (max-width: 992px) {
    grid-column: 1;
    width: 100%;
  }
`,Nu=Le.div`
  grid-column: 2;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
  position: relative;
  
  .scrolled & {
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.15),
      0 8px 32px rgba(0, 122, 204, 0.1);
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    border: 1px solid rgba(0, 122, 204, 0.15);
    animation: slideInFromTop 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  @media (max-width: 992px) {
    grid-column: 1;
    width: 100%;
    gap: 6px;
    padding: 10px 12px;
  }
  
  /* 响应式隐藏策略 */
  .scroll-controls-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  /* 步进器和横向滚动条在1500px以下隐藏 */
  @media (max-width: 1500px) {
    .scroll-controls-container {
      display: none !important;
    }
  }
  
  @media (max-width: 900px) {
    .hide-on-medium {
      display: none !important;
    }
  }
  
  @media (max-width: 600px) {
    .hide-on-small {
      display: none !important;
    }
    gap: 4px;
    padding: 8px 10px;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
  
  /* 移除了悬停提示气泡 */
`,Lu=(Le.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-right: 8px;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 添加微妙的下划线效果 */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #1890ff, #40a9ff);
    border-radius: 1px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* 在父容器滚动时显示下划线 */
  .scrolled & {
    color: #1890ff;
    
    &::after {
      width: 100%;
    }
  }
`,Le.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  
  /* 1600px以下隐藏图标 */
  @media (max-width: 1600px) {
    svg {
      display: none;
    }
    gap: 4px;
  }
`),Du=Le.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  
  /* 响应式隐藏策略 - AI模型选择器优先隐藏 */
  @media (max-width: 1500px) {
    display: none;
  }
  
  /* 在更大屏幕上仍然显示，但调整flex */
  @media (min-width: 1501px) {
    flex: 0 0 auto;
    min-width: 200px;
  }
`,Mu=Le.label`
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 4px;
`,Fu=Le.select`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  outline: none;
  
  &:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.1);
  }
`,Bu=Le.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: ${e=>e.$active?"#e6f7ff":"white"};
  color: ${e=>e.$active?"#1890ff":"#666"};
  border: 1px solid ${e=>e.$active?"#1890ff":"#e0e0e0"};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* 响应式策略 - 渐进式隐藏非核心按钮 */
  @media (max-width: 1600px) {
    /* 1600px以下隐藏所有图标 */
    svg {
      display: none;
    }
    gap: 4px;
  }
  
  @media (max-width: 992px) {
    padding: 6px 8px;
    font-size: 13px;
    gap: 4px;
  }
  
  @media (max-width: 768px) {
    padding: 4px 6px;
    font-size: 12px;
    
    /* 在移动设备上只显示图标，隐藏文字 */
    span {
      display: none;
    }
    /* 移动设备上重新显示图标（因为隐藏了文字） */
    svg {
      display: block !important;
    }
  }
  
  /* 增强的过渡动画 */
  transition: 
    all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s ease,
    box-shadow 0.3s ease;
  
  /* 微妙的初始效果 */
  transform: translateY(0) scale(1);
  
  /* 添加微光效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }
  
  /* 添加悬停发光效果 */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      rgba(24, 144, 255, 0.2), 
      rgba(64, 169, 255, 0.2), 
      rgba(24, 144, 255, 0.2)
    );
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    background: ${e=>e.$active?"#e6f7ff":"#f0f8ff"};
    border-color: ${e=>(e.$active,"#1890ff")};
    color: ${e=>(e.$active,"#1890ff")};
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.25);
    
    /* 触发微光效果 */
    &::before {
      left: 100%;
    }
    
    /* 显示发光效果 */
    &::after {
      opacity: 1;
      animation: highlight-glow 2s ease-in-out infinite;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* 激活状态的额外效果 */
  ${e=>e.$active&&"\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n    \n    &:hover {\n      box-shadow: \n        0 0 0 2px rgba(24, 144, 255, 0.3),\n        0 4px 12px rgba(24, 144, 255, 0.3);\n    }\n  "}
  
  @keyframes highlight-glow {
    0%, 100% {
      background: linear-gradient(45deg, 
        rgba(24, 144, 255, 0.1), 
        rgba(64, 169, 255, 0.1), 
        rgba(24, 144, 255, 0.1)
      );
    }
    50% {
      background: linear-gradient(45deg, 
        rgba(24, 144, 255, 0.3), 
        rgba(64, 169, 255, 0.3), 
        rgba(24, 144, 255, 0.3)
      );
    }
  }
`,Uu=Le.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${e=>e.$cancel?"white":e.$loading?"#f1f8ff":"#1890ff"};
  color: ${e=>e.$cancel?"#ff4d4f":e.$loading?"#1890ff":"white"};
  border: 1px solid ${e=>e.$cancel?"#ff4d4f":"#1890ff"};
  border-radius: 4px;
  font-size: 14px;
  cursor: ${e=>e.$loading?"not-allowed":"pointer"};
  margin-left: ${e=>e.$cancel?"8px":"0"};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* 响应式文字显示策略 */
  .batch-icon-text {
    display: none;
  }
  
  /* 响应式优化 */
  @media (max-width: 1600px) {
    /* 1600px以下隐藏所有图标 */
    svg {
      display: none;
    }
    gap: 4px;
  }
  
  @media (max-width: 992px) {
    padding: 5px 10px;
    font-size: 13px;
    gap: 4px;
  }
  
  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;
    
    /* 在移动设备上简化文字 */
    .batch-text {
      display: none;
    }
    .batch-icon-text {
      display: inline;
    }
    /* 移动设备上重新显示图标（因为隐藏了文字） */
    svg {
      display: block !important;
    }
  }
  
  @media (max-width: 480px) {
    padding: 4px 6px;
    margin-left: ${e=>e.$cancel?"4px":"0"};
    
    /* 超小屏幕只显示图标 */
    .batch-icon-text {
      display: none;
    }
  }
  
  /* 增强的过渡动画 */
  transition: 
    all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s ease,
    box-shadow 0.3s ease;
  
  transform: translateY(0) scale(1);
  
  /* 添加脉动效果（加载时） */
  ${e=>e.$loading&&"\n    animation: pulse 2s ease-in-out infinite;\n    \n    @keyframes pulse {\n      0%, 100% {\n        box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.7);\n      }\n      50% {\n        box-shadow: 0 0 0 4px rgba(24, 144, 255, 0);\n      }\n    }\n  "}
  
  /* 添加波纹效果 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }
  
  &:active::after {
    width: 120%;
    height: 120%;
  }
  
  &:hover:not(:disabled) {
    background: ${e=>e.$cancel?"#fff1f0":e.$loading?"#f1f8ff":"#40a9ff"};
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* 取消按钮的特殊效果 */
  ${e=>e.$cancel&&"\n    &:hover {\n      box-shadow: 0 2px 8px rgba(255, 77, 79, 0.3);\n    }\n  "}
  
  svg {
    animation: ${e=>e.$loading?"spin 1s linear infinite":"none"};
    transition: transform 0.3s ease;
  }
  
  &:hover svg:not(.spinning) {
    transform: scale(1.1);
  }
  
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`,Wu=(Le.div`
  color: #666;
  font-size: 14px;
`,Le.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  opacity: 0;
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  padding: 20px;
  box-sizing: border-box;
  
  /* 防止背景滚动 */
  overflow: hidden;
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  /* 点击背景关闭弹窗 */
  &[data-overlay] {
    cursor: pointer;
  }
`),qu=Le.div`
  background: white;
  border-radius: 20px;
  padding: 0;
  max-width: ${e=>e.$isResearchReport?"1000px":"650px"};
  width: 100%;
  max-height: min(90vh, 800px);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform: translateY(30px) scale(0.95);
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: default;
  
  /* 防止内容溢出 */
  overflow: hidden;
  
  @keyframes slideUp {
    to {
      transform: translateY(0) scale(1);
    }
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    max-width: 95%;
    max-height: min(95vh, 700px);
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    max-width: 98%;
    max-height: min(98vh, 600px);
    border-radius: 12px;
  }
  
  /* 研究报告弹窗特殊样式 */
  ${e=>e.$isResearchReport&&"\n    @media (min-width: 1200px) {\n      max-width: 1100px;\n    }\n  "}
`,Ku=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 32px 20px 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 20px 20px 0 0;
  flex-shrink: 0;
  position: relative;
  
  /* 添加微妙的阴影 */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 24px 24px 16px 24px;
    border-radius: 16px 16px 0 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 20px 14px 20px;
    border-radius: 12px 12px 0 0;
  }
`,Hu=Le.h2`
  margin: 0;
  color: #2c3e50;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 22px;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    gap: 8px;
  }
`,Yu=Le.button`
  background: rgba(0, 0, 0, 0.05);
  border: none;
  font-size: 24px;
  color: #7f8c8d;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  /* 悬停效果 */
  &:hover {
    background: rgba(231, 76, 60, 0.1);
    color: #e74c3c;
    transform: scale(1.05);
  }
  
  /* 点击效果 */
  &:active {
    transform: scale(0.95);
  }
  
  /* 波纹效果 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(231, 76, 60, 0.2);
    transition: width 0.3s, height 0.3s;
    transform: translate(-50%, -50%);
  }
  
  &:active::before {
    width: 60px;
    height: 60px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
  }
`,Vu=Le.div`
  padding: 24px 32px 32px 32px;
  line-height: 1.7;
  color: #2c3e50;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  
  /* 自定义滚动条样式 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  
  /* Firefox 滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 20px 24px 24px 24px;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 16px 20px 20px 20px;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  }
`,Gu=Le.div`
  margin-bottom: 36px;
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  
  /* 微妙的内阴影 */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
  
  h3 {
    color: #2c3e50;
    margin-bottom: 18px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: -0.3px;
    
    /* 图标样式 */
    &::before {
      content: '';
      width: 4px;
      height: 20px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 2px;
    }
  }
  
  p {
    margin-bottom: 14px;
    color: #4a5568;
    line-height: 1.6;
    font-size: 15px;
  }
  
  ul {
    margin: 18px 0;
    padding-left: 24px;
    
    li {
      margin-bottom: 10px;
      color: #4a5568;
      line-height: 1.6;
      position: relative;
      
      &::marker {
        color: #3498db;
      }
      
      /* 自定义列表项样式 */
      &::before {
        content: '▸';
        color: #3498db;
        font-weight: bold;
        position: absolute;
        left: -18px;
      }
      
      list-style: none;
    }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 28px;
    padding: 20px;
    border-radius: 12px;
    
    h3 {
      font-size: 18px;
      margin-bottom: 16px;
    }
    
    p {
      font-size: 14px;
      margin-bottom: 12px;
    }
    
    ul {
      padding-left: 20px;
      margin: 16px 0;
      
      li {
        margin-bottom: 8px;
        
        &::before {
          left: -16px;
        }
      }
    }
  }
`,Qu=Le.button`
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-right: 16px;
  margin-bottom: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  
  /* 光泽效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(52, 152, 219, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(52, 152, 219, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
    margin-right: 12px;
    margin-bottom: 12px;
    border-radius: 10px;
  }
`,Xu=Le(Qu)`
  background: linear-gradient(135deg, #12b7f5 0%, #0e9de8 100%);
  
  &:hover {
    box-shadow: 0 12px 32px rgba(18, 183, 245, 0.4);
  }
  
  &:active {
    box-shadow: 0 6px 16px rgba(18, 183, 245, 0.3);
  }
`,Ju=Le(Qu)`
  background: linear-gradient(135deg, #07c160 0%, #06ad56 100%);
  
  &:hover {
    box-shadow: 0 12px 32px rgba(7, 193, 96, 0.4);
  }
  
  &:active {
    box-shadow: 0 6px 16px rgba(7, 193, 96, 0.3);
  }
`,Zu=Le.div`
  padding: 24px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
  
  /* 装饰性元素 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #007acc, #00a8e6);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    border-color: #007acc;
    background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 122, 204, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 122, 204, 0.12);
  }
  
  h3 {
    margin: 0 0 12px 0;
    color: #2c3e50;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.3px;
    
    /* 图标样式 */
    &::before {
      content: '🔍';
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(0, 122, 204, 0.1);
      border-radius: 12px;
    }
  }
  
  p {
    margin: 0;
    color: #5a6c7d;
    font-size: 15px;
    line-height: 1.6;
    padding-left: 52px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 16px;
    border-radius: 12px;
    
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
      gap: 10px;
      
      &::before {
        width: 36px;
        height: 36px;
        font-size: 20px;
        border-radius: 10px;
      }
    }
    
    p {
      font-size: 14px;
      padding-left: 46px;
    }
  }
`,ep=Le.div`
  line-height: 1.6;
  color: #2c3e50;
  font-size: 16px;
  max-width: none;
  
  /* 一级标题样式 */
  h1 {
    color: #1a202c;
    font-size: 26px;
    font-weight: 700;
    margin: 28px 0 20px 0;
    padding: 16px 0 12px 0;
    border-bottom: 4px solid #007acc;
    position: relative;
    letter-spacing: -0.5px;
    
    &:first-child {
      margin-top: 0;
    }
    
    /* 添加装饰性元素 */
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 二级标题样式 */
  h2 {
    color: #1a202c;
    font-size: 24px;
    font-weight: 700;
    margin: 26px 0 16px 0;
    padding: 14px 0 10px 0;
    position: relative;
    letter-spacing: -0.5px;
    
    &:first-child {
      margin-top: 0;
    }
    
    /* 主标题装饰 */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, #007acc 0%, rgba(0, 122, 204, 0.3) 70%, transparent 100%);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 三级标题样式 */
  h3 {
    color: #2d3748;
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0 12px 0;
    padding: 10px 0 6px 16px;
    border-left: 4px solid #007acc;
    background: linear-gradient(90deg, rgba(0, 122, 204, 0.05) 0%, transparent 100%);
    border-radius: 0 8px 8px 0;
    letter-spacing: -0.3px;
    position: relative;
    
    /* 左侧装饰 */
    &::before {
      content: '';
      position: absolute;
      left: -4px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(135deg, #007acc, #00a8e6);
      border-radius: 2px;
    }
  }
  
  /* 段落样式 - 减少间距 */
  p {
    margin: 12px 0;
    text-align: justify;
    line-height: 1.6;
    color: #4a5568;
    text-indent: 0;
    
    /* 首段特殊样式 */
    &:first-of-type {
      font-size: 17px;
      color: #2d3748;
      font-weight: 500;
    }
  }
  
  ul {
    margin: 14px 0;
    padding-left: 0;
    list-style: none;
    
    li {
      margin-bottom: 8px;
      line-height: 1.6;
      position: relative;
      padding-left: 28px;
      color: #4a5568;
      
      /* 自定义列表项图标 */
      &::before {
        content: '▶';
        position: absolute;
        left: 0;
        top: 0;
        color: #007acc;
        font-weight: bold;
        width: 20px;
        height: 20px;
        background: rgba(0, 122, 204, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        margin-top: 2px;
      }
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  strong {
    color: #1a202c;
    font-weight: 700;
    background: rgba(0, 122, 204, 0.08);
    padding: 2px 4px;
    border-radius: 4px;
  }
  
  /* 斜体文本样式 */
  em {
    font-style: italic;
    color: #4a5568;
  }
  
  /* 代码样式 */
  code {
    background: #f7fafc;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 14px;
    color: #e53e3e;
  }
  
  /* 引用样式 */
  blockquote {
    margin: 14px 0;
    padding: 12px 16px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-left: 4px solid #007acc;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #495057;
  }
  
  /* 响应式优化 */
  @media (max-width: 768px) {
    font-size: 15px;
    
    h1 {
      font-size: 22px;
      margin: 24px 0 16px 0;
      padding: 12px 0 8px 0;
      
      &::after {
        width: 80px;
        height: 3px;
      }
    }
    
    h2 {
      font-size: 20px;
      margin: 22px 0 14px 0;
      padding: 12px 0 8px 0;
      
      &::after {
        width: 60px;
        height: 2px;
      }
    }
    
    h3 {
      font-size: 18px;
      margin: 18px 0 10px 0;
      padding: 8px 0 4px 14px;
    }
    
    p {
      margin: 10px 0;
      
      &:first-of-type {
        font-size: 16px;
      }
    }
    
    ul {
      margin: 12px 0;
      
      li {
        margin-bottom: 6px;
        padding-left: 24px;
        
        &::before {
          width: 18px;
          height: 18px;
          font-size: 9px;
        }
      }
    }
    
    blockquote {
      margin: 12px 0;
      padding: 10px 14px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    
    h1 {
      font-size: 20px;
      margin: 20px 0 14px 0;
      
      &::after {
        width: 60px;
        height: 2px;
      }
    }
    
    h2 {
      font-size: 18px;
      margin: 18px 0 12px 0;
    }
    
    h3 {
      font-size: 16px;
      margin: 16px 0 10px 0;
      padding: 6px 0 2px 12px;
    }
    
    ul li {
      padding-left: 20px;
      
      &::before {
        width: 16px;
        height: 16px;
      }
    }
  }
`,tp=Le.div`
  margin-top: 32px;
  padding: 24px 0 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 0 0 16px 16px;
  position: relative;
  
  /* 顶部装饰线 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 122, 204, 0.2), transparent);
  }
  
  p {
    color: #6c757d;
    font-size: 14px;
    margin: 0;
    flex: 1;
    line-height: 1.5;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    margin-top: 28px;
    padding: 20px 0 0 0;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    
    p {
      text-align: center;
      font-size: 13px;
    }
  }
`,np=Le.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #007acc 0%, #005a9a 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0, 122, 204, 0.2);
  
  /* 光泽效果 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #005a9a 0%, #004080 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 122, 204, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #adb5bd 0%, #868e96 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &::before {
      display: none;
    }
  }
  
  /* 成功状态 */
  &.success {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    
    &:hover {
      background: linear-gradient(135deg, #218838 0%, #1e7e34 100%);
      box-shadow: 0 8px 24px rgba(40, 167, 69, 0.4);
    }
  }
  
  /* 点击波纹效果 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%);
    transition: width 0.4s, height 0.4s;
    pointer-events: none;
  }
  
  &:active::after {
    width: 140px;
    height: 140px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 13px;
    gap: 8px;
    border-radius: 10px;
    
    &::after {
      transition: width 0.3s, height 0.3s;
    }
    
    &:active::after {
      width: 100px;
      height: 100px;
    }
  }
`,rp=Le.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  
  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(0, 122, 204, 0.1);
    border-top: 4px solid #007acc;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    position: relative;
    
    /* 内部装饰圆圈 */
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 6px;
      right: 6px;
      bottom: 6px;
      border: 2px solid rgba(0, 168, 230, 0.2);
      border-top: 2px solid #00a8e6;
      border-radius: 50%;
      animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  p {
    margin-top: 24px;
    color: #6c757d;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.3px;
    
    /* 文字淡入淡出动画 */
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    padding: 50px 30px;
    
    .spinner {
      width: 42px;
      height: 42px;
      border-width: 3px;
      
      &::before {
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-width: 2px;
      }
    }
    
    p {
      margin-top: 20px;
      font-size: 14px;
    }
  }
`,ap=Le.div`
  display: inline-block;
  width: 3px;
  height: 22px;
  background: linear-gradient(135deg, #007acc, #00a8e6);
  margin-left: 4px;
  border-radius: 2px;
  animation: blink 1.2s ease-in-out infinite;
  
  @keyframes blink {
    0%, 45% { 
      opacity: 1; 
      transform: scaleY(1);
    }
    50%, 95% { 
      opacity: 0.3; 
      transform: scaleY(0.8);
    }
    100% { 
      opacity: 1; 
      transform: scaleY(1);
    }
  }
  
  @media (max-width: 768px) {
    width: 2px;
    height: 20px;
    margin-left: 3px;
  }
`,ip=()=>{const[e,n]=(0,t.useState)([]),[r,a]=(0,t.useState)(!1),i=(0,t.useCallback)(e=>{if(!e)return"";let t=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");return t=t.replace(/\*([^*]+)\*/g,"<strong>$1</strong>"),t=t.replace(/_([^_]+)_/g,"<em>$1</em>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),(0,es.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})},[]),[o,s]=(0,t.useState)(""),[l,c]=(0,t.useState)({}),[d,u]=(0,t.useState)({currentPage:1,totalResults:0,resultsPerPage:20}),[p,f]=(0,t.useState)(null),[h,g]=(0,t.useState)(!1),[x,m]=(0,t.useState)(!1),[b,y]=(0,t.useState)(!1),[v,w]=(0,t.useState)(!1),[k,S]=(0,t.useState)(!1),[j,C]=(0,t.useState)(!1),[_,E]=(0,t.useState)(""),[$,z]=(0,t.useState)(!1),[T,P]=(0,t.useState)(!0),[A,I]=(0,t.useState)(0),[O,R]=(0,t.useState)(null),[N,L]=(0,t.useState)(!1),[D,M]=(0,t.useState)(null),[F,B]=(0,t.useState)(null);(0,t.useEffect)(()=>{Zo(),Qo("app_start",{timestamp:(new Date).toISOString(),user_agent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`})},[]),(0,t.useEffect)(()=>{if(h||x||v||k||b){const e=window.scrollY;document.body.style.overflow="hidden",document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.width="100%"}else{const e=document.body.style.top;document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width="",e&&window.scrollTo(0,-1*parseInt(e||"0",10))}return()=>{document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.width=""}},[h,x,v,k,b]),(0,t.useEffect)(()=>{const e=e=>{"Escape"===e.key&&(b?y(!1):k?S(!1):v?w(!1):x?m(!1):h?g(!1):j&&C(!1)),e.ctrlKey&&e.shiftKey&&e.key};return(h||x||v||k||b||j)&&document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[h,x,v,k,b,j]);const[U,W]=(0,t.useState)(()=>{try{const e=localStorage.getItem("selectedDataSource");if(e&&Fo[e])return e}catch(e){console.warn("\u8bfb\u53d6localStorage\u6570\u636e\u6e90\u5931\u8d25:",e)}return"primaryScraping"}),q=(0,t.useCallback)(e=>{var t,r;qo("data_source_change",{from_source:t=U,to_source:r=e,event_category:"navigation",event_label:`${t}_to_${r}`});try{localStorage.setItem("selectedDataSource",e)}catch(a){console.warn("\u4fdd\u5b58\u6570\u636e\u6e90\u5230localStorage\u5931\u8d25:",a)}n([]),c({}),u({currentPage:1,totalResults:0,resultsPerPage:20}),f(null),de({}),pe(!1),he([]),xe(0),be(0),ve(""),ke(!1),je({}),_e(!1),$e(0),Te(0),Ae(!1),Le(0),Me(100),qe(!1),Ve(0),rt.current={query:"",filters:{},dataSource:""},W(e)},[U]),K=(0,t.useCallback)(async e=>{if(o.trim()&&e!==U){try{localStorage.setItem("selectedDataSource",e)}catch(i){console.warn("\u4fdd\u5b58\u6570\u636e\u6e90\u5230localStorage\u5931\u8d25:",i)}W(e),n([]),a(!0);try{var t,r;const a=Date.now(),i=20,s=0,l=await hu(o.trim(),s,i,"relevance",{},e),d=Date.now()-a;n(l.papers||[]),u({currentPage:1,totalResults:l.total||0,resultsPerPage:i}),f(d),c({}),Ko(o,e,(null===(t=l.papers)||void 0===t?void 0:t.length)||0,d,{}),Ho(e,o,(null===(r=l.papers)||void 0===r?void 0:r.length)||0,d,{})}catch(s){console.error("\u6570\u636e\u6e90\u5207\u6362\u641c\u7d22\u5931\u8d25:",s),Go("datasource_switch_search_error",s.message,`switching to ${e}`)}finally{a(!1)}}},[o,U]),H=(0,t.useCallback)(()=>Object.keys(Fo).filter(e=>e!==U&&!Fo[e].disabled),[U]),Y=(0,t.useCallback)(()=>{const e=["primaryScraping","googleScholar","semantic"].filter(e=>Fo[e]&&!Fo[e].disabled),t=e.findIndex(e=>e===U);if(-1!==t){return e[(t+1)%e.length]}return e[0]||U},[U]),[V]=(0,t.useState)(!0),[G,Q]=((0,t.useState)(!0)[1],(0,t.useState)(!1)),[X,J]=(0,t.useState)(!0),[Z,ee]=(0,t.useState)(!0),[te,ne]=(0,t.useState)(!0),[re,ae]=(0,t.useState)(!0),[ie,oe]=(0,t.useState)(!1),[se,le]=(0,t.useState)(!1),[ce,de]=(0,t.useState)({}),[ue,pe]=(0,t.useState)(!1),[fe,he]=(0,t.useState)([]),[ge,xe]=(0,t.useState)(0),[me,be]=(0,t.useState)(0),[ye,ve]=(0,t.useState)(""),[we,ke]=(0,t.useState)(!1),[Se,je]=(0,t.useState)({}),[Ce,_e]=(0,t.useState)(!1),[Ee,$e]=(0,t.useState)(0),[ze,Te]=(0,t.useState)(0),[Pe,Ae]=(0,t.useState)(!1),[Ie,Oe]=(0,t.useState)(Ao.GPT_4O_2024),Re=[{value:Ao.GPT_4O_2024,label:"GPT-4o"},{value:Ao.DEEPSEEK_V3,label:"DeepSeek"},{value:Ao.GPT_4O_MINI,label:"GPT-4o Mini"}],[Ne,Le]=(0,t.useState)(0),[De,Me]=(0,t.useState)(100),[Fe,Be]=(0,t.useState)(!0),Ue=((0,t.useRef)([]),(0,t.useRef)(null)),[We,qe]=(0,t.useState)(!1),[Ke,He]=(0,t.useState)(0),[Ye,Ve]=(0,t.useState)(0),[Ge,Qe]=(0,t.useState)(0),Xe=(0,t.useRef)(null),[Je,Ze]=(0,t.useState)(!1);(0,t.useEffect)(()=>{oe(G),le(G)},[G]),(0,t.useEffect)(()=>{Le(0),qe(!1),Ve(0),je({}),Ae(!1),setTimeout(()=>et(),300)},[e]),(0,t.useEffect)(()=>{const e=setTimeout(()=>et(),300);return()=>clearTimeout(e)},[ce,X,Z,te,re]),(0,t.useEffect)(()=>{let t=0,n=0,r=null;const a=a=>{if((a.shiftKey||Math.abs(a.deltaX)>Math.abs(a.deltaY))&&e.length>0){a.preventDefault();const e=Date.now(),i=Math.abs(a.deltaX)>Math.abs(a.deltaY)?a.deltaX:a.deltaY;n+=i,(e-t>20||Math.abs(n)>50)&&(r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{const e=document.querySelectorAll(".analysis-cards");if(e.length>0){let t=Ne+n;t=Math.max(0,Math.min(De,t)),Math.abs(t-Ne)>1&&(e.forEach(e=>{e.scrollLeft=t}),Le(t)),n=0,r=null}}),t=e)}};return window.addEventListener("wheel",a,{passive:!1}),()=>{window.removeEventListener("wheel",a),r&&cancelAnimationFrame(r)}},[e.length,Ne,De]),(0,t.useEffect)(()=>{et();const e=setTimeout(()=>et(),500);return()=>clearTimeout(e)},[]),(0,t.useEffect)(()=>{const e=()=>{et()};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,t.useEffect)(()=>{let e;const t=()=>{e&&clearTimeout(e),e=setTimeout(()=>{if(Xe.current){const e=Xe.current.getBoundingClientRect(),t=window.pageYOffset||document.documentElement.scrollTop;if(0===Ye&&!We&&e.height>0){const n=e.top+t;Ve(n)}if(Ye>0){const n=t>=Ye-10;n!==We&&qe(n),n&&e.height>0?Qe(window.innerHeight-e.height):Qe(0)}}},10)};return setTimeout(()=>t(),100),window.addEventListener("scroll",t,{passive:!0}),()=>{window.removeEventListener("scroll",t),e&&clearTimeout(e)}},[e.length,Ye,We]);const et=()=>{const e=document.querySelectorAll(".analysis-cards");if(e.length>0){let t=0;e.forEach((e,n)=>{const r=e.scrollWidth-e.clientWidth;t=Math.max(t,r)});const n=Math.max(t,100);return Me(n),n}return Me(100),100},tt=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=document.querySelectorAll(".analysis-cards");if(r.length>0){let n=Ne;"left"===e?n=Math.max(0,Ne-t):"right"===e?n=Math.min(De,Ne+t):"set"===e&&(n=Math.max(0,Math.min(De,t))),r.forEach(e=>{e.scrollLeft=n}),Le(n)}if(0!==n){const t=window.pageYOffset||document.documentElement.scrollTop,r=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight,i="up"===e?Math.max(0,t-n):Math.min(r,t+n);try{window.scroll({top:i,behavior:"smooth"}),setTimeout(()=>{Math.abs(window.pageYOffset-i)>1&&window.scrollTo({top:i,behavior:"smooth"})},100),setTimeout(()=>{Math.abs(window.pageYOffset-i)>1&&document.documentElement.scrollTo({top:i,behavior:"smooth"})},200)}catch(a){document.documentElement.scrollTop=i}}},nt=e=>{Math.abs(e-Ne)<2||(Le(e),requestAnimationFrame(()=>{const t=document.querySelectorAll(".analysis-cards");if(t.length>0){const n=5;t.forEach((t,r)=>{Math.abs(t.scrollLeft-e)>n&&(t.scrollLeft=e)})}}))},rt=(0,t.useRef)({query:"",filters:{},dataSource:""}),at=(0,t.useCallback)(async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];console.log("\u6267\u884c\u5b9e\u9645\u641c\u7d22:",{query:e,filters:t,page:r,shouldGenerateReport:i}),a(!0);const o=Date.now();try{var l,d;const a=20,p=(r-1)*a,h=await hu(e,p,a,t.sort||"relevance",t,U);n(h.papers||[]),u(e=>({currentPage:r,totalResults:h.total||0,resultsPerPage:a})),s(e),c(t);const g=Date.now()-o;if(f(g),1===r&&(rt.current={query:e.trim(),filters:{...t},dataSource:U},I(0)),Ko(e,U,(null===(l=h.papers)||void 0===l?void 0:l.length)||0,g,t),Ho(U,e,(null===(d=h.papers)||void 0===d?void 0:d.length)||0,g,t),1===r)window.scrollTo({top:0,behavior:"smooth"});else{const e=document.querySelector("[data-results-container]");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}i&&1===r&&h.papers&&h.papers.length>0&&T&&(console.log("Triggering research report generation for",h.papers.length,"papers"),setTimeout(()=>{I(e=>e+1)},1e3))}catch(p){console.error("\u641c\u7d22\u5931\u8d25:",p),Go("search_error",p.message,`query: ${e}, dataSource: ${U}`),n([]),u(e=>({...e,totalResults:0}))}finally{a(!1)}},[U,T]),it=(0,t.useCallback)(()=>{if(L(!1),D){const{query:e,filters:t,page:r,shouldGenerateReport:i}=D,o=t&&t._isAISearch;let l={...t};o&&delete l._isAISearch;if(JSON.stringify({query:e.trim(),filters:l,dataSource:U})===JSON.stringify({query:rt.current.query,filters:rt.current.filters,dataSource:rt.current.dataSource})){console.log("\u7528\u6237\u786e\u8ba4\u540e\u68c0\u6d4b\u5230\u91cd\u590d\u641c\u7d22\uff0c\u6267\u884c\u5047\u52a0\u8f7d"),a(!0);const e=500+300*Math.random();setTimeout(()=>{a(!1),window.scrollTo({top:0,behavior:"smooth"})},e)}else console.log("\u7528\u6237\u786e\u8ba4\uff0c\u6267\u884c\u771f\u5b9e\u641c\u7d22"),o?(console.log("AI\u641c\u7d22\uff1a\u6e05\u7a7a\u7ed3\u679c\u5e76\u89e6\u53d1AI\u641c\u7d22"),n([]),u(e=>({...e,totalResults:0})),R(null),I(0),rt.current={query:"",filters:{},dataSource:""},B({query:e,filters:l,page:r,shouldGenerateReport:i})):(console.log("\u666e\u901a\u641c\u7d22\uff1a\u5b8c\u5168\u6e05\u7a7a\u72b6\u6001\u5e76\u6267\u884c\u641c\u7d22"),n([]),u(e=>({...e,totalResults:0})),s(""),c({}),R(null),I(0),rt.current={query:"",filters:{},dataSource:""},at(e,t,r,i));M(null)}},[D,at,U]),ot=(0,t.useCallback)(()=>{L(!1),M(null)},[]),st=(0,t.useCallback)(async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(t.trim()){if(1===r&&R(null),1===r&&e.length>0){if(JSON.stringify({query:t.trim(),filters:n,dataSource:U})===JSON.stringify({query:rt.current.query,filters:rt.current.filters,dataSource:rt.current.dataSource})){console.log("\u68c0\u6d4b\u5230\u91cd\u590d\u641c\u7d22\uff0c\u81ea\u52a8\u6267\u884c\u5047\u52a0\u8f7d"),a(!0);const e=500+300*Math.random();return void setTimeout(()=>{a(!1),window.scrollTo({top:0,behavior:"smooth"})},e)}return console.log("\u9875\u9762\u5df2\u6709\u6570\u636e\uff0c\u663e\u793a\u786e\u8ba4\u5bf9\u8bdd\u6846"),M({query:t,filters:n,page:r,shouldGenerateReport:i}),void L(!0)}at(t,n,r,i)}},[U,e.length,at]),lt=(0,t.useCallback)(e=>{st(o,l,e,!1)},[o,l,st]),ct=(0,t.useCallback)(e=>{const t=(e=>e.externalIds?e.externalIds.DOI?`https://doi.org/${e.externalIds.DOI}`:e.externalIds.ArXiv?`https://arxiv.org/abs/${e.externalIds.ArXiv}`:e.externalIds.PubMed?`https://pubmed.ncbi.nlm.nih.gov/${e.externalIds.PubMed}/`:e.externalIds.ACL?`https://aclanthology.org/${e.externalIds.ACL}`:e.externalIds.DBLP?`https://dblp.org/rec/${e.externalIds.DBLP}`:null:null)(e);t?window.open(t,"_blank"):e.url&&window.open(e.url,"_blank")},[]),dt=(0,t.useCallback)(e=>{e.name&&st(`author:"${e.name}"`,{},1)},[st]),ut=Object.values(l).some(e=>""!==e&&"relevance"!==e),pt=e=>e<1e3?`${e}ms`:`${(e/1e3).toFixed(2)}s`;(0,t.useEffect)(()=>{},[]);const ft=(0,t.useCallback)((e,t,n)=>{de(r=>{const a={...r};return a[e]||(a[e]={}),a[e][t]=n,a}),xe(e=>e+1)},[]),ht=(0,t.useCallback)(async()=>{const t=[];if(X&&t.push("research_purpose"),Z&&t.push("research_methods"),te&&t.push("metrics"),re&&t.push("research_results"),0!==t.length){pe(!0),he(t),xe(0),be(e.length*t.length),ke(!1);try{const n=(t,n,r)=>{var a;if(we)return;const i=(null===(a=e[t])||void 0===a?void 0:a.title)||"";i&&ve(i),ft(r.paperId,r.dimension,r.result)};await No(e,t,n,Ie)}catch(n){console.error("\u6279\u91cf\u5206\u6790\u5931\u8d25:",n),alert(`\u6279\u91cf\u5206\u6790\u5931\u8d25: ${n.message}`)}finally{pe(!1),xe(0),be(0),ve("")}}else alert("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u5206\u6790\u7ef4\u5ea6")},[e,X,Z,te,re,we,ft,Ie]),gt=(0,t.useCallback)(()=>{0!==e.length?ue||ht():alert("\u6ca1\u6709\u8bba\u6587\u53ef\u4f9b\u5206\u6790")},[e.length,ue,ht]),xt=(0,t.useCallback)(async()=>{try{await navigator.clipboard.writeText(_);const e=_;E(e+"\n\n\u2705 \u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"),setTimeout(()=>{E(e)},2e3)}catch(e){console.error("\u590d\u5236\u5931\u8d25:",e);const t=document.createElement("textarea");t.value=_,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);const n=_;E(n+"\n\n\u2705 \u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"),setTimeout(()=>{E(n)},2e3)}},[_]),mt=(0,t.useCallback)(e=>{Ze(e)},[]),[bt,yt]=(0,t.useState)(!1),vt=(0,t.useCallback)(e=>{yt(e)},[]),wt=(0,t.useCallback)((e,t)=>{setTimeout(()=>{"medicine"===e?R("medicine"):O&&"medicine"===O||R(e)},200)},[O]),kt=(0,t.useCallback)(e=>{P(e)},[]),St=(0,t.useCallback)(e=>{e!==rt.current.query&&(rt.current={query:"",filters:{},dataSource:""})},[]),jt=(0,t.useCallback)(()=>{ke(!0),pe(!1)},[]),Ct=(0,t.useCallback)(async t=>{if(!Ce&&0!==e.length)if(t){const t=e.filter(e=>!Se[e.paperId]);if(0===t.length)return void Ae(!0);_e(!0),$e(e.length-t.length),Te(e.length),Ae(!0);try{const e=(e,t)=>{t.error?console.error(`\u7ffb\u8bd1\u5931\u8d25: ${t.translatedTitle}`):je(e=>({...e,[t.paperId]:{originalTitle:t.originalTitle,translatedTitle:t.translatedTitle,originalAbstract:t.originalAbstract,translatedAbstract:t.translatedAbstract,originalSnippet:t.originalSnippet,translatedSnippet:t.translatedSnippet,model:t.model}})),$e(e=>e+1)};await Mo(t,e,Ie)}catch(n){console.error("\u6279\u91cf\u7ffb\u8bd1\u5931\u8d25:",n)}finally{_e(!1)}}else Ae(!1)},[Ce,e,Ie,Se]),_t=(0,t.useCallback)((e,t)=>{je(n=>({...n,[e]:t}))},[]),Et=Object.keys(Se).filter(t=>e.some(e=>e.paperId===t)).length,$t=Et===e.length&&e.length>0,[zt,Tt]=(0,t.useState)(null),Pt=(0,t.useCallback)(e=>{if(!e)return;const t=document.querySelectorAll(".analysis-cards");if(0===t.length)return;const n=t[0],r=(e=>{const t=[];return G&&t.push("summary"),X&&t.push("purpose"),Z&&t.push("methods"),te&&t.push("metrics"),re&&t.push("results"),t.indexOf(e)})(e);if(-1===r)return;const a=362*r,i=n.clientWidth,o=n.scrollLeft;if(!(a>=o&&a+350<=o+i)){const e=Math.max(0,a-(i-350)/2),r=Math.max(0,n.scrollWidth-i),o=Math.min(e,r);t.forEach(e=>{e.scrollTo({left:o,behavior:"smooth"})}),Le(o)}},[G,X,Z,te,re]),At=(0,t.useCallback)(()=>{n([]),s(""),c({}),u({currentPage:1,totalResults:0,resultsPerPage:20}),f(null),a(!1),g(!1),m(!1),y(!1),w(!1),S(!1),C(!1),E(""),z(!1),Q(!1),J(!0),ee(!0),ne(!0),ae(!0),oe(!1),le(!1),de({}),pe(!1),he([]),xe(0),be(0),ve(""),ke(!1),je({}),_e(!1),$e(0),Te(0),Ae(!1),Le(0),Me(100),qe(!1),Ve(0),Ze(!1),window.scrollTo({top:0,behavior:"smooth"}),Qo("logo_click_reset",{timestamp:(new Date).toISOString(),action:"reset_to_initial_state"})},[]);return(0,es.jsxs)(mu,{children:[(0,es.jsx)(bu,{children:(0,es.jsxs)(yu,{children:[(0,es.jsx)(vu,{onClick:At,title:"\u70b9\u51fb\u56de\u5230\u9996\u5c4f",children:(0,es.jsx)("img",{src:"/logo.svg",alt:"AI\u79d1\u7814\u72d7\u667a\u80fd\u6587\u732e\u641c\u7d22",height:"50"})}),(0,es.jsxs)(wu,{children:[(0,es.jsx)(ku,{as:"button",onClick:()=>g(!0),title:"\u5546\u4e1a\u5408\u4f5c\u6d3d\u8c08",className:"hide-mobile",children:"\u5546\u4e1a\u5408\u4f5c"}),(0,es.jsx)(ku,{as:"button",onClick:()=>m(!0),title:"\u4f7f\u7528\u53cd\u9988\u548c\u5efa\u8bae",children:"\u4f7f\u7528\u53cd\u9988"}),(0,es.jsx)(ku,{as:"button",title:"\u4ea7\u54c1\u4f7f\u7528\u6587\u6863",className:"hide-mobile",style:{opacity:.5,cursor:"not-allowed"},disabled:!0,children:"\u4ea7\u54c1\u6587\u6863"}),(0,es.jsx)(Su,{className:"hide-mobile"}),(0,es.jsxs)(ku,{as:"button",onClick:()=>C(!0),title:"\u5ba2\u670d\u53cd\u9988",style:{background:"none",border:"none",color:"inherit",cursor:"pointer"},children:[(0,es.jsx)(Mn,{size:16,style:{marginRight:"6px"}}),"\u5ba2\u670d"]})]})]})}),(0,es.jsxs)(ju,{children:[!r&&0===e.length&&!o&&(0,es.jsx)(Ud,{visible:!0,searchInputFocused:Je,showFilters:bt,onSearch:st,loading:r,initialQuery:o,dataSource:U,onDataSourceChange:q,onFocusChange:mt,onFiltersChange:vt,onReportSwitchChange:kt,onQueryChange:St,onResearchDomainChange:wt,isHomePage:!0}),(0,es.jsx)(eu,{visible:!r&&0===e.length&&!o}),(r||e.length>0||o)&&(0,es.jsx)(Ys,{onSearch:st,onExecuteSearch:at,loading:r,initialQuery:o,dataSource:U,onDataSourceChange:q,onFocusChange:mt,onFiltersChange:vt,onReportSwitchChange:kt,onQueryChange:St,onResearchDomainChange:wt,isHomePage:!1,hasResults:e.length>0,continueAISearchParams:F,onContinueAISearchComplete:()=>B(null)}),!r&&o&&(0,es.jsxs)(_u,{children:[e.length>0?H().length>0?(0,es.jsxs)(Eu,{children:[(0,es.jsx)("span",{children:"\u641c\u7d22\u5230\u7684\u6587\u7ae0\u662f\u5426\u6ee1\u610f\uff1f\u53ef\u4ee5\u70b9\u51fb"}),(0,es.jsx)("span",{className:"switch-link",onClick:()=>{const e=Y();e&&e!==U&&K(e)},title:"\u5207\u6362\u5230\u5176\u4ed6\u6570\u636e\u6e90\u91cd\u65b0\u68c0\u7d22",children:"\u8fd9\u91cc"}),(0,es.jsx)("span",{children:"\u5207\u6362\u6570\u636e\u6e90"})]}):(0,es.jsx)("div",{style:{flex:1}}):(0,es.jsxs)(Eu,{children:[(0,es.jsxs)("span",{children:['\u6ca1\u6709\u627e\u5230\u5339\u914d "',o,'" \u7684\u8bba\u6587\u3002']}),ut&&(0,es.jsx)("span",{children:"\u53ef\u4ee5\u5c1d\u8bd5\u6e05\u9664\u7b5b\u9009\u6761\u4ef6\u6216"}),H().length>0?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)("span",{className:"switch-link",onClick:()=>{const e=Y();e&&e!==U&&K(e)},title:"\u5207\u6362\u5230\u5176\u4ed6\u6570\u636e\u6e90\u91cd\u65b0\u68c0\u7d22",children:"\u5207\u6362\u5230\u5176\u4ed6\u6570\u636e\u6e90"}),(0,es.jsx)("span",{children:"\u91cd\u65b0\u641c\u7d22\u3002"})]}):(0,es.jsx)("span",{children:"\u5c1d\u8bd5\u4f7f\u7528\u4e0d\u540c\u7684\u5173\u952e\u8bcd\u3002"})]}),(0,es.jsx)($u,{children:e.length>0?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)("div",{className:"result-count",children:`\u627e\u5230 ${d.totalResults.toLocaleString()} \u7bc7\u4e0e "${o}" \u76f8\u5173\u7684\u8bba\u6587`}),p&&(0,es.jsxs)("div",{className:"search-time",children:["\u641c\u7d22\u8017\u65f6: ",pt(p)]})]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)("div",{className:"result-count",children:"\u672a\u627e\u5230\u76f8\u5173\u8bba\u6587"}),p&&(0,es.jsxs)("div",{className:"search-time",children:["\u641c\u7d22\u8017\u65f6: ",pt(p)]})]})})]}),e.length>0&&!r&&(0,es.jsx)(vd,{papers:e,selectedModel:Ie,visible:!0,autoGenerate:T,triggerGenerate:A,onGenerateComplete:()=>console.log("Research report generation completed")}),e.length>0&&!r&&"medicine"===O&&(0,es.jsxs)("div",{style:{width:"100%",marginBottom:"20px",overflow:"hidden",borderRadius:"12px",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,es.jsxs)("picture",{children:[(0,es.jsx)("source",{media:"(min-width: 1200px)",srcSet:"/1440.png"}),(0,es.jsx)("source",{media:"(min-width: 768px) and (max-width: 1199px)",srcSet:"/1024.png"}),(0,es.jsx)("source",{media:"(max-width: 767px)",srcSet:"/375.png"}),(0,es.jsx)("img",{src:"/1440.png",alt:"\u533b\u5b66\u76f8\u5173\u4fe1\u606f\u5c55\u793a",style:{width:"100%",height:"auto",display:"block",borderRadius:"12px"},onError:e=>{e.target.style.display="none";const t=e.target.parentNode.querySelector(".content-fallback");t&&(t.style.display="flex")},onLoad:e=>{const t=e.target.parentNode.querySelector(".content-fallback");t&&(t.style.display="none")}})]}),(0,es.jsx)("div",{className:"content-fallback",style:{display:"none",position:"absolute",top:0,left:0,width:"100%",height:"180px",padding:"16px",alignItems:"center",justifyContent:"center",color:"#666",fontSize:"14px",fontStyle:"italic",background:"linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",borderRadius:"12px"},children:"\ud83c\udfe5 \u533b\u5b66\u76f8\u5173\u4fe1\u606f\u5c55\u793a - \u68c0\u6d4b\u5230\u533b\u5b66\u9886\u57df\u641c\u7d22"})]}),e.length>0&&!r&&(0,es.jsxs)(Ou,{ref:Xe,className:We?"scrolled":"",children:[(0,es.jsx)(Ru,{children:(0,es.jsxs)(Lu,{children:[(0,es.jsxs)(Mu,{htmlFor:"batch-translation",children:[(0,es.jsx)(Dn,{size:14}),"\u6279\u91cf\u7ffb\u8bd1:"]}),(0,es.jsx)(Bu,{$active:Ce||Pe&&Et>0,onClick:()=>Ct(!Pe),disabled:Ce,style:{marginRight:"8px",opacity:Ce?.7:1,cursor:Ce?"not-allowed":"pointer"},children:Ce?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(xu,{size:12}),"\u7ffb\u8bd1\u4e2d..."]}):Pe?"\u8fd8\u539f":$t?"\u663e\u793a\u7ffb\u8bd1":Et>0?"\u7ee7\u7eed\u7ffb\u8bd1":"\u5f00\u59cb\u7ffb\u8bd1"}),(Ce||Et>0)&&(0,es.jsx)("span",{style:{fontSize:"12px",color:"#666",marginLeft:"8px",whiteSpace:"nowrap"},children:Ce?`${Ee}/${ze}`:`\u5df2\u7ffb\u8bd1 ${Et}`})]})}),(0,es.jsxs)(Nu,{className:"right-toolbar-section",children:[(0,es.jsxs)(Du,{style:{marginRight:"16px"},children:[(0,es.jsxs)(Mu,{htmlFor:"ai-model-select",children:[(0,es.jsx)(Tn,{size:14}),"AI\u6a21\u578b:"]}),(0,es.jsx)(Fu,{id:"ai-model-select",value:Ie,onChange:e=>Oe(e.target.value),disabled:ue,children:Re.map(e=>(0,es.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,es.jsxs)(Bu,{$active:G,onClick:()=>Q(!G),onMouseEnter:()=>{Tt("summary"),setTimeout(()=>Pt("summary"),100)},onMouseLeave:()=>Tt(null),title:"Summary",style:{display:"flex"},className:"hide-on-small",children:[(0,es.jsx)(hn,{size:14}),(0,es.jsx)("span",{children:"Summary"})]}),(0,es.jsxs)(Bu,{$active:X,onClick:()=>J(!X),onMouseEnter:()=>{Tt("purpose"),setTimeout(()=>Pt("purpose"),100)},onMouseLeave:()=>Tt(null),title:"\u7814\u7a76\u76ee\u7684",children:[(0,es.jsx)(vn,{size:14}),(0,es.jsx)("span",{children:"\u7814\u7a76\u76ee\u7684"})]}),(0,es.jsxs)(Bu,{$active:Z,onClick:()=>ee(!Z),onMouseEnter:()=>{Tt("methods"),setTimeout(()=>Pt("methods"),100)},onMouseLeave:()=>Tt(null),title:"\u7814\u7a76\u65b9\u6cd5",children:[(0,es.jsx)(un,{size:14}),(0,es.jsx)("span",{children:"\u7814\u7a76\u65b9\u6cd5"})]}),(0,es.jsxs)(Bu,{$active:te,onClick:()=>ne(!te),onMouseEnter:()=>{Tt("metrics"),setTimeout(()=>Pt("metrics"),100)},onMouseLeave:()=>Tt(null),title:"\u6d4b\u91cf\u6307\u6807",className:"hide-on-medium",children:[(0,es.jsx)(xn,{size:14}),(0,es.jsx)("span",{children:"\u6d4b\u91cf\u6307\u6807"})]}),(0,es.jsxs)(Bu,{$active:re,onClick:()=>ae(!re),onMouseEnter:()=>{Tt("results"),setTimeout(()=>Pt("results"),100)},onMouseLeave:()=>Tt(null),title:"\u7814\u7a76\u7ed3\u679c",children:[(0,es.jsx)(kn,{size:14}),(0,es.jsx)("span",{children:"\u7814\u7a76\u7ed3\u679c"})]}),(0,es.jsx)("div",{style:{marginLeft:"auto"}}),(X||Z||te||re)&&(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Uu,{onClick:gt,$loading:ue,$cancel:!1,disabled:ue,title:ue?"\u5206\u6790\u4e2d...":"\u6279\u91cf\u5206\u6790",children:ue?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Jn,{size:16}),(0,es.jsx)("span",{className:"batch-text",children:"\u5206\u6790\u4e2d..."}),(0,es.jsx)("span",{className:"batch-icon-text"})]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(pr,{size:16}),(0,es.jsx)("span",{className:"batch-text",children:"\u6279\u91cf\u5206\u6790"}),(0,es.jsx)("span",{className:"batch-icon-text"})]})}),ue&&(0,es.jsxs)(Uu,{onClick:jt,$loading:!1,$cancel:!0,title:"\u53d6\u6d88\u5206\u6790",children:[(0,es.jsx)("span",{className:"batch-text",children:"\u53d6\u6d88\u5206\u6790"}),(0,es.jsx)("span",{className:"batch-icon-text",children:"\u53d6\u6d88"})]})]})]})]}),(0,es.jsxs)(Cu,{"data-results-container":!0,ref:Ue,children:[(0,es.jsxs)("div",{className:"cards-scroll-container",children:[r&&(0,es.jsx)(ec,{count:5}),!r&&e.length>0&&(0,es.jsx)(es.Fragment,{children:e.map((e,t)=>{var n,r,a,i;return(0,es.jsx)(Ul,{paper:e,onPaperClick:ct,onAuthorClick:dt,showInfo:V,showAbstract:ie,showSnippet:se,showPurpose:X,showMethods:Z,showMetrics:te,showResults:re,globalControls:!0,onAnalysisComplete:ft,purposeAnalysis:null===(n=ce[e.paperId])||void 0===n?void 0:n.research_purpose,methodsAnalysis:null===(r=ce[e.paperId])||void 0===r?void 0:r.research_methods,metricsAnalysis:null===(a=ce[e.paperId])||void 0===a?void 0:a.metrics,resultsAnalysis:null===(i=ce[e.paperId])||void 0===i?void 0:i.research_results,selectedModel:Ie,batchAnalyzing:ue,batchDimensions:fe,onScroll:nt,hoveredCardType:zt,translationData:Pe?Se[e.paperId]:null,onTranslationComplete:_t,batchTranslating:Ce},`paper-${e.paperId||t}-${t}`)})})]}),!r&&e.length>0&&(0,es.jsx)(oc,{currentPage:d.currentPage,totalResults:d.totalResults,resultsPerPage:d.resultsPerPage,onPageChange:lt})]})]}),(0,es.jsx)(Ad,{visible:e.length>0&&!r&&De>0,onStepLeft:()=>tt("left",350),onStepRight:()=>tt("right",350),canStepLeft:Ne>0,canStepRight:Ne<De,disabled:!1,isFloating:We}),h&&(0,es.jsx)(Wu,{"data-overlay":!0,onClick:e=>{e.target===e.currentTarget&&g(!1)},children:(0,es.jsxs)(qu,{onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(Ku,{children:[(0,es.jsxs)(Hu,{children:[(0,es.jsx)(cr,{size:24}),"\u5546\u4e1a\u5408\u4f5c"]}),(0,es.jsx)(Yu,{onClick:()=>g(!1),children:(0,es.jsx)(ur,{size:20})})]}),(0,es.jsxs)(Vu,{children:[(0,es.jsxs)(Gu,{children:[(0,es.jsxs)("h3",{children:[(0,es.jsx)(pr,{size:18}),"\u5b66\u672f\u7c7b\u5e7f\u544a\u6295\u653e"]}),(0,es.jsx)("p",{children:"\u6211\u4eec\u4e3a\u5b66\u672f\u673a\u6784\u3001\u671f\u520a\u51fa\u7248\u793e\u3001\u79d1\u7814\u5de5\u5177\u7b49\u63d0\u4f9b\u7cbe\u51c6\u7684\u5e7f\u544a\u6295\u653e\u670d\u52a1\uff1a"}),(0,es.jsxs)("ul",{children:[(0,es.jsx)("li",{children:"\u7cbe\u51c6\u7528\u6237\u7fa4\u4f53\uff1a\u4e3b\u8981\u9762\u5411\u79d1\u7814\u5de5\u4f5c\u8005\u3001\u5b66\u8005\u3001\u7814\u7a76\u751f\u7b49\u5b66\u672f\u7528\u6237"}),(0,es.jsx)("li",{children:"\u591a\u6837\u5316\u5c55\u793a\u5f62\u5f0f\uff1a\u6a2a\u5e45\u5e7f\u544a\u3001\u5185\u5bb9\u63a8\u8350\u3001\u8d5e\u52a9\u641c\u7d22\u7ed3\u679c\u7b49"}),(0,es.jsx)("li",{children:"\u9ad8\u8f6c\u5316\u7387\uff1a\u7528\u6237\u5177\u6709\u660e\u786e\u7684\u5b66\u672f\u9700\u6c42\uff0c\u8f6c\u5316\u610f\u5411\u5f3a\u70c8"}),(0,es.jsx)("li",{children:"\u6570\u636e\u900f\u660e\uff1a\u63d0\u4f9b\u8be6\u7ec6\u7684\u6295\u653e\u62a5\u544a\u548c\u6548\u679c\u5206\u6790"})]})]}),(0,es.jsxs)(Gu,{children:[(0,es.jsxs)("h3",{children:[(0,es.jsx)(un,{size:18}),"\u5b9a\u5236\u5f00\u53d1\u670d\u52a1"]}),(0,es.jsx)("p",{children:"\u57fa\u4e8e\u6211\u4eec\u7684\u6280\u672f\u79ef\u7d2f\uff0c\u4e3a\u60a8\u63d0\u4f9b\u4e13\u4e1a\u7684\u5b66\u672f\u641c\u7d22\u89e3\u51b3\u65b9\u6848\uff1a"}),(0,es.jsxs)("ul",{children:[(0,es.jsx)("li",{children:"\u4f01\u4e1a\u7ea7\u5b66\u672f\u641c\u7d22\u7cfb\u7edf\u5b9a\u5236\u5f00\u53d1"}),(0,es.jsx)("li",{children:"AI\u667a\u80fd\u6587\u732e\u5206\u6790\u5de5\u5177\u96c6\u6210"}),(0,es.jsx)("li",{children:"\u591a\u8bed\u8a00\u7ffb\u8bd1\u548c\u672c\u5730\u5316\u670d\u52a1"}),(0,es.jsx)("li",{children:"API\u63a5\u53e3\u5b9a\u5236\u548c\u7cfb\u7edf\u96c6\u6210"}),(0,es.jsx)("li",{children:"\u7528\u6237\u754c\u9762\u8bbe\u8ba1\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316"})]})]}),(0,es.jsxs)(Gu,{children:[(0,es.jsxs)("h3",{children:[(0,es.jsx)(Dn,{size:18}),"\u5b66\u672fAPI\u6570\u636e\u4f9b\u7ed9"]}),(0,es.jsx)("p",{children:"\u9ad8\u8d28\u91cf\u7684\u5b66\u672f\u6570\u636eAPI\u670d\u52a1\uff0c\u4e3a\u60a8\u7684\u5e94\u7528\u63d0\u4f9b\u5f3a\u5927\u652f\u6491\uff1a"}),(0,es.jsxs)("ul",{children:[(0,es.jsx)("li",{children:"\u6d77\u91cf\u6587\u732e\u6570\u636e\uff1a\u8986\u76d6\u591a\u4e2a\u4e3b\u6d41\u5b66\u672f\u6570\u636e\u5e93"}),(0,es.jsx)("li",{children:"\u5b9e\u65f6\u66f4\u65b0\uff1a\u786e\u4fdd\u6570\u636e\u7684\u65f6\u6548\u6027\u548c\u51c6\u786e\u6027"}),(0,es.jsx)("li",{children:"\u9ad8\u5e76\u53d1\u652f\u6301\uff1a\u7a33\u5b9a\u53ef\u9760\u7684\u670d\u52a1\u4fdd\u969c"}),(0,es.jsx)("li",{children:"\u7075\u6d3b\u5b9a\u4ef7\uff1a\u6839\u636e\u8c03\u7528\u91cf\u63d0\u4f9b\u591a\u79cd\u5957\u9910\u9009\u62e9"}),(0,es.jsx)("li",{children:"\u6280\u672f\u652f\u6301\uff1a\u4e13\u4e1a\u56e2\u961f\u63d0\u4f9b\u5168\u65b9\u4f4d\u6280\u672f\u4fdd\u969c"})]})]}),(0,es.jsxs)("div",{style:{textAlign:"center",marginTop:"32px"},children:[(0,es.jsxs)("div",{style:{padding:"16px",background:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[(0,es.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"8px"},children:[(0,es.jsx)(qn,{size:16,color:"#3498db"}),(0,es.jsx)("span",{style:{fontWeight:"600",color:"#2c3e50"},children:"\u5546\u52a1\u90ae\u7bb1"})]}),(0,es.jsx)("div",{style:{fontSize:"16px",color:"#2c3e50",fontFamily:"monospace",fontWeight:"500"},children:"3639163969@qq.com"})]}),(0,es.jsx)("p",{style:{marginTop:"16px",color:"#7f8c8d",fontSize:"14px"},children:"\u671f\u5f85\u4e0e\u60a8\u7684\u5408\u4f5c\uff0c\u5171\u540c\u63a8\u52a8\u5b66\u672f\u7814\u7a76\u7684\u53d1\u5c55\uff01"})]})]})]})}),x&&(0,es.jsx)(Wu,{"data-overlay":!0,onClick:e=>{e.target===e.currentTarget&&m(!1)},children:(0,es.jsxs)(qu,{onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(Ku,{children:[(0,es.jsxs)(Hu,{children:[(0,es.jsx)(Yn,{size:24}),"\u4f7f\u7528\u53cd\u9988"]}),(0,es.jsx)(Yu,{onClick:()=>m(!1),children:(0,es.jsx)(ur,{size:20})})]}),(0,es.jsx)(Vu,{children:(0,es.jsxs)(Gu,{children:[(0,es.jsx)("p",{style:{fontSize:"16px",marginBottom:"24px"},children:"\u611f\u8c22\u60a8\u4f7f\u7528AI\u79d1\u7814\u72d7\uff01\u60a8\u7684\u53cd\u9988\u5bf9\u6211\u4eec\u975e\u5e38\u5b9d\u8d35\uff0c\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8054\u7cfb\u6211\u4eec\uff1a"}),(0,es.jsxs)("div",{style:{textAlign:"center"},children:[(0,es.jsxs)(Xu,{as:"a",href:"https://qm.qq.com/q/vuEoLmAoZW",target:"_blank",rel:"noopener noreferrer",children:[(0,es.jsx)("span",{children:"\ud83d\udcf1"}),"\u52a0\u5165QQ\u7fa4\uff1aAI\u79d1\u7814\u72d7\u5c0f\u7a9d"]}),(0,es.jsxs)("div",{style:{margin:"20px 0"},children:[(0,es.jsxs)(Qu,{style:{marginRight:"8px"},children:[(0,es.jsx)("span",{children:"\ud83d\udc27"}),"QQ: 3639163969"]}),(0,es.jsxs)(Ju,{children:[(0,es.jsx)("span",{children:"\ud83d\udcac"}),"\u5fae\u4fe1: BigFe5"]})]}),(0,es.jsxs)("div",{style:{padding:"12px 16px",background:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",display:"inline-flex",alignItems:"center",gap:"8px"},children:[(0,es.jsx)(qn,{size:16,color:"#3498db"}),(0,es.jsx)("span",{style:{fontWeight:"500",color:"#2c3e50"},children:"\u53cd\u9988\u90ae\u7bb1\uff1a"}),(0,es.jsx)("span",{style:{fontFamily:"monospace",fontWeight:"500",color:"#2c3e50"},children:"3639163969@qq.com"})]})]}),(0,es.jsxs)("div",{style:{marginTop:"32px",padding:"20px",background:"#f8f9fa",borderRadius:"8px"},children:[(0,es.jsx)("h4",{style:{color:"#2c3e50",marginBottom:"12px"},children:"\u6211\u4eec\u7279\u522b\u5173\u6ce8\uff1a"}),(0,es.jsxs)("ul",{style:{margin:"0",paddingLeft:"20px"},children:[(0,es.jsx)("li",{children:"\u529f\u80fd\u5efa\u8bae\u548c\u6539\u8fdb\u610f\u89c1"}),(0,es.jsx)("li",{children:"\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898"}),(0,es.jsx)("li",{children:"\u754c\u9762\u4f53\u9a8c\u548c\u64cd\u4f5c\u5efa\u8bae"}),(0,es.jsx)("li",{children:"\u65b0\u529f\u80fd\u9700\u6c42\u548c\u521b\u610f\u60f3\u6cd5"})]})]})]})})]})}),v&&(0,es.jsx)(Wu,{"data-overlay":!0,onClick:e=>{e.target===e.currentTarget&&w(!1)},children:(0,es.jsxs)(qu,{onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(Ku,{children:[(0,es.jsxs)(Hu,{children:[(0,es.jsx)(pr,{size:24}),"\u6279\u91cf\u5206\u6790\u9009\u62e9"]}),(0,es.jsx)(Yu,{onClick:()=>w(!1),children:(0,es.jsx)(ur,{size:20})})]}),(0,es.jsx)(Vu,{children:(0,es.jsxs)(Zu,{onClick:ht,children:[(0,es.jsxs)("h3",{children:[(0,es.jsx)(un,{size:20}),"\u6279\u91cf\u5206\u6790\u6240\u6709\u8bba\u6587"]}),(0,es.jsx)("p",{children:"\u5bf9\u5f53\u524d\u9875\u9762\u663e\u793a\u7684\u6240\u6709\u8bba\u6587\u8fdb\u884cAI\u5206\u6790\uff0c\u83b7\u53d6\u7814\u7a76\u76ee\u7684\u3001\u7814\u7a76\u65b9\u6cd5\u3001\u6d4b\u91cf\u6307\u6807\u548c\u7814\u7a76\u7ed3\u679c\u7b49\u7ef4\u5ea6\u7684\u5206\u6790\u7ed3\u679c\u3002"}),(0,es.jsx)("div",{style:{marginTop:"12px",padding:"8px 12px",background:"#f0f9ff",borderRadius:"6px",fontSize:"13px",color:"#0369a1",border:"1px solid #e0f2fe"},children:'\ud83d\udca1 \u63d0\u793a\uff1a\u5982\u9700\u751f\u6210\u7814\u7a76\u62a5\u544a\uff0c\u8bf7\u4f7f\u7528\u9875\u9762\u4e0a\u65b9\u7684"\u7814\u7a76\u62a5\u544a\u751f\u6210\u5668"\u5361\u7247'})]})})]})}),k&&(0,es.jsx)(Wu,{"data-overlay":!0,onClick:e=>{e.target===e.currentTarget&&S(!1)},children:(0,es.jsxs)(qu,{$isResearchReport:!0,onClick:e=>e.stopPropagation(),children:[(0,es.jsxs)(Ku,{children:[(0,es.jsxs)(Hu,{children:[(0,es.jsx)(sr,{size:24}),"\u7814\u7a76\u62a5\u544a"]}),(0,es.jsx)(Yu,{onClick:()=>S(!1),children:(0,es.jsx)(ur,{size:20})})]}),(0,es.jsx)(Vu,{children:$&&!_?(0,es.jsxs)(rp,{children:[(0,es.jsx)("div",{className:"spinner"}),(0,es.jsx)("p",{children:"\u6b63\u5728\u751f\u6210\u7814\u7a76\u62a5\u544a\uff0c\u8bf7\u7a0d\u5019..."})]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsxs)(ep,{children:[_.split("\n").map((e,t)=>e.startsWith("# ")?(0,es.jsx)("h1",{children:i(e.substring(2))},t):e.startsWith("## ")?(0,es.jsx)("h2",{children:i(e.substring(3))},t):e.startsWith("### ")?(0,es.jsx)("h3",{children:i(e.substring(4))},t):e.startsWith("- ")||e.startsWith("* ")?(0,es.jsx)("li",{children:i(e.substring(2))},t):""===e.trim()?(0,es.jsx)("br",{},t):""!==e.trim()?(0,es.jsx)("p",{children:i(e)},t):null),$&&(0,es.jsx)(ap,{})]}),_&&(0,es.jsxs)(tp,{children:[(0,es.jsx)("p",{children:"\u5982\u679c\u9700\u8981\u4fdd\u5b58\u6b64\u62a5\u544a\uff0c\u8bf7\u4f7f\u7528\u53f3\u4fa7\u7684\u590d\u5236\u6309\u94ae\u3002"}),(0,es.jsxs)(np,{onClick:xt,disabled:!_||$,children:[(0,es.jsx)(zn,{size:16}),"\u590d\u5236\u62a5\u544a"]})]})]})})]})}),b&&(0,es.jsx)(Fc,{onClose:()=>y(!1)}),(0,es.jsx)(zu,{children:(0,es.jsxs)(Tu,{children:[(0,es.jsx)(Pu,{children:"AIsciresgo \u5b66\u672f\u641c\u7d22 - \u9ad8\u6548\u83b7\u53d6\u7814\u7a76\u6587\u732e"}),(0,es.jsxs)(Pu,{children:["\xa9 ",(new Date).getFullYear()," AIsciresgo. \u4fdd\u7559\u6240\u6709\u6743\u5229\u3002"]}),(0,es.jsxs)(Au,{children:[(0,es.jsx)(Iu,{href:"https://www.semanticscholar.org/terms",target:"_blank",children:"\u4f7f\u7528\u6761\u6b3e"}),(0,es.jsx)(Iu,{href:"https://www.semanticscholar.org/privacy",target:"_blank",children:"\u9690\u79c1\u653f\u7b56"})]})]})}),j&&(0,es.jsx)(ad,{onClose:()=>C(!1)}),(0,es.jsx)(ca,{position:"top-right",toastOptions:{duration:4e3,style:{borderRadius:"8px",background:"#333",color:"#fff",fontSize:"14px",fontFamily:"system-ui, -apple-system, sans-serif",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",maxWidth:"420px"},success:{style:{background:"#10b981",color:"#fff"},iconTheme:{primary:"#10b981",secondary:"#fff"}},error:{duration:6e3,style:{background:"#ef4444",color:"#fff"},iconTheme:{primary:"#ef4444",secondary:"#fff"}}}}),(0,es.jsx)(Ed,{isOpen:N,title:"\u91cd\u65b0\u641c\u7d22",message:"\u6e05\u7a7a\u5f53\u524d\u9875\u9762\u6570\u636e\u91cd\u65b0\u641c\u7d22\uff1f",confirmText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onConfirm:it,onCancel:ot})]})},op=Le.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    animation: backgroundFloat 20s ease-in-out infinite;
  }

  @keyframes backgroundFloat {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-5%, -5%) rotate(1deg); }
    50% { transform: translate(0, -10%) rotate(0deg); }
    75% { transform: translate(5%, -5%) rotate(-1deg); }
  }
`,sp=Le.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  padding: 50px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 480px) {
    padding: 40px 30px;
    border-radius: 16px;
  }
`,lp=Le.div`
  margin-bottom: 40px;
`,cp=Le.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
`,dp=Le.h1`
  color: #2c3e50;
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
`,up=Le.p`
  color: #7f8c8d;
  margin: 0;
  font-size: 16px;
`,pp=Le.form`
  margin-bottom: 30px;
`,fp=Le.div`
  position: relative;
  margin-bottom: 25px;
  text-align: left;
`,hp=Le.label`
  display: block;
  color: #555;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`,gp=Le.div`
  position: relative;
`,xp=Le.input`
  width: 100%;
  padding: 16px 20px;
  padding-right: ${e=>e.$hasIcon?"50px":"20px"};
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,mp=Le.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #adb5bd;
  transition: color 0.3s ease;

  ${xp}:focus + & {
    color: #667eea;
  }
`,bp=Le.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    color: #495057;
    background: rgba(0, 0, 0, 0.05);
  }
`,yp=Le.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,vp=Le.div`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
`,wp=Le.div`
  background: linear-gradient(135deg, #51cf66, #40c057);
  color: white;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(81, 207, 102, 0.2);
`,kp=Le.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  margin-top: 20px;
  text-align: left;
  font-size: 13px;
  color: #6c757d;
  line-height: 1.5;

  .note-title {
    font-weight: 600;
    color: #495057;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  ul {
    margin: 8px 0 0 0;
    padding-left: 16px;
  }

  li {
    margin: 4px 0;
  }
`,Sp=e=>{let{onLoginSuccess:n}=e;const[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)(""),[f,h]=(0,t.useState)(!1),g=["admin2024","scholar_admin","management_2024","secure_access_key"];return(0,es.jsx)(op,{children:(0,es.jsxs)(sp,{children:[(0,es.jsxs)(lp,{children:[(0,es.jsx)(cp,{children:(0,es.jsx)(rr,{size:40,color:"white"})}),(0,es.jsx)(dp,{children:"\u7ba1\u7406\u540e\u53f0"}),(0,es.jsx)(up,{children:"\u8bf7\u8f93\u5165\u60a8\u7684\u8d26\u6237\u4fe1\u606f"})]}),c&&(0,es.jsx)(vp,{children:c}),u&&(0,es.jsx)(wp,{children:u}),(0,es.jsxs)(pp,{onSubmit:async e=>{e.preventDefault(),h(!0),d(""),p("");try{if(await new Promise(e=>setTimeout(e,1e3)),g.includes(i)){const e=(e=>`admin_${e}_${Date.now()}_${Math.random().toString(36).substring(2,15)}`)("admin"),t={username:"admin",role:"\u7cfb\u7edf\u7ba1\u7406\u5458",loginTime:(new Date).toISOString(),permissions:["key_management","system_settings","logs_access"]};sessionStorage.setItem("admin_token",e),sessionStorage.setItem("admin_user_data",JSON.stringify(t)),n(t)}else d("\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5")}catch(c){d("\u767b\u5f55\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5")}finally{h(!1)}},children:[(0,es.jsxs)(fp,{children:[(0,es.jsx)(hp,{children:"\u7528\u6237\u540d"}),(0,es.jsxs)(gp,{children:[(0,es.jsx)(xp,{type:"text",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",value:r,onChange:e=>a(e.target.value),disabled:f,$hasIcon:!0,style:{paddingLeft:"50px"}}),(0,es.jsx)(mp,{children:(0,es.jsx)(cr,{size:18})})]})]}),(0,es.jsxs)(fp,{children:[(0,es.jsx)(hp,{children:"\u5bc6\u7801"}),(0,es.jsxs)(gp,{children:[(0,es.jsx)(xp,{type:s?"text":"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:i,onChange:e=>o(e.target.value),disabled:f,$hasIcon:!0,style:{paddingLeft:"50px"}}),(0,es.jsx)(mp,{children:(0,es.jsx)(Un,{size:18})}),(0,es.jsx)(bp,{type:"button",onClick:()=>l(!s),disabled:f,children:s?(0,es.jsx)(Rn,{size:18}):(0,es.jsx)(Nn,{size:18})})]})]}),(0,es.jsx)(yp,{type:"submit",disabled:!r.trim()||!i.trim()||f,children:f?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(lr,{size:16}),"\u9a8c\u8bc1\u4e2d..."]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(lr,{size:16}),"\u767b\u5f55"]})})]}),(0,es.jsxs)(kp,{children:[(0,es.jsxs)("div",{className:"note-title",children:[(0,es.jsx)(rr,{size:14}),"\u5b89\u5168\u8bf4\u660e"]}),(0,es.jsxs)("ul",{children:[(0,es.jsx)("li",{children:"\u4f1a\u8bdd\u6709\u6548\u671f\uff1a8\u5c0f\u65f6"}),(0,es.jsx)("li",{children:"\u81ea\u52a8\u6e05\u7406\u8fc7\u671f\u8ba4\u8bc1"}),(0,es.jsx)("li",{children:"\u4ec5\u5f53\u524d\u6d4f\u89c8\u5668\u4f1a\u8bdd\u6709\u6548"}),(0,es.jsx)("li",{children:"\u6d4b\u8bd5\u8d26\u6237\uff1aadmin/admin123"})]})]})]})})},jp=Le.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  overflow: hidden;
  height: calc(100vh - 200px); /* 适应屏幕高度，减去顶部导航和边距 */
  display: flex;
  flex-direction: column;
`,Cp=Le.div`
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  flex-shrink: 0; /* 防止头部被压缩 */
`,_p=Le.h3`
  margin: 0;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
`,Ep=Le.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,$p=Le.button`
  background: ${e=>e.$danger?"#dc3545":"#667eea"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$danger?"#c82333":"#5a6fd8"};
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`,zp=Le.div`
  background: #f8d7da;
  color: #721c24;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .error-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .close-button {
    background: none;
    border: none;
    color: #721c24;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background: rgba(114, 28, 36, 0.1);
    }
  }
`,Tp=Le.div`
  padding: 20px 24px;
  background: #f8f9fa;
  border-bottom: 1px solid #e5e5e5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  flex-shrink: 0; /* 防止统计区域被压缩 */
`,Pp=Le.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  text-align: center;
`,Ap=Le.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.$color||"#2c3e50"};
  margin-bottom: 4px;
`,Ip=Le.div`
  font-size: 12px;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Op=Le.div`
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 0; /* 防止过滤器被压缩 */
`,Rp=Le.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #495057;
  font-weight: 500;
`,Np=Le.select`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Lp=Le.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  min-width: 200px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Dp=Le.div`
  flex: 1; /* 占用剩余空间 */
  overflow-y: auto;
  min-height: 0; /* 允许容器缩小 */
  
  /* 自定义滚动条 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`,Mp=Le.table`
  width: 100%;
  border-collapse: collapse;
`,Fp=Le.th`
  background: #f8f9fa;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #e5e5e5;
  position: sticky;
  top: 0;
  z-index: 10;
`,Bp=Le.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`,Up=Le.td`
  padding: 12px 16px;
  font-size: 13px;
  color: #495057;
  vertical-align: top;
`,Wp=Le.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${e=>e.$success?"#d4edda":"#f8d7da"};
  color: ${e=>e.$success?"#155724":"#721c24"};
`,qp=Le.div`
  color: #dc3545;
  font-size: 12px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: help;
`,Kp=Le.div`
  text-align: center;
  padding: 60px 20px;
  color: #6c757d;
  font-size: 16px;
`,Hp=()=>{const[e,n]=(0,t.useState)([]),[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)("");(0,t.useEffect)(()=>{if(f){const e=setTimeout(()=>{h("")},8e3);return()=>clearTimeout(e)}},[f]);const g=async()=>{p(!0);try{const e=await To.getServerLogs();if(n(e),h(""),e.length>0){const t=e.map(e=>e.ip).filter(e=>e);cc.preloadIPs(t)}}catch(f){console.error("\u52a0\u8f7d\u65e5\u5fd7\u5931\u8d25:",f),n([]),h(f.message||"\u52a0\u8f7d\u65e5\u5fd7\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}finally{p(!1)}};(0,t.useEffect)(()=>{g()},[]);const x=e.filter(e=>{if(r&&e.dataSource!==r)return!1;if("success"===i&&!e.success)return!1;if("failed"===i&&e.success)return!1;if("empty"===i&&"empty"!==e.resultStatus)return!1;if(s){var t,n,a;const r=s.toLowerCase(),i=null===(t=e.api)||void 0===t?void 0:t.toLowerCase().includes(r),o=null===(n=e.errorMessage)||void 0===n?void 0:n.toLowerCase().includes(r),l=JSON.stringify(e.extra||{}).toLowerCase().includes(r),c=null===(a=e.ip)||void 0===a?void 0:a.toLowerCase().includes(r);if(!i&&!o&&!l&&!c)return!1}return!0}),m=To.getStatistics(x),b=[...new Set(e.map(e=>e.dataSource))].sort(),y=e=>({primaryScraping:"Primary Scraping",semanticScholar:"Semantic Scholar",googleScholar:"Google Scholar",ai:"AI\u670d\u52a1"}[e]||e);return(0,es.jsxs)(jp,{children:[(0,es.jsxs)(Cp,{children:[(0,es.jsxs)(_p,{children:[(0,es.jsx)(Fn,{size:20}),"API\u8c03\u7528\u65e5\u5fd7"]}),(0,es.jsxs)(Ep,{children:[(0,es.jsxs)($p,{onClick:()=>{g()},disabled:u,children:[(0,es.jsx)(Jn,{size:16}),u?"\u52a0\u8f7d\u4e2d...":"\u5237\u65b0"]}),(0,es.jsxs)($p,{onClick:()=>{To.exportLogsAsJSON(e)},children:[(0,es.jsx)(An,{size:16}),"\u5bfc\u51faJSON"]}),(0,es.jsxs)($p,{onClick:()=>{To.exportLogsAsCSV(e)},children:[(0,es.jsx)(An,{size:16}),"\u5bfc\u51faCSV"]}),(0,es.jsxs)($p,{onClick:()=>d(!c),children:[c?(0,es.jsx)(Rn,{size:16}):(0,es.jsx)(Nn,{size:16}),c?"\u9690\u85cf\u8be6\u60c5":"\u663e\u793a\u8be6\u60c5"]}),(0,es.jsxs)($p,{$danger:!0,onClick:async()=>{if(!window.confirm("\u26a0\ufe0f \u5371\u9669\u64cd\u4f5c\uff1a\u786e\u5b9a\u8981\u6e05\u7a7a\u6240\u6709\u65e5\u5fd7\u5417\uff1f\u6b64\u64cd\u4f5c\u4e0d\u53ef\u64a4\u9500\u3002"))return;if("DELETE_ALL_LOGS"===window.prompt('\ud83d\udd10 \u5b89\u5168\u9a8c\u8bc1\uff1a\u8bf7\u8f93\u5165\u786e\u8ba4\u7801 "DELETE_ALL_LOGS" \u6765\u786e\u8ba4\u6e05\u7a7a\u64cd\u4f5c\uff1a\n\n\u6ce8\u610f\uff1a\u6b64\u64cd\u4f5c\u5c06\u6c38\u4e45\u5220\u9664\u6240\u6709API\u8c03\u7528\u65e5\u5fd7\uff0c\u65e0\u6cd5\u6062\u590d\uff01')){if(window.confirm("\ud83d\udea8 \u6700\u7ec8\u786e\u8ba4\uff1a\u60a8\u5373\u5c06\u5220\u9664\u6240\u6709\u65e5\u5fd7\u6570\u636e\uff0c\u786e\u5b9a\u7ee7\u7eed\u5417\uff1f")){p(!0),h("");try{console.warn("\ud83d\uddd1\ufe0f \u7ba1\u7406\u5458\u6267\u884c\u65e5\u5fd7\u6e05\u7a7a\u64cd\u4f5c:",(new Date).toISOString());await To.clearServerLogs()?(console.log("\u2705 \u65e5\u5fd7\u6e05\u7a7a\u6210\u529f"),await g(),alert("\u2705 \u65e5\u5fd7\u5df2\u6e05\u7a7a\u5b8c\u6210")):h("\u6e05\u7a7a\u65e5\u5fd7\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}catch(f){console.error("\u6e05\u7a7a\u65e5\u5fd7\u5931\u8d25:",f),h(f.message||"\u6e05\u7a7a\u65e5\u5fd7\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")}finally{p(!1)}}}else alert("\u274c \u786e\u8ba4\u7801\u9519\u8bef\uff0c\u64cd\u4f5c\u5df2\u53d6\u6d88\u3002")},disabled:u,children:[(0,es.jsx)(or,{size:16}),"\u6e05\u7a7a\u65e5\u5fd7"]})]})]}),f&&(0,es.jsxs)(zp,{children:[(0,es.jsxs)("div",{className:"error-content",children:[(0,es.jsx)(pn,{size:16,className:"alert-icon"}),(0,es.jsx)("span",{children:f})]}),(0,es.jsx)("button",{className:"close-button",onClick:()=>h(""),title:"\u5173\u95ed\u9519\u8bef\u63d0\u793a",children:(0,es.jsx)(pn,{size:16})})]}),(0,es.jsxs)(Tp,{children:[(0,es.jsxs)(Pp,{children:[(0,es.jsx)(Ap,{children:m.totalRequests||0}),(0,es.jsx)(Ip,{children:"\u603b\u8bf7\u6c42\u6570"})]}),(0,es.jsxs)(Pp,{children:[(0,es.jsx)(Ap,{$color:"#28a745",children:m.successfulRequests||0}),(0,es.jsx)(Ip,{children:"\u6210\u529f\u8bf7\u6c42"})]}),(0,es.jsxs)(Pp,{children:[(0,es.jsx)(Ap,{$color:"#dc3545",children:m.failedRequests||0}),(0,es.jsx)(Ip,{children:"\u5931\u8d25\u8bf7\u6c42"})]}),(0,es.jsxs)(Pp,{children:[(0,es.jsx)(Ap,{$color:"#ffc107",children:m.emptyRequests||0}),(0,es.jsx)(Ip,{children:"\u7a7a\u54cd\u5e94"})]}),(0,es.jsxs)(Pp,{children:[(0,es.jsxs)(Ap,{children:[m.averageResponseTime||0,"ms"]}),(0,es.jsx)(Ip,{children:"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4"})]}),(0,es.jsxs)(Pp,{children:[(0,es.jsxs)(Ap,{$color:"#17a2b8",children:[m.totalRequests?(m.successfulRequests/m.totalRequests*100).toFixed(1):0,"%"]}),(0,es.jsx)(Ip,{children:"\u6210\u529f\u7387"})]})]}),(0,es.jsxs)(Op,{children:[(0,es.jsxs)(Rp,{children:["\u6570\u636e\u6e90\u7b5b\u9009:",(0,es.jsxs)(Np,{value:r,onChange:e=>a(e.target.value),children:[(0,es.jsx)("option",{value:"",children:"\u5168\u90e8\u6570\u636e\u6e90"}),b.map(e=>(0,es.jsx)("option",{value:e,children:y(e)},e))]})]}),(0,es.jsxs)(Rp,{children:["\u72b6\u6001\u7b5b\u9009:",(0,es.jsxs)(Np,{value:i,onChange:e=>o(e.target.value),children:[(0,es.jsx)("option",{value:"",children:"\u5168\u90e8\u72b6\u6001"}),(0,es.jsx)("option",{value:"success",children:"\u6210\u529f"}),(0,es.jsx)("option",{value:"failed",children:"\u5931\u8d25"}),(0,es.jsx)("option",{value:"empty",children:"\u7a7a\u54cd\u5e94"})]})]}),(0,es.jsx)(Lp,{placeholder:"\u641c\u7d22API\u6216\u9519\u8bef\u4fe1\u606f...",value:s,onChange:e=>l(e.target.value)}),(0,es.jsxs)("span",{style:{color:"#666",fontSize:"14px"},children:["\u663e\u793a ",x.length," / ",e.length," \u6761\u8bb0\u5f55"]})]}),(0,es.jsxs)(Dp,{children:[(0,es.jsxs)(Mp,{children:[(0,es.jsx)("thead",{children:(0,es.jsxs)("tr",{children:[(0,es.jsx)(Fp,{children:"\u65f6\u95f4"}),(0,es.jsx)(Fp,{children:"\u5730\u7406\u4f4d\u7f6e"}),(0,es.jsx)(Fp,{children:"\u6570\u636e\u6e90"}),(0,es.jsx)(Fp,{children:"API"}),(0,es.jsx)(Fp,{children:"\u72b6\u6001"}),(0,es.jsx)(Fp,{children:"\u54cd\u5e94\u65f6\u95f4"}),c&&(0,es.jsx)(Fp,{children:"\u9519\u8bef\u4fe1\u606f"}),c&&(0,es.jsx)(Fp,{children:"\u989d\u5916\u4fe1\u606f"})]})}),(0,es.jsx)("tbody",{children:x.slice().reverse().map((e,t)=>(0,es.jsxs)(Bp,{children:[(0,es.jsxs)(Up,{children:[(0,es.jsx)("div",{children:e.date}),(0,es.jsx)("div",{style:{fontSize:"11px",color:"#6c757d"},children:e.time})]}),(0,es.jsx)(Up,{children:(0,es.jsx)(xc,{ip:e.ip})}),(0,es.jsx)(Up,{children:y(e.dataSource)}),(0,es.jsx)(Up,{children:e.api}),(0,es.jsx)(Up,{children:"empty"===e.resultStatus?(0,es.jsx)(Wp,{style:{background:"#fff3cd",color:"#856404"},children:"\u7a7a\u54cd\u5e94"}):(0,es.jsx)(Wp,{$success:e.success,children:e.success?"\u6210\u529f":"\u5931\u8d25"})}),(0,es.jsxs)(Up,{children:[e.responseTime,"ms"]}),c&&(0,es.jsx)(Up,{children:e.errorMessage&&(0,es.jsx)(qp,{title:e.errorMessage,children:e.errorMessage})}),c&&(0,es.jsx)(Up,{children:(0,es.jsx)("div",{style:{fontSize:"11px",color:"#6c757d"},children:Object.entries(e.additionalInfo||{}).map(e=>{let[t,n]=e;return(0,es.jsxs)("div",{children:[(0,es.jsxs)("strong",{children:[t,":"]})," ",String(n).substring(0,50),String(n).length>50?"...":""]},t)})})})]},t))})]}),0===x.length&&(0,es.jsx)(Kp,{children:u?"\u6b63\u5728\u52a0\u8f7d\u65e5\u5fd7...":"\u6682\u65e0\u65e5\u5fd7\u8bb0\u5f55"})]})]})},Yp=Le.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`,Vp=Le.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 32px;
`,Gp=Le.div`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.gradient||"linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)"};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`,Qp=Le.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,Xp=Le.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${e=>e.color||"linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
`,Jp=Le.h3`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Zp=Le.div`
  font-size: 36px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1;
`,ef=Le.div`
  font-size: 14px;
  color: ${e=>e.positive?"#10b981":"#ef4444"};
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>e.positive?"#10b981":"#ef4444"};
  }
`,tf=Le.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  grid-column: span 2;

  @media (max-width: 1024px) {
    grid-column: span 1;
  }
`,nf=Le.h3`
  margin: 0 0 24px 0;
  color: #1e293b;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
`,rf=Le.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
`,af=Le.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:hover {
    background: #f8fafc;
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 12px;
  }
`,of=Le.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${e=>e.color||"#f1f5f9"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.color?"white":"#64748b"};
  box-shadow: ${e=>e.color?"0 2px 8px rgba(59, 130, 246, 0.3)":"none"};
`,sf=Le.div`
  flex: 1;
`,lf=Le.div`
  color: #1e293b;
  font-size: 15px;
  margin-bottom: 4px;
  font-weight: 500;
`,cf=Le.div`
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
`,df=Le.div`
  height: 240px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 16px;
  border: 2px dashed #e2e8f0;
  text-align: center;
  gap: 12px;

  .chart-icon {
    font-size: 48px;
    opacity: 0.5;
  }

  .chart-text {
    font-weight: 600;
    line-height: 1.5;
  }
`,uf=Le.div`
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 40px;
  color: white;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  }

  .welcome-title {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .welcome-subtitle {
    font-size: 16px;
    opacity: 0.9;
    line-height: 1.5;
  }
`,pf=()=>{const[e,n]=(0,t.useState)({totalRequests:0,successRate:0,avgResponseTime:0,activeUsers:0}),[r,a]=(0,t.useState)([]);return(0,t.useEffect)(()=>{(async()=>{n({totalRequests:12847,successRate:98.5,avgResponseTime:245,activeUsers:156})})(),(async()=>{a([{id:1,type:"success",icon:un,color:"linear-gradient(135deg, #10b981 0%, #059669 100%)",text:"\u7528\u6237 admin \u767b\u5f55\u7cfb\u7edf",time:"2\u5206\u949f\u524d"},{id:2,type:"info",icon:Pn,color:"linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",text:"\u65e5\u5fd7\u6e05\u7406\u4efb\u52a1\u5b8c\u6210",time:"15\u5206\u949f\u524d"},{id:3,type:"warning",icon:pn,color:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",text:"API\u54cd\u5e94\u65f6\u95f4\u8f83\u6162",time:"1\u5c0f\u65f6\u524d"},{id:4,type:"success",icon:nr,color:"linear-gradient(135deg, #10b981 0%, #059669 100%)",text:"\u7cfb\u7edf\u5065\u5eb7\u68c0\u67e5\u901a\u8fc7",time:"2\u5c0f\u65f6\u524d"},{id:5,type:"info",icon:dr,color:"linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",text:"\u65b0\u7528\u6237\u6ce8\u518c",time:"3\u5c0f\u65f6\u524d"}])})()},[]),(0,es.jsxs)("div",{children:[(0,es.jsxs)(uf,{children:[(0,es.jsx)("div",{className:"welcome-title",children:"\u6b22\u8fce\u56de\u6765\uff0c\u7ba1\u7406\u5458\uff01"}),(0,es.jsxs)("div",{className:"welcome-subtitle",children:["\u7cfb\u7edf\u8fd0\u884c\u6b63\u5e38\uff0c\u4eca\u65e5\u5df2\u5904\u7406 ",e.totalRequests.toLocaleString()," \u4e2a\u8bf7\u6c42\uff0c\u6210\u529f\u7387\u4fdd\u6301\u5728 ",e.successRate,"%"]})]}),(0,es.jsxs)(Vp,{children:[(0,es.jsx)(Gp,{gradient:"linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)",children:(0,es.jsxs)(Qp,{children:[(0,es.jsxs)("div",{children:[(0,es.jsx)(Jp,{children:"\u603b\u8bf7\u6c42\u6570"}),(0,es.jsx)(Zp,{children:e.totalRequests.toLocaleString()}),(0,es.jsxs)(ef,{positive:!0,children:[(0,es.jsx)(sr,{size:16}),"+12.5% \u4e0e\u6628\u65e5\u5bf9\u6bd4"]})]}),(0,es.jsx)(Xp,{color:"linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",children:(0,es.jsx)(un,{size:24})})]})}),(0,es.jsx)(Gp,{gradient:"linear-gradient(90deg, #10b981 0%, #059669 100%)",children:(0,es.jsxs)(Qp,{children:[(0,es.jsxs)("div",{children:[(0,es.jsx)(Jp,{children:"\u6210\u529f\u7387"}),(0,es.jsxs)(Zp,{children:[e.successRate,"%"]}),(0,es.jsxs)(ef,{positive:!0,children:[(0,es.jsx)(sr,{size:16}),"+0.8% \u4e0e\u6628\u65e5\u5bf9\u6bd4"]})]}),(0,es.jsx)(Xp,{color:"linear-gradient(135deg, #10b981 0%, #059669 100%)",children:(0,es.jsx)(mn,{size:24})})]})}),(0,es.jsx)(Gp,{gradient:"linear-gradient(90deg, #06b6d4 0%, #0891b2 100%)",children:(0,es.jsxs)(Qp,{children:[(0,es.jsxs)("div",{children:[(0,es.jsx)(Jp,{children:"\u5e73\u5747\u54cd\u5e94\u65f6\u95f4"}),(0,es.jsxs)(Zp,{children:[e.avgResponseTime,"ms"]}),(0,es.jsxs)(ef,{children:[(0,es.jsx)($n,{size:16}),"-15ms \u4e0e\u6628\u65e5\u5bf9\u6bd4"]})]}),(0,es.jsx)(Xp,{color:"linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",children:(0,es.jsx)($n,{size:24})})]})}),(0,es.jsx)(Gp,{gradient:"linear-gradient(90deg, #f59e0b 0%, #d97706 100%)",children:(0,es.jsxs)(Qp,{children:[(0,es.jsxs)("div",{children:[(0,es.jsx)(Jp,{children:"\u6d3b\u8dc3\u7528\u6237"}),(0,es.jsx)(Zp,{children:e.activeUsers}),(0,es.jsxs)(ef,{positive:!0,children:[(0,es.jsx)(sr,{size:16}),"+23 \u4e0e\u6628\u65e5\u5bf9\u6bd4"]})]}),(0,es.jsx)(Xp,{color:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",children:(0,es.jsx)(dr,{size:24})})]})})]}),(0,es.jsxs)(Yp,{children:[(0,es.jsxs)(tf,{children:[(0,es.jsxs)(nf,{children:[(0,es.jsx)(mn,{size:20}),"\u8bf7\u6c42\u8d8b\u52bf\u5206\u6790"]}),(0,es.jsxs)(df,{children:[(0,es.jsx)("div",{className:"chart-icon",children:"\ud83d\udcca"}),(0,es.jsxs)("div",{className:"chart-text",children:["\u56fe\u8868\u529f\u80fd\u5f00\u53d1\u4e2d...",(0,es.jsx)("br",{}),"\u5c06\u663e\u793a\u8fc7\u53bb7\u5929\u7684API\u8bf7\u6c42\u8d8b\u52bf\u5206\u6790"]})]})]}),(0,es.jsxs)(rf,{children:[(0,es.jsxs)(nf,{children:[(0,es.jsx)(un,{size:20}),"\u7cfb\u7edf\u6d3b\u52a8"]}),r.map(e=>{const t=e.icon;return(0,es.jsxs)(af,{children:[(0,es.jsx)(of,{color:e.color,children:(0,es.jsx)(t,{size:18})}),(0,es.jsxs)(sf,{children:[(0,es.jsx)(lf,{children:e.text}),(0,es.jsx)(cf,{children:e.time})]})]},e.id)})]})]})]})},ff=Le.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  overflow: hidden;
`,hf=Le.div`
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
`,gf=Le.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`,xf=Le.button`
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #218838;
    transform: translateY(-1px);
  }
`,mf=Le.table`
  width: 100%;
  border-collapse: collapse;
`,bf=Le.th`
  background: #f8f9fa;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #e5e5e5;
`,yf=Le.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`,vf=Le.td`
  padding: 16px;
  color: #495057;
`,wf=Le.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,kf=Le.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
`,Sf=Le.div`
  .username {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 2px;
  }
  
  .email {
    font-size: 13px;
    color: #6c757d;
  }
`,jf=Le.span`
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: ${e=>{switch(e.role){case"\u8d85\u7ea7\u7ba1\u7406\u5458":return"#dc3545";case"\u7ba1\u7406\u5458":return"#007bff";case"\u64cd\u4f5c\u5458":return"#28a745";default:return"#6c757d"}}};
  color: white;
`,Cf=Le.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${e=>e.$active?"#d4edda":"#f8d7da"};
  color: ${e=>e.$active?"#155724":"#721c24"};
`,_f=Le.div`
  display: flex;
  gap: 8px;
`,Ef=Le.button`
  background: ${e=>e.$danger?"#dc3545":"#667eea"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.$danger?"#c82333":"#5a6acf"};
    transform: translateY(-1px);
  }
`,$f=Le.div`
  padding: 40px;
  text-align: center;
  color: #6c757d;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  .notice-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  .notice-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #495057;
  }

  .notice-text {
    font-size: 14px;
    line-height: 1.5;
  }
`,zf=[{id:1,username:"admin",email:"admin@example.com",role:"\u8d85\u7ea7\u7ba1\u7406\u5458",status:"active",lastLogin:"2024-01-15 10:30:25",created:"2024-01-01 09:00:00"},{id:2,username:"manager",email:"manager@example.com",role:"\u7ba1\u7406\u5458",status:"active",lastLogin:"2024-01-14 16:45:12",created:"2024-01-02 14:20:00"},{id:3,username:"operator",email:"operator@example.com",role:"\u64cd\u4f5c\u5458",status:"inactive",lastLogin:"2024-01-10 08:15:33",created:"2024-01-05 11:30:00"}],Tf=()=>{const[e]=(0,t.useState)(zf);return(0,es.jsxs)(ff,{children:[(0,es.jsxs)(hf,{children:[(0,es.jsxs)(gf,{children:[(0,es.jsx)(cr,{size:20}),"\u7528\u6237\u7ba1\u7406"]}),(0,es.jsxs)(xf,{onClick:()=>{alert("\u6dfb\u52a0\u7528\u6237\u529f\u80fd\u5f00\u53d1\u4e2d...")},children:[(0,es.jsx)(Xn,{size:16}),"\u6dfb\u52a0\u7528\u6237"]})]}),(0,es.jsxs)($f,{children:[(0,es.jsx)("div",{className:"notice-icon",children:"\ud83d\udc65"}),(0,es.jsx)("div",{className:"notice-title",children:"\u7528\u6237\u7ba1\u7406\u6a21\u5757"}),(0,es.jsxs)("div",{className:"notice-text",children:["\u6b64\u529f\u80fd\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u9884\u8ba1\u5305\u542b\u4ee5\u4e0b\u529f\u80fd\uff1a",(0,es.jsx)("br",{}),"\u2022 \u7528\u6237\u521b\u5efa\u3001\u7f16\u8f91\u3001\u5220\u9664",(0,es.jsx)("br",{}),"\u2022 \u89d2\u8272\u6743\u9650\u7ba1\u7406",(0,es.jsx)("br",{}),"\u2022 \u7528\u6237\u72b6\u6001\u76d1\u63a7",(0,es.jsx)("br",{}),"\u2022 \u767b\u5f55\u5386\u53f2\u8bb0\u5f55"]})]}),(0,es.jsxs)("div",{style:{padding:"20px"},children:[(0,es.jsx)("h4",{style:{margin:"0 0 16px 0",color:"#495057"},children:"\u793a\u4f8b\u7528\u6237\u6570\u636e\uff1a"}),(0,es.jsxs)(mf,{children:[(0,es.jsx)("thead",{children:(0,es.jsxs)("tr",{children:[(0,es.jsx)(bf,{children:"\u7528\u6237\u4fe1\u606f"}),(0,es.jsx)(bf,{children:"\u89d2\u8272"}),(0,es.jsx)(bf,{children:"\u72b6\u6001"}),(0,es.jsx)(bf,{children:"\u6700\u540e\u767b\u5f55"}),(0,es.jsx)(bf,{children:"\u64cd\u4f5c"})]})}),(0,es.jsx)("tbody",{children:e.map(e=>(0,es.jsxs)(yf,{children:[(0,es.jsx)(vf,{children:(0,es.jsxs)(wf,{children:[(0,es.jsx)(kf,{children:e.username.charAt(0).toUpperCase()}),(0,es.jsxs)(Sf,{children:[(0,es.jsx)("div",{className:"username",children:e.username}),(0,es.jsx)("div",{className:"email",children:e.email})]})]})}),(0,es.jsx)(vf,{children:(0,es.jsx)(jf,{role:e.role,children:e.role})}),(0,es.jsx)(vf,{children:(0,es.jsx)(Cf,{$active:"active"===e.status,children:"active"===e.status?"\u6d3b\u8dc3":"\u672a\u6d3b\u8dc3"})}),(0,es.jsx)(vf,{children:(0,es.jsxs)("div",{style:{fontSize:"13px"},children:[(0,es.jsx)("div",{children:e.lastLogin.split(" ")[0]}),(0,es.jsx)("div",{style:{color:"#6c757d",fontSize:"12px"},children:e.lastLogin.split(" ")[1]})]})}),(0,es.jsx)(vf,{children:(0,es.jsxs)(_f,{children:[(0,es.jsx)(Ef,{onClick:()=>{return t=e.id,void alert(`\u7f16\u8f91\u7528\u6237 ${t} \u529f\u80fd\u5f00\u53d1\u4e2d...`);var t},children:(0,es.jsx)(In,{size:12})}),(0,es.jsx)(Ef,{$danger:!0,onClick:()=>{return t=e.id,void alert(`\u5220\u9664\u7528\u6237 ${t} \u529f\u80fd\u5f00\u53d1\u4e2d...`);var t},children:(0,es.jsx)(or,{size:12})})]})})]},e.id))})]})]})]})},Pf=Le.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`,Af=Le.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  overflow: hidden;
`,If=Le.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e5e5e5;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  gap: 10px;
`,Of=Le.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
`,Rf=Le.div`
  padding: 24px;
`,Nf=Le.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`,Lf=Le.div`
  .title {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 4px;
  }
  
  .description {
    font-size: 13px;
    color: #6c757d;
    line-height: 1.4;
  }
`,Df=Le.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Mf=Le.button`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: ${e=>e.$active?"#28a745":"#e9ecef"};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: ${e=>e.$active?"26px":"2px"};
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    opacity: 0.8;
  }
`,Ff=Le.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  width: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Bf=Le.button`
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #218838;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`,Uf=Le.div`
  grid-column: 1 / -1;
  padding: 30px;
  text-align: center;
  color: #6c757d;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  border: 1px solid #e5e5e5;

  .notice-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  .notice-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #495057;
  }

  .notice-text {
    font-size: 14px;
    line-height: 1.5;
  }
`,Wf=Le.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
`,qf=Le.input`
  padding: 8px 40px 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &.success {
    border-color: #28a745;
  }

  &.error {
    border-color: #dc3545;
  }
`,Kf=Le.button`
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #495057;
  }
`,Hf=Le.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  color: ${e=>"success"===e.$status?"#28a745":"error"===e.$status?"#dc3545":"#6c757d"};
`,Yf=Le.button`
  background: #17a2b8;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
  margin-left: 8px;

  &:hover {
    background: #138496;
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
  }
`,Vf=Le.div`
  background: #f8d7da;
  color: #721c24;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 8px;
`,Gf=Le.div`
  background: #d4edda;
  color: #155724;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 8px;
`,Qf=()=>{const[e,n]=(0,t.useState)({logRetentionDays:30,maxLogSize:3e3,autoCleanup:!0}),[r,a]=(0,t.useState)({aiApiKey:"",semanticScholarKey:"",scrapingDogKey:""}),[i,o]=(0,t.useState)({aiApiKey:"",semanticScholarKey:"",scrapingDogKey:""}),[s,l]=(0,t.useState)({aiApiKey:!1,semanticScholarKey:!1,scrapingDogKey:!1}),[c,d]=(0,t.useState)({aiApiKey:!1,semanticScholarKey:!1,scrapingDogKey:!1}),[u,p]=(0,t.useState)({aiApiKey:"unknown",semanticScholarKey:"unknown",scrapingDogKey:"unknown"}),[f,h]=(0,t.useState)({aiApiKey:!1,semanticScholarKey:!1,scrapingDogKey:!1}),[g,x]=(0,t.useState)({aiApiKey:"",semanticScholarKey:"",scrapingDogKey:""});(0,t.useEffect)(()=>{m(),j()},[]);const m=async()=>{try{const e=sessionStorage.getItem("admin_token"),t={"Content-Type":"application/json"};if(e&&e.length<1e3)t.Authorization=`Bearer ${e}`;else if(e&&e.length>=1e3){console.warn("Token\u592a\u957f\uff0c\u53ef\u80fd\u5bfc\u81f4\u8bf7\u6c42\u5934\u8fc7\u5927\uff0c\u751f\u6210\u65b0token");const e="admin_"+Date.now();sessionStorage.setItem("admin_token",e),t.Authorization=`Bearer ${e}`}const n=await fetch("/api/admin/keys",{method:"GET",headers:t});if(n.ok){const e=await n.json();a(e),Object.keys(e).forEach(t=>{e[t]&&p(e=>({...e,[t]:"success"}))})}}catch(e){console.error("\u52a0\u8f7d\u5bc6\u94a5\u914d\u7f6e\u5931\u8d25:",e)}},b=(e,t)=>{n(n=>({...n,[e]:t}))},y=async e=>{await(async()=>{try{const e=sessionStorage.getItem("admin_token"),t={"Content-Type":"application/json"};if(e&&e.length<1e3)t.Authorization=`Bearer ${e}`;else if(e&&e.length>=1e3){const e="admin_"+Date.now();sessionStorage.setItem("admin_token",e),t.Authorization=`Bearer ${e}`}const n=await fetch("/api/admin/keys/edit",{method:"GET",headers:t});if(n.ok){const e=await n.json();o(e)}}catch(e){console.error("\u52a0\u8f7d\u7f16\u8f91\u5bc6\u94a5\u5931\u8d25:",e)}})(),l(t=>({...t,[e]:!0})),p(t=>({...t,[e]:"unknown"})),x(t=>({...t,[e]:""}))},v=e=>{l(t=>({...t,[e]:!1})),m()},w=(e,t)=>{o(n=>({...n,[e]:t})),p(t=>({...t,[e]:"unknown"})),x(t=>({...t,[e]:""}))},k=e=>{d(t=>({...t,[e]:!t[e]}))},S=async e=>{const t=(s[e],i[e]);if(!t||""===t.trim())return p(t=>({...t,[e]:"error"})),void x(t=>({...t,[e]:"\u8bf7\u5148\u8f93\u5165\u5bc6\u94a5"}));h(t=>({...t,[e]:!0})),x(t=>({...t,[e]:""}));try{const n=sessionStorage.getItem("admin_token")||"admin_"+Date.now(),r=await fetch("/api/admin/keys/test",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({keyType:e,apiKey:t})}),a=await r.json();r.ok&&a.success?(p(t=>({...t,[e]:"success"})),x(t=>({...t,[e]:a.message||"\u5bc6\u94a5\u9a8c\u8bc1\u6210\u529f"}))):(p(t=>({...t,[e]:"error"})),x(t=>({...t,[e]:a.message||"\u5bc6\u94a5\u9a8c\u8bc1\u5931\u8d25"})))}catch(n){p(t=>({...t,[e]:"error"})),x(t=>({...t,[e]:`\u9a8c\u8bc1\u5931\u8d25: ${n.message}`}))}finally{h(t=>({...t,[e]:!1}))}},j=async()=>{try{const e=sessionStorage.getItem("admin_token"),t={"Content-Type":"application/json"};if(e&&e.length<1e3)t.Authorization=`Bearer ${e}`;else if(e&&e.length>=1e3){const e="admin_"+Date.now();sessionStorage.setItem("admin_token",e),t.Authorization=`Bearer ${e}`}const r=await fetch("/api/admin/settings",{method:"GET",headers:t});if(r.ok){const e=await r.json();n(t=>({...t,...e}))}}catch(e){console.error("\u52a0\u8f7d\u7cfb\u7edf\u8bbe\u7f6e\u5931\u8d25:",e)}};return(0,es.jsxs)("div",{children:[(0,es.jsxs)(Uf,{children:[(0,es.jsx)("div",{className:"notice-icon",children:"\u2699\ufe0f"}),(0,es.jsx)("div",{className:"notice-title",children:"\u7cfb\u7edf\u8bbe\u7f6e\u6a21\u5757 v2.0"}),(0,es.jsxs)("div",{className:"notice-text",children:["\u63d0\u4f9b\u57fa\u7840\u7684\u7cfb\u7edf\u914d\u7f6e\u7ba1\u7406\u529f\u80fd",(0,es.jsx)("br",{}),"\u5bc6\u94a5\u7ba1\u7406\u529f\u80fd\u5df2\u5b8c\u5168\u5b9e\u73b0\uff0c\u6570\u636e\u7ba1\u7406\u529f\u80fd\u5f00\u53d1\u4e2d"]})]}),(0,es.jsxs)(Pf,{children:[(0,es.jsxs)(Af,{children:[(0,es.jsxs)(If,{children:[(0,es.jsx)(Bn,{size:18}),(0,es.jsx)(Of,{children:"\u5bc6\u94a5\u7ba1\u7406"})]}),(0,es.jsxs)(Rf,{children:[(0,es.jsxs)(Nf,{children:[(0,es.jsxs)(Lf,{children:[(0,es.jsx)("div",{className:"title",children:"AI API \u5bc6\u94a5"}),(0,es.jsx)("div",{className:"description",children:"\u7528\u4e8e\u8c03\u7528AI\u670d\u52a1\u7684API\u5bc6\u94a5 (DeerAPI)"})]}),(0,es.jsx)(Df,{children:s.aiApiKey?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsxs)(Wf,{children:[(0,es.jsx)(qf,{type:c.aiApiKey?"text":"password",value:i.aiApiKey,onChange:e=>w("aiApiKey",e.target.value),placeholder:"\u8bf7\u8f93\u5165AI API\u5bc6\u94a5",className:"unknown"!==u.aiApiKey?u.aiApiKey:""}),(0,es.jsx)(Kf,{onClick:()=>k("aiApiKey"),children:c.aiApiKey?(0,es.jsx)(Rn,{size:16}):(0,es.jsx)(Nn,{size:16})})]}),(0,es.jsxs)(Hf,{$status:u.aiApiKey,children:["success"===u.aiApiKey&&(0,es.jsx)(Sn,{size:16}),"error"===u.aiApiKey&&(0,es.jsx)(ur,{size:16})]}),(0,es.jsx)(Yf,{onClick:()=>S("aiApiKey"),disabled:f.aiApiKey,children:f.aiApiKey?"\u6d4b\u8bd5\u4e2d...":"\u6d4b\u8bd5"}),(0,es.jsx)(Yf,{onClick:()=>v("aiApiKey"),style:{marginLeft:"8px",background:"#6c757d"},children:"\u53d6\u6d88"})]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Wf,{children:(0,es.jsx)(qf,{type:"text",value:r.aiApiKey||"\u672a\u8bbe\u7f6e",readOnly:!0,style:{background:"#f8f9fa",cursor:"default"}})}),(0,es.jsxs)(Hf,{$status:u.aiApiKey,children:["success"===u.aiApiKey&&(0,es.jsx)(Sn,{size:16}),"error"===u.aiApiKey&&(0,es.jsx)(ur,{size:16})]}),(0,es.jsx)(Yf,{onClick:()=>y("aiApiKey"),style:{background:"#007bff"},children:"\u7f16\u8f91"})]})})]}),g.aiApiKey&&(0,es.jsx)("div",{style:{marginTop:"8px"},children:"success"===u.aiApiKey?(0,es.jsx)(Gf,{children:g.aiApiKey}):(0,es.jsx)(Vf,{children:g.aiApiKey})}),(0,es.jsxs)(Nf,{children:[(0,es.jsxs)(Lf,{children:[(0,es.jsx)("div",{className:"title",children:"Semantic Scholar API \u5bc6\u94a5"}),(0,es.jsx)("div",{className:"description",children:"\u7528\u4e8e\u8bbf\u95eeSemantic Scholar\u5b66\u672f\u641c\u7d22API"})]}),(0,es.jsx)(Df,{children:s.semanticScholarKey?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsxs)(Wf,{children:[(0,es.jsx)(qf,{type:c.semanticScholarKey?"text":"password",value:i.semanticScholarKey,onChange:e=>w("semanticScholarKey",e.target.value),placeholder:"\u8bf7\u8f93\u5165Semantic Scholar\u5bc6\u94a5",className:"unknown"!==u.semanticScholarKey?u.semanticScholarKey:""}),(0,es.jsx)(Kf,{onClick:()=>k("semanticScholarKey"),children:c.semanticScholarKey?(0,es.jsx)(Rn,{size:16}):(0,es.jsx)(Nn,{size:16})})]}),(0,es.jsxs)(Hf,{$status:u.semanticScholarKey,children:["success"===u.semanticScholarKey&&(0,es.jsx)(Sn,{size:16}),"error"===u.semanticScholarKey&&(0,es.jsx)(ur,{size:16})]}),(0,es.jsx)(Yf,{onClick:()=>S("semanticScholarKey"),disabled:f.semanticScholarKey,children:f.semanticScholarKey?"\u6d4b\u8bd5\u4e2d...":"\u6d4b\u8bd5"}),(0,es.jsx)(Yf,{onClick:()=>v("semanticScholarKey"),style:{marginLeft:"8px",background:"#6c757d"},children:"\u53d6\u6d88"})]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Wf,{children:(0,es.jsx)(qf,{type:"text",value:r.semanticScholarKey||"\u672a\u8bbe\u7f6e",readOnly:!0,style:{background:"#f8f9fa",cursor:"default"}})}),(0,es.jsxs)(Hf,{$status:u.semanticScholarKey,children:["success"===u.semanticScholarKey&&(0,es.jsx)(Sn,{size:16}),"error"===u.semanticScholarKey&&(0,es.jsx)(ur,{size:16})]}),(0,es.jsx)(Yf,{onClick:()=>y("semanticScholarKey"),style:{background:"#007bff"},children:"\u7f16\u8f91"})]})})]}),g.semanticScholarKey&&(0,es.jsx)("div",{style:{marginTop:"8px"},children:"success"===u.semanticScholarKey?(0,es.jsx)(Gf,{children:g.semanticScholarKey}):(0,es.jsx)(Vf,{children:g.semanticScholarKey})}),(0,es.jsxs)(Nf,{children:[(0,es.jsxs)(Lf,{children:[(0,es.jsx)("div",{className:"title",children:"ScrapingDog API \u5bc6\u94a5"}),(0,es.jsx)("div",{className:"description",children:"\u7528\u4e8eGoogle Scholar\u641c\u7d22\u4ee3\u7406\u670d\u52a1"})]}),(0,es.jsx)(Df,{children:s.scrapingDogKey?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsxs)(Wf,{children:[(0,es.jsx)(qf,{type:c.scrapingDogKey?"text":"password",value:i.scrapingDogKey,onChange:e=>w("scrapingDogKey",e.target.value),placeholder:"\u8bf7\u8f93\u5165ScrapingDog\u5bc6\u94a5",className:"unknown"!==u.scrapingDogKey?u.scrapingDogKey:""}),(0,es.jsx)(Kf,{onClick:()=>k("scrapingDogKey"),children:c.scrapingDogKey?(0,es.jsx)(Rn,{size:16}):(0,es.jsx)(Nn,{size:16})})]}),(0,es.jsxs)(Hf,{$status:u.scrapingDogKey,children:["success"===u.scrapingDogKey&&(0,es.jsx)(Sn,{size:16}),"error"===u.scrapingDogKey&&(0,es.jsx)(ur,{size:16})]}),(0,es.jsx)(Yf,{onClick:()=>S("scrapingDogKey"),disabled:f.scrapingDogKey,children:f.scrapingDogKey?"\u6d4b\u8bd5\u4e2d...":"\u6d4b\u8bd5"}),(0,es.jsx)(Yf,{onClick:()=>v("scrapingDogKey"),style:{marginLeft:"8px",background:"#6c757d"},children:"\u53d6\u6d88"})]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(Wf,{children:(0,es.jsx)(qf,{type:"text",value:r.scrapingDogKey||"\u672a\u8bbe\u7f6e",readOnly:!0,style:{background:"#f8f9fa",cursor:"default"}})}),(0,es.jsxs)(Hf,{$status:u.scrapingDogKey,children:["success"===u.scrapingDogKey&&(0,es.jsx)(Sn,{size:16}),"error"===u.scrapingDogKey&&(0,es.jsx)(ur,{size:16})]}),(0,es.jsx)(Yf,{onClick:()=>y("scrapingDogKey"),style:{background:"#007bff"},children:"\u7f16\u8f91"})]})})]}),g.scrapingDogKey&&(0,es.jsx)("div",{style:{marginTop:"8px"},children:"success"===u.scrapingDogKey?(0,es.jsx)(Gf,{children:g.scrapingDogKey}):(0,es.jsx)(Vf,{children:g.scrapingDogKey})}),(0,es.jsxs)(Bf,{onClick:async()=>{try{const e=sessionStorage.getItem("admin_token")||"admin_"+Date.now(),t=await fetch("/api/admin/keys",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(i)});if(t.ok)alert("\u5bc6\u94a5\u914d\u7f6e\u4fdd\u5b58\u6210\u529f\uff01"),l({aiApiKey:!1,semanticScholarKey:!1,scrapingDogKey:!1}),m();else{const e=await t.json();alert(`\u4fdd\u5b58\u5931\u8d25: ${e.message}`)}}catch(e){alert(`\u4fdd\u5b58\u5931\u8d25: ${e.message}`)}},children:[(0,es.jsx)(Zn,{size:16}),"\u4fdd\u5b58\u5bc6\u94a5\u914d\u7f6e"]})]})]}),(0,es.jsxs)(Af,{children:[(0,es.jsxs)(If,{children:[(0,es.jsx)(Pn,{size:18}),(0,es.jsx)(Of,{children:"\u6570\u636e\u7ba1\u7406"})]}),(0,es.jsxs)(Rf,{children:[(0,es.jsxs)(Nf,{children:[(0,es.jsxs)(Lf,{children:[(0,es.jsx)("div",{className:"title",children:"\u65e5\u5fd7\u4fdd\u7559\u5929\u6570"}),(0,es.jsx)("div",{className:"description",children:"\u7cfb\u7edf\u65e5\u5fd7\u6587\u4ef6\u7684\u4fdd\u7559\u65f6\u95f4\uff08\u6682\u672a\u5b9e\u73b0\uff0c\u5f53\u524d\u57fa\u4e8e\u6570\u91cf\u7ba1\u7406\uff09"})]}),(0,es.jsxs)(Df,{children:[(0,es.jsx)(Ff,{type:"number",value:e.logRetentionDays,onChange:e=>b("logRetentionDays",parseInt(e.target.value)),min:"7",max:"365"}),(0,es.jsx)("span",{style:{fontSize:"13px",color:"#6c757d"},children:"\u5929"})]})]}),(0,es.jsxs)(Nf,{children:[(0,es.jsxs)(Lf,{children:[(0,es.jsx)("div",{className:"title",children:"\u6700\u5927\u65e5\u5fd7\u6570\u91cf"}),(0,es.jsx)("div",{className:"description",children:"\u65e5\u5fd7\u6587\u4ef6\u4e2d\u4fdd\u7559\u7684\u6700\u5927\u65e5\u5fd7\u6761\u6570\uff0c\u8d85\u51fa\u65f6\u81ea\u52a8\u6e05\u7406"})]}),(0,es.jsxs)(Df,{children:[(0,es.jsx)(Ff,{type:"number",value:e.maxLogSize,onChange:e=>b("maxLogSize",parseInt(e.target.value)),min:"1000",max:"10000"}),(0,es.jsx)("span",{style:{fontSize:"13px",color:"#6c757d"},children:"\u6761"})]})]}),(0,es.jsxs)(Nf,{children:[(0,es.jsxs)(Lf,{children:[(0,es.jsx)("div",{className:"title",children:"\u81ea\u52a8\u6e05\u7406"}),(0,es.jsx)("div",{className:"description",children:"\u542f\u7528\u65e5\u5fd7\u6570\u91cf\u81ea\u52a8\u6e05\u7406\u529f\u80fd\uff08\u5df2\u5b9e\u73b0\uff09"})]}),(0,es.jsx)(Df,{children:(0,es.jsx)(Mf,{$active:e.autoCleanup,onClick:()=>{return e="autoCleanup",void n(t=>({...t,[e]:!t[e]}));var e}})})]}),(0,es.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,es.jsxs)(Bf,{onClick:async()=>{try{const t=sessionStorage.getItem("admin_token")||"admin_"+Date.now(),n=await fetch("/api/admin/settings",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)});if(n.ok){const e=await n.json();alert("\u2705 \u6570\u636e\u7ba1\u7406\u8bbe\u7f6e\u4fdd\u5b58\u6210\u529f\uff01\n\n\u65b0\u8bbe\u7f6e\u5df2\u751f\u6548\uff0c\u65e5\u5fd7\u7ba1\u7406\u5c06\u6309\u65b0\u914d\u7f6e\u8fd0\u884c\u3002"),console.log("\u8bbe\u7f6e\u4fdd\u5b58\u6210\u529f:",e)}else{const e=await n.json();alert(`\u274c \u4fdd\u5b58\u5931\u8d25: ${e.error}`)}}catch(t){alert(`\u274c \u4fdd\u5b58\u5931\u8d25: ${t.message}`),console.error("\u4fdd\u5b58\u8bbe\u7f6e\u5931\u8d25:",t)}},children:[(0,es.jsx)(Zn,{size:16}),"\u4fdd\u5b58\u8bbe\u7f6e"]}),(0,es.jsx)(Bf,{onClick:async()=>{if(window.confirm("\u786e\u5b9a\u8981\u6e05\u7406\u591a\u4f59\u7684\u65e5\u5fd7\u5417\uff1f\n\n\u8fd9\u5c06\u5220\u9664\u8d85\u51fa\u914d\u7f6e\u6570\u91cf\u7684\u65e7\u65e5\u5fd7\uff0c\u4fdd\u7559\u6700\u65b0\u7684\u65e5\u5fd7\u8bb0\u5f55\u3002"))try{const e=sessionStorage.getItem("admin_token")||"admin_"+Date.now(),t=await fetch("/api/admin/cleanup-logs",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});if(t.ok){const e=await t.json();e.cleanedCount>0?alert(`\u2705 \u65e5\u5fd7\u6e05\u7406\u5b8c\u6210\uff01\n\n\u539f\u6709\u65e5\u5fd7\uff1a${e.originalCount} \u6761\n\u6e05\u7406\u6389\uff1a${e.cleanedCount} \u6761\n\u4fdd\u7559\uff1a${e.currentCount} \u6761`):alert(`\u2139\ufe0f ${e.message}\n\n\u5f53\u524d\u65e5\u5fd7\uff1a${e.currentCount} \u6761\n\u914d\u7f6e\u4e0a\u9650\uff1a${e.maxLogSize} \u6761`)}else{const e=await t.json();alert(`\u274c \u6e05\u7406\u5931\u8d25: ${e.error}`)}}catch(e){alert(`\u274c \u6e05\u7406\u5931\u8d25: ${e.message}`),console.error("\u6e05\u7406\u65e5\u5fd7\u5931\u8d25:",e)}},style:{background:"#fd7e14"},children:"\ud83e\uddf9 \u6e05\u7406\u65e5\u5fd7"})]})]})]})]})]})},Xf=Le.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #f8fafc;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
`,Jf=Le.div`
  width: ${e=>e.$collapsed?"70px":"280px"};
  min-width: ${e=>e.$collapsed?"70px":"280px"};
  background: linear-gradient(180deg, #1e293b 0%, #334155 100%);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  border-right: 1px solid #374151;

  @media (max-width: 768px) {
    position: absolute;
    left: ${e=>e.$mobileOpen?"0":"-280px"};
    width: 280px;
    min-width: 280px;
    height: 100vh;
    z-index: 2000;
    box-shadow: 8px 0 25px rgba(0, 0, 0, 0.15);
  }
`,Zf=Le.div`
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  flex-shrink: 0;
`,eh=Le.h1`
  margin: 0;
  font-size: ${e=>e.$collapsed?"0":"22px"};
  font-weight: 700;
  opacity: ${e=>e.$collapsed?"0":"1"};
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: ${e=>e.$collapsed?"0":"12px"};
`,th=Le.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: none;
  }
`,nh=Le.button`
  display: none;
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 2001;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 14px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,rh=Le.nav`
  flex: 1;
  padding: 24px 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,ah=Le.div`
  margin: 4px 16px;
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  border-radius: 12px;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: translateX(4px);
  }

  ${e=>e.$active&&"\n    background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(52, 211, 153, 0.2) 100%);\n    color: white;\n    box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);\n    \n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 4px;\n      height: 24px;\n      background: linear-gradient(180deg, #60a5fa 0%, #34d399 100%);\n      border-radius: 0 2px 2px 0;\n    }\n  "}

  .nav-text {
    opacity: ${e=>e.$collapsed?"0":"1"};
    transition: opacity 0.3s ease;
    white-space: nowrap;
    font-size: 15px;
  }

  .nav-icon {
    min-width: 22px;
    font-size: 18px;
    flex-shrink: 0;
  }
`,ih=Le.div`
  padding: 24px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
`,oh=Le.button`
  width: 100%;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: white;
  padding: 14px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;

  &:hover {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  .logout-text {
    opacity: ${e=>e.$collapsed?"0":"1"};
    transition: opacity 0.3s ease;
  }
`,sh=Le.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f8fafc;
  min-width: 0; /* 防止flex item过度收缩 */
`,lh=Le.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 32px;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  backdrop-filter: blur(10px);
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 20px 24px 20px 80px;
  }
`,ch=Le.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`,dh=Le.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,uh=Le.h2`
  margin: 0;
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
`,ph=Le.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;

  .breadcrumb-item {
    &:not(:last-child)::after {
      content: '/';
      margin-left: 8px;
      color: #cbd5e1;
    }
  }

  .breadcrumb-current {
    color: #3b82f6;
    font-weight: 500;
  }
`,fh=Le.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,hh=Le.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,gh=Le.input`
  padding: 10px 16px 10px 40px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  width: 240px;
  background: #f8fafc;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background: white;
  }

  &::placeholder {
    color: #94a3b8;
  }
`,xh=Le(er)`
  position: absolute;
  left: 12px;
  color: #94a3b8;
  font-size: 16px;
`,mh=Le.button`
  background: #f1f5f9;
  border: none;
  color: #64748b;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: #e2e8f0;
    color: #334155;
    transform: translateY(-1px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    border: 2px solid white;
  }
`,bh=Le.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 14px;
  padding: 8px 16px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 14px;
    flex-shrink: 0;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
`,yh=Le.div`
  flex: 1;
  padding: 32px;
  overflow-y: auto;
  background: #f8fafc;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  /* 自定义滚动条 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`,vh=Le.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    display: ${e=>e.$show?"block":"none"};
  }
`,wh=[{key:"dashboard",label:"\u4eea\u8868\u677f",icon:function(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)},description:"\u7cfb\u7edf\u6982\u89c8"},{key:"analytics",label:"\u6570\u636e\u5206\u6790",icon:mn,description:"API\u8c03\u7528\u8bb0\u5f55\u4e0e\u5206\u6790"},{key:"users",label:"\u7528\u6237\u7ba1\u7406",icon:dr,description:"\u7528\u6237\u6743\u9650\u7ba1\u7406"},{key:"settings",label:"\u7cfb\u7edf\u8bbe\u7f6e",icon:function(e){return cn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)},description:"\u5bc6\u94a5\u7ba1\u7406\u548c\u6570\u636e\u914d\u7f6e"}],kh=()=>{var e;const[n,r]=(0,t.useState)(!1),[a,i]=(0,t.useState)(null),[o,s]=(0,t.useState)("dashboard"),[l,c]=(0,t.useState)(!1),[d,u]=(0,t.useState)(!1),[p,f]=(0,t.useState)("");(0,t.useEffect)(()=>{(()=>{const e=sessionStorage.getItem("admin_authenticated"),t=sessionStorage.getItem("admin_auth_time"),n=Date.now();if("true"===e&&t&&n-parseInt(t)<288e5){r(!0);const e=JSON.parse(sessionStorage.getItem("admin_user_data")||"{}");i(e)}else g()})()},[]);const h=e=>{r(!0),i(e),sessionStorage.setItem("admin_authenticated","true"),sessionStorage.setItem("admin_auth_time",Date.now().toString()),sessionStorage.setItem("admin_user_data",JSON.stringify(e))},g=()=>{r(!1),i(null),sessionStorage.removeItem("admin_authenticated"),sessionStorage.removeItem("admin_auth_time"),sessionStorage.removeItem("admin_user_data")};if(!n)return(0,es.jsx)(Sp,{onLoginSuccess:h});const x=wh.find(e=>e.key===o)||wh[0],m=x.icon;return(0,es.jsxs)(Xf,{"data-admin-layout":!0,children:[(0,es.jsx)(nh,{onClick:()=>{u(!d)},children:d?(0,es.jsx)(ur,{size:20}):(0,es.jsx)(Hn,{size:20})}),(0,es.jsx)(vh,{$show:d,onClick:()=>u(!1)}),(0,es.jsxs)(Jf,{$collapsed:l,$mobileOpen:d,children:[(0,es.jsxs)(Zf,{children:[(0,es.jsxs)(eh,{$collapsed:l,children:[(0,es.jsx)(rr,{size:28}),!l&&"\u5b66\u8005\u641c\u7d22\u7ba1\u7406"]}),(0,es.jsx)(th,{onClick:()=>{c(!l)},children:l?(0,es.jsx)(Hn,{size:18}):(0,es.jsx)(ur,{size:18})})]}),(0,es.jsx)(rh,{children:wh.map(e=>{const t=e.icon;return(0,es.jsxs)(ah,{$active:o===e.key,$collapsed:l,onClick:()=>{return t=e.key,s(t),void u(!1);var t},title:l?`${e.label} - ${e.description}`:"",children:[(0,es.jsx)(t,{size:18,className:"nav-icon"}),(0,es.jsx)("span",{className:"nav-text",children:e.label})]},e.key)})}),(0,es.jsx)(ih,{children:(0,es.jsxs)(oh,{$collapsed:l,onClick:g,children:[(0,es.jsx)(Wn,{size:18}),(0,es.jsx)("span",{className:"logout-text",children:"\u9000\u51fa\u767b\u5f55"})]})})]}),(0,es.jsxs)(sh,{children:[(0,es.jsxs)(lh,{children:[(0,es.jsx)(ch,{children:(0,es.jsxs)(dh,{children:[(0,es.jsxs)(uh,{children:[(0,es.jsx)(m,{size:24}),x.label]}),(0,es.jsxs)(ph,{children:[(0,es.jsx)("span",{className:"breadcrumb-item",children:"\u7ba1\u7406\u540e\u53f0"}),(0,es.jsx)("span",{className:"breadcrumb-item breadcrumb-current",children:x.label})]})]})}),(0,es.jsxs)(fh,{children:[(0,es.jsxs)(hh,{children:[(0,es.jsx)(xh,{}),(0,es.jsx)(gh,{placeholder:"\u641c\u7d22\u529f\u80fd\u3001\u7528\u6237\u6216\u65e5\u5fd7...",value:p,onChange:e=>f(e.target.value)})]}),(0,es.jsx)(mh,{title:"\u901a\u77e5",children:(0,es.jsx)(bn,{size:18})}),(0,es.jsxs)(bh,{children:[(0,es.jsx)("div",{className:"user-avatar",children:(null===a||void 0===a||null===(e=a.username)||void 0===e?void 0:e.charAt(0).toUpperCase())||"A"}),(0,es.jsxs)("div",{className:"user-details",children:[(0,es.jsx)("div",{style:{fontWeight:"600",color:"#1e293b",fontSize:"14px"},children:(null===a||void 0===a?void 0:a.username)||"Admin"}),(0,es.jsx)("div",{style:{fontSize:"12px",color:"#64748b"},children:(null===a||void 0===a?void 0:a.role)||"\u7cfb\u7edf\u7ba1\u7406\u5458"})]})]})]})]}),(0,es.jsx)(yh,{children:(()=>{switch(o){case"dashboard":default:return(0,es.jsx)(pf,{});case"analytics":return(0,es.jsx)(Hp,{});case"users":return(0,es.jsx)(Tf,{});case"settings":return(0,es.jsx)(Qf,{},"settings-module")}})()})]})]})},Sh=Le.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,jh=Le.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`,Ch=Le.div`
  width: 100%;
  height: 100vh;
  position: relative;
`,_h=Le.h1`
  color: #2c3e50;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 24px;
`,Eh=Le.p`
  color: #7f8c8d;
  margin-bottom: 32px;
  font-size: 14px;
`,$h=Le.div`
  position: relative;
  margin-bottom: 24px;
`,zh=Le.input`
  width: 100%;
  padding: 16px 50px 16px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`,Th=Le.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: #495057;
  }
`,Ph=Le.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    background: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Ah=Le.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  color: #6c757d;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #f8f9fa;
    border-color: #dee2e6;
  }
`,Ih=Le.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
`,Oh=Le.div`
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
`,Rh=Le.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  z-index: 10001;

  &:hover {
    background: #dc3545;
    color: white;
  }
`,Nh=["admin2024","logs_access_key","semantic_admin",{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SEMANTIC_KEY:"kH82FAjMoz8ZWoGCwGcS2ullbhmaLaxYzKfTco6"}.REACT_APP_LOGS_ACCESS_KEY].filter(Boolean),Lh=()=>{const[e,n]=(0,t.useState)(!1),[r,a]=(0,t.useState)(""),[i,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)(""),[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)(!1),f=Ot();At();(0,t.useEffect)(()=>{const e=sessionStorage.getItem("logs_authenticated"),t=sessionStorage.getItem("logs_auth_time"),r=Date.now();"true"===e&&t&&r-parseInt(t)<288e5?n(!0):(sessionStorage.removeItem("logs_authenticated"),sessionStorage.removeItem("logs_auth_time"))},[]);const h=()=>{sessionStorage.removeItem("logs_authenticated"),sessionStorage.removeItem("logs_auth_time"),n(!1),a(""),l(""),d("")},g=()=>{h()};return e?(0,es.jsxs)(Ch,{children:[(0,es.jsxs)(Rh,{onClick:h,children:[(0,es.jsx)(Un,{size:16}),"\u9000\u51fa\u767b\u5f55"]}),(0,es.jsx)(Fc,{onClose:g})]}):(0,es.jsx)(Sh,{children:(0,es.jsxs)(jh,{children:[(0,es.jsxs)(_h,{children:[(0,es.jsx)(rr,{size:28}),"API\u65e5\u5fd7\u8bbf\u95ee"]}),(0,es.jsx)(Eh,{children:"\u6b64\u9875\u9762\u53d7\u5bc6\u94a5\u4fdd\u62a4\uff0c\u4ec5\u9650\u7ba1\u7406\u5458\u8bbf\u95ee"}),s&&(0,es.jsx)(Ih,{children:s}),c&&(0,es.jsx)(Oh,{children:c}),(0,es.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),p(!0),l(""),d(""),await new Promise(e=>setTimeout(e,500)),Nh.includes(r.trim())?(d("\u9a8c\u8bc1\u6210\u529f\uff01\u6b63\u5728\u52a0\u8f7d\u65e5\u5fd7\u754c\u9762..."),sessionStorage.setItem("logs_authenticated","true"),sessionStorage.setItem("logs_auth_time",Date.now().toString()),setTimeout(()=>{n(!0),a("")},1e3)):l("\u8bbf\u95ee\u5bc6\u94a5\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\u540e\u91cd\u8bd5"),p(!1)},children:[(0,es.jsxs)($h,{children:[(0,es.jsx)(zh,{type:i?"text":"password",placeholder:"\u8bf7\u8f93\u5165\u8bbf\u95ee\u5bc6\u94a5",value:r,onChange:e=>a(e.target.value),disabled:u,autoComplete:"off"}),(0,es.jsx)(Th,{type:"button",onClick:()=>o(!i),disabled:u,children:i?(0,es.jsx)(Rn,{size:18}):(0,es.jsx)(Nn,{size:18})})]}),(0,es.jsx)(Ph,{type:"submit",disabled:!r.trim()||u,children:u?(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(lr,{size:16}),"\u9a8c\u8bc1\u4e2d..."]}):(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)(lr,{size:16}),"\u9a8c\u8bc1\u8bbf\u95ee"]})})]}),(0,es.jsxs)(Ah,{onClick:()=>{f("/")},children:[(0,es.jsx)(gn,{size:16}),"\u8fd4\u56de\u4e3b\u9875"]}),(0,es.jsxs)("div",{style:{marginTop:"24px",padding:"16px",background:"#f8f9fa",borderRadius:"8px",fontSize:"12px",color:"#6c757d",textAlign:"left"},children:[(0,es.jsx)("strong",{children:"\u5b89\u5168\u8bf4\u660e\uff1a"}),(0,es.jsxs)("ul",{style:{margin:"8px 0 0 0",paddingLeft:"16px"},children:[(0,es.jsx)("li",{children:"\u8ba4\u8bc1\u6709\u6548\u671f\uff1a8\u5c0f\u65f6"}),(0,es.jsx)("li",{children:"\u4ec5\u5f53\u524d\u6d4f\u89c8\u5668\u4f1a\u8bdd\u6709\u6548"}),(0,es.jsx)("li",{children:"\u5173\u95ed\u6d4f\u89c8\u5668\u540e\u9700\u91cd\u65b0\u8ba4\u8bc1"}),(0,es.jsx)("li",{children:"\u65e5\u5fd7\u6570\u636e\u4ec5\u5b58\u50a8\u5728\u672c\u5730"})]})]})]})})},Dh=()=>(0,es.jsx)(en,{children:(0,es.jsxs)(Xt,{children:[(0,es.jsx)(Gt,{path:"/",element:(0,es.jsx)(ip,{})}),(0,es.jsx)(Gt,{path:"/admin",element:(0,es.jsx)(kh,{})}),(0,es.jsx)(Gt,{path:"/admin/*",element:(0,es.jsx)(kh,{})}),(0,es.jsx)(Gt,{path:"/admin/logs-legacy",element:(0,es.jsx)(Lh,{})}),(0,es.jsx)(Gt,{path:"/system/analytics",element:(0,es.jsx)(Lh,{})}),(0,es.jsx)(Gt,{path:"/internal/diagnostics",element:(0,es.jsx)(Lh,{})}),(0,es.jsx)(Gt,{path:"*",element:(0,es.jsx)(Vt,{to:"/",replace:!0})})]})}),Mh=(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i=ve.apply(void 0,[e].concat(r)),o="sc-global-"+Ce(JSON.stringify(i)),s=new Re(i,o);function l(e){var n=le(),r=ce(),a=(0,t.useContext)(Pe),i=(0,t.useRef)(n.allocateGSInstance(o)).current;return n.server&&c(i,e,n,a,r),(0,t.useLayoutEffect)(function(){if(!n.server)return c(i,e,n,a,r),function(){return s.removeStyles(i,n)}},[i,e,n,a,r]),null}function c(e,t,n,r,a){if(s.isStatic)s.renderStyles(e,_,n,a);else{var i=g({},t,{theme:we(t,r,l.defaultProps)});s.renderStyles(e,i,n,a)}}return t.memo(l)})`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }
  
  #root > div:not([data-admin-layout]) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: visible;
  }
`;a.createRoot(document.getElementById("root")).render((0,es.jsxs)(t.StrictMode,{children:[(0,es.jsx)(Mh,{}),(0,es.jsx)(Dh,{})]}))})()})();
//# sourceMappingURL=main.b66aa445.js.map