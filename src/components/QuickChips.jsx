import PropTypes from 'prop-types';

const QuickChips = ({ onChipClick }) => {
  const chips = [
    "🗓️ When is the next election?",
    "📋 How do I register to vote?",
    "🪪 What ID do I need?",
    "🗳️ How does EVM work?",
    "📍 Find my polling station",
    "⏰ Add election date to calendar",
    "🏛️ What is Model Code of Conduct?",
    "📬 How does postal ballot work?"
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-4 animate-slide-up" role="group" aria-label="Quick questions">
      {chips.map((chip, index) => (
        <button
          key={index}
          onClick={() => onChipClick(chip)}
          aria-label={`Ask: ${chip}`}
          className="text-xs sm:text-sm bg-indigo-50 text-indigo-500 border border-indigo-200 hover:bg-indigo-100 hover:border-blue-300 hover:text-indigo-600 hover:shadow-sm py-2 px-4 rounded-full transition-all duration-200 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {chip}
        </button>
      ))}
    </div>
  );
};

QuickChips.propTypes = {
  onChipClick: PropTypes.func.isRequired,
};

export default QuickChips;
