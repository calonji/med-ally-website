import { type FC, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { 
  Clock, 
  CheckCircle2, 
  Heart, 
  Smile, 
  ShieldCheck, 
  TrendingUp,
  BarChart4,
  Users,
  Zap
} from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';
import { Button } from '@/components/ui/button';

const Benefits: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Automate repetitive documentation tasks so you can see more patients.",
      color: "teal",
      stats: "70%",
      statsLabel: "less documentation time",
      chartData: [30, 40, 50, 70, 90]
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Increase Accuracy",
      description: "AI ensures your notes are complete and compliant with clinical standards.",
      color: "purple",
      stats: "93%",
      statsLabel: "diagnostic accuracy",
      chartData: [75, 80, 85, 90, 93]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Improve Care Quality",
      description: "Gain diagnostic insights and actionable treatment recommendations.",
      color: "yellow",
      stats: "85%",
      statsLabel: "better patient outcomes",
      chartData: [50, 60, 70, 80, 85]
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Reduce Burnout",
      description: "Eliminate after-hours charting and focus on your well-being.",
      color: "red",
      stats: "90%",
      statsLabel: "physician satisfaction",
      chartData: [40, 55, 70, 85, 90]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enhance Patient Safety",
      description: "Never miss a critical lab result or follow-up with AI-powered monitoring.",
      color: "teal",
      stats: "100%",
      statsLabel: "follow-up rate",
      chartData: [80, 85, 90, 95, 100]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Revenue",
      description: "Optimize coding and billing while seeing more patients per day.",
      color: "purple",
      stats: "35%",
      statsLabel: "revenue increase",
      chartData: [10, 15, 20, 25, 35]
    }
  ];

  const colorClasses = {
    teal: {
      bg: 'bg-[#36b7b5]/10',
      text: 'text-[#36b7b5]',
      hover: 'hover:bg-[#36b7b5]/20',
      border: 'border-[#36b7b5]/20',
      gradient: 'from-[#36b7b5]/80 to-[#36b7b5]/20',
      shadow: 'shadow-[#36b7b5]/20',
      fill: 'fill-[#36b7b5]',
      stroke: 'stroke-[#36b7b5]'
    },
    purple: {
      bg: 'bg-[#4b2683]/10',
      text: 'text-[#4b2683]',
      hover: 'hover:bg-[#4b2683]/20',
      border: 'border-[#4b2683]/20',
      gradient: 'from-[#4b2683]/80 to-[#4b2683]/20',
      shadow: 'shadow-[#4b2683]/20',
      fill: 'fill-[#4b2683]',
      stroke: 'stroke-[#4b2683]'
    },
    yellow: {
      bg: 'bg-[#fccc03]/10',
      text: 'text-[#fccc03]',
      hover: 'hover:bg-[#fccc03]/20',
      border: 'border-[#fccc03]/20',
      gradient: 'from-[#fccc03]/80 to-[#fccc03]/20',
      shadow: 'shadow-[#fccc03]/20',
      fill: 'fill-[#fccc03]',
      stroke: 'stroke-[#fccc03]'
    },
    red: {
      bg: 'bg-[#e41e3a]/10',
      text: 'text-[#e41e3a]',
      hover: 'hover:bg-[#e41e3a]/20',
      border: 'border-[#e41e3a]/20',
      gradient: 'from-[#e41e3a]/80 to-[#e41e3a]/20',
      shadow: 'shadow-[#e41e3a]/20',
      fill: 'fill-[#e41e3a]',
      stroke: 'stroke-[#e41e3a]'
    }
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

  // Function to render mini bar chart
  const renderBarChart = (data: number[], color: keyof typeof colorClasses) => {
    const max = Math.max(...data);
    const barWidth = 100 / data.length;
    
    return (
      <div className="h-16 w-full mt-4 flex items-end justify-between gap-1">
        {data.map((value, i) => (
          <motion.div
            key={i}
            className={`${colorClasses[color].bg} rounded-t-sm relative group`}
            style={{ width: `${barWidth - 5}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${(value / max) * 100}%` }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              ease: "easeOut" 
            }}
          >
            <motion.div 
              className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${colorClasses[color].text} text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap`}
            >
              {value}%
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="benefits" className="relative  overflow-hidden">
      <BackgroundEffects variant="mesh" />
      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(54,183,181,0.1) 0%, rgba(75,38,131,0.05) 70%, rgba(255,255,255,0) 100%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(252,204,3,0.1) 0%, rgba(228,30,58,0.05) 70%, rgba(255,255,255,0) 100%)',
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(54,183,181,0.2) 50%, transparent 100%)',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
         
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          <div className="glass dark:glass-dark rounded-xl p-6 text-center">
            <BarChart4 className="w-8 h-8 text-[#36b7b5] mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">70%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Less Documentation Time</div>
          </div>
          <div className="glass dark:glass-dark rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-[#4b2683] mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">93%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Diagnostic Accuracy</div>
          </div>
          <div className="glass dark:glass-dark rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-[#fccc03] mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">35%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Revenue Increase</div>
          </div>
          <div className="glass dark:glass-dark rounded-xl p-6 text-center">
            <Smile className="w-8 h-8 text-[#e41e3a] mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">90%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Physician Satisfaction</div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="h-full"
            >
              <Card 
                className={`h-full transition-all duration-500 relative overflow-hidden apple-card backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border ${
                  colorClasses[benefit.color as keyof typeof colorClasses].border
                } ${activeIndex === index ? `shadow-xl ${colorClasses[benefit.color as keyof typeof colorClasses].shadow}` : 'shadow-md'}`}
                style={{
                  transform: activeIndex === index 
                    ? 'perspective(1000px) rotateX(2deg) translateY(-5px)' 
                    : 'perspective(1000px) rotateX(0deg) translateY(0px)',
                }}
              >
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    colorClasses[benefit.color as keyof typeof colorClasses].gradient
                  } opacity-0 ${activeIndex === index ? 'opacity-5' : ''} transition-opacity duration-500`}
                />

                {/* Animated Glow Effect */}
                {activeIndex === index && (
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

                <div className="p-6 relative z-10">
                  <div className={`mb-6 ${colorClasses[benefit.color as keyof typeof colorClasses].text}`}>
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        colorClasses[benefit.color as keyof typeof colorClasses].bg
                      } ${
                        colorClasses[benefit.color as keyof typeof colorClasses].hover
                      } flex items-center justify-center transition-all duration-300 glass`}
                    >
                      {benefit.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {benefit.description}
                  </p>

                  {/* Mini chart visualization */}
                  {renderBarChart(benefit.chartData, benefit.color as keyof typeof colorClasses)}

                  <div className="mt-4 flex items-center justify-between">
                    <div className={`${colorClasses[benefit.color as keyof typeof colorClasses].text} font-bold text-2xl`}>
                      {benefit.stats}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {benefit.statsLabel}
                    </div>
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
          className="text-center mt-16"
        >
          <WaitlistDialog
            trigger={
              <Button className="apple-button text-lg px-8 py-6 font-medium">
                Experience the Benefits
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            }
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 