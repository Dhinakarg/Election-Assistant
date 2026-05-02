import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RolePlayHub from './RolePlayHub';

describe('RolePlayHub Component', () => {
  it('renders the hub header correctly', () => {
    render(<RolePlayHub />);
    expect(screen.getByText(/Voter Journey Scenarios/i)).toBeInTheDOM();
  });

  it('renders all scenario cards with start buttons', () => {
    render(<RolePlayHub />);
    const startButtons = screen.getAllByText(/Start Story/i);
    expect(startButtons.length).toBeGreaterThan(0);
  });
});
