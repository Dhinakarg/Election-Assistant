import { QUIZ_BANK } from '../constants/quizData';

/**
 * Shuffles an array using the Fisher-Yates algorithm for better randomness.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} A new shuffled array.
 */
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

/**
 * Builds a dynamic quiz based on topic and difficulty.
 * 
 * @param {string} topic - The key for the QUIZ_BANK.
 * @param {string} difficulty - "easy", "medium", "hard", or "all".
 * @param {number} count - Number of questions to return.
 * @returns {Array} List of processed quiz questions.
 */
export const buildQuiz = (topic, difficulty, count) => {
  const allQuestions = QUIZ_BANK[topic]?.questions || [];
  
  // Filter by difficulty if not "all"
  const filtered = difficulty === "all" 
    ? allQuestions
    : allQuestions.filter(q => q.difficulty === difficulty);
  
  // Shuffle using Fisher-Yates for fair distribution
  const shuffled = shuffleArray(filtered);
  
  // Take only the requested count
  const selected = shuffled.slice(0, count);
  
  // Shuffle options within each question and track new correct index
  return selected.map(q => {
    const optionsWithIndex = q.options.map((opt, i) => ({
      text: opt,
      isCorrect: i === q.correctIndex
    }));
    
    const shuffledOptions = shuffleArray(optionsWithIndex);
    
    return {
      ...q,
      options: shuffledOptions.map(o => o.text),
      correctIndex: shuffledOptions.findIndex(o => o.isCorrect)
    };
  });
};

/**
 * Generates an encouraging feedback message based on the score.
 * 
 * @param {number} score - Number of correct answers.
 * @param {number} total - Total number of questions.
 * @param {string} topic - Topic identifier.
 * @returns {string} The feedback message.
 */
export const getFeedbackMessage = (score, total, topic) => {
  const pct = (score / total) * 100;
  const topicLabel = QUIZ_BANK[topic]?.label || "this topic";
  
  if (pct === 100) return `Perfect score! You're a true expert on ${topicLabel}. You clearly pay attention to civic matters!`;
  if (pct >= 80) return `Great job! You have a strong understanding of ${topicLabel}. Just a couple of things to brush up on.`;
  if (pct >= 60) return `Good effort! You know the basics of ${topicLabel} but there's room to strengthen your knowledge.`;
  if (pct >= 40) return `Keep going! ${topicLabel} has some tricky rules. Review the explanations and try again.`;
  return `Don't worry! Civic education takes time. Read through the explanations carefully and give it another shot.`;
};

/**
 * Returns a badge object (label, icon, color) based on performance percentage.
 * 
 * @param {number} pct - Percentage score (0-100).
 * @returns {Object} The badge details.
 */
export const getBadge = (pct) => {
  if (pct >= 90) return { label: "Election Expert", icon: "🥇", color: "#FFD700" };
  if (pct >= 70) return { label: "Civic Champion", icon: "🥈", color: "#C0C0C0" };
  if (pct >= 50) return { label: "Informed Voter", icon: "🥉", color: "#CD7F32" };
  return { label: "Keep Learning", icon: "📚", color: "#1a73e8" };
};
