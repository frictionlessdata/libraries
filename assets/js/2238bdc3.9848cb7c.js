(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return a?n.a.createElement(u,i(i({ref:t},c),{},{components:a})):n.a.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(112)),o=["components"],i={title:"tableschema-r"},s={unversionedId:"table-schema/rlang",id:"table-schema/rlang",isDocsHomePage:!1,title:"tableschema-r",description:"CRAN\\Status\\Badge",source:"@site/docs/table-schema/rlang.md",slug:"/table-schema/rlang",permalink:"/docs/table-schema/rlang",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/table-schema/rlang.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1622451895,formattedLastUpdatedAt:"5/31/2021",sidebar:"table-schema",previous:{title:"tableschema-go",permalink:"/docs/table-schema/go"},next:{title:"tableschema-jl",permalink:"/docs/table-schema/julia"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Load library",id:"load-library",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,o);return Object(l.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://cran.r-project.org/package=tableschema.r"},Object(l.b)("img",{parentName:"a",src:"https://www.r-pkg.org/badges/version/tableschema.r",alt:"CRAN_Status_Badge"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/tableschema-r"},Object(l.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/tableschema-r.svg?branch=master",alt:"Build\nStatus"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://coveralls.io/r/frictionlessdata/tableschema-r?branch=master"},Object(l.b)("img",{parentName:"a",src:"https://coveralls.io/repos/github/frictionlessdata/tableschema-r/badge.svg",alt:"Coverage\nstatus"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-r/issues"},Object(l.b)("img",{parentName:"a",src:"http://githubbadges.herokuapp.com/frictionlessdata/tableschema-r/issues.svg",alt:"Github\nIssues"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-r/pulls"},Object(l.b)("img",{parentName:"a",src:"http://githubbadges.herokuapp.com/frictionlessdata/tableschema-r/pulls.svg",alt:"Pending\nPull-Requests"})),"\n",Object(l.b)("a",{parentName:"p",href:"http://www.repostatus.org/#active"},Object(l.b)("img",{parentName:"a",src:"http://www.repostatus.org/badges/latest/active.svg",alt:"Project Status: Active \u2013 The project has reached a stable, usable\nstate and is being actively\ndeveloped."})),"\n",Object(l.b)("a",{parentName:"p",href:"https://cran.r-project.org/"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/R%3E%3D-3.6-6666ff.svg",alt:"minimal R\nversion"})),"\n",Object(l.b)("a",{parentName:"p",href:"http://www.rdocumentation.org/packages/tableschema.r"},Object(l.b)("img",{parentName:"a",src:"http://www.rdocumentation.org/badges/version/tableschema.r",alt:"Rdoc"})),"\n",Object(l.b)("a",{parentName:"p",href:"http://cran.rstudio.com/web/packages/tableschema.r/index.html"},Object(l.b)("img",{parentName:"a",src:"http://cranlogs.r-pkg.org/badges/grand-total/tableschema.r",alt:null})),"\n",Object(l.b)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/licence-MIT-blue.svg",alt:"Licence"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/gitter/room/nwjs/nw.js.svg",alt:"Gitter"}))),Object(l.b)("h1",{id:"description"},"Description"),Object(l.b)("p",null,"R library for working with ",Object(l.b)("a",{parentName:"p",href:"http://specs.frictionlessdata.io/table-schema/"},"Table\nSchema"),"."),Object(l.b)("h1",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Table")," class for working with data and schema"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Schema")," class for working with schemas"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Field")," class for working with schema fields"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"validate")," function for validating schema descriptors"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"infer")," function that creates a schema based on a data sample")),Object(l.b)("h1",{id:"getting-started"},"Getting started"),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"In order to install the latest distribution of ",Object(l.b)("a",{parentName:"p",href:"https://www.r-project.org/"},"R\nsoftware")," to your computer you have to\nselect one of the mirror sites of the ",Object(l.b)("a",{parentName:"p",href:"https://cran.r-project.org/"},"Comprehensive R Archive\nNetwork"),", select the appropriate link for\nyour operating system and follow the wizard instructions."),Object(l.b)("p",null,"For windows users you can:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Go to CRAN"),Object(l.b)("li",{parentName:"ol"},"Click download R for Windows"),Object(l.b)("li",{parentName:"ol"},"Click Base (This is what you want to install R for the first time)"),Object(l.b)("li",{parentName:"ol"},"Download the latest R version"),Object(l.b)("li",{parentName:"ol"},"Run installation file and follow the instrustions of the installer.")),Object(l.b)("p",null,"(Mac) OS X and Linux users may need to follow different steps depending\non their system version to install R successfully and it is recommended\nto read the instructions on CRAN site carefully."),Object(l.b)("p",null,"Even more detailed installation instructions can be found in ",Object(l.b)("a",{parentName:"p",href:"https://cran.r-project.org/doc/manuals/R-admin.html"},"R\nInstallation and Administration\nmanual"),"."),Object(l.b)("p",null,"To install ",Object(l.b)("a",{parentName:"p",href:"https://www.rstudio.com/"},"RStudio"),", you can download\n",Object(l.b)("a",{parentName:"p",href:"https://www.rstudio.com/products/rstudio/download/"},"RStudio Desktop"),"\nwith Open Source License and follow the wizard instructions:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Go to ",Object(l.b)("a",{parentName:"li",href:"https://www.rstudio.com/products/rstudio/"},"RStudio")),Object(l.b)("li",{parentName:"ol"},"Click download on RStudio Desktop"),Object(l.b)("li",{parentName:"ol"},"Download on RStudio Desktop free download"),Object(l.b)("li",{parentName:"ol"},"Select the appropriate file for your system"),Object(l.b)("li",{parentName:"ol"},"Run installation file")),Object(l.b)("p",null,"To install the ",Object(l.b)("inlineCode",{parentName:"p"},"tableschema")," library it is necessary to install first\n",Object(l.b)("inlineCode",{parentName:"p"},"devtools")," library to make installation of github libraries available."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},'# Install devtools package if not already\ninstall.packages("devtools")\n')),Object(l.b)("p",null,"Install ",Object(l.b)("inlineCode",{parentName:"p"},"tableschema.r")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},'# from CRAN version\ninstall.packages("tableschema.r")\n\n# or install the development version from github\ndevtools::install_github("frictionlessdata/tableschema-r")\n')),Object(l.b)("h2",{id:"load-library"},"Load library"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-r"},'# Install devtools package if not already\n# install.packages("jsonlite")\nlibrary(jsonlite)\n# Install devtools package if not already\n# install.packages("future")\nlibrary(future)\n# load the library using\nlibrary(tableschema.r)\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"TODO: fix unicode error")))}p.isMDXComponent=!0}}]);