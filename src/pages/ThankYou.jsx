// src/pages/ThankYou.jsx
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

export default function ThankYou() {
  useEffect(() => {
    ReactGA.event('lead_capture');
  }, []);

  const handleCTA = (action, href, newTab = false) => {
    ReactGA.event('cta_click', { action });
    if (newTab) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  const buttonClass =
    'bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-primary/90 transition font-medium';

  return (
    <section className="pt-24 pb-20 px-6 font-body bg-white min-h-screen">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-heading font-bold text-primary">You’re In! 🎉</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleCTA('open_guide', '/guides/handyman-ai-guide.html')}
            className={buttonClass}
          >
            Open Guide
          </button>
          <button
            onClick={() =>
              handleCTA(
                'join_fb_group',
                'https://www.facebook.com/profile.php?id=61576399047285',
                true
              )
            }
            className={buttonClass}
          >
            Join FB Group
          </button>
          <button
            onClick={() =>
              handleCTA(
                'book_ai_audit',
                'https://calendly.com/wise11jeff/webmasterypro-consultation',
                true
              )
            }
            className={buttonClass}
          >
            Book a free AI audit
          </button>
          <button
            onClick={() => handleCTA('contact', 'https://webmasterypro.com/contact', true)}
            className={buttonClass}
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
