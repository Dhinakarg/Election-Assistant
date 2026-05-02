import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginButton from './LoginButton';

// Mock the Firebase Auth module since we don't want to make real API calls in tests
vi.mock('../services/firebaseAuth', () => ({
  auth: {},
  signInWithGoogle: vi.fn(),
  logOut: vi.fn(),
}));

vi.mock('firebase/auth', () => ({
  GoogleAuthProvider: {
    credentialFromResult: vi.fn(),
  },
  onAuthStateChanged: vi.fn((auth, callback) => {
    // Return a dummy unsubscribe function
    return () => {};
  }),
}));

describe('LoginButton Component', () => {
  it('renders the Sign in with Google button by default', () => {
    render(<LoginButton />);
    const buttonElement = screen.getByRole('button', { name: /sign in with google/i });
    expect(buttonElement).toBeInTheDOM();
  });
});
