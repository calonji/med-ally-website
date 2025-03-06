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
        description="Learn about MedAlly's mission to transform healthcare with AI-powered solutions that enhance clinical documentation and streamline workflows."
        url="https://www.medally.ai/about-us"
      />
      <main className="container mx-auto px-4 py-8 pt-24 mt-10">
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