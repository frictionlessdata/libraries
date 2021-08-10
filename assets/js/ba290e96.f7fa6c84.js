(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{112:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return p}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),d=function(e){var a=i.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},b=function(e){var a=d(e.components);return i.a.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},h=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(t),h=n,p=b["".concat(s,".").concat(h)]||b[h]||m[h]||r;return t?i.a.createElement(p,l(l({ref:a},o),{},{components:t})):i.a.createElement(p,l({ref:a},o))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=h;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<r;o++)s[o]=t[o];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},98:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return b}));var n=t(3),i=t(8),r=(t(0),t(112)),s=["components"],l={title:"tableschema-java"},c={unversionedId:"table-schema/java",id:"table-schema/java",isDocsHomePage:!1,title:"tableschema-java",description:"Build Status",source:"@site/docs/table-schema/java.md",slug:"/table-schema/java",permalink:"/docs/table-schema/java",editUrl:"https://github.com/frictionlessdata/libraries/edit/master/docs/docs/table-schema/java.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1628602987,formattedLastUpdatedAt:"8/10/2021",sidebar:"table-schema",previous:{title:"tableschema-php",permalink:"/docs/table-schema/php"},next:{title:"tableschema-go",permalink:"/docs/table-schema/go"}},o=[{value:"Usage",id:"usage",children:[{value:"Parsing a CSV using a Schema",id:"parsing-a-csv-using-a-schema",children:[]},{value:"Parse a CSV without a Schema",id:"parse-a-csv-without-a-schema",children:[]},{value:"Write a Table Into a File",id:"write-a-table-into-a-file",children:[]},{value:"Build a Schema",id:"build-a-schema",children:[]},{value:"Infer a Schema",id:"infer-a-schema",children:[]},{value:"Write a Schema Into a File:",id:"write-a-schema-into-a-file",children:[]},{value:"Parse a CSV with a Schema",id:"parse-a-csv-with-a-schema",children:[]},{value:"Validate a Schema",id:"validate-a-schema",children:[]}]},{value:"Setting Primary Key",id:"setting-primary-key",children:[{value:"Single Key",id:"single-key",children:[]},{value:"Composite Key",id:"composite-key",children:[]}]},{value:"Casting",id:"casting",children:[{value:"Row Casting",id:"row-casting",children:[]},{value:"Field Casting",id:"field-casting",children:[]}]},{value:"Infer Type",id:"infer-type",children:[]},{value:"Contributing",id:"contributing",children:[]}],d={toc:o};function b(e){var a=e.components,t=Object(i.a)(e,s);return Object(r.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://travis-ci.org/frictionlessdata/tableschema-java"},Object(r.b)("img",{parentName:"a",src:"https://travis-ci.org/frictionlessdata/tableschema-java.svg?branch=master",alt:"Build Status"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://coveralls.io/github/frictionlessdata/tableschema-java?branch=master"},Object(r.b)("img",{parentName:"a",src:"https://coveralls.io/repos/github/frictionlessdata/tableschema-java/badge.svg?branch=master",alt:"Coverage Status"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-java/blob/master/LICENSE"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/github/license/frictionlessdata/tableschema-java.svg",alt:"License"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://jitpack.io/#frictionlessdata/tableschema-java"},Object(r.b)("img",{parentName:"a",src:"https://jitpack.io/v/frictionlessdata/tableschema-java.svg",alt:"Release"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/frictionlessdata/tableschema-java"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/codebase-github-brightgreen",alt:"Codebase"})),"\n",Object(r.b)("a",{parentName:"p",href:"https://discordapp.com/invite/Sewv6av"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/support-discord-brightgreen",alt:"Support"}))),Object(r.b)("p",null,"A Java library for working with Table Schema. Snapshots on ",Object(r.b)("a",{parentName:"p",href:"https://jitpack.io/#frictionlessdata/tableschema-java"},"Jitpack"),".\ntableschema-java is a library aimed at parsing CSV and JSON-Array documents into a tabular format according\nto ",Object(r.b)("a",{parentName:"p",href:"https://frictionlessdata.io/specs/table-schema/"},"Table Schema"),", a format definition based on\n",Object(r.b)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/"},"JSON Schema"),"."),Object(r.b)("p",null,"It allows you to read and write tabular data with assurances to format integrity (it also allows reading and writing\nCSV free-form, ie. without a Schema)."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"parsing-a-csv-using-a-schema"},"Parsing a CSV using a Schema"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Let\'s start by defining and building the schema of a table that contains data about employees:\nSchema schema = new Schema();\n\nschema.addField(new IntegerField("id"));\nschema.addField(new StringField("title"));\n// Load the data from URL with the schema.\nTable table = Table.fromSource(\n    new URL("https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master" +\n            "/src/test/resources/fixtures/data/simple_data.csv"),\n    schema, DataSourceFormat.getDefaultCsvFormat());\n\nList<Object[]> allData = table.read();\n\n// [1, foo]\n// [2, bar]\n// [3, baz]\n')),Object(r.b)("h3",{id:"parse-a-csv-without-a-schema"},"Parse a CSV without a Schema"),Object(r.b)("p",null,"Cast ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master/src/test/resources/fixtures/simple_data.csv"},"data")," from a CSV without a schema:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master" +\n                "/src/test/resources/fixtures/data/simple_data.csv");\nTable table = Table.fromSource(url);\n\n// Iterate through rows\nIterator<Object[]> iter = table.iterator();\nwhile(iter.hasNext()){\n    Object[] row = iter.next();\n    System.out.println(Arrays.toString(row));\n}\n\n// [1, foo]\n// [2, bar]\n// [3, baz]\n\n// Read the entire CSV and output it as a List:\nList<Object[]> allData = table.read();\n')),Object(r.b)("h3",{id:"write-a-table-into-a-file"},"Write a Table Into a File"),Object(r.b)("p",null,"You can write a ",Object(r.b)("inlineCode",{parentName:"p"},"Table")," into a CSV file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master/src/test/resources/fixtures/simple_data.csv");\nTable table = Table.fromSource(url);\ntable.write("/path/to/write/table.csv");\n')),Object(r.b)("h3",{id:"build-a-schema"},"Build a Schema"),Object(r.b)("p",null,"You can build a ",Object(r.b)("inlineCode",{parentName:"p"},"Schema")," instance from scratch or modify an existing one:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Schema schema = new Schema();\n\nField nameField = new StringField("name");\nschema.addField(nameField);\n\nField coordinatesField = new GeopointField("coordinates");\nschema.addField(coordinatesField);\n\nSystem.out.println(schema.getJson());\n\n// {"fields":[{"name":"name","format":"default","description":"","type":"string","title":""},{"name":"coordinates","format":"default","description":"","type":"geopoint","title":""}]}\n')),Object(r.b)("p",null,"You can also build a ",Object(r.b)("inlineCode",{parentName:"p"},"Schema")," instance with ",Object(r.b)("inlineCode",{parentName:"p"},"JSONObject")," instances instead of ",Object(r.b)("inlineCode",{parentName:"p"},"Field")," instances:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Schema schema = new Schema(); // By default strict=false validation\n\nJSONObject nameFieldJsonObject = new JSONObject();\nnameFieldJsonObject.put("name", "name");\nnameFieldJsonObject.put("type", Field.FIELD_TYPE_STRING);\nschema.addField(nameFieldJsonObject);\n\n// Because strict=false, an invalid Field definition will be included.\n// The error will be logged/tracked in the error list schema.getErrors().\nJSONObject invalidFieldJsonObject = new JSONObject();\ninvalidFieldJsonObject.put("name", "id");\ninvalidFieldJsonObject.put("type", Field.FIELD_TYPE_INTEGER);\ninvalidFieldJsonObject.put("format", "invalid");\nschema.addField(invalidFieldJsonObject);\n\nJSONObject coordinatesFieldJsonObject = new JSONObject();\ncoordinatesFieldJsonObject.put("name", "coordinates");\ncoordinatesFieldJsonObject.put("type", Field.FIELD_TYPE_GEOPOINT);\ncoordinatesFieldJsonObject.put("format", Field.FIELD_FORMAT_ARRAY);\nschema.addField(coordinatesFieldJsonObject);\n\nSystem.out.println(schema.getJson());\n\n/*\n{"fields":[\n    {"name":"name","format":"default","type":"string"},\n    {"name":"id","format":"invalid","type":"integer"},\n    {"name":"coordinates","format":"array","type":"geopoint"}\n]}\n*/\n')),Object(r.b)("p",null,"When using the ",Object(r.b)("inlineCode",{parentName:"p"},"addField")," method, the schema undergoes validation after every field addition.\nIf adding a field causes the schema to fail validation, then the field is automatically removed."),Object(r.b)("p",null,"Alternatively, you might want to build your ",Object(r.b)("inlineCode",{parentName:"p"},"Schema")," by loading the schema definition from a JSON file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'String schemaFilePath = "/path/to/schema/file/shema.json";\nSchema schema = new Schema(schemaFilePath, true); // enforce validation with strict=true.\n')),Object(r.b)("h3",{id:"infer-a-schema"},"Infer a Schema"),Object(r.b)("p",null,"If you don't have a schema for a CSV and don't want to manually define one then you can generate it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master" +\n                                "/src/test/resources/fixtures/data/simple_data.csv");\nTable table = Table.fromSource(url);\n\nSchema schema = table.inferSchema();\nSystem.out.println(schema.getJson());\n\n// {"fields":[{"name":"id","format":"","description":"","title":"","type":"integer","constraints":{}},{"name":"title","format":"","description":"","title":"","type":"string","constraints":{}}]}\n\n')),Object(r.b)("p",null,"The type inferral algorithm tries to cast to available types and each successful type casting increments a popularity score for the successful type cast in question. At the end, the best score so far is returned.\nThe inferral algorithm traverses all of the table's rows and attempts to cast every single value of the table. When dealing with large tables, you might want to limit the number of rows that the inferral algorithm processes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Only process the first 25 rows for type inferral.\nSchema schema = table.inferSchema(25);\n")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"List<Object[]> data")," and ",Object(r.b)("inlineCode",{parentName:"p"},"String[] headers")," are available, the schema can also be inferred from the a Schema object:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"JSONObject inferredSchema = schema.infer(data, headers);\n")),Object(r.b)("p",null,"Row limit can also be set:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"JSONObject inferredSchema = schema.infer(data, headers, 25);\n")),Object(r.b)("p",null,"Using an instance of Table or Scheme to infer a schema invokes the same method from the TypeInferred Singleton:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"TypeInferrer.getInstance().infer(data, headers, 25);\n")),Object(r.b)("h3",{id:"write-a-schema-into-a-file"},"Write a Schema Into a File:"),Object(r.b)("p",null,"You can write a ",Object(r.b)("inlineCode",{parentName:"p"},"Schema")," into a JSON file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Schema schema = new Schema();\n\nField nameField = new StringField("name");\nschema.addField(nameField);\n\nField coordinatesField = new GeopointField("coordinates");\nschema.addField(coordinatesField);\n\nschema.writeJson(new File("schema.json"));\n\n')),Object(r.b)("h3",{id:"parse-a-csv-with-a-schema"},"Parse a CSV with a Schema"),Object(r.b)("p",null,"If you have a schema, you can input it as parameter when creating the ",Object(r.b)("inlineCode",{parentName:"p"},"Table")," instance so that the ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master/src/test/resources/fixtures/employee_data.csv"},"data")," from the CSV will be cast into the field types defined in the schema:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Let\'s start by defining and building the schema of a table that contains data on employees:\nSchema schema = new Schema();\n\nField idField = new IntegerField("id");\nschema.addField(idField);\n\nField nameField = new StringField("name");\nschema.addField(nameField);\n\nField dobField = new DateField("dateOfBirth");\nschema.addField(dobField);\n\nField isAdminField = new BooleanField("isAdmin");\nschema.addField(isAdminField);\n\nField addressCoordinatesField = new GeopointField("addressCoordinates");\naddressCoordinatesField.setFormat(Field.FIELD_FORMAT_OBJECT);\nschema.addField(addressCoordinatesField);\n\nField contractLengthField = new DurationField("contractLength");\nschema.addField(contractLengthField);\n\nField infoField = new ObjectField("info");\nschema.addField(infoField);\n\n// Load the data from URL with the schema.\nURL url = new URL("https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master" +\n        "/src/test/resources/fixtures/data/employee_data.csv");\nTable table = Table.fromSource(url, schema, DataSourceFormat.getDefaultCsvFormat());\n\nIterator<Object[]> iter = table.iterator(false, false, true, false);\nwhile(iter.hasNext()){\n\n    // The fetched array will contain row values that have been cast into their\n    // appropriate types as per field definitions in the schema.\n    Object[] row = iter.next();\n\n    BigInteger id = (BigInteger)row[0];\n    String name = (String)row[1];\n    LocalDate dob = (LocalDate)row[2];\n    boolean isAdmin = (boolean)row[3];\n    double[] addressCoordinates = (double[])row[4];\n    Duration contractLength = (Duration)row[5];\n    Map info = (Map)row[6];\n}\n')),Object(r.b)("h3",{id:"validate-a-schema"},"Validate a Schema"),Object(r.b)("p",null,"To make sure a schema complies with ",Object(r.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/table-schema/"},"Table Schema specifications"),", we can validate each custom schema against the official ",Object(r.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/frictionlessdata/tableschema-java/master/src/main/resources/schemas/table-schema.json"},"Table Schema schema"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'JSONObject schemaJsonObj = new JSONObject();\nField nameField = new IntegerField("id");\nschemaJsonObj.put("fields", new JSONArray());\nschemaJsonObj.getJSONArray("fields").put(nameField.getJson());\n\nSchema schema = Schema.fromJson(schemaJsonObj.toString(), true);\n\nSystem.out.println(schema.isValid());\n// true\n')),Object(r.b)("h2",{id:"setting-primary-key"},"Setting Primary Key"),Object(r.b)("h3",{id:"single-key"},"Single Key"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Schema schema = new Schema();\n\nField idField = new IntegerField("id");\nschema.addField(idField);\n\nField nameField = new StringField("name");\nschema.addField(nameField);\n\nschema.setPrimaryKey("id");\nString primaryKey = schema.getPrimaryKey();\n')),Object(r.b)("h3",{id:"composite-key"},"Composite Key"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Schema schema = new Schema();\n\nField idField = new IntegerField("id");\nschema.addField(idField);\n\nField nameField = new StringField("name");\nschema.addField(nameField);\n\nField surnameField = new StringField("surname");\nschema.addField(surnameField);\n\nschema.setPrimaryKey(new String[]{"name", "surname"});\nString[] compositeKey = schema.getPrimaryKey();\n')),Object(r.b)("h2",{id:"casting"},"Casting"),Object(r.b)("h3",{id:"row-casting"},"Row Casting"),Object(r.b)("p",null,"To check if a given set of values complies with the schema, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"castRow"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Schema schema = new Schema();\n\n// A String field.\nField stringField = new Field("stringField", Field.FIELD_TYPE_STRING);\nschema.addField(stringField);\n\n// An Integer field.\nField integerField = new Field("integerField", Field.FIELD_TYPE_INTEGER);\nschema.addField(integerField);\n\n// A Boolean field.\nField booleanField = new Field("booleanField", Field.FIELD_TYPE_BOOLEAN);\nschema.addField(booleanField);\n\n// Define a given set of values:\nString[] row = new String[]{"John Doe", "25", "T"}\n\n// Cast the row\'s values into their schema defined types:\nObject[] castRow = schema.castRow(row);\n')),Object(r.b)("p",null,"If a value in the given set of values cannot be cast to its expected type as defined by the schema, then an ",Object(r.b)("inlineCode",{parentName:"p"},"InvalidCastException")," is thrown."),Object(r.b)("h3",{id:"field-casting"},"Field Casting"),Object(r.b)("p",null,"Data values can be cast to native Java objects with a Field instance. This allows formats and constraints to be defined for the field in the ",Object(r.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/table-schema/#field-descriptors"},"field descriptor"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Field intField = new Field("id", Field.FIELD_TYPE_INTEGER);\nint intVal = intField.castValue("242");\nSystem.out.print(intVal);\n\n// 242\n\nField datetimeField = new Field("date", Field.FIELD_TYPE_DATETIME);\nDateTime datetimeVal = datetimeField.castValue("2008-08-30T01:45:36.123Z");\nSystem.out.print(datetimeVal.getYear());\n\n// 2008\n\nField geopointField = new Field("coordinates", Field.FIELD_TYPE_GEOPOINT, Field.FIELD_FORMAT_ARRAY);\nint[] geopointVal = geopointField.castValue("[12,21]");\nSystem.out.print("lon: " + geopointVal[0] + ", lat: " + geopointVal[1]);\n\n// lon: 12, lat: 21\n')),Object(r.b)("p",null,"Casting a value will check the value is of the expected type, is in the correct format, and complies with any constraints imposed in the descriptor."),Object(r.b)("p",null,"Value that can't be cast will raise an ",Object(r.b)("inlineCode",{parentName:"p"},"InvalidCastException"),"."),Object(r.b)("p",null,"By default, casting a value that does not meet the constraints will raise a ",Object(r.b)("inlineCode",{parentName:"p"},"ConstraintsException"),".\nConstraints can be ignored with by setting a boolean flag to false:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Define constraint limiting String length between 30 and 40 characters:\nMap<String, Object> constraints = new HashMap();\nconstraints.put(Field.CONSTRAINT_KEY_MIN_LENGTH, 30);\nconstraints.put(Field.CONSTRAINT_KEY_MAX_LENGTH, 40);\n\n// Cast a field and cast a value that violates the above constraint.\n// Disable constrain enforcement by setting the enforceConstraints boolean flag to false.\nField field = new Field("name", Field.FIELD_TYPE_STRING, null, null, null, constraints);\nfield.castValue("This string length is greater than 45 characters.", false); // Setting false here ignores constraints during cast.\n\n// ConstraintsException will not be thrown despite casting a value that does not meet the constraints.\n')),Object(r.b)("p",null,"You can call the ",Object(r.b)("inlineCode",{parentName:"p"},"checkConstraintViolations")," method to find out which constraints are being validated.\nThe method returns a map of violated constraints:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> constraints = new HashMap();\nconstraints.put(Field.CONSTRAINT_KEY_MINIMUM, 5);\nconstraints.put(Field.CONSTRAINT_KEY_MAXIMUM, 15);\n\nField field = new Field("name", Field.FIELD_TYPE_INTEGER, null, null, null, constraints);\n\nint constraintViolatingValue = 16;\nMap<String, Object> violatedConstraints = field.checkConstraintViolations(constraintViolatingValue);\n\nSystem.out.println(violatedConstraints);\n\n// {maximum=15}\n')),Object(r.b)("h2",{id:"infer-type"},"Infer Type"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Field")," class' ",Object(r.b)("inlineCode",{parentName:"p"},"castValue")," used the ",Object(r.b)("inlineCode",{parentName:"p"},"TypeInferrer")," singleton to cast the given value into the desired type.\nFor instance, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"TypeInferrer")," singleton to cast a String representation of a number into a float like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> options = new HashMap();\noptions.put("bareNumber", false);\noptions.put("groupChar", " ");\noptions.put("decimalChar", ",");\nfloat num = (float)TypeInferrer.getInstance().castNumber(Field.FIELD_FORMAT_DEFAULT, "1 564,123 EUR", options);\n')),Object(r.b)("h2",{id:"contributing"},"Contributing"),Object(r.b)("p",null,"Found a problem and would like to fix it? Have that great idea and would love to see it in the repository?"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please open an issue before you start working.")),Object(r.b)("p",null,"It could save a lot of time for everyone and we are super happy to answer questions and help you along the way. Furthermore, feel free to join ",Object(r.b)("a",{parentName:"p",href:"https://gitter.im/frictionlessdata/chat"},"frictionlessdata Gitter chat room")," and ask questions."),Object(r.b)("p",null,"This project follows the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/okfn/coding-standards"},"Open Knowledge International coding standards"),"."),Object(r.b)("p",null,"Get started:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"# install jabba and maven2\n$ cd tableschema-java\n$ jabba install 1.8\n$ jabba use 1.8\n$ mvn install -DskipTests=true -Dmaven.javadoc.skip=true -B -V\n$ mvn test -B\n")),Object(r.b)("p",null,"Make sure all tests pass."))}b.isMDXComponent=!0}}]);