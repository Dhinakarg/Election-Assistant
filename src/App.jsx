import { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import ElectionTimeline from './components/ElectionTimeline';
import LoginButton from './components/LoginButton';
import QuizLauncher from './components/Quiz/QuizLauncher';
import VotingGuide from './components/Ballot/VotingGuide';
import VoterChecklist from './components/Checklist/VoterChecklist';
import RolePlayHub from './components/RolePlay/RolePlayHub';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [currentView, setCurrentView] = useState('chat'); // 'chat', 'quiz', 'evm', 'checklist', 'roleplay'

  useEffect(() => {
    const handleOpenTimeline = () => setIsTimelineOpen(true);
    const handleStartChatTopic = () => setCurrentView('chat');
    const handleNavigateToQuiz = () => setCurrentView('quiz');
    
    window.addEventListener('openTimelineModal', handleOpenTimeline);
    window.addEventListener('startChatTopic', handleStartChatTopic);
    window.addEventListener('navigateToQuiz', handleNavigateToQuiz);
    
    return () => {
      window.removeEventListener('openTimelineModal', handleOpenTimeline);
      window.removeEventListener('startChatTopic', handleStartChatTopic);
      window.removeEventListener('navigateToQuiz', handleNavigateToQuiz);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg z-[100] shadow-lg font-bold">
          Skip to main content
        </a>

        <header className="bg-indigo-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="bg-white p-1.5 rounded-lg cursor-pointer" 
                onClick={() => setCurrentView('chat')}
                role="button"
                aria-label="Navigate to Home/Chat"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && setCurrentView('chat')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => setCurrentView('chat')}>{t('appName')}</h1>
            </div>
            <nav className="flex items-center gap-4">
              <LanguageSwitcher />
              <LoginButton />
            </nav>
          </div>
        </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-180px)] min-h-[600px]">
          {/* Main Interface - Takes up 2 columns on large screens */}
          <section className="lg:col-span-2 h-full overflow-y-auto" aria-live="polite">
            {currentView === 'chat' && <ChatWindow />}
            {currentView === 'quiz' && <QuizLauncher />}
            {currentView === 'evm' && <VotingGuide />}
            {currentView === 'checklist' && <VoterChecklist />}
            {currentView === 'roleplay' && <RolePlayHub />}
          </section>
          
          {/* Sidebar */}
          <aside className="space-y-6 overflow-y-auto pr-1 pb-4">
            
            {/* Navigation Menu */}
            <nav className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm" aria-label="Main navigation">
              <h4 className="font-semibold text-gray-800 mb-4 uppercase tracking-wider text-sm">Features</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentView('chat')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${currentView === 'chat' ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-50 text-slate-500'}`}
                  aria-current={currentView === 'chat' ? 'page' : undefined}
                >
                  <span className="text-xl" aria-hidden="true">💬</span> {t('nav.chat')}
                </button>
                <button 
                  onClick={() => setCurrentView('checklist')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${currentView === 'checklist' ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-50 text-slate-500'}`}
                  aria-current={currentView === 'checklist' ? 'page' : undefined}
                >
                  <span className="text-xl" aria-hidden="true">📋</span> {t('nav.checklist')}
                </button>
                <button 
                  onClick={() => setCurrentView('roleplay')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${currentView === 'roleplay' ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-50 text-slate-500'}`}
                  aria-current={currentView === 'roleplay' ? 'page' : undefined}
                >
                  <span className="text-xl" aria-hidden="true">🗺️</span> Voter Journey
                </button>
                <button 
                  onClick={() => setCurrentView('evm')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${currentView === 'evm' ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-50 text-slate-500'}`}
                  aria-current={currentView === 'evm' ? 'page' : undefined}
                >
                  <span className="text-xl" aria-hidden="true">🗳️</span> {t('nav.ballot')}
                </button>
                <button 
                  onClick={() => setCurrentView('quiz')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${currentView === 'quiz' ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-50 text-slate-500'}`}
                  aria-current={currentView === 'quiz' ? 'page' : undefined}
                >
                  <span className="text-xl" aria-hidden="true">🧠</span> {t('nav.quiz')}
                </button>
              </div>
            </nav>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
              <h4 className="font-semibold text-indigo-600 flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {t('tagline')}
              </h4>
              <p className="text-sm text-indigo-600">
                Practice voting, test your knowledge, and ask questions to our AI assistant to become a fully informed voter!
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Timeline Modal */}
      {isTimelineOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity" role="dialog" aria-modal="true" aria-label="Election Timeline Modal">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-slide-up">
            <button 
              onClick={() => setIsTimelineOpen(false)}
              aria-label="Close timeline modal"
              className="absolute top-6 right-6 text-slate-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              ✕
            </button>
            <div className="p-2">
              <ElectionTimeline />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
