import { type FC } from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { PageHero } from '@/components/PagePrimitives';

const PrivacyPolicy: FC = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy - MedAlly Clinical AI Platform"
        description="Learn how MedAlly approaches privacy for clinical AI platform visitors, clinicians, care teams, and healthcare product workflows."
        url="https://www.medally.ai/privacy-policy"
        image="/images/medally/clinical-workflow-real.png"
        imageAlt="MedAlly privacy-conscious clinical AI workflow"
        keywords={['MedAlly privacy policy', 'clinical AI platform privacy', 'HIPAA-aware clinical AI']}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.medally.ai/privacy-policy' },
          ],
        }}
      />
      <main className="medally-dark-page">
        <PageHero
          eyebrow="Privacy"
          title="Privacy for clinical AI workflows"
          intro="MedAlly handles website and product information with healthcare-aware privacy expectations, security controls, and clear customer responsibilities."
          image="/images/medally/clinical-workflow-real.png"
          imageAlt="MedAlly clinical AI privacy and workflow context"
          ctaLabel="Contact us"
          ctaHref="https://www.calonji.com/contact"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert mx-auto max-w-3xl px-4 py-16"
        >
          <h2>Privacy Policy</h2>
          <p>
            <strong>Last updated: May 2, 2026</strong>
          </p>
          <p>
            MedAlly is a healthcare technology product operated by Calonji Inc. This policy explains how we collect,
            use, and safeguard information when clinicians, care teams, and visitors use the MedAlly website and related
            product experiences.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect contact details, organization information, account registration data, product usage signals,
            device and browser metadata, support messages, and information you choose to submit through forms. When
            MedAlly is configured for a healthcare organization, protected health information is handled only according
            to the applicable customer agreement, business associate agreement, and configured product workflow.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use information to provide and improve MedAlly, respond to requests, support onboarding, operate secure
            product features, monitor performance, prevent misuse, and communicate about product updates. We do not sell
            protected health information or use it for unrelated advertising.
          </p>

          <h2>Healthcare Privacy and Security</h2>
          <p>
            MedAlly is designed for privacy-conscious clinical workflows. We apply administrative, technical, and
            organizational safeguards intended to support HIPAA-aligned operation, including access controls, encryption
            in transit, audit-oriented practices, and limited access to customer data. Healthcare customers remain
            responsible for configuring the product and their workflows according to their legal and compliance
            obligations.
          </p>

          <h2>Service Providers and Disclosures</h2>
          <p>
            We may share information with service providers that help us host, secure, analyze, support, and operate the
            service. We may also disclose information when required by law, to protect rights and safety, or as part of a
            business transaction. Service providers are expected to use information only for the services they provide to
            us.
          </p>

          <h2>Retention and Your Choices</h2>
          <p>
            We retain information for as long as needed to provide the service, meet legal obligations, resolve disputes,
            and enforce agreements. You may request access, correction, or deletion of personal information where
            applicable by contacting us. Some data may need to be retained for security, compliance, or contractual
            reasons.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to <a href="mailto:info@calonji.com">info@calonji.com</a> or through
            the Calonji contact page at{' '}
            <a href="https://www.calonji.com/contact" target="_blank" rel="noopener noreferrer">
              www.calonji.com/contact
            </a>
            .
          </p>
        </motion.div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;
