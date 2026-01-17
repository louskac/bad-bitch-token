
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getMarketInsight(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User wants to know about: ${query}. 
      Context: You are the AI assistant for "Bad Bitch Token" (BBT). 
      Personality: Gritty, bold, street-smart, unapologetic, but luxury-focused. 
      Theme: Token burning, scarcity, gains, high-energy crypto ecosystem. 
      Rule: Never give financial advice, just high-octane brand hype and ecosystem explanations.`,
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
