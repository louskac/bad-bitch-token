
import React, { useState } from 'react';
import { getMarketInsight } from '../services/geminiService';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Ask me about the manifesto or the burning ritual. No soft questions." }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getMarketInsight(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || "Quiet... the gains are loading." }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="glass-panel w-80 md:w-96 flex flex-col shadow-2xl border-primary/40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-primary flex justify-between items-center">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-white">Gemini Insights</span>
            <button onClick={() => setIsOpen(false)} className="material-icons text-sm">close</button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4 font-sans text-sm scrollbar-thin scrollbar-thumb-primary">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg ${m.role === 'user' ? 'bg-accent text-black ml-8' : 'bg-white/5 text-white mr-8 border border-white/10'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-primary animate-pulse text-xs font-display">CONSULTING THE ORACLE...</div>}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask the Bitch..."
              className="flex-grow bg-black/50 border border-white/10 px-3 py-2 text-xs focus:outline-none focus:border-primary transition-colors"
            />
            <button onClick={handleSend} className="bg-primary px-3 py-2 hover:bg-pink-600 transition-colors">
              <span className="material-icons text-sm">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_#ff007f] hover:scale-110 transition-transform active:scale-95 animate-pulse-neon"
        >
          <span className="material-icons text-3xl">auto_awesome</span>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;
