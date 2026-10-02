
import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? (process.env?.VITE_GEMINI_API_KEY || process.env?.API_KEY) : '');
  if (!apiKey) return null;
  if (!aiInstance) {
    try {
      aiInstance = new GoogleGenAI({ apiKey });
    } catch (e) {
      console.warn("Failed to initialize GoogleGenAI client:", e);
      return null;
    }
  }
  return aiInstance;
}

export async function getMarketInsight(query: string) {
  try {
    const ai = getAiClient();
    if (!ai) {
      return "The Oracle is meditating. The energy is rising.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User wants to know about: ${query}. 
      Context: You are the AI assistant for "Bad Bitch" ($BBT). 
      Personality: Gritty, bold, street-smart, unapologetic, but luxury-focused. 
      Theme: Burning offerings, scarcity, gains, high-energy luxury ecosystem. 
      Rule: Never give financial advice. Do NOT mention words like "token", "web3", or "crypto". Just high-octane brand hype and ecosystem explanations.`,
      config: {
        temperature: 0.9,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The network is congested with beta energy. Try again when your signal is stronger.";
  }
}
