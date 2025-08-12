import fs from 'node:fs';
import path from 'node:path';

function sanitize(str) {
  return str
    .replace(/\uFEFF/g, '')              // BOM
    .replace(/\u00A0/g, ' ')             // NBSP -> space
    .replace(/\u2019/g, '&apos;')        // ’
    .replace(/\u2018/g, '&apos;')        // ‘
    .replace(/\u201C/g, '&ldquo;')       // “
    .replace(/\u201D/g, '&rdquo;')       // ”
    .replace(/\u2014/g, '&mdash;')       // —
    .replace(/\u2013/g, '-')             // –
    .replace(/[ \t]+$/gm, '');           // trailing spaces
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (p.endsWith('.mdx')) {
      const src = fs.readFileSync(p, 'utf8');
      const out = sanitize(src);
      if (src !== out) {
        fs.writeFileSync(p, out, 'utf8');
        console.log('Sanitized:', p);
      } else {
        console.log('OK (no change):', p);
      }
    }
  }
}

if (!fs.existsSync('content')) {
  console.error('No "content" folder found. Run this from the project root.');
  process.exit(1);
}

walk('content');
