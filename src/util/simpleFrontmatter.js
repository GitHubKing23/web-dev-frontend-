export function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---/.exec(raw);
  if (!match) return { metadata: {}, content: raw };

  const metadataLines = match[1].split('\n');
  const metadata = {};

  for (const line of metadataLines) {
    if (line.trim() === '') continue;
    const [key, ...rest] = line.split(':');
    metadata[key.trim()] = rest.join(':').trim().replace(/^['"]|['"]$/g, '');
  }

  const content = raw.slice(match[0].length).trimStart();
  return { metadata, content };
}
