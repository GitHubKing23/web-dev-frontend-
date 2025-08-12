import React from 'react';

export default function ClosingCTA() {
  return (
    <section className="bg-primary py-16 text-center text-white" data-aos="fade-up">
      <h2 className="text-3xl font-heading font-bold mb-4">
        Ready to build your project?
      </h2>
      <p className="mb-8 text-lg">
        Let's work together to create something amazing.
      </p>
      <a
        href="https://calendly.com/wise11jeff/webmasterypro-consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-light transition"
      >
        Book a Call
      </a>
    </section>
  );
}
