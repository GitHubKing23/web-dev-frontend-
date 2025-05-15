import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 space-y-20">{children}</main>
      <Footer />
    </>
  );
}

