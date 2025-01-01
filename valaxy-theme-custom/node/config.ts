import type { ThemeConfig } from "../types";

/**
 * Default Theme Config
 */
export const defaultThemeConfig: ThemeConfig = {
  valaxyDarkOptions: {
    useDarkOptions: {
      selector: "html",
      attribute: 'data-theme',
      valueDark: "dark",
      valueLight: "light",
      disableTransition: false,
    },

    circleTransition: false,
  },
};
