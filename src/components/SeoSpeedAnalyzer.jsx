import React, { useState } from 'react';
import axios from 'axios';

export default function SeoSpeedAnalyzer() {
  const [url, setUrl] = useState('');
  const [score, setScore] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    setScore(null);
    setDetails(null);

    const apiKey = import.meta.env.VITE_REACT_APP_PSI_KEY || 'AIzaSyBYkxpkgFdK9CmGQC-oOFkia4G7U3F37GU';

    try {
      const res = await axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed', {
        params: {
          url,
          category: 'performance',
          key: apiKey,
        },
      });

      const data = res.data.lighthouseResult;
      const perfScore = data.categories.performance.score * 100;
      const metrics = data.audits;

      setScore(Math.round(perfScore));
      setDetails({
        fcp: metrics['first-contentful-paint'].displayValue,
        si: metrics['speed-index'].displayValue,
        lcp: metrics['largest-contentful-paint'].displayValue,
        tti: metrics['interactive'].displayValue,
        cls: metrics['cumulative-layout-shift'].displayValue,
      });
    } catch {
      setError('Failed to analyze that URL. Try another.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="seo-speed" className="py-16 px-6 bg-white text-center font-body">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">
          SEO Speed Analyzer
        </h2>

        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={analyze}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {score !== null && !loading && (
          <div className="mt-6 bg-gray-50 rounded shadow p-6 text-left">
            <p className="text-xl font-semibold text-gray-700 mb-2">
              🚀 Performance Score: <span className="text-blue-600">{score}</span>
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><strong>First Contentful Paint:</strong> {details.fcp}</li>
              <li><strong>Speed Index:</strong> {details.si}</li>
              <li><strong>Largest Contentful Paint:</strong> {details.lcp}</li>
              <li><strong>Time to Interactive:</strong> {details.tti}</li>
              <li><strong>Cumulative Layout Shift:</strong> {details.cls}</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
