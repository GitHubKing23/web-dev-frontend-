import React from 'react';
import Hero from '../components/Hero.jsx';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx';
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';

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

      {/* 5. Convert - Make it Easy to Reach You */}
      <Contact />
    </>
  );
}
