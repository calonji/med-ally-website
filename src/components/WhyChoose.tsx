import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { 
  Clock, CheckCircle2, HeartPulse, Smile, 
  Shield, Sparkles 
} from 'lucide-react';

const WhyChoose: FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automate repetitive documentation tasks so you can see more patients.",
      stats: "70% faster",
      color: "blue"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Increase Accuracy",
      description: "AI ensures your notes are complete and compliant with clinical standards.",
      stats: "99% accurate",
      color: "green"
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Improve Care Quality",
      description: "Gain diagnostic insights and actionable treatment recommendations.",
      stats: "85% better outcomes",
      color: "purple"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Reduce Burnout",
      description: "Eliminate after-hours charting and focus on your well-being.",
      stats: "90% satisfaction",
      color: "rose"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhance Patient Safety",
      description: "Never miss a critical lab result or follow-up.",
      stats: "100% follow-up rate",
      color: "indigo"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Boost Revenue",
      description: "Optimize coding and billing while seeing more patients per day.",
      stats: "30% increase",
      color: "amber"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <BackgroundEffects variant="grid3d" />
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
            Benefits
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Why Choose MedAlly?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the transformative power of AI-driven healthcare solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 h-full bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-500/20 flex flex-col">
                {/* Icon Section */}
                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${benefit.color}-500`}>
                    {benefit.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                </div>

                {/* Stats Section */}
                <div className={`text-sm font-semibold text-${benefit.color}-600 flex items-center gap-2 mt-auto pt-4 border-t border-gray-100`}>
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
      </div>
    </section>
  );
};

export default WhyChoose; 