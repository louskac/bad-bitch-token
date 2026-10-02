import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CreatorGallery from './components/CreatorGallery';
import Altar from './components/Altar';
import Roadmap from './components/Roadmap';
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
        <Altar />
        <Roadmap />
        <GeminiChat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
