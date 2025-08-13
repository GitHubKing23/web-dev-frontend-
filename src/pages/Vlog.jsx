// src/pages/Vlog.jsx
import React from 'react';

export default function Vlog() {
  return (
    <section className="pt-24 pb-20 px-6 font-body bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-primary text-center mb-6">Vlog</h2>
        <p className="text-accent text-center mb-8">
          Video updates and tutorials from WebMasteryPro.
        </p>
        <div className="aspect-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qOv4SoXGwcA?si=l_UhZf1ORPT1mklz"
            title="YouTube video player"
            className="w-full h-full rounded-lg shadow"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
