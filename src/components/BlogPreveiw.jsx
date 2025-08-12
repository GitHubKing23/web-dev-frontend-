import React from 'react';
import { Link } from 'react-router-dom';
import { parseFrontmatter } from '../util/simpleFrontmatter.js';
import calcReadTime from '../util/calcReadTime.js';

const posts = import.meta.glob('../../content/blog/*.mdx', { eager: true });
const rawPosts = import.meta.glob('../../content/blog/*.mdx', { eager: true, as: 'raw' });

export default function BlogPreview() {
  const blogEntries = Object.entries(posts)
    .map(([path]) => {
      const slug = path.split('/').pop().replace('.mdx', '');
      const raw = rawPosts[path];
      const { metadata, content } = parseFrontmatter(raw);
      const title = metadata?.title?.trim() || 'Untitled';
      const date = metadata?.date?.trim() || '';
      const readTime = calcReadTime(content);
      return { slug, title, date, readTime };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="bg-white py-20 px-6" data-aos="fade-up">
      <h2 className="text-3xl font-heading font-bold text-center text-primary mb-8">
        Latest Articles
      </h2>

      <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up">
        {blogEntries.map(({ slug, title, date, readTime }) => (
          <article
            key={slug}
            className="bg-light p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <Link to={`/blog/${slug}`}>
              <h3 className="text-xl font-semibold text-primary mb-2 hover:underline">
                {title}
              </h3>
            </Link>

            <p className="text-sm text-accent mb-4">
              {date ? new Date(date).toLocaleDateString() : 'Unknown Date'} • {readTime} min read
            </p>

            <Link
              to={`/blog/${slug}`}
              className="text-primary hover:underline text-sm font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/blog" className="text-primary hover:underline font-medium">
          View all posts →
        </Link>
      </div>
    </section>
  );
}
