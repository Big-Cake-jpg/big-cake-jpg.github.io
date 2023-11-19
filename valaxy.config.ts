import { defineValaxyConfig } from "valaxy";
import type { ThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";
import { addonLightGallery } from "valaxy-addon-lightgallery";
import { VitePWA } from "vite-plugin-pwa";
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
    /*
    addonMeting({
      global: true,
      options: {
        id: "8048058894",
        server: "netease",
        type: "playlist",
        fixed: true, 
      },
    }),
    */
  ],

  vite: {
    optimizeDeps: {
      include: ["@waline/client", "axios"],
    },
    plugins: [
      VitePWA({
        injectRegister: "auto",
        registerType: "autoUpdate",
        manifest: {
          name: "晓雨杂记",
          short_name: "晓雨杂记",
          description: "也许我们会分别，但我们将永远不会忘记彼此",
          theme_color: "#F2BC57",
          background_color: "#FFFFFF",
          lang: "zh-CN",
          icons: [
            {
              src: "https://blog-api.lihaoyu.cn/images/profile/avatar.webp",
              sizes: "2360x2360",
              type: "image/webp",
              purpose: "any maskable",
            },
            {
              src: "https://blog-api.lihaoyu.cn/images/profile/pwa-512x512.webp",
              sizes: "512x512",
              type: "image/webp",
              purpose: "any maskable",
            },
            {
              src: "https://blog-api.lihaoyu.cn/images/profile/pwa-128x128.webp",
              sizes: "128x128",
              type: "image/webp",
              purpose: "any maskable",
            },
            {
              src: "https://blog-api.lihaoyu.cn/images/profile/android-chrome-96x96.webp",
              sizes: "96x96",
              type: "image/webp",
              purpose: "any maskable",
            },
            {
              src: "https://blog-api.lihaoyu.cn/images/profile/apple-touch-icon.png",
              sizes: "76x76",
              type: "image/png",
              purpose: "any maskable",
            },
            {
              src: "https://blog-api.lihaoyu.cn/images/profile/android-chrome-36x36.webp",
              sizes: "36x36",
              type: "image/webp",
              purpose: "any maskable",
            },
          ],
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,json}"],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/jsd\.onmicrosoft\.cn\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "jsdelivr-cdn-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/oss-cdn\.lihaoyu\.cn\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "blog-images-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/r2\.lihaoyu\.cn\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "blog-images-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/blog-api\.lihaoyu\.cn\/.*/i,
              handler: "NetworkFirst",
              options: {
                cacheName: "blog-images-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/npm\.onmicrosoft\.cn\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "unpkg-cdn-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "gstatic-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
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
        "由于 PWA 缓存问题，如果您看到 RSS 订阅更新想要浏览新文章，需要等待约半分钟以让 Service Worker 获取新的内容。获取完成后页面会自动刷新，显示新的内容。",
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
        url: "https://travellings.cn/go.html",
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
