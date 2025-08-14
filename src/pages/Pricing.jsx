import React from "react";
import ServicePricingCalculator from "../components/ServicePricingCalculator";

export default function Pricing() {
  // Optional: capture “Get a written quote” submissions from the calculator
  const handleQuoteSubmit = (payload) => {
    // Send to your API/CRM or analytics if desired
    console.log("Quote request:", payload);
  };

  return (
    <main className="py-16 px-4 max-w-6xl mx-auto">
      {/* Hero */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Our Pricing</h1>
        <p className="text-lg text-accent max-w-2xl mx-auto">
          Build the site you need—no fluff, no surprises. Pick a plan, then add only what you need.
          Larger plans automatically discount add-on prices.
        </p>

        <div className="flex justify-center gap-3 mt-6">
          <a
            href="https://calendly.com/wise11jeff/webmasterypro-consultation?utm_source=pricing&utm_medium=hero_cta&utm_campaign=start_upgrade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-white font-medium shadow hover:opacity-95 transition"
          >
            Start Your Website Upgrade Today
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 text-gray-800 hover:bg-gray-50 transition"
          >
            Try the Calculator
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Transparent pricing. Taxes not included.
        </p>
      </header>

      {/* Calculator */}
      <section id="calculator" className="mb-16">
        <ServicePricingCalculator onSubmit={handleQuoteSubmit} />
      </section>

      {/* Disclaimer */}
      <section className="text-sm text-center text-gray-600 max-w-3xl mx-auto">
        <p>
          <strong>Disclaimer:</strong> The calculator provides an estimate. Final pricing depends on
          your specific requirements and scope.
        </p>
      </section>
    </main>
  );
}
