import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mic,
  FileText,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Layers,
  Database,
  BrainCircuit,
  Edit3,
  Check,
  RotateCcw,
  Activity,
  ClipboardList,
  Tag,
  ShieldAlert,
  ArrowUpRight,
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
      '@id': 'https://www.medally.ai/how-it-works#webpage',
      url: 'https://www.medally.ai/how-it-works',
      name: 'How MedAlly Works | Clinical AI Workflow for Physicians',
      description:
        'See how MedAlly turns patient encounters into SOAP-style notes, decision-support information, ICD-10/CPT coding context, and physician-reviewed next steps.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.medally.ai/#website',
        name: 'MedAlly',
        url: 'https://www.medally.ai',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.medally.ai/how-it-works#breadcrumb',
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
          name: 'How It Works',
          item: 'https://www.medally.ai/how-it-works',
        },
      ],
    },
  ],
};

interface FAQItem {
  q: string;
  a: string;
  linkText?: string;
  linkHref?: string;
  postLinkText?: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What information does MedAlly use to start the workflow?',
    a: 'MedAlly starts with the patient encounter. It listens to the patient-physician conversation and uses information from that encounter to prepare the work that follows.',
  },
  {
    q: 'What does MedAlly prepare from the encounter?',
    a: 'MedAlly can prepare SOAP-style clinical documentation, decision-support and differential-review information, lab-related information, treatment-planning and follow-up information, ICD-10/CPT coding information, and related billing information for physician review.',
  },
  {
    q: 'Can physicians edit the documentation MedAlly prepares?',
    a: 'Yes. Physicians can review and edit the prepared clinical documentation before it is used as part of the final clinical record.',
  },
  {
    q: 'Does MedAlly provide ICD-10 and CPT coding information?',
    a: 'Yes. MedAlly prepares ICD-10/CPT coding information around the encounter for physician review. Coding information should be reviewed and validated before use.',
  },
  {
    q: 'Does MedAlly provide decision-support and lab information?',
    a: 'Yes. MedAlly can organize decision-support, differential-review, and lab-related information around the encounter for physician review.',
  },
  {
    q: 'Does MedAlly support treatment planning and follow-up?',
    a: 'Yes. MedAlly supports treatment-planning information and follow-up workflow connected to the encounter. The physician remains responsible for clinical decisions and next actions.',
  },
  {
    q: 'How does approved work move into the existing workflow?',
    a: 'After physician review and approval, MedAlly can hand approved work back into the practice or EHR workflow. The exact handoff method can vary by deployment.',
  },
  {
    q: 'Does MedAlly make clinical decisions for the physician?',
    a: 'No. MedAlly prepares and organizes information for review. Clinical judgment and final clinical decisions remain with the physician.',
  },
  {
    q: 'Is MedAlly only an AI medical scribe?',
    a: 'No. The AI medical scribe is one part of a broader workflow that also includes structured documentation, clinical information for review, coding and billing information, treatment and follow-up work, and workflow handoff.',
  },
  {
    q: 'Is MedAlly free to try?',
    a: "Yes. MedAlly's Forever Free plan includes 10 encounters per month. See ",
    linkText: 'Pricing',
    linkHref: '/pricing',
    postLinkText: ' for current plan details.',
  },
];

const workflowOutputs = [
  {
    output: 'Clinical note',
    prepares: 'SOAP-style clinical documentation',
    action: 'Review and edit the note',
    icon: FileText,
    badge: 'Documentation',
  },
  {
    output: 'Decision-support information',
    prepares: 'Differential-review and supporting clinical information',
    action: 'Interpret and decide clinically',
    icon: BrainCircuit,
    badge: 'Clinical Review',
  },
  {
    output: 'Lab information',
    prepares: 'Lab-related information connected to the visit',
    action: "Review alongside the patient's clinical picture",
    icon: Activity,
    badge: 'Diagnostics',
  },
  {
    output: 'Treatment and follow-up information',
    prepares: 'Treatment-planning and follow-up information',
    action: 'Decide the appropriate next action',
    icon: ClipboardList,
    badge: 'Care Plan',
  },
  {
    output: 'Coding and billing information',
    prepares: 'ICD-10/CPT and related billing information',
    action: 'Review and validate before use',
    icon: Tag,
    badge: 'Administrative',
  },
  {
    output: 'Workflow handoff',
    prepares: 'Approved work prepared for the next practice or EHR step',
    action: 'Approve what moves forward',
    icon: Workflow,
    badge: 'Handoff',
  },
];

const checklistItems = [
  'Edit and refine clinical documentation',
  'Check decision-support or differential information',
  'Review lab-related information',
  'Validate ICD-10/CPT and billing information',
  'Review treatment-planning and follow-up tasks',
];

const HowItWorksPage: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSoapSection, setActiveSoapSection] = useState<'S' | 'O' | 'A' | 'P'>('S');
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [checkedCodes, setCheckedCodes] = useState<Record<string, boolean>>({
    'J20.9': true,
    'J45.20': true,
    '99214': true,
  });

  const [interactiveSoap, setInteractiveSoap] = useState({
    S: '54-year-old male with a 4-day history of non-productive dry cough and mild exertional dyspnea. Denies fever, chills, or orthopnea. Past medical history notable for mild intermittent asthma.',
    O: 'Vitals: BP 124/78 mmHg | HR 72 bpm | Temp 98.4°F | SpO2 98% on room air.\nExam: Lungs clear to auscultation bilaterally. No wheezing or rhonchi. Heart regular rate and rhythm, S1/S2 normal.',
    A: '1. Acute bronchitis, likely viral.\n2. Mild intermittent asthma, baseline stable without acute bronchospasm.',
    P: '1. Supportive care: oral hydration, OTC throat lozenges, and antitussive as needed.\n2. Continue Albuterol HFA 90mcg 1-2 puffs PRN wheezing.\n3. Return clinic or emergency evaluation if high fever, worsening dyspnea, or hemoptysis occurs.',
  });

  const handleToggleCode = (code: string) => {
    setCheckedCodes((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  return (
    <Layout>
      <SEO
        title="How MedAlly Works | Clinical AI Workflow for Physicians"
        description="See how MedAlly turns patient encounters into SOAP-style notes, decision-support information, ICD-10/CPT coding context, and physician-reviewed next steps."
        url="https://www.medally.ai/how-it-works"
        image="/images/medally/brand-two-screens-one-truth.png"
        imageAlt="MedAlly clinical AI workflow turning a patient encounter into structured, reviewable work for physicians."
        keywords={[
          'clinical AI workflow for physicians',
          'how medally works',
          'medally product workflow',
          'SOAP notes AI',
          'clinical AI platform',
          'physician review workflow',
          'ICD-10 CPT coding review',
        ]}
        structuredData={structuredData}
      />

      <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-teal-500/10 dark:bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                    <Workflow className="w-3.5 h-3.5" />
                    CLINICAL AI WORKFLOW FOR PHYSICIANS
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-editorial leading-[1.15] mb-6">
                    How MedAlly Works Across the Patient Encounter
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl">
                    MedAlly listens during the patient encounter and helps turn the visit into structured, reviewable work. It prepares SOAP-style clinical documentation, organizes clinical and lab information for review, prepares ICD-10/CPT and billing information, and supports follow-up and workflow handoff after physician review.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <a
                      href="https://app.medally.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group"
                    >
                      Start MedAlly Free
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <Link
                      to="/features"
                      className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/30 backdrop-blur-md text-foreground hover:text-foreground font-bold hover:bg-muted/60 hover:border-border/80 transition-all duration-300 text-center"
                    >
                      Explore MedAlly Features
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 pt-4 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <span>
                      Forever Free includes <strong className="text-foreground font-semibold">10 encounters per month</strong>.
                    </span>
                  </div>
                </MotionReveal>
              </div>

              {/* Right Column: Workflow Overview Graphic */}
              <div className="lg:col-span-5">
                <MotionReveal delay={0.2}>
                  <div className="relative rounded-2xl border border-border bg-card/90 shadow-2xl p-6 sm:p-8 backdrop-blur-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between pb-6 border-b border-border/60 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <BrainCircuit className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Continuous Pipeline</div>
                          <div className="text-base font-bold text-foreground">Encounter to Approved Record</div>
                        </div>
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                        Physician-In-The-Loop
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {[
                        { num: '01', title: 'Patient Encounter', desc: 'Ambient audio capture without manual dictation', icon: Mic, color: 'text-blue-500' },
                        { num: '02', title: 'AI-Prepared Draft', desc: 'SOAP documentation, clinical reasoning & coding', icon: Sparkles, color: 'text-teal-500' },
                        { num: '03', title: 'Physician Review', desc: 'Clinician edits, verifies & validates care details', icon: UserCheck, color: 'text-emerald-500' },
                        { num: '04', title: 'Approved Next Step', desc: 'Handoff to EHR, orders & practice workflow', icon: Workflow, color: 'text-purple-500' },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.num}
                            className="flex items-start gap-4 p-3.5 rounded-xl border border-border/70 bg-background/60 hover:bg-muted/30 transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 font-mono text-xs font-bold text-muted-foreground">
                              {item.num}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                                  <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                                  {item.title}
                                </span>
                                {idx < 3 && <span className="text-xs text-muted-foreground">↓</span>}
                              </div>
                              <p className="text-xs text-muted-foreground font-light mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-500" />
                        No blank-page drafting
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-500" />
                        Physician retains authority
                      </span>
                    </div>
                  </div>
                </MotionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: HOW DOES MEDALLY WORK? & LINEAR WORKFLOW SEQUENCE
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-secondary/15">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  End-to-End Overview
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  How Does MedAlly Work?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  MedAlly uses the patient encounter as the starting point for the work that follows. Instead of rebuilding the visit across separate tools, physicians can move from the encounter to documentation, clinical review, coding and billing information, follow-up, and the next workflow step in one connected process.
                </p>
              </MotionReveal>
            </div>

            {/* Visual Process Flow Ribbon */}
            <MotionReveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-md">
                <div className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                  Core Workflow Principle
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {[
                    {
                      step: 'Encounter',
                      desc: 'Ambient audio listened during visit',
                      tag: 'Input',
                      color: 'border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400',
                    },
                    {
                      step: 'AI-prepared work',
                      desc: 'SOAP note, reasoning & codes structured',
                      tag: 'Preparation',
                      color: 'border-teal-500/30 bg-teal-500/5 text-teal-600 dark:text-teal-400',
                    },
                    {
                      step: 'Physician review',
                      desc: 'Clinician edits, verifies & validates',
                      tag: 'Verification',
                      color: 'border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400',
                    },
                    {
                      step: 'Approved next step',
                      desc: 'Care plan & notes routed to practice/EHR',
                      tag: 'Execution',
                      color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400',
                    },
                  ].map((phase, idx) => (
                    <div
                      key={phase.step}
                      className="p-5 rounded-xl border border-border bg-background flex flex-col justify-between relative group hover:border-teal-500/50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${phase.color}`}>
                            {phase.tag}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{phase.step}</h3>
                        <p className="text-xs text-muted-foreground font-light leading-relaxed">{phase.desc}</p>
                      </div>
                      {idx < 3 && (
                        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-muted-foreground/60 font-bold text-base">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION: THE MEDALLY WORKFLOW IN SIX STEPS
            ========================================================================= */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  Step-by-Step Sequence
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  The MedAlly Workflow in Six Steps
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  From the opening greeting to the final chart handoff, here is how MedAlly structures work around the physician at each stage of care.
                </p>
              </MotionReveal>
            </div>

            <div className="space-y-24">
              {/* STEP 1 */}
              <div id="step-1" className="scroll-mt-32">
                <MotionReveal>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                          01
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          Step 1: Ambient Listening
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial">
                        MedAlly listens during the patient encounter
                      </h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        During the visit, MedAlly listens to the patient-physician conversation and uses the encounter information to prepare the work that follows.
                      </p>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        That encounter becomes the basis for the clinical note and other reviewable outputs, so the physician does not have to reconstruct the visit from a blank page afterward.
                      </p>
                      <div className="pt-2">
                        <Link
                          to="/ai-medical-scribe"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group"
                        >
                          For the encounter-capture and note-drafting workflow, see{' '}
                          <strong className="underline decoration-teal-500/40 group-hover:decoration-teal-500">
                            MedAlly AI Medical Scribe
                          </strong>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
                        <div className="p-3 bg-muted/40 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-2 font-medium">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Encounter Capture
                          </span>
                          <span className="font-mono">Patient Visit In Progress</span>
                        </div>
                        <div className="p-2 sm:p-4 bg-muted/10">
                          <img
                            src="/images/medally/product-ambient-scribe.png"
                            alt="MedAlly listening during a patient encounter"
                            className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 bg-card border-t border-border text-xs space-y-1.5">
                          <div>
                            <strong className="text-foreground">What you see:</strong>{' '}
                            <span className="text-muted-foreground">Ambient encounter audio capture and real-time conversation stream.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">What MedAlly prepared:</strong>{' '}
                            <span className="text-muted-foreground">Speech stream converted into structured clinical context.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">Physician action:</strong>{' '}
                            <span className="text-muted-foreground">Engage directly with the patient without manual typing.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {/* STEP 2 */}
              <div id="step-2" className="scroll-mt-32">
                <MotionReveal>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 lg:order-2 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                          02
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          Step 2: Structured Note Generation
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial">
                        MedAlly prepares SOAP-style clinical documentation
                      </h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        MedAlly turns the encounter into <strong className="text-foreground font-medium">SOAP-style clinical documentation</strong> prepared for physician review.
                      </p>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        The physician receives a structured draft that can be reviewed and edited before it becomes part of the final clinical record.
                      </p>
                      <div className="pt-2">
                        <Link
                          to="/clinical-documentation-ai"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group"
                        >
                          For the documentation-specific workflow, see{' '}
                          <strong className="underline decoration-teal-500/40 group-hover:decoration-teal-500">
                            AI Clinical Documentation
                          </strong>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-6 lg:order-1">
                      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
                        <div className="p-3 bg-muted/40 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-2 font-medium text-foreground">
                            <FileText className="w-3.5 h-3.5 text-teal-500" />
                            SOAP-Style Draft Note
                          </span>
                          <span className="font-mono text-teal-600 dark:text-teal-400 font-semibold">Ready for Review</span>
                        </div>
                        <div className="p-2 sm:p-4 bg-muted/10">
                          <img
                            src="/images/medally/brand-two-screens-one-truth.png"
                            alt="MedAlly SOAP-style clinical documentation prepared for physician review"
                            className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 bg-card border-t border-border text-xs space-y-1.5">
                          <div>
                            <strong className="text-foreground">What you see:</strong>{' '}
                            <span className="text-muted-foreground">Structured SOAP documentation with distinct S, O, A, and P sections.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">What MedAlly prepared:</strong>{' '}
                            <span className="text-muted-foreground">Synthesized clinical documentation draft from encounter data.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">Physician action:</strong>{' '}
                            <span className="text-muted-foreground">Review, edit inline, and validate clinical accuracy.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {/* STEP 3 */}
              <div id="step-3" className="scroll-mt-32">
                <MotionReveal>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                          03
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          Step 3: Clinical Organization & Decision Support
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial">
                        MedAlly organizes clinical information for review
                      </h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        The visit can create clinical work beyond the note itself. MedAlly can organize:
                      </p>
                      <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground font-light">
                        <li className="flex items-start gap-3">
                          <BrainCircuit className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                          <span><strong>Decision-support and differential-review information</strong> for physician interpretation;</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Activity className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                          <span><strong>Lab-related information</strong> connected to current and past encounter context;</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ClipboardList className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                          <span><strong>Treatment-planning information</strong> and medication reconciliation suggestions; and</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                          <span><strong>Follow-up information</strong> and preventative recall tasks connected to the encounter.</span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground italic border-l-2 border-teal-500/50 pl-3">
                        These outputs are presented to support clinician review and judgment, not to replace them.
                      </p>
                      <div className="pt-2">
                        <Link
                          to="/ai-clinical-decision-support"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline underline-offset-4"
                        >
                          Explore AI Clinical Decision Support
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
                        <div className="p-3 bg-muted/40 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-2 font-medium text-foreground">
                            <BrainCircuit className="w-3.5 h-3.5 text-teal-500" />
                            Clinical Decision Support Panel
                          </span>
                          <span className="font-mono text-xs">Physician Review Flow</span>
                        </div>
                        <div className="p-2 sm:p-4 bg-muted/10">
                          <img
                            src="/images/medally/product-differential-panel.png"
                            alt="MedAlly clinical review workspace with decision-support and lab-related information"
                            className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 bg-card border-t border-border text-xs space-y-1.5">
                          <div>
                            <strong className="text-foreground">What you see:</strong>{' '}
                            <span className="text-muted-foreground">Differential considerations, lab correlations, and care plan suggestions.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">What MedAlly prepared:</strong>{' '}
                            <span className="text-muted-foreground">Organized clinical context to accelerate physician chart review.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">Physician action:</strong>{' '}
                            <span className="text-muted-foreground">Evaluate recommendations and make independent clinical decisions.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {/* STEP 4 */}
              <div id="step-4" className="scroll-mt-32">
                <MotionReveal>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 lg:order-2 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                          04
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          Step 4: Administrative & Coding Context
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial">
                        MedAlly prepares coding and billing information
                      </h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        MedAlly prepares <strong className="text-foreground font-medium">ICD-10/CPT coding information</strong> and related billing information around the same encounter.
                      </p>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        Keeping this information connected to the visit gives the physician a clearer review path between the clinical documentation and the administrative work that follows.
                      </p>
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-2.5">
                        <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span>Coding and billing information should be reviewed and validated by the physician or coding team before use.</span>
                      </div>
                    </div>

                    <div className="lg:col-span-6 lg:order-1">
                      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
                        <div className="p-3 bg-muted/40 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-2 font-medium text-foreground">
                            <Tag className="w-3.5 h-3.5 text-teal-500" />
                            ICD-10 & CPT Coding Card
                          </span>
                          <span className="font-mono text-xs">Linked to Note</span>
                        </div>
                        <div className="p-2 sm:p-4 bg-muted/10">
                          <img
                            src="/images/medally/product-billing-card.png"
                            alt="MedAlly clinical review workspace with ICD-10 and CPT coding information"
                            className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 bg-card border-t border-border text-xs space-y-1.5">
                          <div>
                            <strong className="text-foreground">What you see:</strong>{' '}
                            <span className="text-muted-foreground">Suggested ICD-10 diagnostic and CPT procedural codes with documentation rationale.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">What MedAlly prepared:</strong>{' '}
                            <span className="text-muted-foreground">Coding context mapped directly to documented patient visit findings.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">Physician action:</strong>{' '}
                            <span className="text-muted-foreground">Validate, adjust, and confirm coding accuracy prior to billing.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {/* STEP 5 */}
              <div id="step-5" className="scroll-mt-32">
                <MotionReveal>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                          05
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          Step 5: Physician Review & Validation
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial">
                        The physician reviews and edits the prepared work
                      </h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        The physician reviews the SOAP-style note and the other information MedAlly has prepared, makes changes where needed, and validates the information that will be used.
                      </p>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        This review can include:
                      </p>
                      <div className="space-y-2">
                        {checklistItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 p-2.5 rounded-lg border border-border/80 bg-background/50 text-sm font-medium text-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium pt-2">
                        Clinical decisions and the final clinical record remain the physician&apos;s responsibility.
                      </p>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl relative">
                        <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                          <div className="flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-teal-500" />
                            <span className="font-bold text-base text-foreground">Clinician Review Hub</span>
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                            Pre-Signoff Validation
                          </span>
                        </div>

                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                            <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                              <span>SOAP Clinical Note Status</span>
                              <span className="text-teal-600 dark:text-teal-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Reviewed & Verified
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground font-light">
                              Physician validated history, exam findings, differential assessment, and follow-up directives.
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                            <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                              <span>ICD-10 / CPT Coding Validation</span>
                              <span className="text-teal-600 dark:text-teal-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> 3 Codes Confirmed
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground font-light">
                              J20.9 (Acute bronchitis), J45.20 (Mild intermittent asthma), 99214 (Outpatient visit).
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-background border border-border space-y-2">
                            <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                              <span>Orders & Care Plan Next Steps</span>
                              <span className="text-teal-600 dark:text-teal-400 flex items-center gap-1">
                                <Check className="w-3.5 h-3.5" /> Orders Staged
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground font-light">
                              Medication renewal staged; patient instructions prepared for portal delivery.
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span>Full clinician audit control</span>
                          <span className="font-semibold text-foreground">Physician Approved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              {/* STEP 6 */}
              <div id="step-6" className="scroll-mt-32">
                <MotionReveal>
                  <div className="grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 lg:order-2 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                          06
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          Step 6: Practice & EHR Workflow Handoff
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial">
                        Approved work moves to the next workflow step
                      </h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        After physician review and approval, MedAlly can hand approved work back into the practice or EHR workflow.
                      </p>
                      <p className="text-base text-muted-foreground font-light leading-relaxed">
                        The exact handoff method can vary by deployment, adapting to your clinical environment whether via direct workflow handoff, clipboard transfer, or custom practice integration.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                        <Database className="w-4 h-4 text-teal-500 shrink-0" />
                        <span>Exact handoff behavior is configured during practice onboarding and deployment evaluation.</span>
                      </div>
                    </div>

                    <div className="lg:col-span-6 lg:order-1">
                      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl">
                        <div className="p-3 bg-muted/40 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-2 font-medium text-foreground">
                            <Workflow className="w-3.5 h-3.5 text-teal-500" />
                            Workflow Handoff
                          </span>
                          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                            Handoff Complete
                          </span>
                        </div>
                        <div className="p-2 sm:p-4 bg-muted/10">
                          <img
                            src="/images/medally/clinical-workflow-real.png"
                            alt="MedAlly physician-approved workflow handoff screen"
                            className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 bg-card border-t border-border text-xs space-y-1.5">
                          <div>
                            <strong className="text-foreground">What you see:</strong>{' '}
                            <span className="text-muted-foreground">Physician-approved clinical package ready for practice handoff.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">What MedAlly prepared:</strong>{' '}
                            <span className="text-muted-foreground">Clean, finalized documentation package ready for downstream care steps.</span>
                          </div>
                          <div>
                            <strong className="text-foreground">Physician action:</strong>{' '}
                            <span className="text-muted-foreground">Authorize handoff to practice record.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: WHAT MEDALLY PRODUCES FROM THE ENCOUNTER (STRUCTURED TABLE)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-card/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  Output Matrix
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  What MedAlly Produces From the Encounter
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  Every encounter produces multiple downstream clinical and operational requirements. Here is how MedAlly structures each output alongside the clear action taken by the clinician.
                </p>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/50 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <th className="py-4 px-6">Output</th>
                        <th className="py-4 px-6">What MedAlly Prepares</th>
                        <th className="py-4 px-6">Physician Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm">
                      {workflowOutputs.map((row) => {
                        const Icon = row.icon;
                        return (
                          <tr key={row.output} className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6 font-semibold text-foreground">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-foreground">{row.output}</div>
                                  <span className="text-[11px] font-medium text-muted-foreground">{row.badge}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-muted-foreground font-light">
                              {row.prepares}
                            </td>
                            <td className="py-4 px-6 text-foreground font-medium">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                                <UserCheck className="w-3.5 h-3.5" />
                                {row.action}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION: MORE THAN NOTE GENERATION (COMPARISON)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  Beyond Traditional Scribing
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  More Than Note Generation
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  An AI medical scribe focuses on turning the patient encounter into draft documentation. MedAlly continues beyond the draft note by keeping clinical information, coding and billing information, treatment and follow-up work, and the next workflow step connected to the same encounter.
                </p>
              </MotionReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Standalone Scribe */}
              <MotionReveal delay={0.1}>
                <div className="rounded-2xl border border-border bg-card/60 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Single-Function Tools
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Standard AI Medical Scribe</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      Primarily focused on recording the conversation and generating an initial note draft. The clinician still has to manually navigate separate systems for coding, differential review, and orders.
                    </p>
                    <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-muted-foreground" />
                        <span>Ambient audio recording</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-muted-foreground" />
                        <span>Draft clinical documentation</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-muted-foreground/60">
                        <span className="w-4 text-center font-bold">×</span>
                        <span>Isolated from coding & billing context</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-muted-foreground/60">
                        <span className="w-4 text-center font-bold">×</span>
                        <span>No differential or lab reconciliation link</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-8 mt-6 border-t border-border">
                    <Link
                      to="/ai-medical-scribe"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Explore AI Medical Scribe
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </MotionReveal>

              {/* MedAlly Platform */}
              <MotionReveal delay={0.2}>
                <div className="rounded-2xl border-2 border-teal-500/40 bg-teal-500/5 dark:bg-teal-500/10 p-8 h-full flex flex-col justify-between relative shadow-xl">
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider">
                    Full Encounter Workflow
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
                      Connected Clinical Platform
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">MedAlly Clinical AI Platform</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      Maintains continuous context from the live conversation through SOAP drafting, clinical differential reasoning, lab tracking, ICD-10/CPT coding, and physician-approved handoff.
                    </p>
                    <ul className="space-y-3 text-xs sm:text-sm text-foreground">
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-teal-500" />
                        <span>Ambient audio listening & structured notes</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-teal-500" />
                        <span>Differential support & lab-related information</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-teal-500" />
                        <span>ICD-10 & CPT coding context mapped to visit</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-teal-500" />
                        <span>Treatment planning & workflow handoff after review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-8 mt-6 border-t border-border/80">
                    <Link
                      to="/clinical-documentation-ai"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Explore AI Clinical Documentation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: SEE THE WORKFLOW IN MEDALLY (INTERACTIVE WORKSPACE SIMULATOR)
            ========================================================================= */}
        <section className="py-24 lg:py-32 border-b border-border bg-secondary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  Interactive Experience
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  See the Workflow in MedAlly
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  Follow the encounter from listening through SOAP-style documentation, physician review, clinical information, coding and billing information, and the approved next workflow step. The product experience is designed to keep those pieces connected to the same patient encounter rather than treating each task as a separate workflow.
                </p>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
                {/* Simulator Header Navigation */}
                <div className="border-b border-border bg-muted/40 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                        Interactive Workflow Simulation
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        Encounter Review: 54yo Male — Cough & Mild Dyspnea
                      </div>
                    </div>

                    {/* Step Tabs */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 0, label: '1. Listen', icon: Mic },
                        { id: 1, label: '2. SOAP Note', icon: FileText },
                        { id: 2, label: '3. Clinical Reasoning', icon: BrainCircuit },
                        { id: 3, label: '4. Coding & Billing', icon: Tag },
                        { id: 4, label: '5. Physician Sign-off', icon: UserCheck },
                        { id: 5, label: '6. Handoff', icon: Workflow },
                      ].map((tab) => {
                        const Icon = tab.icon;
                        const isCurrent = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isCurrent
                                ? 'bg-teal-600 text-white shadow-sm'
                                : 'bg-background hover:bg-muted text-muted-foreground hover:text-foreground border border-border'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Simulator Body */}
                <div className="p-6 sm:p-8 min-h-[420px]">
                  {/* TAB 0: LISTEN */}
                  {activeTab === 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-sm font-semibold text-foreground">Ambient Listening Active</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">Audio Duration: 04:18</span>
                      </div>

                      <div className="p-4 rounded-xl bg-background border border-border space-y-3 font-mono text-xs leading-relaxed">
                        <div className="text-teal-600 dark:text-teal-400 font-bold">
                          [Physician]: How has that cough been feeling over the last few days?
                        </div>
                        <div className="text-muted-foreground">
                          [Patient]: It started about four days ago, dry cough, mostly when I walk up stairs. No fever, but with my asthma history I wanted to get it checked out.
                        </div>
                        <div className="text-teal-600 dark:text-teal-400 font-bold">
                          [Physician]: Any chest pain, shortness of breath at rest, or fever?
                        </div>
                        <div className="text-muted-foreground">
                          [Patient]: No fever or chills. No pain in the chest, just feels tight when coughing.
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>MedAlly continuous stream processor</span>
                        <button
                          type="button"
                          onClick={() => setActiveTab(1)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
                        >
                          Generate Note Draft <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 1: SOAP NOTE */}
                  {activeTab === 1 && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex gap-2">
                          {(['S', 'O', 'A', 'P'] as const).map((sec) => (
                            <button
                              key={sec}
                              type="button"
                              onClick={() => setActiveSoapSection(sec)}
                              className={`w-9 h-9 rounded-lg font-bold text-xs transition-all ${
                                activeSoapSection === sec
                                  ? 'bg-teal-600 text-white shadow-sm'
                                  : 'bg-background hover:bg-muted text-muted-foreground border border-border'
                              }`}
                            >
                              {sec}
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setIsEditingNote(!isEditingNote)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-background text-xs font-semibold text-foreground hover:bg-muted"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            {isEditingNote ? 'Done Editing' : 'Edit Note'}
                          </button>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-background border border-border min-h-[160px]">
                        <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
                          Section:{' '}
                          {activeSoapSection === 'S'
                            ? 'Subjective'
                            : activeSoapSection === 'O'
                            ? 'Objective'
                            : activeSoapSection === 'A'
                            ? 'Assessment'
                            : 'Plan'}
                        </div>
                        {isEditingNote ? (
                          <textarea
                            value={interactiveSoap[activeSoapSection]}
                            onChange={(e) =>
                              setInteractiveSoap({
                                ...interactiveSoap,
                                [activeSoapSection]: e.target.value,
                              })
                            }
                            className="w-full h-32 p-2 bg-muted/30 border border-border rounded-lg text-xs font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-teal-500"
                          />
                        ) : (
                          <p className="text-xs sm:text-sm text-foreground font-light leading-relaxed whitespace-pre-line">
                            {interactiveSoap[activeSoapSection]}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>SOAP-style documentation prepared for physician review</span>
                        <button
                          type="button"
                          onClick={() => setActiveTab(2)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
                        >
                          View Clinical Reasoning <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: CLINICAL REASONING & LABS */}
                  {activeTab === 2 && (
                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-background border border-border space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            <BrainCircuit className="w-4 h-4 text-teal-500" />
                            Differential Considerations
                          </div>
                          <div className="space-y-2 text-xs text-muted-foreground font-light">
                            <div className="p-2 rounded bg-muted/40 border border-border">
                              <strong className="text-foreground">1. Acute Bronchitis (Likely):</strong> 4-day non-productive cough without systemic fever signs.
                            </div>
                            <div className="p-2 rounded bg-muted/40 border border-border">
                              <strong className="text-foreground">2. Asthma Exacerbation (Low Risk):</strong> Clear lung exam, baseline stable.
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-background border border-border space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                            <Activity className="w-4 h-4 text-teal-500" />
                            Diagnostic & Lab Context
                          </div>
                          <div className="space-y-2 text-xs text-muted-foreground font-light">
                            <div className="p-2 rounded bg-muted/40 border border-border">
                              <strong className="text-foreground">SpO2:</strong> 98% room air (Normal)
                            </div>
                            <div className="p-2 rounded bg-muted/40 border border-border">
                              <strong className="text-foreground">Follow-up:</strong> Recommend clinical reassessment if cough persists &gt; 10 days.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>Decision support presented for physician interpretation</span>
                        <button
                          type="button"
                          onClick={() => setActiveTab(3)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
                        >
                          Review Coding & Billing <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: CODING & BILLING */}
                  {activeTab === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Prepared ICD-10 & CPT Codes (Click to Validate)
                        </div>
                        {[
                          { code: 'J20.9', desc: 'Acute bronchitis, unspecified', type: 'ICD-10 Diagnosis' },
                          { code: 'J45.20', desc: 'Mild intermittent asthma, uncomplicated', type: 'ICD-10 Diagnosis' },
                          { code: '99214', desc: 'Office/outpatient visit, established patient, moderate complexity', type: 'CPT Procedure' },
                        ].map((c) => (
                          <div
                            key={c.code}
                            onClick={() => handleToggleCode(c.code)}
                            className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                              checkedCodes[c.code]
                                ? 'border-teal-500/50 bg-teal-500/10'
                                : 'border-border bg-background hover:bg-muted/30'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded flex items-center justify-center border text-xs ${
                                  checkedCodes[c.code]
                                    ? 'bg-teal-600 border-teal-600 text-white'
                                    : 'border-border bg-background'
                                }`}
                              >
                                {checkedCodes[c.code] && <Check className="w-3.5 h-3.5" />}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-foreground font-mono">{c.code}</div>
                                <div className="text-xs text-muted-foreground font-light">{c.desc}</div>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                              {c.type}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>Coding context mapped to documented patient findings</span>
                        <button
                          type="button"
                          onClick={() => setActiveTab(4)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors"
                        >
                          Physician Sign-off <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: PHYSICIAN SIGN-OFF */}
                  {activeTab === 4 && (
                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-background border border-border space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-foreground">Encounter Verification Summary</h4>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400">
                            Ready for Clinician Approval
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-3 rounded-lg bg-muted/40 border border-border">
                            <span className="text-muted-foreground">SOAP Note:</span>
                            <div className="font-semibold text-foreground mt-0.5">4 Sections Verified</div>
                          </div>
                          <div className="p-3 rounded-lg bg-muted/40 border border-border">
                            <span className="text-muted-foreground">Coding:</span>
                            <div className="font-semibold text-foreground mt-0.5">3 Codes Selected</div>
                          </div>
                          <div className="p-3 rounded-lg bg-muted/40 border border-border">
                            <span className="text-muted-foreground">Care Plan:</span>
                            <div className="font-semibold text-foreground mt-0.5">Hydration & PRN Inhaler</div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setActiveTab(5)}
                            className="w-full py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all"
                          >
                            <UserCheck className="w-4 h-4" />
                            Approve and Handoff Encounter Work
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>Clinical decisions remain the physician&apos;s responsibility</span>
                        <span className="text-xs font-medium text-foreground">Step 5 of 6</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: WORKFLOW HANDOFF */}
                  {activeTab === 5 && (
                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                          <Check className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground">
                          Approved Work Prepared for Practice Handoff
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
                          The physician-approved SOAP note, validated ICD-10/CPT codes, and patient instructions have been formatted for handoff into the practice workflow.
                        </p>
                        <div className="pt-2 flex justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveTab(0)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-background text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                          >
                            <RotateCcw className="w-3.5 h-3.5" /> Reset Demo
                          </button>
                          <a
                            href="https://app.medally.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white text-xs font-bold shadow-md transition-colors"
                          >
                            Start MedAlly Free <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span>Exact handoff method adapts by deployment environment</span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Complete Workflow</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION: EXPLORE THE BROADER MEDALLY WORKFLOW & VALUE
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  Platform Architecture
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  Explore the Broader MedAlly Workflow
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  For a complete view of MedAlly&apos;s capabilities, explore our full feature suite and calculated workflow value.
                </p>
              </MotionReveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <MotionReveal delay={0.1}>
                <Link
                  to="/features"
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-between">
                      <span>MedAlly Features</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Discover ambient listening, structured SOAP generation, clinical decision support, medical coding intelligence, and EHR handoff capabilities.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 pt-6 mt-6 border-t border-border inline-block">
                    View Complete Feature Suite →
                  </span>
                </Link>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <Link
                  to="/benefits"
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-between">
                      <span>MedAlly Benefits</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Learn how keeping clinical documentation, decision support, and coding connected to the visit eliminates administrative friction and chart debt.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 pt-6 mt-6 border-t border-border inline-block">
                    Explore Workflow Benefits →
                  </span>
                </Link>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: TRY THE MEDALLY WORKFLOW FREE
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-teal-500/5 dark:bg-teal-500/10 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-6">
                Zero Financial Risk
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                Try the MedAlly Workflow Free
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-8">
                Experience the complete patient encounter workflow firsthand. MedAlly&apos;s <strong className="text-foreground font-semibold">Forever Free</strong> plan includes <strong className="text-foreground font-semibold">10 encounters per month</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.medally.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group"
                  >
                  Start MedAlly Free
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/30 backdrop-blur-md text-foreground hover:text-foreground font-bold hover:bg-muted/60 hover:border-border/80 transition-all duration-300 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION: FREQUENTLY ASKED QUESTIONS (ACCORDION)
            ========================================================================= */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-semibold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-4">
                  Common Questions
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                  Frequently Asked Questions About How MedAlly Works
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  Clear answers about what goes into MedAlly, what it prepares, and how physicians remain in control.
                </p>
              </MotionReveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <MotionReveal key={faq.q} delay={idx * 0.04}>
                    <div className="rounded-2xl border border-border bg-card/80 overflow-hidden transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
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
                        <div className="border-t border-border/50 pt-4">
                          <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                            {faq.a}
                            {faq.linkHref && faq.linkText && (
                              <Link
                                to={faq.linkHref}
                                className="text-teal-600 dark:text-teal-400 font-semibold underline decoration-teal-500/40 hover:decoration-teal-500 ml-1 inline-flex items-center gap-0.5"
                              >
                                {faq.linkText}
                              </Link>
                            )}
                            {faq.postLinkText && <span>{faq.postLinkText}</span>}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-muted/60 border border-border text-foreground hover:bg-muted font-bold text-sm transition-all group"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: FROM PATIENT ENCOUNTER TO THE NEXT STEP (FINAL CTA)
            ========================================================================= */}
        <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <MotionReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-editorial mb-6">
                From Patient Encounter to the Next Step
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-4 max-w-2xl mx-auto">
                MedAlly helps keep the work created by a patient encounter connected—from the conversation and SOAP-style note through clinical review, coding and billing information, follow-up, physician review, and the next workflow step.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                For the broader software category and what practices should evaluate when comparing workflow platforms, see{' '}
                <Link
                  to="/clinical-workflow-software"
                  className="text-teal-600 dark:text-teal-400 font-bold underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Clinical Workflow Software
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.medally.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group"
                >
                  Start MedAlly Free
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
                <Link
                  to="/features"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/30 backdrop-blur-md text-foreground hover:text-foreground font-bold hover:bg-muted/60 hover:border-border/80 transition-all duration-300 text-center"
                >
                  Explore MedAlly Features
                </Link>
                <Link
                  to="/clinical-workflow-software"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/30 backdrop-blur-md text-foreground hover:text-foreground font-bold hover:bg-muted/60 hover:border-border/80 transition-all duration-300 text-center"
                >
                  Clinical Workflow Software
                </Link>
              </div>

              <div className="mt-8 text-xs text-muted-foreground">
                No credit card required • Forever Free includes 10 encounters per month
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HowItWorksPage;
