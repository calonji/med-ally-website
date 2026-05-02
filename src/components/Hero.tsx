// @ts-nocheck
import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import ClinicalCommandLayer from '@/components/ClinicalCommandLayer';

const Hero: FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-16%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0.82, 0.96]);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-slate-950 text-white"
    >
      <motion.img
        src="/images/medally/clinical-hero.webp"
        alt="Physician reviewing AI-assisted clinical documentation in a modern exam room"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        style={{ y: imageY, scale: imageScale }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-slate-950/86 to-slate-950/20"
        style={{ opacity: veilOpacity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(54,183,181,0.18),transparent_28%),radial-gradient(circle_at_54%_70%,rgba(75,38,131,0.22),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:84px_84px] opacity-25" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 to-transparent" />
      <motion.div
        className="relative z-10 flex min-h-[100svh] items-center pt-20"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="max-w-2xl rounded-lg border border-white/10 bg-black/28 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.p
                className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-teal-100/90"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ShieldCheck className="h-4 w-4" />
                HIPAA-aware clinical AI
              </motion.p>

              <motion.h1
                className="flex items-center gap-5 text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
              >
                <span className="sr-only">MedAlly clinical AI platform for physicians</span>
                <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 ring-1 ring-white/25 sm:h-24 sm:w-24">
                  <Logo className="h-16 w-16 sm:h-20 sm:w-20" />
                </span>
                <span aria-hidden="true" className="bg-gradient-to-r from-white via-teal-50 to-teal-100 bg-clip-text text-transparent">
                  MedAlly
                </span>
              </motion.h1>

              <motion.h2
                className="mt-7 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
              >
                The clinical command layer for every encounter.
              </motion.h2>

              <motion.p
                className="mt-6 max-w-xl text-lg leading-8 text-white/82 sm:text-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: 'easeOut' }}
              >
                MedAlly listens, structures, checks, codes, and routes clinical work while the
                physician stays in control of every decision.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.48, ease: 'easeOut' }}
              >
                <a
                  href="https://app.medally.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-slate-950 shadow-xl shadow-teal-950/30 transition hover:-translate-y-0.5 hover:bg-teal-50 hover:text-slate-950"
                >
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://www.calonji.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 hover:text-white"
                >
                  Book a demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: 'easeOut' }}
            >
              <ClinicalCommandLayer />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
