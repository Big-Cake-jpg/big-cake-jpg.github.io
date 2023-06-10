---
title: 我的小伙伴们
keywords: 链接
description: 以及穗香咖啡馆的各位！
links: https://api.lihaoyu.cn/api/blog/links
random: true
aplayer: true
toc: false
medium_zoom: false
---

<meting-js
 id="2005302493"
 server="netease"
 type="song"
 theme="#F2BC57">
</meting-js>

友链需要一定时间来加载，如果无法显示，请确认 `api.lihaoyu.cn` 是否能够正常访问。

<YunLinks :links="frontmatter.links" :random="frontmatter.random" />

来交换友链吧！在交换友链之前，你的小站需要满足以下条件：

- **支持 HTTPS 协议；**
  - （可选）支持的 TLS 版本最低为 v1.2
- **文章数量 >= 10 篇；**
  - 个人主页不受此条件限制
  - **原创文章至少有 5 篇**
- **文章内不得出现违反中华人民共和国法律的内容；**
- **在中国大陆地区能够正常访问；**
- **服务器位于国内的，需要进行备案；**
- **已将本站添加至友链列表。**

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

如果你已经满足了这些条件，就可以在评论区内按以下格式提交你的信息。提交时，请注意使用 Markdown 的代码块语法将其包裹并删除注释。
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
现已不支持自主提交 Pull Requests 的方式提交友链，请考虑打开一个 Issue 或者按照上述方式在评论区留言。你可以在 `https://api.lihaoyu.cn/api/blog/links` 查看所有友链的 JSON 格式数据。

> 可能以后会考虑搭建自助上链的接口，咕咕咕。

如果没有其它情况出现，我不会移除友链。但如果你在上述流程通过以后移除了我的友链，那么我也会毫不留情的删除你的小站。
