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
        description="Discover the benefits of MedAlly's AI-powered healthcare documentation system, including time savings, improved accuracy, and enhanced patient care."
        url="https://www.medally.ai/benefits"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
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