(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=o(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=o(t),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||l;return t?r.a.createElement(u,i(i({ref:a},p),{},{components:t})):r.a.createElement(u,i({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(8),l=(t(0),t(112)),c=["components"],i={title:"tableschema-php"},s={unversionedId:"table-schema/php",id:"table-schema/php",isDocsHomePage:!1,title:"tableschema-php",description:"Travis",source:"@site/docs/table-schema/php.md",slug:"/table-schema/php",permalink:"/docs/table-schema/php",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/table-schema/php.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1624378318,formattedLastUpdatedAt:"6/22/2021",sidebar:"table-schema",previous:{title:"tableschema-rb",permalink:"/docs/table-schema/ruby"},next:{title:"tableschema-java",permalink:"/docs/table-schema/java"}},p=[{value:"Features summary and Usage guide",id:"features-summary-and-usage-guide",children:[{value:"Installation",id:"installation",children:[]},{value:"Table",id:"table",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Field",id:"field",children:[]}]},{value:"Contributing",id:"contributing",children:[]}],o={toc:p};function b(e){var a=e.components,t=Object(r.a)(e,c);return Object(l.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/tableschema-php"},Object(l.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/tableschema-php.svg?branch=master",alt:"Travis"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://coveralls.io/r/frictionlessdata/tableschema-php?branch=master"},Object(l.b)("img",{parentName:"a",src:"http://img.shields.io/coveralls/frictionlessdata/tableschema-php.svg?branch=master",alt:"Coveralls"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://scrutinizer-ci.com/g/OriHoch/tableschema-php/"},Object(l.b)("img",{parentName:"a",src:"https://scrutinizer-ci.com/g/OriHoch/tableschema-php/badges/quality-score.png?b=master",alt:"Scrutinizer-ci"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://packagist.org/packages/frictionlessdata/tableschema"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/packagist/dm/frictionlessdata/tableschema.svg",alt:"Packagist"})),"\n",Object(l.b)("a",{parentName:"p",href:"http://semver.org/"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/versions-SemVer-brightgreen.svg",alt:"SemVer"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/gitter/room/frictionlessdata/chat.svg",alt:"Gitter"}))),Object(l.b)("p",null,"A utility library for working with ",Object(l.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/table-schema/"},"Table Schema")," in php."),Object(l.b)("h2",{id:"features-summary-and-usage-guide"},"Features summary and Usage guide"),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ composer require frictionlessdata/tableschema\n")),Object(l.b)("h3",{id:"table"},"Table"),Object(l.b)("p",null,"Table class allows to iterate over data conforming to a table schema"),Object(l.b)("p",null,"Instantiate a Table object based on a data source and a table schema."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'use frictionlessdata\\tableschema\\Table;\n\n$table = new Table("tests/fixtures/data.csv", ["fields" => [\n    ["name" => "first_name"],\n    ["name" => "last_name"],\n    ["name" => "order"]\n]]);\n')),Object(l.b)("p",null,"Schema can be any parameter valid for the Schema object (See below), so you can use a url or filename which contains the schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$table = new Table("tests/fixtures/data.csv", "tests/fixtures/data.json");\n')),Object(l.b)("p",null,"iterate over the data, all the values are cast and validated according to the schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'foreach ($table as $row) {\n    print($row["order"]." ".$row["first_name"]." ".$row["last_name"]."\\n");\n};\n')),Object(l.b)("p",null,"validate function will validate the schema and get some sample of the data itself to validate it as well"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'Table::validate(new CsvDataSource("http://invalid.data.source/"), $schema);\n')),Object(l.b)("p",null,"You can instantiate a table object without schema, in this case the schema will be inferred automatically based on the data"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$table = new Table("tests/fixtures/data.csv");\n$table->schema()->fields();  // ["first_name" => StringField, "last_name" => StringField, "order" => IntegerField]\n')),Object(l.b)("p",null,"Optionally, specify a ",Object(l.b)("a",{parentName:"p",href:"https://frictionlessdata.io/specs/csv-dialect/"},"CSV Dialect"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$table = new Table("tests/fixtures/data.csv", null, ["delimiter" => ";"]);\n')),Object(l.b)("p",null,"Table::read method allows to get all data as an array, it also supports options to modify reader behavior"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"$table->read()  // returns all the data as an array\n")),Object(l.b)("p",null,"read accepts an options parameter, for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$table->read(["cast" => false, "limit": 5])\n')),Object(l.b)("p",null,"The following options are available (the values are the default values):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$table->read([\n    "keyed" => true,  // flag to emit keyed rows\n    "extended" => false,  // flag to emit extended rows\n    "cast" => true,  //flag to disable data casting if false\n    "limit" => null,  // integer limit of rows to return\n]);\n')),Object(l.b)("p",null,"Additional methods and functionality"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$table->headers()  // ["first_name", "last_name", "order"]\n$table->save("output.csv")  // iterate over all the rows and save the to a csv file\n$table->schema()  // get the Schema object\n$table->read()  // returns all the data as an array\n')),Object(l.b)("h3",{id:"schema"},"Schema"),Object(l.b)("p",null,"Schema class provides helpful methods for working with a table schema and related data."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"use frictionlessdata\\tableschema\\Schema;")),Object(l.b)("p",null,"Schema objects can be constructed using any of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"php array (or object)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"$schema = new Schema([\n    'fields' => [\n        [\n            'name' => 'id', 'title' => 'Identifier', 'type' => 'integer',\n            'constraints' => [\n                \"required\" => true,\n                \"minimum\" => 1,\n                \"maximum\" => 500\n            ]\n        ],\n        ['name' => 'name', 'title' => 'Name', 'type' => 'string'],\n    ],\n    'primaryKey' => 'id'\n]);\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"string containing json")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema = new Schema("{\n    \\"fields\\": [\n        {\\"name\\": \\"id\\"},\n        {\\"name\\": \\"height\\", \\"type\\": \\"integer\\"}\n    ]\n}");\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"string containg value supported by ",Object(l.b)("a",{parentName:"li",href:"http://php.net/manual/en/function.file-get-contents.php"},"file_get_contents"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema = new Schema("https://raw.githubusercontent.com/frictionlessdata/testsuite-extended/ecf1b2504332852cca1351657279901eca6fdbb5/datasets/synthetic/schema.json");\n')),Object(l.b)("p",null,"The schema is loaded, parsed and validated and will raise exceptions in case of any problems."),Object(l.b)("p",null,"access the schema data, which is ensured to conform to the specs."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->missingValues(); // [""]\n$schema->primaryKey();  // ["id"]\n$schema->foreignKeys();  // []\n$schema->fields(); // ["id" => IntegerField, "name" => StringField]\n$field = $schema->field("id");  // Field object (See Field reference below)\n')),Object(l.b)("p",null,"validate function accepts the same arguemnts as the Schema constructor but returns a list of errors instead of raising exceptions"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'// validate functions accepts the same arguments as the Schema constructor\n$validationErrors = Schema::validate("http://invalid.schema.json");\nforeach ($validationErrors as $validationError) {\n    print(validationError->getMessage();\n};\n')),Object(l.b)("p",null,"validate and cast a row of data according to the schema"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$row = $schema->castRow(["id" => "1", "name" => "First Name"]);\n')),Object(l.b)("p",null,"will raise exception if row fails validation"),Object(l.b)("p",null,"it returns the row with all native values"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$row  // ["id" => 1, "name" => "First Name"];\n')),Object(l.b)("p",null,"validate the row to get a list of errors"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->validateRow(["id" => "foobar"]);  // ["id is not numeric", "name is required" .. ]\n')),Object(l.b)("p",null,"Infer schema based on source data:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema = Schema::infer("tests/fixtures/data.csv");\n$table->schema()->fields();  // ["first_name" => StringField, "last_name" => StringField, "order" => IntegerField]\n')),Object(l.b)("p",null,"You can also create a new empty schema for editing"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"$schema = new Schema();\n")),Object(l.b)("p",null,"set fields"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->fields([\n    "id" => (object)["type" => "integer"],\n    "name" => (object)["type" => "string"],\n]);\n')),Object(l.b)("p",null,"appropriate Field object is created according to the given descriptor (see below for Field class reference)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->field("id");  // IntegerField object\n')),Object(l.b)("p",null,"add / update or remove fields"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->field("email", ["type" => "string", "format" => "email"]);\n$schema->field("name", ["type" => "string"]);\n$schema->removeField("name");\n')),Object(l.b)("p",null,"set or update other table schema attributes"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->primaryKey(["id"]);\n')),Object(l.b)("p",null,"after every change - schema is validated and will raise Exception in case of validation errors"),Object(l.b)("p",null,"Finally, you can get the full validated descriptor"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},"$schema->fullDescriptor();\n")),Object(l.b)("p",null,"And, save it to a json file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$schema->save("my-schema.json");\n')),Object(l.b)("h3",{id:"field"},"Field"),Object(l.b)("p",null,"Field class represents a single table schema field descriptor"),Object(l.b)("p",null,"Create a field from a descriptor"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'use frictionlessdata\\tableschema\\Fields\\FieldsFactory;\n$field = FieldsFactory::field([\n    "name" => "id", "type" => "integer",\n    "constraints" => ["required" => true, "minimum" => 5]\n]);\n')),Object(l.b)("p",null,"Cast and validate values using the field"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$field->castValue("3");  // exception: value is below minimum\n$field->castValue("7");  // 7\n')),Object(l.b)("p",null,"Additional method to access field data"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-php"},'$field("id")->format();  // "default"\n$field("id")->name();  // "id"\n$field("id")->type(); // "integer"\n$field("id")->constraints();  // (object)["required"=>true, "minimum"=>1, "maximum"=>500]\n$field("id")->enum();  // []\n$field("id")->required();  // true\n$field("id")->unique();  // false\n$field("id")->title();  // "Id" (or null if not provided in descriptor)\n$field("id")->description();  // "The ID" (or null if not provided in descriptor)\n$field("id")->rdfType();  // "http://schema.org/Thing" (or null if not provided in descriptor)\n')),Object(l.b)("h2",{id:"contributing"},"Contributing"),Object(l.b)("p",null,"Please read the contribution guidelines: ",Object(l.b)("a",{parentName:"p",href:"CONTRIBUTING.md"},"How to Contribute")))}b.isMDXComponent=!0}}]);