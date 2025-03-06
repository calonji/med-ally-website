import { type FC, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { BackgroundEffects } from '@/components/ui/background-effects';
import { Stethoscope, Brain, Activity, FileText, Microscope, Clipboard, Heart, Zap, Users } from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';
import { Button } from '@/components/ui/button';

type ColorVariant = 'teal' | 'purple' | 'yellow' | 'red';

const Features: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
    stats: string;
    color: ColorVariant;
    delay: number;
  }> = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'AI-Driven Documentation',
      description: 'Automate clinical documentation with multilingual capabilities and voice-to-text transcription',
      stats: '70% less documentation time',
      color: 'teal',
      delay: 0.1,
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Predictive Diagnostics',
      description: 'Analyze lab results, rank differential diagnoses, and prioritize testing based on patient data',
      stats: '93% diagnostic accuracy',
      color: 'purple',
      delay: 0.2,
    },
    {
      icon: <Clipboard className="w-8 h-8" />,
      title: 'Treatment Planning',
      description: 'Personalize treatment strategies with step-by-step therapy adjustments based on real-time data',
      stats: '85% faster treatment plans',
      color: 'yellow',
      delay: 0.3,
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Lab Results Analysis',
      description: 'Automatically detect critical findings, categorize abnormalities, and generate structured reports',
      stats: '90% faster lab interpretation',
      color: 'red',
      delay: 0.4,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Patient Monitoring',
      description: 'Identify risks of deterioration, anticipate complications, and recommend proactive interventions',
      stats: '40% reduction in readmissions',
      color: 'teal',
      delay: 0.5,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Medical Coding & Billing',
      description: 'Automate coding with AI-driven precision, supporting ICD-10, CPT, and other standard codes',
      stats: '35% revenue increase',
      color: 'purple',
      delay: 0.6,
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Clinical Guidelines',
      description: 'Access the most up-to-date, evidence-based treatment guidelines adapted to each patient',
      stats: '95% compliance with best practices',
      color: 'yellow',
      delay: 0.7,
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Contingency Planning',
      description: 'Generate real-time contingency plans for high-risk patients with predictive response strategies',
      stats: '60% reduction in adverse events',
      color: 'red',
      delay: 0.8,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Specialty Adaptation',
      description: 'Dynamically adjust AI recommendations based on medical specialty and provider preferences',
      stats: 'Supports 20+ specialties',
      color: 'teal',
      delay: 0.9,
    },
  ];

  const colorClasses = {
    teal: {
      bg: 'bg-[#36b7b5]/10',
      text: 'text-[#36b7b5]',
      hover: 'hover:bg-[#36b7b5]/20',
      border: 'border-[#36b7b5]/20',
      gradient: 'from-[#36b7b5]/80 to-[#36b7b5]/20',
      shadow: 'shadow-[#36b7b5]/20',
    },
    purple: {
      bg: 'bg-[#4b2683]/10',
      text: 'text-[#4b2683]',
      hover: 'hover:bg-[#4b2683]/20',
      border: 'border-[#4b2683]/20',
      gradient: 'from-[#4b2683]/80 to-[#4b2683]/20',
      shadow: 'shadow-[#4b2683]/20',
    },
    yellow: {
      bg: 'bg-[#fccc03]/10',
      text: 'text-[#fccc03]',
      hover: 'hover:bg-[#fccc03]/20',
      border: 'border-[#fccc03]/20',
      gradient: 'from-[#fccc03]/80 to-[#fccc03]/20',
      shadow: 'shadow-[#fccc03]/20',
    },
    red: {
      bg: 'bg-[#e41e3a]/10',
      text: 'text-[#e41e3a]',
      hover: 'hover:bg-[#e41e3a]/20',
      border: 'border-[#e41e3a]/20',
      gradient: 'from-[#e41e3a]/80 to-[#e41e3a]/20',
      shadow: 'shadow-[#e41e3a]/20',
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="relative  overflow-hidden">
      {/* Primary Background */}
      <BackgroundEffects variant="dots" />

      {/* Additional Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#36b7b5]/5 via-white to-[#4b2683]/5" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#36b7b5]/10 to-[#4b2683]/10 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 100, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-[#fccc03]/10 to-[#36b7b5]/10 blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -100, 50],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-primary">16 Intelligent Agents</span>{' '}
            Working Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of medical documentation and diagnostic support with our
            AI-powered platform designed specifically for healthcare professionals.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-full"
            >
              <Card
                className={`h-full transition-all duration-500 relative overflow-hidden apple-card backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border ${
                  colorClasses[feature.color].border
                } ${hoveredCard === index ? `shadow-xl ${colorClasses[feature.color].shadow}` : 'shadow-md'}`}
                style={{
                  transform: hoveredCard === index 
                    ? 'perspective(1000px) rotateX(2deg) translateY(-5px)' 
                    : 'perspective(1000px) rotateX(0deg) translateY(0px)',
                }}
              >
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    colorClasses[feature.color].gradient
                  } opacity-0 ${hoveredCard === index ? 'opacity-5' : ''} transition-opacity duration-500`}
                />

                {/* Animated Glow Effect */}
                {hoveredCard === index && (
                  <motion.div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-sm"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                    }}
                  />
                )}

                {/* Card Content */}
                <div className="p-8 relative z-10">
                  <div
                    className={`mb-6 ${
                      colorClasses[feature.color].text
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        colorClasses[feature.color].bg
                      } ${
                        colorClasses[feature.color].hover
                      } flex items-center justify-center transition-colors duration-300 glass`}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`${colorClasses[feature.color].text} font-semibold`}>
                      {feature.stats}
                    </span>
                    <motion.div
                      className={`w-2 h-2 rounded-full ${colorClasses[feature.color].bg}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <WaitlistDialog
            trigger={
              <Button className="apple-button text-lg px-8 py-6 font-medium">
                Experience All Features
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            }
          />
          
          {/* Feature count indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {features.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index < 3 ? 'bg-[#36b7b5]' : 
                  index < 6 ? 'bg-[#4b2683]' : 
                  index < 8 ? 'bg-[#fccc03]' : 'bg-[#e41e3a]'
                }`}
                animate={{
                  scale: [1, index === hoveredCard ? 1.5 : 1, 1],
                }}
                transition={{
                  duration: 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
