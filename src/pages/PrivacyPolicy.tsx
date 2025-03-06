import { type FC } from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const PrivacyPolicy: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy - MedAlly"
        description="Learn about MedAlly's privacy policy and how we protect your data."
        url="https://www.medally.ai/privacy-policy"
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-3xl mx-auto"
        >
          <h1>Privacy Policy</h1>
          {/* Add privacy policy content */}
        </motion.div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 