import { Analytics } from './analytics';

export const trackError = (error: Error, componentStack?: string) => {
  Analytics.trackException({
    description: `${error.name}: ${error.message}${componentStack ? `\nComponent: ${componentStack}` : ''}`,
    fatal: false
  });
}; 