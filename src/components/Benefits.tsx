import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { 
  Clock, 
  CheckCircle2, 
  HeartPulse, 
  Smile, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

const Benefits: FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automate repetitive documentation tasks so you can see more patients.",
      color: "blue",
      stats: "70% faster"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Increase Accuracy",
      description: "AI ensures your notes are complete and compliant with clinical standards.",
      color: "green",
      stats: "99% accurate"
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Improve Care Quality",
      description: "Gain diagnostic insights and actionable treatment recommendations.",
      color: "purple",
      stats: "85% better outcomes"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Reduce Burnout",
      description: "Eliminate after-hours charting and focus on your well-being.",
      color: "rose",
      stats: "90% satisfaction"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enhance Patient Safety",
      description: "Never miss a critical lab result or follow-up.",
      color: "indigo",
      stats: "100% follow-up rate"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Boost Revenue",
      description: "Optimize coding and billing while seeing more patients per day.",
      color: "amber",
      stats: "30% revenue increase"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <BackgroundEffects variant="mesh" />
      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Benefits
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose MedAlly?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the transformative power of AI-driven healthcare solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="p-6 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-500/20 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${benefit.color}-500`}>
                    {benefit.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow">
                  {benefit.description}
                </p>

                <div className={`text-sm font-semibold text-${benefit.color}-600 flex items-center gap-2`}>
                  <motion.div
                    className={`w-2 h-2 rounded-full bg-${benefit.color}-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {benefit.stats}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="#demo" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            See Benefits in Action
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 