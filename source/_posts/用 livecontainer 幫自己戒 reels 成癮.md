---
title: 用 livecontainer 幫自己戒 reels 成癮
date: 2025-10-07 13:25:20
tags:
  - ios
  - livecontainer
  - tweak
  - instagram
  - altstore
  - sideload
  - sidestore
  - iphone
  - ipad
  - ipa
  - android
  - apk
categories:
  - ios
  - jailbreak
comment: true
share: true
modified: 2026/08/13T12:00:46+08:00
comments: true
cover: /images/image-11.png
poster:
  headline: 用 livecontainer 幫自己戒 reels 成癮
description: 一直滑 reels 真的很浪費時間QAQ
mermaid: true
katex: true
mathjax: true
banner: /images/image-11.png
abbrlink: livecontainer-remove-reels
---


---
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6DRZmJa38MaMNthwG3fCBD?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

---

## 前言
基本上現在我的生活是離不開 IG (instagram) 了 畢竟我基本上八成的人我只有他的哀居 
而且我 LINE 卡的要命 光打開就要三分鐘然後 Loading 再繼續等他轉 
並且 Discord 也沒有真的那麼普及
可見 IG 多普及多方便
但是 REELS 這個功能害人不淺 不知道多少發憤要讀書的下午都變成滑了一個下午 除了收穫更多爛梗根本罄竹難書
之前就很想把這功能刪了 之前也在安卓上成功實踐了 直到最近花時間研究新技術 **LiveContainer** 才成功把這該死的玩意兒刪了

~~（註：有些程式碼區塊有超連結可以點點看喔）~~

---

# 成品
## Before:
![[image_crop.webp|365]]

---

## After:
![[image-1.webp|393|246x532]]

（現在還會習慣點空氣 看來成癮頗深）

---

# 簡介
ios 系統長期嚴格限制未上架的 app 安裝（sideload最多一個帳號三個 app 十個 ip 而且一周內沒有續上就會到期）
加上近版本（`>ios 17.1`）越獄與 `TrollStore` 凋零 
`LiveContainer` 不是靠漏洞提權 而更像是app的暫時啟動器 沒有實際安裝 app 但是資料還是會被存在個別的資料夾 這等同是只靠一個額度就可以安裝無限的軟體

---

# 設備需求
- iOS/iPadOS 15+
- 越獄 ❌
- 雖然大部分 APP 通常都可以正常使用 但要做好可能會跑不動的準備（有能力可以去看看GitHub issue）

---

# 下載

**❗️❗️️操作有一定複雜度 請斟酌嘗試**
**❗️❗️️為考量受眾 部分步驟並非最佳解法**

## 電腦
- 到 [**sidestore官網**](https://sidestore.io/)  scroll到最底下按照電腦的作業系統**全部下載到電腦** 
  - `altserver` 
    - 第一次 `sideload` 電腦端用的server
  - `sidestore.ipa` 裝進手機裡面後可以免電腦sideload
  - `idevice_pair`

  - **Mac:**
![[image-2.webp|image-2.webp]]

  - **Win:**
![[image-3.webp|image-3.webp]]
Windows 要多裝 `iTunes` （讓ios設備可以被電腦進一步讀取）

## 手機

- 到 AppleStore 安裝 [`StosVPN`](https://apps.apple.com/us/app/stosvpn/id6744003051)
  - 是本地運行的vpn通道 開啟後可以不用電腦完成續簽（防止過期）
  - 因為是本地運行且開源不用擔心隱私問題
(2026/1/23更新：StosVPN 被下架了 可以自己查查看`LocalDevVpn`等等類似的app)


- 到官方Github安裝 [`LiveContainter.ipa`](https://github.com/LiveContainer/LiveContainer/releases/tag/3.6.1)
選最新版的`LiveContainer.ipa`
  ![[image-4.webp|image-4.webp]]
  也就是第二個

---

# 安裝
1. 設置`AltServer`
   - Win：安裝 `AltServer` 與 `iCloud`
   - Mac：把 `AltServer` 解壓縮放到 `~/Applications`
2. 側載 `sidestore.ipa`
   - 從托盤（Win）或選單列（Mac）點開這個圖標
   ![[image-5.webp|image-5.webp]]
   之後按住(Win:Shift) 或者 (Mac:Option)就會從
   ![[image-6.webp|image-6.webp]]
   變成
   ![[IMG_0604_crop.webp|446]]
   然後點選自己的裝置後選擇 `sidestore.ipa` 
   輸入自己的apple id （有疑慮可以[註冊一個新的](https://account.apple.com/account#)）
   ![[image-8.webp|428]]
   過一陣子app就會出現在手機上了
   ![[image-7.webp|image-7.webp]]
    - ❗️別點到Install AltStore還真的裝下去 那就要等七天或整換帳號來解決卡到 id 上限的問題
3. 生成配對文件
   - 記得 iOS/iPadOS 16 以上要先開啟開發者模式
   - 在手機把 `StosVPN` 開起來然後用 **數據線** 接上電腦 後開啟 `idevice_pai`
   ![[image-9.webp|505|197]]
   ![alt text|490](image-12.png)
     - 手機要保持解鎖並且要有鎖屏密碼（passcode）
   - 如果連接正確應該可以在左上角選到手機後按下 **"Load"**
   - 按下 `SideStore` 下面的 `Install`

4. 用 sidestore 安裝 `LiveContainer.ipa`
   - sidestore 應該會打不開 要去Settings > General > VPN & Device Management 去 trust自己apple帳戶 （LiveContainer 也是）
   ![[image-13_crop.webp|300]]
   - `sidestore` -> `My Apps` -> 按 "+" 然後選到`LiveContainer.ipa`
   ![alt text|224](image-10.png)
   - 應該會長這樣：
   ![alt text](image-11.png)
5. 設定 JIT-LESS
會選擇設定JIT-LESS是因為我同時在平板測試了JIT模式 每次重新開始之前都要開啟 `StikDebug` 等工具 而且IG對效能要求不高 是故並沒有比較方便

   - 開 LiveContainer => Settings => Import Certificate from AltStore/SideStore  
   跳去 AltStore/SideStore 時按「Export」匯出憑證  
   （沒跳出提示就回去再按一次）

   - 回 LiveContainer => JIT-Less Mode Diagnose => Test JIT-Less Mode  
   出現「JIT-Less Mode Test Passed」就成功 😭

   - gif版：
      ![[RPReplay_Final1759860252.gif|277x600]]

# 安裝修改版IG
我怎麼覺得前面繁瑣的步驟都快把所有人給勸退了 但是我們已經很接近成功了 😭

- 下載修改版IG：
[SCInsta](https://github.com/SoCuul/SCInsta)是一個活躍在更新的Instagram修改版
他其中的功能很契合我們要把 Reels 隱藏的功能 由於政策問題使其不能提供ipa
但我找到一個有人fork出去編譯好的 測試過是安全的：https://github.com/Arnvvch/SCInsta/releases/
![[image-14.png|image-14.png]]
選擇從上往下第三個
相關的是
- Feed
    - Hide stories tray (關閉現動)
    - Hide entire feed （現動以下全關）
    - No suggested posts
    - No suggested for you (accounts)
    - No suggested reels
    - No suggested threads posts
- Focus/Distractions
    - Hide explore posts grid
    - Hide trending searches
    - No suggested chats
    - No suggested users
    - Disable scrolling reels
- Navigation (關閉底下的按鈕)
    - Hide explore tab
    - Hide create tab
    - Hide reels tab  
依照自己的偏號修改好就大功告成了😭

- 在 `LiveContainer` 中安裝 `SCInsta`
按下左上角的 "+" 並選取剛剛下載的檔案

- 設定 `SCInsta`
在正常的登入帳號之後 在個人頁面的右上角長按三條橫線就會神奇的跳出特別設定
![alt text|441|207x449](image-15.png)

# 其他
- 因為 apple 的限制 所以7天內一定要 refresh 一次 不然會開不起來
如果怕開不起來可以用sidestore捷徑功能 + 自動化動作更新 只要不要刻意把 `stosVPN` 關掉應該在連上 WIFI 之下都很方便

- 通知問題
  - 這種方法下載的IG自然沒有辦法跳出通知
  - 我的方法是把原本的IG設定很短的螢幕使用時間 不但確保不會跑去滑Reels 也收的到通知
  - 配合 "開啟Instagram -> 開啟LiveContainer"這種自動化捷徑可以讓你點下訊息侯跳轉兩次回到沒有reels的IG

~喔如果是我叫你來看這篇文章的人看完還是不會用 您付款我可以提供到府服務的👀~

# 同場加映：Android系統
我之前有成功用過 但是過一段時間了可能方法有變化請自行查訊
- **Instander** : https://www.reddit.com/r/Instander/comments/13mne8b/stepbystep_guide_to_disable_reels_and_replace/
    - 之前用過 但是有點複雜
- **Distraction Free Instagram** : https://www.distractionfreeapps.com/index.html
    - 沒有實際用過 但是看起來很簡單

# 參考文獻
https://www.bilibili.com/video/BV1XKnHznEfX/?spm_id_from=333.337.search-card.all.click&vd_source=36e5b77f482b3437a07be4846cea098f
https://sidestore.io/#get-started
https://github.com/LiveContainer/LiveContainer
https://ivonblog.com/posts/livecontainer-ios-app-launcher/
https://ivonblog.com/posts/ios-sidestore/
https://ivonblog.com/posts/sidejitserver-enable-jit/
https://ivonblog.com/posts/stikdebug-app/
https://www.reddit.com/r/Instander/comments/13mne8b/stepbystep_guide_to_disable_reels_and_replace/
https://www.reddit.com/r/Instander/comments/13mne8b/stepbystep_guide_to_disable_reels_and_replace/
https://www.distractionfreeapps.com/
https://github.com/SoCuul/SCInsta?tab=readme-ov-file#general
https://github.com/Arnvvch/SCInsta/tree/v0.7.1

# 後記
其實從國小就開始想要搞越獄了 但因為沒有合適的 device 然後國中高中又犯賤更新所以一直沒有接觸到 **JB (JailBreak)** 和 **Trollstore** 也算幸運滑影片看到這技術同時手機平板也符合條件（平板測試了JIT也成功） 但學測越來越近了也該自律點不要再搞耍了 不然又要大學了

由於同時又搞了其他的東西（例如：老爸的列印機等）再加上邊跟朋友聊天邊做 所以做到一個段落看時間傻掉居然已經凌晨四點多了 認真希望自己時間管理可以再好一點 不然又要沒大學了

最後
> ## **睡覺我可以不要 但是 Reels 你今天必須死**