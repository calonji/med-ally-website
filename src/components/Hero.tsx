import { type FC } from 'react';
import { motion } from 'framer-motion';
import { BackgroundEffects } from '@/components/ui/background-effects';
import WaitlistDialog from './WaitlistDialog';

const Hero: FC = () => {
  return (
    <section
      id="hero"
      role="banner"
      aria-label="Main hero section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundEffects variant="gradient" />

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* DNA Helix Animation */}
        <div className="absolute top-1/4 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-xl" />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Spend More Time with Patients,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Not Paperwork
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            MedAlly is your AI-powered clinical assistant that simplifies documentation, enhances
            diagnostic accuracy, and supports better patient outcomes—all in one easy-to-use
            platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <WaitlistDialog className="text-lg px-8 py-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
