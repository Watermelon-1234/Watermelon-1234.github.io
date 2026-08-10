---
modified: 2026/08/11T07:19:51+08:00
title: Openclaw 基礎設置（可能過時了）
share: true
date: 2026-05-04 23:58:44+08:00
comments: true
tags:
  - AI
  - agnet
categories:
  - AI
cover: /images/openclaw-setup-1786403355031.webp
poster:
  headline: Openclaw 基礎設置（可能過時了）
description: Openclaw 基礎設置（可能過時了）
mermaid: true
katex: true
mathjax: true
banner: /images/openclaw-setup-1786403355031.webp
---


# 前言
目前應該也沒什麼人在養龍蝦了，這個是五月多寫的文章，而且設定沒有很完全，所以就當作是紀錄就好

我用的方案簡單來說是: 
``` 
OS: wsl2@windows
net: tailscale
AI: LMstudio
```

![[openclaw-setup-1786403355031.webp|700x394]]

# Basic Setup

花了很多時間想找個安全一點的設定, 後來想想我如果沒有要讓他跑太強大的東西我就乾脆只用 `local llm` 這樣他甚至沒有api key可以偷.

## 初始主要設定:
- 一開始是用: https://zhuanlan.zhihu.com/p/2011731099198452945 到tailscale安裝之後用這個就有點麻煩 因為他是直接改.json 然後我自己沒搞懂改壞了幾次

- 後來大概是照這個: https://dev.to/aws-builders/deploy-your-own-247-ai-agent-on-aws-ec2-with-docker-tailscale-the-secure-way-53aa 這個設定網路的地方方便多了
差別大概就是我不是vps不用搞ssh 所以從 **## Phase 2: Environment Setup** 開始看

如果./docker-setup.sh 最後都是死在他說要重開一個網路的時候記得看一下自己有沒有裝 + 跑 `Tailscale`  指令是 ````

`````
sudo tailscale up
`````

特別是網路那邊的設定一定要照它的 主要因為我找到的大部分都版本不對 `Tailscale Exposure` 搞了我很久

![[Pasted image 20260313030310.png]]




# Settings

dashboard 裡面的設定真的是複雜的嚇人 再加上權限設定讓我就算在docker裡面也很難直接改設定檔案又怕他爛掉 所以要找好用的設定方式

我是看 https://zhuanlan.zhihu.com/p/2002485126714644013 才知道原來可以在docker裡面直接用指令開出互動式設置頁面

一開始先
```
docker ps 
docker exec -it <container-id> /bin/bash
```
進去 docker 裡面的 terminal

然後
```text
openclaw onboard
```

## 設定模型

我這次是用 ``LM Studio`` 的 `qwen3.5-9b`  認真說後面跑起來發現性能還行
然後因為是用 `tailscale` 的 vpn , 但是我沒認真研究前面設定具體怎麼限制網路的, 所以我還要測試哪個ip才對 後來發現要在 `LM Studio` 裡面開這個
![[Pasted image 20260313031439.png]]
(上面那個 `API Keys` 就隨便開一個用來複製到 `Settings` 就好, 沒有會報錯)
然後網址填右邊給的(直接複製就好)

## Discord Setup
因為安全考量開個dashboard要搞好久 所以當然要把他拉出來也方便日常使用

https://docs.openclaw.ai/channels/discord#ask-your-agent 官方文檔這次做的不錯

## 後續
- 如果想修改配置 用

```text
openclaw configure
```

- 開控制台
```text
openclaw dashboard
```

- 後來發現dashboard在別台裝置的開法就照他上面的只是就行 邏輯上就是讓ssh forward `localhost` 
- 

注意token問題 如果手機端之類要拿token 就 
```text
openclaw dashboard --no-open
```
這樣就是只有輸出 `url` 

> [!important] 
>  還會有一種一直match不到 `token` 的情況
>  解決方法是因為你寫死在 `docker-compose.yml` 裡面了 所以不管在 `docker` 裡面怎麼改都會被蓋掉
>  在[這邊](https://zhuanlan.zhihu.com/p/2011735054162892337)找到解決方法的
>  ![[Pasted image 20260313032708.png]]
>  ![[Pasted image 20260313032739.png]]
>  *奇怪了我記得我好像不是這樣改 但是問題是這個沒錯*


- 檢查配置

```text
openclaw status
```
https://www.meta-intelligence.tech/en/insight-openclaw-gateway-commands
# 處理中
- hatch 出來的agent好像怪怪的 不知道是c_text太短還是怎樣對話到一半就開始跑回hatch(就是一開頭問你基礎訊息的那個)模式
  ![[Pasted image 20260313033112.png]]
(看了頭很痛)

- `Skills` / `Tools` 補充
	- 還要裝一些 security 的玩意
- 持久化: https://zhuanlan.zhihu.com/p/2001822480759816763 (知乎上關於龍蝦的文章都蠻有料的)
- 語音(講電話)
- update失敗
- 還有就是這篇筆記不太符合obsidian知識網路的構建邏輯 可能連筆記都要重構 超好笑 
	- reference https://gemini.google.com/share/8a9d39f219ef

> [!bug] 
> 段考要緊 段考完把他用完 先搞出一個可以跟自己練口說的 在搞出可以給家人用的
 