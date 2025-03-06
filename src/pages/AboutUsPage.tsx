import { type FC } from 'react';
import Layout from '@/components/Layout';
import AboutUs from '@/components/AboutUs';
import { SEO } from '@/components/SEO';

const AboutUsPage: FC = () => {
  return (
    <Layout>
      <SEO 
        title="About Us - MedAlly | Our Mission and Vision"
        description="Learn about MedAlly's mission to transform healthcare with AI-powered solutions that enhance clinical documentation and streamline workflows."
        url="https://medally.ai/about-us"
      />
      <main>
        <section id="about-us">
          <AboutUs />
        </section>
      </main>
    </Layout>
  );
};

export default AboutUsPage; 