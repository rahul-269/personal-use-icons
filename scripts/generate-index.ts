import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsPath = path.join(__dirname, "../src/icons/components");
const outputPath = path.join(__dirname, "../src/icons/index.ts");

// Collect all .tsx files in components folder
const files = globSync(`${componentsPath}/*.tsx`);

// Create export statements
const exports = files
  .map((file) => {
    const componentName = path.basename(file, ".tsx");
    return `export { default as ${componentName} } from './components/${componentName}';`;
  })
  .join("\n");

// Write to index.ts file
fs.writeFileSync(outputPath, exports, "utf-8");
console.log("Generated index.ts with exports");
