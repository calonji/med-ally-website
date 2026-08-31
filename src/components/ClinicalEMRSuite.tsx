import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FileSpreadsheet,
  FileText,
  Activity,
  Search,
  PlusCircle,
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

const emrModules = [
  {
    id: 'encounter',
    name: 'Encounter Dashboard',
    tagline: 'High-level case overview',
    icon: <LayoutDashboard className="w-4 h-4" />,
    color: 'teal',
    accent: '#0d9488'
  },
  {
    id: 'labs',
    name: 'Lab Analysis Suite',
    tagline: 'Interpreted clinical biomarkers',
    icon: <FileSpreadsheet className="w-4 h-4" />,
    color: 'indigo',
    accent: '#4f46e5'
  },
  {
    id: 'soap',
    name: 'Autopilot SOAP Note',
    tagline: 'Structured notes & billing tags',
    icon: <FileText className="w-4 h-4" />,
    color: 'purple',
    accent: '#9333ea'
  },
  {
    id: 'diagnostics',
    name: 'Clinical Diagnostics',
    tagline: 'Automated risk stratification',
    icon: <Activity className="w-4 h-4" />,
    color: 'rose',
    accent: '#e11d48'
  }
];

export const ClinicalEMRSuite: FC = () => {
  const [activeId, setActiveId] = useState('encounter');

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden border-b border-border bg-muted/10">
      {/* Animated geometric accent rings */}
      <div className="absolute -right-[10%] top-[20%] w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(13,148,136,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -left-[10%] bottom-[10%] w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(79,70,229,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Headline section */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            Sovereign EMR Ecosystem
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-editorial leading-[1.1] tracking-tight mb-8">
            One Unified <br />
            <span className="text-gradient-teal italic font-light">Clinical Command System.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
            MedAlly isn't just a scribe—it is your complete, native Electronic Medical Record platform. From real-time encounter hydration to automated coding and lab interpretation, the entire lifecycle of care lives in one elegant interface.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">

          {/* Left Navigation Pane */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 px-3">
              Explore Product Workspaces
            </p>
            {emrModules.map((mod) => {
              const isActive = activeId === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveId(mod.id)}
                  className={`group relative w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.01] ${isActive
                      ? 'bg-card border-border shadow-lg'
                      : 'border-border/40 bg-card/30 hover:border-border hover:bg-card/50'
                    }`}
                  style={{
                    borderLeftColor: isActive ? mod.accent : undefined,
                    borderLeftWidth: isActive ? '4px' : undefined
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? `${mod.accent}15` : 'rgba(var(--muted), 0.3)',
                        color: isActive ? mod.accent : 'currentColor'
                      }}
                    >
                      {mod.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold text-base transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {mod.name}
                      </h4>
                      <p className="text-xs text-muted-foreground/70 font-light mt-0.5">
                        {mod.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-muted-foreground/50 transition-transform duration-300 ${isActive ? 'translate-x-1 opacity-100 text-foreground' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>

          {/* Right App Workspace Simulator */}
          <div className="lg:col-span-8 relative rounded-[2rem] border border-border overflow-hidden bg-[#f8fafc] dark:bg-slate-950 shadow-2xl min-h-[520px] flex flex-col">

            {/* Real Browser/App Bar Styling */}
            <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 flex items-center justify-between px-4 py-3 shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-6 px-3 bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 rounded-full flex items-center gap-2 text-[10px] text-muted-foreground font-medium select-none max-w-[220px] md:max-w-none overflow-hidden text-ellipsis whitespace-nowrap">
                  <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                  beta.app.medally.ai/lab-encounters?id=4d252725
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border border-teal-500/30 bg-teal-500/5 text-teal-600">
                  EMR Live
                </div>
              </div>
            </div>

            {/* Main App Content Area (Sidebar + Viewport mockup) */}
            <div className="flex-grow flex overflow-hidden">

              {/* Mini Mock Sidebar (Matches screenshots) */}
              <div className="w-16 md:w-48 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-2 md:p-4 flex flex-col gap-6 hidden sm:flex select-none">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-3 pl-2 hidden md:block">Clinical</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-xs font-medium"><LayoutDashboard className="w-4 h-4 shrink-0" /><span className="hidden md:inline">Dashboard</span></div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-teal-500/10 text-teal-600 text-xs font-bold border-l-2 border-teal-500"><div className="flex items-center gap-3"><Search className="w-4 h-4 shrink-0" /><span className="hidden md:inline">Find Records</span></div></div>
                    <div className="flex items-center gap-3 p-2 rounded-lg text-slate-400 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800/40"><PlusCircle className="w-4 h-4 shrink-0" /><span className="hidden md:inline">New Encounter</span></div>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-3 pl-2 hidden md:block">Encounter</p>
                  <div className="space-y-1">
                    {emrModules.map(m => (
                      <div
                        key={m.id}
                        className={`flex items-center gap-3 p-2 rounded-lg text-xs font-medium transition-all ${activeId === m.id
                            ? 'bg-slate-100 dark:bg-slate-800 text-foreground shadow-sm'
                            : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                          }`}
                      >
                        <div className="shrink-0">{m.icon}</div>
                        <span className="hidden md:inline truncate">{m.name.split(' ')[0]} {m.name.split(' ')[1] || ''}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module Workspace Viewport */}
              <div className="flex-grow p-4 sm:p-6 overflow-y-auto bg-[#fcfdfd] dark:bg-slate-950 transition-colors duration-300 text-slate-800 dark:text-slate-200">

                {/* Workspace Header (Derived directly from screenshot) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-slate-200 dark:border-slate-800 mb-5 gap-3 select-none">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400 font-mono tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Selected Clinical Encounter
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight mt-1 flex items-center gap-2">
                      Initial: Community-acquired pneumonia
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-[10px] font-mono bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-800">
                      ID: 4D252725
                    </div>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {/* MODULE 1: ENCOUNTER DASHBOARD */}
                  {activeId === 'encounter' && (
                    <motion.div
                      key="encounter"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5 font-sans"
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Encounter Date</span>
                          <p className="font-bold mt-1 text-sm">04 May 2026</p>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Chief Complaint</span>
                          <p className="font-bold mt-1 text-sm truncate text-teal-600">Fever, cough, shortness of breath</p>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Vitals Baseline</span>
                          <p className="font-bold mt-1 text-sm text-rose-500">138/86 mmHg • 104 bpm</p>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">History of Present Illness</h4>
                        <p className="text-xs sm:text-sm leading-relaxed font-light">
                          Patient reports 4 days of fever with chills, cough producing yellow sputum, fatigue, and mild shortness of breath on exertion. Symptoms began gradually and worsened over the last 48 hours. Denies chest pain, hemoptysis, recent travel, or known sick contacts.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Examination</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                          <div><span className="block text-[10px] font-bold text-slate-400">Respiratory</span>Reduced air entry right lower zone</div>
                          <div><span className="block text-[10px] font-bold text-slate-400">Cardiovascular</span>Tachycardic, regular, no murmur</div>
                          <div><span className="block text-[10px] font-bold text-slate-400">Oxygen Sat</span>93% on room air</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* MODULE 2: LAB ANALYSIS */}
                  {activeId === 'labs' && (
                    <motion.div
                      key="labs"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-4 mb-4 select-none">
                        <div className="flex items-center gap-1 text-rose-600 bg-rose-500/10 px-2 py-1 rounded text-xs font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" /> 3 Abnormal
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 bg-slate-100 dark:bg-slate-900 dark:text-slate-400 px-2 py-1 rounded text-xs font-bold">
                          1 Normal
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              <th className="p-3 pl-4">Status</th>
                              <th className="p-3">Result</th>
                              <th className="p-3">Value</th>
                              <th className="p-3">Reference</th>
                              <th className="p-3 pr-4 hidden md:table-cell">Interpretation</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr>
                              <td className="p-3 pl-4"><span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-600 font-bold uppercase text-[9px]">High</span></td>
                              <td className="p-3 font-semibold">C-Reactive Protein</td>
                              <td className="p-3 font-mono font-bold">76 mg/L</td>
                              <td className="p-3 text-slate-400">0-5 mg/L</td>
                              <td className="p-3 pr-4 text-muted-foreground hidden md:table-cell font-light">Suggests active systemic inflammation.</td>
                            </tr>
                            <tr>
                              <td className="p-3 pl-4"><span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 font-bold uppercase text-[9px]">Moderate</span></td>
                              <td className="p-3 font-semibold">White Blood Cells</td>
                              <td className="p-3 font-mono font-bold">14,800/uL</td>
                              <td className="p-3 text-slate-400">4k-11k/uL</td>
                              <td className="p-3 pr-4 text-muted-foreground hidden md:table-cell font-light">Elevated WBC indicates acute infection.</td>
                            </tr>
                            <tr>
                              <td className="p-3 pl-4"><span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 font-bold uppercase text-[9px]">Moderate</span></td>
                              <td className="p-3 font-semibold">Blood Glucose</td>
                              <td className="p-3 font-mono font-bold">212 mg/dL</td>
                              <td className="p-3 text-slate-400">70-130 mg/dL</td>
                              <td className="p-3 pr-4 text-muted-foreground hidden md:table-cell font-light">Hyperglycemia risk during acute illness.</td>
                            </tr>
                            <tr>
                              <td className="p-3 pl-4"><span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold uppercase text-[9px]">Normal</span></td>
                              <td className="p-3 font-semibold">Serum Creatinine</td>
                              <td className="p-3 font-mono font-bold">1.0 mg/dL</td>
                              <td className="p-3 text-slate-400">0.6-1.2 mg/dL</td>
                              <td className="p-3 pr-4 text-muted-foreground hidden md:table-cell font-light">Baseline kidney filtration looks clear.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* MODULE 3: SOAP NOTE */}
                  {activeId === 'soap' && (
                    <motion.div
                      key="soap"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 text-xs font-mono"
                    >
                      <div className="p-5 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm space-y-4 leading-relaxed">
                        <div>
                          <span className="font-bold text-teal-600 uppercase text-[10px] tracking-widest border-b border-teal-600/30 pb-0.5 mb-2 block">Subjective</span>
                          <p className="text-slate-600 dark:text-slate-300 font-light">
                            Patient reports 4 days of fever, chills, and productive cough producing yellow sputum. Mild exertional dyspnea <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border font-bold text-[9px] text-indigo-600">(ICD-10: R50.9)</span>. No chest pain reported.
                          </p>
                        </div>

                        <div>
                          <span className="font-bold text-teal-600 uppercase text-[10px] tracking-widest border-b border-teal-600/30 pb-0.5 mb-2 block">Objective</span>
                          <p className="text-slate-600 dark:text-slate-300 font-light">
                            Vitals: Temp 38.6 C, BP 138/86, SpO2 93%. Lungs: Reduced air entry right lower zone with crackles. Labs: CRP 76 <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border font-bold text-[9px] text-indigo-600">(ICD-10: R79.9)</span>.
                          </p>
                        </div>

                        <div>
                          <span className="font-bold text-purple-600 uppercase text-[10px] tracking-widest border-b border-purple-600/30 pb-0.5 mb-2 block">Assessment</span>
                          <p className="text-slate-600 dark:text-slate-300 font-semibold">
                            Community-acquired pneumonia, suspected bacterial <span className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 font-bold text-[9px] text-purple-600">(ICD-10: J18.9)</span>.
                          </p>
                        </div>

                        <div>
                          <span className="font-bold text-teal-600 uppercase text-[10px] tracking-widest border-b border-teal-600/30 pb-0.5 mb-2 block">Plan</span>
                          <p className="text-slate-600 dark:text-slate-300 font-light">
                            - Prescribe oral antibiotics for pneumonia <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border font-bold text-[9px] text-teal-600">(CPT: 99213)</span>.<br />
                            - Supportive care, hydration, monitor blood glucose.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* MODULE 4: DIAGNOSTICS */}
                  {activeId === 'diagnostics' && (
                    <motion.div
                      key="diagnostics"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-3 gap-4 text-xs select-none">
                        <div className="p-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                          <span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider mb-2 block">Risk Factors</span>
                          <div className="space-y-1.5 font-semibold">
                            <div className="flex items-center gap-2 text-rose-600"><div className="w-1 h-1 rounded-full bg-rose-600" /> Pneumonia</div>
                            <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-400" /> Diabetes</div>
                            <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-400" /> Hypertension</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                          <span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider mb-2 block">Clinical Indicators</span>
                          <div className="space-y-1.5 font-semibold">
                            <div className="flex items-center gap-2 text-rose-600"><div className="w-1 h-1 rounded-full bg-rose-600" /> Fever</div>
                            <div className="flex items-center gap-2 text-rose-600"><div className="w-1 h-1 rounded-full bg-rose-600" /> Infection</div>
                            <div className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-400" /> Tachycardia</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                          <span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider mb-2 block">Chief Complaints</span>
                          <div className="space-y-1.5 font-semibold">
                            <div className="flex items-center gap-2 text-indigo-600"><div className="w-1 h-1 rounded-full bg-indigo-600" /> Pneumonia</div>
                            <div className="flex items-center gap-2 text-indigo-600"><div className="w-1 h-1 rounded-full bg-indigo-600" /> Respiratory</div>
                            <div className="flex items-center gap-2 text-slate-400"><div className="w-1 h-1 rounded-full bg-slate-400" /> Cough</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl border border-slate-200/60 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                          <Info className="w-3.5 h-3.5 text-indigo-500" />
                          Chief Complaint Analysis
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed font-light">
                          Community-acquired pneumonia <span className="text-purple-600 font-semibold">(ICD-10: J18.9)</span> with right lower lobe consolidation; chest X-ray <span className="text-teal-600 font-semibold">(CPT: 71045)</span>. Fever, productive cough, dyspnea; antibiotics indicated. Monitor blood glucose for hyperglycemia. Consider sputum culture.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-2 px-6 flex items-center justify-between text-[10px] text-muted-foreground shrink-0 font-mono select-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                All workflows HIPAA-validated
              </div>
              <div>MedAlly © 2026 Calonji, Inc.</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalEMRSuite;
