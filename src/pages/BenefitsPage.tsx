import { type FC } from 'react';
import { Clock, FileCheck2, Stethoscope, WalletCards } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, DarkFeatureGrid, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const BenefitsPage: FC = () => (
  <Layout>
    <SEO
      title="MedAlly Benefits | Clinical AI Platform for Better Physician Workflows"
      description="Learn how MedAlly helps reduce documentation burden, improve clinical review, support coding accuracy, and give physicians more time for patient care."
      url="https://www.medally.ai/benefits"
      image="/images/medally/clinical-hero.webp"
      imageAlt="Clinician using MedAlly clinical AI platform during a calm clinical day"
      keywords={['clinical AI platform', 'reduce documentation burden', 'physician AI assistant', 'AI healthcare assistant']}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
          { '@type': 'ListItem', position: 2, name: 'Benefits', item: 'https://www.medally.ai/benefits' },
        ],
      }}
    />
    <main className="medally-dark-page">
      <PageHero
        eyebrow="Benefits"
        title="Clinical AI that gives the day back to physicians"
        intro="MedAlly reduces the administrative drag around documentation, clinical review, follow-up, and coding while keeping clinicians accountable for the final chart."
        image="/images/medally/clinical-hero.webp"
        imageAlt="Physician using MedAlly clinical AI assistant in a clinical workspace"
      />
      <AnswerBlock
        question="How does clinical AI reduce documentation burden?"
        answer="Clinical AI reduces documentation burden by turning encounter context into structured drafts, then keeping review, care-plan, and coding details in the same workflow instead of creating separate cleanup work."
        points={[
          'Less after-hours charting because notes begin during the encounter.',
          'Fewer disconnected handoffs because decision support and coding context stay attached.',
          'More usable review because the clinician can edit and approve before sign-off.',
        ]}
      />
      <DarkFeatureGrid
        items={[
          { icon: <Clock className="h-5 w-5" />, title: 'Save documentation time', copy: 'Draft notes and summaries earlier so physicians can close charts with less after-hours work.', meta: 'Time' },
          { icon: <Stethoscope className="h-5 w-5" />, title: 'Protect clinical judgment', copy: 'Recommendations are presented as reviewable support, not autonomous decisions.', meta: 'Care' },
          { icon: <WalletCards className="h-5 w-5" />, title: 'Improve revenue workflow', copy: 'Coding and billing signals are prepared while clinical details are still fresh.', meta: 'Revenue' },
          { icon: <FileCheck2 className="h-5 w-5" />, title: 'Create cleaner records', copy: 'Structured documentation improves handoffs, follow-up, and downstream review.', meta: 'Records' },
        ]}
      />
      <ParallaxImageBand
        eyebrow="Clinical operations"
        title="The benefit is not another dashboard. It is a calmer clinical day."
        copy="MedAlly helps physicians and practice leaders reduce administrative load without fragmenting the encounter workflow."
        image="/images/medally/workflow-room.png"
        imageAlt="MedAlly clinical workflow room showing practice operations and documentation flow"
      />
    </main>
  </Layout>
);

export default BenefitsPage;
