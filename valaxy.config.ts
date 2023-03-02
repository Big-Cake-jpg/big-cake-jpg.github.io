import type { UserValaxyNodeConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";
// import { VitePWA } from "vite-plugin-pwa";

/**
 * User Config
 */
const config: UserValaxyNodeConfig<UserThemeConfig> = {
  addons: [
    addonComponents(),
    addonWaline({
      serverURL: "https://waline.lihaoyu.cn",
      locale: {
        placeholder: "填写邮箱的话，可以收到邮件通知哦",
      },
      comment: true,
      pageview: true,
      emoji: [
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/bilibili/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/",
        "https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/",
        "https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/",
      ],
      recaptchaV3Key: "6LdLYzUkAAAAAHFU1gBSqoKsrKkb_yKdOgDuJEih",
    }),
  ],

   vite: {
    plugins: [
      /* VitePWA({ 
        injectRegister: 'auto',
        registerType: 'autoUpdate',
        manifest: {
          name: '大蛋糕的烘焙坊',
          short_name: '大蛋糕的烘焙坊',
          description: '也许我们会分别，但我们将永远不会忘记彼此',
          theme_color: '#F2BC57',
          background_color: '#FFFFFF',
          lang: 'zh-CN',
          icons: [
            {
              src: 'https://img-blog.csdnimg.cn/41926c33b9b64e8183a08a558e120f9c.webp',
              sizes: '512x512',
              type: 'image/webp'
            }
          ]
        }
      }) */
    ],
  },

  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "大蛋糕的烘焙坊",
      cloud: {
        enable: true,
      },
    },
    pages: [
      {
        name: "友链",
        url: "/links/",
        icon: "i-ri-genderless-line",
        color: "dodgerblue",
      },
      {
        name: "虫洞",
        url: "https://foreverblog.cn/go.html",
        icon: "i-ri-checkbox-blank-circle-fill",
        color: "gray",
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
      url: "https://blog-api.lihaoyu.cn/images/bg-bright-blur-10px.webp",
      dark: "https://blog-api.lihaoyu.cn/images/bg-dark.webp",
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
        title: "开往",
        url: "https://www.travellings.cn/go.html",
        icon: "i-fluent-vehicle-subway-24-regular",
      },
    },
  },
};

export default config;
