
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Sirz Growth Labs. I'm your Digital Marketing Strategist. Tell me your revenue goals or current ROAS, and I'll help you craft a scaling roadmap." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Voice Recognition Setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current?.start();
    }
  };

  const handleSend = async () => {
    const messageToSend = input.trim();
    if (!messageToSend || isLoading) return;

    const userMessage: Message = { role: 'user', text: messageToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getAIResponse(messageToSend, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 group ${isOpen ? 'rotate-90 bg-slate-800' : ''}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
             </span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] sm:w-[450px] h-[650px] bg-white rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-8 fade-in duration-500">
          <div className="p-6 bg-slate-900 text-white">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-black text-xl tracking-tight">Growth Consultant</h4>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Powered by Gemini</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-medium">Expert advice on scaling your ad spend.</p>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-2xl text-[14px] leading-relaxed font-medium transition-all ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200/50' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex space-x-1.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.2s]" />
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white border-t border-slate-100">
            {isListening && (
              <div className="flex items-center justify-center space-x-3 mb-4 animate-pulse">
                <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-1.5 h-10 bg-blue-500 rounded-full"></div>
                <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Listening...</span>
              </div>
            )}
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleListening}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isListening ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </button>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about ROAS, platforms, or budget..." 
                className="flex-1 px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-medium"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white disabled:opacity-50 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
