import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "https://lihaoyu.cn",
  favicon: "https://blog-api.lihaoyu.cn/favicon",
  lang: "zh-CN",
  title: "晓雨杂记",
  author: {
    name: "Big_Cake",
    avatar: "https://blog-api.lihaoyu.cn/avatar",
    email: "me@lihaoyu.cn",
    link: "https://lihaoyu.cn",
  },
  description: "于风雨中 承载所有的回忆",
  subtitle: "也许我们会分别，但我们将永远不会忘记彼此",
  timezone: "Asia/Shanghai",

  feed: {
    favicon: "https://blog-api.lihaoyu.cn/favicon"
  },

  cdn: {
    prefix: "https://npm.onmicrosoft.cn/",
  },

  social: [
    {
      name: "RSS",
      link: "/atom.xml",
      icon: "i-ri-rss-line",
      color: "orange",
    },
    {
      name: "QQ",
      link: "http://wpa.qq.com/msgrd?v=3&uin=2577117205&site=qq&menu=yes",
      icon: "i-ri-qq-line",
      color: "#12B7F5",
    },
    {
      name: "GitHub",
      link: "https://github.com/Big-Cake-jpg",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "网易云音乐",
      link: "https://music.163.com/#/user/home?id=3812611237",
      icon: "i-ri-netease-cloud-music-line",
      color: "#C20C0C",
    },
    {
      name: "知乎",
      link: "https://www.zhihu.com/people/bigcake-19",
      icon: "i-ri-zhihu-line",
      color: "#0084FF",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/523235567",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Big_Cake080105",
      icon: "i-ri-twitter-line",
      color: "#1da1f2",
    },
    {
      name: "Telegram Channel",
      link: "https://t.me/BigCakeBlog",
      icon: "i-ri-telegram-line",
      color: "#0088CC",
    },
    {
      name: "百度贴吧",
      link: "https://tieba.baidu.com/home/main?id=tb.1.f0f48c80.0RMWKRqi00nEW65GQhsxQA?t=1586957539&fr=index",
      icon: "i-ri-baidu-line",
      color: "#317EF3",
    },
    {
      name: "E-Mail",
      link: "mailto:me@lihaoyu.cn",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
  ],

  search: {
    enable: true,
    type: "fuse",
  },

  sponsor: {
    enable: true,
    description: "给我打钱，助力晓雨成为虚拟主播（划掉",
    methods: [
      {
        name: "支付宝",
        url: "https://r2.lihaoyu.cn/2023/05/03/64520662bf7cc.webp",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
      {
        name: "QQ 支付",
        url: "https://r2.lihaoyu.cn/2023/05/03/645205f8edce4.webp",
        color: "#12B7F5",
        icon: "i-ri-qq-line",
      },
      {
        name: "微信支付",
        url: "https://r2.lihaoyu.cn/2023/05/03/6452066936578.webp",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line",
      },
    ],
  },

  comment: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },

  statistics: {
    enable: true,
  },
});
