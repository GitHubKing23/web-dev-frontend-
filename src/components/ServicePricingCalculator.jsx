// src/components/ServicePricingCalculator.jsx
import React, { useState, useMemo } from 'react';

/* =========================
   Helpers
   ========================= */
function formatCurrency(value, currency) {
  return `${currency}${value.toFixed(0)}`;
}
function calculateAddonPrice(addon, plan) {
  return Math.round(addon.basePrice * plan.discountMultiplier);
}
function summarizeAddons(addons, plan, selected) {
  let subtotal = 0;
  let savings = 0;
  const items = [];
  addons.forEach((a) => {
    if (selected.includes(a.name)) {
      const effective = calculateAddonPrice(a, plan);
      subtotal += effective;
      savings += a.basePrice - effective;
      items.push({ name: a.name, basePrice: a.basePrice, effectivePrice: effective });
    }
  });
  return { subtotal, savings, items };
}
function withUTM(url, extraQuery) {
  return url.includes('?') ? `${url}&${extraQuery}` : `${url}?${extraQuery}`;
}

/* =========================
   Defaults
   ========================= */
const DEFAULT_PLANS = [
  {
    name: 'Starter',
    size: 'Small',
    basePrice: 499,
    discountMultiplier: 1.0,
    features: ['Up to 3 pages', '10–14 days', '1 revision', 'Basic SEO', 'CMS setup'],
  },
  {
    name: 'Professional',
    size: 'Medium',
    basePrice: 999,
    discountMultiplier: 0.85,
    features: ['Up to 7 pages', '2–3 weeks', '2 revisions', 'SEO + performance pass', 'CMS + analytics'],
  },
  {
    name: 'Premium',
    size: 'Large',
    basePrice: 1499,
    discountMultiplier: 0.7,
    features: ['10–15 pages', '3–5 weeks', '3 revisions', 'Advanced SEO', 'Analytics events'],
  },
];

const DEFAULT_ADDONS = [
  { name: 'E-Commerce Setup', description: 'Cart, checkout, and products.', basePrice: 400 },
  { name: 'AI Chatbot', description: '24/7 automated responses.', basePrice: 250 },
  { name: 'SEO Boost', description: 'On-page SEO & metadata.', basePrice: 200 },
  { name: 'Content Creation', description: '3 pages or posts.', basePrice: 150 },
  { name: 'Booking System', description: 'Online scheduling setup.', basePrice: 180 },
  { name: 'Logo Design', description: 'One custom concept + revisions.', basePrice: 120 },
  { name: 'Twitch Setup', description: 'Channel branding + scenes + basic alerts.', basePrice: 300 },
];

/* =========================
   Component
   ========================= */
/**
 * Props:
 * - plans, addons, currency, className
 * - onSubmit(payload)  // kept for compatibility (not used by the CTAs now)
 * - ctaHref: primary CTA link (defaults to Calendly with UTM)
 */
export default function ServicePricingCalculator({
  plans = DEFAULT_PLANS,
  addons = DEFAULT_ADDONS,
  currency = '$',
  className = '',
  ctaHref = 'https://calendly.com/wise11jeff/webmasterypro-consultation?utm_source=pricing&utm_medium=calculator&utm_campaign=book_consultation',
}) {
  // Default to Professional if present
  const [selectedPlan, setSelectedPlan] = useState(
    () => plans.find((p) => p.name === 'Professional') || plans[0]
  );
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const { subtotal: addonsSubtotal, savings, items } = useMemo(
    () => summarizeAddons(addons, selectedPlan, selectedAddons),
    [addons, selectedPlan, selectedAddons]
  );

  const total = selectedPlan.basePrice + addonsSubtotal;

  const handleAddonChange = (name) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  // Distinct tracking for each CTA
  const primaryHref = withUTM(ctaHref, 'utm_content=primary_cta');
  const requestHref = withUTM(ctaHref, 'utm_content=request_project');

  return (
    <section className={`font-body ${className}`} aria-labelledby="service-pricing-title">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 id="service-pricing-title" className="text-3xl font-heading font-bold mb-2 text-center">
          Build the site you need—no fluff, no surprises
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Pick a plan, then add only what you need. Larger plans automatically discount add-on prices.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="flex-1 space-y-8">
            {/* Step 1: Plans */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Step 1: Choose a Plan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="radiogroup">
                {plans.map((plan) => {
                  const discountPercent = Math.round((1 - plan.discountMultiplier) * 100);
                  const isSelected = selectedPlan.name === plan.name;
                  const isPopular = plan.name === 'Professional';
                  return (
                    <label
                      key={plan.name}
                      className={`relative border rounded-md p-4 cursor-pointer transition hover:shadow-md focus-within:ring-2 focus-within:ring-primary ${
                        isSelected ? 'border-primary shadow-md' : 'border-gray-300'
                      } ${isPopular ? 'ring-1 ring-primary/30' : ''}`}
                    >
                      {isPopular && (
                        <span className="absolute -top-3 right-3 rounded-full bg-primary text-white text-xs px-3 py-1 shadow">
                          Most Popular
                        </span>
                      )}
                      <input
                        type="radio"
                        name="plan"
                        className="sr-only"
                        checked={isSelected}
                        onChange={() => setSelectedPlan(plan)}
                      />
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-medium">{plan.size}</span>
                          {discountPercent > 0 && (
                            <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">
                              -{discountPercent}% add-on prices
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold mb-1">
                          {formatCurrency(plan.basePrice, currency)}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{plan.name} Plan</div>

                        {Array.isArray(plan.features) && plan.features.length > 0 && (
                          <ul className="text-xs text-gray-500 list-disc pl-5 space-y-0.5">
                            {plan.features.map((f) => (
                              <li key={f}>{f}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* Step 2: Add-ons */}
            <section>
              <div className="flex items-end justify-between mb-4">
                <h3 className="text-xl font-semibold">Step 2: Choose Add-ons</h3>
                <p className="text-xs text-gray-500">
                  Hint: Medium saves ~15%, Large saves ~30% on add-ons.
                </p>
              </div>

              <ul className="space-y-4">
                {addons.map((addon) => {
                  const effectivePrice = calculateAddonPrice(addon, selectedPlan);
                  const discountPct =
                    addon.basePrice > 0
                      ? Math.round((1 - effectivePrice / addon.basePrice) * 100)
                      : 0;

                  return (
                    <li
                      key={addon.name}
                      className="border rounded-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                    >
                      <label className="flex items-start cursor-pointer flex-1">
                        <input
                          type="checkbox"
                          className="mt-1 mr-3 h-5 w-5 text-primary focus:ring-primary"
                          checked={selectedAddons.includes(addon.name)}
                          onChange={() => handleAddonChange(addon.name)}
                          aria-label={`Toggle ${addon.name} add-on`}
                        />
                        <span>
                          <span className="block font-medium">{addon.name}</span>
                          <span className="block text-sm text-gray-500">{addon.description}</span>
                        </span>
                      </label>

                      <div className="mt-2 sm:mt-0 text-right">
                        <div className="text-sm text-gray-500 line-through">
                          {formatCurrency(addon.basePrice, currency)}
                        </div>
                        <div className="text-base font-semibold">
                          {formatCurrency(effectivePrice, currency)}
                          {discountPct > 0 && (
                            <span className="ml-2 text-xs text-green-700">Save {discountPct}%</span>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-2 text-sm text-gray-700">
                You’re saving <strong>{formatCurrency(savings, currency)}</strong> on add-ons with the{' '}
                <strong>{selectedPlan.name}</strong> plan.
              </p>
            </section>
          </div>

          {/* Right column - Sticky Summary */}
          <div className="md:w-80">
            <div className="md:sticky md:top-4 border rounded-md p-4 shadow-md bg-white">
              <button
                className="w-full md:hidden flex justify-between items-center"
                onClick={() => setSummaryOpen((o) => !o)}
                aria-expanded={summaryOpen}
                aria-label={summaryOpen ? "Collapse order summary" : "Expand order summary"}
              >
                <span className="font-medium">Summary</span>
                <span aria-hidden="true">{summaryOpen ? '-' : '+'}</span>
              </button>

              <div className={`${summaryOpen ? 'block' : 'hidden'} md:block mt-2`}>
                <h4 className="text-lg font-semibold mb-2">{selectedPlan.name} Plan</h4>

                <ul className="mb-2 space-y-1">
                  {items.map((item) => (
                    <li key={item.name} className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span>{formatCurrency(item.effectivePrice, currency)}</span>
                    </li>
                  ))}
                  {items.length === 0 && (
                    <li className="text-sm text-gray-500">No add-ons selected</li>
                  )}
                </ul>

                <div className="border-t pt-2 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Add-ons Subtotal</span>
                    <span>{formatCurrency(addonsSubtotal, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>{formatCurrency(selectedPlan.basePrice, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Savings on Add-ons</span>
                    <span className="text-green-700">-{formatCurrency(savings, currency)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>{formatCurrency(total, currency)}</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex justify-center bg-primary text-white py-2 rounded-md hover:opacity-95 transition"
                >
                  Start Your Website Upgrade Today
                </a>

                {/* Secondary CTA: Request Project -> Calendly */}
                <a
                  href={requestHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full inline-flex justify-center border border-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-50 transition"
                >
                  Request Project
                </a>

                <p className="mt-2 text-[11px] text-gray-500 text-center">Taxes not included.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
