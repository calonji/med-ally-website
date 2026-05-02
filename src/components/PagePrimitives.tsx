import { type FC, type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface ParallaxImageBandProps {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

interface AnswerBlockProps {
  question: string;
  answer: string;
  points?: string[];
}

interface DarkFeatureGridProps {
  items: Array<{
    title: string;
    copy: string;
    meta?: string;
    icon?: ReactNode;
  }>;
}

export const PageHero: FC<PageHeroProps> = ({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  ctaLabel = 'Join now',
  ctaHref = 'https://app.medally.ai/',
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.16]);

  return (
    <section ref={ref} className="relative min-h-[620px] overflow-hidden pt-28 text-white sm:min-h-[680px]">
      <motion.img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-[112%] w-full object-cover"
        style={{ y: imageY, scale: imageScale }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.62)_44%,rgba(0,0,0,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(54,183,181,0.22),transparent_34%),linear-gradient(180deg,transparent_58%,#000_100%)]" />
      <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-100/80">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{intro}</p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f8fafc] px-6 text-sm font-extrabold text-slate-950 shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#ccfbf1] hover:text-slate-950"
          >
            {ctaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export const ParallaxImageBand: FC<ParallaxImageBandProps> = ({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  reverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28">
      <div
        className={`mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-100/75">{eyebrow}</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{copy}</p>
        </motion.div>
        <motion.div
          ref={ref}
          className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/35"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <motion.img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-[118%] w-full object-cover"
            loading="lazy"
            style={{ y, scale }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export const AnswerBlock: FC<AnswerBlockProps> = ({ question, answer, points = [] }) => (
  <section className="relative bg-[#05070d] py-16 text-white sm:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-100/70">Answer</p>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{question}</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">{answer}</p>
        {points.length > 0 && (
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {points.map((point) => (
              <p key={point} className="py-4 text-base leading-7 text-slate-300">
                {point}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export const DarkFeatureGrid: FC<DarkFeatureGridProps> = ({ items }) => (
  <section className="relative overflow-hidden bg-black py-20 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          className="group rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-100/35 hover:bg-white/[0.08]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, delay: index * 0.04 }}
        >
          {item.icon && (
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-teal-100/20 bg-teal-200/10 text-teal-100">
              {item.icon}
            </div>
          )}
          {item.meta && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-100/60">{item.meta}</p>
          )}
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{item.copy}</p>
        </motion.article>
      ))}
    </div>
  </section>
);
