import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatWindow from './ChatWindow';
import { LanguageProvider } from '../context/LanguageContext';
import { AuthProvider } from '../context/AuthContext';

// Mock the Gemini API so we don't make real network calls in tests
vi.mock('../services/geminiApi', () => ({
  callGemini: vi.fn(() => Promise.resolve('This is a mocked response from Gemini.')),
}));

describe('ChatWindow Component', () => {
  it('renders the initial message and handles user input', async () => {
    render(
      <AuthProvider>
        <LanguageProvider>
          <ChatWindow />
        </LanguageProvider>
      </AuthProvider>
    );

    // Initial greeting should be present
    expect(screen.getByText(/Hi! I'm CivicGuide/i)).toBeInTheDOM();

    // Find input and send button
    const input = screen.getByRole('textbox', { name: /chat input/i });
    const sendButton = screen.getByRole('button', { name: /send message/i });

    // Type a message
    fireEvent.change(input, { target: { value: 'How do I vote?' } });
    expect(input.value).toBe('How do I vote?');

    // Submit
    fireEvent.click(sendButton);

    // User message should appear immediately
    expect(await screen.findByText('How do I vote?')).toBeInTheDOM();
  });
});
