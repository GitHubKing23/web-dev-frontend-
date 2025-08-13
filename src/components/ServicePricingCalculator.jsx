// src/components/ServicePricingCalculator.jsx
import React, { useState, useMemo } from 'react';

function formatCurrency(value, currency) {
  return `${currency}${value.toFixed(0)}`;
}

function calculateToppingPrice(topping, plan) {
  return Math.round(topping.basePrice * plan.discountMultiplier);
}

function summarizeToppings(toppings, plan, selected) {
  let subtotal = 0;
  let savings = 0;
  const items = [];
  toppings.forEach((t) => {
    if (selected.includes(t.name)) {
      const effective = calculateToppingPrice(t, plan);
      subtotal += effective;
      savings += t.basePrice - effective;
      items.push({ name: t.name, basePrice: t.basePrice, effectivePrice: effective });
    }
  });
  return { subtotal, savings, items };
}

const DEFAULT_PLANS = [
  { name: 'Starter', size: 'Small', basePrice: 499, discountMultiplier: 1.0 },
  { name: 'Professional', size: 'Medium', basePrice: 999, discountMultiplier: 0.85 },
  { name: 'Premium', size: 'Large', basePrice: 1499, discountMultiplier: 0.7 },
];

const DEFAULT_TOPPINGS = [
  { name: 'E-Commerce Setup', description: 'Cart, checkout, and products.', basePrice: 400 },
  { name: 'AI Chatbot', description: '24/7 automated responses.', basePrice: 250 },
  { name: 'SEO Boost', description: 'On-page SEO & metadata.', basePrice: 200 },
  { name: 'Content Creation', description: '3 pages or posts.', basePrice: 150 },
  { name: 'Booking System', description: 'Online scheduling setup.', basePrice: 180 },
  { name: 'Logo Design', description: 'One custom concept + revisions.', basePrice: 120 },
  { name: 'Twitch Setup', description: 'Channel branding + scenes + basic alerts.', basePrice: 300 },
];

const ServicePricingCalculator = ({
  plans = DEFAULT_PLANS,
  toppings = DEFAULT_TOPPINGS,
  currency = '$',
  className = '',
  onSubmit,
}) => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { subtotal: toppingsSubtotal, savings, items } = useMemo(
    () => summarizeToppings(toppings, selectedPlan, selectedToppings),
    [toppings, selectedPlan, selectedToppings]
  );

  const total = selectedPlan.basePrice + toppingsSubtotal;

  const handleToppingChange = (name) => {
    setSelectedToppings((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const payload = {
      plan: selectedPlan.name,
      planBasePrice: selectedPlan.basePrice,
      discountMultiplier: selectedPlan.discountMultiplier,
      toppings: items,
      toppingsSubtotal,
      total,
    };
    console.log(payload);
    if (onSubmit) onSubmit(payload);
    setTimeout(() => setIsSubmitting(false), 300);
  };

  return (
    <section className={`font-body ${className}`} aria-labelledby="service-pricing-title">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 id="service-pricing-title" className="text-3xl font-heading font-bold mb-2 text-center">
          Service Pricing Calculator
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Choose your plan size, then add toppings (tools). Bigger plans get cheaper toppings.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Step 1: Choose a Plan Size</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="radiogroup">
                {plans.map((plan) => {
                  const discountPercent = Math.round((1 - plan.discountMultiplier) * 100);
                  return (
                    <label
                      key={plan.name}
                      className={`border rounded-md p-4 cursor-pointer transition hover:shadow-md focus-within:ring-2 focus-within:ring-primary ${
                        selectedPlan.name === plan.name ? 'border-primary' : 'border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        className="sr-only"
                        checked={selectedPlan.name === plan.name}
                        onChange={() => setSelectedPlan(plan)}
                      />
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-medium">{plan.size}</span>
                          {discountPercent > 0 && (
                            <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">
                              -{discountPercent}% topping prices
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold mb-2">
                          {formatCurrency(plan.basePrice, currency)}
                        </div>
                        <div className="text-sm text-gray-500 flex-1">{plan.name} Plan</div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Step 2: Choose Toppings</h3>
              <ul className="space-y-4">
                {toppings.map((topping) => {
                  const effectivePrice = calculateToppingPrice(topping, selectedPlan);
                  return (
                    <li
                      key={topping.name}
                      className="border rounded-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
                    >
                      <label className="flex items-start cursor-pointer flex-1">
                        <input
                          type="checkbox"
                          className="mt-1 mr-3 h-5 w-5 text-primary focus:ring-primary"
                          checked={selectedToppings.includes(topping.name)}
                          onChange={() => handleToppingChange(topping.name)}
                        />
                        <span>
                          <span className="block font-medium">{topping.name}</span>
                          <span className="block text-sm text-gray-500">{topping.description}</span>
                        </span>
                      </label>
                      <div className="mt-2 sm:mt-0 text-right">
                        <div className="text-sm text-gray-500 line-through">
                          {formatCurrency(topping.basePrice, currency)}
                        </div>
                        <div className="text-base font-semibold">
                          {formatCurrency(effectivePrice, currency)}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                You save {formatCurrency(savings, currency)} on toppings with this plan.
              </p>
            </section>
          </div>

          <div className="md:w-80">
            <div className="md:sticky md:top-4 border rounded-md p-4 shadow-md bg-white">
              <button
                className="w-full md:hidden flex justify-between items-center"
                onClick={() => setSummaryOpen((o) => !o)}
                aria-expanded={summaryOpen}
              >
                <span className="font-medium">Summary</span>
                <span>{summaryOpen ? '-' : '+'}</span>
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
                    <li className="text-sm text-gray-500">No toppings selected</li>
                  )}
                </ul>
                <div className="border-t pt-2 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Toppings Subtotal</span>
                    <span>{formatCurrency(toppingsSubtotal, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>{formatCurrency(selectedPlan.basePrice, currency)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>{formatCurrency(total, currency)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full bg-primary text-white py-2 rounded-md disabled:opacity-50 transition"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Loading...' : 'Request Project'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePricingCalculator;
