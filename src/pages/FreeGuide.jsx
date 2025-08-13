// src/pages/FreeGuide.jsx
import React from 'react';

export default function FreeGuide() {
  return (
    <section className="pt-24 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Get Your Free Handyman AI Quickstart Guide
        </h2>
        <p className="text-center text-gray-700">
          Enter your email to get the 7-day plan to book more handyman jobs with AI.
        </p>
        <div>
          <iframe
            src="https://form.jotform.com/252237346925259"
            title="Free Handyman AI Quickstart Guide Form"
            className="w-full min-h-[840px] border-0"
            allow="clipboard-write; fullscreen"
          />
        </div>
        <p className="text-gray-500 text-center text-sm">
          After you submit, you’ll be redirected to your guide and invited to our Facebook group.
        </p>
      </div>
    </section>
  );
}
