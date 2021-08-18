const fs = require("fs");
const fetch = require("node-fetch");

// Config

const URL = "https://raw.githubusercontent.com/frictionlessdata";
const DOCS = [
  // Table Schema
  // { repo: "tableschema-py", path: "table-schema/python.md" },
  // { repo: "tableschema-js", path: "table-schema/javascript.md" },
  // { repo: "tableschema-rb", path: "table-schema/ruby.md" },
  // { repo: "tableschema-php", path: "table-schema/php.md", branch: "master" },
  // { repo: "tableschema-java", path: "table-schema/java.md" },
  // { repo: "tableschema-go", path: "table-schema/go.md" },
  // { repo: "tableschema-r", path: "table-schema/rlang.md", branch: "master" },
  // { repo: "TableSchema.jl", path: "table-schema/julia.md" },
  // { repo: "tableschema-swift", path: "table-schema/swift.md" },
  // { repo: "tableschema-clj", path: "table-schema/clojure.md" },
  // Data Package
  // { repo: "datapackage-py", path: "data-package/python.md" },
  // { repo: "datapackage-js", path: "data-package/javascript.md" },
  { repo: "datapackage-rb", path: "data-package/ruby.md" },
];

// Main

async function main() {
  for (const doc of DOCS) {
    const url = `${URL}/${doc.repo}/${doc.branch || "main"}/README.md`;
    const name = doc.repo.replace(".", "-").toLowerCase();
    const path = `docs/${doc.path}`;
    const res = await fetch(url);
    if (!res.ok) throw `Network error: ${url}`;
    let text = await res.text();
    text = text.replace(/^# (.*)/, `---\ntitle: ${name}\n---`);
    fs.writeFileSync(path, text);
    console.log(`Built: ${path}`);
  }
}

// System

main()
  .then()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
