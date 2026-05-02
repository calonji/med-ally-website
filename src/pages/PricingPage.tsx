import { type FC } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const plans = [
  {
    name: 'Forever Free',
    price: '$0',
    detail: 'Explore core workflows',
    features: ['10 encounters per month', 'AI clinical documentation', 'Clinical guidelines'],
  },
  {
    name: 'Professional',
    price: '$49.99',
    detail: 'For documentation-heavy practices',
    features: ['Unlimited encounters', 'Advanced AI scribe', 'Medical coding automation'],
  },
  {
    name: 'Ultimate',
    price: '$99.99',
    detail: 'For complete clinical AI workflows',
    features: ['All Professional features', 'Clinical decision support', 'Treatment planning support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: 'For teams and custom integrations',
    features: ['Custom EHR workflow integration', 'Dedicated support', 'White glove onboarding'],
  },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.medally.ai/pricing' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MedAlly',
    applicationCategory: 'HealthcareApplication',
    operatingSystem: 'Web',
    offers: plans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: plan.price === 'Custom' ? '0' : plan.price.replace('$', ''),
      priceCurrency: 'USD',
      url: plan.name === 'Enterprise' ? 'https://www.calonji.com/contact' : 'https://app.medally.ai/',
    })),
  },
];

const PricingPage: FC = () => (
  <Layout>
    <SEO
      title="MedAlly Pricing | Clinical AI Platform Plans"
      description="Compare MedAlly pricing plans for AI clinical documentation, physician workflows, clinical decision support, and EHR workflow integration."
      url="https://www.medally.ai/pricing"
      image="/images/medally/workflow-room.png"
      imageAlt="MedAlly clinical AI platform pricing for practice workflows"
      keywords={['clinical AI platform pricing', 'physician AI assistant pricing', 'AI clinical documentation pricing']}
      structuredData={structuredData}
    />
    <main className="medally-dark-page">
      <PageHero
        eyebrow="Pricing"
        title="Plans for physicians, practices, and clinical teams"
        intro="Choose the MedAlly plan that matches how much of the encounter lifecycle your practice wants to support with clinical AI."
        image="/images/medally/workflow-room.png"
        imageAlt="MedAlly clinical workflow room for pricing overview"
      />
      <AnswerBlock
        question="Which MedAlly plan fits a practice?"
        answer="The right MedAlly plan depends on whether the practice needs basic AI clinical documentation, advanced documentation and coding support, or a broader clinical AI platform with decision support and custom workflow integration."
      />
      <section className="relative bg-black py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100/60">{plan.name}</p>
              <p className="mt-5 text-4xl font-extrabold text-white">{plan.price}</p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{plan.detail}</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <p key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-teal-100" />
                    {feature}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ParallaxImageBand
        eyebrow="Buying decision"
        title="Price the workflow you want to improve"
        copy="MedAlly pricing should be evaluated against documentation time, coding cleanup, patient capacity, and review quality across the clinical day."
        image="/images/medally/product-billing-card.png"
        imageAlt="MedAlly billing and documentation context for pricing evaluation"
      />
    </main>
  </Layout>
);

export default PricingPage;
