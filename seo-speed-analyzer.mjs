import axios from 'axios';
import * as cheerio from 'cheerio';

const url = process.argv[2];

if (!url) {
  console.error('Usage: node seo-speed-analyzer.mjs <url>');
  process.exit(1);
}

(async () => {
  console.log(`Fetching ${url} ...`);
  try {
    const start = Date.now();
    const response = await axios.get(url);
    const duration = Date.now() - start;
    const html = response.data;
    const size = Buffer.byteLength(html, 'utf8');

    const $ = cheerio.load(html);
    const title = $('title').text().trim();
    const description = $('meta[name="description"]').attr('content') || '';
    const canonical = $('link[rel="canonical"]').attr('href');
    const headings = $('h1, h2, h3, h4, h5, h6').length;
    const imagesWithoutAlt = $('img:not([alt])').length;

    console.log(`URL: ${url}`);
    console.log(`Fetch time: ${duration} ms`);
    console.log(`HTML size: ${size} bytes`);
    console.log(`Title (${title.length} chars): ${title || 'missing'}`);
    console.log(`Meta description (${description.length} chars): ${description || 'missing'}`);
    console.log(`Canonical link: ${canonical ? 'present' : 'missing'}`);
    console.log(`Heading tags count: ${headings}`);
    console.log(`Images without alt attribute: ${imagesWithoutAlt}`);
  } catch (err) {
    console.error('Error fetching URL:', err.message);
    if (err.response) {
      console.error('Status:', err.response.status);
      console.error('Headers:', err.response.headers);
    } else if (err.request) {
      console.error('No response received.');
    }
    process.exit(1);
  }
})();
