// src/pages/LandingPage.tsx
import { type FC } from 'react';
import { Helmet } from 'react-helmet-async'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CaseStudies from '../components/CaseStudies'
import ROICalculator from '../components/ROICalculator'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Benefits from '../components/Benefits'

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        {/* Add meta tags, title etc. for SEO */}
      </Helmet>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <AboutUs />
        <HowItWorks />
        <Features />
        {/* <AICapabilities /> */}
        <Benefits />
        <CaseStudies />
        <ROICalculator />
        {/* <Integration /> */}
        {/* <SecurityCompliance /> */}
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
