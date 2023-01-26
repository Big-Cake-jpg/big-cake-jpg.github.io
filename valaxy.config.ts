import type { UserValaxyNodeConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonComponents } from 'valaxy-addon-components'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * User Config
 */
const config: UserValaxyNodeConfig<UserThemeConfig> = {

  addons: [
    addonComponents(),
    addonAlgolia({
      appId: '8WHCI2MGOD',
      apiKey: '1c51edcec3f0f6e9b2c0e1d3d7d76502',
      indexName: 'BigCake Blog',
    }),
    addonWaline({
      serverURL: 'https://waline.lihaoyu.cn',
      locale:{
        placeholder: '求求你了，说几句话吧（请先登录）'
      },
      comment: true,
      pageview: true,
      emoji: [
        'https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/bilibili/',
        'https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/weibo/',
        'https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/qq/',
        'https://jsd.onmicrosoft.cn/npm/@waline/emojis@latest/tieba/',
        'https://jsd.onmicrosoft.cn/gh/walinejs/emojis@latest/bmoji/',
      ],
      login: 'force',
    }),
  ],

  vite: {
    plugins: [
      VitePWA({ 
        injectRegister: 'auto',
        registerType: 'autoUpdate',
        manifest: {
          name: '大蛋糕的烘焙坊',
          short_name: '大蛋糕的烘焙坊',
          description: '也许我们会分别，但我们将永远不会忘记彼此',
          theme_color: '#F2BC57',
          icons: [
            {
              src: 'https://r2.cakeskin.tk/avatar.webp',
              sizes: '192x192',
              type: 'image/webp'
            }
          ]
        }
      })
    ],
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '大蛋糕的烘焙坊',
      cloud: {
        enable: true,
      },
    },
    pages: [
      {
        name: '友链',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '虫洞',
        url: 'https://foreverblog.cn/go.html',
        icon: 'i-ri-checkbox-blank-circle-fill',
        color: 'gray',
      },
    ],

    footer: {
      since: 2021,
    },

    bg_image: {
      enable: true,
      url: 'https://r2.cakeskin.tk/bg-bright-blur-10px.webp',
      dark: 'https://r2.cakeskin.tk/bg-dark.webp',
    },

    say: {
      enable: true,
      api: 'https://el-bot-api.vercel.app/api/words/young',
      hitokoto: {
        enable: true,
        api: 'https://v1.hitokoto.cn',
      },
    },

    colors: {
      primary: '#F2BC57',
    },
    
    menu: {
      custom: {
        title: '开往',
        url: 'https://www.travellings.cn/go.html',
        icon: 'i-fluent-vehicle-subway-24-regular'
      }
    },
  },
}

config.themeConfig?.pages?.forEach((item) => {
  config.unocss?.safelist?.push(item?.icon)
})

export default config
