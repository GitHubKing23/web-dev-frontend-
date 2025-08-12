import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

const rotating = ["Innovation", "Profitability", "Scalability", "Dominance"];

export default function Hero() {
  const [i, setI] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => setI((p) => (p + 1) % rotating.length), 2500);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20" aria-labelledby="hero-title">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 id="hero-title" className="text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl">
              AI-Powered Web Design & Development{" "}
              <span className="sr-only">that wins you more clients with</span>
              {!prefersReducedMotion ? (
                <AnimatePresence mode="wait">
                  <Motion.span
                    key={rotating[i]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45 }}
                    className="inline-block text-accent"
                    aria-hidden="true"
                  >
                    {rotating[i]}
                  </Motion.span>
                </AnimatePresence>
              ) : (
                <span className="text-accent">Innovation</span>
              )}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
              We build fast, mobile-first sites with built-in AI—chatbots, instant quotes, and SEO-ready content—
              to grow traffic, capture more leads, and convert customers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/ai"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform hover:scale-[1.03] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                aria-label="Try the free AI Website Copy & Landing Page Generator"
                onClick={() => window.gtag?.("event", "ai_cta_click", { location: "hero" })}
              >
                🚀 Try the Free AI Generator
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center rounded-full bg-black/5 px-6 py-3 text-lg font-semibold text-black shadow-sm transition-colors hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-3 text-sm text-gray-500">Free preview. No login required.</p>
          </div>

          {/* Video preview replaces the placeholder box */}
          <div>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <video
                src="/videos/ai-demo.mp4"   // put your file here: public/videos/ai-demo.mp4
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-label="Preview: AI Website Copy & Landing Page Generator in action"
              />
            </div>
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-black/10 blur-2xl" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" aria-hidden="true">
        <svg className="relative block h-[60px] w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L40,149.3C80,139,160,117,240,128C320,139,400,181,480,186.7C560,192,640,160,720,138.7C800,117,880,107,960,117.3C1040,128,1120,160,1200,165.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
