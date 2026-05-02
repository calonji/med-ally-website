import { type FC } from 'react';
import { CheckCircle2, Database, FileText, ShieldCheck } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, DarkFeatureGrid, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const HowItWorksPage: FC = () => (
  <Layout>
    <SEO
      title="How MedAlly Works | Clinical AI Workflow for Physicians"
      description="See how MedAlly fits into clinical workflows with EHR integration, AI clinical documentation, physician review, and medical coding automation."
      url="https://www.medally.ai/how-it-works"
      image="/images/medally/brand-two-screens-one-truth.png"
      imageAlt="MedAlly clinical workflow turning an encounter into a completed record"
      keywords={['clinical AI platform', 'EHR workflow integration', 'AI clinical documentation', 'physician AI assistant']}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
          { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://www.medally.ai/how-it-works' },
        ],
      }}
    />
    <main className="medally-dark-page">
      <PageHero
        eyebrow="How it works"
        title="A clinical AI workflow that stays under physician control"
        intro="MedAlly listens, drafts, reasons, and prepares coding context around the existing clinical workflow so clinicians can review before anything reaches the chart."
        image="/images/medally/brand-two-screens-one-truth.png"
        imageAlt="MedAlly workflow image showing clinical conversation and chart-ready documentation"
      />
      <AnswerBlock
        question="How does MedAlly fit into a clinical workflow?"
        answer="MedAlly fits beside the encounter, not on top of it. It captures context, drafts documentation, surfaces decision support, and prepares coding signals while preserving a clear physician review step."
        points={[
          'Connect the workflow to the practice environment and EHR handoff pattern.',
          'Capture visit context and generate structured AI clinical documentation.',
          'Review clinical reasoning, follow-up, and coding context before sign-off.',
        ]}
      />
      <DarkFeatureGrid
        items={[
          { icon: <Database className="h-5 w-5" />, title: 'Connect', copy: 'Align MedAlly with the practice workflow, patient context, and EHR handoff.', meta: 'Step 01' },
          { icon: <FileText className="h-5 w-5" />, title: 'Draft', copy: 'Generate SOAP notes, summaries, and follow-up details from the encounter.', meta: 'Step 02' },
          { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Review', copy: 'Keep the clinician in control of documentation and recommendations.', meta: 'Step 03' },
          { icon: <ShieldCheck className="h-5 w-5" />, title: 'Finalize', copy: 'Move approved documentation, coding, and care context into the clinical workflow.', meta: 'Step 04' },
        ]}
      />
      <ParallaxImageBand
        eyebrow="One review flow"
        title="The conversation, chart, and coding context stay together"
        copy="The physician sees the record as a connected clinical story instead of disconnected apps, scribes, and billing cleanup."
        image="/images/medally/clinical-workflow-real.png"
        imageAlt="Clinical workflow scene for MedAlly physician AI assistant"
      />
    </main>
  </Layout>
);

export default HowItWorksPage;
