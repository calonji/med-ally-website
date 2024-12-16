import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Microscope, 
  Dna, 
  Workflow, 
  Sparkles,
  BookOpen
} from 'lucide-react';

type ColorVariant = 'blue' | 'purple' | 'emerald' | 'rose' | 'amber' | 'indigo';

const AICapabilities: FC = () => {
  const capabilities: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
    stats: string;
    color: ColorVariant;
    delay: number;
  }> = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Advanced understanding of medical terminology and context with multi-language support",
      stats: "45+ languages",
      color: "blue",
      delay: 0.1
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Clinical Decision Support",
      description: "Evidence-based recommendations drawing from latest medical research and guidelines",
      stats: "99.9% accuracy",
      color: "purple",
      delay: 0.2
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Pattern Recognition",
      description: "Identify complex medical patterns and correlations across patient data",
      stats: "85% faster",
      color: "emerald",
      delay: 0.3
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline clinical documentation and reporting processes automatically",
      stats: "70% time saved",
      color: "rose",
      delay: 0.4
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast patient outcomes and identify potential risks early",
      stats: "90% accuracy",
      color: "amber",
      delay: 0.5
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Self-improving system that learns from new medical data and user feedback",
      stats: "Daily updates",
      color: "indigo",
      delay: 0.6
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "hover:bg-blue-100",
      border: "border-blue-200",
      shadow: "shadow-blue-100/20"
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hover: "hover:bg-purple-100",
      border: "border-purple-200",
      shadow: "shadow-purple-100/20"
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hover: "hover:bg-emerald-100",
      border: "border-emerald-200",
      shadow: "shadow-emerald-100/20"
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      hover: "hover:bg-rose-100",
      border: "border-rose-200",
      shadow: "shadow-rose-100/20"
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      hover: "hover:bg-amber-100",
      border: "border-amber-200",
      shadow: "shadow-amber-100/20"
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      hover: "hover:bg-indigo-100",
      border: "border-indigo-200",
      shadow: "shadow-indigo-100/20"
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundEffects variant="grid3d" />
      
      {/* Neural Network Animation Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80" />
        
        {/* Animated Neural Connections */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[100px] bg-gradient-to-b from-blue-400/20 to-purple-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              height: ['100px', '150px', '100px'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            AI Capabilities
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by Advanced AI Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge AI capabilities transform healthcare delivery through 
            intelligent automation and clinical decision support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: capability.delay }}
            >
              <Card 
                className={`h-full transition-all duration-300 relative overflow-hidden group 
                  backdrop-blur-sm bg-white/50 border-2 ${colorClasses[capability.color].border} 
                  hover:shadow-xl hover:shadow-${colorClasses[capability.color].shadow}`}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 ${colorClasses[capability.color].bg} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                />
                
                {/* Card Content */}
                <div className="p-8 relative z-10">
                  <div className={`mb-6 ${colorClasses[capability.color].text}`}>
                    <div className={`w-14 h-14 rounded-xl ${colorClasses[capability.color].bg} 
                      ${colorClasses[capability.color].hover} flex items-center justify-center 
                      transition-colors duration-300`}
                    >
                      {capability.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {capability.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {capability.description}
                  </p>

                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`${colorClasses[capability.color].text} font-semibold`}>
                      {capability.stats}
                    </span>
                    <motion.div
                      className={`w-2 h-2 rounded-full ${colorClasses[capability.color].text}`}
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
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#demo" 
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            See AI in Action
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AICapabilities; 