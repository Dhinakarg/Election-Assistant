import { GoogleGenerativeAI } from "@google/generative-ai";

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
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Format chat history for Gemini API
    // Ensure that chatHistory doesn't include the current userMessage
    // and format it into the structure expected by the SDK.
    let formattedHistory = chatHistory.map((msg) => ({
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
    const responseText = result.response.text();
    
    return responseText;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please check your connection or try again in a moment.";
  }
};
