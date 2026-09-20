---
date: 2026/09/21T03:46:20+08:00
modified: 2026/09/21T05:18:24+08:00
title: 出現passkey無法使用的解決方法
share: true
comments: true
tags:
  - ios
  - passkeys
  - macos
  - cybersec
  - todo
categories:
  - ios
cover: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZM9EpZKpcf_oQW-auJrb-wv_9fL_sIvtQNBAglVjgvqRzozMOxDc8u0o&s=10
poster:
  headline: 出現passkey無法使用的解決方法
description: Passkeys（台灣翻譯是通行密鑰） 是一種驗證方式。使用 Passkey 註冊後，會產生私鑰儲存於裝置的安全元件中，不但因為不用輸入密碼，所以加快了登入的速度。而安全性也有更好的保障，透過生物辨識驗證的保護，就算失竊也不會容易被破解。
mermaid: true
katex: true
mathjax: true
banner: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZM9EpZKpcf_oQW-auJrb-wv_9fL_sIvtQNBAglVjgvqRzozMOxDc8u0o&s=10
abbrlink: passkey-fix
---

#todo 

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3XUhfWqm5HixHHSkdP2pCW?utm_source=generator&si=3971eebfd0844926" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

# 何謂 Passkeys
Passkeys（台灣翻譯是通行密鑰） 是一種**驗證方式**。使用 Passkey 註冊後，會產生**私鑰**儲存於裝置的安全元件中，不但因為不用輸入密碼，所以加快了登入的速度。而安全性也有更好的保障，透過**生物辨識驗證**的保護，就算失竊也不會容易被破解。

btw，雖然 passkeys 本質上是存在本地的私鑰，透過加密的傳輸方式（ex：透過螢幕密碼加密金鑰），近幾年 iOS 、 Android 甚至 Windows 系統都有做出不同種的同步方式了。而因此最大的安全風險又回到人本身了🚬

而這一個技術大約是近五年內開始被討論，**近兩年才逐漸普及的**，所以可能還要幾年的時間才能慢慢普及吧？


# passkey 無法使用問題
發現問題是因為我的平板只要嘗試用 passkey 登入，就會出現這個畫面，而上面的按鈕按進去只會出現開啟 `AutoFill Passwords and Passkeys` 這個選項問你要開或者關
![[出現passkey無法使用的解決方法-1789936929278.webp|410]]
原本以是正常現象，但在別台手機都能正常的。

## 解決方法
iOS 18 之後把 passkeys 的設定獨立成 passwords 這個 app 了。
![[出現passkey無法使用的解決方法-1789933801248.webp|667x600]]
當初我是因為習慣把不常用的 app 直接刪掉，沒想太多就把他刪掉了。造成他有一些地方抓不到這個 app 所以沒有辦法執行後續的動作。

解決方法也很簡單好懂，就是去 Apple Store 把他下載回來就可以正常使用了
```embed
title: "‎《Passwords》App - App Store"
image: "https://apps.apple.com/assets/artwork/1x1.gif"
description: ""
url: "https://apps.apple.com/tw/app/passwords/id6473799789"
favicon: ""
aspectRatio: "100"
```

![[出現passkey無法使用的解決方法-1789937641087.webp|411]]
看到類似這樣的畫面就是正常了