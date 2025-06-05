import React, { useState } from 'react';

const AVAILABLE_TLDS = ['com', 'net', 'org', 'io', 'dev', 'ai'];

const GODADDY_AFFILIATE =
  'https://click.godaddy.com/affiliate?isc=cjcsb22025&url=https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=';

export default function DomainsPage() {
  const [query, setQuery] = useState('');
  const [tlds, setTlds] = useState(
    AVAILABLE_TLDS.reduce((acc, tld) => ({ ...acc, [tld]: tld === 'com' }), {})
  );
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleTld = (tld) => {
    setTlds((prev) => ({ ...prev, [tld]: !prev[tld] }));
  };

  const searchDomains = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const selected = Object.keys(tlds).filter((tld) => tlds[tld]);
    const resList = [];
    for (let tld of selected) {
      const domain = `${query.trim().toLowerCase()}.${tld}`;
      try {
        const res = await fetch(`/.netlify/functions/domainLookup?domain=${domain}`);
        const data = await res.json();
        const record = data.WhoisRecord || {};
        const available = record.domainAvailability !== 'UNAVAILABLE';
        const created = record.createdDateNormalized || record.createdDate;
        resList.push({ name: domain, available, created });
      } catch (e) {
        console.error('Domain lookup failed:', e);
        resList.push({ name: domain, available: false });
      }
    }
    setResults(resList);
    setLoading(false);
  };

  return (
    <div className="pt-20 space-y-10">
      <section className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-heading font-bold text-primary mb-4">Domain Search</h1>
        <p className="text-text mb-6">Find available domains and view WHOIS info.</p>
        <div className="flex gap-4 justify-center mb-4 text-sm">
          {AVAILABLE_TLDS.map((tld) => (
            <label key={tld} className="flex items-center gap-1">
              <input type="checkbox" checked={tlds[tld]} onChange={() => toggleTld(tld)} />
              .{tld}
            </label>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter domain name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={searchDomains}
          disabled={loading}
          className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>

        {results.length > 0 && (
          <ul className="text-left mt-8 space-y-4">
            {results.map((item, idx) => (
              <li
                key={idx}
                className="border border-gray-200 rounded-lg p-4 flex justify-between items-center bg-white shadow-sm"
              >
                <div>
                  <p className="font-semibold">
                    {item.name}{' '}
                    {item.available ? (
                      <span className="text-green-600 ml-2">✔ Available</span>
                    ) : (
                      <span className="text-red-500 ml-2">✘ Taken</span>
                    )}
                  </p>
                  {item.created && (
                    <p className="text-xs text-gray-600">
                      Created: {new Date(item.created).toLocaleDateString()}
                    </p>
                  )}
                </div>
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
        )}
      </section>
    </div>
  );
}
