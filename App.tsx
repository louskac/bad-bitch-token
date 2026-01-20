
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Altar from './components/Altar';
import Stats from './components/Stats';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import CreatorGallery from './components/CreatorGallery';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex flex-col bg-darkBg">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-5 mesh-bg z-0" />

      <Header />

      <main className="flex-grow z-10 relative">
        <Hero />
        <Stats />
        <CreatorGallery />
        <Tokenomics />
        <Altar />
        <Roadmap />
        <GeminiChat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
