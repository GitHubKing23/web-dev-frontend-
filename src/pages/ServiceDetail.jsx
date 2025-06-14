import React from 'react';
import { useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const { slug } = useParams();

  // Convert slug like "seo-optimization" to "SEO Optimization"
  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <section className="pt-24 px-6 text-center font-body">
      <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
      <p className="text-text text-lg">
        Content for <span className="font-semibold">{title}</span> will appear here.
      </p>
    </section>
  );
}
