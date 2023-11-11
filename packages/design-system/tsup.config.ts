import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "lib",
  dts: true,
  // See https://esbuild.github.io/content-types/#auto-import-for-jsx
  inject: ["./jsxShim.js"],
});
