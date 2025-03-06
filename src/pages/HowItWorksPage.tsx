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
        description="See how MedAlly's AI seamlessly integrates into your clinical workflow. Our platform captures patient encounters, generates structured documentation, provides clinical insights, and integrates with your EHR—all while maintaining HIPAA compliance."
        url="https://www.medally.ai/how-it-works"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">AI That Works With You, Not Against You</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
        MedAlly seamlessly integrates with your existing systems, providing AI-driven medical decision-making
        and predictive analytics in healthcare without disrupting your workflow. </p>
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