import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content", "blog");

// Regexes for various YouTube forms
const RE_IFRAME_EMBED = /<iframe[^>]*src=["']https?:\/\/(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})[^"']*["'][\s\S]*?<\/iframe>/gi;
const RE_YOUTU_BE = /https?:\/\/(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})\b/gi;

// import line we want to ensure exists
const IMPORT_LINE = 'import LiteYouTube from "../../src/components/LiteYouTube";';

function ensureImport(content) {
  if (content.includes(IMPORT_LINE)) return content;
  // Insert after frontmatter block if present; otherwise at top.
  const fm = /^---[\s\S]*?---\n?/;
  if (fm.test(content)) {
    return content.replace(fm, (m) => m + IMPORT_LINE + "\n\n");
  }
  return IMPORT_LINE + "\n\n" + content;
}

function replaceEmbeds(content) {
  let changed = false;

  // Replace iframe embeds
  content = content.replace(RE_IFRAME_EMBED, (_, id) => {
    changed = true;
    return `<LiteYouTube id="${id}" title="YouTube video" />`;
  });

  // Replace bare youtu.be links (very conservative: only if on its own line)
  content = content.replace(
    /^.*?(https?:\/\/(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})).*$/gim,
    (line, full, id) => {
      // Avoid wrecking normal text lines; only convert if line looks like just the link
      if (line.trim() === full.trim()) {
        changed = true;
        return `<LiteYouTube id="${id}" title="YouTube video" />`;
      }
      return line;
    }
  );

  return { content, changed };
}

async function run() {
  let files;
  try {
    files = await fs.readdir(BLOG_DIR);
  } catch (e) {
    console.error("❌ Could not read blog directory:", BLOG_DIR);
    process.exit(1);
  }

  const mdxFiles = files.filter((f) => /\.mdx?$/.test(f));
  if (!mdxFiles.length) {
    console.log("No MDX files found in", BLOG_DIR);
    return;
  }

  let updated = 0;
  for (const file of mdxFiles) {
    const p = path.join(BLOG_DIR, file);
    const original = await fs.readFile(p, "utf8");

    let { content, changed } = replaceEmbeds(original);
    if (!changed) continue;

    content = ensureImport(content);

    // backup
    await fs.writeFile(p + ".bak", original, "utf8");
    await fs.writeFile(p, content, "utf8");
    console.log("✅ Updated:", file);
    updated++;
  }

  console.log(updated ? `\nDone. Updated ${updated} file(s).` : "\nNo embeds found to replace.");
}

run();
