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
        description="Use MedAlly's ROI calculator to estimate the time and cost savings your healthcare practice can achieve with our AI-powered documentation system."
        url="https://medally.ai/roi-calculator"
      />
      <main>
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