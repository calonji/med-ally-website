// src/pages/LandingPage.tsx
import { type FC, Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { SEO } from '@/components/SEO';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
// import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import AboutUs from '@/components/AboutUs';
import WhyChoose from '@/components/WhyChoose';
import Layout from '@/components/Layout';

// Lazy loaded components
const Features = lazy(() => Promise.resolve(import('@/components/Features')));
const ROICalculator = lazy(() => Promise.resolve(import('@/components/ROICalculator')));

const LandingPage: FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Map routes to section IDs
    const routeToSection: Record<string, string> = {
      '/about-us': 'about-us',
      '/how-it-works': 'how-it-works',
      '/features': 'features',
      '/benefits': 'benefits',
      '/roi-calculator': 'roi-calculator',
      '/faq': 'faq',
      '/pricing': 'pricing',
    };

    const sectionId = routeToSection[location.pathname];
    if (sectionId) {
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 64; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <SEO />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="features">
            <Features />
          </section>
        </Suspense>
        <section id="benefits">
          <WhyChoose />
        </section>
        {/* <section id="case-studies">
          <CaseStudies />
        </section> */}
        <Suspense fallback={<LoadingSpinner />}>
          <section id="roi-calculator">
            <ROICalculator />
          </section>
        </Suspense>
        <section id="faq">
          <FAQ />
        </section>
        <section id="pricing">
          <CTASection />
        </section>
      </main>
    </Layout>
  );
};

export default LandingPage;
