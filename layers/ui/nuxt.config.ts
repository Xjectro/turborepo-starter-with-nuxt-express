import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  devServer: {
    port: 6001,
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Prompt: [400, 500, 700],
      "Chakra Petch": [400, 500, 700],
      "Ubuntu Mono": [400, 500, 700],
    },
  },
  css: [resolve("./app/assets/css/main.css")],
  tailwindcss: {
    configPath: "tailwind.config",
  },
  colorMode: {
    storageKey: "theme",
  },
  shadcn: {
    prefix: "Ui",
    componentDir: resolve("./app/components/ui"),
  },
  alias: {
    "@/ui": resolve("./"),
    "~/ui": resolve("./"),
  },
  extends: ["@repo/translation"],
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "shadcn-nuxt",
  ],
});
