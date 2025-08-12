import React from 'react';
import Hero from '../components/Hero.jsx';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx';
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Testimonials.jsx';
import AITeaser from '../components/AITeaser.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';
import Contact from '../components/Contact.jsx';
import BlogPreview from '../components/BlogPreview.jsx';

export default function HomePage() {
  return (
    <>
      {/* 1. First Impression - Strong CTA */}
      <Hero />

      {/* 2. Immediate Value (Tool or Lead Magnet) */}
      <BusinessNameGenerator />

      {/* 3. What You Offer - Services Overview */}
      <Services />

      {/* 4. Build Trust - Show Past Work */}
      <Projects />

      {/* 5. Explain the Process */}
      <HowItWorks />

      {/* 6. Social Proof */}
      <Testimonials />

      {/* 7. Promote AI Tool */}
      <AITeaser />

      {/* 7.5. Latest Blog Posts */}
      <BlogPreview />

      {/* 8. Final Call to Action */}
      <ClosingCTA />

      {/* 9. Convert - Make it Easy to Reach You */}
      <Contact />
    </>
  );
}
