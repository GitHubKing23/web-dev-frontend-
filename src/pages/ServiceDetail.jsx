import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceDetails = {
  'web-development': {
    title: 'Web Development',
    description:
      'We create modern, responsive, and scalable websites tailored to your business needs. Whether you need a landing page, portfolio, or full-stack web app — we build to impress.',
    details: [
      'Responsive design for all screen sizes',
      'Custom frontend using React or Tailwind CSS',
      'Full-stack options with Node.js and MongoDB',
      'Ongoing support and maintenance plans',
    ],
    tools: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    cta: 'Start Your Website',
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    description:
      'Boost your search engine visibility with keyword targeting, on-page optimization, and technical SEO audits to outrank your competition.',
    details: [
      'Keyword research and content strategy',
      'Meta tags, schema markup, and speed optimization',
      'Backlink analysis and domain authority improvements',
    ],
    tools: ['Google Search Console', 'Ahrefs', 'Yoast SEO'],
    cta: 'Request an SEO Audit',
  },
  // Add more services here as needed...
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="pt-28 pb-20 px-6 font-body bg-white text-left max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading font-bold text-primary mb-4">Service Not Found</h1>
        <p className="text-gray-700 mb-6">
          The service you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/services"
          className="bg-primary text-white px-6 py-3 rounded-md text-sm font-semibold shadow hover:bg-opacity-90 transition inline-block"
        >
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 font-body bg-white text-left max-w-4xl mx-auto">
      <h1 className="text-4xl font-heading font-bold text-primary mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      <h2 className="text-2xl font-semibold text-accent mb-3">What’s Included:</h2>
      <ul className="list-disc list-inside text-gray-800 mb-6">
        {service.details.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-accent mb-3">Tools We Use:</h2>
      <div className="flex flex-wrap gap-3 mb-8">
        {service.tools.map((tool, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      <Link
        to="/contact"
        className="bg-accent text-white px-6 py-3 rounded-md text-sm font-semibold shadow hover:bg-opacity-90 transition inline-block text-center"
      >
        {service.cta}
      </Link>
    </div>
  );
}
