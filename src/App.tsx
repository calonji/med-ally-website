import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { trackPerformanceMetrics } from '@/utils/performance';
import { Analytics } from '@/utils/analytics';
import { type FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from '@/pages/LandingPage';
import { TrackingProvider } from '@/providers/TrackingProvider';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about-us" element={<LandingPage />} />
            <Route path="/how-it-works" element={<LandingPage />} />
            <Route path="/features" element={<LandingPage />} />
            <Route path="/benefits" element={<LandingPage />} />
            <Route path="/roi-calculator" element={<LandingPage />} />
            <Route path="/faq" element={<LandingPage />} />
            <Route path="/pricing" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HelmetProvider>
      </TrackingProvider>
    </Router>
  );
};

export default App;
