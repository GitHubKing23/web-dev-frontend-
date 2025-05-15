import React from 'react';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx'; // ✅ Add this

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <BusinessNameGenerator /> {/* ✅ Render here */}
      <Contact />
    </>
  );
}

