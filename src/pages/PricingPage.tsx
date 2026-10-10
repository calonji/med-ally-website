import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Building2,
  UserCheck,
  Calculator,
  Layers,
  FileText,
  Mic,
  Activity,
  Check,
  ChevronDown,
  Info,
  CalendarCheck,
  RefreshCw,
  Search,
  Stethoscope,
  HelpCircle,
  Workflow
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { MotionReveal } from '@/components/MotionReveal';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.medally.ai/pricing#webpage',
      url: 'https://www.medally.ai/pricing',
      name: 'MedAlly Pricing | Plans for Physicians & Clinical Teams',
      description:
        'Compare MedAlly Forever Free, Professional, Ultimate, and Enterprise plans. Start with 10 free encounters each month or choose a paid plan.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.medally.ai/#website',
        name: 'MedAlly',
        url: 'https://www.medally.ai',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.medally.ai/pricing#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.medally.ai/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pricing',
          item: 'https://www.medally.ai/pricing',
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.medally.ai/#software',
      name: 'MedAlly',
      applicationCategory: 'HealthcareApplication',
      operatingSystem: 'Web',
      url: 'https://www.medally.ai/',
      offers: [
        {
          '@type': 'Offer',
          name: 'Forever Free',
          price: '0',
          priceCurrency: 'USD',
          description: '10 clinical encounters per month, renewing monthly',
          url: 'https://app.medally.ai/',
        },
        {
          '@type': 'Offer',
          name: 'Professional',
          price: '49',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '49',
            priceCurrency: 'USD',
            unitText: 'MONTH',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitText: 'clinician',
            },
          },
          description: 'Unlimited encounters, advanced multilingual scribe, medical coding maps (ICD-10), basic HIPAA storage',
          url: 'https://app.medally.ai/',
        },
        {
          '@type': 'Offer',
          name: 'Ultimate',
          price: '99',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99',
            priceCurrency: 'USD',
            unitText: 'MONTH',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitText: 'clinician',
            },
          },
          description: 'All Professional features plus predictive clinical support, 200+ guideline scans, treatment plan assistance, priority AI latency',
          url: 'https://app.medally.ai/',
        },
        {
          '@type': 'Offer',
          name: 'Enterprise',
          price: 'Custom',
          priceCurrency: 'USD',
          description: 'For clinical teams & custom systems with custom EPIC/Cerner integration, dedicated clinical success lead, whitelabeled options, SSO & advanced governance',
          url: 'https://www.medally.ai/contact',
        },
      ],
    },
  ],
};

const costSummaryRows = [
  {
    plan: 'Forever Free',
    price: '$0 USD',
    designTarget: 'Try MedAlly with 10 clinical encounters every month',
    badge: 'Free Tier',
  },
  {
    plan: 'Professional',
    price: '$49 USD/mo per clinician',
    designTarget: 'Unlimited encounters plus the Professional plan capabilities',
    badge: 'Unlimited Encounters',
  },
  {
    plan: 'Ultimate',
    price: '$99 USD/mo per clinician',
    designTarget: 'All Professional features plus the additional Ultimate capabilities',
    badge: 'Command Layer',
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    designTarget: 'Clinical teams and custom systems',
    badge: 'Custom Deployment',
  },
];

const planComparisonTableData = [
  {
    plan: 'Forever Free',
    price: '$0 USD',
    encounterAllowance: '10 clinical encounters/month',
    capabilities: [
      'Ambient AI documentation',
      'Basic clinical guidelines',
      'Standard SOAP formats',
    ],
  },
  {
    plan: 'Professional',
    price: '$49 USD/mo per clinician',
    encounterAllowance: 'Unlimited encounters',
    capabilities: [
      'Advanced multilingual scribe',
      'Medical coding maps (ICD-10)',
      'Basic HIPAA storage',
    ],
  },
  {
    plan: 'Ultimate',
    price: '$99 USD/mo per clinician',
    encounterAllowance: 'Includes Professional usage/features',
    capabilities: [
      'All Professional features, plus Predictive clinical support',
      '200+ guideline scans',
      'Treatment plan assistance',
      'Priority AI latency',
    ],
    isFeatured: true,
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    encounterAllowance: 'Custom',
    capabilities: [
      'Custom EPIC/Cerner integration',
      'Dedicated clinical success lead',
      'Whitelabeled interface options',
      'SSO & Advanced Governance',
    ],
  },
];

const planCards = [
  {
    id: 'forever-free',
    name: 'Forever Free',
    price: '$0 USD',
    unit: '',
    targetAudience: 'For physicians who want to experience MedAlly before choosing a paid subscription.',
    highlight: false,
    ctaLabel: 'Start MedAlly Free',
    ctaHref: 'https://app.medally.ai/',
    isExternal: true,
    featuresHeader: 'Includes:',
    features: [
      '10 clinical encounters per month',
      'Ambient AI documentation',
      'Basic clinical guidelines',
      'Standard SOAP formats',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$49 USD/mo',
    unit: 'per clinician',
    targetAudience: 'For clinicians who need unlimited encounter usage and the Professional MedAlly feature set.',
    highlight: false,
    ctaLabel: 'Choose Professional',
    ctaHref: 'https://app.medally.ai/',
    isExternal: true,
    featuresHeader: 'Includes:',
    features: [
      'Unlimited encounters',
      'Advanced multilingual scribe',
      'Medical coding maps (ICD-10)',
      'Basic HIPAA storage',
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '$99 USD/mo',
    unit: 'per clinician',
    targetAudience: 'For clinicians who want everything in Professional plus the additional Ultimate capabilities.',
    highlight: true,
    ctaLabel: 'Choose Ultimate',
    ctaHref: 'https://app.medally.ai/',
    isExternal: true,
    featuresHeader: 'Includes all Professional features, plus:',
    features: [
      'Predictive clinical support',
      '200+ guideline scans',
      'Treatment plan assistance',
      'Priority AI latency',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    unit: '',
    targetAudience: 'For clinical teams and custom systems that need a tailored deployment.',
    highlight: false,
    ctaLabel: 'Contact Sales',
    ctaHref: '/contact',
    isExternal: false,
    featuresHeader: 'Includes:',
    features: [
      'Custom EPIC/Cerner integration',
      'Dedicated clinical success lead',
      'Whitelabeled interface options',
      'SSO & Advanced Governance',
    ],
  },
];

const guidanceCards = [
  {
    planName: 'Forever Free',
    badge: 'Evaluation',
    recommendation: 'Choose Forever Free if you want to evaluate MedAlly with up to 10 encounters each month.',
    detail: 'Ideal for solo physicians testing ambient scribing and structured SOAP documentation with zero upfront financial commitment.',
    icon: Sparkles,
    ctaText: 'Start MedAlly Free',
    ctaHref: 'https://app.medally.ai/',
    isExternal: true,
  },
  {
    planName: 'Professional',
    badge: 'Unlimited Documentation',
    recommendation: 'Choose Professional if you need unlimited encounters and the Professional scribe, coding, and storage capabilities.',
    detail: 'Engineered for clinicians with steady daily patient volume needing continuous scribing support, ICD-10 coding maps, and basic HIPAA storage.',
    icon: UserCheck,
    ctaText: 'Choose Professional',
    ctaHref: 'https://app.medally.ai/',
    isExternal: true,
  },
  {
    planName: 'Ultimate',
    badge: 'Decision Support & Intelligence',
    recommendation: 'Choose Ultimate if you want all Professional features plus predictive clinical support, 200+ guideline scans, treatment plan assistance, and priority AI latency.',
    detail: 'The comprehensive platform tier for clinicians seeking predictive intelligence, guideline reference scans, and priority processing latency.',
    icon: Zap,
    ctaText: 'Choose Ultimate',
    ctaHref: 'https://app.medally.ai/',
    isExternal: true,
  },
  {
    planName: 'Enterprise',
    badge: 'Teams & Custom Systems',
    recommendation: 'Choose Enterprise if you are evaluating MedAlly for a clinical team or custom system and need a tailored deployment.',
    detail: 'Designed for hospital networks, large group practices, and custom EHR environments requiring dedicated leadership and custom integrations.',
    icon: Building2,
    ctaText: 'Contact Sales',
    ctaHref: '/contact',
    isExternal: false,
  },
];

const freePlanFaqs = [
  {
    question: 'What counts as one encounter?',
    answer: 'One MedAlly session counts as one encounter.',
    icon: Activity,
  },
  {
    question: 'How many free encounters do I receive?',
    answer: 'Forever Free includes 10 clinical encounters per month.',
    icon: CalendarCheck,
  },
  {
    question: 'Do the free encounters renew?',
    answer: 'Yes. You receive 10 free encounters every month.',
    icon: RefreshCw,
  },
  {
    question: 'What happens after I use all 10 free encounters?',
    answer:
      'A Professional, Ultimate, or Enterprise subscription is required to start additional encounters before the next monthly renewal. If you remain on Forever Free, your allowance renews to 10 free encounters at the next monthly reset.',
    icon: Shield,
  },
];

const workflowCards = [
  {
    title: 'How MedAlly Works',
    description: 'Understand what happens during and after an encounter before choosing a plan.',
    linkHref: '/how-it-works',
    linkLabel: 'Explore How MedAlly Works',
    icon: Layers,
    badge: 'End-to-End Workflow',
  },
  {
    title: 'MedAlly Features',
    description: 'Explore the complete product-capability overview across clinical, coding, and diagnostic layers.',
    linkHref: '/features',
    linkLabel: 'View MedAlly Features',
    icon: Sparkles,
    badge: 'Platform Breadth',
  },
  {
    title: 'MedAlly AI Medical Scribe',
    description: 'Discover the encounter-listening and ambient draft documentation workflow.',
    linkHref: '/ai-medical-scribe',
    linkLabel: 'Learn About AI Medical Scribe',
    icon: Mic,
    badge: 'Ambient Scribe',
  },
  {
    title: 'AI Clinical Documentation',
    description: 'Review structured note creation, physician review, and workflow gates.',
    linkHref: '/clinical-documentation-ai',
    linkLabel: 'Examine AI Documentation',
    icon: FileText,
    badge: 'Structured SOAP',
  },
  {
    title: 'Clinical Workflow Software',
    description: 'Explore the broader software category and buyer-evaluation guidance.',
    linkHref: '/clinical-workflow-software',
    linkLabel: 'Explore Workflow Software',
    icon: Workflow,
    badge: 'Category & Evaluation',
  },
];

const pricingFaqs = [
  {
    q: 'What MedAlly plans are available?',
    a: 'MedAlly offers Forever Free, Professional, Ultimate, and Enterprise.',
  },
  {
    q: 'How much is Forever Free?',
    a: 'Forever Free is $0 USD and includes 10 clinical encounters per month.',
  },
  {
    q: 'How much is Professional?',
    a: 'Professional is $49 USD/mo per clinician and includes unlimited encounters, Advanced multilingual scribe, Medical coding maps (ICD-10), and Basic HIPAA storage.',
  },
  {
    q: 'How much is Ultimate?',
    a: 'Ultimate is $99 USD/mo per clinician and includes all Professional features, plus Predictive clinical support, 200+ guideline scans, Treatment plan assistance, and Priority AI latency.',
  },
  {
    q: 'How much is Enterprise?',
    a: 'Enterprise uses custom pricing and is designed for clinical teams and custom systems.',
  },
  {
    q: 'What counts as a MedAlly encounter?',
    a: 'One MedAlly session counts as one encounter.',
  },
  {
    q: 'Do the 10 free encounters renew every month?',
    a: 'Yes. Forever Free renews with 10 free encounters every month.',
  },
  {
    q: 'What happens after I use all 10 free encounters?',
    a: 'A Professional, Ultimate, or Enterprise subscription is required to start additional encounters before the next monthly renewal. If you remain on Forever Free, your allowance renews to 10 free encounters at the next monthly reset.',
  },
  {
    q: 'Are Professional and Ultimate monthly subscriptions?',
    a: 'Yes. Professional is $49 USD/mo per clinician and Ultimate is $99 USD/mo per clinician.',
  },
  {
    q: 'Can I cancel Professional or Ultimate?',
    a: 'Yes. Professional and Ultimate use flexible monthly agreements and can be canceled anytime. For the exact cancellation effective date or billing treatment, follow the current checkout/billing terms. Enterprise uses custom commercial terms.',
  },
  {
    q: 'What is the difference between Professional and Ultimate?',
    a: 'Professional includes unlimited encounters and the Professional feature set. Ultimate includes all Professional features and adds Predictive clinical support, 200+ guideline scans, Treatment plan assistance, and Priority AI latency.',
  },
  {
    q: 'Who is Enterprise for?',
    a: 'Enterprise is for clinical teams and custom systems that need a tailored deployment, including the Enterprise capabilities listed above.',
  },
];

const PricingPage: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqFilter, setFaqFilter] = useState('');

  const filteredFaqs = pricingFaqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(faqFilter.toLowerCase()) ||
      faq.a.toLowerCase().includes(faqFilter.toLowerCase())
  );

  return (
    <Layout className="medally-dark-page">
      <SEO
        title="MedAlly Pricing | Plans for Physicians & Clinical Teams"
        description="Compare MedAlly Forever Free, Professional, Ultimate, and Enterprise plans. Start with 10 free encounters each month or choose a paid plan."
        url="https://www.medally.ai/pricing"
        image="/images/medally/product-billing-card.png"
        imageAlt="MedAlly Pricing and Plan Comparison for Physicians and Clinical Teams"
        keywords={[
          'MedAlly pricing',
          'MedAlly plans',
          'MedAlly Professional',
          'MedAlly Ultimate',
          'MedAlly Enterprise',
          'medical AI cost',
          'clinical AI platform pricing',
          'physician AI assistant cost',
        ]}
        structuredData={structuredData}
      />

      <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
        
        {/* =========================================================================
            SECTION 1: HERO & CORE COMMERCIAL PROPOSITION (H1)
            ========================================================================= */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-teal-500/10 dark:bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />
         
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6 backdrop-blur-sm shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" /> Transparent Commercial Architecture
                </div>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-serif text-editorial leading-[1.15] tracking-tight mb-8">
                  MedAlly Pricing for Physicians and Clinical Teams
                </h1>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-4">
                  Choose from <strong className="font-semibold text-foreground">Forever Free, Professional, Ultimate, or Enterprise</strong> based on how you want to use MedAlly.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto mb-8">
                  Start with <strong className="font-semibold text-foreground">10 free encounters every month</strong>, move to an unlimited paid plan when you need more usage, or talk with MedAlly about an Enterprise deployment for clinical teams and custom systems.
                </p>
              </MotionReveal>

              {/* Verified Commercial Terms Pill */}
              <MotionReveal delay={0.25}>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-muted/40 border border-border/80 text-foreground font-medium text-sm mb-10 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Flexible monthly agreements. Cancel anytime.</span>
                </div>
              </MotionReveal>

              {/* Primary Action Buttons */}
              <MotionReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://app.medally.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group"
                  >
                    Start MedAlly Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all duration-300 text-center"
                  >
                    Contact Sales
                  </Link>
                </div>
              </MotionReveal>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: HOW MUCH DOES MEDALLY COST? (H2)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10 relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <Calculator className="w-3.5 h-3.5" /> Cost Overview
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-editorial text-foreground mb-4">
                  How Much Does MedAlly Cost?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  Direct, transparent pricing tiers structured around encounter volume, clinical capabilities, and practice scale.
                </p>
              </MotionReveal>
            </div>

            {/* Cost Table */}
            <MotionReveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <th className="py-5 px-6 sm:px-8">Plan</th>
                        <th className="py-5 px-6 sm:px-8 text-right sm:text-left">Price</th>
                        <th className="py-5 px-6 sm:px-8">What the plan is designed for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm">
                      {costSummaryRows.map((row) => (
                        <tr key={row.plan} className="hover:bg-muted/20 transition-colors">
                          <td className="py-5 px-6 sm:px-8 font-bold text-foreground">
                            <div className="flex items-center gap-3">
                              <span>{row.plan}</span>
                              <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                                {row.badge}
                              </span>
                            </div>
                          </td>
                          <td className="py-5 px-6 sm:px-8 font-semibold text-foreground text-right sm:text-left whitespace-nowrap">
                            <span className="text-base sm:text-lg text-teal-600 dark:text-teal-400 font-bold">{row.price}</span>
                          </td>
                          <td className="py-5 px-6 sm:px-8 text-muted-foreground font-light leading-relaxed">
                            {row.designTarget}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </MotionReveal>

            {/* Verified Encounter Rules Callout */}
            <MotionReveal delay={0.2}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <h3 className="font-bold text-foreground text-sm">Session Equivalency</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      A <strong className="font-semibold text-foreground">MedAlly session counts as one encounter</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <h3 className="font-bold text-foreground text-sm">Monthly Renewal</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      Forever Free includes <strong className="font-semibold text-foreground">10 encounters per month</strong>, and the 10 free encounters <strong className="font-semibold text-foreground">renew every month</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <h3 className="font-bold text-foreground text-sm">Post-Allowance Continuity</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      After all 10 free encounters for the current month are used, a <strong className="font-semibold text-foreground">Professional, Ultimate, or Enterprise subscription</strong> is required to start additional encounters before the next monthly renewal.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-xs">
                        04
                      </div>
                      <h3 className="font-bold text-foreground text-sm">Monthly Reset</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      If you remain on Forever Free, the allowance renews to <strong className="font-semibold text-foreground">10 free encounters at the next monthly reset</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: COMPARE MEDALLY PLANS (H2)
            ========================================================================= */}
        <section className="py-20 lg:py-32 relative overflow-hidden" id="compare">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                  <Layers className="w-3.5 h-3.5" /> Plan Matrix
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-editorial text-foreground mb-4">
                  Compare MedAlly Plans
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  Evaluate encounter allowances, core capabilities, and deployment options across all four tiers.
                </p>
              </MotionReveal>
            </div>

            {/* Plan Comparison Table */}
            <MotionReveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl mb-16">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <th className="py-5 px-6 sm:px-8 min-w-[160px]">Plan</th>
                        <th className="py-5 px-6 sm:px-8 min-w-[180px]">Price</th>
                        <th className="py-5 px-6 sm:px-8 min-w-[220px]">Encounter allowance</th>
                        <th className="py-5 px-6 sm:px-8 min-w-[320px]">Explicitly listed capabilities</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm">
                      {planComparisonTableData.map((row) => (
                        <tr 
                          key={row.plan} 
                          className={`transition-colors ${
                            row.isFeatured 
                              ? 'bg-teal-500/[0.04] dark:bg-teal-950/20' 
                              : 'hover:bg-muted/20'
                          }`}
                        >
                          <td className="py-6 px-6 sm:px-8 align-top">
                            <div className="font-bold text-foreground text-base mb-1">{row.plan}</div>
                            {row.isFeatured && (
                              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30">
                                Recommended
                              </span>
                            )}
                          </td>
                          <td className="py-6 px-6 sm:px-8 align-top">
                            <span className="text-lg font-bold text-foreground block">{row.price}</span>
                          </td>
                          <td className="py-6 px-6 sm:px-8 align-top font-medium text-foreground">
                            {row.encounterAllowance}
                          </td>
                          <td className="py-6 px-6 sm:px-8 align-top">
                            <ul className="space-y-2">
                              {row.capabilities.map((cap) => (
                                <li key={cap} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                                  <Check className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Guardrail Notice Banner */}
                <div className="p-5 sm:p-6 bg-muted/30 border-t border-border flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
                  <Info className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    This comparison reflects only the capabilities explicitly listed for each current MedAlly plan. It does not imply that an unlisted capability is excluded from another plan unless MedAlly has explicitly defined that difference.
                  </span>
                </div>
              </div>
            </MotionReveal>

            {/* 4 Detailed Plan Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {planCards.map((plan, i) => (
                <MotionReveal
                  key={plan.id}
                  delay={i * 0.08}
                  className="h-full flex"
                >
                  <div
                    className={`w-full rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden p-8 border transition-all duration-300 ${
                      plan.highlight
                        ? 'border-teal-500/50 bg-teal-500/[0.04] dark:bg-teal-950/20 shadow-[0_0_50px_-12px_rgba(54,183,181,0.25)] ring-1 ring-teal-500/30'
                        : 'border-border bg-card hover:border-teal-500/20 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {/* Subtle top light glow for featured card */}
                    {plan.highlight && (
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                    )}

                    {/* Top Section: Header, Price, Description, CTA */}
                    <div>
                      {/* Plan Name & Badge */}
                      <div className="flex items-center justify-between mb-3 min-h-[26px]">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{plan.name}</h3>
                        {plan.highlight ? (
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                            Most Popular
                          </span>
                        ) : null}
                      </div>

                      {/* Price Block with exact uniform height */}
                      <div className="min-h-[72px] flex flex-col justify-start mb-2">
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-editorial text-foreground leading-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium mt-1 min-h-[1.25rem] block">
                          {plan.unit || '\u00A0'}
                        </span>
                      </div>

                      {/* Target Audience with exact uniform height */}
                      <div className="min-h-[64px] flex items-start mb-6">
                        <p className="text-xs text-muted-foreground font-light leading-relaxed">
                          {plan.targetAudience}
                        </p>
                      </div>

                      {/* CTA Action Button */}
                      <div className="mb-8">
                        {plan.isExternal ? (
                          <a
                            href={plan.ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              plan.highlight
                                ? 'w-full h-12 inline-flex items-center justify-center px-4 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-md hover:scale-[1.02] transition-all duration-300 text-xs tracking-wider uppercase text-center whitespace-nowrap group'
                                : 'w-full h-12 inline-flex items-center justify-center px-4 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-xs tracking-wider uppercase hover:scale-[1.02] transition-all duration-300 text-center whitespace-nowrap group'
                            }
                          >
                            <span>{plan.ctaLabel}</span>
                            <ArrowRight className="ml-2 w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            to={plan.ctaHref}
                            className="w-full h-12 inline-flex items-center justify-center px-4 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-xs tracking-wider uppercase hover:scale-[1.02] transition-all duration-300 text-center whitespace-nowrap group"
                          >
                            <span>{plan.ctaLabel}</span>
                            <ArrowRight className="ml-2 w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Features List Section */}
                    <div className="flex-grow border-t border-border pt-6 flex flex-col">
                      <div className="min-h-[32px] flex items-center mb-4">
                        <h4 className="text-[11px] font-bold tracking-wider uppercase text-foreground leading-snug">
                          {plan.featuresHeader}
                        </h4>
                      </div>
                      <ul className="space-y-3.5 flex-grow">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-muted-foreground text-xs font-light leading-relaxed">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                plan.highlight ? 'text-teal-600 dark:text-teal-400' : 'text-muted-foreground/70'
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: WHICH MEDALLY PLAN SHOULD I CHOOSE? (H2)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-y border-border bg-muted/10 relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                  <Stethoscope className="w-3.5 h-3.5" /> Selection Guide
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-editorial text-foreground mb-4">
                  Which MedAlly Plan Should I Choose?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-4">
                  Clear decision criteria based on your clinical workflow, encounter volume, and systemic integration requirements.
                </p>
                <div className="p-4 rounded-2xl bg-card border border-border/80 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-4 text-left">
                  <strong className="font-semibold text-foreground">Which MedAlly plan fits a practice?</strong> The right MedAlly clinical AI platform plan depends on practice size, documentation volume, EHR integration depth, and whether a team starts with the Forever Free plan (10 encounters per month) or scales with unlimited documentation and predictive clinical support.
                </div>
              </MotionReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {guidanceCards.map((card, i) => {
                const IconComponent = card.icon;
                return (
                  <MotionReveal key={card.planName} delay={i * 0.1}>
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-md hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{card.planName}</h3>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                            {card.badge}
                          </span>
                        </div>

                        <p className="text-base font-medium text-foreground leading-relaxed mb-3">
                          {card.recommendation}
                        </p>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {card.detail}
                        </p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                        {card.isExternal ? (
                          <a
                            href={card.ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                          >
                            {card.ctaText}
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            to={card.ctaHref}
                            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                          >
                            {card.ctaText}
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: HOW THE FOREVER FREE PLAN WORKS (H2)
            ========================================================================= */}
        <section className="py-20 lg:py-28 relative overflow-hidden border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <Activity className="w-3.5 h-3.5" /> Encounter Mechanics
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-editorial text-foreground mb-4">
                  How the Forever Free Plan Works
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  Transparent encounter rules designed for straightforward physician evaluation without surprises.
                </p>
              </MotionReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {freePlanFaqs.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <MotionReveal key={item.question} delay={idx * 0.08}>
                    <div className="p-7 rounded-3xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-3 leading-snug">
                          {item.question}
                        </h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 6: UNDERSTAND THE WORKFLOW BEFORE YOU CHOOSE (H2)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10 relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <Layers className="w-3.5 h-3.5" /> Product Architecture
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-editorial text-foreground mb-4">
                  Understand the MedAlly Workflow Before You Choose a Plan
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  Deep-dive into encounter capture, documentation structuring, clinical intelligence, and physician governance.
                </p>
              </MotionReveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {workflowCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <MotionReveal key={card.title} delay={idx * 0.08}>
                    <div className="p-7 rounded-3xl border border-border bg-card shadow-sm hover:shadow-md hover:border-teal-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                          {card.description}
                        </p>
                      </div>

                      <div>
                        <Link
                          to={card.linkHref}
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                        >
                          {card.linkLabel}
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 7: ESTIMATE PRACTICE VALUE / ROI CALCULATOR (H2)
            ========================================================================= */}
        <section className="py-20 lg:py-28 relative overflow-hidden border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal>
              <div className="relative rounded-[2.5rem] border border-teal-500/30 bg-gradient-to-b from-teal-500/[0.06] to-transparent p-8 sm:p-12 lg:p-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-6">
                    <Calculator className="w-3.5 h-3.5" /> Economic Modeling
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-editorial text-foreground mb-6">
                    Estimate the Potential Value for Your Practice
                  </h2>
                  
                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    If you are evaluating a larger rollout, use the <strong className="font-semibold text-foreground">MedAlly ROI Calculator</strong> to model the potential workflow impact using your own practice assumptions.
                  </p>

                  <Link
                    to="/roi-calculator"
                    className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group text-sm uppercase tracking-wider"
                  >
                    Try the ROI Calculator
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: PRICING FAQS (H2)
            ========================================================================= */}
        <section className="py-24 lg:py-36 relative border-b border-border bg-muted/20" id="pricing-faq">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            
            <MotionReveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <HelpCircle className="w-3.5 h-3.5" />
                Clear Answers
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-editorial text-foreground leading-tight mb-6">
                Frequently Asked Questions About MedAlly Pricing
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Verified commercial answers regarding plans, allowances, renewal terms, and Enterprise configurations.
              </p>

              {/* FAQ Search Filter */}
              <div className="mt-8 max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search pricing FAQs..."
                  value={faqFilter}
                  onChange={(e) => setFaqFilter(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-background/80 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all"
                />
              </div>
            </MotionReveal>

            {/* Accordion FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <MotionReveal key={faq.q} delay={index * 0.05}>
                    <div className="rounded-2xl border border-border bg-background/80 overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-foreground text-base sm:text-lg hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-editorial">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-teal-500' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out px-6 ${
                          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        <div className="border-t border-border/50 pt-4 space-y-3">
                          <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

            {/* Link to General FAQs */}
            <MotionReveal delay={0.3} className="text-center mt-12">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-muted/60 border border-border text-foreground hover:bg-muted font-bold text-sm transition-all group"
              >
                View All FAQs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 9: START WITH THE MEDALLY PLAN THAT FITS YOU (H2 / FINAL CTA)
            ========================================================================= */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 dark:bg-teal-500/5 blur-[160px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" /> Deploy Today
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-editorial text-foreground leading-tight mb-6">
                Start With the MedAlly Plan That Fits You
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Start with <strong className="font-semibold text-foreground">10 free encounters every month</strong>, choose <strong className="font-semibold text-foreground">Professional</strong> or <strong className="font-semibold text-foreground">Ultimate</strong> when you need a paid subscription, or talk with MedAlly about an <strong className="font-semibold text-foreground">Enterprise</strong> deployment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://app.medally.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group text-sm uppercase tracking-wider"
                >
                  Start MedAlly Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-sm uppercase tracking-wider transition-all duration-300 text-center"
                >
                  Contact Sales
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>

      </main>
    </Layout>
  );
};

export default PricingPage;
