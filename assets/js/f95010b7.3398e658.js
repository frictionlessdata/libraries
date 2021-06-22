(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{106:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(8),c=(t(0),t(112)),o=["components"],i={title:"datapackage-go"},p={unversionedId:"data-package/go",id:"data-package/go",isDocsHomePage:!1,title:"datapackage-go",description:"Build Status Coverage Status Go Report Card Gitter chat GoDoc Sourcegraph",source:"@site/docs/data-package/go.md",slug:"/data-package/go",permalink:"/docs/data-package/go",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/data-package/go.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1624378318,formattedLastUpdatedAt:"6/22/2021",sidebar:"data-package",previous:{title:"datapackage-java",permalink:"/docs/data-package/java"},next:{title:"datapackage-r",permalink:"/docs/data-package/rlang"}},s=[{value:"Install",id:"install",children:[]},{value:"Main Features",id:"main-features",children:[{value:"Loading and validating tabular data package descriptors",id:"loading-and-validating-tabular-data-package-descriptors",children:[]},{value:"Accessing data package resources",id:"accessing-data-package-resources",children:[]},{value:"Loading zip bundles",id:"loading-zip-bundles",children:[]},{value:"Creating a zip bundle with the data package.",id:"creating-a-zip-bundle-with-the-data-package",children:[]},{value:"CSV dialect support",id:"csv-dialect-support",children:[]},{value:"Loading multipart resources",id:"loading-multipart-resources",children:[]},{value:"Loading non-tabular resources",id:"loading-non-tabular-resources",children:[]},{value:"Manipulating data packages programatically",id:"manipulating-data-packages-programatically",children:[]}]}],l={toc:s};function d(e){var a=e.components,t=Object(r.a)(e,o);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/datapackage-go"},Object(c.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/datapackage-go.svg?branch=master",alt:"Build Status"}))," ",Object(c.b)("a",{parentName:"p",href:"https://coveralls.io/github/frictionlessdata/datapackage-go?branch=master"},Object(c.b)("img",{parentName:"a",src:"https://coveralls.io/repos/github/frictionlessdata/datapackage-go/badge.svg?branch=master",alt:"Coverage Status"}))," ",Object(c.b)("a",{parentName:"p",href:"https://goreportcard.com/report/github.com/frictionlessdata/datapackage-go"},Object(c.b)("img",{parentName:"a",src:"https://goreportcard.com/badge/github.com/frictionlessdata/datapackage-go",alt:"Go Report Card"}))," ",Object(c.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},Object(c.b)("img",{parentName:"a",src:"https://badges.gitter.im/gitterHQ/gitter.png",alt:"Gitter chat"}))," ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go"},Object(c.b)("img",{parentName:"a",src:"https://godoc.org/github.com/frictionlessdata/datapackage-go?status.svg",alt:"GoDoc"}))," ",Object(c.b)("a",{parentName:"p",href:"https://sourcegraph.com/github.com/frictionlessdata/datapackage-go?badge"},Object(c.b)("img",{parentName:"a",src:"https://sourcegraph.com/github.com/frictionlessdata/datapackage-go/-/badge.svg",alt:"Sourcegraph"}))),Object(c.b)("p",null,"A Go library for working with ",Object(c.b)("a",{parentName:"p",href:"http://specs.frictionlessdata.io/data-package/"},"Data Packages"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#datapackage-go"},"datapackage-go"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#install"},"Install")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#main-features"},"Main Features"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#loading-and-validating-tabular-data-package-descriptors"},"Loading and validating tabular data package descriptors")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#accessing-data-package-resources"},"Accessing data package resources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#loading-zip-bundles"},"Loading zip bundles")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#creating-a-zip-bundle-with-the-data-package"},"Creating a zip bundle with the data package.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#csv-dialect-support"},"CSV dialect support")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#loading-multipart-resources"},"Loading multipart resources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#loading-non-tabular-resources"},"Loading non-tabular resources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#manipulating-data-packages-programatically"},"Manipulating data packages programatically"))))))),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"$ go get -u github.com/frictionlessdata/datapackage-go/...\n")),Object(c.b)("h2",{id:"main-features"},"Main Features"),Object(c.b)("h3",{id:"loading-and-validating-tabular-data-package-descriptors"},"Loading and validating tabular data package descriptors"),Object(c.b)("p",null,"A ",Object(c.b)("a",{parentName:"p",href:"http://frictionlessdata.io/specs/data-package/"},"data package")," is a collection of ",Object(c.b)("a",{parentName:"p",href:"http://frictionlessdata.io/specs/data-resource/"},"resources"),". The ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package"},"datapackage.Package")," provides various capabilities like loading local or remote data package, saving a data package descriptor and many more."),Object(c.b)("p",null,"Consider we have some local csv file and a JSON descriptor in a ",Object(c.b)("inlineCode",{parentName:"p"},"data")," directory:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"data/population.csv"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",{parentName:"pre",className:"language-csv"},"city,year,population\nlondon,2017,8780000\nparis,2017,2240000\nrome,2017,2860000\n"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"data/datapackage.json"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "world",\n    "resources": [\n      {\n        "name": "population",\n        "path": "population.csv",\n        "profile":"tabular-data-resource",\n        "schema": {\n          "fields": [\n            {"name": "city", "type": "string"},\n            {"name": "year", "type": "integer"},\n            {"name": "population", "type": "integer"}\n          ]\n        }\n      }\n    ]\n  }\n'))),Object(c.b)("p",null,"Let's create a data package based on this data using the ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package"},"datapackage.Package")," class:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'pkg, err := datapackage.Load("data/datapackage.json")\n// Check error.\n')),Object(c.b)("h3",{id:"accessing-data-package-resources"},"Accessing data package resources"),Object(c.b)("p",null,"Once the data package is loaded, we could use the ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource"},"datapackage.Resource")," class to read data resource's contents:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'resource := pkg.GetResource("population")\ncontents, _ := resource.ReadAll()\nfmt.Println(contents)\n// [[london 2017 8780000] [paris 2017 2240000] [rome 20172860000]]\n')),Object(c.b)("p",null,"Or you could cast to Go types, making it easier to perform further processing:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'type Population struct {\n    City string `tableheader:"city"`\n    Year  string `tableheader:"year"`\n    Population   int    `tableheader:"population"`\n}\n\nvar cities []Population\nresource.Cast(&cities, csv.LoadHeaders())\nfmt.Printf("+v", cities)\n// [{City:london Year:2017 Population:8780000} {City:paris Year:2017 Population:2240000} {City:rome Year:2017 Population:2860000}]\n')),Object(c.b)("p",null,"If the data is to big to be loaded at once or if you would like to perform line-by-line processing, you could iterate through the resource contents:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'iter, _ := resource.Iter(csv.LoadHeaders())\nsch, _ := resource.GetSchema()\nfor iter.Next() {\n    var p Population\n    sch.CastRow(iter.Row(), &cp)\n    fmt.Printf("%+v\\n", p)\n}\n// {City:london Year:2017 Population:8780000\n// {City:paris Year:2017 Population:2240000}\n// {City:rome Year:2017 Population:2860000}]\n')),Object(c.b)("p",null,"Or you might want to process specific columns, for instance to perform an statical analysis:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'var population []float64\nresource.CastColumn("population", &population, csv.LoadHeaders())\nfmt.Println(ages)\n// Output: [8780000 2240000 2860000]\n')),Object(c.b)("h3",{id:"loading-zip-bundles"},"Loading zip bundles"),Object(c.b)("p",null,"It is very common to store the data in zip bundles containing the descriptor and data files. Those are natively supported by our the ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Load"},"datapackage.Load")," method. For example, lets say we have the following ",Object(c.b)("inlineCode",{parentName:"p"},"package.zip")," bundle:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"|- package.zip\n    |- datapackage.json\n    |- data.csv\n")),Object(c.b)("p",null,"We could load this package by simply:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'pkg, err := datapackage.Load("package.zip")\n// Check error.\n')),Object(c.b)("p",null,"And the library will unzip the package contents to a temporary directory and wire everything up for us."),Object(c.b)("p",null,"A complete example can be found ",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-go/tree/master/examples/load_zip"},"here"),"."),Object(c.b)("h3",{id:"creating-a-zip-bundle-with-the-data-package"},"Creating a zip bundle with the data package."),Object(c.b)("p",null,"You could also easily create a zip file containing the descriptor and all the data resources. Let's say you have a ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package"},"datapackage.Package")," instance, to create a zip file containing all resources simply:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'err := pkg.Zip("package.zip")\n// Check error.\n')),Object(c.b)("p",null,"This call also download remote resources. A complete example can be found ",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-go/tree/master/examples/zip"},"here")),Object(c.b)("h3",{id:"csv-dialect-support"},"CSV dialect support"),Object(c.b)("p",null,"Basic support for configuring ",Object(c.b)("a",{parentName:"p",href:"http://frictionlessdata.io/specs/csv-dialect/"},"CSV dialect")," has been added. In particular ",Object(c.b)("inlineCode",{parentName:"p"},"delimiter"),", ",Object(c.b)("inlineCode",{parentName:"p"},"skipInitialSpace")," and ",Object(c.b)("inlineCode",{parentName:"p"},"header")," fields are supported. For instance, lets assume the population file has a different field delimiter:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"data/population.csv"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",{parentName:"pre",className:"language-csv"},"city,year,population\nlondon;2017;8780000\nparis;2017;2240000\nrome;2017;2860000\n"))),Object(c.b)("p",null,"One could easily parse by adding following ",Object(c.b)("inlineCode",{parentName:"p"},"dialect")," property to the ",Object(c.b)("inlineCode",{parentName:"p"},"world")," resource:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'    "dialect":{\n        "delimiter":";"\n    }\n')),Object(c.b)("p",null,"A complete example can be found ",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-go/tree/master/examples/load"},"here"),"."),Object(c.b)("h3",{id:"loading-multipart-resources"},"Loading multipart resources"),Object(c.b)("p",null,"Sometimes you have data scattered across many local or remote files. Datapackage-go offers an easy way you to deal all those file as one big\nfile. We call it multipart resources. To use this feature, simply list your files in the ",Object(c.b)("inlineCode",{parentName:"p"},"path")," property of the resource. For example, lets\nsay our population data is now split between north and south hemispheres. To deal with this, we only need change to change the package descriptor:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"data/datapackage.json"),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "world",\n    "resources": [\n      {\n        "name": "population",\n        "path": ["north.csv","south.csv"],\n        "profile":"tabular-data-resource",\n        "schema": {\n          "fields": [\n            {"name": "city", "type": "string"},\n            {"name": "year", "type": "integer"},\n            {"name": "population", "type": "integer"}\n          ]\n        }\n      }\n    ]\n  }\n'))),Object(c.b)("p",null,"And all the rest of the code would still be working."),Object(c.b)("p",null,"A complete example can be found ",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-go/tree/master/examples/multipart"},"here"),"."),Object(c.b)("h3",{id:"loading-non-tabular-resources"},"Loading non-tabular resources"),Object(c.b)("p",null,"A ",Object(c.b)("a",{parentName:"p",href:"https://frictionlessdata.io/data-packages/"},"Data package")," is a container format used to describe and package a collection of data. Even though there is additional support for dealing with tabular resources, it can be used to package any kind of data."),Object(c.b)("p",null,"For instance, lets say an user needs to load JSON-LD information along with some tabular data (for more on this use case, please take a look at ",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-go/issues/13"},"this")," issue). That can be packed together in a data package descriptor:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "carp-lake",\n    "title": "Carp Lake Title",\n    "description": "Tephra and Lithology from Carp Lake",\n    "resources": [\n      {\n        "name":"data",\n        "path": "data/carpLakeCoreStratigraphy.csv",\n        "format": "csv",\n        "schema": {\n          "fields": [\n            {"name": "depth", "type": "number"},\n            {"name": "notes", "type": "text"},\n            {"name": "core_segments", "type": "text"}\n          ]\n        }\n      },\n      {\n        "name": "schemaorg",\n        "path": "data/schemaorg-ld.json",\n        "format": "application/ld+json"\n      }\n    ]\n}\n')),Object(c.b)("p",null,"The package loading proceeds as usual."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'pkg, err := datapackage.Load("data/datapackage.json")\n// Check error.\n')),Object(c.b)("p",null,"Once the data package is loaded, we could use the ",Object(c.b)("a",{parentName:"p",href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource.GetSchema"},"Resource.RawRead")," method to access ",Object(c.b)("inlineCode",{parentName:"p"},"schemaorg")," resource contents as a byte slice."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'so := pkg.GetResource("schemaorg")\nrc, _ := so.RawRead()\ndefer rc.Close()\ncontents, _ := ioutil.ReadAll(rc)\n// Use contents. For instance, one could validate the JSON-LD schema and unmarshal it into a data structure.\n\ndata := pkg.GetResource("data")\ndataContents, err := data.ReadAll()\n// As data is a tabular resource, its content can be loaded as [][]string.\n')),Object(c.b)("h3",{id:"manipulating-data-packages-programatically"},"Manipulating data packages programatically"),Object(c.b)("p",null,"The datapackage-go library also makes it easy to save packages. Let's say you're creating a program that produces data packages and would like to add or remove resource:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-go"},'descriptor := map[string]interface{}{\n    "resources": []interface{}{\n        map[string]interface{}{\n            "name":    "books",\n            "path":    "books.csv",\n            "format":  "csv",\n            "profile": "tabular-data-resource",\n            "schema": map[string]interface{}{\n                "fields": []interface{}{\n                    map[string]interface{}{"name": "author", "type": "string"},\n                    map[string]interface{}{"name": "title", "type": "string"},\n                    map[string]interface{}{"name": "year", "type": "integer"},\n                },\n            },\n        },\n    },\n}\npkg, err := datapackage.New(descriptor, ".", validator.InMemoryLoader())\nif err != nil {\n    panic(err)\n}\n// Removing resource.\npkg.RemoveResource("books")\n\n// Adding new resource.\npkg.AddResource(map[string]interface{}{\n    "name":    "cities",\n    "path":    "cities.csv",\n    "format":  "csv",\n    "profile": "tabular-data-resource",\n    "schema": map[string]interface{}{\n        "fields": []interface{}{\n            map[string]interface{}{"name": "city", "type": "string"},\n            map[string]interface{}{"name": "year", "type": "integer"},\n            map[string]interface{}{"name": "population", "type": "integer"}\n        },\n    },\n})\n\n// Printing resource contents.\ncities, _ := pkg.GetResource("cities").ReadAll()\nfmt.Println(cities)\n// [[london 2017 8780000] [paris 2017 2240000] [rome 20172860000]]\n')))}d.isMDXComponent=!0},112:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},g=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),g=n,u=d["".concat(o,".").concat(g)]||d[g]||b[g]||c;return t?r.a.createElement(u,i(i({ref:a},s),{},{components:t})):r.a.createElement(u,i({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);