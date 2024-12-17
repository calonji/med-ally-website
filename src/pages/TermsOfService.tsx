import { type FC } from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const TermsOfService: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Terms of Service - MedAlly"
        description="Read MedAlly's terms of service and usage guidelines."
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-3xl mx-auto"
        >
          <h1>Terms of Service</h1>
          {/* Add terms of service content */}
        </motion.div>
      </div>
    </Layout>
  );
};

export default TermsOfService; 