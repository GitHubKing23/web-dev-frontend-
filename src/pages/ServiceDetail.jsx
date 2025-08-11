import React from 'react';
import { useParams, Link } from 'react-router-dom';

const serviceDetails = {
  'web-development': {
    title: 'Web Development',
    description:
      'We create modern, responsive, and scalable websites tailored to your business needs. Whether you need a landing page, portfolio, or full-stack web app — we build to impress.',
    details: [
      'Responsive design for all screen sizes',
      'Custom frontend using React + Tailwind CSS',
      'Full-stack options with Node.js and MongoDB',
      'Accessibility and performance best practices',
      'Ongoing support and maintenance plans',
    ],
    tools: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vite', 'Netlify'],
    tags: ['Responsive', 'SEO-Ready', 'Fast', 'Accessible'],
    cta: 'Start Your Website',
  },

  'seo-optimization': {
    title: 'SEO Optimization',
    description:
      'Boost your search engine visibility with keyword targeting, on-page optimization, and technical SEO audits to outrank your competition.',
    details: [
      'Keyword research and content strategy',
      'On-page SEO: titles, meta, schema',
      'Technical SEO: speed, sitemaps, robots',
      'Local SEO and Google Business Profile',
      'Backlink profile and competitor analysis',
    ],
    tools: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'PageSpeed Insights'],
    tags: ['On-Page', 'Technical', 'Local SEO', 'Schema'],
    cta: 'Request an SEO Audit',
  },

  'cms-integration': {
    title: 'CMS Integration',
    description:
      'Flexible, easy-to-manage content using headless CMS options that scale with your team.',
    details: [
      'Content modeling and roles/permissions',
      'Headless CMS setup and theming',
      'Preview environments & editorial workflow',
      'Migration from legacy CMS',
    ],
    tools: ['Contentful', 'Strapi', 'Sanity', 'Netlify CMS'],
    tags: ['Headless', 'Scalable', 'Editor-Friendly'],
    cta: 'Integrate a CMS',
  },

  'app-development': {
    title: 'App Development',
    description:
      'Cross-platform web and mobile applications focused on speed, UX, and reliability.',
    details: [
      'API-driven architecture',
      'Authentication & secure data flows',
      'PWA features (offline, installable)',
      'CI/CD and app store readiness (if needed)',
    ],
    tools: ['React', 'React Native', 'Node.js', 'PostgreSQL'],
    tags: ['Cross-Platform', 'API-Driven', 'PWA'],
    cta: 'Start Your App',
  },

  'social-media-management': {
    title: 'Social Media Management',
    description:
      'We grow your brand presence and keep your feeds active with strategic content.',
    details: [
      'Content calendar and brand voice',
      'Short-form video & repurposing',
      'Community management and engagement',
      'Ad planning and reporting',
    ],
    tools: ['Meta Business Suite', 'Buffer', 'Hootsuite', 'Canva'],
    tags: ['Content', 'Engagement', 'Ads'],
    cta: 'Grow My Socials',
  },

  'twitch-stream-upgrade': {
    title: 'Twitch Stream Upgrade',
    description:
      'Custom overlays, alert animations, and 24/7 stream setup to boost your Twitch presence.',
    details: [
      'Custom overlays and scene collections',
      'Animated alerts and stingers',
      'Chatbot & moderation setup',
      '24/7 streaming rig configuration',
    ],
    tools: ['OBS Studio', 'Streamlabs', 'Blender', 'After Effects'],
    tags: ['Overlays', 'Alerts', '24/7 Streaming'],
    cta: 'Upgrade My Stream',
  },
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

      {!!service.tags?.length && (
        <>
          <h2 className="text-2xl font-semibold text-accent mb-3">Tags:</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {service.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}

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

      {/* CTA to Contact */}
      <Link
        to="/contact"
        className="bg-accent text-white px-6 py-3 rounded-md text-sm font-semibold shadow hover:bg-opacity-90 transition inline-block text-center"
      >
        {service.cta}
      </Link>
    </div>
  );
}
