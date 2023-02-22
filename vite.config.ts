import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import SveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  mode: "development",
  build: {
    minify: false,
    rollupOptions: {
      input: [
        "./src/demo/Father.svelte",
        "./src/demo/Child1.svelte",
        "./src/demo/Child2.svelte",
      ],
      output: {
        // format: "iife",
        // compact: true,
        // noConflict: true,
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [
    svelte({
      preprocess: SveltePreprocess({ scss: true, typescript: true }),
      prebundleSvelteLibraries: true,
      compilerOptions: {
        customElement: true,
        // dev: true,
        css: true,
      },
      emitCss: true,
    }),
  ],
});
