import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/providers/ThemeProvider';
import FAQPage from './FAQPage';
import rawFaqData from '@/data/faqData.json';
import { getFaqAnswerText, type FaqItem, type FaqCategoryData } from '@/data/faqUtils';

function normalizeWhitespace(str: string): string {
  return str.trim().replace(/\s+/g, ' ');
}

const allFaqs: FaqItem[] = (rawFaqData as FaqCategoryData[]).flatMap((cat) => cat.faqs);

describe('FAQPage Rendered Interaction & Runtime Schema Regression', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/faq');
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  const renderFaqPage = () => {
    return render(
      <MemoryRouter initialEntries={['/faq']}>
        <ThemeProvider>
          <HelmetProvider context={{}}>
            <FAQPage />
          </HelmetProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  it('renders all 35 FAQ question triggers with unique questions and valid aria controls', () => {
    const { container } = renderFaqPage();

    const expectedFaqs = allFaqs;
    expect(expectedFaqs.length).toBe(35);

    const triggers = Array.from(
      container.querySelectorAll<HTMLButtonElement>('button[aria-controls^="faq-answer-"]')
    );
    expect(triggers.length).toBe(35);

    // Verify uniqueness of question texts
    const questionTexts = triggers.map((t) => normalizeWhitespace(t.querySelector('h3')?.textContent || ''));
    const uniqueQuestions = new Set(questionTexts);
    expect(uniqueQuestions.size).toBe(35);

    // Verify each trigger has valid aria attributes matching its ID
    for (const faq of expectedFaqs) {
      const trigger = document.getElementById(`faq-trigger-${faq.id}`);
      expect(trigger).not.toBeNull();
      expect(trigger?.getAttribute('aria-controls')).toBe(`faq-answer-${faq.id}`);
      expect(trigger?.getAttribute('aria-expanded')).toMatch(/^(true|false)$/);
    }
  });

  it('toggles accordion open/close, updates aria-expanded, and verifies role=region', () => {
    renderFaqPage();

    const expectedFaqs = allFaqs;
    const closedFaq = expectedFaqs.find((f) => f.id === 'how-does-medally-work')!;
    expect(closedFaq).toBeTruthy();

    const trigger = document.getElementById(`faq-trigger-${closedFaq.id}`) as HTMLButtonElement;
    expect(trigger).not.toBeNull();
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    // Closed panel is not mounted in DOM
    expect(document.getElementById(`faq-answer-${closedFaq.id}`)).toBeNull();

    // Click to open
    act(() => {
      fireEvent.click(trigger);
    });

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    const openPanel = document.getElementById(`faq-answer-${closedFaq.id}`);
    expect(openPanel).not.toBeNull();
    expect(openPanel?.getAttribute('role')).toBe('region');
    expect(openPanel?.getAttribute('aria-labelledby')).toBe(trigger.id);
    expect(openPanel?.textContent).toContain(closedFaq.a[0]);

    // Click to close
    act(() => {
      fireEvent.click(trigger);
    });

    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('matches rendered accordion answers against runtime FAQPage canonical answer text across all 35 questions', () => {
    renderFaqPage();

    const expectedFaqs = allFaqs;

    for (const faq of expectedFaqs) {
      const trigger = document.getElementById(`faq-trigger-${faq.id}`) as HTMLButtonElement;
      expect(trigger).not.toBeNull();

      // If closed, click to open
      if (trigger.getAttribute('aria-expanded') === 'false') {
        act(() => {
          fireEvent.click(trigger);
        });
      }

      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      const panel = document.getElementById(`faq-answer-${faq.id}`);
      expect(panel).not.toBeNull();

      const renderedText = normalizeWhitespace(panel!.textContent || '');
      const expectedAnswerText = normalizeWhitespace(getFaqAnswerText(faq));

      // Paragraphs verification
      for (const p of faq.a) {
        expect(renderedText).toContain(normalizeWhitespace(p));
      }

      // Supplementary links verification
      if (faq.links && faq.links.length > 0) {
        for (const link of faq.links) {
          expect(renderedText).toContain(normalizeWhitespace(link.text));
          if (link.prefix) expect(renderedText).toContain(normalizeWhitespace(link.prefix));
          if (link.suffix) expect(renderedText).toContain(normalizeWhitespace(link.suffix));

          const linkEl = panel!.querySelector(`a[href="${link.href}"]`);
          expect(linkEl).not.toBeNull();
        }
      }

      // Parity check with canonical answer text
      expect(renderedText).toBe(expectedAnswerText);
    }
  });

  it('keyboard accessibility regression: closed accordion removes descendant links from accessibility tree', () => {
    renderFaqPage();

    const expectedFaqs = allFaqs;
    const faqWithLink = expectedFaqs.find((f) => f.links && f.links.length > 0 && f.id !== 'what-is-medally')!;
    expect(faqWithLink).toBeTruthy();

    const trigger = document.getElementById(`faq-trigger-${faqWithLink.id}`) as HTMLButtonElement;
    expect(trigger).not.toBeNull();

    // Ensure it is closed
    if (trigger.getAttribute('aria-expanded') === 'true') {
      act(() => {
        fireEvent.click(trigger);
      });
    }
    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    // Panel is unmounted: Tab key cannot focus descendant links
    const panel = document.getElementById(`faq-answer-${faqWithLink.id}`);
    expect(panel).toBeNull();
  });
});
