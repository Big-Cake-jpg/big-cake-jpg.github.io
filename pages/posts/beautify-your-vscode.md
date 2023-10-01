---
layout: post
title: 万物皆可美化之 VSCode
date: 2023-10-01 12:35:37
updated: 2023-10-01 12:35:37
tags: 
  - VSCode
  - 美化
categories: 记录
cover: https://r2.lihaoyu.cn/2023/10/01/6518f7e39e17c.webp
---
啥？这年头连 VSCode 都能美化？

<!-- more -->

## 起因

一直以来，VSCode 给我的印象就只是一个黑乎乎或者亮瞎眼的再普通不过的界面了。从某种程度上来讲，这样的界面和 Windows 11 很不搭配，我就在想 VSCode 不是有主题嘛，社区肯定也会有一些好看的主题吧。事实上，真的有。

## 操作

### 以管理员身份启动 VSCode

我们首先需要把所有正在运行的 VSCode 关掉，然后以管理员身份启动 VSCode，这样才能进行下一步操作。

![1696135369271.webp](https://r2.lihaoyu.cn/2023/10/01/6518f8cea562b.webp)

需要注意的一点是，以管理员身份启动 UserSetup 模式的 VSCode 会自动禁用更新。

### 安装主题

打开侧边栏里的「扩展」，然后搜索 `Fluent`，安装 Fluent Pack 扩展包。这会安装四个扩展（两个主题，两个图标包）。

![1696136046269.webp](https://r2.lihaoyu.cn/2023/10/01/6518fb72a4529.webp)

安装完成以后，在左下角的「管理」、「主题」内更改「产品图标主题」，然后打开命令面板，输入 `Fluent UI: Enable`，回车启用主题。之后应该会有一个气球通知要求我们重新加载窗口，窗口重新加载完成之后就可以正常看到主题的效果了。

![1696136087172.webp](https://r2.lihaoyu.cn/2023/10/01/6518fb998a767.webp)

主题的设置内能自定义背景图片，设置背景图片之后，主题会根据 Windows 11 云母效果对壁纸进行采样并放在背景层。

修改设置之后，需要在命令面板内重载主题才能生效。

### 我不想用了，怎么办？

以管理员身份启动 VSCode，先在命令面板内执行禁用指令，重载窗口之后再卸载主题。

如果你以普通用户身份禁用并卸载了主题，那么你的 `workbench.html` 将会变得面目全非。这时你需要打开 `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench`，以管理员身份打开 `workbench.html` 手动编辑它，删除主题加入的所有处在 `<!-- FUI-CSS-START -->` 和 `<!-- FUI-CSS-END -->.` 注释之间的东西。删完之后，`workbench.html` 看起来应该是这样的：
```html
<!-- Copyright (C) Microsoft Corporation. All rights reserved. -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'none'; img-src 'self' https: data: blob: vscode-remote-resource:; media-src 'self'; frame-src 'self' vscode-webview:; object-src 'self'; script-src 'self' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self' https: ws:; font-src 'self' https: vscode-remote-resource:;"
        />
        <meta
            http-equiv="Content-Security-Policy"
            content="require-trusted-types-for 'script'; trusted-types amdLoader cellRendererEditorText defaultWorkerFactory diffEditorWidget stickyScrollViewLayer editorGhostText domLineBreaksComputer editorViewLayer diffReview dompurify notebookRenderer safeInnerHtml standaloneColorizer tokenizeToString;"
        />
    </head>

    <body aria-label=""></body>

    <!-- Startup (do not modify order of script tags!) -->
    <script src="workbench.js"></script>
</html>

```
或者你也可以单纯直接重装 VSCode。
