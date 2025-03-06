// @ts-nocheck
import { type FC } from 'react';
import { SEO } from '@/components/SEO';
import Pricing from '@/components/Pricing';
import Layout from '@/components/Layout';

const PricingPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Pricing - MedAlly | Plans and Subscription Options"
        description="Explore MedAlly's flexible pricing plans for our AI-powered healthcare documentation system. Find the right solution for your practice size and needs."
        url="https://medally.ai/pricing"
      />
      <main>
        <Pricing />
       
      </main>
    </Layout>
  );
};

export default PricingPage; 