import { useState, useEffect } from 'react';
import { CHECKLIST_ITEMS, getChecklistProgress } from '../../constants/checklistData';

const VoterChecklist = () => {
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem('civicguide_checklist');
    if (saved) {
      try { return JSON.parse(saved); } catch(_e) { return []; }
    }
    return [];
  });
  
  const [animatingId, setAnimatingId] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const emojis = ['🎉', '🎊', '✨', '🗳️'];
    const pieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${Math.random() * 2 + 1}s`,
      delay: `${Math.random() * 2}s`,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));
    setConfettiPieces(pieces);
  }, []);

  useEffect(() => {
    localStorage.setItem('civicguide_checklist', JSON.stringify(completedIds));
    if (completedIds.length === CHECKLIST_ITEMS.length && completedIds.length > 0) {
      const showTimer = setTimeout(() => setShowConfetti(true), 100);
      const hideTimer = setTimeout(() => setShowConfetti(false), 5100);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [completedIds]);

  const handleMarkAsDone = (id) => {
    setAnimatingId(id);
    setTimeout(() => {
      setCompletedIds(prev => {
        if (!prev.includes(id)) return [...prev, id];
        return prev;
      });
      setAnimatingId(null);
    }, 300);
  };

  const handleLearnMore = (topic) => {
    // Custom event to tell the app to switch to chat and pre-fill
    window.dispatchEvent(new CustomEvent('startChatTopic', { detail: topic }));
  };

  const handleReset = () => {
    setCompletedIds([]);
    localStorage.removeItem('civicguide_checklist');
  };

  const handleShare = () => {
    const text = "I'm ready to vote! ✅ All 7 voter readiness steps completed on CivicGuide 🗳️";
    if (navigator.share) {
      navigator.share({ title: 'Voter Readiness', text }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }
  };

  const { percentage, message, color } = getChecklistProgress(completedIds);
  const total = CHECKLIST_ITEMS.length;
  const completed = completedIds.length;
  const isFullyCompleted = completed === total;

  return (
    <div className="max-w-3xl mx-auto pb-12 relative animate-slide-up">
      {/* Confetti overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
          {confettiPieces.map((piece) => (
            <div 
              key={piece.id} 
              className="absolute text-4xl animate-fall"
              style={{
                left: piece.left,
                top: `-10vh`,
                animationDuration: piece.duration,
                animationDelay: piece.delay
              }}
            >
              {piece.emoji}
            </div>
          ))}
          <style>{`
            @keyframes fall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
            }
            .animate-fall { animation: fall linear forwards; }
            @keyframes pop {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
            .animate-pop { animation: pop 0.3s ease-out; }
          `}</style>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 mb-8 text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🗳️ Voter Readiness Checklist</h2>
        <p className="text-slate-500 mb-8 font-medium">Complete these steps before election day</p>
        
        {/* Progress Ring */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <circle 
              cx="50" cy="50" r="45" fill="none" 
              stroke={color} strokeWidth="10" strokeLinecap="round"
              strokeDasharray="283" 
              strokeDashoffset={283 - (283 * percentage) / 100}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-black text-gray-800">{completed} <span className="text-xl text-slate-400 font-medium">/ {total}</span></span>
          </div>
        </div>
        
        <p className="text-xl font-bold transition-colors duration-500" style={{ color }}>{message}</p>
        
        {/* Horizontal bar */}
        <div className="w-full h-3 bg-gray-100 rounded-full mt-6 overflow-hidden shadow-inner">
          <div 
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%`, backgroundColor: color }}
            role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"
          ></div>
        </div>
      </div>

      {/* Completion Overlay */}
      {isFullyCompleted && (
        <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-8 mb-8 text-center shadow-lg animate-pop">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-teal-800 mb-2 flex justify-center items-center gap-2">
            You are fully prepared to vote! <span className="text-teal-600">✅</span>
          </h3>
          <p className="text-teal-700 mb-6 font-medium text-lg">You've completed all readiness steps. You're ready to make your voice heard!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleShare}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center gap-2"
            >
              <span>📲</span> Share your readiness
            </button>
            <button 
              onClick={handleReset}
              className="bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-teal-100"
            >
              Reset Checklist
            </button>
          </div>
        </div>
      )}

      {/* Checklist Items */}
      <div className="space-y-4">
        {CHECKLIST_ITEMS.map((item) => {
          const isComplete = completedIds.includes(item.id);
          const isAnimating = animatingId === item.id;
          
          return (
            <div 
              key={item.id}
              className={`p-6 rounded-xl border-l-8 transition-all duration-300 ${
                isAnimating ? 'scale-[1.02] shadow-lg animate-pop' : 'shadow-sm hover:shadow-md'
              } ${
                isComplete 
                  ? 'bg-teal-50 border-l-teal-500 border-t border-r border-b border-t-teal-100 border-r-teal-100 border-b-teal-100' 
                  : 'bg-white border-l-indigo-400 border-t border-r border-b border-t-gray-200 border-r-gray-200 border-b-gray-200'
              }`}
              role="region"
              aria-label={item.title}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox Icon */}
                <button
                  aria-label={isComplete ? "Completed: " + item.title : "Mark as done: " + item.title}
                  disabled={isComplete}
                  onClick={() => handleMarkAsDone(item.id)}
                  className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-200 ${
                    isComplete ? 'bg-teal-500 border-teal-500 text-white' : 'bg-white border-slate-300 text-transparent hover:border-blue-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </button>

                <div className="flex-1">
                  <h3 className={`text-xl font-bold flex items-center gap-2 ${isComplete ? 'text-slate-500 line-through' : 'text-gray-900'}`}>
                    <span>{item.icon}</span> {item.title}
                  </h3>
                  
                  <p className={`mt-2 font-medium ${isComplete ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                  
                  {!isComplete && (
                    <div className="mt-3 p-4 bg-indigo-50 rounded-lg text-sm text-indigo-600 border border-indigo-100 shadow-inner">
                      <span className="font-bold text-base">💡 Tip:</span> {item.tip}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-3">
                    {isComplete ? (
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-100 text-teal-800 text-sm font-bold border border-teal-200">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        Completed
                      </span>
                    ) : (
                      <>
                        <button 
                          onClick={() => handleLearnMore(item.learnMoreTopic)}
                          aria-label={`Learn more about ${item.title}`}
                          className="bg-white border-2 border-gray-200 hover:border-slate-300 hover:bg-gray-50 text-slate-500 font-bold py-2 px-5 rounded-lg text-sm transition-colors flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-gray-100"
                        >
                          💬 Learn More
                        </button>
                        <button 
                          onClick={() => handleMarkAsDone(item.id)}
                          aria-label={`Mark ${item.title} as completed`}
                          className="bg-indigo-50 border-2 border-indigo-100 text-indigo-500 hover:bg-indigo-100 hover:border-indigo-200 hover:text-indigo-600 font-bold py-2 px-5 rounded-lg text-sm transition-colors flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-indigo-100"
                        >
                          ✅ Mark as Done
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoterChecklist;
