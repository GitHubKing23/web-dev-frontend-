import React from 'react';
import { Link } from 'react-router-dom';

export default function AiToolsTeaser() {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">AI Tools for Builders</h2>
        <p className="text-text mb-6">Create headlines, copy and landing pages in seconds.</p>
        <Link
          to="/ai"
          className="inline-block text-accent font-semibold hover:underline"
          aria-label="Browse AI tools"
        >
          Explore AI Tools →
        </Link>
      </div>
    </section>
  );
}
