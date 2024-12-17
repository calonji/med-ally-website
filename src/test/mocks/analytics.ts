import { vi } from 'vitest';

export const mockAnalytics = {
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  trackTiming: vi.fn(),
  trackException: vi.fn(),
  setUserProperties: vi.fn(),
  init: vi.fn(),
  isInitialized: true
};

vi.mock('@/utils/analytics', () => ({
  Analytics: mockAnalytics
})); 