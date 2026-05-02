import { type FC } from 'react';
import { ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { DarkFeatureGrid, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const Contact: FC = () => (
  <Layout>
    <SEO
      title="Contact MedAlly | Clinical AI Platform"
      description="Contact MedAlly for clinical AI platform access, product questions, support, and demos for physician workflows."
      url="https://www.medally.ai/contact"
      image="/images/medally/workflow-room.png"
      imageAlt="MedAlly clinical AI contact and workflow support"
      keywords={['contact MedAlly', 'clinical AI platform demo', 'physician AI assistant']}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.medally.ai/contact' },
        ],
      }}
    />
    <main className="medally-dark-page">
      <PageHero
        eyebrow="Contact"
        title="Talk with MedAlly about clinical AI workflows"
        intro="Connect with the team for product access, clinical workflow questions, demos, and support."
        image="/images/medally/workflow-room.png"
        imageAlt="MedAlly clinical AI support and practice workflow"
        ctaLabel="Book demo"
        ctaHref="https://www.calonji.com/contact"
      />
      <DarkFeatureGrid
        items={[
          { icon: <Mail className="h-5 w-5" />, title: 'Email', copy: 'Reach the team at info@calonji.com for MedAlly questions and support.', meta: 'Support' },
          { icon: <ExternalLink className="h-5 w-5" />, title: 'Sales and support', copy: 'Use the Calonji contact page to request a demo or discuss practice needs.', meta: 'Demo' },
          { icon: <ShieldCheck className="h-5 w-5" />, title: 'Product access', copy: 'Open the MedAlly app to join the clinical AI platform experience.', meta: 'Access' },
        ]}
      />
      <ParallaxImageBand
        eyebrow="Next step"
        title="Bring the right workflow questions to the demo"
        copy="The best MedAlly conversations start with the documentation, review, follow-up, and coding bottlenecks your practice needs to solve."
        image="/images/medally/clinical-workflow-real.png"
        imageAlt="Clinical workflow discussion for MedAlly AI healthcare assistant"
      />
    </main>
  </Layout>
);

export default Contact;
