// File: src/components/InstantQuoteTool.jsx
import React, { useState } from 'react';

const SERVICES = [
  { name: 'Web Development', price: 800 },
  { name: 'SEO Optimization', price: 400 },
  { name: 'CMS Integration', price: 500 },
  { name: 'App Development', price: 1500 },
  { name: 'Social Media Management', price: 300 },
];

const InstantQuoteTool = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const total = selected.reduce((sum, s) => sum + s.price, 0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 bg-white text-center font-body" id="quote-tool">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">Instant Quote Tool</h2>

        <div className="mb-4">
          <p className="text-sm text-gray-600">Step {step} of 3</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                step === 1 ? 'w-1/3 bg-primary' : step === 2 ? 'w-2/3 bg-primary' : 'w-full bg-primary'
              }`}
            />
          </div>
        </div>

        <form
          name="instant-quote"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="text-left space-y-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="instant-quote" />
          <input type="hidden" name="services" value={selected.map((s) => s.name).join(', ')} />
          <input type="hidden" name="total" value={`$${total}`} />

          {step === 1 && (
            <div>
              <label className="font-medium">Select Services:</label>
              <div className="space-y-2 mt-2">
                {SERVICES.map((service, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    {service.name} — ${service.price}
                  </label>
                ))}
              </div>
              <div className="mt-4 text-xl font-semibold">
                💰 Total: <span className="text-green-600">${total}</span>
              </div>
            </div>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="font-medium">Name:</label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-4 py-2 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label className="font-medium">Email:</label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border px-4 py-2 rounded mt-1"
                  required
                />
              </div>
            </>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold mb-2">Review Your Quote</h3>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p>
                <strong>Services:</strong>{' '}
                {selected.map((s) => s.name).join(', ') || 'None'}
              </p>
              <p className="mt-2 font-semibold text-lg text-green-600">
                💰 Total Estimated Cost: ${total}
              </p>
              <p className="text-sm text-gray-500 italic mt-2">
                * Final pricing may vary based on project scope.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition ml-auto"
                disabled={step === 1 && selected.length === 0}
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition ml-auto"
              >
                Request Quote
              </button>
            )}
          </div>

          {submitted && (
            <p className="mt-4 text-green-600 font-medium">
              ✅ Thank you! We’ll contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default InstantQuoteTool;
