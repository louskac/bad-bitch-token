import React from 'react';

const CreatorGallery: React.FC = () => {
  const shots = [
    {
      url: "/elite.png",
      tag: "BURN TOKEN",
      caption: "EXCLUSIVE VIDEOS RIGHT AWAY",
      marker: "BURN THE WEEK"
    },
    {
      url: "/curly.png",
      tag: "UNLOCK MILESTONES",
      caption: "NEW CONTENT ONLY FOR HOLDERS",
      marker: "NO BROKEBOYS"
    },
    {
      url: "/manifest.png",
      tag: "BIGGEST HOLDER",
      caption: "PRIVATE LIVESTREAM ACCESS",
      marker: "1# FAN"
    }
  ];

  return (
    <section id="utility" className="py-20 px-6 bg-black relative overflow-hidden mt-20">
      {/* Grid Overlay to match Hero */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header: Compact & Aggressive */}
        <div className="mb-16 border-l-4 border-primary pl-6">
          <span className="text-primary font-display text-[10px] tracking-[0.5em] font-bold uppercase block mb-2">
            Premium Access
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
            THE UTILITY
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shots.map((shot, i) => (
            <div key={i} className="group relative bg-zinc-900 border border-white/5 overflow-hidden aspect-[3/4] cursor-crosshair">

              {/* Image with "Locked" State */}
              <img
                src={shot.url}
                alt={shot.tag}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale brightness-50 blur-[4px] group-hover:grayscale-0 group-hover:brightness-110 group-hover:blur-0 group-hover:scale-105"
              />

              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,127,0.03),rgba(0,0,0,0),rgba(255,0,127,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                <span className="text-primary font-display text-[9px] tracking-[0.4em] font-black mb-2 block">
                  {shot.tag}
                </span>
                <h4 className="text-white font-display font-bold text-xl tracking-tighter uppercase leading-tight group-hover:text-primary transition-colors">
                  {shot.caption}
                </h4>
              </div>

              {/* Pink Marker Tag */}
              <div className="absolute top-6 right-6 font-marker text-primary text-2xl -rotate-12 drop-shadow-[0_0_8px_#ff007f] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                {shot.marker}
              </div>
            </div>
          ))}
        </div>

        {/* MANIFESTO: Structural Focal Point */}
        <div className="mt-32 flex justify-center">
          <div className="relative w-full max-w-4xl group">

            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <div className="bg-zinc-950/50 border border-white/10 p-12 md:p-20 text-center backdrop-blur-sm">
              <div className="inline-block mb-8 bg-primary px-4 py-1 text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white">
                The Manifesto
              </div>

              <div className="space-y-6">
                <p className="text-2xl md:text-4xl font-display italic font-black text-white tracking-tighter leading-tight uppercase">
                  "I don't show the good stuff to lurkers. <br />
                  <span className="text-white/40">If you want to see the real deal, pay the entry fee."</span>
                </p>

                <div className="pt-4">
                  <span className="font-marker text-4xl md:text-6xl text-primary drop-shadow-[0_0_15px_rgba(255,0,127,0.6)] animate-pulse block">
                    STOP WATCHING THE TRAILER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreatorGallery;