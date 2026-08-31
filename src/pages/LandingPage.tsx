// @ts-nocheck
import { type FC, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle2,
  Zap,
  BrainCircuit,
  FileText,
  FileCheck2,
  ChevronRight,
  Quote
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import AIAgents from '@/components/AIAgents';
import { MotionReveal } from '@/components/MotionReveal';
import CompetitiveMatrix from '@/components/CompetitiveMatrix';
import LiveEncounterDemo from '@/components/LiveEncounterDemo';
import ClinicalEMRSuite from '@/components/ClinicalEMRSuite';
import SecurityVault from '@/components/SecurityVault';

const workflowTimeline = [
  { id: '01', title: 'Ambient Active Listening', detail: 'Non-intrusive room capture starts automatically, filtering physician voice footprint.', delay: 0 },
  { id: '02', title: 'Real-Time SOAP Drafting', detail: 'Transforms subjective and objective dialogue into structured sections with 99% accuracy.', delay: 0.1 },
  { id: '03', title: 'Predictive Diff & Guideline Check', detail: 'Checks 200+ guidelines in background to surface overlooked conditions.', delay: 0.2 },
  { id: '04', title: 'Auto-Generated Billing Codes', detail: 'Converts physical chart context into ICD-10/CPT maps for instant submission.', delay: 0.3 },
];

const proofMetrics = [
  { value: '70%', label: 'Note Reduction', subtext: 'Less time behind the screen, more time with the patient.' },
  { value: '93%', label: 'Diagnostic Precision', subtext: 'Cross-checked across global real-world medical databases.' },
  { value: '99.7%', label: 'Medical Coding Accuracy', subtext: 'Drastically reduced rejection rates for clinical claims.' }
];

const productInsights = [
  {
    image: '/images/medally/brand-two-screens-one-truth.png',
    tag: 'Single Source',
    title: 'One visit, resolved instantly.',
    desc: 'The encounter audio, chart structures, and billing codes consolidate into one verified truth, waiting for your approval before the next door opens.'
  },
  {
    image: '/images/medally/brand-16-agents-grid.png',
    tag: 'Autonomous Core',
    title: 'The network behind you.',
    desc: '16 independent, specialized clinical nodes coordinate treatment planning, dosage checks, and referral briefs without human input.'
  }
];

const LandingPage: FC = () => {
  const [comparisonState, setComparisonState] = useState<'traditional' | 'medally'>('medally');

  const encounterRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: encounterRef,
    offset: ['start end', 'end start']
  });
  const lineScaleY = useTransform(scrollYProgress, [0.2, 0.8], [0.1, 1]);

  return (
    <Layout>
      <SEO
        title="MedAlly | Clinical AI Command Layer for Physicians"
        description="A world-class, clinical-grade AI platform that unifies ambient documentation, predictive diagnostics, evidence-based guidelines, and billing automation into a single ecosystem."
        url="https://www.medally.ai/"
        image="/images/medally/clinical-hero.webp"
        imageAlt="MedAlly Clinical Command Layer"
        keywords={[
          'clinical AI platform',
          'Awwwards healthcare design',
          'ambient AI scribe',
          'predictive medical diagnosis',
          'HIPAA-compliant AI documentation'
        ]}
      />

      <main className="bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        
        {/* Premium Obsidian Hero */}
        <Hero />

        {/* The Clinical Shift: Burnout vs Brilliance */}
        <section className="py-24 lg:py-40 relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#4b268310_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-coral-alert" />
                    The Practice Paradigm
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-editorial leading-tight mb-6">
                    Ending <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-alert to-[#e41e3a]">Administrative Decay</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    Physicians lose up to 3.5 hours a day to charting, fragmented portals, and disconnected workflow silos. MedAlly transforms the chaos of practice into a calm, unified review path.
                  </p>
                </MotionReveal>

                {/* Switch Controls */}
                <div className="flex p-1.5 rounded-full bg-muted/50 border border-border max-w-sm shadow-inner backdrop-blur-sm">
                  <button
                    onClick={() => setComparisonState('traditional')}
                    className={`flex-1 py-3 px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                      comparisonState === 'traditional' 
                        ? 'bg-foreground/10 text-foreground shadow-md' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 text-coral-alert" />
                    Legacy
                  </button>
                  <button
                    onClick={() => setComparisonState('medally')}
                    className={`flex-1 py-3 px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                      comparisonState === 'medally' 
                        ? 'bg-foreground text-background dark:bg-white dark:text-[#030712] shadow-xl' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-teal-500" />
                    MedAlly
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 min-h-[440px] flex items-center">
                <AnimatePresence mode="wait">
                  {comparisonState === 'traditional' ? (
                    <motion.div
                      key="trad"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="w-full border border-red-500/30 bg-red-950/5 rounded-[2.5rem] p-8 lg:p-12 glass-obsidian relative overflow-hidden"
                    >
                      <div className="absolute -right-20 -top-20 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-2xl border border-red-500/20 bg-red-500/10 flex items-center justify-center text-coral-alert shadow-lg">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">The Fragmented Workflow</h3>
                          <p className="text-xs text-red-500 dark:text-red-400 font-bold uppercase tracking-wider mt-1">High Fatigue Index</p>
                        </div>
                      </div>

                      <ul className="space-y-5">
                        {[
                          'Dictating notes from memory hours after the visit concluded',
                          'Toggling between disparate portals for patient charts & billing codes',
                          'Manual screening for adverse contraindications and dose limits',
                          'Spending 25% of the patient visit typing into a computer screen',
                          'Post-clinic "Pajama Time" catching up on administrative backlog'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <AlertCircle className="w-5 h-5 text-coral-alert/70 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="med"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="w-full border border-teal-500/30 bg-teal-950/5 rounded-[2.5rem] p-8 lg:p-12 glass-obsidian relative overflow-hidden shadow-2xl"
                    >
                      <div className="absolute -right-20 -top-20 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-2xl border border-teal-500/20 bg-teal-500/10 flex items-center justify-center text-teal-500 dark:text-teal-400 shadow-lg">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">The Unified Clinical Command</h3>
                          <p className="text-xs text-teal-500 dark:text-teal-400 font-bold uppercase tracking-wider mt-1">Zero Note Burden</p>
                        </div>
                      </div>

                      <ul className="space-y-5">
                        {[
                          'Conversations ambiently structured into SOAP draft in real-time',
                          'Coding, diagnostics, and treatment flow automatically populated',
                          'Evidence-based guidelines checked autonomously behind the scenes',
                          '100% focus on the patient, with zero screens during clinical contact',
                          'Finishing notes and billing maps before leaving the exam room'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground dark:text-slate-200 leading-relaxed">
                            <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        <LiveEncounterDemo />

        {/* The 16-Agent Orchestration Section */}
        {/* Replaces old text layers with the gorgeous dynamic component I just built */}
        <AIAgents />

        {/* Real-Time Secure EHR Handoff Engine */}
        <ClinicalEMRSuite />

        {/* Cinematic Clinical Encounter Flow */}
        <section className="py-24 lg:py-40 relative overflow-hidden" ref={encounterRef}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#36b7b510_0%,transparent_40%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-6 lg:sticky lg:top-32">
                <MotionReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">
                    <BrainCircuit className="w-3.5 h-3.5 text-[#36b7b5]" />
                    The Encounter Cycle
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-editorial leading-[1.1] mb-8">
                    From ambient audio <span className="text-gradient-teal font-light">to chart closure.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
                    Watch the live encounter synthesize itself. In seconds, raw room dialogue undergoes autonomous clinically filtering, cross-checks guidelines, maps codes, and presents a unified review draft.
                  </p>
                  
                  <div className="p-6 rounded-[2rem] border border-border/50 bg-muted/30 backdrop-blur-sm flex gap-5 max-w-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                    <Quote className="w-8 h-8 text-teal-500/30 shrink-0" />
                    <div>
                      <p className="text-sm italic text-muted-foreground leading-relaxed">"MedAlly brings sanity back to the clinic day. The notes assemble while I sleep, virtually. Every guideline check gives me profound peace of mind."</p>
                      <p className="text-xs font-bold text-muted-foreground/70 mt-4 uppercase tracking-wide">Dr. S. Chen • Primary Care Lead</p>
                    </div>
                  </div>
                </MotionReveal>
              </div>

              <div className="lg:col-span-6 relative">
                {/* The Vertical Connecting Line */}
                <motion.div 
                  style={{ scaleY: lineScaleY }} 
                  className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-teal-500/40 via-purple-500/30 to-transparent origin-top hidden md:block" 
                />

                <div className="space-y-8">
                  {workflowTimeline.map((step) => (
                    <MotionReveal key={step.id} delay={step.delay} direction="up" className="relative md:pl-16 flex gap-6 group">
                      {/* Node Indicator */}
                      <div className="h-14 w-14 rounded-full bg-background border border-border flex items-center justify-center absolute left-0 z-10 group-hover:border-teal-500/30 group-hover:bg-teal-500/5 transition-all duration-300 hidden md:flex">
                        <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{step.id}</span>
                      </div>
                      
                      {/* Content Card */}
                      <div className="flex-1 glass-obsidian p-8 rounded-[2rem] border border-border/50 group-hover:border-border transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.08] text-foreground transition-opacity duration-300 pointer-events-none">
                          <FileCheck2 className="w-24 h-24" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                      </div>
                    </MotionReveal>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Clinical Proof Points */}
        <section className="py-20 border-y border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {proofMetrics.map((metric, index) => (
                <MotionReveal key={metric.label} delay={index * 0.1} className="border-l border-border pl-8 flex flex-col justify-between group hover:border-[#36b7b5] transition-colors duration-300 py-4">
                  <div>
                    <h3 className="text-6xl sm:text-7xl font-extrabold text-foreground tracking-tight font-serif mb-3 text-editorial group-hover:translate-x-1 transition-transform duration-300">{metric.value}</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{metric.label}</p>
                  </div>
                  <p className="text-xs text-muted-foreground/60 font-light leading-relaxed">{metric.subtext}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* High Fidelity Product Showcase */}
        <section className="py-24 lg:py-40 relative overflow-hidden border-b border-border">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <MotionReveal className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                High Fidelity
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-editorial leading-tight mb-6">
                Designed for <span className="text-gradient-teal">physician autonomy.</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                No disconnected assistants, portals, or clutter. Clinicians get a single, secure viewport across their entire network of clinical operations.
              </p>
            </MotionReveal>

            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              {productInsights.map((insight, i) => (
                <MotionReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'up' : 'up'} className="flex flex-col rounded-[2.5rem] border border-border overflow-hidden bg-muted/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
                  {/* The frame aspect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-background border-b border-border">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity dark:saturate-50 group-hover:opacity-95 group-hover:scale-105 group-hover:mix-blend-normal transition-all duration-700 filter"
                    />
                  </div>
                  <div className="p-10 flex-grow flex flex-col items-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#36b7b5]/30 text-[#36b7b5] mb-6 bg-[#36b7b5]/5">{insight.tag}</span>
                    <h3 className="text-2xl font-bold text-foreground text-editorial tracking-tight mb-4 leading-tight">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">{insight.desc}</p>
                    
                    <div className="mt-auto pt-4 border-t border-border w-full flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">HIPAA Validated Core</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>

          </div>
        </section>

        <CompetitiveMatrix />

        {/* Security and Sovereignty Governance Vault */}
        <SecurityVault />

        {/* Majestic Closing CTA */}
        <section className="py-32 lg:py-48 relative overflow-hidden bg-background text-foreground">
          {/* Dynamic back-glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,#36b7b515_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(90deg, hsla(var(--foreground) / 0.2) 1px, transparent 1px), linear-gradient(hsla(var(--foreground) / 0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <MotionReveal>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground text-editorial mb-8 leading-[1.1]">
                Bring clarity back <br className="hidden md:inline" /> to your <span className="text-gradient-teal">clinical day.</span>
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12">
                Unlock HIPAA-compliant, high-fidelity medical command in minutes. Zero credit card required to explore our initial documentation engine.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-md mx-auto">
              <a
                href="https://app.medally.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] text-slate-950 dark:text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-300 text-center group"
              >
                Begin Platform Tour
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.calonji.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/50 backdrop-blur-md text-foreground hover:bg-black transition-all duration-300 text-center font-bold"
              >
                Talk to Medical Lead
              </a>
            </MotionReveal>
          </div>
        </section>

      </main>
    </Layout>
  );
};

export default LandingPage;
