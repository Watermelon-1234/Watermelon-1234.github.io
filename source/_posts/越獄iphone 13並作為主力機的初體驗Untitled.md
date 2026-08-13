---
title: 越獄 iphone 13 並作為主力機的初體驗
tags:
  - jailbreak
  - dopamine
  - sileo
  - tweak
  - sideload
  - livecontainer
  - iphone
  - ipad
  - ipa
  - ios
categories:
  - ios
  - jailbreak
comment: true
date: 2026-01-25 21:25:20
author: melon
share: true
modified: 2026/08/13T12:01:10+08:00
comments: true
cover: /images/越獄iphone 13並作為主力機的初體驗-1785215951513.webp
poster:
  headline: 越獄 iphone 13 並作為主力機的初體驗
description: 越獄 iphone 13 並作為主力機
mermaid: true
katex: true
mathjax: true
banner: /images/越獄iphone 13並作為主力機的初體驗-1785215951513.webp
abbrlink: i13-jailbreak
---

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1iywVk6Xx1XmJwd0rExYI3?utm_source=generator&si=48fe8597f8ae400d" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

---
# 前言

我從小三還小四就已經想要在當時爸媽給的 iphone 4 上越獄，但因為不明原因 profile 檔案用不下來最後就作罷了。後來輾轉拿到 iphoneXR 後為了一個忘記什麼小功能更新到 iOS 17.1.2 一切就毀了，真希望當初的自己大腦清楚點，而且更新到 iOS 17 之後讓他本來就孱弱的電池在冬天變暖暖包，夏天變成燙手山芋（還會降頻超卡）

這次我爸把他的 iphone 13 換下來 前陣子才發現他幾乎沒有更新過（iOS 15 -> iOS 16.1.2），對越獄玩家來說這根本就是大獎，甚至換過電池續航力也不賴，在確定爸爸東西都轉好之後就開始對他動刀了😈

---
# 成品
![[越獄iphone 13並作為主力機的初體驗-1785215951513.webp|324x700]]

---
# 簡介
越獄 (Jailbreak) 是指利用漏洞等手段獲取 iOS 系統最高權限，已安裝不被 Apple 允許的軟體與插件 (Tweak) 
可以做的事情：
- 安裝未上架 App
- 自訂系統介面
- 增加系統功能

要成功越獄需要的條件如下：
1. 支援越獄的 iOS 版本跟設備（一定要同時符合）
2. 一顆熱愛折騰的心
3. 堅持不更新的骨氣
4. 對風險的把握跟翻車不會猝死的心臟

# 越獄大方向
1. 去 https://ios.cfw.guide/ 
2. 按 Get Started
![[越獄iphone 13並作為主力機的初體驗-1785215968720.webp|698x433]]
3. 找對應的機型跟版本
![[越獄iphone 13並作為主力機的初體驗-1785215995577.webp|698x435]]
4. 看看版本是否符合資格
![[越獄iphone 13並作為主力機的初體驗-1785216007696.webp|698x208]]
- 如果符合 基本上靠這個網站的步驟就成功越獄了
- 如果不符合 以目前越獄環境死氣沉沉的狀況 機本只能靠以下這些削弱板替代方案
  - LiveContainer (無越獄安裝軟體)
    - 這甚至是我 [第一篇文章](https://watermelon-1234.github.io/2025/10/07/livecontainer-ig/)
  - TrollStore (半越獄安裝軟體)
    - 不全算是越獄工具 但也是透過系統漏洞安裝未上架 App 的工具
    - 不計算在 apple ID 下載上限
    - 一樣有機體限制
  - AltStore / Sideload (無越獄安裝軟體)
    - 需要電腦協助安裝
    - 計算在 apple ID 下載上限
    - 每七天免費帳號就需要重新簽名
 
# 越獄步驟紀錄（以 `iphone13` `ios16.1.2` 為例）
對了要越獄都是要舊的版本，為了避免手殘或者不必要的麻煩，可以先把所有自動更新（App Store / iOS）關掉
1. 需要 [`Dopamine`（可以點）](https://ellekit.space/dopamine/) 這個軟體，正常要 sideload 但這個配置先 sideload `TrollStore` （以這個版本是 [`TrollStoreX`](https://github.com/alfiecg24/TrollInstallerX) 來安裝 `Dopamine`
2. 個人習慣使用 [`sideloadly`](https://www.gdaily.org/30912/sideloadly) 來安裝，Windows 要記得裝 iTunes(這大概是我有 mac 之後就不用 Windows 搞機的原理🤨)
3. 在把載好的 `TrollStoreX.ipa` 用 `sideloadly` 安裝到手機之後 在手機上開啟 `TrollStoreX` 並安裝 `Dopamine.ipa`
4. 安裝好之後開啟 `Dopamine` 並按 `Jailbreak` 開始越獄
他會要求你輸入一個管理員的密碼，記得別亂輸，否則你以後要用 terminal 的時候欲哭無淚
5. 等待一段時間後會自動重開機，然後會看到 `Sileo` 的圖示
6. 用 `Sileo` 安裝必要插件 `ElleKit` , `PreferenceLoader` (教學在 [這裡](#如何安裝tweak插件))
7. 安裝好之後重開機就大功告成了

# 如何安裝 tweak（插件）
1. 先確定版本是否支援
    1. 系統版本：
       - 畢竟版本不同一些 API 就不支援
    1. `Rootful` or `Rootless`
       - 這是指越獄的方法以及權限高低
       - `Rootful` ：權限較高 可以修改系統檔案
       - `Rootless` ：權限較低 只能修改使用者目錄
       - 目前大部分越獄工具都是 `Rootless`
       - 細節可以看 [這裡](https://crifan.github.io/ios_re_ios15_jailbreak/website/ios15_jb_background/rootless_rootful.html)
    1. 如果你跟我的越獄方案一樣是 `Dopamine` 那就是 `Rootless`
2. 找插件來源（ `Source` ）
   3. 在安裝插件的方面並沒有一個統一的商店，而是靠不同開發者整理出來的 `Source` 來安裝
   4. 而常聽到的 `Cydia` / `Sileo` / `Zebra` 等等都是 `Package Manager` (套件管理員) 只是介面不一樣。像是這次我就是使用 `Sileo` 為主
   5. `Sileo` 裡面就有內建幾個常用的 `Source` 顯然不夠用，而他也有提供新增 `Source` 的功能。可以先在 `Sileo` 裡面在點進 `Search` 的 Tab 裡面查查看 如果沒有要的東西就上網 google 一下吧，這邊推薦可以找 https://www.ios-repo-updates.com/ 的分享連結
   ![[越獄iphone 13並作為主力機的初體驗-1785216022896.webp|368]]
   像是這種都可以直接按下對應的套件管理工具就會跳轉並且匯入了
   如果這裡沒有大概就是往 `Github` 或者 `Reddit` 找了（在搞越獄的時候發現 Reddit 的資訊意外的多）
   6. 如果要直接用連結新增 `Source` 的話也很簡單，在 `Sources` 的 Tab 右上角直接按下加號就好
   ![[越獄iphone 13並作為主力機的初體驗-1785216042963.webp|298]]
7. 安裝插件
⚠️ 並不是說越獄出來插件就都免費喔，畢竟很多都還是開發者的心血
（有一些並不是在安裝時候收費，而是安裝之後需要購買 licence）
   8. 在 `Search` 裡面搜尋你要的插件名稱（如果找不到，高機率就是版本不符合啦，去找替代品把😭）
   9. 找到插件之後點下 `GET` 按鈕
![[越獄iphone 13並作為主力機的初體驗Untitled-1785216066676.webp|211]]
   10. 安裝插件並不像是在 AppStore 裡面按下載就好，實際上他是把所有安裝跟刪除的操作放在一個 `Queue` 裡面。需要在點開 `Queue` 之後按下 `Confirm` 才會真正開始安裝。
       ![[越獄iphone 13並作為主力機的初體驗Untitled-1785216116009.webp|185]]
   11. 大部分的安裝需要經過 `Respring` ( [什麼是 Respring 跟 SpringBoard](https://mrmad.com.tw/ios-respring)) 或是重開機才會生效
       ![[越獄iphone 13並作為主力機的初體驗Untitled-1785216143885.webp|174]]
12. 安裝插件 - 方法 2
   13. 有些插件並沒有放在 `Source` 裡面，這時候就需要自己下載 `.deb` 檔案來安裝
   14. 至於去哪裡找沒有一定的答案，但是 `Github` 的 `Release` 就是一個好地方
   15. 長按下載下來的 `.deb` 檔案，然後選擇用 `Sileo` 開啟。就可以像上面一樣安裝了
16. 設定插件
    1. 插件安裝下來之後有三種情況
       2. 沒有 APP 介面，只在設定裡面出現：這是最常見的，如果覺得一大堆太煩的話可以安裝 [SettingReamp](https://www.ios-repo-updates.com/repository/ichitaso-repository/package/com.sop.settingsrevamp/) 整理，他甚至還包含了一些附加功能
       ![[越獄iphone 13並作為主力機的初體驗Untitled-1785216171395.webp|176]]
       3. 有 APP 介面：這種就跟一般 App 一樣，打開來設定就好，但也可以注意一下有沒有出現在設定裡面
       4. 沒有任何介面：這種通常是後台運作的插件，我想到的是 `Trollvnc` ，這是一個遠端桌面套件，主要會用手機裡面的 terminal 運行（他有 APP 版但我沒錢）
    5. 故障排查
       6. 有時候遇到突然 crash 的情況系統會自己 respring 並且進到安全模式（關閉所有會影響 SpringBoard 的插件）
       7. 可用的解決方法
          1. 直接進去 `Sileo` 把他刪了
          2. 使用 log 工具（我自己是 [用`KrashKop`](#log-工具---krashkop)）查出問題在哪裡並且試圖修好
17. 刪除插件
    1. 刪除的方式跟安裝一樣，在 `Search` 裡面找到要刪除的插件
    2. 點下 `Modify` 按鈕，然後選擇 `Uninstall`
       ![[越獄iphone 13並作為主力機的初體驗Untitled-1785217054235_crop.webp|214]]
    3. 一樣是要到 `Queue` 裡面按下 `Confirm` 才會真正開始刪除
           ![[越獄iphone 13並作為主力機的初體驗Untitled-1785217098822_crop.webp|175|190x363]]
    4. 一樣記得要 `Respring` 喔



# 如何安裝 `.ipa` 檔案
1. 安裝 TrollStore
可以直接略過了除非有很叛逆的人剛剛不用 `TrollStoreX` 裝 `Dopamine`
2. 找到要安裝的 `.ipa` 檔案
常見的來源有
   3. Decrypt 過後的 App
      1. 簡單說從手機提取出來的 `.ipa` 檔案，裡面會包含者下載者的帳號資訊，所以其他帳號的手機是無法安裝的，所以網路上才會有許多 Decrypt 網站
      2. 這裡推薦的網站是 [decrypt.day](https://decrypt.day/)，我從搞 playcover 跟 livecontainer 開始就一直在用這個網站，甚至之前 request 過沒有的 App 也很快就有了🥹
   4. 開發者釋出的 IPA
      1. 有些開發者會直接在 `Github` 或是自己的網站上釋出 `.ipa` 或者 `.tipa` ('T' means "TrollStore") 檔案，確定安全就載下來用吧
         ![[越獄iphone 13並作為主力機的初體驗Untitled-1785217710200.webp|182]]
找 `.ipa` , `.tipa` 檔案下載下來
![[越獄iphone 13並作為主力機的初體驗Untitled-1785217743908_crop.webp|161|199x341]]
長按後用 `TrollStore` 開啟
![[越獄iphone 13並作為主力機的初體驗Untitled-1785217769247_crop1.webp|323]]
按下 install 安裝

#  推薦插件 / APP
所有的連結應該都可以直接在 `Sileo` 裡面打開（未測試）
## [檔案管理工具 `Filza File Manager`](sileo://package/com.tigisoftware.filza)
雖然手機裡面已經有一個「檔案」 App 了，但是那顯然是受過閹割後的版本，而 `Filza` 則是完整的檔案管理工具，可以直接瀏覽系統檔案，甚至可以編輯系統檔案（要小心使用）
![[越獄iphone 13並作為主力機的初體驗Untitled-1785217853709_crop.webp|201]] 
![[越獄iphone 13並作為主力機的初體驗Untitled-1785217886458_crop.webp|180]]
（似乎還支援直接安裝 `.deb` 檔案沒用過）
## [Log 工具 - `KrashKop`](sileo://package/com.foxfort.krashkop)
由於一直安裝插件難免會遇到出問題的狀況，例如功能衝突，那這時候靠 `KrashKop` 就可以至少看到程序崩潰的原因，在笨也可以丟給 AI 分析，大不了沒救就把有問題的插件刪囉
![[越獄iphone 13並作為主力機的初體驗Untitled-1785217944238_crop_crop.webp|347]]
![[越獄iphone 13並作為主力機的初體驗Untitled-1785218020594_crop_crop_crop_crop.webp|323]]

## [終端機 - `NewTerm 3 Beta`](sileo://package/ws.hbang.newterm3)
直接可以使用系統原生的 `bash` 終端機，既然那麼樸實無華地強大，就代表要小心使用避免把自己手機搞死機了
![[越獄iphone 13並作為主力機的初體驗Untitled-1785218092521.webp|323x700]]
（用 neofetch 是真的能抓到 Apple 的系統挺酷的）
## [tweak管理工具 - `Choicy`](sileo://package/com.opa334.choicy)
這個插件可以讓你針對每一個插件在不同 APP 下設定啟用或是停用，避免衝突還有防防止越獄檢測
![[越獄iphone 13並作為主力機的初體驗Untitled-1785218140510.webp|323x700]]

講個趣事就是我當初用這個插件是因為我無聊把我弟偷打荒野亂鬥的手機給越獄了，結果他一打開遊戲就閃退，後來我就用 `Choicy` 把荒野設定成插件都停用就可以正常玩了，我真的快笑死
## [AirPods功能修復 - `Sonitus`](sileo://package/com.semvis.sonitus)
![[越獄iphone 13並作為主力機的初體驗Untitled-1785218152321_crop.webp|250]]
Airpods Pro 2 之後的耳機在 iOS 16 以下會被視為一般藍牙耳機而無法使用空間音訊等功能，這個插件可以修復這個問題(也同時適用於一些 Sony 跟 Bose 的耳機)
## [instagram插件 - `Theta`](sileo://package/dev.objcmsgsend.theta)
這個插件可以讓 instagram 支援下載圖片跟影片，還有一些額外功能
⚠️ 不要載太多重複的插件，會衝突
⚠️ 要先載好 `Instagram` ，事實上很多所謂「破解版」的 app 只是預先將插件 build 進去而已，阿既然都越獄了為什麼不自己裝插件呢？ 不但安全性高了點，原 APP 也不會卡在一個版本沒辦法更新
# 其他
我發現 `Sileo` 可以直接匯出我目前在用的插件 那我就先放在這裡好了 有人有興趣可以丟給 GPT 之類分析，不然就是我有空再來打一篇（等我累積夠了值得推薦的插件）
> [!info]- 我的插件清單（皆為免費）
>  AirpodsCompanion:(com.nahtedetihw.airpodscompanion) 1.5
> CatScript:(app.catscript.lite) 1.5.5
> CustomCallBackground:(com.cydiageek.customcallbackground) 1.0.4
> IAmLazy:(me.lightmann.iamlazy) 2.6.2
> Hammer It:(com.lclrc.hammerit) 1.7.0
> Crane Lite:(com.opa 334.cranelite) 1.3.16-4
> libundirect:(com.opa 334.libundirect) 1.1.6
> libSandy:(com.opa 334.libsandy) 1.1.4
> SettingsRevamp:(com.sop.settingsrevamp) 3.0.1
> Background Retainer:(com.f 0 rd 0 w.backgroundretainer) 0.0.1-7
> MuffinStore:(dev.mineek.muffinstore) 0.0.1
> TrollVNC:(com.82 flex.trollvnc) 3.1
> libsparkcolourpicker:(com.spark.libsparkcolourpicker) 1.0.3-rootless
> AddToFolder:(com.anthopak.addtofolder) 1.4
> Dynamic Stage:(me.tomt 000.stageduo) 1.2
> BackgrounderAction 15 AutoState:(com.0 xkuj.backgrounderaction 15 autostate) 1.0.3
> BackgrounderAction 15 CCSupport:(jp.akusio.backgrounderaction 15) 0.1.0
> PurpleDND:(com.icraze.purplednd) 1.0
> Gestune:(jp.uzra.gestune) 1.0.0
> SnowBoard Dock Extension:(com.spark.snowboard.dock) 1.1.3~Beta 4-rootless
> UnderDock:(com.p 2 kdev.underdock) 1.3
> Shijima for iOS:(com.pixelomer.shijima-ios) 1.3.3
> libarchive 13:(libarchive 13) 3.7.2
> liblzo 2-2:(liblzo 2-2) 2.10
> IPonCC:(u.blanxd.iponcc) 1.6
> CCMusicArtwork:(com.spark.ccmusicartwork) 2.4.0-rootless
> BetterCCXI:(com.nef 0 pam.betterccxi) 1.6.0
> Legacy arm 64 e Support:(oldabi) 0.3.2
> CC 18:(com.dvntm.cc 18) 0.0.1
> KrashKop:(com.foxfort.krashkop) 1.0.2
> dig 3 st:(com.uncore.dig 3 st) 1.0.0
> VisionKeys Aurora:(com.nef 0 pam.visionkeysaurora) 1.0
> libkrw 0:(libkrw 0) 1.1.2
> Sileo:(org.coolstar.sileo) 2.5.1
> launchctl:(launchctl) 1:1.2.0
> debianutils:(debianutils) 5.19
> Axon:(com.nepeta.axon) 1.5
> Velvet 2:(com.noisyflake.velvet 2) 2.1.2-3
> Atria:(me.lau.atria) 1.4.1
> Mooner:(com.now.mooner) 1.0.1
> Orion Runtime (iOS 14 – 17):(dev.theos.orion 14) 1.0.2
> Eneko:(dev.traurige.eneko) 1.4
> LibGcUniversal:(com.mrgcgamer.libgcuniversal) 1.7.0
> PodsGrant:(com.lns.pogr) 0.5.1
> AppStoreTroller:(dev.mineek.appstoretroller) 0.1.2
> StoreSwitcher 2:(com.yourepo.0 xkuj.storeswitcher 2) 1.0.4
> MooreBarX 15:(net.tateu.moorebarx 15) 1.0.0~beta 1.0.5
> Zebra:(xyz.willy.zebra) 1.1.36
> 3 DAppVersionSpoofer:(com.0 xkuj.3 dappversionspoofer) 2.1.1
> Epiphany:(com.cyrex.epiphany) 1.0.1
> SnowBoard:(com.spark.snowboard) 1.5.37-Beta 4-rootless
> Sonitus:(com.semvis.sonitus) 1.0.7
> Cephei Tweak Support:(ws.hbang.common) 2.0
> CCSupport:(com.opa 334.ccsupport) 1.3.13-2
> CopyLog:(me.tomt 000.copylog) 1.7.1
> Easy Notifications:(com.icraze.easynotifications) 3.0
> Alderis Color Picker:(ws.hbang.alderis) 1.2.3
> VisibleIsland:(com.ethxnn 88.visibleisland) 2.0
> Choicy:(com.opa 334.choicy) 1.5.3-2
> AltList:(com.opa 334.altlist) 1.0.11
> NewTerm 3 Beta:(ws.hbang.newterm 3) 3.0~beta 1
> Filza File Manager:(com.tigisoftware.filza) 4.0.1-3
> p 7 zip:(p 7 zip) 17.04
> unrar:(unrar) 7.0.7
> gzip:(gzip) 1.13
> zip:(zip) 3.0-12
> unzip:(unzip) 6.0-28
> CloseAll:(com.nahtedetihw.closeall) 1.0
> Theta:(dev.objcmsgsend.theta) 5.0
> PreferenceLoader:(preferenceloader) 2.2.7
> ElleKit:(ellekit) 1.1.3
> Dopamine BaseBin Link:(dopamine-basebin-link) 1.0.0
> libkrw Plug-in (Dopamine):(libkrw 0-dopamine) 2.0.4
> libroot (Dopamine):(libroot-dopamine) 1.0.1
> vi:(vi) 070224
> uikittools:(uikittools) 2.1.7
> zsh:(zsh) 5.9
> tar:(tar) 1.35
> libzstd 1:(libzstd 1) 1.5.5
> procursus-keyring:(procursus-keyring) 2020.05.09-4
> libz-ng 2:(libz-ng 2) 2.1.6
> snaputil:(snaputil) 12.3
> ncurses-bin:(ncurses-bin) 6.4
> system-cmds:(system-cmds) 979.100.8
> profile.d:(profile.d) 0-7
> shell-cmds:(shell-cmds) 309
> libxxhash 0:(libxxhash 0) 0.8.2
> shshd:(shshd) 1.1.1.1
> ncurses-term:(ncurses-term) 6.4
> sudo:(sudo) 1.9.15 p 5
> libssl 3:(libssl 3) 3.2.1
> sed:(sed) 4.9
> liblz 4-1:(liblz 4-1) 1.9.4
> liblzma 5:(liblzma 5) 5.4.4
> libreadline 8:(libreadline 8) 8.2.0-1
> libpcre 2-8-0:(libpcre 2-8-0) 10.43
> libnpth 0:(libnpth 0) 1.7
> libtasn 1-6:(libtasn 1-6) 4.19.0
> libintl 8:(libintl 8) 0.22
> libpam-modules:(libpam-modules) 1000.0
> libunistring 5:(libunistring 5) 1.2
> libnettle 8:(libnettle 8) 3.9.1
> libiosexec 1:(libiosexec 1) 1.3.1
> libpam 2:(libpam 2) 20230627
> libncursesw 6:(libncursesw 6) 6.4
> libmd 0:(libmd 0) 1.1.0
> libp 11-kit 0:(libp 11-kit 0) 0.25.3
> libidn 2-0:(libidn 2-0) 2.3.7
> libpcre 1:(libpcre 1) 8.45-1
> libgpg-error 0:(libgpg-error 0) 1.48
> libapt-pkg 6.0:(libapt-pkg 6.0) 2.9.4-1
> libassuan 0:(libassuan 0) 2.5.7
> libcrypt 2:(libcrypt 2) 4.4.36
> gpgv:(gpgv) 2.4.5
> libedit 0:(libedit 0) 3.1-20230828
> libffi 8:(libffi 8) 3.4.6
> libgnutls 30:(libgnutls 30) 3.8.5
> file-cmds:(file-cmds) 430.100.5
> libgcrypt 20:(libgcrypt 20) 1.10.3
> libgmp 10:(libgmp 10) 6.3.0
> libdimentio 0:(libdimentio 0) 1:0~20230202.7 ffffff
> findutils:(findutils) 4.9.0-1
> havoc-keyring:(havoc-keyring) 2022.06.03
> grep:(grep) 3.11
> libhogweed 6:(libhogweed 6) 3.9.1
> chariz-keyring:(chariz-keyring) 2021.07.18
> coreutils:(coreutils) 9.5
> diskdev-cmds:(diskdev-cmds) 718
> dash:(dash) 0.5.12
> base:(base) 2
> essential:(essential) 0-5
> darwintools:(darwintools) 1.6
> libbrotli 1:(libbrotli 1) 1.1.0
> dpkg:(dpkg) 1.22.6
> ca-certificates:(ca-certificates) 20240604
> apt:(apt) 2.9.4-1
> bash:(bash) 5.2.21
> diffutils:(diffutils) 3.10

# 文獻參考
https://ios.cfw.guide/
https://liam.page/2023/01/19/Tweaks-that-I-ve-installed-on-my-iPhone/
大量的 reddit 討論串
# 後記
這次越獄的過程算是誇張的順利，主要花時間其實是在找插件跟修復衝突，喔還有到現在都還沒解決完的高版本 APP 無法使用，真的很頭大。但是我覺得這一整個過程充分地滿足了我的研究與開發的熱忱，畢竟能攻破長久被視為難以逾越的系統限制得成就感真的很棒，也讓我有了成為開源社區開發插件的一分子的小夢想。目前蠻希望能夠搞通插件開發的細節並且能在寒假結束之前寫出一個 AI 插件吧，畢竟作一個 AI 助手是一個我在電腦端都還沒完成的任務，希望我下次看到這篇文章的時候目標已經達成了吧。

書畢於 2026/1/26 凌晨 4:11 AM