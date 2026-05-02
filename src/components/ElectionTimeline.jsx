
const steps = [
  { id: 1, icon: "📢", title: "Election Announcement", desc: "Model Code of Conduct begins" },
  { id: 2, icon: "📋", title: "Voter Registration Deadline", desc: "Last day to register or update details" },
  { id: 3, icon: "🗒️", title: "Nomination Filing", desc: "Candidates submit their nomination papers" },
  { id: 4, icon: "✅", title: "Scrutiny of Nominations", desc: "ECI verifies candidate eligibility" },
  { id: 5, icon: "🚫", title: "Withdrawal Date", desc: "Last date for candidates to withdraw" },
  { id: 6, icon: "📣", title: "Campaigning Period", desc: "Candidates hold rallies and address voters" },
  { id: 7, icon: "🔇", title: "Silence Period", desc: "48 hours before polling; campaigning stops" },
  { id: 8, icon: "🗳️", title: "Polling Day", desc: "Citizens cast their votes" },
  { id: 9, icon: "🔢", title: "Vote Counting", desc: "EVMs are opened and votes are counted" },
  { id: 10, icon: "📊", title: "Results Declaration", desc: "Winners are officially announced" },
  { id: 11, icon: "🏛️", title: "Government Formation", desc: "New government takes oath" },
];

const ElectionTimeline = () => {
  const currentStepId = 3; // Example: "Nomination Filing" is current

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2">
        <span className="text-2xl">🇮🇳</span> Indian Election Process
      </h3>
      <div className="relative border-l-2 border-gray-200 ml-5 space-y-2 pb-2">
        {steps.map((step) => {
          let status = 'upcoming';
          if (step.id < currentStepId) status = 'completed';
          if (step.id === currentStepId) status = 'current';

          const isCompleted = status === 'completed';
          const isCurrent = status === 'current';
          
          let dotColor = "bg-gray-200 border-slate-300";
          let textColor = "text-slate-500";
          let titleColor = "text-slate-500";
          
          if (isCompleted) {
            dotColor = "bg-teal-500 border-teal-600";
            textColor = "text-teal-700";
            titleColor = "text-gray-800";
          } else if (isCurrent) {
            dotColor = "bg-indigo-500 border-indigo-500 animate-pulse";
            textColor = "text-indigo-600 font-medium";
            titleColor = "text-indigo-600 font-bold";
          }

          return (
            <div key={step.id} className="relative pl-8 pt-2 pb-2">
              {/* Connector dot */}
              <div className={`absolute -left-[9px] top-5 h-4 w-4 rounded-full border-2 shadow-sm z-10 ${dotColor}`}></div>
              
              <div className={`p-3 rounded-lg transition-colors ${isCurrent ? 'bg-indigo-50 border border-indigo-100 shadow-sm' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 flex justify-center items-center text-xl">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className={`text-sm tracking-tight ${titleColor}`}>{step.title}</h4>
                    <p className={`text-xs mt-0.5 ${textColor}`}>{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElectionTimeline;
