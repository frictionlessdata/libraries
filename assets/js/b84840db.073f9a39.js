(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=r,g=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return a?n.a.createElement(g,s(s({ref:t},o),{},{components:a})):n.a.createElement(g,s({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var o=2;o<i;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(8),i=(a(0),a(112)),c=["components"],s={title:"datapackage-julia"},l={unversionedId:"data-package/julia",id:"data-package/julia",isDocsHomePage:!1,title:"datapackage-julia",description:"Travis",source:"@site/docs/data-package/julia.md",slug:"/data-package/julia",permalink:"/docs/data-package/julia",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/data-package/julia.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1624378318,formattedLastUpdatedAt:"6/22/2021",sidebar:"data-package",previous:{title:"datapackage-r",permalink:"/docs/data-package/rlang"},next:{title:"datapackage-swift",permalink:"/docs/data-package/swift"}},o=[{value:"Features",id:"features",children:[{value:"Status",id:"status",children:[]}]}],p={toc:o};function b(e){var t=e.components,a=Object(n.a)(e,c);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/DataPackage.jl"},Object(i.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/DataPackage.jl.svg?branch=master",alt:"Travis"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://coveralls.io/r/frictionlessdata/DataPackage.jl?branch=master"},Object(i.b)("img",{parentName:"a",src:"http://img.shields.io/coveralls/frictionlessdata/DataPackage.jl.svg?branch=master",alt:"Coveralls"})),"\n",Object(i.b)("a",{parentName:"p",href:"http://semver.org/"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/versions-SemVer-brightgreen.svg",alt:"SemVer"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/gitter/room/frictionlessdata/chat.svg",alt:"Gitter"}))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://pkg.julialang.org/?pkg=datapackage&ver=0.6"},Object(i.b)("img",{parentName:"a",src:"http://pkg.julialang.org/badges/JSON_0.6.svg",alt:"Julia Pkg"}))),Object(i.b)("p",null,"A library for working with ",Object(i.b)("a",{parentName:"p",href:"http://specs.frictionlessdata.io/data-package/"},"Data Packages")," in Julia."),Object(i.b)("p",null,"Initially this package is primarily targeted and depends on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/TableSchema.jl"},"TableSchema.jl"),", where you can find the common ",Object(i.b)("a",{parentName:"p",href:"https://github.com/loleg/TableSchema.jl/blob/master/DESIGN.md"},"Design Document")," for these libraries. Support for other types of data packages is to follow."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Package")," class for working with data packages"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Resource")," class for working with data resources"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Profile")," class for working with profiles"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"validate")," function for validating data package descriptors"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infer")," function for inferring data package descriptors")),Object(i.b)("h3",{id:"status"},"Status"),Object(i.b)("p",null,"\ud83d\udea7 This package is pre-release and under heavy development. Please visit the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/DataPackage.jl/issues"},"issues page")," to contribute and make suggestions. For questions that need to a real time response, reach out via ",Object(i.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},"Gitter"),". Thanks! \ud83d\udea7"),Object(i.b)("p",null,"Please visit ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/DataPackage.jl/wiki"},"our wiki")," for a list of related projects that we are tracking, and suggest use cases there or as enhancement ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/DataPackage.jl/issues"},"issues"),"."),Object(i.b)("h1",{id:"usage"},"Usage"),Object(i.b)("p",null,"Install the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://github.com/frictionlessdata/TableSchema.jl"},"TableSchema"))," package."),Object(i.b)("p",null,"Clone this repository and enter it:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$ git clone https://github.com/frictionlessdata/DataPackage.jl && cd DataPackage.jl")),Object(i.b)("p",null,"See ",Object(i.b)("em",{parentName:"p"},"examples")," folder and unit tests in ",Object(i.b)("a",{parentName:"p",href:"test/runtests.jl"},"runtests.jl")," for current usage, e.g.:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$ julia examples/basic.jl")),Object(i.b)("p",null,"Running tests:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"$ julia -L src/DataPackage.jl test/runtests.jl")))}b.isMDXComponent=!0}}]);