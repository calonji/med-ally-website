// @ts-nocheck
import { type FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  ClipboardCheck,
  FileCheck2,
  Mic2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TimerReset,
  WalletCards,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';

const workflowSteps = [
  {
    icon: <Mic2 className="h-5 w-5" />,
    title: 'Listen',
    copy: 'Capture the clinical conversation while the physician stays present with the patient.',
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: 'Draft',
    copy: 'Transform encounter context into a structured note with findings and follow-up detail.',
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: 'Review',
    copy: 'Keep the clinician in control with clear review before anything reaches the chart.',
  },
  {
    icon: <WalletCards className="h-5 w-5" />,
    title: 'Code',
    copy: 'Prepare coding and billing context while the encounter is still fresh.',
  },
];

const proofPoints = [
  ['70%', 'less documentation time'],
  ['93%', 'diagnostic accuracy target'],
  ['99.7%', 'coding precision target'],
];

const competitiveProof = [
  {
    label: 'More than a note',
    copy: 'Documentation, coding, clinical reasoning, follow-up, and review stay connected to the same encounter context.',
  },
  {
    label: 'Designed for physician review',
    copy: 'The physician sees a calm review path instead of another portal, dashboard, or disconnected assistant.',
  },
  {
    label: 'Operational context included',
    copy: 'Coding and billing context are prepared while the clinical story is still fresh, not after the chart closes.',
  },
];

const capabilities = [
  {
    title: 'Ambient documentation',
    copy: 'SOAP notes, patient summaries, handoffs, referrals, and follow-up instructions drafted from the encounter.',
  },
  {
    title: 'Clinical decision support',
    copy: 'Diagnostic, medication, guideline, and care-plan context surfaced while the physician reviews the note.',
  },
  {
    title: 'Revenue workflow support',
    copy: 'Coding, billing, prior authorization, and claim-prep signals stay connected to clinical documentation.',
  },
  {
    title: 'Physician-controlled automation',
    copy: 'Every generated output remains editable, auditable, and reviewable before it becomes part of the chart.',
  },
];

const productMoments = [
  {
    src: '/images/medally/product-ambient-scribe.png',
    alt: 'MedAlly ambient scribe interface on a laptop in an exam room',
    eyebrow: 'Ambient scribe',
    title: 'Stay with the patient while the note takes shape.',
    copy: 'The encounter becomes a live transcript and structured SOAP draft, ready for physician review before the next visit begins.',
  },
  {
    src: '/images/medally/product-differential-panel.png',
    alt: 'MedAlly differential diagnosis panel on a tablet',
    eyebrow: 'Decision support',
    title: 'See the reasoning, not just the recommendation.',
    copy: 'Differentials, confidence, labs, and history stay attached to the encounter so the clinician can verify every suggestion.',
  },
  {
    src: '/images/medally/product-billing-card.png',
    alt: 'MedAlly billing automation card with coding and denial risk',
    eyebrow: 'Billing support',
    title: 'Prepare the claim before context fades.',
    copy: 'CPT, ICD-10, reimbursement, and denial-risk signals stay connected to the clinical story instead of becoming a separate cleanup task.',
  },
];

const agentLayers = [
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: 'Documentation and multilingual capture',
    copy: 'Ambient notes, summaries, translations, referrals, and follow-up instructions begin from the same visit context.',
  },
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: 'Diagnostics and treatment support',
    copy: 'Differentials, medication safety, guideline checks, and care-plan suggestions stay visible for clinician review.',
  },
  {
    icon: <WalletCards className="h-5 w-5" />,
    title: 'Operations and revenue workflows',
    copy: 'Coding, billing, scheduling, authorization, and follow-up tasks are prepared while the encounter is still fresh.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Specialty adaptation and governance',
    copy: 'Specialty-specific workflows, audit trails, and physician approval keep automation useful without removing accountability.',
  },
];

const motionFrames = [
  { time: '00:00', title: 'Patient conversation', detail: 'Encounter audio becomes structured clinical context.' },
  { time: '00:12', title: 'Note draft', detail: 'SOAP sections, findings, and follow-up instructions assemble in sequence.' },
  { time: '00:24', title: 'Clinical checks', detail: 'Diagnosis, medication, and guideline signals attach to the same review surface.' },
  { time: '00:36', title: 'Billing context', detail: 'Coding support and documentation evidence stay visible before sign-off.' },
];

const MotionFilm: FC = () => (
  <motion.div
    className="relative overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(54,183,181,0.14),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-2xl shadow-black/30"
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.7 }}
  >
    <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
    <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-100/70">
          Encounter film
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">One visit becoming finished work</h3>
      </div>
      <motion.div
        className="hidden h-12 w-12 rounded-full border border-teal-100/30 bg-teal-200/10 sm:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
    <div className="relative mt-8">
      <motion.div
        className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-gradient-to-b from-teal-200 via-violet-200 to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <div className="space-y-7">
        {motionFrames.map((frame, index) => (
          <motion.div
            key={frame.title}
            className="relative grid grid-cols-[2rem_5rem_1fr] gap-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <span className="relative z-10 mt-1 h-8 w-8 rounded-full border border-teal-100/30 bg-black shadow-lg shadow-teal-950/60">
              <motion.span
                className="absolute inset-1 rounded-full bg-teal-200"
                animate={{ scale: [0.7, 1, 0.7], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
              />
            </span>
            <p className="pt-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-100/65">
              {frame.time}
            </p>
            <div className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-semibold text-white">{frame.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-400">{frame.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ParallaxImageBlock: FC<{
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
}> = ({ src, alt, eyebrow, title }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <motion.div
      ref={ref}
      className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 h-[120%] w-full object-cover"
        loading="lazy"
        style={{ y, scale }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-slate-950/34 to-transparent" />
      <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-100/90">
          {eyebrow}
        </p>
        <p className="mt-3 text-3xl font-bold leading-tight">{title}</p>
      </div>
    </motion.div>
  );
};

const LandingPage: FC = () => {
  const stageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ['-12%', '18%']);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.7], [0.15, 1]);

  return (
    <Layout>
      <SEO
        title="MedAlly | Clinical AI Platform for Physicians"
        description="MedAlly is a clinical AI platform that helps physicians reduce documentation burden, review clinical context, automate coding support, and keep encounter workflows connected."
        url="https://www.medally.ai/"
        image="/images/medally/clinical-hero.webp"
        imageAlt="MedAlly clinical AI platform for physician workflows"
        keywords={[
          'clinical AI platform',
          'physician AI assistant',
          'AI healthcare assistant',
          'AI clinical documentation',
          'clinical decision support',
          'medical coding automation',
        ]}
      />

      <main className="bg-black text-white">
        <section id="hero">
          <Hero />
        </section>

        <section
          ref={stageRef}
          className="relative overflow-hidden border-t border-white/10 bg-black py-24 sm:py-32"
        >
          <motion.div
            className="absolute left-[-18rem] top-20 h-[38rem] w-[38rem] rounded-full bg-teal-400/10 blur-3xl"
            style={{ y: glowY }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-teal-100/80">
                <Sparkles className="h-4 w-4" />
                One clinical loop
              </p>
              <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                From exam room conversation to chart-ready documentation.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                MedAlly turns the encounter into a calm review flow: listen, draft, review, and
                code. The work moves in the background. The physician remains accountable.
              </p>

              <div className="relative mt-12">
                <motion.div
                  className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px origin-top bg-gradient-to-b from-teal-300 via-teal-300/60 to-transparent"
                  style={{ scaleY: lineScale }}
                />
                <div className="space-y-5">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="relative grid grid-cols-[2.75rem_1fr] gap-5"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-teal-200/30 bg-teal-200/10 text-teal-100 backdrop-blur">
                        {step.icon}
                      </div>
                      <div className="border-b border-white/10 pb-5">
                        <h3 className="font-semibold text-white">{step.title}</h3>
                        <p className="mt-1 max-w-lg text-sm leading-6 text-slate-400">{step.copy}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <ParallaxImageBlock
              src="/images/medally/brand-two-screens-one-truth.png"
              alt="Clinician desk with MedAlly SOAP note and completed paper chart"
              eyebrow="Two screens, one truth"
              title="The chart, the conversation, and the note resolve into one finished record."
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#05070d] py-24 sm:py-32">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/40 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <motion.div
                className="lg:sticky lg:top-32 lg:self-start"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-100/75">
                  What stays in scope
                </p>
                <h2 className="mt-6 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  The full clinical admin burden, not just one note.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                  MedAlly brings the missing pieces back into one physician-led review flow:
                  documentation, reasoning, revenue context, and follow-up.
                </p>
              </motion.div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    className="grid gap-5 py-8 sm:grid-cols-[10rem_1fr] sm:py-10"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100/60">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                        {capability.copy}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black py-24 sm:py-32">
          <div className="absolute inset-0 bg-[url('/images/medally/brand-two-screens-one-truth.png')] bg-cover bg-center opacity-[0.08]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,194,178,0.16),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.78),#000_72%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-100/75">
                Built for busy clinic days
              </p>
              <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                From patient conversation to signed chart, without the after-hours catch-up.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                MedAlly keeps the transcript, SOAP note, evidence, and coding context in one
                reviewable workspace so clinicians can close the day with confidence.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {productMoments.map((moment, index) => (
                <motion.article
                  key={moment.title}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/35 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={moment.src}
                      alt={moment.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-100/70">
                      {moment.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      {moment.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{moment.copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black py-24 sm:py-32">
          <motion.div
            className="absolute right-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/12 blur-3xl"
            animate={{ y: [0, 34, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
            >
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-teal-100/75">
                <TimerReset className="h-4 w-4" />
                How MedAlly assists the workflow
              </p>
              <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                MedAlly helps physicians carry the encounter through to a calmer clinical day.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                MedAlly goes beyond transcription by assisting the whole encounter lifecycle:
                documentation, clinical context, follow-up, and coding remain connected in one
                physician-controlled review layer.
              </p>
              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {competitiveProof.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="py-6"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{item.copy}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <MotionFilm />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#05070d] py-24 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(54,183,181,0.18),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(75,38,131,0.32),transparent_38%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-100/75">
                  The 16-agent platform
                </p>
                <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  One assistant for the work that usually follows the visit.
                </h2>
              </motion.div>
              <motion.p
                className="max-w-2xl text-lg leading-8 text-slate-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                MedAlly’s agents coordinate documentation, diagnostics, treatment planning,
                patient communication, billing support, and specialty workflows. Clinicians stay
                in control before anything reaches the chart.
              </motion.p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <ParallaxImageBlock
                src="/images/medally/brand-16-agents-grid.png"
                alt="Sixteen MedAlly clinical workflow agents arranged above a hospital floor plan"
                eyebrow="Agent orchestration"
                title="Specialized agents working from the same patient encounter."
              />

              <div className="grid content-between gap-5">
                {agentLayers.map((layer, index) => (
                  <motion.div
                    key={layer.title}
                    className="group border-b border-white/10 pb-7"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="flex items-center gap-3 text-teal-100">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10 transition group-hover:bg-teal-300/15">
                        {layer.icon}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{layer.copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-black py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {proofPoints.map(([value, label], index) => (
              <motion.div
                key={value}
                className="border-l border-white/10 pl-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <p className="text-6xl font-extrabold tracking-tight text-white">{value}</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#05070d] py-24 text-white sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(54,183,181,0.15),transparent_34%)]" />
          <motion.div
            className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-100/75">
              Ready for fewer after-hours notes
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Put MedAlly beside every encounter.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Start with AI-assisted documentation, then expand into coordinated clinical,
              operational, and revenue workflows.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://app.medally.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50 hover:text-slate-950"
              >
                Start free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://www.calonji.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 hover:text-white"
              >
                Talk to the team
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
};

export default LandingPage;
