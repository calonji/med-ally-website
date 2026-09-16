// @ts-nocheck
import { type FC } from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { PageHero, ParallaxImageBand } from '@/components/PagePrimitives';
import { MotionReveal } from '@/components/MotionReveal';

const plans = [
  {
    name: 'Forever Free',
    price: '$0',
    detail: 'Explore core workflows and documentation.',
    features: ['10 clinical encounters per month', 'Ambient AI documentation', 'Basic clinical guidelines', 'Standard soap formats'],
    cta: 'Deploy Free',
    popular: false
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/mo',
    detail: 'For documentation-heavy practices.',
    features: ['Unlimited encounters', 'Advanced multilingual scribe', 'Medical coding maps (ICD-10)', 'Basic HIPAA storage'],
    cta: 'Start Pro',
    popular: false
  },
  {
    name: 'Ultimate',
    price: '$99',
    period: '/mo',
    detail: 'The full clinical AI command system.',
    features: ['All Professional features', 'Predictive clinical support', '200+ guideline scans', 'Treatment plan assistance', 'Priority AI latency'],
    cta: 'Go Ultimate',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    detail: 'For clinical teams & custom systems.',
    features: ['Custom EPIC/Cerner integration', 'Dedicated clinical success lead', 'Whitelabeled interface options', 'SSO & Advanced Governance'],
    cta: 'Contact Sales',
    popular: false
  },
];

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MedAlly',
  applicationCategory: 'HealthcareApplication',
  operatingSystem: 'Web',
  offers: [
    {
      '@type': 'Offer',
      name: 'Forever Free',
      price: '0',
      priceCurrency: 'USD',
      description: '10 clinical encounters per month',
    },
    {
      '@type': 'Offer',
      name: 'Professional',
      price: '49',
      priceCurrency: 'USD',
      description: 'Unlimited encounters, advanced scribe, coding maps',
    },
    {
      '@type': 'Offer',
      name: 'Ultimate',
      price: '99',
      priceCurrency: 'USD',
      description: 'Predictive clinical support, guideline scans',
    },
  ],
};

const PricingPage: FC = () => (
  <Layout className="medally-dark-page">
    <SEO
      title="MedAlly Pricing | Clinical AI Command Architecture Plans"
      description="Review MedAlly enterprise tier options calibrated for physicians, group practices, and healthcare networks."
      url="https://www.medally.ai/pricing"
      image="/images/medally/workflow-room.png"
      imageAlt="MedAlly Platform Pricing"
      keywords={['clinical AI pricing', 'medical AI cost', 'Awwwards healthcare pricing']}
      structuredData={pricingSchema}
    />
    
    <main className="flex-grow transition-colors duration-300">
      
      {/* Luxury Header Overlay */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(54,183,181,0.1)_0%,transparent_55%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Transparent Economics
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-editorial leading-tight mb-6">
              Scale your <span className="text-teal-600 dark:text-teal-400 font-light">clinical capacity.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              Choose the command infrastructure that maps directly to your current patient volume. Flexible monthly agreements, cancel anytime.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Direct AEO/GEO Answer Section */}
      <section className="py-16 border-y border-border bg-muted/10 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MotionReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial mb-4">
              Which MedAlly plan fits a practice?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              The right MedAlly clinical AI platform plan depends on practice size, documentation volume, EHR integration depth, and whether a team is starting with the Forever Free plan (10 encounters per month) or scaling with unlimited documentation and predictive clinical support.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* The Pricing Cards Matrix */}
      <section className="pb-32 relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {plans.map((plan, i) => (
              <MotionReveal 
                key={plan.name} 
                delay={i * 0.08} 
                className={`rounded-[2.5rem] flex flex-col relative overflow-hidden p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-teal-500/40 bg-teal-500/5 dark:bg-teal-950/20 shadow-[0_0_50px_-12px_rgba(54,183,181,0.3)] dark:shadow-[0_0_50px_-12px_rgba(54,183,181,0.15)] lg:scale-[1.03] lg:-translate-y-2' 
                    : 'border-border bg-card hover:border-teal-500/20 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Accent light flare inside standard popular box */}
                {plan.popular && (
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                )}

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{plan.name}</h3>
                    {plan.popular && (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400">Most Popular</span>
                    )}
                  </div>
                  
                  <div className="flex items-baseline gap-1 mt-4">
                    <h4 className="text-5xl font-bold tracking-tight font-serif text-editorial text-foreground">{plan.price}</h4>
                    {plan.period && <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 font-light leading-relaxed h-8">{plan.detail}</p>
                </div>

                {/* Action Buttons */}
                <div className="mb-8">
                  <a
                    href={plan.name === 'Enterprise' ? 'https://www.calonji.com/contact' : 'https://app.medally.ai/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex h-12 items-center justify-center rounded-2xl font-bold transition-all duration-300 text-xs tracking-wide uppercase ${
                      plan.popular 
                        ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md' 
                        : 'bg-muted hover:bg-accent border border-border text-foreground'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </a>
                </div>

                {/* Features List */}
                <div className="flex-grow border-t border-border pt-8">
                  <h5 className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground mb-4">Included Capabilities</h5>
                  <ul className="space-y-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-muted-foreground text-xs font-light leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-teal-600 dark:text-teal-400' : 'text-muted-foreground/70'}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </MotionReveal>
            ))}

          </div>
        </div>
      </section>

      {/* Parallax Footer Overlay from original */}
      <ParallaxImageBand
        eyebrow="Operational context"
        title="Measure efficacy by the hours returned, not just the tools deployed."
        copy="We partner directly with medical leads to ensure our deployments meet strict local compliance requirements without friction."
        image="/images/medally/product-billing-card.png"
        imageAlt="MedAlly systems impact view"
      />

    </main>
  </Layout>
);

export default PricingPage;
