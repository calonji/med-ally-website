import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import FAQ from '@/components/FAQ';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const FAQPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="FAQ - MedAlly | Frequently Asked Questions About Our Healthcare AI"
        description="Find answers to common questions about MedAlly's AI-powered healthcare documentation system, including features, security, and implementation."
        url="https://www.medally.ai/faq"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
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