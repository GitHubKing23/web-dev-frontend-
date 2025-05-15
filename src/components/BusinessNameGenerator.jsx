import React, { useState } from 'react';
import axios from 'axios';

const suffixes = ['Hub', 'Forge', 'Labs', 'Flow', 'Nest', 'Nation', 'Hive', 'Wave', 'King', 'Zone'];

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkDomain = async (domain) => {
    try {
      const res = await axios.get(`https://api.domainsdb.info/v1/domains/search?domain=${domain}&zone=com`);
      return !res.data.domains; // true if domain not found (available)
    } catch (error) {
      return true; // fallback to available if rate limited or error
    }
  };

  const generateNames = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    const base = keyword.trim().charAt(0).toUpperCase() + keyword.trim().slice(1);
    const ideas = suffixes.map((suffix) => `${base}${suffix}`);
    const resultsWithStatus = [];

    for (let idea of ideas) {
      const available = await checkDomain(idea.toLowerCase());
      resultsWithStatus.push({ name: `${idea}.com`, available });
    }

    setResults(resultsWithStatus);
    setLoading(false);
  };

  return (
    <section className="py-16 px-6 bg-white text-center font-body" id="generator">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Business Name Generator
        </h2>
        <input
          type="text"
          placeholder="Enter a niche or keyword..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={generateNames}
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Generate Names'}
        </button>

        {results.length > 0 && (
          <div className="mt-8 text-left">
            <h3 className="text-xl font-semibold mb-2 text-primary">Results</h3>
            <ul className="space-y-2">
              {results.map((item, index) => (
                <li key={index} className="flex items-center justify-between border px-4 py-2 rounded">
                  <span>
                    {item.name}{' '}
                    {item.available ? (
                      <span className="text-green-600">✔ Available</span>
                    ) : (
                      <span className="text-red-600">✘ Taken</span>
                    )}
                  </span>
                  <button
                    onClick={() => navigator.clipboard.writeText(item.name)}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Copy
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
