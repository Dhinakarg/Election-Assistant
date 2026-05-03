import { useState } from 'react';
import PropTypes from 'prop-types';

const StoryMode = ({ scenario, onExit, onNavigateToQuiz }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [stageHistory, setStageHistory] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const stage = scenario.stages[currentStageIndex];

  const handleChoiceSelect = (choice) => {
    if (showFeedback) return; // Prevent multiple clicks
    
    setSelectedChoiceId(choice.id);
    setShowFeedback(true);
    
    const isCorrect = choice.isCorrect;
    if (isCorrect) {
      setScore(s => s + 1);
    }

    setStageHistory(prev => [
      ...prev,
      {
        title: stage.title,
        isCorrect: isCorrect
      }
    ]);

    setTimeout(() => {
      setShowNextButton(true);
    }, 2000);
  };

  const handleNextStage = () => {
    if (currentStageIndex < scenario.stages.length - 1) {
      setCurrentStageIndex(c => c + 1);
      setSelectedChoiceId(null);
      setShowFeedback(false);
      setShowNextButton(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleTryAgain = () => {
    setCurrentStageIndex(0);
    setScore(0);
    setSelectedChoiceId(null);
    setShowFeedback(false);
    setShowNextButton(false);
    setStageHistory([]);
    setIsFinished(false);
  };

  if (isFinished) {
    const finalScore = score;
    const maxScore = scenario.stages.length;
    
    const { label, icon } = (() => {
      if (finalScore === maxScore) return { label: "🏆 Perfect Civic Citizen!", icon: "🏆" };
      if (finalScore >= maxScore - 1) return { label: "⭐ Great Decision Maker!", icon: "⭐" };
      if (finalScore >= maxScore / 2) return { label: "👍 Good effort — review the explanations", icon: "👍" };
      return { label: "📚 Keep practicing", icon: "📚" };
    })();

    const xpEarned = finalScore * 10;

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-8 animate-slide-up">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Story Complete!</h2>
          <p className="text-xl font-semibold text-slate-500">You made {finalScore} out of {maxScore} correct decisions</p>
          <div className="mt-4 text-2xl font-bold text-indigo-500 flex items-center justify-center gap-2">
            {icon} {label}
          </div>
          <div className="mt-4 inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full border border-yellow-300 shadow-sm">
            +{xpEarned} XP Earned
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-inner">
          <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">Stage Review:</h3>
          <div className="space-y-3">
            {stageHistory.map((historyItem, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                <div className="text-xl">
                  {historyItem.isCorrect ? "✅" : "❌"}
                </div>
                <div className="flex-1 font-medium text-slate-500">
                  {index + 1}. {historyItem.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={handleTryAgain}
            className="w-full bg-white border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-100"
          >
            🔄 Try Again
          </button>
          <button 
            onClick={onExit}
            className="w-full bg-indigo-500 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            🎭 Try Another Scenario
          </button>
          <button 
            onClick={onNavigateToQuiz}
            className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            🧠 Go to Quiz
          </button>
        </div>
      </div>
    );
  }

  const selectedChoice = stage.choices.find(c => c.id === selectedChoiceId);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-slide-up pb-8">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onExit}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-slate-500 transition-colors focus:outline-none"
            aria-label="Back to scenarios"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="font-bold text-gray-800 hidden sm:inline">{scenario.title}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold text-slate-500 mb-1">
            Stage {currentStageIndex + 1} of {scenario.stages.length}
          </span>
          <div className="flex gap-1.5">
            {scenario.stages.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === currentStageIndex ? 'bg-indigo-500 scale-125' : i < currentStageIndex ? 'bg-blue-300' : 'bg-slate-300'}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm font-bold text-slate-500 shadow-sm">
          ✅ {score} correct so far
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Scene Card */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 shadow-sm mb-8 relative">
          <div className="text-6xl text-center mb-4">{stage.image}</div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{stage.title}</h2>
          <div className="bg-white p-5 rounded-xl border border-indigo-200 text-slate-500 text-lg leading-relaxed shadow-sm">
            {stage.scene}
          </div>
          <div className="mt-4 flex items-center gap-2 bg-indigo-100 w-max px-3 py-1.5 rounded-full border border-indigo-200">
            <span className="text-xl">{scenario.character.avatar}</span>
            <span className="font-bold text-indigo-600 text-sm">{scenario.character.name}</span>
          </div>
        </div>

        {/* Choices Section */}
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-yellow-800 font-medium rounded-r-lg shadow-sm">
            💡 <span className="font-bold">Instruction:</span> Choose the best action to take in this scenario.
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-4 px-2">What should {scenario.character.name} do?</h3>
          
          <div className="space-y-3">
            {stage.choices.map((choice) => {
              let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-lg ";
              
              if (!showFeedback) {
                btnClass += "border-gray-200 hover:border-blue-400 hover:bg-indigo-50 text-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-100 shadow-sm";
              } else {
                if (choice.isCorrect) {
                  btnClass += "bg-teal-100 border-teal-500 text-green-900 shadow-sm";
                } else if (choice.id === selectedChoiceId) {
                  btnClass += "bg-rose-100 border-rose-500 text-red-900 opacity-90";
                } else {
                  btnClass += "bg-white border-gray-200 text-slate-400 opacity-50";
                }
              }

              return (
                <button
                  key={choice.id}
                  onClick={() => handleChoiceSelect(choice)}
                  disabled={showFeedback}
                  className={btnClass}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span>{choice.text}</span>
                    {showFeedback && choice.isCorrect && <span className="text-2xl flex-shrink-0">✅</span>}
                    {showFeedback && choice.id === selectedChoiceId && !choice.isCorrect && <span className="text-2xl flex-shrink-0">❌</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback & Consequence Section */}
          {showFeedback && selectedChoice && (
            <div className="mt-6 space-y-4 animate-slide-up">
              <div className={`p-5 rounded-xl border-l-4 shadow-sm ${selectedChoice.isCorrect ? 'bg-teal-50 border-teal-500 text-teal-800' : 'bg-rose-50 border-rose-500 text-red-800'}`}>
                <p className="font-medium leading-relaxed">{selectedChoice.feedback}</p>
              </div>
              
              <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 shadow-sm italic text-amber-900">
                <span className="font-bold not-italic">📖 What happens next:</span> {selectedChoice.consequence}
              </div>

              {showNextButton && (
                <div className="pt-4 flex justify-end animate-slide-up">
                  <button
                    onClick={handleNextStage}
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300 flex items-center gap-2"
                  >
                    {currentStageIndex < scenario.stages.length - 1 ? 'Next Stage ➡️' : 'Finish Story 🏁'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

StoryMode.propTypes = {
  scenario: PropTypes.shape({
    title: PropTypes.string.isRequired,
    character: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    stages: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      scene: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
        feedback: PropTypes.string.isRequired,
        consequence: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
  }).isRequired,
  onExit: PropTypes.func.isRequired,
  onNavigateToQuiz: PropTypes.func.isRequired,
};

export default StoryMode;
