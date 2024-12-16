import { type FC } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { 
  Stethoscope, Brain,  
  
  
  Activity} from 'lucide-react';

type ColorVariant = 'emerald' | 'blue' | 'purple' | 'rose' | 'indigo' | 'cyan';

const Features: FC = () => {
  const features: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
    stats: string;
    color: ColorVariant;
    delay: number;
  }> = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Smart Documentation",
      description: "Convert voice or text input into structured clinical notes with 98% accuracy",
      stats: "70% time savings",
      color: "emerald",
      delay: 0.1
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Diagnostics",
      description: "Evidence-based diagnostic suggestions powered by latest medical research",
      stats: "95% accuracy rate",
      color: "blue",
      delay: 0.2
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Clinical Analysis",
      description: "Advanced pattern recognition for comprehensive patient analysis",
      stats: "85% faster diagnosis",
      color: "purple",
      delay: 0.3
    }
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hover: "hover:bg-emerald-100",
      border: "border-emerald-200"
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hover: "hover:bg-blue-100",
      border: "border-blue-200"
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hover: "hover:bg-purple-100",
      border: "border-purple-200"
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      hover: "hover:bg-rose-100",
      border: "border-rose-200"
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      hover: "hover:bg-indigo-100",
      border: "border-indigo-200"
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      hover: "hover:bg-cyan-100",
      border: "border-cyan-200"
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Primary Background */}
      <BackgroundEffects variant="dots" />
      
      {/* Additional Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 100, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-indigo-400/20 to-blue-400/20 blur-3xl"
          animate={{
            x: [100, -100, 100],
            y: [50, -100, 50],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
          <div className="absolute inset-0 grid grid-cols-6 gap-2">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full bg-gradient-to-b from-blue-500/20 to-purple-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Healthcare with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of medical documentation and diagnostic support with 
            our AI-powered platform designed specifically for healthcare professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
            >
              <Card className={`h-full transition-all duration-300 relative overflow-hidden group backdrop-blur-sm bg-white/50 border-2 ${colorClasses[feature.color as keyof typeof colorClasses].border} hover:shadow-xl hover:shadow-${feature.color}-100/20`}>
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 ${colorClasses[feature.color as keyof typeof colorClasses].bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Card Content */}
                <div className="p-8 relative z-10">
                  <div className={`mb-6 ${colorClasses[feature.color as keyof typeof colorClasses].text}`}>
                    <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses].bg} ${colorClasses[feature.color as keyof typeof colorClasses].hover} flex items-center justify-center transition-colors duration-300`}>
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`${colorClasses[feature.color].text} font-semibold`}>
                      {feature.stats}
                    </span>
                    <motion.div
                      className={`w-2 h-2 rounded-full ${colorClasses[feature.color].text}`}
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
            See Features in Action
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
