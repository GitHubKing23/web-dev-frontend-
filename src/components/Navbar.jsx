import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <div className="text-2xl font-bold text-primary tracking-wide">
          WebMasteryPro
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-text hover:text-accent transition-colors duration-200 font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#signup" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-accent transition">
            Sign Up
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="block text-text hover:text-accent font-medium transition">
              {link.label}
            </a>
          ))}
          <a href="#signup" className="block bg-primary text-white text-center py-2 rounded-full hover:bg-accent transition">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
