import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SeoHead({ title, description, url, image }) {
  const site = 'https://webmasterypro.com';
  const ogImage = image || '/content/images/wmp-logo.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${site}${url}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${site}${url}`} />
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
  );
}
