import { useState } from 'react';

const MessageBubble = ({ message, isUser, timestamp }) => {
  const [time] = useState(
    timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const renderContent = (text) => {
    if (!text) return null;
    const parts = text.split('\n');
    return parts.map((line, index) => {
      // Process bold text
      const processBold = (str) => {
        const boldParts = str.split(/(\*\*.*?\*\*)/g);
        return boldParts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
          }
          return part;
        });
      };

      const trimmed = line.trim();
      
      // Unordered list
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        return (
          <div key={index} className="flex gap-2 ml-2 mt-1">
            <span className="text-current opacity-80">•</span>
            <span>{processBold(trimmed.substring(2))}</span>
          </div>
        );
      }
      
      // Ordered list
      if (/^\d+\.\s/.test(trimmed)) {
        const match = trimmed.match(/^(\d+\.)\s(.*)/);
        return (
          <div key={index} className="flex gap-2 ml-2 mt-1">
            <span className="text-current opacity-80 font-medium">{match[1]}</span>
            <span>{processBold(match[2])}</span>
          </div>
        );
      }
      
      // Empty line for spacing
      if (!trimmed) {
        return <div key={index} className="h-2"></div>;
      }

      // Normal paragraph
      return (
        <div key={index} className={`${index > 0 ? 'mt-1' : ''}`}>
          {processBold(line)}
        </div>
      );
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-slide-up`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-2 flex items-end mb-5">
          <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center border border-indigo-200 shadow-sm text-lg" title="CivicGuide">
            🗳️
          </div>
        </div>
      )}
      
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
        <div
          className={`px-4 py-3 rounded-2xl shadow-sm ${
            isUser
              ? 'bg-indigo-500 text-white rounded-br-sm'
              : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm'
          }`}
        >
          <div className="text-sm leading-relaxed">
            {renderContent(message)}
          </div>
        </div>
        <span className="text-[10px] text-slate-400 mt-1.5 px-1 font-medium tracking-wide">
          {time}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
