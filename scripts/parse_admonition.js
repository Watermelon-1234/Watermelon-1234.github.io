/* global hexo */
'use strict';

/**
 * Hexo Filter: Convert Obsidian Callouts to hexo-admonition-new syntax
 * Location: blog/scripts/obsidian_admonition.js
 */

// hexo-admonition-new 原生支援的類型
const SUPPORTED_TYPES = new Set([
  'anote',
  'info',
  'todo',
  'warning',
  'attention',
  'caution',
  'error',
  'failure',
  'missing',
  'fail',
  'danger',
  'bug',
  'success',
  'tip',
  'question',
  'example',
  'quote'
]);

// Obsidian 常用 Callout 類型對映表
const TYPE_MAP = {
  'note': 'anote',         // 避開 CSS note 樣式影響
  'seealso': 'anote',
  'important': 'warning',  // > [!important] 轉為 warning
  'abstract': 'info',
  'summary': 'info',
  'tldr': 'info',
  'hint': 'tip',
  'check': 'success',
  'done': 'success',
  'help': 'question',
  'faq': 'question',
  'cite': 'quote'
};

/**
 * 轉義 Regex 特殊字元
 * @param {string} str
 * @returns {string}
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 遞迴解析並轉換 Obsidian Callout 語法為 hexo-admonition-new 格式
 * 自動消除多餘空格並精準縮進 4 個空格（支援多層嵌套）
 * @param {string[]} lines
 * @returns {string[]}
 */
function parseCallouts(lines) {
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 匹配 Obsidian Callout 起始行：例如 > [!important] 或 > [!note]+ 標題
    const calloutMatch = line.match(/^(\s*)>\s*\[!([a-zA-Z0-9_\-]+)\]([\+\-]?)(?:[ \t]+(.*))?$/);

    if (calloutMatch) {
      const indent = calloutMatch[1] || '';
      const rawType = calloutMatch[2].toLowerCase();
      const foldSign = calloutMatch[3]; // '+' 或 '-' 或 ''
      const rawTitle = calloutMatch[4] ? calloutMatch[4].trim() : '';

      let targetType = null;
      let targetTitle = rawTitle;

      // 檢查類型支援與轉換邏輯
      if (SUPPORTED_TYPES.has(rawType)) {
        targetType = rawType;
      } else if (TYPE_MAP[rawType]) {
        targetType = TYPE_MAP[rawType];
      } else {
        // 不支援的類型特別處理：降級為 'info' 類型
        targetType = 'info';
        if (!targetTitle) {
          targetTitle = rawType.charAt(0).toUpperCase() + rawType.slice(1);
        }
      }

      // 判斷折疊語法 (!!!, !!!+, !!!-)
      let prefix = '!!!';
      if (foldSign === '+') {
        prefix = '!!!+';
      } else if (foldSign === '-') {
        prefix = '!!!-';
      }

      // 組合標頭行
      let headerLine = `${indent}${prefix} ${targetType}`;
      if (targetTitle !== '') {
        const escapedTitle = targetTitle.replace(/"/g, '\\"');
        headerLine += ` "${escapedTitle}"`;
      }

      result.push(headerLine);

      // 收集屬於目前 Callout 內部的所有行（剝離 > 符號）
      const rawBodyLines = [];
      const continuationRegex = new RegExp(`^${escapeRegExp(indent)}>(.*)$`);

      i++;
      while (i < lines.length) {
        const currentLine = lines[i];
        const contMatch = currentLine.match(continuationRegex);

        if (contMatch) {
          rawBodyLines.push(contMatch[1] !== undefined ? contMatch[1] : '');
          i++;
        } else {
          break;
        }
      }

      // 計算區塊內非空行的最小前導空格數，以進行自動對齊（Dedent）
      let minIndent = Infinity;
      for (const bLine of rawBodyLines) {
        if (bLine.trim().length > 0) {
          const match = bLine.match(/^[ \t]*/);
          const leadingSpaces = match ? match[0].length : 0;
          if (leadingSpaces < minIndent) {
            minIndent = leadingSpaces;
          }
        }
      }
      if (minIndent === Infinity) minIndent = 0;

      // 剔除多餘的前導空格，歸一化縮進
      const dedentedBodyLines = rawBodyLines.map(bLine => {
        if (bLine.trim().length === 0) return '';
        return bLine.slice(minIndent);
      });

      // 遞迴處理內部內容（若有嵌套 Callout 亦可正確處理）
      const processedBody = parseCallouts(dedentedBodyLines);

      // 為內部所有內容統一補上 4 個空格縮進
      for (const bodyLine of processedBody) {
        if (bodyLine.length === 0) {
          result.push(`${indent}    `);
        } else {
          result.push(`${indent}    ${bodyLine}`);
        }
      }
    } else {
      result.push(line);
      i++;
    }
  }

  return result;
}

/**
 * 主轉換函式
 * @param {string} content
 * @returns {string}
 */
function convertObsidianCallouts(content) {
  if (!content) return content;
  const lines = content.split(/\r?\n/);
  const processedLines = parseCallouts(lines);
  return processedLines.join('\n');
}

// 註冊 Hexo 渲染前過濾器
hexo.extend.filter.register('before_post_render', function(data) {
  if (data && data.content) {
    data.content = convertObsidianCallouts(data.content);
  }
  return data;
}, 1);