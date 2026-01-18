import React, { useState, useRef, useEffect } from 'react';

type RitualState = 'idle' | 'sacrificing' | 'revealed';

const Altar: React.FC = () => {
  const [tier, setTier] = useState(1);
  const [ritualState, setRitualState] = useState<RitualState>('idle');
  const [burnedAmount, setBurnedAmount] = useState(42882290);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sacrificeVideoRef = useRef<HTMLVideoElement>(null);
  const rewardVideoRef = useRef<HTMLVideoElement>(null);
  const lastTimeRef = useRef<number>(0);
  const requestRef = useRef<number>();

  const tiers = [
    { id: 5, label: "The Glimpse", price: 5, desc: "Cinematic Soft Tease", glow: "shadow-[0_0_30px_rgba(255,255,255,0.1)]", file: "/videos/5.mp4" },
    { id: 10, label: "The Fever", price: 10, desc: "10S Explicit Decryption", glow: "shadow-[0_0_50px_rgba(255,0,127,0.3)]", file: "/videos/10.mp4" },
    { id: 25, label: "Total Surrender", price: 25, desc: "Full 3+ Minute Feature", glow: "shadow-[0_0_80px_rgba(255,0,127,0.6)]", file: "/videos/25.mp4" }
  ];

  // Ping-pong background loop logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video || ritualState !== 'idle') return;
    let isReversing = false;
    const REVERSE_SPEED = 1;

    const animate = (now: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const deltaTime = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isReversing) {
        video.currentTime -= (deltaTime * REVERSE_SPEED);
        if (video.currentTime <= 0.05) {
          video.currentTime = 0;
          isReversing = false;
          video.play().catch(() => { });
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleEnded = () => { isReversing = true; video.pause(); };
    video.addEventListener('ended', handleEnded);
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      video.removeEventListener('ended', handleEnded);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [ritualState]);

  const handleBurn = () => {
    setRitualState('sacrificing');
    // Reveal vertical content 5 seconds into the sacrifice.mp4 flames
    setTimeout(() => {
      setRitualState('revealed');
    }, 5000);
  };

  return (
    <section id="the-altar" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-10 md:py-20">

      {/* BACKGROUND VIDEO LAYERS - Locked with absolute & h-full to prevent "doubling" bug */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Layer 1: Ambient Loop */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${ritualState === 'idle' ? 'opacity-80' : 'opacity-0'}`}
        >
          <source src="/videos/altar.mp4" type="video/mp4" />
        </video>

        {/* Layer 2: Sacrifice Inferno */}
        <video
          ref={sacrificeVideoRef}
          autoPlay
          muted
          playsInline
          key={ritualState !== 'idle' ? 'sacfricicing' : 'idle-off'} // Forces re-render to reset video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${ritualState !== 'idle' ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/videos/sacrifice.mp4" type="video/mp4" />
        </video>

        {/* Masking Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-30 px-6 w-full">

        {/* HEADER - Original Brand Style */}
        <div className={`text-center mb-12 transition-all duration-1000 ${ritualState === 'revealed' ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
          <span className="text-primary font-display text-[10px] tracking-[0.8em] font-black uppercase block mb-4 drop-shadow-[0_0_15px_#ff007f]">
            The Digital Sacrifice
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none text-white inline-block">
            THE <span className="text-primary italic">ALTAR.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">

          {/* LEFT MUSE - Mystical Overlay */}
          <div className={`hidden lg:block w-[280px] transition-all duration-1000 ${ritualState !== 'idle' ? 'opacity-0 scale-95 blur-md' : 'opacity-100'}`}>
            <div className="aspect-[3/5] border border-white/10 bg-black overflow-hidden group shadow-2xl relative">
              <img
                src="/your-aesthetic-image-1.png"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                alt="Muse"
              />
              {/* Mystical High-Class Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          {/* RITUAL INTERFACE CORE */}
          <div className="flex-1 max-w-2xl w-full relative">

            {/* STATE: IDLE SELECTOR */}
            {ritualState === 'idle' && (
              <div className="bg-black/90 border border-primary/20 p-10 md:p-14 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,1)] relative animate-in fade-in zoom-in duration-700">
                <div className="absolute -top-1 -left-1 w-10 h-10 border-t border-l border-primary" />
                <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b border-r border-primary" />

                <div className="text-center">
                  <h3 className="text-4xl font-display font-black text-white italic tracking-tighter uppercase mb-1">{tiers[tier].label}</h3>
                  <p className="text-primary font-display text-[9px] tracking-[0.3em] uppercase font-black mb-8 opacity-90">{tiers[tier].desc}</p>

                  <div className="text-7xl font-display font-black text-white tracking-tighter mb-10">
                    ${tiers[tier].price}
                  </div>

                  {/* CUSTOM FANCY SLIDER */}
                  <div className="relative w-full h-12 mb-12 flex items-center group">
                    <div className="absolute w-full h-[2px] bg-white/10" />
                    <div
                      className="absolute h-[2px] bg-primary shadow-[0_0_15px_#ff007f] transition-all duration-500"
                      style={{ width: `${(tier / 2) * 100}%` }}
                    />

                    <div className="absolute w-full flex justify-between px-[2px]">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full transition-all duration-500 border-2 ${i <= tier ? 'bg-primary border-primary shadow-[0_0_10px_#ff007f] scale-125' : 'bg-[#1a1a1a] border-white/20'}`} />
                      ))}
                    </div>

                    <input
                      type="range" min="0" max="2" step="1"
                      value={tier}
                      onChange={(e) => setTier(parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                    />
                  </div>

                  <button
                    onClick={handleBurn}
                    className={`w-full py-5 bg-black border border-white/10 text-white font-display font-black tracking-[0.5em] text-xs uppercase transition-all duration-500 hover:border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95`}
                  >
                    Initiate Sacrifice
                  </button>
                </div>
              </div>
            )}

            {/* STATE: VERTICAL REVEAL */}
            {ritualState === 'revealed' && (
              <div className="flex flex-col items-center animate-in fade-in zoom-in duration-[1000ms]">
                {/* Vertical Video Locked Frame */}
                <div className="w-[300px] md:w-[360px] aspect-[9/16] bg-black shadow-[0_0_100px_rgba(255,0,127,0.4)] border border-primary/30 relative overflow-hidden">
                  <video ref={rewardVideoRef} autoPlay controls className="w-full h-full object-cover">
                    <source src={tiers[tier].file} type="video/mp4" />
                  </video>
                </div>

                <div className="mt-12 text-center max-w-md">
                  <h3 className="text-white font-display font-black text-3xl italic tracking-widest uppercase mb-4">Relic Possessed</h3>
                  <p className="text-gray-400 font-display text-[10px] tracking-[0.2em] uppercase leading-relaxed mb-8">
                    The vision is tethered to this moment. <span className="text-white underline italic">Exfiltrate the data</span> before the ashes grow cold.
                  </p>

                  <div className="flex flex-col gap-4">
                    <a href={tiers[tier].file} download className="py-5 bg-white text-black font-display font-black tracking-[0.4em] text-xs uppercase hover:bg-primary hover:text-white transition-all text-center">
                      Save the Video
                    </a>
                    <button
                      onClick={() => { setRitualState('idle'); setTier(1); }}
                      className="py-2 text-gray-600 font-display font-black tracking-[0.3em] text-[9px] uppercase hover:text-primary transition-colors"
                    >
                      Another Sacrifice
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT MUSE - Mystical Overlay */}
          <div className={`hidden lg:block w-[280px] transition-all duration-1000 ${ritualState !== 'idle' ? 'opacity-0 scale-95 blur-md' : 'opacity-100'}`}>
            <div className="aspect-[3/5] border border-white/10 bg-black overflow-hidden group shadow-2xl relative">
              <img
                src="/your-aesthetic-image-2.png"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                alt="Muse"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>

        </div>

        {/* FOOTER STATS */}
        <div className={`text-center mt-12 transition-all duration-1000 ${ritualState === 'revealed' ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-[8px] font-display text-gray-500 tracking-[0.5em] uppercase mb-2">Sacrifice Volume</div>
          <div className="text-2xl font-display font-black text-white italic">
            {burnedAmount.toLocaleString()} <span className="text-primary tracking-normal font-normal text-sm">$BBT</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Altar;