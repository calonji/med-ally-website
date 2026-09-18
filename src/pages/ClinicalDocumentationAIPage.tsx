import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Layers,
  Database,
  BrainCircuit,
  FileCode2,
  Edit3,
  Check,
  RotateCcw,
  ShieldCheck,
  Stethoscope,
  ClipboardList,
  Tag,
  Clock,
  Activity,
  CheckSquare
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { MotionReveal } from '@/components/MotionReveal';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.medally.ai/clinical-documentation-ai#webpage',
      url: 'https://www.medally.ai/clinical-documentation-ai',
      name: 'AI Clinical Documentation for Physicians | MedAlly',
      description:
        'MedAlly helps physicians turn encounter context into structured, reviewable clinical documentation with SOAP-style notes and ICD-10/CPT coding context.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.medally.ai/#website',
        name: 'MedAlly',
        url: 'https://www.medally.ai',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.medally.ai/clinical-documentation-ai#breadcrumb',
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
          name: 'AI Clinical Documentation',
          item: 'https://www.medally.ai/clinical-documentation-ai',
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: 'What is AI clinical documentation?',
    a: 'AI clinical documentation uses artificial intelligence to help create, organize, and structure clinical notes from patient-encounter information. MedAlly prepares documentation for physician review rather than treating AI output as a final clinical record.',
  },
  {
    q: 'How does MedAlly help with clinical notes?',
    a: 'MedAlly organizes encounter context and prepares structured clinical documentation, including SOAP-style documentation. Physicians review, edit, validate, and approve the work.',
  },
  {
    q: 'Is AI clinical documentation the same as an AI medical scribe?',
    a: 'Not exactly. An AI medical scribe primarily describes capturing a clinical encounter and drafting a note from the conversation. AI clinical documentation is the broader process of creating, structuring, reviewing, approving, and moving documentation through the clinical workflow.',
    linkText: 'MedAlly AI Medical Scribe',
    linkHref: '/ai-medical-scribe',
    postLinkText: ' for the scribe-specific workflow.',
  },
  {
    q: 'Does MedAlly generate SOAP notes?',
    a: 'Yes. MedAlly prepares SOAP-style clinical documentation from encounter context for physician review. The clinician should review and edit the draft before approval.',
  },
  {
    q: 'Can physicians edit AI-generated clinical documentation?',
    a: 'Yes. MedAlly is designed around physician review. The clinician reviews and edits AI-prepared work as needed before approving it.',
  },
  {
    q: 'Does MedAlly provide coding information with the documentation?',
    a: 'MedAlly prepares ICD-10/CPT coding context around the encounter for review. Coding output should be reviewed and validated before use.',
  },
  {
    q: 'What happens after a physician approves the documentation?',
    a: 'After review and approval, the documentation is ready for the next step in the practice workflow. The exact handoff depends on the MedAlly deployment. This page does not claim a specific EHR transfer method or integration unless separately verified for that deployment.',
  },
  {
    q: 'Is MedAlly free to try?',
    a: "Yes. MedAlly's Forever Free plan includes 10 encounters per month.",
    linkText: 'Pricing',
    linkHref: '/pricing',
    postLinkText: ' for the current plan details.',
  },
  {
    q: 'Does MedAlly replace physician judgment?',
    a: 'No. MedAlly prepares information for review. Physicians remain responsible for validating clinical documentation, coding context, and clinical decisions before approval or use.',
  },
];

const ClinicalDocumentationAIPage: FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSoapTab, setActiveSoapTab] = useState<'S' | 'O' | 'A' | 'P'>('S');
  const [isEditing, setIsEditing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const [soapData, setSoapData] = useState({
    S: '58-year-old female presents for routine 3-month follow-up of Type 2 Diabetes Mellitus and Essential Hypertension. Patient reports adherence to Metformin 1000mg BID and Lisinopril 20mg daily. Home blood glucose readings log average 130-145 mg/dL. Denies hypoglycemia episodes, chest pain, shortness of breath, visual disturbances, or lower extremity numbness/tingling.',
    O: 'Vital Signs:\n• BP: 128/82 mmHg | HR: 74 bpm | Temp: 98.6°F | SpO2: 99% RA | BMI: 28.4\nLaboratory Findings:\n• HbA1c: 7.2% (previous 7.6% 3 months ago)\n• Serum Creatinine: 0.9 mg/dL | eGFR: >60 mL/min/1.73m² | Urine Albumin/Creatinine: Normal (<30 mg/g)\nPhysical Exam:\n• General: Alert, oriented x3, well-nourished.\n• Cardiovascular: Regular rate and rhythm, normal S1/S2, no murmurs/gallops.\n• Extremities: No peripheral edema. Foot exam reveals intact monofilament sensation (10/10 bilaterally), strong distal pulses.',
    A: '1. Type 2 diabetes mellitus without complications (E11.9) - Improving glycemic control (HbA1c 7.2%, down from 7.6%).\n2. Essential (primary) hypertension (I10) - Well-controlled on current ACE inhibitor therapy.\n3. Routine preventive diabetic surveillance completed - normal renal parameters and intact peripheral sensation.',
    P: '1. Continue Metformin 1000 mg PO BID with meals.\n2. Continue Lisinopril 20 mg PO daily.\n3. Recheck HbA1c, CMP, and lipid panel in 3 months.\n4. Diabetic eye exam reminder provided; patient scheduled with ophthalmology next month.\n5. Follow-up clinic appointment scheduled in 3 months or sooner if acute symptoms arise.',
  });

  const resetSoapDraft = () => {
    setSoapData({
      S: '58-year-old female presents for routine 3-month follow-up of Type 2 Diabetes Mellitus and Essential Hypertension. Patient reports adherence to Metformin 1000mg BID and Lisinopril 20mg daily. Home blood glucose readings log average 130-145 mg/dL. Denies hypoglycemia episodes, chest pain, shortness of breath, visual disturbances, or lower extremity numbness/tingling.',
      O: 'Vital Signs:\n• BP: 128/82 mmHg | HR: 74 bpm | Temp: 98.6°F | SpO2: 99% RA | BMI: 28.4\nLaboratory Findings:\n• HbA1c: 7.2% (previous 7.6% 3 months ago)\n• Serum Creatinine: 0.9 mg/dL | eGFR: >60 mL/min/1.73m² | Urine Albumin/Creatinine: Normal (<30 mg/g)\nPhysical Exam:\n• General: Alert, oriented x3, well-nourished.\n• Cardiovascular: Regular rate and rhythm, normal S1/S2, no murmurs/gallops.\n• Extremities: No peripheral edema. Foot exam reveals intact monofilament sensation (10/10 bilaterally), strong distal pulses.',
      A: '1. Type 2 diabetes mellitus without complications (E11.9) - Improving glycemic control (HbA1c 7.2%, down from 7.6%).\n2. Essential (primary) hypertension (I10) - Well-controlled on current ACE inhibitor therapy.\n3. Routine preventive diabetic surveillance completed - normal renal parameters and intact peripheral sensation.',
      P: '1. Continue Metformin 1000 mg PO BID with meals.\n2. Continue Lisinopril 20 mg PO daily.\n3. Recheck HbA1c, CMP, and lipid panel in 3 months.\n4. Diabetic eye exam reminder provided; patient scheduled with ophthalmology next month.\n5. Follow-up clinic appointment scheduled in 3 months or sooner if acute symptoms arise.',
    });
    setIsEditing(false);
    setIsApproved(false);
  };

  return (
    <Layout>
      <SEO
        title="AI Clinical Documentation for Physicians | MedAlly"
        description="MedAlly helps physicians turn encounter context into structured, reviewable clinical documentation with SOAP-style notes and ICD-10/CPT coding context."
        url="https://www.medally.ai/clinical-documentation-ai"
        image="/images/medally/clinical-hero.webp"
        imageAlt="MedAlly AI clinical documentation workspace with a structured SOAP-style draft ready for physician review"
        keywords={[
          'ai clinical documentation',
          'clinical notes ai',
          'ai clinical notes',
          'clinical documentation ai',
          'clinical note ai',
          'ai for clinical notes',
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
                    <FileText className="w-3.5 h-3.5" />
                    AI CLINICAL DOCUMENTATION
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-editorial leading-[1.15] mb-6">
                    AI Clinical Documentation for Physicians — Structured, Reviewable Notes
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                    MedAlly helps physicians turn patient-encounter context into structured clinical documentation for review. Prepare SOAP-style documentation, organize encounter details, keep coding context connected to the encounter, and review the work before it moves forward in the clinical workflow.
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
                        className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/40 backdrop-blur-md text-foreground hover:bg-muted font-bold text-base transition-all duration-300"
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

              {/* Right Column: Hero Visual Card (LCP-friendly, structured UI) */}
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
                          <span className="text-xs font-bold text-foreground block">Patient Encounter Context</span>
                          <span className="text-[10px] text-muted-foreground">Follow-up: T2DM & HTN</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        Draft Ready
                      </span>
                    </div>

                    {/* Coding context highlight pill */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center gap-1">
                        <Tag className="w-3 h-3" /> ICD-10: E11.9, I10
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <FileCode2 className="w-3 h-3" /> CPT: 99214
                      </span>
                    </div>

                    {/* Structured SOAP Draft Preview */}
                    <div className="p-4 rounded-2xl bg-background/90 border border-border space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-teal-500" />
                          Structured SOAP-Style Draft
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Physician Review State
                        </span>
                      </div>
                      <div className="text-xs text-foreground space-y-1.5 font-mono bg-muted/20 p-3 rounded-xl border border-border/50">
                        <p><span className="text-teal-600 dark:text-teal-400 font-bold">S:</span> 58yo F 3mo T2DM/HTN follow-up. Compliant with meds. Avg BG 130-145.</p>
                        <p><span className="text-teal-600 dark:text-teal-400 font-bold">O:</span> BP 128/82, HR 74, HbA1c 7.2% (prev 7.6%). Normal renal labs.</p>
                        <p><span className="text-teal-600 dark:text-teal-400 font-bold">A:</span> 1. T2DM without complications (E11.9) 2. Essential HTN (I10).</p>
                        <p><span className="text-teal-600 dark:text-teal-400 font-bold">P:</span> Cont. Metformin 1000mg BID, Lisinopril 20mg. Labs in 3mo.</p>
                      </div>
                    </div>

                    {/* Footer / Review verification indicator */}
                    <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60">
                      <span className="flex items-center gap-1.5 text-foreground font-medium">
                        <UserCheck className="w-4 h-4 text-teal-500" />
                        Physician-Controlled Approval
                      </span>
                      <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Workflow Connected</span>
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
                Direct Product Answer
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-editorial mb-6">
                What Is AI Clinical Documentation?
              </h2>
              <div className="text-lg sm:text-xl text-foreground font-light leading-relaxed space-y-5 text-left p-8 sm:p-10 rounded-3xl bg-background border border-border shadow-sm">
                <p>
                  AI clinical documentation uses artificial intelligence to help create and structure clinical notes from information captured during a patient encounter. Instead of asking the physician to build the note from a blank page, the system prepares documentation for review.
                </p>
                <p className="text-muted-foreground">
                  With MedAlly, the physician remains responsible for the final clinical record. MedAlly prepares the draft and related encounter context; the physician reviews, edits, validates, and approves the work before it moves forward.
                </p>
                
                <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <p className="text-base font-bold text-foreground">
                    AI prepares. Clinicians review. Clinicians decide.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                  >
                    See How MedAlly Works
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: HOW THE DOCUMENTATION WORKFLOW WORKS (4 STEPS)
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Layers className="w-3.5 h-3.5" />
                Step-by-Step Documentation Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                From Encounter Context to Reviewable Clinical Documentation
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Four transparent stages that convert the visit into structured documentation while keeping the physician firmly in control of validation and approval.
              </p>
            </MotionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Step 1 */}
              <MotionReveal delay={0.05} className="h-full">
                <div className="h-full p-6 sm:p-8 rounded-3xl border border-border bg-muted/20 shadow-sm flex flex-col justify-between hover:border-teal-500/40 transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-lg flex items-center justify-center mb-6">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      1. Capture the encounter context
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      MedAlly begins with the clinical encounter and organizes the information needed to prepare documentation.
                    </p>
                  </div>
                  <div>
                    <Link
                      to="/ai-medical-scribe"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                    >
                      MedAlly AI Medical Scribe
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </MotionReveal>

              {/* Step 2 */}
              <MotionReveal delay={0.1} className="h-full">
                <div className="h-full p-6 sm:p-8 rounded-3xl border border-border bg-muted/20 shadow-sm flex flex-col justify-between hover:border-teal-500/40 transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-lg flex items-center justify-center mb-6">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      2. Prepare structured clinical documentation
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      MedAlly converts encounter context into structured documentation designed for physician review. MedAlly prepares SOAP-style documentation so the encounter can be organized into a familiar clinical structure.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Step 3 */}
              <MotionReveal delay={0.15} className="h-full">
                <div className="h-full p-6 sm:p-8 rounded-3xl border border-border bg-muted/20 shadow-sm flex flex-col justify-between hover:border-teal-500/40 transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-lg flex items-center justify-center mb-6">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      3. Review the note and supporting context
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      The physician reviews the draft, makes changes where needed, and validates the documentation. The AI output is a starting point for clinical review — not a substitute for physician judgment.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Step 4 */}
              <MotionReveal delay={0.2} className="h-full">
                <div className="h-full p-6 sm:p-8 rounded-3xl border border-border bg-muted/20 shadow-sm flex flex-col justify-between hover:border-teal-500/40 transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 font-bold text-lg flex items-center justify-center mb-6">
                      04
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      4. Prepare approved work for the next workflow step
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      After physician review and approval, the documentation is ready for the next step in the practice workflow. Exact handoff depends on the MedAlly deployment. MedAlly also prepares ICD-10/CPT coding context around the encounter so documentation and downstream administrative work do not have to live in separate silos.
                    </p>
                  </div>
                </div>
              </MotionReveal>

            </div>

            {/* Essential Physician Review Callout */}
            <MotionReveal delay={0.25} className="max-w-4xl mx-auto text-center space-y-6">
              <div className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-foreground">Physician control is central:</strong> MedAlly prepares the structured documentation and coding context; the physician reviews, edits, validates, and approves the final record.
                </p>
              </div>

              <div>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                >
                  See How MedAlly Works
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: CORE PILLARS (5 VALUE PROPOSITIONS)
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-muted/10">
          <div className="max-w-7xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Clinical Quality & Assembly Efficiency
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Clinical Notes AI Should Reduce Assembly Work — Not Remove Clinical Review
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                The value of AI clinical notes is not simply producing more text. The documentation should help the physician reach a usable draft faster while preserving control over what becomes part of the clinical record.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.05} className="max-w-4xl mx-auto mb-12">
              <div className="p-6 rounded-2xl bg-background border border-border text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  MedAlly is designed around that review path: encounter information is organized, structured into documentation, and presented for physician validation before approval.
                </p>
              </div>
            </MotionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Pillar 1 */}
              <MotionReveal delay={0.05} className="h-full">
                <div className="h-full p-8 rounded-3xl border border-border bg-background hover:border-teal-500/40 transition-colors flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-6">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Structured documentation
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Turn encounter information into a structured draft rather than reconstructing the visit manually after the fact.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Pillar 2 */}
              <MotionReveal delay={0.1} className="h-full">
                <div className="h-full p-8 rounded-3xl border border-border bg-background hover:border-teal-500/40 transition-colors flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-6">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      SOAP-style organization
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Prepare SOAP-style clinical documentation for review so the note follows a recognizable clinical structure.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Pillar 3 */}
              <MotionReveal delay={0.15} className="h-full">
                <div className="h-full p-8 rounded-3xl border border-border bg-background hover:border-teal-500/40 transition-colors flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-6">
                      <Database className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Encounter context in one workflow
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Keep the note connected to the clinical context that produced it instead of treating documentation as an isolated text-generation task.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Pillar 4 */}
              <MotionReveal delay={0.2} className="h-full">
                <div className="h-full p-8 rounded-3xl border border-border bg-background hover:border-teal-500/40 transition-colors flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-6">
                      <FileCode2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Coding context
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Prepare ICD-10/CPT coding context alongside the encounter workflow for physician review rather than separating documentation from the work that follows it.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Pillar 5 */}
              <MotionReveal delay={0.25} className="h-full md:col-span-2 lg:col-span-2">
                <div className="h-full p-8 rounded-3xl border border-teal-500/30 bg-teal-500/5 hover:border-teal-500/50 transition-colors flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-6">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Physician-controlled approval
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      Review, edit, and validate AI-prepared work before it is approved. MedAlly supports the documentation process; it does not replace the physician's responsibility for the final record.
                    </p>
                  </div>

                  <div>
                    <Link
                      to="/features"
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                    >
                      Explore MedAlly Features
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </MotionReveal>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: INTERACTIVE DEMONSTRATION WORKSPACE
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-6xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <ClipboardList className="w-3.5 h-3.5" />
                Review Workspace Demonstration
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                See the Documentation Before It Becomes the Record
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A useful clinical documentation workflow should make review straightforward. Physicians need to see what the AI prepared, understand the structure of the note, make corrections, and decide when the work is ready to move forward.
              </p>
            </MotionReveal>

            {/* High-Fidelity Interactive UI Demonstration */}
            <MotionReveal delay={0.1}>
              <div 
                className="glass-obsidian rounded-3xl border border-border shadow-2xl overflow-hidden"
                role="region"
                aria-label="MedAlly AI clinical documentation workspace with a structured SOAP-style draft ready for physician review"
              >
                
                {/* Top Workspace Header */}
                <div className="p-4 sm:p-6 border-b border-border/70 flex flex-wrap items-center justify-between gap-4 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-500 font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">Encounter #MA-9842</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono font-bold border border-teal-500/20">
                          SOAP Documentation Draft
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Patient: 58-year-old Female | Routine T2DM & HTN Follow-up</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                        isEditing
                          ? 'bg-teal-500/20 text-teal-600 dark:text-teal-300 border-teal-500/40'
                          : 'bg-background border-border text-foreground hover:bg-muted'
                      }`}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      {isEditing ? 'Editing Mode Active' : 'Edit Note Content'}
                    </button>
                    <button
                      onClick={resetSoapDraft}
                      className="p-1.5 rounded-xl text-xs font-semibold bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                      title="Reset Draft"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Workspace Split Body */}
                <div className="grid lg:grid-cols-12 min-h-[480px]">
                  
                  {/* Left Column: Encounter Context & Coding Summary */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border/70 p-5 sm:p-6 bg-muted/15 space-y-6">
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-teal-500" />
                        Encounter Context
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-background border border-border/80">
                          <span className="text-[11px] font-semibold text-muted-foreground block">Reason for Visit</span>
                          <span className="text-foreground font-medium">3-month routine chronic disease review</span>
                        </div>
                        <div className="p-3 rounded-xl bg-background border border-border/80">
                          <span className="text-[11px] font-semibold text-muted-foreground block">Current Vitals</span>
                          <span className="text-foreground font-mono text-[11px]">BP 128/82 | HR 74 | SpO2 99% | BMI 28.4</span>
                        </div>
                        <div className="p-3 rounded-xl bg-background border border-border/80">
                          <span className="text-[11px] font-semibold text-muted-foreground block">Key Lab Values</span>
                          <span className="text-foreground font-mono text-[11px]">HbA1c: 7.2% (prev 7.6%) | Cr: 0.9 mg/dL</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                        <FileCode2 className="w-3.5 h-3.5 text-teal-500" />
                        Prepared Coding Context
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-teal-500/5 border border-teal-500/20">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-mono font-bold text-teal-700 dark:text-teal-300">E11.9</span>
                            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">ICD-10</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground">Type 2 diabetes mellitus without complications</p>
                        </div>
                        <div className="p-3 rounded-xl bg-teal-500/5 border border-teal-500/20">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-mono font-bold text-teal-700 dark:text-teal-300">I10</span>
                            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">ICD-10</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground">Essential (primary) hypertension</p>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/20">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-mono font-bold text-blue-700 dark:text-blue-300">99214</span>
                            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">CPT</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground">Office or other outpatient visit, est. patient (moderate complexity)</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: SOAP Structure Tabs & Live Editor */}
                  <div className="lg:col-span-8 p-5 sm:p-7 flex flex-col justify-between bg-background">
                    
                    <div className="space-y-5">
                      
                      {/* SOAP Tabs */}
                      <div className="flex items-center gap-2 border-b border-border pb-3 overflow-x-auto">
                        {(['S', 'O', 'A', 'P'] as const).map((tab) => {
                          const tabLabels = {
                            S: 'Subjective (S)',
                            O: 'Objective (O)',
                            A: 'Assessment (A)',
                            P: 'Plan (P)',
                          };
                          return (
                            <button
                              key={tab}
                              onClick={() => setActiveSoapTab(tab)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                activeSoapTab === tab
                                  ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                              }`}
                            >
                              {tabLabels[tab]}
                            </button>
                          );
                        })}
                      </div>

                      {/* Content Area */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {activeSoapTab === 'S' && 'Subjective Findings'}
                            {activeSoapTab === 'O' && 'Objective Observations & Exam'}
                            {activeSoapTab === 'A' && 'Clinical Assessment & Diagnoses'}
                            {activeSoapTab === 'P' && 'Treatment Plan & Follow-up'}
                          </span>
                          <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> AI-Prepared Draft
                          </span>
                        </div>

                        {isEditing ? (
                          <textarea
                            value={soapData[activeSoapTab]}
                            onChange={(e) =>
                              setSoapData({ ...soapData, [activeSoapTab]: e.target.value })
                            }
                            rows={8}
                            className="w-full p-4 rounded-2xl bg-muted/20 border border-teal-500/40 font-mono text-xs sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all leading-relaxed resize-none"
                            placeholder="Type or adjust note text..."
                          />
                        ) : (
                          <div className="p-4 sm:p-5 rounded-2xl bg-muted/20 border border-border/70 font-mono text-xs sm:text-sm text-foreground leading-relaxed whitespace-pre-line min-h-[190px]">
                            {soapData[activeSoapTab]}
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Bottom Status & Approval Controls */}
                    <div className="pt-6 mt-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${isApproved ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                        <span className="text-xs font-medium text-muted-foreground">
                          {isApproved ? 'Status: Approved by Physician' : 'Status: Pending Physician Review'}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setIsApproved(!isApproved)}
                          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                            isApproved
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 dark:text-white shadow-md hover:scale-[1.02]'
                          }`}
                        >
                          {isApproved ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Approved for Workflow
                            </>
                          ) : (
                            <>
                              <CheckSquare className="w-3.5 h-3.5" />
                              Approve & Validate Draft
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Demonstration Footnote */}
                <div className="p-3 sm:p-4 bg-muted/40 border-t border-border/70 text-center">
                  <p className="text-[11px] text-muted-foreground italic">
                    Example MedAlly documentation workspace showing a structured draft ready for physician review.
                  </p>
                </div>

              </div>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 6: SCRIBE VS CLINICAL DOCUMENTATION COMPARISON TABLE
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-muted/10">
          <div className="max-w-5xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Layers className="w-3.5 h-3.5" />
                Workflow Clarification
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                AI Medical Scribe vs. AI Clinical Documentation
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                An <strong>AI medical scribe</strong> and <strong>AI clinical documentation</strong> are closely related, but they describe different parts of the workflow.
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
                        <th className="p-5 sm:p-6 font-bold w-3/8 text-teal-600 dark:text-teal-400">AI Medical Scribe</th>
                        <th className="p-5 sm:p-6 font-bold w-3/8 text-blue-600 dark:text-blue-400">AI Clinical Documentation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-xs sm:text-sm">
                      <tr className="hover:bg-muted/10 transition-colors">
                        <td className="p-5 sm:p-6 font-bold text-foreground">Primary question</td>
                        <td className="p-5 sm:p-6 text-muted-foreground">How can the encounter conversation be captured and turned into a draft note?</td>
                        <td className="p-5 sm:p-6 text-foreground font-medium">How can encounter information become structured, reviewable documentation?</td>
                      </tr>
                      <tr className="hover:bg-muted/10 transition-colors">
                        <td className="p-5 sm:p-6 font-bold text-foreground">Main emphasis</td>
                        <td className="p-5 sm:p-6 text-muted-foreground">Ambient capture and note drafting</td>
                        <td className="p-5 sm:p-6 text-foreground font-medium">Note structure, review, approval, documentation quality, and workflow continuity</td>
                      </tr>
                      <tr className="hover:bg-muted/10 transition-colors">
                        <td className="p-5 sm:p-6 font-bold text-foreground">Typical output</td>
                        <td className="p-5 sm:p-6 text-muted-foreground">Draft clinical note from the encounter</td>
                        <td className="p-5 sm:p-6 text-foreground font-medium">Structured clinical documentation prepared for review and downstream workflow</td>
                      </tr>
                      <tr className="hover:bg-muted/10 transition-colors">
                        <td className="p-5 sm:p-6 font-bold text-foreground">MedAlly page</td>
                        <td className="p-5 sm:p-6">
                          <Link
                            to="/ai-medical-scribe"
                            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                          >
                            AI Medical Scribe
                            <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </td>
                        <td className="p-5 sm:p-6 text-xs font-bold text-foreground uppercase tracking-wider">
                          This page
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.15} className="mt-8">
              <div className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/20 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  The two capabilities can work together. MedAlly's scribe capability helps create encounter documentation; the broader clinical-documentation workflow focuses on turning that information into structured work a physician can review and approve.
                </p>
              </div>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 7: CONNECTED WORKFLOW & PLATFORM POSITIONING
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-background">
          <div className="max-w-5xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Workflow Continuity
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Clinical Documentation That Stays Connected to the Encounter
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="p-8 sm:p-12 rounded-3xl border border-border bg-muted/20 space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                <p className="text-foreground font-normal">
                  Clinical documentation does more than record what happened. It also becomes context for the work that follows the visit.
                </p>
                <p>
                  MedAlly is designed to keep documentation connected to the encounter rather than ending the workflow at a block of generated text. The same encounter context can support structured documentation and prepare coding context while keeping physician review at the center of the process.
                </p>

                <p className="text-foreground font-medium">
                  That is the difference between treating AI as a note generator and using it as part of a broader{' '}
                  <Link
                    to="/"
                    className="text-teal-600 dark:text-teal-400 font-bold underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Clinical AI Platform
                  </Link>{' '}
                  for the patient encounter.
                </p>

                <div className="pt-4 border-t border-border/60">
                  <Link
                    to="/"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                  >
                    Clinical AI Platform
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </MotionReveal>

          </div>
        </section>

        {/* =========================================================================
            SECTION 8: BUILT AROUND PHYSICIAN REVIEW
            ========================================================================= */}
        <section className="py-24 lg:py-32 border-b border-border bg-muted/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-2">
                    <UserCheck className="w-3.5 h-3.5" />
                    Clinical Safety Architecture
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight">
                    Built Around Physician Review
                  </h2>
                </MotionReveal>

                <MotionReveal delay={0.1}>
                  <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                    <p>
                      AI-generated clinical documentation can contain omissions, incorrect interpretations, or information that needs clarification. For that reason, MedAlly is designed around a physician-review step.
                    </p>
                    <p className="text-foreground font-medium">
                      Before approving AI-prepared documentation, the clinician should verify that the note accurately reflects the encounter and make any necessary edits. Clinical judgment remains with the physician.
                    </p>
                  </div>
                </MotionReveal>

                <MotionReveal delay={0.15}>
                  <Link
                    to="/features"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 hover:text-foreground transition-colors group"
                  >
                    Explore MedAlly Features
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MotionReveal>
              </div>

              <div className="lg:col-span-5">
                <MotionReveal delay={0.15}>
                  <div className="p-8 rounded-3xl border border-border bg-background space-y-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground">Review Guardrails</h3>
                        <p className="text-xs text-muted-foreground">Clinician validation before approval.</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-muted/30 border border-border space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-muted-foreground uppercase tracking-wider">Clinical Responsibility</span>
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">Physician-Led</span>
                      </div>
                      <div className="space-y-2 text-xs text-foreground">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>Clinician reviews and validates note draft</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>Direct editing across all SOAP sections</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>Coding context prepared for physician review</span>
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
            SECTION 9: FREE PLAN CONVERSION
            ========================================================================= */}
        <section className="py-24 lg:py-32 border-b border-border bg-background">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Forever Free Plan
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Looking for AI Clinical Documentation You Can Try Free?
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-10">
                <p>
                  MedAlly's <strong>Forever Free plan includes 10 encounters per month</strong>, giving physicians a way to experience the documentation workflow before deciding what they need beyond the free allowance.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://app.medally.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 hover:text-slate-950 dark:text-white dark:hover:text-white font-bold text-base shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group"
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
            SECTION 10: FAQ ACCORDION
            ========================================================================= */}
        <section className="py-24 lg:py-36 border-b border-border bg-muted/10">
          <div className="max-w-4xl mx-auto px-6">
            
            <MotionReveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <Activity className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Frequently Asked Questions About AI Clinical Documentation
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Clear answers regarding documentation workflows, review mechanisms, coding context, and plan details.
              </p>
            </MotionReveal>

            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <MotionReveal key={faq.q} delay={index * 0.04}>
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
            SECTION 11: BOTTOM CONVERSION CTA
            ========================================================================= */}
        <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,183,181,0.08),transparent_60%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-bold text-teal-600 dark:text-teal-400 tracking-widest uppercase mb-6">
                <FileText className="w-3.5 h-3.5" />
                Structured Clinical Notes
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-editorial leading-tight mb-6">
                Move From Encounter to Reviewable Documentation
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Use MedAlly to prepare structured clinical documentation from the patient encounter while keeping physician review and approval at the center of the workflow.
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

export default ClinicalDocumentationAIPage;
