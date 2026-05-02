// @ts-nocheck
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Activity, BrainCircuit, FileCheck2, ShieldCheck, WalletCards } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const signals = [
  { label: 'Listen', icon: <Activity className="h-4 w-4" />, x: '14%', y: '47%' },
  { label: 'Note', icon: <FileCheck2 className="h-4 w-4" />, x: '33%', y: '14%' },
  { label: 'Reason', icon: <BrainCircuit className="h-4 w-4" />, x: '68%', y: '16%' },
  { label: 'Code', icon: <WalletCards className="h-4 w-4" />, x: '83%', y: '55%' },
  { label: 'Guard', icon: <ShieldCheck className="h-4 w-4" />, x: '48%', y: '80%' },
];

const ClinicalCommandLayer: FC = () => {
  return (
    <div className="clinical-command-layer relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-0 rounded-full bg-teal-300/10 blur-3xl" />
      <motion.div
        className="absolute inset-[5%] rounded-full border border-teal-200/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[15%] rounded-full border border-violet-200/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[27%] rounded-full border border-white/18"
        animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.24),rgba(54,183,181,0.14)_34%,rgba(11,16,29,0.8)_68%)] shadow-2xl shadow-teal-950/50 ring-1 ring-white/15" />
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-white shadow-2xl shadow-black/40 ring-1 ring-white/30"
        animate={{ y: [0, -10, 0], rotateX: [0, 8, 0], rotateY: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Logo className="h-20 w-20" />
      </motion.div>

      <div className="clinical-command-plane absolute inset-[12%] rounded-full">
        {signals.map((signal, index) => (
          <motion.div
            key={signal.label}
            className="absolute flex min-w-28 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-50 shadow-xl shadow-black/30 backdrop-blur-xl"
            style={{ left: signal.x, top: signal.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.06, 1],
              y: [0, index % 2 === 0 ? -8 : 8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.45 + index * 0.08 },
              scale: { duration: 4.2, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 4.2, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-200/15 text-teal-100">
              {signal.icon}
            </span>
            {signal.label}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 w-[72%] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        One encounter context across every agent
      </motion.div>
    </div>
  );
};

export default ClinicalCommandLayer;
