import React from "react";

export default function AIToolPage() {
  const spaceUrl = "https://huggingface.co/spaces/Jeff876/wmp-aii";           // full Space
  const embedUrl = "https://hf.space/embed/Jeff876/wmp-aii/+";                // embed view

  return (
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
  );
}
