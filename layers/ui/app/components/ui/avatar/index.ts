import { type VariantProps, cva } from "class-variance-authority";

export { default as Avatar } from "./Avatar.vue";

export const avatarVariants = cva("relative overflow-hidden", {
  variants: {
    size: {
      small: "min-w-8 min-h-8 max-w-8 max-h-8",
      large: "min-w-10 min-h-10 max-w-10 max-h-10",
      xl: "min-w-12 min-h-12 max-w-12 max-h-12",
      "2xl": "min-w-20 min-h-20 max-w-20 max-h-20",
      "3xl": "min-w-22 min-h-22 max-w-22 max-h-22",
      "4xl": "min-w-24 min-h-24 max-w-24 max-h-24",
      "5xl": "min-w-28 min-h-28 max-w-28 max-h-28",
      "6xl": "min-w-32 min-h-32 max-w-32 max-h-32",
      "7xl": "min-w-36 min-h-36 max-w-36 max-h-36",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md",
    },
    hover: {
      true: "hover:outline-zinc-400 dark:hover:outline-zinc-800",
      false: "",
    },
    border: {
      true: "transition-all duration-75 w-full h-full object-cover outline outline-2 outline-offset-2 outline-zinc-300 dark:outline-zinc-900",
      false: "",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
