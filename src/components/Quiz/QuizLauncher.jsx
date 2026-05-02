import { useState } from 'react';
import { QUIZ_BANK } from '../../constants/quizData';
import { buildQuiz } from '../../utils/quizUtils';
import QuizInterface from './QuizInterface';

const QuizLauncher = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [difficulty, setDifficulty] = useState('all');
  const [questionCount, setQuestionCount] = useState(5);
  const [quizState, setQuizState] = useState('menu'); // 'menu', 'playing'
  const [activeQuiz, setActiveQuiz] = useState([]);

  const availableCount = selectedTopic 
    ? (difficulty === 'all' 
        ? QUIZ_BANK[selectedTopic].questions.length 
        : QUIZ_BANK[selectedTopic].questions.filter(q => q.difficulty === difficulty).length)
    : 10;

  const sliderMax = Math.max(1, availableCount);
  const sliderMin = Math.min(3, sliderMax);
  const displayQuestionCount = Math.min(questionCount, sliderMax);

  const handleStartQuiz = () => {
    if (!selectedTopic) return;
    const newQuiz = buildQuiz(selectedTopic, difficulty, displayQuestionCount);
    setActiveQuiz(newQuiz);
    setQuizState('playing');
  };

  if (quizState === 'playing') {
    return (
      <QuizInterface 
        questions={activeQuiz} 
        topic={selectedTopic} 
        onExit={() => setQuizState('menu')} 
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-indigo-600 text-white p-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span>🧠</span> Civic Knowledge Challenge
        </h2>
        <p className="text-indigo-100 mt-2">Test your understanding of Indian elections and voting rules.</p>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">1. Select a Topic</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {Object.entries(QUIZ_BANK).map(([key, topic]) => (
            <button
              key={key}
              onClick={() => setSelectedTopic(key)}
              className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                selectedTopic === key 
                  ? 'border-indigo-400 bg-indigo-50' 
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: `${topic.color}20` }}
              >
                {topic.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{topic.label}</h4>
                <p className="text-sm text-slate-500 mt-1">{topic.description}</p>
                <p className="text-xs font-medium text-slate-400 mt-2">{topic.questions.length} questions available</p>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">2. Select Difficulty</h3>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {['all', 'easy', 'medium', 'hard'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-md capitalize transition-colors ${
                    difficulty === level 
                      ? 'bg-white text-indigo-500 shadow-sm' 
                      : 'text-slate-500 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            {selectedTopic && (
              <p className="text-xs text-indigo-500 mt-2 font-medium">
                {availableCount} {availableCount === 1 ? 'question' : 'questions'} available for this difficulty
              </p>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">3. Number of Questions</h3>
            <div className="flex gap-4 items-center">
              <input 
                type="range" 
                min={sliderMin} 
                max={sliderMax} 
                step="1"
                value={displayQuestionCount}
                onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                disabled={!selectedTopic || availableCount === 0}
              />
              <span className="font-bold text-xl text-indigo-600 w-8 text-center">
                {availableCount === 0 ? 0 : displayQuestionCount}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex justify-end">
          <button
            onClick={handleStartQuiz}
            disabled={!selectedTopic || availableCount === 0}
            className="bg-indigo-500 hover:bg-indigo-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm flex items-center gap-2 text-lg"
          >
            Start Quiz 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLauncher;
