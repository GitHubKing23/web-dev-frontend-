import React from "react";
import InstantQuoteTool from "../components/InstantQuoteTool";

const Pricing = () => {
  return (
    <main className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Our Pricing</h1>

      <section className="mb-12">
        <p className="text-lg text-center max-w-2xl mx-auto">
          Choose the services you need and get a quick estimate using our instant quote tool below.
          <br />
          <strong>Disclaimer:</strong> This is only an estimate. Final pricing depends on project details.
        </p>
      </section>

      <section className="mb-16">
        <InstantQuoteTool />
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-600 mb-4">Basic website setup</p>
          <p className="text-3xl font-bold mb-4">$500+</p>
          <ul className="text-sm list-disc ml-4">
            <li>1–3 pages</li>
            <li>Basic design</li>
            <li>Mobile-friendly</li>
          </ul>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-2">Pro</h3>
          <p className="text-gray-600 mb-4">Custom site & branding</p>
          <p className="text-3xl font-bold mb-4">$1,200+</p>
          <ul className="text-sm list-disc ml-4">
            <li>5–10 pages</li>
            <li>Brand design</li>
            <li>SEO optimized</li>
          </ul>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-2">Agency</h3>
          <p className="text-gray-600 mb-4">Complete solution</p>
          <p className="text-3xl font-bold mb-4">$2,500+</p>
          <ul className="text-sm list-disc ml-4">
            <li>Advanced CMS</li>
            <li>Custom backend</li>
            <li>Support & maintenance</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
