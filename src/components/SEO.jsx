import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component for Open Graph, Twitter Cards, Canonical, and JSON-LD.
 *
 * Props:
 * - title (string)                         // Page title (required)
 * - description (string)                   // Meta description (recommended)
 * - url (string)                           // Absolute URL to this page
 * - image (string)                         // Absolute URL to OG/Twitter image (1200x630 recommended)
 * - siteName (string)                      // e.g., "WebMasteryPro"
 * - twitterHandle (string)                 // e.g., "@webmasterypro" (optional; no account needed)
 * - publishedTime (ISO string)             // For articles
 * - modifiedTime (ISO string)              // For articles
 * - type (string)                          // "article" | "website" (default "article" for blog posts)
 * - tags (array<string>)                   // Article tags/keywords
 * - canonical (string)                     // Canonical URL (usually same as url)
 * - jsonLd (object | array<object>)        // JSON-LD schema to inline (optional)
 */
export default function SEO({
  title,
  description,
  url,
  image,
  siteName = "WebMasteryPro",
  twitterHandle,
  publishedTime,
  modifiedTime,
  type = "article",
  tags = [],
  canonical,
  jsonLd,
}) {
  const card = image ? "summary_large_image" : "summary";

  // Twitter requires a fully-qualified image URL for cards.
  // Ensure `image` and `url` are absolute (https://...).
  const ld = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      {/* Base */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Canonical */}
      {(canonical || url) && (
        <link rel="canonical" href={canonical || url} />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags.map((t) => (
        <meta key={t} property="article:tag" content={t} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={card} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title} />}

      {/* JSON-LD */}
      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
