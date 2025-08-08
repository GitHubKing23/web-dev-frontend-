import React from 'react';
import { useParams } from 'react-router-dom';

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
    cta: 'Optimize My Site',
  },
  'cms-integration': {
    title: 'CMS Integration',
    description:
      'Take control of your content with seamless CMS integrations. We offer headless CMS setups or traditional platforms based on your needs.',
    details: [
      'Headless CMS like Sanity or Strapi',
      'WordPress or Shopify integration',
      'Easy content editing without touching code',
    ],
    tools: ['Sanity', 'Strapi', 'WordPress', 'Shopify'],
    cta: 'Integrate My CMS',
  },
  'app-development': {
    title: 'App Development',
    description:
      'Cross-platform apps for Android, iOS, or web — designed for performance and scale. From MVPs to production-ready apps, we handle the full stack.',
    details: [
      'Cross-platform development with Flutter or React Native',
      'Secure backend APIs and database integration',
      'Real-time features, push notifications, and more',
    ],
    tools: ['Flutter', 'React Native', 'Firebase', 'Express.js'],
    cta: 'Build My App',
  },
  'social-media-management': {
    title: 'Social Media Management',
    description:
      'Let us handle your content, posting schedule, and growth strategy across all major platforms — Facebook, Instagram, X, TikTok, and more.',
    details: [
      'Content calendar and scheduling',
      'Engagement tracking and analytics',
      'Ad campaign management and boosting',
    ],
    tools: ['Hootsuite', 'Meta Business Suite', 'Canva'],
    cta: 'Grow My Audience',
  },
  'twitch-upgrade': {
    title: 'Twitch Streamer Upgrade',
    description:
      'Level up your Twitch channel with professionally designed stream layouts, smart automation, and immersive viewer engagement tools.',
    details: [
      'Custom Twitch overlays (BRB, Starting Soon, Live)',
      'Follower-triggered animations with VFX',
      '24/7 streaming setup using GPU servers',
      'Stream alerts and audio-reactive visuals',
    ],
    tools: ['Blender', 'OBS Studio', 'Streamlabs', 'RunPod', 'After Effects'],
    cta: 'Upgrade My Stream',
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-2">Service Not Found</h2>
          <p className="text-gray-600">Please check the URL or return to the services page.</p>
        </div>
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

      <button className="bg-accent text-white px-6 py-3 rounded-md text-sm font-semibold shadow hover:bg-opacity-90 transition">
        {service.cta}
      </button>
    </div>
  );
}
