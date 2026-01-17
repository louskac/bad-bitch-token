import React, { useState } from 'react';

const Altar: React.FC = () => {
  const [isBurning, setIsBurning] = useState(false);
  const [burnedAmount, setBurnedAmount] = useState(42881290);
  const [showReward, setShowReward] = useState(false);

  const handleBurn = () => {
    setIsBurning(true);
    setTimeout(() => {
      setBurnedAmount(prev => prev + 500000);
      setIsBurning(false);
      setShowReward(true);
    }, 2000);
  };

  const percent = (burnedAmount / 100000000) * 100;

  return (
    <section id="the-altar" className="py-32 px-6 bg-black relative overflow-hidden pt-80">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER: Centralized for Ritual Feel */}
        <div className="text-center mb-20">
          <span className="text-primary font-display text-[10px] tracking-[0.8em] font-black uppercase block mb-4 animate-pulse">
            The Digital Sacrifice
          </span>
          <h2 className="text-6xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white inline-block relative">
            THE <span className="text-primary italic">ALTAR.</span>
            {/* Underline decorative */}
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT IMAGE SLOT: "The Muse" */}
          <div className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="aspect-[3/5] bg-zinc-900 border border-white/10 relative group overflow-hidden">
              <img
                src="/your-aesthetic-image-1.png"
                alt="Altar Left"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="text-[9px] font-mono text-white/20 tracking-widest uppercase text-center">Protocol // Sacrifice</div>
          </div>

          {/* CENTER: The Ritual Core */}
          <div className="lg:col-span-6 flex flex-col items-center">

            {/* The Burn Vessel */}
            <div className="w-full bg-zinc-950 border-2 border-primary/20 p-10 md:p-16 relative mb-8 backdrop-blur-xl shadow-[0_0_50px_rgba(255,0,127,0.1)]">
              {/* Corner Brackets */}
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-primary" />

              <div className="text-center space-y-8">
                <div>
                  <div className="text-[10px] font-display font-black text-gray-500 tracking-[0.4em] uppercase mb-4">Current Burn Volume</div>
                  <div className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">
                    {burnedAmount.toLocaleString()}
                    <span className="text-xl text-primary ml-2 uppercase italic">$BBT</span>
                  </div>
                </div>

                {/* Progress Bar with "Liquid" look */}
                <div className="relative h-4 bg-white/5 border border-white/10 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_20px_#ff007f] transition-all duration-1000"
                    style={{ width: `${percent}%` }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[pulse_2s_linear_infinite]" />
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-gray-400 font-display text-xs tracking-widest leading-relaxed uppercase">
                    Sacrifice <span className="text-white font-black underline decoration-primary">$10 WORTH OF BBT</span> to initiate an instant vault decryption. One random 1:1 video will be delivered to your archives.
                  </p>
                </div>

                <button
                  onClick={handleBurn}
                  disabled={isBurning}
                  className="group relative w-full py-8 bg-primary hover:bg-pink-600 transition-all duration-300 overflow-hidden active:scale-95 disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-2xl font-display font-black text-white tracking-[0.2em]">
                      {isBurning ? 'SACRIFICING...' : 'BURN TO UNLOCK'}
                    </span>
                    <span className="text-[9px] text-white/70 font-bold tracking-[0.5em] mt-1 italic">
                      THE VAULT AWAITS
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Locked Previews - Styled like a row of offerings */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {['v1.mp4', 'v2.mp4', 'v3.mp4', 'v4.mp4'].map((vid, i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-white/5 relative group cursor-not-allowed overflow-hidden">
                  {/* The Teaser Video */}
                  <video
                    src={`/videos/${vid}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover blur-md opacity-40 group-hover:opacity-60 transition-opacity"
                  />

                  {/* The Lock Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="material-icons text-white/40 text-lg group-hover:text-primary transition-colors">lock</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SLOT: "The Reward" */}
          <div className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="aspect-[3/5] bg-zinc-900 border border-white/10 relative group overflow-hidden">
              <img
                src="/your-aesthetic-image-2.png"
                alt="Altar Right"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="text-[9px] font-mono text-white/20 tracking-widest uppercase text-center italic">Burn // Access // Repeat</div>
          </div>

        </div>

        {/* Status Notification */}
        {showReward && (
          <div className="mt-12 max-w-xl mx-auto p-6 bg-primary/10 border border-primary/40 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-display font-black text-white tracking-[0.4em] uppercase">Connection Established</span>
            </div>
            <p className="text-xs text-gray-300 uppercase tracking-widest font-bold">A 1:1 Cinematic Drop has been sent to your wallet. Burn confirmed.</p>
            <button onClick={() => setShowReward(false)} className="mt-4 text-[9px] text-primary hover:text-white transition-colors uppercase font-black tracking-widest">Acknowledge</button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Altar;