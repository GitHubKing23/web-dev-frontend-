import React from 'react';
import BusinessNameGenerator from '../components/BusinessNameGenerator.jsx';
import SeoSpeedAnalyzer from '../components/SeoSpeedAnalyzer.jsx';

export default function ToolsPage() {
  return (
    <div className="pt-20 space-y-20">
      <BusinessNameGenerator />
      <SeoSpeedAnalyzer />
    </div>
  );
}
