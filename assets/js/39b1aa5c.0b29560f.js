(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,u=b["".concat(c,".").concat(d)]||b[d]||m[d]||i;return a?r.a.createElement(u,l(l({ref:t},o),{},{components:a})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),i=(a(0),a(113)),c=["components"],l={title:"frictionless-ckan-mapper"},s={unversionedId:"other-libraries/frictionless-ckan-mapper",id:"other-libraries/frictionless-ckan-mapper",isDocsHomePage:!1,title:"frictionless-ckan-mapper",description:"A library for mapping CKAN metadata  Frictionless metadata.",source:"@site/docs/other-libraries/frictionless-ckan-mapper.md",slug:"/other-libraries/frictionless-ckan-mapper",permalink:"/docs/other-libraries/frictionless-ckan-mapper",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/other-libraries/frictionless-ckan-mapper.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1630652939,formattedLastUpdatedAt:"9/3/2021",sidebar:"other-libraries",next:{title:"datapackage-pipelines",permalink:"/docs/other-libraries/data-package-pipelines"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"CKAN =&gt; Frictionless",id:"ckan--frictionless",children:[]},{value:"Frictionless =&gt; CKAN",id:"frictionless--ckan",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>ckan_to_frictionless</code>",id:"ckan_to_frictionless",children:[]},{value:"<code>frictionless_to_ckan</code>",id:"frictionless_to_ckan",children:[]}]},{value:"Design",id:"design",children:[{value:"CKAN reference",id:"ckan-reference",children:[]},{value:"Algorithm: CKAN =&gt; Frictionless",id:"algorithm-ckan--frictionless",children:[]},{value:"Algorithm: Frictionless =&gt; CKAN",id:"algorithm-frictionless--ckan",children:[]}]},{value:"Developers",id:"developers",children:[{value:"Install the source",id:"install-the-source",children:[]},{value:"Run the tests",id:"run-the-tests",children:[]},{value:"Building and publishing the package",id:"building-and-publishing-the-package",children:[]}]}],p={toc:o};function b(e){var t=e.components,a=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A library for mapping CKAN metadata <=> Frictionless metadata."),Object(i.b)("p",null,"The library has zero dependencies (not even on Data Package libs). You can use it directly or use it for inspiration. Detailed outline of the algorithm is in the docs or you can read the code."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/frictionless-ckan-mapper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/travis/frictionlessdata/frictionless-ckan-mapper/master.svg",alt:"Travis"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://coveralls.io/r/frictionlessdata/frictionless-ckan-mapper?branch=master"},Object(i.b)("img",{parentName:"a",src:"http://img.shields.io/coveralls/frictionlessdata/frictionless-ckan-mapper/master.svg",alt:"Coveralls"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/frictionless-ckan-mapper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/frictionless-ckan-mapper.svg",alt:"PyPi"})),"\n",Object(i.b)("a",{parentName:"p",href:"http://semver.org/"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/versions-SemVer-brightgreen.svg",alt:"SemVer"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://discord.gg/2UgfM2k"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/discord/695635777199145130",alt:"Chat on Discord"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#frictionless-ckan-mapper"},"Frictionless CKAN Mapper"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#installation"},"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#getting-started"},"Getting started"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#ckan--frictionless"},"CKAN => Frictionless")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#frictionless--ckan"},"Frictionless => CKAN")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#reference"},"Reference"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#ckan_to_frictionless"},Object(i.b)("inlineCode",{parentName:"a"},"ckan_to_frictionless")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#resourceckandict"},Object(i.b)("inlineCode",{parentName:"a"},"resource(ckandict)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#datasetckandict"},Object(i.b)("inlineCode",{parentName:"a"},"dataset(ckandict)"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#frictionless_to_ckan"},Object(i.b)("inlineCode",{parentName:"a"},"frictionless_to_ckan")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#resourcefddict"},Object(i.b)("inlineCode",{parentName:"a"},"resource(fddict)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#packagefddict"},Object(i.b)("inlineCode",{parentName:"a"},"package(fddict)"))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#design"},"Design"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#ckan-reference"},"CKAN reference")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#algorithm-ckan--frictionless"},"Algorithm: CKAN => Frictionless")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#algorithm-frictionless--ckan"},"Algorithm: Frictionless => CKAN")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#developers"},"Developers"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#install-the-source"},"Install the source")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#run-the-tests"},"Run the tests")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#building-and-publishing-the-package"},"Building and publishing the package"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#build-the-distribution-package-locally-for-testing-purposes"},"Build the distribution package locally for testing purposes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#test-the-package-at-testpypiorg"},"Test the package at test.pypi.org")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#tag-a-new-git-release-and-publish-to-the-official-pypi"},"Tag a new Git release and publish to the official PyPi"))))))))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Python: install Python. The library is compatible with both Python 2.7+ and Python 3.3+.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pip install frictionless-ckan-mapper\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The package is installed as ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless-ckan-mapper")," and then imported as ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless_ckan_mapper"),"."),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("h3",{id:"ckan--frictionless"},"CKAN => Frictionless"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'#\xa0get a CKAN metadata item\nckan_dataset = {\n  "name": "my-dataset",\n  "title": "My awesome dataset",\n  "url": "http://www.example.com/data.csv"\n}\n\n# or load from an API e.g.\n#\xa0ckan_dataset = json.load(urllib.urlopen(\n#     https://demo.ckan.org/api/3/package_show?id=my_dataset\n# ))\n\nfrom frictionless_ckan_mapper import ckan_to_frictionless as converter\n\n#\xa0convert to frictionless\nfrictionless_package = converter.dataset(ckan_dict)\n\nprint(frictionless_package)\n')),Object(i.b)("h3",{id:"frictionless--ckan"},"Frictionless => CKAN"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"frictionless = {\n  'name': \"f11s-dataset\",\n  'path': \"https://datahub.io/data.csv\"\n}\n\nfrom frictionless_ckan_mapper import frictionless_to_ckan as f2c\n\nckanout = f2c.dataset(frictionless)\n\nprint(ckanout)\n")),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("p",null,"This package contains two modules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"frictionless_to_ckan")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ckan_to_frictionless"))),Object(i.b)("p",null,"You can import them directly like so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless_ckan_mapper import ckan_to_frictionless\nfrom frictionless_ckan_mapper import frictionless_to_ckan\n")),Object(i.b)("h3",{id:"ckan_to_frictionless"},Object(i.b)("inlineCode",{parentName:"h3"},"ckan_to_frictionless")),Object(i.b)("h4",{id:"resourceckandict"},Object(i.b)("inlineCode",{parentName:"h4"},"resource(ckandict)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless_ckan_mapper import ckan_to_frictionless as converter\n\n# ... Some code with a CKAN dictionary ...\n\noutput_frictionless_dict = converter.resource(ckan_dictionary)\n")),Object(i.b)("h4",{id:"datasetckandict"},Object(i.b)("inlineCode",{parentName:"h4"},"dataset(ckandict)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless_ckan_mapper import ckan_to_frictionless as converter\n\n# ... Some code with a CKAN dictionary ...\n\noutput_frictionless_dict = converter.dataset(ckan_dictionary)\n")),Object(i.b)("h3",{id:"frictionless_to_ckan"},Object(i.b)("inlineCode",{parentName:"h3"},"frictionless_to_ckan")),Object(i.b)("h4",{id:"resourcefddict"},Object(i.b)("inlineCode",{parentName:"h4"},"resource(fddict)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless_ckan_mapper import frictionless_to_ckan as converter\n\n# ... Some code with a Frictionless dictionary ...\n\noutput_ckan_dict = converter.resource(frictionless_dictionary)\n")),Object(i.b)("h4",{id:"packagefddict"},Object(i.b)("inlineCode",{parentName:"h4"},"package(fddict)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless_ckan_mapper import frictionless_to_ckan as converter\n\n# ... Some code with a Frictionless dictionary ...\n\noutput_ckan_dict = converter.package(frictionless_dictionary)\n")),Object(i.b)("h2",{id:"design"},"Design"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"Frictionless   <=>        CKAN\n--------------------------------------\nData Package   <=>   Package (Dataset)\nData Resource  <=>   Resource\nTable Schema   <=>   Data Dictionary?? (datastore resources can have schemas)\n")),Object(i.b)("h3",{id:"ckan-reference"},"CKAN reference"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Summary:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Class diagram below of key objects (without attributes)"),Object(i.b)("li",{parentName:"ul"},"Objects with their attributes in this spreadsheet: ",Object(i.b)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1XdqGTFni5Jfs8AMbcbfsP7m11h9mOHS0eDtUZtqGVSg/edit#gid=1925460244"},"https://docs.google.com/spreadsheets/d/1XdqGTFni5Jfs8AMbcbfsP7m11h9mOHS0eDtUZtqGVSg/edit#gid=1925460244"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-mermaid"},"classDiagram\n\nclass Package\nclass Resource\nclass DataDictionary\n\nPackage *-- Resource\nResource o-- DataDictionary\n")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32682903/86486065-f9c08100-bd1f-11ea-8a1a-8f3befca0e6e.png",alt:"mermaid-diagram-20200703112520"})),Object(i.b)("p",null,"Source for CKAN metadata structure:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dataset (Package): ",Object(i.b)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.8/api/index.html#ckan.logic.action.create.package_create"},"https://docs.ckan.org/en/2.8/api/index.html#ckan.logic.action.create.package_create"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Package.as_dict")," method: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/ckan/ckan/blob/2.8/ckan/model/package.py#L195-L223"},"https://github.com/ckan/ckan/blob/2.8/ckan/model/package.py#L195-L223")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"package_show")," ...")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Resource: ",Object(i.b)("a",{parentName:"li",href:"https://docs.ckan.org/en/2.8/api/index.html#ckan.logic.action.create.resource_create"},"https://docs.ckan.org/en/2.8/api/index.html#ckan.logic.action.create.resource_create"))),Object(i.b)("h3",{id:"algorithm-ckan--frictionless"},"Algorithm: CKAN => Frictionless"),Object(i.b)("p",null,"See the code in ",Object(i.b)("a",{parentName:"p",href:"./frictionless_ckan_mapper/ckan_to_frictionless.py"},Object(i.b)("inlineCode",{parentName:"a"},"frictionless_ckan_mapper/ckan_to_frictionless.py"))),Object(i.b)("h3",{id:"algorithm-frictionless--ckan"},"Algorithm: Frictionless => CKAN"),Object(i.b)("p",null,"See the code in ",Object(i.b)("a",{parentName:"p",href:"./frictionless_ckan_mapper/frictionless_to_ckan.py"},Object(i.b)("inlineCode",{parentName:"a"},"frictionless_ckan_mapper/frictionless_to_ckan.py"))),Object(i.b)("h2",{id:"developers"},"Developers"),Object(i.b)("h3",{id:"install-the-source"},"Install the source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the repo:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/frictionlessdata/frictionless-ckan-mapper.git\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"And install it with pip:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pip install -e .\n")))),Object(i.b)("h3",{id:"run-the-tests"},"Run the tests"),Object(i.b)("p",null,"Use the excellent ",Object(i.b)("inlineCode",{parentName:"p"},"pytest")," suite as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pytest tests\n")),Object(i.b)("p",null,"To test under both Python 2 and Python 3 environments, we use ",Object(i.b)("inlineCode",{parentName:"p"},"tox"),". You can run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make test\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Make sure that the necessary Python versions are in your environment ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," (Python 2.7 and Python 3.6)."),Object(i.b)("h3",{id:"building-and-publishing-the-package"},"Building and publishing the package"),Object(i.b)("p",null,"To see a list of available commands from the ",Object(i.b)("inlineCode",{parentName:"p"},"Makefile"),", execute:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make list\n")),Object(i.b)("h4",{id:"build-the-distribution-package-locally-for-testing-purposes"},"Build the distribution package locally for testing purposes"),Object(i.b)("p",null,"If a previous build exists, make sure to also remove it before building again:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make distclean\n")),Object(i.b)("p",null,"Then:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make dist\n")),Object(i.b)("p",null,"Alternatively, this command will accomplish the same to build packages for both Python 2 and Python 3:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python setup.py sdist bdist_wheel --universal\n")),Object(i.b)("h4",{id:"test-the-package-at-testpypiorg"},"Test the package at test.pypi.org"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python -m twine upload --repository testpypi dist/*\n")),Object(i.b)("p",null,"The package will be publicly available at ",Object(i.b)("a",{parentName:"p",href:"https://test.pypi.org/project/frictionless-ckan-mapper/"},"https://test.pypi.org/project/frictionless-ckan-mapper/")," and you will be able to ",Object(i.b)("inlineCode",{parentName:"p"},"pip install")," it as usual."),Object(i.b)("h4",{id:"tag-a-new-git-release-and-publish-to-the-official-pypi"},"Tag a new Git release and publish to the official PyPi"),Object(i.b)("p",null,"Make sure to update the version of the package in the file ",Object(i.b)("inlineCode",{parentName:"p"},"frictionless_ckan_mapper/VERSION"),". Then:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make release\n")),Object(i.b)("p",null,"You can quickly review the version to release with ",Object(i.b)("inlineCode",{parentName:"p"},"make version"),", which will print the current version stored in ",Object(i.b)("inlineCode",{parentName:"p"},"VERSION"),"."))}b.isMDXComponent=!0}}]);