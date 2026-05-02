export const ROLE_PLAY_SCENARIOS = {
  first_time_voter: {
    id: "first_time_voter",
    title: "Riya's First Vote",
    subtitle: "Follow an 18-year-old through her first voting experience",
    icon: "👩",
    color: "#1a73e8",
    estimatedMinutes: 5,
    totalStages: 5,
    character: {
      name: "Riya",
      age: 18,
      avatar: "👩🎓",
      background: "Riya just turned 18 and is voting for the very first time. She is nervous but excited. Help her make the right decisions!"
    },
    stages: [
      {
        id: "stage_1",
        title: "One Month Before Election",
        scene: "Riya hears that elections are announced. She wants to vote but is not sure if she is registered. Her friend says she does not need to register separately. What should Riya do?",
        image: "📅",
        choices: [
          {
            id: "a",
            text: "Trust her friend and do nothing",
            isCorrect: false,
            feedback: "❌ Wrong! Riya should always verify herself. Her name may not be on the voter list if she recently turned 18. Always check independently.",
            consequence: "Riya skips checking and later finds her name is missing — she cannot vote!"
          },
          {
            id: "b",
            text: "Check the voter list on ECI website using her Aadhaar number",
            isCorrect: true,
            feedback: "✅ Correct! Riya checks online and finds her name IS on the list. She also notes her polling booth address.",
            consequence: "Riya is confirmed registered and knows her booth. Great start!"
          },
          {
            id: "c",
            text: "Go directly to the polling booth on election day and ask",
            isCorrect: false,
            feedback: "❌ Not ideal. You cannot register or add your name on election day itself. Voter list corrections have a deadline.",
            consequence: "Riya reaches the booth and is turned away — her name is not found."
          }
        ]
      },
      {
        id: "stage_2",
        title: "Election Day Morning",
        scene: "Election day is here! Riya is getting ready. She cannot find her Voter ID card. She has her Aadhaar card and college ID. What should she do?",
        image: "🌅",
        choices: [
          {
            id: "a",
            text: "Stay home since she lost her Voter ID",
            isCorrect: false,
            feedback: "❌ No need to miss voting! Voter ID is just ONE of 12 accepted documents. Aadhaar card is valid.",
            consequence: "Riya misses her first election unnecessarily — what a shame!"
          },
          {
            id: "b",
            text: "Carry her Aadhaar card as ID proof",
            isCorrect: true,
            feedback: "✅ Perfect! Aadhaar card is one of the 12 approved photo ID documents. Riya can vote with it.",
            consequence: "Riya heads to the booth confidently with her Aadhaar. She is ready!"
          },
          {
            id: "c",
            text: "Use her college ID card",
            isCorrect: false,
            feedback: "❌ College ID is NOT in the list of 12 approved documents. Aadhaar, Passport, PAN, Driving Licence are accepted — not college IDs.",
            consequence: "The booth officer cannot accept her college ID. Good thing she also had her Aadhaar!"
          }
        ]
      },
      {
        id: "stage_3",
        title: "At the Polling Station",
        scene: "Riya reaches the booth at 8 AM and sees a long queue. Someone offers her ₹200 to vote for a specific party. What does Riya do?",
        image: "🏫",
        choices: [
          {
            id: "a",
            text: "Accept the money but vote for whoever she wants inside",
            isCorrect: false,
            feedback: "❌ Accepting money for votes is illegal under Section 171B of IPC even if you vote differently. Both giving and accepting is a crime.",
            consequence: "Riya could face legal consequences for accepting the bribe."
          },
          {
            id: "b",
            text: "Refuse and report to the booth officer or call 1950",
            isCorrect: true,
            feedback: "✅ Excellent! Voter bribery is a serious offense. Riya should refuse and report to the observer or call the Election Commission helpline 1950.",
            consequence: "Riya reports the incident. She is praised for her civic integrity!"
          },
          {
            id: "c",
            text: "Ignore it and just stand in queue",
            isCorrect: false,
            feedback: "⚠️ Ignoring is better than accepting but not ideal. Reporting helps the EC catch violators and keeps elections fair.",
            consequence: "The briber approaches more voters. Reporting would have helped."
          }
        ]
      },
      {
        id: "stage_4",
        title: "Inside the Voting Compartment",
        scene: "Riya is now at the EVM. She presses the button for her candidate. She hears a beep. Then she sees the VVPAT slip for 7 seconds. She is confused — can she take a photo of the slip as proof?",
        image: "🗳️",
        choices: [
          {
            id: "a",
            text: "Yes, take a photo quickly before it disappears",
            isCorrect: false,
            feedback: "❌ No! Taking photos inside the voting compartment is strictly prohibited. It violates the secrecy of ballot.",
            consequence: "Riya could be removed from the booth and her vote may be challenged."
          },
          {
            id: "b",
            text: "Just observe the slip for 7 seconds and then leave",
            isCorrect: true,
            feedback: "✅ Correct! The VVPAT slip is only for visual verification. You observe it, confirm your vote, and leave. No photos allowed.",
            consequence: "Riya verifies her vote correctly and exits the booth proudly."
          },
          {
            id: "c",
            text: "Ask the booth officer to pause the machine so she can read it",
            isCorrect: false,
            feedback: "❌ You cannot pause the VVPAT. The 7-second window is fixed by the machine. The officer cannot interfere with the voting process.",
            consequence: "The officer explains the rules. Riya learns for next time."
          }
        ]
      },
      {
        id: "stage_5",
        title: "After Voting",
        scene: "Riya comes out with ink on her finger. Her friend asks her who she voted for. Her uncle insists she must tell the family who she voted for. What does Riya say?",
        image: "☝️",
        choices: [
          {
            id: "a",
            text: "Tell everyone — voting should be transparent",
            isCorrect: false,
            feedback: "❌ While sharing is a personal choice, the principle of Secret Ballot means NO ONE can force you to reveal your vote. It is your right to keep it private.",
            consequence: "Riya reveals her vote and faces family pressure for future elections."
          },
          {
            id: "b",
            text: "Politely say it is a secret ballot and she does not have to tell anyone",
            isCorrect: true,
            feedback: "✅ Perfect! Secret ballot is a fundamental principle. Article 19 and the RPA protect your right to vote without disclosing your choice.",
            consequence: "Riya asserts her democratic right confidently. Her vote stays hers!"
          },
          {
            id: "c",
            text: "Make up a different answer to avoid conflict",
            isCorrect: false,
            feedback: "⚠️ Understandable but not ideal. You have a legal right to not disclose your vote. You should know and assert this right.",
            consequence: "Riya avoids conflict but misses a chance to educate her family."
          }
        ]
      }
    ]
  },

  booth_officer: {
    id: "booth_officer",
    title: "Presiding Officer Simulation",
    subtitle: "You are in charge of a polling booth. Handle real situations correctly.",
    icon: "👮",
    color: "#2E7D32",
    estimatedMinutes: 6,
    totalStages: 3,
    character: {
      name: "Officer Sharma",
      age: null,
      avatar: "👮‍♂️",
      background: "You are Presiding Officer Sharma at Booth No. 142. It is 8 AM and voting has just begun. Several situations will arise — make the right call!"
    },
    stages: [
      {
        id: "stage_1",
        title: "Situation 1: Voter Without ID",
        scene: "A 65-year-old woman arrives to vote. She does not have her Voter ID or any of the 12 documents. She says she has voted here for 30 years and everyone knows her. What do you do?",
        image: "👵",
        choices: [
          {
            id: "a",
            text: "Allow her to vote since she is a regular voter and people know her",
            isCorrect: false,
            feedback: "❌ You cannot allow voting without ID verification regardless of familiarity. This would be a serious procedural violation.",
            consequence: "This creates grounds for election petition and can invalidate booth results."
          },
          {
            id: "b",
            text: "Politely explain that valid photo ID is mandatory and ask her to return with one of the 12 accepted documents",
            isCorrect: true,
            feedback: "✅ Correct. Rules apply equally to all. You can note her details and suggest she try to arrange an ID like Aadhaar within polling hours.",
            consequence: "Rules are followed fairly. The woman goes home and returns later with her Aadhaar card."
          },
          {
            id: "c",
            text: "Ask another voter to vouch for her",
            isCorrect: false,
            feedback: "❌ Voter vouching is not a provision in standard polling procedure. Only prescribed ID documents are accepted.",
            consequence: "Invalid procedure that can be challenged legally."
          }
        ]
      },
      {
        id: "stage_2",
        title: "Situation 2: EVM Malfunction",
        scene: "At 10 AM, the EVM stops responding. The green ready light is off. 50 voters are waiting in queue. What is your immediate action?",
        image: "⚠️",
        choices: [
          {
            id: "a",
            text: "Try restarting the EVM yourself to save time",
            isCorrect: false,
            feedback: "❌ The Presiding Officer must NOT tamper with the EVM. Only authorized technical engineers can touch it.",
            consequence: "Tampering with EVM is a criminal offense under election law."
          },
          {
            id: "b",
            text: "Immediately inform the Sector Officer and Election Commission. Suspend voting till repaired.",
            isCorrect: true,
            feedback: "✅ Correct procedure. Inform the Sector Officer immediately. Suspend voting. A replacement EVM is sent. Document everything in the log.",
            consequence: "Replacement EVM arrives in 45 minutes. Voting resumes with time extended to compensate."
          },
          {
            id: "c",
            text: "Switch to paper ballot temporarily while waiting",
            isCorrect: false,
            feedback: "❌ Paper ballot cannot be improvised on the spot. All voting must happen on the official EVM. No alternatives are permitted.",
            consequence: "Improper procedure that could invalidate votes cast."
          }
        ]
      },
      {
        id: "stage_3",
        title: "Situation 3: Duplicate Voter",
        scene: "Two men arrive claiming to be the same person on the voter list. One has a Voter ID matching the list. The other has an Aadhaar with the same name but different photo. What do you do?",
        image: "👥",
        choices: [
          {
            id: "a",
            text: "Allow both to vote since both have ID",
            isCorrect: false,
            feedback: "❌ Only one person per entry can vote. Allowing both is voter fraud and a serious election offense.",
            consequence: "Double voting invalidates the entry and can lead to criminal prosecution."
          },
          {
            id: "b",
            text: "Allow only the person whose photo matches the voter list entry. Mark the entry as challenged and note both names.",
            isCorrect: true,
            feedback: "✅ Correct. The voter list photo and matching Voter ID is the primary reference. Challenge the second person, document thoroughly, refer to observer.",
            consequence: "One person votes. The case is referred to the Returning Officer for investigation."
          },
          {
            id: "c",
            text: "Deny both and mark the entry as disputed",
            isCorrect: false,
            feedback: "❌ You cannot deny a valid voter their right to vote. The person with matching Voter ID and photo should be allowed to vote.",
            consequence: "Denying a genuine voter their franchise is a violation of their fundamental right."
          }
        ]
      }
    ]
  },

  election_observer: {
    id: "election_observer",
    title: "Spot the MCC Violation",
    subtitle: "You are an Election Observer. Find 5 violations of the Model Code of Conduct.",
    icon: "🔍",
    color: "#F57F17",
    estimatedMinutes: 4,
    totalStages: 1,
    character: {
      name: "Observer",
      age: null,
      avatar: "🕵️",
      background: "You have been appointed as an Election Observer by the Election Commission. Review the campaign scenario below and identify all MCC violations."
    },
    scenario: {
      title: "Campaign Day in Sundarpur",
      description: "Read the following campaign event description carefully and identify all Model Code of Conduct violations:",
      story: `It is 3 days before polling day in Sundarpur constituency. Minister Prakash Yadav, who is also a candidate, holds a massive rally at the local government school ground after 6 PM.
        
During his speech he says: "Vote for me or people of your caste will suffer. Our community must stick together and punish those who vote against us."

He then announces a new government scheme: "If you vote for us, we will immediately release ₹5000 to every farmer account in this district starting tomorrow."

Government vehicles with official number plates are used to transport party workers to the venue.

The rally ends at 9 PM with loudspeakers blaring campaign songs.

The next morning, party workers distribute printed pamphlets showing the opponent's old criminal case photo without any context.`,
      violations: [
        {
          id: "v1",
          violation: "Using a government school ground for political rally",
          explanation: "Government premises cannot be used for political campaigning under MCC. All parties must get equal access or no access.",
          found: false
        },
        {
          id: "v2",
          violation: "Appeal to caste/community for votes",
          explanation: "Appealing to voters on the basis of caste, religion, or community is strictly prohibited under MCC and Section 123 of RPA.",
          found: false
        },
        {
          id: "v3",
          violation: "Announcing new government scheme during MCC period",
          explanation: "Once MCC is in effect, the government cannot announce new schemes, policies, or benefits that could influence voters.",
          found: false
        },
        {
          id: "v4",
          violation: "Using government vehicles for party campaign",
          explanation: "Government vehicles cannot be used for political party work or campaign activities. This is misuse of government resources.",
          found: false
        },
        {
          id: "v5",
          violation: "Campaigning after 6 PM or using loudspeakers after permitted hours",
          explanation: "Campaigning with loudspeakers is not permitted after 10 PM and in some areas after 6 PM. Local rules apply.",
          found: false
        },
        {
          id: "v6",
          violation: "Distributing material showing opponent in false/misleading context",
          explanation: "Publishing misleading content about opponents without context is a violation of MCC and could constitute defamation.",
          found: false
        }
      ]
    }
  }
};
