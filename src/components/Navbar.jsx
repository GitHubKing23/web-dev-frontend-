import React from 'react'; // ✅ REQUIRED for Jest testing
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Tools', to: '/tools' },
    { label: 'AI Tool', to: '/ai' },              // ✅ NEW
    { label: 'Contact', to: '/contact' },
  ];

  const linkClasses = (path) =>
    `text-text hover:text-accent font-medium transition-colors duration-200 ${
      location.pathname === path ? 'text-primary font-bold' : ''
    }`;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link to="/" className="text-2xl font-bold text-primary tracking-wide">
          WebMasteryPro
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className={linkClasses(link.to)}>
              {link.label}
            </Link>
          ))}
          {/* ✅ Optional: prominent Calendly CTA */}
          <a
            href="https://calendly.com/wise11jeff/webmasterypro-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-block bg-accent text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none" aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block text-text hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/wise11jeff/webmasterypro-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-accent text-white px-4 py-2 rounded-full text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
