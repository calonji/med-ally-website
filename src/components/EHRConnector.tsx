import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Database, CheckCircle,
  RefreshCw, Check, Server, Laptop, Activity, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ehrVendors = [
  {
    id: 'epic',
    name: 'Epic Systems',
    color: '#c22629',
    bg: 'rgba(194, 38, 41, 0.05)',
    border: 'rgba(194, 38, 41, 0.3)'
  },
  {
    id: 'cerner',
    name: 'Oracle Cerner',
    color: '#005d8f',
    bg: 'rgba(0, 93, 143, 0.05)',
    border: 'rgba(0, 93, 143, 0.3)'
  },
  {
    id: 'athena',
    name: 'athenahealth',
    color: '#8b20bb',
    bg: 'rgba(139, 32, 187, 0.05)',
    border: 'rgba(139, 32, 187, 0.3)'
  },
  {
    id: 'elation',
    name: 'Elation Health',
    color: '#00a896',
    bg: 'rgba(0, 168, 150, 0.05)',
    border: 'rgba(0, 168, 150, 0.3)'
  },
  {
    id: 'eclinical',
    name: 'eClinicalWorks',
    color: '#f05d23',
    bg: 'rgba(240, 93, 35, 0.05)',
    border: 'rgba(240, 93, 35, 0.3)'
  }
];

type SyncState = 'idle' | 'authenticating' | 'transmitting' | 'complete';

export const EHRConnector: FC = () => {
  const [selectedVendor, setSelectedVendor] = useState(ehrVendors[0].id);
  const [syncState, setSyncState] = useState<SyncState>('idle');
  const [progress, setProgress] = useState(0);

  const activeVendor = ehrVendors.find(v => v.id === selectedVendor)!;

  const handleSync = () => {
    if (syncState !== 'idle') return;

    setSyncState('authenticating');
    setProgress(10);

    setTimeout(() => {
      setSyncState('transmitting');
      setProgress(40);

      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 90) {
            clearInterval(interval);
            return 90;
          }
          return p + 15;
        });
      }, 300);

      setTimeout(() => {
        clearInterval(interval);
        setSyncState('complete');
        setProgress(100);

        setTimeout(() => {
          setSyncState('idle');
          setProgress(0);
        }, 5000); // Reset after 5 seconds
      }, 2500);

    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,161,159,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-6">
            <RefreshCw className="w-3.5 h-3.5" /> Universal Integration
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Push directly to your <span className="text-gradient-teal">EHR.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No copy-pasting. MedAlly connects natively with your existing electronic health record system. Select your vendor to simulate the bi-directional sync.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr_400px] gap-8 items-center bg-card/30 border border-border rounded-3xl p-6 lg:p-8 backdrop-blur-sm shadow-2xl">

          {/* LEFT: VENDOR SELECTION */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 pl-2">Select Target System</h3>
            {ehrVendors.map((vendor) => {
              const isSelected = selectedVendor === vendor.id;
              return (
                <button
                  key={vendor.id}
                  onClick={() => {
                    if (syncState === 'idle') setSelectedVendor(vendor.id);
                  }}
                  disabled={syncState !== 'idle'}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${isSelected
                      ? 'shadow-lg scale-[1.02]'
                      : 'border-border/50 bg-background/50 hover:bg-background hover:border-border'
                    } ${syncState !== 'idle' && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{
                    backgroundColor: isSelected ? vendor.bg : undefined,
                    borderColor: isSelected ? vendor.color : undefined
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5" style={{ color: isSelected ? vendor.color : 'currentColor' }} />
                    <span className={`font-semibold ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {vendor.name}
                    </span>
                  </div>
                  {isSelected && <CheckCircle className="w-4 h-4" style={{ color: vendor.color }} />}
                </button>
              );
            })}
          </div>

          {/* MIDDLE: THE SYNC PIPELINE */}
          <div className="relative h-64 lg:h-full min-h-[200px] flex flex-col items-center justify-center">
            {/* Connection SVG Path */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-40">
              <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path
                  d="M 0,100 C 150,100 250,100 400,100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>

            {/* Sync Animation */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center gap-6 px-8">
              <Button
                onClick={handleSync}
                disabled={syncState !== 'idle'}
                className="relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 rounded-2xl w-full max-w-[240px] shadow-xl transition-all hover:scale-105 active:scale-95 group"
              >
                {syncState === 'idle' && (
                  <span className="flex items-center gap-2">
                    Start Handoff <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
                {syncState === 'authenticating' && (
                  <span className="flex items-center gap-2 text-teal-400">
                    <Lock className="w-4 h-4 animate-pulse" /> Securing API...
                  </span>
                )}
                {syncState === 'transmitting' && (
                  <span className="flex items-center gap-2 text-indigo-400">
                    <RefreshCw className="w-4 h-4 animate-spin" /> Pushing Data...
                  </span>
                )}
                {syncState === 'complete' && (
                  <span className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-4 h-4" /> Sync Verified
                  </span>
                )}

                {/* Progress Bar background in button */}
                {syncState !== 'idle' && (
                  <div className="absolute bottom-0 left-0 h-1 bg-teal-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                )}
              </Button>

              {/* Status Output Logs */}
              <div className="h-20 w-full max-w-[280px] bg-black/5 dark:bg-black/40 rounded-lg border border-border/50 p-3 font-mono text-[10px] sm:text-xs overflow-hidden flex flex-col justify-end">
                <AnimatePresence>
                  {syncState === 'authenticating' && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-slate-500 mb-1">
                      {`>`} Resolving {activeVendor.name} OAuth 2.0...<br />
                      {`>`} Exchanging BAA tokens...
                    </motion.div>
                  )}
                  {syncState === 'transmitting' && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-teal-600 dark:text-teal-400 mb-1">
                      {`>`} Secure tunnel established.<br />
                      {`>`} POST /api/v1/encounters (HL7 FHIR)<br />
                      {`>`} Uploading structured SOAP payload...
                    </motion.div>
                  )}
                  {syncState === 'complete' && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-600 dark:text-emerald-400">
                      {`>`} 201 Created. Data accepted.<br />
                      {`>`} EMR ID: ENC-8849-2A<br />
                      {`>`} Session terminated cleanly.
                    </motion.div>
                  )}
                </AnimatePresence>
                {syncState === 'idle' && <span className="text-muted-foreground/50">{`>`} Awaiting handoff command...</span>}
              </div>
            </div>
          </div>

          {/* RIGHT: MOCK EHR TERMINAL */}
          <div className="relative h-full min-h-[400px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden flex flex-col">
            {/* Terminal Header */}
            <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {activeVendor.name} - Patient Chart
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 relative bg-[#fcfdfd] dark:bg-[#0a0f1a]">
              <AnimatePresence mode="wait">
                {syncState === 'complete' ? (
                  <motion.div
                    key="hydrated"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col space-y-4"
                  >
                    {/* Patient Banner */}
                    <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold">
                        MR
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">Michael Reynolds</h4>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">DOB: 11/04/1982 • MRN: 948291</p>
                      </div>
                    </div>

                    {/* Chart Data */}
                    <div className="flex-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-4 overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chief Complaint</span>
                        <span className="text-[10px] bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded font-mono">Synced via MedAlly</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">Fever, chills, productive cough.</p>

                      <div className="space-y-2 mt-4 pt-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Assessment & Plan</span>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-md border border-slate-100 dark:border-slate-800 text-xs text-muted-foreground font-mono leading-relaxed">
                          <span className="text-purple-600 dark:text-purple-400 font-semibold">A:</span> Community-acquired pneumonia (J18.9). <br /><br />
                          <span className="text-teal-600 dark:text-teal-400 font-semibold">P:</span> Prescribed Azithromycin 500mg daily. Rest and hydration advised. Follow up in 48 hours if symptoms do not improve.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-3 opacity-50"
                  >
                    <Server className="w-12 h-12 text-slate-300 dark:text-slate-700" />
                    <div>
                      <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">Waiting for Data</p>
                      <p className="text-xs text-slate-400/70">Chart is currently empty. Run handoff from MedAlly to hydrate.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Data Overlay Scanning Effect during transmission */}
              <AnimatePresence>
                {syncState === 'transmitting' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-teal-500/5 flex flex-col items-center justify-center backdrop-blur-[2px] z-10"
                  >
                    <Activity className="w-10 h-10 text-teal-500 animate-pulse mb-3" />
                    <div className="h-1.5 w-32 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 animate-[pulse_1s_ease-in-out_infinite]" style={{ width: `${progress}%` }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EHRConnector;
