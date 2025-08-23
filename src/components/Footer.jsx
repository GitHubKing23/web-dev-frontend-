import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Tools', to: '/tools' },
    { label: 'AI Tool', to: '/ai' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-muted font-body text-text text-sm">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Nav Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-accent transition">
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/wise11jeff/webmasterypro-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            Book a Call
          </a>
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
