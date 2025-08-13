import React from "react";
import ServicePricingCalculator from "../components/ServicePricingCalculator";

const Pricing = () => {
  return (
    <main className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Our Pricing</h1>

      <section className="mb-12">
        <p className="text-lg text-center max-w-2xl mx-auto">
          Choose the services you need and get a quick estimate using our Service Pricing
          Calculator below.
          <br />
          <strong>Disclaimer:</strong> This is only an estimate. Final pricing depends on
          project details.
        </p>
      </section>

      <section className="mb-16">
        <ServicePricingCalculator />
      </section>
    </main>
  );
};

export default Pricing;
