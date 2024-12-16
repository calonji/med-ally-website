import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MedicalIcons, FeatureIcons, Icon3D } from "@/components/ui/medical-icons"
import { BackgroundEffects } from "@/components/ui/background-effects"
// import { cn } from "@/lib/utils"
import { type Step } from '@/types'

const HowItWorks: FC = () => {
  const steps: Step[] = [
    {
      icon: <MedicalIcons.AI className="w-8 h-8" />,
      title: "Automate Documentation",
      description: "Speak naturally, and let MedAlly convert your voice into precise, structured clinical notes.",
      color: "blue",
      features: [
        "Save Time",
        "Increase Accuracy",
        "Eliminate Burnout"
      ]
    },
    {
      icon: <MedicalIcons.Brain className="w-8 h-8" />,
      title: "Enhance Diagnostics",
      description: "Receive ranked differential diagnoses, lab result analyses, and evidence-based recommendations in real time",
      color: "purple",
      features: [
        "Boost Accuracy",
        "Save Lives",
        "Gain Confidence"
      ]
    },
    {
      icon: <FeatureIcons.Integration className="w-8 h-8" />,
      title: "Streamline Patient Care",
      description: "Plan follow-ups, personalize treatments, and ensure compliance—all in one platformm",
      color: "indigo",
      features: [
        "Personalize Treatments",
        "Improve Efficiency",
        "Stay Compliant"
      ]
    }
  ]

  // const features: Feature[] = [
  //   {
  //     title: "Smart Templates",
  //     description: "Pre-built templates for common scenarios",
  //     icon: <FeatureIcons.Analytics className="w-6 h-6" />,
  //     color: "emerald"
  //   },
  //   {
  //     title: "Real-time Collaboration",
  //     description: "Work together with your team seamlessly",
  //     icon: <MedicalIcons.Pulse className="w-6 h-6" />,
  //     color: "blue"
  //   },
  //   {
  //     title: "Automated Coding",
  //     description: "Automatic ICD-10 and CPT code suggestions",
  //     icon: <MedicalIcons.DNA className="w-6 h-6" />,
  //     color: "purple"
  //   }
  // ]

  // const renderCheckIcon = () => (
  //   <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24">
  //     <path 
  //       stroke="currentColor" 
  //       strokeWidth="2" 
  //       strokeLinecap="round" 
  //       strokeLinejoin="round" 
  //       d="M5 13l4 4L19 7" 
  //     />
    // </svg>
  // )

  const renderArrowIcon = () => (
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M14 5l7 7m0 0l-7 7m7-7H3" 
      />
    </svg>
  )

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <BackgroundEffects variant="grid3d" />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        
        {/* Animated Dots */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Lines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px"
              style={{
                top: `${30 + i * 20}%`,
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                transform: 'rotate(-5deg)',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Radial Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-100/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-purple-100/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Voice. Your Workflow. Powered by AI.
          </h2>
          <p className="text-lg text-gray-600">
            Transform your clinical documentation workflow in three simple steps
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          {/* Connecting Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 hidden md:block" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <Card className="relative bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <div className="mb-6">
                    <Icon3D 
                      icon={step.icon}
                      color={step.color}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>

                  {/* <ul className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-700"
                        whileHover={{ x: 4 }}
                      >
                        {renderCheckIcon()}
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                {
                  'bg-emerald-100': feature.color === 'emerald',
                  'bg-blue-100': feature.color === 'blue',
                  'bg-purple-100': feature.color === 'purple'
                }
              )}>
                <div className={cn(
                  {
                    'text-emerald-600': feature.color === 'emerald',
                    'text-blue-600': feature.color === 'blue',
                    'text-purple-600': feature.color === 'purple'
                  }
                )}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div> */}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#demo"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            See It In Action
            {renderArrowIcon()}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
