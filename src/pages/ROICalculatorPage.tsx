import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import ROICalculator from '@/components/ROICalculator';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const ROICalculatorPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="ROI Calculator - MedAlly | Calculate Your Healthcare Documentation Savings"
        description="Calculate how much time and money your healthcare practice can save with MedAlly's AI documentation system. Our ROI calculator shows potential savings in documentation time, operational costs, and increased patient capacity."
        url="https://www.medally.ai/roi-calculator"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "MedAlly ROI Calculator",
          "applicationCategory": "HealthcareApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Calculate potential time and cost savings for your healthcare practice with MedAlly's AI-powered documentation system."
        }}
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">ROI Calculator</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Estimate the potential time and cost savings for your healthcare practice with MedAlly's AI-powered documentation system.
        </p>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="roi-calculator">
            <ROICalculator />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default ROICalculatorPage; 