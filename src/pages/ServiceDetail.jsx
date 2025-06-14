import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const serviceDetails = {
  'web-development': {
    title: 'Web Development',
    description:
      'We build high-performance, elegant websites that adapt to your business and engage users on any device.',
    details: [
      'Custom React or Next.js websites',
      'Responsive & mobile-first design',
      'Landing pages, blogs, eCommerce, dashboards',
      'Built with SEO, speed, and accessibility in mind',
    ],
    tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Figma', 'Netlify'],
    cta: 'Start My Website',
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    description:
      'We increase your search engine visibility with proven white-hat strategies that work long-term.',
    details: [
      'Keyword research & strategy',
      'On-page SEO improvements (title tags, headers, etc.)',
      'Technical audits and fixes',
      'Backlink-building campaigns',
    ],
    tools: ['Google Search Console', 'Ahrefs', 'SEMRush', 'Screaming Frog'],
    cta: 'Boost My SEO',
  },
  'cms-integration': {
    title: 'CMS Integration',
    description:
      'Empower your team to update your content easily with flexible, secure, and scalable CMS solutions.',
    details: [
      'WordPress setup and theme customization',
      'Headless CMS integration (Sanity, Strapi, Contentful)',
      'Secure backend with access roles',
      'Structured content modeling for SEO',
    ],
    tools: ['WordPress', 'Sanity', 'Contentful', 'Strapi', 'GraphQL'],
    cta: 'Get My CMS Setup',
  },
  'app-development': {
    title: 'App Development',
    description:
      'We develop powerful cross-platform apps for mobile and web, designed to scale and deliver real value.',
    details: [
      'Flutter or React Native mobile apps',
      'Progressive Web Apps (PWAs)',
      'Backend API integration (REST/GraphQL)',
      'Authentication, database & deployment',
    ],
    tools: ['Flutter', 'React Native', 'Firebase', 'Supabase', 'Node.js'],
    cta: 'Build My App',
  },
  'social-media-management': {
    title: 'Social Media Management',
    description:
      'Let us manage your brand voice, visuals, and engagement across platforms so you can focus on your business.',
    details: [
      'Content calendar planning & strategy',
      'Post design & scheduling (Reels, carousels, TikToks)',
      'Community management & engagement',
      'Analytics reports & campaign optimization',
    ],
    tools: ['Canva', 'Hootsuite', 'Buffer', 'Meta Suite', 'TikTok Studio'],
    cta: 'Boost My Socials',
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!service) {
    return (
      <div className="text-center pt-32 px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Service Not Found</h1>
        <p className="text-accent text-lg">The service you’re looking for doesn’t exist.</p>
      </div>
    );
  }

  return (
    <section className="pt-32 px-4 md:px-6 font-body">
      <div
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">{service.title}</h1>
        <p className="text-accent text-lg mb-6">{service.description}</p>

        <div className="mb-6" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-primary mb-2">What’s Included:</h2>
          <ul className="list-disc pl-6 text-accent space-y-1">
            {service.details.map((point, index) => (
              <li key={index} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-primary mb-2">Technologies / Tools:</h2>
          <div className="flex flex-wrap gap-3 text-accent">
            {service.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-light px-3 py-1 rounded-full border border-primary text-sm font-medium hover:bg-primary hover:text-white transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-8" data-aos="zoom-in">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-accent hover:scale-105 transition-transform duration-300"
          >
            {service.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
