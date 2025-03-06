import { type FC, Suspense } from 'react';
import Layout from '@/components/Layout';
import AboutUs from '@/components/AboutUs';
import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const AboutUsPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="About Us - MedAlly | Our Mission and Vision"
        description="MedAlly was founded by physicians to solve healthcare's documentation burden. Learn about our mission to transform clinical workflows with AI technology that respects the doctor-patient relationship while ensuring HIPAA compliance."
        url="https://www.medally.ai/about-us"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Story & Values</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
        A solution designed by physicians, for physicians. Combining cutting-edge AI technology with a deep understanding of clinical workflow.
         </p>
        <Suspense fallback={<LoadingSpinner />}>
          <section id="about-us">
            <AboutUs />
          </section>
        </Suspense>
      </main>
    </Layout>
  );
};

export default AboutUsPage; 