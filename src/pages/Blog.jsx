import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { parseFrontmatter } from '../util/simpleFrontmatter.js';
import calcReadTime from '../util/calcReadTime.js';

const posts = import.meta.glob('../../content/blog/*.mdx', { eager: true });
const rawPosts = import.meta.glob('../../content/blog/*.mdx', {
  eager: true,
  as: 'raw'
});

export default function BlogPage() {
  const blogEntries = Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.split('/').pop().replace('.mdx', '');
      const raw = rawPosts[path];
      const { metadata, content } = parseFrontmatter(raw);

      if (!metadata?.title || metadata.title.toLowerCase().includes('untitled')) {
        console.warn(`⚠️ Metadata not parsed for: ${slug}`);
        console.log('📄 Raw preview:\n', raw.slice(0, 400));
      }

      const title = metadata?.title?.trim() || 'Untitled';
      const date = metadata?.date?.trim() || '';
      const author = metadata?.author?.trim() || 'Unknown';
      const readTime = calcReadTime(content);

      const safeExcerpt =
        content
          .split('\n')
          .filter(
            (line) =>
              !line.startsWith('title:') &&
              !line.startsWith('author:') &&
              !line.startsWith('date:')
          )
          .join(' ')
          .slice(0, 220) + '...';

      return { title, date, author, slug, readTime, excerpt: safeExcerpt };
    })
    .filter((post) => post.title && post.excerpt);

  return (
    <section className="pt-20 px-6 font-body bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">Blog</h2>
        <p className="text-accent text-lg">
          Explore tips, insights, and stories from our WebMasteryPro team.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {blogEntries.length === 0 && (
          <p className="text-center text-gray-500">No blog posts found.</p>
        )}

        {blogEntries.map(({ title, date, author, readTime, slug, excerpt }, idx) => (
          <motion.article
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link to={`/blog/${slug}`}>
              <h3 className="text-2xl font-semibold text-primary mb-2 hover:underline">
                {title}
              </h3>
            </Link>
            <p className="text-sm text-accent mb-3">
              {author} • {date ? new Date(date).toLocaleDateString() : 'Unknown Date'} • {readTime} min read
            </p>
            <p className="text-gray-700 text-base mb-3 line-clamp-4">{excerpt}</p>
            <Link
              to={`/blog/${slug}`}
              className="inline-block text-primary hover:underline text-sm font-medium"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
