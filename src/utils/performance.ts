import { Analytics } from './analytics';

export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  try {
    const metrics = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (metrics) {
      Analytics.trackTiming({
        category: 'Page Load',
        variable: 'DOM Content Loaded',
        value: metrics.domContentLoadedEventEnd,
      });
      
      Analytics.trackTiming({
        category: 'Page Load',
        variable: 'Load Complete',
        value: metrics.loadEventEnd,
      });
    }
  } catch (error) {
    console.warn('Failed to track performance metrics:', error);
  }
}; 