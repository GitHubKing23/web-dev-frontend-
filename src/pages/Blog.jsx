import React from 'react';

// ✅ Import MDX files with frontmatter
const posts = import.meta.glob('../../content/blog/*.mdx', { eager: true });

export default function BlogPage() {
  const blogEntries = Object.entries(posts).map(([path, post]) => {
    const slug = path.split('/').pop().replace('.mdx', '');

    // ✅ Check multiple possible keys for frontmatter
    const frontmatter = post?.frontmatter || post?.metadata || post?.meta || post?.attributes || {};

    console.log(`🔍 Parsed post from "${path}":`, post);
    console.log(`🧠 Extracted frontmatter:`, frontmatter);

    return {
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || '',
      author: frontmatter.author || 'Unknown',
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
        {blogEntries.length === 0 && (
          <p className="text-center text-gray-500">No posts found.</p>
        )}

        {blogEntries.map(({ title, date, author, Component }, idx) => (
          <article key={idx} className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold text-primary mb-1">{title}</h3>
            <p className="text-sm text-accent mb-4">
              {author} • {date ? new Date(date).toLocaleDateString() : 'Unknown Date'}
            </p>
            <div className="prose max-w-none">
              <Component />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
