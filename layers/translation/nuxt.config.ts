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
    port: 6002,
  },
  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "prefix",
    defaultLocale: "en",
    locales: [
      {
        name: "English",
        code: "en",
        language: "en",
        flag: "https://xjectro.b-cdn.net/1727204052440-5b07967f91731b0d78cd0dba372318ed-usa.png",
        file: resolve("./app/locales/en.json"),
      },
      {
        name: "Türkçe",
        code: "tr",
        language: "tr",
        flag: "https://xjectro.b-cdn.net/1727203979245-488689992f70a66fafdb28671b4d0781-tr.png",
        file: resolve("./app/locales/tr.json"),
      },
    ],
  },
  modules: ["@nuxtjs/i18n"],
});
