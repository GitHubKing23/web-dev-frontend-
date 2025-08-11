import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { parseFrontmatter } from '../util/simpleFrontmatter.js';
import calcReadTime from '../util/calcReadTime.js';

const posts = import.meta.glob('../../content/blog/*.mdx', { eager: true });
const rawPosts = import.meta.glob('../../content/blog/*.mdx', {
  eager: true,
  as: 'raw'
});

export default function BlogPage() {
  const blogEntries = Object.entries(posts)
    .map(([path]) => {
      const slug = path.split('/').pop().replace('.mdx', '');
      const raw = rawPosts[path];
      const { metadata, content } = parseFrontmatter(raw);

      if (!metadata?.title || metadata.title.toLowerCase().includes('untitled')) {
        console.warn(`⚠️ Metadata not parsed for: ${slug}`);
      }

      const title = metadata?.title?.trim() || 'Untitled';
      const date = metadata?.date?.trim() || '';
      const author = metadata?.author?.trim() || 'Unknown';
      const category = metadata?.category?.trim() || 'General';
      const readTime = calcReadTime(content);

      const safeExcerpt =
        content
          .split('\n')
          .filter(
            (line) =>
              !line.startsWith('title:') &&
              !line.startsWith('author:') &&
              !line.startsWith('date:') &&
              !line.startsWith('category:')
          )
          .join(' ')
          .slice(0, 220) + '...';

      return { title, date, author, slug, readTime, excerpt: safeExcerpt, category };
    })
    .filter((post) => post.title && post.excerpt);

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = ['All', ...new Set(blogEntries.map((post) => post.category))];
  const filteredEntries =
    selectedCategory === 'All'
      ? blogEntries
      : blogEntries.filter((post) => post.category === selectedCategory);

  return (
    <section className="pt-20 px-6 font-body bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-heading font-bold text-primary mb-2">Blog</h2>
        <p className="text-accent text-lg">
          Explore tips, insights, and stories from our WebMasteryPro team.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === cat
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {filteredEntries.length === 0 && (
          <p className="text-center text-gray-500">No blog posts found.</p>
        )}

        {filteredEntries.map(
          ({ title, date, author, readTime, slug, excerpt, category }, idx) => (
            <Motion.article
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded mb-2">
                {category}
              </span>
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
            </Motion.article>
          )
        )}
      </div>
    </section>
  );
}
