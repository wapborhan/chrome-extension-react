import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/icon/*", // Source directory
          dest: "assets/icons", // Destination inside dist/
        },
        {
          src: "src/assets/images/*", // Source directory
          dest: "assets/images", // Destination inside dist/
        },
        {
          src: "src/background/background.js", // Source directory
          dest: "assets/js", // Destination inside dist/
        },
      ],
    }),
  ],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        popup: path.resolve(__dirname, "popup.html"),
      },
      output: {
        entryFileNames: "assets/js/[name].js",
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
