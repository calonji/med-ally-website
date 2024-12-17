import { Analytics, type UserProperties } from './analytics';

export const trackUserProperties = (properties: Omit<UserProperties, 'timestamp'>) => {
  Analytics.setUserProperties({
    ...properties,
    timestamp: new Date().toISOString()
  });
};

export const setUserProperties = (properties: UserProperties) => {
  Analytics.setUserProperties(properties);
}; 