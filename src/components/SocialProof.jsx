import React from 'react';

export default function SocialProof() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">Trusted by creators</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="h-12 w-32 bg-gray-200 rounded" aria-hidden="true"></div>
          <div className="h-12 w-32 bg-gray-200 rounded" aria-hidden="true"></div>
          <div className="h-12 w-32 bg-gray-200 rounded" aria-hidden="true"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <blockquote className="bg-white p-6 rounded-lg shadow text-sm text-text">
            <p>"This AI toolkit saved us days of work."</p>
            <cite className="mt-4 block font-semibold text-primary">Happy Client</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow text-sm text-text">
            <p>"Our launch was twice as fast."</p>
            <cite className="mt-4 block font-semibold text-primary">Startup Founder</cite>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow text-sm text-text">
            <p>"The automation features are game changers."</p>
            <cite className="mt-4 block font-semibold text-primary">Agency Owner</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
