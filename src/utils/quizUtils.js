import { QUIZ_BANK } from '../constants/quizData';

export const buildQuiz = (topic, difficulty, count) => {
  const allQuestions = QUIZ_BANK[topic].questions;
  
  // Filter by difficulty if not "all"
  const filtered = difficulty === "all" 
    ? allQuestions
    : allQuestions.filter(q => q.difficulty === difficulty);
  
  // Shuffle using Fisher-Yates algorithm (simplified for brevity)
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  
  // Take only the requested count
  const selected = shuffled.slice(0, count);
  
  // Shuffle options within each question 
  // but track new correct index
  return selected.map(q => {
    const optionsWithIndex = q.options.map((opt, i) => ({
      text: opt,
      isCorrect: i === q.correctIndex
    }));
    const shuffledOptions = optionsWithIndex
      .sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: shuffledOptions.map(o => o.text),
      correctIndex: shuffledOptions.findIndex(o => o.isCorrect)
    };
  });
};

// Get feedback message based on score (no API needed)
export const getFeedbackMessage = (score, total, topic) => {
  const pct = (score / total) * 100;
  const topicLabel = QUIZ_BANK[topic]?.label || "this topic";
  
  if (pct === 100) return `Perfect score! You're a true expert on ${topicLabel}. You clearly pay attention to civic matters!`;
  if (pct >= 80) return `Great job! You have a strong understanding of ${topicLabel}. Just a couple of things to brush up on.`;
  if (pct >= 60) return `Good effort! You know the basics of ${topicLabel} but there's room to strengthen your knowledge.`;
  if (pct >= 40) return `Keep going! ${topicLabel} has some tricky rules. Review the explanations and try again.`;
  return `Don't worry! Civic education takes time. Read through the explanations carefully and give it another shot.`;
};

// Get badge based on score percentage
export const getBadge = (pct) => {
  if (pct >= 90) return { label: "Election Expert", icon: "🥇", color: "#FFD700" };
  if (pct >= 70) return { label: "Civic Champion", icon: "🥈", color: "#C0C0C0" };
  if (pct >= 50) return { label: "Informed Voter", icon: "🥉", color: "#CD7F32" };
  return { label: "Keep Learning", icon: "📚", color: "#1a73e8" };
};
