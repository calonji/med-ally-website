// @ts-nocheck
import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import ClinicalCommandLayer from '@/components/ClinicalCommandLayer';
import { MotionReveal } from './MotionReveal';

const Hero: FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground pt-24 pb-16 lg:pt-32 lg:pb-24 transition-colors duration-300"
    >
      {/* Background Image with hardware-accelerated scaling */}
      <motion.div 
        style={{ y: imageY, scale, opacity }} 
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/85 z-10 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 transition-colors duration-300" />
        <img
          src="/images/medally/clinical-hero.webp"
          alt="Modern Clinical Environment"
          className="h-full w-full object-cover opacity-25 dark:opacity-40 mix-blend-luminosity filter dark:saturate-50 transition-opacity duration-300"
        />
      </motion.div>

      {/* Cinematic Noise & Dynamic Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-25" style={{ backgroundImage: 'radial-gradient(hsla(var(--foreground) / 0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#36b7b5]/5 dark:bg-[#36b7b5]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[10s]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4b2683]/5 dark:bg-[#4b2683]/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <MotionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted/50 text-xs font-semibold text-primary tracking-widest uppercase mb-8 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                Enterprise Grade • HIPAA Compliant
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-editorial mb-6 leading-[1.1]">
                The clinical <span className="text-gradient-teal font-light">command layer</span> for every encounter.
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl font-light leading-relaxed mb-10">
                MedAlly listens, ambiently structures, and autonomously orchestrates clinical documentation, diagnostics, and billing workflows—keeping the physician fully in control.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://app.medally.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-foreground text-background dark:bg-white dark:text-[#030712] font-bold shadow-xl hover:shadow-teal-500/10 hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] group text-center"
                >
                  Start MedAlly Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.calonji.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border border-border bg-muted/30 backdrop-blur-md text-foreground/90 hover:text-foreground font-bold hover:bg-muted/60 hover:border-border/80 transition-all duration-300 text-center"
                >
                  Schedule Private Briefing
                </a>
              </div>
            </MotionReveal>

            {/* Floating Trust/Metric Badges */}
            <MotionReveal delay={0.4} className="mt-16 pt-8 border-t border-border w-full max-w-xl flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#36b7b5]/10 border border-[#36b7b5]/20 flex items-center justify-center text-[#36b7b5]">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Clinician Time</p>
                  <p className="text-sm font-bold text-foreground">80% note reduction</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#4b2683]/10 border border-[#4b2683]/20 flex items-center justify-center text-purple-500 dark:text-purple-300">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Diagnostic Engine</p>
                  <p className="text-sm font-bold text-foreground">93% accuracy scale</p>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right: Clinical Command Layer Visualization */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
            {/* Surrounding ambient glow */}
            <div className="absolute inset-0 bg-[#36b7b5]/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen scale-75 pointer-events-none" />
            
            <MotionReveal delay={0.2} direction="left" className="w-full flex items-center justify-center">
              <ClinicalCommandLayer />
            </MotionReveal>

            {/* Premium Floating Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 left-0 glass-obsidian p-5 rounded-3xl shadow-2xl max-w-[260px] flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg text-white shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-wide text-foreground uppercase">Real-time Synthesis</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">Ambience converted into billing ready SOAP note instantly.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
