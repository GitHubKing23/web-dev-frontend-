import React from 'react';

export default function ClosingCTA() {
  return (
    <section className="py-20 px-4 bg-primary text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to build with AI?</h2>
        <p className="text-lg mb-8">Launch faster with tools designed for growth.</p>
        <a
          href="https://webmasterypro.com/ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-transform transform hover:scale-105"
          aria-label="Get started with AI tools"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
