// @ts-nocheck
import { type FC, Suspense } from 'react';
import { SEO } from '@/components/SEO';
import Pricing from '@/components/Pricing';
import Layout from '@/components/Layout';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const PricingPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Pricing - MedAlly | Flexible Plans for Healthcare Providers"
        description="Explore MedAlly's transparent pricing plans designed for healthcare providers of all sizes, from solo practitioners to large hospital systems."
        url="https://www.medally.ai/pricing"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Transparent and flexible pricing options designed to meet the needs of healthcare providers of all sizes.
        </p>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="pricing">
            <Pricing />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default PricingPage; 