import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import React from 'react';

// Mock Firebase
vi.mock('./services/firebaseAuth', () => ({
  auth: { currentUser: null },
  signInWithGoogle: vi.fn(),
  logOut: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback(null);
    return () => {};
  }),
  getAuth: vi.fn(() => ({})),
  GoogleAuthProvider: vi.fn(),
}));

describe('App Component', () => {
  it('renders the main layout and chat window by default', () => {
    render(
      <AuthProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthProvider>
    );
    // The h1 has appName which is CivicGuide
    expect(screen.getByRole('heading', { level: 1, name: /CivicGuide/i })).toBeInTheDOM();
    expect(screen.getByText(/Assistant Chat/i)).toBeInTheDOM();
  });
});
