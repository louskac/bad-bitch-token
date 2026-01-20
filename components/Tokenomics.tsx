import React, { useState } from 'react';
import { TOKEN_CA, EXPLORER_URL } from '../constants';
import { useTokenData } from '../hooks/useTokenData';

const Tokenomics: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tokenData = useTokenData();
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText(TOKEN_CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const data = [
    { label: 'Circulating', value: 80, color: '#ff007f', description: 'Power to the street. Community owned.', startAngle: 0 },
    { label: 'Creator', value: 10, color: '#00f2ff', description: 'Vested loyalty. Skin in the game.', startAngle: 80 },
    { label: 'Dev Team', value: 10, color: '#ffffff', description: 'The architects.', startAngle: 90 },
  ];

  const getSlicePath = (startPercent: number, endPercent: number) => {
    const startAngle = (startPercent / 100) * 360;
    const endAngle = (endPercent / 100) * 360;
    const x1 = Math.cos((startAngle - 90) * Math.PI / 180);
    const y1 = Math.sin((startAngle - 90) * Math.PI / 180);
    const x2 = Math.cos((endAngle - 90) * Math.PI / 180);
    const y2 = Math.sin((endAngle - 90) * Math.PI / 180);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return `M 0 0 L ${x1} ${y1} A 1 1 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <section id="tokenomics" className="py-16 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER: Matched to THE ARCHIVES Section Styling */}
        <div className="mb-12 border-l-4 border-primary pl-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary font-display text-[10px] tracking-[0.5em] font-bold uppercase block mb-2">
              Verified Protocol
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
              PURE <span className="text-primary italic">MATH.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="font-marker text-primary text-3xl md:text-5xl -rotate-3 drop-shadow-[0_0_12px_rgba(255,0,127,0.8)]">
              1,000,000,000 SUPPLY
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: The Donut Chart (Bug Fixed) */}
          <div className="relative aspect-square max-w-[360px] mx-auto w-full flex items-center justify-center">
            {/* Removed background divs that could cause "pink square" artifacts */}
            <svg viewBox="-1.1 -1.1 2.2 2.2" className="w-full h-full -rotate-90 overflow-visible">
              {data.map((item, i) => (
                <path
                  key={item.label}
                  d={getSlicePath(item.startAngle, item.startAngle + item.value)}
                  fill={item.color}
                  // Using stroke to prevent tiny gaps between slices
                  stroke={item.color}
                  strokeWidth="0.01"
                  className="transition-all duration-300 cursor-crosshair origin-center"
                  style={{
                    transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                    opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.2 : 1,
                    // Glow effect only applied to the path
                    filter: hoveredIndex === i ? `drop-shadow(0 0 8px ${item.color})` : 'none'
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
              {/* Central Hole: Solid Black to cover path centers */}
              <circle cx="0" cy="0" r="0.72" fill="black" />
            </svg>

            {/* Central Readout Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-display text-7xl font-black text-white leading-none">
                {hoveredIndex !== null ? data[hoveredIndex].value : '100'}
                <span className="text-2xl text-primary">%</span>
              </span>
              <span className="text-[10px] font-display font-bold tracking-[0.4em] text-primary uppercase mt-1">
                {hoveredIndex !== null ? data[hoveredIndex].label : 'UNFILTERED'}
              </span>
            </div>
          </div>

          {/* RIGHT: List with Multi-Color Accents */}
          <div className="space-y-2">
            {data.map((item, i) => (
              <div
                key={item.label}
                className={`relative p-5 transition-all duration-300 border-l-4 ${hoveredIndex === i ? 'bg-white/5 translate-x-2' : 'border-white/10'
                  }`}
                style={{
                  borderLeftColor: hoveredIndex === i ? item.color : 'transparent'
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-display font-black text-2xl uppercase tracking-tighter text-white">
                    {item.label}
                  </h4>
                  <div
                    className="text-4xl font-display font-black italic transition-colors"
                    style={{
                      color: hoveredIndex === i ? item.color : 'rgba(255,255,255,0.1)'
                    }}
                  >
                    {item.value}%
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === i ? 'max-h-10 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="font-display text-[10px] tracking-widest uppercase text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Security Callout Grid */}
            <div className="mt-8 bg-zinc-950 border border-white/10 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="border-r border-white/5">
                  <div className="text-[9px] text-primary font-bold tracking-widest uppercase mb-1">Liquidity</div>
                  <div className="text-sm text-white font-display font-bold uppercase">Locked 99Y</div>
                </div>
                <div className="col-span-2 pt-4 border-t border-white/5">
                  <div className="text-[9px] text-primary font-bold tracking-widest uppercase mb-1">Official Contract Address</div>
                  <div className="flex items-center justify-between bg-black/50 p-2 border border-white/5 rounded-sm">
                    <span className="text-[10px] font-mono text-zinc-400 truncate mr-2">{TOKEN_CA}</span>
                    <button
                      onClick={copyCA}
                      className="text-primary hover:text-white transition-colors p-1"
                    >
                      <span className="material-icons text-sm">{copied ? 'check' : 'content_copy'}</span>
                    </button>
                  </div>
                </div>
                <div className="col-span-2 pt-4 border-t border-white/5 text-center">
                  <a
                    href={EXPLORER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-display font-black text-white italic tracking-widest uppercase hover:text-primary transition-colors"
                  >
                    View on <span className="text-primary italic">Solana Explorer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tokenomics;