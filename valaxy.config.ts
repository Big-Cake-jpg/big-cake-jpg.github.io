import type { UserValaxyNodeConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
import { addonComponents } from 'valaxy-addon-components'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * User Config
 */
const config: UserValaxyNodeConfig<UserThemeConfig> = {

  addons: [
    addonComponents(),
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
          background_color: '#FFFFFF',
          lang: 'zh-CN',
          icons: [
            {
              src: 'https://img-blog.csdnimg.cn/ce065f18d7b74f7e82031035e6c70c04.png',
              sizes: '512x512',
              type: 'image/png'
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
      url: 'https://img-blog.csdnimg.cn/9efc77cc284e40558dabef188bed7eb0.png',
      dark: 'https://img-blog.csdnimg.cn/f32de22f7f7b486c9ed9eddda549557a.png',
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

export default config
