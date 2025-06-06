import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';

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
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight leading-tight mb-4">
          Build Your Vision with{' '}
          <AnimatePresence mode="wait">
            <Motion.span
              key={rotatingWords[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-accent"
            >
              {rotatingWords[index]}
            </Motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-text font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          We craft beautiful, high-performance websites and applications that elevate your brand and grow your business.
        </p>

        <Link
          to="/pricing"
          className="inline-block bg-accent text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-md"
        >
          🚀 Get Started
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L40,149.3C80,139,160,117,240,128C320,139,400,181,480,186.7C560,192,640,160,720,138.7C800,117,880,107,960,117.3C1040,128,1120,160,1200,165.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
