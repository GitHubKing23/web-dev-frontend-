import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Pricing', to: '/pricing' }, // ✅ Confirmed
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Tools', to: '/tools' },
    { label: 'Contact', to: '/contact' },
  ];

  console.log('✅ Navbar loaded with links:', navLinks);

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

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className={linkClasses(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle (optional) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
        </div>
      )}
    </nav>
  );
}
