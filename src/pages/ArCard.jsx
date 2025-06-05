import React from 'react';
import { Link } from 'react-router-dom';

export default function ArCard() {
  return (
    <section className="bg-background min-h-screen flex flex-col justify-center items-center text-center py-20 px-4 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Thanks for scanning!</h2>
      <p className="text-text mb-8 max-w-md">
        Connect with WebMasteryPro for more web tips and digital solutions. Choose an option below to stay in touch.
      </p>
      <div className="flex gap-4">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-3 px-6 rounded-full shadow-soft hover:bg-primary/90 transition-smooth"
        >
          Visit Facebook
        </a>
        <Link
          to="/contact"
          className="bg-accent text-white py-3 px-6 rounded-full shadow-soft hover:bg-accent/90 transition-smooth"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
