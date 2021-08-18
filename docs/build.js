const fs = require("fs");
const fetch = require("node-fetch");

// Config

const URL = "https://raw.githubusercontent.com/frictionlessdata";
const DOCS = [
  { repo: "tableschema-py", path: "table-schema/python.md" },
  { repo: "datapackage-py", path: "data-package/python.md" },
];

// Main

async function main() {
  for (const doc of DOCS) {
    const url = `${URL}/${doc.repo}/${doc.branch || "main"}/README.md`;
    const path = `docs/${doc.path}`;
    const res = await fetch(url);
    let text = await res.text();
    text = text.replace(/^# (.*)/, "---\ntitle: $1\n---");
    fs.writeFileSync(path, text);
    console.log(`Built: ${path}`);
  }
}

// System

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
