import { type FC } from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { PageHero } from '@/components/PagePrimitives';

const TermsOfService: FC = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service - MedAlly Clinical AI Platform"
        description="Read the MedAlly terms of service for clinical AI platform website and product experiences operated by Calonji Inc."
        url="https://www.medally.ai/terms-of-service"
        image="/images/medally/workflow-room.png"
        imageAlt="MedAlly clinical AI platform terms and workflow"
        keywords={['MedAlly terms of service', 'clinical AI platform terms', 'physician AI assistant terms']}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
            { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://www.medally.ai/terms-of-service' },
          ],
        }}
      />
      <main className="medally-dark-page">
        <PageHero
          eyebrow="Terms"
          title="Terms for MedAlly product experiences"
          intro="These terms explain permitted use, clinical responsibility, account security, customer data, and acceptable use for MedAlly."
          image="/images/medally/workflow-room.png"
          imageAlt="MedAlly clinical AI terms of service workflow"
          ctaLabel="Contact us"
          ctaHref="https://www.calonji.com/contact"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert mx-auto max-w-3xl px-4 py-16"
        >
          <h2>Terms of Service</h2>
          <p>
            <strong>Last updated: May 2, 2026</strong>
          </p>
          <p>
            These Terms of Service govern access to the MedAlly website and product experiences operated by Calonji Inc.
            By using MedAlly, you agree to these terms and any additional agreement that applies to your organization.
          </p>

          <h2>Use of MedAlly</h2>
          <p>
            MedAlly is intended for authorized healthcare, administrative, and evaluation use. You are responsible for
            using the service only as permitted, maintaining accurate account information, and ensuring that your use
            complies with applicable laws, professional obligations, and organization policies.
          </p>

          <h2>Clinical Responsibility</h2>
          <p>
            MedAlly may support documentation, workflow assistance, and operational insights, but it does not replace
            professional medical judgment. Clinicians and healthcare organizations remain responsible for reviewing
            outputs, making care decisions, maintaining medical records, and confirming that any use of the service is
            appropriate for their setting.
          </p>

          <h2>Accounts and Security</h2>
          <p>
            You must protect credentials and promptly notify us of suspected unauthorized access. We may suspend access
            if we believe an account is compromised, used in violation of these terms, or creates risk for the service,
            customers, patients, or the public.
          </p>

          <h2>Customer Data</h2>
          <p>
            Customer data remains subject to the applicable customer agreement, business associate agreement where
            required, and privacy commitments. You grant us the rights needed to host, process, secure, support, and
            improve the service according to those agreements.
          </p>

          <h2>Acceptable Use</h2>
          <p>
            You may not attempt to disrupt the service, bypass access controls, reverse engineer protected portions of
            the product, upload malicious content, use the service for unlawful purposes, or submit information you are
            not authorized to provide.
          </p>

          <h2>Changes and Contact</h2>
          <p>
            We may update these terms as MedAlly evolves. Material changes will be posted on this page or communicated
            through appropriate product or customer channels. Questions can be sent to{' '}
            <a href="mailto:info@calonji.com">info@calonji.com</a>.
          </p>
        </motion.div>
      </main>
    </Layout>
  );
};

export default TermsOfService;
