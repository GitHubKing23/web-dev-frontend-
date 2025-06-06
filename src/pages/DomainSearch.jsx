import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const GODADDY_AFFILIATE = 'https://click.godaddy.com/affiliate?isc=cjcsb22025&url=https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=';

const categories = {
  General: ['.com', '.net', '.org'],
  Tech: ['.dev', '.io', '.app'],
  Fun: ['.lol', '.fun', '.xyz']
};

export default function DomainSearchPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('General');
  const [extension, setExtension] = useState(categories['General'][0]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setExtension(categories[category][0]);
  }, [category]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const domain = `${query.trim()}${extension}`;
    try {
      const res = await fetch(`/.netlify/functions/domainLookup?domain=${domain}`);
      const data = await res.json();
      const available = data?.WhoisRecord?.domainAvailability !== 'UNAVAILABLE';
      setStatus({ domain, available });
    } catch {
      setStatus({ domain, available: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-16 px-4 animate-fade-in">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-heading font-bold text-center mb-6">Domain Search</h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter domain name"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none"
          >
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none"
          >
            {categories[category].map((ext) => (
              <option key={ext} value={ext}>
                {ext}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full bg-accent text-white py-2 rounded-lg font-medium hover:bg-yellow-500 transition transform hover:scale-105 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
        {status && (
          <Motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg mb-3">
              {status.available ? '✅ Available!' : '❌ Sorry, taken.'}
            </p>
            <a
              href={`${GODADDY_AFFILIATE}${status.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-accent"
            >
              {status.available ? 'Register on GoDaddy' : 'Try on GoDaddy'}
            </a>
          </Motion.div>
        )}
      </div>
    </section>
  );
}
