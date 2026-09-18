import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  UserCheck,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Layers,
  BrainCircuit,
  FileCode2,
  Stethoscope,
  Activity,
  FlaskConical,
  HeartPulse,
  CalendarCheck,
  GitMerge,
  Clock
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { MotionReveal } from '@/components/MotionReveal';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.medally.ai/features#webpage',
      url: 'https://www.medally.ai/features',
      name: 'MedAlly Features | Clinical AI Platform for Physicians',
      description:
        'Explore MedAlly features for clinical documentation, decision support, lab synthesis, ICD-10/CPT coding, follow-up, billing, and connected workflows.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.medally.ai/#website',
        name: 'MedAlly',
        url: 'https://www.medally.ai',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.medally.ai/features#breadcrumb',
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
          name: 'Features',
          item: 'https://www.medally.ai/features',
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: 'What are the main MedAlly features?',
    a: 'MedAlly supports AI-assisted clinical documentation, SOAP-style notes, differential and decision-support context, lab synthesis, treatment-planning support, ICD-10/CPT coding and billing context, follow-up tasks, workflow handoffs, and physician review.',
  },
  {
    q: 'Does MedAlly include an AI medical scribe?',
    a: 'Yes. MedAlly listens to the encounter and prepares draft clinical documentation for physician review.',
    linkText: 'AI Medical Scribe',
    linkHref: '/ai-medical-scribe',
    postLinkText: ' for the detailed scribe workflow.',
  },
  {
    q: 'Does MedAlly prepare SOAP-style clinical notes?',
    a: 'Yes. MedAlly prepares SOAP-style clinical documentation from encounter context for physician review and editing.',
  },
  {
    q: 'Does MedAlly support clinical documentation beyond scribing?',
    a: "Yes. The scribe helps prepare the initial encounter-based draft, while MedAlly's broader documentation workflow supports structure, review, approval, and connection to the rest of the encounter workflow.",
    linkText: 'AI Clinical Documentation',
    linkHref: '/clinical-documentation-ai',
    postLinkText: '.',
  },
  {
    q: 'Does MedAlly provide decision-support information?',
    a: 'Yes. MedAlly organizes decision-support context for physician review, including information that can support differential review. Clinical interpretation and final decisions remain with the physician.',
  },
  {
    q: 'Does MedAlly support lab information?',
    a: 'Yes. MedAlly supports lab synthesis so lab-related context can be reviewed alongside other encounter information. Physicians remain responsible for clinical interpretation and decisions.',
  },
  {
    q: 'Does MedAlly support treatment planning?',
    a: 'Yes. MedAlly provides treatment-planning support connected to the encounter context. Treatment decisions remain with the physician.',
  },
  {
    q: 'Does MedAlly support follow-up tasks?',
    a: 'Yes. MedAlly supports follow-up tasks and keeps that work connected to the encounter context so physicians can review next steps alongside other clinical information.',
  },
  {
    q: 'Does MedAlly provide ICD-10 and CPT coding information?',
    a: 'Yes. MedAlly prepares ICD-10/CPT coding context around the encounter for physician review. Coding information should be reviewed and validated before use.',
  },
  {
    q: 'Does MedAlly support billing workflows?',
    a: 'Yes. MedAlly keeps billing-related context connected to the encounter and coding workflow so physicians can review administrative information alongside the clinical documentation.',
  },
  {
    q: 'What happens after the physician approves the work?',
    a: 'After physician review and approval, MedAlly can move approved outputs into the practice and EHR workflow. The exact handoff can vary by deployment.',
  },
  {
    q: 'Is MedAlly free to try?',
    a: "Yes. MedAlly's Forever Free plan includes 10 encounters per month.",
    linkText: 'Pricing',
    linkHref: '/pricing',
    postLinkText: ' for current plan details.',
  },
];

const capabilitiesTable = [
  {
    capability: 'AI medical scribe',
    link: '/ai-medical-scribe',
    prepares: 'Encounter-based draft documentation',
    role: 'Review and edit the draft',
    icon: Stethoscope,
  },
  {
    capability: 'Clinical documentation',
    link: '/clinical-documentation-ai',
    prepares: 'Structured SOAP-style documentation',
    role: 'Validate and approve the note',
    icon: FileText,
  },
  {
    capability: 'Differential / decision support',
    prepares: 'Clinical context for differential review',
    role: 'Interpret and make clinical decisions',
    icon: BrainCircuit,
  },
  {
    capability: 'Lab synthesis',
    prepares: 'Lab-related context connected to the encounter',
    role: 'Review and interpret clinically',
    icon: FlaskConical,
  },
  {
    capability: 'Treatment planning',
    prepares: 'Treatment-planning support connected to encounter context',
    role: 'Decide appropriate care',
    icon: HeartPulse,
  },
  {
    capability: 'Follow-up',
    prepares: 'Follow-up tasks and next-step context',
    role: 'Review and act as appropriate',
    icon: CalendarCheck,
  },
  {
    capability: 'Coding and billing',
    prepares: 'ICD-10/CPT and billing context',
    role: 'Review and validate before use',
    icon: FileCode2,
  },
  {
    capability: 'Workflow handoffs',
    link: '/how-it-works',
    prepares: 'Physician-approved outputs prepared for the next workflow stage',
    role: 'Control what moves forward',
    icon: GitMerge,
  },
];

const FeaturesPage: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'notes' | 'decision' | 'labs' | 'coding'>('notes');

  return (
    <Layout>
      <SEO
        title="MedAlly Features | Clinical AI Platform for Physicians"
        description="Explore MedAlly features for clinical documentation, decision support, lab synthesis, ICD-10/CPT coding, follow-up, billing, and connected workflows."
        url="https://www.medally.ai/features"
        image="/images/medally/clinical-hero.webp"
        imageAlt="MedAlly clinical AI workspace with SOAP-style documentation and ICD-10/CPT coding context for physician review"
        keywords={[
          'clinical AI features',
          'clinical AI platform',
          'clinical documentation AI',
          'physician decision support',
          'medical coding context',
          'lab synthesis AI',
        ]}
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
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    CLINICAL AI FEATURES
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-editorial leading-[1.15] mb-6">
                    MedAlly Clinical AI Features Across the Patient Encounter
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                    MedAlly brings documentation, clinical decision-support context, lab synthesis, treatment-planning support, coding and billing context, follow-up tasks, and workflow handoffs into one connected clinical workflow. Physicians remain responsible for reviewing and approving clinical outputs before they are used.
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
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-border/80 bg-muted/30 text-xs sm:text-sm font-medium text-foreground shadow-sm">
                    <Sparkles className="w-4 h-4 text-teal-500 shrink-0" />
                    <span><strong>AI prepares.</strong> Clinicians review. Clinicians decide.</span>
                  </div>
                </MotionReveal>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5">
                <MotionReveal delay={0.15}>
                  <div className="glass-obsidian rounded-3xl border border-border p-6 sm:p-7 shadow-2xl relative overflow-hidden space-y-5">
                    
                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <Stethoscope className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-foreground block">Connected Clinical Workspace</span>
                          <span className="text-[10px] text-muted-foreground">Encounter #MA-8920</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        Prepared for Review
                      </span>
                    </div>

                    {/* Interactive Feature Tabs */}
                    <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-muted/40 border border-border/60">
                      {[
                        { id: 'notes', label: 'Notes', icon: FileText },
                        { id: 'decision', label: 'Decisions', icon: BrainCircuit },
                        { id: 'labs', label: 'Labs', icon: FlaskConical },
                        { id: 'coding', label: 'Coding', icon: FileCode2 },
                      ].map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as typeof activeTab)}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                              activeTab === tab.id
                                ? 'bg-background text-teal-600 dark:text-teal-400 shadow-sm border border-border/80'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <Icon className="w-3 h-3" />
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab Preview Content */}
                    <div className="p-4 rounded-2xl bg-background/90 border border-border space-y-3 min-h-[190px]">
                      {activeTab === 'notes' && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-foreground flex items-center gap-1.5">
                              <FileText className="w-3.5 h-3.5 text-teal-500" />
                              SOAP-Style Draft
                            </span>
                            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-mono font-semibold">Review State</span>
                          </div>
                          <div className="text-xs font-mono text-muted-foreground p-3 rounded-xl bg-muted/20 border border-border/50 space-y-1">
                            <p><strong className="text-foreground">S:</strong> 62yo M T2DM/HTN review. Med adherence confirmed.</p>
                            <p><strong className="text-foreground">O:</strong> BP 126/80, HR 72. HbA1c 7.1% (prior 7.5%).</p>
                            <p><strong className="text-foreground">A:</strong> T2DM without complications (E11.9); Essential HTN (I10).</p>
                            <p><strong className="text-foreground">P:</strong> Cont. Metformin & Lisinopril. Repeat panel in 6mo.</p>
                          </div>
                        </div>
                      )}

                      {activeTab === 'decision' && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-foreground flex items-center gap-1.5">
                              <BrainCircuit className="w-3.5 h-3.5 text-purple-500" />
                              Decision-Support Context
                            </span>
                            <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">Physician-Led</span>
                          </div>
                          <div className="text-xs text-muted-foreground p-3 rounded-xl bg-muted/20 border border-border/50 space-y-2">
                            <p className="text-foreground font-medium">• Glycemic trend: HbA1c trajectory improving by 0.4% over 6 months.</p>
                            <p className="text-foreground font-medium">• Preventive surveillance: Annual diabetic retinal evaluation due next month.</p>
                            <p className="text-[11px] text-teal-600 dark:text-teal-400">Context organized for clinical differential consideration.</p>
                          </div>
                        </div>
                      )}

                      {activeTab === 'labs' && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-foreground flex items-center gap-1.5">
                              <FlaskConical className="w-3.5 h-3.5 text-blue-500" />
                              Lab Synthesis Context
                            </span>
                            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">Longitudinal</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2.5 rounded-xl bg-muted/20 border border-border/50">
                              <span className="text-[10px] text-muted-foreground block">HbA1c</span>
                              <span className="text-foreground font-bold font-mono">7.1%</span> <span className="text-[10px] text-emerald-600 font-semibold">(-0.4%)</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-muted/20 border border-border/50">
                              <span className="text-[10px] text-muted-foreground block">Serum Creatinine</span>
                              <span className="text-foreground font-bold font-mono">0.9 mg/dL</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-muted/20 border border-border/50">
                              <span className="text-[10px] text-muted-foreground block">eGFR</span>
                              <span className="text-foreground font-bold font-mono">&gt;60 mL/min</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-muted/20 border border-border/50">
                              <span className="text-[10px] text-muted-foreground block">Urine Alb/Cr</span>
                              <span className="text-foreground font-bold font-mono">&lt;30 mg/g</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'coding' && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-foreground flex items-center gap-1.5">
                              <FileCode2 className="w-3.5 h-3.5 text-teal-500" />
                              Prepared Coding Context
                            </span>
                            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">ICD-10 & CPT</span>
                          </div>
                          <div className="space-y-1.5 text-xs">
                            <div className="p-2 rounded-xl bg-teal-500/5 border border-teal-500/20 flex justify-between items-center">
                              <span className="font-mono font-bold text-teal-700 dark:text-teal-300">E11.9</span>
                              <span className="text-[11px] text-muted-foreground">Type 2 DM without complications</span>
                            </div>
                            <div className="p-2 rounded-xl bg-teal-500/5 border border-teal-500/20 flex justify-between items-center">
                              <span className="font-mono font-bold text-teal-700 dark:text-teal-300">I10</span>
                              <span className="text-[11px] text-muted-foreground">Essential (primary) hypertension</span>
                            </div>
                            <div className="p-2 rounded-xl bg-blue-500/5 border border-blue-500/20 flex justify-between items-center">
                              <span className="font-mono font-bold text-blue-700 dark:text-blue-300">99214</span>
                              <span className="text-[11px] text-muted-foreground">Outpatient follow-up, moderate MDM</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer / Review verification indicator */}
                    <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60">
                      <span className="flex items-center gap-1.5 text-foreground font-medium">
                        <UserCheck className="w-4 h-4 text-teal-500" />
                        Physician-Controlled Validation
                      </span>
                      <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">EHR Workflow Ready</span>
                    </div>

                  </div>
                </MotionReveal>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: DIRECT PRODUCT ANSWER (AEO / GEO)
            ========================================================================= */}
        <section className="py-20 lg:py-28 border-b border-border bg-muted/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                <BrainCircuit className="w-3.5 h-3.5" />
                Encounter Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-6">
                One Encounter Context, Multiple Clinical Tasks
              </h2>
              <div className="text-lg sm:text-xl text-foreground font-light leading-relaxed space-y-5 text-left p-8 sm:p-10 rounded-3xl bg-background border border-border shadow-sm">
                <p>
                  A patient encounter creates more work than a note. Documentation, clinical review, lab context, treatment planning, coding, billing, follow-up, and workflow handoffs can all depend on the same encounter information.
                </p>
                <p className="text-muted-foreground">
                  MedAlly keeps those tasks connected so physicians can review AI-prepared work in context rather than treating each step as a separate workflow.
                </p>
                
                <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <p className="text-base font-bold text-foreground">
                    AI prepares. Clinicians review. Clinicians decide.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: DEEP FEATURE CAPABILITIES (8 CORE MODULES)
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Layers className="w-3.5 h-3.5" />
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Comprehensive Clinical Capabilities Connected to the Visit
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Explore how MedAlly supports each phase of clinical care while keeping physician review at the center.
              </p>
            </MotionReveal>

            <div className="space-y-16">
              
              {/* Module 1: Documentation & Clinical Notes */}
              <MotionReveal>
                <div className="p-8 sm:p-12 rounded-[2.5rem] border border-border bg-muted/10 shadow-sm">
                  <div className="max-w-3xl mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                      <FileText className="w-3.5 h-3.5" />
                      Capability 01
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial mb-4">
                      Documentation and Clinical Notes
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                      MedAlly helps turn encounter context into structured documentation that physicians can review, edit, validate, and approve.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">AI Medical Scribe</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                          MedAlly listens to the patient encounter and prepares an initial clinical draft for physician review, reducing the need to reconstruct the visit from a blank page afterward.
                        </p>
                      </div>
                      <Link
                        to="/ai-medical-scribe"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group pt-2"
                      >
                        Explore MedAlly AI Medical Scribe
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">SOAP-Style Documentation</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          MedAlly prepares <strong>SOAP-style clinical documentation</strong>, organizing encounter information into a familiar clinical structure for physician review.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">Physician Review & Editing</h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                          AI-prepared notes remain reviewable. Physicians can edit, validate, and approve documentation before it becomes part of the clinical workflow.
                        </p>
                      </div>
                      <Link
                        to="/clinical-documentation-ai"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group pt-2"
                      >
                        Explore AI Clinical Documentation
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Module 2 & 3: Differential Review & Lab Synthesis */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Module 2 */}
                <MotionReveal className="h-full">
                  <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-muted/10 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">
                        <BrainCircuit className="w-3.5 h-3.5" />
                        Capability 02
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">
                        Differential Review and Decision-Support Context
                      </h3>
                      <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                        <p>
                          MedAlly organizes clinical context that can support differential review and physician decision-making after the encounter.
                        </p>
                        <p className="text-foreground font-medium">
                          The system prepares supporting information for clinician review while leaving interpretation and final clinical decisions with the physician. MedAlly is not positioned as an autonomous diagnostic system.
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>

                {/* Module 3 */}
                <MotionReveal delay={0.1} className="h-full">
                  <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-muted/10 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                        <FlaskConical className="w-3.5 h-3.5" />
                        Capability 03
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">
                        Lab Synthesis and Clinical Context
                      </h3>
                      <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                        <p>
                          MedAlly supports <strong>lab synthesis</strong> so lab-related information can be considered alongside the broader encounter context rather than reviewed in isolation.
                        </p>
                        <p className="text-foreground font-medium">
                          The physician remains responsible for interpreting the clinical significance of laboratory information and deciding what action, if any, is appropriate.
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>

              </div>

              {/* Module 4 & 5: Treatment Planning & Follow-Up Tasks */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Module 4 */}
                <MotionReveal className="h-full">
                  <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-muted/10 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4">
                        <HeartPulse className="w-3.5 h-3.5" />
                        Capability 04
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">
                        Treatment-Planning Support
                      </h3>
                      <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                        <p>
                          MedAlly keeps treatment-planning support connected to the encounter and the information already prepared during the visit.
                        </p>
                        <p className="text-foreground font-medium">
                          This gives the physician relevant context to review when considering next steps while keeping treatment decisions under clinician control.
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>

                {/* Module 5 */}
                <MotionReveal delay={0.1} className="h-full">
                  <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-muted/10 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
                        <CalendarCheck className="w-3.5 h-3.5" />
                        Capability 05
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">
                        Follow-Up Tasks
                      </h3>
                      <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                        <p>
                          MedAlly supports follow-up work generated from the patient encounter, helping keep next-step tasks connected to the same clinical context.
                        </p>
                        <p className="text-foreground font-medium">
                          Physicians can review follow-up information alongside the documentation and other encounter-related work rather than relying on disconnected outputs.
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionReveal>

              </div>

              {/* Module 6: ICD-10/CPT Coding and Billing Context */}
              <MotionReveal>
                <div className="p-8 sm:p-12 rounded-[2.5rem] border border-border bg-muted/10 shadow-sm">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                      <FileCode2 className="w-3.5 h-3.5" />
                      Capability 06
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial mb-4">
                      ICD-10/CPT Coding and Billing Context
                    </h3>
                    <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                      <p>
                        MedAlly prepares <strong>ICD-10/CPT coding context</strong> around the encounter for physician review.
                      </p>
                      <p>
                        Coding and billing context stays connected to the documentation that produced it, giving the physician a clearer path for reviewing administrative work related to the same visit.
                      </p>
                      <p className="text-foreground font-medium pt-2">
                        Coding information should be reviewed and validated before use.
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>

              {/* Module 7 & 8: Workflow Handoffs & Physician Control */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Module 7 */}
                <MotionReveal className="h-full">
                  <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-muted/10 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                        <GitMerge className="w-3.5 h-3.5" />
                        Capability 07
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">
                        Workflow Handoffs and EHR Workflow
                      </h3>
                      <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed mb-6">
                        <p>
                          After physician review and approval, MedAlly can move approved outputs into the broader practice and EHR workflow.
                        </p>
                        <p>
                          This keeps documentation, clinical context, follow-up work, and billing-related information connected as the encounter moves to its next workflow stage. The exact handoff can vary by deployment.
                        </p>
                      </div>
                    </div>
                    <div>
                      <Link
                        to="/how-it-works"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                      >
                        See the Full MedAlly Workflow
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </MotionReveal>

                {/* Module 8 */}
                <MotionReveal delay={0.1} className="h-full">
                  <div className="h-full p-8 sm:p-10 rounded-[2.5rem] border border-teal-500/30 bg-teal-500/5 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
                        <UserCheck className="w-3.5 h-3.5" />
                        Capability 08
                      </div>
                      <h3 className="text-2xl font-bold text-foreground text-editorial mb-4">
                        Physician Review Is the Control Point
                      </h3>
                      <div className="space-y-3 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                        <p>
                          Across MedAlly's feature set, physician review remains the control point.
                        </p>
                        <p>
                          Before AI-prepared work moves forward, the clinician reviews the relevant documentation and context, makes corrections where needed, and decides whether the output is ready for use.
                        </p>
                        <p className="text-foreground font-medium pt-1">
                          MedAlly supports the clinical workflow. It does not replace the physician's responsibility for the final clinical record or clinical judgment.
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
            SECTION 4: FEATURES AT A GLANCE (RESPONSIVE TABLE)
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-muted/10">
          <div className="max-w-6xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Activity className="w-3.5 h-3.5" />
                Feature Matrix
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                MedAlly Features at a Glance
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A structured overview of what MedAlly prepares across the clinical encounter and the essential role of physician oversight.
              </p>
            </MotionReveal>

            {/* Responsive Table */}
            <MotionReveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-background shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                        <th className="p-5 sm:p-6 font-bold w-1/4">Capability</th>
                        <th className="p-5 sm:p-6 font-bold w-1/2 text-teal-600 dark:text-teal-400">What MedAlly Prepares or Supports</th>
                        <th className="p-5 sm:p-6 font-bold w-1/4 text-foreground">Physician Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-xs sm:text-sm">
                      {capabilitiesTable.map((item) => {
                        const Icon = item.icon;
                        return (
                          <tr key={item.capability} className="hover:bg-muted/10 transition-colors">
                            <td className="p-5 sm:p-6 font-bold text-foreground">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span>{item.capability}</span>
                                  {item.link && (
                                    <div className="mt-0.5">
                                      <Link
                                        to={item.link}
                                        className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 underline underline-offset-2 hover:text-foreground inline-flex items-center"
                                      >
                                        Explore <ArrowRight className="w-2.5 h-2.5 ml-0.5" />
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="p-5 sm:p-6 text-muted-foreground font-light leading-relaxed">
                              {item.prepares}
                            </td>
                            <td className="p-5 sm:p-6 text-foreground font-medium">
                              {item.role}
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
            SECTION 5: WHY CONNECTED FEATURES MATTER
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-5xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Platform Continuity
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Why Connected Features Matter
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="p-8 sm:p-12 rounded-3xl border border-border bg-muted/20 space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                <p className="text-foreground font-normal">
                  A point solution can help with one narrow task. MedAlly is designed to connect multiple parts of the physician's work to the same patient encounter — from documentation and clinical context through coding, follow-up, and workflow handoffs.
                </p>
                <p>
                  That continuity is part of the broader{' '}
                  <Link
                    to="/"
                    className="text-teal-600 dark:text-teal-400 font-bold underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    MedAlly Clinical AI Platform
                  </Link>{' '}
                  approach.
                </p>

                <p>
                  For the practical workflow, see{' '}
                  <Link
                    to="/how-it-works"
                    className="text-teal-600 dark:text-teal-400 font-bold underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    How MedAlly Works
                  </Link>
                  . For the expected operational value, see{' '}
                  <Link
                    to="/benefits"
                    className="text-teal-600 dark:text-teal-400 font-bold underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    MedAlly Benefits
                  </Link>
                  .
                </p>

                <div className="pt-4 border-t border-border/60 flex flex-wrap gap-4">
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                  >
                    How MedAlly Works
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-border">•</span>
                  <Link
                    to="/benefits"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                  >
                    Explore Benefits
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 6: FREE PLAN CONVERSION
            ========================================================================= */}
        <section className="py-24 lg:py-32 border-b border-border bg-muted/10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Forever Free Plan
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Try MedAlly Free
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-10">
                <p>
                  MedAlly's <strong>Forever Free</strong> plan includes <strong>10 encounters per month</strong>, giving physicians a way to experience the workflow before deciding what they need beyond the free allowance.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all text-center"
              >
                View Pricing
              </Link>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: FAQ ACCORDION (12 APPROVED ITEMS)
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-4xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Activity className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Frequently Asked Questions About MedAlly Features
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Detailed answers regarding documentation workflows, clinical review mechanisms, coding context, and plan details.
              </p>
            </MotionReveal>

            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <MotionReveal key={faq.q} delay={index * 0.03}>
                    <div className="rounded-2xl border border-border bg-background/80 overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-foreground text-base sm:text-lg hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h3 className="font-editorial text-base sm:text-lg font-bold">{faq.q}</h3>
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
                            {faq.a}{' '}
                            {faq.linkHref && (
                              <Link
                                to={faq.linkHref}
                                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group ml-1"
                              >
                                {faq.linkText}
                                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            )}
                            {faq.postLinkText || ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>

            <MotionReveal delay={0.3} className="text-center">
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
            SECTION 8: BOTTOM CONVERSION CTA
            ========================================================================= */}
        <section className="py-24 lg:py-36 relative overflow-hidden bg-muted/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,183,181,0.08),transparent_60%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <GitMerge className="w-3.5 h-3.5" />
                Unified Clinical Flow
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Bring the Patient Encounter Into One Connected Workflow
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Use MedAlly to connect documentation, clinical context, lab synthesis, treatment support, coding, billing, follow-up, and workflow handoffs while keeping physician review at the center.
              </p>

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
                  to="/how-it-works"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all text-center"
                >
                  See How MedAlly Works
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>

      </main>
    </Layout>
  );
};

export default FeaturesPage;
