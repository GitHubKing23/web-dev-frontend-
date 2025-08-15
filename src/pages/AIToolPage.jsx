import React from "react";
import { Helmet } from "react-helmet-async";

export default function AIToolPage() {
  const site = "https://webmasterypro.com";
  const urlPath = "/ai"; // update if your route is different
  const title = "AI Website Copy & Landing Page Generator — WebMasteryPro";
  const description =
    "Generate headlines, benefits, CTAs, and export a mini landing page. Free preview, no login required.";
  const ogImage = "/content/images/wmp-logo.png"; // your logo for OG/Twitter

  const spaceUrl = "https://huggingface.co/spaces/Jeff876/wmp-aii"; // full Space
  const embedUrl = "https://hf.space/embed/Jeff876/wmp-aii/+";      // embed view

  return (
    <>
      {/* SEO head tags (no visual changes) */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${site}${urlPath}`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${site}${urlPath}`} />
        <meta property="og:image" content={`${site}${ogImage}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${site}${ogImage}`} />

        <meta name="theme-color" content="#2563eb" />

        {/* Organization JSON-LD (keeps brand consistent) */}
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

        {/* WebApplication JSON-LD for your AI tool */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "AI Website Copy & Landing Page Generator",
            "url": `${site}${urlPath}`,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": description,
            "thumbnailUrl": `${site}${ogImage}`,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "category": "Free"
            },
            "sameAs": [spaceUrl, embedUrl],
            "publisher": {
              "@type": "Organization",
              "name": "WebMasteryPro",
              "url": site,
              "logo": {
                "@type": "ImageObject",
                "url": `${site}${ogImage}`
              }
            }
          })}
        </script>

        {/* Breadcrumbs JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${site}/` },
              { "@type": "ListItem", "position": 2, "name": "AI Tool", "item": `${site}${urlPath}` }
            ]
          })}
        </script>
      </Helmet>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">AI Website Copy & Landing Page Generator</h1>
        <p className="text-slate-600 mb-6">
          Generate headlines, benefits, CTAs, and download a mini landing page. Free preview, no login required.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={spaceUrl}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/90 transition"
          >
            Open on Hugging Face
          </a>

          <a
            href={embedUrl}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
            className="inline-block px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition"
          >
            Open Embed View
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Happy with the result?{" "}
          <a
            className="underline text-blue-600"
            href="https://calendly.com/wise11jeff/webmasterypro-consultation"
            target="_blank"
            rel="noreferrer"
          >
            Book a free strategy call
          </a>.
        </p>
      </section>
    </>
  );
}
