import { type FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Play, Pause, CheckCircle2, Sparkles, RefreshCw, FileAudio, Activity, ShieldCheck, WalletCards } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface Step {
  time: string;
  speaker: 'Doctor' | 'Patient';
  text: string;
  activeAgents: string[];
  soapUpdate: {
    field: 'subjective' | 'objective' | 'assessment' | 'plan' | 'billing';
    content: string;
  };
}

const script: Step[] = [
  {
    time: '0:05',
    speaker: 'Doctor',
    text: 'Hi David, looks like we are checking in on that persistent lower back pain you mentioned last month. Has it improved at all?',
    activeAgents: ['ScribeAI', 'DocFlow'],
    soapUpdate: { field: 'subjective', content: 'Patient presenting for follow-up of persistent low back pain.' }
  },
  {
    time: '0:12',
    speaker: 'Patient',
    text: "Honestly, it's actually worsened over the last week. Now it radiates down past my right knee all the way to my outer ankle. It feels like a dull ache but sharpens when I try to bend forward.",
    activeAgents: ['ScribeAI', 'Diagnostix', 'Insight'],
    soapUpdate: { field: 'subjective', content: 'Symptoms have worsened over the past week. Pain now radiates past the right knee down to the lateral malleolus. Worsened by trunk flexion.' }
  },
  {
    time: '0:21',
    speaker: 'Doctor',
    text: 'Okay, that radiation down past the knee is definitely noteworthy. On examination today, I noticed some localized tenderness along your lower lumbar spine, and your straight leg raise test on the right side is positive at around 45 degrees.',
    activeAgents: ['ScribeAI', 'DocFlow', 'Diagnostix'],
    soapUpdate: { field: 'objective', content: 'Tenderness along lower lumbar spine. Positive straight leg raise (SLR) on right at 45 degrees.' }
  },
  {
    time: '0:32',
    speaker: 'Doctor',
    text: "I suspect we might be dealing with an L5-S1 radiculopathy, potentially secondary to a disc bulge. I want to order an MRI of your lumbar spine to confirm, and let's get you started on physical therapy twice a week.",
    activeAgents: ['Diagnostix', 'CarePath', 'RxGen'],
    soapUpdate: { field: 'assessment', content: 'Suspect L5-S1 radiculopathy (likely right-sided herniation vs bulge).' }
  },
  {
    time: '0:44',
    speaker: 'Doctor',
    text: "I am also going to prescribe a short course of Meloxicam 15mg once daily to help manage the inflammation, assuming your labs are clear.",
    activeAgents: ['RxGen', 'Codex', 'Follow-up'],
    soapUpdate: { field: 'plan', content: '1. Lumbar Spine MRI without contrast.\n2. Physical Therapy 2x/week.\n3. Meloxicam 15mg daily x14 days.' }
  },
  {
    time: '0:50',
    speaker: 'Doctor',
    text: "Let's schedule a follow-up visit in 3 weeks once we get those MRI results back.",
    activeAgents: ['Follow-up', 'Codex', 'SpecialtySync'],
    soapUpdate: { field: 'billing', content: 'ICD-10: M54.16 (Lumbar Radiculopathy)\nCPT: 99213 (Level 3 Outpatient Visit)' }
  }
];

const LiveEncounterDemo: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [transcript, setTranscript] = useState<Step[]>([]);
  const [soapNote, setSoapNote] = useState({
    subjective: '',
    objective: '',
    assessment: '',
    plan: '',
    billing: ''
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPlaying) {
      if (currentStepIndex < script.length - 1) {
        timer = setTimeout(() => {
          const nextIndex = currentStepIndex + 1;
          setCurrentStepIndex(nextIndex);
          const nextStep = script[nextIndex];
          
          setTranscript(prev => [...prev, nextStep]);
          
          setSoapNote(prev => {
            const updated = { ...prev };
            const field = nextStep.soapUpdate.field;
            if (updated[field]) {
              updated[field] = updated[field] + '\n' + nextStep.soapUpdate.content;
            } else {
              updated[field] = nextStep.soapUpdate.content;
            }
            return updated;
          });
        }, 4000); // Advance every 4 seconds
      } else {
        setIsPlaying(false);
      }
    }

    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex]);

  const handleStart = () => {
    if (currentStepIndex === script.length - 1) {
      // Reset
      setCurrentStepIndex(-1);
      setTranscript([]);
      setSoapNote({ subjective: '', objective: '', assessment: '', plan: '', billing: '' });
    }
    setIsPlaying(true);
  };

  const handlePause = () => setIsPlaying(false);
  
  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(-1);
    setTranscript([]);
    setSoapNote({ subjective: '', objective: '', assessment: '', plan: '', billing: '' });
  };

  const activeAgents = currentStepIndex >= 0 ? script[currentStepIndex].activeAgents : [];

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden border-b border-border">
      {/* Ambient Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(54,183,181,0.06)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16 sm:mb-24">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Direct Product Simulation
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-editorial leading-tight">
              Witness the <br />
              <span className="text-gradient-teal">Autonomous Flow.</span>
            </h2>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Unlike basic text prompts that just transcribe words, MedAlly runs an active orchestration of 16 specialized agents that analyze, safe-guard, code, and map the visit structure synchronously.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {!isPlaying && currentStepIndex < script.length - 1 ? (
                <button 
                  onClick={handleStart}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-teal-700 shadow-lg transition-all hover:scale-[1.03]"
                >
                  <Play className="w-4 h-4 fill-white" /> Start Live Simulation
                </button>
              ) : isPlaying ? (
                <button 
                  onClick={handlePause}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all"
                >
                  <Pause className="w-4 h-4 fill-current" /> Pause Simulation
                </button>
              ) : (
                <button 
                  onClick={handleStart}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-teal-700 shadow-lg transition-all"
                >
                  <RefreshCw className="w-4 h-4" /> Restart Demo
                </button>
              )}
              
              {currentStepIndex > -1 && (
                <button 
                  onClick={handleReset}
                  className="text-muted-foreground hover:text-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>
          </MotionReveal>
        </div>

        {/* Main Interactive Device Layout */}
        <MotionReveal className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Input & Ambient Listening */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Mic & Active Pulse Card */}
            <div className="glass-medally border border-border rounded-[2rem] p-8 flex flex-col items-center text-center relative overflow-hidden min-h-[260px] justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(54,183,181,0.03)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Animated Mic Node */}
              <div className="relative mb-6">
                {isPlaying && (
                  <>
                    <div className="absolute -inset-4 rounded-full bg-[#36b7b5]/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute -inset-8 rounded-full bg-[#36b7b5]/10 animate-ping" style={{ animationDuration: '3s' }} />
                  </>
                )}
                <div className={`h-20 w-20 rounded-full border flex items-center justify-center shadow-2xl relative z-10 transition-all duration-500 ${
                  isPlaying ? 'bg-teal-600 border-teal-400 text-white scale-110' : 'bg-muted border-border text-muted-foreground'
                }`}>
                  {isPlaying ? <Mic className="w-8 h-8 animate-pulse" /> : <FileAudio className="w-8 h-8" />}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground tracking-tight mb-1">
                {isPlaying ? 'MedAlly ScribeAI Active' : currentStepIndex === script.length - 1 ? 'Encounter Capture Complete' : 'Ambient Room Capture'}
              </h3>
              <p className="text-xs text-muted-foreground font-light max-w-[220px]">
                {isPlaying ? 'Listening in real-time, filtering cross-talk.' : 'Press Start to begin the clinician-patient dialogue.'}
              </p>
              
              {/* Custom Soundwave Bars */}
              <div className="flex items-center gap-1 mt-6 h-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((bar) => (
                  <div 
                    key={bar} 
                    className={`w-1 rounded-full bg-teal-500/60 transition-all duration-500 ${
                      isPlaying ? 'animate-[pulse_1s_ease-in-out_infinite]' : 'h-1'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.floor(Math.random() * 20) + 4}px` : '4px',
                      animationDelay: `${bar * 0.08}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Live Transcript Box */}
            <div className="glass-medally border border-border rounded-[2rem] p-8 flex flex-col flex-grow min-h-[340px]">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Live Dialogue Stream</span>
                <span className="text-[10px] font-mono bg-muted border border-border text-muted-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'}`} />
                  00:{currentStepIndex < 0 ? '00' : script[currentStepIndex].time.split(':')[1]}
                </span>
              </div>

              <div className="flex-grow overflow-y-auto space-y-4 max-h-[300px] pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {transcript.length === 0 ? (
                            <div className="h-full flex items-center justify-center text-center py-12">
                              <p className="text-xs text-muted-foreground/50 italic">Waiting for encounter input stream...</p>
                            </div>
                  ) : (
                    transcript.map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                          item.speaker === 'Doctor' 
                            ? 'bg-[#36b7b5]/5 border-[#36b7b5]/20 self-start mr-8' 
                            : 'bg-muted/40 border-border self-end ml-8'
                        }`}
                      >
                        <span className={`font-extrabold tracking-wider uppercase text-[9px] block mb-1 ${
                          item.speaker === 'Doctor' ? 'text-[#36b7b5]' : 'text-muted-foreground'
                        }`}>
                          {item.speaker}
                        </span>
                        <p className="text-foreground/90 font-light">{item.text}</p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Column 2: Dynamic Command Dock (Fleet status) */}
          <div className="lg:col-span-3 flex flex-col glass-medally border border-border rounded-[2rem] p-8 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-teal-500" />
                <h3 className="text-base font-bold text-foreground tracking-tight">Agent Command Dock</h3>
              </div>
              <p className="text-[11px] text-muted-foreground font-light leading-relaxed mb-8 pb-4 border-b border-border">
                Watch which sub-nodes activate automatically as contextual cues are spoken.
              </p>

              <div className="space-y-3">
                {[
                  { id: 'ScribeAI', label: 'ScribeAI', task: 'Voice-to-Structure', icon: FileAudio },
                  { id: 'DocFlow', label: 'DocFlow', task: 'SOAP Map Orchestrator', icon: Sparkles },
                  { id: 'Diagnostix', label: 'Diagnostix', task: 'Predictive Diff Engines', icon: Activity },
                  { id: 'RxGen', label: 'RxGen', task: 'Contraindication Sentry', icon: ShieldCheck },
                  { id: 'Codex', label: 'Codex', task: 'Revenue/CPT Generator', icon: WalletCards },
                  { id: 'Follow-up', label: 'Follow-Up', task: 'EHR Loop Scheduling', icon: CheckCircle2 }
                ].map((agent) => {
                  const isActive = activeAgents.includes(agent.id);
                  const AgentIcon = agent.icon;
                  return (
                    <div 
                      key={agent.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-500 ${
                        isActive 
                          ? 'bg-teal-500/10 border-[#36b7b5] shadow-md translate-x-1 scale-[1.02]' 
                          : 'bg-muted/20 border-border/40 opacity-60'
                      }`}
                    >
                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${
                        isActive ? 'bg-[#36b7b5] text-white' : 'bg-muted text-muted-foreground'
                      }`}>
                        <AgentIcon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                      </div>
                      <div>
                        <p className={`text-xs font-bold tracking-tight transition-colors duration-500 ${isActive ? 'text-[#36b7b5]' : 'text-foreground'}`}>
                          {agent.label}
                        </p>
                        <p className="text-[9px] text-muted-foreground uppercase font-medium tracking-wider">{agent.task}</p>
                      </div>
                      {isActive && (
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-500 animate-ping" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-8 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Fleet Synchronized</p>
            </div>
          </div>

          {/* Column 3: The High-Fidelity Clinical Record */}
          <div className="lg:col-span-5 flex flex-col glass-medally border border-border rounded-[2rem] p-8 min-h-[500px]">
            <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
              <div>
                <h3 className="text-base font-bold text-foreground tracking-tight">Structured SOAP Record</h3>
                <p className="text-[10px] text-muted-foreground font-light">MedAlly Platform Draft v4.2</p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-teal-500/10 border border-teal-500/20 text-[#36b7b5] px-3 py-1 rounded-full">
                Live Draft
              </span>
            </div>

            <div className="space-y-5 flex-grow overflow-y-auto max-h-[480px] pr-1 custom-scrollbar">
              {/* SOAP Section Component */}
              {[
                { key: 'subjective', title: 'S • Subjective' },
                { key: 'objective', title: 'O • Objective' },
                { key: 'assessment', title: 'A • Assessment' },
                { key: 'plan', title: 'P • Plan' },
              ].map((section) => {
                const content = soapNote[section.key as keyof typeof soapNote];
                const isUpdatingNow = currentStepIndex >= 0 && script[currentStepIndex].soapUpdate.field === section.key;
                return (
                  <div key={section.key} className={`p-4 rounded-2xl border bg-card/50 transition-all duration-500 ${
                    isUpdatingNow ? 'border-[#36b7b5]/50 bg-[#36b7b5]/5 ring-1 ring-[#36b7b5]/20' : 'border-border/50'
                  }`}>
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#36b7b5] mb-2">{section.title}</h4>
                    {content ? (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-foreground font-light leading-relaxed whitespace-pre-line"
                      >
                        {content}
                      </motion.p>
                    ) : (
                      <p className="text-xs text-muted-foreground/30 italic">Awaiting conversational parsing...</p>
                    )}
                  </div>
                );
              })}

              {/* Revenue Mapping Bottom Block */}
              <div className={`p-4 rounded-2xl border transition-all duration-500 ${
                soapNote.billing ? 'border-purple-500/30 bg-purple-500/5' : 'border-dashed border-border bg-muted/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-purple-500 dark:text-purple-400">Revenue Mapping (MedAlly Codex)</h4>
                  {soapNote.billing && <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />}
                </div>
                {soapNote.billing ? (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-foreground font-bold font-mono leading-relaxed whitespace-pre-line bg-background/60 p-3 rounded-xl border border-purple-500/10"
                  >
                    {soapNote.billing}
                  </motion.p>
                ) : (
                  <p className="text-[11px] text-muted-foreground/40 italic">ICD-10/CPT context will populate upon diagnosis/plan capture.</p>
                )}
              </div>
            </div>
          </div>

        </MotionReveal>
      </div>
    </section>
  );
};

export default LiveEncounterDemo;
