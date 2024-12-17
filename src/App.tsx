import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { trackPerformanceMetrics } from '@/utils/performance';
import { Analytics } from '@/utils/analytics';
import { type FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from '@/pages/LandingPage';
import { TrackingProvider } from '@/providers/TrackingProvider';

const App: FC = () => {
  useEffect(() => {
    Analytics.init(import.meta.env.VITE_GA_MEASUREMENT_ID);
    trackPerformanceMetrics();
  }, []);

  return (
    <BrowserRouter>
      <TrackingProvider measurementId="G-XXXXXXXXXX">
        <HelmetProvider>
          <div className="min-h-screen w-full bg-background">
            <LandingPage />
          </div>
        </HelmetProvider>
      </TrackingProvider>
    </BrowserRouter>
  );
};

export default App;
