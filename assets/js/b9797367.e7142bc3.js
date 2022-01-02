(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(a),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return a?n.a.createElement(m,p(p({ref:t},l),{},{components:a})):n.a.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=b;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),i=(a(0),a(113)),c=["components"],p={title:"datapackage-render-js"},o={unversionedId:"other-libraries/data-package-render",id:"other-libraries/data-package-render",isDocsHomePage:!1,title:"datapackage-render-js",description:"NPM",source:"@site/docs/other-libraries/data-package-render.md",slug:"/other-libraries/data-package-render",permalink:"/docs/other-libraries/data-package-render",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/other-libraries/data-package-render.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1640945521,formattedLastUpdatedAt:"12/31/2021",sidebar:"other-libraries",previous:{title:"datapackage-pipelines",permalink:"/docs/other-libraries/data-package-pipelines"}},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/datapackage-render"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/datapackage-render.svg",alt:"NPM"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-render-js"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/codebase-github-brightgreen",alt:"Codebase"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://discordapp.com/invite/Sewv6av"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/support-discord-brightgreen",alt:"Support"}))),Object(i.b)("p",null,"Compile and convert Data Package views specifications."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install datapackage-render\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import dprender from 'datapackage-render'\n\n// takes a vega spec that was written for datapackage and compiles data values\n// so it is ready and full Vega spec\nlet vegaSpec = dprender.compileVegaData(...)\n\n// takes a simple graph spec and generates a plotly spec\nlet plotlySpec = dprender.simpleToPlotly(...)\n\n// takes a recline spec and converts it into simple spec\nlet simpleSpec = dprender.convertReclineToSimple(...)\n\n// compile a view - normalize and compile data\nlet compiledView = dprender.compileView(...)\n\n// takes a [handson]table view and returns HandsOnTable spec\nlet hTableSpec = dprender.handsOnTableToHandsOnTable(...)\n\n// takes a reactVirtualized view and returns ReactVirtualized spec\nlet reactVirtualizedSpec = dprender.reactVirtualizedToReactVirtualized(...)\n")))}d.isMDXComponent=!0}}]);