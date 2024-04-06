import * as path from "path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import packageJson from "./package.json";

/**
 * @type {import("vite").UserConfig}
 */
export default defineConfig({
  mode: process.env.MODE,
  root: __dirname,
  server: {
    port: Number(process.env.PORT || 3000),
    watch: {
      usePolling: true,
      interval: 100,
      binaryInterval: 300,
    },
    //   proxy: {
    //     "/": {
    //       target: "http://localhost:3000",
    //       changeOrigin: true,
    //     },
    //   },
  },
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
    minify: "esbuild",
    sourcemap: true,
    lib: {
      entry: {
        main: path.resolve(__dirname, "./src/main.ts"),
      },
      name: "[name]",
      formats: ["cjs"],
    },
    rollupOptions: {
      external: extractDependencies(),
    },
  },
  plugins: [
    ...VitePluginNode({
      adapter: "nest",
      appPath: path.resolve(__dirname, "./src/main.ts"),
      appName: "api",
      exportName: "webApp",
      tsCompiler: "esbuild",
    }),
  ],
  // optimizeDeps: {
  //   exclude: ["cache-manager", "class-transformer", "class-validator"],
  // },
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src") + "/",
      "^/": path.resolve(__dirname, "./") + "/",
    },
  },
});

function extractDependencies(): string[] {
  const { dependencies, devDependencies } = packageJson;
  return Object.keys({ ...dependencies, ...devDependencies });
}
