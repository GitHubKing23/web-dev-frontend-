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
  faBullhorn,
  faVideo // 🎥 Icon for Twitch Stream Upgrade
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
  {
    title: 'Twitch Stream Upgrade',
    description: 'Custom overlays, alerts, and 24/7 stream setup to boost your Twitch game.',
    icon: faVideo,
    slug: 'twitch-stream-upgrade',
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="services" className="bg-background py-20 px-6 font-body relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Accent Divider */}
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
          💼 What We Offer
        </h2>
        <p className="text-text text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Solutions tailored to elevate your brand online — across web, mobile, search, and social.
        </p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.slug}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 text-left"
            >
              {/* Animated Icon */}
              <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={service.icon} className="text-4xl" />
              </div>

              <h3 className="text-xl font-heading text-primary font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-text text-sm mb-4 opacity-90">{service.description}</p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-block text-accent font-semibold text-sm hover:underline transition-all hover:scale-[1.02]"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-[-60px] right-[-80px] w-[250px] h-[250px] bg-accent opacity-10 blur-3xl rounded-full z-0"></div>
    </section>
  );
}
