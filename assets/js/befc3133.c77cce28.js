(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(113)),l=["components"],c={title:"tableschema-jl"},s={unversionedId:"table-schema/julia",id:"table-schema/julia",isDocsHomePage:!1,title:"tableschema-jl",description:"Travis",source:"@site/docs/table-schema/julia.md",slug:"/table-schema/julia",permalink:"/docs/table-schema/julia",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/table-schema/julia.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1643878219,formattedLastUpdatedAt:"2/3/2022",sidebar:"table-schema",previous:{title:"tableschema-r",permalink:"/docs/table-schema/rlang"},next:{title:"tableschema-swift",permalink:"/docs/table-schema/swift"}},o=[{value:"Features",id:"features",children:[]},{value:"Status",id:"status",children:[]},{value:"Table",id:"table",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Field",id:"field",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Development",id:"development",children:[]}],b={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/TableSchema.jl"},Object(i.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/TableSchema.jl.svg?branch=master",alt:"Travis"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://coveralls.io/r/frictionlessdata/TableSchema.jl?branch=master"},Object(i.b)("img",{parentName:"a",src:"http://img.shields.io/coveralls/frictionlessdata/TableSchema.jl.svg?branch=master",alt:"Coveralls"})),"\n",Object(i.b)("a",{parentName:"p",href:"http://semver.org/"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/versions-SemVer-brightgreen.svg",alt:"SemVer"})),"\n",Object(i.b)("a",{parentName:"p",href:"http://pkg.julialang.org/?pkg=tableschema&ver=1.0"},Object(i.b)("img",{parentName:"a",src:"http://pkg.julialang.org/badges/JSON_1.0.svg",alt:"Release"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-jl"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/codebase-github-brightgreen",alt:"Codebase"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://discordapp.com/invite/Sewv6av"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/support-discord-brightgreen",alt:"Support"}))),Object(i.b)("p",null,"A library for working with ",Object(i.b)("a",{parentName:"p",href:"http://specs.frictionlessdata.io/table-schema/"},"Table Schema")," in Julia:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Table Schema is a simple language- and implementation-agnostic way to declare a schema for tabular data. Table Schema is well suited for use cases around handling and validating tabular data in text formats such as CSV, but its utility extends well beyond this core usage, towards a range of applications where data benefits from a portable schema format.")),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Table")," class for working with data and schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Schema")," class for working with schemata"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Field")," class for working with schema fields"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"validate")," function for validating schema descriptors"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"infer")," function that creates a schema based on a data sample")),Object(i.b)("h3",{id:"status"},"Status"),Object(i.b)("p",null,"\ud83d\udea7 This package is pre-release and under heavy development. Please see ",Object(i.b)("a",{parentName:"p",href:"DESIGN.md"},"DESIGN.md")," for a detailed overview of our goals, and visit the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/TableSchema.jl/issues"},"issues page")," to contribute and make suggestions. For questions that need to a real time response, reach out via ",Object(i.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},"Gitter"),". Thanks! \ud83d\udea7"),Object(i.b)("p",null,"We aim to make this library compatible with all widely used approaches to work with tabular data in Julia."),Object(i.b)("p",null,"Please visit ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/DataPackage.jl/wiki"},"our wiki")," for a list of related projects that we are tracking, and contibute use cases there or as enhancement ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/TableSchema.jl/issues"},"issues"),"."),Object(i.b)("h1",{id:"usage"},"Usage"),Object(i.b)("p",null,"See ",Object(i.b)("inlineCode",{parentName:"p"},"examples")," folder and unit tests in ",Object(i.b)("a",{parentName:"p",href:"test/runtests.jl"},"runtests.jl")," for current usage."),Object(i.b)("h2",{id:"table"},"Table"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Julia"},'using TableSchema\n\ntable = Table("cities.csv")\ntable.headers\n# [\'city\', \'location\']\ntable.read(keyed=True)\n# [\n#   {city: \'london\', location: \'51.50,-0.11\'},\n#   {city: \'paris\', location: \'48.85,2.30\'},\n#   {city: \'rome\', location: \'N/A\'},\n# ]\nrows = table.source\n# 6\xd75 Array{Any,2}:\n#   "id"    "height"   "age"  "name"     "occupation"         \n#  1      10.0        1       "string1"  "2012-06-15 00:00:00"\n#  2      10.1        2       "string2"  "2013-06-15 01:00:00"\n# ...\nerr = table.errors # handle errors\n...\n')),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Julia"},'schema = Schema("schema.json")\nschema.fields\n# <Field1, Field2...>\nerr = schema.errors # handle errors\n')),Object(i.b)("h2",{id:"field"},"Field"),Object(i.b)("p",null,"Add fields to create or expand your schema like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-Julia"},'schema = Schema()\nfield = Field()\nfield.descriptor._name = "A column"\nfield.descriptor.typed = "Integer"\nadd_field(schema, field)\n')),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"\ud83d\udea7 Work In Progress. The following documentation is relevant only after package release. In the interim, please see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/DataPackage.jl"},"DataPackage.jl")),Object(i.b)("p",null,"The package use semantic versioning, meaning that major versions could include breaking changes. It is highly recommended to specify a version range in your ",Object(i.b)("inlineCode",{parentName:"p"},"REQUIRE")," file e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'v"0.0.1-" <= TableSchema < v"1.0.0-"\n')),Object(i.b)("p",null,"At the Julia REPL, install the package with:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'(v1.0) pkg> add "https://github.com/loleg/TableSchema.jl"')),Object(i.b)("h2",{id:"development"},"Development"),Object(i.b)("p",null,"Code examples here require ",Object(i.b)("strong",{parentName:"p"},"Julia 0.7"),", as we are now migrating to Julia 1.0. See ",Object(i.b)("a",{parentName:"p",href:"https://docs.julialang.org/en/v1.0.0/stdlib/Pkg/#Creating-your-own-packages-1"},"Pkg documentation")," for further information."),Object(i.b)("p",null,"Clone this repository, enter the REPL (press ",Object(i.b)("inlineCode",{parentName:"p"},"]")," at the Julia prompt) to activate and test it using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"cd <path-to-my-folder>/TableSchema.jl\njulia\n# Press ]\n(v1.0) pkg> activate .\n(TableSchema) pkg> test\n")),Object(i.b)("p",null,"You can also install the package locally and run unit tests from the console:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(v1.0) pkg> add .\njulia test/runtests.jl\n")),Object(i.b)("p",null,"A new feature of Julia's package manager is the ",Object(i.b)("strong",{parentName:"p"},"dev")," command. To get a copy of this package installed into your ",Object(i.b)("inlineCode",{parentName:"p"},"~/.julia")," folder and updated with every change, use:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(v1.0) pkg> dev TableSchema")))}p.isMDXComponent=!0},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(u,c(c({ref:t},o),{},{components:a})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);