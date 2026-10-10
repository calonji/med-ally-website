import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileCode2,
  FileText,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Check,
  ShieldCheck,
  Tag,
  Activity,
  CheckSquare,
  GitBranch,
  Sliders,
  AlertCircle,
  Eye,
  Settings2,
  ExternalLink,
  HelpCircle,
  Layers,
  Search,
  BookOpen
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { MotionReveal } from '@/components/MotionReveal';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.medally.ai/ai-medical-coding#webpage',
      url: 'https://www.medally.ai/ai-medical-coding',
      name: 'AI Medical Coding Software for Physicians | MedAlly',
      description:
        'See how MedAlly supports AI medical coding with configurable coding systems, encounter-linked coding information, physician review, and workflow handoff.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.medally.ai/#website',
        name: 'MedAlly',
        url: 'https://www.medally.ai',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.medally.ai/ai-medical-coding#breadcrumb',
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
          name: 'AI Medical Coding',
          item: 'https://www.medally.ai/ai-medical-coding',
        },
      ],
    },
  ],
};

const codingSystems = [
  { id: 'icd10', name: 'ICD-10', desc: 'Clinical Modification diagnosis codes', standard: 'ICD-10-CM', defaultActive: true },
  { id: 'cpt', name: 'CPT Codes', desc: 'Current Procedural Terminology for procedures & services', standard: 'AMA CPT', defaultActive: true },
  { id: 'icd11', name: 'ICD-11', desc: 'WHO eleventh revision classification', standard: 'WHO ICD-11', defaultActive: false },
  { id: 'drg', name: 'DRG Codes', desc: 'Diagnosis-Related Groups for inpatient classification', standard: 'CMS DRG', defaultActive: false },
  { id: 'hcpcs', name: 'HCPCS Codes', desc: 'Healthcare Common Procedure Coding System Level II', standard: 'CMS HCPCS', defaultActive: true },
  { id: 'modifiers', name: 'Modifier Codes', desc: '2-digit service/procedure alteration modifiers (e.g., 25, 59)', standard: 'CPT/HCPCS', defaultActive: true },
];

const categoryComparisonTable = [
  {
    term: 'AI medical coding',
    describes: 'AI used to identify, organize, or prepare coding information from clinical documentation',
    confirm: 'What the AI prepares and who validates it',
  },
  {
    term: 'AI medical coding software',
    describes: 'Software product that uses AI within a coding workflow',
    confirm: 'Inputs, outputs, review process, integrations, and downstream use',
  },
  {
    term: 'Automated medical coding',
    describes: 'A workflow with a higher degree of coding automation',
    confirm: 'Which steps are actually automated and where human review occurs',
  },
  {
    term: 'Medical coding automation',
    describes: 'Automation of one or more coding-related tasks',
    confirm: 'What remains manual, exception handling, and approval requirements',
  },
  {
    term: 'Medical coding software',
    describes: 'Broad category that can include encoders, code lookup, coding workflow, auditing, analytics, or automation',
    confirm: 'Whether the product solves the coding problem your organization actually has',
  },
];

const buyerEvaluationCriteria = [
  {
    area: 'Source documentation',
    ask: 'What clinical information the coding workflow uses',
    medallyApproach: 'Uses the ambient or documented encounter context directly connected to the SOAP clinical note',
  },
  {
    area: 'ICD-10/CPT output',
    ask: 'What coding information is generated or prepared',
    medallyApproach: 'Prepares ICD-10/CPT coding information and billing context inline within clinical context for review',
  },
  {
    area: 'Review workflow',
    ask: 'Who reviews, edits, validates, or approves the coding information',
    medallyApproach: 'Physician-centered review and validation at the encounter level before handoff',
  },
  {
    area: 'Documentation connection',
    ask: 'How reviewers can relate coding information back to the encounter or note',
    medallyApproach: 'Inline labeled code elements embedded directly within the relevant narrative sections',
  },
  {
    area: 'Exceptions',
    ask: 'What happens when the documentation is incomplete, ambiguous, or does not support a coding decision',
    medallyApproach: 'Physician easily edits narrative, adjusts codes, or flags items directly in the review pane',
  },
  {
    area: 'Billing workflow',
    ask: 'What happens to coding and billing-related information after review',
    medallyApproach: 'Prepares encounter billing context for downstream transfer once approved',
  },
  {
    area: 'Integration / handoff',
    ask: 'How approved information reaches the next system or workflow step',
    medallyApproach: 'Supports practice / EHR workflow handoff after physician review (deployment-dependent)',
  },
  {
    area: 'Automation boundaries',
    ask: 'Which steps are automated and which require user action',
    medallyApproach: 'Transparent boundary: AI assists drafting & code extraction; clinician validates and approves',
  },
  {
    area: 'Quality measurement',
    ask: 'How the organization will measure corrections, exceptions, consistency, and review burden after implementation',
    medallyApproach: 'Direct encounter oversight preserves clinical fidelity and documentation integrity',
  },
];

const workflowSteps = [
  {
    step: '1',
    title: 'Start with clinical documentation',
    description:
      'Coding depends on the information documented for the patient encounter. With MedAlly, coding context stays connected to the encounter and the AI clinical documentation workflow.',
    link: '/clinical-documentation-ai',
    linkText: 'Explore AI Clinical Documentation',
    secondaryLink: '/ai-medical-scribe',
    secondaryLinkText: 'MedAlly AI Medical Scribe',
  },
  {
    step: '2',
    title: 'Prepare coding information connected to the note',
    description:
      'MedAlly prepares ICD-10/CPT coding information from the encounter for physician review. In the encounter interface, an ICD-10 code can appear inline within the clinical note as a visible labeled element.',
  },
  {
    step: '3',
    title: 'Compare the coding information with the documented encounter',
    description:
      'The physician reviews the coding information in the context of the clinical note and encounter details to determine whether it is supported by the record.',
  },
  {
    step: '4',
    title: 'Edit or validate before use',
    description:
      'The physician reviews and validates the coding information before it moves forward, maintaining clinical ownership and documentation integrity.',
  },
  {
    step: '5',
    title: 'Move approved work to the next workflow step',
    description:
      'After physician review and approval, the work can move into the next practice or EHR workflow step. The exact handoff method varies by deployment.',
  },
];

const faqs = [
  {
    q: 'What is AI medical coding?',
    a: 'AI medical coding uses artificial intelligence to help identify, organize, or prepare coding information from clinical documentation and encounter context. The exact degree of automation varies by product.',
  },
  {
    q: 'What is AI medical coding software?',
    a: 'AI medical coding software is software that uses AI within a medical coding workflow. Products can differ significantly in what they analyze, what coding information they produce, how users review that information, and how approved work moves downstream.',
  },
  {
    q: 'Is AI medical coding the same as automated medical coding?',
    a: 'Not necessarily. AI medical coding is a broad category. Automated medical coding usually implies that one or more coding steps are automated. Practices should confirm exactly which steps are automated and where human review is required.',
  },
  {
    q: 'Which coding systems does MedAlly support?',
    a: 'MedAlly supports ICD-10, ICD-11, DRG Codes, CPT Codes, HCPCS Codes, and Modifier Codes as configurable coding preferences for documentation and billing. Coding information is prepared for physician review and validation before use.',
  },
  {
    q: 'Does MedAlly automatically finalize medical codes?',
    a: 'No. MedAlly does not automatically finalize medical codes. It prepares coding information for physician review and validation before use, and the physician controls what moves forward.',
  },
  {
    q: 'Does MedAlly support billing-related work?',
    a: 'Yes. MedAlly prepares billing-related information around the encounter in addition to ICD-10/CPT coding information. Physicians should review and validate billing-related information before use.',
  },
  {
    q: 'How does MedAlly connect coding to documentation?',
    a: 'MedAlly keeps ICD-10/CPT coding information connected to the same encounter workflow that produces SOAP-style clinical documentation, so the physician can review the coding information alongside the encounter context.',
  },
  {
    q: 'Can MedAlly support an EHR-connected coding workflow?',
    a: 'MedAlly can support practice / EHR workflow handoff after physician review and approval. The exact integration and handoff method vary by deployment.',
  },
  {
    q: 'Does AI medical coding replace physician or coding review?',
    a: 'AI can prepare or organize coding information, but the appropriate review responsibility depends on the workflow and organization. In MedAlly, coding information is prepared for review and validation before use.',
  },
  {
    q: 'Is MedAlly free to try?',
    a: 'Yes. Forever Free includes 10 clinical encounters per month.',
    linkText: 'Compare MedAlly Plans',
    linkHref: '/pricing',
    postLinkText: ' or view our full FAQs.',
  },
];

const AIMedicalCodingPage: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'encounter' | 'preferences'>('encounter');
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    icd10: true,
    cpt: true,
    icd11: false,
    drg: false,
    hcpcs: true,
    modifiers: true,
  });
  const [isValidated, setIsValidated] = useState(false);

  const togglePreference = (id: string) => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout>
      <SEO
        title="AI Medical Coding Software for Physicians | MedAlly"
        description="See how MedAlly supports AI medical coding with configurable coding systems, encounter-linked coding information, physician review, and workflow handoff."
        url="https://www.medally.ai/ai-medical-coding"
        structuredData={structuredData}
      />

      <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
        {/* =========================================================================
            SECTION 1: HERO
            ========================================================================= */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-border">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-teal-500/10 dark:bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl space-y-8 text-left">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                  <Tag className="w-3.5 h-3.5" />
                  AI MEDICAL CODING
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-editorial leading-[1.15] mb-6">
                  AI Medical Coding for Physicians — <span className="gradient-text">Review Coding in Clinical Context</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  AI medical coding can help turn clinical documentation into coding information that is easier to review in the context of the patient encounter.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mt-4">
                  MedAlly keeps coding information connected to the clinical note, supports configurable coding systems, and keeps physician review and validation at the center of the workflow.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.1}>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                      to="/how-it-works"
                      className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all duration-300 text-center"
                    >
                      See How MedAlly Works
                    </Link>
                  </div>
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                    Forever Free includes <strong>10 encounters per month</strong>.
                  </p>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <div className="inline-flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-medium text-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    Physician-validated workflow
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    ICD-10, CPT &amp; 4 additional systems
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    SOAP encounter alignment
                  </span>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: EDUCATIONAL DEFINITION & CORE WORKFLOW
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left: Definition & Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                    <BookOpen className="w-3.5 h-3.5" />
                    Educational Definition
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-4">
                    What Is AI Medical Coding?
                  </h2>
                </MotionReveal>

                <MotionReveal delay={0.1}>
                  <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                    <p className="text-foreground font-medium text-lg sm:text-xl">
                      <strong>AI medical coding</strong> is the use of artificial intelligence to help identify, organize, or prepare medical coding information from clinical documentation and other relevant encounter context.
                    </p>
                    <p>
                      The exact behavior varies by product. Some medical coding AI tools focus on code search or suggestions. Others are designed around coding workflow, automation, auditing, or revenue-cycle processes.
                    </p>
                  </div>
                </MotionReveal>

                <MotionReveal delay={0.2}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-background border border-border shadow-sm space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      The Core Workflow Question
                    </h3>
                    <p className="text-base text-foreground font-light leading-relaxed">
                      The important question is not simply whether a product uses AI. It is <strong>what information the system prepares, what a clinician or coding professional must review, and what happens before coding information is used downstream</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed border-t border-border pt-3">
                      For MedAlly, the coding workflow is review-oriented: MedAlly prepares <strong>ICD-10/CPT coding information around the encounter for review</strong>, and the physician remains responsible for validating information before use.
                    </p>
                  </div>
                </MotionReveal>
              </div>

              {/* Right: 4 Pillar Cards */}
              <div className="lg:col-span-6">
                <MotionReveal delay={0.2}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <FileCode2 className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Code Search &amp; Assistance</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Assists with identifying appropriate diagnostic or procedural codes directly from unstructured clinical notes.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Physician Validation</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Keeps clinical judgment at the center, allowing clinicians to verify that coding accurately reflects documented care.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <Sliders className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Configurable Preferences</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Supports ICD-10, ICD-11, DRG, CPT, HCPCS, and Modifier codes tailored to practice and specialty requirements.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between shadow-sm">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <GitBranch className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground">Workflow Handoff</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Moves validated clinical documentation and coding context into EHR and practice systems (deployment-dependent).
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: INTERACTIVE ENCOUNTER & PREFERENCES SUITE
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Sliders className="w-3.5 h-3.5" />
                Verified Encounter Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                MedAlly Coding Output and Coding Preferences
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                MedAlly supports <strong>ICD-10, ICD-11, DRG Codes, CPT Codes, HCPCS Codes, and Modifier Codes</strong> as configurable coding systems for documentation and billing.
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed mt-3">
                Within an encounter, coding information stays connected to the clinical note. An <strong>ICD-10 code can appear inline within the note as a labeled code element</strong>, so the physician can review coding information in the same clinical context as the encounter narrative.
              </p>
            </MotionReveal>

            {/* Interactive Workspace Card */}
            <div className="max-w-5xl mx-auto">
              <MotionReveal delay={0.2}>
                <div className="glass-obsidian rounded-3xl border border-border shadow-2xl overflow-hidden">
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between border-b border-border/60 bg-muted/30 px-6 py-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                        <FileCode2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-foreground block">MedAlly Coding &amp; Review Suite</span>
                        <span className="text-[10px] text-muted-foreground font-mono">Encounter #MA-8920 &middot; EHR Ready</span>
                      </div>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex rounded-xl bg-background/80 border border-border/80 p-1 text-xs font-bold">
                      <button
                        onClick={() => setActiveTab('encounter')}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          activeTab === 'encounter'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Encounter &amp; Clinical Note View
                      </button>
                      <button
                        onClick={() => setActiveTab('preferences')}
                        className={`px-4 py-2 rounded-lg transition-all ${
                          activeTab === 'preferences'
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Coding Preferences Settings
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Encounter View */}
                  {activeTab === 'encounter' && (
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border pb-6">
                        <div className="rounded-2xl border border-border/80 bg-muted/20 p-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Patient Information</span>
                          <p className="mt-1 text-sm font-bold text-foreground">Eleanor Vance, 42F</p>
                          <p className="text-xs text-muted-foreground font-light">DOB: 11/14/1981 &middot; MRN: #89204</p>
                        </div>
                        <div className="rounded-2xl border border-border/80 bg-muted/20 p-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Lab &amp; Diagnostic Findings</span>
                          <p className="mt-1 text-sm font-bold text-foreground">Serum IgE: Elevated (210 kU/L)</p>
                          <p className="text-xs text-muted-foreground font-light">Skin prick: Positive for dust mite allergens</p>
                        </div>
                        <div className="rounded-2xl border border-border/80 bg-muted/20 p-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Encounter Status</span>
                          <div className="mt-1 flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                              isValidated
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                            }`}>
                              {isValidated ? <Check className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                              {isValidated ? 'Physician Validated' : 'Ready for Physician Review'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Clinical Note Narrative with Inline Labeled Codes */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                            <FileText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                            Clinical Note &middot; Assessment &amp; Plan
                          </h3>
                          <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold">
                            Inline Code Embeddings Active
                          </span>
                        </div>

                        <div className="rounded-2xl border border-border bg-background p-6 text-sm text-foreground space-y-4 leading-relaxed font-light">
                          <div>
                            <p className="font-bold text-foreground text-xs uppercase tracking-wide text-muted-foreground mb-1">Assessment:</p>
                            <p className="text-foreground font-medium">
                              Patient presents with a 4-week history of worsening pruritic, erythematous, eczematous patches on flexural surfaces of both upper extremities, consistent with Atopic Dermatitis.
                            </p>
                            
                            {/* Inline ICD-10 element */}
                            <div className="mt-3 inline-flex items-center gap-2.5 rounded-xl border border-teal-500/40 bg-teal-500/10 px-3.5 py-2 text-xs font-mono font-bold text-teal-700 dark:text-teal-300 shadow-sm">
                              <Tag className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                              <span>ICD-10: L20.9</span>
                              <span className="text-[11px] text-teal-600/80 dark:text-teal-400/80 font-sans font-normal">(Atopic dermatitis, unspecified)</span>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border/60">
                            <p className="font-bold text-foreground text-xs uppercase tracking-wide text-muted-foreground mb-1">Treatment Plan:</p>
                            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground font-light">
                              <li>Prescribed Triamcinolone acetonide 0.1% topical ointment BID for 14 days to active lesions.</li>
                              <li>Emollient barrier cream applied liberally twice daily post-bathing.</li>
                              <li>Re-evaluate in 4 weeks if no significant resolution of pruritus.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Review Controls Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                        <div className="text-xs text-muted-foreground font-light flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                          <span>Physician reviews narrative &amp; inline codes prior to workflow handoff.</span>
                        </div>
                        <button
                          onClick={() => setIsValidated(!isValidated)}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md ${
                            isValidated
                              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          }`}
                        >
                          {isValidated ? (
                            <>
                              <Check className="h-3.5 w-3.5" /> Approved &amp; Validated (Click to Reset)
                            </>
                          ) : (
                            <>
                              <CheckSquare className="h-3.5 w-3.5" /> Validate &amp; Approve Coding
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Preferences View */}
                  {activeTab === 'preferences' && (
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="border-b border-border pb-4">
                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                          <Settings2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                          Medical Coding Preferences
                        </h3>
                        <p className="text-sm text-muted-foreground font-light mt-1">
                          Configure which coding systems MedAlly prepares for physician review. Enabled toggles reflect your practice configuration, not capability limits.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {codingSystems.map((sys) => {
                          const isEnabled = preferences[sys.id] ?? false;
                          return (
                            <div
                              key={sys.id}
                              onClick={() => togglePreference(sys.id)}
                              className={`flex items-start justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                                isEnabled
                                  ? 'border-teal-500/40 bg-teal-500/5 dark:bg-teal-500/10'
                                  : 'border-border bg-muted/20 hover:border-border/80'
                              }`}
                            >
                              <div className="space-y-1 pr-3">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-foreground">{sys.name}</span>
                                  <span className="text-[10px] font-mono rounded-md bg-muted px-2 py-0.5 text-muted-foreground font-semibold">
                                    {sys.standard}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground font-light">{sys.desc}</p>
                              </div>
                              <div
                                className={`h-6 w-11 rounded-full p-0.5 transition-colors relative flex items-center ${
                                  isEnabled ? 'bg-teal-600' : 'bg-muted-foreground/30'
                                }`}
                              >
                                <div
                                  className={`h-5 w-5 rounded-full bg-white shadow-md transform transition-transform ${
                                    isEnabled ? 'translate-x-5' : 'translate-x-0'
                                  }`}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="rounded-2xl border border-border/80 bg-muted/20 p-4 text-xs text-muted-foreground font-light">
                        <strong>Note:</strong> All six coding systems (ICD-10, ICD-11, DRG, CPT, HCPCS, and Modifiers) are fully supported across MedAlly encounters.
                      </div>
                    </div>
                  )}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: CODE SET FOUNDATIONS (ICD-10-CM vs CPT)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <BookOpen className="w-3.5 h-3.5" />
                  Code-Set Foundations
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial">
                  ICD-10-CM and CPT: What Do the Code Sets Represent?
                </h2>
              </MotionReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MotionReveal delay={0.1}>
                <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-background flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Diagnosis Classification</span>
                      <span className="text-[11px] font-bold text-muted-foreground">CDC / NCHS Standard</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">ICD-10-CM</h3>
                    <p className="text-base text-muted-foreground font-light leading-relaxed">
                      In the United States, <strong>ICD-10-CM</strong> is used to code and classify medical diagnoses, clinical signs, symptoms, and health conditions. The U.S. Centers for Disease Control and Prevention (CDC) maintains the clinical modification and official coding guidelines for this standard.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border mt-6">
                    <a
                      href="https://www.cdc.gov/nchs/icd/icd-10-cm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                    >
                      CDC ICD-10-CM Overview
                      <ExternalLink className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-background flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Procedure &amp; Service Reporting</span>
                      <span className="text-[11px] font-bold text-muted-foreground">AMA Standard</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">CPT (Current Procedural Terminology)</h3>
                    <p className="text-base text-muted-foreground font-light leading-relaxed">
                      <strong>CPT</strong> is the American Medical Association&apos;s code set for reporting medical services, surgical procedures, diagnostic tests, and evaluation &amp; management (E/M) provided by physicians and qualified healthcare professionals.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border mt-6">
                    <a
                      href="https://www.ama-assn.org/practice-management/cpt/cpt-code-set-basics-and-resources"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                    >
                      AMA CPT Code-Set Overview
                      <ExternalLink className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.3}>
              <div className="mt-8 p-6 rounded-2xl border border-teal-500/20 bg-teal-500/5 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                MedAlly supports ICD-10 and CPT within its broader set of configurable coding preferences. Coding information remains part of a <strong>physician-review workflow</strong> before it is used downstream.
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: 5-STEP REVIEW-ASSISTED OPERATING MODEL
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <MotionReveal className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                <Layers className="w-3.5 h-3.5" />
                Operating Models
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                How Can AI Medical Coding Work? Review-Assisted and Autonomous Models
              </h2>
              <div className="space-y-3 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  AI medical coding products do not all use the same operating model.
                </p>
                <p>
                  Some systems use a <strong>review-assisted workflow</strong>, where AI prepares or suggests coding information and a clinician or coding professional validates it before use. Other systems use <strong>autonomous coding for qualifying encounters</strong>, while routing encounters that do not meet automation criteria—or that require quality review—to human coders.
                </p>
                <p className="text-foreground font-medium pt-2">
                  MedAlly uses a review-assisted coding workflow structured in five connected steps:
                </p>
              </div>
            </MotionReveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {workflowSteps.map((stepItem, index) => (
                <MotionReveal key={stepItem.step} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-muted/10 border border-border h-full flex flex-col justify-between space-y-4 shadow-sm">
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold text-sm flex items-center justify-center border border-teal-500/20 font-mono">
                        {stepItem.step}
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {stepItem.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>

                    {stepItem.link && (
                      <div className="pt-3 border-t border-border space-y-2">
                        <Link
                          to={stepItem.link}
                          className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                        >
                          {stepItem.linkText}
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        {stepItem.secondaryLink && (
                          <div>
                            <Link
                              to={stepItem.secondaryLink}
                              className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group"
                            >
                              {stepItem.secondaryLinkText}
                              <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: CATEGORY COMPARISON TABLE
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <Search className="w-3.5 h-3.5" />
                  Terminology Clarified
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-4">
                  AI Medical Coding vs. Automated Medical Coding vs. Medical Coding Software
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  These terms overlap, but they do not always describe the same product behavior. A vendor should be able to show exactly where AI is used and where human review remains part of the process.
                </p>
              </MotionReveal>
            </div>

            <div className="mt-10">
              <MotionReveal delay={0.2}>
                <div className="rounded-[2rem] border border-border bg-background shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <th className="p-5 sm:p-6 w-1/4 sm:w-1/5">Term</th>
                        <th className="p-5 sm:p-6 w-2/5">What it usually describes</th>
                        <th className="p-5 sm:p-6 w-2/5">What to confirm</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm font-light">
                      {categoryComparisonTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/20 transition-colors">
                          <td className="p-5 sm:p-6 font-bold text-foreground align-top">
                            {row.term}
                          </td>
                          <td className="p-5 sm:p-6 text-muted-foreground leading-relaxed align-top">
                            {row.describes}
                          </td>
                          <td className="p-5 sm:p-6 text-foreground font-medium leading-relaxed align-top">
                            {row.confirm}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: BUYER EVALUATION GUIDE TABLE
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <CheckSquare className="w-3.5 h-3.5" />
                  Buyer Evaluation Guide
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-4">
                  What Should Practices Evaluate in AI Medical Coding Software?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  A coding product should be evaluated on the workflow it supports, not just on the phrase &ldquo;AI-powered.&rdquo; Do not assume that &ldquo;automated coding&rdquo; means every part of coding, billing, or claims workflow is completed without review.
                </p>
              </MotionReveal>
            </div>

            <div className="mt-10">
              <MotionReveal delay={0.2}>
                <div className="rounded-[2rem] border border-border bg-background shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <th className="p-5 sm:p-6 w-1/4 sm:w-1/5">Evaluation Area</th>
                        <th className="p-5 sm:p-6 w-2/5">What to ask the vendor to show</th>
                        <th className="p-5 sm:p-6 w-2/5">MedAlly&apos;s Physician-Centric Fit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-sm font-light">
                      {buyerEvaluationCriteria.map((crit, idx) => (
                        <tr key={idx} className="hover:bg-muted/20 transition-colors">
                          <td className="p-5 sm:p-6 font-bold text-foreground align-top">
                            {crit.area}
                          </td>
                          <td className="p-5 sm:p-6 text-muted-foreground leading-relaxed align-top">
                            {crit.ask}
                          </td>
                          <td className="p-5 sm:p-6 text-teal-700 dark:text-teal-300 font-medium leading-relaxed bg-teal-500/5 align-top">
                            {crit.medallyApproach}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: WHERE MEDALLY FITS & CATEGORY CONTEXT
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: MedAlly Fit */}
              <div className="lg:col-span-6 space-y-6">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                    <Activity className="w-3.5 h-3.5" />
                    Product Positioning
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-4">
                    Where Does MedAlly Fit in AI Medical Coding?
                  </h2>
                </MotionReveal>
                
                <MotionReveal delay={0.1}>
                  <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                    <p>
                      MedAlly keeps coding review connected to the patient encounter instead of treating coding as an isolated output.
                    </p>
                    <p>
                      The same encounter can produce <strong>SOAP-style clinical documentation, coding information, and billing-related information</strong> for physician review. The physician reviews the coding information alongside the documentation, validates it, and decides what is ready to move forward.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-2">
                    <Link
                      to="/clinical-documentation-ai"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                    >
                      Explore AI Clinical Documentation
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/features"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      Explore MedAlly Features
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </MotionReveal>
              </div>

              {/* Right Column: Standalone & Workflow Cards */}
              <div className="lg:col-span-6 space-y-6">
                <MotionReveal delay={0.2}>
                  <div className="p-8 sm:p-10 rounded-[2.5rem] border border-border bg-background shadow-sm space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Scope Alignment
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-editorial mb-3">
                      When Might a Standalone Coding Platform Be a Better Fit?
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                      MedAlly&apos;s coding capability is designed around physician review within the encounter workflow.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                      Organizations primarily seeking an enterprise encoder, autonomous coding engine, claims-management platform, or large-scale revenue-cycle coding system should evaluate products built specifically for those requirements. The category comparison above should be used to confirm scope rather than assuming every AI medical coding product performs the same functions.
                    </p>
                  </div>
                </MotionReveal>

                <MotionReveal delay={0.3}>
                  <div className="p-8 sm:p-10 rounded-[2.5rem] border border-border bg-background shadow-sm space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                      <GitBranch className="w-3.5 h-3.5" />
                      Workflow Integration
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-editorial mb-3">
                      Connection to Clinical Workflow Software
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                      Medical coding is one part of a broader clinical and administrative workflow involving documentation, clinician review, follow-up, task coordination, and downstream handoffs.
                    </p>
                    <div className="pt-3">
                      <Link
                        to="/clinical-workflow-software"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                      >
                        Explore Clinical Workflow Software Guide
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </MotionReveal>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: FOREVER FREE CALLOUT
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <MotionReveal>
              <div className="rounded-[2.5rem] border border-teal-500/30 bg-gradient-to-br from-teal-500/10 via-card to-background p-8 sm:p-14 text-center shadow-sm space-y-6">
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  FOREVER FREE TIER
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial">
                  Can Physicians Try MedAlly Before Choosing a Paid Plan?
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                  Yes. <strong>Forever Free includes 10 clinical encounters every month.</strong> One MedAlly session counts as one encounter, and the free allowance renews monthly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
                    to="/pricing"
                    className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all duration-300 text-center"
                  >
                    Compare MedAlly Plans
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: FAQS
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-muted/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <MotionReveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                  <HelpCircle className="w-3.5 h-3.5" />
                  Coding &amp; Review FAQ
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-4">
                  Frequently Asked Questions About AI Medical Coding
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground font-light">
                  Clear answers on coding capabilities, physician validation, and workflow integration.
                </p>
              </MotionReveal>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <MotionReveal key={index} delay={index * 0.04}>
                    <div className="rounded-2xl border border-border bg-background overflow-hidden transition-all shadow-sm">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between p-6 text-left text-base sm:text-lg font-bold text-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 text-muted-foreground ${
                            isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted-foreground font-light leading-relaxed border-t border-border/40">
                          <p>{faq.a}</p>
                          {faq.linkHref && faq.linkText && (
                            <p className="mt-3">
                              <Link
                                to={faq.linkHref}
                                className="text-teal-600 dark:text-teal-400 font-bold hover:underline"
                              >
                                {faq.linkText}
                              </Link>
                              {faq.postLinkText}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

            <MotionReveal delay={0.2}>
              <div className="mt-12 text-center">
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-muted/60 border border-border text-foreground hover:bg-muted font-bold text-sm transition-all group"
                >
                  View All FAQs
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: FINAL CONVERSION SECTION
            ========================================================================= */}
        <section className="py-24 lg:py-36 bg-background">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Physician-Validated Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight">
                Evaluate the Coding Workflow, Not Just the AI Label
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                The right AI medical coding software should make its workflow clear: what information goes in, what coding information is prepared, who reviews it, and what happens after approval.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                MedAlly keeps ICD-10/CPT coding information connected to the patient encounter, clinical documentation, physician review, and the next workflow step.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
                  to="/pricing"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all duration-300 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <div className="pt-12 border-t border-border flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Clinical AI Platform
                </Link>
                <span>&bull;</span>
                <Link to="/how-it-works" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  How It Works
                </Link>
                <span>&bull;</span>
                <Link to="/features" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Features
                </Link>
                <span>&bull;</span>
                <Link to="/clinical-documentation-ai" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Clinical Documentation AI
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default AIMedicalCodingPage;
