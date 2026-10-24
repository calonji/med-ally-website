import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Database,
  FileText,
  Brain,
  CheckCircle2,
  XCircle,
  Zap,
  Users,
  Clock,
  Shield,
} from 'lucide-react';

const HowItWorks: FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Integrate MedAlly with your EHR',
      description:
        'Simple setup with all major electronic health record systems. No disruption to your existing workflows.',
      icon: <Database className="w-10 h-10" />,
      color: 'blue',
      details: [
        'One-click integration with Epic, Cerner, Allscripts, and 20+ other EHRs',
        'Secure API connections with end-to-end encryption',
        'Zero downtime implementation with 24/7 technical support',
        'Customizable interface that matches your existing workflow',
      ],
      stats: '15 minutes average setup time',
    },
    {
      id: 2,
      title: 'Let AI handle documentation, diagnosis & admin tasks',
      description:
        'Our 16 AI agents work together to automate clinical documentation, assist with diagnoses, and streamline administrative tasks.',
      icon: <Brain className="w-10 h-10" />,
      color: 'purple',
      details: [
        'Real-time SOAP note generation from patient conversations',
        'Automated ICD-10 and CPT coding with 99.8% accuracy',
        'AI-powered differential diagnosis suggestions based on latest research',
        'Smart scheduling and patient follow-up management',
      ],
      stats: '70% reduction in administrative work',
    },
    {
      id: 3,
      title: 'Focus on patient care while AI optimizes workflows',
      description:
        'Spend more time with patients while MedAlly handles the paperwork, improves accuracy, and boosts your practice efficiency.',
      icon: <FileText className="w-10 h-10" />,
      color: 'emerald',
      details: [
        'Average of 2 additional hours per day for direct patient care',
        'Reduced physician burnout with 94% reporting improved work-life balance',
        'Enhanced clinical decision-making with AI-assisted insights',
        'Increased practice revenue through optimized billing and coding',
      ],
      stats: '35% increase in patient satisfaction scores',
    },
  ];

  // Comparison between MedAlly's approach and traditional AI
  const comparisonPoints = [
    {
      title: 'Physician Control',
      medally: 'Physicians maintain full control and final decision-making authority',
      traditional: 'Black-box decisions with limited physician oversight',
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: 'Workflow Integration',
      medally: 'Seamlessly integrates into existing clinical workflows',
      traditional: 'Requires physicians to adapt to rigid AI processes',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: 'Learning Approach',
      medally: 'Learns from your practice patterns and preferences',
      traditional: 'One-size-fits-all approach with limited customization',
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: 'Time Savings',
      medally: 'Reduces administrative burden by up to 70%',
      traditional: 'Often creates additional documentation steps',
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: 'Data Security',
      medally: 'HIPAA compliant with end-to-end encryption',
      traditional: 'Variable security standards and compliance',
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  // Color mapping helper for theme compliance
  const stepColors = {
    blue: {
      bg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      accent: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50 dark:bg-blue-950/20 border-blue-500/20 text-foreground dark:text-foreground/90",
      badge: "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400",
      icon: "text-blue-500"
    },
    purple: {
      bg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      accent: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-50 dark:bg-purple-950/20 border-purple-500/20 text-foreground dark:text-foreground/90",
      badge: "bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400",
      icon: "text-purple-500"
    },
    emerald: {
      bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      accent: "from-emerald-500 to-emerald-600",
      lightBg: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/20 text-foreground dark:text-foreground/90",
      badge: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400",
      icon: "text-emerald-500"
    }
  };

  return (
    <section id="how-it-works" className="bg-background transition-colors duration-300 overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto mb-24 bg-card rounded-2xl shadow-lg backdrop-blur-sm overflow-hidden border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-11 bg-gradient-to-r from-[#36b7b5]/10 to-[#4b2683]/10 p-6 font-bold text-center border-b border-border">
            <div className="md:col-span-3 text-foreground text-lg">Comparison</div>
            <div className="md:col-span-4 text-teal-600 dark:text-teal-400 text-lg">MedAlly Approach</div>
            <div className="md:col-span-4 text-muted-foreground text-lg">Traditional AI</div>
          </div>

          {comparisonPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-11 p-6 ${index % 2 === 0 ? 'bg-muted/10' : 'bg-card/50'} border-b border-border/40 last:border-0 transition-colors`}
            >
              <div className="md:col-span-3 flex items-center gap-2 font-medium text-foreground mb-4 md:mb-0 text-base">
                {point.icon}
                <span className="font-semibold">{point.title}</span>
              </div>
              <div className="md:col-span-4 flex items-start gap-2 text-foreground/90 mb-4 md:mb-0 text-base">
                <CheckCircle2 className="w-5 h-5 text-teal-500 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{point.medally}</span>
              </div>
              <div className="md:col-span-4 flex items-start gap-2 text-muted-foreground text-base">
                <XCircle className="w-5 h-5 text-red-500/70 flex-shrink-0 mt-0.5" />
                <span>{point.traditional}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {steps.map((step, index) => {
            const colorTheme = stepColors[step.color as keyof typeof stepColors];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-8 mb-20 relative z-10">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorTheme.accent} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3`}
                    >
                      <span className="text-3xl font-bold">{step.id}</span>
                    </div>
                  </div>

                  <div className="flex-grow pt-2">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 mr-4 rounded-full ${colorTheme.bg}`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
                    </div>

                    <p className="text-lg text-muted-foreground mb-5 leading-relaxed">{step.description}</p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 'auto' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                      className={`rounded-2xl p-6 mb-6 border border-border ${colorTheme.lightBg}`}
                    >
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.2 + i * 0.1 }}
                            className="flex items-start text-base leading-relaxed"
                          >
                            <CheckCircle2
                              className={`w-5 h-5 mr-3 mt-0.5 ${colorTheme.icon} flex-shrink-0`}
                            />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                      className={`inline-block px-4 py-2 rounded-full font-semibold text-sm border border-border ${colorTheme.badge}`}
                    >
                      {step.stats}
                    </motion.div>

                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        className="hidden md:block h-[2px] bg-border mt-12 flex-grow relative overflow-hidden rounded-full"
                      >
                        <motion.div
                          initial={{ x: '-100%' }}
                          whileInView={{ x: '0%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                          className={`absolute inset-0 bg-gradient-to-r ${colorTheme.accent} rounded-full`}
                        />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Connector line for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-10 top-20 bottom-0 w-[2px] bg-border z-0 rounded-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className={`w-full bg-gradient-to-b ${colorTheme.accent} rounded-full`}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto my-20 p-10 rounded-2xl bg-card border border-border shadow-md backdrop-blur-sm relative"
        >
          <div className="text-6xl text-teal-500/10 absolute top-4 left-4 font-serif">"</div>
          <div className="relative z-10">
            <p className="text-xl italic text-foreground/90 mb-4 text-center leading-relaxed font-medium">
              MedAlly's AI doesn't replace my clinical judgment—it enhances it. For the first time,
              I have an AI assistant that adapts to my practice style instead of forcing me to
              change how I work.
            </p>
          </div>
          <div className="text-6xl text-purple-500/10 absolute bottom-4 right-4 font-serif">"</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/30 border border-border text-foreground/90 text-sm shadow-sm backdrop-blur-sm hover:bg-muted/50 transition-colors duration-300">
            <span className="font-medium">AI-driven medical decision-making</span>
            <ArrowRight className="w-4 h-4 text-teal-500" />
            <span className="font-medium">Predictive analytics in healthcare</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
