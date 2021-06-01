(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(113)),i=["components"],c={title:"goodread-py"},d={unversionedId:"other-libraries/goodread",id:"other-libraries/goodread",isDocsHomePage:!1,title:"goodread-py",description:"Build",source:"@site/docs/other-libraries/goodread.md",slug:"/other-libraries/goodread",permalink:"/docs/other-libraries/goodread",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/other-libraries/goodread.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1622550650,formattedLastUpdatedAt:"6/1/2021",sidebar:"other-libraries",previous:{title:"datapackage-render-js",permalink:"/docs/other-libraries/data-package-render"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Features",id:"features",children:[]},{value:"Example",id:"example",children:[]},{value:"Documentation",id:"documentation",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/goodread/actions"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/frictionlessdata/goodread/general/main",alt:"Build"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://codecov.io/gh/frictionlessdata/goodread"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/codecov/c/github/frictionlessdata/goodread/main",alt:"Coverage"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/goodread"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/goodread.svg",alt:"Registry"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/goodread"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/codebase-github-brightgreen",alt:"Codebase"})),"\n",Object(o.b)("a",{parentName:"p",href:"https://discord.com/channels/695635777199145130/695635777199145133"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/support-discord-brightgreen",alt:"Support"}))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This software is in the early stages and not well-tested")),Object(o.b)("p",null,"Goodread executes Python and Bash codeblocks in Markdown and writes the results back."),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Write your documentation"),": You can write Python and Bash codeblocks in your Markdown documentation without executing it. Goodread will run them and add or update the results in-line."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test your documentation"),": It's commonplace when documentation gets buggy and outdated during software development. You can incorporate Goodread into your testing system to ensure correctness of your documentation.")),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open Source (MIT)"),Object(o.b)("li",{parentName:"ul"},"Solves one problem well"),Object(o.b)("li",{parentName:"ul"},"Simple command-line interface")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ goodread README.md\n# Python and Bash executed and the results have been written back\n")),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"This document and docstrings provide all available documentation for the project."))}p.isMDXComponent=!0}}]);