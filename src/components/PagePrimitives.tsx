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
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section ref={ref} className="relative bg-background text-foreground pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden transition-colors duration-300">
      {/* Central ambient radial light flare */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(54,183,181,0.1)_0%,transparent_55%)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          
          {/* Content & Copy Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 backdrop-blur-sm shadow-sm">
              {eyebrow}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-serif text-editorial leading-[1.1] tracking-tight mb-8">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-10">
              {intro}
            </p>
            
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-[1.02]"
              >
                {ctaLabel} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Architectural Floating Image Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/15 to-purple-500/15 blur-3xl opacity-60 rounded-[3rem]" />
            
            <div className="relative aspect-[4/3] rounded-[2.5rem] border border-border overflow-hidden bg-card shadow-2xl">
              <motion.img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover opacity-95 dark:opacity-80"
                style={{ y: imageY, scale: imageScale }}
              />
              {/* Subtle shadow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

        </div>
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
    <section className="relative overflow-hidden bg-background border-b border-border py-20 sm:py-28 transition-colors duration-300">
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
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-600 dark:text-teal-400">{eyebrow}</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-serif text-editorial leading-[1.1]">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{copy}</p>
        </motion.div>
        <motion.div
          ref={ref}
          className="relative min-h-[360px] overflow-hidden rounded-2xl border border-border bg-muted/20 shadow-md"
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export const AnswerBlock: FC<AnswerBlockProps> = ({ question, answer, points = [] }) => (
  <section className="relative bg-muted/30 border-b border-border py-16 text-foreground sm:py-20 transition-colors duration-300">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">Answer</p>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-serif text-editorial leading-[1.1]">{question}</h2>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{answer}</p>
        {points.length > 0 && (
          <div className="mt-8 divide-y divide-border border-y border-border">
            {points.map((point) => (
              <p key={point} className="py-4 text-base leading-7 text-muted-foreground">
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
  <section className="relative overflow-hidden bg-background border-b border-border py-20 sm:py-28 transition-colors duration-300">
    <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          className="group rounded-2xl border border-border bg-muted/20 p-6 shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:border-teal-500/30 hover:bg-muted/40"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, delay: index * 0.04 }}
        >
          {item.icon && (
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-600 dark:text-teal-400">
              {item.icon}
            </div>
          )}
          {item.meta && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-600/80 dark:text-teal-400/80">{item.meta}</p>
          )}
          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
        </motion.article>
      ))}
    </div>
  </section>
);
