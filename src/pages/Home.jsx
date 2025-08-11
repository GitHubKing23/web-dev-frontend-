import React from 'react';
import Hero from '../components/Hero.jsx';
import AiToolsTeaser from '../components/AiToolsTeaser.jsx';
import HomeServices from '../components/HomeServices.jsx';
import SocialProof from '../components/SocialProof.jsx';
import ClosingCTA from '../components/ClosingCTA.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AiToolsTeaser />
      <HomeServices />
      <SocialProof />
      <ClosingCTA />
    </>
  );
}
