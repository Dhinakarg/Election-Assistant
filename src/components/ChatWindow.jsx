import { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import QuickChips from './QuickChips';
import CalendarButton from './CalendarButton';
import { callGemini } from '../services/geminiApi';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const ChatWindow = () => {
  const { language } = useLanguage();
  const { accessToken } = useAuth();
  const INITIAL_MESSAGE = { 
    id: 1, 
    text: "👋 Hi! I'm CivicGuide. I can help you understand how elections work, registration steps, voting timelines, and more. What would you like to know?", 
    isUser: false 
  };

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('civicGuideChatHistory');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse local storage chat history", e);
      }
    }
    return [INITIAL_MESSAGE];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isSendingRef = useRef(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    localStorage.setItem('civicGuideChatHistory', JSON.stringify(messages));
    scrollToBottom();
  }, [messages, isLoading]);

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    localStorage.removeItem('civicGuideChatHistory');
  };

  const handleSend = async (forcedText = null) => {
    if (isSendingRef.current) return;
    
    const textToSend = typeof forcedText === 'string' ? forcedText : input;
    if (!textToSend.trim()) return;
    
    isSendingRef.current = true;
    const userText = textToSend.trim();
    const newUserMessage = { id: Date.now(), text: userText, isUser: true };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const langInstruction = {
        en: "",
        hi: "Respond in Hindi (Devanagari script).",
        ta: "Respond in Tamil script.",
        te: "Respond in Telugu script.",
        kn: "Respond in Kannada script."
      };
      const instruction = langInstruction[language] ? `${langInstruction[language]}\n` : "";
      
      const responseText = await callGemini(instruction + userText, messages);
      
      setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, isUser: false }]);
    } finally {
      setIsLoading(false);
      isSendingRef.current = false;
    }
  };

  useEffect(() => {
    const handleStartChatTopic = (e) => {
      const topic = e.detail;
      if (topic) {
        handleSend(topic);
      }
    };
    
    window.addEventListener('startChatTopic', handleStartChatTopic);
    return () => window.removeEventListener('startChatTopic', handleStartChatTopic);
  }, [language]); // Depend on language to ensure latest instruction is used if needed, but handleSend is stable.

  const handleChipClick = (text) => {
    handleSend(text);
  };

  const parseGeminiResponse = (responseText, isUser) => {
    if (isUser || !responseText) return null;
    const text = responseText.toLowerCase();
    const actions = [];

    const dateMatch = responseText.match(/(\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}|\d{4}-\d{2}-\d{2})/i);
    const hasDateWords = /(election day|deadline|last date|schedule)/i.test(text);
    
    if (dateMatch || hasDateWords) {
      const extractedDate = dateMatch ? dateMatch[0] : new Date().toISOString().split('T')[0];
      actions.push(
        <div key="calendar" className="inline-block mt-[-12px] mb-[-4px]">
          <CalendarButton 
            accessToken={accessToken} 
            eventDetails={{ 
              title: "Election Reminder", 
              date: extractedDate, 
              description: "Reminder from CivicGuide about an important election date." 
            }} 
          />
        </div>
      );
    }

    if (/(timeline|steps|process)/i.test(text)) {
      actions.push(
        <button 
          key="timeline"
          onClick={() => window.dispatchEvent(new CustomEvent('openTimelineModal'))}
          className="text-xs bg-white border border-purple-200 text-purple-700 hover:bg-purple-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-colors shadow-sm"
        >
          <span className="text-base">📅</span> View Full Timeline →
        </button>
      );
    }

    if (/(register|registration)/i.test(text)) {
      actions.push(
        <a 
          key="register"
          href="https://electoralsearch.eci.gov.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 font-medium transition-colors shadow-sm"
        >
          <span className="text-base">📋</span> Check Registration Status
        </a>
      );
    }

    if (actions.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 ml-12 mb-4 mt-[-8px] animate-slide-up z-10 relative">
        {actions}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
      <div className="bg-indigo-600 text-white p-4 font-semibold flex items-center justify-between z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Assistant Chat
        </div>
        <button 
          onClick={handleReset}
          aria-label="Reset chat"
          className="text-xs bg-indigo-700 hover:bg-indigo-800 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Chat
        </button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map(msg => (
          <div key={msg.id}>
            <MessageBubble message={msg.text} isUser={msg.isUser} timestamp={msg.timestamp} accessToken={accessToken} />
            {parseGeminiResponse(msg.text, msg.isUser)}
          </div>
        ))}
        {messages.length === 1 && (
          <QuickChips onChipClick={handleChipClick} />
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-gray-800 border border-gray-200 shadow-sm rounded-2xl rounded-bl-none p-4 max-w-[70%]">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 bg-white border-t border-gray-200 z-10">
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            disabled={isLoading}
            aria-label="Chat input message"
            className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent disabled:bg-gray-100 disabled:text-slate-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            className="bg-indigo-500 hover:bg-indigo-500 text-white font-medium py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
