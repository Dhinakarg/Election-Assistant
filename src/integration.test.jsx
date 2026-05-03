import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import React from 'react';

// Mock Firebase and Gemini
vi.mock('./services/firebaseAuth', () => ({
  auth: { currentUser: null },
  signInWithGoogle: vi.fn(),
  logOut: vi.fn(),
}));

vi.mock('./services/geminiApi', () => ({
  callGemini: vi.fn(() => Promise.resolve("This is a mock AI response about elections.")),
}));

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback(null); // No user initially
    return () => {};
  }),
  getAuth: vi.fn(() => ({})),
  GoogleAuthProvider: vi.fn(),
}));

describe('Integration: Voter Journey Flow', () => {
  it('navigates through the main features', async () => {
    render(
      <AuthProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthProvider>
    );
    
    // 1. Check if we are on the welcome page
    // Use heading specifically to avoid multiple matches
    expect(screen.getByRole('heading', { name: /CivicGuide/i })).toBeInTheDOM();
    
    // 2. Navigate to Voter Journey
    const journeyBtn = screen.getByRole('button', { name: /Voter Journey/i });
    fireEvent.click(journeyBtn);
    
    // 3. Verify we are on the Role Play selection screen
    expect(screen.getByText(/Voter Journey Scenarios/i)).toBeInTheDOM();
    
    // 4. Start "Riya's First Vote" scenario
    const riyaScenario = screen.getByText(/Riya's First Vote/i);
    fireEvent.click(riyaScenario);
    
    // 5. Verify story mode started (Instruction text)
    expect(screen.getByText(/Instruction:/i)).toBeInTheDOM();
  });
});
