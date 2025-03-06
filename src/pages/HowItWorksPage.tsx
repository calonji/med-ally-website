import { type FC } from 'react';
import Layout from '@/components/Layout';
import HowItWorks from '@/components/HowItWorks';
import { SEO } from '@/components/SEO';

const HowItWorksPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="How It Works - MedAlly | AI-Powered Healthcare Documentation"
        description="Discover how MedAlly's AI-powered platform streamlines healthcare documentation, enhances clinical workflows, and improves patient care."
        url="https://medally.ai/how-it-works"
      />
      <main>
        <section id="how-it-works">
          <HowItWorks />
        </section>
      </main>
    </Layout>
  );
};

export default HowItWorksPage; 