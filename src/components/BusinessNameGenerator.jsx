import React, { useState } from 'react';

const suffixes = ['Hub', 'Forge', 'Labs', 'Flow', 'Nest', 'Nation', 'Hive', 'Wave', 'King', 'Zone'];
const GODADDY_AFFILIATE = 'https://click.godaddy.com/affiliate?isc=cjcsb22025&url=https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=';

export default function BusinessNameGenerator() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkDomain = async (domain) => {
    try {
      const res = await fetch(`/.netlify/functions/domainLookup?domain=${domain}`);
      const data = await res.json();
      return data?.WhoisRecord?.domainAvailability !== 'UNAVAILABLE';
    } catch {
      return true;
    }
  };

  const generateNames = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    const base = keyword.trim().charAt(0).toUpperCase() + keyword.trim().slice(1);
    const ideas = suffixes.map((suffix) => `${base}${suffix}`);
    const resultsWithStatus = [];

    for (let idea of ideas) {
      const domain = idea.toLowerCase() + '.com';
      const available = await checkDomain(domain);
      resultsWithStatus.push({ name: domain, available });
    }

    setResults(resultsWithStatus);
    setLoading(false);
  };

  return (
    <section className="relative py-16 px-6 bg-background text-center font-body" id="generator">
      <div className="max-w-3xl mx-auto">
        {/* Section Divider */}
        <div className="w-14 h-1 bg-accent mx-auto mb-6 rounded-full" />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
          🔍 Business Name Generator
        </h2>
        <p className="text-text text-base md:text-lg mb-8 max-w-xl mx-auto">
          Enter a keyword below and we'll create brandable business name ideas + check their .com availability.
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="e.g. design, crypto, app..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
        />

        {/* Button */}
        <button
          onClick={generateNames}
          disabled={loading}
          className="bg-accent text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-yellow-500 transition disabled:opacity-50 shadow-md"
        >
          {loading ? 'Checking Domains...' : 'Generate Names'}
        </button>

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-10 text-left">
            <h3 className="text-xl font-heading text-primary mb-3">🧪 Results</h3>
            <ul className="space-y-3">
              {results.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white shadow-sm hover:shadow-md transition"
                >
                  <span className="font-medium text-sm md:text-base">
                    {item.name}{' '}
                    {item.available ? (
                      <span className="text-green-600 ml-2">✔ Available</span>
                    ) : (
                      <span className="text-red-500 ml-2">✘ Taken</span>
                    )}
                  </span>
                  <a
                    href={`${GODADDY_AFFILIATE}${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Buy
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Decorative SVG blob (optional) */}
      <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-primary opacity-10 rounded-full blur-3xl z-0" />
    </section>
  );
}
