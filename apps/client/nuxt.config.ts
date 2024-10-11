// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    app: {
      title: "Jectro",
      serverUrl: "http://localhost:5000",
    },
  },
  devServer: {
    port: 3000,
  },
  extends: ["@repo/ui", "@repo/translation", "@repo/utils"],
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
});
