import { useState } from 'react';
import PropTypes from 'prop-types';
import { addElectionEventToCalendar } from '../services/googleCalendar';

const CalendarButton = ({ accessToken, eventDetails }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleAddEvent = async () => {
    if (!accessToken) {
      alert("Please sign in with Google first (using the Login button in the top right) to add events to your calendar.");
      return;
    }

    setStatus('loading');
    const result = await addElectionEventToCalendar(accessToken, eventDetails);
    
    if (result.success) {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
    } else {
      setStatus('error');
      setErrorMsg(result.error);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-3 mb-1">
      <button
        onClick={handleAddEvent}
        disabled={status === 'loading' || status === 'success'}
        className="flex items-center gap-2 text-xs font-medium bg-white border border-slate-300 text-slate-500 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="text-base">📅</span> 
        {status === 'loading' ? 'Adding...' : 'Add to Google Calendar'}
      </button>
      
      {status === 'success' && (
        <span className="text-xs text-teal-600 flex items-center gap-1 animate-slide-up">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added successfully!
        </span>
      )}
      
      {status === 'error' && (
        <span className="text-xs text-rose-500 animate-slide-up max-w-[150px] truncate" title={errorMsg}>
          Failed: {errorMsg}
        </span>
      )}
    </div>
  );
};

CalendarButton.propTypes = {
  accessToken: PropTypes.string,
  eventDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default CalendarButton;
