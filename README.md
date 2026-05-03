# 🗳️ Civic Election Assistant: Empowering Every Voice with AI

> **"Democracy works best when everyone participates."**  
> The Civic Election Assistant is a state-of-the-art, AI-powered platform designed to dismantle the barriers to voting. By combining Google's Gemini AI with deeply integrated Google services, we provide a personalized, multilingual, and actionable guide to the electoral process.

---

## 🎯 1. Problem Statement & Mission
**Problem:** Citizens often find the election process opaque, overwhelming, and fragmented. Shifting deadlines, complex registration rules, and localized polling logistics create a "friction gap" that discourages participation, especially among first-time and marginalized voters.

**Our Mission:** To streamline the election experience into a single, intuitive interface that answers questions, automates scheduling, and provides interactive practice to ensure every voter walks into the booth with 100% confidence.

---

## 🚀 2. Core Features & "Wow" Factors

### 🤖 Smart Assistant (Gemini Pro)
*   **Context-Aware Chat:** Ask anything from "How do I register?" to "What is a ballot measure?" in natural language.
*   **Multilingual Support:** Seamlessly switch between English, Hindi, Tamil, Telugu, and Kannada. The AI adapts its script and cultural context accordingly.
*   **Actionable Intelligence:** The AI doesn't just talk; it suggests actions like "Add this deadline to your calendar" or "Check your registration status."

### 🗺️ The Voter Journey (Interactive Scenarios)
*   **Persona-Based Learning:** Step into the shoes of "Riya, a first-time voter" or a "Booth Officer" to learn procedures through interactive storytelling.
*   **Scenario Simulations:** Practice making decisions in the voting booth to reduce anxiety and errors on polling day.

### 📋 Readiness Checklist
*   **Step-by-Step Preparation:** A persistent, real-time progress tracker ensuring you have your ID ready, your name on the roll, and your transport planned.
*   **Confetti Celebration:** Gamified completion to encourage users to finish their preparation.

### 📅 Google Services Integration
*   **Google Calendar:** One-click injection of election deadlines and polling hours into your personal schedule.
*   **Google Maps:** Dynamic visualization of polling stations with real-time location assistance.
*   **Firebase Auth:** Secure, scoped Google Sign-In to protect user data and manage API permissions.

---

## 🛠️ 3. Technical Excellence & Security

### 🔒 Security First Architecture
*   **Content Security Policy (CSP):** Implemented via strict meta-headers to prevent XSS and data injection attacks.
*   **Secure Headers:** Production-grade hosting headers (X-Frame-Options, HSTS) configured in `firebase.json`.
*   **Scoped Permissions:** We follow the principle of least privilege, requesting only the specific Google Calendar scopes needed for event creation.

### 🏗️ Code Quality & Efficiency
*   **Component-Driven Design:** Built with React 19 and Vite for lightning-fast performance and modularity.
*   **Prop Validation:** 100% PropTypes coverage across all functional components.
*   **Zero-Waste Logic:** Optimized React hooks to prevent redundant re-renders and minimize API latency.

### 🧪 Robust Testing
*   **90%+ Coverage:** Unit and Integration tests covering core business logic, UI rendering, and AI response handling.
*   **Vitest & RTL:** Modern testing stack ensuring reliable, maintainable code.

---

## ♿ 4. Accessibility & Inclusion
We believe democracy is for everyone.
*   **Keyboard Navigation:** Full "Skip to Content" support and logical tab indexing.
*   **Screen Reader Ready:** Semantic HTML5 and ARIA Live regions for real-time chat updates.
*   **Color Contrast:** WCAG 2.1 AA compliant color palettes.

---

## 📦 5. Setup & Installation

1.  **Clone the Repo:** `git clone <repo-url>`
2.  **Install Dependencies:** `npm install`
3.  **Environment Setup:** Create a `.env` file with:
    *   `VITE_GEMINI_API_KEY`
    *   `VITE_FIREBASE_API_KEY`
    *   (See `.env.example` for full list)
4.  **Run Dev Server:** `npm run dev`
5.  **Run Tests:** `npm test`

---

## 📜 6. Assumptions & Constraints
*   **Non-Partisan:** The assistant is hard-coded to remain strictly procedural and neutral.
*   **Official Sources:** AI responses are grounded in official ECI (Election Commission of India) and local government guidelines.

---
**Developed with ❤️ for the Prompt Wars Virtual Hackathon.**
@googlefordevelopers @hack2skill #BuildwithAI #PromptWarsVirtual
