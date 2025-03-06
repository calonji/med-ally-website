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
        url="https://www.medally.ai/features"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">MedAlly Features</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Discover our comprehensive suite of AI-powered tools designed to streamline healthcare documentation and improve clinical workflows.
        </p>
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