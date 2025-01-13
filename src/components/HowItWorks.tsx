import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BackgroundEffects } from '@/components/ui/background-effects';
import { type Step } from '@/types';
import { Mic, Brain, ClipboardCheck, ArrowRight } from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';

const HowItWorks: FC = () => {
  const steps: Step[] = [
    {
      icon: <Mic className="w-10 h-10" />,
      title: 'Voice to Documentation',
      description:
        'Speak naturally while seeing patients. MedAlly converts your voice into precise, structured clinical notes in real-time.',
      color: 'blue',
      features: ['Natural Language Processing', 'Real-time Conversion', 'SOAP Format'],
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI-Powered Analysis',
      description:
        'Get instant diagnostic suggestions, lab interpretations, and evidence-based recommendations as you work.',
      color: 'purple',
      features: ['Diagnostic Support', 'Lab Analysis', 'Treatment Suggestions'],
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: 'Smart Follow-ups',
      description:
        'Automatically generate personalized follow-up plans and monitor patient progress over time.',
      color: 'indigo',
      features: ['Automated Planning', 'Progress Tracking', 'Patient Monitoring'],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <BackgroundEffects variant="grid3d" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
            How It Works
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Your Voice. Your Workflow. Powered by AI.
          </h2>
          <p className="text-lg text-gray-600">
            Transform your clinical documentation workflow in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 hidden lg:block -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-lg z-10">
                  {index + 1}
                </div>

                <Card className="p-6 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-${step.color}-50 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{step.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${step.color}-500 to-${step.color}-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <WaitlistDialog
            trigger={
              <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                See It In Action
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
