import React from 'react';
import { useTokenData } from '../hooks/useTokenData';
import { useUserBalance } from '../hooks/useUserBalance';

const Roadmap: React.FC = () => {
  const tokenData = useTokenData();
  const { balance: userBalance } = useUserBalance();
  const currentMktCap = tokenData.mktCap || 0;
  const userHoldingsValueUsd = (userBalance || 0) * (tokenData.price || 0);
  const hasMinHolding = userHoldingsValueUsd >= 5;

  const milestones = [
    { cap: '100K', val: 100000, reward: 'RAW ARCHIVE COMPILATIONS', detail: 'The best unfiltered cuts from the private vault. No edits. No filters.', marker: 'BEST OF BB' },
    { cap: '200K', val: 200000, reward: 'COMMUNITY ANIME COSPLAY', detail: 'The community votes on the fit. A full cinematic cosplay reveal.', marker: 'YOUR CHOICE' },
    { cap: '500K', val: 500000, reward: 'THE FIRST FEMALE COLLAB', detail: 'Solo era ends. A historic first-time collaboration with a mystery creator.', marker: 'NEVER SEEN' },
    { cap: '1M', val: 1000000, reward: 'THE ULTIMATE CELIBACY BREACH', detail: 'The celibate streak ends. First male collaboration in history.', marker: 'MALE COLLAB' },
  ];

  return (
    <section id="roadmap" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER: Restored to full Pink Branding */}
        <div className="mb-24 border-l-4 border-primary pl-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-display text-[10px] tracking-[0.5em] font-bold uppercase block mb-2">
              Expansion Protocol
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
              THE <span className="text-primary italic">HITLIST.</span>
            </h2>
          </div>
          <div className="relative border border-white/10 p-5 bg-zinc-950">
            <div className="text-[9px] text-zinc-500 font-display tracking-[0.4em] uppercase mb-1">Current Valuation</div>
            <div className="text-3xl font-display font-black text-white italic">
              ${tokenData.ready ? Math.round(currentMktCap).toLocaleString() : '---'} <span className="text-primary">MC</span>
            </div>
            {/* Rare Cyan Highlight */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00f2ff] rotate-45 shadow-[0_0_8px_#00f2ff]" />
          </div>
        </div>

        <div className="relative">
          {/* THE PINK SPINE */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent md:-ml-[1px]" />

          <div className="space-y-32">
            {milestones.map((m, i) => (
              <div key={m.cap} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                <div className="absolute left-0 md:left-1/2 md:-ml-[6px] w-3 h-3 bg-primary rotate-45 z-20 shadow-[0_0_15px_#ff007f]" />

                <div className="w-full md:w-[42%] ml-8 md:ml-0 group">
                  <div className="bg-zinc-950 border border-white/5 p-8 relative overflow-hidden transition-all duration-500 hover:border-primary/40">

                    <div className="absolute top-4 right-4 font-marker text-primary text-2xl -rotate-12 opacity-30 group-hover:opacity-100 transition-all duration-500">
                      {m.marker}
                    </div>

                    <div className="mb-6">
                      <span className="font-display text-[9px] uppercase tracking-[0.5em] text-zinc-600 block mb-1">Tier 0{i + 1}</span>
                      <h3 className="text-5xl md:text-6xl font-display font-black text-white italic tracking-tighter">
                        ${m.cap}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-xl uppercase leading-tight text-white group-hover:text-primary transition-colors">
                        {m.reward}
                      </h4>
                      <p className="text-zinc-500 text-[11px] font-display uppercase tracking-widest leading-relaxed">
                        {m.detail}
                      </p>

                      <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                        <div className="flex justify-between items-center text-[9px] font-display uppercase tracking-[0.3em]">
                          <span className="text-zinc-600">Requirement:</span>
                          <span className={hasMinHolding ? "text-accent" : "text-primary animate-pulse"}>
                            $5 HOLDING {hasMinHolding ? "✓" : "✗"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-[9px] font-display uppercase tracking-[0.3em]">
                          <span className="text-zinc-600">Milestone:</span>
                          <span className={currentMktCap >= m.val ? "text-accent" : "text-primary"}>
                            {currentMktCap >= m.val ? "DECRYPTED" : "ENCRYPTED"}
                          </span>
                        </div>
                        <button className={`w-full py-4 border border-white/10 bg-black font-display text-[10px] uppercase font-black tracking-[0.4em] text-white transition-all 
                          ${(currentMktCap >= m.val && hasMinHolding) ? "hover:bg-primary shadow-[0_0_20px_#ff007f]" : "opacity-60 cursor-not-allowed hover:bg-white/5"}`}>
                          {(currentMktCap >= m.val && hasMinHolding)
                            ? "Access Vault"
                            : (currentMktCap < m.val ? "Milestone Locked" : "Hold $5 to Enter")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Side-Data */}
                <div className="hidden md:flex w-[42%] flex-col px-12 opacity-5 group-hover:opacity-20 transition-opacity">
                  <div className="font-mono text-[8px] text-zinc-500 space-y-1">
                    <div>// PENDING_VOLUME_TARGET...</div>
                    <div className="h-[1px] w-full bg-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;