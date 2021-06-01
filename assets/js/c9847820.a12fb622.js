(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{104:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return d}));var r=t(3),n=t(8),c=(t(0),t(113)),i=["components"],o={title:"datapackage-java"},s={unversionedId:"data-package/java",id:"data-package/java",isDocsHomePage:!1,title:"datapackage-java",description:"A Java library for working with Data Packages. Snapshots on Jitpack",source:"@site/docs/data-package/java.md",slug:"/data-package/java",permalink:"/docs/data-package/java",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/data-package/java.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1622565639,formattedLastUpdatedAt:"6/1/2021",sidebar:"data-package",previous:{title:"datapackage-php",permalink:"/docs/data-package/php"},next:{title:"datapackage-go",permalink:"/docs/data-package/go"}},l=[{value:"Usage",id:"usage",children:[{value:"Create a Data Package",id:"create-a-data-package",children:[]},{value:"Iterate through Data",id:"iterate-through-data",children:[]},{value:"Edit a Data Package",id:"edit-a-data-package",children:[]},{value:"Save to File",id:"save-to-file",children:[]}]},{value:"Contributing",id:"contributing",children:[]}],p={toc:l};function d(e){var a=e.components,t=Object(n.a)(e,i);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A Java library for working with Data Packages. Snapshots on ",Object(c.b)("a",{parentName:"p",href:"https://jitpack.io/#frictionlessdata/datapackage-java"},"Jitpack")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/datapackage-java"},Object(c.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/datapackage-java.svg?branch=master",alt:"Build Status"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://coveralls.io/github/frictionlessdata/datapackage-java?branch=master"},Object(c.b)("img",{parentName:"a",src:"https://coveralls.io/repos/github/frictionlessdata/datapackage-java/badge.svg?branch=master",alt:"Coverage Status"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-java/blob/master/LICENSE"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/github/license/frictionlessdata/datapackage-java.svg",alt:"License"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/datapackage-java/tree/master/"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/badge/github-master-brightgreen",alt:"Github"})),"\n",Object(c.b)("a",{parentName:"p",href:"https://jitpack.io/#frictionlessdata/datapackage-java"},Object(c.b)("img",{parentName:"a",src:"https://jitpack.io/v/frictionlessdata/datapackage-java.svg",alt:null})),"\n",Object(c.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},Object(c.b)("img",{parentName:"a",src:"https://img.shields.io/gitter/room/frictionlessdata/chat.svg",alt:"Gitter"}))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("h3",{id:"create-a-data-package"},"Create a Data Package"),Object(c.b)("h4",{id:"from-jsonobject-object"},"From JSONObject Object"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// Create JSON Object for testing\nJSONObject jsonObject = new JSONObject("{\\"name\\": \\"test\\"}");\n\n// Build resources.\nJSONObject resource1 = new JSONObject("{\\"name\\": \\"first-resource\\", \\"path\\": [\\"foo.txt\\", \\"bar.txt\\", \\"baz.txt\\"]}");\nJSONObject resource2 = new JSONObject("{\\"name\\": \\"second-resource\\", \\"path\\": [\\"bar.txt\\", \\"baz.txt\\"]}");\n\nList resourceArrayList = new ArrayList();\nresourceArrayList.add(resource1);\nresourceArrayList.add(resource2);\n\nJSONArray resources = new JSONArray(resourceArrayList);\n\n// Add the resources.\njsonObject.put("resources", resources);\n\n// Build the datapackage.\nPackage dp = new Package(jsonObject, true); // Set strict validation to true.\n')),Object(c.b)("h4",{id:"from-json-string"},"From JSON String"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// The path of the datapackage file.\nString filepath = "/path/to/file/datapackage.json";\n\n// Get string content version of source file.\nString jsonString = new String(Files.readAllBytes(Paths.get(filepath)));\n\n// Create DataPackage instance from jsonString.\nPackage dp = new Package(jsonString, true); // Set strict validation to true.\n')),Object(c.b)("h4",{id:"from-remote-file"},"From Remote File"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/datapackage-java/master/src/test/resources/fixtures/multi_data_datapackage.json");\nPackage dp = new Package(url, true); // Set strict validation to true.\n')),Object(c.b)("h4",{id:"from-local-json-file"},"From Local JSON File"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'String relativePath = "datapackage.json";\nString basePath = "/data";\n\n// Build DataPackage instance based on source file path.\nPackage dp = new Package(relativePath, basePath, true); // Set strict validation to true.\n')),Object(c.b)("h4",{id:"from-local-zip-file"},"From Local Zip File"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'Package dp = new Package("/path/of/zip/file/datapackage.zip", true); // Set strict validation to true.\n')),Object(c.b)("p",null,"Exceptions are thrown for the following scenarios:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The zip archive must contain a file named ",Object(c.b)("em",{parentName:"li"},"datapackage.json"),". If no such file exists, a ",Object(c.b)("inlineCode",{parentName:"li"},"DataPackageException")," will be thrown."),Object(c.b)("li",{parentName:"ul"},"If ",Object(c.b)("em",{parentName:"li"},"datapackage.json")," does exist but it is invalid and validation is enabled then a ",Object(c.b)("inlineCode",{parentName:"li"},"ValidationException")," will be thrown."),Object(c.b)("li",{parentName:"ul"},"If the zip file does not exist, an ",Object(c.b)("inlineCode",{parentName:"li"},"IOException")," will be thrown.")),Object(c.b)("h3",{id:"iterate-through-data"},"Iterate through Data"),Object(c.b)("h4",{id:"without-casting"},"Without Casting"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// Get the resource from the data package.\nResource resource = pkg.getResource("first-resource");\n\n// Set the profile to tabular data resource (if it hasn\'t been set already).\nresource.setProfile(Profile.PROFILE_TABULAR_DATA_RESOURCE);\n\n// Get Iterator.\nIterator<String[]> iter = resource.iter();\n\n// Iterate.\nwhile(iter.hasNext()){\n    String[] row = iter.next();\n    String city = row[0];\n    String population = row[1];\n}\n')),Object(c.b)("h4",{id:"with-casting"},"With Casting"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"// Get Iterator.\n// Third boolean is the cast flag (First on is for keyed and second for extended).\nIterator<Object[]> iter = resource.iter(false, false, true));\n\n// Iterator\nwhile(iter.hasNext()){\n    Object[] row = iter.next();\n    String city = row[0];\n    Integer population = row[1];\n}\n")),Object(c.b)("h3",{id:"edit-a-data-package"},"Edit a Data Package"),Object(c.b)("h4",{id:"add-a-resource"},"Add a Resource"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// Create a data package.\nPackage dp = new Package();\n\n// Add a resource.\nResource resource = new Resource("new-resource", "data.csv");\ndp.addResource(resource);\n')),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"DataPackageException")," will be thrown if the name of the new resource that is being added already exists."),Object(c.b)("h4",{id:"remove-a-resource"},"Remove a Resource"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// Create a data package.\nURL url = new URL("https://raw.githubusercontent.com/frictionlessdata/datapackage-java/master/src/test/resources/fixtures/multi_data_datapackage.json");\nPackage dp = new Package(url);\n\n// Remove a resource.\ndp.removeResource("third-resource");\n')),Object(c.b)("h4",{id:"add-a-property"},"Add a Property"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// Create a data package\nPackage dp = new Package();\n\n// Add a few properties.\ndp.addProperty("name", "a-unique-human-readable-and-url-usable-identifier");\ndp.addProperty("title", "A nice title");\ndp.addProperty("id", "b03ec84-77fd-4270-813b-0c698943f7ce");\ndp.addProperty("profile", "tabular-data-package");\n\n// Create and add license array.\nJSONObject license = new JSONObject();\nlicense.put("name", "ODC-PDDL-1.0");\nlicense.put("path", "http://opendatacommons.org/licenses/pddl/");\nlicense.put("title", "Open Data Commons Public Domain Dedication and License v1.0");\n\nJSONArray licenses = new JSONArray();\nlicenses.put(license);\n\ndp.addProperty(licenses);\n')),Object(c.b)("p",null,"A ",Object(c.b)("inlineCode",{parentName:"p"},"DataPackageException")," will be thrown if the key of the new property that is being added already exists."),Object(c.b)("h4",{id:"remove-a-property"},"Remove a Property"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'// Create a data package\nPackage dp = new Package();\n\n// Add a few properties.\ndp.addProperty("name", "a-unique-human-readable-and-url-usable-identifier");\ndp.addProperty("title", "A nice title");\n\n// Remove the title property.\ndp.removeProperty("title");\n')),Object(c.b)("h3",{id:"save-to-file"},"Save to File"),Object(c.b)("h4",{id:"json-file"},"JSON File"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/datapackage-java/master/src/test/resources/fixtures/multi_data_datapackage.json");\nPackage dp = new Package(url);\n\ndp.save("/destination/path/datapackage.json")\n')),Object(c.b)("h4",{id:"zip-file"},"Zip File"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},'URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/datapackage-java/master/src/test/resources/fixtures/multi_data_datapackage.json");\nPackage dp = new Package(url);\n\ndp.save("/destination/path/datapackage.zip")\n')),Object(c.b)("h2",{id:"contributing"},"Contributing"),Object(c.b)("p",null,"Found a problem and would like to fix it? Have that great idea and would love to see it in the repository?"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Please open an issue before you start working.")),Object(c.b)("p",null,"It could save a lot of time for everyone and we are super happy to answer questions and help you along the way. Furthermore, feel free to join ",Object(c.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},"frictionlessdata Gitter chat room")," and ask questions."),Object(c.b)("p",null,"This project follows the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/okfn/coding-standards"},"Open Knowledge International coding standards"),"."),Object(c.b)("p",null,"Get started:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"# install jabba and maven2\n$ cd tableschema-java\n$ jabba install 1.8\n$ jabba use 1.8\n$ mvn install -DskipTests=true -Dmaven.javadoc.skip=true -B -V\n$ mvn test -B\n")),Object(c.b)("p",null,"Make sure all tests pass."))}d.isMDXComponent=!0},113:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return g}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,g=d["".concat(i,".").concat(u)]||d[u]||b[u]||c;return t?n.a.createElement(g,o(o({ref:a},l),{},{components:t})):n.a.createElement(g,o({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);