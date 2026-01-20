import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const Header: React.FC = () => {
  const { connected, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const navItems = [
    { label: 'Utility', href: '#utility' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'The Altar', href: '#the-altar' },
    { label: 'The Roadmap', href: '#roadmap' },
  ];

  const handleConnect = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  // Format address for display
  const base58 = publicKey?.toBase58();
  const addressDisplay = base58
    ? `${base58.slice(0, 4)}...${base58.slice(-4)}`
    : 'Connect Wallet';

  return (
    <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-primary/20">
      <div className="flex items-center gap-2">
        <span className="font-display font-bold text-xl tracking-tighter italic">
          <a href="#">BAD<span className="text-primary">BITCH</span></a>
        </span>
      </div>

      <div className="hidden md:flex gap-8 font-display text-[10px] uppercase tracking-[0.2em]">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-primary transition-colors">
            {item.label}
          </a>
        ))}
      </div>

      <button
        onClick={handleConnect}
        className={`px-6 py-2 font-display text-[10px] uppercase font-bold tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,0,127,0.4)] ${connected ? 'bg-accent text-black shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'bg-primary text-white'
          }`}
      >
        {addressDisplay}
      </button>
    </nav >
  );
};

export default Header;
