import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero.jsx';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx';
import Services from '../components/Services.jsx';
import HowItWorks from '../components/HowItWorks.jsx';

// Lazy-load sections that aren't needed for first paint
const Projects = lazy(() => import('../components/Projects.jsx'));
const Testimonials = lazy(() => import('../components/Testimonials.jsx'));
const AITeaser = lazy(() => import('../components/AITeaser.jsx'));
const BlogPreview = lazy(() => import('../components/BlogPreview.jsx'));
const ClosingCTA = lazy(() => import('../components/ClosingCTA.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));

export default function HomePage() {
  return (
    <>
      {/* 1. First Impression - Strong CTA */}
      <Hero />

      {/* 2. Immediate Value (Tool or Lead Magnet) */}
      <BusinessNameGenerator />

      {/* 3. What You Offer - Services Overview */}
      <Services />

      {/* 5. Explain the Process */}
      <HowItWorks />

      {/* Defer everything else to reduce main bundle size */}
      <Suspense fallback={null}>
        {/* 4. Build Trust - Show Past Work */}
        <Projects />

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
      </Suspense>
    </>
  );
}
