import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faChartLine,
  faCogs,
  faMobileAlt,
  faBullhorn
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites tailored to your brand.',
    icon: faCode,
    slug: 'web-development',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your visibility with proven search engine strategies.',
    icon: faChartLine,
    slug: 'seo-optimization',
  },
  {
    title: 'CMS Integration',
    description: 'Flexible, easy-to-manage content with headless CMS options.',
    icon: faCogs,
    slug: 'cms-integration',
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile and web apps built for performance.',
    icon: faMobileAlt,
    slug: 'app-development',
  },
  {
    title: 'Social Media Management',
    description: 'We grow your brand presence across all major platforms.',
    icon: faBullhorn,
    slug: 'social-media-management',
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="services" className="bg-background py-20 px-6 font-body">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Accent divider */}
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
          💼 What We Offer
        </h2>
        <p className="text-text text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Solutions tailored to elevate your brand online — across web, mobile, search, and social.
        </p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 text-left"
              data-aos="fade-up"
            >
              <FontAwesomeIcon icon={service.icon} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-heading text-primary font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-text text-sm mb-4 opacity-90">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="text-accent font-semibold text-sm hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Optional background blob */}
      <div className="absolute top-[-50px] left-[-80px] w-[250px] h-[250px] bg-accent opacity-10 blur-3xl rounded-full z-0" />
    </section>
  );
}
