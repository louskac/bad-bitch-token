import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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

          <div className="relative mb-10">
            <p className="text-gray-300 text-base md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-primary pl-6">
              Bad Bitch - the ultimate movement for the bold. Get rewarded with exclusive, unfiltered content drops at scheduled milestones.
              Don't just watch the game—own it.
            </p>

            {/* RICH ENERGY: Hidden on mobile to prevent layout overflow */}
            <div className="hidden lg:block absolute top-40 -right-60 font-marker text-accent text-7xl opacity-20 rotate-12 select-none pointer-events-none whitespace-nowrap">
              RICH ENERGY
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="#the-altar"
              className="bg-primary text-white font-display px-8 py-4 md:px-10 md:py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 group transition-all hover:shadow-[0_0_30px_#ff007f] hover:translate-y-[-2px]"
            >
              ENTER THE ALTAR <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">bolt</span>
            </a>
            <a
              href="#roadmap"
              className="border border-white/20 hover:border-primary/50 text-white font-display px-8 py-4 md:px-10 md:py-5 text-sm uppercase tracking-widest transition-all hover:bg-white/5 text-center flex items-center justify-center"
            >
              THE HITLIST
            </a>
          </div>
        </div>

        {/* Right Column: Video & Stats */}
        <div className="flex-1 w-full flex flex-col items-center md:items-end gap-10 mt-8 md:mt-32">

          <div className="relative group w-full max-w-lg">
            <div
              className={`absolute -inset-1 rounded-[1.5rem] md:rounded-[2.2rem] blur-xl opacity-60 group-hover:opacity-100 transition duration-500 ${isPlaying ? 'opacity-40' : ''}`}
              style={{ background: 'conic-gradient(from 0deg, #00f2ff, #ff007f, #00f2ff)' }}
            ></div>

            <div
              className={`relative bg-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer z-10 ${isPlaying ? 'aspect-[9/16] md:scale-105 shadow-[0_0_50px_rgba(255,0,127,0.3)]' : 'aspect-[16/10]'}`}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={!isPlaying}
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>

              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-primary bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                  <div className={`w-0 h-0 border-y-[10px] md:border-y-[12px] border-y-transparent border-l-[16px] md:border-l-[20px] border-l-primary ml-1 ${isPlaying ? 'hidden' : 'block'}`}></div>
                  <div className={`flex gap-1 ${isPlaying ? 'block' : 'hidden'}`}>
                    <div className="w-2 h-8 bg-primary"></div>
                    <div className="w-2 h-8 bg-primary"></div>
                  </div>
                </button>
                {/* Fixed position for mobile: centered bottom */}
                <div className="absolute bottom-4 -right-10 md:bottom-6 w-full text-center font-marker text-primary text-xl md:text-4xl -rotate-[10deg] drop-shadow-[0_2px_12px_rgba(255,0,127,1)] px-4">
                  BROKE BOYS DON'T DESERVE PUSSY
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Cards - Pure creator vault focus */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center md:justify-end items-stretch gap-2 md:gap-3 w-full max-w-lg">
            {[
              ['Vault', '20+ EXCLUSIVES'],
              ['Experience', 'UNFILTERED'],
              ['Access', 'INSTANT DROPS']
            ].map(([label, val], idx) => (
              <div
                key={label}
                className={`glass-panel p-3 md:p-4 min-w-0 text-center flex flex-col justify-center ${idx === 2 ? 'col-span-2 sm:flex-none' : 'flex-1 sm:flex-none sm:min-w-[120px]'}`}
              >
                <div className="text-[9px] md:text-[10px] font-display uppercase tracking-widest text-primary/60 mb-1 md:mb-2">
                  {label}
                </div>
                <div className="text-base md:text-xl font-display font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {val}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;