---
title: 我的小伙伴们
keywords: 链接
description: 以及穗香咖啡馆的各位！
links: https://api.lihaoyu.cn/blog/links/inpage
links_global: https://api.lihaoyu.cn/blog/links/global
random: true
aplayer: true
medium_zoom: false
---

<meting-js
 id="2005302493"
 server="netease"
 type="song"
 theme="#F2BC57">
</meting-js>

友链需要一定时间来加载，如果无法显示，请确认 `api.lihaoyu.cn` 是否能够正常访问。

---

## 内页友链

此处的友链仅显示在本页面上。

<YunLinks :links="frontmatter.links" :random="frontmatter.random" />

## 全站友链

此处友链不仅会显示在本页，也会显示在全站页脚部分。

<YunLinks :links="frontmatter.links_global" :random="frontmatter.random" />

---

## 提交友链

来交换友链吧！在交换友链之前，你需要先添加我的链接，并在此之前与我有过一定的互动。

我的信息如下：

- 链接：https://lihaoyu.cn
- 头像（2360x，WebP）：https://blog-api.lihaoyu.cn/avatar
  - 512x，WebP：https://blog-api.lihaoyu.cn/images/profile/avatar-512x.webp
  - 128x，WebP：https://blog-api.lihaoyu.cn/images/profile/avatar-128x.webp
  - Gravatar E-Mail Hash：`636d113ce37111d08f08faee780ce9b8`
- 站点名称：晓雨杂记
- 昵称：Big_Cake / 晓雨
- 主题色：`#F2BC57`
- 描述：也许我们会分别，但我们将永远不会忘记彼此

```json
{
    "url": "https://lihaoyu.cn", // 链接
    "avatar": "https://blog-api.lihaoyu.cn/avatar", // 头像
    "name": "Big_Cake", // 昵称
    "color": "#F2BC57", // 主题色
    "blog": "晓雨杂记", // 站点名称
    "desc": "也许我们会分别，但我们将永远不会忘记彼此。" // 一句话介绍
}
```

如果想要提交友链，请移步[这里](https://github.com/Big-Cake-jpg/friend-links)按照说明提交 Pull Request。如果你的友链为全站链接，我会同样将你的小站同时放置在本页与全站页脚。

你可以在 `https://api.lihaoyu.cn/blog/links/inpage` 查看所有友链的 JSON 格式数据。

如果没有其它情况出现，我不会移除友链。但如果你在上述流程通过以后移除了我的友链，那么我也会毫不留情的删除你的小站。
