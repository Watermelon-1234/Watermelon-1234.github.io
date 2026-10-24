---
date: 2026/10/24T21:04:51+08:00
modified: 2026/08/13T11:58:32+08:00
title: 拆解GoodNote以解決輸出PDF後螢光筆遮擋問題
share: true
comments: true
tags:
  - ios
  - Application
  - safe_money
categories:
  - DEV_OTHER
cover: /images/拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792874964547.webp
poster:
  headline: 拆解GoodNote以解決輸出PDF後螢光筆遮擋問題
description: 用 svg 操作解決goodnote筆記在 PDF 檔裡面螢光筆都會擋住後面的字這個問題
mermaid: true
katex: true
mathjax: true
banner: /images/拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792874964547.webp
abbrlink: goodnote-PDF-fix
---

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4dmLrBkBCnIIfbUu6zLxgh?utm_source=generator&si=d9b6a8464eca4583" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
（法老的歌有夠好聽😭）

# 前言
這其實也不是我的問題畢竟我也沒有在用 GoodNote 。雖然那咖軟體手感是真的很好，但是我才不會花錢在那個訂閱費用。但不得不說他的防盜版真的做的很好，唯一流出的盜版不但不是最新還只能用 jailbreak 開（平板沒辦法越、版本太新了）。

某個朋友他直屬傳給他的微積分筆記在 PDF 檔裡面**螢光筆都會擋住後面的字發現動求助**。而且沒有訂閱的 goodnote 匯入不了（他說的），我一個手癢就把檔案要過來了。

災情：
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792874586494.webp|338x600]]

# 分析 / 查資料
拿到的檔案是 `.goodnote` 後綴，然後我猜他就是一種壓縮檔之類，如果是的話那這個可能有人作過正確 viewer 畢竟壓縮檔算好分析的
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792869215126.webp|568]]
超好笑還真是

---

一開始的想法是直接看看有沒有 goodnote viewer
```embed
title: "Goodnotes"
image: ""
description: "Goodnotes app"
url: "https://web.goodnotes.com/home"
favicon: ""
```
發現官方就有網頁版，但是他只接受 150 mb 以下的，所以沒辦法用。檔案比較小的可以試試看。

---
```embed
title: "GitHub - RobinSp5/FileConverter: A lightweight tool to convert GoodNotes (.goodnotes) documents into shareable PDF files."
image: "https://opengraph.githubassets.com/dc6e67926926e1bf33a0258173481507572a8c4a384b9a8d08dc1a50c967f198/RobinSp5/FileConverter"
description: "A lightweight tool to convert GoodNotes (.goodnotes) documents into shareable PDF files. - RobinSp5/FileConverter"
url: "https://github.com/RobinSp5/FileConverter"
favicon: ""
aspectRatio: "50"
```
這個更是完全沒有用，因為他只支援非手寫的地方，那我就不需要用 goodnote 開了吧

---
最後找到這個，看簡介應該是有靠 AI Vibe 出來的，有點存疑但也沒東西可以用了就死馬當活馬醫
```embed
title: "GitHub - Kaih1825/parser-for-goodnotes: The document parser for goodnotes"
image: "https://camo.githubusercontent.com/893c4c6e0be447baf50e9273ff6029a4de13169f2d1b38d95732c73cc708c0ce/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539462539412538302532304c69766525323044656d6f2d547279253230696e25323042726f777365722d626c756576696f6c65743f7374796c653d666f722d7468652d6261646765"
description: "The document parser for goodnotes. Contribute to Kaih1825/parser-for-goodnotes development by creating an account on GitHub."
url: "https://github.com/Kaih1825/parser-for-goodnotes"
favicon: ""
aspectRatio: "11.200000000000001"
```
他有一個 live demo：
```embed
title: "Document Parser for GoodNotes · Independent Vector SVG & PDF Viewer"
image: ""
description: "An independent, open-source in-browser tool to inspect, parse, and convert user-supplied .goodnotes 5 & 6 archives into vector SVG, PDF, and JSON directly with 100% local WebAssembly."
url: "https://kaih1825.github.io/parser-for-goodnotes/?lang=en"
favicon: ""
```
看起來可能是用 web assembly 處理轉換的功能，可能檔案太大了我丟進去就停止回應了😭
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792872780361.webp|526]]

readme 寫說他有 cli，然後我覺得這種複雜的分析 grok 應該比較擅長我就 clone 下來的同時把 repo 丟給 grok
加上一些爬文，決定把**檔案都先轉成 svg** ，向量圖的特性說不定寫個 script 就可以把螢光筆直接刪掉之類。

```bash
git clone https://github.com/Kaih1825/parser-for-goodnotes.git 
cd parser-for-goodnotes 
uv sync
```
(記得裝 `uv` )

```bash
uv run gn-export-svg <foo.goodnotes> -o <directory/> -a --pdf
```


成功的生出一卡車的 SVG 了，雖然沒有像是一開始一樣全部遮住，但是還是沒有辦法閱讀
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792874964547.webp|800x427]]
> [!note] 輸出後的原檔
>  ![[export_svg.svg|export_svg.svg]]

# 去除螢光筆
一開始 Grok 建議直接用 CLI 匯出 JSON 分析筆刷再處理，但可能檔案太大或者這個 vibe project 真的有問題？跑了好幾分鐘都沒有出來。
我想到 **SVG 不是可以直接看出不同線條的顏色**嗎，那我直接把一個有螢光筆的檔案丟給 AI 分析看看。

![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792875752556.webp|435]]
然後下面那個紅色是紅色原子筆的筆刷，所以我就要 AI 寫一個 script 能批次刪除資料夾下的 svg 特定筆刷。

*注意填入自己的路徑*
螢光筆處理：
```bash
mkdir -p clean_svg

for f in <directory>/*.svg; do filename=$(basename "$f") 
sed '/fill="#ec534b"/d' "$f" > "clean_svg/$filename" echo "已處理: $filename" done
```
合併 svg（其實可以優化前面的檔名，不然檔名排序有點多餘）
```bash
uv run python -c '
from pathlib import Path
from io import BytesIO
import re
import cairosvg
from pypdf import PdfWriter

def page_number(path: Path) -> int:
    m = re.search(r"page_(\d+)_", path.name)
    return int(m.group(1)) if m else 9999

writer = PdfWriter()
svgs = sorted(Path("<directory>").glob("*.svg"), key=page_number)
print(f"共 {len(svgs)} 頁，按正確頁碼排序後開始轉換...")

for i, svg in enumerate(svgs, 1):
    pdf_bytes = cairosvg.svg2pdf(url=str(svg))
    writer.append(BytesIO(pdf_bytes))
    if i % 10 == 0 or i == len(svgs):
        print(f"已完成 {i}/{len(svgs)} 頁  ({svg.name})")

output = "<filename>.pdf"
writer.write(output)
writer.close()
print(f"\n完成！已輸出：{output}")
'
```
喔可以看到基本上其實可以吃本來的 uv 環境然後寫 python 腳本就好，但我急著要讀期中考😭
## 結果
可以看到都沒了
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792876597795.webp|800x438]]
原檔：
![[clean_svg.svg|clean_svg.svg]]
# 淡化螢光筆

>  svg 是向量圖顯然可以改透明度吧！

一開始只有改透明度然後就出現一堆透明框框：
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792876697117.webp|800x414]]

發現是 `stroke` 這個屬性沒有動到
```bash
mkdir -p transparent_svg

for f in <directory>/*.svg; do
  filename=$(basename "$f")
  sed -E '
    s/fill="#ec534b"( fill-opacity="[^"]*")?/fill="#ec534b" fill-opacity="0.15"/g;
    s/stroke="#ec534b"[^ ]*//g;
    s/stroke-opacity="[^"]*"//g;
    s/stroke-width="[^"]*"//g
  ' "$f" > "transparent_svg/$filename"
  echo "已處理: $filename"
done
```
結果可以說是全對：
![[拆解GoodNote以解決輸出PDF後螢光筆遮擋問題-1792877058015.webp|800x448]]
![[transparent_svg.svg|transparent_svg.svg]]

然後一樣用前面的方法把 svg 合併成 PDF 就好了
# 後記
該去讀期中考了，但是我覺得他還有東西可以改進，例如我不確定這個有沒有機會直接搞出線上的編輯器、還有筆畫的平滑（雖然我朋友說只是那個學長字太醜），或者更有野心也可以自己寫一個。這讓我想到之前有人靠 AI 神力重寫了 Adobe 軟體 （ [PhotoCraft: An open-source, photo editor written by scratch in pure Rust](https://github.com/storytold/photocraft)），看畫這個餅哪天實現或者意識到自己在重造輪子吧。