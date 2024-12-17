// src/pages/LandingPage.tsx
import { type FC, Suspense, lazy } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import WhyChoose from '@/components/WhyChoose';

// Lazy loaded components
const Features = lazy(() => Promise.resolve(import('@/components/Features')));
const ROICalculator = lazy(() => Promise.resolve(import('@/components/ROICalculator')));

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO />
      <Header />
      <main className="flex flex-col w-full pt-16">
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
        <section id="case-studies">
          <CaseStudies />
        </section>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="roi-calculator">
            <ROICalculator />
          </section>
        </Suspense>
        <section id="faq">
          <FAQ />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
