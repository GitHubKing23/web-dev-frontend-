import React from "react";

export default function WmpAiEmbed({
  height = 840,
  src = "https://hf.space/embed/Jeff876/wmp-aii/+",
  title = "WebMasteryPro AI Tool",
  linkFallback = "https://huggingface.co/spaces/Jeff876/wmp-aii"
}) {
  const isIframeAllowed = src.includes("embed");

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">AI Website Copy & Landing Page Generator</h1>
      <p className="text-slate-600 mb-6">
        Generate headlines, benefits, CTAs, and download a mini landing page. Free preview, no login.
      </p>

      {isIframeAllowed ? (
        <div className="rounded-xl overflow-hidden shadow">
          <iframe
            title={title}
            src={src}
            style={{ width: "100%", height: `${height}px`, border: 0 }}
            allow="clipboard-write; web-share"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="mt-6">
          <a
            href={linkFallback}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-accent transition"
          >
            Open Tool in New Tab
          </a>
        </div>
      )}

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
  );
}
