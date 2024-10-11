import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "uiStore",
  state: () => ({
    theme: useColorMode().preference as ThemeKey,
    color: (localStorage.getItem("theme-color-mode") as ColorKey) || "blue",
  }),
});
