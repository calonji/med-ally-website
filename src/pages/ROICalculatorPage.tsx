import { type FC } from 'react';
import { BarChart3, Clock, Users, WalletCards } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, DarkFeatureGrid, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';
import ROICalculator from '@/components/ROICalculator';

const ROICalculatorPage: FC = () => (
  <Layout>
    <SEO
      title="MedAlly ROI Calculator | Estimate Clinical AI Documentation Savings"
      description="Estimate MedAlly ROI from reduced documentation time, additional patient capacity, and clinical workflow efficiency for physician practices."
      url="https://www.medally.ai/roi-calculator"
      image="/images/medally/product-billing-card.png"
      imageAlt="MedAlly ROI and medical coding automation product view"
      keywords={['clinical AI ROI calculator', 'AI clinical documentation savings', 'medical coding automation', 'physician workflow ROI']}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
          { '@type': 'ListItem', position: 2, name: 'ROI Calculator', item: 'https://www.medally.ai/roi-calculator' },
        ],
      }}
    />
    <main className="medally-dark-page">
      <PageHero
        eyebrow="ROI calculator"
        title="Estimate the operational impact of clinical AI"
        intro="Use MedAlly to model documentation time saved, recovered physician capacity, and revenue workflow improvement from one clinical AI platform."
        image="/images/medally/product-billing-card.png"
        imageAlt="MedAlly billing and ROI workflow for medical coding automation"
      />
      <AnswerBlock
        question="How is MedAlly ROI estimated?"
        answer="MedAlly ROI is estimated from the time physicians spend on documentation today, the number of encounters in the practice, and the value of recovered clinical capacity."
        points={[
          'Documentation savings estimate how much time AI clinical documentation can return.',
          'Capacity estimates translate recovered time into potential patient access.',
          'Revenue workflow estimates reflect coding context prepared earlier in the encounter lifecycle.',
        ]}
      />
      <DarkFeatureGrid
        items={[
          { icon: <Clock className="h-5 w-5" />, title: 'Time returned', copy: 'Estimate annual hours saved from faster documentation and review.', meta: 'Input' },
          { icon: <Users className="h-5 w-5" />, title: 'Capacity unlocked', copy: 'Model how recovered time can support patient access and practice flow.', meta: 'Output' },
          { icon: <WalletCards className="h-5 w-5" />, title: 'Revenue context', copy: 'Connect documentation completeness with coding and billing preparation.', meta: 'Signal' },
          { icon: <BarChart3 className="h-5 w-5" />, title: 'Scenario planning', copy: 'Change core assumptions to understand practice-specific impact.', meta: 'Model' },
        ]}
      />
      <section className="relative bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <ROICalculator />
        </div>
      </section>
      <ParallaxImageBand
        eyebrow="Practice economics"
        title="ROI improves when documentation, coding, and review stay connected"
        copy="The calculator is a planning tool for practice leaders evaluating AI healthcare assistant adoption across clinical and revenue workflows."
        image="/images/medally/ai-operations.png"
        imageAlt="MedAlly AI operations view for clinical workflow ROI"
      />
    </main>
  </Layout>
);

export default ROICalculatorPage;
