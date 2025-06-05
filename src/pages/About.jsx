import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="pt-24 pb-20 px-6 font-body bg-white min-h-screen animate-fade-in">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-heading font-bold text-primary animate-slide-down">
          About WebMasteryPro
        </h2>

        <p className="text-accent text-lg">
          I'm a passionate developer building WebMasteryPro into a powerhouse for custom, high-performance web solutions.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          Our philosophy is simple: <strong>if you can imagine it, we can code it</strong>.  
          Whether you're dreaming up an interactive platform, a booking system, a blog, or a full-scale eCommerce solution — we turn ideas into beautiful code.
        </p>

        <p className="text-gray-700 text-base leading-relaxed">
          WebMasteryPro is more than just a service — it's a promise that your vision can be built exactly how you picture it. Every line of code we write is shaped by that belief.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-4 bg-primary text-white py-2 px-6 rounded-xl shadow-md hover:bg-opacity-90 transition-all duration-300"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
