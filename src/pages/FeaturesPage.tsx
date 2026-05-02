import { type FC, type ComponentType } from 'react';
import {
  Activity,
  Bell,
  CalendarCheck,
  ClipboardCheck,
  FileAudio,
  FileCheck2,
  FlaskConical,
  HeartPulse,
  Languages,
  Pill,
  ShieldCheck,
  Stethoscope,
  Video,
  WalletCards,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { AnswerBlock, PageHero, ParallaxImageBand } from '@/components/PagePrimitives';

const heroImage = '/images/medally/features-gpt/features-hero-physician.png';

type Agent = {
  name: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  metric: string;
  category: 'Documentation' | 'Diagnostics' | 'Revenue' | 'Operations';
};

const agents: Agent[] = [
  { name: 'MedAlly ScribeAI', title: 'Ambient Documentation Agent', description: 'Multilingual encounter capture that converts conversations into structured SOAP notes.', icon: FileAudio, metric: '2 hrs saved per day', category: 'Documentation' },
  { name: 'MedAlly DocFlow', title: 'Clinical Documentation Agent', description: 'Auto-structures H&P, SOAP, discharge, and consult notes using compliance-ready templates.', icon: FileCheck2, metric: '99.8% compliance rate', category: 'Documentation' },
  { name: 'MedAlly CommsAI', title: 'Adaptive Communication Agent', description: 'Adjusts documentation tone for physicians, patients, insurers, and operational teams.', icon: Languages, metric: '50+ languages', category: 'Documentation' },
  { name: 'MedAlly Codex', title: 'Coding & Billing Agent', description: 'Connects ICD, CPT, and HCPCS coding context to the same reviewed clinical record.', icon: WalletCards, metric: '99.7% coding accuracy', category: 'Revenue' },
  { name: 'MedAlly LabIntel', title: 'Lab Synthesis Agent', description: 'Flags abnormal values, predicts risk, and prepares structured follow-up summaries.', icon: FlaskConical, metric: '98.7% detection rate', category: 'Diagnostics' },
  { name: 'MedAlly Diagnostix', title: 'Differential Diagnosis Agent', description: 'Ranks likely conditions and helps surface overlooked diagnostic possibilities.', icon: Activity, metric: '93% diagnostic accuracy', category: 'Diagnostics' },
  { name: 'MedAlly TestGuide', title: 'Prioritized Testing Agent', description: 'Recommends diagnostic tests while reducing unnecessary procedures.', icon: ClipboardCheck, metric: '32% fewer unnecessary tests', category: 'Diagnostics' },
  { name: 'MedAlly Insight', title: 'Clinical Insights Agent', description: 'Explains trends and prioritizes lab and finding interpretation inside the note workflow.', icon: HeartPulse, metric: '87% faster interpretation', category: 'Diagnostics' },
  { name: 'MedAlly RxGen', title: 'Rx Safety Agent', description: 'Checks contraindications, interaction risk, and patient-specific dosage context.', icon: Pill, metric: '94% fewer adverse reactions', category: 'Diagnostics' },
  { name: 'MedAlly CarePath', title: 'Guidelines Agent', description: 'Personalizes evidence-based treatment recommendations for each encounter.', icon: Stethoscope, metric: '200+ guidelines', category: 'Operations' },
  { name: 'MedAlly TreatWise', title: 'Treatment Agent', description: 'Turns recommendations into step-by-step care-plan implementation support.', icon: ClipboardCheck, metric: '41% better adherence', category: 'Operations' },
  { name: 'MedAlly Pulse', title: 'Monitoring Agent', description: 'Watches longitudinal patient trends and flags deterioration earlier.', icon: Activity, metric: '72 hrs earlier', category: 'Operations' },
  { name: 'MedAlly Shield', title: 'Emergency Planning Agent', description: 'Creates risk-adjusted contingency plans for higher-risk patient scenarios.', icon: ShieldCheck, metric: '4.2 min faster response', category: 'Operations' },
  { name: 'MedAlly SpecialtySync', title: 'Specialty Support Agent', description: 'Tunes workflows and clinical language to specialty-specific practice needs.', icon: Stethoscope, metric: '24 specialties', category: 'Operations' },
  { name: 'MedAlly Follow-up', title: 'Follow-up Agent', description: 'Turns open loops into scheduled, visible follow-up tasks and reminders.', icon: CalendarCheck, metric: 'Fewer missed loops', category: 'Operations' },
  { name: 'MedAlly Telehealth', title: 'Telehealth Agent', description: 'Keeps virtual visit context, summaries, and next steps inside the same workflow.', icon: Video, metric: 'Visit-ready context', category: 'Operations' },
];

const sections = [
  {
    eyebrow: 'Documentation & Notes',
    title: 'Clinical notes organize themselves while the conversation stays human.',
    copy: 'MedAlly listens, structures, translates, and prepares documentation so clinicians can stay present with patients.',
    image: '/images/medally/features-gpt/documentation-notes.png',
    agents: agents.filter((agent) => agent.category === 'Documentation'),
  },
  {
    eyebrow: 'Diagnostics & Decision Support',
    title: 'Evidence is synthesized into ranked, reviewable clinical context.',
    copy: 'Labs, findings, medication safety, testing, and differential diagnosis signals stay connected for physician review.',
    image: '/images/medally/features-gpt/diagnostics-decision-support.png',
    agents: agents.filter((agent) => agent.category === 'Diagnostics'),
  },
  {
    eyebrow: 'Billing & Revenue',
    title: 'Coding evidence follows the encounter instead of becoming cleanup work.',
    copy: 'MedAlly keeps documentation, coding, claims, and denial-risk context aligned to reduce administrative rework.',
    image: '/images/medally/features-gpt/billing-revenue.png',
    agents: agents.filter((agent) => agent.category === 'Revenue'),
  },
  {
    eyebrow: 'Workflow & Operations',
    title: 'The clinic moves with less friction across care plans and follow-up.',
    copy: 'Care pathways, monitoring, emergency planning, specialty workflows, and virtual visits operate as one clinical layer.',
    image: '/images/medally/clinical-workflow-real.png',
    agents: agents.filter((agent) => agent.category === 'Operations'),
  },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.medally.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.medally.ai/features' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.medally.ai/features#webpage',
    url: 'https://www.medally.ai/features',
    name: 'MedAlly Features | Clinical AI Platform for Physicians',
    description:
      "Explore MedAlly's clinical AI platform for documentation, diagnostics, billing, revenue, workflow operations, patient follow-up, and physician review.",
    isPartOf: { '@id': 'https://www.medally.ai/#website' },
    about: { '@id': 'https://www.medally.ai/#software' },
    mainEntity: {
      '@type': 'ItemList',
      name: 'MedAlly clinical AI feature categories',
      itemListElement: sections.map((section, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: section.eyebrow,
        description: section.copy,
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MedAlly',
    applicationCategory: 'HealthcareApplication',
    featureList: agents.map((agent) => `${agent.name}: ${agent.title}`),
  },
];

const FeaturesPage: FC = () => (
  <Layout>
    <SEO
      title="MedAlly Features | Clinical AI Platform for Physicians"
      description="Explore MedAlly's clinical AI platform for documentation, diagnostics, billing, revenue, workflow operations, patient follow-up, and physician review."
      url="https://www.medally.ai/features"
      image={heroImage}
      imageAlt="Physician using MedAlly clinical AI documentation software during a patient conversation"
      keywords={[
        'clinical AI platform',
        'physician AI assistant',
        'AI healthcare assistant',
        'AI clinical documentation',
        'clinical decision support',
        'medical coding automation',
        'EHR workflow integration',
      ]}
      structuredData={structuredData}
    />
    <main className="medally-dark-page bg-[#0A2540] text-white">
      <PageHero
        eyebrow="Features"
        title="MedAlly clinical AI platform for the whole workday"
        intro="Sixteen MedAlly agents help physicians document, decide, code, follow up, and coordinate care without turning the visit into another screen task."
        image={heroImage}
        imageAlt="MedAlly features hero with physician in conversation and calm clinical AI software"
        ctaLabel="Explore MedAlly"
      />

      <section className="relative overflow-hidden bg-[#0A2540] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A6F4E1]">One platform, sixteen jobs</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              A calm operating layer for the clinical workflows that burn teams out.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#E6EBF1]/82">
            MedAlly is bright, evidence-led, and built for grown-up clinical teams. It uses teal for workflow,
            mint for clarity, and coral only where a before-state needs to show avoidable friction.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="What does MedAlly automate?"
        answer="MedAlly automates the work around a patient encounter while keeping the physician in control: clinical documentation, lab synthesis, differential diagnosis, treatment guidance, medication safety, follow-up, coding, billing, and operational handoffs."
        points={[
          'Documentation agents turn conversation and encounter context into structured notes.',
          'Decision-support agents keep labs, differentials, medications, and care pathways reviewable.',
          'Operations agents connect coding, claims, follow-up, specialty workflows, and telehealth context.',
        ]}
      />

      {sections.map((section, index) => (
        <section key={section.eyebrow} className="relative overflow-hidden bg-[#0A2540] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A6F4E1]">{section.eyebrow}</p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">{section.title}</h2>
              <p className="mt-5 text-lg leading-8 text-[#E6EBF1]/82">{section.copy}</p>
              <div className="mt-8 space-y-3">
                {section.agents.map((agent) => {
                  const Icon = agent.icon;
                  return (
                    <div key={agent.name} className="flex gap-4 border-t border-[#A6F4E1]/15 pt-4">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A6F4E1]/12 text-[#00C2B2]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{agent.name}</h3>
                        <p className="text-sm leading-6 text-[#E6EBF1]/72">{agent.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sticky top-24 h-[410px] overflow-hidden rounded-2xl border border-[#A6F4E1]/20 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
              <img
                src={section.image}
                alt={`${section.eyebrow} MedAlly generated feature visual`}
                className="h-[112%] w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        </section>
      ))}

      <ParallaxImageBand
        eyebrow="Product depth"
        title="Clinical notes still feel like software, not spectacle."
        copy="The generated imagery sets the editorial tone, while MedAlly product visuals keep the page grounded in real documentation workflows."
        image="/images/medally/product-ambient-scribe.png"
        imageAlt="MedAlly ambient documentation product screen"
      />

      <ParallaxImageBand
        eyebrow="Decision support"
        title="Differential reasoning stays visible and reviewable."
        copy="MedAlly keeps diagnostic ranking and supporting evidence close to the clinical note, so the physician sees why a recommendation appears."
        image="/images/medally/product-differential-panel.png"
        imageAlt="MedAlly differential diagnosis product panel"
        reverse
      />

      <section className="relative overflow-hidden bg-[#0A2540] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-[#A6F4E1]/20 bg-white/[0.055] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A6F4E1]">Before MedAlly</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">The pain is administrative, not clinical.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['After-hours notes', 'Missed follow-up loops', 'Coding cleanup'].map((pain) => (
              <div key={pain} className="rounded-xl border border-[#FF6B6B]/35 bg-[#FF6B6B]/10 p-5">
                <Bell className="h-5 w-5 text-[#FF6B6B]" />
                <p className="mt-4 font-semibold text-white">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default FeaturesPage;
