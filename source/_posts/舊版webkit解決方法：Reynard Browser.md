---
date: 2026/08/22T03:24:19+08:00
modified: 2026/08/13T11:58:32+08:00
title: 舊版webkit解決方法：Reynard Browser
share: true
comments: true
tags:
  - ios
  - webkit
  - Application
  - jailbreak
categories:
  - ios
  - jailbreak
cover: https://preview.redd.it/firefox-fork-on-ios-reynard-browser-v0-wrout1fax86h1.jpeg?auto=webp&s=fdc5fbdbe85ef30c5b93b903a307f012caf06999
poster:
  headline: 舊版webkit解決方法：Reynard Browser
description: 這是一款由 Gecko（Firefox 相同核心）寫成的實驗性專案，因為有自己的渲染引擎所以可以解決 webkit 版本過老舊的問題。
mermaid: true
katex: true
mathjax: true
banner: https://preview.redd.it/firefox-fork-on-ios-reynard-browser-v0-wrout1fax86h1.jpeg?auto=webp&s=fdc5fbdbe85ef30c5b93b903a307f012caf06999
abbrlink: reynard-browser
---


# 前言
在 iOS 中，因為 Apple 先前的限制，所有瀏覽器只能使用 WebKit 作為渲染引擎（核心），否則可能無法上架或者有權限的問題。因此在其實所有 iOS 上的瀏覽器 App 在歐盟 DMA 之前都只是 WebKit 的換皮

詳見此文章或查 `Apple browser engine ban` ：
```embed
title: "Apple's Browser Engine Ban Persists, Even Under the DMA - Open Web Advocacy"
image: "https://open-web-advocacy.org/images/og/posts-apples-browser-engine-ban-persists-even-under-the-dma.jpeg"
description: "Apple's rules and technical restrictions are blocking other browser vendors from successfully offering their own engines to users in the EU."
url: "https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/"
favicon: ""
aspectRatio: "52.5"
```

# WebKit 的問題
問題就在於他跟 iOS 更新綁死了阿，所以一些老手機 / 越獄的手機的網頁就會在一些網頁會有顯示的問題：很卡 / 白屏
像是我越獄的 iPhone 13 （iOS 16.1.2）特別在一些工具的 WebUI 會出問題（ex：ComfyUI 就卡在 loading 畫面，llama.cpp 會直接白屏）

# Raynard Browser
這是一款由 Gecko（Firefox 相同核心）寫成的實驗性專案，因為有自己的渲染引擎所以可以解決 webkit 版本過老舊的問題。想當然耳在 AppleStore 裝不到，但是既然會有問題的都是舊版本 / 舊手機，那就可以直接靠 **TrollStore** 安裝，而如果是用 **Altstore** 類側載安裝的話要自己處理 JIT 來提升效能。

```embed
title: "GitHub - minh-ton/reynard-browser: An experimental Gecko-based web browser for iOS 13+."
image: "https://opengraph.githubassets.com/4b3fa343d3e888c8246d82403f7a920b690f5350fc5895fb4330cc0ac61a7ef4/minh-ton/reynard-browser"
description: "An experimental Gecko-based web browser for iOS 13+. - minh-ton/reynard-browser"
url: "https://github.com/minh-ton/reynard-browser"
favicon: ""
aspectRatio: "50"
```


# 使用體驗 - 替代 safari
在安裝完我還順便在 slieo 閒晃，順便發現了一個插件叫做「**Reynard Default**」，基本上把 Reynard 設定成預設瀏覽器然後就是把所有會導到 safari 的東西都導到 Reynard。直接架空 Safari
```embed
title: "GitHub - guacforlife/ReynardDefault: Redirects Safari URL opens to Reynard browser. Jailbreak tweak for Dopamine/Roothide."
image: ""
description: "Redirects Safari URL opens to Reynard browser. Jailbreak tweak for Dopamine/Roothide. - guacforlife/ReynardDefault"
url: "https://github.com/guacforlife/ReynardDefault"
favicon: ""
```
透過這幾個東西，也是直接把 Safari 的位置換成 Reynard
![[舊版webkit解決方法：Reynard Browser-1787605666372.webp|546x1182]]

這軟體因為是 Gecko 核心加上把自己的 User-Agent 裝成 Android，所以是可以在 Firefox 插件商店安裝 Android - compatible 的 add-on 的
在裝們 add-on 的時候發現很多都會沒辦法按下載按鈕（不相容）
![[舊版webkit解決方法：Reynard Browser-1787606734224.webp|284]]
但其實還是可以安裝的，按下放那個 **「下載檔案」** 即可
![[舊版webkit解決方法：Reynard Browser-1787606784611.webp|273]]
等於是比安卓機相容更好？

# 心得
目前也只有使用兩三天，其實還沒有作很深入的研究。可能因為還沒正式發佈（當下還在0.10.1 alpha），一些操作或者小細節感覺還是有一點點卡手。看 GitHub 作者更新的速度也算快，期待這個軟體越來越成熟罷。畢竟這也算越獄圈的一大福音。
![[舊版webkit解決方法：Reynard Browser-1787607064244.webp|546x327]]