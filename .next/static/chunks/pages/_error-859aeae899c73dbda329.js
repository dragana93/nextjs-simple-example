_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"1HF/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return t("Y0NT")}])},Y0NT:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("YFqc"),u=t.n(a),f=o.a.createElement;n.default=function(){return f("div",null,f("h1",null,"Oops, something went wrong."),f("p",null,"Try",f(u.a,{href:"/auth"},f("a",null,"going back"))))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a,u=o(t("q1tI")),f=t("g/15"),c=t("nOHt"),i=t("elyg");var s=new Map,l=window.IntersectionObserver,p={};var h=function(e,n){var t=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function d(e,n,t,r){e.prefetch(n,t,r).catch((function(e){0})),p[n+"%"+t]=!0}function v(e,n,t,r,o,a,u){var c=e.currentTarget,i=c.nodeName,s=c.target;"A"===i&&(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var n=(0,f.getLocationOrigin)();return new URL(e,n).origin===n}(t)&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}var w=function(e){var n=!1!==e.prefetch,t=u.default.useState(),o=r(t,2),a=o[0],f=o[1],s=(0,c.useRouter)(),w=u.default.useMemo((function(){var n=(0,i.resolveHref)(s.pathname,e.href);return{href:n,as:e.as?(0,i.resolveHref)(s.pathname,e.as):n}}),[s.pathname,e.href,e.as]),g=w.href,y=w.as;u.default.useEffect((function(){if(n&&l&&a&&a.tagName&&!p[g+"%"+y])return h(a,(function(){d(s,g,y)}))}),[n,a,g,y,s]);var _=e.children,E=e.replace,m=e.shallow,b=e.scroll;"string"===typeof _&&(_=u.default.createElement("a",null,_));var N=u.Children.only(_),T={ref:function(e){e&&f(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||v(e,s,g,y,E,m,b)}};return n&&(T.onMouseEnter=function(e){N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),d(s,g,y,{priority:!0})}),!e.passHref&&("a"!==N.type||"href"in N.props)||(T.href=(0,i.addBasePath)(y)),u.default.cloneElement(N,T)};n.default=w}},[["1HF/",0,2,1]]]);