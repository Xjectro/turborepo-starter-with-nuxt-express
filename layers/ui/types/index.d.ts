type ColorKey =
  | "red"
  | "blue"
  | "green"
  | "orange"
  | "yellow"
  | "purple"
  | "pink"
  | "gray";
type ThemeKey = "dark" | "light";
interface Color {
  key: ColorKey;
  color: string;
}
interface Theme {
  key: ThemeKey;
  color: string;
}
