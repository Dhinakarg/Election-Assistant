import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock scrollIntoView which is not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mock IntersectionObserver
window.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
