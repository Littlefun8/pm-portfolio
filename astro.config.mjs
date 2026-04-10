// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. GitHub Pages 完整地址
  site: 'https://Littlefun8.github.io',
  // 2. 仓库名作为子路径
  base: '/pm-portfolio', 
  vite: {
    plugins: [tailwindcss()],
  },
});
