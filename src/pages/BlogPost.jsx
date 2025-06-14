import React from 'react';
import { useParams } from 'react-router-dom';
import { parseFrontmatter } from '../util/simpleFrontmatter.js'; // ✅ Adjusted path
import calcReadTime from '../util/calcReadTime.js'; // ✅ Adjusted path

// Assuming .mdx files are under: /content/blog/
const posts = import.meta.glob('../../content/blog/*.mdx', { eager: true });
const rawPosts = import.meta.glob('../../content/blog/*.mdx', {
  eager: true,
  as: 'raw',
});

export default function BlogPost() {
  const { slug } = useParams();

  const matched = Object.entries(posts).find(([path]) =>
    path.includes(`${slug}.mdx`)
  );

  if (!matched) {
    return <p className="text-center mt-20 text-red-500">Post not found.</p>;
  }

  const [path, post] = matched;
  const raw = rawPosts[path];
  const { metadata, content } = parseFrontmatter(raw);

  const title = metadata?.title || 'Untitled';
  const author = metadata?.author || 'Unknown';
  const date = metadata?.date
    ? new Date(metadata.date).toLocaleDateString()
    : 'Unknown Date';
  const readTime = calcReadTime(content);
  const Component = post.default;

  return (
    <article className="max-w-3xl mx-auto px-6 pt-24 pb-16 bg-white shadow-lg rounded-lg font-body text-text">
      <header className="mb-10 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-heading text-primary tracking-tight leading-tight mb-3">
          {title}
        </h1>
        <p className="text-sm text-gray-500 italic">
          {author} • {date} • {readTime} min read
        </p>
      </header>

      <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-heading prose-a:text-blue-600 hover:prose-a:underline prose-p:leading-8 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:text-gray-600">
        <Component />
      </div>
    </article>
  );
}
