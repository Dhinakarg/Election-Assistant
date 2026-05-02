import React, { useState } from 'react';
import { ROLE_PLAY_SCENARIOS } from '../../constants/rolePlayData';
import StoryMode from './StoryMode';
import ObserverChallenge from './ObserverChallenge';

const RolePlayHub = () => {
  const [activeScenario, setActiveScenario] = useState(null);

  if (activeScenario) {
    const scenario = ROLE_PLAY_SCENARIOS[activeScenario];
    const handleNavigateToQuiz = () => {
      setActiveScenario(null);
      window.dispatchEvent(new CustomEvent('navigateToQuiz'));
    };

    if (activeScenario === 'election_observer') {
      return (
        <ObserverChallenge 
          scenario={scenario} 
          onExit={() => setActiveScenario(null)} 
          onNavigateToQuiz={handleNavigateToQuiz}
        />
      );
    }

    return (
      <StoryMode 
        scenario={scenario} 
        onExit={() => setActiveScenario(null)} 
        onNavigateToQuiz={handleNavigateToQuiz}
      />
    );
  }

  const getDifficultyBadge = (id) => {
    switch(id) {
      case 'first_time_voter': return <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs font-bold">⭐ Easy</span>;
      case 'booth_officer': return <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">⭐⭐ Medium</span>;
      case 'election_observer': return <span className="px-2 py-1 bg-rose-100 text-red-800 rounded text-xs font-bold">⭐⭐⭐ Hard</span>;
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-slide-up">
      <div className="bg-indigo-800 text-white p-6 md:p-8">
        <h2 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <span>🗺️</span> Voter Journey Scenarios
        </h2>
        <p className="text-indigo-100 text-lg">Learn by doing — make decisions and see real consequences</p>
      </div>

      <div className="p-6 md:p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(ROLE_PLAY_SCENARIOS).map((scenario) => (
            <div 
              key={scenario.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => setActiveScenario(scenario.id)}
            >
              <div 
                className="h-2 w-full transition-all group-hover:h-3"
                style={{ backgroundColor: scenario.color }}
              ></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110 origin-left">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">
                  {scenario.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 mb-6 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    ⏱ {scenario.estimatedMinutes} min
                  </span>
                  <span>•</span>
                  <span>{scenario.totalStages} stages</span>
                  <span>•</span>
                  {getDifficultyBadge(scenario.id)}
                </div>

                <button
                  className="w-full py-3 rounded-lg font-bold text-white transition-all flex justify-center items-center gap-2 shadow-sm group-hover:shadow-md"
                  style={{ backgroundColor: scenario.color }}
                >
                  Start Story ➡️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolePlayHub;
