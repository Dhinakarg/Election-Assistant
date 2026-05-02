import { useState } from 'react';
import { getFeedbackMessage, getBadge } from '../../utils/quizUtils';
import { QUIZ_BANK } from '../../constants/quizData';

const QuizInterface = ({ questions, topic, onExit }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (index) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === questions[currentQ].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const pct = (score / questions.length) * 100;
    const badge = getBadge(pct);
    const feedback = getFeedbackMessage(score, questions.length, topic);

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden text-center p-8 animate-slide-up">
        <div className="text-6xl mb-4">{badge.icon}</div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: badge.color }}>{badge.label}</h2>
        <p className="text-xl font-semibold text-slate-500 mb-6">
          You scored {score} out of {questions.length} ({Math.round(pct)}%)
        </p>
        <p className="text-slate-500 mb-8">{feedback}</p>
        <button 
          onClick={onExit}
          className="bg-indigo-500 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Return to Menu
        </button>
      </div>
    );
  }

  const q = questions[currentQ];
  const topicData = QUIZ_BANK[topic];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-slide-up">
      <div className="p-6 text-white flex justify-between items-center" style={{ backgroundColor: topicData.color }}>
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span>{topicData.icon}</span> {topicData.label} Quiz
        </h2>
        <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
          Question {currentQ + 1} of {questions.length}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider
            ${q.difficulty === 'easy' ? 'bg-teal-100 text-teal-700' : 
              q.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' : 
              'bg-rose-100 text-rose-700'}`}
          >
            {q.difficulty}
          </span>
          <span className="font-medium text-slate-500">Current Score: {score}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-snug">{q.question}</h3>

        <div className="space-y-3 mb-8">
          {q.options.map((opt, i) => {
            let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-lg ";
            
            if (!showExplanation) {
              btnClass += "border-gray-200 hover:border-blue-400 hover:bg-indigo-50 text-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";
            } else {
              if (i === q.correctIndex) {
                btnClass += "bg-teal-100 border-teal-500 text-teal-800 shadow-sm";
              } else if (i === selectedOption) {
                btnClass += "bg-rose-100 border-rose-500 text-red-800";
              } else {
                btnClass += "border-gray-200 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                disabled={showExplanation}
                className={btnClass}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {showExplanation && i === q.correctIndex && <span className="text-2xl">✅</span>}
                  {showExplanation && i === selectedOption && i !== q.correctIndex && <span className="text-2xl">❌</span>}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mb-8 animate-slide-up">
            <div className={`p-5 rounded-t-xl border-t border-l border-r ${selectedOption === q.correctIndex ? 'bg-teal-50 border-teal-200 text-teal-800' : 'bg-orange-50 border-orange-200 text-orange-800'}`}>
              <h4 className="font-bold mb-1">
                {selectedOption === q.correctIndex ? 'Excellent! That is correct.' : 'Not quite right.'}
              </h4>
              <p className="text-slate-500 leading-relaxed">{q.explanation}</p>
            </div>
            {q.funFact && (
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-b-xl">
                <p className="text-sm text-indigo-600"><span className="font-bold">💡 Fun Fact:</span> {q.funFact}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center border-t border-gray-100 pt-6">
          <button
            onClick={onExit}
            className="text-slate-500 hover:text-gray-800 font-medium hover:underline px-4 py-2"
          >
            Quit Quiz
          </button>
          
          {showExplanation && (
            <button
              onClick={handleNext}
              className="bg-indigo-500 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              {currentQ < questions.length - 1 ? 'Next Question ➡️' : 'See Final Score 🏆'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;
