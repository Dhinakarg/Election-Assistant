import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';

describe('App Component', () => {
  it('renders the main layout and chat window by default', () => {
    render(
      <AuthProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthProvider>
    );
    expect(screen.getByText(/Civic Election Assistant/i)).toBeInTheDOM();
    expect(screen.getByText(/Assistant Chat/i)).toBeInTheDOM();
  });
});
