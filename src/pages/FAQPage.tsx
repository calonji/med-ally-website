import { type FC } from 'react';
import Layout from '@/components/Layout';
import FAQ from '@/components/FAQ';
import { SEO } from '@/components/SEO';

const FAQPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="FAQ - MedAlly | Frequently Asked Questions"
        description="Find answers to frequently asked questions about MedAlly's AI-powered healthcare documentation system, features, pricing, and implementation."
        url="https://medally.ai/faq"
      />
      <main>
        <section id="faq">
          <FAQ />
        </section>
      </main>
    </Layout>
  );
};

export default FAQPage; 