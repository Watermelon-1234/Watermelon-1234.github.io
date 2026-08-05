---
title: Mac 電腦直播方案-Blackhole
modified: 2026/08/05T14:42:25+08:00
share: true
date: 2026-07-28 21:47:44+08:00
comments: true
tags:
  - Mac
  - Application
categories:
  - Mac
  - Application
cover: /images/電腦直播方案-Blackhole-1784099875626.webp
poster:
  headline: Mac 電腦直播方案-Blackhole
description: 改進mac直播時的直播語音配置部分，增加自定性
mermaid: true
katex: true
mathjax: true
banner: /images/電腦直播方案-Blackhole-1784099875626.webp
---


# 緣起
因為 mac 在通話直播的時候如果儲存空間不夠就會一直跳掉 非常的惱人

所以我想到之前幫朋友搞 obs + 虛擬音效 cable

就想說 mac 上搞一個應該不是不行

# Sources
```embed
title: "使用OBS串接視訊通話 | Namako"
image: "https://namako.tw/static/2020/obs-vc.jpg"
description: " 用 OBS 開直播的教學網路上應該是多到數不清，這裡簡單紀錄的是如果沒有要打直播訊號出去，而是想要接到 Line 啦、Skype 之類的網路視"
url: "https://namako.tw/2020/12/09/obs-as-video-call/"
favicon: ""
aspectRatio: "33.59375"
```
```embed
title: "2022 Blackhole 下載與使用教學：同時錄製 Mac 系統音效與人聲"
image: "https://i0.wp.com/jcshawn.com/wp-content/uploads/2021/05/banner_mac.jpeg"
description: "需要用 Mac 電腦螢幕錄影，卻無法錄到電腦的影片、遊戲聲音？這篇教你下載、設定 Blackhole 這個軟體，讓你的蘋果電腦可以同時錄製你講話的內容，和電腦聲音喔！只要十分鐘，讓你的螢幕錄影有電腦音訊！"
url: "https://jcshawn.com/mac-blackhole/"
favicon: ""
aspectRatio: "56.214285714285715"
```

# 踩坑
## midi 裡面沒有 blackhole
上面的教學說要開 midi 然後把麥克風跟黑洞接起來
![[電腦直播方案-Blackhole-1784099875626.webp|電腦直播方案-Blackhole-1784099875626.webp]]
但是我這邊看沒有 ![[電腦直播方案-Blackhole-1784099890166.webp|電腦直播方案-Blackhole-1784099890166.webp]]
所以我就去翻了 GitHub：
```embed
title: "BlackHole not appearing in Audio MIDI Setup on new M3 iMac running Sonoma 14.5 · Issue #793 · ExistentialAudio/BlackHole"
image: "https://opengraph.githubassets.com/d821edcbc6183698741a6cb091d783540c60b2797a8cd1c9fdec6c8112ee1639/ExistentialAudio/BlackHole/issues/793"
description: "Please Confirm I have read the FAQ and Wiki where most common issues can be resolved I have searched Discussions to see if the same question has already been asked This is a bug and not a question ..."
url: "https://github.com/ExistentialAudio/BlackHole/issues/793"
favicon: ""
aspectRatio: "50"
```
![[電腦直播方案-Blackhole-1784099959804.webp|電腦直播方案-Blackhole-1784099959804.webp]]
![[電腦直播方案-Blackhole-1784099933512.webp|電腦直播方案-Blackhole-1784099933512.webp]]
看來是權限問題
![[電腦直播方案-Blackhole-1784100145017.webp|電腦直播方案-Blackhole-1784100145017.webp]]
恩確實成功了