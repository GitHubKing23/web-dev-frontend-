import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import ServicesPage from './pages/Services.jsx';
import ProjectsPage from './pages/Projects.jsx';
import ContactPage from './pages/Contact.jsx';
import AboutPage from './pages/About.jsx';
import BlogPage from './pages/Blog.jsx';
import ToolsPage from './pages/Tools.jsx';
import PricingPage from './pages/Pricing.jsx';
import ArCardPage from './pages/ArCard.jsx';
import MarketplacePage from './pages/Marketplace.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 space-y-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/arcard" element={<ArCardPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
