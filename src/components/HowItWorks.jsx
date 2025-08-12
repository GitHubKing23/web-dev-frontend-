import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Discuss',
      text: 'Tell us about your goals and ideas.'
    },
    {
      title: 'Design',
      text: 'We craft a solution tailored to your needs.'
    },
    {
      title: 'Deploy',
      text: 'Launch your project and iterate with data.'
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-10">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="bg-light rounded-lg p-6 shadow">
              <span className="text-accent font-bold text-2xl">{idx + 1}</span>
              <h3 className="font-heading font-semibold text-xl mt-2 mb-1">{step.title}</h3>
              <p className="text-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

