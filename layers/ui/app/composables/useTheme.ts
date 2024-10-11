import { useStore } from "../stores";

const themes = [
  {
    key: "dark",
    color: "#000000",
  },
  { key: "light", color: "#ffffff" },
] as Theme[];

const colors = [
  { key: "red", color: "#ef4444" },
  { key: "blue", color: "#3b82f6" },
  { key: "green", color: "#22c55e" },
  { key: "orange", color: "#f97316" },
  { key: "yellow", color: "#eab308" },
  { key: "purple", color: "#a855f7" },
  { key: "pink", color: "#ec4899" },
  { key: "gray", color: "#6b7280" },
] as Color[];

export function useTheme() {
  const store = useStore();

  const setTheme = (recentTheme: ThemeKey) => {
    const colorMode = useColorMode();
    store.theme = recentTheme;
    colorMode.preference = recentTheme;
  };

  const setColorMode = (recentColor: ColorKey) => {
    const isValidTheme = colors.some((t) => t.key === recentColor);
    if (isValidTheme) {
      store.color = recentColor;
      localStorage.setItem("theme-color-mode", recentColor);
    }
  };

  return {
    get themes() {
      return themes;
    },
    get colors() {
      return colors;
    },
    get color() {
      return store.color;
    },
    get theme() {
      return store.theme;
    },
    setTheme,
    setColorMode,
    get store() {
      return store;
    },
  };
}
