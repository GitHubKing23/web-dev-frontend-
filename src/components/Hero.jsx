import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-center py-24 px-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-50" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6">
          Launch faster with AI-driven websites
        </h1>
        <p className="text-text font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Automate copy, design and optimization so you can focus on growth.
        </p>

        <a
          href="https://webmasterypro.com/ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-md"
          aria-label="Explore AI tools"
        >
          Try the AI Toolkit
        </a>
      </div>
    </section>
  );
}
