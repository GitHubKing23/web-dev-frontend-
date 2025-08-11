import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faChartLine, faBolt } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Custom Websites',
    description: 'Responsive designs built to convert.',
    icon: faCode,
  },
  {
    title: 'AI Integration',
    description: 'Automate content and workflows.',
    icon: faRobot,
  },
  {
    title: 'SEO Growth',
    description: 'Rank higher with data-driven strategy.',
    icon: faChartLine,
  },
  {
    title: 'Automation',
    description: 'Save time with smart systems.',
    icon: faBolt,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">Services</h2>
        <p className="text-text mb-12 max-w-2xl mx-auto">Everything you need to launch and grow with AI.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <FontAwesomeIcon icon={service.icon} className="text-accent text-3xl mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
