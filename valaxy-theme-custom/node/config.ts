import type { ThemeConfig } from "../types";

/**
 * Default Theme Config
 */
export const defaultThemeConfig: ThemeConfig = {
  valaxyDarkOptions: {
    useDarkOptions: {
      selector: "html",
      valueDark: "theme-dark",
      valueLight: "",
      disableTransition: false,
    },
    
    circleTransition: true,
  },
};
