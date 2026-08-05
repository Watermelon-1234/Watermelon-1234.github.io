---
created: 2026-07-28T18:48:28+08:00
modified: 2026/08/05T16:27:55+08:00
title: 用 staller 主題翻新 blog
share: true
date: 2026-07-28 21:47:44+08:00
comments: true
tags:
  - hexo
  - blog
categories:
  - blog
cover: /images/翻新 blog-1785914870060.webp
poster:
  headline: 用 staller 主題翻新 blog
description: 把部落格換成好看的主題，還有新增額外的語法轉換腳本
mermaid: true
katex: true
mathjax: true
banner: /images/翻新 blog-1785914870060.webp
---

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0q54zr8Y0BQbpKKTbVbXH6?utm_source=generator&si=33bc25a44c044ffe" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

# 前言
因為開始用 Obsidian 作筆記，在整理筆記的時候發現不少之前為了紀錄的文章其實可以發成 blog，畢竟很多我踩過的坑其實不是只有我在問，只是答案在一些很難找的地方 （ex：超長討論串的中間）。那不如就直接整理一下分享出來也不錯，畢竟我也不在意文筆不好等等，頂多有錯誤等等那我也不介意修改。

這篇文章因為包山包海，所以建議略讀之後就從目錄跳轉到需要的地方就好。

---
# 成品
就是這個網站啦，截個圖紀念一下：
![[翻新 blog-1785914870060.webp|700x439]]

---
# hexo 端

## 基本配置

### 指令
本地測試：
```
hexo clean && hexo g && hexo s
```

`ctrl` + `c`  重開
### `_comfig.yml`
1. 基本資訊：標題、時區、作者、語言、頭貼、icon
2. 檔案管理： 
	1. `post_asset_folder: true` 因為圖片影片都混在同一個資料夾真的很亂
	2. `ignore:.DS_Store` macOS 自動生成的惱人檔案
3. 自訂主題：見 [[用 staller 主題翻新 blog#Theme|主題]] 

### RSS
是一種訂閱網站內容的機制，只要網站有更新就會發送 「RSS Feed」的 XML 檔案（ `atom.xml` ），使用者可以透過在 rss 閱讀器等地方輸入 RSS Feed 網址就能訂閱。
更詳細的介紹可以看這裡：
```embed
title: "iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天"
image: "https://ithelp.ithome.com.tw/storage/image/fbpic.jpg"
description: "iT 邦幫忙是 IT 領域的技術問答與分享社群，透過 IT 人互相幫忙，一起解決每天面臨的靠北時刻。一起來當 IT 人的超級英雄吧，拯救下一個卡關的 IT 人"
url: "https://ithelp.ithome.com.tw/m/articles/10373758"
favicon: ""
aspectRatio: "52.5"
```

在 hexo 中，要先安裝 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)
```
npm install hexo-generator-feed --save
```

並且在 `_config.yml` 中設定：
```
feed:
  enable: true
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: icon.png
  autodiscovery: true
```
僅為舉例，要調整詳見 [GitHub README](https://github.com/hexojs/hexo-generator-feed)

---
## Theme
在多方比較（可見 [[nice looking hexo theme|nice looking hexo theme]]）後選定用 **Stellar**
```embed
title: "开始您全新的博客之旅"
image: "https://gcore.jsdelivr.net/gh/cdn-x/xaoxuu@main/avatar/classic.webp"
description: "Stellar 是一个内置文档系统的简约商务风 Hexo 主题，支持丰富的标签和动态数据组件，帮助您简单从容地应对各种表达需求，十分推荐内容创作者使用 Stellar 开始您全新的博客之旅。 了解 Stellar 如何在混乱中建立秩序 “真正的简约远不止删繁就简，而是在纷繁中建立秩序。” 人的注意力是有限的，要提高有效信息的醒目程度，就必须降低不重要信息醒目程度，删除所有无效信息。 降低视觉密度"
url: "https://xaoxuu.com/wiki/stellar/"
favicon: ""
aspectRatio: "100"
```

這個主題除了一些小的額外設定，還引進 / 建構了幾個全新的系統 / 區塊
既有的東西是：
1. 一般文章：直接放在 `source/_posts` 下就好
2. 獨立文章：
	1. 位置：放在 `source` 下任何非底線路徑
	2. `menuid` ：
		1. 在 `blog/_config.stellar.yml` 中設定好 `menubar` ：
		   ![[翻新 blog-1785443514969.webp|630x250]]
		   *from [编写文章以及独立页面](https://xaoxuu.com/wiki/stellar/pages/)*
		2. 在頁面的 frontmatter 中設定
3. [側邊欄組件](https://xaoxuu.com/wiki/stellar/widgets/)（widget）
	1. 每一個組件都要在 `_data/widgets.yml` 裡面建立，例：
	   ![[翻新 blog-1785447809787.webp|630x111]]
	2. 配置的地方：『主題』、『項目』、『頁面』的設定，後者可以覆蓋前者
		1. 語法： `leftbar: ['widget1', 'widget2']` (也可以是 `rightbar`)
		2. 也可以透過結構樹在 `blog/_config.stellar.yml` 裡面統一設定，見 [此連結](https://xaoxuu.com/wiki/stellar/widgets/#%E9%85%8D%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%B8%83%E5%B1%80)
		3. 注意：沒辦法在 markdown layout 中直接跑出 `{{ var }}` 形式的變數
			1. 解決方法：用 html 標籤，然後用 `<script>` 去控制 / 調整內文 ex：
			   ```yml
			   wordcount:
		        layout: markdown
		        title: ' 文章資訊'
		        content: |
		          -  **本文字數**：<span id="post-word-count">計算中...</span> 字
		          -  **預計閱讀**：<span id="post-read-time">計算中...</span>
		      
		          <script>
		            (function() {
		              function updateWordCount() {
		                const article = document.querySelector('article.md-text') || document.querySelector('main');
		                if (!article) return;
		      
		                const text = article.innerText || article.textContent || '';
		                const count = text.replace(/\s+/g, '').length;
		                const minutes = Math.max(1, Math.ceil(count / 300));
		      
		                const countEl = document.getElementById('post-word-count');
		                const timeEl = document.getElementById('post-read-time');
		      
		                if (countEl) countEl.innerText = count.toLocaleString();
		                if (timeEl) timeEl.innerText = minutes + ' 分鐘';
		              }
		      
		              if (document.readyState === 'loading') {
		                document.addEventListener('DOMContentLoaded', updateWordCount);
		              } else {
		                updateWordCount();
		              }
		            })();
		          </script>
			   ```
1. [文檔系統](https://xaoxuu.com/wiki/stellar/wiki-settings/)（wiki）
	1. 建立  `blog/source/_data/wiki` 資料夾，在資料夾下建立文件：
		1. `wiki.yml` ：宣告 / 上架所有的文檔項目 ex：
		   ![[翻新 blog-1785492171478.webp|630x253]]
		2. `<id>.yml` ：配置名為 "\<id\>"的文檔，基本上能配置的內容與 `blog/_config.stellar.yml` 差不多，詳見超連結

### 背景漸層
![[翻新 blog-1785502325069.webp|481]]
⬆️這邊有說背景可以可以做成漸層
![[翻新 blog-1785502353954.webp|383]]
⬆️這邊有漸層寫法
後來點進去 gradient 註解那邊給的那個網址看到這個： ![[翻新 blog-1785502780606.webp|700x101]]
所以就嘗試著把 css 的漸層語法直接塞在 `background-image` 下就行了
*更多 staller 個人化設定見 [此](https://xaoxuu.com/wiki/stellar/advanced-settings/) *

### 範例

主題的範例檔在此
```embed
title: "GitHub - xaoxuu/hexo-theme-stellar-examples: some demo for stellar"
image: "https://opengraph.githubassets.com/95ce4ee704686f03dece038b5070f4a82e33607065fac60ab5c96f70c47b4afb/xaoxuu/hexo-theme-stellar-examples"
description: "some demo for stellar. Contribute to xaoxuu/hexo-theme-stellar-examples development by creating an account on GitHub."
url: "https://github.com/xaoxuu/hexo-theme-stellar-examples/"
favicon: ""
aspectRatio: "50"
```
（ [pjax 見此](https://github.com/MoOx/pjax)）

### 顯示主題更新

```
{% timeline api:https://api.github.xaox.cc/repos/xaoxuu/hexo-theme-stellar/releases?per_page=1 %}  
{% endtimeline %}
```

### Open Graph

就是分享連結得時候出現的描述 / 圖片
ex：
![[翻新 blog-1785247815003.webp|383]]
*取自 [網路](https://frankknow.com/open-graph-tag/) 

### API Limit
因為蠻多工具 / Widget 是與一些 API 有關，因此在架站的時候頻繁測試可能就會卡 rate limit
例：ghuser Widget 的使用者資訊 / 頭貼會不見
```
{
  "message": "API rate limit exceeded for XXX.XX.XXX.XXX. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  "documentation_url": "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"
}
```

### 友鏈
```embed
title: "数据类标签组件（8个）"
image: "https://gcore.jsdelivr.net/gh/cdn-x/xaoxuu@main/avatar/classic.webp"
description: "timeline 时间线支持静态和动态时间线数据源：  静态数据 github issues 支持多种筛选参数，详见 API github releases 支持多种筛选参数，详见 API gitea issues 支持多种筛选参数，详见 API gitea releases 支持多种筛选参数，详见 API memos …  常见的使用场景请看这篇文章： https://xaoxuu.com/bl"
url: "https://xaoxuu.com/wiki/stellar/tag-plugins/data/#friends-%E5%8F%8B%E9%93%BE"
favicon: ""
aspectRatio: "100"
```


---
## 評論區
用 `Giscus` 這個工具，他本身是 github 裡面的 Application，然後把評論利用 API 以 disscuss 的形式存在 repo 裡面
```embed
title: "GitHub - giscus/giscus: A commenting system powered by GitHub Discussions. :speech_balloon: :gem:"
image: "https://opengraph.githubassets.com/cdb4ac6c149ca9d35aabe457b74a21bc1bd99344847b6e048db68f145914c902/giscus/giscus"
description: "A commenting system powered by GitHub Discussions. :octocat: :speech_balloon: :gem: - giscus/giscus"
url: "https://github.com/giscus/giscus"
favicon: ""
aspectRatio: "50"
```

基本上一般的只要照著 [這個連結](https://giscus.app/zh-TW) 作基本上就行了
我這次選的主題有自己的配置方式所以照他的
對了如果是自行配置，找不到 repo id 等項目，可以上面連結的 『啟用 giscus』下面的程式碼區塊找到

還有其他的評論區工具可以見這裡：
```embed
title: "评论插件配置（6个）"
image: "https://gcore.jsdelivr.net/gh/cdn-x/xaoxuu@main/avatar/classic.webp"
description: "BeaudarBeaudar 是 Utterances 的中文版本，相比 Utterances 有更多的体验优化，可以按时间倒序排序。 blog/_config.stellar.ymlcomments:  service: beaudar  beaudar:    repo: xaoxuu/blog-comments  Beaudar 的配置方法很简单，创建一个仓库，在仓库中创建一个 域名白名单文"
url: "https://xaoxuu.com/wiki/stellar/comments/"
favicon: ""
aspectRatio: "100"
```
（配置方法不保證通用）

## Canonical URL
![[翻新 blog-1785394046014.webp|630x303]]
見 [此](https://welly.tw/blog/what-is-canonical-url)

## 相關文章推薦
安装插件：
```
npm i hexo-related-popular-posts
```
`_config.stellar.yml` ：
```
article:  
  # npm i hexo-related-popular-posts  
  related_posts:  
    enable: true  
    title: 您可能感兴趣的文章
```

## 文章設定
見此文
```embed
title: "编写文章以及独立页面"
image: "https://gcore.jsdelivr.net/gh/cdn-x/xaoxuu@main/avatar/classic.webp"
description: "文章类型文章类型决定布局风格，有两种风格可选，tech: 默认技术类文章, story: 图文类文章，文字和段落间增距大。 blog/_config.stellar.ymlarticle:  type: tech # tech/story  可以在 front-matter/topic/wiki 中覆盖此参数。 文章封面在文章列表页面或者其他位置显示的文章摘要卡片上面的图片称之为「文章封面」 引用"
url: "https://xaoxuu.com/wiki/stellar/pages/"
favicon: ""
aspectRatio: "100"
```

## 獨立頁面
主題有支援 / 常見的有
1. about
2. bookmark
3. explore
4. friends
	1. rss
這些東西都會各自放在一個資料夾內

我的作法是把前面 example 的拉到 `source` 下來改

## 文章字數與所需閱讀時間
安裝：
```
npm install hexo-symbols-count-time --save
```

設置見 [GitHub repo](https://github.com/theme-next/hexo-symbols-count-time)

## 語法轉換：Hexo Filter
因為主題功能與 Obsidian 插件都有各自的語法而且他們不互通，而且我的目標是可以把 obsidian 的文件直接用plugin 丟 Github 再靠action merge 進去我的網站，因此我就在找方法讓 hexo 能夠 parse obsidian 方面的語法。

```embed
title: " [實作筆記] 自定義 Hexo Helper"
image: "https://avatars1.githubusercontent.com/u/4269720?s=460&v=4"
description: "前情提要我的 Blog 目前是使用 Hexo 搭建的,使用的主題是 landscape 。隨著時光推移, Hexo 漸漸從人們的目光淡出,主功能、文件、翻譯或是外掛、主題等…, 更新速度變慢很多 我想改寫主題當中的某個輔助函數（Helper), 稍微記錄一下作法。 實作首先是檔案位置，一個是在根目錄底下建立 scripts 資料夾，或者你正在使用主題(Theme)底下。以我的例子來說，我會放在 t"
url: "https://blog.marsen.me/2022/05/10/2022/hexo_customerize_helper/"
favicon: ""
aspectRatio: "100"
```
這一個文章在解釋 hexo helper 這個玩意兒的作用，經過一番翻文檔跟 gemini，決定用 hexo filter 來代換語法。

### 踩坑1：文件存放位置
不管怎樣都是放在 `blog/scripts/` （blog 指部落格整個資料夾）下

### 踩坑 1：Priority
[文檔：](https://hexo.io/api/filter)
![[翻新 blog-1785850513861.webp|633]]
如果是自己寫的直接設成 1 就好，花了很久都沒成功大概是因為已經被主題的 scripts parse 壓掉了

### code：link embed
*為gemini生成後自己code view，謹慎使用*
配合 gemini 插件
```embed
title: "GitHub - Seraphli/obsidian-link-embed: This plugin allow you to convert URLs in your notes into embeded previews."
image: "https://raw.githubusercontent.com/Seraphli/obsidian-link-embed/main/docs/demo.gif"
description: "This plugin allow you to convert URLs in your notes into embeded previews. - Seraphli/obsidian-link-embed"
url: "https://github.com/seraphli/obsidian-link-embed"
favicon: ""
aspectRatio: "39.82494529540481"
```
配合staller功能：link 链接卡片
![[翻新 blog-1785851118904.webp|563]]

> [!example]- 程式碼
>  ````javascript
> 	/* global hexo */
> 	
> 	'use strict';
> 	
> 	console.log('====== [Embed Plugin] 腳本已成功載入 ======');
> 	
> 	function parseEmbedYaml(content) {
> 	  const lines = content.split(/\r?\n/);
> 	  const data = {};
> 	
> 	  for (let i = 0; i < lines.length; i++) {
> 	    const line = lines[i].trim();
> 	    if (!line || line.startsWith('#')) {
> 	      continue;
> 	    }
> 	
> 	    const colonIndex = line.indexOf(':');
> 	    if (colonIndex === -1) {
> 	      continue;
> 	    }
> 	
> 	    const key = line.slice(0, colonIndex).trim();
> 	    let value = line.slice(colonIndex + 1).trim();
> 	
> 	    // 去除首尾引號
> 	    if (
> 	      (value.startsWith('"') && value.endsWith('"')) ||
> 	      (value.startsWith("'") && value.endsWith("'"))
> 	    ) {
> 	      value = value.slice(1, -1);
> 	    }
> 	
> 	    data[key] = value;
> 	  }
> 	
> 	  return data;
> 	}
> 	
> 	/**
> 	 * 將 embed 內容轉為 Stellar 的 {% link %} 標籤
> 	 */
> 	function convertEmbedToLinkTag(blockContent) {
> 	  const data = parseEmbedYaml(blockContent);
> 	
> 	  const href = data.url ? data.url.trim() : '';
> 	  const rawTitle = data.title ? data.title.trim() : '';
> 	  const iconUrl = data.image ? data.image.trim() : (data.favicon ? data.favicon.trim() : '');
> 	
> 	  const titlePart = rawTitle ? `"${rawTitle.replace(/"/g, '\\"')}"` : '';
> 	  const iconPart = iconUrl ? `icon:${iconUrl}` : '';
> 	  // const descPart = 'desc:true'; // 想要 description 可以打開
> 	
> 	  const parts = ['link', href];
> 	  if (titlePart) {
> 	    parts.push(titlePart);
> 	  }
> 	  if (iconPart) {
> 	    parts.push(iconPart);
> 	  }
> 	  // parts.push(descPart); // 想要 description 可以打開
> 	  console.log(parts.join(' '));
> 	  return `{% ${parts.join(' ')} %}`;
> 	}
> 	
> 	// 註冊至 before_post_render，優先級設為 1 (最先執行)
> 	hexo.extend.filter.register('before_post_render', function(data) {
> 	  if (!data || !data.content) {
> 	    return data;
> 	  }
> 	
> 	  const regex = /``` embed\s*[\r\n]+([\s\S]*?)```/gi;
> 	  let matchCount = 0;
> 	
> 	  const newContent = data.content.replace(regex, function(match, blockContent) {
> 	    matchCount++;
> 	    const result = convertEmbedToLinkTag(blockContent);
> 	    console.log( `[Embed Debug] 成功轉換 ${data.source} 的第 ${matchCount} 個區塊為 :\n  ${result}` );
> 	    return result;
> 	  });
> 	
> 	  if (matchCount > 0) {
> 	    data.content = newContent;
> 	  }
> 	
> 	  return data;
> 	}, 1);
> ````

---
```
```
## 警告提示塊

是 obidian 內建的語法：

``` markdown
> [!type] title(optional)
>  content
```


我發現 hexo 沒有內建這個東西
主流的是用 Hexo Admonition
```embed
title: "GitHub - lxl80/hexo-admonition: Add block-styled admonition to hexo, e.g. note, warning or error. | Hexo内容辅助插件，支持向文档中添加如提示、警告、错误等块式内容。"
image: "https://opengraph.githubassets.com/a100b4c7982145f2e9647ffeb8b58c323d1e6630ca878377e3684c43b6fb6cdd/lxl80/hexo-admonition"
description: "Add block-styled admonition to hexo, e.g. note, warning or error. | Hexo内容辅助插件，支持向文档中添加如提示、警告、错误等块式内容。 - lxl80/hexo-admonition"
url: "https://github.com/lxl80/hexo-admonition"
favicon: ""
aspectRatio: "50"
```

但是因為 Hexo Admonition New 有多支援一些功能 / type，所以我決定改用這個
```embed
title: "GitHub - x1renn/hexo-admonition-new: A Hexo plugin that adds customizable admonition blocks (note, info, warning, etc.) with icons and styles. Hexo 插件，支持自定义提示块（如 note、info、warning 等），并提供图标和样式设置。"
image: "https://opengraph.githubassets.com/b1a2170bf931a9521f70d1bd556bf898c1b946a128363629e5a6cb27c5c89515/x1renn/hexo-admonition-new"
description: "A Hexo plugin that adds customizable admonition blocks (note, info, warning, etc.) with icons and styles. Hexo 插件，支持自定义提示块（如 note、info、warning 等），并提供图标和样式设置。 - x1renn/hexo-admonition-new"
url: "https://github.com/x1renn/hexo-admonition-new"
favicon: ""
aspectRatio: "50"
```
其語法是：
```
!!! type "title"(optional)
    content
```

### 轉換
一樣叫 Gemini 寫一個轉換的 script：
> [!example]- 程式碼
> ```
>  /* global hexo */
> 'use strict';
> 
> /**
>  * Hexo Filter: Convert Obsidian Callouts to hexo-admonition-new syntax
>  * Location: blog/scripts/obsidian_admonition.js
>  */
> 
> // hexo-admonition-new 原生支援的類型
> const SUPPORTED_TYPES = new Set([
>   'anote',
>   'info',
>   'todo',
>   'warning',
>   'attention',
>   'caution',
>   'error',
>   'failure',
>   'missing',
>   'fail',
>   'danger',
>   'bug',
>   'success',
>   'tip',
>   'question',
>   'example',
>   'quote'
> ]);
> 
> // Obsidian 常用 Callout 類型對映表
> const TYPE_MAP = {
>   'note': 'anote',         // 避開 CSS note 樣式影響
>   'seealso': 'anote',
>   'important': 'warning',  // > [!important] 轉為 warning
>   'abstract': 'info',
>   'summary': 'info',
>   'tldr': 'info',
>   'hint': 'tip',
>   'check': 'success',
>   'done': 'success',
>   'help': 'question',
>   'faq': 'question',
>   'cite': 'quote'
> };
> 
> /**
>  * 轉義 Regex 特殊字元
>  * @param {string} str
>  * @returns {string}
>  */
> function escapeRegExp(str) {
>   return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
> }
> 
> /**
>  * 遞迴解析並轉換 Obsidian Callout 語法為 hexo-admonition-new 格式
>  * 自動消除多餘空格並精準縮進 4 個空格（支援多層嵌套）
>  * @param {string[]} lines
>  * @returns {string[]}
>  */
> function parseCallouts(lines) {
>   const result = [];
>   let i = 0;
> 
>   while (i < lines.length) {
>     const line = lines[i];
> 
>     // 匹配 Obsidian Callout 起始行：例如 > [!important] 或 > [!note]+ 標題
>     const calloutMatch = line.match(/^(\s*)>\s*\[!([a-zA-Z0-9_\-]+ )\]([\+\-]?)(?:[ \t]+(.*))?$/);
> 
>     if (calloutMatch) {
>       const indent = calloutMatch[1] || '';
>       const rawType = calloutMatch[2].toLowerCase();
>       const foldSign = calloutMatch[3]; // '+' 或 '-' 或 ''
>       const rawTitle = calloutMatch[4] ? calloutMatch[4].trim() : '';
> 
>       let targetType = null;
>       let targetTitle = rawTitle;
> 
>       // 檢查類型支援與轉換邏輯
>       if (SUPPORTED_TYPES.has(rawType)) {
>         targetType = rawType;
>       } else if (TYPE_MAP[rawType]) {
>         targetType = TYPE_MAP[rawType];
>       } else {
>         // 不支援的類型特別處理：降級為 'info' 類型
>         targetType = 'info';
>         if (!targetTitle) {
>           targetTitle = rawType.charAt(0).toUpperCase() + rawType.slice(1);
>         }
>       }
> 
>       // 判斷折疊語法 (!!!, !!!+, !!!-)
>       let prefix = '!!!';
>       if (foldSign === '+') {
>         prefix = '!!!+';
>       } else if (foldSign === '-') {
>         prefix = '!!!-';
>       }
> 
>       // 組合標頭行
>       let headerLine = `${indent}${prefix} ${targetType}` ;
>       if (targetTitle !== '') {
>         const escapedTitle = targetTitle.replace(/"/g, '\\"');
>         headerLine += ` "${escapedTitle}"` ;
>       }
> 
>       result.push(headerLine);
> 
>       // 收集屬於目前 Callout 內部的所有行（剝離 > 符號）
>       const rawBodyLines = [];
>       const continuationRegex = new RegExp( `^${escapeRegExp(indent)}>(.*)$` );
> 
>       i++;
>       while (i < lines.length) {
>         const currentLine = lines[i];
>         const contMatch = currentLine.match(continuationRegex);
> 
>         if (contMatch) {
>           rawBodyLines.push(contMatch[1] !== undefined ? contMatch[1] : '');
>           i++;
>         } else {
>           break;
>         }
>       }
> 
>       // 計算區塊內非空行的最小前導空格數，以進行自動對齊（Dedent）
>       let minIndent = Infinity;
>       for (const bLine of rawBodyLines) {
>         if (bLine.trim().length > 0) {
>           const match = bLine.match(/^[ \t]*/);
>           const leadingSpaces = match ? match[0].length : 0;
>           if (leadingSpaces < minIndent) {
>             minIndent = leadingSpaces;
>           }
>         }
>       }
>       if (minIndent === Infinity) minIndent = 0;
> 
>       // 剔除多餘的前導空格，歸一化縮進
>       const dedentedBodyLines = rawBodyLines.map(bLine => {
>         if (bLine.trim().length === 0) return '';
>         return bLine.slice(minIndent);
>       });
> 
>       // 遞迴處理內部內容（若有嵌套 Callout 亦可正確處理）
>       const processedBody = parseCallouts(dedentedBodyLines);
> 
>       // 為內部所有內容統一補上 4 個空格縮進
>       for (const bodyLine of processedBody) {
>         if (bodyLine.length === 0) {
>           result.push( `${indent}    ` );
>         } else {
>           result.push( `${indent}    ${bodyLine}` );
>         }
>       }
>     } else {
>       result.push(line);
>       i++;
>     }
>   }
> 
>   return result;
> }
> 
> /**
>  * 主轉換函式
>  * @param {string} content
>  * @returns {string}
>  */
> function convertObsidianCallouts(content) {
>   if (!content) return content;
>   const lines = content.split(/\r?\n/);
>   const processedLines = parseCallouts(lines);
>   return processedLines.join('\n');
> }
> 
> // 註冊 Hexo 渲染前過濾器
> hexo.extend.filter.register('before_post_render', function(data) {
>   if (data && data.content) {
>     data.content = convertObsidianCallouts(data.content);
>   }
>   return data;
> }, 1);
> ```

#### 調整配色

從 README 把 [CSS](https://github.com/x1renn/hexo-admonition-new#css-%E6%96%87%E4%BB%B6)　放到某個路徑（例： `blog/css` ）
如果原本的顏色不適合（例如：深色主題），可以直接調內容
在 `_comfig_stellar.yml` 中的 `inject.head` 再加一項 `- <link rel="stylesheet" href="<從>">

成品：
![[翻新 blog-1785872610990.webp|700x345]]

---

# Obsidian
## Enveloppe
Enveloppe 是一個 obsidian 插件，可以將已有文章 push 到 GitHub repo 上面自行 merge
1. 基礎設定：
	1. file tree in the directory：Fixed
		1. root folder： `source/_posts`
	2. attatchmemt： ![[用 staller 主題翻新 blog-1785916209646.webp|700x438]]
	3. plugins： ![[用 staller 主題翻新 blog-1785916238120.webp|700x208]]

## Template
1. Enveloppe ：
	1. 其實在設定就用好幾乎不用在 front matter 作 Override
	2. 只需要 `share`（checkox）就好
2. Hexo：
	1. 參考資料： https://hexo.io/docs/front-matter
	2. date / updated：見 [[用 staller 主題翻新 blog#Date/Update|時間紀錄插件]]　
	3. comments (optional)
	4. tags、categories
3. 主題：**Stellar**
	1. 見 https://xaoxuu.com/wiki/stellar/front-matter/
4. 有巢狀的 frontmatter 要編輯：用 [obsidian-nested-properties](https://github.com/mnaoumov/obsidian-nested-properties)編輯

我的 template：
```yml
---
title:
share: false
modified: 2026/08/05T14:49:51+08:00
date: 2026-07-28 21:47:44+08:00
comments: true
tags:
categories:
cover: /images
poster:
  headline: ""
description:
mermaid: true
katex: true
mathjax: true
banner: /images/
---
```

### Date/Update
Obsidian 插件：
```embed
title: "GitHub - pookhaosc1/obsidian-front-matter-timestamps: Track note created and modified times in front matter, kept up to date automatically."
image: "https://opengraph.githubassets.com/6b396ccfa6ea61c676735f3f621d0e2ef434e505479cfdfd029e1794b7263092/pookhaosc1/obsidian-front-matter-timestamps"
description: "Track note created and modified times in front matter, kept up to date automatically. - pookhaosc1/obsidian-front-matter-timestamps"
url: "https://github.com/pookhaosc1/obsidian-front-matter-timestamps"
favicon: ""
aspectRatio: "50"
```
```embed
title: "GitHub - Gru80/obsidian-timestamper: A plugin for Obsidian to quickly insert customized date- and time-stamps to the currently active note"
image: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/442428126/ec2522e6-6644-4067-be0f-79078fc800d7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T075532Z&X-Amz-Expires=300&X-Amz-Signature=d1933c0085e3a75824e2f09b374ac8be956695120dad80f50d8f3fe05429d093&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxNjgzMiwibmJmIjoxNzg1OTE2NTMyLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.Sfs7tq55sfL_Qmr79sDR6XMur99X7NvlR--GYO6RYMA"
description: "A plugin for Obsidian to quickly insert customized date- and time-stamps to the currently active note - Gru80/obsidian-timestamper"
url: "https://github.com/gru80/obsidian-timestamper"
favicon: ""
aspectRatio: "48.92344497607656"
```
這樣每次開啟新文件 / 編輯就會自己生成 or 修改時間

### Stellar（主題）
因為這個主題他有很多自定義的標籤跟 Widget，雖然有人作了即時顯示在 Obsidian 的標籤，但覆蓋率還沒有到很好，為了保持 Obsidian 這邊的觀看效果，所以我決定都先不用　　
詳情可以看這個文章：
```embed
title: "搭建适用于Stellar主题的Obsidian写作环境"
image: "https://blog.hzchu.top/img/avatar.webp"
description: "一直以来写文章都是在小米便签上写好，然后再发到电脑上用Typora做修改，或者说直接用kdeconnect连到电脑上用语音实时输入，不过现在新手机安卓版本太高，后台限制的死死的，连接一会就断，那我不如找一个靠谱的支持跨设备同步的编辑软件 不过迁移后体验不能比迁移前差吧，主要有这两个功能挺需要的：  自动补全，原先基于obgnail/typora_plugin实现，obsidian中可以用Vario"
url: "https://blog.hzchu.top/wiki/more/%E7%BD%91%E7%AB%99%E6%9B%B4%E6%96%B0/Obsidian/"
favicon: ""
aspectRatio: "100"
```



---
# 網站上線

## GitHub 託管
GitHub 有免費的託管功能 GitHub page 能夠讓靜態網站直接架設在 GitHub 上而且還有網域，建議白嫖起來。

官方文章：
```embed
title: "GitHub Pages"
image: "https://hexo.io/icon/og-image-wide.png"
description: "In this tutorial, we use GitHub Actions to deploy GitHub Pages. It works in both public and private repositories. Skip to the One-command deployment section if you prefer not to upload your source fol"
url: "https://hexo.io/docs/github-pages"
favicon: ""
aspectRatio: "52.51282051282051"
```
官方的方式是放一個 GitHub Action，然後讓 GitHub Page 抓 Action 的生成物。

阿我自己偏好讓生成的東西在新的 branch，這樣比較好 debug。
所以魔改官網上的 workflow：

> [!example]- 程式碼（modify by AI） 
> ``` yml
> name: deploy_page_to_gh-pages
> 
> on:
>   push:
>     branches:
>       - main # 當 main 分支有 push 時觸發
>   workflow_dispatch:
> 
> permissions:
>   contents: write # 必須設定寫入權限，才能將檔案推送到目標分支
> 
> jobs:
>   build-and-deploy:
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/checkout@v4
>         with:
>           token: ${{ secrets.GITHUB_TOKEN }}
>           submodules: recursive
> 
>       - name: Use Node.js 20
>         uses: actions/setup-node@v4
>         with:
>           node-version: "20"
> 
>       - name: Cache NPM dependencies
>         uses: actions/cache@v4
>         with:
>           path: node_modules
>           key: ${{ runner.OS }}-npm-cache
>           restore-keys: |
>             ${{ runner.OS }}-npm-cache
> 
>       - name: Install Dependencies
>         run: npm install
> 
>       - name: Build
>         run: npm run build
> 
>       - name: Deploy to Target Branch
>         uses: peaceiris/actions-gh-pages@v4
>         with:
>           github_token: ${{ secrets.GITHUB_TOKEN }}
>           publish_dir: ./public       # 要發布的資料夾
>           publish_branch: gh-pages    # 填寫你想要部署到的目標分支名稱（如 gh-pages）
> ```


## Domain
可以參照這篇文章
```embed
title: "Hexo 架站流程踩坑紀錄(1)﹍建立 GitHub Pages"
image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPU_elTvUC_jrxOUfN8tVHI3hwhDsqIPS04UmZaOb1ZazaVZmwOkaP8UtZJnwgKZj_0qsjNVBcut8ffb6lmwrlZF_Llf3DhyphenhyphenbrJs03Hwd0HcavilgQRsnPTlXZ4Hcj0hqx_QxmBS4rHoeuT37obY2I01rBv_DpIKHXKmaIe689ueJ8zG2r83dWxiefVqo/w1200-h630-p-k-no-nu/hexo-github-pages.jpg"
description: "本篇為「Blogger 搬到 Hexo 流程」系列文第一篇，說明如何在 GitHub 架設 Hexo 網誌，包含環境設定、安裝 Hexo、發布到 Github、設定 Github Pages。"
url: "https://tw.wfublog.com/2024/08/hexo-1-github-pages.html"
favicon: ""
aspectRatio: "50"
```
