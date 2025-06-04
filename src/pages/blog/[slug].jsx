import React from 'react';
import { useParams } from 'react-router-dom';

// Import MDX files
const posts = import.meta.glob('../../../content/blog/*.mdx', { eager: true });

export default function BlogPost() {
  const { slug } = useParams();

  const matched = Object.entries(posts).find(([path]) =>
    path.includes(`${slug}.mdx`)
  );

  if (!matched) {
    return <p className="text-center mt-20 text-red-500">Post not found.</p>;
  }

  const [path, post] = matched;
  const frontmatter =
    post.metadata || post.frontmatter || post.meta || post.attributes || {};

  const Component = post.default;

  return (
    <article className="max-w-3xl mx-auto p-6 pt-24">
      <h1 className="text-3xl font-bold text-primary mb-2">{frontmatter.title}</h1>
      <p className="text-sm text-accent mb-6">
        {frontmatter.author} •{' '}
        {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString() : 'Unknown Date'}
      </p>
      <div className="prose max-w-none">
        <Component />
      </div>
    </article>
  );
}

