import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const rotatingWords = ['Elegance', 'Speed', 'Precision', 'Impact'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500); // rotate every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background text-center py-20 px-4 font-heading">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
          Build Your Vision with{' '}
          <span className="text-accent transition-opacity duration-500 ease-in-out">
            {rotatingWords[index]}
          </span>
        </h1>
        <p className="text-text text-lg mb-8">
          We craft beautiful, responsive websites and web applications that elevate your brand.
        </p>
        <Link
          to="/pricing"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-accent transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
