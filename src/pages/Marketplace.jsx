import React from 'react';

export default function Marketplace() {
  const templates = [
    {
      title: 'Breakfast Template',
      demo: 'https://wmprestaurant.netlify.app/',
      image: '/assets/breakfast-template.svg',
    },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Template Marketplace</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl) => (
          <div key={tpl.title} className="border rounded-lg shadow overflow-hidden flex flex-col">
            <img src={tpl.image} alt={`${tpl.title} screenshot`} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-2">{tpl.title}</h2>
              <a
                href={tpl.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline mb-4"
              >
                View Demo
              </a>
              <a
                href="https://m.me/61576399047285"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-accent text-white text-center py-2 rounded hover:bg-yellow-500 transition"
              >
                Buy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
