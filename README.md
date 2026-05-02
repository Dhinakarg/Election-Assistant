# Civic Election Assistant

An AI-powered dynamic assistant designed to empower citizens by providing real-time, context-aware information about elections, voting procedures, and polling locations. 

## 1. Chosen Vertical: Civic Engagement & Election Assistant

We chose the **Civic Engagement** vertical. Navigating elections can be overwhelming due to shifting deadlines, changing polling locations, and varying requirements for different types of voters (e.g., mail-in, early voting, accessibility needs). The Civic Election Assistant acts as a smart, personalized guide that helps voters understand their rights, find their polling places, and remember key dates.

## 2. Approach and Logic

Our approach centers around a dynamic, conversational interface powered by **Google's Gemini API**, combined with deeply integrated **Google Services**. The logic is driven by user context:
*   **Context-Aware Chat:** The assistant processes natural language queries to provide accurate, non-partisan information about voting procedures.
*   **Roleplay/Persona Scenarios:** We provide tailored journeys for specific personas (e.g., First-time voter, Mail-in voter). The assistant adjusts its logic to walk the user through their specific requirements step-by-step.
*   **Actionable Integration:** Instead of just providing text, the assistant triggers actions. It can plot polling locations on **Google Maps** and inject election deadlines directly into the user's **Google Calendar** using Firebase Authentication for secure credential management.

## 3. How the Solution Works

The application is built using **React** and **Vite**, with styling provided by **Tailwind CSS**. 

*   **Authentication (Security & Google Services):** Users sign in securely using **Firebase Authentication** (Google Auth Provider). This grants the application scoped, secure access to interact with Google APIs on their behalf.
*   **The Smart Assistant (Gemini API):** The core chat experience interfaces with the Gemini API. We pass election-specific context and constraints in the system prompts to ensure responses remain factual, non-partisan, and focused on civic procedures.
*   **Calendar Integration (Google Calendar API):** When a user asks about deadlines or views the timeline, they can click "Add to Calendar." The app uses their secure access token to create events directly in their Google Calendar.
*   **Location Services (Google Maps API):** When a user needs to find a polling station, the application utilizes the Google Maps Embed API to dynamically render nearby locations.

## 4. Assumptions Made

*   **Non-Partisan Requirement:** We assume the assistant should exclusively provide procedural and logistical information, strictly avoiding any political bias, candidate endorsements, or policy debates.
*   **Locality:** We assume the user is querying about US-based elections, though the logic can be expanded globally.
*   **Familiarity with Google Ecosystem:** We assume users have a Google Account to maximize the utility of Calendar and Maps integrations.

## Evaluation Focus Areas Addressed

*   **Code Quality:** Component-driven architecture using React best practices, structured directories (`/components`, `/services`, `/constants`).
*   **Security:** API keys and sensitive tokens are managed via environment variables and Firebase Authentication. We never store raw credentials.
    *   *Important Note on Gemini API:* For the scope of this hackathon prototype and ease of local testing, the Gemini API is called directly from the client. In a real-world production environment, these calls would be proxied through a secure backend to prevent exposing the `VITE_GEMINI_API_KEY`.
*   **Efficiency:** React hooks (`useState`, `useEffect`) are used optimally. Contexts are maintained without redundant API calls.
*   **Testing:** Basic unit testing configured to validate core UI rendering and utility functions.
*   **Accessibility:** ARIA labels (`aria-label`, `aria-hidden`), semantic HTML (`<main>`, `<header>`), and proper color contrast have been implemented to ensure inclusive design.
*   **Google Services:** Deep, meaningful integration of Gemini (AI), Maps (Location), Calendar (Productivity), and Firebase (Auth/Security).
