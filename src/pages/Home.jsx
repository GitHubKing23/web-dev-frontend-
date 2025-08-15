import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero.jsx';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx';
import Services from '../components/Services.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import { Helmet } from 'react-helmet-async';

// Lazy-load sections that aren't needed for first paint
const Projects = lazy(() => import('../components/Projects.jsx'));
const Testimonials = lazy(() => import('../components/Testimonials.jsx'));
const AITeaser = lazy(() => import('../components/AITeaser.jsx'));
const BlogPreview = lazy(() => import('../components/BlogPreview.jsx'));
const ClosingCTA = lazy(() => import('../components/ClosingCTA.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));

export default function HomePage() {
  const site = 'https://webmasterypro.com';
  const title = 'WebMasteryPro — SEO-Friendly Web Development that Gets You Found';
  const description =
    'We build and optimize fast, SEO-friendly websites for small businesses. Better rankings, faster load times, and more conversions.';
  const ogImage = '/content/images/wmp-logo.png'; // ✅ new logo

  return (
    <>
      {/* SEO head tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:image" content={`${site}${ogImage}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site}${ogImage}`} />

        {/* Theme color */}
        <meta name="theme-color" content="#2563eb" />

        {/* Organization JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebMasteryPro",
            "url": site,
            "logo": `${site}${ogImage}`,
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61576399047285"
            ]
          })}
        </script>
      </Helmet>

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
