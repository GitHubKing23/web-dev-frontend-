import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-light py-20 px-6 font-body">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Contact Us
        </h2>
        <p className="text-accent mb-8">
          Let’s bring your vision to life. Fill out the form and we’ll get back to you.
        </p>
        <form
          action="https://getform.io/f/bllyoejb"
          method="POST"
          className="space-y-6 text-left"
        >
          <div>
            <label className="block text-sm font-semibold mb-1 text-primary">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-primary">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-primary">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Honeypot */}
          <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="subscribe" value="yes" defaultChecked />
            Subscribe to updates
            <input type="hidden" name="subscribe" value="no" />
          </label>

          {/* Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-primary">Experience Level</label>
            <select
              name="work-experience"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="one-year">0-1 years</option>
              <option value="one-five-years">1-5 years</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
