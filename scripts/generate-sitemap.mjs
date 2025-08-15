// scripts/generate-sitemap.mjs
import { promises as fs } from "fs";
import path from "path";

const SITE = "https://webmasterypro.com";
const blogDir = "content/blog"; // adjust if your MDX posts live elsewhere

const EXTRA_URLS = [
  `${SITE}/`,
  `${SITE}/blog`,          // your blog index (adjust/remove if different)
  // add other key pages if you have them:
  // `${SITE}/services`,
  // `${SITE}/contact`,
];

const isPost = (f) => /\.mdx?$/.test(f);
const toSlug = (f) => f.replace(/\.mdx?$/, "");

async function getBlogUrls() {
  try {
    const files = await fs.readdir(blogDir);
    return files.filter(isPost).map((f) => `${SITE}/blog/${toSlug(f)}`);
  } catch (err) {
    // If the folder doesn't exist yet, just return empty list.
    return [];
  }
}

function xmlEscape(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const urls = new Set(EXTRA_URLS);

const blogUrls = await getBlogUrls();
for (const u of blogUrls) urls.add(u);

const now = new Date().toISOString();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  [...urls]
    .map(
      (u) => `  <url>
    <loc>${xmlEscape(u)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === `${SITE}/` ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

await fs.mkdir("public", { recursive: true });
await fs.writeFile("public/sitemap.xml", xml, "utf8");

console.log(`✅ Generated public/sitemap.xml with ${urls.size} URLs`);
