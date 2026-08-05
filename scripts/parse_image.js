hexo.extend.filter.register('before_post_render', function (data) {
  if (!data || !data.content) {
    return data;
  }

  // 匹配 ![[圖片路徑/檔名]]、![[圖片路徑/檔名|width]] 或 ![[圖片路徑/檔名|width x height]]
  const obsidianImageRegex = /!\[\[([^\]\|]+)(?:\|([^\]]+))?\]\]/g;

  data.content = data.content.replace(obsidianImageRegex, (match, imagePath, params) => {
    const cleanPath = imagePath.trim();

    // 1. 純圖片格式：![[filename.webp]]
    if (!params) {
      return `{% image /images/${cleanPath} %}`;
    }

    const cleanParams = params.trim();

    // 2. 寬高格式：![[filename.webp|200x300]] 或 ![[filename.webp|200 x 300]]
    if (/x/i.test(cleanParams)) {
      const [rawWidth, rawHeight] = cleanParams.split(/x/i).map((item) => item.trim());

      // 若輸入純數字則自動補上 px，若已帶單位或文字則保持原樣
      const width = /^\d+$/.test(rawWidth) ? `${rawWidth}px` : rawWidth;
      const height = /^\d+$/.test(rawHeight) ? `${rawHeight}px` : rawHeight;

      return `{% image /images/${cleanPath} width:${width} height:${height} %}`;
    } 
    
    // 3. 僅單一寬度格式：![[filename.webp|200]] 或 ![[filename.webp|200px]]
    else {
      const width = /^\d+$/.test(cleanParams) ? `${cleanParams}px` : cleanParams;

      return `{% image /images/${cleanPath} width:${width} %}`;
    }
  });

  return data;
}, 1);