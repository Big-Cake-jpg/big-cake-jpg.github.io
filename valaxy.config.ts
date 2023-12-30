import { defineValaxyConfig } from "valaxy";
import type { ThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";
import { addonLightGallery } from "valaxy-addon-lightgallery";
// import { VitePWA } from "vite-plugin-pwa";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// import { addonMeting } from "valaxy-addon-meting";

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  addons: [
    addonComponents(),
    addonWaline({
      serverURL: "https://waline.lihaoyu.cn",
      pageview: true,
      comment: true,
      search: false,
      locale: {
        placeholder: "填写邮箱，可以收到回复通知",
      },
      turnstileKey: "0x4AAAAAAALA9mD_xYAnGQhJ",
    }),
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
      include: ["@waline/client", "axios", "consola"],
    },
    plugins: [
      nodePolyfills({
        include: ["process"],
      }),
    ],
  },

  theme: "yun",

  themeConfig: {
    notice: {
      enable: true,
      content:
        "由于一些体验上的原因，本站 PWA 功能已下线，恢复时间待定。本站将在寒假期间尝试进行 ICP 备案，如发现站点无法访问请不要见怪。",
    },
    banner: {
      enable: true,
      title: "晓雨杂记",
      cloud: {
        enable: true,
      },
    },
    pages: [
      {
        name: "友链",
        url: "/links/",
        icon: "i-ri-link",
        color: "dodgerblue",
      },
      {
        name: "相册集",
        url: "/albums/",
        icon: "i-ri-gallery-line",
        color: "#F2BC57",
      },
      {
        name: "虫洞",
        url: "https://foreverblog.cn/go.html",
        icon: "i-ri-checkbox-blank-circle-fill",
        color: "gray",
      },
      {
        name: "隐私政策",
        url: "/policies/privacy",
        icon: "i-ri-chat-private-line",
        color: "red",
      },
      /* {
        name: '说说',
        url: '/artitalk/',
        icon: 'i-ri-message-line',
        color: '#ff9e77',
      }, */
    ],

    footer: {
      since: 2021,
    },

    bg_image: {
      enable: true,
      url: "https://r2.lihaoyu.cn/2023/11/19/65598e48e257c.webp",
      dark: "https://r2.lihaoyu.cn/2023/11/19/65598e613e4d0.webp",
    },

    say: {
      enable: true,
      api: "https://el-bot-api.vercel.app/api/words/young",
      hitokoto: {
        enable: true,
        api: "https://v1.hitokoto.cn",
      },
    },

    colors: {
      primary: "#F2BC57",
    },

    menu: {
      custom: {
        title: "menu.travellings",
        url: "https://www.travellings.cn/go.html",
        icon: "i-fluent-vehicle-subway-24-regular",
      },
    },

    fireworks: {
      enable: true,
      colors: ["#F2BC57", "#F2CD5E", "#F2F2F2"],
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
