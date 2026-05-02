import { useState } from 'react';

const EVMSimulator = ({ election }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (candidate) => {
    if (hasVoted) return;
    setSelectedCandidate(candidate);
    setHasVoted(true);
    // In a full implementation, you would trigger the VVPAT animation and beep sound here.
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-w-md mx-auto relative">
      {/* Red Warning Banner */}
      <div className="bg-rose-600 text-white text-center py-2 font-bold tracking-widest text-sm uppercase sticky top-0 z-10 shadow-sm flex items-center justify-center gap-2">
        <span>⚠️</span> DEMO BALLOT - NOT A REAL ELECTION <span>⚠️</span>
      </div>

      <div className="p-6 bg-white border-b border-slate-300 text-center">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-wide">{election.title}</h2>
        <p className="text-sm font-semibold text-slate-500 mt-1">{election.constituency}</p>
      </div>

      {/* EVM Control Unit Body */}
      <div className="p-4 bg-gray-50">
        <div className="bg-white border-2 border-slate-300 rounded-lg overflow-hidden shadow-inner flex flex-col">
          {/* Header row of EVM */}
          <div className="bg-gray-200 px-3 py-2 text-xs font-bold text-slate-500 uppercase flex justify-between border-b-2 border-slate-300">
            <span className="w-8 text-center">No</span>
            <span className="flex-1 px-2">Candidate</span>
            <span className="w-12 text-center">Sym</span>
            <span className="w-16 text-center">Button</span>
          </div>

          {election.candidates.map((candidate, index) => (
            <div 
              key={candidate.id} 
              className={`flex items-center p-3 border-b border-gray-200 transition-colors ${selectedCandidate?.id === candidate.id ? 'bg-teal-50' : 'hover:bg-gray-50'}`}
            >
              {/* Serial Number */}
              <div className="w-8 text-center font-bold text-slate-500">
                {candidate.serialNumber < 10 ? `0${candidate.serialNumber}` : candidate.serialNumber}
              </div>
              
              {/* Name & Party */}
              <div className="flex-1 px-3 border-l border-r border-gray-200">
                <div className="font-bold text-gray-900 text-lg uppercase tracking-tight">{candidate.name}</div>
                <div className="text-xs text-slate-500 font-semibold">{candidate.party}</div>
              </div>
              
              {/* Symbol */}
              <div className="w-12 flex items-center justify-center text-3xl">
                {candidate.symbol}
              </div>
              
              {/* Button Section */}
              <div className="w-16 flex items-center justify-center border-l border-gray-200 pl-3 gap-2">
                {/* Red indicator LED */}
                <div className={`w-3 h-3 rounded-full shadow-inner border border-slate-300 ${selectedCandidate?.id === candidate.id ? 'bg-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-slate-300'}`}></div>
                {/* Blue Voting Button */}
                <button
                  onClick={() => handleVote(candidate)}
                  disabled={hasVoted}
                  aria-label={`Vote for ${candidate.name}`}
                  className="w-8 h-8 rounded-full bg-indigo-500 border-b-4 border-indigo-600 active:border-b-0 active:translate-y-1 shadow-md disabled:bg-blue-400 disabled:border-indigo-500 disabled:cursor-not-allowed transition-all"
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {hasVoted && (
        <div className="p-4 bg-teal-50 text-teal-800 text-center border-t border-teal-200 animate-slide-up">
          <p className="font-bold flex items-center justify-center gap-2 text-lg">
            <span>✅</span> Vote Recorded Successfully
          </p>
          <p className="text-sm mt-1">You voted for {selectedCandidate.name}. Listen for the long BEEP.</p>
          <button 
            onClick={() => { setHasVoted(false); setSelectedCandidate(null); }}
            className="mt-4 text-sm font-semibold text-indigo-500 hover:text-indigo-600 hover:underline"
          >
            Reset Practice Machine
          </button>
        </div>
      )}
    </div>
  );
};

export default EVMSimulator;
