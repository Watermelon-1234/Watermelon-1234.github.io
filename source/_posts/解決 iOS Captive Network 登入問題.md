---
title: 解決 iOS Captive Network 登入問題
share: true
modified: 2026/08/05T14:49:51+08:00
date: 2026-07-28 21:47:44+08:00
comments: true
tags:
  - ios
  - internet
  - WiFi
categories:
  - ios
  - internet
cover: /images
poster:
  headline: 解決 iOS Captive Network 登入問題
description: 提出 ios 自動連線導致 Captive Network 沒網路的問題的解決方法
mermaid: true
katex: true
mathjax: true
banner: /images/解決 iOS Captive Network 登入問題-1785208644279.webp
---

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5GwXSedc16CCVaGFMJpbEa?utm_source=generator&si=70545eadb31e4b50" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

# 前言 — Captive Network

> [!info] 
> **強制門戶**（英文：Captive portal，又名**強制網絡門戶**、**強制主頁**）是在授予新連接至[Wi-Fi](https://zh.wikipedia.org/wiki/Wi-Fi "Wi-Fi")的用戶更廣的網絡（網際網路）訪問權限之前在其[網頁瀏覽器](https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8 "網頁瀏覽器")呈現中的網頁，其常用於呈現可能需要認證或接受[最終用戶許可協議](https://zh.wikipedia.org/wiki/%E6%9C%80%E7%BB%88%E7%94%A8%E6%88%B7%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE "最終用戶許可協議")/[可接受使用策略](https://zh.wikipedia.org/wiki/%E5%8F%AF%E6%8E%A5%E5%8F%97%E4%BD%BF%E7%94%A8%E7%AD%96%E7%95%A5 "可接受使用策略")的著陸頁或登錄頁。強制門戶應用於各方面的移動寬帶服務中（如有線連接、計費 Wi-Fi 及家庭熱點），同時也可提供對企業或家庭有線網絡（公寓、酒店和商業中心的網絡）的訪問權限。 
> —— by wiki

簡單說就是 星巴克 / 部分會跳轉網頁的商店 / 學校網路等都算在 Captive Network 裡面，主要就是讓公共網路能夠管理 Guest WiFi 的權限等等。

---
# iOS 登入問題
通常初次登入都不會有問題，但是只要 session 過期之後重新要登入就跳不出那個登入網頁（也就是 Captive Portal）。一般的解決方法都是直接點忘記網路再重新登入，但這件事只要常常發生就很沒有效率，所以就試著找找解決方法。

---
# 原理

在寫文章亂爬文的時候在 reddit 上找到 apple 之前發給架設 Captive Network 架設者的文章：
```embed
title: "How to modernize your captive network - Discover - Apple Developer"
image: "https://devimages-cdn.apple.com/wwdc-services/articles/images/CE0DEE64-3FA3-4C8F-B702-BA29502AC974/2048.jpeg"
description: "If you’ve ever used Wi-Fi on an airplane, in a cafe, or at a hotel, you're probably familiar with the experience of navigating through a set of agreements, watching an advertisement, or purchasing a plan to get on the Internet. These “captive” networks are important ways to get online, but all too often they lead to headaches. “How do I get to the login page? How much time do I have left before my plan runs out?”"
url: "https://developer.apple.com/news/?id=q78sq5rv"
favicon: ""
aspectRatio: "56.25"
```
因為我不是架設方，沒辦法確定他講的是不是真的是我遇到的問題
但簡單說 Captive Network 是靠攔截網路封包的方式讓 Portal 跳出來的，但 iOS 似乎有能力繞過，導致沒有經過驗證的用戶反而連不到外網

另一種說法是 IPV4/IPV6 的問題
```embed
title: "Security Verification"
image: ""
description: "Security verification page to protect against malicious bots."
url: "https://discussions.apple.com/thread/256311005?sortBy=rank"
favicon: ""
```
![[解決 iOS Captive Network 登入問題-1785206823395.webp|解決 iOS Captive Network 登入問題-1785206823395.webp]]
一般的解決方法是自己按『忘記網路』然後再重新登入，但是每次都這樣搞挺麻煩的

他這邊給的方法是從 safari 開 [captive.apple.com](captive.apple.com) 這個網址，但是因為我手機已經連上星巴克網路了測試不了

---
# 解決方法
以星巴克為例（畢竟我在星巴克）

![[解決 iOS Captive Network 登入問題-1785208368885_crop.webp|323]]
點 『 i 』進去網路設定
![[解決 iOS Captive Network 登入問題-1785208582487_crop.webp|323]]

把 router 的 ip 貼到 safari
![[解決 iOS Captive Network 登入問題-1785208644279.webp|322]]
點『連接 WiFi』就完成了

