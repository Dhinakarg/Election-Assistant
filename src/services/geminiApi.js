import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `You are CivicGuide, a friendly and neutral election education 
assistant. Help users understand:
- Voter registration steps and eligibility
- Election timelines and important dates
- How voting works (polling booths, EVMs, postal ballots, NOTA)
- Role of Election Commission
- Results, counting process, and dispute resolution
- Model Code of Conduct

Always ask for the user's country or state if not mentioned.
Be simple, clear, non-partisan, and factual.
When relevant, suggest the user add important election dates 
to their Google Calendar.
When asked about polling locations, offer to show a map.
Keep responses concise and use bullet points for steps.`;

/**
 * Safety settings for Gemini API to ensure non-partisan and safe civic discourse.
 */
const SAFETY_SETTINGS = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

/**
 * Calls the Google Gemini AI API with the user's message and current chat history.
 * 
 * @param {string} userMessage - The new text message from the user.
 * @param {Array<{isUser: boolean, text: string}>} chatHistory - Array of previous messages for context.
 * @returns {Promise<string>} The AI's response text.
 * @throws {Error} Logs error and returns fallback string if API call fails.
 */
export const callGemini = async (userMessage, chatHistory) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Gemini API key is missing. Please set VITE_GEMINI_API_KEY.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
      safetySettings: SAFETY_SETTINGS,
    });

    // Format chat history for Gemini API
    const formattedHistory = chatHistory.map((msg) => ({
      role: msg.isUser ? "user" : "model",
      parts: [{ text: msg.text }],
    }));

    // Gemini API requires the first message in history to be from the user.
    if (formattedHistory.length > 0 && formattedHistory[0].role === "model") {
      formattedHistory.shift();
    }

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please check your connection or try again in a moment.";
  }
};
