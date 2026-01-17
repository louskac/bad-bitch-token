import React from 'react';

const Roadmap: React.FC = () => {
  const milestones = [
    { cap: '100K', reward: 'RAW ARCHIVE COMPILATIONS', detail: 'The best unfiltered cuts from the private vault. No edits. No filters.', locked: true, marker: 'BEST OF BB' },
    { cap: '200K', reward: 'COMMUNITY ANIME COSPLAY', detail: 'The community votes on the fit. A full cinematic cosplay reveal.', locked: true, marker: 'YOUR CHOICE' },
    { cap: '500K', reward: 'THE FIRST FEMALE COLLAB', detail: 'Solo era ends. A historic first-time collaboration with a mystery creator.', locked: true, marker: 'NEVER SEEN' },
    { cap: '1M', reward: 'THE ULTIMATE CELIBACY BREACH', detail: 'The celibate streak ends. The first male collaboration in the creator\'s history.', locked: true, marker: 'MALE COLLAB' },
  ];

  return (
    <section id="roadmap" className="py-32 px-6 relative bg-black overflow-hidden">
      {/* Texture and Background Glow */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER: Matched to THE ARCHIVES & THE ALTAR */}
        <div className="mb-24 border-l-4 border-primary pl-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-display text-[10px] tracking-[0.5em] font-bold uppercase block mb-2">
              Expansion Protocol
            </span>
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none text-white">
              THE <span className="text-primary italic">HITLIST.</span>
            </h2>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-500 font-display tracking-[0.4em] uppercase mb-1">Market Valuation</div>
            <div className="text-3xl font-display font-black text-white animate-pulse">
              $24,812,042 <span className="text-primary">MC</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-ml-px"></div>

          <div className="space-y-16 md:space-y-32">
            {milestones.map((m, i) => (
              <div key={m.cap} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Milestone Node */}
                <div className="absolute left-4 -ml-[5px] md:left-1/2 md:-ml-1 w-3 h-3 bg-primary rotate-45 z-20 shadow-[0_0_15px_#ff007f]"></div>

                {/* Content Card */}
                <div className="w-full md:w-[42%] ml-12 md:ml-0 group">
                  <div className="bg-zinc-950 border border-white/10 p-8 relative overflow-hidden transition-all duration-500 hover:border-primary/50">

                    {/* Pink Marker Tag inside card */}
                    <div className="absolute top-4 right-4 font-marker text-primary text-xl md:text-2xl -rotate-12 opacity-40 group-hover:opacity-100 transition-all">
                      {m.marker}
                    </div>

                    <div className="mb-6">
                      <span className="font-display text-[10px] uppercase tracking-[0.4em] text-gray-600 block mb-1">Tier 0{i + 1}</span>
                      <h3 className="text-4xl md:text-5xl font-display font-black text-white italic tracking-tighter">
                        ${m.cap}
                      </h3>
                    </div>

                    <div className="space-y-4 relative z-10">
                      <h4 className="font-display font-bold text-xl uppercase leading-tight text-white group-hover:text-primary transition-colors">
                        {m.reward}
                      </h4>
                      <p className="text-gray-500 text-xs font-display uppercase tracking-widest leading-relaxed">
                        {m.detail}
                      </p>

                      <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                        <div className="flex justify-between items-center text-[9px] font-display uppercase tracking-[0.3em]">
                          <span className="text-gray-600">Access:</span>
                          <span className="text-white">ENCRYPTED</span>
                        </div>
                        <button
                          disabled={m.locked}
                          className="w-full py-4 border border-white/10 font-display text-[10px] uppercase font-bold tracking-[0.3em] transition-all hover:bg-white hover:text-black"
                        >
                          {m.locked ? 'VAULT LOCKED' : 'ACCESS GRANTED'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing for layout alignment */}
                <div className="hidden md:block w-[42%]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Call to Action */}
        <div className="mt-32 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-primary to-accent">
            <div className="bg-black px-12 py-6">
              <p className="font-display text-white text-sm tracking-[0.5em] uppercase font-black">
                Pump the chart. Unlock the Queen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;