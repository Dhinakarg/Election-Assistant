import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

// A small component to test the context
const TestComponent = () => {
  const { user, accessToken } = useAuth();
  return (
    <div>
      <div data-testid="user">{user ? user.name : 'no-user'}</div>
      <div data-testid="token">{accessToken ? 'has-token' : 'no-token'}</div>
    </div>
  );
};

vi.mock('../services/firebaseAuth', () => ({
  auth: {},
}));

vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((auth, callback) => {
    // Simulate no user logged in
    callback(null);
    return () => {};
  }),
}));

describe('AuthContext', () => {
  it('provides default auth state', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
    expect(screen.getByTestId('user').textContent).toBe('no-user');
    expect(screen.getByTestId('token').textContent).toBe('no-token');
  });
});
