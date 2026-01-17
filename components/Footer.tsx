
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-16 mb-16">
          {['alternate_email', 'chat', 'public', 'star'].map((icon) => (
            <a key={icon} href="#" className="group transition-transform hover:-translate-y-2 duration-300">
              <i className="material-icons chrome-icon text-5xl opacity-80 group-hover:opacity-100">{icon}</i>
            </a>
          ))}
        </div>

        <div className="font-display text-[9px] uppercase tracking-[0.6em] text-gray-500 text-center mb-10 max-w-lg leading-loose">
          © 2024 BAD BITCH TOKEN ECOSYSTEM. ALL RIGHTS RESERVED. 
          STREET CRED IS NOT FINANCIAL ADVICE.
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

        <div className="mt-10 flex flex-wrap justify-center gap-12 text-[10px] font-display uppercase tracking-widest text-gray-600">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of War</a>
          <a href="#" className="hover:text-primary transition-colors">Smart Contract</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
