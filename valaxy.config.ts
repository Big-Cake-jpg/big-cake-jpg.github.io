import { defineValaxyConfig } from "valaxy";
import type { ThemeConfig } from "valaxy-theme-custom";
// import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";
import { addonLightGallery } from "valaxy-addon-lightgallery";
import compression from "vite-plugin-compression2";
// import { VitePWA } from "vite-plugin-pwa";
// import { addonMeting } from "valaxy-addon-meting";

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  addons: [
    addonComponents(),
    addonLightGallery(),
    /* addonMeting({
      global: true,
      props: {
        id: "8048058894",
        server: "netease",
        type: "playlist",
        fixed: true, 
      }, 
    }),*/
  ],

  vite: {
    optimizeDeps: {
      include: ["artalk"],
    },
    plugins: [
      compression(),
    ],
  },

  theme: "custom",

  themeConfig: {
    author: {
      slogan: "也许我们会分别，但我们将永远不会忘记彼此",
    },

    footer: {
      since: 2021,
    },

    pages: [
      {
        name: "归档",
        url: "/archives",
      },
      {
        name: "友链",
        url: "/links",
      },
    ],

    asidePages: [
      {
        name: "隐私政策",
        url: "/policies/privacy",
      },
      {
        name: "关于我",
        url: "/about",
      },
    ],

    quickAccess: [
      {
        name: "RSS",
        url: "/atom.xml",
        icon: "i-ri-rss-line",
      },
    ],

    announcement: {
      enable: false,
    },

    valaxyDarkOptions: {
      useDarkOptions: {
        selector: "html",
        attribute: 'data-theme',
        valueDark: "dark",
        valueLight: "light",
        disableTransition: false,
      },

      circleTransition: true,
    },
  },

  features: {
    katex: false,
  },

  markdown: {
    theme: {
      light: "material-theme-lighter",
      dark: "material-theme-darker",
    },
  },
});
