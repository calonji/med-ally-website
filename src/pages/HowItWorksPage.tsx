import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import HowItWorks from '@/components/HowItWorks';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const HowItWorksPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="How It Works - MedAlly | AI-Powered Healthcare Documentation Process"
        description="Learn how MedAlly's AI-powered healthcare documentation system works to streamline your clinical workflow and reduce administrative burden."
        url="https://www.medally.ai/how-it-works"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <Suspense fallback={<LoadingSpinner />}>
          <section id="how-it-works">
            <HowItWorks />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default HowItWorksPage; 