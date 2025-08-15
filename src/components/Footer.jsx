import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

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

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-white border-t border-muted font-body text-text text-sm">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center justify-center space-y-6 text-center md:flex-row md:justify-between md:text-left md:space-y-0">
        {/* Logo & Brand Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary">WebMasteryPro</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-4 justify-center text-sm">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="hover:text-accent transition">
              {link.label}
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

      {/* Newsletter Signup Form Section (animated) */}
      <motion.div
        className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -80px 0px' }} // trigger slightly before fully in view
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Stay in the Loop</h2>
          <p className="text-white/90 mb-6">
            Get bite-sized tips on SEO-friendly web development, straight to your inbox.
          </p>

          <motion.div
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            {/* EmailOctopus inline form script */}
            <script
              async
              src="https://eocampaign1.com/form/63fb8066-7971-11f0-bd12-1922c845d209.js"
              data-form="63fb8066-7971-11f0-bd12-1922c845d209"
            ></script>
          </motion.div>

          {/* Optional no-JS fallback */}
          <noscript>
            <p className="mt-4 text-white/80">
              JavaScript is required to load the signup form. Please{' '}
              <a
                className="underline font-semibold"
                href="https://eocampaign1.com/form/63fb8066-7971-11f0-bd12-1922c845d209"
                target="_blank"
                rel="noopener noreferrer"
              >
                sign up here
              </a>.
            </p>
          </noscript>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-muted py-4 text-center text-xs text-gray-500">
        &copy; {year} WebMasteryPro. All rights reserved.
      </div>
    </footer>
  );
}
