import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = ['Elegance', 'Speed', 'Precision', 'Impact'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-center py-16 md:py-20 px-4">
      {/* Background Blob SVG */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-10 rounded-full blur-3xl z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Accent Divider */}
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight leading-tight mb-4">
          Build Your Vision with{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent"
            >
              {rotatingWords[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Subheading */}
        <p className="text-text font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          We craft beautiful, high-performance websites and applications that elevate your brand and grow your business.
        </p>

        {/* CTA */}
        <Link
          to="/pricing"
          className="inline-block bg-accent text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-md"
        >
          🚀 Get Started
        </Link>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f8f9fa"
            d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
