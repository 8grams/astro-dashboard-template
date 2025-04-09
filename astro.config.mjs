// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SITE_NAME: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
