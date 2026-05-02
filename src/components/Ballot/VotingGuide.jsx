import { useState } from 'react';
import { MOCK_ELECTIONS, getRandomElection } from '../../constants/ballotData';
import EVMSimulator from './EVMSimulator';

const VotingGuide = () => {
  const [selectedElection, setSelectedElection] = useState(null);

  const handleSelectType = (type) => {
    const filtered = MOCK_ELECTIONS.filter(e => e.type === type);
    if (filtered.length > 0) {
      const randomByType = filtered[Math.floor(Math.random() * filtered.length)];
      setSelectedElection(randomByType);
    }
  };

  const handleSurpriseMe = () => {
    setSelectedElection(getRandomElection());
  };

  if (selectedElection) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <button 
          onClick={() => setSelectedElection(null)}
          className="mb-4 text-indigo-500 hover:underline flex items-center gap-2 font-medium"
        >
          ← Back to Selection
        </button>
        <EVMSimulator election={selectedElection} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-indigo-600 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Practice Voting Guide</h2>
        <p className="text-indigo-100 text-lg">Learn how to cast your vote correctly on an EVM.</p>
      </div>
      
      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Which election would you like to practice?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
          <button 
            onClick={() => handleSelectType('Lok Sabha')}
            className="flex flex-col items-center p-8 bg-indigo-50 border-2 border-indigo-200 rounded-2xl hover:bg-indigo-100 hover:border-blue-400 transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <span className="text-5xl mb-4">🏛️</span>
            <span className="text-xl font-bold text-indigo-600">Lok Sabha Election</span>
            <span className="text-sm text-indigo-500 mt-2">(Parliamentary)</span>
          </button>
          
          <button 
            onClick={() => handleSelectType('Vidhan Sabha')}
            className="flex flex-col items-center p-8 bg-teal-50 border-2 border-teal-200 rounded-2xl hover:bg-teal-100 hover:border-teal-400 transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <span className="text-5xl mb-4">🏢</span>
            <span className="text-xl font-bold text-green-900">Vidhan Sabha Election</span>
            <span className="text-sm text-teal-700 mt-2">(State Assembly)</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-slate-300 w-16"></div>
          <span className="text-slate-500 font-medium">OR</span>
          <div className="h-px bg-slate-300 w-16"></div>
        </div>

        <div className="mt-8">
          <button 
            onClick={handleSurpriseMe}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center gap-2 mx-auto"
          >
            <span className="text-xl">🔀</span> Surprise Me
          </button>
          <p className="text-sm text-slate-500 mt-3">Loads a random election for fresh practice.</p>
        </div>
      </div>
      
      {/* Placeholder for tutorial stepper */}
      <div className="bg-gray-50 p-8 border-t border-gray-100 text-center">
        <h4 className="text-lg font-semibold text-slate-500 mb-2">How it works</h4>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">First select an election type above. You will then see a fully interactive replica of an Electronic Voting Machine (EVM). Press the blue button next to your candidate of choice, verify the VVPAT slip, and listen for the long beep confirming your vote!</p>
      </div>
    </div>
  );
};

export default VotingGuide;
