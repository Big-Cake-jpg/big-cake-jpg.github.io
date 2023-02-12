import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://lihaoyu.cn',
  favicon: 'https://img-blog.csdnimg.cn/5f3a26e6ee01493f9373a38633e5f2df.webp',
  lang: 'zh-CN',
  title: '大蛋糕的烘焙坊',
  author: {
    name: 'Big_Cake',
    avatar: 'https://img-blog.csdnimg.cn/5f3a26e6ee01493f9373a38633e5f2df.webp',
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
      link: 'mailto:me@lihaoyu.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    }
  ],

  search: {
    enable: true,
    type: 'fuse',
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c09db7ea98b4b25877f39aae18571d2~tplv-k3u1fbpfcp-zoom-1.image',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d12d93b6ce384958a02c194ab5b3adce~tplv-k3u1fbpfcp-zoom-1.image',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/87e06b06e03e418bb903b89b9f5cf6a3~tplv-k3u1fbpfcp-zoom-1.image',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  comment: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },
})
