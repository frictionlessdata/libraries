(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),s=n,j=d["".concat(b,".").concat(s)]||d[s]||m[s]||l;return a?r.a.createElement(j,i(i({ref:t},p),{},{components:a})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(113)),b=["components"],i={title:"tableschema-swift"},c={unversionedId:"table-schema/swift",id:"table-schema/swift",isDocsHomePage:!1,title:"tableschema-swift",description:"Build",source:"@site/docs/table-schema/swift.md",slug:"/table-schema/swift",permalink:"/docs/table-schema/swift",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/table-schema/swift.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1642068326,formattedLastUpdatedAt:"1/13/2022",sidebar:"table-schema",previous:{title:"tableschema-jl",permalink:"/docs/table-schema/julia"},next:{title:"tableschema-clj",permalink:"/docs/table-schema/clojure"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Implementation Status",id:"implementation-status",children:[{value:"Feature Status",id:"feature-status",children:[]},{value:"Casting Field Types and Formats Status",id:"casting-field-types-and-formats-status",children:[]}]},{value:"Integration into Your Project",id:"integration-into-your-project",children:[]},{value:"Example Usage",id:"example-usage",children:[{value:"Cast on Iteration from a Data Source",id:"cast-on-iteration-from-a-data-source",children:[]},{value:"Reverse Casting (Logical to Physical)",id:"reverse-casting-logical-to-physical",children:[]}]}],o={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/tableschema-swift"},Object(l.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/tableschema-swift.svg?branch=master",alt:"Build"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://coveralls.io/github/frictionlessdata/tableschema-swift?branch=master"},Object(l.b)("img",{parentName:"a",src:"https://coveralls.io/repos/github/frictionlessdata/tableschema-swift/badge.svg?branch=master",alt:"Coverage"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-swift"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/codebase-github-brightgreen",alt:"Codebase"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://discordapp.com/invite/Sewv6av"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/support-discord-brightgreen",alt:"Support"}))),Object(l.b)("p",null,"This is a ",Object(l.b)("em",{parentName:"p"},"draft")," Swift language implementation of ",Object(l.b)("a",{parentName:"p",href:"https://frictionlessdata.io/specs/table-schema/"},"TableSchema")," for defining schemas to work with tabular data."),Object(l.b)("p",null,"A schema on tabular data defines types, imposes constraints, and creates foreign key relationships on fields as data values move from some physical representation to a logical one and vice versa. For instance, a stored CSV file (physical) can be loaded in-memory along with a corresponding schema descriptor to be transformed from string values to Swift Standard Library types like ",Object(l.b)("inlineCode",{parentName:"p"},"Date")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Int")," (logical)."),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Source compatibility with Swift 4.2"),Object(l.b)("li",{parentName:"ul"},"Target platforms",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Apple platforms, specifically iOS and macOS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Full functionality in iOS >= 10 and macOS >= 10.12"))),Object(l.b)("li",{parentName:"ul"},"Linux, limited by features available in ",Object(l.b)("inlineCode",{parentName:"li"},"swift-corelibs-foundation")))),Object(l.b)("li",{parentName:"ul"},"Apple's ",Object(l.b)("inlineCode",{parentName:"li"},"Foundation")," framework is the only dependency"),Object(l.b)("li",{parentName:"ul"},"Independent from any one particular physical representation")),Object(l.b)("h2",{id:"implementation-status"},"Implementation Status"),Object(l.b)("p",null,"Being a draft implementation means APIs have not been solidified and are subject to change. However, much of the foundation has been laid, there is a testing suite to keep what should be working in check, and it is being used in at least one shipping product over a subset of the available features. The approach has been implementing features on an as-needed basis."),Object(l.b)("h3",{id:"feature-status"},"Feature Status"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Feature"),Object(l.b)("th",{parentName:"tr",align:"left"},"Status"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Streaming and cast on iteration"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Casting field types and formats"),Object(l.b)("td",{parentName:"tr",align:"left"},"Partial")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"[De]","serialization"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available in Tabular Data Package")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Schema inference"),Object(l.b)("td",{parentName:"tr",align:"left"},"Missing (Unlikely to implement)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Strict mode"),Object(l.b)("td",{parentName:"tr",align:"left"},"Missing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Constraint validation"),Object(l.b)("td",{parentName:"tr",align:"left"},"Missing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Foreign key validation"),Object(l.b)("td",{parentName:"tr",align:"left"},"Missing")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"Rich (RDF) Types"),Object(l.b)("td",{parentName:"tr",align:"left"},"Missing (Unlikely to implement)")))),Object(l.b)("h3",{id:"casting-field-types-and-formats-status"},"Casting Field Types and Formats Status"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"left"},"Type"),Object(l.b)("th",{parentName:"tr",align:"left"},"Formats"),Object(l.b)("th",{parentName:"tr",align:"left"},"Additional Properties"),Object(l.b)("th",{parentName:"tr",align:"left"},"Forward Status (Physical to Logical)"),Object(l.b)("th",{parentName:"tr",align:"left"},"Reverse Status (Logical to Physical)"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"default, uri, binary, uuid"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"string"),Object(l.b)("td",{parentName:"tr",align:"left"},"email"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"number"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"Any")),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"bareNumber = false"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"integer"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"bareNumber = true"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"boolean"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"trueValues, falseValues"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"object"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"array"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"date"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"default"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"date"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"any, pattern"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"time"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"default"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"time"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"any, pattern"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"datetime"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"default"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"datetime"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"any, pattern"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"year"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"yearmonth"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"duration"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available*"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"geopoint"),Object(l.b)("td",{parentName:"tr",align:"left"},"default, array, object"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Available"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"geojson"),Object(l.b)("td",{parentName:"tr",align:"left"},"default, topo"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"left"},"any"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("em",{parentName:"td"},"N/A")),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable"),Object(l.b)("td",{parentName:"tr",align:"left"},"Unavailable")))),Object(l.b)("p",null,"*"," Only available on Apple products (namely iOS and macOS) due to an incomplete implementation in ",Object(l.b)("inlineCode",{parentName:"p"},"swift-corelibs-foundation")),Object(l.b)("h2",{id:"integration-into-your-project"},"Integration into Your Project"),Object(l.b)("p",null,"This project is set up using ",Object(l.b)("a",{parentName:"p",href:"https://swift.org/package-manager/"},"Swift Package Manager"),". Ideally add it to your project's SPM dependencies or use Xcode's integrated Swift Package Manager. Alternatively, generate your own Xcode ",Object(l.b)("inlineCode",{parentName:"p"},".xcodeproj")," to integrate with your build system using:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"swift package generate-xcodeproj --xcconfig-overrides ./Configuration.xcconfig\n")),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("h3",{id:"cast-on-iteration-from-a-data-source"},"Cast on Iteration from a Data Source"),Object(l.b)("p",null,"Deserializing of data (from, say, a CSV file) can be accomplished by setting up a ",Object(l.b)("inlineCode",{parentName:"p"},"Table")," with an iterator that provides row information using a ",Object(l.b)("inlineCode",{parentName:"p"},"TableProvider")," data source. This allows for the data source to stream data rather than necessarily loading everything in-memory. ",Object(l.b)("inlineCode",{parentName:"p"},"Table")," is agnostic from the specific data source but expects the data source to convert to ",Object(l.b)("inlineCode",{parentName:"p"},"String")," representations."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},'let sourcePath = "import.csv"\nlet sourceDialect = DialectalCSV.Dialect()\n\nlet fields = [Field("name", type: .string), Field("birthday", type: .date)]\nlet schema = Schema(fields)\n\nguard let provider = MyTableProvider(atPath: sourcePath, dialect: sourceDialect) else {\n    fatalError("Oops")\n}\nlet table = Table(provider: AnyTableProvider(provider), schema: schema)\nlet objects = table.map { $0 }\n')),Object(l.b)("p",null,"And defining ",Object(l.b)("inlineCode",{parentName:"p"},"MyTableProvider")," together with a CSV parsing library like ",Object(l.b)("inlineCode",{parentName:"p"},"DialectalCSV"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"class MyTableProvider: TableProvider {\n\n    private let handler: DialectalCSV.InputHandler\n    private let streamIterator: DialectalCSV.InputIterator\n\n    init?(atPath path: String, dialect: DialectalCSV.Dialect) {\n        guard let handler = DialectalCSV.InputHandler(atPath: path, dialect: dialect) else {\n            return nil\n        }\n        self.handler = handler\n        self.streamIterator = handler.makeIterator()\n    }\n\n    // MARK: - TableProvider\n\n    var header: Header? {\n        return self.streamIterator.header\n    }\n\n    // MARK: - Sequence\n\n    func makeIterator() -> AnyIterator<[String?]> {\n        return AnyIterator {\n            return self.streamIterator.next()\n        }\n    }\n\n}\n")),Object(l.b)("h3",{id:"reverse-casting-logical-to-physical"},"Reverse Casting (Logical to Physical)"),Object(l.b)("p",null,"Cast the entire data set in-memory:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},"let objects = [[Any?]]()\nlet rows = objects.map { schema.reverseCast(row: $0) }\n")),Object(l.b)("p",null,"Or streaming output using a CSV parsing library like ",Object(l.b)("inlineCode",{parentName:"p"},"DialectalCSV"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-swift"},'let objects: [[Any?]] = [["River Tam", Date(timeIntervalSince1970: 16725225600)],["Simon Tam", nil]]\n\nlet destinationPath = "export.csv"\nvar destinationDialect = DialectalCSV.Dialect()\ndestinationDialect.nullSequence = "null"\n\nFileManager.default.createFile(atPath: destinationPath, contents: nil)\nguard let outputHandler = DialectalCSV.OutputHandler(atPath: destinationPath, dialect: destinationDialect) else {\n    fatalError("Oops")\n}\n\nlet header = schema.fields.map { $0.name }\ntry? outputHandler.open(header: header)\n\nfor object in objects {\n    let row = schema.reverseCast(row: object).map { $0 }\n    try? outputHandler.append(records: [row])\n}\n\ntry? outputHandler.close()\n')))}d.isMDXComponent=!0}}]);