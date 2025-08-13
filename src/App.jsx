// src/App.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ChatWidget from './components/ChatWidget.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Home (keep eager for fastest first paint)
import Home from './pages/Home.jsx';

// Lazy-load the rest of the pages to shrink the initial bundle
const Services = lazy(() => import('./pages/Services.jsx'));
const ProjectsPage = lazy(() => import('./pages/Projects.jsx'));
const ContactPage = lazy(() => import('./pages/Contact.jsx'));
const AboutPage = lazy(() => import('./pages/About.jsx'));
const BlogPage = lazy(() => import('./pages/Blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const ToolsPage = lazy(() => import('./pages/Tools.jsx'));
const VlogPage = lazy(() => import('./pages/Vlog.jsx'));
const PricingPage = lazy(() => import('./pages/Pricing.jsx'));
const ArCardPage = lazy(() => import('./pages/ArCard.jsx'));
const MarketplacePage = lazy(() => import('./pages/Marketplace.jsx'));
const DomainSearchPage = lazy(() => import('./pages/DomainSearch.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const HomeServicesPackage = lazy(() => import('./pages/HomeServicesPackage.jsx'));
const AIToolPage = lazy(() => import('./pages/AIToolPage.jsx'));
const FreeGuidePage = lazy(() => import('./pages/FreeGuide.jsx'));
const ThankYouPage = lazy(() => import('./pages/ThankYou.jsx'));

// Analytics
import Analytics from './Analytics.jsx';

// Defer AOS (and its CSS) until after window load
function useDeferredAOS() {
  useEffect(() => {
    const onLoad = () => {
      Promise.all([import('aos'), import('aos/dist/aos.css')])
        .then(([{ default: AOS }]) => {
          AOS.init({ once: true, duration: 500 });
        })
        .catch(() => {});
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
}

function App() {
  useDeferredAOS();

  return (
    <HelmetProvider>
      <Router>
        <Analytics />
        <ScrollToTop />
        <Navbar />
        <main className="pt-20 space-y-20">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Services */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />

              {/* Core pages */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/vlog" element={<VlogPage />} />
              <Route path="/tools" element={<ToolsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/arcard" element={<ArCardPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/domains" element={<DomainSearchPage />} />
              <Route path="/home-services" element={<HomeServicesPackage />} />

              {/* Funnel pages */}
              <Route path="/free-guide" element={<FreeGuidePage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />

              {/* AI Tool */}
              <Route path="/ai" element={<AIToolPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatWidget />
      </Router>
    </HelmetProvider>
  );
}

export default App;
