import { type FC } from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';

const Contact: FC = () => {
  return (
    <Layout>
      <SEO 
        title="Contact Us - MedAlly"
        description="Get in touch with MedAlly for support or inquiries."
        url="https://www.medally.ai/contact"
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid gap-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <a href="mailto:info@medally.com" className="text-blue-600 hover:text-blue-700">
                  info@medally.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-600">+1 (XXX) XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Building2 className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Address</h2>
                <p className="text-gray-600">
                  123 Healthcare Innovation Street<br />
                  City, State, ZIP Code
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact; 