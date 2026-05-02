export const QUIZ_BANK = {
  voting_rules: {
    label: "Voting Rules",
    icon: "🗳️",
    description: "Test your knowledge of how voting works in India",
    color: "#1a73e8",
    questions: [
      {
        id: "vr_001",
        question: "What is the minimum age to vote in India?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        correctIndex: 1,
        explanation: "The 61st Constitutional Amendment in 1989 lowered the voting age from 21 to 18 years.",
        difficulty: "easy",
        funFact: "India has one of the largest voting populations in the world with over 900 million eligible voters."
      },
      {
        id: "vr_002",
        question: "What is NOTA and when was it introduced?",
        options: ["None of the Above, 2013", "New Option to Act, 2014", "None of the Above, 2010", "National Option to Act, 2013"],
        correctIndex: 0,
        explanation: "NOTA (None of the Above) was introduced in India in 2013 following a Supreme Court directive.",
        difficulty: "medium",
        funFact: "Even if NOTA gets the highest votes, the candidate with the next highest votes is declared the winner."
      },
      {
        id: "vr_003",
        question: "What is the indelible ink used during voting primarily made of?",
        options: ["Silver Nitrate", "Copper Sulphate", "Potassium Permanganate", "Zinc Oxide"],
        correctIndex: 0,
        explanation: "The indelible ink contains silver nitrate, which stains the skin dark upon exposure to ultraviolet light, preventing double voting.",
        difficulty: "medium",
        funFact: "Mysore Paints and Varnish Limited is the sole supplier of this indelible ink in India."
      },
      {
        id: "vr_004",
        question: "How long is the VVPAT slip visible to the voter through the transparent window?",
        options: ["5 seconds", "7 seconds", "10 seconds", "15 seconds"],
        correctIndex: 1,
        explanation: "The printed VVPAT slip containing the candidate's serial number, name, and symbol is visible for 7 seconds before it falls into the sealed drop box.",
        difficulty: "hard",
        funFact: "VVPAT stands for Voter Verifiable Paper Audit Trail."
      },
      {
        id: "vr_005",
        question: "Which of these ID documents is generally NOT accepted at a polling booth if you don't have an EPIC?",
        options: ["Passport", "Driving License", "Ration Card", "PAN Card"],
        correctIndex: 2,
        explanation: "While 12 alternative photo identity documents are accepted (like Passport, PAN, Aadhaar), Ration Cards are generally not accepted as sole proof of identity for voting.",
        difficulty: "medium",
        funFact: "Even without an EPIC, if your name is in the voter list, you can vote using other prescribed photo IDs."
      },
      {
        id: "vr_006",
        question: "What does the concept of a 'Secret Ballot' ensure?",
        options: ["No one knows how you voted", "The candidate doesn't know the result", "Voting happens at night", "Votes are counted secretly"],
        correctIndex: 0,
        explanation: "A secret ballot ensures that the voter's choice is confidential, protecting them from intimidation or coercion.",
        difficulty: "easy",
        funFact: "The secret ballot was first introduced in Victoria, Australia in 1856."
      },
      {
        id: "vr_007",
        question: "What is the maximum number of votes a single person can legally cast in an election?",
        options: ["Two", "Depends on the state", "One", "Unlimited"],
        correctIndex: 2,
        explanation: "The principle of 'One Person, One Vote' applies universally across democratic elections in India.",
        difficulty: "easy",
        funFact: "Voting multiple times is an electoral offense punishable under law."
      },
      {
        id: "vr_008",
        question: "What happens if an EVM malfunctions during polling?",
        options: ["Voting is cancelled", "The EVM is immediately replaced", "Voters must return the next day", "Paper ballots are used instead"],
        correctIndex: 1,
        explanation: "If an EVM malfunctions, it is immediately replaced with a reserve EVM by the polling officers so voting can continue.",
        difficulty: "medium",
        funFact: "Engineers from BEL or ECIL are deployed on polling day to handle technical glitches."
      },
      {
        id: "vr_009",
        question: "How is the election for the Lok Sabha different from the Rajya Sabha?",
        options: ["Lok Sabha members are appointed", "Rajya Sabha members are elected directly by citizens", "Lok Sabha members are elected directly by citizens", "There is no difference"],
        correctIndex: 2,
        explanation: "Lok Sabha (Lower House) members are directly elected by the public, whereas Rajya Sabha (Upper House) members are elected indirectly by members of State Legislative Assemblies.",
        difficulty: "medium",
        funFact: "The Rajya Sabha is a permanent body and is not subject to dissolution."
      },
      {
        id: "vr_010",
        question: "What is the punishment for booth capturing under the Representation of the People Act?",
        options: ["Warning and fine", "Imprisonment of 1 to 3 years and fine", "Only a fine", "Disqualification from voting forever"],
        correctIndex: 1,
        explanation: "Booth capturing is a serious electoral offense punishable with imprisonment for a term of one to three years and a fine.",
        difficulty: "hard",
        funFact: "With the widespread use of EVMs and central paramilitary forces, incidents of booth capturing have drastically reduced."
      }
    ]
  },
  model_code: {
    label: "Model Code of Conduct",
    icon: "📜",
    description: "Understand the rules political parties must follow",
    color: "#e67c73",
    questions: [
      {
        id: "mc_001",
        question: "When does the Model Code of Conduct (MCC) come into effect?",
        options: ["1 month before voting", "The day voting starts", "Immediately upon announcement of the election schedule by the ECI", "When candidates file nominations"],
        correctIndex: 2,
        explanation: "The MCC comes into force the very moment the Election Commission announces the schedule for elections.",
        difficulty: "easy",
        funFact: "The MCC is not a statutory document, meaning it doesn't have the force of law, but relies on consensus among political parties."
      },
      {
        id: "mc_002",
        question: "Which of the following activities is banned under the MCC?",
        options: ["Door-to-door campaigning", "Using government transport for campaigning", "Distributing pamphlets", "Holding public rallies"],
        correctIndex: 1,
        explanation: "Under the MCC, the ruling party cannot use government machinery or transport (including official vehicles and aircraft) for electioneering work.",
        difficulty: "medium",
        funFact: "Ministers cannot combine their official visits with election campaigning."
      },
      {
        id: "mc_003",
        question: "Who enforces the Model Code of Conduct?",
        options: ["The Supreme Court", "The Police", "The Election Commission of India", "The President of India"],
        correctIndex: 2,
        explanation: "The Election Commission of India is solely responsible for ensuring the MCC is observed by all political parties and candidates.",
        difficulty: "easy",
        funFact: "The ECI can issue notices, reprimand leaders, or ban them from campaigning for MCC violations."
      },
      {
        id: "mc_004",
        question: "Can the government announce new financial grants or schemes during the MCC?",
        options: ["Yes, anytime", "Only for rural areas", "No, it is strictly prohibited", "Yes, with the President's permission"],
        correctIndex: 2,
        explanation: "The MCC strictly prohibits the government from announcing new schemes, financial grants, or laying foundation stones to prevent influencing voters.",
        difficulty: "medium",
        funFact: "Ongoing projects can continue, but new ones cannot be announced."
      },
      {
        id: "mc_005",
        question: "How long does the MCC typically remain in effect?",
        options: ["Until voting day", "Until the results are announced", "Until the new government is formed", "For exactly 30 days"],
        correctIndex: 1,
        explanation: "The MCC remains in operation until the election process is completed, which is usually upon the formal announcement of results.",
        difficulty: "easy",
        funFact: "Once the ECI notifies the successful candidates, the MCC is lifted."
      },
      {
        id: "mc_006",
        question: "What constitutes a 'paid news' violation during elections?",
        options: ["Advertising on TV", "Publishing news articles in exchange for money to favor a candidate", "Paying journalists for coverage", "Running newspaper ads"],
        correctIndex: 1,
        explanation: "Paid news refers to articles disguised as news that are actually paid advertisements meant to influence voters in favor of a candidate, which violates ECI guidelines.",
        difficulty: "hard",
        funFact: "The ECI has a Media Certification and Monitoring Committee (MCMC) to keep a strict watch on paid news."
      },
      {
        id: "mc_007",
        question: "Are political parties allowed to use religious places for election campaigning?",
        options: ["Yes, with prior permission", "Only on weekends", "No, it is strictly prohibited", "Yes, if it's their own religion"],
        correctIndex: 2,
        explanation: "The MCC strictly forbids the use of places of worship like temples, mosques, churches, or gurudwaras for election propaganda.",
        difficulty: "medium",
        funFact: "Appealing to caste or communal feelings for securing votes is also a corrupt practice."
      },
      {
        id: "mc_008",
        question: "What is the primary reason for placing a limit on election expenditure for a Lok Sabha candidate?",
        options: ["To save paper", "To prevent inflation", "To ensure a level playing field among all candidates", "To fund the Election Commission"],
        correctIndex: 2,
        explanation: "Expenditure limits are enforced to ensure that candidates with vast financial resources do not have an unfair advantage over others.",
        difficulty: "medium",
        funFact: "The expenditure limit varies by state and is periodically revised by the ECI."
      },
      {
        id: "mc_009",
        question: "What must a candidate submit to the ECI within 30 days after the election results?",
        options: ["A thank you letter", "An account of their election expenditure", "Their resignation", "A new manifesto"],
        correctIndex: 1,
        explanation: "Every contesting candidate is required by law to lodge a true copy of their election expenditure account within 30 days from the date of declaration of result.",
        difficulty: "hard",
        funFact: "Failure to lodge the expenditure account can lead to disqualification for up to 3 years."
      },
      {
        id: "mc_010",
        question: "When and where was the Model Code of Conduct first introduced in India?",
        options: ["1951, Delhi", "1960, Kerala", "1977, Uttar Pradesh", "1991, Maharashtra"],
        correctIndex: 1,
        explanation: "The MCC was first introduced during the 1960 State Assembly elections in Kerala as a set of guidelines agreed upon by the administration and political parties.",
        difficulty: "hard",
        funFact: "It was adopted at the national level by the ECI in the 1962 Lok Sabha elections."
      }
    ]
  },
  election_commission: {
    label: "Election Commission",
    icon: "🏛️",
    description: "Learn about the body that conducts India's elections",
    color: "#34a853",
    questions: [
      {
        id: "ec_001",
        question: "How many Chief Election Commissioners serve at the Election Commission of India at any given time?",
        options: ["One", "Two", "Three", "Four"],
        correctIndex: 0,
        explanation: "The ECI consists of one Chief Election Commissioner (CEC) and currently two other Election Commissioners.",
        difficulty: "easy",
        funFact: "The ECI was a single-member body until 1989 when it was expanded to a multi-member body."
      },
      {
        id: "ec_002",
        question: "Who appoints the Chief Election Commissioner of India?",
        options: ["The Prime Minister", "The Chief Justice of India", "The President of India", "The Parliament"],
        correctIndex: 2,
        explanation: "The President of India appoints the Chief Election Commissioner and other Election Commissioners based on the recommendation of a selection committee.",
        difficulty: "medium",
        funFact: "The selection committee consists of the PM, Leader of the Opposition, and a Union Cabinet Minister."
      },
      {
        id: "ec_003",
        question: "What is the tenure of the Chief Election Commissioner?",
        options: ["5 years or up to age 60", "6 years or up to age 65", "4 years or up to age 62", "Lifetime"],
        correctIndex: 1,
        explanation: "The CEC and ECs have a tenure of six years, or up to the age of 65 years, whichever is earlier.",
        difficulty: "medium",
        funFact: "They enjoy the same status and receive salary and perks as available to Judges of the Supreme Court of India."
      },
      {
        id: "ec_004",
        question: "In which year was the Election Commission of India established?",
        options: ["1947", "1950", "1952", "1960"],
        correctIndex: 1,
        explanation: "The Election Commission of India was established in accordance with the Constitution on 25th January 1950.",
        difficulty: "hard",
        funFact: "January 25th is celebrated as National Voters' Day in India to mark the foundation day of the ECI."
      },
      {
        id: "ec_005",
        question: "What is the role of a General Observer appointed by the ECI?",
        options: ["To count votes", "To oversee the poll process and ensure fairness", "To campaign for candidates", "To issue voter ID cards"],
        correctIndex: 1,
        explanation: "General Observers are senior civil servants appointed by the ECI to oversee the entire election process in a constituency to ensure it is free, fair, and peaceful.",
        difficulty: "medium",
        funFact: "The ECI also appoints Expenditure Observers and Police Observers."
      },
      {
        id: "ec_006",
        question: "What is Form 7A in the context of Indian elections?",
        options: ["Voter registration form", "List of contesting candidates", "Candidate nomination form", "Election expenditure report"],
        correctIndex: 1,
        explanation: "Form 7A is the final official list of contesting candidates published by the Returning Officer after the withdrawal period.",
        difficulty: "hard",
        funFact: "The names in Form 7A are listed in alphabetical order under categories: recognized parties, registered un-recognized parties, and independents."
      },
      {
        id: "ec_007",
        question: "How are symbols allocated to independent candidates?",
        options: ["They bring their own symbol", "From a list of free symbols maintained by the ECI", "They use the national flag", "They don't get symbols"],
        correctIndex: 1,
        explanation: "Independent candidates must choose a symbol from the list of 'Free Symbols' published by the Election Commission.",
        difficulty: "medium",
        funFact: "Common free symbols include everyday objects like a gas cylinder, auto-rickshaw, or a bat."
      },
      {
        id: "ec_008",
        question: "What does ECI stand for?",
        options: ["Electoral Council of India", "Election Commission of India", "Electoral Committee of India", "Election Council of India"],
        correctIndex: 1,
        explanation: "ECI stands for the Election Commission of India, the constitutional body responsible for administering elections.",
        difficulty: "easy",
        funFact: "The ECI conducts elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies, and the offices of the President and Vice President."
      },
      {
        id: "ec_009",
        question: "What is a 'Model Polling Station'?",
        options: ["A polling station for VIPs", "A polling station equipped with enhanced facilities for voters", "A fake polling station for practice", "A polling station in a mall"],
        correctIndex: 1,
        explanation: "Model Polling Stations are set up by the ECI with better infrastructure, waiting areas, drinking water, and sometimes a welcoming aesthetic to improve the voting experience.",
        difficulty: "medium",
        funFact: "The ECI also sets up 'Pink Polling Booths' which are managed entirely by women staff."
      },
      {
        id: "ec_010",
        question: "What power does the ECI have over the government administrative machinery during elections?",
        options: ["None", "It can transfer and suspend officials for election duties", "It can dismiss the government", "It can change laws"],
        correctIndex: 1,
        explanation: "During elections, the ECI has the constitutional power to transfer, appoint, or suspend civil and police officials to ensure free and fair polls.",
        difficulty: "hard",
        funFact: "Once the elections are announced, the entire state machinery effectively comes under the disciplinary control of the ECI."
      }
    ]
  },
  voter_registration: {
    label: "Voter Registration",
    icon: "📋",
    description: "Know your rights and the registration process",
    color: "#fbbc04",
    questions: [
      {
        id: "reg_001",
        question: "Which form is used by a new voter to register their name in the electoral roll?",
        options: ["Form 6", "Form 7", "Form 8", "Form 9"],
        correctIndex: 0,
        explanation: "Form 6 is the application for inclusion of a name in the electoral roll for a first-time voter or someone shifting to a new constituency.",
        difficulty: "easy",
        funFact: "You can easily submit Form 6 online via the Voter Helpline App or the ECI's NVSP portal."
      },
      {
        id: "reg_002",
        question: "What does EPIC stand for in the context of voter registration?",
        options: ["Electronic Photo Identity Card", "Electoral Photo Identity Card", "Election Picture Identity Card", "Eligible Person Identity Card"],
        correctIndex: 1,
        explanation: "EPIC stands for Electoral Photo Identity Card, commonly known as the Voter ID card.",
        difficulty: "easy",
        funFact: "The EPIC was introduced in 1993 by the then Chief Election Commissioner, T.N. Seshan."
      },
      {
        id: "reg_003",
        question: "When is the deadline to register as a voter before an election?",
        options: ["1 day before", "Up to the last date for filing nominations by candidates", "1 month before", "There is no deadline"],
        correctIndex: 1,
        explanation: "Continuous updating of the electoral roll stops on the last date of filing nominations. No new names can be added after this date until the election process is complete.",
        difficulty: "hard",
        funFact: "It is always recommended to register well in advance during the Summary Revision period."
      },
      {
        id: "reg_004",
        question: "If there is a spelling mistake in your Voter ID card, which form should you fill to correct it?",
        options: ["Form 6", "Form 7", "Form 8", "Form 8A"],
        correctIndex: 2,
        explanation: "Form 8 is used for making corrections to particulars (like name, age, address, photo) already entered in the electoral roll.",
        difficulty: "medium",
        funFact: "Form 8 can also be used to request a replacement EPIC if your original is lost or damaged."
      },
      {
        id: "reg_005",
        question: "Can Non-Resident Indians (NRIs) vote in Indian elections?",
        options: ["No", "Yes, they can vote online", "Yes, but they must be physically present at their polling station in India", "Yes, via postal ballot from abroad"],
        correctIndex: 2,
        explanation: "Overseas electors (NRIs) are eligible to be registered as voters, but currently, they must be physically present at their designated polling booth in India to cast their vote.",
        difficulty: "medium",
        funFact: "NRIs use Form 6A to register themselves in the electoral roll."
      },
      {
        id: "reg_006",
        question: "Who is a BLO in the context of voter registration?",
        options: ["Ballot Level Officer", "Booth Level Officer", "Block Level Officer", "Base Level Officer"],
        correctIndex: 1,
        explanation: "A Booth Level Officer (BLO) is a local government/semi-government official who is familiar with the local electors and assists the ECI in updating the electoral roll.",
        difficulty: "medium",
        funFact: "BLOs play a crucial role in door-to-door verification and distributing voter slips before polling day."
      },
      {
        id: "reg_007",
        question: "What is an EPIC number?",
        options: ["A random number given at the booth", "Your Aadhaar number", "The unique alphanumeric ID printed on your Voter ID card", "Your polling station number"],
        correctIndex: 2,
        explanation: "The EPIC number is the unique identification number printed on your Electoral Photo Identity Card, used to search your name in the voter list.",
        difficulty: "easy",
        funFact: "You can download an electronic version of your card (e-EPIC) using this number."
      },
      {
        id: "reg_008",
        question: "What is the best way to check if your name is in the voter list?",
        options: ["Ask the local police", "Visit the ECI's Electoral Search portal or use the Voter Helpline App", "Check the local newspaper", "Wait for the BLO to tell you"],
        correctIndex: 1,
        explanation: "The ECI maintains a centralized database (electoralsearch.eci.gov.in) where citizens can verify their enrollment status instantly.",
        difficulty: "easy",
        funFact: "You can search using your EPIC number or by entering your basic demographic details."
      },
      {
        id: "reg_009",
        question: "What is a 'supplementary electoral roll'?",
        options: ["A fake list of voters", "A list containing additions, deletions, and corrections made after the draft roll was published", "A list for VIPs only", "A list of candidates"],
        correctIndex: 1,
        explanation: "After the draft electoral roll is published, claims and objections are processed, and a supplementary roll is issued detailing all modifications before the final roll.",
        difficulty: "hard",
        funFact: "The final electoral roll is essentially the draft roll plus the supplementary roll."
      },
      {
        id: "reg_010",
        question: "What is the crucial qualifying date to determine the minimum age of 18 for voter registration?",
        options: ["The date of the election", "January 1st of the year in which the electoral roll is revised", "The voter's birthday", "April 1st of the election year"],
        correctIndex: 1,
        explanation: "Traditionally, January 1st of the year of revision is the qualifying date. (Note: Recent amendments have introduced 4 qualifying dates in a year: Jan 1, Apr 1, Jul 1, Oct 1).",
        difficulty: "hard",
        funFact: "The introduction of four qualifying dates allows more youth to register as soon as they turn 18, rather than waiting for the next year."
      }
    ]
  },
  post_ballot: {
    label: "Post Vote Reflection",
    icon: "🤔",
    description: "Reflect on what you just experienced in the voting simulator",
    color: "#673ab7",
    questions: [
      {
        id: "pb_001",
        question: "How long is the printed VVPAT slip visible through the transparent window before it falls into the sealed box?",
        options: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
        correctIndex: 2,
        explanation: "The VVPAT slip is visible for exactly 7 seconds, allowing the voter to verify their choice before it is automatically cut and dropped.",
        difficulty: "easy",
        funFact: "VVPAT stands for Voter Verifiable Paper Audit Trail."
      },
      {
        id: "pb_002",
        question: "What is the primary purpose of applying indelible ink to a voter's finger?",
        options: ["To show they are a citizen", "To prevent them from voting multiple times", "To track their location", "Because it is a tradition"],
        correctIndex: 1,
        explanation: "Indelible ink is a security measure to identify individuals who have already cast their vote, preventing electoral fraud like double voting.",
        difficulty: "easy",
        funFact: "The ink contains silver nitrate which stains the skin dark when exposed to sunlight."
      },
      {
        id: "pb_003",
        question: "What does the concept of a 'Secret Ballot', which you just experienced, ensure?",
        options: ["Your vote is kept confidential", "Only the candidate knows who voted for them", "Voting is done in a dark room", "The Election Commission keeps a record of who you voted for"],
        correctIndex: 0,
        explanation: "A secret ballot guarantees that your choice remains private, protecting you from intimidation, blackmail, or vote-buying.",
        difficulty: "medium",
        funFact: "Before EVMs, paper ballots were folded in a specific way to maintain secrecy."
      },
      {
        id: "pb_004",
        question: "If you decided not to vote for any of the specific candidates, what option did you choose on the EVM?",
        options: ["CANCEL", "NONE", "NOTA", "EXIT"],
        correctIndex: 2,
        explanation: "NOTA stands for 'None of the Above', an option that allows voters to officially register their rejection of all contesting candidates.",
        difficulty: "easy",
        funFact: "NOTA was introduced in India in 2013 following a Supreme Court directive."
      }
    ]
  }
};
