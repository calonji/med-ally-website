import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import FAQ from '@/components/FAQ';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const FAQPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="FAQ - MedAlly | Frequently Asked Questions"
        description="Get answers to common questions about MedAlly's AI healthcare assistant. Learn about implementation, security, pricing, EHR integration, and how our platform helps physicians reduce documentation time by up to 70%."
        url="https://www.medally.ai/faq"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
          Get answers to common questions about MedAlly's AI-powered healthcare documentation platform, implementation process, and benefits.
        </p>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="faq">
            <FAQ />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default FAQPage; 