export const trackEvent = (eventName: string, properties?: Record<string, unknown>): void => {
  // Integration with your analytics platform
  console.log('Track Event:', eventName, properties);
}; 