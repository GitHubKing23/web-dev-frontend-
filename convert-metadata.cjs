const fs = require('fs');
const path = require('path');

// ✅ Corrected path
const blogDir = path.join(__dirname, 'content', 'blog');

const metadataRegex = /export const metadata\s*=\s*{([\s\S]*?)};\s*---/;

fs.readdir(blogDir, (err, files) => {
  if (err) return console.error('❌ Error reading blog directory:', err);

  files.forEach((file) => {
    if (path.extname(file) !== '.mdx') return;

    const fullPath = path.join(blogDir, file);
    const original = fs.readFileSync(fullPath, 'utf-8');

    if (!original.includes('export const metadata')) return;

    const match = original.match(metadataRegex);
    if (!match) {
      console.warn(`⚠️ Skipping: No matching metadata in ${file}`);
      return;
    }

    const objectText = match[1];
    const yaml = objectText
      .split('\n')
      .map((line) => line.trim().replace(/,$/, '')) // remove trailing commas
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(':');
        return `${key.trim()}: ${rest.join(':').trim().replace(/^['"]|['"]$/g, '')}`;
      })
      .join('\n');

    const newContent = original
      .replace(metadataRegex, `---\n${yaml}\n---`)
      .replace(/\n{2,}/g, '\n\n'); // cleanup extra newlines

    fs.writeFileSync(fullPath, newContent);
    console.log(`✅ Converted: ${file}`);
  });

  console.log('✨ Conversion complete.');
});
