import React from 'react';

const HomeServicesPackage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 scale-100 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592853626603-cb7b0219f74e?auto=format&fit=crop&w=1600&q=80')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            Beautiful Websites for Landscapers & Contractors
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-xl drop-shadow-md">
            Launch your online presence with our custom $299 landing page package.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">What's Included</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Custom one-page website</li>
          <li>Mobile-friendly layout</li>
          <li>Contact form integration</li>
          <li>Search engine optimized structure</li>
          <li>Fast loading and secure hosting</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Only $299</h2>
          <p className="mb-6">Flat rate to launch your professional website.</p>
        </div>
      </section>

      {/* Optional Upsells */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Optional Upgrades</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Logo design</li>
          <li>Ongoing maintenance</li>
          <li>Additional pages</li>
          <li>Google My Business setup</li>
        </ul>
      </section>

      {/* Testimonial */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-2xl mx-auto text-center px-4">
          <blockquote className="text-xl italic">
            "WebMasteryPro delivered a stunning website for my landscaping business in just a few days. New clients love it!"
          </blockquote>
          <p className="mt-4 font-semibold">&mdash; Alex, Landscaper</p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Request a Callback</h2>
        <form
          method="POST"
          action="https://getform.io/f/bllyoejb"
          className="space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="555-123-4567"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Tell us about your project"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-semibold">WebMasteryPro</p>
          <p>Email: webmasterypro@gmail.com | Phone: 289-769-0244</p>
          <p className="mt-2 text-sm">&copy; 2025 WebMasteryPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeServicesPackage;
