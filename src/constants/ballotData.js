export const MOCK_ELECTIONS = [
  {
    id: "mock_lok_sabha_1",
    title: "Practice Lok Sabha Election",
    constituency: "Navapur Parliamentary Constituency",
    type: "Lok Sabha",
    date: "Practice Ballot - Not a Real Election",
    totalVoters: "12,45,230 (Sample)",
    candidates: [
      {
        id: 1,
        serialNumber: 1,
        name: "Arjun Mehta",
        party: "Bharatiya Vikas Dal",
        abbreviation: "BVD",
        symbol: "🌻",
        symbolName: "Sunflower",
        color: "#FF6B00",
        manifesto: "Focus on rural infrastructure and farming support"
      },
      {
        id: 2,
        serialNumber: 2,
        name: "Priya Nambiar",
        party: "Rashtriya Janshakti Party",
        abbreviation: "RJP",
        symbol: "⚡",
        symbolName: "Lightning Bolt",
        color: "#1565C0",
        manifesto: "Youth employment and digital India initiatives"
      },
      {
        id: 3,
        serialNumber: 3,
        name: "Suresh Patil",
        party: "Jan Seva Congress",
        abbreviation: "JSC",
        symbol: "🤝",
        symbolName: "Handshake",
        color: "#2E7D32",
        manifesto: "Healthcare for all and free education"
      },
      {
        id: 4,
        serialNumber: 4,
        name: "Kavitha Reddy",
        party: "Pragatisheel Samajwadi Morcha",
        abbreviation: "PSM",
        symbol: "🌾",
        symbolName: "Wheat Sheaf",
        color: "#F9A825",
        manifesto: "Farmer loan waiver and minimum support price"
      },
      {
        id: 5,
        serialNumber: 5,
        name: "Rajan Pillai",
        party: "Independent",
        abbreviation: "IND",
        symbol: "⭐",
        symbolName: "Star",
        color: "#6A1B9A",
        manifesto: "Local development and anti-corruption"
      },
      {
        id: 6,
        serialNumber: 6,
        name: "Meena Joshi",
        party: "Akhil Bharat Nyay Dal",
        abbreviation: "ABND",
        symbol: "⚖️",
        symbolName: "Weighing Scale",
        color: "#00838F",
        manifesto: "Legal aid for poor and judicial reforms"
      },
      {
        id: 99,
        serialNumber: 99,
        name: "NOTA",
        party: "None Of The Above",
        abbreviation: "NOTA",
        symbol: "🚫",
        symbolName: "None of the Above",
        color: "#757575",
        manifesto: "Choose this if none of the candidates represent you"
      }
    ]
  },
  {
    id: "mock_vidhan_sabha_1",
    title: "Practice Vidhan Sabha Election",
    constituency: "Rajnagar Assembly Constituency",
    type: "Vidhan Sabha",
    date: "Practice Ballot - Not a Real Election",
    totalVoters: "2,84,150 (Sample)",
    candidates: [
      {
        id: 1,
        serialNumber: 1,
        name: "Vikram Singh",
        party: "Lok Kalyan Party",
        abbreviation: "LKP",
        symbol: "🚲",
        symbolName: "Bicycle",
        color: "#C2185B",
        manifesto: "City road upgrades and better public transport"
      },
      {
        id: 2,
        serialNumber: 2,
        name: "Aisha Khan",
        party: "Navbharat Nirman Dal",
        abbreviation: "NND",
        symbol: "🔑",
        symbolName: "Key",
        color: "#009688",
        manifesto: "Women's safety, street lighting, and housing"
      },
      {
        id: 3,
        serialNumber: 3,
        name: "Ramesh Sharma",
        party: "Swachh Rajnagar Aghadi",
        abbreviation: "SRA",
        symbol: "🧹",
        symbolName: "Broom",
        color: "#3F51B5",
        manifesto: "Garbage management and clean drinking water"
      },
      {
        id: 4,
        serialNumber: 4,
        name: "Sunita Yadav",
        party: "Kisan Mazdoor Ekta",
        abbreviation: "KME",
        symbol: "🚜",
        symbolName: "Tractor",
        color: "#4CAF50",
        manifesto: "Support for daily wage workers and street vendors"
      },
      {
        id: 5,
        serialNumber: 5,
        name: "David D'Souza",
        party: "Independent",
        abbreviation: "IND",
        symbol: "🎸",
        symbolName: "Guitar",
        color: "#E64A19",
        manifesto: "Promotion of arts, culture, and local festivals"
      },
      {
        id: 99,
        serialNumber: 99,
        name: "NOTA",
        party: "None Of The Above",
        abbreviation: "NOTA",
        symbol: "🚫",
        symbolName: "None of the Above",
        color: "#757575",
        manifesto: "Choose this if none of the candidates represent you"
      }
    ]
  }
];

export const getRandomElection = () => 
  MOCK_ELECTIONS[Math.floor(Math.random() * MOCK_ELECTIONS.length)];

export const getElectionById = (id) => 
  MOCK_ELECTIONS.find(e => e.id === id);
