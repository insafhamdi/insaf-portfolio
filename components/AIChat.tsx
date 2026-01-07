
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: "Hi! I'm Insaf's AI assistant. Ask me anything about her research, skills, or experience!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a professional yet friendly AI assistant for Insaf Hamdi's personal portfolio. 
          Use the following context to answer questions:
          - Insaf is an NLP & Generative AI Engineer.
          - Recent milestone: Main author of a paper at IEEE ICTAI 2025 about automated scoring for the Hayling Test.
          - Experience: ICube Strasbourg, A2SV (African to Silicon Valley), Sofrecom, Deaf Square.
          - Skills: LLMs, LangChain, Python, PyTorch, Research.
          - Education: Statistics and Information Analysis background.
          - Solved 270+ algorithmic problems on advanced topics.
          - Personality: Resilient, dedicated, hard-working, and collaborative.
          Keep answers concise and highlight her technical prowess and achievements.`,
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Try asking about her IEEE paper or her Python skills!";
      setMessages(prev => [...prev, { role: 'bot', content: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "The connection is a bit fuzzy. Did you know Insaf solved 270+ problems on LeetCode-style platforms? She's definitely a problem solver!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <MessageSquare size={24} />
          <span className="absolute -top-12 right-0 bg-white text-brand-900 text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Ask about Insaf
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 glass border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="p-4 bg-brand-600 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold text-sm">Insaf AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-brand-500 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-2 rounded-2xl rounded-bl-none">
                  <Loader2 size={16} className="animate-spin text-brand-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-900 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-slate-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-brand-500 text-white outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-brand-500 text-white p-2 rounded-lg hover:bg-brand-600 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
