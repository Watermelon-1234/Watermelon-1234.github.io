---
date: 2026/08/25T03:16:53+08:00
modified: 2026/08/13T11:58:32+08:00
title: 把VSCode改回原本的UI
share: true
comments: true
tags:
  - vscode
  - editor
categories:
  - DEV_OTHER
cover: /images/把Vscode改回原本的UI-1787600918573.webp
poster:
  headline: 把VSCode改回原本的UI
description: VSCode更新了新版UI，但是我看不習慣，所以要把他改回去
mermaid: true
katex: true
mathjax: true
banner: /images/把Vscode改回原本的UI-1787600918573.webp
abbrlink: VSCode-old-UI
---


<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/55IYsSTJWSJR1JFddgLSLJ?utm_source=generator&si=d1186d83e3b74f92" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

# 簡介
VSCode 最近更新了一個新的 UI 介面：
![[把Vscode改回原本的UI-1787600918573.webp|546x342]]

原版↘️：
![[把Vscode改回原本的UI-1787601006099.webp|546x341]]


雖然新版 UI 的圓角也不差，但畢竟我原本的版本用多少年了，當然是很不習慣，所以還是想要換回原本的

# 解決方法
開啟設定（ `ctrl/cmd` + `,` ），之後再搜尋的地方輸入：
```
workbench.experimental.modernUI
```
![[把Vscode改回原本的UI-1787600964504.webp|546x331]]
可以看到他預設是打開的，只要取消勾選就好了👍🏻

# 參考資料 
```embed
title: "the new VSCode UI, looks cute, i don't like it.  · Issue #325240 · microsoft/vscode"
image: "https://avatars.githubusercontent.com/u/25487940?s=64&u=2c66e8fee5a9043cb15bed94e6a07b34b1ca29c7&v=4"
description: "Does this issue occur when all extensions are disabled?: Yes/No VS Code Version: 1.129.0 insiders OS Version: win 11 Steps to Reproduce: Update VSCode 2.look at the tabs The customization like acti..."
url: "https://github.com/microsoft/vscode/issues/325240"
favicon: ""
aspectRatio: "100"
```

