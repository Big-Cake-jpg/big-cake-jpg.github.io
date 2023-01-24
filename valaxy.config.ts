import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
import { addonAlgolia } from 'valaxy-addon-algolia'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-fluent-vehicle-subway-24-regular',
]

/**
 * User Config
 */
export default defineConfig<ThemeConfig>({
  url: 'https://bigcake.cakemc.top',
  favicon: 'https://r2.cakeskin.tk/avatar.webp',
  lang: 'zh-CN',
  title: '大蛋糕的烘焙坊',
  author: {
    name: 'Big_Cake',
    avatar: 'https://r2.cakeskin.tk/avatar.webp',
  },
  description: '一个屑初三学生的小窝',
  subtitle: '也许我们会分别，但我们将永远不会忘记彼此',
  cdn: {
    prefix: 'https://npm.onmicrosoft.cn',
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'http://wpa.qq.com/msgrd?v=3&uin=2577117205&site=qq&menu=yes',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Big-Cake-jpg',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=3812611237',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/bigcake-19',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/523235567',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Big_Cake080105',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/BigCakeBlog',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: '百度贴吧',
      link: 'https://tieba.baidu.com/home/main?id=tb.1.f0f48c80.0RMWKRqi00nEW65GQhsxQA?t=1586957539&fr=index',
      icon: 'i-ri-baidu-line',
      color: '#317EF3'
    },
    {
      name: 'E-Mail',
      link: 'mailto:bigcake@cakemc.top',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    }
  ],

  search: {
    enable: true,
    type: 'algolia',
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://r2.cakeskin.tk/alipay-qrcode.webp',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://r2.cakeskin.tk/qq-qrcode.webp',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
    ],
  },

  comment: {
    enable: true,
  },

  addons: [
    addonAlgolia({
      appId: '8WHCI2MGOD',
      apiKey: '1c51edcec3f0f6e9b2c0e1d3d7d76502',
      indexName: 'BigCake Blog',
    }),
    addonWaline({
      serverURL: 'https://waline.bigcake.cakemc.top',
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

  unocss: { safelist },
})

