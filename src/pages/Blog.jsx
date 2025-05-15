import React from 'react';

// Load all Markdown files
const posts = import.meta.glob('../posts/*.md', { eager: true });

export default function BlogPage() {
  const blogEntries = Object.entries(posts).map(([path, post]) => {
    const slug = path.split('/').pop().replace('.md', '');
    return {
      ...post.metadata,
      slug,
      Component: post.default,
    };
  });

  return (
    <section className="pt-20 px-6 font-body">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Blog</h2>
        <p className="text-accent text-lg mb-10">
          Explore tips, insights, and stories from our WebMasteryPro team.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {blogEntries.map(({ title, date, author, Component }, idx) => (
          <article key={idx} className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold text-primary mb-1">{title}</h3>
            <p className="text-sm text-accent mb-4">
              {author} • {new Date(date).toLocaleDateString()}
            </p>
            <div className="prose max-w-none">
              {Component ? <Component /> : <p className="text-red-500">Error loading content.</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
