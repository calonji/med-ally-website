// @ts-nocheck
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Stethoscope, Brain, FileText, Clock, BarChart3, Shield } from 'lucide-react';

const Hero: FC = () => {
  // Animation variants for floating icons
  const floatingIconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (custom: number) => ({
      opacity: 0.8,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
    float: (custom: number) => ({
      y: [0, -15, 0],
      rotate: [0, custom % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 5 + custom,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  // Icons with positions
  const floatingIcons = [
    { icon: <Stethoscope size={32} />, top: '15%', left: '10%', delay: 0 },
    { icon: <Brain size={32} />, top: '25%', right: '15%', delay: 1 },
    { icon: <FileText size={32} />, bottom: '30%', left: '15%', delay: 2 },
    { icon: <Clock size={32} />, top: '60%', right: '10%', delay: 3 },
    { icon: <BarChart3 size={32} />, bottom: '15%', left: '30%', delay: 4 },
    { icon: <Shield size={32} />, top: '40%', left: '75%', delay: 5 },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#36b7b5] via-[#2a7c9e] to-[#4b2683] min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Floating blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-white opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-[#36b7b5] opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#4b2683] opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/80 z-10"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          initial="initial"
          animate={['animate', 'float']}
          custom={item.delay}
          variants={floatingIconVariants}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-24 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MedAlly – Simplify Workflows. Empower Care.
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing Healthcare with AI – Smarter, Faster, More Efficient
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            16 AI-powered agents automate clinical workflows, reduce administrative burden, and
            enhance patient care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://app.medally.ai/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
              >
                Get Started for Free
              </Button>
            </a>

            <a href="https://www.calonji.com/contact" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#e41e3a] hover:bg-[#c91931] text-white transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-8 text-white/70 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            HIPAA Compliant • No Credit Card Required
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
