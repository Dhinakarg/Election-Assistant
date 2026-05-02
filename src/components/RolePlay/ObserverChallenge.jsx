import React, { useState, useEffect } from 'react';

// Hardcoded segments matching the story string from rolePlayData
const STORY_SEGMENTS = [
  { id: 's1', text: "It is 3 days before polling day in Sundarpur constituency. ", isViolation: false },
  { id: 's2', text: "Minister Prakash Yadav, who is also a candidate, holds a massive rally at the local government school ground after 6 PM.", isViolation: true, vId: "v1" },
  { id: 's3', text: "\n\nDuring his speech he says: ", isViolation: false },
  { id: 's4', text: "\"Vote for me or people of your caste will suffer. Our community must stick together and punish those who vote against us.\"", isViolation: true, vId: "v2" },
  { id: 's5', text: "\n\nHe then announces a new government scheme: ", isViolation: false },
  { id: 's6', text: "\"If you vote for us, we will immediately release ₹5000 to every farmer account in this district starting tomorrow.\"", isViolation: true, vId: "v3" },
  { id: 's7', text: "\n\n", isViolation: false },
  { id: 's8', text: "Government vehicles with official number plates are used to transport party workers to the venue.", isViolation: true, vId: "v4" },
  { id: 's9', text: "\n\n", isViolation: false },
  { id: 's10', text: "The rally ends at 9 PM with loudspeakers blaring campaign songs.", isViolation: true, vId: "v5" },
  { id: 's11', text: "\n\n", isViolation: false },
  { id: 's12', text: "The next morning, party workers distribute printed pamphlets showing the opponent's old criminal case photo without any context.", isViolation: true, vId: "v6" }
];

const ObserverChallenge = ({ scenario, onExit, onNavigateToQuiz }) => {
  const [foundViolations, setFoundViolations] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Requirement: completion after 5 core violations found
  useEffect(() => {
    if (foundViolations.length >= 5 && !isCompleted) {
      setTimeout(() => {
        setIsCompleted(true);
      }, 1500); // Give them time to read the last toast
    }
  }, [foundViolations, isCompleted]);

  const showToast = (message, isError = false) => {
    setToastMessage({ message, isError });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSegmentClick = (segment) => {
    if (isCompleted) return;

    if (segment.isViolation) {
      if (!foundViolations.includes(segment.vId)) {
        setFoundViolations([...foundViolations, segment.vId]);
        const violationData = scenario.scenario.violations.find(v => v.id === segment.vId);
        showToast(
          <div className="flex flex-col gap-1">
            <span className="font-bold text-lg">✅ Violation Found!</span>
            <span className="font-bold">{violationData.violation}</span>
            <span className="text-sm mt-1">{violationData.explanation}</span>
          </div>
        );
      }
    } else {
      if (segment.text.trim().length > 0) {
        showToast("⚠️ Not a violation — keep looking!", true);
      }
    }
  };

  const handleShare = () => {
    const text = `I found all 5 MCC violations! Can you? 🕵️ Try CivicGuide`;
    if (navigator.share) {
      navigator.share({ title: 'Election Observer', text }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }
  };

  const handleTryAgain = () => {
    setFoundViolations([]);
    setIsCompleted(false);
    setToastMessage(null);
  };

  if (isCompleted) {
    const allVIds = scenario.scenario.violations.map(v => v.id);
    const missedVIds = allVIds.filter(id => !foundViolations.includes(id));

    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-8 animate-slide-up">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">All Violations Found!</h2>
          <p className="text-xl font-semibold text-teal-700">Great work, Observer!</p>
        </div>

        <div className="space-y-6 mb-8">
          <h3 className="font-bold text-gray-800 text-xl border-b pb-2">Violations You Caught:</h3>
          {foundViolations.map(vId => {
            const v = scenario.scenario.violations.find(x => x.id === vId);
            return (
              <div key={v.id} className="bg-teal-50 p-4 rounded-lg border border-teal-200 shadow-sm">
                <p className="font-bold text-green-900 mb-1">🚨 {v.violation}</p>
                <p className="text-teal-800 text-sm">{v.explanation}</p>
              </div>
            );
          })}

          {missedVIds.length > 0 && (
            <>
              <h3 className="font-bold text-gray-800 text-xl border-b pb-2 mt-8">Bonus Violations You Missed:</h3>
              {missedVIds.map(vId => {
                const v = scenario.scenario.violations.find(x => x.id === vId);
                return (
                  <div key={v.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="font-bold text-slate-500 mb-1">👀 {v.violation}</p>
                    <p className="text-slate-500 text-sm">{v.explanation}</p>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button 
            onClick={handleShare}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none shadow-sm flex items-center justify-center gap-2"
          >
            📲 Share Result
          </button>
          <button 
            onClick={handleTryAgain}
            className="flex-1 bg-white border-2 border-slate-300 hover:bg-gray-50 text-slate-500 font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none"
          >
            🔄 Try Again
          </button>
          <button 
            onClick={onNavigateToQuiz}
            className="flex-1 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none"
          >
            🧠 Go to Quiz on MCC
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-8 animate-slide-up relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
          <div className={`px-6 py-4 rounded-xl shadow-2xl border-2 ${toastMessage.isError ? 'bg-yellow-50 border-yellow-400 text-yellow-800' : 'bg-white border-teal-500 text-gray-800'}`}>
            {toastMessage.message}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-t-xl shadow-sm border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={onExit}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-slate-500 transition-colors focus:outline-none"
            aria-label="Back to scenarios"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
              <span>{scenario.icon}</span> {scenario.title}
            </h2>
            <p className="text-slate-500 text-sm font-medium">Read the scenario and tap every MCC violation you can find</p>
          </div>
        </div>
        <div className="bg-indigo-50 border border-indigo-200 px-4 py-2 rounded-lg shadow-inner text-indigo-600 font-bold text-lg whitespace-nowrap">
          <span className="text-2xl">{Math.min(5, foundViolations.length)}</span> / 5 found
        </div>
      </div>

      {/* Story Card */}
      <div className="bg-white border-l border-r border-gray-200 p-6 md:p-10">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-yellow-800 font-medium rounded-r-lg shadow-sm">
          💡 <span className="font-bold">Instruction:</span> Tap on any sentence or act in the story below that you think violates the Model Code of Conduct.
        </div>

        <div className="text-lg leading-relaxed text-gray-800 font-serif" style={{ whiteSpace: 'pre-wrap' }}>
          {STORY_SEGMENTS.map((segment) => {
            const isFound = segment.isViolation && foundViolations.includes(segment.vId);
            
            return (
              <span 
                key={segment.id}
                onClick={() => handleSegmentClick(segment)}
                className={`transition-colors duration-300 ${
                  segment.text.trim().length > 0 ? 'cursor-pointer hover:bg-gray-100 rounded px-1' : ''
                } ${isFound ? 'bg-rose-200 text-red-900 font-medium hover:bg-red-300' : ''}`}
              >
                {segment.text}
              </span>
            );
          })}
        </div>
      </div>

      {/* Violations Found Panel */}
      <div className="bg-gray-50 rounded-b-xl shadow-sm border border-gray-200 p-6 border-t-0">
        <h3 className="font-bold text-slate-500 mb-4 text-sm uppercase tracking-wider">Violations Found:</h3>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, idx) => {
            const vId = `v${idx + 1}`;
            const isFound = foundViolations.includes(vId);
            const vData = scenario.scenario.violations.find(v => v.id === vId);
            
            return isFound ? (
              <div key={idx} className="bg-teal-100 text-teal-800 border border-green-300 px-3 py-1.5 rounded-full text-sm font-bold shadow-sm animate-pop flex items-center gap-1">
                <span>✅</span> {vData.violation}
              </div>
            ) : (
              <div key={idx} className="bg-gray-200 text-slate-500 border border-slate-300 px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                <span>❓</span> Unknown Violation
              </div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-pop { animation: pop 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default ObserverChallenge;
