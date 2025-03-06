import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { trackPerformanceMetrics } from '@/utils/performance';
import { type FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from '@/pages/LandingPage';
import { TrackingProvider } from '@/providers/TrackingProvider';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Contact from '@/pages/Contact';
import AboutUsPage from '@/pages/AboutUsPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import FeaturesPage from '@/pages/FeaturesPage';
import BenefitsPage from '@/pages/BenefitsPage';
import ROICalculatorPage from '@/pages/ROICalculatorPage';
import FAQPage from '@/pages/FAQPage';
import PricingPage from '@/pages/PricingPage';
import ScrollToTop from '@/components/ScrollToTop';

const App: FC = () => {
  useEffect(() => {
    trackPerformanceMetrics();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <TrackingProvider measurementId={import.meta.env.VITE_GA_MEASUREMENT_ID}>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/roi-calculator" element={<ROICalculatorPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/pricing" element={<PricingPage />} />
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
