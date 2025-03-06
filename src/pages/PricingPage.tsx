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
        title="Pricing - MedAlly | Affordable Plans for Healthcare Documentation"
        description="Explore MedAlly's flexible pricing plans for our AI-powered healthcare documentation system, designed to fit practices of all sizes."
        url="https://www.medally.ai/pricing"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
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