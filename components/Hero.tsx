import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x69420BADDIE777c888EdfB1234567890ABCDEF";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center pt-24 md:pt-48 px-4 md:px-8 relative overflow-hidden bg-black text-white">

      {/* Background Image - Full on mobile, half on desktop */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background-hero.png')" }}
        />
        {/* Darker overlay on mobile to keep text readable */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/50" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay z-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 z-10">

        {/* Left Column: Content */}
        <div className="flex-1 w-full">
          <div className="mb-4 inline-block bg-primary px-3 py-1 text-[10px] font-display font-bold uppercase tracking-[0.3em]">
            Phase 1: THE REIGN BEGINS
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-black leading-[0.9] md:leading-[0.8] mb-8">
            <span className="glitch-text block" data-text="NO APOLOGIES.">NO APOLOGIES.</span>
            <span className="text-primary italic block tracking-tighter">JUST GAINS.</span>
          </h1>

          <div className="relative mb-8">
            <p className="text-gray-300 text-base md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-primary pl-6">
              Bad Bitch creator token - the ultimate token for the bold. Get rewarded for holding with exclusive content drops at scheduled milestones.
              Don't just watch the game—own it.
            </p>

            {/* RICH ENERGY: Hidden on mobile to prevent layout overflow */}
            <div className="hidden lg:block absolute top-40 -right-60 font-marker text-accent text-7xl opacity-20 rotate-12 select-none pointer-events-none whitespace-nowrap">
              RICH ENERGY
            </div>
          </div>

          {/* CA Element */}
          <div className="mb-10 w-full max-w-lg">
            <div className="glass-panel p-3 md:p-4 flex items-center justify-between gap-2 md:gap-4 border-primary/40 bg-primary/5 group relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="relative z-10 flex flex-col min-w-0">
                <span className="text-[8px] md:text-[9px] font-display text-primary uppercase tracking-widest mb-1">Official Contract Address</span>
                <span className="text-[10px] md:text-sm font-mono text-white truncate">{contractAddress}</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="relative z-10 bg-primary hover:bg-pink-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-sm transition-all active:scale-95 flex items-center gap-2 shrink-0"
              >
                <span className="material-icons text-xs md:text-sm">{copied ? 'check' : 'content_copy'}</span>
                <span className="font-display text-[8px] md:text-[9px] uppercase font-bold tracking-widest">{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white font-display px-8 py-4 md:px-10 md:py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 group transition-all hover:shadow-[0_0_30px_#ff007f] hover:translate-y-[-2px]">
              BUY $BBT <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">payments</span>
            </button>
            <button className="border border-white/20 hover:border-primary/50 text-white font-display px-8 py-4 md:px-10 md:py-5 text-sm uppercase tracking-widest transition-all hover:bg-white/5 text-center">
              <a href="#roadmap">UNLOCKED CONTENT</a>
            </button>
          </div>
        </div>

        {/* Right Column: Video & Stats */}
        <div className="flex-1 w-full flex flex-col items-center md:items-end gap-10 mt-8 md:mt-32">

          <div className="relative group w-full max-w-lg">
            <div
              className="absolute -inset-1 rounded-[1.5rem] md:rounded-[2.2rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-500"
              style={{ background: 'conic-gradient(from 0deg, #00f2ff, #ff007f, #00f2ff)' }}
            ></div>

            <div className="relative bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-[16/10] z-10">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-dancing-in-a-pink-and-blue-light-42173-large.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-primary bg-primary/10 flex items-center justify-center">
                  <div className="w-0 h-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[16px] md:border-l-[20px] border-l-primary ml-1"></div>
                </button>
                {/* Fixed position for mobile: centered bottom */}
                <div className="absolute bottom-4 md:bottom-0 md:left-40 w-full md:w-auto text-center font-marker text-primary text-xl md:text-4xl -rotate-[10deg] md:-rotate-[20deg] drop-shadow-[0_2px_12px_rgba(255,0,127,1)] px-4">
                  Broke Boys Don't Deserve Pussy
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards - Changed from 3 cols to 1 on mobile for readability */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
            {[['Price', '$0.0004'], ['Mkt Cap', '$24.8M'], ['Holders', '12.4K']].map(([label, val]) => (
              <div key={label} className="bg-black/90 border border-white/5 p-4 text-center">
                <div className="text-[10px] font-display uppercase tracking-widest text-gray-500 mb-1">{label}</div>
                <div className="text-xl font-display font-bold text-white">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;