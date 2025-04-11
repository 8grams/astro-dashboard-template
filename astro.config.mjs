// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  server: {
    host: true,
  },

  experimental: {
    svg: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
