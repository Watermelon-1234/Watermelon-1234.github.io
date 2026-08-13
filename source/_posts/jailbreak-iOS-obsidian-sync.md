---
title: 用越獄 iOS 手機作 Obsidian 同步
share: true
modified: 2026/08/13T12:01:51+08:00
date: 2026/07/21T13:13:47+08:00
comments: true
tags:
  - ios
  - jailbreak
  - obsidian
categories:
  - ios
  - jailbreak
  - obsidian
cover: https://i0.wp.com/cubiclenate.com/wp-content/uploads/2025/05/Obsidian-Thumbnail.jpg?w=1200&ssl=1
poster:
  headline: 用越獄 iOS 手機作 Obsidian 同步
description: 用越獄 iOS 手機作 Obsidian 同步v
mermaid: true
katex: true
mathjax: true
banner: https://i0.wp.com/cubiclenate.com/wp-content/uploads/2025/05/Obsidian-Thumbnail.jpg?w=1200&ssl=1
abbrlink: jailbreak-iOS-obsidian-sync
---

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2qGURS7y8zM7STkxOLgnWO?utm_source=generator&si=e0486dce52fd4772" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

# 動機
因為我讀分科的時候都把筆記放在 obsidian 然後是用 fit（基於 GitHub）同步的，但是在 iOS 上就有問題（iPad 還沒有），GitHub issue 上是建議降級用舊版 但是舊版也會有問題，所以都越獄了我就乾脆寫 shell script 開搞

# 踩坑
- fit 預設應該是不會備份 ` .obsidian`  但大概是因為我之前直接用 `git` force pull 了，所以手機因為一些 plugins 不兼容然後就會一直重新 indexing，跟掛了沒兩樣
- 又嘗試了其他 gitless 插件也不行
- 找到 [這個文章](https://meganesulli.com/blog/sync-obsidian-vault-iphone-ipad/)，使用了 working copy，但我還真不想付那個錢
	- 我還順便在 filza 亂翻他的架構的時候學到這個：
	  ![[jailbreak-iOS-obsidian-sync-1784613632784.webp|jailbreak-iOS-obsidian-sync-1784613632784.webp]]
- 這個 [是用 a-shell 的方法](https://forum.obsidian.md/t/mobile-automatic-sync-with-github-on-ios-for-free-via-a-shell/46150) 但看了就好麻煩
- 考慮過越獄的 catscript 但是轉念一想 那為什麼不直接用 shellscript 肯定比 python 好
  
```embed
title: "Sync your Obsidian Vault on iOS with GitHub, Working Copy, and Apple Shortcuts | Megan Sullivan"
image: "https://meganesulli.com/images/meganesulli-default-social-card.png"
description: "This tutorial explains how to connect your iPhone or iPad to an existing Obsidian vault, without a monthly subscription."
url: "https://meganesulli.com/blog/sync-obsidian-vault-iphone-ipad/"
favicon: ""
aspectRatio: "52.5"
```
（用 **Working Copy** 的方案）

```embed
title: "[Mobile] Automatic sync with GitHub on iOS (for free) via a-shell - Share & showcase - Obsidian Forum"
image: "https://forum.obsidian.md/uploads/default/original/3X/b/a/ba1a1301f580d34a881803aa5ed8cf7ff3cdf0ef.png"
description: "I recently started using Obsidian and didn’t want to pay for Sync or Working Copy, so I thought I’d try to figure out a way to sync my vault everywhere for free. I saw in the comments of this post by rsteele and this post from ForceBru that people were able to get GitHub to sync with their iOS device using the a-shell app, but the way to do it was not really discussed. I hope that this tutorial will be useful for other non-tech-savvy people like myself who would like to get their vault synced ac..."
url: "https://forum.obsidian.md/t/mobile-automatic-sync-with-github-on-ios-for-free-via-a-shell/46150"
favicon: ""
aspectRatio: "57.333333333333336"
```
（用 **a-shell** 的方案）

# Git 設置
因為前面講過 手機的 `.obsidian` 跟電腦的完全不能共用，所以我就想在 Git 設定好讓 `. ` 開頭的資料都不跟著上傳下載

因為 .gitignore 只能防止被 add ，加上其他電腦裝置需要同步 `.obsidian` ，所以要改使用 別的方法

## Sparse Checkout（稀疏檢出）
pull 或者 clone 東西下來的時候篩選哪些文件 / 檔案要到工作區／顯示出來
因為我是不要 . 開頭的文件 所以我就要在 `.git/info/sparse-checkout` 這樣寫：
```
/*
!/.*
```

然後是 `.git/info/exclude` ，這做的事情跟 `.gitignore` 一樣，但是只限本地的這個 repo，不會動到 remote 的設定 ：
```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
.*
```


---

# Powercuts
我後來就開始尋找有沒有可以集成越獄功能的捷徑工具，畢竟儘量少動一點底層的操作對手機比較安全，也是成功在 reddit 上面找到這篇文章：
```embed
title: "[Free Release] Powercuts library + Actions Packs: Unleash the power of Shortcuts by providing new actions tailored for jailbroken devices and allow tweak developers to easily create theirs! : r/jailbreak"
image: "https://i.redd.it/cms/b306fd8870bfee4b_snoo_map.png"
description: ""
url: "https://www.reddit.com/r/jailbreak/comments/u4d6rl/free_release_powercuts_library_actions_packs/"
favicon: ""
aspectRatio: "287.890625"
```
他有很多實用的 shortcut，雖然我感覺可以用其他方式實現，但是我不想花太多時間（那時候要讀分科）所以我就直接用了 `Run shell command` 這個方塊，然後讓 AI 幫我生 shellscript，儘量能處理到大部分的情況：
- remote 沒有改變：
	- local 沒改變：結束
	- local 有改變：直接 push
- remote 有改變：
	- 能夠直接 merge：merge 後 push
	- 不能直接 merge：跳 error

當初真的沒有空去搞解 conflict 的東西，所以我就儘量不再手機上寫新東西，還有就是設定自動化在開關 obsidian 的時候跳通知問你要不要 sync，真的不行就開 terminal 自己拆，目前是沒什麼遇到問題，挺好。

---
# Shortcut 架構
因為考慮到 shellscript 直接寫死在 shortcut 裡面好像不太好，所以我把程式碼放在檔案目錄下：
![[jailbreak-iOS-obsidian-sync-1784616578813.webp|284]]
![[jailbreak-iOS-obsidian-sync-1785147720499.webp|279]]
 
> [!example]-  完整程式碼
> ⚠️注意：此程式主要是由 AI（Gemini）生成後我檢查的，所以請謹慎使用
> 尖括弧 `<>` 內的內容請改成自己的資料
> ```
> #!/bin/bash
> 
> ########################################
> # CONFIG
> ########################################
> 
> REPO_PATH="<本機內 repo/vault 的位置>"
> LOCK_FILE="/tmp/obsidian_git_sync.lock"
> LOG_FILE="/var/mobile/obsidian_git_sync.log"
> 
> COMMIT_MESSAGE="iPhone Auto Sync"
> 
> 
> CONFLICT_FILE="<本機內 repo/vault 的位置>/iphone_conflict.md"
> 
> ########################################
> # UTIL
> ########################################
> 
> log() {
>     echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
> }
> 
> ########################################
> # LOCK
> ########################################
> 
> if [ -f "$LOCK_FILE" ]; then
>     echo "BUSY: sync running"
>     exit 0
> fi
> 
> touch "$LOCK_FILE"
> trap 'rm -f "$LOCK_FILE"' EXIT
> 
> ########################################
> # ENTER REPO
> ########################################
> 
> cd "$REPO_PATH" 2>/dev/null || {
>     echo "ERROR: repo path not found"
>     exit 1
> }
> 
> git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
>     echo "ERROR: not a git repo"
>     exit 1
> }
> 
> ########################################
> # FETCH
> ########################################
> 
> FETCH_OUTPUT=$(git fetch 2>&1)
> if [ $? -ne 0 ]; then
>     log "FETCH FAIL: $FETCH_OUTPUT"
>     echo "ERROR: fetch failed"
>     exit 1
> fi
> 
> ########################################
> # LOCAL CHANGES → COMMIT
> ########################################
> 
> if [ -n "$(git status --porcelain)" ]; then
>     git add -A
> 
>     COMMIT_OUTPUT=$(git commit -m "$COMMIT_MESSAGE" 2>&1)
>     if [ $? -ne 0 ]; then
>         log "COMMIT FAIL: $COMMIT_OUTPUT"
>         echo "ERROR: commit failed"
>         exit 1
>     fi
> fi
> 
> ########################################
> # SHOW STATUS BEFORE MERGE
> ########################################
> 
> STATUS=$(git status --porcelain)
> 
> if [ -n "$STATUS" ]; then
>     echo "MODIFIED:"
>     echo "$STATUS" | awk '{print $2}'
> fi
> 
> ########################################
> # MERGE
> ########################################
> 
> MERGE_OUTPUT=$(git merge origin/main 2>&1)
> MERGE_STATUS=$?
> 
> ########################################
> # CONFLICT HANDLING
> ########################################
> 
> if [ $MERGE_STATUS -ne 0 ]; then
> 
>     CONFLICT_FILES=$(git diff --name-only --diff-filter=U)
>     STATUS_BEFORE=$(git status --porcelain)
> 
>     TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
> 
>     log "MERGE CONFLICT: $MERGE_OUTPUT"
> 
>     ########################################
>     # CREATE .conflict.md
>     ########################################
> 
>     {
>         echo "# Git Merge Conflict Report"
>         echo ""
>         echo "Time: $TIMESTAMP"
>         echo ""
>         echo "## Error"
>         echo "$MERGE_OUTPUT"
>         echo ""
>         echo "## Conflicted Files"
>         echo "$CONFLICT_FILES"
>         echo ""
>         echo "## Git Status (porcelain)"
>         echo "$STATUS_BEFORE"
>     } > "$CONFLICT_FILE"
> 
>     ########################################
>     # OUTPUT FOR POWERCUTS
>     ########################################
> 
>     echo "ERROR: merge conflict"
>     echo ""
>     echo "MODIFIED:"
>     echo "$CONFLICT_FILES"
> 
>     exit 1
> fi
> 
> ########################################
> # PUSH
> ########################################
> 
> PUSH_OUTPUT=$(git push 2>&1)
> if [ $? -ne 0 ]; then
>     log "PUSH FAIL: $PUSH_OUTPUT"
>     echo "ERROR: push failed"
>     exit 1
> fi
> 
> ########################################
> # SUCCESS
> ########################################
> 
> log "SYNC OK"
> 
> echo "OK: sync complete"
> exit 0
> ```

