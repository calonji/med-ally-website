// @ts-nocheck
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
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Layout from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { PageHero, ParallaxImageBand } from '@/components/PagePrimitives';
import { MotionReveal } from '@/components/MotionReveal';
import CompetitiveMatrix from '@/components/CompetitiveMatrix';

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

const FeaturesPage: FC = () => (
  <Layout>
    <SEO
      title="MedAlly Platform Matrix | 16 Autonomous Clinical Agents"
      description="Unpack the complete range of clinical AI functions spanning SOAP capture, lab synthesis, coding automation, and practice orchestration."
      url="https://www.medally.ai/features"
      image={heroImage}
      imageAlt="MedAlly Platform Capabilities"
      keywords={['clinical AI agents', 'medical dictation features', 'EHR workflows', 'automated medical billing']}
    />
    
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
      
      {/* Cinematic Header Container */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(54,183,181,0.1)_0%,transparent_55%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Technical Capabilities
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-editorial leading-[1.1] tracking-tight mb-8">
                One platform. <br />
                <span className="text-teal-600 dark:text-teal-400 font-light italic">Sixteen specialties.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-xl leading-relaxed mb-10">
                We replace single-point scribes with a hyper-coordinated fleet of sixteen specialized agents managing every step from voice to billing map.
              </p>
              <a href="#features-grid" className="inline-flex items-center gap-2 bg-foreground text-background font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300">
                Review the Matrix <ArrowRight className="w-4 h-4" />
              </a>
            </MotionReveal>
            
            <MotionReveal delay={0.2} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-3xl opacity-50 rounded-[3rem]" />
              <div className="relative aspect-[4/3] rounded-[2rem] border border-border overflow-hidden bg-card shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Physician interface" 
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Direct AEO/GEO Answer Section */}
      <section className="py-16 border-y border-border bg-muted/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MotionReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-editorial mb-4">
              What does MedAlly automate?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              MedAlly is a clinical AI platform that automates clinical documentation, differential review, lab synthesis, treatment planning support, billing context, follow-up tasks, and workflow handoffs from the same encounter context.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Feature Sections Loop with Split Alternating Layouts */}
      <div id="features-grid" className="space-y-32 lg:space-y-48 pb-40 pt-16">
        {sections.map((section, index) => (
          <section key={section.eyebrow} className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Content Grid Column */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <MotionReveal>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 mb-4">{section.eyebrow}</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight font-serif text-editorial leading-tight mb-6">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-10 max-w-lg">
                      {section.copy}
                    </p>
                  </MotionReveal>

                  {/* Category Sub-Agents Grid */}
                  <div className="space-y-6">
                    {section.agents.map((agent, agentIndex) => {
                      const Icon = agent.icon;
                      return (
                        <MotionReveal key={agent.name} delay={agentIndex * 0.05} className="glass-medally p-6 rounded-2xl border border-border flex gap-5 items-start hover:border-teal-500/20 hover:shadow-lg transition-all duration-300">
                          <div className="h-12 w-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 mt-1">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2 gap-4 flex-wrap">
                              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">{agent.name}</h3>
                              <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 font-mono whitespace-nowrap">{agent.metric}</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-light leading-relaxed">{agent.description}</p>
                          </div>
                        </MotionReveal>
                      );
                    })}
                  </div>
                </div>

                {/* Visual Image Grid Column */}
                <MotionReveal delay={0.15} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(54,183,181,0.1)_0%,transparent_70%)] blur-2xl pointer-events-none" />
                    <div className="relative rounded-3xl border border-border bg-muted overflow-hidden shadow-2xl transition-all duration-300 aspect-[4/3]">
                      <img
                        src={section.image}
                        alt={section.eyebrow}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </MotionReveal>

              </div>
            </div>
          </section>
        ))}
      </div>

      <CompetitiveMatrix />

      {/* Dual Parallax Product Deep-Dives */}
      <ParallaxImageBand
        eyebrow="Technical fidelity"
        title="Notes that read like a clinician, not an LLM."
        copy="MedAlly models have been natively trained on massive datasets of verified specialized clinical outcomes to maintain deep context."
        image="/images/medally/product-ambient-scribe.png"
        imageAlt="Ambient Scribe View"
      />

      <ParallaxImageBand
        eyebrow="Safety Architecture"
        title="Continuous background conflict validation."
        copy="Our diagnostics module works invisibly to test every prescribing vector against current longitudinal records for maximum precaution."
        image="/images/medally/product-differential-panel.png"
        imageAlt="Differential Panel View"
        reverse
      />

      {/* Before MedAlly Highlight Card */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <MotionReveal className="glass-medally p-10 sm:p-16 rounded-[3rem] border border-destructive/20 relative overflow-hidden shadow-xl">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-destructive/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-destructive/20 bg-destructive/5 text-xs font-bold uppercase tracking-widest text-destructive mb-4">
                  Administrative Friction
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-serif text-editorial leading-tight">
                  The administrative weight before adopting MedAlly.
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['After-hours charting', 'Undetected safety loops', 'Coding lag times'].map((pain) => (
                  <div key={pain} className="p-6 rounded-2xl border border-destructive/10 bg-destructive/5 backdrop-blur-sm flex flex-col justify-between">
                    <Bell className="h-4 w-4 text-destructive mb-6" />
                    <p className="text-xs font-bold tracking-wide text-foreground/90 leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

    </main>
  </Layout>
);

export default FeaturesPage;
