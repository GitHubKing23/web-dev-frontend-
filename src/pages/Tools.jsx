import React from 'react';
import { Link } from 'react-router-dom';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx';
import SeoSpeedAnalyzer from '../components/SeoSpeedAnalyzer.jsx';

export default function ToolsPage() {
  return (
    <div className="pt-20 space-y-20">
      <BusinessNameGenerator />
      <SeoSpeedAnalyzer />

      <section className="text-center bg-light py-16 px-6">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Need more power?
        </h2>
        <p className="text-text mb-6 max-w-xl mx-auto">
          Purchase our premium internet tools package for advanced site optimization and management.
        </p>
        <Link
          to="/pricing"
          className="inline-block bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition"
        >
          Buy Internet Tools
        </Link>
      </section>
    </div>
  );
}
