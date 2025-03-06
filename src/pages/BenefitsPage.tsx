import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import Benefits from '@/components/Benefits';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const BenefitsPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Benefits - MedAlly | Advantages of AI-Powered Healthcare Documentation"
        description="Discover the key benefits of MedAlly's AI-powered healthcare documentation platform, including time savings, improved accuracy, and reduced physician burnout."
        url="https://www.medally.ai/benefits"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">MedAlly Benefits</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Experience the transformative advantages of our AI-powered healthcare documentation platform for clinicians, administrators, and patients.
        </p>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="benefits">
            <Benefits />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default BenefitsPage; 