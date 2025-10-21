import tailwindcss from "@tailwindcss/vite";

import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    dataValue: "theme",
  },
});
