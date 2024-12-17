import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@/test/utils';
import { mockAnalytics } from '@/test/mocks/analytics';
import Hero from './Hero';

vi.mock('@/test/mocks/framer-motion');

describe('Hero Component', () => {
  beforeEach(() => {
    mockAnalytics.trackEvent.mockClear();
  });

  it('renders headline', () => {
    render(<Hero />);
    expect(screen.getByText(/Spend More Time with Patients/i)).toBeInTheDocument();
  });

  it('handles CTA click', () => {
    const { getByRole } = render(<Hero />);
    const button = getByRole('button', { name: /Get Started Free/i });
    fireEvent.click(button);
    
    expect(mockAnalytics.trackEvent).toHaveBeenCalledWith({
      category: 'CTA',
      action: 'Click',
      label: 'Hero Get Started'
    });
  });
}); 