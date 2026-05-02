import { useState, useEffect } from 'react';
import { getRandomFact } from '../../constants/factsData';
import { buildQuiz } from '../../utils/quizUtils';

const PostVoteReflection = ({ context = "evm", onComplete }) => {
  const [fact, setFact] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Get a random fact based on context (e.g., "vvpat" or "evm")
    setFact(getRandomFact(context));
    
    // Get 2 random reflection questions (shuffled automatically by buildQuiz)
    setQuestions(buildQuiz("post_ballot", "all", 2));
  }, [context]);

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
      if (onComplete) onComplete(score);
    }
  };

  if (questions.length === 0) return null;

  const q = questions[currentQ];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mt-8 animate-slide-up">
      <div className="bg-purple-700 text-white p-6 text-center">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <span>🤔</span> Post-Vote Reflection
        </h2>
        <p className="text-purple-100">Let's review what you just experienced.</p>
      </div>

      {fact && (
        <div className="p-6 bg-purple-50 border-b border-purple-100">
          <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>💡</span> Did You Know?
          </h3>
          <p className="text-gray-800 italic text-lg">"{fact.fact}"</p>
          <p className="text-xs text-slate-500 mt-2 text-right font-medium">— Source: {fact.source}</p>
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="mb-6 flex justify-between text-sm font-medium text-slate-500">
          <span>Question {currentQ + 1} of {questions.length}</span>
          <span>Score: {score}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-6">{q.question}</h3>

        <div className="space-y-3 mb-8">
          {q.options.map((opt, i) => {
            let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-lg ";
            
            if (!showExplanation) {
              btnClass += "border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-slate-500 focus:outline-none focus:ring-4 focus:ring-purple-200";
            } else {
              if (i === q.correctIndex) {
                btnClass += "bg-teal-100 border-teal-500 text-teal-800";
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
                {opt}
                {showExplanation && i === q.correctIndex && <span className="float-right text-xl">✅</span>}
                {showExplanation && i === selectedOption && i !== q.correctIndex && <span className="float-right text-xl">❌</span>}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className={`p-5 rounded-xl mb-6 shadow-inner ${selectedOption === q.correctIndex ? 'bg-teal-50 border border-teal-200' : 'bg-orange-50 border border-orange-200'}`}>
            <h4 className={`font-bold mb-2 flex items-center gap-2 ${selectedOption === q.correctIndex ? 'text-teal-800' : 'text-orange-800'}`}>
              {selectedOption === q.correctIndex ? '🎉 Correct!' : '💡 Actually...'}
            </h4>
            <p className="text-slate-500">{q.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 flex items-center gap-2"
            >
              {currentQ < questions.length - 1 ? 'Next Question ➡️' : 'Finish Reflection ✅'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostVoteReflection;
