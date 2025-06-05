import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-muted font-body text-text text-sm">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-center space-y-6 text-center md:flex-row md:justify-between md:text-left md:space-y-0">

        {/* Logo & Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary">WebMasteryPro</span>
        </div>

        {/* Navigation / Future links */}
        <div className="flex flex-wrap items-center gap-4 justify-center text-sm">
          <a href="#services" className="hover:text-accent transition">Services</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61576399047285"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-primary hover:text-accent transition transform hover:scale-110"
          >
            <FaFacebookSquare className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted py-4 text-center text-xs text-gray-500">
        &copy; {year} WebMasteryPro. All rights reserved.
      </div>
    </footer>
  );
}
