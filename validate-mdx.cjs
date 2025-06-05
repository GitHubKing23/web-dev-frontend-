const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'content', 'blog');
const invalidLines = [];

fs.readdir(blogDir, (err, files) => {
  if (err) {
    console.error('❌ Error reading blog directory:', err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) !== '.mdx') return;

    const fullPath = path.join(blogDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Skip frontmatter section
    const body = content.split('---')[2] || '';

    const lines = body.split('\n');
    lines.forEach((line, index) => {
      if (/^\s*(title|author|date)\s*:/i.test(line)) {
        invalidLines.push({
          file,
          line: index + 1,
          text: line.trim(),
        });
      }
    });
  });

  if (invalidLines.length === 0) {
    console.log('✅ All MDX blog files look good! No stray metadata found.');
  } else {
    console.warn('⚠️ Issues found in the following files:');
    invalidLines.forEach(({ file, line, text }) => {
      console.log(`→ ${file} [Line ${line}]: ${text}`);
    });
  }
});
