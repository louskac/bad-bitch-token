import React from 'react';
import { TOKEN_CA, RAYDIUM_URL, DEX_URL, EXPLORER_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* RICH CTA */}
        <div className="mb-32 relative group border border-white/10 bg-black overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 group-hover:bg-zinc-950 transition-colors">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase italic tracking-tighter leading-[0.9]">
                PUMP THE <span className="text-primary italic">CHART.</span><br />
                UNLOCK THE <span className="text-primary">QUEEN.</span>
              </h2>
              <p className="mt-4 text-zinc-500 font-display text-[10px] uppercase tracking-[0.5em] max-w-sm">
                Secure your position on the blockchain.
              </p>
            </div>

            <a href={RAYDIUM_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-12 py-6 bg-primary text-black font-display font-black text-xl tracking-[0.3em] uppercase transition-all hover:bg-white hover:scale-105">
              Initiate Buy
            </a>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] italic pointer-events-none select-none uppercase">
              RICH
            </div>
          </div>
        </div>

        {/* PRICE MENU GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {/* Live & Customs */}
          <div className="space-y-6">
            <h3 className="text-primary font-display font-black text-xl uppercase tracking-widest italic">Live & Visuals</h3>
            <ul className="space-y-4 font-display text-[11px] tracking-widest text-zinc-400 uppercase">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Live Sexting (min)</span> <span className="text-white">$2</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>FaceTimes (min)</span> <span className="text-white">$6</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Dick Rate (Clothed)</span> <span className="text-white">$20</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Dick Rate (Nude)</span> <span className="text-white">$30</span></li>
              <li className="text-[9px] text-zinc-600 mt-2">* Customs: $35 (first 3min) + $5/min</li>
            </ul>
          </div>

          {/* Premades & Catalog */}
          <div className="space-y-6">
            <h3 className="text-primary font-display font-black text-xl uppercase tracking-widest italic">Archives</h3>
            <ul className="space-y-4 font-display text-[11px] tracking-widest text-zinc-400 uppercase">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Single Premade</span> <span className="text-white">$20</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Videos {'>'} 3min</span> <span className="text-white">$25</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>4 Video Bundle</span> <span className="text-white">$60</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Full Catalog</span> <span className="text-white">$360</span></li>
            </ul>
          </div>

          {/* Exclusive GFE/VIP */}
          <div className="p-6 bg-zinc-950 border border-primary/20">
            <h3 className="text-[#00f2ff] font-display font-black text-xl uppercase tracking-widest italic mb-4">VIP/GFE Status</h3>
            <div className="space-y-4 text-[10px] font-display tracking-widest uppercase">
              <div className="flex justify-between text-white font-bold"><span>Weekly Pass</span> <span>$125</span></div>
              <div className="flex justify-between text-white font-bold"><span>Monthly Elite</span> <span>$550</span></div>
              <p className="text-zinc-600 leading-relaxed pt-2 border-t border-white/5">
                Includes: Daily texting, surprise treats, and priority scheduling.
                <span className="text-[#00f2ff] block mt-1">Limited spots available.</span>
              </p>
            </div>
          </div>
        </div>

        {/* DISCOUNTS & CHAT INFO */}
        <div className="mb-24 py-8 border-y border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em]">
              10% Holder Discount Active
            </div>
            <span className="text-zinc-500 font-display text-[9px] uppercase tracking-widest">Verify tokens on Telegram for discount</span>
          </div>
          <div className="text-zinc-400 font-display text-[10px] uppercase tracking-[0.4em]">
            Primary Terminal: <a href="#" className="text-white hover:text-primary transition-colors underline underline-offset-4">TELEGRAM</a>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 opacity-60">
          <div className="text-xl font-display font-black text-white italic">BAD<span className="text-primary">BITCH</span></div>
          <div className="flex flex-col gap-2 text-[9px] uppercase tracking-widest text-zinc-500">
            <a href={EXPLORER_URL} target="_blank" rel="noopener noreferrer">Solana Explorer</a>
            <a href={DEX_URL} target="_blank" rel="noopener noreferrer">DexScreener</a>
          </div>
          <div className="flex flex-col gap-2 text-[9px] uppercase tracking-widest text-zinc-500">
            <a href={RAYDIUM_URL} target="_blank" rel="noopener noreferrer">Raydium Purchase</a>
            <a href="#">X (Twitter)</a>
          </div>
          <div className="text-[9px] text-zinc-800 uppercase tracking-[0.8em]">© 2024 PROTOCOL</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;