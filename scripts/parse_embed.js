/* global hexo */

'use strict';

console.log('====== [Embed Plugin] 腳本已成功載入 ======');

function parseEmbedYaml(content) {
  const lines = content.split(/\r?\n/);
  const data = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) {
      continue;
    }

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // 去除首尾引號
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return data;
}

/**
 * 將 embed 內容轉為 Stellar 的 {% link %} 標籤
 */
function convertEmbedToLinkTag(blockContent) {
  const data = parseEmbedYaml(blockContent);

  const href = data.url ? data.url.trim() : '';
  const rawTitle = data.title ? data.title.trim() : '';
  const iconUrl = data.image ? data.image.trim() : (data.favicon ? data.favicon.trim() : '');
  const hasDesc = Boolean(data.description && data.description.trim().length > 0);

  const titlePart = rawTitle ? `"${rawTitle.replace(/"/g, '\\"')}"` : '';
  const iconPart = iconUrl ? `icon:${iconUrl}` : '';
  // const descPart = hasDesc ? 'desc:true' : 'desc:false';
  // const descPart = 'desc:true';

  const parts = ['link', href];
  if (titlePart) {
    parts.push(titlePart);
  }
  if (iconPart) {
    parts.push(iconPart);
  }
  // parts.push(descPart);
  console.log(parts.join(' '));
  return `{% ${parts.join(' ')} %}`;
}

// 註冊至 before_post_render，優先級設為 1 (最先執行)
hexo.extend.filter.register('before_post_render', function(data) {
  if (!data || !data.content) {
    return data;
  }

  const regex = /```embed\s*[\r\n]+([\s\S]*?)```/gi;
  let matchCount = 0;

  const newContent = data.content.replace(regex, function(match, blockContent) {
    matchCount++;
    const result = convertEmbedToLinkTag(blockContent);
    console.log(`[Embed Debug] 成功轉換 ${data.source} 的第 ${matchCount} 個區塊為:\n  ${result}`);
    return result;
  });

  if (matchCount > 0) {
    data.content = newContent;
  }

  return data;
}, 1);