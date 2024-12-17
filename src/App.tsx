import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { trackPerformanceMetrics } from '@/utils/performance';
import { Analytics } from '@/utils/analytics';
import { type FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from '@/pages/LandingPage';
import { TrackingProvider } from '@/providers/TrackingProvider';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Contact from '@/pages/Contact';

const App: FC = () => {
  useEffect(() => {
    Analytics.init(import.meta.env.VITE_GA_MEASUREMENT_ID);
    trackPerformanceMetrics();
  }, []);

  return (
    <Router>
      <TrackingProvider measurementId="G-XXXXXXXXXX">
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HelmetProvider>
      </TrackingProvider>
    </Router>
  );
};

export default App;
