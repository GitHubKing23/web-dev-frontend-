import React from 'react';
import { Link } from 'react-router-dom';
import {
  faCode,
  faChartLine,
  faCogs,
  faMobileAlt,
  faBullhorn,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive websites tailored to your brand.',
    icon: faCode,
  },
  {
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Boost your visibility with proven search engine strategies.',
    icon: faChartLine,
  },
  {
    slug: 'cms-integration',
    title: 'CMS Integration',
    description: 'Flexible, easy-to-manage content with headless CMS options.',
    icon: faCogs,
  },
  {
    slug: 'app-development',
    title: 'App Development',
    description: 'Cross-platform mobile and web apps built for performance.',
    icon: faMobileAlt,
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'We grow your brand presence across all major platforms.',
    icon: faBullhorn,
  },
  {
    slug: 'twitch-upgrade',
    title: 'Twitch Streamer Upgrade',
    description: 'Upgrade your Twitch with overlays, 24/7 streaming, and animations.',
    icon: faVideo,
  },
];

export default function ServicesPage() {
  return (
    <section className="pt-28 px-6 font-body bg-light">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          What We Offer
        </h2>
        <p className="text-accent mb-12 text-lg">
          Explore the full range of services designed to grow your digital presence.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white shadow-lg rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <FontAwesomeIcon icon={service.icon} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-accent mb-4">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="text-primary underline text-sm hover:text-accent transition"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
