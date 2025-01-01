import { defineTheme } from "valaxy";
import type { ThemeConfig } from "./types";
import { defaultThemeConfig } from "./node/config";

export default defineTheme<ThemeConfig>((options) => {
  return {
    themeConfig: defaultThemeConfig,
  };
});
