import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-light py-20 px-6 font-body overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Divider */}
        <div className="w-14 h-1 bg-accent mx-auto mb-6 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
          📬 Contact Us
        </h2>
        <p className="text-text text-base md:text-lg mb-10 max-w-lg mx-auto">
          Let’s bring your vision to life. Fill out the form below — we'll get back to you within 24 hours.
        </p>

        <form
          action="https://getform.io/f/bllyoejb"
          method="POST"
          className="space-y-6 text-left"
          data-aos="fade-up"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-primary">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Doe"
              className="w-full border border-muted bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-primary">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full border border-muted bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-primary">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              className="w-full border border-muted bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition"
            ></textarea>
          </div>

          {/* Honeypot */}
          <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

          {/* Subscribe */}
          <div className="flex items-center gap-2 text-sm mt-1">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              value="yes"
              defaultChecked
              className="accent-primary"
            />
            <label htmlFor="subscribe">Keep me updated with new launches & resources</label>
            <input type="hidden" name="subscribe" value="no" />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-accent text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-transform hover:scale-105 shadow-md"
            >
              🚀 Send Message
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm">
          Prefer to chat?{' '}
          <a
            href="https://calendly.com/wise11jeff/webmasterypro-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent"
          >
            Book a call
          </a>
          .
        </p>
      </div>

      {/* Background Blob */}
      <div className="absolute top-[-60px] right-[-80px] w-[250px] h-[250px] bg-primary opacity-10 blur-3xl rounded-full z-0"></div>
    </section>
  );
}
