import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function About() {
  const site = 'https://webmasterypro.com';
  const title = 'About WebMasteryPro — High-Performance, SEO-Friendly Web Development';
  const description =
    "Learn about WebMasteryPro's mission to build custom, high-performance, SEO-friendly websites that help businesses get found and grow.";
  const ogImage = '/content/images/wmp-logo.png'; // your new logo

  return (
    <>
      {/* SEO head tags (no visual changes) */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}/about`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${site}/about`} />
        <meta property="og:image" content={`${site}${ogImage}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site}${ogImage}`} />

        <meta name="theme-color" content="#2563eb" />

        {/* Organization JSON-LD (consistent brand info) */}
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

        {/* Breadcrumbs JSON-LD (helps sitelinks/CTR) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${site}/` },
              { "@type": "ListItem", "position": 2, "name": "About", "item": `${site}/about` }
            ]
          })}
        </script>
      </Helmet>

      <section className="pt-24 pb-20 px-6 font-body bg-white min-h-screen animate-fade-in">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-heading font-bold text-primary animate-slide-down">
            About WebMasteryPro
          </h2>

          <p className="text-accent text-lg">
            I'm a passionate developer building WebMasteryPro into a powerhouse for custom, high-performance web solutions.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Our philosophy is simple: <strong>if you can imagine it, we can code it</strong>.  
            Whether you're dreaming up an interactive platform, a booking system, a blog, or a full-scale eCommerce solution — we turn ideas into beautiful code.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            WebMasteryPro is more than just a service — it's a promise that your vision can be built exactly how you picture it. Every line of code we write is shaped by that belief.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 bg-primary text-white py-2 px-6 rounded-xl shadow-md hover:bg-opacity-90 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
