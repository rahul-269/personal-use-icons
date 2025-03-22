import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/icons/index.ts", // Entry point of your TypeScript icons
  output: [
    {
      file: "dist/index.cjs.js", // CommonJS output
      format: "cjs",
      sourcemap: true, // Include sourcemap for easier debugging
    },
    {
      file: "dist/index.esm.js", // ES Module output
      format: "esm",
      sourcemap: true, // Include sourcemap for easier debugging
    },
  ],
  plugins: [
    resolve(), // Resolve node modules
    commonjs(), // Convert CommonJS to ES6
    typescript({
      // Handle TypeScript
      tsconfig: "./tsconfig.json", // Ensure using your tsconfig
      declaration: true, // Enable declaration file generation
      declarationDir: "dist", // Output the declaration files to `dist/`
    }),
    svgr({
      icon: true, // Makes SVGs inherit `size`
      expandProps: "end", // Moves props to the end for easier overriding
    }), // Handle SVG imports as React components
    babel({
      babelHelpers: "bundled",
      presets: [
        ["@babel/preset-react", { runtime: "automatic" }], // ✅ Ensures automatic JSX runtime
      ], // ✅ Ensures JSX is correctly transformed
      extensions: [".ts", ".tsx"],
      exclude: "node_modules/**",
    }),
  ],
  external: ["react", "react/jsx-runtime"], // Treat React as an external dependency
};
