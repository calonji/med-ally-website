import { type FC } from 'react';
import { Heart, ShieldCheck, Stethoscope } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, DarkFeatureGrid, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const AboutUsPage: FC = () => (
  <Layout>
    <SEO
      title="About MedAlly | Physician-Centered Clinical AI Platform"
      description="MedAlly is a clinical AI platform built to help physicians reduce documentation burden while keeping patient care, review, and accountability at the center."
      url="https://www.medally.ai/about-us"
      image="/images/medally/brand-hero-calm-day.png"
      imageAlt="MedAlly physician-centered clinical AI platform"
      keywords={['clinical AI platform', 'physician AI assistant', 'AI healthcare assistant', 'HIPAA-aware clinical AI']}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.medally.ai/about-us' },
        ],
      }}
    />
    <main className="medally-dark-page">
      <PageHero
        eyebrow="About MedAlly"
        title="Built for physicians who need clinical AI to respect the visit"
        intro="MedAlly was created around a simple belief: AI should reduce clinical administration while preserving the doctor-patient relationship and physician accountability."
        image="/images/medally/brand-hero-calm-day.png"
        imageAlt="Calm clinical day representing MedAlly physician AI assistant"
      />
      <AnswerBlock
        question="Why was MedAlly created?"
        answer="MedAlly was created to help clinicians spend less time on documentation, follow-up, coding cleanup, and fragmented tools so more of the day can return to patient care."
        points={[
          'Designed for physician review rather than hands-off automation.',
          'Focused on the full encounter lifecycle, not only transcription.',
          'Built around privacy-conscious, HIPAA-aware clinical workflows.',
        ]}
      />
      <DarkFeatureGrid
        items={[
          { icon: <Heart className="h-5 w-5" />, title: 'Empathy for physicians', copy: 'The product starts from the daily pressure of charting, follow-up, coding, and administrative overload.', meta: 'Value' },
          { icon: <Stethoscope className="h-5 w-5" />, title: 'Patient-centered workflow', copy: 'MedAlly helps clinicians stay present with patients while the record takes shape.', meta: 'Value' },
          { icon: <ShieldCheck className="h-5 w-5" />, title: 'Security and integrity', copy: 'Clinical AI should be reviewable, accountable, and aligned with healthcare privacy expectations.', meta: 'Value' },
        ]}
      />
      <ParallaxImageBand
        eyebrow="Mission"
        title="A trusted ally for the work that follows the visit"
        copy="Documentation, reasoning, follow-up, and revenue context should support care instead of pulling clinicians away from it."
        image="/images/medally/clinical-workflow-real.png"
        imageAlt="MedAlly clinical workflow real-world physician support"
      />
    </main>
  </Layout>
);

export default AboutUsPage;
