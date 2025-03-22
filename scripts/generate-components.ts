import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgsPath = path.join(__dirname, "../src/icons/svgs");
const componentsPath = path.join(__dirname, "../src/icons/components");

// Ensure components directory exists
if (!fs.existsSync(componentsPath)) {
  fs.mkdirSync(componentsPath, { recursive: true });
}

// Get all SVG files in the folder
const svgFiles = fs
  .readdirSync(svgsPath)
  .filter((file) => file.endsWith(".svg"));

svgFiles.forEach((file) => {
  const componentName = path.basename(file, ".svg"); // Remove .svg extension
  const componentTsx = `
import * as React from "react";
import ${componentName}Svg from "../svgs/${file}";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ${componentName}: React.FC<IconProps> = ({ size = 24, ...props }) => {
  return <${componentName}Svg width={size} height={size} {...props} />;
};

export default ${componentName};
  `.trim();

  // Write the component file
  const componentPath = path.join(componentsPath, `${componentName}.tsx`);
  fs.writeFileSync(componentPath, componentTsx, "utf-8");
  console.log(`Generated component: ${componentName}.tsx`);
});

console.log("All components generated successfully!");
