import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your visibility with proven search engine strategies.',
    icon: faChartLine,
  },
  {
    title: 'CMS Integration',
    description: 'Flexible, easy-to-manage content with headless CMS options.',
    icon: faCogs,
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile and web apps built for performance.',
    icon: faMobileAlt,
  },
  {
    title: 'Social Media Management',
    description: 'We grow your brand presence across all major platforms.',
    icon: faBullhorn,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="services" className="bg-light py-20 px-6 font-body">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          What We Offer
        </h2>
        <p className="text-accent mb-12 text-lg">
          Solutions crafted to elevate your online presence.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-lg rounded-lg p-6 transition hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
            >
              <FontAwesomeIcon icon={service.icon} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-accent">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
