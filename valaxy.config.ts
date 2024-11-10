import { defineValaxyConfig } from "valaxy";
import type { ThemeConfig } from "valaxy-theme-custom";
import { addonLightGallery } from "valaxy-addon-lightgallery";
import compression from "vite-plugin-compression2";
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { startAISummary } from "./utils/aiSummary";

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  addons: [
    addonLightGallery(),
  ],

  hooks: {
    "build:before": async () => {
      console.log("🌌 - 🤖 | Generating AI summary, this may take a while...");
      await startAISummary();
    },
  },

  vite: {
    optimizeDeps: {
      include: ["artalk", "axios"],
    },
    plugins: [
      compression(),
      ViteMinifyPlugin({
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      }),
    ],
  },

  theme: "custom",

  themeConfig: {
    author: {
      slogan: "也许我们会分别，但我们将永远不会忘记彼此",
    },

    footer: {
      since: 2021,
      beian: {
        icp: {
          enable: true,
          info: "晋 ICP 备 2024031556 号 - 1",
        },
        moe: {
          enable: true,
          info: "20230105",
        },
      },
      hitokoto: {
        enable: true,
      }
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
      type: "info",
      content: "这里是公告内容",
    },

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

    pageLoading: true,
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

  build: {
    ssgForPagination: true,
  },

  modules: {
    rss: {
      enable: true,
      fullText: false,
    },
  }
});
