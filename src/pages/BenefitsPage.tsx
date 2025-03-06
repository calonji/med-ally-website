import { type FC } from 'react';
import Layout from '@/components/Layout';
import WhyChoose from '@/components/WhyChoose';
import { SEO } from '@/components/SEO';

const BenefitsPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Benefits - MedAlly | Advantages of AI-Powered Healthcare Documentation"
        description="Discover the benefits of MedAlly's AI-powered healthcare documentation system, including time savings, improved accuracy, and enhanced patient care."
        url="https://medally.ai/benefits"
      />
      <main>
        <section id="benefits">
          <WhyChoose />
        </section>
      </main>
    </Layout>
  );
};

export default BenefitsPage; 