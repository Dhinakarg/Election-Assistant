import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import React from 'react';

const TestComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <div data-testid="lang">{language}</div>
      <div data-testid="trans">{t('nav.chat')}</div>
      <button onClick={() => setLanguage('hi')}>Change to Hindi</button>
    </div>
  );
};

describe('LanguageContext', () => {
  it('provides language state and translation function', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    // Default should be English
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('trans').textContent).toBe('Ask CivicGuide');
  });

  it('can change language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    fireEvent.click(screen.getByText('Change to Hindi'));
    expect(screen.getByTestId('lang').textContent).toBe('hi');
  });
});
