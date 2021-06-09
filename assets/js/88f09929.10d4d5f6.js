(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return a?n.a.createElement(g,b(b({ref:t},o),{},{components:a})):n.a.createElement(g,b({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<i;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),i=(a(0),a(114)),l=["components"],b={title:"datapackage-swift"},c={unversionedId:"data-package/swift",id:"data-package/swift",isDocsHomePage:!1,title:"datapackage-swift",description:"TravisCI Build Status",source:"@site/docs/data-package/swift.md",slug:"/data-package/swift",permalink:"/docs/data-package/swift",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/data-package/swift.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1623253062,formattedLastUpdatedAt:"6/9/2021",sidebar:"data-package",previous:{title:"datapackage-julia",permalink:"/docs/data-package/julia"},next:{title:"datapackage-clj",permalink:"/docs/data-package/clojure"}},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Implementation Status",id:"implementation-status",children:[{value:"High-Level Status",id:"high-level-status",children:[]},{value:"Data Package Profile Status",id:"data-package-profile-status",children:[]},{value:"Tabular Data Package Profile Status",id:"tabular-data-package-profile-status",children:[]}]},{value:"Command Line Interface",id:"command-line-interface",children:[]},{value:"Integrating into Your Project",id:"integrating-into-your-project",children:[{value:"Swift Package Manager",id:"swift-package-manager",children:[]}]},{value:"Example Usage",id:"example-usage",children:[{value:"Instantiation",id:"instantiation",children:[]},{value:"Serialization",id:"serialization",children:[]}]},{value:"Understanding the Library",id:"understanding-the-library",children:[{value:"Model Checking (Validation and Verification)",id:"model-checking-validation-and-verification",children:[]},{value:"Model Representation",id:"model-representation",children:[]},{value:"A Word on Swift Libraries",id:"a-word-on-swift-libraries",children:[]}]}],p={toc:o};function d(e){var t=e.components,a=Object(n.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/datapackage-swift"},Object(i.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/datapackage-swift.svg?branch=master",alt:"TravisCI Build Status"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://coveralls.io/github/frictionlessdata/datapackage-swift?branch=master"},Object(i.b)("img",{parentName:"a",src:"https://coveralls.io/repos/github/frictionlessdata/datapackage-swift/badge.svg?branch=master",alt:"Coveralls Coverage Status"}))),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"draft")," Swift library for working with ",Object(i.b)("a",{parentName:"p",href:"https://frictionlessdata.io/specs/data-package/"},"Data Packages"),". It also includes a profile for ",Object(i.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/tabular-data-package/"},"Tabular Data Package")," in conjunction with the corresponding ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-swift"},"Table Schema")," library."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Source compatibility with Swift 4.2"),Object(i.b)("li",{parentName:"ul"},"Target platforms",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Apple platforms, specifically iOS and macOS",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Full functionality in iOS >= 10 and macOS >= 10.12"))),Object(i.b)("li",{parentName:"ul"},"Linux, limited by feature availability in ",Object(i.b)("inlineCode",{parentName:"li"},"swift-corelibs-foundation")))),Object(i.b)("li",{parentName:"ul"},"Apple's ",Object(i.b)("inlineCode",{parentName:"li"},"Foundation")," framework is the only dependency")),Object(i.b)("h2",{id:"implementation-status"},"Implementation Status"),Object(i.b)("h3",{id:"high-level-status"},"High-Level Status"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Feature"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Read/Write Data Package JSON descriptor"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Tabular Data Package profile"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Validation"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Validation against JSON Schema"),Object(i.b)("td",{parentName:"tr",align:"left"},"Missing")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Retrieving Remote Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Missing, consumer may handle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Verification"),Object(i.b)("td",{parentName:"tr",align:"left"},"Mostly Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Strict Mode"),Object(i.b)("td",{parentName:"tr",align:"left"},"Partial, through log levels")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Schema Inference"),Object(i.b)("td",{parentName:"tr",align:"left"},"Missing")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Zipping"),Object(i.b)("td",{parentName:"tr",align:"left"},"Missing")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Additional/Custom Properties"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Extension through Profiles"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")))),Object(i.b)("p",null,"This is a ",Object(i.b)("em",{parentName:"p"},"draft")," implementation of Data Package and Tabular Data Package. It initially implemented a subset of features for use to serialize (and deserialize) a database into a human-usable format. It has since been expanded for more general use. Although this implementation provides access to all attributes in the spec, it has deprioritized some features, notably anything involving networking and schema verification."),Object(i.b)("p",null,"The general strategy is to implement features only as needed."),Object(i.b)("h3",{id:"data-package-profile-status"},"Data Package Profile Status"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Feature"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Additional/Custom Properties"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Name"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, no validation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Id"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Licenses"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Title"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Description"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, no validation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Homepage"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Version"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, no semantic version validation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Sources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Contributors"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Keywords"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Image"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Created"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available","*")))),Object(i.b)("p",null,"*"," Only available on Apple products (iOS >= 10 and macOS >= 10.12) due to an incomplete Linux implementation in ",Object(i.b)("inlineCode",{parentName:"p"},"swift-corelibs-foundation"),". Fractional seconds currently unsupported."),Object(i.b)("h4",{id:"data-resource-profile-status"},"Data Resource Profile Status"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Feature"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Locally Bundled Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Retrieving Remote Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Consumer must handle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Inline Data"),Object(i.b)("td",{parentName:"tr",align:"left"},"Consumer must interpret")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Multiple Paths per Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Consumer must handle")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Path"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, no validation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Data"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, but consumer may interpret")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Name"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, no validation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Title"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Description"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Format"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Mediatype"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Encoding"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Bytes"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, but consumer should validate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Hash"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, but consumer should validate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Sources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Licenses"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Schema"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, but consumer may interpret")))),Object(i.b)("h3",{id:"tabular-data-package-profile-status"},"Tabular Data Package Profile Status"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Feature"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"CSV Support"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available, requires external CSV library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"left"})))),Object(i.b)("h4",{id:"tabular-data-resource-profile-status"},"Tabular Data Resource Profile Status"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Feature"),Object(i.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Table Schema"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"CSV Dialect"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Locally Bundled Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Available")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Retrieving Remote Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Consumer must handle")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Inline Data"),Object(i.b)("td",{parentName:"tr",align:"left"},"Consumer must interpret")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Multiple Paths per Resources"),Object(i.b)("td",{parentName:"tr",align:"left"},"Consumer must handle")))),Object(i.b)("h5",{id:"table-schema-status"},"Table Schema Status"),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-swift"},"Table Schema"),"."),Object(i.b)("h2",{id:"command-line-interface"},"Command Line Interface"),Object(i.b)("p",null,"A simple CLI tool is included which uses this library to display package validation warnings and errors and optionally re-export."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make\nmake install\ndatapackage-swift path/to/package\n")),Object(i.b)("h2",{id:"integrating-into-your-project"},"Integrating into Your Project"),Object(i.b)("h3",{id:"swift-package-manager"},"Swift Package Manager"),Object(i.b)("p",null,"This project is set up using ",Object(i.b)("a",{parentName:"p",href:"https://swift.org/package-manager/"},"Swift Package Manager"),". Ideally add it to your project's SPM dependencies or use Xcode's integrated Swift Package Manager. Alternatively, generate your own Xcode ",Object(i.b)("inlineCode",{parentName:"p"},".xcodeproj")," to integrate with your build system using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"swift package generate-xcodeproj --xcconfig-overrides ./Configuration.xcconfig\n")),Object(i.b)("h2",{id:"example-usage"},"Example Usage"),Object(i.b)("h3",{id:"instantiation"},"Instantiation"),Object(i.b)("p",null,"A package can be instantiated from a JSON descriptor:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'let registry = Registry(default: Package.self)\nregistry.add(profile: Package.self)\nregistry.add(profile: TabularDataPackage.self)\n\nvar importURL = URL(fileURLWithPath: "./")\nimportURL.appendPathComponent("2017-12-14", isDirectory: true)\n\nvar log = Log()\n\nguard let package = Package.package(url: importURL, registry: registry, log: &log) else {\n    // Error\n}\n')),Object(i.b)("p",null,"Or it may be instantiated directly:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"let package = Package()\n")),Object(i.b)("h3",{id:"serialization"},"Serialization"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'var exportURL = URL(fileURLWithPath: "./")\nexportURL.appendPathComponent("2017-12-15", isDirectory: true)\n\nguard package.save(to: exportURL) else {\n    // Error\n}\n')),Object(i.b)("h2",{id:"understanding-the-library"},"Understanding the Library"),Object(i.b)("h3",{id:"model-checking-validation-and-verification"},"Model Checking (Validation and Verification)"),Object(i.b)("p",null,"The library makes a distinction between validation and verification: Validation corresponds to the validity of the model at instantiation when it is deserialized from a JSON descriptor. Whereas verification corresponds to validity of the model at some point in time after instantiation."),Object(i.b)("p",null,"The distinction is helpful because the specification imposes some constraints on a model that may not all be resolvable at compile time. Examples include whether the value of a required property is inappropriately formatted, or a property whose existence is conditional on another property. Additionally, the models should allow for transitioning as the model is updated to a new state. As such, it is necessary to check for validity at instantiation and through a model verification step while using the model."),Object(i.b)("p",null,"Two methods are used for model checking. First, some initializers are failable. Second, a log is exposed that denotes errors and warnings about the model."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"var log = Log()\n\nlet package = Package.package(url: importURL, registry: registry, log: &log)\nlet package?.verify(log: &log)\n\nfor item in log.items {\n    print(item.message)\n}\n")),Object(i.b)("p",null,"Logs are leveled by severity with errors resulting in models not being instantiated. An error corresponds to a ",Object(i.b)("inlineCode",{parentName:"p"},"MUST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"MUST NOT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REQUIRED"),", ",Object(i.b)("inlineCode",{parentName:"p"},"SHALL"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"SHALL NOT")," in the specification. A warning corresponds to ",Object(i.b)("inlineCode",{parentName:"p"},"SHOULD"),", ",Object(i.b)("inlineCode",{parentName:"p"},"SHOULD NOT"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"RECOMMENDED"),"."),Object(i.b)("h3",{id:"model-representation"},"Model Representation"),Object(i.b)("p",null,"Rather than a model instance maintaining an underlying JSON descriptor that is modified when accessing various properties, this library decodes the JSON descriptor to model objects. This has implications for serialization where exporting of the model is not stable: Unchanged properties may be altered, and the ordering and formatting of properties may not be preserved."),Object(i.b)("h3",{id:"a-word-on-swift-libraries"},"A Word on Swift Libraries"),Object(i.b)("p",null,"Swift 5 is source compatible with Swift 4 and the history has been that each new Swift version is source compatible with the last. Although ABI stability, module stability, and library evolution support are ongoing issues that address compatibility concerns over authoring and consumption of libraries, in practice binary compatibility is less of a concern than source code compatibility since code for this library is available. Additionally, Swift 5's ABI stability is only available on Apple's platforms -- other platforms like Linux are to implement it separately."))}d.isMDXComponent=!0}}]);