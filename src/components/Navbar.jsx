import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const linkClasses = (path) =>
    `block px-3 py-2 rounded-md text-text hover:text-accent transition-colors duration-200 ${
      location.pathname === path ? 'text-primary font-bold' : ''
    }`;

  return (
    <nav className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md fixed w-full top-0 z-50 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold text-primary tracking-wide hover:opacity-90">
            WebMasteryPro
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('services')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-text hover:text-accent font-medium">Services</button>
              {dropdownOpen === 'services' && (
                <div className="absolute top-full mt-1 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link to="/services" className={linkClasses('/services')}>All Services</Link>
                  <Link to="/pricing" className={linkClasses('/pricing')}>Pricing</Link>
                  <Link to="/projects" className={linkClasses('/projects')}>Projects</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('resources')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-text hover:text-accent font-medium">Resources</button>
              {dropdownOpen === 'resources' && (
                <div className="absolute top-full mt-1 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link to="/blog" className={linkClasses('/blog')}>Blog</Link>
                  <Link to="/vlog" className={linkClasses('/vlog')}>Vlog</Link>
                  <Link to="/free-guide" className={linkClasses('/free-guide')}>Free Guide</Link>
                  <Link to="/tools" className={linkClasses('/tools')}>Tools</Link>
                  <Link to="/ai" className={linkClasses('/ai')}>AI Tool</Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen('company')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="text-text hover:text-accent font-medium">Company</button>
              {dropdownOpen === 'company' && (
                <div className="absolute top-full mt-1 bg-white shadow-lg rounded-md py-2 w-48">
                  <Link to="/about" className={linkClasses('/about')}>About</Link>
                  <Link to="/marketplace" className={linkClasses('/marketplace')}>Marketplace</Link>
                  <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/wise11jeff/webmasterypro-consultation?utm_source=navbar&utm_medium=button&utm_campaign=book_consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary text-white px-4 py-2 font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {/* Services */}
          <details>
            <summary className="font-medium text-text cursor-pointer py-2">Services</summary>
            <Link to="/services" className={linkClasses('/services')} onClick={() => setIsOpen(false)}>All Services</Link>
            <Link to="/pricing" className={linkClasses('/pricing')} onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/projects" className={linkClasses('/projects')} onClick={() => setIsOpen(false)}>Projects</Link>
          </details>

          {/* Resources */}
          <details>
            <summary className="font-medium text-text cursor-pointer py-2">Resources</summary>
            <Link to="/blog" className={linkClasses('/blog')} onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/vlog" className={linkClasses('/vlog')} onClick={() => setIsOpen(false)}>Vlog</Link>
            <Link to="/free-guide" className={linkClasses('/free-guide')} onClick={() => setIsOpen(false)}>Free Guide</Link>
            <Link to="/tools" className={linkClasses('/tools')} onClick={() => setIsOpen(false)}>Tools</Link>
            <Link to="/ai" className={linkClasses('/ai')} onClick={() => setIsOpen(false)}>AI Tool</Link>
          </details>

          {/* Company */}
          <details>
            <summary className="font-medium text-text cursor-pointer py-2">Company</summary>
            <Link to="/about" className={linkClasses('/about')} onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/marketplace" className={linkClasses('/marketplace')} onClick={() => setIsOpen(false)}>Marketplace</Link>
            <Link to="/contact" className={linkClasses('/contact')} onClick={() => setIsOpen(false)}>Contact</Link>
          </details>

          {/* CTA */}
          <a
            href="https://calendly.com/wise11jeff/webmasterypro-consultation?utm_source=navbar&utm_medium=button&utm_campaign=book_consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-lg bg-primary text-white px-4 py-2 font-semibold shadow hover:opacity-95 mt-3"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
