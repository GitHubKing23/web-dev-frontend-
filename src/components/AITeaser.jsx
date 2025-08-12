import React from 'react';
import { Link } from 'react-router-dom';

export default function AITeaser() {
  return (
    <section className="bg-light py-20 px-6 text-center">
      <h2 className="text-3xl font-heading font-bold text-primary mb-4">
        Discover Our AI Tool
      </h2>
      <p className="text-text mb-6">
        Generate website copy and layouts in seconds with our free AI-powered assistant.
      </p>
      <Link
        to="/ai"
        className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
      >
        Try the AI Generator
      </Link>
    </section>
  );
}

