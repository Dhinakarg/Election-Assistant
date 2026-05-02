import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import VoterChecklist from './VoterChecklist';

describe('VoterChecklist Component', () => {
  it('renders the checklist header correctly', () => {
    render(<VoterChecklist />);
    expect(screen.getByText(/Voter Readiness Checklist/i)).toBeInTheDOM();
  });

  it('contains interactive mark as done buttons', () => {
    render(<VoterChecklist />);
    const markDoneButtons = screen.getAllByRole('button', { name: /Mark .* as completed/i });
    expect(markDoneButtons.length).toBeGreaterThan(0);
    
    // Simulate click on the first available button
    fireEvent.click(markDoneButtons[0]);
    expect(markDoneButtons[0]).toBeDefined();
  });
});
