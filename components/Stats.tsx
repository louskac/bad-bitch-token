import React from 'react';
import { useTokenData } from '../hooks/useTokenData';

const Stats: React.FC = () => {
  const tokenData = useTokenData();
  const targetMktCap = 100000; // $100k target

  const mktCap = tokenData.mktCap || 0;
  const progressPercent = Math.min((mktCap / targetMktCap) * 100, 100);

  const stats = [
    {
      label: 'Sacrifice Volume',
      value: tokenData.totalBurned !== null ? `${Math.floor(tokenData.totalBurned).toLocaleString()}` : 'LOADING...',
      detail: 'TOTAL $BBT REMOVED',
      accent: false
    },
    {
      label: tokenData.ready ? 'Current MKT CAP' : 'Next Milestone',
      value: tokenData.ready ? `$${Math.round(mktCap).toLocaleString()}` : `$${(targetMktCap / 1000)}k MKT CAP`,
      detail: tokenData.ready ? 'REAL-TIME DATA' : 'PRIVATE LIFESTYLE VLOG DROP',
      accent: true,
      hasProgress: true
    },
    { label: 'Security', value: 'LIQUIDITY LOCKED', detail: '100% BURNED & VERIFIED', accent: false },
  ];

  return (
    <section className="px-4 md:px-16 mt-12 md:-mt-16 pb-20 relative z-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative group overflow-hidden backdrop-blur-md border transition-all duration-500 ${stat.accent
              ? 'bg-primary/10 border-primary/50 shadow-[0_0_30px_rgba(255,0,127,0.15)]'
              : 'bg-black/40 border-white/10 hover:border-white/20'
              } p-6 md:p-8 text-center hover:-translate-y-2`}
          >
            <div className="relative z-10">
              <div className="text-[10px] text-gray-400 font-display uppercase tracking-[0.4em] mb-3">{stat.label}</div>
              <div className={`text-2xl md:text-4xl font-display font-black tracking-tighter mb-2 text-white ${!tokenData.ready && stat.accent ? 'animate-pulse opacity-50' : ''}`}>
                {stat.value}
              </div>

              {stat.hasProgress && (
                <div className="w-full h-1 bg-white/10 my-4 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_#ff007f]"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
              <div className={`text-[10px] font-display font-bold tracking-widest ${stat.accent ? 'text-primary' : 'text-gray-500'}`}>
                {stat.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;