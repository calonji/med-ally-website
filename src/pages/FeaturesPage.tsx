import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import Features from '@/components/Features';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const FeaturesPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Features - MedAlly | Advanced Healthcare Documentation Tools"
        description="Explore MedAlly's comprehensive features for healthcare documentation, including AI-powered SOAP notes, lab encounters management, and clinical decision support."
        url="https://medally.ai/features"
      />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="features">
            <Features />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default FeaturesPage; 