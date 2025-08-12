import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'WebMasteryPro transformed our online presence!',
      author: 'Happy Client'
    },
  ];

  return (
    <section className="bg-light py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-10">
          Testimonials
        </h2>
        {testimonials.map((t, idx) => (
          <figure key={idx} className="mb-8">
            <blockquote className="text-xl italic text-text mb-4">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="text-primary font-semibold">{t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

