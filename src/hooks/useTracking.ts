import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@/utils/analytics';

export const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.trackPageView({
      path: location.pathname + location.search,
      title: document.title
    });
  }, [location]);

  return {
    trackEvent: Analytics.trackEvent,
    trackTiming: Analytics.trackTiming,
    trackException: Analytics.trackException
  };
}; 