export const CHECKLIST_ITEMS = [
  {
    id: "check_001",
    order: 1,
    icon: "📋",
    title: "Check if my name is in the voter list",
    description: "Verify your name appears in the official Electoral Roll before election day.",
    learnMoreTopic: "How do I check if my name is in the voter list?",
    tip: "Visit electoralsearch.eci.gov.in or use the Voter Helpline app to search by name or EPIC number.",
    reminderTitle: "Check Voter List",
    reminderNote: "Verify your name in the electoral roll today",
    daysBeforeElection: 30
  },
  {
    id: "check_002",
    order: 2,
    icon: "📍",
    title: "Verify my polling booth address",
    description: "Know exactly where your assigned polling booth is located.",
    learnMoreTopic: "How do I find my polling booth address?",
    tip: "Your booth address is printed on your Voter ID slip. You can also find it on the ECI website using your EPIC number.",
    reminderTitle: "Find Polling Booth",
    reminderNote: "Look up and note your polling booth address",
    daysBeforeElection: 14
  },
  {
    id: "check_003",
    order: 3,
    icon: "🪪",
    title: "Arrange valid ID proof",
    description: "Keep one of the 12 approved photo ID documents ready to carry on voting day.",
    learnMoreTopic: "What ID documents are accepted at the polling booth?",
    tip: "Accepted IDs include: Voter ID, Aadhaar, Passport, Driving Licence, PAN Card, MNREGA Job Card, Bank Passbook with photo, and more.",
    reminderTitle: "Prepare ID Proof",
    reminderNote: "Keep your Voter ID or Aadhaar ready for election day",
    daysBeforeElection: 7
  },
  {
    id: "check_004",
    order: 4,
    icon: "🏛️",
    title: "Know the candidates in my constituency",
    description: "Learn about the candidates contesting from your constituency before you vote.",
    learnMoreTopic: "How do I find out who the candidates are in my constituency?",
    tip: "Candidate details including criminal records and assets are available on the ECI website and the Candidates Affidavit Portal.",
    reminderTitle: "Research Candidates",
    reminderNote: "Review candidates contesting in your constituency",
    daysBeforeElection: 10
  },
  {
    id: "check_005",
    order: 5,
    icon: "🕐",
    title: "Check election date and booth timing",
    description: "Note the exact date and polling hours for your constituency.",
    learnMoreTopic: "What are the polling booth timings on election day?",
    tip: "Polling booths generally open at 7:00 AM and close at 6:00 PM. Some constituencies may have different timings. Check the official notification.",
    reminderTitle: "Note Election Timings",
    reminderNote: "Polling is typically 7AM to 6PM — plan your visit",
    daysBeforeElection: 5
  },
  {
    id: "check_006",
    order: 6,
    icon: "🚗",
    title: "Plan how I will travel to the booth",
    description: "Decide in advance how you will get to your polling station on election day.",
    learnMoreTopic: "What facilities are available for voters to reach polling booths?",
    tip: "Political parties often arrange free transport. You can also check if your area has public transport running to the booth. Go early to avoid queues.",
    reminderTitle: "Plan Travel to Booth",
    reminderNote: "Decide your travel route to the polling station",
    daysBeforeElection: 3
  },
  {
    id: "check_007",
    order: 7,
    icon: "⏰",
    title: "Set a reminder for election day morning",
    description: "Make sure you do not forget to vote by setting an alarm or reminder the night before.",
    learnMoreTopic: "Why is voting important and what happens if I don't vote?",
    tip: "Set your alarm for early morning. Going between 7AM-9AM means shorter queues. Carry water if it is hot. Wear comfortable footwear.",
    reminderTitle: "🗳️ Election Day — Go Vote!",
    reminderNote: "Today is election day. Carry your ID and go vote!",
    daysBeforeElection: 1
  }
];

export const getChecklistProgress = (completedIds) => {
  const total = CHECKLIST_ITEMS.length;
  const completed = completedIds.length;
  const percentage = Math.round((completed / total) * 100);
  
  if (percentage === 100) return {
    percentage,
    message: "🎉 You are fully prepared to vote!",
    color: "#2E7D32"
  };
  if (percentage >= 70) return {
    percentage,
    message: "Almost ready! A few more steps to go.",
    color: "#1565C0"
  };
  if (percentage >= 40) return {
    percentage,
    message: "Good progress! Keep completing the steps.",
    color: "#F57F17"
  };
  return {
    percentage,
    message: "Let's get you ready to vote. Start below!",
    color: "#C62828"
  };
};

export const getNextPendingItem = (completedIds) =>
  CHECKLIST_ITEMS.find(item => !completedIds.includes(item.id));
