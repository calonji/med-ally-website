import { type FC } from 'react';
import { Check, X, Sparkles, BrainCircuit, ShieldAlert, Zap } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface ComparisonItem {
  feature: string;
  description: string;
  scribe: {
    has: boolean | 'partial';
    label: string;
  };
  medally: {
    has: true;
    label: string;
    pill?: string;
  };
}

const items: ComparisonItem[] = [
  {
    feature: 'Ambient Room Capture',
    description: 'Non-intrusive recording of multi-speaker patient-physician consultation.',
    scribe: { has: true, label: 'Standard Scribing' },
    medally: { has: true, label: 'Smart Voice Isolation & Noise Suppression', pill: 'Advanced' }
  },
  {
    feature: 'Multi-Agent Fleet Orchestration',
    description: 'Coordinated sub-nodes working in parallel on different clinical contexts.',
    scribe: { has: false, label: 'Single LLM prompt loop' },
    medally: { has: true, label: '16 Specialized Autonomous Agents', pill: 'Core USP' }
  },
  {
    feature: 'Differential Diagnostic Synthesis',
    description: 'Analyzing dialogue context against real-world databases to surface likely conditions.',
    scribe: { has: false, label: 'Not Available' },
    medally: { has: true, label: 'Predictive Diff Engine (93% precision)' }
  },
  {
    feature: 'EHR Mapping & Verification',
    description: 'Direct parsing of unstructured records into push-ready chart structures.',
    scribe: { has: 'partial', label: 'Basic Text Copier' },
    medally: { has: true, label: 'Deep Structure & Logical Field Alignment', pill: 'Native Sync' }
  },
  {
    feature: 'CPT / ICD-10 Billing Code Mapping',
    description: 'Generating high-precision revenue maps based directly on encounter proof.',
    scribe: { has: false, label: 'No revenue capabilities' },
    medally: { has: true, label: 'MedAlly Codex (99.7% precision)' }
  },
  {
    feature: 'Continuous Safety Screening',
    description: 'Validating pharmaceutical scripts against active longitudinal patient records.',
    scribe: { has: false, label: 'No safe guards' },
    medally: { has: true, label: 'Autonomous Contraindication Validation', pill: 'Clinician Led' }
  }
];

const CompetitiveMatrix: FC = () => {
  return (
    <section className="py-24 lg:py-36 relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold uppercase tracking-widest mb-6 text-teal-600 dark:text-teal-400 backdrop-blur-sm">
              <BrainCircuit className="w-3.5 h-3.5" /> Competitive Anatomy
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-editorial leading-tight mb-6">
              The architecture <br className="hidden sm:block" /> of a <span className="text-gradient-teal">Command Layer.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              Single-point ambient scribes reduce typing fatigue. MedAlly addresses the entire practice ecosystem—unifying diagnostics, revenue, and safety loops into a single, hyper-secure fleet.
            </p>
          </MotionReveal>
        </div>

        {/* Elegant Web-standard Competitive Grid */}
        <MotionReveal className="relative overflow-x-auto rounded-[2.5rem] border border-border/80 bg-background/50 backdrop-blur-md shadow-2xl">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-border bg-muted/40 py-8 px-8 items-center">
              <div className="col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Capabilities Matrix</span>
              </div>
              <div className="col-span-3 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1 text-muted-foreground/70 font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Generic Scribes</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground/50">(Heidi, Freed, etc.)</span>
              </div>
              <div className="col-span-4 flex flex-col items-center text-center relative bg-teal-500/5 rounded-2xl p-4 border border-teal-500/20 shadow-sm">
                <div className="absolute -top-3 bg-teal-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-white" /> MedAlly Standard
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Sparkles className="w-4 h-4 text-[#36b7b5]" />
                  <span className="font-bold text-lg text-foreground tracking-tight">MedAlly Command</span>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-teal-600 dark:text-teal-400">Multi-Agent Autonomous Layer</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {items.map((item, index) => (
                <div key={index} className="grid grid-cols-12 py-8 px-8 items-center hover:bg-muted/30 transition-colors duration-300 group">
                  {/* Feature Name & Desc */}
                  <div className="col-span-5 pr-8">
                    <h3 className="font-bold text-base text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">
                      {item.feature}
                    </h3>
                    <p className="text-xs text-muted-foreground/80 font-light leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>

                  {/* Generic Scribes Column */}
                  <div className="col-span-3 flex flex-col items-center justify-center text-center">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${item.scribe.has === true
                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                        : item.scribe.has === 'partial'
                          ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                          : 'bg-destructive/5 text-destructive/30 border border-destructive/10'
                      }`}>
                      {item.scribe.has === true ? (
                        <Check className="w-5 h-5" />
                      ) : item.scribe.has === 'partial' ? (
                        <div className="text-xs font-bold">~</div>
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                    </div>
                    <span className={`text-xs font-medium ${item.scribe.has === false ? 'text-muted-foreground/40' : 'text-muted-foreground'
                      }`}>
                      {item.scribe.label}
                    </span>
                  </div>

                  {/* MedAlly Column */}
                  <div className="col-span-4 flex flex-col items-center justify-center text-center bg-teal-500/[0.02] group-hover:bg-teal-500/[0.04] py-4 rounded-2xl border-x border-teal-500/5 transition-colors duration-300">
                    <div className="h-12 w-12 rounded-full bg-[#36b7b5]/15 text-[#36b7b5] border border-[#36b7b5]/30 flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <span className="text-sm font-bold text-foreground tracking-tight">
                      {item.medally.label}
                    </span>
                    {item.medally.pill && (
                      <span className="mt-1.5 text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded border border-teal-500/20 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono">
                        {item.medally.pill}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default CompetitiveMatrix;
