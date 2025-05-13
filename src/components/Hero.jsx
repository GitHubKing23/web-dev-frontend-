function Hero() {
  return (
    <section className="bg-background text-center py-20 px-4 font-heading">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
          Build Your Vision with Elegance
        </h1>
        <p className="text-text text-lg mb-8">
          We craft beautiful, responsive websites and web applications that elevate your brand.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-accent transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero; // ✅ Must be here!
